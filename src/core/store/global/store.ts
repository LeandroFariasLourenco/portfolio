import { Languages } from 'src/core/models';

class GlobalStore {
  language: Languages = navigator.language as Languages;
}

const globalStore = new GlobalStore();

export default globalStore;
