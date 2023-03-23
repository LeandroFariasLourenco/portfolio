import { Breakpoint } from '@mui/material';
import { EResponsiveType } from 'src/core/models';

export interface IUseResponsiveProps {
  type?: EResponsiveType;
  breakpoint: Breakpoint
}
