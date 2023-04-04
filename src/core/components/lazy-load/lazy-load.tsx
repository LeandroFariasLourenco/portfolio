import { Box } from '@mui/material';
import { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import { Particles } from 'react-tsparticles';
import loadParticlesEngine from 'src/core/functions/load-particles-engine';
import { ILazyLoadProps } from './props';

const LazyLoadParticles = ({ particlesConfig, id }: ILazyLoadProps) => {
  const { inView, ref } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Box
      ref={ref}
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      }}
    >
      {inView ? (
        <Particles
          id={id}
          canvasClassName="background-canvas"
          init={loadParticlesEngine}
          options={particlesConfig}
        />
      ) : null}
    </Box>
  );
};

export default memo(LazyLoadParticles, () => true);
