import { GameContext } from '@lib/context';
import { useContext } from 'react';
import twColors from 'tailwindcss/colors';

interface Props {}

const getInfo = (
  result: RoundResult
): { message: string; colorName: 'slate' | 'blue' | 'orange' } => {
  if (result === 'DRAW') return { message: 'Empate', colorName: 'slate' };
  if (result === 'ENEMY_WINS') return { message: 'Robô venceu!', colorName: 'blue' };
  return { message: 'Você venceu!', colorName: 'orange' };
};

const BoardRound = (props: Props) => {
  const { game } = useContext(GameContext);

  if (!game) return null;

  return (
    <div>
      <div className="font-display text-xl">Rodada: {game.round}</div>
      <div className="flex flex-col">
        {game.roundResults.map((roundResult, index) => {
          const { message, colorName } = getInfo(roundResult);

          const color = twColors[colorName];

          return (
            <div
              key={`${roundResult}${index}`}
              className="rounded-md px-2 py-0.5 text-xs uppercase"
              style={{ color: color[600], backgroundColor: color[200] }}
            >
              {`${index}: ${message}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoardRound;
