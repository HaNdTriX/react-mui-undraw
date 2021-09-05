import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFollowers = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1128.79 749.55"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Followers_svg__a"
          x1={1027.71}
          y1={798.51}
          x2={1027.71}
          y2={475.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <g opacity={0.2}>
        <path
          d="M925.26 626.59q-11.34 6.82-23.13 13.23c-1.22.66-2.44 1.32-3.66 2q-8.87 4.75-18 9.24.07-.72.18-1.44a43.59 43.59 0 014.58-14.22 35.82 35.82 0 013.9-6c6-7.43 14.21-11.58 22.65-10.37a22 22 0 0113.48 7.56z"
          fill="#3f3d56"
        />
        <path
          d="M939.12 615.18c-.15 1.07-.34 2.12-.57 3.16q-6.55 4.2-13.29 8.25-11.34 6.82-23.13 13.23c-1.22.66-2.44 1.32-3.66 2a24.36 24.36 0 01-4-3.69 31 31 0 01-5.31-8.69 43.32 43.32 0 016-41.93c6-7.43 14.21-11.58 22.65-10.37s15.2 7.52 18.82 16.32a41.79 41.79 0 012.49 21.72z"
          fill="#3f3d56"
        />
        <ellipse
          cx={954.53}
          cy={643.96}
          rx={34.66}
          ry={26.48}
          transform="rotate(-81.82 893.791 627.261)"
          fill="#3f3d56"
        />
        <path
          d="M1096.29 222.89a126.31 126.31 0 01-19 50.84l-74.43-11.21 67.24 21.21a128.68 128.68 0 01-11.83 13 126.84 126.84 0 01-22.3 155.22 126.22 126.22 0 0116.91 68.48c-31.63 36.81-70.22 69.83-114.33 98q-6.55 4.2-13.29 8.25-11.34 6.82-23.13 13.23c-2.59-.5-5.14-1.07-7.66-1.73-3.13-.79-6.2-1.71-9.21-2.73a126.83 126.83 0 01-46.62-211.93q-1.92-3.32-3.63-6.73c-.34-.66-.66-1.32-1-2a126.22 126.22 0 01-12.2-61.9l.15-2.21c.09-1.19.2-2.39.32-3.58.18-1.68.39-3.37.63-5.06v-.16a125.93 125.93 0 0112.38-39.15L926 348.41l-82.66-59.29a127 127 0 0117.6-20.84 126.83 126.83 0 11227.52-110.69l-101.87 54.49 107.36-37.47a126.47 126.47 0 012.34 48.28z"
          fill={color}
        />
        <path
          d="M1052.88 520.34c-31.63 36.81-70.22 69.83-114.33 98q-6.55 4.2-13.29 8.25-11.34 6.82-23.13 13.23c-2.59-.5-5.14-1.07-7.66-1.73-3.13-.79-6.2-1.71-9.21-2.73a126.83 126.83 0 01-46.62-211.84q-1.92-3.32-3.63-6.73c-.34-.66-.66-1.32-1-2a126.22 126.22 0 01-12.2-61.9l.15-2.21c.09-1.19.2-2.39.32-3.58.18-1.68.39-3.37.63-5.06v-.16c.78-2.7 11.1-.43 26.82 5l3.32 1.18c3.48 1.25 7.19 2.63 11.09 4.14 8.51 3.28 17.91 7.15 27.83 11.43l.65.28 1.38.6c66.7 28.92 154.44 75.32 141.86 87.3a126.22 126.22 0 0117.02 68.53z"
          opacity={0.1}
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M318.92 682.67q-6.3-2.17-12.51-4.48-14.46-5.32-28.47-11.25a20.79 20.79 0 016.35-3.52c8.33-2.86 17.48-.13 24.93 6.45a42.3 42.3 0 019.7 12.8z"
          fill="#3f3d56"
        />
        <path
          d="M309.22 669.87a33.41 33.41 0 01-2.81 8.32q-14.46-5.32-28.47-11.25-12.19-5.13-24-10.71a45.51 45.51 0 01-.46-7.21 40.42 40.42 0 01.8-7.48c2-9.83 7.66-17.66 16-20.52s17.48-.13 24.93 6.46a39.43 39.43 0 014.94 5.26 46.59 46.59 0 017.48 14.08 45.05 45.05 0 011.59 23.05z"
          fill="#3f3d56"
        />
        <ellipse
          cx={303.27}
          cy={687.79}
          rx={27.32}
          ry={36.55}
          transform="rotate(-17.54 44.064 765.927)"
          fill="#3f3d56"
        />
        <ellipse
          cx={289.21}
          cy={645.38}
          rx={27.32}
          ry={36.55}
          transform="rotate(-17.54 30.002 723.509)"
          fill="#3f3d56"
        />
        <path
          d="M300.1 632.74q-4.17 2.44-8.56 4.57a129.57 129.57 0 01-14.53 6 127.24 127.24 0 01-13.81 3.91q-4.87 1.1-9.75 1.79-6.06.87-12.09 1.14c-48.32-24-91.7-53.36-128.72-86.89-.53-1.42-1-2.85-1.51-4.3a136.3 136.3 0 01.46-87.6 133.67 133.67 0 01-52.52-69.38 136.77 136.77 0 01-7-43H156.8L53.09 342.4a136 136 0 016.44-28 133.61 133.61 0 01-52.52-69.38c-23.26-70.11 13.31-146 81.68-169.54 45.77-15.74 94.18-4 128.17 26.5l-68.15 99.76 81.14-86.32a135 135 0 0124.72 44.42 136.59 136.59 0 016.28 57l-73.63 24.68 71.7-11.93a135.2 135.2 0 01-4.81 17.84 133.65 133.65 0 0152.52 69.37 136.8 136.8 0 017 41.84v4.81a136 136 0 01-7.41 41 132 132 0 0127 24.05c.2.22.39.44.57.67a134.83 134.83 0 0124.91 44.65c20.47 61.7-5.44 127.93-58.6 158.92z"
          fill={color}
        />
        <path
          d="M300.1 632.74q-4.17 2.44-8.56 4.57a129.57 129.57 0 01-14.53 6 127.24 127.24 0 01-13.81 3.91q-4.87 1.1-9.75 1.79-6.06.87-12.09 1.14c-48.32-24-91.7-53.36-128.72-86.89-.53-1.42-1-2.85-1.51-4.3a136.3 136.3 0 01.46-87.6 133.67 133.67 0 01-52.52-69.38c-3.59-10.81 146.12-19.54 214.33-11.17l1.59.2c20.7 2.67 33.41 7 31.2 13.41a132 132 0 0127 24.05c.2.22.39.44.57.67a134.83 134.83 0 0124.91 44.65c20.5 61.73-5.41 127.96-58.57 158.95z"
          opacity={0.1}
        />
      </g>
      <path
        d="M612.22 111.9a4.82 4.82 0 00.86-2.65c0-5.74-11.71-10.39-26.15-10.39s-26.15 4.65-26.15 10.39a4.93 4.93 0 001.08 3c-16.07 1.79-26.91 5.16-26.91 9 0 5.75 24 10.4 53.55 10.4s53.56-4.65 53.56-10.4c0-4.11-12.17-7.65-29.84-9.35zM797.14 46.94a7.54 7.54 0 001.36-4.2c0-9.11-18.58-16.5-41.5-16.5s-41.5 7.39-41.5 16.5a7.82 7.82 0 001.72 4.69c-25.52 2.85-42.72 8.19-42.72 14.31 0 9.11 38.06 16.5 85 16.5s85-7.39 85-16.5c0-6.49-19.3-12.1-47.36-14.8zM464.14 46.94a7.54 7.54 0 001.36-4.2c0-9.11-18.58-16.5-41.5-16.5s-41.5 7.39-41.5 16.5a7.82 7.82 0 001.72 4.69c-25.52 2.85-42.72 8.19-42.72 14.31 0 9.11 38.06 16.5 85 16.5s85-7.39 85-16.5c0-6.49-19.3-12.1-47.36-14.8z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M358.93 133.09c2.33-1.35 5.48-.06 7.08 2.11s2.05 5 2.45 7.63c.89 5.91 1.54 12.7-2.45 17.16 6.52-19.77 25.27-34.92 46-37.13M620.4 35.07c1.5-.87 3.52 0 4.55 1.35a10.83 10.83 0 011.58 4.91c.57 3.8 1 8.16-1.58 11a35.88 35.88 0 0129.55-23.81M885.4 8.07c1.5-.87 3.52 0 4.55 1.35a10.83 10.83 0 011.58 4.91c.57 3.8 1 8.16-1.58 11A35.88 35.88 0 01919.5 1.52"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={3}
        opacity={0.1}
      />
      <ellipse
        cx={581.79}
        cy={705.05}
        rx={547}
        ry={44.5}
        fill={color}
        opacity={0.1}
      />
      <rect
        x={137.79}
        y={194.55}
        width={876}
        height={502}
        rx={18.47}
        fill="#fff"
      />
      <path
        d="M1013.8 213.02v26.5h-876v-26.5a18.47 18.47 0 0118.47-18.5h839.06a18.47 18.47 0 0118.47 18.5z"
        fill="#3f3d56"
      />
      <g opacity={0.6}>
        <rect
          x={202.29}
          y={312.05}
          width={174}
          height={118}
          rx={16.87}
          fill={color}
        />
        <path
          d="M272.34 413.36a32 32 0 01-12.14-39 34 34 0 1157.46-3.57 32 32 0 01-10.4 42.54 40.76 40.76 0 0115.93 17.69H256.4a40.76 40.76 0 0115.94-17.66z"
          fill="#fff"
        />
      </g>
      <rect
        x={482.29}
        y={506.05}
        width={174}
        height={118}
        rx={16.87}
        fill={color}
      />
      <path
        d="M586.26 613.36a39.49 39.49 0 0112.45 11.69h-59.82a39.49 39.49 0 0112.45-11.69 32 32 0 01-12.14-39 34 34 0 1157.46-3.57 32 32 0 01-10.4 42.54z"
        fill="#fff"
      />
      <g opacity={0.6}>
        <rect
          x={482.29}
          y={312.05}
          width={174}
          height={118}
          rx={16.87}
          fill={color}
        />
        <path
          d="M603.15 380.1a32 32 0 01-13.89 33.26 40.76 40.76 0 0115.93 17.69H538.4a40.76 40.76 0 0115.93-17.69 32 32 0 01-13.22-35.84 11.38 11.38 0 01-1.31.07 13 13 0 01-1-25.95 12.87 12.87 0 01-1-5.05 13 13 0 0125.17-4.53 13 13 0 0115.33-1.72 13 13 0 0118.5 6.18 13 13 0 0113 12.68 13 13 0 01-6.63 20.87z"
          fill="#fff"
        />
      </g>
      <g opacity={0.6}>
        <rect
          x={775.29}
          y={506.05}
          width={174}
          height={118}
          rx={16.87}
          fill={color}
        />
        <path
          d="M896.15 580.1a32 32 0 01-13.89 33.26 39.49 39.49 0 0112.45 11.69h-59.82a39.49 39.49 0 0112.45-11.69 32 32 0 01-13.23-35.84 11.38 11.38 0 01-1.31.07 13 13 0 01-1-25.95 12.87 12.87 0 01-1-5.05 13 13 0 0125.17-4.53 13 13 0 0115.33-1.72 13 13 0 0118.5 6.18 13 13 0 0113 12.68 13 13 0 01-6.63 20.87z"
          fill="#fff"
        />
      </g>
      <rect
        x={775.29}
        y={312.05}
        width={174}
        height={118}
        rx={16.87}
        fill={color}
      />
      <path
        d="M895.19 431.05H828.4a40.76 40.76 0 0115.93-17.69 32 32 0 01-10.85-41.72c-4.21-3.12-6.69-6.95-6.69-11.09 0-10.49 15.89-19 35.5-19s35.5 8.51 35.5 19c0 4.38-2.77 8.4-7.42 11.62a32 32 0 01-11.12 41.19 40.76 40.76 0 0115.94 17.69z"
        fill="#fff"
      />
      <g opacity={0.6}>
        <rect
          x={202.29}
          y={506.05}
          width={174}
          height={118}
          rx={16.87}
          fill={color}
        />
        <path
          d="M304.26 613.36a39.49 39.49 0 0112.45 11.69h-59.82a39.49 39.49 0 0112.45-11.69 32 32 0 01-10.85-41.72c-4.21-3.12-6.69-7-6.69-11.09 0-10.49 15.89-19 35.5-19s35.5 8.51 35.5 19c0 4.38-2.77 8.4-7.42 11.62a32 32 0 01-11.12 41.19z"
          fill={color}
        />
        <rect
          x={202.29}
          y={506.05}
          width={174}
          height={118}
          rx={16.87}
          fill={color}
        />
        <path
          d="M304.26 613.36a39.49 39.49 0 0112.45 11.69h-59.82a39.49 39.49 0 0112.45-11.69 32 32 0 01-10.85-41.72c-4.21-3.12-6.69-7-6.69-11.09 0-10.49 15.89-19 35.5-19s35.5 8.51 35.5 19c0 4.38-2.77 8.4-7.42 11.62a32 32 0 01-11.12 41.19z"
          fill="#fff"
        />
      </g>
      <path
        d="M1091 764.84a23.16 23.16 0 00-5.39-3 1 1 0 00-.46-.12 83 83 0 01-11.11-9.58c.69-.57 1.39-1.15 2.1-1.7-4.39-2.08-6.77-6.83-9.13-11.12a109.37 109.37 0 00-24.2-30.16c-.24-.93-1.64-.74-2.39-1.32a2 2 0 01-.53-1.86c.12-.67.42-1.28.59-1.94a13.11 13.11 0 00-.12-4.71c-.17-1.58-.1-3.33.94-4.51.34-.39.76-.68 1.09-1.07a4.13 4.13 0 00.75-3.26 11.56 11.56 0 00-.76-3.31l10.67-29.09c2.49-6.78 5-13.71 5.25-20.94.2-5.77-1.29-11.84-4.81-16.27.64-.16 1.28-.32 1.92-.5-4.16-5.51-4.61-12.8-4.72-19.72q-.07-5.19-.35-10.38a37.92 37.92 0 003.67 1.4c.39.13.77.25 1.16.36a39.13 39.13 0 005.76 1.24c.86.12 1.73.21 2.6.27l-3.75-9.39a13 13 0 01-1.16-4.41v-.29a4.53 4.53 0 010-.52 6 6 0 01.28-1.22 5.83 5.83 0 01.23-.58 11.49 11.49 0 01.92-1.63c.27-.4.56-.78.85-1.17a16 16 0 002.6-4.23 7.8 7.8 0 00.41-2.4 12.72 12.72 0 00-.22-2.46c-.11-.55-.24-1.09-.38-1.61-.1-.32-.19-.65-.3-1a2 2 0 00-.08-.26c-.08-.25-.17-.49-.25-.73l-.09-.24c-.09-.26-.19-.52-.29-.78l-.06-.16c-1.39-3.56-3.23-7-4.33-10.62a27.91 27.91 0 01-.72-3l-.12-.77c0-.22-.07-.44-.1-.65l-.09-.76c0-.24-.05-.48-.07-.72s0-.46 0-.7v-1.33-.47-1.55c0-.33 0-.66.08-1v-.47c0-.48.11-1 .19-1.44l.24-1.3a16.9 16.9 0 00.41-3.66v-.71l-.09-.58a1 1 0 010-.17c0-.13-.06-.26-.1-.39s0-.13 0-.19l-.12-.37-.06-.17-.16-.39-.06-.12c-.07-.16-.15-.32-.23-.47a10.54 10.54 0 00-1-1.51c-2.38-3.14-6.36-5.53-8.54-9a20.12 20.12 0 01-2.45-7.23c-.11-.58-.2-1.16-.3-1.74s-.19-1.13-.29-1.7c-.07-.35-.13-.7-.2-1a1.89 1.89 0 010-.23l-.18-.84v-.19l-.21-.87V504c-.07-.3-.15-.61-.24-.91v-.11l-.28-1v-.06c-.1-.33-.2-.66-.31-1-.12-.34-.23-.68-.36-1-.12-.35-.25-.68-.39-1a26.67 26.67 0 00-3.67-6.52c-3.33-4.27-8.47-7.34-13.83-7.13a27.47 27.47 0 00-8.3 2.1l-7 2.58 1.95-.9a16.63 16.63 0 00-5.94 1.27 5.77 5.77 0 00-3.45 4.72c0 1.2.43 2.39.28 3.58-.25 2-2.06 3.3-3 5.05a6.43 6.43 0 00-.72 3.41V507.55a.49.49 0 010 .12v.23c-2.92-1.26-5.83-2.58-8.69-4-4.79-2.36-9.65-5.13-12.64-9.61-1-1.44-1.7-3-2.65-4.46a35.19 35.19 0 00-3.62-4.36l-8.91-9.65c-.68 1.29.19 2.81.88 4.08a17.5 17.5 0 011.65 4.26 2 2 0 010 1.48 2.94 2.94 0 01-1.22.87 4.34 4.34 0 00-1.84 5 5.5 5.5 0 004.11 3.59 7.7 7.7 0 011.85.45c1.07.54 1.58 1.76 2.34 2.69 1.41 1.68 3.66 2.32 5.77 2.87 3.29 3.8 6.72 7.45 10 11.25 5 5.76 10.09 11.61 16.6 15.51.67.4 1.36.78 2.06 1.13v.35a3.93 3.93 0 00.32 2.54 4 4 0 002.85 1.39l4.92.88c0 .63-.13 1.27-.24 1.9-.07.38-.15.76-.22 1.14l-.09.5a.17.17 0 010 .07c0 .13 0 .26-.05.4s0 .09 0 .14v.49a3.65 3.65 0 000 .47c.17 1.94 1.49 3.53 2.73 5 .24.27.47.55.7.83a11.82 11.82 0 00-2.25 4.71 15.49 15.49 0 00-.31 3.27 5.79 5.79 0 00-1.5 2.26 10.53 10.53 0 00-.37 3.67V560.46a12.18 12.18 0 00.84 5.1l.21.37c-1.09 2.14-2.94 3.8-4.21 5.84a12.63 12.63 0 001.15 14.43c1 1.15 2.28 2.26 2.39 3.78a13.06 13.06 0 01-.2 2.06c-.12 1.64.64 3.2 1.05 4.79a5 5 0 01-.4 4 5.76 5.76 0 00-1 3.81c.36 2.06-.49 4.11-.63 6.19-.07.9 0 1.8-.08 2.7a15.69 15.69 0 01-.78 2.47l-.07.28c-1.8.79-3.58 1.61-5.29 2.56a4.74 4.74 0 00-2.21 2 5.19 5.19 0 00-.11 2.77q.76 5.37 1.55 10.75c-.1 0-.18-.08-.28-.12.13 1.77.25 3.54.38 5.31a7.08 7.08 0 001 3.84 10.68 10.68 0 011.1 1.41c.6 1.23-.12 2.67-.66 3.93s-.72 3.06.46 3.74a9.69 9.69 0 002 1.06c-1.47 6-.12 12.4 1.24 18.48l3.09 13.92a34.47 34.47 0 01.69 6v.87a33.79 33.79 0 001.46 8.15c1.61 5.43.07 12 .57 17.86a54 54 0 001.7 8.43c3.51 13.9 6.63 27.54 7.84 41.84a10.55 10.55 0 005 3.51c-.15 1.76 0 3.76 0 4.79a8.43 8.43 0 01-.4 2.5 6 6 0 01-3.79 3.23c-.51.17-1 .31-1.55.44l.58-.5a12.93 12.93 0 00-9.61 1.66 3.87 3.87 0 00-1.91 2.25 3.64 3.64 0 00.67 2.61 11.92 11.92 0 006.71 4.77 35 35 0 008.28 1.15l5.13.3a1.39 1.39 0 00.34 1.82 3.52 3.52 0 001.87.69 24 24 0 006.33.09 2.46 2.46 0 001.45-.52.94.94 0 000-1.39 1.54 1.54 0 001.4-1 4.17 4.17 0 00.18-1.83c-.13-2.39-.35-5.87-1.59-8a2 2 0 00-2.24-1 88.42 88.42 0 01-1.42-12.88 32.35 32.35 0 003.74-1.69c-3.57-5.75-3.67-13.06-2.55-19.76a57.75 57.75 0 001-6.4c.24-4.27-.4-9.13-2.78-12.67a45.37 45.37 0 0111.33 10.25c5 6.52 8.08 14.45 14.22 19.89l2.45-2.35c1.31 2.2 2.54 4.45 3.69 6.73a25.09 25.09 0 012.13 5.31 24.35 24.35 0 01.2 8.56c-.17 1.51-.37 3-.62 4.51a12.49 12.49 0 01-.44 1.88 1.44 1.44 0 00-.14-.56c-.39-.68-1.41-.37-2 .09a9 9 0 00-2.51 2.94 3.13 3.13 0 00-.45 1.85 2.72 2.72 0 001.43 1.82c2.69 1.58 6.07.44 9-.73a10.2 10.2 0 002.26-1.14c1.42-1 2.25-2.77 3.69-3.78a20.55 20.55 0 002.23-1.42c1.34-1.22 1.49-3.29 2.43-4.85 1.63-2.68 5.27-3.36 6.69-6.2 1.52-3.2-.4-7.16-2.89-9.21z"
        transform="translate(-35.6 -74.48)"
        fill="url(#Followers_svg__a)"
      />
      <path
        d="M992.81 703.14a7.88 7.88 0 01-.39 2.47 6 6 0 01-3.8 3.18c-1.61.56-3.32.74-5 1.22a4.34 4.34 0 00-1.94 1c-1.42 1.43-.58 4.07 1.12 5.15s3.86 1 5.88.91a77.79 77.79 0 0012.72-1.81c1.51-.35 3.27-1.06 3.51-2.58a4 4 0 00-.12-1.45 85.14 85.14 0 01-1.62-15.77c0-.34-8.43-.56-9.22-.06-1.71 1.12-1.04 5.95-1.14 7.74zM1030.34 684.65c1.39 2.31 2.7 4.66 3.93 7.07a19.52 19.52 0 012.33 13.67c-.17 1.49-.38 3-.62 4.45s-.63 3.1-1.87 3.94a4.32 4.32 0 003.7.33 10.66 10.66 0 003.26-2c6.22-5.13 10.92-12.59 11.12-20.66a3.14 3.14 0 00-.34-1.82 3.54 3.54 0 00-1.09-1 83.69 83.69 0 01-12.87-10.81 1.19 1.19 0 00-1.78-.36c-2.39 1.2-6.38 2.91-7.38 5.62a3.88 3.88 0 011.61 1.57z"
        fill="#a1616a"
      />
      <path
        d="M1001.4 711.57c-5.23 2.2-10.92 3-16.54 3.71a2.28 2.28 0 01-2-.37 1.52 1.52 0 01-.13-1.69 4.54 4.54 0 011.21-1.34l3.76-3.14a13 13 0 00-9.6 1.64 3.78 3.78 0 00-1.91 2.22 3.54 3.54 0 00.67 2.57 11.86 11.86 0 006.71 4.7 34.72 34.72 0 008.27 1.14l5.11.3a1.39 1.39 0 00.34 1.8 3.71 3.71 0 001.88.67 24.76 24.76 0 006.32.09 2.46 2.46 0 001.45-.52.91.91 0 000-1.36 1.51 1.51 0 001.39-1 4.07 4.07 0 00.19-1.81c-.14-2.35-.35-5.78-1.59-7.86s-3.85-.48-5.53.25zM1055.27 690.81a23.92 23.92 0 00-5.38-3 .64.64 0 00-1 .25 55.12 55.12 0 00-7.93 15.3c-1 3.12-1.86 6.44-4 9-.28.33-.71.67-1.1.48s-.21-1.16-.51-1.69-1.41-.36-2 .1a8.84 8.84 0 00-2.5 2.9 3 3 0 00-.45 1.82 2.68 2.68 0 001.42 1.79c2.69 1.56 6.07.44 9-.72a10.58 10.58 0 002.26-1.12c1.41-1 2.24-2.73 3.68-3.73a20.39 20.39 0 002.23-1.4c1.34-1.21 1.48-3.25 2.43-4.78 1.63-2.64 5.26-3.32 6.68-6.12 1.57-3.15-.35-7.06-2.83-9.08zM1014.75 545.79c5.71 4.29 8.11 11.9 7.86 19s-2.77 14-5.25 20.66q-5.34 14.34-10.66 28.7a11.57 11.57 0 01.76 3.26 4 4 0 01-.75 3.21c-.33.39-.75.68-1.09 1.06a5.7 5.7 0 00-.94 4.45 12.79 12.79 0 01.12 4.65c-.17.65-.47 1.26-.59 1.92a1.9 1.9 0 00.53 1.83c.75.57 2.15.39 2.39 1.3a108.42 108.42 0 0124.18 29.75c2.35 4.23 4.73 8.93 9.11 11a161.4 161.4 0 00-12.28 10.81c-6.14-5.37-9.2-13.19-14.21-19.62a45.2 45.2 0 00-11.32-10.12c2.38 3.5 3 8.29 2.78 12.51a56.53 56.53 0 01-1 6.31c-1.12 6.61-1 13.82 2.54 19.5-3.8 2-8.17 3.44-12.42 2.85a10.51 10.51 0 01-6.76-3.86c-1.21-14.11-4.33-27.56-7.84-41.29a51.33 51.33 0 01-1.69-8.3c-.51-5.84 1-12.27-.58-17.63a32.81 32.81 0 01-1.45-8v-.86a33.34 33.34 0 00-.69-5.89l-3.1-13.78c-1.35-6-2.7-12.26-1.24-18.23a10.41 10.41 0 01-2-1c-1.18-.68-1-2.44-.45-3.69s1.26-2.67.65-3.88a9.08 9.08 0 00-1.1-1.39 6.93 6.93 0 01-1-3.79l-.38-5.24a10.22 10.22 0 015.17 4.53c-2.86-4.43-1.44-10.75.66-15.58a7.09 7.09 0 016.67-5.28c11.7-2.05 25.92-6.98 35.37.13z"
        fill="#3f3d56"
      />
      <path
        d="M1009.45 575.6s-5.73 3.82-5.73 6.68-1.43 28.61-1.43 28.61v18.12s1 9.54 0 11.92 0 13.35 0 14.78 1.43-14.78 1.43-14.78v-17.17l1.43-39.1z"
        opacity={0.1}
      />
      <path
        d="M977.54 443.36l-3.34-1.33c-6.8-2.73-13.62-5.47-20.22-8.67-4.79-2.33-9.64-5.06-12.63-9.48-1-1.42-1.69-3-2.65-4.4a34.4 34.4 0 00-3.61-4.3l-8.91-9.52c-.67 1.27.2 2.77.89 4a17.48 17.48 0 011.65 4.2 1.94 1.94 0 01-.05 1.46c-.25.43-.78.61-1.22.85a4.27 4.27 0 00-1.83 4.92 5.49 5.49 0 004.11 3.54 7.62 7.62 0 011.84.45c1.07.52 1.58 1.73 2.35 2.65 1.4 1.66 3.65 2.29 5.75 2.83 3.29 3.75 6.72 7.35 10 11.1 5 5.68 10.08 11.45 16.58 15.3a24.09 24.09 0 007.5 3 120.87 120.87 0 013.79-16.6z"
        fill="#a1616a"
      />
      <path
        d="M977.54 443.36l-3.34-1.33c-6.8-2.73-13.62-5.47-20.22-8.67-4.79-2.33-9.64-5.06-12.63-9.48-1-1.42-1.69-3-2.65-4.4a34.4 34.4 0 00-3.61-4.3l-8.91-9.52c-.67 1.27.2 2.77.89 4a17.48 17.48 0 011.65 4.2 1.94 1.94 0 01-.05 1.46c-.25.43-.78.61-1.22.85a4.27 4.27 0 00-1.83 4.92 5.49 5.49 0 004.11 3.54 7.62 7.62 0 011.84.45c1.07.52 1.58 1.73 2.35 2.65 1.4 1.66 3.65 2.29 5.75 2.83 3.29 3.75 6.72 7.35 10 11.1 5 5.68 10.08 11.45 16.58 15.3a24.09 24.09 0 007.5 3 120.87 120.87 0 013.79-16.6z"
        opacity={0.15}
      />
      <path
        d="M971.4 462.32a4 4 0 01-2.85-1.37 3.87 3.87 0 01-.31-2.5 70.56 70.56 0 013.6-16c1.62 3 4.81 4.74 7.83 6.32a57.21 57.21 0 008.4 3.83c-.69-.23-2.5 10.94-3.5 11.63-1.27.89-4.31-.3-5.71-.55z"
        fill="#ff6f61"
      />
      <circle cx={979.16} cy={443.76} r={15.26} fill="#a1616a" />
      <path
        d="M976.07 456.4s10 8.58 5.72 14.3-6.68 9.54-.95 10 24.79-9.54 24.79-9.54-17.64-14.31-14.78-22.89-14.78 8.13-14.78 8.13z"
        fill="#fbbebe"
      />
      <path
        d="M985.67 469.83a11.85 11.85 0 00-8.76 8.81c-1.12 5.15 1.27 10.86-1 15.63-1.06 2.25-3 3.93-4.35 6a12.3 12.3 0 001.15 14.24c1 1.13 2.27 2.23 2.38 3.73a12.69 12.69 0 01-.2 2c-.12 1.62.64 3.15 1 4.72a4.84 4.84 0 01-.4 3.91 5.64 5.64 0 00-1 3.76c.36 2-.49 4.05-.63 6.1-.07.89 0 1.78-.08 2.67a15.22 15.22 0 01-.53 2.48l-1.27 4.72a52.38 52.38 0 0021.81 3.89c6.71-.13 13.32-1.52 19.88-2.9 2-.42 4-.84 6-1.38-4.15-5.44-4.6-12.63-4.71-19.46a289.31 289.31 0 00-2.55-34c2-3.8 2.9-8 3.73-12.25a20.54 20.54 0 00.47-5.18c-.21-3.67-1.87-7.07-3.51-10.37-1.49-3-3.12-6.17-6.45-7.46a5.09 5.09 0 00-5 .54c-2.53 1.9-1.77 5.18-2.42 8-.85 3.62-4.19 6.23-7.76 7.29a25.4 25.4 0 01-8.16.76 1.44 1.44 0 01-1-2.38c1.19-1.32 2.37-2.64 3.36-3.87z"
        fill="#ff6f61"
      />
      <path
        d="M997.5 528.82c-5.65 4.62-11.36 9.28-17.89 12.55-3.82 1.91-7.89 3.33-11.63 5.39a4.63 4.63 0 00-2.21 2 5 5 0 00-.11 2.73l1.66 11.41c.45 3.09 3.42 5.06 5.83 7a4.12 4.12 0 01.15-2.76 9.43 9.43 0 01.56-.84 7.78 7.78 0 00.8-5.36 29.44 29.44 0 01-.63-5.5 1.81 1.81 0 01.77-1.6c8.11-3.9 16.84-6.89 25-10.6a26.23 26.23 0 006.08-3.45 9.32 9.32 0 003.53-5.85 1.22 1.22 0 00-.15-.9 1.26 1.26 0 00-.61-.36c-3.62-1.31-7.49-2.54-11.15-3.86z"
        fill="#a1616a"
      />
      <path
        d="M981.81 480.93c-2.81.47-5.75 1.92-6.71 4.61a10.17 10.17 0 00-.37 3.61 12.09 12.09 0 00.84 5 14.25 14.25 0 001.71 2.46c6.71 8.6 10.07 19.4 16.61 28.13.58.77 1.64 1.77 1.31 2.68a6.07 6.07 0 00-.31.69 1.45 1.45 0 00.48 1.27 3 3 0 01.79 1.15c.12.46-.18 1.06-.65 1 .78 2.43 3.19 3.84 5.46 5 3.79 1.91 8 3.41 12.21 3 .79-3.17 1.9-6.75 1.45-10a25.83 25.83 0 00-2.43-7.08l-2.84-6.2c-2.42-5.29-4.86-10.62-8.23-15.36a23.18 23.18 0 01-3-4.91c-.86-2.24-3.24-3.81-4.67-5.74-2.14-2.87-4.33-5.79-7.22-7.9-1.19-.82-3.03-1.65-4.43-1.41z"
        opacity={0.1}
      />
      <path
        d="M981.81 479.52c-2.81.47-5.75 1.92-6.71 4.61a10.15 10.15 0 00-.37 3.61 12.09 12.09 0 00.84 5 14.25 14.25 0 001.71 2.46c6.71 8.6 10.07 19.4 16.61 28.13.58.77 1.64 1.77 1.31 2.68a6.07 6.07 0 00-.31.69 1.45 1.45 0 00.48 1.27 3 3 0 01.79 1.15c.12.46-.18 1.06-.65 1 .78 2.43 3.19 3.84 5.46 5 3.79 1.91 8 3.41 12.21 3 .79-3.17 1.9-6.75 1.45-10a25.83 25.83 0 00-2.43-7.08l-2.84-6.2c-2.42-5.29-4.86-10.62-8.23-15.37a22.87 22.87 0 01-3-4.9c-.86-2.24-3.24-3.81-4.67-5.74-2.14-2.87-4.33-5.79-7.22-7.9-1.19-.81-3.03-1.67-4.43-1.41z"
        fill="#ff6f61"
      />
      <path
        d="M975.4 418.69a17 17 0 00-5.94 1.25 5.7 5.7 0 00-3.44 4.67c0 1.18.43 2.35.28 3.53-.26 1.94-2.06 3.25-3 5-1.62 3-.36 6.8 1.75 9.47s5 4.68 7.12 7.3a18.91 18.91 0 013.94 15.19 11.82 11.82 0 00-.39 3.17c.17 1.91 1.49 3.48 2.73 4.94a225.76 225.76 0 0117.22 22.91 61.12 61.12 0 014.24 7.24c1.24 2.6 2.17 5.38 3.9 7.68a20.08 20.08 0 005.71 4.9 40.3 40.3 0 0018.29 5.9l-3.74-9.27a10.65 10.65 0 01-1.12-5.15c.41-3.33 3.78-5.53 4.88-8.7a10.74 10.74 0 00-.2-6.39c-1.32-4.7-4-8.93-5.39-13.59a27.74 27.74 0 01-.81-12.64 19.74 19.74 0 00.59-5.6c-.69-5.67-7.35-8.38-10.43-13.2-2-3.09-2.37-6.9-3-10.52-1-5.28-2.69-10.55-6-14.76s-8.45-7.23-13.82-7a27.75 27.75 0 00-8.29 2.08l-7 2.54"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M1006.65 430.52c.6 3.26 1 6.68 2.51 9.59-.21-1.13-.39-2.27-.6-3.39a42.66 42.66 0 00-2.34-8.32c.18.74.3 1.44.43 2.12zM1019.53 459.87a27.73 27.73 0 00.81 12.64 34.57 34.57 0 001.2 3.27 27.31 27.31 0 01-.1-9.71 19.74 19.74 0 00.59-5.6 8.78 8.78 0 00-1.89-4.33c-.11 1.24-.4 2.49-.61 3.73zM1027.64 492.3a33.55 33.55 0 00-1.43-4 8.77 8.77 0 01-.28 4.2c-1.09 3.17-4.47 5.37-4.88 8.7a10.63 10.63 0 001.13 5.15l.75 1.86a5.49 5.49 0 010-.81c.41-3.33 3.78-5.53 4.88-8.7a10.74 10.74 0 00-.17-6.4zM1007.62 509.71a20.08 20.08 0 01-5.71-4.9c-1.72-2.3-2.66-5.08-3.9-7.67a60.45 60.45 0 00-4.24-7.25 225.76 225.76 0 00-17.22-22.91l-.65-.78a7.41 7.41 0 00-.17 2c.17 1.91 1.49 3.48 2.73 4.94a225.76 225.76 0 0117.22 22.91 61.12 61.12 0 014.24 7.24c1.24 2.6 2.17 5.38 3.9 7.68a20.08 20.08 0 005.71 4.9 40.3 40.3 0 0018.29 5.9l-2.52-6.25a40.32 40.32 0 01-17.68-5.81zM970.27 443.68c-2.16-2.62-5-4.62-7.12-7.29-.19-.25-.37-.51-.55-.77a10.51 10.51 0 002.46 7c2.1 2.68 5 4.68 7.12 7.3a18.18 18.18 0 012.16 3.32 18.87 18.87 0 00-4.07-9.56z" />
      </g>
      <path
        d="M956.62 316.16l-5.06-5.09a2.68 2.68 0 00-3.81 0l-31.76 31.45-13.43-13.54a2.66 2.66 0 00-3.78 0l-5.11 5.05a2.72 2.72 0 000 3.82l20.39 20.55a2.72 2.72 0 003.82 0l38.74-38.46a2.68 2.68 0 000-3.78zM662.62 504.16l-5.06-5.09a2.68 2.68 0 00-3.81 0l-31.76 31.45-13.43-13.54a2.66 2.66 0 00-3.78 0l-5.11 5a2.72 2.72 0 000 3.82l20.39 20.55a2.72 2.72 0 003.82 0l38.74-38.46a2.68 2.68 0 000-3.73z"
        fill="#3acc6c"
      />
    </svg>
  );
};

SvgFollowers.propTypes = {
  color: PropTypes.string
};
SvgFollowers.defaultProps = {
  color: "primary"
};
export default SvgFollowers;
