import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMobileTesting = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 924.18 818.88"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M414.03 316.83c-36.12-11.69-74.31-21.49-113.34-20.48-57.38 1.49-112.55 28.23-139.76 67.75-23 33.49-26.07 72.85-36.11 110.09-12.37 45.88-35.85 89.42-60.91 132-13.46 22.87-27.66 46.22-30 71.35-3.21 34.89 17.93 69.77 51.26 93.15s77.68 35.84 122.24 38.75c23.71 1.54 48.49.35 69.6-8.19 22.33-9 38.66-25.47 61.08-34.37 20.78-8.24 45-9.3 68.31-8.09a380.06 380.06 0 0189.06 15.26c32.49 9.72 62.68 23.71 95.1 33.57s68.66 15.44 101.88 7.51c31.19-7.44 55.93-25.78 78.24-44.36a850.66 850.66 0 0099.95-98c20.15-23.39 38.92-48.09 47.92-75.42 17.19-52.26-5.84-111.43-57.37-147.42-42.69-29.83-100.12-43-156.36-51-51.29-7.37-110.63-8.1-157.77-26.87-44.96-17.95-85.86-39.97-133.02-55.23z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={874.45}
        cy={491.75}
        rx={23.11}
        ry={3.17}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={785.92}
        cy={500.73}
        rx={23.11}
        ry={3.17}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={681.64}
        cy={488.58}
        rx={23.11}
        ry={3.17}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={821.35}
        cy={526.29}
        rx={16.43}
        ry={2.26}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={729.47}
        cy={524.03}
        rx={16.43}
        ry={2.26}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M785.42 500.01s32.42-106.26-5.07-148.82c-28-31.84-59.88-28-74.13-24.09a26.32 26.32 0 00-17 14.13c-5 10.75-4.08 28.2 31.1 48.57 58.91 34.11 62.58 80.9 62.58 80.9z"
        fill={color}
      />
      <path
        d="M711.29 342.17s95.56 29.88 74.13 157.84M767.09 352.88s-13.16 8.87-9 22.19M720.88 360.77s8-8.18 17.83-3.67M758.65 401.92s14.12-7.16 17.77 1.81M793.6 416.86s-10.61-.84-10.8 4.23"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M786.73 500.86s-38-77.23-48.39-75.54c-5 .8-7.24 5.68-8.27 10.57a31.08 31.08 0 002.07 18.8c5.39 12.36 19.86 35.83 54.59 46.17z"
        fill={color}
      />
      <path
        d="M738.62 439.98s39.85 57.78 47.55 60.32M734.96 449h9.3M746.1 470.14l14.58.62M754.97 453.23l-1.58 7.59M770.47 476.34l-.28 6.9"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M785.61 500.86s38-77.23 48.39-75.54c5 .8 7.24 5.68 8.27 10.57a31.08 31.08 0 01-2.07 18.8c-5.39 12.36-19.86 35.83-54.59 46.17z"
        fill={color}
      />
      <path
        d="M833.72 439.98s-39.85 57.78-47.55 60.32M837.38 449h-9.3M826.24 470.14l-14.58.62M817.37 453.23l1.58 7.59M801.86 476.34l.29 6.9"
        fill="none"
        stroke="#565987"
        strokeMiterlimit={10}
      />
      <path
        d="M720.42 518.9a6.64 6.64 0 01-2.16-3.26 2.91 2.91 0 011.51-3.33c1.39-.53 2.87.43 4 1.41s2.41 2.07 3.88 1.87a5.91 5.91 0 01-1.82-5.53 2.32 2.32 0 01.5-1.13c.77-.82 2.17-.46 3.09.18 2.93 2.07 3.75 6.05 3.77 9.63a18.7 18.7 0 000-4 4.07 4.07 0 011.49-3.51 4.41 4.41 0 012.27-.54 4.72 4.72 0 013.69 1.05c1.11 1.2.82 3.21-.15 4.53a14.38 14.38 0 01-3.81 3 8.38 8.38 0 00-2.73 2.6 3.19 3.19 0 00-.2.46h-8.26a22.78 22.78 0 01-5.07-3.43zM865.09 487.79a6.55 6.55 0 01-2.16-3.26 2.9 2.9 0 011.51-3.32c1.39-.53 2.87.43 4 1.4s2.42 2.08 3.89 1.87a5.89 5.89 0 01-1.83-5.53 2.21 2.21 0 01.51-1.12c.77-.82 2.16-.47 3.08.18 2.93 2.06 3.75 6 3.77 9.63a18.15 18.15 0 000-4 4.07 4.07 0 011.49-3.51 4.55 4.55 0 012.27-.53 4.68 4.68 0 013.69 1c1.12 1.19.83 3.2-.15 4.52a14.22 14.22 0 01-3.81 3.06 8.38 8.38 0 00-2.73 2.6 2.45 2.45 0 00-.2.46h-8.26a23.05 23.05 0 01-5.07-3.45zM816.87 518.9a6.64 6.64 0 01-2.16-3.26 2.91 2.91 0 011.51-3.33c1.39-.53 2.87.43 4 1.41s2.41 2.07 3.88 1.87a5.92 5.92 0 01-1.83-5.53 2.43 2.43 0 01.51-1.13c.77-.82 2.17-.46 3.09.18 2.93 2.07 3.75 6.05 3.77 9.63a18.7 18.7 0 00.05-4 4.07 4.07 0 011.49-3.51 4.41 4.41 0 012.27-.54 4.72 4.72 0 013.69 1.05c1.11 1.2.82 3.21-.15 4.53a14.38 14.38 0 01-3.81 3 8.38 8.38 0 00-2.73 2.6 3.19 3.19 0 00-.2.46h-8.26a22.78 22.78 0 01-5.12-3.43zM680.14 456.02s-3.1 4.05 1.43 10.16 8.25 11.28 6.75 15.09c0 0-6.83-11.35-12.39-11.51s-1.91-6.91 4.21-13.74z"
        fill={color}
      />
      <path
        d="M680.14 456.02a4.89 4.89 0 00-.64 1.27c-5.42 6.37-8.31 12.32-3.1 12.47 4.86.14 10.69 8.82 12.08 11 0 .17-.1.34-.16.5 0 0-6.83-11.35-12.39-11.51s-1.91-6.9 4.21-13.73z"
        opacity={0.1}
      />
      <path
        d="M674.38 461.18c0 1.43.16 2.58.36 2.58s.35-1.15.35-2.58-.2-.75-.39-.75-.32-.67-.32.75z"
        fill="#ffd037"
      />
      <path
        d="M672.4 462.88c1.25.69 2.35 1.1 2.44.93s-.84-.87-2.09-1.55-.76-.19-.86 0-.74-.06.51.62z"
        fill="#ffd037"
      />
      <path
        d="M696.49 456.02s3.1 4.05-1.43 10.16-8.25 11.28-6.74 15.09c0 0 6.82-11.35 12.38-11.51s1.91-6.91-4.21-13.74z"
        fill={color}
      />
      <path
        d="M696.49 456.02a4.89 4.89 0 01.64 1.27c5.42 6.37 8.31 12.32 3.1 12.47-4.86.14-10.69 8.82-12.08 11a4.2 4.2 0 00.17.5s6.82-11.35 12.38-11.51 1.91-6.9-4.21-13.73z"
        opacity={0.1}
      />
      <path
        d="M702.25 461.18c0 1.43-.16 2.58-.36 2.58s-.35-1.15-.35-2.58.2-.75.39-.75.32-.67.32.75z"
        fill="#ffd037"
      />
      <path
        d="M704.23 462.88c-1.25.69-2.35 1.1-2.44.93s.84-.87 2.09-1.55.76-.19.86 0 .74-.06-.51.62z"
        fill="#ffd037"
      />
      <path
        d="M701.26 480.74s-8.65-.26-11.26-2.12-13.32-4.08-14-1.1-13 14.82-3.24 14.9 22.72-1.52 25.32-3.11 3.18-8.57 3.18-8.57z"
        fill="#a8a8a8"
      />
      <path
        d="M672.62 491.38c9.77.08 22.71-1.52 25.32-3.11 2-1.2 2.77-5.54 3-7.54h.28s-.54 7-3.15 8.57-15.54 3.19-25.32 3.11c-2.82 0-3.79-1-3.74-2.51.43.91 1.51 1.47 3.61 1.48z"
        opacity={0.2}
      />
      <circle cx={128.99} cy={60.52} r={21.63} fill={color} opacity={0.1} />
      <circle cx={503.1} cy={26.38} r={21.63} fill={color} opacity={0.1} />
      <circle cx={846.25} cy={111.83} r={21.63} fill={color} opacity={0.1} />
      <circle cx={36.25} cy={258.85} r={36.25} fill={color} opacity={0.1} />
      <circle cx={71} cy={437.85} r={36.25} fill={color} opacity={0.1} />
      <circle cx={749.92} cy={279.96} r={36.25} fill={color} opacity={0.1} />
      <path
        d="M450.16 347.84c-1.28.12-2.58.06-3.85.26a17.53 17.53 0 00-6 2.41c-9.1 5.18-17.69 12.3-21.46 22.06a3 3 0 00-.28 1.95 3.3 3.3 0 001.06 1.38l3.54 3.22a5 5 0 001.57 1.1 5.13 5.13 0 002.9-.09c9.73-2.23 20.07-4.8 26.9-12.08 3.24-3.45 6.23-8.2 11-8.33 2 0 3.87.77 5.84 1s4.34-.61 4.81-2.53a5.32 5.32 0 00-.32-2.83l-2.94-9.79c-.8-2.68-8.87-2.82-11.56-2.34-4.1.71-6.86 4.21-11.21 4.61zM484.8 402.99c-.14 3.35.13 6.74-.42 10.06a29.35 29.35 0 01-2.49 7.55 49.57 49.57 0 01-6.8 10.71c-2.53 3-5.56 5.82-9.31 7s-8.36.33-10.7-2.83c-1.91-2.57-2-6-1.86-9.21.34-7.89 1.58-15.89 5.12-22.95 1.52-3 3.45-5.86 5-8.89 3.24-6.29 5.09-13.75 10.68-18.09a35.11 35.11 0 0011.1 3.05c1.49.16 5.75.26 6.25 2.17.34 1.29-2.46 4.9-3 6.17a42.11 42.11 0 00-3.57 15.26z"
        fill="#65617d"
      />
      <path
        d="M445.16 258.77c1.2 3.06 2.72 6.06 3 9.32.2 2 0 4 0 6a39.19 39.19 0 001.36 8.1l5.57 22.8c.83 3.41 1.66 6.91 1.23 10.39-.29 2.32-1.13 4.57-1.12 6.9a26.76 26.76 0 00.84 5.23 32.22 32.22 0 01-.84 15.9 2.38 2.38 0 00-.17 1.23c.14.65.77 1.05 1.34 1.36a57.11 57.11 0 0019.3 6.43 189.05 189.05 0 0012.7-45.35c1.42-9.44 2.11-19 3.93-28.37a2.32 2.32 0 01.65-1.44c.68-.57 1.71-.21 2.51.17a224.05 224.05 0 0129.41 17 36.74 36.74 0 006.79-30.41 63 63 0 00-5-13.08 73.89 73.89 0 00-8.5-14.27c-7.42-9.3-18.3-15.24-29.5-19.27-6.81-2.46-13.82-4.28-20.82-6.14-3.92-1.05-10.49-4.47-14.3-1.81-4 2.77-6.66 9.64-8.3 14a51.58 51.58 0 00-3.26 16.89 47.72 47.72 0 003.18 18.42z"
        fill="#3f3d56"
      />
      <path
        d="M525.55 286.26c-2.09 2.28-.33 5.92-.73 9a12.43 12.43 0 01-1.47 3.95L513.78 318a34.84 34.84 0 00-3.56 9c-1.31 6.78 1.38 14.4-2.06 20.39-1.11 1.93-2.83 3.59-3.29 5.77-.34 1.59 0 3.25-.17 4.86-.23 1.89-1.24 3.59-1.8 5.41a37.69 37.69 0 00-.93 5.32 31.3 31.3 0 01-11.24 19.44 17.88 17.88 0 01-12.4 4.22c-4.46-.38-8.89-3.41-9.8-7.79-.31-1.49-.25-3.15-1.18-4.36-1.32-1.73-4.1-1.8-5.37-3.57l4.92-8.1c1.53-2.51 3.09-5.13 3.34-8.06.3-3.59-1.43-7.17-.81-10.72.53-3.05 2.72-5.59 3.38-8.61.82-3.75-.82-7.54-1.71-11.28-2.18-9.21.26-18.81 2.69-28 3.23-12.16 6.54-24.51 13.08-35.26 13.05 7.03 25.05 13.78 38.68 19.6z"
        fill="#3f3d56"
      />
      <path
        d="M525.67 95.78c.78 2.12.36 4.47.21 6.72-.35 5 .71 10 .47 15.07s-1.8 9.91-2.88 14.84c-3.07 14.07-2.33 28.73-5.11 42.86-3.43 17.5-12.2 33.8-13.93 51.56-.55 5.64-.48 11.68-3.57 16.44a258.15 258.15 0 01-51.72-30.38c3.52-26.11 7-52.35 6.53-78.69a33.78 33.78 0 01.66-9.48 29.23 29.23 0 013.56-7.38c3.87-6.29 8.13-12.33 12.38-18.36 2.72-3.86 5.66-7.91 10-9.72s9.48-1 14.21-.14q8.54 1.56 17.06 3.12c3.55.65 10.61-.59 12.13 3.54z"
        fill={color}
      />
      <path
        d="M388.74 195.83a53.37 53.37 0 00-7.6-6.31c3.55-4.32 2.85-10.57 3.72-16.1a53.09 53.09 0 013.23-10.47c.36-.95.87-2 1.86-2.25a3.27 3.27 0 011.78.28c3 1.06 9.26 1 11.59 2.94 2.81 2.36.24 7.3-.82 10.25-.75 1.98-12.27 23.16-13.76 21.66z"
        fill="#be6f72"
      />
      <path
        d="M397.45 382.58a20.72 20.72 0 012.89 8c.24 2.84-.8 5.95-3.22 7.45s-5.89 1-8.77.1a45.64 45.64 0 01-27.65-25c-.91-2.1-1.7-4.33-3.31-5.95a18.32 18.32 0 00-3.95-2.65c-3.93-2.22-7.72-5.14-9.54-9.28s-1-9.67 2.77-12.13a10.22 10.22 0 017.84-1 30.32 30.32 0 017.42 3.23c3.88 2.11 8.62 3.93 12 6.74 3 2.47 5.69 5.81 8.25 8.72a122.63 122.63 0 018.23 10.5c.82 1.07 7.73 10.3 7.04 11.27zM324.15 361.59a69.26 69.26 0 01-2.65 14.85c-.81 2.72-1.88 5.55-4.13 7.28a15.11 15.11 0 01-6.31 2.31 6 6 0 01-2.41.15c-1.38-.29-2.36-1.48-3.21-2.61-3.34-4.42-6.59-9.09-8-14.45-2-7.77 0-16.1 3.47-23.36a23.91 23.91 0 015.35-7.79 20.49 20.49 0 019.82-4.41c3.69-.74 8.22-2.32 8.49 2.17a208.64 208.64 0 01-.42 25.86z"
        fill="#65617d"
      />
      <path
        d="M379.48 173.63c6.9 3.57 14.56 8.11 16 15.74.89 4.66-.82 9.43-.54 14.17.25 4.17 2 8.2 1.78 12.36a58.18 58.18 0 01-1 5.85c-.59 3.69-.24 7.45-.39 11.18-.33 8.4-3.14 16.48-4.5 24.77a72.56 72.56 0 00-.67 17.91c.33 3.86 1 7.7 1 11.58a50.73 50.73 0 01-.69 8.34 83.2 83.2 0 01-8 24.87c-4.81 9.47-4.13 21.69-3.62 32.3a8 8 0 01-.54 4.32c-1.26 2.29-4.4 2.62-7 2.4a38 38 0 01-25-12.66 6.41 6.41 0 01-1.82-3.37c-.22-2.14 1.5-3.9 2.74-5.67 4.22-6 3.15-14.13 3.65-21.5a47 47 0 013.79-15.55c1.24-2.85 2.79-5.66 3.07-8.76.26-2.89-.62-5.75-1.49-8.51l-3-9.52c-4.65-14.79-9.33-29.67-16.37-43.48a21.75 21.75 0 00-9.25 13c-2.62 9.42 1.11 19.94-2.46 29a26.52 26.52 0 00-1.47 3.89 15.65 15.65 0 00-.24 3.49 284.19 284.19 0 001.78 29.17 9 9 0 001.2 4.17c.59.85 1.45 1.48 2.08 2.29 1.75 2.27 1.42 5.45 1 8.28l-2 13.38a3.63 3.63 0 01-.65 1.89 3.58 3.58 0 01-1.7.92 47.4 47.4 0 01-19.66 1.8c-1.95-.23-3.72-1.54-5.35-2.64-.17-2 2.32-3.33 2.41-5.32a4.59 4.59 0 00-1.53-3.06c-3.72-4.2-8.16-8.66-8.12-14.27 0-1.47.35-2.94.3-4.41-.13-3.77-2.73-7-3.64-10.63-1.12-4.49.37-9.15.94-13.74.78-6.18-.14-12.44-1-18.61l-3.35-22.64a60.64 60.64 0 00-2.08-10.38 81.27 81.27 0 00-4.43-9.74c-3.2-6.5-5.83-13.26-8.45-20a18.23 18.23 0 01-1.55-5.79c-.15-3.43 1.62-6.67 3.82-9.31a29.11 29.11 0 0116-9.7 7 7 0 013.21-.13 8.62 8.62 0 012.49 1.31 59.82 59.82 0 0052.87 6.27c1 .76 2.85.43 4-.11 3.21-1.47 5.83-3.92 8.65-6 5.25-3.98 12.33-7.76 18.78-9.15zM172.21 430.44a13.68 13.68 0 002.36 4.21c3.62 4.72 8.67 8.49 11 14 .49 1.18.85 2.42 1.3 3.62a23.81 23.81 0 006.5 9.42 40 40 0 007.17 4.75c4.42 2.41 9.2 4.59 14.22 4.46a15.45 15.45 0 003-.36 16.23 16.23 0 004.47-1.64c3.23-1.78 6-5.26 5.36-8.89a8.13 8.13 0 00-.65-2 21 21 0 00-1.83-2.89c-1.69-2.34-3.43-4.74-5.9-6.24-2.78-1.7-6.28-2.12-8.78-4.22a13.8 13.8 0 01-2.53-3.06 38.58 38.58 0 01-5-11.33c-.76-3-1.27-6.29-3.46-8.49s-5.2-2.7-8.12-3.2a14.11 14.11 0 00-3-.29c-1.43.05-2.91.46-4.25-.21s-1.79-1.62-3.41-1.49a7 7 0 00-3.51 1.53c-3.8 2.81-6.32 7.81-4.94 12.32z"
        fill="#3f3d56"
      />
      <path
        d="M207.74 434.99c.65 3.39 1.65 7 4.27 9.21 1.67 1.44 4 2.34 4.83 4.37s-.24 4.58-1.62 6.44a23.72 23.72 0 01-6.44 5.91c-2.12 1.31-4.65 2.31-7.08 1.73-2-.47-3.58-1.91-5.07-3.3-3.42-3.17-6.92-6.46-8.84-10.71-2-4.48-2.1-9.67-4.28-14.08-1.27-2.57-3.23-4.82-4-7.58a4.71 4.71 0 010-3.08 4.34 4.34 0 013.92-2.33 13.64 13.64 0 014.69 1 103.28 103.28 0 0013.83 3.87c1.87.35 3 .34 4 2.15a21.56 21.56 0 011.79 6.4zM219.34 463.65a11 11 0 00-1.55 3.72 8.31 8.31 0 00-.11 3.14 16.23 16.23 0 004.47-1.64c3.23-1.78 6-5.26 5.36-8.89a8.13 8.13 0 00-.65-2 2.79 2.79 0 00-2.66.83 22.09 22.09 0 00-4.86 4.84z"
        fill="#fbbebe"
      />
      <path
        d="M183.5 387.67a4.92 4.92 0 00-.37 3c.46 2 2.51 3.15 4.36 4.06l17.59 8.6a36.84 36.84 0 013.56 1.89c3 1.84 5.36 4.44 7.92 6.82s5.41 4.61 8.8 5.45a14.87 14.87 0 0010-1.31 20.67 20.67 0 004.58-3.11 28.16 28.16 0 003.3-3.43 7.4 7.4 0 001.79-3.23c.33-1.83-.58-3.63-1.64-5.14a23.74 23.74 0 00-2-2.48c-6.67-7.37-17.6-11.19-27-12.69-3.74-.6-7.29-2-10.89-3.14s-7.41-2-11.15-1.47-7.42 2.68-8.85 6.18z"
        fill="#3f3d56"
      />
      <path
        d="M183.5 387.67a4.92 4.92 0 00-.37 3c.46 2 2.51 3.15 4.36 4.06l17.59 8.6a36.84 36.84 0 013.56 1.89c3 1.84 5.36 4.44 7.92 6.82s5.41 4.61 8.8 5.45a14.87 14.87 0 0010-1.31 20.67 20.67 0 004.58-3.11 28.16 28.16 0 003.3-3.43 7.4 7.4 0 001.79-3.23c.33-1.83-.58-3.63-1.64-5.14a23.74 23.74 0 00-2-2.48c-6.67-7.37-17.6-11.19-27-12.69-3.74-.6-7.29-2-10.89-3.14s-7.41-2-11.15-1.47-7.42 2.68-8.85 6.18z"
        opacity={0.1}
      />
      <path
        d="M227.52 393.16a20 20 0 013.3 5.09 5.7 5.7 0 01.75 4.07 5.94 5.94 0 01-1.83 2.4l-1.75 1.62a7 7 0 01-1.82 1.36 7.28 7.28 0 01-3 .45c-2.35 0-4.88 0-6.79-1.41-2.61-1.88-3.08-5.77-1.89-8.76s3.68-5.25 6.19-7.27c2.04-1.65 5.41.94 6.84 2.45zM238.2 403.5a8.89 8.89 0 00.45 4.95c.44 1.5.87 3 1.3 4.53v.06a28.16 28.16 0 003.3-3.43 7.4 7.4 0 001.79-3.23c.33-1.83-.58-3.63-1.64-5.14a23.74 23.74 0 00-2-2.48c-.47.61-.88 1.21-1.22 1.6a8.83 8.83 0 00-1.98 3.14z"
        fill="#fbbebe"
      />
      <path
        d="M192.25 328.97c-2.07 8.7-1.19 17.8-.09 26.68.84 6.76 1.78 13.76-.22 20.27-.74 2.43-1.91 4.9-1.46 7.41.85 4.73 6.55 6.55 11.27 7.44a11.11 11.11 0 004.17.25 9.9 9.9 0 003.8-2 41.54 41.54 0 0014.63-19.45c1.79-5.22 2.36-10.77 2.91-16.26.92-9.24 1.85-18.59.5-27.77-.4-2.7-1-5.37-1.25-8.09a58.46 58.46 0 01.78-14.15 228.26 228.26 0 017.8-34.14 46 46 0 01-27.68-5c1.64.88-.24 14.91-.44 16.88a114.57 114.57 0 01-3.17 17.4c-2.79 10.67-9.02 19.93-11.55 30.53z"
        fill="#3f3d56"
      />
      <path
        d="M192.25 328.97c-2.07 8.7-1.19 17.8-.09 26.68.84 6.76 1.78 13.76-.22 20.27-.74 2.43-1.91 4.9-1.46 7.41.85 4.73 6.55 6.55 11.27 7.44a11.11 11.11 0 004.17.25 9.9 9.9 0 003.8-2 41.54 41.54 0 0014.63-19.45c1.79-5.22 2.36-10.77 2.91-16.26.92-9.24 1.85-18.59.5-27.77-.4-2.7-1-5.37-1.25-8.09a58.46 58.46 0 01.78-14.15 228.26 228.26 0 017.8-34.14 46 46 0 01-27.68-5c1.64.88-.24 14.91-.44 16.88a114.57 114.57 0 01-3.17 17.4c-2.79 10.67-9.02 19.93-11.55 30.53z"
        opacity={0.1}
      />
      <path
        d="M244.17 277.99c4 11.59 3.12 24.25 1.39 36.39s-4.28 24.28-3.53 36.51c.29 4.8 1.07 9.73-.33 14.32a31.3 31.3 0 01-3.07 6.39l-31.91 55.18a9.92 9.92 0 01-8 5c-3.41.24-6.76-.88-9.94-2.13a17.88 17.88 0 01-5.79-3.21 6.85 6.85 0 01-2.44-5.86c1.43-9.58 3.58-19.39 5.17-29a50.2 50.2 0 016.94-18.37c2.47-4 5.51-7.59 7.64-11.75 6.12-11.92 4-26.46-.72-39s-11.75-24.18-15.5-37a42.42 42.42 0 01-1.89-11 29.33 29.33 0 018.36-20.86 7.33 7.33 0 012.89-2 8.1 8.1 0 013.94.07c17.77 3.45 40.92 9.2 46.79 26.32z"
        fill="#3f3d56"
      />
      <path
        d="M531 104.96c.58 4.38-1 8.81-3.25 12.6-8.51 14.2-28.13 20.48-43.3 13.87-6.25-2.73-11.54-7.23-16.72-11.67-1.74-1.5-3.55-3.07-4.43-5.19-1.55-3.75.32-8.22 3.37-10.9s7-4 10.93-5.19c12.97-4.04 50.31-16.78 53.4 6.48z"
        fill="#fbbebe"
      />
      <path
        d="M523.41 91.06c11.81 9.5 29 18.55 42.38 25.59 4.55 2.4 9.6 5.1 11.24 10 .88 2.62.59 5.47.3 8.23-.56 5.31-1.14 10.7-3.19 15.63-2.41 5.77-6.67 10.53-10.09 15.77-6 9.18-9.52 20-16.93 28.11 5 16.61 10.47 33.2 12.25 50.44a2.32 2.32 0 01-.15 1.41 2.42 2.42 0 01-.78.71L546 255.11a14 14 0 00-3.59 3c-2.2 2.86-1.91 6.88-3.27 10.21a13.27 13.27 0 01-7.7 7 23.71 23.71 0 01-10.59 1.12 24.62 24.62 0 01-12.64-4.45c-3.17-2.4-5.43-5.77-7.61-9.09a35.39 35.39 0 01-4-7.29c-1.33-3.68-1.41-7.69-1.36-11.61a122.74 122.74 0 012.13-22.23c.58-2.91 1.3-5.78 1.76-8.71.92-5.9.74-11.92 1.42-17.85a120.06 120.06 0 014.45-19.67 101.47 101.47 0 002.6-12.1c1.17-7.18 3.5-14.11 5.83-21l4-11.81c.85-2.55 1.71-5.09 2.72-7.58 1.88-4.65 4.3-9.18 4.94-14.14.71-5.41-5.13-11.83-3.16-16.91.16-.56 1.03-1.3 1.48-.94z"
        fill="#3f3d56"
      />
      <path
        d="M573.83 123.86c2.77 1.25 4.3 4.23 5.29 7.11a40.3 40.3 0 011.56 20.2 36.16 36.16 0 00-.8 5.16 34.41 34.41 0 00.59 6c1 7.65 0 15.42.33 23.14.34 8.68 2.23 17.85-1.41 25.74-2.42 5.24-7 9.14-11.52 12.68a230.52 230.52 0 01-55.17 31.84c3.41-4.1 3.47-10.27 1.2-15.1s-6.49-8.46-11-11.28a70.88 70.88 0 0016.55-5.91c10.48-5.32 19.46-13.11 28.33-20.82a8.62 8.62 0 002.94-3.72c.9-3-1.58-5.85-3.3-8.48-5.21-8-4-18.45-1.82-27.71 2.43-10.15 6-20.26 12.51-28.42 4.06-5.1 9.36-9.02 15.72-10.43z"
        fill="#3f3d56"
      />
      <path
        d="M511.82 255.98a13.67 13.67 0 01-3.44 3.78c-3 2-7.12 1.24-10.47-.18a30.55 30.55 0 01-8.5-5.41 13.32 13.32 0 00-3.77-2.8c-2.62-1-6.28-.25-7.75-2.66a1.41 1.41 0 01-.24-.86c.09-.87 1.23-1.11 2.11-1.16a26.19 26.19 0 0011.57-3.57 11.11 11.11 0 01-2.84-3 2.34 2.34 0 01-.48-1.42 2.54 2.54 0 01.87-1.42 22.26 22.26 0 0124.48-4.08 4.88 4.88 0 012 1.5 5.55 5.55 0 01.73 2c.65 2.8 3 7 2.15 9.83-.94 3.25-4.49 6.7-6.42 9.45z"
        fill="#fbbebe"
      />
      <path
        d="M443.63 243.37c12.44-14.37 18-33.28 23.16-51.57l3.69-13 8.9-31.31c1.31-4.62 2.62-9.24 3.49-13.95 1.49-8.13 1.63-16.44 1.54-24.7a26.73 26.73 0 00-2.31-9.92c-.87-2.16-1.29-4.46-2-6.69a33.38 33.38 0 00-4.01-8.79 9.2 9.2 0 00-1.81-2.16 10.52 10.52 0 00-4.09-1.66 36 36 0 00-9.79-1.49c-3.32.12-6.74 1.27-8.88 3.79-1.63 1.93-2.38 4.43-3.67 6.6a25.75 25.75 0 00-1.63 2.77 14 14 0 00-.9 4.54q-.78 9.45-1.33 18.92c-.17 2.87-.32 5.76-.21 8.64.09 2.24.33 4.47.57 6.7l2.37 21.84c.55 5.13.16 9.93.62 15.07 1.12 12.41-1.55 24.82-4.29 37-1.31 5.79-2.66 11.66-5.46 16.9-2.47 4.64-6.17 9.35-5.19 14.52.34 1.8 1.25 3.48 1.39 5.3a10.64 10.64 0 00.33 3.35 4 4 0 004.27 2 9.91 9.91 0 005.24-2.7z"
        fill="#3f3d56"
      />
      <path
        d="M445.15 185.86c.38 2.87.09 5.78.23 8.67a58.48 58.48 0 002 11c1 4 2.28 8.48 5.81 10.7a18.26 18.26 0 012.53 1.59 2.46 2.46 0 01.82 2.68l-2.75-.46a2.79 2.79 0 11-3.84 4 6.51 6.51 0 01-.25 2.68 2.18 2.18 0 01-2 1.5 3.22 3.22 0 01-1.43-.6l-7.18-4.45a13.25 13.25 0 01-5.17-5l-3.14-4.73a11.3 11.3 0 01-1.63-3c-1.17-4 2.1-8.44.4-12.21a16.41 16.41 0 00-1.79-2.62c-3.63-5-3.4-11.8-3-18 .13-2.09.51-4.57 2.4-5.48 1.5-.73 3.3-.08 4.69.83s2.62 2.11 4.2 2.65c1 .34 2.1.38 3.1.74 1.4.49 2.7 2.4 3.64 3.53a11.71 11.71 0 012.36 5.98z"
        fill="#fbbebe"
      />
      <path
        d="M357.52 95.99a17.78 17.78 0 01-3.52 5.26 6.81 6.81 0 01-5.8 2c-2.22-.44-3.85-2.27-5.32-4-3.84-4.51-7.73-9.08-10.31-14.42-3.94-8.13-4.57-17.41-5.14-26.42-.14-2.32-.26-4.78.85-6.81 1.41-2.59 4.4-3.81 7.16-4.84l15.25-5.7a5.91 5.91 0 013-.55c2.39.4 3.27 3.28 3.92 5.61a35 35 0 005.7 11.6c3.42 4.56 11.09 10.7 6.71 16.39-5.29 6.82-8.65 14.18-12.5 21.88z"
        fill="#be6f72"
      />
      <path
        d="M377.03 69.97c6.68 6.28 8.94 16.06 8.62 25.21s-2.86 18.07-4.31 27.11-1.74 18.69 2.19 27c1.35 2.85 3.19 5.49 4.13 8.5a26.67 26.67 0 01.79 9.13 26.07 26.07 0 01-1.82 9.44c-2.13 4.72-6.51 8-10.7 11-8.55 6.18-17.27 12.46-27.31 15.69-6.8 2.19-14 2.91-21.12 3.3a67.18 67.18 0 01-14.46-.41 39.27 39.27 0 01-21.95-11.62 12.3 12.3 0 01-2.49-3.43 14.25 14.25 0 01-.87-5.2q-.36-9.85.12-19.7a86.6 86.6 0 012.57-18.55c1.91-7 5.22-13.56 7.73-20.38 8.74-23.71 7.86-50.69 20-72.83 2.62-4.78 7-9.81 12.4-9.05a4.16 4.16 0 012.74 1.26 5.77 5.77 0 011 3.08c1.29 10.76 3.12 21.8 8.19 31.51 2 3.81 5 9.61 9.61 10.63s7.33-3.38 9.8-6.5a79.81 79.81 0 0115.14-15.19z"
        fill="#e3e8f4"
      />
      <path
        d="M409 53.78a19.93 19.93 0 013.79 2.66c3 2.84 4.1 7.19 4.08 11.31s-1 8.18-1.6 12.26c-1.61 11-.24 22.26.4 33.4a16.17 16.17 0 01-.32 5.38c-.49 1.68-1.5 3.16-2.15 4.79-1.91 4.82-.47 10.32-1.59 15.38-1.2 5.39-5.31 10.29-4.54 15.76.31 2.14 1.34 4.11 1.78 6.23s.06 4.68-1.77 5.82-4.49.31-6.67.94a20.55 20.55 0 00-2.58 1.16c-3.37 1.52-7.39 1-10.71-.66a32.46 32.46 0 01-8.65-6.86c-3.81-3.9-7.5-8.17-9.17-13.36-2.44-7.52-.27-15.71 2.38-23.17s5.81-15 5.34-22.93c-.26-4.44-1.66-8.71-2.5-13.07a83.6 83.6 0 01-1.11-18.3c.13-4.48.43-9.1 2.36-13.15a18.11 18.11 0 0114.32-9.8c7-.76 13 2.81 18.91 6.21z"
        fill="#3f3d56"
      />
      <path
        d="M390.09 150.44a30.49 30.49 0 001.7 9.39c1.79-4.08 2-8.66 2.24-13.1 1-15.29 4.39-29.71 8-44.52-2.63 2-4.11 7-5.37 10a88.18 88.18 0 00-6.57 38.23z"
        opacity={0.1}
      />
      <path
        d="M322.68 43.9c-4.82 1.27-9 4.13-13.67 6-4.85 2-10.07 2.85-15.16 4.08-11.78 2.86-23.61 8.17-30.72 18-5.24 7.23-7.41 16.16-11 24.35-3 6.87-7 13.31-9.21 20.46-2.89 9.33-2.56 19.33-1.85 29.07.58 8 1.46 16.09 5.09 23.18 1.9 3.72 4.52 7.05 6.42 10.77 2.28 4.47 3.48 9.4 5.38 14s4.69 9.2 9.1 11.6l7.3-4.27c10.89-6.37 21.78-12.75 32.33-19.67 9.2-6 18.48-12.89 23.38-22.75 4.34-8.71 4.77-18.89 3.65-28.56s-3.68-19.13-5-28.77a115.86 115.86 0 01.75-36.51c1-5.44 3.66-11.06 4.21-16.48.61-5.79-6.83-5.6-11-4.5z"
        fill="#3f3d56"
      />
      <path
        d="M277.55 202.87c5.59 5.29 13.63 6.83 20.62 10a44.27 44.27 0 0113.77 10c2.15 2.36 4.23 5.57 3.15 8.57-.91 2.58-3.7 3.9-6.26 4.86-3.18 1.2-6.73 2.26-9.9 1.05-1.86-.71-3.36-2.13-5.07-3.14-4.19-2.49-9.47-2.5-13.77-4.8-6.06-3.24-9.08-10.37-14.78-14.22-3.12-2.1-7.43-3.82-7.75-7.57a9.15 9.15 0 01.84-3.93c1.15-3.06 3.11-13.57 7.49-13.29 4.77.31 8.11 9.94 11.66 12.47z"
        fill="#fbbebe"
      />
      <path
        d="M248.26 156c1.83 6.58 6.08 12.19 10.49 17.41 3.17 3.75 6.65 7.83 6.76 12.74.1 4.64-3 8.91-7 11.28s-8.71 3.13-13.34 3.43a33.65 33.65 0 01-11.06-.77c-9.14-2.48-15.48-10.45-22.67-16.61-4.27-3.65-9.07-6.83-12.34-11.4s-4.65-11.13-1.43-15.74a22.78 22.78 0 014-4 66.86 66.86 0 0013.79-16.55c1.48-2.51 2.9-5.23 5.39-6.74 3.57-2.17 8.15-1.18 12.19-.12 4.39 1.15 16.76 3.4 17.62 9 .35 2.3-2.5 5.88-2.93 8.35a22.12 22.12 0 00.53 9.72z"
        fill="#fbbebe"
      />
      <path
        d="M270.87 168.54a42.23 42.23 0 013.22 7.45c3.05 10.6-2.4 21.52-5 32.24-3.32 13.73-1.91 28.09-2.07 42.22-.07 6.46-.76 13.57-5.41 18.05-1.2 1.14-2.64 2.1-3.45 3.54a14.65 14.65 0 00-1.11 3.31 17.06 17.06 0 01-24.72 10.18c-3.79-2.11-7.08-5.77-11.42-5.88a33.11 33.11 0 00-4.07.45c-4.32.43-8.55-1.17-12.6-2.74a8.22 8.22 0 01-2.66-1.42c-.73-.67-1.2-1.57-1.87-2.29-2.47-2.66-6.69-2.2-10.25-2.94a14.35 14.35 0 01-10.87-10.87c-.72-3.44-.11-7 .49-10.47l2.68-15.46a142.33 142.33 0 002.33-17.17 72 72 0 00-1.66-19.41c-1.18-5.2-2.94-10.29-3.58-15.59a38.09 38.09 0 017-26.81c1.39-1.91 3.21-3.82 5.57-4 1.91-.17 3.7.85 5.36 1.83q21.63 12.8 43.56 25.07c4 2.25 8.09 4.51 12.55 5.62 1.34.34 3.26.2 3.45-1.16a2.53 2.53 0 00-.39-1.47c-2.5-4.81-6.12-8.94-9-13.52s-5.1-10-4.25-15.32c1.16-7.36 8-12.23 13.59-6.46 6.27 6.55 10.47 14.97 14.58 23.02z"
        fill="#f86d70"
      />
      <path
        d="M226.09 261.87c11.73.75 23.72 1.55 34.58 6.05 3.49 1.44 7.19 3.3 10.86 2.41a14.52 14.52 0 005-2.68 114.39 114.39 0 0012.78-10.9c-.4-2.19-3.37-2.49-5.59-2.47a33.41 33.41 0 01-15.56-3.74 26.22 26.22 0 00-5-2.33c-4.75-1.31-9.59 1.19-14.36 2.41-7.06 1.8-14.5.75-21.71-.31l-19.46-2.87c-1.81-.26-3.85-.47-5.29.65a6.46 6.46 0 00-1.89 3.39c-2.38 8-1.24 8.67 6.68 9.17z"
        fill="#fbbebe"
      />
      <circle cx={491.81} cy={91.03} r={32} opacity={0.1} />
      <circle cx={491.58} cy={89.64} r={32} fill="#fbbebe" />
      <path
        d="M518.59 49.01c2.56 1.58 5.24 3.28 6.64 5.94a29.74 29.74 0 011.71 5.6c1.75 6 6.41 11.21 6.69 17.46.31 6.85-4.83 12.8-10.65 16.39a7.9 7.9 0 01-4.58 1.54c-1.69-.11-3.15-1.17-4.7-1.85-6.57-2.92-13.92.78-20.88 2.48a37.48 37.48 0 01-21.8-1.28c-3.75-1.4-7.39-3.5-9.74-6.75s-3.19-7.8-1.19-11.29c1-1.78 2.66-3.39 2.55-5.42-.06-1.22-.78-2.32-1-3.52-.32-1.91.68-3.77 1.7-5.4a78.16 78.16 0 0117.3-19.57c2-1.64 4.31-3.24 6.93-3.36 5.26-.23 9.78 3.69 15.19 3.71 6.14.02 10.55 2.06 15.83 5.32z"
        fill="#3f3d56"
      />
      <circle cx={373.78} cy={49.88} r={33} opacity={0.1} />
      <circle cx={374.36} cy={49.07} r={33} fill="#be6f72" />
      <path
        d="M391.99 67.71c4.66 2.61 10.41 2.34 15.61 1.15a21 21 0 008.2-3.46 9.89 9.89 0 004.13-7.6c0-3.35-2.2-6.37-2.47-9.72-.33-4.22 2.42-8.12 2.71-12.36s-1.8-8.06-3.84-11.7c-3.51-6.25-7.16-12.58-12.5-17.36S391.09-1.17 384.09.44c-3.44.79-6.63 2.64-10.14 3-3.12.29-6.2-.65-9.31-1.05s-6.6-.15-8.83 2c-1.22 1.2-2 2.89-3.43 3.77a20.58 20.58 0 01-3 1.11c-3.61 1.45-5.26 5.52-6.54 9.18l-8.58 24.59c2.87 2 6.33 2.91 9.47 4.45s6.19 4 6.83 7.44c.49 2.61-.44 5.61 1.08 7.79 1.39 2 4.22 2.34 6.62 2s4.81-1.17 7.21-.8c6 .91 8.23 4.59 13.78 0s7.58.89 12.74 3.79z"
        fill="#3f3d56"
      />
      <circle cx={234.12} cy={123.49} r={30} opacity={0.1} />
      <circle cx={235.28} cy={121.86} r={30} fill="#fbbebe" />
      <path
        d="M258.25 92.53a79.12 79.12 0 00-23.73-12.48c-5.48-1.78-11.44-3-17-1.36-7.54 2.15-17.63 5.36-22.3 11.67-2.3 3.1-4.63 6.29-5.74 10-2.22 7.46.94 15.41.73 23.19-.25 9.07-5.06 17.35-10.31 24.75s-6.31 18-9.41 26.54c-1.06 2.93-1.4 7 1.33 8.47 2.4 1.33 5.3-.33 7.52-1.93l13.35-9.65a10.17 10.17 0 013.52-1.88c2.75-.64 5.44 1.08 7.74 2.71l28 19.8a8.59 8.59 0 00.13-7.28c2.63.81 4.54 3 6.85 4.56s5.82 2.07 7.5-.11.41-5.11-1.46-6.87-4.33-2.81-6.16-4.62c-3.63-3.61-4-9.31-6.29-13.87-1.64-3.2-4.29-5.88-5.45-9.29-1.89-5.57.58-11.57 3-16.93 2.89-6.36 6.16-13.15 12.31-16.47 2.07-1.12 4.36-1.78 6.48-2.8 5.28-2.53 11.87-8.5 14.45-13.85 2.26-4.75-1.22-9.34-5.06-12.3z"
        fill="#3f3d56"
      />
      <path
        d="M212.84 191.67c2.87 1.83 6.11 3 8.93 4.91s5.29 4.81 5.37 8.21c.08 3.25-2 6.1-4 8.68l-24.36 31.97 12.42 3.29c-2 2.76-2.51 6.28-3.55 9.52s-3 6.61-6.32 7.46c-3 .77-6.14-.81-9.24-.63-2.29.14-4.45 1.22-6.74 1.31-2.95.11-5.69-1.44-8.15-3.08-5.48-3.67-10.92-8.93-10.88-15.53a23.49 23.49 0 011.33-6.54c3.59-11.71 7.31-23.7 14.75-33.44 4-5.2 8.89-9.59 13.78-13.95a12.85 12.85 0 013.86-2.67c3.2-1.2 6.69.28 10 1.24s7.48 1.1 9.39-1.73"
        opacity={0.1}
      />
      <path
        d="M211.79 189.7c2.87 1.82 6.11 3 8.93 4.91s5.29 4.81 5.38 8.2-2 6.11-4 8.69l-24.37 31.94 12.42 3.29c-2 2.76-2.51 6.27-3.55 9.52s-3 6.61-6.32 7.46c-3 .77-6.14-.81-9.24-.63-2.29.13-4.45 1.22-6.74 1.3-2.95.11-5.69-1.44-8.15-3.08-5.48-3.66-10.92-8.93-10.87-15.52a23 23 0 011.32-6.54c3.59-11.72 7.31-23.71 14.75-33.44 4-5.21 8.9-9.6 13.78-14a13.22 13.22 0 013.86-2.67c3.2-1.2 6.69.28 10 1.25s7.48 1.1 9.39-1.73"
        fill="#f86d70"
      />
      <g opacity={0.1}>
        <path d="M462.32 81.91c2.35 3.25 6 5.36 9.74 6.75a37.31 37.31 0 0021.8 1.28c7-1.7 14.31-5.4 20.88-2.48 1.55.69 3 1.74 4.69 1.86a8 8 0 004.59-1.55c4.05-2.5 7.77-6.14 9.55-10.43 0 .22 0 .44.06.67.31 6.85-4.83 12.8-10.65 16.39a7.9 7.9 0 01-4.58 1.54c-1.69-.11-3.15-1.17-4.7-1.85-6.57-2.92-13.92.78-20.88 2.48a37.48 37.48 0 01-21.8-1.28c-3.75-1.4-7.39-3.5-9.74-6.75s-3.19-7.8-1.19-11.29l.15-.25a12.23 12.23 0 002.08 4.91zM463.65 65.2c.08 1.54-.85 2.83-1.74 4.14a6.32 6.32 0 01-.29-1c-.3-1.79.56-3.53 1.51-5.1a6.65 6.65 0 01.52 1.96z" />
      </g>
      <path
        d="M345.18 15.19l-8.58 24.58c2.87 2 6.33 2.92 9.47 4.45s6.19 4 6.83 7.44c.49 2.61-.44 5.61 1.08 7.8 1.39 2 4.22 2.33 6.62 2s4.81-1.17 7.21-.8c6 .91 8.23 4.59 13.78.05s7.56.85 12.72 3.75c4.66 2.62 10.41 2.35 15.61 1.15a21 21 0 008.2-3.45 12.78 12.78 0 001-.91 11.14 11.14 0 01-3.36 4.16 21 21 0 01-8.2 3.46c-5.2 1.19-11 1.46-15.61-1.15-5.16-2.9-7.28-8.19-12.72-3.75s-7.8.86-13.78 0c-2.4-.37-4.8.46-7.21.8s-5.23 0-6.62-2c-1.52-2.18-.59-5.18-1.08-7.79-.64-3.44-3.69-5.91-6.83-7.44s-6.6-2.46-9.47-4.45l8.62-24.65c1-2.71 2.1-5.64 4.1-7.57a33.57 33.57 0 00-1.78 4.32z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M234.31 186.16c2.21 1 5 1.15 6.4-.72 1.57-2 .41-5.1-1.46-6.87s-4.33-2.81-6.16-4.62c-3.63-3.6-4-9.3-6.29-13.86-1.64-3.21-4.29-5.89-5.45-9.3-1.89-5.56.58-11.57 3-16.92 2.89-6.36 6.16-13.15 12.31-16.47 2.07-1.12 4.36-1.78 6.48-2.8 5.28-2.53 11.87-8.51 14.45-13.86 2.17-4.51-.89-8.89-4.53-11.86 1.77 1.15 3.5 2.36 5.18 3.65 3.85 3 7.32 7.55 5 12.28-2.58 5.35-9.17 11.32-14.45 13.85-2.12 1-4.41 1.68-6.48 2.8-6.15 3.32-9.42 10.11-12.31 16.47-2.43 5.36-4.9 11.36-3 16.93 1.16 3.41 3.81 6.09 5.45 9.29 2.32 4.56 2.66 10.26 6.29 13.87 1.83 1.81 4.29 2.85 6.16 4.62s3 4.83 1.46 6.87-5.2 1.62-7.5.11c-1.55-1.05-2.96-2.43-4.55-3.46zM173.66 177.29l13.35-9.64a10.2 10.2 0 013.52-1.89c2.75-.63 5.44 1.09 7.74 2.72l28 19.8a8.61 8.61 0 00.13-7.29c2.57.8 4.44 2.94 6.67 4.44a7.48 7.48 0 00-1-.37 8.59 8.59 0 01-.13 7.28l-28-19.8c-2.3-1.63-5-3.35-7.74-2.71a10.17 10.17 0 00-3.52 1.88l-13.35 9.65c-2.22 1.6-5.12 3.26-7.52 1.93a4.39 4.39 0 01-2.09-3.86 14.49 14.49 0 003.94-2.14z" />
      </g>
      <path d="M507.19 242.6s-57.3 4.59-68.7-3.53l52.42-8.08z" fill="#e3e8f4" />
      <path d="M507.19 242.6s-57.3 4.59-68.7-3.53l52.42-8.08z" opacity={0.1} />
      <path
        d="M507.19 242.6l-16.05-10.16s-47.88 13.76-61 8.08l13.35-18.73 47.44 9.25z"
        fill="#e3e8f4"
      />
      <path
        d="M435.99 107.88a28.13 28.13 0 00-4.21 7.39c-.46 1.41-.69 2.88-1.08 4.31a33.12 33.12 0 01-5 9.91c-4.93 7.17-11.09 14.09-12.33 22.7-.6 4.25.06 8.57.9 12.78a34.5 34.5 0 002.36 8.07c1.27 2.74 3.16 5.15 4.61 7.8a55.39 55.39 0 013.34 8.08c1.71-1.71 2.72-4 4.09-6s3.41-3.8 5.82-3.83c2.78 0 5.07 2.3 7.82 2.66a2.23 2.23 0 001.28-.12c1-.47 1.08-1.82 1-2.9-.79-7.55-5.11-15-3.07-22.32 1.88-6.77 8.6-11 12.13-17.07 2.56-4.41 3.32-9.61 4-14.67.85-6.05 1.71-12.15 1.33-18.24-.19-3.07-2.63-22.47-7.09-20.44-1.55.7-2.9 3.67-3.87 5l-4 5.67z"
        fill="#3f3d56"
      />
      <path
        fill="#e3e8f4"
        d="M316.3 233.03l-32.17 26.19-41.39-7.4 27.87-21.88 45.69 3.09z"
      />
      <path
        opacity={0.1}
        d="M317.46 231.4l-32.17 26.19-41.39-7.4 27.87-21.88 45.69 3.09z"
      />
      <path
        fill="#e3e8f4"
        d="M317.23 230.01l-32.17 26.18-41.4-7.39 27.88-21.89 45.69 3.1z"
      />
      <path
        opacity={0.1}
        d="M318.16 226.98l-32.18 26.19-41.39-7.4 27.88-21.88 45.69 3.09z"
      />
      <path
        fill="#e3e8f4"
        d="M317.92 225.59l-32.17 26.19-41.39-7.4 27.87-21.88 45.69 3.09z"
      />
      <path
        d="M741.09 583.44a5.18 5.18 0 017.43 4.25l1.79 23.21-10.62 1.92-5.6-16.78z"
        fill="#3f3d56"
      />
      <path
        d="M369.54 427.87l-162.53 82.48a11.31 11.31 0 00.08 20.19l350.05 175.67a42.49 42.49 0 0039.93-1l147.44-83.14a11.31 11.31 0 00-.67-20L379.53 427.76a11.31 11.31 0 00-9.99.11z"
        fill="#3f3d56"
      />
      <path
        d="M205.92 496l-5.09 3.78-.4 18.1a7.52 7.52 0 004.08 6.86l356.03 182.7a5.3 5.3 0 007.73-4.71v-26.29z"
        fill="#3f3d56"
      />
      <path
        d="M369.54 406.89l-162.53 82.47a11.31 11.31 0 00.05 20.19l350.08 175.67a42.52 42.52 0 0039.93-1l147.44-83.15a11.31 11.31 0 00-.67-20l-364.31-174.3a11.31 11.31 0 00-9.99.12z"
        fill="#e3e8f4"
      />
      <path
        fill="#3f3d56"
        d="M403.18 421.86L224.1 512.79l307.79 153.9 184.68-93.74-313.39-151.09z"
      />
      <ellipse cx={644.52} cy={627.52} rx={18.89} ry={11.19} fill="#3f3d56" />
      <circle cx={300} cy={450.89} r={1.75} fill="#3f3d56" />
      <circle cx={294.76} cy={464.53} r={2.1} fill="#3f3d56" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M302.45 461.03l20.99-9.79"
      />
      <rect
        x={553.47}
        y={561.8}
        width={104.42}
        height={36}
        rx={18}
        transform="rotate(-30 461.039 816.875)"
        fill={color}
      />
      <rect
        x={606.47}
        y={588.8}
        width={104.42}
        height={36}
        rx={18}
        transform="rotate(-30 514.044 843.878)"
        fill={color}
      />
      <rect
        x={505.47}
        y={530.8}
        width={104.42}
        height={36}
        rx={18}
        transform="rotate(-30 413.045 785.875)"
        fill={color}
      />
    </svg>
  );
};

SvgMobileTesting.propTypes = {
  color: PropTypes.string
};
SvgMobileTesting.defaultProps = {
  color: "primary"
};
const MemoSvgMobileTesting = React.memo(SvgMobileTesting);
export default MemoSvgMobileTesting;
