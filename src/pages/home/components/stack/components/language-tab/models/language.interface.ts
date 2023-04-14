import { ITechnology } from '../../technologies/models/technology.interface';

export interface ILanguage {
  name: string;
  icon: string;
  technologies: ITechnology[];
}
