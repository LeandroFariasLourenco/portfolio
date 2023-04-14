export interface ISeeMoreProps {
  children: JSX.Element | JSX.Element[];
  startHeight?: number;
  isInitialHidden?: boolean;
  onToggle?: () => void;
}
