import { ILanguage } from './models/language.interface';

export interface ILanguageProps {
  language: ILanguage;
  onToggle: (index: number) => void;
  selectedTab: number;
  index: number;
}
