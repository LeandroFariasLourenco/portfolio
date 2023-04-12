import { ITechnology } from 'src/core/models';

export interface ITechnologiesProps {
  technologies: ITechnology[];
}

export interface ITechnologyDetailsProps {
  technology: ITechnology;
  isSelected?: boolean;
}
