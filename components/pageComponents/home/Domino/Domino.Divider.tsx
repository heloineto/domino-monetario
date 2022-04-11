interface Props {}

const DominoDivider = ({}: Props) => {
  return (
    <svg
      width={512}
      height={64}
      viewBox="0 0 512 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <rect y={29} width="216.5" height={6} fill="#4C4C4C" />
      <path
        d="M231.831 51.4836C232.297 42.8868 232.53 35.2213 232.53 28.4871C232.53 21.753 232.512 17.3292 232.476 15.2158C236.416 13.3532 240.518 12.4219 244.78 12.4219C247.932 12.4219 250.565 13.4248 252.679 15.4307C254.828 17.4367 255.902 20.2664 255.902 23.9201C255.902 28.1468 252.911 32.2124 246.929 36.1168C250.189 40.2003 253.52 44.6957 256.923 49.603L251.765 53.4179C249.508 50.015 245.461 44.4628 239.622 36.7615C239.515 42.2778 239.353 47.4538 239.139 52.2895L231.831 51.4836ZM239.783 33.1079C242.434 31.8542 244.691 30.3139 246.553 28.4871C248.416 26.6245 249.347 24.9409 249.347 23.4365C249.347 21.9321 248.899 20.7679 248.004 19.9441C247.144 19.1202 245.998 18.7083 244.565 18.7083C243.132 18.7083 241.556 19.0127 239.837 19.6217C239.837 25.6753 239.819 30.1707 239.783 33.1079ZM268.335 17.8486L268.227 11.6696L273.6 12.0995C273.6 14.9293 273.636 16.8635 273.708 17.9023C275.642 18.5113 277.236 19.6575 278.49 21.341C279.744 23.0246 280.37 24.5469 280.37 25.9081C280.37 28.1289 279.994 30.0095 279.242 31.5497L273.171 29.7229C273.565 28.72 273.762 27.8424 273.762 27.0901C273.762 26.3379 273.493 25.6932 272.956 25.1559C272.418 24.5827 271.792 24.2962 271.075 24.2962C270.359 24.2962 269.732 24.529 269.195 24.9947C268.693 25.4603 268.442 26.123 268.442 26.9827C268.442 27.8065 268.729 28.6483 269.302 29.508C269.875 30.3677 270.592 31.0662 271.451 31.6035C274.46 33.4303 276.645 35.0601 278.006 36.4929C279.367 37.8899 280.048 39.663 280.048 41.8122C280.048 43.9614 279.439 45.7882 278.221 47.2926C277.003 48.7612 275.427 49.7642 273.493 50.3015C273.493 52.3433 273.296 54.6536 272.902 57.2327L267.529 56.7491C267.887 54.2775 268.084 52.1642 268.12 50.409C264.968 49.6567 262.192 47.2926 259.792 43.3166L263.069 40.1465C266.078 42.9405 268.514 44.3375 270.377 44.3375C271.702 44.3375 272.365 43.8002 272.365 42.7256C272.365 41.9375 272.042 41.1853 271.398 40.4689C270.753 39.7525 269.678 38.857 268.174 37.7824C263.553 34.4512 261.243 30.8333 261.243 26.929C261.243 24.6007 261.905 22.6485 263.231 21.0724C264.592 19.4605 266.293 18.3859 268.335 17.8486Z"
        fill="#888888"
      />
      <path
        d="M231.831 51.4836L230.802 51.4278L230.749 52.4012L231.718 52.5081L231.831 51.4836ZM232.476 15.2158L232.035 14.2839L231.434 14.5682L231.445 15.2333L232.476 15.2158ZM252.679 15.4307L251.969 16.1784L251.975 16.1843L252.679 15.4307ZM246.929 36.1168L246.366 35.2536L245.416 35.8735L246.124 36.7598L246.929 36.1168ZM256.923 49.603L257.536 50.4317L258.34 49.8372L257.77 49.0157L256.923 49.603ZM251.765 53.4179L250.906 53.9875L251.506 54.8917L252.378 54.2466L251.765 53.4179ZM239.622 36.7616L240.443 36.1388L238.649 33.7724L238.592 36.7415L239.622 36.7616ZM239.139 52.2895L239.026 53.3141L240.119 53.4347L240.168 52.3353L239.139 52.2895ZM239.783 33.1079L238.753 33.0953L238.733 34.7451L240.224 34.0397L239.783 33.1079ZM246.553 28.4871L247.275 29.2231L247.282 29.216L246.553 28.4871ZM248.004 19.9441L247.291 20.6882L247.298 20.6955L247.306 20.7026L248.004 19.9441ZM239.837 19.6217L239.493 18.6501L238.806 18.8932V19.6217H239.837ZM232.86 51.5393C233.327 42.9288 233.56 35.2442 233.56 28.4871H231.499C231.499 35.1984 231.267 42.8448 230.802 51.4278L232.86 51.5393ZM233.56 28.4871C233.56 21.7548 233.543 17.322 233.507 15.1984L231.445 15.2333C231.481 17.3364 231.499 21.7511 231.499 28.4871H233.56ZM232.917 16.1477C236.722 14.3486 240.673 13.4526 244.78 13.4526V11.3911C240.362 11.3911 236.11 12.3577 232.035 14.2839L232.917 16.1477ZM244.78 13.4526C247.692 13.4526 250.064 14.3699 251.969 16.1783L253.388 14.6831C251.067 12.4798 248.173 11.3911 244.78 11.3911V13.4526ZM251.975 16.1843C253.867 17.9498 254.872 20.4779 254.872 23.9201H256.933C256.933 20.055 255.789 16.9235 253.382 14.6772L251.975 16.1843ZM254.872 23.9201C254.872 27.6111 252.259 31.407 246.366 35.2536L247.493 36.9799C253.563 33.0178 256.933 28.6826 256.933 23.9201H254.872ZM246.124 36.7598C249.367 40.8229 252.685 45.2994 256.076 50.1904L257.77 49.0157C254.356 44.0919 251.011 39.5777 247.735 35.4737L246.124 36.7598ZM256.31 48.7743L251.152 52.5891L252.378 54.2466L257.536 50.4317L256.31 48.7743ZM252.624 52.8482C250.348 49.4155 246.282 43.8405 240.443 36.1388L238.801 37.3843C244.639 45.0852 248.669 50.6144 250.906 53.9875L252.624 52.8482ZM238.592 36.7415C238.484 42.2503 238.323 47.4177 238.109 52.2438L240.168 52.3353C240.384 47.4899 240.545 42.3053 240.653 36.7816L238.592 36.7415ZM239.252 51.265L231.944 50.459L231.718 52.5081L239.026 53.3141L239.252 51.265ZM240.224 34.0397C242.966 32.7429 245.321 31.1397 247.275 29.223L245.832 27.7512C244.06 29.4882 241.902 30.9656 239.343 32.1761L240.224 34.0397ZM247.282 29.216C249.204 27.2943 250.378 25.3587 250.378 23.4365H248.316C248.316 24.5232 247.628 25.9547 245.824 27.7583L247.282 29.216ZM250.378 23.4365C250.378 21.717 249.858 20.2491 248.702 19.1855L247.306 20.7026C247.941 21.2867 248.316 22.1471 248.316 23.4365H250.378ZM248.717 19.1999C247.628 18.1559 246.206 17.6775 244.565 17.6775V19.739C245.79 19.739 246.661 20.0845 247.291 20.6882L248.717 19.1999ZM244.565 17.6775C242.988 17.6775 241.294 18.0122 239.493 18.6501L240.181 20.5933C241.819 20.0133 243.277 19.739 244.565 19.739V17.6775ZM238.806 19.6217C238.806 25.6745 238.788 30.1647 238.753 33.0953L240.814 33.1205C240.85 30.1766 240.868 25.676 240.868 19.6217H238.806ZM268.335 17.8486L268.597 18.8454L269.38 18.6395L269.366 17.8307L268.335 17.8486ZM268.227 11.6696L268.31 10.6422L267.177 10.5516L267.197 11.6876L268.227 11.6696ZM273.6 12.0995H274.631V11.1479L273.683 11.072L273.6 12.0995ZM273.708 17.9023L272.68 17.9732L272.728 18.6744L273.398 18.8855L273.708 17.9023ZM278.49 21.341L279.317 20.7254L278.49 21.341ZM279.242 31.5497L278.945 32.5368L279.784 32.7892L280.168 32.0021L279.242 31.5497ZM273.171 29.7229L272.211 29.346L271.802 30.3875L272.874 30.71L273.171 29.7229ZM272.956 25.1559L272.204 25.8608L272.215 25.873L272.227 25.8847L272.956 25.1559ZM269.195 24.9947L268.52 24.2158L268.506 24.2273L268.493 24.2394L269.195 24.9947ZM269.302 29.508L268.444 30.0798L269.302 29.508ZM271.451 31.6035L270.905 32.4776L270.916 32.4845L271.451 31.6035ZM278.006 36.4929L277.259 37.2029L277.268 37.2122L278.006 36.4929ZM278.221 47.2926L279.015 47.9506L279.022 47.9412L278.221 47.2926ZM273.493 50.3015L273.217 49.3084L272.462 49.5181V50.3015H273.493ZM272.902 57.2327L272.81 58.2593L273.775 58.3461L273.921 57.3883L272.902 57.2327ZM267.529 56.7491L266.509 56.6013L266.353 57.6782L267.437 57.7757L267.529 56.7491ZM268.12 50.409L269.151 50.43L269.167 49.5992L268.359 49.4064L268.12 50.409ZM259.792 43.3166L259.075 42.5757L258.485 43.1464L258.909 43.8493L259.792 43.3166ZM263.069 40.1465L263.771 39.3912L263.055 38.7265L262.353 39.4056L263.069 40.1465ZM271.398 40.4689L270.631 41.1585L271.398 40.4689ZM268.174 37.7824L267.571 38.6185L267.575 38.6212L268.174 37.7824ZM263.231 21.0724L262.443 20.4074L262.442 20.409L263.231 21.0724ZM269.366 17.8307L269.258 11.6517L267.197 11.6876L267.304 17.8665L269.366 17.8307ZM268.145 12.6971L273.518 13.1269L273.683 11.072L268.31 10.6422L268.145 12.6971ZM272.57 12.0995C272.57 14.926 272.605 16.8941 272.68 17.9732L274.736 17.8314C274.667 16.833 274.631 14.9325 274.631 12.0995H272.57ZM273.398 18.8855C275.118 19.4269 276.534 20.4405 277.663 21.9567L279.317 20.7254C277.938 18.8745 276.166 17.5956 274.017 16.9191L273.398 18.8855ZM277.663 21.9567C278.852 23.5529 279.34 24.86 279.34 25.9081H281.401C281.401 24.2339 280.635 22.4963 279.317 20.7254L277.663 21.9567ZM279.34 25.9081C279.34 28.0168 278.982 29.7333 278.316 31.0974L280.168 32.0021C281.007 30.2857 281.401 28.241 281.401 25.9081H279.34ZM279.539 30.5627L273.468 28.7359L272.874 30.71L278.945 32.5368L279.539 30.5627ZM274.13 30.0998C274.552 29.0245 274.792 28.0143 274.792 27.0901H272.731C272.731 27.6705 272.577 28.4154 272.211 29.346L274.13 30.0998ZM274.792 27.0901C274.792 26.0615 274.413 25.1554 273.685 24.427L272.227 25.8847C272.573 26.2309 272.731 26.6144 272.731 27.0901H274.792ZM273.708 24.4509C272.996 23.6922 272.106 23.2654 271.075 23.2654V25.3269C271.477 25.3269 271.84 25.4733 272.204 25.8608L273.708 24.4509ZM271.075 23.2654C270.113 23.2654 269.246 23.5863 268.52 24.2158L269.87 25.7736C270.218 25.4717 270.605 25.3269 271.075 25.3269V23.2654ZM268.493 24.2394C267.73 24.9476 267.412 25.9148 267.412 26.9827H269.473C269.473 26.3313 269.656 25.973 269.896 25.75L268.493 24.2394ZM267.412 26.9827C267.412 28.0563 267.787 29.0938 268.444 30.0798L270.16 28.9362C269.671 28.2028 269.473 27.5568 269.473 26.9827H267.412ZM268.444 30.0798C269.097 31.0588 269.919 31.8612 270.905 32.4775L271.998 30.7294C271.264 30.2711 270.653 29.6766 270.16 28.9362L268.444 30.0798ZM270.916 32.4845C273.898 34.2947 275.992 35.8686 277.259 37.2028L278.754 35.783C277.299 34.2516 275.022 32.5659 271.986 30.7224L270.916 32.4845ZM277.268 37.2122C278.422 38.3963 279.017 39.9018 279.017 41.8122H281.079C281.079 39.4242 280.313 37.3835 278.745 35.7736L277.268 37.2122ZM279.017 41.8122C279.017 43.753 278.473 45.3436 277.42 46.6441L279.022 47.9412C280.405 46.2328 281.079 44.1698 281.079 41.8122H279.017ZM277.428 46.6347C276.351 47.9326 274.96 48.8243 273.217 49.3084L273.769 51.2947C275.895 50.7042 277.655 49.5899 279.015 47.9506L277.428 46.6347ZM272.462 50.3015C272.462 52.2791 272.271 54.5361 271.883 57.077L273.921 57.3883C274.321 54.7712 274.524 52.4074 274.524 50.3015H272.462ZM272.994 56.2061L267.621 55.7225L267.437 57.7757L272.81 58.2593L272.994 56.2061ZM268.549 56.8969C268.911 54.3993 269.114 52.2412 269.151 50.43L267.089 50.3879C267.055 52.0871 266.863 54.1557 266.509 56.6013L268.549 56.8969ZM268.359 49.4064C265.574 48.7417 262.994 46.6268 260.674 42.784L258.909 43.8493C261.39 47.9585 264.362 50.5718 267.881 51.4116L268.359 49.4064ZM260.508 44.0575L263.786 40.8874L262.353 39.4056L259.075 42.5757L260.508 44.0575ZM262.368 40.9019C263.906 42.33 265.331 43.433 266.64 44.1839C267.941 44.9299 269.197 45.3682 270.377 45.3682V43.3067C269.694 43.3067 268.801 43.0465 267.666 42.3956C266.539 41.7495 265.242 40.757 263.771 39.3912L262.368 40.9019ZM270.377 45.3682C271.152 45.3682 271.925 45.2154 272.517 44.7351C273.15 44.2214 273.395 43.4856 273.395 42.7256H271.334C271.334 43.0401 271.248 43.1103 271.218 43.1339C271.148 43.1909 270.927 43.3067 270.377 43.3067V45.3682ZM273.395 42.7256C273.395 41.6291 272.939 40.6408 272.164 39.7794L270.631 41.1585C271.146 41.7298 271.334 42.246 271.334 42.7256H273.395ZM272.164 39.7794C271.442 38.9776 270.293 38.0298 268.773 36.9437L267.575 38.6212C269.063 39.6842 270.064 40.5275 270.631 41.1585L272.164 39.7794ZM268.777 36.9463C264.294 33.7149 262.273 30.3689 262.273 26.929H260.212C260.212 31.2978 262.812 35.1874 267.571 38.6185L268.777 36.9463ZM262.273 26.929C262.273 24.8097 262.871 23.1018 264.019 21.7358L262.442 20.409C260.94 22.1951 260.212 24.3916 260.212 26.929H262.273ZM264.018 21.7374C265.242 20.2876 266.76 19.3288 268.597 18.8454L268.073 16.8518C265.826 17.443 263.941 18.6334 262.443 20.4074L264.018 21.7374Z"
        fill="#4D4D4D"
      />
      <rect x="295.5" y={29} width="216.5" height={6} fill="#4C4C4C" />
    </svg>
  );
};

export default DominoDivider;
