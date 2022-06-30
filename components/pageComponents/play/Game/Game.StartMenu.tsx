import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { useContext } from 'react';
import GameAiAlgorithmPicker from './Game.AiAlgorithmPicker';

interface Props {}

const GameStartMenu = (props: Props) => {
  const { game, dispatch } = useContext(GameContext);

  return (
    <MenuDialog open={!game?.playing}>
      <div className="flex h-full flex-col items-center justify-center gap-y-5">
        <PrimaryButton
          variant="contained"
          onClick={() => dispatch?.({ type: GAME_ACTIONS_TYPES.START })}
        >
          Jogar
        </PrimaryButton>
        <GameAiAlgorithmPicker />
      </div>
    </MenuDialog>
  );
};

export default GameStartMenu;
