import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import PrimaryIconButton from '@components/elements/buttons/PrimaryIconButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import Cog from '@components/elements/icons/Cog';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { useContext, useState } from 'react';
import GameAiAlgorithmPicker from './Game.AiAlgorithmPicker';

interface Props {}

const GameSettingsMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { game, dispatch } = useContext(GameContext);

  return (
    <>
      {!open && (
        <PrimaryIconButton
          className="absolute top-2 right-5 h-12 w-12"
          onClick={() => setOpen(true)}
        >
          <Cog className="h-7 w-7" />
        </PrimaryIconButton>
      )}
      <MenuDialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-y-5">
          <PrimaryButton
            colorName="orange"
            onClick={() => {
              dispatch?.({ type: GAME_ACTIONS_TYPES.RESET });
              setOpen(false);
            }}
          >
            Reiniciar Jogo
          </PrimaryButton>
          <GameAiAlgorithmPicker />
          <PrimaryButton onClick={() => setOpen(false)}>Continuar Jogo</PrimaryButton>
        </div>
      </MenuDialog>
    </>
  );
};

export default GameSettingsMenu;
