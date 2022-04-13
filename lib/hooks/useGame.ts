import dominos from '@lib/algorithms/dominos';
import { draw } from '@lib/algorithms/helpers';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import useBoard from './useBoard';
import useDrag from './useDrag';
import useEnemy from './useEnemy';
import usePlayer from './usePlayer';

const useGame = () => {
  const [deck, setDeck] = useState(shuffle(dominos));
  const [turn, setTurn] = useState<Player>('player');

  const enemy = useEnemy();
  const player = usePlayer();
  const board = useBoard();
  const drag = useDrag(board);

  useEffect(() => {
    let _deck, _playerHand, _enemyHand;

    [_deck, _playerHand] = draw(deck, 13);
    [_deck, _enemyHand] = draw(_deck, 0);

    // let firstDomino;
    // [_playerHand, _enemyHand, firstDomino] = findFirstDomino(_playerHand, _enemyHand);

    player.setHand(_playerHand);
    enemy.setHand(_enemyHand);
    setDeck(_deck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    deck,
    setDeck,
    player,
    enemy,
    drag,
    board,
  };
};

export default useGame;
