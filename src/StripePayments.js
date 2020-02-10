import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgStripePayments = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1130 852.62"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="StripePayments_svg__a"
          x1={675.66}
          y1={876.2}
          x2={675.66}
          y2={479.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M656.54 163.66c-72.44-2.57-141.44-26.53-207.32-52.74S318.07 55.66 247.37 41.77c-45.48-8.93-97.49-10.19-134.13 14.78-35.27 24-46.66 65.54-52.78 104-4.61 29-7.32 59.45 5.3 86.57 8.77 18.83 24.34 34.65 35.11 52.68 37.45 62.75 11 140.13-29.62 201.4-19 28.74-41.13 56.16-55.82 86.75s-21.49 65.65-8.64 96.86c12.75 30.94 43.11 54.17 76 70.51 66.81 33.2 145.54 42.7 222.31 48.08 169.94 11.91 340.79 6.75 511.18 1.59 63.06-1.92 126.39-3.85 188.43-13.84 34.44-5.55 70-14.35 95-35.61 31.75-27 39.62-72.67 18.34-106.5-35.65-56.73-134.32-70.81-159.26-131.73-13.73-33.52.37-70.86 20.32-102 42.8-66.69 114.54-125.2 118.32-201.44 2.6-52.36-31.89-104.8-85.21-129.57-55.9-26-133.4-22.7-174.64 20.28-42.46 44.33-117.08 61.36-181.04 59.08z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M460.05 159.84c-1.49-5.11 2.13-8.3 9.07-10.33a76.1 76.1 0 0135-1.1l-9-30.8a89.93 89.93 0 00-34.26 3.46c-26.6 7.76-40.24 26.82-33.47 50 10.52 36.24 58.61 15.89 63.19 31.48 1.76 6-2.9 9.53-10.24 11.67-10.88 3.18-26.08 2.78-38.85 0l9.11 31.19a94.55 94.55 0 0038-3c27.26-8 42.06-26.93 35.21-50.39-11.53-39-59.43-17.49-63.72-32.17zm70.58-87.6l-30 16.15 30.51 105c5.67 19.4 24.38 29.44 43.78 23.77 10.75-3.13 18-7.39 21.67-11l-7.76-26.6c-3.7 2.93-22.65 15-28.31-4.4L547 128.64l24.9-7.27-8.15-27.92-24.9 7.27zm76.66 19l-4.93-9.09-28.31 8.27 33.48 114.69 32.77-9.57-22.69-77.72c4.78-12.35 18.43-14.34 22.91-14.08l-8.8-30.15c-4.65-.35-20.83 1.25-24.43 17.66zm32.42-20l32.9-9.6 33.48 114.67-32.9 9.61-33.48-114.61zm-2.9-10l30.83-16.68-7.77-26.55L629 34.56l7.81 26.75zm103.56-21.79a38.55 38.55 0 00-22.7 17.73l-4.08-7.63-28.83 8.42 44.61 152.81 30.74-16.47-10.69-37.13c5.71 2 14.07 4.85 25.6 1.49 23.46-6.85 39.32-32 27.19-73.51-11.23-38-38.9-52.36-61.84-45.67zm18.5 92.6c-7.73 2.26-13.12.85-17.26-1.64l-14.33-48.59c2.3-4.79 6.25-8.79 13.73-11 11.92-3.49 24.08 7.47 29.09 24.64 5.13 17.56.83 33-11.23 36.56zm147-75.74c-9.8-33.55-33.78-55.28-64.84-46.21s-42.34 41.09-32.62 74.38c11.52 39.42 39.59 52.83 71.59 43.5 15.6-4.55 26.36-11.54 33.82-19.12l-7.65-26.21c-7.61 7.06-17 12.8-30 16.58-12.71 3.71-25.28 2.55-31.24-12.5L909 68.02c-.5-1.7-2.23-8.59-3.14-11.74zm-68.38 6.45c-4.33-14.81 2.92-23.61 11.18-26 8-2.33 18.31 1.34 22.63 16.15z"
        opacity={0.1}
      />
      <path
        d="M460.05 151.84c-1.49-5.11 2.13-8.3 9.07-10.33a76.1 76.1 0 0135-1.1l-9-30.8a89.93 89.93 0 00-34.26 3.46c-26.6 7.76-40.24 26.82-33.47 50 10.52 36.24 58.61 15.89 63.19 31.48 1.76 6-2.9 9.53-10.24 11.67-10.88 3.18-26.08 2.78-38.85 0l9.11 31.19a94.55 94.55 0 0038-3c27.26-8 42.06-26.93 35.21-50.39-11.53-39-59.43-17.49-63.72-32.17zm70.58-87.6l-30 16.15 30.51 105c5.67 19.4 24.38 29.44 43.78 23.77 10.75-3.13 18-7.39 21.67-11l-7.76-26.6c-3.7 2.93-22.65 15-28.31-4.4L547 120.64l24.9-7.27-8.15-27.92-24.9 7.27zm76.66 19l-4.93-9.09-28.31 8.27 33.48 114.69 32.77-9.57-22.69-77.72c4.78-12.35 18.43-14.34 22.91-14.08l-8.8-30.15c-4.65-.35-20.83 1.25-24.43 17.66zm32.42-20l32.9-9.6 33.48 114.67-32.9 9.61-33.48-114.61zm-2.9-10l30.83-16.68-7.77-26.55L629 26.56l7.81 26.75zm103.56-21.79a38.55 38.55 0 00-22.7 17.73l-4.08-7.63-28.83 8.42 44.61 152.81 30.74-16.47-10.69-37.13c5.71 2 14.07 4.85 25.6 1.49 23.46-6.85 39.32-32 27.19-73.51-11.23-38-38.9-52.36-61.84-45.67zm18.5 92.6c-7.73 2.26-13.12.85-17.26-1.64l-14.33-48.59c2.3-4.79 6.25-8.79 13.73-11 11.92-3.49 24.08 7.47 29.09 24.64 5.13 17.56.83 33-11.23 36.56zm147-75.74c-9.8-33.55-33.78-55.28-64.84-46.21s-42.34 41.09-32.62 74.38c11.52 39.42 39.59 52.83 71.59 43.5 15.6-4.55 26.36-11.54 33.82-19.12l-7.65-26.21c-7.61 7.06-17 12.8-30 16.58-12.71 3.71-25.28 2.55-31.24-12.5L909 60.02c-.5-1.7-2.23-8.59-3.14-11.74zm-68.38 6.45c-4.33-14.81 2.92-23.61 11.18-26 8-2.33 18.31 1.34 22.63 16.15z"
        fill="#6772e5"
      />
      <ellipse
        cx={678.83}
        cy={838.73}
        rx={92.55}
        ry={13.88}
        fill={color}
        opacity={0.1}
      />
      <path
        fill="#d0d2d5"
        d="M644.47 813.69l-178.19-2.28.53-4.57 8.61-75.39h156.49l11.51 75.39.88 5.71.17 1.14z"
      />
      <path
        opacity={0.1}
        d="M644.3 812.55h-88.92l-89.1-1.14.53-4.57h176.61l.88 5.71z"
      />
      <path fill="#d0d2d5" d="M436.58 807.98h236.45v5.71H436.58z" />
      <path
        d="M898.62 278.65a14.87 14.87 0 00-14.8-14.95H223.5a14.88 14.88 0 00-14.8 14.95v400.26h689.92z"
        fill="#444053"
      />
      <path
        d="M208.7 674.91v46.88a14.8 14.8 0 0014.8 14.8h660.32a14.79 14.79 0 0014.8-14.8v-46.88z"
        fill="#d0d2d5"
      />
      <path fill="#fff" d="M237.26 288.83h636.23v359.81H237.26z" />
      <path
        d="M557.09 718.81a15.43 15.43 0 0012.13-5.89 15.28 15.28 0 001.2-1.77l-8.42-1.4 9.15.07a15.44 15.44 0 00.29-12.22l-12.27 6.37 11.32-8.32A15.42 15.42 0 10545 712.91a15.43 15.43 0 0012.09 5.9z"
        fill={color}
      />
      <path opacity={0.1} d="M572.51 736.59l71.09 71.39-10.91-71.39h-60.18z" />
      <path
        fill="#444053"
        opacity={0.1}
        d="M236.76 288.87h636.92v21.02H236.76z"
      />
      <rect
        x={240.41}
        y={292.53}
        width={18.28}
        height={12.79}
        rx={0.78}
        fill={color}
      />
      <rect
        x={457.9}
        y={292.53}
        width={191.9}
        height={12.79}
        rx={0.58}
        fill={color}
        opacity={0.3}
      />
      <path
        d="M644.1 300.24h-.47l-.17-.14a3.94 3.94 0 00.91-2.49 3.79 3.79 0 10-3.77 3.81 4 4 0 002.48-.91l.17.14v.47l2.93 2.93.87-.88zm-3.5 0a2.64 2.64 0 112.63-2.63 2.61 2.61 0 01-2.63 2.63z"
        fill="#444053"
      />
      <circle cx={864.54} cy={298.92} r={6.4} fill={color} />
      <path
        d="M701.09 390.05H409.48c-10.1 0-18.29 7.64-18.29 17.06v160.52c0 9.42 8.19 17.06 18.29 17.06h291.61c10.1 0 18.29-7.64 18.29-17.06V407.11c0-9.42-8.19-17.06-18.29-17.06z"
        opacity={0.1}
      />
      <rect
        x={402.34}
        y={380.91}
        width={306.08}
        height={194.64}
        rx={18.67}
        fill="#454b69"
      />
      <rect
        x={434.49}
        y={490.39}
        width={48.66}
        height={16.51}
        rx={4.8}
        fill={color}
        opacity={0.3}
      />
      <rect
        x={499.66}
        y={490.39}
        width={48.66}
        height={16.51}
        rx={4.8}
        fill={color}
        opacity={0.3}
      />
      <rect
        x={526.59}
        y={524.28}
        width={42.58}
        height={12.16}
        rx={4.8}
        fill={color}
        opacity={0.3}
      />
      <rect
        x={564.83}
        y={490.39}
        width={48.66}
        height={16.51}
        rx={4.8}
        fill={color}
        opacity={0.3}
      />
      <rect
        x={630}
        y={490.39}
        width={48.66}
        height={16.51}
        rx={4.8}
        fill={color}
        opacity={0.3}
      />
      <rect
        x={438.83}
        y={451.29}
        width={33.02}
        height={33.02}
        rx={2.95}
        fill={color}
      />
      <path
        d="M460.77 473.23h-10.42v-10.42h10.42zm-10-.43h9.56v-9.56h-9.56z"
        fill="#454b69"
      />
      <path
        fill="#454b69"
        d="M455.34 451.29h.43v11.73h-.43zM455.34 473.01h.43v11.3h-.43zM438.83 467.58h11.73v.43h-11.73zM460.56 467.58h11.3v.43h-11.3zM450.41 463.18l-3.41-3.39h-8.17v-.44h8.35l3.54 3.52-.31.31zM460.7 463.18l-.29-.32 3.97-3.51h7.47v.44h-7.3l-3.85 3.39zM447.19 477.24h-8.36v-.44h8.16l3.41-3.93.33.29-3.54 4.08zM471.85 477.24h-7.48l-3.97-4.07.31-.31 3.85 3.94h7.29v.44z"
      />
      <rect
        x={434.27}
        y={395.9}
        width={92.54}
        height={16.51}
        rx={4.1}
        fill={color}
      />
      <path
        d="M758.79 676.69c-.06-1.72-.27-3.44-.48-5.15-.77-6.42-1.56-12.84-2.81-19.17a20.32 20.32 0 00-1-3.62c-.45-1.11-1.07-2.13-1.54-3.23a.56.56 0 000-.12c.58-.28 1.15-.56 1.71-.86a8.57 8.57 0 001.16-.71 3.28 3.28 0 00.91-1c1-1.76-.12-4-.63-6-.54-2.15-.42-4.73-2-6.17-5.64-5-2.84-15.2-5.66-22.36-.5-1.25-1.07-2.48-1.5-3.76-.33-1-.56-2-.8-3q-3-12.5-6.32-24.89c-2.33-8.56-2.08-17.48-5-25.84a27.79 27.79 0 00-2.15-5 13.42 13.42 0 00-3.88-4.19c-4.26-2.94-8.55-5.45-13.55-6.52s-10.4-.9-15.5-.88a16.42 16.42 0 00-7.24-5.65l-.09-.26a17.91 17.91 0 01-.94-3.13 21.35 21.35 0 01-.25-3.2c0-1.15-.05-2.31-.08-3.46l.28-.27a19.36 19.36 0 001.84-2.26 15.83 15.83 0 001.4-2.39 22.2 22.2 0 001.14-2.93 33 33 0 001.23-6.21c.27-2.47.35-5 .42-7.47v-1.88-1.31a13.47 13.47 0 00-1.86-7.28c-1.81-2.7-4.91-4-7.9-5.08-6-2.08-12.59-3.45-18.52-1.22-4.71 1.78-8.47 5.66-13.12 7.63a5.77 5.77 0 01.29.55.59.59 0 010 .08c.08.18.15.35.21.53a6.57 6.57 0 01.33 1.25 7.4 7.4 0 010 2.44 8.34 8.34 0 01-4.48.66 14.24 14.24 0 002.82 5.12c.41.52.84 1 1.25 1.55l.63.78a16.22 16.22 0 012.59 4.19 8.16 8.16 0 01.49 1.87c.19 1.27.14 2.73.31 4a6.08 6.08 0 00.41 1.59 16.75 16.75 0 008.88 12.47 36.8 36.8 0 010 11.94c0 .22-.08.44-.13.66-2.72 3.43-5.33 7.05-8.68 9.73a31.59 31.59 0 01-4.87 3.14 13.37 13.37 0 01-3.21 1.33c-1.26.29-2.58.25-3.83.56a10 10 0 00-5.69 4.63 33.45 33.45 0 01-2.1 3.38c-.7.87-1.58 1.58-2.32 2.41-2.68 3-3.41 7.34-4 11.4a52.19 52.19 0 01-6.83 6.31 10 10 0 01-2.54 1.47c-2.36.79-4.95-.22-7-1.74s-3.65-3.52-5.63-5.08l-.52.77a4.16 4.16 0 01-.41-.47 10 10 0 01-1.65-3.82c-.72-3.69.64-7.64-.42-11.23-.39-1.3-1.33-2.64-2.63-2.61s-2.11 1.33-3.23 1.94c-1.8 1-4 .09-5.78-.9s-3.81-2.1-5.76-1.51a4.09 4.09 0 001.49 3.4 9.07 9.07 0 012.42 2.93 13.23 13.23 0 01.33 3.79c.2 2.92 2 5.43 3.74 7.71q3.24 4.15 6.78 8.06a2.5 2.5 0 01-1.26 1.09 2.65 2.65 0 000 1.45 5.88 5.88 0 00.38.95c.23.47.51.93.75 1.36l3.51 6.17.57 1c.24.42.48.82.73 1.23a22.64 22.64 0 002.93 4 12 12 0 001.84 1.58 9.54 9.54 0 001.37.82 8 8 0 002.12.73 6.62 6.62 0 001.1.14 7.37 7.37 0 001.15 0 15.33 15.33 0 003.37-.87c6.69-2.35 12.83-6.1 19.19-9.29a10.68 10.68 0 012.79-1.08 4.58 4.58 0 011-.08 3.67 3.67 0 011 .17 3.61 3.61 0 01.9.45 2.59 2.59 0 011.09 1.62c.19 1 .37 1.93.55 2.89s.38 1.92.58 2.88c.4 1.91.83 3.82 1.33 5.71.27 1 .53 2.06.79 3.1.64 2.54 1.27 5.1 1.85 7.66.18.8.35 1.61.51 2.41a37 37 0 01.64 4.31.38.38 0 010 .1c.1 1.26.11 2.51.12 3.77v3.95l.1 11.66c0 1.68-.9 2.73-1.61 4.24-.14.31-.27.63-.38.95a10.79 10.79 0 00-.33 1.24c0 .13-.06.27-.08.4s0 .31-.06.46 0 .3-.05.44 0 .3 0 .44V652.96c0 .12.07.39.1.59l.06.3c.07.29.14.58.24.87.2.6.45 1.19.71 1.77s.52 1.17.74 1.77a12 12 0 01.36 1.16 2.61 2.61 0 01.06.27c.08.31.15.62.21.94v.22c.06.34.11.69.15 1a.49.49 0 010 .12c0 .39.08.78.1 1.17.09 1.42.07 2.87 0 4.3l-.12 7.12v.22a1.25 1.25 0 00.14.64.78.78 0 00.67.36 2.54 2.54 0 001.39-.54l3.18-2.31h.2c-2.51 4.11-4.52 8.64-4.91 13.47a43 43 0 00.61 9.53c2.93 21 9.83 42.19 8.38 63.39-.57 8.35 2.89 16.49 2.87 24.85 0 3.25-.55 6.47-.69 9.71-.61 13.92 6.49 28 3.6 41.6 1 3.38 4.79 5.18 5.86 8.54.9 2.85-.4 5.88-1.45 8.67a17.67 17.67 0 00-.87 3c-2.91 0-6.14.06-8.08.87a12 12 0 00-1.57.64c-1.79 1.07-1.91 4-.78 5.77s7.48 7.42 9.34 8.35l4.07 2a24.42 24.42 0 007 2.64 23.94 23.94 0 006.21-.12c1.59-.17 3.35-.43 4.38-1.73 1.45-1.84.71-4.83-.28-7.49a2.67 2.67 0 00.82-1.11 8.88 8.88 0 00.27-2.13 16 16 0 011.42-4c1.67-4.07 1.6-8.65 1.5-13.08a151.73 151.73 0 00-1.48-21.53c-.5-3-1.18-6-1.76-9a148.92 148.92 0 01-2.73-33 26.41 26.41 0 00-1.11-7.94 14.26 14.26 0 01-.26-4.53l1.2-18.31a73.51 73.51 0 00.17-11.2c-.17-2-.5-4-.7-6a91.27 91.27 0 01-.19-11.46c.11-4.11.3-8.52 2.65-11.82a1.84 1.84 0 011.12-.87c.48-.07.62.58.44 1 .25.76.51 1.51.77 2.27.08.22.15.43.23.64.13.39.27.78.41 1.17s.2.54.29.81l.39 1c.11.3.23.59.34.88s.25.63.38.94.26.62.4.93.24.57.37.86l.48 1c.12.25.24.51.37.76s.39.73.59 1.09c.11.21.22.42.34.62.32.56.65 1.1 1 1.64.68 1 1.41 2 2 3.07a10.16 10.16 0 01.56 1.09 26.93 26.93 0 011.31 4.26c.35 1.32.76 2.61 1.21 3.88s1 2.54 1.49 3.78c.27.62.55 1.24.83 1.85.84 1.85 1.75 3.67 2.67 5.47a5.09 5.09 0 01.38 1 4.64 4.64 0 01.11.51 4.56 4.56 0 010 1 4.2 4.2 0 01-.08.62 4.67 4.67 0 01-.27.9c-1.23 2.81-.24 5.58.3 8.34a52.75 52.75 0 01.68 8.8c0 1 0 2 .09 2.93 0 1.22 0 2.43.07 3.65s0 2.62.07 3.93a34.25 34.25 0 01-.16 3.93c0 .46-.12.91-.19 1.36-.22 1.35-.53 2.69-.8 4a79.55 79.55 0 00-1.38 16q0 3.23.21 6.47c.12 2.17.29 4.33.48 6.5.1 1.19.22 2.38.34 3.57.2 2.06.42 4.12.64 6.18s.46 4.33.67 6.48.4 4.3.55 6.44a5.39 5.39 0 01-.64 3.06 6.88 6.88 0 00-.5 1.16 6.24 6.24 0 00-.22.85 9 9 0 00-.12 1 11.39 11.39 0 00.12 2.1q.08.52.18 1c.15.69.33 1.38.51 2.06a20.73 20.73 0 002 5.4 8 8 0 00.66 1c.07.1.15.19.23.29a7.17 7.17 0 01.57.76 2.42 2.42 0 01.21.39 3.07 3.07 0 01.12 1.73c-.11.6-.32 1.2-.48 1.77l.52.07c-.73 2.31-1.07 4.68.16 6.23 1 1.3 2.79 1.56 4.38 1.73a23.5 23.5 0 006.21.13 24.42 24.42 0 007-2.64l4.07-2c1.86-.93 8.2-6.54 9.33-8.36s1-4.69-.77-5.76a11.29 11.29 0 00-1.57-.65c-1.8-.75-4.71-.82-7.43-.86-.14-1-.22-2.09-.26-3.12a86.22 86.22 0 01.22-11.48c.23-2.71.58-5.41.55-8.12 0-3.62-.75-7.2-1.14-10.8s-.43-7.12-.49-10.68c-.09-5.24 1.45-10.23 2.12-15.41l1.17-9.11a11.08 11.08 0 00.08-3.35c-.18-1-.64-2-.83-3-.41-2.27.62-4.52.94-6.81.37-2.63-.2-5.3-.57-7.94a103.23 103.23 0 01-.69-12.56c-.36-25.8-1.09-52.18-9.81-76.32-.35-1-.73-2-1.12-2.93a5.25 5.25 0 00.52-.17 3.51 3.51 0 00.77-.4 2.1 2.1 0 00.3-.22 2.31 2.31 0 00.59-1 3.77 3.77 0 00.18-1.13 8.05 8.05 0 00-.29-2l-.12-.41a39 39 0 00-.65-2 44.2 44.2 0 00-.71-1.92 23.37 23.37 0 01-1.26-3.67c-.61-2.84 0-6.12-1.71-8.43-3.78-5.18-1.11-13.14-2.69-19.45-.52-2-1.28-4-1.76-6-.3-1.28-.49-2.59-.68-3.9a48.58 48.58 0 01-.74-8.58c0-1.44.22-2.88.39-4.31l1.2-9.92a29.6 29.6 0 012.84 8.16c.09.41.17.81.26 1.22a144.38 144.38 0 004 14.48c.91 2.87 1.81 5.73 2.79 8.57.29.81.57 1.63.83 2.46a19.8 19.8 0 01.6 2.53c.11.68.16 1.38.21 2.07s.09 1.4.16 2.09a19.68 19.68 0 002.9 8.31 2.43 2.43 0 01.14.2 2.36 2.36 0 001.22 1.06 2.68 2.68 0 001.09 0h.06c.53-.11 1.06-.23 1.58-.36a2 2 0 00.23-.06c.24 3.1 1.16 6.19 1.24 9.32.1 4.55-1.57 8.91-2.63 13.32a84.89 84.89 0 00-1.79 12.22 5.41 5.41 0 00.15 2.44 1.73 1.73 0 001.82 1.23 2.2 2.2 0 001.29-1.15 9.13 9.13 0 001.11-6.59c.95.2 1.44 1.29 1.67 2.28a13.7 13.7 0 01-.42 7.74c-.59 1.66-1.5 3.19-2 4.9a2.56 2.56 0 000 1.64c.5 1.15 2.08 1.07 3.22.65a16.19 16.19 0 008.49-8 24.52 24.52 0 002.49-11.62z"
        transform="translate(-35 -23.69)"
        fill="url(#StripePayments_svg__a)"
      />
      <path
        d="M665.45 850.51c-1.07 1.29-2.9 1.55-4.56 1.72a26 26 0 01-6.47.12 26.4 26.4 0 01-7.27-2.62l-4.24-2c-1.93-.93-8.53-6.51-9.71-8.32s-1.06-4.66.8-5.73a13 13 0 011.64-.64c3.12-1.24 9.44-.61 12.76-1.09a8.84 8.84 0 014.72 1.11c3.28 1.45 9.06 2.6 10.49 6.29 1.11 2.84 4.15 8.35 1.84 11.16zM689 847.77c1.07 1.29 2.9 1.55 4.56 1.72a19.52 19.52 0 0013.73-2.51l4.24-2c1.94-.93 8.54-6.51 9.72-8.32s1.06-4.67-.81-5.73a11 11 0 00-1.63-.64c-3.12-1.24-9.44-.61-12.76-1.09a8.81 8.81 0 00-4.73 1.11c-3.27 1.45-9 2.6-10.48 6.29-1.14 2.85-4.19 8.36-1.84 11.17z"
        fill="#2f2e41"
      />
      <path
        d="M699.31 645.57a50.49 50.49 0 012.67 6.08c9.08 24 9.84 50.26 10.22 75.93a96.46 96.46 0 00.71 12.49c.38 2.63 1 5.28.59 7.91-.33 2.27-1.4 4.51-1 6.76.19 1 .67 2 .86 3a10.36 10.36 0 01-.09 3.33l-1.21 9.06c-.7 5.16-2.3 10.12-2.21 15.33.06 3.55.12 7.1.51 10.63a105.28 105.28 0 011.19 10.74c0 2.7-.34 5.39-.58 8.08a83.68 83.68 0 00-.23 11.42c.14 2.93.48 6 2 8.47-1.75 2.5-3.47 4.74-6.26 6-5.67 2.48-12.18 1.64-18.31.75.34-1.13.86-2.41.37-3.49a6.58 6.58 0 00-1.05-1.43 17 17 0 01-2.73-6.34c-.74-2.71-1.48-5.62 0-8.21a5.2 5.2 0 00.67-3c-1.27-17-5.06-34.64-1.57-51.35.37-1.78.81-3.56 1-5.37a65.8 65.8 0 00.1-7.82l.04-3.73c-.18-3.87 0-7.84-.8-11.67-.55-2.74-1.59-5.5-.31-8.3a4.55 4.55 0 00-.19-4 74 74 0 01-6.46-14.91 25.86 25.86 0 00-1.36-4.24 30.07 30.07 0 00-2.68-4.13c-3-4.41-4.86-9.52-6.64-14.56.19-.47 0-1.11-.45-1a1.88 1.88 0 00-1.17.87c-2.44 3.28-2.65 7.66-2.76 11.76a86.74 86.74 0 00.2 11.4c.2 2 .55 4 .73 6a70.27 70.27 0 01-.18 11.14l-1.23 18.14a13.09 13.09 0 00.26 4.51 25.23 25.23 0 011.16 7.89 141.87 141.87 0 002.88 32.78c.6 3 1.31 5.94 1.83 8.93a146.09 146.09 0 011.54 21.42c.11 4.41.18 9-1.56 13a14.89 14.89 0 00-1.48 4 8.27 8.27 0 01-.28 2.12c-.51 1.31-2 1.87-3.41 2.17a27.75 27.75 0 01-7.87.56 4.41 4.41 0 01-1.79-.4c-1-.51-1.5-1.59-2.25-2.4-1.61-1.76-4.29-2.3-5.76-4.18-1.84-2.36-1.07-5.77 0-8.55s2.44-5.79 1.5-8.63c-1.11-3.33-5-5.13-6.1-8.49 3-13.54-4.38-27.54-3.75-41.39.15-3.23.71-6.43.72-9.66 0-8.32-3.57-16.42-3-24.72 1.51-21.09-5.68-42.15-8.72-63.08a40.74 40.74 0 01-.64-9.47c.45-5.24 2.88-10.11 5.8-14.48 2.1-3.13 4.62-6.2 8.09-7.66 2.86-1.21 6.06-1.2 9.16-1.18 7.74.06 15.48.12 23.22.26a76.37 76.37 0 0115.7 1.4c4.19.95 8.11 2.9 12.36 3.51z"
        fill="#2f2e41"
      />
      <path
        d="M667.38 688.81a1.91 1.91 0 011.17-.87c.5-.07.65.57.46 1 1.78 5 3.6 10.15 6.63 14.56a29.23 29.23 0 012.69 4.13 26.86 26.86 0 011.36 4.24 74.5 74.5 0 006.45 14.91 4.52 4.52 0 01.19 4c-1.28 2.8-.24 5.56.32 8.3.77 3.83.62 7.8.8 11.67 0 1.21 0 2.42.07 3.63a63.75 63.75 0 01-.09 7.82c-.21 1.81-.65 3.59-1 5.37-3.48 16.71.3 34.32 1.57 51.35a5.19 5.19 0 01-.66 3c-1.52 2.59-.78 5.5 0 8.21a16.72 16.72 0 002.73 6.34 7.31 7.31 0 011 1.43c.49 1.08 0 2.36-.38 3.49a77.14 77.14 0 008.18.87 59.19 59.19 0 01-10.61-.87c.34-1.13.86-2.41.37-3.49a6.58 6.58 0 00-1.05-1.43 17 17 0 01-2.73-6.34c-.74-2.71-1.48-5.62 0-8.21a5.2 5.2 0 00.67-3c-1.27-17-5.06-34.64-1.57-51.35.37-1.78.81-3.56 1-5.37a65.8 65.8 0 00.1-7.82c0-1.21-.05-2.42-.08-3.63-.18-3.87 0-7.84-.8-11.67-.55-2.74-1.59-5.5-.31-8.3a4.55 4.55 0 00-.19-4 74 74 0 01-6.46-14.91 26.86 26.86 0 00-1.36-4.24 30.07 30.07 0 00-2.68-4.13c-2.9-4.21-4.69-9.05-6.39-13.87.22-.25.4-.54.6-.82z"
        opacity={0.1}
      />
      <path
        d="M574.26 549.42c-.75-3.67.67-7.6-.44-11.17-.4-1.29-1.38-2.63-2.73-2.6s-2.2 1.32-3.36 1.93c-1.87 1-4.15.09-6-.89s-4-2.1-6-1.51c-.24 1.28.62 2.49 1.56 3.38a9.31 9.31 0 012.51 2.92c.47 1.18.25 2.5.35 3.77.21 2.9 2 5.41 3.89 7.67a137.21 137.21 0 009.43 10.45s5-6.24 4.93-7.33-1.78-2-2.4-2.82a9.57 9.57 0 01-1.74-3.8zM724.32 626.22a19.43 19.43 0 011 3.6c1.3 6.3 2.12 12.69 2.93 19.07.21 1.7.43 3.41.49 5.12a23.37 23.37 0 01-2.43 11.79 16.49 16.49 0 01-8.83 8c-1.18.42-2.83.5-3.35-.64a2.46 2.46 0 010-1.63c.47-1.7 1.42-3.23 2-4.88a13.15 13.15 0 00.44-7.7c-.24-1-.75-2.07-1.74-2.27a8.75 8.75 0 01-1.16 6.56 2.27 2.27 0 01-1.34 1.14 1.81 1.81 0 01-1.9-1.22 5.23 5.23 0 01-.15-2.43 81.72 81.72 0 011.86-12.16c1.1-4.39 2.85-8.72 2.73-13.25-.1-4.1-1.73-8.13-1.27-12.2a1 1 0 01.74-1 27 27 0 013.53-1.17c.71-.18 3.13-1 3.81-.64s.72 2.13 1 2.75c.53 1.03 1.18 2.05 1.64 3.16z"
        fill="#a1616a"
      />
      <circle cx={643.39} cy={487.97} r={16.75} fill="#a1616a" />
      <path
        d="M658.4 500.09a18.89 18.89 0 00.25 3.19 17 17 0 001 3.11 18.14 18.14 0 002.34 4.6 6.85 6.85 0 004.24 2.76A120.46 120.46 0 01630 524.22a15.28 15.28 0 004.8-5.13 14.49 14.49 0 001.27-4.17 35 35 0 00-1.57-18.07c-.21-.56-.41-1.26 0-1.73a1.71 1.71 0 01.6-.38 37.21 37.21 0 0115.74-2.94c1.38 0 2.76.07 4.14.17.74.06 2.37-.1 3 .44s.35 2.66.37 3.53z"
        fill="#a1616a"
      />
      <path
        d="M667.26 512.31a17.94 17.94 0 00-21.44-5.34c-8 3.81-11.9 13-18.91 18.32a33 33 0 01-5.08 3.13 14.18 14.18 0 01-3.34 1.32c-1.31.29-2.67.25-4 .56a10.27 10.27 0 00-5.93 4.6 31.14 31.14 0 01-2.18 3.36c-.73.87-1.64 1.58-2.41 2.41-2.79 3-3.55 7.3-4.18 11.34a53.71 53.71 0 01-7.12 6.27 10 10 0 01-2.64 1.46c-2.45.8-5.16-.21-7.25-1.72s-3.79-3.5-5.85-5c-1.89 2.7-3.87 5.42-5.89 8a2.53 2.53 0 01-1.32 1.08c-.38 1.28.53 2.6 1.21 3.74l3.65 6.14a31.13 31.13 0 004.41 6.18 10.35 10.35 0 006.71 3.15 13.27 13.27 0 004.71-.91c7-2.34 13.35-6.07 20-9.25a8.89 8.89 0 013.92-1.15 3.17 3.17 0 013.1 2.23c.76 3.84 1.51 7.66 2.55 11.42q1.49 5.34 2.75 10.71a46.22 46.22 0 011.2 6.69c.11 1.28.12 2.56.14 3.85l.14 15.52c0 1.68-.94 2.72-1.68 4.22a10 10 0 00-.47 7.46c.41 1.21 1.06 2.33 1.52 3.53 1.1 2.89 1.06 6.07 1 9.16l-.13 7.08a1.48 1.48 0 00.15.86c.43.67 1.47.28 2.13-.18l3.27-2.24a75.63 75.63 0 0013.38.65c12.71-.18 25.43.32 38.11 1.21 4.24.3 8.61.62 12.61-.79 2-.72 3.9-1.87 6-2.44a5.48 5.48 0 002.37-1c1.16-1.07.85-3 .38-4.46-.42-1.32-.89-2.63-1.42-3.91a23.74 23.74 0 01-1.32-3.65c-.63-2.82 0-6.09-1.77-8.39-3.94-5.15-1.15-13.08-2.81-19.35-.53-2-1.32-4-1.82-6-.32-1.28-.52-2.58-.71-3.88a45.44 45.44 0 01-.77-8.54c0-1.43.23-2.86.41-4.28l1.25-9.88a31.45 31.45 0 013.22 9.34 137.14 137.14 0 004.2 14.41c.94 2.85 1.88 5.69 2.9 8.52a27.76 27.76 0 011.49 5c.22 1.37.23 2.77.39 4.14a18.89 18.89 0 003 8.27 2.72 2.72 0 001.42 1.26 2.85 2.85 0 001.23 0 48.94 48.94 0 0012.72-4.4 5.19 5.19 0 002.15-1.68c1.08-1.76-.13-3.95-.66-5.95s-.43-4.71-2.11-6.14c-5.87-5-3-15.13-5.89-22.25-.52-1.25-1.12-2.46-1.56-3.74-.34-1-.59-2-.84-3q-3.07-12.43-6.58-24.77c-2.42-8.52-2.16-17.39-5.21-25.71a27.12 27.12 0 00-2.23-5 13.65 13.65 0 00-4-4.17c-4.43-2.93-8.89-5.42-14.1-6.48s-10.87-1-16.17-.94zM628.17 492.07c-2.25-1.21-1.66-4.51-2-7-.79-5.21-6.66-8.29-8-13.37a9 9 0 004.66-.66 7.14 7.14 0 00-.94-4.88c4.83-2 8.75-5.81 13.65-7.58 6.18-2.23 13-.86 19.28 1.21 3.11 1 6.34 2.37 8.22 5.05 2.06 2.95 2 6.82 1.92 10.42-.17 5.64-.4 11.48-2.91 16.53-3.19 6.43-12.24 12.38-19.72 10.64-3.1-.72-4-2.68-5.33-5.38-.82-1.68-1.12-3.63-3-4.51s-4 .51-5.83-.47z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M624.53 645.98a.36.36 0 000 .09c.43.67 1.47.28 2.13-.18l3.32-2.29a75.63 75.63 0 0013.38.64c12.71-.18 25.43.32 38.11 1.21 4.24.3 8.61.62 12.61-.79 2-.72 3.9-1.86 6-2.44a6.9 6.9 0 002.07-.74c.24.66.47 1.32.68 2 .47 1.51.78 3.39-.38 4.46a5.48 5.48 0 01-2.37 1c-2.08.57-4 1.72-6 2.44-4 1.41-8.37 1.09-12.61.79-12.68-.89-25.4-1.39-38.11-1.21a75.63 75.63 0 01-13.36-.65l-3.32 2.3c-.66.46-1.7.85-2.13.18a1.48 1.48 0 01-.15-.86q.07-2.97.13-5.95zM697.11 584.92a31.45 31.45 0 00-3.22-9.34l-1.25 9.88c-.08.62-.16 1.24-.23 1.86a30.65 30.65 0 01-.18-4.28c0-1.43.23-2.86.41-4.28l1.25-9.88a31.45 31.45 0 013.22 9.34 137.14 137.14 0 004.2 14.41c.94 2.85 1.88 5.7 2.9 8.52a28 28 0 011.49 5c.22 1.37.23 2.77.39 4.14a18.74 18.74 0 003 8.27 2.66 2.66 0 001.41 1.26 2.85 2.85 0 001.23-.05 48.94 48.94 0 0012.72-4.4 8 8 0 001.49-.95c.53 2 1.74 4.19.66 5.95a5.19 5.19 0 01-2.15 1.68 48.94 48.94 0 01-12.72 4.4 2.85 2.85 0 01-1.23 0 2.66 2.66 0 01-1.41-1.26 18.78 18.78 0 01-3-8.27c-.16-1.37-.17-2.77-.39-4.14a27.76 27.76 0 00-1.49-5c-1-2.83-2-5.67-2.9-8.52a137.14 137.14 0 01-4.2-14.34zM696.08 612.15v1.34c.02-.45.01-.89 0-1.34zM623.55 628.97c1.1 2.89 1.06 6.07 1 9.16v2.42a16.51 16.51 0 00-1-4.88c-.46-1.2-1.11-2.32-1.52-3.53a10 10 0 01.08-6.51c.41 1.14 1 2.21 1.44 3.34zM571.06 560.96l.57-.74 3 5a30.84 30.84 0 004.41 6.18 10.35 10.35 0 006.69 3.25 13.48 13.48 0 004.71-.9c7-2.35 13.35-6.08 20-9.26a8.89 8.89 0 013.86-1.18 3.18 3.18 0 013.1 2.24c.76 3.83 1.51 7.65 2.55 11.41q1.49 5.34 2.75 10.71a46.22 46.22 0 011.2 6.69c.11 1.28.12 2.57.13 3.85l.15 15.53a3.74 3.74 0 01-.06.68l-.09-9.51c0-1.29 0-2.57-.13-3.85a46.22 46.22 0 00-1.2-6.69q-1.28-5.37-2.75-10.71c-1-3.76-1.79-7.58-2.55-11.42a3.17 3.17 0 00-3.1-2.23 8.89 8.89 0 00-3.92 1.15c-6.62 3.18-13 6.91-20 9.25a13.27 13.27 0 01-4.71.91 10.35 10.35 0 01-6.69-3.25 31.13 31.13 0 01-4.41-6.18c-1.21-2.05-2.43-4.09-3.65-6.14-.68-1.14-1.59-2.46-1.21-3.74a2.53 2.53 0 001.35-1.05z" />
      </g>
      <g opacity={0.1}>
        <path d="M622.75 468.58a7 7 0 00-.92-2.45q.42-.17.84-.36a7 7 0 01.08 2.81zM626.13 482.6c.38 2.53-.21 5.82 2 7 1.82 1 4-.41 5.79.45s2.14 2.83 3 4.51c1.31 2.7 2.23 4.65 5.33 5.38 7.48 1.74 16.53-4.22 19.72-10.65 2.51-5.05 2.74-10.89 2.91-16.53v-.83 3.27c-.17 5.64-.4 11.48-2.91 16.53-3.19 6.43-12.24 12.38-19.72 10.64-3.1-.72-4-2.68-5.33-5.38-.82-1.68-1.12-3.63-3-4.51s-4 .54-5.79-.44c-2.25-1.21-1.66-4.51-2-7-.79-5.21-6.66-8.29-8-13.37a7.88 7.88 0 001.09.07c2.15 3.71 6.26 6.57 6.91 10.86z" />
      </g>
      <path
        d="M235.44 771.24a30.29 30.29 0 00-8.79-3.11 40.74 40.74 0 006.58-1.48c5.71-1.81 8.59-4.23 6.43-5.42s-8.55-.69-14.26 1.12a22.3 22.3 0 00-5.48 2.43c-.59-1.25-2.19-2.7-4.7-4.08-5.07-2.79-11.89-4.19-15.23-3.14s-1.93 4.17 3.15 7a30.73 30.73 0 007.88 2.93 45.8 45.8 0 00-5.42 1c-6.21 1.49-9.81 3.75-8 5s8.27 1.13 14.49-.36a27.54 27.54 0 006.52-2.31c.51 1.29 2.14 2.83 4.78 4.28 5.07 2.78 11.89 4.19 15.23 3.14s1.89-4.22-3.18-7zM160.94 675.12a18.85 18.85 0 00-5.52-1.94 24.76 24.76 0 004.14-.93c3.57-1.13 5.38-2.65 4-3.39s-5.34-.43-8.92.7a13.82 13.82 0 00-3.42 1.52 6.9 6.9 0 00-3-2.55c-3.17-1.75-7.44-2.63-9.53-2s-1.2 2.61 2 4.36a19.43 19.43 0 005 1.83 30.94 30.94 0 00-3.41.6c-3.89.93-6.14 2.35-5 3.15s5.17.71 9.06-.22a17.22 17.22 0 004.08-1.44 6.51 6.51 0 003 2.67c3.18 1.75 7.45 2.63 9.54 2s1.16-2.61-2.02-4.36z"
        fill={color}
      />
      <ellipse cx={771.47} cy={816.2} rx={32.29} ry={6.21} fill={color} />
      <ellipse cx={770.93} cy={813.56} rx={3.76} ry={4.92} fill="#3f3d56" />
      <ellipse cx={770.93} cy={807.55} rx={3.76} ry={4.92} fill="#3f3d56" />
      <ellipse cx={770.93} cy={801.53} rx={3.76} ry={4.92} fill="#3f3d56" />
      <ellipse cx={770.93} cy={795.52} rx={3.76} ry={4.92} fill="#3f3d56" />
      <ellipse cx={770.93} cy={789.5} rx={3.76} ry={4.92} fill="#3f3d56" />
      <ellipse cx={770.93} cy={783.49} rx={3.76} ry={4.92} fill="#3f3d56" />
      <ellipse cx={770.93} cy={777.47} rx={3.76} ry={4.92} fill="#3f3d56" />
      <path
        d="M785 736.31a18.19 18.19 0 001.4-2.06l-9.88-1.62 10.68.08a18.06 18.06 0 00.35-14.27l-14.34 7.44 13.22-9.72a18 18 0 10-29.73 20.15 18.35 18.35 0 00-2.06 3.29l12.83 6.66-13.68-4.59a18.15 18.15 0 00-.95 5.78 17.88 17.88 0 003.86 11.13 18 18 0 1028.31 0 18 18 0 00-.01-22.27z"
        fill={color}
      />
      <path
        d="M752.84 747.44a17.88 17.88 0 003.86 11.13 18 18 0 1028.31 0c2.41-3.06-32.17-13.15-32.17-11.13z"
        opacity={0.1}
      />
    </svg>
  );
};

SvgStripePayments.propTypes = {
  color: PropTypes.string
};
SvgStripePayments.defaultProps = {
  color: "primary"
};
const MemoSvgStripePayments = React.memo(SvgStripePayments);
export default MemoSvgStripePayments;
