import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import { ButtonGroup, FormControl, FormLabel } from '@mui/material';
import { useStartMenu } from './context/StartMenuContext';

interface Props {}

const StartMenuRounds = (props: Props) => {
  const { rounds, setRounds } = useStartMenu();

  return (
    <FormControl className="w-full" component="fieldset" variant="standard">
      <FormLabel
        className="font-display text-xl tracking-wider text-slate-800"
        component="legend"
      >
        Rodadas
      </FormLabel>
      <div className="mt-2.5 flex w-full items-center justify-center">
        <ButtonGroup className="w-full">
          <PrimaryButton
            className="w-1/3"
            colorName="emerald"
            variant={rounds === 1 ? 'contained' : 'outlined'}
            onClick={() => setRounds(1)}
          >
            1
          </PrimaryButton>
          <PrimaryButton
            className="w-1/3"
            colorName="orange"
            variant={rounds === 2 ? 'contained' : 'outlined'}
            onClick={() => setRounds(2)}
          >
            2
          </PrimaryButton>
          <PrimaryButton
            className="w-1/3"
            colorName="red"
            variant={rounds === 3 ? 'contained' : 'outlined'}
            onClick={() => setRounds(3)}
          >
            3
          </PrimaryButton>
        </ButtonGroup>
      </div>
    </FormControl>
  );
};

export default StartMenuRounds;
