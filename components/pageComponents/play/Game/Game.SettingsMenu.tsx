import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import PrimaryIconButton from '@components/elements/buttons/PrimaryIconButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import Cog from '@components/elements/icons/Cog';
import X from '@components/elements/icons/X';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/hooks/useGame';
import { Button, Dialog, IconButton } from '@mui/material';
import { CodesandboxLogo } from 'phosphor-react';
import { useContext, useState } from 'react';

interface Props {}

const GameSettingsMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useContext(GameContext);

  return (
    <>
      {!open && (
        <PrimaryIconButton
          className="absolute top-2 right-2 h-10 w-10"
          onClick={() => setOpen(true)}
        >
          <Cog className="h-10 w-10" />
        </PrimaryIconButton>
      )}
      <MenuDialog open={open} onClose={() => setOpen(false)}>
        <PrimaryButton
          onClick={() => {
            dispatch?.({ type: GAME_ACTIONS_TYPES.RESET });
            setOpen(false);
          }}
        >
          Resetar Jogo
        </PrimaryButton>
      </MenuDialog>
    </>
  );
};

export default GameSettingsMenu;
