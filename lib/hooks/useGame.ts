import pieces from '@lib/algorithms/pieces';
import { useCallback, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState(pieces);

  const getPieces = useCallback(
    (deckMutable: Domino[], qty = 0) => {
      const randomPieces: Domino[] = [];

      for (let i = 0; i < qty; i++) {
        const randomIndex = Math.floor(Math.random() * deckMutable.length);

        const [piece] = deckMutable.splice(randomIndex, 1);
        randomPieces.push(piece);
      }

      setDeck(deckMutable);

      return randomPieces;
    },
    [setDeck]
  );

  const [playerPieces, setPlayerPieces] = useState(getPieces([...deck], 12));
  const [enemyPieces, setEnemyPieces] = useState(getPieces([...deck], 12));

  return { deck, setDeck, playerPieces, setPlayerPieces, enemyPieces, setEnemyPieces };
};

export default useGame;
