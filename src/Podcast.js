import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPodcast = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1140.21 776"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Podcast_svg__a"
          x1={623.53}
          y1={767.89}
          x2={623.53}
          y2={127.97}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M468.6 764.57c77.07-42.65 165.11-56.28 251.15-38 121.92 25.92 275.15 15.76 304.83-184.21 50.69-341.52-161.73-431.66-161.73-431.66S721.59 98.87 638.06 53.83c-118.65-64-254.27-72.15-373.52-18-76.26 34.6-139.06 82.78-149.79 148.93-30 185 19.27 286.93-72.9 347.32s-13.4 226.19 57.26 220.45 230.33-68.71 292.55 4.23c22.1 25.87 50.06 22.69 76.94 7.81z"
        fill={color}
        opacity={0.1}
      />
      <path
        fill={color}
        opacity={0.1}
        d="M516.27 150.21h318v22h-318zM516.27 245.21h318v22h-318zM516.27 344.21h318v22h-318zM544.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M544.27 102.21h20v4h-20zM544.27 133.21h20v4h-20zM574.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M574.27 102.21h20v4h-20zM574.27 133.21h20v4h-20zM604.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M604.27 102.21h20v4h-20zM604.27 133.21h20v4h-20zM634.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M634.27 102.21h20v4h-20zM634.27 133.21h20v4h-20zM664.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M664.27 102.21h20v4h-20zM664.27 133.21h20v4h-20zM694.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M694.27 102.21h20v4h-20zM694.27 133.21h20v4h-20zM724.27 93.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M724.27 102.21h20v4h-20zM724.27 133.21h20v4h-20zM714.552 294.674l17.878-8.964 25.55 50.953-17.88 8.965z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M718.591 302.726l17.879-8.964 1.792 3.575-17.878 8.965zM732.478 330.44l17.878-8.964 1.793 3.576-17.878 8.965zM544.27 189.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M544.27 198.21h20v4h-20zM544.27 229.21h20v4h-20zM574.27 189.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M574.27 198.21h20v4h-20zM574.27 229.21h20v4h-20zM604.27 189.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M604.27 198.21h20v4h-20zM604.27 229.21h20v4h-20zM729.27 189.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M729.27 198.21h20v4h-20zM729.27 229.21h20v4h-20zM759.27 189.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M759.27 198.21h20v4h-20zM759.27 229.21h20v4h-20zM789.27 189.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M789.27 198.21h20v4h-20zM789.27 229.21h20v4h-20zM544.27 287.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M544.27 296.21h20v4h-20zM544.27 327.21h20v4h-20zM574.27 287.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M574.27 296.21h20v4h-20zM574.27 327.21h20v4h-20zM604.27 287.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M604.27 296.21h20v4h-20zM604.27 327.21h20v4h-20zM634.27 287.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M634.27 296.21h20v4h-20zM634.27 327.21h20v4h-20zM664.27 287.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M664.27 296.21h20v4h-20zM664.27 327.21h20v4h-20zM694.27 287.21h20v57h-20z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M694.27 296.21h20v4h-20zM694.27 327.21h20v4h-20zM774.27 98.29v51.92h-20V94.48q10.04 1.77 20 3.81z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M754.27 102.21h20v4h-20zM754.27 133.21h20v4h-20zM804.27 105.23v45h-20v-49.8c2.6.57 5.19 1.17 7.78 1.78q6.14 1.44 12.22 3.02z"
      />
      <path
        d="M804.27 105.23v1h-20v-4h7.78q6.14 1.42 12.22 3zM784.27 133.21h20v4h-20z"
        fill={color}
        opacity={0.1}
      />
      <g opacity={0.1} fill={color}>
        <path d="M664.66 225.49s-6.06-2.06-9 3.29a9.75 9.75 0 00.13 9.38c1.92 3.46 5.87 8 13.35 7.56 6.35-.34 8.46-5.18 9-9.69a10 10 0 00-13.22-10.66z" />
        <path
          d="M657.11 238.65a9.75 9.75 0 01-.13-9.38c2.92-5.34 9-3.29 9-3.29l.31-.11a9.87 9.87 0 017.13.16 9.87 9.87 0 00-8.41-.8l-.31.11s-6.06-2.06-9 3.29a9.75 9.75 0 00.13 9.38 14.57 14.57 0 006.86 6.49 15 15 0 01-5.58-5.85z"
          opacity={0.1}
        />
        <path d="M661.53 228.06s2.25 1.77 7.71 0" opacity={0.2} />
        <path d="M661.04 215.21s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z" />
        <path
          d="M661.04 215.21s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z"
          opacity={0.2}
        />
        <path d="M676.78 216.09s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z" />
        <path
          d="M676.78 216.09s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z"
          opacity={0.1}
        />
        <path d="M664.86 224.66s1.59-7.6 11.91-8.58" />
      </g>
      <g opacity={0.1} fill={color}>
        <path d="M792.66 324.49s-6.06-2.06-9 3.29a9.75 9.75 0 00.13 9.38c1.92 3.46 5.87 8 13.35 7.56 6.35-.34 8.46-5.18 9-9.69a10 10 0 00-13.22-10.66z" />
        <path
          d="M785.11 337.65a9.75 9.75 0 01-.13-9.38c2.92-5.34 9-3.29 9-3.29l.31-.11a9.87 9.87 0 017.13.16 9.87 9.87 0 00-8.41-.8l-.31.11s-6.06-2.06-9 3.29a9.75 9.75 0 00.13 9.38 14.57 14.57 0 006.86 6.49 15 15 0 01-5.58-5.85z"
          opacity={0.1}
        />
        <path d="M789.53 327.06s2.25 1.77 7.71 0" opacity={0.2} />
        <path d="M789.04 314.21s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z" />
        <path
          d="M789.04 314.21s3.85 10.44 3.53 13.17l3.05-.32s-5.14-9.15-3.85-12.85z"
          opacity={0.2}
        />
        <path d="M804.78 315.09s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z" />
        <path
          d="M804.78 315.09s-6.07-3.1-8.78-.54-3.13 9.11-3.13 9.11 9.89 1.34 11.91-8.57z"
          opacity={0.1}
        />
        <path d="M792.86 323.66s1.59-7.6 11.91-8.58" />
      </g>
      <ellipse cx={995.02} cy={610.84} rx={54} ry={19.2} opacity={0.1} />
      <path
        d="M995.06 611s30.81-104.59-5.78-181.58c-15.35-32.31-20.45-68.58-13.36-103.64a277.84 277.84 0 0114.67-48.65"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M967.83 228.47c0 12.82 23.21 50 23.21 50s23.21-37.17 23.21-50a23.21 23.21 0 10-46.42 0zM929.46 299.47c7 10.76 46.65 29.35 46.65 29.35s-.72-43.82-7.69-54.58a23.225 23.225 0 10-39 25.23zM931.11 420.81c11.45 5.77 55.09 1.78 55.09 1.78s-22.74-37.46-34.19-43.23a23.21 23.21 0 10-20.9 41.45zM953.11 512.33c10.31 7.62 54 11.07 54 11.07s-16.08-40.77-26.39-48.39a23.211 23.211 0 10-27.61 37.32zM1024.85 331.3c-9.19 8.93-52 18.18-52 18.18s10.49-42.55 19.68-51.48a23.21 23.21 0 1132.34 33.3zM1049.11 438.66c-11.45 5.77-55.09 1.78-55.09 1.78s22.74-37.46 34.19-43.23a23.21 23.21 0 1120.9 41.45zM1058.45 546.25c-10.31 7.62-54 11.07-54 11.07s16.08-40.77 26.39-48.39a23.21 23.21 0 1127.6 37.32z"
        fill={color}
      />
      <ellipse cx={860.62} cy={555.64} rx={54} ry={19.2} opacity={0.1} />
      <path
        d="M858.43 558.37s14.43-49-2.71-85.07a77.4 77.4 0 01-6.26-48.56 130.18 130.18 0 016.88-22.79"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M845.67 379.15c0 6 10.87 23.42 10.87 23.42s10.87-17.42 10.87-23.42a10.875 10.875 0 00-21.75 0zM827.7 412.41c3.26 5 21.86 13.75 21.86 13.75s-.34-20.53-3.6-25.57a10.876 10.876 0 10-18.26 11.82zM828.48 469.26c5.36 2.7 25.81.84 25.81.84s-10.65-17.55-16-20.26a10.874 10.874 0 10-9.79 19.42zM838.76 512.14c4.83 3.57 25.3 5.19 25.3 5.19s-7.54-19.1-12.36-22.67a10.875 10.875 0 10-12.93 17.49zM872.39 427.33c-4.31 4.18-24.38 8.52-24.38 8.52s4.92-19.94 9.22-24.12a10.873 10.873 0 0115.15 15.6zM883.78 477.63c-5.36 2.7-25.81.84-25.81.84s10.65-17.55 16-20.26a10.874 10.874 0 019.79 19.42zM888.11 528c-4.83 3.57-25.3 5.19-25.3 5.19s7.54-19.1 12.36-22.67A10.874 10.874 0 11888.11 528z"
        fill={color}
      />
      <path
        d="M1168.22 717.85L858.58 553.6h-64.93l16.8-139.84a23.18 23.18 0 00-20.71-25.83L788 388h-.17l-236.21 3.59A25.49 25.49 0 00525 411.22l-11 80.36-1.59-2.43-.77-1.17c5.81-3.78-5.65-26.25-15.36-43l-.88-1.52c6.16-2.57 13-5 13-5L493.25 429s-13.94-20.18-28.78-36.55c10-62.62-11.12-135-11.37-136l-.56.15a29.9 29.9 0 004.46-15.8 30 30 0 00-10.12-22.48c-.59-5.36-1.44-10.88-2.66-16.69-.22-1-.45-2.11-.7-3.17-1.14-5-2.29-10-3.8-14.9a75 75 0 00-3.89-10.21c-7.89-16.67-24.12-28.59-41.9-32.79-9.15-2.16-18.53 1.19-27.07-.41-4.3-.79-8.15-4.92-12.34-6.59-5.31-2.12-11.06-3.11-16.68-4-7-1.17-14.27-2.33-21.24-.81-11.5 2.5-20.27 11.82-26.72 21.66s-11.46 20.74-19.43 29.4c-5.33 5.8-11.89 10.46-16.64 16.74-7 9.24-9.43 21-11.68 32.42-2.78 14.05-5.56 28.3-5.5 42.57 0 3.31.05 6.63.34 9.95.73 8.52 2.67 16.92 3.13 25.45 0 .92.07 1.84.09 2.76-.1 15.61-4.71 31-9.29 46-1.46 4.77-2.94 9.58-4.67 14.28-9.2.78-18 2.62-24.71 6.24-24.52 13.12-43.39 42.38-43.39 42.38l-35.87 33s14.16 6.61 20.77 17.94a8 8 0 00.81 1.13l-.52 1.2-21.06 48.64s13.22 9.44 33 7.55a24.56 24.56 0 019.6.7c0 .6-.06 1.21-.08 1.85-1.21 27.83-1.85 88.81 12.55 130l-32.54 38-65 19.25-2.83 50h1093.15zM230.73 531.4a39.82 39.82 0 018.11 2.58v34.76c-1.72-12.28-4.11-24.86-7.44-35.32-.21-.68-.4-1.35-.67-2.02zm187.69 66.89v-.36a17.74 17.74 0 01.49-3.6 10.18 10.18 0 012.61-4.86c2.41-2.41 4.9-5 7.39-7.81a36.39 36.39 0 006.54 10.81c3.2 3.57 10.35 6.78 20.39 9.68a367.91 367.91 0 00-37.42-3.86zm81.61-4.8l-32.68 9.67c-15.45-3.46-26.44-7.42-30.51-12a35 35 0 01-6.52-11.16c11.66-13.52 23-31.71 25.6-56.55.07-.65.12-1.32.18-2a65.1 65.1 0 0010-7l.59 1.38a175.9 175.9 0 0036.65 53.58zm-48.44-335.43c2.57 9.27 20 74.9 11.26 132.61-5.44-5.86-10.93-11.1-15.85-14.55a30.78 30.78 0 00-3.65-2.17c-1.09-10.58-1.59-21.55-1.67-32.42.1-13.46.9-26.81 2-39.51 1.19-13.46 2.59-26.3 3.46-38.93a30.21 30.21 0 004.45-5.03z"
        transform="translate(-29.89 -62)"
        fill="url(#Podcast_svg__a)"
      />
      <path
        d="M405.75 212.22h-8.53v-59h8.53a24.56 24.56 0 0124.56 24.56v9.82a24.56 24.56 0 01-24.56 24.62z"
        fill="#dfe6f5"
      />
      <rect
        x={419.88}
        y={215.27}
        width={14.48}
        height={58.95}
        rx={6.03}
        ry={6.03}
        transform="rotate(-180 412.17 213.745)"
        fill="#535461"
      />
      <g opacity={0.1}>
        <path d="M405.75 212.22h-8.53v-59h8.53a24.56 24.56 0 0124.56 24.56v9.82a24.56 24.56 0 01-24.56 24.62z" />
        <rect
          x={419.88}
          y={215.27}
          width={14.48}
          height={58.95}
          rx={6.03}
          ry={6.03}
          transform="rotate(-180 412.17 213.745)"
        />
      </g>
      <path fill="#865a61" d="M260.72 184.45h149.09V339.1H260.72z" />
      <path opacity={0.1} d="M260.72 163.15h149.09V317.8H260.72z" />
      <path
        d="M404.72 312.71l-9 65.4-4.24 30.74-1.56 11.29-13.07 25.48-24 46.76-46.3 5.56-81.44-114.85S182.47 301.6 247.3 309c36.35 4.16 45-28.38 45.65-57.77a218.52 218.52 0 00-4-44.1l64.82 31.49q-2.26 10.53-3.4 19.35c-3.16 24.06-.54 39.06 4.94 48.15 14.59 24.21 49.41 6.59 49.41 6.59z"
        fill="#fdc2cc"
      />
      <path
        d="M353.79 238.63q-2.26 10.53-3.4 19.35a75.41 75.41 0 01-20.68 2.88 74.64 74.64 0 01-36.76-9.61 218.52 218.52 0 00-4-44.1z"
        opacity={0.1}
      />
      <circle cx={329.71} cy={183.99} r={75.01} fill="#fdc2cc" />
      <path
        d="M429.73 610.9L121.35 635l50-58.34c53.65-32.78 53.19-77.84 46.06-105.79a108.76 108.76 0 00-9.95-25.71l106.59.5h.9l8.76 19.91.4.9 6.52 14.81 22.22-39.82 7.73-12.46 4.32-7s63.9-14.82 64.82 23.15a101.5 101.5 0 01-.51 13.06c-3.18 30.56-19.9 50.88-33.75 64.73-15.74 15.73 34.27 87.96 34.27 87.96z"
        fill="#ec7580"
      />
      <path
        d="M392.9 529.54c-2.26 9 3.44 24.47 11 39.66-36.25 3.9-76 1.87-76 1.87l-40.79 11.12-114.82 33.34c-5-6.47-9-14.6-12.31-23.76l11.38-13.28c35.81-21.88 47.51-49.23 49.22-73.31a103 103 0 00-3.16-32.49 108.76 108.76 0 00-9.94-25.69l106.59.5h.9l8.76 19.91.4.9 6.52 14.81 22.22-39.82 7.71-12.46 4.32-7S428.8 409 429.73 447a101.5 101.5 0 01-.51 13.06c-3.18 30.56-19.9 50.88-33.75 64.73a10 10 0 00-2.57 4.75z"
        fill="#ec7580"
      />
      <path
        d="M633.46 577.56c-1.85 22.22-55.56-7.41-55.56-7.41s-16.67-5.56-73.16-41.67a172.48 172.48 0 01-65-75.89 109 109 0 01-5.41-14.86L473.25 409l11.35 17.35L522.33 484l55.56 37s57.42 34.34 55.57 56.56z"
        fill="#fdc2cc"
      />
      <path
        fill="#cbcdda"
        d="M1127.96 650.72H60.23l106.89-31.63 267.22-79.08 170.4-50.43h219.48l303.74 161.14zM60.23 650.72l-2.78 49.08h1072.36l-1.85-49.08H60.23z"
      />
      <path
        opacity={0.1}
        d="M60.23 650.72l-2.78 49.08h1072.36l-1.85-49.08H60.23z"
      />
      <path
        d="M340.16 581.31l225.69-23.19 2.78 44.45-103.16 10.23a67.38 67.38 0 01-21.22-1.65l-104.28-26.94a1.48 1.48 0 01.19-2.9z"
        fill="#535461"
      />
      <path
        d="M340.16 581.31l225.69-23.19 2.78 44.45-103.16 10.23a67.38 67.38 0 01-21.22-1.65l-104.28-26.94a1.48 1.48 0 01.19-2.9z"
        opacity={0.2}
      />
      <path
        d="M340.16 580.38l227.55-23.19 2.78 44.45L467.32 610a67.38 67.38 0 01-21.21-1.62l-106.14-25.09a1.48 1.48 0 01.19-2.91z"
        fill="#535461"
      />
      <path
        d="M394.11 582l120.32-12.26 1.47 23.5-54.55 4.43a35.63 35.63 0 01-11.22-.87l-56.12-13.27a.78.78 0 01.1-1.53z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        d="M484.6 426.37c-.73 1-2 1.45-3.94 1.17-18.52-2.78-39.82 24.08-39.82 24.08s-.38.36-1.07 1a109 109 0 01-5.41-14.86L473.25 409zM429.22 460c-8.71 4.85-20.7 8.33-30.05-1-16.15-16.15-44.46-14-46.22-13.9 2.89-.4 5.45-6.34 7.63-14.3l4.32-7s63.9-14.8 64.83 23.2a101.5 101.5 0 01-.51 13z"
        opacity={0.1}
      />
      <path
        d="M395.7 378.11l-5.8 42-13.07 25.48a79.68 79.68 0 00-24.82-2.33c9.21-1.27 15.16-58.82 15.16-58.82l.53-.12z"
        opacity={0.1}
      />
      <path
        d="M480.66 425.69c-18.52-2.78-39.82 24.08-39.82 24.08s-25 24.08-41.67 7.41c-16.15-16.15-44.46-14-46.22-13.9 9.21-1.28 15.16-58.83 15.16-58.83l.53-.12 88.87-19.76s5.3 8.12 11.28 18.46c10.79 18.63 23.79 44.45 11.87 42.66z"
        fill="#ec7580"
      />
      <path
        d="M458.43 388.65c.93 1.85-14.82 11.11-22.22 8.33s-25.93 12-27.78 13.89-43.52-2.78-43.52-2.78a195.82 195.82 0 003.73-23.76l88.87-19.76s5.3 8.12 11.28 18.46c-5.53 2.27-10.81 4.71-10.36 5.62z"
        opacity={0.1}
      />
      <path
        d="M404.72 312.71l-9 65.4-4.24 30.74c-12.42-.93-27.48-2.6-27.48-2.6s15.74-65.75-10.19-100c0 0 .55 0 1.54-.1 14.55 24.18 49.37 6.56 49.37 6.56z"
        opacity={0.1}
      />
      <path
        d="M354.72 306.23s47.23-3.7 65.75 9.26 45.38 51.86 45.38 51.86l14.82 9.26s-23.15 8.33-22.22 10.19-14.82 11.11-22.22 8.33-25.93 12-27.78 13.89-43.52-2.78-43.52-2.78 15.72-65.75-10.21-100.01z"
        fill="#ec7580"
      />
      <path
        d="M695.94 561.35c-10.72-.26-262.75-6.8-286.81-33.64-25.62-28.58-.75-110.93 20.19-170.39 22.79-64.73-4.38-157.68-4.65-158.74l1.79-.47c.28 1.07 27.59 94.56 4.61 159.82-32.57 92.51-39.3 147.64-20.56 168.54 23.54 26.25 282.86 33 285.48 33z"
        fill="#dfe6f5"
      />
      <path
        d="M521.7 330.61l233.14-3.54a22.74 22.74 0 0120.27 25.34l-26.45 220.2a22.74 22.74 0 01-21.21 20l-238.29 14.75a22.74 22.74 0 01-23.86-26l31.64-231.42a22.74 22.74 0 0124.76-19.33z"
        fill="#535461"
      />
      <path
        d="M521.7 330.61l233.14-3.54a22.74 22.74 0 0120.27 25.34l-26.45 220.2a22.74 22.74 0 01-21.21 20l-238.29 14.75a22.74 22.74 0 01-23.86-26l31.64-231.42a22.74 22.74 0 0124.76-19.33z"
        opacity={0.2}
      />
      <path
        d="M523.55 330.61l233.14-3.54A22.74 22.74 0 01777 352.41l-26.45 220.2a22.74 22.74 0 01-21.21 20l-238.32 14.75a22.74 22.74 0 01-23.86-26l31.64-231.42a22.74 22.74 0 0124.75-19.33z"
        fill="#535461"
      />
      <circle cx={637.62} cy={455.78} r={11.11} fill="#fff" opacity={0.3} />
      <path
        d="M403.9 569.21c-36.25 3.9-76 1.87-76 1.87l-40.79 11.11-114.82 33.34c-5-6.47-9-14.6-12.31-23.76l11.38-13.28c35.81-21.88 47.51-49.23 49.22-73.31 3.06 23.95 3.57 45.52 3.57 45.52l46.3-4.63 67.27-16a60.74 60.74 0 0114.14-1.65c8.76 0 24.35.19 41 1.09-2.22 9.01 3.48 24.49 11.04 39.7z"
        opacity={0.1}
      />
      <path
        d="M454.73 557.19c-21.3 25-130.57 19.45-130.57 19.45l-40.75 11.11-114.83 33.33c-.5-.65-1-1.31-1.46-2L434.35 540c17.06 3.44 27.53 8.8 20.38 17.19z"
        opacity={0.1}
      />
      <path
        d="M454.73 555.34c-21.3 25-130.57 19.45-130.57 19.45l-40.75 11.1-114.83 33.34c-27-35-26.4-118.41-24.93-152.15.4-9.06.85-14.54.85-14.54s38.89-24.08 56.49 0c3.14 4.29 5.77 10.29 8 17.25 10.21 32.09 11.46 84.61 11.46 84.61l46.3-4.63 67.27-16a60.78 60.78 0 0114.15-1.65c27.88.08 124.84 1.76 106.56 23.22z"
        fill="#fdc2cc"
      />
      <path
        d="M208.98 469.8c-5.91-1.28-13.08-1-22.8 3.12-19.45 8.33-34.26 6.48-34.26 6.48s1.19-9.45-8.26-12.32c.4-9.06.85-14.54.85-14.54s38.89-24.08 56.49 0c3.11 4.29 5.76 10.29 7.98 17.26zM324.11 468.29c-.62.13-8.95 1.7-25-1.86-16.67-3.7-23.15 3.7-32.41 7.41s-33.29 5.56-42.59 1.86c-2.19-.88-4.39-2-6.72-3a108.76 108.76 0 00-9.91-25.7l106.59.5 9.66 19.91z"
        opacity={0.1}
      />
      <path
        d="M324.11 466.44s-8.33 1.85-25-1.85-23.15 3.7-32.41 7.41-33.34 5.56-42.6 1.85-18.52-11.11-38-2.78-34.26 6.48-34.26 6.48 1.85-14.82-17.59-13-32.41-7.41-32.41-7.41l20.66-47.72 6.2-14.33 154.94-10.59h.74z"
        fill="#ec7580"
      />
      <path
        d="M299.11 422c-10.19-16.67-63.9-1.85-63.9-1.85s-25.93 7.41-31.49-6.48S158.4 409 158.4 409s-28.85 10.82-35.83.44l6.2-14.33 154.87-10.61z"
        opacity={0.1}
      />
      <path
        d="M254.7 312.71s-50.93-10.19-75 2.78-42.59 41.67-42.59 41.67l-35.2 32.41s13.89 6.48 20.37 17.59 36.12 0 36.12 0 39.82-9.26 45.38 4.63 31.49 6.48 31.49 6.48 53.71-14.82 63.9 1.85z"
        fill="#ec7580"
      />
      <path
        d="M313.41 75.43c-6.9-1.16-14-2.29-20.84-.8-11.28 2.45-19.88 11.6-26.21 21.24s-11.25 20.34-19.06 28.83c-5.23 5.69-11.66 10.26-16.32 16.42-6.86 9.07-9.25 20.64-11.46 31.8-3.24 16.38-6.49 33-5.06 49.67.72 8.36 2.62 16.59 3.07 25 .91 16.89-4.08 33.47-9 49.65-3.41 11.18-6.93 22.57-13.67 32.12-4.47 6.33-10.2 11.63-15.66 17.12a9.61 9.61 0 00-2.87 4.21c-1.18 4.78 4.59 8 9 10.16 13.49 6.73 22.34 19.86 32.83 30.68s25.5 20.11 39.93 15.77c4.28-1.29 8.34-3.74 12.8-3.66 3 .05 5.88 1.27 8.73 2.27a65.53 65.53 0 0022.07 3.7 8.53 8.53 0 004.79-1c2.23-1.51 2.66-4.55 2.88-7.23 1.41-16.82 2.81-33.7 1.86-50.55-2.15-38.16-37.41-82.3-24-118.11 5.83-15.62 16.49-29.06 22.39-44.65 6.22-16.43 28.15-29.77 32.5-46.8.49-1.92 1.16-4 2.84-5 2.31-1.42 5.32-.18 7.55 1.36 12.62 8.7 16.73 25.06 21.32 39.68a245.14 245.14 0 0013.71 34.34c3 6 9.44 12.95 15.08 9.31-2.84 25.28-19.24 47.36-22.95 72.52-3.62 24.52 5.15 49.58 1.75 74.12a76 76 0 01-20.45 42 101.68 101.68 0 0037.83.34c12.69-2.29 26.27-8.3 30.85-20.36 5-13.27-2.73-27.51-6.66-41.15-9.43-32.79-8.7-71.57-5.71-105.56 3.08-34.95 7.7-65.55-.13-99.75-1.92-8.39-3.87-16.85-7.55-24.63-7.74-16.35-23.66-28.05-41.11-32.17-9-2.12-18.18 1.17-26.56-.39-4.22-.79-8-4.83-12.1-6.47-5.26-2.15-10.9-3.11-16.41-4.03z"
        opacity={0.1}
      />
      <path
        d="M429.59 387.66c-4.58 12.06-18.16 18.07-30.86 20.36a101.89 101.89 0 01-37.83-.34 76.06 76.06 0 0020.45-42c3.41-24.55-5.36-49.61-1.75-74.12 3.71-25.17 20.11-47.25 22.95-72.53-5.64 3.64-12.13-3.28-15.09-9.31a245.69 245.69 0 01-13.71-34.34c-4.59-14.62-8.7-31-21.32-39.68-2.23-1.54-5.24-2.78-7.55-1.35-1.69 1-2.35 3.11-2.84 5-4.34 17-26.28 30.36-32.49 46.79-5.91 15.59-16.57 29-22.4 44.65-13.36 35.8 21.9 79.94 24 118.1.94 16.85-.46 33.74-1.86 50.55-.23 2.69-.66 5.73-2.89 7.24a8.51 8.51 0 01-4.78 1 65.31 65.31 0 01-22.01-3.68c-2.85-1-5.71-2.22-8.73-2.27-4.46-.07-8.52 2.38-12.8 3.66-14.43 4.34-29.45-4.95-39.93-15.77s-19.36-23.93-32.84-30.62c-4.41-2.2-10.18-5.38-9-10.17a9.68 9.68 0 012.87-4.2c5.46-5.49 11.2-10.8 15.67-17.12 6.74-9.55 10.25-20.94 13.67-32.12 4.94-16.18 9.93-32.76 9-49.65-.44-8.37-2.34-16.6-3.07-25-1.44-16.64 1.82-33.28 5.06-49.66 2.2-11.16 4.59-22.73 11.46-31.8 4.67-6.16 11.09-10.73 16.33-16.42 7.82-8.49 12.72-19.19 19.06-28.84s14.94-18.79 26.22-21.24c6.83-1.49 13.94-.35 20.84.8 5.51.93 11.15 1.89 16.36 4 4.11 1.64 7.89 5.69 12.1 6.46 8.38 1.57 17.59-1.72 26.56.4 17.45 4.11 33.37 15.81 41.11 32.16a73.61 73.61 0 013.82 10c1.48 4.8 2.61 9.71 3.73 14.61.24 1 .47 2.08.69 3.11 6.85 32.56 2.43 56.27-.56 90.14s-3.72 79.25 5.7 112c3.93 13.68 11.7 27.93 6.66 41.2z"
        fill="#865a61"
      />
      <path
        d="M322.77 446.53s7.41 12 7.41 20.37c0 0 5.56-20.37 10.19-20.37"
        opacity={0.05}
      />
      <path
        d="M305.17 449.3v61.12a44.25 44.25 0 01-9.54 27.51 45.65 45.65 0 01-3.39 3.82 44.45 44.45 0 01-63 0 45.66 45.66 0 01-3.39-3.82 44.25 44.25 0 01-9.54-27.51V449.3a44.21 44.21 0 0110.27-28.42 42.24 42.24 0 013.81-4 44.41 44.41 0 0160.75 0c.36.32.71.67 1.06 1 1 1 1.87 2 2.75 3a44.21 44.21 0 0110.22 28.42z"
        fill="#dfe6f5"
      />
      <path
        d="M305.17 449.3v61.12a44.25 44.25 0 01-9.54 27.51 45.65 45.65 0 01-3.39 3.82 44.45 44.45 0 01-63 0 45.66 45.66 0 01-3.39-3.82 44.25 44.25 0 01-9.54-27.51V449.3a44.21 44.21 0 0110.27-28.42 42.24 42.24 0 013.81-4 44.41 44.41 0 0160.75 0c.36.32.71.67 1.06 1 1 1 1.87 2 2.75 3a44.21 44.21 0 0110.22 28.42z"
        opacity={0.1}
      />
      <path
        d="M307.03 449.3v61.12a44.25 44.25 0 01-9.54 27.51 45.65 45.65 0 01-3.39 3.82 44.45 44.45 0 01-63 0 45.66 45.66 0 01-3.39-3.82 44.25 44.25 0 01-9.6-27.51V449.3a44.21 44.21 0 0110.27-28.42 42.24 42.24 0 013.81-4 44.41 44.41 0 0160.75 0c.36.32.71.67 1.06 1 1 1 1.87 2 2.75 3a44.21 44.21 0 0110.28 28.42z"
        fill="#dfe6f5"
      />
      <circle cx={243.12} cy={418.74} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={428} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={437.26} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={446.52} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={455.78} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={465.04} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={474.3} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={483.57} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={492.83} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={502.09} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={511.35} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={520.61} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={529.87} r={2.78} opacity={0.1} />
      <circle cx={243.12} cy={539.13} r={2.78} opacity={0.1} />
      <path
        d="M232.94 418.74a2.78 2.78 0 01-4.55 2.14 42.24 42.24 0 013.81-4 2.72 2.72 0 01.74 1.86z"
        opacity={0.1}
      />
      <circle cx={230.16} cy={428} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={437.26} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={446.52} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={455.78} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={465.04} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={474.3} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={483.57} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={492.83} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={502.09} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={511.35} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={520.61} r={2.78} opacity={0.1} />
      <circle cx={230.16} cy={529.87} r={2.78} opacity={0.1} />
      <path
        d="M232.94 539.13a2.77 2.77 0 01-1.89 2.63 45.66 45.66 0 01-3.39-3.82 2.77 2.77 0 015.28 1.19z"
        opacity={0.1}
      />
      <circle cx={256.09} cy={418.74} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={428} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={437.26} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={446.52} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={455.78} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={465.04} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={474.3} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={483.57} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={492.83} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={502.09} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={511.35} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={520.61} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={529.87} r={2.78} opacity={0.1} />
      <circle cx={256.09} cy={539.13} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={418.74} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={428} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={437.26} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={446.52} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={455.78} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={465.04} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={474.3} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={483.57} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={492.83} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={502.09} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={511.35} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={520.61} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={529.87} r={2.78} opacity={0.1} />
      <circle cx={269.05} cy={539.13} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={418.74} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={428} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={437.26} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={446.52} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={455.78} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={465.04} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={474.3} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={483.57} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={492.83} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={502.09} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={511.35} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={520.61} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={529.87} r={2.78} opacity={0.1} />
      <circle cx={282.02} cy={539.13} r={2.78} opacity={0.1} />
      <path
        d="M296.76 420.88a2.78 2.78 0 01-4.55-2.14 2.72 2.72 0 01.74-1.88c.36.32.71.67 1.06 1 .96.98 1.87 1.98 2.75 3.02z"
        opacity={0.1}
      />
      <circle cx={294.98} cy={428} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={437.26} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={446.52} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={455.78} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={465.04} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={474.3} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={483.57} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={492.83} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={502.09} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={511.35} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={520.61} r={2.78} opacity={0.1} />
      <circle cx={294.98} cy={529.87} r={2.78} opacity={0.1} />
      <path
        d="M297.49 537.93a45.65 45.65 0 01-3.39 3.82 2.78 2.78 0 113.39-3.82z"
        opacity={0.1}
      />
      <rect
        x={254.24}
        y={505.79}
        width={12.96}
        height={124.09}
        rx={5.4}
        ry={5.4}
        fill="#54576b"
      />
      <rect
        x={216.27}
        y={613.21}
        width={88.9}
        height={16.67}
        rx={6.95}
        ry={6.95}
        fill="#54576b"
      />
      <rect
        x={254.24}
        y={505.79}
        width={12.96}
        height={124.09}
        rx={5.4}
        ry={5.4}
        opacity={0.1}
      />
      <rect
        x={216.27}
        y={613.21}
        width={88.9}
        height={16.67}
        rx={6.95}
        ry={6.95}
        opacity={0.1}
      />
      <rect
        x={256.09}
        y={505.79}
        width={12.96}
        height={124.09}
        rx={5.4}
        ry={5.4}
        fill="#54576b"
      />
      <rect
        x={218.12}
        y={613.21}
        width={88.9}
        height={16.67}
        rx={6.95}
        ry={6.95}
        fill="#54576b"
      />
      <path
        d="M339.77 516.29a87 87 0 01-158.1 0c-9.21-13.21-17.26-39.55-17.26-36.42a96.31 96.31 0 10192.62 0c0-3.13-8.05 23.21-17.26 36.42zM260.72 383.55a96.27 96.27 0 00-79.05 41.36 86.53 86.53 0 00-8 36.42 87.62 87.62 0 00.49 9.26 87 87 0 01173.11 0 87.6 87.6 0 00.49-9.26 86.53 86.53 0 00-8-36.42 96.27 96.27 0 00-79.04-41.36z"
        fill="#54576b"
      />
      <circle cx={262.57} cy={517.83} r={3.7} opacity={0.1} />
      <circle cx={436.2} cy={608.12} r={1.39} opacity={0.2} />
      <path
        d="M383.76 636.08a37.16 37.16 0 01-16-3.51c-18.66-8.78-27.86-7.67-41.78-6A196.08 196.08 0 01286.6 628a24.65 24.65 0 01-18.7-10c-20.64-26.8-6.83-97.36-6.23-100.35a.93.93 0 011.82.36c-.14.72-14.25 72.72 5.88 98.85a22.87 22.87 0 0017.35 9.31 194.08 194.08 0 0039-1.43c14.24-1.72 23.65-2.86 42.79 6.15 30.53 14.37 66.31-22.18 66.66-22.55a.93.93 0 011.33 1.29c-.27.32-25.86 26.45-52.74 26.45z"
        fill="#dfe6f5"
      />
      <path
        d="M417.78 144.31c-15.29-27.55-46.33-46.44-82-46.44-50.8 0-92.14 38.22-92.14 85.2h-6.53c0-50.55 44.25-91.68 98.62-91.68 31.48 0 59.56 13.78 77.63 35.2 1.48 4.8 2.61 9.71 3.73 14.61.25 1.05.48 2.08.69 3.11z"
        fill="#535461"
      />
      <path
        d="M250.89 156h8.53v59h-8.53a24.56 24.56 0 01-24.56-24.56v-9.82A24.56 24.56 0 01250.89 156z"
        fill="#dfe6f5"
      />
      <rect
        x={252.18}
        y={156.05}
        width={14.48}
        height={58.95}
        rx={6.03}
        ry={6.03}
        fill="#535461"
      />
      <path
        d="M801.83 579.91s-15.88-5.38-23.52 8.61a25.52 25.52 0 00.34 24.57c5 9.07 15.36 20.85 35 19.8 16.62-.89 22.15-13.57 23.65-25.37a26.06 26.06 0 00-34.61-27.9z"
        fill={color}
      />
      <path
        d="M782.01 614.35a25.52 25.52 0 01-.34-24.57c7.64-14 23.52-8.61 23.52-8.61l.81-.29a25.83 25.83 0 0118.66.42 25.84 25.84 0 00-22-2.1l-.81.29s-15.88-5.38-23.52 8.61a25.52 25.52 0 00.34 24.57c3.31 6 8.92 13.11 18 17a39.35 39.35 0 01-14.66-15.32z"
        fill="#fff"
        opacity={0.1}
      />
      <path d="M793.63 586.64s5.89 4.63 20.18 0" opacity={0.2} />
      <path
        d="M792.37 553s10.09 27.33 9.25 34.48l8-.84s-13.51-23.97-10.1-33.64z"
        fill={color}
      />
      <path
        d="M792.37 553s10.09 27.33 9.25 34.48l8-.84s-13.51-23.97-10.1-33.64z"
        opacity={0.2}
      />
      <path
        d="M833.56 555.28s-15.88-8.12-23-1.41-8.2 23.86-8.2 23.86 25.91 3.57 31.2-22.45z"
        fill={color}
      />
      <path
        d="M833.56 555.28s-15.88-8.12-23-1.41-8.2 23.86-8.2 23.86 25.91 3.57 31.2-22.45z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M802.37 577.73s4.17-19.91 31.19-22.45"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
      />
    </svg>
  );
};

SvgPodcast.propTypes = {
  color: PropTypes.string
};
SvgPodcast.defaultProps = {
  color: "primary"
};
export default SvgPodcast;
