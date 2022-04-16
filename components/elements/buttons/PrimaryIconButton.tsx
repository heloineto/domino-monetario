import { IconButton, IconButtonProps } from '@mui/material';
import classNames from 'clsx';
import { motion } from 'framer-motion';

interface Props extends ComponentProps<typeof motion.div> {}

const PrimaryIconButton = ({ className, children, ...motionDivProps }: Props) => {
  return (
    <motion.div
      className={classNames(className, 'p-0')}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      {...motionDivProps}
    >
      <svg
        className="absolute top-0 left-0 h-full w-full"
        width={412}
        height={412}
        viewBox="0 0 412 412"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M205.76 401.141C313.218 401.141 400.33 314.028 400.33 206.57C400.33 99.1124 313.218 12.0005 205.76 12.0005C98.3021 12.0005 11.1902 99.1124 11.1902 206.57C11.1902 314.028 98.3021 401.141 205.76 401.141Z"
          fill="url(#paint0_linear_70_628)"
        />
        <path
          d="M205.76 12.0004C313.22 12.0004 400.33 99.1103 400.33 206.57C400.33 314.03 313.22 401.15 205.76 401.15C98.3003 401.15 11.1803 314.04 11.1803 206.57C11.1803 99.1003 98.3003 12.0004 205.76 12.0004ZM205.76 0.000377739C154.694 0.0599238 105.47 19.0846 67.6378 53.3838C29.8052 87.683 6.06063 134.812 1.01034 185.627C-4.03995 236.443 9.96404 287.323 40.3057 328.398C70.6474 369.473 115.164 397.814 165.219 407.923C215.275 418.033 267.301 409.19 311.205 383.11C355.11 357.031 387.763 315.573 402.83 266.781C417.897 217.988 414.304 165.338 392.748 119.045C371.193 72.7511 333.211 36.1139 286.17 16.2404C260.733 5.47102 233.383 -0.0526168 205.76 0.000377739V0.000377739Z"
          fill="#8D550B"
        />
        <path
          d="M361.63 206.57C361.63 292.655 291.845 362.44 205.76 362.44C119.676 362.44 49.8901 292.655 49.8901 206.57C49.8901 120.486 119.676 50.7002 205.76 50.7002C291.845 50.7002 361.63 120.486 361.63 206.57Z"
          fill="url(#paint1_linear_70_628)"
        />
        <path
          d="M361.63 206.57C361.63 292.655 291.845 362.44 205.76 362.44C119.676 362.44 49.8901 292.655 49.8901 206.57C49.8901 120.486 119.676 50.7002 205.76 50.7002C291.845 50.7002 361.63 120.486 361.63 206.57Z"
          stroke="url(#paint2_linear_70_628)"
          strokeWidth={9}
          style={{ mixBlendMode: 'multiply' }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_70_628"
            x1="-18.2002"
            y1="69.6819"
            x2="392.82"
            y2="320.852"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#E89228" />
            <stop offset="0.38" stopColor="#FCC844" />
            <stop offset="0.51" stopColor="#F2A52C" />
            <stop offset="0.73" stopColor="#FFF689" />
            <stop offset="0.88" stopColor="#E89228" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_70_628"
            x1="47.8539"
            y1="105.514"
            x2="337.938"
            y2="291.241"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02" stopColor="#C7CDCF" />
            <stop offset="0.3" stopColor="#8B9396" />
            <stop offset="0.71" stopColor="#F0F8FB" />
            <stop offset={1} stopColor="#8B9396" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_70_628"
            x1="47.9236"
            y1="105.607"
            x2="338.007"
            y2="291.334"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.02" stopColor="#C7CDCF" />
            <stop offset="0.3" stopColor="#8B9396" />
            <stop offset="0.65" stopColor="#F0F8FB" />
            <stop offset={1} stopColor="#8B9396" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

export default PrimaryIconButton;
