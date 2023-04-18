import { Box } from '@mui/material';
import { memo, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import { ILazyLoadProps } from './props.interface';

const LazyLoadParticles = ({ particlesConfig, id }: ILazyLoadProps) => {
  const { inView, ref } = useInView({
    threshold: 0,
    triggerOnce: true,
    root: document.body,
  });

  const loadParticlesEngine = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

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
