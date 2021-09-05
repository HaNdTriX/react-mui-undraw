import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMillennialGirl = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 992.39 781.3"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M87.19 672.4a24.72 24.72 0 003.27-12.54c0-11.33-7-20.52-15.67-20.52s-15.67 9.19-15.67 20.52a24.72 24.72 0 003.27 12.54 25.68 25.68 0 000 25.08 25.68 25.68 0 000 25.08 25.68 25.68 0 000 25.08 24.69 24.69 0 00-3.27 12.54c0 11.33 7 20.51 15.67 20.51s15.67-9.18 15.67-20.51a24.69 24.69 0 00-3.27-12.53 25.68 25.68 0 000-25.08 25.68 25.68 0 000-25.08 25.68 25.68 0 000-25.08z"
        fill="#3f3d56"
      />
      <ellipse cx={74.74} cy={634.78} rx={15.67} ry={20.52} fill="#3f3d56" />
      <ellipse cx={74.74} cy={609.7} rx={15.67} ry={20.52} fill="#3f3d56" />
      <path
        d="M16.06 438.09a76.38 76.38 0 01-5.83-8.6l41.18-6.76-44.54.33a75.22 75.22 0 01-1.43-59.49l59.75 31-55.11-40.51a75.09 75.09 0 11124 84 75.42 75.42 0 018.56 13.69l-53.45 27.8 57-19.13a75.16 75.16 0 01-12.1 70.51 75.08 75.08 0 11-118 0 75.12 75.12 0 010-92.84z"
        fill="#57b894"
      />
      <path
        d="M150.19 484.51a74.79 74.79 0 01-16.06 46.42 75.08 75.08 0 11-118 0C6 518.15 150.19 476.08 150.19 484.51z"
        opacity={0.1}
      />
      <path
        d="M894.25 698.78a18.8 18.8 0 002.49-9.54c0-8.62-5.33-15.6-11.92-15.6s-11.92 7-11.92 15.6a18.8 18.8 0 002.49 9.54 19.52 19.52 0 000 19.08 19.52 19.52 0 000 19.08 19.5 19.5 0 000 19.07 18.82 18.82 0 00-2.49 9.54c0 8.62 5.34 15.61 11.92 15.61s11.92-7 11.92-15.61a18.82 18.82 0 00-2.49-9.54 19.5 19.5 0 000-19.07 19.52 19.52 0 000-19.08 19.52 19.52 0 000-19.08z"
        fill="#3f3d56"
      />
      <ellipse cx={884.82} cy={670.17} rx={11.92} ry={15.61} fill="#3f3d56" />
      <ellipse cx={884.82} cy={651.09} rx={11.92} ry={15.61} fill="#3f3d56" />
      <path
        d="M840.19 520.55a57 57 0 01-4.44-6.54l31.33-5.15-33.89.26a57.31 57.31 0 01-1.09-45.26l45.46 23.59-41.92-30.8a57.11 57.11 0 1194.32 63.92 57.05 57.05 0 016.52 10.41l-40.67 21.13 43.38-14.58a57.1 57.1 0 01-9.21 53.64 57.11 57.11 0 11-89.77 0 57.12 57.12 0 010-70.62z"
        fill="#57b894"
      />
      <path
        d="M942.19 555.86a56.84 56.84 0 01-12.23 35.31 57.11 57.11 0 11-89.77 0c-7.66-9.72 102-41.72 102-35.31z"
        opacity={0.1}
      />
      <path
        d="M795.86 201.04H595.63v-43.3a10.35 10.35 0 00-10.36-10.36h-58.79v-46.13a6.52 6.52 0 00-6.52-6.52h-75.77a6.53 6.53 0 00-6.52 6.52v46.13h-69.09a10.36 10.36 0 00-10.39 10.36v43.27H167.3a2.11 2.11 0 00-2.1 2.11v574.91a2.11 2.11 0 002.1 2.11h126.89a2.12 2.12 0 002.11-2.11v-77.38a2.12 2.12 0 012.11-2.11h53.6a2.11 2.11 0 012.1 2.11v77.34a2.11 2.11 0 002.09 2.11h250.76a2.12 2.12 0 002.1-2.11v-77.34a2.11 2.11 0 012.09-2.11h53.6a2.11 2.11 0 012.11 2.11v77.34a2.12 2.12 0 002.11 2.11h126.89a2.12 2.12 0 002.1-2.11V203.15a2.11 2.11 0 00-2.1-2.11zM273.58 671.72a2.1 2.1 0 01-2.09 2.09h-78.38a2.09 2.09 0 01-2.1-2.09v-26.77a2.1 2.1 0 012.1-2.11h78.38a2.11 2.11 0 012.09 2.11zm0-69.17a2.1 2.1 0 01-2.09 2.1h-78.38a2.1 2.1 0 01-2.1-2.11V575.8a2.1 2.1 0 012.1-2.11h78.38a2.1 2.1 0 012.09 2.11zm0-69.15a2.1 2.1 0 01-2.09 2.1h-78.38a2.1 2.1 0 01-2.1-2.1v-26.75a2.1 2.1 0 012.1-2.11h78.38a2.11 2.11 0 012.09 2.11zm0-69.17a2.09 2.09 0 01-2.09 2.1h-78.38a2.09 2.09 0 01-2.1-2.1v-26.76a2.09 2.09 0 012.1-2.1h78.38a2.09 2.09 0 012.09 2.1zm0-69.16a2.11 2.11 0 01-2.09 2.11h-78.38a2.1 2.1 0 01-2.1-2.11V368.3a2.09 2.09 0 012.1-2.09h78.38a2.1 2.1 0 012.09 2.09zm0-69.15a2.1 2.1 0 01-2.09 2.09h-78.38a2.09 2.09 0 01-2.1-2.09v-26.77a2.11 2.11 0 012.1-2.11h78.38a2.11 2.11 0 012.09 2.11zm0-69.17a2.1 2.1 0 01-2.09 2.11h-78.38a2.1 2.1 0 01-2.1-2.11V230a2.1 2.1 0 012.1-2.11h78.38a2.1 2.1 0 012.09 2.11zm185.8 415a2.09 2.09 0 01-2.1 2.09h-78.37a2.11 2.11 0 01-2.11-2.09v-26.8a2.12 2.12 0 012.11-2.11h78.37a2.1 2.1 0 012.1 2.11zm0-69.17a2.1 2.1 0 01-2.1 2.11h-78.37a2.11 2.11 0 01-2.11-2.11V575.8a2.11 2.11 0 012.11-2.11h78.37a2.1 2.1 0 012.1 2.11zm0-69.15a2.1 2.1 0 01-2.1 2.1h-78.37a2.11 2.11 0 01-2.11-2.1v-26.78a2.12 2.12 0 012.11-2.11h78.37a2.1 2.1 0 012.1 2.11zm0-69.17a2.09 2.09 0 01-2.1 2.1h-78.37a2.1 2.1 0 01-2.11-2.1v-26.79a2.1 2.1 0 012.11-2.1h78.37a2.09 2.09 0 012.1 2.1zm0-69.16a2.1 2.1 0 01-2.1 2.11h-78.37a2.12 2.12 0 01-2.11-2.11v-26.8a2.11 2.11 0 012.11-2.09h78.37a2.09 2.09 0 012.1 2.09zm0-69.15a2.09 2.09 0 01-2.1 2.09h-78.37a2.11 2.11 0 01-2.11-2.09v-26.8a2.12 2.12 0 012.11-2.11h78.37a2.11 2.11 0 012.1 2.11zm0-69.17a2.1 2.1 0 01-2.1 2.11h-78.37a2.11 2.11 0 01-2.11-2.11V230a2.11 2.11 0 012.11-2.11h78.37a2.1 2.1 0 012.1 2.11zm127 415a2.1 2.1 0 01-2.11 2.09h-78.4a2.1 2.1 0 01-2.1-2.09v-26.83a2.11 2.11 0 012.1-2.11h78.37a2.11 2.11 0 012.11 2.11zm0-69.17a2.1 2.1 0 01-2.11 2.11h-78.4a2.11 2.11 0 01-2.1-2.11V575.8a2.11 2.11 0 012.1-2.11h78.37a2.1 2.1 0 012.11 2.11zm0-69.15a2.11 2.11 0 01-2.11 2.1h-78.4a2.11 2.11 0 01-2.1-2.1v-26.81a2.11 2.11 0 012.1-2.11h78.37a2.11 2.11 0 012.11 2.11zm0-69.17a2.1 2.1 0 01-2.11 2.1h-78.4a2.1 2.1 0 01-2.1-2.1v-26.82a2.1 2.1 0 012.1-2.1h78.37a2.1 2.1 0 012.11 2.1zm0-69.16a2.11 2.11 0 01-2.11 2.11h-78.4a2.11 2.11 0 01-2.1-2.11V368.3a2.1 2.1 0 012.1-2.09h78.37a2.1 2.1 0 012.11 2.09zm0-69.15a2.1 2.1 0 01-2.11 2.09h-78.4a2.1 2.1 0 01-2.1-2.09v-26.83a2.12 2.12 0 012.1-2.11h78.37a2.12 2.12 0 012.11 2.11zm0-69.17a2.1 2.1 0 01-2.11 2.11h-78.4a2.11 2.11 0 01-2.1-2.11V230a2.11 2.11 0 012.1-2.11h78.37a2.1 2.1 0 012.11 2.11zm185.81 414.91a2.11 2.11 0 01-2.11 2.09h-78.4a2.1 2.1 0 01-2.11-2.09v-26.77a2.11 2.11 0 012.11-2.11h78.37a2.12 2.12 0 012.14 2.11zm0-69.17a2.11 2.11 0 01-2.11 2.11h-78.4a2.1 2.1 0 01-2.11-2.11V575.8a2.1 2.1 0 012.11-2.11h78.37a2.11 2.11 0 012.11 2.11zm0-69.15a2.11 2.11 0 01-2.11 2.1h-78.4a2.11 2.11 0 01-2.11-2.1v-26.75a2.11 2.11 0 012.11-2.11h78.37a2.12 2.12 0 012.14 2.11zm0-69.17a2.1 2.1 0 01-2.11 2.1h-78.4a2.1 2.1 0 01-2.11-2.1v-26.76a2.1 2.1 0 012.11-2.1h78.37a2.1 2.1 0 012.11 2.1zm0-69.16a2.12 2.12 0 01-2.11 2.11h-78.4a2.11 2.11 0 01-2.11-2.11V368.3a2.1 2.1 0 012.11-2.09h78.37a2.11 2.11 0 012.11 2.09zm0-69.15a2.11 2.11 0 01-2.11 2.09h-78.4a2.1 2.1 0 01-2.11-2.09v-26.77a2.12 2.12 0 012.11-2.11h78.37a2.12 2.12 0 012.14 2.11zm0-69.17a2.11 2.11 0 01-2.11 2.11h-78.4a2.1 2.1 0 01-2.11-2.11V230a2.1 2.1 0 012.11-2.11h78.37a2.11 2.11 0 012.11 2.11zM282.68 37.65l-17.14 10.9 10.4-18.9a16.89 16.89 0 00-10.36-3.7h-.27a20 20 0 01-3.56-.27l-5.81 3.68 2.49-4.52a20.75 20.75 0 01-10.16-7.71l-10.39 6.59 6.57-11.94C238.37 4.48 230.19 0 221.19 0c-10.81 0-20.44 6.43-26.65 16.44a19.91 19.91 0 01-17.62 9.5h-.58c-11.93 0-21.61 13.53-21.61 30.22s9.68 30.22 21.61 30.22a16.16 16.16 0 007.52-1.89c7.79-4 18-4.12 26.15-.51a27.22 27.22 0 0022.24.05c8.08-3.54 18.19-3.46 25.92.5a16.07 16.07 0 007.44 1.85c11.93 0 21.61-13.53 21.61-30.22a38.43 38.43 0 00-4.54-18.51z"
        fill="#f2f2f2"
      />
      <path
        d="M250.38 81.9a31.94 31.94 0 00-18.51 2 27.3 27.3 0 01-22.23 0c-8.15-3.62-18.37-3.54-26.15.51a16.19 16.19 0 01-7.53 1.88c-10.6 0-19.41-10.68-21.25-24.76a20.38 20.38 0 005.3-5.71c6.21-10 15.84-16.45 26.65-16.45s20.32 6.28 26.53 16.22a20.43 20.43 0 0017.61 9.68h.27c8.45-.01 15.76 6.76 19.31 16.63z"
        opacity={0.03}
      />
      <path
        d="M871.01 112.44l-12.08 7.66 7.33-13.33a11.94 11.94 0 00-7.3-2.61h-.19a14.91 14.91 0 01-2.51-.19l-4.09 2.6 1.75-3.19a14.63 14.63 0 01-7.16-5.44l-7.32 4.71 4.62-8.42c-4.28-5.14-10-8.29-16.41-8.29-7.62 0-14.4 4.53-18.78 11.59a14 14 0 01-12.42 6.69h-.41c-8.41 0-15.22 9.54-15.22 21.3s6.81 21.3 15.22 21.3a11.45 11.45 0 005.31-1.33 22 22 0 0118.43-.36 19.19 19.19 0 0015.66 0 22 22 0 0118.27.35 11.45 11.45 0 005.25 1.3c8.41 0 15.23-9.54 15.23-21.3a27.08 27.08 0 00-3.18-13.04z"
        fill="#f2f2f2"
      />
      <path
        d="M848.25 143.65a22.49 22.49 0 00-13 1.41 19.16 19.16 0 01-15.67 0 22 22 0 00-18.43.36 11.41 11.41 0 01-5.3 1.33c-7.47 0-13.69-7.53-15-17.46a14.34 14.34 0 003.73-4c4.38-7.06 11.17-11.59 18.79-11.59s14.32 4.47 18.7 11.46a14.42 14.42 0 0012.41 6.82h.19c5.92-.1 11.07 4.67 13.58 11.67z"
        opacity={0.03}
      />
      <path
        d="M719.96 40.65l-8.45 5.36 5.13-9.36a8.37 8.37 0 00-5.11-1.82h-.14a9.25 9.25 0 01-1.75-.13l-2.87 1.82 1.23-2.24a10.13 10.13 0 01-5-3.8l-5.13 3.25 3.24-5.89a15 15 0 00-11.49-5.81c-5.34 0-10.09 3.18-13.15 8.12a9.86 9.86 0 01-8.7 4.69h-.28c-5.89 0-10.66 6.68-10.66 14.91s4.76 14.9 10.65 14.9a8 8 0 003.71-.93 15.34 15.34 0 0112.9-.25 13.64 13.64 0 005.52 1.18 13.5 13.5 0 005.45-1.16 15.43 15.43 0 0112.79.25 8 8 0 003.68.91c5.88 0 10.66-6.68 10.66-14.91a19 19 0 00-2.23-9.09z"
        fill="#f2f2f2"
      />
      <path
        d="M704.03 62.42a15.79 15.79 0 00-9.14 1 13.5 13.5 0 01-11 0 15.42 15.42 0 00-12.9.25 7.91 7.91 0 01-3.71.93c-5.24 0-9.59-5.27-10.49-12.22a9.92 9.92 0 002.61-2.82c3.07-4.94 7.82-8.11 13.15-8.11s10 3.13 13.1 8a10.07 10.07 0 008.69 4.78h.13c4.2-.01 7.8 3.33 9.56 8.19z"
        opacity={0.03}
      />
      <path
        d="M138.62 774.71c2.06-3.8-.27-8.46-3-11.86s-5.95-6.92-5.88-11.25c.1-6.21 6.69-9.88 12-13.17a58.45 58.45 0 0010.75-8.64 15.82 15.82 0 003.3-4.42c1.09-2.43 1.06-5.19 1-7.85q-.35-13.3-1.32-26.58"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M165.49 690.46a9.69 9.69 0 00-4.84-7.94l-2.17 4.29.07-5.19a9.69 9.69 0 106.94 8.84zM148.19 756.05a9.69 9.69 0 01-18.3-4 9.84 9.84 0 01.63-3.93 9.7 9.7 0 0118.14.1l-6.05 4.93 6.65-1.54a9.59 9.59 0 01-1.07 4.44zM143.42 737.23a9.69 9.69 0 01-10.13-9.23 9.58 9.58 0 01.84-4.41 9.7 9.7 0 016.22-5.37v4l2.19-4.34a9.69 9.69 0 0110.13 9.23 9.51 9.51 0 01-.41 3.3 9.7 9.7 0 01-8.84 6.82zM166.95 721.58a9.7 9.7 0 114.24-18.14l-1.71 4.7 3.52-3.39a9.65 9.65 0 013.13 6.69 9.43 9.43 0 01-.24 2.67 9.69 9.69 0 01-8.94 7.47z"
        fill="#57b894"
      />
      <path
        d="M164.19 693.04c-2.24.25-4.41.94-6.66 1.08s-4.71-.4-6.13-2.14a29.58 29.58 0 01-1.79-3.16 6.87 6.87 0 00-2.44-2.29 9.69 9.69 0 1018.11 6.43c-.36.02-.73.04-1.09.08zM166.95 721.58a9.7 9.7 0 01-9.22-13.83 7.27 7.27 0 011.95 2 32.25 32.25 0 001.92 3.2c1.51 1.77 4.09 2.35 6.43 2.25s4.59-.78 6.92-1c.32 0 .65 0 1-.06a9.69 9.69 0 01-9 7.44zM143.42 737.23a9.69 9.69 0 01-10.13-9.23 9.58 9.58 0 01.84-4.41 8 8 0 012.05 2 32.87 32.87 0 002.1 3.26c1.63 1.83 4.38 2.47 6.86 2.41s4.71-.64 7.1-.83a9.7 9.7 0 01-8.82 6.8zM148.19 756.05a9.69 9.69 0 01-18.3-4 9.84 9.84 0 01.63-3.93 9.5 9.5 0 012.13 1.9 40.18 40.18 0 002.59 3.44c2 1.94 5.18 2.75 8 2.82a42.22 42.22 0 004.95-.23z"
        opacity={0.1}
      />
      <path
        d="M124.01 773.09s7.65-3 10-4.63 11.77-3.61 12.34-1 11.44 13.12 2.84 13.19-20.07 1.42-22.37 0-2.81-7.56-2.81-7.56z"
        fill="#656380"
      />
      <path
        d="M149.31 779.73c-8.63.07-20.06 1.42-22.36 0-1.75-1.07-2.45-4.9-2.69-6.67h-.25s.48 6.17 2.78 7.57 13.73.06 22.37 0c2.49 0 3.35-.91 3.31-2.22-.35.81-1.28 1.31-3.16 1.32z"
        opacity={0.2}
      />
      <path
        d="M672.37 775.25c-1.38-2.55.19-5.68 2-8s4-4.65 3.94-7.56c-.06-4.17-4.49-6.63-8-8.84a39.52 39.52 0 01-7.21-5.8 10.69 10.69 0 01-2.22-3 12.19 12.19 0 01-.67-5.28q.24-8.93.89-17.84"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M654.33 718.65a6.51 6.51 0 013.25-5.33l1.46 2.88-.05-3.49a6.38 6.38 0 012.15-.25 6.51 6.51 0 11-6.81 6.19zM665.94 762.72a6.5 6.5 0 10-.32-5.24l4.07 3.3-4.48-1a6.52 6.52 0 00.73 2.94zM669.19 750.08a6.5 6.5 0 006.8-6.2 6.39 6.39 0 00-.56-3 6.48 6.48 0 00-4.18-3.6v2.68l-1.48-2.92a6.52 6.52 0 00-6.81 6.2 6.81 6.81 0 00.28 2.22 6.51 6.51 0 005.95 4.62zM653.35 739.57a6.51 6.51 0 10-2.88-12.18l1.15 3.15-2.36-2.27a6.49 6.49 0 00-2.1 4.49 6.33 6.33 0 00.16 1.8 6.51 6.51 0 006.03 5.01z"
        fill="#57b894"
      />
      <path
        d="M655.19 720.41c1.5.16 3 .63 4.47.72a4.84 4.84 0 004.13-1.48 22 22 0 001.21-2.12 4.63 4.63 0 011.63-1.54 6.36 6.36 0 01.7 3.25 6.51 6.51 0 01-12.86 1.07c.25.05.49.07.72.1zM653.35 739.57a6.5 6.5 0 006.19-9.28 4.8 4.8 0 00-1.35 1.36 19.42 19.42 0 01-1.29 2.15 5.31 5.31 0 01-4.31 1.51c-1.57-.07-3.09-.52-4.65-.66h-.66a6.51 6.51 0 006.07 4.92zM669.19 750.08a6.5 6.5 0 006.8-6.2 6.39 6.39 0 00-.56-3 5.22 5.22 0 00-1.37 1.32 21.15 21.15 0 01-1.42 2.2 6 6 0 01-4.6 1.61c-1.62 0-3.17-.43-4.77-.55a6.51 6.51 0 005.92 4.62zM665.94 762.72a6.51 6.51 0 0011.86-5.31 6.47 6.47 0 00-1.43 1.27 25.84 25.84 0 01-1.74 2.31 8.14 8.14 0 01-5.39 1.9 30 30 0 01-3.3-.17z"
        opacity={0.1}
      />
      <path
        d="M682.19 773.47s-5.14-1.32-6.69-2.42-7.9-2.42-8.28-.65-7.72 8.79-1.92 8.84 13.47.26 15-.68 1.89-5.09 1.89-5.09z"
        fill="#656380"
      />
      <path
        d="M665.19 778.65c5.8 0 13.48.26 15-.68 1.18-.71 1.65-3.29 1.8-4.47h.2s-.33 4.15-1.87 5.09-9.22.72-15 .68c-1.68 0-2.25-.61-2.22-1.49.21.5.85.87 2.09.87z"
        opacity={0.2}
      />
      <path
        fill="#3f3d56"
        d="M195.39 779.24h509v2h-509zM722.39 779.24h270v2h-270zM8.39 779.24h169v2h-169z"
      />
      <rect
        x={556.1}
        y={531.27}
        width={46.73}
        height={76.08}
        rx={23.37}
        transform="rotate(-18.2 360.837 858.443)"
        fill="#ff6584"
      />
      <path
        d="M464.51 507.52s8.7 12.49 0 15.75-12 12.5-12 12.5-2.72 10.87 3.26 13 28.8-10.32 32.06-13.58 0-12 0-12-8.69-12-8.15-19.56-15.17 3.89-15.17 3.89z"
        fill="#fbbebe"
      />
      <path
        d="M464.51 507.52s8.7 12.49 0 15.75-12 12.5-12 12.5-2.72 10.87 3.26 13 28.8-10.32 32.06-13.58 0-12 0-12-8.69-12-8.15-19.56-15.17 3.89-15.17 3.89z"
        opacity={0.1}
      />
      <path
        d="M487.88 604.24s19.56 40.76 26.09 43.48 23.91 1.08 18.47 16.3-10.87 8.15-6 19 24.46 26.63 8.7 20.1-34.24-21.73-44.56-19.56-36.22-6.57-42-5.46-3.63-23.88-3.63-23.88l16.3-23.91z"
        fill={color}
      />
      <path
        d="M468.86 646.09s-8.18 29.85-3.8 34.23c.54.54 15.21 4.35 25 15.22a68 68 0 0021.19 15.76l-8.7 9.23s-19-15.21-31-17.93-24.45-12-24.45-15.21 8.15-44 8.15-44z"
        fill="#fbbebe"
      />
      <path
        d="M468.86 646.09s-8.18 29.85-3.8 34.23c.54.54 15.21 4.35 25 15.22a68 68 0 0021.19 15.76l-8.7 9.23s-19-15.21-31-17.93-24.45-12-24.45-15.21 8.15-44 8.15-44z"
        opacity={0.1}
      />
      <path
        d="M504.19 705.32s4.89-3.26 8.16 1.09 17.38 10.86 17.38 10.86 6.53 0 3.26 7.07l-3.26 7.06-2.17-1.08s-2.17 21.73-14.13 23.91c0 0-3.8 0-.54-9.79 0 0 4.89-4.34-3.81-13 0 0-8.15-1.08-8.15-3.8 0 0-6.52-1.63-4.34-6s11.4-10.34 7.6-16.32z"
        fill="#3f3d56"
      />
      <path
        d="M440.6 657.5s-2.17 10.87-3.8 12.5-1.63 7.06 0 13 2.72 40.21-2.72 57.06 7.61 9.24 7.61 9.24 16.85-41.85 14.67-62 19-41.85 19-41.85l-26.06-4.8z"
        fill="#fbbebe"
      />
      <path
        d="M435.54 734.49s-4.17 2.89-4.72 5.06a5.83 5.83 0 01-2.17 3.26s-4.35 7.61-4.35 14.13-13.58 16.31-13.58 16.31-14.68 7.6 5.43 6.52 25-2.18 25-2.18v2.18s8.69.54 8.15-6-1.11-21.72-1.11-21.72 6.52-6.52 4.35-11.41-6-4.7-6-4.7-3.28 10.68-6 10.13-4.63-7.95-5-11.58z"
        fill="#3f3d56"
      />
      <path
        d="M443.32 562.4l-14.67 52.71s-7.61 18.48-1.63 17.93 8.69-19.56 8.69-19.56l11.42-26.08 1.63-20.65z"
        fill="#fbbebe"
      />
      <circle cx={469.68} cy={496.92} r={14.67} fill="#fbbebe" />
      <path
        d="M457.45 541.21s-2.22-11.5 4.32-16.62c0 0-8.12-.77-9.75 1.4 0 0-9.79.54-9.79 7.07s-1.08 14.67-1.63 15.75-2.71 6 .55 17.39 9 16.58 5.7 22.56a39.87 39.87 0 00-2.52 6.55 85.44 85.44 0 00-3.65 30.34c.58 9.7.25 23.57-5 32.37-8.69 14.67 53.26-8.69 54.35-13.58s2.71-17.94.54-25a35.5 35.5 0 01-1.09-14.13s4.35-19.56-7.06-30.43l15.21-45.1s-6.52-7.07-11.41-6.53-28.77 17.96-28.77 17.96z"
        fill={color}
      />
      <path
        d="M490.6 542.84l-.26.75c-1.74 5.26-11.73 36.35-6.26 43.81 0 0 6.52 1.63 8.69-7.07s9.24-42.38 6.52-45.1-8.69 7.61-8.69 7.61z"
        fill="#fbbebe"
      />
      <path
        d="M490.6 542.84l-.26.75c-1.74 5.26-11.73 36.35-6.26 43.81 0 0 6.52 1.63 8.69-7.07s9.24-42.38 6.52-45.1-8.69 7.61-8.69 7.61z"
        opacity={0.1}
      />
      <path
        d="M497.66 529.25s4.35 1.63 3.26 6-13 12.5-13 12.5l-1.09-9.24z"
        fill={color}
      />
      <path
        d="M478.39 479.37a10 10 0 00-3.39.42 9.87 9.87 0 10-8.67 14.58h.5a4.79 4.79 0 013.8 1.52 9.87 9.87 0 107.76-16.51z"
        fill="#ff6584"
      />
      <path
        d="M484.08 575.99s14.13-18.48 15.76-25.55-10.33-25.54-1.63-24.45 10.86 16.3 10.86 16.3 1.63 2.72-2.17 13.05-9.78 25-13 28.25-12.54 12.5-9.82-7.6z"
        fill="#fbbebe"
      />
    </svg>
  );
};

SvgMillennialGirl.propTypes = {
  color: PropTypes.string
};
SvgMillennialGirl.defaultProps = {
  color: "primary"
};
export default SvgMillennialGirl;
