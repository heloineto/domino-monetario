const getRoundInfo = (
  result: RoundResult
): { message: string; colorName: 'slate' | 'blue' | 'orange' } => {
  if (result === 'DRAW') return { message: 'Empate', colorName: 'slate' };
  if (result === 'ENEMY_WINS') return { message: 'Robô venceu!', colorName: 'blue' };
  return { message: 'Você venceu!', colorName: 'orange' };
};

export default getRoundInfo;
