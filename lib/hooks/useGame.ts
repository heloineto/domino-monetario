import dominos from '@lib/algorithms/dominos';
import { draw, findFirstDomino } from '@lib/algorithms/helpers';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import useBoard from './useBoard';
import useDrag from './useDrag';

const useGame = () => {
  const [deck, setDeck] = useState(shuffle(dominos));
  const [playerHand, setPlayerHand] = useState<Domino[]>([]);
  const [enemyHand, setEnemyHand] = useState<Domino[]>([]);

  const drag = useDrag();
  const board = useBoard();

  useEffect(() => {
    let _deck, _playerHand, _enemyHand;

    [_deck, _playerHand] = draw(deck, 2);
    [_deck, _enemyHand] = draw(_deck, 0);

    let firstDomino;
    [_playerHand, _enemyHand, firstDomino] = findFirstDomino(_playerHand, _enemyHand);

    setPlayerHand(_playerHand);
    setEnemyHand(_enemyHand);
    setDeck(_deck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    deck,
    setDeck,
    playerHand,
    setPlayerHand,
    enemyHand,
    setEnemyHand,
    drag,
    board,
  };
};

export default useGame;
