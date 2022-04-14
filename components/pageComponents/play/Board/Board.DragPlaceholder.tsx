import { GameContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'clsx';
import { connect } from '@lib/algorithms/helpers';

interface Props {
  id: string;
  edge: Edge | null;
}

const BoardDragPlaceholder = ({ id, edge }: Props) => {
  const { drag } = useContext(GameContext);

  const connection = useMemo(
    () => (drag?.domino ? connect(drag?.domino, edge) : null),
    [drag?.domino, edge]
  );

  const [hover, setHover] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hover && connection) {
      drag?.setTarget({ id, edge, connection });
      return;
    }

    if (drag?.target?.id === id) {
      drag?.setTarget(null);
    }
  }, [hover, connection, edge, drag, id]);

  useEffect(() => {
    const divElem = divRef.current;
    const boundingClientRect = divElem?.getBoundingClientRect();

    const check = (e: MouseEvent) => {
      if (!boundingClientRect) return;

      const { pageX, pageY } = e;
      const { x, y, height, width } = boundingClientRect;

      if (pageX >= x && pageY >= y && pageX < x + width && pageY < y + height) {
        setHover(true);
        return;
      }

      setHover(false);
    };

    document.addEventListener('mousemove', check);

    return () => {
      document.removeEventListener('mousemove', check);
    };
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center"
      id={id}
      style={{ height: 160, width: connection?.rotation ? 160 : 86.73 }}
      ref={divRef}
    >
      <motion.div
        className={classNames(
          hover
            ? connection?.connects
              ? 'border-green-500 bg-green-500'
              : 'border-red-500 bg-red-500'
            : 'border-slate-400',
          'rounded border-2 border-dashed bg-opacity-25'
        )}
        style={{ height: 160, width: 86.73, rotate: connection?.rotation }}
      />
    </motion.div>
  );
};

export default BoardDragPlaceholder;
