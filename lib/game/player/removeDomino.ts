const removeDomino = (player: Player, index: number) => {
  const newPlayer: Player = { ...player };
  const { hand } = newPlayer;

  const domino = hand[index];
  newPlayer.hand = hand.slice(0, index).concat(hand.slice(index + 1));

  return { player: newPlayer, domino };
};

export default removeDomino;
