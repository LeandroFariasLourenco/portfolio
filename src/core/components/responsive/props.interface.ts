import { ReactNode } from 'react';
import { Breakpoint } from '@mui/material';
import { EResponsiveType } from 'src/core/models';

export interface IResponsiveProps {
  breakpoint: Breakpoint;
  type?: EResponsiveType;
  aboveComponent?: JSX.Element;
  belowComponent?: JSX.Element;
  children?: JSX.Element;
}
