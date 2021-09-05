import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgInboxCleanup = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1000 841.56"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="InboxCleanup_svg__a"
          x1={471.84}
          y1={810.65}
          x2={471.84}
          y2={179}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="InboxCleanup_svg__b"
          x1={911.16}
          y1={831.52}
          x2={911.16}
          y2={366.39}
          gradientTransform="matrix(-1 0 0 1 1455 0)"
          xlinkHref="#InboxCleanup_svg__a"
        />
        <linearGradient
          id="InboxCleanup_svg__c"
          x1={571.84}
          y1={833.11}
          x2={571.84}
          y2={628.9}
          xlinkHref="#InboxCleanup_svg__a"
        />
      </defs>
      <path
        d="M731.61 1.11c-46.91-2.27-94.63-1.89-139.93 9.3S503.3 44.63 477.52 79.95c-14.76 20.22-23.57 43.9-40.76 62.5-29.82 32.25-78.56 43.33-123.54 54.45-105.63 26-211.85 63.57-288.47 133.95-11 10.09-21.72 21.6-24.21 35.55-3.82 21.45 13 41.52 31.66 55.25s40.74 24.62 54.55 42.43c17.61 22.71 18.6 52.72 13.6 80s-15.29 53.82-18 81.4c-.67 6.8-.83 13.89 2.12 20.18 3.91 8.34 12.6 14 21.12 18.76a344 344 0 0096.68 36.47c58.37 12.51 119.24 10.16 179 15.3s122 19.52 164 58.06c25.76 23.63 49 58.1 85.73 56.93 20.58-.65 38.76-13.23 59.29-14.63 23.11-1.58 44 11 65.79 18.17 30.95 10.2 66.79 9.21 95.81-4.85s50.09-41.6 51.79-71.2c1.66-29-14.06-56.13-23.14-84-29.78-91.31 12.11-187.8 53.76-275.28s84.63-183.25 56.92-275.09C959.05 17.78 834.44 6.09 731.61 1.11z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M236.82 538.89s-34.66-19-44.93-48.17a59.9 59.9 0 00-23.06-30.07 100.75 100.75 0 00-16.21-8.76"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M146 433.56c3.28 3.3 6.81 18.79 6.81 18.79s-15.47-3.63-18.75-6.92A8.42 8.42 0 01146 433.56zM174.06 442.01c1 4.55-4.5 19.47-4.5 19.47s-11-11.45-12-16a8.42 8.42 0 1116.47-3.47zM204.64 473.64c-1.47 4.41-13.71 14.54-13.71 14.54s-3.73-15.45-2.26-19.86a8.43 8.43 0 0116 5.32zM222.4 502.78c-.7 4.59-11.06 16.65-11.06 16.65s-6.28-14.59-5.58-19.19a8.42 8.42 0 0116.64 2.54zM157.66 474.58c4.65-.05 18-8.62 18-8.62s-13.57-8.26-18.22-8.21a8.42 8.42 0 00.19 16.83zM178.86 508.4c4.42-1.44 14.62-13.62 14.62-13.62s-15.42-3.82-19.84-2.38a8.42 8.42 0 005.22 16zM204 538.45c4.6-.67 16.71-11 16.71-11s-14.56-6.37-19.16-5.7a8.44 8.44 0 102.45 16.7z"
        fill={color}
      />
      <path
        d="M264.07 457.16s-24-31.43-21.57-62.24a59.9 59.9 0 00-8.9-36.83 100.75 100.75 0 00-11.27-14.57"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M223.73 324.08c1.66 4.34-1.38 19.94-1.38 19.94s-12.68-9.58-14.34-13.92a8.42 8.42 0 1115.72-6zM245.93 343.16c-1 4.55-12 16-12 16s-5.43-14.93-4.47-19.48a8.42 8.42 0 1116.47 3.5zM261.08 384.47c-3.13 3.44-18.43 7.74-18.43 7.74s2.85-15.63 6-19.07a8.42 8.42 0 1112.45 11.33zM265.51 418.31c-2.5 3.92-16.85 10.74-16.85 10.74s.17-15.89 2.67-19.81a8.42 8.42 0 0114.18 9.06zM217.75 366.3c4.27 1.83 20-.58 20-.58s-9.07-13.05-13.34-14.88a8.42 8.42 0 00-6.64 15.47zM223.43 405.78c4.62.47 18.89-6.53 18.89-6.53s-12.56-9.74-17.18-10.21a8.42 8.42 0 00-1.71 16.74zM234.22 443.45c4.48 1.25 19.72-3.25 19.72-3.25s-10.73-11.72-15.21-13a8.42 8.42 0 10-4.51 16.22z"
        fill={color}
      />
      <path
        d="M706.78 498.29s-4.85-39.24 12.78-64.62a59.9 59.9 0 0010.89-36.29 100.75 100.75 0 00-2.38-18.27"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M739.08 363.04c-.76 4.59-11.25 16.52-11.25 16.52s-6.11-14.67-5.35-19.25a8.42 8.42 0 0116.61 2.74zM748.62 390.7c-3.13 3.44-18.42 7.75-18.42 7.75s2.84-15.63 6-19.07a8.42 8.42 0 0112.45 11.32zM740.86 434.02c-4.44 1.39-19.81-2.61-19.81-2.61s10.35-12.06 14.78-13.45a8.42 8.42 0 015 16.06zM727.61 465.47c-4.14 2.12-20 .77-20 .77s8.16-13.64 12.3-15.76a8.424 8.424 0 117.67 15zM712.62 396.47c2.76 3.74 17.54 9.58 17.54 9.58s-1.24-15.84-4-19.58a8.42 8.42 0 00-13.54 10zM697.59 433.44c3.75 2.74 19.6 3.89 19.6 3.89s-5.93-14.74-9.68-17.48a8.42 8.42 0 00-9.92 13.6zM687.91 471.39c3.24 3.34 18.66 7.14 18.66 7.14s-3.35-15.53-6.59-18.87a8.42 8.42 0 10-12.08 11.72z"
        fill={color}
      />
      <path
        fill="url(#InboxCleanup_svg__a)"
        d="M471.84 179L197.65 434.47v376.18h548.37V434.47L471.84 179z"
      />
      <path
        fill="#e8eaf1"
        d="M740.15 803.89H203.52V435.76l268.32-250 268.31 250v368.13z"
      />
      <path opacity={0.1} d="M203.89 435.99h534.2v367.37h-534.2z" />
      <rect
        x={666.21}
        y={92.66}
        width={79.2}
        height={79.2}
        rx={11.85}
        ry={11.85}
        transform="rotate(-180 655.81 117.655)"
        fill={color}
      />
      <rect
        x={582.21}
        y={190.66}
        width={79.2}
        height={79.2}
        rx={11.85}
        ry={11.85}
        transform="rotate(-180 571.81 215.655)"
        fill={color}
      />
      <rect
        x={798.21}
        y={52.66}
        width={79.2}
        height={79.2}
        rx={11.85}
        ry={11.85}
        transform="rotate(-180 787.81 77.655)"
        fill={color}
      />
      <path
        d="M395.95 529.52h-18.48v-16.8a11.85 11.85 0 00-11.85-11.85h-55.5a11.85 11.85 0 00-11.85 11.85v55.5a11.85 11.85 0 0011.85 11.85h18.48v16.8a11.85 11.85 0 0011.85 11.85h55.5a11.85 11.85 0 0011.85-11.85v-55.5a11.85 11.85 0 00-11.85-11.85zM633.56 492.44h-55.5a11.85 11.85 0 00-11.85 11.85v26.06h-27.75a11.85 11.85 0 00-11.85 11.85v26.91h-26.07a11.85 11.85 0 00-11.85 11.85v55.5a11.85 11.85 0 0011.85 11.85H556a11.85 11.85 0 0011.85-11.85v-26.9H594a11.85 11.85 0 0011.85-11.85v-26.06h27.75a11.85 11.85 0 0011.81-11.87v-55.5a11.85 11.85 0 00-11.85-11.84z"
        fill={color}
        opacity={0.5}
      />
      <path
        d="M454.24 440.94a11.49 11.49 0 006.78 6.32c1.34.43 2.76.58 4.13.93 6.53 1.62 11.15 7.26 17.09 10.38a3.29 3.29 0 001.58.49h.2a1.94 1.94 0 00.37 0 3.16 3.16 0 001.67-.7l.27-.2a20 20 0 01.29 8.08c-2.36 0-17.69.94-15.59 19 2.27 19.6 25 47 25 47s15.9 16.24 10.79 71.67l-.57 26.88s6.11-.92 13.9-1.84q.27.54.55 1.06a41.84 41.84 0 008.39 10.37L542 671.16s1.11 2 2.75 5.16c.15 6.51-3.89 12.2-3.89 12.2-25 7.28-35.21 33.59-35.21 33.59s-14.1 8.45-17.15 17.89c-6 4.82-5.55 18-5.55 18s21 11.2 36.35 17.36a25.3 25.3 0 005.53 1.52l-3.41 7c-3.56 1.28-3.82 18.87-3.82 18.87s37.48 26.88 48.84 28.56 21-6.16 9.09-11.76c-9.61-4.51-20.32-21.73-24.12-28.26 4.76-6.52 19.76-27.65 20.71-36.13 1.14-10.08 15.33-18.48 15.33-18.48 20.45-21.84 6.82-47.59 5.11-61 0-.26-.07-.54-.12-.83a147 147 0 00-4.81-17.21c2.23-14.09 4-36.1 5.09-50.63 4.51 1.45 8.93 3.17 8.93 3.17 8.29-16.83-19.87-86.14-28-105.34 4.73-1.56 12.88-4 24.57-6.64 19.88-4.48 21-14.56 21-14.56l15.33-41.43c-1.31.58-3.31.56-5.65.15v-1.12c.12-3.93.49-10.21 1.65-11.35 0 0-3.77 0-8.35-.41v-.56l2.06-25.35s-2.84-28-12.49-24.08c-7.75 3.15-6.72 28.3-6 38.1a17 17 0 002.15 7.13l.65 1.15.45.79a9.54 9.54 0 01-1.22-.7v8.67c-1.07-.51-1.7-.83-1.7-.83.57 9.52-11.36 41.43-11.36 41.43s-21-2.24-27.83 2.24c-5 3.29-11.52-3.07-14.65-6.69L567 438.8a41.89 41.89 0 01-5.23-1.28c.07-.39.14-.8.22-1.22.74-4 2.08-9.67 3.88-10.38a63.72 63.72 0 00-8.07-3.7c.07-.32.13-.66.21-1 1.06-5.6 2.73-17.7-.66-26.05-4.54-11.2-6.25-33-14.77-28-6.76 4-7.08 28.1-6.93 37.87a16.8 16.8 0 001.94 7.59l3.28 6.22.45.86-.45.08v7.65c-1.44-.91-2.27-1.49-2.27-1.49-.29 10.76-7.41 25.11-14.37 36.66l-3.54-2.61-.87-.62a2.16 2.16 0 010-.34s-1.46-.41-3.76-.88c-2.86-5.43-4.46-12-5.35-17.42-.09-.57-.18-1.12-.26-1.66a22.59 22.59 0 002-9.27A23.06 23.06 0 00493 407.2c.7-.77 1-1 1.22-1h.15c.35 0 .83.16 2.57-.69s3.83-2.18 3.82-4.16c0-1.45-1.15-2.64-2.37-3.46-2.93-2-3-5.35-5.74-5.1a3.62 3.62 0 00-1.55.21c-2.5.82-4.67 2.38-7.1 3.38a16.82 16.82 0 01-5.34 1.22 22.09 22.09 0 00-3.5.28 10.27 10.27 0 00-2.64 1.07c-5.13 2.8-11.05 7.06-12.7 12.61-1.54 5.2.59 11.94-3.38 15.68a14.66 14.66 0 00-2 1.91 6.63 6.63 0 00-1 2.55 15.27 15.27 0 00.8 9.24zm103.83 269.25c.22 2.68-.29 4.58-1.86 5.2-8.52 3.36-18.17 34.15-18.17 34.15l-6.46 13.33a171.88 171.88 0 01-14.68-12.43l.7-4.83s18.17-13.44 19.31-17.36c.91-3.15 15.6-14.03 21.16-18.06z"
        transform="translate(-100 -29.22)"
        fill="url(#InboxCleanup_svg__b)"
      />
      <path
        d="M470.76 472.07s38.62 89.39 29.24 108.71c0 0-15.45-6.07-17.66-5s-24.28-115.32-24.28-115.32z"
        fill="#575988"
      />
      <path
        d="M470.76 472.07s38.62 89.39 29.24 108.71c0 0-15.45-6.07-17.66-5s-24.28-115.32-24.28-115.32z"
        opacity={0.05}
      />
      <path
        d="M449.79 756.78s13.24 24.83 24.83 30.35 2.21 13.24-8.83 11.59-47.45-28.14-47.45-28.14.25-17.34 3.71-18.6 27.74 4.8 27.74 4.8zM415 716.5s18.76 18.76 27 20.42-7.17 12.69-22.07 6.62-35.31-17.1-35.31-17.1-.55-17.66 8.83-19.31S415 716.5 415 716.5z"
        fill="#575988"
      />
      <path
        d="M492.28 563.11s-3.86 67.32-8.83 76.7-23.73 38.07-23.73 38.07-21.52 15.45-22.62 19.31-18.76 17.1-18.76 17.1l-1.1 7.72s-29.24-1.66-27.59-11.59 17.1-19.31 17.1-19.31 9.93-25.93 34.21-33.11c0 0 7.72-11 1.1-19.86 0 0-16.55-41.38-25.93-46.35s3.87-33.64 3.87-33.64z"
        fill="#67647e"
      />
      <path
        d="M492.28 563.11s-3.86 67.32-8.83 76.7-23.73 38.07-23.73 38.07-21.52 15.45-22.62 19.31-18.76 17.1-18.76 17.1l-1.1 7.72s-29.24-1.66-27.59-11.59 17.1-19.31 17.1-19.31 9.93-25.93 34.21-33.11c0 0 7.72-11 1.1-19.86 0 0-16.55-41.38-25.93-46.35s3.87-33.64 3.87-33.64z"
        opacity={0.05}
      />
      <path
        d="M438.2 718.16l-17.66 37c2.76 9.38 29.24 6.07 29.24 6.07s20.42-27.59 21.52-37.52 14.9-18.21 14.9-18.21c19.86-21.52 6.62-46.9 5-60.14 0-.25-.07-.53-.12-.82-1.47-8.88-10.4-34.43-17.34-53.56-4.68-12.89-8.47-22.87-8.47-22.87s-37 1.66-44.69 14.9c-3.54 6.06-2 12.38.8 17.44a41.09 41.09 0 008.16 10.22l12.56 30.28s22.07 40.28 13.79 43.59-17.69 33.62-17.69 33.62z"
        fill="#67647e"
      />
      <path
        d="M504.1 390.99a16.92 16.92 0 002.09 7l.63 1.14 3.11 5.61h9.93l.21-2.61 2-25s-2.76-27.59-12.14-23.73c-7.53 3.14-6.52 27.93-5.83 37.59z"
        fill="#f7c4a7"
      />
      <path
        d="M506.82 399.15l3.11 5.61h9.93l.21-2.61c-4.62-.37-10.12-1.26-13.25-3z"
        opacity={0.1}
      />
      <path
        d="M506.07 399.24v12.69l20.42 5.52s0-1.32.06-3.16c.12-3.87.48-10.06 1.6-11.18-.01-.01-16.56-.01-22.08-3.87z"
        fill="#e6e6f0"
      />
      <path
        d="M506.07 406.68v5.25l20.42 5.52s0-1.32.06-3.16c-6.81-1.19-16.62-5.73-20.48-7.61z"
        opacity={0.1}
      />
      <path
        d="M387 427.62c4 11.63-1.21 16.87-1.21 16.87s49.66 3.31 37.52-5.52c-7.09-5.16-10.23-16.53-11.61-25.09a85.57 85.57 0 01-1.08-10.77s-39.68-.58-31.45 10.48a53.13 53.13 0 017.83 14.03z"
        fill="#f7c4a7"
      />
      <path
        d="M379.17 413.59c4 5.44 5.36 6.24 6.73 10.17a22.18 22.18 0 003.76.31c9.46 0 18.67-1.95 22-10.2a85.57 85.57 0 01-1.08-10.77s-39.65-.58-31.41 10.49z"
        opacity={0.1}
      />
      <circle cx={390.75} cy={403.11} r={22.62} fill="#f7c4a7" />
      <path
        d="M504.42 406.97s21.52 11 27.59 8.28l-14.9 40.83s-1.1 9.93-20.42 14.35-28.69 8.26-28.69 8.26l-35.86-42.49 18.21 5s9.38 13.24 16 8.83 27-2.21 27-2.21 11.65-31.47 11.07-40.85z"
        fill="#575988"
      />
      <path
        d="M504.42 406.97s21.52 11 27.59 8.28l-14.9 40.83s-1.1 9.93-20.42 14.35-28.69 8.26-28.69 8.26l-35.86-42.49 18.21 5s9.38 13.24 16 8.83 27-2.21 27-2.21 11.65-31.47 11.07-40.85z"
        opacity={0.05}
      />
      <path
        d="M420.55 433.01s-29.17-8.34-32.24 7.15c0 0 13.48-6.57 32.79 5 1.45.87 2.87 1.8 4.25 2.77 17 11.91 28.86 30.37 33.63 51.26l12.33 54 1.1 14.52s17.66 3.49 21-1.74 1.1-22.65-3.86-28.46-12.72-30.73-12.72-30.73L472 492.29a96.9 96.9 0 00-18.9-33.14l-1.16-1.37A72.44 72.44 0 00425 437.62c-2.79-1.23-4.84-2.78-4.45-4.61z"
        opacity={0.1}
      />
      <path
        d="M420.55 431.91s-29.17-8.34-32.24 7.15c0 0 13.48-6.57 32.79 5 1.45.87 2.87 1.8 4.25 2.77 17 11.91 28.86 30.37 33.63 51.26l12.33 54 1.1 14.52s17.66 3.49 21-1.74 1.1-22.65-3.86-28.46-12.69-30.79-12.69-30.79L472 491.19a96.9 96.9 0 00-18.9-33.14l-1.17-1.41A72.44 72.44 0 00425 436.52c-2.79-1.24-4.84-2.74-4.45-4.61z"
        fill="#e6e6f0"
      />
      <path
        d="M493.9 543.13l-.25 9.5-7.72-5s-13.76-50.08-23.45-63.73c-1.14-1.61-1.69-4-2.76-4.41l-39.45-38.07v-8.83s20.14 14.9 21.79 17.66c.7 1.17 11.29 7 17.66 16a200 200 0 0115.17 26.21l13.24 29.8z"
        opacity={0.1}
      />
      <path
        d="M420.27 432.07v8.55l40 38.35c1.06.41 1.62 2.81 2.76 4.41 9.69 13.66 23.45 63.73 23.45 63.73l7.72 5 .24-9.5-5.75-20.83-13.24-29.8a200 200 0 00-15.17-26.21c-6.37-9-17-14.83-17.66-16-1.43-2.38-17-13.77-21.26-16.87z"
        fill="#787c9c"
      />
      <path
        d="M398.28 379.09c1.75-.86 3.72-2.15 3.71-4.1a4.5 4.5 0 00-2.3-3.41c-3.15-2.15-2.91-6-6.53-4.82-2.42.81-4.54 2.35-6.9 3.33a16.15 16.15 0 01-5.19 1.2 21.16 21.16 0 00-3.4.27 9.9 9.9 0 00-2.57 1.06 22.16 22.16 0 00-10.42 13c-1.5 5.12-1.35 11.19-5.21 14.87a14.34 14.34 0 00-1.92 1.88 6.59 6.59 0 00-1 2.51 15.25 15.25 0 00.76 9.16 11.22 11.22 0 006.58 6.23c1.3.43 2.68.58 4 .91 6.34 1.6 10.83 7.16 16.6 10.23a3.16 3.16 0 001.53.48 3 3 0 001.62-.69c2.23-1.6 4.07-4.07 4-6.82a13.78 13.78 0 00-1.48-4.91 47.6 47.6 0 01-2.76-8.89 4.33 4.33 0 01-.06-2.15c.42-1.34 1.9-2 2.93-2.91 2-1.81 2.19-4.9 1.47-7.47s-2.24-4.83-3.37-7.25a5.71 5.71 0 01-.67-2.35c0-3.23 4.36-5 6.2-7.11 2.55-2.87.97-.56 4.38-2.25z"
        opacity={0.1}
      />
      <path
        d="M397.73 379.09c1.75-.86 3.72-2.15 3.71-4.1a4.5 4.5 0 00-2.3-3.41c-3.15-2.15-2.91-6-6.53-4.82-2.42.81-4.54 2.35-6.9 3.33a16.15 16.15 0 01-5.19 1.2c-1.14.07-4.82-1.67-5.93-1.41a9.9 9.9 0 00-2.57 1.06 22.16 22.16 0 00-10.42 13c-1.5 5.12-.45 11.53-4.31 15.21-.65.62.23 2.5-.29 3.23a6.59 6.59 0 00-1 2.51 15.25 15.25 0 00.76 9.16 11.22 11.22 0 006.58 6.23c1.3.43 2.68.58 4 .91 6.34 1.6 10.83 7.16 16.6 10.23a3.16 3.16 0 001.53.48 3 3 0 001.62-.69c2.23-1.6 4.07-4.07 4-6.82a13.78 13.78 0 00-1.48-4.91 47.6 47.6 0 01-2.76-8.89 4.33 4.33 0 01-.06-2.15c.42-1.34 1.9-2 2.93-2.91 2-1.81 2.19-4.9 1.47-7.47s-2.24-4.83-3.37-7.25a5.71 5.71 0 01-.67-2.35c0-3.23 4.36-5 6.2-7.11 2.55-2.88.97-.57 4.38-2.26z"
        fill="#b96b6b"
      />
      <path
        d="M421.35 600.41c10.09-1.2 22.85-2.37 28.44-1.43 9 1.5 21.65-6.53 23.92-8-4.68-12.89-8.47-22.87-8.47-22.87s-37 1.66-44.69 14.9c-3.55 6.03-1.96 12.34.8 17.4z"
        opacity={0.1}
      />
      <path
        d="M373.1 457.73c2.21 19.31 24.28 46.35 24.28 46.35s15.45 16 10.48 70.63l-.55 26.48s32.55-5 42.49-3.31 24.28-8.28 24.28-8.28 5.52-95.46-18.21-115.32a140.16 140.16 0 00-9.53-13c-6.37-7.71-15-16.4-23.14-18.54a14.48 14.48 0 00-3.19-.49s-24.83-13.79-31.45-3.31c-.01.03-17.67-.52-15.46 18.79z"
        fill="#575988"
      />
      <path
        d="M473.79 560.63s-8.79-3.85-23.72-2.76-41.43-12.09-41.43-12.09"
        opacity={0.1}
      />
      <path
        d="M457.79 683.67s-.55 1.66 6.62 3.86 9.38 4.41 9.38 4.41"
        opacity={0.05}
      />
      <rect
        x={439.87}
        y={307.3}
        width={79.2}
        height={79.2}
        rx={11.85}
        ry={11.85}
        fill={color}
      />
      <path
        d="M435.89 378.63a16.74 16.74 0 001.89 7.48l3.19 6.13 2.21 4.24 13.79 1.1s.29-1.14.64-3c1-5.52 2.65-17.44-.64-25.67-4.41-11-6.07-32.55-14.35-27.59-6.57 3.93-6.88 27.67-6.73 37.31z"
        fill="#f7c4a7"
      />
      <path
        d="M441 392.07v.17l2.21 4.24 13.79 1.1s.29-1.14.64-3c-4.97-1.93-11.44-3.68-16.64-2.51z"
        opacity={0.1}
      />
      <path
        d="M441 393.17v9.93l19.86 10.48s.23-1.8.65-4.12c.72-4 2-9.53 3.77-10.22-.04 0-14.39-8.28-24.28-6.07z"
        fill="#e6e6f0"
      />
      <path
        d="M387.24 483.36a23.37 23.37 0 0017.84 5.71C440 485.52 441 473.18 441 473.18l5.36-11.87c-6.37-7.71-15-16.4-23.14-18.54-5.79 9.33-10.92 16.06-10.92 16.06s-25.93-19.86-33.66-1.1c-4.52 10.92 2.2 19.97 8.6 25.63z"
        opacity={0.05}
      />
      <path
        d="M441 399.25v3.85l19.86 10.48s.23-1.8.65-4.12c-8.6-2.74-17.07-7.94-20.51-10.21z"
        opacity={0.1}
      />
      <path
        d="M438.76 399.24s14.9 10.48 27.59 12.69l-25.93 57.38s-.95 12.34-35.88 15.89a23.39 23.39 0 01-17.84-5.71c-6.4-5.66-13.13-14.71-8.63-25.63 7.72-18.76 33.66 1.1 33.66 1.1s26.47-34.75 27.03-55.72z"
        fill="#575988"
      />
      <path
        fill="#e8eaf1"
        d="M203.52 435.76l268.32 184.07-268.32 184.06V435.76zM740.15 435.76L471.84 619.83l268.31 184.06V435.76z"
      />
      <path
        d="M303.52 833.11l257.79-200.57a17 17 0 0121.05 0l257.79 200.57z"
        transform="translate(-100 -29.22)"
        fill="url(#InboxCleanup_svg__c)"
      />
      <path
        d="M203.52 803.89l257.79-191.8a17.63 17.63 0 0121.05 0l257.79 191.8z"
        fill="#e8eaf1"
      />
    </svg>
  );
};

SvgInboxCleanup.propTypes = {
  color: PropTypes.string
};
SvgInboxCleanup.defaultProps = {
  color: "primary"
};
export default SvgInboxCleanup;
