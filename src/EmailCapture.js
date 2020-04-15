import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgEmailCapture = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 938 435.27"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="EmailCapture_svg__a"
          x1={306}
          y1={619}
          x2={306}
          y2={328}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="EmailCapture_svg__b"
          x1={722.61}
          y1={411.26}
          x2={722.61}
          y2={295.87}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__c"
          x1={832.3}
          y1={300.61}
          x2={832.3}
          y2={232.85}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__d"
          x1={938.33}
          y1={372.89}
          x2={938.33}
          y2={303.17}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__e"
          x1={843.27}
          y1={475.46}
          x2={843.27}
          y2={409}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__f"
          x1={754.6}
          y1={503.32}
          x2={754.6}
          y2={434.16}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__g"
          x1={754.6}
          y1={610.26}
          x2={754.6}
          y2={541.1}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__h"
          x1={906.34}
          y1={668.12}
          x2={906.34}
          y2={598.42}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__i"
          x1={1002.31}
          y1={597.39}
          x2={1002.31}
          y2={455.26}
          xlinkHref="#EmailCapture_svg__a"
        />
        <linearGradient
          id="EmailCapture_svg__j"
          x1={265.81}
          y1={579.26}
          x2={265.81}
          y2={482.51}
          gradientTransform="rotate(-19.56 272.443 538.01)"
          xlinkHref="#EmailCapture_svg__a"
        />
      </defs>
      <path
        d="M279.69 395.15H477V328H279.69C200.11 328 135 393.47 135 473.5c0 80 65.11 145.5 144.69 145.5H477v-67.15H279.69a77.1 77.1 0 01-55-23.07 78.05 78.05 0 010-110.55 77.1 77.1 0 0155-23.08z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__a)"
        opacity={0.5}
      />
      <path
        d="M91.18 294.97a77 77 0 0154.32-131.32h121v-66h-121c-78.65 0-143 64.35-143 143s64.35 143 143 143h121v-66h-121a76.41 76.41 0 01-54.32-22.68z"
        fill="#535461"
      />
      <path
        fill="#e0e0e0"
        d="M265.5 317.65h75v66h-75zM265.5 97.65h75v66h-75z"
      />
      <path
        d="M743 382.26c25.3 0 37-13.58 37-31.78 0-31.78-25.61-54.61-57.39-54.61a57.7 57.7 0 000 115.39 56.74 56.74 0 0032.66-10.69 4.36 4.36 0 001.78-2.86 2.85 2.85 0 00-.89-2.66 3.62 3.62 0 00-5.27.62c-2.1 2.76-8.37 7.43-26.92 7.85-28.07.64-51.56-21.71-51.65-49.79-.09-27.85 22.78-49.84 50.29-50.15s49.67 19.13 49.67 46.28c0 17.28-12 25.3-26.53 25-4.63.31-5.55-1.54-4.94-8 .51-5.32 5.59-27.5 7.39-35.26a4.29 4.29 0 00-4.32-5.3h-.31a4.28 4.28 0 00-3.74 3.75 32.62 32.62 0 00-.26 3.76c-2.78-5.55-9.26-9.87-17-10.18-16.35.31-30.54 15.12-31.16 36.72 0 14.5 7.71 22.83 21 22.83 9.26 0 16-5.55 19.75-10.8.02.01-.29 9.26 10.84 9.88zm-29.31-6.48c-8.33 0-13.27-6.17-13.27-16 0-17 11.42-27.77 22.21-27.77 9.56 0 13.27 6.48 13.58 15.12-.02 13.87-8.97 28.65-22.54 28.65z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__b)"
        opacity={0.5}
      />
      <path
        d="M607.07 148.15c24.18 0 35.38-13 35.38-30.37 0-30.37-24.47-52.19-54.84-52.19a55.14 55.14 0 000 110.28 54.22 54.22 0 0031.21-10.21 4.16 4.16 0 001.71-2.73 2.72 2.72 0 00-.85-2.54 3.46 3.46 0 00-5 .59c-2 2.63-8 7.1-25.73 7.5-26.83.61-49.27-20.75-49.36-47.59-.09-26.61 21.77-47.63 48.06-47.92s47.47 18.28 47.47 44.23c0 16.51-11.5 24.18-25.36 23.88-4.42.29-5.31-1.47-4.72-7.67.48-5.09 5.34-26.28 7.07-33.69a4.1 4.1 0 00-4.13-5.06h-.3a4.09 4.09 0 00-3.57 3.59 31.17 31.17 0 00-.25 3.6c-2.65-5.31-8.85-9.44-16.22-9.73-15.63.29-29.19 14.45-29.78 35.09 0 13.86 7.37 21.82 20.05 21.82 8.85 0 15.33-5.31 18.87-10.32-.03-.01-.32 8.84 10.29 9.44zm-28-6.19c-8 0-12.68-5.9-12.68-15.33 0-16.22 10.91-26.54 21.23-26.54 9.14 0 12.68 6.19 13 14.45-.03 13.25-8.62 27.41-21.56 27.41z"
        fill={color}
      />
      <path
        d="M844.26 283.58c14.86 0 21.74-8 21.74-18.66 0-18.66-15-32.07-33.7-32.07a33.88 33.88 0 000 67.76 33.32 33.32 0 0019.18-6.28 2.56 2.56 0 001-1.68 1.67 1.67 0 00-.52-1.56 2.13 2.13 0 00-3.1.36c-1.23 1.62-4.92 4.36-15.81 4.61a29.54 29.54 0 01-30.33-29.24c-.05-16.35 13.38-29.27 29.53-29.45s29.17 11.23 29.17 27.18c0 10.15-7.07 14.86-15.58 14.68-2.72.18-3.26-.91-2.9-4.71.3-3.12 3.28-16.15 4.34-20.7a2.52 2.52 0 00-2.54-3.11h-.18a2.51 2.51 0 00-2.19 2.2 19.15 19.15 0 00-.15 2.21 11.64 11.64 0 00-10-6c-9.6.18-17.94 8.88-18.3 21.56 0 8.52 4.53 13.41 12.32 13.41a14.37 14.37 0 0011.6-6.34s-.11 5.47 6.42 5.83zm-17.26-3.8c-4.89 0-7.79-3.62-7.79-9.42 0-10 6.7-16.31 13-16.31 5.62 0 7.79 3.8 8 8.88.06 8.15-5.21 16.85-13.21 16.85z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__c)"
        opacity={0.5}
      />
      <path
        d="M708.65 49.88c14.1 0 20.64-7.57 20.64-17.72 0-17.72-14.28-30.44-32-30.44a32.165 32.165 0 000 64.33 31.63 31.63 0 0018.21-6 2.43 2.43 0 001-1.59 1.59 1.59 0 00-.49-1.48 2 2 0 00-2.94.35c-1.17 1.54-4.67 4.14-15 4.38a28 28 0 01-28.79-27.76c-.05-15.52 12.7-27.78 28-28S725 16.68 725 31.82c0 9.63-6.71 14.1-14.79 13.93-2.58.17-3.1-.86-2.75-4.47.28-3 3.12-15.33 4.12-19.65a2.39 2.39 0 00-2.41-3H709a2.38 2.38 0 00-2.08 2.09 18.18 18.18 0 00-.15 2.1 11 11 0 00-9.47-5.67c-9.12.17-17 8.43-17.37 20.47 0 8.08 4.3 12.73 11.7 12.73a13.64 13.64 0 0011-6s-.17 5.18 6.02 5.53zm-16.34-3.61c-4.64 0-7.4-3.44-7.4-8.94 0-9.46 6.36-15.48 12.38-15.48 5.33 0 7.4 3.61 7.57 8.43.01 7.73-4.98 15.99-12.55 15.99z"
        fill={color}
      />
      <path
        d="M950.63 355.36c15.28 0 22.37-8.2 22.37-19.2 0-19.2-15.47-33-34.67-33a34.86 34.86 0 000 69.71 34.28 34.28 0 0019.73-6.46 2.63 2.63 0 001.08-1.73 1.72 1.72 0 00-.54-1.61 2.19 2.19 0 00-3.18.38c-1.27 1.66-5.06 4.49-16.27 4.74a30.39 30.39 0 01-31.21-30.08c-.06-16.82 13.76-30.11 30.38-30.3s30 11.56 30 28c0 10.44-7.27 15.28-16 15.1-2.8.19-3.36-.93-3-4.85.31-3.21 3.38-16.61 4.47-21.3a2.59 2.59 0 00-2.61-3.2h-.19a2.58 2.58 0 00-2.26 2.27 19.71 19.71 0 00-.16 2.27 12 12 0 00-10.25-6.15c-9.88.19-18.45 9.13-18.83 22.18 0 8.76 4.66 13.79 12.68 13.79a14.78 14.78 0 0011.93-6.52s-.18 5.6 6.53 5.96zm-17.71-3.91c-5 0-8-3.73-8-9.69 0-10.25 6.9-16.78 13.42-16.78 5.78 0 8 3.91 8.2 9.13-.01 8.39-5.41 17.34-13.62 17.34z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__d)"
        opacity={0.5}
      />
      <path
        d="M814.68 121.15c14.1 0 20.64-7.57 20.64-17.72 0-17.72-14.28-30.44-32-30.44a32.165 32.165 0 000 64.33 31.63 31.63 0 0018.21-6 2.43 2.43 0 001-1.59 1.59 1.59 0 00-.49-1.48 2 2 0 00-2.94.35c-1.17 1.54-4.67 4.14-15 4.38a28 28 0 01-28.79-27.76c-.05-15.52 12.7-27.78 28-28S831 87.98 831 103.15c0 9.63-6.71 14.1-14.79 13.93-2.58.17-3.1-.86-2.75-4.47.28-3 3.12-15.33 4.12-19.65a2.39 2.39 0 00-2.41-3H815a2.38 2.38 0 00-2.08 2.09 18.18 18.18 0 00-.15 2.1 11 11 0 00-9.46-5.68c-9.12.17-17 8.43-17.37 20.47 0 8.08 4.3 12.73 11.7 12.73a13.64 13.64 0 0011-6s-.15 5.16 6.04 5.48zm-16.34-3.61c-4.64 0-7.4-3.44-7.4-8.94 0-9.46 6.36-15.48 12.38-15.48 5.33 0 7.4 3.61 7.57 8.43.01 7.76-4.98 16.01-12.55 16.01z"
        fill={color}
      />
      <path
        d="M855 458.76c14.57 0 21.32-7.82 21.32-18.3 0-18.3-14.75-31.45-33.05-31.45a33.23 33.23 0 000 66.46 32.68 32.68 0 0018.81-6.16 2.51 2.51 0 001-1.65 1.64 1.64 0 00-.51-1.53 2.09 2.09 0 00-3 .36c-1.21 1.59-4.82 4.28-15.51 4.52a29 29 0 01-29.75-28.68c-.05-16 13.12-28.71 29-28.88s28.61 11 28.61 26.66c0 10-6.93 14.57-15.28 14.39-2.67.18-3.2-.89-2.84-4.62.2-3.07 3.2-15.88 4.2-20.31a2.47 2.47 0 00-2.49-3.05h-.18a2.46 2.46 0 00-2.15 2.16 18.79 18.79 0 00-.15 2.17 11.41 11.41 0 00-9.77-5.86c-9.42.18-17.59 8.71-17.95 21.15 0 8.35 4.44 13.15 12.08 13.15a14.09 14.09 0 0011.37-6.22s-.16 5.33 6.24 5.69zM838.11 455c-4.8 0-7.64-3.55-7.64-9.24 0-9.77 6.58-16 12.79-16 5.51 0 7.64 3.73 7.82 8.71.01 8.03-5.15 16.53-12.97 16.53z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__e)"
        opacity={0.5}
      />
      <path
        d="M719.62 225.38c14.1 0 20.64-7.57 20.64-17.72 0-17.72-14.28-30.44-32-30.44a32.165 32.165 0 000 64.33 31.63 31.63 0 0018.21-6 2.43 2.43 0 001-1.59 1.59 1.59 0 00-.49-1.48 2 2 0 00-2.94.35c-1.17 1.54-4.67 4.14-15 4.38a28 28 0 01-28.79-27.76c-.05-15.52 12.7-27.78 28-28S736 192.15 736 207.32c0 9.63-6.71 14.1-14.79 13.93-2.58.17-3.1-.86-2.75-4.47.28-3 3.12-15.33 4.12-19.65a2.39 2.39 0 00-2.41-3H720a2.38 2.38 0 00-2.08 2.09 18.18 18.18 0 00-.15 2.1 11 11 0 00-9.46-5.68c-9.12.17-17 8.43-17.37 20.47 0 8.08 4.3 12.73 11.7 12.73a13.64 13.64 0 0011-6s-.21 5.19 5.98 5.54zm-16.34-3.61c-4.64 0-7.4-3.44-7.4-8.94 0-9.46 6.36-15.48 12.38-15.48 5.33 0 7.4 3.61 7.57 8.43.01 7.73-4.98 15.98-12.55 15.98z"
        fill={color}
      />
      <path
        d="M766.81 485.94c15.16 0 22.19-8.14 22.19-19 0-19-15.35-32.73-34.4-32.73a34.58 34.58 0 000 69.16 34 34 0 0019.57-6.41 2.61 2.61 0 001.07-1.71 1.71 1.71 0 00-.53-1.59 2.17 2.17 0 00-3.16.37c-1.26 1.65-5 4.45-16.14 4.7a30.15 30.15 0 01-31-29.84c-.05-16.69 13.65-29.87 30.14-30.06s29.77 11.47 29.77 27.74c0 10.36-7.21 15.16-15.9 15-2.77.18-3.33-.92-3-4.81.3-3.19 3.35-16.48 4.43-21.13a2.57 2.57 0 00-2.59-3.18h-.19a2.56 2.56 0 00-2.24 2.25 19.55 19.55 0 00-.16 2.26 11.88 11.88 0 00-10.17-6.1c-9.8.18-18.31 9.06-18.68 22 0 8.69 4.62 13.68 12.57 13.68a14.67 14.67 0 0011.95-6.54s-.19 5.57 6.47 5.94zm-17.57-3.88c-5 0-8-3.7-8-9.62 0-10.17 6.84-16.64 13.31-16.64 5.73 0 8 3.88 8.14 9.06.05 8.32-5.31 17.19-13.45 17.19z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__f)"
        opacity={0.5}
      />
      <path
        d="M631 251.88c14.1 0 20.64-7.57 20.64-17.72 0-17.72-14.28-30.44-32-30.44a32.165 32.165 0 000 64.33 31.63 31.63 0 0018.21-6 2.43 2.43 0 001-1.59 1.59 1.59 0 00-.49-1.48 2 2 0 00-2.94.35c-1.17 1.54-4.67 4.14-15 4.38a28 28 0 01-28.79-27.76c-.05-15.52 12.7-27.78 28-28s27.69 10.66 27.69 25.8c0 9.63-6.71 14.1-14.79 13.93-2.58.17-3.1-.86-2.75-4.47.28-3 3.12-15.33 4.12-19.65a2.39 2.39 0 00-2.41-3h-.17a2.38 2.38 0 00-2.08 2.09 18.18 18.18 0 00-.15 2.1 11 11 0 00-9.46-5.68c-9.12.17-17 8.43-17.37 20.47 0 8.08 4.3 12.73 11.7 12.73a13.64 13.64 0 0011-6s-.2 5.27 6.04 5.61zm-16.34-3.61c-4.64 0-7.4-3.44-7.4-8.94 0-9.46 6.36-15.48 12.38-15.48 5.33 0 7.4 3.61 7.57 8.43-.04 7.74-5.03 15.99-12.59 15.99z"
        fill={color}
      />
      <path
        d="M766.81 592.88c15.16 0 22.19-8.14 22.19-19 0-19-15.35-32.73-34.4-32.73a34.58 34.58 0 000 69.16 34 34 0 0019.57-6.41 2.61 2.61 0 001.07-1.71 1.71 1.71 0 00-.53-1.59 2.17 2.17 0 00-3.16.37c-1.26 1.65-5 4.45-16.14 4.7a30.15 30.15 0 01-31-29.84c-.05-16.69 13.65-29.87 30.14-30.06s29.77 11.47 29.77 27.74c0 10.36-7.21 15.16-15.9 15-2.77.18-3.33-.92-3-4.81.3-3.19 3.35-16.48 4.43-21.13a2.57 2.57 0 00-2.59-3.18h-.19a2.56 2.56 0 00-2.24 2.25 19.55 19.55 0 00-.16 2.26 11.88 11.88 0 00-10.17-6.1c-9.8.18-18.31 9.06-18.68 22 0 8.69 4.62 13.68 12.57 13.68a14.67 14.67 0 0011.95-6.48s-.19 5.51 6.47 5.88zM749.24 589c-5 0-8-3.7-8-9.62 0-10.17 6.84-16.64 13.31-16.64 5.73 0 8 3.88 8.14 9.06.05 8.32-5.31 17.2-13.45 17.2z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__g)"
        opacity={0.5}
      />
      <path
        d="M631 358.83c14.1 0 20.64-7.57 20.64-17.72 0-17.72-14.28-30.44-32-30.44a32.165 32.165 0 000 64.33 31.63 31.63 0 0018.21-6 2.43 2.43 0 001-1.59 1.59 1.59 0 00-.49-1.48 2 2 0 00-2.94.35c-1.17 1.54-4.67 4.14-15 4.38a28 28 0 01-28.79-27.76c-.05-15.52 12.7-27.78 28-28s27.69 10.66 27.69 25.8c0 9.63-6.71 14.1-14.79 13.93-2.58.17-3.1-.86-2.75-4.47.28-3 3.12-15.33 4.12-19.65a2.39 2.39 0 00-2.41-3h-.17a2.38 2.38 0 00-2.08 2.09 18.18 18.18 0 00-.15 2.1 11 11 0 00-9.49-5.55c-9.12.17-17 8.43-17.37 20.47 0 8.08 4.3 12.73 11.7 12.73a13.64 13.64 0 0011-6s-.17 5.13 6.07 5.48zm-16.34-3.61c-4.64 0-7.4-3.44-7.4-8.94 0-9.46 6.36-15.48 12.38-15.48 5.33 0 7.4 3.61 7.57 8.43-.04 7.73-5.03 15.99-12.59 15.99z"
        fill={color}
      />
      <path
        d="M918.64 650.6c15.28 0 22.36-8.2 22.36-19.19 0-19.19-15.47-33-34.66-33a34.85 34.85 0 000 69.7 34.27 34.27 0 0019.73-6.46 2.63 2.63 0 001.08-1.73 1.72 1.72 0 00-.54-1.61 2.19 2.19 0 00-3.18.38c-1.27 1.66-5.06 4.49-16.26 4.74A30.39 30.39 0 01876 633.37c-.06-16.82 13.76-30.1 30.38-30.29s30 11.55 30 28c0 10.44-7.27 15.28-16 15.09-2.8.19-3.35-.93-3-4.85.31-3.21 3.38-16.61 4.47-21.29a2.59 2.59 0 00-2.61-3.2h-.19a2.58 2.58 0 00-2.26 2.27 19.7 19.7 0 00-.16 2.27 12 12 0 00-10.25-6.15c-9.88.19-18.45 9.13-18.82 22.18 0 8.76 4.66 13.79 12.67 13.79a14.78 14.78 0 0011.93-6.52s-.23 5.56 6.48 5.93zm-17.7-3.91c-5 0-8-3.73-8-9.69 0-10.25 6.9-16.77 13.42-16.77 5.78 0 8 3.91 8.2 9.13-.02 8.38-5.43 17.33-13.63 17.33z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__h)"
        opacity={0.5}
      />
      <path
        d="M782.69 416.41c14.1 0 20.64-7.57 20.64-17.72 0-17.72-14.28-30.44-32-30.44a32.165 32.165 0 000 64.33 31.63 31.63 0 0018.21-6 2.43 2.43 0 001-1.59 1.59 1.59 0 00-.49-1.48 2 2 0 00-2.94.35c-1.17 1.54-4.67 4.14-15 4.38a28 28 0 01-28.79-27.76c-.05-15.52 12.7-27.78 28-28S799 383.22 799 398.35c0 9.63-6.71 14.1-14.79 13.93-2.58.17-3.1-.86-2.75-4.47.28-3 3.12-15.33 4.12-19.65a2.39 2.39 0 00-2.41-3H783a2.38 2.38 0 00-2.08 2.09 18.18 18.18 0 00-.15 2.1 11 11 0 00-9.46-5.68c-9.12.17-17 8.43-17.37 20.47 0 8.08 4.3 12.73 11.7 12.73a13.64 13.64 0 0011-6s-.14 5.2 6.05 5.54zm-16.34-3.61c-4.64 0-7.4-3.44-7.4-8.94 0-9.46 6.36-15.48 12.38-15.48 5.33 0 7.4 3.61 7.57 8.43.01 7.74-4.98 15.99-12.55 15.99z"
        fill={color}
      />
      <path
        d="M724.6 315.87c10.07 0 14.74-5.41 14.74-12.65 0-12.65-10.2-21.75-22.85-21.75a23 23 0 000 45.95 22.59 22.59 0 0013-4.26 1.73 1.73 0 00.71-1.14 1.13 1.13 0 00-.35-1.06 1.44 1.44 0 00-2.1.25c-.83 1.1-3.33 3-10.72 3.13a19.902 19.902 0 11-.54-39.8c10.93-.12 19.78 7.62 19.78 18.43 0 6.88-4.79 10.07-10.57 10-1.84.12-2.21-.61-2-3.19.2-2.12 2.23-10.95 2.94-14a1.71 1.71 0 00-1.72-2.11h-.12a1.7 1.7 0 00-1.49 1.49 13 13 0 00-.1 1.5 7.89 7.89 0 00-6.76-4.05c-6.51.12-12.16 6-12.41 14.62 0 5.77 3.07 9.09 8.35 9.09a9.74 9.74 0 007.86-4.3s-.07 3.6 4.35 3.85zm-11.67-2.58c-3.32 0-5.28-2.46-5.28-6.39 0-6.76 4.55-11.06 8.85-11.06 3.81 0 5.28 2.58 5.41 6-.01 5.55-3.57 11.45-8.98 11.45zM530.82 354.26c10.07 0 14.74-5.41 14.74-12.65 0-12.65-10.2-21.75-22.85-21.75a23 23 0 000 45.95 22.59 22.59 0 0013-4.26 1.73 1.73 0 00.71-1.14 1.13 1.13 0 00-.35-1.06 1.44 1.44 0 00-2.1.25c-.83 1.1-3.33 3-10.72 3.13a19.902 19.902 0 11-.54-39.8c10.93-.12 19.78 7.62 19.78 18.43 0 6.88-4.79 10.07-10.57 10-1.84.12-2.21-.61-2-3.19.2-2.12 2.23-10.95 2.94-14a1.71 1.71 0 00-1.72-2.11h-.12a1.7 1.7 0 00-1.49 1.49 13 13 0 00-.1 1.5 7.89 7.89 0 00-6.76-4.05c-6.51.12-12.16 6-12.41 14.62 0 5.77 3.07 9.09 8.35 9.09a9.74 9.74 0 007.86-4.3s-.07 3.6 4.35 3.85zm-11.67-2.58c-3.32 0-5.28-2.46-5.28-6.39 0-6.76 4.55-11.06 8.85-11.06 3.81 0 5.28 2.58 5.41 6-.01 5.55-3.57 11.45-8.98 11.45zM507.06 183.33c10.07 0 14.74-5.41 14.74-12.65 0-12.65-10.2-21.75-22.85-21.75a23 23 0 000 45.95 22.59 22.59 0 0013-4.26 1.73 1.73 0 00.71-1.14 1.13 1.13 0 00-.35-1.06 1.44 1.44 0 00-2.1.25c-.83 1.1-3.33 3-10.72 3.13a19.902 19.902 0 11-.54-39.8c10.93-.12 19.78 7.62 19.78 18.43 0 6.88-4.79 10.07-10.57 10-1.84.12-2.21-.61-2-3.19.2-2.12 2.23-10.95 2.94-14a1.71 1.71 0 00-1.72-2.11h-.12a1.7 1.7 0 00-1.49 1.49 13 13 0 00-.1 1.5 7.89 7.89 0 00-6.76-4.05c-6.51.12-12.16 6-12.41 14.62 0 5.77 3.07 9.09 8.35 9.09a9.74 9.74 0 007.86-4.3s-.07 3.6 4.35 3.85zm-11.67-2.58c-3.32 0-5.28-2.46-5.28-6.39 0-6.76 4.55-11.06 8.85-11.06 3.81 0 5.28 2.58 5.41 6-.01 5.55-3.58 11.45-8.98 11.45zM891 188.81c10.07 0 14.74-5.41 14.74-12.65 0-12.65-10.2-21.75-22.85-21.75a23 23 0 000 45.95 22.59 22.59 0 0013-4.26 1.73 1.73 0 00.71-1.14 1.13 1.13 0 00-.35-1.06 1.44 1.44 0 00-2.1.25c-.83 1.1-3.33 3-10.72 3.13a19.902 19.902 0 11-.54-39.8c10.93-.12 19.78 7.62 19.78 18.43 0 6.88-4.79 10.07-10.57 10-1.84.12-2.21-.61-2-3.19.2-2.12 2.23-10.95 2.94-14a1.71 1.71 0 00-1.72-2.11h-.12a1.7 1.7 0 00-1.49 1.49 13 13 0 00-.1 1.5 7.89 7.89 0 00-6.76-4.05c-6.51.12-12.16 6-12.41 14.62 0 5.77 3.07 9.09 8.35 9.09a9.74 9.74 0 007.86-4.3s-.11 3.61 4.35 3.85zm-11.67-2.58c-3.32 0-5.28-2.46-5.28-6.39 0-6.76 4.55-11.06 8.85-11.06 3.81 0 5.28 2.58 5.41 6-.05 5.56-3.62 11.45-9.02 11.45z"
        fill={color}
        opacity={0.5}
      />
      <path
        d="M526.34 234.06c5.64 0 8.26-3 8.26-7.09 0-7.09-5.71-12.18-12.8-12.18a12.87 12.87 0 000 25.73 12.65 12.65 0 007.28-2.38 1 1 0 00.4-.64.63.63 0 00-.2-.59.81.81 0 00-1.18.14c-.47.61-1.87 1.66-6 1.75a11.15 11.15 0 11-.3-22.29c6.12-.07 11.08 4.27 11.08 10.32 0 3.85-2.68 5.64-5.92 5.57-1 .07-1.24-.34-1.1-1.79.11-1.19 1.25-6.13 1.65-7.86a1 1 0 00-1-1.18h-.07a1 1 0 00-.83.84 7.27 7.27 0 00-.06.84 4.42 4.42 0 00-3.78-2.27c-3.65.07-6.81 3.37-6.95 8.19 0 3.23 1.72 5.09 4.68 5.09a5.46 5.46 0 004.4-2.41 2.23 2.23 0 002.44 2.21zm-6.54-1.44c-1.86 0-3-1.38-3-3.58 0-3.78 2.55-6.19 5-6.19 2.13 0 3 1.44 3 3.37.03 3.09-1.97 6.4-4.99 6.4zM592.15 287.99c5.64 0 8.26-3 8.26-7.09 0-7.09-5.71-12.18-12.8-12.18a12.87 12.87 0 000 25.73 12.65 12.65 0 007.28-2.38 1 1 0 00.4-.64.63.63 0 00-.2-.59.81.81 0 00-1.18.14c-.47.61-1.87 1.66-6 1.75a11.15 11.15 0 11-.3-22.29c6.12-.07 11.08 4.27 11.08 10.32 0 3.85-2.68 5.64-5.92 5.57-1 .07-1.24-.34-1.1-1.79.11-1.19 1.25-6.13 1.65-7.86a1 1 0 00-1-1.18h-.07a1 1 0 00-.83.84 7.27 7.27 0 00-.06.84 4.42 4.42 0 00-3.78-2.27c-3.65.07-6.81 3.37-6.95 8.19 0 3.23 1.72 5.09 4.68 5.09a5.46 5.46 0 004.4-2.41 2.23 2.23 0 002.44 2.21zm-6.54-1.44c-1.86 0-3-1.38-3-3.58 0-3.78 2.55-6.19 5-6.19 2.13 0 3 1.44 3 3.37.03 3.09-1.96 6.39-4.99 6.39zM788.67 222.15c5.64 0 8.26-3 8.26-7.09 0-7.09-5.71-12.18-12.8-12.18a12.87 12.87 0 000 25.73 12.65 12.65 0 007.28-2.38 1 1 0 00.4-.64.63.63 0 00-.2-.59.81.81 0 00-1.18.14c-.47.61-1.87 1.66-6 1.75a11.15 11.15 0 11-.3-22.29c6.12-.07 11.08 4.27 11.08 10.32 0 3.85-2.68 5.64-5.92 5.57-1 .07-1.24-.34-1.1-1.79.11-1.19 1.25-6.13 1.65-7.86a1 1 0 00-1-1.18h-.07a1 1 0 00-.83.84 7.27 7.27 0 00-.06.84 4.42 4.42 0 00-3.78-2.27c-3.65.07-6.81 3.37-6.95 8.19 0 3.23 1.72 5.09 4.68 5.09a5.46 5.46 0 004.4-2.41 2.23 2.23 0 002.44 2.21zm-6.54-1.44c-1.86 0-3-1.38-3-3.58 0-3.78 2.55-6.19 5-6.19 2.13 0 3 1.44 3 3.37.03 3.12-1.96 6.42-4.99 6.42zM656.14 165.51c5.64 0 8.26-3 8.26-7.09 0-7.09-5.71-12.18-12.8-12.18a12.87 12.87 0 000 25.73 12.65 12.65 0 007.28-2.38 1 1 0 00.4-.64.63.63 0 00-.2-.59.81.81 0 00-1.18.14c-.47.61-1.87 1.66-6 1.75a11.15 11.15 0 11-.3-22.29c6.12-.07 11.08 4.27 11.08 10.32 0 3.85-2.68 5.64-5.92 5.57-1 .07-1.24-.34-1.1-1.79.11-1.19 1.25-6.13 1.65-7.86a1 1 0 00-1-1.18h-.07a1 1 0 00-.83.84 7.27 7.27 0 00-.06.84 4.42 4.42 0 00-3.78-2.27c-3.65.07-6.81 3.37-6.95 8.19 0 3.23 1.72 5.09 4.68 5.09a5.46 5.46 0 004.4-2.41 2.23 2.23 0 002.44 2.21zm-6.54-1.44c-1.86 0-3-1.38-3-3.58 0-3.78 2.55-6.19 5-6.19 2.13 0 3 1.44 3 3.37.02 3.09-1.97 6.39-5 6.39z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M724.6 122.09c10.07 0 14.74-5.41 14.74-12.65 0-12.65-10.2-21.75-22.85-21.75a23 23 0 000 45.95 22.59 22.59 0 0013-4.26 1.73 1.73 0 00.71-1.14 1.13 1.13 0 00-.35-1.06 1.44 1.44 0 00-2.1.25c-.83 1.1-3.33 3-10.72 3.13a19.902 19.902 0 11-.54-39.8c10.93-.12 19.78 7.62 19.78 18.43 0 6.88-4.79 10.07-10.57 10-1.84.12-2.21-.61-2-3.19.2-2.12 2.23-10.95 2.94-14a1.71 1.71 0 00-1.72-2.11h-.12a1.7 1.7 0 00-1.49 1.49 13 13 0 00-.1 1.5 7.89 7.89 0 00-6.76-4.05c-6.51.12-12.16 6-12.41 14.62 0 5.77 3.07 9.09 8.35 9.09a9.74 9.74 0 007.86-4.3s-.07 3.6 4.35 3.85zm-11.67-2.58c-3.32 0-5.28-2.46-5.28-6.39 0-6.76 4.55-11.06 8.85-11.06 3.81 0 5.28 2.58 5.41 6-.01 5.55-3.57 11.45-8.98 11.45z"
        fill={color}
        opacity={0.5}
      />
      <path
        d="M1027.4 561.67c31.16 0 45.6-16.72 45.6-39.14 0-39.14-31.54-67.27-70.69-67.27s-70.69 31.92-70.69 71.07 31.54 71.07 70.69 71.07a69.89 69.89 0 0040.23-13.17 5.37 5.37 0 002.2-3.52 3.51 3.51 0 00-1.09-3.27 4.46 4.46 0 00-6.49.77c-2.58 3.39-10.31 9.15-33.16 9.67-34.58.78-63.51-26.75-63.62-61.33-.11-34.3 28.06-61.39 61.95-61.77s61.19 23.56 61.19 57c0 21.28-14.82 31.16-32.68 30.78-5.7.38-6.84-1.9-6.08-9.88.62-6.55 6.89-33.87 9.11-43.43a5.29 5.29 0 00-5.32-6.53h-.38a5.27 5.27 0 00-4.6 4.62 40.18 40.18 0 00-.32 4.63c-3.42-6.84-11.4-12.16-20.9-12.54-20.14.38-37.62 18.62-38.38 45.22 0 17.86 9.5 28.12 25.84 28.12 11.4 0 19.76-6.84 24.32-13.3-.04.04-.42 11.44 13.27 12.2zm-36.1-8c-10.26 0-16.34-7.6-16.34-19.76 0-20.9 14.06-34.2 27.36-34.2 11.78 0 16.34 8 16.72 18.62-.04 17.11-11.04 35.36-27.75 35.36z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__i)"
        opacity={0.5}
      />
      <path
        d="M891.51 327.57c30.06 0 44-16.13 44-37.76 0-37.76-30.43-64.89-68.19-64.89s-68.19 30.79-68.19 68.55 30.43 68.55 68.19 68.55a67.42 67.42 0 0038.8-12.7 5.18 5.18 0 002.12-3.4 3.38 3.38 0 00-1.05-3.16 4.3 4.3 0 00-6.26.74c-2.49 3.27-9.95 8.83-32 9.33-33.36.76-61.26-25.8-61.37-59.16-.11-33.09 27.06-59.22 59.76-59.59s59 22.73 59 55c0 20.53-14.3 30.06-31.53 29.69-5.5.37-6.6-1.83-5.87-9.53.6-6.32 6.64-32.67 8.78-41.89a5.1 5.1 0 00-5.13-6.29h-.37a5.08 5.08 0 00-4.44 4.46 38.75 38.75 0 00-.31 4.47c-3.3-6.6-11-11.73-20.16-12.1-19.43.37-36.29 18-37 43.63 0 17.23 9.16 27.13 24.93 27.13 11 0 19.06-6.6 23.46-12.83 0 .02-.37 11.01 12.83 11.75zm-34.83-7.7c-9.9 0-15.76-7.33-15.76-19.06 0-20.16 13.56-33 26.4-33 11.36 0 15.76 7.7 16.13 18-.01 16.46-10.64 34.06-26.77 34.06z"
        fill={color}
      />
      <path
        d="M364.35 123.15c.87-4.23 6.45-5.81 10.56-4.48s7.3 4.52 11 6.8 8.66 3.6 12.14 1c3.34-2.44 3.81-7.28 6.45-10.45s7.54-4.29 11.77-3.58 8.07 2.86 11.81 5L451 130.37M356.35 148.15c.87-4.23 6.45-5.81 10.56-4.48s7.3 4.52 11 6.8 8.66 3.6 12.14 1c3.34-2.44 3.81-7.28 6.45-10.45s7.54-4.29 11.77-3.58 8.07 2.86 11.81 5L443 155.37M364.35 358.15c.87 4.23 6.45 5.81 10.56 4.48s7.3-4.52 11-6.8 8.66-3.6 12.14-1c3.34 2.44 3.81 7.28 6.45 10.45s7.54 4.29 11.77 3.58 8.07-2.86 11.81-5L451 350.93M356.35 333.15c.87 4.23 6.45 5.81 10.56 4.48s7.3-4.52 11-6.8 8.66-3.6 12.14-1c3.34 2.44 3.81 7.28 6.45 10.45s7.54 4.29 11.77 3.58 8.07-2.86 11.81-5L443 325.93"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={3}
        opacity={0.2}
      />
      <path
        d="M296.37 567.28a5.86 5.86 0 00-2.45 2.44l-1.26-1.43c-.18-1.55-4-33.52-11.61-33.7-5.83-.14-12.14-.63-16.37 1l-.22-.62-2.26-6.35 6-2.13-.09-.25 4.74-1.68c.68-1-.8-.95-2.37-.7a1.43 1.43 0 00.08-.28l2.75-16.3s.73-3.49-.88-4.46-1.5 4.46-1.5 4.46l-3 11.19s-8.62-4.32-13.78-6.16a7.43 7.43 0 00-1.89-.6c-.91-.23-1.55-.29-1.79-.1a7.41 7.41 0 00-2 .41l-.5.18-.27-.77-.09-.25a8.48 8.48 0 003.28-6.43 9.53 9.53 0 00-2.07-8.07.55.55 0 00.18-.15.81.81 0 000-.81 5.89 5.89 0 00-4.36-3.34 6.29 6.29 0 01-2.22-.49c-.57-.33-1-.93-1.59-1.14a2.5 2.5 0 00-2.17.58 8.15 8.15 0 00-1.83 1.82 10.48 10.48 0 01-1.8 2.31c-.55.43-1.23.66-1.79 1.08a3.44 3.44 0 00-1.36 2.78 4.49 4.49 0 00.39 1.65 9.47 9.47 0 00-.17 2.35l-.11.13.11-.11a9.52 9.52 0 005.78 8.25 8.48 8.48 0 004.8 1.36l.09.25.35 1a10 10 0 00-2.61 2.34l-.17.22c-.7 1-3 4.34-2 6.77q0 .14.1.29a10.08 10.08 0 00.52 2.27l5.66 15.94.21.58.5 1.41a9.35 9.35 0 003.83 4.79c3.52.35 11.08 2.66 11.81 2.36l9.41 3.32-5 23s-2.8 4.36.54 4.3a68.41 68.41 0 009.72-1.49s.38-2.1-1.26-2.36a5.86 5.86 0 00-3.37.78l-.28-1.58s14.11-24.66 7.75-29.14c-1.22-.86-2.45-1.75-3.68-2.62l3.3-.84 10.46 27.13.08-.06c0 .6.16 5.12 2.78 3.42a68.41 68.41 0 007.46-6.4s-.99-1.99-2.51-1.35zm-29-42.78l-6.6.39-1.77-5.12 9 4.59z"
        transform="translate(-135 -232.85)"
        fill="url(#EmailCapture_svg__j)"
        opacity={0.7}
      />
      <circle
        cx={241.94}
        cy={503.53}
        r={9.31}
        transform="rotate(-19.56 -500.99 778.714)"
      />
      <path
        d="M124.07 287.24l9.22 4.73a1.39 1.39 0 002-1l2.71-15.95h-2.33l-3 10.94s-16.6-7.4-18-6.24 9.4 7.52 9.4 7.52z"
        fill={color}
      />
      <path
        d="M112.244 280.19a8.77 8.77 0 0111.2 5.327l5.895 16.594-19.486 6.923-4.841-13.625a11.92 11.92 0 017.232-15.22z"
        fill={color}
      />
      <path
        d="M133.12 312.7l-8.89 3.16a11.25 11.25 0 01-14.37-6.83l19.49-6.88z"
        fill="#4d8af0"
      />
      <path
        d="M105.94 292.31l13.9 6.18 13.16-4.68-.61-1.71-12.5.74-11.06-6.76c-1.76-1.08-2.1 1.14-2.82 3.07-.65 1.78-1.8 2.39-.07 3.16z"
        opacity={0.05}
      />
      <path
        d="M105.7 291.99l14.05 6.25 13.16-4.68-.61-1.71-12.5.74-10.91-6.67c-1.88-1.15-2.19 1.13-2.89 3.22-.53 1.66-1.89 2.15-.3 2.85z"
        fill={color}
      />
      <path
        d="M132.3 291.86s6.51-1.76 5.24.06l-4.63 1.65zM135.65 275.03s-.1-5.31 1.47-4.36.86 4.36.86 4.36z"
        fill="#fda57d"
      />
      <path
        opacity={0.05}
        d="M109.86 309.03l.2.57 19.51-6.89-.22-.61-19.49 6.93z"
      />
      <path
        d="M129 314.92l13.54-3.46 10.23 26.52 4.15-3.2s-3.76-32.83-11.36-33-16-1-19.38 3.31 2.82 9.83 2.82 9.83z"
        fill="#4d8af0"
      />
      <path d="M126.9 306.4s8.49 1.1 10.93 4.9" opacity={0.1} />
      <path
        d="M121.87 316.56l13.13 4.65-4.92 22.47 5.23-.35s13.8-24.11 7.58-28.49-12.79-9.73-17.95-8-3.07 9.72-3.07 9.72z"
        fill="#4d8af0"
      />
      <path opacity={0.05} d="M128.38 283.92l4.12 3.48.18-1.44-4.3-2.04z" />
      <path
        d="M130.13 343.68s-2.74 4.27.53 4.2a66.9 66.9 0 009.5-1.45s.37-2.05-1.23-2.31a5.73 5.73 0 00-3.3.76l-.28-1.55zM152.87 337.85s0 5.19 2.72 3.41a66.9 66.9 0 007.29-6.26s-.77-1.94-2.27-1.31a5.73 5.73 0 00-2.4 2.39l-1.24-1.4z"
        fill="#333"
      />
      <rect
        x={242.97}
        y={509.07}
        width={5.17}
        height={7.76}
        rx={2.59}
        ry={2.59}
        transform="rotate(-19.56 -497.36 788.15)"
        fill="#fda57d"
      />
      <path
        d="M109.35 276.69a2.59 2.59 0 00-1.57 3.3l.29.83a8.28 8.28 0 004.87-1.73l-.29-.83a2.59 2.59 0 00-3.3-1.57z"
        opacity={0.05}
      />
      <circle
        cx={242.79}
        cy={505.15}
        r={8.28}
        transform="rotate(-19.56 -500.138 780.354)"
        fill="#fda57d"
      />
      <path
        d="M99.86 274.72a2.9 2.9 0 002.44-2.8c.31-2.61.73-4.12 5.71-4.41s5.94-.46 5.71-1.77c-.15-.9-2.49-2.38-3.95-3.23a3.06 3.06 0 00-2.54-.17l-5.08 1.81-2.55 2.49-1.6 2.84.48 2.89z"
        opacity={0.05}
      />
      <path d="M99.78 274.48a2.9 2.9 0 002.44-2.8c.31-2.61.73-4.12 5.71-4.41s5.94-.46 5.71-1.77c-.15-.9-2.49-2.38-3.95-3.23a3.06 3.06 0 00-2.54-.17l-5.09 1.81-2.55 2.49-1.6 2.84.48 2.89z" />
      <ellipse
        cx={235.56}
        cy={507.03}
        rx={0.84}
        ry={1.68}
        transform="rotate(-19.56 -507.359 782.216)"
        fill="#fda57d"
      />
      <path d="M98.55 270.31a6.66 6.66 0 01-1.12-3.06 3.36 3.36 0 011.33-2.71c.55-.41 1.21-.64 1.75-1.06a10.25 10.25 0 001.76-2.26 8 8 0 011.79-1.78 2.45 2.45 0 012.13-.56c.61.21 1 .79 1.56 1.12a6.15 6.15 0 002.17.47 5.76 5.76 0 014.26 3.26.79.79 0 010 .79.84.84 0 01-.42.24c-3.13 1.06-6.27 2.13-9.47 2.94a23.78 23.78 0 00-3 .87 10.07 10.07 0 00-3.84 2.72" />
    </svg>
  );
};

SvgEmailCapture.propTypes = {
  color: PropTypes.string
};
SvgEmailCapture.defaultProps = {
  color: "primary"
};
export default SvgEmailCapture;
