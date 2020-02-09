import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgForever = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1118.83 885.03"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Forever_svg__a"
          x1={373.65}
          y1={193.72}
          x2={373.65}
          y2={191.69}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Forever_svg__b"
          x1={373.65}
          y1={192.7}
          x2={373.65}
          y2={190.66}
          xlinkHref="#Forever_svg__a"
        />
        <linearGradient
          id="Forever_svg__c"
          x1={439.36}
          y1={721.29}
          x2={439.36}
          y2={172.56}
          xlinkHref="#Forever_svg__a"
        />
        <linearGradient
          id="Forever_svg__d"
          x1={450.66}
          y1={467.97}
          x2={450.66}
          y2={417.4}
          xlinkHref="#Forever_svg__a"
        />
        <linearGradient
          id="Forever_svg__e"
          x1={368.49}
          y1={311.4}
          x2={368.49}
          y2={311.4}
          xlinkHref="#Forever_svg__a"
        />
      </defs>
      <path
        d="M177.67 273.52c-1.11-37.84 5-82.36 34.14-100.23 14.45-8.87 31.7-9 47.3-14.81 35-13 56.8-51.56 77.9-86.06S385.86 2.15 422.58.1c50.59-2.83 85 57.89 131.63 80.53 88.4 42.89 192.14-59.69 281.77-20.27 13 5.72 25.44 14.78 32.75 28.37 7.2 13.39 8.82 29.93 15.84 43.45 22.18 42.72 81.62 33.12 113.22 67.17 10.87 11.71 17.41 27.61 23.71 43.11l21.94 54c4.11 10.13 8.3 20.57 8.79 31.73.86 19.59-9.8 38.3-7.91 57.79 2.94 30.44 33.74 47.1 43.5 75.61 4.6 13.44 4.11 28.39 3 42.78a566.27 566.27 0 01-14 89c-7.12 29.58-17.79 60.2-39.67 77.9-15.42 12.47-34.55 17-53.13 20.74-106.21 21.55-214.2 28.78-321.95 34.39-94 4.9-190.19 8.3-280.25-23.12-40.4-14.06-80.89-36.9-104.22-77.21-16-27.63-19-57.71-26.21-88.83-5.57-24.06-22-42.64-31.37-65.18a562.45 562.45 0 01-42.35-198.54z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M161.25 561.31a332 332 0 01115.38 11.12c14.46 4 29 9.1 44 8.67 18.41-.53 35.42-9.23 52.39-16.39 26.76-11.3 55.72-19.23 84.65-16.6 53.24 4.83 100.08 44.48 153.51 42.65 45.79-1.56 86.89-33.67 132.69-32.72 31.08.64 59.89 16.52 90.71 20.59 39.56 5.22 79-9.26 118.81-11a188.41 188.41 0 0199.11 23.26c21.9 12.13 43.52 35.79 34.9 59.29-2.63 7.17-7.95 13.55-8.28 21.18-.74 17 21.17 24.2 32.1 37.22 13.45 16 8 42.37-7.81 56.06s-38.67 16.53-59.31 13.1-39.89-12.3-59.43-19.76a454.72 454.72 0 00-115.58-27.5c-27.36-2.81-55.18-3.12-82.2 2-20.23 3.82-39.8 10.63-60 14.37-101.06 18.67-200.94-40.33-303.67-39.93-28.87.12-57.47 4.94-86.14 8.36-88.87 10.59-178.73 7.64-268.19 4.68-9.05-.3-18.84-.87-25.8-6.67-13-10.86-8-31.91 0-46.83 13.12-24.33 31-45.3 44.38-69.29 14.52-25.88 46.02-33.65 73.78-35.86z"
        fill={color}
      />
      <path
        d="M373.4 193.72a3.49 3.49 0 00.49-2 12.71 12.71 0 00-.49 2z"
        transform="translate(-40.58 -7.48)"
        fill="url(#Forever_svg__a)"
        opacity={0.05}
      />
      <path
        d="M373.4 192.7a3.49 3.49 0 00.49-2 12.71 12.71 0 00-.49 2z"
        transform="translate(-40.58 -7.48)"
        fill="url(#Forever_svg__b)"
        opacity={0.05}
      />
      <path
        d="M821.63 664.53c-2.31 1.16-21.31-1.61-37.37-4.24 8.65-2 15-4.6 18-8 17.25-19.84-58.76-8.35-82.79-4.3l-19.34-3.87-21.66-5c-14.94-21-37.59-63.58-48.55-84.69 3.64-.82 5.86-1.21 5.86-1.21-.17-.66-.35-1.3-.53-1.95l.53-.1c-20.43-77.62-55.15-66.39-55.15-66.39-4.15 0-10.25 1.79-17.47 4.73a165.33 165.33 0 00-9-24.06l-.84-1.82c2.43.45 3.85.73 3.85.73s-.2-.54-.59-1.53l.36.07.85.16h.18l.35.07.89.17s-28-76.1-87.65-121.88A107.85 107.85 0 00417 319.35c-1.06-.11-2.08-.19-3.09-.26L413 319c-.77 0-1.53-.08-2.28-.1h-1.6c-13.53-.2-23.4 3.15-34.8 9-2.08 1-4.2 2.13-6.4 3.32a46.31 46.31 0 01-5.07-.9q-1.37-.33-2.68-.75a57.21 57.21 0 0029.24-73.9 39 39 0 0117.7-16.24 5.71 5.71 0 002.43-1.61 5.33 5.33 0 00.69-3.05v-.09-.58V233.66a19.7 19.7 0 00-16.9-19.79 31.26 31.26 0 01-8.19-2.37c-6.33-2.87-11.51-9.3-11.85-16a13 13 0 01.16-1.78l-.15.23c0-.42.09-.83.15-1.25-1.42 2.42-5.6 3.3-8.07 1.41-2.21-1.69-3.11-4.47-3.2-7.31a16.91 16.91 0 01.24-2.28 32.4 32.4 0 00.77-6.4c.1-2.28-.33-4.35-2.17-5.55-3.9 4.8-10.22 7.09-16.39 7.58s-12.34-.6-18.47-1.41c-15.14-2-32.16-1.76-43.58 8.39-7.43 6.6-11.17 16.3-14.65 25.61-4.92 13.15-9.82 27.42-9.67 41.13a45.55 45.55 0 003.57 18.68c4.78 11 14.48 19.7 17.44 31.34.68 2.68 1 5.51 2.33 7.94 2.69 4.92 9 6.89 14.55 6.13a57.5 57.5 0 006.82 5.8c-.05.65-.11 1.29-.17 1.93-.38 4-.92 8-1.66 11.8-.45-.65-1.08-.29-2.92-.29h-.8l-.74.09-.81.14h-.17l-.94.2-1 .25h-.14l-1.15.31-1.25.36h-.06c-3.56 1.07-7.9 2.63-12.47 4.39a56 56 0 00-15-30.07 30.56 30.56 0 003.85-7.11c1.54-4.16-.05-7-2.73-9.47-2.09-2.29-5.25-4.17-8.05-6.25a118.29 118.29 0 00-41.83-19.75c-4.89-1.21-9.94-2.11-14.94-1.56-4.75.52-9.27 2.32-13.6 4.34a130.11 130.11 0 00-19.64 11.35c-4.17 2.92-8.26 6.14-13.08 7.81-7.22 2.5-15.57 1.34-22.23 5.1-9.32 5.27-11.41 17.9-10 28.52s5.14 21.2 3.47 31.78c-2.51 15.83-16.23 27.07-28.85 37-4 3.11-8.23 6.77-8.84 11.78-.38 3.13.77 6.22 1.73 9.23a78.42 78.42 0 01-.95 50.63 70.62 70.62 0 01-33 38c-5.8 3-12.83 6.12-14.19 12.52-.91 4.31 1.12 8.1 4.38 11.14a30.48 30.48 0 0011.45 7.18 103.09 103.09 0 0019.61 5.12c5.88.93 12.18 1.29 17.55-1.29 6.25-3 10.06-9.37 13.36-15.47 8.44-15.58 18.14-25.94 26.16-38.49 1.06 4.58 1.91 7.77 2 7.95-6.65 6-9.76 15.84-6.12 31.69 14.3 62.3 32.68 77.62 32.68 77.62a21.66 21.66 0 013.79-9.34l.81 1c8.72 10.59 18.74 21.62 27.07 27.75A142.28 142.28 0 01219.18 646a5.12 5.12 0 01-1.75 7.82c-13.09 6.38-41.74 22.76-7.59 30.08s62-12 71.79-20.13a5.13 5.13 0 00.75-7.17l-31.1-38.87-3.83-4.73c2.06 1.46 4.15 3 6.31 4.57l-5.55-8.87 17.57 1.83c.51 1.07 1 2.12 1.54 3.12 3.5 7.19 7.21 12.81 11.08 15.93a37.74 37.74 0 005 20.67c14 25.42 91.22 25.26 112.84 24.71a50.39 50.39 0 006.08.59 50.9 50.9 0 0010.08-.66l.7-.12a26 26 0 0011.63-4.77l30.73-6.15.69.17c17.34 3.57 50.34 9.29 69.29 5.65 18.16-3.49 28.67 2.57 33.51 6.75a56.3 56.3 0 01-1.85 5.51h.27c-1.21 2.67-5.68 15.59 12.5 30.13 11.88 9.5 92.79 12 120.52 6.13 20-4.22-8.41-16.34-12.26-16.34-8.71 0-35.75-18.33-38.56-20.25-.46-.6-1.52-2-3-4 18.8 2.51 51.9 6.48 58.41 4.31 9.19-3.06 50 2 50 2s55.15 12.26 81.71 4.09-.98-25.51-5.06-23.47z"
        transform="translate(-40.58 -7.48)"
        fill="url(#Forever_svg__c)"
      />
      <path
        d="M461.1 449c-3.22 1.38-10.88 8.59-20.81 18.95-3.16-20.78-5.2-39.52-3.88-47.32a7 7 0 011.17-3.25c6-.41 18.08 14.5 27.75 28-2.68 2.15-4.23 3.62-4.23 3.62z"
        transform="translate(-40.58 -7.48)"
        fill="url(#Forever_svg__d)"
        opacity={0.05}
      />
      <path fill="url(#Forever_svg__e)" d="M368.49 311.4z" opacity={0.05} />
      <path
        d="M579.06 532.52s52 103 65 107 22-2 22-2 108-20 88 3-195 9-195 9l-44-99z"
        fill="#ef91a3"
      />
      <path
        d="M430.06 534.52s84-56 107-56c0 0 34-11 54 65 0 0-69 12-68 45l-13-28-56 62-68-46z"
        opacity={0.1}
      />
      <path
        d="M430.06 532.52s84-56 107-56c0 0 34-11 54 65 0 0-69 12-68 45l-13-28-56 62-68-46z"
        fill="#5d526e"
      />
      <path
        d="M522.06 504.52c-5 24-31 28-31 28l-37-23s-5.22-34.45-9.63-55.45c-1.69-8.07-3.26-14.16-4.37-15.55-4-5 59-4 59-4a247.79 247.79 0 0112.06 23.07c6.86 14.99 13.61 34.09 10.94 46.93zM362.06 323.52l-21 100-51-13s-47-37-33-60c4.58-7.52 6.91-18.46 8-29.77 2.19-23.31-1-48.23-1-48.23s56-15 45 26c-4.52 16.84 3.61 24.06 14.76 26.73 16.01 3.81 38.24-1.73 38.24-1.73z"
        fill="#ef91a3"
      />
      <path
        d="M323.82 325.23a55.66 55.66 0 01-25.76 6.29c-12.35 0-24.24-7.73-33.5-14.5a228.43 228.43 0 00-.5-44.5s56-15 45 26c-4.52 16.82 3.61 24 14.76 26.71z"
        opacity={0.1}
      />
      <circle cx={298.06} cy={273.5} r={56} fill="#ef91a3" />
      <path
        d="M293.87 390.32l15.19 21.2 8.64-31.33a155.88 155.88 0 005.24-38.4 26.37 26.37 0 015.12-15.27c15.58-8.5 27.15-13 46.79-11a105.6 105.6 0 0153.39 21.63c58.37 44.85 85.82 119.37 85.82 119.37s-80-16-76 2c0 0-35-56-43-47s17 128 17 128l-164 12-43-114 2-85s42.5-19.5 51.5-19.5c3.15 0 2.67-1.1 4 4 5.13 19.62 19.49 36.8 31.31 53.3z"
        opacity={0.1}
      />
      <path
        d="M511.12 457.57c-13.91-2.51-53.31-8.92-66.69-3.52-1.69-8.07-3.26-14.16-4.37-15.55-4-5 59-4 59-4a247.79 247.79 0 0112.06 23.07z"
        opacity={0.1}
      />
      <path
        d="M295.87 389.32l15.19 21.2 8.64-31.33a155.88 155.88 0 005.24-38.4 26.37 26.37 0 015.12-15.27c15.58-8.5 27.15-13 46.79-11a105.6 105.6 0 0153.39 21.63c58.37 44.85 85.82 119.37 85.82 119.37s-80-16-76 2c0 0-35-56-43-47s17 128 17 128l-164 12-43-114 2-85s42.5-19.5 51.5-19.5c3.15 0 2.67-1.1 4 4 5.13 19.62 19.49 36.8 31.31 53.3z"
        fill="#dfecfb"
      />
      <path
        d="M259.18 313.07c-5.62 1-12.16-.89-14.9-5.9-1.3-2.38-1.62-5.15-2.29-7.77-2.9-11.39-12.4-19.9-17.08-30.68-7.88-18.17-1-39 6-57.56 3.41-9.11 7.07-18.61 14.34-25.07 11.18-9.94 27.84-10.17 42.67-8.22 6 .79 12 1.86 18.09 1.38s12.23-2.72 16-7.42c3.22 2.09 2 6.92 1.37 10.7s-.11 8.1 2.9 10.4 8.63.4 8.38-3.37c-2.71 8 3.27 16.86 11 20.36a30.6 30.6 0 008 2.32 19.29 19.29 0 0116.54 19.37v.09a5.22 5.22 0 01-.67 3 5.59 5.59 0 01-2.38 1.58 38.14 38.14 0 00-18 17.21c-2.07 4.05-3.63 8.74-7.45 11.21-4.7 3-10.84 1.52-16.42 2a23.3 23.3 0 00-20.11 16.52c-1.3 4.63-1.12 9.68-4 13.79a7.87 7.87 0 01-5.47 3.45c-4.34.47-6.33-3.42-9.44-5.43-7.31-4.72-12 1.51-14.29 7.39-2.55 6.37-4.37 9.1-12.79 10.65z"
        opacity={0.1}
      />
      <path
        d="M259.18 312.07c-5.62 1-12.16-.89-14.9-5.9-1.3-2.38-1.62-5.15-2.29-7.77-2.9-11.39-12.4-19.9-17.08-30.68-7.88-18.17-1-39 6-57.56 3.41-9.11 7.07-18.61 14.34-25.07 11.18-9.94 27.84-10.17 42.67-8.22 6 .79 12 1.86 18.09 1.38s12.23-2.72 16-7.42c3.22 2.09 2 6.92 1.37 10.7s-.11 8.1 2.9 10.4 8.63.4 8.38-3.37c-2.71 8 3.27 16.86 11 20.36a30.6 30.6 0 008 2.32 19.29 19.29 0 0116.54 19.37v.09a5.22 5.22 0 01-.67 3 5.59 5.59 0 01-2.38 1.58 38.14 38.14 0 00-18 17.21c-2.07 4.05-3.63 8.74-7.45 11.21-4.7 3-10.84 1.52-16.42 2a23.3 23.3 0 00-20.11 16.52c-1.3 4.63-1.12 9.68-4 13.79a7.87 7.87 0 01-5.47 3.45c-4.34.47-6.33-3.42-9.44-5.43-7.31-4.72-12 1.51-14.29 7.39-2.55 6.37-4.37 9.1-12.79 10.65z"
        fill="#572142"
      />
      <g opacity={0.05}>
        <path d="M418.24 335.17c54 41.46 81.52 108.31 85.35 118.11 7.45 1.22 12.47 2.22 12.47 2.22s-27.45-74.51-85.82-119.34a105.6 105.6 0 00-53.39-21.64c-2.72-.28-5.28-.42-7.73-.46a106.15 106.15 0 0149.12 21.11zM252.56 335c5.13 19.64 19.48 36.82 31.31 53.32l15.19 21.2 3.14-11.36-6.32-8.82c-11.83-16.5-26.18-33.68-31.31-53.32-1.33-5.1-.85-4-4-4a33.21 33.21 0 00-8.3 1.86zM434.74 449.3c3.25 4.88 5.32 8.2 5.32 8.2-1.75-7.85 12.5-9.23 29.11-8.3-13.03-1.38-26.56-1.97-34.43.1zM395.89 413.73c-4.73-4.45-8.72-6.6-10.83-4.22-8 9 17 128 17 128l-152.64 11.17.69 1.83 164-12s-21.81-103.62-18.22-124.78z" />
      </g>
      <path
        d="M244.35 651.79c-9.57 7.92-36.74 26.9-70.29 19.71s-5.39-23.2 7.43-29.45a5 5 0 001.71-7.66 139.31 139.31 0 00-25.14-23.87c-8.15-6-18-16.8-26.5-27.17-4.49-5.43-8.61-10.73-12-15.18a5 5 0 015.33-7.87l65.56 17.8a5 5 0 012.6 1.71l21.55 26.93 30.45 38.06a5 5 0 01-.7 6.99z"
        fill="#ef91a3"
      />
      <path
        d="M214.63 606.71c-54.71-39.9-75.36-32.77-83.07-23.39-4.49-5.43-8.61-10.73-12-15.18a5 5 0 015.33-7.87l65.56 17.8a5 5 0 012.6 1.71z"
        opacity={0.1}
      />
      <path
        d="M169.06 483.52s-88-29-74 32 32 76 32 76 5-48 90 15l-30-48 35-44z"
        fill="#5d526e"
      />
      <path
        d="M148.06 428.52s-8 42 21 93c23 40.43-4.3 58.86-16.59 64.77a8.67 8.67 0 01-9.85-1.65c-8.1-8-23.63-28.34-14.56-60.12l6-16-33-24s-8.93-33.11-5-40.56 36-27.44 36-27.44z"
        opacity={0.1}
      />
      <path
        d="M148.06 426.52s-8 42 21 93c23 40.43-4.3 58.86-16.59 64.77a8.67 8.67 0 01-9.85-1.65c-8.1-8-23.63-28.34-14.56-60.12l6-16-33-24s-8.93-33.11-5-40.56 36-27.44 36-27.44z"
        fill="#ef91a3"
      />
      <path
        d="M221.06 346.52s-72 41-102 68-24 36-24 36 29-54 54-7c0 0 70-51 89-29s-17-68-17-68z"
        fill="#dfecfb"
      />
      <path
        fill="#5d526e"
        d="M194.06 582.5l60-12-7 31-43.48-4.53-9.52-14.47z"
      />
      <path
        d="M298.06 450.52l-2 22-72-12-22-14-33-12a57.43 57.43 0 001.75-33.44 50.76 50.76 0 00-5.75-13.56c-14-23 59-13 59-13a96.54 96.54 0 00-1.1 15.67c.15 16.71 4.88 40.26 31.1 36.33l22 13z"
        fill="#ffc1cd"
      />
      <path d="M227.06 419.52s37-16 55 17 26 31 26 31l-36-23z" fill="#ffc1cd" />
      <path
        d="M258.06 586.52s-28 23-12 52 116 24 116 24-63.48-23.85-47.74-103.93c0-.01-45.26 12.93-56.26 27.93zM391.06 620.52l-10 38 35-7s-15-32-13-41-12 10-12 10z"
        fill="#5f5470"
      />
      <path
        d="M419.06 574.52s91 9 116 23l19 6s7-2 22 11l78 18 60 12s55 10 59 8 31 15 5 23-80-4-80-4-40-5-49-2-70-6-70-6l-60 4s-10-15-36-10c-18.55 3.57-50.86-2-67.84-5.53a16.88 16.88 0 01-13.2-13.47l-6-32z"
        fill="#ffc1cd"
      />
      <path
        d="M419.06 574.52s91 9 116 23l19 6s7-2 22 11l78 18 60 12s55 10 59 8 31 15 5 23-80-4-80-4-40-5-49-2-70-6-70-6l-60 4s-10-15-36-10c-18.55 3.57-50.86-2-67.84-5.53a16.88 16.88 0 01-13.2-13.47l-6-32z"
        opacity={0.05}
      />
      <path
        d="M222.96 390.17a55.1 55.1 0 01-52.15 10.89 50.76 50.76 0 00-5.75-13.54c-14-23 59-13 59-13a96.54 96.54 0 00-1.1 15.65z"
        opacity={0.1}
      />
      <circle cx={187.06} cy={346.5} r={55} fill="#ffc1cd" />
      <path
        d="M164.06 427.52s42 23 44 38-6 33-6 33 19 114 43 122l64-62 54-24s-32-2-35-32 4-40-32-54-55.5-30.5-55.5-30.5l-9.3 2.35 47.8 25.15s27 16-43 4l-66-24z"
        opacity={0.1}
      />
      <path
        d="M163.06 425.52s42 23 44 38-6 33-6 33 19 114 43 122l64-62 54-24s-32-2-35-32 4-40-32-54-55.5-30.5-55.5-30.5l-9.3 2.35 47.8 25.15s27 16-43 4l-66-24z"
        fill="#ff808c"
      />
      <path
        d="M178.06 433.52s-41-15-31 33 62 131 62 131l122-42s38-29 28-32-63 16-63 16l-72 11-17-48s16-11 11-25l-.15-.42a77.35 77.35 0 00-38.25-42.78z"
        opacity={0.1}
      />
      <path
        d="M176.06 431.52s-41-15-31 33 62 131 62 131l122-42s38-29 28-32-63 16-63 16l-72 11-17-48s16-11 11-25l-.15-.42a77.35 77.35 0 00-38.25-42.78z"
        fill="#ffc1cd"
      />
      <path
        d="M179.88 267.63c-4.78-1.18-9.73-2.07-14.63-1.53a42.93 42.93 0 00-13.31 4.25 127.39 127.39 0 00-19.23 11.11c-4.09 2.86-8.09 6-12.8 7.65-7.07 2.45-15.25 1.31-21.76 5-9.13 5.16-11.17 17.53-9.82 27.93s5 20.76 3.4 31.12c-2.45 15.5-15.9 26.51-28.24 36.19-3.89 3-8.06 6.63-8.66 11.53-.37 3.07.75 6.09 1.69 9a76.78 76.78 0 01-.77 49.47 69.15 69.15 0 01-32.33 37.23c-5.68 3-12.56 6-13.89 12.26-1.69 8 6.88 14.11 14.5 16.93a100.93 100.93 0 0019.2 5c5.76.91 11.92 1.27 17.18-1.26 6.12-2.94 9.85-9.18 13.08-15.14 12.59-23.24 28-34.63 36.19-59.77 1.76-5.42 4.56-11.87 10.23-12.42 3.55-.34 6.76 1.89 9.77 3.79 14.55 9.17 29.84-1.11 43.38-11.7 3.13-2.45 5.82-5.53 9.3-7.44 7.41-4.07 18.21-2.9 22.65-10.1a20 20 0 002.13-6.07c1.82-7.82 3.64-16 1.54-23.78-1.95-7.17-7-13-10-19.85s-3.16-16.09 2.95-20.31c1.83-1.27 4-1.92 5.84-3.23 5.25-3.81 5.37-11.42 5.34-17.91a9.54 9.54 0 01.8-4.69 11.25 11.25 0 013.7-3.4c5.53-3.9 10.69-9.73 13.07-16.15 2.65-7.15-4.14-10.38-9.56-14.4a115.81 115.81 0 00-40.94-19.31z"
        opacity={0.1}
      />
      <path
        d="M178.88 266.63c-4.78-1.18-9.73-2.07-14.63-1.53a42.93 42.93 0 00-13.31 4.25 127.39 127.39 0 00-19.23 11.11c-4.09 2.86-8.09 6-12.8 7.65-7.07 2.45-15.25 1.31-21.76 5-9.13 5.16-11.17 17.53-9.82 27.93s5 20.76 3.4 31.12c-2.45 15.5-15.9 26.51-28.24 36.19-3.89 3-8.06 6.63-8.66 11.53-.37 3.07.75 6.09 1.69 9a76.78 76.78 0 01-.77 49.47 69.15 69.15 0 01-32.33 37.23c-5.68 3-12.56 6-13.89 12.26-1.69 8 6.88 14.11 14.5 16.93a100.93 100.93 0 0019.2 5c5.76.91 11.92 1.27 17.18-1.26 6.12-2.94 9.85-9.18 13.08-15.14 12.59-23.24 28-34.63 36.19-59.77 1.76-5.42 4.56-11.87 10.23-12.42 3.55-.34 6.76 1.89 9.77 3.79 14.55 9.17 29.84-1.11 43.38-11.7 3.13-2.45 5.82-5.53 9.3-7.44 7.41-4.07 18.21-2.9 22.65-10.1a20 20 0 002.13-6.07c1.82-7.82 3.64-16 1.54-23.78-1.95-7.17-7-13-10-19.85s-3.16-16.09 2.95-20.31c1.83-1.27 4-1.92 5.84-3.23 5.25-3.81 5.37-11.42 5.34-17.91a9.54 9.54 0 01.8-4.69 11.25 11.25 0 013.7-3.4c5.53-3.9 10.69-9.73 13.07-16.15 2.65-7.15-4.14-10.38-9.56-14.4a115.81 115.81 0 00-40.94-19.31z"
        fill="#b46d86"
      />
      <path
        d="M644.56 705c-27.15 5.73-106.37 3.3-118-6-17.8-14.24-13.42-26.89-12.24-29.5h-.26s10-24 0-42c0 0-1-22-22-39s-44-65-44-65l-12 25s-18 54.89-36.75 79.26a38.85 38.85 0 00-7.44 16.49c-1.24 6.61-5.52 14.94-18.81 17.25l-.69.12a49.58 49.58 0 01-49-20.81c-9-12.89-19.09-30.77-21.38-48.2a42.37 42.37 0 019.81-32.87l.11-.13c21.51-25.45 96.19-112.99 108.15-118.09 0 0 54-52 75 18s28 91 28 91 25.11 44.85 32 60c7.12 15.66 36.74 54.72 39.75 58.67 2.75 1.88 29.22 19.83 37.75 19.83 3.77-.02 31.56 11.85 12 15.98z"
        fill="#ffc1cd"
      />
      <path
        d="M518.15 641.59c.85-7.77.39-17-4.09-25.09 0 0-1-22-22-39s-44-65-44-65l-12 25s-18 54.89-36.75 79.26a38.85 38.85 0 00-7.44 16.49c-1.24 6.61-5.52 14.94-18.81 17.25l-.69.12a49.58 49.58 0 01-49-20.81c-8.85-12.74-18.85-30.38-21.29-47.62a41.52 41.52 0 00-.09 11.42c2.29 17.42 12.43 35.31 21.38 48.2a49.58 49.58 0 0049 20.81l.69-.12c13.29-2.31 17.57-10.64 18.81-17.25a38.85 38.85 0 017.44-16.49c18.71-24.37 36.75-79.24 36.75-79.24l12-25s23 48 44 65 22 39 22 39a35.73 35.73 0 014.09 13.07zM257.56 512s43-1 40-15"
        opacity={0.05}
      />
      <path
        d="M134.25 667.31a332 332 0 01115.38 11.12c14.46 4 29 9.1 44 8.67 18.41-.53 35.42-9.23 52.39-16.39 26.76-11.3 55.72-19.23 84.65-16.6 53.24 4.83 100.08 44.48 153.51 42.65 45.79-1.56 86.89-33.67 132.69-32.72 31.08.64 59.89 16.52 90.71 20.59 39.56 5.22 79-9.26 118.81-11a188.41 188.41 0 0199.11 23.26c21.9 12.13 43.52 35.79 34.9 59.29-2.63 7.17-7.95 13.55-8.28 21.18-.74 17 21.17 24.2 32.1 37.22 13.45 16 8 42.37-7.81 56.06s-38.67 16.53-59.31 13.1-39.89-12.3-59.43-19.76a454.72 454.72 0 00-115.58-27.5c-27.36-2.81-55.18-3.12-82.2 2-20.23 3.82-39.8 10.63-60 14.37-101.06 18.67-200.94-40.33-303.67-39.93-28.87.12-57.47 4.94-86.14 8.36-88.87 10.59-178.73 7.64-268.19 4.68-9.05-.3-18.84-.87-25.8-6.67-13-10.86-8-31.91 0-46.83 13.12-24.33 31-45.3 44.38-69.29 14.52-25.88 46.02-33.65 73.78-35.86z"
        fill={color}
      />
      <circle cx={797.56} cy={165} r={69} fill={color} opacity={0.1} />
      <path
        d="M824.42 476.62s-67.63 40.8 57 103.62c0 0 27.46-51-2.9-92.57a40.94 40.94 0 00-53.1-11.64z"
        fill={color}
      />
      <path
        d="M825.18 475.76s57.88 44.28 56.24 104.48"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M877.71 579.98s-21.19-72 4-124.91a113.65 113.65 0 009.19-71.3 191.13 191.13 0 00-10.09-33.46"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M896.42 316.85c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 1131.93 0zM922.83 365.69c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 0126.8 17.36zM921.68 449.16c-7.87 4-37.89 1.23-37.89 1.23s15.63-25.77 23.51-29.74a16 16 0 0114.38 28.51zM906.59 512.12c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0119 25.67zM857.22 387.59c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 10-22.25 22.9zM840.5 461.44c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.77-23.52-29.74a16 16 0 10-14.38 28.51zM834.1 535.45c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 10-19 25.67z"
        fill={color}
      />
      <path
        d="M896.42 316.85c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 1131.93 0zM922.83 365.69c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 0126.8 17.36zM921.68 449.16c-7.87 4-37.89 1.23-37.89 1.23s15.63-25.77 23.51-29.74a16 16 0 0114.38 28.51zM906.59 512.12c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0119 25.67zM857.22 387.59c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 10-22.25 22.9zM840.5 461.44c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.77-23.52-29.74a16 16 0 10-14.38 28.51zM834.1 535.45c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 10-19 25.67z"
        opacity={0.25}
      />
      <path
        d="M938.75 604.35s-21.19-72 4-124.91a113.65 113.65 0 009.19-71.3 191.13 191.13 0 00-10.09-33.46"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M957.48 341.22c0 8.82-16 34.39-16 34.39s-16-25.57-16-34.39a16 16 0 0131.93 0zM983.87 390.06c-4.79 7.4-32.09 20.19-32.09 20.19s.5-30.14 5.29-37.54a16 16 0 1126.8 17.36zM982.72 473.52c-7.87 4-37.89 1.23-37.89 1.23s15.64-25.77 23.52-29.74a16 16 0 1114.37 28.51zM967.62 536.52c-7.09 5.24-37.14 7.61-37.14 7.61s11.06-28 18.15-33.29a16 16 0 0119 25.67zM918.25 411.96c6.32 6.14 35.79 12.51 35.79 12.51s-7.22-29.27-13.54-35.41a16 16 0 10-22.25 22.9zM901.54 485.81c7.87 4 37.89 1.23 37.89 1.23s-15.64-25.77-23.52-29.74a16 16 0 00-14.38 28.51zM895.14 559.82c7.09 5.24 37.14 7.61 37.14 7.61s-11.06-28-18.15-33.29a16 16 0 10-19 25.67z"
        fill={color}
      />
      <path
        d="M516.5 129.58h-5.91a4.14 4.14 0 100-8.28h-47.88a4.14 4.14 0 100 8.28h5.91a4.14 4.14 0 100 8.28h-8.28a4.14 4.14 0 100 8.28h47.88a4.14 4.14 0 100-8.28h8.28a4.14 4.14 0 000-8.28zM883.5 213.58h-5.91a4.14 4.14 0 100-8.28h-47.88a4.14 4.14 0 100 8.28h5.91a4.14 4.14 0 100 8.28h-8.28a4.14 4.14 0 100 8.28h47.88a4.14 4.14 0 100-8.28h8.28a4.14 4.14 0 000-8.28zM571.5 238.58h-5.91a4.14 4.14 0 100-8.28h-47.88a4.14 4.14 0 100 8.28h5.91a4.14 4.14 0 100 8.28h-8.28a4.14 4.14 0 100 8.28h47.88a4.14 4.14 0 100-8.28h8.28a4.14 4.14 0 000-8.28z"
        fill={color}
        opacity={0.1}
      />
    </svg>
  );
};

SvgForever.propTypes = {
  color: PropTypes.string
};
SvgForever.defaultProps = {
  color: "primary"
};
const MemoSvgForever = React.memo(SvgForever);
export default MemoSvgForever;
