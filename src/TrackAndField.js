import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgTrackAndField = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 997 808"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="TrackAndField_svg__a"
          x1={570.56}
          y1={454}
          x2={570.56}
          y2={63.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M260.64.9c93 12.73 168.51 101.25 252.3 156.49 18.67 12.31 38.24 23.15 58.93 26.36 68.54 10.64 131.74-63.09 200.6-57.07 55.81 4.88 103.14 64 123.22 133.54s17 147.32 5.85 220.32c-17.46 114-56.14 226.15-123.47 300.3-11.11 12.24-23.52 23.69-37.79 26.47-23.78 4.69-45.83-15.46-66.41-32.12-92.88-75.22-210.3-94.32-314-51.08-35.12 14.64-68.71 36-104.65 46.54-69.21 20.26-147.53-5.34-194.52-76s-54.63-186.8-9.86-260c18.69-30.55 44.45-52.12 64.07-81.6 49.3-74 31.1-148.82 25-235.6C133.9 31.94 206.31-6.53 260.64.9z"
        fill={color}
        opacity={0.1}
      />
      <g opacity={0.2}>
        <path
          d="M683.38 545s27.51 27.51 12 68.33S722 722.03 722 722.03l-1.29-.21c-56.5-10-84.57-74.59-53.15-122.59 11.66-17.81 21.25-38.75 15.82-54.23z"
          fill={color}
        />
        <path
          d="M683.38 545.5s27.51 27.51 12 68.33S722 722.53 722 722.53l-1.29-.21c-56.5-10-84.57-74.59-53.15-122.59 11.66-17.86 21.25-38.79 15.82-54.23z"
          opacity={0.1}
        />
        <path
          d="M683.38 545s15.53 33.72 0 61.23-2.66 104.71 38.6 115.8"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
        <path
          d="M634.39 656.3s31.39-5 34.25 23.13 60.36 32 60.36 32l-1.08.72c-47.48 31.17-92.86 19.85-86-21.53 2.53-15.35 2.32-30.81-7.53-34.32z"
          fill={color}
        />
        <path
          d="M634.39 656.3s24.37 5.35 22.36 27.5 36.18 48.71 72.25 27.66"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M357.1 501.68s22.86 22.86 10 56.77 22.12 90.32 22.12 90.32l-1.07-.18c-46.94-8.29-70.27-62-44.17-101.86 9.66-14.83 17.63-32.22 13.12-45.05z"
          fill={color}
        />
        <path
          d="M357.1 502.06s22.86 22.86 10 56.77 22.12 90.32 22.12 90.32l-1.12-.15c-46.94-8.29-70.27-62-44.17-101.86 9.71-14.86 17.68-32.25 13.17-45.08z"
          opacity={0.1}
        />
        <path
          d="M357.1 501.68s12.9 28 0 50.87-2.21 87 32.07 96.22"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
        <path
          d="M316.39 594.13s26.11-4.13 28.46 19.22S395 640 395 640l-.9.6c-39.45 25.9-77.16 16.5-71.47-17.89 2.11-12.83 1.94-25.71-6.24-28.58z"
          fill={color}
        />
        <path
          d="M316.39 594.13s20.24 4.44 18.58 22.85 30.06 40.48 60 23"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.2}>
        <path
          d="M261.1 357.68s22.86 22.86 10 56.77 22.12 90.32 22.12 90.32l-1.07-.18c-46.94-8.29-70.27-62-44.17-101.86 9.66-14.83 17.63-32.22 13.12-45.05z"
          fill={color}
        />
        <path
          d="M261.1 358.06s22.86 22.86 10 56.77 22.12 90.32 22.12 90.32l-1.12-.15c-46.94-8.29-70.27-62-44.17-101.86 9.71-14.86 17.68-32.25 13.17-45.08z"
          opacity={0.1}
        />
        <path
          d="M261.1 357.68s12.9 28 0 50.87-2.21 87 32.07 96.22"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
        <path
          d="M220.39 450.13s26.11-4.13 28.46 19.22S299 496 299 496l-.9.6c-39.45 25.9-77.16 16.5-71.47-17.89 2.11-12.83 1.94-25.71-6.24-28.58z"
          fill={color}
        />
        <path
          d="M220.39 450.13s20.24 4.44 18.58 22.85 30.06 40.48 60 23"
          fill="none"
          stroke="#535461"
          strokeMiterlimit={10}
        />
      </g>
      <path
        fill="#dfe5ee"
        d="M14.76 592.38v-13.63l279.29-78.33 49.95-5.68v12.49l-278.15 99.9-51.09-14.75z"
      />
      <path
        opacity={0.05}
        d="M14.76 592.38v-13.63l279.29-78.33 49.95-5.68v12.49l-278.15 99.9-51.09-14.75z"
      />
      <path
        fill="#dfe5ee"
        d="M14.76 578.75l279.29-91.96 48.82 7.95-277.02 98.77-51.09-14.76z"
      />
      <path
        fill="#dfe5ee"
        d="M57.9 370.99h18.17v211.17H57.9zM275.88 322.17h18.17v185.06h-18.17z"
      />
      <path
        fill="#dfe5ee"
        d="M339.46 264.27v56.77L112.67 371.7l-26.83 6-66.54 14.86L0 386.88v-65.84l102.91-19.62 25.61-4.88 187.1-35.67 23.84 3.4z"
      />
      <path
        opacity={0.05}
        d="M339.46 264.27v56.77L112.67 371.7l-26.83 6-66.54 14.86L0 386.88v-65.84l102.91-19.62 25.61-4.88 187.1-35.67 23.84 3.4z"
      />
      <path
        opacity={0.05}
        d="M76.07 370.99v11.16l-18.17 4.06v-15.22h18.17zM294.05 322.17v11.29l-18.17 4.05v-15.34h18.17z"
      />
      <path
        fill="#dfe5ee"
        d="M339.46 264.27v56.77l-92.08 20.57-26.78 5.98-107.93 24.11-26.83 6-66.54 14.86 1.14-64.71 92.47-18.43 25.87-5.15h.01L244.5 283.2l25.82-5.15 69.14-13.78z"
      />
      <path
        fill={color}
        d="M138.79 304.27l-26.12 67.43-26.83 6 27.07-68.28-10-8 25.61-4.88 10.26 7.73h.01zM271.62 279.03l-24.24 62.58-26.78 5.98 25.14-63.41-1.24-.98-8.76-7.02 25.61-4.88 8.97 6.75 1.29.98h.01z"
      />
      <path
        opacity={0.05}
        d="M61.88 578.47l18.16-4.26v4.26l-18.16 4.26v-4.26zM278.72 503.54l18.16-4.26v4.26l-18.16 4.26v-4.26z"
      />
      <path
        d="M761.23 394.51c-28.95 15.25-58.92-2-58.92-2a19.07 19.07 0 01-1.61 2.52c-.37-.28-.75-.57-1.13-.88-12.44-10.17-26.21-34.18-26.21-34.18l-26.83-50.31a78.52 78.52 0 01-7.37-19.19c-4.42-19.18-18.53-20-18.53-20H604.1c-8 0-19.56 1.68-31 4a2.1 2.1 0 00.57-1.14l-.55.11 6.14-6s17.57-7.12 19.64-22.37l9.3-9.15s.3-.8.72-2.21l3.09-3.89c13.46-16.85 14.43-17.13 14.43-17.13l40.81-24.15s14.65-2.08 8.54-43.05-2-46-2-46 11.1-41.05-10.18-35.94-11.66 40.2-11.66 40.2l1.48 7.75a74.2 74.2 0 01-.3 29.35c-2.21 10.45-4.68 23.36-4.06 26.44 1.09 5.37-11.2 12.17-11.2 12.17l-6.95 4.06a35.17 35.17 0 01-24.39 4.16l-.37-.56L602 184a12.05 12.05 0 00-.3 1.3L600 184v.1c0-.36 0-.7.08-1.08a53.88 53.88 0 012.69-11.28c.11-.34.25-.7.37-1A30.72 30.72 0 00632 140.29a30 30 0 00-1.52-9.44 6.51 6.51 0 002.38 0c3.74-.6 7.71-2.52 9.65-5.83a10.7 10.7 0 00-.79-11.72 11.71 11.71 0 00-1.6-1.67c-3.55-4-9.49-5-14.21-7.69-4.49-2.53-7.9-6.57-12.08-9.58-7.9-5.71-18-7.43-27.64-9-4.14-.67-8.35-1.34-12.51-.79-5.26.7-10.1 3.33-14.22 6.62a12.8 12.8 0 00-3.59 3.95c-1.53 3-.86 6.52-1.13 9.84-.66 8.08-7 14.66-14 18.95-4.3 2.63-9 4.73-12.61 8.26s-5.74 9.1-3.49 13.56c1.19 2.36 3.54 4.33 3.56 7a7.84 7.84 0 01-1 3.34 48.67 48.67 0 01-9.59 13.5c-14.6-3.52-30.36 4.22-30.36 4.22l-47.55 2s-13.44-6.1-31 31.52-23.78 39.66-23.78 39.66-32 28.47-11.37 35.59 32-27.46 32-27.46L417 233.84s25.84-24.41 27.91-29.49 14.47-5.08 14.47-5.08l50.41 2a9.59 9.59 0 01.12 1.23c.12 5.64-5.17 10-10.49 12.09-3.36 1.34-7.2 2.35-9.25 5.29s-1.56 7.21.5 10.21a13.42 13.42 0 002.19 2.43 20.53 20.53 0 007.72 5 35.81 35.81 0 007.51 2.08 76 76 0 01-4.25 12.6l2 .86-.66 1.76c-2.82 7.49-8.63 22.27-13.77 31.21-.05 0-9.34 7.88-16.55 15-5.51 5.42-18.79 57.6 20.07 58.54l8.87 6.54h.18c7.89 11.14 33.94 29.44 33.94 29.44l-46.07 2.72a57.66 57.66 0 00-6.85.83q-1.13.2-2.26.45c-8.12 1.78-17.11 1.15-21.93.58-3.19-6-18-3.56-18-3.56s-2.07 30.51 1 47.79 14.47 6.1 14.47 6.1c-2.07-15.25 15-26.47 15-26.47 2.17-1.09 4.74-2.41 7.76-4 9.58-5.14 55.15 2.72 69.24 5.32a47.65 47.65 0 009.41.8c40.39-.66 29.9-20.36 29.9-20.36l-8.13-16a82.22 82.22 0 01-3.56-8.18c-7.18-19-18.34-29.46-26.89-35.06.46-.58.92-1.16 1.37-1.77 0 0-.68-.16-1.71-.47 7.22-3.69 12-6.64 12-6.64s47.55-28.47 45.49-21.35 10.34 34.57 33.08 53.89c.66.56 1.3 1.13 1.94 1.71l.62.57 1.27 1.2.69.67 1.18 1.18.66.68 1.25 1.34.5.54q.85.94 1.68 1.9l.36.43q.64.76 1.27 1.52l.57.71 1 1.28.58.75 1 1.31.52.69 1.16 1.61.28.38q.71 1 1.39 2l.34.51 1 1.51.42.65.89 1.4.39.62.93 1.53.27.44q1.21 2 2.3 4l.12.22.95 1.72.15.28.91 1.72.06.12a151.46 151.46 0 016.87 15.07 26.4 26.4 0 01-3.53.6c-6.2 27.46 10.34 27.46 10.34 27.46s61-9.15 83.74-32.54-4.08-21.44-4.08-21.44z"
        transform="translate(-101.5 -46)"
        fill="url(#TrackAndField_svg__a)"
      />
      <path
        d="M438.5 296.5s25.14 6.52 37.68 40.22a81.56 81.56 0 003.45 8l7.87 15.78s10.15 19.37-28.92 20a45.36 45.36 0 01-9.1-.79c-13.63-2.55-57.71-10.28-67-5.23a172.92 172.92 0 01-16 8l-11-12 4-16s13.21 2.48 24.62-.07a55.86 55.86 0 018.81-1.26l44.59-2.65s-35-25-35-34 36-20 36-20z"
        fill="#f8bdc5"
      />
      <path
        d="M363.5 357.5s-11 17.94 11.49 21c0 0-16.49 11-14.49 26 0 0-11 11-14-6s-1-47-1-47 18-3 18 6z"
        opacity={0.05}
      />
      <path
        d="M438.5 296.5s25.14 6.52 37.68 40.22a81.56 81.56 0 003.45 8l7.87 15.78s10.15 19.37-28.92 20a45.36 45.36 0 01-9.1-.79c-13.63-2.55-57.71-10.28-67-5.23a172.92 172.92 0 01-16 8l-11-12 4-16s13.21 2.48 24.62-.07a55.86 55.86 0 018.81-1.26l44.59-2.65s-35-25-35-34 36-20 36-20z"
        opacity={0.05}
      />
      <path
        d="M360.5 372.5l4-16s13.21 2.48 24.62-.07a55.86 55.86 0 018.81-1.26l44.57-2.67s-35-25-35-34 36-20 36-20l.27.08a32.74 32.74 0 00-5.27-2.08s-36 11-36 20 35 34 35 34l-44.56 2.67a55.86 55.86 0 00-8.81 1.26c-11.41 2.55-24.62.07-24.62.07l-4 16 11 12s.74-.3 2.26-1z"
        opacity={0.05}
      />
      <path
        d="M363.5 357.5s-11 17.94 11.49 21c0 0-16.49 11-14.49 26 0 0-11 11-14-6s-1-47-1-47 18-3 18 6z"
        fill="#ffd97b"
      />
      <path
        fill="#dfe5ee"
        d="M333.76 647.38v-13.63l279.29-78.33 49.95-5.68v12.49l-278.15 99.9-51.09-14.75z"
      />
      <path
        opacity={0.05}
        d="M333.76 647.38v-13.63l279.29-78.33 49.95-5.68v12.49l-278.15 99.9-51.09-14.75z"
      />
      <path
        fill="#dfe5ee"
        d="M333.76 633.75l279.29-91.96 48.82 7.95-277.02 98.77-51.09-14.76z"
      />
      <path
        fill="#dfe5ee"
        d="M376.9 425.99h18.17v211.17H376.9zM594.88 377.17h18.17v185.06h-18.17z"
      />
      <path
        fill="#dfe5ee"
        d="M658.46 319.27v56.77L431.67 426.7l-26.83 6-66.54 14.86-19.3-5.68v-65.84l102.9-19.62 25.62-4.88 187.1-35.67 23.84 3.4z"
      />
      <path
        opacity={0.05}
        d="M658.46 319.27v56.77L431.67 426.7l-26.83 6-66.54 14.86-19.3-5.68v-65.84l102.9-19.62 25.62-4.88 187.1-35.67 23.84 3.4z"
      />
      <path
        opacity={0.05}
        d="M395.07 425.99v11.16l-18.17 4.06v-15.22h18.17zM613.05 377.17v11.29l-18.17 4.05v-15.34h18.17z"
      />
      <path
        fill="#dfe5ee"
        d="M658.46 319.27v56.77l-92.08 20.57-26.78 5.98-107.93 24.11-26.83 6-66.54 14.86 1.14-64.71 92.47-18.43 25.87-5.15h.01L563.5 338.2l25.82-5.15 69.14-13.78z"
      />
      <path
        fill={color}
        d="M457.79 359.27l-26.12 67.43-26.83 6 27.07-68.28-10.01-8 25.62-4.88 10.26 7.73h.01zM590.62 334.03l-24.24 62.58-26.78 5.98 25.14-63.41-1.24-.98-8.76-7.02 25.61-4.88 8.97 6.75 1.29.98h.01z"
      />
      <path
        opacity={0.05}
        d="M380.88 633.47l18.16-4.26v4.26l-18.16 4.26v-4.26zM597.72 558.54l18.16-4.26v4.26l-18.16 4.25v-4.25z"
      />
      <path
        d="M562.63 146.9l-39.48 23.75s-.94.28-14 16.85l-4.69 6c-9.92 12.75-30.54 17-30.54 17l-13.08-20.12-2.76-24.44 2.9-9.87 2.3-7.82 20.12 2.88 8.1 4.37 10-10c.78.21 1.57.4 2.36.55a33.55 33.55 0 0023.59-4.05l6.72-4s11.88-6.69 10.83-12c-.6-3 1.79-15.72 3.93-26a74.16 74.16 0 00.29-28.86l-1.43-7.62S538.5 29 559.07 24s9.85 35.34 9.85 35.34-3.94 4.94 2 45.23-8.29 42.33-8.29 42.33z"
        fill="#f8bdc5"
      />
      <path
        d="M497.55 141.54c-1.12 10.58 3.95 12 3.95 12l3 12v13l-9 15h-22l-19-9v-42l-3-10a38.7 38.7 0 005-.65c9.65-1.93 15.12-7.29 18.2-13.11 4.8-9.11 3.8-19.28 3.8-19.28s40-11 26 20c-1.86 4.13-3.28 7.76-4.35 11a53.72 53.72 0 00-2.6 11.04zM472.09 229.33a2.08 2.08 0 01-.59 1.17 8.65 8.65 0 00-1.29 2c-4.68 8.83-13.71 40-13.71 40l-49-18-.71-.18-19.29-4.82c5.47-3.91 14.61-27.36 18.33-37.42 1-2.81 1.67-4.58 1.67-4.58l52 5s13.48 11.8 12.59 16.83z"
        fill="#f8bdc5"
      />
      <path
        d="M451.5 129.5s-15 6-30 0-33 3-33 3l-46 2s-13-6-30 31-23 39-23 39-31 28-11 35 31-27 31-27l11-21s25-24 27-29 14-5 14-5l50 2-.31 14.62 15.31 13.38 14-12 11-22z"
        fill="#f8bdc5"
      />
      <path
        d="M504.5 119.5c-1.86 4.13-3.28 7.76-4.35 11h-1.65a29.92 29.92 0 01-23.81-11.76c4.81-9.07 3.81-19.24 3.81-19.24s40-11 26 20z"
        opacity={0.1}
      />
      <circle cx={498.5} cy={99.5} r={30} fill="#f8bdc5" />
      <path
        d="M472.09 229.33a2.08 2.08 0 01-.59 1.17 8.65 8.65 0 00-1.29 2c-17.79-.78-56.72-17.11-64.38-20.38 1-2.81 1.67-4.58 1.67-4.58l52 5s13.48 11.76 12.59 16.79zM509.19 187.5l-4.69 6c-9.92 12.75-30.54 17-30.54 17l-13.08-20.12-2.76-24.44L459 142c2.79 13 10.59 40.12 22.5 42.5 19.91 4 18.48-24.53 17.5-36.5a16.2 16.2 0 01.5-5.5l4 3 .36.55c9.53 14.8 7.39 32.42 5.33 41.45z"
        opacity={0.1}
      />
      <path
        d="M456.5 127.5h-10s10 64-37 46c0 0 4 15-5 36 0 0 48 21 67 21l6-6s17-7 19-22l9-9s10-27-4-48l-4-3a16.16 16.16 0 00-.5 5.5c1 12 2.41 40.48-17.5 36.5-25-5-23-57-23-57z"
        fill="#eb6576"
      />
      <path
        d="M388.5 309.5l16 12s26 8 47-21c0 0-13-3-11-10s-52 19-52 19z"
        fill="#5e52ad"
      />
      <path
        d="M388.5 309.5l16 12s26 8 47-21c0 0-13-3-11-10s-52 19-52 19z"
        opacity={0.05}
      />
      <path
        d="M472.09 230.33a2.08 2.08 0 01-.59 1.17c-4 4-15 42-15 42l-49-18-.71-.18a70.21 70.21 0 0112-6.06c3.41-1.32 6.84-2.72 9.81-4.06a44.92 44.92 0 006.91-3.7c4.19-3 20.28-7.8 36.58-11.17z"
        opacity={0.1}
      />
      <path
        d="M585.5 372.5l-15 4s-.34-1-1-2.74c-3.2-8.14-13.86-32.61-32-48.26-22-19-34-46-32-53s-44 21-44 21-33.35 20.75-55.39 20.78a23.28 23.28 0 01-9.61-1.78c-8.5-3.83-11.94-10.54-13.09-17a29.72 29.72 0 016-23.31 68.38 68.38 0 0129.4-21.93c3.41-1.32 6.84-2.72 9.81-4.06a44.92 44.92 0 006.91-3.7c7-5 47-15 66-15h16s13.64.8 17.92 19.66a78 78 0 007.1 18.84l25.95 49.5s13.32 23.61 25.35 33.61c3.43 2.86 6.76 4.61 9.65 4.39 13-1-18 19-18 19z"
        fill="#f8bdc5"
      />
      <path
        d="M538.66 84.52A10.67 10.67 0 00537.9 73c-3.36-4.37-9.43-5.37-14.22-8.11-4.35-2.49-7.64-6.46-11.68-9.42-7.64-5.61-17.38-7.31-26.73-8.84-4-.66-8.08-1.32-12.1-.77-5.09.69-9.77 3.28-13.76 6.51a12.52 12.52 0 00-3.47 3.88c-1.48 2.92-.83 6.42-1.09 9.68-.64 7.95-6.78 14.42-13.55 18.63-4.16 2.59-8.74 4.65-12.2 8.12s-5.55 8.95-3.37 13.33c1.16 2.32 3.43 4.26 3.44 6.86a7.8 7.8 0 01-.94 3.29 47.87 47.87 0 01-9.54 13.55c-3.54 3.52-7.77 6.68-9.61 11.33-1.77 4.47-1 9.57.63 14.1.76 2.16 1.71 4.32 1.75 6.6.11 5.55-5 9.81-10.15 11.89-3.25 1.31-7 2.31-8.95 5.2s-1.51 7.09.48 10 5.2 4.86 8.5 6.19a31.16 31.16 0 0019.38 1.58 23.74 23.74 0 0015.15-11.78c3-5.84 3.2-13 7.36-18.1 7.33-8.91 22.79-6.66 30.44-15.31 6.14-6.95 4.47-17.48 4-26.74a82.37 82.37 0 01.64-15.45c.5-3.64 1.42-7.55 4.28-9.85 2.31-1.86 5.43-2.28 8.37-2.64 6.14-.77 13.21-2.26 16-7.79 1.16-2.3 1.51-5.2 3.6-6.7 2.89-2.08 6.94 0 9.46 2.5 2.78 2.77 5.11 6.18 9.34 5.49 3.59-.56 7.43-2.45 9.3-5.71z"
        opacity={0.1}
      />
      <path
        d="M537.58 83.44a10.67 10.67 0 00-.77-11.52c-3.36-4.37-9.43-5.37-14.22-8.11-4.35-2.49-7.64-6.46-11.68-9.42-7.64-5.61-17.38-7.31-26.73-8.84-4-.66-8.08-1.32-12.1-.77-5.09.69-9.77 3.28-13.76 6.51a12.52 12.52 0 00-3.47 3.88c-1.48 2.92-.83 6.42-1.09 9.68-.64 7.95-6.78 14.42-13.55 18.63-4.16 2.59-8.74 4.65-12.2 8.12s-5.55 8.95-3.37 13.33c1.16 2.32 3.43 4.26 3.44 6.86a7.8 7.8 0 01-.94 3.29 47.87 47.87 0 01-9.54 13.55c-3.54 3.52-7.77 6.68-9.61 11.33-1.77 4.47-1 9.57.63 14.1.76 2.16 1.71 4.32 1.75 6.6.11 5.55-5 9.81-10.15 11.89-3.25 1.31-7 2.31-8.95 5.2s-1.51 7.09.48 10 5.2 4.86 8.5 6.19a31.16 31.16 0 0019.38 1.58 23.74 23.74 0 0015.15-11.78c3-5.84 3.2-13 7.36-18.1 7.33-8.91 22.79-6.66 30.44-15.31 6.14-6.95 4.47-17.48 4-26.74a82.37 82.37 0 01.64-15.45c.5-3.64 1.42-7.55 4.28-9.85 2.31-1.86 5.43-2.28 8.37-2.64 6.14-.77 13.21-2.26 16-7.79 1.16-2.3 1.51-5.2 3.6-6.7 2.89-2.08 6.94 0 9.46 2.5 2.78 2.77 5.11 6.18 9.34 5.49 3.59-.57 7.44-2.46 9.31-5.71z"
        fill="#6e464e"
      />
      <path d="M434 202s11 9 25 8" opacity={0.1} />
      <path
        d="M605.92 353.68c-5.74 5.64-18.42 13.82-18.42 13.82l-15 4s-11-32-33-51-34-46-32-53-44 21-44 21-33.35 20.75-55.39 20.78a23.28 23.28 0 01-9.61-1.78c-8.5-3.83-11.94-10.54-13.09-17a28.68 28.68 0 01.82-13.31 29.19 29.19 0 00-2.82 18.31c1.15 6.46 4.59 13.17 13.09 17a23.28 23.28 0 009.61 1.78c22 0 55.39-20.78 55.39-20.78s46-28 44-21 10 34 32 53 33 51 33 51l15-4s25.89-16.71 20.42-18.82z"
        opacity={0.05}
      />
      <path
        d="M429.5 246.5l-1.7.79a61.63 61.63 0 00-28.9 27.46c-13.4 26.08 4.31 37.83 7.21 39.53a23.28 23.28 0 01-9.61-1.78c-8.5-3.83-11.94-10.54-13.09-17a29.72 29.72 0 016-23.31 68.38 68.38 0 0129.4-21.93c3.41-1.32 6.84-2.72 9.81-4.06z"
        opacity={0.1}
      />
      <path
        d="M427.5 246.5s-21-7.46-35-3.73c0 0-9 7.73-16 14.73-5.7 5.7-20 64 28 57 0 0-22.16-11.42-7.6-39.75a61.62 61.62 0 0128.9-27.46z"
        fill="#5e52ad"
      />
      <path
        d="M585.5 372.5l-15 4s-.34-1-1-2.74c3.49-.92 8-3 8-7.26 0 0 11.45-10.69 16.35-17.39 3.43 2.86 6.76 4.61 9.65 4.39 13-1-18 19-18 19z"
        opacity={0.1}
      />
      <path
        d="M578.5 367.5s15-14 18-20c0 0 29 17 57 2 0 0 26-2 4 21s-81 32-81 32-16 0-10-27c0 0 12-1 12-8z"
        fill="#ffd97b"
      />
      <path
        fill="#dfe5ee"
        d="M667.76 717.38v-13.63l279.29-78.33 49.95-5.68v12.49l-278.15 99.9-51.09-14.75z"
      />
      <path
        opacity={0.05}
        d="M667.76 717.38v-13.63l279.29-78.33 49.95-5.68v12.49l-278.15 99.9-51.09-14.75z"
      />
      <path
        fill="#dfe5ee"
        d="M667.76 703.75l279.29-91.96 48.82 7.95-277.02 98.77-51.09-14.76z"
      />
      <path
        fill="#dfe5ee"
        d="M710.9 495.99h18.17v211.17H710.9zM928.88 447.17h18.17v185.06h-18.17z"
      />
      <path
        fill="#dfe5ee"
        d="M992.46 389.27v56.77L765.67 496.7l-26.83 6-66.54 14.86-19.3-5.68v-65.84l102.9-19.62 25.62-4.88 187.1-35.67 23.84 3.4z"
      />
      <path
        opacity={0.05}
        d="M992.46 389.27v56.77L765.67 496.7l-26.83 6-66.54 14.86-19.3-5.68v-65.84l102.9-19.62 25.62-4.88 187.1-35.67 23.84 3.4z"
      />
      <path
        opacity={0.05}
        d="M729.07 495.99v11.16l-18.17 4.06v-15.22h18.17zM947.05 447.17v11.29l-18.17 4.05v-15.34h18.17z"
      />
      <path
        fill="#dfe5ee"
        d="M992.46 389.27v56.77l-92.08 20.57-26.78 5.98-107.93 24.11-26.83 6-66.54 14.86 1.14-64.71 92.47-18.43 25.87-5.15h.01L897.5 408.2l25.82-5.15 69.14-13.78z"
      />
      <path
        fill={color}
        d="M791.79 429.27l-26.12 67.43-26.83 6 27.07-68.28-10.01-8 25.62-4.88 10.26 7.73h.01zM924.62 404.03l-24.24 62.58-26.78 5.98 25.14-63.41-1.24-.98-8.76-7.02 25.61-4.88 8.97 6.75 1.29.98h.01z"
      />
      <path
        opacity={0.05}
        d="M714.88 703.47l18.16-4.26v4.26l-18.16 4.26v-4.26zM931.72 628.54l18.16-4.26v4.26l-18.16 4.25v-4.25z"
      />
    </svg>
  );
};

SvgTrackAndField.propTypes = {
  color: PropTypes.string
};
SvgTrackAndField.defaultProps = {
  color: "primary"
};
const MemoSvgTrackAndField = React.memo(SvgTrackAndField);
export default MemoSvgTrackAndField;
