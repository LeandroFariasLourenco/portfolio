import { Box } from '@mui/material';
import cx from 'classnames';
import { useCallback, memo } from 'react';
import { ICustomSwiperControlsProps } from './props.interface';

import styles from './custom-swiper-controls.module.scss';

const CustomSwiperControls = ({
  totalSlides,
  swiperIndex,
  swiper,
  paginationLayout,
}: ICustomSwiperControlsProps) => {
  const renderSwiperPagination = useCallback((_: any, index: number) => (
    <Box
      className={`${cx(styles["swiper-pagination-bullet"], {
        [styles.filled]: index >= swiperIndex,
        [styles.first]: index === 0,
      })}`}
      onClick={() => {
        swiper!.slideTo(index);
      }}
      component="span"
      key={index}
    />
  ), [swiper, swiperIndex]);

  return (
    <div
      className={`${styles["swiper-controls"]} ${cx({
        [styles.horizontal]: paginationLayout === 'horizontal',
        [styles.vertical]: paginationLayout === 'vertical'
      })}`}
    >
      {paginationLayout !== undefined ? (
        <Box className={styles["swiper-pagination"]}>
          {[...Array(totalSlides)].map(renderSwiperPagination)}
        </Box>
      ) : null}
      <Box
        onClick={() => swiper!.slideNext()}
        className={`${styles["swiper-button-next"]} ${cx({
          [styles.disabled]: swiper?.isEnd,
        })}`}
      />
      <Box
        onClick={() => {
          swiper!.slidePrev();
        }}
        className={`${styles["swiper-button-prev"]} ${cx({
          [styles.disabled]: swiper?.isBeginning,
        })}`}
      />
    </div>
  );
};

export default memo(CustomSwiperControls);
