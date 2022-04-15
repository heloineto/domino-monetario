import { useContext } from 'react';
import { GameContext } from '@lib/context';
import classNames from 'clsx';
import Hand from '../Hand';

interface Props extends ComponentProps<'div'> {}

const Enemy = ({ className, ...divProps }: Props) => {
  const { enemy } = useContext(GameContext);

  return (
    <div
      className={classNames(
        className,
        'relative flex h-[256px] w-full flex-shrink-0 items-start justify-start space-x-0'
      )}
      {...divProps}
    >
      {enemy && <Hand player={enemy} />}
    </div>
  );
};

export default Enemy;
