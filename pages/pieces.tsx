import Domino from '@components/pageComponents/play/Domino';
import pieces from '@lib/algorithms/pieces';
import { motion } from 'framer-motion';

interface Props {}

const PiecesPage = (props: Props) => {
  return (
    <div
      className="grid "
      style={{
        gridTemplateColumns: 'repeat(13, minmax(0, 1fr))',
      }}
    >
      {Array.from(pieces).map((piece) => (
        <motion.div
          key={`${piece[0]}-${piece[1]}`}
          whileHover={{ scale: 1.3, zIndex: 50 }}
          whileTap={{ scale: 1.1, zIndex: 50, rotate: 0 }}
        >
          <Domino className="h-[12rem] w-auto" domino={piece} />
        </motion.div>
      ))}
    </div>
  );
};

export default PiecesPage;
