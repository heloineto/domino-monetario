import { useCallback, useState } from 'react';

const useDrag = () => {
  const [domino, setDomino] = useState<Domino | null>(null);
  const [targetRef, setTargetRef] = useState(null);

  const onDragStart = useCallback(
    (_domino: Domino) => {
      setDomino(_domino);
    },
    [setDomino]
  );

  const onDragEnd = useCallback(() => {
    setDomino(null);
  }, [setDomino]);

  return { domino, setDomino, targetRef, setTargetRef, onDragStart, onDragEnd };
};

export default useDrag;
