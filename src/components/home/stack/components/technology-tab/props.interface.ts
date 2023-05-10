import { ITechnology } from '../technologies/models/technology.interface';

export interface ITechnologyProps {
  technology: ITechnology;
  index: number;
  onDesktopToggle: (index: number) => void;
  selectedTab: number;
}
