import INITIAL_STATE from '@lib/game/globals/INITIAL_STATE';
import { cloneDeep } from 'lodash';

const resetGame = () => cloneDeep(INITIAL_STATE);

export default resetGame;
