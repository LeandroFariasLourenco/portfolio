import { useState, useEffect } from 'react';
import { SwiperProps } from 'swiper/react';
import useResponsive from '../use-responsive/use-responsive';
import { IUseSwiperProps } from './props.interface';

const useSwiperProps = ({
  desktop,
  mobile,
  commonProps = {},
}: IUseSwiperProps) => {
  const isDesktop = useResponsive({});

  const [swiperProps, setSwiperProps] = useState<SwiperProps>({
    ...commonProps,
    ...(isDesktop ? desktop : mobile),
  });

  useEffect(() => {
    const props = isDesktop ? desktop : mobile;
    setSwiperProps({ ...commonProps, ...props });
  }, [isDesktop]);

  return { swiperProps };
};

export default useSwiperProps;
