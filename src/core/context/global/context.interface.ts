import { ELanguages } from 'src/core/models';

export interface IGlobalContext {
  language: ELanguages;
  setLanguage: (language: ELanguages) => void;
  messages: any;
}
