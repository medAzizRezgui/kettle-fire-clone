import { useState, useEffect, MutableRefObject } from "react";

export function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return isIntersecting;
}
