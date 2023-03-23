import { Typography } from '@mui/material';
import TypewriterEffect from 'typewriter-effect';
import { ITypewriterProps } from './props';

import * as S from './styled';

const Typewriter = ({
  onInit,
  typographyProps,
  timer,
}: ITypewriterProps) => (
  <S.TypewriterWrapper>
    <Typography variant="h2" {...typographyProps}>
      <TypewriterEffect
        onInit={(typewriter) => {
          onInit(typewriter);
        }}
      />
    </Typography>
  </S.TypewriterWrapper>
);

export default Typewriter;
