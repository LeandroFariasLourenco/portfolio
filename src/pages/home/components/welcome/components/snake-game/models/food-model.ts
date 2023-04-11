import randomNumber from 'src/core/functions/random-number';
import { TEXTURES } from 'src/assets/resources/textures';
import { BaseCanvas } from './base-canvas';

export class FoodModel extends BaseCanvas {
  randomTexture = randomNumber(TEXTURES.fruitTextures.length);

  texture = new Image(
    TEXTURES.fruitTextures[this.randomTexture].width,
    TEXTURES.fruitTextures[this.randomTexture].height,
  );

  public positionY: number;

  public positionX: number;

  constructor(canvas: HTMLCanvasElement, px: number, py: number) {
    super();
    this.positionY = py;
    this.positionX = px;
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d')!;
    this.texture.src = TEXTURES.fruitTextures[
      this.randomTexture
    ].source;
  }

  drawFood(shouldRenderNewTexture: boolean) {
    if (shouldRenderNewTexture) {
      const newRandomTexture = randomNumber(TEXTURES.fruitTextures.length);

      this.texture.height = TEXTURES.fruitTextures[newRandomTexture].height;
      this.texture.width = TEXTURES.fruitTextures[newRandomTexture].width;
      this.texture.src = TEXTURES.fruitTextures[newRandomTexture].source;
    }

    this.canvasContext.drawImage(
      this.texture,
      this.positionX - 5,
      this.positionY - 5,
      this.texture.width,
      this.texture.height,
    );
  }
}
