import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHavingFun = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1135.15 712.88"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1128.04 491.07c-11.39 27.39-35.22 52.13-60.8 75.56q-33.73 30.9-72.16 59.72-10.65 8-21.64 15.8l-5.09 3.59q-6.77 4.79-13.77 9.49l-.56.38q-6.79 4.62-13.7 9.15c-15.07 9.9-31 19.73-48.61 27.87-6 2.78-12.19 5.37-18.6 7.69q-5.2 1.89-10.62 3.54c-5.92 1.8-12 3.37-18.35 4.66-1.06.22-2.13.43-3.2.63-6.5 1.22-13.08 2.11-19.73 2.72-24.37 2.23-49.54.6-73.95-3.22-12.2-1.91-24.21-4.37-35.83-7.17-1.43-.34-2.85-.69-4.28-1-39.57-9.9-76.72-23.34-116.57-32.79q-20.6-4.89-42-8.3-10.44-1.66-21-3a613.806 613.806 0 00-50.2-4.14c-22.72-1-46.18-.57-67.8 3.4q-4.32.79-8.53 1.78-5.34 1.25-10.48 2.85a186.58 186.58 0 00-26.89 11.07c-1.71.84-3.4 1.69-5.09 2.55-5.3 2.7-10.53 5.46-15.84 8.14a199.93 199.93 0 01-29.74 12.62 157.47 157.47 0 01-17.08 4.36c-15.27 3.06-31.52 4.27-47.84 4.35-7.87 0-15.75-.17-23.54-.58h-.24c-2.66-.14-5.33-.3-8-.5-12.16-.83-24.28-2.11-36.22-3.86-40.91-6-79.71-17.34-110.92-34.64C26.78 640.31-.14 605.3 3.9 570.32c2.9-25.2 20.91-48.6 38-71.51 31.79-42.66 61.57-86.29 77.24-132.28 12.71-37.33 16.5-76.8 45.75-110.35 9.37-10.74 21.35-20.54 35.3-29.13a225.4 225.4 0 0132.68-16.52 282.47 282.47 0 0139.39-12.85 313.5 313.5 0 0135.32-6.64c6.46-.84 13-1.49 19.58-1.93q7.6-.53 15.27-.67h.79q4.69-.09 9.38 0a437.06 437.06 0 0168 6.39c14.06 2.35 28 5.23 41.65 8.4q12.22 2.83 24.22 5.93c2.44.63 4.88 1.27 7.29 1.92 56.92 15.25 107 36.31 161.84 53.59.28.09.55.18.83.25a337.86 337.86 0 0034.24 8.6c8.49 1.7 17.17 3.17 26 4.46 13.52 2 27.33 3.58 41.24 4.94l3.07.3c20.41 2 41 3.49 61 5.23 7.1.62 14.14 1.26 21.08 2q6.6.66 13.08 1.4c3.1.36 6.21.72 9.32 1.1s6.4.78 9.6 1.19c2.08.26 4.15.53 6.23.82 12.6 1.67 25.17 3.54 37.6 5.68 7.56 1.3 15.08 2.7 22.51 4.21q8.07 1.64 16 3.46 5.88 1.33 11.66 2.8c31.31 7.87 60.61 18.19 85.86 32.12 65.57 36.09 94.91 95.46 73.12 147.84z"
        fill={color}
        opacity={0.1}
      />
      <circle cx={248.99} cy={68.77} r={21.63} fill={color} opacity={0.1} />
      <circle cx={691.1} cy={21.63} r={21.63} fill={color} opacity={0.1} />
      <circle cx={953.25} cy={70.07} r={21.63} fill={color} opacity={0.1} />
      <circle cx={36.25} cy={121.1} r={36.25} fill={color} opacity={0.1} />
      <circle cx={71} cy={300.1} r={36.25} fill={color} opacity={0.1} />
      <circle cx={1043.92} cy={234.21} r={36.25} fill={color} opacity={0.1} />
      <path
        d="M354.35 239.35a39 39 0 01-.53 9.1c-2 9.29-10.46 15.67-18.65 20.51s-17.19 9.42-22.06 17.59c-5.87 9.87-4 23.14 2.89 32.36s17.81 14.71 29.05 17c20.5 4.23 42.95-1.71 58.32-15.91s23.08-36.39 19.31-57c-8.34 1.17-15.77-6.19-18.47-14.17s-2.14-16.63-3.19-25a8.58 8.58 0 00-1.24-4c-1.17-1.62-3.24-2.28-5.17-2.81-9.64-2.65-25.86-8.45-35.85-6.23-9 2.06-4.56 21-4.41 28.56z"
        fill="#be6f72"
      />
      <path
        d="M354.35 239.35a39 39 0 01-.53 9.1c-2 9.29-10.46 15.67-18.65 20.51s-17.19 9.42-22.06 17.59c-5.87 9.87-4 23.14 2.89 32.36s17.81 14.71 29.05 17c20.5 4.23 42.95-1.71 58.32-15.91s23.08-36.39 19.31-57c-8.34 1.17-15.77-6.19-18.47-14.17s-2.14-16.63-3.19-25a8.58 8.58 0 00-1.24-4c-1.17-1.62-3.24-2.28-5.17-2.81-9.64-2.65-25.86-8.45-35.85-6.23-9 2.06-4.56 21-4.41 28.56z"
        opacity={0.1}
      />
      <path
        d="M342.7 682.06a199.93 199.93 0 01-29.74 12.62 157.47 157.47 0 01-17.08 4.36 107.5 107.5 0 011.25-23c.78-4.37 1.93-8.7 2.23-13.13a34.44 34.44 0 00-3.95-18.44c11.14-1.52 21.72-4 32.91-3.27l.71.05a12.48 12.48 0 013.9.73 10.53 10.53 0 014.23 3.72 25.61 25.61 0 011.59 2.45c3.16 5.46 4.36 11.76 4.61 18.25a121.38 121.38 0 01-.66 15.66zM401.01 657.44q-5.34 1.25-10.48 2.85a186.58 186.58 0 00-26.89 11.07 39.69 39.69 0 01-.82-8.28 46.24 46.24 0 0135.35-7.27 4.67 4.67 0 012.24.9 3 3 0 01.6.73z"
        fill="#be6f72"
      />
      <path
        d="M418.2 606.96c-.68 6.54-1.68 13.1-4 19.25-2.51 6.6-6.59 13-6.07 20.05.23 3.06 1.27 6.38 1.42 9.41q-4.32.79-8.53 1.78-5.34 1.25-10.48 2.85a186.58 186.58 0 00-26.89 11.07c-1.71.84-3.4 1.69-5.09 2.55-.7-.09-1.39-.2-2.09-.33-5-.91-10.26-3.15-13.09-7.15a11.48 11.48 0 01-1.51-3c-1.63-4.87.07-10.94-3.32-14.8l-.16.14-.12.08a33.59 33.59 0 01-6.08 4.38 40.75 40.75 0 01-33 3.18 36.16 36.16 0 01-6.19-2.78c-4.58-2.61-9-7-8.64-12.24.2-2.92 1.87-5.72 1.42-8.61-.33-2.07-1.69-3.79-2.71-5.62-6.69-12 1.29-27.43-2.91-40.47-.1-.31-.21-.62-.32-.92-.31-.85-.66-1.67-1-2.49-.86-1.91-1.82-3.79-2.58-5.75a33.48 33.48 0 01-1.5-5.07 63.46 63.46 0 01-1-15.22c0-13.43 2.4-27.18 5.82-40.12.61-2.3 1.29-5.55 2.19-9.09a69.6 69.6 0 013.54-10.92c2-4.6 4.72-8.27 8.44-9.14 5.6-1.31 14.16 1.46 19.84 2.14l22.45 2.68 44.89 5.37c7.75.93 15.89 2 22.28 6.36.42.29.83.59 1.24.91a25.34 25.34 0 014.5 4.58c.46.59.9 1.21 1.32 1.84a41.62 41.62 0 013.7 7.06c5.57 13.38 5.7 28.31 5.74 42.8 0 15.12.05 30.23-1.51 45.24z"
        fill="#3f3d56"
      />
      <path
        d="M332.14 653.3c-1.35-5.2-4.2-12.73-4.62-14.78a187.54 187.54 0 01-3.06-20.82c-1.11-12.46-3.11-30 1.29-41.85 4.13 2.2 7.76 8.43 9.67 12.68 6.92 15.41-.87 34.33 5.63 49.92a8.22 8.22 0 01.89 3 7.26 7.26 0 01-1.38 3.68l-2.19 3.64z"
        opacity={0.1}
      />
      <path
        d="M476.16 177.56c7.36-12 17.44-23.8 16.81-37.83-.23-5-1.87-9.89-3.12-14.79a94.36 94.36 0 01-.69-43.29 48.89 48.89 0 0135.36 7.92c3.27 2.26 6.37 5.07 7.81 8.78 1.33 3.42 1.11 7.23.87 10.89-.55 8.41-1.3 17.38-6.48 24-1.61 2.07-3.59 3.82-5.16 5.91-2.29 3-3.63 6.66-4.94 10.23l-17 46.25c-8.58 23.31-17.88 47.69-36.78 63.82-.46.39-14-18.84-15.12-20.77-4.53-7.91-2.55-11.25 2.93-17.87 10.81-13.09 16.68-28.88 25.51-43.25z"
        fill="#be6f72"
      />
      <path
        d="M281.34 571.77a76.81 76.81 0 01-.87 10.31c-.18 1.26-.39 2.51-.64 3.76-3.41 17.8-11.9 34.73-17.84 52.07-7.83 22.89-11.27 42.75-14 65.48-7.87 0-15.75-.17-23.54-.58h-.24c-2.66-.14-5.33-.3-8-.5 2.41-21.2-2-43.44 2.31-64.66 1.74-8.54 4.71-16.83 6.5-25.33a71.71 71.71 0 001.25-7.58c.25-2.42.38-4.93 1.47-7.11a5.24 5.24 0 01.34-.61 17.13 17.13 0 013.52-4 87.83 87.83 0 0143.06-20.53c2.27-.31 4.48-.57 6.68-.72z"
        fill="#fbbebe"
      />
      <path
        d="M281.34 571.77a76.81 76.81 0 01-.87 10.31c-.18 1.26-.39 2.51-.64 3.76-3.41 17.8-11.9 34.73-17.84 52.07-7.83 22.89-11.27 42.75-14 65.48-7.87 0-15.75-.17-23.54-.58h-.24c-2.66-.14-5.33-.3-8-.5 2.41-21.2-2-43.44 2.31-64.66 1.74-8.54 4.71-16.83 6.5-25.33a71.71 71.71 0 001.25-7.58c.25-2.42.38-4.93 1.47-7.11a5.24 5.24 0 01.34-.61 17.13 17.13 0 013.52-4 87.83 87.83 0 0143.06-20.53c2.27-.31 4.48-.57 6.68-.72z"
        opacity={0.1}
      />
      <path
        d="M230.64 617.34a156.7 156.7 0 01-1.37 16.61c-2.67 22.51-3.17 46-5 68.85-2.66-.14-5.33-.3-8-.5-12.16-.83-24.28-2.11-36.22-3.86q1.38-7.72 2.78-15.44c1.14-6.31 2.28-12.68 1.95-19.08-.31-6.05-1.93-11.94-3.22-17.87-2.75-12.7-4.29-26.4-8.82-38.38a50 50 0 00-11.06-18c18.74-7.36 36.75-7.78 56.88-7a7.21 7.21 0 014.08 1 6.9 6.9 0 012.05 3.1 77.57 77.57 0 015.63 22.82 74.85 74.85 0 01.32 7.75z"
        fill="#fbbebe"
      />
      <circle cx={381.59} cy={195.19} r={39} fill="#be6f72" />
      <path
        d="M389.7 286.34c5-8.53 9.38-19.18 19-21.55 5.43-1.35 11.08.49 16.37 2.3a8 8 0 014 2.32 7.86 7.86 0 011.21 4.14 271.06 271.06 0 01-.17 53c-1.27 12.47-3.41 24.88-3.79 37.41-.53 17.37 2.33 34.74 1.39 52.09-.71 13.15-3.59 26.07-6.45 38.92l-12 53.8a9.17 9.17 0 01-1.93 4.55 9 9 0 01-3.54 2 131.76 131.76 0 01-106.63-8.35c-4.33-2.38-8.65-5.13-11.47-9.19-4-5.76-4.37-13.38-3.07-20.28s4.11-13.41 6-20.18c2.92-10.5 3.61-21.46 4.27-32.34.88-14.32 1.76-28.73.23-43-1.05-9.83-3.24-19.51-4.89-29.26a322.73 322.73 0 01-4.22-44.43c-.25-8.89.16-18.76 6.31-25.17 3-3.12 7-5 11.07-6.52 6.83-2.52 14.46-4 21.36-1.7s12.46 9.54 10.83 16.63c-.75 3.29-2.88 6.17-3.4 9.51-.69 4.42 1.65 8.87 5 11.86 18.02 16.28 45.53-11.12 54.52-26.56z"
        fill="#e3e8f4"
      />
      <path
        d="M391.13 246.49a29.49 29.49 0 0117.09-1c3.61.86 7.51 2.38 10.84.77 1.21-.58 2.21-1.53 3.43-2.07 3.3-1.45 7.58.33 10.5-1.78 1.84-1.33 2.44-3.75 3.06-5.95a53.35 53.35 0 0117.63-26.72c-1.05 7.67-1.81 16.4 3.26 22.26 2.31 2.66 5.55 4.33 8.83 5.63 4.71 1.87 9.88 3.11 14.85 2.09s9.62-4.78 10.41-9.79c-.17 7.53-7.34 12.79-9.35 20.06-.76 2.72-.69 5.61-1.22 8.39-1.35 7.1-6.42 12.8-10.85 18.52a131.76 131.76 0 00-26.2 63.22 30.5 30.5 0 01-1.7 8 50.31 50.31 0 01-3.32 5.72c-7.33 12.38-5.07 28-2.58 42.14 3.89 22.15 7.77 43.85 14.07 65.44 1.08 3.69 2.3 7.54 5.05 10.23-.87 8.73-9.68 12.71-17.6 16.48a86.34 86.34 0 00-21.4 14.49c-2.28 2.1-4.53 4.46-5.36 7.45-.78 2.81-.22 5.9-1.22 8.63s-5 4.69-6.76 2.39c-2.2-8.23 1.56-16.84 1.39-25.36-.12-5.75-2-11.34-2.27-17.09-.26-6.51 1.66-12.9 3.7-19.08 5.68-17.21 12.54-34.26 14.51-52.27s-1.71-37.68-14.49-50.53c-15.17-15.32-23.59-36.09-39.85-50.16-2.58-2.23-5.5-5-5.07-8.38a9.33 9.33 0 011.91-4.06c5.58-7.88 13-14.31 19-21.85s10.8-16.22 9.71-25.82zM337.74 262.62c-1 1-1.69 2.38-2.85 3.24a9.4 9.4 0 01-4.49 1.39 145.17 145.17 0 01-17.77 1.59c-5 0-10.19-.44-15 .93-6.71 1.9-12.07 7.2-15.43 13.3s-4.95 13-6.24 19.87a265.73 265.73 0 00-4.55 45.89 120.69 120.69 0 0021.85-22.68c4.8-6.51 9.15-13.71 16-18.06 3.15-2 6.69-3.32 9.86-5.27 6.61-4.07 11.19-10.65 15.59-17 3.24-4.71 12.61-13.91 13.35-19.55.63-5.39-6.82-8.02-10.32-3.65zM372.58 168.49a31.62 31.62 0 013.54 2.47c6.79 4.74 15.88 3.86 24.09 2.78 2.52-.32 5.11-.68 7.27-2 3.47-2.14 5.1-6.54 4.76-10.61s-2.39-7.82-4.89-11A39.57 39.57 0 00380 135.21a17.6 17.6 0 00-8.19.87c-3.23 1.33-5.66 4.07-8.64 5.9-8.79 5.4-22.33 3-28 11.62-4.15 6.36-1.19 15-3.15 22.31-1.46 5.46-5.67 10.43-4.86 16 .45 3 2.33 5.62 3.83 8.3a36.68 36.68 0 014.59 20.23c3.85 2.72 9.22-1.51 10.29-6.09s-.16-9.46.75-14.08c1.61-8.11 8.77-14.06 12-21.5 2.32-5.33 6.1-14.33 13.96-10.28z"
        fill="#3f3d56"
      />
      <path
        d="M278.02 257.26c-.3 1.82-.49 3.83.52 5.37 2 3 6.58 1.92 10.18 2.37 5.61.69 9.75 6 10.84 11.58s-.21 11.26-1.63 16.74q-4.82 18.63-11.48 36.73c-11.94-1.41-24.51-6-30.85-16.19-5.76-9.27-5.17-21.08-8.83-31.36-2.57-7.24-7.18-13.54-11.74-19.72 7.33.92 12.57-7.46 13-14.84s-1.89-14.87-.31-22.08c.37-1.71 29.26 3.68 32.07 5.63 8.12 5.63-.49 17.95-1.77 25.77z"
        fill="#fbbebe"
      />
      <path
        d="M278.02 257.26c-.3 1.82-.49 3.83.52 5.37 2 3 6.58 1.92 10.18 2.37 5.61.69 9.75 6 10.84 11.58s-.21 11.26-1.63 16.74q-4.82 18.63-11.48 36.73c-11.94-1.41-24.51-6-30.85-16.19-5.76-9.27-5.17-21.08-8.83-31.36-2.57-7.24-7.18-13.54-11.74-19.72 7.33.92 12.57-7.46 13-14.84s-1.89-14.87-.31-22.08c.37-1.71 29.26 3.68 32.07 5.63 8.12 5.63-.49 17.95-1.77 25.77z"
        opacity={0.1}
      />
      <circle cx={271.59} cy={206.19} r={39} fill="#fbbebe" />
      <path
        d="M259.58 251.66c1.42-2.22-1-5.32.11-7.71.66-1.44 2.33-2.06 3.62-3a13.49 13.49 0 003.77-4.89 56.84 56.84 0 005.2-37.95c-.92-4.32-1.74-10.06 2.21-12a7.17 7.17 0 013.49-.6c7.12.23 14 5 20.91 3.31a12 12 0 008.8-10.47c.45-6.46-4.39-12-9.15-16.35-8.57-7.88-21.63-9.63-33.27-9.82l-21.65-.36c-6.93-.12-14.7.1-19.52 5.07-6.94 7.15-3.45 18.85-4.45 28.76a30 30 0 01-11 20.15c-4.49 3.58-10.67 7-10.59 12.72 0 2 .86 3.82 1.41 5.71 2.21 7.48.1 15.75-4.14 22.3s-10.44 11.59-16.87 16c-3.44 2.35-7 4.61-9.72 7.8a23 23 0 00-5.07 12.93 17 17 0 002.12 10.43c4.23 6.76 14.38 7.75 21.33 3.83s11.19-11.34 14-18.8c1.68-4.43 3.39-9.5 7.69-11.49 5.44-2.53 11.8 1.47 15.34 6.32s5.72 10.77 10.25 14.71c7.1 6.18 19.18 5.18 25.18-2.08 4.29-5.21 5.24-12.42 5-19.17a27.93 27.93 0 00-5-15.35z"
        fill="#3f3d56"
      />
      <path
        d="M273.58 302.49c-4.45.95-9.1-1.15-12.41-4.29s-5.54-7.19-7.86-11.11a195.6 195.6 0 00-20.15-27.94c-6.56-7.57-15.69-15.26-25.43-12.92a24.13 24.13 0 00-8.88 4.75 64.74 64.74 0 00-24.17 57.78c.76 6.37 2.49 12.6 3.21 19a121.79 121.79 0 01.42 15.87c-.27 16.12-.82 33.17-9.51 46.75-13.47 21-20.68 46.08-30.57 69-5.34 12.39-8.54 25.58-11.68 38.7q-2.79 11.68-5.57 23.35l-12.1 50.9c-1.25 5.25-2.5 10.75-1.18 16 2 7.84 9.37 13.32 17.14 15.55s16 1.85 24.07 1.92c15.44.15 31 2.07 45.49 7.43 4.14 1.53 8.27 3.36 12.68 3.72s8.8-.79 12.93-2.39c11.27-4.36 20.93-12 31.31-18.17a123.73 123.73 0 0120.4-9.87c3.56-1.33 7.38-2.59 9.83-5.5 1.85-2.19 2.68-5.05 3.29-7.85 3.38-15.76 1.11-32.09 0-48.17s-10.72-33.07-2.77-47.09c1.6-2.83 3.51-5.55 4.33-8.69 1.08-4.1.17-8.51 1.08-12.65.67-3.06 2.28-5.81 3.38-8.74 1.92-5.16 2.18-10.78 2.16-16.29a178.75 178.75 0 00-3.8-36c-3.15-15 7.27-29.83 13.24-44 2.14-5.07 5.17-9.86 6.06-15.29.8-4.9-.23-9.89-1-14.8a129.5 129.5 0 01-1.4-23c.19-6.9.92-13.93-.73-20.64s-6.36-13.22-13.13-14.6a5.36 5.36 0 00-4.52.71 5.85 5.85 0 00-1.59 2.8c-2.2 6.74-1.77 14-3 21s-2.67 13.29-9.57 14.77z"
        fill="#f86d70"
      />
      <path
        d="M179.21 345.44c.41-2.77-.88-6.45-3.68-6.35-2.58.1-3.73 3.33-3.72 5.92s.36 5.56-1.47 7.38c-1.62 1.61-4.3 1.56-6.18 2.87a5.08 5.08 0 00-2.13 4.17c0 1.39.63 2.72.67 4.11s-.89 3-2.27 2.91a6.27 6.27 0 00.91 7.6c.72.7 1.66 1.3 1.9 2.28a5.5 5.5 0 01-.16 2.05c-.42 2.75 1.48 5.83 4.25 6.13-1.55 1.11-1.24 3.71.18 5s3.46 1.54 5.37 1.54a32.64 32.64 0 0012.61-2.61 7.52 7.52 0 003.48-2.4 3 3 0 00-.29-3.88c1.94.32 4.27.5 5.54-1 1.77-2.1-.13-5.21-2-7.24a4 4 0 001.86-7.12c-.64-.47-1.51-.88-1.6-1.67s.58-1.3.86-2c.64-1.57-.82-3.17-2.23-4.12-3.34-2.22-8.26-2.18-11.23-4.42s-1.1-6.15-.67-9.15z"
        fill="#be6f72"
      />
      <path
        d="M385.51 193.7a47.34 47.34 0 01-7.29.17 1.59 1.59 0 00-1.75 1.38l-4.65 34.88a14.16 14.16 0 01-3 6.91 15.06 15.06 0 00-3.39 11.51v59.25s-.3 7.9 5.77 7.9a87.75 87.75 0 0021.88 0s4.86-.92 4.86-8.21v-58.34a14.27 14.27 0 00-3-11.6 14.52 14.52 0 01-2.91-6.87l-4.83-35.61a1.59 1.59 0 00-1.69-1.37z"
        fill="#3f3d56"
      />
      <path
        d="M385.51 193.7a47.34 47.34 0 01-7.29.17 1.59 1.59 0 00-1.75 1.38l-4.65 34.88a14.16 14.16 0 01-3 6.91 15.06 15.06 0 00-3.39 11.51v59.25s-.3 7.9 5.77 7.9a87.75 87.75 0 0021.88 0s4.86-.92 4.86-8.21v-58.34a14.27 14.27 0 00-3-11.6 14.52 14.52 0 01-2.91-6.87l-4.83-35.61a1.59 1.59 0 00-1.69-1.37z"
        opacity={0.1}
      />
      <rect
        x={367.12}
        y={249.61}
        width={29.47}
        height={49.83}
        rx={11.05}
        fill={color}
      />
      <path
        d="M484.58 42.98a46.08 46.08 0 01-6.66 3 1.6 1.6 0 00-1.09 1.94l9.14 34a14.12 14.12 0 01-.08 7.52 15 15 0 001.3 11.93l22.82 54.68s2.76 7.4 8.37 5.06a87.13 87.13 0 0020.2-8.46s4.13-2.72 1.33-9.44l-22.47-53.84a14.31 14.31 0 00-7.23-9.56 14.55 14.55 0 01-5.33-5.21l-18.17-31a1.6 1.6 0 00-2.13-.62z"
        fill="#3f3d56"
      />
      <rect
        x={530.04}
        y={187.63}
        width={29.47}
        height={49.83}
        rx={11.05}
        transform="rotate(-22.65 294.992 246.718)"
        fill={color}
      />
      <path
        d="M203.95 252.69c-10.75 4.43-15 18.21-12.48 29.55s10.11 20.79 17.51 29.78l20.74 25.3c5.73 7 12 14.37 20.74 16.81 12.78 3.57 25.56-4.57 36.61-11.93a551.5 551.5 0 01105.16-54.76c3.61-1.4 7.31-2.82 10.28-5.32 6.16-5.18 7.89-14.73 4.46-22s-11.42-12-19.47-12.06-15.88 4.2-20.72 10.64c-2.31 3.07-4 6.58-6.23 9.7-5.64 7.84-14.44 12.69-23.05 17.07a588.65 588.65 0 01-64 28c-4 1.46-8.51 2.85-12.28.92-2.31-1.19-3.87-3.44-5.27-5.64a140.06 140.06 0 01-15.1-32.18c-2.73-8.5-4.94-17.76-11.5-23.8-9.3-8.56-26.14-6.51-33.11 4 0 0-8.17 11.95-3.17 16.95s10.88-21.03 10.88-21.03zM764.79 211.31c1.46 3.89 1.5 8.15 1.29 12.3-.26 5.06-1.53 11-6.23 12.93-3.06 1.23-6.84.3-9.56 2.16-3.3 2.24-3.14 7.06-2.63 11 1.41 10.83 3 22.06 8.9 31.22 3.17 4.91 7.46 9 11.81 12.91 8.67 7.82 18.18 15.46 29.57 18.07a12.37 12.37 0 005.7.24 11.8 11.8 0 004.93-3c6.6-6.06 10-14.71 14.4-22.55 3.11-5.61 6.82-11 8.57-17.18a30 30 0 00-9.18-30.27c-1.95-1.67-4.11-3.07-6-4.8-4.94-4.48-7.82-10.91-9-17.47s-1-13.31-.43-20c-10-.77-19.93.44-29.69 2.39-4.34.87-10.45 1.27-14.38 3.34-4.42 2.35.72 5.36 1.93 8.71z"
        fill="#fbbebe"
      />
      <path
        d="M764.79 211.31c1.46 3.89 1.5 8.15 1.29 12.3-.26 5.06-1.53 11-6.23 12.93-3.06 1.23-6.84.3-9.56 2.16-3.3 2.24-3.14 7.06-2.63 11 1.41 10.83 3 22.06 8.9 31.22 3.17 4.91 7.46 9 11.81 12.91 8.67 7.82 18.18 15.46 29.57 18.07a12.37 12.37 0 005.7.24 11.8 11.8 0 004.93-3c6.6-6.06 10-14.71 14.4-22.55 3.11-5.61 6.82-11 8.57-17.18a30 30 0 00-9.18-30.27c-1.95-1.67-4.11-3.07-6-4.8-4.94-4.48-7.82-10.91-9-17.47s-1-13.31-.43-20c-10-.77-19.93.44-29.69 2.39-4.34.87-10.45 1.27-14.38 3.34-4.42 2.35.72 5.36 1.93 8.71z"
        opacity={0.1}
      />
      <path
        d="M708.99 240.74c-16.24-5.57-24-27.33-41-29.77-2.68-.39-5.43-.24-8.06-.86-9.79-2.32-14-13.64-16.83-23.29-9.54-32.17-22-63.65-39.7-92.17-7.47-12-19.28-21.86-24.67-35-1.24-3-1.87-6.42-4.1-8.79s-7-2.71-8.21.31a7 7 0 00-.22 3.31l1.17 12.45-20.34-1.83a11.88 11.88 0 00-5.63.4 9.55 9.55 0 00-4.43 4.61c-6.88 12.93.45 29.87 12.59 38.05 14.18 9.55 34.43 11 43.85 25.25 5.6 8.48 5.71 19.39 9.4 28.86 1.76 4.53 4.33 8.69 6.38 13.08 3.91 8.37 5.91 17.47 8.94 26.19 4.34 12.47 10.77 24.09 17.18 35.64 4.94 8.92 10 18 17.6 24.82 5 4.48 10.88 7.8 16.76 11 14.46 7.9 31.51 15.5 46.83 9.44.88-13.66-2.55-28.89-7.51-41.7zM758.3 671.22c-1.23 13.05-9.15 24.87-11 37.43-12.2-1.91-24.21-4.37-35.83-7.17-1.43-.34-2.85-.69-4.28-1 6.58-18 .85-38.16 2.59-57.33.17-1.84.41-3.68.73-5.5 15.07-5.14 28.68-12 44.48-10 .31 3.2.63 6.41.94 9.61q.95 9.59 1.88 19.16a77.69 77.69 0 01.49 14.8zM862.52 703.86c-5.92 1.8-12 3.37-18.35 4.66-1.06.22-2.13.43-3.2.63-6.5 1.22-13.08 2.11-19.73 2.72-.68-13.9-10-26.68-11.36-40.95a60.15 60.15 0 01.11-10.65c.12-1.4.26-2.8.39-4.2l2.82-28.77a44.36 44.36 0 016.77-.33c13 .31 24.83 5.94 37.71 10.33a89.9 89.9 0 011 18.36c-.49 15.62-3 31.43 2.8 45.76.33.81.69 1.62 1.04 2.44z"
        fill="#fbbebe"
      />
      <path
        d="M693.72 484.52c1.75 13.64-5.22 26.7-8.24 40.11-2 8.87-2.27 18-2.54 27.1l-1.58 54.51c-.16 5.45-.3 11 1.36 16.23 3.34 10.48 13.63 17.56 24.34 20.08s21.91 1.24 32.82-.2c5.35-.71 10.93-1.54 15.36-4.63 6.09-4.25 8.75-11.82 11.05-18.88l6.49-19.93c7.47 16.82 4.31 35.21 8.79 53.06a10.28 10.28 0 002 4.53c1.89 2.1 5 2.43 7.83 2.63 19.6 1.38 39.47 2.75 58.75-1 5.3-1 10.83-2.62 14.49-6.6 4.26-4.63 5-11.44 4.95-17.73-.27-21.61-8.08-42.46-9.82-64-.75-9.23-.38-18.51-.71-27.77a185.92 185.92 0 00-1.95-20.8 27.94 27.94 0 00-2.56-9.1c-3-5.6-9.23-8.64-15.13-11-45.84-18.62-96.26-18.44-145.7-16.61z"
        fill="#f86d70"
      />
      <circle cx={778.59} cy={173.19} r={43} fill="#fbbebe" />
      <path
        d="M816.07 248.93c-3.19 7-8.21 14-15.68 15.78-6.87 1.65-14.15-1.66-19.21-6.59s-8.37-11.33-11.88-17.46c-2.56-4.48-5.41-9-9.74-11.82-5.92-3.84-13.56-3.74-20.54-2.61s-13.91 3.15-21 2.69c-8.83-.59-17.83-5-26.16-2.06 2.7 12.08 1.73 25.36 1.42 37.74a17 17 0 01-.8 5.64 18.22 18.22 0 01-2.91 4.68l-8 10.31c8.58 6.42 16 14.8 19 25.09 1.69 5.86 1.17 12.08 1.11 18.18-.19 17.91 3.7 35.75 2.47 53.62-1.44 20.93-9.8 40.71-14.11 61.24a160.33 160.33 0 00-2.06 53.6c44.82 15.51 91 23.45 138.38 26.05 8.37.46 17.41.53 24.28-4.28 5.71-4 8.91-10.85 10-17.75s.34-13.92-.42-20.86q-3.09-28.15-6.17-56.3c-1.17-10.68-2.34-21.42-1.58-32.13.57-8 2.21-15.85 3.84-23.68l10-48.06c1.43-6.83 2.87-13.71 5.7-20.08 2.32-5.2 5.53-10 8.09-15.06a66.51 66.51 0 006.24-19.27 12.77 12.77 0 00-.08-5.9c-1.07-3.28-4.34-5.25-7.39-6.86a214.69 214.69 0 00-59.16-20.75c-1.4 5.89-1.13 11.41-3.64 16.9z"
        fill="#e3e8f4"
      />
      <path
        d="M811.92 220.13c5-9.58 14.35-16.3 19.78-25.66a37.93 37.93 0 001.22-35c-1.91-3.9-4.5-7.48-6-11.56-1.67-4.64-1.83-9.75-3.76-14.29-2.65-6.22-8.39-10.7-14.64-13.28s-13-3.51-19.73-4.41l-22.72-3.06c-3.29-.44-6.7-.88-9.9 0s-6.18 3.49-6.44 6.81c-.31 3.93 3.14 7.59 2.34 11.45-.29 1.36-1.09 2.74-.63 4.06a4.12 4.12 0 002 2c5.39 3 11.83 3.27 17.67 5.23s11.7 6.88 11.11 13c-.32 3.29-2.44 6.71-1 9.66 1.38 2.73 5 3.23 7.89 4.08 9.35 2.71 15.91 12.85 14.55 22.5-.42 3-1.5 5.87-1.72 8.88-.73 10.54.93 13.55 9.54 19.68z"
        fill="#3f3d56"
      />
      <path
        d="M870.33 265.71a14.59 14.59 0 01-1.07 5.83c-3.12 6.65-12.67 6.23-19 10-7.88 4.7-9.62 15.19-10.34 24.33-.82 10.35-1.38 20.85.74 31s7.22 20.05 15.74 26c10.37 7.21 24.47 7.46 36.31 3.07s21.73-12.88 30.31-22.16c8.14-8.8 15.43-18.61 19.8-29.78.77-2 1.45-4.12.83-6.12-.93-3-4.2-4.36-6.86-6-6.21-3.75-10.35-10.29-12.5-17.2s-2.51-14.26-2.58-21.51c-.08-7.53-.1-15.76-4.9-21.57s-13.12-7.44-20.7-7.38c-6.2 0-23.36.59-27.59 6-3.47 4.5 2.06 19.05 1.81 25.49z"
        fill="#be6f72"
      />
      <path
        d="M870.33 265.71a14.59 14.59 0 01-1.07 5.83c-3.12 6.65-12.67 6.23-19 10-7.88 4.7-9.62 15.19-10.34 24.33-.82 10.35-1.38 20.85.74 31s7.22 20.05 15.74 26c10.37 7.21 24.47 7.46 36.31 3.07s21.73-12.88 30.31-22.16c8.14-8.8 15.43-18.61 19.8-29.78.77-2 1.45-4.12.83-6.12-.93-3-4.2-4.36-6.86-6-6.21-3.75-10.35-10.29-12.5-17.2s-2.51-14.26-2.58-21.51c-.08-7.53-.1-15.76-4.9-21.57s-13.12-7.44-20.7-7.38c-6.2 0-23.36.59-27.59 6-3.47 4.5 2.06 19.05 1.81 25.49z"
        opacity={0.1}
      />
      <path
        d="M817.01 533.89a8.55 8.55 0 002.08 4.08 8.26 8.26 0 003.37 1.59c32.82 9.63 67.88 5.79 101.86 1.86-4.65-14.16-9.33-28.48-10.62-43.33-1.07-12.25.13-25-4.21-36.49-1.28-3.4-75.88 12.25-83.24 13.52-3.77.65-8.11.43-10.78 3.42-3.22 3.62-3.49 12.24-3.83 16.75-.96 13.03 1.73 26.15 5.37 38.6zM891.74 692.63c-6 2.78-12.19 5.37-18.6 7.69q-5.2 1.89-10.62 3.54c-5.92 1.8-12 3.37-18.35 4.66q-5.43-13.77-10.87-27.55c-2.67-6.76-5.34-13.55-7.57-20.46a128.13 128.13 0 01-3.82-14.39 102.65 102.65 0 012.48-49.77c13.86 2.61 27.41 4.31 41.06 6.29 7.29 1 14.6 2.18 22 3.57q.87 7.23 1.58 14.46 1.08 11.16 1.77 22.32 1.53 24.8.94 49.64z"
        fill="#be6f72"
      />
      <path
        d="M891.74 692.63c-6 2.78-12.19 5.37-18.6 7.69q-5.2 1.89-10.62 3.54c-5.92 1.8-12 3.37-18.35 4.66q-5.43-13.77-10.87-27.55c-2.67-6.76-5.34-13.55-7.57-20.46a128.13 128.13 0 01-3.82-14.39 102.65 102.65 0 012.48-49.77c13.86 2.61 27.41 4.31 41.06 6.29 7.29 1 14.6 2.18 22 3.57q.87 7.23 1.58 14.46 1.08 11.16 1.77 22.32 1.53 24.8.94 49.64z"
        opacity={0.1}
      />
      <path
        d="M968.64 649.3c.08 5.76-1.56 11.64-3.08 17.29-.11.4-.21.79-.31 1.19a16.48 16.48 0 01-8.83-6.62 18.91 18.91 0 01-2.37-5.55q-6.79 4.62-13.7 9.15c-15.07 9.9-31 19.73-48.61 27.87-6 2.78-12.19 5.37-18.6 7.69q-2-7-3.8-14.09a130.5 130.5 0 01-3.08-14.79 75.12 75.12 0 013.32-33.65l.45-1.3a73.55 73.55 0 016.55-13.79c2.49-4 7.42-3.33 12.45-2 2.28.59 4.59 1.3 6.69 1.74 13.07 2.74 26.64-.09 40 .66a47.81 47.81 0 0118.35 4.67c6.43 3.23 11.61 8.17 13.64 15a22.39 22.39 0 01.66 3 26.56 26.56 0 01.27 3.53zM728.06 188.75c-20.65-20-44.12-36.95-68.13-52.8a187.11 187.11 0 01-18-12.83c-6-5-11.23-10.87-17.6-15.37s-14.25-7.59-21.9-6.11-14.45 8.8-13.33 16.46c1 6.74 7.06 11.36 12.66 15.23 10.6 7.33 21.25 14.68 32.78 20.43a102.74 102.74 0 0111.63 6.2c7.18 4.84 12.41 12 17.84 18.73a260.43 260.43 0 0074 63c.34.2 12.17-25.33 11.67-28.64-1.1-7.61-16.18-19.02-21.62-24.3z"
        fill="#be6f72"
      />
      <path
        d="M904.68 511.91c-15.94 1-31.23 6.38-46.82 9.81s-32.53 4.76-47-2l8.8 60.09c.49 3.34 1 6.76.27 10.05-.67 3.14-2.41 6.1-2.26 9.31.23 5.08 5 8.65 9.49 11a84.85 84.85 0 0042.4 9.77c-1.09 4.4-2.45 8.75-3.55 13.15 7.35 7.89 19.37 8.42 29.86 10.92 8 1.89 15.5 5.17 23.34 7.48a99.63 99.63 0 0029.21 4.07c6.67-.07 13.74-1 18.92-5.16 6.37-5.13 8.35-13.85 9.73-21.91.77-4.5 1.48-9.06 1-13.6-.52-5.22-2.54-10.16-4.54-15l-13.7-33.25c-2.49-6-5-12.09-8-17.88-9.8-18.73-26.06-38.16-47.15-36.85z"
        fill="#3f3d56"
      />
      <path
        d="M916.88 304.29a15 15 0 0115.7-9.57c4 .56 7.57 2.75 11 4.89l19.1 11.92a83.26 83.26 0 019.09 6.26c13.17 10.92 18.25 28.87 19.7 45.92s0 34.39 3.39 51.16c-8.06 6.68-17 12.33-25.06 19-4.22 3.49-8.49 7-11.69 11.49-2.54 3.53-4.35 7.57-7 11a26.46 26.46 0 01-17.53 9.74c4.37 2.54 6.82 7.47 8 12.38s1.5 10 2.81 14.91c1.8 6.67 5.53 12.76 6.76 19.56.86 4.69.48 9.5.79 14.26 1.56 24.63 20.89 46.16 19.64 70.8a107.36 107.36 0 01-25.66-13.49c-3.56-2.55-7-5.31-10.37-8.06l-25.47-20.65c-12.39-10-24.9-20.22-34.75-32.78-6.18-7.88-11.22-16.6-17.42-24.46s-13.83-15-23.3-18.3c-1.39 2.09-3.86 3.54-5.25 5.63a4.18 4.18 0 00-.58 1.08 4.73 4.73 0 00.33 2.76 57.46 57.46 0 012 12.39l.63 7.52a25.62 25.62 0 010 6c-.95 6.43-6.91 11.42-13.34 12.42a5.8 5.8 0 01-2.81-.09c-1.79-.6-2.78-2.49-3.32-4.29-2.53-8.54 1.35-17.55 1.66-26.44a63.53 63.53 0 00-.23-6.76l-.6-8.87c-5.81-1.21-9.15-7.45-10.69-13.18-4.16-15.47-8.35-31.48-5.94-47.32.64-4.24 1.76-8.54 1-12.78-1-5.67-5.08-10.27-7.23-15.61-7-17.41 7.87-36.31 6.49-55-.58-7.85-5.56-14.67-8.56-21.95a62 62 0 00-6-12.11c-3.06-4.37-7.19-7.87-11.2-11.39a427.74 427.74 0 01-35.18-34.66 26 26 0 01-15.15-6.94c-2.64-2.5-4.81-5.8-4.88-9.43s2.61-7.44 6.24-7.63c2.12-.11 4.1.94 6.17 1.4 6.48 1.42 13-3.35 15.89-9.34s2.89-12.88 2.84-19.52a18.72 18.72 0 0117.33 6.07c4.47 4.86 7.38 10.92 10.9 16.5a25.57 25.57 0 005.44 6.57c4.81 3.82 11.74 4.54 15.94 9 2.13 2.28 3.31 5.3 5.26 7.74 5.48 6.87 15.51 7.71 23 12.23s12.7 12.78 21 15.46c3 1 6.27 1.13 9.24 2.24 6.86 2.55 11.05 9.84 12 17.09s-.67 14.58-2.31 21.72l-3.85 16.71c-.85 3.7-1.5 8.15 1.23 10.79a11.12 11.12 0 004.43 2.23c7 2.28 14.8 4.52 21.38 1.29 3.11-1.54 5.55-4.14 7.78-6.8 9.76-11.5 16.25-26.56 21.21-40.71z"
        fill={color}
      />
      <path
        d="M995.81 644.34c-1.38 9.15-6.42 18.15-14.67 22.34a21 21 0 01-15.89 1.1 16.48 16.48 0 01-8.83-6.62 18.91 18.91 0 01-2.37-5.55c0-.1-.05-.21-.07-.31a44 44 0 01-.93-10.77 140.5 140.5 0 011-16.79 90.91 90.91 0 012.76-13.88c1.86-6.49 4.54-12.74 7-19 1.28-3.3 2.51-6.61 3.52-10 .61-2 1.13-4.06 1.55-6.14l.15-.75c.08-.42.15-.84.22-1.26 1-5.7 1.29-11.6 3.86-16.75 6-12.09 17.68-9 19.46 2.15a19.64 19.64 0 01.23 2.61c.27 14.11-5.33 27.9-2.77 42.06a98 98 0 002.72 10.22c.9 3.09 1.71 6.22 2.33 9.39a53.37 53.37 0 01.73 17.95z"
        fill="#be6f72"
      />
      <path
        d="M1001.31 487.44c.27 5.78 0 11.63 1.16 17.3 2.71 13.4 13 25.26 11.86 38.88-.28 3.32-1.51 6.89-4.41 8.53s-7.7 1.51-8.65 4.81c-.27.92-.13 1.92-.43 2.83-.63 1.94-3 2.77-5 2.72s-4-.71-6.07-.54c-7.25.61-9.91 10.31-16.37 13.64-4.35 2.24-10 1-13.59-2.31s-5.16-8.47-4.88-13.36c.21-3.69 1.38-7.25 2-10.89 1.13-6.49.54-13.14-.05-19.7-.87-9.61-1.77-19.34-4.93-28.45-1.49-4.3-3.47-8.41-4.76-12.77-1.84-6.17-2.26-12.66-2.45-19.09-.39-13.53.54-28 8.62-38.88 6.07-8.16 14.77-14.79 21.64-22.34 4.3-4.73 5.54-6.21 10.29-2.2 3.91 3.29 8 7.83 8.44 12.29 1.2 11.43 0 22.67 2.14 34.31s4.88 23.27 5.44 35.22z"
        fill={color}
      />
      <circle cx={897.59} cy={216.19} r={51} fill="#be6f72" />
      <path
        d="M944.29 313.75c1.12-1.57 2.45-3.26 4.35-3.59a7.59 7.59 0 014.14.87l13.43 5.61a43.84 43.84 0 006.24-19.76c.28-4.29-.06-8.64.76-12.86 1.22-6.26 4.93-11.87 5.79-18.19.68-5.1-.55-10.23-1.29-15.32-2.28-15.72.17-31.76-1.14-47.59s-7.66-32.79-21.78-40.06c-4-2-8.31-3.2-12.47-4.78-9.27-3.53-17.58-9.18-26.74-13s-19.92-5.57-28.8-1.18-14.05 16.74-8.28 24.8c1.9 2.65 4.68 4.53 7.34 6.44 5.41 3.87 10.93 8.65 12.18 15.19 2.24 11.77-10 21-13.45 32.51a27.64 27.64 0 00-.33 13.79c1.49 6.82 5.13 13.26 5 20.24-.1 7.65-4.68 14.58-5.54 22.19-.31 2.79-.12 5.62-.47 8.4a43.35 43.35 0 01-3.23 10.63c-8 20-16.11 40.21-28 58.19a77.07 77.07 0 0036.63-8.56 60.54 60.54 0 01-9.17 21.54 69.4 69.4 0 0028.66-10 93.11 93.11 0 01-9.1 21.61c.34-.58 6.63-2 7.79-2.66a13.57 13.57 0 005.5-5.87c3.4-6.08 5.52-13.41 8.67-19.73a287.33 287.33 0 0123.31-38.86zM557.51 7.7a47.34 47.34 0 01-7.29.17 1.59 1.59 0 00-1.75 1.38l-4.65 34.88a14.16 14.16 0 01-3 6.91 15.06 15.06 0 00-3.39 11.51v59.25s-.3 7.9 5.77 7.9a87.75 87.75 0 0021.88 0s4.86-.92 4.86-8.21V63.15a14.27 14.27 0 00-3-11.6 14.52 14.52 0 01-2.91-6.87L559.2 9.07a1.59 1.59 0 00-1.69-1.37z"
        fill="#3f3d56"
      />
      <rect
        x={539.12}
        y={63.61}
        width={29.47}
        height={49.83}
        rx={11.05}
        fill={color}
      />
      <path
        d="M626.51 58.7a47.34 47.34 0 01-7.29.17 1.59 1.59 0 00-1.75 1.38l-4.65 34.88a14.16 14.16 0 01-3 6.91 15.06 15.06 0 00-3.39 11.51v59.25s-.3 7.9 5.77 7.9a87.75 87.75 0 0021.88 0s4.86-.92 4.86-8.21v-58.34a14.27 14.27 0 00-3-11.6 14.52 14.52 0 01-2.91-6.87l-4.83-35.61a1.59 1.59 0 00-1.69-1.37z"
        fill="#3f3d56"
      />
      <rect
        x={608.12}
        y={114.61}
        width={29.47}
        height={49.83}
        rx={11.05}
        fill={color}
      />
      <g opacity={0.2}>
        <path
          d="M548.95 656.23a19 19 0 01-.37 3.21q-10.44-1.66-21-3v-.86a16.88 16.88 0 012.5-8.48c2.06-3.26 5.19-5.3 8.64-5.19s6.44 2.34 8.29 5.71a16.87 16.87 0 011.94 8.61z"
          fill="#3f3d56"
        />
        <ellipse
          cx={571.21}
          cy={732.33}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 506.755 702.29)"
          fill="#3f3d56"
        />
        <ellipse
          cx={571.75}
          cy={715.21}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 507.298 685.166)"
          fill="#3f3d56"
        />
        <ellipse
          cx={572.29}
          cy={698.09}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 507.835 668.049)"
          fill="#3f3d56"
        />
        <ellipse
          cx={572.83}
          cy={680.97}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 508.378 650.925)"
          fill="#3f3d56"
        />
        <path
          d="M504.05 468.99a49.66 49.66 0 01-3.8-6l28.26-3.73-30.42-.73a51.38 51.38 0 01.31-40.64l40.12 22.45-36.75-28.84a51.28 51.28 0 1182.84 60 50.8 50.8 0 015.55 9.53l-37.09 17.8L592.4 487a51.34 51.34 0 01-9.82 47.91 51.28 51.28 0 11-80.56-2.54 51.28 51.28 0 012-63.38z"
          fill={color}
        />
        <path
          d="M594.58 503.57a51 51 0 01-12 31.34 51.28 51.28 0 11-80.56-2.54c-6.57-8.93 92.74-34.55 92.56-28.8z"
          opacity={0.1}
        />
      </g>
    </svg>
  );
};

SvgHavingFun.propTypes = {
  color: PropTypes.string
};
SvgHavingFun.defaultProps = {
  color: "primary"
};
export default SvgHavingFun;
