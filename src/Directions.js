import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDirections = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1046 729.87"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M417.15 93.3a246.62 246.62 0 00-296.34-33.37c94.98 34 199.78 35.25 296.34 33.37zM967.64 645.48L863.92 465.83a3.3 3.3 0 00-5.73 0L754.47 645.48a3.3 3.3 0 002.86 5h30.94a3.32 3.32 0 013.31 3.31v38.34a3.31 3.31 0 003.3 3.31h40.37a3.31 3.31 0 003.31-3.31V673.6a3.3 3.3 0 013.3-3.3h38.38a3.31 3.31 0 013.31 3.3v18.53a3.31 3.31 0 003.31 3.31h40.36a3.31 3.31 0 003.31-3.31v-38.38a3.31 3.31 0 013.31-3.31h30.94a3.31 3.31 0 002.86-4.96zM823 665.36a3.3 3.3 0 01-2.34 1h-14.53a3.31 3.31 0 010-6.62h14.56a3.31 3.31 0 012.34 5.65zm95.28 0a3.3 3.3 0 01-2.34 1h-14.52a3.31 3.31 0 010-6.62H916a3.31 3.31 0 012.34 5.65zM326.55 647.06L222.83 467.41a3.31 3.31 0 00-5.73 0l-89.59 155.17A273.67 273.67 0 00165 661.29h14.6a3.31 3.31 0 010 6.62h-6.16a160.29 160.29 0 0024 14.93v-7.65a3.31 3.31 0 013.31-3.31h38.38a3.31 3.31 0 013.3 3.31v18.52a3.22 3.22 0 00.31 1.39 3.31 3.31 0 003 1.92h40.37a3.24 3.24 0 002.63-1.33 3.18 3.18 0 00.67-2v-38.35a3.31 3.31 0 013.31-3.31h30.94a3.31 3.31 0 002.89-4.97zM258 662.26a3.3 3.3 0 012.34-1h14.56a3.31 3.31 0 010 6.62h-14.57a3.31 3.31 0 01-2.34-5.65zm-65.15-66.48a3.31 3.31 0 01-3.31-3.31v-25.14a3.31 3.31 0 013.31-3.31h54.25a3.31 3.31 0 013.3 3.31v25.14a3.31 3.31 0 01-3.3 3.31zM736.53 324.34H608.18v-27.76a6.64 6.64 0 00-6.64-6.64h-37.69v-29.57a4.18 4.18 0 00-4.18-4.18h-48.55a4.18 4.18 0 00-4.18 4.18v29.56h-44.31a6.64 6.64 0 00-6.64 6.64v27.76H333.6a1.35 1.35 0 00-1.34 1.35v368.53a1.35 1.35 0 001.34 1.35h81.34a1.35 1.35 0 001.35-1.35v-49.58a1.36 1.36 0 011.35-1.35H452a1.36 1.36 0 011.35 1.35v49.58a1.35 1.35 0 001.34 1.35h160.75a1.36 1.36 0 001.35-1.35v-49.58a1.35 1.35 0 011.34-1.35h34.36a1.35 1.35 0 011.35 1.35v49.58a1.36 1.36 0 001.35 1.35h81.34a1.36 1.36 0 001.35-1.35V325.69a1.36 1.36 0 00-1.35-1.35zm-334.8 301.72a1.34 1.34 0 01-1.34 1.34h-50.24a1.34 1.34 0 01-1.35-1.34v-17.13a1.35 1.35 0 011.35-1.35h50.24a1.35 1.35 0 011.34 1.35zm0-44.34a1.34 1.34 0 01-1.34 1.35h-50.24a1.34 1.34 0 01-1.35-1.35v-17.15a1.34 1.34 0 011.35-1.35h50.24a1.34 1.34 0 011.34 1.35zm0-44.33a1.35 1.35 0 01-1.34 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.16a1.35 1.35 0 011.35-1.35h50.24a1.35 1.35 0 011.34 1.35zm0-44.34a1.34 1.34 0 01-1.34 1.35h-50.24a1.34 1.34 0 01-1.35-1.35v-17.12a1.34 1.34 0 011.35-1.35h50.24a1.34 1.34 0 011.34 1.35zm0-44.33a1.35 1.35 0 01-1.34 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.16a1.34 1.34 0 011.35-1.34h50.24a1.34 1.34 0 011.34 1.34zm0-44.33a1.34 1.34 0 01-1.34 1.34h-50.24a1.34 1.34 0 01-1.35-1.34v-17.16a1.35 1.35 0 011.35-1.35h50.24a1.35 1.35 0 011.34 1.35zm0-44.34a1.34 1.34 0 01-1.34 1.35h-50.24a1.34 1.34 0 01-1.35-1.35v-17.12a1.34 1.34 0 011.35-1.35h50.24a1.34 1.34 0 011.34 1.35zm119.11 266a1.34 1.34 0 01-1.35 1.34h-50.24a1.35 1.35 0 01-1.35-1.34v-17.12a1.36 1.36 0 011.35-1.35h50.24a1.35 1.35 0 011.35 1.35zm0-44.34a1.34 1.34 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.14a1.35 1.35 0 011.35-1.35h50.24a1.34 1.34 0 011.35 1.35zm0-44.33a1.35 1.35 0 01-1.35 1.35h-50.24a1.36 1.36 0 01-1.35-1.35v-17.15a1.36 1.36 0 011.35-1.35h50.24a1.35 1.35 0 011.35 1.35zm0-44.34a1.34 1.34 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.11a1.35 1.35 0 011.35-1.35h50.24a1.34 1.34 0 011.35 1.35zm0-44.33a1.35 1.35 0 01-1.35 1.35h-50.24a1.36 1.36 0 01-1.35-1.35v-17.15a1.35 1.35 0 011.35-1.34h50.24a1.34 1.34 0 011.35 1.34zm0-44.33a1.34 1.34 0 01-1.35 1.34h-50.24a1.35 1.35 0 01-1.35-1.34v-17.15a1.36 1.36 0 011.35-1.35h50.24a1.35 1.35 0 011.35 1.35zm0-44.34a1.34 1.34 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.11a1.35 1.35 0 011.35-1.35h50.24a1.34 1.34 0 011.35 1.35zm81.39 266a1.34 1.34 0 01-1.35 1.34h-50.24a1.35 1.35 0 01-1.35-1.34v-17.11a1.36 1.36 0 011.35-1.35h50.24a1.35 1.35 0 011.35 1.35zm0-44.34a1.34 1.34 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.13a1.35 1.35 0 011.35-1.35h50.24a1.34 1.34 0 011.35 1.35zm0-44.33a1.35 1.35 0 01-1.35 1.35h-50.24a1.36 1.36 0 01-1.35-1.35v-17.14a1.36 1.36 0 011.35-1.35h50.24a1.35 1.35 0 011.35 1.35zm0-44.34a1.34 1.34 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.1a1.35 1.35 0 011.35-1.35h50.24a1.34 1.34 0 011.35 1.35zm0-44.33a1.35 1.35 0 01-1.35 1.35h-50.24a1.36 1.36 0 01-1.35-1.35v-17.14a1.35 1.35 0 011.35-1.34h50.24a1.34 1.34 0 011.35 1.34zm0-44.33a1.34 1.34 0 01-1.35 1.34h-50.24a1.35 1.35 0 01-1.35-1.34v-17.14a1.36 1.36 0 011.35-1.35h50.24a1.35 1.35 0 011.35 1.35zm0-44.34a1.34 1.34 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.1a1.35 1.35 0 011.35-1.35h50.24a1.34 1.34 0 011.35 1.35zm119.11 266a1.35 1.35 0 01-1.35 1.34h-50.24a1.34 1.34 0 01-1.35-1.34v-17.1a1.35 1.35 0 011.35-1.35H720a1.36 1.36 0 011.35 1.35zm0-44.34a1.35 1.35 0 01-1.35 1.35h-50.24a1.34 1.34 0 01-1.35-1.35v-17.12a1.34 1.34 0 011.35-1.35H720a1.35 1.35 0 011.35 1.35zm0-44.33a1.36 1.36 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.13a1.35 1.35 0 011.35-1.35H720a1.36 1.36 0 011.35 1.35zm0-44.34a1.35 1.35 0 01-1.35 1.35h-50.24a1.34 1.34 0 01-1.35-1.35v-17.09a1.34 1.34 0 011.35-1.35H720a1.35 1.35 0 011.35 1.35zm0-44.33a1.36 1.36 0 01-1.35 1.35h-50.24a1.35 1.35 0 01-1.35-1.35v-17.13a1.34 1.34 0 011.35-1.34H720a1.35 1.35 0 011.35 1.34zm0-44.33a1.35 1.35 0 01-1.34 1.37h-50.25a1.34 1.34 0 01-1.35-1.34v-17.16a1.35 1.35 0 011.35-1.35H720a1.36 1.36 0 011.35 1.35zm0-44.34a1.35 1.35 0 01-1.35 1.35h-50.24a1.34 1.34 0 01-1.35-1.35v-17.09a1.34 1.34 0 011.35-1.35H720a1.35 1.35 0 011.35 1.35zM371 224.46a28.89 28.89 0 00-16.77 1.82 24.71 24.71 0 01-20.23-.05 28.22 28.22 0 00-23.68.47 14.75 14.75 0 01-6.82 1.7c-9.6 0-17.59-9.67-19.25-22.43a18.41 18.41 0 004.8-5.17c5.63-9.07 14.35-14.9 24.14-14.9s18.4 5.76 24 14.73a18.51 18.51 0 0015.95 8.76h.25c7.72 0 14.34 6.13 17.61 15.07z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M400.2 184.41l-15.52 9.84 9.42-17.13a15.34 15.34 0 00-9.39-3.35h-.25a18.16 18.16 0 01-3.22-.24l-5.24 3.34 2.26-4.1a18.7 18.7 0 01-9.2-7l-9.42 6 5.93-10.84c-5.51-6.61-12.93-10.66-21.09-10.66-9.79 0-18.51 5.82-24.14 14.89a18.05 18.05 0 01-16 8.61h-.53c-10.81 0-19.57 12.25-19.57 27.37s8.76 27.37 19.57 27.37a14.61 14.61 0 006.82-1.71 28.22 28.22 0 0123.68-.46 24.71 24.71 0 0020.14 0 28.21 28.21 0 0123.48.45 14.65 14.65 0 006.74 1.67c10.81 0 19.57-12.26 19.57-27.37a34.76 34.76 0 00-4.04-16.68zM832 406.93a20.31 20.31 0 00-11.74 1.27 17.27 17.27 0 01-14.1 0 19.76 19.76 0 00-16.58.33 10.28 10.28 0 01-4.77 1.19c-6.72 0-12.31-6.77-13.47-15.7a13.07 13.07 0 003.36-3.62c3.94-6.35 10-10.43 16.89-10.43s12.89 4 16.83 10.31a12.94 12.94 0 0011.16 6.13h.18c5.3-.02 9.93 4.27 12.24 10.52z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M852.42 378.93l-10.86 6.89 6.59-12a10.74 10.74 0 00-6.57-2.34h-.17a12.89 12.89 0 01-2.25-.17l-3.69 2.33 1.58-2.86a13.19 13.19 0 01-6.44-4.89l-6.61 4.16 4.16-7.57c-3.85-4.63-9-7.47-14.76-7.47-6.85 0-13 4.08-16.9 10.43a12.62 12.62 0 01-11.17 6H785c-7.56 0-13.7 8.57-13.7 19.15s6.14 19.16 13.7 19.16a10.28 10.28 0 004.77-1.19 19.72 19.72 0 0116.58-.32 17.37 17.37 0 0014.1 0 19.75 19.75 0 0116.43.32 10.35 10.35 0 004.72 1.16c7.57 0 13.7-8.57 13.7-19.16a24.35 24.35 0 00-2.88-11.63zM238.62 342.93a20.32 20.32 0 0111.74 1.27 17.24 17.24 0 0014.09 0 19.76 19.76 0 0116.58.33 10.31 10.31 0 004.77 1.19c6.72 0 12.32-6.77 13.48-15.7a12.93 12.93 0 01-3.36-3.62c-3.92-6.37-10.05-10.47-16.92-10.47s-12.88 4-16.82 10.31a13 13 0 01-11.18 6.15h-.17c-5.32 0-9.96 4.29-12.21 10.54z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M218.14 314.93l10.86 6.86-6.6-12a10.76 10.76 0 016.57-2.34h.18a13 13 0 002.25-.17l3.68 2.33-1.58-2.86a13.21 13.21 0 006.45-4.89l6.59 4.18-4.17-7.57c3.86-4.63 9.05-7.47 14.77-7.47 6.85 0 13 4.08 16.9 10.43a12.61 12.61 0 0011.17 6h.36c7.57 0 13.7 8.57 13.7 19.15s-6.13 19.16-13.7 19.16a10.34 10.34 0 01-4.77-1.19 19.72 19.72 0 00-16.58-.32 17.35 17.35 0 01-14.09 0 19.77 19.77 0 00-16.44.32 10.32 10.32 0 01-4.72 1.16c-7.56 0-13.7-8.57-13.7-19.16a24.35 24.35 0 012.87-11.62z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M218.68 700.06c13.54 8.6 33.05-.1 46.68 8.37 3.52 2.18 6.36 5.39 10 7.37 4.37 2.39 9.51 2.82 14.48 3 41.62 1.61 83.94-10 124.52-.62 11.35 2.62 22.45 6.88 34.08 7.5 20.09 1.09 39.34-8.71 59.45-9.25 30.5-.82 60.47 19.59 89.9 11.54 9.68-2.65 18.56-8.3 28.55-9.25 11.13-1 21.83 3.85 32.65 6.68 38.37 10 78.33-6.2 118-7.41 25.87-.79 51.49 4.85 77.34 6.15 18.38.92 36.8-.37 55.16-1.65 7-.49 14.33-1.09 20.19-4.93s9.46-12.09 5.84-18.09z"
        fill="#3f3d56"
      />
      <path
        d="M218.68 700.06c13.54 8.6 33.05-.1 46.68 8.37 3.52 2.18 6.36 5.39 10 7.37 4.37 2.39 9.51 2.82 14.48 3 41.62 1.61 83.94-10 124.52-.62 11.35 2.62 22.45 6.88 34.08 7.5 20.09 1.09 39.34-8.71 59.45-9.25 30.5-.82 60.47 19.59 89.9 11.54 9.68-2.65 18.56-8.3 28.55-9.25 11.13-1 21.83 3.85 32.65 6.68 38.37 10 78.33-6.2 118-7.41 25.87-.79 51.49 4.85 77.34 6.15 18.38.92 36.8-.37 55.16-1.65 7-.49 14.33-1.09 20.19-4.93s9.46-12.09 5.84-18.09z"
        opacity={0.1}
      />
      <path
        d="M218.68 695.06c13.54 8.6 33.05-.1 46.68 8.37 3.52 2.18 6.36 5.39 10 7.37 4.37 2.39 9.51 2.82 14.48 3 41.62 1.61 83.94-10 124.52-.62 11.35 2.62 22.45 6.88 34.08 7.5 20.09 1.09 39.34-8.71 59.45-9.25 30.5-.82 60.47 19.59 89.9 11.54 9.68-2.65 18.56-8.3 28.55-9.25 11.13-1 21.83 3.85 32.65 6.68 38.37 10 78.33-6.2 118-7.41 25.87-.79 51.49 4.85 77.34 6.15 18.38.92 36.8-.37 55.16-1.65 7-.49 14.33-1.09 20.19-4.93s9.46-12.09 5.84-18.09z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path
          d="M122.35 571.86a24.45 24.45 0 01-3.23 12.38 25.34 25.34 0 010 24.76 22.75 22.75 0 012.44 6 454.1 454.1 0 01-30.09-45 24 24 0 013.16-10.56 24.45 24.45 0 01-3.23-12.38 25.46 25.46 0 011.46-8.61 21.39 21.39 0 011.77-3.77c2.82-4.79 7.26-7.88 12.24-7.88s9.43 3.09 12.25 7.88a22.28 22.28 0 011.73 3.65 25.63 25.63 0 011.5 8.73 24.45 24.45 0 01-3.23 12.38 24.45 24.45 0 013.23 12.42z"
          fill="#3f3d56"
        />
        <ellipse cx={106.87} cy={522.35} rx={15.47} ry={20.26} fill="#3f3d56" />
        <ellipse cx={106.87} cy={497.59} rx={15.47} ry={20.26} fill="#3f3d56" />
        <path
          d="M180.67 373.93a73.78 73.78 0 01-15.87 45.83 74.13 74.13 0 01-44 118.57c-1.78.36-3.59.64-5.42.86a74.89 74.89 0 01-17 .09q-2.82-.3-5.57-.83a73.3 73.3 0 01-23-8.41A738.54 738.54 0 0135 446.25a73.79 73.79 0 0113.29-26.45 74.19 74.19 0 01-12-69.61l56.28 18.89-52.78-27.42a74.43 74.43 0 018.45-13.52 74.13 74.13 0 11122.43-82.95l-54.41 40 59-30.6a74.22 74.22 0 01-1.42 58.73l-44-.33 40.66 6.68a74.43 74.43 0 01-5.77 8.48 73.8 73.8 0 0115.94 45.78z"
          fill={color}
        />
        <path
          d="M180.67 465.63a74.15 74.15 0 01-59.82 72.74c-1.78.36-3.59.64-5.42.86a74.89 74.89 0 01-17 .09q-2.82-.3-5.57-.83a73.3 73.3 0 01-23-8.41A738.54 738.54 0 0135 446.25a73.79 73.79 0 0113.29-26.45 73.83 73.83 0 01-15.87-45.87c0-8.32 142.32 33.22 132.38 45.83a73.78 73.78 0 0115.87 45.87z"
          opacity={0.1}
        />
      </g>
      <g opacity={0.1}>
        <path
          d="M1014.9 552.58c-2.9 9.26-6 18.45-9.18 27.43a25.64 25.64 0 01-1.32-8.21c0-8.93 4.4-16.51 10.5-19.22z"
          fill="#3f3d56"
        />
        <path
          d="M1046 393.02c0 17.55-3.54 45.28-10 77a845.74 845.74 0 01-21.15 82.56c-2.9 9.26-6 18.45-9.18 27.43-3.65 10.2-7.5 20.12-11.53 29.61a74.41 74.41 0 01-32.91-115.77 74.48 74.48 0 01-12-69.76l56.28 18.93-52.78-27.48a74.67 74.67 0 018.45-13.55 74.4 74.4 0 0129.12-114.25 127.55 127.55 0 0148.75 63.93l-9.75 7.26 10.46-5.43a126.93 126.93 0 016.09 33.31h-2.94l3 .49c.09 1.89.09 3.79.09 5.72z"
          fill={color}
        />
        <path
          d="M1036.05 470.02a845.74 845.74 0 01-21.15 82.56c-2.9 9.26-6 18.45-9.18 27.43-3.65 10.2-7.5 20.12-11.53 29.61a74.41 74.41 0 01-32.91-115.77 74.1 74.1 0 01-15.86-45.92c0-5 51.72 8.1 90.63 22.09z"
          opacity={0.1}
        />
      </g>
      <path
        d="M1045.87 387.28v-.47a126.93 126.93 0 00-6.09-33.31c-.2-.61-.4-1.23-.61-1.83a127.55 127.55 0 00-48.75-63.93 126.8 126.8 0 00-166.16 20.54 179.4 179.4 0 00-10.11-35.47 569.6 569.6 0 01-100.63 3.75 406 406 0 0063.8 23.17l-.78 2.9a409.71 409.71 0 01-71.32-26.7l-6.91-3.35 7.66.5a569.79 569.79 0 00107-3.07 180.42 180.42 0 00-31.52-50.08c-57.56-5.8-114.67-17.88-168-41.83l1.23-2.73c51.91 23.33 107.54 35.32 163.7 41.22a179.76 179.76 0 00-285.73 30.37 246.89 246.89 0 00-61.24-138.9 576.62 576.62 0 01-94.77 28.71 573.15 573.15 0 01-148.14 11.79 406 406 0 0063.8 23.17l-.78 2.9a409.71 409.71 0 01-71.3-26.7l-6.91-3.35 7.66.5a569.21 569.21 0 00248.36-39.35q-4.45-4.87-9.16-9.52c-98.42 2-205.61 1-302.65-34.33A247.53 247.53 0 000 272.75C0 319.21 12.77 383.1 35 447.2a741.24 741.24 0 0034.91 84c6.79 13.8 14 27.21 21.57 40.05a454.59 454.59 0 0030.09 45q2.94 3.87 5.95 7.6A274.51 274.51 0 00165 662.72q4.17 3.48 8.39 6.63a159.8 159.8 0 0024 15c14.67 7.35 29.81 11.66 45.3 12.28 1.24.05 2.49.08 3.73.08v.51h672v-.51h.5a34 34 0 0011.36-2c23.76-8.43 45.64-42.28 63.83-85.06 4-9.49 7.88-19.41 11.53-29.61 3.22-9 6.28-18.17 9.18-27.43a845.74 845.74 0 0021.15-82.56c6.41-31.72 10-59.45 10-77 .03-1.96.03-3.86-.1-5.77z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M334.06 667.79l19.14-11.26a46.13 46.13 0 00-9.79-11.71l-36.11 11.23 28.3-16.63a46 46 0 00-68.1 40.35c0 25.4 20.59 26.28 46 26.28s46-.88 46-26.28a45.79 45.79 0 00-3.95-18.67z"
        fill={color}
      />
      <path
        d="M338.93 692.48a35.76 35.76 0 00-6.78-5.32c-3.48-2.31-7.07-4.67-11.17-5.45-3.6-.69-7.31-.11-11-.32a25.66 25.66 0 01-16.81-7.7c-2.61-2.7-4.67-6-7.81-8.09-3.39-2.22-7.69-2.7-11.71-2.15a29.07 29.07 0 00-3.46.71 45.85 45.85 0 00-2.72 15.61c0 25.4 20.59 26.28 46 26.28 12.33 0 23.52-.21 31.78-3.32l-1.38-2.58a36.4 36.4 0 00-4.94-7.67z"
        opacity={0.1}
      />
      <circle cx={547.34} cy={185.77} r={35.75} fill="#3f3d56" />
      <path
        d="M526.6 463.87c3.69 25.89-.81 52.29-7.82 77.48-1.31 4.69-2.72 9.42-5.17 13.63s-5.86 7.83-8.74 11.79c-6 8.26-9.52 18-12.81 27.64a779.65 779.65 0 00-22.82 81.32 5.57 5.57 0 000 3.47c.87 2 3.51 2.26 5.68 2.25l28.06-.15c1-1.92-.85-4-2-5.84-4-6.22-.16-14.3 3.37-20.81a223.74 223.74 0 0019.78-50c1.92-7.33 3.48-14.82 6.6-21.73 3.77-8.38 9.68-15.59 14.48-23.43 5.58-9.11 9.65-19 13.69-28.93 5.64-13.78 11.33-27.73 13.55-42.45 2.09-13.82 1.06-27.9-.3-41.81a2.64 2.64 0 00-3.06-3l-37.65-1.94c-7.76-.4-9.6-2.1-8.42 5.52.82 5.69 2.76 11.23 3.58 16.99z"
        fill="#3f3d56"
      />
      <path
        d="M526.6 463.87c3.69 25.89-.81 52.29-7.82 77.48-1.31 4.69-2.72 9.42-5.17 13.63s-5.86 7.83-8.74 11.79c-6 8.26-9.52 18-12.81 27.64a779.65 779.65 0 00-22.82 81.32 5.57 5.57 0 000 3.47c.87 2 3.51 2.26 5.68 2.25l28.06-.15c1-1.92-.85-4-2-5.84-4-6.22-.16-14.3 3.37-20.81a223.74 223.74 0 0019.78-50c1.92-7.33 3.48-14.82 6.6-21.73 3.77-8.38 9.68-15.59 14.48-23.43 5.58-9.11 9.65-19 13.69-28.93 5.64-13.78 11.33-27.73 13.55-42.45 2.09-13.82 1.06-27.9-.3-41.81a2.64 2.64 0 00-3.06-3l-37.65-1.94c-7.76-.4-9.6-2.1-8.42 5.52.82 5.69 2.76 11.23 3.58 16.99z"
        opacity={0.1}
      />
      <path
        d="M534 400.93c-7.65 11-15.67 23.66-13.13 36.83 1.93 10 9.55 17.75 16.74 25 28.74 28.86 57 60.92 66.78 100.47 2.52 10.22 3.74 20.71 5.91 31 3.94 18.7 11 36.58 18 54.35l18.76 47.35a28.36 28.36 0 0027.1-18c-2.46-.19-5.67-2.57-7.11-4.57-8-11.07-9.64-25.31-11.69-38.81-2.27-14.92-5.3-29.72-8.34-44.51l-13.44-65.44c-1.55-7.55-3.1-15.11-5.12-22.55-7.82-28.82-22.64-56-24.93-85.8-.34-4.38-.55-9.19-3.52-12.44-3.12-3.43-8.24-4-12.87-4.27-18.73-1.2-34.89-3.03-53.14 1.39z"
        fill="#3f3d56"
      />
      <path
        d="M483.47 675.06a29.86 29.86 0 00-6.22-.8 12.92 12.92 0 00-10.16 5.55 25.25 25.25 0 00-2.73 6l-2.71 7.78c-.8 2.28-1.58 4.91-.39 7a7.42 7.42 0 003.64 2.81c6.56 2.92 14 3.08 21.1 3.78 6.94.68 13.82 1.9 20.67 3.18 2.36.45 4.71.9 7.1 1.14 5.34.54 10.72 0 16.06-.48l5.51-.53a19.84 19.84 0 005.42-1 6.83 6.83 0 004-3.59c1.36-3.37-1.56-7.36-5.13-8.06-1.45-.28-3-.15-4.42-.34a20.88 20.88 0 01-4.84-1.45c-7-2.77-14.17-5.57-20.37-9.93-1.72-1.21-3.52-2.9-3.33-5a10.19 10.19 0 01.89-2.59 9.46 9.46 0 00.08-6.69c-.34-.92-1-1.89-1.93-2-2.64-.32-2.32 3.53-2.71 5-.53 2-1.49 2.18-3.37 2-5.4-.49-10.8-.76-16.16-1.78zM641.34 701.93a17.65 17.65 0 003.82 10.75 8.36 8.36 0 002.72 2.19 10.92 10.92 0 005 .79 40.05 40.05 0 0013.89-2.81 39.7 39.7 0 014.8-1.81 53.88 53.88 0 016.24-.9c8.27-1.19 15.53-6.07 23.52-8.54a49.45 49.45 0 007-2.3c3.16-1.49 5.72-4 8.23-6.43a19.73 19.73 0 003.78-4.53c1.47-2.73 1.56-6 1.62-9.09a2.59 2.59 0 00-.24-1.41 2.1 2.1 0 00-.9-.71c-2.43-1.2-5.31-.6-8-.13-9.72 1.73-19.67 1.41-29.54 1.09a4.29 4.29 0 01-4.54-2.59l-3.75-6c-1.07-1.72-2.77-3.69-4.71-3.1-1.55.47-2.18 2.37-2.12 4s.56 3.25.25 4.84a6.61 6.61 0 01-3.2 4.16 20.44 20.44 0 01-5 1.92c-5.52 1.56-11.94 3.33-16.21 7.39-3.14 2.88-2.85 9.33-2.66 13.22z"
        fill="#f2f2f2"
      />
      <path
        d="M639.4 305.19a23.17 23.17 0 005.46-5.94 24.21 24.21 0 002.33-8.21l1.57-9.92c.87-5.47 1.89-11.26 5.54-15.43s10.92-5.66 14.63-1.54c1.62 1.79 2.26 4.25 2.66 6.64a48.34 48.34 0 01-11.82 40c-4.49 4.92-10 8.83-14.75 13.48-4.14 4-7.73 8.59-11.55 12.94a159.42 159.42 0 01-31.47 27.5c.14-7.44 1.09-15.42 0-22.81-.81-5.34-3-8.22 2.17-11.71 12-8.16 24.11-15.54 35.23-25zM538.56 232.01c-.39 5.32-2.6 10.76-7 13.83q18.69 6.54 36.87 14.42c-2.34-2.25-3.05-5.7-3.16-8.94-.31-8.47 2.62-16.8 6.9-24.1a5.85 5.85 0 001.13-3.18c-.14-2.36-2.94-3.45-5.24-4a128.86 128.86 0 00-23.92-3.47c-3.45-.11-7.54-1.2-6.76 3.19.74 4.1 1.49 8.1 1.18 12.25z"
        fill="#fbbebe"
      />
      <circle cx={562.66} cy={205.63} r={29.23} fill="#fbbebe" />
      <path
        d="M591.6 284.58a35.36 35.36 0 00-3.71-6.22c-5.3-7.61-10.74-15.21-17.54-21.51a109.19 109.19 0 00-16.65-12.23 37.79 37.79 0 00-10.42-5 40.77 40.77 0 00-6.69-.91l-7.59-.62a6.21 6.21 0 00-2 .06c-2.06.52-3 3.08-2.56 5.15s2 3.75 3.38 5.32c.34 15.49-6.55 30.77-7.48 46.24-1.63 27.05 14.88 52.21 16.2 79.28a8.55 8.55 0 01-.38 3.63c-.22.56-.55 1.07-.8 1.62-.78 1.7-.75 3.63-.89 5.5a27.94 27.94 0 01-8.23 17.62 12.23 12.23 0 004.64 3.54c3.19 1.39 7 1.51 10.39 2.48 8.84 2.58 17.9 5.18 27.09 4.63a23.9 23.9 0 002.09-7.87c1.3-.81 2.8.92 3 2.44s-.09 3.29 1 4.39 2.47.93 3.8.76c5.61-.71 11-2.6 16.5-3.87s11.38-1.88 16.73-.06c1.08-1.37.62-3.4-.26-4.9s-2.13-2.82-2.63-4.49a10.08 10.08 0 01-.32-2.95c0-8.55 1.76-17.19.09-25.58-.49-2.46-1.27-4.86-1.77-7.33-1-4.79-.85-9.73-.72-14.62s-.46-10.18-.56-15.14a48.29 48.29 0 00-.4-6.13c-.34-2.13-1-4.21-1.18-6.36-.54-5.46 1.66-10.88 1.33-16.36-.55-8.32-10.22-12.84-13.46-20.51z"
        fill="#ff6f61"
      />
      <path
        d="M525.63 280.66c-7.08 18.78-10.54 38.7-14 58.48l-8 46.46c-2.27 13.13-4.55 26.34-4.46 39.66 0 3.74.24 7.55-.74 11.16-1.28 4.74-4.46 8.69-6.87 13a42.78 42.78 0 00-4.6 28.93c.82 4.15 3.06 8.86 7.27 9.34 3.46.38 6.45-2.37 8.47-5.21 4.64-6.51 6.94-14.37 9-22.11a500.11 500.11 0 0013.87-77.09 75.06 75.06 0 011.39-9.8 69.54 69.54 0 013.38-9.76q4.59-11.38 9.19-22.76c7.07-17.53 14.18-35.14 23.89-51.36-9.6-2.76-19.59-6-29.19-8.73-2.77-.82-5.74-.33-8.6-.21z"
        fill="#fbbebe"
      />
      <path
        d="M542.27 294.93c-6.72-1.45-13.67-1-20.53-1.17a4.43 4.43 0 01-2.76-.72c-1.39-1.19-.8-3.42-.1-5.11l3.32-8a11.64 11.64 0 012.66-4.42c1.69-1.5 4.07-1.87 6.31-2.14 7.29-.84 14.79-1.12 21.86.85s13.72 6.45 16.88 13.08c1.32 2.76 1.93 6.24.18 8.75-2.6 3.73-8.43 7.9-12.78 5.86-5.21-2.47-9.2-5.74-15.04-6.98z"
        fill="#ff6f61"
      />
      <path
        d="M578 160.23a29.52 29.52 0 00-16.3 4.7 35.75 35.75 0 00-35.1-8.22 20.43 20.43 0 10-23.6 23.64 35.75 35.75 0 1068.62 20.09 32 32 0 006.41.65c14.1 0 25.54-9.15 25.54-20.43s-11.49-20.43-25.57-20.43z"
        fill="#3f3d56"
      />
      <path
        d="M583.09 190.87a31.1 31.1 0 01-6.41-.65 35.57 35.57 0 01-4.68 10.29 32.11 32.11 0 006 .58c13.18 0 24-8 25.39-18.24-4.69 4.88-12.04 8.02-20.3 8.02zM542.23 216.41a35.8 35.8 0 01-34.18-46.28 20.43 20.43 0 01-16.89-20.12 20.09 20.09 0 01.33-3.66 20.43 20.43 0 0011.46 34 35.75 35.75 0 0068.29 21.18 35.68 35.68 0 01-29.01 14.88z"
        opacity={0.1}
      />
      <rect
        x={747.57}
        y={360.8}
        width={0.67}
        height={5.54}
        rx={0.34}
        transform="rotate(35.51 842.32 200.863)"
        fill="#3a3768"
      />
      <rect
        x={733.02}
        y={344.55}
        width={0.38}
        height={1.82}
        rx={0.19}
        transform="rotate(35.51 827.622 182.758)"
        fill="#3a3768"
      />
      <rect
        x={730.67}
        y={347.15}
        width={0.42}
        height={3.17}
        rx={0.21}
        transform="rotate(35.51 825.276 186.023)"
        fill="#3a3768"
      />
      <rect
        x={728.19}
        y={350.63}
        width={0.4}
        height={3.2}
        rx={0.2}
        transform="rotate(35.51 822.782 189.524)"
        fill="#3a3768"
      />
      <rect
        x={722.83}
        y={343.97}
        width={22.48}
        height={45.69}
        rx={2.52}
        transform="rotate(35.51 828.468 204.11)"
        fill="#3a3768"
      />
      <rect
        x={722.83}
        y={343.97}
        width={22.48}
        height={45.69}
        rx={2.52}
        transform="rotate(35.51 828.468 204.11)"
        opacity={0.1}
      />
      <rect
        x={721.9}
        y={342.11}
        width={22.48}
        height={45.69}
        rx={2.52}
        transform="rotate(35.51 827.547 202.254)"
        fill="#3a3768"
      />
      <path
        d="M675.28 266.93l-2.09-1.5-.18.25a1.46 1.46 0 01-2 .35l-6.68-4.77a1.47 1.47 0 01-.34-2.05l.18-.25-2-1.4a1.78 1.78 0 00-2.49.41l-23.08 32.35a1.79 1.79 0 00.41 2.49l13.14 9.37a1.78 1.78 0 002.49-.42l23.08-32.34a1.78 1.78 0 00-.44-2.49z"
        fill={color}
      />
      <rect
        x={743.37}
        y={347.07}
        width={3.14}
        height={0.64}
        rx={0.32}
        transform="rotate(35.51 839.344 184.686)"
        fill="#e6e8ec"
      />
      <circle cx={669.9} cy={263.72} r={0.36} fill="#e6e8ec" />
      <path
        d="M670 13.93a67 67 0 00-67 67c0 37 70.2 159.54 70.2 159.54S737 117.98 737 80.93a67 67 0 00-67-67zm0 111.68a35.1 35.1 0 1135.1-35.1 35.09 35.09 0 01-35.1 35.13z"
        fill={color}
      />
      <path
        d="M670 13.93a67 67 0 00-67 67c0 37 70.2 159.54 70.2 159.54S737 117.98 737 80.93a67 67 0 00-67-67zm0 111.68a35.1 35.1 0 1135.1-35.1 35.09 35.09 0 01-35.1 35.13z"
        opacity={0.1}
      />
      <path
        d="M670 0a67 67 0 00-67 67c0 37 70.2 173.5 70.2 173.5S737 104.02 737 67.01A67 67 0 00670 0zm0 111.68a35.1 35.1 0 1135.1-35.1 35.1 35.1 0 01-35.1 35.1z"
        fill={color}
      />
    </svg>
  );
};

SvgDirections.propTypes = {
  color: PropTypes.string
};
SvgDirections.defaultProps = {
  color: "primary"
};
export default SvgDirections;
