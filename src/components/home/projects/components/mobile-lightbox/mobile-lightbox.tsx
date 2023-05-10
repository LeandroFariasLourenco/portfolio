import { useMemo } from 'react';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import { Thumbnails } from 'yet-another-react-lightbox/plugins';
import { useProjectsContext } from '../../context/projects.context';
import { IMobileLightboxProps } from './props.interface';

const MobileLightbox = ({
  projects,
  swiperIndex,
}: IMobileLightboxProps) => {
  const { mobile: { lightbox: { open, setOpen } } } = useProjectsContext();
  const slides: Slide[] = useMemo<Slide[]>(() => projects.map(({
    image: background,
  }) => ({
    src: background,
  })), []);

  return (
    <Lightbox
      open={open}
      close={() => { setOpen(false); }}
      slides={slides}
      index={swiperIndex || 0}
      carousel={{
        preload: slides.length,
      }}
      plugins={[Thumbnails]}
      thumbnails={{
        position: 'bottom',
        border: 0,
      }}
    />
  );
};

export default MobileLightbox;
