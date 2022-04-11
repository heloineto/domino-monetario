import Domino from '@components/pageComponents/home/Domino';
import { motion } from 'framer-motion';
import Head from 'next/head';

const HomePage: NextPage = () => {
  // const;

  const dominos = [
    [0, 100],
    [0, 0],
    [200, 0.5],
    [200, 0.25],
    [100, 0.25],
    [50, 0.25],
    [0.05, 1],
    [0.5, 1],
    [0.5, 0.5],
    [50, 0.5],
    [1, 1],
  ];

  const middle = (dominos.length - 1) / 2;

  // const middle = dominos.length % 2 === 0 ? dominos.length / 2 + 0.5 : dominos.length / 2;

  return (
    <>
      <Head>
        <title>Dominó Monetário</title>
      </Head>
      <main className="h-screen w-full overflow-hidden">
        <div className="h-1/6 w-full bg-lime-100">
          <div className="flex items-center justify-center space-x-4">
            {dominos.map((domino, index) => (
              <motion.div
                key={`${domino[0]}-${domino[1]}`}
                whileHover={{ scale: 1.3, zIndex: 10 }}
                style={{
                  rotate: -(index - middle),
                  translateY: -Math.pow(Math.abs(index - middle), 2),
                }}
              >
                <Domino
                  className="h-40 w-auto rounded-lg border-2 border-slate-400 shadow-md hover:shadow-2xl"
                  hidden
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-3/6 w-full bg-sky-100"></div>
        <div className="h-2/6 w-full bg-lime-100">
          <div className="flex items-center justify-center space-x-4">
            {dominos.map((domino, index) => (
              <motion.div
                key={`${domino[0]}-${domino[1]}`}
                whileHover={{ scale: 1.3, zIndex: 10 }}
                style={{
                  rotate: index - middle,
                  translateY: Math.pow(Math.abs(index - middle), 2),
                }}
              >
                <Domino className="h-52 w-auto rounded-lg border-2 border-slate-400 shadow-md hover:shadow-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
