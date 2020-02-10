import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgEmails = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 907.32 801.69"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Emails_svg__a"
          x1={448.29}
          y1={834.48}
          x2={448.29}
          y2={252.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <ellipse
        cx={289.44}
        cy={770.81}
        rx={80.14}
        ry={23.48}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={477.27}
        cy={657.23}
        rx={345.18}
        ry={16.65}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M280.16 31.27c30.79-27.43 79.11-33 123.09-30.84 138.16 6.86 262.87 73.56 370.74 149 39 27.31 77.5 56.74 102.85 94.35 51.6 76.56 36.3 182.63-35.46 245.7-24.41 21.46-54 37.91-84.39 52.5-54 25.93-112.31 46.74-173.62 52.67-43.72 4.22-88 .79-131.45-5.11-121.45-16.46-240.66-52.88-340.57-115.19-43.82-27.33-85.12-61.3-103.19-105.5s-6.5-100.23 38.25-126.4c18.5-10.83 40.63-15.71 62.29-20.3 31.89-6.76 64.29-13.42 93.06-27.16 29.73-14.18 64.92-41.62 59-73-6.28-33.73-11.35-63.32 19.4-90.72z"
        fill={color}
        opacity={0.1}
      />
      <rect
        x={127.24}
        y={109.51}
        width={705.42}
        height={547.72}
        rx={22.82}
        ry={22.82}
        fill="#474157"
      />
      <path fill="#ededf4" d="M184.01 158.92h592.93v446.8H184.01z" />
      <circle cx={160.88} cy={382.32} r={9.72} fill="#e6e8ec" />
      <circle cx={803.22} cy={383.37} r={16.03} fill="#e6e8ec" />
      <path
        d="M523.59 356.09a.84.84 0 011.36.66v28.76a6.75 6.75 0 01-6.75 6.75h-58.54a6.75 6.75 0 01-6.75-6.75v-28.75a.85.85 0 011.37-.66c3.15 2.45 7.32 5.56 21.67 16 3 2.16 8 6.72 13 6.69s10.13-4.61 13-6.69c14.32-10.44 18.49-13.56 21.64-16.01zm-34.64 18.17c3.26 0 8-4.11 10.32-5.82 18.66-13.55 20.08-14.73 24.39-18.1a3.39 3.39 0 001.29-2.66v-2.67a6.75 6.75 0 00-6.75-6.75h-58.54a6.75 6.75 0 00-6.75 6.75v2.67a3.41 3.41 0 001.29 2.66c4.31 3.36 5.73 4.55 24.39 18.1 2.36 1.71 7.06 5.87 10.32 5.82z"
        fill={color}
      />
      <path
        d="M383.66 259.03h-55.44a6.4 6.4 0 00-6.39 6.4v38.42a6.4 6.4 0 006.39 6.4h55.44a6.41 6.41 0 006.4-6.4v-38.42a6.41 6.41 0 00-6.4-6.4zm0 6.4v5.42c-3 2.43-7.76 6.22-17.94 14.19-2.25 1.77-6.69 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-15-11.76-17.95-14.19v-5.44zm-55.44 38.42v-24.77c3.06 2.43 7.39 5.85 14 11 2.92 2.29 8 7.35 13.74 7.32s10.73-5 13.74-7.32c6.6-5.17 10.93-8.59 14-11v24.77z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M329.66 365.85h-55.44a6.39 6.39 0 00-6.39 6.4v38.4a6.4 6.4 0 006.39 6.4h55.44a6.41 6.41 0 006.4-6.4v-38.39a6.4 6.4 0 00-6.4-6.41zm0 6.4v5.44c-3 2.43-7.76 6.22-17.94 14.19-2.25 1.77-6.69 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-15-11.76-17.95-14.19v-5.44zm-55.44 38.4v-24.74c3.06 2.43 7.39 5.84 14 11 2.92 2.3 8 7.36 13.74 7.33s10.73-5 13.74-7.32c6.6-5.17 10.93-8.59 14-11v24.73z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M390.08 462.54h-55.42a6.41 6.41 0 00-6.4 6.4v38.39a6.41 6.41 0 006.4 6.4h55.46a6.4 6.4 0 006.39-6.4v-38.39a6.4 6.4 0 00-6.43-6.4zm0 6.4v5.44c-3 2.43-7.76 6.22-17.94 14.19-2.25 1.77-6.7 6-9.79 6s-7.54-4.19-9.79-6c-10.18-7.97-14.9-11.72-17.9-14.19v-5.44zm-55.42 38.39v-24.74c3.06 2.43 7.39 5.85 14 11 2.91 2.29 8 7.35 13.74 7.32s10.73-5 13.74-7.32c6.6-5.17 10.93-8.59 14-11v24.74zM501.66 194.6h-55.44a6.39 6.39 0 00-6.39 6.4v38.39a6.4 6.4 0 006.39 6.4h55.44a6.41 6.41 0 006.4-6.4V201a6.4 6.4 0 00-6.4-6.4zm0 6.4v5.44c-3 2.43-7.76 6.21-17.94 14.19-2.25 1.77-6.69 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-15-11.76-18-14.19V201zm-55.46 38.39v-24.74c3.06 2.43 7.39 5.84 14 11 2.92 2.3 8 7.36 13.74 7.33s10.73-5 13.74-7.33c6.6-5.17 10.93-8.58 14-11v24.74zM501.66 525.66h-55.44a6.4 6.4 0 00-6.39 6.4v38.39a6.4 6.4 0 006.39 6.4h55.44a6.41 6.41 0 006.4-6.4v-38.39a6.41 6.41 0 00-6.4-6.4zm0 6.4v5.44c-3 2.43-7.76 6.22-17.94 14.19-2.25 1.77-6.69 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-15-11.76-18-14.19v-5.44zm-55.44 38.39v-24.74c3.06 2.43 7.39 5.85 14 11 2.92 2.29 8 7.35 13.74 7.32s10.73-5 13.74-7.32c6.6-5.17 10.93-8.59 14-11v24.74zM565.83 265.43v38.42a6.4 6.4 0 006.39 6.4h55.44a6.41 6.41 0 006.4-6.4v-38.42a6.41 6.41 0 00-6.4-6.4h-55.44a6.4 6.4 0 00-6.39 6.4zm61.85 0v5.42c-3 2.43-7.76 6.22-17.94 14.19-2.25 1.77-6.7 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-15-11.76-18-14.19v-5.44zm-55.46 38.42v-24.77c3.06 2.43 7.39 5.85 14 11 3 2.36 8.05 7.35 13.74 7.32s10.83-5 13.74-7.32c6.6-5.17 10.93-8.59 14-11v24.77zM616.09 368.18v38.39a6.4 6.4 0 006.4 6.4h55.45a6.41 6.41 0 006.4-6.4v-38.39a6.41 6.41 0 00-6.4-6.4h-55.45a6.4 6.4 0 00-6.4 6.4zm61.85 0v5.44c-3 2.43-7.76 6.22-17.94 14.19-2.24 1.77-6.69 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-14.95-11.76-17.94-14.19v-5.44zm-55.45 38.39v-24.72c3 2.43 7.38 5.85 14 11 3 2.36 8 7.35 13.73 7.32s10.83-5 13.74-7.32c6.6-5.17 10.94-8.59 14-11v24.74zM559.43 468.94v38.39a6.4 6.4 0 006.4 6.4h55.45a6.41 6.41 0 006.4-6.4v-38.39a6.41 6.41 0 00-6.4-6.4h-55.45a6.4 6.4 0 00-6.4 6.4zm61.85 0v5.44c-3 2.43-7.76 6.22-17.94 14.19-2.25 1.77-6.69 6-9.79 6s-7.54-4.19-9.78-6c-10.19-8-15-11.76-17.94-14.19v-5.44zm-55.45 38.39v-24.74c3.05 2.43 7.38 5.85 14 11 3 2.36 8 7.35 13.73 7.32s10.83-5 13.74-7.32c6.6-5.17 10.93-8.59 14-11v24.74z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M585.9 400.58l-.93-.38a23.46 23.46 0 00-2.89-3.4s-25.47-8.54-30.65-11.69a20.87 20.87 0 00-10.6-2.92l-9.24-1.57s-5.19-1.12-7.67-2-7-2.69-7-2.69-5.41-2.25-6.32-3.6-5.41-2.47-5.41-2.47l-9.24-7s-7.44-4.5-8.57-8.77-5.41-16.18-19.83-8.54c0 0-7.22-2-9-4.27s-18.7.22-18.7.22l-5.27-9a77.22 77.22 0 01-.42-15.19c0-.48.08-1 .13-1.45a26.8 26.8 0 008.17-32.17c-.15-.34-.32-.68-.48-1a9 9 0 00.87-2.49c0-.22.07-.44.1-.66A11.8 11.8 0 00443 278a11.68 11.68 0 00-.38-2.88l-.21-.7a11.66 11.66 0 00-3.66-5.37c-1.67-1.36-3.77-2.29-5-4-1.81-2.58-1.34-6.23-3-8.88a7.38 7.38 0 00-.54-.71l-.15-.16a8.27 8.27 0 00-.53-.5l-.11-.09c-2.45-2-6.27-2.17-9.46-1.36-3.85 1-7.42 3-11.36 3.58-3.13.42-6.29-.17-9.44-.37s-6.52 0-9.11 1.84c-3.19 2.23-4.49 6.34-7.28 9.06s-7.24 4-9.68 7.21a8.83 8.83 0 00-1.19 8.35c1 2.57 3.19 4.64 3.69 7.35.56 3-1 6.32.05 9.05a5 5 0 00.28.57 2.69 2.69 0 01.4 0h.39l.38.07a2.54 2.54 0 01.37.1 5.5 5.5 0 013.34 3.62c.65 2.13.29 4.43 0 6.64s-.61 4.53.18 6.61a2.08 2.08 0 00.13.3 2.38 2.38 0 00.25.44l.06.08a1.94 1.94 0 00.34.36 4.05 4.05 0 001.93.55c.23 0 .46.08.68.13s.3.08.44.12l.21.06c.19.06.37.12.56.2h.05c.2.09.4.17.59.27a8.59 8.59 0 012.72 2c.31.34.6.71.9 1.06l.43.45a4.74 4.74 0 00.49.4 4.15 4.15 0 002.48.65 13 13 0 003.3-.64l.09.84c.18 1.6.34 3.18.47 4.72 0 .22 0 .43.05.64a32.48 32.48 0 00-8 10l.3 1q-.17.19-.3.39v4.49s-23.9 4.27-26.61 6.3-7.66 2.24-7.66 2.24-13.53-.67-13.53 11.91c0 0-.45 5.84-3.15 6.07s-4.06 3.82-4.06 3.82l-13.75 14.83-20.07 16.18s-8.91 8.38-11.19 11.86a2.65 2.65 0 00-.53 1.18s-24.32 27.07 2.3 38.43l.83.34L315 476.13l29 16.4.87-1.23.46.31 3.49 2.3 4.46-7.19.59.13c1.64.38 3.6 1.18 4.5 2.84 1.33 2.46 9.36 7.67 14.25 8.18l-.18.54-2.74 8.73s-5.41 6.29-4.28 8.54-2 18.88-2 18.88 5 2 7.44 3.37a7.32 7.32 0 001.46.4c0 .44-.09.89-.14 1.32a8 8 0 01-1.55 4.35c-2.71 2.69-2.48 8.09-2.48 8.09s-1.36 7.86 0 8.76-.61 2.92-.61 2.92 2.1 6.74 0 9.44-6.43 39.1 1.59 56.85c0 0 7.15 15.28 3.31 20.68s-8.71 22.7-8 25.84-1.05 10.79-1.05 10.79 2.93 16 .9 19.32-7.44 54.61-.9 67c0 0-6.54 8.32-9.92 8.32s2.93 13 5.63 15.51 3.92 14.6 3.92 14.6l.39.18c.11.48.24 1 .37 1.51 1.43 5.57 3.88 13.22 6.6 13.37 4.28.22 20.74-.9 21.41-4.95s-.23-10.79 3.15-12.81 15.11-7.86 7.9-21.79a16.44 16.44 0 00-2.65-.08h-.06l1.35-30 5.41-43.82s4.74-15.06 5.42-17.08-1.13-5.39-1.13-5.39l1.27-12.14s-.82-13.48 1.88-15.28 1.13-8.53 1.13-8.53 2.26-7.87 2.48-12.14a52.26 52.26 0 011.58-9.22s.9-4 2.48-9.43a67 67 0 002-12.14s6.08-7.64 5.41-13.71.45-15.73 2.7-13.71 3.61 9 3.61 9l3.38 18.88s5.86 18.65 5.18 21.35 1.81 12.58 1.81 12.58-.45 11.46.9 14.16 0 8.09 0 8.09 4.51 11.46 3.83 13.71.07 15.5.07 15.5l1.29 9.89s1.35 7.87 0 12.14 5.9 60 7.91 64.5-1.15 13.7-1.15 13.7-2.48 7.42 8.11 13l3.16 12.81.23.07c0 .45.07.92.14 1.38.89 5.92 5.38 12 21.95 6.87 0 0 5-1.74 6.31-5.36s11.72-7.45 11.72-7.45 9.12-10.41 1.13-17.75a7.42 7.42 0 00-8.39-1.64 15.87 15.87 0 011.4-8.48c2.48-5.16-2.48-16.18-4.05-18s2-10.11 2-10.11a54.93 54.93 0 00-2.48-6.74c-.9-1.58-1.8-42.48-1.8-42.48s-1.8-22.47-6.54-31.91c0 0 1.13-6.74 1.58-9.66s-.45-51.46-.45-51.46 9.69-16 2.93-39.78a66.88 66.88 0 01.9-10.34c.9-4.94-1.35-13.71-1.35-13.71s2.48-12.36-2.25-16c-2-1.48-2.84-4.87-3.2-8.35 0-.44-.07-.88-.1-1.31 6.32-1.67 10.94-3.52 11.41-5.39 1.58-6.29-8.79-36-8.79-36L480 454.33s4.74-16.63 2.71-21.8 4.51-18.21 4.51-18.21-2.94-8.53-.91-10.78a2.38 2.38 0 00.36-.63l4.83 3.55s8.12 2.25 10.08 4.49 10.66 1.58 10.66 1.58 8.55-.25 14 .84a8 8 0 014 1.63c2.71 2.93 11.73 4 13.53 2.7.68-.52 2-.51 3.49-.31a30.88 30.88 0 014.85 1.21l30 3.82a24.46 24.46 0 001.94-1.79l.39.3c24.27 17.67 25.18.37 25.18.37s8.56 2.24 8.56-3c-.03-4.17-22.52-13.76-32.28-17.72zm-223 71.74l-.64-.05.43-.69-2.39-1.12-.51-.24.9-1.29L337 454.76a8.71 8.71 0 01-3.61-4c-1.35-2.92-7.21-3.59-7.21-3.59l-6.65-5.85s7.78-9.44 10-9.44 6.09-2.79 6.09-2.79l9.51-6.42.18.23s8.34 10.33 9 12.13 8.11 9.66 8.11 9.66 7.9 9.89 11.5 20.9a29.37 29.37 0 004.54 4.95c-6.18.68-13.56 2-13.56 2z"
        transform="translate(-146.34 -49.15)"
        fill="url(#Emails_svg__a)"
      />
      <path
        d="M289.66 271.63c-1.14 14.1 2.95 28.53 2.95 28.53s-43.3 2.68-40.18-3.12a8.41 8.41 0 00.71-3 63.57 63.57 0 00-.22-10.73c-.13-1.53-.29-3.1-.46-4.7-.58-5.23-1.35-10.61-2-14.84-.11-.65-.21-1.28-.3-1.87-.61-3.73-1.06-6.19-1.06-6.19s33.29-9.79 43.36-6.45c2.84.94 3.84 2.91 1.73 6.45a35.46 35.46 0 00-4.37 14.44c-.11.52-.16 1-.16 1.48zM471.81 371.93c0 5.24-8.48 3-8.48 3s-.9 17.19-24.93-.37c-.61-.45-1.24-.92-1.89-1.42l-1-19.42v-1.12s1.7.67 4.37 1.75c9.66 3.95 31.93 13.5 31.93 17.58z"
        fill="#be6f72"
      />
      <path
        d="M250.84 760.41c-3.35 2-2.45 8.71-3.12 12.72s-17 5.14-21.21 4.92c-2.69-.15-5.12-7.75-6.53-13.28-.81-3.18-1.29-5.68-1.29-5.68s27-10.73 29.25-16.09c1.42-3.42 5.41-4.2 8.09-4.31a16.83 16.83 0 012.62.07c7.15 13.84-4.47 19.64-7.81 21.65zM365.34 770.68s-10.26 3.79-11.6 7.4-6.25 5.33-6.25 5.33c-16.41 5.11-20.85-.95-21.73-6.83a21.78 21.78 0 01.52-8.13l24.11-10.08s3.27-5.06 7.68-6.92a7.33 7.33 0 018.39 1.6c7.91 7.29-1.12 17.63-1.12 17.63z"
        fill="#464a5f"
      />
      <path
        d="M256.03 738.69l-.51 11.24c-7.13 4.9-8 14.5-8 14.5a35.25 35.25 0 01-27.51.34c-.81-3.18-1.29-5.68-1.29-5.68s27-10.73 29.25-16.09c1.39-3.42 5.38-4.15 8.06-4.31zM358.42 754.39c-8.48 27.1-29.61 22.94-32.66 22.19a21.78 21.78 0 01.52-8.13l24.11-10.08s3.27-5.06 7.68-6.92a13.72 13.72 0 00.35 2.94z"
        opacity={0.1}
      />
      <path
        d="M359.54 743a15.76 15.76 0 00-1.12 10.05c-9.15 29.24-33 22.09-33 22.09l-3.13-12.72c-10.49-5.58-8-12.94-8-12.94s3.13-9.16 1.14-13.62-9.18-59.82-7.84-64.06 0-12.05 0-12.05l-1.27-9.83s-.74-13.16-.07-15.4-3.79-13.61-3.79-13.61 1.34-5.36 0-8-.89-14.06-.89-14.06-2.46-9.82-1.79-12.5-5.13-21.2-5.13-21.2l-3.35-18.75s-1.34-6.92-3.58-8.93-3.34 7.59-2.67 13.62-5.39 13.57-5.39 13.57a66.17 66.17 0 01-2 12.06c-1.56 5.35-2.45 9.37-2.45 9.37a51.9 51.9 0 00-1.57 9.15c-.22 4.24-2.45 12.06-2.45 12.06s1.56 6.69-1.12 8.47-1.86 15.18-1.86 15.18l-1.26 12.06s1.78 3.35 1.11 5.35-5.35 17-5.35 17l-5.4 43.49-1.79 39.74c-7.13 4.9-8 14.5-8 14.5a35 35 0 01-28.27 0s-1.2-12-3.87-14.5-8.93-15.4-5.58-15.4 9.82-8.27 9.82-8.27c-6.47-12.27-1.12-63.16.89-66.51s-.89-19.2-.89-19.2 1.78-7.59 1.05-10.71 4.08-20.31 7.88-25.67-3.27-20.54-3.27-20.54c-7.95-17.63-3.65-53.79-1.57-56.47s0-9.37 0-9.37 1.94-2 .59-2.9 0-8.7 0-8.7-.23-5.36 2.45-8a7.84 7.84 0 001.53-4.32 51.22 51.22 0 000-9.74l30.8-18.08 38.61-3.13 47.32 14.73a56.16 56.16 0 000 10c.35 3.45 1.22 6.82 3.16 8.29 4.69 3.58 2.23 15.85 2.23 15.85s2.23 8.71 1.34 13.62a66.65 66.65 0 00-.89 10.27c6.69 23.66-2.91 39.51-2.91 39.51s.9 48.21.45 51.11-1.56 9.59-1.56 9.59c4.69 9.38 6.47 31.7 6.47 31.7s.89 40.62 1.79 42.19a54.63 54.63 0 012.45 6.7s-3.57 8.25-2 10 6.45 12.71 4 17.86z"
        fill="#5f5d7e"
      />
      <path
        d="M294.14 255.75a35.46 35.46 0 00-4.37 14.44c-.06.48-.1 1-.14 1.44-4.48 3.42-11.39 1.69-17.47 1.69-2.14 0-1.63-3.15-3.63-3.62-7.17-1.73-14.51.32-18.12-5.89-.11-.65-.21-1.28-.3-1.87-.61-3.73-1.06-6.19-1.06-6.19s33.29-9.79 43.36-6.45c2.84.94 3.84 2.91 1.73 6.45z"
        opacity={0.1}
      />
      <path
        d="M300.15 249.07a26.68 26.68 0 01-26.68 26.68 27.39 27.39 0 01-6.24-.73 26.69 26.69 0 1132.92-25.95z"
        fill="#be6f72"
      />
      <path
        d="M286.4 287.72c-10.32-3.17-24.51 2.16-33.29 6.36a63.57 63.57 0 00-.22-10.73c5.9-4.93 15.21-8.57 28.21-2 1.19.61 2.41 1.3 3.67 2.07z"
        opacity={0.1}
      />
      <path
        d="M286.4 288.39c-13.84-4.26-34.65 6.8-40 9.88l-1-3.4-.29-.95s11.37-24.39 36.06-11.9c1.19.61 2.41 1.3 3.67 2.07z"
        fill={color}
      />
      <path
        d="M345 486.28c-14.81 3.94-39.18 6.89-40.59 6.73-2-.22-19.87 3.8-19.87 3.8.67-2.24-5.35-26.34-5.35-26.34l-4.25 27.68s-38.74-4-46.68-5.66a51.22 51.22 0 000-9.74l30.8-18.08 38.61-3.13 47.32 14.73a56.16 56.16 0 00.01 10.01z"
        opacity={0.1}
      />
      <path
        d="M356.19 479.62c-1.53 6.23-49.78 12.23-51.78 12.05s-19.87 3.8-19.87 3.8c.67-2.24-5.35-26.34-5.35-26.34l-4.25 27.72s-45.53-4.69-48-6-7.37-3.34-7.37-3.34 3.12-16.52 2-18.75 4.24-8.49 4.24-8.49l2.72-8.66 8.21-26.16a12.61 12.61 0 01-1.38-.91 27.88 27.88 0 01-5.31-5.56c-3.54-11.01-11.39-20.83-11.39-20.83s-7.36-7.81-8-9.6-8.93-12.05-8.93-12.05l-24.77-31.92 13.61-14.73s1.34-3.57 4-3.79 3.13-6 3.13-6c0-12.5 13.39-11.83 13.39-11.83s4.91-.22 7.58-2.23 26.35-6.26 26.35-6.26v-3.79c19.86-26.34 45-9.22 45-9.22l5.23 9s16.73-2.45 18.51-.22 8.93 4.23 8.93 4.23c14.29-7.58 18.52 4.25 19.64 8.49s8.49 8.7 8.49 8.7-7.6 38.17-9.61 40.4.9 10.72.9 10.72-6.45 12.92-4.45 18.04-2.68 21.66-2.68 21.66l12.5 36.16s10.27 29.46 8.71 35.71z"
        fill="#464a5f"
      />
      <path
        d="M295.27 297.04c-12.49-19.2-50.23 4-50.23 4v-3.79c19.86-26.34 45-9.22 45-9.22z"
        opacity={0.1}
      />
      <path
        d="M286.4 288.39c-13.84-4.26-34.65 6.8-40 9.88l-1.32.77v-3.79l.29-.38c12.38-16.11 26.74-15.54 35.77-12.85 1.19.61 2.41 1.3 3.67 2.07z"
        opacity={0.1}
      />
      <path
        d="M295.27 295.7c-12.49-19.19-50.23 4-50.23 4v-3.79c19.86-26.34 45-9.22 45-9.22z"
        fill="#464a5f"
      />
      <path
        d="M285.88 440.11l-6.69 29 1.28 5.25s7.19-30.23 5.41-34.25zM334.32 391.9s-3.35 27-25.23 34.82c0 0 18.08-16.29 25.23-34.82zM243.66 416.01s26.56-11.39 26.56-6.7-26.56 6.7-26.56 6.7zM300.39 393.02s18.53-13.17 22.54-9.82-22.54 9.82-22.54 9.82zM438.4 374.57c-.61-.45-1.24-.92-1.89-1.42l-1-19.42v-1.12s1.7.67 4.37 1.75c3.06 4.54 6.26 12.49-1.48 20.21z"
        opacity={0.1}
      />
      <path
        d="M436.1 376.05l-29.69-3.79a31.08 31.08 0 00-4.8-1.2c-1.42-.2-2.78-.21-3.46.3-1.78 1.34-10.71.23-13.39-2.68a8 8 0 00-4-1.62c-5.41-1.07-13.87-.83-13.87-.83s-8.61.67-10.56-1.56-10-4.46-10-4.46l-8.48-6.26 5.35-38.83 7.6 1.78 9.14 6.92s4.47 1.12 5.36 2.46 6.25 3.57 6.25 3.57 4.46 1.78 6.92 2.68 7.59 2 7.59 2l9.15 1.57a20.61 20.61 0 0110.5 2.9c5.12 3.13 30.35 11.61 30.35 11.61s14.6 13.39.04 25.44z"
        fill="#464a5f"
      />
      <path
        d="M405.66 364.7a13.83 13.83 0 01-4 5.69c-1.42-.2-2.78-.21-3.46.3-1.78 1.34-10.71.23-13.39-2.67a7.91 7.91 0 00-4-1.63c-.69-5-2.51-25.45 14.73-24.12 19.55 1.5 10.12 22.43 10.12 22.43z"
        opacity={0.1}
      />
      <path
        d="M405.66 365.37a13.83 13.83 0 01-4 5.69c-1.42-.2-2.78-.21-3.46.3-1.78 1.34-10.71.23-13.39-2.68a8 8 0 00-4-1.62c-.69-4.95-2.51-25.45 14.73-24.12 19.55 1.5 10.12 22.43 10.12 22.43z"
        fill="#5f5d7e"
      />
      <ellipse cx={431.49} cy={362.94} rx={1} ry={1.67} fill={color} />
      <ellipse cx={433.5} cy={363.61} rx={1} ry={1.67} fill={color} />
      <ellipse cx={435.51} cy={364.24} rx={1} ry={1.67} fill={color} />
      <path
        d="M361.02 326.7s1.67 1.17-1.42 4.77 1.42-4.77 1.42-4.77zM377.01 335.49s4.52 16.48.67 19.33-.67-19.33-.67-19.33z"
        opacity={0.1}
      />
      <circle cx={247.27} cy={498.59} r={1.67} fill={color} />
      <circle cx={327.01} cy={496.81} r={1.67} fill={color} />
      <path
        d="M236.55 537.85s17 15.62 39.29 0c0 0-24.71 5-39.29 0zM299.27 542.56s28.8 1.79 35.94-4.68-35.94 4.68-35.94 4.68zM230.3 578.72c.45 1.12 10.05 29.47 23.66 29.69zM346.15 549.93s-12.28 52.92-26.12 59.82zM214.66 737.65s25.89 5.35 22.77 7.81-18.77 1.78-18.77 1.78zM338.56 726.71s9.15 10.49 12.27 4.69-12.27-4.69-12.27-4.69zM322.04 749.03c2-.22 10.05 1.12 16.52 0s-15-3.56-17.64.45 1.12-.45 1.12-.45zM297.85 238.23a6.4 6.4 0 01-1 1.28c-.89.88-2 1.49-2.84 2.44-1.7 1.95-1.55 4.66-1.62 7.35a15.49 15.49 0 01-.33 3.22 9 9 0 01-6.4 6.53 13.09 13.09 0 00-5.49-5.61 2.31 2.31 0 00-1.38-.38 2.39 2.39 0 00-1.38 1 17.5 17.5 0 00-3.83 9.14 17.89 17.89 0 00.12 4.9c.2 1.12 1.5 3.55 1 4.59-.78 1.56-4.67 2-7.48 2.34-1 .11-1.81.21-2.34.33q-5.93 1.32-11.74 3.1l-.72.2c-.66-6-1.6-12.27-2.32-16.71a26.68 26.68 0 1147.74-23.71z"
        opacity={0.1}
      />
      <path
        d="M276.78 253.38a2.36 2.36 0 011.38-1 2.3 2.3 0 011.38.37 13.23 13.23 0 015.5 5.61 9 9 0 006.37-6.53c.83-3.55-.44-7.81 1.95-10.58.81-.94 1.95-1.55 2.84-2.43a8.15 8.15 0 002.14-4.74 11.64 11.64 0 00-4.12-10.33c-1.66-1.36-3.73-2.28-5-4-1.8-2.56-1.32-6.19-3-8.82-2.13-3.31-6.87-3.78-10.69-2.8s-7.34 3-11.24 3.55c-3.1.42-6.23-.16-9.35-.36s-6.46 0-9 1.82c-3.16 2.22-4.44 6.3-7.2 9s-7.18 4-9.6 7.16a8.81 8.81 0 00-1.17 8.3c1 2.55 3.16 4.61 3.65 7.3.6 3.19-1.29 6.79.34 9.6 2.2-.26 4.19 1.64 4.83 3.76s.29 4.4 0 6.59-.6 4.5.18 6.57a2.67 2.67 0 00.77 1.17 3.89 3.89 0 001.91.54 8.72 8.72 0 015.2 2.8 10.82 10.82 0 001.81 1.92c1.67 1.14 3.92.56 5.86 0q5.81-1.77 11.74-3.1c2.07-.47 8.78-.58 9.83-2.67.52-1-.78-3.47-1-4.59a17.67 17.67 0 013.7-14z"
        fill="#464a5f"
      />
      <path
        d="M232.45 450.91c-.79.84-2.2 1-3.89.63l8.21-26.16a12.61 12.61 0 01-1.38-.91c3.63-.39 6.81-.56 7.78-.09 2.59 1.26-7.62 23.27-10.72 26.53z"
        opacity={0.1}
      />
      <path
        d="M231.79 450.24c-3.13 3.27-15.49-4.27-17.13-7.39-.89-1.65-2.83-2.44-4.45-2.82a13.64 13.64 0 00-2.58-.35l8.71-14.32 2.8.24 2.05.18s18.75-3.35 21.35-2.09-7.66 23.29-10.75 26.55z"
        fill="#be6f72"
      />
      <path
        d="M219.1 425.62l-8.93 14.43a13.64 13.64 0 00-2.58-.35l8.71-14.32z"
        opacity={0.1}
      />
      <path
        fill={color}
        d="M218.89 424.88l-13.73 22.18-3.45-2.29-1.99-1.31 12.22-21.84 4.58 2.14 2.37 1.12z"
      />
      <path
        opacity={0.1}
        d="M216.52 423.76l-14.81 21.01-1.99-1.31 12.22-21.84 4.58 2.14z"
      />
      <path
        d="M216.91 422.25l-16.52 23.44-28.79-16.29-23-17.31-.82-.34c-26.36-11.26-2.31-38.15-2.31-38.15a2.7 2.7 0 01.52-1.17c2.26-3.46 11.09-11.78 11.09-11.78l19.87-16.07 8-2.45 18.53 32.81-11.38 7.71s-3.8 2.78-6 2.78-9.94 9.37-9.94 9.37l6.59 5.81s5.8.67 7.14 3.56a8.64 8.64 0 003.58 4z"
        fill="#464a5f"
      />
      <path
        d="M162.89 384.31s17.19-2.87 18.08-1.66-18.08 1.66-18.08 1.66zM162.89 393.02a26.85 26.85 0 007.15.89c4.24 0-7.15-.89-7.15-.89zM148.46 411.75c-26.36-11.26-2.31-38.15-2.31-38.15a2.7 2.7 0 01.52-1.17c4.87-.81 12.27 1.13 13.38 19.89.66 11.22-4.78 16.79-11.59 19.43z"
        opacity={0.1}
      />
      <path
        d="M147.79 411.75c-26.36-11.26-2.31-38.15-2.31-38.15a2.7 2.7 0 01.52-1.17c4.87-.81 12.27 1.13 13.38 19.89.66 11.22-4.78 16.79-11.59 19.43z"
        fill="#5f5d7e"
      />
      <g opacity={0.1}>
        <path d="M231.47 253.31a4.8 4.8 0 00.48 1.18 3.58 3.58 0 011.53.16 4.88 4.88 0 00-2.01-1.34zM237.6 271.78l-.54-.07a2.22 2.22 0 00.64.87 3.89 3.89 0 001.91.54 8.54 8.54 0 012.51.79 8.75 8.75 0 00-4.52-2.13zM294.22 223.77c-1.66-1.36-3.73-2.28-5-4-1.8-2.56-1.32-6.19-3-8.82a6.51 6.51 0 00-2.89-2.41 6.12 6.12 0 01.88 1.07c1.7 2.63 1.22 6.26 3 8.82 1.24 1.75 3.31 2.67 5 4a11.64 11.64 0 014.12 10.33 8.15 8.15 0 01-2.14 4.74c-.89.88-2 1.49-2.84 2.43-2.38 2.77-1.12 7-1.95 10.58a9 9 0 01-5.38 6.2 13.55 13.55 0 011 1.67 9 9 0 006.37-6.53c.83-3.55-.44-7.81 1.95-10.58.81-.94 1.95-1.55 2.84-2.43a8.15 8.15 0 002.14-4.74 11.64 11.64 0 00-4.1-10.33zM277.53 251.43a2.3 2.3 0 00-1.38-.37 2.36 2.36 0 00-1.38 1 17.67 17.67 0 00-3.7 14c.19 1.13 1.49 3.56 1 4.59-1.05 2.09-7.76 2.2-9.83 2.67q-5.93 1.32-11.74 3.1a9.09 9.09 0 01-4.77.53 4.89 4.89 0 00.92.84c1.67 1.14 3.92.56 5.86 0q5.81-1.77 11.74-3.1c2.07-.47 8.78-.58 9.83-2.67.52-1-.78-3.47-1-4.59a17.67 17.67 0 013.7-14 2.36 2.36 0 011.38-1 2.25 2.25 0 011.37.36 13.36 13.36 0 00-2-1.36z" />
      </g>
      <ellipse
        cx={86.6}
        cy={749.25}
        rx={33.42}
        ry={5.65}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M93.5 677.9s6.14 8-2.83 20.14-16.37 22.35-13.38 29.9c0 0 13.54-22.5 24.55-22.82s3.82-13.69-8.34-27.22z"
        fill={color}
      />
      <path
        d="M93.5 677.9a10 10 0 011.26 2.52c10.74 12.63 16.47 24.41 6.14 24.7-9.63.28-21.17 17.48-23.93 21.83.09.33.2.66.32 1 0 0 13.54-22.5 24.55-22.82s3.82-13.7-8.34-27.23z"
        opacity={0.1}
      />
      <path
        d="M104.91 688.13c0 2.82-.32 5.11-.71 5.11s-.71-2.29-.71-5.11.4-1.5.79-1.5.63-1.32.63 1.5z"
        fill="#ffd037"
      />
      <path
        d="M108.82 691.5c-2.48 1.35-4.64 2.17-4.83 1.83s1.68-1.72 4.16-3.07 1.5-.37 1.69 0 1.46-.11-1.02 1.24z"
        fill="#ffd037"
      />
      <path
        d="M61.09 677.9s-6.14 8 2.83 20.14 16.36 22.35 13.37 29.9c0 0-13.53-22.5-24.54-22.82s-3.78-13.69 8.34-27.22z"
        fill={color}
      />
      <path
        d="M61.09 677.9a10 10 0 00-1.26 2.52c-10.74 12.63-16.47 24.43-6.17 24.7 9.62.28 21.17 17.48 23.93 21.83a9.57 9.57 0 01-.33 1s-13.53-22.5-24.54-22.82-3.75-13.7 8.37-27.23z"
        opacity={0.1}
      />
      <path
        d="M49.66 688.13c0 2.82.32 5.11.71 5.11s.71-2.29.71-5.11-.4-1.5-.79-1.5-.63-1.32-.63 1.5z"
        fill="#ffd037"
      />
      <path
        d="M45.77 691.5c2.48 1.35 4.64 2.17 4.82 1.83s-1.67-1.72-4.15-3.07-1.5-.37-1.69 0-1.46-.11 1.02 1.24z"
        fill="#ffd037"
      />
      <path
        d="M51.66 726.85s17.16-.53 22.33-4.21 26.39-8.08 27.68-2.17 25.78 29.36 6.41 29.52-45-3-50.17-6.16-6.25-16.98-6.25-16.98z"
        fill="#5f5d7e"
      />
      <path
        d="M108.4 747.98c-19.37.15-45-3-50.17-6.17-3.93-2.39-5.5-11-6-14.94h-.58s1.09 13.84 6.25 17 30.8 6.32 50.17 6.16c5.59 0 7.52-2 7.42-5-.83 1.82-2.93 2.91-7.09 2.95z"
        opacity={0.2}
      />
      <ellipse
        cx={705.22}
        cy={772.9}
        rx={35.2}
        ry={5.95}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M681.59 745.26s20.07-.62 26.12-4.93 30.89-9.45 32.39-2.54 30.17 34.37 7.5 34.55-52.66-3.53-58.7-7.21-7.31-19.87-7.31-19.87z"
        fill="#5f5d7e"
      />
      <path
        d="M748.01 769.93c-22.67.19-52.67-3.53-58.71-7.21-4.6-2.8-6.43-12.85-7-17.49h-.67s1.27 16.19 7.31 19.87 36 7.39 58.7 7.21c6.55 0 8.81-2.38 8.68-5.83-.95 2.11-3.44 3.37-8.31 3.45z"
        opacity={0.2}
      />
      <ellipse cx={834.62} cy={795.21} rx={38.34} ry={6.48} fill={color} />
      <path
        d="M850.47 784.61a11.23 11.23 0 003.66-5.52c.47-2.19-.46-4.81-2.56-5.62-2.34-.89-4.85.73-6.75 2.38s-4.08 3.51-6.57 3.16a10 10 0 003.09-9.35 3.85 3.85 0 00-.86-1.9c-1.3-1.39-3.66-.8-5.22.3-5 3.49-6.34 10.22-6.37 16.29-.5-2.19-.08-4.47-.09-6.71s-.63-4.73-2.52-5.94a7.64 7.64 0 00-3.84-.9c-2.23-.08-4.71.14-6.24 1.77-1.89 2-1.4 5.43.25 7.66s4.15 3.62 6.45 5.16a14.37 14.37 0 014.61 4.4 4 4 0 01.34.79h14a38.7 38.7 0 008.62-5.97z"
        fill={color}
      />
    </svg>
  );
};

SvgEmails.propTypes = {
  color: PropTypes.string
};
SvgEmails.defaultProps = {
  color: "primary"
};
const MemoSvgEmails = React.memo(SvgEmails);
export default MemoSvgEmails;
