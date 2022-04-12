import Domino from '@components/pageComponents/play/Domino';
import { motion } from 'framer-motion';

interface Props {
  domino: Domino;
}

const PiecesGridPiece = ({ domino }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.5, zIndex: 50 }}
      whileTap={{ scale: 1.1, zIndex: 50, rotate: 0 }}
    >
      <Domino className=" w-auto" domino={domino} />
    </motion.div>
  );
};

export default PiecesGridPiece;
