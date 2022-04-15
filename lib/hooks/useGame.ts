import draw from '@lib/algorithms/draw';
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

    player.handActions.set(playerDominos);
    enemy.handActions.set(enemyDominos);
    deckActions.set(newDeck);
  }, [deck, deckActions, enemy.handActions, player.handActions, playing]);

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
    },
  };
};

export default useGame;
