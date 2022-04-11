import Image from 'next/image';

interface Props extends ComponentProps<'svg'> {}

const Money = ({ ...svgProps }: Props) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[6.5%]">
      <Image src="/money/200.jpg" layout="fill" />
    </div>
  );
};

export default Money;
