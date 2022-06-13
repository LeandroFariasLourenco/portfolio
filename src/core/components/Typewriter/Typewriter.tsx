import { Typography } from '@mui/material';
import { useState } from 'react';
import TypewriterEffect, { TypewriterClass } from 'typewriter-effect';

import * as S from './styled';

interface ITypewriterProps {
  onInit: (typewriter: TypewriterClass) => void;
}

const Typewriter = ({
  onInit,
}: ITypewriterProps) => (
  <S.TypewriterWrapper>
    <Typography variant="h2">
      <TypewriterEffect
        onInit={onInit}
      />
    </Typography>
  </S.TypewriterWrapper>
);

export default Typewriter;
