import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgBasketball = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1006.44 786.79"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Basketball_svg__a"
          x1={281.77}
          y1={766.42}
          x2={281.77}
          y2={356.78}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Basketball_svg__b"
          x1={282.79}
          y1={784.76}
          x2={282.79}
          y2={753.17}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__c"
          x1={376}
          y1={417.12}
          x2={376}
          y2={120.14}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__d"
          x1={376}
          y1={407.73}
          x2={376}
          y2={129.53}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__e"
          x1={278.71}
          y1={332.33}
          x2={278.71}
          y2={240.62}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__f"
          x1={278.71}
          y1={324.54}
          x2={278.71}
          y2={248.4}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__g"
          x1={379.43}
          y1={528.7}
          x2={379.43}
          y2={399.85}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__h"
          x1={372.98}
          y1={528.83}
          x2={372.98}
          y2={406.67}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__i"
          x1={317.13}
          y1={469.09}
          x2={317.13}
          y2={351.45}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__j"
          x1={377.53}
          y1={416.44}
          x2={377.53}
          y2={387.91}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__k"
          x1={377.53}
          y1={413.39}
          x2={377.53}
          y2={384.86}
          xlinkHref="#Basketball_svg__a"
        />
        <linearGradient
          id="Basketball_svg__l"
          x1={685.33}
          y1={676.36}
          x2={685.33}
          y2={279.53}
          xlinkHref="#Basketball_svg__a"
        />
      </defs>
      <path
        d="M235.22 634.67s20.48 20.48 8.92 50.87 19.82 80.94 19.82 80.94l-1-.16c-42.07-7.42-63-55.54-39.58-91.28 8.78-13.28 15.91-28.87 11.84-40.37z"
        fill={color}
      />
      <path
        d="M235.22 634.67s11.56 25.11 0 45.59-2 78 28.74 86.22"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M198.78 717.52s23.37-3.72 25.5 17.22 44.94 23.85 44.94 23.85l-.8.53c-35.35 23.21-69.14 14.78-64-16 1.8-11.48 1.69-22.99-5.64-25.6z"
        fill={color}
      />
      <path
        d="M198.78 717.52s23.37-3.72 25.5 17.22 44.94 23.85 44.94 23.85l-.8.53c-35.35 23.21-69.14 14.78-64-16 1.8-11.48 1.69-22.99-5.64-25.6z"
        fill="#f5f5f5"
        opacity={0.2}
      />
      <path
        d="M198.78 717.52s18.14 4 16.65 20.48 26.94 36.27 53.79 20.6"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M886.29 364.07c11.44 23.49 4.16 57.19 20.36 76.39 11.88 14.08 31.6 14 45.07 25.88 10.48 9.27 15.7 24.44 20.45 38.84l23.08 70c10.51 31.88 19.49 72.92-1.68 96.29-12.69 14-31.86 15.59-49.19 14.1-125.43-10.79-226.32-137.29-351.32-153.62-88.35-11.55-175.64 33.89-264.5 31.38-47-1.33-92.89-16-138.24-30.64-34.88-11.23-73.59-26-90.22-63.86-7.43-16.92-9.74-37.36-20.78-51.27-8.46-10.67-20.69-15.72-31.2-23.45C2.34 360.4-2.91 285 1.08 221.51c2.21-35.22 5.95-71.28 19.88-102.54S61.1 61.86 91.02 60.84c18.92-.65 37 8.37 55.41 13.41s40 5.19 53.82-10c11.34-12.47 14.9-32.5 26.24-45 8.83-9.71 21.15-13.48 33.06-15.79C323.6-8.96 391.83 12.6 442.06 61.12c12.21 11.79 23.84 25.39 38.76 31.44 19.87 8.05 41.59 1.23 62.6 1.4 74.12.6 124.39 80.82 176.63 131.39 30.54 29.57 60.08 35.94 93.22 55.64 20.51 12.2 60.65 57.69 73.02 83.08z"
        fill={color}
        opacity={0.1}
      />
      <path
        fill="url(#Basketball_svg__a)"
        d="M259.35 356.78h44.84v409.64h-44.84z"
      />
      <path
        fill="url(#Basketball_svg__b)"
        d="M353.1 784.76H212.47l49.94-31.59h37.7l52.99 31.59z"
      />
      <path
        d="M158.44 203.47S348 16 593.56 203.47v162s-192.59 116.17-435.11 0z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__c)"
      />
      <path
        d="M172.2 207.59s177.55-175.64 407.6 0v151.78s-180.41 108.82-407.6 0z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__d)"
      />
      <path
        fill="url(#Basketball_svg__e)"
        d="M224.7 240.62h108.01v91.71H224.7z"
      />
      <path
        fill="url(#Basketball_svg__f)"
        d="M233.87 248.4h89.67v76.14h-89.67z"
      />
      <path
        d="M413.29 528.7L379.22 470 349 526.64l-26.22-59.36-27.28 60.44-.95-.38c11-32.12.09-123.17 0-124.09l-.42-3.41 28.68 64.93 23.91-53 32.53 56.07L409 412l25.2 57.51 24.46-65.77 6.12-1.22-.14.74c-.18.94-16.89 89-7.39 118.86l2.26 5.16-.9.47a24.73 24.73 0 01-2.32-5.29l-22-50.23zm-33.51-59.79l33.3 57.41 20.61-55.41-24.78-56.55zM323.3 466l25.7 58.31 29.58-55.38L346.77 414zm-27.42-59.56c1.74 15.68 8.51 82.57 1.35 114.85l25-55.29zm138.92 64.45l20.07 45.8c-6.1-32.6 7-104.11 8.64-112.85l-4.07.81z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__g)"
        opacity={0.1}
      />
      <path
        d="M324.52 528.83l-25.28-63.29.95-.38 24.38 61L349 470.41l-32.57-59.84.89-.49 32.19 59.15 24.41-55.68h.3l72.48-6.85-67.14 119.83-29.93-55zm25.63-58.47l29.42 54.06 65.31-116.55-70.24 6.64z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__h)"
        opacity={0.1}
      />
      <path
        fill="url(#Basketball_svg__i)"
        d="M335.84 469.09l-.52-1-60.12-116.17.91-.47 59.6 115.16 22.4-58.04.95.37-23.22 60.15z"
        opacity={0.1}
      />
      <path
        d="M377.53 387.91c-47.84 0-86.61 6.39-86.61 14.27s38.78 14.27 86.61 14.27 86.61-6.39 86.61-14.27-38.78-14.27-86.61-14.27zm0 22.42c-43.9 0-79.48-4.11-79.48-9.17s35.58-9.16 79.48-9.16 79.47 4.09 79.47 9.16-35.58 9.17-79.47 9.17z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__j)"
      />
      <path
        d="M377.53 387.91c-47.84 0-86.61 6.39-86.61 14.27s38.78 14.27 86.61 14.27 86.61-6.39 86.61-14.27-38.78-14.27-86.61-14.27zm0 22.42c-43.9 0-79.48-4.11-79.48-9.17s35.58-9.16 79.48-9.16 79.47 4.09 79.47 9.16-35.58 9.17-79.47 9.17z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__j)"
        opacity={0.2}
      />
      <path
        d="M377.53 384.86c-47.84 0-86.61 6.39-86.61 14.27s38.78 14.27 86.61 14.27 86.61-6.39 86.61-14.27-38.78-14.27-86.61-14.27zm0 22.42c-43.9 0-79.48-4.11-79.48-9.17s35.59-9.17 79.48-9.17S457 393 457 398.1s-35.58 9.17-79.47 9.17z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__k)"
      />
      <path fill="#e8eaf1" d="M259.72 358.04h44v402h-44z" />
      <path
        fill="#e8eaf1"
        d="M351.72 778.04h-138l49-31h37l52 31zM65.72 152.04s186-184 427 0v159s-189 114-427 0z"
      />
      <path
        d="M79.22 156.09s174.24-172.37 400 0v148.94s-177 106.79-400 0z"
        fill="#f3f5f7"
      />
      <path fill="#fff" d="M225.72 244.04h106v90h-106z" />
      <path fill="#f3f5f7" d="M234.72 251.68h88v74.72h-88z" />
      <path
        d="M315.82 471.21l-33.44-57.64-29.71 55.61-25.73-58.25-26.72 59.32-.93-.37c10.84-31.53.09-120.88 0-121.78l-.41-3.35 28.15 63.72 23.47-52 31.92 55 29.27-54.8 24.73 56.44 24-64.55 6-1.2-.14.73c-.18.93-16.58 87.34-7.25 116.65l2.22 5.06-.89.46a24.27 24.27 0 01-2.28-5.19l-21.6-49.3zm-32.88-58.68l32.68 56.34 20.22-54.37-24.31-55.5zm-55.44-2.82l25.26 57.2 29-54.35-31.25-53.88zm-26.91-58.45c1.71 15.38 8.35 81 1.32 112.71l24.49-54.26zm136.33 63.21l19.69 44.93c-6-32 6.86-102.17 8.48-110.74l-4 .8z"
        opacity={0.1}
      />
      <path
        d="M228.7 471.34l-24.81-62.11.93-.37 23.93 59.89 24-54.74-32-58.72.88-.48 31.59 58 24-54.64h.29l71.13-6.72-65.93 117.63-29.37-54zm25.15-57.38l28.87 53.05 64.1-114.38-68.93 6.51z"
        opacity={0.1}
      />
      <path
        opacity={0.1}
        d="M334.79 468.26l-.52-.99-59-114 .89-.46 58.49 113.01 21.99-56.96.93.36-22.78 59.04z"
      />
      <path
        d="M280.72 333.04c-46.94 0-85 6.27-85 14s38.06 14 85 14 85-6.27 85-14-38.06-14-85-14zm0 22c-43.08 0-78-4-78-9s34.92-9 78-9 78 4 78 9-34.92 9-78 9z"
        fill="#5f546f"
      />
      <path
        d="M280.72 333.04c-46.94 0-85 6.27-85 14s38.06 14 85 14 85-6.27 85-14-38.06-14-85-14zm0 22c-43.08 0-78-4-78-9s34.92-9 78-9 78 4 78 9-34.92 9-78 9z"
        opacity={0.2}
      />
      <path
        d="M280.72 330.04c-46.94 0-85 6.27-85 14s38.06 14 85 14 85-6.27 85-14-38.06-14-85-14zm0 22c-43.08 0-78-4-78-9s34.92-9 78-9 78 4 78 9-34.92 9-78 9z"
        fill="#5f546f"
      />
      <path
        d="M591.39 736.4c-27.09 7.61-56.94-.17-83.62 8.77a18.56 18.56 0 00-6.46 3.3c-6.38 5.57-3.86 16.44 1.84 22.7 9.11 10 23.43 13.12 36.88 14.46 65.7 6.53 131.41-17.23 197.19-12.23 9.78.75 21.18 1.56 27.74-5.73 4.84-5.37 5.17-13.65 2.78-20.47-4.39-12.52-16.52-21.07-29.29-24.66s-26.3-3-39.56-2.41c-18 .82-36.15.59-54.1 1.78-19.19 1.32-35.22 9.42-53.4 14.49z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M845 644c-7-1-19.94-12-19.94-12a9.86 9.86 0 00-8.59-4.37l-12.85-18.07A134.85 134.85 0 00786 585.75q-1.65-1.83-3.41-3.55a95.94 95.94 0 00-11.14-9.5 66.31 66.31 0 01-7.34-6.36 85 85 0 01-6-6.64l-8.94-12.52-.6-.85a13.69 13.69 0 00.18-3.71c0-.29-.06-.58-.1-.87l-36.9-43.38-11-22.44c-.13.11-.57.48-1.26 1l-.2-.57v-2.15a92.53 92.53 0 0111.21-44.48 31.26 31.26 0 003.79-14.93v-1.26l-.19-.21c-.35-.39-1.15-1.29-2.18-2.62.13-.26.27-.53.4-.78 4.58-8.42 10.95-9.86 10.95-9.86 21.44-3 36.9-17.45 36.9-17.45 16-9 13-17 13-17l-14.46-34.9-9-18.45-2.49-8.48a143 143 0 00-3.45-16.73c-2.13-8.12-12.74-10.43-17.86-3.78-.12.16-.25.33-.37.51a16 16 0 002.86 21.35c5 4.26 9.35 8.63 9.35 8.63 9 2.49 15 48.86 15 48.86l-6 4a33.35 33.35 0 00-23.93 12H704c0-.08.05-.16.08-.25l-3.12-.7-9-2-3.33-.75-.05.21-.94-.21v.13a56 56 0 01-3.4-6.23 2.71 2.71 0 00.81 0c.07-.15.13-.3.18-.45h.32c1.39-3 .19-6.75 1.53-9.81a36.42 36.42 0 012.4-3.73c2-3.45 1.76-7.77 1.17-11.73-.64-4.26-1.62-8.61-4.07-12.16s-6.68-6.15-11-5.59c-3.4.45-6.38 2.78-9.8 3-2.42.14-4.74-.81-7-1.55a44.54 44.54 0 00-7.59-1.73c-1.71-.24-3.72-.27-4.87 1l-.1.13a2.93 2.93 0 00-.4.37 5.66 5.66 0 00-1 1.9l-2.21 6.09a1.4 1.4 0 000 1.35c.2.25.55.32.82.49 1.75 1.13-.6 3.92.85 5.29.87.82 2.73.91 4.57.9a19.44 19.44 0 0012.23 29.4v1a40.88 40.88 0 01-.62 7.87L659 381c-2.43.13-7.34.32-11.63.12a38.75 38.75 0 01-4.29-.41s-.17 1.82-.5 4.61l-1 .28a41.68 41.68 0 00-22.9 16.54l-22.44 13s-10-2.49-38.89 22.44l-20.94 11s-31.99 9.42-26.01 18.88S546.3 456 546.3 456l12-5.48 36.4-16s12-8 20.94-11 17.95-12 17.95-12l2.25-.12 1-.06a8.45 8.45 0 01-.49.78c-.09.14-.19.27-.29.39v80.27l-.16 2.23h.07l-2.4 32.65s.5 15-1.5 23.43 1.5 42.88 1.5 42.88 1.31 0 3.44-.15l-.06 1-.88 14.11s-1.68 5.44 8 8.27a23.38 23.38 0 016.26 2.87l11.16 7.31 11.47 7 2.32 4.87.11.24-2.44-1.49s-2 5 4.49 11.47a21.2 21.2 0 017 17.45s1 12 7 9c0 0 9.47-2 9-18.45 0 0-3.78-13.7.62-19.49q.18-.24.38-.46c5-5.48-1.5-14-1.5-14s-11.55-4.66-12.2 3.08l-.48-.21c-2.08-1-5.81-3.43-9.76-9.35 0 0-6.48-16.45-16.45-17.95l1.67-9.47.19-1.09c3.43-1.62 6.21-3.71 7.61-6.4l.06-.12v-.26l.05-.1v-.08l.05-.11.06-.12v-.1l.07-.14.19-.1.07-.15.06-.13.08-.17.07-.14.08-.17.09-.18.07-.14.1-.21.07-.14.43-.93.06-.12.12-.26.09-.19.13-.29.08-.17.15-.34.06-.14.16-.35.08-.17.16-.36.07-.16.17-.38.07-.15.18-.4.06-.15.18-.42.06-.14.2-.45v-.08c3.19-7.42 7.2-18.09 7-24.41a14.54 14.54 0 000-1.51h-.12v-.1c0-.21-.08-.41-.14-.6l26.92 6 16 17.45H724.22l.1-.05h.09l.13-.06.1-.05.14-.07.12-.06.17-.09.11-.06.19-.1.12-.07.2-.1.14-.08.22-.12.14-.07.23-.13.16-.09.25-.14.17-.41.28-.16.15-.08.29-.16.17-.1.3-.17.16-.1.32-.19.17-.1.33-.2.16-.1.35-.21h.06l.56.65 7 8.12c7 3 22.94 17.95 22.94 17.95 1.84 4.41 9.63 10.71 13.61 13.73a24.85 24.85 0 003.61 2.22c2.18 1.13 5.25 3.82 8.06 6.54a102.69 102.69 0 0011.77 10 52.47 52.47 0 0110.19 10.28l.34.44c-2.38 8 11.24 16.13 11.24 16.13 5-1 20.44 13 20.44 13s14.46 11.47 20.44-1S845 644 845 644zm-26.42-13.36l-2-2.83a3.46 3.46 0 011.97 2.8z"
        transform="translate(-96.78 -56.6)"
        fill="url(#Basketball_svg__l)"
      />
      <path
        d="M597.45 329.25s-50.45 29.39-39.67 12.73a41.91 41.91 0 007-23.7 30.83 30.83 0 00-1.1-8.14l21.06-9.8a20.3 20.3 0 00.76 8.59c2.95 10.42 11.95 20.32 11.95 20.32z"
        fill="#db8b8b"
      />
      <path
        d="M585.47 308.94a19.12 19.12 0 01-20.72 9.35 30.83 30.83 0 00-1.1-8.14l21.06-9.8a20.3 20.3 0 00.76 8.59z"
        opacity={0.1}
      />
      <circle cx={568.8} cy={298.64} r={19.1} fill="#db8b8b" />
      <path
        d="M556.59 288.48a7.33 7.33 0 014.55 3c1.26 2 1.23 4.74 3 6.3a6.34 6.34 0 004.65 1.18 22.42 22.42 0 014.91-.17c2.65.43 4.82 2.39 6.29 4.63a63.82 63.82 0 013.56 7.2 8.5 8.5 0 001.78 2.63 3.41 3.41 0 002.93.94c1.37-3 .19-6.64 1.5-9.63a35.77 35.77 0 012.35-3.66c2-3.39 1.73-7.63 1.14-11.52-.63-4.19-1.59-8.46-4-11.94s-6.56-6-10.76-5.49c-3.34.44-6.27 2.73-9.63 2.93-2.37.14-4.66-.79-6.92-1.52a43.75 43.75 0 00-7.45-1.7c-1.68-.23-3.65-.27-4.78 1a5.56 5.56 0 00-1 1.86l-2.17 6a1.38 1.38 0 000 1.33c.2.24.54.31.8.49 1.72 1.11-.59 3.85.83 5.2s6.43.47 8.42.94z"
        opacity={0.1}
      />
      <path
        d="M557.08 287.99a7.33 7.33 0 014.55 3c1.26 2 1.23 4.74 3 6.3a6.34 6.34 0 004.65 1.18 22.42 22.42 0 014.91-.17c2.65.43 4.82 2.39 6.29 4.63a63.82 63.82 0 013.56 7.2 8.5 8.5 0 001.78 2.63 3.41 3.41 0 002.93.94c1.37-3 .19-6.64 1.5-9.63a35.77 35.77 0 012.35-3.66c2-3.39 1.73-7.63 1.14-11.52-.63-4.19-1.59-8.46-4-11.94s-6.56-6-10.76-5.49c-3.34.44-6.27 2.73-9.63 2.93-2.37.14-4.66-.79-6.92-1.52a43.75 43.75 0 00-7.45-1.7c-1.68-.23-3.65-.27-4.78 1a5.56 5.56 0 00-1 1.86l-2.17 6a1.38 1.38 0 000 1.33c.2.24.54.31.8.49 1.72 1.11-.59 3.85.83 5.2s6.43.47 8.42.94z"
        fill="#472727"
      />
      <path
        d="M662.1 327.78s-15.18 14.2-36.24 17.14c0 0-6.26 1.42-10.76 9.69a35.07 35.07 0 00-3.45 9.9l-22.6-38.29-1.4-2.37h37.71a32.76 32.76 0 0123.51-11.75l5.88-3.92s-5.88-45.55-14.69-48c0 0-4.3-4.3-9.19-8.48a15.72 15.72 0 01-2.81-21c.12-.17.24-.34.37-.5 5-6.53 15.45-4.26 17.55 3.72a140.45 140.45 0 013.39 16.48l2.45 8.33 8.82 18.12 14.2 34.28s2.93 7.84-12.74 16.65zM549.45 329.74l-2.94 26-6.61.37-2.21.12s-8.82 8.82-17.63 11.75-20.57 10.78-20.57 10.78l-35.75 15.64-11.75 5.39s-29.39 20.61-35.27 11.26 25.5-18.65 25.5-18.65l20.57-10.78c28.41-24.49 38.2-22 38.2-22l22-12.73a40.94 40.94 0 0122.49-16.25 27.7 27.7 0 013.97-.9z"
        fill="#db8b8b"
      />
      <path
        d="M615.1 354.61a35.07 35.07 0 00-3.45 9.9l-22.6-38.29a15.67 15.67 0 001.41-2.37 19 19 0 001.36-3.67l3.27.74 8.85 2 3.07.69c0 .08-.06.16-.08.24-4.12 12.1 3.65 24.77 8.17 30.76zM549.45 329.74l-2.94 26-6.61.37c2.81-5 4.72-18.24 5.59-25.43a27.7 27.7 0 013.96-.94z"
        opacity={0.1}
      />
      <path
        d="M613.32 373.57a90.84 90.84 0 00-11 44.12v2.17s5.39 14.69 0 14.69-4.9 7.35-11.75 8.82-30.86 11.75-38.2 7.35-12.24-13.71-12.24-13.71v-79.84c.1-.12.2-.25.29-.39 4.23-6 6.57-31 6.57-31a38.07 38.07 0 004.22.41c4.21.2 9 0 11.42-.12l1.5-.09c4.23 3.31 10 3.79 12.86 3.79a21.67 21.67 0 013 .22c8.27 1.16 10.79-9.83 10.79-9.83l3.27.74 8.85 2 3.07.69c-5.51 15.61 9 32.3 10.83 34.32l.19.21a30.64 30.64 0 01-3.67 15.45z"
        fill={color}
      />
      <path
        d="M551.22 326.23c0 6.49-1.55 28-11.07 31.11v-.17c.1-.12.2-.25.29-.39 4.23-6 6.57-31 6.57-31a38.07 38.07 0 004.21.45zM616.85 357.94c-17.92-.92-15.8-24.36-13.9-35l3.07.69c-5.51 15.6 8.99 32.29 10.83 34.31z"
        fill="#fff"
        opacity={0.3}
      />
      <g opacity={0.1}>
        <path d="M617.04 358.64a.24.24 0 00-.19-.21c-4-1 .44.45-4-1-.17-.06.24-.73.24-.73a30.64 30.64 0 01-3.72 15.42 90.84 90.84 0 00-11 44.12v2.16s5.39 14.69 0 14.69-4.9 7.35-11.75 8.82c-6.28 1.35-26.93 10.08-36 8.15.56.41 1.13.8 1.72 1.15 7.35 4.41 31.35-5.88 38.2-7.35s6.37-8.82 11.75-8.82 0-14.69 0-14.69v-2.17a90.84 90.84 0 0111-44.12 30.64 30.64 0 003.75-15.42zM565.32 327.02c-.23-.16-.47-.33-.69-.5h-.52c.4.2.81.35 1.21.5z" />
      </g>
      <path
        d="M719.89 572.18l-5.87 13.22a82.16 82.16 0 00-5.5-7.95 51.54 51.54 0 00-10-10.09 100.87 100.87 0 01-11.56-9.82c-2.76-2.67-5.78-5.32-7.92-6.43a24.41 24.41 0 01-3.55-2.18c-3.9-3-11.56-9.15-13.37-13.48 0 0-15.67-14.69-22.53-17.63l-6.84-8-7.86-9.17 20.08-20.08 5.91 8.27 8.79 12.3a80.13 80.13 0 0013.55 13.26 91.15 91.15 0 0113.8 12.33 132.47 132.47 0 0117.2 23.41l12.63 17.75.09.14 2 2.79zM595.49 573.65l-7.84 18.61-6.36-6.86-2.62-5.5-2.28-4.79-11.27-6.86-11-7.18a23 23 0 00-6.15-2.82c-9.51-2.78-7.87-8.12-7.87-8.12l.87-13.86.6-9.65 26-2.94-1.3 7.35-1.64 9.3c9.8 1.47 16.16 17.63 16.16 17.63 3.87 5.81 7.54 8.22 9.59 9.18a7.51 7.51 0 001.68.61z"
        fill="#db8b8b"
      />
      <path
        d="M716.94 568.04l-.23-.13h.14zM719.89 572.18l-5.87 13.22a82.16 82.16 0 00-5.5-7.95c.9.86 5.93 5.44 7.54 1.26a49 49 0 012.13-5 5.51 5.51 0 00.73-2.85z"
        opacity={0.1}
      />
      <path
        d="M719.41 571.31l-2-2.79-.09-.14-12.63-17.75a132.47 132.47 0 00-17.23-23.39 91.15 91.15 0 00-13.8-12.33 80.13 80.13 0 01-13.55-13.26l-8.76-12.25-5.91-8.27-.86.86 5.29 7.41 8.79 12.3a80.13 80.13 0 0013.56 13.22 91.15 91.15 0 0113.8 12.33 132.47 132.47 0 0117.2 23.38l12.65 17.77.09.14 2 2.79 1 1.36-5.26 11.84c.55.87.86 1.38.86 1.38l5.88-13.22zM595.49 573.65l-7.84 18.61-6.36-6.86-2.62-5.5 7.52 5c7.39-4.62 4.54-16.43 4.2-17.75a7.51 7.51 0 001.68.61z"
        opacity={0.1}
      />
      <path
        d="M590.84 567.53s3.67 13-4.16 17.88l-10.29-6.86s-2 4.9 4.41 11.27a20.82 20.82 0 016.86 17.14s1 11.75 6.86 8.82c0 0 9.31-2 8.82-18.12 0 0-3.71-13.45.61-19.14q.18-.23.37-.45c4.9-5.39-1.47-13.71-1.47-13.71s-11.52-4.66-12.01 3.17z"
        fill="#535461"
      />
      <path
        d="M602.35 434.56c-5.39 0-4.9 7.35-11.75 8.82s-30.86 11.75-38.2 7.35-12.24-13.71-12.24-13.71v-1c12.24 6.37 27.43 0 27.43 0 10.82 2.08 29.43-12.11 34.77-16.42v.25s5.37 14.71-.01 14.71zM541.61 526.63l26-2.94-1.3 7.35c-8.05 3.74-19.64 4.89-25.26 5.24zM650.86 488.86c-1.23 9-11.29 16.73-18.13 21l-7.86-9.17 20.08-20.08z"
        opacity={0.1}
      />
      <path
        d="M567.57 437s-15.18 6.37-27.43 0l-2.45 33.31s.49 14.69-1.47 23 1.47 42.12 1.47 42.12 30.37-.49 36.24-11.75c0 0 12.73-25.47 10.29-34.28l26.45 5.88 15.68 17.12s26.94-12.73 24.49-28.41l-36.25-42.59-10.77-22s-23.51 20.05-36.25 17.6z"
        fill={color}
      />
      <path
        d="M626.35 512.4l-15.67-17.14-26.46-5.86c.06.22.11.45.16.69a9.75 9.75 0 01.14 1.42c.41 10.19-10.58 32.18-10.58 32.18-5.88 11.27-36.24 11.75-36.24 11.75s-3.48-33.78-1.48-42.11 1.47-23 1.47-23l2.36-32.07.09-1.23a26.34 26.34 0 0011 2.8 42.62 42.62 0 0015.91-2.59l.52-.21q.43.08.88.13c10.52 1.16 27.39-11.38 33.26-16.05 1.33-1.06 2.1-1.71 2.1-1.71l10.78 22 36.24 42.61a11.71 11.71 0 01.14 1.48c.63 15-24.62 26.91-24.62 26.91z"
        opacity={0.1}
      />
      <path
        d="M594.1 320.93c-10.91 19.71-27 8.8-31.46 5.18l1.5-.09c4.23 3.31 10 3.79 12.86 3.79a21.67 21.67 0 013 .22c8.27 1.16 10.79-9.83 10.79-9.83z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        d="M717.22 568.4a9.65 9.65 0 018.57 4.28s12.72 10.72 19.57 11.72c0 0 20.57 8.82 14.69 21.06s-20.08 1-20.08 1-15.18-13.71-20.08-12.73c0 0-13.47-8.08-11-15.92 0 0 5.9 6 7.68 1.39a48.79 48.79 0 012.12-5c.95-1.88 1.44-4.33-1.47-5.8z"
        fill="#535461"
      />
      <path
        d="M564.35 437.12c-5.12 1.49-15.42 3.48-24.2-1.09l-.16 2.19c10.65 3.87 22.43-.35 24.36-1.1zM575.48 435.4a17.51 17.51 0 01-7.91.67s-1.08.45-2.88 1c3.13.53 6.89-.24 10.79-1.67zM650.98 485.5c-.47 14.53-24.63 25.95-24.63 25.95l-.34-.37c6.69-3.67 23.87-14.4 21.89-27.06l-36.25-42.62-9.94-20.33c1.33-1.06 2.1-1.71 2.1-1.71l10.78 22 36.24 42.61a11.71 11.71 0 01.15 1.53zM581.29 489.4c2.45 8.82-10.29 34.28-10.29 34.28-1.74 3.33-5.61 5.72-10.21 7.43 5.84-1.74 11.05-4.39 13.15-8.41 0 0 11.3-22.6 10.56-32.59z"
        opacity={0.1}
      />
      <path
        d="M572.96 362.31c-6.9 0-12.49 8-12.49 17.88s5.59 17.88 12.49 17.88 12.49-8 12.49-17.88-5.59-17.88-12.49-17.88zm0 28.41c-4.06 0-7.36-4.71-7.36-10.53s3.29-10.53 7.36-10.53 7.36 4.71 7.36 10.53-3.3 10.53-7.36 10.53z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        d="M654.82 236.13v1.72c0 .31 0 .62-.07.92a30.35 30.35 0 01-5 14.37c-.19.29-.39.57-.59.85a29.52 29.52 0 01-24 12.38c-.67 0-1.34 0-2-.07s-1.23-.1-1.84-.18a29.65 29.65 0 01-20.92-13.29c-.16-.23-.31-.48-.45-.71v-.05a30.47 30.47 0 01-4.47-15.94 31 31 0 01.32-4.48l.16-1a30.24 30.24 0 0115.88-21.58l1.08-.53a29.36 29.36 0 0122.51-.87 28.57 28.57 0 012.77 1.2 30.13 30.13 0 0114.57 15.85c.1.23.18.45.26.68a30.62 30.62 0 011.79 10.73z"
        fill="#f88787"
      />
      <path
        d="M652.91 225.4a20.59 20.59 0 01-5.86.85h-1.12c-.48 0-.95-.06-1.4-.12a25.07 25.07 0 01-10.88-4c-8.73-8.9-17.28-11.94-21.9-13l1.08-.53c4.54 1.15 11.91 4 19.58 11.2a20.36 20.36 0 006.86 4.28 23.85 23.85 0 005.43 1.31c.4 0 .79.08 1.18.11h.79a19.8 19.8 0 006-.76c.07.25.16.47.24.66zM654.77 237.85c0 .31 0 .62-.07.92a40.34 40.34 0 00-8.15-4l-.75-.27a101 101 0 00-21-4.64c-16.8-2.14-25.18-.14-29.17 1.76l.16-1c4.32-1.9 12.83-3.63 29.11-1.56a103.55 103.55 0 0121 4.59l.75.27a41.57 41.57 0 018.12 3.93z"
        fill="#fff"
        opacity={0.5}
      />
      <path
        d="M646.65 233.99c0 .27-.06.54-.09.82q-.26 2.05-.74 4.29-.37 1.69-.82 3.25c-.08.27-.16.54-.24.8-3.8 12.17-11.53 18.34-17.64 21.42a36.31 36.31 0 01-4 1.74l-1.84-.18a36.24 36.24 0 005.58-2.26c6-3 13.59-9.13 17.29-21.18.08-.24.15-.49.22-.74q.42-1.45.76-3 .49-2.25.75-4.4c0-.27.06-.55.09-.82a36.45 36.45 0 000-7.46c0-.26-.05-.52-.09-.77a25.11 25.11 0 00-6.66-14.38 25.63 25.63 0 00-4-3.41 28.57 28.57 0 012.77 1.2q.88.77 1.74 1.68a26 26 0 016.81 14.93c0 .25.06.51.09.76a37.16 37.16 0 01.02 7.71z"
        fill="#fff"
        opacity={0.5}
      />
      <path
        d="M649.67 253.15c-.19.29-.39.57-.59.85a39.91 39.91 0 00-4-10.41 2 2 0 00-.35-.44 2.74 2.74 0 00-.67-.45c-3.85-1.91-15.35 1.29-23.9 5.91-6.58 3.56-15.19 4.19-19.9 4.23l-.45-.71v-.05c4.5 0 13.34-.54 20-4.14 8-4.3 19.9-8 24.48-6a3.88 3.88 0 01.69.39 2.85 2.85 0 01.78.84 41.19 41.19 0 013.91 9.98z"
        fill="#fff"
        opacity={0.5}
      />
      <path opacity={0.1} d="M259.22 744.54h44v5h-44z" />
      <path
        fill="#fff"
        opacity={0.3}
        d="M181.88 95.57L79.22 199.04v24.5L195.72 91.1l-13.84 4.47zM217.31 85.62L79.22 260.54v25.93L251.76 80.48l-34.45 5.14z"
      />
    </svg>
  );
};

SvgBasketball.propTypes = {
  color: PropTypes.string
};
SvgBasketball.defaultProps = {
  color: "primary"
};
const MemoSvgBasketball = React.memo(SvgBasketball);
export default MemoSvgBasketball;
