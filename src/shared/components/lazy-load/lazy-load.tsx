'use client';

import {
  memo,
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { useIntl } from 'react-intl';
import { ILazyLoadProps } from './props.interface';

import * as S from './styled';

import './styles.scss';
import dynamic from 'next/dynamic';

const LazyLoad = ({
  children,
}: ILazyLoadProps) => {
  const { inView, ref } = useInView({
    threshold: 0.20,
    triggerOnce: true,
    initialInView: false,
  });
  const intl = useIntl();
  const minimumTimeToShow = useMemo(() => 750, []);
  const [inViewDebounce, setInViewDebounce] = useState<boolean>(false);
  const loaderBlocksCount = useMemo(() => 25, []);
  const renderLoaderBlock = useCallback((_: any, index: number) => <li className="loader-block" key={index} />, []);
  const [loadingComponent, setLoadingComponent] = useState<boolean>(true);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setInViewDebounce(true);
      }, minimumTimeToShow);

      return () => clearTimeout(timeout);
    }
  }, [inView]);

  const Component = dynamic(() => import('@/components/home/my-timeline/my-timeline').then((component) => {
    setLoadingComponent(false);
    return component;
  }));

  return (
    <S.LazyloadWrapper
      ref={ref}
      $inView={inViewDebounce}
    >
      {inViewDebounce ? (
        <S.ChildrenWrapper>
          <Component />
        </S.ChildrenWrapper>
      ) : (
        <S.LoaderContainer>
          <div className="wrapper">
            <ul className="loader-wrapper">
              {[...Array(loaderBlocksCount)].map(renderLoaderBlock)}
            </ul>
            <S.LoaderHint>
              {intl.formatMessage({ id: 'general.loading.hint' })}
              <S.LoaderDot component="span" />
              <S.LoaderDot component="span" />
              <S.LoaderDot component="span" />
            </S.LoaderHint>
          </div>
        </S.LoaderContainer>
      )}
    </S.LazyloadWrapper>
  );
};

export default memo(LazyLoad);
