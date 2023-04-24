import { useCallback, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import { ILoadParticlesProps } from './props.interface';

const LoadParticles = ({
  options,
  id,
}: ILoadParticlesProps) => {
  const loadParticlesEngine = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      options={options}
      id={id}
      init={loadParticlesEngine}
      canvasClassName="background-canvas"
    />
  );
};

export default memo(LoadParticles);
