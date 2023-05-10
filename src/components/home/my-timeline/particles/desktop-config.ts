import { ParticlesProps } from 'react-tsparticles';

export const desktopParticlesConfig: ParticlesProps['options'] = {
  fpsLimit: 30,
  fullScreen: {
    enable: false,
  },
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        value_area: 1600,
      },
    },
    color: {
      value: '#352a58fc',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000',
      },
      polygon: {
        nb_sides: 6,
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 100,
      random: false,
    },
    move: {
      enable: true,
      speed: 0.15,
      direction: 'bottom',
      random: false,
      straight: true,
      bounce: true,
    },
  },
  retina_detect: true,
};
