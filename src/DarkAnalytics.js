import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDarkAnalytics = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1167.7 718.39"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="DarkAnalytics_svg__a"
          x1={151.23}
          y1={806.75}
          x2={151.23}
          y2={333}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="DarkAnalytics_svg__b"
          x1={198.16}
          y1={493.79}
          x2={225.47}
          y2={493.79}
          xlinkHref="#DarkAnalytics_svg__a"
        />
      </defs>
      <path
        d="M1145.85 229.89a270 270 0 00-44.82-70.22l-621.86-6 512-70.7a294.88 294.88 0 00-103.88-20.26C837.97 23.54 774.63 0 705.53 0c-62 0-119.33 19-166.07 51.1a294 294 0 00-133.11-31.54c-138.17 0-253.3 94.1-279.13 218.88zM736.53 338.58l67.84 10.35 2.26.34 1.54.25 2.83.42 11.27 1.72 120.88 18.43 39.53 6 175.9 26.84c-23.35 86.08-89.73 155.6-175.9 186.35q-5.54 2-11.17 3.75c-26.75 53.88-71.49 98-126.8 125.34H583.85a285.65 285.65 0 01-53.4-34.17q-5-4-9.7-8.21-1.85-1.64-3.64-3.29-2.38 2.16-4.82 4.26-5.7 4.92-11.68 9.55a287 287 0 01-51.65 31.86h-254.8a287.89 287.89 0 01-35.65-20.35C90.16 652.31 43.85 578.59 37.7 494.29l120.71-12.61 33.94-3.55 102.5-10.71 84.22-8.8-118.81-17.42-72.91-10.67-28.94-4.25-113.1-16.57a263.25 263.25 0 0125.25-62.69l87.85-9.08 72.5-7.48 72.75-7.5 124.19-12.76 1.7-.19 370.69-38.25 16.61-1.78 165.83-17.12 165.62-17.09a260.62 260.62 0 0119.38 98.77v4z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M1141.85 579.42s-14-5.72-58.79 14.78-50.34 17.92-61.92 14.78-18-3.88-30.46-21c0 0-8.76-47.48-17.23-54.83s-44.5 4.19-44.5 4.19-43.19 9.9-51.42-47.82c0 0 5.84-43.5-2.11-56.85 0 0 16 6.92 42.54-4.26s47.69 12 47.69 12 6.68 17.29 6 27.6 3.53 14.19 16.16 9.21c0 0 6.21-8.84-2.58-23.43s-15.06-25.46-12.61-36.79 9.51-27.05 32.17-34.91 53.44-9.37 68.22-15.52 18.35-10.16 18.35-10.16-9.09 9.11 12.33 47.73 7.76 55.38 7.76 55.38-11.39 27.15-61.69 25c0 0-48.47 1.77-22.05 22.32 0 0 16.92-3.44 42.23-11.49s43.56 25.15 48.1 48.26 23.81 35.81 23.81 35.81z"
        fill={color}
      />
      <path
        d="M1076.71 385.76l.26-.07c2 7.37-19.72 37-38.24 60.52l-.21-.17c26.12-33.21 39.69-54.62 38.19-60.28z"
        fill="#444053"
      />
      <path
        d="M1038.9 445.56l.11.3c-14.79 18.8-33.39 41.25-48.28 57.87-1.42 1.58-2.83 3.25-4.19 4.94l-.42-.34c1.36-1.7 2.77-3.37 4.2-5 14.88-16.58 33.8-38.98 48.58-57.77z"
        fill="#444053"
      />
      <path
        d="M986.48 507.88l.29.51c-27.1 33.81-28.92 86.36-28.92 86.81l-5.72-6.6c.03-.46 7.06-46.65 34.35-80.72z"
        fill="#444053"
      />
      <path
        d="M1110.44 561.07s-31.95-16.61-56.85-10.65-81-21.07-81-21.07-23.81-9.67-28.59-20.69c0 0-16.33-17.27-17.26-26.21s-16.8-31.39-27.17-32.25M1105.85 577.06s-16.09-10.84-14.23-23.48M1081.13 591.06s-23-8.35-25.32-41.11M1043.99 599.54s-22-18.24-14.69-50.12M999.37 590.63s-14.65-30.71-1.61-50.69M1110.85 540.82s-16.64 5.28-13.07 14M1090.74 510.61s-22.27 7.07-22.8 38.57M1059.67 503.34s-20.26 25-18.78 47.76M1024.18 513.2s-20.13 19.24-17.56 29.94M1012.04 506.36s-18.88 3.38-21.52-2.81M987.51 483.57s9.54 12.63 12 9.8M1082.06 475.58s-47.58 3.45-58.35-10.89M977.5 419.92s22.33 47.93 38.54 54M1000.92 397.09s13.71 44.08 30.71 57.84"
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
      <path
        d="M1102.09 439.2s-36.19 15.54-57.92-.18M1033.16 387.69s8.27 32.41 19.41 40.23M1096.62 402.89s-20.34 7.7-27.93 1.8"
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
        strokeWidth={0.75}
      />
      <path
        d="M970.09 494.2s0 28.25-7.69 30.25M907.22 530.76s30.54 2.61 44.63-13.15M962.21 460.78s-7.36 28.66-27.78 36.42M888.85 500.58s21.63 7.51 40.22-11.63M938.17 436.2s-2 24.34-15.27 35.72M889.72 463.5s17.94.12 22.14-5.73"
        fill="none"
        stroke="#444053"
        strokeMiterlimit={10}
      />
      <path
        d="M982.7 213.2v482.79a22.4 22.4 0 01-22.39 22.41H180.85a22.39 22.39 0 01-22.29-20.35 20 20 0 01-.1-2.06V213.2c0-.49 0-1 .05-1.44h824.12c.03.44.07.93.07 1.44z"
        fill="#4c4c78"
      />
      <path
        d="M960.31 191.79H180.85a22.39 22.39 0 00-19.4 11.2 22.14 22.14 0 00-2.94 9.76h824.12a22.39 22.39 0 00-22.32-20.96z"
        fill={color}
      />
      <circle cx={180.8} cy={202.99} r={5.6} fill="#ededf4" />
      <circle cx={197.59} cy={202.99} r={5.6} fill="#ededf4" />
      <circle cx={214.39} cy={202.99} r={5.6} fill="#ededf4" />
      <path fill={color} d="M187.35 230.6h116.3v10.71h-116.3z" />
      <path
        fill={color}
        opacity={0.5}
        d="M187.35 282.83h116.3v10.71h-116.3zM187.35 319.74h116.3v10.71h-116.3zM187.35 356.66h116.3v10.71h-116.3zM187.35 393.58h116.3v10.71h-116.3zM187.35 430.5h116.3v10.71h-116.3zM187.35 467.42h116.3v10.71h-116.3zM187.35 504.34h116.3v10.71h-116.3z"
      />
      <path
        fill="#dce0ed"
        opacity={0.5}
        d="M427.82 269.98h515.34v1.72H427.82zM427.82 309.96h515.34v1.72H427.82zM427.82 349.94h515.34v1.72H427.82zM427.82 389.92h515.34v1.72H427.82zM427.82 429.9h515.34v1.72H427.82z"
      />
      <path
        fill={color}
        opacity={0.5}
        d="M943.16 431.6H427.18v-78.62l47.33 23.32 48.97 6.64 42.97-12.95 51.84-40.21 26.08-15.06 19.06-3.67 18.24.98 30 14.81 40.77 25.97 31.99 4.12 25.38-8.75 53.77-44.05 27.46-9.78 28.73 4.44 23.39 13.51v119.3z"
      />
      <path
        d="M517.12 382.97c-46.47 0-89.4-28.42-89.94-28.78l1.28-1.91c.66.44 66.76 44.17 122.91 22.26 20.47-8 35.06-20.4 49.16-32.42 14.72-12.54 28.63-24.39 47.58-29.53 21.75-5.89 45.51-.56 63.56 14.28 15.43 12.68 46.17 33 78.63 27 16.56-3.11 30.51-15.2 45.28-28 28.27-24.58 57.59-49.95 108.27-13.55l-1.36 1.88c-49.18-35.35-77.77-10.58-105.41 13.38-15 13-29.19 25.29-46.35 28.51-33.4 6.27-64.78-14.5-80.52-27.44-17.48-14.36-40.47-19.53-61.49-13.83-18.46 5-32.18 16.69-46.7 29.06-14.25 12.14-29 24.69-49.81 32.81a96 96 0 01-35.09 6.28z"
        fill={color}
      />
      <circle cx={675.79} cy={310.82} r={12.77} fill={color} />
      <g opacity={0.5} fill="#dce0ed">
        <path d="M473.36 521.17h75.75v16.07h-75.75zM647.3 521.17h75.75v16.07H647.3zM821.23 521.17h75.75v16.07h-75.75z" />
      </g>
      <path
        d="M468 633.39c0-23.46 19.09-41.48 42.55-41.48h.3V581.2h-.34c-29.35 0-53.22 22.81-53.22 52.16a53.13 53.13 0 0018.23 40.06l7.56-7.57A42.45 42.45 0 01468 633.39z"
        fill={color}
      />
      <path
        d="M511.95 581.2v10.68a42.55 42.55 0 11-27.76 75l-7.56 7.56a53.2 53.2 0 1035.32-93.24zM860.85 591.38c23.46 0 41.48 19.08 41.48 42.54v.34H913v-.34c0-29.34-22.81-53.22-52.16-53.22a53.09 53.09 0 00-40 18.23l7.56 7.57a42.45 42.45 0 0132.45-15.12z"
        fill={color}
        opacity={0.5}
      />
      <path
        d="M913.01 635.33h-10.67a42.55 42.55 0 11-75-27.77l-7.56-7.56a53.21 53.21 0 1093.27 35.33z"
        fill={color}
      />
      <path
        d="M706.2 584.37l-2.12 10.62c15.62 6.31 25.6 21.62 25.6 39.47a42.55 42.55 0 11-59.6-39l-4.78-9.55a53.22 53.22 0 1075.06 48.52c0-23-13.64-42.66-34.16-50.06z"
        fill={color}
        opacity={0.5}
      />
      <path
        d="M688.47 591.29a37 37 0 0114.81 3.08l2.12-10.62a47 47 0 00-16.93-3.14 52.88 52.88 0 00-21.83 4.7l4.77 9.56a42.24 42.24 0 0117.06-3.58z"
        fill={color}
      />
      <path
        d="M249.83 474.44c2.86-7.68-2.24-15.77-2.24-15.77l-.41-17.59c2.25-4.64-5.5-16.16-5.5-16.16s-1.84-8.7-3.47-9.51-3.46-4.44-3.46-4.44a2.72 2.72 0 00-1.56-2.39 115.46 115.46 0 01-7.44-16.33c-1.14-3.12-2.15-6.46-1.5-9.71a16.14 16.14 0 01.73-2.43l.19-.49.08-.21.06-.17a12.4 12.4 0 001.21-5.19c-.23-3.75-3.68-6.49-7.11-8.08s-7.28-2.63-10-5.27c-3.38-3.32-4.17-8.35-4.95-13s-2-9.7-5.82-12.5c-3.38-2.47-8-2.52-12.13-1.82a40.41 40.41 0 00-15.64 6.23c-4.55 3.05-8.61 7.1-13.87 8.69-1.93.59-4 .81-5.88 1.45a14.52 14.52 0 00-8.75 8.75c-.07.18-.13.37-.19.56s-.16.48-.23.72l-.15.61c-.05.23-.11.47-.15.71s-.07.4-.1.61-.06.48-.08.73 0 .4-.05.6 0 .5 0 .76a31.81 31.81 0 00-5.6 7c-6.73 10.65-15.09 26.06-18.81 33l-.18.33v-.21s-16.41 16.48-6.83 14.25c.72-.16 1.37-.28 2-.36l-.1 1.83v.05c-1.53 1.92-8.15 8.56 4.18 13.47 10.22 4.08 31.14 5.13 38 5.36l-.6 2.9c-10.6 8.69-6.52 18.6-6.73 25.06s-1.22 14.16-1.22 14.16-4.53 7.36-3.95 11.18-3.26 10.11-3.26 10.11-5.7 6.27-5.09 10.31-1 9.3-1 9.3-3.87 7.08-2.25 11.11.82 6.28.82 6.28-8.36 1.21-9 5.65-8.15 6.07-8.15 6.07-13.45 4.85-16.72 7.07-20.58 18.4-20.58 18.4S59 594 58.06 595.83s-11.16 9.55-6.42 16.83c.23.36.47.72.72 1.09a62 62 0 0018.82 17.82c3.28 2 6.55 4.29 7.52 5.8 2.14 3.33 37.91 26.23 37.91 26.23s15.73 13.81 25.85 23.44l.77 4.63c-.13.21-.27.42-.39.65a2.81 2.81 0 00.95 2.74l.14.83s4.08 34.36 7.75 50.43c2.42 10.64.7 18.66-.74 22.87-3.81-4.21-4.26-5.73-4.26-5.73a43.55 43.55 0 00-2.59 8.47c-.06.42-.1.82-.12 1.21a.31.31 0 00-.28.12l-1.42 2c-1.56 2.16-2.93 4.44-4.33 6.71-3.2 5.2-13.27 7.64-13.27 7.64a9.88 9.88 0 01-2.7.94 30.79 30.79 0 01-8.57.27 13.27 13.27 0 00-2.52.62 9 9 0 00-1.92.88v.05c-4.39 2.84-2.79 8.08-2.79 8.08l.11.08.11.06.18.12.27.16.22.14.25.14.24.14.31.18.26.14.67.36.3.16.44.22.35.17.47.24.46.21.81.36.47.21.53.22.53.22.54.21 1 .37.5.17.71.23.53.17.82.24.45.13 1.27.32.41.09 1 .21h.47l1.09.17.31.05c.48.07 1 .13 1.45.17h.32l1.16.08h2.02l1.5-.06h.31l1.23-.13.54-.07 1.08-.19.51-.09c.52-.11 1-.23 1.56-.38a97.63 97.63 0 0135-3c9 .76 11.25-2.32 11.25-2.32a4.16 4.16 0 00.46-.76c.05-.1.09-.21.13-.31a5.54 5.54 0 00.21-.57c0-.13.07-.26.11-.39s.09-.38.13-.58 0-.28.07-.43 0-.15 0-.23 0-.4.05-.6a22.27 22.27 0 00-.36-5.18 59.47 59.47 0 00-3.28-11l-.64.45c-.07-.34-.14-.69-.21-1.06-2.21-11.84-3-40.27-3.05-43.29a5.39 5.39 0 003.42-1.18 2.85 2.85 0 00.26-.22c7.64-6.21 3.89-34.57 1.37-38.51s-3-24.18-3.9-30.63c-.43-3.06-2.05-4-4.13-4h-.89c-.3-6 .57-20.11 1.26-29.74 0-.63.09-1.23.13-1.82l1.92.11 2.86-17s1.63-6.27 11.62-24.06 11-37.19 11-37.19 3.06-5.87 2.24-8.49c-.21-.69-.55-2.6-.93-5.1a65.49 65.49 0 0110.66-5.21c10.69-4.32 18.7-12.41 22.43-16.43l.59-.63a44.25 44.25 0 012.52 4.32s8.76-6.06 13.25-11.32a7.19 7.19 0 001.13-2c2.7-6.73-.06-21.09-.06-21.09 3.67-6.11-.72-11.77-.72-11.77z"
        transform="translate(-16.15 -90.8)"
        fill="url(#DarkAnalytics_svg__a)"
      />
      <path
        d="M205.72 515.34c-.41.74-3.35 2.5-6.93 4.44-.33-2.6-.57-4.58-.62-5.18-.22-2.24 4.55-12.22 4.55-12.22s9.11-12.23 8.9-14.06 3.52-7.13 3.52-7.13l8.25-13.4a6.06 6.06 0 00.86 6.27c2.49 3.26.41 9.78.41 9.78l.5 8.22.05.81c-.3.29-1.62 1.56-4.56 4.21-2.72 2.45-2.23 3.19-1.93 3.39-.61 1.1.15 1.29.15 1.29.24 0 .48 0 .71-.05l-.65.6c-5.11 4.75-12.47 11.69-13.21 13.03z"
        transform="translate(-16.15 -90.8)"
        fill="url(#DarkAnalytics_svg__b)"
        opacity={0.1}
      />
      <path
        d="M134.97 272.98c-2.48 2.57.34 6.2-1.58 9-1.09 1.57-3.49 2.55-4.85 4-2.65 2.88-.65 6.56.63 9.83 4.67 11.95-2.34 25.56-17 33a30.81 30.81 0 0020.16 1.64c6.56-1.75 11.6-5.83 12.93-10.47.94-3.29.14-6.79 1.83-9.95 2.63-4.9 10.68-7.86 13.06-12.82 1.86-3.88-.18-8.09-2.54-11.84a94.15 94.15 0 00-10.18-13.17c-2.29-2.52-2.3-3.51-6-2.83a17.74 17.74 0 00-6.46 3.61z"
        fill="#985c7e"
      />
      <path
        d="M156.85 308.05a38.27 38.27 0 01-2.35 10.35c-1.4 4.25-2.84 8.54-5.25 12.3s-5.95 7-10.27 8.15a12.82 12.82 0 0010.7 3.1c2.74-.49 5.53-1.88 8.19-1a25.5 25.5 0 013.53 1.88c3.91 2 9 .53 11.84-2.85a13.39 13.39 0 002.06-12.43c-.8-2.54-2.22-4.85-3-7.4-1.09-3.78-.66-8-2.49-11.48-2.66-5.05-10.06-8-15.06-10-.24 2.67 2.23 6.14 2.1 9.38z"
        fill="#985c7e"
      />
      <path
        d="M149.93 298.67a38.27 38.27 0 01-2.35 10.35c-1.4 4.25-2.84 8.54-5.25 12.3s-5.95 7-10.27 8.15a12.84 12.84 0 0010.7 3.1c2.75-.49 5.53-1.88 8.19-1a24.94 24.94 0 013.53 1.88c3.92 2 9 .53 11.84-2.84a13.45 13.45 0 002.07-12.44c-.8-2.54-2.23-4.85-3-7.4-1.09-3.78-.66-8-2.49-11.48-2.66-5-10.05-8-15.06-10-.25 2.68 2.21 6.14 2.09 9.38z"
        opacity={0.1}
      />
      <path
        d="M154.85 531.93s-3 36.68-1.7 41.59 3.51 71.25 3.51 71.25.9 38.69 3.91 46.8-20.35 5.82-21.15 5.72-6.57-16.54-6.57-16.54 5.71-10 2.1-26-7.62-50-7.62-50l-6.61-40.09s.9-9.42-2.61-14.73-8-40.09-7-43.1 24.82-9.62 24.82-9.62l10.26 13.43z"
        fill="#ecb4b6"
      />
      <path
        d="M111.43 514.55v.08l.06.62c.06.67.14 1.37.22 2.09 1.25 11.6 4.11 29 6.51 32.63s2.73 9.18 2.7 12.33v1c0 .89-.08 1.43-.08 1.43l5.09 30.83.21 1.3 1.31 8s4 34.07 7.62 50a42.13 42.13 0 01-.45 21.82q-.15.5-.3.93a20.26 20.26 0 01-1.35 3.2s.82 2.32 1.89 5.23c.24.65.49 1.32.74 2l.4 1.06c1.55 4.1 3.19 8.19 3.58 8.23.8.11 24.16 2.41 21.15-5.71a24.13 24.13 0 01-.9-3.61c-2.29-12.41-3-43.19-3-43.19s-2.2-66.34-3.51-71.25c-.87-3.27.18-20.61 1-31.85.4-5.62.74-9.71.74-9.71l-8.72-21.25-10.26-13.42s-17.1 4.75-22.93 8l-.17.1c-1 .55-1.58 1.06-1.72 1.5-.32.71-.2 3.63.17 7.61z"
        opacity={0.07}
      />
      <path d="M126.92 560.89s11.33 3 10.33 6.31z" opacity={0.05} />
      <path
        d="M132.95 680.75s1.23 3.47 2.63 7.24c1.6.75 2.82 1.23 2.82 1.23s4.36-4.06-1.4-10c-.93-1-1.72-1.82-2.4-2.58a22.5 22.5 0 01-1.65 4.11z"
        opacity={0.1}
      />
      <path
        d="M127.42 682.7c.44 2.4 5.7 5.06 8.56 6.35 1.08.48 1.82.77 1.82.77a5.47 5.47 0 001.2-1.91c.67-1.75.79-4.6-2.61-8.11-.79-.82-1.48-1.57-2.09-2.25-3.82-4.24-4.27-5.77-4.27-5.77a43.3 43.3 0 00-2.55 8.4 8.35 8.35 0 00-.06 2.52z"
        fill="#cc8294"
      />
      <path
        d="M127.42 682.7c.44 2.4 5.7 5.06 8.56 6.35 1.55 4.1 3.19 8.19 3.58 8.23.8.11 24.16 2.41 21.15-5.71a24.13 24.13 0 01-.9-3.61c-1.35.94-4.1 2.87-6.48 4.57-3.3 2.35-8.26.6-8.26.6l-6.07-5.22-1.51-1.3a8.72 8.72 0 01-2.65-.63 13 13 0 01-5.21-4.18c-1.15-1.23-1.8-1.56-2.15-1.62a8.35 8.35 0 00-.06 2.52z"
        opacity={0.1}
      />
      <path
        d="M90.2 708.41a41.48 41.48 0 0014.33 5.73 28.79 28.79 0 0013.07-.37 95.25 95.25 0 0134.38-3c8.81.76 11.07-2.3 11.07-2.3 1.47-2 1.42-5.48.82-9a59 59 0 00-3.23-10.93s-4 2.81-7.31 5.17-8.26.6-8.26.6l-7.58-6.52c-4.81-.35-7.86-4.81-7.86-4.81-2.12-2.26-2.54-1.5-2.54-1.5l-1.4 1.94c-1.54 2.13-2.88 4.4-4.25 6.65-3.15 5.16-13 7.57-13 7.57a9.72 9.72 0 01-2.66.94 30 30 0 01-8.42.26 11.19 11.19 0 00-4.22 1.44c-4.57 2.81-2.94 8.13-2.94 8.13z"
        fill="#cc8294"
      />
      <circle cx={135.9} cy={692.07} r={0.78} fill="#4b4b5b" />
      <circle cx={126.3} cy={696.16} r={0.78} fill="#4b4b5b" />
      <circle cx={130.09} cy={701.98} r={0.78} fill="#4b4b5b" />
      <circle cx={116.88} cy={700.01} r={0.78} fill="#4b4b5b" />
      <circle cx={131.66} cy={694.6} r={0.78} fill="#4b4b5b" />
      <circle cx={135.4} cy={701.57} r={0.78} fill="#4b4b5b" />
      <circle cx={121.66} cy={698.44} r={0.78} fill="#4b4b5b" />
      <circle cx={111.73} cy={701.2} r={0.78} fill="#4b4b5b" />
      <path
        d="M90.2 708.41s13.42 9.22 27.4 5.36a95.25 95.25 0 0134.38-3c8.81.76 11.07-2.3 11.07-2.3a6.72 6.72 0 001.12-3.25q0-.33.06-.69a22 22 0 00-.36-5c-1.83 1.36-5.64 3-13.35 3.28-13.33.43-30.91 3.83-30.91 3.83l-17-.69s-9.52-2.07-9.48-5.61c-4.56 2.75-2.93 8.07-2.93 8.07z"
        opacity={0.1}
      />
      <path
        d="M114.04 711.71a4.12 4.12 0 00.85.06c3 0 10.24-1.58 14.56-2.59a21.24 21.24 0 013.72-.53c4-.2 13.79-.68 19.31-.64h.13a28.88 28.88 0 0011.56-2.8q0-.33.06-.69a28.38 28.38 0 01-11.75 2.89c-5.52 0-15.36.44-19.34.64a21.56 21.56 0 00-3.83.55c-3.83.9-13 3-15.16 2.52z"
        fill="#cc8294"
      />
      <path
        d="M120.9 563.27c0 .89-.08 1.43-.08 1.43l5.09 30.83 2.62 2.5a67.76 67.76 0 017.11 7.51c3 4.66 13.63 2.25 13.43 1.8s-4.56-22.4-4.56-22.4l-3.46-8.87s-3.59 2.26-7.13-1.5c-2.23-2.36-7.22-7-10.62-10.1l-2.38-2.17c0 .36-.01.68-.02.97z"
        opacity={0.03}
      />
      <path
        d="M111.43 514.63l.06.62c.06.67.14 1.37.22 2.09.74-.27 1.47-.57 2.18-.89.35-.15.69-.3 1-.46a52.65 52.65 0 009.31-5.76l-8.73-3.74-2.57-1.11c-1 .55-1.58 1.06-1.72 1.5-.24.78-.12 3.73.25 7.75z"
        opacity={0.05}
      />
      <path
        d="M36.58 522.26c.23.36.47.72.71 1.08a61.27 61.27 0 0018.5 17.67c3.23 2 6.44 4.25 7.4 5.75 2.1 3.31 37.28 26 37.28 26s16.36 14.5 26.26 24.06l1.26 1.23.61.59c.72.71 1.39 1.39 2 2 .87.89 1.61 1.68 2.17 2.33.21.24.4.46.56.66s.39.5.52.69c3 4.66 13.62 2.26 13.43 1.81s-4.56-22.4-4.56-22.4l-3.46-8.87a5.39 5.39 0 01-4.55.31 6.94 6.94 0 01-2.58-1.81c-2.23-2.37-7.23-7-10.62-10.1-2-1.83-3.45-3.13-3.45-3.13l-11.27-12.78s-14.43-18.79-25.25-23.45c0 0 12.18-5 20.89-6.31a38.57 38.57 0 009.67-2.35c.34-.15.69-.3 1-.46a52.79 52.79 0 009.3-5.76l-8.72-3.75-45.83-19.69c-.29 0-2.94.17-4.89.31l-2.08.14s-17.09 17.74-18 19.54-10.96 9.47-6.3 16.69z"
        fill="#ecb4b6"
      />
      <path
        d="M87.09 513.99s-19.69 2.4-23.6 6.46c0 0 17.28 1.21 18 3.46 0 0-9.88-6.68-12.63-5z"
        opacity={0.03}
      />
      <path
        d="M127.99 598.06l.61.59c.72.71 1.39 1.39 2 2 .87.89 1.61 1.68 2.17 2.33l2.55-3.31a10.38 10.38 0 00-2.9-1.75 5 5 0 00-4.42.13z"
        opacity={0.05}
      />
      <path
        d="M129.24 605.42a13.78 13.78 0 002.06.86l2-2.64 2.59-3.36a10.28 10.28 0 00-2.9-1.76 5 5 0 00-4.41.13 6.25 6.25 0 00-2.35 2.6s-.76 2.25 3.01 4.17z"
        fill="#cc8294"
      />
      <path
        d="M128.85 605.01l.41.41a13.78 13.78 0 002.06.86l2-2.64c.22.27.39.5.52.69 3 4.66 13.62 2.26 13.43 1.81s-4.56-22.4-4.56-22.4l-3.46-8.87a5.39 5.39 0 01-4.55.31c-.79.82-.93 1.85 0 3.15a21.08 21.08 0 013.42 10c1.35 3.72-2.75 8.28-5.11 10.2a6.31 6.31 0 01-1.28.85 3 3 0 00-1.14 1.28 24.21 24.21 0 00-1.74 4.35z"
        opacity={0.05}
      />
      <path
        d="M130.03 605.01l4.56 4.59a34.11 34.11 0 0113.8 17.21 35.82 35.82 0 001.63 4 18.12 18.12 0 011.19 5.62c.11 1.16.16 2.31.2 3.32a5.38 5.38 0 001.36 3.46l.06.07a5.39 5.39 0 007.36.62 2.85 2.85 0 00.26-.22c7.51-6.16 3.83-34.27 1.35-38.18s-2.94-24-3.84-30.37c-.42-3-2-3.91-4.06-3.95s-4.78.81-7.12 1.07h-.39c-4.66.38-13.62 1.76-10.48 6.09a21.13 21.13 0 013.41 10c1.66 4.59-4.95 10.45-6.38 11s-2.91 5.67-2.91 5.67z"
        fill="#cc8294"
      />
      <circle cx={136.62} cy={602.17} r={1.33} fill="#4b4b5b" />
      <circle cx={138.65} cy={607.15} r={1.33} fill="#4b4b5b" />
      <circle cx={144.89} cy={615.17} r={1.33} fill="#4b4b5b" />
      <circle cx={141.79} cy={611.05} r={1.33} fill="#4b4b5b" />
      <circle cx={147.47} cy={619.92} r={1.33} fill="#4b4b5b" />
      <path
        d="M152.78 624.03s1.11 13 0 19.14a5.38 5.38 0 007.42.69 2.85 2.85 0 00.26-.22c7.51-6.16 3.83-34.27 1.35-38.18s-2.94-24-3.84-30.37c-.42-3-2-3.91-4.06-3.95s-4.78.81-7.12 1.07c0 6.37.35 21 2 25.86 2.19 6.22 3.99 25.96 3.99 25.96z"
        opacity={0.1}
      />
      <path
        d="M156.09 597.46c1.4 4.92 3.5 18.45 3.3 25.67-.14 5.29.47 15.62.8 20.73a2.85 2.85 0 00.26-.22c7.51-6.16 3.83-34.27 1.35-38.18s-2.94-24-3.84-30.37c-.42-3-2-3.91-4.06-3.95.28 6.45 1.07 22.42 2.19 26.32z"
        opacity={0.1}
      />
      <path
        d="M150.97 571.45c.28 5.12 1.12 18.8 2.5 22.71 1.71 4.9 3.54 28.35 3.62 29.34l-.6.05c0-.24-1.9-24.37-3.6-29.18-1.4-4-2.24-17.58-2.52-22.8z"
        fill="#cc8294"
      />
      <path
        d="M146.57 318.87s-9.72 1.73-15.24 3.77-6.31 3.14-6.31 3.14l-5.71.91v-6.12s-20.46 1.52-22.52.68a.32.32 0 01-.13-.08c-1-1 .6 7.92-.9 9.82s-8 8.49 4.11 13.37 39.58 5.38 39.58 5.38l7.82-15.44z"
        fill="#ff718d"
      />
      <path
        d="M177.33 348.33l-21.64-4.61a52.28 52.28 0 006.26-16.52c.78-4.64.68-9.58-1.46-13.92-6.21-12.62 16.84-19.23 16.84-19.23s8.43 13 16 19.58c2.54 2.19 5 3.66 7 3.66 8.07-.03-23 31.04-23 31.04z"
        fill="#ecb4b6"
      />
      <path
        d="M60.85 487.83s9.42 22.25 18 22.65c5.19.24 21.19 2.45 33.12 4.15l1.07.16a52.79 52.79 0 009.3-5.76l-8.72-3.75-45.77-19.7c-.29 0-2.94.17-4.89.31z"
        opacity={0.1}
      />
      <path
        d="M128.23 507.28c8.17 1.17-2.21 9.42-2.21 9.42s4 3 8.62 14 6.82 10.23 6.82 10.23l12.8.69c.4-5.62.74-9.71.74-9.71l-8.72-21.25-10.26-13.42s-17.1 4.75-22.93 8l-.17.1c-1 .55-1.58 1.06-1.72 1.5-.26.81 16.65-3.55 17.03.44zM177.33 348.33l-21.64-4.61a52.28 52.28 0 006.26-16.52l6.77 6.52a16.72 16.72 0 009.27-2.71 13.93 13.93 0 003.15-2.9c4.82-6 10.62-13.83 10.62-13.83s.67-.31 1.61-.65c2.54 2.19 5 3.66 7 3.66 8.03-.03-23.04 31.04-23.04 31.04z"
        opacity={0.1}
      />
      <path
        d="M60.85 486.03s9.42 22.25 18 22.65 47.1 6.21 47.1 6.21 4 3 8.62 14 6.82 10.22 6.82 10.22l14.83.81 2.8-16.84s1.61-6.22 11.43-23.85 10.82-36.88 10.82-36.88 3-5.81 2.21-8.42-3.41-23.25-3.61-25.46 4.41-12 4.41-12 8.82-12 8.61-13.83 3.41-7 3.41-7l8-13.19a6 6 0 00.83 6.17c2.41 3.2.4 9.62.4 9.62l.49 8.09.11 1.93s-1.2 1.21-4.48 4.21-1.73 3.41-1.73 3.41c10.22-1.41 18.24 15.23 18.24 15.23s8.62-6 13-11.22a7.25 7.25 0 001.11-1.94c2.65-6.67-.06-20.91-.06-20.91 3.46-6.21-.85-11.83-.85-11.83 2.81-7.61-2.2-15.63-2.2-15.63l-.31-17.44c2.21-4.61-5.41-16-5.41-16s-1.8-8.62-3.41-9.42-3.4-4.41-3.4-4.41c.2-4-10.43-4.42-11.43-4.61a21.08 21.08 0 01-3.62-2.12 29 29 0 00-3.19-1.89c-1.81-.8-6.62 1.4-6.62 1.4s-5.81 7.82-10.62 13.83a14.45 14.45 0 01-3.15 2.91 16.78 16.78 0 01-9.28 2.7l-6.87-6.68-20.36 1.24-4.81 23.45c-10.43 8.62-6.42 18.44-6.62 24.85s-1.2 14-1.2 14-4.41 7.21-3.81 11-3.21 10-3.21 10-5.61 6.21-5 10.22-1 9.22-1 9.22-3.81 7-2.21 11 .81 6.22.81 6.22-8.22 1.2-8.82 5.61-8 6-8 6-13.23 4.82-16.44 7-20.33 18.37-20.33 18.37z"
        fill="#ff718d"
      />
      <path
        d="M229.24 388.02s-15 1.8-16.83 4 15 2.4 15 2.4zM207 399.94s11-3.9 11.32-2.7-11.32 7.81-11.32 7.81zM202.39 378.6c-1.91 3-17.74 22.43-17.74 22.43l17-24.84zM200.08 373.29c-1.2 1.6-13.93 22.44-13.93 22.44l12.83-23.45zM226.74 348.33s-4.91-6.91-9.72-2.5 9.72 2.5 9.72 2.5zM192.37 342.42s-12.53 0-18.65 2.81 5.42-8.42 18.65-2.81zM177.99 333h1.86s4.31-1.61 5.41-4.93 9.76-.28 9.76-.28 1.26.94.16-.61 3.81-6.41 6-9.62a2.41 2.41 0 00.39-.81 30.73 30.73 0 00-3.19-1.89c-1.81-.8-6.62 1.4-6.62 1.4s-5.81 7.82-10.62 13.83a14.45 14.45 0 01-3.15 2.91z"
        opacity={0.1}
      />
      <path
        d="M177.99 331.8h1.86s4.31-1.61 5.41-4.93 9.76-.29 9.76-.29 1.26.95.16-.6 3.81-6.41 6-9.62a2.41 2.41 0 00.39-.81 29 29 0 00-3.19-1.89c-1.81-.8-6.62 1.4-6.62 1.4s-5.81 7.82-10.62 13.83a14.45 14.45 0 01-3.15 2.91z"
        fill="#ff718d"
      />
      <circle cx={163.2} cy={344.35} r={1.33} fill="#e7c7ca" />
      <circle cx={140.33} cy={375.45} r={1.33} fill="#e7c7ca" />
      <circle cx={148.59} cy={355.82} r={1.33} fill="#e7c7ca" />
      <circle cx={136.64} cy={395.68} r={1.33} fill="#e7c7ca" />
      <circle cx={119.71} cy={430.55} r={1.33} fill="#e7c7ca" />
      <circle cx={118.38} cy={448.42} r={1.33} fill="#e7c7ca" />
      <path
        d="M98.96 318.87l2.71 8.72 8.52-.6 7.61-8.12s.5-1.46 1.28-3.64c1.92-5.37 5.55-15.12 7.54-18.11 2.81-4.21 4.62-21.65 4.62-21.65s-3.08-7-11.87 7c-6.61 10.58-14.84 25.86-18.52 32.73-1.18 2.3-1.89 3.67-1.89 3.67zM136.65 440.93c0 2.15 9 3.15 13.24 3.5 1.33.11 2.19.16 2.19.16-1 2.25 4.31 19.49 4.31 19.49a7.56 7.56 0 001.34-.17c7-1.41 20.8-11.05 20.8-11.05s.3-3.31 14.58-9.12c10.52-4.28 18.39-12.3 22.05-16.28a22.56 22.56 0 012.26-2.36l-12.63-13.13s-2.05 1.9-4.75 4.45c-4.94 4.66-12.07 11.5-12.79 12.81-1.1 2-20.94 11.7-20.94 11.7-4.41-3.8-13.93-4.61-13.93-4.61s-15.73 1.8-15.73 4.61z"
        fill="#ecb4b6"
      />
      <path
        d="M160.2 395.73c-.61 1.21-27.76 19.25-32.37 19.55s4.31-8.62 4.61-8.72 27.76-10.83 27.76-10.83zM13.68 682.14l-1-.23z"
        opacity={0.1}
      />
      <path
        d="M92.94 700.35a11.13 11.13 0 014.22-1.44 30 30 0 008.42-.26 20.35 20.35 0 00-.61 7.41l-2.55-.1s-9.52-2.06-9.48-5.61z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        d="M14.34 682.27l-.49-.07.54.1zM.03 676.56zM.05 676.57zM13.85 682.2h-.12z"
        opacity={0.1}
      />
      <path
        d="M151.21 636.39c.11 1.16.16 2.31.2 3.32a5.38 5.38 0 001.36 3.46l.06.07a48.41 48.41 0 00.44-7.14c-.21.31-1.12.35-2.06.29z"
        fill="#fff"
        opacity={0.3}
      />
      <path
        d="M200.04 416.42c6.53-.42 12.09 6.36 15.12 11a22.56 22.56 0 012.26-2.36l-12.63-13.13s-2.05 1.94-4.75 4.49z"
        opacity={0.1}
      />
      <path
        d="M199.98 414.67c10.22-1.4 18.24 15.24 18.24 15.24s8.62-6 13-11.23a7.18 7.18 0 001.11-1.93c-2.39-5.72-8.95-15.26-26.28-11.63l.11 1.94s-1.2 1.2-4.48 4.21-1.7 3.4-1.7 3.4z"
        opacity={0.1}
      />
      <path
        d="M199.98 415.88c10.22-1.41 18.24 15.23 18.24 15.23s8.62-6 13-11.22a7.25 7.25 0 001.11-1.94c-2.39-5.72-8.95-15.25-26.28-11.62l.11 1.93s-1.2 1.21-4.48 4.21-1.7 3.41-1.7 3.41z"
        fill="#ff718d"
      />
      <path
        d="M199.98 415.88c10.22-1.41 18.24 15.23 18.24 15.23s8.62-6 13-11.22a7.25 7.25 0 001.11-1.94c-2.39-5.72-8.95-15.25-26.28-11.62l.11 1.93s-1.2 1.21-4.48 4.21-1.7 3.41-1.7 3.41z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M98.96 318.87l2.71 8.72 8.52-.6 7.61-8.12s.5-1.46 1.28-3.64c-1.08.61-8.45 4.69-12.91 4.92-3.54.17-4.85-3.15-5.29-4.91-1.21 2.26-1.92 3.63-1.92 3.63z"
        opacity={0.1}
      />
      <path
        d="M96.31 321.92c.19-.22.37-.44.56-.65 2-2.31 3.8-4.1 3.8-4.1a9.38 9.38 0 001.73 4.31 4.42 4.42 0 003.77 1.68 24.43 24.43 0 007.48-2.21c3.06-1.34 5.56-2.78 5.56-2.78v2.41l.05 2.4v5.51s2.1 14.63-17.34 6.81c0 0 1.21-5.37-6.18-4.35z"
        opacity={0.1}
      />
      <path
        d="M119.21 316.36l.1 4.81v5.52s2.1 14.63-17.34 6.81c0 0 1.4-6.21-8-4s6.72-14.13 6.72-14.13.68 6.23 5.5 6 13.02-5.01 13.02-5.01z"
        fill="#ff718d"
      />
      <path
        d="M119.21 316.36l.1 4.81v5.52s2.1 14.63-17.34 6.81c0 0 1.4-6.21-8-4s6.72-14.13 6.72-14.13.68 6.23 5.5 6 13.02-5.01 13.02-5.01z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M156.29 469.49c-.2-.3-1-24.25-4.11-24.85s-10.82 2.61-10.82 2.61l1.4 19.14z"
        opacity={0.1}
      />
      <path
        d="M152.08 444.59c-1 2.25 4.31 19.49 4.31 19.49a7.56 7.56 0 001.34-.17c-.49-7.13-1.53-19.44-3.75-19.87a10.7 10.7 0 00-4.09.39c1.33.11 2.19.16 2.19.16z"
        opacity={0.1}
      />
      <path
        d="M157.49 468.89c-.2-.3-1-24.25-4.11-24.85s-10.82 2.6-10.82 2.6l1.4 19.15z"
        fill="#ff718d"
      />
      <path
        d="M157.49 468.89c-.2-.3-1-24.25-4.11-24.85s-10.82 2.6-10.82 2.6l1.4 19.15z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M129.74 326.62c2.41-3.77 3.85-8.06 5.25-12.3.67-2.05 1.34-4.13 1.8-6.23a24.82 24.82 0 0017 10.56 49.5 49.5 0 012 4.77 13.42 13.42 0 01-2.07 12.44c-2.8 3.37-7.92 4.81-11.84 2.85a26.07 26.07 0 00-3.53-1.89c-2.66-.84-5.44.55-8.19 1a12.86 12.86 0 01-10.7-3.09c4.39-1.11 7.86-4.35 10.28-8.11z"
        fill="#985c7e"
      />
      <circle cx={157.49} cy={295.63} r={24.85} opacity={0.1} />
      <circle cx={157.49} cy={294.01} r={24.85} fill="#ecb4b6" />
      <path
        d="M139.1 286.26c-2.92-2-7.22-.41-10.3-2.18a7.69 7.69 0 01-3.12-4.08c-2.69-7.1 1.54-16 8.75-18.42 1.88-.62 3.88-.85 5.77-1.43 5.18-1.57 9.16-5.59 13.64-8.62a39.65 39.65 0 0115.38-6.17c4.08-.7 8.6-.65 11.92 1.81 3.76 2.77 5 7.78 5.73 12.39s1.54 9.59 4.86 12.87c2.65 2.63 6.43 3.66 9.8 5.23s6.78 4.29 7 8c.17 2.92-1.66 5.55-2.23 8.42-.64 3.22.35 6.53 1.47 9.63a114.93 114.93 0 0012.38 24.59 67.27 67.27 0 01-19.69 7.26c-2.83.56-5.82.93-8.57.05-3.49-1.12-6.09-4.11-7.76-7.37a24.25 24.25 0 01-2.62-9.28c-.49-6.45 1.53-13.36-1.33-19.17a6.62 6.62 0 00-2.44-2.89c-1.26-.74-2.79-.82-4.18-1.26-2.4-.76-4.33-2.53-6.18-4.24l-6.61-6.2a18.41 18.41 0 00-5.15-3.78c-3.52-1.5-7.67-.65-11 1.22-2.93 1.64-6.31 4.11-9.28 2.52"
        fill="#985c7e"
      />
      <g opacity={0.1}>
        <path d="M137.1 285.69l-1.77-.5a4.3 4.3 0 001.77.5zM137.1 285.69l2 .57a5.3 5.3 0 00-1.13-.59 5.06 5.06 0 01-.87.02z" />
        <path d="M201.27 332.31c-2.83.56-5.82.93-8.57.05-3.48-1.12-6.08-4.11-7.76-7.36a24.53 24.53 0 01-2.62-9.28c-.49-6.45 1.53-13.37-1.33-19.17a6.62 6.62 0 00-2.44-2.89c-1.26-.75-2.79-.83-4.18-1.27-2.4-.75-4.33-2.52-6.17-4.24l-6.62-6.17a18.61 18.61 0 00-5.15-3.78c-3.52-1.49-7.67-.64-11 1.22-2.09 1.17-4.41 2.76-6.64 3a5.07 5.07 0 011.13.59l-2-.57a4.2 4.2 0 01-1.76-.49l1.76.49a5.06 5.06 0 00.87 0c-2.82-1.09-6.47 0-9.17-1.59a7.69 7.69 0 01-3.12-4.08 13.17 13.17 0 01-.67-6.49 13.85 13.85 0 00-.14 9.74 7.69 7.69 0 003.12 4.08c2.7 1.55 6.34.5 9.17 1.59 2.23-.25 4.55-1.83 6.64-3 3.34-1.87 7.49-2.72 11-1.22a18.22 18.22 0 015.14 3.78l6.62 6.17c1.85 1.71 3.78 3.48 6.18 4.24 1.39.44 2.92.52 4.18 1.26a6.62 6.62 0 012.44 2.89c2.86 5.81.84 12.72 1.33 19.17a24.25 24.25 0 002.62 9.28c1.67 3.26 4.27 6.25 7.76 7.37 2.75.88 5.74.51 8.57-.05a67.11 67.11 0 0019.68-7.26c-.45-.69-.9-1.39-1.34-2.1a66.85 66.85 0 01-17.53 6.09zM208.51 286.62a28.58 28.58 0 00-1.4 4.22c-.06.32-.1.63-.13.95a20.11 20.11 0 001.53-5.17z" />
      </g>
      <path
        d="M153.85 333.94c-2.8 3.37-7.92 4.81-11.84 2.85a24.94 24.94 0 00-3.53-1.88c-2.66-.85-5.44.55-8.19 1a12.86 12.86 0 01-9.21-2 12.37 12.37 0 01-1.49.49 12.84 12.84 0 0010.7 3.1c2.75-.49 5.53-1.88 8.19-1a24.94 24.94 0 013.53 1.88c3.92 2 9 .53 11.84-2.85a12.7 12.7 0 002.71-8.86 12.41 12.41 0 01-2.71 7.27z"
        opacity={0.1}
      />
    </svg>
  );
};

SvgDarkAnalytics.propTypes = {
  color: PropTypes.string
};
SvgDarkAnalytics.defaultProps = {
  color: "primary"
};
export default SvgDarkAnalytics;
