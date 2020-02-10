import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWishes = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 937.26 810.26"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Wishes_svg__a"
          x1={518.1}
          y1={814}
          x2={518.1}
          y2={264.36}
          gradientTransform="matrix(-1 0 0 1 1200 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M883.29 376.65c-31.82 40.46-19.46 99.57.76 146.9 6.78 15.85 14.43 32.58 11.58 49.58-3.49 20.78-22 36-41.52 44-35.5 14.68-78 11.18-110.61-9.11-28.19-17.54-48.38-46.06-77.05-62.8-48-28-109.06-17.43-161.16 1.86-36.86 13.65-77.16 31.41-113.79 17.14-25.77-10-43.59-34.47-53.3-60.37-4.69-12.51-8.09-26-17-36-5.32-5.89-12.26-10.08-19.38-13.6-65-32.21-147-15-210.08-50.68-42.61-24.12-69.89-69.63-82-117.08s-10.67-97.21-7.6-146.07c2.18-34.73 6.09-71.8 28.28-98.61C53.88 13.57 94.17 3.03 130.63 8.42s69.42 24.6 98.45 47.22c36.29 28.27 69.94 63.48 114.5 74.94 30.34 7.8 62.26 3.53 93.56 2.06 52.32-2.47 104.65 3 156.68 9 49.81 5.76 100 12.1 147.43 28.3 33.58 11.47 60.5 32.28 92.21 46.82 20.67 9.48 43.21 12.1 62.77 24.17 24.11 14.87 46.2 40.74 40 71-5.89 28.81-36.04 43.2-52.94 64.72zM73.94 707.71c7.12 3.67 14.58 6.84 21.94 10 27.19 11.48 54.79 23.06 84 27 54.82 7.39 111.44-12.62 165.33-.17 45.15 10.42 82.49 42.35 126.6 56.57 20.51 6.61 41.85 9.2 63.38 9.2h2.78q4-.05 7.94-.2c21.83-.82 43.75-4.05 65.15-8.18 67.57-13 136.34-36.83 188-80.7-150.38-27.53-460.23-69.71-725.12-13.52z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M110.78 704.78s24.67-83.76-4.63-145.41c-12.3-25.87-16.38-54.92-10.7-83a222.5 222.5 0 0111.75-39"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M88.98 398.46c0 10.27 18.59 40 18.59 40s18.59-29.77 18.59-40a18.59 18.59 0 00-37.17 0zM58.25 455.32c5.58 8.62 37.36 23.5 37.36 23.5s-.58-35.09-6.16-43.71a18.59 18.59 0 10-31.2 20.2zM59.63 552.49c9.17 4.62 44.11 1.43 44.11 1.43s-18.21-30-27.38-34.62a18.59 18.59 0 10-16.73 33.19zM77.17 625.78c8.25 6.1 43.24 8.86 43.24 8.86S107.53 602 99.28 595.89a18.59 18.59 0 00-22.11 29.89zM134.63 480.81c-7.36 7.15-41.67 14.56-41.67 14.56s8.4-34.07 15.76-41.23a18.592 18.592 0 0125.91 26.67zM154.1 566.79c-9.17 4.62-44.11 1.43-44.11 1.43s18.21-30 27.38-34.62a18.59 18.59 0 0116.74 33.19zM161.55 652.94c-8.25 6.1-43.24 8.86-43.24 8.86s12.88-32.64 21.13-38.75a18.59 18.59 0 0122.11 29.89z"
        fill={color}
      />
      <path
        d="M88.98 398.46c0 10.27 18.59 40 18.59 40s18.59-29.77 18.59-40a18.59 18.59 0 00-37.17 0zM58.25 455.32c5.58 8.62 37.36 23.5 37.36 23.5s-.58-35.09-6.16-43.71a18.59 18.59 0 10-31.2 20.2zM59.63 552.49c9.17 4.62 44.11 1.43 44.11 1.43s-18.21-30-27.38-34.62a18.59 18.59 0 10-16.73 33.19zM77.17 625.78c8.25 6.1 43.24 8.86 43.24 8.86S107.53 602 99.28 595.89a18.59 18.59 0 00-22.11 29.89zM134.63 480.81c-7.36 7.15-41.67 14.56-41.67 14.56s8.4-34.07 15.76-41.23a18.592 18.592 0 0125.91 26.67zM154.1 566.79c-9.17 4.62-44.11 1.43-44.11 1.43s18.21-30 27.38-34.62a18.59 18.59 0 0116.74 33.19zM161.55 652.94c-8.25 6.1-43.24 8.86-43.24 8.86s12.88-32.64 21.13-38.75a18.59 18.59 0 0122.11 29.89z"
        opacity={0.25}
      />
      <path
        d="M238.07 679.27s13.36-45.35-2.5-78.72a71.62 71.62 0 01-5.79-44.93 120.46 120.46 0 016.36-21.09"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M226.27 513.43c0 5.56 10.06 21.67 10.06 21.67s10.06-16.12 10.06-21.67a10.065 10.065 0 00-20.13 0zM209.63 544.21c3 4.66 20.23 12.72 20.23 12.72s-.31-19-3.33-23.66a10.066 10.066 0 00-16.9 10.94zM210.36 596.82c5 2.5 23.88.77 23.88.77s-9.86-16.24-14.82-18.74a10.076 10.076 0 10-9.06 18zM219.87 636.5c4.47 3.3 23.41 4.8 23.41 4.8s-7-17.67-11.44-21a10.072 10.072 0 10-12 16.18zM250.99 558.01c-4 3.87-22.56 7.88-22.56 7.88s4.55-18.45 8.53-22.32a10.06 10.06 0 1114 14.44zM261.52 604.56c-5 2.5-23.88.77-23.88.77s9.86-16.24 14.82-18.74a10.076 10.076 0 119.06 18zM265.56 651.2c-4.47 3.3-23.41 4.8-23.41 4.8s7-17.67 11.44-21a10.072 10.072 0 0112 16.18z"
        fill={color}
      />
      <path
        d="M226.27 513.43c0 5.56 10.06 21.67 10.06 21.67s10.06-16.12 10.06-21.67a10.065 10.065 0 00-20.13 0zM209.63 544.21c3 4.66 20.23 12.72 20.23 12.72s-.31-19-3.33-23.66a10.066 10.066 0 00-16.9 10.94zM210.36 596.82c5 2.5 23.88.77 23.88.77s-9.86-16.24-14.82-18.74a10.076 10.076 0 10-9.06 18zM219.87 636.5c4.47 3.3 23.41 4.8 23.41 4.8s-7-17.67-11.44-21a10.072 10.072 0 10-12 16.18zM250.99 558.01c-4 3.87-22.56 7.88-22.56 7.88s4.55-18.45 8.53-22.32a10.06 10.06 0 1114 14.44zM261.52 604.56c-5 2.5-23.88.77-23.88.77s9.86-16.24 14.82-18.74a10.076 10.076 0 119.06 18zM265.56 651.2c-4.47 3.3-23.41 4.8-23.41 4.8s7-17.67 11.44-21a10.072 10.072 0 0112 16.18z"
        fill="#fff"
        opacity={0.5}
      />
      <g opacity={0.6}>
        <path
          d="M209.29 54.26a11.69 11.69 0 00-4.21 10.29c1.37 12.72 5.49 41.65 15.76 57.94q.91 1.45 1.9 2.77h55.51s11.32-42.11 12.07-60.67a14 14 0 00-5-11.3c-8.32-6.91-27.85-22-38.93-21h-.22s-4.26-4.77-36.88 21.97z"
          fill="#d6dbe6"
        />
        <path
          d="M205.08 64.55c1.37 12.72 5.49 41.65 15.76 57.94 2.21 1 4.47 1.89 6.71 2.77 14 5.47 27.23 8.7 25.09 0a19.68 19.68 0 00-2.14-4.89c-12.73-22.15-6.84-70.45-4.14-88h-.22s-4.22-4.82-36.84 21.92a11.69 11.69 0 00-4.22 10.26z"
          fill="none"
        />
        <path
          d="M205.08 64.55c1.37 12.72 5.49 41.65 15.76 57.94 2.21 1 4.47 1.89 6.71 2.77 14 5.47 27.23 8.7 25.09 0a19.68 19.68 0 00-2.14-4.89c-12.73-22.15-6.84-70.45-4.14-88h-.22s-4.22-4.82-36.84 21.92a11.69 11.69 0 00-4.22 10.26z"
          opacity={0.05}
        />
        <path
          d="M222.4 123.77c0 2.44 2.08 4.69 5.59 6.51a34.32 34.32 0 007.55 2.7 64.06 64.06 0 0015 1.67 60.14 60.14 0 0017.93-2.5 25.17 25.17 0 006.7-3.14c2.2-1.55 3.46-3.33 3.46-5.23 0-2.77-2.67-5.29-7.06-7.21q-1.06-.47-2.26-.88a58.83 58.83 0 00-18.76-2.78c-8.92 0-16.86 1.61-22 4.12a19.34 19.34 0 00-2.49 1.44c-2.35 1.56-3.66 3.37-3.66 5.3z"
          fill="#d6dbe6"
        />
        <path
          d="M221.81 123.77c0 2.44 2.08 4.69 5.59 6.51a34.32 34.32 0 007.55 2.7 64.06 64.06 0 0015 1.67 60.14 60.14 0 0017.93-2.5 25.17 25.17 0 006.7-3.14c2.2-1.55 3.46-3.33 3.46-5.23 0-2.77-2.67-5.29-7.06-7.21q-1.06-.47-2.26-.88a58.83 58.83 0 00-18.76-2.78c-8.92 0-16.86 1.61-22 4.12a19.34 19.34 0 00-2.49 1.44c-2.36 1.56-3.66 3.37-3.66 5.3z"
          opacity={0.1}
        />
        <path
          d="M255.86 126.73a7.26 7.26 0 00-1.93-9.26s-1.92-2.31-.74-4.41c0 0-9.81 6.48-4.81 13.93z"
          fill="#ffd865"
        />
        <path
          d="M253.47 126.95a3.27 3.27 0 00-.87-4.17 2 2 0 01-.33-2s-4.42 2.92-2.16 6.27z"
          fill="#ffd865"
        />
        <path
          d="M253.47 126.95a3.27 3.27 0 00-.87-4.17 2 2 0 01-.33-2s-4.42 2.92-2.16 6.27z"
          opacity={0.1}
        />
        <path
          d="M227.99 130.28a34.32 34.32 0 007.55 2.7c8-1.86 31-7.84 36-16.41q-1.06-.47-2.26-.88c-3.24 3.75-16.25 16.74-41.29 14.59z"
          fill="#565387"
        />
        <path
          d="M225.99 118.45c3 5.41 31 11.44 42.43 13.69a25.17 25.17 0 006.7-3.14 101.8 101.8 0 01-46.64-12 19.34 19.34 0 00-2.49 1.45z"
          fill="#565387"
        />
        <path
          d="M261.63 53.82c1.65 1.62 1.19 4.3 1 6.6a19.72 19.72 0 003.13 12.21c1.46 2.23 3.47 4.51 3.11 7.15s-3.11 4.41-4.57 6.74-1.58 5.45-1.15 8.26 1.3 5.55 1.52 8.38a3.78 3.78 0 01-.21 1.92 5.21 5.21 0 01-1.39 1.52 10.76 10.76 0 00-2.29 2.9 7.19 7.19 0 01-1.16 1.84 4.46 4.46 0 01-1.4.85c-3.75 1.58-8.07 1.3-11.94.06a51.7 51.7 0 01-10.86-5.48 8.88 8.88 0 01-2.54-2 7.27 7.27 0 01-1.22-4.11c-.16-3.13.43-6.28.06-9.4s-1.82-6.26-2.71-9.4a29.54 29.54 0 01.7-18.2 13.64 13.64 0 014.18-6.3c4.36-3.32 10.7-2 15.75-4.11 3.78-1.6 8.53-2.84 11.99.57z"
          fill="#ffd865"
          opacity={0.35}
        />
      </g>
      <g opacity={0.6}>
        <path
          d="M123.48 204.52a6.76 6.76 0 00-2.44 5.95c.79 7.35 3.17 24.08 9.11 33.5q.53.84 1.1 1.6h32.09s6.54-24.34 7-35.07a8.07 8.07 0 00-2.91-6.53c-4.81-4-16.1-12.7-22.5-12.12h-.13s-2.46-2.79-21.32 12.67z"
          fill="#d6dbe6"
        />
        <path
          d="M121.05 210.47c.79 7.35 3.17 24.08 9.11 33.5 1.28.55 2.58 1.09 3.88 1.6 8.07 3.16 15.74 5 14.5 0a11.37 11.37 0 00-1.24-2.83c-7.36-12.8-4-40.72-2.39-50.9h-.13s-2.44-2.79-21.29 12.67a6.76 6.76 0 00-2.44 5.96z"
          fill="none"
        />
        <path
          d="M121.05 210.47c.79 7.35 3.17 24.08 9.11 33.5 1.28.55 2.58 1.09 3.88 1.6 8.07 3.16 15.74 5 14.5 0a11.37 11.37 0 00-1.24-2.83c-7.36-12.8-4-40.72-2.39-50.9h-.13s-2.44-2.79-21.29 12.67a6.76 6.76 0 00-2.44 5.96z"
          opacity={0.05}
        />
        <path
          d="M131.06 244.7c0 1.41 1.2 2.71 3.23 3.76a19.84 19.84 0 004.36 1.56 37 37 0 008.64 1 34.76 34.76 0 0010.34-1.48 14.55 14.55 0 003.88-1.82 3.91 3.91 0 002-3c0-1.6-1.54-3.06-4.08-4.17q-.62-.27-1.31-.51a34 34 0 00-10.85-1.61c-5.15 0-9.75.93-12.72 2.38a11.18 11.18 0 00-1.44.83 4 4 0 00-2.05 3.06z"
          fill="#d6dbe6"
        />
        <path
          d="M130.72 244.7c0 1.41 1.2 2.71 3.23 3.76a19.84 19.84 0 004.36 1.56 37 37 0 008.64 1 34.76 34.76 0 0010.36-1.45 14.55 14.55 0 003.88-1.82 3.91 3.91 0 002-3c0-1.6-1.54-3.06-4.08-4.17q-.62-.27-1.31-.51a34 34 0 00-10.85-1.61c-5.15 0-9.75.93-12.72 2.38a11.18 11.18 0 00-1.44.83 4 4 0 00-2.07 3.03z"
          opacity={0.1}
        />
        <path
          d="M150.41 246.41a4.19 4.19 0 00-1.11-5.35 2.5 2.5 0 01-.43-2.55s-5.67 3.75-2.78 8.05z"
          fill="#ffd865"
        />
        <path
          d="M149.02 246.54a1.89 1.89 0 00-.5-2.41 1.13 1.13 0 01-.19-1.15s-2.55 1.69-1.25 3.62z"
          fill="#ffd865"
        />
        <path
          d="M149.02 246.54a1.89 1.89 0 00-.5-2.41 1.13 1.13 0 01-.19-1.15s-2.55 1.69-1.25 3.62z"
          opacity={0.1}
        />
        <path
          d="M134.29 248.47a19.84 19.84 0 004.36 1.56c4.63-1.07 17.91-4.53 20.8-9.49q-.62-.27-1.31-.51c-1.85 2.17-9.37 9.68-23.85 8.44z"
          fill="#565387"
        />
        <path
          d="M133.14 241.63c1.73 3.13 17.93 6.61 24.53 7.91a14.55 14.55 0 003.88-1.82 58.84 58.84 0 01-27-6.93 11.18 11.18 0 00-1.41.84z"
          fill="#565387"
        />
        <path
          d="M153.75 204.27c1 .93.69 2.49.58 3.82a11.4 11.4 0 001.81 7.06c.84 1.29 2 2.61 1.8 4.13s-1.8 2.55-2.64 3.9a7 7 0 00-.67 4.77c.25 1.62.75 3.21.88 4.84a2.18 2.18 0 01-.12 1.11 3 3 0 01-.8.88 6.22 6.22 0 00-1.32 1.68 4.16 4.16 0 01-.67 1.06 2.58 2.58 0 01-.81.49 10 10 0 01-6.9 0 29.88 29.88 0 01-6.28-3.17 5.13 5.13 0 01-1.47-1.16 4.2 4.2 0 01-.71-2.37c-.09-1.81.25-3.63 0-5.43a36.27 36.27 0 00-1.57-5.44 17.07 17.07 0 01.41-10.52 7.89 7.89 0 012.42-3.64c2.52-1.92 6.19-1.14 9.11-2.38 2.19-.88 4.94-1.6 6.95.37z"
          fill="#ffd865"
          opacity={0.35}
        />
      </g>
      <g opacity={0.6}>
        <path
          d="M633.48 185.22a6.76 6.76 0 00-2.44 5.95c.79 7.35 3.17 24.08 9.11 33.5q.53.84 1.1 1.6h32.09s6.54-24.34 7-35.07a8.07 8.07 0 00-2.91-6.53c-4.81-4-16.1-12.7-22.5-12.12h-.13s-2.46-2.79-21.32 12.67z"
          fill="#d6dbe6"
        />
        <path
          d="M631.05 191.13c.79 7.35 3.17 24.08 9.11 33.5 1.28.55 2.58 1.09 3.88 1.6 8.07 3.16 15.74 5 14.5 0a11.37 11.37 0 00-1.24-2.83c-7.36-12.8-4-40.72-2.39-50.9h-.13s-2.44-2.79-21.29 12.67a6.76 6.76 0 00-2.44 5.96z"
          fill="none"
        />
        <path
          d="M631.05 191.13c.79 7.35 3.17 24.08 9.11 33.5 1.28.55 2.58 1.09 3.88 1.6 8.07 3.16 15.74 5 14.5 0a11.37 11.37 0 00-1.24-2.83c-7.36-12.8-4-40.72-2.39-50.9h-.13s-2.44-2.79-21.29 12.67a6.76 6.76 0 00-2.44 5.96z"
          opacity={0.05}
        />
        <path
          d="M641.06 225.4c0 1.41 1.2 2.71 3.23 3.76a19.84 19.84 0 004.36 1.56 37 37 0 008.64 1 34.76 34.76 0 0010.34-1.48 14.55 14.55 0 003.88-1.82 3.91 3.91 0 002-3c0-1.6-1.54-3.06-4.08-4.17q-.62-.27-1.31-.51a34 34 0 00-10.82-1.61c-5.15 0-9.75.93-12.72 2.38a11.18 11.18 0 00-1.44.83 4 4 0 00-2.08 3.06z"
          fill="#d6dbe6"
        />
        <path
          d="M640.72 225.4c0 1.41 1.2 2.71 3.23 3.76a19.84 19.84 0 004.36 1.56 37 37 0 008.64 1 34.76 34.76 0 0010.36-1.45 14.55 14.55 0 003.88-1.82 3.91 3.91 0 002-3c0-1.6-1.54-3.06-4.08-4.17q-.62-.27-1.31-.51a34 34 0 00-10.84-1.64c-5.15 0-9.75.93-12.72 2.38a11.18 11.18 0 00-1.44.83 4 4 0 00-2.08 3.06z"
          opacity={0.1}
        />
        <path
          d="M660.41 227.13a4.19 4.19 0 00-1.11-5.35 2.5 2.5 0 01-.43-2.55s-5.67 3.75-2.78 8.05z"
          fill="#ffd865"
        />
        <path
          d="M659.02 227.24a1.89 1.89 0 00-.5-2.41 1.13 1.13 0 01-.19-1.15s-2.55 1.69-1.25 3.62z"
          fill="#ffd865"
        />
        <path
          d="M659.02 227.24a1.89 1.89 0 00-.5-2.41 1.13 1.13 0 01-.19-1.15s-2.55 1.69-1.25 3.62z"
          opacity={0.1}
        />
        <path
          d="M644.29 229.13a19.84 19.84 0 004.36 1.56c4.63-1.07 17.91-4.53 20.8-9.49q-.62-.27-1.31-.51c-1.85 2.21-9.37 9.71-23.85 8.44z"
          fill="#565387"
        />
        <path
          d="M643.14 222.32c1.73 3.13 17.93 6.61 24.53 7.91a14.55 14.55 0 003.88-1.82 58.84 58.84 0 01-27-6.93 11.18 11.18 0 00-1.41.84z"
          fill="#565387"
        />
        <path
          d="M663.75 184.96c1 .93.69 2.49.58 3.82a11.4 11.4 0 001.81 7.06c.84 1.29 2 2.61 1.8 4.13s-1.8 2.55-2.64 3.9a7 7 0 00-.67 4.77c.25 1.62.75 3.21.88 4.84a2.18 2.18 0 01-.12 1.11 3 3 0 01-.8.88 6.22 6.22 0 00-1.32 1.68 4.16 4.16 0 01-.67 1.06 2.58 2.58 0 01-.81.49 10 10 0 01-6.9 0 29.88 29.88 0 01-6.28-3.17 5.13 5.13 0 01-1.47-1.16 4.2 4.2 0 01-.71-2.37c-.09-1.81.25-3.63 0-5.43a36.27 36.27 0 00-1.57-5.44 17.07 17.07 0 01.41-10.52 7.89 7.89 0 012.42-3.64c2.52-1.92 6.19-1.14 9.11-2.38 2.19-.88 4.94-1.6 6.95.37z"
          fill="#ffd865"
          opacity={0.35}
        />
      </g>
      <g opacity={0.6}>
        <path
          d="M722.29 22.26a11.69 11.69 0 00-4.21 10.29c1.37 12.72 5.49 41.65 15.76 57.94q.91 1.45 1.9 2.77h55.51s11.32-42.13 12.07-60.67a14 14 0 00-5-11.3c-8.32-6.91-27.85-22-38.93-21h-.22s-4.26-4.77-36.88 21.97z"
          fill="#d6dbe6"
        />
        <path
          d="M718.08 32.55c1.37 12.72 5.49 41.65 15.76 57.94 2.21 1 4.47 1.89 6.71 2.77 14 5.47 27.23 8.7 25.09 0a19.68 19.68 0 00-2.14-4.89c-12.73-22.15-6.84-70.45-4.14-88h-.22s-4.22-4.82-36.84 21.92a11.69 11.69 0 00-4.22 10.26z"
          fill="none"
        />
        <path
          d="M718.08 32.55c1.37 12.72 5.49 41.65 15.76 57.94 2.21 1 4.47 1.89 6.71 2.77 14 5.47 27.23 8.7 25.09 0a19.68 19.68 0 00-2.14-4.89c-12.73-22.15-6.84-70.45-4.14-88h-.22s-4.22-4.82-36.84 21.92a11.69 11.69 0 00-4.22 10.26z"
          opacity={0.05}
        />
        <path
          d="M735.4 91.77c0 2.44 2.08 4.69 5.59 6.51a34.32 34.32 0 007.55 2.7 64.06 64.06 0 0015 1.67 60.14 60.14 0 0017.93-2.5 25.17 25.17 0 006.7-3.14c2.2-1.55 3.46-3.33 3.46-5.23 0-2.77-2.67-5.29-7.06-7.21q-1.06-.47-2.26-.88a58.83 58.83 0 00-18.76-2.78c-8.92 0-16.86 1.61-22 4.12a19.34 19.34 0 00-2.49 1.44c-2.35 1.56-3.66 3.37-3.66 5.3z"
          fill="#d6dbe6"
        />
        <path
          d="M734.81 91.77c0 2.44 2.08 4.69 5.59 6.51a34.32 34.32 0 007.55 2.7 64.06 64.06 0 0015 1.67 60.14 60.14 0 0017.93-2.5 25.17 25.17 0 006.7-3.14c2.2-1.55 3.46-3.33 3.46-5.23 0-2.77-2.67-5.29-7.06-7.21q-1.06-.47-2.26-.88a58.83 58.83 0 00-18.76-2.78c-8.92 0-16.86 1.61-22 4.12a19.34 19.34 0 00-2.49 1.44c-2.36 1.56-3.66 3.37-3.66 5.3z"
          opacity={0.1}
        />
        <path
          d="M768.86 94.73a7.26 7.26 0 00-1.93-9.26s-1.92-2.31-.74-4.41c0 0-9.81 6.48-4.81 13.93z"
          fill="#ffd865"
        />
        <path
          d="M766.47 94.95a3.27 3.27 0 00-.87-4.17 2 2 0 01-.33-2s-4.42 2.92-2.16 6.27z"
          fill="#ffd865"
        />
        <path
          d="M766.47 94.95a3.27 3.27 0 00-.87-4.17 2 2 0 01-.33-2s-4.42 2.92-2.16 6.27z"
          opacity={0.1}
        />
        <path
          d="M740.99 98.28a34.32 34.32 0 007.55 2.7c8-1.86 31-7.84 36-16.41q-1.06-.47-2.26-.88c-3.24 3.75-16.25 16.74-41.29 14.59z"
          fill="#565387"
        />
        <path
          d="M738.99 86.45c3 5.41 31 11.44 42.43 13.69a25.17 25.17 0 006.7-3.14 101.8 101.8 0 01-46.64-12 19.34 19.34 0 00-2.49 1.45z"
          fill="#565387"
        />
        <path
          d="M774.63 21.82c1.65 1.62 1.19 4.3 1 6.6a19.72 19.72 0 003.13 12.21c1.46 2.23 3.47 4.51 3.11 7.15s-3.11 4.41-4.57 6.74-1.58 5.45-1.15 8.26 1.3 5.55 1.52 8.38a3.78 3.78 0 01-.21 1.92 5.21 5.21 0 01-1.39 1.52 10.76 10.76 0 00-2.29 2.9 7.19 7.19 0 01-1.16 1.84 4.46 4.46 0 01-1.4.85c-3.75 1.58-8.07 1.3-11.94.06a51.7 51.7 0 01-10.86-5.48 8.88 8.88 0 01-2.54-2 7.27 7.27 0 01-1.22-4.11c-.16-3.13.43-6.28.06-9.4s-1.82-6.26-2.71-9.4a29.54 29.54 0 01.7-18.2 13.64 13.64 0 014.18-6.3c4.36-3.32 10.7-2 15.75-4.11 3.78-1.6 8.53-2.84 11.99.57z"
          fill="#ffd865"
          opacity={0.35}
        />
      </g>
      <path
        d="M440.2 103.99a19.64 19.64 0 00-7.08 17.29c2.3 21.37 9.21 70 26.47 97.33q1.54 2.44 3.19 4.64h93.25s19-70.74 20.28-101.91a23.45 23.45 0 00-8.46-19c-14-11.61-46.78-36.91-65.4-35.23h-.38s-7.08-8.03-61.87 36.88z"
        fill="#d6dbe6"
      />
      <path
        d="M433.12 121.28c2.3 21.37 9.21 70 26.47 97.33 3.71 1.6 7.5 3.17 11.26 4.64 23.44 9.19 45.75 14.61 42.14 0a33.05 33.05 0 00-3.59-8.21c-21.39-37.2-11.5-118.33-7-147.9h-.38s-7.09-8.1-61.88 36.81a19.64 19.64 0 00-7.02 17.33z"
        fill="none"
      />
      <path
        d="M433.12 121.28c2.3 21.37 9.21 70 26.47 97.33 3.71 1.6 7.5 3.17 11.26 4.64 23.44 9.19 45.75 14.61 42.14 0a33.05 33.05 0 00-3.59-8.21c-21.39-37.2-11.5-118.33-7-147.9h-.38s-7.09-8.1-61.88 36.81a19.64 19.64 0 00-7.02 17.33z"
        opacity={0.05}
      />
      <path
        d="M462.23 220.76c0 4.1 3.49 7.89 9.38 10.93a57.65 57.65 0 0012.68 4.53 107.61 107.61 0 0025.12 2.8c11.45 0 21.94-1.58 30.11-4.2a42.28 42.28 0 0011.26-5.28c3.7-2.61 5.81-5.6 5.81-8.79 0-4.64-4.48-8.89-11.86-12.11q-1.79-.78-3.8-1.48c-8.35-2.91-19.4-4.67-31.52-4.67-15 0-28.33 2.7-37 6.92a32.49 32.49 0 00-4.19 2.41c-3.81 2.65-5.99 5.7-5.99 8.94z"
        fill="#d6dbe6"
      />
      <path
        d="M461.23 220.76c0 4.1 3.49 7.89 9.38 10.93a57.65 57.65 0 0012.68 4.53 107.61 107.61 0 0025.12 2.8c11.45 0 21.94-1.58 30.11-4.2a42.28 42.28 0 0011.26-5.28c3.7-2.61 5.81-5.6 5.81-8.79 0-4.64-4.48-8.89-11.86-12.11q-1.79-.78-3.8-1.48c-8.35-2.91-19.4-4.67-31.52-4.67-15 0-28.33 2.7-37 6.92a32.49 32.49 0 00-4.19 2.41c-3.81 2.65-5.99 5.7-5.99 8.94z"
        opacity={0.1}
      />
      <path
        d="M518.44 225.73s5.06-8.36-3.24-15.56c0 0-3.22-3.88-1.25-7.4 0 0-16.48 10.88-8.08 23.4z"
        fill="#ffd865"
      />
      <path
        d="M514.42 226.13a5.49 5.49 0 00-1.46-7s-1.45-1.75-.56-3.33c0 0-7.42 4.9-3.64 10.53z"
        fill="#ffd865"
      />
      <path
        d="M514.42 226.13a5.49 5.49 0 00-1.46-7s-1.45-1.75-.56-3.33c0 0-7.42 4.9-3.64 10.53z"
        opacity={0.1}
      />
      <path
        d="M471.63 231.69a57.65 57.65 0 0012.68 4.53c13.45-3.12 52-13.17 60.43-27.57q-1.79-.78-3.8-1.48c-5.41 6.32-27.31 28.13-69.31 24.52z"
        fill="#565387"
      />
      <path
        d="M468.25 211.83c5 9.09 52.09 19.21 71.27 23a42.28 42.28 0 0011.26-5.28 171 171 0 01-78.34-20.13 32.49 32.49 0 00-4.19 2.41z"
        fill="#565387"
      />
      <path
        d="M528.16 103.26c2.77 2.71 2 7.23 1.7 11.09a33.12 33.12 0 005.26 20.51c2.45 3.75 5.84 7.58 5.22 12s-5.23 7.41-7.68 11.33-2.65 9.16-1.94 13.88 2.18 9.32 2.56 14.07a6.34 6.34 0 01-.36 3.23 8.75 8.75 0 01-2.29 2.56 18.07 18.07 0 00-3.85 4.87 12.08 12.08 0 01-1.95 3.09 7.49 7.49 0 01-2.36 1.43c-6.29 2.65-13.55 2.18-20.06.09s-12.41-5.66-18.24-9.21a14.91 14.91 0 01-4.27-3.38 12.2 12.2 0 01-2.06-6.9c-.27-5.26.73-10.56.1-15.79-.66-5.45-3.05-10.52-4.56-15.8a49.62 49.62 0 011.18-30.56c1.49-4 3.61-8 7-10.57 7.33-5.58 18-3.33 26.46-6.91 6.31-2.67 14.28-4.77 20.14.97z"
        fill="#ffd865"
        opacity={0.35}
      />
      <path
        d="M589.31 812.18c6.59 3.73 22.87.92 33-1.38a6.13 6.13 0 003.74-9.42l-2.75-4.07-1.06-.16h.94l10.32-44.27c6-20 2.66-35.28 0-47.26-1.27-5.73 1.72-18.46 5.18-30.18 5.72 2.48 11.37 4.36 16.12 4.89 2.94.33 6.18.65 9.57.9 3.64 9.57 6.8 18 7.07 19.07 4.29 17.16 25.29 25.29 25.29 25.29l53.58 60.91s-3.33 8.65-10 11.32c0 0-16.64 4-6 8 7.11 2.67 22.83-2.68 32.49-6.53a6.09 6.09 0 002.19-9.81l-3.39-3.63h-.31l-16.67-35.63c-2-10-20.63-37.94-32-43.27-6.6-3.1-12.28-17.51-15.89-29a30.65 30.65 0 0013.22-8.95c12.65-15.31 18-6.66 42.6-12.65 31.24-7.6 19.24-29 15.57-29.09-16.67-7.64-60-47.68-64.46-51.78.83-.42 1.29-.68 1.29-.68l-1.6.39-.06-.06a58.31 58.31 0 00-2.92-8.72 61 61 0 006.47 4.88c7.75 5.06 17.48 8.39 26.28 5.51l-.21-.23c.51-.13 1-.27 1.54-.43a34.9 34.9 0 01-9.05-20.47 40.51 40.51 0 0012.27-4.15c15.25-7.34 26.23-23.82 25.65-40.89-.22-6.52-1.9-13.14-.39-19.48 1.41-5.88 2.83-8.25 3.93-14.19 3.33-18 6.66-14.64 3.66-28.14-1.54-6.93-9.73-10.43-13.39-16.51-5.35-8.89-5.52-19.81-7-30.09s-5.16-21.47-14.36-26.26c-13.12-6.84-22.23-23.52-35.33-21.53-.7.11-1.4.19-2.09.26a29.24 29.24 0 00-16.29-3.63c-3.35.25-6.65 1.08-10 1.06a20 20 0 01-10.39-3c-.16.39-.29.79-.41 1.19-.31-.17-.62-.34-.92-.53a16 16 0 00-1 7.09A25.94 25.94 0 00650 365c-.75-5.36-1.19-8.77-1.19-8.77l-1.33-65.9s15.31-26 .67-26-14 23.3-14 23.3l-4 50.59c-2.66 18 0 30 0 30 6.89 18.21 10.87 45.16 12.48 58-20.19 15.28-25.82 28.8-25.6 40-.25 11.51 5.77 20.72 9.13 27.14.82 1.56 1.2 4.84 1.23 9.44-.25 38-21.53 154.65-21.53 154.65l.22.09-.22 1.24 1.11.46c-1.27 4-2.65 8-4.11 11.86-7.32 19.3 0 32.62 0 32.62l6.9 91.61-.57-.09s-5.76 8.42-12.75 10c.03-.02-17.03 1.34-7.13 6.94zm95.51-276.84l-.06-.06a39 39 0 01-9.92-25.67 47.87 47.87 0 014.6-19.59A176 176 0 00684 464a119.88 119.88 0 01.21 14.48c-.8 19.06-4.32 38.52.62 56.86z"
        transform="translate(-131.37 -44.87)"
        fill="url(#Wishes_svg__a)"
      />
      <path
        d="M546.49 393.84c5.74 9.71 4.7 27.46-3.27 59.92 0 0-9.11 24.73 9.11 45.55s22.12 39 22.12 39 57.2 35.44 64.42 51.4c-10.74-23.75 24.52 10.25-16.27 20.17-24.07 5.86-29.28-2.6-41.64 12.36s-40.34 13-57.91 11.06-47.5-22.77-47.5-22.77 33.18-139.89 26-153.56c-6.77-12.93-31.12-37.5 16.58-69.32 9.5-6.3 22.5-3.64 28.36 6.19z"
        fill="#f0898b"
      />
      <path
        d="M546.49 393.84c5.74 9.71 4.7 27.46-3.27 59.92 0 0-9.11 24.73 9.11 45.55s22.12 39 22.12 39 57.57 35.28 64.42 51.4c-10.09-23.75 24.52 10.25-16.27 20.17-24.07 5.86-29.28-2.6-41.64 12.36s-40.34 13-57.91 11.06-47.5-22.77-47.5-22.77 33.18-139.89 26-153.56c-6.77-12.93-31.12-37.5 16.58-69.32 9.5-6.3 22.5-3.64 28.36 6.19z"
        fill="#ffdf9c"
      />
      <path
        d="M546.49 393.84c5.74 9.71 4.7 27.46-3.27 59.92 0 0-9.11 24.73 9.11 45.55s22.12 39 22.12 39 57.57 35.28 64.42 51.4c-10.09-23.75 24.52 10.25-16.27 20.17-24.07 5.86-29.28-2.6-41.64 12.36s-40.34 13-57.91 11.06-47.5-22.77-47.5-22.77 33.18-139.89 26-153.56c-6.77-12.93-31.12-37.5 16.58-69.32 9.5-6.3 22.5-3.64 28.36 6.19z"
        opacity={0.03}
      />
      <path
        d="M564.05 616.42s8.46 37.74 19.52 42.94 29.28 32.53 31.23 42.29l16.59 35.48h-15l-52.38-59.54s-20.53-8-24.73-24.73c-.65-2.6-18.22-48.15-18.22-48.15zM515.25 604.71s-15.62 41.64-13 53.36 5.86 26.68 0 46.2l-10.1 43.26-13-.65-6.84-90.75s-7.16-13 0-31.88 12.32-42.31 12.32-42.31zM512 391.94s-3.9-39.69-13-63.77c0 0-2.6-11.71 0-29.28l3.9-49.45s-.65-22.77 13.66-22.77-.65 25.38-.65 25.38l1.3 64.42s8.46 65.72 14.31 72.88z"
        fill="#fec2be"
      />
      <path
        d="M512 391.94s-3.9-39.69-13-63.77c0 0-2.6-11.71 0-29.28l3.9-49.45s-.65-22.77 13.66-22.77-.65 25.38-.65 25.38l1.3 64.42s8.46 65.72 14.31 72.88z"
        opacity={0.05}
      />
      <path
        d="M515.25 345.13s2.6 31.23-5.21 41.64c0 0 18.22-9.76 33.83-1.3 0 0-9.76-26.68-6.51-38.39z"
        fill="#fec2be"
      />
      <path
        d="M546.49 386.03c5.74 9.71 8.61 27.46.64 59.92 0 0-13 24.73 5.21 45.55s22.12 39 22.12 39 48.15 44.9 64.42 51.4c0 0 7.81 14.31-16.27 20.17s-29.28-2.6-41.64 12.36-40.34 13-57.91 11.06-47.82-14.64-47.82-14.64 27-148 19.85-161.69c-6.77-12.93-24.61-37.5 23.08-69.32 9.46-6.3 22.46-3.64 28.32 6.19z"
        fill="#ffdf9c"
      />
      <circle cx={526.96} cy={401.7} r={22.12} fill="#fec2be" />
      <path
        d="M534.77 410.81l4.55 68.32-15 72.88s13.66 48.15 0 43.59-14.31-44.25-14.31-44.25l9.11-76.13s-11.06-57.26-9.11-69 24.76 4.59 24.76 4.59z"
        opacity={0.1}
      />
      <path
        d="M534.77 409.51l4.55 68.32-15 72.88s13.66 48.15 0 43.59-14.31-44.25-14.31-44.25l9.11-76.13s-11.06-57.26-9.11-69 24.76 4.59 24.76 4.59z"
        fill="#fec2be"
      />
      <path
        d="M537.7 366.24c-9.21 0-17.59-2.63-22-10-.06-5.75-.41-9.88-.41-9.88l22.12 2c-1.4 5-.63 9.32 1 16.59-.47.01-.3 1.29-.71 1.29z"
        opacity={0.03}
      />
      <circle cx={537.37} cy={341.84} r={25.38} fill="#fec2be" />
      <path
        d="M509.72 439.77s-2 9.76-14.64 10.74M577.06 614.47c12.36-15 17.57-6.51 41.64-12.36s16.27-20.17 16.27-20.17c-16.27-6.51-64.42-51.4-64.42-51.4s-3.9-18.22-22.12-39-5.21-45.55-5.21-45.55c8-32.45 5.11-50.21-.64-59.92a19.56 19.56 0 00-15.07-9.49 19.72 19.72 0 0119 9.49c5.74 9.71 8.61 27.46.64 59.92 0 0-13 24.73 5.21 45.55s22.12 39 22.12 39 48.15 44.9 64.42 51.4c0 0 7.81 14.31-16.27 20.17s-29.28-2.6-41.64 12.36c-8.55 10.35-24.56 12.61-39.44 12.37 13.68-.22 27.71-2.92 35.51-12.37z"
        opacity={0.03}
      />
      <path
        d="M528.16 371.28c.82-1.82 2.57-3 3.89-4.51 4.29-4.87 3.55-12.17 3.8-18.66a50.84 50.84 0 014.09-18 15.28 15.28 0 01-4.13-3 16.2 16.2 0 01-3.33-16.85 19.55 19.55 0 0010.15 2.87c3.28 0 6.51-.79 9.79-1a28.59 28.59 0 0115.93 3.55c.68-.07 1.36-.15 2-.26 12.81-1.94 21.71 14.37 34.53 21.05 9 4.69 12.63 15.63 14 25.67s1.58 20.72 6.8 29.41c3.58 5.94 11.59 9.37 13.09 16.14 2.93 13.2-.32 9.94-3.57 27.51-1.08 5.81-2.47 8.13-3.84 13.87-1.48 6.2.16 12.67.38 19 .71 20.92-16.34 40.95-37.11 43.58a34.11 34.11 0 009 20.48c-8.6 2.82-18.11-.44-25.69-5.39a61.55 61.55 0 01-25.31-34.48c-5.11-18.14-1.59-37.42-.78-56.25s-2.16-39.77-16.48-52c-4.04-3.44-9.36-7.94-7.21-12.73z"
        opacity={0.1}
      />
      <path
        d="M529.46 370.63c.82-1.82 2.57-3 3.89-4.51 4.29-4.87 3.55-12.17 3.8-18.66a50.84 50.84 0 014.09-18 15.28 15.28 0 01-4.13-3 16.2 16.2 0 01-3.33-16.85 19.55 19.55 0 0010.16 2.94c3.28 0 6.51-.79 9.79-1a28.59 28.59 0 0115.9 3.48c.68-.07 1.36-.15 2-.26 12.81-1.94 21.71 14.37 34.53 21.05 9 4.69 12.63 15.63 14 25.67s1.58 20.72 6.8 29.41c3.58 5.94 11.59 9.37 13.09 16.14 2.93 13.2-.32 9.94-3.57 27.51-1.08 5.81-2.47 8.13-3.84 13.87-1.48 6.2.16 12.67.38 19 .71 20.92-16.34 40.95-37.11 43.58a34.11 34.11 0 008.89 20.46c-8.6 2.82-18.11-.44-25.69-5.39a61.55 61.55 0 01-25.35-34.51c-5.11-18.14-1.59-37.42-.78-56.25s-2.16-39.77-16.48-52c-3.87-3.39-9.19-7.89-7.04-12.68z"
        fill="#af637c"
      />
      <path
        d="M616.43 737.13s-3.25 8.46-9.76 11.06c0 0-16.27 3.9-5.86 7.81 7 2.61 22.31-2.62 31.76-6.38a6 6 0 002.14-9.59l-3.31-3.55zM478.49 745.58s-5.63 8.23-12.46 9.79c0 0-16.68 1.33-7 6.8 6.44 3.64 22.36.9 32.28-1.35a6 6 0 003.65-9.21l-2.69-4z"
        fill="#4c4981"
      />
      <path d="M576.09 530.21s-15 8.46-31.88 7.81" opacity={0.03} />
      <path
        d="M657.75 769.77c-2.33-2.17-4.52-4.73-5.2-7.84s.65-6.85 3.63-8c3.33-1.28 6.9 1 9.6 3.37s5.8 5 9.33 4.5a14.21 14.21 0 01-4.39-13.3 5.56 5.56 0 011.22-2.7c1.85-2 5.21-1.13 7.42.43 7 5 9 14.53 9.05 23.15.71-3.11.11-6.35.13-9.54s.89-6.72 3.58-8.44a10.79 10.79 0 015.51-1.27c3.17-.12 6.7.2 8.86 2.52 2.69 2.88 2 7.71-.35 10.88s-5.9 5.16-9.17 7.35a20.34 20.34 0 00-6.55 6.25 6.19 6.19 0 00-.49 1.12h-19.9a55.36 55.36 0 01-12.28-8.48zM839.83 612.78s74.33 54.11-76.56 114.45c0 0-26.73-61.9 12.67-107.07a47.66 47.66 0 0162.77-8.16z"
        fill={color}
      />
      <path
        d="M839.01 611.7s-71.57 45.54-75.74 115.52"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M761.73 719.13s24.67-83.76-4.63-145.41c-12.3-25.87-16.38-54.92-10.7-83a222.5 222.5 0 0111.75-39"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M739.92 412.83c0 10.27 18.59 40 18.59 40s18.59-29.77 18.59-40a18.59 18.59 0 00-37.17 0zM709.2 469.69c5.58 8.62 37.36 23.5 37.36 23.5s-.58-35.09-6.16-43.71a18.59 18.59 0 00-31.2 20.2zM710.54 566.86c9.17 4.62 44.11 1.43 44.11 1.43s-18.21-30-27.38-34.62a18.59 18.59 0 00-16.74 33.19zM728.11 640.13c8.25 6.1 43.24 8.86 43.24 8.86s-12.88-32.64-21.13-38.75a18.59 18.59 0 10-22.11 29.89zM785.63 495.18c-7.36 7.15-41.67 14.56-41.67 14.56s8.4-34.07 15.76-41.23a18.592 18.592 0 1125.91 26.67zM805.05 581.13c-9.17 4.62-44.11 1.43-44.11 1.43s18.21-30 27.38-34.62a18.59 18.59 0 1116.73 33.19zM812.5 667.31c-8.25 6.1-43.24 8.86-43.24 8.86s12.88-32.64 21.13-38.75a18.59 18.59 0 0122.11 29.89z"
        fill={color}
      />
      <path
        d="M739.92 412.83c0 10.27 18.59 40 18.59 40s18.59-29.77 18.59-40a18.59 18.59 0 00-37.17 0zM709.2 469.69c5.58 8.62 37.36 23.5 37.36 23.5s-.58-35.09-6.16-43.71a18.59 18.59 0 00-31.2 20.2zM710.54 566.86c9.17 4.62 44.11 1.43 44.11 1.43s-18.21-30-27.38-34.62a18.59 18.59 0 00-16.74 33.19zM728.11 640.13c8.25 6.1 43.24 8.86 43.24 8.86s-12.88-32.64-21.13-38.75a18.59 18.59 0 10-22.11 29.89zM785.63 495.18c-7.36 7.15-41.67 14.56-41.67 14.56s8.4-34.07 15.76-41.23a18.592 18.592 0 1125.91 26.67zM805.05 581.13c-9.17 4.62-44.11 1.43-44.11 1.43s18.21-30 27.38-34.62a18.59 18.59 0 1116.73 33.19zM812.5 667.31c-8.25 6.1-43.24 8.86-43.24 8.86s12.88-32.64 21.13-38.75a18.59 18.59 0 0122.11 29.89z"
        opacity={0.25}
      />
    </svg>
  );
};

SvgWishes.propTypes = {
  color: PropTypes.string
};
SvgWishes.defaultProps = {
  color: "primary"
};
const MemoSvgWishes = React.memo(SvgWishes);
export default MemoSvgWishes;
