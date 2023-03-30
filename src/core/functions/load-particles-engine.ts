import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

const loadParticlesEngine = async (engine: Engine) => {
  await loadFull(engine);
};

export default loadParticlesEngine;
