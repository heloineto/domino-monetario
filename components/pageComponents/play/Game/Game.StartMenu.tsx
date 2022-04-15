import { GameContext } from '@lib/context';
import { Button, Dialog } from '@mui/material';
import { useContext } from 'react';

interface Props {}

const GameStartMenu = (props: Props) => {
  const { playing, gameActions } = useContext(GameContext);

  return (
    <Dialog
      fullScreen
      open={!playing}
      classes={{
        paper: 'bg-white/25',
      }}
    >
      <div className="flex h-full items-center justify-center">
        <Button variant="contained" onClick={() => gameActions?.start()}>
          Jogar
        </Button>
      </div>
    </Dialog>
  );
};

export default GameStartMenu;
