import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { CaretDown, GearSix } from 'phosphor-react';
import StartMenuDominos from './StartMenu.Dominos';
import StartMenuRounds from './StartMenu.Rounds';
import StartMenuStartingHandSize from './StartMenu.StartingHandSize';

interface Props {}

const StartMenuAdvanced = (props: Props) => {
  return (
    <div className="w-full">
      <Accordion className="w-full">
        <AccordionSummary
          expandIcon={<CaretDown className="h-5 w-5 text-slate-600" weight="bold" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex items-center gap-4 font-display text-slate-600">
            <GearSix className="h-6 w-6" weight="bold" />
            <div className="text-2xl tracking-wide ">Configurações avançadas</div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-5">
          <StartMenuDominos />
          <StartMenuStartingHandSize />
          <StartMenuRounds />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StartMenuAdvanced;
