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
    <div
      className={classNames(
        className,
        'relative flex aspect-[1/2] items-center justify-center'
      )}
    >
      <motion.svg
        className="absolute top-0 left-0 h-full w-full rounded-lg border-2 border-slate-400 bg-white shadow-md hover:shadow-2xl"
        width={512}
        height={1024}
        viewBox="0 0 512 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...motionSvgProps}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.8483 1015C16.9193 1015 8.87024 1006.95 8.87024 997.022L8.87012 26.9781C8.87012 17.0491 16.9192 9 26.8482 9H485.892C495.821 9 503.87 16.9787 503.869 26.9077C503.833 318.676 502.915 705.324 502.878 997.092C502.877 1007.02 494.828 1015 484.899 1015H26.8483ZM484.627 62.5325C466.449 62.5325 450.234 46.317 450.234 28.1397H62.5324C62.5324 46.317 46.3169 62.5325 28.1396 62.5325L27.63 961.847C45.8073 961.847 62.0228 978.063 62.0228 996.24H449.724C449.724 978.063 465.94 961.847 484.117 961.847L484.627 62.5325Z"
          fill="#C8D2DC"
        />
      </motion.svg>

      {!hidden && (
        <div className="relative flex flex-col p-[10%]">
          <Money value={domino[0]} />
          <DominoDivider />
          <Money value={domino[1]} style={{ rotate: 180 }} />
        </div>
      )}
    </div>
  );
};

export default Domino;
