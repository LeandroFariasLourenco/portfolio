import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { EResponsiveType } from '../../models';
import { IUseResponsiveProps } from './props.interface';

const useResponsive = ({
  breakpoint = 'md',
  type = EResponsiveType.bigger,
}: IUseResponsiveProps) => {
  const { breakpoints } = useTheme();

  const getBreakpointState = () => (type === EResponsiveType.bigger
    ? window.innerWidth > breakpoints.values[breakpoint]
    : window.innerWidth < breakpoints.values[breakpoint]);
  const [shouldShow, setShouldShow] = useState<boolean>(getBreakpointState());

  const handleShouldShow = () => {
    setShouldShow(getBreakpointState());
  };

  useEffect(() => {
    handleShouldShow();
    window.addEventListener('resize', handleShouldShow);

    return () => {
      window.removeEventListener('resize', handleShouldShow);
    };
  }, []);

  return shouldShow;
};

export default useResponsive;
