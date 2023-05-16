import { useEffect, useMemo, useState } from "react";
import { IUseInViewProps } from "./props.interface";

const useInView = ({
  triggerOnce,
  ...observerProps
}: IUseInViewProps) => {
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

        if (triggerOnce) {
          observer!.unobserve(elementRef as Element);
        }
        return;
      }

      setInView(false);
    }, observerProps)
  }, [elementRef]);

  useEffect(() => {
    if (elementRef) {
      observer!.observe(elementRef);
    };
  }, [elementRef]);

  useEffect(() => {
    return () => {
      if (!elementRef || !observer) return;
      observer!.unobserve(elementRef as Element);
    };
  }, []);

  return {
    ref,
    inView,
  } as const;
};

export default useInView;
