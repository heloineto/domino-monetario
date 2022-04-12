import { motion } from 'framer-motion';
import classNames from 'clsx';
import { GameContext } from '@lib/context';
import { useContext } from 'react';

interface Props extends ComponentProps<typeof motion.div> {}

const Deck = ({ className, ...motionDivProps }: Props) => {
  const { deck, draw } = useContext(GameContext);

  return (
    <motion.div
      className={classNames(className, 'relative')}
      onClick={() => {
        draw?.(1);
      }}
      {...motionDivProps}
    >
      <svg
        width={538}
        height={809}
        viewBox="0 0 538 809"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <g filter="url(#filter0_d_62_237)">
          <rect
            x="91.3652"
            y="83.5581"
            width="380.95"
            height="715.442"
            rx="14.5179"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M111.69 792.031C104.314 792.031 98.334 786.051 98.334 778.675V103.883C98.334 96.5065 104.314 90.5266 111.69 90.5266L451.99 90.5266C459.366 90.5266 465.346 96.4844 465.346 103.861C465.347 318.867 465.346 563.69 465.346 778.697C465.346 786.073 459.367 792.031 451.99 792.031H111.69ZM451.409 130.015C437.905 130.015 425.858 117.968 425.858 104.464H137.823C137.823 117.968 125.776 130.015 112.271 130.015V752.543C125.776 752.543 137.823 764.59 137.823 778.094H425.858C425.858 764.59 437.905 752.543 451.409 752.543V130.015Z"
            fill="#94A3B8"
          />
          <rect
            x="88.8652"
            y="81.0581"
            width="385.95"
            height="720.442"
            rx="17.0179"
            stroke="#94A3B8"
            strokeWidth={5}
          />
        </g>
        <g filter="url(#filter1_d_62_237)">
          <rect
            x="127.019"
            y="44.1365"
            width="380.95"
            height="715.442"
            rx="14.5179"
            transform="rotate(5.56518 127.019 44.1365)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M78.5413 751.242C71.1995 750.526 65.8277 743.995 66.543 736.653L131.983 65.0416C132.698 57.6998 139.23 52.328 146.572 53.0434L485.267 86.0449C492.609 86.7603 497.983 93.2699 497.268 100.612C476.418 314.605 452.674 558.274 431.823 772.267C431.108 779.609 424.579 784.958 417.237 784.243L78.5413 751.242ZM480.86 125.291C467.419 123.982 456.597 110.823 457.907 97.3822L171.229 69.4491C169.92 82.8899 156.761 93.7118 143.32 92.4022L82.9488 711.995C96.3896 713.305 107.212 726.463 105.902 739.904L392.579 767.837C393.889 754.397 407.048 743.575 420.488 744.884L480.86 125.291Z"
            fill="#94A3B8"
          />
          <rect
            x="124.773"
            y="41.4058"
            width="385.95"
            height="720.442"
            rx="17.0179"
            transform="rotate(5.56518 124.773 41.4058)"
            stroke="#94A3B8"
            strokeWidth={5}
          />
        </g>
        <g filter="url(#filter2_d_62_237)">
          <rect
            x="31.2285"
            y="85.6792"
            width="380.95"
            height="715.442"
            rx="14.5179"
            transform="rotate(-10.1908 31.2285 85.6792)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M176.581 779.38C169.321 780.685 162.377 775.857 161.072 768.597L41.6834 104.451C40.3783 97.1905 45.2059 90.247 52.4661 88.9419L387.397 28.7339C394.657 27.4288 401.597 32.2346 402.902 39.4947C440.943 251.109 484.258 492.07 522.298 703.685C523.603 710.945 518.772 717.867 511.512 719.172L176.581 779.38ZM393.812 67.7023C380.521 70.0916 366.532 60.3661 364.143 47.0747L80.6518 98.0357C83.0411 111.327 73.3156 125.315 60.0242 127.705L170.166 740.411C183.457 738.022 197.446 747.747 199.835 761.039L483.326 710.078C480.937 696.786 490.662 682.798 503.954 680.409L393.812 67.7023Z"
            fill="#94A3B8"
          />
          <rect
            x="28.3256"
            y="83.661"
            width="385.95"
            height="720.442"
            rx="17.0179"
            transform="rotate(-10.1908 28.3256 83.661)"
            stroke="#94A3B8"
            strokeWidth={5}
          />
        </g>
        <g filter="url(#filter3_d_62_237)">
          <rect
            x="98.0747"
            y={4}
            width="380.95"
            height="715.442"
            rx="14.5179"
            transform="rotate(7.39428 98.0747 4)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.053 709.197C19.7377 708.248 14.5772 701.548 15.5265 694.233L102.37 25.0528C103.319 17.7376 110.019 12.577 117.334 13.5263L454.804 57.3217C462.119 58.271 467.282 64.9489 466.333 72.2641C438.663 285.483 407.155 528.27 379.484 741.488C378.535 748.803 371.838 753.942 364.523 752.993L27.053 709.197ZM449.146 96.4073C435.754 94.6693 425.357 81.1721 427.095 67.7799L141.455 30.7107C139.717 44.1029 126.22 54.4993 112.828 52.7614L32.7109 670.112C46.1031 671.85 56.4995 685.347 54.7615 698.739L340.401 735.808C342.139 722.416 355.637 712.02 369.029 713.758L449.146 96.4073Z"
            fill="#94A3B8"
          />
          <rect
            x="95.9172"
            y="1.19905"
            width="385.95"
            height="720.442"
            rx="17.0179"
            transform="rotate(7.39428 95.9172 1.19905)"
            stroke="#94A3B8"
            strokeWidth={5}
          />
        </g>
        <g filter="url(#filter4_d_62_237)">
          <rect
            x="57.6768"
            y="44.9949"
            width="380.95"
            height="715.442"
            rx="14.5179"
            transform="rotate(-0.956755 57.6768 44.9949)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M89.8289 753.03C82.4533 753.153 76.3744 747.274 76.2513 739.899L64.9838 65.2008C64.8606 57.8253 70.7398 51.7464 78.1153 51.6232L418.367 45.9409C425.743 45.8178 431.821 51.6749 431.945 59.0504C435.536 274.027 439.623 518.816 443.213 733.792C443.336 741.168 437.456 747.225 430.081 747.348L89.8289 753.03ZM418.446 85.4338C404.944 85.6593 392.697 73.8151 392.472 60.3125L104.477 65.1221C104.702 78.6247 92.8579 90.8711 79.3554 91.0967L89.7502 713.537C103.253 713.312 115.499 725.156 115.725 738.659L403.72 733.849C403.494 720.346 415.338 708.1 428.841 707.874L418.446 85.4338Z"
            fill="#94A3B8"
          />
          <rect
            x="55.1354"
            y="42.537"
            width="385.95"
            height="720.442"
            rx="17.0179"
            transform="rotate(-0.956755 55.1354 42.537)"
            stroke="#94A3B8"
            strokeWidth={5}
          />
        </g>
        <g filter="url(#filter5_d_62_237)">
          <rect
            x="96.8125"
            y="38.594"
            width="380.95"
            height="715.442"
            rx="14.5179"
            transform="rotate(2.39161 96.8125 38.594)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M87.5559 747.298C80.1857 746.99 74.4606 740.766 74.7684 733.396L102.927 59.192C103.235 51.8219 109.459 46.0967 116.829 46.4046L456.832 60.605C464.202 60.9128 469.928 67.115 469.621 74.4851C460.65 289.304 450.432 533.914 441.46 748.733C441.152 756.103 434.929 761.807 427.559 761.499L87.5559 747.298ZM454.604 100.035C441.112 99.4715 429.578 86.9323 430.141 73.4396L142.357 61.4201C141.793 74.9128 129.254 86.4466 115.762 85.8831L89.7839 707.868C103.277 708.432 114.81 720.971 114.247 734.464L402.031 746.483C402.595 732.99 415.134 721.457 428.627 722.02L454.604 100.035Z"
            fill="#94A3B8"
          />
          <rect
            x="94.419"
            y="35.9918"
            width="385.95"
            height="720.442"
            rx="17.0179"
            transform="rotate(2.39161 94.419 35.9918)"
            stroke="#94A3B8"
            strokeWidth={5}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_62_237"
            x="84.0424"
            y="78.5581"
            width="395.595"
            height="730.088"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.32286" />
            <feGaussianBlur stdDeviation="1.16143" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_237"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_237"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_62_237"
            x="51.6517"
            y="40.4746"
            width="460.506"
            height="760.983"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.32286" />
            <feGaussianBlur stdDeviation="1.16143" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_237"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_237"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_62_237"
            x="26.2421"
            y="15.6155"
            width="511.493"
            height="781.529"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.32286" />
            <feGaussianBlur stdDeviation="1.16143" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_237"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_237"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_62_237"
            x="0.422254"
            y="0.745605"
            width="481.011"
            height="769.674"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.32286" />
            <feGaussianBlur stdDeviation="1.16143" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_237"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_237"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d_62_237"
            x="50.5941"
            y="33.8743"
            width="407.008"
            height="735.868"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.32286" />
            <feGaussianBlur stdDeviation="1.16143" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_237"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_237"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d_62_237"
            x="60.2274"
            y="34.1868"
            width="423.933"
            height="744.176"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2.32286" />
            <feGaussianBlur stdDeviation="1.16143" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_62_237"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_62_237"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <div
          className="select-none text-center font-display text-slate-500"
          style={
            {
              '-webkit-text-stroke-width': '1px',
              '-webkit-text-stroke-color': 'black',
            } as any
          }
        >
          <div className="text-5xl">{deck?.length}</div>
          <div className="text-lg">Dominós</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Deck;
