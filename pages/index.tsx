import Head from 'next/head';
import Game from '@components/pageComponents/play/Game';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dominó Monetário</title>
      </Head>
      <Game />
    </>
  );
};

export default HomePage;
