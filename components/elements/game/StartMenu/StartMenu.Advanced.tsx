import Money from '@components/pageComponents/play/Money';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { CaretDown, GearSix } from 'phosphor-react';
import StartMenuCheckbox from './StartMenu.Checkbox';

interface Props {}

const StartMenuAdvanced = (props: Props) => {
  return (
    <div className="w-full">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<CaretDown className="h-5 w-5 text-slate-800" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex items-center gap-4 font-display text-slate-800">
            <GearSix className="h-6 w-6" weight="bold" />
            <div className="text-2xl tracking-wide ">Configurações avançadas</div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl className="w-full" component="fieldset" variant="standard">
            <FormLabel
              className="font-display text-xl tracking-wider text-slate-800"
              component="legend"
            >
              Peças
            </FormLabel>
            <div className="flex w-full gap-2.5">
              <FormGroup>
                <StartMenuCheckbox
                  label="Moedas"
                  popoverProps={{
                    children: (
                      <div className="flex flex-col gap-1.5 p-2.5 font-display text-lg">
                        As moedas são:
                        <div className="flex gap-2">
                          {(['0', '0.05', '0.1', '0.25', '0.5', '1'] as MoneyValue[]).map(
                            (value) => (
                              <Money key={value} value={value} className="h-14" />
                            )
                          )}
                        </div>
                      </div>
                    ),
                  }}
                />
                <StartMenuCheckbox
                  label="Notas"
                  popoverProps={{
                    children: (
                      <div className="flex flex-col gap-1.5 p-2.5 font-display text-lg">
                        As notas são:
                        <div className="flex gap-2">
                          {(
                            [
                              '0',
                              '2',
                              '5',
                              '10',
                              '20',
                              '50',
                              '100',
                              '200',
                            ] as MoneyValue[]
                          ).map((value) => (
                            <Money key={value} value={value} className="h-14" />
                          ))}
                        </div>
                      </div>
                    ),
                  }}
                />
              </FormGroup>
              <div className="flex max-w-fit flex-grow items-center justify-center rounded-xl border border-slate-500 bg-white p-1">
                <div className="flex flex-wrap gap-0.5">
                  {(
                    [
                      '0',
                      '0.05',
                      '0.1',
                      '0.25',
                      '0.5',
                      '1',
                      '2',
                      '5',
                      '10',
                      '20',
                      '50',
                      '100',
                      '200',
                    ] as MoneyValue[]
                  ).map((value) => (
                    <Money key={value} value={value} className="h-7" />
                  ))}
                </div>
              </div>
            </div>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StartMenuAdvanced;
