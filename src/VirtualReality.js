import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgVirtualReality = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1038.72 566.52"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="VirtualReality_svg__a"
          x1={911.4}
          y1={405.29}
          x2={911.4}
          y2={291.37}
          gradientTransform="rotate(-10.7 914.538 294.513)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="VirtualReality_svg__b"
          x1={900.3}
          y1={350.41}
          x2={900.3}
          y2={259.01}
          xlinkHref="#VirtualReality_svg__a"
        />
      </defs>
      <path
        d="M302.52 276.7c-24.49 11.32-47.07 26.87-72.6 35.58-31.07 10.6-64.62 10.49-97.45 10.25L0 321.6c26.83 48.19 74.23 84.47 127.75 97.78 21 5.23 43.43 7.28 61.95 18.51 23.08 14 36.76 40.32 60.22 53.65 25.86 14.68 58 10.72 86.82 18 37.57 9.43 69 37.79 107.32 43.37 37.06 5.39 73.19-11.35 109.11-21.92 128.3-37.76 266.91 2.57 399.34-16.1 5.09-.72 10.51-1.69 14.19-5.27 4.73-4.59 5.12-12 4.18-18.57-4.72-32.74-34.17-56.8-65.05-68.67-65.79-25.28-139.7-9.4-209.59-18.5-48-6.26-93.66-24.28-138.7-42.15-47.16-18.71-95.06-37.07-139.75-61.28-45.43-24.65-60.16-49.19-115.27-23.75z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M717.22 450.5s2 30-2 35c0 0 88 16 99 11s6-13 0-16-36-14-40-35c0 0 13-6-29 2s-28 3-28 3z"
        fill="#dc9ba3"
      />
      <path
        d="M717.22 450.5s2 30-2 35c0 0 88 16 99 11s6-13 0-16-36-14-40-35c0 0 13-6-29 2s-28 3-28 3z"
        opacity={0.05}
      />
      <path
        d="M374.03 32.74l-.38.18a123.37 123.37 0 00-46 37.47c-6.82 9-15.2 17.58-23.17 19-17.7 3.12-147.85 138.48-116.61 264.46s213.49 131.18 213.49 131.18 38.76 6.57 61 19.71a41.14 41.14 0 0034.75 3.34c26.48-9.42 70-23.08 89.62-18.88 29.15 6.25 279-97.87 279-97.87s-104.12-100-257.17-97.87c0 0-241.55-168.67-233.22-238.43z"
        fill={color}
      />
      <path
        d="M374.03 32.74l-.38.18a123.37 123.37 0 00-46 37.47c-6.82 9-15.2 17.58-23.17 19-17.7 3.12-147.85 138.48-116.61 264.46s213.49 131.18 213.49 131.18 38.76 6.57 61 19.71a41.14 41.14 0 0034.75 3.34c26.48-9.42 70-23.08 89.62-18.88 29.15 6.25 279-97.87 279-97.87s-104.12-100-257.17-97.87c0 0-241.55-168.67-233.22-238.43z"
        opacity={0.1}
      />
      <path
        d="M374.22 32.5l-25 24s-19 37-36 40-142 133-112 254 205 126 205 126 36.42 6.17 57.85 18.52a41.62 41.62 0 0034.71 3.39c25.49-9 66.78-21.91 85.43-17.91 28 6 268-94 268-94s-100-96-247-94c0 0-232-162-224-229z"
        fill={color}
      />
      <ellipse
        cx={520.63}
        cy={481.54}
        rx={78.86}
        ry={143.56}
        transform="rotate(-45 279.037 495.51)"
        opacity={0.1}
      />
      <path
        d="M374.22 159.5s11 18 4 53 18 35 18 35h50l17-44-24 2s-16-4-9-41zM524.22 117.5c-7.65 24.35-17.24 54-22.36 69.82l-3.64 11.18-33-34s1.45-3.37 3.62-8.09c4.83-10.46 13.24-27.53 17.38-28.91 0 0-46-3-60 8s-10-30-10-30 27-2 37-8 64-12 64-12 18-3 7 32z"
        fill="#ffd2d9"
      />
      <path
        d="M343.22 419.5s85-39 115-33M256.22 327.5s103-4 159 32M307.22 368.5s81-20 124-13"
        opacity={0.1}
      />
      <path
        d="M824.22 411.5l-7 51-18-2s-1.09-1-2.94-2.68c-4.85-4.27-14.94-12.64-24.6-17.2a30.14 30.14 0 00-10.46-3.12l20-30a110.5 110.5 0 0014.93 4.42 72.06 72.06 0 0016.08 1.9 29.35 29.35 0 0011.99-2.32z"
        fill="#ffd2d9"
      />
      <path
        d="M774.22 447.5c-9 8-50-9-57 17l-6.44-24.66-19.83-75.89-2.73-10.45-16.52-.71-189.58-8.09-10.76-.44-5.66-.24 7.51-3.72 50-24.78s18-1.26 42.85-4.67c37.66-5.16 91-15.25 121.12-33.32 50-30 69 71 69 71s7.6 25.63 13.4 50.88c2.76 12 5.11 24 6 33.06.85 7.69.59 13.3-1.36 15.03z"
        fill="#e9e9ef"
      />
      <path
        d="M774.22 447.5c-9 8-50-9-57 17l-6.44-24.66-19.83-75.89-2.73-10.45-17-1-183.2-11.31-11.31-.7-3.48-.21-4.51-.28 54.5-24.5s18-1.26 42.85-4.67c37.66-5.16 91-15.25 121.12-33.32 50-30 69 71 69 71s7.6 25.63 13.4 50.88c2.76 12 5.11 24 6 33.06.84 7.71.58 13.32-1.37 15.05z"
        opacity={0.05}
      />
      <path
        d="M796.15 411.92l-17.5 20.52-7 8.18a30.14 30.14 0 00-10.46-3.12l20-30a110.5 110.5 0 0014.96 4.42z"
        opacity={0.1}
      />
      <path
        d="M795.22 409.5l-19.57 22.94-9.43 11.06v3c-11.54 2.66-47.51-4.92-55.44-6.66-1-.21-1.56-.34-1.56-.34-23 1-108-49-108-49s-93 16-138 12c-25.13-2.24-32.17-11.33-33.49-18.93a19.72 19.72 0 011.49-11.07l40.14-28.24 5.33-3.75 8.51-6s14.79-3.35 33.58-7.5c29.35-6.47 68.47-14.88 76.39-15.49 13-1 46 10 65 32a56.16 56.16 0 0011 9l.52.34c5.34 3.54 11.92 7.31 19.25 11.16 24.21 12.75 56.48 26.44 78.67 35.43 15.16 6.09 25.61 10.05 25.61 10.05z"
        fill="#e9e9ef"
      />
      <path
        d="M824.22 411.5l-7 51-18-2s-1.09-1-2.94-2.68c4 .09 10.56-1.06 11.94-9.32 0 0-6.93-24.25 4-34.68a29.35 29.35 0 0012-2.32z"
        opacity={0.1}
      />
      <path
        d="M810.22 448.5s-10-35 13-39l38 15 44 3s11.49 18.76-6.93 39.76a56.57 56.57 0 01-40 19l-48.08 2.25-15-31s13.01 2.99 15.01-9.01z"
        fill="#dc9ba3"
      />
      <path
        d="M566.07 310.83c-5 1.47-25.88 7.7-47.24 16.16a263.12 263.12 0 00-30.78 14.19c-2.07 1.16-4 2.33-5.9 3.51-5.6 3.55-10.11 7.19-12.9 10.8-12.34 16-30.47 24.56-39.49 28.07a19.72 19.72 0 011.49-11.07l40.11-28.23-5.66-.24 7.51-3.72-4.51-.28 54.5-24.5s18.03-1.26 42.87-4.69zM501.86 187.32l-3.64 11.18-33-34s1.45-3.37 3.62-8.09c4.17 8.85 24.09 24.28 33.02 30.91z"
        opacity={0.1}
      />
      <path
        d="M382.8 203.93a58.14 58.14 0 01-2.58-10.43l-43 15s-29.5 22.5-26.5 71.5c0 0 36.5-13.5 52.5 2.5l.33 2.82a130 130 0 0035.25 74.38c8 8.35 15.45 17.77 19.42 26.8 0 0 28-8 45-30s98-45 98-45-43 1-49-14-26-47-19-72 11-33 11-33-41-29-38-38l-26 30-12 4a19.2 19.2 0 011.41 7.31c.64 27.19-37.72 33.73-46.83 8.12z"
        fill="#cedad5"
      />
      <path
        d="M143.81 329.26s8.38 11-3.87 27.5-22.35 30.51-18.26 40.83c0 0 18.48-30.73 33.52-31.16s5.16-18.66-11.39-37.17z"
        fill={color}
      />
      <path
        d="M143.81 329.26a13.57 13.57 0 011.71 3.44c14.68 17.24 22.49 33.33 8.39 33.74-13.14.38-28.9 23.87-32.68 29.81a12.74 12.74 0 00.45 1.35s18.48-30.73 33.52-31.16 5.16-18.67-11.39-37.18z"
        opacity={0.1}
      />
      <path
        d="M159.36 343.26c0 3.86-.43 7-1 7s-1-3.13-1-7 .54-2 1.07-2 .93-1.86.93 2z"
        fill="#ffd037"
      />
      <path
        d="M164.73 347.87c-3.39 1.85-6.34 3-6.59 2.49s2.28-2.35 5.67-4.19 2.05-.5 2.31 0 2-.15-1.39 1.7z"
        fill="#ffd037"
      />
      <path
        d="M99.54 329.26s-8.38 11 3.87 27.5 22.35 30.51 18.26 40.83c0 0-18.48-30.73-33.52-31.16S83 347.77 99.54 329.26z"
        fill={color}
      />
      <path
        d="M99.54 329.26a13.57 13.57 0 00-1.71 3.44c-14.68 17.24-22.49 33.33-8.39 33.74 13.14.38 28.9 23.87 32.68 29.81a12.74 12.74 0 01-.45 1.35s-18.48-30.73-33.52-31.16-5.15-18.67 11.39-37.18z"
        opacity={0.1}
      />
      <path
        d="M83.96 343.26c0 3.86.43 7 1 7s1-3.13 1-7-.54-2-1.07-2-.93-1.86-.93 2z"
        fill="#ffd037"
      />
      <path
        d="M78.62 347.87c3.39 1.85 6.34 3 6.59 2.49s-2.28-2.35-5.67-4.19-2.05-.5-2.31 0-2-.15 1.39 1.7z"
        fill="#ffd037"
      />
      <path
        d="M86.63 396.19s23.43-.72 30.49-5.75 36-11 37.79-3 35.21 40.11 8.76 40.32-61.46-4.12-68.51-8.41-8.53-23.16-8.53-23.16z"
        fill="#a8a8a8"
      />
      <path
        d="M164.15 424.99c-26.45.21-61.46-4.12-68.51-8.41-5.37-3.27-7.51-15-8.22-20.41h-.78s1.48 18.9 8.53 23.19 42.06 8.63 68.51 8.41c7.64-.06 10.27-2.78 10.13-6.8-1.07 2.45-3.98 3.97-9.66 4.02z"
        opacity={0.2}
      />
      <path
        d="M273.92 528.45a11.67 11.67 0 003.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 003.24-9.81 4.1 4.1 0 00-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 00-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 014.84 4.61 4.57 4.57 0 01.36.82h14.63a40.83 40.83 0 009.06-6.27zM338.92 560.26a11.67 11.67 0 003.83-5.78c.5-2.3-.48-5.05-2.68-5.89-2.46-.94-5.09.76-7.08 2.49s-4.28 3.69-6.89 3.32a10.48 10.48 0 003.24-9.81 4.1 4.1 0 00-.9-2c-1.37-1.46-3.84-.83-5.48.32-5.2 3.66-6.65 10.72-6.68 17.08-.52-2.29-.08-4.68-.1-7s-.66-5-2.64-6.22a8 8 0 00-4-.95c-2.34-.09-4.94.15-6.54 1.86-2 2.12-1.47 5.69.26 8s4.35 3.8 6.77 5.42a15 15 0 014.84 4.61 4.57 4.57 0 01.36.82h14.63a40.83 40.83 0 009.06-6.27zM418.72 409s97-40 176-2l-19 40-91 2z"
        fill={color}
      />
      <path
        d="M428.7 177.64a103.66 103.66 0 011.52-11.14l-56-5s3.88 3.35 5.57 15.85c6.57 3.9 14.24 9.15 22.43 9.15a43.8 43.8 0 0026.48-8.86z"
        opacity={0.1}
      />
      <circle cx={402.72} cy={141} r={44} fill="#ffd2d9" />
      <path
        d="M370.22 152.5h6v-17l6-18s30-14 44-11l11 10s3-24-15-33-50-5-58 2-21 19-11 52l3 8s12-4 14 7z"
        fill="#844f6e"
      />
      <g opacity={0.05}>
        <path d="M447.94 175.6l3.28-1.09 15.14-17.43a4.26 4.26 0 01-.1-2.57zM426.89 207.85c7.93-3.5 14-11.1 13.73-22 0-.59 0-1.15-.1-1.68l-.32.36-12 4a19.2 19.2 0 011.41 7.31 23.9 23.9 0 01-2.72 12.01zM543.54 310.68c-25.06 8.72-59 22.45-69.32 35.82-.25.33-.51.64-.77 1 27.46-18.83 87.77-36 87.77-36a155.87 155.87 0 01-17.68-.82zM429.22 376.5c-4-9-11.47-18.45-19.42-26.8a130 130 0 01-35.25-74.38l-.33-2.82c-16-16-52.5-2.5-52.5-2.5-1.9-31.08 9.27-51.49 17.69-62.27l-2.19.77s-29.5 22.5-26.5 71.5c0 0 36.5-13.5 52.5 2.5l.33 2.82a130 130 0 0035.25 74.38c8 8.35 15.45 17.77 19.42 26.8 0 0 24.37-7 41.44-25.76a103.52 103.52 0 01-30.44 15.76z" />
      </g>
      <path
        d="M418.22 259.5s-48 69-73 89-32-9-32-9v-64l44-5 .47 6.07.53 6.93 41-44s41-37 49-15-30 35-30 35z"
        fill="#ffd2d9"
      />
      <path
        d="M357.69 276.57a95.27 95.27 0 01-19 8.43c-9.45 2.91-20.28-.15-25.5-2v-7.47l44-5z"
        opacity={0.1}
      />
      <path
        d="M312.72 269l-2.63 10.71s15.63 7.29 28.63 3.29 23-11 25-12-8-12-8-12z"
        fill="#cedad5"
      />
      <path
        d="M600.72 391a81.22 81.22 0 0122-12 78.6 78.6 0 0021-11"
        opacity={0.1}
      />
      <path
        d="M905.22 427.5l-1.64-.11c2.38 6 5.82 20.79-8.29 36.9a56.57 56.57 0 01-40 19l-46.57 2.18 1.49 3.07 48.09-2.28a56.57 56.57 0 0040-19c18.41-21 6.92-39.76 6.92-39.76z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M678.46 479h-.15c.13 2.36.36 7.23.4 12.58.04-4.7-.11-9.32-.25-12.58zM735.42 470.36q.21.91.47 1.79c.98-.56 2.39-1.62-.47-1.79z"
        fill="#0f0"
        opacity={0.05}
      />
      <path
        d="M814.22 493.5c-10.25 4.66-87.33-8.91-97.81-10.79a7.79 7.79 0 01-1.19 2.79s88 16 99 11c5.66-2.57 7.08-5.94 6.31-9-.58 2.13-2.46 4.25-6.31 6z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M678.31 479.01c-.05-1-.09-1.51-.09-1.51s-5.09 1.82.09 1.51z"
        fill="#0f0"
        opacity={0.05}
      />
      <rect
        x={376.72}
        y={119}
        width={69}
        height={34}
        rx={4.08}
        ry={4.08}
        opacity={0.1}
      />
      <rect
        x={350.72}
        y={130}
        width={29}
        height={13}
        rx={2.44}
        ry={2.44}
        opacity={0.1}
      />
      <rect
        x={376.72}
        y={118}
        width={69}
        height={34}
        rx={4.08}
        ry={4.08}
        fill="#7679b4"
      />
      <rect
        x={384.77}
        y={120}
        width={60.88}
        height={30}
        rx={4.08}
        ry={4.08}
        fill="#565388"
      />
      <rect
        x={350.72}
        y={129}
        width={29}
        height={13}
        rx={2.44}
        ry={2.44}
        fill="#565388"
      />
      <path
        d="M430.68 119.98a68.15 68.15 0 0025.38-27.22c.67-1.31 1.31-2.78.94-4.2-.71-2.72-4.26-3.2-6.82-4.37-4.77-2.19-6.78-7.72-9.91-11.93a23.86 23.86 0 00-23.33-9c-4.56.92-8.78 3.18-13.38 3.86-9.92 1.45-20.74-4.56-29.65 0-4.06 2.09-6.81 6-9.23 9.9-6.07 9.71-13.68 20-8.16 31.39 3.17 6.51 8.23 11.91 15.34 13.81s15.34.32 22.57-.47c5.95-.64 12.18-2 18.17-1.37 7.01.76 11.39 3.62 18.08-.4z"
        opacity={0.1}
      />
      <path
        d="M430.68 117.98a68.15 68.15 0 0025.38-27.22c.67-1.31 1.31-2.78.94-4.2-.71-2.72-4.26-3.2-6.82-4.37-4.77-2.19-6.78-7.72-9.91-11.93a23.86 23.86 0 00-23.33-9c-4.56.92-8.78 3.18-13.38 3.86-9.92 1.45-20.74-4.56-29.65 0-4.06 2.09-6.81 6-9.23 9.9-6.07 9.71-13.68 20-8.16 31.39 3.17 6.51 8.23 11.91 15.34 13.81s15.34.32 22.57-.47c5.95-.64 12.18-2 18.17-1.37 7.01.76 11.39 3.62 18.08-.4z"
        fill="#844f6e"
      />
      <path
        fill={color}
        opacity={0.2}
        d="M1038.71 233.25L603.72 311V77.75L1038.71 0v233.25z"
      />
      <path
        fill={color}
        opacity={0.2}
        d="M948.59 26.91l80.45-13.87 1.17 36.05-82.58 13.81.96-35.99z"
      />
      <g opacity={0.2}>
        <path
          d="M792.11 228.18a30 30 0 018.32-.69c16.45.29 33.52 1.9 49.66-3 8.57-2.58 16.26-6.84 25.1-8.67 15-3.09 30 1.42 44.75-2.34 3-.77 6.67-1.85 8.8-.69 2.47 1.34.72 4.82 3.73 5.7a14.21 14.21 0 012.8.64c1.1.64.41 2-.69 2.87-6.69 5.43-20.3 1.82-28.68 6.21-1.86 1-3.26 2.26-5 3.3a37.67 37.67 0 01-8.69 3.2l-46.53 13c-11.14 3.11-22.43 6.26-33.95 7.63s-23.47.81-31.91-3.1c-1.81-.84-3.49-1.87-4.18-3.27-3.28-6.6 4.88-17.71 16.47-20.79z"
          fill="#252223"
          opacity={0.1}
        />
        <path
          fill={color}
          opacity={0.3}
          d="M751.06 136.06l38.93 30.78 38.93 30.77-63.94 12.09-63.94 12.08 25.01-42.86 25.01-42.86z"
        />
        <path
          fill={color}
          opacity={0.3}
          d="M791.54 128.94l38.93 30.77 38.93 30.78-63.94 12.08-63.94 12.09 25.01-42.86 25.01-42.86z"
        />
        <path
          fill={color}
          d="M851.75 64.91l-75.13 143.12L919.1 180.3l52.65-9.95-120-105.44z"
        />
        <path
          opacity={0.1}
          d="M971.75 170.35l-52.65 9.95-67.35-115.39 120 105.44z"
        />
        <path
          d="M972 298a4.09 4.09 0 00-4.34-3s1-7.86-15.2-4.69a4.13 4.13 0 00-6.41-1.3l-.69-3.65s-8.88 5.09.53 12.35l1.13 6a1.89 1.89 0 00.14.44 1.9 1.9 0 01.12.34c.43 1.75 3.59 15.62-3.59 20.36-7.69 5.15-12.09-10.72-12.09-10.72-5-20.73-14.52-20.65-16.78-20.32-.27 0-.55.06-.83.08-1.06.06-4.35 1.24-5.61 13.19-1.51 14.34-7 10.76-7 10.76-12.31-6.71-21-.84-21-.84-21.36 12.56-3.2 36.12.55 40.59-1.41 7.11-4.26 19.64-7 20.16-3.88.73-11.14 14.35 8.52 35.53l5.23-1s-16.17-21.12-3.44-31.63a16.39 16.39 0 01-1 2.25c-7.13 12.19 17.13 26.88 17.13 26.88l5.82-1.1-13.44-16.93c-5.34-7 4.62-12.72 4.62-12.72 11.79-9.86 5.72-21.76 5.72-21.76l27.52-5.2c-3.4 7.52-8.4 26 8.22 50.34l3.88-.73-3.17-29.52s1-6.35 7.74-15.93c2.68 12 8.36 32.71 16.94 41.38l5.62-1.06s-6.85-19.65-7-27c-.07-3-.2-5.95-.47-8.91l-1.4-15.48a13.27 13.27 0 005.9-13.85l-5.17-26.86a2.83 2.83 0 012.4-3.34l6.63-.9A1.66 1.66 0 00972 298z"
          transform="translate(-80.64 -166.74)"
          fill="url(#VirtualReality_svg__a)"
        />
        <path
          d="M864.36 180.62s6.22 37.06 18.39 49.34l5.52-1s-6.72-19.29-6.9-26.48c-.07-2.92-.19-5.84-.46-8.75l-2.26-25z"
          fill="#535461"
        />
        <path
          d="M864.36 180.62s6.22 37.06 18.39 49.34l5.52-1s-6.72-19.29-6.9-26.48c-.07-2.92-.19-5.84-.46-8.75l-2.26-25z"
          opacity={0.05}
        />
        <path
          d="M801.87 185.93s-4 23.81-7.78 24.53-10.94 14.09 8.37 34.88l5.14-1s-17.8-23.24-.87-32.75c-.01.03 2.94-19.85-4.86-25.66z"
          fill="#535461"
        />
        <path
          d="M801.87 185.93s-4 23.81-7.78 24.53-10.94 14.09 8.37 34.88l5.14-1s-17.8-23.24-.87-32.75c-.01.03 2.94-19.85-4.86-25.66z"
          opacity={0.05}
        />
        <path
          d="M865.89 137.82l-1.11-5.86c-9.23-7.12-.52-12.12-.52-12.12l1.19 6.28c21.87-6.3 20.7 3.18 20.7 3.18a4 4 0 014.26 2.91 1.63 1.63 0 01-1.32 2.16l-6.51.89a2.78 2.78 0 00-2.36 3.28l5.07 26.37a13.23 13.23 0 01-2.66 10.81c-1.88 2.31-4.89 4.39-9.69 5.15l-50.24 9.5s6 11.69-5.62 21.36c0 0-9.78 5.59-4.54 12.49l13.19 16.62-5.71 1.08s-23.81-14.42-16.81-26.39a23.93 23.93 0 00-1.61-24.14s-24.4-26.92-1.17-40.58c0 0 8.57-5.76 20.65.83 0 0 5.39 3.51 6.87-10.56 1.23-11.73 4.46-12.89 5.5-12.95.27 0 .54 0 .81-.08 2.22-.32 11.59-.4 16.48 19.95 0 0 4.32 15.54 11.85 10.57 7.05-4.65 4-18.27 3.53-20a1.87 1.87 0 00-.12-.33 1.86 1.86 0 01-.11-.42z"
          fill="#535461"
        />
        <path
          d="M851.71 181.63s-15.46 21.45 6.09 53l3.81-.72-3.11-29s1.84-12.17 18.53-28.14z"
          fill="#535461"
        />
        <circle
          cx={948.24}
          cy={293.24}
          r={4.07}
          transform="rotate(-10.7 17.953 640.514)"
          fill="#535461"
        />
        <path
          d="M931.09 319.94c4.7-7.15 1.9-7.62.08-9.5-1.24-1.28-11.66-1.77-18.15-1.95-.14-.5-.36-1.34-.62-2.36 0 0-.52-1.88-.76-3.2h.41l-.06-.39 8-.43c6.83-.28 7.16-3 7.16-3 .16-4.67-7.55-.19-7.55-.19-1.53.75-5.59.19-8.76-.43a17.42 17.42 0 01-.15-2 15.13 15.13 0 00-.2-3.09 5 5 0 00-1-2.42 40.82 40.82 0 00-8.06-7.36 13.88 13.88 0 01.48-5.25 6.37 6.37 0 003.36-6.79 6.15 6.15 0 00-.62-1.76c1.43-1.9.76-5.15-1.22-6.93a4.73 4.73 0 00-.68-.51 6.29 6.29 0 00-4.37-1 11.4 11.4 0 00-4.74 1.94c-1.69 1.12-3.33 2.54-5.35 2.76-1.46.16-3-.34-4.37.11-1.81.58-2.74 2.51-3.32 4.28s-1.14 3.72-2.71 4.78c-1.37.92-3.14.91-4.75 1.3a7 7 0 00-5.05 4.23 4.62 4.62 0 001.82 5.29 3.69 3.69 0 00.86.47 7.37 7.37 0 011 .39.83.83 0 01.33.55 1.77 1.77 0 01-.17.79 4.23 4.23 0 00.29 3.37 2.17 2.17 0 00.83.9 1.52 1.52 0 00.33.21c1.17.51 2.62-.64 3.78-.12h.09a8.17 8.17 0 011.16 1.61 3.32 3.32 0 001 .84 4.9 4.9 0 003.45.74 12.17 12.17 0 004.29-1.72c1.77-1 3.7-2.39 3.84-4.37.08-1.21-.55-2.38-.4-3.58a3.29 3.29 0 01.67-1.57 12.22 12.22 0 00-.21 3.08 16.36 16.36 0 00.3 2.49 17.69 17.69 0 002.28 6.07 26.42 26.42 0 013.29 7.87 10.73 10.73 0 01.06 3.72c-.64 3.58-.57 5.12-.39 5.77.11.88.4.89.4.89h.07a4.48 4.48 0 001.56 3.17c9.05 3.74 27.46-1.56 27.46-1.56-3.72 1.31-6.38 11.5-6.38 11.5a14.27 14.27 0 01-2.7 6.1c-2-.3-4.36 1.94-6.14 3.25l-.15.1a1.47 1.47 0 00-.26 2.2l7.08 7.76c4.08 2.89 6.43 3.08 7.09 2.26.43-.54.14-1.5-.86-2.43-2.42-2.25-2.07-9.55-2-10.17 1.11-2.5 5.38-10.7 9.33-16.71z"
          transform="translate(-80.64 -166.74)"
          fill="url(#VirtualReality_svg__b)"
        />
        <path
          d="M821.84 110.71s-2.06 4.73-.7 8.8l-7.67-4.07s2.44-.66 1.93-6.47z"
          fill="#f9d5c6"
        />
        <path
          d="M826.98 142.06s20.35.29 22.08 2.13 4.38 2.33 0 9.27-9.22 16.92-9.22 16.92l-5.18-2.37a13.73 13.73 0 003.57-7.18s2.46-9.93 6-11.18c0 0-17.37 5.06-26 1.36 0 0-2.3-1.73-1.23-5.48s9.98-3.47 9.98-3.47z"
          fill="#353535"
        />
        <path
          d="M815.68 115.62s-5.08-1.25-4.71 6.54a17.45 17.45 0 002.42 8c1.65 2.82 4 7.67 3.31 11.7-1 6.1 0 6.11 0 6.11l2.6-1.58a22.52 22.52 0 0111.63-3.3h1.21s-2.44-8.76-2.49-12.64c0-1.84 0-3.55-1.11-5-3.47-4.48-10.43-9.84-12.86-9.83z"
          opacity={0.1}
        />
        <path
          d="M815.61 115.26s-5.08-1.25-4.71 6.54a17.45 17.45 0 002.42 8c1.65 2.82 4 7.67 3.31 11.7-1 6.1 0 6.11 0 6.11l2.6-1.58a22.52 22.52 0 0111.63-3.3h1.21s-2.44-8.76-2.49-12.64c0-1.84 0-3.55-1.11-5-3.47-4.5-10.43-9.83-12.86-9.83z"
          fill="#409cd6"
        />
        <path
          d="M813.72 121.5a3.66 3.66 0 016-1.36 9.16 9.16 0 011.84 2.84c2.41 5.46 4.24 8.86 4.24 8.86a29.12 29.12 0 014.57 1.06c.23 1.87.53 3.81.53 3.81l-6.49.32-8.89-10.54s-2.71-2.23-1.8-4.99z"
          opacity={0.1}
        />
        <path
          d="M813.64 121.11a3.66 3.66 0 016-1.36 9.16 9.16 0 011.84 2.84c2.41 5.46 4.24 8.86 4.24 8.86s9.77 2.69 12.29 1.42c0 0 7.26-4.33 7.14.23 0 0-.29 2.62-6.75 2.85l-14.06.69-8.89-10.54s-2.71-2.27-1.81-4.99z"
          fill="#f9d5c6"
        />
        <path
          d="M814.81 111.54c.19-.91.62-.56.48-2.16l6.44 1.74a14.8 14.8 0 00-.66 2 6.93 6.93 0 01-2 .37c-1.42.28-3.05-1.28-4.26-1.95z"
          opacity={0.1}
        />
        <circle
          cx={898.88}
          cy={273.99}
          r={6.2}
          transform="rotate(-10.7 -31.41 621.242)"
          fill="#f9d5c6"
        />
        <path
          d="M820.77 105.82c-1.1.06-2.3-.29-3.23.29s-1.2 2.17-1 3.41.72 2.49.43 3.72c-.39 1.61-2 2.6-3.4 3.45s-3 2-3.15 3.62c-.13 1.17.47 2.32.4 3.5-.12 1.93-1.93 3.26-3.61 4.24a11.17 11.17 0 01-4 1.65 4.19 4.19 0 01-3.95-1.44c-.45-.62-.72-1.45-1.42-1.77-1.1-.52-2.47.6-3.57.1a2 2 0 01-.88-.93 4.25 4.25 0 01-.29-3.28 1.76 1.76 0 00.15-.77c-.09-.63-.86-.84-1.46-1.07a4.51 4.51 0 01-2.34-5.47 6.55 6.55 0 014.75-4.1c1.52-.38 3.2-.36 4.48-1.24 1.48-1 2-2.93 2.53-4.65s1.4-3.6 3.11-4.15c1.32-.43 2.75.06 4.13-.08 1.91-.2 3.45-1.58 5-2.66a10.46 10.46 0 014.47-1.87 5.67 5.67 0 014.56 1.3c2.76 2.51 2.93 7.95-1.71 8.2z"
          opacity={0.1}
        />
        <path
          d="M820.54 105.67c-1.1.06-2.3-.29-3.23.29s-1.2 2.17-1 3.41.72 2.49.43 3.72c-.39 1.61-2 2.6-3.4 3.45s-3 2-3.15 3.62c-.13 1.17.47 2.32.4 3.5-.12 1.93-1.93 3.26-3.61 4.24a11.17 11.17 0 01-4 1.65 4.19 4.19 0 01-3.94-1.42c-.45-.62-.72-1.45-1.42-1.77-1.1-.52-2.47.6-3.57.1a2 2 0 01-.88-.93 4.25 4.25 0 01-.29-3.28 1.76 1.76 0 00.15-.77c-.09-.63-.86-.84-1.46-1.07a4.51 4.51 0 01-2.34-5.47 6.55 6.55 0 014.75-4.1c1.52-.38 3.2-.36 4.48-1.24 1.48-1 2-2.93 2.53-4.65s1.4-3.6 3.11-4.15c1.32-.43 2.75.06 4.13-.08 1.91-.2 3.45-1.58 5-2.66a10.46 10.46 0 014.47-1.87 5.67 5.67 0 014.56 1.3c2.75 2.49 2.92 7.92-1.72 8.18z"
          fill="#2f302f"
        />
        <path
          d="M822.36 121.35s-8 .52-7.32 6.11-2.78-6.37-2.78-6.37l3.11-3.35 4.44.54z"
          opacity={0.1}
        />
        <path
          d="M822.15 121.19s-8 .52-7.32 6.11-2.78-6.37-2.78-6.37l3.11-3.35 4.44.54zM829.53 172.11l6.74 7.61c3.88 2.84 6.1 3 6.72 2.25.4-.52.12-1.46-.83-2.37-2.41-2.3-2-10-2-10a4.7 4.7 0 01-4.49-2.9c-1.91-.3-4.11 1.87-5.79 3.13l-.14.1a1.46 1.46 0 00-.21 2.18z"
          fill="#409cd6"
        />
        <path
          d="M840.17 169.62s-3.84.53-4.49-2.9a4.82 4.82 0 004.49 2.9zM829.53 172.11l6.74 7.61c3.88 2.84 6.1 3 6.72 2.25-1.94-.6-7.43-3-13.09-12.11l-.14.1a1.46 1.46 0 00-.23 2.15z"
          opacity={0.1}
        />
        <path
          d="M719.19 231.67s-17.83 15.94 22.8 27.59c0 0 5.3-16.72-6.07-27.38a12.4 12.4 0 00-16.46-.48z"
          fill={color}
        />
        <path
          d="M719.36 231.37s19.73 9.89 22.63 27.89"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
        <path
          d="M740.87 259.43s-10.35-20.22-5.84-37.39a34.41 34.41 0 00-1.28-21.78 57.87 57.87 0 00-4.89-9.39"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          d="M731.64 180.08c.5 2.62-2.82 11.13-2.82 11.13s-6.19-6.71-6.68-9.33a4.835 4.835 0 119.5-1.8zM742.24 193.13c-1 2.47-8.41 7.81-8.41 7.81s-1.55-9-.54-11.47a4.858 4.858 0 119 3.66zM746.59 218.03c-2.12 1.62-11.21 2.5-11.21 2.5s3.21-8.55 5.32-10.17a4.832 4.832 0 015.88 7.67zM745.64 237.61c-1.81 2-10.62 4.35-10.62 4.35s1.71-9 3.53-10.92a4.833 4.833 0 117.09 6.57zM723.95 203.33c2.23 1.47 11.35 1.71 11.35 1.71s-3.79-8.3-6-9.78a4.836 4.836 0 10-5.33 8.07zM723.13 226.26c2.57.74 11.34-1.77 11.34-1.77s-6.1-6.79-8.67-7.53a4.833 4.833 0 10-2.67 9.29zM725.36 248.63c2.4 1.16 11.48.18 11.48.18s-4.87-7.72-7.27-8.88a4.837 4.837 0 00-4.21 8.71z"
          fill={color}
        />
        <path
          d="M731.64 180.08c.5 2.62-2.82 11.13-2.82 11.13s-6.19-6.71-6.68-9.33a4.835 4.835 0 119.5-1.8zM742.24 193.13c-1 2.47-8.41 7.81-8.41 7.81s-1.55-9-.54-11.47a4.858 4.858 0 119 3.66zM746.59 218.03c-2.12 1.62-11.21 2.5-11.21 2.5s3.21-8.55 5.32-10.17a4.832 4.832 0 015.88 7.67zM745.64 237.61c-1.81 2-10.62 4.35-10.62 4.35s1.71-9 3.53-10.92a4.833 4.833 0 117.09 6.57zM723.95 203.33c2.23 1.47 11.35 1.71 11.35 1.71s-3.79-8.3-6-9.78a4.836 4.836 0 10-5.33 8.07zM723.13 226.26c2.57.74 11.34-1.77 11.34-1.77s-6.1-6.79-8.67-7.53a4.833 4.833 0 10-2.67 9.29zM725.36 248.63c2.4 1.16 11.48.18 11.48.18s-4.87-7.72-7.27-8.88a4.837 4.837 0 00-4.21 8.71z"
          opacity={0.25}
        />
        <path
          d="M760.36 263.26s-10.35-20.22-5.84-37.39a34.41 34.41 0 00-1.27-21.73 57.87 57.87 0 00-4.89-9.39"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <path
          d="M751.17 183.9c.5 2.62-2.82 11.13-2.82 11.13s-6.19-6.71-6.68-9.33a4.835 4.835 0 019.5-1.8zM761.77 196.95c-1 2.47-8.41 7.81-8.41 7.81s-1.55-9-.54-11.47a4.858 4.858 0 019 3.66zM766.12 221.85c-2.12 1.62-11.21 2.5-11.21 2.5s3.21-8.55 5.32-10.17a4.832 4.832 0 015.88 7.67zM765.17 241.43c-1.81 2-10.62 4.35-10.62 4.35s1.71-9 3.53-10.92a4.833 4.833 0 017.09 6.57zM743.48 207.15c2.23 1.47 11.35 1.71 11.35 1.71s-3.79-8.3-6-9.78a4.836 4.836 0 00-5.33 8.07zM742.66 230.07c2.57.74 11.34-1.77 11.34-1.77s-6.1-6.79-8.67-7.53a4.833 4.833 0 00-2.67 9.29zM744.92 252.45c2.4 1.16 11.48.18 11.48.18s-4.87-7.72-7.27-8.88a4.837 4.837 0 10-4.21 8.71z"
          fill={color}
        />
        <path
          d="M801.68 78.46l-1.76.33a1.252 1.252 0 00-.47-2.46l-14.25 2.69a1.252 1.252 0 00.47 2.46l1.76-.33a1.252 1.252 0 10.47 2.46l-2.46.47a1.252 1.252 0 00.47 2.46l14.25-2.69a1.252 1.252 0 10-.47-2.46l2.46-.47a1.252 1.252 0 10-.47-2.46zM775.87 102.93l-1.76.33a1.252 1.252 0 10-.47-2.46l-14.28 2.69a1.252 1.252 0 00.47 2.46l1.76-.33a1.252 1.252 0 10.47 2.46l-2.46.47a1.252 1.252 0 10.47 2.46l14.29-2.69a1.252 1.252 0 10-.47-2.46l2.46-.47a1.252 1.252 0 10-.47-2.46zM921.64 71.67l-1.76.33a1.252 1.252 0 10-.47-2.46l-14.24 2.72a1.252 1.252 0 00.47 2.46l1.76-.33a1.252 1.252 0 10.47 2.46l-2.51.41a1.252 1.252 0 00.47 2.46l14.25-2.69a1.252 1.252 0 10-.47-2.46l2.46-.47a1.252 1.252 0 10-.47-2.46z"
          fill="#252223"
          opacity={0.1}
        />
        <circle
          cx={811.95}
          cy={269.5}
          r={13.27}
          transform="rotate(-10.7 -118.35 616.763)"
          fill={color}
          opacity={0.3}
        />
        <path
          d="M810.48 171.45s6.67 5.89 9.78 11.12 2.12 7 2.12 7"
          opacity={0.05}
        />
      </g>
    </svg>
  );
};

SvgVirtualReality.propTypes = {
  color: PropTypes.string
};
SvgVirtualReality.defaultProps = {
  color: "primary"
};
export default SvgVirtualReality;
