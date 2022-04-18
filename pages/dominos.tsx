import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import DominoGrid from '@components/pageComponents/dominos/DominoGrid';
import DominoWheel from '@components/pageComponents/dominos/DominoWheel';
import { ButtonGroup } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

interface Props {}

const PiecesPage = (props: Props) => {
  const [view, setView] = useState<'grid' | 'wheel'>('grid');

  return (
    <>
      <Head>
        <title>Dominó Monetário - Dominós</title>
      </Head>
      <div>
        <div className="my-5 flex items-center justify-center">
          <ButtonGroup size="large">
            <PrimaryButton
              className="w-24"
              variant={view === 'grid' ? 'contained' : 'outlined'}
              onClick={() => setView('grid')}
            >
              GRID
            </PrimaryButton>
            <PrimaryButton
              className="w-24"
              variant={view === 'wheel' ? 'contained' : 'outlined'}
              onClick={() => setView('wheel')}
            >
              WHEEL
            </PrimaryButton>
          </ButtonGroup>
        </div>
        {view === 'grid' ? <DominoGrid /> : <DominoWheel />}
      </div>
    </>
  );
};

export default PiecesPage;
