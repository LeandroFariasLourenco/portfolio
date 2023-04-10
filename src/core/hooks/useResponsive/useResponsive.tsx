import { useTheme } from '@mui/material';
import { useState, useEffect } from 'react';
import { EResponsiveType } from '../../models';
import { IUseResponsiveProps } from './props.interface';

const useResponsive = ({
  breakpoint = 'md',
  type = EResponsiveType.bigger,
}: IUseResponsiveProps) => {
  const { breakpoints } = useTheme();
  const [shouldShow, setShouldShow] = useState(false);

  const handleShouldShow = () => {
    setShouldShow(type === EResponsiveType.bigger
      ? window.innerWidth > breakpoints.values[breakpoint]
      : window.innerWidth < breakpoints.values[breakpoint]);
  };

  useEffect(() => {
    handleShouldShow();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleShouldShow);

    return () => {
      window.removeEventListener('resize', handleShouldShow);
    };
  }, [window.innerWidth]);

  return shouldShow;
};

export default useResponsive;
