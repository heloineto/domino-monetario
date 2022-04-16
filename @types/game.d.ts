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

type Rotation = 0 | -90 | 90;

type BoardDomino = {
  rotation: Rotation;
  domino: Domino;
};

type Edge = {
  value: MoneyValue;
  position: Position;
};

type Position = 'start' | 'end';

type Connection = {
  connects: boolean;
  rotation: Rotation;
  edge?: Edge | null;
};

type PlayerType = 'player' | 'enemy';

type DragTarget = {
  id: string;
  edge: Edge | null;
  connection: Connection;
};
