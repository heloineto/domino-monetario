export const findFirstDomino = (playerHand: Domino[], enemyHand: Domino[]) => {
  const _playerHand = [...playerHand];
  const _enemyHand = [...enemyHand];

  let moneyValue = 0;
  let index: number | undefined;
  let hand: Domino[] | undefined;
  let player: PlayerType | undefined;

  const compare = (currHand: Domino[], currPlayer: PlayerType, currIndex: number) => {
    const domino = currHand[currIndex];

    const currMoneyValue = Number(domino[0]) + Number(domino[1]);
    if (domino[0] === domino[1]) moneyValue += 1000;

    if (currMoneyValue > moneyValue) {
      moneyValue = currMoneyValue;
      index = currIndex;
      hand = currHand;
      player = currPlayer;
    }
  };

  for (let i = 0; i < _playerHand.length; i++) compare(_playerHand, 'player', i);
  for (let i = 0; i < _enemyHand.length; i++) compare(_enemyHand, 'enemy', i);

  if (!index || !hand || !player) return undefined;

  const [domino] = hand?.splice(index, 1);

  return {
    playerHand: _playerHand,
    enemyHand: _enemyHand,
    domino,
    player,
  };
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
