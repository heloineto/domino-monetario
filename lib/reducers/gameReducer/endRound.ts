import sumDominos from '@lib/game/player/sumDominos';

const endRound = (result: RoundResult, game: Game) => {
  const updates: Partial<Game> = {};

  updates.round = {
    ...game.round,
    over: true,
    results: [...game.round.results, result],
  };

  if (result === 'DRAW') {
    updates.player = {
      ...game.player,
      money: game.player.money + sumDominos(game.enemy.hand),
    };
    updates.enemy = {
      ...game.enemy,
      money: game.enemy.money + sumDominos(game.player.hand),
    };
  } else if (result === 'ENEMY_WINS') {
    updates.enemy = {
      ...game.enemy,
      money: game.enemy.money + sumDominos(game.player.hand),
    };
  } else {
    updates.player = {
      ...game.player,
      money: game.player.money + sumDominos(game.enemy.hand),
    };
  }

  const newGame = { ...game, ...updates };

  if (newGame.round.results.length >= newGame.round.quantity) {
    let winner: Player | 'DRAW' | undefined;

    if (newGame.player.money > newGame.enemy.money) {
      winner = newGame.player;
    } else if (newGame.player.money < newGame.enemy.money) {
      winner = newGame.enemy;
    } else {
      winner = 'DRAW';
    }

    return { ...newGame, winner };
  }

  return newGame;
};

export default endRound;
