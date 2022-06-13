import { memo, ReactNode } from 'react';
import Header from 'src/core/layouts/Header/Header';

interface ICommonProps {
  children: ReactNode | ReactNode[];
}

const Common = ({
  children,
}: ICommonProps) => (
  <>
    <Header />
    {children}
  </>
);

export default memo(Common);
