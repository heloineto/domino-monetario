import dominos from '@lib/algorithms/dominos';
import { useEffect, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState(dominos);

  const draw = (quantity = 0) => {
    const deckCopy = [...deck];
    const drawnDominos = [];

    for (let i = 0; i < quantity; i++) {
      if (!deckCopy.length) break;

      const randomIndex = Math.floor(Math.random() * deckCopy.length);

      const [domino] = deckCopy.splice(randomIndex, 1);

      drawnDominos.push(domino);
    }

    setDeck(deckCopy);

    return drawnDominos;
  };
  const [playerHand, setPlayerHand] = useState<Domino[]>([]);
  const [enemyHand, setEnemyHand] = useState<Domino[]>([]);

  useEffect(() => {
    setPlayerHand(draw(13));
    setEnemyHand(draw(13));
  }, []);

  return {
    deck,
    setDeck,
    playerHand,
    setPlayerHand,
    enemyHand,
    setEnemyHand,
  };
};

export default useGame;
