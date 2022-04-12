import dominos from '@lib/algorithms/dominos';
import { draw } from '@lib/algorithms/helpers';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState(shuffle(dominos));
  const [playerHand, setPlayerHand] = useState<Domino[]>([]);
  const [enemyHand, setEnemyHand] = useState<Domino[]>([]);

  useEffect(() => {
    const [_deck, _playerHand] = draw(deck, 13);
    const [__deck, _enemyHand] = draw(_deck, 13);

    setPlayerHand(_playerHand);
    setEnemyHand(_enemyHand);
    setDeck(__deck);
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
