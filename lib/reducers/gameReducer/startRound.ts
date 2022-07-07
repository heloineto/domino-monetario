import isDouble from '@lib/game/domino/isDouble';
import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import draw from '@lib/game/player/draw';
import findMaxDomino from '@lib/game/player/findMaxDomino';
import { shuffle } from 'lodash';
import makePlay from './makePlay';

const startRound = (
  player: Player,
  enemy: Player,
  round: RoundObject,
  dominos: Domino[],
  initialHandSize: number
) => {
  const updates: Partial<Game> = { round: { ...round, over: false } };

  updates.turn = 'player';
  updates.board = INITIAL_STATE.board;
  updates.deck = shuffle(dominos);
  updates.player = { ...player, hand: [] };
  updates.enemy = { ...enemy, hand: [] };

  const firstDraw = draw(updates.player, updates.deck, initialHandSize);
  updates.player = firstDraw.player;
  updates.deck = firstDraw.deck;

  const secondDraw = draw(updates.enemy, updates.deck, initialHandSize);
  updates.enemy = secondDraw.player;
  updates.deck = secondDraw.deck;

  const playerMax = findMaxDomino(updates.player);
  const enemyMax = findMaxDomino(updates.enemy);

  if (playerMax.index === undefined || enemyMax.index === undefined) return;

  if (playerMax.score > enemyMax.score) {
    const playUpdates = makePlay(
      updates.player,
      updates.board,
      'player',
      playerMax.index,
      {
        connects: true,
        rotation: isDouble(updates.player.hand[playerMax.index]) ? 0 : -90,
      }
    );

    return { ...updates, ...playUpdates };
  }

  const playUpdates = makePlay(updates.enemy, updates.board, 'enemy', enemyMax.index, {
    connects: true,
    rotation: isDouble(updates.enemy.hand[enemyMax.index]) ? 0 : -90,
  });

  return { ...updates, ...playUpdates };
};

export default startRound;
