import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMotherhood = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1137.12 705.8"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Motherhood_svg__a"
          x1={567.29}
          y1={802.9}
          x2={567.29}
          y2={328.35}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M1127.94 489.25c-19.91 60.83-70.92 106.63-125.73 139.7-73.78 44.53-158.27 69.69-244.18 75.52q-13.89 1-27.82 1.21c-1.07 0-2.14.06-3.22.06h-.87q-6.69.09-13.37 0a573.79 573.79 0 01-79.32-6.37l-3.85-.59-4.93-.8q-25.59-4.27-50.69-10.88-8.17-2.16-16.29-4.56c-2-.57-3.91-1.17-5.86-1.77q-18.82-5.8-37.16-13c-.89-.35-1.79-.7-2.67-1.06a519.94 519.94 0 01-65.89-31.58l-2.09-1.2-1.25-.72-2.13-1.24c-1.49-.86-3-1.74-4.46-2.64-2.18-1.29-4.36-2.62-6.51-4l-1.91-1.19c-3.12-2-6.24-3.94-9.38-5.85-1.35-.83-2.71-1.64-4.07-2.45h-.11a115.63 115.63 0 00-20.75-10 83.88 83.88 0 00-8.1-2.35c-.86-.19-1.74-.39-2.6-.56l-2.19-.39c-.44-.09-.89-.17-1.34-.22h-.25c-25.62-3.93-52.7 3.56-76.83 14.12-19.88 8.7-39 19.5-58.83 28.07a205 205 0 01-27.21 9.75 150.29 150.29 0 01-63.74 3.06c-.6-.09-1.21-.19-1.81-.3q-4.56-.76-9.08-1.83l-1.83-.43q-4.35-1-8.62-2.34l-1.86-.56q-4.4-1.37-8.71-3c-1-.37-2-.77-3-1.17a172.37 172.37 0 01-45.09-26.21c-.39-.3-.76-.61-1.12-.91-1.91-1.57-3.77-3.17-5.61-4.82-.67-.61-1.35-1.22-2-1.84q-3.27-3-6.36-6.25l-.9-.94a151.77 151.77 0 01-21.88-29.38 12 12 0 01-.54-1c-1.91-3.38-3.67-6.83-5.29-10.39-.67-1.47-1.34-3-1.94-4.48-.2-.44-.39-.89-.56-1.34-8.9-21.76-12.75-45.23-15.93-68.58-.37-2.74-.73-5.46-1.08-8.19C4.16 445.51-.44 406.95.04 368.9v-.78a357.51 357.51 0 012.52-38.36 278.56 278.56 0 017.69-39.54c8.73-32 23.69-62 41-90.25 43.49-71.18 104.68-134.28 182.12-165.3C316.8 1.25 415.63 9 492.84 55.02c23.53 14 45.34 31.46 71 41.19 22.31 8.47 47.38 9.83 68.48-2.08 17.43-9.85 28.94-15.11 49.79-16.81a432.39 432.39 0 01128.9 9.22q2.57.56 5.11 1.17c110.33 25.9 211.32 93.38 272.07 189.46q2.4 3.81 4.72 7.7c36.74 61.47 57.21 136.59 35.03 204.38z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M707.27 681.25s36.95-65.45 92.59-84.35a113.91 113.91 0 0057.7-43.11 192.4 192.4 0 0017-30.61"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M909.56 511.08c-6.34 6.15-35.87 12.52-35.87 12.52s7.24-29.33 13.58-35.48a16.014 16.014 0 1122.29 23zM892.85 564.14c-8.66 1.72-36.91-9-36.91-9s22-20.68 30.69-22.4a16 16 0 016.22 31.38zM832.03 621.57c-8.35-2.9-27.33-26.4-27.33-26.4s29.45-6.73 37.8-3.84a16 16 0 01-10.47 30.24zM776.23 654.65c-8.72-1.44-31.4-21.4-31.4-21.4s27.89-11.61 36.6-10.17a16 16 0 11-5.2 31.57zM831.32 532.24c0 8.84 16 34.47 16 34.47s16-25.62 16-34.45a16 16 0 10-32 0zM766.56 571.76c2.64 8.43 25.57 28.11 25.57 28.11s7.61-29.24 5-37.67a16.015 16.015 0 10-30.57 9.56zM708.86 618.81c1.18 8.76 20.45 32 20.45 32s12.44-27.52 11.26-36.28a16 16 0 10-31.71 4.26z"
        fill={color}
      />
      <path
        d="M909.56 511.08c-6.34 6.15-35.87 12.52-35.87 12.52s7.24-29.33 13.58-35.48a16.014 16.014 0 1122.29 23zM892.85 564.14c-8.66 1.72-36.91-9-36.91-9s22-20.68 30.69-22.4a16 16 0 016.22 31.38zM832.03 621.57c-8.35-2.9-27.33-26.4-27.33-26.4s29.45-6.73 37.8-3.84a16 16 0 01-10.47 30.24zM776.23 654.65c-8.72-1.44-31.4-21.4-31.4-21.4s27.89-11.61 36.6-10.17a16 16 0 11-5.2 31.57zM831.32 532.24c0 8.84 16 34.47 16 34.47s16-25.62 16-34.45a16 16 0 10-32 0zM766.56 571.76c2.64 8.43 25.57 28.11 25.57 28.11s7.61-29.24 5-37.67a16.015 16.015 0 10-30.57 9.56zM708.86 618.81c1.18 8.76 20.45 32 20.45 32s12.44-27.52 11.26-36.28a16 16 0 10-31.71 4.26z"
        opacity={0.25}
      />
      <path
        d="M709.4 679.95s7.26-74.81 50.48-114.6a113.9 113.9 0 0035.25-62.82 190.82 190.82 0 003.15-34.88"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M825.37 442.41c-3.3 8.19-27.72 26-27.72 26s-5.26-29.75-2-38a16.002 16.002 0 1129.67 12zM831.61 497.69c-7.23 5.08-37.39 6.74-37.39 6.74s11.75-27.83 19-32.91a16.001 16.001 0 1118.42 26.17zM799.27 574.83c-8.81.74-35.68-13-35.68-13s24.19-18.09 33-18.83a16 16 0 012.68 31.88zM761.66 627.69c-8.56 2.21-37.37-6.79-37.37-6.79s20.78-21.92 29.34-24.13a16.008 16.008 0 018 31zM762.42 493.46c3.58 8.08 28.58 25 28.58 25s4.25-29.9.68-38a16 16 0 10-29.26 12.95zM719.22 555.84c5.83 6.63 34.76 15.33 34.76 15.33s-4.89-29.81-10.72-36.45a16 16 0 10-24 21.12zM685.56 622.22c4.62 7.53 31.66 21 31.66 21s.23-30.2-4.4-37.73a16 16 0 00-27.26 16.73z"
        fill={color}
      />
      <path
        d="M779.38 601.33s-8.65 58.28-5.56 69.7-5.55 100.25-5.55 100.25 2.54 18.85-6.62 31.5c-1.07 0-2.14.06-3.22.06h-.87q-6.69.09-13.37 0a573.79 573.79 0 01-79.32-6.37l-3.85-.59-4.93-.8q-25.59-4.27-50.69-10.88-8.17-2.16-16.29-4.56c-2-.57-3.91-1.17-5.86-1.77q-18.82-5.8-37.16-13c-.89-.35-1.79-.7-2.67-1.06a519.94 519.94 0 01-65.89-31.58l-2.09-1.2-1.25-.72-2.13-1.24c-1.49-.86-3-1.74-4.46-2.64-2.18-1.29-4.36-2.62-6.51-4l-1.91-1.19c-3.12-2-6.24-3.94-9.38-5.85-1.35-.83-2.71-1.64-4.07-2.45h-.11a115.63 115.63 0 00-20.75-10 83.88 83.88 0 00-8.1-2.35c-.86-.19-1.74-.39-2.6-.56l-2.19-.39c-.44-.09-.89-.17-1.34-.22l12.24-29.7.25-.6h-.38c-16.07-1.21-31.8-5.26-47.42-9.29h-.07l.3-.62c.08-.17.17-.36.26-.53l-.49-.12h-.07q2.11-4.43 4.21-8.86l.55.14.45-1c.51-1.09 1-2.17 1.48-3.25 6.86-15.06 12.81-30.52 14.76-46.83a83.23 83.23 0 00.52-13.51 73.58 73.58 0 00-5.64-25.84c-.13-.32-.26-.62-.4-.93a53.68 53.68 0 00-14-19c-3.95-3.37-8.45-6.17-11.74-10.17-4.22-5.12-6.05-11.72-7.77-18.11-2.13-7.89-4.25-16.05-4.35-24.15v-.31-.88-1a38.73 38.73 0 01.66-7l.06 1c0-.23.08-.47.13-.71 3.18-14.7 15.27-25.8 27.67-34.48 9.17-6.45 19-12.29 27.24-19.78l.14-.1a65.63 65.63 0 007.8-8.44c9.84-12.91 13.38-29.6 13.61-45.78v-1a2.28 2.28 0 010 .26v-.57c.08-4.77-.11-9.63.65-14.32v1.35a30.36 30.36 0 011-4.39 27.71 27.71 0 0113.95-16.76c.32-.17.63-.32 1-.47 11.89-5.81 27.94-5.21 40.77-5.27 23.36-.09 46.23 3.7 69.75 2.8 21.62-.81 43.46-2.43 64.73 1.5s42.36 14.22 54 32.27a41.37 41.37 0 016.91 18.86v.36c0-.12 0-.25.05-.37v2.14c.24 11.9-5.16 24.09-1.28 35.35 6.23 18.09 32.3 22.76 39.71 40.42a22.89 22.89 0 011.55 5.48c0-.14.08-.29.11-.44a25.53 25.53 0 01.19 3.61c.21 7.65-2.91 15.49-7.88 21.76 2.43.63 5.53 1.53 9.06 2.82l-.75.19c23.96 8.85 66.62 34.85 55.22 106.18z"
        transform="translate(-31.44 -97.1)"
        fill="url(#Motherhood_svg__a)"
      />
      <path
        d="M400.17 254.17c-1.9 6-1.56 12.4-1.65 18.68-.24 16.18-3.74 32.88-13.5 45.8-9.07 12-22.59 19.63-34.87 28.32s-24.26 19.8-27.42 34.51c-2.35 11 .56 22.3 3.46 33.14 1.71 6.39 3.53 13 7.71 18.12 3.26 4 7.72 6.8 11.62 10.18 16.4 14.15 21.9 37.82 19.35 59.33s-12 41.51-21.25 61.07c17.19 4.49 34.54 9 52.3 9.63s36.18-3 50.56-13.41c26.95-19.55 33.31-57 54.43-82.78 7.94-9.67 17.86-17.52 28.15-24.63 9.93-6.85 20.44-13.14 32-16.55s23.65-3.82 35.51-5.63c16-2.44 31.41-7.4 46.68-12.63 12.15-4.16 24.6-8.72 34-17.5s14.89-22.92 10-34.78c-7.34-17.66-33.18-22.32-39.36-40.43-4.07-11.93 2.19-24.93 1.18-37.5a41.79 41.79 0 00-6.85-18.86c-11.55-18.06-32.46-28.37-53.54-32.29s-42.72-2.31-64.15-1.49c-23.31.89-46-2.9-69.13-2.81-19.97.08-47.64-1.43-55.23 22.51z"
        fill="#965d7b"
      />
      <g opacity={0.1}>
        <path d="M647.09 306.05c.87-6.29 2.26-12.67 2-18.95-.88 6.38-2.29 12.8-2 18.95zM399.12 261.76v-4.55c-.75 4.69-.57 9.55-.64 14.33v.57c.4-3.45.6-6.91.64-10.35zM677.84 388.73c-9.37 8.78-21.82 13.34-34 17.5-15.28 5.22-30.69 10.19-46.65 12.67-11.86 1.81-24 2.23-35.52 5.63s-22.07 9.7-32 16.55c-10.29 7.11-20.21 15-28.15 24.63-21.12 25.74-27.48 63.23-54.43 82.78-14.38 10.41-32.81 13.99-50.53 13.41-16.53-.58-32.72-4.53-48.74-8.7-1.38 3-2.78 5.92-4.17 8.86 17.18 4.49 34.54 9 52.29 9.63s36.19-3 50.57-13.42c26.95-19.54 33.31-57 54.43-82.77 7.94-9.67 17.85-17.53 28.15-24.63 9.93-6.85 20.43-13.15 32-16.56s23.66-3.81 35.52-5.63c16-2.44 31.41-7.4 46.68-12.63 12.14-4.15 24.6-8.71 34-17.49 7.74-7.25 12.85-18.17 11.62-28.43a38.17 38.17 0 01-11.07 18.6zM365.45 491.35v-.19c2.54-21.51-3-45.18-19.35-59.33-3.9-3.38-8.37-6.18-11.63-10.18-4.18-5.13-6-11.73-7.7-18.12-1.95-7.31-3.91-14.84-4.26-22.34-2 10.65.84 21.62 3.65 32.13 1.71 6.39 3.52 13 7.7 18.12 3.26 4 7.73 6.8 11.63 10.17 14.01 12.08 20.07 31.07 19.96 49.74z" />
      </g>
      <path
        d="M744.14 504.76L634.05 614.03H487.67l-26.11-59.13-8.15-62 14.68-68.5s72.58 7.34 44.44-34.25 52.6-73.8 52.6-73.8 21.93 49.55 37.43 56.47 71.86 21.44 71.86 21.44.79.12 2.2.42a88.83 88.83 0 0112.35 3.62c23.59 8.69 66.59 34.6 55.17 106.46z"
        fill="#ffc1c7"
      />
      <path
        d="M650.77 500.68s5.71 11 20.39 16.72-20.39-16.72-20.39-16.72zM556.56 510.47s-21.59 36.69-17.51 66.43z"
        opacity={0.1}
      />
      <path
        d="M687.75 398.3c-9.7 2.23-22.32 9.09-28 29a228.11 228.11 0 00-8.57 65.24l3.67 44h-10.24v-66.47c-.81-7.75 11-48.12 11-48.12 1.75-7.29 13.31-20.42 19.74-27.3a88.83 88.83 0 0112.4 3.65z"
        opacity={0.1}
      />
      <path
        d="M690.2 398.3c-9.7 2.23-22.32 9.09-28 29a228.3 228.3 0 00-8.56 65.24l3.67 44h-10.25v-66.47c-.82-7.75 11-48.12 11-48.12 1.75-7.29 13.3-20.42 19.74-27.3a89.22 89.22 0 0112.4 3.65z"
        opacity={0.1}
      />
      <path
        d="M688.97 398.3c-9.7 2.23-22.32 9.09-28 29a227.87 227.87 0 00-8.56 65.24l3.67 44h-10.24v-66.47c-.82-7.75 11-48.12 11-48.12 1.75-7.29 13.3-20.42 19.73-27.3a88.83 88.83 0 0112.4 3.65zM481.96 493.34s13.56 73.6 84.92 85l-3.32 35.69h-75.89L453.42 492.9zM513.46 650.9l-1.49 15.83a519.94 519.94 0 01-65.89-31.58l-2.09-1.2-1.25-.72-2.13-1.24c-1.49-.86-3-1.74-4.46-2.64-2.18-1.29-4.36-2.62-6.51-4l-1.91-1.19c-3.12-2-6.24-3.94-9.38-5.85-1.35-.83-2.71-1.64-4.07-2.45l-.06-.16-8.78-31.09-.27-.94-3-10.76-.38-1.3-1.74-6.18 19.38.28h3.02l6.11.19s.08.45.27 1.29l.28 1.22a117.14 117.14 0 004.45 14.22c.41 1.06.84 2.14 1.3 3.26a131.3 131.3 0 006.23 12.93 118.65 118.65 0 006.47 10.38c1.84 2.66 3.85 5.32 6 7.93q1.21 1.44 2.49 2.85c.78.87 1.59 1.73 2.41 2.59 1.63 1.7 3.36 3.36 5.17 5l.56.5c.74.66 1.5 1.31 2.27 2 .54.45 1.09.9 1.66 1.35a96 96 0 0045.34 19.48z"
        fill="#dbe5f2"
      />
      <path
        d="M633.43 699.4l2.6-27.68.62-6.64a100.79 100.79 0 01-23.68-6.75c-2.18-.92-4.28-1.92-6.3-3a94.458 94.458 0 01-7-4 94.66 94.66 0 01-12.11-9.01 108.94 108.94 0 01-22.66-28.28c-.41-.73-.82-1.45-1.2-2.17q-1.75-3.27-3.21-6.38c-.52-1.09-1-2.17-1.46-3.21a113.16 113.16 0 01-7.31-22.22l-21.56-.31-5.9-.09h-1.08l1.29 4.6 8.43 29.79 6.66 23.5.5 1.77 1.44 5.06 2.52 8.93.52 1.82.35 1.24 1.73 6.15 5.17 18.27c2 .6 3.9 1.2 5.86 1.77q8.11 2.42 16.29 4.56 25.07 6.6 50.69 10.88l4.93.8z"
        fill="#dbe5f2"
      />
      <path
        d="M633.43 699.4a573.79 573.79 0 0079.32 6.37q6.69.06 13.37 0h.87c8.59-12.66 6.15-31 6.15-31s8.55-88.89 5.5-100.31 5.5-69.72 5.5-69.72l-11-18.35C687.06 426.46 667.4 508 667.4 508l-.13 3.72-.14 3.86-.85 23.32-1.62 44.74-2.47 68.31s-28.33 1.82-55.53 3.41c-7.11.41-14.13.82-20.56 1.15l-6.54.39-3.74.19c-4.68.24-8.73.41-11.83.52l-2.94.09a104.33 104.33 0 01-16.16-1.29l-2-.29c-18-2.78-37.74-8.21-37.74-8.21s-15.47-14.05-37-16.53a53.86 53.86 0 00-24.18 2.64l2.09 1.2a519.94 519.94 0 0065.89 31.58c.88.36 1.78.71 2.67 1.06q18.33 7.16 37.16 13c2 .6 3.9 1.2 5.86 1.77q8.11 2.42 16.29 4.56 25.07 6.6 50.69 10.88l4.93.8zM476.25 509.65l-11.18 19.14-1 1.7-.89 1.5-.06.1-3.7 6.35-10.43 17.86-1.43 2.44-14 23.89-6 10.4-2.94 5-10.36 17.69-.05.11a115.63 115.63 0 00-20.75-10 83.88 83.88 0 00-8.1-2.35c-.86-.19-1.74-.39-2.6-.56l-2.19-.39c-.44-.09-.89-.17-1.34-.22h-.25l12.11-29.68.25-.61.27-.66 3.93-9.61 17.36-42.56.94-2.27 29.44-72.16 14.43 28.33 10.18 20z"
        fill="#ffc1c7"
      />
      <path
        d="M603.82 651.9c-5.38-1.57-17 .25-28.54 2.87-15.69 3.55-31.34 8.56-31.34 8.56s-10.6-71.92 0-61.82a16.12 16.12 0 002.93 2.23c10.36 6.17 23.57-2.23 23.57-2.23s46.12 54.13 33.38 50.39z"
        fill="#ffd5d7"
      />
      <path
        d="M701.74 600.58a71.36 71.36 0 11-81.81-70.59 70.63 70.63 0 0110.45-.76 71.35 71.35 0 0171.36 71.35z"
        fill="#ffd5d7"
      />
      <path
        d="M441.49 582.9l-.61-4.58s17.74-17.72 24.16-15.59 23.85 14.36 24.77 25.37c0 0-11.62-12.23-17.43-.91s-30.89-4.29-30.89-4.29z"
        fill="none"
      />
      <path
        d="M541.16 542.32s-16.16-3.32-15.11 0a41.41 41.41 0 011.29 8.31s9.84-1 13.82-1.86 0-6.45 0-6.45zM539.91 552.31s-16.15-3.32-15.11 0a41.41 41.41 0 011.29 8.31s9.84-1 13.82-1.86 0-6.45 0-6.45z"
        fill="#ffd5d7"
      />
      <path
        d="M410.01 469.9c6.75 14.16 3.68 30.75 2.88 46.42-.38 7.59 1 17 8.12 19.63 1.93.71 4.35 1 5.29 2.84a5.35 5.35 0 01.26 3.11c-1 7.66-4.82 14.65-6.76 22.13-5.53 21.35 6.48 45.85 26.75 54.56 1.41.6 3 1.15 4.46.67a6.45 6.45 0 002.94-2.59c11.59-16 11.81-37.68 21.46-54.9 7.71-13.76 21.06-23.93 27.54-38.31 5.15-11.44 5.42-24.39 7.94-36.68 4-19.5 13.76-38 13.85-57.85a16.87 16.87 0 00-1.46-8c-1.56-3-4.49-4.91-7.3-6.73l-37.68-24.43a62.23 62.23 0 00-9.22-5.25c-11.08-4.72-24.17-2.5-34.82 3.13-8.79 4.64-16.2 11.37-23.16 18.38-5.63 5.66-13.33 10.35-18.46 16.25-13.38 15.38 11.25 34.71 17.37 47.62z"
        fill="#965d7b"
      />
      <g opacity={0.1}>
        <path d="M410.01 460.07c-4.22-8.87-17.24-20.82-20.53-32.43-4.86 14.33 15.1 30.81 20.53 42.22a46.76 46.76 0 014.14 17.77c.41-9.58-.07-19.01-4.14-27.56zM425.37 537.65a40.37 40.37 0 001.2-5.53 5.37 5.37 0 00-.27-3.16c-.94-1.84-3.36-2.12-5.3-2.84-5.11-1.89-7.26-7.26-7.92-13-.07 1-.14 2.08-.19 3.12-.38 7.59 1 17 8.11 19.63 1.46.58 3.21.87 4.37 1.78zM510.9 476.99c-2.52 12.29-2.79 25.24-7.94 36.68-6.48 14.38-19.83 24.56-27.54 38.31-9.65 17.22-9.86 38.92-21.46 54.92a5 5 0 01-7.4 1.91c-15.41-6.62-26-22.37-27.82-38.93-2.22 19.81 9.38 40.8 27.82 48.72 1.41.6 3 1.15 4.46.67a6.45 6.45 0 002.94-2.59c11.59-16 11.81-37.68 21.46-54.9 7.71-13.76 21.06-23.93 27.54-38.31 5.15-11.44 5.42-24.39 7.94-36.68 4-19.5 13.76-38 13.85-57.85a26.11 26.11 0 00-.27-4.24c-1.6 17.8-9.92 34.62-13.58 52.29z" />
      </g>
      <path
        d="M701.74 600.58a71.36 71.36 0 01-121.54 50.73 1.94 1.94 0 010-.59c.09-1.14 1.09-2 2-2.67 13-10.54 16.15-31.27 6.93-45.22-1.86-2.82-4.18-5.43-5.13-8.67-2.38-8.14 4.58-15.88 6.15-24.21 1-5.51-.21-11.69 2.85-16.39 3.87-5.95 12.61-6.46 17.68-11.43 4.31-4.24 6.5-8.62 9.3-12.14a70.63 70.63 0 0110.45-.76 71.35 71.35 0 0171.31 71.35z"
        fill="#ce8ea0"
        opacity={0.5}
      />
      <path
        d="M472.38 587.23l-1.66 7.67-7.51 34.81s-2.87-2.12-6.94-5.23c-7.6-5.78-19.39-15-24.56-20.15-7.95-8 9.17-26 9.17-26s1.29.8 3.32 1.81c3 1.48 7.59 3.38 12 3.69a71.79 71.79 0 0111.81 2.12c2.55.71 4.37 1.28 4.37 1.28z"
        fill="#ffd5d7"
      />
      <path
        fill="#ffd5d7"
        d="M489.81 562.59l-7.48 21.33-2.61 7.42-8.99 3.58-8.51 3.37-5.74 2.29-14.98-14.88v-2.76l2.7-2.77 25.47-26.15 20.14 8.57z"
      />
      <circle cx={500.55} cy={341.95} r={78.7} opacity={0.1} />
      <circle cx={500.55} cy={339.5} r={78.7} fill="#ffc1c7" />
      <path
        d="M575.28 654.81c-15.69 3.55-31.34 8.56-31.34 8.56s-10.6-71.92 0-61.82a16.12 16.12 0 002.93 2.23c5.46 11.7 17.87 31.46 17.87 31.46-2.13 2.66 6.64 14.54 10.54 19.57zM482.33 583.9l-2.61 7.42-9 3.58-7.51 34.81s-2.87-2.12-6.94-5.23c-1.15-6.89 2.31-17.5 6-26.2 2.16-5.17 4.39-9.67 5.76-12.32.83-1.6 1.34-2.53 1.34-2.53s2.88 3.75 12.96.47z"
        opacity={0.1}
      />
      <path
        d="M575.84 657.06l-1.89 30.07q-8.17-2.16-16.29-4.56c-2-.57-3.91-1.17-5.86-1.77q-18.82-5.8-37.16-13c-.89-.35-1.79-.7-2.67-1.06a519.94 519.94 0 01-65.89-31.58l-2.09-1.2-1.25-.72-2.13-1.24c-1.49-.86-3-1.74-4.46-2.64a112.82 112.82 0 0122.46-3.11h.52a14.1 14.1 0 01-.62-3.7c-.34-7.18 3.16-17.3 6.66-25.44 1-2.29 1.95-4.41 2.84-6.28.8-1.66 1.53-3.13 2.13-4.29.4-.79.74-1.45 1-1.95.39-.74.62-1.16.62-1.16a4.85 4.85 0 002.27 1.32 5.58 5.58 0 00.81.22 10.29 10.29 0 001.43.22 16.9 16.9 0 003.21-.07 24.28 24.28 0 002.57-.46c.75-.17 1.55-.39 2.41-.65.62-.2 1.28-.43 2-.68s1.13-.42 1.71-.67a76.54 76.54 0 0010.92-5.76c15.44-9.55 22.43-2.32 25.19 2.73a18 18 0 011.57 3.8s17.68 6.92 17.27 12.79c-.07 1.16.69 3.42 2 6.29 1.46 3.27 3.6 7.34 5.89 11.5 5.75 10.36 12.56 21.2 12.56 21.2-2.19 2.69 6.66 14.69 10.54 19.69l.14.18 1.33 1.68c.16.19.26.3.26.3z"
        fill="#575988"
      />
      <path
        d="M465.07 528.79l-1 1.7-.89 1.5-.06.1-3.7 6.35-10.43 17.86-1.43 2.44-14 23.89-6 10.4-2.94 5-10.36 17.69-.05.11a115.63 115.63 0 00-20.75-10 83.88 83.88 0 00-8.1-2.35c-.86-.19-1.74-.39-2.6-.56l-2.19-.39a19.6 19.6 0 018.89-1.65s8.09-9.05 15.76-17.24c4.63-4.94 9.1-9.57 11.55-11.71.21-.18.41-.37.61-.56a19.85 19.85 0 001.4-1.49l.06-.08a31.42 31.42 0 002.89-4.06c.18-.3.35-.58.51-.87a76.44 76.44 0 014.17-6.55 72.19 72.19 0 0121.15-20.02c3.23-2 6.88-4.1 11-6.25 1.66-.86 3.38-1.73 5.18-2.62z"
        opacity={0.1}
      />
      <path
        d="M536.87 559.28a35 35 0 01-1 8.86 30.71 30.71 0 01-4.18 9.6 17.14 17.14 0 01-1.53 2 18.41 18.41 0 01-4.33 3.71 15.49 15.49 0 01-1.36.79c-9.34 4.92-23 3.32-35.72-.22-.79-.22-1.56-.44-2.34-.68-1.18-.34-2.36-.72-3.52-1.1-1.59-.52-3.16-1.05-4.68-1.61q-3.36-1.22-6.39-2.45l-2.76-1.15-2.5-1.13c-6.93-3-11.48-5.52-11.48-5.52s-2.22 4.73-5.73 11.92c-.6 1.22-1.22 2.51-1.89 3.86-.57 1.16-1.17 2.37-1.78 3.63-1.42 2.83-2.93 5.86-4.52 9-.88 1.76-1.79 3.53-2.72 5.34-.73 1.42-1.47 2.86-2.22 4.3l-1.36 2.59a574.41 574.41 0 01-7.09 13.18c-3.12-2-6.24-3.94-9.38-5.85-1.35-.83-2.71-1.64-4.07-2.45h-.11a115.63 115.63 0 00-20.75-10 83.88 83.88 0 00-8.1-2.35c-.86-.19-1.74-.39-2.6-.56a19.78 19.78 0 016.69-.82s8.28-9.25 16-17.52c4.52-4.83 8.87-9.33 11.28-11.43a18.67 18.67 0 001.87-1.9l.14-.14.15-.19c.38-.44.74-.91 1.09-1.38a34.7 34.7 0 002.24-3.47l.2-.34a77.72 77.72 0 015.1-7.78 72.27 72.27 0 0120.04-18.5c3.27-2 7-4.15 11.15-6.33 1.69-.88 3.46-1.78 5.33-2.68l.29-.14q3.54-1.73 7.47-3.44c.3-.15.62-.28.93-.41q4.37-1.9 9.19-3.8a48.42 48.42 0 019.38-2.65 40 40 0 018.54-.6 35 35 0 014.51.45c12.69 2 22.47 10.55 27.84 21.08a42.55 42.55 0 013.32 8.68c.16.65.33 1.3.46 2a40 40 0 01.9 7.6z"
        fill="#ffc1c7"
      />
      <path
        d="M575.84 657.06l-1.89 30.07q-8.17-2.16-16.29-4.56c-2-.57-3.91-1.17-5.86-1.77q-18.82-5.8-37.16-13c-.89-.35-1.79-.7-2.67-1.06a519.94 519.94 0 01-65.89-31.58l-2.09-1.2-1.25-.72-2.13-1.24a53.91 53.91 0 0120.24-4.06h3.39c23.32 1.42 40.32 16.96 40.32 16.96s19.94 5.47 38 8.24l1.47.22a104.51 104.51 0 0016.42 1.33c3-.06 7.71 0 13.66.22l.14.18 1.33 1.68c.16.18.26.29.26.29zM668.8 658.48c-.24-.37.45 0 0 0z"
        opacity={0.1}
      />
      <path
        d="M669.42 660.32a.2.2 0 01-.06-.13c0-.09.15 0 .2 0s0 .12-.14.13zM633.43 699.4a573.79 573.79 0 0079.32 6.37q6.69.06 13.37 0l.09-.12-47.35-37.44c-6.32-5-5-1.21-9.44-7.89-6.22.39-31.5-.82-56.44-2-9-.42-18-.84-26-1.16l-7.42-.26-4-.14c-2.72-.1-5.22-.16-7.42-.22-2.91-.05-5.32-.06-7.08 0a104.58 104.58 0 01-16.5-1.4l-1.77-.26c-17.93-2.78-37.58-8.18-37.58-8.18s-16.28-14.8-38.65-16.7a53.69 53.69 0 00-23.77 3.27l1.25.72 2.09 1.2a519.94 519.94 0 0065.89 31.58c.88.36 1.78.71 2.67 1.06q18.33 7.16 37.16 13c2 .6 3.9 1.2 5.86 1.77q8.11 2.42 16.29 4.56 25.07 6.6 50.69 10.88l4.93.8z"
        fill="#ffc1c6"
      />
      <path
        d="M508.47 631.98s30.17 2 35.06 8.15zM428 337.7c3.68-3.22 9.24-2.29 14.13-2a41.1 41.1 0 0030.13-11.21c4.34-4.15 7.88-9.35 13.23-12.07 7.56-3.85 16.84-1.74 24.45 2s14.47 9.05 22.46 11.89a10.6 10.6 0 005.25.79c6.14-1 6.84-9.34 7.54-15.52 2-17.47 16.52-2.49 34-3.67 1.85-4.55.58-39.84-3.17-43s-8.63-4.61-13.36-5.93q-32.76-9.12-66.2-15.57c-8.86-1.7-18-3.27-26.87-1.88-7.66 1.19-14.82 4.51-21.8 7.89-10.73 5.21-21.6 10.87-29.55 19.76-16 17.89-16.37 43.63-14.88 66.24.46 6.95-1.18 25.16 8.34 25.4 11.07.24 10.34-17.92 16.3-23.12z"
        opacity={0.1}
      />
      <path
        d="M428 336.48c3.68-3.22 9.24-2.29 14.13-2a41.14 41.14 0 0030.13-11.21c4.34-4.15 7.88-9.35 13.23-12.08 7.56-3.85 16.84-1.74 24.45 2s14.47 9.05 22.46 11.89a10.6 10.6 0 005.25.79c6.14-1 6.84-9.34 7.54-15.53 2-17.46 16.52-2.48 34-3.66 1.85-4.56.58-39.84-3.17-43s-8.63-4.61-13.36-5.93q-32.76-9.13-66.2-15.57c-8.86-1.71-18-3.27-26.87-1.89-7.66 1.2-14.82 4.51-21.8 7.9-10.73 5.21-21.6 10.86-29.55 19.75-16 17.9-16.37 43.63-14.88 66.25.46 6.94-1.18 25.15 8.34 25.4 11.07.25 10.34-17.9 16.3-23.11z"
        fill="#965d7b"
      />
      <path
        d="M534.46 317.95a10.7 10.7 0 01-5.25-.79c-8-2.84-14.86-8.14-22.46-11.9s-16.89-5.86-24.45-2c-5.35 2.73-8.89 7.93-13.23 12.08a41.19 41.19 0 01-30.13 11.21c-4.89-.25-10.45-1.19-14.14 2-5.95 5.24-5.24 23.35-16.24 23.11a6 6 0 01-4.36-1.95c.91 5.05 2.92 9.17 7.41 9.28 11 .29 10.3-17.87 16.25-23.07 3.69-3.23 9.25-2.29 14.14-2a41.16 41.16 0 0030.13-11.22c4.34-4.14 7.88-9.35 13.23-12.07 7.56-3.85 16.83-1.74 24.44 2s14.47 9.06 22.47 11.9a10.68 10.68 0 005.25.78c6.13-1 6.83-9.34 7.53-15.52 1.98-17.49-4.49 7.11-10.59 8.16zM678.21 660.46s5.71 11 20.38 16.72-20.38-16.72-20.38-16.72zM629.56 698.81l-4.93-.8-7.3-7.73s8.23 1.55 12.23 8.53zM556.58 606.01l2.88 2.47-.35-4.44-2.53 1.97z"
        opacity={0.1}
      />
      <path
        d="M802.29 301.9s-43.29-2.61-38.19 27.73c0 0-1 5.36 3.85 7.79 0 0 .07-2.24 4.44-1.48a19.71 19.71 0 004.7.22 9.74 9.74 0 005.75-2.37s12.17-5 16.9-24.92c0 0 3.5-4.33 3.36-5.45l-7.3 3.12s2.49 5.27.53 9.65c0 0-.24-9.46-1.64-9.23-.29 0-3.8 1.82-3.8 1.82s4.3 9.18 1.06 15.85c0 0 1.23-11.31-2.4-15.18l-5.14 3s5 9.48 1.62 17.22c0 0 .87-11.87-2.7-16.49l-4.66 3.63s4.71 9.35 1.84 15.77c0 0-.38-13.82-2.85-14.86 0 0-4.08 3.59-4.7 5.07 0 0 3.23 6.78 1.23 10.36 0 0-1.23-9.2-2.24-9.24 0 0-4.06 6.1-4.48 10.27 0 0 .17-6.21 3.5-10.86a12.28 12.28 0 00-6.22 3.22s.63-4.31 7.22-4.68c0 0 3.35-4.63 4.25-4.91 0 0-6.55-.55-10.53 1.21 0 0 3.5-4.06 11.73-2.22l4.61-3.75s-8.63-1.18-12.29.12c0 0 4.21-3.59 13.52-1l5-3s-7.35-1.58-11.74-1c0 0 4.63-2.5 13.21.21l3.58-1.61s-5.39-1.06-7-1.23-1.66-.6-1.66-.6a18.63 18.63 0 0110.13 1.13s7.64-2.88 7.51-3.31z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M1093.5 14.18s-43.29-2.61-38.19 27.73c0 0-1 5.36 3.85 7.79 0 0 .07-2.25 4.44-1.48a20.27 20.27 0 004.7.22 9.8 9.8 0 005.75-2.37s12.17-5 16.9-24.92c0 0 3.5-4.34 3.36-5.45l-7.3 3.12s2.49 5.27.53 9.65c0 0-.23-9.46-1.64-9.24-.28 0-3.8 1.83-3.8 1.83s4.3 9.18 1.06 15.85c0 0 1.23-11.31-2.4-15.19l-5.14 3s5 9.49 1.62 17.22c0 0 .87-11.86-2.7-16.48l-4.66 3.63s4.72 9.35 1.84 15.76c0 0-.37-13.81-2.85-14.86 0 0-4.08 3.6-4.7 5.08 0 0 3.23 6.78 1.23 10.36 0 0-1.23-9.2-2.24-9.24 0 0-4.06 6.09-4.48 10.27 0 0 .17-6.22 3.5-10.86a12.19 12.19 0 00-6.22 3.22s.63-4.31 7.22-4.69c0 0 3.36-4.62 4.26-4.9 0 0-6.56-.55-10.53 1.21 0 0 3.49-4.07 11.73-2.22l4.6-3.75s-8.63-1.19-12.29.12c0 0 4.21-3.6 13.53-1l5-3s-7.36-1.59-11.74-1c0 0 4.62-2.49 13.2.21l3.59-1.6s-5.4-1.06-7-1.23-1.67-.6-1.67-.6a18.68 18.68 0 0110.13 1.12s7.64-2.83 7.51-3.31z"
        fill={color}
      />
      <path
        d="M187.67 222s-43.29-2.61-38.18 27.72c0 0-1 5.37 3.84 7.8 0 0 .08-2.25 4.44-1.49a19.86 19.86 0 004.71.23 9.83 9.83 0 005.75-2.37s12.16-5 16.9-24.92c0 0 3.5-4.34 3.36-5.45l-7.31 3.12s2.5 5.27.54 9.65c0 0-.24-9.46-1.64-9.24-.29.05-3.8 1.83-3.8 1.83s4.3 9.18 1.05 15.85c0 0 1.23-11.31-2.39-15.19l-5.14 3s5 9.49 1.61 17.22c0 0 .88-11.86-2.7-16.48l-4.65 3.62s4.71 9.34 1.84 15.76c0 0-.38-13.81-2.85-14.86 0 0-4.08 3.6-4.7 5.08 0 0 3.23 6.78 1.22 10.36 0 0-1.23-9.2-2.23-9.24 0 0-4.06 6.09-4.49 10.27 0 0 .18-6.22 3.5-10.86a12.23 12.23 0 00-6.22 3.22s.64-4.31 7.23-4.69c0 0 3.35-4.62 4.25-4.91 0 0-6.55-.54-10.53 1.22 0 0 3.5-4.07 11.73-2.22l4.6-3.75s-8.63-1.19-12.29.12c0 0 4.22-3.6 13.53-1l5-3s-7.36-1.59-11.74-1c0 0 4.62-2.49 13.21.21l3.58-1.61s-5.39-1.06-7-1.22-1.66-.6-1.66-.6a18.64 18.64 0 0110.12 1.12s7.64-2.82 7.51-3.3zM904.12 179.26s-43.29-2.61-38.19 27.72c0 0-1 5.36 3.85 7.8 0 0 .07-2.25 4.44-1.49a19.75 19.75 0 004.7.23 9.82 9.82 0 005.75-2.38s12.17-5 16.9-24.91c0 0 3.5-4.34 3.36-5.46l-7.3 3.12s2.49 5.27.53 9.65c0 0-.24-9.45-1.64-9.23-.28 0-3.8 1.82-3.8 1.82s4.3 9.19 1.06 15.86c0 0 1.23-11.31-2.4-15.19l-5.14 3s5 9.48 1.62 17.22c0 0 .87-11.87-2.7-16.49l-4.66 3.64s4.71 9.34 1.84 15.76c0 0-.38-13.82-2.85-14.86 0 0-4.08 3.59-4.7 5.07 0 0 3.23 6.79 1.23 10.37 0 0-1.23-9.21-2.24-9.25 0 0-4.06 6.1-4.48 10.28 0 0 .17-6.22 3.5-10.86a12.19 12.19 0 00-6.24 3.22s.63-4.32 7.22-4.69c0 0 3.36-4.63 4.25-4.91 0 0-6.55-.55-10.52 1.22 0 0 3.49-4.07 11.73-2.22l4.6-3.76s-8.63-1.18-12.29.12c0 0 4.21-3.59 13.53-1l5-3s-7.35-1.58-11.74-1c0 0 4.63-2.49 13.21.21l3.58-1.61s-5.39-1.06-7-1.22-1.67-.61-1.67-.61a18.74 18.74 0 0110.13 1.13s7.66-2.83 7.53-3.3z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M1107.11 128.34s-43.29-2.61-38.19 27.72c0 0-1 5.36 3.85 7.8 0 0 .08-2.25 4.44-1.49a19.8 19.8 0 004.7.23 9.78 9.78 0 005.75-2.37s12.17-5 16.9-24.92c0 0 3.51-4.34 3.37-5.45l-7.31 3.12s2.5 5.27.53 9.65c0 0-.23-9.46-1.64-9.24-.28 0-3.79 1.83-3.79 1.83s4.29 9.18 1 15.85c0 0 1.23-11.31-2.39-15.19l-5.15 3s5 9.49 1.62 17.22c0 0 .87-11.86-2.7-16.49l-4.66 3.64s4.72 9.34 1.84 15.76c0 0-.37-13.81-2.85-14.86 0 0-4.07 3.6-4.7 5.08 0 0 3.23 6.78 1.23 10.36 0 0-1.23-9.2-2.24-9.25 0 0-4.06 6.1-4.48 10.28 0 0 .18-6.22 3.5-10.86a12.19 12.19 0 00-6.22 3.22s.63-4.31 7.22-4.69c0 0 3.36-4.62 4.26-4.91 0 0-6.56-.54-10.53 1.22 0 0 3.5-4.07 11.73-2.22l4.6-3.76s-8.63-1.18-12.29.13c0 0 4.21-3.6 13.53-1l5-3s-7.36-1.59-11.74-1c0 0 4.62-2.49 13.21.21l3.58-1.61s-5.39-1.06-7-1.22-1.66-.6-1.66-.6a18.64 18.64 0 0110.12 1.12s7.69-2.83 7.56-3.31z"
        fill={color}
      />
      <path
        d="M743.17 172.14s-29.2 32.06-2.38 47.13c0 0 3.53 4.15 8.48 1.9 0 0-1.7-1.47 1.63-4.39a20.11 20.11 0 003.13-3.52 9.83 9.83 0 001.76-6s3.72-12.63-8.79-28.79c0 0-1.18-5.45-2.13-6l-2.16 7.64s5.67 1.37 7.85 5.64c0 0-7.51-5.75-8.22-4.52-.15.25-1 4.1-1 4.1s9.84 2.42 13 9.13c0 0-8-8.05-13.33-7.66l-.89 5.88s10.53 2.05 14.42 9.55c0 0-8.69-8.12-14.53-8.25l-.05 5.92s10.23 2.2 13.42 8.46c0 0-11-8.38-13.35-7.1 0 0 .24 5.42 1 6.84 0 0 7.3 1.74 8.83 5.55 0 0-7.93-4.82-8.6-4.06 0 0 2.2 7 5.19 9.94 0 0-4.73-4-6.26-9.55a12.27 12.27 0 00-1.4 6.87s-3-3.2.89-8.57c0 0-1.5-5.51-1.15-6.39 0 0-4.54 4.76-5.67 9 0 0-1-5.28 5.64-10.52v-5.94s-6.33 6-7.61 9.64c0 0-.16-5.54 7.73-11.14l.81-5.78s-5.85 4.73-8.16 8.5c0 0 1-5.16 8.45-10.15l1-3.8s-4.21 3.53-5.33 4.66-1.51.91-1.51.91a18.63 18.63 0 017.23-7.17s2.52-7.76 2.06-7.96z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M915.86 0s-29.2 32.06-2.38 47.13c0 0 3.54 4.15 8.48 1.9 0 0-1.7-1.47 1.63-4.39a19.76 19.76 0 003.13-3.52 9.82 9.82 0 001.76-6s3.73-12.63-8.79-28.8c0 0-1.18-5.45-2.13-6l-2.16 7.64s5.67 1.37 7.85 5.65c0 0-7.51-5.76-8.22-4.52-.14.25-1 4.1-1 4.1s9.84 2.42 13 9.13c0 0-8-8.06-13.33-7.67l-.89 5.89s10.53 2 14.42 9.55c0 0-8.69-8.13-14.53-8.25l-.09 5.91s10.23 2.19 13.42 8.46c0 0-11-8.38-13.35-7.11 0 0 .24 5.43 1 6.84 0 0 7.3 1.74 8.83 5.55 0 0-7.93-4.82-8.6-4.06 0 0 2.2 7 5.19 9.94 0 0-4.73-4-6.26-9.54a12.25 12.25 0 00-1.4 6.86s-3-3.2.89-8.56c0 0-1.5-5.52-1.15-6.4 0 0-4.54 4.76-5.67 9 0 0-1-5.27 5.64-10.52v-5.94s-6.33 6-7.61 9.64c0 0-.16-5.53 7.73-11.14l.81-5.78s-5.85 4.73-8.16 8.5c0 0 1-5.16 8.46-10.15l1-3.79s-4.21 3.53-5.33 4.65-1.51.92-1.51.92a18.69 18.69 0 017.22-7.22s2.56-7.7 2.1-7.9z"
        fill={color}
      />
      <path
        d="M297.43 196.99s-29.21 32.06-2.39 47.13c0 0 3.54 4.15 8.48 1.9 0 0-1.7-1.48 1.63-4.39a20.11 20.11 0 003.13-3.52 9.77 9.77 0 001.76-6s3.73-12.63-8.79-28.8c0 0-1.18-5.44-2.13-6l-2.16 7.64s5.67 1.37 7.85 5.64c0 0-7.51-5.75-8.22-4.52-.14.25-1 4.1-1 4.1s9.84 2.42 13 9.13c0 0-8-8-13.33-7.67l-.89 5.89s10.54 2.05 14.42 9.55c0 0-8.69-8.13-14.53-8.25l-.09 5.91s10.23 2.2 13.42 8.46c0 0-11-8.38-13.35-7.1 0 0 .24 5.42 1 6.84 0 0 7.31 1.74 8.84 5.55 0 0-7.94-4.82-8.6-4.06 0 0 2.19 7 5.18 9.94 0 0-4.73-4-6.26-9.55a12.21 12.21 0 00-1.39 6.87s-3-3.2.88-8.57c0 0-1.5-5.51-1.15-6.39 0 0-4.54 4.76-5.66 9 0 0-1-5.28 5.63-10.53v-5.93s-6.34 6-7.62 9.64c0 0-.16-5.54 7.73-11.14l.81-5.78s-5.85 4.73-8.16 8.5c0 0 1-5.17 8.46-10.15l1-3.8s-4.21 3.53-5.33 4.66-1.51.91-1.51.91a18.63 18.63 0 017.23-7.17s2.56-7.74 2.11-7.94zM149.2 352.9s4.31 43.15 33.45 33.29c0 0 5.45.14 7.08-5 0 0-2.23.28-2.17-4.15a20 20 0 00-.53-4.68 9.82 9.82 0 00-3.25-5.3s-6.9-11.21-27.29-12.72c0 0-4.84-2.76-5.92-2.45l4.24 6.72s4.81-3.3 9.44-2.06c0 0-9.3 1.74-8.85 3.09.09.27 2.4 3.45 2.4 3.45s8.38-5.7 15.49-3.56c0 0-11.37.59-14.62 4.78l3.78 4.6s8.57-6.46 16.75-4.34c0 0-11.86 1-15.85 5.29l4.33 4s8.47-6.14 15.27-4.32c0 0-13.58 2.57-14.22 5.18 0 0 4.2 3.45 5.76 3.83 0 0 6.18-4.27 10-2.86 0 0-8.89 2.67-8.77 3.68 0 0 6.67 3 10.86 2.79 0 0-6.17.81-11.28-1.73a12.24 12.24 0 004.17 5.63s-4.36.06-5.78-6.39c0 0-5.1-2.57-5.52-3.41 0 0 .5 6.55 2.88 10.2 0 0-4.58-2.81-4.06-11.23l-4.43-3.93s.21 8.7 2.08 12.11c0 0-4.22-3.59-3.12-13.2l-3.76-4.47s-.39 7.51.87 11.75c0 0-3.19-4.17-1.89-13.07l-2.18-3.28s-.19 5.49-.1 7.07-.33 1.74-.33 1.74a18.62 18.62 0 01-.5-10.17s-3.98-7.05-4.43-6.88z"
        fill={color}
        opacity={0.1}
      />
    </svg>
  );
};

SvgMotherhood.propTypes = {
  color: PropTypes.string
};
SvgMotherhood.defaultProps = {
  color: "primary"
};
const MemoSvgMotherhood = React.memo(SvgMotherhood);
export default MemoSvgMotherhood;
