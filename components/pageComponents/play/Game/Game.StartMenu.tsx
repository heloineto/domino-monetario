import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/hooks/useGame';
import { Button, Dialog } from '@mui/material';
import { useContext } from 'react';

interface Props {}

const GameStartMenu = (props: Props) => {
  const { game, dispatch } = useContext(GameContext);

  return (
    <MenuDialog open={!game?.playing}>
      <div className="flex h-full items-center justify-center">
        <PrimaryButton
          variant="contained"
          onClick={() => dispatch?.({ type: GAME_ACTIONS_TYPES.START })}
        >
          Jogar
        </PrimaryButton>
      </div>
    </MenuDialog>
  );
};

export default GameStartMenu;
