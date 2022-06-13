import { Grid, GridProps } from '@mui/material';
import { memo, ReactNode } from 'react';

import * as S from './styled';

interface ISectionProps {
  children: ReactNode | ReactNode[];
  background?: string;
  gridProps?: GridProps;
  title?: ReactNode;
}

const Section = ({
  children,
  gridProps,
  title,
  ...props
}: ISectionProps) => (
  <S.SectionContainer
    container
    xs={12}
    justifyContent="center"
    alignItems="center"
    {...props}
  >
    <Grid item xs={6}>
      {title ? (
        <S.SectionHeader container flexWrap="nowrap" justifyContent="space-between" alignItems="center">
          {title}
        </S.SectionHeader>
      ) : null}
      {children}
    </Grid>

  </S.SectionContainer>
);

export default memo(Section);
