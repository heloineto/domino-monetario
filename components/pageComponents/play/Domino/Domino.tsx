import { motion } from 'framer-motion';
import DominoDivider from './Domino.Divider';
import Money from '@components/pageComponents/play/Money';
import classNames from 'clsx';

interface Props extends ComponentProps<typeof motion.svg> {
  hidden?: boolean;
  domino: [MoneyValue, MoneyValue];
}

const Domino = ({ hidden, domino, className, ...motionSvgProps }: Props) => {
  return (
    <div className={classNames(className, 'relative aspect-[328/605]')}>
      <motion.svg
        width={656}
        height={1232}
        viewBox="0 0 656 1232"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full rounded-lg border-2 border-slate-400 bg-white shadow-md hover:shadow-2xl"
        {...motionSvgProps}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35 1220C22.2975 1220 12 1209.7 12 1197V35C12 22.2975 22.2974 12.0001 35 12.0001L621 12C633.703 12 644 22.2594 644 34.9619C644.002 405.206 644 826.794 644 1197.04C644 1209.74 633.703 1220 621 1220H35ZM620 80.0001C596.745 80 576 59.2549 576 36H79.9999C79.9999 59.2549 59.2548 80 36 80.0001V1152C59.2548 1152 80 1172.75 80 1196H576C576 1172.75 596.745 1152 620 1152V80.0001Z"
          fill="#94a3b8"
        />
      </motion.svg>
      {!hidden && (
        <div className="absolute top-0 left-0 flex h-full w-full flex-col p-[0.9rem]">
          <Money value={domino[0]} />
          <DominoDivider />
          <Money value={domino[1]} style={{ rotate: 180 }} />
        </div>
      )}
    </div>
  );
};

export default Domino;
