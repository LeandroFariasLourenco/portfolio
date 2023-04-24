import {
  Suspense,
  memo,
  useCallback, useMemo,
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
    threshold: 0.05,
    triggerOnce: true,
    initialInView: false,
    // root: document.body,
  });
  const loaderBlocksCount = useMemo(() => 25, []);
  const renderLoaderBlock = useCallback(() => <li className="loader-block" key={uuid()} />, []);

  return (
    <S.LazyloadWrapper
      ref={ref}
      $inView={inView}
    >
      {inView ? children : (
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
