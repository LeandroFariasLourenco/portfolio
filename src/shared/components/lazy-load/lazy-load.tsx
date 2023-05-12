'use client';

import {
  memo,
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useIntl } from 'react-intl';
import { ILazyLoadProps } from './props.interface';
import cx from 'classnames';

import styles from './lazy-load.module.scss';

import useInView from '@/shared/hooks/use-in-view/use-in-view';

const LazyLoad = ({
  children,
}: ILazyLoadProps) => {
  const { inView, ref } = useInView({
    threshold: 0.20,
  });
  const intl = useIntl();
  const minimumTimeToShow = useMemo(() => 750, []);
  const [isInViewDebounced, setInViewDebounce] = useState<boolean>(false);
  const loaderBlocksCount = useMemo(() => 25, []);
  const renderLoaderBlock = useCallback((_: any, index: number) => <li className={styles["loader-block"]} key={index} />, []);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setInViewDebounce(true);
      }, minimumTimeToShow);

      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <div
      className={`${styles["lazy-load-wrapper"]}${cx({ 'in--view': isInViewDebounced })}`}
      ref={ref}
    >
      <div
        className={styles["lazy-load-loader-container"]}
        style={{ display: isInViewDebounced ? 'none' : 'flex' }}
      >
        <div className={styles.wrapper}>
          <ul className={styles["loader-wrapper"]}>
            {[...Array(loaderBlocksCount)].map(renderLoaderBlock)}
          </ul>
          <p className={styles["lazy-load-loader-hint"]}>
            {intl.formatMessage({ id: 'general.loading.hint' })}
            <span className={styles["lazy-load-loader-dot"]} />
            <span className={styles["lazy-load-loader-dot"]} />
            <span className={styles["lazy-load-loader-dot"]} />
          </p>
        </div>
      </div>
      {isInViewDebounced && (
        <div className={styles["lazy-load-children-wrapper"]}>
          {children}
        </div>
      )}
    </div>
  );
};

export default memo(LazyLoad);
