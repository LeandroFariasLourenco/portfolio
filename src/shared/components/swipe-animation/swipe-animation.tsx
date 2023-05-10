import {
  useEffect, useRef, useState, memo,
} from 'react';
import cx from 'classnames';
import { Lottie } from '@alfonmga/react-lottie-light-ts';
import { EResponsiveType } from '@/shared/models';
import Responsive from '../responsive/responsive';

import { ISwipeAnimationProps } from './props.interface';

const SwipeAnimation = ({
  lottieProps,
  continuous = true,
}: ISwipeAnimationProps) => {
  const [show, setShow] = useState<boolean>(true);
  const timerToResetShow = 5750;
  const timeoutRef = useRef<number | undefined>(undefined);
  const [swipeOverlayRef, setSwipeOverlayRef] = useState<HTMLDivElement>();

  const centerAnimationInContainer = () => {
    const lottieContainer = swipeOverlayRef!.firstChild! as HTMLDivElement;
    const wrapper = swipeOverlayRef!.parentElement;
    if (!wrapper) return;

    const centerOffsets = {
      x: wrapper.clientWidth / 3,
      y: wrapper.clientHeight / 5,
    };

    swipeOverlayRef!.style.width = `${wrapper.scrollWidth}px`;

    if (getComputedStyle(wrapper).overflowY.includes('auto')) {
      swipeOverlayRef!.style.height = `${wrapper.scrollHeight}px`;
      lottieContainer.style.top = `${wrapper.scrollTop + centerOffsets.y}px`;
    }

    lottieContainer.style.left = `${wrapper.scrollLeft + centerOffsets.x}px`;
  };

  useEffect(() => {
    if (!swipeOverlayRef) return;

    centerAnimationInContainer();

    swipeOverlayRef.parentElement!.addEventListener('scroll', centerAnimationInContainer);

    // return () => {
    //   wrapper.removeEventListener('scroll', handleWrapperScroll);
    // }
  }, [swipeOverlayRef]);

  const handleOnPress = () => {
    clearTimeout(timeoutRef.current);
    setShow(false);
  };

  const handleOnTouchEnd = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(true);
    }, timerToResetShow);
  };

  return (
    <Responsive
      breakpoint="md"
      type={EResponsiveType.smaller}
    >
      <div
        ref={(ref: HTMLDivElement) => { setSwipeOverlayRef(ref); }}
        className={`swipe-animation-overlay ${cx({
          'is--open': show,
        })}`}
        onTouchEnd={() => {
          if (!continuous) { return; }
          handleOnTouchEnd();
        }}
        onTouchStart={handleOnPress}
        onClick={handleOnPress}
      >
        <Lottie
          {...lottieProps}
          style={{
            position: 'absolute',
          }}
        />
      </div>
    </Responsive>
  );
};

export default memo(SwipeAnimation);
