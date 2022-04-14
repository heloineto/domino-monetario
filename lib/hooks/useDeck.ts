import dominos from '@lib/algorithms/dominos';
import { shuffle as _shuffle } from 'lodash';
import { useCallback, useState } from 'react';

const useDeck = () => {
  const [deck, setDeck] = useState(dominos);

  const shuffle = useCallback(
    () =>
      setDeck((currDeck) => {
        const newDeck = [...currDeck];
        return _shuffle(newDeck);
      }),
    [setDeck]
  );

  const draw = useCallback(
    (quantity = 0) => {
      const newDeck = [...deck];
      const drawnDominos: Domino[] = [];

      for (let i = 0; i < quantity; i++) {
        const domino = newDeck.pop();

        if (!domino) break;

        drawnDominos.push(domino);
      }

      console.log(newDeck);

      setDeck(newDeck);

      return drawnDominos;
    },
    [setDeck, deck]
  );

  return { value: deck, shuffle, draw };
};

export default useDeck;
