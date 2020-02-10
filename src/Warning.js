import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWarning = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1032.24 832.63"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Warning_svg__a"
          x1={86.9}
          y1={457.32}
          x2={402.8}
          y2={457.32}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Warning_svg__b"
          x1={3013.29}
          y1={358.28}
          x2={3255.1}
          y2={358.28}
          gradientTransform="matrix(-1 0 0 1 3342 0)"
          xlinkHref="#Warning_svg__a"
        />
      </defs>
      <ellipse
        cx={530.99}
        cy={416.32}
        rx={466.48}
        ry={416.32}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={172}
        cy={629.28}
        rx={172}
        ry={26.66}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={254.67}
        cy={769.13}
        rx={66.9}
        ry={13.82}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={711.8}
        cy={715.96}
        rx={66.9}
        ry={13.82}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={484.79}
        cy={699.75}
        rx={108.79}
        ry={18.43}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={805.34}
        cy={608.52}
        rx={226.91}
        ry={35.54}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M47.03 546.49a63.14 63.14 0 003.29 63.39c2 3 3.84 5.16 5.31 5.73 7.05 2.77 21.17 9.58 21.17 9.58l34-13.36s5.52-29.2 10.74-54.27c3.56-17.1 7-32.27 8.41-34.93 3.52-6.55 0-77.86 0-77.86s-34-2.28-43.35 23.93l-4.09 8z"
        fill="#a8a8a8"
      />
      <path
        d="M92.17 554.37c20.67 23.69 29.39 3.2 29.39 3.2 3.56-17.1 7-32.27 8.41-34.93 3.52-6.55 0-77.86 0-77.86s-34-2.28-43.35 23.93l-4.09 8c-2.62 20.97-5.21 60.61 9.64 77.66z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M96.71 620.4l120-13.86 21.41-140.88-16.19-36.59a148.26 148.26 0 00-28-42.24c-8.15-8.59-18-16.85-28.36-21a42.56 42.56 0 00-4.33-1.48 11.21 11.21 0 00-10 1.77c-14.8 10.49-20.09 55.09-21.8 76.56a239.6 239.6 0 01-3.57 26.29z"
        fill="#a8a8a8"
      />
      <path
        d="M176.6 464.14l-25 61.5c13.1-9.58 32.51-61.75 32.51-61.75l17.39 59.48-13.86-62.69a196.07 196.07 0 001.76-41.14c-1.1-15.74-15.87-41-23.89-53.72a42.56 42.56 0 00-4.33-1.48 11.21 11.21 0 00-10 1.77c6.3 12.65 22.05 44.28 26.85 53.68 6.09 11.84-1.43 44.35-1.43 44.35z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M197.01 625.19h65.11a19.75 19.75 0 0019.73-20.75c-1.44-27.92-5.09-77.7-13.77-109.3-4.69-17.05-10.14-26-15.14-30.41a14.77 14.77 0 00-8.61-4.05 11.3 11.3 0 00-7 1.7c-12.09 11.59-26.21 72.58-26.21 72.58z"
        fill="#a8a8a8"
      />
      <path
        d="M257.12 571.1c2.68 7.43 3.74 16 0 24.35l-14.51 7.17s-39-16.53-34.26-50.41c0 0 1.28-7 14.71-6.46a38.07 38.07 0 0134.06 25.35zM241.62 482.04c-.45-11.88 6-16 11.33-17.31a14.77 14.77 0 00-8.61-4.05 22.86 22.86 0 00-7.51 12l-13.6 66.29s19.15-37.02 18.39-56.93z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M179.88 534.46l32.24 44.1 5.59 36.4-20.72 10.23-29.87 6.6a28.71 28.71 0 01-8.77.57l-81.51-7.17 11.09-25.71 38.3-53.77z"
        fill="#a8a8a8"
      />
      <path
        d="M167.4 519.32s22 1.51 13.74 39.31-93.25 40.83-93.25 40.83 18.06-32 45.84-54.93c3.12-2.57 6.13-5.25 9-8.11 6.39-6.39 18.61-17.62 24.67-17.1z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M187.19 547.82s29.81 27.13 27 68.88M237.34 462.38s-31.28 41.6-34.79 105.61M129.98 444.75s15.14 68.75-22.66 120.57"
        opacity={0.1}
      />
      <path
        d="M405.73 699.37h163.14a9.14 9.14 0 008-13.47l-81.53-151.48a9.13 9.13 0 00-16.08 0L397.69 685.9a9.14 9.14 0 008.04 13.47zm91.95-27.68h-20.76v-20.75h20.76zm0-34.59h-20.76v-41.51h20.76z"
        fill="#464353"
      />
      <path
        d="M405.73 699.37h163.14a9.14 9.14 0 008-13.47l-81.53-151.48a9.13 9.13 0 00-16.08 0L397.69 685.9a9.14 9.14 0 008.04 13.47zm91.95-27.68h-20.76v-20.75h20.76zm0-34.59h-20.76v-41.51h20.76z"
        opacity={0.1}
      />
      <path
        d="M405.73 704.37h163.14a9.14 9.14 0 008-13.47l-81.53-151.48a9.13 9.13 0 00-16.08 0L397.69 690.9a9.14 9.14 0 008.04 13.47zm91.95-27.68h-20.76v-20.75h20.76zm0-34.59h-20.76v-41.51h20.76z"
        fill="#464353"
      />
      <path
        d="M400 656.47a11.2 11.2 0 00-2.31-1.12c-2.68-1-5.54-1.26-8.22-2.22a11.77 11.77 0 01-4.13-2.44c-.2-.2-.39-.4-.57-.61 1-.63 1.91-1.26 2.9-1.85a34.36 34.36 0 00-12.06-12c1.61-2.37 5.24-2.18 7.36-4.09a7 7 0 002-3.93c.79-3.93-.19-8-1.17-11.87-1.9-7.57-3.82-15.19-6.9-22.35a88.07 88.07 0 01-3.74-9.06c-2.59-8.62-.78-18-2.74-26.81-.63-2.83-1.65-5.75-.94-8.55 1.09-4.34 5.94-6.91 7-11.25 3.84-15.45 4.53-31.48 6.71-47.25A60.81 60.81 0 00384 482c0-3.19-.57-6.35-.8-9.53-.62-8.93 1.17-17.85 1.94-26.77a28 28 0 013.63 8.95 36.13 36.13 0 01.21 8.88 41.71 41.71 0 01-.63 5.91c-.49 2.32-1.35 4.54-1.92 6.86a21.21 21.21 0 00.95 13.76c1.36 3 4.35 5.78 7.46 4.88 2.15-.62 3.45-2.76 4.41-4.79 3-6.36 4.67-13.73 2.65-20.49-1.33-4.5-4.25-8.57-4.52-13.27a34.3 34.3 0 01.44-5.61c1.25-10.86-1.45-21.77-2.05-32.69-.16-2.89.1-6.48-.55-9.55-.08-.37-.17-.74-.28-1.09a2.34 2.34 0 01.72.33 6.52 6.52 0 00-.14-5.59 14.21 14.21 0 01-.94-1.76c-.38-1-.31-2.16-.78-3.12a13.31 13.31 0 00-1-1.45c-1.29-1.87-1.36-4.29-1.39-6.56q-.23-17.76-1-35.48c-.27-6-.61-12.14-2.71-17.77a26.64 26.64 0 00-9.4-12.47 21.9 21.9 0 00-2.11-1.32 7.32 7.32 0 00.6-2.7 6.46 6.46 0 000-.88l-.06-.5a21.1 21.1 0 00-2-6 16.86 16.86 0 01-1.91-6.56 10.19 10.19 0 01.07-1.24c.34-2.88 1.84-5.58 2.37-8.46a14.51 14.51 0 00.22-2.71v-.95a27.26 27.26 0 00-3.21-10.1c-.5-1-1-2-1.56-3-.26-1.87-.55-3.74-.84-5.6-.16-1.08-.33-2.16-.56-3.23q-.17-.8-.39-1.56c1.55-1.46.65-3.6-.34-5.58-1.91-3.76-1.51-8.25-2.32-12.39a37.44 37.44 0 00-2.94-8.32 18.54 18.54 0 00-3.19-5.24 19.56 19.56 0 00-4.13-3 13.15 13.15 0 00-4.1-1.85c-.91-.18-1.84-.17-2.74-.38a8.68 8.68 0 01-1.68-.61 11.43 11.43 0 00-3.59-1.31 8 8 0 00-3.46.66 12.73 12.73 0 01-3.72 1h-1.41a3.13 3.13 0 00-1.91.46 7.22 7.22 0 00-.82.84 11.07 11.07 0 01-2.41 1.65A23.75 23.75 0 00318.5 255a10.06 10.06 0 01-.29 3.29c-.29.84-.86 1.57-1.1 2.43A6.82 6.82 0 00317 263c.08 1.17.2 2.33.33 3.5a7.36 7.36 0 00-1.46 3.23 4.41 4.41 0 00-.09.62v.08c-.11 2.09.92 4 1.52 6a21.32 21.32 0 01-.3 11.77c-.73 2.63-1.77 5.35-2 8v.18a9.67 9.67 0 00.46 4c.33.91.82 1.76 1.12 2.68 1.06 3.26-.48 6.68-2.52 9.54-.32.45-.65.88-1 1.3h.05l-.05.05 2.08 1.47c-.61.32-1.22.67-1.84 1a18.92 18.92 0 00-6.78 2.51 27.56 27.56 0 00-5.5 3.66 23.33 23.33 0 00-4.34 6 75.41 75.41 0 00-3.68 7.76 24.3 24.3 0 00-1.88 6.73c-.86 1.83-1.57 3.8-2.36 5.57-.4.91-.79 1.82-1.18 2.73l-34.42-84.28-5.34 2.22.42 1-1.11.47 1.51 3.68c-.22.15-.44.3-.65.46l-.28.22-.56.44-.28.23-.57.48-.21.18-.71.65c-.76.69-1.49 1.42-2.2 2.15l-1.83 1.89-.35.37-.61.62-.34.35-.87.87-.06.06-.54.52-.34.32c-.14.14-.29.27-.44.4l-.42.39-.68.58-.2.18-.93.74a26.07 26.07 0 01-4 2.57c-5.47 2.83-11.26 5.2-16.6 8.23a47.8 47.8 0 00-8.22 5.76c-3.53 3.13-6.52 7-10.61 9.27l-.45.24c-7.24 3.72-15.77 1.49-24 1.33-1.23 0-2.44 0-3.64.08-6.68.52-12.79 3.23-18.7 6.53-4.16 2.33-8.22 4.95-12.3 7.32-2.58 1.49-5.17 3.11-7.77 4.77-6.6 4.19-13.28 8.59-20.19 11.76-6.42 2.94-13 4.81-20 4.45H89c-.67 0-1.34-.09-2-.17-.65 5.25 3.55 9.48 6.35 14.1a14.29 14.29 0 012.37 6.68 12 12 0 01-.2 2.68c-.56 3.24-2.06 6.42-1.65 9.68a11.21 11.21 0 002.13 5.26c1.78 2.54 4.25 4.8 5.93 7.45 2.54 4 3.2 8.87 4.19 13.58a28.57 28.57 0 003.29 9.41c2.16 3.48 5.46 6 8.56 8.67.57.49 1.13 1 1.67 1.5.4.36.79.74 1.16 1.13 3.63 3.71 6.33 9.43 4.14 14.07-.07.16-.15.3-.23.45a4 4 0 00.55.33c2.79 1.36 6.29-.82 8.58-3.13 1.13-1.13 2.2-2.33 3.24-3.55 2.79-3.1 5.35-6.46 8-9.68.72-.87 1.44-1.72 2.18-2.56a37 37 0 019.88-8 36.29 36.29 0 016.06-2.46c3.1-1 6.3-1.74 9.41-2.72a77.31 77.31 0 0012.39-5.2 190.55 190.55 0 0020-12.4l1-.65a34.28 34.28 0 005.95-4.75c.32-.35.63-.71.92-1.08 1.56-2 2.57-4.37 4-6.45a20.75 20.75 0 015.61-5.41c6.17-4.15 14.36-5.73 21.69-8h.08a84.3 84.3 0 0034.17-20.29l5.48 13.42q-.85 2.38-1.61 4.81c-1.22 4-2.22 8.12-4.61 11.5a8.58 8.58 0 00-1.74 3.09 10 10 0 01-.41 2.48c-.34.68-1.05 1.13-1.34 1.83-.42 1 .13 2.29-.43 3.23a5.08 5.08 0 01-.95 1C271.38 390 271 392 271 393.82a17.83 17.83 0 01-.45 5.52 13.15 13.15 0 011.29-.67 6 6 0 00-.11 1 11.14 11.14 0 00.35 2.81 22.19 22.19 0 002.92 5.84 41.5 41.5 0 003.13 4.5 41 41 0 006.62 5.92l10.08 7.78-1 4.21c-2.2 8.82-4.42 17.75-4.53 26.85a115.7 115.7 0 00.81 12.89l.87 8.78c.7 7.07 1.4 14.14 2.17 21.21.49 4.47 1 9 2.58 13.22 2.38 6.41-.25 13.65.76 20.43.8 5.31 2.38 10.8.79 15.93-.64 2-1.76 3.92-2.58 5.9-2.05 4.92-2.26 10.39-2.43 15.72a66.81 66.81 0 00.51 14c.86 4.78 2.76 9.47 2.39 14.32-.52 6.89-5.56 12.78-6.17 19.67-.49 5.49 1.9 10.8 4.47 15.67 1.89 3.59-.75 8.23-1.75 12.18-2 7.75 1.32 15.85 5.37 22.72a1.12 1.12 0 00.51.54c.46.17.89-.29 1.19-.68s.39-.48.6-.71c0 .31.06.62.08.92 0 .65.05 1.3.05 2a20.1 20.1 0 001.36 7.4 13.07 13.07 0 00.56 1.34 6.18 6.18 0 001 1.61 6.11 6.11 0 004 1.68c3.32.36 6.66-.33 10-.62 3.52-.3 7.05-.17 10.58-.25a1.53 1.53 0 00.79-.17 1.35 1.35 0 00.45-.72 8 8 0 00.17-3.94 27.94 27.94 0 00-.75-3.13c-.47-1.65-.9-3.31-1.31-5-.08-.31-.15-.62-.22-.93l.16.07q3.23-7.26 6.47-14.52c1.09-2.45 2.2-5.1 1.66-7.73-.39-1.88-1.59-3.47-2.44-5.19-2-4.06-2.08-8.8-2.11-13.34l-.12-25.72c5-6.36 8.09-13.93 10-21.83a70.61 70.61 0 01.59 34 31.67 31.67 0 00-.95 5.18c-.39 7.13 5.16 13.17 6.64 20.15a4.54 4.54 0 01.11 1.64 6.15 6.15 0 01-.82 1.9c-2.66 4.87-2.37 10.75-2 16.29l1.17.19a3.1 3.1 0 001.24 1.22 6.12 6.12 0 001.55.64 38.18 38.18 0 005.83.89c2.82.28 5.65.56 8.48.74 1.12.07 2.24.13 3.36.16a33.55 33.55 0 014.7.33 34 34 0 015 1.45c7.29 2.44 15.45 3.83 22.51.79a10.14 10.14 0 004.11-2.91 4.84 4.84 0 00-1.21-7.52zM303.28 371.4c1.06 2.11 2.12 4.21 3 6.4 1.73 4.24 2.78 9 1.68 13.42-.32 1.3-2.41 2.3-2.4 3.64a3 3 0 00-.16.31l-6.53-16a57.08 57.08 0 014.41-7.77zm-7.17 34a27.67 27.67 0 01-3.54-6.11c-.12-.27-.25-.53-.37-.8a2.4 2.4 0 00.95-.71c1-1.26.46-3.1.61-4.72a10.2 10.2 0 011.59-4l6.13 15q-.93 2.44-1.74 4.93a35 35 0 01-3.63-3.59z"
        transform="translate(-83.88 -33.68)"
        fill="url(#Warning_svg__a)"
      />
      <path
        d="M233.81 236.72c-.11 2.09.93 4 1.54 6a21.23 21.23 0 01-.29 11.74c-1.12 4-3 8.23-1.57 12.14.33.92.83 1.76 1.13 2.68 1.24 3.8-1.06 7.8-3.58 10.91l9.89 6.93a11.37 11.37 0 005 2.39c1.85.22 4-.77 4.38-2.59.13-.62 0-1.27.12-1.9a5.16 5.16 0 012.77-3.84 9.06 9.06 0 014.79-.89c6.07.33 11.23 4.32 16.75 6.88a67.38 67.38 0 0011.27 3.74c2.19.57 4.62 1.09 6.6 0s2.89-3.62 2.74-5.91a19.33 19.33 0 00-2.1-6.51 16.56 16.56 0 01-1.93-6.55c0-3.36 1.84-6.42 2.46-9.72.87-4.69-.9-9.46-3.06-13.72s-4.78-8.36-5.83-13a19 19 0 00-1.09-4.11 9.36 9.36 0 00-2-2.68c-3.71-3.67-9-5.41-14.18-5.79s-10.41.47-15.55 1.36a32.51 32.51 0 00-5.77 1.37 36.65 36.65 0 00-7.59 4.11c-2.34 1.62-4.75 3.99-4.9 6.96z"
        fill="#464353"
      />
      <g opacity={0.1}>
        <path d="M291.29 269.89c0 .3 0 .6.06.89.31-2.93 1.85-5.68 2.4-8.61a14.22 14.22 0 00.19-3.56c0 .52-.1 1-.19 1.56-.63 3.3-2.5 6.36-2.46 9.72zM236.02 246.72a17.91 17.91 0 00-.67-6 34.78 34.78 0 01-1.45-4.66c0 .21-.08.41-.09.62-.11 2.09.93 4 1.54 6a16.89 16.89 0 01.67 4.04zM295.26 284.45a5.72 5.72 0 01-2.68 4.41c-2 1.09-4.41.57-6.6 0a66.52 66.52 0 01-11.27-3.75c-5.52-2.55-10.68-6.54-16.75-6.87a9.06 9.06 0 00-4.79.89 5.16 5.16 0 00-2.77 3.84c-.07.63 0 1.28-.12 1.9-.39 1.82-2.53 2.81-4.38 2.59a11.37 11.37 0 01-5-2.39l-8.89-6.24c-.33.45-.66.89-1 1.3l9.89 6.94a11.37 11.37 0 005 2.39c1.85.22 4-.77 4.38-2.59.13-.62 0-1.27.12-1.9a5.16 5.16 0 012.77-3.84 9.06 9.06 0 014.79-.89c6.07.33 11.23 4.32 16.75 6.87a66.52 66.52 0 0011.27 3.75c2.19.57 4.62 1.09 6.6 0s2.89-3.62 2.74-5.91c-.01-.17-.04-.33-.06-.5zM234.62 269.23a7.74 7.74 0 01.27 1.23 7.25 7.25 0 00-.27-3.23c-.3-.92-.8-1.76-1.13-2.68a8.36 8.36 0 01-.46-2.07 9.4 9.4 0 00.46 4.07c.33.92.83 1.77 1.13 2.68z" />
      </g>
      <path
        d="M246.36 648.68a1.31 1.31 0 01-.46.72 1.53 1.53 0 01-.79.17c-3.56.08-7.12 0-10.67.25-3.36.29-6.73 1-10.08.62a5.17 5.17 0 01-5-3.29 13.07 13.07 0 01-.56-1.34 19.91 19.91 0 01-1.37-7.4v-2a15.17 15.17 0 00-.29-2.18 3.31 3.31 0 01.1-2.53c1.42-2.59 4.85-3.11 7.49-3.31a61.85 61.85 0 0118.25 1.34c.47 2.3 1 4.58 1.56 6.86q.62 2.51 1.32 5a28 28 0 01.76 3.13 8 8 0 01-.26 3.96z"
        fill="#464353"
      />
      <path
        d="M246.36 648.68a1.31 1.31 0 01-.46.72 1.53 1.53 0 01-.79.17c-3.56.08-7.12 0-10.67.25-3.36.29-6.73 1-10.08.62a5.17 5.17 0 01-5-3.29 13.07 13.07 0 01-.56-1.34h1.28c4.21 0 8.43-.15 12.64-.15 1.27 0 2.55-.06 3.81-.21s2.29-.36 3.44-.5a47.13 47.13 0 015.18-.21h1.42a8 8 0 01-.21 3.94z"
        opacity={0.06}
      />
      <path
        d="M320.01 630.11a10.23 10.23 0 01-4.14 2.91c-7.12 3-15.35 1.65-22.7-.79a34.58 34.58 0 00-5.05-1.45 34 34 0 00-4.73-.33c-1.13 0-2.26-.09-3.39-.16-2.86-.18-5.71-.46-8.55-.74a38.63 38.63 0 01-5.88-.89 6.25 6.25 0 01-1.57-.64 2.41 2.41 0 01-1.44-2.15c.08-1.27 1.4-2 2.56-2.55 10.29-4.45 21.47-6.38 32.57-7.93a13.05 13.05 0 003.27-1c1.25-.5 1.38.32 2 1.24a7.71 7.71 0 001 1.18 11.9 11.9 0 004.16 2.44c2.7 1 5.59 1.27 8.29 2.22a11.35 11.35 0 012.33 1.12 4.82 4.82 0 011.22 7.52z"
        fill="#464353"
      />
      <path
        d="M320.01 630.11a10.23 10.23 0 01-4.14 2.91c-7.12 3-15.35 1.65-22.7-.79a34.58 34.58 0 00-5.05-1.45 34 34 0 00-4.73-.33c-1.13 0-2.26-.09-3.39-.16.92-.87 1.86-1.72 2.82-2.54a8.4 8.4 0 012.37-1.56 6.86 6.86 0 013.37-.23c5.72.79 10.86 4.8 16.63 4.45a20.46 20.46 0 007.65-2.47 13.35 13.35 0 005-3.56 5.77 5.77 0 00.93-1.79 4.82 4.82 0 011.22 7.52z"
        opacity={0.06}
      />
      <path
        d="M318 456.32c-1 2-2.28 4.17-4.44 4.79-3.14.9-6.16-1.92-7.53-4.88a21.08 21.08 0 01-1-13.76c.57-2.31 1.44-4.53 1.93-6.85a41.72 41.72 0 00.64-5.91 36.13 36.13 0 00-.21-8.88c-1.61-8.59-9-15-11.46-23.44-1.24-4.21-1.18-8.69-1.11-13.08a13.45 13.45 0 01.34-3.3 5.15 5.15 0 01.3-.86c1.65-3.66 6.54-4.16 9.94-6.29 1.88-1.17 6.15-4.94 7.73-1.5a11.31 11.31 0 01.76 2.39c.65 3.06.39 6.65.55 9.54.61 10.92 3.33 21.82 2.07 32.68a34.09 34.09 0 00-.44 5.6c.27 4.7 3.21 8.77 4.56 13.27 2.08 6.77.41 14.14-2.63 20.48z"
        fill="#fbbebe"
      />
      <path
        d="M313.94 374.77a3.37 3.37 0 00-2.3 0l-6.77 2a41.92 41.92 0 00-6.91 2.51 16.21 16.21 0 00-2.75 1.71 5.15 5.15 0 01.3-.86c1.65-3.66 6.54-4.16 9.94-6.29 1.88-1.17 6.15-4.94 7.73-1.5a11.31 11.31 0 01.76 2.43z"
        opacity={0.1}
      />
      <path
        d="M314.38 374.01a3.06 3.06 0 00-2.74-.22l-6.77 2a41.92 41.92 0 00-6.91 2.51 15.88 15.88 0 00-3.29 2.14c-3.16-5.49-4-12-4.58-18.3-.32-3.67-.56-7.35-.7-11a49.34 49.34 0 01.16-7.88c.38-3 1.25-5.93 1.79-8.91a40.66 40.66 0 00.62-5.28 51.63 51.63 0 00-.53-11.59 71.84 71.84 0 00-2.78-12c-.64-1.79-1.41-3.52-2.11-5.28l-.24-.62a72.9 72.9 0 01-3.09-9.91c-.32-1.38-.34-2.83-1.4-3.77a18.82 18.82 0 013-.12h.6a22.43 22.43 0 0111.44 4 26.73 26.73 0 019.48 12.54c2.11 5.63 2.46 11.75 2.73 17.76q.81 17.72 1 35.46c0 2.27.1 4.69 1.4 6.56a13.39 13.39 0 011 1.45c.47 1 .4 2.11.78 3.12a15.77 15.77 0 00.95 1.76 6.45 6.45 0 01.19 5.58z"
        fill="#464353"
      />
      <path
        d="M247.82 256.63c-1-.33-2-.68-3-1l2.08.16a4.2 4.2 0 01.92.84zM288.77 292.72c-.2.68-.4 1.36-.62 2a38.22 38.22 0 01-1.85 4.81 22.38 22.38 0 01-4.73 6.86 6.28 6.28 0 01-2.36 1.56 7.5 7.5 0 01-2.32.22q-4 0-8-.12a28.42 28.42 0 01-6.18-.61 22.07 22.07 0 01-6.3-2.84c-7.47-4.62-13.61-11.66-16.24-20-.33-1.06-.56-2.33.17-3.16a3.87 3.87 0 012.55-.87h.12a16.11 16.11 0 006.09-2.09 6.26 6.26 0 002.78-2.84 7.66 7.66 0 00-.09-4.42l-2.22-10.08a10.44 10.44 0 00-1.77-4.49c.65.23 1.3.44 2 .62 6.18 1.67 12.94.66 19 2.85 2.32.85 4.64 2.38 5.34 4.76 1.17 4-2.74 8.15-1.62 12.15.75 2.72 3.52 4.29 6 5.56l1.67.85 4.63 2.35.64.32.1.05c1.46.74 3 1.66 3.51 3.23a6 6 0 01-.3 3.33z"
        fill="#fbbebe"
      />
      <path
        d="M300.97 316.2a21.59 21.59 0 01-1.84 7.4 30.23 30.23 0 00-3.15 13c-.77 13.5-5.9 29.57 1.45 40.91.18.28.36.56.53.85a15.88 15.88 0 00-3.29 2.14c-3.16-5.49-4-12-4.58-18.3-.32-3.67-.56-7.35-.7-11a49.34 49.34 0 01.16-7.88c.38-3 1.25-5.93 1.79-8.91a40.66 40.66 0 00.62-5.28 51.63 51.63 0 00-.53-11.59 71.84 71.84 0 00-2.78-12c-.64-1.79-1.41-3.52-2.11-5.28l-.24-.62a22.38 22.38 0 01-4.73 6.86 6.28 6.28 0 01-2.36 1.56 7.5 7.5 0 01-2.32.22q-4 0-8-.12a28.42 28.42 0 01-6.18-.61 22.07 22.07 0 01-6.3-2.84c-7.47-4.62-13.61-11.66-16.24-20-.33-1.06-.56-2.33.17-3.16a3.87 3.87 0 012.55-.87h.12l9 11.13a18 18 0 012.6 3.89 2.32 2.32 0 00.8 1.19 2.05 2.05 0 001 .18h28.16a7.31 7.31 0 00-1.24-4.21c-.26.06-.61.08-.07-.08a28.34 28.34 0 00-3.1-9.27 6.45 6.45 0 00-.31-.58 10.66 10.66 0 01-1.48-3.24 5.4 5.4 0 013.28 0c1.23.53 1.87 1.86 2.41 3.09.46 1 .92 2.07 1.33 3.12 0 .11.1.23.14.34a22.64 22.64 0 011.66 6.49c.06.82.26 1.86.94 2.13a.89.89 0 00.34.08 3.78 3.78 0 014.09 1 9 9 0 012 3.94 21.56 21.56 0 001.42 4.24c1.29 2.46-.68 3.56 1.65 5.07a8.12 8.12 0 012.74 2.46 7.68 7.68 0 01.6 4.55zM242.89 629.77c.47 2.3 1 4.58 1.56 6.86l-.06.14c-4.57-2-9.25-4.09-14.24-4.53-4.63-.4-9.66.85-12.81 4.21a15.17 15.17 0 00-.29-2.18 3.31 3.31 0 01.1-2.53c1.42-2.59 4.85-3.11 7.49-3.31a61.85 61.85 0 0118.25 1.34z"
        opacity={0.1}
      />
      <path
        d="M282.28 294.69c.47 0 .3 0 .07.08s-.61.08-.07-.08zM304.01 616.81a86.86 86.86 0 00-12.52 9.69 13.11 13.11 0 01-3.95 2.89 11.54 11.54 0 01-4.76.49 162 162 0 01-18.78-1.86 2.41 2.41 0 01-1.44-2.15c.08-1.27 1.4-2 2.56-2.55 10.29-4.45 21.47-6.38 32.57-7.93a13.05 13.05 0 003.27-1c1.25-.5 1.38.32 2 1.24a7.71 7.71 0 001.05 1.18z"
        opacity={0.1}
      />
      <path
        d="M230.64 283.09c1.47 1.31 3.15 2.37 4.64 3.64 4 3.39 6.52 8.13 9 12.75a8.34 8.34 0 01-4.59.31 32.92 32.92 0 00.39 13.37 12.4 12.4 0 00-4.47 5.55 37.1 37.1 0 00-1.46 7q-2.16 15.61-4.34 31.22a4.84 4.84 0 01-1 2.81 5.39 5.39 0 00-.76.75 4.15 4.15 0 00-.35 2.15c-.06.73-.54 1.6-1.27 1.5a1.58 1.58 0 01-.89-.58 20.42 20.42 0 01-2-2.48c-5.9 11.32-8.74 23.52-11.86 35.9-2.23 8.82-4.46 17.74-4.57 26.84a115.68 115.68 0 00.81 12.88l.88 8.78c.71 7.06 1.42 14.13 2.19 21.19.5 4.48 1 9 2.61 13.22 2.4 6.41-.26 13.64.76 20.42.8 5.31 2.39 10.8.79 15.92-.64 2.05-1.76 3.92-2.6 5.9-2.06 4.92-2.27 10.39-2.45 15.72a66 66 0 00.52 14c.86 4.79 2.79 9.48 2.41 14.32-.53 6.89-5.61 12.78-6.23 19.66-.49 5.49 1.92 10.79 4.51 15.66 1.91 3.59-.75 8.23-1.76 12.18-2 7.74 1.33 15.84 5.41 22.71a1.09 1.09 0 00.52.54c.47.17.89-.29 1.2-.68 3.07-3.94 8.51-5.43 13.5-5s9.66 2.49 14.24 4.53l6.49-14.45c1.1-2.45 2.22-5.1 1.67-7.73-.39-1.88-1.6-3.47-2.46-5.19-2-4.06-2.1-8.79-2.12-13.34l-.12-25.7c5.06-6.36 8.15-13.92 10.1-21.82a70 70 0 01.6 34 30.85 30.85 0 00-1 5.18c-.39 7.13 5.2 13.16 6.69 20.14a4.33 4.33 0 01.12 1.64 6.18 6.18 0 01-.83 1.9c-2.68 4.86-2.39 10.75-2 16.29a162.33 162.33 0 0021.21 2.27 11.92 11.92 0 004.76-.49 13.14 13.14 0 003.95-2.9 87.22 87.22 0 0114.87-11.25 34.62 34.62 0 00-12.15-12c1.61-2.37 5.28-2.18 7.42-4.08a7 7 0 002-3.94c.8-3.92-.19-8-1.18-11.85-1.92-7.58-3.85-15.19-7-22.35a85.88 85.88 0 01-3.76-9.05c-2.62-8.62-.79-18-2.77-26.81-.64-2.82-1.67-5.73-.95-8.54 1.1-4.33 6-6.9 7.08-11.24 3.87-15.45 4.56-31.46 6.76-47.23a60.68 60.68 0 00.79-9.11c0-3.19-.57-6.35-.8-9.53-.9-12.73 3.17-25.43 2.13-38.15a48 48 0 00-7.52-22c-7.35-11.35-2.22-27.41-1.45-40.91a30.08 30.08 0 013.14-13 21.33 21.33 0 001.85-7.4 7.65 7.65 0 00-.56-4.67 7.89 7.89 0 00-2.73-2.46c-2.33-1.52-.36-2.62-1.65-5.08a21.34 21.34 0 01-1.42-4.24 8.92 8.92 0 00-2-3.93 3.78 3.78 0 00-4.09-1c-.95 0-1.21-1.26-1.29-2.21-.27-3.48-1.71-6.75-3.12-9.95-.54-1.23-1.18-2.56-2.41-3.09a5.51 5.51 0 00-3.29 0 10.63 10.63 0 001.49 3.25 28.24 28.24 0 013.4 9.84c-1 .3 1 0 0 0a7 7 0 011.31 4.29h-28.15a2 2 0 01-1-.18 2.4 2.4 0 01-.81-1.19 17.33 17.33 0 00-2.6-3.88l-9.9-12.21a2.5 2.5 0 00-.85-.77 2.3 2.3 0 00-1.25 0c-3.21.47-5.58 1.81-8.38 3.44z"
        fill={color}
      />
      <path
        d="M266.17 448.53a9.54 9.54 0 014.87 1.26 4.91 4.91 0 012.42 4.22c-.11 1.89-1.56 3.39-2.61 5a13.4 13.4 0 00-1.54 3.16 1.27 1.27 0 00-.08.81c.12.38.53.57.88.74a7.51 7.51 0 014.41 6.56c-.09 3.9-3.9 7.06-3.69 11a22.62 22.62 0 00.42 2.44 18.64 18.64 0 01-1.35 9.89c-1.21 3.14-2.86 6.09-4.16 9.2-3.51 8.45-4.27 17.81-4 27 .21 6.24-2 12.18-4 18.12a260.46 260.46 0 00.9-36c-.14-3.26-.55-6.34-.4-9.61.24-5.19 3.14-9.91 3.88-15 .42-2.91.14-5.87.21-8.81.14-6 1.77-11.92 1.88-17.94.14-4.25-.25-8.63 1.96-12.04z"
        opacity={0.1}
      />
      <path
        d="M224.44 285.23a27.42 27.42 0 00-5.54 3.66 23.6 23.6 0 00-4.38 6 76.64 76.64 0 00-3.71 7.76c-1.41 3.44-2.58 7.25-1.61 10.84.88 3.25 3.37 5.78 5.09 8.67s2.73 6.28 4.05 9.45c1.76 4.23 4.17 8.17 5.91 12.41s2.79 9 1.69 13.41c-.32 1.3-2.43 2.31-2.43 3.64 0 2.2 3.18 4.59 5.29 5.23 2.43.75 5.08-.37 7.07-2 3.65-2.89 5.87-7.22 7.51-11.58 2.64-7 4.05-14.43 5.32-21.81.92-5.42 1.78-10.85 2.27-16.31.45-4.92.59-10-.71-14.72a25 25 0 00-6.83-11.36c-2.6-2.5-6.86-5.86-10.64-5.95-2.99-.01-5.79 1.25-8.35 2.66z"
        fill="#464353"
      />
      <path
        d="M252.87 405.78a4.78 4.78 0 01-2.23 3.33 13.13 13.13 0 01-3.81 1.56c-2.68.78-5.52 1.5-8.23.81a16.52 16.52 0 01-5.78-3.29l-30.28-23.18a40.89 40.89 0 01-6.67-5.92 42.63 42.63 0 01-3.16-4.49 22 22 0 01-2.94-5.84 10.69 10.69 0 01-.36-2.81 5.29 5.29 0 01.64-2.57c.73-1.22 2.29-1.47 3.57-1.81a37.46 37.46 0 0113.17-1 1.79 1.79 0 011.78 1.21c.67 1.23 1.25 2.51 1.85 3.79a27.4 27.4 0 003.57 6.11 51.54 51.54 0 004.45 4.29c3.2 3 5.82 6.6 9.23 9.36 3.95 3.19 8.75 5.1 13.25 7.45s8.94 5.4 11.2 9.95a5.83 5.83 0 01.75 3.05z"
        fill="#fbbebe"
      />
      <path
        d="M287.92 244.06a24.76 24.76 0 11-.69-5.8 24.66 24.66 0 01.69 5.8z"
        opacity={0.1}
      />
      <path
        d="M287.92 243.06a24.76 24.76 0 11-.69-5.8 24.66 24.66 0 01.69 5.8z"
        fill="#fbbebe"
      />
      <path
        d="M210.42 365.53c-1.14.73-2.83.49-4.24.17-5.56-1.24-11.7-2.13-16.77.25a5.29 5.29 0 01.64-2.57c.73-1.22 2.29-1.47 3.57-1.81a37.46 37.46 0 0113.17-1 1.79 1.79 0 011.78 1.21c.67 1.19 1.25 2.47 1.85 3.75z"
        opacity={0.1}
      />
      <path
        d="M199.97 331.86c-1.23 4-2.24 8.11-4.65 11.5a8.5 8.5 0 00-1.76 3.08 9.6 9.6 0 01-.41 2.48c-.34.68-1.06 1.13-1.35 1.83-.43 1 .13 2.29-.44 3.23a4.8 4.8 0 01-.95 1c-1.36 1.26-1.7 3.27-1.73 5.13s.15 3.76-.46 5.51c5.28-3.15 12-2.21 18-.87 1.67.37 3.74.65 4.82-.69s.46-3.1.61-4.71c.2-2.1 1.64-3.84 2.53-5.75 1-2.15 1.34-4.55 2.11-6.79 1.59-4.71 5-8.55 7.19-13a12.49 12.49 0 001.42-4.94 14.74 14.74 0 00-1.71-6.41 87.68 87.68 0 00-7.4-13.21c-1.27-1.87-3.46-5.33-5.43-2.34-1.6 2.41-2.6 5.48-3.78 8.12a148.62 148.62 0 00-6.61 16.83zM290.2 293.04a20.21 20.21 0 01-16.18-6.39 2.48 2.48 0 01-.72-1.17 2.35 2.35 0 01.46-1.64c1.2-1.85 3.27-3.07 4.23-5.06s.63-4.28.72-6.46c.16-3.91 1.7-7.78 1.83-11.63a12.15 12.15 0 00-.22-2.94 18.43 18.43 0 01-.84-4.43c.13-2.93 2.77-5.21 3.21-8.1.57-3.68-2.48-6.88-5.55-9a33.07 33.07 0 00-7.56-3.91 24.61 24.61 0 00-5.08-1.23 19.8 19.8 0 00-9.57 1.07 15.63 15.63 0 00-3.56 1.9 4.82 4.82 0 00-1.59 1.65 5.37 5.37 0 00-.42 2.39c-.06 4.09.4 8.44-1.55 12-1 1.91-2.7 3.46-3.53 5.48a9.11 9.11 0 00-.63 2.63 26.5 26.5 0 00-.15 2.82c-.06 5.27 0 10.83 2.68 15.4a40.15 40.15 0 012.57 4.31 4.91 4.91 0 01-.25 4.79 5.45 5.45 0 01-2 1.5 16 16 0 01-12.79.46 16.21 16.21 0 003.78-18.08 10.67 10.67 0 01-1.38-4 10.15 10.15 0 011-3.66 20 20 0 00.61-11.72c-.61-2.38-1.67-4.68-1.86-7.13a21.57 21.57 0 01.24-5.54 18 18 0 0112.33-14.19c.51-.17 1-.33 1.56-.47a33.26 33.26 0 017.39-.79c5.55-.18 11.18-.34 16.53 1.11a22.18 22.18 0 018.56 4.4 15.45 15.45 0 014.14 5.47 19 19 0 011.17 3.78c.23 1.07.4 2.15.57 3.23 1.21 7.69 2.42 15.53 1.13 23.21-.51 3-1.4 6-1.8 9.06-.97 7.05.78 14.06 2.52 20.88z"
        fill="#464353"
      />
      <circle cx={254.67} cy={301.06} r={1.86} fill="#fff" />
      <circle cx={286.06} cy={300.18} r={1.86} fill="#fff" />
      <path
        d="M254.67 207.06l-4-7.55a7.31 7.31 0 01.83-.84 3.17 3.17 0 011.93-.46zM265.7 197.86l-4.53 6.7-2.58-7.35a8.18 8.18 0 013.49-.66 11.6 11.6 0 013.62 1.31z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M248.5 283.54a5.45 5.45 0 01-2 1.5 16.07 16.07 0 01-11.37.95 15.57 15.57 0 01-1.42 1.51 16 16 0 0012.79-.46 5.45 5.45 0 002-1.5 4.31 4.31 0 00.64-3.46 3.55 3.55 0 01-.64 1.46zM237.65 250.05a19.7 19.7 0 01.57 4 19.93 19.93 0 00-.57-6c-.61-2.38-1.67-4.68-1.86-7.13 0-.31 0-.62-.05-.94a22.31 22.31 0 00.05 2.94c.19 2.45 1.25 4.75 1.86 7.13zM289.41 263.13a43.75 43.75 0 00.54-8 41.68 41.68 0 01-.54 6c-.51 3-1.4 6-1.8 9.06a31.56 31.56 0 00-.23 4.95 29.52 29.52 0 01.23-2.95c.4-3.06 1.29-6.03 1.8-9.06zM237.45 267.42a16.44 16.44 0 01-1.26-3.09 4.52 4.52 0 00-.12 1.1 10.67 10.67 0 001.38 4 15.11 15.11 0 011.25 5.3 15.5 15.5 0 00-1.25-7.31zM280.32 257.71a13.07 13.07 0 01.19 1.38v-.44a12.15 12.15 0 00-.22-2.94c-.22-1.05-.58-2.09-.75-3.15a4.43 4.43 0 00-.09.72 18.43 18.43 0 00.87 4.43zM274.02 284.61a5.27 5.27 0 01-.43-.51 2.07 2.07 0 00-.29 1.34 2.48 2.48 0 00.72 1.17A20.21 20.21 0 00290.2 293c-.17-.66-.34-1.31-.5-2a20.18 20.18 0 01-15.68-6.39zM282.67 243.32a.43.43 0 010-.11c.57-3.68-2.48-6.88-5.55-9a33.07 33.07 0 00-7.56-3.91 24.61 24.61 0 00-5.08-1.23 19.8 19.8 0 00-9.57 1.07 15.63 15.63 0 00-3.56 1.9 4.82 4.82 0 00-1.59 1.65 5.37 5.37 0 00-.42 2.39v2.08-.08a5.37 5.37 0 01.42-2.39 4.82 4.82 0 011.59-1.65 15.63 15.63 0 013.56-1.9 19.8 19.8 0 019.57-1.07 24.61 24.61 0 015.08 1.23 33.07 33.07 0 017.56 3.91c2.55 1.72 5.06 4.2 5.55 7.11zM247.81 248.11c-1 1.91-2.7 3.46-3.53 5.48a9.11 9.11 0 00-.63 2.63 26.5 26.5 0 00-.15 2.82v2a26.5 26.5 0 01.15-2.82 9.11 9.11 0 01.63-2.63c.83-2 2.49-3.57 3.53-5.48 1.61-3 1.58-6.45 1.55-9.88a16.68 16.68 0 01-1.55 7.88z" />
      </g>
      <path
        d="M287.71 236.73a2.91 2.91 0 01-.48.53 4.58 4.58 0 01-1.17.7c-2.91 1.26-2.79-2.85-4.31-4.26a5.17 5.17 0 00-3.38-1q-4.39-.22-8.79-.39c-4.89-.18-9.77-.27-14.65-.16q-3.51.06-7 .29c-2.7.18-5.6.53-7.9 1.81a8.37 8.37 0 00-2.11 1.65c-.55.6-1.13 1.36-1.89 1.5a18 18 0 0112.33-14.19 24.75 24.75 0 0134 4.25 15.45 15.45 0 014.14 5.47 19 19 0 011.21 3.8z"
        opacity={0.1}
      />
      <path
        d="M286.06 235.96c-2.91 1.26-2.79-2.85-4.31-4.26a5.17 5.17 0 00-3.38-1 266.53 266.53 0 00-30.44-.26c-3.61.24-7.57.78-10 3.46-.62.68-1.27 1.56-2.2 1.53-.31-2-.53-4.08-.68-6.13a6.82 6.82 0 01.12-2.3c.25-.86.82-1.59 1.11-2.43a9.74 9.74 0 00.3-3.28 23.7 23.7 0 0111.66-20.16 10.59 10.59 0 002.43-1.64 7.31 7.31 0 01.83-.84 3.17 3.17 0 011.93-.46h1.42a12.91 12.91 0 003.75-1 8.18 8.18 0 013.49-.66 11.6 11.6 0 013.62 1.31 8.77 8.77 0 001.69.61c.91.21 1.85.2 2.76.38a13.47 13.47 0 014.14 1.84 19.75 19.75 0 014.16 3 18.41 18.41 0 013.22 5.24 37.53 37.53 0 013 8.32c.81 4.14.41 8.62 2.33 12.38 1.17 2.36 2.24 4.98-.95 6.35z"
        fill="#fed253"
      />
      <path
        d="M235.37 232.82s20.73-18.86 51.6-3.22c0 0-34.85-7.93-51.6 3.22z"
        opacity={0.1}
      />
      <path
        d="M93.37 362.87c-2.82-4.62-7.06-8.85-6.4-14.09 7.76.89 15.12-1 22.23-4.29s13.71-7.56 20.37-11.75c2.62-1.65 5.23-3.27 7.83-4.77 4.12-2.36 8.21-5 12.4-7.31 6-3.3 12.12-6 18.86-6.52a34.4 34.4 0 013.67-.09c8.3.16 16.9 2.39 24.2-1.33l.45-.24c4.14-2.27 7.15-6.13 10.7-9.26a47.79 47.79 0 018.29-5.76c5.39-3 11.23-5.4 16.74-8.23a25.39 25.39 0 004-2.56l.94-.75.21-.18c.23-.19.46-.38.68-.58l.43-.38.44-.4.34-.32.55-.52.06-.07.87-.86.35-.35.61-.63.36-.36c.61-.63 1.22-1.27 1.84-1.89s1.46-1.46 2.21-2.15l.72-.64.21-.18.58-.48.27-.23.57-.44.28-.22c.28-.21.57-.41.86-.61a6.26 6.26 0 01.84-.49l-1.87-4.53 5.38-2.22 74.2 180.05-5.39 2.22-42.44-103-.3.3a85.2 85.2 0 01-35.09 20.88h-.08c-7.39 2.23-15.66 3.81-21.88 7.95a21 21 0 00-5.65 5.41c-1.46 2.08-2.48 4.45-4 6.45-.29.37-.61.73-.93 1.07a34.77 34.77 0 01-6 4.76l-.95.65a194.48 194.48 0 01-20.1 12.39 79.3 79.3 0 01-12.49 5.2c-3.13 1-6.36 1.73-9.49 2.72a37.16 37.16 0 00-6.11 2.46c-5.3 2.77-9.37 7.11-13.22 11.74-3.37 4.06-6.57 8.36-10.27 12.06-2.32 2.3-5.85 4.48-8.65 3.13l-.57-.33c.09-.15.16-.3.24-.46 2.21-4.63-.51-10.35-4.17-14.06-.38-.39-.77-.77-1.17-1.13s-1.12-1-1.69-1.5c-3.13-2.69-6.46-5.19-8.63-8.66a28.25 28.25 0 01-3.32-9.41c-1-4.71-1.67-9.56-4.23-13.57-1.68-2.65-4.18-4.91-6-7.45a11.35 11.35 0 01-2.2-5.14c-.41-3.25 1.1-6.43 1.67-9.67a12.07 12.07 0 00.21-2.68 14.19 14.19 0 00-2.37-6.7z"
        transform="translate(-83.88 -33.68)"
        fill="url(#Warning_svg__b)"
      />
      <path
        fill="#d6d8e1"
        d="M242.782 412.051l-5.298 2.184-72.963-177.023 5.297-2.184z"
      />
      <path
        d="M19.97 360.2c2.51 3.95 3.18 8.71 4.15 13.34a28.1 28.1 0 003.27 9.26c2.14 3.41 5.41 5.87 8.48 8.51.56.49 1.12 1 1.66 1.48.39.35.78.73 1.15 1.1 3.6 3.65 6.27 9.28 4.1 13.83a3.81 3.81 0 01-.23.45 4.57 4.57 0 00.55.32c2.76 1.34 6.23-.8 8.51-3.07 3.64-3.64 6.79-7.86 10.1-11.85 3.78-4.56 7.79-8.83 13-11.55a36 36 0 016-2.42c3.07-1 6.25-1.71 9.33-2.67a78.53 78.53 0 0012.28-5.11 192.53 192.53 0 0019.8-12.19l.94-.64a34.35 34.35 0 005.9-4.67c.32-.34.63-.69.92-1.06 1.54-2 2.55-4.29 4-6.34a20.66 20.66 0 015.56-5.32c6.12-4.07 14.24-5.63 21.51-7.82h.08a83.94 83.94 0 0034.5-20.53 5.62 5.62 0 001.73-2.54c.31-1.41-.45-2.81-1.18-4.05-.85-1.46-1.68-2.92-2.5-4.4a196.49 196.49 0 01-9.86-20.73c-.63-1.56-1.24-3.11-1.83-4.68q-2.27-6-4.14-12.17c-.41-1.36-.81-2.73-1.19-4.1-.07-.26-.15-.54-.22-.84-1.66-6.67-3.88-22.28-10.72-17.61a39.57 39.57 0 00-5.65 4.91c-1.33 1.35-2.63 2.74-4 4.08a40.44 40.44 0 01-3.53 3.09 25.93 25.93 0 01-4 2.52c-5.43 2.78-11.17 5.11-16.46 8.09a46.79 46.79 0 00-8.16 5.66c-3.49 3.08-6.45 6.88-10.52 9.11l-.44.24c-7.18 3.65-15.63 1.46-23.8 1.3a35.91 35.91 0 00-3.6.09c-6.63.5-12.69 3.16-18.55 6.41-4.12 2.28-8.14 4.86-12.19 7.19-2.56 1.47-5.12 3.06-7.7 4.69-6.54 4.12-13.17 8.44-20 11.56-7 3.18-14.23 5.08-21.86 4.21-.65 5.15 3.51 9.31 6.29 13.85a13.75 13.75 0 012.35 6.57 11.61 11.61 0 01-.19 2.63c-.56 3.19-2 6.31-1.64 9.52a11.05 11.05 0 002.15 5.03c1.74 2.49 4.19 4.72 5.85 7.32z"
        fill="#f86d70"
      />
      <path
        d="M223.28 381.03s8.76 7.64 17.64 11.71 3 18.67 3 18.67-9.41 2.16-16-7-4.64-23.38-4.64-23.38z"
        fill="#fbbebe"
      />
      <path
        d="M695.32 511.08s-23.2 30.53-42.45 30.78-30.55 12.86-21.41 20.74 108.74-4.5 108.74-4.5.94-37.52-7.69-43-37.19-4.02-37.19-4.02zM944.77 547.73s3.55 24.18-7.42 40.67 19.82 22.85 19.82 22.85 22.37 6.23 24-15.87 1.1-39-1-40.8-3.85-14.23-3.85-14.23z"
        fill="#444176"
      />
      <path
        d="M593.57 593.4s-.81-78.21 76.58-110l17.97-34.19 8.62-21a51.1 51.1 0 0136.09-30.46l13.94-3.13 4.31-18.16a51.08 51.08 0 0140.81-38.54 142.91 142.91 0 0125.7-2.4 22.12 22.12 0 0118.79 11s73.32-.81 76.57 39.11c0 0 7.34 36.65 17.93 43.17 0 0 17.92-4.07 35.84 22l19.55 66.8s51.32 48.06 35.84 92c0 0-21.18 30.14-128.71 9.77 0 0-114.86 35-176-13-.01.06-101.83 19.61-123.83-12.97z"
        fill="#a8a8a8"
      />
      <path
        d="M644.89 581.18s16.3-22.81 15.48-39.11 3.84-56 3.84-56M704.36 520.08s16.29-30.14 14.66-46.43c0 0 17.11-31 30.14-28.52M793.97 434.54s44.8-16.29 47.25-29.32M810.26 472.02s47.25-21.18 47.25-26.89h23.61s34.22 44.81 30.15 64.36M865.66 504.6s-45.62-3.26-61.92 9.78-45.62 19.55-45.62 19.55-17.11 36.66-23.63 43.17-17.11 29.33-17.11 29.33M865.66 547.78s4.88 17.1 11.4 26.88 16.29 44.8 16.29 44.8M942.23 597.47s10.34 28.77 19.43 29.05"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        opacity={0.1}
      />
      <path
        d="M874.5 473.98s26.86 7.26 38.09 24.85 45.53 33.54 45.53 33.54M886.02 387.32s0 37.47 10.59 37.47 34.22 4.07 34.22 4.07M834.12 342.82s-2.71 64.73-16.56 81.49"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        opacity={0.1}
      />
      <g opacity={0.05}>
        <path d="M984.59 516.82l-19.55-66.8c-17.92-26.07-35.84-22-35.84-22-10.59-6.52-17.92-43.18-17.92-43.18-3.26-39.92-76.58-39.1-76.58-39.1a22.12 22.12 0 00-18.83-11c-3.46 0-7 .11-10.54.4q3 .3 5.75.85l5.7 9.78s73.31-.82 76.57 39.1c0 0 7.34 36.66 17.93 43.18 0 0 17.92-4.08 35.84 22l19.55 66.8s51.32 48.06 35.84 92c0 0-10.45 14.87-53.92 16.67 58.61 2.15 71.84-16.67 71.84-16.67 15.48-43.97-35.84-92.03-35.84-92.03zM697.84 605.61a380.38 380.38 0 01-52.19 5.71c20.41.78 41.64-1.43 55.32-3.31-1.06-.81-2.1-1.59-3.13-2.4zM873.8 618.65a334.57 334.57 0 01-76.92 12.16c37.55 1.36 73.12-6.47 87.78-10.23-3.54-.59-7.13-1.26-10.86-1.93z" />
      </g>
      <path
        d="M222.85 745.71s22.41-.69 29.16-5.5 34.46-10.55 36.14-2.84 33.67 38.35 8.37 38.56-58.77-3.94-65.51-8.05-8.16-22.17-8.16-22.17z"
        fill="#a8a8a8"
      />
      <path
        d="M296.98 773.24c-25.3.21-58.78-3.94-65.52-8-5.13-3.13-7.18-14.35-7.86-19.52h-.75s1.42 18.07 8.16 22.17 40.22 8.25 65.51 8.05c7.31-.06 9.83-2.66 9.69-6.51-1.01 2.32-3.8 3.77-9.23 3.81z"
        opacity={0.2}
      />
      <path
        d="M769.19 689.51s-26.39-5.28-33.42-12.32-38.7-19.34-42.22-10.55-47.49 38.7-17.59 44 70.36 7 79.16 3.52 14.07-24.65 14.07-24.65z"
        fill="#a8a8a8"
      />
      <path
        d="M675.96 707.32c29.91 5.27 70.36 7 79.16 3.51 6.69-2.68 11.35-15.55 13.19-21.54l.88.19s-5.28 21.1-14.07 24.62-49.25 1.76-79.16-3.52c-8.63-1.52-11.1-5.1-10.17-9.62.74 2.98 3.75 5.25 10.17 6.36z"
        opacity={0.2}
      />
      <path
        d="M516.5 114.85h-6.28a4.4 4.4 0 000-8.8h-50.88a4.4 4.4 0 000 8.8h6.28a4.4 4.4 0 000 8.79h-8.79a4.4 4.4 0 000 8.8h50.88a4.4 4.4 0 000-8.8h8.79a4.4 4.4 0 100-8.79zM714.12 269.66h-6.28a4.4 4.4 0 000-8.79h-50.93a4.4 4.4 0 100 8.79h6.28a4.4 4.4 0 000 8.79h-8.79a4.4 4.4 0 100 8.8h50.87a4.4 4.4 0 000-8.8h8.85a4.4 4.4 0 100-8.79zM421.29 241.02h-6.28a4.4 4.4 0 100-8.79h-50.89a4.4 4.4 0 100 8.79h6.28a4.4 4.4 0 100 8.79h-8.8a4.4 4.4 0 000 8.8h50.88a4.4 4.4 0 000-8.8h8.79a4.4 4.4 0 100-8.79z"
        fill={color}
        opacity={0.1}
      />
    </svg>
  );
};

SvgWarning.propTypes = {
  color: PropTypes.string
};
SvgWarning.defaultProps = {
  color: "primary"
};
const MemoSvgWarning = React.memo(SvgWarning);
export default MemoSvgWarning;
