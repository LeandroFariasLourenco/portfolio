import { SwiperProps } from 'swiper/react';

export interface IUseSwiperProps {
  desktop: SwiperProps;
  mobile: SwiperProps;
  commonProps?: SwiperProps;
}
