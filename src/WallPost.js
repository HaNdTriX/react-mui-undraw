import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWallPost = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1094 798.15"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="WallPost_svg__a"
          x1={639.03}
          y1={672.43}
          x2={639.03}
          y2={50.93}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="WallPost_svg__b"
          x1={319.12}
          y1={309.68}
          x2={319.12}
          y2={212.15}
          xlinkHref="#WallPost_svg__a"
        />
        <linearGradient
          id="WallPost_svg__c"
          x1={332.56}
          y1={304.74}
          x2={332.56}
          y2={246.12}
          gradientTransform="matrix(-1 0 0 1 652 0)"
          xlinkHref="#WallPost_svg__a"
        />
        <linearGradient
          id="WallPost_svg__d"
          x1={803.65}
          y1={796.85}
          x2={803.65}
          y2={184.5}
          xlinkHref="#WallPost_svg__a"
        />
      </defs>
      <path
        d="M66.37 119.37c10.2 17.75 4.55 40.79-6.53 58S33 208.24 20.72 224.66c-24.41 32.76-30.72 84.49.06 111.41 6.63 5.8 14.83 10.39 18.87 18.21 5.58 10.79 1.45 23.79-2.76 35.22l-.35.94C20.63 433.57 44.07 481.37 88 494.9c24.31 7.49 46.25 19.63 62.49 39.26 14.19 17.16 22.39 38.33 31.75 58.53 16.92 36.49 38.76 71.38 68.94 97.95s69.56 44.18 109.76 42.73c91.82-3.31 159.43-100 251.16-105.09 6.61-.37 13.65-.12 19.18 3.52 7.8 5.14 10.19 15.23 13.47 24 17.37 46.43 69.67 67.83 116.5 84.09l88 30.58c47.8 16.6 98 33.45 148 25.76s98.82-48.75 96.65-99.31c-1.78-41.53-36.2-78.08-31.69-119.41 3.12-28.56 24.51-52.55 28.09-81.06 3.73-29.67-12.49-58.16-31.16-81.52-53.72-67.24-130.28-111.56-205-154.31-52.63-30.12-105.53-60.36-162.19-82-139.68-53.21-293.2-50.92-442-65.44-25.59-2.5-52.34-5.44-75.79-16.75-18-8.68-32.07-28.75-51.82-33-15.05-3.24-37.31 3.45-50.45 10.76-23.95 13.42-17.35 24.59-5.52 45.18z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M1040.87 50.93H237.18a28 28 0 00-27.88 28.15v565.2a28 28 0 0027.88 28.15h803.69a28 28 0 0027.88-28.15V79.08a28 28 0 00-27.88-28.15z"
        transform="translate(-53 -50.93)"
        fill="url(#WallPost_svg__a)"
      />
      <path
        d="M1012.12 59.88v526.73a27.64 27.64 0 01-27.64 27.64H187.89a27.64 27.64 0 01-27.64-27.64V59.88z"
        fill="#f6f7f9"
      />
      <path
        d="M368.34 331.37v282.87H187.89c-15.26 0-27.64-12.62-27.64-28.18V331.37zM430.12 124.37h346.82v9.75H430.12zM430.12 193.73h209.17v9.75H430.12zM685.9 193.73h70.45v9.75H685.9z"
        fill="#dde1ec"
      />
      <path fill={color} d="M224.19 437.04h70.45v9.75h-70.45z" opacity={0.1} />
      <path
        fill="#dde1ec"
        d="M685.9 284.77h70.45v9.75H685.9zM685.9 375.81h70.45v9.75H685.9zM685.9 224.08h70.45v9.75H685.9zM807.28 224.08h70.45v9.75h-70.45zM685.9 254.42h70.45v9.75H685.9zM807.28 254.42h70.45v9.75h-70.45zM807.28 310.78h70.45v9.75h-70.45zM807.28 341.13h70.45v9.75h-70.45zM807.28 406.16h70.45v9.75h-70.45zM430.12 224.08h209.17v9.75H430.12zM430.12 254.42h209.17v9.75H430.12zM430.12 284.77h209.17v9.75H430.12zM430.12 315.12h209.17v9.75H430.12zM430.12 345.46h209.17v9.75H430.12zM430.12 375.81h209.17v9.75H430.12zM430.12 406.16h209.17v9.75H430.12z"
      />
      <path fill={color} d="M160.25 59.34h208.09v277.45H160.25z" />
      <path
        d="M1012.12 31.7a27.64 27.64 0 00-27.64-27.63H187.89a27.64 27.64 0 00-27.64 27.64v31.43h851.87z"
        fill="#e8eaf1"
      />
      <circle cx={193.85} cy={33.33} r={10.84} fill="#ff5252" />
      <circle cx={229.61} cy={33.33} r={10.84} fill="#ff0" />
      <circle cx={265.38} cy={33.33} r={10.84} fill="#69f0ae" />
      <path
        d="M325 198.07a60.41 60.41 0 01-13.52 38.17c-.33.41-.66.81-1 1.21a1.64 1.64 0 00-.18.22 61 61 0 01-10.47 9.59l-.5.37c-.69.49-1.39 1-2.1 1.42l-.49.31-1.05.65a5.33 5.33 0 01-.48.27 3.21 3.21 0 01-.41.25c-1.54.9-3.13 1.73-4.76 2.49-.18.1-.38.18-.57.27s-.41.2-.63.28-.65.29-1 .42a59.06 59.06 0 01-10.83 3.4 60.5 60.5 0 01-10.75 1.31h-1.98a60.59 60.59 0 01-14.17-1.63l-.87-.21q-3.06-.8-6-1.86c-1.19-.44-2.37-.92-3.52-1.43-.29-.13-.57-.25-.86-.39l-.87-.39-.76-.39-.8-.41-.89-.47-1-.57-.16-.09a60.93 60.93 0 01-11.78-8.71c-.3-.29-.61-.57-.9-.88s-.63-.62-.93-.94A60.69 60.69 0 11325 198.07z"
        fill="#fff"
      />
      <path
        d="M360 270.62a17.33 17.33 0 01-.59 2.67 2.47 2.47 0 01-.13.4c0-.38-.07-.78-.09-1.21-.3-4.45-.56-11.48.34-15.64.85-3.91-5.34-2.72-9.47.78a10.89 10.89 0 00-2.88 3.61c-.09-.12-.18-.23-.28-.35a10.9 10.9 0 00-8.2-4.05 27.91 27.91 0 01-17.43-7.64c-.2-.81-.35-1.61-.47-2.42 0-.25-.08-.51-.11-.76a15.07 15.07 0 004.63-7.81v-.12a15.1 15.1 0 00.38-3.32c0-.46 0-.9-.05-1.34 0-.16 0-.33-.05-.49s0-.38-.08-.56a6.61 6.61 0 00.73-.38 8.38 8.38 0 003.24-3.67v-.08a13.83 13.83 0 00.64-1.66 20.07 20.07 0 00.83-5v-.65c0-1.31-.26-2.95-1.54-3.22-1.69-.36-2.92 2.19-4.63 1.92a2.6 2.6 0 01-1.34-.81c-1.16-1.15-1.94-2.63-3.1-3.79a10.6 10.6 0 00-6.62-2.81 25 25 0 00-7.28.67 12.26 12.26 0 00-3.76 1.28 4.48 4.48 0 00-2.25 3.09 4.41 4.41 0 000 .85v1.29a4.8 4.8 0 01-.07.55 4.57 4.57 0 01-2.31 2.76c-1.06.63-2.24 1.07-3.25 1.79a8.51 8.51 0 00-3.13 5 13.22 13.22 0 00-.35 3.39 22.43 22.43 0 00.17 3.08 33.06 33.06 0 002.86 9.92 15.84 15.84 0 001.42 2.5c.14.2.28.38.43.55a15.09 15.09 0 003.23 2.73l.69.47a2 2 0 001.71.44 1.82 1.82 0 00.52-.3 4 4 0 001.25-3.15v-.16a1 1 0 010 .17 1.64 1.64 0 010 .23h.1a14.8 14.8 0 010 1.53 5.59 5.59 0 010 .62v.35l-.16.14c-.33.28-.93.77-1.76 1.42a52.89 52.89 0 01-11.24 6.69 16 16 0 00-9.21 10.23 35.89 35.89 0 01-4.37 9.47c-.48.7-1.8 6-3.34 11.44.3.33.62.64.93.94s.6.59.9.88a60.93 60.93 0 0011.78 8.71l.16.09 1 .57.89.47c0-.75-.1-1.44-.15-2.09 0-.39-.06-.76-.1-1.12.23-.38.43-.72.62-1 0 .29.07.61.1 1 .11 1 .22 2.23.34 3.64q0 .67.1 1.4c0-.49-.05-1-.09-1.4l.76.39.87.39c.28.14.56.26.86.39 1.15.51 2.33 1 3.52 1.43q2.91 1.07 6 1.86l.87.21a60.59 60.59 0 0014.19 1.67h1.98a60.5 60.5 0 0010.84-1.35 59.06 59.06 0 0010.83-3.4q.49-.2 1-.42c.22-.09.42-.18.63-.28s.39-.17.57-.27c-1-3.51-1.54-5.76-1.54-5.76l1.32-3.39.16-.41.4-1.05c0 .13.06.26.11.39a15.93 15.93 0 004.7 7.49 5.33 5.33 0 00.48-.27l1.05-.65.49-.31c.72-.47 1.41-.93 2.1-1.42l.5-.37a61 61 0 0010.47-9.59l.18-.22c.34-.4.67-.8 1-1.21zm-8.72 4.56a1.1 1.1 0 01.09.15l-.08-.07z"
        transform="translate(-53 -50.93)"
        fill="url(#WallPost_svg__b)"
      />
      <path
        d="M351.44 273.31v.08l.07.07c-.02-.06-.05-.1-.07-.15zm-61.16 30c-.1-1.4-.2-2.66-.29-3.74-.07-.76-.14-1.44-.2-2a.18.18 0 010-.08v-.4a23 23 0 00-2.36 4.7l.16.09 1 .57.89.47.8.41q0 .67.1 1.4c-.05-.48-.07-.94-.1-1.39zm13.31-57.17l.05.09a.23.23 0 010 .07.39.39 0 00-.05-.13z"
        transform="translate(-53 -50.93)"
        fill="url(#WallPost_svg__c)"
      />
      <path
        d="M268 185s-3.61 16.22 6.31 24.79-23.43 15.28-29.31 8.11 4.08-10.83 4.08-10.83 5-4.06 0-16.22z"
        fill="#e0a17e"
      />
      <path
        d="M277 257.41a60.5 60.5 0 01-10.75 1.31h-1.98a60.59 60.59 0 01-14.16-1.65l-.87-.21q-3.06-.8-6-1.86l-1-15 4.34-20.77 2.55-12.24.72-3.42.73 1 .16.22.2.26 8 10.65 8.19-8.82.42-.46 2.25-2.43.85-.91.4 3.09 1.44 11.11 2.67 20.49z"
        fill="#f0f1f5"
      />
      <path
        d="M299.32 247.63c-.69.49-1.39 1-2.1 1.42l-.49.31-1.05.65a5.33 5.33 0 01-.48.27 3.21 3.21 0 01-.41.25 16.08 16.08 0 01-4.79-7.06 11 11 0 01-.3-1.06 1 1 0 010-.17l-.57 1.5-1.75 4.33s.52 2.12 1.45 5.48q-.49.23-1 .42a59.06 59.06 0 01-10.83 3.4 60.5 60.5 0 01-10.75 1.31h-.55a99.44 99.44 0 01-.53-14l1.32-25.17.67-12.7.37-7s.13.14.38.37.42.4.72.67a27 27 0 0016 6.61 10.62 10.62 0 018.32 4.42 19.59 19.59 0 013.39 8.65l.3 2.75.08.78.11 1z"
        opacity={0.1}
      />
      <path
        d="M299.82 247.27l-.5.37c-.69.49-1.39 1-2.1 1.42l-.49.31-1.05.65a16.58 16.58 0 01-5.18-7.22 2.77 2.77 0 01-.12-.36c-.11-.35-.21-.72-.29-1.08l-.41 1.07-.56 1.45-1.28 3.34s.59 2.4 1.63 6.1c-.21.1-.41.2-.63.28s-.65.29-1 .42a59.06 59.06 0 01-10.83 3.4 60.5 60.5 0 01-10.75 1.31 99.49 99.49 0 01-.63-14.92l1.28-24.39.68-13 .33-6.13.06-1.27a2 2 0 00.17.17 27.09 27.09 0 0017 7.49 10.62 10.62 0 018.24 4.31 19.54 19.54 0 013.48 8.76l.53 4.93v.07l.11 1z"
        fill="#293158"
      />
      <path
        d="M251.2 202.07v.61l-.16 2.32-.56 7.94s-.33 2.29-.57 7.45c-.35 6.8-.56 18.58.25 36.7l-.87-.21q-3.06-.8-6-1.86c-1.19-.44-2.37-.92-3.52-1.43-.29-.13-.57-.25-.86-.39-.29-4-.64-6.45-.64-6.45s-.27.34-.68 1c-.17.27-.38.6-.6 1l-.05.09q-.29.5-.62 1.14c-.25.5-.5 1-.74 1.63l-1-.57-.16-.09a60.93 60.93 0 01-11.78-8.71c1.61-5.67 3-11.37 3.5-12.1a34.76 34.76 0 004.25-9.27 15.71 15.71 0 019-10 36.5 36.5 0 0011.79-8.8h.02z"
        opacity={0.1}
      />
      <path
        d="M251.21 201.79a54.08 54.08 0 01-12.81 8.07 15.71 15.71 0 00-9 10 34.76 34.76 0 01-4.25 9.27c-.49.73-1.89 6.44-3.5 12.12.29.3.6.59.9.88a60.93 60.93 0 0011.78 8.71l.16.09a22.88 22.88 0 012.2-4.24l.05-.08c.35-.52.57-.8.57-.8s.09.66.22 1.85.3 3 .46 5.1l.87.39c.28.14.56.26.86.39 1.15.51 2.33 1 3.52 1.43q2.91 1.07 6 1.86c-.82-17.94-.64-29.76-.31-36.73.26-5.62.61-8.11.61-8.11l1.27-7.3.36-2.06.17-1z"
        fill="#293158"
      />
      <path
        d="M257.64 200.78a14.81 14.81 0 01-6.49-1.49 29.17 29.17 0 00-2.07-7.53l18.92-5.85a36.22 36.22 0 00-.39 11 14.82 14.82 0 01-9.97 3.87z"
        opacity={0.1}
      />
      <circle cx={257.64} cy={185.01} r={14.87} fill="#e0a17e" />
      <path
        d="M287.86 254.01c-1.17-4.11-1.82-6.81-1.82-6.81l2.25-5.86a12.65 12.65 0 00.77 2.4l.05.13-1.28 3.34s.59 2.4 1.63 6.1c-.21.1-.41.2-.63.28s-.65.29-.97.42z"
        opacity={0.1}
      />
      <path
        d="M305.41 226.01s-1.35-13.07 0-19.38-15.77.9-12.17 9.46a73.58 73.58 0 007.21 13.52z"
        fill="#e0a17e"
      />
      <path
        d="M310.29 237.67a61.05 61.05 0 01-10.47 9.59l-.5.37c-.69.49-1.39 1-2.1 1.42a42.26 42.26 0 01-4.3-6.13l-.13-.23 3.61-18.93.38.39c.16.15.37.35.62.55h.05c1.87 1.6 5.82 4 7.72-1.58a16.85 16.85 0 00.69-3l.37 1.38.22.81 4 15.09z"
        opacity={0.1}
      />
      <path
        d="M310.29 237.67a61 61 0 01-10.47 9.59l-.5.37c-.69.49-1.39 1-2.1 1.42l-.49.31a43.62 43.62 0 01-3.94-5.78l.13-.67 3.48-18.26s.18.21.49.5l.62.55c.26.22.56.46.89.68 2.07 1.42 5.22 2.49 6.82-2.5a16.89 16.89 0 00.64-2.84l.46 1.7z"
        fill="#293158"
      />
      <path
        d="M310.29 237.67a61 61 0 01-10.47 9.59l-.5.37c-.69.49-1.39 1-2.1 1.42l-.49.31a43.62 43.62 0 01-3.94-5.78l.13-.67 3.48-18.26s.18.21.49.5l.62.55c.26.22.56.46.89.68 2.07 1.42 5.22 2.49 6.82-2.5a16.89 16.89 0 00.64-2.84l.46 1.7z"
        opacity={0.02}
      />
      <path
        d="M236.79 246.65l-.05.08v-.15c.63-2.19 1.2-3.67 1.71-4.11 0 0 .67 4.45 1.27 11.12-.29-.13-.57-.25-.86-.39l-.87-.39c-.15-2.15-.31-3.9-.46-5.1s-.22-1.85-.22-1.85-.17.27-.52.79zM257.82 180.91a4.08 4.08 0 012.55-.46 2.91 2.91 0 011 .7c1.17 1.11 2.33 2.4 3.91 2.74a7.56 7.56 0 002.93-.13 14 14 0 004.82-1.47c3.35-2 4.42-6.33 4.63-10.22.07-1.31-.2-3-1.49-3.28-1.64-.35-2.84 2.14-4.5 1.87a2.51 2.51 0 01-1.3-.79c-1.13-1.13-1.9-2.58-3-3.72a10.31 10.31 0 00-6.44-2.76 24.08 24.08 0 00-7.09.67 11.65 11.65 0 00-3.65 1.25 4.39 4.39 0 00-2.2 3c-.11.87.12 1.77-.05 2.63a4.42 4.42 0 01-2.24 2.71c-1 .62-2.18 1-3.16 1.76a8.37 8.37 0 00-3.05 4.86 16.46 16.46 0 00-.16 5.83 32.28 32.28 0 002.78 9.72 13.77 13.77 0 001.81 3 16.81 16.81 0 003.65 3 2.22 2.22 0 001.83.55 1.59 1.59 0 00.51-.3c1.28-1.07 1.4-3 1-4.63s-1.08-3.18-1.16-4.84a2.33 2.33 0 01.26-1.35 6 6 0 01.9-.91 5.44 5.44 0 001-1.69 16.53 16.53 0 001.55-4.86 6.55 6.55 0 00-.87-4 5.17 5.17 0 005.23 1.12z"
        opacity={0.1}
      />
      <path
        d="M257.82 180.39a4.08 4.08 0 012.55-.46 2.91 2.91 0 011 .7c1.17 1.11 2.33 2.4 3.91 2.74a7.56 7.56 0 002.93-.13 14 14 0 004.82-1.47c3.35-2 4.42-6.33 4.63-10.22.07-1.31-.2-3-1.49-3.28-1.64-.35-2.84 2.14-4.5 1.87a2.51 2.51 0 01-1.3-.79c-1.13-1.13-1.9-2.58-3-3.72a10.31 10.31 0 00-6.44-2.76 24.08 24.08 0 00-7.09.67 11.65 11.65 0 00-3.65 1.25 4.39 4.39 0 00-2.2 3c-.11.87.12 1.77-.05 2.63a4.42 4.42 0 01-2.24 2.71c-1 .62-2.18 1-3.16 1.76a8.37 8.37 0 00-3.05 4.86 16.46 16.46 0 00-.16 5.83 32.28 32.28 0 002.78 9.72 13.77 13.77 0 001.81 3 16.81 16.81 0 003.65 3 2.22 2.22 0 001.83.55 1.59 1.59 0 00.51-.3c1.28-1.07 1.4-3 1-4.63s-1.08-3.18-1.16-4.84a2.33 2.33 0 01.26-1.35 6 6 0 01.9-.91 5.44 5.44 0 001-1.69 16.53 16.53 0 001.55-4.86 6.55 6.55 0 00-.87-4 5.17 5.17 0 005.23 1.12z"
        fill="#463e3b"
      />
      <ellipse cx={176} cy={557.1} rx={25.19} ry={9.25} fill="#cd9494" />
      <ellipse cx={176} cy={556.07} rx={12.85} ry={4.72} opacity={0.05} />
      <path
        d="M150.8 555.07s27.76 15.42 50.38 2.06c0 0-3.08 53.47-18.51 58.61h-20.55s-17.48-36.03-11.32-60.67z"
        fill="#ff7361"
      />
      <path
        d="M197.75 457.07c7.07 25.83-23.07 99.41-23.07 99.41s-63.39-48-70.46-73.82a48.484 48.484 0 1193.53-25.59z"
        fill={color}
      />
      <path
        d="M197.75 457.07c7.07 25.83-23.07 99.41-23.07 99.41s-63.39-48-70.46-73.82a48.484 48.484 0 1193.53-25.59z"
        opacity={0.1}
      />
      <path
        d="M138.45 423.24s39.46 59.57 36.49 133.37"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M207.82 504.27S172 484.8 176.57 556.66c0 0 29.85-1.07 40.44-25.42a21.12 21.12 0 00-8.66-26.67z"
        fill={color}
      />
      <path
        d="M208.41 504.39s-4.62 37.3-31.84 52.27"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M197.82 558.84c-1 12.3-5.31 50.5-18.22 54.81h-18.43c.59 1.31.95 2.06.95 2.06h20.57c15.41-5.15 18.5-58.64 18.5-58.64a37.44 37.44 0 01-3.37 1.77z"
        opacity={0.05}
      />
      <path fill="#dde1ec" d="M430.12 472.81h209.17V594.2H430.12z" />
      <path
        d="M1035.83 284.14a8.76 8.76 0 000-1.18c-.36-4.88-5-8.41-9.6-10.29s-9.74-2.8-13.81-5.65c-6.88-4.82-9-13.83-9.62-22.07-.19-2.56-.27-5.12-.28-7.69s.16-5.41.4-8.11c.4-4.48 1.06-9.12 1-13.61a26.15 26.15 0 00-2.4-12.45c-4.08-8.06-13.24-12.18-21.72-15.69-3.26-1.35-6.6-2.72-10.14-2.87-3.74-.16-7.38 1.05-10.92 2.25-5.62 1.9-11.32 4.37-17.13 5.66-3.26.72-6.83.18-10 1.33-6.22 2.28-7.55 7.87-7.45 14v1.16c-.62-.57-1.26-1.11-1.91-1.63l-.38-.3q-1-.81-2.13-1.53l-.36-.23a35.84 35.84 0 00-4.79-2.61l-.25-.11q-1.25-.55-2.54-1l-.16-.06a36.46 36.46 0 00-5.46-1.44 36.37 36.37 0 00-32.52 10.22l-6.87 7c-31.23-7-32.63 20.13-32.63 20.13l.23-.05-.08.19a96.44 96.44 0 002.69 10.16L595.83 494l-24.38 75.56 13.69-4.88 62.54-22.34 223.94-228.76c16.76 11.91 34.18 27.87 34.18 27.87s-10.8 5.71-6.8 31.87c4.89 32-2.46 77.55-2.46 77.55v29.46l1.38-.38c-.17 1-.35 2-.52 3.15a168.08 168.08 0 00-.86 44.72c3.7 31.26 18.48 73.94 18.48 73.94s5.54 15 6.78 27.05a25.22 25.22 0 001.58 6.95 55.26 55.26 0 014.32 20.87c0 13.08 1.71 32.71 9.5 52.74 6.25 16.08 8.56 25.5 9.25 31-4.43 5.86-10.22 12.25-14.79 12.89-8.62 1.2-25.26 2.4-14.17 16.83a10.21 10.21 0 001.29 1.37c-8.42 1.36-17.68 4.36-8.68 16.06 11.09 14.43 76.39 7.82 76.39 7.82s.42-8 0-16.82c4.58-.32 7.41-.61 7.41-.61s1.85-34.87-6.16-39.08a16.9 16.9 0 00-4.32 1.06c-.86-4.82-1.52-10.81-1.93-15.25l3.17-.24v-52.3s-3.7-32.46-17.25-46.89a29.15 29.15 0 01-4.43-6c.1-4.17.11-10 .06-16.73a13.89 13.89 0 011.91-2.52s7.39-9 32.65-66.13c14.9-33.69 11.58-53.14 6.35-63.44-1-3.66-3.6-14.11-7-33.35-4.31-24.65.62-48.7.62-48.7s16-41.48 23.41-58.31a27.39 27.39 0 002.08-12.85c1.93-1.41 2.86-3.76 3.69-6l7.59-20.25c.82-2.19 1.66-4.47 1.48-6.8zm-103.08-36.46a30.8 30.8 0 002.75 3.66s-1.13-1.18-3-3.08c.09-.19.17-.39.25-.58zm-37.32 41.57l20.89-21.34c7.22 6.6 14.95 13.34 21.41 18.89a61.84 61.84 0 01-2.44 8.37c-2.8 1.39-6.5 1.84-11-.61-7.13-3.85-20.29-4.99-28.86-5.31z"
        transform="translate(-53 -50.93)"
        fill="url(#WallPost_svg__d)"
      />
      <path
        d="M825.62 159.57s-15.49 8.94-10.72 21.5c0 0 16.09 4.77 22.64 16.69s57.21 54.82 57.21 54.82l36.94-18.51s-12.85-17.16-53.5-29.14c0 0-24-25.69-32.31-30.45s-20.26-14.91-20.26-14.91z"
        fill="#febdd5"
      />
      <path
        d="M825.62 159.57s-15.49 8.94-10.72 21.5c0 0 16.09 4.77 22.64 16.69s57.21 54.82 57.21 54.82l36.94-18.51s-12.85-17.16-53.5-29.14c0 0-24-25.69-32.31-30.45s-20.26-14.91-20.26-14.91z"
        opacity={0.05}
      />
      <path
        d="M549.62 445.44L818.4 164.07a34.68 34.68 0 0149-1.12 34.68 34.68 0 011.12 49L599.78 493.36l-73.74 27z"
        fill={color}
      />
      <path
        d="M852.75 157.96a34.68 34.68 0 011.12 49L585.1 488.33l-55.36 20.25-3.74 11.76 73.74-27 268.81-281.27a34.68 34.68 0 00-1.12-49 34.52 34.52 0 00-20.31-9.41 34.82 34.82 0 015.63 4.3z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        fill="#efc8c4"
        d="M549.62 445.45l50.16 47.91-60.5 22.14-13.24 4.84 8.39-26.63 15.19-48.26z"
      />
      <path
        d="M534.43 493.7a14.75 14.75 0 015.16 2.07c1.82 1.31 3.14 3.58 2.64 5.76a13.82 13.82 0 01-2.08 3.77 11.77 11.77 0 00-.87 10.2L526 520.34z"
        fill="#727a9c"
      />
      <path
        d="M922.16 667.87s1.79 26.22 4.77 29.2-26.82 4.77-26.82 4.77l4.17-34z"
        fill="#ffb9b9"
      />
      <path
        d="M922.16 667.87s1.79 26.22 4.77 29.2-26.82 4.77-26.82 4.77l4.17-34z"
        opacity={0.05}
      />
      <path
        d="M928.71 688.13s-4.17 0-19.07 7.75c0 0-10.13-1.79-14.3-16.09 0 0-12.51 21.45-20.86 22.64s-24.43 2.38-13.71 16.69 73.89 7.75 73.89 7.75 1.8-34.57-5.95-38.74z"
        fill="#cbcdda"
      />
      <path
        d="M928.71 688.13s-4.17 0-19.07 7.75c0 0-10.13-1.79-14.3-16.09 0 0-12.51 21.45-20.86 22.64s-24.43 2.38-13.71 16.69 73.89 7.75 73.89 7.75 1.8-34.57-5.95-38.74z"
        opacity={0.05}
      />
      <path
        d="M919.77 708.39l-4.17 11.32-27.41-7.75 1.56-11.24.38-2.71 1-7.5s23.24-6 23.24-3a46.23 46.23 0 001.53 7.26c1 3.66 2.15 7.84 3 10.59.52 1.84.87 3.03.87 3.03z"
        fill="#ffb9b9"
      />
      <path
        d="M904.82 552.98c-1.88 3.18-4 9.14-.05 16.58a28.87 28.87 0 004.28 5.94c13.11 14.3 16.69 46.48 16.69 46.48v51.84l-8.94.69-14.3 1.1-21.5-88.18s-12.51-64.36-6.55-75.68 11.32-82.23 11.32-82.23l4.95-5.12 11.74-12.16h34a22.84 22.84 0 016.61 7.39c5.7 9.44 10.82 29.07-4.82 65.31-24.43 56.61-31.58 65.55-31.58 65.55a13.73 13.73 0 00-1.85 2.49z"
        fill="#4c4c78"
      />
      <path
        d="M904.82 552.98c-1.88 3.18-4 9.14-.05 16.58a28.87 28.87 0 004.28 5.94c13.11 14.3 16.69 46.48 16.69 46.48v51.84l-8.94.69-14.3 1.1-21.5-88.18s-12.51-64.36-6.55-75.68 11.32-82.23 11.32-82.23l4.95-5.12 11.74-12.16h34a22.84 22.84 0 016.61 7.39c5.7 9.44 10.82 29.07-4.82 65.31-24.43 56.61-31.58 65.55-31.58 65.55a13.73 13.73 0 00-1.85 2.49z"
        opacity={0.05}
      />
      <path
        d="M915.94 694.79l-25.81 3.22 1-7.5s23.24-6 23.24-3a46.23 46.23 0 001.57 7.28z"
        opacity={0.1}
      />
      <path
        d="M903.09 476.59s1.48 46.91 1.73 76.39c.05 6.67 0 12.45-.05 16.58a36.74 36.74 0 01-.48 6.54c-1.79 5.36 1.79 17.28 1.79 17.28 14.9 39.33 10.73 73.89 10.73 73.89v26.22l-28.62 3.58s4.77-3.58-8.34-38.14c-7.53-19.86-9.16-39.31-9.19-52.28a55.94 55.94 0 00-4.18-20.68 25.52 25.52 0 01-1.48-6.9c-1.19-11.92-6.55-26.82-6.55-26.82s-14.3-42.31-17.88-73.3a170.67 170.67 0 01.83-44.33 110.63 110.63 0 012.15-11.09s58.25-36.66 80.25-11.32a28.69 28.69 0 015 8.34 55.06 55.06 0 012.81 9.28c6.76 33.66-28.52 46.76-28.52 46.76z"
        fill="#4c4c78"
      />
      <circle cx={901.3} cy={185.2} r={30.39} fill="#ffb9b9" />
      <path
        d="M884.62 204.26s12.51 35.16 0 53.63 39.92 12.51 39.92 12.51l20.26-24.43s-23.84 0-25-41.71-35.18 0-35.18 0z"
        fill="#ffb9b9"
      />
      <path
        d="M944.8 426.53a78.2 78.2 0 01-13.28 3.33c-7.42 1.14-16.17 1.19-21.29-3.33-3-2.68-10.51-3-19.49-2.15-18.91 1.81-44.51 8.87-49.41 10.26a110.63 110.63 0 012.15-11.09s58.25-36.66 80.25-11.32h12.71a22.84 22.84 0 016.61 7.39c1.11 4.74 1.75 6.91 1.75 6.91zM919.77 708.39l-4.17 11.32-27.41-7.75 1.56-11.24c4.71 10.42 12.74 11.83 12.74 11.83 8.66-4.5 13.7-6.39 16.4-7.18.53 1.83.88 3.02.88 3.02z"
        opacity={0.1}
      />
      <path
        d="M921.56 705.41s-4.17 0-19.07 7.75c0 0-10.13-1.79-14.3-16.09 0 0-12.51 21.45-20.86 22.64s-24.43 2.36-13.7 16.69 73.89 7.75 73.89 7.75 1.79-34.57-5.96-38.74z"
        fill="#cbcdda"
      />
      <path
        d="M780.19 191.02s1.35-26.89 31.56-19.95L804 185.6z"
        fill="#ffb9b9"
      />
      <path
        d="M921 253.13s-29.2-4.77-36.95-10.73c0 0-6 11.32-16.69 5.36s-35.75-5.36-35.75-5.36-20.86-11.32-25-36.95c0 0-4.17-15.49-3-19.66 0 0-15.49-16.09-23.24 5.36 3 14.9 5.36 13.71 4.77 25.62l9.53 26.22s.6 8.94 17.88 20.86 36.95 30.39 36.95 30.39-10.43 5.66-6.55 31.58c4.73 31.68-2.38 76.87-2.38 76.87v29.2s59.59-17.28 69.72-8.34 34.56 0 34.56 0-3-10.13-7.15-34.56.6-48.27.6-48.27 15.49-41.12 22.64-57.8-5.36-39.33-17.88-47.67-17.17-3.33-17.17-3.33 21.89 15.85-4.89 21.21z"
        fill="#febdd5"
      />
      <path
        d="M868.43 177.76a10.54 10.54 0 00.62 3.64 11.48 11.48 0 002.79 3.47c4.46 4.36 8.38 9.54 9.95 15.58 1.06 4.09 1 8.37.94 12.6-.26 17.11-1 35.58-11.54 49-3.88 4.95-8.88 8.88-13.57 13.07a4.09 4.09 0 00-1.42 1.95 3.57 3.57 0 00.44 2.36c2.18 4.53 6.77 7.31 11.12 9.83 2 1.15 4.08 2.34 6.38 2.41 5.42.18 9-5.55 13.93-7.8 7.18-3.28 15.23 1.28 22.36 4.68a78.79 78.79 0 0016.14 5.63c7.63 1.76 16.25 2.19 22.67-2.28a17.31 17.31 0 007.06-11.05c.52-2.91.44-6.29 2.64-8.26 1.14-1 2.69-1.44 3.91-2.34 1.91-1.4 2.81-3.75 3.62-6l7.34-20.07a16.49 16.49 0 001.43-6.74c-.35-4.83-4.81-8.34-9.28-10.2s-9.42-2.77-13.36-5.6c-6.65-4.78-8.71-13.71-9.31-21.88a105.34 105.34 0 01.12-16.85c.73-8.31 2.35-17.17-1.35-24.65-3.95-8-12.81-12.07-21-15.55-3.15-1.34-6.39-2.69-9.81-2.84-3.62-.16-7.14 1-10.56 2.23-5.44 1.89-11 4.33-16.57 5.61-3.15.72-6.61.18-9.65 1.32-11.17 4.2-6.04 19.74-6.04 28.73z"
        opacity={0.1}
      />
      <path
        d="M868.43 176.57a10.54 10.54 0 00.62 3.64 11.48 11.48 0 002.79 3.47c4.46 4.36 8.38 9.54 9.95 15.58 1.06 4.09 1 8.37.94 12.6-.26 17.11-1 35.58-11.54 49-3.88 4.95-8.88 8.88-13.57 13.07a4.09 4.09 0 00-1.43 1.91 3.57 3.57 0 00.44 2.36c2.18 4.53 6.77 7.31 11.12 9.83 2 1.15 4.08 2.34 6.38 2.41 5.42.18 9-5.55 13.93-7.8 7.18-3.28 15.23 1.28 22.36 4.68a78.79 78.79 0 0016.14 5.63c7.63 1.76 16.25 2.19 22.67-2.28a17.31 17.31 0 007.06-11.05c.52-2.91.44-6.29 2.64-8.26 1.14-1 2.69-1.44 3.91-2.34 1.91-1.4 2.81-3.75 3.62-6l7.34-20.07a16.49 16.49 0 001.43-6.74c-.35-4.83-4.81-8.34-9.28-10.2s-9.42-2.77-13.36-5.6c-6.65-4.78-8.71-13.71-9.31-21.88a105.34 105.34 0 01.12-16.85c.73-8.31 2.35-17.17-1.35-24.65-3.95-8-12.81-12.07-21-15.55-3.15-1.34-6.39-2.69-9.81-2.84-3.62-.16-7.14 1-10.56 2.23-5.44 1.89-11 4.33-16.57 5.61-3.15.72-6.61.18-9.65 1.32-11.16 4.27-6.03 19.78-6.03 28.77z"
        fill="#b96b6b"
      />
      <path
        d="M844.41 339.2s4.75-1.13 28.59-4.73 65.55 4.77 65.55 4.77"
        opacity={0.05}
      />
    </svg>
  );
};

SvgWallPost.propTypes = {
  color: PropTypes.string
};
SvgWallPost.defaultProps = {
  color: "primary"
};
export default SvgWallPost;
