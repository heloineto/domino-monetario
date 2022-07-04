import HandEnemyDomino from './Hand.EnemyDomino';
import HandPlayerDomino from './Hand.PlayerDomino';

type Props = {
  player: Player;
  isEnemy: boolean;
  hidden: boolean;
  dominoHeight: number;
};

const Hand = ({ player, isEnemy, dominoHeight, hidden }: Props) => {
  const HandDomino = isEnemy ? HandEnemyDomino : HandPlayerDomino;

  return (
    <div className="grid flex-grow grid-cols-[repeat(auto-fit,minmax(10px,max-content))] justify-center">
      {player.hand.map((domino, index) => (
        <HandDomino
          key={`${domino[0]}-${domino[1]}`}
          domino={domino}
          index={index}
          hidden={hidden}
          dominoHeight={dominoHeight}
        />
      ))}
    </div>
  );
};

export default Hand;
