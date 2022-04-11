import { Button } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
  // const;

  // const middle = dominos.length % 2 === 0 ? dominos.length / 2 + 0.5 : dominos.length / 2;

  return (
    <>
      <Head>
        <title>Dominó Monetário</title>
      </Head>
      <div>
        <Link href="/play" passHref>
          <Button>Jogar</Button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
