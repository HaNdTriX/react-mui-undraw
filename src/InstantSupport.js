import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgInstantSupport = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1069.82 837.5"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="InstantSupport_svg__a"
          x1={639.01}
          y1={505.57}
          x2={639.01}
          y2={392.27}
          gradientTransform="rotate(-9.06 588.507 440.737)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="InstantSupport_svg__b"
          x1={385.82}
          y1={432.36}
          x2={444.34}
          y2={432.36}
          xlinkHref="#InstantSupport_svg__a"
        />
      </defs>
      <path
        d="M158.4 526.59a4.24 4.24 0 01-4.23 4.23h-6a4.23 4.23 0 110 8.46h8.45a4.23 4.23 0 010 8.46h-39.71c27.13 76 78 142.44 144.88 192.51a4.21 4.21 0 012.37-.74h48.93a4.23 4.23 0 110 8.46h-6a4.23 4.23 0 110 8.46h8.46a4.23 4.23 0 010 8.46h-17.39c74.93 45.8 165.6 72.61 263.28 72.61a515.07 515.07 0 00170.12-28.55q10.9-3.83 21.55-8.1 18.54-7.49 36.21-16.33 7.62-3.81 15.07-7.88l.23-.12 1.12-.62 2.91-1.61q8.81-4.92 17.35-10.18l3.5-2.17q4.44-2.79 8.79-5.67 8.68-5.71 17.06-11.8l2-1.48 1.61-1.19q11.28-8.34 21.94-17.29l.3-.25q5.22-4.39 10.29-8.93l.3-.27a437.74 437.74 0 0031.51-31.2 419.94 419.94 0 0040.76-52.38h-19.5a4.23 4.23 0 010-8.46h-8.45a4.23 4.23 0 010-8.46h6a4.23 4.23 0 110-8.45h37.29c31-55.72 48.43-118.5 48.43-184.93a375 375 0 00-20.74-123.1H924.1a8.94 8.94 0 010-17.87h-17.86a8.93 8.93 0 010-17.86H919a8.94 8.94 0 010-17.87h64.91C909.46 102.91 748.28 4.87 561.44 4.87c-109.14 0-209.51 33.45-289 89.48h20.8a8.94 8.94 0 010 17.87h-12.73a8.93 8.93 0 010 17.86h17.86a8.94 8.94 0 110 17.87h-88.88C138.16 221.07 94.96 316.62 94.96 421.18a374.87 374.87 0 0013.89 101.18h45.32a4.25 4.25 0 014.23 4.23z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M881.49 379.18c-4.17-.36-18.7-12.07-27.12-15.52-3.88-1.59-6.31 1.77-7.81 5.85-5.16-3.37-10.82-7.1-15-8.8a4.29 4.29 0 00-3.47-.07c-5.42 2.35-6.58 16.52-6.58 16.52l.19.89c-2.66 2.09-10.64 3.4-14.1 3.63-4.07.26-9.45.86-11.35 1.8s-24 6.26-36.71 10.14S714 416.83 714 416.83l-31.12 7-4.37-.84c-1.39-5-7.75-4.95-15.2-2.93-12.1-2.22-24.17-3.95-28.07-2.18 11.15-5.68 24.86-14.69 24.7-24.63-.22-13.56-27.06 5.46-37.22 13.15l-.87.66-.23-.86s-7.41 2.89-23.21 2.51-22.83 7.05-24.25 7.79-15.88 5.61-17 5.8c-.87.14-25.81 2.4-38.4 3.53-17.41-1.57-42.55 1.17-43.93 3.77-1.58 3-20.72 13.92-20.72 13.92l-6.56 1.72s-.78 2-1.68 4.56a17.79 17.79 0 01-1.62-3.09 52.85 52.85 0 01-2.32-8.16c-.08-.37-.17-.74-.26-1.11 0-.09-.05-.18-.07-.27l-.24-.93-.06-.23a32.47 32.47 0 00-1.18-3.53 18.77 18.77 0 00-1.7-3.31 11.71 11.71 0 00-3.78-3.76c-2.51-1.53-5.54-1.89-8.46-2.22a37 37 0 00-7.43-.32c-2.13.2-4.22.78-6.35.91-3.43.2-6.8-.77-10.2-1.29s-7.1-.51-10 1.39c-2.44 1.62-3.85 4.35-5.42 6.82a44.22 44.22 0 01-11.16 11.94c-3 2.17-6.41 4.26-7.5 7.76s.42 6.89 1.09 10.34c1.48 7.6-.91 15.94 1.75 23 .06.16.12.31.19.47.15.38.31.77.5 1.14a10.38 10.38 0 00.56 1 7.55 7.55 0 00.66.91 5.29 5.29 0 00.79.78 4.81 4.81 0 00.93.61 6.85 6.85 0 003.89.45l.72-.1.66-.12a20.24 20.24 0 002.3-.55 8.9 8.9 0 002.14-.95 4.83 4.83 0 002.23-3.47 11.68 11.68 0 00.14-1.89v-.44l.15.46a29.73 29.73 0 0054.14 4.16l1.13-.38a70 70 0 0111.12-2.58 22.94 22.94 0 001.38 2.42c12.31 19.19 50.78 19.85 50.78 19.85s42.51-1.65 45.8-2.51 13.1.64 15.93 3.27 15.3 3.72 19.35-3.08 8.7-5.49 8.7-5.49a20.2 20.2 0 002.14-3.65l2.71.13c7.15.38 18.63 1.12 21.11 2.12 3.66 1.47 19.38 1.36 27.88-2.22s35-18.76 35-18.76 16.48-5 19.41-6S714 461 714 461l15.8-6.12s16.69-9 23.73-9.94 13.42-7.1 13.42-7.1L811.7 417a23.24 23.24 0 019 .45c4 1.25 30.05-2.57 37.94-11 0 0 .29-1.09.68-2.87.36 0 .73-.07 1.12-.08 1.68.37 2.71.62 2.71.62a69.36 69.36 0 0010.58 6.53c5.31 2.55 11 3.95 13-.42a7.83 7.83 0 00.6-2.12c5.14 3.65 22.44 14.9 22.93 1.5.6-15.74-24.61-30.07-28.77-30.43z"
        transform="translate(-65.09 -31.25)"
        fill="url(#InstantSupport_svg__a)"
      />
      <path
        d="M399 450.89s-8.08-.51-19.34 3.09a71.18 71.18 0 00-10.85 4.43c-16.56 8.34-2.81-36.66-2.81-36.66s4.61 0 10.15-.47c6.62-.53 14.56-1.63 17.5-3.93 5.4-4.27 5.35 33.54 5.35 33.54zM594.56 362.68c.2 12.58-22.12 23.65-32.72 28.2-3.3 1.41-5.48 2.19-5.48 2.19l-2.31-14.48s1.45-1.17 3.79-2.94c10.07-7.59 36.5-26.35 36.72-12.97z"
        fill="#efb7b9"
      />
      <path
        d="M561.84 390.88c-3.3 1.41-5.48 2.19-5.48 2.19l-2.31-14.48s1.45-1.17 3.79-2.94z"
        opacity={0.1}
      />
      <path
        d="M448.22 395.45s43.76-3.93 44.91-4.12 15.41-5 16.81-5.71 8.33-8.07 23.92-7.69 22.9-2.47 22.9-2.47l5.15 19.6-103.94 11.79z"
        fill="#e1e7ef"
      />
      <path
        d="M448.22 395.45s43.76-3.93 44.91-4.12 15.41-5 16.81-5.71 8.33-8.07 23.92-7.69 22.9-2.47 22.9-2.47l5.15 19.6-103.94 11.79z"
        opacity={0.05}
      />
      <path
        d="M753.96 346.75s1.6-19.63 9.9-16.23 22.64 15 26.75 15.32 29 14.49 28.41 30-24-2.51-24-2.51-21.78-5.35-28.82-2.94-12.24-23.64-12.24-23.64z"
        fill="#b07473"
      />
      <path
        d="M819.02 375.87c-.57 15.51-24-2.51-24-2.51s-21.77-5.35-28.82-2.94c-2 .7-4-1-5.6-3.81-3.15-5.32-5.43-14.54-6.26-18.24-.23-1-.34-1.59-.34-1.59s1.6-19.63 9.9-16.22 22.63 14.95 26.74 15.31 28.94 14.49 28.38 30z"
        opacity={0.1}
      />
      <path
        d="M774.11 358.37c-.71 1.82-5.74 4.71-13.55 8.24-3.15-5.32-5.43-14.54-6.26-18.24 1.47-.63 2.51-1.36 2.68-2.18.58-2.74 21.2 1.74 17.13 12.18z"
        opacity={0.1}
      />
      <path
        d="M600.06 396.75l47.85-10.84s32.4-19.07 45-22.89 34.33-9.07 36.21-10 7.18-1.53 11.19-1.78 14.2-2 14.78-4.73 21.2 1.73 17.13 12.17-149.49 55.87-149.49 55.87z"
        fill="#444053"
      />
      <path
        d="M600.06 396.75l47.85-10.84s32.4-19.07 45-22.89 34.33-9.07 36.21-10 7.18-1.53 11.19-1.78 14.2-2 14.78-4.73 21.2 1.73 17.13 12.17-149.49 55.87-149.49 55.87z"
        opacity={0.1}
      />
      <path
        d="M841.5 378.75c-.57 15.52-24-2.51-24-2.51s-15.23-3.74-24.33-3.56a15 15 0 00-4.49.62c-7 2.41-12.21-23.64-12.21-23.64s.1-1.26.39-3.08c.85-5.4 3.31-15.69 9.52-13.15 8.3 3.41 22.63 15 26.74 15.31s28.94 14.53 28.38 30.01z"
        fill="#b07473"
      />
      <path
        d="M793.14 372.75a15 15 0 00-4.49.62c-7 2.41-12.21-23.64-12.21-23.64s.1-1.26.39-3.08a861.1 861.1 0 0010.73-2.37c10.72.47 7.2 21.02 5.58 28.47z"
        opacity={0.1}
      />
      <path
        d="M790.54 375.66c-7.79 8.33-33.51 12.09-37.43 10.87a22.89 22.89 0 00-8.85-.46l-44.14 20.55s-6.3 6.06-13.24 7-23.41 9.8-23.41 9.8l-15.58 6s-7.61 7.33-10.49 8.33-19.15 5.91-19.15 5.91-26.13 15-34.52 18.51-23.88 3.63-27.5 2.18c-2.44-1-13.77-1.71-20.81-2.09-3.34-.17-5.72-.26-5.72-.26l-8.24-62.31s6.81-1.51 15.41-3.54c12.49-2.94 28.76-7 33.27-9.12 7.63-3.59 48.3 7 55.76 7.15s45.51-12 45.51-12 47.54-26.82 57.16-26.83 22.11-4.2 29.87-5.27 27.14-5.51 27.14-5.51c13.09.6 4.96 31.09 4.96 31.09z"
        fill="#444053"
      />
      <path
        d="M382.72 435.59a29.24 29.24 0 01-3.06 18.39 71.18 71.18 0 00-10.85 4.43c-16.56 8.34-2.81-36.66-2.81-36.66s4.61 0 10.15-.47a29.17 29.17 0 016.57 14.31z"
        opacity={0.1}
      />
      <path
        d="M381.73 435.75a29.33 29.33 0 01-56.58 14.5c-.18-.5-.34-1-.5-1.51a28.64 28.64 0 01-.86-3.74 29.34 29.34 0 0157.34-12.1 26.34 26.34 0 01.6 2.85z"
        fill="#efb7b9"
      />
      <path
        d="M534.63 435.69c6.23 12.14 3.13 21.88.79 26.53-3.34-.17-5.72-.26-5.72-.26l-8.24-62.31s6.81-1.51 15.41-3.54l.89-.07s-11.94 22.49-3.13 39.65z"
        opacity={0.1}
      />
      <path
        d="M531.67 436.16c8.81 17.17-1 29.53-1 29.53s-4.59-1.29-8.58 5.42-16.32 5.64-19.09 3-12.47-4.09-15.71-3.23-45.17 2.47-45.17 2.47-37.94-.64-50.09-19.57a23.23 23.23 0 01-1.36-2.38s-9.59-17.94-9.89-21.94c-.13-1.56.5-4.26 1.3-7 1.27-4.25 3-8.56 3-8.56l6.47-1.7s18.88-10.77 20.43-13.72 33.8-6.06 50.19-2.77 47.37 2.87 47.37 2.87l25.32-2.13s-11.95 22.55-3.19 39.71z"
        fill="#e1e7ef"
      />
      <path
        d="M494.52 465.75a76 76 0 0011-5.31c5.83-3.49-11 5.31-11 5.31zM401.91 424.61s12.46 23.16 39.1 15.54 46.59-2 46.59-2 24.92-1.43 29.51-3.34a186.37 186.37 0 0121.06-6.56c3.93-.8 9.41-2.38 13.75-3.73s27.53-6.23 27.53-6.23-7.33-16.38-3.78-18.47c0 0-22.89 4.66-23.15 3s-25.91-2.67-28-1-25 3.32-27 4.07-37.4 3.86-37.4 3.86-53.11-21.59-58.21 14.86z"
        opacity={0.1}
      />
      <path
        d="M569.91 401.52s41.71-24.17 43.24-8.21-39.24 21.78-39.24 21.78z"
        fill="#efb7b9"
      />
      <path
        d="M402.41 421.49s12.5 23.16 39.1 15.54 46.6-2 46.6-2 24.92-1.43 29.5-3.34a185.87 185.87 0 0121.07-6.56c3.92-.8 9.41-2.38 13.75-3.73s27.53-6.23 27.53-6.23-7.34-16.38-3.79-18.47c0 0-22.88 4.66-23.15 3s-25.91-2.67-28-1-25 3.32-27 4.07-37.37 3.85-37.37 3.85-53.13-21.58-58.24 14.87z"
        opacity={0.1}
      />
      <path
        d="M401.58 422.63s12.47 23.16 39.1 15.54 46.6-2 46.6-2 24.92-1.43 29.5-3.34a186 186 0 0121.07-6.57c3.92-.79 9.41-2.38 13.75-3.73s27.53-6.22 27.53-6.22-7.34-16.39-3.79-18.47c0 0-22.88 4.66-23.15 3s-25.91-2.67-28-1-24.95 3.32-27 4.08-37.39 3.83-37.39 3.83-53.11-21.57-58.22 14.88z"
        fill="#e1e7ef"
      />
      <path
        d="M488.52 417.49c-.39-1.07 6.33-.56 19.59-3.12s35.58-8.68 35.58-8.68-52.19 19.88-55.17 11.8zM437.39 410.13s.63 1.8-5.84 5.7M450.97 412.75a7.16 7.16 0 01-4.72 8.48"
        opacity={0.1}
      />
      <path
        d="M392.78 452.68l5.16 4.79s5.54 3 6.13 4.6 11.84 1.31 11.84 1.31l13 8.2-5.52-7.7a15.08 15.08 0 0012.74-2.71c6.33-4.72 18.89-17 18.89-17l22.67-17.64.38-11.37-17.84-2.89-41.52 42.06-9.41 1.33-10-1.11z"
        opacity={0.1}
      />
      <path
        d="M391.64 451.85l5.16 4.79s5.53 3 6.13 4.6 11.85 1.31 11.85 1.31l13 8.2-5.52-7.7a15.05 15.05 0 0012.73-2.71c6.34-4.72 18.9-17 18.9-17l22.7-17.59.38-11.37-17.84-2.89-41.57 42.06-9.41 1.33-10-1.11z"
        fill="#67647e"
      />
      <path
        d="M405.5 449.35l-11.38 5.15a21.57 21.57 0 01-1.35-2.39s-9.6-17.93-9.9-21.94c-.13-1.56.5-4.26 1.31-7z"
        opacity={0.1}
      />
      <path
        d="M403.37 448.68l-11.38 5.14a23.23 23.23 0 01-1.36-2.38s-9.59-17.94-9.89-21.94c-.13-1.56.5-4.26 1.3-7z"
        fill="#e1e7ef"
      />
      <path
        d="M446.22 464.14a5.3 5.3 0 01-1.76 1.48c-1.77.81-3.83 0-5.77.09s-3.9 1.15-5.91 1.31a15.4 15.4 0 01-4.2-.52c-2.65-.55-5.53-.86-8 .34s-4 4.44-2.56 6.73c-1.57 2.21-4.62 2.92-7.31 2.55-6.3-.89-11.58-6.31-18-2.11-2.79 1.85-2.61 4.71-2.55 7.48-.18-.5-.34-1-.5-1.51a28.64 28.64 0 01-.86-3.74 29.34 29.34 0 0157.34-12.1z"
        transform="translate(-65.09 -31.25)"
        fill="url(#InstantSupport_svg__b)"
      />
      <path
        d="M322.66 455.5a12.22 12.22 0 01-4.38 1.48 8.24 8.24 0 01-5.2-.23 6.87 6.87 0 01-2.89-3.22c-3.7-7.34-.84-16.26-2.41-24.33-.66-3.4-2.11-6.9-1.08-10.2s4.48-5.51 7.39-7.65a43.84 43.84 0 0011-11.78c1.55-2.44 2.94-5.13 5.34-6.72 2.82-1.88 6.48-1.88 9.83-1.37s6.67 1.46 10.06 1.26c2.1-.12 4.16-.69 6.26-.89a35.34 35.34 0 017.33.32c2.88.32 5.86.68 8.34 2.18 4.37 2.64 6.07 8 7.21 13s2.29 10.38 6.15 13.71a3.48 3.48 0 011.38 1.72 3 3 0 01-.87 2.26l-4.56 6.06a6.74 6.74 0 01-2.37 2.26c-1.76.82-3.83 0-5.77.08s-3.89 1.17-5.91 1.32a15 15 0 01-4.2-.52c-2.65-.55-5.53-.86-7.95.34s-4 4.44-2.56 6.73c-1.58 2.21-4.63 2.93-7.31 2.55-6.31-.88-11.59-6.31-18-2.11-5.2 3.48.11 10.62-4.83 13.75z"
        fill="#585268"
      />
      <g opacity={0.1}>
        <path d="M377.91 404.34c.88 3.81 1.76 7.88 3.86 11.07a51.91 51.91 0 01-2.28-8 29.1 29.1 0 00-3.48-9.31 39.4 39.4 0 011.9 6.24zM385.63 421.08l-.31-.29a5.32 5.32 0 01-.75 1.25l-4.56 6.06a6.82 6.82 0 01-2.37 2.26c-1.76.82-3.83 0-5.77.08s-3.89 1.17-5.91 1.32a15 15 0 01-4.2-.52c-2.65-.55-5.53-.86-8 .34s-4 4.44-2.56 6.73c-1.58 2.21-4.62 2.93-7.31 2.55-6.3-.88-11.58-6.31-18-2.11-5.25 3.46.06 10.6-4.89 13.73a12.11 12.11 0 01-4.37 1.48c-1.74.33-3.62.56-5.2-.23a5.57 5.57 0 01-2-1.79 14.7 14.7 0 00.69 1.59 6.87 6.87 0 002.89 3.22 8.24 8.24 0 005.2.23 12.22 12.22 0 004.38-1.48c4.94-3.13-.37-10.27 4.89-13.73 6.37-4.2 11.65 1.23 18 2.11 2.68.38 5.73-.34 7.31-2.55-1.44-2.29.13-5.53 2.56-6.73s5.3-.89 7.95-.34a15 15 0 004.2.52c2-.15 3.89-1.23 5.91-1.32s4 .74 5.77-.08a6.74 6.74 0 002.37-2.26l4.56-6.06a3 3 0 00.87-2.26 3.48 3.48 0 00-1.35-1.72z" />
      </g>
      <path
        d="M619.3 407.85s7.81 14 6.15 16.32-6.15-16.32-6.15-16.32zM644.98 403.75s4.92 8.61 3.92 10.32M674.46 383.84s5.69 4 3.58 6.6M680.19 381.65s7.23 8.84 4.83 11.25M779.61 357.42s1.1 14.79 5.45 13.53-5.45-13.53-5.45-13.53z"
        opacity={0.1}
      />
      <path
        d="M744.06 722.97s6.07-20.61-1.14-35.78a32.49 32.49 0 01-2.63-20.44 54.41 54.41 0 012.89-9.58"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M738.69 647.6c0 2.52 4.58 9.85 4.58 9.85s4.57-7.33 4.57-9.85a4.58 4.58 0 00-9.15 0zM731.13 661.59c1.38 2.12 9.2 5.78 9.2 5.78s-.15-8.63-1.52-10.75a4.582 4.582 0 00-7.68 5zM731.46 685.5c2.26 1.14 10.86.35 10.86.35s-4.48-7.38-6.74-8.52a4.58 4.58 0 00-4.12 8.17zM735.79 703.53c2 1.5 10.64 2.18 10.64 2.18s-3.17-8-5.2-9.53a4.572 4.572 0 10-5.44 7.35zM749.91 667.86c-1.81 1.76-10.25 3.58-10.25 3.58s2.06-8.38 3.88-10.14a4.572 4.572 0 016.37 6.56zM754.72 689.02c-2.26 1.13-10.86.35-10.86.35s4.48-7.38 6.74-8.52a4.58 4.58 0 014.12 8.17zM756.55 710.22c-2 1.5-10.64 2.18-10.64 2.18s3.17-8 5.2-9.54a4.58 4.58 0 115.44 7.36z"
        fill={color}
      />
      <path
        d="M892.22 701.98s6.07-20.61-1.14-35.78a32.57 32.57 0 01-2.63-20.45 54.5 54.5 0 012.89-9.59"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M886.85 626.61c0 2.52 4.58 9.85 4.58 9.85s4.57-7.33 4.57-9.85a4.58 4.58 0 10-9.15 0zM879.29 640.6c1.38 2.12 9.2 5.78 9.2 5.78s-.14-8.63-1.52-10.75a4.582 4.582 0 10-7.68 5zM879.63 664.5c2.25 1.14 10.85.36 10.85.36s-4.48-7.39-6.74-8.52a4.57 4.57 0 10-4.11 8.16zM883.91 682.54c2 1.5 10.64 2.18 10.64 2.18s-3.17-8-5.2-9.54a4.58 4.58 0 00-5.44 7.36zM898.09 646.87c-1.81 1.76-10.25 3.58-10.25 3.58s2.07-8.38 3.88-10.14a4.572 4.572 0 016.37 6.56zM902.91 668.02c-2.26 1.14-10.86.35-10.86.35s4.49-7.38 6.74-8.51a4.57 4.57 0 014.12 8.16zM904.71 689.22c-2 1.5-10.64 2.18-10.64 2.18s3.17-8 5.2-9.53a4.572 4.572 0 115.44 7.35z"
        fill={color}
      />
      <path
        d="M775.51 699.98s6.07-20.61-1.14-35.78a32.56 32.56 0 01-2.63-20.45 54.41 54.41 0 012.89-9.58"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M770.14 624.61c0 2.52 4.58 9.85 4.58 9.85s4.57-7.33 4.57-9.85a4.58 4.58 0 00-9.15 0zM762.58 638.6c1.38 2.12 9.2 5.78 9.2 5.78s-.14-8.63-1.52-10.75a4.582 4.582 0 10-7.68 5zM762.91 662.51c2.25 1.14 10.85.35 10.85.35s-4.48-7.38-6.74-8.52a4.573 4.573 0 10-4.11 8.17zM767.24 680.54c2 1.5 10.64 2.18 10.64 2.18s-3.17-8-5.2-9.53a4.572 4.572 0 10-5.44 7.35zM781.38 644.87c-1.81 1.76-10.25 3.58-10.25 3.58s2.07-8.38 3.88-10.14a4.572 4.572 0 016.37 6.56zM786.17 666.03c-2.26 1.13-10.86.35-10.86.35s4.49-7.38 6.74-8.52a4.58 4.58 0 014.12 8.17zM788 687.23c-2 1.5-10.64 2.18-10.64 2.18s3.17-8 5.2-9.54a4.58 4.58 0 115.44 7.36z"
        fill={color}
      />
      <path
        d="M880.91 721.91v2.6l.3-.25q5.22-4.39 10.29-8.93l.3-.27a437.74 437.74 0 0031.51-31.2c-10.67-18.56-35.66-18.66-40.15-18.52h-.7s-1.61 33.41-1.55 56.57z"
        fill="#a8a8a8"
      />
      <path
        d="M880.91 721.91v2.6l.3-.25q5.22-4.39 10.29-8.93l.3-.27a437.74 437.74 0 0031.51-31.2c-10.67-18.56-35.66-18.66-40.15-18.52h-.7s-1.61 33.41-1.55 56.57z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M774.39 686.28l.84 5.54 8.56 56.29 2.8 18.46 2.73 17.94q7.62-3.81 15.07-7.88l.23-.12 1.12-.62 2.91-1.61q8.81-4.92 17.35-10.18l3.5-2.17q4.44-2.79 8.79-5.67 8.68-5.71 17.06-11.8l2-1.48 1.61-1.19q11.28-8.34 21.94-17.29l.3-.25q5.22-4.39 10.29-8.93l-5-25.75q-1.5-7.82-2.48-15.7-.54-4.26-.9-8.54c-.07-.68-.13-1.37-.18-2.05-1.72-21.47-7-66.07-21.81-76.56a11.19 11.19 0 00-10-1.77 41 41 0 00-4.33 1.48c-10.39 4.16-20.22 12.42-28.37 21a148.26 148.26 0 00-28 42.24l-15 33.81-.05.11-.14.31z"
        fill="#a8a8a8"
      />
      <path
        d="M810.91 743.99l17.39-59.48s16.28 43.75 29.09 58.48l1.61-1.19-23.09-57.05s-7.56-32.51-1.51-44.35c4.8-9.4 20.56-41 26.85-53.68a11.19 11.19 0 00-10-1.77 41 41 0 00-4.33 1.48c-8 12.68-22.8 38-23.9 53.71a196.94 196.94 0 001.76 41.15z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M731.56 808.95q10.9-3.83 21.55-8.1 18.54-7.49 36.21-16.33 7.62-3.81 15.07-7.88l.23-.12-.58-3.67-.63-4-2.07-13.26s-9.63-41.64-19.81-62.65a39.18 39.18 0 00-5.91-9.43c-.15-.17-.31-.32-.47-.47a11.27 11.27 0 00-7-1.7 14.79 14.79 0 00-8.61 4.05c-5 4.45-10.45 13.36-15.13 30.41-7.21 26.14-10.96 64.79-12.85 93.15z"
        fill="#a8a8a8"
      />
      <path
        d="M753.11 800.85q18.54-7.49 36.21-16.33 7.62-3.81 15.07-7.88c-.05-1.24-.17-2.5-.35-3.79s-1.27-7-14.7-6.47c-.92 0-1.84.11-2.75.22a38.2 38.2 0 00-31.27 25.15 40.33 40.33 0 00-2.21 9.1zM770.85 702.66c.45-11.88-6-15.95-11.33-17.31a14.73 14.73 0 018.61-4.05 22.86 22.86 0 017.51 12l13.61 66.28s-19.16-37.01-18.4-56.92z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M829.72 759.02l-3.72 5.09 3.5-2.17q4.44-2.79 8.79-5.67l-5.69-1.19z"
        fill="#a8a8a8"
      />
      <path
        d="M829.5 761.94q4.44-2.79 8.79-5.67 8.68-5.71 17.06-11.8c-3.93-2.8-7.67-4.74-10.27-4.51 0 0-13.33.91-15.36 19.06-.1.93-.18 1.9-.22 2.92z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M775.13 683l.3.92 28 84.92 2.33 7.06 2.91-1.61a215.58 215.58 0 00-27.12-81.36c-2.88-4.9-5.07-8.07-6-9.32a9.07 9.07 0 00-.42-.58zM880.91 721.91c.09.78.2 1.56.31 2.35q5.22-4.39 10.29-8.93l.3-.27-7.74-41.18-1.6-8.51a182.94 182.94 0 00-1.56 56.54z"
        opacity={0.1}
      />
      <path
        d="M515.33 74.75h12.76a8.94 8.94 0 010-17.87h103.36a8.94 8.94 0 010 17.87h-12.76a8.93 8.93 0 110 17.86h17.86a8.94 8.94 0 010 17.87H533.19a8.94 8.94 0 010-17.87h-17.86a8.93 8.93 0 110-17.86zM662.66 211.62h12.76a8.93 8.93 0 110-17.86h103.36a8.93 8.93 0 010 17.86h-12.76a8.93 8.93 0 010 17.86h17.89a8.94 8.94 0 010 17.87H680.52a8.94 8.94 0 010-17.87h-17.86a8.93 8.93 0 110-17.86zM512.91 639.03h6a4.23 4.23 0 110-8.46h49a4.23 4.23 0 110 8.46h-6a4.23 4.23 0 010 8.46h8.45a4.23 4.23 0 110 8.46h-48.99a4.23 4.23 0 010-8.46h-8.46a4.23 4.23 0 010-8.46zM378.2 710.92h4.82a3.38 3.38 0 010-6.75h39.06a3.38 3.38 0 010 6.75h-4.82a3.38 3.38 0 010 6.75h6.75a3.38 3.38 0 010 6.75h-39.1a3.38 3.38 0 110-6.75h-6.75a3.38 3.38 0 110-6.75zM213.09 585.12h6.05a4.23 4.23 0 010-8.46h48.93a4.23 4.23 0 010 8.46h-6a4.23 4.23 0 010 8.46h8.46a4.23 4.23 0 010 8.46h-48.98a4.23 4.23 0 010-8.46h-8.46a4.23 4.23 0 010-8.46zM639.91 717.35h6a4.23 4.23 0 010-8.46h49a4.23 4.23 0 010 8.46h-6a4.23 4.23 0 110 8.46h8.46a4.23 4.23 0 010 8.45h-49.02a4.23 4.23 0 110-8.45h-8.44a4.23 4.23 0 010-8.46z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M707.91 307.75a2.84 2.84 0 00-.92-3.67 1.21 1.21 0 01-.24-.21 1.43 1.43 0 011.4-2.35 1.34 1.34 0 01.3.12 2.85 2.85 0 003.68-.91 1.27 1.27 0 01.21-.25 1.43 1.43 0 012.34 1.41 1.88 1.88 0 01-.12.3 2.84 2.84 0 00.92 3.67 1.64 1.64 0 01.25.21 1.43 1.43 0 01-1.41 2.34 1 1 0 01-.3-.12 2.86 2.86 0 00-3.68.92 1.22 1.22 0 01-.2.25 1.43 1.43 0 01-2.35-1.41 1.88 1.88 0 01.12-.3zM1024.59 139.07a2.83 2.83 0 00-.92-3.67 1.57 1.57 0 01-.24-.21 1.43 1.43 0 011.41-2.35 1.48 1.48 0 01.29.12 2.84 2.84 0 003.68-.92 1.57 1.57 0 01.21-.24 1.43 1.43 0 012.34 1.41 1 1 0 01-.12.29 2.86 2.86 0 00.92 3.68 1.64 1.64 0 01.25.21 1.43 1.43 0 01-1.41 2.34 1.25 1.25 0 01-.3-.12 2.85 2.85 0 00-3.67.92 2.52 2.52 0 01-.21.25 1.43 1.43 0 01-2.35-1.41 1.88 1.88 0 01.12-.3zM1029.46 592.13a2.84 2.84 0 00-.92-3.67 1.21 1.21 0 01-.24-.21 1.42 1.42 0 011.4-2.34 1 1 0 01.3.12 2.86 2.86 0 003.68-.92 1.22 1.22 0 01.2-.25 1.43 1.43 0 012.35 1.41 1.88 1.88 0 01-.12.3 2.84 2.84 0 00.92 3.67 1.21 1.21 0 01.24.21 1.42 1.42 0 01-1.36 2.3 1 1 0 01-.3-.11 2.85 2.85 0 00-3.68.91 1.27 1.27 0 01-.21.25 1.43 1.43 0 01-2.34-1.41 1.88 1.88 0 01.08-.26zM49.29 38.02a2.85 2.85 0 00-.92-3.68 1.21 1.21 0 01-.24-.21 1.42 1.42 0 011.4-2.34 1.34 1.34 0 01.3.12 2.85 2.85 0 003.68-.92 1.64 1.64 0 01.21-.25 1.43 1.43 0 012.34 1.41 1.34 1.34 0 01-.12.3 2.85 2.85 0 00.92 3.68 1.57 1.57 0 01.25.2 1.43 1.43 0 01-1.41 2.35 1.34 1.34 0 01-.3-.12 2.85 2.85 0 00-3.68.92 1.16 1.16 0 01-.2.24 1.43 1.43 0 01-2.35-1.4 1.34 1.34 0 01.12-.3zM1.54 7.65a2.84 2.84 0 00-.92-3.67 1.21 1.21 0 01-.24-.21 1.43 1.43 0 011.4-2.35 1.34 1.34 0 01.3.12A2.85 2.85 0 005.76.63a1.69 1.69 0 01.2-.25 1.43 1.43 0 012.35 1.37 1.48 1.48 0 01-.12.29 2.85 2.85 0 00.92 3.71 1.21 1.21 0 01.24.21 1.42 1.42 0 01-1.44 2.35 1 1 0 01-.3-.12 2.86 2.86 0 00-3.68.92 1.27 1.27 0 01-.21.25 1.43 1.43 0 01-2.34-1.41 1.88 1.88 0 01.16-.3zM381.91 228.2a2.84 2.84 0 00-.92-3.67 1.21 1.21 0 01-.24-.21 1.43 1.43 0 011.4-2.35 1.34 1.34 0 01.3.12 2.85 2.85 0 003.68-.91 1.22 1.22 0 01.2-.25 1.43 1.43 0 012.35 1.41 1.48 1.48 0 01-.12.29 2.85 2.85 0 00.92 3.68 1.21 1.21 0 01.24.21 1.42 1.42 0 01-1.4 2.34 1 1 0 01-.3-.12 2.86 2.86 0 00-3.68.92 1.27 1.27 0 01-.21.25 1.43 1.43 0 01-2.34-1.41 1.88 1.88 0 01.12-.3zM205.54 345.69a2.84 2.84 0 00-.92-3.67 1.21 1.21 0 01-.24-.21 1.42 1.42 0 011.4-2.34 1 1 0 01.3.12 2.86 2.86 0 003.68-.92 1.69 1.69 0 01.2-.25 1.43 1.43 0 012.35 1.41 1.88 1.88 0 01-.12.3 2.84 2.84 0 00.92 3.67 1.21 1.21 0 01.24.21 1.42 1.42 0 01-1.4 2.34 1 1 0 01-.3-.12 2.86 2.86 0 00-3.68.92 1.69 1.69 0 01-.2.25 1.43 1.43 0 01-2.35-1.41 1.88 1.88 0 01.12-.3zM481.54 192.04a2.84 2.84 0 00-1.34-3.54 1.27 1.27 0 01-.27-.18 1.42 1.42 0 011.12-2.49 1.09 1.09 0 01.31.08 2.86 2.86 0 003.55-1.34 1.59 1.59 0 01.18-.27 1.43 1.43 0 012.49 1.13 1.81 1.81 0 01-.09.31 2.85 2.85 0 001.35 3.54 1.51 1.51 0 01.26.18 1.43 1.43 0 01-1.12 2.49 1.57 1.57 0 01-.31-.08 2.84 2.84 0 00-3.54 1.34 2.11 2.11 0 01-.18.27 1.43 1.43 0 01-2.49-1.13 1.18 1.18 0 01.08-.31zM931.44 500.98a3.94 3.94 0 002.2-4.77 2.14 2.14 0 01-.08-.44 2 2 0 013.55-1.31 1.87 1.87 0 01.22.39 3.94 3.94 0 004.77 2.2 2.15 2.15 0 01.44-.09 2 2 0 011.31 3.56 1.87 1.87 0 01-.39.22 4 4 0 00-2.2 4.77 1.64 1.64 0 01.09.44 2 2 0 01-3.56 1.31 1.47 1.47 0 01-.21-.39 3.94 3.94 0 00-4.77-2.2 2.29 2.29 0 01-.44.09 2 2 0 01-1.31-3.56 2.08 2.08 0 01.38-.22zM322.5 538.86a4 4 0 002.2-4.77 1.65 1.65 0 01-.09-.43 2 2 0 013.56-1.32 2.16 2.16 0 01.22.39 3.93 3.93 0 004.77 2.2 1.56 1.56 0 01.43-.08 2 2 0 011.31 3.55 1.79 1.79 0 01-.38.22 3.94 3.94 0 00-2.2 4.77 2.14 2.14 0 01.08.44 2 2 0 01-3.55 1.31 1.87 1.87 0 01-.22-.39 4 4 0 00-4.77-2.2 2.15 2.15 0 01-.44.09 2 2 0 01-1.31-3.56 1.87 1.87 0 01.39-.22zM512.84 548.57a3.94 3.94 0 002.2-4.77 2.29 2.29 0 01-.09-.44 2 2 0 013.56-1.31 1.87 1.87 0 01.22.39 3.94 3.94 0 004.77 2.19 2.14 2.14 0 01.44-.08 2 2 0 011.31 3.55 1.87 1.87 0 01-.39.22 3.94 3.94 0 00-2.2 4.77 2.29 2.29 0 01.09.44 2 2 0 01-3.56 1.31 1.87 1.87 0 01-.22-.39 4 4 0 00-4.77-2.2 1.64 1.64 0 01-.44.09 2 2 0 01-1.31-3.55 1.87 1.87 0 01.39-.22z"
        fill={color}
        opacity={0.3}
      />
      <circle cx={121.87} cy={103.29} r={16.5} fill={color} opacity={0.1} />
      <circle cx={944.65} cy={119.79} r={16.5} fill={color} opacity={0.1} />
      <circle cx={199.87} cy={21.37} r={9} fill={color} opacity={0.1} />
      <circle cx={1060.82} cy={283.28} r={9} fill={color} opacity={0.1} />
      <circle cx={138.37} cy={743.99} r={9} fill={color} opacity={0.1} />
      <circle cx={172.87} cy={784.52} r={9} fill={color} opacity={0.1} />
      <circle cx={105.37} cy={808.95} r={9} fill={color} opacity={0.1} />
    </svg>
  );
};

SvgInstantSupport.propTypes = {
  color: PropTypes.string
};
SvgInstantSupport.defaultProps = {
  color: "primary"
};
export default SvgInstantSupport;
