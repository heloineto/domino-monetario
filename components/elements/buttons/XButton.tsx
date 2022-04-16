import PrimaryIconButton from './PrimaryIconButton';
import classNames from 'clsx';

interface Props extends ComponentProps<typeof PrimaryIconButton> {}

const XButton = ({ className, ...primaryIconButtonProps }: Props) => {
  return (
    <PrimaryIconButton className={classNames(className, '')} {...primaryIconButtonProps}>
      <div className="grid h-full w-full place-items-center p-1.5">
        <svg
          className="h-full w-full"
          width={330}
          height={337}
          viewBox="0 0 330 337"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.1945 21.6015C94.9964 15.8054 108.327 11.2558 122.001 8.01563C135.311 4.09261 148.954 1.40931 162.758 0H166.019C179.822 1.41695 193.465 4.10012 206.776 8.01563C220.407 11.2552 233.692 15.805 246.447 21.6015H247.534H248.621C260.032 29.6606 270.674 38.7565 280.412 48.7731C290.463 58.4292 299.562 69.0297 307.583 80.4281L308.398 81.5149V82.6018C314.135 95.4273 318.682 108.752 321.984 122.408C325.844 135.733 328.526 149.372 330 163.166V168.057C328.518 181.85 325.836 195.487 321.984 208.814C318.682 222.426 314.134 235.706 308.398 248.485V249.572L307.583 250.658C299.528 262.073 290.432 272.715 280.412 282.449C270.678 292.47 260.035 301.566 248.621 309.621L247.534 310.436H246.447C233.668 316.172 220.389 320.719 206.776 324.022C193.461 327.893 179.818 330.531 166.019 331.902H163.438C149.638 330.538 135.994 327.9 122.68 324.022C109.024 320.72 95.6993 316.172 82.8738 310.436H81.7869L80.7001 309.621C69.3017 301.6 58.7012 292.5 49.0451 282.449C39.0284 272.711 29.9326 262.069 21.8734 250.658V249.572V248.485C16.077 235.73 11.5272 222.445 8.28761 208.814C4.3721 195.503 1.68892 181.859 0.271973 168.057V165.475C1.68128 151.671 4.36459 138.027 8.28761 124.718C11.5278 111.044 16.0774 97.7133 21.8734 84.9114V83.8245V82.7377C29.8995 71.3429 38.9982 60.7428 49.0451 51.0827C58.7052 41.0358 69.3053 31.9371 80.7001 23.911H81.7869H82.8738L82.1945 21.6015Z"
            fill="url(#paint0_linear_71_845)"
          />
          <g style={{ mixBlendMode: 'screen' }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M163.166 333.126C149.366 331.763 135.722 329.125 122.408 325.246C108.752 321.944 95.4273 317.397 82.6018 311.66H81.5149L80.4281 310.845C69.0297 302.824 58.4292 293.725 48.7731 283.674C38.7565 273.936 29.6606 263.294 21.6015 251.883V250.796V249.709C15.805 236.954 11.2552 223.669 8.01564 210.039C4.13353 196.719 1.45095 183.079 0 169.281V172.27C1.41695 186.073 4.10012 199.716 8.01564 213.027C11.2552 226.658 15.805 239.943 21.6015 252.698V253.785V254.872C29.6606 266.283 38.7565 276.925 48.7731 286.663C58.4292 296.714 69.0297 305.813 80.4281 313.834L81.5149 314.649H82.6018C95.4273 320.386 108.752 324.933 122.408 328.235C135.722 332.114 149.366 334.752 163.166 336.115H166.019C179.818 334.744 193.461 332.106 206.776 328.235C220.388 324.933 233.668 320.385 246.447 314.649H247.534L248.621 313.834C260.035 305.779 270.677 296.683 280.411 286.663C290.432 276.928 299.528 266.286 307.583 254.872L308.398 253.785V252.698C314.134 239.919 318.682 226.64 321.984 213.027C325.855 199.712 328.493 186.069 329.864 172.27V168.058C328.526 181.862 325.887 195.508 321.984 208.816C318.682 222.428 314.134 235.707 308.398 248.486V249.573L307.583 250.66C299.528 262.074 290.432 272.717 280.411 282.451C270.677 292.472 260.035 301.568 248.621 309.623L247.534 310.438H246.447C233.668 316.173 220.388 320.721 206.776 324.024C193.461 327.895 179.818 330.532 166.019 331.903H163.437L163.166 333.126Z"
              fill="#F7E984"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M166.019 3.39735C179.822 4.8143 193.465 7.49748 206.776 11.413C220.407 14.6526 233.692 19.2024 246.447 24.9988H247.534L248.621 25.6781C260.032 33.7373 270.674 42.8331 280.412 52.8498C290.463 62.5059 299.562 73.1064 307.583 84.5047L308.398 85.5916V86.6785C314.135 99.5039 318.682 112.829 321.984 126.485C325.899 139.79 328.538 153.437 329.864 167.242V164.118C328.39 150.323 325.708 136.685 321.848 123.36C318.546 109.704 313.999 96.3792 308.262 83.5537V82.4669L307.447 81.38C299.426 69.9816 290.327 59.3811 280.276 49.725C270.538 39.7084 259.896 30.6125 248.485 22.5534H247.398H246.311C233.556 16.7569 220.271 12.2071 206.641 8.96754C193.329 5.05203 179.686 2.36886 165.883 0.951904H163.302C149.498 2.36121 135.854 5.04452 122.544 8.96754C108.87 12.2077 95.5397 16.7573 82.7378 22.5534H81.6509H80.5641C69.1693 30.5794 58.5693 39.6781 48.9091 49.725C38.8622 59.3852 29.7635 69.9852 21.7374 81.38V82.4669V83.5537C15.9414 96.3556 11.3918 109.686 8.15162 123.36C4.22861 136.67 1.54529 150.314 0.135986 164.118V168.058C1.57386 154.258 4.25666 140.617 8.15162 127.3C11.3918 113.626 15.9414 100.296 21.7374 87.4936V86.4067V85.3199C29.7635 73.9251 38.8622 63.3251 48.9091 53.6649C58.5693 43.618 69.1693 34.5193 80.5641 26.4933L81.6509 25.814H82.7378C95.5397 20.0179 108.87 15.4683 122.544 12.2281C135.854 8.30512 149.498 5.62181 163.302 4.2125H166.019V3.39735Z"
            fill="#753D29"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 7.33652C151.838 8.80169 138.199 11.484 124.876 15.3522C111.506 18.7308 98.4591 23.2769 85.8846 28.938C74.7072 37.0274 64.2932 46.1225 54.7731 56.1096C44.786 65.6298 35.6909 76.0437 27.6015 87.2212C21.9404 99.7956 17.3943 112.843 14.0156 126.212C10.1475 139.535 7.46517 153.174 6 166.97C7.47285 180.764 10.155 194.403 14.0156 207.727C17.3765 221.146 21.923 234.24 27.6015 246.855C35.7264 258.004 44.8189 268.415 54.7731 277.966C64.329 287.441 74.6432 296.12 85.6129 303.915C98.236 309.453 111.273 313.996 124.604 317.501C137.943 321.302 151.577 323.983 165.362 325.517C179.146 323.975 192.778 321.294 206.119 317.501C219.5 314.013 232.583 309.47 245.246 303.915C256.141 295.684 266.363 286.598 275.814 276.743C285.692 267.119 294.778 256.715 302.986 245.632C308.541 232.969 313.084 219.886 316.572 206.505C320.365 193.164 323.046 179.531 324.588 165.747C323.054 151.962 320.373 138.329 316.572 124.99C313.04 111.843 308.498 98.989 302.986 86.5419C294.813 75.4309 285.724 65.024 275.814 55.4303C266.263 45.4761 255.852 36.3836 244.703 28.2587C232.089 22.5802 218.995 18.0337 205.576 14.6729C192.251 10.8123 178.613 8.13007 164.818 6.65723L165.633 7.33652Z"
            fill="#F24D78"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 45.7827C155.312 47.2859 145.101 49.4643 135.065 52.3039C124.934 54.8191 114.992 58.0424 105.312 61.9498C97.0389 68.3621 89.272 75.4023 82.0804 83.0079C74.4748 90.1995 67.4346 97.9664 61.0224 106.24C57.1149 115.919 53.8916 125.861 51.3764 135.993C48.5368 146.028 46.3584 156.24 44.8552 166.561C46.3727 176.879 48.5509 187.089 51.3764 197.129C53.9117 207.254 57.1345 217.195 61.0224 226.882C67.4912 234.937 74.5285 242.52 82.0804 249.57C89.2771 257.129 97.0439 264.123 105.312 270.492C114.992 274.4 124.934 277.623 135.065 280.138C145.085 283.043 155.301 285.222 165.633 286.659C175.963 285.207 186.178 283.028 196.201 280.138C206.327 277.603 216.267 274.38 225.954 270.492C234.008 264.07 241.59 257.078 248.643 249.57C256.17 242.343 263.163 234.579 269.565 226.338C273.453 216.651 276.675 206.711 279.211 196.585C282.101 186.562 284.28 176.347 285.732 166.017C284.294 155.685 282.115 145.469 279.211 135.449C276.695 125.318 273.472 115.376 269.565 105.696C263.174 97.6154 256.18 90.0309 248.643 83.0079C241.418 75.4361 233.654 68.3982 225.411 61.9498C215.724 58.062 205.783 54.8392 195.658 52.3039C185.797 49.5009 175.769 47.3228 165.633 45.7827V45.7827Z"
            fill="url(#paint1_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.08 83.0113C89.2716 75.4057 97.0385 68.3655 105.312 61.9532L85.6123 28.668C74.4348 36.7574 64.0209 45.8525 54.5007 55.8396C44.5136 65.3597 35.4185 75.7737 27.3291 86.9512L60.6144 106.243C67.1569 97.9547 74.3337 90.1874 82.08 83.0113V83.0113Z"
            fill="url(#paint2_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M105.312 61.9524C114.992 58.0449 124.934 54.8217 135.065 52.3065C145.101 49.4669 155.313 47.2885 165.634 45.7853V7.3374C151.838 8.80257 138.199 11.4849 124.876 15.353C111.506 18.7317 98.4592 23.2778 85.8848 28.9389L105.177 62.2241L105.312 61.9524Z"
            fill="url(#paint3_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 325.788V287.204C175.963 285.752 186.178 283.573 196.201 280.683C206.327 278.148 216.267 274.925 225.954 271.037L245.246 303.915C232.583 309.47 219.5 314.013 206.119 317.5C192.778 321.293 179.145 323.975 165.362 325.516L165.633 325.788Z"
            fill="url(#paint4_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M245.245 303.914L225.954 270.493C234.007 264.07 241.589 257.078 248.642 249.571C256.17 242.344 263.162 234.58 269.564 226.339L302.985 246.174C294.754 257.069 285.668 267.291 275.814 276.742C266.189 286.619 255.785 295.706 244.702 303.914H245.245Z"
            fill="url(#paint5_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M302.986 246.176L269.565 226.884C273.453 217.197 276.676 207.256 279.211 197.131C282.101 187.108 284.28 176.893 285.732 166.563H324.316C322.775 180.347 320.093 193.979 316.3 207.32C312.813 220.701 308.27 233.784 302.715 246.447L302.986 246.176Z"
            fill="url(#paint6_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M324.859 166.561H286.275C284.837 156.228 282.658 146.012 279.754 135.993C277.238 125.862 274.015 115.919 270.108 106.24L302.985 86.5403C308.524 99.1633 313.066 112.2 316.571 125.532C320.372 138.871 323.053 152.504 324.587 166.289L324.859 166.561Z"
            fill="url(#paint7_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M302.987 86.5436L269.566 105.835C263.18 97.7078 256.186 90.0778 248.643 83.0113C241.419 75.4395 233.655 68.4016 225.412 61.9532L244.703 28.668C255.853 36.7929 266.263 45.8854 275.815 55.8396C285.708 65.3035 294.796 75.5736 302.987 86.5436V86.5436Z"
            fill="url(#paint8_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M245.246 28.6671L225.954 61.9524C216.267 58.0645 206.327 54.8418 196.201 52.3065C186.162 49.481 175.952 47.3028 165.633 45.7853V7.3374C179.428 8.81025 193.066 11.4924 206.391 15.353C219.81 18.7139 232.904 23.2604 245.518 28.9389L245.246 28.6671Z"
            fill="url(#paint9_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 325.788V287.204C155.301 285.767 145.085 283.587 135.065 280.683C124.934 278.168 114.992 274.944 105.312 271.037L85.6128 303.915C98.2358 309.453 111.273 313.995 124.604 317.5C137.943 321.301 151.576 323.983 165.362 325.516L165.633 325.788Z"
            fill="url(#paint10_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M85.6124 303.914L104.904 270.493C96.7767 264.108 89.1466 257.113 82.0801 249.571C74.5083 242.346 67.4705 234.582 61.0221 226.339L27.7368 246.174C35.8618 257.323 44.9542 267.734 54.9085 277.286C64.3942 286.99 74.6636 295.896 85.6124 303.914V303.914Z"
            fill="url(#paint11_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.7377 246.176L61.023 226.884C57.1351 217.197 53.9123 207.256 51.377 197.131C48.5515 187.091 46.3733 176.881 44.8558 166.563H6.40796C7.88081 180.357 10.563 193.995 14.4236 207.32C17.7844 220.739 22.3309 233.833 28.0094 246.447L27.7377 246.176Z"
            fill="url(#paint12_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.4077 166.561H44.8556C46.3588 156.24 48.5372 146.029 51.3768 135.993C53.892 125.862 57.1152 115.919 61.0227 106.24L27.7374 86.5403C22.0764 99.1147 17.5303 112.162 14.1516 125.532C10.2835 138.855 7.60116 152.494 6.13599 166.289L6.4077 166.561Z"
            fill="url(#paint13_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M85.6124 28.668C105.312 61.9532 61.0221 106.243 27.7368 86.5436L61.0221 105.835C67.4507 97.7029 74.4905 90.0727 82.0801 83.0113C89.2717 75.4057 97.0386 68.3655 105.312 61.9532L85.6124 28.668Z"
            fill="url(#paint14_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            opacity="0.65"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.7377 86.5403C61.023 106.24 44.8558 166.561 6.40796 166.561H44.8558C46.359 156.24 48.5374 146.029 51.377 135.993C53.8923 125.862 57.1155 115.919 61.023 106.24L27.7377 86.5403Z"
            fill="url(#paint15_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.40796 166.563C44.8558 166.563 69.4462 221.993 37.6554 240.334L61.023 226.748C57.1351 217.061 53.9123 207.12 51.377 196.995C48.5572 187 46.379 176.835 44.8558 166.563H6.40796Z"
            fill="url(#paint16_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M245.247 303.914C225.955 270.493 270.109 226.339 303.53 245.631L270.109 226.339C263.533 234.599 256.358 242.363 248.643 249.571C241.417 257.098 233.652 264.091 225.412 270.493L245.247 303.914Z"
            fill="url(#paint17_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M302.985 246.176C269.564 226.884 285.731 166.563 324.315 166.563H286.275C284.823 176.893 282.644 187.108 279.754 197.131C277.218 207.256 273.996 217.197 270.108 226.884L302.985 246.176Z"
            fill="url(#paint18_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M324.859 166.563C286.275 166.563 261.82 110.997 293.475 92.6562L270.108 106.242C274.015 115.922 277.238 125.864 279.754 135.995C282.658 146.015 284.837 156.23 286.275 166.563H324.859Z"
            fill="url(#paint19_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.478 49.4543C117.676 51.628 102.188 51.4922 86.0208 28.668L105.313 61.9532C114.992 58.0458 124.934 54.8225 135.066 52.3073L146.478 49.4543Z"
            fill="url(#paint20_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M184.654 283.672C213.456 281.362 229.079 281.498 245.247 304.458L225.955 271.037C216.268 274.925 206.327 278.148 196.202 280.683L184.654 283.672V283.672Z"
            fill="url(#paint21_radial_71_845)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.4965 169.825C46.8018 188.345 51.7577 206.532 58.3051 224.168V227.157L49.6102 233.95L61.7015 226.885C57.8137 217.198 54.5909 207.258 52.0556 197.132C49.0008 187.108 46.5957 176.898 44.8551 166.564C46.3583 156.243 48.5367 146.032 51.3763 135.996C53.8916 125.865 57.1148 115.923 61.0223 106.243C67.4345 97.9698 74.4747 90.2029 82.0803 83.0113C89.2719 75.4057 97.0388 68.3655 105.312 61.9532C114.992 58.0458 124.934 54.8225 135.065 52.3073C140.363 50.9487 146.749 49.1826 153.134 47.9598C137.734 49.7847 122.541 53.0599 107.757 57.7416L104.904 56.7906L85.6126 28.668L100.421 59.3719L99.1984 61.8174C84.5805 73.498 71.7229 87.225 61.0223 102.575H58.3051L28.5521 87.3587L56.6748 105.971L57.4899 108.688C50.5891 126.126 46.021 144.398 43.9041 163.032L41.7304 165.07L12.385 166.292L41.8662 167.651L44.04 169.553L43.4965 169.825Z"
            fill="#F6F6F6"
          />
          <g style={{ mixBlendMode: 'screen' }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M272.825 230.417L301.763 245.225L274.592 227.835L273.641 224.982C279.817 206.973 284.676 188.538 288.177 169.824L290.351 167.922L317.523 166.563L290.351 164.933L288.042 163.031C286.9 158.72 285.447 154.497 283.694 150.396C284.928 155.732 285.88 161.128 286.547 166.563C285.095 176.893 282.916 187.108 280.026 197.131C277.491 207.257 274.268 217.198 270.38 226.884C263.696 234.966 256.431 242.549 248.643 249.573C241.416 257.101 233.652 264.093 225.411 270.495C218.097 273.598 210.558 276.142 202.858 278.103C209.776 276.938 216.624 275.396 223.373 273.484L226.226 274.435L240.763 296.987L228.671 273.076L229.351 270.087C243.761 258.015 257.123 244.744 269.293 230.417H272.282H272.825Z"
              fill="#FFC7D7"
            />
          </g>
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.0224 226.885L165.633 166.563L61.0224 106.242C57.1149 115.922 53.8916 125.864 51.3764 135.995C48.5368 146.031 46.3584 156.243 44.8552 166.563C46.3727 176.882 48.5509 187.092 51.3764 197.132C53.9117 207.257 57.1345 217.198 61.0224 226.885V226.885Z"
            fill="url(#paint22_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.0232 106.24L165.634 166.561V45.7827C155.313 47.2859 145.102 49.4643 135.066 52.3039C124.935 54.8191 114.993 58.0424 105.313 61.9498C97.0397 68.3621 89.2728 75.4023 82.0812 83.0079C74.4757 90.1995 67.4355 97.9664 61.0232 106.24V106.24Z"
            fill="url(#paint23_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 45.7827V166.561L270.108 106.24C263.566 97.9513 256.389 90.184 248.643 83.0079C241.418 75.4361 233.654 68.3982 225.411 61.9498C215.724 58.062 205.783 54.8392 195.658 52.3039C185.797 49.5009 175.769 47.3228 165.633 45.7827V45.7827Z"
            fill="url(#paint24_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M270.108 106.242L165.633 166.563L270.108 226.885C273.996 217.198 277.219 207.257 279.754 197.132C282.644 187.108 284.823 176.894 286.275 166.563C284.838 156.231 282.659 146.015 279.754 135.995C277.239 125.864 274.016 115.922 270.108 106.242V106.242Z"
            fill="url(#paint25_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M270.108 226.884L165.633 166.563V287.205C175.963 285.753 186.178 283.574 196.201 280.684C206.327 278.148 216.267 274.926 225.954 271.038C234.027 264.441 241.609 257.267 248.643 249.572C256.17 242.345 263.163 234.581 269.565 226.34L270.108 226.884Z"
            fill="url(#paint26_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.634 287.205V166.563L61.0232 226.884C67.492 234.94 74.5293 242.522 82.0812 249.572C89.278 257.131 97.0447 264.125 105.313 270.494C114.993 274.402 124.935 277.625 135.066 280.14C145.086 283.045 155.301 285.224 165.634 286.661V287.205Z"
            fill="url(#paint27_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 45.7827C155.714 47.1581 145.907 49.2467 136.288 52.0322L51.1047 137.215C48.3192 146.834 46.2306 156.641 44.8552 166.561C46.3727 176.879 48.5509 187.089 51.3764 197.129C53.9117 207.254 57.1345 217.195 61.0224 226.882C62.9244 229.463 65.0981 232.18 67.4077 234.762L233.834 68.3352C231.253 66.0256 228.536 63.8519 225.954 61.9498C216.267 58.062 206.327 54.8392 196.201 52.3039C186.162 49.4784 175.952 47.3002 165.633 45.7827V45.7827Z"
            fill="url(#paint28_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M275.814 121.729L120.8 276.743C125.69 278.373 130.717 279.732 135.065 280.819C141.993 282.721 150.824 285.03 158.976 286.389L285.324 160.041C283.965 151.889 281.656 143.058 279.754 136.13C278.667 131.782 277.308 126.756 275.678 121.865L275.814 121.729Z"
            fill="url(#paint29_radial_71_845)"
          />
          <path
            style={{ mixBlendMode: 'screen' }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M165.633 7.33652C151.838 8.80169 138.199 11.484 124.876 15.3522C111.506 18.7308 98.4591 23.2769 85.8846 28.938C74.7072 37.0274 64.2932 46.1225 54.7731 56.1096C44.786 65.6298 35.6909 76.0437 27.6015 87.2212C21.9404 99.7956 17.3943 112.843 14.0156 126.212C10.1475 139.535 7.46517 153.174 6 166.97C7.47285 180.764 10.155 194.403 14.0156 207.727C17.3765 221.146 21.923 234.24 27.6015 246.855C35.7264 258.004 44.8189 268.415 54.7731 277.966C64.329 287.441 74.6432 296.12 85.6129 303.915C98.236 309.453 111.273 313.996 124.604 317.501C137.943 321.302 151.577 323.983 165.362 325.517C179.146 323.975 192.778 321.294 206.119 317.501C219.5 314.013 232.583 309.47 245.246 303.915C256.141 295.684 266.363 286.598 275.814 276.743C285.692 267.119 294.778 256.715 302.986 245.632C308.541 232.969 313.084 219.886 316.572 206.505C320.365 193.164 323.046 179.531 324.588 165.747C323.054 151.962 320.373 138.329 316.572 124.99C313.04 111.843 308.498 98.989 302.986 86.5419C294.813 75.4309 285.724 65.024 275.814 55.4303C266.263 45.4761 255.852 36.3836 244.703 28.2587C232.089 22.5802 218.995 18.0337 205.576 14.6729C192.251 10.8123 178.613 8.13007 164.818 6.65723L165.633 7.33652Z"
            fill="url(#paint30_radial_71_845)"
          />
          <g style={{ mixBlendMode: 'multiply' }}>
            <g style={{ mixBlendMode: 'multiply' }}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M86.4287 220.363L116.997 250.931L165.634 202.294L214.271 250.931L244.839 220.363L196.202 171.726L244.839 123.224L214.271 92.5205L165.634 141.158L116.997 92.5205L86.4287 123.224L135.066 171.726L86.4287 220.363Z"
                fill="#841E2A"
              />
            </g>
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M86.4287 215.199L116.997 245.767L165.634 197.13L214.271 245.767L244.839 215.199L196.202 166.562L244.839 117.925L214.271 87.3564L165.634 135.994L116.997 87.3564L86.4287 117.925L135.066 166.562L86.4287 215.199Z"
            fill="url(#paint31_linear_71_845)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_71_845"
              x1="164.525"
              y1="333.26"
              x2="164.525"
              y2="-0.271721"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D68329" />
              <stop offset={1} stopColor="#B86A43" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(115.909 43.2014) scale(245.088)"
            >
              <stop stopColor="#F2748C" />
              <stop offset={1} stopColor="#DE003D" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(92.2693 35.1892) scale(244.273)"
            >
              <stop stopColor="#F29EA1" />
              <stop offset={1} stopColor="#F25B80" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(101.916 -22.4155) scale(147.95)"
            >
              <stop stopColor="#F2909A" />
              <stop offset={1} stopColor="#F22062" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(167.399 107.599) scale(217.237)"
            >
              <stop stopColor="#F29EA1" />
              <stop offset={1} stopColor="#F25B80" />
            </radialGradient>
            <radialGradient
              id="paint5_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(302.714 372.386) scale(171.046)"
            >
              <stop stopColor="#F2909A" />
              <stop offset={1} stopColor="#F22062" />
            </radialGradient>
            <radialGradient
              id="paint6_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(158.841 157.189) scale(188.299)"
            >
              <stop stopColor="#F2909A" />
              <stop offset={1} stopColor="#F22062" />
            </radialGradient>
            <radialGradient
              id="paint7_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(50.8324 194.14) scale(279.189)"
            >
              <stop stopColor="#F2909A" />
              <stop offset={1} stopColor="#F22062" />
            </radialGradient>
            <radialGradient
              id="paint8_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(105.177 187.622) scale(291.144)"
            >
              <stop stopColor="#F2748C" />
              <stop offset={1} stopColor="#DE003D" />
            </radialGradient>
            <radialGradient
              id="paint9_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(167.399 146.32) scale(150.667)"
            >
              <stop stopColor="#F2748C" />
              <stop offset={1} stopColor="#DE003D" />
            </radialGradient>
            <radialGradient
              id="paint10_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(191.175 222.943) scale(150.667)"
            >
              <stop stopColor="#F2748C" />
              <stop offset={1} stopColor="#D60027" />
            </radialGradient>
            <radialGradient
              id="paint11_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-20.9004 353.91) scale(153.792)"
            >
              <stop stopColor="#F2748C" />
              <stop offset={1} stopColor="#DE003D" />
            </radialGradient>
            <radialGradient
              id="paint12_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-84.0736 240.334) scale(185.99)"
            >
              <stop stopColor="#F2748C" />
              <stop offset={1} stopColor="#DE003D" />
            </radialGradient>
            <radialGradient
              id="paint13_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-53.6416 41.1636) scale(164.524)"
            >
              <stop stopColor="#F2909A" />
              <stop offset={1} stopColor="#F22062" />
            </radialGradient>
            <radialGradient
              id="paint14_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(115.501 69.2896) scale(104.339)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint15_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(73.6578 105.832) scale(113.17)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint16_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(37.3836 158.004) scale(95.6442)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint17_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(257.338 223.35) scale(68.6084)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint18_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(285.188 167.106) scale(72.6842)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint19_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(282.742 174.307) scale(94.8291)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint20_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(99.0631 72.9578) scale(55.8377)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint21_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(229.623 239.925) scale(63.1741)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint22_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.1023 135.86) scale(235.171)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint23_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(121.888 29.4797) scale(177.159)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint24_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(329.478 -96.8685) scale(484.063)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint25_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(286.004 47.5517) scale(189.115)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint26_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(305.024 359.346) scale(237.344)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint27_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(89.961 339.782) scale(244.137)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint28_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(135.744 -126.893) scale(406.624)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint29_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(200.005 -55.8379) scale(354.59)"
            >
              <stop stopColor="#F24C7C" />
              <stop offset={1} />
            </radialGradient>
            <radialGradient
              id="paint30_radial_71_845"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(46.8933 9.10267) scale(253.511)"
            >
              <stop stopColor="#FF80A5" />
              <stop offset={1} />
            </radialGradient>
            <linearGradient
              id="paint31_linear_71_845"
              x1="165.634"
              y1="245.767"
              x2="165.634"
              y2="87.3564"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFECBA" />
              <stop offset={1} stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </PrimaryIconButton>
  );
};

export default XButton;
