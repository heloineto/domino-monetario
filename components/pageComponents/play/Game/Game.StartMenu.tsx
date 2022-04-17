import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import { Button, ButtonGroup } from '@mui/material';
import { useContext } from 'react';

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
      </div>
    </MenuDialog>
  );
};

export default GameStartMenu;
