import PlayerBank from './Player.Bank';
import PlayerDomino from './Player.Domino';
import { useState } from 'react';

interface Props {}

const Player = (props: Props) => {
  // const dominos: [MoneyValue, MoneyValue][] = [
  //   ['0.5', '100'],
  //   ['0', '100'],
  //   ['0', '0'],
  //   ['0.1', '0.1'],
  //   ['200', '0.5'],
  //   ['200', '0.25'],
  //   ['100', '0.25'],
  //   ['50', '0.25'],
  //   ['0.05', '1'],
  //   // ['0.5', '1'],
  //   // ['0.5', '0.5'],
  //   // ['50', '0.5'],
  //   // ['1', '1'],
  // ];

  const [dominos, setDominos] = useState<[MoneyValue, MoneyValue][]>([
    ['0.5', '100'],
    ['0', '100'],
    ['0', '0'],
    ['0.1', '0.1'],
    ['200', '0.5'],
    ['200', '0.25'],
    ['100', '0.25'],
    ['50', '0.25'],
    ['0.05', '1'],
    // ['0.5', '1'],
    // ['0.5', '0.5'],
    // ['50', '0.5'],
    // ['1', '1'],
  ]);

  const middle = (dominos.length - 1) / 2;

  return (
    <div className="flex h-2/6 w-full bg-lime-100">
      <div className="h-full w-60"></div>
      <div className="flex h-full w-full items-center justify-center space-x-2">
        {dominos.map((domino, index) => (
          <div key={`${domino[0]}-${domino[1]}`}>
            <PlayerDomino
              domino={domino}
              style={{
                rotate: index - middle,
                translateY: Math.pow(Math.abs(index - middle), 2),
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex h-full w-60 justify-end">
        <PlayerBank />
      </div>
    </div>
  );
};

export default Player;
