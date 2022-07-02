import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { GearSix } from 'phosphor-react';
import { useContext, useState } from 'react';
import GameAiAlgorithmPicker from './Game.AiAlgorithmPicker';

interface Props {}

const GameSettingsMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { game, dispatch } = useContext(GameContext);

  return (
    <>
      <div
        id="right-buttons"
        className="absolute top-2 right-5 flex flex-col items-center justify-center gap-2"
      >
        <SecondaryIconButton
          className="order-1 h-12 w-12"
          onClick={() => setOpen(true)}
          colorName="amber"
        >
          <GearSix className="h-7 w-7" />
        </SecondaryIconButton>
      </div>
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
