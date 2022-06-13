import { useScrollTrigger, useTheme } from '@mui/material';
import { cloneElement, ReactElement } from 'react';

interface IElevationScrollProps {
  children: ReactElement;
}

const ElevationScroll = ({
  children,
}: IElevationScrollProps) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });

  return cloneElement(children, {
    style: {
      transition: 'background-color 400ms ease-in-out',
      backgroundColor: trigger ? theme.palette.secondary.main : 'transparent',
    },
  });
};

export default ElevationScroll;
