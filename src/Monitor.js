import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMonitor = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1094.72 788.69"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Monitor_svg__a"
          x1={2938.83}
          y1={215.4}
          x2={2938.83}
          y2={-91.93}
          gradientTransform="rotate(59.3 1726.545 -1812.88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Monitor_svg__b"
          x1={1364.21}
          y1={820.42}
          x2={1364.21}
          y2={492.03}
          gradientTransform="matrix(-1 -.04 -.04 1 2349.24 29.65)"
          xlinkHref="#Monitor_svg__a"
        />
      </defs>
      <g opacity={0.5}>
        <rect
          x={960.72}
          y={367.69}
          width={134}
          height={134}
          rx={14.12}
          fill="#d0d2d5"
        />
        <path d="M1008.72 406.2h38s32 28 0 57h-38s-32-26 0-57z" opacity={0.1} />
        <path
          fill="#3f3d56"
          d="M1012.72 422.19h5v15h-5zM1037.72 420.19h5v18h-5zM1027.72 446.19a6 6 0 016 6v5h-12v-5a6 6 0 016-6z"
        />
      </g>
      <path
        d="M674.41 294.11c3.17-.07 6.33.17 9.49 0 2.89-.14 5.76-.61 8.65-.9 4.94-.49 9.92-.45 14.88-.66 3.26-.14 6.7-.46 9.34-2.38 2.48-1.79 3.86-4.71 6.07-6.83 9-8.65 15.17-20.22 23.17-29.82 2-2.44 4.09-4.87 5.9-7.48 3.47-5 5.92-10.67 8.36-16.27a45.11 45.11 0 002.4-6.42c.45-1.76.68-3.58 1.28-5.3 1.24-3.52 4.22-6.6 4.58-10.31l-.42.06c3.64-4.63 3.08-12.7 4.88-18.63a80.28 80.28 0 014.17-10.29l6.69-14.57c1.15-2.5 2.35-5.08 4.34-7 2.41-2.33 5.77-3.49 8.19-5.81a12.71 12.71 0 003.14-5.11l.21.2c1.28 1.25 2.28 2.78 3.53 4.07 2.69 2.78 6.42 4.37 9.16 7.1 1.4 1.39 2.55 3.08 4.24 4.09a4.7 4.7 0 005.44-.67c4.91-4.32 12.23-4.72 17.54-8.53 1.47-1.06 2.75-2.35 4.13-3.51a56.32 56.32 0 0110.67-6.7 26.61 26.61 0 016.59.94c3.08.85 6.09 2.26 9.29 2.2a13.4 13.4 0 007.81-3c1.63-1.26 3.12-3 3.36-5a6.42 6.42 0 00-2.4-5.4c-.22-.19-.45-.36-.68-.53A6.68 6.68 0 00876 127a16 16 0 00-5.45-2.78 11.69 11.69 0 00-3.44-.78 15.7 15.7 0 00-5.34 1.25 51.34 51.34 0 01-10.47 2.2c-.63.06-1.91-.07-3-.08l-.37-1.06c-4.16 1.92-9 .34-13.56.35-2.22 0-4.43.39-6.64.53a59.92 59.92 0 01-7.34-.16L813 126a87.11 87.11 0 01-9.42-1c-.83-1.69-1.66-3.38-2.59-5a46.27 46.27 0 00-5.49-7.63 26.52 26.52 0 012.64-2l.18-.11c.23-.13.51-.27.82-.41a18.93 18.93 0 0027.06-17.08 14.5 14.5 0 001.6-.73c.3-.16.6-.33.89-.52l.43-.29a8.34 8.34 0 00.78-.67c.12-.12.24-.24.35-.37a4.78 4.78 0 00.57-.84c.06-.12.12-.23.17-.35s0-.09.05-.14.07-.18.1-.26 0-.12.05-.18l.06-.24a1.29 1.29 0 000-.19v-.44a1.64 1.64 0 010-.22 1.7 1.7 0 000-.22v-.22a1.62 1.62 0 000-.22v-.27a1.79 1.79 0 000-.23V85.52v-.26a1.16 1.16 0 000-.18 2.33 2.33 0 000-.28v-.16c0-.05 0-.2-.07-.3v-.14l-.09-.32v-.12c0-.11-.07-.22-.1-.33v-.1l-.12-.36v-.06c0-.17-.11-.35-.17-.52-.75-2.16-1.56-4.31-2.42-6.43a15.64 15.64 0 00-2.78-4.86c-1.77-1.88-4.31-2.82-6.43-4.32-2.5-1.76-4.37-4.25-6.49-6.47s-4.69-4.23-7.74-4.6a15.16 15.16 0 00-7.06 1.29c-18.37 6.78-33.41 20.14-49.88 30.74-6.41 4.13-13.59 8-21.18 7.47l6.7 10.64c.32.52.65 1 1 1.54s.7 1 1.07 1.5a12.07 12.07 0 003.51 3.22 7.69 7.69 0 001.08.52 8.88 8.88 0 001 .31c2.39.57 5 .09 7.42-.39.83-.16 1.66-.33 2.48-.52l1-.28h.16v.16c-.56 1-1.09 1.91-1.56 2.9a60.81 60.81 0 00-3.57 11.12c-1.89 7.5-3.79 15.16-3.29 22.86.17 2.6.61 5.26-.14 7.76-.36 1.23-1 2.49-.66 3.71a17.12 17.12 0 01.92 2.18c.16 1.16-.76 2.16-1.42 3.12s-1 2.49-.06 3.16a5.39 5.39 0 00-3.57 4.45 3.79 3.79 0 01-.34 1.71 4.23 4.23 0 01-1 .93 5.39 5.39 0 00-1.87 3.36c-1.93 0-3.56 1.88-5.32 3a21.45 21.45 0 01-4.85 1.76c-4.83 1.54-9 4.71-12.77 8.05-2.1 1.83-4.22 3.85-5.14 6.47-.3.86-.46 1.76-.72 2.63a18.14 18.14 0 01-2.32 4.74 34.23 34.23 0 01-7 7.82 18.59 18.59 0 00-3.6 3.86c-1.53 2.21-4.64 2.87-6.28 5a23.75 23.75 0 01-2 3c-1.27 1.2-3.19 1.3-4.81 2-3.79 1.57-5.54 6-8.92 8.34a.94.94 0 01-.67.22c-.29 0-.46-.35-.71-.52-.49-.33-1.14-.08-1.72.07s-1.36.09-1.51-.49c-8.15-4.94-16.16-10.3-24.32-15.24l-3.72-2.25-19.9-12.06a1.48 1.48 0 00-1.57 0l-.62.43c-1-1.06-2.11-2-2.77-2.78-.27-.31-.54-.62-.82-.92a1.22 1.22 0 00.53-.1 1 1 0 00.43-1.3 3.26 3.26 0 00-.92-1.17 22.15 22.15 0 01-2.39-2.73 25.24 25.24 0 00-2.63-3.44 4.83 4.83 0 00-3.9-1.55 6.33 6.33 0 00-2.26.91 37.09 37.09 0 00-7.5 5.75.79.79 0 00-.33.62c0 .2.2.35.22.54a.7.7 0 01-.19.5 20.93 20.93 0 01-4.73 4.31q-3.81 2.85-7.45 5.92a10.42 10.42 0 00-3.48 4.25 8.31 8.31 0 00.61 5.9c1.66 3.91 4.57 7.15 7.45 10.28a3.64 3.64 0 001.91 1.34 2.43 2.43 0 001.73-.42c1.77-1.16 2.06-3.56 2.19-5.66.05-1 .11-1.92.17-2.88a1.33 1.33 0 01.11-.56 1.4 1.4 0 01.61-.49l2.75-1.45c-.08-.13-.17-.26-.26-.39a11.21 11.21 0 016.49-.42c1.46.43 2.8 1.3 4.2 1.84a9.29 9.29 0 001 5.42c5.13.53 9.75 2.81 14.34 5.11a114.33 114.33 0 0110.78 6.09q4.24 2.76 8.3 5.77c3.84 2.84 7.55 5.85 11.22 8.89a54.11 54.11 0 007.67 5.65c7.22 4.05 16.9 4.19 23.53-.86 8.36-6.37 19-9.68 28-15.19a31.6 31.6 0 007.25-5.57 4.94 4.94 0 01-.12.77c-.54 2.49-2.69 4.29-3.5 6.81-.63 2-.4 4.31-1.62 6-.93 1.29-2.67 2.21-2.72 3.8 0 .44.13.88.13 1.32a4.13 4.13 0 01-.48 1.59c-1 2.25-2.12 4.61-4.17 6-.8.55-1.82 1.05-2 2a1.89 1.89 0 01-.21.79c-.34.47-1.09.22-1.63.42-.75.28-.87 1.25-1.17 2a3.24 3.24 0 01-3.27 1.92c-6.83-.83-13.54 2.26-20.42 2.08-2.37-.07-4.73-.31-7.11-.33-7.3-.06-14.45 2-21.48 4a11.34 11.34 0 00-1.42 4.5 17.37 17.37 0 01-7.35.28 15.67 15.67 0 00-1.84-.25 2.77 2.77 0 00.16-1.42 40.15 40.15 0 00-8.23 3.67c-1.71 1-3.52 2.4-3.68 4.37a6.57 6.57 0 00.32 2.24l.93 3.53a3.72 3.72 0 00.83 1.77c.31.3.72.48 1 .8a3.14 3.14 0 01.54 1.27l.78 3.06a19.46 19.46 0 01.62 3.11c.09 1 0 1.92.07 2.88a29.93 29.93 0 00.69 4.7l1.11 5.54a18.91 18.91 0 001.31 4.5c.47 1 1.1 1.86 1.48 2.86.3.77.44 1.59.8 2.32a6.19 6.19 0 002.9 2.68 3.23 3.23 0 001.41.44c1.42 0 2.44-1.32 3.1-2.58a15.6 15.6 0 002.07-7.52c0-1.06-.21-2.11-.3-3.17-.24-3 .62-5.92.62-8.91a1.75 1.75 0 00-1.25-1.82c.09-2.54.08-5.23 1.42-7.4a11.15 11.15 0 012.44-2.65c.37 1.18.78 2.35 1.24 3.49 7.61-2.22 15.47-4.36 23.44-4.56zM837 140.54c-.54.2-1.09.4-1.65.58-4.66 1.55-10 3.06-14.82 2a12.87 12.87 0 01-4.06-2l-.35-.22c6.79-1.19 13.88-.9 20.88-.36z"
        transform="translate(-52.64 -55.65)"
        fill="url(#Monitor_svg__a)"
      />
      <path
        d="M811.42 74.6a15.45 15.45 0 015.31-1.23 11.65 11.65 0 013.42.79 16.08 16.08 0 015.44 2.8 6.51 6.51 0 012.41 5.4c-.23 2-1.71 3.73-3.33 5a13.27 13.27 0 01-7.76 3c-3.18.05-6.18-1.38-9.25-2.23a26.56 26.56 0 00-6.86-1 15 15 0 01-3.49-.22 3.74 3.74 0 01-2.68-2.06 5.28 5.28 0 010-3c.23-1.24.19-4.18 1.29-4.92.88-.6 4-.12 5.08-.21a50.14 50.14 0 0010.42-2.12z"
        fill="#fbbebe"
      />
      <path
        d="M740.03 54.47a46.24 46.24 0 017.75 10c3.52 6.14 5.76 13.28 11.06 18a37.32 37.32 0 004.47 3.23 12.9 12.9 0 004.06 2c4.76 1.07 10.1-.42 14.74-2a93.35 93.35 0 0013.33-6 11 11 0 001.56 5.48c1.11 1.57 3.38 2.49 5 1.5a59.3 59.3 0 00-11.53 7.13c-1.37 1.16-2.64 2.44-4.1 3.49-5.27 3.79-12.56 4.17-17.43 8.47a4.69 4.69 0 01-5.41.65c-1.69-1-2.84-2.72-4.23-4.11-2.74-2.74-6.46-4.34-9.15-7.13-1.25-1.29-2.25-2.82-3.53-4.08-1.83-1.8-4.21-3-5.89-5-1.25-1.47-2-3.26-3.17-4.83-1-1.36-2.18-2.55-3.07-4-2.18-3.47-2.16-8-.91-11.89s4.12-7.52 6.45-10.91z"
        fill="#f86d70"
      />
      <path
        d="M740.03 54.47a46.24 46.24 0 017.75 10c3.52 6.14 5.76 13.28 11.06 18a37.32 37.32 0 004.47 3.23 12.9 12.9 0 004.06 2c4.76 1.07 10.1-.42 14.74-2a93.35 93.35 0 0013.33-6 11 11 0 001.56 5.48c1.11 1.57 3.38 2.49 5 1.5a59.3 59.3 0 00-11.53 7.13c-1.37 1.16-2.64 2.44-4.1 3.49-5.27 3.79-12.56 4.17-17.43 8.47a4.69 4.69 0 01-5.41.65c-1.69-1-2.84-2.72-4.23-4.11-2.74-2.74-6.46-4.34-9.15-7.13-1.25-1.29-2.25-2.82-3.53-4.08-1.83-1.8-4.21-3-5.89-5-1.25-1.47-2-3.26-3.17-4.83-1-1.36-2.18-2.55-3.07-4-2.18-3.47-2.16-8-.91-11.89s4.12-7.52 6.45-10.91z"
        opacity={0.1}
      />
      <path
        d="M562.3 146.82a10.36 10.36 0 00-2.82-2.55 8.54 8.54 0 00-5.27-.54c-4.46.68-8.6 2.72-12.52 5-3.16 1.81-6.3 3.82-8.56 6.67a6.85 6.85 0 00-1.51 3 6.18 6.18 0 00.23 2.73 6.6 6.6 0 003.57 4.62c2.09.82 4.42-.05 6.52-.85 2.82-1.09 5.92-2.1 8.82-1.24 2.15.64 4 2.27 6.27 2.33 2.67.08 4.83-2.08 6.53-4.14 1.47-1.8 4.69-5.05 4.48-7.58s-4.16-5.64-5.74-7.45zM596 224.65a17.27 17.27 0 01-7.5.31c-1.52-.28-3.38-.64-4.35.55a3.58 3.58 0 00-.61 1.48c-2.49 10.19-.21 21 4 30.65a.94.94 0 00.28.42c.27.2.64.06.95-.07a11.28 11.28 0 002.83-1.65c1.92-1.74 2.33-4.57 2.42-7.16s.05-5.33 1.39-7.55c1.68-2.75 5.19-4.09 6.57-7 1.11-2.37.53-5.18-.45-7.6-.33-.84-.46-3-1.24-3.41s-3.4.79-4.29 1.03z"
        fill="#fbbebe"
      />
      <path
        d="M562.01 145.8a1 1 0 00.42-1.3 3.38 3.38 0 00-.92-1.18 20.69 20.69 0 01-2.38-2.74 27.68 27.68 0 00-2.63-3.44 4.85 4.85 0 00-3.89-1.56 6 6 0 00-2.25.9 36.36 36.36 0 00-7.45 5.72c-.17.17-.36.38-.32.62s.2.34.22.54a.69.69 0 01-.18.49 20.68 20.68 0 01-4.7 4.29q-3.78 2.84-7.4 5.9a10.3 10.3 0 00-3.45 4.23 8.41 8.41 0 00.63 5.89c1.67 3.92 4.58 7.16 7.45 10.31a3.78 3.78 0 001.92 1.35 2.42 2.42 0 001.72-.42c1.75-1.15 2-3.55 2.15-5.64l.16-2.89a1.29 1.29 0 01.11-.55 1.35 1.35 0 01.61-.49l2.72-1.44a8.77 8.77 0 00-8-4.16 3 3 0 01-2.14-.29 1.76 1.76 0 010-2.44 5.38 5.38 0 012.36-1.31c7.17-2.63 13.65-6.85 20.61-10a5.29 5.29 0 012.46-.57c.7.05 1.52.46 2.17.18zM590.26 250.52c-.32.6-.43 1.3-.78 1.89s-1.11 1-1.7.7a1.75 1.75 0 01-.66-.89 37.36 37.36 0 01-2.45-22.06 13.91 13.91 0 011.07-3.52c.53-1.08 1.3-2.18 1.08-3.36a39.64 39.64 0 00-8.18 3.64c-1.7 1-3.49 2.39-3.65 4.35a6.84 6.84 0 00.33 2.24l.94 3.53a3.65 3.65 0 00.84 1.77c.3.3.71.49 1 .81a3 3 0 01.54 1.26l.79 3.06a19.6 19.6 0 01.63 3.12c.09 1 0 1.92.08 2.88a31 31 0 00.7 4.69l1.13 5.54a19.26 19.26 0 001.32 4.5c.47 1 1.1 1.86 1.49 2.87.29.77.44 1.59.8 2.32a6.29 6.29 0 002.89 2.69 3.39 3.39 0 001.41.45c1.41.05 2.42-1.32 3.08-2.58a15.56 15.56 0 002-7.5c0-1.06-.22-2.11-.31-3.17-.25-3 .59-5.91.58-8.9.02-2.8-3.94-2.27-4.97-.33z"
        fill="#f86d70"
      />
      <path
        d="M736.98 76.29a22.08 22.08 0 01-8-6.25 38.19 38.19 0 01-3-4.45 135.15 135.15 0 01-9.75-20.07c4.26.87 8.73 1.66 12.92.46a17.84 17.84 0 006-3.18 51.87 51.87 0 006.32-6.17 60.76 60.76 0 005 8c1.07 1.44 4.69 4.37 4.42 6.33s-4.27 2.94-5.89 3.87l-.17.11a22.68 22.68 0 00-6.15 5.73c-3.14 4.46-4.23 10.68-1.7 15.62z"
        fill="#fbbebe"
      />
      <path
        d="M745.08 54.79a18.74 18.74 0 01-9.85-12 51.87 51.87 0 006.32-6.17 60.76 60.76 0 005 8c1.07 1.44 4.69 4.37 4.42 6.33s-4.27 2.91-5.89 3.84z"
        opacity={0.1}
      />
      <circle cx={754.08} cy={37.53} r={18.73} fill="#fbbebe" />
      <path
        d="M713.11 154.2a8.74 8.74 0 01-8.62.21 16.59 16.59 0 01-3.72-3.13c-6.15-6.31-12-13-16.11-20.83a14.44 14.44 0 01-1.82-5.37 5.9 5.9 0 011.93-5.12 4.16 4.16 0 001-.93 3.75 3.75 0 00.33-1.7 5.31 5.31 0 013.54-4.43c-1-.68-.6-2.19.05-3.16s1.56-2 1.4-3.12a17.12 17.12 0 00-.92-2.18c-.36-1.22.29-2.48.64-3.7.73-2.5.29-5.16.11-7.76-.53-7.7 1.34-15.34 3.19-22.83a61.24 61.24 0 013.52-11.1c.47-1 1-2 1.54-2.89a76.83 76.83 0 016.29-8.75 11.36 11.36 0 014.29-3.84 4.24 4.24 0 01.5-.18 10.88 10.88 0 013.82-.29c3.38.21 6.93 1 9.34 3.38s3.19 5.72 4.28 8.94a24.63 24.63 0 001.26 3.15c1.59 3.16 4.18 5.68 6.73 8.13l2.77 2.67c1.39 1.34 3.8 1 5.11 2.41a6.48 6.48 0 011.17 2.24 34.75 34.75 0 012.55 11.33 18.75 18.75 0 01-.15 2.59 13.64 13.64 0 01-3.79 8c-2.4 2.31-5.74 3.45-8.13 5.77-2 1.92-3.16 4.49-4.3 7l-6.61 14.54a82.39 82.39 0 00-4.11 10.25c-2.08 6.99-.9 16.85-7.08 20.7z"
        fill="#f86d70"
      />
      <path
        d="M655.36 236.6c-4.94.2-9.89.14-14.81.61-2.87.28-5.73.75-8.61.87-3.14.14-6.29-.11-9.44-.05-7.93.17-15.75 2.28-23.38 4.46a44.4 44.4 0 01-3.31-16.57 10.57 10.57 0 010-1.13 11.37 11.37 0 011.41-4.58c7-2 14.1-4 21.37-3.9 2.37 0 4.72.28 7.08.35 6.85.21 13.51-2.86 20.31-2a3.2 3.2 0 003.25-1.91c.29-.74.41-1.71 1.16-2 .54-.2 1.28.05 1.62-.41a2.1 2.1 0 00.21-.79c.2-1 1.21-1.45 2-2 2-1.38 3.13-3.74 4.13-6a4.07 4.07 0 00.47-1.58c0-.44-.14-.88-.13-1.33 0-1.58 1.77-2.49 2.69-3.78 1.21-1.7 1-4 1.59-6 .8-2.52 2.93-4.31 3.46-6.79a4.94 4.94 0 00.12-.77 31.32 31.32 0 01-7.21 5.54c-8.88 5.47-19.5 8.74-27.79 15.07-6.58 5-16.22 4.85-23.42.78a54.16 54.16 0 01-7.66-5.67c-3.66-3-7.36-6.07-11.19-8.93q-4-3-8.29-5.79a114.13 114.13 0 00-10.74-6.29c-4.58-2.32-9.19-4.62-14.29-5.17a10.53 10.53 0 01-.28-8.64 29.14 29.14 0 014.68-7.55 21.78 21.78 0 015.36-5.47 1.46 1.46 0 011.56 0l19.82 12.17 3.71 2.27c8.13 5 16.13 10.35 24.26 15.32.15.57.94.64 1.51.49s1.22-.39 1.71-.06c.24.16.41.46.71.52a1 1 0 00.66-.22c3.36-2.31 5.08-6.75 8.85-8.3 1.61-.66 3.52-.76 4.78-2a22.71 22.71 0 002-3c1.63-2.13 4.72-2.77 6.23-5a18.35 18.35 0 013.57-3.84 33.83 33.83 0 007-7.79 18.08 18.08 0 002.29-4.72c.26-.87.42-1.77.71-2.63.91-2.62 3-4.63 5.09-6.45 3.79-3.32 7.88-6.47 12.68-8a21.44 21.44 0 004.83-1.75c1.93-1.18 3.7-3.37 5.91-2.86a5 5 0 012.19 1.38 69.61 69.61 0 017.45 8.53q5.35 6.81 10.69 13.63a15.75 15.75 0 004.19 4.15 11.49 11.49 0 007.75 1c-.35 3.71-3.3 6.77-4.52 10.29-.59 1.71-.82 3.53-1.26 5.28a43.25 43.25 0 01-2.37 6.41c-2.4 5.59-4.82 11.21-8.26 16.23-1.78 2.61-3.83 5-5.84 7.45-7.93 9.57-14 21.11-23 29.72-2.18 2.11-3.56 5-6 6.81-2.65 1.96-6.07 2.26-9.26 2.39z"
        fill="#434175"
      />
      <path
        d="M693.04 109.72a5.43 5.43 0 00-2.5.75c1.83-.64 4.06 1.07 5.75.26.79-.38.67-.49 0-.72-1.01-.34-2.23-.03-3.25-.29z"
        opacity={0.1}
      />
      <path
        fill="#d0d2d5"
        d="M935.241 466.28l73.503-26.101 4.685 13.192-73.503 26.102zM959.83 493.637l66.906-23.759a7 7 0 018.94 4.254 7 7 0 01-4.255 8.94l-66.907 23.758-4.684-13.193z"
      />
      <path
        d="M896.087 452.598l16.303-5.789a58 58 0 0174.065 35.248l5.789 16.303a22.68 22.68 0 01-13.783 28.962l-49.587 17.608a22.68 22.68 0 01-28.962-13.783l-17.608-49.587a22.68 22.68 0 0113.783-28.962z"
        fill="#3f3d56"
      />
      <path
        d="M692.14 119.48a3.88 3.88 0 00-2.11-.13 4.46 4.46 0 00-2.75 1.35 1.5 1.5 0 001.23 0 7.27 7.27 0 012-.22c.58 0 2.31.64 2.76.36.66-.43-.68-1.19-1.13-1.36zM747.13 87.94a19.42 19.42 0 01-4.28-2.06c-3.51-2.23-6.46-5.26-9.93-7.54a55.25 55.25 0 00-5.43-3l-11.71-6a11.87 11.87 0 00-2.84-1.16c-1.91-.42-4.06.86-6 .59a7.23 7.23 0 01-4.88-3.37 17.57 17.57 0 01-2.2-5.67 29.09 29.09 0 01-.67-3.59 16 16 0 01-.07-3.79 9.48 9.48 0 013.3-6.46 12.09 12.09 0 014.64-2 19.37 19.37 0 013.21-.53 11.43 11.43 0 011.85 0c4.42.35 8.16 3.35 11.11 6.65 1.55 1.74 3 3.61 4.48 5.38a24.63 24.63 0 001.26 3.15c1.59 3.16 4.18 5.68 6.73 8.13l2.77 2.67c1.39 1.34 3.8 1 5.11 2.41a6.48 6.48 0 011.17 2.24 34.75 34.75 0 012.53 11.36 18.75 18.75 0 01-.15 2.59zM656.06 215.92l-60.26 8.87a11.37 11.37 0 011.41-4.58c7-2 14.1-4 21.37-3.9 2.37 0 4.72.28 7.08.35 6.85.21 13.51-2.86 20.31-2a3.2 3.2 0 003.25-1.91c.29-.74.41-1.71 1.16-2 .54-.2 1.28.05 1.62-.41a2.1 2.1 0 00.21-.79c.2-1 1.21-1.45 2-2 2-1.38 3.13-3.74 4.13-6a4.07 4.07 0 00.47-1.58c0-.44-.14-.88-.13-1.33 0-1.58 1.77-2.49 2.69-3.78 1.21-1.7 1-4 1.59-6 .8-2.52 2.93-4.31 3.46-6.79l.26-.34 10.26-4z"
        opacity={0.1}
      />
      <ellipse
        cx={425}
        cy={668.67}
        rx={425}
        ry={33}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={800.72}
        cy={752.92}
        rx={275}
        ry={35.77}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M475.25 641.95l.28-14.16q20-1.14 40-1.52c7.74-.14 15.58-.19 23.07 1.75 5.19 1.35 10.1 3.63 15.22 5.23 10.2 3.18 21 3.6 31.71 3.89 10.39.29 21.24.39 30.57-4.2 16.15-8 22.94-27.65 23.73-45.64s-2.79-36.12-.3-54"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={12}
      />
      <path
        fill="#d0d2d5"
        d="M511.81 669.66l-178.19-2.28.52-4.57 8.62-75.39h156.48l11.52 75.39.88 5.71.17 1.14z"
      />
      <path
        opacity={0.1}
        d="M511.64 668.52h-88.93l-89.09-1.14.52-4.57h176.62l.88 5.71z"
      />
      <path fill="#d0d2d5" d="M303.92 663.95h236.45v5.71H303.92z" />
      <path
        d="M765.96 134.62a14.87 14.87 0 00-14.8-15H90.84a14.88 14.88 0 00-14.8 15v400.26h689.92z"
        fill="#3f3d56"
      />
      <path
        d="M76.04 530.88v46.89a14.8 14.8 0 0014.8 14.8h660.32a14.8 14.8 0 0014.8-14.8v-46.89z"
        fill="#d0d2d5"
      />
      <path fill="#2f2e41" d="M104.6 144.8h636.23v359.81H104.6z" />
      <path
        d="M424.43 574.78a15.43 15.43 0 0012.13-5.89 15.28 15.28 0 001.2-1.77l-8.46-1.39 9.15.07a15.44 15.44 0 00.29-12.22l-12.27 6.37 11.32-8.32a15.42 15.42 0 10-25.43 17.25 15.4 15.4 0 0012.07 5.9z"
        fill={color}
      />
      <path opacity={0.1} d="M439.85 592.56l71.09 71.39-10.91-71.39h-60.18z" />
      <path
        d="M745.18 141.87l38.18-50.59c2.28-3 4.63-6.13 7.76-8.29 9-6.22 22.19-2.54 29.72 5.43s10.69 19.06 13 29.78a316.11 316.11 0 017.16 75.15c-.32 13.29-1.51 26.72-5.74 39.33-6.42 19.18-19.43 35.33-29.26 53-15.83 28.47-22.46 66.44-2.42 92.13 6.53 8.37 15.42 14.77 21.45 23.51 6.81 9.87 9.46 21.94 12 33.66 3.79 17.7 7.59 35.51 8.29 53.6 2.26 58.49-31.09 116.93-82.59 144.75-35.75 19.32-79 24.92-110.09 51.12-11 9.23-20.48 22.8-17.78 36.86 2.2 11.41 12.22 20.08 23.22 23.85s22.93 3.46 34.53 2.8a636.33 636.33 0 0083-10.25c23.23-4.44 46.42-8.27 66.67-20.49a14 14 0 005.05-4.53c1.31-2.19 1.53-4.84 1.71-7.39.55-7.51 1.07-15.3-1.58-22.35-3.09-8.24-10.14-14.48-13.52-22.6s-2.77-17.47-.58-26c2.7-10.54 7.61-20.36 12.55-30.05 4.81-9.44 9.69-18.85 15.35-27.8 15.94-25.16 37.72-46 59.27-66.55"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={12}
      />
      <path
        d="M808.36 69.35a15 15 0 015.31-1.23 12 12 0 013.42.78 16.1 16.1 0 015.44 2.81 6.49 6.49 0 012.41 5.4c-.23 2-1.71 3.72-3.33 5a13.22 13.22 0 01-7.76 3c-3.18 0-6.18-1.38-9.25-2.24a26.55 26.55 0 00-6.86-1 15 15 0 01-3.49-.23 3.73 3.73 0 01-2.68-2.05 5.38 5.38 0 010-2.95c.24-1.24.2-4.19 1.3-4.93.88-.59 4-.11 5.08-.2a51.46 51.46 0 0010.41-2.16z"
        fill="#fbbebe"
      />
      <path
        d="M794.49 70.35c-4.14 1.9-9 .32-13.5.31-2.21 0-4.41.37-6.61.5a59.44 59.44 0 01-7.31-.19l-7.32-.5a62.44 62.44 0 01-12.79-1.76c-3.58-4.22-9.39-6.08-13.71-9.52-3.46-2.76-5.94-6.52-8.89-9.83s-6.69-6.3-11.1-6.65a16.41 16.41 0 00-5.07.54 11.82 11.82 0 00-4.63 2 9.44 9.44 0 00-3.3 6.46 21.68 21.68 0 00.73 7.38 17.62 17.62 0 002.2 5.68 7.34 7.34 0 004.89 3.37c1.93.26 4.07-1 6-.6a11.87 11.87 0 012.84 1.16l11.72 6a56.26 56.26 0 015.42 3c3.48 2.28 6.42 5.31 9.93 7.54s7.94 3.63 11.84 2.17c12-4.47 25.52-2.39 38.25-1.28-.08-.24.44-.46.59-.66a10.75 10.75 0 002-7.49c-.31-2.63-1.31-5.11-2.18-7.63z"
        fill="#f86d70"
      />
      <path
        d="M774.36 36.66a6.85 6.85 0 003-2.68c1.14-2.11.44-4.7-.34-7s-1.57-4.31-2.44-6.43a15.49 15.49 0 00-2.78-4.87c-1.77-1.89-4.3-2.84-6.41-4.33-2.5-1.77-4.37-4.28-6.48-6.49S754.22.6 751.18.23a14.94 14.94 0 00-6.82 1.27c-18.26 6.71-33.19 20-49.54 30.54-6.36 4.11-13.5 7.94-21 7.39l6.71 10.66c1.71 2.73 3.63 5.62 6.63 6.79 2.65 1 5.61.5 8.39 0a22.61 22.61 0 006.39-1.92c4-2.17 6.57-6.68 10.87-8.25 3.21-1.17 6.79-.45 10 .67s6.36 2.64 9.74 3.1c6 .81 12-1.9 17-5.4 3-2.08 5.73-4.47 9-6a13.56 13.56 0 018-1.41c3.03.42 4.81.56 7.81-1.01z"
        fill="#2f2e41"
      />
      <path
        d="M777.36 33.98c1.12-2.07.46-4.61-.3-6.84a6 6 0 01-.5 3.77 7 7 0 01-3 2.68c-3 1.58-4.82 1.44-7.9.93a13.66 13.66 0 00-8 1.41c-3.25 1.57-6 4-9 6-5 3.5-11 6.2-17 5.39-3.39-.45-6.52-2-9.74-3.1s-6.81-1.84-10-.67c-4.29 1.57-6.83 6.09-10.86 8.25a22.71 22.71 0 01-6.39 1.92c-2.79.54-5.75 1.07-8.39 0-3-1.16-4.92-4.06-6.64-6.79l-4.75-7.55h-1.15l6.71 10.66c1.71 2.73 3.63 5.62 6.63 6.79 2.65 1 5.61.5 8.39 0a22.61 22.61 0 006.39-1.92c4-2.17 6.57-6.68 10.87-8.25 3.21-1.17 6.79-.45 10 .67s6.36 2.64 9.74 3.1c6 .81 12-1.9 17-5.4 3-2.08 5.73-4.47 9-6a13.56 13.56 0 018-1.41c3.08.5 4.9.64 7.89-.93a6.85 6.85 0 003-2.71z"
        opacity={0.1}
      />
      <path
        d="M881.7 773.66a10 10 0 012.18-2.42c4.37-4.12 6.4-10.18 7.48-16.12s1.39-12 3.12-17.81a57.24 57.24 0 013.52-8.67c1-2.14 2.25-6.34 4.09-7.83a2.66 2.66 0 011.26-.61 14.65 14.65 0 013.62-4.82c2.86-2.59 6.35-4.65 8.26-8a17.64 17.64 0 011.93-3.29c1.29-1.43 3.33-2 4.52-3.51 1.55-1.94 1.2-4.71 1-7.19s0-5.43 2.14-6.72c1.28-.79 2.93-.72 4.26-1.41 2-1 2.79-3.53 2.75-5.78s-.74-4.44-.92-6.68c-.56-7.16 4.16-14.28 2.33-21.22-.69-2.63-2.26-4.92-3.43-7.36a17.2 17.2 0 01-1-2.54 35.57 35.57 0 01-9.73 2.35c5.51-12.36 4.11-26.73 6.68-40l-.33-.46a20.71 20.71 0 01-4.22-11.85c0-5 2.31-9.57 3.35-14.4.88-4.12.85-8.41 2-12.45a38.32 38.32 0 013.17-7.22c1.25-2.32 2.56-4.59 3.93-6.83q1.92-6.36 3.85-12.72c1.8-6 3.65-12 7.15-17.14 1.28-1.89 1.67-5.7 3.64-6.84a8.73 8.73 0 015.2-.91c2.78-1.56 5.22-3.81 5.57-6.89a6.68 6.68 0 00-.2-2h-.34c-4.41-.41-6.63-4.29-8.92-7.68-3.71-5.51-2.29-12.95 0-19.2a13 13 0 013-5.29c3.21-3 8.29-2.34 12.43-3.79a42.64 42.64 0 014.11-1.55c2.75-.65 5.63.26 8.15 1.52s4.87 2.92 7.51 3.92 5.9 1.79 6.55 4.5a4.91 4.91 0 01-.23 2.73 10.18 10.18 0 01-3.08 4.45 17.82 17.82 0 01-10.87 24.83 49 49 0 00-2.12 3.73c-1.16 2.24-2.14 4.88-1.75 7.28a21.37 21.37 0 012 2.44c2.87 4 4.5 8.7 6 13.38a139.66 139.66 0 014.84 18.27c2.44 5.18 5.42 10.14 7.19 15.59a35.2 35.2 0 009.38-1.25l8.44-1.92c2.93-.66 6-1.38 8.3-3.32 1.22-1 2.17-2.33 3.41-3.33s3.73-2.15 5.09-1.33a4 4 0 01.69.53c1.23-2.5 9.1 7.73 3.72 8.74l.35 1c.71 2.07 2.22 4.59 1.84 6.75L997 588.21a23.19 23.19 0 01-7.56 1.67 12.21 12.21 0 01-3-.4v1.99c-.1 13.19 2 26.3 2.39 39.48.07 2.4 0 5-1.52 6.88-1.7 2.06-4.72 2.46-7.35 2a16.65 16.65 0 01-1.86-.41 69.45 69.45 0 00-1.92 10.1l-2.49 17.76a26.45 26.45 0 00-.39 5.54c.29 4.18 2.5 7.94 4.1 11.81s2.55 8.5.44 12.11c-.65 1.12-1.56 2.08-2.15 3.24a13.1 13.1 0 00-1 5.67q-.23 8.1-.44 16.18a1.89 1.89 0 011.26.26c2.08 1.61 1.85 9.33 2 11.72.16 4 0 8.08.22 12.12a71.1 71.1 0 002.68 16.13 10.29 10.29 0 002.29 4.61 9.82 9.82 0 004.06 2.11 46.58 46.58 0 0015.42 2.1c2.11-.07 4.31-.27 6.27.53s3.54 3 2.83 5c-.61 1.68-2.46 2.48-4.13 3.11a64.81 64.81 0 00-11 5.06 29.31 29.31 0 01-4.26 2.41 21.58 21.58 0 01-4.38 1.08l-17.72 3c-3.63.63-8 1-10.31-2-1.25-1.62-1.43-3.82-1.37-5.87.1-4 .9-8.07.37-12.07a36.46 36.46 0 00-1.85-6.94l-5.32-15.72c-1.78-5.27-3.58-10.58-4.27-16.1-.25-2-.23-4.27 1.3-5.52a3.54 3.54 0 011.32-.68c.06-4.82.69-9.65.42-14.47-.07-1.2-.19-2.41-.29-3.61a16.82 16.82 0 00-2.48 2.92c-1.7 2.67-2.33 6.21-4.94 8-2.22 1.52-5.51 1.44-7.07 3.64a10.26 10.26 0 00-1.12 2.71 19.6 19.6 0 01-4 6.35 32.91 32.91 0 01-2.47 6.34q-2.21 4.65-4.4 9.3c-1.57 3.32-3.15 6.64-5 9.78a27 27 0 00-3.35 6.46c-1.41 4.94.88 10.36 4.53 14s8.44 5.73 13.16 7.68a3.62 3.62 0 011.35.8 2.58 2.58 0 01.6 1.74c0 2.31-1.89 4.29-4.07 5a15.27 15.27 0 01-6.83.25c-12.78-1.55-25.52-4.67-36.82-10.88a13.22 13.22 0 01-4.4-3.39 5.18 5.18 0 01-.78-5.13z"
        transform="translate(-52.64 -55.65)"
        fill="url(#Monitor_svg__b)"
      />
      <path
        d="M883.08 493.76q-3.19 4.9-6 10.06a37.17 37.17 0 00-3.17 7.16c-1.17 4-1.13 8.28-2 12.36-1 4.8-3.34 9.38-3.34 14.29a20.5 20.5 0 004.22 11.77 56.63 56.63 0 008.82 9.1 187.62 187.62 0 0012.48-61.21c.1-2.9.11-5.9-.94-8.6-.66-1.7-3.77-6.36-5.78-4.53-.73.67-.92 3.69-1.37 4.69a36.23 36.23 0 01-2.92 4.91z"
        fill="#f86d70"
      />
      <path
        d="M883.08 493.76q-3.19 4.9-6 10.06a37.17 37.17 0 00-3.17 7.16c-1.17 4-1.13 8.28-2 12.36-1 4.8-3.34 9.38-3.34 14.29a20.5 20.5 0 004.22 11.77 56.63 56.63 0 008.82 9.1 187.62 187.62 0 0012.48-61.21c.1-2.9.11-5.9-.94-8.6-.66-1.7-3.77-6.36-5.78-4.53-.73.67-.92 3.69-1.37 4.69a36.23 36.23 0 01-2.92 4.91z"
        opacity={0.1}
      />
      <path
        d="M990.43 504.69c3.91-.65 8.25-.33 11.29 2.2a9.32 9.32 0 013.24 6.16c.26 2.78-1.35 6.06-4.13 6.28a13.17 13.17 0 01-2-.13 29.88 29.88 0 00-5.24.43 21.42 21.42 0 01-18.24-7.36c-2.38-2.94.76-4.29 3.59-4.89 3.86-.82 7.63-2.03 11.49-2.69z"
        fill="#fbbebe"
      />
      <path
        d="M923.55 595.01l-2.48 17.62a26 26 0 00-.38 5.5c.29 4.15 2.49 7.88 4.09 11.72s2.56 8.43.45 12c-.65 1.12-1.57 2.06-2.15 3.21a13 13 0 00-1 5.64l-.68 25a158.71 158.71 0 01-23.18-.13 1.35 1.35 0 01-.86-.22 1.38 1.38 0 01-.29-.91c-.34-5.85.68-11.71.35-17.56-.12-2.14-.43-4.27-.46-6.42-.13-8.71 4.18-17.24 2.88-25.86a57.35 57.35 0 00-1.6-6.42c-4.11-15-3.24-30.77-2.34-46.25a1.18 1.18 0 01.2-.7 1.23 1.23 0 01.55-.3 28.48 28.48 0 0125.78 4.91c1.09.88 3.84 1.73 4.56 2.77 1 1.47-.32 2.92-.89 4.48a56.89 56.89 0 00-2.55 11.92z"
        fill="#3f3d56"
      />
      <path
        d="M923.55 595.01l-2.48 17.62a26 26 0 00-.38 5.5c.29 4.15 2.49 7.88 4.09 11.72s2.56 8.43.45 12c-.65 1.12-1.57 2.06-2.15 3.21a13 13 0 00-1 5.64l-.68 25a158.71 158.71 0 01-23.18-.13 1.35 1.35 0 01-.86-.22 1.38 1.38 0 01-.29-.91c-.34-5.85.68-11.71.35-17.56-.12-2.14-.43-4.27-.46-6.42-.13-8.71 4.18-17.24 2.88-25.86a57.35 57.35 0 00-1.6-6.42c-4.11-15-3.24-30.77-2.34-46.25a1.18 1.18 0 01.2-.7 1.23 1.23 0 01.55-.3 28.48 28.48 0 0125.78 4.91c1.09.88 3.84 1.73 4.56 2.77 1 1.47-.32 2.92-.89 4.48a56.89 56.89 0 00-2.55 11.92z"
        opacity={0.1}
      />
      <path
        d="M877.18 589.69c1.17 2.43 2.74 4.7 3.43 7.31 1.83 6.89-2.88 14-2.32 21.06.18 2.23.87 4.4.92 6.63s-.77 4.71-2.75 5.73c-1.33.69-3 .62-4.25 1.4-2.11 1.28-2.35 4.22-2.14 6.67s.55 5.21-1 7.14c-1.19 1.49-3.23 2.06-4.51 3.47a17.3 17.3 0 00-1.94 3.27c-1.91 3.33-5.39 5.38-8.25 8s-5.28 6.46-4 10.08c.94 2.67 3.58 4.31 6.12 5.56a64.93 64.93 0 0014.57 5.15 3.51 3.51 0 001.67.08 3.64 3.64 0 001.46-1c2.95-2.89 6-5.92 7.36-9.81a10.27 10.27 0 011.12-2.69c1.56-2.18 4.84-2.11 7.07-3.61 2.6-1.77 3.23-5.29 4.93-7.94 1.61-2.5 4.19-4.22 6-6.56 3-3.88 3.81-9.05 6-13.48.93-1.89 2.12-3.64 2.86-5.61a30.4 30.4 0 001.37-7.23c1.41-11.68 5-23.44 2.74-35-.5-2.55-1.27-5-1.59-7.62-.56-4.54.32-9.17-.35-13.7a3.73 3.73 0 00-1.51-2.9 4.18 4.18 0 00-1.72-.36 118.6 118.6 0 00-17.78.41c-3 .29-6.37.9-8.16 3.35-1.53 2.09-1.45 4.91-2 7.46-.6 3.13-2.19 4.85-3.86 7.31s-.72 4.9.51 7.43z"
        fill="#3f3d56"
      />
      <path
        d="M900.25 670.95c-1.58 0-3.33-.09-4.55.91-1.52 1.24-1.55 3.53-1.3 5.49.7 5.47 2.49 10.74 4.28 16l5.32 15.61a35.87 35.87 0 011.85 6.88c.53 4-.27 8-.37 12 0 2 .13 4.22 1.38 5.83 2.26 2.9 6.67 2.56 10.3 1.94l17.71-3a21.72 21.72 0 004.38-1.07 29.68 29.68 0 004.25-2.4 65.38 65.38 0 0111-5c1.66-.62 3.52-1.42 4.12-3.09.71-2-.87-4.19-2.83-5s-4.15-.6-6.27-.53a46.72 46.72 0 01-15.4-2.09 9.61 9.61 0 01-4.06-2.09 10.12 10.12 0 01-2.3-4.57 71.27 71.27 0 01-2.68-16c-.2-4-.06-8-.22-12-.1-2.37.13-10-2-11.63-1.59-1.22-8.14 2.15-10.28 2.64a49.57 49.57 0 01-12.33 1.17zM841.9 682.07c-1.72 5.74-2 11.79-3.11 17.68s-3.1 11.91-7.47 16a9.69 9.69 0 00-2.17 2.4 5.06 5.06 0 00.75 5.23 13.13 13.13 0 004.39 3.37c11.29 6.16 24 9.26 36.81 10.8a15.36 15.36 0 006.82-.24c2.18-.74 4.11-2.7 4.07-5a2.53 2.53 0 00-.6-1.72 3.73 3.73 0 00-1.35-.79c-4.72-1.94-9.52-4.06-13.16-7.63s-5.94-9-4.53-13.86a27.38 27.38 0 013.34-6.41 106.05 106.05 0 005-9.7l4.4-9.23c1.28-2.69 2.59-5.47 2.8-8.46a40.57 40.57 0 01-16.21-2.59 25.54 25.54 0 01-6.67-4c-1.7-1.42-3.25-4.06-5.54-2.21-1.84 1.48-3 5.64-4.09 7.76a59.48 59.48 0 00-3.48 8.6z"
        fill="#2f2e41"
      />
      <path
        d="M906.36 452.89c-.44 3.83-4.16 6.37-7.71 7.88l22.46 7.18c-1.45-2.78-.27-6.18 1.17-9a50.81 50.81 0 014-6.4c.22-.31.47-.71.31-1.06a1.12 1.12 0 00-.63-.49c-4.62-2.06-9.38-4.19-14.43-4.94-1.46-.22-4.22-.8-5.31.69s.38 4.37.14 6.14z"
        fill="#fbbebe"
      />
      <path
        d="M906.36 452.89c-.44 3.83-4.16 6.37-7.71 7.88l22.46 7.18c-1.45-2.78-.27-6.18 1.17-9a50.81 50.81 0 014-6.4c.22-.31.47-.71.31-1.06a1.12 1.12 0 00-.63-.49c-4.62-2.06-9.38-4.19-14.43-4.94-1.46-.22-4.22-.8-5.31.69s.38 4.37.14 6.14z"
        opacity={0.1}
      />
      <circle cx={919.45} cy={438.38} r={17.62} fill="#fbbebe" />
      <path
        d="M934.67 583.35c-1.7 2-4.71 2.44-7.34 2-6.15-1-11.19-5.53-17.2-7.16-7.38-2-15.2.57-22.16 3.71s-13.9 6.95-21.52 7.55c6.89-15.36 2.95-33.85 9.53-49.34 1.62-3.78 3.87-7.44 4.23-11.53.45-5.09-2.09-10-2.48-15.07-.36-4.51 1-9 2.29-13.29l4.83-15.85c1.8-5.9 3.65-11.91 7.14-17 1.28-1.87 1.68-5.65 3.64-6.79 4.28-2.46 10.77.65 15.41.82s8.87 3.47 11.58 7.2c2.87 3.94 4.5 8.63 6 13.27a125.22 125.22 0 015.34 21.23c.15 1.08.28 2.16.38 3.25 1 10.27-.46 20.6-.54 30.91v.08c-.09 13.08 2 26.09 2.4 39.17.06 2.43 0 5.04-1.53 6.84z"
        fill="#f86d70"
      />
      <path
        d="M933.8 537.35c-3.45-.87-6.58-3.09-9.25-5.53a39 39 0 01-6.14-6.95 50.28 50.28 0 01-5.29-11.16 129.34 129.34 0 01-7-32.28c-.26-3-.34-6.21 1.45-8.59a7.23 7.23 0 018.74-2.13c2.37 1.16 3.9 3.49 5.31 5.71 2.82 4.43 5.65 8.9 7.46 13.82.8 2.18 1.39 4.43 2.17 6.62a61 61 0 002.74 6.33c.15 1.08.28 2.16.38 3.25.93 10.22-.49 20.55-.57 30.91z"
        opacity={0.1}
      />
      <path
        d="M907.61 470.9c-1.78 2.37-1.7 5.62-1.45 8.59a129.28 129.28 0 007 32.27 49.43 49.43 0 005.29 11.16 38.67 38.67 0 006.14 6.95c3.4 3.11 7.54 5.88 12.15 5.92a23.42 23.42 0 007.56-1.65l37.51-12.74c.38-2.15-1.13-4.64-1.84-6.7l-2-5.94c-.57-1.63-1.24-3.4-2.72-4.29s-3.85.33-5.09 1.32-2.19 2.29-3.4 3.3c-2.32 1.92-5.37 2.63-8.3 3.29l-8.43 1.9a35.6 35.6 0 01-9.38 1.24c-2.35-7.17-6.82-13.49-9.35-20.61-.78-2.18-1.38-4.43-2.18-6.61-1.81-4.92-4.64-9.39-7.45-13.82-1.41-2.23-2.94-4.56-5.31-5.71a7.25 7.25 0 00-8.75 2.13z"
        fill="#f86d70"
      />
      <path
        d="M913.83 442.35a8.9 8.9 0 011.06-3.29 2.79 2.79 0 013-1.33c1.76.55 2.35 3.28 4.19 3.37 1.24.06 2.13-1.2 2.52-2.39s.6-2.52 1.53-3.36a5.61 5.61 0 012.18-1c4.27-1.35 8.68-3.85 10.1-8.1a4.9 4.9 0 00.23-2.7c-.65-2.69-4-3.5-6.55-4.48s-5-2.62-7.5-3.88-5.4-2.16-8.15-1.52a40.67 40.67 0 00-4.11 1.54c-4.14 1.43-9.22.77-12.43 3.75a13 13 0 00-3 5.25c-2.25 6.21-3.66 13.6.05 19.06 2.28 3.37 4.51 7.22 8.91 7.62 5.12.46 7.16-4.22 7.97-8.54z"
        fill="#2f2e41"
      />
      <g opacity={0.1}>
        <path d="M921.65 436.59c.39-1.18.6-2.52 1.52-3.36a5.83 5.83 0 012.18-1c4.28-1.35 8.68-3.84 10.11-8.1a4.89 4.89 0 00.22-2.7 3.39 3.39 0 00-.53-1.19c1.63.7 3.05 1.65 3.45 3.31a4.9 4.9 0 01-.23 2.7c-1.42 4.25-5.83 6.75-10.1 8.1a5.61 5.61 0 00-2.18 1c-.93.84-1.14 2.18-1.53 3.36s-1.28 2.45-2.52 2.39-1.84-1.19-2.63-2.14c1.09-.14 1.87-1.28 2.24-2.37zM902.93 448.75c5.14.47 7.17-4.2 8-8.52a8.9 8.9 0 011.06-3.29 2.78 2.78 0 013-1.32c.95.29 1.56 1.23 2.21 2a3 3 0 00-2.26 1.4 8.9 8.9 0 00-1.06 3.29c-.81 4.32-2.85 9-8 8.52a8.2 8.2 0 01-5.28-2.73 7.45 7.45 0 002.33.65z" />
      </g>
      <path
        d="M170.78 650.29l19.14-11.26a46.29 46.29 0 00-9.79-11.7l-36.11 11.23 28.34-16.64a46 46 0 00-68.1 40.35c0 25.4 20.59 26.29 46 26.29s46-.89 46-26.29a45.71 45.71 0 00-4-18.66z"
        fill={color}
      />
      <path
        d="M175.65 674.99a35.81 35.81 0 00-6.78-5.33c-3.48-2.31-7.07-4.67-11.17-5.45-3.6-.69-7.31-.11-11-.31a25.65 25.65 0 01-16.81-7.71c-2.61-2.7-4.67-6-7.81-8.09-3.39-2.22-7.69-2.7-11.71-2.15a31.2 31.2 0 00-3.46.71 45.9 45.9 0 00-2.72 15.61c0 25.4 20.59 26.29 46 26.29 12.33 0 23.52-.21 31.78-3.33l-1.38-2.58a36.08 36.08 0 00-4.94-7.66z"
        opacity={0.1}
      />
      <path
        d="M583.96 714.6l-25.39-14.93a61.14 61.14 0 0113-15.52l47.89 14.89-37.53-22.06a61 61 0 0190.31 53.5c0 33.69-27.31 34.86-61 34.86s-61-1.17-61-34.86a60.84 60.84 0 015.23-24.75z"
        fill={color}
      />
      <path
        d="M577.49 747.35a47.57 47.57 0 019-7.07c4.61-3.06 9.38-6.18 14.81-7.22 4.77-.91 9.69-.14 14.54-.42a34.09 34.09 0 0022.3-10.21c3.46-3.59 6.19-8 10.36-10.73 4.49-3 10.19-3.59 15.52-2.85a38.27 38.27 0 014.6.94 60.88 60.88 0 013.6 20.69c0 33.69-27.31 34.86-61 34.86-16.35 0-31.19-.27-42.15-4.41l1.83-3.42c1.91-3.57 3.85-7.16 6.59-10.16z"
        opacity={0.1}
      />
    </svg>
  );
};

SvgMonitor.propTypes = {
  color: PropTypes.string
};
SvgMonitor.defaultProps = {
  color: "primary"
};
const MemoSvgMonitor = React.memo(SvgMonitor);
export default MemoSvgMonitor;
