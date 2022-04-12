import { GameContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'clsx';

interface Props {
  domino: Domino;
  position: 'start' | 'end';
}

const BoardPlaceholder = ({ domino, position }: Props) => {
  const { board } = useContext(GameContext);

  const [hover, setHover] = useState(false);
  // const [hover, setHover] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  // if (domino[0] === board?.[position]) {
  //   rotate = 90;
  // }
  // if (domino[1] === board?.[position]) {
  //   rotate = -90;
  // }

  useEffect(() => {
    const check = (e: MouseEvent) => {
      const divElem = divRef.current;
      if (!divElem) return;

      const { pageX, pageY } = e;
      const { x, y, height, width } = divElem.getBoundingClientRect();

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

  const shouldRotate = domino[0] !== domino[1];

  return (
    <motion.div
      className="flex items-center justify-center"
      style={{ height: 160, width: shouldRotate ? 160 : 86.73 }}
      ref={divRef}
    >
      <motion.div
        className={classNames(
          hover && 'border-red-500 bg-red-500 bg-opacity-50',
          'rounded border-2 border-dashed border-slate-400'
        )}
        style={{ height: 160, width: 86.73, rotate: shouldRotate ? 90 : 0 }}
      ></motion.div>
    </motion.div>
  );
};

export default BoardPlaceholder;
