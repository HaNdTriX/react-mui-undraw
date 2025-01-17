import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgPrototypingProcess = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1110.46 857.68"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="PrototypingProcess_svg__a"
          x1={2277.26}
          y1={874.51}
          x2={2277.26}
          y2={331.66}
          gradientTransform="translate(-1992)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <ellipse
        cx={346.73}
        cy={821.68}
        rx={237.5}
        ry={36}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M342.89 37.84c37.67-33.2 96.81-40 150.65-37.32 169.08 8.32 321.69 88.99 453.74 180.26 47.8 33.05 94.86 68.65 125.88 114.16 63.16 92.62 44.42 220.94-43.4 297.24-29.88 26-66.1 45.87-103.28 63.51-66.12 31.37-137.46 56.55-212.5 63.72-53.51 5.11-107.68.95-160.88-6.18-148.64-19.92-294.54-64-416.82-139.37C82.65 540.84 32.1 499.7 9.99 446.21s-8-121.27 46.81-152.92c22.65-13.1 49.73-19 76.24-24.57 39-8.17 78.68-16.23 113.9-32.84 36.37-17.17 79.44-50.36 72.24-88.34-7.73-40.77-13.95-76.56 23.71-109.7z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M920.83 88.46c6.76 44.56-12.05 84.37-12.05 84.37s-29.77-32.43-36.55-76.99c-3.79-25 .46-48.48 4.92-64.3a11 11 0 0119.89-3c8.97 13.76 20 34.93 23.79 59.92zM1046.53 159.48a76.91 76.91 0 0119.85 2.51c10.91 2.8 11.08 18.25.23 21.29a77.15 77.15 0 01-19.79 2.94c-24.53.27-44.56-12.89-44.56-12.89s19.74-13.58 44.27-13.85zM977.55 91.74c-22.83 25.09-27.66 57.88-27.66 57.88s32.18-7.9 55-33c10.58-11.63 17.3-24.91 21.46-35.81a11 11 0 00-15.12-13.8c-10.52 5.17-23.1 13.1-33.68 24.73z"
        fill={color}
      />
      <rect
        x={511.46}
        y={87.01}
        width={514}
        height={618.97}
        rx={19.8}
        fill="#464353"
      />
      <path fill={color} opacity={0.1} d="M555.8 149.45h425.32v494.09H555.8z" />
      <circle cx={768.46} cy={676.12} r={18.1} fill="#fff" />
      <path
        d="M768.46 131.76a8.55 8.55 0 118.55-8.55 8.57 8.57 0 01-8.55 8.55z"
        fill="#fff"
      />
      <path
        d="M768.46 115.16a8.05 8.05 0 11-8.05 8.05 8.06 8.06 0 018.05-8.05m0-1a9.05 9.05 0 109 9.05 9 9 0 00-9-9.05z"
        fill="#fff"
      />
      <rect
        x={575.56}
        y={302.51}
        width={88.21}
        height={119.92}
        rx={4.3}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={583.83}
        y={332.73}
        width={71.67}
        height={38.05}
        rx={7.14}
        fill={color}
        opacity={0.5}
      />
      <rect
        x={598.79}
        y={386.3}
        width={41.75}
        height={5.91}
        rx={1.69}
        fill={color}
      />
      <rect
        x={724.69}
        y={302.51}
        width={88.21}
        height={119.92}
        rx={4.3}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={747.89}
        y={321.24}
        width={42.27}
        height={22.44}
        rx={1.46}
        fill={color}
        opacity={0.5}
      />
      <rect
        x={741.71}
        y={364.71}
        width={53.96}
        height={5.91}
        rx={1.69}
        fill={color}
      />
      <rect
        x={741.71}
        y={375.73}
        width={53.96}
        height={5.91}
        rx={1.69}
        fill={color}
      />
      <rect
        x={873.15}
        y={217.32}
        width={88.21}
        height={119.92}
        rx={4.3}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={888.54}
        y={235.93}
        width={57.43}
        height={26.8}
        rx={1.46}
        fill={color}
        opacity={0.5}
      />
      <rect
        x={888.54}
        y={274.88}
        width={57.43}
        height={26.8}
        rx={1.46}
        fill={color}
        opacity={0.5}
      />
      <rect
        x={883.95}
        y={323.28}
        width={18.84}
        height={8.27}
        rx={3.83}
        fill={color}
      />
      <rect
        x={907.84}
        y={323.28}
        width={18.84}
        height={8.27}
        rx={3.83}
        fill={color}
      />
      <rect
        x={931.73}
        y={323.28}
        width={18.84}
        height={8.27}
        rx={3.83}
        fill={color}
      />
      <rect
        x={872.94}
        y={387.7}
        width={88.21}
        height={119.92}
        rx={4.3}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={879.75}
        y={401.72}
        width={26.36}
        height={26.8}
        rx={1.46}
        fill={color}
        opacity={0.5}
      />
      <rect
        x={890.07}
        y={444.84}
        width={53.96}
        height={5.91}
        rx={1.69}
        fill={color}
      />
      <rect
        x={890.07}
        y={456.79}
        width={53.96}
        height={5.91}
        rx={1.69}
        fill={color}
      />
      <rect
        x={890.07}
        y={468.74}
        width={53.96}
        height={5.91}
        rx={1.69}
        fill={color}
      />
      <path
        d="M714.52 359.61l-1.35.65-10.94 5.26-1 .47a.54.54 0 01-.73-.29.59.59 0 010-.2v-3.11a.53.53 0 00-.53-.53h-26.59a.54.54 0 01-.54-.53v-4.39a.54.54 0 01.54-.53H700a.54.54 0 00.53-.54v-3.18a.65.65 0 010-.2.54.54 0 01.73-.28l1 .47 10.91 5.31 1.35.66a.53.53 0 010 .96zM862.55 332.64l-.88 1.21-7.16 9.76-.63.87a.55.55 0 01-.78.09.48.48 0 01-.12-.16l-1.46-2.74a.55.55 0 00-.73-.23l-23.5 12.51a.53.53 0 01-.72-.22l-2.06-3.89a.53.53 0 01.22-.72l23.5-12.49a.53.53 0 00.22-.72l-1.49-2.81a.35.35 0 01-.06-.19.52.52 0 01.51-.59h1.07l12.12-.44 1.5-.05a.53.53 0 01.45.81zM862.47 383.9H847.8a.53.53 0 01-.53-.57.45.45 0 01.05-.19l1.34-2.81a.53.53 0 00-.25-.71l-24-11.52a.54.54 0 01-.25-.72l1.9-3.95a.52.52 0 01.71-.25l24 11.53a.55.55 0 00.72-.25l1.38-2.87a.52.52 0 01.89-.1l.67.83 7.53 9.52.93 1.18a.53.53 0 01-.42.88z"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        fill="#504f60"
        d="M424.19 606.65l-.08 2.93-5.1 180.07h-8.58l4.21-180.07.08-3.38 9.47.45z"
      />
      <path
        opacity={0.1}
        d="M424.19 606.65l-.08 2.93-5.1 180.07h-8.58l4.21-180.07.08-3.38 9.47.45z"
      />
      <path
        fill="#504f60"
        d="M473.84 759.19l-6.42-.02-95.45-.2-5.08-.01 2.7-8.35h103.57l.68 8.58z"
      />
      <path
        opacity={0.1}
        d="M424.19 606.65l-.08 2.93h-9.47l.08-3.38 9.47.45z"
      />
      <path fill="#504f60" d="M411.9 602.25h15.91v5.98H411.9z" />
      <path
        opacity={0.1}
        d="M372.82 750.61l-.85 8.36-5.08-.01 2.7-8.35h3.23z"
      />
      <path
        fill="#504f60"
        d="M386.52 602.14l-.27 2.59-21.17 208.83-9.7-.45 22.31-208.38.25-2.37 8.58-.22z"
      />
      <path
        opacity={0.1}
        d="M473.84 759.19l-6.42-.02-.87-8.56h6.61l.68 8.58z"
      />
      <path
        fill="#504f60"
        d="M484 813.11l-9.71.45-21.17-208.83-.26-2.59 8.57.22.25 2.37L484 813.11z"
      />
      <path fill="#fff" d="M311.38 396.23h213.91v205.11H311.38z" />
      <rect
        x={264.46}
        y={396.23}
        width={308}
        height={205.11}
        rx={4.13}
        fill="#fff"
      />
      <path
        d="M422.5 327.64v49.53h-8.34v-49.53a4.17 4.17 0 118.34 0z"
        fill="#504f60"
      />
      <path opacity={0.1} d="M414.16 372.66h8.35v4.51h-8.35z" />
      <path
        d="M425.78 376.04v16.36h-14.89v-16.36a2 2 0 012-2h10.83a2 2 0 012.06 2z"
        fill="#504f60"
      />
      <circle cx={418.33} cy={384.39} r={3.16} opacity={0.1} />
      <circle cx={418.33} cy={383.71} r={3.16} fill="#3f3d56" />
      <path
        opacity={0.1}
        d="M410.89 390.37h14.89v2.03h-14.89zM404.79 393.08h27.08v4.51h-27.08z"
      />
      <path fill="#504f60" d="M404.79 391.72h27.08v4.51h-27.08z" />
      <path
        d="M364.63 596h111.58a6 6 0 016 6H358.65a6 6 0 015.98-6zM377.94 602.36l8.58-.22-.27 2.59h-8.56l.25-2.37zM411.9 602.25h15.91v2.48H411.9zM461.68 604.73h-8.56l-.26-2.59 8.57.22.25 2.37z"
        opacity={0.1}
      />
      <path
        d="M364.63 597.4h111.58a6 6 0 016 6H358.65a6 6 0 016-6z"
        fill="#504f60"
      />
      <path
        d="M517.82 420.32a1.49 1.49 0 011.71 1.64c-1.45 14-.52 28.34 1.05 42.31.73 6.39 1.72 13.15 4.55 17.89a1.51 1.51 0 01-.2 1.86 4 4 0 01-2.78.83l-44.63.25a1.49 1.49 0 01-1.46-1.84c3.59-15.3 2.82-32 1.38-47.87-.71-7.81-1.12-12 4.71-12.55 6-.54 12-.79 18-1.29 1.44-.12 12.98-.46 17.67-1.23zM483.67 512.01a1.49 1.49 0 00-1.71 1.64c1.45 14 .52 28.34-1.06 42.31-.72 6.39-1.71 13.15-4.54 17.9a1.49 1.49 0 00.2 1.85 4 4 0 002.78.83l44.63.26a1.51 1.51 0 001.46-1.85c-3.59-15.3-2.82-32-1.38-47.87.71-7.81 1.12-12-4.71-12.55s-12-.79-18-1.29c-1.44-.12-12.98-.46-17.67-1.23z"
        fill="#fff"
        stroke="#33313f"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M496.78 537.77a132.37 132.37 0 0115.56.19 1.47 1.47 0 011.32 1.3l.49 4.09a.58.58 0 01-.12.53.55.55 0 01-.38.1c-2.18.06-4.36-.19-6.53 0-1.35.11-2.69.37-4 .52a47.75 47.75 0 01-6.66.12 33.56 33.56 0 01-9.27-1.14s.18-3.39.18-3.71c0-1.58-.05-1.72 1.58-1.76zM496.78 556.21a130.24 130.24 0 0015.56-.2 1.47 1.47 0 001.32-1.3l.49-4.08a.6.6 0 00-.12-.54.55.55 0 00-.38-.1c-2.18-.06-4.36.2-6.53 0-1.35-.1-2.69-.36-4-.51a46.26 46.26 0 00-6.66-.12 33.56 33.56 0 00-9.27 1.14s.18 3.38.18 3.71c0 1.58-.05 1.71 1.58 1.76zM496.78 563.43a130.24 130.24 0 0115.56.2 1.47 1.47 0 011.32 1.3l.49 4.08a.6.6 0 01-.12.54.55.55 0 01-.38.1c-2.18.06-4.36-.2-6.53 0-1.35.1-2.69.37-4 .52a47.75 47.75 0 01-6.66.11 33.55 33.55 0 01-9.27-1.13s.18-3.39.18-3.72c0-1.58-.05-1.71 1.58-1.75z"
        fill="none"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M503.35 477.84a6.61 6.61 0 01.44 3.48.52.52 0 01-.07.27.54.54 0 01-.42.15l-9.5.37s.53-2.8.6-3c.33-1.14 1.16-.84 2.23-.9zM517.7 477.84a6.61 6.61 0 01.43 3.48.51.51 0 01-.06.27.56.56 0 01-.42.15l-9.51.37s.54-2.8.61-3c.32-1.14 1.15-.84 2.23-.9z"
        fill="#fff"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M511.97 430.1l1.28 11a3 3 0 01-2.73 3.31 142.81 142.81 0 01-24.38-.16 3 3 0 01-2.71-2.86 42.69 42.69 0 00-.86-5.83c-.33-2-.69-3.93 1.67-4.52s5.59-.17 8.17-.22q4.64-.09 9.25-.26c.86 0 10.31-.51 10.31-.46zM511.97 469.84l1.26-11a3 3 0 00-2.73-3.31 143.84 143.84 0 00-24.38.15 3 3 0 00-2.71 2.87 42.69 42.69 0 01-.86 5.83c-.33 2-.69 3.93 1.67 4.52s5.59.17 8.17.22c3.09.06 6.17.14 9.25.26.88.03 10.33.54 10.33.46z"
        fill="none"
        stroke="#33313f"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M499.12 519.41q-.5 5.49-.63 11a52.07 52.07 0 01-10.91-1.25 1.93 1.93 0 01-1.79-2.36c-.07-2.28-1.27-7.37 1.94-7.69.96-.1 11.38.48 11.39.3z"
        fill="none"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M322.55 469.45a3.19 3.19 0 013.52 3.47c-1.15 13.31-.24 26.94 1.26 40.21.67 5.9 1.56 12.11 3.92 16.76a2.62 2.62 0 01-2.32 3.82h0l-44.28.26a1.76 1.76 0 01-1.73-2.14c3.51-15.22 2.74-31.84 1.31-47.58-.72-7.81-1.12-12 4.7-12.55 6-.53 12-.78 17.95-1.29 1.27-.1 10.35-.38 15.67-.96z"
        fill="#fff"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M384.15 469.2a1.59 1.59 0 00-1.82 1.76c1.43 13.93.5 28.25-1.07 42.17-.72 6.39-1.71 13.12-4.53 17.87a1.58 1.58 0 00.42 2.07 4.19 4.19 0 002.54.64l44.51.26a1.6 1.6 0 001.55-2c-3.55-15.27-2.79-31.95-1.35-47.75.71-7.81 1.12-12-4.7-12.55-6-.53-12-.78-18-1.29-1.47-.09-12.77-.42-17.55-1.18z"
        fill="#fff"
        stroke="#33313f"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        fill="#fff"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M296.04 478.29l22.64 30.2M318.68 476.03L296.79 510M397.07 479.71l12.33 16.45M409.4 478.47l-11.92 18.51"
      />
      <path
        d="M303.52 518.14a132.56 132.56 0 0115.57.19 1.49 1.49 0 011.32 1.3l.48 4.09a.63.63 0 01-.11.54.7.7 0 01-.38.1c-2.18.06-4.37-.2-6.54 0-1.35.1-2.68.36-4 .51a47.72 47.72 0 01-6.66.12 33.44 33.44 0 01-9.26-1.14c-.06 0 .18-3.38.18-3.71 0-1.58-.06-1.71 1.57-1.76zM398.64 503.04a130.43 130.43 0 0115.57.2 1.47 1.47 0 011.32 1.3l.48 4.08a.63.63 0 01-.11.54.56.56 0 01-.38.1c-2.18.06-4.37-.2-6.54 0-1.35.1-2.68.37-4 .51a46.26 46.26 0 01-6.66.12 33.56 33.56 0 01-9.27-1.14c-.05 0 .18-3.38.18-3.71 0-1.58-.05-1.71 1.58-1.76zM406.57 514.37a132.39 132.39 0 00-15.56.19 1.47 1.47 0 00-1.32 1.3l-.46 4.08a.57.57 0 00.11.54.55.55 0 00.38.1c2.18.06 4.36-.19 6.54 0 1.35.1 2.68.37 4 .52a49.33 49.33 0 006.66.12 33.47 33.47 0 009.27-1.14c.05 0-.18-3.39-.18-3.71 0-1.59.06-1.72-1.57-1.76z"
        fill="none"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M341.86 506.97s14.71-.75 17.35 0M359.23 499.05s6.41 6.41 6.41 7.92-8.3 6.79-8.3 6.79M438.07 493.29s13.33-6.24 16.06-6.54"
        fill="none"
        stroke="#33313f"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M451.15 479.42s8.35 3.52 8.92 4.91-5.12 9.42-5.12 9.42M437.93 509.27s13.55 5.75 15.6 7.59"
        fill="none"
        stroke="#33313f"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M456.99 509.73s3 8.57 2.3 9.93-10.43 2.48-10.43 2.48"
        fill="none"
        stroke="#33313f"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M490.52 477.84a6.61 6.61 0 01.43 3.48.51.51 0 01-.06.27.56.56 0 01-.42.15l-9.51.37s.54-2.8.61-3c.32-1.14 1.16-.84 2.23-.9z"
        fill="#fff"
        stroke="#33313f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="#33313f"
        d="M310.87 564.02l3.36-3.13-3-.12-1.57 2.41 1.21.84z"
      />
      <path
        fill="#65617d"
        d="M286.7 585.94l3.56-4.57.79-.82 10.9-11.42 3.71-3.88 1.74-.21 2.5-2.48 1.47 1.29-2.43 2.84.04 1.49-3.79 4.11-10.7 11.62-.69.74-4.3 3.98-2.8-2.69z"
      />
      <path
        fill="#33313f"
        d="M291.05 580.55l10.9-11.42 3.24 3.16-10.7 11.62-3.44-3.36z"
      />
      <path
        d="M352.27 606.11a48 48 0 01-8.19-10c-4.8-7.48-12.82-11.52-18.32-13.53v-2.43l.34-.07-.15-2.26h.15l-.39-6v-.05L323.73 542s-7.05-19.85 5.48-38.16.78-35.87-11-42.74c0 0-5.48-29-.78-35.87a203.68 203.68 0 00-19.68-9.95c-.11-.36-.2-.72-.29-1.1-.13-2.7-.3-5.4-.45-8.1a29.47 29.47 0 01.77-4.16c.15-.57.32-1.14.5-1.73a29.78 29.78 0 0019.15-27.61 29 29 0 00-1.86-10.24A12.87 12.87 0 00317 359c.75-3.09-.1-6.39-1.86-9.52-3.14-6.78-10.97-13.13-16.65-15.48-8.14-3.3-20.39-2.52-28.87-1.5-4.76.57-10.19 2.16-11.91 6.52-.63 1.6-.64 3.37-1.08 5-1.78 6.66-9.47 9.76-14.22 14.86-4.2 4.5-6 10.59-7.4 16.52a151.21 151.21 0 00-2.75 51.85c.48 4 1.12 7.95 1.8 11.91-2.86 4-5.44 11.07-4.26 23.35l-9.4 44.26-3.91 25.95s-2.35 10.68 7 19.84c6 5.84 13.25 15.71 17.72 22.1a52.45 52.45 0 00-2.85 17.59c.1 2.72.25 5.35.44 7.85a69.33 69.33 0 003 15.64c1.1 10.66 3.27 24.29 7.52 33l1.56 46.55s-2.35 42.74-7 51.13 10.17 79.37 10.17 79.37v9.92l-2.5 7.34-.63-.47c-11.74 14.5 0 19.84 0 19.84s3.2.15 8.31.35a9.36 9.36 0 005 10.34s66.53 3.05 78.28 0 8.61-13.74 2.34-13c-2.39.3-5.92-.33-9.37-1.22 3.65-4.25.73-10-3.93-9.46-6.26.76-20.35-4.78-20.35-4.78l-.07.09a10.5 10.5 0 00-1.38-.42 156.67 156.67 0 01-15.49-4.33c-3-6.43-10-23.71-5-37.11 2.26-6.06 3-14.12 3-21.94a249 249 0 0110.31-69.66l9.39-32s13.31-38.93 14.09-49.61l-.05-15.54c11 7 19.75 4.9 25.33 1.63a6 6 0 00.94-9.65zm-104.47-81c.27-1.12.49-2.34.68-3.63 1.84 0 3.69 0 5.53-.06a28.17 28.17 0 012.78 15c-4.24-1.31-10.58-4.52-8.99-11.26z"
        transform="translate(-44.77 -21.16)"
        fill="url(#PrototypingProcess_svg__a)"
      />
      <path
        d="M210.47 810.84l-3 9 9.79 9.79 32.39 7.53L273 834.9l-1.51-8.29a10 10 0 00-7.42-7.29c-9.6-2.26-27.9-7.4-31.75-14.55z"
        fill="#db8b8b"
      />
      <path
        d="M210.47 810.84l-3 9 9.79 9.79 32.39 7.53L273 834.9l-1.51-8.29a10 10 0 00-7.42-7.29c-9.6-2.26-27.9-7.4-31.75-14.55z"
        opacity={0.1}
      />
      <path
        d="M265.46 832.64l-4.52-6 4.52-7s13.55 5.47 19.58 4.72 9 9.79-2.26 12.8-75.32 0-75.32 0-11.3-5.27 0-19.58l9.79 7.53s16.57 9 24.86 7.53z"
        fill="#2e3037"
      />
      <path
        d="M285.79 845.45l-23.35 2.26-32.39-7.54-9.82-9.79.8-2.39 1.12-3.36 1.1-3.29 21.84-6a13.5 13.5 0 004.43 4.43c7.09 4.85 19.84 8.36 27.32 10.11.31.08.63.17.93.28a9.92 9.92 0 016.49 7z"
        fill="#db8b8b"
      />
      <path
        d="M285.79 845.45l-23.35 2.26-32.39-7.54-9.82-9.79.8-2.39 9 6.91s16.58 9 24.86 7.53h23.34l-4.52-6 4.06-6.27a9.92 9.92 0 016.49 7z"
        opacity={0.1}
      />
      <path
        d="M278.23 843.19l-4.52-6 4.52-7s13.56 5.47 19.58 4.72 9 9.79-2.25 12.81-75.33 0-75.33 0-11.3-5.28 0-19.59l9.79 7.53s16.58 9 24.86 7.54z"
        fill="#2e3037"
      />
      <path
        d="M259.43 406.32s-36.15 3.76-30.88-11.3a27 27 0 001.11-13.3 36.91 36.91 0 00-6.38-15.32l33.89 5.27a42.32 42.32 0 00-4.59 10.88c-4.04 15.99 6.85 23.77 6.85 23.77z"
        fill="#db8b8b"
      />
      <path
        d="M197.67 578.05s.75 32.39 8.28 48.21l1.51 45.94s-2.26 42.19-6.78 50.47 9.79 78.34 9.79 78.34v12.05s24.1 9 30.88-1.51l-6.78-89.63 3-124.28z"
        fill="#35323e"
      />
      <path
        d="M197.66 578.05s.75 32.39 8.28 48.21l1.51 45.94s-2.26 42.19-6.78 50.47 9.79 78.34 9.79 78.34v12.05s24.1 9 30.88-1.51l-6.78-89.63 3-124.28z"
        opacity={0.1}
      />
      <path
        d="M182.6 474.11l-4.52 12.05-3.76 25.61a22.65 22.65 0 006.78 19.58c9 9 21.09 27.87 21.09 27.87l14.31-42.93s-14.31-2.26-12-12.05 1.5-27.87 1.5-27.87z"
        fill={color}
      />
      <path
        d="M249.55 819.75c-9.67 15.21-24.7 6.59-27.37 4.88l1.1-3.29 21.84-6a13.5 13.5 0 004.43 4.41z"
        opacity={0.1}
      />
      <path
        d="M279.77 607.43c-.76 10.54-13.56 49-13.56 49l-9 31.61a251.29 251.29 0 00-9.98 68.72c0 7.71-.71 15.67-2.88 21.65-6 16.57 6 39.17 6 39.17-10.54 18.83-28.62 6-28.62 6v-12s-14.27-65.56-10.5-78.36 5.28-47.46 5.28-47.46v-62.51a70.9 70.9 0 01-20.67-45c-.18-2.47-.33-5.06-.42-7.75-.61-17 11-36.92 15.54-44 1.1-1.72 1.78-2.68 1.78-2.68l66.49 26.38.15.06v8.27z"
        fill="#35323e"
      />
      <path
        d="M257.17 371.67a42.32 42.32 0 00-4.59 10.88 29.42 29.42 0 01-22.92-.83 36.91 36.91 0 00-6.38-15.32z"
        opacity={0.1}
      />
      <circle cx={242.11} cy={353.59} r={29.38} fill="#db8b8b" />
      <path
        d="M279.77 558.47l-.33.06c-31.58 6.49-71.21-26.42-71.21-26.42a38 38 0 002.74-5.61c1.1-1.72 1.78-2.68 1.78-2.68l66.48 26.38.17 2.63z"
        opacity={0.1}
      />
      <path
        d="M271.48 405.57s-42.18-25.61-55.74-15.07l-18.83 24.1s-12.05 3.77-9.79 27.87l-9 43.69 27.11 6.78s15.82 15.06 3 36.91c0 0 39.92 33.14 71.56 26.36l-2.28-35.37s-6.78-19.59 5.27-37.66.75-35.4-10.54-42.18c-.01-.03-5.28-28.66-.76-35.43z"
        fill={color}
      />
      <path
        d="M273.74 559.22s15.82 3 23.35 15.07a46.86 46.86 0 007.89 9.85 6 6 0 01-.94 9.52c-6 3.6-15.72 5.81-28-4.31-21.13-17.32-2.3-30.13-2.3-30.13z"
        fill="#db8b8b"
      />
      <path
        d="M250.39 419.84s-15.06-1.51-18.83 37.66-9.79 48.2-9.79 48.2-3.77 20.34 5.27 32.39 26.36 37.75 26.36 37.75 18.84 5.28 22.6-13.56l-23.35-43.68s-3.76-15.07 5.27-25.61 15.82-80.65-7.53-73.15z"
        opacity={0.1}
      />
      <path
        d="M251.9 417.62s-15.07-1.51-18.83 37.66-9.79 48.2-9.79 48.2-3.77 20.36 5.27 32.36 26.36 37.66 26.36 37.66 18.83 5.28 22.6-13.55l-23.35-43.69s-3.77-15.07 5.27-25.61 15.8-80.57-7.53-73.03z"
        fill={color}
      />
      <path
        d="M264.33 445.84s1.5 23.35-5.28 36.16-6.78 29.37 0 38.41M268.09 417.24s-6-6-23.35-6.78-24.85-6-24.85-6"
        opacity={0.1}
      />
      <path
        d="M226.23 315.63c-4.58.56-9.81 2.13-11.46 6.44-.61 1.58-.62 3.32-1.05 5-1.71 6.58-9.11 9.64-13.68 14.67-4 4.44-5.81 10.45-7.12 16.3a153.13 153.13 0 00-2.69 51.14c1.47 12.49 4.47 24.78 5.32 37.33s-.7 25.75-7.56 36.29c-3 4.54-6.84 8.52-8.93 13.51 4.32 3.5 10.28 4 15.84 4.19q9.72.33 19.44 0c3.4-.12 6.95-.34 9.88-2.06a15.31 15.31 0 005.19-5.56c3.7-6.29 4.64-13.85 4.48-21.15s-1.31-14.55-1.45-21.85c-.07-4 .24-8.2 2.53-11.46 1.65-2.35 4.16-3.93 6.31-5.84 8.07-7.14 10.83-18.6 11.1-29.37s-1.5-21.56-.59-32.29c.35-4.21 1.92-9.25 6.06-10.07 1.3-.26 2.69 0 3.93-.5 3.32-1.27 3-5.95 3.94-9.37 1.07-3.85 4.35-6.82 5.27-10.7 2.17-9.11-9.43-20-17-23.16-7.85-3.28-19.64-2.49-27.76-1.49z"
        opacity={0.1}
      />
      <path
        d="M225.44 314.13c-4.58.56-9.81 2.13-11.46 6.43a46 46 0 00-1 5c-1.71 6.58-9.12 9.64-13.69 14.68-4 4.43-5.81 10.44-7.12 16.3a153.33 153.33 0 00-2.64 51.17c1.47 12.49 4.47 24.79 5.31 37.33s-.69 25.75-7.55 36.29c-3 4.54-6.84 8.52-8.93 13.51 4.32 3.51 10.28 4 15.84 4.19q9.72.33 19.44 0c3.4-.12 6.95-.33 9.88-2.06a15.13 15.13 0 005.18-5.56c3.71-6.29 4.64-13.85 4.49-21.15s-1.32-14.55-1.45-21.85c-.07-4 .24-8.2 2.52-11.45 1.66-2.36 4.17-3.94 6.32-5.84 8.06-7.15 10.83-18.61 11.1-29.38s-1.51-21.56-.6-32.29c.36-4.2 1.93-9.25 6.06-10.06 1.31-.26 2.7 0 3.94-.51 3.32-1.27 3-5.94 3.94-9.37 1.06-3.85 4.34-6.81 5.27-10.69 2.17-9.12-9.43-20-17-23.17-7.91-3.3-19.69-2.53-27.85-1.52z"
        fill="#35323e"
      />
    </svg>
  );
};

SvgPrototypingProcess.propTypes = {
  color: PropTypes.string
};
SvgPrototypingProcess.defaultProps = {
  color: "primary"
};
export default SvgPrototypingProcess;
