import { useCallback, useState } from 'react';

import useResizeObserver from './useResizeObserver';

const useElementSize = <T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  {
    width: number;
    height: number;
  }
] => {
  const [ref, setRef] = useState<T | null>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleSize = useCallback(() => {
    setWidth(ref?.offsetWidth || 0);
    setHeight(ref?.offsetHeight || 0);
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useResizeObserver(ref, handleSize);

  return [setRef, { width, height }];
};

export default useElementSize;
