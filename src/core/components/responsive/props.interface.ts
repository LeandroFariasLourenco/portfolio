import { ReactNode } from 'react';
import { Breakpoint } from '@mui/material';
import { EResponsiveType } from 'src/core/models';

export interface IResponsiveProps {
  breakpoint: Breakpoint;
  type?: EResponsiveType;
  aboveComponent?: ReactNode | JSX.Element;
  belowComponent?: ReactNode | JSX.Element;
  children?: JSX.Element;
}
