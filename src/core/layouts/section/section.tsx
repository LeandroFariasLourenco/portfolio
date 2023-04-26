import { Box, Grid } from '@mui/material';
import {
  memo, useCallback,
} from 'react';
import { SlideTitle } from 'src/core/components';

import { TypewriterClass } from 'typewriter-effect';
import { ISectionProps } from './props.interface';
import * as S from './styled';

const Section = ({
  children,
  gridStyle,
  icon,
  onTitleShow,
  childrenWrapperProps,
  id,
}: ISectionProps) => (
  <S.SectionContainer
    container
    item
    xs={12}
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

  </S.SectionContainer>
);

export default memo(Section);
