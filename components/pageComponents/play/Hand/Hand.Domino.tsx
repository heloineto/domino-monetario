import { GameContext } from '@lib/context';
import { range } from '@lib/utils/math';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useContext, useEffect, useMemo } from 'react';
import Domino from '../Domino';

interface Props extends ComponentProps<typeof motion.div> {
  domino: [MoneyValue, MoneyValue];
  index: number;
  wheelConfig: WheelConfig;
  isEnemy?: boolean;
}

const HandDomino = ({
  domino,
  index,
  wheelConfig,
  isEnemy,
  ...motionDivProps
}: Props) => {
  const { drag } = useContext(GameContext);

  const {
    radius,
    divider,
    angleStep,
    rectHeight,
    rectWidth,
    rectRadius,
    middleIndex,
    length,
  } = wheelConfig;

  const angle = useMotionValue(
    angleStep * (middleIndex - index) -
      90 +
      range(1, 20, 0, -2, length) * (isEnemy ? -1 : 1)
  );
  const radAngle = useTransform(angle, (currAngle) => (currAngle * Math.PI) / 180);

  const rotate = useTransform(angle, (currAngle) => currAngle + 90);
  const left = useTransform(
    radAngle,
    (currRadAngle) => rectRadius * Math.cos(currRadAngle)
  );
  const top = useTransform(
    radAngle,
    (currRadAngle) => -rectHeight / 2 + radius + rectRadius * Math.sin(currRadAngle)
  );

  useEffect(() => {
    animate(
      angle,
      angleStep * (middleIndex - index) -
        90 +
        range(1, 20, 0, -2, length) * (isEnemy ? -1 : 1)
    );
  }, [angleStep, index, length, middleIndex, angle, isEnemy]);

  const props = useMemo(() => {
    const props: ComponentProps<typeof motion.div> = {};

    props.whileHover = {};
    props.whileHover.scale = 1.3;
    props.whileHover.zIndex = 50;
    props.whileTap = {};
    props.whileTap.scale = 1.1;

    if (isEnemy) return props;

    props.whileTap.cursor = 'grabbing';
    props.whileHover.rotate = 0;
    props.whileHover.cursor = 'grab';
    props.whileHover.top = -2.5;
    props.onDragStart = () => drag?.onDragStart(domino, index);
    props.onDragEnd = () => drag?.onDragEnd();

    props.drag = true;
    props.dragConstraints = { top: 0, right: 0, bottom: 0, left: 0 };
    props.dragTransition = { bounceStiffness: 600, bounceDamping: 50 };
    props.dragElastic = 1;

    const connection = drag?.target?.connection;

    if (drag?.dominoIndex === index && connection) {
      props.whileDrag = {};

      const { connects, rotation } = connection;

      if (connects) {
        props.whileDrag.scale = 0.9;
        props.whileDrag.rotate = rotation;
        props.whileDrag.boxShadow = '0px 0px 10px 2px rgba(34,197,94,0.75)';
      } else {
        props.whileDrag.boxShadow = '0px 0px 10px 2px rgba(239,68,68,0.75)';
      }
    }

    return props;
  }, [isEnemy, domino, drag, index]);

  return (
    <motion.div
      className="absolute rounded-lg"
      style={{ height: rectHeight, width: rectWidth, left, top, rotate }}
      {...props}
      {...motionDivProps}
    >
      <Domino className="h-full w-full" domino={domino} hidden={isEnemy} />
      {/* {!isEnemy && index === 0 && <Debug value={{ rotate }} />} */}
    </motion.div>
  );
};

export default HandDomino;
