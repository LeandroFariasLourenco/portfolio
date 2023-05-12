import { useEffect, useMemo, useState } from "react";

const useInView = (props: IntersectionObserverInit) => {
  const [elementRef, setElementRef] = useState<HTMLElement>();
  const [inView, setInView] = useState<boolean>(false);
  const ref = (ref: any) => {
    setElementRef(ref);
  };
  const observer = useMemo(() => {
    if (!window) return null;

    return new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        return;
      }
      setInView(false);
    }, props)
  }, [elementRef]);

  useEffect(() => {
    if (elementRef) {
      observer!.observe(elementRef);
    };
  }, [elementRef]);

  useEffect(() => {
    return () => {
      if (!elementRef || !observer) return;

      observer.unobserve(elementRef as Element);
    };
  }, []);

  return {
    ref,
    inView,
  } as const;
};

export default useInView;
