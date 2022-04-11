import pieces from '@lib/algorithms/pieces';
import { useCallback, useEffect, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState<Domino[]>(pieces);
  const [playerDominos, setPlayerDominos] = useState<Domino[]>([]);
  const [enemyDominos, setEnemyDominos] = useState<Domino[]>([]);

  // const getPieces = useCallback(
  //   (deckMutable: Domino[], qty = 0) => {
  //     const randomPieces: Domino[] = [];

  //     for (let i = 0; i < qty; i++) {
  //       const randomIndex = Math.floor(Math.random() * deckMutable.length);

  //       const [piece] = deckMutable.splice(randomIndex, 1);
  //       randomPieces.push(piece);
  //     }

  //     setDeck(deckMutable);

  //     return randomPieces;
  //   },
  //   [setDeck]
  // );

  const draw = (player: 'player' | 'enemy', qty = 0) => {
    const deckMutable = [...deck];
    const drawnPieces: Domino[] = [];

    for (let i = 0; i < qty; i++) {
      const randomIndex = Math.floor(Math.random() * deckMutable.length);

      const [piece] = deckMutable.splice(randomIndex, 1);

      console.log(piece);

      drawnPieces.push(piece);
    }

    switch (player) {
      case 'player':
        setPlayerDominos((value) => [...value, ...drawnPieces]);
        break;
      case 'enemy':
        setEnemyDominos((value) => [...value, ...drawnPieces]);
        break;
    }

    setDeck(deckMutable);
  };

  console.log(deck.length);

  useEffect(() => {
    draw('player', 7);
    draw('enemy', 7);
  }, []);

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
