import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import { GameContext } from '@lib/context';
import getRoundInfo from '@lib/game/getRoundInfo';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import { isEmpty } from 'lodash';
import { useContext } from 'react';
import twColors from 'tailwindcss/colors';

interface Props {}

const GameRoundOverMenu = (props: Props) => {
  const { game, dispatch } = useContext(GameContext);

  const roundResults = game?.roundResults;

  if (!roundResults || isEmpty(roundResults)) return null;

  const { message, colorName } = getRoundInfo(roundResults[roundResults.length - 1]);

  const color = twColors[colorName];

  return (
    <MenuDialog open={game.roundOver}>
      <div className="flex h-full flex-col items-center justify-center gap-y-5">
        <div className="font-display text-2xl">Fim do round! Resutado:</div>
        <div className="mb-5 font-display text-6xl" style={{ color: color[700] }}>
          {message}
        </div>
        <PrimaryButton
          variant="contained"
          onClick={() => dispatch?.({ type: GAME_ACTIONS_TYPES.START_ROUND })}
        >
          Próxima Rodada
        </PrimaryButton>
      </div>
    </MenuDialog>
  );
};

export default GameRoundOverMenu;
