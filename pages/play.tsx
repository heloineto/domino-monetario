import Table from '@components/pageComponents/play/Game';
import Head from 'next/head';

interface Props {}

const PlayPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dominó Monetário</title>
      </Head>
      <Table />
    </>
  );
};

export default PlayPage;
