import dominos from '@lib/algorithms/dominos';
import { draw, findFirstDomino } from '@lib/algorithms/helpers';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import useBoard from './useBoard';
import useDrag from './useDrag';
import useEnemy from './useEnemy';
import usePlayer from './usePlayer';
import useTurn from './useTurn';

const useGame = () => {
  const [deck, setDeck] = useState(shuffle(dominos));
  const turn = useTurn();
  const enemy = useEnemy();
  const player = usePlayer();
  const board = useBoard();

  const drag = useDrag(board, player);

  useEffect(() => {
    let _deck, _playerHand, _enemyHand;

    [_deck, _playerHand] = draw(deck, 13);
    [_deck, _enemyHand] = draw(_deck, 0);

    const result = findFirstDomino(_playerHand, _enemyHand);

    if (!result) {
      return;
    }

    _playerHand = result.playerHand;
    _enemyHand = result.enemyHand;

    turn.setPlayer(result.player);
    // board.addDomino('start', 0, result.domino);
    player.setHand(_playerHand);
    enemy.setHand(_enemyHand);
    setDeck(_deck);

    turn.toggle;
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
