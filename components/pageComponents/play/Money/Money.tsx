import Image from 'next/image';
import { motion } from 'framer-motion';
import classNames from 'clsx';
import { useRouter } from 'next/router';

interface Props extends ComponentProps<typeof motion.div> {
  value: MoneyValue;
}

const Money = ({ value, className, ...motionDivProps }: Props) => {
  const { basePath } = useRouter();
  const numberValue = Number(value);

  return (
    <motion.div
      className={classNames(
        'relative aspect-square overflow-hidden rounded-[6.5%]',
        className
      )}
      {...motionDivProps}
    >
      <Image
        className="pointer-events-none select-none text-sm"
        draggable="false"
        src={`${basePath}/money/${value}.webp`}
        layout="fill"
        alt={
          numberValue >= 1
            ? `${value} ${numberValue > 1 ? 'reais' : 'real'}`
            : `${numberValue * 100} centavos`
        }
      />
    </motion.div>
  );
};

export default Money;
