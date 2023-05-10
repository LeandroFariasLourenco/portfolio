import { TEXTURES } from '../assets/textures';
import { FoodModel } from './food-model';
import { GameModel } from './game-model';
import {
  ISnakeBodyPosition,
  ESnakeDirectionAngle,
  ESnakeDirection,
} from './interfaces';

export class SnakeModel {
  private snakeHeadTexture = new Image(
    TEXTURES.snakeHeadTexture.width,
    TEXTURES.snakeHeadTexture.height,
  );

  private snakeBodyTexture = new Image(
    TEXTURES.snakeBodyTexture.width,
    TEXTURES.snakeBodyTexture.height,
  );

  private score!: number;

  private direction!: ESnakeDirection;

  private distanceX!: number;

  private distanceY!: number;

  private readonly INITIAL_SPEED = 95;

  private readonly SPEED_DECREMENT = 5;

  private readonly MINIMUM_SPEED = 45;

  private game: GameModel;

  public food: FoodModel;

  public speed = this.INITIAL_SPEED;

  public bodyPosition: ISnakeBodyPosition[] = [];

  public setupInitialState(): void {
    this.speed = this.INITIAL_SPEED;
    this.distanceX = 10;
    this.distanceY = 0;
    this.direction = ESnakeDirection.RIGHT;
    this.score = 0;
    this.bodyPosition = [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ];
  }

  constructor(
    game: GameModel,
  ) {
    this.game = game;
    this.food = new FoodModel(game);

    this.snakeBodyTexture.src = TEXTURES.snakeBodyTexture.source;
    this.snakeHeadTexture.src = TEXTURES.snakeHeadTexture.source;
    this.setupInitialState();
  }

  private setGameDirection(x: number, y: number, direction: ESnakeDirection) {
    this.distanceX = x;
    this.distanceY = y;
    this.direction = direction;
  }

  public drawSnake() {
    this.bodyPosition.forEach(({ x, y }) => {
      this.game.canvasContext.drawImage(
        this.snakeBodyTexture,
        x,
        y,
        10,
        10,
      );
    });

    this.game.canvasContext.save();

    let angle!: ESnakeDirectionAngle;
    if (this.direction) {
      switch (this.direction) {
        case ESnakeDirection.LEFT:
          angle = ESnakeDirectionAngle.LEFT;
          break;
        case ESnakeDirection.RIGHT:
          angle = ESnakeDirectionAngle.RIGHT;
          break;
        case ESnakeDirection.UP:
          angle = ESnakeDirectionAngle.UP;
          break;
        case ESnakeDirection.DOWN:
          angle = ESnakeDirectionAngle.DOWN;
          break;
        default:
          angle = ESnakeDirectionAngle.UP;
          break;
      }
    }

    const radianDegree = Math.PI / 180;
    this.game.canvasContext.translate(this.bodyPosition[0].x, this.bodyPosition[0].y);
    this.game.canvasContext.translate(
      this.snakeHeadTexture.width / 2,
      this.snakeHeadTexture.height / 2,
    );

    this.game.canvasContext.rotate(angle * radianDegree);

    this.game.canvasContext.drawImage(
      this.snakeHeadTexture,
      -(this.snakeHeadTexture.width / 2),
      -(this.snakeHeadTexture.height / 2),
      this.snakeHeadTexture.width,
      this.snakeHeadTexture.height,
    );

    this.game.canvasContext.rotate(0.5);
    this.game.canvasContext.restore();
  }

  public moveSnake() {
    const newSnakeHead = {
      x: this.bodyPosition[0].x + this.distanceX,
      y: this.bodyPosition[0].y + this.distanceY,
    };
    this.bodyPosition.unshift(newSnakeHead);
    const hasEatenFood = newSnakeHead.x === this.food.positionX
      && newSnakeHead.y === this.food.positionY;

    if (hasEatenFood && this.speed - this.SPEED_DECREMENT > this.MINIMUM_SPEED) {
      this.speed -= this.SPEED_DECREMENT;
    }

    if (hasEatenFood
      && (this.game.arenaDimensions.height - this.SPEED_DECREMENT > 260 || this.game.arenaDimensions.width - 20 > 360)) {
      this.game.arenaDimensions.width -= this.game.arenaDecrement;
      this.game.arenaDimensions.height -= this.game.arenaDecrement;
      this.game.sizeMultiplier += 1;
    }

    if (!hasEatenFood) {
      this.bodyPosition.pop();
    } else {
      this.food.drawFood(true);

      if (this.game.sizeMultiplier > 8) {
        this.game.setScore(this.score += (8 * 5));
      }
      this.game.setScore(this.score += (this.game.sizeMultiplier * 5));
    }
  }

  public changeDirection(ev: KeyboardEvent) {
    if (this.game.gameState.paused) {
      return;
    }

    const keyPressed = ev.key.toLowerCase();
    const left = ['a', 'arrowleft'];
    const right = ['d', 'arrowright'];
    const up = ['w', 'arrowup'];
    const down = ['s', 'arrowdown'];

    const goingUp = this.distanceY === -10;
    const goingDown = this.distanceY === 10;

    const goingRight = this.distanceX === 10;
    const goingLeft = this.distanceX === -10;

    if (left.includes(keyPressed) && !goingRight) {
      this.setGameDirection(-10, 0, ESnakeDirection.LEFT);
      return;
    }

    if (up.includes(keyPressed) && !goingDown) {
      this.setGameDirection(0, -10, ESnakeDirection.UP);
      return;
    }

    if (right.includes(keyPressed) && !goingLeft) {
      this.setGameDirection(10, 0, ESnakeDirection.RIGHT);
      return;
    }

    if (down.includes(keyPressed) && !goingUp) {
      this.setGameDirection(0, 10, ESnakeDirection.DOWN);
    }
  }
}
