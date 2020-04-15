import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWomenDay = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 897.41 783"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="WomenDay_svg__a"
          x1={690.9}
          y1={297}
          x2={760.75}
          y2={297}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.77} stopColor="#fff" stopOpacity={0.15} />
        </linearGradient>
        <linearGradient
          id="WomenDay_svg__b"
          x1={605.57}
          y1={129.72}
          x2={675.42}
          y2={129.72}
          xlinkHref="#WomenDay_svg__a"
        />
      </defs>
      <path
        d="M897.41 9.17v255.54c-9.71 2.09-19.76 5.15-26.5 12.43-9.12 9.83-9.81 24.57-10 38l-2.16 155.44c-.17 11.89-.44 24.24-5.74 34.89-7.89 15.86-25.16 24.65-36.24 38.47-18.88 23.54-16.93 57.4-10.16 86.81s17.46 59.15 12.83 89c-3.87 24.94-17.82 46-36.42 63.3H23.84C9.08 767.11-2.09 748.71.33 727.86c2.76-23.81 22.94-42.39 27.76-65.87 5.62-27.35-10.47-53.94-16-81.29-7.44-36.53 4.09-74 15.49-109.45 4.38-13.65 9-27.69 18.27-38.62 11.3-13.28 28.91-21.17 36.78-36.73 10.89-21.54-1.28-48.55 6.57-71.38 8.56-24.9 37-36 62.44-42.86a886.87 886.87 0 01134.32-25.35c13.55-1.49 27.77-2.88 39.13-10.43 9.12-6.07 15.4-15.49 21-24.93 25.69-43.98 47.32-99.61 96.55-112.45 33.41-8.72 68.9 6.34 103.06 1.28C608.15 100.5 642.05 30.98 696.76 0h165.88q17.43 4.38 34.77 9.17z"
        fill={color}
      />
      <path
        d="M897.41 9.17v255.54c-9.71 2.09-19.76 5.15-26.5 12.43-9.12 9.83-9.81 24.57-10 38l-2.16 155.44c-.17 11.89-.44 24.24-5.74 34.89-7.89 15.86-25.16 24.65-36.24 38.47-18.88 23.54-16.93 57.4-10.16 86.81s17.46 59.15 12.83 89c-3.87 24.94-17.82 46-36.42 63.3H23.84C9.08 767.11-2.09 748.71.33 727.86c2.76-23.81 22.94-42.39 27.76-65.87 5.62-27.35-10.47-53.94-16-81.29-7.44-36.53 4.09-74 15.49-109.45 4.38-13.65 9-27.69 18.27-38.62 11.3-13.28 28.91-21.17 36.78-36.73 10.89-21.54-1.28-48.55 6.57-71.38 8.56-24.9 37-36 62.44-42.86a886.87 886.87 0 01134.32-25.35c13.55-1.49 27.77-2.88 39.13-10.43 9.12-6.07 15.4-15.49 21-24.93 25.69-43.98 47.32-99.61 96.55-112.45 33.41-8.72 68.9 6.34 103.06 1.28C608.15 100.5 642.05 30.98 696.76 0h165.88q17.43 4.38 34.77 9.17z"
        opacity={0.7}
      />
      <path
        d="M126.41 527.86a16.85 16.85 0 00.07 6.8c1.7 6.13 8.86 8.74 15.13 9.79 8.85 1.48 18.32 1.61 26.36-2.38a55.74 55.74 0 008.85-5.9l11.3-8.62a15.76 15.76 0 004.69-4.77 12.82 12.82 0 001.24-5.23 34.39 34.39 0 00-33.52-36.61 8.93 8.93 0 00-3.66.49 11.82 11.82 0 00-3.45 2.71c-6.12 5.94-14.07 7-18 14.83a92.28 92.28 0 00-9.01 28.89z"
        fill="#ffc095"
      />
      <path
        d="M170.84 304.65c-7.16 4.14-12.94 10.31-18 16.85-3.84 5-7.42 10.37-8.52 16.54-1.6 9 1.89 19.67-4.19 26.48-2.74 3.06-6.94 4.57-9.51 7.79-1.84 2.3-2.64 5.24-3.39 8.09-1.43 5.4-2.88 10.92-2.5 16.49.52 7.64 4.43 14.71 5.22 22.33.94 9-2.55 17.9-6 26.32l-6.77 16.66c6.19-2.18 13-1.25 19.51-.86 23.09 1.38 46.77-4.26 69.14 1.65 2.68.71 5.32 1.58 8 2.18 14.26 3.17 29-1.28 42.9-5.69 2-.62 4.37-1.87 4.11-3.92a4.57 4.57 0 00-1.12-2.13c-10.49-13.48-19.05-30-16.8-47 2-14.78 12-28.63 9.37-43.3-1.52-8.45-7-15.52-11.17-23.05-2.55-4.66-4.61-9.6-7.57-14s-6.87-8.33-10.7-12.14-7.86-7.8-12.56-10.66c-10.58-6.45-28.88-4.72-39.45 1.37z"
        fill="#d67820"
      />
      <path
        d="M178.67 426.38a15.46 15.46 0 01-1.33 6.62c-1.28 2.38-3.7 3.9-6 5.3q-16.55 10.05-33.3 19.78c6.55 16.87 13.29 34.07 24.88 48 22 26.37 59.34 36.81 93.34 31.92 5.11-.74 10.48-1.94 14.15-5.56 3-2.92 4.39-7 5.45-11a90.49 90.49 0 001.16-40.95c-2-9.58-6-19.5-14.31-24.66a45.07 45.07 0 00-10-4.16l-28.26-9.18c-1.39-.45-2.91-1-3.59-2.31a5.68 5.68 0 01-.3-3.17l2.18-22.8c.46-4.78.79-10.06-2.06-13.92-2.37-3.22-6.42-4.68-10.27-5.73-5.87-1.6-25.17-7.45-29.69-1.93-2.33 2.86-1 13.34-1.19 17z"
        fill="#ffc095"
      />
      <path
        d="M258.41 451.5c10.9 2.63 22.79 6.85 27.85 16.86 3 6 3 12.92 2.94 19.59l-1 102.25-27.62 1.13a394.87 394.87 0 006-54.39 133.25 133.25 0 00-.61-22.89c-2.19-16.53-9.5-31.78-18.17-45.84-2-3.21-12.66-15-11-18.8 2.02-4.47 17.45 1.09 21.61 2.09z"
        fill="#ffc095"
      />
      <path
        d="M279.86 503.89c1.88 3.78 2.74 8 3.59 12.1.91 4.42 1.82 8.9 1.59 13.41a53.52 53.52 0 01-1.55 9.19l-3 13.31c-1.22 5.32-2.52 10.82-5.84 15.14a2.71 2.71 0 01-1.29 1.07 2.49 2.49 0 01-1.44-.12c-3.3-1.07-5.67-4.11-6.8-7.39s-1.18-6.82-1.16-10.3c.07-14.71 1.27-29.46-.08-44.14-.38-4.14-3.86-14.53 3.12-14.07 5.09.32 10.83 7.7 12.86 11.8z"
        opacity={0.05}
      />
      <path
        d="M281.84 687.05c0 .48 0 1-.07 1.45 0 1.23-.1 2.46-.15 3.72-1.08 28.1-.87 63.48-9.61 90.72H138.84c-.43-1.34-.79-2.71-1.15-4.06-5.59-21.12-11.22-42.76-9.4-64.53a53.24 53.24 0 011.26-8.55c0-.16.08-.32.13-.48a17.09 17.09 0 011.7-4.25 9.34 9.34 0 01.77-1.16c.16-.2.33-.4.5-.58a6.46 6.46 0 011.86-1.4c3.48-1.7 12.72.56 17.91 1.4.69.11 1.31.19 1.84.24l14.47 1.29 3.73.33 28.38 2.53 3.81.34c8.91.77 17.85 1.4 26.78.81 17.91-1.19 32.37-18.2 50.3-17.87z"
        fill="#0e0d15"
      />
      <path
        d="M138.28 570.31c.86 2.72.77 5.64 1 8.48.79 9.16 5.07 17.67 6.52 26.75 2.28 14.28-2.56 28.62-7 42.39s-8.46 27.79-8 42.16c.32 9 2.68 18.31 8.9 24.78 8.75 9.11 22.63 10.42 35.25 11.17l45.52 2.71c8.91.53 17.9 1.06 26.71-.35s17.55-4.94 23.68-11.42a39.43 39.43 0 008.08-13.62 42.18 42.18 0 002.76-14.22c0-5.76-1.38-11.41-2.54-17.05-5-24.48-5.27-49.66-5.5-74.65-.1-11.5-.2-23.11 2.31-34.33 1.3-5.81 3.28-11.46 4.63-17.26 4.47-19.23.76-41.69-14.31-54.45-1.3-1.1-3-2.18-4.6-1.54-1.18.47-1.81 1.72-2.4 2.85a41.82 41.82 0 01-27.8 21.28c-6.31 1.38-12.86 1.25-19.3.77-8.42-.62-16.92-1.87-24.65-5.25s-14.71-9.12-18.17-16.82c-8.65 6.34-7.56 19.5-12.43 29.05-3.14 6.15-8.69 10.55-14.51 14-4.52 2.69-13.93 4.34-17 8.7-6.34 9.15 10.41 18.13 12.85 25.87z"
        opacity={0.05}
      />
      <path
        d="M138.28 567.81c.86 2.72.77 5.64 1 8.48.79 9.16 5.07 17.67 6.52 26.75 2.28 14.28-2.56 28.62-7 42.39s-8.46 27.79-8 42.16c.32 9 2.68 18.31 8.9 24.78 8.84 9.13 22.71 10.43 35.33 11.13l45.52 2.71c8.91.53 17.9 1.06 26.71-.35s17.55-4.94 23.68-11.42a39.43 39.43 0 008.08-13.62 42.18 42.18 0 002.76-14.22c0-5.76-1.38-11.41-2.54-17.05-5-24.48-5.27-49.66-5.5-74.65-.1-11.5-.2-23.11 2.31-34.33 1.3-5.81 3.28-11.46 4.63-17.26 4.47-19.23.76-41.69-14.31-54.45-1.3-1.1-3-2.18-4.6-1.54-1.18.47-1.81 1.72-2.4 2.85a41.82 41.82 0 01-27.8 21.33c-6.31 1.38-12.86 1.25-19.3.77-8.42-.62-16.92-1.87-24.65-5.25s-14.71-9.12-18.17-16.82c-8.65 6.34-7.56 19.5-12.43 29.05-3.14 6.15-8.69 10.55-14.51 14-4.52 2.69-13.93 4.34-17 8.7-6.42 9.14 10.33 18.12 12.77 25.86z"
        fill="#252036"
      />
      <path
        d="M250.57 592.79c0-2.67 1.28-5.16 2.6-7.48q2.73-4.77 5.86-9.3a21.25 21.25 0 015.82-6.24c2.43-1.52 5.68-2 8.16-.6a3.84 3.84 0 001.88.8c1 0 1.66-1 2.55-1.38 1.6-.74 3.44.44 4.56 1.81s2 3 3.61 3.79c.58.28 1.23.41 1.82.67 2.05.9 3.14 3.11 4.06 5.16a10.63 10.63 0 011.25 4.39c0 2.68-2 4.87-3.89 6.79l-4.84 5a18.41 18.41 0 01-4.25 3.57 6.22 6.22 0 01-5.36.49 2.36 2.36 0 00-1.43-.37 1.84 1.84 0 00-.92.72 48.47 48.47 0 00-3 4.1 10.48 10.48 0 01-3.31 3.75c-1.48.82-3.71.55-4.38-1a1.93 1.93 0 00-.45-.82c-.61-.48-1.39.3-2.1.6-1.19.51-2.59-.49-3-1.72a7 7 0 01.22-3.82c-.89-.72-2.19-.29-3.34-.23-2.37.13-1.89-1.39-1.83-2.77.15-2.03-.27-3.91-.29-5.91zM180.73 393.8c-1.69 2.06-1.46 8.11-1.28 12.71.55.51 1.1 1 1.67 1.49a50.49 50.49 0 0031 11.68 14.88 14.88 0 006.66-1 12.15 12.15 0 004-3.18v-.12c.46-4.78.79-10.06-2.06-13.92-2.37-3.22-6.42-4.68-10.27-5.73-5.89-1.6-25.2-7.45-29.72-1.93z"
        opacity={0.05}
      />
      <path
        d="M146.64 519.65c-.54 4.72-2.61 9.1-4.65 13.39l-11.82 24.84c-1.88-3.21-3.83-6.73-3.39-10.42a17.23 17.23 0 011.79-5.17l10.33-21.92c.78-1.65 3.43-10.89 5.21-11 2.66-.11 2.72 8.65 2.53 10.28z"
        opacity={0.03}
      />
      <path
        d="M178.33 345.13c-6.08 9.75-7.21 22.13-4.31 33.25 2.17 8.34 6.49 17 3.57 25.14-2.2 6.11-8.33 12.2-5.29 17.94.68 1.28 1.78 2.34 2.18 3.73.68 2.37-.85 4.72-1.91 6.94-5.54 11.56 1.08 24.85 4.32 37.25 2.4 9.18 2.89 18.73 3.37 28.21l-6-15.33a86.69 86.69 0 01-15.69 35.49 46.63 46.63 0 0113 2 12.52 12.52 0 00-5 24.45c-6.14 1.36-12.48-2.82-15.42-8.38s-3.17-12.13-2.82-18.41l-5 .41a83.59 83.59 0 006.21-38c-.41-5.74-2.3-12.52-7.8-14.21l-1.65 15.23-6.68-13.52a5.62 5.62 0 00-2.33-2.86 19.17 19.17 0 00-2.5-.6c-2.63-.81-3.65-4.24-2.83-6.86s2.93-4.61 4.94-6.49c6.8-6.36 13.58-13.14 17.26-21.69 3.42-7.94 3.91-16.79 4.27-25.43q.64-15.19 1-30.4c.17-8 .28-16.06 2-23.86 3-13.21 11-25.48 22.77-32.23s27.13-7.36 38.71-.35c7 4.22 12.17 10.74 17.22 17.12l14.49 18.3c3 3.79 6.06 7.69 7.45 12.31 2.56 8.52-1 17.63-5.34 25.42s-9.55 15.46-10.61 24.29c-1.22 10.21 3.33 20.12 7.77 29.39 5.64 11.78 11.37 23.71 19.86 33.63 4.32 5.05 9.54 9.95 10.76 16.48a7.58 7.58 0 01-6.68 1.47q5.14 20.54 8.24 41.54-18.45-12.17-35.78-25.9a13.82 13.82 0 01-8.67 10.08c-.35-3.88 1-7.7 1.19-11.59s-1.31-8.43-5-9.6c-2.16-.68-4.72-.1-6.55-1.43-1.34-1-1.86-2.7-2.3-4.31l-8.34-30.62a26.55 26.55 0 00-14.5 3.5 27.63 27.63 0 0013-16.19l-17.35-.27q6.87-6.5 13.31-13.43c6.25-6.72 12.22-13.78 16.77-21.75 12.77-22.33 12.95-51.34.45-73.83-2.07-3.73-4.54-7.36-8-9.81-12.51-8.69-32.9 2.79-39.76 13.78zM146.15 668.91l10.82 14.59c4.36 5.88 8.75 11.82 14.25 16.65 11.55 10.17 27 14.74 39.37 24a63.55 63.55 0 0118.42 21.77c2.16 4.2 3.45 10.21-.39 13-3.41 2.44-8.1.28-11.68-1.89l-19.38-11.71c-5.64-3.41-11.38-6.9-15.7-11.88-3.38-3.9-5.75-8.56-8.57-12.89a72.2 72.2 0 00-15.92-17.39c-3.81-3-8-5.63-11.17-9.28-5.13-5.84-7.3-13.67-8.84-21.3-.51-2.54-4.36-18.58-1.39-18.78 1.69-.17 8.67 13.07 10.18 15.11z"
        opacity={0.05}
      />
      <path
        d="M137.77 567.98s43.13 20.63 91.88 2.5h6.88s20.63 11.25 36.25-1.88l1.09 38.4-128-4z"
        opacity={0.1}
      />
      <path
        d="M377.5 292.09c-1.31-.71-2.77-1.44-4.23-1.14-3.44.71-4.42 6.5-7.94 6.34-1.69-.08-2.9-1.6-4.42-2.36s-4.09.21-3.49 1.79c-2.86 2.7-7.2-4.75-10.52-2.65-.74.47-1.15 1.33-1.87 1.82-1.22.84-2.88.42-4.24-.16s-2.81-1.3-4.25-1-2.39 2.46-1.19 3.33l-11.16-.06a6 6 0 00.3 4.81l-8.14.31a7.38 7.38 0 001.16 4.14 16.54 16.54 0 00-12.65 3.38l3.45 2.66a29.2 29.2 0 00-10.11 2.38l1.78 3a8.06 8.06 0 00-8 7.1l3.16 1.19a13.88 13.88 0 00-8.66 7.18l2.43 1.08a17.47 17.47 0 01-9.17 9 8.8 8.8 0 016.53 8.34c-2.66-1.64-6.36.68-7.17 3.69s.39 6.19 1.82 9a9.29 9.29 0 00.63-6.51 6 6 0 011.81 9.09 9.87 9.87 0 00-2 2.14c-1 2 .73 4.16 2.31 5.7-2.51 1.21-5.24 2.65-6.21 5.26-.73 2-.3 4.13.12 6.18s.79 4.25 0 6.16-3.4 3.19-5.09 2a4.44 4.44 0 007.81 3.49c1.05-1.28 2.72-3.34 3.72-2-4.06 3.06-3.92 10.19.27 13.08-1.34-.75-3 .52-3.69 1.87-1.23 2.27-1.35 5.31.32 7.28s5.3 2.08 6.63-.14c-1.4 2.87 2.67 5.7 5.8 5.08s5.68-3 8.77-3.79 7.39 1.3 6.59 4.39a8.1 8.1 0 00-4-.75 2.78 2.78 0 00-2.5 2.74c2.27 1.94 4.82 4 7.81 3.95s5.87-3.53 4.18-6c.87-1.53 3.41-.33 3.94 1.35s.12 3.59.84 5.2a4.15 4.15 0 006.73.76c.78.91 2.24.61 3.38.23 6.81-2.27 14.55-5.49 16.49-12.4.6-2.16.59-4.58 2-6.36a7.73 7.73 0 014-2.45c6.87-2.09 14.27.24 20.81 3.2s13 6.64 20.11 7.4c4.66.5 9.56-.25 13.9 1.51a9.91 9.91 0 003.47 1.11c1.22 0 2.58-.92 2.44-2.13-.09-.76-.7-1.34-1.06-2a3.35 3.35 0 011.68-4.52 5.74 5.74 0 002.17 5.25 4.12 4.12 0 005.39-.53c1.26-1.54.66-4.29-1.22-4.92a7.81 7.81 0 003-10.55c4.81-2.8 5.93-10.32 2.13-14.39a10.77 10.77 0 005.66-12.06c2-.78 4-1.65 5.35-3.32s1.53-4.39-.09-5.76a51.91 51.91 0 003.37-16.62c.06-1.64-.53-3.85-2.16-3.76 1.38-2.33 2.75-5.33 1.24-7.58-.59-.87-1.54-1.47-2-2.4-1.18-2.22.8-5 .09-7.4-.64-2.19-3.13-3.14-5.08-4.33-2.89-1.75-5-4.5-7.72-6.52s-6.52-3.26-9.4-1.51a19 19 0 00-8.84-13.74c-5-3-6.74-7.43-13.51-8.27-2.19-.27-4.87.55-6.94-.15-2.45-.92-4.57-3.49-6.87-4.73z"
        fill="#8c5b79"
      />
      <path
        d="M367.32 357.92c-2.15 2.14-.39 6.31-2.44 8.54-1 1.09-2.71 1.43-3.5 2.69-1 1.63 0 3.86-.64 5.67-.83 2.2-3.83 2.85-4.88 5-1.3 2.62.73 6.73-1.79 8.22-.94.56-2.3.49-2.89 1.41s0 2.12 0 3.21c0 2-2.11 3.24-3.49 4.71s-1.55 4.64.46 4.79a9.32 9.32 0 01-4.44 3.75c1.88 1.11 1.44 4 .09 5.76s-3.39 2.83-4.3 4.83c-.48 1-.65 2.12-1.11 3.13-1.58 3.48-6.42 4.55-9.88 2.93s-5.62-5.22-6.68-8.89c-2.34-8.09-.28-16.9-2.26-25.08-1.14-4.74-3.62-9.26-3.43-14.13.16-3.88 2-7.46 3.9-10.85a248.74 248.74 0 0115.56-24.43c5.42-7.51 12-15.19 21.05-17.11 5.35-1.13 10.91-.08 16.2 1.31 15.49 4.08 30.47 11.33 41.61 22.84a35.29 35.29 0 018 11.83c1.69 4.49 1.93 9.68-.13 14-1.18 2.48-3.14 5-2.36 7.68a25.89 25.89 0 01.93 2.48c.73 4-6 6-6 10 0 1.1.54 2.16.4 3.25-.29 2.22-3 3.14-4.27 5-1.79 2.71-.22 7.07-2.76 9.09-1.22 1-3.23 1.19-3.69 2.69-.3 1 .27 2 .22 3-.09 1.8-2 2.89-3 4.34s-.24 4.42 1.42 3.72l-4.61 3.25 1.22 2.52c-1 2.11-4.23 2.3-5.88.68s-1.84-4.3-1.09-6.49a20.86 20.86 0 013.68-5.84 111.65 111.65 0 007.93-11.58c2-3.33 3.86-7.07 3.34-10.91-.42-3.11-2.37-6.21-1.34-9.18l3.33-1.2-5.63-6.62 2.81-.67a6.71 6.71 0 01-2-3 2.31 2.31 0 011.55-2.83c1.67-4.93-8-9-5.43-13.6h-2.54a9.64 9.64 0 00-2.82-6.67 11.33 11.33 0 00-7.3-3.08c-3.27-.19-12 .32-14.73 2.47-1.62 1.27-.85 2.81-1.93 4.19-1.16 1.7-3.1 1.82-4.46 3.18z"
        opacity={0.05}
      />
      <path
        d="M419.01 492.26a28.31 28.31 0 01-3.6 10.11 22.91 22.91 0 01-8.31 7.15c-2.21 1.23-4.56 2.28-6.86 3.28l-16.43 7.14a23.59 23.59 0 01-16.69 2.37l-30.42-4.25c-3.64-.51-7.32-1-11-1.71-2.32-.42-4.63-.91-6.89-1.49a55.54 55.54 0 01-13.73-5.36c-9.53-5.44-13.28-16.19-12.3-27.13.93-10.41 5.13-18.08 12.73-25.26l2.1-2 .19-.17 5.1-4.83 7.45-7a73.8 73.8 0 009.21-9.85c6.11-8.38 8.28-21.44 16.46-28.15 6.94-5.69 22.7 2.51 29.06 6.79a7 7 0 012.54 2.5 7.1 7.1 0 01.39 3.76 61.35 61.35 0 01-6.6 22.56c-.71 1.37-1.49 2.86-1.23 4.38a3.74 3.74 0 00.56 1.41 8.74 8.74 0 003.31 2.63 59.26 59.26 0 005.49 2.49c6.76 2.68 13.94 4.4 20.67 7.24 8.58 3.63 16.94 9.86 19.18 18.9 1.22 4.73.59 9.73-.38 14.49z"
        fill="#c6866b"
      />
      <path
        d="M379.58 451.62c1.3 4.62 7.73 26.8 11.64 27.91 1.47.42 7.91 13.19 15.84 30 15.73 33.33 37.28 82.52 37.28 82.52l-91.49-2.18-39.77-1 5.74-74.05 1.14-14.7 10.33-3.59 4.05-1.41-.63-23.13s-8.89-22.58-25.93-17.11l5.1-4.83c8.39-.09 17.63 5.35 26.45 21.94 0 0 51.25 68.75 46.25 5 0 0-8.75-27.5-17.5-31.88l2.68 1.34z"
        fill="#252036"
      />
      <path
        d="M373.7 433.03a61.32 61.32 0 002.43-12.43 7.1 7.1 0 00-.39-3.76 7 7 0 00-2.54-2.5c-6.36-4.28-22.11-12.48-29.06-6.79a20.67 20.67 0 00-2.07 2 53.94 53.94 0 0031.63 23.48z"
        opacity={0.05}
      />
      <path
        d="M338.19 392.91c4.3 19.36 21.49 34.73 41 38.45 4.31.83 9.55.8 12.17-2.73 1.69-2.28 1.75-5.38 3-8 1.07-2.26 3-4 4.65-5.83a48.87 48.87 0 005.9-8.34c5.7-9.85 9.34-21.2 8.36-32.54a85 85 0 00-3.11-14.9c-1.59-5.85-3.49-12.15-8.4-15.7-10.77-7.79-28.55-5.21-39.75-.08-11.69 5.36-20 16.41-23.2 28.7a44.57 44.57 0 00-.62 20.97z"
        fill="#c6866b"
      />
      <path
        d="M367.32 356.67c-2.15 2.14-.39 6.31-2.44 8.54-1 1.09-2.71 1.43-3.5 2.69-1 1.63 0 3.86-.64 5.67-.83 2.2-3.83 2.85-4.88 5-1.3 2.62.73 6.73-1.79 8.22-.94.56-2.3.49-2.89 1.41s0 2.12 0 3.21c0 2-2.11 3.24-3.49 4.71s-1.55 4.64.46 4.79a9.32 9.32 0 01-4.44 3.75c1.88 1.11 1.44 4 .09 5.76s-3.34 2.93-4.29 4.89c-.48 1-.65 2.12-1.11 3.13-1.58 3.48-6.42 4.55-9.88 2.93s-5.62-5.22-6.68-8.89c-2.34-8.09-.28-16.9-2.26-25.08-1.14-4.74-3.62-9.26-3.43-14.13.16-3.88 2-7.46 3.9-10.85a248.74 248.74 0 0115.56-24.43c5.42-7.51 12-15.19 21.05-17.11 5.35-1.13 10.91-.08 16.2 1.31 15.49 4.08 30.47 11.33 41.61 22.84a35.29 35.29 0 018 11.83c1.69 4.49 1.93 9.68-.13 14-1.18 2.48-3.14 5-2.36 7.68a25.89 25.89 0 01.93 2.48c.73 4-6 6-6 10 0 1.1.54 2.16.4 3.25-.29 2.22-3 3.14-4.27 5-1.79 2.71-.22 7.07-2.76 9.09-1.22 1-3.23 1.19-3.69 2.69-.3 1 .27 2 .22 3-.09 1.8-2 2.89-3 4.34s-.24 4.42 1.42 3.72l-4.61 3.25 1.22 2.52c-1 2.11-4.23 2.3-5.88.68s-1.84-4.3-1.09-6.49a20.86 20.86 0 013.68-5.84 111.65 111.65 0 007.93-11.58c2-3.33 3.86-7.07 3.34-10.91-.42-3.11-2.37-6.21-1.34-9.18l3.33-1.2-5.63-6.62 2.81-.67a6.71 6.71 0 01-2-3 2.31 2.31 0 011.55-2.83c1.67-4.93-8-9-5.43-13.6h-2.54a9.64 9.64 0 00-2.82-6.67 11.33 11.33 0 00-7.3-3.08c-3.27-.19-12 .32-14.73 2.47-1.62 1.27-.85 2.81-1.93 4.19-1.17 1.64-3.11 1.76-4.47 3.12z"
        fill="#8c5b79"
      />
      <path
        d="M621.96 727.99c-1.19 6-4.9 12.19-8.15 17.31-.48.75-.94 1.5-1.41 2.25l-.73 1.2a171.85 171.85 0 00-13.5 27.53c-.86 2.23-1.67 4.47-2.41 6.72h-40.35c-2.72-4.15-4-8.88-5-13.5a122.78 122.78 0 01-2.59-23.35 121.16 121.16 0 01.71-15.23c0-.46.11-.92.17-1.39.78-5.83 2.6-12 8.49-15.57a15.61 15.61 0 011.45-.79 3.1 3.1 0 01.41-.2 40.28 40.28 0 018.36-2.59q6.21-1.38 12.58-2.26l1.34-.17q3.53-.46 7.1-.75c1.35-.12 2.7-.22 4.06-.3 7.2-.41 15-.2 20.76 3.18 4.63 2.74 7.2 5.94 8.35 9.37.06.17.12.35.17.53a16.92 16.92 0 01.19 8.01z"
        fill="#0e0d15"
      />
      <path
        d="M682.6 727.74a28.81 28.81 0 00-8.62 12.22c-.2.49-.38 1-.55 1.48-2.27 6.58-2.92 13.89-3.32 20.76s-.81 13.87-1.21 20.8h-70.34c-.17-2.24-.31-4.48-.39-6.72q-.36-8.61.07-17.23a49.34 49.34 0 011.59-11.38c.12-.4.24-.8.38-1.2s.39-1.07.61-1.6c3.16-7.47 10.1-12.84 17.68-15.73 1.14-.43 2.29-.81 3.46-1.15 6.59-1.92 13.57-2.43 20.46-2.65 11.15-.36 30.32-2.63 40.18 2.4z"
        fill="#0e0d15"
      />
      <path
        d="M600.47 450.18a25.54 25.54 0 01-1.05 8.51c-1.66 4.63-5.82 8-10.41 9.78s-9.61 2-14.52 2c-6.35-.09-13.56-.42-18 4.09-2.88 2.89-3.86 7.1-4.72 11.09-3.11 14.38-6.14 29.86-.41 43.41 3.63 8.6 10.57 15.54 18.61 20.28s17.16 7.39 26.36 9a62.47 62.47 0 0011.08.99c12.68-.12 24.52-6 35.84-11.67a23 23 0 006.79-4.51 22.6 22.6 0 004-7.28q9.13-23.22 16.48-47.08c1.3-4.22 2.57-8.54 2.49-13s-1.71-9-5.23-11.68c-5.37-4-12.87-2.44-19.55-1.67a3.14 3.14 0 01-4.09-3 49.69 49.69 0 01-.69-22.18c.91-4.58 2.41-9.56.27-13.71-2.94-5.7-10.7-6.32-17.12-6.18l-11 .24a9.23 9.23 0 00-4.7.94c-2.46 1.52-4.14 4-6.71 5.53-2.15 1.29-3.5 1.13-4.39 3.64s.36 7.57.46 10.3q.24 6.12.21 12.16z"
        fill="#fdbe92"
      />
      <path
        d="M569.76 520.74a26.4 26.4 0 005.42 5.79c4.34 3.08 10.23 3.24 15.33 1.7s9.59-4.57 14-7.56l36.08-24.48c5-3.38 10-6.79 15.71-8.75a7.3 7.3 0 014.61-.42 8.16 8.16 0 013.55 3.09c4.77 6.17 9.63 12.5 12 19.92 2.24 6.89 2.22 14.28 2.14 21.52q-.16 14.84-.51 29.68c-.13 5.59-.3 11.25-1.92 16.6-2.28 7.55-7.36 14.16-8.7 21.93-1.39 8.05 1.42 16.16 4 23.93a427.46 427.46 0 0119.86 98.21c.25 3.1.43 6.42-1.12 9.11-1.23 2.15-3.39 3.6-5.53 4.86-27.4 16.17-61.46 14.92-93 10.81-6.45-.84-13.25-1.93-18.23-6.11-3.53-3-5.75-7.17-7.77-11.31-9.65-19.8-16.88-41.41-16-63.41a194.84 194.84 0 012.57-21.5q3-19.23 5.24-38.55c1.11-9.39 2.06-19.15-1-28.11-3.08-9.29-10.24-16.86-13.08-26.26-4.17-13.85 1.65-28.86 7.27-41.43 1.8-4 11-38 12.74-38.28 5.1-.92 2.26 43.66 6.34 49.02z"
        opacity={0.05}
      />
      <path
        d="M569.76 519.5a26.4 26.4 0 005.42 5.79c4.34 3.08 10.23 3.24 15.33 1.7s9.59-4.57 14-7.56l36.08-24.48c5-3.38 10-6.79 15.71-8.75a7.3 7.3 0 014.61-.42 8.16 8.16 0 013.55 3.09c4.77 6.17 9.63 12.5 12 19.92 2.24 6.89 2.22 14.28 2.14 21.52q-.16 14.84-.51 29.68c-.13 5.59-.3 11.25-1.92 16.6-2.28 7.55-7.36 14.16-8.7 21.93-1.39 8.05 1.42 16.16 4 23.93a427.46 427.46 0 0119.86 98.21c.25 3.1.43 6.42-1.12 9.11-1.23 2.15-3.39 3.6-5.53 4.86-27.4 16.17-61.46 14.92-93 10.81-6.44-.84-13.27-1.94-18.27-6.12-3.53-3-5.75-7.17-7.77-11.31-9.65-19.8-16.88-41.41-16-63.41a194.84 194.84 0 012.57-21.5q3-19.23 5.24-38.55c1.11-9.39 2.06-19.15-1-28.11-3.15-9.29-10.32-16.86-13.15-26.25-4.17-13.85 1.65-28.86 7.27-41.43 1.8-4 11-38 12.74-38.28 5.21-.93 2.37 43.65 6.45 49.02z"
        fill="#252036"
      />
      <path
        d="M699.52 467.19c-.56 5.39-1.63 10.93-4.72 15.39-4.46 6.43-12.26 9.5-19.59 12.23l-23.42 8.69a88.24 88.24 0 01-13.76 4.28 46.45 46.45 0 01-6.81.8 60.76 60.76 0 01-25.93-5.1c-10.3-4.33-19.54-10.81-28.38-17.65-5.43-4.21-10.76-8.6-15.19-13.84-3.42-4-6.39-8.94-6.15-14.23a28.19 28.19 0 011.76-7.43 184.26 184.26 0 007.36-31.31 176.94 176.94 0 001.6-34.16c-.21-4.19-.58-8.39 0-12.55 2-14.92 7.1-25.18 19-34.35 2.53-1.94 12.88-4.39 15.94-5.28l.57-.14c5.49-1.13 16.27 2.65 21.35 4.38a49.93 49.93 0 0134 46.37c.08 3.7-.05 7.91 2.13 10.71a6.18 6.18 0 00.94 1c1.22 1 2.78 1.61 4.06 2.58 3.54 2.69 4.12 7.8 3.53 12.2s-2.06 8.78-1.48 13.18a15.58 15.58 0 00.68 2.89c1.26 3.78 3.8 7.13 6.28 10.32l10.05 13c1.83 2.36 3.86 4.86 6.69 5.75l.29.09c1.71.46 3.56.29 5.19 1 3.98 1.57 4.45 6.92 4.01 11.18z"
        opacity={0.05}
      />
      <path
        d="M450.57 329.5c-12.89 8.62-16.51 25.49-21.87 40-2.07 5.6-4.54 11.1-5.72 17-1.49 7.34-.88 14.92-1 22.41a108.74 108.74 0 01-40.73 81.66l73.8 22a128.49 128.49 0 0014.26 3.65c7 1.23 14.12 1.3 21.22 1.36l45.18.4c3.41 0 7.4-.22 9.32-3a8.13 8.13 0 001.14-4.76c-.16-9.15-7.12-16.59-10.54-25.07-5.5-13.64 7.07-26.17 6.6-40.87-.22-6.83-.45-16.93 0-23.75 1-15.79 1.16-30.21-.64-45.94-2-17.66-17.59-30.18-31.94-40.68-15.6-11.41-42.02-15.78-59.08-4.41z"
        fill="#d94b25"
      />
      <path
        d="M467.17 402.34l-.31 51.57a128.75 128.75 0 00-24.89 3.77 28.28 28.28 0 00-21.13 31.59l9.77 66.52 105.63 6.25v-64.38a28.8 28.8 0 00-32.74-22.54l-4.14.66 9.38-53.75z"
        fill="#ffc095"
      />
      <path
        d="M443.73 452.66s21.25 43.13 23.13 51.88-38.75 39.38-44.38 36.25-5 73.75-5 73.75l108.76-10.63 2.5-15.63s28.13-11.88 2.5-59.38l-7.5-3.13s-6.25 25-53.13-22.5l-22.5-52.5z"
        fill="#252036"
      />
      <path
        d="M527.8 587.35s-21.25 1.88-23.13-2.5l-3.75-.63s-6.25 13.75-65-.63l-18.51-.63-4 9.4 114.56 3.75zM468.23 437.04a20.2 20.2 0 004.08 2.2c3.56 1.38 7.47 1.5 11.28 1.6 6.87.18 14.32.2 19.85-3.88a18.73 18.73 0 005.76-7.31l.78-4.49-41.57-19.66z"
        opacity={0.05}
      />
      <path
        d="M442.41 374.5a65.71 65.71 0 0020.5 56.12 26.65 26.65 0 008.12 5.45c3.56 1.38 7.47 1.5 11.28 1.6 6.87.18 14.32.2 19.85-3.88 6.56-4.83 8.28-13.73 9.51-21.78l3.84-25.11c1.12-7.31 2.16-15.18-1.18-21.78-5.7-11.3-27.72-21.73-40.12-20.43-16.25 1.73-29.66 13.81-31.8 29.81z"
        fill="#ffc095"
      />
      <path
        d="M458.48 366.71c-3.53 7.47-6 15.8-4.68 24 1.13 7 4.92 13.16 8.73 19.1 8.62 13.42 18.07 27.2 19.81 43.06.62 5.67.18 11.59-2.29 16.72s-7.21 9.37-12.84 10.29a7.24 7.24 0 01-4.6-.51c-1.77-1-2.73-2.89-3.63-4.68-4.33-8.62-24.86-11.09-34.32-9.17-1.32.27 10.05-6 8.72-6.19-3.88-.57-4.59-5.82-4.31-9.73l5.45-75.46c.31-4.27.63-8.6 2-12.66 5-14.62 22.27-21.29 37.72-21.73a55.32 55.32 0 0114.28 1.26c10.78 2.55 20.19 9.39 27.48 17.73 5 5.75 9.24 12.43 10.9 19.88 1.9 8.53.35 17.41-1.07 26-6.68 40.55-10.33 82.93 2.11 122.09-11.83 2.4-24.79-6-27.45-17.76-1.06-4.7-.64-9.59-.22-14.38 1.61-18.34 3.22-36.69 6-54.88 2.15-13.86 5-27.69 5.2-41.72.16-11.44-1.81-23.67-9.55-32.1-12.59-13.8-34.45-18.16-43.44.84z"
        opacity={0.05}
      />
      <path
        d="M458.48 365.5c-3.53 7.47-6 15.8-4.68 24 1.13 7 4.92 13.16 8.73 19.1 8.62 13.42 18.07 27.2 19.81 43.06.62 5.67.18 11.59-2.29 16.72s-7.21 9.37-12.84 10.29a7.24 7.24 0 01-4.6-.51c-1.77-1-2.73-2.89-3.63-4.68-4.33-8.62-24.86-11.09-34.32-9.17-1.32.27 10.05-6 8.72-6.19-3.88-.57-4.59-5.82-4.31-9.73l5.45-75.46c.31-4.27.63-8.6 2-12.66 5-14.62 22.27-21.29 37.72-21.73a55.32 55.32 0 0114.28 1.26c10.78 2.55 20.19 9.39 27.48 17.73 5 5.75 9.24 12.43 10.9 19.88 1.9 8.53.35 17.41-1.07 26-6.68 40.55-10.33 82.93 2.11 122.09-11.83 2.4-24.79-6-27.45-17.76-1.06-4.7-.64-9.59-.22-14.38 1.61-18.34 3.22-36.69 6-54.88 2.15-13.86 5-27.69 5.2-41.72.16-11.44-1.81-23.67-9.55-32.1-12.59-13.84-34.45-18.16-43.44.84z"
        fill="#d94b25"
      />
      <path fill="#f3f0dd" d="M204.65 595.86h383.78V783H204.65z" />
      <path
        d="M116.48 467.61c-3.25 1.67-6.57 3.36-9.1 6s-4.22 6.33-5.55 9.9c-3.25 8.74-5.27 17.88-7.28 27-7.17 32.48-14.36 65.15-15.92 98.37-.39 8.2-.41 16.52 1.62 24.47 2.22 8.68 6.82 16.55 11.67 24.09a322.18 322.18 0 0056.2 65.8 16.64 16.64 0 013.44 3.75 23.49 23.49 0 011.67 4.26c4 11.41 15.16 18.48 25.55 24.67 4.17 2.48 8.46 5 13.25 5.81 2.47.41 5 .36 7.37 1.3 3.62 1.45 6 5 9.48 6.79s9.28-.32 8.34-4.11c3.26 2.51 8.49-2.81 5.92-6 2.57 1.65 6.13-1.08 6.46-4.12s-1.39-5.89-3-8.46c-5.64-8.81-11.47-17.82-19.93-24-9.05-6.57-20.38-9.3-29.7-15.48-9.06-6-15.74-14.91-22.12-23.71q-19.58-27-37.83-54.92c-1.6-2.45-3.23-5-3.78-7.85s0-6 .66-8.9a473.28 473.28 0 0125.18-81.11 140.53 140.53 0 0110-20.53c5.38-8.71 12.36-16.37 17.54-25.2s8.53-19.48 5.68-29.32c-2.77-9.58-15-19.75-23.89-12.45-5 4.07-8.46 9.63-13.92 13.51a143.91 143.91 0 01-18.01 10.44z"
        fill="#ffc095"
      />
      <path
        d="M431.7 652.5a45.34 45.34 0 00-9.77-14.5 45.8 45.8 0 00-6.31-5.27l-.19-.14a45.76 45.76 0 00-41.7-5.09q-.46.16-.93.36c-.3.11-.6.24-.89.36a45.63 45.63 0 0015.85 87.63v22.73h-24.6v3.82h24.6V767h3.83v-24.6h24.59v-3.82h-24.6v-22.75a45.65 45.65 0 0040.12-63.33zm-42 59.57a41.81 41.81 0 01-13.17-81.48l.77-.26a42 42 0 0112.4-1.87 41.51 41.51 0 0119.57 4.87l.2.11a41.8 41.8 0 01-19.77 78.63z"
        fill={color}
      />
      <path
        d="M166.88 349.81c-3.64 9.45-1.65 20 .39 30 1.17 5.69 2.37 11.47 5.14 16.58a36.8 36.8 0 008.73 10.41 50.49 50.49 0 0031 11.68 14.88 14.88 0 006.66-1c2.66-1.22 4.5-3.68 6.22-6 4.35-6 8.74-12 11.73-18.72 5.37-12.11 5.9-25.73 6.34-39a14.33 14.33 0 00-.6-5.8 13.15 13.15 0 00-1.92-3.09c-8-10.45-23.31-27.22-37.81-22.33-13.5 4.48-30.48 13.24-35.88 27.27z"
        fill="#ffc095"
      />
      <path
        d="M205.66 763.64c-2.32-.93-4.9-.88-7.37-1.3-4.79-.8-9.08-3.33-13.25-5.81-10.4-6.19-21.54-13.26-25.55-24.67a23.49 23.49 0 00-1.67-4.26 16.64 16.64 0 00-3.44-3.75 322.18 322.18 0 01-56.2-65.8c-4.85-7.54-9.45-15.41-11.67-24.09-2-7.95-2-16.27-1.62-24.47 1.56-33.22 8.75-65.89 15.92-98.37 2-9.11 4-18.25 7.28-27 1.33-3.57 2.91-7.15 5.55-9.9s5.85-4.33 9.1-6a143.91 143.91 0 0018-10.45c5.46-3.88 8.95-9.44 13.92-13.51a10.91 10.91 0 013.72-2 10.62 10.62 0 00-10 2c-5 4.07-8.46 9.63-13.92 13.51a143.91 143.91 0 01-18 10.45c-3.25 1.67-6.57 3.36-9.1 6s-4.22 6.33-5.55 9.9c-3.25 8.74-5.27 17.88-7.28 27-7.12 32.48-14.35 65.14-15.91 98.38-.39 8.2-.41 16.52 1.62 24.47 2.22 8.68 6.82 16.55 11.67 24.09a322.18 322.18 0 0056.2 65.8 16.64 16.64 0 013.44 3.75 23.49 23.49 0 011.67 4.26c4 11.41 15.16 18.48 25.55 24.67 4.17 2.48 8.46 5 13.25 5.81 2.47.41 5 .36 7.37 1.3 3.62 1.45 6 5 9.48 6.79a7.19 7.19 0 006.08-.09c-3.38-1.85-5.73-5.28-9.29-6.71z"
        opacity={0.05}
      />
      <path
        d="M178.33 343.88c-6.08 9.75-7.21 22.13-4.31 33.25 2.17 8.34 6.49 17 3.57 25.14-2.2 6.11-8.33 12.2-5.29 17.94.68 1.28 1.78 2.34 2.18 3.73.68 2.37-.85 4.72-1.91 6.94-5.54 11.56 1.08 24.85 4.32 37.25 2.4 9.18 2.89 18.73 3.37 28.21l-6-15.33a86.69 86.69 0 01-15.66 35.49 46.63 46.63 0 0113 2 12.52 12.52 0 00-5 24.45c-6.14 1.36-12.48-2.82-15.42-8.38s-3.17-12.13-2.82-18.41l-5 .41a83.59 83.59 0 006.21-38c-.41-5.74-2.3-12.52-7.8-14.21l-1.65 15.23-6.71-13.52a5.62 5.62 0 00-2.33-2.86 19.17 19.17 0 00-2.5-.6c-2.63-.81-3.65-4.24-2.83-6.86s2.93-4.61 4.94-6.49c6.8-6.36 13.58-13.14 17.26-21.69 3.42-7.94 3.91-16.79 4.27-25.43q.64-15.19 1-30.4c.17-8 .28-16.06 2-23.86 3-13.21 11-25.48 22.77-32.23s27.13-7.36 38.71-.35c7 4.22 12.17 10.74 17.22 17.12l14.49 18.3c3 3.79 6.06 7.69 7.45 12.31 2.56 8.52-1 17.63-5.34 25.42s-9.55 15.46-10.61 24.29c-1.22 10.21 3.33 20.12 7.77 29.39 5.64 11.78 11.37 23.71 19.86 33.63 4.32 5.05 9.54 9.95 10.76 16.48a7.58 7.58 0 01-6.68 1.47q5.17 20.54 8.27 41.53-18.45-12.16-35.79-25.9a13.82 13.82 0 01-8.69 10.09c-.35-3.88 1-7.7 1.19-11.59s-1.31-8.43-5-9.6c-2.16-.68-4.72-.1-6.55-1.43-1.34-1-1.86-2.7-2.3-4.31l-8.34-30.62a26.55 26.55 0 00-14.5 3.5 27.63 27.63 0 0013-16.19l-17.35-.27q6.87-6.5 13.31-13.43c6.25-6.72 12.22-13.78 16.77-21.75 12.77-22.33 12.95-51.34.45-73.83-2.07-3.73-4.54-7.36-8-9.81-12.51-8.69-32.9 2.79-39.76 13.78z"
        fill="#d67820"
      />
      <path
        d="M252.41 590.91c0-2.67 1.28-5.16 2.6-7.48q2.73-4.77 5.86-9.3a21.25 21.25 0 015.82-6.24c2.43-1.52 5.68-2 8.16-.6a3.84 3.84 0 001.88.8c1 0 1.66-1 2.55-1.38 1.6-.74 3.44.44 4.56 1.81s2 3 3.61 3.79c.58.28 1.23.41 1.82.67 2.05.9 3.14 3.11 4.06 5.16a10.63 10.63 0 011.25 4.39c0 2.68-2 4.87-3.89 6.79l-4.84 5a18.41 18.41 0 01-4.25 3.57 6.22 6.22 0 01-5.36.49 2.36 2.36 0 00-1.43-.37 1.84 1.84 0 00-.92.72 48.47 48.47 0 00-3 4.1 10.48 10.48 0 01-3.31 3.75c-1.48.82-3.71.55-4.38-1a1.93 1.93 0 00-.45-.82c-.61-.48-1.39.3-2.1.6-1.19.51-2.59-.49-3-1.72a7 7 0 01.22-3.82c-.89-.72-2.19-.29-3.34-.23-2.37.13-1.89-1.39-1.83-2.77.19-2.02-.24-3.91-.29-5.91z"
        opacity={0.05}
      />
      <path
        d="M251.82 592.16c0-2.67 1.28-5.16 2.6-7.48q2.73-4.77 5.86-9.3a21.25 21.25 0 015.82-6.24c2.43-1.52 5.68-2 8.16-.6a3.84 3.84 0 001.88.8c1 0 1.66-1 2.55-1.38 1.6-.74 3.44.44 4.56 1.81s2 3 3.61 3.79c.58.28 1.23.41 1.82.67 2.05.9 3.14 3.11 4.06 5.16a10.63 10.63 0 011.25 4.39c0 2.68-2 4.87-3.89 6.79l-4.84 5a18.41 18.41 0 01-4.25 3.57 6.22 6.22 0 01-5.36.49 2.36 2.36 0 00-1.43-.37 1.84 1.84 0 00-.92.72 48.47 48.47 0 00-3 4.1 10.48 10.48 0 01-3.31 3.75c-1.48.82-3.71.55-4.38-1a1.93 1.93 0 00-.45-.82c-.61-.48-1.39.3-2.1.6-1.19.51-2.59-.49-3-1.72a7 7 0 01.22-3.82c-.89-.72-2.19-.29-3.34-.23-2.37.13-1.89-1.39-1.83-2.77.15-2.02-.27-3.91-.29-5.91z"
        fill="#ffc095"
      />
      <path
        d="M419.67 541.73l-60.55 46.89-42 32.49c-25.63 23.75-33.75-10-33.75-10l6.25-98.13c-.23-25.14 3.9-39.8 9.29-48.27 4.45-7 9.76-9.76 14.18-10.72l.74-.14a18.33 18.33 0 018.3.38c18 7.05 17.38 27.11 14.39 41.1a89 89 0 01-4.39 14.53 38.89 38.89 0 01-.19 5.26c-1.23 15.94-7.31 58.5-7.31 58.5l72.5-49.38z"
        opacity={0.05}
      />
      <path
        d="M417.79 541.73l-60.55 46.89-42 32.49c-25.63 23.75-33.75-10-33.75-10l6.25-98.13c-.23-25.14 3.9-39.8 9.29-48.27 4.45-7 9.76-9.76 14.18-10.72l.74-.14a18.33 18.33 0 018.3.38c18 7.05 17.38 27.11 14.39 41.1a89 89 0 01-4.39 14.53 38.89 38.89 0 01-.19 5.26c-1.23 15.94-7.31 58.5-7.31 58.5l72.5-49.38z"
        fill="#c6866b"
      />
      <path
        d="M399.35 508.29s-32.5 75.63-27.5 111.26c0 0-7.5 21.88 52.5 11.88l85-18.75 23.13 5.63 5 6.25v17.5s6.88 5 8.75 0 0-18.13 0-18.13l4.38 7.5 1.88 15s5 3.75 6.88 0l-2.51-21.93s10 20.63 14.38 18.75-5.63-25.63-5.63-25.63a11 11 0 019.6 5.61c2 3.47 4.58 7 6.65 5.65 3.75-2.5 0-9.38 0-9.38l-8.75-12.5a71.27 71.27 0 00-42.38-14.7l-112-1.55s15.63-36.88 16.88-55c0 0 .63-11.25 14.38-18.75s-34.39-74.34-50.64-8.71z"
        opacity={0.05}
      />
      <path
        d="M445.6 468.28s-31.25-25.63-47.5 40c0 0-32.5 75.63-27.5 111.26 0 0-7.5 21.88 52.5 11.88l85-18.75 23.13 5.63 5 6.25v17.5s6.88 5 8.75 0 0-18.13 0-18.13l4.38 7.5 1.88 15s5 3.75 6.88 0l-2.51-21.92s10 20.63 14.38 18.75-5.58-25.58-5.58-25.58a11 11 0 019.6 5.61c2 3.47 4.58 7 6.65 5.65 3.75-2.5 0-9.38 0-9.38l-8.75-12.5a71.27 71.27 0 00-42.38-14.7l-112-1.55s15.63-36.88 16.88-55c0 0 .63-11.25 14.38-18.75s-3.19-48.77-3.19-48.77z"
        fill="#ffc095"
      />
      <path
        d="M654.99 473.91s44.38-32.5 46.25 28.75l2.51 126.84-71.26 76.3s-4.38 14.38-17.5 15.63l-14.38 17.5s-6.88.63-5.63-1.88 10-19.38 10-19.38l-18.75 25s-5.63-1.88-3.75-3.75c0 0-6.25 6.88-7.5.63s0-5 0-5-8.13 6.25-6.25-2.5 18.13-36.88 20-36.88 23.75-1.88 23.75-1.88l60-73.13s-20-85-25.63-115 8.14-31.25 8.14-31.25z"
        opacity={0.05}
      />
      <path
        d="M656.24 473.91s44.38-32.5 46.25 28.75L705 629.5l-71.26 76.3s-4.38 14.38-17.5 15.63l-14.38 17.5s-6.88.63-5.63-1.88 10-19.38 10-19.38l-18.75 25s-5.63-1.88-3.75-3.75c0 0-6.25 6.88-7.5.63s0-5 0-5-8.13 6.25-6.25-2.5 18.13-36.88 20-36.88 23.75-1.88 23.75-1.88l60-73.13s-20-85-25.63-115 8.14-31.25 8.14-31.25z"
        fill="#fdbe92"
      />
      <path
        d="M699.52 465.31c-.56 5.39-1.63 10.93-4.72 15.39-4.46 6.43-12.26 9.5-19.59 12.23l-23.41 8.7a88.24 88.24 0 01-13.76 4.28 46.45 46.45 0 01-6.81.8 60.76 60.76 0 01-25.93-5.1c-10.3-4.33-19.54-10.81-28.38-17.65-5.43-4.21-10.76-8.6-15.19-13.84-3.42-4-6.39-8.94-6.15-14.23a28.19 28.19 0 011.76-7.43 184.26 184.26 0 007.36-31.31 176.94 176.94 0 001.6-34.16c-.21-4.19-.58-8.39 0-12.55 2-14.92 7.1-25.18 19-34.35 2.53-1.94 12.88-4.39 15.94-5.28l.57-.14c5.49-1.13 16.27 2.65 21.35 4.38a49.93 49.93 0 0134 46.37c.08 3.7-.05 7.91 2.13 10.71a6.18 6.18 0 00.94 1c1.22 1 2.78 1.61 4.06 2.58 3.54 2.69 4.12 7.8 3.53 12.2s-2.06 8.78-1.48 13.18a15.58 15.58 0 00.68 2.89c1.26 3.78 3.8 7.13 6.28 10.32l10.05 13c1.83 2.36 3.86 4.86 6.69 5.75l.29.09c1.71.46 3.56.29 5.19 1 3.97 1.56 4.44 6.92 4 11.17z"
        fill="#f3f0dd"
      />
      <path
        d="M577.16 376.84c-4.34 8.33-5.74 17.9-5.92 27.29-.1 4.81.12 9.7 1.65 14.26a51.51 51.51 0 005.35 10.39l9.54 15.52c1.29 2.1 2.69 4.31 4.89 5.43s5.13.94 7.74.62c6.21-.76 12.52-1.73 18.09-4.57 7.18-3.66 12.49-10.07 17.59-16.31a13.79 13.79 0 004.21-12.19l-1.1-24.78a24.16 24.16 0 00-1.11-7.43c-2.18-5.85-8.31-9-13.53-12.41-7.69-5-16.37-13.15-26.31-12.58-9.12.52-17.12 9.15-21.09 16.76z"
        opacity={0.05}
      />
      <path
        d="M577.16 375.59c-4.34 8.33-5.74 17.9-5.92 27.29-.1 4.81.12 9.7 1.65 14.26a51.51 51.51 0 005.35 10.36l9.54 15.52c1.29 2.1 2.69 4.31 4.89 5.43s5.13.94 7.74.62c6.21-.76 12.52-1.73 18.09-4.57 7.18-3.66 12.49-10.07 17.59-16.31A13.79 13.79 0 00640.3 416l-1.09-24.79a24.16 24.16 0 00-1.11-7.43c-2.18-5.85-8.31-9-13.53-12.41-7.69-5-16.37-13.15-26.31-12.58-9.13.56-17.13 9.19-21.1 16.8z"
        fill="#fdbe92"
      />
      <g opacity={0.1} fill="#fff">
        <path d="M557.33 458.5a184.26 184.26 0 007.36-31.31 177.51 177.51 0 001.76-30.1 178.75 178.75 0 01-1.76 20.72 184.26 184.26 0 01-7.36 31.31 28.19 28.19 0 00-1.76 7.43 14.66 14.66 0 00.75 5.18c.3-1.12.66-2.23 1.01-3.23zM666.8 423.76a23.56 23.56 0 00-.42 7.32 15.58 15.58 0 00.68 2.89c1.26 3.78 3.8 7.13 6.28 10.32l10.05 13c1.83 2.36 3.86 4.86 6.69 5.75l.29.09c1.71.46 3.56.29 5.19 1a6.49 6.49 0 013.64 4.66c.13-.93.24-1.85.34-2.78.44-4.26 0-9.61-4-11.26-1.63-.68-3.48-.51-5.19-1l-.29-.09c-2.83-.89-4.86-3.39-6.69-5.75l-10.05-13c-2.48-3.19-5-6.54-6.28-10.32-.08-.27-.17-.55-.24-.83zM566.26 380.43c2-14.92 7.1-25.18 19-34.35 2.53-1.94 12.88-4.39 15.94-5.28l.57-.14c5.49-1.13 16.27 2.65 21.35 4.38a49.93 49.93 0 0134 46.37c.08 3.7-.05 7.91 2.13 10.71a6.18 6.18 0 00.94 1c1.22 1 2.78 1.61 4.06 2.58a9.13 9.13 0 013.18 5c.13-.71.25-1.43.35-2.14.59-4.4 0-9.51-3.53-12.2-1.28-1-2.84-1.53-4.06-2.58a6.18 6.18 0 01-.94-1c-2.18-2.8-2.06-7-2.13-10.71a49.93 49.93 0 00-34-46.37c-5.08-1.73-15.86-5.5-21.35-4.38l-.57.14c-3.06.89-13.41 3.34-15.94 5.28-11.94 9.17-17.07 19.43-19 34.35a55.14 55.14 0 00-.1 10.29c.04-.33.06-.64.1-.95z" />
      </g>
      <path
        d="M243.02 619.94a9.61 9.61 0 10-13.46 13.72l13.72 13.46 13.46-13.72a9.61 9.61 0 00-13.72-13.46zM536.18 730.57a9.61 9.61 0 00-13.46 13.72l13.69 13.45 13.46-13.72a9.61 9.61 0 10-13.72-13.46z"
        fill="#eb5e30"
      />
      <path
        d="M726.04 65.73c-3.81 0-3.81 5.91 0 5.91s3.81-5.91 0-5.91zM582.41 229.63c-3.81 0-3.81 5.91 0 5.91s3.81-5.91 0-5.91zM40.03 510.11c-3.81 0-3.81 5.91 0 5.91s3.81-5.91 0-5.91zM428.65 165.42c-3.81 0-3.81 5.91 0 5.91s3.81-5.91 0-5.91zM846.85 224.86h-.44a2 2 0 01-2-2v-.44h-1.1v.44a2 2 0 01-2 2h-.44v1.1h.54a2 2 0 012 2v.44h1v-.44a2 2 0 012-2h.44zM723.5 114.18h-.44a2 2 0 01-2-2v-.44h-1.1v.44a2 2 0 01-2 2h-.44v1.1h.44a2 2 0 012 2v.44h1.1v-.44a2 2 0 012-2h.44zM94.1 444.5h-.44a2 2 0 01-2-2v-.44h-1.1v.44a2 2 0 01-2 2h-.44v1.1h.44a2 2 0 012 2v.44h1.1v-.44a2 2 0 012-2h.44zM444.7 261.18h-.44a2 2 0 01-2-2v-.44h-1.1v.44a2 2 0 01-2 2h-.44v1.1h.44a2 2 0 012 2v.44h1.1v-.44a2 2 0 012-2h.44zM875.25 240.37l-.34-.28a2 2 0 01-.28-2.78l.28-.34-.85-.69-.28.34a2 2 0 01-2.78.28l-.34-.28-.69.85.34.28a2 2 0 01.28 2.78l-.28.34.85.69.28-.34a2 2 0 012.78-.28l.34.28zM582.09 169.4l-.34-.28a2 2 0 01-.28-2.78l.28-.34-.85-.69-.28.34a2 2 0 01-2.78.28l-.34-.28-.69.85.34.28a2 2 0 01.28 2.78l-.28.34.85.69.28-.34a2 2 0 012.78-.28l.34.28zM778.94 584.21l-.34-.28a2 2 0 01-.28-2.78l.28-.34-.85-.69-.28.34a2 2 0 01-2.78.28l-.34-.28-.69.85.34.28a2 2 0 01.28 2.78l-.28.34.85.69.28-.34a2 2 0 012.78-.28l.34.28zM787.23 67.43l-1.7-1.7 1.7-1.7-.77-.78-1.71 1.7-1.7-1.7-.78.78 1.71 1.7-1.71 1.7.78.78 1.7-1.71 1.71 1.71.77-.78zM848.59 77.23a.85.85 0 000 1.69.85.85 0 000-1.69zM772.56 143.12a.85.85 0 000 1.69.85.85 0 000-1.69zM673.72 127.91a.85.85 0 000 1.69.85.85 0 000-1.69zM500.11 141.34h-1.27a.85.85 0 000 1.69h1.27a.85.85 0 000-1.69zM478.57 249.56a.85.85 0 000 1.69.85.85 0 000-1.69zM654.71 288.85a.85.85 0 000 1.69.85.85 0 000-1.69zM668.65 215.35a.85.85 0 000 1.69.85.85 0 000-1.69zM786.5 230.56a.85.85 0 000 1.69.85.85 0 000-1.69zM775.09 485.26a.85.85 0 000 1.69.85.85 0 000-1.69zM130.09 345.87a.85.85 0 000 1.69.85.85 0 000-1.69zM68 491.6a.85.85 0 000 1.69.85.85 0 000-1.69zM275.82 432.04a.85.85 0 000 1.69.85.85 0 000-1.69zM747.22 525.81a.85.85 0 000 1.69.85.85 0 000-1.69zM719.34 619.59a.85.85 0 000 1.69.85.85 0 000-1.69zM522.92 285.05a.85.85 0 000 1.69.85.85 0 000-1.69zM402.54 250.83a.85.85 0 000 1.69.85.85 0 000-1.69zM264.41 285.05a.85.85 0 000 1.69.85.85 0 000-1.69zM847.32 144.39h-1.27a2.11 2.11 0 100 4.22h1.27a2.11 2.11 0 100-4.22zM725.67 214.08c-2.72 0-2.72 4.22 0 4.22s2.74-4.22 0-4.22zM629.41 285.05c-2.72 0-2.72 4.22 0 4.22s2.68-4.22 0-4.22zM726.94 444.71c-2.72 0-2.72 4.22 0 4.22s2.72-4.22 0-4.22zM825.78 415.57c-2.72 0-2.72 4.22 0 4.22s2.72-4.22 0-4.22zM742.15 694.35h-1.27a2.11 2.11 0 000 4.22h1.27a2.11 2.11 0 100-4.22zM76.87 709.56c-2.72 0-2.72 4.22 0 4.22s2.72-4.22 0-4.22z"
        fill="#fff"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="url(#WomenDay_svg__a)"
        d="M691.4 331.43l68.85-68.85"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="url(#WomenDay_svg__b)"
        d="M606.07 164.15l68.85-68.85"
      />
      <path
        d="M821.92 369.63h-21c4.37-1.17 7.48-4 7.48-7.37s-3.11-6.2-7.48-7.37h9.17c6.51 0 11.83-3.57 11.83-7.93s-5.32-7.93-11.83-7.93h-74.34c-6.51 0-11.83 3.57-11.83 7.93 0 3.33 3.11 6.2 7.48 7.37h-9.17c-6.51 0-11.83 3.57-11.83 7.93s5.32 7.93 11.83 7.93h21c-4.37 1.17-7.48 4-7.48 7.37 0 4.36 5.32 7.93 11.83 7.93h74.35c6.51 0 11.83-3.57 11.83-7.93s-5.35-7.93-11.84-7.93zM576.03 207.42h-27.82c5.79-1.17 9.91-4 9.91-7.37s-4.12-6.2-9.91-7.37h12.15c8.62 0 15.68-3.57 15.68-7.93s-7.05-7.93-15.68-7.93h-98.54c-8.62 0-15.68 3.57-15.68 7.93 0 3.33 4.12 6.2 9.91 7.37h-12.14c-8.62 0-15.68 3.57-15.68 7.93s7.05 7.93 15.68 7.93h27.82c-5.79 1.17-9.91 4-9.91 7.37 0 4.36 7.05 7.93 15.68 7.93h98.53c8.62 0 15.68-3.57 15.68-7.93s-7.06-7.93-15.68-7.93z"
        fill="#fff"
        opacity={0.1}
      />
    </svg>
  );
};

SvgWomenDay.propTypes = {
  color: PropTypes.string
};
SvgWomenDay.defaultProps = {
  color: "primary"
};
export default SvgWomenDay;
