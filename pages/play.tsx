import Game from '@components/pageComponents/play/Game';
import Head from 'next/head';

interface Props {}

const PlayPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dominó Monetário</title>
      </Head>
      <Game />
    </>
  );
};

export default PlayPage;
