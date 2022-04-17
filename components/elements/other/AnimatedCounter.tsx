import { animate } from 'framer-motion';
import { createElement, useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  type?: string;
}

const AnimatedCounter = ({ type = 'div', value }: Props) => {
  const [prevValue, setPrevValue] = useState(value);
  const nodeRef = useRef<HTMLElement>();

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) return;

    const controls = animate(prevValue, value, {
      duration: 0.5,
      onUpdate(value) {
        node.textContent = value.toFixed(2);
      },
    });

    setPrevValue(value);

    return () => controls.stop();
  }, [value]);

  return createElement(type, { ref: nodeRef });
};

export default AnimatedCounter;
