import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer';
import { Dispatch } from 'react';
import getConnection from './domino/getConnection';

const playWithAStar = (game: Game, dispatch: Dispatch<GameAction>) => {
  const requestBody = JSON.stringify({
    player: game.enemy.hand.map((domino) => domino.map((value) => Number(value))),
    table: game.board.boardDominos
      .map(({ domino, rotation }) => (rotation === 90 ? [...domino].reverse() : domino))
      .map((domino) => domino.map((value) => Number(value))),
    pieces: [...game.deck, ...game.player.hand].map((domino) =>
      domino.map((value) => Number(value))
    ),
  });

  console.log(requestBody);

  fetch('https://peaceful-bastion-30528.herokuapp.com/', {
    method: 'POST',
    body: requestBody,
  })
    .then((r) => {
      return r.json();
    })
    .then((response: { piece: [number, number]; side: Position }) => {
      console.log(response);

      let { piece } = response;
      const { side } = response;

      if (piece[0] < piece[1]) piece = piece.reverse() as [number, number];

      const domino: Domino = [
        String(piece[0]) as MoneyValue,
        String(piece[1]) as MoneyValue,
      ];

      const hand = game.enemy.hand;
      let index: number | undefined;

      for (let i = 0; i < hand.length; i++) {
        if (hand[i][0] === domino[0] && hand[i][1] === domino[1]) {
          index = i;
          break;
        }
      }

      const connection = getConnection(domino, game.board.edges[side]);

      if (!index || !connection.connects) {
        console.log(game.enemy.hand, connection, domino);
        return;
      }

      dispatch({
        type: GAME_ACTIONS_TYPES.MAKE_PLAY,
        payload: {
          playerId: 'enemy',
          index,
          connection,
        },
      });
    })
    .catch((e) => {
      console.log(e);
    });

  return;
};

export default playWithAStar;
