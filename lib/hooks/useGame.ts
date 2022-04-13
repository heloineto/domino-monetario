import dominos from '@lib/algorithms/dominos';
import { draw, findFirstDomino } from '@lib/algorithms/helpers';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';

const useGame = () => {
  const [deck, setDeck] = useState(shuffle(dominos));
  const [playerHand, setPlayerHand] = useState<Domino[]>([]);
  const [enemyHand, setEnemyHand] = useState<Domino[]>([]);
  const [selectedDomino, setSelectedDomino] = useState<Domino | null>(null);
  const [board, setBoard] = useState<Board>({
    start: '10',
    end: '0.1',
    dominos: [
      {
        rotate: 90,
        domino: ['10', '20'],
      },
      {
        rotate: 0,
        domino: ['10', '10'],
      },
      {
        rotate: -90,
        domino: ['10', '50'],
      },
      {
        rotate: -90,
        domino: ['50', '0.1'],
      },
    ],
  });

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
    draw,
    shuffle,
    selectedDomino,
    setSelectedDomino,
    board,
    setBoard,
  };
};

export default useGame;
