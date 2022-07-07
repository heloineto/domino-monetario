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

type PlayerId = 'player' | 'enemy';
type Turn = PlayerId;

type DragTarget = {
  id: string;
  connection: Connection;
  tileRotation?: number;
};

type AIAlgorithm = 'GREEDY_SEARCH' | 'A_START';

type Player = {
  hand: Domino[];
  money: number;
  type: PlayerId;
};

type Board = {
  boardDominos: BoardDomino[];
  edges: {
    start: Edge | null;
    end: Edge | null;
  };
};

type Game = {
  dominos: Domino[];
  initialHandSize: number;
  playing: boolean;
  turn: PlayerId;
  deck: Domino[];
  aiAlgorithm: AIAlgorithm;
  round: RoundObject;
  winner: Player | 'DRAW' | undefined | null;
  player: Player;
  enemy: Player;
  board: Board;
};

type RoundResult = 'DRAW' | 'PLAYER_WINS' | 'ENEMY_WINS';

type Tile = {
  x: number;
  y: number;
  height: number;
  width: number;
  double: boolean;
  rotation?: number;
  corner?: boolean;
};

type Rect = {
  width: number;
  height: number;
};

type RoundObject = {
  quantity: number;
  over: boolean;
  results: RoundResult[];
};
