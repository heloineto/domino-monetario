const sumDominos = (dominos: Domino[]) => {
  let sum = 0;

  for (let i = 0; i < dominos.length; i++) {
    for (let j = 0; j < dominos[i].length; j++) {
      sum += Number(dominos[i][j]);
    }
  }

  return sum;
};

export default sumDominos;
