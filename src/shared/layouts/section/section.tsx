import { SlideTitle } from '@/shared/components';
import { Box, Grid } from '@mui/material';
import {
  memo
} from 'react';

import { TypewriterClass } from 'typewriter-effect';
import { ISectionProps } from './props.interface';

import styles from './section.module.scss';

const Section = ({
  children,
  gridStyle,
  icon,
  onTitleShow,
  childrenWrapperProps,
}: ISectionProps) => (
  <Grid
    container
    item
    xs={12}
    className={styles["section-container"]}
    justifyContent="center"
    alignItems="center"
    style={gridStyle}
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
