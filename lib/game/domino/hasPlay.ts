const hasPlay = (board: Board, domino: Domino) => {
  const { start, end } = board.edges;
  if (!start || !end) return true;

  if (domino[0] === start.value || domino[1] === start.value) return true;
  if (domino[0] === end.value || domino[1] === end.value) return true;

  return false;
};

export default hasPlay;
