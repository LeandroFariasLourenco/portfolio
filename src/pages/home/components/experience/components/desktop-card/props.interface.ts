import experiences from 'src/assets/resources/experiences.json';

export interface IDesktopCardProps {
  LeftBorderComponent: JSX.Element;
  RightBorderComponent: JSX.Element;
  index: number;
  experience: typeof experiences[0];
}
