import isDouble from '@lib/algorithms/isDouble';
import Board from './Board';
import Deck from './Deck';
import Player from './Player';

const STARTING_HAND_SIZE = 13;

class Game {
  playing: boolean = false;
  turn: PlayerType = 'player';
  deck: Deck;
  player: Player;
  enemy: Player;
  board: Board;

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.enemy = new Player();
    this.board = new Board();
  }

  start = () => {
    console.log('STARTING');

    this.playing = true;
    this.deck.shuffle();

    this.player.hand = this.deck.draw(STARTING_HAND_SIZE);
    this.enemy.hand = this.deck.draw(STARTING_HAND_SIZE);

    const firstDomino = this.getFirstDomino();

    if (!firstDomino) return;

    this.board.addDomino(firstDomino, {
      connects: true,
      rotation: isDouble(firstDomino) ? 0 : -90,
    });
  };

  getFirstDomino() {
    const playerMax = this.player.findMaxDomino();
    const enemyMax = this.enemy.findMaxDomino();

    if (playerMax.index === undefined || enemyMax.index === undefined) return;

    if (playerMax.score > enemyMax.score) {
      const [firstDomino] = this.player.hand.splice(playerMax.index, 1);
      this.turn = 'enemy';

      return firstDomino;
    }

    const [firstDomino] = this.enemy.hand.splice(enemyMax.index, 1);
    this.turn = 'player';

    return firstDomino;
  }
}

export default Game;
