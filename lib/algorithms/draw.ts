const draw = (deck: Domino[], quantity = 0) => {
  const drawnDominos: Domino[] = [];

  for (let i = 0; i < quantity; i++) {
    const domino = deck.pop();

    if (!domino) break;

    drawnDominos.push(domino);
  }

  return drawnDominos;
};

export default draw;
