/* REACT */
type ReactNode = import('react').ReactNode;
type SetStateAction<A> = import('react').SetStateAction<A>;
type Dispatch<A> = import('react').Dispatch<A>;
type SVGProps<A> = import('react').SVGProps<A>;
type CSSProperties = import('react').CSSProperties;
type RefObject<A> = import('react').RefObject<A>;
type ComponentProps<A> = import('react').ComponentProps<A>;
type SetValue<A> = Dispatch<SetStateAction<A>>;

/* NEXTJS */
type NextPage = import('next').NextPage;


/* PHOSPHOR ICONS */
type IconProps = import('phosphor-react').IconProps;
type PhosphorIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

type Icon = PhosphorIcon | (({ ...svgProps }: Props) => EmotionJSX.Element);