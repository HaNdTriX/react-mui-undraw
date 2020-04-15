import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgExams = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 982.89 803.03"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M958.99 465.51v1.82q-.16 15.78-1.87 31.48a1.11 1.11 0 010 .19c-.09.87-.19 1.73-.29 2.6-.17 1.47-.35 2.93-.55 4.4a316.48 316.48 0 01-11.53 52.79 284.68 284.68 0 01-30.1 66.28q-5.92 9.5-12.61 18.39c-2.38 3.14-4.81 6.21-7.32 9.23q-2.64 3.17-5.38 6.24l-1.14 1.26a296.69 296.69 0 01-31 29.46c-18 14.92-37.38 27.9-57.07 39.94a90.64 90.64 0 01-3.38 2 1.65 1.65 0 01-.25.15c-26.76 16.18-54.51 30.78-83.1 42.47-31.3 12.83-63.62 22.16-96.78 26.24-46.22 5.68-93 1.06-138.94-6.88a902.93 902.93 0 01-113-27l-6.1-1.91q-4.74-1.51-9.47-3.08-28.57-9.45-56.5-21a742.68 742.68 0 01-133.33-71.59q-8-5.38-15.77-11-10.86-7.82-21.46-16.1l-4.36-3.38a448.26 448.26 0 01-51.82-47.59c-21.52-23.42-39.91-49.84-52-80q-2.86-7.11-5.24-14.49l-.15-.49c-.8-2.5-1.54-5-2.22-7.6q-1.5-5.58-2.63-11.3c-.16-.73-.3-1.46-.43-2.2a189.21 189.21 0 01-3.15-38.93 180 180 0 014-34 153.38 153.38 0 0111.33-33.57 121 121 0 0117.33-26.73 102.23 102.23 0 0116.33-15.26c10.85-8.08 22.88-13.71 35.35-18.16 5.86-2.1 11.8-3.94 17.77-5.65 4.23-1.22 8.48-2.38 12.71-3.52l12.48-3.37c8-2.18 16-4.42 23.88-6.84 21.48-6.56 42.53-14.5 62-26.34 3.08-1.87 6.22-3.92 9.36-6.12 4-2.78 7.94-5.8 11.84-9.06 3.94-3.3 7.8-6.83 11.48-10.57.57-.58 1.13-1.16 1.69-1.75 3-3.16 5.91-6.47 8.61-9.91 1.32-1.68 2.6-3.39 3.82-5.13 1.69-2.41 3.29-4.86 4.77-7.38 7.42-12.6 12-26.5 11.46-41.15a63.3 63.3 0 00-.65-7.21c-1.3-8.83-2.55-17.45-3.47-25.88-3.86-34.87-2.23-66.49 23.94-96.2C328.62 5.18 379.69-2.35 426.18.6c134.41 8.5 256.77 85.24 364.3 176.6q13.95 11.84 27.56 24 3.43 3.06 6.87 6.16c17 15.31 33.74 31.19 49.33 48.2 1.26 1.38 2.52 2.76 3.76 4.15.76.86 1.53 1.71 2.28 2.58q7.29 8.25 14.15 16.9a320.16 320.16 0 0132.32 49 278.17 278.17 0 0128.38 86.67 308.82 308.82 0 013.43 33.17c.17 3.27.28 6.55.34 9.82v3.14c.1 1.52.1 3 .09 4.52z"
        fill={color}
        opacity={0.1}
      />
      <path fill="#3f3d56" d="M393.98 448.74l-16 284.79 16 .21 13-289-13 4z" />
      <path fill={color} d="M136.98 593.03h198v43h-198z" />
      <path
        d="M347.98 631.02v27H143.45q-10.86-7.82-21.46-16.1v-10.9z"
        fill="#3f3d56"
      />
      <path
        d="M388.82 569.57c-.56 2.59-1.29 5.15-2.06 7.7-2.27 7.37-5 14.64-5.53 22.3-.71 10.12 2 21.89-5 29.24-1.8 1.9-4.15 3.32-5.76 5.35a9.37 9.37 0 00-.68 1c-1.44 2.38-1.61 5.28-1.63 8a140 140 0 001.13 17.35c2.37 19.8 7.05 39.64.9 58.33a89.92 89.92 0 01-3.89 9.51c-3 6.6-6.27 13.11-7.25 20.26-.72 5.3-.5 10.76-.54 16.15q-4.74-1.51-9.47-3.08-28.57-9.45-56.5-21c.05-.27.1-.55.14-.82 1.43-8.9-.53-18-2.91-26.68-5-18.39-12.08-36.6-16.27-55.12a139.48 139.48 0 01-3.31-22c-.12-1.66-.19-3.33-.2-5-.05-2.18 0-4.36.09-6.56.21-4.39.4-9.6-3.11-12.27-1.93-1.45-4.48-1.7-6.73-2.58-4.34-1.69-7.31-5.61-10.75-8.75a14.09 14.09 0 00-12.59-3.7c-22.48 5.15-39 24.22-59.92 33.86-.81.38-1.62.74-2.44 1.08a35.55 35.55 0 00-7.67 3.92 8.74 8.74 0 00-3.44 4.85c-.53 2.12-.07 4.34.19 6.52a33.29 33.29 0 01-.45 10.63 32.45 32.45 0 01-1.07 4c-.8 2.37-1.87 4.69-2.89 7q-8-5.38-15.77-11-10.86-7.82-21.46-16.1l-4.29-3.45a448.26 448.26 0 01-51.82-47.59c2.13-6 5.21-11.58 6.69-17.73.84-3.53 1.15-7.2 2.31-10.63a38.22 38.22 0 015.52-9.9 134 134 0 0130.74-30.76c12.39-8.88 26.7-16 37.85-26.08a59.73 59.73 0 0011.57-13.71c.19-.31.37-.64.53-1a20.75 20.75 0 001.79-5.72c.8-4.48.68-9.4 1.08-13.7a146.13 146.13 0 0041.13 1.24c15.95-1.79 31.55-6.22 47.5-7.94 1.2-.14 2.41-.25 3.62-.35 5.11-.41 10.23-.5 15.36-.44 4.29 0 8.58.19 12.87.33l47.23 1.6c5.23.18 10.57.38 15.44 2.29 5.78 2.27 10.41 6.79 14.12 11.76.47.64.94 1.28 1.38 1.94a61 61 0 017.28 14.39c.19.52.37 1 .54 1.57.45 1.39.84 2.79 1.19 4.21.27 1.11.51 2.22.73 3.34 1.1 5.54 1.75 11.2 3.49 16.55.12.39.25.78.39 1.16 2.09 5.86 5.56 11.11 8.18 16.74a62.17 62.17 0 014.3 12.73 62.91 62.91 0 01.12 26.76z"
        fill="#35323e"
      />
      <path
        d="M245.26 211.7c-4.22-3.36-10.34-.9-15.28 1.27a98.09 98.09 0 01-12.76 4.61 5.39 5.39 0 01-2.8.29c-2-.48-2.84-2.85-4.33-4.29-2.59-2.49-6.83-1.9-10.17-.55s-6.64 3.3-10.22 3c-3.82-.3-7.14-3.12-11-3.21-6.8-.16-12.51 8.22-18.94 6-3.92-1.35-7-6.45-10.86-5-3 1.14-3.27 5.29-5.08 8-2.13 3.16-6.28 4.05-9.83 5.45-11.19 4.42-18.6 16.89-17.14 28.83.81 6.59 4 12.63 6.11 18.92 6.26 18.29 4.11 38.92 12 56.56 1-.94 1.56-1.29 2.53-2.22a23.14 23.14 0 00-1.35 16.6c.83 2.77 2.18 5.35 3.2 8.06a72.24 72.24 0 012.56 9.3l8.7 38.38c3.4 15 6.81 30 7.4 45.36a132.38 132.38 0 01-2.28 29.8c15.76-2.61 30.18-9.6 46.15-9.51 5.86 0 11.67 1 17.48 1.8a359.84 359.84 0 0051.13 3.47 20.3 20.3 0 007.84-1.1c2.2-.94 4-2.61 6.08-3.82 4.07-2.4 9-3 13.69-3 21.39-.39 42 7.44 63.25 10.2 8.39-17.61 8.89-38.71 2.45-57.12-1.91-5.47-4.48-10.8-5.24-16.55a83.72 83.72 0 01-.24-10.63 77.11 77.11 0 00-4.83-26.58c-1.24-3.33-2.73-6.72-2.6-10.27s1.88-6.86 3.6-10c3.49-6.4 7-12.86 11.93-18.26 5.05-5.58 11.37-9.83 17.62-14l15.43-10.36c-2.11-13.33-4.83-27.37-10.48-39.63s-14.1-23.53-25.53-30.7a84.36 84.36 0 00-12.06-6c-5.84-2.46-11.92-4.63-18.25-5-7.2-.41-14.29 1.52-21.4 2.72-22.38 3.77-48.72 3.31-66.48-10.82z"
        fill={color}
      />
      <path
        d="M413.98 443.02l-7.34 9.27-13.84 17.47-16 20.19-4.47 5.64h-8.67l-214.69.25-134.45.15h-6c-.8-2.5-1.54-5-2.22-7.6q-1.5-5.58-2.63-11.3c-.16-.73-.3-1.46-.43-2.2L52.02 443l18.34-.1 56.1-.32 31.33-.18H167.1l20.88-.11 159.14-.91 8.14-.05h3.53l9.35-.05 34.79-.2 6.68-2.54.49.52z"
        fill="#3f3d56"
      />
      <path
        d="M410.98 438.02l-.83 1-5.46 6.43-11.24 13.27-23.57 27.79-208.8-5.33-157.45-4c-.16-.73-.3-1.46-.43-2.2a189.21 189.21 0 01-3.15-38.93l17.46-8.94 4-2.06 31.13-16 27.32-14 71.26 9.26 15.78 2.05 7.14.92 10.45 1.36.88.12 163.87 21.25 18.11 2.35 10.63 1.38 32.76 4.26z"
        fill="#504f60"
      />
      <path
        d="M376.98 486.02l-.17 3.93-1 22.19-5.38 122-1.14 26.37-3 67.84-1.69 38.32-6.1-1.91q-4.74-1.51-9.47-3.08l14.63-266 .31-5.58 6.44-2zM14.98 485.73L14.53 496l-.66 15q-2.86-7.11-5.24-14.49l-.15-.49c-.8-2.5-1.54-5-2.22-7.6z"
        fill="#3f3d56"
      />
      <ellipse cx={276.48} cy={272.53} rx={46} ry={62} fill="#a1616a" />
      <ellipse cx={276.48} cy={272.53} rx={46} ry={62} opacity={0.1} />
      <circle cx={282.98} cy={235.03} r={64} fill="#a1616a" />
      <path
        d="M284.25 136.39a81.94 81.94 0 00-11.61 1.77c-10.12 2.46-18.87 7.92-27.39 13.28-3.82 2.41-7.75 4.92-10.12 8.46-4.26 6.35-2.61 14.43-5 21.48-1.24 3.62-3.52 6.87-5.45 10.24-5.31 9.24-8.09 19.39-10.82 29.44-.56 2.08-.72 4.9 1.55 5.7a6.25 6.25 0 003.88-.44c7.17-2.37 16.28-3.05 21.6 1.76s4.87 13.34 11.2 17c7.25 4.23 18.57-.88 25.15 4.11 2.82 2.14 3.84 5.57 6.15 8.15 5.38 6 15.73 5.71 24.34 4.5 4.94-.7 11-1.17 14 2.3 1.44 1.64 1.85 3.89 3.52 5.37 3 2.68 8.49 1.32 11.42-1.43s4.33-6.47 6.77-9.56c4.75-6 13.1-9.27 18-15.2 4.1-5 5.34-11.26 6.46-17.3l4.17-22.39c1.69-9.08 3.23-19-1.88-27-1.82-2.88-4.43-5.36-6-8.34-1.05-2-1.64-4.11-2.86-6a24.91 24.91 0 00-5.13-5.18l-9.87-8.17a83 83 0 00-10.79-8c-14.09-8.21-35.19-6.05-51.29-4.55z"
        fill="#464353"
      />
      <path
        d="M73.45 301.25c-2.37 2.52-4.56 5.24-7.1 7.6a86 86 0 01-7 5.6q-5.88 4.4-11.5 9.11a64.41 64.41 0 00-10.54 10.53c-5.34 7.17-7.87 16.09-12.87 23.5-4.42 6.57-10.65 11.76-15.14 18.28a28.28 28.28 0 00-4.32 9.07 42.14 42.14 0 00-.89 9.59c-.09 5.28-.17 10.62.91 15.79s3.45 10.25 7.51 13.64c3.77 3.15 8.64 4.6 13.41 5.8 2.46.61 5.12 1.18 7.46.21a12.3 12.3 0 004.34-3.66l12.17-14c8.14-9.4 16.6-19 27.77-24.5 3.5-1.71 7.19-3 10.7-4.66 14.88-7.17 25.4-21.85 29.48-37.85 1-3.91 1.64-7.9 2.29-11.89l1.76-10.94a3.49 3.49 0 000-1.67 3.6 3.6 0 00-1.28-1.52 212.12 212.12 0 01-23.74-22.4c-1.74-1.92-3.37-4.55-5.38-6.16-2.52-2-2.33-1.85-5.36 0a64.27 64.27 0 00-12.68 10.53z"
        fill="#a1616a"
      />
      <path
        d="M156.7 374.05a1.88 1.88 0 10-3.38 1.64l-1 .49 29.82 61.12 5.39-2.63-29.82-61.16z"
        fill="#3f3d56"
      />
      <path
        d="M73.45 301.25c-2.37 2.52-4.56 5.24-7.1 7.6a86 86 0 01-7 5.6q-5.88 4.4-11.5 9.11a64.41 64.41 0 00-10.54 10.53c-5.34 7.17-7.87 16.09-12.87 23.5-4.42 6.57-10.65 11.76-15.14 18.28a28.28 28.28 0 00-4.32 9.07 42.14 42.14 0 00-.89 9.59c-.09 5.28-.17 10.62.91 15.79s3.45 10.25 7.51 13.64c3.77 3.15 8.64 4.6 13.41 5.8 2.46.61 5.12 1.18 7.46.21a12.3 12.3 0 004.34-3.66l12.17-14c8.14-9.4 16.6-19 27.77-24.5 3.5-1.71 7.19-3 10.7-4.66 14.88-7.17 25.4-21.85 29.48-37.85 1-3.91 1.64-7.9 2.29-11.89l1.76-10.94a3.49 3.49 0 000-1.67 3.6 3.6 0 00-1.28-1.52 212.12 212.12 0 01-23.74-22.4c-1.74-1.92-3.37-4.55-5.38-6.16-2.52-2-2.33-1.85-5.36 0a64.27 64.27 0 00-12.68 10.53z"
        opacity={0.04}
      />
      <path
        d="M418.19 413.89c-.1 6.38-.35 12.95-3 18.77-1.14 2.52-2.91 5-5.56 5.83a12.94 12.94 0 01-4.89.18 176.67 176.67 0 00-58.49 4.64c5.1-10.2 2.17-22.43 3.58-33.75.39-3.09 1.1-6.13 1.37-9.23 1-11-3.71-21.68-5.87-32.54a72.8 72.8 0 010-28.48 19 19 0 012.45-6.85 16.08 16.08 0 015.62-4.89c8.1-4.61 17.65-5.14 26.75-4.53 6.13.41 18.42-.17 23.53 3.6 5.59 4.13 7.36 18 8.87 24.41a206.48 206.48 0 014.6 29.87c.98 10.96 1.19 21.97 1.04 32.97z"
        fill="#a1616a"
      />
      <path fill="#fff" d="M59.98 436.03l36 24 162-6-107-18h-91z" />
      <path
        d="M107.45 245.34c-5.91 5.21-10.92 11.35-16.52 16.9-7.68 7.62-16.41 14.1-25.1 20.55a18.68 18.68 0 0113 13.1c.38 1.47.57 3 1 4.44 1 3.41 3.2 6.35 5.56 9 10.14 11.43 24.33 19.89 30.31 34a3.14 3.14 0 001.2 1.7 2.63 2.63 0 001.55.18c5.41-.57 9.55-4.93 13-9.17 7.2-9 13.45-18.94 17-29.92s4.12-23.12.25-34c-1.93-5.42-4.91-10.4-7.87-15.33q-3.89-6.47-7.76-12.92c-1.35-2.27-3.07-6.88-5.72-8-5.72-2.46-16.23 5.8-19.9 9.47zM401.99 309.97l8.51 20a61.83 61.83 0 00-55.9 7.75c-4.85 3.47-9.3 7.83-11.49 13.37a5.84 5.84 0 01-5.79-2.27 11.61 11.61 0 01-2.14-6.12c-.79-7.68 2.12-15.21 5-22.39 1.34-3.36 2.72-6.79 5.1-9.52s5.54-4.53 8.7-6.23a193.74 193.74 0 0131.55-13.94c4.6-1.49 9.42-1.46 12 2.84 2.99 5.13 2.12 11.05 4.46 16.51z"
        fill={color}
      />
      <path
        d="M60.19 369.98c2.13 1.7 4 3.71 6.19 5.33a44.22 44.22 0 007.36 4.13l9.86 4.74a55.25 55.25 0 009.55 3.88c4.22 1.13 8.65 1.24 12.89 2.29 5.35 1.32 10.24 4.07 15.51 5.66s11.44 1.85 15.84-1.46c2.75-2.07 4.83-5.49 8.24-6 2.2-.29 4.32.77 6.28 1.8l25.66 13.49c3.46 1.82 7.12 3.84 8.93 7.31s.59 8.74-3.22 9.64a35.18 35.18 0 01-4 .23c-1.32.16-2.76.94-2.94 2.27a4.56 4.56 0 00.63 2.35c1.15 2.64 1.49 5.8.15 8.36s-4.63 4.15-7.26 3c.45 3.87-3.76 6.58-7.51 7.61-9.46 2.59-19.49 1-29.16-.64-3.8-.64-7.66-1.3-11.12-3-1.66-.81-3.2-1.85-4.88-2.6-4.61-2.05-9.85-1.78-14.89-1.69-23.31.41-46.42-3.91-69.34-8.21-4.25-.8-8.62-1.65-12.25-4-7-4.56-9.6-13.92-8.45-22.2s5.35-15.78 9.48-23.06l5.35-9.43a12.14 12.14 0 012.88-3.8c7.87-6.01 23.48-1.42 30.22 4z"
        fill="#a1616a"
      />
      <path
        d="M60.19 369.98c2.13 1.7 4 3.71 6.19 5.33a44.22 44.22 0 007.36 4.13l9.86 4.74a55.25 55.25 0 009.55 3.88c4.22 1.13 8.65 1.24 12.89 2.29 5.35 1.32 10.24 4.07 15.51 5.66s11.44 1.85 15.84-1.46c2.75-2.07 4.83-5.49 8.24-6 2.2-.29 4.32.77 6.28 1.8l25.66 13.49c3.46 1.82 7.12 3.84 8.93 7.31s.59 8.74-3.22 9.64a35.18 35.18 0 01-4 .23c-1.32.16-2.76.94-2.94 2.27a4.56 4.56 0 00.63 2.35c1.15 2.64 1.49 5.8.15 8.36s-4.63 4.15-7.26 3c.45 3.87-3.76 6.58-7.51 7.61-9.46 2.59-19.49 1-29.16-.64-3.8-.64-7.66-1.3-11.12-3-1.66-.81-3.2-1.85-4.88-2.6-4.61-2.05-9.85-1.78-14.89-1.69-23.31.41-46.42-3.91-69.34-8.21-4.25-.8-8.62-1.65-12.25-4-7-4.56-9.6-13.92-8.45-22.2s5.35-15.78 9.48-23.06l5.35-9.43a12.14 12.14 0 012.88-3.8c7.87-6.01 23.48-1.42 30.22 4z"
        opacity={0.04}
      />
      <path
        d="M365.45 387.26c-5.21 2.46-11.19 2.7-16.63 4.59s-10.06 5.29-15.05 8.06c-13 7.26-28 10-42.73 12.61-8.93 1.6-18 3.2-27 2.82-12.18-.52-23.88-4.58-35.68-7.64s-24.39-5.12-36.08-1.68a40.61 40.61 0 00-26.5 25.43c-2.45 7.19-2.79 14.94-2.32 22.52 2.46 1.81 5.9-.7 7.24-3.45s2.07-6.12 4.67-7.72c4.51 1.53 5.61 7.54 9.33 10.51 2.32 1.86 5.42 2.35 8.37 2.77l15.2 2.16c3.66.52 7.91.87 10.56-1.71 1.29-1.25 2-3 3.18-4.34 2.42-2.68 6.46-3.14 10.06-2.78 11.24 1.12 21.78 8.41 32.94 6.68 3.84-.59 7.41-2.23 11.07-3.52 21.69-7.66 45.79-3 68.36-7.39 8.61-1.67 16.9-4.63 25.09-7.75 4.45-1.69 8.95-3.46 12.75-6.32a26.84 26.84 0 0010.36-23.81 27.22 27.22 0 00-9.61-17.64c-1.76-1.5-4.07-4.37-6.18-5.31-4.03-1.77-7.98 1.3-11.4 2.91z"
        fill="#a1616a"
      />
      <g opacity={0.1}>
        <path d="M336.23 259.51c-1.67-1.48-2.08-3.73-3.52-5.37-3-3.47-9.06-3-14-2.3-8.61 1.21-19 1.49-24.34-4.5-2.31-2.58-3.33-6-6.15-8.15-6.58-5-17.9.12-25.15-4.11-6.33-3.69-5.92-12.25-11.2-17s-14.43-4.13-21.6-1.76a6.25 6.25 0 01-3.88.44c-2.27-.8-2.11-3.62-1.55-5.7 2.73-10.05 5.51-20.2 10.82-29.44 1.93-3.37 4.21-6.62 5.45-10.24 2.17-6.34 1.06-13.51 3.91-19.51-3.06 2-6 4.18-7.89 7-4.26 6.35-2.61 14.43-5 21.48-1.24 3.62-3.52 6.87-5.45 10.24-5.31 9.24-8.09 19.39-10.82 29.44-.56 2.08-.72 4.9 1.55 5.7a6.25 6.25 0 003.88-.44c7.17-2.37 16.28-3.05 21.6 1.76s4.87 13.34 11.2 17c7.25 4.23 18.57-.88 25.15 4.11 2.82 2.14 3.84 5.57 6.15 8.15 5.38 6 15.73 5.71 24.34 4.5 4.94-.7 11-1.17 14 2.3 1.44 1.64 1.85 3.89 3.52 5.37 3 2.68 8.49 1.32 11.42-1.43a30.32 30.32 0 004.78-6.54c-2.6.79-5.37.67-7.22-1zM354.45 248.51a28.41 28.41 0 00-1.79 2.59c3.84-2.74 7.91-5.3 10.78-8.79a21.22 21.22 0 002-2.88c-3.99 2.86-8.15 5.49-10.99 9.08z" />
      </g>
      <path
        fill="#3f3d56"
        d="M556.48 446.53l3 287 14-2-3-285h-14zM640.48 498.53l3 287 14-2-3-285h-14zM902.01 643.51l-.06-5.51v-3.28l-.53-50.48-.83-78.92-.14-6.81h-14l.07 6.56.44 42.27.19 18.3.16 14.82.26 25.62.16 15.11v1.6l.21 19.86.18 17.51 1.14-1.26q2.75-3.07 5.38-6.24z"
      />
      <path
        fill={color}
        d="M624.98 545.03l-8 11.96 8 54.49 68 18.61h110l66 3.99 31.44-21.52-5.44-36.96-24-30.57h-246z"
      />
      <path
        d="M616.98 556.99l-4 33.22s-21 65.13 148 61.14 140-17.28 140-17.28l-1-38.54s5.89 18.24-80 15.77-166-10.45-166-10.45-30 5.31-37-43.86z"
        fill="#3f3d56"
      />
      <path
        d="M757.78 259.23c-9.64 4.39-16.94 12.9-21.83 22.31s-7.64 19.74-10.35 30c-2.86 10.82-5.73 21.67-7.21 32.76-2.64 19.72-.66 40.45 8.4 58.16s25.8 32 45.4 35.41c7.57 1.33 15.35 1.06 23 .27a187 187 0 0040.61-8.95c13.75-4.65 28.06-11.81 34.18-25 3.55-7.65 3.85-16.37 3.68-24.79a263.72 263.72 0 00-10.31-67.79c-1.85-6.4-4-12.85-7.92-18.24s-9.28-9.34-14.75-13c-23.39-15.75-54.13-34.22-82.9-21.14z"
        fill="#fbbebe"
      />
      <path
        d="M757.78 259.23c-9.64 4.39-16.94 12.9-21.83 22.31s-7.64 19.74-10.35 30c-2.86 10.82-5.73 21.67-7.21 32.76-2.64 19.72-.66 40.45 8.4 58.16s25.8 32 45.4 35.41c7.57 1.33 15.35 1.06 23 .27a187 187 0 0040.61-8.95c13.75-4.65 28.06-11.81 34.18-25 3.55-7.65 3.85-16.37 3.68-24.79a263.72 263.72 0 00-10.31-67.79c-1.85-6.4-4-12.85-7.92-18.24s-9.28-9.34-14.75-13c-23.39-15.75-54.13-34.22-82.9-21.14z"
        opacity={0.05}
      />
      <path
        d="M746.95 385.1a45.39 45.39 0 0010 10c9.52 6.58 21.74 7.47 33.3 7.83 9.28.28 19.92-.25 25.74-7.49 2.62-3.26 3.8-7.42 4.86-11.47a508.79 508.79 0 0013.9-75.77l26.48.09c11.46 49.07 10.52 100.08 9.52 150.47l-1.45 73.48-17.06-1.81c-40.51-4.29-81.08-8.58-121.81-9.32a696.78 696.78 0 00-71.52 2.36l37.15-110.46c4.82-14.36 9.69-28.91 10.82-44 1.63-21.89-4.51-45 4-65.25.68-1.63 1.54-3.32 3.09-4.17s3.51-.64 5.29-.41c3.36.45 13.63 0 16.07 2.15 3.6 3.12 1.22 3.59-.05 8.62-2.27 9-4.42 17.33-4.39 26.71.03 17.03 5.31 35.01 16.06 48.44z"
        fill={color}
      />
      <path
        d="M902.01 643.51q6.69-8.88 12.61-18.39c-2-4.28-4.2-8.46-5.95-12.83-2.68-6.7-4.22-13.8-5.74-20.85q-.78-3.6-1.55-7.2c-5.6-26.11-10.86-52.59-11.95-79.06q-.15-3.3-.19-6.6v-1-7.22c.12-6 .5-12.05 1.19-18.07.13-1.18.28-2.36.44-3.54 0-.26.06-.51.1-.77l68-2.48 5.72-.21c3.93-.14 8.09-.36 11.33-2.59 5.45-3.74 6.09-11.41 6-18a267.16 267.16 0 00-5.64-49.55c-2.58-12.26-6.26-24.79-14.52-34.21-6.78-7.74-16.6-13.37-20.13-23-1.31-3.58-1.64-7.51-3.34-10.93s-4.51-5.93-7.16-8.57a119.33 119.33 0 01-22.9-31.72c-4.05-8.16-8.44-17.16-13.73-22.8-.26-.29-.52-.56-.79-.82-4.5-4.45-9.65-6.4-15.75-3.37a20.17 20.17 0 00-3.12 1.94 38 38 0 00-5.93 5.64 135 135 0 00-16.13 23 127.83 127.83 0 00-8.24 18 124.1 124.1 0 00-4.45 15c-.86 3.77-1.54 7.58-2.08 11.4-2 14.36-2 29-1.72 43.54.3 13.36.89 26.75 2.1 40.06q.45 4.83 1 9.65 1.1 9.53 2.72 19c.43 2.41.87 4.82 1.36 7.22.12.64.25 1.28.38 1.91l.06.27a162.47 162.47 0 013.07 16.91q.12 1.07.18 2.13a82.33 82.33 0 01-.08 9.81c-.23 3.86-.59 7.71-.77 11.57 0 .68 0 1.35-.07 2-.05 1.95 0 3.9 0 5.85a92.72 92.72 0 001.66 13.89 89.85 89.85 0 008.65 24.44c.38.72.77 1.43 1.16 2.13 5.07 9.06 11.47 17.37 16.16 26.64a115 115 0 019 26.21q1 4.49 1.9 9c.93 4.8 1.76 9.64 2.61 14.48.08.48.17 1 .26 1.44 1.13 6.42 2.32 12.81 3.85 19.08.89 3.65 1.89 7.25 3.06 10.79z"
        fill="#464353"
      />
      <path
        d="M888.65 564.69c0 .9-.06 1.8-.1 2.71a128.18 128.18 0 01-1.21 13.11 85.29 85.29 0 01-4.33 17.39 58.64 58.64 0 01-5.16 10.61 48.92 48.92 0 01-6.42 8.27c-6 6.24-14.64 8.23-23 10.86a56.62 56.62 0 00-11.09 4.53c-.63.35-1.25.73-1.85 1.13l-10.46 6.93c-3.26 2.15-6.59 4.38-8.83 7.57a16.3 16.3 0 00-1 1.69 38.32 38.32 0 00-3.08 9.24c-5.44 22.66-10.89 45.34-14.62 68.34-.25 1.52-.49 3.05-.75 4.58l-.09.48a2.49 2.49 0 00-.16-.33c-26.76 16.18-54.51 30.78-83.1 42.47l-6.21-52a62.9 62.9 0 01-.64-12.78c.59-6.73 3.33-13.11 4.07-19.82a33.77 33.77 0 00-3.57-19.07c-1.18-2.28-2.66-4.52-2.93-7.07s1.2-4.88 3.76-5.14c2-2.22 2.16-5.25 1.57-8.25a24 24 0 00-1.4-4.57c-1.7-4.18-3.85-8.73-2.39-13a4.86 4.86 0 00.5-2.5.41.41 0 000-.16c-.34-1.12-1.67-1.61-2.36-2.56-1.3-1.77 0-4.18.8-6.22a23.73 23.73 0 001.34-6.81c.11-1.29.19-2.59.33-3.87a39 39 0 01.93-5.14 40.57 40.57 0 0116.43-23.52c3.89-2.62 8.22-4.53 12.19-7a111.66 111.66 0 0011.62-9q13.21-11 27.47-20.74a347 347 0 0131.72-19.26q3.5-1.89 7-3.68 3.81-2 7.67-3.79c8.24-3.93 17.59-2.46 26.7.16 3.82 1.09 7.59 2.39 11.23 3.57a52 52 0 0110.2 4.58c8.07 4.74 14.74 11.74 17.51 20.58a1.09 1.09 0 010 .17c1.76 5.54 1.87 11.48 1.71 17.31z"
        fill="#f86d70"
      />
      <path
        d="M888.65 564.69c0 .9-.06 1.8-.1 2.71a128.18 128.18 0 01-1.21 13.11 85.29 85.29 0 01-4.33 17.39 58.64 58.64 0 01-5.16 10.61 48.92 48.92 0 01-6.42 8.27c-6 6.24-14.64 8.23-23 10.86a56.62 56.62 0 00-11.09 4.53c-.63.35-1.25.73-1.85 1.13l-10.46 6.93c-3.26 2.15-6.59 4.38-8.83 7.57a16.3 16.3 0 00-1 1.69 38.32 38.32 0 00-3.08 9.24c-5.44 22.66-10.89 45.34-14.62 68.34-.25 1.52-.49 3.05-.75 4.58l-.09.48a2.49 2.49 0 00-.16-.33c-26.76 16.18-54.51 30.78-83.1 42.47l-6.21-52a62.9 62.9 0 01-.64-12.78c.59-6.73 3.33-13.11 4.07-19.82a33.77 33.77 0 00-3.57-19.07c-1.18-2.28-2.66-4.52-2.93-7.07s1.2-4.88 3.76-5.14c2-2.22 2.16-5.25 1.57-8.25a24 24 0 00-1.4-4.57c-1.7-4.18-3.85-8.73-2.39-13a4.86 4.86 0 00.5-2.5.41.41 0 000-.16c-.34-1.12-1.67-1.61-2.36-2.56-1.3-1.77 0-4.18.8-6.22a23.73 23.73 0 001.34-6.81c.11-1.29.19-2.59.33-3.87a39 39 0 01.93-5.14 40.57 40.57 0 0116.43-23.52c3.89-2.62 8.22-4.53 12.19-7a111.66 111.66 0 0011.62-9q13.21-11 27.47-20.74a347 347 0 0131.72-19.26q3.5-1.89 7-3.68 3.81-2 7.67-3.79c8.24-3.93 17.59-2.46 26.7.16 3.82 1.09 7.59 2.39 11.23 3.57a52 52 0 0110.2 4.58c8.07 4.74 14.74 11.74 17.51 20.58a1.09 1.09 0 010 .17c1.76 5.54 1.87 11.48 1.71 17.31z"
        opacity={0.1}
      />
      <path
        d="M793.7 399.05a1.88 1.88 0 10-3.38 1.64l-1 .49 29.82 61.12 5.39-2.63-29.82-61.16z"
        fill="#3f3d56"
      />
      <circle cx={830.98} cy={271.03} r={64} fill="#fbbebe" />
      <path
        d="M915.45 231.41a85 85 0 00-2.26-15.09c-3.76-16.17-10.63-32.09-22.46-43.7a87.56 87.56 0 00-2.61-8.39 1.59 1.59 0 00-.07-.2 93.9 93.9 0 00-15.1-26.77c-3.75-4.66-8.61-9.26-14.59-9.44-1.68-.06-3.46.23-5-.54a9 9 0 01-2.79-2.86 26.19 26.19 0 00-25.36-9.49l-.62.13c-.35.07-.7.15-1 .24s-.84.24-1.26.37q.69 1.14 1.35 2.31 1.78 3.17 3.3 6.48 1.26 2.76 2.33 5.61c-10.24 1.17-18.58 8.44-26.2 15.36l-17.94 16.28a.76.76 0 00-.09.09l-.52.5c-.13.13-.26.26-.38.4a.86.86 0 00-.13.14c-.15.16-.29.33-.43.5a7.54 7.54 0 00-.67 1 3.67 3.67 0 00-.26.47 1 1 0 00-.07.15 3.69 3.69 0 00-.17.42.14.14 0 000 .06 2.33 2.33 0 00-.07.25 3 3 0 00.17 2.12l11.83.13h1.39c.06 1.58.11 3.17.17 4.75a67.39 67.39 0 00-5.4 4.5 58.64 58.64 0 00-5.27 5.56c-10.67 12.89-16.24 29.54-16.8 46.3v6.12c0 1 .09 2 .17 3a7.49 7.49 0 001 3.71 3.44 3.44 0 00.28.36 6.9 6.9 0 002.12 1.56l.86.42c.43.21.84.41 1.24.64 3.77 2.13 6 6.24 9.43 8.88.2.15.4.3.6.43l.45.3.28.18.38.22a8.14 8.14 0 00.77.41l.48.24h.08c.4.18.8.35 1.21.5l.57.2.17.06c.16.05.33.11.5.15q.51.15 1 .27l1 .22c.39.07.79.14 1.19.19l.59.08.6.06q1.43.13 2.88.15a72 72 0 009.07-.63l25.52-3c5.79-.67 11.7-1.34 17.41-.16 4.84 1 9.3 3.3 14 4.93 1.06.37 2.12.71 3.19 1 .39.11.79.23 1.19.33l.55.14 1.28.31c.46.11.92.22 1.38.31.65.14 1.29.26 1.94.38.44.09.89.16 1.34.24h.09l1.28.2h.31l.95.13c.46.07.92.13 1.39.18q1.53.19 3.06.33c1.65.16 3.31.28 5 .38l1.66.1 1.66.08 5 .22H894.51a25.8 25.8 0 006.22-.32c.36-.07.71-.15 1.06-.25s.64-.2 1-.32c3.75-1.44 6.49-4.75 8.39-8.29a33.964 33.964 0 002.04-4.6c.35-1 .65-1.95.91-2.95.08-.27.15-.54.21-.82s.2-.83.28-1.25c.25-1.15.44-2.31.58-3.48 0-.37.09-.75.13-1.12.09-1 .16-1.93.2-2.91v-2.24c-.01-.81-.08-1.88-.08-2.91zm-25.64-59.7c-.81-.76-1.64-1.49-2.48-2.18a10.33 10.33 0 012.47 2.18zM708.15 267.51c-7.53-.93-15-4.23-22.43-2.61-4.65 1-8.65 3.89-12.37 6.86a150.41 150.41 0 00-34.77 39.75 21 21 0 00-3.21 7.52c-.48 3.12.37 6.29 1.38 9.28 6.84 20.21 21.47 37.09 28.13 57.36 7 21.32 4.57 44.62-.59 66.46a277.75 277.75 0 01-30.84 76.7 43.74 43.74 0 01-7.1 9.72c-3.64 3.5-8.53 6-10.69 10.58-1 2-1.29 4.28-2 6.42-2 6-6.84 11.14-7.31 17.47-.35 4.83 1.94 9.4 3.33 14a38.58 38.58 0 01-.71 24.1c-5.07 13.9-18.33 26.54-14.48 40.83 8.59-2.47 18.11-5.68 22.16-13.65 1.43-2.82 2.14-6.18 4.55-8.24 4.81-4.09 13-.39 18.11-4.15 3.86-2.86 4-8.72 2.28-13.22s-4.68-8.46-6-13.09c-2.3-8.35 1.38-17.18.7-25.81-.32-4-1.55-7.83-1.64-11.81-.17-7.73 4.11-15 9.8-20.25s12.72-8.73 19.64-12.16l26.16-13c9.49-4.7 19.89-10.43 23-20.55 1.18-3.79 1.19-7.83 1.25-11.79.89-60.51 16.05-119.8 31.12-178.41 2.34-9.08 4.72-18.2 8.2-26.92s10.29-15.72 13.76-23.82c-20.13-2.36-38.52 15.05-59.43 12.43z"
        fill="#464353"
      />
      <path
        d="M852.36 647.12c2.31 14 3.72 28.3 4.82 42.53-18 14.92-37.38 27.9-57.07 39.94a90.64 90.64 0 01-3.38 2l-.09.48a2.49 2.49 0 00-.16-.33 15.05 15.05 0 00-7.52-7.42q-11.07-23.25-22.12-46.5c-4-8.37-8-16.82-10-25.85 0-.19-.09-.39-.12-.58-1.52-7-1.87-14.27-2.88-21.36a61.7 61.7 0 00-2.73-11.94c-1.2-3.45-2.85-6.8-4.31-10.17-1.8-4.16-3.31-8.37-3.38-12.86 0-1.43.09-3-.61-4.2a10.89 10.89 0 00-2.73-2.64 10.41 10.41 0 01-3.36-9.51c-6 .31-9.38 6.76-11.79 12.23a66.68 66.68 0 01-8.56 15 28.45 28.45 0 01-9.48 7.89c-.33.16-.66.32-1 .46-8.35 3.68-18.1 2.38-27.15.72-7.91-1.45-16.09-3.25-22.45-8.17l-.68-.54a29.37 29.37 0 01-5-5.34c-5.33-7.28-7.69-16.87-9-26-.12-.86-.24-1.72-.35-2.58a96.17 96.17 0 01-.75-19.48c.12-1.6.29-3.2.5-4.79.14-1 .29-2.08.46-3.12a.28.28 0 010-.09c.26-1.65.54-3.31.82-5 1-5.67 2-11.49 5-16.37a31 31 0 017.36-7.88c1.08-.85 2.19-1.66 3.31-2.44 1.82-1.26 3.69-2.46 5.59-3.59a96.62 96.62 0 0115-7.3c1.24-.48 2.5-.93 3.76-1.36a29.51 29.51 0 0115.28-1.21 80.41 80.41 0 0013.68.8c11.73-.23 23.51-2.47 35.22-3.92 16.26-2 33.73-2.24 47.91 6 .68.39 1.34.8 2 1.23 7 4.58 12.64 11 17.19 18.17 1 1.51 1.87 3.06 2.73 4.63a117.93 117.93 0 015.37 11.1 13.8 13.8 0 011.49 6 7.79 7.79 0 01-.16 1.18c-.27 1.42-.81 2.8-1 4.24-.63 5.45 4 10 5.73 15.19 1.12 3.38 1 7 1.63 10.56.91 5 3.36 9.5 5.56 14a175.06 175.06 0 018.9 22.37c1.74 5.33 3.23 10.74 4.54 16.2q.64 2.63 1.21 5.27c1.09 4.84 1.98 9.58 2.77 14.35z"
        fill="#f86d70"
      />
      <path
        fill="#3f3d56"
        d="M958.98 499.03v7l-1.29-.02-1.44-.02-16.08-.2-39.62-.52-11.12-.14-2.88-.04-16.69-.21-23.52-.31-49.9-.65-86.59-1.12-31.25-.4-12.54-.16-11.54-.15-7.19-.1-6.81-.09-50.49-.65-14-.18-3.05-.04-1.98-5.11-14.39-37.11-2.63-6.78 2-8 9 6 5.54.69 91.21 11.34 17.12 2.13 36.3 4.52 35.56 4.42 13.94 1.73 82.49 10.26 23.05 2.87 19.08 2.37 67.84 8.44 1.87.23z"
      />
      <path fill="#504f60" d="M555.98 444.03l18 47 385 8v-51l-403-4z" />
      <path
        fill="#3f3d56"
        d="M575.98 496.03l3 287 14-2-3-285h-14zM957.69 506h-1.44a316.48 316.48 0 01-11.53 52.79l-4.55-53-.19-2.26 16.82-1.94.56-.06z"
      />
      <path fill="#fff" d="M902.98 472.03l-146.5 3-45.5-15 122-7 70 19z" />
      <path
        d="M719.21 413.71a9.82 9.82 0 00-4 2.85 10.56 10.56 0 00-1.49 4.54l-2.46 14.67a6.49 6.49 0 00.19 4.07c.64 1.23 2.5 1.87 3.43.85-.12 2.87.13 5.93 1.8 8.27s5.17 3.57 7.53 1.94a4.88 4.88 0 007.35 1.14c-1.42.48-1.52 2.65-.51 3.75a6.53 6.53 0 004.08 1.63 99.79 99.79 0 0051.9-6.53c1.55-.64-2.53-19.75-2.94-21.71-1-4.61-1.5-10.24-5.39-13.34-9.3-7.42-25.82-8.88-37.15-8a64 64 0 00-22.34 5.87z"
        fill="#fbbebe"
      />
      <path
        d="M868.27 415.93c-36.17.69-73.09 1.28-107.61-9.55a73 73 0 01-.66 38.87l169.12 14c7.17.59 36.9 3.95 43.89 2.26s-58.65-23.31-56-30c7.29-18.43 31.71-29.23 14.12-29.92-22.2-.88-40.49 13.92-62.86 14.34z"
        opacity={0.1}
      />
      <path
        d="M869.27 417.93c-36.17.69-73.09 1.28-107.61-9.55a73 73 0 01-.66 38.87l169.12 14c7.17.59 36.9 4 43.89 2.26s5.35-10.31 8-17c7.29-18.43-32.29-42.23-49.88-42.92-22.2-.88-40.49 13.92-62.86 14.34z"
        fill="#464353"
      />
      <path
        d="M811.76 420.71a9.79 9.79 0 014 2.85 10.71 10.71 0 011.5 4.54l2.46 14.67a6.56 6.56 0 01-.19 4.07c-.64 1.23-2.51 1.87-3.43.85.11 2.87-.13 5.93-1.8 8.27s-5.17 3.57-7.54 1.94a4.88 4.88 0 01-7.35 1.14c1.42.48 1.53 2.65.52 3.75a6.56 6.56 0 01-4.09 1.63 99.75 99.75 0 01-51.89-6.53c-1.55-.64 2.52-19.75 2.94-21.71 1-4.61 1.5-10.24 5.39-13.34 9.29-7.42 25.82-8.88 37.15-8a64 64 0 0122.33 5.87z"
        fill="#fbbebe"
      />
      <path
        d="M572.76 388.86c-3.32 4.28-6.65 8.65-8.79 13.64-4.09 9.52-3.49 20.3-2.81 30.64.19 3 .43 6.06 2 8.55a14.44 14.44 0 005.22 4.45c8.66 4.92 18.8 6.39 28.7 7.49q22.74 2.52 45.64 3.07c37.82.92 76.22-2.17 113.06 6.4-4.56-6.93-4.55-16.1-2-24s7.46-14.78 12.27-21.55c-16.86-5.34-34.94 3-52.6 2.17-18.13-.85-34.91-11.33-53.06-11.32-3.9 0-7.87.49-11.66-.45s-7.46-3.8-7.81-7.69c4.84 1.09 9.43-3.05 11.43-7.59s2.36-9.67 4.3-14.24c4.83-11.37 17.88-16.64 26-26 1.28-1.48 2.49-3.23 2.45-5.19a8.12 8.12 0 00-2-4.47c-6.75-9-16.92-14-25.37-21-2.94-2.44-8.87-11.64-12.17-12.49-6.12-1.57-11.31 7.27-15.29 11.58q-30.14 32.75-57.51 68z"
        fill="#464353"
      />
      <path
        d="M773.84 386.32a33.1 33.1 0 016.69 6.63 11.42 11.42 0 012.09 8.94 13.36 13.36 0 018.33-13.83z"
        opacity={0.07}
      />
      <g opacity={0.1}>
        <path d="M829.3 124.08a86.87 86.87 0 00-4.06-9.15 24.52 24.52 0 00-2.92.75 84.57 84.57 0 014.63 8.83c.77-.2 1.55-.34 2.35-.43zM887.32 163.51c.27.22.53.47.79.7a1.46 1.46 0 00-.07-.19q-.34-.25-.72-.51zM794.36 167.91c.52-.41 1-.84 1.56-1.24l-.16-4.75-10.68-.11c-1.73 1.59-3.57 3.87-2.55 6zM911.12 247.87c-1.9 3.54-4.64 6.86-8.39 8.29-2.89 1.1-6.07 1-9.16.86-10.54-.43-21.26-.9-31.22-4.39-4.66-1.64-9.12-3.93-14-4.94-5.71-1.18-11.62-.51-17.41.17l-25.52 3c-7.53.88-15.92 1.54-21.93-3.08-3.44-2.64-5.66-6.75-9.43-8.87-1.59-.9-3.48-1.48-4.51-3a7.49 7.49 0 01-1-3.71c-.08-1.05-.13-2.1-.17-3.15a84.63 84.63 0 00.17 9.15 7.49 7.49 0 001 3.71c1 1.51 2.92 2.09 4.51 3 3.77 2.12 6 6.23 9.43 8.87 6 4.62 14.4 4 21.93 3.08l25.52-3c5.79-.68 11.7-1.35 17.41-.17 4.84 1 9.3 3.3 14 4.94 10 3.49 20.68 4 31.22 4.39 3.09.13 6.27.24 9.16-.86 3.75-1.43 6.49-4.75 8.39-8.29 3.68-6.85 4.71-14.62 4.32-22.45a39.06 39.06 0 01-4.32 16.45z" />
      </g>
      <path d="M829.01 130.51l14 13s-12-5-14-13z" opacity={0.1} />
    </svg>
  );
};

SvgExams.propTypes = {
  color: PropTypes.string
};
SvgExams.defaultProps = {
  color: "primary"
};
export default SvgExams;
