import { BehaviorSubject } from 'rxjs';
import { TEXTURES } from 'src/assets/resources/textures';
import { SnakeModel } from './snake-model';
import { BaseCanvas } from './base-canvas';
import { IGameState } from './game-state.interface';

export class GameModel extends BaseCanvas {
  private snake: SnakeModel;

  private gameStateSubject$: BehaviorSubject<IGameState> = new BehaviorSubject<IGameState>({ paused: false, score: 0, ended: false });

  public gameState$ = this.gameStateSubject$.asObservable();

  public frameDecrement: number = 20;

  public sizeMultiplier: number = 0;

  public canvasDimensions = {
    width: 0,
    height: 0,
  };

  constructor(
    canvas: HTMLCanvasElement,
    snake: SnakeModel,
  ) {
    super();
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d')!;
    this.snake = snake;

    this.canvasDimensions.width = this.canvas.width - this.frameDecrement;
    this.canvasDimensions.height = this.canvas.height - this.frameDecrement;
  }

  private drawCanvas() {
    const canvasTexture = new Image(
      TEXTURES.backgroundTexture.width,
      TEXTURES.backgroundTexture.height,
    );
    canvasTexture.src = TEXTURES.backgroundTexture.source;

    this.canvasContext.drawImage(
      canvasTexture,
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );

    this.canvasContext.save();
    const gameFrameTexture = new Image(
      TEXTURES.gameFrameTexture.width,
      TEXTURES.gameFrameTexture.height,
    );
    gameFrameTexture.src = TEXTURES.gameFrameTexture.source;
    this.canvasContext.translate(
      this.canvas.width / 2,
      this.canvas.height / 2,
    );
    this.canvasContext.drawImage(
      gameFrameTexture,
      -(this.canvasDimensions.width / 2),
      -(this.canvasDimensions.height / 2),
      this.canvasDimensions.width,
      this.canvasDimensions.height,
    );
    this.canvasContext.restore();
  }

  private checkGameState() {
    const snakeHead = this.snake.snakeBody[0];
    for (let i = 1, len = this.snake.snakeBody.length; i < len; i += 1) {
      const hasCollidedWithItself = this.snake.snakeBody[i].x === snakeHead.x
        && this.snake.snakeBody[i].y === snakeHead.y;

      if (hasCollidedWithItself) {
        this.setGameFinished(true);
      }
    }

    const frameBoundary = this.frameDecrement / 2;
    const frameMinPosition = this.sizeMultiplier * frameBoundary;

    const hasHitLeftBorder = snakeHead.x <= this.sizeMultiplier * frameBoundary;
    const hasHitTopBorder = snakeHead.y <= this.sizeMultiplier * frameBoundary;

    const hasHitRightBorder = snakeHead.x > this.canvasDimensions.width + frameMinPosition;
    const hasHitBottomBorder = snakeHead.y > this.canvasDimensions.height + frameMinPosition;

    const isGameFinished = hasHitBottomBorder || hasHitTopBorder || hasHitRightBorder || hasHitLeftBorder;
    this.setGameFinished(isGameFinished);
  }

  public handleKeyPress(ev: KeyboardEvent) {
    if (this.gameState.ended) return;

    const keyPressed = ev.code;
    ev.preventDefault();

    if (keyPressed === 'Space') {
      this.gameStateSubject$.next({ ...this.gameStateSubject$.value, paused: !this.gameState.paused });
      if (!this.gameState.paused) {
        this.renderGame();
      }
    } else {
      this.snake.changeDirection(ev);
    }
  }

  public renderGame() {
    setTimeout(() => {
      this.drawCanvas();

      this.checkGameState();
      if (this.gameState.ended) return;

      this.snake.food.drawFood(false);
      this.snake.drawSnake();

      if (this.gameState.paused) return;

      this.snake.moveSnake();
      this.renderGame();
    }, this.snake.speed);
  }

  public get gameState() {
    return this.gameStateSubject$.value;
  }

  public setGameFinished(ended: boolean) {
    return this.gameStateSubject$.next({ ...this.gameStateSubject$.value, ended });
  }

  public setScore(score: number) {
    this.gameStateSubject$.next({ ...this.gameStateSubject$.value, score });
  }
}
