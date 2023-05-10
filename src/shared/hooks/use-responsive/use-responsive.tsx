'use client'

import { useGlobalContext } from '@/shared/contexts';
import { EDeviceType, EResponsiveType } from '../../models';
import { IUseResponsiveProps } from './props.interface';

const useResponsive = ({
  type = EResponsiveType.bigger,
}: IUseResponsiveProps) => {
  const { userDeviceType } = useGlobalContext();

  const getBreakpointState = () => (type === EResponsiveType.bigger
    ? userDeviceType === EDeviceType.DESKTOP
    : userDeviceType === EDeviceType.MOBILE);

  return getBreakpointState();
};

export default useResponsive;
