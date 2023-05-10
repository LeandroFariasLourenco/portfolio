import { Options, TypewriterClass } from 'typewriter-effect';
import { TypographyProps } from '@mui/material';
import { CSSProperties } from 'react';

export interface ITypewriterProps {
  onInit: (typewriter: TypewriterClass) => void;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variantProps?: CSSProperties;
  timer?: number;
  options?: Options;
}
