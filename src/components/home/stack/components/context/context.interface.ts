export interface IStackContext {
  selected: {
    languageTab: string;
    setLanguageTab: (language: string) => void;

    technologyTab: string;
    setSelectedTechnologyTab: (technology: string) => void;
  }
}
