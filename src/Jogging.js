import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgJogging = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 962.2 771.67"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Jogging_svg__a"
          x1={2028.19}
          y1={403.28}
          x2={2028.19}
          y2={402.78}
          gradientTransform="matrix(-1 0 0 1 2778 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Jogging_svg__b"
          x1={2192.47}
          y1={835.84}
          x2={2192.47}
          y2={175.81}
          xlinkHref="#Jogging_svg__a"
        />
      </defs>
      <path
        d="M735.1 458.1a10.88 10.88 0 00-14.2 1.32 11.13 11.13 0 00.44 15.51l13.58 13.5a2.26 2.26 0 003.21 0l13.54-13.59a11.13 11.13 0 00.36-15.51 10.92 10.92 0 00-14.22-1.24 2.28 2.28 0 01-2.71.01zM143.1 150.1a10.88 10.88 0 00-14.2 1.32 11.13 11.13 0 00.44 15.51l13.58 13.5a2.26 2.26 0 003.21 0l13.54-13.59a11.13 11.13 0 00.36-15.51 10.92 10.92 0 00-14.22-1.24 2.28 2.28 0 01-2.71.01zM17.1 425.1a10.88 10.88 0 00-14.2 1.32 11.13 11.13 0 00.44 15.51l13.58 13.5a2.26 2.26 0 003.21 0l13.54-13.59a11.13 11.13 0 00.36-15.51 10.92 10.92 0 00-14.22-1.24 2.28 2.28 0 01-2.71.01zM734.1 123.1a10.88 10.88 0 00-14.2 1.32 11.13 11.13 0 00.44 15.51l13.58 13.5a2.26 2.26 0 003.21 0l13.54-13.59a11.13 11.13 0 00.36-15.51 10.92 10.92 0 00-14.22-1.24 2.28 2.28 0 01-2.71.01z"
        fill={color}
      />
      <path fill="#3ad29f" d="M651 73.92h3v17h-3z" />
      <path fill="#3ad29f" d="M661 80.92v3h-17v-3zM783 304.92h3v17h-3z" />
      <path fill="#3ad29f" d="M793 311.92v3h-17v-3zM193 515.92h3v17h-3z" />
      <path fill="#3ad29f" d="M203 522.92v3h-17v-3zM124 73.92h3v17h-3z" />
      <path fill="#3ad29f" d="M134 80.92v3h-17v-3zM256 100.92h3v17h-3z" />
      <path fill="#3ad29f" d="M266 107.92v3h-17v-3z" />
      <path
        d="M193.1 286.84a3.67 3.67 0 01-2.05-4.44 1.86 1.86 0 00.08-.41 1.84 1.84 0 00-3.31-1.22 1.82 1.82 0 00-.2.36 3.68 3.68 0 01-4.44 2.05 2 2 0 00-.41-.08 1.84 1.84 0 00-1.22 3.31 1.58 1.58 0 00.36.2 3.69 3.69 0 012.05 4.45 1.35 1.35 0 00-.08.4 1.84 1.84 0 003.31 1.22 2.08 2.08 0 00.2-.36 3.67 3.67 0 014.44-2 1.86 1.86 0 00.41.08 1.85 1.85 0 001.22-3.32 2.08 2.08 0 00-.36-.24z"
        fill="#f55f44"
      />
      <path
        d="M760.1 6.84a3.67 3.67 0 01-2-4.44 1.86 1.86 0 00.08-.41 1.84 1.84 0 00-3.31-1.22 1.82 1.82 0 00-.2.36 3.68 3.68 0 01-4.44 2 2 2 0 00-.41-.08 1.84 1.84 0 00-1.22 3.31 1.58 1.58 0 00.36.2 3.69 3.69 0 012.05 4.45 1.35 1.35 0 00-.08.4 1.84 1.84 0 003.31 1.22 2.08 2.08 0 00.2-.36 3.67 3.67 0 014.44-2 1.86 1.86 0 00.41.08 1.85 1.85 0 001.22-3.32 2.08 2.08 0 00-.41-.19z"
        fill="#3ad29f"
      />
      <path
        d="M408.1 22.84a3.67 3.67 0 01-2-4.44 1.86 1.86 0 00.08-.41 1.84 1.84 0 00-3.31-1.22 1.82 1.82 0 00-.2.36 3.68 3.68 0 01-4.44 2 2 2 0 00-.41-.08 1.84 1.84 0 00-1.22 3.31 1.58 1.58 0 00.36.2 3.69 3.69 0 012.05 4.45 1.35 1.35 0 00-.08.4 1.84 1.84 0 003.31 1.22 2.08 2.08 0 00.2-.36 3.67 3.67 0 014.44-2 1.86 1.86 0 00.41.08 1.85 1.85 0 001.22-3.32 2.08 2.08 0 00-.41-.19zM223.1 396.84a3.67 3.67 0 01-2.05-4.44 1.86 1.86 0 00.08-.41 1.84 1.84 0 00-3.31-1.22 1.82 1.82 0 00-.2.36 3.68 3.68 0 01-4.44 2.05 2 2 0 00-.41-.08 1.84 1.84 0 00-1.22 3.31 1.58 1.58 0 00.36.2 3.69 3.69 0 012.05 4.45 1.35 1.35 0 00-.08.4 1.84 1.84 0 003.31 1.22 2.08 2.08 0 00.2-.36 3.67 3.67 0 014.44-2 1.86 1.86 0 00.41.08 1.85 1.85 0 001.22-3.32 2.08 2.08 0 00-.36-.24zM665.1 268.84a3.67 3.67 0 01-2-4.44 1.86 1.86 0 00.08-.41 1.84 1.84 0 00-3.31-1.22 1.82 1.82 0 00-.2.36 3.68 3.68 0 01-4.44 2.05 2 2 0 00-.41-.08 1.84 1.84 0 00-1.22 3.31 1.58 1.58 0 00.36.2 3.69 3.69 0 012.05 4.45 1.35 1.35 0 00-.08.4 1.84 1.84 0 003.31 1.22 2.08 2.08 0 00.2-.36 3.67 3.67 0 014.44-2 1.86 1.86 0 00.41.08 1.85 1.85 0 001.22-3.32 2.08 2.08 0 00-.41-.24zM961.1 164.84a3.67 3.67 0 01-2-4.44 1.86 1.86 0 00.08-.41 1.84 1.84 0 00-3.31-1.22 1.82 1.82 0 00-.2.36 3.68 3.68 0 01-4.44 2.05 2 2 0 00-.41-.08 1.84 1.84 0 00-1.22 3.31 1.58 1.58 0 00.36.2 3.69 3.69 0 012 4.45 1.35 1.35 0 00-.08.4 1.84 1.84 0 003.31 1.22 2.08 2.08 0 00.2-.36 3.67 3.67 0 014.44-2 1.86 1.86 0 00.41.08 1.85 1.85 0 001.22-3.32 2.08 2.08 0 00-.36-.24z"
        fill="#f55f44"
      />
      <path
        d="M749.73 402.78l.16.5a2.66 2.66 0 01-.16-.5z"
        transform="translate(-118.9 -64.16)"
        fill="url(#Jogging_svg__a)"
      />
      <path
        d="M283.1 803.73c-.1-.14-.2-.28-.28-.42s-.11-.2-.16-.3a4.23 4.23 0 01-.22-.42l-.12-.3c-.05-.14-.11-.29-.15-.43l-.08-.29c0-.14-.07-.29-.1-.44v-.27-.46-.25-.47-.23l.06-.5v-.19a4.87 4.87 0 01.12-.52v-.16q.07-.27.18-.54v-.13c0-.04.15-.38.23-.57v-.08c.09-.2.19-.4.29-.59l.35-.61a21.56 21.56 0 015-5.39c14.95 6.15 33.41-.88 33.41-.88s24.62-12.31 22.86-8.79c-.59 1.18-.29 3.55.38 6.18 11.8-2.47 18.3-8.81 21.85-14.55l-13.44-14.49S407.88 726.82 414 711s36-60.66 36-60.66 9.67-35.17 27.26-43.08c0 0 35.07-41.89 55.54-77.82-7.27-18.09-17.4-46.37-15.1-58.46 2.87-15-.11-43.52-1.3-53.54-9.73 8.11-49.27 40.25-64.64 39.48-5.52-.28-11.47-3.24-17-7.17-13.28-8.41-25.16-23.6-25.16-23.6 1.79.17 3.26-1.47 4.45-4.21-14.68-16-45.09-48.76-48.41-49.42-4.39-.88-28.13-42.21-14.94-51s36.92 22.86 37.8 29c.6 4.17 19 22.5 30.76 33.86v-.46l1.74.87v-.87l30.36 15.19 25.91-35.41s7-37.8 24.62-44 30.33-25.05 30.33-25.05a18 18 0 01.39 1.87c.89-1.17 1.37-1.87 1.37-1.87s0 .15.1.42a45.93 45.93 0 001-16.55l-.25-.15c-.11-.68-.22-1.33-.34-1.95A44 44 0 01516.75 222c-4.48-3.13-11-5.08-16.5-7.46-8.31-3.57-15.25-8.82-19.83-15a17.47 17.47 0 019.19.19c.37-4.06-4.32-8.7-.67-11.79 2.26-1.92 6.47-1.75 9.7-.8s6.15 2.52 9.58 2.94c6 .73 11.59-2.16 15.85-5.28s8.24-6.77 13.94-8.25c11.28-2.93 22.48 3.79 33.81 6.63 18.2 4.56 29.06 9.42 29.87 21a37.53 37.53 0 016.43 5.46 24 24 0 017.72 13.08c1.54 7.89-1.66 15.91-5.51 23-2.19 4-12.71 24.82-19.86 22.07a44 44 0 01-6.58 6.15c.23 2.4.56 4.82 1 7.24a16.15 16.15 0 005.17 1.78 62.77 62.77 0 0011.87 1.04 175.79 175.79 0 0018.72-1.14 157.48 157.48 0 0118.19-1 90.07 90.07 0 019.07.43h.47c.61.07 1.21.14 1.79.23h.28c.68.1 1.33.2 2 .32h.21l1.6.31.36.08c.56.12 1.1.25 1.63.39q.82.21 1.59.45l.26.08 1.25.39.27.1c.94.32 1.83.66 2.67 1l.26.11 1 .45.19.09 1.18.55.1.05 1 .5.25.12 1 .51h.07l1.25.65.75.39.35.18 1 .52c8.79 4.4 94.07 27.26 109 73l-.3.28-.07.05-.34.31c.25.67.49 1.33.71 2 0 0-1.45 1.3-3.71 3.42 4 17.49 14.76 62.16 20.41 64.28 7 2.64 14.95 56.27-3.51 54.51s-18.47-44.84-18.47-44.84-12.17-32.64-21.15-49.21a23.16 23.16 0 00-3.52 6.83l.06.18a1.15 1.15 0 01-.06-.17 4.86 4.86 0 00-.1 2.31c-.87-2.55-5.38-14.26-14.79-12.69-10.05 1.67-48-35.71-51.59-39.29.08 1 .19 2.18.31 3.59v.05c.07.82.15 1.71.22 2.66v.3c0 .24 0 .48.05.73s0 .32 0 .48l.06.74v.52l.06.74v.67c0 .22.06.72.08 1.09s.05.59.07.88 0 .42 0 .63l.06.88v.6c0 .2 0 .62.07.94s0 .41 0 .62l.06 1v.58c0 .53.07 1.06.1 1.6v.21l.09 1.48v.51c0 .4.05.81.07 1.22v.58c0 .42.05.84.07 1.26v.52c0 .5 0 1 .08 1.52v.29l.09 1.91v.11c0 .58 0 1.16.08 1.74v.5l.06 1.43v2.52c0 1.32.09 2.66.13 4v15.4c.06 19.18-1.17 38.7-5.48 49.84a54.88 54.88 0 00-3.6 18.72 76.4 76.4 0 009.72 33.21l-1-.32c.12.22.19.33.19.33l-.57-.18c.86 1.81 1.45 2.82 1.45 2.82s-1.28-.41-3.56-1.08c3.24 11.45 5.41 29.08-.84 51.19 0 0-3.52 19.34-.88 26.38s5.28 63.3 5.28 63.3 5.27 7 14.94 2.64S829 632.74 829 632.74s.28.49.74 1.34c3.65-1.14 8.91-2.88 12.76-4.5-1.42-2-2.74-3.15-3.83-3 0 0 6.34-3.06 13.24-5.47l1.26-.43h.05l1.23-.4h.08l1.18-.36h.13l1.08-.3.22-.07 1-.26.26-.07 1-.22.28-.06.87-.18.33-.06.79-.13.37-.06.72-.08h3.3l.48.1.32.07c.14 0 .27.1.4.15a2.49 2.49 0 01.29.11 3.41 3.41 0 01.38.21c.07 0 .15.08.21.13a2.56 2.56 0 01.48.45c4.39 5.27 29 106.38 17.58 113.41-.34.21-.67.41-1 .59l-.4.23-.52.29-.5.27-.37.19-.54.26-.28.13-.56.24-.2.08c-.2.08-.4.16-.59.22h-.13l-.6.19h-.08c-6.37 1.72-8.49-4.18-16.22-16.82-7.57-12.39-17.29-28-25.79-33.78-.19.41-.37.84-.58 1.25 0 0-88.8 9.67-121.33 20.22s-58 24.61-79.13 0c-18.93-22.08-37.85-93.67-41.55-108.19-.26-1-.44-1.77-.55-2.18v-.32l-70.34 53.63L494 685.5s-43 60.66-50.95 61.5-44.84 58.9-44.84 58.9l-1.34-1.44c-.32 1.61-.56 3.09-.74 4.38 3 7 .21 15.38-2.43 20.93l-.11.22-.3.61-.16.32c-.1.19-.19.38-.29.56l-.15.28c-.1.2-.21.39-.31.58l-.15.28-.24.42-.12.21c-.1.19-.21.36-.3.53a1.59 1.59 0 00-.13.22c-.07.1-.13.21-.19.31s-.07.12-.11.17l-.23.38a1.19 1.19 0 00-.09.15l-.15.22-.06.1-.15.23c0 .06-.06.09-.08.13s-92.32-22-103.75-29c-.36-.22-.7-.45-1-.68l-.29-.22c-.2-.16-.4-.31-.58-.47a4 4 0 01-.3-.28c-.15-.14-.31-.28-.44-.42s-.18-.2-.27-.3l-.35-.41z"
        transform="translate(-118.9 -64.16)"
        fill="url(#Jogging_svg__b)"
      />
      <path
        d="M700.36 567.84s20.56-6 21.41-8.57 18 47.1 18 47.1l-17.13 12s-18-10.27-27.4-8.56 5.12-41.97 5.12-41.97zM257.63 690.32s-2.53 23.12-30.83 25.69 18.84 23.12 18.84 23.12l36 2.57s.85-14.56 6.85-25.69-30.86-25.69-30.86-25.69z"
        fill="#4c4c56"
      />
      <path
        d="M554.78 429.98s16.32 24.86 5.14 64.23c0 0-3.42 18.84-.85 25.69s5.13 61.66 5.13 61.66 5.14 6.85 14.56 2.57 125-18.84 125-18.84 18.84 32.54 8.56 52.24c0 0-86.49 9.42-118.17 19.69s-56.52 24-77.08 0-41.1-107.9-41.1-107.9l-68.51 52.24-30 35.11s-42 59.09-49.67 59.94-43.67 57.38-43.67 57.38l-43.68-47.1s53.1-30 59.09-45.39 35.11-59.08 35.11-59.08 9.42-34.26 26.55-42c0 0 61.66-73.64 67.65-107.9s102.76-18 102.76-18z"
        fill="#5f5d7e"
      />
      <path
        d="M236.22 726.28s-6-13.7-4.28-17.12-22.27 8.56-22.27 8.56-18 6.85-32.54.86c0 0-12.84 9.41-1.71 16.27s101.05 28.26 101.05 28.26 13.7-19.7 2.57-30.83z"
        fill="#986365"
      />
      <path
        d="M299.59 641.5c6-15.41 35.11-59.08 35.11-59.08s9.42-34.26 26.55-42c0 0 61.66-73.64 67.65-107.9 1.24-7.06 6.34-12 13.64-15.32q6 17.94 11.95 35.87 8.15 24.5 16.31 49c3.14 9.45 6.12 20 5.83 29.76-.41-1.63-.63-2.53-.63-2.53l-68.51 52.24-30 35.11s-42 59.09-49.67 59.94-43.67 57.38-43.67 57.38l-43.68-47.1s53.13-29.95 59.12-45.37z"
        opacity={0.1}
      />
      <path
        d="M415.2 209.9s7.28 18.41-2.14 35.54 3.85 47.53 12.41 49.24 42.82-20.55 45.39-35.11-11.13-44.53-4.28-64.23z"
        fill="#fdc2cc"
      />
      <path
        d="M461.44 241.59s-26.55 53.95-55.66 15.41c0 0-29.12 59.09-19.7 68.51a197.16 197.16 0 0021.41 18l15.42 107.9s87.34-30 124.17-24.83l-56.52-135.3z"
        opacity={0.1}
      />
      <path
        d="M461.44 239.02s-26.55 53.95-55.66 15.41c0 0-29.12 59.09-19.7 68.51a197.16 197.16 0 0021.41 18l15.42 107.9s87.34-30 124.19-24.85l-56.52-135.3z"
        fill="#d39999"
      />
      <path
        d="M650.7 301.53s14.55 66.8 21.4 69.37 14.56 54.8-3.42 53.09-18-43.67-18-43.67-18.82-50.48-26.53-56.48 26.55-22.31 26.55-22.31zM314.15 332.36s-38.54-36-39.39-42-24-36.82-36.83-28.26 10.28 48.81 14.56 49.67 54.81 56.52 54.81 56.52z"
        fill="#fdc2cc"
      />
      <path
        d="M465.3 224.89s4.71 5.56 36.39 2.14 39.39 2.57 48 6.85 91.63 26.55 106.18 71.08c0 0-32.54 29.11-29.11 36.82 0 0-4.28-14.56-14.56-12.84s-50.53-38.54-50.53-38.54 7.71 75.36-2.56 101.91 5.13 53.09 5.13 53.09-72.79-23.12-105.33-12c0 0-18.84-84.78-2.57-119s-6.85-66.8-6.85-66.8z"
        opacity={0.1}
      />
      <path
        d="M464.44 222.32s4.71 5.57 36.39 2.14 39.4 2.57 48 6.85 91.59 26.53 106.15 71.08c0 0-32.54 29.11-29.12 36.82 0 0-4.28-14.56-14.56-12.84s-50.52-38.53-50.52-38.53 7.71 75.36-2.57 101.91 5.14 53.09 5.14 53.09-72.79-23.12-105.33-12c0 0-18.84-84.78-2.57-119s-6.85-66.8-6.85-66.8z"
        opacity={0.1}
      />
      <path
        d="M465.3 222.32s4.71 5.57 36.39 2.14 39.39 2.57 48 6.85 91.59 26.53 106.14 71.08c0 0-32.54 29.11-29.11 36.82 0 0-4.28-14.56-14.56-12.84s-50.53-38.53-50.53-38.53 7.71 75.36-2.56 101.91 5.13 53.09 5.13 53.09-72.79-23.12-105.33-12c0 0-18.84-84.78-2.57-119s-6.85-66.8-6.85-66.8z"
        fill="#ec7580"
      />
      <path
        d="M417.34 237.73s-12.42 18.42-29.54 24.41-24 42.82-24 42.82l-25.7 35.11-30.8-15.42s-.86 42-9.42 41.11c0 0 21.41 27.4 38.53 28.26s65.09-40.25 65.09-40.25 5.14 37.68 1.71 55.66 21.41 72.79 21.41 72.79l34.25-6.85s-18-68.51-40.25-79.64c0 0 0-46.24 3.43-57.38s-22.27-53.09-18.84-61.65c1.92-4.81 9.47-15.08 13.27-24.41a24.4 24.4 0 00.86-14.56z"
        opacity={0.1}
      />
      <path
        d="M414.77 236.02s-12.42 18.41-29.54 24.41-24 42.81-24 42.81l-25.69 35.11-30.81-15.41s-.86 42-9.42 41.11c0 0 21.41 27.4 38.54 28.26s65.08-40.25 65.08-40.25 5.14 37.68 1.71 55.66 21.46 72.79 21.46 72.79l34.25-6.85s-18-68.51-40.24-79.64c0 0 0-46.25 3.42-57.38s-22.26-53.09-18.84-61.66c1.92-4.8 9.47-15.07 13.27-24.4a24.4 24.4 0 00.81-14.56z"
        opacity={0.1}
      />
      <path
        d="M416.48 236.02s-12.38 18.41-29.54 24.41-24 42.81-24 42.81l-25.69 35.11-30.81-15.41s-.85 42-9.42 41.11c0 0 21.41 27.4 38.54 28.26s65.08-40.25 65.08-40.25 5.14 37.68 1.71 55.66 21.41 72.79 21.41 72.79l34.26-6.85s-18-68.51-40.25-79.64c0 0 0-46.25 3.42-57.38s-22.26-53.09-18.84-61.66c1.93-4.8 9.48-15.07 13.28-24.4a24.45 24.45 0 00.85-14.56z"
        fill="#ec7580"
      />
      <path
        d="M415.03 237.47s-12.41 18.37-29.54 24.37-24 42.81-24 42.81l-25.67 35.19-30.83-15.41s-.85 42-9.42 41.1c0 0 21.41 27.41 38.54 28.26s65.08-40.24 65.08-40.24 5.14 37.68 1.71 55.66S422.31 482 422.31 482l34.26-6.85s-18-68.51-40.25-79.64c0 0 0-46.25 3.42-57.38s-22.26-53.09-18.84-61.66c1.93-4.8 9.48-15.08 13.28-24.4a24.45 24.45 0 00.85-14.6z"
        opacity={0.05}
      />
      <path
        d="M713.21 559.29s24.83-12 29.12-6.85 28.25 103.62 17.12 110.47-12 1.71-21.41-13.7-22.26-36-31.68-35.11c0 0 27.4-9.42 26.55-12.85s-13.71-42.81-19.7-41.96z"
        fill="#986365"
      />
      <path
        d="M465.03 217.48a42.82 42.82 0 01-47.72 2.69 43 43 0 00-2.11-8.56l51.38-14.55c-2.12 6.08-2.27 13.14-1.55 20.42z"
        opacity={0.1}
      />
      <path
        d="M433.25 183.96c-10.44.91-23.15-1.06-27-8.17-1.11-2-1.35-4.29-2.48-6.33-3.27-5.89-12.64-8.3-20.16-11.53-8.1-3.48-14.86-8.59-19.32-14.61a17.09 17.09 0 019 .18c.37-4-4.21-8.47-.65-11.49 2.2-1.87 6.3-1.7 9.44-.77s6 2.45 9.34 2.86c5.81.71 11.29-2.1 15.44-5.14s8-6.6 13.57-8c11-2.86 21.9 3.69 32.94 6.45 22.63 5.67 33.6 11.81 27.45 31.49-4.63 14.5-28.58 23.42-47.57 25.06z"
        fill="#865a61"
      />
      <circle cx={439.17} cy={181.64} r={42.82} fill="#fdc2cc" />
      <path
        d="M472.46 175.11c-2.07-8.4-8.05-16.25-16.39-18.58-7.09-2-14.63.17-21.55 2.68s-14 5.44-21.34 5-15.06-5.5-15.62-12.84a6.15 6.15 0 01.53-3.32 8.06 8.06 0 013.07-2.83c10.77-6.87 23-12.28 35.79-12.07 10.51.17 20.55 4.11 30.32 8 12.33 4.9 26.34 11.75 28.88 24.76 1.5 7.69-1.61 15.5-5.36 22.37-2.17 4-12.7 24.8-19.67 21.37-2.81-1.38 2.67-29.14 1.34-34.54z"
        opacity={0.1}
      />
      <path
        d="M470.75 173.4c-2.07-8.41-8.06-16.25-16.4-18.58-7.09-2-14.63.17-21.55 2.68s-14 5.44-21.34 5-15.06-5.51-15.62-12.85a6.19 6.19 0 01.54-3.32 8.26 8.26 0 013.06-2.83c10.78-6.86 23-12.27 35.8-12.07 10.51.18 20.55 4.12 30.32 8 12.32 4.9 26.34 11.75 28.88 24.76 1.5 7.68-1.62 15.49-5.37 22.36-2.16 4-12.69 24.81-19.66 21.38-2.81-1.37 2.69-29.09 1.34-34.53z"
        fill="#865a61"
      />
      <path
        d="M756.88 663.77c11.14-6.85-12.84-105.33-17.12-110.47-1.88-2.25-7.71-1.21-13.66.66 6.76-2.36 14.08-4.09 16.23-1.52 4.28 5.14 28.25 103.62 17.12 110.47a20.13 20.13 0 01-6.21 2.83 30.9 30.9 0 003.64-1.97zM172.29 723.84c-1.15 2.95-.8 6.37 4 9.31 11.13 6.85 101.05 28.26 101.05 28.26a44.63 44.63 0 002.45-4.16 46.12 46.12 0 01-3.31 5.88s-89.93-21.43-101.06-28.29c-5.75-3.53-5.1-7.76-3.13-11z"
        fill="#fff"
        opacity={0.5}
      />
      <g opacity={0.05}>
        <path d="M622.1 330.63c7.12-11.45 26.84-29.1 26.84-29.1-14.56-44.53-97.62-66.79-106.18-71.08-4.73-2.36-9.2-5.24-17.57-6.77 13.07 1 18.54 4.7 24.42 7.63 8.56 4.28 91.63 26.55 106.18 71.08 0 0-31.27 28-29.27 36.34a26.88 26.88 0 00-4.42-8.1zM626.56 338.73l.16.48a2.46 2.46 0 01-.16-.48zM464.31 223.73l1-1.41s1.09 1.28 5.69 2.23a51.79 51.79 0 01-6.69-.82zM611.23 326.41a11.35 11.35 0 01-3.74-1 9.33 9.33 0 013.74 1zM499.81 428.91c-15.32-1.69-30.28-1.71-40.94 1.93 0 0-.2-.89-.53-2.51 11.68-2.27 26.69-1.49 41.47.58zM556.61 440.58c-3-5.77-13.29-28.73-4.4-51.7 10.28-26.55 2.57-101.91 2.57-101.91s2.94 2.94 7.43 7.19c1.58 18.68 5.32 73.68-3.11 95.58-10.31 26.54 5.1 53.1 5.1 53.1s-2.82-.91-7.59-2.26z" />
      </g>
    </svg>
  );
};

SvgJogging.propTypes = {
  color: PropTypes.string
};
SvgJogging.defaultProps = {
  color: "primary"
};
export default SvgJogging;
