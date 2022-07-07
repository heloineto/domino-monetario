import isDouble from '@lib/game/domino/isDouble';
import draw from '@lib/game/player/draw';
import findMaxDomino from '@lib/game/player/findMaxDomino';
import { shuffle } from 'lodash';
import makePlay from './makePlay';

const startGame = (
  board: Board,
  player: Player,
  enemy: Player,
  deck: Domino[],
  initialHandSize: number
) => {
  const updates: Partial<Game> = { playing: true };

  updates.deck = shuffle(deck);

  const firstDraw = draw(player, updates.deck, initialHandSize);
  updates.player = firstDraw.player;
  updates.deck = firstDraw.deck;

  const secondDraw = draw(enemy, updates.deck, initialHandSize);
  updates.enemy = secondDraw.player;
  updates.deck = secondDraw.deck;

  const playerMax = findMaxDomino(updates.player);
  const enemyMax = findMaxDomino(updates.enemy);

  if (playerMax.index === undefined || enemyMax.index === undefined) return;

  if (playerMax.score > enemyMax.score) {
    const playUpdates = makePlay(updates.player, board, 'player', playerMax.index, {
      connects: true,
      rotation: isDouble(updates.player.hand[playerMax.index]) ? 0 : -90,
    });

    return { ...updates, ...playUpdates };
  }

  const playUpdates = makePlay(updates.enemy, board, 'enemy', enemyMax.index, {
    connects: true,
    rotation: isDouble(updates.enemy.hand[enemyMax.index]) ? 0 : -90,
  });

  return { ...updates, ...playUpdates };
};

export default startGame;
