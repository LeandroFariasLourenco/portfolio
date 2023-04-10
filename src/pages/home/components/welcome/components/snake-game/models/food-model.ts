import randomNumber from 'src/core/functions/random-number';
import { textures } from 'src/assets/resources/textures';
import { BaseCanvas } from './base-canvas';

export class FoodModel extends BaseCanvas {
  randomTexture = randomNumber(textures.fruitTextures.length);

  texture = new Image(
    textures.fruitTextures[this.randomTexture].width,
    textures.fruitTextures[this.randomTexture].height,
  );

  public positionY: number;

  public positionX: number;

  constructor(canvas: HTMLCanvasElement, px: number, py: number) {
    super();
    this.positionY = py;
    this.positionX = px;
    this.canvas = canvas;
    this.canvasContext = canvas.getContext('2d')!;
    this.texture.src = textures.fruitTextures[
      this.randomTexture
    ].source;
  }

  drawFood(shouldRenderNewTexture: boolean) {
    if (shouldRenderNewTexture) {
      const newRandomTexture = randomNumber(textures.fruitTextures.length);

      this.texture.height = textures.fruitTextures[newRandomTexture].height;
      this.texture.width = textures.fruitTextures[newRandomTexture].width;
      this.texture.src = textures.fruitTextures[newRandomTexture].source;
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
