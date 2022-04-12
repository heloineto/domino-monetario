import dominos from '@lib/algorithms/dominos';
import { useMemo } from 'react';
import DominoGridDomino from './DominoGrid.Domino';

interface Props {}

const DominoGrid = (props: Props) => {
  const dominosArr = useMemo(() => Array.from(dominos), [dominos]);

  return (
    <div
      className="grid overflow-x-hidden"
      style={{
        gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
      }}
    >
      {dominosArr.slice(0, 13).map((domino) => (
        <DominoGridDomino key={`${domino[0]}-${domino[1]}`} domino={domino} />
      ))}
      <div />
      {dominosArr.slice(13, 25).map((domino) => (
        <DominoGridDomino key={`${domino[0]}-${domino[1]}`} domino={domino} />
      ))}
    </div>
  );
};

export default DominoGrid;
