import { TypewriterClass } from 'typewriter-effect';

export interface ISlideTitleProps {
  onTitleShow: (t: TypewriterClass) => void;
  icon: JSX.Element;
  ignoreObserver?: boolean;
}
