import dominos from '@lib/algorithms/dominos';
import { useEffect, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState(dominos);
  const [playerHand, setPlayerHand] = useState<Domino[]>([]);
  const [enemyHand, setEnemyHand] = useState<Domino[]>([]);

  const shuffle = (shuffledDeck: Domino[]) => {
    let currentIndex = shuffledDeck.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = [
        shuffledDeck[randomIndex],
        shuffledDeck[currentIndex],
      ];
    }

    return shuffledDeck;
  };

  const draw = (quantity = 0) => {
    const drawnDominos: Domino[] = [];

    setDeck((before) => {
      const after = [...before];

      for (let i = 0; i < quantity; i++) {
        const domino = after.pop();

        if (!domino) break;

        drawnDominos.push(domino);
      }

      return after;
    });

    return drawnDominos;
  };

  useEffect(() => {
    setDeck((currDeck) => shuffle([...currDeck]));

    setPlayerHand(draw(13));
    setEnemyHand(draw(0));
  }, []);

  return {
    deck,
    setDeck,
    playerHand,
    setPlayerHand,
    enemyHand,
    setEnemyHand,
    draw,
    shuffle,
  };
};

export default useGame;
