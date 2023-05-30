import { CSSProperties } from 'react';
import { GridProps } from '@mui/material';
import { TypewriterClass } from 'typewriter-effect';

export interface ISectionProps {
  children: JSX.Element | JSX.Element[];
  gridStyle?: CSSProperties;
  icon: JSX.Element;
  childrenWrapperProps?: GridProps;
  onTitleShow: (t: TypewriterClass) => void;
}
