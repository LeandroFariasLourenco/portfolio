import { IParticlesProps } from 'react-tsparticles';

export const particlesConfig: IParticlesProps['options'] = {
  background: {
    color: {
      value: '#1C1630',
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  fpsLimit: 30,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        color: '#06d674',
        size: 35,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: '#0aa1cf',
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      speed: 1,
    },
    number: {
      density: {
        enable: true,
      },
      value: 15,
    },
    opacity: {
      value: 0.5,
    },
  },
};
