import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import PrimaryIconButton from '@components/elements/buttons/PrimaryIconButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import Cog from '@components/elements/icons/Cog';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import { Button, ButtonGroup } from '@mui/material';
import { useContext, useState } from 'react';

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
            onClick={() => {
              dispatch?.({ type: GAME_ACTIONS_TYPES.RESET });
              setOpen(false);
            }}
          >
            Reiniciar Jogo
          </PrimaryButton>
          <ButtonGroup>
            <Button
              className="w-40"
              variant={game?.aiAlgorithm === 'GREEDY_SEARCH' ? 'contained' : 'outlined'}
              onClick={() =>
                dispatch?.({
                  type: GAME_ACTIONS_TYPES.SET_AI_ALGORITHM,
                  payload: 'GREEDY_SEARCH',
                })
              }
            >
              Busca Gulosa
            </Button>
            <Button
              className="w-40"
              variant={game?.aiAlgorithm === 'A_START' ? 'contained' : 'outlined'}
              onClick={() =>
                dispatch?.({
                  type: GAME_ACTIONS_TYPES.SET_AI_ALGORITHM,
                  payload: 'A_START',
                })
              }
            >
              A* (A Star)
            </Button>
          </ButtonGroup>
          <PrimaryButton onClick={() => setOpen(false)}>Continuar Jogo</PrimaryButton>
        </div>
      </MenuDialog>
    </>
  );
};

export default GameSettingsMenu;
