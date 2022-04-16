const findMaxDomino = (player: Player) => {
  const { hand } = player;

  let maxScore = -1;
  let maxIndex: number | undefined;

  for (let i = 0; i < hand.length; i++) {
    const domino = hand[i];

    let score = Number(domino[0]) + Number(domino[1]);
    if (domino[0] === domino[1]) score += 1000;

    if (score > maxScore) {
      maxScore = score;
      maxIndex = i;
    }
  }

  return { index: maxIndex, score: maxScore };
};

export default findMaxDomino;
