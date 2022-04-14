import { useEffect } from 'react';
import useBoard from './useBoard';
import useDeck from './useDeck';
import useDrag from './useDrag';
import usePlayer from './usePlayer';
import useTurn from './useTurn';

const useGame = () => {
  const turn = useTurn();
  const deck = useDeck();
  const board = useBoard();
  const enemy = usePlayer();
  const player = usePlayer();
  const drag = useDrag(board, player);

  // Start Game
  useEffect(() => {
    player.hand.set([]);
    // enemy.hand.set([]);

    deck.shuffle();

    const playerDominos = deck.draw(13);
    // const enemyDominos = deck.draw(0);

    player.hand.add(...playerDominos);
    // enemy.hand.add(...enemyDominos);

    // const result = findFirstDomino(_playerHand, _enemyHand);

    // if (!result) {
    //   return;
    // }

    // _playerHand = result.playerHand;
    // _enemyHand = result.enemyHand;

    // turn.setPlayer(result.player);
    // // board.addDomino('start', 0, result.domino);
    // player.setHand(_playerHand);
    // enemy.setHand(_enemyHand);
    // setDeck(_deck);

    // turn.toggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    turn,
    deck,
    board,
    enemy,
    player,
    drag,
  };
};

export default useGame;
