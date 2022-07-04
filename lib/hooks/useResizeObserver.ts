import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useResizeObserver = (element: Element | null, callback: ResizeObserverCallback) => {
  useIsomorphicLayoutEffect(() => {
    const observer = new ResizeObserver(callback);

    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element]);
};

export default useResizeObserver;
