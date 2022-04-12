import DominoWheel from '@components/pageComponents/dominos/DominoWheel';
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
