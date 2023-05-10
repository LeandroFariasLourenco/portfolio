import { Typography } from '@mui/material';
import { useState, memo } from 'react';
import cx from 'classnames';
import TypewriterEffect from 'typewriter-effect';
import { ITypewriterProps } from './props.interface';

import * as S from './styled';

const Typewriter = ({
  onInit,
  variant = 'h2',
  variantProps,
  options = {},
}: ITypewriterProps) => {
  const [hasFinished, setHasFinished] = useState<boolean>(false);
  const Variant = `${variant}` as any;

  return (
    <S.TypewriterWrapper
      className={cx({
        'is--finished': hasFinished,
      })}
    >
      <Variant {...variantProps}>
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
      </Variant>
    </S.TypewriterWrapper>
  );
};
export default memo(Typewriter);
