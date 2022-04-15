import { GameContext } from '@lib/context';
import { Button, Dialog, IconButton } from '@mui/material';
import { CodesandboxLogo } from 'phosphor-react';
import { useContext, useState } from 'react';

interface Props {}

const GameSettingsMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { gameActions } = useContext(GameContext);

  return (
    <>
      <IconButton
        className="absolute top-0 right-0 h-10 w-10"
        onClick={() => setOpen(true)}
      >
        <CodesandboxLogo />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: 'bg-white/25' }}
      >
        <Button
          onClick={() => {
            gameActions?.reset();
            setOpen(false);
          }}
        >
          Resetar Jogo
        </Button>
      </Dialog>
    </>
  );
};

export default GameSettingsMenu;
