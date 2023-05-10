import useResponsive from '../use-responsive/use-responsive';

const useLinkTarget = () => {
  const isDesktop = useResponsive({});

  return isDesktop ? '_blank' : '_self';
};

export default useLinkTarget;
