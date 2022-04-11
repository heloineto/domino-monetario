import Domino from '@components/pageComponents/home/Domino';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const HomePage: NextPage = () => {
  // const;

  const dominos: [MoneyValue, MoneyValue][] = [
    ['0.5', '100'],
    ['0', '100'],
    ['0', '0'],
    ['0.1', '0.1'],
    ['200', '0.5'],
    ['200', '0.25'],
    ['100', '0.25'],
    ['50', '0.25'],
    ['0.05', '1'],
    // ['0.5', '1'],
    // ['0.5', '0.5'],
    // ['50', '0.5'],
    // ['1', '1'],
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
          <div className="flex items-center justify-center space-x-2">
            {dominos.map((domino, index) => (
              <motion.div
                key={`${domino[0]}-${domino[1]}`}
                whileHover={{ scale: 1.3, zIndex: 10 }}
                style={{
                  rotate: -(index - middle),
                  translateY: -Math.pow(Math.abs(index - middle), 2) - 40,
                }}
              >
                <Domino
                  className="h-40 w-auto rounded-lg border-2 border-slate-400 shadow-md hover:shadow-2xl"
                  domino={domino}
                  hidden
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-3/6 w-full bg-sky-100"></div>
        <div className="flex h-2/6 w-full bg-lime-100">
          <div className="h-full w-60"></div>
          <div className="flex h-full w-full items-center justify-center space-x-2">
            {dominos.map((domino, index) => (
              <motion.div
                key={`${domino[0]}-${domino[1]}`}
                className="cursor-pointer"
                whileHover={{ scale: 1.3, translateY: -40, zIndex: 10 }}
                style={{
                  rotate: index - middle,
                  translateY: Math.pow(Math.abs(index - middle), 2),
                }}
              >
                <Domino
                  className="h-60 w-auto rounded-lg border-2 border-slate-400 shadow-md hover:shadow-2xl"
                  domino={domino}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex h-full w-60 justify-end">
            <motion.div
              className="relative -mt-20 flex h-40 w-40"
              whileHover={{ scale: 1.2 }}
            >
              <div
                className="absolute top-[35%] left-[10%] z-50 w-32 text-center font-display text-xl tracking-widest text-[#F07A6D]"
                style={{
                  textShadow:
                    '-2px 0 #75231A, 0 2px #75231A, 2px 0 #75231A, 0 -2px #75231A',
                }}
              >
                <div>0000,00</div>
                <div>R$</div>
              </div>
              <Image src="/piggy-bank.svg" layout="fill" />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
