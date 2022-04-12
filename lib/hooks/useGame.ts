import dominos from '@lib/algorithms/dominos';
import { draw, findFirstDomino } from '@lib/algorithms/helpers';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState(shuffle(dominos));
  const [playerHand, setPlayerHand] = useState<Domino[]>([]);
  const [enemyHand, setEnemyHand] = useState<Domino[]>([]);

  const [board, setBoard] = useState();

  useEffect(() => {
    let _deck, _playerHand, _enemyHand;

    [_deck, _playerHand] = draw(deck, 13);
    [_deck, _enemyHand] = draw(_deck, 0);

    let firstDomino;
    [_playerHand, _enemyHand, firstDomino] = findFirstDomino(_playerHand, _enemyHand);

    console.log(firstDomino);

    setPlayerHand(_playerHand);
    setEnemyHand(_enemyHand);
    setDeck(_deck);
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
