import { memo, ReactNode } from 'react';
import Header from 'src/core/layouts/header/header';
import Footer from 'src/core/layouts/Footer/Footer';

interface ICommonProps {
  children: ReactNode | ReactNode[];
}

const Common = ({
  children,
}: ICommonProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default memo(Common);