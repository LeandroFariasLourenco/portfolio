import { ILanguage } from './models/language.interface';

export interface ILanguageProps {
  language: ILanguage;
  onToggle: (language: ILanguage) => void;
}
