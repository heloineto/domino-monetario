import findMaxDomino from './player/findMaxDomino';

const getFirstDomino = (player: Player, enemy: Player) => {
  const playerMax = findMaxDomino(player);
  const enemyMax = findMaxDomino(enemy);

  if (playerMax.index === undefined || enemyMax.index === undefined) return;

  if (playerMax.score > enemyMax.score) {
    return { playerType: 'player', index: playerMax.index };
  }

  return { playerType: 'enemy', index: enemyMax.index };
};

export default getFirstDomino;
