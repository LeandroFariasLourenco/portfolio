import { getBucketResource } from 'src/core/functions';

export const TEXTURES = {
  snakeHeadTexture: {
    width: 10,
    height: 10,
    source: getBucketResource('/textures/snake-head.png'),
  },
  backgroundTexture: {
    width: 20,
    height: 20,
    source: getBucketResource('/textures/game-background.gif'),
  },
  gameFrameTexture: {
    width: 20,
    height: 20,
    source: getBucketResource('/textures/game-frame.jpg'),
  },
  fruitTextures:
    [
      {
        name: 'apple',
        width: 20,
        height: 20,
        source: getBucketResource('/textures/apple.png'),
      },
      {
        name: 'cherry',
        width: 20,
        height: 20,
        source: getBucketResource('/textures/cherry.png'),
      },
      {
        name: 'banana',
        width: 20,
        height: 20,
        source: getBucketResource('/textures/banana.png'),
      },
      {
        name: 'melon',
        width: 20,
        height: 20,
        source: getBucketResource('/textures/melon.png'),
      },
      {
        name: 'watermelon',
        width: 20,
        height: 20,
        source: getBucketResource('/textures/watermelon.png'),
      },
      {
        name: 'strawberry',
        width: 30,
        height: 20,
        source: getBucketResource('/textures/strawberry.png'),
      },
    ],
  snakeBodyTexture: {
    width: 20,
    height: 20,
    source: getBucketResource('/textures/snake-body.jpg'),
  },
};
