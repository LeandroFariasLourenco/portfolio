import { TypewriterClass } from 'typewriter-effect';
import { TypographyProps } from '@mui/material';

export interface ITypewriterProps {
  onInit: (typewriter: TypewriterClass) => void;
  typographyProps?: TypographyProps;
  timer?: number;
}
