import PiecesGrid from '@components/pageComponents/dominos/PiecesGrid';
import Head from 'next/head';

interface Props {}

const PiecesPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dominó Monetário - Dominós</title>
      </Head>
      <PiecesGrid />
    </>
  );
};

export default PiecesPage;
