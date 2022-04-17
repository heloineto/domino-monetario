import hasPlay from '../domino/hasPlay';

const hasPlays = (board: Board, player: Player) => {
  const { hand } = player;

  for (const domino of hand) {
    if (hasPlay(board, domino)) return true;
  }

  return false;
};

export default hasPlays;
