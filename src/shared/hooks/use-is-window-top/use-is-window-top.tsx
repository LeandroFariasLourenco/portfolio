'use client'

import { useCallback, useEffect, useState } from 'react';

const useIsWindowTop = () => {
  const [yOffset, setYOffset] = useState<number>(0);

  const handleScroll = useCallback(() => {
    setYOffset(window.scrollY);
  }, []);

  useEffect(() => {
    if (!window) return;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isWindowOnTop: !yOffset };
};

export default useIsWindowTop;
