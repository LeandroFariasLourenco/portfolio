import { Typography } from '@mui/material';
import { useState } from 'react';
import cx from 'classnames';
import TypewriterEffect from 'typewriter-effect';
import { ITypewriterProps } from './props.interface';

import * as S from './styled';

const Typewriter = ({
  onInit,
  typographyProps,
  options = {},
}: ITypewriterProps) => {
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  return (
    <S.TypewriterWrapper
      className={cx({
        'is--finished': hasFinished,
      })}
    >
      <Typography variant="h2" {...typographyProps}>
        <TypewriterEffect
          onInit={(typewriter) => {
            onInit(typewriter);
            typewriter.callFunction(() => { setHasFinished(true); });
          }}
          options={{
            delay: 75,
            ...options,
          }}
        />
      </Typography>
    </S.TypewriterWrapper>
  );
};
export default Typewriter;
