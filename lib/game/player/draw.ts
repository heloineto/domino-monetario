const draw = (player: Player, deck: Domino[], quantity = 0) => {
  const _quantity = -Math.abs(quantity);

  const drawnDominos = deck.slice(_quantity);
  const newHand = [...player.hand, ...drawnDominos];
  const newPlayer = { ...player, hand: newHand };

  const newDeck = deck.slice(0, _quantity);

  return { player: newPlayer, deck: newDeck, drawnDominos };
};

export default draw;
