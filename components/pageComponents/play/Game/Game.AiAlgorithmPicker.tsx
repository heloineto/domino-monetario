import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import { GameContext } from '@lib/context';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { ButtonGroup } from '@mui/material';
import { useContext } from 'react';

interface Props {}

const GameAiAlgorithmPicker = (props: Props) => {
  const { game, dispatch } = useContext(GameContext);

  return (
    <ButtonGroup>
      <PrimaryButton
        colorName="emerald"
        className="w-48"
        variant={game?.aiAlgorithm === 'GREEDY_SEARCH' ? 'contained' : 'outlined'}
        onClick={() =>
          dispatch?.({
            type: GAME_ACTIONS_TYPES.SET_AI_ALGORITHM,
            payload: 'GREEDY_SEARCH',
          })
        }
      >
        Fácil
      </PrimaryButton>
      <PrimaryButton
        className="w-48"
        colorName="red"
        variant={game?.aiAlgorithm === 'A_START' ? 'contained' : 'outlined'}
        onClick={() =>
          dispatch?.({
            type: GAME_ACTIONS_TYPES.SET_AI_ALGORITHM,
            payload: 'A_START',
          })
        }
      >
        Difícil
      </PrimaryButton>
    </ButtonGroup>
  );
};

export default GameAiAlgorithmPicker;
