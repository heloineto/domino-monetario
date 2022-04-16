import { DragContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'clsx';
import twColors from 'tailwindcss/colors';
import getConnection from '@lib/game/domino/getConnection';

interface Props {
  id: string;
  edge: Edge | null;
}

const BoardDragPlaceholder = ({ id, edge }: Props) => {
  const drag = useContext(DragContext);

  const connection = useMemo(
    () => (drag.domino ? getConnection(drag.domino, edge) : null),
    [drag?.domino, edge]
  );

  const [hover, setHover] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTarget = drag?.target?.id === id;

    if (hover && connection) {
      if (!isTarget) drag.setTarget?.({ id, connection });
      return;
    }

    if (isTarget) drag.setTarget?.(null);
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

  const color = useMemo(() => {
    if (!hover) return twColors.slate;

    return connection?.connects ? twColors.green : twColors.red;
  }, [connection?.connects, hover]);

  return (
    <div
      className="flex items-center justify-center"
      id={id}
      style={{ height: 160, width: connection?.rotation === 0 ? 86.73 : 160 }}
      ref={divRef}
    >
      <motion.div
        className={classNames('rounded border-2 border-dashed bg-opacity-25')}
        style={{
          height: 160,
          width: 86.73,
          rotate: connection?.rotation,
          borderColor: color[500],
          background: hover
            ? `repeating-linear-gradient(45deg, ${color[200]}, ${color[200]} 0.25rem, ${color[300]} 0.25rem, ${color[300]} 0.5rem)`
            : undefined,
        }}
      />
    </div>
  );
};

export default BoardDragPlaceholder;
