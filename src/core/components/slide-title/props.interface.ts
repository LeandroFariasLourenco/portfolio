import { TypewriterClass } from 'typewriter-effect';

export interface ISlideTitle {
  onTitleShow: (t: TypewriterClass) => void;
  icon: JSX.Element
}
