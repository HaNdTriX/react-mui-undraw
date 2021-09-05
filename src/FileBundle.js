import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFileBundle = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1024 806.04"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M530.37 77.02c6.76 44.56-12 84.37-12 84.37s-29.77-32.43-36.53-77 12-84.37 12-84.37 29.77 32.42 36.53 77zM656.07 148.02c24.53-.27 44.56 12.89 44.56 12.89s-19.74 13.59-44.27 13.85-44.56-12.89-44.56-12.89 19.74-13.58 44.27-13.85z"
        fill={color}
      />
      <path
        d="M587.09 80.28c-22.83 25.09-27.66 57.88-27.66 57.88s32.18-7.9 55-33 27.67-57.87 27.67-57.87-32.18 7.9-55.01 32.99z"
        fill="#46455b"
      />
      <ellipse
        cx={512}
        cy={782.54}
        rx={512}
        ry={23.5}
        fill={color}
        opacity={0.1}
      />
      <path fill="#eeeff0" d="M208.3 545.74h150.64v229.59H196V545.74h12.3" />
      <path fill={color} d="M216.57 578.66h121.79v26.33H216.57z" />
      <path
        fill="#373e46"
        d="M227.27 637.5h100.4v1.65h-100.4zM227.27 646.55h100.4v1.65h-100.4zM227.27 655.6h100.4v1.65h-100.4zM227.27 664.65h100.4v1.65h-100.4zM227.27 673.7h100.4v1.65h-100.4zM227.27 682.76h100.4v1.65h-100.4zM227.27 691.81h100.4v1.65h-100.4zM227.27 700.86h100.4v1.65h-100.4zM227.27 709.91h100.4v1.65h-100.4zM227.27 718.96h100.4v1.65h-100.4zM227.27 728.02h100.4v1.65h-100.4z"
      />
      <path
        fill="#eeeff0"
        d="M442.83 545.74h150.64v229.59H430.53V545.74h12.3"
      />
      <path fill={color} d="M451.1 578.66h121.79v26.33H451.1z" />
      <path
        fill="#373e46"
        d="M461.8 637.5h100.4v1.65H461.8zM461.8 646.55h100.4v1.65H461.8zM461.8 655.6h100.4v1.65H461.8zM461.8 664.65h100.4v1.65H461.8zM461.8 673.7h100.4v1.65H461.8zM461.8 682.76h100.4v1.65H461.8zM461.8 691.81h100.4v1.65H461.8zM461.8 700.86h100.4v1.65H461.8zM461.8 709.91h100.4v1.65H461.8zM461.8 718.96h100.4v1.65H461.8zM461.8 728.02h100.4v1.65H461.8z"
      />
      <path fill="#eeeff0" d="M677.36 545.74H828v229.59H665.06V545.74h12.3" />
      <path fill={color} d="M685.64 578.66h121.79v26.33H685.64z" />
      <path
        fill="#373e46"
        d="M696.33 637.5h100.4v1.65h-100.4zM696.33 646.55h100.4v1.65h-100.4zM696.33 655.6h100.4v1.65h-100.4zM696.33 664.65h100.4v1.65h-100.4zM696.33 673.7h100.4v1.65h-100.4zM696.33 682.76h100.4v1.65h-100.4zM696.33 691.81h100.4v1.65h-100.4zM696.33 700.86h100.4v1.65h-100.4zM696.33 709.91h100.4v1.65h-100.4zM696.33 718.96h100.4v1.65h-100.4zM696.33 728.02h100.4v1.65h-100.4z"
      />
      <path
        fill="none"
        stroke="#373e46"
        strokeMiterlimit={10}
        d="M512 545.74v-158l-234.53 158M746.53 545.74L512 387.74"
      />
      <path d="M399.93 87.54H380v372h264v-372H399.93z" opacity={0.1} />
      <path fill="#fff" d="M404.45 95.04h234.23v357H385.32v-357h19.13" />
      <path fill={color} d="M417.31 146.22h189.38v40.95H417.31z" />
      <path
        fill="#373e46"
        d="M433.95 237.71h156.11v2.56H433.95zM433.95 251.78h156.11v2.56H433.95zM433.95 265.86h156.11v2.56H433.95zM433.95 279.93h156.11v2.56H433.95zM433.95 294.01h156.11v2.56H433.95zM433.95 308.09h156.11v2.56H433.95zM433.95 322.16h156.11v2.56H433.95zM433.95 336.24h156.11v2.56H433.95zM433.95 350.31h156.11v2.56H433.95zM433.95 364.39h156.11v2.56H433.95zM433.95 378.46h156.11v2.56H433.95z"
      />
      <path
        d="M132.64 701.91c.17 4-2.36 7.51-4.77 10.68a38.9 38.9 0 00-2.93 4.67c-2.62 4.66-8.25 6.88-11.3 11.28-.73 1.07-1.3 2.24-1.95 3.37a44.78 44.78 0 01-8.23 10.45L98 747.52a17.5 17.5 0 00-4.1 4.91 15.94 15.94 0 00-1.06 7.27v1.38a41.61 41.61 0 001 9 4.49 4.49 0 01.16 2.84 3.69 3.69 0 01-2.43 1.82 5.14 5.14 0 01-3.32.22 5.64 5.64 0 01-2.48-2.22c-3.22-4.42-4.52-9.89-6.44-15a3.38 3.38 0 01.74-3.18 18.25 18.25 0 012.51-2.29c3.8-3.32 5.57-8.33 7-13.16s2.85-9.88 6.17-13.67c2.15-2.46 5-4.23 7.38-6.44 6-5.54 9-13.61 10.52-21.61a16 16 0 015.57-.07l9.82 1.3a4.45 4.45 0 012.92 1.15 3.53 3.53 0 01.68 2.14zM174.57 710.02a10.47 10.47 0 01-1.53 4.17 37.51 37.51 0 01-4 5.12c-3.75 4.31-4.39 10.44-6.78 15.63-.77 1.68-1.74 3.27-2.52 5-2.06 4.41-2.82 9.26-3.27 14.14-.05.62-.11 1.25-.15 1.88s-.12 1.55-.18 2.32c-.15 2-.28 4.19.58 6 .45 1 1.17 1.74 1.2 2.79-1.48 1.44-4 1.27-5.72.11a11.37 11.37 0 01-3.63-4.93 45.55 45.55 0 01-3.41-10.82c-.26-1.41-.38-3.08.64-4.1a15.68 15.68 0 011.79-1.22c1.25-1 1.61-2.7 1.89-4.27q1.44-8.09 2.89-16.17a36.94 36.94 0 01.85-3.92c.82-2.89 2.07-6.11 4.41-8a2.43 2.43 0 00.74-2.23 6.87 6.87 0 00-.92-2.27c-1.74-3.12-3.83-6.26-7-8a35.93 35.93 0 0111-6.29 4.26 4.26 0 012.26-.39 3.89 3.89 0 011.18.47 20.1 20.1 0 015.39 5c2.33 2.92 4.72 6.29 4.29 9.98z"
        fill="#efb7b9"
      />
      <path
        d="M98.14 773.79a11.51 11.51 0 00-3.33-2.21 2.25 2.25 0 00-.9-.31c-.77 0-1.35.66-2 1a3.68 3.68 0 01-3.5 0 7.21 7.21 0 01-2.6-2.49c-1.4-2.07-1.68-4.13-2.26-6.4l6.11-1.15a13.26 13.26 0 003.19-1.2v-1.38c-1.13.33-3.52 1.44-4.09 1.57a43.79 43.79 0 01-5.58.89c-.29-.58-.71-1.08-1-1.65a9.32 9.32 0 01-1.28-3.72 4.63 4.63 0 00-.3-1.53 1.2 1.2 0 00-1.24-.75 1.49 1.49 0 00-.55.27 10.67 10.67 0 00-3.82 4.78c-1.14 2.86-1 6.06-1.43 9.11-.35 2.29-1.05 4.56-.93 6.87a.62.62 0 00.1.35.65.65 0 00.38.18c1.27.28 2.74.53 3.77-.26s1.18-2.29 1.38-3.59a17.66 17.66 0 011.55-5 10.32 10.32 0 012.32 6.86c0 1.37-.16 2.94.78 3.94a3.9 3.9 0 001.64.94 16.59 16.59 0 003.88.84 32.74 32.74 0 007.19-.37c.75-.09 1.51-.19 2.25-.35a2.63 2.63 0 001.06-.44 2 2 0 00.62-1.21 4.42 4.42 0 00-1.41-3.59zM161.12 766.14a7.6 7.6 0 00-2-1.29 4.37 4.37 0 00-1.93-.64 5.9 5.9 0 00-2.2.67 2.64 2.64 0 01-2.24.1 3 3 0 01-1.11-1.58c-.86-2-1.5-4.18-2.25-6.26a1.52 1.52 0 01.74-.61 2 2 0 01.72-.09 21.15 21.15 0 005.39-.53c0-.63.1-1.26.15-1.88a10.68 10.68 0 00-3.77.32 5.88 5.88 0 01-2.67.37c-.62-.13-1.21-.51-1.81-.59-.28-.53-.59-1-.89-1.56-.75-1.33-1-2.88-1.72-4.18a1.45 1.45 0 00-1.18-.79 2 2 0 00-1.34.79 14.26 14.26 0 00-3.16 4.1 12.13 12.13 0 00-.68 2.22 54.15 54.15 0 00-1.43 13 8.13 8.13 0 003.43.33q.89-4.42 2.17-8.75a.41.41 0 01.16-.27c.19-.1.38.1.49.28a22.17 22.17 0 012.51 5 13.76 13.76 0 001.29 3.7 5.71 5.71 0 003.19 2.16 16.48 16.48 0 003.9.5l2 .1a8.14 8.14 0 003.15-.24 2.82 2.82 0 002-2.26 2.77 2.77 0 00-.91-2.12zM170.28 698.55a6.22 6.22 0 01-3.09 1.4l-3.39.83a1.39 1.39 0 00-1 .53c-.19.36-.06.8-.15 1.19a1 1 0 01-.21.42 2.48 2.48 0 01-1.75.62 4.44 4.44 0 00-1.64.25 1.32 1.32 0 00-.55.44c-.17.25-.25.56-.43.79a1.93 1.93 0 01-1.17.61 9.61 9.61 0 01-1.41.22 10.47 10.47 0 01-5.48-1 1.92 1.92 0 00-1.37-.33 1.35 1.35 0 00-.68.55 8.64 8.64 0 01-.57.78c-.87.94-2.39.69-3.64.43-.78-.17-1.56-.31-2.34-.44a106.11 106.11 0 00-14.17-1c-6.15-.19-12.29-.36-18.23-1.81-1.3-.31-2.87-1-2.8-2.39 0-.76.64-1.41.64-2.17 0-1.29-1.59-2-2.86-2.2.46-7.08 4.71-13.27 6.92-20 .55-1.67 1-3.38 1.58-5 2.69-7.44 8.61-13.16 13.53-19.36a11.31 11.31 0 001.84-2.9 12.57 12.57 0 00.65-3.91l.27-4.67a82.69 82.69 0 0121.54 1.34 2 2 0 011.23.61 1.9 1.9 0 01.27.82c.28 1.7.47 3.42.58 5.14a4.66 4.66 0 00.16 1.12 4.78 4.78 0 00.78 1.27c4.17 5.29 6.66 11.76 8.66 18.29s3.59 13.17 6.11 19.51c.86 2.19 2 4.65 2.22 7a2.14 2.14 0 01-.05 3.02z"
        fill="#464353"
      />
      <path
        d="M141.45 705.81a106.11 106.11 0 00-14.17-1l.39-13.15c.09-2.91.18-5.83.53-8.72.49-4.11 1.49-8.15 2-12.25a54.41 54.41 0 00.39-7.1 42.42 42.42 0 01.2-7.22c.33-2 1.18-4.73 3-5.8 1.21 1.65-.65 6.28-.86 8.26-.45 4.13.66 8.24 1.62 12.27 1.15 4.84 2.09 9.73 3 14.62q1.97 10.02 3.9 20.09zM155.53 705.85a10.47 10.47 0 01-5.48-1 1.92 1.92 0 00-1.37-.33 1.35 1.35 0 00-.68.55c-1.61-7.64-1.52-15.6-2.8-23.32-.45-2.76-1.08-5.57-.55-8.3.57-2.93 2.42-5.47 3.14-8.36a22.6 22.6 0 00.4-5.81 13.83 13.83 0 00-1.24-5c1.69.28 3.07 1.94 3.75 3.44a16.08 16.08 0 011.1 5.89c.27 4.86.31 9.71.24 14.57a54.89 54.89 0 00.15 6.79c.25 2.23.8 4.41 1 6.64.21 2.68-.1 5.42.55 8 .5 2.08 1.64 4.18 1.79 6.24zM162.48 702.92a2.48 2.48 0 01-1.75.62 4.44 4.44 0 00-1.64.25l-2.82-17.42a59.07 59.07 0 01-.81-6.46c-.12-2.51.07-5-.1-7.53a54 54 0 00-1.73-9.07c-.44-1.77-2.44-7.07-1.32-8.57 1.75 1.13 2.82 3.55 3.41 5.49a35.13 35.13 0 011.16 6.86q.66 6.7 1.34 13.43c.74 7.44 1.51 15 4.1 22 .06.12.11.26.16.4z"
        opacity={0.1}
      />
      <path
        d="M177.22 620.47c1.25-1.06 2.51-2.13 3.67-3.3a50.55 50.55 0 004.49-5.5 28.35 28.35 0 003.79-6.31c1-2.63 1.34-5.62 3.12-7.8a1.85 1.85 0 01.81-.63c1-.32 1.77 1 2 2 .95 5.15-1.31 10.29-3.52 15a13.82 13.82 0 01-2.76 4.36 25.48 25.48 0 01-2.17 1.67 23 23 0 00-3.06 3c-1.58 1.8-3.1 3.67-4.53 5.6a59.44 59.44 0 01-5.55 7 13.89 13.89 0 01-7.68 4.22c.84-.12.56-5.06.47-5.68-.13-.91-.75-2-.77-2.85 0-1.08.42-1.24 1.32-2z"
        fill="#efb7b9"
      />
      <path
        d="M177.22 620.47c1.25-1.06 2.51-2.13 3.67-3.3a50.55 50.55 0 004.49-5.5 28.35 28.35 0 003.79-6.31c1-2.63 1.34-5.62 3.12-7.8a1.85 1.85 0 01.81-.63c1-.32 1.77 1 2 2 .95 5.15-1.31 10.29-3.52 15a13.82 13.82 0 01-2.76 4.36 25.48 25.48 0 01-2.17 1.67 23 23 0 00-3.06 3c-1.58 1.8-3.1 3.67-4.53 5.6a59.44 59.44 0 01-5.55 7 13.89 13.89 0 01-7.68 4.22c.84-.12.56-5.06.47-5.68-.13-.91-.75-2-.77-2.85 0-1.08.42-1.24 1.32-2z"
        opacity={0.1}
      />
      <path
        d="M141.88 589.31s-2.88 14.29-6.19 16.71 18.09 5.23 18.09 5.23.48-11.42 6.19-16.66-18.09-5.28-18.09-5.28z"
        fill="#efb7b9"
      />
      <path
        d="M136.19 604.57a6 6 0 00-3.66 2c-2.24 2.42-2.69 6.1-1.92 9.31a27 27 0 004.49 8.76 42 42 0 008.51 9.64 64 64 0 005.75 3.71 94.06 94.06 0 019.46 6.65 8.28 8.28 0 002.24 1.43 6.38 6.38 0 002.18.28 17 17 0 007.22-1.68 1.28 1.28 0 00.54-.39 1.48 1.48 0 000-1.17c-1.35-5.42 1.24-11.58-1.33-16.54-2.79.9-5.86 1.88-8.65 2.79a3.34 3.34 0 01-1.35.23 2.86 2.86 0 01-1.46-.8c-3-2.62-4.94-6.27-6.68-9.87s-3.43-7.33-6.15-10.26-5.21-4.51-9.19-4.09z"
        fill={color}
      />
      <path
        d="M136.19 604.57a6 6 0 00-3.66 2c-2.24 2.42-2.69 6.1-1.92 9.31a27 27 0 004.49 8.76 42 42 0 008.51 9.64 64 64 0 005.75 3.71 94.06 94.06 0 019.46 6.65 8.28 8.28 0 002.24 1.43 6.38 6.38 0 002.18.28 17 17 0 007.22-1.68 1.28 1.28 0 00.54-.39 1.48 1.48 0 000-1.17c-1.35-5.42 1.24-11.58-1.33-16.54-2.79.9-5.86 1.88-8.65 2.79a3.34 3.34 0 01-1.35.23 2.86 2.86 0 01-1.46-.8c-3-2.62-4.94-6.27-6.68-9.87s-3.43-7.33-6.15-10.26-5.21-4.51-9.19-4.09z"
        opacity={0.1}
      />
      <circle cx={153.07} cy={585.74} r={14.28} fill="#efb7b9" />
      <path
        d="M158.77 626.85v.06c-.83 1.53-2.06 2.82-2.91 4.34a19 19 0 00-1.77 5.63c-.27 1.3-.51 2.6-.73 3.91s-.44 2.65-.64 4c-4.31-1.46-9.09 1-13.56.1a27.86 27.86 0 00-4-.9c-1 0-2 .18-3 .09-1.65-.16-3.29-1.2-4.87-.67-.7.24-1.57.74-2.08.19a1.53 1.53 0 01-.26-.49 6.11 6.11 0 01-.53-3.5 11.35 11.35 0 011.49-2.67 12 12 0 001.16-5.15c.29-4.59.28-9.22 1-13.76s2.34-9.06 5.41-12.49a9 9 0 015.71-3.3c8.26-.67 14.93 3.88 18.54 11.11 2.13 4.18 3.27 9.35 1.04 13.5z"
        fill={color}
      />
      <path
        d="M182.93 622.38c1.26-1.07 2.52-2.13 3.67-3.31a49.3 49.3 0 004.49-5.49 28.09 28.09 0 003.8-6.32c1-2.62 1.33-5.61 3.12-7.79a1.75 1.75 0 01.8-.63c1-.32 1.77 1 2 2 1 5.15-1.32 10.3-3.53 15a13.62 13.62 0 01-2.75 4.36c-.67.62-1.45 1.11-2.17 1.66a21.84 21.84 0 00-3.06 3q-2.38 2.72-4.54 5.6a60.41 60.41 0 01-5.54 7 14 14 0 01-7.69 4.23c.85-.12.57-5.07.48-5.69a26.75 26.75 0 01-.77-2.84c0-1.09.42-1.25 1.31-2z"
        fill="#efb7b9"
      />
      <path
        d="M157.34 627.33v.06c-.82 1.53-2.06 2.81-2.91 4.34a18.86 18.86 0 00-1.77 5.63c-.26 1.3-.51 2.6-.73 3.91a52.55 52.55 0 01-5-3.23 41.78 41.78 0 01-8.52-9.64 27 27 0 01-4.49-8.76c-.77-3.21-.32-6.89 1.93-9.31a5.94 5.94 0 013.65-1.95c4-.43 6.5 1.11 9.22 4s4.41 6.65 6.15 10.26c.78 1.61 1.57 3.19 2.47 4.69z"
        opacity={0.1}
      />
      <path
        d="M141.9 606.47a6 6 0 00-3.65 2c-2.25 2.42-2.7 6.1-1.92 9.31s2.6 6 4.48 8.76a42.19 42.19 0 008.52 9.64 63.77 63.77 0 005.74 3.7 92.93 92.93 0 019.46 6.65 8 8 0 002.24 1.43 6.47 6.47 0 002.19.29 17.22 17.22 0 007.22-1.69 1.23 1.23 0 00.54-.39 1.46 1.46 0 000-1.16c-1.34-5.43 1.25-11.59-1.32-16.55l-8.66 2.79a3.16 3.16 0 01-1.35.23 3 3 0 01-1.46-.79c-3-2.62-4.94-6.27-6.68-9.88s-3.42-7.32-6.15-10.25-5.22-4.54-9.2-4.09z"
        fill={color}
      />
      <path
        d="M162.3 575.76c1.39-1.57 1.09-4.12-.12-5.83a13.43 13.43 0 00-5-3.77c-2.95-1.57-6.34-3.08-9.51-2a20.55 20.55 0 00-3.48 1.81c-2.1 1.17-4.42 1.91-6.56 3a10.4 10.4 0 00-5.12 4.88c-.9 2.17-.62 4.62-.38 7a45.61 45.61 0 01.07 10.89 20.26 20.26 0 01-4.06 10c-1.61 2-3.74 3.62-4.71 6a14.33 14.33 0 00-.79 4.22l-.52 6.14c-.2 2.45-.51 5.12-2.28 6.83a14 14 0 009.6-5.32c1.81-2 3.69-4.12 4.23-6.76.41-2 .07-4.21 1.27-5.82 1.41-1.9 4.42-1.92 6.42-.66s3.23 3.42 4.3 5.53 2.14 4.32 4 5.81a11.24 11.24 0 005.18 2.18 4.52 4.52 0 003.7-.51c1.37-1.1 1.23-3.21.79-4.91-.59-2.25-1.5-4.59-.86-6.84.21-.74.58-1.44.81-2.18a12.17 12.17 0 00.39-3.3c.13-5.58.39-11.59-1.42-17-.58-1.72-2.14-3.36-1.34-5.22 1.01-2.36 3.88-2.44 5.39-4.17z"
        fill="#464353"
      />
      <g opacity={0.1}>
        <path d="M132.5 585.32a56.38 56.38 0 00-.33-7.9c0-.51-.11-1-.15-1.55a22.3 22.3 0 00.15 4.89c.15 1.51.27 3.03.33 4.56zM158.56 615.95a4.56 4.56 0 01-3.7.51 11.24 11.24 0 01-5.18-2.18c-1.84-1.5-2.9-3.71-4-5.81s-2.3-4.28-4.3-5.53-5-1.24-6.42.66c-1.2 1.61-.86 3.85-1.27 5.82-.54 2.64-2.42 4.77-4.23 6.76a18.57 18.57 0 01-3.09 2.92 14.82 14.82 0 01-4.63 1.94 7.11 7.11 0 01-1.88 3.79 14 14 0 009.6-5.32c1.81-2 3.69-4.12 4.23-6.76.41-2 .07-4.21 1.27-5.82 1.41-1.9 4.42-1.92 6.42-.66s3.23 3.42 4.3 5.53 2.14 4.32 4 5.81a11.24 11.24 0 005.18 2.18 4.52 4.52 0 003.7-.51c1.28-1 1.24-3 .87-4.58a2.84 2.84 0 01-.87 1.25zM162.3 572.43c-1.51 1.72-4.38 1.81-5.37 4.1a3.4 3.4 0 00.25 2.87c1.15-1.85 3.72-2 5.12-3.64a4.42 4.42 0 00.63-4.35 3.4 3.4 0 01-.63 1.02zM159.69 598.72a12.17 12.17 0 01-.39 3.3c-.23.74-.6 1.43-.81 2.18a7.36 7.36 0 000 3.43v-.1c.21-.74.58-1.44.81-2.18a12.17 12.17 0 00.39-3.3c.05-2.22.12-4.5.08-6.79-.02 1.16-.05 2.32-.08 3.46z" />
      </g>
      <path d="M828.12 671.02c0 50.24 31.52 90.9 70.47 90.9" fill="#46455b" />
      <path
        d="M898.59 761.93c0-50.81 35.18-91.92 78.65-91.92M853.66 675.58c0 47.73 20.1 86.35 44.93 86.35"
        fill={color}
      />
      <path
        d="M898.59 761.93c0-64.92 40.66-117.46 90.9-117.46"
        fill="#46455b"
      />
      <ellipse
        cx={895.54}
        cy={776.33}
        rx={17.52}
        ry={2.96}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M883.77 762.57s10-.31 13-2.45 15.37-4.71 16.12-1.27 15 17.11 3.73 17.2-26.22-1.76-29.22-3.59-3.63-9.89-3.63-9.89z"
        fill="#a8a8a8"
      />
      <path
        d="M916.83 774.85c-11.28.09-26.21-1.76-29.22-3.59-2.29-1.39-3.2-6.4-3.51-8.7h-.33s.63 8.06 3.64 9.89 17.94 3.68 29.22 3.59c3.26 0 4.38-1.19 4.32-2.9-.45 1.04-1.69 1.69-4.12 1.71z"
        opacity={0.2}
      />
    </svg>
  );
};

SvgFileBundle.propTypes = {
  color: PropTypes.string
};
SvgFileBundle.defaultProps = {
  color: "primary"
};
export default SvgFileBundle;
