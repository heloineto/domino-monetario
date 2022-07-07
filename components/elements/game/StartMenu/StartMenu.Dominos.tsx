import Money from '@components/pageComponents/play/Money';
import billMoneyValues from '@lib/game/constants/billMoneyValues';
import coinMoneyValues from '@lib/game/constants/coinMoneyValues';
import { FormControl, FormGroup, FormLabel } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useStartMenu } from './context/StartMenuContext';
import StartMenuCheckbox from './StartMenu.Checkbox';

interface Props {}

const StartMenuDominos = (props: Props) => {
  const [disableUncheck, setDisabledUncheck] = useState(false);
  const { coins, setCoins, bills, setBills } = useStartMenu();

  const onChangeCoins = (event: ChangeEvent<HTMLInputElement>) => {
    setCoins(event.target.checked);
  };

  const onChangeBills = (event: ChangeEvent<HTMLInputElement>) => {
    setBills(event.target.checked);
  };

  useEffect(() => {
    setDisabledUncheck(coins !== bills);
  }, [coins, bills]);

  return (
    <FormControl className="w-full" component="fieldset" variant="standard">
      <FormLabel
        className="font-display text-xl tracking-wider text-slate-800"
        component="legend"
      >
        Peças
      </FormLabel>
      <div className="flex w-full gap-2.5">
        <FormGroup className="w-1/3">
          <StartMenuCheckbox
            label="Moedas"
            checkboxProps={{
              disabled: coins && disableUncheck,
              checked: coins,
              onChange: onChangeCoins,
            }}
            popoverProps={{
              children: (
                <div className="flex flex-col gap-1.5 p-2.5 font-display text-lg">
                  As moedas são:
                  <div className="flex gap-2">
                    {coinMoneyValues.map((value) => (
                      <Money key={value} value={value} className="h-14" />
                    ))}
                  </div>
                </div>
              ),
            }}
          />
          <StartMenuCheckbox
            label="Notas"
            checkboxProps={{
              disabled: bills && disableUncheck,
              checked: bills,
              onChange: onChangeBills,
            }}
            popoverProps={{
              children: (
                <div className="flex flex-col gap-1.5 p-2.5 font-display text-lg">
                  As notas são:
                  <div className="flex gap-2">
                    {billMoneyValues.map((value) => (
                      <Money key={value} value={value} className="h-14" />
                    ))}
                  </div>
                </div>
              ),
            }}
          />
        </FormGroup>
        <div className="grid w-2/3 grid-cols-7 grid-rows-2 items-center gap-0.5 rounded-xl border border-slate-500 bg-white p-1.5">
          <Money value="0" />

          {coins
            ? coinMoneyValues.map((value) => <Money key={value} value={value} />)
            : null}
          {bills
            ? billMoneyValues.map((value) => <Money key={value} value={value} />)
            : null}
        </div>
      </div>
    </FormControl>
  );
};

export default StartMenuDominos;
