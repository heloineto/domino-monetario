import dominos from '@lib/algorithms/dominos';
import { shuffle as _shuffle } from 'lodash';
import { useCallback, useState } from 'react';

const useDeck = () => {
  const [deck, setDeck] = useState(dominos);

  const shuffle = useCallback(() => setDeck((_deck) => _shuffle(_deck)), [setDeck]);

  const draw = useCallback(
    (quantity = 0) => {
      const updatedDeck = [...deck];
      const drawnDominos: Domino[] = [];

      for (let i = 0; i < quantity; i++) {
        const domino = updatedDeck.pop();

        if (!domino) break;

        drawnDominos.push(domino);
      }

      setDeck(updatedDeck);

      return drawnDominos;
    },
    [setDeck, deck]
  );

  return { value: deck, shuffle, draw };
};

export default useDeck;
