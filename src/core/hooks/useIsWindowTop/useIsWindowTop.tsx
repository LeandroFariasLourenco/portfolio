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

  return { isWindowOnTop: !yOffset };
};

export default useIsWindowTop;
