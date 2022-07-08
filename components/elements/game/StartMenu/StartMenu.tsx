import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import MenuDialog from '@components/elements/dialog/MenuDialog';
import GameAiAlgorithmPicker from '@components/pageComponents/play/Game/Game.AiAlgorithmPicker';
import { GameContext } from '@lib/context';
import billMoneyValues from '@lib/game/constants/billMoneyValues';
import coinMoneyValues from '@lib/game/constants/coinMoneyValues';
import { GAME_ACTIONS_TYPES } from '@lib/reducers/gameReducer/@types';
import { useContext, useEffect, useState } from 'react';
import { StartMenuProvider } from './context/StartMenuContext';
import StartMenuAdvanced from './StartMenu.Advanced';

const playAudio = (audio: HTMLAudioElement | null) => {
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
};

interface Props {}

const StartMenu = (props: Props) => {
  const { game, dispatch } = useContext(GameContext);
  const [coins, setCoins] = useState(true);
  const [bills, setBills] = useState(true);
  const [rounds, setRounds] = useState(1);
  const [initialHandSize, setInitialHandSize] = useState('13');
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const newAudio = new Audio('/bg-music.mp3');

    setAudio(newAudio);

    const play = () => playAudio(newAudio);

    newAudio.addEventListener('ended', play);

    return () => {
      newAudio.removeEventListener('ended', play);
    };
  }, []);

  return (
    <MenuDialog open={!game?.playing}>
      <StartMenuProvider
        value={{
          coins,
          setCoins,
          bills,
          setBills,
          rounds,
          setRounds,
          initialHandSize,
          setInitialHandSize,
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-y-5">
          <PrimaryButton
            variant="contained"
            onClick={() => {
              playAudio(audio);

              let moneyValues: MoneyValue[] = [];

              if (bills) moneyValues = moneyValues.concat(billMoneyValues);
              if (coins) moneyValues = moneyValues.concat(coinMoneyValues);

              moneyValues.push('0');

              let initialHandSizeNumber = Number(initialHandSize);

              if (isNaN(initialHandSizeNumber)) {
                initialHandSizeNumber = 10;
              }

              dispatch?.({
                type: GAME_ACTIONS_TYPES.START,
                payload: {
                  moneyValues,
                  roundQuantity: rounds,
                  initialHandSize: initialHandSizeNumber,
                },
              });
            }}
          >
            Jogar
          </PrimaryButton>
          <GameAiAlgorithmPicker />
          <StartMenuAdvanced />
        </div>
      </StartMenuProvider>
    </MenuDialog>
  );
};

export default StartMenu;
