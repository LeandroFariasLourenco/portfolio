import { useEffect, useState } from 'react';

const useIsWindowTop = () => {
  const [yOffset, setYOffset] = useState<number>(window.scrollY);

  const handleScroll = () => {
    setYOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return !yOffset;
};

export default useIsWindowTop;
