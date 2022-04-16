import dominos from '@lib/algorithms/dominos';
import { shuffle } from 'lodash';

class Deck {
  dominos: Domino[] = dominos;

  shuffle() {
    this.dominos = shuffle(this.dominos);
  }

  draw(quantity: number) {
    const drawnDominos: Domino[] = [];

    for (let i = 0; i < quantity; i++) {
      const domino = this.dominos.pop();

      if (!domino) break;

      drawnDominos.push(domino);
    }

    return drawnDominos;
  }
}

export default Deck;
