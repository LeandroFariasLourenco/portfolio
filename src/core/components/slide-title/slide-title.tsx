import { Box, Grid } from '@mui/material';
import {
  memo, useEffect, useMemo, useState,
} from 'react';
import { Slide } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';
import { useIntl } from 'react-intl';
import { useResponsive } from 'src/core/hooks';
import { EResponsiveType } from 'src/core/models';
import { TypewriterClass } from 'typewriter-effect';
import Typewriter from '../typewriter/typewriter';
import { ISlideTitleProps } from './props.interface';

const SlideTitle = ({
  onTitleShow,
  icon,
  ignoreObserver = false,
}: ISlideTitleProps) => {
  const intl = useIntl();
  const { inView, ref } = useInView({
    threshold: 0.9, initialInView: false, triggerOnce: true,
  });
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const [typewriterRef, setTypewriterRef] = useState<TypewriterClass | null>(null);
  const shouldShowTitle: boolean = useMemo<boolean>(() => {
    if (ignoreObserver) {
      return true;
    }

    return inView;
  }, [inView, ignoreObserver]);

  useEffect(() => {
    if (!typewriterRef) return;

    typewriterRef.deleteAll();
    onTitleShow(typewriterRef);
  }, [intl, typewriterRef]);

  return (
    <Grid container flexWrap="nowrap" justifyContent="space-between" alignItems="center" ref={ref}>
      <Box component="div">
        {shouldShowTitle ? (
          <Typewriter
            onInit={(typewriter) => {
              setTypewriterRef(typewriter);
            }}
            typographyProps={{ fontSize: isMobile ? '24px' : '32px' }}
          />
        ) : null}
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
