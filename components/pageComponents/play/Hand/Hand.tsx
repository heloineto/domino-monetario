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
    <div className="flex">
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
