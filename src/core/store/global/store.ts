import { Languages } from 'src/core/models';
import english from 'src/assets/intl/english.json';
import portuguese from 'src/assets/intl/portuguese.json';
import { makeAutoObservable } from 'mobx';

class GlobalStore {
  language: Languages = navigator.language as Languages;

  constructor() {
    makeAutoObservable(this);
  }

  get messages() {
    switch (this.language) {
      case Languages.Portuguese:
        return portuguese;
      default:
        return english;
    }
  }

  public setLanguage(language: Languages) {
    this.language = language;
  }
}

const globalStore = new GlobalStore();

export default globalStore;
