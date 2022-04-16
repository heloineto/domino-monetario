import getConnection from './getConnection';

const getPlays = (player: Player, board: Board) => {
  const plays: { index: number; connection: Connection }[] = [];
  const { start, end } = board.edges;
  const { hand } = player;
  const edges = [start, end];

  for (let i = 0; i < hand.length; i++) {
    for (let j = 0; j < edges.length; j++) {
      const connection = getConnection(hand[i], edges[j]);

      if (connection.connects) {
        plays.push({ index: i, connection });
      }
    }
  }

  return plays;
};

export default getPlays;
