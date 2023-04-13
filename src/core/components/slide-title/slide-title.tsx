import { Box, Grid } from '@mui/material';
import { memo, useMemo } from 'react';
import { Slide } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';
import { useResponsive } from 'src/core/hooks';
import { EResponsiveType } from 'src/core/models';
import Typewriter from '../typewriter/typewriter';
import { ISlideTitleProps } from './props.interface';

const SlideTitle = ({
  onTitleShow,
  icon,
  ignoreObserver = false,
}: ISlideTitleProps) => {
  const { inView, ref } = useInView({
    threshold: 0.9, initialInView: false, triggerOnce: true,
  });
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const shouldShowTitle: boolean = useMemo<boolean>(() => {
    if (ignoreObserver) {
      return true;
    }

    return inView;
  }, [inView, ignoreObserver]);

  return (
    <Grid container flexWrap="nowrap" justifyContent="space-between" alignItems="center" ref={ref}>
      <Box component="div">
        {shouldShowTitle ? <Typewriter onInit={onTitleShow} typographyProps={{ fontSize: isMobile ? '24px' : '32px' }} /> : null}
      </Box>
      <Slide
        direction="right"
      >
        {icon}
      </Slide>
    </Grid>
  );
};

export default memo(SlideTitle);
