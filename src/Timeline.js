import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgTimeline = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 989 781.43"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Timeline_svg__a"
          x1={949.45}
          y1={825.55}
          x2={949.45}
          y2={497.17}
          gradientTransform="rotate(-2.31 725.2 516.777)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M490.5 203.94c45.59-8 98.57-6.61 155.7 0-11.59-65.73-12.12-130.11 0-192.93H490.5a543.76 543.76 0 000 192.93z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M591.14 17.77h-54.16V0h54.16z" />
      <path
        d="M369.3 584.87c45.59-8 98.57-6.61 155.7 0-11.59-65.73-12.12-130.11 0-192.93H369.3a543.76 543.76 0 000 192.93z"
        opacity={0.1}
      />
      <path
        d="M362.3 575.87c45.59-8 98.57-6.61 155.7 0-11.59-65.73-12.12-130.11 0-192.93H362.3a543.76 543.76 0 000 192.93z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M462.92 389.7h-54.16v-17.77h54.16z" />
      <path
        d="M228.5 260.94S288.89 90.13 423.43 88.62"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M435.5 88.94c-5.73 2-12.85 5.41-17.31 9.12l3.66-9.43-3.22-9.59c4.28 3.91 11.24 7.68 16.87 9.9z"
        fill="#3f3d56"
      />
      <path
        d="M233.5 325.94s-5.46 137.44 73.06 156.15"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M318.5 483.94c-5.95 1.16-13.48 3.57-18.41 6.62l4.93-8.83-1.86-9.94c3.7 4.46 10.07 9.15 15.34 12.15z"
        fill="#3f3d56"
      />
      <path
        d="M249.5 280.94s424.62-70.78 497.49 16.78"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M753.5 307.94c-4.9-3.57-11.79-7.46-17.37-9l9.82-2.39 6-8.13c-.73 5.76.17 13.62 1.55 19.52z"
        fill="#3f3d56"
      />
      <ellipse
        cx={494.5}
        cy={748.43}
        rx={494.5}
        ry={33}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M928.76 502.46c-40.39 22.6-80.61 57.11-120.74 98.3-32.52-58.28-72.74-108.54-121.81-149.61l120.74-98.3a543.88 543.88 0 01121.81 149.61z"
        opacity={0.1}
      />
      <path
        d="M930.76 494.46c-40.39 22.6-80.61 57.11-120.74 98.3-32.52-58.28-72.74-108.54-121.81-149.61l120.74-98.3a543.88 543.88 0 01121.81 149.61z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M723.988 399.864l42-34.194 11.22 13.78-42.001 34.194z"
      />
      <path
        fill={color}
        d="M750.788 466.478l74.448-60.61 8.207 10.082-74.447 60.61z"
      />
      <path
        d="M1044.15 795a9.78 9.78 0 00-2.17-2.42c-4.37-4.12-6.4-10.19-7.48-16.12s-1.39-12-3.12-17.82a59.18 59.18 0 00-3.52-8.67c-1-2.13-2.26-6.33-4.09-7.82a2.83 2.83 0 00-1.26-.62 14.71 14.71 0 00-3.62-4.81c-2.86-2.59-6.35-4.65-8.26-8a18 18 0 00-1.93-3.3c-1.29-1.42-3.33-2-4.52-3.5-1.55-1.94-1.2-4.71-1-7.19s0-5.43-2.14-6.72c-1.28-.79-2.93-.72-4.26-1.41-2-1-2.79-3.53-2.75-5.78s.74-4.44.92-6.68c.56-7.16-4.16-14.28-2.34-21.22.69-2.63 2.27-4.92 3.44-7.36a16.1 16.1 0 001-2.54 35.35 35.35 0 009.74 2.34c-5.51-12.35-4.11-26.72-6.68-40l.33-.46a20.78 20.78 0 004.22-11.85c0-5-2.31-9.57-3.35-14.4-.89-4.12-.85-8.41-2-12.46a37.65 37.65 0 00-3.16-7.22q-1.87-3.46-3.93-6.82-1.92-6.36-3.85-12.72c-1.8-6-3.65-12-7.15-17.14-1.28-1.89-1.67-5.7-3.64-6.85a8.81 8.81 0 00-5.2-.9c-2.78-1.56-5.22-3.81-5.57-6.89a6.65 6.65 0 01.2-2h.34c4.4-.41 6.63-4.29 8.92-7.68 3.7-5.51 2.29-12.95 0-19.21a13.08 13.08 0 00-3-5.29c-3.21-3-8.29-2.33-12.43-3.78a40.15 40.15 0 00-4.11-1.55c-2.75-.65-5.63.25-8.15 1.52s-4.87 2.91-7.51 3.92-5.9 1.79-6.55 4.5a5 5 0 00.22 2.73 10.2 10.2 0 003.09 4.45 17.82 17.82 0 0010.87 24.83c.76 1.21 1.47 2.45 2.12 3.73 1.16 2.24 2.14 4.88 1.74 7.28a22.35 22.35 0 00-2 2.44c-2.87 4-4.5 8.7-6 13.37a141.37 141.37 0 00-4.83 18.28c-2.44 5.18-5.42 10.14-7.19 15.59a35.2 35.2 0 01-9.38-1.25l-8.44-1.92c-2.94-.66-6-1.39-8.3-3.32-1.22-1-2.17-2.33-3.41-3.33s-3.73-2.15-5.09-1.33a4 4 0 00-.69.53c-1.24-2.51-4.28 3.89-5.72 1.52-2.06-3.41-9.29.54-13.19-.1a9.25 9.25 0 00-6.79 1.57c-2.28 1.63-3.71 5-2 7.28a12.51 12.51 0 001.39 1.43 28.59 28.59 0 013.09 4.28c3.08 4.43 10.17.52 15.55 1.54-.12.34 3.77-8.09 3.65-7.74-.71 2.07-2.22 4.59-1.84 6.75l37.54 12.85a22.86 22.86 0 007.56 1.66 12.71 12.71 0 003-.39v1.99c.1 13.19-2 26.3-2.39 39.48-.07 2.4 0 5 1.52 6.88 1.7 2.06 4.72 2.46 7.35 2a16.65 16.65 0 001.86-.41 69.19 69.19 0 011.92 10.1l2.49 17.76a27.09 27.09 0 01.39 5.54c-.29 4.18-2.5 7.94-4.1 11.81s-2.55 8.49-.45 12.11c.66 1.12 1.57 2.08 2.16 3.24a13.1 13.1 0 011 5.67q.23 8.1.44 16.18a1.89 1.89 0 00-1.26.26c-2.08 1.61-1.85 9.33-2 11.72-.16 4 0 8.08-.22 12.12a72.32 72.32 0 01-2.68 16.13 10.29 10.29 0 01-2.29 4.61 9.86 9.86 0 01-4.07 2.11 46.48 46.48 0 01-15.41 2.09c-2.11-.06-4.31-.27-6.27.54s-3.54 3-2.83 5c.61 1.68 2.46 2.48 4.13 3.11a66.29 66.29 0 0111 5 30.8 30.8 0 004.25 2.42 21.91 21.91 0 004.38 1.08l17.73 3c3.63.63 8 1 10.31-2 1.25-1.62 1.43-3.82 1.37-5.87-.1-4-.9-8.08-.38-12.07a37.24 37.24 0 011.86-6.94l5.3-15.47c1.78-5.27 3.58-10.58 4.27-16.1.25-2 .23-4.27-1.3-5.53a3.69 3.69 0 00-1.32-.68c-.06-4.82-.69-9.64-.42-14.46.07-1.21.19-2.41.29-3.61a17.21 17.21 0 012.47 2.92c1.71 2.67 2.34 6.21 4.95 8 2.22 1.51 5.51 1.44 7.07 3.64a10.34 10.34 0 011.12 2.7 19.37 19.37 0 004 6.36 32.28 32.28 0 002.47 6.34l4.4 9.3a106 106 0 005 9.77 27.75 27.75 0 013.35 6.46c1.41 4.95-.89 10.37-4.53 14s-8.44 5.73-13.17 7.68a3.58 3.58 0 00-1.34.8 2.59 2.59 0 00-.61 1.74c0 2.31 1.9 4.28 4.08 5a15.55 15.55 0 006.83.25c12.78-1.55 25.52-4.68 36.82-10.88a13.21 13.21 0 004.39-3.39 5.13 5.13 0 00.75-5.31z"
        transform="translate(-105.5 -59.28)"
        fill="url(#Timeline_svg__a)"
      />
      <path
        d="M884.64 511.5q3.2 4.9 6 10.06a37.17 37.17 0 013.16 7.16c1.16 4 1.13 8.27 2 12.36 1 4.8 3.34 9.38 3.34 14.29a20.56 20.56 0 01-4.22 11.76 56.28 56.28 0 01-8.82 9.11 187.68 187.68 0 01-12.48-61.21c-.1-2.91-.12-5.9.94-8.61.65-1.69 3.77-6.35 5.78-4.52.73.67.92 3.68 1.37 4.69a36.86 36.86 0 002.93 4.91z"
        fill="#2f2e41"
      />
      <path
        d="M884.64 511.5q3.2 4.9 6 10.06a37.17 37.17 0 013.16 7.16c1.16 4 1.13 8.27 2 12.36 1 4.8 3.34 9.38 3.34 14.29a20.56 20.56 0 01-4.22 11.76 56.28 56.28 0 01-8.82 9.11 187.68 187.68 0 01-12.48-61.21c-.1-2.91-.12-5.9.94-8.61.65-1.69 3.77-6.35 5.78-4.52.73.67.92 3.68 1.37 4.69a36.86 36.86 0 002.93 4.91z"
        opacity={0.1}
      />
      <path
        d="M777.29 522.42c-3.91-.64-8.25-.33-11.29 2.21a9.32 9.32 0 00-3.24 6.16c-.26 2.78 1.35 6.06 4.13 6.28a13.17 13.17 0 002-.13 29.88 29.88 0 015.24.43 21.39 21.39 0 0018.23-7.36c2.39-2.95-.76-4.29-3.58-4.89-3.86-.82-7.63-2.06-11.49-2.7z"
        fill="#fbbebe"
      />
      <path
        d="M844.17 612.72l2.48 17.62a26.7 26.7 0 01.38 5.5c-.29 4.15-2.5 7.88-4.09 11.72s-2.56 8.43-.45 12c.65 1.11 1.56 2.06 2.15 3.21a13 13 0 011 5.64l.68 25a157.33 157.33 0 0023.18-.12 1.3 1.3 0 00.84-.27 1.34 1.34 0 00.29-.9c.34-5.85-.68-11.71-.35-17.56.12-2.14.42-4.28.46-6.42.12-8.71-4.18-17.24-2.88-25.86a57.51 57.51 0 011.6-6.43c4.11-14.95 3.24-30.76 2.33-46.24a1.1 1.1 0 00-.2-.71 1.13 1.13 0 00-.54-.29 28.48 28.48 0 00-25.78 4.91c-1.09.88-3.84 1.72-4.56 2.77-1 1.47.31 2.92.89 4.48a56.76 56.76 0 012.57 11.95z"
        fill="#3f3d56"
      />
      <path
        d="M844.17 612.72l2.48 17.62a26.7 26.7 0 01.38 5.5c-.29 4.15-2.5 7.88-4.09 11.72s-2.56 8.43-.45 12c.65 1.11 1.56 2.06 2.15 3.21a13 13 0 011 5.64l.68 25a157.33 157.33 0 0023.18-.12 1.3 1.3 0 00.84-.27 1.34 1.34 0 00.29-.9c.34-5.85-.68-11.71-.35-17.56.12-2.14.42-4.28.46-6.42.12-8.71-4.18-17.24-2.88-25.86a57.51 57.51 0 011.6-6.43c4.11-14.95 3.24-30.76 2.33-46.24a1.1 1.1 0 00-.2-.71 1.13 1.13 0 00-.54-.29 28.48 28.48 0 00-25.78 4.91c-1.09.88-3.84 1.72-4.56 2.77-1 1.47.31 2.92.89 4.48a56.76 56.76 0 012.57 11.95z"
        opacity={0.1}
      />
      <path
        d="M890.5 607.43c-1.17 2.43-2.74 4.7-3.44 7.31-1.82 6.89 2.89 14 2.33 21.06-.18 2.22-.87 4.4-.92 6.63s.77 4.7 2.75 5.73c1.33.69 3 .62 4.25 1.4 2.11 1.28 2.35 4.22 2.14 6.67s-.56 5.21 1 7.14c1.19 1.49 3.23 2.06 4.51 3.47a17.25 17.25 0 011.93 3.27c1.91 3.33 5.4 5.38 8.26 7.94s5.28 6.47 4 10.09c-.94 2.67-3.58 4.3-6.12 5.56a64.9 64.9 0 01-14.57 5.14 3.39 3.39 0 01-1.67.09 3.57 3.57 0 01-1.46-1c-2.95-2.88-6-5.91-7.36-9.81a10.21 10.21 0 00-1.12-2.68c-1.56-2.18-4.85-2.11-7.07-3.61-2.6-1.77-3.23-5.29-4.93-7.94s-4.19-4.22-6-6.56c-3.06-3.88-3.81-9.06-6-13.49a62.76 62.76 0 01-2.86-5.6 30.39 30.39 0 01-1.37-7.24c-1.41-11.67-5-23.44-2.74-35 .5-2.55 1.27-5 1.59-7.62.55-4.54-.32-9.17.35-13.7a3.73 3.73 0 011.51-2.9 4 4 0 011.72-.36 118.6 118.6 0 0117.78.4c3 .3 6.36.91 8.16 3.35 1.53 2.1 1.45 4.92 1.94 7.47.61 3.13 2.2 4.85 3.87 7.31s.81 4.94-.46 7.48z"
        fill="#3f3d56"
      />
      <path
        d="M867.5 688.72c1.58 0 3.33-.1 4.55.91 1.52 1.24 1.54 3.53 1.3 5.48-.7 5.48-2.49 10.75-4.28 16l-5.32 15.6a37 37 0 00-1.86 6.89c-.52 4 .28 8 .38 12 0 2-.13 4.22-1.38 5.82-2.26 2.91-6.67 2.57-10.3 2l-17.71-3a21.09 21.09 0 01-4.38-1.08 28.69 28.69 0 01-4.25-2.39 65.38 65.38 0 00-11-5c-1.66-.63-3.52-1.42-4.12-3.09-.71-2 .87-4.19 2.83-5s4.15-.6 6.27-.53a46.72 46.72 0 0015.4-2.09 9.84 9.84 0 004.06-2.09 10.1 10.1 0 002.29-4.57 70.25 70.25 0 002.68-16c.21-4 .07-8 .23-12 .1-2.38-.13-10 1.95-11.63 1.59-1.22 8.13 2.14 10.28 2.64a50 50 0 0012.38 1.13zM925.81 699.81c1.73 5.74 2 11.79 3.12 17.68s3.1 11.91 7.47 16a9.69 9.69 0 012.17 2.4 5.06 5.06 0 01-.75 5.23 13.23 13.23 0 01-4.39 3.36c-11.29 6.17-24 9.27-36.81 10.81a15.36 15.36 0 01-6.82-.24c-2.18-.74-4.11-2.7-4.07-5a2.53 2.53 0 01.6-1.72 3.62 3.62 0 011.35-.8c4.72-1.93 9.51-4 13.16-7.62s5.94-9 4.53-13.86a27 27 0 00-3.35-6.41 108.53 108.53 0 01-5-9.7l-4.4-9.23c-1.29-2.7-2.59-5.48-2.81-8.46a40.42 40.42 0 0016.22-2.6 25.24 25.24 0 006.67-4c1.7-1.42 3.25-4.07 5.54-2.21 1.84 1.48 3 5.64 4.08 7.76a57.3 57.3 0 013.49 8.61z"
        fill="#2f2e41"
      />
      <path
        d="M861.33 470.63c.44 3.83 4.16 6.37 7.71 7.88l-22.47 7.21c1.45-2.78.28-6.17-1.16-9a50.1 50.1 0 00-4-6.4c-.22-.32-.47-.71-.31-1.06a1.12 1.12 0 01.63-.49c4.62-2.06 9.38-4.19 14.43-4.94 1.46-.22 4.22-.8 5.31.68s-.35 4.35-.14 6.12z"
        fill="#fbbebe"
      />
      <path
        d="M861.33 470.63c.44 3.83 4.16 6.37 7.71 7.88l-22.47 7.21c1.45-2.78.28-6.17-1.16-9a50.1 50.1 0 00-4-6.4c-.22-.32-.47-.71-.31-1.06a1.12 1.12 0 01.63-.49c4.62-2.06 9.38-4.19 14.43-4.94 1.46-.22 4.22-.8 5.31.68s-.35 4.35-.14 6.12z"
        opacity={0.1}
      />
      <circle cx={848.27} cy={456.12} r={17.62} fill="#fbbebe" />
      <path
        d="M833.04 601.12c1.71 2 4.72 2.44 7.35 2 6.15-1 11.18-5.53 17.2-7.17 7.38-2 15.19.58 22.16 3.72s13.9 6.95 21.52 7.55c-6.89-15.36-2.95-33.85-9.54-49.34-1.61-3.79-3.86-7.44-4.22-11.54-.45-5.09 2.09-10 2.48-15.06.36-4.51-1-9-2.3-13.29q-2.41-7.92-4.82-15.85c-1.8-5.91-3.65-11.91-7.14-17-1.29-1.87-1.68-5.65-3.64-6.79-4.28-2.47-10.77.65-15.41.82s-8.87 3.47-11.58 7.19c-2.87 4-4.5 8.64-6 13.28a125.91 125.91 0 00-5.33 21.23c-.15 1.08-.28 2.16-.38 3.25-1 10.27.46 20.6.54 30.91v.07c.1 13.09-2 26.1-2.39 39.18-.04 2.44-.04 5.01 1.5 6.84z"
        fill="#2f2e41"
      />
      <path
        d="M833.92 555.04c3.45-.87 6.57-3.1 9.25-5.53a39 39 0 006.14-6.95 50.14 50.14 0 005.29-11.17 129.16 129.16 0 007-32.27c.26-3 .34-6.21-1.45-8.59a7.24 7.24 0 00-8.75-2.13c-2.36 1.16-3.89 3.49-5.31 5.71-2.81 4.43-5.64 8.9-7.45 13.82-.8 2.18-1.39 4.43-2.17 6.62a62 62 0 01-2.74 6.33c-.15 1.08-.28 2.16-.38 3.25-.93 10.27.49 20.59.57 30.91z"
        opacity={0.1}
      />
      <path
        d="M860.1 488.63c1.79 2.38 1.71 5.63 1.46 8.59a129.35 129.35 0 01-7 32.28 49.43 49.43 0 01-5.29 11.16 38.67 38.67 0 01-6.14 6.95c-3.4 3.11-7.54 5.87-12.15 5.92a23.42 23.42 0 01-7.56-1.65l-37.51-12.75c-.38-2.14 1.13-4.63 1.84-6.69l2-5.94c.57-1.64 1.23-3.4 2.72-4.29s3.85.33 5.09 1.31 2.18 2.3 3.4 3.31c2.31 1.92 5.36 2.63 8.3 3.29l8.43 1.9a35.6 35.6 0 009.38 1.24c2.35-7.17 6.82-13.5 9.35-20.61.78-2.19 1.37-4.44 2.18-6.61 1.8-4.93 4.64-9.4 7.45-13.82 1.41-2.23 2.94-4.56 5.31-5.71a7.21 7.21 0 018.74 2.12zM853.89 460.09a9 9 0 00-1.06-3.3 2.79 2.79 0 00-3-1.32c-1.76.55-2.35 3.28-4.19 3.37-1.24.06-2.13-1.2-2.52-2.39s-.6-2.52-1.53-3.36a5.68 5.68 0 00-2.18-1c-4.27-1.35-8.68-3.85-10.1-8.1a4.83 4.83 0 01-.23-2.71c.65-2.69 4-3.49 6.55-4.47s5-2.63 7.5-3.88 5.4-2.16 8.15-1.52a42.56 42.56 0 014.11 1.54c4.14 1.43 9.21.76 12.42 3.75a12.93 12.93 0 013 5.25c2.24 6.21 3.66 13.59-.05 19.06-2.29 3.37-4.51 7.22-8.91 7.62-5.12.45-7.15-4.22-7.96-8.54z"
        fill="#2f2e41"
      />
      <g opacity={0.1}>
        <path d="M846.07 454.33c-.39-1.18-.6-2.52-1.52-3.36a5.68 5.68 0 00-2.18-1c-4.28-1.35-8.68-3.85-10.11-8.1a4.92 4.92 0 01-.22-2.71 3.56 3.56 0 01.53-1.19c-1.63.71-3.05 1.65-3.45 3.31a4.83 4.83 0 00.23 2.71c1.42 4.25 5.83 6.75 10.1 8.1a5.68 5.68 0 012.18 1c.93.84 1.13 2.18 1.53 3.36s1.28 2.45 2.52 2.39 1.84-1.19 2.63-2.15c-1.09-.13-1.88-1.27-2.24-2.36zM864.79 466.49c-5.14.47-7.17-4.2-8-8.52a8.65 8.65 0 00-1-3.29 2.8 2.8 0 00-3-1.33c-.95.3-1.56 1.24-2.21 2a3 3 0 012.26 1.39 9 9 0 011.06 3.3c.81 4.32 2.84 9 8 8.52a8.2 8.2 0 005.28-2.73 7.45 7.45 0 01-2.39.66z" />
      </g>
      <path
        d="M253.89 382.78c-45.58-8-98.57-6.6-155.7 0 11.59-65.72 12.13-130.1 0-192.93h155.7a543.76 543.76 0 010 192.93z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M153.28 178.85h54.16v17.77h-54.16z" />
      <path
        fill={color}
        d="M388 433.43h96v13h-96zM388 460.43h96v13h-96zM516 43.43h96v13h-96zM516 70.43h96v13h-96zM132 225.43h96v13h-96zM127.56 721.31l19.14-11.25a46 46 0 00-9.79-11.71l-36.11 11.23 28.3-16.64A46 46 0 0061 733.29c0 25.41 20.59 26.29 46 26.29s46-.88 46-26.29a45.75 45.75 0 00-3.95-18.66z"
      />
      <path
        d="M132.43 746.01a35.81 35.81 0 00-6.78-5.33c-3.48-2.31-7.07-4.66-11.17-5.45-3.6-.68-7.31-.1-11-.31a25.71 25.71 0 01-16.81-7.7c-2.61-2.71-4.67-6-7.81-8.09-3.39-2.23-7.69-2.71-11.71-2.15a29.07 29.07 0 00-3.46.71 45.8 45.8 0 00-2.72 15.6c0 25.41 20.59 26.29 46 26.29 12.33 0 23.52-.21 31.78-3.33l-1.35-2.53a35.89 35.89 0 00-4.97-7.71z"
        opacity={0.1}
      />
      <path
        d="M597.74 684.62l-25.39-14.9a61.22 61.22 0 0113-15.53l47.89 14.89-37.53-22.06a61 61 0 0190.31 53.51c0 33.69-27.31 34.85-61 34.85s-61-1.16-61-34.85a60.77 60.77 0 015.21-24.81z"
        fill={color}
      />
      <path
        d="M591.27 717.37a48.63 48.63 0 019-7.07c4.61-3.05 9.38-6.18 14.81-7.22 4.77-.91 9.69-.14 14.54-.42a34 34 0 0022.3-10.21c3.46-3.59 6.19-8 10.36-10.73 4.49-3 10.19-3.58 15.52-2.85a42.61 42.61 0 014.6.94 60.89 60.89 0 013.6 20.7c0 33.69-27.31 34.85-61 34.85-16.35 0-31.19-.27-42.15-4.4l1.83-3.42a48.05 48.05 0 016.59-10.17z"
        opacity={0.1}
      />
    </svg>
  );
};

SvgTimeline.propTypes = {
  color: PropTypes.string
};
SvgTimeline.defaultProps = {
  color: "primary"
};
const MemoSvgTimeline = React.memo(SvgTimeline);
export default MemoSvgTimeline;
