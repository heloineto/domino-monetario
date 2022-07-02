import HandBaseDomino from './Hand.BaseDomino';

interface Props extends ComponentProps<typeof HandBaseDomino> {}

const HandEnemyDomino = ({ dominoHeight, ...motionDivProps }: Props) => {
  return (
    <HandBaseDomino
      whileTap={{
        translateY: 25 * 0.6,
        zIndex: 50,
        scale: 1.1,
      }}
      whileFocus={{
        translateY: 25 * 0.6,
        zIndex: 50,
        scale: 1.1,
      }}
      whileHover={{
        translateY: 25 * 0.6,
        scale: 1.3,
        zIndex: 50,
      }}
      dominoHeight={dominoHeight}
      {...motionDivProps}
    />
  );
};

export default HandEnemyDomino;
