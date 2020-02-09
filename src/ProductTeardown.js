import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgProductTeardown = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 929.68 818.68"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="ProductTeardown_svg__a"
          x1={848.51}
          y1={309.8}
          x2={848.51}
          y2={277.87}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="ProductTeardown_svg__b"
          x1={839.07}
          y1={807.44}
          x2={839.07}
          y2={171.94}
          xlinkHref="#ProductTeardown_svg__a"
        />
      </defs>
      <ellipse
        cx={753.62}
        cy={754.32}
        rx={118.88}
        ry={20.45}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={393.68}
        cy={734.32}
        rx={176}
        ry={12.45}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M287.63 32.01c31.52-28.09 81-33.81 126-31.57 141.44 7 269.11 75.31 379.55 152.54 40 28 79.34 58.09 105.29 96.6 52.83 78.38 37.16 187-36.3 251.53-25 22-55.29 38.81-86.4 53.74-55.3 26.55-115 47.86-177.74 53.92-44.76 4.33-90.08.81-134.58-5.22-124.32-16.86-246.35-54.15-348.61-117.94-44.86-28-87.15-62.76-105.64-108S2.55 274.99 48.35 248.2c19-11.08 41.6-16.08 63.78-20.78 32.64-6.92 65.81-13.74 95.27-27.8 30.44-14.54 66.44-42.63 60.44-74.77-6.5-34.51-11.69-64.79 19.79-92.84z"
        fill={color}
        opacity={0.1}
      />
      <path fill={color} d="M164 176.91h-7.53" />
      <g opacity={0.1}>
        <path d="M406.65 646.34c3.84 6.53 9.86 10.74 16.64 10.74 11.58 0 21-12.27 21-27.42s-9.45-27.32-21-27.32c-5.45 0-10.42 2.72-14.15 7.19a27.09 27.09 0 00-3.57 5.59l-.2 1.19s-4.47 3.82-10.56.31V527.8h-86.72a7 7 0 01-1.05-6.54 8.36 8.36 0 013.91-4.77c6.53-3.84 10.75-9.86 10.75-16.64 0-11.58-12.28-21-27.42-21s-27.42 9.39-27.42 21c0 5.45 2.73 10.43 7.2 14.16a27.25 27.25 0 005.58 3.56l.12.2a8.53 8.53 0 011.67 10h-39.11v164.48a39 39 0 0039 39h113.52v-87.28a6.91 6.91 0 017.07-1.5 8.28 8.28 0 014.74 3.87z" />
        <path d="M260.7 524.34h13.58a27.41 27.41 0 01-10.71-21.51c0-15.59 13.6-28.22 30.37-28.22s30.38 12.63 30.38 28.22a27.41 27.41 0 01-10.71 21.51h81.4v-87.63a7 7 0 017.07-1.5 8.33 8.33 0 014.78 3.91c3.83 6.53 9.85 10.74 16.64 10.74 11.58 0 21-12.27 21-27.41s-9.38-27.42-21-27.42c-5.46 0-10.43 2.73-14.16 7.19a27.63 27.63 0 00-3.57 5.59l-.19.12a8.54 8.54 0 01-10.57 1.41v-88.8h-83.49a7 7 0 01-1.05-6.54 8.31 8.31 0 013.91-4.77c6.53-3.83 10.74-9.86 10.74-16.64 0-11.58-12.27-21-27.41-21s-27.42 9.39-27.42 21c0 5.46 2.73 10.43 7.19 14.16a27.63 27.63 0 005.59 3.57l.12.19a8.53 8.53 0 011.67 10H260.7v-4.5h17.84a27.4 27.4 0 01-10.7-21.47c0-15.59 13.6-28.23 30.38-28.23s30.37 12.64 30.37 28.23a27.4 27.4 0 01-10.75 21.5h77.1v-88.7a6.94 6.94 0 017.08-1.5 8.34 8.34 0 014.77 3.91c3.83 6.53 9.86 10.74 16.64 10.74 11.58 0 21-12.27 21-27.42s-9.38-27.41-21-27.41c-5.46 0-10.43 2.72-14.16 7.19a27.09 27.09 0 00-3.57 5.59l-.19 1.19s-4.47 3.82-10.57.31v-82.73H281.47a39 39 0 00-39 39v42.22h-.59a2.29 2.29 0 00-2.29 2.29v20a2.3 2.3 0 002.29 2.29h.59v20.42h-.77a2.3 2.3 0 00-2.3 2.29v38.19a2.3 2.3 0 002.3 2.29h.77v15h-.63a2.29 2.29 0 00-2.29 2.29v12.3h-.5v25.92a2.28 2.28 0 002.29 2.29h.68v180.34z" />
        <path d="M557.43 258.84a2.3 2.3 0 00-2.29-2.3h-1.38v-2.51h-.75v-99.75a37.49 37.49 0 00-37.5-37.5h-112.5v76a27.75 27.75 0 0122-11.05c15.71 0 28.45 13.61 28.45 30.39s-12.74 30.39-28.45 30.39a27.73 27.73 0 01-22-11.05v84.33h91a27.47 27.47 0 01-10.69-21.53c0-15.61 13.57-28.26 30.32-28.26a31.45 31.45 0 0120.37 7.34 26.72 26.72 0 010 41.75v.67h19.75v-.07h3.67zM527.22 519.85v-10a19 19 0 001.13-1.87 16.66 16.66 0 002.06-7.95 16.37 16.37 0 00-.94-5.44 18 18 0 00-2.25-4.38c-4.61-6.63-13.72-11.15-24.22-11.15-15.15 0-27.42 9.39-27.42 21 0 5.46 2.73 10.43 7.19 14.16a27.63 27.63 0 005.59 3.57l.12.19a8.54 8.54 0 011.67 10h-88.22v82a27.41 27.41 0 0121.77-11c15.59 0 28.22 13.6 28.22 30.37s-12.63 30.38-28.22 30.38a27.41 27.41 0 01-21.77-11v66.19h101.23a24.06 24.06 0 0024.06-24V528.01v162.8a24.06 24.06 0 01-24.06 24.06H401.93v16h105a39 39 0 0039-39V523.71h-18.71z" />
      </g>
      <path
        d="M286.09 711.2a24.06 24.06 0 01-24.06-24.06V523.8h-18.71v164.45a39 39 0 0039 39h113.52v-16z"
        fill="#3a3768"
      />
      <path
        d="M402.84 638.47a8.28 8.28 0 014.77 3.91c3.84 6.53 9.86 10.74 16.64 10.74 11.58 0 21-12.27 21-27.42s-9.41-27.36-20.96-27.36c-5.45 0-10.42 2.72-14.15 7.19a27.09 27.09 0 00-3.57 5.59l-.2 1.19s-4.47 3.82-10.56.31V523.8h-86.72a7 7 0 01-1.05-6.54 8.36 8.36 0 013.91-4.77c6.53-3.84 10.75-9.86 10.75-16.64 0-11.58-12.28-21-27.42-21s-27.42 9.39-27.42 21c0 5.45 2.73 10.43 7.2 14.16a27.25 27.25 0 005.58 3.56l.12.2a8.53 8.53 0 011.67 10h-20.4v163.37a24.06 24.06 0 0024.06 24.06h109.75v-71.23a6.91 6.91 0 017-1.5z"
        fill={color}
      />
      <path
        fill="#3a3768"
        d="M240.02 311.71h2.97v4.84h-2.97zM245.47 311.71h16.23v4.84h-16.23zM242.99 311.71h2.48v4.84h-2.48z"
      />
      <path
        d="M242.31 339.92h.68v-23.38h-3v21.09a2.28 2.28 0 002.32 2.29z"
        fill="#3a3768"
      />
      <path
        d="M261.7 316.54h-16.23v21.09a2.29 2.29 0 01-2.3 2.29h-.18v180.42h18.71z"
        fill="#3a3768"
      />
      <path
        d="M242.99 339.92h.18a2.29 2.29 0 002.3-2.29v-21.09h-2.48z"
        fill="#3a3768"
      />
      <path
        d="M264.57 498.79c0-15.59 13.6-28.22 30.37-28.22s30.38 12.63 30.38 28.22a27.41 27.41 0 01-10.71 21.55h81.4v-87.63a7 7 0 017.07-1.5 8.33 8.33 0 014.78 3.91c3.83 6.53 9.85 10.74 16.64 10.74 11.58 0 21-12.27 21-27.41s-9.38-27.42-21-27.42c-5.46 0-10.43 2.73-14.16 7.19a27.63 27.63 0 00-3.57 5.59l-.19.12a8.54 8.54 0 01-10.57 1.41v-88.8h-83.49a7 7 0 01-1.05-6.54 8.31 8.31 0 013.91-4.77c6.53-3.83 10.74-9.86 10.74-16.64 0-11.58-12.27-21-27.41-21s-27.42 9.39-27.42 21c0 5.46 2.73 10.43 7.19 14.16a27.63 27.63 0 005.59 3.57l.12.19a8.53 8.53 0 011.67 10H261.7v203.83h13.58a27.41 27.41 0 01-10.71-21.55z"
        fill={color}
      />
      <path
        d="M245.97 299.08a2.29 2.29 0 00-2.3-2.29h-.18v14.92h2.48zM243.4 194.41h-.5a2.29 2.29 0 00-2.29 2.29v20a2.3 2.3 0 002.29 2.29h.59v-24.57zM242.72 239.39a2.3 2.3 0 00-2.3 2.29v38.19a2.3 2.3 0 002.3 2.29h.77v-42.77z"
        fill="#3a3768"
      />
      <path
        d="M243.49 297.12h-.65a2.29 2.29 0 00-2.29 2.29v12.63h3z"
        fill="#3a3768"
      />
      <path
        d="M243.49 152.2v42.22a2.28 2.28 0 012.2 2.28v20a2.29 2.29 0 01-2.2 2.28v20.42h.35a2.29 2.29 0 012.29 2.29v38.19a2.29 2.29 0 01-2.29 2.29h-.37v15h.18a2.3 2.3 0 012.3 2.29v12.58h16.23v-158.7a24.06 24.06 0 0124.05-24.06h32.61v4.18a19.81 19.81 0 0019.81 19.81h57.37v-13.08h-26.41a3.89 3.89 0 01-3.87-3.85v-.84a3.88 3.88 0 013.87-3.87h26.36v-18.42h-113.5a39 39 0 00-38.98 38.99z"
        fill="#3a3768"
      />
      <path
        d="M245.69 216.69v-20a2.28 2.28 0 00-2.2-2.28v24.55a2.29 2.29 0 002.2-2.27zM246.15 279.87v-38.19a2.29 2.29 0 00-2.29-2.29h-.37v42.77h.35a2.29 2.29 0 002.31-2.29z"
        fill="#3a3768"
      />
      <path
        d="M268.84 290.54c0-15.59 13.6-28.23 30.38-28.23s30.37 12.64 30.37 28.23a27.4 27.4 0 01-10.75 21.5h77.1v-88.7a6.94 6.94 0 017.08-1.5 8.34 8.34 0 014.77 3.91c3.83 6.53 9.86 10.74 16.64 10.74 11.58 0 21-12.27 21-27.42s-9.38-27.41-21-27.41c-5.46 0-10.43 2.72-14.16 7.19a27.09 27.09 0 00-3.57 5.59l-.19 1.19s-4.47 3.82-10.57.31v-42.7H338.6a19.81 19.81 0 01-19.76-19.81v-4.18h-32.59a24.06 24.06 0 00-24.05 24.09v158.7h17.34a27.4 27.4 0 01-10.7-21.5z"
        fill={color}
      />
      <path
        d="M369.61 131.6a3.88 3.88 0 00-3.87 3.87v.87a3.89 3.89 0 003.87 3.88h26.36v-8.59z"
        fill="#e6e8ec"
      />
      <path
        d="M548.01 252.42v59.36h6.75v-61.75h-3.65c-1.71 0-3.1 1.07-3.1 2.39zM404.01 112.78h8v18h-8zM404.01 139.78h8v13h-8z"
        fill="#3a3768"
      />
      <path fill="#e6e8ec" d="M404.01 130.78h8v9h-8z" />
      <path
        d="M556.14 252.54h-1.88v59.17h4.17v-56.87a2.3 2.3 0 00-2.29-2.3zM412 130.78c2.13.48 4 4.36 4 4.36v.84s-1.88 3.87-4 3.8v13h45.19A19.82 19.82 0 00477 132.96v-4.18h34a24.05 24.05 0 0124 24.05v116.51a26.72 26.72 0 010 41.75v.67h14v-58.69a.29.29 0 01.3-.29h4.7v-102.5a37.49 37.49 0 00-37.5-37.5H411.01v18zm15.14-.09a4.87 4.87 0 11-4.87 4.87 4.87 4.87 0 014.87-4.87z"
        fill="#3a3768"
      />
      <path
        d="M425.96 177.72c15.71 0 28.45 13.61 28.45 30.39s-12.74 30.39-28.45 30.39a27.73 27.73 0 01-22-11.05v84.33h91a27.47 27.47 0 01-10.69-21.53c0-15.61 13.57-28.26 30.32-28.26a31.45 31.45 0 0120.42 7.35V152.83a24.05 24.05 0 00-24-24.05h-34v4.18a19.82 19.82 0 01-19.81 19.82h-53.19v36a27.75 27.75 0 0121.95-11.06z"
        fill={color}
      />
      <path
        d="M412 139.78a4 4 0 004-3.8v-.84a5 5 0 00-4-4.36h-1v9z"
        fill="#e6e8ec"
      />
      <circle
        cx={562.3}
        cy={176.22}
        r={4.87}
        transform="rotate(-9.22 242.458 993.988)"
        fill="#e6e8ec"
      />
      <path
        d="M528.22 515.85v-10a16.71 16.71 0 000-19.64zM528.22 519.71h18.71v4.3h-18.71z"
        fill="#3a3768"
      />
      <path
        d="M520.67 512.69a8.34 8.34 0 00-3.91 4.77 7 7 0 001.05 6.55h10.41v-4.3h-4a30 30 0 004-3.86v-10a23.68 23.68 0 01-7.55 6.84z"
        fill={color}
      />
      <path d="M524.2 519.71h4v-3.86a30 30 0 01-4 3.86z" fill={color} />
      <path
        d="M531.41 496.05a17.07 17.07 0 00-3.19-9.82v19.63a17.11 17.11 0 003.19-9.81zM546.93 524.01v163.91a39 39 0 01-39 39h-105v-16h101.23a24.06 24.06 0 0024.06-24.06V524.01z"
        fill="#3a3768"
      />
      <path
        d="M516.76 517.46a8.34 8.34 0 013.91-4.77 23.68 23.68 0 007.55-6.83v-19.63c-4.61-6.63-13.72-11.15-24.22-11.15-15.15 0-27.42 9.39-27.42 21 0 5.46 2.73 10.43 7.19 14.16a27.63 27.63 0 005.59 3.57l.12.19a8.54 8.54 0 011.67 10h-88.22v82a27.41 27.41 0 0121.77-11c15.59 0 28.22 13.6 28.22 30.37s-12.63 30.38-28.22 30.38a27.41 27.41 0 01-21.77-11v66.19h101.23a24.06 24.06 0 0024.06-24V524.01h-10.38a7 7 0 01-1.08-6.55z"
        fill={color}
      />
      <path
        d="M842.18 309.8c5.58-2.51 9.71-6.74 11.12-12.16a15.35 15.35 0 00.38-2 17.83 17.83 0 00.64-1.91c1.41-5.44-.14-11.07-3.82-15.88l-7.31 28z"
        transform="translate(-135.16 -40.66)"
        fill="url(#ProductTeardown_svg__a)"
      />
      <path
        d="M1010.92 299.29c-1.14-6.69-22.26-21.18-22.26-21.18s-9.33-5-14.27-10.78c-3.16-3.68-4.15-3.64-4.45-3.14a1.5 1.5 0 00-.68-.23c-.2-.14-.39-.27-.57-.42a1.35 1.35 0 00-.79-1.37c-.24-.14-.48-.32-.72-.49-1.6-2.69-2.17-6.5-2.36-9.82-.24-4.19-5-3.14-6.63-2.67-1.12-2.1-2.21-4.28-3.24-6.46a11.85 11.85 0 001.13-2.25c2.94-6.39 2.3-13.72 3.58-20.48.92-4.89 2.84-10 2.46-14.76v-.35.07a12.65 12.65 0 00-.81-3.48c-.85-2.14-2.33-4-3-6.21-1.07-3.23-.39-6.79-1.28-10.06-1.11-4.14-4.61-7.34-8.57-9.17s-8.37-2.46-12.71-3c-10.85-1.36-22.38-2.17-32.28 2.39a5.8 5.8 0 01-3 .81 9.21 9.21 0 01-2.74-1.27c-2.66-1.32-6-.48-8.38 1.28s-4 4.3-5.57 6.76-3.29 5-5.75 6.61c-2.89 1.93-6.71 2.58-9 5.18a8.37 8.37 0 00-1.86 4.32v-.07a5.46 5.46 0 000 .57v2.1a27.3 27.3 0 001.93 7.1 9.88 9.88 0 002.62 4.46c3.48 2.83 9 .16 13.2 1.74.37.13.72.3 1.07.46 0 .16-.11.32-.16.49a33.19 33.19 0 00-1.35 9.41c0 18.78 15.59 34 34.82 34 .72 0 1.43 0 2.14-.08.1.37.21.75.3 1.11a36.87 36.87 0 011 12.72l-.21-1.86a9.22 9.22 0 00-1.45-.55 12.94 12.94 0 00-4.32-.66c-4.73-.06-11.85 1.84-19.45 11.06 0 0-9.7 5.39-12.55 6.69a1.34 1.34 0 00-.53.6s-12.97 19.59-14.31 27.04-3 16-3 16-3.24 9.66-5.33 13.94-4 8.36-4.18 10.22.76 5.94-3.24 8.54-5 9.66-5 9.66-2 1.88-4.83 4.26h-.1L854.69 338l1.87.47a2.4 2.4 0 002.46-.84 2.23 2.23 0 00.41-.83l2.11-8.12.85-3.23.17-.66 1.23-4.71-4.16-1-4.87-1.21L841 314.4l1.2-4.6 1-3.9 6.29-24.14 1-3.89c-4-5.18-10.37-9.39-18.2-11.34-15.1-3.75-29.72 2.35-32.66 13.62a15.35 15.35 0 00-.39 2 14.59 14.59 0 00-.63 1.9 16.08 16.08 0 00-.4 6q.06.49.15 1a20.58 20.58 0 003.83 8.57 27.32 27.32 0 004.67 4.85l.07.22a9.13 9.13 0 011.31 4v.62a9.2 9.2 0 01-1.2 1.68l-92.26-22.93-1 3.89L693 371.8a30.12 30.12 0 019-4.75 29.32 29.32 0 013.9-1l.47-.08a27.87 27.87 0 0111.18.46c11.66 2.9 19.72 12.83 21.22 24.51a29.81 29.81 0 01.25 4.45 31.36 31.36 0 01-.6 5.65c-5 15.18-20.36 24.35-35.28 20.64a28 28 0 01-18.9-16.15l-1 3.9-21.44 81.95 81.71 20.32.88-3.93h.13a27.15 27.15 0 01-5.64-21.62c0-.13.08-.25.13-.38.1-.29.21-.57.32-.85a27.55 27.55 0 012-3.95c.4-.65.82-1.28 1.27-1.89q.42-.57.87-1.11a28.41 28.41 0 014.89-4.66l.58-.42c.66-.47 1.34-.92 2-1.34.41-.24.83-.48 1.25-.7a32.43 32.43 0 0115.72-3.75 34.51 34.51 0 017.8 1A32.34 32.34 0 01795 481.51a29.23 29.23 0 011.64 2.8 27.38 27.38 0 012.83 9.14 25.89 25.89 0 01-.2 7.65 27.22 27.22 0 01-10.58 13.69l-1 3.76h.11l-.15.11-1 3.75 18.66 4.64L831.74 426c7.13-.83 10.78-4 10.78-4.46s8.57-5.21 13.32-6.51c2.36-.64 5.09-1.1 7.26-1.56-2.56 12.71-5 25-4.78 25.72.07.28.53-.16 1.23-1.12a5.4 5.4 0 00-.09 1.12c0 .19.27.05.62-.34l-.05.24s-14.84 28.71-16 32 .28 11.71 4.85 14.5a9.78 9.78 0 012.34 2.07l-.54 1.07c-1.7 3.45-3.21 7.29-2.94 9.68a13.11 13.11 0 01-2 8.64s-12.85 39.71-12.56 51.14-4.57 36.51-4.57 36.51-5.28 16.16-2.14 20.76 6.71 24.67 6.71 24.67 2.43 4.6 2.28 8.5 2.29 11 2.29 11l8 28.84s-.86 7.67 2.14 13.1 2.71 3.76 1.28 13.24 1.72 18.25 6.85 21c2 1.08 2.1 2.73 1.48 4.34-1.31-.51-2.4 2.2-3.05 4.39l-.66.63.44.11c-.28 1-.44 1.84-.44 1.84s-13.41 11.15-14.27 15.19-10.28 6.13-10.28 6.13-14.27 3.9-18 5.85a6.8 6.8 0 00-3.94 5.41 14.84 14.84 0 00.52 5.46c1.42 5.71 21.4 6.27 31 4.74s29.39-7.11 29.39-7.11 20.84-2 27-4.46 1.28-8.92 1.28-8.92v-.6c.15-2.33.58-10.78-.9-13-1.11-1.72-1.08-6-.92-8.72 4.17-7.5-4.78-30-4.78-30s1.71-22 .57-25.22-6-30.52-6-30.52-3-12.4-1.85-14.49-.72-8.09-.72-8.09-4.89-6.67-4.45-8.77-1.43-5.85-1.43-5.85 14.56-21.74 13.27-25.78.58-10.59.58-10.59 1.83-3.08 4-6.77c2.7-4.52 6-9.93 7.08-11.62 1.4-2.15 4.77-11.3 6.65-16.57.8-2.24 1.34-3.78 1.34-3.78s2.28 41 4.28 45.15 5 37.21 5 37.21a22.62 22.62 0 011.43 9.2c-.28 5.15 4.57 27.59 4.57 27.59s2.14 15.88.71 20.06-.28 35-.28 35-7.85 6-9.85 10.59.28 17.14.28 17.14l.92.43a26.43 26.43 0 00-1.63 5.42c-.28 2.65-4.57 14.64-4.14 16.31s-1.85 6.83-2.14 9.47-3.85 6.55-4.14 7.95a34.11 34.11 0 01-1.57 3.67 35 35 0 00-1.85 5.66c-1.43 5.86 15.55 6.83 15.55 6.83 25.12 4.6 29.69-14.21 29.69-14.21s3.14-16.72 4.28-18a2 2 0 00.19-1.59 21.2 21.2 0 00-3.62-7.87c-.8-.93-.85-3.32-.72-5.46a12.62 12.62 0 002.15-.4c10.13-2.92 6-19.79 6-19.79s6.85-11.14 6.85-15.46 2.43-17.56 2.43-17.56c8.71-15.61 5.28-53.51 6.71-56.58s-3-14.49-6.57-19.65-2.14-19.09 0-23.13-2.14-18-2.14-18 4.14-27 4-31.22 3.57-16.58 3.57-16.58 3.71-6.41 2.85-8.36 2.85-7 1.86-9.2.85-9.06 2.71-13.1c.95-2.07 2.13-7.77 3-12.84.1-.56.2-1.12.29-1.67 4.16 2.63 8 4.59 9.36 4.06 2.55-1-1.51-14-4.29-22.1.48-.36.68-.63.48-.75-1.71-1.12.19-6.14.19-6.14 10.09-5.94 6.66-10.4 3.43-13s-1.14-10-2.1-13 1.15-16.53 2.86-26.38a18.88 18.88 0 00-.05-6.46c1.83-2.79 3.72-5.71 5.38-8.41 5.7-9.29 17.88-53.51 17.88-53.51l-.08-.23c1.19-2.35 2.08-4.26 2.56-5.53 3.69-9.6-3.16-38.6-4.3-45.31zm-88.68-25.46l.26-.12v.21zm-181.84 233zm126.47 241.35a4.57 4.57 0 01-1.81-.36z"
        transform="translate(-135.16 -40.66)"
        fill="url(#ProductTeardown_svg__b)"
      />
      <path
        d="M625.99 385.23c8.23 3.12 27.36 3.46 35.86 3.46h4.18l5.45-11.1-5.45-9.25s-5-1.38-11.64-2.58c-9.8-1.76-23.21-3.14-29.6.82-10.72 6.63-9.52 14.58 1.2 18.65z"
        fill="#fec2be"
      />
      <path
        d="M661.84 388.69h4.18l5.45-11.1-5.44-9.25s-5-1.38-11.64-2.58c5.39 3.96 18.35 12.58 7.45 22.93z"
        opacity={0.1}
      />
      <path
        d="M752.11 252.46l-2.4-2.78s-12.39 19.6-13.69 27-3 15.9-3 15.9-3.14 9.62-5.18 13.87-3.88 8.32-4.06 10.17.74 5.92-3.15 8.51-4.8 9.62-4.8 9.62-14.06 13.68-21.46 14-28.66 4.07-27.92 7.77-8.87 5.91-12.76 6.84 25 12 8.14 26.26c0 0 10.72 2.22 11.83 4.8s12.39-1.47 12.39-1.47 2.41-5.74 10.73-6.11 12.57-4.07 12.57-4.62 8.32-5.18 13-6.47 10.72-1.85 10.91-3.15S761 252.41 761 252.41z"
        fill="#4c4981"
      />
      <path
        d="M752.11 252.46l-2.4-2.78s-12.39 19.6-13.69 27-3 15.9-3 15.9-3.14 9.62-5.18 13.87-3.88 8.32-4.06 10.17.74 5.92-3.15 8.51-4.8 9.62-4.8 9.62-14.06 13.68-21.46 14-28.66 4.07-27.92 7.77-8.87 5.91-12.76 6.84 25 12 8.14 26.26c0 0 10.72 2.22 11.83 4.8s12.39-1.47 12.39-1.47 2.41-5.74 10.73-6.11 12.57-4.07 12.57-4.62 8.32-5.18 13-6.47 10.72-1.85 10.91-3.15S761 252.41 761 252.41z"
        opacity={0.05}
      />
      <path
        d="M780.91 765.61c24.41 4.58 28.85-14.15 28.85-14.15s3.05-16.64 4.16-17.89a2 2 0 00.19-1.58 21.77 21.77 0 00-3.52-7.84c-1.52-1.8-.28-9.29-.28-9.29l-28.29-7.21s-2.5 5.68-2.77 8.32-4.44 14.56-4 16.23-1.8 6.79-2.08 9.43-3.74 6.52-4 7.9a32.69 32.69 0 01-1.53 3.66 36.63 36.63 0 00-1.8 5.63c-1.43 5.82 15.07 6.79 15.07 6.79z"
        fill="#ca8496"
      />
      <path
        d="M780.91 765.61c24.41 4.58 28.85-14.15 28.85-14.15s3.05-16.64 4.16-17.89a2 2 0 00.19-1.58l-5.88 16.84s-4.85 10.12-22.88 8.6c-10.26-.87-15.31-2.77-17.76-4.25a36.63 36.63 0 00-1.8 5.63c-1.38 5.83 15.12 6.8 15.12 6.8z"
        opacity={0.1}
      />
      <path d="M799.91 739.26s-6.1.14-6.52-4.85z" opacity={0.1} />
      <path
        fill={color}
        d="M610.15 467.07l3.87.99-.85 3.93-3.59-.91.57-4.01z"
      />
      <path
        opacity={0.1}
        d="M610.15 467.07l3.87.99-.85 3.93-3.59-.91.57-4.01z"
      />
      <path
        fill="#3a3768"
        d="M723.812 288.78l1.194-4.69 4.04 1.029-1.193 4.69zM705.67 284.158l1.193-4.69 13.403 3.41-1.194 4.69z"
      />
      <path
        fill="#3a3768"
        d="M719.065 287.58l1.193-4.69 4.74 1.206-1.194 4.69z"
      />
      <path
        d="M707.07 278.86c-.32.15-.63.31-.94.44l.78.2-1.2 4.69-5.93-1.51a7 7 0 01.61-6.59 8.27 8.27 0 015-3.66 26 26 0 003.71-1.38z"
        fill={color}
      />
      <path
        d="M721.22 299.11l1.81.47a2.29 2.29 0 002.79-1.66l2.02-8.08-4-1zM719.84 258.95c-1.38 5.4-5.39 9.61-10.81 12.1l7.1-27.9c3.6 4.79 5.11 10.4 3.71 15.8zM718.7 298.47a2.29 2.29 0 01-1.65-2.78l2.06-8.09-13.4-3.41-40.87 160.54a26.66 26.66 0 01-8.71 34.22l-.95 3.74 18.13 4.65 47.91-188.19z"
        fill="#3a3768"
      />
      <path
        d="M717.05 295.69a2.29 2.29 0 001.65 2.78l2.52.64 2.62-10.3-4.73-1.21z"
        fill="#3a3768"
      />
      <path
        d="M700.38 276.09a8.35 8.35 0 015-3.66 26.64 26.64 0 003.7-1.38l7.11-27.9a31.79 31.79 0 00-17.69-11.28c-14.67-3.74-28.89 2.33-31.74 13.55-1.35 5.29.07 10.78 3.48 15.5a27 27 0 004.53 4.83l.07.22a8.54 8.54 0 01-.86 10.14l-89.66-22.83-20.23 79.48a27.44 27.44 0 0123.75-5.34c15.11 3.85 24 20.15 19.86 36.4s-19.7 26.32-34.81 22.52a27.43 27.43 0 01-18.37-16.07l-20.77 81.56 79.42 20.21a27.38 27.38 0 01-5.08-23.48c3.85-15.1 20.14-24 36.4-19.86a31.27 31.27 0 0120.35 16.03l40.87-160.54-5.87-1.51a7 7 0 01.54-6.59z"
        fill={color}
      />
      <path d="M706.9 279.5l.17-.64c-.31.15-.62.31-.94.45z" fill={color} />
      <g opacity={0.1}>
        <path d="M725.03 284.12l-4.73-1.21-13.39-3.41.17-.64 2-7.81a26 26 0 01-3.71 1.38 8.27 8.27 0 00-5 3.66 9.67 9.67 0 00-.74 1.58 9.59 9.59 0 01.73-1.58 8.35 8.35 0 015-3.66 26.64 26.64 0 003.7-1.38l7.11-27.9a31.79 31.79 0 00-17.69-11.28c-14.67-3.74-28.89 2.33-31.74 13.55-1.35 5.29.07 10.78 3.48 15.5a27 27 0 004.53 4.83l.07.22a8.54 8.54 0 01-.86 10.14l-89.66-22.83-20.23 79.48a27.44 27.44 0 0123.77-5.34c15.11 3.85 24 20.15 19.86 36.4s-19.7 26.32-34.81 22.52a27.43 27.43 0 01-18.37-16.07l-20.77 81.56 79.42 20.21a27.38 27.38 0 01-5.08-23.48c3.85-15.1 20.14-24 36.4-19.86a31.27 31.27 0 0120.35 16.03 26.66 26.66 0 01-8.71 34.22l-.95 3.74 18.13 4.65 47.91-188.19 1.81.47a2.29 2.29 0 002.79-1.66l2.02-8.12 1.19-4.69zm-18.44-5c-.15.07-.3.15-.45.21zm-6.8 3.59l5.93 1.51z" />
        <path d="M719.84 258.95c1.37-5.4-.14-11-3.71-15.8l-7.1 27.9c5.45-2.49 9.46-6.71 10.81-12.1z" />
      </g>
      <path
        fill="#3a3768"
        d="M724.793 284.914l1.194-4.69 4.041 1.028-1.194 4.69zM706.651 280.29l1.194-4.69 13.402 3.412-1.193 4.69z"
      />
      <path
        fill="#3a3768"
        d="M720.049 283.693l1.194-4.69 4.738 1.206-1.193 4.69z"
      />
      <path
        d="M708.06 274.98l-.94.45.77.19-1.19 4.72-5.93-1.51a6.94 6.94 0 01.6-6.59 8.32 8.32 0 015-3.66 25.87 25.87 0 003.7-1.38z"
        fill={color}
      />
      <path
        d="M722.2 295.24l1.82.46a2.29 2.29 0 002.82-1.66l2.06-8.08-4-1zM720.84 255.08c-1.37 5.39-5.38 9.6-10.81 12.09l7.11-27.9c3.58 4.79 5.09 10.4 3.7 15.81z"
        fill="#3a3768"
      />
      <path
        d="M719.69 294.6a2.29 2.29 0 01-1.65-2.79l2-8.08-13.34-3.39-40.86 160.52a26.62 26.62 0 01-8.71 34.21l-.95 3.74 18.14 4.62 47.9-188.19z"
        fill="#3a3768"
      />
      <path
        d="M718.04 291.81a2.29 2.29 0 001.65 2.79l2.51.64 2.64-10.31-4.74-1.2z"
        fill="#3a3768"
      />
      <path
        d="M701.37 272.21a8.32 8.32 0 015-3.66 25.87 25.87 0 003.7-1.38l7.1-27.9a31.78 31.78 0 00-17.68-11.28c-14.68-3.73-28.89 2.33-31.75 13.56-1.34 5.28.07 10.77 3.49 15.49a27.06 27.06 0 004.53 4.84l.07.21a8.56 8.56 0 01-.86 10.14l-89.67-22.82-20.26 79.47a27.42 27.42 0 0123.8-5.33c15.1 3.84 24 20.14 19.86 36.4s-19.71 26.31-34.86 22.47a27.46 27.46 0 01-18.34-16.08l-20.76 81.56 79.41 20.22a27.38 27.38 0 01-5.07-23.48c3.84-15.11 20.14-24 36.4-19.86a31.2 31.2 0 0120.36 16.08l40.86-160.52-5.93-1.51a7 7 0 01.6-6.62z"
        fill={color}
      />
      <path d="M707.89 275.63l.16-.65c-.31.15-.62.31-.93.45z" fill={color} />
      <path
        d="M693.84 575.34c3 4.57 6.52 24.55 6.52 24.55s2.36 4.57 2.22 8.46 2.22 11 2.22 11l7.77 28.71s-.84 7.63 2.08 13 2.63 3.74 1.25 13.17 1.66 18.17 6.65 21-2.22 9.29-2.22 9.29 31.9 8.6 38.56 3.33-3.47-31.35-3.47-31.35 1.67-21.91.56-25.1-5.83-30.37-5.83-30.37-2.91-12.35-1.8-14.43-.69-8-.69-8-4.72-6.66-4.3-8.74-1.39-5.82-1.39-5.82 14.12-21.7 12.87-25.77.55-10.54.55-10.54l3.94-6.74c2.63-4.5 5.81-9.89 6.88-11.57 1.36-2.14 4.64-11.24 6.47-16.49l1.3-3.76s2.22 40.78 4.16 44.94 4.85 37 4.85 37a23 23 0 011.39 9.15c-.28 5.13 4.44 27.46 4.44 27.46s2.08 15.81.69 20-.28 34.82-.28 34.82-7.63 6-9.57 10.54.28 17 .28 17 22.19 11.1 32 8.19 5.82-19.7 5.82-19.7 6.66-11.09 6.66-15.39 2.42-17.43 2.42-17.43c8.46-15.53 5.13-53.25 6.52-56.3s-2.92-14.43-6.38-19.56-2.08-19 0-23-2.14-17.91-2.14-17.91 4-26.91 3.88-31.07 3.47-16.5 3.47-16.5 3.6-6.38 2.77-8.33 2.77-6.93 1.8-9.15.84-9 2.64-13c.92-2.06 2.07-7.74 3-12.77.85-4.79 1.48-9 1.48-9l-22.89-18.45-57.14-15-21.49-6.93-20.95 33a83.89 83.89 0 00-4.07 7.43c-1.65 3.43-3.12 7.25-2.86 9.63a13.31 13.31 0 01-1.94 8.6s-12.49 39.52-12.21 50.9-4.44 36.33-4.44 36.33-5.13 16.08-2.05 20.67z"
        fill="#ceddf9"
      />
      <path
        d="M778.3 253.84c.88-.36 61.21-25.28 52.9-30.23-4.93-2.94-11-15.4-15.16-25.15-2.9-6.81-4.87-12.3-4.87-12.3s-48.42-8.6-31.09 21.08a55 55 0 016.11 14.62c4.94 20.22-7.49 31.61-7.89 31.98z"
        fill="#fec2be"
      />
      <path
        d="M780.08 207.24a55 55 0 016.11 14.62 33.81 33.81 0 0028.59-20.09 32.2 32.2 0 001.26-3.31c-2.9-6.81-4.87-12.3-4.87-12.3s-48.42-8.6-31.09 21.08z"
        opacity={0.1}
      />
      <path
        d="M749.98 186.99a33.83 33.83 0 101.32-9.37 33.84 33.84 0 00-1.32 9.37z"
        fill="#fec2be"
      />
      <path
        d="M717.34 449.2c3.54 3.22 4.9 9.35 4.9 9.35s16.65 11.37 15.54 4.16 8.6-36.34 8.6-36.34l-1.11 39.67s53.25-2.5 57.14-6.38 26.63-11.32 26.63-11.32 7 5.59 13.36 9.83c.85-4.79 1.48-9 1.48-9l-22.89-18.45-57.14-15-21.49-6.93-20.95 33a83.89 83.89 0 00-4.07 7.41z"
        opacity={0.1}
      />
      <path
        d="M715.59 446.07c4.44 2.77 6.1 10.26 6.1 10.26s16.64 11.37 15.53 4.16 8.6-36.34 8.6-36.34l-1.11 39.67s53.26-2.48 57.13-6.38 26.63-11.37 26.63-11.37 19.7 15.81 23.3 14.42-6.38-28.29-6.38-28.29l-10.25-157.55s2.77-46.88-1.39-48.55a6 6 0 01-1.75-1.09c-2.74-2.46-3.56-7.46-3.8-11.66-.27-5-6.93-2.5-6.93-2.5l3.88 5-34.37 20.9-.3.18a38 38 0 00-4.13-1.87c-3-1.17-7.09-2.27-9.74-1.18a9.42 9.42 0 00-3.64 3.28 41.22 41.22 0 00-4.68 9.48l-12.45 21.07s-6.38 28-6.38 29.13-1.94 26.63-4.16 29.4-4.44 16.64-3.61 20.8-1.39 19.7-1.39 19.7c-9.15 7.49-13.86 33-13.86 33s-14.46 28.6-15.6 31.9.31 11.7 4.75 14.43z"
        fill="#fff"
      />
      <path
        d="M790.78 237.85c3.37 5 13.11 12 13.11 12L832 226.1c-2.74-2.46-3.56-7.46-3.8-11.67-.27-5-6.93-2.49-6.93-2.49l.81 1a4.48 4.48 0 01-1.21 6.57z"
        opacity={0.1}
      />
      <path
        d="M790.78 236.74c3.37 5 13.11 12 13.11 12L832 224.99c-2.74-2.46-3.56-7.46-3.8-11.66-.27-5-6.93-2.5-6.93-2.5l.81 1a4.47 4.47 0 01-1.21 6.56z"
        fill="#fff"
      />
      <path
        d="M777.78 240.48c3.63 4.34 8.78 9.27 8.54 6.8s3.07-7.92 5.18-10.36a15.35 15.35 0 00-10.08.28 9.34 9.34 0 00-3.64 3.28z"
        opacity={0.1}
      />
      <path
        d="M777.23 238.81c3.63 4.35 8.77 9.27 8.53 6.81s2.73-6.47 4.84-8.91c-3-1.17-7.08-2.27-9.74-1.17a9.3 9.3 0 00-3.63 3.27z"
        fill="#fff"
      />
      <circle cx={786.32} cy={259.67} r={2.22} fill="#ff718d" />
      <circle cx={769.49} cy={319.58} r={2.22} fill="#ff718d" />
      <circle cx={750.45} cy={380.24} r={2.22} fill="#ff718d" />
      <circle cx={749.89} cy={446.25} r={2.22} fill="#ff718d" />
      <circle cx={776.52} cy={287.96} r={2.22} fill="#ff718d" />
      <circle cx={761.54} cy={349.54} r={2.22} fill="#ff718d" />
      <circle cx={746.93} cy={410.01} r={2.22} fill="#ff718d" />
      <circle cx={750.26} cy={453.65} r={2.22} fill="#ff718d" />
      <path
        d="M832 226.34s-.37-3.33 4.43 2.41 13.87 10.72 13.87 10.72 20.53 14.43 21.64 21.08 7.76 35.51 4.25 45.12-30.35 55.67-30.35 55.67 7 8.33 5.37 18.13-3.7 23.3-2.78 26.26-1.11 10.35 2 12.94 6.47 7-3.33 12.94c0 0-1.85 5-.19 6.11s-24.59 12.57-35 6.47-29-54.92-29.4-65.83 5.73-47 9.06-55.48 13.32-41.61 17.57-49S832 226.34 832 226.34z"
        opacity={0.1}
      />
      <path
        d="M833.1 226.34s-.37-3.33 4.44 2.41 13.87 10.72 13.87 10.72 20.53 14.43 21.64 21.08 7.76 35.51 4.25 45.12-30.33 55.67-30.33 55.67 7 8.33 5.37 18.13-3.7 23.3-2.78 26.26-1.11 10.35 2 12.94 6.47 7-3.33 12.94c0 0-1.85 5-.19 6.11s-24.59 12.57-35 6.47-29-54.92-29.4-65.83 5.73-47 9.06-55.48 13.32-41.61 17.57-49 22.83-47.54 22.83-47.54z"
        fill="#4c4981"
      />
      <path
        d="M840.5 257.82s-15.9 17.57-15.35 29.22c0 0-.18-18.87 15.35-29.22zM818.5 286.67c0 .55-10.73 40.49-10.17 45.49s-3.15 19.78-3.15 19.78l-5-1.29s3.88-20.53 4.62-28.11 13.7-35.87 13.7-35.87zM814.24 400.58c.37.55 25.34 28.84 18.31 30.88s-18.31-30.88-18.31-30.88zM834.77 393.34c.55.37 10 20.34 11.09 15s-8.13 14.61-9.61-.18zM786.84 232.67s-10.31-6.29-23.26 9.8c0 0-9.43 5.36-12.2 6.66s-5.92 35.69-5.92 35.69-6.1 14.79-4.44 23.3-4.8 37.72-4.8 37.72-10.74 52.5-10.38 54 10.91-16.46 10.73-25.34 8.87-36.61 10.17-38.28 10.17-49.18 10.17-49.18 7.21-20.16 11.83-26.82 10.36-19.23 12.76-21.45a24.44 24.44 0 015.73-3.7z"
        opacity={0.1}
      />
      <path
        d="M786.97 232.67s-11.56-6.29-24.5 9.8c0 0-9.44 5.36-12.21 6.66s-5.92 35.69-5.92 35.69-6.1 14.79-4.44 23.3-4.8 37.72-4.8 37.72-10.73 52.52-10.36 54 10.91-16.46 10.73-25.34 8.87-36.61 10.17-38.28 10.2-49.18 10.2-49.18 7.21-20.16 11.83-26.82 10.36-19.23 12.76-21.45 6.84-3.7 6.84-3.7z"
        fill="#4c4981"
      />
      <path
        d="M736.21 348.24s-22-14.42-32.64-7.3-28 17.2-10.91 24.5 40.77 5.9 40.77 5.9z"
        fill="#fec2be"
      />
      <path
        d="M751.51 487.4c3.28 7 6 42.38 7.82 53.59 2.63-4.5 5.81-9.89 6.88-11.57 1.36-2.14 4.64-11.24 6.47-16.49-2.09-5.08-7.86-19.64-7.86-25 0-6.52-10.54-14.7-10.54-14.7s-6.65 5.85-2.77 14.17zM822.24 595.99s-24.41-10.4-31.62-3 31.62 3 31.62 3zM808.51 600.15s24.69 13.87 16.23 16.19-16.23-16.19-16.23-16.19zM734.73 588.09s10.54.69 6.52 2.77-6.52-2.77-6.52-2.77zM721.55 591.28c.14.69 30.65 10.54 24.69 15s-24.69-15-24.69-15zM818.63 676.16c-4.57-.7-30.09-12.49-20.11-4s20.11 4 20.11 4zM806.01 685.45s-2.22 8.6-10.68 7.49 10.68-7.49 10.68-7.49zM813.09 702.92c-1.53-.41-19.7-8.73-20.11-4.85s17.33 10.68 18.72 8.6a7.44 7.44 0 001.39-3.75zM754.28 692.94c-2.22-.14-23-6.8-27.18-.84zM735.42 696.82s-3.61-3.19-7.21-1.53 7.21 1.53 7.21 1.53zM781.47 731.22a6.21 6.21 0 01-4.72 4.85z"
        opacity={0.1}
      />
      <path
        d="M675.64 744.25c1.39 5.69 20.81 6.24 30.1 4.72s28.57-7.08 28.57-7.08 20.25-1.94 26.21-4.43 1.25-8.88 1.25-8.88v-.6c.14-2.32.56-10.73-.87-13-1.66-2.64-.69-11.24-.69-11.24s-28.71 5.55-29.27 2.92-5-6.38-7.07-7.21-3.61 6.93-3.61 6.93-13 11.1-13.87 15.12-10 6.1-10 6.1-13.87 3.88-17.48 5.82a6.71 6.71 0 00-3.82 5.39 15 15 0 00.55 5.44z"
        fill="#ca8496"
      />
      <path
        d="M675.64 744.25c1.39 5.69 20.81 6.24 30.1 4.72s28.57-7.08 28.57-7.08 20.25-1.94 26.21-4.43 1.25-8.88 1.25-8.88v-.6l-29 6.43s-14.29 6.1-23.44 6.1c-8 0-25.9 3.27-34.2-1.69a15 15 0 00.51 5.43z"
        opacity={0.1}
      />
      <path
        d="M714.89 722.34s1.39 9.15 6.94 12.2zM751.3 177.62a9.92 9.92 0 001.65.69c2.6.7 5.14-1.06 7.45-2.46s5.5-2.44 7.5-.62c2.61 2.37.72 7.43 3.41 9.72 1.7 1.45 4.4.95 6.29 2.14s2.46 3.8 2.94 6.05 1.44 4.82 3.64 5.48 4.25-.79 6.42-.71c.45 0 1 .07 1.28-.25a1.35 1.35 0 00.21-1 21.37 21.37 0 01.71-8c.89-2.56 3-4.87 5.64-5.28 3.89-.6 7.16 2.81 9.45 6a98.28 98.28 0 016.56 10.56 6.78 6.78 0 01.33.73 33.84 33.84 0 10-63.48-23z"
        opacity={0.1}
      />
      <path
        d="M807.89 188.82c-2.29-3.22-5.56-6.62-9.46-6-2.67.41-4.73 2.72-5.63 5.27a21.18 21.18 0 00-.7 8 1.4 1.4 0 01-.22 1c-.31.33-.83.28-1.28.26-2.17-.08-4.33 1.33-6.42.71s-3.16-3.23-3.64-5.48-1-4.82-2.94-6.05-4.59-.69-6.29-2.15c-2.69-2.28-.79-7.35-3.41-9.72-2-1.81-5.19-.77-7.5.63s-4.85 3.15-7.46 2.45c-.88-.24-1.67-.74-2.53-1.07-4.11-1.57-9.44 1.09-12.82-1.73a9.91 9.91 0 01-2.56-4.43 28.19 28.19 0 01-1.87-7.07 9.45 9.45 0 011.88-6.89c2.2-2.59 5.92-3.24 8.73-5.15 2.39-1.64 4-4.13 5.58-6.58s3.11-5 5.42-6.73 5.55-2.59 8.13-1.28a9 9 0 002.67 1.27 5.52 5.52 0 002.95-.81c9.62-4.53 20.82-3.73 31.37-2.38 4.22.54 8.5 1.17 12.35 3s7.25 5 8.33 9.12c.86 3.26.2 6.81 1.24 10 .7 2.18 2.14 4 3 6.19 2.25 5.85-.44 12.27-1.58 18.43-1.24 6.73-.62 14-3.48 20.38-.56 1.25-1.19 3.44-2.6 2.62-1-.61-2.06-4.16-2.66-5.27a97.17 97.17 0 00-6.6-10.54z"
        fill="#9a5e7f"
      />
      <path
        d="M868.84 297.21l5 14.24s-11.84 44-17.39 53.25-13.68 21.08-13.68 21.08-13.68 6.85-29.59 3.7-62.34-11.46-62.34-11.46-3.89.74-5.92-2.22-12.6-4.46-12.6-4.46-12.2-17.75 2.78-25.15c0 0 1.85 4.07 9.8 1.3s10.35 2.21 10.35 2.21 13 2.59 20.16 1.67 25.15-1.3 27-2.78a2.38 2.38 0 013.33.19s4.43-1.66 5.91-3.33 3.52 1.85 3.52 1.85 2.59-1.48 1.85-3.33 2.4-8.87 2.4-8.87 1.48-4.63.56-8.33 4.62-17 4.62-17a23.53 23.53 0 00-.74-6.66c-.93-3.32 7-10 7-10s7.76-37.73 24.22-25.34 13.76 29.44 13.76 29.44z"
        opacity={0.1}
      />
      <path
        d="M869.9 297.21l5 14.24s-11.84 44-17.39 53.25-13.67 21.08-13.67 21.08-13.68 6.85-29.59 3.7-62.32-11.46-62.32-11.46-3.88.74-5.91-2.22-12.59-4.46-12.59-4.46-12.2-17.75 2.78-25.15c0 0 1.85 4.07 9.8 1.3s10.35 2.21 10.35 2.21 13 2.59 20.16 1.67 25.15-1.3 27-2.78a2.38 2.38 0 013.33.19s4.43-1.66 5.91-3.33 3.52 1.85 3.52 1.85 2.59-1.48 1.85-3.33 2.4-8.87 2.4-8.87 1.48-4.63.55-8.33 4.63-17 4.63-17a23.53 23.53 0 00-.74-6.66c-.93-3.32 7-10 7-10s7.76-37.73 24.22-25.34 13.71 29.44 13.71 29.44z"
        fill="#4c4981"
      />
      <path
        d="M749.71 356.75c.18 1.3 4.25 6.47 2.77 7.4s-3.88.37-1.66 3.33 2 7.39.55 6.84-3.88-7.21-3.88-9.8 2.22-7.77 2.22-7.77zM804.63 353.79s1.11 12.95 10.21 16.65-10.21-16.65-10.21-16.65zM823.49 349.34c.55.19 12.94 6.85 7.4 10.73s-7.4-10.73-7.4-10.73zM824.23 340.11s18.12 3.7 12 6.84-12-6.84-12-6.84z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M792.84 184.92c.9-2.55 3-4.86 5.63-5.27 3.9-.6 7.17 2.81 9.46 6a98.28 98.28 0 016.56 10.56c.6 1.11 1.62 4.65 2.66 5.26 1.41.83 2-1.36 2.6-2.61 2.86-6.36 2.24-13.65 3.48-20.38.73-3.93 2.08-8 2.38-11.9.43 4.84-1.47 9.93-2.38 14.85-1.24 6.73-.62 14-3.48 20.39-.56 1.25-1.19 3.44-2.6 2.61-1-.61-2.06-4.15-2.66-5.26a98.28 98.28 0 00-6.56-10.56c-2.29-3.21-5.56-6.62-9.46-6-2.67.41-4.73 2.72-5.63 5.27a14.67 14.67 0 00-.74 4.16 19.36 19.36 0 01.74-7.12zM735.03 167.34a9.89 9.89 0 002.56 4.44c3.38 2.82 8.71.16 12.82 1.73.86.32 1.65.83 2.53 1.07 2.61.69 5.16-1.06 7.46-2.46s5.51-2.43 7.5-.62c2.62 2.37.72 7.43 3.41 9.72 1.7 1.45 4.4 1 6.29 2.15s2.46 3.79 2.94 6 1.43 4.82 3.64 5.48 4.25-.78 6.42-.7c.45 0 1 .07 1.28-.26a.94.94 0 00.15-.28c0 .75 0 1.49.07 2.23a1.41 1.41 0 01-.22 1c-.31.32-.83.27-1.28.25-2.17-.07-4.33 1.33-6.42.71s-3.16-3.22-3.64-5.48-1-4.82-2.94-6-4.59-.7-6.29-2.15c-2.69-2.29-.79-7.36-3.41-9.72-2-1.82-5.19-.78-7.5.62s-4.85 3.15-7.46 2.46c-.88-.24-1.67-.75-2.53-1.07-4.11-1.57-9.44 1.09-12.82-1.73a9.94 9.94 0 01-2.56-4.44 28.22 28.22 0 01-1.87-7.06 11.43 11.43 0 01.06-2.48 29.75 29.75 0 001.81 6.59z" />
      </g>
      <path
        d="M99.78 726.58s-42.28-2.55-37.3 27.07c0 0-1 5.24 3.76 7.62 0 0 .07-2.2 4.34-1.46a19.9 19.9 0 004.59.23 9.56 9.56 0 005.61-2.32s11.89-4.91 16.51-24.34c0 0 3.42-4.23 3.28-5.32l-7.13 3s2.44 5.15.52 9.43c0 0-.23-9.24-1.6-9-.28 0-3.71 1.78-3.71 1.78s4.2 9 1 15.49c0 0 1.2-11.05-2.34-14.84l-5 2.93s4.9 9.26 1.58 16.82c0 0 .85-11.59-2.64-16.1l-4.55 3.55s4.61 9.12 1.8 15.39c0 0-.37-13.49-2.78-14.51 0 0-4 3.51-4.59 5 0 0 3.15 6.63 1.19 10.13 0 0-1.2-9-2.18-9 0 0-4 5.95-4.38 10 0 0 .17-6.07 3.42-10.61a11.91 11.91 0 00-6.07 3.15s.61-4.21 7.05-4.58c0 0 3.28-4.52 4.15-4.79 0 0-6.4-.54-10.28 1.18 0 0 3.42-4 11.46-2.16l4.49-3.67s-8.43-1.15-12 .12c0 0 4.11-3.51 13.21-.95l4.89-2.93s-7.18-1.55-11.46-1c0 0 4.51-2.43 12.9.21l3.49-1.57s-5.26-1-6.8-1.2-1.63-.59-1.63-.59a18.26 18.26 0 019.89 1.1s7.43-2.8 7.31-3.26z"
        fill={color}
      />
      <ellipse
        cx={70.66}
        cy={763.85}
        rx={29.92}
        ry={5.06}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M180.84 648.51s-23.84-1.44-21 15.27a4.08 4.08 0 002.12 4.29s0-1.24 2.45-.82a11.73 11.73 0 002.59.13 5.47 5.47 0 003.16-1.31s6.68-2.73 9.32-13.73c0 0 1.93-2.39 1.85-3l-4 1.71s1.37 2.91.29 5.32c0 0-.13-5.21-.9-5.09-.16 0-2.09 1-2.09 1s2.36 5 .58 8.73c0 0 .67-6.23-1.32-8.37l-2.85 1.7s2.76 5.22.89 9.48c0 0 .48-6.54-1.49-9.08l-2.56 2s2.59 5.15 1 8.68c0 0-.21-7.61-1.57-8.18a16 16 0 00-2.59 2.79s1.78 3.74.68 5.71c0 0-.68-5.07-1.23-5.09 0 0-2.24 3.35-2.47 5.66a12.2 12.2 0 011.92-6 6.78 6.78 0 00-3.42 1.78s.35-2.38 4-2.58c0 0 1.84-2.55 2.34-2.7 0 0-3.61-.31-5.8.66 0 0 1.93-2.24 6.46-1.22l2.53-2.07s-4.75-.65-6.76.07c0 0 2.32-2 7.45-.54l2.75-1.64a24.71 24.71 0 00-6.46-.56s2.55-1.38 7.27.11l2-.88s-3-.59-3.83-.68-.92-.33-.92-.33a10.32 10.32 0 015.58.62s4.14-1.58 4.03-1.84z"
        fill={color}
      />
      <ellipse
        cx={164.46}
        cy={669.52}
        rx={16.87}
        ry={2.85}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M40.19 663.01s-28.78-1.74-25.35 18.43a4.92 4.92 0 002.56 5.18s0-1.5 2.95-1a13.14 13.14 0 003.13.15 6.46 6.46 0 003.82-1.58s8.09-3.34 11.24-16.56c0 0 2.32-2.88 2.23-3.62l-4.93 2.08s1.65 3.5.35 6.41c0 0-.16-6.28-1.09-6.13-.19 0-2.52 1.21-2.52 1.21s2.85 6.1.7 10.54c0 0 .81-7.52-1.6-10.1l-3.41 2s3.33 6.3 1.07 11.44c0 0 .58-7.89-1.79-11l-3.1 2.42s3.13 6.21 1.22 10.48c0 0-.25-9.19-1.89-9.88 0 0-2.71 2.39-3.13 3.37 0 0 2.15 4.51.82 6.89 0 0-.82-6.12-1.49-6.15 0 0-2.7 4.06-3 6.84a14.75 14.75 0 012.33-7.22 8.09 8.09 0 00-4.14 2.14s.42-2.87 4.81-3.12c0 0 2.23-3.07 2.82-3.26 0 0-4.35-.37-7 .8 0 0 2.33-2.7 7.8-1.47l3.06-2.5s-5.74-.78-8.17.09c0 0 2.8-2.4 9-.65l3.33-2s-4.89-1.06-7.8-.68c0 0 3.07-1.66 8.78.14l2.38-1.07s-3.58-.7-4.63-.81-1.11-.4-1.11-.4a12.36 12.36 0 016.73.74s5.11-1.82 5.02-2.15z"
        fill={color}
      />
      <ellipse
        cx={20.37}
        cy={688.38}
        rx={20.37}
        ry={3.44}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={607.72}
        cy={813.62}
        rx={29.92}
        ry={5.06}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M587.63 790.12s17.07-.53 22.21-4.19 26.25-8 27.53-2.16 25.65 29.21 6.38 29.37-44.77-3-49.91-6.13-6.21-16.89-6.21-16.89z"
        fill="#a8a8a8"
      />
      <path
        d="M644.09 811.09c-19.27.16-44.77-3-49.9-6.12-3.91-2.39-5.47-10.93-6-14.87h-.57s1.08 13.76 6.21 16.89 30.64 6.28 49.91 6.13c5.56 0 7.48-2 7.38-5-.76 1.83-2.89 2.94-7.03 2.97z"
        opacity={0.2}
      />
    </svg>
  );
};

SvgProductTeardown.propTypes = {
  color: PropTypes.string
};
SvgProductTeardown.defaultProps = {
  color: "primary"
};
const MemoSvgProductTeardown = React.memo(SvgProductTeardown);
export default MemoSvgProductTeardown;
