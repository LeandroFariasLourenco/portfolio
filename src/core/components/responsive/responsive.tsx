import { useResponsive } from 'src/core/hooks';
import { EResponsiveType } from 'src/core/models';
import { memo } from 'react';
import { IResponsiveProps } from './props.interface';

const Responsive = ({
  children,
  breakpoint,
  type = EResponsiveType.bigger,
  aboveComponent,
  belowComponent,
}: IResponsiveProps) => {
  const shouldShow = useResponsive({ breakpoint, type });
  const componentToRender = shouldShow ? aboveComponent : belowComponent;

  if (!children && componentToRender) { return componentToRender! as JSX.Element; }

  if (!shouldShow) return null;

  return children!;
};

export default memo(Responsive);
