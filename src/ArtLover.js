import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgArtLover = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1086.79 841.46"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="ArtLover_svg__a"
          x1={583.15}
          y1={850.73}
          x2={583.15}
          y2={211.73}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M54.88 39.2C25.12 58.4 3.01 92.93.31 130.73c-3.91 55 31.18 103.76 68.58 140.5s80.51 69.89 102.31 119.56c23.92 54.61 15.75 124.34-20 170.52-15.38 19.88-36.8 40-33.89 65.92 2.72 24.18 27.35 39.27 49.49 38.14s42.19-13.92 61.52-25.84c69.3-42.75 144.82-79.37 224.28-80.06 85.19-.73 165.65 39.65 242.86 79.21l111 56.89c23.08 11.83 46.75 23.84 72.11 26.39s51.11-4.7 73.63-17.81c24.1-14 46-36.94 50.93-66.42 6.53-39.18-18-76.42-21.32-116.09-3.26-39.25 14.55-76.88 35.28-109s45.23-62.18 58.66-98.73c27.59-75.12.72-165.38-52.34-221.6S895.99 9.8 822.62 2.18c-27.51-2.86-55.36-3.34-82.69 1.17-54.42 9-104.34 37.28-156 58-92.34 37-195.54 49.84-289.12 16.75C219.48 51.5 132.8-11.06 54.88 39.2z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={532}
        cy={792.46}
        rx={297}
        ry={49}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M733.99 440.23V38.46H307.87v523.48h426.12v-50.57l.13-56.24c.28-14.4.28-.4-.13-14.9z"
        fill="#a1a3b2"
      />
      <path fill="#f4f5f6" d="M320.17 53.46h401.7v493.48h-401.7z" />
      <g opacity={0.2} fill={color}>
        <path d="M703.4 196.46v-31.55c0-.63.06-1.33.06-2.09a7.94 7.94 0 001.94-4.79c0-1.3-.13-2.86.9-3.66.77-.6 1.87-.46 2.84-.64 3.25-.61 4.44-4.79 3.87-8s-2.19-6.39-1.9-9.69c.32-3.56 2.78-6.49 4.87-9.39s4-6.51 2.88-9.92c-.77-2.46-2.91-4.22-4.14-6.49-1.59-2.94-1.53-6.48-1.15-9.8s1-6.68.52-10-2.58-6.63-5.81-7.48a7.25 7.25 0 01-2.82-.92 7 7 0 01-1.5-2.5c-1.44-2.84-4.66-4.3-7.78-5-6.46-1.36-12.13 1.4-18.45 1.13-4.83-.21-14.24-5-13.18 3.45a11.83 11.83 0 01-5 11c-3.1 2.08-7.7 3.33-8.12 7-.35 3.11 2.69 5.46 4 8.32 2.07 4.67-.82 10-4 14a8.92 8.92 0 00-2.03 3.29c-.67 2.59 1.2 5.1 3.06 7s4 4 4 6.69-2.16 4.93-3.79 7.15-2.65 5.65-.61 7.49c1.37 1.23 3.88 1.53 4.14 3.35.16 1.09-.67 2-1.34 2.93-4.36 5.79-2.16 15.31 4.29 18.61a21.06 21.06 0 007.39 1.87l-.58 20c-3.07.27-4.9.47-4.9.47s-4.55.79-11.92 1.79v-54.84l-3-11.32-3-6.56-3-6-2.38-3.58-3.58 3 6 5.36 6 10.73v32.78L640.82 147v-3l-4.77-3.58-3-3.58 3 8.34 4.77 6 .58 6.55h-3.58l-3.58-4.77 1.79 7.75h6.56l1.79 6v13.11l-6.56-11.32-9.52-1.77 9.54 3.58 6.56 12.48v17.94c-5.12.65-11.14 1.33-17.69 1.92l.11-1.66c1.19-.6-.6-3.58-.6-3.58v-3.58c6.56 7.15 11.92 1.79 11.92 1.79l-7.74-6.57h-14.9l-3.58-3v-3l-1.79.6-.6 1.79-2.38-.6-.6-1.79h-1.15l.6 2.38c.6 2.38-1.79 6-1.79 6-.6 3 4.17 2.38 4.17 2.38a4.12 4.12 0 002.38 2.67v7.25c-19.93 1-41.55.55-56.32-4.29-34.57-11.32-63.77-3-63.77-3s-11.87 2.65-29 4.58l-2.46-29a2.33 2.33 0 002.08.05c1.85-1 1-3.75 1.43-5.79.68-3.31 4.76-4.53 6.89-7.16s2.17-6.66 4.47-9.2a42.05 42.05 0 013.57-2.88c4.31-3.8 3.69-11.74-1.14-14.84a12.29 12.29 0 01-2.3-1.56c-2.33-2.39-.58-6.37-1-9.68-.39-2.85-2.54-5.21-5.06-6.6-4.92-2.63-11.2-3.63-16.6-4.63a4.14 4.14 0 01-2.16 5.09 8 8 0 01-2.79.46 8.75 8.75 0 00-3.85.77 3 3 0 00-1.64 3.27 17.75 17.75 0 001 1.81c.92 2.08-.78 4.32-2.32 6s-3.12 4.06-2 6c.7 1.22 2.23 1.77 3 2.95 1.42 2.16-.34 4.92-1.89 7s-2.84 5.27-.89 7a8.76 8.76 0 002.49 1.16c6.24 2.59 6.42 12.33 12.38 15.51a17.87 17.87 0 012.27 1.19 5.56 5.56 0 011 .93c.1 6.85.34 24.62.15 32.77-6.26.6-13.08 1.08-20.16 1.28v-14.29c1.18-.61 2.21-1.65 3.45-2.2 1.79-.79 3.84-.5 5.8-.64s4.17-1 4.63-2.93a14.48 14.48 0 000-2.71c0-.91.51-1.93 1.4-2.09a15 15 0 00-1.25-3.17c-1.14-2.88-.44-6.27-1.77-9.07a13.58 13.58 0 00-3.85-4.28l-2.27-1.9c-2.82-2.36-5.71-4.75-9.13-6.12-.91-.36-1.85-.64-2.78-.92-.64.35-.66 1.3-.45 2a3.5 3.5 0 01.29 2.26 2.41 2.41 0 01-1.67 1.19 24.24 24.24 0 00-3.07.87 3.15 3.15 0 00-2 2.31 5.38 5.38 0 00-3.63.62c-1 .75-1.15 2.64 0 3.09a5.93 5.93 0 00-1.34 7.09c.82 1.52 2.32 2.69 2.71 4.37.35 1.49-.27 3.13.28 4.57a20 20 0 011.06 2.15c.16.63 0 1.31.24 1.92a3.07 3.07 0 002.6 1.78c1.1.16 2.23 0 3.31.28 1.53.34 2.9 1.38 4.37 1.8l-1 14.09a217.25 217.25 0 01-24.65-1l-.7-32.68.1-.07a1.78 1.78 0 00.46-.82c.69-2.37-1.11-5.4.63-7.15.85-.85 2.21-.94 3.13-1.71 2-1.63.8-5 2.21-7.13.72-1.08 2-1.64 3-2.48a8.28 8.28 0 002.66-5.83 19.74 19.74 0 00-.93-6.49c-.47-1.68-1-3.46-.49-5.13.57-1.86 2.34-3.16 3-5 1-3-1.28-6.05-3.43-8.4-3.33-3.64-5.86-5-10.65-5.59-1.58-.21-3-.92-4.58-1.1-3-.33-2.59.55-3.54 2.68-.79 1.77-3.87.81-5.09 2.31a3 3 0 00-.07 3 11.12 11.12 0 011.14 2.9c.18 1.5-.69 2.92-1 4.41a5.7 5.7 0 002.93 5.89 8.74 8.74 0 00-1.22 10.68 16.47 16.47 0 012.15 3.34c1 3-1.49 6.75.29 9.42.33.5.8.91 1.14 1.4 1.34 2 .47 4.65 1 7a5.87 5.87 0 004.39 4.19l1.08 32.17q-4-.46-8-1.12c-4.58-.76-9.06-1.39-13.41-1.9v-14.92c1.18-.61 2.21-1.65 3.45-2.2 1.79-.79 3.84-.5 5.8-.64s4.17-1 4.63-2.93a14.48 14.48 0 000-2.71c0-.91.51-1.93 1.4-2.09a15 15 0 00-1.25-3.17c-1.14-2.88-.44-6.27-1.77-9.07a13.58 13.58 0 00-3.78-4.32l-2.27-1.9c-2.82-2.36-5.71-4.75-9.13-6.12-.91-.36-1.85-.64-2.78-.92-.64.35-.66 1.3-.45 2a3.5 3.5 0 01.29 2.26 2.41 2.41 0 01-1.67 1.19 24.24 24.24 0 00-3.07.87 3.15 3.15 0 00-2 2.31 5.38 5.38 0 00-3.63.62c-1 .75-1.15 2.64 0 3.09a5.93 5.93 0 00-1.34 7.09c.82 1.52 2.32 2.69 2.71 4.37.35 1.49-.27 3.13.28 4.57a20 20 0 011.06 2.15c.16.63 0 1.31.24 1.92a3.07 3.07 0 002.6 1.78c1.1.16 2.23 0 3.31.28 1.53.34 2.9 1.38 4.37 1.8l-1 14.17c-5.69-.59-11.13-1-16.24-1.23v-27.65l-1.19-16.09 10.13-15.5-10.13 13.11.36-9.41 1 .27c.74.2 1.69.34 2.14-.29s.05-1.82.74-2.26a1.5 1.5 0 01.91-.14l3.28.18c1.26-1.69-1.77-3.7-1.56-5.8.14-1.39 1.64-2.19 3-2.58s2.88-.69 3.66-1.85c1.17-1.72-.05-4.17.71-6.1a13.06 13.06 0 011.65-2.37 2.5 2.5 0 00.34-2.71 3.56 3.56 0 00-1.6-1.05 11.46 11.46 0 01-6-6.78 2.19 2.19 0 01-.06-1.61c.36-.73 1.31-.9 2-1.26 2.33-1.18 2.38-4.57 1.32-7a7.42 7.42 0 00-2.74-3.43 4.08 4.08 0 00-4.23-.15 11.81 11.81 0 00-1.74 1.65 7.35 7.35 0 01-5.44 2c-1.5-.08-3.31-1.31-2.74-2.71s2.71-1 4-1.87a3.65 3.65 0 001.36-2.94c.19-3.3-1.54-6.6-.78-9.81a12.37 12.37 0 00.46-2c.11-1.61-1-3-2.2-4.12a14.92 14.92 0 01-3.39-3.42c-1-1.84-1.08-4.11-3.36-4.88a9.63 9.63 0 00-6 .57c-1.72.85-2 1.73-1.54 3.5.52 1.94 1.31 3.93-2 3.31-1.22-.22-2.75-.5-3.45.52-.55.81-.16 1.89-.06 2.87s-.63 2.26-1.54 1.9c-.05 1.29 2.13 1.3 2.8 2.41a1.78 1.78 0 01-.83 2.29 5.16 5.16 0 01-2.64.45 15.05 15.05 0 01-1.57-2.21c-.58-.7-1.79-1.08-2.33-.35a2 2 0 00-.27 1.09l-.24 4.77a3.64 3.64 0 00.06 1.14 6.1 6.1 0 00.51 1.08 4.61 4.61 0 01-.74 5.07l1.34.59c-.52 1.26-2.53.39-3.75 1-1 .46-1.19 1.7-1.25 2.77a19.43 19.43 0 00.45 5.55c.45 1.86 1.08 4.24-.49 5.35a6.46 6.46 0 01-2.06.7 2.07 2.07 0 00-1.6 1.33c-.16.71.75 1.51 1.3 1l-.46 2.78a3.36 3.36 0 001.83.16c.38 1.8-1.53 3.14-3.07 4.14s-3.11 3-2 4.45c.4.51 1.07.8 1.34 1.39a4.21 4.21 0 01.15 1.58c.13 2.54 3.15 4.2 3.33 6.74 2.39.27 3.84-2.41 5.37-4.27a.93.93 0 01.63-.42 1 1 0 01.59.29l1.92 1.56a9.54 9.54 0 00.21-3.9 17.72 17.72 0 012.77.12l-.41 5.56v29.8l1.11 31.63a204.69 204.69 0 00-20.48 1.44v13.11h401.7v-12.44c-4.73-1.45-11.35-2.15-18.51-2.42zm-343-41.38l-2.06-14.73 1.6.44zm-19.67 10.13v-35.25a17.75 17.75 0 013.21.84 6.05 6.05 0 011.72.89c.13.1.25.21.36.32l.07 2.2-1.19 28.61v33.91h-2.51zm8.35 31.52v-63.1a3.46 3.46 0 002.59-1.09 6.33 6.33 0 002.14 3.52 3 3 0 00-.78 2.85l3.61 1 2.56 17 1.2 13.07-1.65 26.92c-3.35-.12-6.63-.17-9.67-.17zm275.95 3.64l-.2 2.42 1-.09-1.62.14-.67-3.69zm-4.17-3l1.19 2.38V203c-2.7.22-5.47.41-8.28.58l1.13-6.21zm-8.56-.57a4.4 4.4 0 00.81 0l-.57 6.88-1 .06zm77.69-35a29.88 29.88 0 012.68 2v32.5c-1.84 0-3.67.07-5.47.13l-1.27-34.82.06-.05a3.74 3.74 0 014 .27zm-5.94 5.06c.43-1.17.47-2.58.87-3.73v33.42l-3.58.16V169.6a4.84 4.84 0 002.71-2.71zm-12.24 3.87c.49-1.46 1.48-2.7 2.9-2.46a6.52 6.52 0 012.12 1.17 4.37 4.37 0 001.54.57v26.92c-2.35.14-4.56.29-6.56.44zm23.84 25.64v-31a8.13 8.13 0 002.52.21c-.08.76-.13 1.19-.13 1.19l1.62 29.66c-1.33-.09-2.67-.1-4.01-.09zM430.4 152.56h.15zM430.18 152.55l.19.06z" />
        <path d="M435.4 153.39l-4.85-.78a11.4 11.4 0 004.85.78zM377.73 147.73l.19.06zM382.95 148.62l-4.85-.78a11.4 11.4 0 004.85.78zM377.98 147.79h.15z" />
      </g>
      <g opacity={0.2} fill={color}>
        <path d="M674.79 451.73h.15zM674.53 451.73l.19.06zM679.76 452.58l-4.85-.78a11.4 11.4 0 004.85.78zM622.09 446.97l.19.06zM622.34 446.98h.15zM627.31 447.81l-4.85-.78a11.4 11.4 0 004.85.78z" />
        <path d="M705.63 471.28c1.85-1 1-3.75 1.43-5.79.68-3.31 4.76-4.53 6.89-7.16s2.17-6.66 4.47-9.2a42.05 42.05 0 013.57-2.88c4.31-3.8 3.69-11.74-1.14-14.84a12.29 12.29 0 01-2.3-1.56c-2.33-2.39-.58-6.37-1-9.68-.39-2.85-2.54-5.21-5.06-6.6-4.87-2.69-11.15-3.63-16.54-4.64a4.14 4.14 0 01-2.16 5.09 8 8 0 01-2.79.46 8.75 8.75 0 00-3.85.77 3 3 0 00-1.64 3.27 17.75 17.75 0 001 1.81c.92 2.08-.78 4.32-2.32 6s-3.12 4.06-2 6c.7 1.22 2.23 1.77 3 2.95 1.42 2.16-.34 4.92-1.89 7s-2.84 5.27-.89 7a8.76 8.76 0 002.49 1.16c6.24 2.59 6.42 12.33 12.38 15.51a17.87 17.87 0 012.27 1.19 5.56 5.56 0 011 .93c.09 6.27.3 21.7.19 30.52l-15.73-.51-3.58-.16v-10.65a16.85 16.85 0 012.56-1.66c1.79-.79 3.84-.5 5.8-.64s4.17-1 4.63-2.93a14.48 14.48 0 000-2.71c0-.91.51-1.93 1.4-2.09a15 15 0 00-1.25-3.17c-1.14-2.88-.44-6.27-1.77-9.07a13.58 13.58 0 00-3.9-4.27l-2.27-1.9c-2.82-2.36-5.71-4.75-9.13-6.12-.91-.36-1.85-.64-2.78-.92-.64.35-.66 1.3-.45 2a3.5 3.5 0 01.29 2.26 2.41 2.41 0 01-1.67 1.19 24.24 24.24 0 00-3.07.87 3.15 3.15 0 00-2 2.31 5.38 5.38 0 00-3.63.62c-1 .75-1.15 2.64 0 3.09a5.93 5.93 0 00-1.34 7.09c.82 1.52 2.32 2.69 2.71 4.37.35 1.49-.27 3.13.28 4.57a20 20 0 011.06 2.15c.16.63 0 1.31.24 1.92a3.07 3.07 0 002.6 1.78c1.1.16 2.23 0 3.31.28 1.78.39 3.36 1.74 5.1 2l-.65 9.44-25.82-1.16-.6-28 .1-.07a1.78 1.78 0 00.46-.82c.69-2.37-1.11-5.4.63-7.15.85-.85 2.21-.94 3.13-1.71 2-1.63.8-5 2.21-7.13.72-1.08 2-1.64 3-2.48a8.28 8.28 0 002.66-5.83 19.74 19.74 0 00-.93-6.49c-.47-1.68-1-3.46-.49-5.13.57-1.86 2.34-3.16 3-5 1-3-1.28-6.05-3.43-8.4-3.33-3.64-5.86-5-10.65-5.59-1.58-.21-3-.92-4.58-1.1-3-.33-2.59.55-3.54 2.68-.79 1.77-3.87.81-5.09 2.31a3 3 0 00-.07 3 11.12 11.12 0 011.14 2.9c.18 1.5-.69 2.92-1 4.41a5.7 5.7 0 002.93 5.89 8.74 8.74 0 00-1.16 10.65 16.47 16.47 0 012.15 3.34c1 3-1.49 6.75.29 9.42.33.5.8.91 1.14 1.4 1.34 2 .47 4.65 1 7a5.87 5.87 0 004.39 4.19l.93 27.67-22.17-1V483.4c1.59-.43 2.8-1.87 4.35-2.56 1.79-.79 3.84-.5 5.8-.64s4.17-1 4.63-2.93a14.48 14.48 0 000-2.71c0-.91.51-1.93 1.4-2.09a15 15 0 00-1.25-3.17c-1.14-2.88-.44-6.27-1.77-9.07a13.58 13.58 0 00-3.85-4.28l-2.27-1.9c-2.82-2.36-5.71-4.75-9.13-6.12-.91-.36-1.85-.64-2.78-.92-.64.35-.66 1.3-.45 2a3.5 3.5 0 01.29 2.26 2.41 2.41 0 01-1.67 1.19 24.24 24.24 0 00-3.07.87 3.15 3.15 0 00-2 2.31 5.38 5.38 0 00-3.63.62c-1 .75-1.15 2.64 0 3.09a5.93 5.93 0 00-1.34 7.09c.82 1.52 2.32 2.69 2.71 4.37.35 1.49-.27 3.13.28 4.57a20 20 0 011.06 2.15c.16.63 0 1.31.24 1.92a3.07 3.07 0 002.6 1.78c1.1.16 2.23 0 3.31.28a16.86 16.86 0 013.23 1.36l-.88 12.38-15.23-.68v-26l-1.19-16.09 10.13-15.5-10.13 13.11.36-9.41 1 .27c.74.2 1.69.34 2.14-.29s.05-1.82.74-2.26a1.5 1.5 0 01.91-.14l3.28.18c1.26-1.69-1.77-3.7-1.56-5.8.14-1.39 1.64-2.19 3-2.58s2.88-.69 3.66-1.85c1.17-1.72-.05-4.17.71-6.1a13.06 13.06 0 011.64-2.38 2.5 2.5 0 00.34-2.71 3.56 3.56 0 00-1.6-1.05 11.46 11.46 0 01-6-6.78 2.19 2.19 0 01-.06-1.61c.36-.73 1.31-.9 2-1.26 2.33-1.18 2.38-4.57 1.32-7a7.42 7.42 0 00-2.74-3.43 4.08 4.08 0 00-4.23-.15 11.81 11.81 0 00-1.74 1.65 7.35 7.35 0 01-5.44 2c-1.5-.08-3.31-1.31-2.74-2.71s2.71-1 4-1.87a3.65 3.65 0 001.36-2.94c.19-3.3-1.54-6.6-.78-9.81a12.37 12.37 0 00.46-2c.11-1.61-1-3-2.2-4.12a14.92 14.92 0 01-3.39-3.42c-1-1.84-1.08-4.11-3.36-4.88a9.63 9.63 0 00-6 .57c-1.72.85-2 1.73-1.54 3.5.52 1.94 1.31 3.93-2 3.31-1.22-.22-2.75-.5-3.45.52-.55.81-.16 1.89-.06 2.87s-.63 2.26-1.54 1.9c-.05 1.29 2.13 1.3 2.8 2.41a1.78 1.78 0 01-.83 2.29 5.16 5.16 0 01-2.64.45 15.05 15.05 0 01-1.57-2.21c-.58-.7-1.79-1.08-2.33-.35a2 2 0 00-.27 1.09l-.24 4.77a3.63 3.63 0 00.06 1.14 6.1 6.1 0 00.51 1.08 4.61 4.61 0 01-.74 5.07l1.34.59c-.52 1.26-2.53.39-3.75 1-1 .46-1.19 1.7-1.25 2.77a19.43 19.43 0 00.45 5.55c.45 1.86 1.08 4.24-.49 5.35a6.46 6.46 0 01-2.06.7 2.07 2.07 0 00-1.6 1.33c-.16.71.75 1.51 1.3 1l-.46 2.78a3.36 3.36 0 001.83.16c.38 1.8-1.53 3.14-3.07 4.14s-3.11 3-2 4.45c.4.51 1.07.8 1.34 1.39a4.2 4.2 0 01.15 1.58c.13 2.54 3.15 4.2 3.33 6.74 2.39.27 3.84-2.41 5.37-4.27a.93.93 0 01.63-.42 1 1 0 01.59.29l1.92 1.56a9.54 9.54 0 00.21-3.9 17.72 17.72 0 012.77.12l-.41 5.56v29.8l1.08 30.88c-15 2.78-50.38 8.34-69.32 2.79a143 143 0 00-33.26-5.34l-8-65.33a8 8 0 004.06-4c.65-1.26 1.27-2.75 2.62-3.21a5.19 5.19 0 013 .3 19 19 0 0012.52-.28c7.5-3.17 10.79-11.8 13.3-19.54.84-2.59 1.46-5.94-.7-7.58-1.2-.91-3-1-3.93-2.15a6.31 6.31 0 01-.92-3.16 12 12 0 00-10.85-9.86c-2.51-6.35-8.48-10.84-14.9-13.16a50.28 50.28 0 00-20-2.94c-.69 7.38-13.31 16.32.24 19.62a7.62 7.62 0 00-6.76 6 7.45 7.45 0 004.6 8l-4.81 11.87a10 10 0 00-1 3.68c0 2.47 1.77 4.53 3.44 6.35 3.35 3.64 6.84 7.37 11.35 9.39l6.79 66c-1.75.06-2.72.14-2.72.14s-2 .5-5.53 1.28l-1.42-10.35c2.85-4.31 1.65-10.55-2-14.29a7 7 0 00-3.8-2.25c-3.22-.5-5.86 2.37-7.84 5l.28-.16a5.26 5.26 0 00-1.14 3.18c0 2.12 1 4.1 2 6a4 4 0 001.7 2c1.53.68 3.68-.61 4.86.59a1.72 1.72 0 01.12.16l1.78 11.39c-4.21.89-9.4 1.93-15.16 3l-4.77-31.82.42.18c2.19.94 5 1.21 6.77-.36a15.36 15.36 0 002-2.77c1.86-2.6 5-4 7.24-6.23s3.54-6.32 1.16-8.46a5.8 5.8 0 01-1.33-1.25 3.54 3.54 0 01-.28-1.85 23.41 23.41 0 00-1-7 9 9 0 00-2.51-4.43 4.14 4.14 0 00-4.77-.61c.35-.23-5.63-7.84-7.6-7.69-1.52.12-4.59 4.57-6.65 5.78-2.3 1.35-13.69 3.68-7.15 7.33-1.53 2.71-6.44 5.68-5.37 9.33.38 1.31 1.53 2.25 2.12 3.48 1.25 2.6-.25 5.59-1 8.36s-.06 6.74 2.81 7c-1.72.09-2.63 2.35-2 3.94s2.3 2.53 3.89 3.17a15.7 15.7 0 014.62 2.25l2-3.31 4.19 26.13c-9.43 1.52-19.82 2.87-29.7 3.47 1.5-5.38-2-37.07-5.35-63.59 4.64 1.53 6.36-7.56 11.25-8.25 1.74-.25 3.43.7 5.18.82 4 .28 7.07-3.73 7.58-7.66s-.78-7.84-1.47-11.74-.66-8.34 2-11.3c4.56.76 8.21-4.63 7.58-9.21s-4-8.26-7.16-11.61l-12.15-13.11c1 1-12.31 5.84-13.41 6.05a48.72 48.72 0 01-15 .3c-3.23-.41-6.27-2.24-9.24-.06-3.23 2.36-3.46 7.48.66 8.86-.59 3.64-4.31 5.74-4.91 9.39-.91 5.61 7.3 10.58 4.76 15.66a20.83 20.83 0 00-11 7.59l-8.46 1.56a3.81 3.81 0 00-2 .75c-1.4 1.28-.23 3.59 1.07 5a39.08 39.08 0 0022.32 11.82 13.8 13.8 0 014.94 1.3c.83.49 1.57 1.19 2.37 1.7v65l6.4.84-3.9-65.2c2.61-.29 5-3.25 7.6-2.52a4 4 0 011.63 1c0 29.93-1.59 66.81-1.59 66.81-2.9 0-5.69-.1-8.35-.3-9.59-.74-19.75-1-29.2-1.06l1.07-8.88a17.08 17.08 0 00-.56-6.83l-2-6.78h1.76c3 3.58 2.68 22.35 2.68 22.35h1.79v-19.1l.6-8.94s4.77-10.13 6.56-2.38 6.56 4.17 6.56 4.17c1.79-4.77-1.79-11.32-1.79-11.32a22.72 22.72 0 00.11-6.22c1.84.11 9.27 0 10.32-7.78 0 0-6.56 6.56-8.34 5.36 0 0 4.77-4.17 4.17-5.36s-7.15 1.79-7.15 1.79v1.79l-4.77-1.19s-10.13-5.36-12.52-6c0 0 6 7.15 11.32 7.75l.82 2a26.84 26.84 0 00-4.69-1.75c-2.38-.6 1.79 3 1.79 3h-1.79s-4.65-2.34-12.36 1.23-6.56 0-13.11 0-8.34 6.56-8.34 6.56c-1.55 6.26 4.45 16.44 4.45 16.44l-.3 20.28 3.28-.61-.6-21.46h1.79l3.58 8.34-1.34 13.73c-12.72.3-21.62.88-21.62.88v7.75h401.7v-11.38l-16-.52-2.33-27.52a2.33 2.33 0 002.07.06zm-360.72 24.7l.2-1.09a21.11 21.11 0 00-3.18-15.6h13.23l2.24 9.54-1.47 12.95c-3.37 0-6.63 0-9.71.09zm259.85-41.72l-2.06-14.73 1.6.44zm-8.73-22.53a6.33 6.33 0 002.14 3.52 3 3 0 00-.78 2.85l3.61 1 2.56 17 1.19 13.11-1.55 25.24-9.78-.44v-61.2a3.46 3.46 0 002.61-1.08zm-10.94 32.67v-35.25a17.75 17.75 0 013.21.84 6.05 6.05 0 011.72.89c.13.1.25.21.36.32l.07 2.2-1.19 28.61v32.44l-2.56.5z" />
      </g>
      <path
        d="M374.03 241.66c4.39.32 8.91.71 14.49.7 5 0 9.15-.34 13.73-.52 9.37-.37 20.19-.12 30.28-.26 6.5-.09 12.94-.34 19.41-.24 4.43.07 8.35.3 12.59.44a122.29 122.29 0 0012.71-.13l4.83 2.17a6.91 6.91 0 002.44.58 41.87 41.87 0 006.06.11c.82.78-5.9 1.55-14.27 1.65-5.63.07-11.36-.14-17-.05-6.43.1-11.41.56-17.32.82-5.37.23-11.6.29-17.37.16-6.6-.15-12.3-.52-18.55-.77-15.1-.59-33-.4-47.47-1.11-1.18-.06-2.39-.13-3-.24-1.13-.19-.1-.43.14-.64.45-.41-2-.79-3.58-1.18s-2.07-.89 1.34-1.15c7.55-.59 10.71-1.05 20.54-.34zM567.72 331.65c4.39.32 8.91.71 14.49.7 5 0 9.15-.34 13.73-.52 9.37-.37 20.19-.12 30.28-.26 6.5-.09 12.94-.34 19.41-.24 4.43.07 8.35.3 12.59.44a122.29 122.29 0 0012.71-.13l4.83 2.17a6.91 6.91 0 002.44.58 41.87 41.87 0 006.06.11c.82.78-5.9 1.55-14.27 1.65-5.63.07-11.36-.14-17-.05-6.43.1-11.41.56-17.32.82-5.37.23-11.6.29-17.37.16-6.6-.15-12.3-.52-18.55-.77-15.1-.59-33-.4-47.47-1.11-1.18-.06-2.39-.13-3-.24-1.13-.19-.1-.43.14-.64.45-.41-2-.79-3.58-1.18s-2.07-.89 1.34-1.15c7.55-.59 10.72-1.04 20.54-.34zM621.76 256.93a39.42 39.42 0 006.89.75c2.37 0 4.35-.36 6.53-.55 4.45-.4 9.6-.13 14.39-.28 3.09-.09 6.15-.36 9.22-.25 2.11.08 4 .32 6 .47a26 26 0 006-.14l2.3 2.31a2.07 2.07 0 001.16.62 8.92 8.92 0 002.88.12c.39.83-2.8 1.66-6.78 1.76-2.68.07-5.4-.15-8.06-.05-3.06.11-5.42.6-8.23.88a58.22 58.22 0 01-8.25.17c-3.14-.16-5.84-.56-8.82-.82-7.18-.63-15.69-.42-22.56-1.19a7.13 7.13 0 01-1.44-.25c-.53-.21 0-.46.06-.69.21-.44-.95-.85-1.7-1.26s-1-.95.64-1.23c3.6-.64 5.1-1.13 9.77-.37zM443.56 317.09c2.09 0 4.24.11 6.89.11 2.37 0 4.35-.05 6.53-.08 4.45-.06 9.6 0 14.39 0 3.09 0 6.15-.05 9.22 0 2.11 0 4 0 6 .07s4.51 0 6 0l2.3.33a9.32 9.32 0 001.16.09h2.88c.39.12-2.8.24-6.78.25h-8.06c-3.06 0-5.42.09-8.23.13h-8.25c-3.14 0-5.84-.08-8.82-.12-7.18-.09-15.69-.06-22.56-.17h-1.44c-.53 0 0-.07.06-.1a7.61 7.61 0 00-1.7-.18c-.76-.06-1-.14.64-.18 3.61-.18 5.1-.25 9.77-.15zM531.91 235.44c1.09 0 2.22.11 3.61.11s2.28-.05 3.42-.08c2.33-.06 5 0 7.54 0 1.62 0 3.22-.05 4.83 0 1.1 0 2.08 0 3.14.07s2.37 0 3.16 0l1.2.33a2.64 2.64 0 00.61.09h1.51c.2.12-1.47.24-3.56.25h-4.22c-1.6 0-2.84.09-4.31.13s-2.89 0-4.33 0c-1.64 0-3.06-.08-4.62-.12-3.76-.09-8.22-.06-11.83-.17h-.75c-.28 0 0-.07 0-.1s-.5-.12-.89-.18-.52-.14.33-.18a42.46 42.46 0 015.16-.15z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M688.66 424.4c-4.94-14.6-13.93-42.64-13.53-52.35.28-6.72-4.93-16.14-10.18-23.85l3-8.2-.35-.63.35-1s-4-6.93-4.52-11.31a3.53 3.53 0 01.08-.44c.17-.56.11-.85-.11-1a3.6 3.6 0 01.11-.65c1.11-3.74-7.78 4.27-7.78 4.27l.43 1.22-.43.38 1 2.72c-1.94-1.08-4.19-2.31-6.66-3.61a10.63 10.63 0 001.27-6 17.38 17.38 0 00-2.25-9c-2.42-4.49-6.06-8.32-8.25-12.92a6.75 6.75 0 01-.43-1.11 1.77 1.77 0 01.16-.32c.41-.66 1.22-1 1.82-1.48a4.72 4.72 0 001.27-4.24 10.68 10.68 0 00-.3-3.43 63.14 63.14 0 00-7.7-18.91c-1.71-2.8-3.67-5.54-4.5-8.68-1-3.64-.33-7.52-1.18-11.18-.92-4-3.48-7.37-6-10.64l-19.68-25.73a14 14 0 00-3.15-3.3c-3.7-2.49-8.21-1-11.94.57-4.34 1.8-6.3-.18-10.8 0-2.31.1-4.73 1.25-5.57 3.32-.57 1.4-.35 3-.68 4.46-.73 3.24-3.84 5.23-6.31 7.65a32.48 32.48 0 00-11.52 24.7 32 32 0 00.86 7.34c-3.74 5.74-7.45 11.43-7.12 18a16 16 0 000 1.86c.08 1.26.32 2.53.41 3.78a6.94 6.94 0 01-.2 1.27c-1.13 4.18-6.05 6-10.09 7.92a39.57 39.57 0 00-21.55 26.8c-3.41 1.61-6.58 3.12-9.27 4.44l.67-.59-7.35-3.74s-3.33 11.22-7.78 13.89a2.29 2.29 0 00-.87 2.71c-.69 2.29 2.32 6.57 5 9.77-3 5.81-5.69 12-6.33 16.89-1.67 12.82-8.34 32.58-8.34 32.58s-12.78 20.29 0 42.19 33.9 9.08 33.9 9.08-1.75 10.07-3.6 20c-2 9.37-3.5 17.29-3.5 17.29-2 10.16-3.47 27.92-3.47 27.92s-6.11 74.77-9.45 79.58c-1.17 1.69 7.12 6.73 22.81 11.46q.41 1.35.85 2.84c3.55 12.27 8 31.63 6.63 47.65 0 0 1.11 8.55-2.22 25.64s-3.89 66.22 3.89 89.19v21.54c-1.35.76-2.68 3.28-1.39 11l1.67 7.48s-5.56-10.15-12.78 8 18.9 32 31.12 33.11a30.63 30.63 0 007.56-.16 6.36 6.36 0 005.01-8.44l-1-2.62s5-16-.56-22.43c0 0 7.23-21.9 3.33-24.57 0 0-.91-.12-2.65 1.37-.07-.36-.15-.82-.24-1.39-.77-4.59-2.19-15.31.39-20.27 3.33-6.41 6.11-42.19 6.11-42.19l1.11-40.06 6.11-22.45s3.89-14.42 2.22-26.17c-1-7.18.66-18 2.12-25.24.19-.94.37-1.82.55-2.63 5.35.25 10.91.36 16.68.3.18.83.36 1.72.55 2.67h.28c1.44 7.28 3.05 17.83 2.05 24.9-1.67 11.75 2.22 26.17 2.22 26.17l6.11 22.43 1.11 40.06s2.78 35.78 6.11 42.19c2.62 5 1.12 16 .36 20.49l-.08.46c-.09.5-.16.88-.21 1.13-2.05-1.93-3.12-1.79-3.12-1.79-3.89 2.67 3.33 24.57 3.33 24.57-5.56 6.41-.56 22.43-.56 22.43l-1 2.62a6.36 6.36 0 005.09 8.44 30.63 30.63 0 007.56.16c12.23-1.07 38.35-15 31.12-33.11s-12.78-8-12.78-8l1.67-7.48c1.11-6.68.28-9.48-.83-10.61v-22c7.78-23 7.23-72.1 3.89-89.19s-2.22-25.64-2.22-25.64c-1.25-14.42 2.25-31.54 5.55-43.76.27-1 .55-2 .81-2.93q9-1.72 18.37-4s-6.67-37.92 0-50.2c5.35-9.85-13.24-65.69-20.82-87.45l-1.88-8.21c4.19 1.56 19.26 6 31.1-6.33 3.2-3.32 5.69-6.07 7.63-8.34a19.39 19.39 0 003.68-18.93zm-43.44 33.38l-.1-.28.22.1z"
        transform="translate(-56.6 -29.27)"
        fill="url(#ArtLover_svg__a)"
      />
      <path
        d="M520.07 587.42c-1.4 7.27-3 18-2 25.16 1.6 11.71-2.13 26.09-2.13 26.09l-5.86 22.36-1.06 39.93s-2.66 35.67-5.86 42.06c-2.48 4.95-1.12 15.64-.38 20.21.21 1.34.38 2.15.38 2.15-4.26 31.94-29.28 2.13-29.28 2.13v-27.16c-7.45-22.89-6.92-71.87-3.73-88.91s2.13-25.55 2.13-25.55c1.33-16-3-35.27-6.35-47.5-2-7.34-3.76-12.13-3.76-12.13l59.63 13.31s-.84 3.23-1.73 7.85z"
        fill="#636e7e"
      />
      <path
        d="M503.13 765.37c-4.26 31.94-29.28 2.13-29.28 2.13v-7.28a2.28 2.28 0 011.86-.17c-1.25 4.1.48 7.18 3.35 9.47a14.69 14.69 0 0021-3.19 20.64 20.64 0 012.65-3.11c.25 1.34.42 2.15.42 2.15zM583.52 760.4v7.1s-25 29.81-29.28-2.13c0 0 .14-.72.35-1.93a21.89 21.89 0 012.41 2.89 14.69 14.69 0 0021 3.19c2.86-2.29 4.59-5.37 3.35-9.47a2.27 2.27 0 012.17.35z"
        opacity={0.1}
      />
      <path
        d="M475.71 761.65s-5.32-2.13-3.19 11.18l1.6 7.45s-5.32-10.12-12.24 8 18.1 31.94 29.81 33a28.21 28.21 0 007.24-.16 6.35 6.35 0 004.87-8.39l-.93-2.61s4.79-16-.53-22.36c0 0 6.92-21.83 3.19-24.49 0 0-1.87-.27-5.42 4.69a14.69 14.69 0 01-21 3.19c-2.91-2.32-4.65-5.42-3.4-9.5z"
        fill="#63667e"
      />
      <path
        d="M590.4 582.27c-3.16 12.18-6.51 29.25-5.31 43.62 0 0-1.06 8.52 2.13 25.55s3.73 66-3.73 88.91v27.15s-25 29.81-29.28-2.13c0 0 .11-.54.27-1.47l.08-.46c.72-4.45 2.17-15.4-.35-20.43-3.19-6.39-5.86-42.06-5.86-42.06l-1.06-39.93-5.86-22.36s-3.73-14.37-2.13-26.09c1-7-.59-17.56-2-24.82-.92-4.81-1.76-8.19-1.76-8.19l59.63-13.31s-2.28 6.54-4.77 16.02z"
        fill="#636e7e"
      />
      <path
        d="M583.52 760.93v6.57s-25 29.81-29.28-2.13c0 0 .11-.54.27-1.47a21.78 21.78 0 012.49 3 14.69 14.69 0 0021 3.19c2.86-2.29 4.59-5.37 3.35-9.47a2.27 2.27 0 012.17.31z"
        opacity={0.1}
      />
      <path
        d="M581.12 761.65s5.32-2.13 3.19 11.18l-1.6 7.45s5.32-10.12 12.24 8-18.1 31.94-29.81 33a28.21 28.21 0 01-7.24-.16 6.35 6.35 0 01-4.87-8.41l.93-2.61s-4.79-16 .53-22.36c0 0-6.92-21.83-3.19-24.49 0 0 1.87-.27 5.42 4.69a14.69 14.69 0 0021 3.19c2.91-2.3 4.68-5.4 3.4-9.48z"
        fill="#63667e"
      />
      <path
        d="M462.14 566.27l59.63 13.31s-.8 3.22-1.69 7.85c-22.51-1.15-41-5-54.17-9-2.05-7.37-3.77-12.16-3.77-12.16zM594.96 566.27s-2.34 6.52-4.8 16a295.4 295.4 0 01-53.06 5.46c-.92-4.81-1.76-8.19-1.76-8.19z"
        opacity={0.1}
      />
      <path
        d="M454.4 301.68s-14.91 21.83-16.5 34.6-8 32.47-8 32.47-12.24 20.23 0 42.06 32.5 9.06 32.5 9.06-4.26 25.55-6.39 35.14-3.73 29.81-3.73 29.81-5.86 74.53-9.05 79.32 67.08 36.73 165.57 11.18c0 0-6.39-37.8 0-50s-22.89-95.83-22.89-95.83 17.57 8.52 30.88-5.86c3.06-3.31 5.45-6.05 7.31-8.32a19.94 19.94 0 003.52-18.82c-4.73-14.55-13.35-42.51-13-52.18.53-13.31-19.7-37.27-19.7-37.27z"
        fill="#e29d9d"
      />
      <path
        d="M527.09 282.43a69 69 0 00-50 3.72c-14.12 6.73-29.27 14.14-31.21 15.8-3.73 3.19 0 5.86 0 5.86l42.06 4.79h83.58l31.94-2.66s-29.28-18.63-44.19-19.7c-7.06-.51-20.26-4.14-32.18-7.81z"
        fill="#f1c0c0"
      />
      <path
        d="M584.85 429.45l-3.73-16.5a160.81 160.81 0 015.86-30.88c4.79-16-1.06-38.33-1.06-38.33M462.4 343.73s-3.19 12.24 0 19.17 0 21.83 0 21.83-1.06 24.49 1.6 32.47M488.49 363.43s-6.92 18.1-10.12 22.36-6.92 22.36-10.65 26.09-11.59 47.24-11.59 47.24 21.7 16.65 32.35 30.49 67.61-3.73 67.61-3.73 4.26-20.23 11.18-23.42c2.49-1.15 2.77-2.57 2.12-3.93a61.94 61.94 0 01-6.07-22.07c-1.61-20.26-6.61-52.71-22.13-67.17z"
        opacity={0.1}
      />
      <path
        d="M487.96 361.31s-6.92 18.1-10.12 22.36-6.92 22.36-10.65 26.09S455.6 457 455.6 457s21.7 16.65 32.35 30.49 67.62-3.76 67.62-3.76 4.26-20.23 11.18-23.42c2.49-1.15 2.77-2.57 2.12-3.93a61.94 61.94 0 01-6.07-22.07c-1.61-20.26-6.61-52.71-22.13-67.17z"
        fill={color}
      />
      <circle cx={510.04} cy={468.58} r={9.58} opacity={0.1} />
      <path
        d="M501.8 366.1s-13.31 16-5.32 28.75l3.73 1.6s2.13-27.68 4.79-29.28zM513.51 366.1s-3.73 29.28-1.06 31.94c0 0 10.12 2.13 11.18-1.6 0 0-5.86-25-4.26-28.22zM526.29 368.49s4.26 21.83 8 18.1-2.66-18.1-2.66-18.1z"
        opacity={0.1}
      />
      <path
        d="M494.88 369.82s31.94 6.39 49 1.06 60.7-49.35 60.7-49.35l3.19-9.22s-5.37-9.58-4.29-13.29-7.45 4.26-7.45 4.26l1.47 4.36s-137.76 7.88-151.6-1.17l8.64-8-7-3.73s-3.19 11.18-7.45 13.84 7.45 14.91 7.45 14.91 31.37 44.24 47.34 46.33z"
        opacity={0.1}
      />
      <path
        d="M494.88 368.23s31.94 6.39 49 1.06 60.7-49.35 60.7-49.35l3.19-9.22s-5.32-9.58-4.26-13.31-7.45 4.26-7.45 4.26l1.47 4.36s-137.76 7.88-151.6-1.17l8.64-8-7-3.73s-3.19 11.18-7.45 13.84 7.45 14.91 7.45 14.91 31.34 44.22 47.31 46.35z"
        fill="#e29d9d"
      />
      <path
        d="M450.16 313.39s5.86-2.13 20.76 2.13 33 0 33 0 80.39-1.6 86.78-.53 17-4.26 17-4.26M562.49 374.08s9.05 61.75 24 79.86c-.09 0-19.21-64.42-24-79.86z"
        opacity={0.1}
      />
      <circle cx={531.87} cy={226.35} r={33.01} fill="#765656" />
      <path
        d="M521.93 187.95c-2.21.1-4.53 1.25-5.34 3.31-.55 1.4-.33 3-.65 4.44-1 4.39-6.12 6.49-8.22 10.46s-.8 8.48-1.11 12.8c-.88 12.52-14.55 21.93-13.73 34.46.14 2.22.75 4.48.19 6.63-1.08 4.17-5.8 6-9.66 7.9a39.1 39.1 0 00-21.11 29.42c-.4 3-.41 6.29 1 9s4.52 4.79 7.51 4.1c4.46-1 6-6.87 10-9.12 1.81 2.72 1.1 6.37 2 9.51 1 3.33 4.52 6.05 7.9 5.21s4.94-6 2.09-8c3.72.45 6.17 4.24 6.95 7.91s.43 7.51 1.3 11.16a17.61 17.61 0 0018 13 10.07 10.07 0 013.5 0 9.63 9.63 0 013 1.76 20.39 20.39 0 0014.47 3.7c.28-1.94 2.17-3.32 4.1-3.66a14.15 14.15 0 015.8.61l8.9 2.21c2.59.64 5.93 1 7.39-1.21 1.08-1.66.47-3.92 1.23-5.75 1.24-3 5.29-3.42 8.53-3.13s7.1.55 9.11-2 .66-6.66-1.19-9.54-4.17-6-3.52-9.37c.91-4.74 6.85-6.47 9.68-10.37 3-4.08 2-9.87-.34-14.35s-5.8-8.3-7.91-12.88a3.3 3.3 0 01-.26-3c.4-.65 1.17-1 1.74-1.47 1.61-1.42 1.39-4 .93-6.05a64.41 64.41 0 00-7.45-18.91c-1.64-2.79-3.51-5.52-4.31-8.65-.92-3.63-.32-7.49-1.13-11.15-.88-4-3.34-7.35-5.73-10.61l-18.85-25.65a13.78 13.78 0 00-3-3.29c-3.55-2.48-7.86-1-11.43.56-4.19 1.79-6.06-.21-10.38.01z"
        opacity={0.1}
      />
      <path
        d="M521.93 186.35c-2.21.1-4.53 1.25-5.34 3.31-.55 1.4-.33 3-.65 4.44-1 4.39-6.12 6.49-8.22 10.46s-.8 8.48-1.11 12.8c-.88 12.52-14.55 21.93-13.73 34.46.14 2.22.75 4.48.19 6.63-1.08 4.17-5.8 6-9.66 7.9a39.1 39.1 0 00-21.11 29.38c-.4 3-.41 6.29 1 9s4.52 4.79 7.51 4.1c4.46-1 6-6.87 10-9.12 1.81 2.72 1.1 6.37 2 9.51 1 3.33 4.52 6.05 7.9 5.21s4.94-6 2.09-8c3.72.45 6.17 4.24 6.95 7.91s.43 7.51 1.3 11.16a17.61 17.61 0 0018 13 10.07 10.07 0 013.5 0 9.63 9.63 0 013 1.76 20.39 20.39 0 0014.47 3.7c.28-1.94 2.17-3.32 4.1-3.66a14.15 14.15 0 015.8.61l8.9 2.21c2.59.64 5.93 1 7.39-1.21 1.08-1.66.47-3.92 1.23-5.75 1.24-3 5.29-3.42 8.53-3.13s7.1.55 9.11-2 .66-6.66-1.19-9.54-4.17-6-3.52-9.37c.91-4.74 6.85-6.47 9.68-10.37 3-4.08 2-9.87-.34-14.35s-5.8-8.3-7.91-12.88a3.3 3.3 0 01-.26-3c.4-.65 1.17-1 1.74-1.47 1.61-1.42 1.39-4 .93-6.05a64.41 64.41 0 00-7.37-18.85c-1.64-2.79-3.51-5.52-4.31-8.65-.92-3.63-.32-7.49-1.13-11.15-.88-4-3.34-7.35-5.73-10.61l-18.85-25.65a13.78 13.78 0 00-3-3.29c-3.55-2.48-7.86-1-11.43.56-4.27 1.78-6.14-.2-10.46-.01z"
        fill="#896363"
      />
      <path
        d="M504.73 264.15s-14.37 2.13-19.7 14.91-12.24 15.44-12.24 15.44M523.4 201.86s8 18.1.53 30.35-3.19 34.6-3.19 34.6M517.5 288.64s-8-3.19-4.79 10.12-1.06 22.89-1.06 22.89M540.93 286.51s-14.37-.54-9.32 18.1-1.33 27.69-1.33 27.69M540.93 198.13s13.84 14.37 12.78 23.42-.53 41 0 42.59M559.03 288.1s9.58 10.12 8 18.63 0 25.55 0 25.55M569.14 242.85s6.92 12.78 5.32 24"
        opacity={0.1}
      />
      <path
        d="M475.29 391.86s22 44.24 78.42 4.32"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={2}
        opacity={0.1}
      />
      <path fill="#636e7e" d="M568.61 456.33l18.1-27.68 2.15 9.46-20 20.42" />
      <path d="M523.4 507.44s17 41 0 76.11" opacity={0.1} />
      <path fill="#a1a3b2" d="M680 574.46h57v16h-57z" />
    </svg>
  );
};

SvgArtLover.propTypes = {
  color: PropTypes.string
};
SvgArtLover.defaultProps = {
  color: "primary"
};
export default SvgArtLover;
