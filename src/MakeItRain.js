import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMakeItRain = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 974 714.52"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="MakeItRain_svg__a"
          x1={574.72}
          y1={713.31}
          x2={574.72}
          y2={358.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="MakeItRain_svg__b"
          x1={2975.38}
          y1={757.78}
          x2={2975.38}
          y2={205.6}
          gradientTransform="matrix(-1 0 0 1 3906 0)"
          xlinkHref="#MakeItRain_svg__a"
        />
      </defs>
      <path
        d="M128.9 362c-12.81 3.87-24.8 13.24-28 26.24-3.66 14.94 4.78 30 6 45.34 3.94 50.26-67.56 85.72-57.36 135.09 4.05 19.63 20.42 34.07 36.55 46 25.84 19.05 54.51 35.88 86.26 40.63 48.19 7.22 98.54-14 145.38-.59 37.78 10.82 66.69 42.53 104.21 54.23 28.56 8.91 59.33 5.4 89 1.79 16-1.94 32.76-4.18 45.67-13.78 24-17.87 25.51-53.16 41.58-78.45 24.82-39 79.24-46.66 124.87-39.08s89.94 26.24 136.17 24.72c9.88-.33 20-1.67 28.62-6.52 10.48-5.89 17.56-16.27 23.82-26.54a429.45 429.45 0 0062.27-213.39c.27-12.95-.19-26.46-6.28-37.89-7.7-14.46-23.09-23.11-38.41-28.93-36.79-14-77.43-16.29-113.48-32.08-34.77-15.23-62.93-41.94-93.21-64.83a496.49 496.49 0 00-204.49-91.07c-17.39-3.36-35.44-5.76-52.72-1.88-19.91 4.47-37.07 16.88-52.5 30.24-41.05 35.54-73.95 79.39-111.78 118.34a636.39 636.39 0 01-84.92 73.23c-14 10.09-28.88 22.07-44.48 29.53-14.28 6.82-27.67 5.1-42.77 9.65z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M311.88 46.14s-38.65 51.33-11 111.16-48.19 155.96-48.19 155.96"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M329.21 26.93c-3.07 13.21-17.76 21.08-17.76 21.08s-9.7-13.55-6.63-26.76 11-22.65 17.76-21.08 9.7 13.55 6.63 26.76z"
        fill="#8ed16f"
      />
      <ellipse
        cx={429.54}
        cy={116.72}
        rx={7.71}
        ry={2.89}
        transform="rotate(-76.9 314.63 141.512)"
        fill="#8ed16f"
      />
      <ellipse
        cx={429.54}
        cy={116.72}
        rx={7.71}
        ry={2.89}
        transform="rotate(-76.9 314.63 141.512)"
        opacity={0.3}
      />
      <path
        d="M322.53 85.62c-12.76 4.6-27.35-3.46-27.35-3.46s6.1-15.51 18.87-20.1 25-3 27.35 3.46-6.11 15.5-18.87 20.1z"
        fill="#8ed16f"
      />
      <ellipse
        cx={431.13}
        cy={166.12}
        rx={7.71}
        ry={2.89}
        transform="rotate(-20 107.753 441.898)"
        fill="#8ed16f"
      />
      <ellipse
        cx={431.13}
        cy={166.12}
        rx={7.71}
        ry={2.89}
        transform="rotate(-20 107.753 441.898)"
        opacity={0.3}
      />
      <path
        d="M319.56 132.39c-12.76 4.6-27.35-3.46-27.35-3.46s6.1-15.51 18.87-20.1 25-3 27.35 3.46-6.11 15.51-18.87 20.1z"
        fill="#8ed16f"
      />
      <ellipse
        cx={428.15}
        cy={212.9}
        rx={7.71}
        ry={2.89}
        transform="rotate(-19.8 106.054 490.29)"
        fill="#8ed16f"
      />
      <ellipse
        cx={428.15}
        cy={212.9}
        rx={7.71}
        ry={2.89}
        transform="rotate(-19.8 106.054 490.29)"
        opacity={0.3}
      />
      <path
        d="M334.47 187.26c-12.76 4.6-27.35-3.46-27.35-3.46s6.1-15.51 18.87-20.1 25-3 27.35 3.46-6.11 15.53-18.87 20.1z"
        fill="#8ed16f"
      />
      <ellipse
        cx={443.06}
        cy={267.79}
        rx={7.71}
        ry={2.89}
        transform="rotate(-19.8 120.977 545.177)"
        fill="#8ed16f"
      />
      <ellipse
        cx={443.06}
        cy={267.79}
        rx={7.71}
        ry={2.89}
        transform="rotate(-19.8 120.977 545.177)"
        opacity={0.3}
      />
      <path
        d="M324.77 237.44c-12.76 4.6-27.35-3.46-27.35-3.46s6.1-15.51 18.87-20.1 25-3 27.35 3.46-6.1 15.51-18.87 20.1z"
        fill="#8ed16f"
      />
      <ellipse
        cx={433.37}
        cy={317.95}
        rx={7.71}
        ry={2.89}
        transform="rotate(-20 109.708 593.154)"
        fill="#8ed16f"
      />
      <ellipse
        cx={433.37}
        cy={317.95}
        rx={7.71}
        ry={2.89}
        transform="rotate(-20 109.708 593.154)"
        opacity={0.3}
      />
      <path
        d="M264.92 98.91c9.42 9.76 26.07 9 26.07 9s1.37-16.61-8.05-26.37-21.09-13.78-26.07-9-1.37 16.61 8.05 26.37z"
        fill="#8ed16f"
      />
      <ellipse
        cx={387.28}
        cy={182.62}
        rx={2.89}
        ry={7.71}
        transform="rotate(-43.99 216.01 276.127)"
        fill="#8ed16f"
      />
      <ellipse
        cx={387.28}
        cy={182.62}
        rx={2.89}
        ry={7.71}
        transform="rotate(-43.99 216.01 276.127)"
        opacity={0.3}
      />
      <path
        d="M259.51 253.9c9.42 9.76 26.07 9 26.07 9s1.37-16.61-8.05-26.37-21.09-13.78-26.07-9-1.37 16.61 8.05 26.37z"
        fill="#8ed16f"
      />
      <ellipse
        cx={381.86}
        cy={337.61}
        rx={2.89}
        ry={7.71}
        transform="rotate(-43.99 210.604 431.128)"
        fill="#8ed16f"
      />
      <ellipse
        cx={381.86}
        cy={337.61}
        rx={2.89}
        ry={7.71}
        transform="rotate(-43.99 210.604 431.128)"
        opacity={0.3}
      />
      <path
        d="M272 153.69c12.14 6.06 27.57-.24 27.57-.24s-4.25-16.11-16.38-22.17-24.48-6-27.57.24 4.24 16.11 16.38 22.17z"
        fill="#8ed16f"
      />
      <ellipse
        cx={390.8}
        cy={234.8}
        rx={2.89}
        ry={7.71}
        transform="rotate(-63.48 259.318 279.767)"
        fill="#8ed16f"
      />
      <ellipse
        cx={390.8}
        cy={234.8}
        rx={2.89}
        ry={7.71}
        transform="rotate(-63.48 259.318 279.767)"
        opacity={0.3}
      />
      <path
        d="M277.09 208.26c12.14 6.06 27.57-.24 27.57-.24s-4.25-16.11-16.38-22.17-24.48-6-27.57.24 4.29 16.17 16.38 22.17z"
        fill="#8ed16f"
      />
      <ellipse
        cx={395.9}
        cy={289.38}
        rx={2.89}
        ry={7.71}
        transform="rotate(-63.48 264.412 334.35)"
        fill="#8ed16f"
      />
      <ellipse
        cx={395.9}
        cy={289.38}
        rx={2.89}
        ry={7.71}
        transform="rotate(-63.48 264.412 334.35)"
        opacity={0.3}
      />
      <path
        d="M125.73 156.47s70.59 70.59 30.74 175.34 68.31 278.94 68.31 278.94-1.16-.17-3.31-.55c-145-25.59-217-191.41-136.4-314.59 29.93-45.8 54.58-99.52 40.66-139.14z"
        fill="#8ed16f"
      />
      <path
        d="M0 441.98s80.55-12.83 87.89 59.36 154.89 82.2 154.89 82.2-1 .66-2.77 1.84c-121.83 80-238.29 50.94-220.74-55.25 6.54-39.49 6-79.14-19.27-88.15z"
        fill="#8ed16f"
      />
      <path
        d="M0 441.98s80.55-12.83 87.89 59.36 154.89 82.2 154.89 82.2-1 .66-2.77 1.84c-121.83 80-238.29 50.94-220.74-55.25 6.54-39.49 6-79.14-19.27-88.15z"
        fill="#fff"
        opacity={0.3}
      />
      <ellipse cx={105.34} cy={383.3} rx={22.15} ry={57.79} fill="#8ed16f" />
      <ellipse cx={105.34} cy={383.3} rx={22.15} ry={57.79} opacity={0.3} />
      <ellipse
        cx={192.81}
        cy={662.42}
        rx={14.93}
        ry={33.23}
        transform="rotate(-45 24.373 752.444)"
        fill="#8ed16f"
      />
      <ellipse
        cx={192.81}
        cy={662.42}
        rx={14.93}
        ry={33.23}
        transform="rotate(-45 24.373 752.444)"
        opacity={0.3}
      />
      <path
        d="M836.89 358.2H312.55a23.89 23.89 0 00-23.89 23.89v307.33a23.89 23.89 0 0023.89 23.89h524.34a23.89 23.89 0 0023.89-23.89V382.09a23.89 23.89 0 00-23.89-23.89z"
        transform="translate(-113 -92.74)"
        fill="url(#MakeItRain_svg__a)"
      />
      <rect
        x={182.39}
        y={269.64}
        width={558.65}
        height={346.75}
        rx={24.81}
        ry={24.81}
        fill={color}
      />
      <path fill={color} d="M182.39 330.32h558.65v63.57H182.39z" />
      <path opacity={0.3} d="M182.39 330.32h558.65v63.57H182.39z" />
      <path fill="#d6d6e3" d="M235.37 441.09h452.7v30.82h-452.7z" />
      <circle cx={272.93} cy={548.97} r={44.31} fill={color} />
      <circle cx={272.93} cy={548.97} r={44.31} opacity={0.3} />
      <path
        d="M822.28 276.88a9.7 9.7 0 004.27 5.4c9.19 6.07 29.17 4.78 31.57 4.78.51 0 1.18.91 1.92 2.44 3.53 7.28 9 28.62 9.37 33.42.49 5.81 5.89 33 14.73 43.13.27.31.54.6.8.87 8.67 8.71 18.84-.87 18.84-.87l1.46-5.07c-.41 2-.87 4.33-1.33 6.94-.23 1.31-.46 2.7-.68 4.13a158.29 158.29 0 00-2.07 24.37 88.41 88.41 0 00.38 8.88c.08.82.17 1.63.28 2.42a84.78 84.78 0 01.66 10.84c-.08 21.52-5.57 48.29-5.57 48.29l.21-.07c-.13.67-.21 1-.21 1l.32-.1q-.23 1.49-.44 3.05c-1.86 13.5-2.93 30.3-3.44 40a80.1 80.1 0 00.68 15.32l9.76 68.71v32a56.5 56.5 0 001.76 14.38c3.18 12.09.56 54.29-.91 74.31-.41 5.46-.73 9.28-.82 10.38v.33l.28-.11v.35a5.65 5.65 0 011.3-.38c-3.87 6-10.88 15.92-16.27 17.59A17.07 17.07 0 00881 749l-.14.19-.2.28a6 6 0 00-1.17 3.06 3.38 3.38 0 01-.18-.59c-.41 2.23.93 4.27 5.14 5.26a34.6 34.6 0 007.45.6c14.6 0 40.51-4.49 43.37-9.32v-16.66l.47.15v.15l1.79.59 4.91-16.48c5.89-4.36 1-82.39 0-100.32-.9-16.34 9.21-81.34 11-92.79l-.24-.29.27-1.67a7.11 7.11 0 011 .88 13.07 13.07 0 011.53 2.26 30.22 30.22 0 012.17 4.48c9.88 24.64 14.33 95.1 14.33 101.42v66.26a69 69 0 002.7 19.33 82.91 82.91 0 012.1 10.06c.21 1.33.39 2.65.56 3.91s.34 2.7.47 3.88c0 .31.07.61.1.89s0 .27 0 .41c.27 2.61.41 4.32.41 4.32a1 1 0 01.2-.39l.05.63a1.35 1.35 0 01.39-.62 9.47 9.47 0 011.32-1.08v8.42l-.24-.18v1.45c10.18 7.68 26.75 10 39.47 9.91 8.25 0 14.93-1 17.25-2.16 3.32-1.63 1.5-5.43-1.52-8.34-2.34-2.26-5.39-4-7.32-3.78-3.22.35-14.23-12.12-20-18.95l.65-.29.92-.4V613s1.48-43.62 5.89-86.76a153.48 153.48 0 00-7.55-64.36l-.14-.41 1.34.21c1.42.22 2.18.35 2.18.35s0-.34-.09-1h.09s-1.72-18.71-1.74-42.21c0-26.64 2.25-59.12 11.56-77.5 5.36-10.58 7.15-19 7-25.64a26.82 26.82 0 00-4.79-16.4 13 13 0 00-5.51-4.36l-.19-.11h-.1a13.7 13.7 0 00-5.06-1h-20.11a13.43 13.43 0 01-6.64-1.75l-7.87-4.46c-2.62-5.73-3-12.83-2.44-19.49 0-.53.1-1.06.15-1.58l.57-.6c.44-.47.85-1 1.25-1.45a11.15 11.15 0 01-.09 1.18c-.1.63-.27 1-.54 1.08 4.3-.56 9.1-1.41 11.74-4.73.11-.13.21-.27.31-.41a21.43 21.43 0 001.93-4 11.62 11.62 0 011.47-2.68c.66-.86 1.52-1.56 2.23-2.38l.12-.14c2.53-3 2.67-7.3 2.7-11.22.05-9.52-.23-20-6.6-27.14-5.29-5.94-13.73-8.19-21.74-8.45s-16 1.18-24 1.22c-5.44 0-12-.09-15 4.41-1.47 2.21-1.65 5.1-3.25 7.22-.92 1.22-2.33 2.27-2.41 3.79a3.89 3.89 0 00.52 2v.07c1.94 3.82 6.06 6.2 10.36 6.95a25.81 25.81 0 00-2 2.76 26.28 26.28 0 00-4 14c0 .58 0 1.15.06 1.72a26.43 26.43 0 008.38 17.61c-.08.56-.16 1.12-.25 1.67l.18.16q.85.77 1.77 1.46l.22.17v1c0 .58 0 1.17-.06 1.74s0 .92-.06 1.38l-.13-.11-9.77-8.16-15.71-14.54s-39.28-28.59-41.25-15a9.79 9.79 0 001.87 6.78c7.21 11 32 20.36 32 20.36s14.78 15.63 24.67 32.48c-.35.19-.7.37-1.07.54-8.8 4.09-21.64 2.36-21.64 2.36-14.83 2.31-16.17 18.56-16.09 25.13V326.12L873 279.91l-.06-.14a9.73 9.73 0 00-7.36-5.78c-13.16-2.21-46.05-6.82-43.3 2.89zm82.39 449a8.57 8.57 0 01.87-.16l-.09.14z"
        transform="translate(-113 -92.74)"
        fill="url(#MakeItRain_svg__b)"
      />
      <path
        d="M890 623.69s18.64 23.43 22.95 22.95 14.34 9.08 8.61 12-38.72 4.78-55-7.65v-18.73zM795.81 625.12s-11 19.6-18.64 22-14.34 11-4.3 13.39 45.9-2.87 49.24-8.61v-25.35z"
        fill="#aca9c9"
      />
      <path
        d="M782 432.57l9.5 67.78v31.51a56.48 56.48 0 001.72 14.18c3.1 11.93.55 53.55-.89 73.3-.47 6.44-.83 10.56-.83 10.56 6.21-2.87 32.51 6.21 32.51 6.21l2.66-9.05 2.12-7.2c5.74-4.3 1-81.27 0-99-.65-12.11 4.75-51.37 8.21-74.9 1-6.65 1.81-12 2.3-15.22.31-2 .48-3.11.48-3.11a10.47 10.47 0 012.58 3.11 29.93 29.93 0 012.11 4.42c9.62 24.31 14 93.81 14 100v65.36a68.92 68.92 0 002.63 19.07 100 100 0 012.59 13.77c.68 5.19 1 9.37 1 9.37.48-2.87 30.12-15.78 30.12-15.78v-109s1.43-43 5.74-85.58a152.68 152.68 0 00-5.5-57.58c-1.19-4.07-2.38-7.52-3.41-10.25-1.75-4.65-3-7.22-3-7.22H791c-1.64.31-3 3.61-4.23 8.62-.8 3.36-1.5 7.48-2.11 12-1.81 13.31-2.85 29.88-3.35 39.46a79.86 79.86 0 00.69 15.17z"
        fill="#618fd8"
      />
      <g opacity={0.1}>
        <path d="M893.09 627.26v-109s1.43-43 5.74-85.58-12-75.06-12-75.06h1.91s16.25 32.51 12 75.06-5.74 85.58-5.74 85.58v109s-29.64 12.91-30.12 15.78c0 0 0-.64-.15-1.74 6.46-4.49 28.36-14.04 28.36-14.04zM794.37 629.6a7.42 7.42 0 00-2.63.54v-.48a17.06 17.06 0 012.63-.06zM827.12 620.1c5.74-4.3 1-81.27 0-99s11-93.22 11-93.22a8.34 8.34 0 011.65 1.7c-1.76 11.28-11.6 75.41-10.73 91.52 1 17.69 5.74 94.66 0 99l-4.78 16.25-1.74-.58z" />
      </g>
      <path
        d="M801.54 239.31l-10 35.38s-10.52 10-19.12 0-13.9-36.81-14.42-42.55-8.13-35.38-11-35.38-31.55 1.91-34.9-10c-2.68-9.58 29.34-5 42.16-2.85a9.5 9.5 0 017.17 5.7l19.66 46.95s10.41-12.07 20.45 2.75zM866.08 157.08s-12.43 34.9 3.35 47.33S813 220.19 813 220.19l9.8-9.32s6.93-27.49 2.15-50.44z"
        fill="#f7c4a7"
      />
      <path
        d="M850.78 204.41s12.67-3.11 12.67-6.45l11.23 6.45h28.21s20.56 11.47 3.35 45.9-9.56 119-9.56 119-61.19-11-111.87 5.74c0 0 7.65-37.77 4.78-59.28s4.78-51.63 4.78-51.63l4.3-18.17s-.24-17-17.93-8.37c0 0-2.63-24.62 15.54-27.49 0 0 21 2.87 27.25-7.65 0 .04 13.87 8.17 27.25 1.95z"
        opacity={0.1}
      />
      <path
        d="M850.78 203.46s12.67-3.11 12.67-6.45l8.23 4.73a13 13 0 006.46 1.72h19.73a13 13 0 0110.57 5.38c4.53 6.37 8.59 18.93-2.2 40.52-17.21 34.42-9.56 119-9.56 119s-61.19-11-111.87 5.74c0 0 7.65-37.77 4.78-59.28s4.78-51.56 4.78-51.56l4.3-18.17s-.24-17-17.93-8.37c0 0-2.56-23.94 14.79-27.36a4.9 4.9 0 011.47-.1c3.71.39 21 1.64 26.54-7.73-.01.01 13.86 8.14 27.24 1.93z"
        fill="#e14b5a"
      />
      <path
        d="M899.07 246.96s-15.3 9.56-40.16 0c0 0-27.25-10-35.86-29.64s43.5 3.35 43.5 3.35 11 0 14.34-2.39 26.78 18.16 18.18 28.68z"
        opacity={0.1}
      />
      <path
        d="M899.07 245.05s-15.3 9.56-40.16 0c0 0-27.25-10-35.86-29.64s-28.68-41.15-28.68-41.15-34.9-13.39-33-26.77 40.16 14.82 40.16 14.82l15.3 14.34 49.72 42.07s11 0 14.34-2.39 26.78 18.2 18.18 28.72z"
        fill="#f7c4a7"
      />
      <path
        d="M824.49 161.86l41.11-3.35a94.37 94.37 0 00-4.29 19.47 26.27 26.27 0 01-36.8 1 46.73 46.73 0 00-.02-17.12z"
        opacity={0.1}
      />
      <circle cx={842.9} cy={158.28} r={26.29} fill="#f7c4a7" />
      <path
        d="M857.33 163.99c-1.54-2.54 1.59-5.85.56-8.63-.95-2.56-4.73-3-6-5.39-1-1.93 0-4.3-.4-6.43-.57-2.75-3.53-4.46-6.34-4.6s-5.52.91-8.19 1.81c-4.35 1.47-8.93 2.6-13.49 2.08s-9.11-3-11.14-7.07a4 4 0 01-.51-1.94c.08-1.5 1.46-2.53 2.35-3.73 1.56-2.09 1.74-4.94 3.16-7.12 2.9-4.44 9.27-4.33 14.57-4.35 7.8 0 15.56-1.46 23.36-1.2s16 2.47 21.17 8.33c6.2 7.05 6.48 17.37 6.43 26.77 0 3.87-.16 8.08-2.63 11.07-.72.87-1.6 1.59-2.29 2.48-1.5 2-1.9 4.56-3.31 6.59-2.5 3.61-7.38 4.49-11.73 5.07 1.28-.17.22-8.74 0-9.53-.84-3.94-1.75-3.86-5.57-4.21z"
        opacity={0.1}
      />
      <path
        d="M857.33 163.04c-1.54-2.54 1.59-5.85.56-8.63-.95-2.56-4.73-3-6-5.39-1-1.93 0-4.3-.4-6.43-.57-2.75-3.53-4.46-6.34-4.6s-5.52.91-8.19 1.81c-4.35 1.47-8.93 2.6-13.49 2.08s-9.11-3-11.14-7.07a4 4 0 01-.51-1.94c.08-1.5 1.46-2.53 2.35-3.73 1.56-2.09 1.74-4.94 3.16-7.12 2.9-4.44 9.27-4.33 14.57-4.35 7.8 0 15.56-1.46 23.36-1.2s16 2.47 21.17 8.33c6.2 7.05 6.48 17.37 6.43 26.77 0 3.87-.16 8.08-2.63 11.07-.72.87-1.6 1.59-2.29 2.48-1.5 2-1.9 4.56-3.31 6.59-2.5 3.61-7.38 4.49-11.73 5.07 1.28-.17.22-8.74 0-9.53-.84-3.99-1.75-3.87-5.57-4.21z"
        fill="#281c1c"
      />
      <path
        d="M898.83 248.16s-12.91-33.47-22.95-34.42 19.12 0 19.12 0l9.56 17.21z"
        opacity={0.1}
      />
      <path
        d="M899.79 248.16s-12.91-33.47-22.95-34.42 19.12 0 19.12 0l9.56 17.21z"
        fill="#e14b5a"
      />
      <path
        d="M863.65 633.44c.68 5.19 1 9.37 1 9.37.48-2.87 30.12-15.78 30.12-15.78v-7.77a13.18 13.18 0 00-2.26.11c-5.75.77-11.08 3.56-16 6.54a145.93 145.93 0 01-12.86 7.53z"
        fill="#618fd8"
      />
      <path
        d="M863.65 633.44c.68 5.19 1 9.37 1 9.37.48-2.87 30.12-15.78 30.12-15.78v-7.77a13.18 13.18 0 00-2.26.11c-5.75.77-11.08 3.56-16 6.54a145.93 145.93 0 01-12.86 7.53z"
        opacity={0.3}
      />
      <path
        d="M791.5 629.9c6.21-2.87 32.51 6.21 32.51 6.21l2.66-9.05c-4.59-.93-9.15-2.09-13.63-3.47a45.34 45.34 0 01-6.12-2.26 41 41 0 00-4.08-1.9c-3.43-1.18-7-.68-10.52-.09-.46 6.44-.82 10.56-.82 10.56z"
        fill="#618fd8"
      />
      <path
        d="M791.5 629.9c6.21-2.87 32.51 6.21 32.51 6.21l2.66-9.05c-4.59-.93-9.15-2.09-13.63-3.47a45.34 45.34 0 01-6.12-2.26 41 41 0 00-4.08-1.9c-3.43-1.18-7-.68-10.52-.09-.46 6.44-.82 10.56-.82 10.56z"
        opacity={0.3}
      />
      <path
        d="M921.3 657.15a2.86 2.86 0 001.64-1.9 2.81 2.81 0 01-1.64 3.33c-5.74 2.87-38.72 4.78-55-7.65v-1.43c16.28 12.43 49.26 10.52 55 7.65zM772.62 659.06c10 2.39 45.9-2.87 49.24-8.61v1.43c-3.35 5.74-39.2 11-49.24 8.61-4.1-1-5.41-3-5-5.19.32 1.62 1.82 2.96 5 3.76z"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M830.94 310.79s-10.52-3.35-13.39 0-27.4 11.2-27.4 11.2"
        opacity={0.1}
      />
      <path fill="#8ed16f" d="M763.06 179.43h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 180.51h-51.15v-1.08h51.15z" />
      <path opacity={0.1} d="M763.06 180.51h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 181.59h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 182.66h-51.15v-1.08h51.15z" />
      <path opacity={0.1} d="M763.06 182.66h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 183.74h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 184.81h-51.15v-1.08h51.15z" />
      <path opacity={0.1} d="M763.06 184.81h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 185.89h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 186.96h-51.15v-1.08h51.15z" />
      <path opacity={0.1} d="M763.06 186.96h-51.15v-1.08h51.15z" />
      <path
        fill="#8ed16f"
        d="M763.06 170.83h-51.15v-1.08h51.15zM787.416 177.968L748.09 145.26l.69-.83 39.327 32.707zM751.562 160.76l-39.326-32.708.69-.83 39.327 32.707z"
      />
      <path fill="#8ed16f" d="M763.06 171.9h-51.15v-1.08h51.15z" />
      <path opacity={0.1} d="M763.06 171.9h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 172.99h-51.15v-1.08h51.15z" />
      <path fill="#8ed16f" d="M763.06 174.06h-51.15v-1.08h51.15z" />
      <path opacity={0.1} d="M763.06 174.06h-51.15v-1.08h51.15z" />
      <path
        fill="#8ed16f"
        d="M763.06 175.13h-51.15v-1.08h51.15zM763.06 176.21h-51.15v-1.08h51.15z"
      />
      <path opacity={0.1} d="M763.06 176.21h-51.15v-1.08h51.15z" />
      <path
        fill="#8ed16f"
        d="M763.06 177.28h-51.15v-1.08h51.15zM763.06 178.36h-51.15v-1.08h51.15z"
      />
      <path opacity={0.1} d="M763.06 178.36h-51.15v-1.08h51.15z" />
      <path
        fill="#8ed16f"
        d="M723.753 223.696l-18.326-3.403 6.633-35.72 18.326 3.404z"
      />
      <ellipse
        cx={831.11}
        cy={296.96}
        rx={7.65}
        ry={3.82}
        transform="rotate(-79.48 718.88 318.531)"
        fill="#8ed16f"
      />
      <ellipse
        cx={831.11}
        cy={296.96}
        rx={7.65}
        ry={3.82}
        transform="rotate(-79.48 718.88 318.531)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M726.889 299.09l-18.327-3.403 6.633-35.72 18.327 3.403z"
      />
      <ellipse
        cx={834.25}
        cy={372.34}
        rx={7.65}
        ry={3.82}
        transform="rotate(-79.48 722.016 393.922)"
        fill="#8ed16f"
      />
      <ellipse
        cx={834.25}
        cy={372.34}
        rx={7.65}
        ry={3.82}
        transform="rotate(-79.48 722.016 393.922)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M633.405 126.764l8.871-16.393 31.952 17.29-8.871 16.394z"
      />
      <ellipse
        cx={766.7}
        cy={220.15}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.3 634.38 266.702)"
        fill="#8ed16f"
      />
      <ellipse
        cx={766.7}
        cy={220.15}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.3 634.38 266.702)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M563.248 450.288l8.87-16.394 31.952 17.291-8.87 16.394z"
      />
      <ellipse
        cx={696.55}
        cy={543.69}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 562.24 592.135)"
        fill="#8ed16f"
      />
      <ellipse
        cx={696.55}
        cy={543.69}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 562.24 592.135)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M520.323 183.305l8.871-16.393 31.952 17.29-8.872 16.394z"
      />
      <ellipse
        cx={653.62}
        cy={276.69}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 519.31 325.14)"
        fill="#8ed16f"
      />
      <ellipse
        cx={653.62}
        cy={276.69}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 519.31 325.14)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M574.122 126.76l8.871-16.394 31.952 17.291-8.871 16.394z"
      />
      <ellipse
        cx={707.42}
        cy={220.15}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 573.106 268.598)"
        fill="#8ed16f"
      />
      <ellipse
        cx={707.42}
        cy={220.15}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 573.106 268.598)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M618.177 179.112l18.53-2.026 3.948 36.115-18.53 2.026z"
      />
      <ellipse
        cx={742.19}
        cy={288.87}
        rx={3.82}
        ry={7.65}
        transform="rotate(-6.24 -164.491 1279.245)"
        fill="#8ed16f"
      />
      <ellipse
        cx={742.19}
        cy={288.87}
        rx={3.82}
        ry={7.65}
        transform="rotate(-6.24 -164.491 1279.245)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M745.218 376.87l18.53-2.026 3.948 36.115-18.53 2.026z"
      />
      <ellipse
        cx={869.25}
        cy={486.61}
        rx={3.82}
        ry={7.65}
        transform="rotate(-6.24 -37.272 1477.083)"
        fill="#8ed16f"
      />
      <ellipse
        cx={869.25}
        cy={486.61}
        rx={3.82}
        ry={7.65}
        transform="rotate(-6.24 -37.272 1477.083)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M555.278 270.197l8.872-16.394 31.951 17.291-8.871 16.394z"
      />
      <ellipse
        cx={688.57}
        cy={363.6}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 554.256 412.047)"
        fill="#8ed16f"
      />
      <ellipse
        cx={688.57}
        cy={363.6}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 554.256 412.047)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M474.65 247.169l8.87-16.394 31.952 17.291-8.87 16.394z"
      />
      <ellipse
        cx={607.95}
        cy={340.56}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.3 475.82 387.882)"
        fill="#8ed16f"
      />
      <ellipse
        cx={607.95}
        cy={340.56}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.3 475.82 387.882)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M448.826 634.876l8.872-16.394 31.951 17.29-8.871 16.394z"
      />
      <ellipse
        cx={582.13}
        cy={728.27}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 447.813 776.723)"
        fill="#8ed16f"
      />
      <ellipse
        cx={582.13}
        cy={728.27}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 447.813 776.723)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M431.05 643.128l3.4-18.327 35.721 6.627-3.4 18.327z"
      />
      <path
        opacity={0.05}
        d="M431.05 643.128l3.4-18.327 35.721 6.627-3.4 18.327z"
      />
      <ellipse
        cx={563.55}
        cy={730.21}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 451.323 751.791)"
        fill="#8ed16f"
      />
      <ellipse
        cx={563.55}
        cy={730.21}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 451.323 751.791)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M434.398 654.119l3.4-18.327 35.72 6.627-3.4 18.327z"
      />
      <ellipse
        cx={566.9}
        cy={741.2}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 454.667 762.79)"
        fill="#8ed16f"
      />
      <ellipse
        cx={566.9}
        cy={741.2}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 454.667 762.79)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M486.515 681.994l8.872-16.394 31.951 17.29-8.871 16.394z"
      />
      <ellipse
        cx={619.82}
        cy={775.39}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 485.506 823.835)"
        fill="#8ed16f"
      />
      <ellipse
        cx={619.82}
        cy={775.39}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 485.506 823.835)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M468.747 690.234l3.4-18.327 35.72 6.626-3.4 18.328z"
      />
      <path
        opacity={0.05}
        d="M468.747 690.234l3.4-18.327 35.72 6.626-3.4 18.328z"
      />
      <ellipse
        cx={601.25}
        cy={777.32}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 489.013 798.907)"
        fill="#8ed16f"
      />
      <ellipse
        cx={601.25}
        cy={777.32}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 489.013 798.907)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M472.092 701.236l3.4-18.327 35.72 6.627-3.4 18.327z"
      />
      <ellipse
        cx={604.59}
        cy={788.32}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 492.362 809.9)"
        fill="#8ed16f"
      />
      <ellipse
        cx={604.59}
        cy={788.32}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 492.362 809.9)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M543.063 651.629l8.872-16.394 31.951 17.29-8.87 16.394z"
      />
      <ellipse
        cx={676.36}
        cy={745.02}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 542.04 793.474)"
        fill="#8ed16f"
      />
      <ellipse
        cx={676.36}
        cy={745.02}
        rx={3.82}
        ry={7.65}
        transform="rotate(-61.58 542.04 793.474)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M525.29 659.875l3.4-18.328 35.72 6.627-3.4 18.327z"
      />
      <path
        opacity={0.05}
        d="M525.29 659.875l3.4-18.328 35.72 6.627-3.4 18.327z"
      />
      <ellipse
        cx={657.79}
        cy={746.96}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 545.555 768.546)"
        fill="#8ed16f"
      />
      <ellipse
        cx={657.79}
        cy={746.96}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 545.555 768.546)"
        opacity={0.1}
      />
      <path
        fill="#8ed16f"
        d="M528.635 670.875l3.4-18.327 35.72 6.627-3.4 18.327z"
      />
      <ellipse
        cx={661.13}
        cy={757.96}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 548.904 779.538)"
        fill="#8ed16f"
      />
      <ellipse
        cx={661.13}
        cy={757.96}
        rx={3.82}
        ry={7.65}
        transform="rotate(-79.49 548.904 779.538)"
        opacity={0.1}
      />
    </svg>
  );
};

SvgMakeItRain.propTypes = {
  color: PropTypes.string
};
SvgMakeItRain.defaultProps = {
  color: "primary"
};
export default SvgMakeItRain;
