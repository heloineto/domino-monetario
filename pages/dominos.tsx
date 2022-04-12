import PiecesGrid from '@components/pageComponents/dominos/DominoGrid';
import DominoWheel from '@components/pageComponents/dominos/DominoWheel';
import PlayerDomino from '@components/pageComponents/play/Player/Player.Domino';
import Head from 'next/head';

interface Props {}

const PiecesPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dominó Monetário - Dominós</title>
      </Head>
      {/* <PiecesGrid /> */}
      <DominoWheel />
    </>
  );
};

export default PiecesPage;
