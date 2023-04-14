import { ReactNode } from 'react';
import { SwiperProps } from 'swiper/react';

export interface IResponsiveSwiperProps {
  mobileProps: SwiperProps;
  desktopProps: SwiperProps;
  children: ReactNode;
}
