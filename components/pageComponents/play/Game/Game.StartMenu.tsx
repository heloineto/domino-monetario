import { GameContext } from '@lib/context';
import { Button, Dialog } from '@mui/material';
import { useContext } from 'react';

interface Props {}

const GameStartMenu = (props: Props) => {
  const { playing, start } = useContext(GameContext);

  return (
    <Dialog fullScreen open={!playing}>
      <Button onClick={() => start?.()}>Jogar</Button>
    </Dialog>
  );
};

export default GameStartMenu;
