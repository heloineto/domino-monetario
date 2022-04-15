import { Button } from '@mui/material';
import Head from 'next/head';
import Game from '@components/pageComponents/play/Game';

const HomePage: NextPage = () => {
  // const;

  // const middle = dominos.length % 2 === 0 ? dominos.length / 2 + 0.5 : dominos.length / 2;

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
