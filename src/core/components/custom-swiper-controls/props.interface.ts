import Swiper from 'swiper';

export interface ICustomSwiperControlsProps {
  totalSlides: number;
  swiper: Swiper;
  swiperIndex: number;
  paginationLayout?: 'horizontal' | 'vertical';
}
