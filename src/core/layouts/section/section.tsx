import { Box, Grid, GridProps } from '@mui/material';
import {
  CSSProperties, memo, ReactNode, useState,
} from 'react';
import { Slide } from 'react-awesome-reveal';
import { Typewriter } from 'src/core/components';
import { TypewriterClass } from 'typewriter-effect';

import * as S from './styled';

interface ISectionProps {
  children: ReactNode;
  gridStyle?: CSSProperties;
  icon: ReactNode;
  childrenWrapperProps?: GridProps;
  onTitleShow: (t: TypewriterClass) => void;
}

const Section = ({
  children,
  gridStyle,
  icon,
  onTitleShow,
  childrenWrapperProps,
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
