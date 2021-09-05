import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCoWorking = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1120.61 862.52"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Co-Working_svg__a"
          x1={922.95}
          y1={714.28}
          x2={922.95}
          y2={199.47}
          gradientTransform="matrix(1 .09 -.09 1 45.13 -84.62)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Co-Working_svg__b"
          x1={329.5}
          y1={708.38}
          x2={329.5}
          y2={197}
          xlinkHref="#Co-Working_svg__a"
        />
      </defs>
      <path
        d="M1050 488.26c-41.29 62.11-30.84 148.44-10.05 216.82 7 22.89 14.91 47.08 10.21 72.38-5.75 30.94-29.19 54.77-53.22 68.11-43.79 24.33-94.62 22.33-132.33-5.19-32.59-23.79-54.74-64.38-88-87-55.59-37.72-129.82-17.54-193.92 14.88-45.35 22.91-95.14 52.13-138.12 33.8-30.24-12.9-49.84-47.64-59.58-85.15-4.7-18.11-7.78-37.84-17.8-51.81-6-8.3-14-14-22.29-18.63-75.71-42.74-175.6-11.15-248.85-59.21-49.43-32.4-78.84-97.54-89.82-166.69S.66 277.87 8 205.49c5.21-51.43 12.68-106.45 41.37-147.68C79.72 14.2 128.95-4.37 172.37.86s81.6 31.13 114.83 62.4c41.53 39 79.37 88.46 132.1 102 35.91 9.25 74.61.57 112.35-4 63.1-7.55 125.63-3.35 187.74 1.64 59.47 4.78 119.32 10.39 175.17 30.77 39.52 14.42 70.34 43.14 107.39 62.24 24.15 12.45 51.05 14.63 73.68 31 27.88 20.15 52.52 56.69 42.83 101.84-9.21 42.99-46.55 66.51-68.46 99.51z"
        fill={color}
        opacity={0.1}
      />
      <path fill={color} opacity={0.1} d="M880.8 256.42h40.89v61.9H880.8z" />
      <path
        fill={color}
        opacity={0.1}
        d="M884.77 262.44h32.94v49.86h-32.94zM797.8 213.42h62.8v61.9h-62.8z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M803.9 219.44h50.59v49.86H803.9zM64.62 121.32h191.95v5.11H64.62zM64.62 146.31h191.95v5.11H64.62z"
      />
      <path fill="#d6d6e3" d="M388.43 452.63h19.61v219.14h-19.61z" />
      <path
        d="M980.84 475.64V273.5a21.25 21.25 0 0121.25-21.24 21.25 21.25 0 0121.21 21.24v244.64a21.25 21.25 0 01-21.25 21.25H870.44a21.25 21.25 0 01-21.25-21.25 21.25 21.25 0 0121.25-21.25h89.15a21.25 21.25 0 0021.25-21.25z"
        fill="#aebee1"
      />
      <path
        d="M980.84 475.64V273.5a21.25 21.25 0 0121.25-21.24 21.25 21.25 0 0121.21 21.24v244.64a21.25 21.25 0 01-21.25 21.25H870.44a21.25 21.25 0 01-21.25-21.25 21.25 21.25 0 0121.25-21.25h89.15a21.25 21.25 0 0021.25-21.25z"
        fill="#535461"
      />
      <path
        d="M849.22 517a21.25 21.25 0 0121.22-20.11h89.15a21.25 21.25 0 0021.25-21.25V273.5a21.25 21.25 0 0120.23-21.24V517z"
        fill="#d6d6e3"
      />
      <path
        d="M192.5 482.46V280.32a21.25 21.25 0 00-21.2-21.25 21.25 21.25 0 00-21.25 21.25v244.64a21.25 21.25 0 0021.25 21.3h131.6a21.25 21.25 0 0021.25-21.25 21.25 21.25 0 00-21.25-21.25h-89.14a21.25 21.25 0 01-21.26-21.3z"
        fill="#aebee1"
      />
      <path
        d="M192.5 482.46V280.32a21.25 21.25 0 00-21.2-21.25 21.25 21.25 0 00-21.25 21.25v244.64a21.25 21.25 0 0021.25 21.3h131.6a21.25 21.25 0 0021.25-21.25 21.25 21.25 0 00-21.25-21.25h-89.14a21.25 21.25 0 01-21.26-21.3z"
        fill="#535461"
      />
      <path
        d="M324.12 523.82a21.25 21.25 0 00-21.22-20.11h-89.14a21.25 21.25 0 01-21.26-21.25V280.32a21.25 21.25 0 00-20.2-21.22v264.72zM776.4 452.63h19.61v224.25H776.4z"
        fill="#d6d6e3"
      />
      <path
        opacity={0.1}
        d="M388.43 452.63h19.61v16.2h-19.61zM776.4 452.63h19.61v16.2H776.4zM458.47 319.18q-.47 5.18-1.19 10.5h-2.77v-10.5z"
      />
      <path
        d="M538.82 428.26c.06 3.55-2.5 6.46-5.67 6.46H473.3v-6.24h49.8c2.15 0 3.49-2.6 2.41-4.68l-45.16-91.85a4 4 0 00-3.5-2.26h-22.34v-10.5h28.21a2.8 2.8 0 012.45 1.58l51.77 100a17 17 0 011.88 7.49z"
        fill="#535461"
      />
      <path
        d="M428.9 411.6l-.82 1.38-7.67-5.12 23.73-182.47h6.11s.25.84.66 2.44C455 243.6 475.09 332.91 428.9 411.6z"
        fill="#535461"
      />
      <path
        d="M450.9 227.83l-22 183.77-.82 1.38-7.67-5.12 23.73-182.47h6.11s.24.87.65 2.44z"
        opacity={0.1}
      />
      <path
        fill="#d6d6e3"
        d="M413.47 411.449l22.511-187.947 14.397 1.724-22.51 187.947z"
      />
      <path
        d="M364.13 428.33a1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.71-1.71.83.83 0 010-.2 1.71 1.71 0 011.69-1.5h2.56a1.72 1.72 0 011.65 1.3 1.58 1.58 0 01.08.4zM371.8 428.33a1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.71-1.71 1.68 1.68 0 01.07-.47 1.61 1.61 0 01.43-.73 1.67 1.67 0 011.2-.5h2.56a1.72 1.72 0 011.57 1 1.76 1.76 0 01.15.7zM378.62 428.33a1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.71-1.71 1.62 1.62 0 01.15-.71 1.74 1.74 0 011.55-1h2.56a1.7 1.7 0 011.71 1.71zM386.3 428.33a1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.4-2.69l.2-.22a1.67 1.67 0 011.2-.5h2.56a1.72 1.72 0 011.24.55 1.65 1.65 0 01.47 1.15z"
        fill="#e3edf9"
      />
      <path
        d="M364.08 427.92a1.58 1.58 0 01.05.41 1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.71-1.71.83.83 0 010-.2zM371.66 427.65a1.76 1.76 0 01.14.67 1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.71-1.71 1.68 1.68 0 01.07-.47zM378.37 427.42a1.72 1.72 0 01.26.9 1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.71-1.71 1.62 1.62 0 01.15-.71zM386.3 428.33a1.72 1.72 0 01-1.71 1.71h-2.56a1.71 1.71 0 01-1.4-2.69l5.2-.18a1.65 1.65 0 01.47 1.16z"
        opacity={0.1}
      />
      <path
        d="M401.64 435.15h-49.45v-2.25a3.85 3.85 0 013.72-3.85l39.66-1.37a5.88 5.88 0 016.08 5.87z"
        fill="#d6d6e3"
      />
      <path
        d="M645.61 428.26c-.06 3.55 2.5 6.46 5.67 6.46h59.88v-6.24H661.3c-2.15 0-3.49-2.6-2.41-4.68l45.16-91.85a4 4 0 013.5-2.26h22.35v-10.5h-28.19a2.8 2.8 0 00-2.41 1.57l-51.77 100a17 17 0 00-1.92 7.5z"
        fill="#535461"
      />
      <path
        d="M755.54 411.6l.82 1.38 7.67-5.12-23.73-182.47h-6.11s-.25.84-.66 2.44c-4.1 15.77-24.23 105.08 22.01 183.77z"
        fill="#535461"
      />
      <path
        d="M733.53 227.83l22 183.77.82 1.38 7.67-5.12-23.72-182.47h-6.11s-.25.87-.66 2.44z"
        opacity={0.1}
      />
      <path
        fill="#d6d6e3"
        d="M734.07 225.208l14.397-1.724 22.511 187.946-14.397 1.725z"
      />
      <path
        d="M820.3 428.33a1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.71-1.71.83.83 0 000-.2 1.71 1.71 0 00-1.69-1.5h-2.56a1.72 1.72 0 00-1.65 1.3 1.58 1.58 0 00-.08.4zM812.63 428.33a1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.71-1.71 1.68 1.68 0 00-.07-.47 1.61 1.61 0 00-.43-.73 1.67 1.67 0 00-1.2-.5h-2.61a1.72 1.72 0 00-1.57 1 1.76 1.76 0 00-.1.7zM805.81 428.33a1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.71-1.71 1.62 1.62 0 00-.15-.71 1.74 1.74 0 00-1.55-1h-2.56a1.7 1.7 0 00-1.71 1.71zM798.13 428.33a1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.4-2.69l-.2-.22a1.67 1.67 0 00-1.2-.5h-2.56a1.72 1.72 0 00-1.24.55 1.65 1.65 0 00-.47 1.15z"
        fill="#e3edf9"
      />
      <path
        d="M820.35 427.92a1.58 1.58 0 00-.05.41 1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.71-1.71.83.83 0 000-.2zM812.77 427.65a1.76 1.76 0 00-.14.67 1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.71-1.71 1.68 1.68 0 00-.07-.47zM806.06 427.42a1.72 1.72 0 00-.26.9 1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.71-1.71 1.62 1.62 0 00-.15-.71zM798.13 428.33a1.72 1.72 0 001.71 1.71h2.56a1.71 1.71 0 001.4-2.69l-5.2-.18a1.65 1.65 0 00-.47 1.16z"
        opacity={0.1}
      />
      <path
        d="M782.79 435.15h49.45v-2.25a3.85 3.85 0 00-3.72-3.85l-39.66-1.37a5.88 5.88 0 00-6.08 5.87z"
        fill="#d6d6e3"
      />
      <path
        d="M1029.47 481c23.07-39.13 14.71-118.06 15.64-119.57.83-1.33-2.35-38.5-23.55-47.58-3.83-7.59-7.6-16.14-7.6-16.14a6.73 6.73 0 01-1.22.91q-.25-.68-.49-1.38c-.27-.79-.52-1.6-.77-2.41a15.53 15.53 0 001.81.46 7.54 7.54 0 004.84-.43 5.39 5.39 0 001.39-1.07c1.67-1.11 2.59-3.11 3.37-5l6.17-14.78c2.78-6.67 5.58-13.38 7.06-20.45a57.58 57.58 0 00-2.46-31.86c-1.46-3.88-3.48-7.76-6.91-10.08-6.87-4.66-16.43-1.44-24.28-4.17-2.58-.9-4.91-2.42-7.49-3.34-5.57-2-11.86-.93-17.22 1.56s-9.7 6.45-14.39 10c-2.31 1.77-6 3.6-8.72 6-2.64 2.06-4.67 4.55-4.28 7.83.44 3.75 4.39 6 8.07 6.88.61.14 1.24.25 1.86.36a36 36 0 0015.37 59.8 84.36 84.36 0 014.86 10.93q.27.77.53 1.55c-6.06 1.72-10.8 3.15-11.75 3.94-2.87 2.38 3.14 23.22 3.14 23.22-1.53 1.94-3.09 4.15-4.67 6.52a140.55 140.55 0 00-22.16 60.57c-1 7.91-2.3 16-3.95 23.69L870 412.59l-.15 1.77-1.71-.42-5.38-1.33-.21 1.21-.82-.39c-13.33-6.25-35.79-14.23-51-6-16.05 8.64 18.59 20.12 40.82 26.23-7.37.36-14.42 2.13-20 6.27-16.12 12.08 29.47 18.37 51 20.6l.87.09v.46l7.46.69 1.75.16.17 2.66s10.68 1.75 24.95 3.87c-16.29 4.07-36.42 6.89-50.4 8.54-14.82 1.74-27.44 12.06-31.42 26.45a23.52 23.52 0 00-.36 12.72c4.16 14.53-.92 121.42-2.07 144.44l-26.35 15.17s-41 5-13.69 14.61a56.16 56.16 0 007.53 2c-3.6 2.32-3.29 5.35 7.32 9.07 27.33 9.58 90.86-.42 90.86-.42s-1.39-11.26-3.65-20.62l.7.06s-6.56-24.41 3.39-36.72-1.67-106-1.67-106 17.42-7.21 69.49-7.68c42 10.78 62.47-27.81 62.18-47.76-.09-.45-.11-.91-.14-1.32z"
        transform="translate(-39.7 -18.74)"
        fill="url(#Co-Working_svg__a)"
      />
      <path
        d="M834.55 401.62l-4.45 18s-4-.9-10-2.44c-20.32-5.26-63.18-17.89-46-27.16 14.81-8 36.62-.22 49.57 5.85 4.74 2.23 8.3 4.23 9.89 5.17.67.38.99.58.99.58z"
        fill="#f8b9bf"
      />
      <path
        d="M833.3 406.7l-3.2 13s-4-.9-10-2.44l3.61-21.31c4.74 2.23 8.3 4.23 9.89 5.17z"
        opacity={0.1}
      />
      <path
        fill="#d9dfe8"
        d="M833.31 420.93l-12.42-3.07 3.86-22.76 9.93 2.45-1.37 23.38z"
      />
      <path
        opacity={0.1}
        d="M833.31 420.93l-5.36-1.32 2.02-23.22 4.71 1.16-1.37 23.38z"
      />
      <path
        d="M953.15 326.66s-23.85-13.78-34.45 25.75-11.6 57.74-11.6 57.74l-75.32-15.06-2.39 27.51s80.53 26 90.66 24.11 43-57 43-57 29.88-42.71-9.9-63.05z"
        fill={color}
      />
      <g opacity={0.1}>
        <path d="M834.55 401.62l-4.45 18s-4-.9-10-2.44c-20.32-5.26-63.18-17.89-46-27.16 14.81-8 36.62-.22 49.57 5.85 4.74 2.23 8.3 4.23 9.89 5.17.67.38.99.58.99.58z" />
        <path
          d="M833.3 406.7l-3.2 13s-4-.9-10-2.44l3.61-21.31c4.74 2.23 8.3 4.23 9.89 5.17z"
          opacity={0.1}
        />
        <path d="M833.31 420.93l-12.42-3.07 3.86-22.76 9.93 2.45-1.37 23.38z" />
        <path
          opacity={0.1}
          d="M833.31 420.93l-5.36-1.32 2.02-23.22 4.71 1.16-1.37 23.38z"
        />
        <path d="M953.15 327.66s-23.85-13.78-34.45 25.75-11.6 57.74-11.6 57.74l-75.32-15.06-2.39 27.51s80.53 26 90.66 24.11 43-57 43-57 29.88-42.71-9.9-63.05z" />
      </g>
      <path
        d="M801.45 632.96l-30.75 17.71s-39.84 4.88-13.3 14.18 88.24-.41 88.24-.41-3.43-27.72-8.21-31.59-35.98.11-35.98.11z"
        fill="#68739d"
      />
      <path
        d="M921.3 434.26s-15.3 8-42.48 14.91c-15.93 4-35.87 6.84-49.65 8.46a35.81 35.81 0 00-30.52 25.63 22.84 22.84 0 00-.35 12.4c4.53 15.83-2.23 144.51-2.23 144.51l46.7 4.32s-6.37-23.71 3.3-35.66-1.62-102.91-1.62-102.91 16.92-7 67.48-7.46c46.84 12 66.14-39.27 58.91-53.64s-49.54-10.56-49.54-10.56z"
        fill="#6394e2"
      />
      <g opacity={0.1}>
        <path d="M801.45 632.96l-30.75 17.71s-39.84 4.88-13.3 14.18 88.24-.41 88.24-.41-3.43-27.72-8.21-31.59-35.98.11-35.98.11z" />
        <path d="M921.3 434.26s-15.3 8-42.48 14.91c-15.93 4-35.87 6.84-49.65 8.46a35.81 35.81 0 00-30.52 25.63 22.84 22.84 0 00-.35 12.4c4.53 15.83-2.23 144.51-2.23 144.51l46.7 4.32s-6.37-23.71 3.3-35.66-1.62-102.91-1.62-102.91 16.92-7 67.48-7.46c46.84 12 66.14-39.27 58.91-53.64s-49.54-10.56-49.54-10.56z" />
      </g>
      <path
        d="M815.87 643.71l-30.75 17.71s-39.82 4.84-13.3 14.18 88.24-.41 88.24-.41-3.43-27.72-8.21-31.59-35.98.11-35.98.11z"
        fill="#68739d"
      />
      <path
        d="M926.3 509.21c-50.56.46-67.48 7.46-67.48 7.46s11.29 91 1.62 102.91-3.3 35.66-3.3 35.66l-46.7-4.32s.08-1.52.21-4.24c1.12-22.36 6.05-126.16 2-140.27a22.84 22.84 0 01.35-12.36 35.82 35.82 0 0130.51-25.69c13.77-1.61 33.71-4.41 49.64-8.46l.78-.2c26.7-6.86 41.7-14.71 41.7-14.71s42.31-3.8 49.54 10.57a17 17 0 011.48 7.25c.36 19.39-19.54 56.87-60.35 46.4z"
        fill="#6394e2"
      />
      <path
        d="M855.87 424.05l-1.71 18.5s-4.11-.29-10.22-.93c-20.87-2.17-65.14-8.27-49.49-20 13.46-10.08 36.18-5.68 49.89-1.6 5 1.5 8.84 2.95 10.55 3.64.63.24.98.39.98.39zM980.08 303.1s-6.26 4.9-13.91 10.28c-8.39 1.9-18.13 3.47-25.15 4.49 2.51-8 1-17-1.83-24.89a93.69 93.69 0 00-12.55-23.08l42.32-13.21c-3.32 8.41-1.82 18 1 26.34a86.85 86.85 0 0010.12 20.07z"
        fill="#f8b9bf"
      />
      <path
        d="M855.39 429.26l-1.23 13.29s-4.11-.29-10.22-.93l.4-21.61c5 1.5 8.84 2.95 10.55 3.64z"
        opacity={0.1}
      />
      <path
        fill="#d9dfe8"
        d="M857.52 443.33l-12.74-1.18.42-23.08 10.19.94 2.13 23.32z"
      />
      <path
        d="M980.08 303.1s-6.26 4.9-13.91 10.28c-8.39 1.9-18.13 3.47-25.15 4.49 2.51-8 1-17-1.83-24.89 10.34-3 25.13-6.88 30.78-10a86.85 86.85 0 0010.11 20.12z"
        opacity={0.1}
      />
      <path
        d="M971.62 283.48s7.08 16.07 11.54 23.33-51.82 14-51.82 14-5.84-20.23-3.05-22.55 38.62-10.08 43.33-14.78z"
        fill="#d9dfe8"
      />
      <path
        d="M986.73 462.82a50.63 50.63 0 01-8.76 11.34c-24.86 23.62-65.61-1-84-14.46 26.7-6.86 41.7-14.71 41.7-14.71s42.31-3.8 49.54 10.57a17 17 0 011.52 7.26z"
        opacity={0.1}
      />
      <path
        d="M978.13 472.47c-28.26 26.84-77-8.7-90.14-19.17-2.13-1.7-3.32-2.75-3.32-2.75 5.19-4.86 9.75-15.16 13.36-27.76a243.61 243.61 0 007.27-36.78 136.5 136.5 0 0121.52-58.83c1.53-2.3 3-4.45 4.53-6.33 10.67-13.57 28.6-22.19 28.6-22.19 37.84-11.06 42.93 45.07 41.92 46.69s9.11 95.91-23.74 127.12z"
        fill={color}
      />
      <path
        d="M981.79 395.74s-24.33 59.4-34.06 62.79c-5.57 1.93-35.32-1.73-59.74-5.22-2.13-1.7-3.32-2.75-3.32-2.75 5.19-4.86 9.75-15.16 13.36-27.76l31.45 1.5s-1.75-18.14 2.87-58.82 30.23-30.6 30.23-30.6c42.37 14.19 19.21 60.86 19.21 60.86zM857.52 443.33l-5.5-.51-1.46-23.25 4.83.44 2.13 23.32z"
        opacity={0.1}
      />
      <path
        d="M961.97 332.26s-25.61-10.07-30.23 30.6-2.87 58.82-2.87 58.82l-76.73-3.67 1.73 27.56s83.51 13.71 93.24 10.33 34.06-62.79 34.06-62.79 23.13-46.67-19.2-60.85z"
        fill={color}
      />
      <path
        d="M963.69 272.04c-1.12-6.08 5.23-6 7.51-11.72l-42.32 13.21a93.4 93.4 0 017.84 12.47 35.11 35.11 0 006.73 1.3c10.09.96 13.24-8.97 20.24-15.26z"
        opacity={0.1}
      />
      <circle
        cx={984.12}
        cy={267.59}
        r={34.96}
        transform="rotate(-84.72 953.977 279.997)"
        fill="#f8b9bf"
      />
      <path
        d="M909.9 217.26c.43 3.64 4.27 5.86 7.84 6.68s7.44.86 10.57 2.77c5 3.08 6.35 9.92 5.72 15.8-.35 3.32-.85 7.39 1.87 9.32a7.25 7.25 0 002.8 1 26.26 26.26 0 008.62.3c1.68-.22 3.41-.6 5-.13 2.62.76 4.17 3.52 4.68 6.19s.23 5.45.64 8.14a16.9 16.9 0 0013.32 13.74 7.33 7.33 0 004.7-.42c1.9-1 2.87-3.13 3.69-5.12l6-14.36c2.7-6.47 5.42-13 6.86-19.86a55.92 55.92 0 00-2.39-30.94c-1.42-3.76-3.38-7.53-6.71-9.79-6.67-4.53-16-1.4-23.58-4-2.51-.87-4.77-2.35-7.27-3.24-5.41-1.93-11.52-.91-16.73 1.52s-9.42 6.26-14 9.75c-3.97 3.09-12.38 6.36-11.63 12.65z"
        opacity={0.1}
      />
      <path
        d="M910.82 216.49c.43 3.64 4.27 5.86 7.84 6.68s7.44.86 10.57 2.77c5 3.08 6.35 9.92 5.72 15.8-.35 3.32-.85 7.39 1.87 9.32a7.25 7.25 0 002.8 1 26.26 26.26 0 008.62.3c1.68-.22 3.41-.6 5-.13 2.62.76 4.17 3.52 4.68 6.19s.23 5.45.64 8.14a16.9 16.9 0 0013.32 13.74 7.33 7.33 0 004.7-.42c1.9-1 2.87-3.13 3.69-5.12l6-14.36c2.7-6.47 5.42-13 6.86-19.86a55.92 55.92 0 00-2.39-30.94c-1.42-3.76-3.38-7.53-6.71-9.79-6.67-4.53-16-1.4-23.58-4-2.51-.87-4.77-2.35-7.27-3.24-5.41-1.93-11.52-.91-16.73 1.52s-9.42 6.26-14 9.75c-3.96 3.09-12.37 6.36-11.63 12.65z"
        fill="#b96b6b"
      />
      <path
        d="M939.78 354.6s-13.35 51.86-26.64 56.66-7.42 6.16-7.42 6.16"
        opacity={0.1}
      />
      <path fill="#d6d6e3" d="M925.9 544.58h14.51v95.37H925.9z" />
      <path opacity={0.1} d="M925.9 544.58h14.51v7.07H925.9z" />
      <path
        d="M896.87 544.08v2a4.69 4.69 0 004.69 4.69h63.18a4.69 4.69 0 004.69-4.69v-2a4.69 4.69 0 00-4.69-4.69h-63.18a4.69 4.69 0 00-4.69 4.69z"
        fill="#d6d6e3"
      />
      <path
        d="M897.95 541.1h70.41a4.67 4.67 0 00-3.62-1.71h-63.18a4.67 4.67 0 00-3.61 1.71z"
        opacity={0.1}
      />
      <rect
        x={873.56}
        y={634.76}
        width={119.21}
        height={11.4}
        rx={5.5}
        ry={5.5}
        fill="#d6d6e3"
      />
      <circle cx={986.03} cy={653.42} r={7.26} fill="#535461" />
      <circle cx={880.29} cy={653.42} r={7.26} fill="#535461" />
      <circle cx={933.16} cy={653.42} r={7.26} fill="#535461" />
      <rect
        x={917.74}
        y={427.44}
        width={114.03}
        height={17.62}
        rx={8.5}
        ry={8.5}
        fill="#d6d6e3"
      />
      <path
        d="M940.41 634.76s-5.7 5.63-14.51 0M1031.77 436.43v1.39a7.25 7.25 0 01-7.25 7.25h-99.53a7.25 7.25 0 01-7.25-7.25v-1.39z"
        opacity={0.1}
      />
      <path fill="#d6d6e3" d="M822.44 452.63h19.61v249.86h-19.61z" />
      <path opacity={0.1} d="M822.44 452.63h19.61v16.2h-19.61z" />
      <path fill="#d6d6e3" d="M232.94 551.4h14.51v95.37h-14.51z" />
      <path opacity={0.1} d="M232.94 551.4h14.51v7.07h-14.51z" />
      <path
        d="M276.47 550.91v2a4.69 4.69 0 01-4.69 4.69H208.6a4.69 4.69 0 01-4.69-4.69v-2a4.69 4.69 0 014.69-4.65h63.18a4.69 4.69 0 014.69 4.69z"
        fill="#d6d6e3"
      />
      <path
        d="M275.4 547.92h-70.42a4.67 4.67 0 013.62-1.66h63.18a4.67 4.67 0 013.62 1.66z"
        opacity={0.1}
      />
      <rect
        x={180.59}
        y={641.58}
        width={119.21}
        height={11.4}
        rx={5.5}
        ry={5.5}
        fill="#d6d6e3"
      />
      <circle cx={187.33} cy={660.24} r={7.26} fill="#535461" />
      <circle cx={293.06} cy={660.24} r={7.26} fill="#535461" />
      <circle cx={240.19} cy={660.24} r={7.26} fill="#535461" />
      <path d="M232.94 641.58s5.7 5.63 14.51 0" opacity={0.1} />
      <path
        d="M603.11 354.48s-16.28-29.59-10.33-55.31a51.17 51.17 0 00-2.85-32.24 86.06 86.06 0 00-7.63-13.74"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M585.91 236.95c.85 3.88-3.7 16.67-3.7 16.67s-9.49-9.7-10.35-13.58a7.19 7.19 0 1114-3.09zM602.24 255.88c-1.39 3.72-12.16 12-12.16 12s-2.7-13.3-1.3-17a7.19 7.19 0 1113.47 5zM609.8 292.7c-3.08 2.51-16.55 4.2-16.55 4.2s4.39-12.84 7.47-15.35a7.19 7.19 0 119.08 11.15zM609.25 321.84c-2.61 3-15.6 6.94-15.6 6.94s2.15-13.4 4.76-16.39a7.19 7.19 0 1110.83 9.45zM575.5 271.85c3.38 2.09 16.95 2 16.95 2s-6-12.17-9.38-14.26a7.19 7.19 0 10-7.57 12.22zM575.3 305.95c3.85 1 16.78-3.12 16.78-3.12s-9.37-9.82-13.22-10.8a7.19 7.19 0 00-3.56 13.92zM579.63 339.11c3.62 1.62 17.07-.24 17.07-.24s-7.58-11.26-11.2-12.88a7.191 7.191 0 00-5.87 13.13z"
        fill={color}
      />
      <path
        d="M585.91 236.95c.85 3.88-3.7 16.67-3.7 16.67s-9.49-9.7-10.35-13.58a7.19 7.19 0 1114-3.09zM602.24 255.88c-1.39 3.72-12.16 12-12.16 12s-2.7-13.3-1.3-17a7.19 7.19 0 1113.47 5zM609.8 292.7c-3.08 2.51-16.55 4.2-16.55 4.2s4.39-12.84 7.47-15.35a7.19 7.19 0 119.08 11.15zM609.25 321.84c-2.61 3-15.6 6.94-15.6 6.94s2.15-13.4 4.76-16.39a7.19 7.19 0 1110.83 9.45zM575.5 271.85c3.38 2.09 16.95 2 16.95 2s-6-12.17-9.38-14.26a7.19 7.19 0 10-7.57 12.22zM575.3 305.95c3.85 1 16.78-3.12 16.78-3.12s-9.37-9.82-13.22-10.8a7.19 7.19 0 00-3.56 13.92zM579.63 339.11c3.62 1.62 17.07-.24 17.07-.24s-7.58-11.26-11.2-12.88a7.191 7.191 0 00-5.87 13.13zM596.49 436.55a17.14 17.14 0 01-17.11-18.22l4.79-75.9h24.64l4.79 75.9a17.14 17.14 0 01-17.11 18.22z"
        fill={color}
      />
      <path
        fill={color}
        opacity={0.1}
        d="M83.6 63.42h14v58h-14zM101.6 63.42h14v58h-14zM119.6 63.42h14v58h-14zM137.6 63.42h14v58h-14zM173.6 63.42h14v58h-14zM191.6 63.42h14v58h-14z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M83.6 74.42h14v3h-14zM83.6 110.42h14v3h-14zM101.6 74.42h14v3h-14zM101.6 110.42h14v3h-14zM119.6 74.42h14v3h-14zM119.6 110.42h14v3h-14zM137.6 74.42h14v3h-14zM137.6 110.42h14v3h-14zM155.6 74.42h14v3h-14zM155.6 110.42h14v3h-14zM173.6 74.42h14v3h-14zM173.6 110.42h14v3h-14zM191.6 74.42h14v3h-14zM191.6 110.42h14v3h-14z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M155.6 63.42h14v58h-14zM206.06 69.035l12.706-5.881 24.365 52.634-12.705 5.881z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M210.686 79.027l12.705-5.881 1.26 2.722-12.705 5.881zM225.801 111.693l12.705-5.881 1.26 2.722-12.705 5.881z"
      />
      <path
        d="M428.84 680.21L403.43 664c-.13-22.83-.49-128.82 4.26-143a23.29 23.29 0 00.2-12.61c-3.3-14.41-15.34-25.17-29.93-27.54-13.76-2.24-33.56-5.91-49.5-10.65 14.21-1.47 24.86-2.74 24.86-2.74l.28-2.63 9.15-.44V464l.87-.05c21.37-1.27 66.75-5.5 51.33-18.16-5.29-4.34-12.19-6.39-19.47-7.08 22.26-5.08 57.05-14.92 41.54-24.17-14.74-8.78-37.31-1.88-50.78 3.73l-.83.35-.15-1.21-5.38 1.08-1.71.34-.08-1.76-75.49 11.66a257.66 257.66 0 00-3.08-25.81c1.69-11.26 9.55-27.68 6.78-36.49-3.22-10.23-16.44-13.58-22-22.82-1.46-2.41-2.91-4.67-4.33-6.65a70 70 0 00-10.65-11.51 48.6 48.6 0 013.92-17.25 83.57 83.57 0 015.28-10.6 35.6 35.6 0 0026.44-41c4.78 2.05 10.59 2.26 13.58-1.74l-1.42-.55c.14-.15.28-.3.4-.47-2.91-1.11-6-2.37-8.28-4.39a9.7 9.7 0 01-1.45-2.15c-1.38-2.8-1.22-6.16-2.54-9a10.41 10.41 0 00-2.59-3.38 17.83 17.83 0 00-8.46-4.84c-3.61-1.05-7.41-1.58-10.87-3a36.75 36.75 0 00-39.11-11l-1.25.43a16.31 16.31 0 00-31.81-7.2 16.27 16.27 0 014.36-9.74c-.26.22-.53.43-.78.66a16.32 16.32 0 00-.71 23.07l.29.28a16.39 16.39 0 004.09 3.58 16.32 16.32 0 01-10.76-13.37v1A16.32 16.32 0 00225 230.13l.45-.05-.24.33a36.71 36.71 0 003.3 45.45 17 17 0 002.62 4.2 13.61 13.61 0 001.21 1.22 15.51 15.51 0 0010.46 4.82q1 1.19 2.13 2.29a59.52 59.52 0 01-2.58 8.24 87.34 87.34 0 01-7.92 15.27c-21.6 6.14-23.5 42.82-22.72 44.21.93 1.66-3.22 59.26 12.78 128.84-.66 19.89 10.94 52.78 52.12 44.11 51.5 2.75 68.39 10.64 68.39 10.64s-4.89 89.57 2.09 102.61c4.37 8.17 1.27 20.17-2 28.64a31.47 31.47 0 00-2.88 6.64c-1 2.11-1.73 3.39-1.73 3.39h.7c-2.64 9.17-4.51 20.24-4.51 20.24s62.43 12.67 89.89 4.38c10.66-3.22 11.1-6.2 7.64-8.66a55.62 55.62 0 007.54-1.65c27.48-8.29-12.9-15.08-12.9-15.08z"
        transform="translate(-39.7 -18.74)"
        fill="url(#Co-Working_svg__b)"
      />
      <path
        d="M253.3 236.26a36 36 0 11-36-36 36 36 0 0136 36z"
        fill="#fa595f"
      />
      <path
        d="M334.39 405.39l3.65 18.22s4.06-.73 10.07-2c20.53-4.35 63.91-15.09 47.11-25.11-14.45-8.61-36.58-1.84-49.78 3.66-4.84 2-8.48 3.86-10.11 4.73-.61.31-.94.5-.94.5z"
        fill="#f8b9bf"
      />
      <path
        d="M335.42 410.53l2.62 13.08s4.06-.73 10.07-2l-2.67-21.45c-4.84 2-8.48 3.86-10.11 4.73z"
        opacity={0.1}
      />
      <path
        fill="#d9dfe8"
        d="M334.79 424.74l12.54-2.51-2.84-22.91-10.04 2.01.34 23.41z"
      />
      <path
        opacity={0.1}
        d="M334.79 424.74l5.41-1.09-.99-23.27-4.76.95.34 23.41z"
      />
      <path
        d="M219.21 325.26s24.41-12.72 33.28 27.25 9 58.19 9 58.19l75.92-11.73 1.18 27.59s-81.6 22.43-91.63 20.09-40.48-58.85-40.48-58.85-27.9-43.95 12.73-62.54z"
        fill={color}
      />
      <g opacity={0.1}>
        <path d="M334.39 405.39l3.65 18.22s4.06-.73 10.07-2c20.53-4.35 63.91-15.09 47.11-25.11-14.45-8.61-36.58-1.84-49.78 3.66-4.84 2-8.48 3.86-10.11 4.73-.61.31-.94.5-.94.5z" />
        <path
          d="M335.42 410.53l2.62 13.08s4.06-.73 10.07-2l-2.67-21.45c-4.84 2-8.48 3.86-10.11 4.73z"
          opacity={0.1}
        />
        <path d="M334.79 424.74l12.54-2.51-2.84-22.91-10.04 2.01.34 23.41z" />
        <path
          opacity={0.1}
          d="M334.79 424.74l5.41-1.09-.99-23.27-4.76.95.34 23.41z"
        />
        <path d="M221.21 327.26s24.41-12.72 33.28 27.25 9 58.19 9 58.19l75.92-11.73 1.18 27.59s-81.6 22.43-91.63 20.09-40.48-58.85-40.48-58.85-27.9-43.95 12.73-62.54z" />
      </g>
      <path
        d="M357.3 637.97l29.94 19s39.59 6.63 12.66 14.76-88.13-4.3-88.13-4.3 4.65-27.54 9.6-31.19 35.93 1.73 35.93 1.73z"
        fill="#f37291"
      />
      <path
        d="M246.3 434.16s14.93 8.67 41.78 16.77c15.74 4.75 35.54 8.42 49.22 10.65a35.81 35.81 0 0129.35 27 22.84 22.84 0 01-.19 12.36c-5.22 15.62-4.16 144.47-4.16 144.47l-46.84 2.25s7.41-23.41-1.72-35.77 6.16-102.73 6.16-102.73-16.59-7.74-67.09-10.43c-47.33 10-64.34-42.15-56.48-56.19s49.97-8.38 49.97-8.38z"
        fill="#96a2d0"
      />
      <g opacity={0.1}>
        <path d="M357.3 637.97l29.94 19s39.59 6.63 12.66 14.76-88.13-4.3-88.13-4.3 4.65-27.54 9.6-31.19 35.93 1.73 35.93 1.73z" />
        <path d="M246.3 434.16s14.93 8.67 41.78 16.77c15.74 4.75 35.54 8.42 49.22 10.65a35.81 35.81 0 0129.35 27 22.84 22.84 0 01-.19 12.36c-5.22 15.62-4.16 144.47-4.16 144.47l-46.84 2.25s7.41-23.41-1.72-35.77 6.16-102.73 6.16-102.73-16.59-7.74-67.09-10.43c-47.33 10-64.34-42.15-56.48-56.19s49.97-8.38 49.97-8.38z" />
      </g>
      <path
        d="M342.38 648.08l29.94 19s39.59 6.63 12.66 14.76-88.13-4.3-88.13-4.3 4.65-27.54 9.6-31.19 35.93 1.73 35.93 1.73z"
        fill="#f37291"
      />
      <path
        d="M237.94 508.83c50.5 2.69 67.09 10.43 67.09 10.43s-4.79 87.82 2 100.6c7.25 13.56-6.48 37.9-6.48 37.9l46.84-2.25v-4.24c-.14-22.38-.48-126.3 4.17-140.23a22.84 22.84 0 00.19-12.36 35.82 35.82 0 00-29.35-27c-13.69-2.22-33.48-5.89-49.22-10.64l-.77-.24c-26.37-8-41-16.53-41-16.53s-31.19-2.16-39 11.88c-1 1.82-5.31 5.4-5.49 8.29-1.17 19.34 9.84 53.06 51.02 44.39z"
        fill="#96a2d0"
      />
      <path
        d="M312.11 426.86l.89 18.56s4.12-.11 10.26-.48c20.95-1.25 65.45-5.39 50.33-17.8-13-10.67-35.9-7.27-49.77-3.8-5.09 1.28-9 2.56-10.7 3.17-.66.22-1.01.35-1.01.35zM193.3 300.55s6 5.17 13.44 10.89c8.3 2.26 18 4.27 24.93 5.6-2.15-8.15-.24-17 2.93-24.79a93.69 93.69 0 0113.56-22.51l-41.7-15.07c2.95 8.55 1 18.1-2.17 26.27a86.85 86.85 0 01-10.99 19.61z"
        fill="#f8b9bf"
      />
      <path
        d="M312.36 432.09l.64 13.33s4.12-.11 10.26-.48l.56-21.61c-5.09 1.28-9 2.56-10.7 3.17z"
        opacity={0.1}
      />
      <path
        fill="#d9dfe8"
        d="M309.62 446.05l12.77-.61.6-23.08-10.22.49-3.15 23.2z"
      />
      <path
        d="M187.83 469.84c27 28.07 77.35-5.29 90.89-15.17 2.2-1.61 3.43-2.6 3.43-2.6-5-5.09-13-9.8-16.07-22.55a277 277 0 01-5.94-39.52c-.83-10.55 10.07-30.64 6.92-40.66s-16.12-13.31-21.57-22.38c-1.43-2.36-2.85-4.58-4.25-6.52-10.06-14-27.59-23.43-27.59-23.43-37.35-12.75-40.28 40.59-39.35 42.25s-3.34 60.46 13.53 130.58z"
        fill={color}
      />
      <path
        d="M187.55 393.02s21.69 60.42 31.26 64.23c5.48 2.18 35.37-.17 59.91-2.58 2.2-1.61 3.43-2.6 3.43-2.6-5-5.09-9.07-15.58-12.13-28.32l-31.49.11s2.55-18-.27-58.89-28.85-31.9-28.85-31.9c-42.93 12.31-21.86 59.95-21.86 59.95zM309.62 446.05l5.51-.26 2.49-23.17-4.85.23-3.15 23.2z"
        opacity={0.1}
      />
      <path
        d="M210.15 330.47s26-8.93 28.85 31.9.3 58.89.3 58.89l76.82-.28-2.95 27.46s-84 10-93.6 6.21-31.27-64.22-31.27-64.22-21.09-47.65 21.85-59.96z"
        fill={color}
      />
      <path
        d="M211.1 270.26c1.39-6-5-6.19-7-12l41.72 15a93.4 93.4 0 00-8.38 12.11 35.11 35.11 0 01-6.78 1c-10.14.5-12.85-9.53-19.56-16.11z"
        opacity={0.1}
      />
      <circle
        cx={271.07}
        cy={266.67}
        r={34.96}
        transform="rotate(-2.75 -138.79 1084.456)"
        fill="#f8b9bf"
      />
      <path
        d="M213.3 356.4s11.06 52.39 24.12 57.74 7.14 6.49 7.14 6.49M258.88 385.99s-9.24 2.89-20-10.92"
        opacity={0.1}
      />
      <circle cx={189.3} cy={199.26} r={16} fill="#fa595f" />
      <path
        d="M178.06 207.71a16 16 0 010-21.89c-.26.21-.52.42-.76.65a16.002 16.002 0 0021.92 23.32c.25-.23.47-.48.69-.72a16 16 0 01-21.85-1.36z"
        fill="#fa595f"
      />
      <path
        d="M187.2 213.75a16 16 0 01-16.84-14v1a16.001 16.001 0 1031.94-2c0-.34-.07-.66-.11-1a16 16 0 01-14.99 16z"
        fill="#fa595f"
      />
      <path
        d="M244.25 213.17c3.73 1.84 8 2.35 12 3.51s8.08 3.28 9.84 7.06c1.29 2.78 1.14 6.07 2.49 8.82 1.94 4 6.42 5.84 10.54 7.41-3.54 4.75-11.14 3.46-16.1.23s-9.23-8-15-9.25a14.08 14.08 0 00-14.81 6.59c-1.58 2.77-2.14 6-2.92 9.08-2 8.12-6 16.2-13 20.81s-17.43 4.58-22.92-1.73c-3.2-3.68-4.27-8.69-5.22-13.47a27.37 27.37 0 01-.77-6.81c.32-5.74 4.14-10.63 8-14.89 4.55-5 9.39-9.8 14.23-14.57 4.18-4.12 9-11.1 15.3-11.59 7.26-.58 12.39 5.89 18.34 8.8z"
        opacity={0.1}
      />
      <path
        d="M243.25 212.17c3.73 1.84 8 2.35 12 3.51s8.08 3.28 9.84 7.06c1.29 2.78 1.14 6.07 2.49 8.82 1.94 4 6.42 5.84 10.54 7.41-3.54 4.75-11.14 3.46-16.1.23s-9.23-8-15-9.25a14.08 14.08 0 00-14.81 6.59c-1.58 2.77-2.14 6-2.92 9.08-2 8.12-6 16.2-13 20.81s-17.43 4.58-22.92-1.73c-3.2-3.68-4.27-8.69-5.22-13.47a27.37 27.37 0 01-.77-6.81c.32-5.74 4.14-10.63 8-14.89 4.55-5 9.39-9.8 14.23-14.57 4.18-4.12 9-11.1 15.3-11.59 7.26-.58 12.39 5.89 18.34 8.8z"
        fill="#fa595f"
      />
      <rect
        x={141.58}
        y={434.26}
        width={114.03}
        height={17.62}
        rx={8.5}
        ry={8.5}
        fill="#d6d6e3"
      />
      <path
        d="M141.58 443.26v1.39a7.25 7.25 0 007.25 7.25h99.53a7.25 7.25 0 007.25-7.25v-1.39z"
        opacity={0.1}
      />
      <path fill="#d6d6e3" d="M342.39 452.63H362v249.83h-19.61z" />
      <path opacity={0.1} d="M342.39 452.63H362v16.2h-19.61z" />
      <path fill="#d6d6e3" d="M333.01 434.72h518.42v32.4H333.01z" />
    </svg>
  );
};

SvgCoWorking.propTypes = {
  color: PropTypes.string
};
SvgCoWorking.defaultProps = {
  color: "primary"
};
export default SvgCoWorking;
