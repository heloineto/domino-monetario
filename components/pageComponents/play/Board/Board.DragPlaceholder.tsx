import { DragContext } from '@lib/context';
import { motion } from 'framer-motion';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'clsx';
import twColors from 'tailwindcss/colors';
import getConnection from '@lib/game/domino/getConnection';

interface Props extends ComponentProps<'div'> {
  id: string;
  edge: Edge | null;
  dominoHeight: number;
  dominoWidth: number;
}

const BoardDragPlaceholderBase = ({
  dominoHeight,
  dominoWidth,
  className,
  id,
  edge,
  style,
}: Props) => {
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

    const check = (e: PointerEvent) => {
      if (!boundingClientRect) return;

      const { pageX, pageY } = e;
      const { x, y, height, width } = boundingClientRect;

      if (pageX >= x && pageY >= y && pageX < x + width && pageY < y + height) {
        setHover(true);
        return;
      }

      setHover(false);
    };

    document.addEventListener('pointermove', check);

    return () => {
      document.removeEventListener('pointermove', check);
    };
  }, []);

  const color = useMemo(() => {
    if (!hover) return twColors.slate;

    return connection?.connects ? twColors.green : twColors.red;
  }, [connection?.connects, hover]);

  return (
    <div
      className={classNames(className, 'flex items-center justify-center')}
      id={id}
      style={{
        height: dominoHeight,
        width: connection?.rotation === 0 ? dominoWidth : dominoHeight,
      }}
      ref={divRef}
    >
      <motion.div
        className="rounded border-2 border-dashed bg-opacity-25"
        style={{
          height: dominoHeight,
          width: dominoWidth,
          rotate: connection?.rotation,
          borderColor: color[500],
          background: hover
            ? `repeating-linear-gradient(45deg, ${color[200]}, ${color[200]} 0.25rem, ${color[300]} 0.25rem, ${color[300]} 0.5rem)`
            : undefined,
          ...style,
        }}
      />
    </div>
  );
};

const BoardDragPlaceholder = ({
  visible,
  ...props
}: Props & { visible: boolean | undefined }) => {
  if (!visible) {
    return (
      <div
        className={props.className}
        style={{ height: props.dominoHeight, width: props.dominoHeight, ...props.style }}
      />
    );
  }

  return <BoardDragPlaceholderBase {...props} />;
};

export default BoardDragPlaceholder;
