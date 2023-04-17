import { Box } from '@mui/material';
import cx from 'classnames';
import { useCallback } from 'react';
import { ICustomSwiperControlsProps } from './props.interface';

import * as S from './styled';

const CustomSwiperControls = ({
  totalSlides,
  swiperIndex,
  swiper,
  paginationLayout,
}: ICustomSwiperControlsProps) => {
  const renderSwiperPagination = useCallback((_: any, index: number) => (
    <Box
      className={cx('swiper-pagination-bullet', {
        filled: index >= swiperIndex,
        first: index === 0,
      })}
      onClick={() => {
        swiper?.slideTo(index);
      }}
      component="span"
      key={index}
    />
  ), [swiper, swiperIndex]);

  return (
    <S.SwiperControls
      $paginationLayout={paginationLayout}
    >
      {paginationLayout !== undefined ? (
        <Box className="swiper-pagination">
          {[...Array(totalSlides)].map(renderSwiperPagination)}
        </Box>
      ) : null}
      <Box
        onClick={() => swiper?.slideNext()}
        className={`swiper-button-next ${cx({
          disabled: swiper?.isEnd,
        })}`}
      />
      <Box
        onClick={() => {
          console.log(swiper);
          swiper?.slidePrev();
        }}
        className={`swiper-button-prev ${cx({
          disabled: swiper?.isBeginning,
        })}`}
      />
    </S.SwiperControls>
  );
};

export default CustomSwiperControls;
