import { TEXTURES } from 'src/assets/resources/textures';
import randomNumber from 'src/core/functions/random-number';
import { GameModel } from './game-model';

export class FoodModel {
  public randomTexture = randomNumber(TEXTURES.fruitTextures.length);

  public texture = new Image(
    TEXTURES.fruitTextures[this.randomTexture].width,
    TEXTURES.fruitTextures[this.randomTexture].height,
  );

  public positionY: number;

  public positionX: number;

  private game: GameModel;

  private arenaPadding: number = 20;

  constructor(game: GameModel) {
    this.game = game;
    this.positionY = this.generateFoodPosition(this.game.canvas.height - this.arenaPadding * 2);
    this.positionX = this.generateFoodPosition(this.game.canvas.width - this.arenaPadding * 2);
    this.texture.src = TEXTURES.fruitTextures[
      this.randomTexture
    ].source;
  }

  private generateFoodPosition(max: number, min: number = 0) {
    const range = max - min;
    return Math.round((Math.random() * range + min) / 10) * 10;
  }

  public drawFood(shouldRenderNewTexture: boolean) {
    if (shouldRenderNewTexture) {
      const newRandomTexture = randomNumber(TEXTURES.fruitTextures.length);

      this.texture.height = TEXTURES.fruitTextures[newRandomTexture].height;
      this.texture.width = TEXTURES.fruitTextures[newRandomTexture].width;
      this.texture.src = TEXTURES.fruitTextures[newRandomTexture].source;

      this.positionX = this.generateFoodPosition(this.game.arenaDimensions.width - this.arenaPadding, this.game.canvas.width - this.game.arenaDimensions.width);
      this.positionY = this.generateFoodPosition(this.game.arenaDimensions.height - this.arenaPadding, this.game.canvas.height - this.game.arenaDimensions.height);
    }

    this.game.canvasContext.drawImage(
      this.texture,
      this.positionX - 5,
      this.positionY - 5,
      this.texture.width,
      this.texture.height,
    );
  }
}
