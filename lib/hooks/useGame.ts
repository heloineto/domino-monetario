import INITIAL_STATE from "@lib/game/globals/INITIAL_STATE";
import { cloneDeep } from "lodash";
import { useEffect, useReducer } from "react";
import gameReducer, { GAME_ACTIONS_TYPES } from "@lib/reducers/gameReducer";
import { numberToMoneyValue } from "@lib/game/globals/DOMINOS";

const useGame = () => {
  const [game, dispatch] = useReducer(gameReducer, cloneDeep(INITIAL_STATE));

  useEffect(() => {
    if (game.turn === "enemy") {
      dispatch({ type: GAME_ACTIONS_TYPES.MAKE_ENEMY_PLAY });
      fetch("https://peaceful-bastion-30528.herokuapp.com/", {
        method: "POST",
        body: JSON.stringify({
          player: game.enemy.hand.map((domino) =>
            domino.map((value) => Number(value))
          ),
          table: game.board.boardDominos
            .map(({ domino, rotation }) =>
              rotation === 90 ? [...domino].reverse() : domino
            )
            .map((domino) => domino.map((value) => Number(value))),
          pieces: [...game.deck, ...game.player.hand].map((domino) =>
            domino.map((value) => Number(value))
          ),
        }),
      })
        .then((r) => {
          return r.json();
        })
        .then((r: { piece: [number, number]; side: string }) => {
          console.log({ r });
          dispatch({
            type: GAME_ACTIONS_TYPES.TEST,
            payload: {
              domino: [
                String(r.piece[0]) as MoneyValue,
                String(r.piece[1]) as MoneyValue,
              ],
            },
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [game.turn]);

  return { game, dispatch };
};

export default useGame;
