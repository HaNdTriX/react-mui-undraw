import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWorkingRemotely = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1144 637"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1144 416.31a180.56 180.56 0 01-26.12 93.88c0 34.62-16.14 66-42.32 88.87a144.74 144.74 0 01-21.08 15.28c-.3.19-.61.37-.92.55-.56.33-1.12.66-1.69 1l-.53.31a141.39 141.39 0 01-7.32 3.87 165.67 165.67 0 01-73.76 17H217.17q-9 0-17.84-.72a211.15 211.15 0 01-61.06-14.14q-5.72-2.26-11.22-4.86-2.62-1.23-5.19-2.53c-1.07-.54-2.14-1.1-3.2-1.66A190.5 190.5 0 01100 601.82a183.89 183.89 0 01-15.8-12.12c-34.03-29.2-55.08-69.61-55.08-114.2A180.5 180.5 0 010 376.82c0-99.14 79.24-179.51 177-179.51 3 0 6 .09 9 .25.43 0 .85 0 1.28.06 16.48-28.09 38.51-53.9 65-76.62C324.52 59.1 430.1 20.08 547.71 20.08c98.82 0 189.15 27.55 258.34 73.07A174.18 174.18 0 01892 70.6c97.74 0 177 80.37 177 179.51a184.9 184.9 0 01-1 18.78 180 180 0 0176 147.42z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M910.69 273.97v-10.73a39.05 39.05 0 10-29.38 0v10.73a55 55 0 00-25.54 15.53 55.08 55.08 0 00-31.08-22.52v-10.74a39.05 39.05 0 10-29.38 0v10.73a55 55 0 00-23.21 13.16 55.08 55.08 0 00-29.41-20.16v-10.73a39.05 39.05 0 10-29.38 0v10.73a55 55 0 00-26 16.06 55.09 55.09 0 00-36.57-33.06v-10.73a39.05 39.05 0 10-29.38 0v10.73a55 55 0 00-40 47.77 54.62 54.62 0 00-16.57-7.77v-10.73a39.05 39.05 0 10-29.38 0v10.73a55.18 55.18 0 00-34.66 28.7 54.58 54.58 0 00-15-6.7v-10.73a39.05 39.05 0 10-29.38 0v10.73a54.29 54.29 0 00-14.21 6.22 55.14 55.14 0 00-34.41-28.22v-10.73a39.05 39.05 0 10-29.38 0v10.73a55.1 55.1 0 00-35.87 31.36 55 55 0 00-18.75-9.36v-10.73a39.05 39.05 0 10-29.38 0v10.73a55 55 0 00-40.31 53v248H364v-22h52v22h110v-22h79v-40h68v17h82v7h86v7h110v-248a55 55 0 00-40.31-53z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M490.78 169h91.43A170.28 170.28 0 01752.5 339.28V570h-432V339.28A170.28 170.28 0 01490.78 169z"
        fill="#2f2e41"
      />
      <path
        d="M500.78 178.28h71.43A170.28 170.28 0 01742.5 348.56v212.15h-412V348.56a170.28 170.28 0 01170.28-170.28z"
        opacity={0.2}
      />
      <path
        d="M1044 602.59v17.46a165.67 165.67 0 01-73.76 17H217.17q-9 0-17.84-.72a211.15 211.15 0 01-61.06-14.14q-5.72-2.26-11.22-4.86-2.62-1.23-5.19-2.53c-1.07-.54-2.14-1.1-3.2-1.66A190.5 190.5 0 01100 601.82V554.4a28.9 28.9 0 0128.9-28.9h831.23a28.9 28.9 0 0119 7.17l55 48.2a28.87 28.87 0 019.87 21.72z"
        fill="#2f2e41"
      />
      <path
        d="M482.67 225.81q-32.71 2.16-65.17 7c-6.15.92-12.39 1.94-18 4.66a52.8 52.8 0 00-11.94 8.56 157.38 157.38 0 00-38 51.53c-5.57 12.15-9.57 25-14.82 37.25-18.69 43.75-52.59 79.53-72.32 122.82-4.27 9.37-7.87 19.15-9.3 29.34-1.48 10.54.2 22.84 8.86 29 4 2.83 8.86 4 13.62 5a1641.51 1641.51 0 00181.57 29.65c-6.61-6.38-8.82-16.27-7.95-25.41s4.46-17.78 8-26.25q-51.81-11.43-103.36-24c-5.13-1.25-11.29-3.6-11.92-8.84-.32-2.67 1-5.24 2.3-7.59a407.17 407.17 0 0152.4-74c0 28.06-1.39 59.75-1.39 87.82h324.1a248 248 0 01-6.84-48.85C711 369.74 729.1 316.39 724.4 262.74c-.44-4.95-1.12-10.05-3.71-14.29-4.47-7.32-13.39-10.35-21.59-12.85-31.44-9.56-63.54-19.23-96.4-18.48-9.77.23-19.5 1.37-29.21 2.52-29.59 3.49-61.09 4.2-90.82 6.17z"
        fill={color}
      />
      <path
        d="M330.88 548.32l23.6 75.53a2.36 2.36 0 002.25 1.65H458l-24-88-101.06 7.77a2.36 2.36 0 00-2.06 3.05z"
        fill="#656478"
      />
      <path
        d="M504 258.29c-4.4 2.53-9.53 3.44-14.53 4.31l-32.27 5.6c-6.28 1.09-12.89 2.33-17.73 6.48-9.9 8.47-7.76 24.06-4.76 36.74l6 25.44c4.52 19.12 9.14 38.47 18.41 55.79 16.19 30.23 45.89 52 78.55 62.49 11.67 3.75 24 6.19 36.18 4.85 23.86-2.62 44.27-19.63 56.85-40.08s18.57-44.17 24.06-67.55c5.27-22.38 10.28-45.08 9.94-68.08-.1-7.16-.82-14.64-4.64-20.71-8.37-13.33-27.34-14.33-42.89-11.87-2.42.39-4.93.81-7.26.08-7-2.18-7.16-11.79-10.16-18.46-5.67-12.58-22.49-14.81-36.24-13.67s-35.16 2.61-47.14 10.4c-11.52 7.45 1.14 20.45-12.37 28.24z"
        fill="#fbbebe"
      />
      <path
        d="M504 258.29c-4.4 2.53-9.53 3.44-14.53 4.31l-32.27 5.6c-6.28 1.09-12.89 2.33-17.73 6.48-9.9 8.47-7.76 24.06-4.76 36.74l6 25.44c4.52 19.12 9.14 38.47 18.41 55.79 16.19 30.23 45.89 52 78.55 62.49 11.67 3.75 24 6.19 36.18 4.85 23.86-2.62 44.27-19.63 56.85-40.08s18.57-44.17 24.06-67.55c5.27-22.38 10.28-45.08 9.94-68.08-.1-7.16-.82-14.64-4.64-20.71-8.37-13.33-27.34-14.33-42.89-11.87-2.42.39-4.93.81-7.26.08-7-2.18-7.16-11.79-10.16-18.46-5.67-12.58-22.49-14.81-36.24-13.67s-35.16 2.61-47.14 10.4c-11.52 7.45 1.14 20.45-12.37 28.24z"
        opacity={0.1}
      />
      <path
        d="M477.29 286.95c4.88 10.24 8.54 21.1 14.44 30.79 4.69 7.7 10.7 14.49 16.68 21.24 15.49 17.52 31.18 35.18 50.35 48.52a222.93 222.93 0 0155.37-109c8.26-8.87 18.6-17.61 30.72-17.28 7.52.21 14.46 3.94 20.72 8.09 7 4.63 13.62 10 18.65 16.67 7.95 10.62 11.38 24.07 12 37.32s-1.44 26.47-3.48 39.57l-10.5 67.71c-.61 3.92-1.46 8.25-4.66 10.6a14.67 14.67 0 01-6 2.16c-38.17 7.43-77.51 2.61-116.4 2.23-43-.41-87.19 4.49-127.92-9.19-2.13-.72-4.34-1.55-5.78-3.26a12.06 12.06 0 01-2-4.31c-9.49-30.72-1.88-63.73 3.75-95.38a748.38 748.38 0 009.51-75.78c.17-2.29 25.33 2.77 28.14 4.39 7.65 4.53 12.73 17.19 16.41 24.91z"
        fill={color}
      />
      <g opacity={0.2}>
        <path
          d="M166.87 536.79c0 .46-.05.91-.1 1.35q-5.72-2.26-11.22-4.86a9.1 9.1 0 01-5.19-2.53c-1.07-.54-2.14-1.1-3.2-1.66a13.68 13.68 0 01.81-1.46c2.06-3.26 5.19-5.3 8.64-5.19s6.44 2.34 8.29 5.71a16.87 16.87 0 011.97 8.64z"
          fill="#3f3d56"
        />
        <path
          d="M167.41 519.67a16.88 16.88 0 01-2.51 8.48c-2.06 3.25-5.19 5.29-8.64 5.18l-.71-.05a9.1 9.1 0 01-5.19-2.53 12.53 12.53 0 01-2.39-3.12 17.55 17.55 0 01.54-17.12c2.06-3.26 5.19-5.3 8.64-5.19s6.44 2.34 8.29 5.71a16.87 16.87 0 011.97 8.64z"
          fill="#3f3d56"
        />
        <ellipse
          cx={185.25}
          cy={633.7}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 103.412 582.416)"
          fill="#3f3d56"
        />
        <ellipse
          cx={185.79}
          cy={616.59}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 103.95 565.298)"
          fill="#3f3d56"
        />
        <ellipse
          cx={186.33}
          cy={599.47}
          rx={14.01}
          ry={10.7}
          transform="rotate(-88.19 104.487 548.18)"
          fill="#3f3d56"
        />
        <path
          d="M122 349.55a49.66 49.66 0 01-3.8-6l28.26-3.73-30.46-.72a51.38 51.38 0 01.31-40.64l40.12 22.44-36.75-28.84a51.28 51.28 0 1182.84 60 51.12 51.12 0 015.55 9.53L171 379.43l39.33-11.83a51.34 51.34 0 01-9.8 47.9 51.28 51.28 0 11-80.53-2.57 51.28 51.28 0 012-63.38z"
          fill={color}
        />
        <path
          d="M212.5 384.12a51.06 51.06 0 01-12 31.35 51.28 51.28 0 11-80.5-2.54c-6.63-8.94 92.68-34.56 92.5-28.81z"
          opacity={0.1}
        />
      </g>
      <circle cx={68.02} cy={141.18} r={21.63} fill={color} opacity={0.1} />
      <circle cx={158.17} cy={21.63} r={21.63} fill={color} opacity={0.1} />
      <circle cx={150.84} cy={103.76} r={36.25} fill={color} opacity={0.1} />
      <circle cx={543} cy={185.5} r={84} fill="#fbbebe" />
      <path
        d="M508.88 20.67c-22.41 2.84-46.6 6.59-62.44 22.69-8.86 9-14.05 21-18.32 32.88-6.62 18.5-11.55 38-10 57.63 1.38 17.56 7.88 35.52 2.62 52.34-2.42 7.74-7.17 14.5-10.86 21.71-6.84 13.39-10.06 28.4-11.24 43.39-.82 10.31-.66 20.92 2.73 30.69 3.61 10.4 10.65 19.25 15.11 29.31 6.6 14.86 7.26 31.58 7.77 47.83s.94 32.39 1.32 48.58c.24 10.18.26 21.08-5.37 29.57 20.79-8.33 41.87-16.83 59.66-30.43s32.19-33.21 34.49-55.49c1.86-18.06-4.24-35.86-9.5-53.24-13-43-21.4-88.84-11.94-132.75 3.41-15.81 11.7-33.46 27.61-36.37 9.71-1.77 19.4 2.66 28.15 7.24 20.68 10.82 42 24.82 49.7 46.85 7 19.92 1.11 42.11-8 61.13s-21.51 36.51-28.59 56.39c-10.87 30.5-7.81 66.21 10.25 93.08s51.43 43.4 83.52 39.06c-2.51-10.84-10.38-19.6-14.6-29.9-7.67-18.71-2.5-40.23 5.75-58.69s19.51-35.67 24.67-55.27c3.64-13.8 4.08-28.22 4.06-42.49 0-22.46-1.11-44.93-3.27-67.29s-5.46-45-12.58-66.51c-5.72-17.25-14.05-33.93-26.51-47.16-13.26-14.09-30.52-23.64-47.47-33-10.14-5.58-20.5-11.23-31.88-13.32-9-1.65-18.46-4-27.64-4.15-6.24-.09-12.8 1.26-17.2 5.69z"
        fill="#434175"
      />
      <rect
        x={624.01}
        y={254.09}
        width={60.85}
        height={141.74}
        rx={2.9}
        transform="rotate(10.98 1324.752 113.662)"
        fill="#656478"
      />
      <rect
        x={628.09}
        y={254.88}
        width={60.85}
        height={141.74}
        rx={2.9}
        transform="rotate(10.98 1328.821 114.478)"
        fill="#3f3d56"
      />
      <ellipse
        cx={666.17}
        cy={286.29}
        rx={10.05}
        ry={4.15}
        transform="rotate(-79.02 572.402 237.527)"
        fill={color}
      />
      <path
        d="M655 201c-2.64-4.67-5.46-9.5-9.91-12.49a35 35 0 00-8.18-3.67c-9.69-3.39-19.54-6.81-29.79-7.35-1.67-.08-3.58 0-4.67 1.28-2.24 2.63 1.31 6.21 4.38 7.8l24.42 12.65-22.51-2.38c-3.27-.35-7.93.54-7.69 3.82.16 2.15 2.52 3.32 4.56 4 14.45 5 31.15 8.92 39.06 22-10.54-1-21.31-2-31.64.32-2.83.64-5.76 1.63-7.61 3.86s-2.06 6 .27 7.77c1.44 1.07 3.38 1.1 5.18 1 7.33-.35 14.85-1.81 21.89.28s13.29 9.47 10.86 16.39c6.24.56 13.62 0 19.39-2.69 6.36-3 6.21-8.64 5.82-15.44C668 224.83 661.39 212.4 655 201z"
        fill="#fbbebe"
      />
      <path
        d="M648.69 418.99a1125.21 1125.21 0 00-23-116.92c-5-20-10.68-40.34-9.25-60.92 20.66 2.63 39.17 4.58 58.21-3.86.31 10.81 8.15 20 11 30.45 1.91 7 1.19 14.41 1.94 21.62s3 14.2 4.93 21.21a260.23 260.23 0 016.63 106.74c-17.67 2.1-32.83 4.41-50.46 1.68z"
        opacity={0.1}
      />
      <path
        d="M645.69 418.99a1125.21 1125.21 0 00-23-116.92c-5-20-10.68-40.34-9.25-60.92 20.66 2.63 39.17 4.58 58.21-3.86.31 10.81 8.15 20 11 30.45 1.91 7 1.19 14.41 1.94 21.62s3 14.2 4.93 21.21a260.23 260.23 0 016.63 106.74c-17.67 2.1-32.83 4.41-50.46 1.68z"
        fill={color}
      />
      <path
        d="M356.63 613.77l9.79-242.87a14.86 14.86 0 0115-14.26l386.52 3.7a14.86 14.86 0 0114.65 16.16l-20.42 232.67a14.86 14.86 0 01-14.55 13.56l-375.88 6.5a14.87 14.87 0 01-15.11-15.46z"
        fill="#3f3d56"
      />
      <ellipse cx={572.5} cy={467} rx={17} ry={20} fill={color} />
      <path
        d="M936 453.26l-.8 6.86-13 110.86c-33.89 23.63-60.25.92-60.48 0L845.34 459.6l-.93-6.34z"
        fill="#3f3d56"
      />
      <path
        d="M936 453.26l-.8 6.86c-38.18 22.2-78.91 4.92-89.86-.52l-.93-6.34z"
        opacity={0.1}
      />
      <path d="M842.5 447.24v10s50.5 29.36 96 0v-10z" fill={color} />
      <path
        d="M848.37 434.03s-1.47 6.75-5.87 7.34v8.51h96v-7.63s-5.87-1.47-5-8.22z"
        fill={color}
      />
      <ellipse cx={890.21} cy={434.76} rx={43.3} ry={12.48} fill={color} />
      <ellipse cx={890.21} cy={434.76} rx={43.3} ry={12.48} opacity={0.1} />
      <path
        d="M928.22 434.03c0 5-16.42 9.1-36.69 9.1h-1.08c-13.61-.1-25.37-2-31.37-4.84-2.71-1.28-4.25-2.73-4.25-4.26 0-2.54 4.2-4.84 11-6.49a113.49 113.49 0 0125.73-2.61c20.24 0 36.66 4.07 36.66 9.1z"
        opacity={0.1}
      />
      <path
        d="M890.45 443.13c-13.61-.1-25.37-2-31.37-4.84l6.72-10.79zM852.1 434.73c-.52-.11-1.21.07-1.31.59a1.27 1.27 0 00.2.75 10.67 10.67 0 004.78 4.09 2.85 2.85 0 001.09.35 1 1 0 001-.52 1.13 1.13 0 00-.07-.93 4.13 4.13 0 00-1.24-1.36c-1.34-1.05-2.71-2.68-4.45-2.97z"
        opacity={0.1}
      />
      <circle cx={891.67} cy={515.79} r={25.83} fill={color} />
      <path
        d="M188.33 515.85h12.11a25 25 0 0125 25V578h-62.11v-37.15a25 25 0 0125-25z"
        fill="#3f3d56"
      />
      <path
        d="M188.33 515.85h12.11a25 25 0 0125 25V578h-62.11v-37.15a25 25 0 0125-25z"
        opacity={0.1}
      />
      <circle cx={191.9} cy={524.55} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={518.34} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={512.12} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={505.91} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={499.7} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={493.49} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={487.28} r={4.97} fill="#3f3d56" />
      <circle cx={199.36} cy={489.76} r={4.97} fill="#3f3d56" />
      <circle cx={204.33} cy={487.28} r={4.97} fill="#3f3d56" />
      <circle cx={209.3} cy={484.79} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={481.07} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={474.86} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={468.64} r={4.97} fill="#3f3d56" />
      <circle cx={191.9} cy={462.43} r={4.97} fill="#3f3d56" />
      <path
        d="M212.5 446.41c-1.23.18-2.47.31-3.71.39a28.56 28.56 0 003.21-3.3 21.22 21.22 0 00-3-5.83 10.22 10.22 0 01-4 1.26c-1.23.18-2.47.31-3.71.4 1.63-1.33 3.15-3.33 4.75-5a21.09 21.09 0 106.61 12zM229.11 471.1a9.68 9.68 0 01-4.18 1.39c-1.23.18-2.47.32-3.71.4a36.4 36.4 0 003.68-3.82 12.44 12.44 0 104.21 2z"
        fill={color}
      />
      <circle cx={184.45} cy={489.76} r={4.97} fill="#3f3d56" />
      <circle cx={179.48} cy={487.28} r={4.97} fill="#3f3d56" />
      <circle cx={174.51} cy={484.79} r={4.97} fill="#3f3d56" />
      <path
        d="M154.7 471.1a9.64 9.64 0 004.18 1.39c1.23.18 2.47.32 3.71.4a35.42 35.42 0 01-3.68-3.82 12.44 12.44 0 11-4.21 2z"
        fill={color}
      />
      <path
        d="M188.33 519.58h12.11a25 25 0 0125 25v32.87a4.24 4.24 0 01-4.24 4.24h-53.63a4.24 4.24 0 01-4.24-4.24v-32.87a25 25 0 0125-25z"
        fill="#3f3d56"
      />
      <g opacity={0.1}>
        <path d="M212.88 447.77a18.83 18.83 0 01-1.6 1.52c.57 0 1.13-.09 1.7-.15.02-.46-.05-.92-.1-1.37zM203.82 441.83c1.25-.08 2.48-.21 3.72-.39a12 12 0 003.23-.88 21.28 21.28 0 00-1.74-2.87 7.52 7.52 0 01-2 .85 28.79 28.79 0 01-3.21 3.29zM173.27 452.5a21.08 21.08 0 0132.5-17.76l.32-.34a21.1 21.1 0 10-27.82 31.73 21 21 0 01-5-13.63z" />
      </g>
      <g opacity={0.1}>
        <path d="M221.22 475.37c1.24-.08 2.48-.21 3.71-.39a9.7 9.7 0 004.18-1.4 12.43 12.43 0 015 8.8 11.38 11.38 0 00.07-1.31 12.38 12.38 0 00-5-10 9.68 9.68 0 01-4.18 1.39l-1 .13a25.37 25.37 0 01-2.78 2.78zM221.72 471.13a10.19 10.19 0 011.24.09c.65-.69 1.29-1.43 1.94-2.15a12.4 12.4 0 00-15.6 12c0 .42 0 .83.06 1.24a12.42 12.42 0 0112.36-11.18z" />
      </g>
      <g opacity={0.1}>
        <path d="M162.59 475.37c-1.24-.08-2.48-.21-3.71-.39a9.65 9.65 0 01-4.18-1.4 12.43 12.43 0 00-5 8.8 11.38 11.38 0 01-.07-1.31 12.38 12.38 0 015-10 9.64 9.64 0 004.18 1.39l1 .13a23.67 23.67 0 002.78 2.78zM162.09 471.13a10.36 10.36 0 00-1.25.09c-.64-.69-1.28-1.43-1.93-2.15a12.4 12.4 0 0115.6 12c0 .42 0 .83-.06 1.24a12.42 12.42 0 00-12.36-11.18z" />
      </g>
    </svg>
  );
};

SvgWorkingRemotely.propTypes = {
  color: PropTypes.string
};
SvgWorkingRemotely.defaultProps = {
  color: "primary"
};
export default SvgWorkingRemotely;
