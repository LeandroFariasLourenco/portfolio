import { SlideTitle } from '@/shared/components';
import { Box, Grid } from '@mui/material';
import {
  memo
} from 'react';

import { TypewriterClass } from 'typewriter-effect';
import { ISectionProps } from './props.interface';

import './section.scss';

const Section = ({
  children,
  gridStyle,
  icon,
  onTitleShow,
  childrenWrapperProps,
  id,
}: ISectionProps) => (
  <Grid
    container
    item
    xs={12}
    className="section-container"
    justifyContent="center"
    alignItems="center"
    style={gridStyle}
    id={id}
  >
    <Grid item xs={12} width="100%" style={{ maxWidth: 1000 }}>
      <SlideTitle
        icon={icon}
        onTitleShow={(typewriter: TypewriterClass) => {
          onTitleShow(typewriter);
        }}
      />
      <Box {...childrenWrapperProps}>
        {children}
      </Box>
    </Grid>

  </Grid>
);

export default memo(Section);
