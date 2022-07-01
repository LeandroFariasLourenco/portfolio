import { IParticlesProps } from 'react-tsparticles';

export const particlesConfig: IParticlesProps['options'] = {
  fullScreen: {
    enable: false,
  },
  fpsLimit: 30,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 50,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
    },
    number: {
      value: 100,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#fff',
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 6,
    },
    move: {
      angle: {
        value: 10,
        offset: 0,
      },
      enable: true,
      direction: 'right',
      random: true,
      straight: false,
      outModes: {
        default: 'out',
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
    },
  },
  background: {
    color: 'transparent',
  },
  emitters: {
    position: {
      y: 55,
      x: -5,
    },
    rate: {
      delay: 7,
      quantity: 1,
    },
    size: {
      width: 0,
      height: 0,
    },
  },
};
