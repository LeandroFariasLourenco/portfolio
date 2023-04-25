import {
  memo,
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { v4 as uuid } from 'uuid';
import { ILazyLoadProps } from './props.interface';

import * as S from './styled';

import './styles.scss';

const LazyLoad = ({
  children,
}: ILazyLoadProps) => {
  const { inView, ref } = useInView({
    threshold: 0.25,
    triggerOnce: false,
    initialInView: false,
    // root: document.body,
  });
  const minimumTimeToShow = useMemo(() => 750, []);
  const [inViewDebounce, setInViewDebounce] = useState<boolean>(false);
  const loaderBlocksCount = useMemo(() => 25, []);
  const renderLoaderBlock = useCallback(() => <li className="loader-block" key={uuid()} />, []);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setInViewDebounce(true);
      }, minimumTimeToShow);

      return () => clearTimeout(timeout);
    }

    return undefined;
  }, [inView]);

  return (
    <S.LazyloadWrapper
      ref={ref}
      $inView={inViewDebounce}
    >
      {inViewDebounce ? (
        <S.ChildrenWrapper>
          {children}
        </S.ChildrenWrapper>
      ) : (
        <S.LoaderContainer>
          <div className="wrapper">
            <ul className="loader-wrapper">
              {[...Array(loaderBlocksCount)].map(renderLoaderBlock)}
            </ul>
          </div>
        </S.LoaderContainer>
      )}
    </S.LazyloadWrapper>
  );
};

export default memo(LazyLoad);
