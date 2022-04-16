import { moneyValues } from '@lib/game/globals/DOMINOS';
import DominoGridDomino from './DominoGrid.Domino';

interface Props {}

const DominoGrid = (props: Props) => {
  const renderGrids = () => {
    const grids: ReactNode[] = [];

    for (let i = 0; i < moneyValues.length; i++) {
      const dominos: Domino[] = [];

      for (let j = i; j < moneyValues.length; j++) {
        dominos.push([moneyValues[i], moneyValues[j]]);
      }

      grids.push(
        <div key={i} className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-x-2.5">
          {Array.from({ length: i }).map((_, index) => (
            <div key={index} />
          ))}
          {dominos.map((domino) => (
            <DominoGridDomino key={`${domino[0]}-${domino[1]}`} domino={domino} />
          ))}
        </div>
      );
    }

    return grids;
  };

  return <div className="space-y-2.5">{renderGrids()}</div>;
};

export default DominoGrid;
