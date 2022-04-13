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

export const findFirstDomino = (playerHand: Domino[], enemyHand: Domino[]) => {
  const _playerHand = [...playerHand];
  const _enemyHand = [...enemyHand];

  let max: MaxDominoInfo = {
    moneyValue: 0,
    index: undefined,
    hand: undefined,
  };

  const compare = (hand: Domino[], index: number) => {
    const domino = hand[index];

    let moneyValue = Number(domino[0]) + Number(domino[1]);
    if (domino[0] === domino[1]) moneyValue += 1000;

    if (moneyValue > max.moneyValue) max = { moneyValue, index, hand };
  };

  for (let i = 0; i < _playerHand.length; i++) compare(_playerHand, i);
  for (let i = 0; i < _enemyHand.length; i++) compare(_enemyHand, i);

  const domino = max.index ? max.hand?.splice(max.index, 1) : undefined;

  return [_playerHand, _enemyHand, domino] as [
    typeof _playerHand,
    typeof _enemyHand,
    typeof domino
  ];
};

export const connect = (domino: Domino, edge: Edge | null): Connection => {
  if (domino[0] === domino[1]) {
    if (!edge || domino[0] === edge.value) {
      return {
        connects: true,
        rotation: 0,
      };
    }

    return { connects: false, rotation: 0 };
  }

  if (!edge || domino[0] === edge.value) {
    return {
      connects: true,
      rotation: edge?.position === 'start' ? 90 : -90,
    };
  }

  if (!edge || domino[1] === edge.value) {
    return {
      connects: true,
      rotation: edge.position === 'start' ? -90 : 90,
    };
  }

  return { connects: false, rotation: 90 };
};
