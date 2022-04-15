import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props extends ComponentProps<typeof motion.div> {
  value: MoneyValue;
}

const Money = ({ value, ...motionDivProps }: Props) => {
  return (
    <motion.div
      className="relative aspect-square overflow-hidden rounded-[6.5%]"
      {...motionDivProps}
    >
      <Image
        className="pointer-events-none select-none"
        draggable="false"
        src={`/money/${value}.jpg`}
        layout="fill"
        alt={`${value} reais`}
      />
    </motion.div>
  );
};

export default Money;
