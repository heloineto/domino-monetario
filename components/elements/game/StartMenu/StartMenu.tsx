import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import GameAiAlgorithmPicker from '@components/pageComponents/play/Game/Game.AiAlgorithmPicker';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { useContext } from 'react';
import StartMenuAdvanced from './StartMenu.Advanced';

interface Props {}

const StartMenu = (props: Props) => {
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

        <StartMenuAdvanced />
      </div>
    </MenuDialog>
  );
};

export default StartMenu;
