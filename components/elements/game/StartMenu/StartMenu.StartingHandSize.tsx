import SecondaryIconButton from '@components/elements/buttons/SecondaryIconButton';
import billMoneyValues from '@lib/game/constants/billMoneyValues';
import coinMoneyValues from '@lib/game/constants/coinMoneyValues';
import getDominosCount from '@lib/game/getDominosCount';
import { clamp } from '@lib/utils/math';
import { FormControl, FormLabel, TextField } from '@mui/material';
import { Minus, Plus } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useStartMenu } from './context/StartMenuContext';

interface Props {}

const formatInitialHandSize = (value: number, dominosCount: number) => {
  console.log(value, 0, dominosCount / 2);

  const formattedValue = Math.floor(clamp(value, 0, dominosCount / 2));

  return formattedValue;
};

const StartMenuStartingHandSize = (props: Props) => {
  const { initialHandSize, setInitialHandSize, bills, coins } = useStartMenu();
  const [dominosCount, setDominosCount] = useState(0);

  useEffect(() => {
    let moneyValuesCount = 1;

    if (bills) moneyValuesCount += billMoneyValues.length;
    if (coins) moneyValuesCount += coinMoneyValues.length;

    const newDominosCount = getDominosCount(moneyValuesCount);

    setDominosCount(newDominosCount);

    setInitialHandSize((value) =>
      String(formatInitialHandSize(Number(value), newDominosCount))
    );
  }, [bills, coins, setInitialHandSize]);

  return (
    <FormControl className="w-full" component="fieldset" variant="standard">
      <FormLabel
        className="font-display text-xl tracking-wider text-slate-800"
        component="legend"
      >
        Peças na Mão Inicial
      </FormLabel>
      <div className="mx-auto mt-1 flex w-60 items-center gap-2.5">
        <SecondaryIconButton
          className="h-9 w-9"
          colorName="orange"
          onClick={() => {
            setInitialHandSize((value) => {
              let newValueAsNumber = Number(value) - 1;

              newValueAsNumber = formatInitialHandSize(newValueAsNumber, dominosCount);

              return String(newValueAsNumber);
            });
          }}
        >
          <Minus className="h-5 w-5" weight="bold" />
        </SecondaryIconButton>
        <TextField
          className=""
          value={initialHandSize}
          onChange={(event) => {
            const value = event.target.value;
            let valueAsNumber = Number(value);
            if (isNaN(valueAsNumber)) return;

            valueAsNumber = formatInitialHandSize(valueAsNumber, dominosCount);

            setInitialHandSize(String(valueAsNumber));
          }}
          InputProps={{
            className: 'bg-white font-display text-xl',
          }}
          variant="outlined"
        />

        <SecondaryIconButton
          className="h-9 w-9"
          colorName="blue"
          onClick={() => {
            setInitialHandSize((value) => {
              let newValueAsNumber = Number(value) + 1;

              newValueAsNumber = formatInitialHandSize(newValueAsNumber, dominosCount);

              return String(newValueAsNumber);
            });
          }}
        >
          <Plus className="h-5 w-5" weight="bold" />
        </SecondaryIconButton>
      </div>
    </FormControl>
  );
};

export default StartMenuStartingHandSize;
