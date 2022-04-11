import pieces from '@lib/algorithms/pieces';
import { useCallback, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState<Domino[]>(pieces);
  const [playerDominos, setPlayerDominos] = useState<Domino[]>([]);
  const [enemyDominos, setEnemyDominos] = useState<Domino[]>([]);

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

  return {
    deck,
    setDeck,
    playerDominos,
    setPlayerDominos,
    enemyDominos,
    setEnemyDominos,
  };
};

export default useGame;
