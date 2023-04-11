import { Grid } from '@mui/material';
import { memo, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';
import { useResponsive } from 'src/core/hooks';
import { EResponsiveType } from 'src/core/models';
import Typewriter from '../typewriter/typewriter';
import { ISlideTitle } from './props.interface';

const SlideTitle = ({
  onTitleShow,
  icon,
}: ISlideTitle) => {
  const [typing, setTyping] = useState(false);
  const { inView, ref } = useInView({ threshold: 0, triggerOnce: true, root: document.body });
  const isMobile = useResponsive({ type: EResponsiveType.smaller });

  return (
    <Grid container flexWrap="nowrap" justifyContent="space-between" alignItems="center" ref={ref}>
      {typing && inView ? <Typewriter onInit={onTitleShow} typographyProps={{ fontSize: isMobile ? '24px' : '32px' }} /> : null}
      <Slide
        onVisibilityChange={() => {
          setTyping(true);
        }}
        direction="right"
      >
        {icon}
      </Slide>
    </Grid>
  );
};

export default memo(SlideTitle);
