import { Breakpoint } from '@mui/material';
import { EResponsiveType } from 'src/core/models';

export interface IResponsiveProps {
  children: JSX.Element;
  breakpoint: Breakpoint;
  type?: EResponsiveType;
  aboveComponent?: JSX.Element;
  belowComponent?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
}
