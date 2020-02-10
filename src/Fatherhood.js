import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFatherhood = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1097.1 790.89"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Fatherhood_svg__a"
          x1={567.33}
          y1={839.89}
          x2={567.33}
          y2={127.09}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M11.85 429.97c17.36 74.2 54.11 138.34 112.18 169.47 120.71 64.61 392.92 31.28 596.07-7a465.2 465.2 0 00264.54-151.22zM1077.2 80.71H965.73a9.63 9.63 0 110-19.26H985a9.64 9.64 0 010-19.27h-13.76a9.64 9.64 0 010-19.27h58.18c-12.91-6-28-10.27-45.39-12.51-158.64-20.37-215.28-6.89-235.26 7-24.65 17.1-52.15 29.68-81.54 35.74-97.88 20.19-280.93 44.49-446.84-7.78-82.46-26-143.74 17.92-180.48 91.28h1056.64c-1.38-21.32-5.51-41-13.09-58.24a9.56 9.56 0 01-6.26 2.31zM2.39 275.1a491.11 491.11 0 004.32 129.45l978.68 35.8a459.85 459.85 0 0068-103.71zm387.08 92.34H370.2a9.63 9.63 0 110 19.26H258.73a9.63 9.63 0 110-19.26H278a9.64 9.64 0 010-19.27h-13.76a9.64 9.64 0 010-19.27h111.47a9.64 9.64 0 010 19.27h13.76a9.64 9.64 0 010 19.27zM1096.6 137.28l-1068.48 26c-13 33.41-21.57 71.16-25.57 110.33h1075.33a457.06 457.06 0 0015.53-70.33c3.2-23.01 4.48-45.27 3.19-66zm-877.13 85.16H200.2a9.63 9.63 0 110 19.26H88.73a9.63 9.63 0 010-19.26H108a9.64 9.64 0 010-19.27H94.24a9.64 9.64 0 010-19.27h111.47a9.64 9.64 0 010 19.27h13.76a9.64 9.64 0 010 19.27z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={563.62}
        cy={772.01}
        rx={348.83}
        ry={18.88}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M853.21 633.18s5.49 7.19-2.54 18-14.65 20-12 26.77c0 0 12.11-20.15 22-20.43s3.38-12.22-7.46-24.34z"
        fill={color}
      />
      <path
        d="M853.21 633.18a9.28 9.28 0 011.12 2.25c9.62 11.31 14.74 21.86 5.5 22.12-8.62.25-18.95 15.65-21.42 19.54a7.69 7.69 0 00.29.89s12.11-20.15 22-20.43 3.35-12.25-7.49-24.37z"
        opacity={0.1}
      />
      <path
        d="M863.42 642.34c0 2.53-.28 4.58-.63 4.58s-.64-2.05-.64-4.58.36-1.34.71-1.34.56-1.19.56 1.34z"
        fill="#ffd037"
      />
      <path
        d="M866.92 645.36c-2.22 1.21-4.15 1.94-4.32 1.63s1.5-1.54 3.72-2.75 1.34-.33 1.51 0 1.31-.09-.91 1.12z"
        fill="#ffd037"
      />
      <path
        d="M824.19 633.18s-5.49 7.19 2.54 18 14.64 20 12 26.77c0 0-12.12-20.15-22-20.43s-3.39-12.22 7.46-24.34z"
        fill={color}
      />
      <path
        d="M824.19 633.18a8.86 8.86 0 00-1.12 2.25c-9.62 11.31-14.75 21.86-5.5 22.12 8.61.25 19 15.65 21.42 19.54-.08.3-.18.59-.29.89 0 0-12.12-20.15-22-20.43s-3.36-12.25 7.49-24.37z"
        opacity={0.1}
      />
      <path
        d="M813.98 642.34c0 2.53.28 4.58.63 4.58s.64-2.05.64-4.58-.36-1.34-.71-1.34-.56-1.19-.56 1.34z"
        fill="#ffd037"
      />
      <path
        d="M810.47 645.36c2.22 1.21 4.16 1.94 4.33 1.63s-1.5-1.54-3.72-2.75-1.34-.33-1.51 0-1.32-.09.9 1.12z"
        fill="#ffd037"
      />
      <path
        d="M815.73 677.04s15.36-.48 20-3.77 23.63-7.24 24.78-2 23.08 26.29 5.74 26.43-40.29-2.7-44.91-5.51-5.61-15.15-5.61-15.15z"
        fill="#a8a8a8"
      />
      <path
        d="M866.55 695.91c-17.34.14-40.29-2.7-44.91-5.51-3.52-2.15-4.92-9.84-5.39-13.38h-.51s1 12.38 5.59 15.2 27.57 5.65 44.91 5.51c5 0 6.74-1.82 6.64-4.46-.7 1.62-2.61 2.61-6.33 2.64z"
        opacity={0.2}
      />
      <path
        d="M269.23 682.66a11.73 11.73 0 003.84-5.79c.49-2.29-.49-5-2.68-5.89-2.46-.94-5.09.77-7.09 2.49s-4.27 3.69-6.88 3.32a10.47 10.47 0 003.24-9.81 4.12 4.12 0 00-.9-2c-1.37-1.46-3.84-.84-5.48.31-5.2 3.66-6.65 10.73-6.68 17.08-.52-2.29-.08-4.68-.09-7s-.66-5-2.64-6.23a8 8 0 00-4-.94c-2.34-.09-4.94.15-6.54 1.85-2 2.13-1.47 5.69.26 8s4.35 3.81 6.76 5.42a15 15 0 014.84 4.61 5.76 5.76 0 01.36.83h14.65a40.77 40.77 0 009.03-6.25z"
        fill={color}
      />
      <path
        d="M152.8 698.44s-14.06-47.71 2.63-82.82a75.36 75.36 0 006.12-47.29 126.22 126.22 0 00-6.69-22.18"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M165.21 523.95c0 5.85-10.58 22.81-10.58 22.81s-10.59-17-10.59-22.81a10.59 10.59 0 0121.17 0zM182.71 556.34c-3.17 4.91-21.28 13.39-21.28 13.39s.33-20 3.51-24.9a10.59 10.59 0 0117.77 11.51zM181.95 611.69c-5.22 2.63-25.13.81-25.13.81s10.38-17.09 15.6-19.72a10.59 10.59 0 119.53 18.91zM171.94 653.44c-4.7 3.48-24.63 5-24.63 5s7.34-18.59 12-22.07a10.59 10.59 0 1112.59 17zM139.21 570.86c4.19 4.07 23.73 8.3 23.73 8.3s-4.79-19.41-9-23.49a10.59 10.59 0 10-14.75 15.19zM128.12 619.83c5.22 2.63 25.13.81 25.13.81s-10.38-17.08-15.6-19.72a10.59 10.59 0 00-9.53 18.91zM123.88 668.91c4.7 3.47 24.62 5 24.62 5s-7.33-18.59-12-22.07a10.59 10.59 0 00-12.59 17z"
        fill={color}
      />
      <path
        d="M165.21 523.95c0 5.85-10.58 22.81-10.58 22.81s-10.59-17-10.59-22.81a10.59 10.59 0 0121.17 0zM182.71 556.34c-3.17 4.91-21.28 13.39-21.28 13.39s.33-20 3.51-24.9a10.59 10.59 0 0117.77 11.51zM181.95 611.69c-5.22 2.63-25.13.81-25.13.81s10.38-17.09 15.6-19.72a10.59 10.59 0 119.53 18.91zM171.94 653.44c-4.7 3.48-24.63 5-24.63 5s7.34-18.59 12-22.07a10.59 10.59 0 1112.59 17zM139.21 570.86c4.19 4.07 23.73 8.3 23.73 8.3s-4.79-19.41-9-23.49a10.59 10.59 0 10-14.75 15.19zM128.12 619.83c5.22 2.63 25.13.81 25.13.81s-10.38-17.08-15.6-19.72a10.59 10.59 0 00-9.53 18.91zM123.88 668.91c4.7 3.47 24.62 5 24.62 5s-7.33-18.59-12-22.07a10.59 10.59 0 00-12.59 17z"
        fill={color}
      />
      <path
        d="M119.55 695.44s17.12-3.4 21.68-7.93 25.1-12.46 27.38-6.8 30.8 24.92 11.4 28.32-45.63 4.53-51.33 2.26-9.13-15.85-9.13-15.85z"
        fill="#a8a8a8"
      />
      <path
        d="M180.04 706.91c-19.39 3.4-45.63 4.53-51.33 2.27-4.34-1.73-7.36-10-8.55-13.87l-.61.13s3.43 13.59 9.13 15.85 31.94 1.13 51.33-2.26c5.6-1 7.2-3.29 6.6-6.2-.45 1.89-2.4 3.35-6.57 4.08z"
        opacity={0.2}
      />
      <path
        d="M775.72 316.54c5.37-6 3.27-15.35 3.27-15.35s-25.34-64.58-28.15-65.29-9.86-17-9.86-17-67.57-64.23-70-64.23-27.1-17.74-30.26-18.09-8.1-2.13-13.38-5-58.78.36-60.89 2.84-12 4.26-12 4.26-20.06 1.06-22.88 4.61-23.57 5.43-23.57 5.43-10.21 3.8 3.65 13.89c-4.44.7-9.63 1.24-14.9 1.62-1.32.09-2.66.18-4 .25h-.79a13.08 13.08 0 00-4.92-6.61 41.26 41.26 0 00-4.67-2.17 37.28 37.28 0 01-6.92-4.75 226.78 226.78 0 00-32.72-21.68 15.67 15.67 0 00-5.83-2.19c-4.29-.41-8.12 2.6-12.32 3.61-7.38 1.77-14.82-2.73-22.41-2.8-9.48-.09-18.11 7.29-21 16.39-1.07 3.37-1.55 7.12-3.86 9.79-3 3.49-8.07 4-12.18 6.07a18.38 18.38 0 00-9.88 16.29v.08c0 .53 0 1.06.09 1.59.47 4.28 2.45 8.23 3.9 12.29a50.83 50.83 0 012.8 12.9.66.66 0 010 .14c.06.73.11 1.46.14 2.2v2.59c0 3.82-.13 7.67-.12 11.49v2.35c0 .51 0 1 .06 1.54v.54c0 .47.07.95.12 1.42 0 .2 0 .41.05.61 0 .46.11.91.17 1.36l.09.64c.07.45.15.9.23 1.35l.12.62c.1.48.22 1 .34 1.44.05.17.08.33.12.5q.27 1 .6 1.92a28.18 28.18 0 0018.66 17.59 17.33 17.33 0 004.95.62c3-.07 5.87-1 7.65-3.05.44.5.87 1 1.33 1.5a59.93 59.93 0 0097.33-13c1.05-.23 2.09-.44 3.14-.64 1.82-.34 3.65-.66 5.49-1l1.77-.28.7-.12c9-1.42 17.74-2.37 24-3l-24.74 3.07s-6 28.81-7.73 32 6 8.51 6 8.51 6.69 8.16 6.69 10.65 7.74 9.58 9.85 13.48a6 6 0 001 1.35 14.15 14.15 0 00-4.26 2.59c-4.89 4.63-3.26 12.75-5.5 19.11-1.4 4-4.33 7.24-7.15 10.39a14.18 14.18 0 00-2.52 3.49 8.58 8.58 0 00-.67 2.68 13.13 13.13 0 00-.06 1.54v.18c0 .4 0 .79.08 1.18v.51c.49 4.18 1.91 8.22 2.34 12.4s-.09 8.39.77 12.46a18.58 18.58 0 001.38 4.11l-14.32 16s-.09.79-.12 2.09c-11.94 9.91-30.4 28.61-23.81 45.1q1.08 2.71 2 5.19c-4.85 3.09-6.45 6.76.82 10.42 1.15.58 2.26 1.08 3.35 1.53 3.73 10.95 5.19 14 11.44 5.93.67-.88 1.45-2 2.3-3.21 8.8-.18 13.89-4.25 13.89-4.25s24.63-1.42 31 2.49c3.19 2 10.69 2.4 17.33 2.35a181.51 181.51 0 001 21.42s-1.06 30.16 1.76 36.55 4.38 17.39 4.38 17.39-4.73 10.64-1.92 16.32-2.46 13.84-2.46 13.84v20.93l2-.14a63.4 63.4 0 01-.59 4.3c-.58 3.27-1.45 6.2-2.79 7.15-3.52 2.53-3.87 16-3.87 16s-5.63 16.33-4.58 19.17-6.68 8.51-4.92 12.77 5.36 31.22 8.49 39-6.38 5.68-6.38 5.68l2.81 20.22s2.82 20.58.71 22-14.25 11.71-5.9 17.74c.65.47 1.31.9 2 1.31a21.64 21.64 0 01-.07 2.8c-.16 1.59-.56 2.86-1.45 3-2.48.36-7.41 2.84-8.45 1.78s-7 2.68-13 3.9l-.83.13-7.79-2a54.82 54.82 0 00-35.2-1.3s-5.65.88-8.39 5.1c-1.39 2.16-2 5.2-.76 9.44 3.76 12.54 29.39 16.86 29.39 16.86s8.88 1.83 19.55 4.25h-1.07a11.77 11.77 0 104 .73c12 2.76 25.29 6.12 30.69 8.49a93.9 93.9 0 0012.33 3.7 11.7 11.7 0 0021.78 4.9c16.33 3.41 32.06 6.3 32.06 6.3l26.27.43h.18a11.7 11.7 0 10.16 0l39.77.65a11.74 11.74 0 1023 3.23 11.73 11.73 0 00-.36-2.86l35.08.57 7-7.7a6.22 6.22 0 00.69-2.41c.21-2.53-1.1-6.37-10.06-8-.66-.12-18.94.17-35.09.44v-6.34s-.45-3.49-.73-7.6c-.08-1.21-.15-2.47-.18-3.71a9.62 9.62 0 003 1.37c6.69 1.07 15.84-18.45 15.84-18.45s0-11 2.11-19.87 6-38.68 6-38.68l8.46-35.83s3.5-73.1 1.74-75.94 2.12-7.81 2.12-7.81 2.81-15.61-1.41-20.93 2.46-10.65 2.46-10.65 1.76-18.45-3.17-25.54 2.31-12.06 2.31-12.06l1.76-28.74c7.39-7.45 14.07-51.8 14.43-61.38a39.42 39.42 0 013.52-15.62s4.92-7.45 5.63-12.42 6-15.25 6-15.25l9.15-34.07c3.69-13.74 2.75-23.9.3-31.14-.36-1.02-.74-1.95-1.13-2.84zm-165.31 2c5.63 3.55 3.87 4.61 5.63 6.74s.35 1.77-1.06 5.32-.35 2.49.35 6.39.36 3.9.36 3.9l1.76.25-2.45 16.47c-4 2.61-5.83 7.61-6.66 12.77-2.36-3.08-4.74-6.28-6.87-9.26.73-1.63.59-3.57.61-5.4.08-6 2.32-11.73 3.35-17.64a44.57 44.57 0 00-.57-18.11 27.52 27.52 0 00-2.35-6.43c2.28 1.52 5.17 3.32 7.9 5.04zm6.33 347.73s4.45-3 8.77-5.73c1.45 10.53 2.82 21.48 3.79 31.38-1.55-3.44-2.63-5.78-2.63-5.78a11.9 11.9 0 01-2.72-6.74c-.17-3.86-7.21-13.09-7.21-13.09zm-26.39-364.72c1 .14 2.42 1.41 3.76 2.93-1.24-1-2.49-2-3.77-2.94zm-64.41 131.28c-4.06 1.28-17.82 1.09-26 .61 3.06-5.23 6.1-10.55 8.8-15.32a32.51 32.51 0 004.85.87l26.79-23.53a46.14 46.14 0 0031.1-.2l.73 1.14c.31.5.64 1 1 1.56l-.67-1.09s-10.34 6.16-9.29 9-1.4 9.93-5.27 17.53c-1 1.9-1.87 3.78-2.71 5.67-8.76.82-25.27 2.48-29.33 3.76zm50.83 327.84l-.15-2.81c1.7-.37 2.82-.71 2.82-.71a110.7 110.7 0 00-1.76-12.42c-1.06-4.26-.51-2.84 3.61-6s0-39 0-39 2-2.49 5.17 3.9 6.35 10.29 7.41 10.64-4.23 7.46 0 14.2a40.8 40.8 0 015.27 14.19s-2.81 11.27 1.41 16.28a6.2 6.2 0 002 1.37v2.85c0 1.87 0 3.47-.09 3.81a1.41 1.41 0 01-2.25.88c-1.09-.71-8 .88-7.53 5.33a32.73 32.73 0 01-5.52 5.17l-9.59-2.48z"
        transform="translate(-51.45 -54.56)"
        fill="url(#Fatherhood_svg__a)"
      />
      <path
        d="M438.95 338.5s-3.35 27.45 23.22 30.26l4-19-8.37-11.26-11.99-4.06z"
        fill={color}
      />
      <path
        d="M445.81 334.44l-6.86 4.05s-3.35 27.45 23.22 30.26"
        opacity={0.1}
      />
      <path
        d="M487.16 183.29s-17.93 1.1-35.91 4.08q-2.76.47-5.49 1c-1.06.2-2.1.41-3.14.64-9.42 1.94-18 4.46-23 7.68-6 3.85-8-6.52-8.19-20.93-.08-5.07.09-10.63.36-16.25.35-6.5.86-13.08 1.4-19 1.19-13.12 2.56-23.32 2.56-23.32s6.28 0 14.67-.29l2.7-.1c2.63-.1 5.42-.24 8.23-.41 1.33-.07 2.67-.15 4-.25 5.32-.38 10.57-.92 15-1.62 4.72-.76 8.55-1.72 10.63-3 9.5-5.66 16.18 71.77 16.18 71.77z"
        fill="#f8bdc5"
      />
      <path
        d="M567.05 284.65l-3.5 23.23s-7.63 9.5-6.63 14.78 9.8 238.62 9.8 238.62 17.25 98.54 11.26 111.21-.35 42.24-.35 42.24l35.9-5.63 12-430.79z"
        fill="#474463"
      />
      <path
        d="M567.05 284.65l-3.5 23.23s-7.63 9.5-6.63 14.78 9.8 238.62 9.8 238.62 17.25 98.54 11.26 111.21-.35 42.24-.35 42.24l35.9-5.63 12-430.79z"
        opacity={0.1}
      />
      <path
        d="M646.24 720.71c-1.14 1.89-1.05 7.45-.73 12.18.28 4.07.73 7.53.73 7.53v23.93s-38.36-13.37-59.48-27.45c-8.71-5.81-11.19-11.21-10.71-15.53.7-6.15 7.4-10.16 10.71-10.16 3.16 0 13.14-5.51 21.32-10.38 6.43-3.81 11.77-7.22 11.77-7.22s28.5 23.58 26.39 27.1z"
        fill="#575988"
      />
      <path
        d="M646.24 720.71c-1.14 1.89-1.05 7.45-.73 12.18-8.53-4-34.94-29.62-37.43-32.06 6.43-3.81 11.77-7.22 11.77-7.22s28.5 23.58 26.39 27.1z"
        opacity={0.1}
      />
      <path
        d="M725.08 300.84l-9.15 33.79s-5.28 10.2-6 15.13-5.63 12.32-5.63 12.32a39 39 0 00-3.52 15.48c-.35 9.51-7 53.5-14.43 60.89l-1.76 28.51s-7 4.92-2.11 12 3.17 25.34 3.17 25.34-6.69 5.28-2.46 10.56 1.4 20.77 1.4 20.77-3.87 4.92-2.11 7.74-1.74 75.32-1.74 75.32l-8.46 35.54s-3.88 29.57-6 38.37-2.11 19.7-2.11 19.7-9.15 19.36-15.84 18.31-39.06-32.74-39.06-32.74l4.57-107s3.87-45.4 1.41-54.2-4.22-52.79-4.22-52.79l-4.93-69.33-49.22-77.43s-3.57-22.53 6.63-29.21l1.85-12.17 1.67-11.06 58.43-6.34 89.39-23.22s6.89 4.25 10.5 14.86c2.47 7.15 3.42 17.23-.27 30.86z"
        fill="#474463"
      />
      <path
        d="M569.55 336.44s-41.53 51-39.77 36.75c1.1-8.95-4.58-19.88-9-26.79-2.61-4.11-4.77-6.8-4.77-6.8s25.34-46.45 26.75-40.12c.45 2 3.38 6.59 7.15 11.83 7.95 10.98 19.64 25.13 19.64 25.13z"
        fill="#ffc1c8"
      />
      <path
        d="M646.24 759.37v5s-38.36-13.37-59.48-27.45c-8.71-5.81-11.19-11.21-10.71-15.53 11.66 5.9 33.35 17.15 39.92 22.22 5.58 4.3 20 11.11 30.27 15.76z"
        fill="#fff"
        opacity={0.3}
      />
      <circle cx={637.21} cy={766.63} r={11.73} fill="#474463" />
      <circle cx={517.39} cy={750.16} r={11.73} fill="#474463" />
      <path
        d="M691.39 754.33a6.19 6.19 0 01-.69 2.39l-7 7.63-97.84-1.57-26.31-.43s-55.38-10.08-66.17-14.78-53.21-13.3-53.21-13.3-25.62-4.3-29.38-16.73c-1.27-4.21-.63-7.22.76-9.36 2.73-4.19 8.39-5.07 8.39-5.07a55.3 55.3 0 0135.2 1.3l164 42.19 2.54.65s58.46-1.09 59.64-.88c8.97 1.64 10.28 5.45 10.07 7.96z"
        fill={color}
      />
      <path
        d="M691.39 754.33c-9.84-1.28-27-3.17-31.42-1.35 0 0-31.21-3.86-74.15 9.8l-26.27-.43s-55.38-10.08-66.17-14.78-53.21-13.3-53.21-13.3-25.62-4.3-29.38-16.73c-1.27-4.21-.63-7.22.76-9.36 1.75 5.1 5.12 12.49 10.5 14.56 8.45 3.25 43.18 9.87 43.18 9.87l68.74 16.83s39.69 8.61 55.14 3c6.33-2.28 18.21-4.31 30-5.9l2.54.65s58.46-1.09 59.64-.88c9 1.7 10.31 5.51 10.1 8.02z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        d="M596.46 741.66a32.49 32.49 0 01-.55 4.39s-38.88 1.39-59.12-1.61c-5.59-.83-8.75-2.62-10.32-4.76a7.31 7.31 0 01-.73-7 11 11 0 01.85-1.88c1.51-2.64 3.83-4.51 5.1-4.26 3.52.71 9.56-6.51 9.56-6.51-.48-4.41 6.45-6 7.53-5.28a1.41 1.41 0 002.25-.88c.07-.33.09-1.92.09-3.78 0-3.1-.09-7-.09-7l39.08 4.75 1.55 7.47c1.42 6.66 3.4 15.81 4.25 18.94a22.6 22.6 0 01.55 7.41z"
        fill="#474463"
      />
      <path
        d="M596.46 741.66a32.49 32.49 0 01-.55 4.39s-38.88 1.39-59.12-1.61c-5.59-.83-8.75-2.62-10.32-4.76 5.19-.31 11.94-.48 16.12.54 5.96 1.48 41.61 1.48 53.87 1.44z"
        opacity={0.1}
      />
      <path
        d="M526.55 730.78a2 2 0 01-.85 1.88c-4.92 3.8-28.53-.33-28.53-.33s-48.24-3-55.45-7.92a5.09 5.09 0 01-1.59-1.67c-3-5.42 7.86-14.52 8.8-14.52s13.91-1.77 14.78-1.94c6-1.21 12-4.93 13-3.87s6-1.41 8.44-1.76c.89-.13 1.3-1.39 1.45-3a33.34 33.34 0 00-.22-6.53l38.53 10.37.34 6.14 1.11 20.44.14 2.51a.91.91 0 01.05.2z"
        fill="#474463"
      />
      <path
        d="M497.21 732.33s-48.24-3-55.45-7.92a5.09 5.09 0 01-1.59-1.67c9.77.8 26.06 2.15 29 2.9 4.23 1 28 2.46 28 2.46h29.23l.14 2.51c1.27 7.08-29.33 1.72-29.33 1.72z"
        opacity={0.1}
      />
      <circle cx={458.65} cy={750.16} r={11.73} fill="#474463" />
      <circle cx={586.05} cy={774.51} r={11.73} fill="#474463" />
      <path
        d="M466.75 351.17s-2.22 4-5.56 9.94c-8 14.12-22.39 39.15-28.58 47.07-8.8 11.26-8.09.71-17.6-22.87-7.06-17.54 14.67-37.61 26.29-46.73 4-3.17 6.8-5 6.8-5z"
        fill="#f8bdc5"
      />
      <path
        d="M509.33 378.27s-29.21 2.46-34.84 4.22-29.91.7-32 0-43.65 8.8-24.64 18.3 31 0 31 0 24.64-1.41 31 2.47 29.56 1.76 29.56 1.76z"
        fill="#ffc1c8"
      />
      <path
        d="M448.65 162.88c3.6 9.21 1.35 17.23-2.89 25.46-10.62 2-20.61 4.75-26.17 8.32-15.84 10.21-3.87-79.54-3.87-79.54s7.66 0 17.37-.39c-2.94 13.42 8.2 27.35 15.56 46.15z"
        opacity={0.1}
      />
      <path
        d="M449.55 160.88a60 60 0 11-6-26.23 60 60 0 016 26.23z"
        fill="#f8bdc5"
      />
      <path
        d="M725.37 269.95a13.74 13.74 0 01-8 5.55c-13.73 3.87-110.52 27.1-116.85 25.69-5.59-1.24-29.58-4.69-35.11-5.48l1.67-11.06 58.43-6.34 89.39-23.22s6.86 4.25 10.47 14.86zM487.16 183.29a337.35 337.35 0 00-34.15 3.8 2.35 2.35 0 00-.06-1.57l23.4-2.89s-3.42-55-16-68.18c4.72-.76 8.55-1.72 10.63-3 9.5-5.59 16.18 71.84 16.18 71.84z"
        opacity={0.1}
      />
      <path
        d="M456.55 100.69s20.77-1.87 23.58-5.39 22.88-4.57 22.88-4.57 9.85-1.76 12-4.23 55.6-5.63 60.88-2.81 10.21 4.57 13.38 4.93 27.8 17.94 30.26 17.94 70 63.71 70 63.71 7 16.19 9.86 16.89 28.16 64.76 28.16 64.76 3.52 15.48-10.2 19.36-110.52 27.1-116.85 25.69-36.25-5.63-36.25-5.63.35 0-.35-3.87-1.76-2.82-.36-6.34 2.82-3.17 1.06-5.28 0-3.17-5.63-6.69-12-7.39-12.32-8.44-5.28-8.1-7.74-8.45-71.45-19.71-71.45-19.71l-16.19-5.28s-7.74-5.28-6-8.44 7.73-31.75 7.73-31.75l24.75-3.05s-3.69-59.6-17.55-69.6-3.65-13.75-3.65-13.75z"
        fill={color}
      />
      <path
        d="M466.75 351.17s-2.22 4-5.56 9.94c-.52-18.36-13.36-21.92-19.89-22.53 4-3.17 6.8-5 6.8-5z"
        opacity={0.1}
      />
      <path
        d="M449.55 217.78l1.7 9.5s6.69 8.1 6.69 10.56 7.74 9.5 9.86 13.37 9.5 4.58 6.68 11.27-19 57.72-19 57.72l-16.54 18.3s27.45-2.47 23.22 30.26l35.55-31 27.84-50.65s-27.1-51.38-28.15-55.6-47.85-13.73-47.85-13.73z"
        fill={color}
      />
      <path
        d="M531.86 235.38s22.52-15.84 22.52-17.6-22.52 17.6-22.52 17.6zM569.55 255.09s12-2.82 13-9.15-13 9.15-13 9.15zM579.37 271.28s16.9-8.37 16.19-9.82-16.19 9.82-16.19 9.82zM669.82 217.67s-7 4.57-4.92 8.85 4.92-8.85 4.92-8.85zM690.55 219.54s-19.94 19-15.43 19.36 15.43-19.36 15.43-19.36zM645.19 514.12s25.69 4.93 26.39 6.69-26.39-6.69-26.39-6.69zM654.34 531.01s13.72 8.45 14.07 10.91-14.07-10.91-14.07-10.91zM651.17 550.02s2.11 9.5 5.63 10.91-5.63-10.91-5.63-10.91zM443.61 134.34c0 .1 0 .21-.05.31-.48 3.13-1.76 6.52-4.7 7.56a7.48 7.48 0 01-5.33-.49c-5-2.19-9.45-7.45-14.79-6.18-2.54.6-4.32 2.53-5.58 4.9a24.6 24.6 0 00-2 5.37c-1 3.92-1.8 8.18-.27 11.91a12.14 12.14 0 00.9 1.76c1.42 2.27 3.42 4.2 4.82 6.49 1.74 2.86 2.19 7.15-.52 9.11a5.49 5.49 0 01-4.66.65 27.72 27.72 0 01-5.69-2.52c-3.54-1.85-8-3-11.36-.86-1.16.72-2.09 1.76-3.2 2.52a11.54 11.54 0 01-7.73 1.61c-6.36-.65-8.74-4.68-13.6-7.8-3.56-2.3-11-3.28-13.12 1.42-1.36 3 .66 6.78-.67 9.84s-5.56 4-7.52 6.84c-2.58 3.74-.18 9.15-2.07 13.3a6.78 6.78 0 01-1.15 1.76 60.18 60.18 0 0185.1-85l2.7-.1c2.63-.1 5.42-.24 8.23-.41a22.91 22.91 0 011.55 4.39 36.6 36.6 0 01.71 13.62z"
        opacity={0.1}
      />
      <path
        d="M355.3 168.7c-1.37 3 .65 6.78-.67 9.83s-5.58 4-7.52 6.84c-2.59 3.75-.19 9.16-2.07 13.3-2.16 4.73-8.68 5.47-13.68 4.09a28 28 0 01-18.66-17.45c-3.39-9.65-1.2-20.27-2.08-30.46a50.53 50.53 0 00-2.8-12.79c-1.45-4-3.43-7.94-3.9-12.19a18.12 18.12 0 019.78-17.81c4.12-2 9.19-2.57 12.19-6 2.3-2.66 2.79-6.37 3.86-9.72 2.89-9 11.52-16.34 21-16.25 7.58.06 15 4.53 22.41 2.77 4.19-1 8-4 12.32-3.57a15.63 15.63 0 015.83 2.17 227.2 227.2 0 0132.71 21.5 36.82 36.82 0 006.93 4.71 43 43 0 014.67 2.15c3.23 2 4.92 5.81 5.84 9.51a36.33 36.33 0 01.74 13.62c-.44 3.21-1.7 6.81-4.75 7.88a7.47 7.47 0 01-5.34-.51c-5-2.17-9.44-7.43-14.78-6.17-4.36 1-6.46 5.94-7.6 10.27-1 3.92-1.82 8.18-.27 11.92 1.28 3.1 4 5.37 5.71 8.24s2.2 7.16-.52 9.11c-3 2.17-7.07-.14-10.36-1.86-3.52-1.85-8-3-11.35-.87-1.15.72-2.08 1.76-3.2 2.53a11.64 11.64 0 01-7.72 1.6c-6.37-.65-8.75-4.68-13.6-7.8-3.57-2.32-10.99-3.3-13.12 1.41z"
        fill="#474463"
      />
      <path
        d="M549.92 311.26c-.27 1.5-2.33 1.67-2.75 3.13-4 14.11-12.8 26.8-26.38 32-2.61-4.11-4.77-6.8-4.77-6.8s25.34-46.45 26.75-40.12c.45 1.97 3.38 6.55 7.15 11.79z"
        opacity={0.1}
      />
      <path
        d="M550.67 301.54a46.46 46.46 0 11-46.46-46.45 46.29 46.29 0 0146.46 46.45z"
        fill="#ffc1c8"
      />
      <path
        d="M524.99 701.52l.34 6.14c-4.07.9-11.81 2.08-16.32-.68-5.83-3.57-14.44-4.44-22.33-9.3a33.34 33.34 0 00-.22-6.53zM591.66 715.33c-.27 1.37-.52 2.21-.52 2.21s-31.05-3.18-40-7.47c0-3.1-.09-7-.09-7l39.08 4.75z"
        opacity={0.1}
      />
      <path
        d="M584.65 575.71c-2.11 5.63-3.17 6.69-1.05 9.5s1.05 17.6-2.31 19-16 9.85-16 9.85 7 9.15 7.21 13a11.78 11.78 0 002.72 6.69s10.84 23.23 13 30.62 4.14 19 4.14 19-3.79 10.56-1.17 16.55 0 14.78 0 14.78-37.81-3.87-42-8.84-1.4-16.15-1.4-16.15a40.43 40.43 0 00-5.28-14.08c-4.23-6.69 1-13.72 0-14.08s-4.23-4.22-7.41-10.55-5.16-3.88-5.16-3.88 4.12 35.55 0 38.72-4.68 1.76-3.62 6a108.8 108.8 0 011.76 12.32s-12.67 3.87-19 0-15.86-4.58-24.23-10.56 3.79-16.19 5.9-17.6-.7-21.82-.7-21.82l-2.82-20.06s9.5 2.11 6.38-5.63-6.73-34.49-8.49-38.71 6-9.86 4.93-12.67 4.57-19 4.57-19 .36-13.37 3.87-15.88c1.34-.94 2.21-3.86 2.79-7.09a88.11 88.11 0 001.09-11.52s80.59-5.63 93.61 2.11c5.86 3.48 5.45 9.89 3 16.38-3 7.92-9.16 16-10.71 18.93-2.91 5.4-1.51 9.04-3.62 14.67z"
        fill="#575988"
      />
      <path
        d="M598.88 542.11c-10 2.81-23.32 6.94-25.49 9.31-3.52 3.88-15.49-21.82-15.49-21.82s.71 19.32-15.13 11.24c-13.71-7-35.84-6.08-41.56-5.7a88.11 88.11 0 001.09-11.52s80.59-5.63 93.61 2.11c5.86 3.48 5.45 9.89 2.97 16.38z"
        opacity={0.1}
      />
      <path
        d="M557.9 329.35s7-8.45 8.45-5.28 9.71 9.5 9.71 9.5 2.37 7.39 6.54 8.45 35.49 43.29 35.49 43.29l-11.27 22.87-9.15 55.61s.4 8.8-2.09 12-12 2.46-7.59 6.33 10.74 7.39 14.26 25 7.74 27.8 7.74 27.8-33.08 8.45-36.6 12.32-15.49-21.82-15.49-21.82.71 19.31-15.13 11.24-42.94-5.61-42.94-5.61v-20.8s5.28-8.1 2.47-13.73 1.92-16.19 1.92-16.19-1.57-10.91-4.39-17.24-1.76-36.25-1.76-36.25-2.14-19.36-.19-29.22a87.4 87.4 0 018.67-24.48c3.87-7.54 6.32-14.58 5.27-17.4s9.29-8.92 9.29-8.92l5.73 9.27 1.46 5.54s30.31-21.72 29.6-32.28z"
        fill="#dce6f2"
      />
      <path
        d="M608.55 378.27s19.71 19.35 21.82 22.52 9.18 19.65.03 24.65-45 12.71-48.56 10.05-25 3-25 3-35.86 8.8-28.12-5.63 26.05-12 26.05-12 29.58-.05 32.74-3 27-9.28 21.6-22.32-.56-17.27-.56-17.27z"
        fill="#ffc1c8"
      />
      <path
        d="M550.67 464.85s-45.91 39.77-41.34 39.77 41.34-39.77 41.34-39.77zM581.29 481.04s-14.59 3.51-11.77 5.63 11.77-5.63 11.77-5.63zM529.84 384.6s18.21 1.63 15 7.33-15-7.33-15-7.33zM518.49 555.53s-2.47 7.16 0 11 0 13 0 13v32s-.34 23.23 8.09 31.32zM494.38 655.25s4.92 7.21 5.63 9.85-5.63-9.85-5.63-9.85zM495.61 640.82s11.44-2.11 13.2-.88-13.2.88-13.2.88zM492.27 683.93s-3.35.35 3.34 4 19.71 8.27 19.88 6.69-23.22-10.69-23.22-10.69zM541.24 648.91c1.18 0 15.91-.88 15.06 1.41s-15.06-1.41-15.06-1.41zM561.25 628.32s3.34-5.8 4.57-3.34-4.57 3.34-4.57 3.34zM550.67 301.54a46.29 46.29 0 01-1.78 12.77c-1.94 1.76-5.29 1.78-7.68.47-2.8-1.54-4.63-4.34-6.45-7s-3.89-5.32-6.87-6.46c-3.77-1.42-8.07 0-11.35 2.36s-5.9 5.48-9 8-7.05 4.56-11 3.94c-2.55-.39-4.81-1.83-7-3.22-3-1.89-6.22-4.83-9.51-6.1s-6 1-9.13 1c-2.49.9-5.2 2.95-4.7 5.54a8.59 8.59 0 001.28 2.68 11.25 11.25 0 01-1.47 12.39 46.46 46.46 0 1184.67-26.43z"
        opacity={0.1}
      />
      <path
        d="M470.89 305.95c-2.49.9-5.2 2.95-4.71 5.55a8.91 8.91 0 001.29 2.67c2.92 5.21.45 12.69-5 15.11a4.43 4.43 0 01-2.78.44 4.92 4.92 0 01-2-1.2 18.51 18.51 0 01-5.77-9.95c-.86-4-.33-8.24-.77-12.35s-1.85-8.16-2.34-12.3a11.41 11.41 0 01.63-6.08 14.14 14.14 0 012.52-3.46c2.81-3.13 5.74-6.33 7.15-10.3 2.23-6.32.61-14.37 5.49-19 2.26-2.12 5.42-2.91 8.22-4.25a57.9 57.9 0 007.55-4.79c9.05-6.22 20.05-11 30.81-8.8a43.82 43.82 0 0112.21 5 137.27 137.27 0 0120 13.44 31.12 31.12 0 017 7.19 24.94 24.94 0 013.06 7.65 43.84 43.84 0 01.58 18c-1 5.86-3.27 11.55-3.36 17.5 0 2 .16 4.16-.87 5.88-1.65 2.74-5.74 3-8.54 1.48s-4.63-4.34-6.44-7-3.89-5.32-6.87-6.45c-3.77-1.43-8.07 0-11.35 2.35s-5.89 5.48-9 8-7 4.56-11 3.94c-2.55-.39-4.81-1.82-7-3.21-3-1.9-6.22-4.84-9.5-6.1s-6.09 1.04-9.21 1.04z"
        fill="#794f6a"
      />
      <path
        d="M577.61 378.27s-51.73 47.86-41.18 71.79 57-18.3 57-18.3l16.56-38.32z"
        fill="#f8bdc5"
      />
      <g opacity={0.1}>
        <path d="M462.45 326.44a4.4 4.4 0 01-2.77.44 4.78 4.78 0 01-2-1.21 18.54 18.54 0 01-5.78-9.94c-.85-4.05-.32-8.25-.76-12.36s-1.86-8.15-2.34-12.3c0-.2 0-.41-.05-.62a15.83 15.83 0 00.05 3.44c.48 4.14 1.9 8.14 2.34 12.3s-.09 8.31.76 12.35a18.53 18.53 0 005.78 9.95 4.86 4.86 0 002 1.2 4.4 4.4 0 002.77-.44c4.3-1.91 6.73-6.94 6.16-11.54a11.09 11.09 0 01-6.16 8.73zM553.96 285.69c-1 5.86-3.27 11.55-3.35 17.5 0 2 .16 4.16-.88 5.88-1.64 2.74-5.73 3-8.53 1.48s-4.63-4.33-6.45-7-3.88-5.32-6.87-6.45c-3.76-1.42-8.06 0-11.34 2.36s-5.9 5.47-9 8-7.05 4.56-11 3.95c-2.55-.4-4.81-1.83-7-3.22-3-1.9-6.22-4.83-9.5-6.1s-6 1-9.13 1c-2.49.91-5.2 2.95-4.72 5.56a4.14 4.14 0 00.27.82 7.78 7.78 0 014.45-3.56c3.12 0 5.88-2.24 9.13-1s6.53 4.2 9.5 6.1c2.17 1.39 4.43 2.82 7 3.21 4 .62 7.92-1.39 11-3.94s5.73-5.7 9-8 7.58-3.78 11.34-2.35c3 1.13 5.06 3.82 6.87 6.45s3.65 5.42 6.45 7 6.89 1.26 8.53-1.48c1-1.72.85-3.87.88-5.88.08-5.95 2.32-11.64 3.35-17.5a44.25 44.25 0 00.64-9.12 44.39 44.39 0 01-.64 6.29z" />
      </g>
      <path
        d="M515.67 134.72s-19 34.49 7 52.09 28.51 15.84 28.51 15.84-.36 4.22 0 5.28 7 3.51 7 3.51 8.09 13 19.7 18.66 13.73 19 13.73 19 0 4.58 6 8.8 10.62 16.54 10.62 16.54v11.27c0 1.76 2.11 7-2.46 7.56s-.71 11.09-.71 11.09-4.92 6-3.87 8.8-2.11 8.44-2.11 8.44-3.87 5.63-3.52 6.69-4.22 4.93-3.17 7.39-5.27 5.63-4.22 8.45-4.5 4.22-4.5 4.22l-15.21 35.2s32 7 40.26 24.63l40.34-73.91s22.52-55.25 23.23-58.77-4.93-16.19-4.93-16.19l-27.45-50-41.18-58.07S566 81.58 515.67 134.72z"
        opacity={0.1}
      />
      <path
        d="M556.3 149.27s-49.44 17.35-23.4 34.95 28.51 15.83 28.51 15.83-.35 4.23 0 5.28 7 3.52 7 3.52 8.1 13 19.71 18.66 13.73 19 13.73 19 0 4.58 6 8.8 10.56 16.54 10.56 16.54v11.26c0 1.76 2.11 7-2.47 7.57s-.7 11.09-.7 11.09-4.93 6-3.87 8.79-2.11 8.45-2.11 8.45-3.87 5.63-3.52 6.69-4.23 4.93-3.17 7.39-5.28 5.63-4.22 8.45-4.51 4.22-4.51 4.22l-15.2 35.19s26.36 1.36 34.68 19l45.91-68.23s22.53-55.25 23.23-58.77-4.91-16.23-4.91-16.23l-27.45-50-62.62-36.12s19.15-74.48-31.18-21.33z"
        opacity={0.1}
      />
      <path
        d="M518.49 134.72s-19 34.49 7 52.09S554 202.65 554 202.65s-.35 4.22 0 5.28 7 3.51 7 3.51 8.1 13 19.71 18.66 13.73 19 13.73 19 0 4.58 6 8.8 10.61 16.54 10.61 16.54v11.27c0 1.76 2.11 7-2.47 7.56s-.7 11.09-.7 11.09-4.93 6-3.87 8.8-2.11 8.44-2.11 8.44-3.87 5.63-3.52 6.69-4.23 4.93-3.17 7.39-5.28 5.63-4.22 8.45-4.51 4.22-4.51 4.22l-15.2 35.2s31.94 7 40.25 24.63l40.34-73.91s22.53-55.25 23.23-58.77-4.93-16.19-4.93-16.19l-27.45-50-41.17-58.05s-32.74-69.68-83.06-16.54z"
        fill={color}
      />
      <g opacity={0.1}>
        <path d="M310.62 152.04a50.18 50.18 0 00-2.8-12.8c-1.45-4-3.43-7.94-3.9-12.19v-.38a16.3 16.3 0 000 3.2c.47 4.25 2.45 8.16 3.9 12.19a50.1 50.1 0 012.8 12.79c.14 1.64.2 3.3.22 5 .03-2.65 0-5.24-.22-7.81zM345.04 195.86c-2.15 4.72-8.68 5.47-13.68 4.08a28.06 28.06 0 01-18.66-17.44 41.3 41.3 0 01-2-13.31c-.06 5.51.15 10.95 2 16.12a28.07 28.07 0 0018.66 17.45c5 1.38 11.53.64 13.68-4.09.91-2 .82-4.32.78-6.6a10.31 10.31 0 01-.78 3.79zM442.2 130.12c-.43 3.2-1.7 6.8-4.75 7.87a7.48 7.48 0 01-5.33-.5c-5-2.18-9.45-7.44-14.79-6.17-4.36 1-6.45 5.93-7.6 10.27a25.29 25.29 0 00-1.07 8.47 33 33 0 011.07-5.66c1.15-4.33 3.24-9.23 7.6-10.27 5.34-1.26 9.75 4 14.79 6.17a7.44 7.44 0 005.33.51c3.05-1.07 4.32-4.67 4.75-7.88a36.35 36.35 0 00.3-6.17c-.05 1.12-.15 2.25-.3 3.36zM414.65 170.86c-3 2.17-7.07-.14-10.36-1.87-3.52-1.85-8-3-11.35-.87-1.15.72-2.08 1.76-3.2 2.53a11.51 11.51 0 01-7.72 1.6c-6.37-.65-8.75-4.68-13.6-7.8-3.56-2.29-11-3.27-13.12 1.43a8.53 8.53 0 00-.41 4.33 5.63 5.63 0 01.41-1.51c2.13-4.71 9.56-3.73 13.12-1.43 4.85 3.12 7.23 7.15 13.6 7.8a11.57 11.57 0 007.72-1.61c1.12-.76 2.05-1.8 3.2-2.52 3.38-2.1 7.83-1 11.35.87 3.29 1.72 7.34 4 10.36 1.86 1.76-1.26 2.18-3.5 1.79-5.71a4.62 4.62 0 01-1.79 2.9zM354.63 175.72c-1.37 3.14-5.58 4-7.52 6.83-1.45 2.1-1.33 4.72-1.28 7.35a8.32 8.32 0 011.28-4.53c1.94-2.83 6.15-3.7 7.52-6.84a8.7 8.7 0 00.38-4.26 5.64 5.64 0 01-.38 1.45z" />
      </g>
    </svg>
  );
};

SvgFatherhood.propTypes = {
  color: PropTypes.string
};
SvgFatherhood.defaultProps = {
  color: "primary"
};
const MemoSvgFatherhood = React.memo(SvgFatherhood);
export default MemoSvgFatherhood;
