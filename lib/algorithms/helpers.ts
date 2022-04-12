export const draw = (deck: Domino[], quantity = 0) => {
  const updatedDeck = [...deck];
  const drawnDominos: Domino[] = [];

  for (let i = 0; i < quantity; i++) {
    const domino = updatedDeck.pop();

    if (!domino) break;

    drawnDominos.push(domino);
  }

  return [updatedDeck, drawnDominos];
};
