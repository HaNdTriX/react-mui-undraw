import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCircles = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1060 664.07"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Circles_svg__a"
          x1={543.54}
          y1={713.89}
          x2={543.54}
          y2={413.48}
          gradientTransform="matrix(-1 0 0 1 1022.18 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Circles_svg__b"
          x1={527.53}
          y1={653.3}
          x2={615}
          y2={653.3}
          gradientTransform="matrix(-1 0 0 1 1224.27 0)"
          xlinkHref="#Circles_svg__a"
        />
      </defs>
      <ellipse
        cx={811.5}
        cy={568.07}
        rx={119.5}
        ry={24}
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
      <path
        d="M430.54 495.11a27.37 27.37 0 001.19 2.61v.11s5.66 20.91 8.31 25.3c.77 1.27 1.64 2.65 2.5 4a8.89 8.89 0 000 3c.8 4.66 1.77 11.07 1.33 12.48s.53 4.92-1 6.14-3.1 3.34 1.59 6.15c0 0 .88 2.37.09 2.9-.09.06 0 .19.22.36-1.29 3.82-3.18 10-2 10.44.65.25 2.41-.67 4.34-1.91.05.25.09.52.14.79a38.15 38.15 0 001.42 6.07c.86 1.91 1.72 5.13 1.26 6.19s1.26 3.42.86 4.35 1.33 3.95 1.33 3.95 1.72 5.86 1.65 7.84 1.86 14.75 1.86 14.75-2 6.59-1 8.5 1.65 8.5 0 10.94-3.72 7.83-3.05 9.28-.93 19.37 3.11 26.75a82.26 82.26 0 011.13 8.3c0 2 3.18 7.31 3.18 7.31s-1.92 8 2.79 9.35a4.43 4.43 0 001 .19 4.49 4.49 0 01-.34 2.58 10.2 10.2 0 00-1.68 3.72 1 1 0 00.09.75c.53.59 2 8.5 2 8.5s2.12 8.89 13.79 6.72c0 0 7.89-.46 7.23-3.23a18.16 18.16 0 00-.86-2.68 17.33 17.33 0 01-.74-1.73c-.13-.66-1.79-2.51-1.92-3.76s-1.19-3.69-1-4.48-1.79-6.45-1.93-7.71a13.07 13.07 0 00-.75-2.56l.42-.2s1.06-5.93.14-8.1-4.58-5-4.58-5 .53-14.56-.13-16.54.33-9.48.33-9.48 2.25-10.61 2.12-13a11 11 0 01.66-4.35s1.4-15.61 2.32-17.59 2-21.34 2-21.34l.62 1.78a68.37 68.37 0 003.1 7.83c.51.8 2 3.36 3.28 5.5l1.89 3.2s.86 3.1.26 5 6.17 12.18 6.17 12.18a6.09 6.09 0 00-.66 2.77c.19 1-2.06 4.15-2.06 4.15s-.86 2.83-.33 3.82-.86 6.85-.86 6.85-2.26 12.91-2.79 14.43.27 11.92.27 11.92-4.16 10.65-2.23 14.19c.08 1.31.09 3.31-.42 4.12-.69 1.08-.49 5.07-.42 6.17v.29s-2.26 3 .59 4.22 12.54 2.1 12.54 2.1 9.21 2.64 13.65 3.36 13.73.46 14.39-2.24a7.21 7.21 0 00.24-2.58 3.21 3.21 0 00-1.83-2.56 75.24 75.24 0 00-8.36-2.77s-4.38-1-4.78-2.9-6.63-7.18-6.63-7.18-.07-.37-.2-.87h.2l-.3-.3c-.31-1-.81-2.32-1.42-2.07a1.5 1.5 0 01.68-2.06c2.39-1.31 3.85-5.46 3.18-9.94s-.79-3.69.6-6.26a12.3 12.3 0 001-6.19l3.67-13.68a20.7 20.7 0 001.06-5.2 9.72 9.72 0 011.06-4s1.66-9.49 3.12-11.66-1-9.82-1-9.82-2.25-11.85-2.12-17.26-5.84-24.17-5.84-24.17a6.28 6.28 0 01-.92-4.09c.12-1.12-.58-2.94-1.37-4.57l-.25-.51a4.43 4.43 0 011.09-1c1.64-1 2.41-3.63 2.42-5.48L487.64 503c0-.16 10.47-21.55 10.44-21.71-.62-3.51-6.54-12.82-6.54-12.82a.75.75 0 00-.25-.29c-1.33-.61-5.83-3.16-5.83-3.16-3.53-4.36-6.84-5.26-9-5.23a6.12 6.12 0 00-2 .31 4.41 4.41 0 00-.67.27l-.1.87a17.84 17.84 0 01.47-6c.05-.17.1-.35.14-.52h1a16.12 16.12 0 0016.17-16.07 16.32 16.32 0 00-.62-4.45l-.08-.23.5-.22c2-.74 4.51.52 6.13-.82a4.65 4.65 0 001.22-2.11 12.67 12.67 0 00.89-3.35v-.6a1.09 1.09 0 000-.18 1.7 1.7 0 000-.22v-.27c0-.09 0 0 0 0a3.89 3.89 0 00-.86-2c-1.06-1.24-2.83-1.54-4.17-2.45a10.09 10.09 0 01-2.67-3.13 11.64 11.64 0 00-2.59-3.19 3.81 3.81 0 00-3.89-.61 4.39 4.39 0 01-1.28.6 2.67 2.67 0 01-1.41-.38c-4.6-2.15-10-1.77-15-1.13a19.51 19.51 0 00-5.91 1.42 7 7 0 00-4 4.33c-.41 1.55-.1 3.23-.59 4.76-.34 1-1 1.92-1.42 2.93a6 6 0 00-.38 1.65v.16c-.17 2.27.72 4.66 1.15 7 .59 3.19.29 6.66 1.66 9.68a5.79 5.79 0 00.52 1.06c-.48 1-1 2.06-1.5 3.05-.74-.21-3-.71-3.08 1.27a10.78 10.78 0 01-1.1 4.64 3.29 3.29 0 01-.33.23.64.64 0 00-.37.65l-.26.2a.64.64 0 00-.32.11c-.14-.24-.6-.26-2.06 1.48a28.1 28.1 0 01-6.63 5.1s-9.82 6.85-10.35 10-3.81 16.91-2.13 21.48zm43.12-33.42v-.11l.12.06zm26.68 224a2.14 2.14 0 01-.84.17z"
        transform="translate(-70 -118.22)"
        fill="url(#Circles_svg__a)"
      />
      <path
        d="M407.73 595.33c-11.53 2.16-13.63-6.68-13.63-6.68s-1.44-7.86-2-8.45a1 1 0 01-.09-.75 10.24 10.24 0 011.66-3.7c.72-.85.13-4.39.13-4.39l13.36-3.4a20.05 20.05 0 011.31 3.93c.14 1.24 2.1 6.88 1.9 7.66s.86 3.21 1 4.46 1.77 3.08 1.9 3.73a14 14 0 00.72 1.73 16.83 16.83 0 01.85 2.66c.68 2.74-7.11 3.2-7.11 3.2z"
        fill="#444053"
      />
      <path
        d="M407.73 595.33c-11.53 2.16-13.63-6.68-13.63-6.68s-1.44-7.86-2-8.45a1 1 0 01-.09-.75l2.77 8s2.3 4.79 10.81 4.06c4.85-.4 7.23-1.3 8.39-2a16.83 16.83 0 01.85 2.66c.69 2.7-7.1 3.16-7.1 3.16z"
        opacity={0.1}
      />
      <path d="M398.75 582.88s2.89.07 3.08-2.29z" opacity={0.1} />
      <path
        d="M448.87 505.45c-1.44 2.16-3.08 11.59-3.08 11.59a9.92 9.92 0 00-1 4 20.26 20.26 0 01-1 5.18L440 539.78a12.27 12.27 0 01-1 6.15c-1.37 2.56-1.24 1.77-.59 6.23s-.78 8.58-3.14 9.89 1.05 4.39 1.05 4.39-15.07 4.06-18.22 1.57 1.64-14.8 1.64-14.8-.78-10.35-.26-11.86 2.75-14.35 2.75-14.35 1.38-5.83.85-6.81.33-3.8.33-3.8 2.23-3.15 2-4.13a6.16 6.16 0 01.66-2.75s-6.68-10.22-6.1-12.12-.26-5-.26-5-.84-1.45-1.86-3.18c-1.24-2.13-2.74-4.67-3.25-5.47a69.83 69.83 0 01-3.05-7.78l-.62-1.78s-1 19.26-2 21.22-2.29 17.5-2.29 17.5a10.88 10.88 0 00-.66 4.32c.13 2.42-2.1 13-2.1 13s-1 7.47-.32 9.44.13 16.44.13 16.44 3.6 2.82 4.52 5-.13 8.06-.13 8.06-10.48 5.24-15.14 3.86-2.75-9.3-2.75-9.3-3.14-5.24-3.14-7.27a82.19 82.19 0 00-1.12-8.26c-4-7.34-2.42-25.15-3.07-26.6s1.37-6.81 3-9.23 1-9 0-10.88 1-8.45 1-8.45-1.9-12.71-1.83-14.67-1.64-7.8-1.64-7.8-1.7-3-1.31-3.93-1.31-3.28-.85-4.32-.4-4.26-1.25-6.16a39.49 39.49 0 01-1.4-6c-.4-2.26-.69-4.25-.69-4.25l10.81-8.71 27-7.08 10.24-3.33 9.89 15.59s1 1.63 1.93 3.51c.78 1.62 1.47 3.43 1.35 4.55a6.27 6.27 0 00.92 4.06s5.89 18.67 5.76 24 2.1 17.17 2.1 17.17 2.42 7.63.98 9.79z"
        fill="#3f3d56"
      />
      <path
        d="M388.21 515.21s11.53-4.91 14.93-1.44-14.93 1.44-14.93 1.44zM394.69 517.17s-11.69 6.61-7.69 7.67 7.69-7.67 7.69-7.67zM429.54 511.48s-5 .32-3.08 1.31 3.08-1.31 3.08-1.31zM435.77 512.98c-.07.33-14.48 5-11.66 7.08s11.66-7.08 11.66-7.08zM389.91 553.07c2.16-.32 14.22-5.89 9.5-1.89a9.4 9.4 0 01-9.5 1.89zM395.87 557.46s1.05 4.07 5.05 3.54-5.05-3.54-5.05-3.54zM392.53 565.72c.72-.2 9.3-4.13 9.5-2.29s-8.19 5-8.84 4.06a3.52 3.52 0 01-.66-1.77zM420.31 561c1-.06 10.87-3.21 12.84-.39zM429.22 562.84s1.7-1.51 3.4-.72-3.4.72-3.4.72zM407.47 579.08a2.92 2.92 0 002.22 2.3z"
        opacity={0.1}
      />
      <path
        d="M457.45 585.24c-.65 2.69-9.83 2.95-14.21 2.23s-13.5-3.34-13.5-3.34-9.56-.92-12.38-2.1-.59-4.19-.59-4.19v-.28c-.07-1.1-.26-5.07.41-6.14.79-1.25.33-5.31.33-5.31s13.56 2.62 13.82 1.38 2.36-3 3.34-3.41 1.71 3.28 1.71 3.28 6.16 5.24 6.55 7.14 4.71 2.88 4.71 2.88a73.26 73.26 0 018.26 2.75 3.18 3.18 0 011.81 2.54 7.14 7.14 0 01-.26 2.57z"
        fill="#444053"
      />
      <path
        d="M457.45 585.24c-.65 2.69-9.83 2.95-14.21 2.23s-13.5-3.34-13.5-3.34-9.56-.92-12.38-2.1-.59-4.19-.59-4.19v-.28l13.71 3s6.75 2.88 11.07 2.88c3.78 0 12.23 1.55 16.16-.8a7.14 7.14 0 01-.26 2.6z"
        opacity={0.1}
      />
      <path d="M438.91 574.89s-.65 4.32-3.27 5.77z" opacity={0.1} />
      <path
        d="M480.9 415.65c-3.9 1.48-12.9 1.64-16.9 1.64h-2l-2.57-5.24 2.57-4.37s2.36-.65 5.5-1.22c4.63-.83 11-1.48 14 .39 5.04 3.13 4.5 6.93-.6 8.8z"
        fill="#a1616a"
      />
      <path
        d="M421.33 352.94l1.14-1.31s5.85 9.26 6.46 12.75 1.4 7.51 1.4 7.51 1.48 4.54 2.45 6.55a22.15 22.15 0 011.92 4.81c.08.87-.35 2.79 1.48 4s2.27 4.54 2.27 4.54 6.64 6.46 10.14 6.64 13.53 1.92 13.19 3.66 4.19 2.8 6 3.24-11.78 5.69-3.78 12.45c0 0-5.07 1-5.59 2.27s-5.85-.7-5.85-.7-1.14-2.71-5.07-2.88-5.94-1.92-5.94-2.18-3.93-2.45-6.11-3.06-5.07-.87-5.16-1.49-13.1-56.77-13.1-56.77z"
        fill={color}
      />
      <path
        d="M421.33 353.16l1.14-1.31s5.85 9.26 6.46 12.76 1.4 7.51 1.4 7.51 1.48 4.54 2.45 6.55a22.32 22.32 0 011.92 4.8c.08.88-.35 2.8 1.48 4s2.27 4.54 2.27 4.54 6.64 6.47 10.14 6.64 13.53 1.92 13.19 3.67 4.19 2.8 6 3.23-11.78 5.7-3.78 12.43c0 0-5.07 1-5.59 2.27s-5.85-.7-5.85-.7-1.14-2.71-5.07-2.88-5.94-1.92-5.94-2.19-3.93-2.44-6.11-3.05-5.07-.88-5.16-1.49-13.1-56.78-13.1-56.78z"
        opacity={0.05}
      />
      <path
        d="M555 590.56c66 0 119.5 10.75 119.5 24s-53.5 24-119.5 24-119.5-10.74-119.5-24"
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
      <path
        fill="#444053"
        d="M513.594 93.098l16.849 2.86-21.257 125.279-16.85-2.86z"
      />
      <path fill="#d0d2d5" d="M550.34 598.75l3.74 26.7 3.2-27.76-6.94 1.06z" />
      <path
        fill="#3f3d56"
        d="M430.2 583.8v16.56l3.74 14.41h2.67l3.21-15.48 1.6-18.69-11.22 3.2z"
      />
      <path
        d="M422.59 519.2l8 1.6s-9.07 25.09-2.67 30.43h-10.13s-3.74-19.22 4.8-32.03z"
        fill="#d0d2d5"
      />
      <path
        d="M422.59 519.2l8 1.6s-9.07 25.09-2.67 30.43h-10.13s-3.74-19.22 4.8-32.03z"
        opacity={0.1}
      />
      <path
        d="M476.12 217.53l-25.63 162.31s-37.9 173-23.49 207.17h18.16l54.46-332.1zM541.12 197.37l19.65 163.14s14.31 207.83-1.36 241.44h-15.48l-27.66-368.09z"
        fill="#d0d2d5"
      />
      <path
        d="M473.73 158.23a21 21 0 0120.71-15c15.81.4 40.25 3.28 53 16.34 19.76 20.29-13.35 88.63-13.35 88.63s-31 57.13-59.26-15.48c-.04.06-11.76-38.82-1.1-74.49z"
        fill="#444053"
      />
      <path
        d="M473.73 158.23a21 21 0 0120.71-15c15.81.4 40.25 3.28 53 16.34 19.76 20.29-13.35 88.63-13.35 88.63s-31 57.13-59.26-15.48c-.04.06-11.76-38.82-1.1-74.49z"
        opacity={0.1}
      />
      <path
        d="M484.6 172.11a15 15 0 0114.75-10.66c11.25.29 28.65 2.34 37.7 11.64 14.07 14.44-9.5 63.1-9.5 63.1s-22 40.67-42.2-11c0-.03-8.35-27.68-.75-53.08z"
        fill="#444053"
      />
      <path
        d="M609.33 706.12c.17 2.58.57 5.29 2.2 7.31 2.7 3.34 7.61 3.6 11.81 4.65a52 52 0 019.34 3.68l9.09 4.3a23.69 23.69 0 00-6.82 1.42c-1.17.43-2.45 1.14-2.62 2.36a2.52 2.52 0 001.51 2.42 7.12 7.12 0 003 .53 100.83 100.83 0 0016.2-.85l.64-.09q4.14 2.05 8.24 4.19c1.14.6 2.51 0 3.47-.84a18.4 18.4 0 003.08-3.52c.16.28.32.55.45.82.88 1.69 1.71 3.9.45 5.34-1 1.12-2.89 1.31-3.46 2.67a2.41 2.41 0 00.93 2.71 6.16 6.16 0 002.91 1 25.83 25.83 0 007.45-.06 6 6 0 003.6-1.53 6.6 6.6 0 001.28-4l1.71-19.43a5.83 5.83 0 00-.2-2.76c-.68-1.65-2.65-2.34-4.43-2.63h-.19c1.48 0 3-.07 4.6-.07a11 11 0 004.12-.52c2.54-1 3.91-3.67 5-6.13 2-4.32 4.3-9 4-13.8l-.78-.35c-.07-5.11-2.21-9.88-3-14.87a8.28 8.28 0 001.33-4.5 16.64 16.64 0 00-1.13-5.12c-3.17-9.42-6.34-18.87-10.58-27.87a96.41 96.41 0 00-10-17q-1.53-2-3.18-4c-.8-.92-2.59-2.22-2.92-3.39s.37-2.31 0-3.51a5.94 5.94 0 00-.36-.91c2.34-3.1 1.68-7.58.86-11.44l-1-4.81a13 13 0 00-1.24-3.81 11.13 11.13 0 00-2.39-2.71c-4.92-4.44-11-7.39-16.53-11.07-5.85-3.89-11.08-8.62-16.32-13.29-1.6-1.42-3.61-2.95-5.68-2.35s-2.93 2.84-3 4.88a10.06 10.06 0 003.25 7.54c3.62 3.31 9.09 3.58 13.4 5.92a31.35 31.35 0 014.21 2.93l12.52 9.83a4.35 4.35 0 011.95 2.54 4.09 4.09 0 01-.3 1.88c-.47 1.44-1.27 3.25-1.86 5.08l-1-.72a39.2 39.2 0 00-6.63-4 32.91 32.91 0 00-9.71-2.33c-7.39-.83-14 .31-18.52 6.48a13.7 13.7 0 01-3.51 3.61 13 13 0 00-2.85 1.81c-2.32 2.57-1 6.83 1.18 9a14 14 0 006.58 3.43 13.52 13.52 0 0016.42 7.36 20.1 20.1 0 01.09 3.88 4.47 4.47 0 001.41 3.59 5.88 5.88 0 001.72.8 26.39 26.39 0 016.23 3.25 32 32 0 00-5.52 8.25 13.42 13.42 0 001 12.48l.06.08a4.14 4.14 0 01-.91 1.68 3 3 0 01-4.13-.42 15.72 15.72 0 01-2.16-3.33 13.94 13.94 0 00-9-6.36 7.23 7.23 0 00-4.15.17 3.66 3.66 0 00-2.41 3.12c0 1.51 1.1 2.76 2.18 3.83a63.59 63.59 0 0011 9.1 35.41 35.41 0 003.37 1.84q-3-.63-5.92-1.23a26.77 26.77 0 00-8.35-.73 9.32 9.32 0 00-7 4.08 9 9 0 00-.65 6.8 22.86 22.86 0 003.07 6.3 44.85 44.85 0 007.67 9.6c-2.5.75-5 1.57-7.44 2.47s-5 2-6.12 4.24a9.72 9.72 0 00-.61 5.1zm36.81-34h.09a3.13 3.13 0 001.31-1.11 18.14 18.14 0 003.16-6.84 7.71 7.71 0 001.7-.43 3.8 3.8 0 00-1.18 2.76l5.64 2.76a2.1 2.1 0 011 .79 2 2 0 01.11 1.18c-.16 1.29-.41 2.58-.57 3.86-1.69-.5-3.35-.9-4.84-1.3-2.12-.58-4.27-1.12-6.42-1.66z"
        transform="translate(-70 -118.22)"
        fill="url(#Circles_svg__b)"
      />
      <path
        d="M577.19 500.78a10.81 10.81 0 008.4-1.35 5.15 5.15 0 011.63-.76 3.32 3.32 0 012.78 1.11c2.4 2.39 2.68 6.33 1.44 9.48s-3.73 5.63-6.34 7.78a57.55 57.55 0 01-6.67 4.74 12.36 12.36 0 00-6.84-6.65c-2.74-1.06-4.74-3.9-6.31-6.38-1.17-1.84-2.21-1.76-1.16-3.66a27.68 27.68 0 014.16-5 16.25 16.25 0 002.24-3c.7-1.26.54-2.08 1.62-1.08.71.66 1 2.09 1.82 2.86a8 8 0 003.23 1.91zM585.78 481.28a4.23 4.23 0 00.29-1.85 4.34 4.34 0 00-1.91-2.51l-12.23-9.7a30 30 0 00-4.1-2.89c-4.22-2.31-9.55-2.58-13.09-5.84a10.05 10.05 0 01-3.18-7.45c0-2 1-4.26 2.89-4.82s4 .92 5.56 2.33c5.11 4.6 10.21 9.27 15.92 13.11 5.4 3.64 11.35 6.54 16.16 10.93a10.88 10.88 0 012.23 2.61 13.4 13.4 0 011.21 3.77l1 4.74c.84 4 1.52 8.65-1.17 11.72a4.27 4.27 0 01-3.26 1.61 6.42 6.42 0 01-2.51-.86c-2-1-5.62-2-6.23-4.5-.78-3.13 1.47-7.5 2.42-10.4zM566.27 543.78a16 16 0 01-2.11-3.28 13.61 13.61 0 00-8.78-6.28 7.06 7.06 0 00-4 .16 3.61 3.61 0 00-2.35 3.09c0 1.48 1.07 2.72 2.12 3.77a62 62 0 0010.76 9 28.38 28.38 0 0013.09 4.54 3.3 3.3 0 001.4-.13 3.13 3.13 0 001.28-1.09c2.48-3.18 3.34-7.31 4-11.28-.24 1.43-8.29-1.91-9.2-1.48-1.34.63-1.21 2.51-2.18 3.41a2.89 2.89 0 01-4.03-.43zM624.92 575.2a2.65 2.65 0 01-.28 1.45c-.55.86-1.79.87-2.8.72a51.18 51.18 0 01-6.89-1.66l-20.53-5.93a1.87 1.87 0 01-.88-.43 1.82 1.82 0 01-.41-.9 24.15 24.15 0 01-.45-9 2.4 2.4 0 01.41-1.21 2.42 2.42 0 011.7-.64 87 87 0 019.68-.44 48.85 48.85 0 006.29-.14c2.7-.32 5.81-1.87 8.52-1.63 2.35.2 2.25 2 2.49 4 .67 5.31 3.1 10.39 3.15 15.81z"
        fill="#fabdbd"
      />
      <path
        d="M559.37 550.83a25.61 25.61 0 00-8.16-.73 9.08 9.08 0 00-6.83 4 8.89 8.89 0 00-.64 6.72 23.25 23.25 0 003 6.21 40.83 40.83 0 008.77 10.56c1.75 1.39 3.68 2.54 5.36 4 3.58 3.13 5.8 7.5 7.93 11.75 2 4 4 8.08 4.86 12.48a1.25 1.25 0 00.43.89 1.19 1.19 0 00.89.06l9.85-1.82a1.54 1.54 0 001.38-2.34 68.92 68.92 0 00-11.75-25.41 22.55 22.55 0 0019.82 5.74 7.74 7.74 0 003.76-1.63c2.2-2 2.1-5.41 1.61-8.32a61.07 61.07 0 00-1.82-7.67c-1.85-6-9.83-7.62-15.24-9.08q-11.52-3.05-23.22-5.41z"
        fill="#3f3d56"
      />
      <path
        d="M566.66 572.09a10.83 10.83 0 013.74 2.48c-1.77-2-6.83-3-9.31-3.93-3.07-1.14-6.42-2.31-9-4.34a107.88 107.88 0 0114.57 5.79z"
        opacity={0.1}
      />
      <path
        d="M598.56 614.24c.85 1.68 1.66 3.85.44 5.28-.94 1.1-2.82 1.29-3.38 2.63a2.39 2.39 0 00.91 2.68 5.88 5.88 0 002.84 1 25.37 25.37 0 007.28-.06 5.84 5.84 0 003.51-1.51 6.58 6.58 0 001.25-4l1.67-19.18a6 6 0 00-.19-2.73c-.67-1.63-2.59-2.3-4.33-2.59a23.24 23.24 0 00-5.89-.24 6.22 6.22 0 00-3.67 1.26 7.09 7.09 0 00-1.73 4c-.45 2.28-1.71 5.44-1.44 7.75.17 1.91 1.89 4.03 2.73 5.71zM576.48 608.04a23.35 23.35 0 00-11.11 1.25c-1.14.42-2.39 1.13-2.56 2.33a2.49 2.49 0 001.48 2.39 7 7 0 002.94.53 99.64 99.64 0 0015.82-.84 8.51 8.51 0 003.85-1.21 3 3 0 001.21-3.56c-.63-1.32-2.35-1.73-3.18-2.92-.6-.86-.75-2.13-1.69-2.58a2.89 2.89 0 00-2.15.16c-1 .35-3.4.7-4.09 1.53a11.49 11.49 0 00-.52 2.92z"
        fill={color}
      />
      <circle cx={562.32} cy={498.14} r={13.13} fill="#fabdbd" />
      <path
        d="M593.46 492.36c-2.11-1.55-4.77-2.08-7.34-2.56a3.84 3.84 0 00-2.64.13 3.9 3.9 0 00-1.27 1.56 14.52 14.52 0 00-1.74 4.15 4.82 4.82 0 001 4.23c.78.8 1.9 1.2 2.7 2a5 5 0 011.18 4.32 12.93 12.93 0 01-1.75 4.27 72.33 72.33 0 01-6.58 9.68c-2.55 3.17-5.41 6.22-6.91 10a13.38 13.38 0 001 12.32c2.43 3.54 7.27 5.44 11.28 3.91a3.72 3.72 0 00-1.14 2.72l5.5 2.73a2.08 2.08 0 011 .78 2 2 0 01.1 1.16 36.47 36.47 0 00-.67 6.73c.15 2.25 1.18 4.62 3.22 5.6 1.87.9 4.09.42 6.13 0a76.53 76.53 0 0114.47-1.52c2.42 0 4.92.06 7.15-.88a8.5 8.5 0 005.07-7.69 16.4 16.4 0 00-1.11-5.06c-3.09-9.3-6.19-18.62-10.33-27.51a96.65 96.65 0 00-9.81-16.8c-1-1.33-2-2.64-3.11-3.91-.78-.91-2.53-2.19-2.85-3.35s.36-2.28 0-3.46a7 7 0 00-2.55-3.55z"
        fill={color}
      />
      <path
        d="M625.68 575.47c-5.76-2.66-11.52-5.32-17.51-7.39-4.41-1.52-9.33-2.71-13.66-1-1.3.52-2.48 1.27-3.73 1.88-4.19 2-9 2.34-13.63 2.85a128 128 0 00-30.15 7.17c-2.33.86-4.84 2-6 4.18a9.57 9.57 0 00-.64 5c.17 2.55.56 5.23 2.15 7.22 2.64 3.3 7.43 3.55 11.53 4.59a50.53 50.53 0 019.13 3.64c9.58 4.57 19.17 9.14 28.57 14.09 1.1.59 2.44 0 3.38-.83a20.79 20.79 0 005.9-9.72 41.94 41.94 0 001.5-11.38c3.68 0 6.67-.16 10.35-.16a10.7 10.7 0 004-.51c2.47-1 3.81-3.63 4.92-6.05 1.98-4.27 4.21-8.9 3.89-13.58z"
        fill="#3f3d56"
      />
      <path
        d="M558.8 589.14c2.59-1.26 5.59-1.29 8.48-1.27a28.06 28.06 0 015.26.4 41.53 41.53 0 017.69 2.89 48.82 48.82 0 0019.38 3.8"
        opacity={0.1}
      />
      <path
        d="M543.86 500a14.32 14.32 0 007.08 3.55c2.6.6 5.28.83 7.9 1.41 3.22.71 6.74 2.41 7.47 5.63a18.7 18.7 0 01.1 3.89 4.41 4.41 0 001.35 3.51 6 6 0 001.68.79 28 28 0 0118 25.84 12.73 12.73 0 006.18-9.12c0 3.48 3 7 1.3 10.11a16 16 0 003.85-23.25c-1.32-1.68-3-3.08-4.38-4.69a21.74 21.74 0 01-5.18-16.6c.29-2.53 1-5.09.47-7.58-.77-3.45-3.8-5.85-6.68-7.9a38.39 38.39 0 00-6.48-3.94 31.86 31.86 0 00-9.49-2.31c-7.21-.81-13.62.31-18.09 6.4a13.17 13.17 0 01-3.42 3.56 12.89 12.89 0 00-2.79 1.79c-2.29 2.54-.99 6.74 1.13 8.91z"
        fill="#3f3d56"
      />
      <path
        d="M409 353.59c-.41-.17-28.91-11.94-25-14.28 2.33-1.39 5.2-7.27 7.16-11.88 1.37-3.21 2.3-5.81 2.3-5.81s22.88-4.06 14.69 10a26.09 26.09 0 00-2.89 6.91c-2.36 9.5 3.51 14.88 3.74 15.06z"
        fill="#a1616a"
      />
      <path
        d="M408.12 331.58a26.09 26.09 0 00-2.89 6.91 16 16 0 01-13.5-9.5 14 14 0 01-.6-1.56c1.37-3.21 2.3-5.81 2.3-5.81s22.88-4.06 14.69 9.96z"
        opacity={0.1}
      />
      <path
        d="M422.34 322.02a16 16 0 01-30.61 6.45 15.79 15.79 0 01-1.36-6.45 16 16 0 0131.35-4.43 16.18 16.18 0 01.62 4.43z"
        fill="#a1616a"
      />
      <path
        d="M437.76 445.87a9.73 9.73 0 00-2.32 4.42s-7.86 5.37-7.34 2-4.1-17.2-4.1-17.2l.52 18.74s-25.15-1.18-27-3-12.52-5.39-12.52-5.39-3.29 2.64-6.32 4.64c-.4-2.26-.69-4.25-.69-4.25l10.81-8.71 27-7.08 10.14-3.26 9.89 15.59s1.02 1.62 1.93 3.5z"
        opacity={0.1}
      />
      <path
        d="M438.58 444.39c-2.09 1.31-2.88 4.85-2.88 4.85s-7.86 5.37-7.34 2-4.06-17.16-4.06-17.16l.53 18.74s-25.16-1.18-27-3-12.58-5.37-12.58-5.37-9.3 7.47-11 6.81 3-13.36 3-13.36l4.84-74.42s-1.31-22.14.66-22.93a2.6 2.6 0 00.82-.52c1.3-1.16 1.69-3.52 1.8-5.51.13-2.35 3.27-1.18 3.27-1.18l-1.83 2.36 16.24 9.87.14.09a19.49 19.49 0 012-.89c1.44-.55 3.35-1.07 4.6-.55a4.51 4.51 0 011.72 1.55 19.17 19.17 0 012.21 4.48l5.9 9.95s3 13.24 3 13.76.92 12.58 2 13.89 2.1 7.86 1.71 9.83.65 9.3.65 9.3c4.33 3.54 6.55 15.59 6.55 15.59s6.82 13.5 7.34 15.07-.19 5.44-2.29 6.75z"
        fill="#444053"
      />
      <path
        d="M403.07 346.04c-1.6 2.36-6.2 5.67-6.2 5.67l-13.28-11.21c1.3-1.16 1.69-3.53 1.8-5.51.13-2.36 3.27-1.18 3.27-1.18l-.38.49a2.12 2.12 0 00.57 3.1z"
        opacity={0.1}
      />
      <path
        d="M403.07 345.51c-1.6 2.36-6.2 5.68-6.2 5.68l-13.28-11.22c1.3-1.16 1.69-3.52 1.8-5.51.13-2.35 3.27-1.18 3.27-1.18l-.38.49a2.12 2.12 0 00.57 3.1z"
        fill="#444053"
      />
      <path
        d="M409.21 347.28c-1.72 2.05-4.15 4.38-4 3.21s-1.45-3.74-2.44-4.89a7.3 7.3 0 014.76.13 4.51 4.51 0 011.68 1.55z"
        opacity={0.1}
      />
      <path
        d="M409.47 346.49c-1.72 2.06-4.15 4.38-4 3.22s-1.29-3.06-2.29-4.21c1.44-.55 3.35-1.07 4.6-.55a4.4 4.4 0 011.69 1.54z"
        fill="#444053"
      />
      <path
        d="M383.6 340.62s.17-1.57-2.1 1.14a27.69 27.69 0 01-6.5 5.02s-9.69 6.82-10.22 10-3.67 16.77-2 21.31 14.33 26.3 14.33 26.3-3.32 3.93-2.54 8.56 1.75 11 1.31 12.4.53 4.89-1 6.11-3.05 3.32 1.58 6.12c0 0 .87 2.36.08 2.88s11.62 5.94 16.51 3.06 13.72-25.94 13.89-31.1-2.71-22.18-4.28-26.2-6.29-19.66-8.3-23.15-10.76-22.45-10.76-22.45z"
        opacity={0.1}
      />
      <path
        d="M383.07 340.62s.18-1.57-2.09 1.14a27.69 27.69 0 01-6.55 5.06s-9.7 6.82-10.22 10-3.67 16.77-2 21.31 14.32 26.3 14.32 26.3-3.32 3.93-2.53 8.56 1.75 11 1.31 12.4.52 4.89-1 6.11-3.06 3.32 1.57 6.12c0 0 .88 2.36.09 2.88s11.62 5.94 16.51 3.06 13.71-25.94 13.89-31.1-2.71-22.18-4.28-26.2-6.29-19.66-8.3-23.15-10.72-22.49-10.72-22.49z"
        fill={color}
      />
      <path
        d="M379.58 355.47s7.51 8.3 7.25 13.8c0 0 .09-8.91-7.25-13.8zM404.93 343.59s4.87-3 11 4.63c0 0 4.45 2.53 5.76 3.15s2.8 16.85 2.8 16.85 2.88 7 2.09 11 2.28 17.82 2.28 17.82 5.06 24.81 4.89 25.5-5.16-7.77-5.07-12-4.19-17.3-4.8-18.08-4.81-23.24-4.81-23.24-3.4-9.52-5.59-12.66-4.89-9.09-6-10.14a11.55 11.55 0 00-2.7-1.74z"
        opacity={0.1}
      />
      <path
        d="M404.87 343.59s5.46-3 11.57 4.63c0 0 4.46 2.53 5.77 3.15s2.79 16.85 2.79 16.85 2.88 7 2.1 11 2.27 17.82 2.27 17.82 5.07 24.81 4.89 25.5-5.15-7.77-5.07-12-4.19-17.3-4.8-18.08-4.8-23.24-4.8-23.24-3.41-9.44-5.59-12.61-4.9-9.09-6-10.14a10.93 10.93 0 00-3.23-1.74z"
        fill={color}
      />
      <path
        d="M428.85 398.18s10.39-6.81 15.41-3.45 13.24 8.13 5.16 11.58-19.26 2.79-19.26 2.79z"
        fill="#a1616a"
      />
      <path
        d="M421.62 463.91c-1.55 3.33-2.83 20-3.7 25.32-1.24-2.13-2.74-4.67-3.25-5.47a69.83 69.83 0 01-3.05-7.78c1-2.4 3.71-9.28 3.71-11.8 0-3.08 5-6.95 5-6.95a5.78 5.78 0 011.29 6.68zM421.72 317.59a4.74 4.74 0 01-.78.32c-1.23.33-2.43-.5-3.52-1.16s-2.6-1.15-3.55-.29c-1.23 1.12-.34 3.51-1.61 4.59-.8.69-2.07.45-3 1s-1.16 1.8-1.39 2.86-.67 2.28-1.72 2.59-2-.37-3-.34c-.21 0-.46 0-.6-.12a.64.64 0 01-.1-.47 10.24 10.24 0 00-.34-3.79 3.63 3.63 0 00-2.66-2.5c-1.84-.28-3.39 1.33-4.47 2.85a46.4 46.4 0 00-3.09 5c-.05.09-.1.21-.16.35a15.79 15.79 0 01-1.36-6.45 16 16 0 0131.35-4.43z"
        opacity={0.1}
      />
      <path
        d="M395 322.88c1.08-1.52 2.63-3.13 4.47-2.85a3.64 3.64 0 012.66 2.49 10.07 10.07 0 01.33 3.79.7.7 0 00.11.48c.14.16.39.13.6.12 1 0 2.05.63 3 .34s1.5-1.53 1.72-2.59.47-2.28 1.39-2.86 2.17-.33 3-1c1.27-1.08.38-3.48 1.61-4.59.95-.86 2.46-.37 3.55.29s2.29 1.49 3.52 1.16a10.39 10.39 0 001.19-.51c1.95-.74 4.47.52 6.06-.81a4.71 4.71 0 001.21-2.1 12.9 12.9 0 00.88-3.33 4.48 4.48 0 00-.88-3.26c-1-1.22-2.8-1.53-4.13-2.43a10.14 10.14 0 01-2.63-3.11 11.49 11.49 0 00-2.56-3.18 3.76 3.76 0 00-3.85-.6 4 4 0 01-1.26.59 2.52 2.52 0 01-1.39-.38c-4.54-2.14-9.83-1.76-14.81-1.12a19.06 19.06 0 00-5.84 1.41 7 7 0 00-3.94 4.31c-.4 1.54-.09 3.21-.58 4.73-.33 1-1 1.91-1.4 2.92-1.06 2.76.21 5.8.75 8.71.59 3.18.29 6.62 1.64 9.63.27.59.56 1.62 1.23 1.23.49-.29 1-2 1.25-2.49a48.14 48.14 0 013.1-4.99z"
        fill="#3f3d56"
      />
      <path
        d="M366.22 374.08l-2.36 6.7s5.59 20.79 8.21 25.16 6.46 10 6.46 10a24 24 0 0014 1.74c7.51-1.48 29.43-5.41 29.43-5.41a2.92 2.92 0 002.8-1.05c1-1.4 5.94-2.1 5.94-2.1s5.76-8.38-1.31-11.88c0 0-.87 1.93-4.63.61s-4.89 1.05-4.89 1.05-6.12 1.23-9.52.79-11.88-.61-12.76-1.31a1.11 1.11 0 00-1.57.09 9.53 9.53 0 01-2.79-1.58c-.7-.78-1.66.88-1.66.88s-1.23-.7-.88-1.57-1.13-4.2-1.13-4.2a8.46 8.46 0 01-.26-3.93c.43-1.75-2.19-8-2.19-8a11.34 11.34 0 01.35-3.15c.44-1.57-3.32-4.72-3.32-4.72s-3.67-17.81-11.44-12-6.48 13.88-6.48 13.88z"
        opacity={0.1}
      />
      <path
        d="M365.69 374.08l-2.36 6.7s5.59 20.79 8.21 25.16 6.47 10 6.47 10a23.94 23.94 0 0014 1.74c7.52-1.48 29.44-5.41 29.44-5.41a2.92 2.92 0 002.8-1.05c1-1.4 5.94-2.1 5.94-2.1s5.76-8.38-1.31-11.88c0 0-.88 1.93-4.63.61s-4.9 1.05-4.9 1.05-6.11 1.23-9.52.79-11.88-.61-12.75-1.31a1.11 1.11 0 00-1.57.09 9.54 9.54 0 01-2.8-1.58c-.7-.78-1.66.88-1.66.88s-1.22-.7-.87-1.57-1.14-4.2-1.14-4.2a8.61 8.61 0 01-.26-3.93c.44-1.75-2.18-8-2.18-8a10.91 10.91 0 01.35-3.15c.43-1.57-3.32-4.72-3.32-4.72s-3.67-17.81-11.44-12-6.5 13.88-6.5 13.88z"
        fill={color}
      />
      <path
        d="M387.27 394.34s-8.56 1.75-5.68 3.23 5.68-3.23 5.68-3.23z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M402.11 321.04a3.6 3.6 0 00-2.66-2.49c-1.84-.28-3.39 1.33-4.47 2.84a48.28 48.28 0 00-3.1 5c-.28.52-.76 2.2-1.25 2.49-.67.39-1-.65-1.23-1.24-1.35-3-1-6.45-1.64-9.63a55.71 55.71 0 01-1.13-5.61c-.2 2.28.7 4.68 1.13 7 .59 3.18.29 6.62 1.64 9.63.27.59.56 1.62 1.23 1.23.49-.29 1-2 1.25-2.48a47.24 47.24 0 013.1-5c1.08-1.52 2.63-3.13 4.47-2.84a3.6 3.6 0 012.66 2.49 6.84 6.84 0 01.35 2 9 9 0 00-.35-3.39zM429.4 312.78a4.62 4.62 0 01-1.21 2.09c-1.59 1.33-4.11.08-6.06.82-.4.15-.77.39-1.19.51-1.23.32-2.43-.5-3.52-1.16s-2.6-1.16-3.55-.3c-1.23 1.12-.34 3.51-1.61 4.59-.8.69-2.07.45-3 1s-1.16 1.79-1.39 2.85-.67 2.28-1.72 2.59-2-.37-3-.33c-.21 0-.46 0-.6-.12a.28.28 0 01-.07-.13v1.05a.69.69 0 00.11.47c.14.16.39.13.6.13 1 0 2.05.62 3 .33s1.5-1.52 1.72-2.59.47-2.27 1.39-2.85 2.17-.33 3-1c1.27-1.08.38-3.47 1.61-4.59.95-.86 2.46-.37 3.55.29s2.29 1.49 3.52 1.16a12.45 12.45 0 001.19-.5c1.95-.74 4.47.51 6.06-.82a4.67 4.67 0 001.21-2.09 13.08 13.08 0 00.88-3.34 5.09 5.09 0 000-1.17 14.81 14.81 0 01-.92 3.11z" />
      </g>
      <ellipse cx={255} cy={565.57} rx={40.92} ry={7.87} fill={color} />
      <ellipse cx={254.32} cy={562.23} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={254.32} cy={554.61} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={254.32} cy={546.99} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={254.32} cy={539.36} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={254.32} cy={531.74} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={254.32} cy={524.12} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={254.32} cy={516.5} rx={4.76} ry={6.24} fill="#3f3d56" />
      <path
        d="M272.15 464.34a22.27 22.27 0 001.77-2.62l-12.51-2.05 13.53.1a22.87 22.87 0 00.44-18.08l-18.16 9.42L274 438.78a22.82 22.82 0 10-37.69 25.54 22.52 22.52 0 00-2.6 4.16l16.24 8.44-17.32-5.82a22.78 22.78 0 003.68 21.43 22.82 22.82 0 1035.87 0 22.82 22.82 0 000-28.21z"
        fill={color}
      />
      <path
        d="M231.39 478.44a22.71 22.71 0 004.89 14.11 22.82 22.82 0 1035.87 0c3.06-3.88-40.76-16.67-40.76-14.11z"
        opacity={0.1}
      />
      <ellipse cx={940} cy={638.57} rx={40.92} ry={7.87} fill={color} />
      <ellipse cx={939.32} cy={635.23} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={939.32} cy={627.61} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={939.32} cy={619.99} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={939.32} cy={612.36} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={939.32} cy={604.74} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={939.32} cy={597.12} rx={4.76} ry={6.24} fill="#3f3d56" />
      <ellipse cx={939.32} cy={589.5} rx={4.76} ry={6.24} fill="#3f3d56" />
      <path
        d="M957.15 537.34a22.27 22.27 0 001.77-2.62l-12.51-2.05 13.53.1a22.87 22.87 0 00.44-18.08l-18.16 9.42L959 511.78a22.82 22.82 0 10-37.69 25.54 22.52 22.52 0 00-2.6 4.16l16.24 8.44-17.32-5.82a22.78 22.78 0 003.68 21.43 22.82 22.82 0 1035.87 0 22.82 22.82 0 000-28.21z"
        fill={color}
      />
      <path
        d="M916.39 551.44a22.71 22.71 0 004.89 14.11 22.82 22.82 0 1035.87 0c3.06-3.88-40.76-16.67-40.76-14.11z"
        opacity={0.1}
      />
      <circle cx={404.43} cy={93.69} r={15.27} fill={color} opacity={0.1} />
      <circle cx={459.06} cy={25.6} r={25.6} fill={color} opacity={0.1} />
      <circle cx={425.18} cy={149.82} r={25.6} fill={color} opacity={0.1} />
      <circle cx={963.93} cy={277.69} r={15.27} fill={color} opacity={0.1} />
      <circle cx={909.29} cy={209.6} r={25.6} fill={color} opacity={0.1} />
      <circle cx={943.18} cy={333.82} r={25.6} fill={color} opacity={0.1} />
      <circle cx={100.77} cy={305.35} r={8.65} fill={color} opacity={0.1} />
      <circle cx={137.85} cy={272.61} r={14.5} fill={color} opacity={0.1} />
      <circle cx={68.45} cy={295.1} r={14.5} fill={color} opacity={0.1} />
      <circle cx={741.77} cy={253.35} r={8.65} fill={color} opacity={0.1} />
      <circle cx={778.85} cy={220.61} r={14.5} fill={color} opacity={0.1} />
      <circle cx={709.45} cy={243.1} r={14.5} fill={color} opacity={0.1} />
      <circle cx={216.58} cy={142.32} r={36.25} fill={color} opacity={0.1} />
      <circle cx={423.58} cy={262.32} r={20.92} fill={color} opacity={0.1} />
      <circle cx={630.58} cy={398.32} r={20.92} fill={color} opacity={0.1} />
      <ellipse
        cx={255}
        cy={568.57}
        rx={119.5}
        ry={24}
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
      <ellipse
        cx={940}
        cy={639.57}
        rx={119.5}
        ry={24}
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
      <ellipse
        cx={120}
        cy={639.57}
        rx={119.5}
        ry={24}
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
    </svg>
  );
};

SvgCircles.propTypes = {
  color: PropTypes.string
};
SvgCircles.defaultProps = {
  color: "primary"
};
const MemoSvgCircles = React.memo(SvgCircles);
export default MemoSvgCircles;
