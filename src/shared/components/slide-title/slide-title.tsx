import { Box, Grid } from '@mui/material';
import {
  memo, useEffect, useMemo,
  useState,
} from 'react';
import { Slide } from 'react-awesome-reveal';
import { useIntl } from 'react-intl';
import { useResponsive } from '@/shared/hooks';
import { EResponsiveType } from '@/shared/models';
import { TypewriterClass } from 'typewriter-effect';
import Typewriter from '../typewriter/typewriter';
import { ISlideTitleProps } from './props.interface';
import useInView from '@/shared/hooks/use-in-view/use-in-view';

const SlideTitle = ({
  onTitleShow,
  icon,
  ignoreObserver = false,
}: ISlideTitleProps) => {
  const { inView, ref } = useInView({
    threshold: 0.8, triggerOnce: true,
  });
  const isMobile = useResponsive({ type: EResponsiveType.smaller });
  const [typewriterRef, setTypewriterRef] = useState<TypewriterClass | null>(null);
  const { messages } = useIntl();
  const shouldShowTitle: boolean = useMemo<boolean>(() => {
    if (ignoreObserver) {
      return true;
    }

    return inView;
  }, [inView, ignoreObserver]);

  useEffect(() => {
    if (!typewriterRef) return;

    typewriterRef.deleteAll(5);
    onTitleShow(typewriterRef);
  }, [messages]);

  return (
    <Grid container flexWrap="nowrap" justifyContent="space-between" alignItems="center" ref={ref}>
      <Box>
        {shouldShowTitle ? (
          <Typewriter
            onInit={(typewriter) => {
              setTypewriterRef(typewriter);
              typewriter.deleteAll(5);
              onTitleShow(typewriter);
            }}
            variantProps={{ fontSize: isMobile ? '24px' : '32px' }}
          />
        ) : null}
      </Box>
      <Slide
        direction="right"
        triggerOnce={isMobile}
      >
        {icon}
      </Slide>
    </Grid>
  );
};

export default memo(SlideTitle);
