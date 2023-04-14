import { Swiper } from 'swiper/react';
import Responsive from '../responsive/responsive';
import { IResponsiveSwiperProps } from './props.interface';

const ResponsiveSwiper = ({
  desktopProps,
  mobileProps,
  children,
}: IResponsiveSwiperProps) => (
  <Responsive
    breakpoint="md"
    belowComponent={(
      <Swiper {...mobileProps}>
        {children}
      </Swiper>
      )}
    aboveComponent={(
      <Swiper {...desktopProps}>
        {children}
      </Swiper>
      )}
  />
);

export default ResponsiveSwiper;
