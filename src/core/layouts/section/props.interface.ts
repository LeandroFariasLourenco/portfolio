import { GridProps } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { TypewriterClass } from 'typewriter-effect';

export interface ISectionProps {
  children: JSX.Element | JSX.Element[];
  gridStyle?: CSSProperties;
  id?: string;
  icon: JSX.Element;
  childrenWrapperProps?: GridProps;
  onTitleShow: (t: TypewriterClass) => void;
}
