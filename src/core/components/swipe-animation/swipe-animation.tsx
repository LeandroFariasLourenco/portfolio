import { useState } from 'react';
import cx from 'classnames';
import Lottie from 'react-lottie';
import { EResponsiveType } from 'src/core/models';
import Responsive from '../responsive/responsive';

import * as S from './styled';
import { ISwipeAnimationProps } from './props';

const SwipeAnimation = ({
  lottieProps,
}: ISwipeAnimationProps) => {
  const [show, setShow] = useState<boolean>(true);

  const handleOnPress = () => {
    setShow(false);
  };

  return (
    <Responsive
      breakpoint="md"
      type={EResponsiveType.smaller}
    >
      <S.SwipeAnimationOverlay
        className={cx({
          'is--open': show,
        })}
        onTouchStart={handleOnPress}
        onClick={handleOnPress}
      >
        <Lottie
          {...lottieProps}
          style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
          }}
        />
      </S.SwipeAnimationOverlay>
    </Responsive>
  );
};

export default SwipeAnimation;
