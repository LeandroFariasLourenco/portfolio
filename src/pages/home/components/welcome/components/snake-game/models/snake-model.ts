import { TEXTURES } from 'src/assets/resources/textures';
import { BaseCanvas } from './base-canvas';
import { FoodModel } from './food-model';
import { GameModel } from './game-model';
import { ESnakeDirectionAngle } from './snake-direction-angles.enum';
import { ESnakeDirection } from './snake-direction.enum';

export class SnakeModel extends BaseCanvas {
  private snakeHeadTexture = new Image(
    TEXTURES.snakeHeadTexture.width,
    TEXTURES.snakeHeadTexture.height,
  );

  private snakeBodyTexture = new Image(
    TEXTURES.snakeBodyTexture.width,
    TEXTURES.snakeBodyTexture.height,
  );

  private score = 0;

  private direction: ESnakeDirection = ESnakeDirection.RIGHT;

  private distanceX = 10;

  private distanceY = 0;

  private readonly INITIAL_SPEED = 100;

  private readonly SPEED_DECREMENT = 10;

  private readonly MINIMUM_SPEED = 20;

  private game: GameModel;

  public food: FoodModel;

  public speed = this.INITIAL_SPEED;

  public snakeBody = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 },
  ];

  constructor(
    canvas: HTMLCanvasElement,
  ) {
    super();
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d')!;
    this.food = new FoodModel(
      canvas,
      this.generateFoodPosition(this.canvas.width - 20),
      this.generateFoodPosition(this.canvas.height - 20),
    );

    this.snakeBodyTexture.src = TEXTURES.snakeBodyTexture.source;
    this.snakeHeadTexture.src = TEXTURES.snakeHeadTexture.source;
  }

  private generateFoodPosition(max: number, min: number = 0) {
    const range = max - min;
    return Math.round((Math.random() * range + min) / 10) * 10;
  }

  private setGameDirection(x: number, y: number, direction: ESnakeDirection) {
    this.distanceX = x;
    this.distanceY = y;
    this.direction = direction;
  }

  public drawSnake() {
    this.snakeBody.forEach(({ x, y }) => {
      this.canvasContext.drawImage(
        this.snakeBodyTexture,
        x,
        y,
        10,
        10,
      );
    });

    this.canvasContext.save();

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
    this.canvasContext.translate(this.snakeBody[0].x, this.snakeBody[0].y);
    this.canvasContext.translate(
      this.snakeHeadTexture.width / 2,
      this.snakeHeadTexture.height / 2,
    );

    this.canvasContext.rotate(angle * radianDegree);

    this.canvasContext.drawImage(
      this.snakeHeadTexture,
      -(this.snakeHeadTexture.width / 2),
      -(this.snakeHeadTexture.height / 2),
      this.snakeHeadTexture.width,
      this.snakeHeadTexture.height,
    );

    this.canvasContext.rotate(0.5);
    this.canvasContext.restore();
  }

  public moveSnake() {
    const newSnakeHead = {
      x: this.snakeBody[0].x + this.distanceX,
      y: this.snakeBody[0].y + this.distanceY,
    };
    this.snakeBody.unshift(newSnakeHead);
    const hasEatenFood = newSnakeHead.x === this.food.positionX
      && newSnakeHead.y === this.food.positionY;

    if (hasEatenFood && this.speed - this.SPEED_DECREMENT > this.MINIMUM_SPEED) {
      this.speed -= this.SPEED_DECREMENT;
    }

    if (hasEatenFood
      && (this.game.canvasDimensions.height - this.SPEED_DECREMENT > 260 || this.game.canvasDimensions.width - 20 > 360)) {
      this.game.canvasDimensions.width -= this.game.frameDecrement;
      this.game.canvasDimensions.height -= this.game.frameDecrement;
      this.game.sizeMultiplier += 1;
    }

    if (!hasEatenFood) {
      this.snakeBody.pop();
    } else {
      const minPosition = this.game.sizeMultiplier * this.SPEED_DECREMENT + 20;

      this.food.positionX = this.generateFoodPosition(this.game.canvasDimensions.width - 20, minPosition);
      this.food.positionY = this.generateFoodPosition(this.game.canvasDimensions.height - 20, minPosition);
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

  set snakeFrame(Game: GameModel) {
    this.game = Game;
  }
}
