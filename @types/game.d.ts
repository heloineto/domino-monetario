type MoneyValue =
  | '0'
  | '0.05'
  | '0.1'
  | '0.25'
  | '0.5'
  | '1'
  | '2'
  | '5'
  | '10'
  | '20'
  | '50'
  | '100'
  | '200';

type Domino = [MoneyValue, MoneyValue];

type WheelConfig = {
  length: number;
  rectHeight: number;
  rectWidth: number;
  radius: number;
  divider: number;
  middleIndex: number;
  angleStep: number;
  rectRadius: number;
};

type MaxDominoInfo = {
  moneyValue: number;
  index: undefined | number;
  hand: undefined | Domino[];
};

type Board = {
  start?: MoneyValue;
  end?: MoneyValue;
  boardDominos?: BoardDomino[];
};

type BoardDomino = {
  rotate: 0 | -90 | 90;
  domino: Domino;
};

type Position = 'start' | 'end';
