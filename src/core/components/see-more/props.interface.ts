import { ReactNode } from 'react';

export interface ISeeMoreProps {
  children: ReactNode | JSX.Element | JSX.Element[];
  startHeight?: number;
  isInitialHidden?: boolean;
  onToggle?: () => void;
}
