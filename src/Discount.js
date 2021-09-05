import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDiscount = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1143 663.73"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Discount_svg__a"
          x1={596}
          y1={757.78}
          x2={596}
          y2={598.14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <g opacity={0.1}>
        <ellipse cx={840.37} cy={625.03} rx={22.09} ry={28.91} fill="#3f3d56" />
        <path
          d="M857.85 501.35a34.83 34.83 0 004.65-17.67c0-16-9.89-28.91-22.09-28.91s-22.08 12.94-22.08 28.91a34.83 34.83 0 004.61 17.67 36.15 36.15 0 000 35.33 36.17 36.17 0 000 35.34 34.83 34.83 0 00-4.61 17.67c0 16 9.89 28.91 22.08 28.91s22.09-12.94 22.09-28.91a34.83 34.83 0 00-4.61-17.67 36.17 36.17 0 000-35.34 36.15 36.15 0 000-35.33z"
          fill="#3f3d56"
        />
        <ellipse cx={840.37} cy={448.35} rx={22.09} ry={28.91} fill="#3f3d56" />
        <ellipse cx={840.37} cy={413.01} rx={22.09} ry={28.91} fill="#3f3d56" />
        <path
          d="M923.05 171.19a106.47 106.47 0 008.22-12.11l-58-9.53 62.77.47a106 106 0 002-83.82l-84.22 43.66L931.5 52.8a105.8 105.8 0 10-174.75 118.39 106 106 0 00-12.06 19.29l75.33 39.14-80.32-27a105.8 105.8 0 0017 99.34 105.79 105.79 0 10166.3 0 105.79 105.79 0 000-130.81z"
          fill={color}
        />
        <path
          d="M734.11 236.6a105.31 105.31 0 0022.64 65.4 105.79 105.79 0 10166.3 0c14.18-18-188.94-77.28-188.94-65.4z"
          opacity={0.1}
        />
      </g>
      <g opacity={0.1}>
        <ellipse cx={220.81} cy={605.42} rx={13.44} ry={17.6} fill="#3f3d56" />
        <path
          d="M231.5 530.13a21.23 21.23 0 002.81-10.76c0-9.72-6-17.6-13.45-17.6s-13.44 7.88-13.44 17.6a21.23 21.23 0 002.8 10.76 22.06 22.06 0 000 21.51 22.06 22.06 0 000 21.51 21.16 21.16 0 00-2.8 10.75c0 9.73 6 17.61 13.44 17.61s13.45-7.88 13.45-17.61a21.16 21.16 0 00-2.81-10.75 22 22 0 000-21.51 22 22 0 000-21.51z"
          fill="#3f3d56"
        />
        <ellipse cx={220.81} cy={497.86} rx={13.44} ry={17.6} fill="#3f3d56" />
        <ellipse cx={220.81} cy={476.35} rx={13.44} ry={17.6} fill="#3f3d56" />
        <path
          d="M170.5 329.13a64.1 64.1 0 01-5-7.37l35.33-5.8-38.21.29a64.57 64.57 0 01-1.23-51l51.23 26.61-47.27-34.8a64.4 64.4 0 11106.37 72.07 64.33 64.33 0 017.34 11.73L233.2 364.7l48.9-16.41a64.44 64.44 0 01-10.38 60.48 64.4 64.4 0 11-101.24 0 64.42 64.42 0 010-79.64z"
          fill={color}
        />
        <path
          d="M285.5 368.95a64.15 64.15 0 01-13.78 39.82 64.4 64.4 0 11-101.24 0c-8.63-10.91 115.02-47.05 115.02-39.82z"
          opacity={0.1}
        />
      </g>
      <g opacity={0.1}>
        <ellipse cx={523.81} cy={614.79} rx={17.99} ry={23.55} fill="#3f3d56" />
        <path
          d="M538.05 514.03a28.41 28.41 0 003.75-14.4c0-13-8-23.55-18-23.55s-18 10.55-18 23.55a28.32 28.32 0 003.76 14.4 29.44 29.44 0 000 28.79 29.42 29.42 0 000 28.78 28.32 28.32 0 00-3.76 14.4c0 13 8.06 23.55 18 23.55s18-10.55 18-23.55a28.41 28.41 0 00-3.75-14.4 29.48 29.48 0 000-28.78 29.5 29.5 0 000-28.79z"
          fill="#3f3d56"
        />
        <ellipse cx={523.81} cy={470.85} rx={17.99} ry={23.55} fill="#3f3d56" />
        <ellipse cx={523.81} cy={442.06} rx={17.99} ry={23.55} fill="#3f3d56" />
        <path
          d="M456.5 245.06a85.91 85.91 0 01-6.7-9.86l47.27-7.76-51.12.38a86.35 86.35 0 01-1.65-68.29l68.6 35.58-63.27-46.5a86.19 86.19 0 11142.31 96.45 86.33 86.33 0 019.82 15.72l-61.36 31.88 65.43-22a86.22 86.22 0 01-13.89 80.93 86.18 86.18 0 11-135.48 0 86.21 86.21 0 010-106.57z"
          fill={color}
        />
        <path
          d="M610.38 298.35a85.81 85.81 0 01-18.44 53.28 86.18 86.18 0 11-135.48 0c-11.55-14.66 153.92-62.96 153.92-53.28z"
          opacity={0.1}
        />
      </g>
      <path
        d="M1143 636.22c0 6.87-50.22 13.15-133.25 18-15.1.87-31.28 1.7-48.44 2.48q-22.24 1-46.62 1.89-23.62.84-49.05 1.56c-53.54 1.53-112.73 2.63-175.61 3.18q-22.89.21-46.39.32-24.48.11-49.52.1c-303.14 0-548.87-12.31-548.87-27.5s245.73-27.5 548.87-27.5c130.51 0 250.36 2.29 344.56 6.09l10.3.42h.06c118.66 5.03 193.96 12.6 193.96 20.96z"
        fill="#3f3d56"
      />
      <path
        d="M1143 636.22c0 6.87-50.22 13.15-133.25 18-15.1.87-31.28 1.7-48.44 2.48q-22.24 1-46.62 1.89-23.62.84-49.05 1.56c-53.54 1.53-112.73 2.63-175.61 3.18q-22.89.21-46.39.32-24.48.11-49.52.1c-303.14 0-548.87-12.31-548.87-27.5s245.73-27.5 548.87-27.5c130.51 0 250.36 2.29 344.56 6.09l10.3.42h.06c118.66 5.03 193.96 12.6 193.96 20.96z"
        opacity={0.15}
      />
      <path
        d="M1097.75 631.38c0 5.74-50.22 11-133.25 15-15.09.73-31.28 1.42-48.43 2.07q-22.25.84-46.62 1.58-23.62.7-49.05 1.31c-53.55 1.28-112.74 2.2-175.62 2.66q-22.87.17-46.39.26-24.48.09-49.51.09C245.74 654.35 0 644.06 0 631.35s245.74-23 548.88-23c130.5 0 250.35 1.91 344.55 5.09l10.3.35h.07c118.7 4.27 193.95 10.56 193.95 17.59zM141.76 422.45l-13.78-42.19 330-3.61 13.52 41.77z"
        fill="#3f3d56"
      />
      <path
        d="M141.76 422.45l-13.78-42.19 330-3.61 13.52 41.77z"
        opacity={0.15}
      />
      <path
        d="M119.76 422.45l-13.78-42.19 330-3.61 13.52 41.77zM683.11 357.62q-51.18 0-80.67-40.63t-29.49-98.44q0-58.2 28.52-98.24t80.46-40q55.08 0 83 42.19t27.93 97.66q0 55.07-28.9 96.28t-80.85 41.18zm1-30.47q33.67 0 50.33-29.35t16.66-74q0-49.7-17.05-81.39t-52.3-31.7q-67 0-67 106.44 0 110.01 69.34 110zm11.24 291.79H646l323.08-533.2h48.42zm285.82 5.47q-51.95 0-81-41T871 484.96q0-57.81 28.32-97.85t80.66-40q54.69 0 82.42 42.19t27.74 97.65q0 54.71-28.71 96.1t-80.28 41.36zm.58-31.25q33.51 0 50.06-28.85t16.55-73.7q0-48-16.75-80.51t-52.19-32.56q-67.39 0-67.39 106.44-.02 109.19 69.7 109.18z"
        fill="#3f3d56"
      />
      <path
        d="M683.11 357.62q-51.18 0-80.67-40.63t-29.49-98.44q0-58.2 28.52-98.24t80.46-40q55.08 0 83 42.19t27.93 97.66q0 55.07-28.9 96.28t-80.85 41.18zm1-30.47q33.67 0 50.33-29.35t16.66-74q0-49.7-17.05-81.39t-52.3-31.7q-67 0-67 106.44 0 110.01 69.34 110zm11.24 291.79H646l323.08-533.2h48.42zm285.82 5.47q-51.95 0-81-41T871 484.96q0-57.81 28.32-97.85t80.66-40q54.69 0 82.42 42.19t27.74 97.65q0 54.71-28.71 96.1t-80.28 41.36zm.58-31.25q33.51 0 50.06-28.85t16.55-73.7q0-48-16.75-80.51t-52.19-32.56q-67.39 0-67.39 106.44-.02 109.19 69.7 109.18z"
        fill="#3f3d56"
      />
      <path
        d="M683.11 357.62q-51.18 0-80.67-40.63t-29.49-98.44q0-58.2 28.52-98.24t80.46-40q55.08 0 83 42.19t27.93 97.66q0 55.07-28.9 96.28t-80.85 41.18zm1-30.47q33.67 0 50.33-29.35t16.66-74q0-49.7-17.05-81.39t-52.3-31.7q-67 0-67 106.44 0 110.01 69.34 110zm11.24 291.79H646l323.08-533.2h48.42zm285.82 5.47q-51.95 0-81-41T871 484.96q0-57.81 28.32-97.85t80.66-40q54.69 0 82.42 42.19t27.74 97.65q0 54.71-28.71 96.1t-80.28 41.36zm.58-31.25q33.51 0 50.06-28.85t16.55-73.7q0-48-16.75-80.51t-52.19-32.56q-67.39 0-67.39 106.44-.02 109.19 69.7 109.18z"
        opacity={0.15}
      />
      <path
        d="M652.11 357.62q-51.18 0-80.67-40.63t-29.49-98.44q0-58.2 28.52-98.24t80.46-40q55.08 0 83 42.19t27.93 97.66q0 55.07-28.9 96.28t-80.85 41.18zm1-30.47q33.67 0 50.33-29.35t16.66-74q0-49.7-17.05-81.39t-52.3-31.7q-67 0-67 106.44 0 110.01 69.34 110zm11.24 291.79H615l323.08-533.2h48.42zm285.82 5.47q-51.95 0-81-41T840 484.96q0-57.81 28.32-97.85t80.66-40q54.69 0 82.42 42.19t27.74 97.65q0 54.71-28.71 96.1t-80.28 41.36zm.58-31.25q33.51 0 50.06-28.85t16.55-73.7q0-48-16.75-80.51t-52.21-32.56q-67.39 0-67.39 106.44 0 109.19 69.72 109.18z"
        fill="#3f3d56"
      />
      <path
        d="M760.07 632.32c4.12-7.64-.56-17-5.94-23.82s-11.94-13.9-11.8-22.59c.2-12.47 13.44-19.84 24-26.46a117.08 117.08 0 0021.58-17.34 31.68 31.68 0 006.63-8.88c2.19-4.88 2.12-10.43 2-15.77q-.69-26.72-2.64-53.36"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M814.02 463.12a19.43 19.43 0 00-9.71-15.94l-4.36 8.62.13-10.44a19.69 19.69 0 00-6.41-.77 19.46 19.46 0 1020.35 18.53zM779.32 594.86a19.45 19.45 0 11.94-15.67l-12.16 9.89 13.4-3.12a19.4 19.4 0 01-2.18 8.9zM769.71 557.05a19.46 19.46 0 01-20.35-18.53 19.24 19.24 0 011.68-8.87 19.49 19.49 0 0112.46-10.79l-.11 8 4.41-8.72a19.461 19.461 0 111.82 38.88zM816.95 525.62a19.47 19.47 0 11-1.82-38.89 19.28 19.28 0 0110.42 2.47l-3.44 9.42 7.08-6.79a19.4 19.4 0 016.31 13.43 19 19 0 01-.5 5.36 19.47 19.47 0 01-18.05 15z"
        fill={color}
      />
      <path
        d="M811.4 468.31c-4.49.49-8.85 1.89-13.36 2.17s-9.46-.8-12.31-4.31c-1.54-1.88-2.3-4.27-3.6-6.33a13.79 13.79 0 00-4.9-4.61 19.46 19.46 0 1036.38 12.91c-.74.04-1.47.09-2.21.17zM816.95 525.62a19.48 19.48 0 01-18.51-27.76 14.58 14.58 0 013.91 3.92c1.39 2.09 2.23 4.51 3.86 6.43 3 3.57 8.21 4.73 12.9 4.52s9.23-1.55 13.91-2c.65-.06 1.31-.1 2-.12a19.47 19.47 0 01-18.07 15.01zM769.71 557.05a19.46 19.46 0 01-20.35-18.53 19.24 19.24 0 011.68-8.87 15.66 15.66 0 014.11 4c1.51 2.13 2.46 4.59 4.23 6.56 3.28 3.65 8.8 4.94 13.77 4.82s9.46-1.28 14.25-1.65a19.47 19.47 0 01-17.69 13.67zM779.32 594.86a19.46 19.46 0 01-35.48-15.88 19.6 19.6 0 014.27 3.81c1.85 2.26 3.07 4.82 5.21 6.92 4 3.9 10.4 5.51 16.12 5.66a82.85 82.85 0 009.88-.51z"
        opacity={0.1}
      />
      <path
        d="M1061.07 631.32c4.12-7.64-.56-17-5.94-23.82s-11.94-13.9-11.8-22.59c.2-12.47 13.44-19.84 24-26.46a117.08 117.08 0 0021.58-17.34 31.68 31.68 0 006.63-8.88c2.19-4.88 2.12-10.43 2-15.77q-.69-26.72-2.64-53.36"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M1115.02 462.12a19.43 19.43 0 00-9.71-15.94l-4.36 8.62.13-10.44a19.69 19.69 0 00-6.41-.77 19.46 19.46 0 1020.35 18.53zM1080.32 593.86a19.45 19.45 0 11.94-15.67l-12.16 9.89 13.4-3.12a19.4 19.4 0 01-2.18 8.9zM1070.71 556.05a19.46 19.46 0 01-20.35-18.53 19.24 19.24 0 011.68-8.87 19.49 19.49 0 0112.46-10.79l-.11 8 4.41-8.72h.05a19.461 19.461 0 111.82 38.88zM1117.95 524.62a19.47 19.47 0 11-1.82-38.89 19.28 19.28 0 0110.42 2.47l-3.44 9.42 7.08-6.79a19.4 19.4 0 016.31 13.43 19 19 0 01-.5 5.36 19.47 19.47 0 01-18.05 15z"
        fill={color}
      />
      <path
        d="M1112.4 467.31c-4.49.49-8.85 1.89-13.36 2.17s-9.46-.8-12.31-4.31c-1.54-1.88-2.3-4.27-3.6-6.33a13.79 13.79 0 00-4.9-4.61 19.46 19.46 0 1036.38 12.91c-.74.04-1.47.09-2.21.17zM1117.95 524.62a19.48 19.48 0 01-18.51-27.76 14.58 14.58 0 013.91 3.92c1.39 2.09 2.23 4.51 3.86 6.43 3 3.57 8.21 4.73 12.9 4.52s9.23-1.55 13.91-2c.65-.06 1.31-.1 2-.12a19.47 19.47 0 01-18.07 15.01zM1070.71 556.05a19.46 19.46 0 01-20.35-18.53 19.24 19.24 0 011.68-8.87 15.66 15.66 0 014.11 4c1.51 2.13 2.46 4.59 4.23 6.56 3.28 3.65 8.8 4.94 13.77 4.82 4.82-.1 9.46-1.28 14.25-1.65a19.47 19.47 0 01-17.69 13.67zM1080.32 593.86a19.46 19.46 0 01-35.48-15.88 19.6 19.6 0 014.27 3.81c1.85 2.26 3.07 4.82 5.21 6.92 4 3.9 10.4 5.51 16.12 5.66a82.85 82.85 0 009.88-.51z"
        opacity={0.1}
      />
      <path
        d="M109.93 618.32c-4.12-7.64.56-17 5.94-23.82s11.94-13.9 11.8-22.59c-.2-12.47-13.44-19.84-24-26.46a117.08 117.08 0 01-21.58-17.34 31.68 31.68 0 01-6.63-8.88c-2.19-4.88-2.12-10.43-2-15.77q.69-26.72 2.64-53.36"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        d="M55.98 449.12a19.43 19.43 0 019.71-15.94l4.36 8.62-.13-10.44a19.69 19.69 0 016.41-.77 19.46 19.46 0 11-20.35 18.53zM90.68 580.86a19.45 19.45 0 10-.94-15.67l12.16 9.89-13.4-3.12a19.4 19.4 0 002.18 8.9zM100.29 543.05a19.46 19.46 0 0020.35-18.53 19.24 19.24 0 00-1.68-8.87 19.49 19.49 0 00-12.46-10.79l.11 8-4.41-8.72a19.461 19.461 0 10-1.82 38.88zM53.05 511.62a19.47 19.47 0 101.82-38.89 19.28 19.28 0 00-10.37 2.47l3.44 9.42-7.13-6.76a19.4 19.4 0 00-6.31 13.4 19 19 0 00.5 5.36 19.47 19.47 0 0018.05 15z"
        fill={color}
      />
      <path
        d="M58.6 454.31c4.49.49 8.85 1.89 13.36 2.17s9.46-.8 12.31-4.31c1.54-1.88 2.3-4.27 3.6-6.33a13.79 13.79 0 014.9-4.61 19.46 19.46 0 11-36.38 12.91c.74.04 1.47.09 2.21.17zM53.05 511.62a19.48 19.48 0 0018.51-27.76 14.58 14.58 0 00-3.91 3.92c-1.39 2.09-2.23 4.51-3.86 6.43-3 3.57-8.21 4.73-12.9 4.52s-9.23-1.55-13.91-2c-.65-.06-1.31-.1-2-.12a19.47 19.47 0 0018.07 15.01zM100.29 543.05a19.46 19.46 0 0020.35-18.53 19.24 19.24 0 00-1.68-8.87 15.66 15.66 0 00-4.11 4c-1.51 2.13-2.46 4.59-4.23 6.56-3.28 3.65-8.8 4.94-13.77 4.82-4.82-.1-9.46-1.28-14.25-1.65a19.47 19.47 0 0017.69 13.67zM90.68 580.86a19.46 19.46 0 0035.48-15.88 19.6 19.6 0 00-4.27 3.81c-1.85 2.26-3.07 4.82-5.21 6.92-4 3.9-10.4 5.51-16.12 5.66a82.85 82.85 0 01-9.88-.51z"
        opacity={0.1}
      />
      <path
        d="M702 642.75a15.53 15.53 0 00-6.18-12.52c-.24-9.17-6.78-16.66-15.19-17.82a18.13 18.13 0 00-12.08-13.52 15.34 15.34 0 00-2.25-.53h-.22l-.39-.05h-2.06c-8.58 0-15.72 6.56-17.19 15.21-5.55-1.28-10.64.38-11.55 3.89a4.75 4.75 0 00.15 2.81c.94 2.72 4 5.32 8.15 6.61l.54.16c.27.08.54.14.81.2h.18a14 14 0 006.11 18.31 3.17 3.17 0 00-.36.23 5 5 0 00-1.2 1.68 24.36 24.36 0 00-2.32 5.59c-.4 1.67-.47 3.42-1 5.07-.91 3-3.25 5.63-3.52 8.82-.12 1.42.11 3.09-.9 4.06a6.6 6.6 0 01-.8.59 6.18 6.18 0 00-1.76 1.84 5.88 5.88 0 01-1.17 1.62c-.91.69-2.41.62-2.86 1.68s.71 2.31.44 3.47c-.22.94-1.25 1.37-2 2a7.09 7.09 0 00-1.7 3.23 10.34 10.34 0 01-8.53-2.17 16 16 0 01.88 3.19c-1.19-1.27-3.15-1.64-4.6-2.3a14.69 14.69 0 01-4.9-3.64l2.62-.36-11.6-17.6-3.42-.7 3.07 5.89a1.84 1.84 0 00-1 1.26 5.36 5.36 0 00-.12 2 37 37 0 00.79 4.69l.89 4.14a10.74 10.74 0 00.29 1.15 11.66 11.66 0 00-3.44.39 30.22 30.22 0 00-7.13-1.69 3.64 3.64 0 00-1.61.08 3.9 3.9 0 00-1.5 1.22 48 48 0 00-5.3 7.46c-6.23 10.84-14.55 20.3-22.34 30.1-5.38 2.19-10.8 4.27-16.23 6.33l-11.67 4.45c-2.33.89-4.75 1.8-7.23 1.64-1.12-.07-2.48-.24-3.11.71a6 6 0 00-.71 1.52c-.41 0-.82.1-1.2.12h-.07c-.74-1.84-1.38-3.81-2.8-5.15a1.74 1.74 0 00-1.32 1c-.28.52-.45 1.09-.77 1.57-.63.92-1.72 1.37-2.5 2.15s-1.27 2-2.11 2.76a8.38 8.38 0 01-4 1.55 25.25 25.25 0 00-6.21 2.36 10.63 10.63 0 01-2.3 1.06 8.66 8.66 0 01-2.69.09l-6.18-.45a4.81 4.81 0 00-1.65.07 3.07 3.07 0 00-2 3.17 4.93 4.93 0 001.95 3.4 13 13 0 003.52 1.83 102.22 102.22 0 0016.55 4.85v1.25a28.07 28.07 0 0012.61 3 1.88 1.88 0 00.94-.17 2.09 2.09 0 00.79-1.24 51 51 0 002.47-12.11 6.23 6.23 0 002.23-.57c2.13-.58 4.24.88 6.43 1.12 2.7.29 5.21-1.28 7.76-2.25.37-.14.74-.26 1.11-.38a12.43 12.43 0 01-2.55 2.47c-1.06.76-2.25 1.32-3.29 2.11a21.87 21.87 0 01-2.77 2.15 16.7 16.7 0 01-2.13.82 14.44 14.44 0 00-3 1.51 6.24 6.24 0 00-2.08 2 2.73 2.73 0 001.86 4.26 8.58 8.58 0 002.53.07c3.34-.25 6.67-.56 10-.86a28 28 0 004.19-.6c.73-.18 1.45-.42 2.18-.61a17.64 17.64 0 013.81-.57 3.16 3.16 0 011.11.11c.78.25 1.33 1 2.12 1.2a3.27 3.27 0 001.51-.21 34.69 34.69 0 017.42-.79c1.09-.06 2.37-.27 2.88-1.28.62-1.25-.42-2.65-.83-4a12.06 12.06 0 01-.34-2.62 16.34 16.34 0 00-1.84-6.23 16.87 16.87 0 01-1.37-2.84 72.27 72.27 0 0013.64-6.92c2.46-1.53 5-3.18 7.78-3.74 3.24-.65 6.58.21 9.77 1.13a219.71 219.71 0 0122.39 7.81c3.5 1.43 7 2.95 10.58 4a16.47 16.47 0 003.75 3.66c2.4 1.55 5.33 2 8.15 2.22a107 107 0 0011.46.43c2.92-.05 5.93-.25 8.54-1.58a9.89 9.89 0 001.79-1.18c2 .36 4.05-.71 5.62-2.08a13.6 13.6 0 004.3-6.75c.92-3.61.21-7.82 2.43-10.77.59-.79 1.36-1.43 1.94-2.23a6 6 0 001-3.63l.1-.15a13.48 13.48 0 001-3.64 20.83 20.83 0 011-2.87 86.68 86.68 0 002.94-8.53 46.82 46.82 0 001.36-5.85c.24-1.58.38-3.17.51-4.76a28.71 28.71 0 011.44-7.31 59.72 59.72 0 003.31-17.52v-.35A11.73 11.73 0 00701 655.81a12.54 12.54 0 00-1.08-5.11 15.86 15.86 0 002.08-7.95zm-56.55 68.71c.17.61.37 1.22.57 1.83-.92-.91-1.83-1.85-2.76-2.75.37.11.74.23 1.1.36a6.6 6.6 0 011.1.56zm-4.48-3c-5.46-4.74-11.78-8.42-17.37-13 3 1.51 6 3.26 9 4.94q5.24 3 10.6 5.74a8.62 8.62 0 01-2.2 2.28zm2.33-11.94l.26-.27v1.87c-.49-.16-1-.32-1.47-.5a12.4 12.4 0 001.22-1.14zm-48.07 12.84a45.32 45.32 0 005.83-8.31c2.16 3.79 5.68 6.52 8.68 9.69-4.82-.68-9.65-1.21-14.5-1.42z"
        transform="translate(-28.5 -118.14)"
        fill="url(#Discount_svg__a)"
      />
      <path
        fill="#2f2e41"
        d="M574.53 545.12l3.45.7 11.75 17.36-5.19.7-10.01-18.76z"
      />
      <path
        d="M490.98 615.58a68.35 68.35 0 003.43 9 83.16 83.16 0 0011.46-3.27 31.22 31.22 0 00-2.38-3.23 11.23 11.23 0 00-3.24-2.49c-1.19-.52-2.66-.13-3.93-.06q-2.67.1-5.34.05z"
        fill="#fbbebe"
      />
      <path
        d="M500.27 620.22c-1.94-.61-3.13-2.57-3.92-4.46s-1.43-3.95-2.93-5.34a1.75 1.75 0 00-1.32 1c-.29.5-.46 1.07-.79 1.55-.62.9-1.72 1.34-2.51 2.11s-1.28 1.94-2.13 2.71a8.47 8.47 0 01-4 1.54 25.35 25.35 0 00-6.26 2.32 10.7 10.7 0 01-2.32 1 8.79 8.79 0 01-2.71.09l-6.23-.45a4.86 4.86 0 00-1.66.08 3 3 0 00-2 3.12 4.84 4.84 0 002 3.35 13.28 13.28 0 003.54 1.8 106.73 106.73 0 0016.7 4.77v1.23a28.91 28.91 0 0012.71 3 2 2 0 001-.17 2.08 2.08 0 00.8-1.22 49.18 49.18 0 002.59-13.54 10.16 10.16 0 00-.26-3.48c-.34-1.12.82-.65-.26-1.09"
        fill="#2f2e41"
      />
      <path
        d="M619.71 596.74c-18.47 1.12-36.71-4.3-55.21-4.88a27.61 27.61 0 00-6.86.44 33.71 33.71 0 00-6.8 2.64c-9.91 4.61-20.17 8.43-30.42 12.25l-11.76 4.38c-2.36.87-4.79 1.76-7.3 1.61-1.12-.07-2.49-.24-3.13.7-1.91 2.83-1 7 .26 10.18.41 1 1.1 2.15 2.2 2.27a6.49 6.49 0 002.25-.57c2.14-.57 4.28.87 6.48 1.1 2.73.29 5.26-1.26 7.83-2.21 4.26-1.57 8.92-1.52 13.4-2.27 7.52-1.25 14.48-4.74 21-8.72 2.48-1.51 5-3.13 7.84-3.68 3.27-.64 6.64.2 9.85 1.11a227.16 227.16 0 0122.57 7.69 104 104 0 0011.8 4.3 42.66 42.66 0 0026.44-1.54c3-1.17 6.16-3.23 6.33-6.42.1-1.82-1.31-3.42-2.25-5-.61-1-1.21-2-1.87-2.95-3.18-4.64-7.04-10.77-12.65-10.43z"
        fill="#2f2e41"
      />
      <path
        d="M619.71 596.74c-18.47 1.12-36.71-4.3-55.21-4.88a27.61 27.61 0 00-6.86.44 33.71 33.71 0 00-6.8 2.64c-9.91 4.61-20.17 8.43-30.42 12.25l-11.76 4.38c-2.36.87-4.79 1.76-7.3 1.61-1.12-.07-2.49-.24-3.13.7-1.91 2.83-1 7 .26 10.18.41 1 1.1 2.15 2.2 2.27a6.49 6.49 0 002.25-.57c2.14-.57 4.28.87 6.48 1.1 2.73.29 5.26-1.26 7.83-2.21 4.26-1.57 8.92-1.52 13.4-2.27 7.52-1.25 14.48-4.74 21-8.72 2.48-1.51 5-3.13 7.84-3.68 3.27-.64 6.64.2 9.85 1.11a227.16 227.16 0 0122.57 7.69 104 104 0 0011.8 4.3 42.66 42.66 0 0026.44-1.54c3-1.17 6.16-3.23 6.33-6.42.1-1.82-1.31-3.42-2.25-5-.61-1-1.21-2-1.87-2.95-3.18-4.64-7.04-10.77-12.65-10.43z"
        opacity={0.1}
      />
      <path
        d="M526.43 616.48q4.34 1.47 8.74 2.72c1.65-2.71 4.73-4.59 5.43-7.68a.72.72 0 000-.41.74.74 0 00-.33-.3 16.35 16.35 0 00-6.85-2c-1.9-.12-2.76 1.86-3.62 3.25-.3.56-2.6 4.68-3.37 4.42z"
        fill="#fbbebe"
      />
      <path
        d="M530.5 614.5a6.29 6.29 0 01-4.25-2.79c-.41-.71-.84-1.67-1.66-1.62s-1.1.95-1.27 1.7a48.57 48.57 0 01-2.39 8.21 15.39 15.39 0 01-5.11 6.71c-1.07.74-2.26 1.3-3.31 2.08a21.91 21.91 0 01-2.8 2.12 15.8 15.8 0 01-2.15.8 14.76 14.76 0 00-3.07 1.49 6.25 6.25 0 00-2.09 2 3 3 0 00-.18 2.8 3 3 0 002 1.41 9.07 9.07 0 002.55.06c3.37-.25 6.73-.55 10.09-.85a28.68 28.68 0 004.23-.58c.74-.18 1.46-.42 2.19-.61a18.54 18.54 0 013.85-.56 3.26 3.26 0 011.12.11c.78.25 1.33 1 2.13 1.18a3.3 3.3 0 001.52-.2 36 36 0 017.48-.78c1.1-.06 2.4-.27 2.9-1.26.63-1.23-.41-2.61-.83-3.93a12.33 12.33 0 01-.35-2.58 15.71 15.71 0 00-1.85-6.13c-.86-1.58-2-3.32-1.43-5a4.38 4.38 0 00.57-1.71c-.14-2.71-6.37-1.71-7.89-2.07z"
        fill="#2f2e41"
      />
      <path
        d="M592.02 567.12a14.48 14.48 0 01-7.36-7.31c-.3-.7-.56-1.43-.85-2.14a16.37 16.37 0 00-4.4-6.1 2.11 2.11 0 00-1.63-.69 1.74 1.74 0 00-1.2 1.28 5.25 5.25 0 00-.13 2 37.64 37.64 0 00.8 4.61l.9 4.08a8 8 0 00.56 1.82 6.34 6.34 0 001.5 1.79c.82.76 1.65 1.49 2.49 2.2a8.82 8.82 0 001.51 1.1 9.26 9.26 0 002.81.82c3.67.68 7.4 1.66 10.49 4 0 0 0-2.73-.07-3a4 4 0 00-.78-2.19c-1.16-1.25-3.16-1.62-4.64-2.27z"
        fill="#fbbebe"
      />
      <path
        d="M592.02 567.12a14.48 14.48 0 01-7.36-7.31c-.3-.7-.56-1.43-.85-2.14a16.37 16.37 0 00-4.4-6.1 2.11 2.11 0 00-1.63-.69 1.74 1.74 0 00-1.2 1.28 5.25 5.25 0 00-.13 2 37.64 37.64 0 00.8 4.61l.9 4.08a8 8 0 00.56 1.82 6.34 6.34 0 001.5 1.79c.82.76 1.65 1.49 2.49 2.2a8.82 8.82 0 001.51 1.1 9.26 9.26 0 002.81.82c3.67.68 7.4 1.66 10.49 4 0 0 0-2.73-.07-3a4 4 0 00-.78-2.19c-1.16-1.25-3.16-1.62-4.64-2.27z"
        opacity={0.1}
      />
      <ellipse cx={629.62} cy={531.4} rx={4.49} ry={4.52} fill="#2f2e41" />
      <path
        d="M626.84 528.67a5 5 0 00-3.55.51 4.78 4.78 0 00-1.21 1.66 23.59 23.59 0 00-2.34 5.5c-.4 1.65-.47 3.37-1 5-.92 3-3.28 5.55-3.55 8.68-.12 1.4.11 3.05-.91 4a5.88 5.88 0 01-.81.57 6.14 6.14 0 00-1.77 1.82 5.77 5.77 0 01-1.25 1.73c-.92.68-2.43.61-2.88 1.66s.71 2.27.44 3.41c-.22.93-1.26 1.36-2 2a6.92 6.92 0 00-1.71 3.19 10.59 10.59 0 01-8.59-2.15c1.25 3.09 1.28 6.5 1.33 9.83a4.06 4.06 0 01-.79 3c3.58.08 7.06 1 10.55 1.83a7.24 7.24 0 004.6 0 7.6 7.6 0 002.11-1.68c1.9-1.93 3.89-4 4.35-6.69a36.34 36.34 0 00.08-4.55 26.1 26.1 0 011.15-5.51 64.45 64.45 0 002-11.35c.21-2.37 2.25-4.27 3.33-6.39 2-4 4.1-8.15 4.26-12.63.14-1.46-.36-3.25-1.84-3.44z"
        fill="#2f2e41"
      />
      <path
        d="M626.84 528.67a5 5 0 00-3.55.51 4.78 4.78 0 00-1.21 1.66 23.59 23.59 0 00-2.34 5.5c-.4 1.65-.47 3.37-1 5-.92 3-3.28 5.55-3.55 8.68-.12 1.4.11 3.05-.91 4a5.88 5.88 0 01-.81.57 6.14 6.14 0 00-1.77 1.82 5.77 5.77 0 01-1.25 1.73c-.92.68-2.43.61-2.88 1.66s.71 2.27.44 3.41c-.22.93-1.26 1.36-2 2a6.92 6.92 0 00-1.71 3.19 10.59 10.59 0 01-8.59-2.15c1.25 3.09 1.28 6.5 1.33 9.83a4.06 4.06 0 01-.79 3c3.58.08 7.06 1 10.55 1.83a7.24 7.24 0 004.6 0 7.6 7.6 0 002.11-1.68c1.9-1.93 3.89-4 4.35-6.69a36.34 36.34 0 00.08-4.55 26.1 26.1 0 011.15-5.51 64.45 64.45 0 002-11.35c.21-2.37 2.25-4.27 3.33-6.39 2-4 4.1-8.15 4.26-12.63.14-1.46-.36-3.25-1.84-3.44z"
        opacity={0.1}
      />
      <path
        d="M622.64 600.63c-3.85-1.83-6.66-5.24-9.77-8.16-5.94-5.58-13.2-9.52-19.44-14.75-4.13-3.46-7.83-7.49-12.38-10.39a30.74 30.74 0 00-13.26-4.65 3.68 3.68 0 00-1.62.08 3.89 3.89 0 00-1.51 1.2 47.12 47.12 0 00-5.35 7.35c-7.91 13.42-19.14 24.71-28.45 37.2a1.67 1.67 0 00-.11 2.26l1.89 3.71c1.06 2.07 2.76 4.49 5 4.08a5.55 5.55 0 002.65-1.69l8.5-8.13 8.91-8.52c5.22-5 10.53-10.1 13.94-16.48 2.66 4.61 7.38 7.63 10.62 11.86 1.23 1.6 2.23 3.37 3.33 5.07 1.77 2.73 3.77 5.29 5.77 7.84l10.23 13.05a19.79 19.79 0 004.73 4.8c2.42 1.53 5.37 1.94 8.22 2.19a105.89 105.89 0 0011.55.42c2.94-.05 6-.24 8.6-1.55s4.81-4 4.67-6.93a10.29 10.29 0 00-1.47-4.33c-3.61-6.7-8.39-12.3-15.25-15.53z"
        fill="#2f2e41"
      />
      <ellipse cx={632.38} cy={534.53} rx={3.45} ry={3.47} fill="#e8e8f0" />
      <path
        d="M631.62 531.92a6.6 6.6 0 01.38 5 19.33 19.33 0 01-2.22 4.6 22.92 22.92 0 01-2.89 4.12c5.33.26 10.5-1.83 15.2-4.37 3.79-2 7.57-4.55 9.59-8.36a4.44 4.44 0 01-3.53-.65 13.22 13.22 0 01-2.71-2.52l-2.67-3a12 12 0 01-1.65-2.17 6 6 0 01-.71-3.49 20 20 0 01-3.54 2.94c-1.91 1.25-4 2.15-5.93 3.38-.68.44-2.19 1.15-1.8 2s1.94 1.56 2.48 2.52z"
        fill="#fbbebe"
      />
      <path
        d="M631.62 531.92a6.6 6.6 0 01.38 5 19.33 19.33 0 01-2.22 4.6 22.92 22.92 0 01-2.89 4.12c5.33.26 10.5-1.83 15.2-4.37 3.79-2 7.57-4.55 9.59-8.36a4.44 4.44 0 01-3.53-.65 13.22 13.22 0 01-2.71-2.52l-2.67-3a12 12 0 01-1.65-2.17 6 6 0 01-.71-3.49 20 20 0 01-3.54 2.94c-1.91 1.25-4 2.15-5.93 3.38-.68.44-2.19 1.15-1.8 2s1.94 1.56 2.48 2.52z"
        opacity={0.1}
      />
      <path
        d="M631.69 532.44a4.51 4.51 0 000 5.21c.15.19.72 1.38 1 1.39a.91.91 0 00.61-.31 42.39 42.39 0 003.38-4 7.46 7.46 0 014.3-2.82c2.09-.33 4.1.78 5.93 1.84a5.66 5.66 0 012 1.66 5.45 5.45 0 01.67 2.26 105.81 105.81 0 01.6 14.36 55.24 55.24 0 01-.68 10.33c-.34 1.76-.85 3.48-1.09 5.26a35.36 35.36 0 00-.21 4.72v6.6a16.75 16.75 0 00.26 3.61 44.11 44.11 0 001.45 4.19 27.61 27.61 0 011 5l.9 6.83c.29 2.16.5 4.51-.81 6.24-.58.79-1.36 1.41-2 2.19-2.25 2.86-1.5 7.01-2.5 10.56a13.37 13.37 0 01-4.34 6.65c-1.59 1.35-3.65 2.42-5.71 2-2.77-.52-4.44-3.41-5.2-6.14s-1-5.71-2.67-8c-1.34-1.89-3.41-3.07-5.28-4.42s-3.71-3.08-4.12-5.36c-.18-1-.07-2-.17-3a7.15 7.15 0 00-4.42-5.8c-1.42-.55-3.18-.75-4-2a9.63 9.63 0 004.16-5.59 28.7 28.7 0 001-7l.48-7.94c.21-3.55.31-7.07 1.87-10.26.7-1.42 1.57-2.76 2.29-4.17a46.27 46.27 0 002.46-6.12c1.13-3.25 2.27-6.51 3.28-9.8a19.42 19.42 0 011.8-4.57c.93-1.5 2.16-3.3 3.76-3.6z"
        fill="#e8e8f0"
      />
      <path
        d="M614.06 584.03l2.1.07.45-3.17a6.84 6.84 0 01.44-1.85 11.78 11.78 0 011.21-1.77c2.07-2.92 1.92-6.8 2.43-10.35.68-4.73 2.66-9.17 4.62-13.53l4.08-9.09a13.08 13.08 0 00.87-2.33 12.77 12.77 0 00.25-2.69c0-1.4.46-6.51.49-7.92 0-.52-1.14-.23-1.38-.69-.51-1-1.21 1.72-2.17 2.32a5.32 5.32 0 00-1.88 2.75c-.88 2.29-1.42 4.7-2.24 7a14.39 14.39 0 01-3.81 6.19c-.83.74-1.8 1.32-2.59 2.1-2.54 2.51-2.78 6.47-2.87 10-.06 2.19-.47 22.96 0 22.96zM644.31 528.65c-2 .8-3.16 3-3.73 5.14s-.81 4.4-1.91 6.3c-2.56 4.46-9.09 5.76-10.9 10.58a19.35 19.35 0 00-.73 5c-.32 3.45-1.46 6.79-1.8 10.24a45.15 45.15 0 00.19 8.05l2.29 27.23a36 36 0 01-.69 12 11.53 11.53 0 006.86-1.13c2.15-1 4.11-2.32 6.17-3.46 3.55-2 7.47-3.35 10.57-6a6.27 6.27 0 001.43-1.57 13.51 13.51 0 001-3.59 20.19 20.19 0 011-2.82 83.75 83.75 0 003-8.4 45.24 45.24 0 001.37-5.77c.25-1.55.38-3.12.52-4.68a27.57 27.57 0 011.45-7.2 57.73 57.73 0 003.33-17.25 8.64 8.64 0 00-.17-2.54 13.61 13.61 0 00-1.38-2.88c-.95-1.79-1.52-3.76-2.42-5.57-2-4.1-5.59-7.21-9.34-9.82-1.92-1.27-4.03-2.65-6.11-1.86z"
        fill="#2f2e41"
      />
      <path
        d="M596.57 573.08a16.4 16.4 0 01-4.35-3.3c-.57-.67-1-1.42-1.62-2.08a10.69 10.69 0 00-5.47-3.12 26.39 26.39 0 00-6.34-.61 11.26 11.26 0 00-4.21.51 4.25 4.25 0 00-2.8 3c-.31 1.7.8 3.35 2.13 4.43a10.29 10.29 0 004.25 2.07 35.27 35.27 0 003.84.45c7.56.79 14.31 4.9 20.93 8.65q8.73 4.93 17.8 9.23a35.63 35.63 0 00.3-5.46c0-1.36-.1-3.44-1.39-4.24-1.5-.94-4-1.15-5.66-1.71a89.79 89.79 0 01-11.39-4.6 81.758 81.758 0 01-6.02-3.22z"
        fill="#fbbebe"
      />
      <ellipse cx={629.62} cy={516.82} rx={13.47} ry={13.55} fill="#fbbebe" />
      <path
        d="M648.16 544.01a21.9 21.9 0 00-2.61 4.87c-1.67 3.43-4.28 6.37-5.58 10-1.38 3.77-1.33 8.26-4 11.23a3.87 3.87 0 00-1.17 1.7 8.42 8.42 0 01-.14 1.23c-.38 1.08-2.15 1.13-2.48 2.23-.09.32 0 .67-.16 1-.27.71-1.2.81-1.83 1.24-1.31.89-1 2.95-2 4.23a3.55 3.55 0 01-3.36 1.18 12.46 12.46 0 01-3.5-1.31 3.14 3.14 0 00-1.25-.39 2.55 2.55 0 00-1.45.49c-2.49 1.58-3.66 4.72-3.64 7.68a25 25 0 002.07 8.58 3.61 3.61 0 00.69 1.28c.82.87 2.26.73 3.36.24a15.65 15.65 0 013.27-1.46c2.08-.38 4.12 1.06 6.23.94a8.78 8.78 0 004.21-1.86 23.3 23.3 0 005.68-4.85c.92-1.21 1.6-2.59 2.41-3.88a44 44 0 013.4-4.54l7.77-9.51a20.42 20.42 0 002.09-2.89 21.17 21.17 0 001.63-4.34 34.31 34.31 0 001.61-7.73 30.84 30.84 0 00-.57-6.49 22.55 22.55 0 00-1.67-6.17c-1.73-3.5-5.84-6.4-9.01-2.7z"
        fill="#2f2e41"
      />
      <path
        d="M675.22 526.36a15.17 15.17 0 00-6.24-12.33 18 18 0 00-15.31-17.55 17.5 17.5 0 00-34.47.93c-5.6-1.26-10.72.38-11.65 3.83-1 3.61 3 7.83 8.92 9.43a16.39 16.39 0 005.71.57 17.55 17.55 0 0012.06 7.5 17.93 17.93 0 0013.15 13.57 15 15 0 004.06 5.62c0 .42-.07.85-.07 1.29a11.41 11.41 0 1022.8 0 12 12 0 00-1.09-5 15.33 15.33 0 002.13-7.86z"
        fill="#f86d70"
      />
      <path
        d="M611.35 501.93c.93-3.45 6-5.09 11.65-3.83a17.79 17.79 0 0117.33-15h1.16a17 17 0 00-5-.74 17.79 17.79 0 00-17.33 15c-5.6-1.26-10.72.38-11.65 3.83-1 3.61 3 7.83 8.92 9.43a17.13 17.13 0 003.37.58c-5.62-1.64-9.4-5.74-8.45-9.27zM655.18 539.92c0-.44 0-.87.07-1.3a14.94 14.94 0 01-4.06-5.61 18 18 0 01-13.15-13.58 17.52 17.52 0 01-12.06-7.5 15.93 15.93 0 01-3.36-.09 17.49 17.49 0 0011.62 6.9 17.93 17.93 0 0013.15 13.57 15 15 0 004.06 5.62c0 .42-.07.85-.07 1.29a11.61 11.61 0 0011.34 11.8 11.78 11.78 0 01-7.54-11.1z"
        opacity={0.1}
      />
      <ellipse
        cx={662.61}
        cy={637.73}
        rx={2.08}
        ry={2.77}
        transform="rotate(-37.22 472.92 620.977)"
        fill="#fbbebe"
      />
      <path
        d="M313.8 589.21l13.32-7.83a32 32 0 00-6.81-8.15l-25.12 7.81 19.68-11.57a32 32 0 00-47.37 28.07c0 17.67 14.33 18.28 32 18.28s32-.61 32-18.28a31.75 31.75 0 00-2.75-13z"
        fill={color}
      />
      <path
        d="M317.19 606.39a25 25 0 00-4.72-3.71c-2.41-1.61-4.92-3.25-7.77-3.79-2.5-.48-5.08-.07-7.63-.22a17.83 17.83 0 01-11.69-5.36c-1.82-1.88-3.25-4.19-5.44-5.63a11.9 11.9 0 00-8.14-1.49 19.79 19.79 0 00-2.41.49 32 32 0 00-1.89 10.86c0 17.67 14.33 18.28 32 18.28 8.58 0 16.36-.14 22.11-2.31l-1-1.79a24.88 24.88 0 00-3.42-5.33z"
        opacity={0.1}
      />
    </svg>
  );
};

SvgDiscount.propTypes = {
  color: PropTypes.string
};
SvgDiscount.defaultProps = {
  color: "primary"
};
export default SvgDiscount;
