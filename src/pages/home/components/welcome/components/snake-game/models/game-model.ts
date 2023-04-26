import { BehaviorSubject } from 'rxjs';
import { TEXTURES } from 'src/assets/resources/textures';
import { SnakeModel } from './snake-model';
import { BaseCanvas } from './base-canvas';
import { IGameState } from './interfaces/game-state.interface';

export class GameModel extends BaseCanvas {
  public snake: SnakeModel;

  private gameStateSubject$: BehaviorSubject<IGameState> = new BehaviorSubject<IGameState>({ paused: false, score: 0, ended: false });

  public gameState$ = this.gameStateSubject$.asObservable();

  public arenaDecrement: number = 20;

  public sizeMultiplier: number = 0;

  public arenaDimensions = {
    width: 0,
    height: 0,
  };

  constructor(
    canvas: HTMLCanvasElement,
  ) {
    super();
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d')!;
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
      -(this.arenaDimensions.width / 2),
      -(this.arenaDimensions.height / 2),
      this.arenaDimensions.width,
      this.arenaDimensions.height,
    );
    this.canvasContext.restore();
  }

  private checkGameState() {
    const snakeHead = this.snake.bodyPosition[0];
    this.snake.bodyPosition.slice(
      1,
    ).forEach(({ x, y }, index, array) => {
      const hasCollidedWithItself = x === snakeHead.x
        && y === snakeHead.y;

      if (hasCollidedWithItself) {
        this.setGameFinished(true);
        array.splice(0, array.length - 1);
      }
    });
    if (this.gameState.ended) return;

    const frameBoundary = this.arenaDecrement / 2;
    const frameMinPosition = this.sizeMultiplier * frameBoundary;

    const hasHitLeftBorder = snakeHead.x <= this.sizeMultiplier * frameBoundary;
    const hasHitTopBorder = snakeHead.y <= this.sizeMultiplier * frameBoundary;

    const hasHitRightBorder = snakeHead.x > this.arenaDimensions.width + frameMinPosition;
    const hasHitBottomBorder = snakeHead.y > this.arenaDimensions.height + frameMinPosition;

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

      this.snake.drawSnake();
      this.snake.food.drawFood(false);

      if (this.gameState.paused) return;

      this.snake.moveSnake();
      this.renderGame();
    }, this.snake.speed);
  }

  public get gameState() {
    return this.gameStateSubject$.value;
  }

  public setupGame() {
    this.setGameFinished(false);
    this.setScore(0);
    this.sizeMultiplier = 0;
    this.snake.setupInitialState();
    this.arenaDimensions.width = this.canvas.width - this.arenaDecrement;
    this.arenaDimensions.height = this.canvas.height - this.arenaDecrement;
    this.renderGame();
  }

  private setGameFinished(ended: boolean) {
    return this.gameStateSubject$.next({ ...this.gameStateSubject$.value, ended });
  }

  public setScore(score: number) {
    this.gameStateSubject$.next({ ...this.gameStateSubject$.value, score });
  }
}
