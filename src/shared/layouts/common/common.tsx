import { memo, ReactNode } from 'react';
import Header from '@/shared/layouts/header/header';
import Footer from '@/shared/layouts/footer/footer';

interface ICommonProps {
  children: ReactNode;
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
