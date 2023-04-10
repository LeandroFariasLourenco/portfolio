import experiences from 'src/assets/resources/experiences.json';

export interface IMobileCardProps {
  index: number;
  experience: typeof experiences[0]
  BorderComponent: JSX.Element;
}
