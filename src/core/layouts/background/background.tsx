import { forwardRef, ReactNode } from 'react';
import * as S from './styled';

interface IBackgroundProps {
  children: ReactNode | ReactNode[];
}

const Background = forwardRef<IBackgroundProps, any>(({
  children,
}, ref: any) => (
  <S.BackgroundWrapper ref={ref}>
    {children}
  </S.BackgroundWrapper>
));

export default Background;
