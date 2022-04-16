const removeDomino = (player: Player, index: number) => {
  const newPlayer = { ...player };
  const { hand } = newPlayer;

  const domino = hand[index];
  newPlayer.hand = hand.slice(0, index).concat(hand.slice(index + 1));

  return { newPlayer, domino };
};

export default removeDomino;
