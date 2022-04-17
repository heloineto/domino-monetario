const getGameInfo = (
  winner: Player | 'DRAW'
): { message: string; colorName: 'slate' | 'blue' | 'orange' } => {
  if (winner === 'DRAW') return { message: 'Empate', colorName: 'slate' };

  if (winner.type === 'enemy') return { message: 'Robô venceu!', colorName: 'blue' };
  return { message: 'Você venceu!', colorName: 'orange' };
};

export default getGameInfo;
