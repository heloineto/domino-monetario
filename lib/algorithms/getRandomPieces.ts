import pieces from './pieces';

const getRandomPieces = (qty = 0) => {
  const randomPieces = [];

  for (let i = 0; i < qty; i++) {
    const piece = pieces[Math.floor(Math.random() * pieces.length)];
    randomPieces.push(piece);
  }

  return randomPieces;
};

export default getRandomPieces;
