import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import { DragContext, GameContext } from '@lib/context';
import classNames from 'clsx';
import { isEmpty } from 'lodash';
import { ArrowFatLineLeft, ArrowFatLineRight } from 'phosphor-react';
import { useContext, useRef } from 'react';
import Deck from '../Deck';
import BoardDomino from './Board.Domino';
import BoardDragPlaceholder from './Board.DragPlaceholder';
import BoardRound from './Board.Round';
import { useHotkeys } from 'react-hotkeys-hook';

interface Props extends ComponentProps<'div'> {}

const Board = ({ className, ...divProps }: Props) => {
  const { game } = useContext(GameContext);
  const drag = useContext(DragContext);

  const scrollRef = useRef<HTMLDivElement>(null);

  const board = game?.board;

  useHotkeys('right,d', () => {
    const scrollElem = scrollRef.current;
    if (!scrollElem) return;

    scrollElem.scrollLeft = scrollElem.scrollWidth;
  });

  useHotkeys('left,a', () => {
    const scrollElem = scrollRef.current;
    if (!scrollElem) return;

    scrollElem.scrollLeft = 0;
  });

  if (!board) return null;

  return (
    <div
      className={classNames(
        className,
        'mx-5 flex overflow-hidden rounded-xl border-4 border-white/50'
      )}
      {...divProps}
    >
      <div className="flex h-full w-24 flex-shrink-0 flex-col items-center justify-center sm:w-28 md:w-32 lg:w-36 xl:w-40">
        <BoardRound />
        <Deck className="w-full" />
      </div>
      <div className="relative flex flex-grow items-center justify-center overflow-x-auto">
        <div className="flex h-full items-center overflow-x-auto" ref={scrollRef}>
          {drag?.dragging ? (
            <BoardDragPlaceholder
              className="flex-shrink-0"
              id="start"
              edge={board.edges.start}
            />
          ) : (
            <div className="flex-shrink-0" style={{ width: 160, height: 160 }} />
          )}
          {board.boardDominos?.map(({ rotation, domino }) => (
            <BoardDomino
              className="flex-shrink-0"
              key={`${domino[0]}-${domino[1]}`}
              domino={domino}
              rotation={rotation}
            />
          ))}
          {board.boardDominos && !isEmpty(board?.boardDominos) && drag?.dragging ? (
            <BoardDragPlaceholder
              className="flex-shrink-0"
              id="end"
              edge={board.edges.end}
            />
          ) : (
            <div className="flex-shrink-0" style={{ width: 160, height: 160 }} />
          )}
        </div>
        {board.boardDominos.length > 5 && (
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-x-5 p-2">
            <SecondaryIconButton
              onClick={() => {
                const scrollElem = scrollRef.current;
                if (!scrollElem) return;

                scrollElem.scrollLeft = 0;
              }}
            >
              <ArrowFatLineLeft className="h-5 w-5" weight="bold" />
            </SecondaryIconButton>
            <SecondaryIconButton
              onClick={() => {
                const scrollElem = scrollRef.current;
                if (!scrollElem) return;

                scrollElem.scrollLeft = scrollElem.scrollWidth;
              }}
            >
              <ArrowFatLineRight className="h-5 w-5" weight="bold" />
            </SecondaryIconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
