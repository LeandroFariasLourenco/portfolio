import snakeHeadTexture from 'src/assets/textures/snake-head.png';
import snakeBodyTexture from 'src/assets/textures/snake-body.jpg';

import gameBackgroundTexture from 'src/assets/textures/game-background.gif';
import gameFrameTexture from 'src/assets/textures/game-frame.jpg';

import watermelonTexture from 'src/assets/textures/watermelon.png';
import melonTexture from 'src/assets/textures/melon.png';
import strawberryTexture from 'src/assets/textures/strawberry.png';
import appleTexture from 'src/assets/textures/apple.png';
import cherryTexture from 'src/assets/textures/cherry.png';
import bananaTexture from 'src/assets/textures/banana.png';

export const textures = {
  snakeHeadTexture: {
    width: 10,
    height: 10,
    source: snakeHeadTexture,
  },
  backgroundTexture: {
    width: 20,
    height: 20,
    source: gameBackgroundTexture,
  },
  gameFrameTexture: {
    width: 20,
    height: 20,
    source: gameFrameTexture,
  },
  fruitTextures:
    [
      {
        name: 'apple',
        width: 20,
        height: 20,
        source: appleTexture,
      },
      {
        name: 'cherry',
        width: 20,
        height: 20,
        source: cherryTexture,
      },
      {
        name: 'banana',
        width: 20,
        height: 20,
        source: bananaTexture,
      },
      {
        name: 'melon',
        width: 20,
        height: 20,
        source: melonTexture,
      },
      {
        name: 'watermelon',
        width: 20,
        height: 20,
        source: watermelonTexture,
      },
      {
        name: 'strawberry',
        width: 30,
        height: 20,
        source: strawberryTexture,
      },
    ],
  snakeBodyTexture: {
    width: 20,
    height: 20,
    source: snakeBodyTexture,
  },
};
