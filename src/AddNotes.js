import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgAddNotes = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 853 603.81"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M725.72 7h-155.7a543.76 543.76 0 000 192.93c45.59-8 98.57-6.6 155.7 0-11.59-65.72-12.12-130.1 0-192.93z"
        opacity={0.1}
      />
      <path
        d="M43.6 593.91c3-5.51-.4-12.26-4.29-17.18s-8.61-10-8.51-16.29c.15-9 9.7-14.31 17.33-19.08a84 84 0 0015.56-12.51 23 23 0 004.78-6.4c1.58-3.52 1.54-7.52 1.44-11.38q-.51-19.26-1.91-38.48"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M82.5 471.84a14 14 0 00-7-11.5l-3.14 6.21.1-7.52a14 14 0 1010 12.81zM57.5 566.83a14 14 0 11.68-11.3l-8.77 7.13 9.65-2.23a14 14 0 01-1.56 6.4zM50.55 539.58a14 14 0 01-4.45-27.54l-.08 5.79 3.18-6.29a14 14 0 0114.71 13.37 13.84 13.84 0 01-.6 4.79 14 14 0 01-12.76 9.88zM84.62 516.91a14 14 0 116.21-26.27l-2.48 6.8 5.1-4.9a14 14 0 014.53 9.69 13.69 13.69 0 01-.35 3.86 14.05 14.05 0 01-13.01 10.82z"
        fill="#57b894"
      />
      <path
        d="M80.62 475.57c-3.24.36-6.39 1.37-9.64 1.57s-6.82-.58-8.88-3.1c-1.1-1.37-1.66-3.09-2.59-4.57a10 10 0 00-3.54-3.33 14 14 0 1026.24 9.32c-.53.02-1.06.06-1.59.11zM84.62 516.91a14 14 0 01-13.35-20 10.4 10.4 0 012.82 2.83c1 1.51 1.61 3.25 2.78 4.64 2.19 2.57 5.92 3.41 9.31 3.25s6.66-1.11 10-1.42c.47 0 .94-.07 1.42-.09a14.05 14.05 0 01-12.98 10.79zM50.55 539.58a14 14 0 01-13.46-19.76 11.48 11.48 0 013 2.85c1.09 1.54 1.77 3.31 3 4.73 2.37 2.64 6.35 3.57 9.93 3.48s6.83-.93 10.28-1.19a14 14 0 01-12.75 9.89zM57.5 566.83a14.017 14.017 0 01-25.59-11.45 13.8 13.8 0 013.08 2.74c1.34 1.63 2.22 3.47 3.76 5 2.87 2.82 7.5 4 11.63 4.09a62.17 62.17 0 007.12-.38z"
        opacity={0.1}
      />
      <path
        d="M22.43 591.52s11.08-4.34 14.42-6.72 17-5.22 17.86-1.4 16.65 19 4.15 19.06-29.06 2.05-32.4 0-4.03-10.94-4.03-10.94z"
        fill="#656380"
      />
      <path
        d="M59.08 601.13c-12.51.1-29.06 2-32.39 0-2.54-1.54-3.55-7.09-3.89-9.65h-.37s.7 8.93 4 11 19.89.08 32.4 0c3.61 0 4.85-1.31 4.78-3.22-.47 1.13-1.84 1.85-4.53 1.87z"
        opacity={0.2}
      />
      <path
        d="M817.27 589.5c-4.74-8.78.64-19.54 6.82-27.37s13.73-16 13.57-26c-.23-14.35-15.45-22.81-27.62-30.42a134.77 134.77 0 01-24.79-19.93c-3-3-5.87-6.31-7.62-10.2-2.52-5.61-2.45-12-2.29-18.13q.79-30.71 3-61.34"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M755.26 395.03a22.31 22.31 0 0111.16-18.32l5 9.9-.15-12a22.37 22.37 0 11-16 20.41zM795.14 546.42a22.36 22.36 0 10-1.08-18l14 11.37-15.37-3.57a22.25 22.25 0 002.45 10.2zM806.19 502.99a22.37 22.37 0 007.09-43.88l.12 9.22-5.06-10h-.06a22.37 22.37 0 10-2.09 44.69zM751.89 466.91a22.37 22.37 0 10-9.89-41.86l4 10.83-8.13-7.8a22.37 22.37 0 0014.02 38.83z"
        fill="#57b894"
      />
      <path
        d="M758.26 400.99c5.17.57 10.19 2.18 15.37 2.5s10.87-.92 14.14-5c1.77-2.17 2.65-4.91 4.14-7.28a16.06 16.06 0 015.63-5.3 22.37 22.37 0 11-41.81 14.85c.85.08 1.69.15 2.53.23zM751.89 466.91a22.39 22.39 0 0021.28-32 16.51 16.51 0 00-4.5 4.51c-1.59 2.4-2.56 5.18-4.43 7.39-3.48 4.09-9.44 5.43-14.84 5.19s-10.6-1.78-16-2.28c-.75-.06-1.5-.11-2.26-.13a22.37 22.37 0 0020.75 17.32zM806.19 502.99a22.37 22.37 0 0021.46-31.49 17.83 17.83 0 00-4.73 4.55c-1.74 2.45-2.82 5.27-4.86 7.54-3.77 4.2-10.11 5.68-15.83 5.54-5.54-.12-10.87-1.48-16.38-1.9a22.36 22.36 0 0020.34 15.76zM795.14 546.42a22.37 22.37 0 0040.78-18.25 22.27 22.27 0 00-4.91 4.38c-2.13 2.59-3.53 5.53-6 7.94-4.57 4.49-11.95 6.34-18.52 6.51a97.1 97.1 0 01-11.35-.58z"
        opacity={0.1}
      />
      <path
        d="M851 583.39s-17.65-4.54-23-8.33-27.16-8.31-28.48-2.24-26.53 30.22-6.6 30.38 46.31.9 51.62-2.34 6.46-17.47 6.46-17.47z"
        fill="#656380"
      />
      <path
        d="M792.6 601.09c19.93.16 46.31.89 51.62-2.34 4-2.47 5.65-11.3 6.19-15.38h.59s-1.12 14.24-6.43 17.47-31.69 2.5-51.62 2.34c-5.75 0-7.74-2.09-7.63-5.12.8 1.85 2.99 2.99 7.28 3.03z"
        opacity={0.2}
      />
      <path
        d="M243.39 11.85H87.69c12.13 62.83 11.59 127.21 0 192.93 57.13-6.6 110.12-8 155.7 0a543.76 543.76 0 000-192.93z"
        opacity={0.1}
      />
      <path
        d="M395.02 95.28c-15.2 1.08-29.46 11.7-30.5 25.47-.57 7.49 2.56 15.13 1.29 22.52-1.67 9.78-10.63 17-20 21.91s-19.73 8.61-27.52 15.37-12.35 18-6.85 26.81c2.11 3.38 5.44 6 8.14 9 7.34 8.23 9.82 19.74 6.36 29.51-3.15 8.85-10.83 16.65-10 26.05.8 9 9.59 16.3 19.11 19.15s19.7 2.18 29.55 1.47c11.37-.81 24.12-2.29 30.73-10.53 7.1-8.85 3.93-21.6 7.71-32.06 7.54-20.84 38.73-25.91 51.19-44.56 6-9 6.91-20.09 6.82-30.77-.26-33.82-18.4-82.71-66.03-79.34z"
        fill="#3f3d56"
      />
      <path
        d="M392.5 168.22s5 16-12 25 14 31 14 31l24 9 27-12-5-41s-23 8-23-21z"
        fill="#a0616a"
      />
      <path
        d="M392.5 168.22s5 16-12 25 14 31 14 31l24 9 27-12-5-41s-23 8-23-21z"
        opacity={0.1}
      />
      <path
        d="M429.5 528.22s-5 34-2 38 17 2 17 2 3-34 4-38-19-2-19-2z"
        fill="#a0616a"
      />
      <path
        d="M445.01 562.54s-14.51-2.32-14.51 1.68c0 0-6 3-6 0s-5.5 31.5-1.5 36.5 19.28-.48 23 2c3 2 25.5 1.5 26.5-3.5s1-9-8-14-19.49-22.68-19.49-22.68z"
        fill="#3f3d56"
      />
      <path
        d="M445.01 562.54s-14.51-2.32-14.51 1.68c0 0-6 3-6 0s-5.5 31.5-1.5 36.5 19.28-.48 23 2c3 2 25.5 1.5 26.5-3.5s1-9-8-14-19.49-22.68-19.49-22.68z"
        opacity={0.1}
      />
      <path
        d="M394.5 525.22s7 30 4 44l21-6s-13-35-12-38-13 0-13 0z"
        fill="#a0616a"
      />
      <path
        d="M402.5 563.22s13-7 17 0 16 35 9 38-29 2-30-9-2-27-2-27 5 2 6-2zM366.5 307.22s-19 39 5 101c0 0 12 36 6 57s13 70 13 70l23-4s-9-66-6-73 1-82 1-82 27 51 23 92-5 64-5 64l26-1a402 402 0 018-41c5-19 8-109-5-136l-3-33z"
        fill="#3f3d56"
      />
      <circle cx={398.5} cy={153.21} r={24} fill="#a0616a" />
      <ellipse
        cx={571.5}
        cy={286.81}
        rx={28}
        ry={15}
        transform="rotate(-7.3 -676.165 1572.58)"
        fill="#3f3d56"
      />
      <path
        d="M425.69 134.72c-1.32 7.31-12 14.12-25.78 15.88-15.06 1.93-28.14-2.93-29.6-10.88a8.14 8.14 0 00-.08 2.56c1 8.21 14.34 13.28 29.68 11.32s26.92-10.22 25.86-18.44c-.02-.15-.05-.25-.08-.44z"
        opacity={0.1}
      />
      <path
        d="M365.26 197.16c-3.22-1.33-6.92.73-9.08 3.46s-3.4 6.1-5.53 8.85c-2.4 3.08-5.79 5.2-8.95 7.51a75.74 75.74 0 00-11.37 10.25c-1.82 2-3.59 4.18-6 5.52-3.83 2.15-8.67 1.77-12.71 0s-7.43-4.63-10.74-7.51q-14.76-12.87-29.12-26.33c-6.81-6.36-16.62-9.56-25.88-10.58-2.26-.25-4.81-.26-6.49 1.27a5.92 5.92 0 00-1.73 4.18c-.21 5.21 4.22 9.55 9 11.66s10.08 2.75 14.89 4.75a29.13 29.13 0 0111.63 8.88c3.36 4.28 7.43 7.78 10.63 12.17 1.46 2 2.75 4.11 4.15 6.15a134.78 134.78 0 0011.08 13.52c4.63 5.15 10.29 10.73 17.19 10.21 2.88-.21 5.54-1.5 8.13-2.77 8.09-4 16.25-8 23.34-13.55 4.15-3.25 7.9-7 12.25-10 4.16-2.85 8.91-5 12.28-8.77a18.26 18.26 0 004.06-16.2 18.93 18.93 0 00-11.03-12.67zM456.74 187.16c3.22-1.33 6.92.73 9.08 3.46s3.4 6.1 5.53 8.85c2.4 3.08 5.79 5.2 8.95 7.51a75.74 75.74 0 0111.37 10.25c1.82 2 3.59 4.18 6 5.52 3.83 2.15 8.67 1.77 12.71 0s7.43-4.63 10.74-7.51q14.8-12.92 29.16-26.33c6.81-6.36 16.62-9.56 25.88-10.58 2.26-.25 4.81-.26 6.49 1.27a5.92 5.92 0 011.73 4.18c.21 5.21-4.22 9.55-9 11.66s-10.08 2.75-14.89 4.75a29.13 29.13 0 00-11.63 8.88c-3.36 4.28-7.43 7.78-10.63 12.17-1.46 2-2.75 4.11-4.15 6.15a134.78 134.78 0 01-11.12 13.52c-4.63 5.15-10.29 10.73-17.19 10.21-2.88-.21-5.54-1.5-8.13-2.77-8.09-4-16.25-8-23.34-13.55-4.15-3.25-7.9-7-12.25-10-4.16-2.85-8.91-5-12.28-8.77a18.26 18.26 0 01-4.06-16.2 18.93 18.93 0 0111.03-12.67z"
        fill="#a0616a"
      />
      <path
        d="M416.5 217.22a188.72 188.72 0 00-17-10c-8-4-17-17-17-17s-28 5-28 12 12 32 16 34 10 2 9 6 3 12 3 12 8 12 3 15-27 39-24 44 31 10 45 22 53-1 53-4-4-9-4-9-1-50 4-66 1-39-1-42c0 0 12-21 7-27s-29-9-31-8l-1.89 10.89a88.09 88.09 0 01-6.91 22c-1 2.17-1.87 4.11-2.2 5.09-1 3.02-7 .02-7 .02z"
        fill={color}
      />
      <path
        d="M564.02 192.91c45.59-8 98.57-6.6 155.7 0-11.59-65.72-12.12-130.1 0-192.93h-155.7a543.76 543.76 0 000 192.93z"
        fill="#f2f2f2"
      />
      <path fill={color} d="M589.5 32.43h96v13h-96zM589.5 59.43h96v13h-96z" />
      <path
        d="M250.39 196.78c-45.58-8-98.57-6.6-155.7 0 11.59-65.72 12.13-130.1 0-192.93h155.7a543.76 543.76 0 010 192.93z"
        fill="#f2f2f2"
      />
      <path fill={color} d="M128.5 39.43h96v13h-96z" />
      <path
        fill="#3f3d56"
        d="M98 601.71h657v2H98zM773 601.71h80v2h-80zM0 601.71h80v2H0z"
      />
      <path
        d="M224.15 325.84a14 14 0 00-7-11.5l-3.14 6.21.09-7.52a13.86 13.86 0 00-4.62-.56 14 14 0 1014.68 13.37z"
        fill="#f2f2f2"
      />
      <path
        d="M222.26 329.57c-3.24.36-6.39 1.37-9.64 1.57s-6.82-.58-8.88-3.1c-1.1-1.37-1.66-3.09-2.59-4.57a10 10 0 00-3.54-3.33 14 14 0 1026.24 9.32c-.53.02-1.06.06-1.59.11z"
        opacity={0.03}
      />
      <path
        d="M566.66 461.59a14 14 0 00-13.41 1.32l4.22 5.54-6.73-3.37a13.86 13.86 0 00-2.51 3.91 14 14 0 1018.43-7.37z"
        fill="#f2f2f2"
      />
      <path
        d="M569.2 464.91c-1.1 3.07-1.56 6.34-2.8 9.36s-3.5 5.88-6.67 6.63c-1.71.4-3.5.15-5.24.34a10 10 0 00-4.54 1.73 13.87 13.87 0 005.65 4.41 14 14 0 0014.18-24c-.21.53-.4 1.04-.58 1.53z"
        opacity={0.03}
      />
      <path
        d="M516.96 27.23a14 14 0 00-13.47-.11l3.63 5.95-6.35-4a14 14 0 1016.19-1.79z"
        fill="#f2f2f2"
      />
      <path
        d="M519.14 30.81c-1.4 2.93-2.21 6.14-3.75 9s-4.08 5.49-7.31 5.91c-1.74.22-3.5-.21-5.25-.2a10 10 0 00-4.7 1.25 13.88 13.88 0 005.17 5 14 14 0 0016.58-22.36c-.26.5-.51.92-.74 1.4z"
        opacity={0.03}
      />
    </svg>
  );
};

SvgAddNotes.propTypes = {
  color: PropTypes.string
};
SvgAddNotes.defaultProps = {
  color: "primary"
};
const MemoSvgAddNotes = React.memo(SvgAddNotes);
export default MemoSvgAddNotes;
