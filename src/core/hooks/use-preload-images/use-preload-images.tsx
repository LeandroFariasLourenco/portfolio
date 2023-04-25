import { useEffect, useMemo, useState } from 'react';

const usePreloadImages = (imagesUrls: string[]) => {
  const imagesToPreload: string[] = useMemo<string[]>(() => imagesUrls, [imagesUrls]);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  const preloadImages = (url: string) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(img.src);
    };
    img.src = url;
  });

  useEffect(() => {
    (async () => {
      const imagePromises: Promise<any>[] = [];
      imagesToPreload.forEach((url) => {
        imagePromises.push(preloadImages(url));
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    })();
  }, [imagesToPreload]);

  return { imagesLoaded };
};

export default usePreloadImages;
