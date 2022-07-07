import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import { GameContext } from '@lib/context';
import getGameInfo from '@lib/game/getGameInfo';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { round } from 'lodash';
import { useContext } from 'react';
import twColors from 'tailwindcss/colors';

interface Props {}

const GameGameOverMenu = (props: Props) => {
  const { game, dispatch } = useContext(GameContext);

  if (!game || !game.winner) return null;

  const { message, colorName } = getGameInfo(game.winner);
  const color = twColors[colorName];

  return (
    <MenuDialog open={!!game.winner}>
      <div className="flex h-full flex-col items-center justify-center gap-y-5">
        <div className="font-display text-4xl">Fim do jogo! Resutado:</div>
        <div
          className="mb-5 flex items-center justify-center font-display text-6xl sm:text-7xl md:text-8xl"
          style={{ color: color[700] }}
        >
          {message}
        </div>
        <div className="text-center font-display text-xl">
          <div>{`Sua poupança: ${round(game.player.money, 2).toFixed(2)} R$`}</div>
          <div>{`Poupança do robô: ${round(game.enemy.money, 2).toFixed(2)} R$`}</div>
        </div>
        <PrimaryButton
          variant="contained"
          onClick={() => dispatch?.({ type: GAME_ACTIONS_TYPES.RESET })}
        >
          Reiniciar Jogo
        </PrimaryButton>
      </div>
    </MenuDialog>
  );
};

export default GameGameOverMenu;
