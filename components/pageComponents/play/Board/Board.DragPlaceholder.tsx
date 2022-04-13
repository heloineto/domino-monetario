import { GameContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'clsx';
import { connect } from '@lib/algorithms/helpers';

interface Props {
  edge: Edge;
}

const BoardDragPlaceholder = ({ edge }: Props) => {
  const { drag } = useContext(GameContext);

  const connection = drag?.domino ? connect(edge, drag?.domino) : null;

  const [hover, setHover] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = (e: MouseEvent) => {
      const divElem = divRef.current;
      if (!divElem) return;

      const { pageX, pageY } = e;
      const { x, y, height, width } = divElem.getBoundingClientRect();

      if (pageX >= x && pageY >= y && pageX < x + width && pageY < y + height) {
        drag?.setTargetEdge(edge);
        drag?.setTargetRef(divRef);
        drag?.setTargetConnection(connection);
        setHover(true);
        return;
      }

      drag?.setTargetEdge(null);
      drag?.setTargetRef(null);
      drag?.setTargetConnection(null);
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
      style={{ height: 160, width: connection?.rotation ? 160 : 86.73 }}
      ref={divRef}
    >
      <motion.div
        className={classNames(
          hover
            ? connection?.connects
              ? 'border-green-500 bg-green-500 bg-opacity-25'
              : 'border-red-500 bg-red-500 bg-opacity-25'
            : 'border-slate-400',
          'rounded border-2 border-dashed'
        )}
        style={{ height: 160, width: 86.73, rotate: connection?.rotation }}
      ></motion.div>
    </motion.div>
  );
};

export default BoardDragPlaceholder;
