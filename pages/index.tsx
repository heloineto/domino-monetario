import Table from '@components/pageComponents/home/Table';
import Head from 'next/head';

const HomePage: NextPage = () => {
  // const;

  // const middle = dominos.length % 2 === 0 ? dominos.length / 2 + 0.5 : dominos.length / 2;

  return (
    <>
      <Head>
        <title>Dominó Monetário</title>
      </Head>
      <Table />
    </>
  );
};

export default HomePage;
