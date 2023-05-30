import { ITechnology } from '../technologies/models/technology.interface';

export interface ITechnologyProps {
  technology: ITechnology;
  onDesktopToggle: (technology: ITechnology) => void;
}
