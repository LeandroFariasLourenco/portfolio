import { IExperience } from '../../models/experience.interface';

export interface IDesktopCardProps {
  LeftBorderComponent: JSX.Element;
  RightBorderComponent: JSX.Element;
  index: number;
  experience: IExperience;
}
