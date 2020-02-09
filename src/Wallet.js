import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWallet = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1049.58 678.59"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Wallet_svg__a"
          x1={790.68}
          y1={664.41}
          x2={790.68}
          y2={175.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path fill="#85848b" d="M0 670.92h1049.58v7.67H0z" />
      <path
        d="M831.54 535.49c0 5.9-34.39 23.1-75.24 23.1s-72.68-17.2-72.68-23.1 33.11-4 74-4 73.92-1.91 73.92 4z"
        fill="#504f60"
      />
      <path
        d="M831.54 535.49c0 5.9-34.39 23.1-75.24 23.1s-72.68-17.2-72.68-23.1"
        opacity={0.2}
      />
      <path
        d="M420.15 427.23c6.63.85 13.51 1.39 19.86-.67 1-.31 2.1-1 2-2a2.42 2.42 0 00-.45-1 61.78 61.78 0 01-6-11.43 1 1 0 00-.37-.52.94.94 0 00-.64 0c-2.93.77-5.46 2.66-8.37 3.47a11.9 11.9 0 01-4.56.34c-1.32-.15-3.12-1.24-4.32-1.1.68 4.37 2.34 8.45 2.85 12.91zM545.54 416.16c4.37-3 8.9-6.15 11.48-10.78a1.87 1.87 0 00.31-.93 1.92 1.92 0 00-.37-.9 37.16 37.16 0 00-9.33-10.07 27.21 27.21 0 00-5.2 4.8c-1.1 1.16-4.14 3-4.17 4.77 0 1 1.16 2.16 1.7 3 .73 1.08 1.42 2.18 2.08 3.3.38.55 3.85 6.59 3.5 6.81z"
        fill={color}
      />
      <path
        d="M446.14 440.62a4.45 4.45 0 01-.8 2.9 3.93 3.93 0 01-1.68 1c-9.27 3.32-20-.82-29.25 2.45-1.9.67-3.7 1.64-5.61 2.28a30.52 30.52 0 01-7 1.24c-3.27.31-6.56.51-9.84.6a23.66 23.66 0 01-7.42-.65 8.91 8.91 0 01-5.69-4.51 4.33 4.33 0 01-.28-3.21 3.46 3.46 0 01.61-1 8.77 8.77 0 012.18-1.77l3.41-2.2a22.89 22.89 0 015.17-2.74c1.35-.44 2.78-.63 4.15-1 4.79-1.4 8.45-5.2 11.85-8.85l4.64-4.95a4.67 4.67 0 011.61-1.29 4.46 4.46 0 012-.19 26.74 26.74 0 0112.65 4.24 16.39 16.39 0 003.12 1.84c2.72 1.06 6.21.26 8.72-1.08 1.19-.64.93-1 1.43-2.14s1.72-1.87 2.78-.83a2.94 2.94 0 01.66 1.26c1 3.3.62 6.85.62 10.31a4.54 4.54 0 00.2 1.6 9.05 9.05 0 00.91 1.48 3.37 3.37 0 01.19.38 10.17 10.17 0 01.67 4.83z"
        fill="#514e7f"
      />
      <path
        d="M446.14 440.62a4.45 4.45 0 01-.8 2.9 3.93 3.93 0 01-1.68 1c-9.27 3.32-20-.82-29.25 2.45-1.9.67-3.7 1.64-5.61 2.28a30.52 30.52 0 01-7 1.24c-3.27.31-6.56.51-9.84.6a23.66 23.66 0 01-7.42-.65 8.91 8.91 0 01-5.69-4.51 4.33 4.33 0 01-.28-3.21 3.46 3.46 0 01.61-1c.54 1.13.93 2.63 1.27 3.17a6.49 6.49 0 004.34 3.13 10.78 10.78 0 004-.51c8.4-2.08 17.33-2.11 25.4-5.26 2.77-1.09 5.41-2.54 8.32-3.2s6-.48 9-.73c4.74-.38 9.33-1.81 14-2.56a10.17 10.17 0 01.63 4.86z"
        fill="#464353"
      />
      <path
        d="M566.77 415.55c-.44 3.52-2.67 6.55-5.12 9.12s-5.22 4.88-7.17 7.84c-2.4 3.67-3.48 8.22-6.6 11.32a18.1 18.1 0 01-4 2.85 27.91 27.91 0 01-5.15 2.37c-4.66 1.49-9.68 1.15-14.55.79a13.09 13.09 0 01-4.62-.89 13.92 13.92 0 01-1.92-1.18 9.17 9.17 0 01-3-3 3 3 0 01-.29-2.18 5.12 5.12 0 011.39-2.12 33 33 0 013.52-3.17 21.07 21.07 0 004.58-4 12.92 12.92 0 001.77-4 35.48 35.48 0 001.29-7.65 24.25 24.25 0 01.53-5.12c.74-2.64 2.7-5 2.48-7.73a1.93 1.93 0 01.1-1.17 1.63 1.63 0 01.92-.57 16.3 16.3 0 014.78-1.11 5.57 5.57 0 014.44 1.74c.68.82 1.13 2 2.13 2.32a3.38 3.38 0 001.52.06c2.46-.25 5.06-.56 7-2.15a8.73 8.73 0 002.9-6.37c0-.91-.41-1.86 1-2 1.06-.14 1.9 1 2.44 1.7 1.95 2.61 3.95 5.34 4.68 8.52a2.51 2.51 0 01.89-.17 3.87 3.87 0 013.19 1.63 6.35 6.35 0 01.87 4.32z"
        fill="#514e7f"
      />
      <path
        d="M566.77 415.55c-.44 3.52-2.67 6.55-5.12 9.12s-5.22 4.88-7.17 7.84c-2.4 3.67-3.48 8.22-6.6 11.32a18.1 18.1 0 01-4 2.85 27.91 27.91 0 01-5.15 2.37c-4.66 1.49-9.68 1.15-14.55.79a13.09 13.09 0 01-4.62-.89 13.92 13.92 0 01-1.92-1.18 9.17 9.17 0 01-3-3 7.31 7.31 0 013-.72c2.16.12 3.74 2.16 5.81 2.79 2.95.89 5.89-1.19 8.88-1.9 1.95-.46 4-.34 5.93-1a14.66 14.66 0 004.39-2.66 22.35 22.35 0 004.69-4.52 29.05 29.05 0 002.75-5.49 78.5 78.5 0 015.56-10.64 7.52 7.52 0 011.13-1.48c.47-.43 1-.73 1.53-1.11 2-1.51 2.83-4 3.53-6.44a11.27 11.27 0 01.79-2.15 3.87 3.87 0 013.19 1.63 6.35 6.35 0 01.95 4.47z"
        fill="#464353"
      />
      <path
        d="M357.08 103.77a21.21 21.21 0 016 7c1.4 2.74 9.47 24 9 27.09 2.63-2.65 13-3.08 15.66-5.73 1.11-1.11 7.1-6.65 8-7.94s7.58-4 8.31-5.36c2.73-4.89-19.36-23.42-16.53-28.25a1.26 1.26 0 00.23-.76 1.24 1.24 0 00-.37-.59c-1.81-1.85-4.21-3-6.39-4.37s-4.28-3.28-4.87-5.8a21 21 0 00-5.65 3.82q-6.08 5.21-11.95 10.63c-1.53 1.42-4.49 3.31-5.2 5.34-.84 2.18 2.3 3.73 3.76 4.92z"
        fill="#a1616a"
      />
      <path
        d="M392.84 95.9a65.08 65.08 0 00-9.46 7.74c-2.74 2.71-5.34 5.85-6 9.64-.28 1.49-.24 3-.47 4.51-1 6.55-6.66 11.35-9.16 17.48a30.31 30.31 0 00-1.59 5.85 69.15 69.15 0 00-1.15 11.48c-.06 3.73 3.6 6.3 4.94 9.78s1.7 7.06 2.38 10.63c1.28 6.74 3.63 13.24 6 19.7 4.93 13.62 20.91 51.27 25.84 64.9 15.11-3.79 55.33-12.5 68.71-20.49 4.46-2.66-30.95-32.67-26.18-34.74a1.78 1.78 0 001.34-2.51c-4.77-20.86-19.69-38-26.46-58.31-2.35-7.05-6.57-13.07-9.77-19.77-2.9-6.07-4.45-12.78-7.92-18.55a11.7 11.7 0 00-2.53-3.15 14.92 14.92 0 00-2.79-1.69c-1.98-.96-3.82-1.53-5.73-2.5z"
        fill="#514e7f"
      />
      <circle cx={357.88} cy={77.75} r={23.65} fill="#a1616a" />
      <path
        d="M381.94 88.86a7.93 7.93 0 018.89-1.28c1.6.83 3 2.51 2.64 4.27l11.73.18a23.55 23.55 0 015.56.51 8.08 8.08 0 014.64 2.91c.14.19.3.42.54.45a.86.86 0 00.54-.18 10.18 10.18 0 015.84-1c6.34.41 12.2 3.58 17.17 7.54a5.55 5.55 0 012 2.49c.41 1.33-.08 3 1 3.95 0 11 3.78 21.28 6.3 32 .45 1.91 2.28 3.6 3.55 5.1a20.57 20.57 0 013.79 5.66c2.14 5.56-.81 12.1 1.27 17.68.88 2.36 2.58 4.3 4 6.35a16.42 16.42 0 013.42 8.2c.09 1.34-.08 2.69 0 4a24.21 24.21 0 001 5.31q1.28 4.84 2.68 9.67c1.52 5.2 3.5 10.81 8.16 13.58-11.25 1.91-23.11 3.78-33.83-.13a17.54 17.54 0 01-4.22-2.11c-3.87-2.76-5.74-7.48-7.41-11.94-1.86-5-3.75-10.09-4.13-15.41a17.69 17.69 0 00-.71-5c-1.09-2.9-4-4.65-6.64-6.26a31.88 31.88 0 01-8-6.22 12.43 12.43 0 01-3.24-9.34c.2-1.65.85-3.24.91-4.9s-.68-3.56-2.27-4c-8.19-2.48-12.1-12.18-13.92-20.54a65.94 65.94 0 01-1.05-13.1l-.11-8.53a11.26 11.26 0 01-3.68-8.09 9.61 9.61 0 00-.05-2.68 7.39 7.39 0 00-1.88-2.85 25.44 25.44 0 01-4.49-6.29zM356.75 115.9c-.27 2.64.33 5.35-.26 7.94-.23 1-.63 2-.92 2.93a17.2 17.2 0 001.09 11.13 62 62 0 005.69 9.85 16 16 0 011.82 3.41 17.65 17.65 0 01.7 3.89 120.83 120.83 0 002.78 15.72c1.12 4.48 13.84 42.78 16.8 46.33a3.77 3.77 0 002.28 1.55 4.15 4.15 0 001.94-.4l6-2.3a3.92 3.92 0 001.39-.76 3.58 3.58 0 00.86-2.36c.43-4.88-12.32-43.45-13.94-48.06-4.9-13.92-11.42-27.34-14.61-41.75-.89-4-1.36-10.16-4.29-13.35-1.21-1.32-.8-.76-2.25-.07a16.42 16.42 0 00-2.12 1.11 6.94 6.94 0 00-2.96 5.19z"
        fill="#464353"
      />
      <path
        d="M374.96 142.31c1.61 8.51 3.27 17 4.92 25.51l23.48-6.15c.19-2.46-1.12-4.74-2-7-2.14-5.37-2.19-11.35-3.92-16.87-1.31-4.2-3.59-8.06-4.82-12.29-.71-2.46-1.07-5-1.77-7.49a54.4 54.4 0 00-2.76-7.15 44.76 44.76 0 00-5.12-9.49c-3 1.12-6.2 2.42-7.91 5.13a11.08 11.08 0 00-1.46 5c-.41 5.27 1.5 10.57.87 15.81a46.5 46.5 0 00.49 14.99z"
        fill={color}
      />
      <path
        d="M403.75 255.51c1.32 5-.59 10.26-2.15 15.21a117.88 117.88 0 00-4.78 22.9 19.82 19.82 0 01-1.18 5.79c-.74 1.67-2 3.08-2.86 4.67-2.36 4.18-2.3 9.28-1.79 14.06.34 3.15.85 6.29 1.48 9.39.77 3.79 1.72 7.75.61 11.45 1.86-.41 3.12 2 3 3.89s-.73 4 .18 5.63c2.3.84 2.32 4 2.25 6.45a54.25 54.25 0 001.6 12.6q5.22 25.1 11.08 50.06c8.45 2.62 18.32 5.35 26.38 1.72 1.5-.67 3-1.74 3.34-3.36a5.86 5.86 0 00-.32-2.58l-3.82-13.9c-.93-3.36-1.86-6.83-1.37-10.28.37-2.57 1.49-5.34.23-7.61-.43-.78-1.11-1.39-1.61-2.13-2-2.93-.95-6.85-.79-10.4a8.24 8.24 0 00-.16-2.38 11.88 11.88 0 00-1.14-2.61 39.92 39.92 0 01-4.4-19.86 4.91 4.91 0 00-.35-2.59 8.38 8.38 0 01-.65-1.06 2.9 2.9 0 01.21-1.91 17.5 17.5 0 01-3.08-3 4.31 4.31 0 00.74-6.74 2.25 2.25 0 001.07-3.87c-.49-.34-1.14-.49-1.49-1-.54-.74-.1-1.77.34-2.56l2.33-4.21c1.74-3.13 2.13-7 4-10 2.68-4.37 4.43-9.24 6.16-14.06l6.73-18.57 4.53 3.93a14.32 14.32 0 013.72 4.24 18.3 18.3 0 011.21 5.08c1.66 10.08 8 18.82 10.35 28.75.52 2.21.87 4.53 2.14 6.42a14 14 0 011.22 1.84 9.76 9.76 0 01.51 3.05 14.23 14.23 0 006 10.2c2.23 1.53 5 2.58 6.21 5a9.32 9.32 0 001 2.13c1.08 1.3 3.41 1.45 3.87 3.08.26.91-.22 2 .29 2.8a2.65 2.65 0 001.11.83l6.51 3.25c7.28 3.64 11 12 16.37 18.09a39 39 0 014.9 6.48c2.32 4.15 3.39 9.36 7.31 12a11.06 11.06 0 012.84 2.11c1.23 1.62.78 3.89.89 5.93s1.67 4.47 3.61 3.85a14.23 14.23 0 000 7.55 38 38 0 0023.06-9.34c1.9-1.66 3.73-3.78 3.75-6.3a2.26 2.26 0 00-.28-1.25 3.57 3.57 0 00-1.47-1.11c-6.09-3.3-7.92-10.95-11-17.16-2.69-5.48-6.67-10.2-10-15.29-7.24-10.95-12.18-24.2-23.13-31.43-2.41-1.59-5.21-3-6.42-5.63-.67-1.47-.75-3.15-1.28-4.67s-1.8-3-3.42-3c.9-2.2.72-4.88.78-7.26a9.17 9.17 0 00-.36-3.13 15.23 15.23 0 00-1.61-3.1 29.74 29.74 0 01-4.12-16c.08-2.89.59-5.87-.28-8.63-.44-1.39-1.21-2.66-1.74-4a25 25 0 01-1.25-7.52l-.6-9.61a47.28 47.28 0 00-1.24-9.5c-2-7.46-4-38.71-10.85-42.23s-18.62 20.53-26.33 21a34.29 34.29 0 00-10 1.93c-5.13 1.92-9.43 5.5-13.62 9l-14.18 11.91c-3 2.47-5.48 4.83-8.79 6.57zM335.69 51.49c3.12-4.26 8.48-6.52 13.76-6.71s10.48 1.47 15.21 3.82a18.79 18.79 0 004.44 1.82c2.5.51 5.28-.17 7.54 1 3 1.59 3.58 5.64 3.32 9s-.89 7.09.9 10a23.12 23.12 0 011.73 2.61c.77 1.73.32 3.73-.14 5.56-1.17-1-1.83-2.51-2.87-3.67s-2.85-1.94-4.14-1.07-1.27 2.45-1.34 3.87-.43 3.12-1.77 3.58a2.87 2.87 0 01-3-1.17c-2.29-2.8-1.37-7.27-3.64-10.09-1.29-1.6-3.44-2.38-4.63-4.06-.94-1.32-1.18-3-2-4.42s-2.73-2.46-4-1.48a5.41 5.41 0 00-1.07 1.43 6.15 6.15 0 01-7.3 2.2 12.21 12.21 0 00-3.16-1.37 3.91 3.91 0 00-3.61 2 7.81 7.81 0 00-1 4.18c0 2 .36 4.13-.78 5.73a5.93 5.93 0 01-1.6 1.52c-1.67 1.07-4 1.79-5.54.57a4.16 4.16 0 01-1.24-3.88 31.37 31.37 0 011.18-4.1c.88-3.1-.27-6.59.69-9.51a30.36 30.36 0 014.06-7.36z"
        fill="#464353"
      />
      <path
        d="M348.36 122.04a3.64 3.64 0 00.22 2.17 3.45 3.45 0 001.18 1.13 24.26 24.26 0 0011.14 3.61 3.39 3.39 0 011.54.4c.94.62 1 2 .65 3.1a8.07 8.07 0 00-.71 3.3c.29 2.09 2.77 3 4.86 3.31 2.93.37 6.14.18 8.46-1.65a13.07 13.07 0 003.49-5.23c5.74-13.19 7.75-27.77 13.56-40.92a8.68 8.68 0 00.87-2.74 2.7 2.7 0 00-1.08-2.52c-1.08-.67-2.76-.29-3.49-1.34-.36-.53-.32-1.25-.64-1.81-.67-1.19-2.43-1-3.63-1.69-.94-.5-1.59-1.53-2.64-1.73a3.32 3.32 0 00-2.73 1.18c-3.41 3.18-5.2 7.69-7.1 11.95a140.09 140.09 0 01-10.16 18.84c.45-.7-2.16-6-3.18-6.23-1.79-.36-4.08 2.78-5.05 3.95a25.16 25.16 0 00-5.56 12.92z"
        fill={color}
      />
      <path
        d="M384.69 82.09a4.79 4.79 0 00-3.71 1.86c-1.07 1.39-1.28 3.23-1.55 5a43.45 43.45 0 01-5.89 15.82M389.79 86.08a5.71 5.71 0 00-4.85 2.91 16.35 16.35 0 00-1.22 4.94 27.11 27.11 0 01-4.85 10.39"
        opacity={0.1}
      />
      <path
        d="M627.45 281.58v-12.42a34.48 34.48 0 00-34.48-34.47H102.48A34.48 34.48 0 0068 269.16v22.9z"
        fill="#33323d"
      />
      <path
        d="M238.93 220.13s-1.4 86.86 14 115.44 22 152.91 22 152.91 161.44 16.7 273.94-20 351.88-51.71 351.88-51.71l-40.34-271.89s-199.29-12.78-312.66 41.29-308.82 33.96-308.82 33.96z"
        fill="#8dd070"
      />
      <path
        d="M238.93 220.13s-1.4 86.86 14 115.44 22 152.91 22 152.91 161.44 16.7 273.94-20 351.88-51.71 351.88-51.71l-40.34-271.89s-199.29-12.78-312.66 41.29-308.82 33.96-308.82 33.96z"
        opacity={0.1}
      />
      <path
        d="M274.66 251.86s-5.05 71.67 7.62 94.57 13.26 125.13 13.26 125.13 145.29 6.74 248.64-28.44 320.53-58 320.53-58l-24.68-222.35s-179.7-1.85-284.58 47.67-280.79 41.42-280.79 41.42z"
        fill="#8dd070"
      />
      <ellipse
        cx={628.34}
        cy={440.31}
        rx={37.72}
        ry={80.9}
        transform="rotate(-7.1 -366.375 1062.128)"
        opacity={0.1}
      />
      <path
        d="M751.15 12.43s-193.61 49-284.91 135.25-283.5 127.09-283.5 127.09 25.32 83.09 48.74 105.57 67.84 138.8 67.84 138.8S458.09 485.48 553.89 416s319.07-157.23 319.07-157.23z"
        opacity={0.2}
      />
      <path
        d="M179.83 262.33s25.31 83.1 48.71 105.58 67.84 138.79 67.84 138.79 158.79-33.65 254.6-103.13 319.06-157.2 319.06-157.2L748.23 0s-193.6 49-284.9 135.25-283.5 127.08-283.5 127.08z"
        fill="#8dd070"
      />
      <path
        d="M179.83 262.33s25.31 83.1 48.71 105.58 67.84 138.79 67.84 138.79 158.79-33.65 254.6-103.13 319.06-157.2 319.06-157.2L748.23 0s-193.6 49-284.9 135.25-283.5 127.08-283.5 127.08z"
        opacity={0.1}
      />
      <path
        d="M223.54 281.57s17.19 69.77 36.28 87.67 51 115 51 115 140.34-38.18 227.91-103.38 287.29-153.47 287.29-153.47L734.31 23.27S562.72 76.64 478.09 155.96 223.54 281.57 223.54 281.57z"
        fill="#8dd070"
      />
      <ellipse
        cx={585.81}
        cy={384.01}
        rx={37.72}
        ry={80.9}
        transform="rotate(-24.97 276.73 515.669)"
        opacity={0.1}
      />
      <path
        d="M640.69 293.77v345a29.83 29.83 0 01-29.84 29.83h-513a29.83 29.83 0 01-29.82-29.83V258.99c14.7 5.46 14.7 5.46 29.82 5h513a29.84 29.84 0 0129.84 29.78z"
        opacity={0.1}
      />
      <path
        d="M640.69 298.16v345a29.84 29.84 0 01-29.84 29.83h-513a29.83 29.83 0 01-29.82-29.83V263.37c14.7 5.45 14.7 5.45 29.82 5h513a29.84 29.84 0 0129.84 29.79z"
        fill="#504f60"
      />
      <path
        d="M639.23 425.71v110.33h-107a55.17 55.17 0 010-110.33z"
        opacity={0.1}
      />
      <path
        d="M640.69 422.77v110.35h-107a55.17 55.17 0 010-110.33z"
        fill="#33323d"
      />
      <circle cx={538.82} cy={480.88} r={21.51} opacity={0.1} />
      <circle cx={540.28} cy={477.96} r={21.51} fill={color} />
      <path
        d="M826.42 421.82c.85 9.21-6.12 18.15-4.09 27.17.44 1.93 1.27 3.75 1.57 5.7.84 5.36-2.35 10.43-5.4 14.91l-26.2 38.44a23.87 23.87 0 01-3.74 4.62c-5 4.46-12.52 4-19.1 5.33a32.64 32.64 0 00-12.8 5.66.82.82 0 00-.12 1.12 11 11 0 009.52 4.47c.69.91 0 2.24-1 2.89-1.41 1-3.34 1.24-3.62 3.62a3.93 3.93 0 00.48 2.4 7.45 7.45 0 004.58 3.19c9.07 2.77 18.87-2.1 25.66-8.73s11.66-15 18.32-21.75c3.69-3.73 7.88-6.93 11.68-10.55 7.58-7.22 13.47-16 19.16-24.79 1.71-2.65 3.43-5.37 4.15-8.44s.38-6.17 1.19-9.14c1.06-3.9 3.91-7 6.28-10.27 4.65-6.4 7.75-14.23 7.14-22.11s-5.5-15.67-12.94-18.35a11.5 11.5 0 00-7.25-.44c-3.05.94-5.3 3.46-7.38 5.87l-5 5.75a13.48 13.48 0 00-2.9 4.4 4.61 4.61 0 001 4.89"
        fill="#fbbebe"
      />
      <path
        d="M826.42 421.82c.85 9.21-6.12 18.15-4.09 27.17.44 1.93 1.27 3.75 1.57 5.7.84 5.36-2.35 10.43-5.4 14.91l-26.2 38.44a23.87 23.87 0 01-3.74 4.62c-5 4.46-12.52 4-19.1 5.33a32.64 32.64 0 00-12.8 5.66.82.82 0 00-.12 1.12 11 11 0 009.52 4.47c.69.91 0 2.24-1 2.89-1.41 1-3.34 1.24-3.62 3.62a3.93 3.93 0 00.48 2.4 7.45 7.45 0 004.58 3.19c9.07 2.77 18.87-2.1 25.66-8.73s11.66-15 18.32-21.75c3.69-3.73 7.88-6.93 11.68-10.55 7.58-7.22 13.47-16 19.16-24.79 1.71-2.65 3.43-5.37 4.15-8.44s.38-6.17 1.19-9.14c1.06-3.9 3.91-7 6.28-10.27 4.65-6.4 7.75-14.23 7.14-22.11s-5.5-15.67-12.94-18.35a11.5 11.5 0 00-7.25-.44c-3.05.94-5.3 3.46-7.38 5.87l-5 5.75a13.48 13.48 0 00-2.9 4.4 4.61 4.61 0 001 4.89"
        opacity={0.05}
      />
      <path
        d="M846.25 658.92c-5.72 3.49-12.85 3.7-19.5 2.89-1.07-.13-2.34-.21-3 .62-1 1.2.18 3 1.4 3.93a28.85 28.85 0 0013.39 5.51 88.17 88.17 0 0013.1.87c12 .21 24 .41 35.81-1.31a5.07 5.07 0 002-.58 3.66 3.66 0 001.48-2.25c.81-3.08-.75-6.38-3.11-8.52s-5.39-3.33-8.35-4.48l-10.4-4.05c-2.44-.95-6.35-3.47-9-3.27-4.98.36-9.69 8.22-13.82 10.64z"
        fill="#3f3d56"
      />
      <path
        d="M846.25 658.92c-5.72 3.49-12.85 3.7-19.5 2.89-1.07-.13-2.34-.21-3 .62-1 1.2.18 3 1.4 3.93a28.85 28.85 0 0013.39 5.51 88.17 88.17 0 0013.1.87c12 .21 24 .41 35.81-1.31a5.07 5.07 0 002-.58 3.66 3.66 0 001.48-2.25c.81-3.08-.75-6.38-3.11-8.52s-5.39-3.33-8.35-4.48l-10.4-4.05c-2.44-.95-6.35-3.47-9-3.27-4.98.36-9.69 8.22-13.82 10.64z"
        opacity={0.05}
      />
      <path
        d="M853.54 520.86c-4.33 5.76-8.81 12.41-7.74 19.54.58 3.84 2.73 7.23 4.31 10.78 2.14 4.82 3.26 10 4.36 15.16 1.62 7.54 3.25 15.1 4.24 22.76 1.13 8.65-4.18 33.68-4.67 42.39-.12 2.1-.37 4.37-1.83 5.88-.57.6-1.33 1.08-1.59 1.86a3.18 3.18 0 00.35 2.2c2.44 5.5 7.43 9.6 13 11.94s19 6.38 25.07 6.59a5 5 0 002.36-.31 4.59 4.59 0 001.82-2.09c4.35-8.32.17-37.9.23-47.29.06-7.83 1.91-15.61 1.57-23.43-.28-6.28-2-12.42-2.57-18.68-1-10.26.88-20.57 2.77-30.71 1.44-7.78 2.89-15.56 4.74-23.24 1.13-4.69 2.44-9.42 5-13.49 2-3.23 4.81-5.93 7.14-9a40.62 40.62 0 008-29.74c-.14-1-15 3.77-16.31 4.34a50.81 50.81 0 00-14.54 9.35c-3.44 3.28-6.15 7.66-9.16 11.33q-6.39 7.79-12.62 15.69-7.11 9.03-13.93 18.17z"
        fill="#464353"
      />
      <path
        d="M853.54 520.51c-4.33 5.76-8.81 12.42-7.74 19.54.58 3.85 2.73 7.24 4.31 10.79 2.14 4.81 3.26 10 4.36 15.15 1.62 7.55 3.25 15.11 4.24 22.76 1.13 8.66-4.18 33.68-4.67 42.39-.12 2.1-.37 4.38-1.83 5.89-.57.59-1.33 1.07-1.59 1.85a3.17 3.17 0 00.35 2.2c2.44 5.51 7.43 9.6 13 12s19 4.49 25.07 4.69a5 5 0 002.36-.31 4.52 4.52 0 001.82-2.08c4.35-8.32.17-36 .23-45.4.06-7.84 1.91-15.61 1.57-23.44-.28-6.28-2-12.42-2.57-18.67-1-10.27.88-20.58 2.77-30.72 1.44-7.77 2.89-15.55 4.74-23.24 1.13-4.69 2.44-9.42 5-13.49 2-3.23 4.81-5.93 7.14-9a40.6 40.6 0 008-29.74c-.14-1-15 3.77-16.31 4.34a51.05 51.05 0 00-14.54 9.36c-3.44 3.27-6.15 7.65-9.16 11.32q-6.39 7.79-12.62 15.7-7.11 8.96-13.93 18.11z"
        opacity={0.05}
      />
      <circle cx={805.36} cy={369.73} r={24.27} fill="#fbbebe" />
      <path
        d="M827.22 368.71a31.43 31.43 0 0020.15 14.06l-1.83 6.65c-3.16 11.42-6.71 23.5-15.53 31.42 1-3.87-.28-8-2.46-11.36s-5.24-6-8.24-8.61l-13.97-12.1a4.21 4.21 0 01-1-1.18 3.55 3.55 0 010-2.66c1.78-5.54 6.86-9 11-12.74a38.1 38.1 0 005.53-6.44c2.79-3.98 4.52.02 6.35 2.96z"
        fill="#fbbebe"
      />
      <path
        d="M773.39 345.33l-.55-4.56c3.83 1 7.47-2.26 9.92-5.63s4.72-7.34 8.45-8.75c4.53-1.7 9.33 1 13.66 3.28a43.19 43.19 0 0015.67 5.1 10.31 10.31 0 012.59.42c2.82 1 4.16 4.54 4.57 7.75s.3 6.62 1.69 9.48c1 2.17 2.86 3.78 4 5.92 3 5.74.1 13.59 3.23 19.22l-7.78-7.13c-.71-.65-1.71-1.33-2.5-.78-.62.44-.67 1.39-.92 2.15-.75 2.22-3.53 2.88-5.54 2s-3.48-2.79-5-4.53c-3.44-4.06-7.54-7.63-12.34-9.36a15.84 15.84 0 00-13 .86c-3.63 2.05-6.29 6.83-10.74 7-6.1.23-8.64-11.13-11.46-15.62a5.5 5.5 0 001.6-6.88c.41-.17 4.36-.64 4.45.06z"
        fill="#464353"
      />
      <path
        d="M473.2 203.44a47.21 47.21 0 00-5.39 5.66 11.33 11.33 0 00-2.48 7.27 3.72 3.72 0 00.7 2.13 1.8 1.8 0 002 .61 2.69 2.69 0 001-.88 48.27 48.27 0 013.36-3.64c.43-.43 1-.88 1.58-.72a1.69 1.69 0 01.68.45 4.6 4.6 0 011.41 2.2c.35 1.53-.54 3.06-1.55 4.26s-2.2 2.35-2.61 3.86a1.71 1.71 0 000 1.24 1.86 1.86 0 00.78.66 11.16 11.16 0 009.44.62c2-.81 3.78-2.2 5.84-2.92a13.5 13.5 0 002.58-1 5.36 5.36 0 002.29-3.43 14.14 14.14 0 00.15-4.21 48.41 48.41 0 00-3.44-15.83 2 2 0 00-.58-.84 1.85 1.85 0 00-1-.27c-2.56-.27-6.76-1.58-9.23-.63a6.52 6.52 0 00-2.18 1.94c-.46.51-3.35 2.8-3.35 3.47z"
        fill="#a1616a"
      />
      <path
        d="M472.39 201.18c0-2.44-3-8.33 1.77-8.72 0-2.61-3.69-4.23-3-7 .22-.92 1-1.67 1.09-2.61.3-2.67-4.52-4.12-3.72-6.68.3-1 1.36-1.58 1.59-2.57.54-2.31-3.59-3.34-3.67-5.71 0-.8.45-1.55.41-2.35 0-1-.87-1.76-1.35-2.63-1.25-2.23-.64-5.68-2.92-6.83 1.51.13 2-2.11 1.38-3.48s-1.89-2.56-1.9-4.08a6.16 6.16 0 000-1.66c-.42-1.46-2.81-1.58-3.21-3a12.78 12.78 0 01-.05-1.64c-.16-1.13-1.32-1.85-2.41-2.17a9.83 9.83 0 01-3.22-1.15c-.7-.53-1.51-1.41-2.26-1-.28.17-.42.49-.63.73-.9 1.05-2.62.59-3.75-.18-3.34-2.27-5-6.34-5.71-10.31s-.69-8.07-1.58-12a25.64 25.64 0 00-1.08-3.6c-.38-1-1.6-2.57-1.68-3.58-.18-2.3 4.58-.73 6.39-.5a28.46 28.46 0 015.19 1 55.49 55.49 0 015.31 2.33c7.22 3.19 15.94 3.58 21.74 8.94 1.91 1.76 3.52 4.07 6 4.87a27.15 27.15 0 013.36.87c2.75 1.29 3.18 4.94 4.68 7.58a14.86 14.86 0 011.23 2.2 8.48 8.48 0 01.4 2.8l.21 6.93c.34 11.61.68 23.25-.56 34.79-.4 3.81-1 7.73.13 11.39.3 1 .72 1.94 1 2.95a18 18 0 01.38 3.6l.16 4.49a1.4 1.4 0 01-.22 1 1.44 1.44 0 01-1.21.29c-6.25-.56-12.57-4.08-18.47-1.95"
        fill="#464353"
      />
      <ellipse cx={757.61} cy={535.49} rx={73.96} ry={10.69} fill="#504f60" />
      <path
        d="M905.7 654.24c-1.3-5.57-2.11-10.46-2.11-10.46s.3-6.06-2.42-10.61V620.45a38.18 38.18 0 012.83-5.87c2-3.52 0-16.42 0-16.42s-7.47-18.19-5.66-29.73S883 517.19 883 517.19a50.59 50.59 0 011.61-11.34 8.65 8.65 0 00.22-2.38v-.29.09c-.26-7.61-6.28-21.87-6.28-21.87l.81-27.18s3.84-16-2.42-37.55c-2.19-7.51-3.59-13.52-4.48-18.16-.1-.52-.2-1-.28-1.51 12.89-2 22.74-3.6 22.74-3.6s-7.48-31.29-12.53-36.77-9.09-22.69-9.09-22.69-2.63-22.09 1.62-28.55 4.85-17.6 4.85-17.6 9.69-7 10.91-10.17 3.23-10.17 3.23-13.88-1.21-7-.81-9-2.83-9.39-1.21-12.91a9.47 9.47 0 00.64-3.39.44.44 0 000-.1 47.51 47.51 0 00-.85-9.18 26.05 26.05 0 00-9.6-5.13l-.21-.84-.55-2.2a10.67 10.67 0 00-.95-.56v-.8l-.09-3.18 1.52-7.14c3-12.42-13.59-14.27-13.59-14.27a8.75 8.75 0 00-4.7-4.12c-3.33-1.17-.55 18.68 1 20 1.17 1 4.79 7.18 6.54 10.24l.28.5a7 7 0 00-.76.8l.63 4.31.1.66a17.89 17.89 0 00-2.65 4.51s3 3.32 2.43 7 .93 8.35 1 8.6c-.18-.21-2.31-2.51-4.44-1.95s-8.08 2.35-8.08 2.35-4.44.78-4 1.76-3 5.28-3 5.28l-11.94-11.32c-.12-.34-.25-.68-.35-1a27.53 27.53 0 01-1-5 27.31 27.31 0 003.82-1.21 8.24 8.24 0 003.3-2.12c1.21-1.43 1.44-3.37 1.93-5.15.94-3.48 3-6.57 4.43-9.88a32.12 32.12 0 002.25-17.78 11.6 11.6 0 00-1.83-5.2c-1.95-2.68-5.49-3.77-8.06-5.91s-4.23-5.41-7.23-7c-2.71-1.45-6-1.28-9.06-.78a48.83 48.83 0 00-16.93 6.16c-1.74 1-3.66 2.23-5.66 1.86-1.72-.31-3-1.68-4.08-3a1 1 0 01.05-.16 1 1 0 01-.13-.16 21.09 21.09 0 00-1.86 8.94c0 .48 0 1 .06 1.43V198.61a2.28 2.28 0 01-.09.63 4.55 4.55 0 01-1.12 1.61 10.79 10.79 0 00-1 1.33c0-.16.1-.32.16-.49a7.11 7.11 0 00-1.24 3.77 3.85 3.85 0 00.9 2.7 13 13 0 001.95 1.56 22.75 22.75 0 00-.36 4 23.11 23.11 0 0011.26 19.71c.14.33.27.67.4 1 1.53 4 2.68 8.7 2.17 13 0 .31-.09.63-.14.94s-.3.33-.43.5-19.73.2-24.37-4-11.72 10.27-11.72 10.27-7.07 1.37-8.49 0-9.69-.19-9.69-.19a17.83 17.83 0 00-12.33-4.5 36.19 36.19 0 00-9-5l-.22-.08a10.08 10.08 0 00-4.45-.56s-9.7-8-12.53-12.32-16.3-20.27-16.36-20.34v-.77l-.15-2.32a8.31 8.31 0 01-1.21.1c-.07-.23-.17-.5-.27-.81a44.73 44.73 0 00-2.86-6.57s0-2.93.85-3.67-.35-11.49-.35-11.49-8.74-20.43-16.57-5.18c0 0-14.8 9.87-2.38 21.37 0 0 5 2.4 5.66 4.3.46 1.23 2.14 4.68 3.27 7l.51 1-.14.12.18 1.92.08.74c-2.34 1.33-3.93 2.65-3.54 3.64a21.87 21.87 0 011.41 5.28s17.18 21.52 19.4 30.71c0 0 46.07 27.38 61.22 29.33L766 300.5a108.94 108.94 0 00-.6 11.15c.2 2.93-1.82 16.23-1.82 16.23s-2.63 19.56-4.85 22.3-1.82 14.47-1.82 14.47a98.86 98.86 0 01-3 16.62c-2.22 7.43-.61 16.63-.61 16.63s-7.67 17.6 10.71 5.67c0 0 9-.56 19.42-.92v1c0 1.34 0 2.79-.07 4.31-.14 10.08-.2 24 .26 34.48.81 18.58 6.47 55.35 6.47 55.35v18.51a25.19 25.19 0 00-.54 5.28 34.36 34.36 0 005 18.49l1.42 12.32s3.32 8.12 3.38 13a6.82 6.82 0 01-.14 1.17 7.87 7.87 0 00-.16 1.89c-.19 5.6 3.18 19 3.18 19s.2 13.49 2.22 14.28c1.73.67-2.31 7.77-3.51 9.81a2.79 2.79 0 01-.07-.38l-.25.4a9.58 9.58 0 00-.63 3.42 4.9 4.9 0 002.24 4.74c3.84 2.35 5.9 4.3 2.64 5.08a33.94 33.94 0 00-3.56.75c0-.15-.12-.31-.17-.45a2.14 2.14 0 00-1.33 2.36A10 10 0 00801 632c3.23 7.24 5.47 10 5.47 10l1.55-.17a7.56 7.56 0 01-.9 1.67 6.44 6.44 0 01-2.28 2 7.06 7.06 0 01-2.77.95 7.8 7.8 0 00-5.72 2.78c-2 2.61-3.28 6.16.7 9.28l14.45 5s24.86 3.23 23.54-2.35-2.12-10.46-2.12-10.46a22.05 22.05 0 00-2-9.89 12.85 12.85 0 00-.88-1.46l.88-.09s1.82-12.33 4.24-14.67c.56-.54.69-1 .56-1.28.25-.67-.39-1.06-1.2-1.29l-.18.49a11.79 11.79 0 00-2.41-.27s-.81-6.45 1.82-8.8a2.49 2.49 0 00.51-1.92 10.32 10.32 0 00-.28-2.63 1.29 1.29 0 01-.09.16c-1.32-5.86-5.8-15.17-5.8-15.17s-.2-5.86 1.42-8.21-.21-31.88-.21-31.88.61-14.27-1.21-20.92 2.22-14.48 2.22-14.48v-.52l-.23-2.25a.58.58 0 000 .14c-.41-3.78-1.18-10.63-1.75-13.79-.81-4.5.21-26 .21-26l3.63-9.2 6.47 15.85 6.87 21.12s3.4 4.46 3.48 9v.66a11.54 11.54 0 00-.08 1.41 12.56 12.56 0 002.09 7.53s1.82 10 4.65 12.51 2.83 7.43 2.83 7.43 3.43 14.48 5 17c1.36 2.14 1.43 8 1.42 9.83v.52s.48 5.18.46 9.52v1.55a.43.43 0 000-.11 15.06 15.06 0 01-.42 3.52l-.06.2c0-.25 0-.49.07-.73a36.75 36.75 0 00-1 9c-.09 5.2.7 11.36 3.85 15 5.46 6.26 8.89 5.48 8.89 5.48s-2.62 7.82-5.86 9.39a1.52 1.52 0 00-.34.22c0-.16-.06-.31-.08-.46a3.81 3.81 0 00-1 2.92c-.23 3.44 1.94 9 4 11.59a6.53 6.53 0 002.73 1.6 4.33 4.33 0 01-.51.31 10.86 10.86 0 01-1.11.53 5.83 5.83 0 01-1.65.43 7.7 7.7 0 00-5.72 2.78c-2 2.6-3.28 6.15.7 9.27l14.45 5s24.7 3.17 23.4-2.4z"
        transform="translate(-84.46 -118.23)"
        fill="url(#Wallet_svg__a)"
      />
      <path
        d="M726.33 545.25l-14-5c-3.86-3.12-2.63-6.67-.68-9.28a7.48 7.48 0 015.54-2.78 6.64 6.64 0 002.67-.95 6.4 6.4 0 002.22-2 10.33 10.33 0 001.59-5.41s15.36-4.5 19.56 0a11.37 11.37 0 011.86 2.73 22.85 22.85 0 012 9.89s.78 4.88 2.05 10.46-22.81 2.34-22.81 2.34zM794.77 538.35l-14-5c-3.86-3.12-2.63-6.67-.68-9.27a7.39 7.39 0 015.53-2.78 5.19 5.19 0 001.6-.43 10.61 10.61 0 001.08-.53c3.91-2.15 3.81-7.43 3.81-7.43s15.35-4.5 19.56 0a11.08 11.08 0 011.47 2c2.63 4.55 2.34 10.62 2.34 10.62s.78 4.89 2 10.46-22.71 2.36-22.71 2.36z"
        fill="#2d293d"
      />
      <path
        d="M743.24 519.82a11.37 11.37 0 011.86 2.73l-23 2.67a10.33 10.33 0 001.59-5.41s15.35-4.49 19.55.01zM813.16 514.93v4.31c-3.58 5.89-20.89 4.6-25.92 1.65a10.61 10.61 0 001.08-.53c3.91-2.15 3.81-7.43 3.81-7.43s15.35-4.5 19.56 0a11.08 11.08 0 011.47 2z"
        opacity={0.1}
      />
      <path
        d="M815.89 496.35a39.2 39.2 0 00-2.73 5.87v15.45c-3.92 6.45-24.25 4.3-27 .78s-5.62-12.68-2.53-14.27 5.67-9.39 5.67-9.39-3.33.78-8.61-5.48-3.71-20.14-2.73-23.46 0-14.47 0-14.47.2-7.83-1.36-10.37-4.89-17-4.89-17 0-4.89-2.74-7.43-4.5-12.52-4.5-12.52a12.83 12.83 0 01-1.95-8.41c.58-4.89-3.33-10.17-3.33-10.17l-6.65-21.13-6.26-15.84-3.52 9.19s-1 21.51-.19 26 2 16.43 2 16.43-3.91 7.82-2.15 14.47 1.12 20.94 1.12 20.94 1.76 29.52.19 31.87-1.37 8.22-1.37 8.22 8 17.2 5.48 19.55-1.76 8.8-1.76 8.8 5.47 0 3.13 2.35S745.1 521 745.1 521l-23.65 2.77s-2.16-2.73-5.29-10 .58-6.45 3.73-7.24 1.16-2.73-2.56-5.08-1.56-7.63-1.56-7.63 5.67-9.58 3.71-10.36-2.15-14.28-2.15-14.28-3.91-16-2.93-20.34-3.13-14.66-3.13-14.66l-1.37-12.32a33.9 33.9 0 01-4.3-23.28v-19s-5.48-36.76-6.26-55.34c-.5-11.9-.36-28.14-.2-38.27.1-5.68.2-9.45.2-9.45l84.48-8.8s-.08 3.9 1.53 12.55c.87 4.64 2.22 10.65 4.34 18.16 6.06 21.51 2.35 37.54 2.35 37.54l-.79 27.19s7.43 18.18 5.87 24.44a52.13 52.13 0 00-1.58 11.36s16.62 39.7 14.86 51.24 5.47 29.73 5.47 29.73 1.98 12.9.02 16.42z"
        fill="#464353"
      />
      <path
        d="M767.59 394.47l25.72-3.43s-14.57 14.87-25.72 3.43z"
        opacity={0.05}
      />
      <path
        d="M789.59 365.91s.88 9.1-4.69 12.52c0 0 9.97-1.56 4.69-12.52zM788.01 336.97s-21.5 17.7-29.32 16.23 29.32-16.23 29.32-16.23zM735.71 402.77s-16.33 3.71-16.82 10.27 16.82-10.27 16.82-10.27z"
        opacity={0.1}
      />
      <path
        d="M739.3 484.33s-23.07 4.3-16.52 7.23 17.31 5.28 17.31 5.28 7.45.39-.79-12.51z"
        opacity={0.05}
      />
      <g opacity={0.05}>
        <path d="M718.12 496.22a4.55 4.55 0 01-2.11-3.34l-.24.41s-2.15 5.28 1.57 7.62c.42.27.83.54 1.2.8.69-.13 1.43-.23 2.14-.41 3.15-.78 1.16-2.73-2.56-5.08zM747.84 494.65c.64-.58.62-2.08.23-4-1 1.51-1.29 3.87-1.31 5.66a4.88 4.88 0 011.08-1.66zM744.29 397.36a26.67 26.67 0 00-1.56 7.19 29 29 0 011.79-4.94zM797.13 387.1a9.18 9.18 0 00.21-2.14 57.08 57.08 0 00-.64 4c.13-.61.27-1.19.43-1.86zM743.74 466.89c.32-.48.5-2.1.58-4.35a14.77 14.77 0 00-1.13 5.49 5.25 5.25 0 01.55-1.14zM748.54 503.77a77.62 77.62 0 00-2.69 12l-23.65 2.73s-2.16-2.73-5.29-10a18.1 18.1 0 01-.67-1.72c-1.42.65-2 2.12-.12 6.41 3.13 7.24 5.3 10 5.3 10l23.65-2.74s1.76-12.32 4.1-14.67c1.2-1.13.46-1.72-.63-2.01zM717.34 468.65s.19 13.49 2.15 14.27c1-2.23 1.65-4.35.77-4.7-2-.78-2.15-14.28-2.15-14.28s-3.91-16-2.93-20.34-3.13-14.66-3.13-14.66l-1.37-12.32a33.9 33.9 0 01-4.3-23.28v-19s-5.48-36.76-6.26-55.34c-.5-11.9-.36-28.14-.2-38.27 0-1.83.06-3.45.09-4.82l-.67.07s-.11 3.76-.2 9.45c-.16 10.13-.31 26.37.2 38.26.78 18.58 6.25 55.35 6.25 55.35v19a33.92 33.92 0 004.31 23.27l1.36 12.32s4.11 10.36 3.13 14.67 2.95 20.35 2.95 20.35zM786.96 513.23a22.87 22.87 0 01-3.75-9.29c-2.41 2.18.36 10.64 3 14 2.73 3.52 23.07 5.67 27-.79v-3.72c-5.33 5.23-23.67 3.13-26.25-.2zM816.68 491.13a39.51 39.51 0 00-2.74 5.87v2.77c.45-1 1.08-2.34 2-3.92a12 12 0 00.86-4.85s-.09.09-.12.13zM788.16 494.22a38.66 38.66 0 001.93-4.65s-3.33.78-8.61-5.48c-3.84-4.55-4.06-13.15-3.51-18.77-1 3.33-2.55 17.21 2.73 23.47 3.45 4.09 6.06 5.17 7.46 5.43zM777.96 450.85a104.22 104.22 0 01.39 11.59 15.82 15.82 0 01.4-1.81c1-3.33 0-14.47 0-14.47s.2-7.83-1.37-10.37-4.84-17.02-4.84-17.02 0-4.89-2.74-7.43-4.5-12.52-4.5-12.52a12.87 12.87 0 01-2-8.41c.59-4.89-3.32-10.17-3.32-10.17l-6.65-21.12-6.26-15.84-3.53 9.2s0 1.16-.12 3l2.86-7.47 6.26 15.81 6.65 21.12s3.91 5.28 3.32 10.17a12.87 12.87 0 002 8.41s1.76 10 4.5 12.52 2.73 7.43 2.73 7.43 3.33 14.47 4.89 17 1.33 10.38 1.33 10.38z" />
      </g>
      <path
        d="M794.38 91.05l-1.47 7.14.09 3.18.06 2.34-8.16.84-.91-1.69c-1.69-3.06-5.2-9.28-6.33-10.24-1.51-1.26-4.2-21.12-1-19.94a8.53 8.53 0 014.54 4.11s16.07 1.84 13.18 14.26z"
        fill="#ffcdd3"
      />
      <path
        d="M793.06 103.71l-8.16.84-.91-1.69a7.19 7.19 0 019-1.48z"
        opacity={0.1}
      />
      <path
        d="M795.12 107.58l-10.76 2.49-.23-1.6-.61-4.31s4.26-5.68 10.42-1.42l.54 2.19z"
        fill={color}
      />
      <path
        d="M620.82 91.83l-11.49 6.16-1-2.16c-1.09-2.29-2.72-5.74-3.17-7-.68-1.9-5.47-4.3-5.47-4.3-12-11.49 2.3-21.37 2.3-21.37 7.58-15.25 16 5.18 16 5.18s1.18 10.77.35 11.49-.83 3.67-.83 3.67a45.14 45.14 0 012.77 6.57c.35 1.09.54 1.76.54 1.76z"
        fill="#ffcdd3"
      />
      <path
        d="M620.82 91.83l-11.49 6.16-1-2.16c1.62-1.36 7.37-6 9.26-5.81a13.84 13.84 0 002.72.07c.32 1.07.51 1.74.51 1.74z"
        opacity={0.1}
      />
      <path
        d="M621.99 95.3l-12.91 6.36-.26-2.77-.18-1.92s7.48-6.41 9.69-6.16a11.75 11.75 0 003.37 0l.15 2.32z"
        fill={color}
      />
      <path
        d="M763.09 138.48s-56.28 6.35-45.76 2.93c7.32-2.39 10.23-7 10.84-12.2.5-4.33-.62-9-2.09-13a56.68 56.68 0 00-5-10.17s43-23.66 34.41-2.15a34.68 34.68 0 00-2.44 10.19 28.79 28.79 0 001.11 10.32 30.73 30.73 0 008.93 14.08z"
        fill="#ffcdd3"
      />
      <path
        d="M755.46 103.86a34.68 34.68 0 00-2.44 10.19c-4.05 3.41-8.49 3.18-14.2 3.18-4.38 0-9.24 1.06-12.74-1.05a56.68 56.68 0 00-5-10.17s42.99-23.66 34.38-2.15z"
        opacity={0.1}
      />
      <circle cx={738.06} cy={95.46} r={23.27} fill="#ffcdd3" />
      <path
        d="M763.09 138.48s-56.28 6.35-45.76 2.93c7.32-2.39 10.23-7 10.84-12.2 2.8-3 8.43-5.23 12-6.39a16.84 16.84 0 0110.2-.17 14.5 14.5 0 013.71 1.72 30.73 30.73 0 009.01 14.11zM795.12 107.58l-10.76 2.49-.23-1.6a9.52 9.52 0 0110.35-3.54zM621.99 95.3l-12.91 6.36-.26-2.77a94.16 94.16 0 0113-5.77zM785.35 280.29c-21.81 3.48-52.81 7.92-57.73 6.42-4.09-1.24-17.13-1.11-28.48-.72.1-5.68.2-9.45.2-9.45l84.48-8.8s-.08 3.9 1.53 12.55z"
        opacity={0.1}
      />
      <path
        d="M807.09 275.17s-71.77 12.32-79.47 10-47.25.19-47.25.19c-17.8 11.93-10.37-5.67-10.37-5.67s-1.56-9.19.59-16.62a101.54 101.54 0 002.95-16.64s-.39-11.74 1.76-14.48 4.7-22.29 4.7-22.29 1.95-13.3 1.76-16.23.58-11.15.58-11.15l2.55-13.69c-14.67-1.95-59.26-29.33-59.26-29.33-2.15-9.19-18.77-30.7-18.77-30.7a22.63 22.63 0 00-1.37-5.28c-1.17-3.13 16.43-9.39 16.43-9.39s13.1 16 15.84 20.34 12.12 12.32 12.12 12.32a9.43 9.43 0 014.3.56l.23.07a34.86 34.86 0 018.75 5 17 17 0 0111.93 4.5s8-1.18 9.39.19 8.21 0 8.21 0 6.84-14.47 11.34-10.27 23.59 4 23.59 4c2.54-3.38 8.73-5.8 12.6-7a16.91 16.91 0 0110.2-.17 12.94 12.94 0 014 2l11.61 11.34s3.32-4.31 2.93-5.28 3.91-1.76 3.91-1.76 5.67-1.76 7.82-2.35 4.12 1.74 4.3 1.95c-.07-.25-1.54-5-1-8.6s-2.35-7-2.35-7c6.84-16.82 22.29-2.74 22.29-2.74s1.76 9.19.2 12.71 1.56 10.95 1.17 12.91.79 5.28.79 9-2 10.75-3.13 13.88-10.56 10.17-10.56 10.17-.59 11.15-4.7 17.6-1.53 28.51-1.53 28.51 3.91 17.21 8.8 22.69 12.12 36.71 12.12 36.71z"
        fill="#3f3d56"
      />
      <path
        d="M702.47 146.49s-2.15-6.45-4.11-7a45.24 45.24 0 01-5.67-2.54l1.26-2.41s7.34 2 8.52 4.17 0 7.78 0 7.78zM663.16 132.22c-.39 2-17.8 3.71-17.8 3.71l8.8-8.82.22.08a34.86 34.86 0 018.78 5.03z"
        opacity={0.1}
      />
      <circle cx={612.8} cy={105.38} r={1.56} fill="#575988" />
      <circle cx={614.8} cy={108.51} r={1.56} fill="#575988" />
      <circle cx={616.76} cy={111.4} r={1.56} fill="#575988" />
      <circle cx={618.81} cy={114.52} r={1.56} fill="#575988" />
      <circle cx={803.15} cy={114.35} r={1.27} fill="#575988" />
      <circle cx={803.35} cy={117.24} r={1.27} fill="#575988" />
      <circle cx={803.52} cy={120.12} r={1.27} fill="#575988" />
      <path
        d="M702.54 199.49c-.19-.23 43.9 55.44 78.12 23.27.03.01-54.04 7.34-78.12-23.27zM677.24 228.43s26.38.72 29.14 8.31v7.9a5.06 5.06 0 01-4.91 0c-2.66-1.44-18.61-9.54-24.23-5.64z"
        opacity={0.1}
      />
      <path
        d="M677.73 228.43s25.23.69 27.87 7.93v7.52a4.84 4.84 0 01-4.7 0c-2.54-1.36-17.79-9.09-23.17-5.37z"
        fill="#3f3d56"
      />
      <path
        d="M691.64 171.15a84.88 84.88 0 0010.23 17.55 68.86 68.86 0 0016 15.47s-25.79-29.4-26.23-33.02zM683.01 140.5s4.4 19 15.74 25.45zM676.26 142.42c-.11-.35-3.91 15 14.62 23.53 0 0-7.87-2.67-14.62-23.53zM791.45 129.68c-.29 0 9.14 6 11.71 8.8 0 0-6.14-9.2-11.71-8.8z"
        opacity={0.1}
      />
      <path
        d="M731.77 116.55a3.67 3.67 0 004 3.63c7.09.44 14.48.75 21-2a8 8 0 003.2-2.12c1.16-1.43 1.39-3.37 1.86-5.15.92-3.48 2.88-6.57 4.29-9.88a33.1 33.1 0 002.31-17.75 12 12 0 00-1.78-5.19c-1.88-2.69-5.31-3.78-7.8-5.92s-4.09-5.41-7-7c-2.62-1.46-5.83-1.28-8.78-.78a46.09 46.09 0 00-16.38 6.15c-1.69 1-3.54 2.23-5.48 1.86-1.7-.32-2.94-1.75-4-3.09a21.66 21.66 0 00-1.67 10.15 4.36 4.36 0 01-.05 1.53 4.6 4.6 0 01-1.09 1.61c-1.75 2-2.84 5.25-1.11 7.31.75.89 1.91 1.38 2.64 2.29 1.31 1.63.87 4 .84 6.08a3.13 3.13 0 00.52 2.06 3 3 0 002.87.69 7.81 7.81 0 013.06-.29 5.13 5.13 0 012.66 2c3.23 4.21 4.51 8.79 5.89 13.81z"
        fill="#2d293d"
      />
      <g opacity={0.1}>
        <path d="M760.8 114.29a8 8 0 01-3.2 2.12c-6.56 2.73-13.94 2.42-21 2a4.92 4.92 0 01-2.19-.49c-1.08-.63-1.49-1.95-1.82-3.15-1.38-5-2.65-9.59-5.93-13.76a5.14 5.14 0 00-2.66-2.05 8.2 8.2 0 00-3.06.29 3 3 0 01-2.87-.68 3.13 3.13 0 01-.52-2.06c0-2.1.47-4.45-.84-6.08-.73-.91-1.89-1.4-2.64-2.3a4.56 4.56 0 01-.45-4.66c-1.25 2-1.78 4.51-.33 6.23.75.89 1.91 1.38 2.64 2.29 1.31 1.64.87 4 .84 6.08a3.11 3.11 0 00.51 2.06 3 3 0 002.88.69 7.81 7.81 0 013.06-.29 5.13 5.13 0 012.66 2c3.27 4.17 4.55 8.75 5.93 13.77a5 5 0 001.73 3.17 4.85 4.85 0 002.2.48c7.09.44 14.48.76 21-2a7.92 7.92 0 003.2-2.12 6.11 6.11 0 001-1.88c.01.13-.06.24-.14.34zM715.54 80.38a3.42 3.42 0 00.71-1.18 4.36 4.36 0 000-1.53 21.69 21.69 0 011.09-8.42l-.13-.15a21.5 21.5 0 00-1.67 10.14 7.23 7.23 0 010 1.14z" />
      </g>
      <path
        d="M727.62 130.65s29.07 3.86 31.68-.51M784.13 118.62s16.16 0 19.71 6.08"
        opacity={0.1}
      />
      <path
        d="M874.54 658.77a25.63 25.63 0 01-17.45 6.52c-1.64 0-3.91.31-3.92 1.95a2.75 2.75 0 00.48 1.34 16.05 16.05 0 009 7.07c3.5 1.06 7.24.88 10.89.69l10.65-.55c2-.11 4-.21 6-.46s4.18-.66 6.27-1a82 82 0 0115.51-.72c1.38.05 3 0 3.82-1s.4-2.91.09-4.41c-.64-3.09 0-6.33-.59-9.43-1-5.44-5.71-9.61-10.87-11.58-4.8-1.82-13.3-3.91-17.84-.87-4.79 3.19-7.72 8.52-12.04 12.45z"
        fill="#3f3d56"
      />
      <path
        d="M885.12 476.51c.94 4.47 5.27 7.89 5.39 12.45.11 3.66-2.5 6.73-4.38 9.86a65.78 65.78 0 00-4.47 10.12 154.59 154.59 0 01-13.12 26.1c-2.5 4-5.3 8.27-4.73 12.92a19.36 19.36 0 002.27 6.18l7.5 14.9a43.15 43.15 0 013.83 9.41c.65 2.83.71 5.76 1.09 8.64 1.18 9.14 5.47 18.34 2.93 27.2-.22.76-1 1.68-1.61 1.15 2.48 4.63 4.47 9.29 4.28 14.54-.1 2.75-.94 5.62.07 8.18.43 1.07 1.18 2.07 1.17 3.22 0 .76-.35 1.47-.43 2.21-.21 2.11 1.73 3.87 3.74 4.54s4.2.62 6.23 1.23c3.9 1.17 6.69 4.53 10 6.86a21.29 21.29 0 0011.52 3.75 2.9 2.9 0 001.7-.34 2.75 2.75 0 00.94-2.06 11.44 11.44 0 00-4.12-9.94 4.5 4.5 0 01-1.53-1.6 3.86 3.86 0 01-.14-1.79 134.78 134.78 0 00-.44-24.6 37.36 37.36 0 01-.39-7.83c.21-2.18.87-4.34.63-6.51s-1.35-4.15-2-6.24c-1.16-3.72-.84-7.72-1-11.61-.2-6.76-1.75-13.4-3.29-20-.61-2.59-1.28-5.3-3.11-7.22-1.56-1.63-4.08-3.19-3.49-5.36a6.35 6.35 0 011.43-2.13 8.55 8.55 0 001.78-6.52 2.93 2.93 0 003.37-1.58c12.18-5.75 22-17.25 26.38-30a9.9 9.9 0 011.18-2.68c1.13-1.58 3.09-2.26 4.83-3.13 5.46-2.75 9.23-7.9 12.69-12.94 2-2.92 4-5.94 4.9-9.38a30.74 30.74 0 00.67-6.77l.31-11.75a6.35 6.35 0 00-.22-2.3 5.75 5.75 0 00-1.27-1.86 22.59 22.59 0 00-12.46-6.72c-3.2-.57-6.47-.46-9.71-.73-6.28-.52-12.48-2.47-18.76-2-9.87.73-18.66 7.57-23.31 16.31-1.63 3.08-3.35 5.76-6.85 5.82z"
        fill="#464353"
      />
      <path
        d="M830.32 400.11a13.13 13.13 0 01-.72 5.35c-.77 1.64-2.7 2.92-4.39 2.25.51-1.15-.84-2.46-2.1-2.32a3.93 3.93 0 00-2.77 2.38 8.85 8.85 0 00-.8 5.43c.4 2.3 1.73 4.51 1.38 6.82-.28 1.92-1.69 3.83-.94 5.61a9.09 9.09 0 001.81 2.17 6.12 6.12 0 01-.65 8.4l18.92.38c-.69 3.16.73 6.39 2.35 9.2a58 58 0 0043.24 28.23 3.76 3.76 0 00-.91 5.75c1.54 1.53 4.15 1.34 6.08.35s3.44-2.63 5.2-3.9a16 16 0 0110.69-2.88c2.37.23 4.67 1 7.05 1.12 7 .37 13-4.67 19.74-6.73 4.91-1.51 10.48-1.51 14.6-4.58 1.78-1.32 3.24-3.49 2.72-5.63a9.41 9.41 0 00-2-3.31c-2.37-3.07-3.77-6.76-5.47-10.25a61.31 61.31 0 00-13.67-18.32 122.31 122.31 0 00-13.56-10.28 23.12 23.12 0 00-3.66-2.21c-1.66-.73-3.5-1.08-5-2-2.22-1.4-3.5-3.87-5.21-5.86-3.75-4.38-9.51-6.39-14.13-9.83-3.1-2.31-5.84-5.35-9.54-6.46-1.8-.55-3.71-.59-5.51-1.13-4.09-1.24-7.07-4.87-11.08-6.34-3.17-1.16-6.67-.86-10-1.27a23.41 23.41 0 01-10.45-3.98 12.4 12.4 0 00-3.33-1.94c-5.07-1.54-5.48 7.9-6 11.17-.67 4.86-1.89 9.69-1.89 14.61z"
        fill={color}
      />
      <path
        d="M835.26 431.77c.85 9.22-6.11 18.15-4.08 27.18.43 1.92 1.26 3.75 1.56 5.7.85 5.35-2.35 10.42-5.4 14.9L801.14 518a24.18 24.18 0 01-3.74 4.62c-5 4.45-12.52 4-19.1 5.32a33 33 0 00-12.8 5.66.83.83 0 00-.16 1.15 11 11 0 009.51 4.47c.69.9 0 2.24-.95 2.89-1.4 1-3.34 1.23-3.62 3.62a4 4 0 00.48 2.4 7.47 7.47 0 004.58 3.18c9.07 2.78 18.87-2.1 25.66-8.73s11.66-15 18.32-21.74c3.69-3.74 7.88-6.93 11.68-10.55 7.58-7.23 13.48-16 19.16-24.79 1.71-2.65 3.44-5.37 4.15-8.44s.38-6.18 1.19-9.15c1.06-3.89 3.91-7 6.28-10.26 4.65-6.4 7.76-14.23 7.14-22.12s-5.5-15.67-12.94-18.35a11.63 11.63 0 00-7.25-.44c-3.05.94-5.3 3.46-7.38 5.88l-5 5.74a13.39 13.39 0 00-2.81 4.41 4.61 4.61 0 001 4.9"
        fill="#fbbebe"
      />
      <path
        d="M848.54 393.95c-3.44.2-7.23.54-9.66 3a13.75 13.75 0 00-2.44 3.82c-2.36 4.81-4.66 9.84-4.83 15.2-.14 4.28 1.1 8.47 1.75 12.7.54 3.52-.83 7.11-1.09 10.67 4.27-1.31 9.91-3.09 13.78-5.3 2.64-1.51 5.19-3.23 8.07-4.19 4.11-1.37 11 1 14.91 2.9.21-2.74-1.85-7.52-1.63-10.27a11.47 11.47 0 01.61-3.4 20.62 20.62 0 012.07-3.29 13.46 13.46 0 00-1.21-15.77c-3.47-3.9-8.9-5.36-14.08-6a60.9 60.9 0 00-9.83-.34"
        fill={color}
      />
    </svg>
  );
};

SvgWallet.propTypes = {
  color: PropTypes.string
};
SvgWallet.defaultProps = {
  color: "primary"
};
const MemoSvgWallet = React.memo(SvgWallet);
export default MemoSvgWallet;
