import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgSelfieTime = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 930 780.38"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="SelfieTime_svg__a"
          x1={561.5}
          y1={687.61}
          x2={561.5}
          y2={99.31}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="SelfieTime_svg__b"
          x1={564.77}
          y1={587.09}
          x2={564.77}
          y2={200.06}
          xlinkHref="#SelfieTime_svg__a"
        />
        <linearGradient
          id="SelfieTime_svg__c"
          x1={666.9}
          y1={489.56}
          x2={864.37}
          y2={489.56}
          xlinkHref="#SelfieTime_svg__a"
        />
      </defs>
      <ellipse cx={465} cy={655.86} rx={465} ry={124.52} fill="#f5f5f5" />
      <path
        d="M270.82 382.11s35.83 35.83 15.6 89S321.1 612.7 321.1 612.7s-.59-.09-1.68-.28c-73.59-13-110.16-97.16-69.24-159.69 15.21-23.24 27.7-50.54 20.64-70.62z"
        fill={color}
      />
      <path
        d="M270.82 382.11s20.23 43.92 0 79.75-3.47 136.39 50.28 150.84"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M207 527.04s40.89-6.51 44.61 30.13 78.62 41.72 78.62 41.72l-1.4.93c-61.84 40.59-121 25.86-112-28 3.27-20.08 3-40.21-9.83-44.78z"
        fill={color}
      />
      <path
        d="M207 527.04s40.89-6.51 44.61 30.13 78.62 41.72 78.62 41.72l-1.4.93c-61.84 40.59-121 25.86-112-28 3.27-20.08 3-40.21-9.83-44.78z"
        fill="#f5f5f5"
        opacity={0.2}
      />
      <path
        d="M207 527.04s31.74 7 29.13 35.82 47.13 63.45 94.1 36"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M684.72 99.31H438.28a24.37 24.37 0 00-24.42 24.33v539.64a24.37 24.37 0 0024.42 24.33h246.44a24.37 24.37 0 0024.42-24.33V123.64a24.37 24.37 0 00-24.42-24.33z"
        transform="translate(-135 -59.81)"
        fill="url(#SelfieTime_svg__a)"
      />
      <rect
        x={281.11}
        y={44.01}
        width={290.77}
        height={581.54}
        rx={26.87}
        ry={26.87}
        fill="#535461"
      />
      <path fill="#fff" d="M302.53 98.1h247.94v473.34H302.53z" />
      <circle cx={397.2} cy={71.06} r={2.25} fill="#fff" />
      <rect
        x={408.47}
        y={68.8}
        width={49.59}
        height={4.51}
        rx={1}
        ry={1}
        fill="#fff"
      />
      <circle cx={425.37} cy={593.99} r={15.78} fill="#fff" />
      <path
        fill={color}
        opacity={0.2}
        d="M115.5 87h52v27h-52zM152.5 118h52v27h-52zM52.5 89h52v27h-52zM436.5 0h52v27h-52zM373.5 2h52v27h-52zM219.5 149h52v27h-52zM156.5 151h52v27h-52zM89.5 120h52v27h-52zM707.5 195h52v27h-52zM744.5 226h52v27h-52zM644.5 197h52v27h-52zM748.5 259h52v27h-52zM668.5 440h52v27h-52zM672.5 473h52v27h-52zM154.5 429h52v27h-52zM158.5 462h52v27h-52zM681.5 228h52v27h-52zM115.5 233h52v27h-52zM152.5 264h52v27h-52zM52.5 235h52v27h-52zM219.5 295h52v27h-52zM156.5 297h52v27h-52zM89.5 266h52v27h-52zM216.5 503h52v27h-52zM153.5 505h52v27h-52zM651.5 72h52v27h-52zM588.5 74h52v27h-52zM625.5 105h52v27h-52z"
      />
      <path
        d="M689.73 723.5s-13.26-45 2.49-78.14a71.09 71.09 0 005.75-44.6 119.57 119.57 0 00-6.31-20.93"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M701.45 558.88c0 5.52-10 21.51-10 21.51s-10-16-10-21.51a10 10 0 0120 0zM718 589.44c-3 4.63-20.08 12.63-20.08 12.63s.31-18.86 3.31-23.49A10 10 0 11718 589.44zM717.24 641.66c-4.93 2.48-23.71.77-23.71.77s9.79-16.12 14.71-18.6a10 10 0 119 17.84zM707.8 681.04c-4.44 3.28-23.24 4.76-23.24 4.76s6.92-17.54 11.36-20.82a10 10 0 1111.88 16.06zM676.91 603.14c4 3.84 22.39 7.83 22.39 7.83s-4.51-18.31-8.47-22.15a10 10 0 10-13.92 14.33zM666.45 649.34c4.93 2.48 23.71.77 23.71.77s-9.79-16.12-14.71-18.6a10 10 0 10-9 17.84zM662.45 695.64c4.44 3.28 23.24 4.76 23.24 4.76s-6.92-17.54-11.36-20.82a10 10 0 00-11.88 16.06z"
        fill={color}
      />
      <path
        d="M365 520.37s-8.83-30 1.66-52.07a47.37 47.37 0 003.83-29.72 79.67 79.67 0 00-4.21-13.95"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M372.82 410.68c0 3.68-6.66 14.33-6.66 14.33s-6.66-10.66-6.66-14.33a6.66 6.66 0 1113.31 0zM383.82 431.04c-2 3.09-13.38 8.42-13.38 8.42s.21-12.56 2.2-15.65a6.66 6.66 0 0111.17 7.23zM383.34 465.83c-3.28 1.65-15.8.51-15.8.51s6.52-10.74 9.8-12.4a6.66 6.66 0 016 11.88zM377 492.08c-3 2.19-15.48 3.17-15.48 3.17s4.61-11.69 7.57-13.87a6.66 6.66 0 117.92 10.7zM356.47 440.19c2.64 2.56 14.92 5.21 14.92 5.21s-3-12.2-5.64-14.76a6.66 6.66 0 00-9.27 9.55zM349.5 470.95c3.28 1.65 15.8.51 15.8.51s-6.52-10.74-9.8-12.4a6.66 6.66 0 10-6 11.88zM346.83 501.8c3 2.19 15.48 3.17 15.48 3.17s-4.61-11.69-7.57-13.87a6.66 6.66 0 10-7.92 10.7z"
        fill={color}
      />
      <path
        d="M622.35 391l-2.85-34.19a8.94 8.94 0 002.85-1.54l-.32-1.14c.11-.08.22-.15.32-.23l-4.81-17.18s-2.51-20.93-2.63-31.43c0-2.23.19-3.8.57-4.31.61-.82.8-3 .76-5.76 0-1.63 0-3.52-.19-5.45.73-4.93 1.19-14.74-5.57-19.62a50.32 50.32 0 007.62-27.16c0-23.69-15.09-42.89-33.7-42.89s-33.7 19.2-33.7 42.89a51.92 51.92 0 004.46 21.31c-4.41.57-12.62 2.35-14.6 7.81-2.75 7.56-33.67 50.17-33.67 50.17v18.56a43.7 43.7 0 0012.14.64l27 25.47s1.38-.2 3.49-.63a144.84 144.84 0 00-2.27 25 78.84 78.84 0 001.54 16.86S558.66 433 559 447.67a18.37 18.37 0 01-.56 4.45l.29.06c-.08.46-.17.9-.29 1.32 0 0 2.06.41 5.39.86L566 470s1.37 29.55 5.5 33.67l2.92 10.5-.57 2.47s-7.49 23.11-9.69 26.47c-1.33 1.48-2.19 7.11-.43 10.54a4.58 4.58 0 004.07 2.72c6.51.35 9.57.08 14.11-11.43l.63-1.61 1.09 3.92-.42.41s2.41 23.71.69 28.18c-1.1 2.87 2.06 13.06 8.25 11S601 583.38 601 571s-3.78-26.46-5.84-29.89a1.41 1.41 0 00-.58-.54c-1.83-9.87-4.6-25.53-4.74-31l10.57-39a67.31 67.31 0 001.85-9.5l1.12-9.23a28.9 28.9 0 005.86-3.13v-1.34s-.08-1.67-.1-4.37c0-7.34.63-20.23 4-29.71.7 3.71 2 6.37 4.35 5.9 6.92-1.43 4.86-28.19 4.86-28.19zm-8.47-33.41h.56l-.12 2.59q-.22-1.35-.45-2.63zm-60-10.77c-1.15 5.31-7.78 6.38-7.78 6.38l-14.61-16.3a15.43 15.43 0 002.24-2.26s-.39-.08-1-.26c.35-.35.68-.72 1-1.12 0 0-7.52-1.43-8.08-7.14.18-2 1.12-4.37 3.27-7.29l17.87-19.93s10.79 7.73 11 28.05a67.71 67.71 0 01-.73 9.06s-1.44 4.18-3.21 10.8z"
        transform="translate(-135 -59.81)"
        fill="url(#SelfieTime_svg__b)"
      />
      <path
        d="M482.79 290.82l3.37 40.37s2 26.25-4.71 27.59-4.71-23.56-4.71-23.56l2-44.42z"
        fill="#ffb296"
      />
      <path
        d="M486.16 296.19l-4.71-16.83s-4-33.65-2-36.34-.67-20.86-.67-20.86l-8.41 11.44-2.37 23.59 6.72 41s7.4 1.38 11.44-2z"
        opacity={0.1}
      />
      <ellipse cx={449} cy={186.25} rx={33} ry={42} fill="#632652" />
      <path
        d="M486.16 294.86l-4.71-16.83s-4-33.65-2-36.34-.67-20.86-.67-20.86l-8.41 11.44-2.37 23.55 6.73 41.05s7.39 1.32 11.43-2.01zM438.64 454.28s-7.49 23.68-9.49 25.92-2.81 12.64 3.56 13 9.37.08 13.82-11.19 9-24.67 8.36-28.54-16.25.81-16.25.81z"
        fill="#e14b5a"
      />
      <path
        d="M438.64 454.28s-7.33 22.63-9.49 25.92c-1.65 2.52-2.81 12.64 3.56 13s9.37.08 13.82-11.19 9-24.67 8.36-28.54-16.25.81-16.25.81z"
        opacity={0.05}
      />
      <path fill="#632652" d="M427.61 167.66h37.69v43.07h-37.69z" />
      <path opacity={0.1} d="M427.61 167.66h37.69v43.07h-37.69z" />
      <path
        d="M437 182.46s4 16.83 0 20.86c0 0-8.08 4.71-10.1 3.37s-10.1 2.69-10.1 2.69l12.79 28.27 26.92 2 14.13-4v-15.46l-.67-9.42s-16.15 0-15.48-6.06 2-22.21 2-22.21zM468.66 382.35l-2.12 17.49a65.91 65.91 0 01-1.81 9.3l-16.26 60-10.77-10.73 12.11-52.5 3.37-30.29z"
        fill="#ffb296"
      />
      <path
        d="M468.66 382.35l-2.12 17.49a65.91 65.91 0 01-1.81 9.3l-16.26 60-10.77-10.73 12.11-52.5 3.37-30.29z"
        opacity={0.05}
      />
      <path
        d="M427.61 384.37L431 408.6s1.35 28.94 5.38 33l13.46 48.46 10.77-4s-7.4-37.69-6.06-40.38-1.35-25.58-1.35-25.58v-15.54s0-15.48-.67-20.19-24.92 0-24.92 0z"
        fill="#ffb296"
      />
      <path
        d="M447.8 484.65s2.36 23.22.67 27.59c-1.08 2.81 2 12.79 8.08 10.77s8.75-3.37 8.75-15.48-3.7-25.91-5.72-29.28-11.78 6.4-11.78 6.4z"
        fill="#e14b5a"
      />
      <path
        d="M433.49 229.71c-2.74.12-7.44-2.75-10.34-21.49 0 0-14.39.5-17.08 7.9s-33 49.13-33 49.13v16.83s18.17 4 26.25-6.06c0 0-14.13-2.69-4.71-15.48l17.5-19.52s14.13 10.1 10.1 37.69c0 0-14.13 41.05-8.08 69.32 0 0 12.79 32.31 9.42 44.42 0 0 33.65 6.73 49.8-4.71 0 0-1.35-26.92 6.06-39.71s-6.06-70.67-6.06-70.67-8.26-16.3-2.87-22.36 1-20 1-20 13.31-18.89-1.49-22.92c0 0 2 21.54-7.4 18.84l-16.83-1.26a104.79 104.79 0 00-12.27.05z"
        opacity={0.1}
      />
      <path
        d="M433.49 228.36c-2.74.12-7.44-2.75-10.34-21.49 0 0-14.39.5-17.08 7.9s-33 49.13-33 49.13v16.83s18.17 4 26.25-6.06c0 0-14.13-2.69-4.71-15.48l17.5-19.52s14.13 10.1 10.1 37.69c0 0-14.13 41.05-8.08 69.32 0 0 12.79 32.31 9.42 44.42 0 0 33.65 6.73 49.8-4.71 0 0-1.35-26.92 6.06-39.71s-6.06-70.67-6.06-70.67-6.06-15.48-.67-21.54.67-20.86.67-20.86l6.06 1.35s5.38-20.19-9.42-24.23c0 0 2 21.54-7.4 18.84l-16.83-1.26a104.79 104.79 0 00-12.27.05z"
        fill="#e14b5a"
      />
      <path
        d="M394 274.67l17.45 19.52s6.5-1 7.62-6.25c0 0 20.64 2.21 15.93 9.61s-23.56 10.1-23.56 10.1l-35-33z"
        fill="#ffb296"
      />
      <path
        d="M455.16 199.34c.66-7 1.39-15.86 1.39-15.86H437a72 72 0 011.79 13 20.23 20.23 0 0016.34 2.86z"
        opacity={0.1}
      />
      <circle cx={450.15} cy={178.76} r={20.19} fill="#ffb296" />
      <path
        d="M377.47 279.04s10.53 7.15 20.74-1.85l-8-6.26h-13.42z"
        opacity={0.1}
      />
      <path
        d="M376.79 278.37s10.54 7.14 20.75-1.81l-8-6.26h-13.42z"
        fill="#e14b5a"
      />
      <path
        d="M473.71 242.7a63.47 63.47 0 01-.71 19.49c-2 11.44-1.81 26.25 1.11 28.94M424 170.03s6 7 22 4.35a76.32 76.32 0 0129 .87l-4-11.3-11-8.7h-16l-14 8.7z"
        opacity={0.1}
      />
      <path
        d="M424 169.03s6 7 22 4.35a76.32 76.32 0 0129 .87l-4-11.3-11-8.7h-16l-14 8.7z"
        fill="#632652"
      />
      <path
        d="M861.62 391.83c-6.2-13.24-46.48-62.14-46.48-62.14l-20.66-23.43-5.25-1.62a116.26 116.26 0 004.36-31.93v-1-1c0-43.42-22.66-78.62-50.62-78.62-17.47 0-32.88 13.75-42 34.66a88.81 88.81 0 00-7.27 36.21 94.26 94.26 0 004 28.34c1.57 5.24 3.15 10.26 4.79 15l-.48.29-21.16 7.83s-7.71 8.21-7.39 24.61a60.91 60.91 0 003.26 20.21 64.62 64.62 0 012.6 19c-.25 29.57-11.89 66.56-11.89 66.56l.52.34c-.33 1.1-.52 1.7-.52 1.7a61.24 61.24 0 006.49 3.69l-3.4 45.2s-11.36 30.56 6.2 41.76l6.2-39.73 7.66-42.29a22.64 22.64 0 002.67 0c.25 0 .5-.06.75-.08-3.13 4.15-8.26 14.58-8 38.24 0 1.66 0 3.37.06 5.17 0 0 20.66 94.73 19.63 98.81 0 0 .77.07 2.07.15V618s-3.1 31.58 7.23 56c1.12 2.66 2.13 5.35 3 8 0 .68 0 1.39.06 2.15.56 7.72-.7 10.37-2 11.17a3.89 3.89 0 00-2 3.59c.33 3.78 1.27 9.38 4 10.71 1.79.88 4.36 1.58 6.94 2.82 1.12 8.1 1.32 13.47 1.32 13.47l2.07 15.28h.07a21.51 21.51 0 00-.07 4.09c.56 7.72-.7 10.37-2 11.17a3.89 3.89 0 00-2 3.59c.33 3.78 1.27 9.38 4 10.71 4.13 2 12.4 3.06 15.49 12.22s7.23 0 7.23 0a41.72 41.72 0 01-.48-10.85 66.37 66.37 0 00.26-13.51 28.77 28.77 0 011.25-9.26c1-4.13-.08-10.62-3.74-14.69-1.56-8.53-5.34-30.14-4.52-34.21.22-1.1.16-5.55-.08-11.85 10.09-25.9 27.07-71.77 24.87-81.87-1-4.62-.81-11.27-.1-18.14l15.59-7.32s1.27-45.33 8.26-58.06c2.37-4.32 3.28-14.21 3.22-26a326.68 326.68 0 00-3.55-46.44c3.44-.29 7.55-1.33 12.72-5l43.64-33.37c3.66 1.72 8.08 1.88 13.18-1.26 0 0 3.11-2.05 2.72-8 .2-2.59-.34-6.29-2.72-11.31zm-64 43.23c-4.13-1-10.33-12.4-10.33-15.49s-4.63-.06-4.65 0a101.28 101.28 0 01-3.09-24.35c.15-15.59 3.85-32.07 15-39.65l41.32 40.29s.15.39.44 1.06c-9.76 10.77-35.39 38.98-38.73 38.14z"
        transform="translate(-135 -59.81)"
        fill="url(#SelfieTime_svg__c)"
      />
      <path
        d="M594.56 607s-11 0-10 14c.54 7.58-.68 10.18-1.91 11a3.84 3.84 0 00-1.92 3.53c.32 3.71 1.23 9.21 3.83 10.51 4 2 12 3 15 12s7 0 7 0a41.52 41.52 0 01-.47-10.65 66.06 66.06 0 00.26-13.26 28.61 28.61 0 011.21-9.09c1.5-6.54-2-19.04-13-18.04z"
        fill="#e14b5a"
      />
      <path
        d="M594.56 607s-11 0-10 14c.54 7.58-.68 10.18-1.91 11a3.84 3.84 0 00-1.92 3.53c.32 3.71 1.23 9.21 3.83 10.51 4 2 12 3 15 12s7 0 7 0a41.52 41.52 0 01-.47-10.65 66.06 66.06 0 00.26-13.26 28.61 28.61 0 011.21-9.09c1.5-6.54-2-19.04-13-18.04z"
        opacity={0.05}
      />
      <path
        d="M702.56 336s-37 42-41 41-10-12-10-15-4.5 0-4.5 0 1.5 30 5.5 30 9 0 16-5l49-38zM542.56 382l-4 54s-11 30 6 41l6-39 10-56zM638.56 498s-8 33-5 47-31 98-31 98l-12-12 8-93 10-78z"
        fill="#ffb296"
      />
      <path
        d="M638.56 498s-8 33-5 47-31 98-31 98l-12-12 8-93 10-78z"
        opacity={0.05}
      />
      <path
        d="M574.56 525v31s-3 31 7 55 11 51 11 51l2 15 20-3s-6-32-5-37-4-81-4-81 4-27 2-38-10-24-10-24z"
        fill="#ffb296"
      />
      <path
        d="M604.56 667s-11 0-10 14c.54 7.58-.68 10.18-1.91 11a3.84 3.84 0 00-1.92 3.53c.32 3.71 1.23 9.21 3.83 10.51 4 2 12 3 15 12s7 0 7 0a41.52 41.52 0 01-.47-10.65 66.06 66.06 0 00.26-13.26 28.61 28.61 0 011.21-9.09c1.5-6.54-2-19.04-13-18.04z"
        fill="#e14b5a"
      />
      <circle cx={609.56} cy={194} r={30} fill="#ffb296" />
      <path
        d="M624.56 199s-9 42 25 52-38 22-38 22l-51-18s57-28 43-56z"
        fill="#ffb296"
      />
      <path
        d="M609.56 255L569 252.31 548.52 260s-13 14-4 42-9 86-9 86 13.5 9.28 25 8.47a17.44 17.44 0 003-.47s-11 7-10 43c0 0 20 93 19 97 0 0 22 2 30-3 0 0 6-53 12-53 0 0 14 43 13 50l21-10s1.23-44.5 8-57c7.44-13.75 0-85-6-91s-14-57 8-72l40 39s9 24 25 14c0 0 6-4 0-17s-45-61-45-61l-20-23-16-5s-21.96 17-32.96 8z"
        opacity={0.1}
      />
      <path
        d="M609.56 253L569 250.31 548.52 258s-13 14-4 42-9 86-9 86 13.5 9.28 25 8.47a17.44 17.44 0 003-.47s-11 7-10 43c0 0 20 93 19 97 0 0 22 2 30-3 0 0 6-53 12-53 0 0 14 43 13 50l21-10s1.23-44.5 8-57c7.44-13.75 0-85-6-91s-14-57 8-72l40 39s9 24 25 14c0 0 6-4 0-17s-45-61-45-61l-20-23-16-5s-21.96 17-32.96 8z"
        fill="#e14b5a"
      />
      <path
        d="M568.06 289.5s3 37 6 46-6 55-6 55M568.06 173.92a90.65 90.65 0 00-3.19 61.37c10.09 34.15 20.71 59 43.83 59 27.06 0 49-34.56 49-77.18s-21.94-77.18-49-77.18c-16.92-.04-31.83 13.46-40.64 33.99z"
        opacity={0.1}
      />
      <path
        d="M568.06 171.92a90.65 90.65 0 00-3.19 61.37c10.09 34.15 20.71 59 43.83 59 27.06 0 49-34.56 49-77.18s-21.94-77.18-49-77.18c-16.92-.04-31.83 13.46-40.64 33.99z"
        fill="#632652"
      />
    </svg>
  );
};

SvgSelfieTime.propTypes = {
  color: PropTypes.string
};
SvgSelfieTime.defaultProps = {
  color: "primary"
};
export default SvgSelfieTime;
