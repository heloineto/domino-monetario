import dominos from '@lib/algorithms/dominos';
import draw from '@lib/algorithms/draw';
import findMax from '@lib/algorithms/findMax';
import isDouble from '@lib/algorithms/isDouble';
import { shuffle } from 'lodash';
import { useCallback, useState } from 'react';
import useBoard from './useBoard';
import useDeck from './useDeck';
import useDrag from './useDrag';
import usePlayer from './usePlayer';
import useTurn from './useTurn';

const useGame = () => {
  const [playing, setPlaying] = useState(false);
  const { turn, turnActions } = useTurn();
  const { deck, deckActions } = useDeck();
  const { board, boardActions } = useBoard();
  const player = usePlayer('player', { board, boardActions });
  const enemy = usePlayer('enemy', { board, boardActions });
  const { drag, dragActions } = useDrag(player);

  const start = useCallback(() => {
    if (playing) return;
    setPlaying(true);

    const newDeck = shuffle(deck);

    const playerDominos = draw(newDeck, 13);
    const enemyDominos = draw(newDeck, 13);

    const playerMax = findMax(playerDominos);
    const enemyMax = findMax(enemyDominos);

    console.log({ playerMax, enemyMax });

    let firstDomino: Domino | undefined;
    if (playerMax.index && enemyMax.index) {
      if (playerMax.score > enemyMax.score) {
        [firstDomino] = playerDominos.splice(playerMax.index, 1);
        turnActions.set('enemy');
      } else {
        [firstDomino] = enemyDominos.splice(enemyMax.index, 1);
        turnActions.set('player');
      }
    }

    console.log({ firstDomino });

    if (firstDomino) {
      boardActions.add('start', isDouble(firstDomino) ? 0 : -90, firstDomino);
    }

    player.handActions.set(playerDominos);
    enemy.handActions.set(enemyDominos);

    deckActions.set(newDeck);
  }, [
    deck,
    deckActions,
    enemy.handActions,
    player.handActions,
    playing,
    boardActions,
    turnActions,
  ]);

  const reset = useCallback(() => {
    deckActions.set(dominos);
    player.handActions.set([]);
    enemy.handActions.set([]);
    boardActions.setBoardDominos([]);
    setPlaying(false);
  }, []);

  return {
    turn,
    deck,
    board,
    enemy,
    player,
    drag,
    playing,
    boardActions,
    dragActions,
    turnActions,
    gameActions: {
      start,
      reset,
    },
  };
};

export default useGame;
