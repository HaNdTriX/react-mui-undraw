import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSegmentation = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1113.61 789.42"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Segmentation_svg__a"
          x1={578}
          y1={679}
          x2={578}
          y2={135}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Segmentation_svg__b"
          x1={806}
          y1={467.16}
          x2={806}
          y2={337.16}
          xlinkHref="#Segmentation_svg__a"
        />
        <linearGradient
          id="Segmentation_svg__c"
          x1={956.92}
          y1={706.81}
          x2={956.92}
          y2={214.37}
          xlinkHref="#Segmentation_svg__a"
        />
      </defs>
      <path
        d="M138.32 583.26c-4.54 9.21 2 19.15-.29 28.66-2.84 12-19.13 21.34-36.68 27.3s-37.15 9.58-54.26 16c-7.4 2.77-15.11 7.88-11.26 12.58 1.33 1.63 3.83 2.77 6.26 3.84 49.82 21.76 111.41 33.58 173 33.2 65.08-.41 128.82-14 193.85-12.44 83.88 2 165 29.06 247.93 21.26 35.21-3.31 67.92-12.75 102.19-18.64 50.42-8.67 103.45-9.54 155.66-12.39 39.21-2.14 84-7.69 102.75-28.55 13.54-15.08 7.86-35-11.22-47.77s-49.56-18.23-77.73-15.75c-15.14 1.33-30.19 4.78-45.32 3.41-8.79-.8-16.93-3.18-24.92-5.52-62-18.2-126.29-36.36-195.15-39-112.05-4.33-215.81 32.55-324.92 48.5-17 2.48-35.44 4.39-51.49.23-16.92-4.39-28-14.76-44.93-19.13-8-2.08-17-2.68-24.91-4.94-21.73-6.22-11.67-14.77-41.78-9-15.8 3.01-31.71 7.87-36.78 18.15z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M716.32 276.08S790.8 159 799.8 109s26-96 26-96"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path d="M842.8 113l-47 4s25 43 47-4z" fill={color} />
      <path
        d="M760.8 87l37.22 29.81S749.8 136 760.8 87zM848.8 72l-42.32 5.67S843.8 108 848.8 72zM778.8 57l27.94 19.61S772.8 91 778.8 57zM817.11 39.19S851.8 30 856.8 32s2 24-12 25-27.69-17.81-27.69-17.81zM793.8 13s22 21 23 26-18 17-28 0 5-26 5-26z"
        fill={color}
      />
      <circle cx={834.8} cy={15} r={10} fill="#ffd037" />
      <circle cx={816.8} cy={10} r={10} fill="#ffd037" />
      <path
        d="M163.06 618.56s-31.82-83.52-6.81-148.75c10.5-27.38 12.36-57.34 4.34-85.55a227.74 227.74 0 00-15.08-38.79"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M161.02 304.23c.81 10.48-15.79 42.33-15.79 42.33s-21.33-28.9-22.14-39.38a19.027 19.027 0 0137.94-2.95zM196.88 359.82c-5 9.24-36.26 26.95-36.26 26.95s-2.19-35.85 2.82-45.09a19.026 19.026 0 0133.45 18.14zM203.22 459.08c-9 5.44-44.9 5-44.9 5s16.21-32.06 25.19-37.5a19.026 19.026 0 0119.71 32.55zM191.1 535.27c-7.94 6.88-43.42 12.47-43.42 12.47s10.56-34.34 18.49-41.22a19.027 19.027 0 1124.93 28.75zM120.95 391.89c8.08 6.72 43.67 11.56 43.67 11.56s-11.27-34.11-19.36-40.82a19.024 19.024 0 00-24.32 29.26zM107.91 481.17c9.72 4 45.13-2 45.13-2s-21-29.17-30.68-33.16a19.025 19.025 0 00-14.45 35.2zM107.14 569.68c8.91 5.57 44.83 5.62 44.83 5.62s-15.74-32.3-24.64-37.83a19.024 19.024 0 00-20.19 32.25z"
        fill={color}
      />
      <path
        d="M161.02 304.23c.81 10.48-15.79 42.33-15.79 42.33s-21.33-28.9-22.14-39.38a19.027 19.027 0 0137.94-2.95zM196.88 359.82c-5 9.24-36.26 26.95-36.26 26.95s-2.19-35.85 2.82-45.09a19.026 19.026 0 0133.45 18.14zM203.22 459.08c-9 5.44-44.9 5-44.9 5s16.21-32.06 25.19-37.5a19.026 19.026 0 0119.71 32.55zM191.1 535.27c-7.94 6.88-43.42 12.47-43.42 12.47s10.56-34.34 18.49-41.22a19.027 19.027 0 1124.93 28.75zM120.95 391.89c8.08 6.72 43.67 11.56 43.67 11.56s-11.27-34.11-19.36-40.82a19.024 19.024 0 00-24.32 29.26zM107.91 481.17c9.72 4 45.13-2 45.13-2s-21-29.17-30.68-33.16a19.025 19.025 0 00-14.45 35.2zM107.14 569.68c8.91 5.57 44.83 5.62 44.83 5.62s-15.74-32.3-24.64-37.83a19.024 19.024 0 00-20.19 32.25z"
        fill={color}
      />
      <path
        d="M225.8 603.52s-24.14-2.91-31-8.75-36.21-14.72-38.77-6.55-40.07 38.18-12.77 40.85 63.91 1.4 71.54-2.38 11-23.17 11-23.17z"
        fill="#a8a8a8"
      />
      <path
        d="M143.07 626.12c27.31 2.66 63.87 1.41 71.55-2.37 5.85-2.88 9.14-14.8 10.38-20.33l.81.1s-3.28 19.38-11 23.17-44.24 5-71.55 2.37c-7.88-.77-10.36-3.82-9.84-8 .91 2.65 3.78 4.49 9.65 5.06z"
        opacity={0.2}
      />
      <path
        d="M1047 461.75c-39.2 53.72-26.2 130.4-3.6 191.49 7.58 20.45 16.19 42.08 12.26 64.33-4.8 27.2-27.36 47.58-50.81 58.68-42.75 20.23-93.25 17-131.49-8.49-33-22-56.23-58.56-89.87-79.51-56.3-35.05-129.39-19.39-192.05 7.37-44.33 18.93-92.89 43.31-136.09 25.83-30.4-12.3-50.87-43.61-61.64-77.08-5.2-16.16-8.84-33.7-19.2-46.35-6.16-7.52-14.3-12.76-22.67-17.14-76.39-40-174.65-15-248.71-59.63-50-30.14-81.12-88.63-94.05-150.12s-9.73-126.4-4.58-190.2c3.66-45.34 9.45-93.79 36.71-129.42C70.04 13.83 118.36-1.15 161.57 4.76S243.51 34.7 277.41 63.3c42.39 35.76 81.39 80.63 134.11 94.17 35.91 9.24 74.06 2.7 111.39-.19 62.4-4.82 124.58.73 186.38 7 59.16 6 118.73 12.7 174.76 32.37 39.65 13.92 71.08 40.23 108.41 58.21 24.33 11.72 51.1 14.44 74 29.58 28.26 18.65 53.8 51.69 45.51 91.34-7.83 37.69-44.17 57.46-64.97 85.97z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M904.45 135h-652.9A25.53 25.53 0 00226 160.5V541a25.53 25.53 0 0025.55 25.5h262.92v93.77h-24.74a6.1 6.1 0 00-6.1 6.09V679h191.88v-12.66a6.1 6.1 0 00-6.1-6.09h-31.59v-93.78h266.63A25.53 25.53 0 00930 541V160.5a25.53 25.53 0 00-25.55-25.5z"
        transform="translate(-43.2 -53.53)"
        fill="url(#Segmentation_svg__a)"
      />
      <path fill="#474059" d="M472.88 495.18h121.27V612.2H472.88z" />
      <path opacity={0.1} d="M472.88 601.82h121.27v10.38H472.88z" />
      <path
        d="M448.56 603h176.65a6 6 0 016 6v12.48H442.56V609a6 6 0 016-6z"
        fill="#474059"
      />
      <rect
        x={189.27}
        y={85.47}
        width={692.15}
        height={425.1}
        rx={25.12}
        ry={25.12}
        fill="#474059"
      />
      <path fill="#fff" d="M203.84 135.12h661.55V482.4H203.84z" />
      <ellipse cx={534.62} cy={117.18} rx={5.83} ry={5.76} fill="#fff" />
      <path opacity={0.1} d="M473.14 510.86h120.89v2.28H473.14z" />
      <path
        d="M574.74 216.22a138 138 0 0049.5 238.79l38.56-132.54zM665.8 184.47a137.43 137.43 0 00-88.06 31.75l88.06 106.25 72.92-117.17a137.34 137.34 0 00-72.92-20.83z"
        fill="#d6d6e3"
      />
      <path
        d="M665.8 322.47L627.24 455A138.08 138.08 0 00803.8 324.9zM262.8 255.47h50v30h-50z"
        fill="#8499f0"
      />
      <path fill="#fc6681" d="M262.8 307.47h50v30h-50z" />
      <path fill={color} d="M262.8 359.47h50v30h-50z" />
      <path
        fill="#d6d6e3"
        d="M339.8 264.47h94v12h-94zM339.8 316.47h94v12h-94zM339.8 368.47h94v12h-94zM203.8 134.47h662v12h-662z"
      />
      <circle cx={211.8} cy={140.47} r={3} fill="#fc6681" />
      <circle cx={219.8} cy={140.47} r={3} fill="#ffc74c" />
      <circle cx={227.8} cy={140.47} r={3} fill="#85d459" />
      <path
        d="M911.73 541.02s4.77 6.24-2.2 15.66-12.72 17.37-10.4 23.25c0 0 10.52-17.5 19.09-17.74s2.94-10.65-6.49-21.17z"
        fill={color}
      />
      <path
        d="M911.73 541.02a7.73 7.73 0 011 2c8.36 9.82 12.81 19 4.78 19.21-7.48.21-16.46 13.59-18.61 17a7.25 7.25 0 00.25.77s10.52-17.5 19.09-17.74 2.92-10.72-6.51-21.24z"
        opacity={0.1}
      />
      <path
        d="M920.6 548.97c0 2.2-.25 4-.55 4s-.55-1.78-.55-4 .31-1.16.61-1.16.49-1.04.49 1.16z"
        fill="#ffd037"
      />
      <path
        d="M923.65 551.59c-1.93 1.05-3.61 1.69-3.75 1.42s1.3-1.34 3.23-2.39 1.17-.29 1.31 0 1.14-.08-.79.97z"
        fill="#ffd037"
      />
      <path
        d="M886.53 541.02s-4.77 6.24 2.2 15.66 12.72 17.37 10.4 23.25c0 0-10.52-17.5-19.09-17.74s-2.93-10.65 6.49-21.17z"
        fill={color}
      />
      <path
        d="M886.53 541.02a7.73 7.73 0 00-1 2c-8.36 9.82-12.81 19-4.78 19.21 7.48.21 16.46 13.59 18.61 17a7.25 7.25 0 01-.25.77s-10.52-17.5-19.09-17.74-2.91-10.72 6.51-21.24z"
        opacity={0.1}
      />
      <path
        d="M877.66 548.97c0 2.2.25 4 .55 4s.55-1.78.55-4-.31-1.16-.61-1.16-.49-1.04-.49 1.16z"
        fill="#ffd037"
      />
      <path
        d="M874.62 551.59c1.93 1.05 3.61 1.69 3.75 1.42s-1.3-1.34-3.23-2.39-1.17-.29-1.31 0-1.14-.08.79.97z"
        fill="#ffd037"
      />
      <path
        d="M931.8 581.35s-13.12-2.62-16.62-6.12-19.25-9.62-21-5.25-23.62 19.25-8.75 21.87 35 3.5 39.37 1.75 7-12.25 7-12.25z"
        fill="#a8a8a8"
      />
      <path
        d="M885.43 590.22c14.87 2.62 35 3.5 39.37 1.75 3.33-1.33 5.65-7.73 6.56-10.71l.44.09s-2.62 10.5-7 12.25-24.5.87-39.37-1.75c-4.29-.76-5.52-2.54-5.06-4.79.37 1.46 1.87 2.6 5.06 3.16z"
        opacity={0.2}
      />
      <path
        d="M881 464.51a149.89 149.89 0 00-70.74-127.36L731 464.51l150 2.64v-2.64z"
        transform="translate(-43.2 -53.53)"
        fill="url(#Segmentation_svg__b)"
      />
      <path
        d="M831.8 406a137.9 137.9 0 00-65.08-117.17L693.8 406l138 2.47V406z"
        fill={color}
      />
      <path
        d="M1076 314.66q0-.58-.11-1.11t-.2-1.22q-.22-1.2-.49-2.32-.14-.56-.29-1.1a29.76 29.76 0 00-5.79-11.28l-.47-.54q-.47-.52-.92-1t-.89-.86a21.426 21.426 0 00-2.37-1.91c-.46-.32-.65-.44-.92-.6a5.11 5.11 0 00-2.16-.72l-4.76-.48-6.44-.64-23.26-9.18-.92.33a55.33 55.33 0 01-1.72-5.81 5.18 5.18 0 001.84-1.36 4.26 4.26 0 001.26-1.65c.58-1.37-.54-4.31-.31-6 .37-2.69 1.75-5.29 2.86-7.73 2.39-5.24 4.13-10.92 3.85-16.67s-2.86-11.59-7.64-14.8c-2.47-1.66-5.38-2.55-7.94-4.07-2-1.18-3.76-2.72-5.67-4.05a32.08 32.08 0 00-32-2.33c-4.83 2.42-8.95 6-13.51 8.94s-9.93 5.13-15.26 4.28a3.52 3.52 0 00-.16.67l-.45-.06c-.92 2.55 1.33 5.06 3.41 6.8 3.94 3.3 8.4 6.59 13.54 6.71 2 0 4.08-.38 5.89.45a5.25 5.25 0 011.1.7 26.31 26.31 0 007.96 25.95l-11.87-4.34s-.5.26-1.26.75l-16.49-11.15S920.39 245 911.21 264s39.79 9.15 39.79 9.15l10.48 5.85a9.86 9.86 0 001.15 6.38l28.57 17.95c-5.77 1.81-15.26 4.7-16.94 4.7-2.45 0-9.18 2.45-13.47 12.24s-19.59 57.54-33.05 65.49-49 61.21-49 61.21l.16.42q-.95.25-1.86.56c-8.88 2.94-14.86 9.13-18.45 14.15a6 6 0 004.14 9.46c14 1.8 21.67-4.76 25.35-9.72.24-.32.46-.64.67-.94a4.85 4.85 0 003.46.16L909.37 447s-13.37 13.4-5.55 25.63l-.6.85A196.33 196.33 0 00874.48 537s-7.35 5.51-8 27.54-8 57.54-8 57.54-4.9 42.23-1.84 55.09c0 0 .35.51 1 1.29-.23.28-.48.57-.76.88-2.67 2.93-7.49 7-13.1 5.78-8.57-1.84-8.57 13.47 3.67 14.69 7.88.79 23.38 4.37 33.41 6.82a7.08 7.08 0 008.73-7.63c-.6-5.48-1.69-12.12-3.67-16.84-.12-.29-.25-.58-.38-.86.36-.34.72-.69 1.08-1.07 0 0 0-26.93 4.28-34.28 0 0 11.63-55.7 11-69.78-.48-11 30.17-53.91 43.51-72l-.11-.69c3.53-4.68 5.7-7.48 5.7-7.48l10.41 66.72s4.9 14.69 11 22.65c0 0 26.32 50.8 29.38 66.72 2.32 12.07 7.1 19.2 9.28 21.95-.25.26-.52.52-.8.78-2.78 2.6-6.9 5.2-11.54 4.21-8.57-1.84-8.57 13.47 3.67 14.69 7.88.79 23.38 4.37 33.41 6.82a7.08 7.08 0 008.73-7.63c-.69-6.37-2.06-14.29-4.7-19q-.34-.59-.7-1.11a6.47 6.47 0 002.43-1.74s-15.91-38.56-15.91-49c0 0-6.73-39.79-29.38-54.48 0 0 2.14-49.76 8.59-77.45q.24-1 .49-2a179.34 179.34 0 0017.86-3.78l.61-18.36 3.06 14.69 34.28-21.42s-.3-3.86-.88-9.78c-.29-3-.65-6.43-1.08-10.2-.34-3-.73-6.21-1.16-9.48q-.16-1.23-.33-2.46c-.45-3.3-.94-6.64-1.47-9.9q-.3-1.84-.62-3.64c-.28-1.6-.57-3.17-.87-4.69q-.23-1.14-.46-2.25t-.47-2.18q-.24-1.07-.49-2.09l-.25-1q-.25-1-.51-1.94a35.59 35.59 0 01-1.24-8q-.06-1.62 0-3.23t.3-3.22q.11-.8.26-1.6a36.87 36.87 0 011.74-6.25q.57-1.53 1.28-3c1.11-2.31 2.3-4.82 3.52-7.46q.92-2 1.86-4.05t1.88-4.2c6-13.49 11.84-28.53 13.41-38.41.17-1 .28-2 .35-2.94a20 20 0 00.06-2.63z"
        transform="translate(-43.2 -53.53)"
        fill="url(#Segmentation_svg__c)"
      />
      <path
        d="M930.53 223.47l-20.19-13.66s-32.06-11.87-41 6.53 38.59 8.91 38.59 8.91l20.19 11.28z"
        fill="#f7bbc3"
      />
      <path
        d="M990.25 639.74c-9.74-2.37-24.76-5.85-32.41-6.61-11.87-1.19-11.87-16-3.56-14.25 4.51 1 8.5-1.56 11.2-4.08a26.22 26.22 0 002.36-2.52 6.86 6.86 0 013.84-2.35c4.45-1 13.72-2.44 19.42.63a8.38 8.38 0 013.07 3.37c2.56 4.54 3.89 12.22 4.56 18.4a6.87 6.87 0 01-8.48 7.41zM840.05 645.68c-9.74-2.37-24.76-5.85-32.41-6.61-11.87-1.19-11.87-16-3.56-14.25 5.44 1.17 10.12-2.76 12.71-5.6.31-.35.6-.68.85-1a6.86 6.86 0 013.84-2.35c4.45-1 13.72-2.44 19.42.63 1.67.9 3 2.88 4.07 5.43 1.92 4.58 3 11 3.56 16.34a6.87 6.87 0 01-8.48 7.41z"
        fill="#b77983"
      />
      <path
        d="M844.95 621.93c-14.18 14.61-26.33-.27-28.17-2.73.31-.35.6-.68.85-1a6.86 6.86 0 013.84-2.35c4.45-1 13.72-2.44 19.42.63 1.66.92 3 2.9 4.06 5.45zM994.16 613.93c-6.14 4.2-26.82 3.16-26.82 3.16a20.34 20.34 0 01-1.86-2.3 26.22 26.22 0 002.36-2.52 6.86 6.86 0 013.84-2.35c4.45-1 13.72-2.44 19.42.63a8.38 8.38 0 013.06 3.38z"
        opacity={0.1}
      />
      <path
        d="M995.24 611.16c-4.16 5.34-27.9 4.16-27.9 4.16s-7.12-7.12-10.09-22.56-28.45-64.72-28.45-64.72c-5.94-7.72-10.69-22-10.69-22l-10.09-64.71s-48.73 64.14-48.14 77.81-10.69 67.68-10.69 67.68c-4.16 7.12-4.16 33.25-4.16 33.25-15.44 16-28.5-3-28.5-3-3-12.47 1.78-53.43 1.78-53.43s7.12-34.43 7.72-55.81 7.77-26.69 7.77-26.69a190.43 190.43 0 0127.88-61.58c3.59-5.14 6-7.88 6-7.88l96.12 11.28a60.73 60.73 0 00-4.14 12.74c-6.25 26.86-8.33 75.13-8.33 75.13 22 14.25 28.5 52.84 28.5 52.84-.03 10.09 15.41 47.49 15.41 47.49z"
        fill="#605d82"
      />
      <g opacity={0.05}>
        <path d="M902.67 449.27l-1.23-7.91s-48.64 64.11-48.09 77.78-10.69 67.68-10.69 67.68c-4.16 7.12-4.16 33.25-4.16 33.25a20.37 20.37 0 01-9.29 6c4.68 1.23 10.36.33 16.42-6 0 0 0-26.12 4.16-33.25 0 0 11.28-54 10.69-67.68-.47-10.67 29.26-52.3 42.19-69.87z" />
        <path d="M980.4 563.66s-6.53-38.59-28.5-52.84c0 0 2.08-48.26 8.33-75.13a60.73 60.73 0 014.14-12.74l-96.18-11.28-.63.76 89.69 10.52a60.73 60.73 0 00-4.14 12.74c-6.25 26.86-8.33 75.13-8.33 75.13 22 14.25 28.5 52.84 28.5 52.84 0 10.09 15.44 47.5 15.44 47.5-2.45 3.15-11.71 4-18.89 4.22 5.7.15 22.58.2 26-4.22-.03 0-15.43-37.4-15.43-47.5z" />
      </g>
      <path
        d="M849.8 403.36a21.5 21.5 0 01-2.81 4.92c-3.57 4.81-11 11.17-24.59 9.43a5.84 5.84 0 01-4-9.18c3.49-4.86 9.29-10.87 17.9-13.72a32.25 32.25 0 017.58-1.54z"
        fill="#f7bbc3"
      />
      <path
        d="M975.17 237.33l-47.61-17.41s-13.66 7.12-8.31 17.22l46.31 29.09z"
        fill="#d9d9ea"
      />
      <path
        d="M975.17 237.33l-47.61-17.41s-13.66 7.12-8.31 17.22l46.31 29.09z"
        opacity={0.1}
      />
      <path
        d="M976.8 208.63s-.59 27.9 11.87 37.4-36.22 14.84-36.22 14.84 7.72-28.5 0-43.34 24.35-8.9 24.35-8.9z"
        fill="#f7bbc3"
      />
      <path
        d="M963.8 422.96a60.73 60.73 0 00-4.14 12.74c-57.42 8.77-97.38-15.12-97.38-15.12-.22-.34-.43-.69-.62-1 3.59-5.14 6-7.88 6-7.88zM849.8 403.36a21.5 21.5 0 01-2.81 4.92c-5.5-.91-9.89-11.42-10.7-13.47a32.25 32.25 0 017.58-1.54z"
        opacity={0.1}
      />
      <path
        d="M981.59 233.57l-21.37 7.72-8.91 11.87s-18.4 5.94-20.78 5.94-8.91 2.37-13.06 11.87-19 55.81-32.06 63.53-47.5 59.37-47.5 59.37 5.94 16 13.06 13.66l16.63-13.66s-13.06 13.06-5.34 24.94c0 0 48.68 29.09 115.77 11.28l.59-17.81 3 14.25 33.18-20.79s-3-38.32-8.34-57.83a35.24 35.24 0 012.29-24.57c8.62-18 21.92-48 20.3-58.91-1.91-12.89-9.2-18.49-12-20.19a5 5 0 00-2.09-.69l-10.81-1.08z"
        fill="#d9d9ea"
      />
      <path
        d="M945.08 293.23s-11.88 55.24-24.94 64.12-48.09 37.4-49.28 42.15"
        opacity={0.05}
      />
      <path
        d="M939.73 291.47s-11.87 55.2-24.93 64.1-48.09 37.4-49.28 42.15"
        fill="#d9d9ea"
      />
      <path d="M951.01 252.86s41-13.66 52.84-10.09" opacity={0.1} />
      <g opacity={0.05}>
        <path d="M1008.8 323.35c8.62-18 21.92-48 20.3-58.91-1.91-12.89-9.2-18.49-12-20.19a5 5 0 00-2.09-.69l-4.62-.46a4.88 4.88 0 011.37.56c2.78 1.7 10.07 7.29 12 20.19 1.62 10.94-11.68 40.94-20.3 58.91a35.24 35.24 0 00-2.29 24.57c5.36 19.5 8.34 57.83 8.34 57.83l-28.63 17.89.73 3.48 33.19-20.79s-3-38.32-8.34-57.83a35.24 35.24 0 012.34-24.56zM998.81 241.88l5.14.52-22.36-8.83-2 .72 19.22 7.59z" />
      </g>
      <path
        d="M939.73 349.04s18.4-10.09 24.34-7.72 27.9-.59 27.9-.59M974.8 216.05c-.68-6 2.08-5 2.08-5s-32.08-5.98-24.38 8.86a34.2 34.2 0 013.3 13.06h.3c8.9 0 14.1-9.96 18.7-16.92z"
        opacity={0.05}
      />
      <circle cx={956.06} cy={205.07} r={25.53} fill="#f7bbc3" />
      <path
        d="M983.92 212.62c2.32-5.08 4-10.59 3.73-16.17s-2.78-11.24-7.41-14.36c-2.4-1.61-5.22-2.48-7.7-3.95-1.94-1.15-3.65-2.64-5.5-3.93a31.12 31.12 0 00-31.08-2.26c-4.69 2.35-8.68 5.85-13.1 8.67s-9.63 5-14.81 4.15c-.89 2.47 1.29 4.91 3.31 6.6 3.82 3.2 8.15 6.4 13.13 6.51 1.93 0 4-.37 5.71.44a8.2 8.2 0 012.92 2.71 53.06 53.06 0 016.05 10.27c.67 1.49 1.34 3.11 2.71 4 2.29 1.47 5.27.25 8 .14 4.23-.16 8 2.5 11.16 5.34s6.11 6.1 10.06 7.6c3 1.12 8.85 1.08 10.35-2.44.57-1.33-.52-4.18-.3-5.8.35-2.67 1.65-5.15 2.77-7.52z"
        opacity={0.1}
      />
      <path
        d="M984.51 212.03c2.32-5.08 4-10.59 3.73-16.17s-2.78-11.24-7.41-14.36c-2.4-1.61-5.22-2.48-7.7-3.95-1.94-1.15-3.65-2.64-5.5-3.93a31.12 31.12 0 00-31.08-2.26c-4.69 2.35-8.68 5.85-13.1 8.67s-9.63 5-14.81 4.15c-.89 2.47 1.29 4.91 3.31 6.6 3.82 3.2 8.15 6.4 13.13 6.51 1.93 0 4-.37 5.71.44a8.2 8.2 0 012.92 2.71 53.06 53.06 0 016.09 10.26c.67 1.49 1.34 3.11 2.71 4 2.29 1.47 5.27.25 8 .14 4.23-.16 8 2.5 11.16 5.34s6.11 6.1 10.06 7.6c3 1.12 8.85 1.08 10.35-2.44.57-1.33-.52-4.18-.3-5.8.31-2.63 1.65-5.15 2.73-7.51z"
        fill="#a1616a"
      />
    </svg>
  );
};

SvgSegmentation.propTypes = {
  color: PropTypes.string
};
SvgSegmentation.defaultProps = {
  color: "primary"
};
const MemoSvgSegmentation = React.memo(SvgSegmentation);
export default MemoSvgSegmentation;
