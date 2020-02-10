import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgTexting = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1162 716.89"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M0 716.88h1123s98.45-127.44-17.43-258.44c-43-48.58-46.27-108.65-33.39-165C1107 141.12 967.65 6.32 816.46 45.88c-2.88.76-5.79 1.53-8.72 2.33-227.89 62.15-414.47-.31-486.28-31.23A206.52 206.52 0 00230.66.2c-80.59 3.6-202.72 34.64-89.28 205.62C301.31 446.86 0 716.88 0 716.88z"
        fill={color}
        opacity={0.1}
      />
      <ellipse cx={270.5} cy={666.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={270.5} cy={630.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={270.5} cy={594.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={270.5} cy={558.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={270.5} cy={522.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={270.5} cy={486.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={270.5} cy={450.44} rx={22.5} ry={29.45} fill="#3f3d56" />
      <ellipse cx={457.5} cy={675.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <ellipse cx={457.5} cy={655.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <ellipse cx={457.5} cy={635.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <ellipse cx={457.5} cy={615.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <ellipse cx={457.5} cy={595.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <ellipse cx={457.5} cy={575.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <ellipse cx={457.5} cy={555.44} rx={12.5} ry={16.36} fill="#3f3d56" />
      <path
        d="M354.73 204.08a109.12 109.12 0 008.38-12.33L304 182.04l63.94.47A108 108 0 00370 97.12l-85.79 44.5 79.1-58.18a107.78 107.78 0 10-178 120.62A107.91 107.91 0 00173 223.74l76.74 39.87-81.81-27.47a107.81 107.81 0 0017.38 101.21 107.77 107.77 0 10169.42 0 107.81 107.81 0 000-133.27z"
        fill={color}
      />
      <path
        d="M162.24 270.72a107.29 107.29 0 0023.07 66.63 107.77 107.77 0 10169.42 0c14.44-18.34-192.49-78.73-192.49-66.63z"
        opacity={0.1}
      />
      <path
        d="M401.28 374.05a70.68 70.68 0 01-5.58-8.22l39.41-6.48-42.63.32a72 72 0 01-1.37-56.93l57.19 29.7-52.74-38.8a71.85 71.85 0 11118.67 80.41 71.62 71.62 0 018.19 13.1l-51.16 26.58 54.55-18.29a71.85 71.85 0 01-11.58 67.48 71.85 71.85 0 11-113 0 71.89 71.89 0 010-88.85z"
        fill={color}
      />
      <path
        d="M529.61 418.44a71.57 71.57 0 01-15.38 44.43 71.85 71.85 0 11-113 0c-9.58-12.2 128.38-52.43 128.38-44.43z"
        opacity={0.1}
      />
      <path
        d="M0 716.88s120.52-117 162.24-77.64 217.87 49.83 234.1 47.51 111.25-6.95 164.56-1.16 542.35-16.22 562.05 31.29z"
        fill="#3f3d56"
      />
      <path
        d="M781.08 144.44h-54.2a9.23 9.23 0 002-5.8 9.33 9.33 0 00-.68-3.47h25a9.27 9.27 0 000-18.54H603.77a9.3 9.3 0 00-9.27 9.27 9.1 9.1 0 00.69 3.47h-25a9.28 9.28 0 000 18.55h54.2a9.2 9.2 0 00-2 5.79 9.3 9.3 0 009.27 9.27h149.42a9.27 9.27 0 000-18.54zM1025.6 277.67h-54.2a9.23 9.23 0 002.05-5.8 9.13 9.13 0 00-.68-3.47h25a9.27 9.27 0 000-18.54H848.3a9.3 9.3 0 00-9.27 9.27 9.09 9.09 0 00.68 3.47h-25a9.28 9.28 0 000 18.55h54.2a9.2 9.2 0 00-2 5.79 9.3 9.3 0 009.27 9.27h149.42a9.27 9.27 0 100-18.54zM536.92 221.28h-31.75a5.39 5.39 0 001.2-3.39 5.53 5.53 0 00-.4-2h14.66a5.43 5.43 0 000-10.86H433a5.45 5.45 0 00-5.43 5.43 5.34 5.34 0 00.41 2h-14.62a5.43 5.43 0 100 10.86h31.75a5.39 5.39 0 00-1.2 3.39 5.45 5.45 0 005.43 5.44h87.58a5.44 5.44 0 000-10.87z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M689.47 663.99a23.78 23.78 0 01-1.74 6 43 43 0 0010.61 2.45 1 1 0 00.68-.1c.27-.21.23-.63.19-1a13.29 13.29 0 011.1-5.76q3-8.35 5.92-16.72c-3.46-1.57-10.62-.62-13.54 2-2.69 2.42-2.57 9.75-3.22 13.13zM739.09 673.32a1.92 1.92 0 00-.18.74c0 .89 1.18 1.2 2.07 1.28a56.67 56.67 0 0112.62 2.63c.5-1.48-.2-3.07-.22-4.62 0-2.16 1.27-4.08 2.06-6.09 1.41-3.55 1.3-7.49 1.17-11.31-3.42.23-11.58-1.35-13.49 2.19-1.06 2-1 5-1.48 7.2a55.7 55.7 0 01-2.55 7.98z"
        fill="#a1616a"
      />
      <path
        d="M718.75 519.63l-9 .53a2.58 2.58 0 00-1.64.48 2.46 2.46 0 00-.61 1.57c-1.2 9 .91 18.19-.21 27.19-.45 3.54-1.39 7-2.12 10.48-1.23 5.81-1.9 11.72-2.57 17.62a40.19 40.19 0 00-.34 8.83c.26 2.48 1 4.9 1.09 7.39a25.7 25.7 0 01-1.52 8.64 94 94 0 01-5.6 13.87c-1.93 3.87-4.14 7.64-5.31 11.8-1.86 6.62-1 13.83-3.21 20.34-.55 1.6-1.29 3.25-1 4.91.39 2.15 2.48 3.68 4.63 4.09a16.44 16.44 0 006.49-.49c3.51-.75 7.24-1.62 9.71-4.22a17.78 17.78 0 003.24-5.82c1.63-4 3.25-8.06 4.74-12.14a46.12 46.12 0 012.3-5.65c.82-1.56 1.84-3 2.71-4.56a46.34 46.34 0 003.48-8.4c6.42-19.7 8.38-41 18.08-59.3.46-.87.52-2 1-2.82a29.14 29.14 0 011.34 9.21 193.59 193.59 0 01-.51 21.27c-.4 5.16-1 10.31-1.12 15.49 0 2.36 0 4.73.05 7.1v1.93c.08 3.37.16 6.74.49 10.09 1.41 13.84-2.95 27.3-1.38 41.12a2.39 2.39 0 00.46 1.36c.67.72 1.86.33 2.77-.06a29.76 29.76 0 019.46-2.36 6.38 6.38 0 002.87-.64c1.44-.86 1.85-2.73 2.11-4.39q3.27-20.19 6.53-40.38a96.54 96.54 0 001.24-9.73c.25-4.24-.06-8.5.35-12.72.57-6 3-11.7 4.82-17.4.94-3 1.89-5.95 2.75-8.95s1.65-6.11 2.35-9.19c1.2-5.36 2.14-10.89 1.31-16.32s-3.69-10.79-8.51-13.41c-3.53-1.93-7.67-2.22-11.66-2.66-11.39-1.25-22.74-4-34.15-3-1.98.18-3.87-.82-5.91-.7zM693.51 703.18a12.83 12.83 0 001.42-3l3.69-10a86.92 86.92 0 003-9.13 42.77 42.77 0 001.22-11.32 42.15 42.15 0 01-11.11-1.56 17.17 17.17 0 00-4.22-.89 7.34 7.34 0 00-7.12 7.77 11.19 11.19 0 01.16 1.82 5.69 5.69 0 01-.52 1.75l-3.94 9.6a21.07 21.07 0 00-2 7.4c-.28 8.98 13.75 15.73 19.42 7.56zM731.51 702.31a17.17 17.17 0 000 4.53c.78 4.23 4.87 7.44 9.16 7.74a13.13 13.13 0 0011.11-5.47 11.8 11.8 0 001.85-3.55 18.43 18.43 0 00.62-3.77l1.59-16.83c.23-2.36 1.19-5.77 0-8-1-1.89-3.43-2.51-5.3-3.22a20.85 20.85 0 00-9.82-1.47c-5.83.49-5.77 6.44-6.65 11.19q-1.72 9.38-2.56 18.85zM733.24 360.5c-2.69 3.77-6.61 6.54-9.25 10.35a19.45 19.45 0 00-3.41 11.85c.09 2.16.54 4.37 0 6.46a11.49 11.49 0 01-2.58 4.28 35.94 35.94 0 01-16.43 10.92c-.77.24-1.73.76-1.54 1.54a1.59 1.59 0 00.71.81l13 9.31c7.63 5.47 15.3 11 23.74 15.09a84.34 84.34 0 0048.5 7.63 25.29 25.29 0 01-3.85-11c-.5-4.7.34-9.44.25-14.17a36.62 36.62 0 00-3-14c-1.12-2.57-2.54-5-3.4-7.67a39.68 39.68 0 01-1.44-10l-.67-11.19a22.58 22.58 0 00-.93-6.13 15.19 15.19 0 00-2.38-4.22c-4.76-6.22-12-8.88-19.58-9.53-3.31-.28-7.36-.55-10.41.89-3.65 1.79-5.13 5.72-7.33 8.78z"
        fill="#3f3d56"
      />
      <path
        d="M732 400.86a7.43 7.43 0 01-4.69 4.36 22.12 22.12 0 01-6.54 1l-4.77.22a2.08 2.08 0 00-1.47.44 1.72 1.72 0 00-.42 1.07c-.3 2.54 1.18 4.91 2.66 7 4.74 6.64 10.42 12.95 17.83 16.34a29.41 29.41 0 0033.9-6.84 3 3 0 00.94-1.67 2.81 2.81 0 00-1.44-2.34c-1.58-1.17-3.44-1.93-5-3.09a15 15 0 01-5.43-8.21 24.7 24.7 0 01-.45-9.95c-5.93-1.69-12.39-.35-18.33-2-1.39-.38-4-1.84-5.46-1s-.87 3.25-1.33 4.67z"
        fill="#a1616a"
      />
      <path
        d="M732 400.86a7.43 7.43 0 01-4.69 4.36 22.12 22.12 0 01-6.54 1l-4.77.22a2.08 2.08 0 00-1.47.44 1.72 1.72 0 00-.42 1.07c-.3 2.54 1.18 4.91 2.66 7 4.74 6.64 10.42 12.95 17.83 16.34a29.41 29.41 0 0033.9-6.84 3 3 0 00.94-1.67 2.81 2.81 0 00-1.44-2.34c-1.58-1.17-3.44-1.93-5-3.09a15 15 0 01-5.43-8.21 24.7 24.7 0 01-.45-9.95c-5.93-1.69-12.39-.35-18.33-2-1.39-.38-4-1.84-5.46-1s-.87 3.25-1.33 4.67z"
        opacity={0.1}
      />
      <circle cx={747.07} cy={390.79} r={19.97} fill="#a1616a" />
      <path
        d="M761.6 411.14a65.52 65.52 0 01-11.46 3.72 22.06 22.06 0 01-11.9-.65 41.43 41.43 0 01-7.37-4.2c-4.14-2.65-8.66-5-13.56-5.48-2.29-.24-4.79 0-6.6 1.42a9 9 0 00-2.91 6c-.66 4.76.47 9.56 1.48 14.26 3.83 17.85 6 36.52 1.71 54.28-2.25 9.43.18 19.24.51 28.93a34.62 34.62 0 001.31 9.85c1.05 3.15 3.17 6.1 6.23 7.39 2.85 1.2 6.08.83 9.16.58 3.67-.29 7.5-.34 10.83 1.2 2.36 1.1 4.57 3 7.15 2.77 1.32-.12 2.52-.8 3.83-1 2.63-.44 5.15 1 7.54 2.18a46.66 46.66 0 0019 4.81c3.37-7.93 1.63-16.85 2-25.46.15-3.22.63-6.42.82-9.64a107.82 107.82 0 00-.15-11.65l-1.22-26.2c-.35-7.13 3.29-14.11 3-21.23a64.26 64.26 0 00-1.37-9.86c-.22-1.1-.45-2.19-.76-3.26-2.2-7.51-8.53-13-14.58-17.93a2.93 2.93 0 00-2.69-.83z"
        fill={color}
      />
      <path
        d="M728.22 528.07c.08 7-2.44 13.77-4.91 20.34-.76 2-1.69 4.22-3.63 5.15s-4.11.33-6-.41a40.37 40.37 0 01-5.13-2.37c-1.74-1-3.7-2.07-5.57-1.43-2.29.78-3 3.63-3.31 6a63.45 63.45 0 01-9.35-.57 1.76 1.76 0 01-.82-.26 1.73 1.73 0 01-.52-1.12c-.32-1.67-.65-3.33-1-5-.1-.52-.48-1.21-1-1 .42-6.48-.93-12.93-1.42-19.4a51.45 51.45 0 01.1-9.85 95.42 95.42 0 011.88-9.73c1.54-6.86 4.5-13.83 4.67-20.79a23.49 23.49 0 00-.27-4.18q-2.12-13.09-4.22-26.2c-.36-2.18-.71-4.38-1.22-6.53-.38-1.6-.74-3.15-1.15-4.69-.25-.94-.52-1.87-.83-2.81l8-22a40.43 40.43 0 012.2-5.27 20.62 20.62 0 018.95-8.73 8.07 8.07 0 003-2c.39-.51.63-1.13 1-1.66 1.41-2 4.3-2.16 6.71-1.72 2.21.39 4.5 1.23 5.84 3a11.77 11.77 0 011.28 2.6q2.4 5.82 4.82 11.63c1.37.66 2 2.45 2 4 0 2.88-.41 5.75-.29 8.63 0 .21 0 .41.06.62.36 2.59 2.19 4.77 2.81 7.37 2.38 9.95-1.09 20.19-3.13 30.25-.08.4-.16.79-.23 1.19a90.88 90.88 0 00-1.6 17.73 50.68 50.68 0 00.52 7.38c.33 2.15.86 4.27 1.1 6.44a59.58 59.58 0 010 9.06c-.28 5.41.6 10.86.66 16.33z"
        fill="#454b69"
      />
      <path
        d="M736.46 442.36a8.61 8.61 0 011.14 4 2.66 2.66 0 01-.6 1.66 2.5 2.5 0 01-2.29.63 6.29 6.29 0 01-2.23-1 5.17 5.17 0 01-2.13-2.14 5.57 5.57 0 01-.32-1.34l-.53-3.38a4.31 4.31 0 010-2c.45-1.39 2.47-3.85 4-2.65s2.21 4.62 2.96 6.22zM795 447.92c-.59-1.54-2.35-2.19-3.79-3-3-1.67-5.08-4.59-6.66-7.63s-2.76-6.28-4.47-9.24a3.6 3.6 0 00-1.14-1.36 1.38 1.38 0 00-1.66.1 1.8 1.8 0 00-.37.95c-.36 2.21.27 4.44.61 6.65a25.92 25.92 0 01-6.34 21c-2.07 2.29-4.64 4.3-5.75 7.18a16.91 16.91 0 00-.6 7l.69 12.76a120.6 120.6 0 01-4.35 38.49c-2 7.2-5.38 14.47-4 21.81.52 2.81 1.74 5.6 1.24 8.42a2.87 2.87 0 000 1.64 2.39 2.39 0 001 .93l6.65 4.34 6-17.77a32.86 32.86 0 001.33-4.65 35.54 35.54 0 00.39-5.46 230.54 230.54 0 016.17-47.44 36.41 36.41 0 012-6.56c1.73-3.89 4.64-7.11 7.51-10.27.07-1.47-.12-2.94 0-4.42a28.29 28.29 0 011.09-7.62c.78-2.43 2.12-4.77 4.45-5.85z"
        fill="#454b69"
      />
      <path
        d="M784.91 464.52a90.29 90.29 0 00.19 12.63l1 16.74a24.07 24.07 0 001 6.61c.8 2.28 2.28 4.28 3.05 6.58.26.78.44 1.6.7 2.39.33 1 .78 1.87 1.2 2.8 2.7 6.11 3.44 12.89 3.63 19.56s-.15 13.36.53 20a12.07 12.07 0 01-5.31.26 7.43 7.43 0 00-2-.27 6.31 6.31 0 00-1.68.48 17.31 17.31 0 01-14.53-1.3 29 29 0 01-3.71-2.72 11.37 11.37 0 01-2.54-2.69 10 10 0 01-1.15-4.86c-.23-6.79 2-13.39 3.51-20a185.9 185.9 0 003-19.39c1.11-9.53.81-19.33 3-28.68a7.9 7.9 0 011.6-3.71 8 8 0 012.58-1.66c1.95-.95 3.94-1.85 5.93-2.77z"
        fill="#454b69"
      />
      <path
        d="M795 447.92c-.59-1.54-2.35-2.19-3.79-3-3-1.67-5.08-4.59-6.66-7.63s-2.76-6.28-4.47-9.24a3.6 3.6 0 00-1.14-1.36 1.38 1.38 0 00-1.66.1 1.8 1.8 0 00-.37.95c-.36 2.21.27 4.44.61 6.65a25.92 25.92 0 01-6.34 21c-2.07 2.29-4.64 4.3-5.75 7.18a16.91 16.91 0 00-.6 7l.69 12.76a120.6 120.6 0 01-4.35 38.49c-2 7.2-5.38 14.47-4 21.81.52 2.81 1.74 5.6 1.24 8.42a2.87 2.87 0 000 1.64 2.39 2.39 0 001 .93l6.65 4.34 6-17.77a32.86 32.86 0 001.33-4.65 35.54 35.54 0 00.39-5.46 230.54 230.54 0 016.17-47.44 36.41 36.41 0 012-6.56c1.73-3.89 4.64-7.11 7.51-10.27.07-1.47-.12-2.94 0-4.42a28.29 28.29 0 011.09-7.62c.78-2.43 2.12-4.77 4.45-5.85z"
        opacity={0.1}
      />
      <path
        d="M787.59 552.97a3.57 3.57 0 01-1.3 1.88c-.67.38-1.76.06-1.82-.71-1.12-.15-2 1.17-3.08 1.26s-2.08-1-3.14-.76c-.68.18-1.32.9-1.94.58-.26-.13-.42-.41-.69-.51-.43-.14-.84.26-1.28.36-.93.21-1.61-.93-1.64-1.88s.25-2-.19-2.82a.6.6 0 00-.29-.32c-.3-.14-.63.14-.83.41-.74 1-.95 2.39-1.7 3.43s-2.54 1.53-3.22.45a2.55 2.55 0 01-.14-1.81c.45-2.56 1.45-5.31 3.75-6.51 2-1 4.4-.62 6.6-.16q4.59 1 9.17 2.07c.81.19 2.75.29 3.1 1.23s-1.04 3.01-1.36 3.81z"
        fill="#a1616a"
      />
      <path
        d="M751.57 376.69c1 5.39 4.08 10.14 6.55 15.05s4.44 10.49 3.1 15.81a55 55 0 01-2 5.39 50.92 50.92 0 00-2.06 9.58c-.66 4.42-1.32 8.91-.79 13.35s2.42 8.9 6 11.6l-.28-2a22.23 22.23 0 014.23 2.91 26.86 26.86 0 003-8.15l6.79 5.27c3 2.3 6.36 4.72 10.08 4.26l-3-6.91c-.83-1.92-1.66-3.83-2.64-5.68a17.87 17.87 0 01-1.62-3.46 15.61 15.61 0 01-.44-3.2 223.13 223.13 0 00-9.82-52 43.35 43.35 0 00-4.73-11 13.78 13.78 0 00-3.94-4.07c-2.49-1.59-5.55-1.93-8.49-2.23a26.19 26.19 0 00-6.19-.14 19 19 0 00-6 2.06 32 32 0 00-13.84 13.73 27.2 27.2 0 00-3.13 13.89c.39 5.1 5.25 2.78 8.53 1.51 8.12-3.17 15.92-8.09 20.69-15.57z"
        fill="#3f3d56"
      />
      <path
        d="M736.46 442.36a8.61 8.61 0 011.14 4 2.66 2.66 0 01-.6 1.66 2.5 2.5 0 01-2.29.63 6.29 6.29 0 01-2.23-1 5.17 5.17 0 01-2.13-2.14 5.57 5.57 0 01-.32-1.34l-.53-3.38a4.31 4.31 0 010-2c.45-1.39 2.47-3.85 4-2.65s2.21 4.62 2.96 6.22z"
        opacity={0.1}
      />
      <path
        fill="#454b69"
        d="M742.71 407.39l-3.75 28.09 16.48-1 5.36-27.09h-18.09z"
      />
      <circle cx={750.82} cy={415.75} r={1.25} fill="#fff" />
      <g opacity={0.1}>
        <path d="M761.65 404.17c.17-.49.32-1 .45-1.48 1.33-5.33-.64-10.91-3.11-15.82s-5.51-9.65-6.54-15.05c-4.77 7.48-12.55 12.4-20.68 15.56-3.28 1.27-8.15 3.58-8.54-1.51a20.47 20.47 0 010-3.41 23.69 23.69 0 00-.9 8.15c.39 5.1 5.25 2.78 8.53 1.51 8.14-3.15 15.91-8.07 20.68-15.55 1 5.39 4.08 10.14 6.55 15 2 3.96 3.65 8.3 3.56 12.6zM777 440.64q-3.4-2.62-6.79-5.27a26.78 26.78 0 01-3 8.16 22 22 0 00-4.23-2.92l.28 2c-3.56-2.7-5.45-7.16-6-11.6s.12-8.93.78-13.35c.07-.48.15-1 .22-1.44-.47 2-.78 4.11-1.09 6.18-.66 4.43-1.32 8.91-.79 13.35s2.42 8.9 6 11.6l-.28-2a22.75 22.75 0 014.23 2.92 27 27 0 003-8.15q3.4 2.63 6.79 5.27c3 2.29 6.36 4.72 10.08 4.26l-2.16-5c-2.55-.63-4.91-2.35-7.04-4.01z" />
      </g>
      <path
        d="M733.67 422.34a23.59 23.59 0 015.59-5.34 1.68 1.68 0 011.15-.32c.32.07.59.31.92.37a1.83 1.83 0 001.08-.26l4.62-2.22a4.9 4.9 0 012.21-.64 1.62 1.62 0 011.61 1.39c0 .86-.85 1.44-1.61 1.87a43.21 43.21 0 00-6.48 4.52c-1 .89-2.14 2.36-1.36 3.5a3 3 0 002.54.85 20.39 20.39 0 005-.38c1.32-.33 2.56-.92 3.89-1.23a19.13 19.13 0 013.71-.37 3 3 0 012.09.45c.55.47.5 1.6-.21 1.74 1 1.33.12 3.29-1.19 4.29s-3 1.41-4.37 2.26c1.6-.57 3.49-1.12 4.91-.18a1 1 0 01.45.56c.09.47-.41.83-.85 1-6.56 3.06-14.33 2-21.2 4.27a22.55 22.55 0 00-7.88 4.55c1.07-1-5.52-8-4.95-10 .46-1.64 3.77-3.73 5-5q2.76-2.69 5.33-5.68z"
        fill="#a1616a"
      />
      <path
        d="M733.42 454.13a5.34 5.34 0 00.35 2.68c.54 2.26-.25 4.63-1.34 6.69a29 29 0 01-4.68 6.39 61.7 61.7 0 01-7.06 6.26 152 152 0 01-15.4 10.62 12.82 12.82 0 01-4.45 1.95 13.33 13.33 0 01-3.73-.06 21.53 21.53 0 01-4.89-1 23.49 23.49 0 00-.27-4.18q-2.12-13.09-4.22-26.2c-.36-2.18-.71-4.38-1.22-6.53-.38-1.6-.74-3.15-1.15-4.69v-.11c1-2.52 3.93-4.12 4.22-6.8 4.23-.4 8.2-.87 12.44-1.26a28 28 0 01-.81 11.84 1.55 1.55 0 001.55-.95c.31-.57.41-1.23.67-1.83 1-2.28 3.93-2.82 6-4.14 3.64-2.26 5.21-7.16 9.13-8.86a1.43 1.43 0 01.92-.16c.86.23 1 1.74 1.93 1.68a1.32 1.32 0 00.74-.42c1.6-1.45 3.6-2.65 5.19-4.09.22.43.43.86.64 1.29q3.34 6.76 6.67 13.53c.87 1.76 1.84 3.63 3.57 4.56-.67 2-4.17 1.76-4.8 3.79z"
        opacity={0.1}
      />
      <path
        d="M688.37 437.04c-.28 2.69-3.23 4.29-4.22 6.81a12.2 12.2 0 00-.49 4.14c-.1 4-1 7.82-1.5 11.73s-.6 8 .84 11.68c.86 2.18 2.24 4.16 2.83 6.43.4 1.52.43 3.16 1.14 4.56 1.55 3 5.5 3.78 8.89 4.15a13.33 13.33 0 003.73.06 13 13 0 004.46-1.95 152.94 152.94 0 0015.39-10.62c4.57-3.57 9-7.53 11.74-12.65 1.09-2.06 1.88-4.43 1.35-6.69a5.13 5.13 0 01-.35-2.68c.63-2 4.12-1.79 4.88-3.78-1.73-.92-2.7-2.79-3.56-4.55l-7.31-14.83c-1.6 1.45-3.6 2.65-5.19 4.1a1.38 1.38 0 01-.75.42c-.89.06-1.07-1.45-1.93-1.68a1.46 1.46 0 00-.91.15c-3.93 1.71-5.5 6.61-9.14 8.87-2.12 1.32-5 1.86-6 4.14-.26.59-.36 1.26-.67 1.83a1.55 1.55 0 01-1.55 1 27.88 27.88 0 00.81-11.84c-4.28.34-8.25.81-12.49 1.2zM787.24 552.3c.27-.1.54-.21.81-.29a3.32 3.32 0 00.9-3.6c-.35-.94-2.29-1-3.1-1.23q-4.58-1.1-9.17-2.06c-2.2-.47-4.61-.88-6.6.15-.74.39-1.35 1.69-1.85 2.35l.77.66c.83.69 1.68 1.37 2.56 2a.63.63 0 01.66-.21.6.6 0 01.29.32 2 2 0 01.21.63 17.26 17.26 0 0014.52 1.28z"
        fill="#454b69"
      />
      <path
        d="M1138 368.25v85.44c0 2.54-4.76 4.61-10.65 4.61H901.81c-5.89 0-10.66-2.07-10.66-4.61v-85.44c0-2.55 4.77-5.14 10.66-5.14h225.55c5.89 0 10.64 2.59 10.64 5.14z"
        fill="#3f3d56"
      />
      <path fill={color} d="M999.49 393.65h117.48v4.15H999.49z" />
      <path
        fill={color}
        opacity={0.5}
        d="M999.49 403.75h117.48v4.15H999.49zM999.49 413.86h117.48v4.15H999.49zM999.49 423.97h117.48v4.15H999.49zM940.05 384.53a27.85 27.85 0 00-15.35 51.1v-4.72a6.34 6.34 0 015.57-6.27 11 11 0 0019.38 0 6.35 6.35 0 015.58 6.27v4.84a27.86 27.86 0 00-15.18-51.22zm12.25 34a1.72 1.72 0 01-.37.48 1.6 1.6 0 01-.81.27 5.24 5.24 0 01-.56 0 11.05 11.05 0 01-21.65-3.14 10.91 10.91 0 011.44-5.44 1.25 1.25 0 01-.12-.08c-1.39-1.15-1-4.15.36-5.11a7.58 7.58 0 012.29-.84 10.11 10.11 0 005.8-4.43 9.44 9.44 0 01-.06 1.68 2.45 2.45 0 013.5-.12 6.67 6.67 0 001 1.12 2.78 2.78 0 001.24.35l2.77.36a4 4 0 014.21 3 27.71 27.71 0 011.82 5.87 9.39 9.39 0 01-.86 6.04z"
      />
      <path
        d="M1138 128.57v85.45c0 2.54-4.76 4.61-10.65 4.61H901.81c-5.89 0-10.66-2.07-10.66-4.61v-85.45c0-2.54 4.77-5.14 10.66-5.14h225.55c5.89.01 10.64 2.6 10.64 5.14z"
        fill="#3f3d56"
      />
      <path fill={color} d="M999.49 153.97h117.48v4.15H999.49z" />
      <path
        fill={color}
        opacity={0.5}
        d="M999.49 164.08h117.48v4.15H999.49zM999.49 174.19h117.48v4.15H999.49zM999.49 184.29h117.48v4.15H999.49zM940.05 144.86a27.85 27.85 0 00-15.35 51.1v-4.72a6.33 6.33 0 015.57-6.27 11 11 0 0019.38 0 6.34 6.34 0 015.58 6.27v4.83a27.85 27.85 0 00-15.18-51.21zm12.25 34a1.47 1.47 0 01-.37.48 1.51 1.51 0 01-.81.27 5.24 5.24 0 01-.56 0 11.05 11.05 0 01-21.65-3.13 10.88 10.88 0 011.44-5.44l-.12-.08c-1.39-1.16-1-4.15.36-5.11a7.33 7.33 0 012.29-.84 10.12 10.12 0 005.8-4.44 9.52 9.52 0 01-.06 1.69 2.46 2.46 0 013.5-.13 6.3 6.3 0 001 1.12 2.92 2.92 0 001.24.36l2.77.35a5.36 5.36 0 013.16 1.14 5.23 5.23 0 011.05 1.87 28 28 0 011.82 5.88 9.36 9.36 0 01-.86 6.01z"
      />
      <path
        d="M1026 247.91v85.45c0 2.54-4.77 4.6-10.66 4.6H789.76c-5.88 0-10.65-2.06-10.65-4.6v-85.45c0-2.55 4.77-5.14 10.65-5.14h225.55c5.89 0 10.69 2.59 10.69 5.14z"
        fill="#3f3d56"
      />
      <path fill={color} d="M887.44 273.31h117.48v4.15H887.44z" />
      <path
        d="M828 264.19a27.86 27.86 0 00-15.36 51.1v-1.85a6.33 6.33 0 015.57-6.27 11.06 11.06 0 0019.39 0 6.33 6.33 0 015.57 6.27v2A27.85 27.85 0 00828 264.19zm10.92 35.32a11 11 0 01-22 0 12.11 12.11 0 016.34-16.19 3.68 3.68 0 013.1-5.68h.26a3.67 3.67 0 00-2.93 5.49h.11a3.54 3.54 0 01-.07-.73 3.6 3.6 0 01.69-2.14 3.67 3.67 0 013.52-2.6h.26a3.66 3.66 0 00-2.81 1.64 3.68 3.68 0 015.71 3.08 2.73 2.73 0 010 .41 12.11 12.11 0 017.88 16.72zM887.44 283.42h117.48v4.15H887.44zM887.44 293.52h117.48v4.15H887.44zM887.44 303.63h117.48v4.15H887.44z"
        fill={color}
        opacity={0.5}
      />
    </svg>
  );
};

SvgTexting.propTypes = {
  color: PropTypes.string
};
SvgTexting.defaultProps = {
  color: "primary"
};
const MemoSvgTexting = React.memo(SvgTexting);
export default MemoSvgTexting;
