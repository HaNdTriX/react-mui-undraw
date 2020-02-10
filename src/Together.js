import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgTogether = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 847.67 793.71"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Together_svg__a"
          x1={577.94}
          y1={588.56}
          x2={577.94}
          y2={437.96}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Together_svg__b"
          x1={906.01}
          y1={411.2}
          x2={906.01}
          y2={57.23}
          xlinkHref="#Together_svg__a"
        />
        <linearGradient
          id="Together_svg__c"
          x1={293.99}
          y1={407.12}
          x2={293.99}
          y2={53.14}
          xlinkHref="#Together_svg__a"
        />
        <linearGradient
          id="Together_svg__d"
          x1={377.23}
          y1={465.29}
          x2={377.23}
          y2={465.18}
          xlinkHref="#Together_svg__a"
        />
        <linearGradient
          id="Together_svg__e"
          x1={613.47}
          y1={801.09}
          x2={613.47}
          y2={219.69}
          xlinkHref="#Together_svg__a"
        />
      </defs>
      <path
        d="M408.25 94.69c-3.38 0-7.13 0-9.7.2a11.8 11.8 0 00-3.36.69l-17.36 6.28c14 .35 28.64.24 43 .13l80.57-.62c8.22-.06 16.85-.14 23.71-.63 4.59-.33 8-.81 12.2-1.19 15.25-1.36 37.49-1.1 57.35-1s43.84-.45 50.83-2.44h-42.63c-4.6 0-9.42 0-13.48-.23-4.74-.27-7.64-.8-11.81-1.16-6.9-.59-16.42-.66-25.27-.7-48.59-.22-96.58.92-144.05.67z"
        fill="#f4f4f4"
      />
      <path
        d="M224 588.56s35.89-163 142.54-120 251.24 20.51 266.62 11.28 205.09-88.19 261.49-2.05 31.79 110.75 31.79 110.75z"
        transform="translate(-176.17 -53.14)"
        fill="url(#Together_svg__a)"
      />
      <path
        d="M56.66 533.55s35-159 139-117 245 20 260 11 200-86 255-2 31 108 31 108z"
        fill={color}
      />
      <path
        d="M133.66 543.55s41-133.62 75-90.39 152 23.58 174 21.62 304 68.78 304 68.78z"
        fill="#f0e4e4"
      />
      <path
        d="M1018.26 262.76a80.13 80.13 0 00-2.69-64.79c-7.4-14.77-19.32-27-25.8-42.23-3.76-8.82-5.57-18.33-8.6-27.42a107.55 107.55 0 00-57.83-63.52c-13.27-5.86-28-9-42.4-7-23.27 3.23-42.78 19.2-58.33 36.81-22.61 25.6-40.32 59.76-32.58 93 5.22 22.45 21.32 41.16 26.73 63.56 7 29-4.83 59.54-1.05 89.14 3.49 27.35 21.43 51.82 45.57 64.74 27.62 14.78 66.05-.74 93.58-10.38 11.83-4.15 24.33-9.68 30.4-20.66 8-14.54 1.85-32.62 3.79-49.12 2.68-22.84 20.64-40.73 29.21-62.13z"
        transform="translate(-176.17 -53.14)"
        fill="url(#Together_svg__b)"
      />
      <path
        d="M377.75 151.65c-3.76-8.82-5.57-18.33-8.6-27.42a107.55 107.55 0 00-57.83-63.52c-13.27-5.86-28-9-42.4-7-23.27 3.23-42.78 19.2-58.33 36.81-22.61 25.6-40.32 59.76-32.58 93 5.22 22.45 21.32 41.16 26.73 63.56 7 29-4.83 59.54-1.05 89.14 3.49 27.35 21.43 51.82 45.57 64.74 27.62 14.78 66.05-.74 93.58-10.38 11.83-4.15 24.33-9.68 30.4-20.66 8-14.54 1.85-32.62 3.79-49.12 2.69-22.9 20.64-40.79 29.22-62.19a80.13 80.13 0 00-2.69-64.79c-7.4-14.71-19.32-26.97-25.81-42.17z"
        transform="translate(-176.17 -53.14)"
        fill="url(#Together_svg__c)"
      />
      <path
        d="M634.95 284.92c-3.7-29 7.89-58.85 1-87.24-5.3-21.93-21-40.24-26.16-62.21-7.58-32.56 9.76-66 31.89-91 15.22-17.23 34.32-32.87 57.09-36 14.06-2 28.51 1.09 41.49 6.82a105.27 105.27 0 0156.6 62.17c3 8.9 4.73 18.21 8.42 26.84 6.35 14.87 18 26.87 25.25 41.33a78.42 78.42 0 012.63 63.41c-8.39 20.94-26 38.46-28.6 60.87-1.89 16.15 4.17 33.84-3.7 48.07-5.94 10.74-18.17 16.16-29.75 20.22-26.94 9.44-64.56 24.63-91.59 10.16-23.6-12.72-41.15-36.67-44.57-63.44z"
        fill={color}
      />
      <path
        d="M710.51 305.53s39.66-16 44.66-25 12-62 12-62M710.17 550.55v-345"
        fill="none"
        stroke="#333"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M35.95 280.92c-3.7-29 7.89-58.85 1-87.24-5.3-21.93-21-40.24-26.16-62.21-7.58-32.56 9.76-66 31.89-91C57.9 23.24 77 7.6 99.77 4.47c14.06-2 28.51 1.09 41.49 6.82a105.27 105.27 0 0156.6 62.17c3 8.9 4.73 18.21 8.42 26.84 6.35 14.87 18 26.87 25.25 41.33a78.42 78.42 0 012.63 63.41c-8.39 20.94-26 38.46-28.6 60.87-1.89 16.15 4.17 33.84-3.7 48.07-5.94 10.74-18.17 16.16-29.75 20.22-26.94 9.44-64.56 24.63-91.59 10.16-23.6-12.72-41.15-36.67-44.57-63.44z"
        fill={color}
      />
      <path
        d="M35.95 280.92c-3.7-29 7.89-58.85 1-87.24-5.3-21.93-21-40.24-26.16-62.21-7.58-32.56 9.76-66 31.89-91C57.9 23.24 77 7.6 99.77 4.47c14.06-2 28.51 1.09 41.49 6.82a105.27 105.27 0 0156.6 62.17c3 8.9 4.73 18.21 8.42 26.84 6.35 14.87 18 26.87 25.25 41.33a78.42 78.42 0 012.63 63.41c-8.39 20.94-26 38.46-28.6 60.87-1.89 16.15 4.17 33.84-3.7 48.07-5.94 10.74-18.17 16.16-29.75 20.22-26.94 9.44-64.56 24.63-91.59 10.16-23.6-12.72-41.15-36.67-44.57-63.44z"
        opacity={0.2}
      />
      <path
        d="M111.51 301.53s39.66-16 44.66-25 12-62 12-62M111.17 546.55v-345"
        fill="none"
        stroke="#333"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M162.7 667.45c12.31.81 25.32 5.08 36.52-.09 2.89-1.33 5.51-3.25 8.51-4.32 6.89-2.46 14.46-.07 21.4 2.23a948.63 948.63 0 00166.86 38.93c11.68 1.63 23.87 3 35-.8 8.14-2.77 15.19-8.12 23.25-11.12 13.18-4.89 27.74-3.07 41.77-2.3a267.56 267.56 0 00108-16.45l1.82-.67a54.6 54.6 0 0152.09 7 127.79 127.79 0 0018.58 11.33 45.25 45.25 0 0120.61 59.67l-.24.52c-5.72 12.47-10.49 26.43-21.7 34.35-10.57 7.47-24.44 7.78-37.38 7.81l-79.43.19c-8.24 0-16.58 0-24.58-1.94-7.19-1.77-13.88-5.09-20.51-8.39l-35.55-17.67c-14.31-7.11-30-14.43-45.66-11.16-16 3.34-27.53 16.79-41.47 25.27-21.63 13.17-50.39 13.69-72.48 1.29-10.58-5.94-19.77-14.6-31.31-18.33-19.06-6.17-39.31 2.37-58.92 6.46-38.15 7.95-83.14-2.94-112.38-29.27-37.67-33.93 6.58-75.2 47.2-72.54z"
        fill="#f0e4e4"
      />
      <g opacity={0.7}>
        <path
          d="M377.23 465.29v-.11a.3.3 0 000 .11z"
          transform="translate(-176.17 -53.14)"
          fill="url(#Together_svg__d)"
        />
        <path
          d="M850.08 359.74c-1.44-2.35-4.84-3.13-7.66-4.27-6.39-2.57-11-8.11-11.67-14.08-.47-4 .61-8.55-2.14-11.88-1.19-1.44-3-2.45-4.43-3.7-3.15-2.66-4.82-6.31-6.26-9.87a150.54 150.54 0 01-8.92-31.25c-.82-4.79-1.42-9.7-3.81-14.08-5.5-10.1-19.12-15.14-32.05-16.95-5.1-.71-10.4-1.06-15.39.1a39.13 39.13 0 00-12.22 5.64 62.28 62.28 0 00-10.68 8.33 21.49 21.49 0 00-5.63 8.11c-1 3 .62 4.78 3.29 5.91a34.05 34.05 0 00-7.4 21.28 33.7 33.7 0 0023.33 32.27 10.85 10.85 0 01-1.21 4.34c-3.23 1.87-15.07 7.92-28.59 5.1-2.79-.58-5.51.84-8.11 3.57-12.55 12-22.34 55.36-22.34 55.36L651.78 456l.55.53-.55.79.93.89-29.84 27.75c-.07-.28-.15-.56-.21-.84l-8.51-12.35v-.08l.55-.16 4-18.54-8.61 2-.09-.13-.49-.73-33.21-49.48-30.18-58.43-.94-1.81s.4.74.85 1.52v.06l.08.14v.07l.13.22.06.1.06.11.07.11.05.09.11.18v.06l.08.12v.06l.08.12.09.12.06.07.06.06a.35.35 0 000-.08v-.12l-.06-.2-.09-.27v-.08l-.1-.27v-.08l-.16-.41v-.06l-.17-.42-.06-.15-.19-.46-.05-.12-.27-.65-.07-.17-.25-.57-.1-.23-.37-.84c-4.63-10.59-11.25-15.89-11.25-15.89a122.23 122.23 0 01-37.07-12.59v-.65l-8.62-4a91.27 91.27 0 01-3.54-11.49A33.64 33.64 0 00509.88 266c0-.74 0-1.47-.08-2.2a6 6 0 001.8-.82c3.47-2.41 2.57-8.2 5.68-11.05 1.42-1.3 3.51-1.81 4.64-3.38a7.62 7.62 0 001.08-3.34c.76-4.85 1-10.65-2.62-13.85a7.69 7.69 0 00-1-1c-4.71-3.69-11.69-.64-17.5-2-2.49-.6-4.68-2-7-3.17-9.23-4.71-20-5.43-30.32-5.43-5.21 0-10.48.17-15.49 1.6s-9.78 4.25-12.64 8.6a28.37 28.37 0 00-3.29 7.92 89.93 89.93 0 00-2.9 33.94c.45 4.27 1.39 8.85 4.58 11.73.21.23.43.45.67.67a13.57 13.57 0 007.47 3.08 11.63 11.63 0 007-1.2 115 115 0 01-1.38 17.45c-1.77.85-14 7-15.91 15.52-6.18 2.47-13.29 5.19-18.94 7.33a7.77 7.77 0 00-3.66-.12c-21.85 4-23.17 27.14-23.17 27.14s-4 66.2-9.27 87.39a59 59 0 00-.86 21.85v.18q.16 1.21.36 2.37A87.44 87.44 0 00383 485.1a6.19 6.19 0 013.1-4.71l.07.61h.07l2.71 23.34s7.94 25.16 13.24 26.48a3.49 3.49 0 00.73.09l1.58 6.86.18-.12 5.45 26.93 9.93 43 10.6 125.12h3.81L432 748.59s-33.78 42.41-23.85 48.33 25.16 8.61 39.72-13.9a36.46 36.46 0 019.27-13.9 13.66 13.66 0 004.6-11.64l-2.48-24.78h3.18l-.1-.33h.1a99.91 99.91 0 01-3.91-26.82 57.74 57.74 0 011.27-11.91c2.38-10.7 2.86-29 2.86-41.93 0-7.84-.16-13.8-.2-15.08l7.94-71.43s11.92 71.5 17.21 77.46l13.9 86.73 5.56.57-2.91 18.63s-33.78 42.41-23.85 48.33S505.47 805.53 520 783a36.46 36.46 0 019.27-13.9 13.66 13.66 0 004.6-11.64l-2.5-25 2.54.26s.35-9.36.35-22.27c0-22.79-1-56.92-7-70.08 0 0-1.77-16.57-1.76-34.67a166 166 0 011.76-25.91c1.8-10.82 2.52-29.57 2.75-46.81l.89-3.84-.84-.45c0-3.9.05-7.67.05-11.21 0-5 0-9.56-.06-13.33l.32-.32a12 12 0 002.84-3.5c.66-2.65 1.32-23.17-3.31-37.74a79.61 79.61 0 01-3.45-20.32c.08-.24.16-.47.22-.71l-.24.24c-.13-2.73-.17-5.51-.14-8.38a11.5 11.5 0 00.37-1.13l-.36.37c.1-6 .48-12.25.95-19.06 0-.55.08-1.08.12-1.59v-.47c0-.36.07-.71.1-1.06l.05-.49c0-.35.08-.7.12-1v-.37c.06-.45.12-.89.18-1.32v-.17q.08-.55.17-1.07l.06-.36q.07-.42.15-.83l.07-.34q.09-.45.18-.88v-.18q.11-.52.23-1v-.17q.1-.39.2-.75l.07-.25.19-.64.07-.22c.08-.26.16-.51.25-.75.09-.25.18-.49.26-.73l.05-.14.21-.51.07-.17.21-.46.06-.13c.18-.37.35-.7.52-1l.07-.11.19-.31.08-.12.19-.28.06-.08.24-.32v-.06l.15-.18a2.58 2.58 0 011.15-.64c1.32 12.58 22.51 33.76 22.51 33.76 1.92 9 23 36.49 24.42 38.3l-7.87 6.05.11.07-.77.59 19.86 12.58q.25-.38.54-.74l.13.08a14 14 0 011.5-1.85 29.09 29.09 0 015.39-3.92 20.89 20.89 0 014.36 14.37c-.66 13.9 2 33.76 2 33.76s4 4 6.62-9.27c0 0 3.64 7 7 8.28s21.85 0 17.88-13.24c0 0-.41-.6-1.09-1.64a15.46 15.46 0 006.29-10.63l25.76-28.45 2 2s13.24-6.62 26.48-28.47c8.75-14.44 13.45-23.66 15.63-28.27l-9.67 29.59-2 25.82s-7.36 6.69-7.09 18.88a30.71 30.71 0 00.36 5.39c-3.45 10.34-6.75 31.53.78 70.39l3.31 61.57-7.94 96 2.18-.2 1.13 21.39-1.32 19.86s-6.62 25.16 9.27 27.14S714 767.79 714 767.79v-27.14l-2-7.94-1.29-9.45 15.85-82.57s6-17.88 7.94-25.16l.12-.46v-.16l.1-.43v-.19l.14-.63v-.06l.17-.8.05-.25.14-.66.06-.29.17-.85v-.14l.21-1.07.06-.33.17-.87.07-.36.19-1 .05-.29.25-1.31.06-.3.21-1.11.07-.39.22-1.18.06-.3.27-1.5.06-.32.22-1.23.1-.55.19-1.08.09-.52.29-1.61.05-.29.25-1.4.09-.53.21-1.19.1-.56.3-1.71v-.16l.28-1.61.08-.48.23-1.32.09-.52.61-3.5.1-.6.23-1.34.07-.4.31-1.78.31-1.81.08-.48.19-1.08.14-.8.22-1.29.06-.34.29-1.67.09-.52.19-1.12.1-.57.23-1.35v-.24l.27-1.61v-.08c1.59-9.38 2.74-16.28 2.74-16.28l5.3 70.18s.66 15.23 4 19.86l4 81.43h.69l-1.19 9.92-2 7.95v27.14s-2.65 27.81 13.24 25.82 9.27-27.14 9.27-27.14L778.23 744l1.19-22.52h.14s7.94-52.3 7.94-92.69c0-24.89 7.8-47.77 13.78-61.66 2.94 1.41 6.9-.71 10.79-4A38.23 38.23 0 00825.73 534v-7.16l3.74-31.05c3.22-1.44 5.75-3.39 6.35-6 0-.14.06-.32.09-.52a5.65 5.65 0 00.57-1.47c1.4-6.07-2.47-64.89-4.87-99a27.64 27.64 0 0010.84-1.8l-.52-.24c.4-.13.8-.27 1.19-.42a15.39 15.39 0 01-8.94-9.81 27.85 27.85 0 0012.45-7.29c.57-.55 1.11-1.11 1.61-1.7 1.92-2.26 3.37-5.32 1.84-7.8zM406.55 476.49c-.51 9.29-1.18 16.43-1.77 21.45l-1.27-1.59-2.32-19.72c2.61-.16 4.65-.15 5.36-.14zm-2.38-35.08l2.68-21.7c.55 15.14.59 28.26.35 39.42l-3-.5zm408.16 78.78a8.33 8.33 0 00-2.11 1.43 72.43 72.43 0 00-2.78-13.3c.2-.44.39-.9.57-1.37a11.68 11.68 0 00.39-1.32c.09-.22.18-.44.27-.67 3.49-9.3-1.19-47.16-2.38-56.27h3l2 51s1.32-.08 3.35-.32z"
          transform="translate(-176.17 -53.14)"
          fill="url(#Together_svg__e)"
        />
      </g>
      <path
        d="M512.99 661.96l1.28 24.4-1.28 19.26s-6.42 24.4 9 26.33 12.84-25 12.84-25v-26.36l-1.94-7.73-1.93-14.13zM598.39 659.4l-1.28 24.4 1.28 19.26s6.42 24.4-9 26.33-12.84-25-12.84-25v-26.37l1.93-7.71 1.93-14.13z"
        fill="#333"
      />
      <path
        d="M647.51 437.21l-4.33 36v6.94a37.08 37.08 0 01-13.25 28.22c-4.5 3.85-9.13 6.06-12 2.72-7.22-8.35 3.61-40.46 12.27-44.31l3.63-32.14z"
        fill="#fdb797"
      />
      <path
        d="M518.76 436.57s-14.77 16.7-3.21 76.42l3.21 59.72-7.7 93.15 20.55-2 15.41-80.27s5.78-17.34 7.71-24.4 11.56-64.86 11.56-64.86l5.14 68.07s.64 14.77 3.85 19.26l3.85 79 19.26 1.28s7.71-50.73 7.71-89.9 19.9-73.18 19.9-73.18 8.35-28.25-4.5-53.3-102.74-8.99-102.74-8.99z"
        fill="#3ad29f"
      />
      <g opacity={0.1}>
        <path d="M562.43 494.36s-9.6 57.8-11.6 64.86-7.71 24.4-7.71 24.4l-15.37 80.24-16.67 1.56v.36l20.53-1.92 15.41-80.27s5.78-17.34 7.71-24.4c1.27-4.66 5.9-31.41 8.9-49.07zM621.51 445.56c-5.81-11.33-27.38-14.25-49.26-14 20.51.18 39.94 3.39 45.41 14 12.84 25 4.5 53.3 4.5 53.3s-19.91 34-19.91 73.2c0 37.58-7.09 85.8-7.67 89.65l3.81.25s7.71-50.73 7.71-89.9 19.9-73.2 19.9-73.2 8.35-28.25-4.49-53.3z" />
      </g>
      <path
        d="M264.47 667.74l-3.21 20.55s-32.75 41.1-23.12 46.88 24.4 8.35 38.53-13.49a35.36 35.36 0 019-13.49 13.25 13.25 0 004.46-11.29l-3.17-31.74zM334.47 667.74l-3.21 20.55s-32.75 41.1-23.12 46.88 24.4 8.35 38.53-13.49a35.36 35.36 0 019-13.49 13.25 13.25 0 004.46-11.29l-3.17-31.74z"
        fill="#333"
      />
      <path
        d="M228.51 452.62l11.56 57.15 9.63 41.74 10.28 121.35h30.85s-6.42-20.55-2.57-37.89 2.57-55.2 2.57-55.2l7.71-69.35s11.56 69.35 16.7 75.13l13.49 84.12 31.42 3.19s2.57-69.35-6.42-89.26c0 0-3.85-36 0-59.08s2.57-83.48 2.57-83.48z"
        fill="#535461"
      />
      <g opacity={0.1}>
        <path d="M290.83 579.45l6.45-58c-1.2-6.8-2-11.31-2-11.31l-7.71 69.35s1.28 37.89-2.57 55.22 2.57 37.89 2.57 37.89h3.26s-6.42-20.55-2.57-37.89 2.57-55.26 2.57-55.26zM353.73 583.3s-3.85-36 0-59.08 2.57-83.48 2.57-83.48l-3.2.29c.09 4.46 1.13 61-2.57 83.19-3.85 23.12 0 59.08 0 59.08 8.64 19.12 6.61 83.87 6.43 88.93l3.2.33s2.56-69.35-6.43-89.26z" />
      </g>
      <path
        d="M278.6 231.73s2.57 39.81-12.2 44.31c0 0-3.85 27.61 19.26 33.39s36.6-41.1 36.6-41.1l-5.14-1.93s-7.71-18-5.14-25z"
        fill="#fda57d"
      />
      <path
        d="M477.67 404.46l-36.6 34 16.05 21.19s7.06-3.85 7.71-11.56l30.82-34z"
        fill="#fdb797"
      />
      <path
        d="M417.95 422.44s10.27 5.14 9.63 18.62 1.93 32.8 1.93 32.8 3.85 3.85 6.42-9c0 0 3.53 6.74 6.74 8s21.19 0 17.34-12.84c0 0-11.24-16.37-13.81-27.29l-12.84-18.62z"
        fill="#fda57d"
      />
      <path
        d="M262.55 277.32l21.83 24.4 45-27 25.64 175.34a5.12 5.12 0 010 7.06s-71.92 25-114.94 1.28z"
        opacity={0.1}
      />
      <path
        d="M262.55 279.25l21.83 24.4 45-27 25.69 175.31a5.12 5.12 0 010 7.06s-71.92 25-114.94 1.28z"
        opacity={0.1}
      />
      <path
        d="M262.55 277.96l21.83 24.4 45-27 25.69 175.31a5.12 5.12 0 010 7.06s-71.92 25-114.94 1.28z"
        fill="#e0e0e0"
      />
      <path
        d="M234.29 283.1s29.54-10.92 39.17-15.41c0 0-14.13 180.44-7.06 197.78 0 0-28.25-5.78-32.11-10.92 0 0 8.35-43.67 0-134.21z"
        opacity={0.1}
      />
      <path
        d="M233.65 282.46s29.54-10.92 39.17-15.41c0 0-14.13 180.44-7.06 197.78 0 0-28.25-5.78-32.11-10.92 0 0 8.35-43.67 0-134.21z"
        fill="#4d8af0"
      />
      <path
        d="M216.31 423.73l3.21 27.61s7.71 24.4 12.84 25.69 19.26-10.92 19.26-10.92l-18-22.48-3.79-32.77z"
        fill="#fda57d"
      />
      <path
        d="M437.83 421.16s-16.7 4.5-21.83 12.2l-19.26-12.2 8.35-6.42s-21.83-28.25-23.76-37.24c0 0-20.55-20.55-21.83-32.75 0 0-5.14.64-6.42 19.26s-1.93 33.39 2.57 47.52 3.85 34 3.21 36.6-20.55 21.83-52 24.4l-3.85-188.79 15.72-18.32s15.1 10.61 40.79 15.11c0 0 6.42 5.14 10.92 15.41s0 1.93 0 1.93l30.18 58.44 32.75 48.8 8.35-1.93zM229.83 411.53l-13.49 12.84.51 4.38c3.72-2.44 10-3.3 14.58-3.59z"
        opacity={0.1}
      />
      <path
        d="M438.5 420.52s-16.7 4.5-21.83 12.2l-19.26-12.2 8.35-6.42s-21.85-28.24-23.77-37.24c0 0-20.55-20.55-21.83-32.75 0 0-5.14.64-6.42 19.26s-1.91 33.39 2.56 47.49 3.85 34 3.21 36.6-20.55 21.83-52 24.4l-3.85-188.79 15.72-18.32s15.1 10.61 40.79 15.11c0 0 6.42 5.14 10.92 15.41s0 1.93 0 1.93l30.18 58.44 32.75 48.8 8.35-1.93z"
        fill="#4d8af0"
      />
      <path
        d="M566.93 279.25s6.42 16.05-9 17.34 19.91 43 19.91 43 32.75-7.06 37.89-21.19 3.85-19.91-3.85-26.33-19.91-3.21-19.91-3.21-8.35-4.5-5.78-11.56-19.26 1.95-19.26 1.95z"
        fill="#fdb797"
      />
      <path
        d="M579.77 298.51s-12.2 1.93-16.05-5.14c0 0-9.63 8.35-25 5.14s-28.9 56.51-28.9 56.51l-35.32 50.73 17.33 16.69s12.84-6.42 25.69-27.61 16.7-30.82 16.7-30.82L523.3 397.4l-1.93 25s-14.13 12.84-1.93 35.32c0 0 10.92 10.92 31.47-5.14l25-4.5s17.34 20.55 27 19.91 19.26-3.85 23.12-14.13-2.57-56.51-2.57-56.51h3.85l1.9 49.51s21.83-1.28 23.76-9.63-6.42-119.44-6.42-119.44-18-21.83-29.54-27.61-21.18 27.59-21.18 27.59l-14.78 13.49z"
        opacity={0.1}
      />
      <path
        d="M580.41 296.58s-8.67 1.61-12.52-5.46c0 0-13.16 8.67-28.58 5.46s-28.9 56.51-28.9 56.51l-35.31 50.77 17.34 16.7s12.84-6.42 25.69-27.61 16.7-30.87 16.7-30.87l-10.92 33.39-1.93 25s-14.15 12.89-1.93 35.39c0 0 10.92 10.92 31.47-5.14l25-4.5s17.34 20.55 27 19.91 19.26-3.85 23.12-14.13-2.57-56.51-2.57-56.51h3.85l1.91 49.43s21.83-1.28 23.76-9.63-6.4-119.43-6.4-119.43-18-21.83-29.54-27.61-21.19 27.61-21.19 27.61l-14.77 13.49z"
        opacity={0.1}
      />
      <path
        d="M579.77 297.23s-8.67 1.61-12.52-5.46c0 0-13.16 8.67-28.58 5.46s-28.9 56.51-28.9 56.51l-35.31 50.72 17.37 16.7s12.84-6.42 25.69-27.61 16.7-30.82 16.7-30.82l-10.92 33.39-1.93 25s-14.13 12.84-1.93 35.32c0 0 10.92 10.92 31.47-5.14l25-4.5s17.34 20.55 27 19.91 19.26-3.85 23.12-14.13-2.57-56.51-2.57-56.51h3.85l1.93 49.45s21.83-1.28 23.76-9.63-6.42-119.44-6.42-119.44-18-21.83-29.54-27.61-21.21 27.65-21.21 27.65l-14.77 13.49z"
        fill="#252a62"
      />
      <path d="M277.64 257.09s-17.66 8-15.73 18.94l10.05 3.05z" opacity={0.1} />
      <path
        d="M277.64 256.45s-17.66 8-15.73 18.94l10.05 3.05z"
        fill="#3a68b4"
      />
      <path
        opacity={0.1}
        d="M310.39 276.35l13.81 7.39v-16.06l-8.37-3.92-5.44 12.59z"
      />
      <path
        fill="#3a68b4"
        d="M310.39 275.71l13.81 7.39v-16.06l-8.37-3.93-5.44 12.6z"
      />
      <path
        d="M236.83 424.37s-22.48-.64-23.12 8.35c0 0-10.27-22.48-5.14-43s9-84.76 9-84.76 1.28-22.48 22.48-26.33 0 64.86 0 64.86l-5.78 46.88v16.7l3.85.64z"
        fill="#4d8af0"
      />
      <path
        opacity={0.1}
        d="M233.34 476.06l19.26-10.27 5.78 3.85-23.12 14.77-1.92-8.35z"
      />
      <path
        fill="#3e3f49"
        d="M232.69 475.42l19.27-10.28 5.78 3.86-23.12 14.76-1.93-8.34z"
      />
      <path
        opacity={0.1}
        d="M356.63 476.06l-19.27-10.27-5.78 3.85 23.12 14.77 1.93-8.35z"
      />
      <path
        fill="#3e3f49"
        d="M357.27 475.42L338 465.14l-5.77 3.86 23.11 14.76 1.93-8.34z"
      />
      <path
        d="M278.6 232.37s.2 3.09.17 7.65a31.83 31.83 0 0026 13.54 31.52 31.52 0 007.65-.94c-.91-4.05-1.34-8.05-.4-10.61z"
        opacity={0.1}
      />
      <ellipse cx={304.75} cy={220.16} rx={32.08} ry={32.75} fill="#fda57d" />
      <path
        opacity={0.1}
        d="M405.43 413.77l28.02-10.14.24.51-27.62 10.27-.64-.64zM207.77 410.86l26.52-4.66-.32.48s-26.58 4.59-25.81 6.79z"
      />
      <path d="M237.18 321.95s-1.93 31.47 2.57 40.46" fill="#4d8af0" />
      <g opacity={0.1}>
        <path d="M370.43 297.23l30.18 58.44 32.75 48.8.56-.13-32.67-48.68-29.27-56.68c1.58 4.05-1.55-1.75-1.55-1.75zM441.67 402.69l-3.84 17.83s-16.28 4.39-21.63 11.92l.44.28c5.14-7.71 21.83-12.2 21.83-12.2l3.85-18z" />
        <path d="M359.51 279.86s6.42 5.14 10.92 15.41c.62 1.42 1.07 2.48 1.38 3.26 1.05 1.85 2.52 4.19-.74-3.26-4.5-10.27-10.92-15.41-10.92-15.41-25.69-4.5-40.79-15.11-40.79-15.11l-.24.27c2.57 1.72 17.15 10.84 40.39 14.84zM353.73 363.37c1-14.69 4.42-18.19 5.82-19v-.25c0-.08-5.14.64-6.42 19.26s-1.93 33.39 2.57 47.52 3.85 34 3.21 36.6-20.32 21.55-51.41 24.36c31.47-2.57 51.37-21.83 52-24.4s1.28-22.48-3.21-36.6-3.84-28.87-2.56-47.49z" />
      </g>
      <path
        d="M344.42 309.75s13.49 28.9 12.84 30.18M335.43 399.65c1.93-.64 15.56-10 17.73-18.15M335.43 408.64c1.93-.64 15.56-10 17.73-18.15"
        opacity={0.1}
      />
      <circle cx={310.39} cy={309.74} r={1.93} fill="#fff" />
      <circle cx={310.39} cy={338.64} r={1.93} fill="#fff" />
      <circle cx={310.39} cy={321.3} r={1.93} fill="#fff" />
      <circle cx={311.04} cy={355.98} r={1.93} fill="#fff" />
      <circle cx={311.04} cy={384.87} r={1.93} fill="#fff" />
      <circle cx={311.04} cy={367.54} r={1.93} fill="#fff" />
      <circle cx={311.68} cy={402.21} r={1.93} fill="#fff" />
      <circle cx={311.68} cy={431.11} r={1.93} fill="#fff" />
      <circle cx={311.68} cy={413.77} r={1.93} fill="#fff" />
      <path
        d="M539.63 343.78s-1.93 26.33 3.85 34.68M618.62 346.99s8.35 25.69 3.21 43.67M509.77 355.02s10 21.51 13.81 21.51M322.75 216.86a21.14 21.14 0 0012.1 1.53 8.18 8.18 0 003.65-1.16c3.36-2.34 2.5-8 5.51-10.72 1.38-1.26 3.41-1.76 4.5-3.28a7.39 7.39 0 001.05-3.24c.76-4.86 1-10.71-2.9-13.74-4.57-3.58-11.34-.62-17-2-2.41-.58-4.54-2-6.75-3.08-9-4.57-19.35-5.26-29.41-5.26-5 0-10.16.16-15 1.55s-9.49 4.12-12.26 8.34a27.51 27.51 0 00-3.19 7.68 87.22 87.22 0 00-2.81 32.92c.44 4.15 1.35 8.59 4.45 11.38a13.16 13.16 0 007.24 3c3.69.46 8.23-.65 9.38-4.18.95-2.91-.52-7 2.06-8.6a5.77 5.77 0 013.52-.5l9.86.68c1.39.1 2.92.15 4-.72a5.08 5.08 0 001.5-3.57c.43-4.06-1.83-17.65 3.9-18.23s11.92 8.91 16.6 11.2z"
        opacity={0.1}
      />
      <path
        d="M322.11 216.23a21.14 21.14 0 0012.1 1.53 8.18 8.18 0 003.65-1.16c3.36-2.34 2.5-8 5.51-10.72 1.38-1.26 3.41-1.76 4.5-3.28a7.39 7.39 0 001.05-3.24c.76-4.86 1-10.71-2.9-13.74-4.57-3.58-11.34-.62-17-2-2.41-.58-4.54-2-6.75-3.08-9-4.57-19.35-5.26-29.41-5.26-5 0-10.16.16-15 1.55s-9.49 4.12-12.26 8.34a27.51 27.51 0 00-3.19 7.68 87.22 87.22 0 00-2.81 32.92c.44 4.15 1.35 8.59 4.45 11.38a13.16 13.16 0 007.24 3c3.69.46 8.23-.65 9.38-4.18.95-2.91-.52-7 2.06-8.6a5.77 5.77 0 013.52-.5l9.86.68c1.39.1 2.92.15 4-.72a5.08 5.08 0 001.5-3.57c.43-4.06-1.83-17.65 3.9-18.23s11.92 8.9 16.6 11.2z"
        fill="#72351c"
      />
      <path
        d="M586.83 277.96c2.57-7.06-19.26 1.93-19.26 1.93a20.45 20.45 0 011.23 8.7 31.48 31.48 0 0020.35-1.73c-1.93-2.06-3.7-5.11-2.32-8.9z"
        opacity={0.1}
      />
      <ellipse cx={577.67} cy={256.12} rx={32.08} ry={32.75} fill="#fdb797" />
      <path
        d="M565.25 237.98c5.65 1.13 11.73 3.66 13.29 8.4.74 2.26.35 4.8 1.74 6.83a13.64 13.64 0 003.32 2.93c5.27 3.9 9.32 9.83 7.72 15.61-1.18 4.27-5.23 7.69-6.22 12-1.18 5.12 2.17 10.11 5.05 14.73s5.43 10.18 2.77 14.89c-1.26 2.23-3.6 4-4.31 6.41-1.38 4.66 3.87 8.74 8.79 11.12a93 93 0 0018.57 6.64c3.33.81 6.77 1.46 9.75 3 1.9 1 3.54 2.25 5.4 3.26a22 22 0 0016.16 1.65l-5.11-7.25a27.11 27.11 0 0017.24-.58 14.82 14.82 0 01-8.78-10 26.79 26.79 0 0013.75-8.28c1.88-2.2 3.28-5.17 1.8-7.58s-4.69-3-7.43-4.14c-6.2-2.49-10.65-7.87-11.32-13.66-.45-3.92.59-8.29-2.07-11.52-1.15-1.4-2.87-2.38-4.3-3.59-3.05-2.58-4.67-6.12-6.07-9.57a146 146 0 01-8.65-30.31c-.79-4.64-1.38-9.4-3.7-13.66-5.34-9.8-18.54-14.68-31.09-16.44-4.95-.69-10.09-1-14.93.1a38 38 0 00-11.85 5.47c-5.8 3.73-13.08 9.11-15.18 15.31-2.39 7.01 10.06 7.11 15.66 8.23z"
        opacity={0.1}
      />
      <path
        d="M565.89 237.34c5.65 1.13 11.73 3.66 13.29 8.4.74 2.26.35 4.8 1.74 6.83a13.64 13.64 0 003.32 2.93c5.27 3.9 9.32 9.83 7.72 15.61-1.18 4.27-5.23 7.69-6.22 12-1.18 5.12 2.17 10.11 5.05 14.73s5.43 10.18 2.77 14.89c-1.26 2.23-3.6 4-4.31 6.41-1.38 4.66 3.87 8.74 8.79 11.12a93 93 0 0018.56 6.6c3.33.81 6.77 1.46 9.75 3 1.9 1 3.54 2.25 5.4 3.26a22 22 0 0016.16 1.65l-5.08-7.25a27.11 27.11 0 0017.24-.58 14.82 14.82 0 01-8.78-10 26.79 26.79 0 0013.75-8.28c1.88-2.2 3.28-5.17 1.8-7.58s-4.69-3-7.43-4.14c-6.2-2.49-10.65-7.87-11.32-13.66-.45-3.92.59-8.29-2.07-11.52-1.15-1.4-2.87-2.38-4.3-3.59-3.05-2.58-4.67-6.12-6.07-9.57a146 146 0 01-8.65-30.31c-.79-4.64-1.38-9.4-3.7-13.66-5.34-9.8-18.54-14.68-31.09-16.44-4.95-.69-10.09-1-14.93.1a38 38 0 00-11.85 5.47c-5.8 3.73-13.08 9.11-15.18 15.31-2.42 7.05 10.04 7.15 15.64 8.27z"
        fill="#f55f44"
      />
      <path
        d="M251.98 50.52c-2 0-4.25 0-5.79.1a8.17 8.17 0 00-2 .35l-10.36 3.13c8.37.18 17.09.12 25.65.07l48.06-.31c4.9 0 10.05-.07 14.14-.32 2.74-.16 4.76-.41 7.28-.6 9.1-.68 22.36-.55 34.21-.52s26.15-.23 30.32-1.23h-25.43c-2.74 0-5.62 0-8-.12-2.83-.14-4.55-.4-7-.58-4.11-.3-9.79-.33-15.07-.35-29.07-.07-57.7.5-86.01.38zM273.98 142.52c-2 0-4.25 0-5.79.1a8.17 8.17 0 00-2 .35l-10.36 3.13c8.37.18 17.09.12 25.65.07l48.06-.31c4.9 0 10.05-.07 14.14-.32 2.74-.16 4.76-.41 7.28-.6 9.1-.68 22.36-.55 34.21-.52s26.15-.23 30.32-1.23h-25.43c-2.74 0-5.62 0-8-.12-2.83-.14-4.55-.4-7-.58-4.11-.3-9.79-.33-15.07-.35-29.07-.07-57.7.5-86.01.38z"
        fill="#f4f4f4"
      />
    </svg>
  );
};

SvgTogether.propTypes = {
  color: PropTypes.string
};
SvgTogether.defaultProps = {
  color: "primary"
};
const MemoSvgTogether = React.memo(SvgTogether);
export default MemoSvgTogether;
