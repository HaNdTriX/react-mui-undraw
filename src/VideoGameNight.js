import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgVideoGameNight = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 883.272 604.198"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M758.298 252.276q18.262 19.152 40.749 6.112c-6.291-10.081-7.79-21.047-6.113-32.599h-29.203c1.294 10.151.946 19.603-5.433 26.487zM806.517 586.416l15.621-8.149 6.791-86.252v-45.503l-35.995-.679 10.187 45.503 3.396 95.08zM761.238 586.416l-15.62-8.149-6.791-86.252v-45.503l35.994-.679-10.187 45.503-3.396 95.08z"
        fill="#ffb8b8"
      />
      <path
        d="M737.244 456.02l38.032-3.396 6.113-34.636 7.47 33.957 41.428-2.716c.905-16.502-1.394-33.486-6.791-50.936l-91.006-2.038z"
        fill="#2f2e41"
      />
      <path
        d="M697.714 325.941l-45.749-35.228a6.654 6.654 0 00-1.552-.891l-6.649-2.706c-5.34-2.173-15.513-9.4-10.552-16.842 4-6 19.311 4.748 21.195 8.73a6.578 6.578 0 002.79 2.951l9.296 5.095a6.654 6.654 0 00.698.331l35.396 14.347a6.654 6.654 0 006.063-.547l6.417-4.07a6.654 6.654 0 0110.09 4.327l2.121 10.704a6.654 6.654 0 01-4.157 7.511l-18.977 7.234a6.654 6.654 0 01-6.43-.946z"
        fill="#ffb8b8"
      />
      <path
        d="M706.212 300.274c12.666-3.397 11.336 14.299 21 23l19-15-11.005-53.281a19.803 19.803 0 00-13.05 11.949z"
        fill={color}
      />
      <path
        d="M729.774 399.65h95.76c-15.499-41.763-13.99-84.716-.794-128.487a3.263 3.263 0 00-1.604-3.84l-27.485-14.368c-10.79 7.02-22.385 4.863-34.637-4.754l-29.882 8.15c8.135 48.857 8.366 96.71-1.358 143.3z"
        fill={color}
      />
      <path
        d="M753.718 602.367l-39.907 1.692a7.045 7.045 0 01-7.266-5.996 7.045 7.045 0 015.29-7.885l6.77-1.66 26.603-15.42c3.942 4.082 9.369 7.533 16.004 10.472l.078 10.841a7.906 7.906 0 01-7.572 7.956z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M882.877 604.198H.321v-2.181h882.951l-.395 2.181z"
      />
      <path
        d="M813.706 601.761l39.907 1.692a7.045 7.045 0 007.265-5.996 7.045 7.045 0 00-5.29-7.885l-6.769-1.66-26.603-15.42c-3.942 4.082-9.37 7.533-16.004 10.472l-.078 10.842a7.906 7.906 0 007.572 7.955z"
        fill="#2f2e41"
      />
      <circle cx={775.276} cy={216.281} r={21.733} fill="#ffb8b8" />
      <path
        d="M809.234 392.86l-7.18 13.96a9.818 9.818 0 005.283 13.683 9.818 9.818 0 0013.162-7.776l2.997-20.547 10.866-51.615-.679-25.807H811.95c7.413 19.194 3.736 47.507-2.716 78.101z"
        fill="#ffb8b8"
      />
      <path
        d="M808.555 317.474h29.203l-4.239-32.027a26.235 26.235 0 00-14.777-20.267z"
        fill={color}
      />
      <path
        d="M798.381 204.31a20.895 20.895 0 00-4.568-16.412c-3.707-4.388-9.923-7.98-20.234-6.285-22.497 3.696-28.985 22.425-26.78 27.135s8.96 15.628 8.96 15.628-4.959-10.808.423-13.008 26.207-10.866 33.476-6.962a13.028 13.028 0 017.165 10.975z"
        fill="#2f2e41"
      />
      <path
        d="M426.41 113.863l-8.738 4.434a197.756 197.756 0 00-39.44-53.182c-78.782-75.738-204.493-73.262-280.23 5.52s-73.262 204.492 5.52 280.23a198.061 198.061 0 0050.9 35.527l-4.274 8.816A207.99 207.99 0 11426.41 113.863z"
        fill="#e6e6e6"
      />
      <path
        d="M130.792 296.15a69.924 69.924 0 00100.815 96.92l12.038-12.521-100.815-96.92z"
        fill="#e6e6e6"
      />
      <path
        d="M136.075 276.517a15.606 15.606 0 00.435 22.04l92.467 88.895a15.588 15.588 0 0021.606-22.474l-92.467-88.895a15.606 15.606 0 00-22.04.434z"
        fill="#535461"
      />
      <path
        d="M413.41 203.962l12.038-12.522a69.924 69.924 0 00-100.815-96.92l-12.038 12.521z"
        fill="#e6e6e6"
      />
      <path
        d="M305.223 100.572a15.606 15.606 0 00.434 22.04l92.467 88.895a15.588 15.588 0 0021.607-22.474l-92.468-88.895a15.606 15.606 0 00-22.04.434zM344.23 306.006v-7.222s31.516-17.729 57.124 0v6.566zM631.165 306.006v-7.222s31.517-17.729 57.124 0v6.566z"
        fill="#535461"
      />
      <path
        d="M438.78 305.35h-30.86s-7.88-9.193-34.144-8.536-31.517 8.536-31.517 8.536-25.935 17.4-31.845 39.068c0 0-31.845 95.535-32.502 170.388s28.234 85.359 43.336 87.328 42.023-.656 68.287-66.973l11.162-38.74s1.97-22.98 25.608-8.536 44.649-7.879 44.649-7.879h88.641s29.547 18.385 56.468 3.94c0 0 10.506-13.789 20.355 32.83 0 0 30.203 95.864 76.822 86.015s41.366-89.955 41.366-89.955-6.237-122.456-31.845-165.792c0 0-24.623-44.977-41.038-46.947 0 0-35.456-6.566-49.245-.657l-7.88 6.566z"
        fill="#e6e6e6"
      />
      <circle cx={367.21} cy={369.697} r={57.124} fill="#535461" />
      <circle cx={665.308} cy={369.697} r={57.124} fill="#535461" />
      <path
        d="M377.164 356.959l-7.616 6.737a3.532 3.532 0 01-4.669 0l-7.63-6.737a3.526 3.526 0 01-1.194-2.627v-18.536a3.533 3.533 0 013.532-3.526h15.266a3.526 3.526 0 013.533 3.52v18.53a3.526 3.526 0 01-1.222 2.639zM377.164 382.428l-7.616-6.73a3.533 3.533 0 00-4.669 0l-7.63 6.737a3.526 3.526 0 00-1.194 2.626v18.517a3.526 3.526 0 003.52 3.532h15.278a3.526 3.526 0 003.533-3.52v-18.522a3.526 3.526 0 00-1.222-2.64zM354.479 379.664l6.737-7.63a3.532 3.532 0 000-4.668l-6.737-7.63a3.533 3.533 0 00-2.627-1.195h-18.516a3.533 3.533 0 00-3.526 3.533v15.266a3.526 3.526 0 003.52 3.532h18.529a3.526 3.526 0 002.62-1.208zM379.948 379.664l-6.723-7.636a3.526 3.526 0 010-4.669l6.737-7.63a3.526 3.526 0 012.626-1.194h18.516a3.526 3.526 0 013.533 3.519v15.28a3.526 3.526 0 01-3.52 3.532h-18.522a3.526 3.526 0 01-2.647-1.202z"
        fill="#e6e6e6"
      />
      <circle cx={444.69} cy={432.074} r={41.366} fill="#535461" />
      <circle cx={587.829} cy={432.074} r={41.366} fill="#535461" />
      <circle cx={444.69} cy={432.074} r={27.577} fill="#e6e6e6" />
      <path
        d="M444.69 451.116a19.041 19.041 0 1119.041-19.042 19.063 19.063 0 01-19.041 19.042zm0-36.77a17.728 17.728 0 1017.728 17.728 17.748 17.748 0 00-17.728-17.728z"
        fill="#535461"
      />
      <circle cx={587.829} cy={432.074} r={27.577} fill="#e6e6e6" />
      <path
        d="M587.83 451.116a19.041 19.041 0 1119.04-19.042 19.063 19.063 0 01-19.04 19.042zm0-36.77a17.728 17.728 0 1017.727 17.728 17.748 17.748 0 00-17.728-17.728z"
        fill="#535461"
      />
      <circle cx={517.572} cy={436.67} r={11.819} fill="#535461" />
      <circle cx={499.509} cy={397.222} r={2.58} fill="#535461" />
      <circle cx={509.175} cy={397.222} r={2.58} fill="#535461" />
      <circle cx={507.888} cy={409.467} r={2.58} fill="#535461" />
      <circle cx={516.916} cy={409.75} r={2.626} fill="#535461" />
      <circle cx={525.931} cy={409.467} r={2.58} fill="#535461" />
      <circle cx={504.02} cy={403.67} r={2.58} fill="#535461" />
      <circle cx={512.32} cy={403.84} r={2.626} fill="#535461" />
      <circle cx={520.856} cy={403.84} r={2.626} fill="#535461" />
      <circle cx={529.798} cy={403.67} r={2.58} fill="#535461" />
      <circle cx={516.916} cy={397.274} r={2.626} fill="#535461" />
      <circle cx={526.108} cy={397.274} r={2.626} fill="#535461" />
      <circle cx={533.666} cy={397.222} r={2.58} fill="#535461" />
      <path
        d="M419.41 310.946a4.586 4.586 0 00-4.581 4.581v13.789a4.586 4.586 0 004.581 4.581h3.283a4.586 4.586 0 004.581-4.581v-13.789a4.586 4.586 0 00-4.58-4.581zM611.138 310.946a4.586 4.586 0 00-4.58 4.581v13.789a4.586 4.586 0 004.58 4.581h3.283a4.586 4.586 0 004.581-4.581v-13.789a4.586 4.586 0 00-4.58-4.581z"
        fill="#535461"
      />
      <circle cx={665.965} cy={334.897} r={15.758} fill="#e6e6e6" />
      <circle cx={632.478} cy={368.384} r={15.758} fill="#e6e6e6" />
      <circle cx={700.765} cy={366.414} r={15.758} fill="#e6e6e6" />
      <circle cx={668.591} cy={401.214} r={15.758} fill="#e6e6e6" />
      <path
        d="M449.122 301.754a13.296 13.296 0 00-13.282 13.28V373.8a13.296 13.296 0 0013.282 13.282h134.931a13.296 13.296 0 0013.281-13.282v-58.765a13.296 13.296 0 00-13.28-13.281zM676.67 342.12H655.3l10.317-17.686zm-19.083-1.314h16.714l-8.645-13.832zM641.342 376.263h-17.728v-15.759h17.728zm-16.415-1.313h15.102v-13.132h-15.102zM700.765 376.263a9.849 9.849 0 119.849-9.85 9.86 9.86 0 01-9.85 9.85zm0-18.385a8.536 8.536 0 108.536 8.536 8.546 8.546 0 00-8.536-8.536zM660.577 394.29l.928-.928 14.774 14.774-.929.928z"
        fill="#535461"
      />
      <path
        fill="#535461"
        d="M660.587 407.799l15.1-14.447.908.949-15.1 14.447z"
      />
      <path
        d="M139.571 151.714c-35.85 9.884-75.108 17.324-89.175 5.782 7.702-12.822 12.144-25.46 12.521-37.867a21.772 21.772 0 016.408-15.103 24.371 24.371 0 0120.328-6.606l9.304 1.306q.47.066.935.15a21.759 21.759 0 0117.495 18.335c1.96 13.455 8.552 25.102 22.184 34.003z"
        fill="#2f2e41"
      />
      <path
        d="M174.154 279.359l13.937 2.873a7.32 7.32 0 015.244 10.068 7.32 7.32 0 01-10.557 3.337l-21.32-13.112-36.211-85.126 18.756-5.425zM74.869 391.06l-10.553 3.069-7.988-16.497 8.123-4.233 10.418 17.661zM69.507 461.743l-12.948-3.428 2.027-22.245 11.143.686-.222 24.987z"
        fill="#a0616a"
      />
      <path
        d="M70.857 375.639l-13.713 9.025-52.745-59.66a11.756 11.756 0 012.778-17.878l65.706-39.262 10.064 28.91-34.214 32.107zM82.406 406.868l-.103.134c-.877 5.132-2.416 9.813-5.854 13.202a10.229 10.229 0 01-12.423 5.61 10.229 10.229 0 01-7.093-10.894l2.562-22.905c6.148-1.413 10.836-4.909 13.209-11.71l5.974 4.07a15.705 15.705 0 013.728 22.493z"
        fill="#2f2e41"
      />
      <circle cx={88.908} cy={125.702} r={21.108} fill="#a0616a" />
      <path
        d="M107.187 159.444L73.91 187.003l-2.592-11.344 5.808-8.854c1.612-8.686.571-18.265-2.198-28.425l21.71.02c.937 8.21 4.134 15.373 10.548 21.044z"
        fill="#a0616a"
      />
      <path
        d="M116.555 231.734l-44.923 13.684-3.494-15.978c-8.42-11.303-12.079-21.62-6.571-30.038l-2.772-12.671c7.951-6.26 14.203-12.665 17.637-19.31l27.639-10.8 20.318 1.25 6 20.107z"
        fill={color}
      />
      <path
        d="M148.47 194.222a46.281 46.281 0 00-26.823 8.219l2.742-44.57a16.176 16.176 0 0112.744 9.701z"
        fill={color}
      />
      <path
        d="M70.717 442.08l-14.259-3.509 2.1-121.153 19.145-20.967-4.285-26.58-2.774-29.777 46.768-11.597c15.808 28.703 25.363 54.8 11.416 71.1zM67.442 482.985l-.192.075c-4.14 4.808-8.69 8.728-14.409 10.106a12.466 12.466 0 01-16.497-1.95 12.466 12.466 0 01-.56-15.832l17.07-22.305c7.307 2.387 14.4 1.684 21.151-3.926l3.68 8.003a19.14 19.14 0 01-10.243 25.83z"
        fill="#2f2e41"
      />
      <path
        d="M15.356 293.931L2.84 304.646a8.121 8.121 0 001.94 13.572 8.121 8.121 0 0010.5-3.565l9.05-16.88 41.503-75.74-15.61-2.933z"
        fill="#a0616a"
      />
      <path
        d="M68.335 224.161c-8.107-2.447-15.7-3.888-21.59-1.986 1.235-15.276 3.78-28.923 12.05-35.444l11.758 1.381z"
        fill={color}
      />
      <path
        d="M112.47 120.807l-45.144-2.778.555-9.029q23.64-15.939 45.145 2.778z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgVideoGameNight.propTypes = {
  color: PropTypes.string
};
SvgVideoGameNight.defaultProps = {
  color: "primary"
};
export default SvgVideoGameNight;
