import useResponsive from 'src/core/hooks/useIsResponsive/useIsResponsive';
import { EResponsiveType } from 'src/core/models';
import { IResponsiveProps } from './types';

const Responsive = ({
  children,
  breakpoint,
  type = EResponsiveType.bigger,
  aboveComponent,
  belowComponent,
}: IResponsiveProps) => {
  const shouldShow = useResponsive({ breakpoint, type });
  const componentToRender = shouldShow ? aboveComponent : belowComponent;

  if (!children && componentToRender) { return componentToRender; }

  if (!shouldShow) return null;

  return children;
};

export default Responsive;
