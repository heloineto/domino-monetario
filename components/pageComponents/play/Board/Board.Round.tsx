import { GameContext } from '@lib/context';
import getRoundInfo from '@lib/game/getRoundInfo';
import { useContext } from 'react';
import twColors from 'tailwindcss/colors';

interface Props {}

const BoardRound = (props: Props) => {
  const { game } = useContext(GameContext);

  if (!game) return null;

  return (
    <div>
      {!game.roundOver && (
        <div className="font-display text-xl">Rodada: {game.roundResults.length + 1}</div>
      )}
      <div className="flex flex-col">
        {game.roundResults.map((roundResult, index) => {
          const { message, colorName } = getRoundInfo(roundResult);

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
