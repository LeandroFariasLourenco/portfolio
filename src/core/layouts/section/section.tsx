import { Box, Grid } from '@mui/material';
import {
  memo,
  useState,
} from 'react';
import { Slide } from 'react-awesome-reveal';
import { Typewriter } from 'src/core/components';

import { ISectionProps } from './props';
import * as S from './styled';

const Section = ({
  children,
  gridStyle,
  icon,
  onTitleShow,
  childrenWrapperProps,
  id,
}: ISectionProps) => {
  const [typing, setTyping] = useState(false);

  return (
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
        <S.SectionHeader container flexWrap="nowrap" justifyContent="space-between" alignItems="center">
          {typing ? <Typewriter onInit={onTitleShow} /> : null}
          <Slide
            onVisibilityChange={() => {
              setTyping(true);
            }}
            direction="right"
          >
            {icon}
          </Slide>
        </S.SectionHeader>
        <Box {...childrenWrapperProps}>
          {children}
        </Box>
      </Grid>

    </S.SectionContainer>
  );
};

export default memo(Section);
