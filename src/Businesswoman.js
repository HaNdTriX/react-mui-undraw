import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBusinesswoman = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 941.51 824.82"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Businesswoman_svg__a"
          x1={432.56}
          y1={817.82}
          x2={432.56}
          y2={166.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <ellipse
        cx={482.08}
        cy={798.12}
        rx={42.38}
        ry={356.13}
        transform="rotate(-82.14 395.916 853.491)"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M20.35 568.89c6.41 15.45 14.82 30.26 26.59 41.62 14.34 13.84 32.15 21.39 51.22 25a154.27 154.27 0 0017 2.2c15.07 1.16 30.5.39 45.3-1.22a535.59 535.59 0 00106.7-22.83q8.55-2.76 17-5.81 12.75-4.57 25.27-9.81c34-14.21 69.15-32.33 105.32-26.71 17.53 2.73 34 11 51.57 13.46a92.21 92.21 0 0036.84-2.62 126.59 126.59 0 0017-5.87 193.44 193.44 0 0035.32-20c26.5-18.52 50.28-41.48 78.18-57.52 30.76-17.69 64.81-26.1 99.5-32.37q8.48-1.53 17-2.92c16.05-2.65 32.14-5.1 48-8 15.28-2.82 30.83-6.27 44.13-14.75 9.49-6 17.47-14.43 24.79-23.26a277.49 277.49 0 0034.52-53.22q.75-1.5 1.47-3c14.69-30.14 24.57-63 30.63-97 .18-1 .35-2 .52-3 5.7-33.33 7.78-67.79 7.15-102l-.06-3c-.39-16.89-1.44-33.71-3-50.29-1.12-11.66-2.62-23.76-8.66-33.56s-15.87-16.1-25.71-21.34C860.64 28 819.13 21.58 772.55 32.76c-7.48 1.79-14.93 3.72-22.38 5.72-5.67 1.52-11.34 3.09-17 4.67-39.13 10.91-78.16 22.52-118.61 26q-5.87.51-11.73.78-11.61.54-23.22.24a401.19 401.19 0 01-59.44-6.12q-8.52-1.47-17-3.26c-24.42-5.09-48.59-11.88-72.42-19.38q-7.29-2.3-14.56-4.68c-10.92-3.57-21.84-7.21-32.78-10.75-32.66-10.57-65.48-20.26-99.25-24.16q-4.34-.49-8.68-.87c-2.77-.24-5.55-.43-8.32-.57-52.45-2.8-105.5 9.85-152 35.74q-8.66 4.82-17 10.24-11.57 7.53-22.43 16.2C60.89 74.41 47 87.9 36.42 104.11c-10.31 15.79-17 33.52-20.85 52.16-.21 1-.41 2-.59 3-5.65 30.09-3.89 62.36 2.45 92.51.67 3.16 1.38 6.33 2.12 9.49.23 1 .47 2 .71 3 6.84 28.51 15.58 56.94 13.3 86.09-.29 3.67-.75 7.31-1.35 10.91-.17 1-.34 2-.53 3-4.46 23.78-14.6 46.34-20.68 69.89a215.32 215.32 0 009.35 134.73z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M98.16 261.27H19.55c.23 1 .47 2 .71 3h77.9v97H32.21c-.17 1-.34 2-.53 3h66.48V635.5a154.27 154.27 0 0017 2.2V364.27h152v249.38q8.55-2.76 17-5.81V364.27h219v217.89a126.59 126.59 0 0017-5.87v-212h213v102.12q8.48-1.53 17-2.92v-99.22h151.46q.75-1.5 1.47-3H750.16v-97h183.59c.18-1 .35-2 .52-3H750.16v-102h191.23l-.06-3H750.16V38.49c-5.67 1.52-11.34 3.09-17 4.67v113.11h-208l-.52-.57 78.16-85.77q-11.61.54-23.22.24l-59.42 65.24V64.05q-8.52-1.47-17-3.26v71.32l-86.93-95.39c-10.92-3.57-21.84-7.21-32.78-10.75L501.66 155.7l-.52.57h-217V1.82q-4.34-.49-8.68-.87c-2.77-.24-5.55-.43-8.32-.57v155.89h-152V36.12q-8.66 4.82-17 10.24v109.91H15.57c-.21 1-.41 2-.59 3h83.18zm169-102v102h-152v-102zm17 0h219v102h-219zm449 102h-213V162l3-2.73h210zm-213 100v-97h213v97zm-236 0v-97h219v97zm-169-97h152v97h-152z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M537.94 187.41a12.9 12.9 0 014.38-2.49 29.44 29.44 0 0111.14-1.21 49 49 0 018.17 1.14l125.64 35.56c2.37.67 4.7 1.46 7 2.34 8.1-3.17 31-12.35 33.51-15.63l9.84 2.88-16.42 24.51a2.25 2.25 0 01-.16 4.18c-18.93 6.51-47.52-2.12-47.52-2.12l-109.77-31.36s-33.17-11.2-25.81-17.8z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={812.37}
        cy={264.25}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 721.757 334.772)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={808.56}
        cy={263}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 717.951 333.513)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={801.25}
        cy={260.59}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 710.639 331.106)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={780.64}
        cy={254.54}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 690.025 325.055)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={777.01}
        cy={253.34}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 686.401 323.864)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={773.25}
        cy={252.46}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 682.643 322.977)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={769.47}
        cy={251.22}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 678.865 321.738)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={765.77}
        cy={250}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 675.157 320.518)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={762.4}
        cy={248.89}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 671.791 319.409)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={758.8}
        cy={247.7}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 668.186 318.222)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={755.02}
        cy={246.46}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 664.414 316.976)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={751.68}
        cy={245.36}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 661.068 315.882)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={732.91}
        cy={240.51}
        rx={1.6}
        ry={0.96}
        transform="rotate(-72 640.834 311.721)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={725.61}
        cy={238.11}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 635.001 308.621)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={721.93}
        cy={236.9}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 631.32 307.41)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={718.37}
        cy={235.72}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 627.766 306.239)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={714.86}
        cy={234.57}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 624.253 305.086)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={710.9}
        cy={233.26}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 620.286 303.773)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={729.14}
        cy={239.27}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 638.529 309.784)"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={804.62}
        cy={261.7}
        rx={1.6}
        ry={0.96}
        transform="rotate(-71.78 714.005 332.216)"
        fill={color}
        opacity={0.1}
      />
      <path
        fill={color}
        opacity={0.1}
        d="M617.584 211.13l-3.437-.848 1.48-5.99 3.436.849zM577.09 199.541l-3.437-.849 1.48-5.99 3.436.849zM557.55 185.21l4.57 1.2-2.28 3.44-6.77-1.68 4.48-2.96zM542.32 184.96l9.87 2.57 3.76-2.32-2.49-1.46a29.44 29.44 0 00-11.14 1.21zM737.62 209.94l-16.42 24.59-26.82-11.89s30.37-11.58 33.37-15.58zM618.51 213.63l43.33 11.7 2.56 5.12-45.89-16.82zM188.25 89.03h1.31a3.24 3.24 0 01-1.6-2.62c0-2.06 2.53-3.75 5.62-3.75H233c3.09 0 5.62 1.69 5.62 3.75 0 2.07-2.53 3.76-5.62 3.76h-1.32a3.27 3.27 0 011.61 2.62c0 1.76-1.84 3.25-4.31 3.65h11.35c3.09 0 5.63 1.69 5.63 3.75s-2.54 3.76-5.63 3.76h-39.42c-3.09 0-5.62-1.69-5.62-3.76 0-1.76 1.84-3.24 4.3-3.64h-11.34c-3.1 0-5.63-1.69-5.63-3.76s2.53-3.76 5.63-3.76zM615.41 124.8h1.34a3.26 3.26 0 01-1.6-2.62c0-2.07 2.53-3.76 5.62-3.76h39.42c3.09 0 5.62 1.69 5.62 3.76 0 2.06-2.53 3.75-5.62 3.75h-1.32a3.28 3.28 0 011.61 2.62c0 1.77-1.84 3.25-4.3 3.65h11.34c3.1 0 5.63 1.69 5.63 3.76s-2.53 3.75-5.63 3.75h-39.44c-3.1 0-5.63-1.69-5.63-3.75 0-1.76 1.84-3.25 4.3-3.65h-11.34c-3.1 0-5.63-1.69-5.63-3.76s2.53-3.75 5.63-3.75zM127.75 277.86h1.32a3.26 3.26 0 01-1.61-2.62c0-2.07 2.53-3.76 5.62-3.76h39.42c3.09 0 5.62 1.69 5.62 3.76 0 2.06-2.53 3.75-5.62 3.75h-1.32a3.26 3.26 0 011.61 2.62c0 1.76-1.84 3.25-4.3 3.65h11.34c3.1 0 5.63 1.69 5.63 3.76s-2.53 3.75-5.63 3.75h-39.37c-3.1 0-5.63-1.69-5.63-3.75 0-1.77 1.84-3.25 4.31-3.65h-11.39c-3.09 0-5.63-1.69-5.63-3.76s2.63-3.75 5.63-3.75z"
      />
      <path
        d="M686.15 334c-1-6.29-7.28-17.79-7.28-17.79l-9.07-15.4s-3.56-4.21-3.23-5.57-4.21-3.61-4.21-3.61-2.59-3.38-2.75-5-14.73-13.86-14.73-13.86-5-4.19-3.88-18.36h-11.49a61 61 0 00-8.75.87L604 235.71s-13.19-10.93-24.85-17.38v-.3a35.27 35.27 0 00-6.41-20.4l-.12-.16a15.6 15.6 0 005.2-2.4 6.4 6.4 0 002.32-2.85c1.87-4.8-5.51-7-8.88-8.73-6.83-3.52-12.51-8.76-19.48-12a52 52 0 00-44.33.28c-6.81 3.37-12.74 8.21-18.86 12.7-9.59 7-5.9 13.45-13.4 22.67s-11.74 22.21-7.05 33.11c2.76 6.4 8.25 11.31 14.28 14.85s-1.33 5.88 5.13 8.56c1.52.64 3.18 1.43 3.8 3a6.07 6.07 0 01-.17 3.94c-1.19 4.25-2.77 8.83-1.93 13-4 1.87-6.75 2.91-6.75 2.91-8.3 2.9-9.71 8.77-9.71 8.77s1.51 5.2-1.83 7.78-1.94 9.66-1.94 9.66-4.53 10.2-3.36 11.7a28.47 28.47 0 012.39 4.09s-3.78 3-1.84 7.3 0 8.91 0 8.91 1 2.37-.75 3.66 0 11.11 0 11.11a5.83 5.83 0 01-1.41 3.6c-1.46 1.72 0 18.47 0 18.47a5.62 5.62 0 01-1.78 2.1c-1 .48-3.88 16.27-3.07 17.07S447 439.5 447 439.5s.32 6.6-1.46 7.73-2.1 8.7-2.1 8.7.8 6.76-2.43 8.05-3.89 24.17-3.89 24.17-4.37 11.76-7 13.69a33.19 33.19 0 009.51 8l-.4 1.06c-2.19 6-5.17 15.3-5.56 23a50.72 50.72 0 00-7.06 8.46s1.16 1 2.57 2.2L396.1 585.4c-13.52-19.37-20.86-12.19-20.86-12.19l-5 1.37c-.77.18-3.76.67-4-2.68a9.38 9.38 0 00-.72-2.88 7.28 7.28 0 00-2.1-2.88 4.51 4.51 0 00-4.63-.67c-4.2 1.62-59.46 11-59.46 11s-17.25 2.9-33.11 23.84a268.6 268.6 0 01-30.1 33.83L193 685.33s-21.76 29.41-11.2 28.88c-2.57 6.31-.13 12.68-.13 12.68l42.72 54.38a8.74 8.74 0 1014.36-6.66l63.77-29.56a8.72 8.72 0 1013.34-11L340 709.82s71.53-75.07 77-86.35c3.11-6.38-2.36-15.14-7.69-21.53l45.64-59 1.64.74 9.18-9.37c7-5.62 1.07-12.86 1.07-12.86-2.09-1.89-6.07-1.6-10.57-.32.42-1.8.8-3.55 1.12-5.19.09-.44.18-.87.26-1.3a42.06 42.06 0 008.56-.87s1-21.1 3.88-29.48l8.58-42.69s5.18-18.2 7.12-28.19 10.47-48.33 10.47-48.33c1.39-4.19 2 7.09 2 7.09s2.81 2.9 2.16 4.4.54 10.1.54 10.1 1.51 5.15.44 6.23a2.69 2.69 0 00-.49.88c-1 2.3-2.33 9.37-2.33 9.37l-3.79 14.05-.63.51a19.6 19.6 0 00-5.45 7.82c-1.15 2.68-1.81 5.22-2.49 6.84a4.82 4.82 0 01-.58 1 7.85 7.85 0 00-1 1.77 35.61 35.61 0 00-1.94 6.87l.45.29c0 .09-.07.19-.11.28l-.19.48v.06c-.41 1-.79 2.05-1.17 3.09l-.12.33c-.35 1-.69 2-1 2.95-.05.17-.11.34-.16.51-.31.93-.6 1.86-.88 2.77l-.18.58c-.26.87-.52 1.73-.76 2.57 0 .1-.06.21-.09.3a84.59 84.59 0 00-3.24 22.13c-.23 17.66-.4 53.31 1.78 58.13.14.32.29.69.43 1.1 2.7 7.91 4.75 31.76 4.75 31.76a38.72 38.72 0 004.51 2.67c.05.45.1.9.16 1.37 1.15 9.81 2.77 23.08 3.31 24.42.87 2.15 2.81 15 2.81 15s-1.52 5.79-2.59 11.16-15.11 20.2-15.11 20.2c-17.89 14.84-35.8 67.27-35.8 67.27-3.57 7.68-7.51 10.52-10.41 11.5-19.33-.72-20.23 15-20.23 15l-12.2 23.41 3.09 2.19 1.45 1 12.41-14.39s0 16.43-2.27 20.4c-1.54 2.7-1.79 7.65-1.79 10.55 0 1.36.06 2.27.06 2.27s3.78 8 20.39 17.9c7.46 4.43 11.81 3.68 14.34 1.49 3.1-2.68 3.47-7.5 3.47-7.5l-7-11.89c-.35.15-.69.26-1 .39v-1.28c.44-10.5 9.88-32.65 9.88-32.65s9.06-23.85 16.61-31.15c6.59-6.37 33.05-46.59 39.69-56.74v.34c0 .49.07 1 .12 1.42 1 10.87 4 15.67 4 15.67s3.45 44 4.09 55.2c.41 7-1.3 11.73-2.64 14.28l-.07.12c-.07 0-6.89 3.58-7.53 10.52s3.23 13.53 3.23 13.53 8.81 21.99 8.49 28.31h5.18L520 782.2l.08.1c.94 1.25 10.19 13.66 10.5 19.87 0 0 2.34 6.39 2.27 8.14a.66.66 0 010 .14c-.22 1.5 8.2 8.59 20.4 7.19s14.34-3.11 14.34-3.11.14-.39.32-1c.61-2.3 1.58-7.91-2.47-10.68-5.07-3.47-15.61-13.2-16.06-13.61-1.73-14.39-7.24-33.94-7.24-33.94v-29.48s2.49-67.45.77-78.83a60.06 60.06 0 010-19.55s7.55-21.26 6-23.63 3.23-10.74 3.23-10.74l9.07-25.43.53-1.48c1.48-.56 2.45-.93 2.8-1 3-.64 0-5.48 0-5.48s9.62-40.91 8.64-48.33 2.27-37.85 2.27-37.85l1.55-12.62.14-1.13c1 1.24 1.7 2 1.7 2 10.35-1.72 19.2-30 16.93-31.58s-8.63-22.23-8.63-22.23c-10.14-14.07-1-43.28-1-43.28s9.28-23.52 9.17-27.39 2.16-4 2.16-4v-.11c8.52 1.82 38.11 8.11 39.63 8.42 1.78.36 5.34.6 8.9 2.05s26.55-2.05 26.55-2.05 14.57-1.32 13.6-7.58zm-229 197.1l-7.46 9.48 1.11.5-45.37 56.56c-2.42-2.53-4.23-4.12-4.23-4.12-.46-.81-.92-1.58-1.37-2.34l33.7-43a3.51 3.51 0 00.62.4l2.67-3.18a7.39 7.39 0 002.52 1.46c6.33 2.17 11-6.08 14.2-15.81a8.72 8.72 0 013.61.03zm101.47-272.89v-.33.33zm0-.58a2.3 2.3 0 010 .23 1.77 1.77 0 00.02-.23zm62.13 44.13s-1.46-4.51-2.43-4.51a14.06 14.06 0 01-3.56-1.29 2.86 2.86 0 01-3.56-2.21c-1-3-7.18-5.36-7.18-5.36s-9.06-3.76-9.82-6.88-13.7-6.55-13.7-6.55.87-1.28-4.64-3.11a20.44 20.44 0 01-5.32-3.25 122.9 122.9 0 01-11.91-11 32.3 32.3 0 011.17-6.91c.14-.51.29-1 .46-1.5a32.31 32.31 0 007.1-4.76l6.72 9.75a2.25 2.25 0 003.12.58l5.36-3.65a20.21 20.21 0 009 1.33l11.93 14.39a11.69 11.69 0 00.51 4.84l27.73 32.87c-.73-.2-10.96-2.78-10.96-2.78z"
        transform="translate(-129.25 -37.59)"
        fill="url(#Businesswoman_svg__a)"
      />
      <path
        d="M496.97 217.06s-30.53.32-25.33 17.23l11.65 6.76 11.61-2.36 5.45-9.63z"
        fill="#65617d"
      />
      <path
        d="M496.97 217.06s-30.53.32-25.33 17.23l11.65 6.76 11.61-2.36 5.45-9.63z"
        opacity={0.1}
      />
      <path
        d="M430.47 187.59c8.37 30.44 28.78 27.47 28.78 27.47l13.09 15.85 1.93 2.46 4.18 5.32 18.52-10.52-3.69-4.34-21.64-25.42s-49.54-41.25-41.17-10.82z"
        fill="#fbbebe"
      />
      <rect
        x={556.64}
        y={231.36}
        width={0.56}
        height={4.65}
        rx={0.28}
        ry={0.28}
        transform="rotate(145.56 498.124 194.863)"
        fill="#3a3768"
      />
      <rect
        x={569.39}
        y={217.96}
        width={0.32}
        height={1.53}
        rx={0.16}
        ry={0.16}
        transform="rotate(145.56 510.743 179.911)"
        fill="#3a3768"
      />
      <rect
        x={571.26}
        y={220.17}
        width={0.36}
        height={2.66}
        rx={0.18}
        ry={0.18}
        transform="rotate(145 512.955 184.513)"
        fill="#3a3768"
      />
      <rect
        x={573.32}
        y={223.14}
        width={0.34}
        height={2.69}
        rx={0.17}
        ry={0.17}
        transform="rotate(145.56 514.688 185.66)"
        fill="#3a3768"
      />
      <rect
        x={559.86}
        y={215.91}
        width={18.87}
        height={38.36}
        rx={2.24}
        ry={2.24}
        transform="rotate(145.56 510.497 196.265)"
        fill="#3a3768"
      />
      <path
        d="M425.4 185.49a.68.68 0 01.94.18l.08.11a.68.68 0 00.94.18l6.61-4.53a.68.68 0 00.17-.94l-.08-.11a.68.68 0 01.18-.94l1.28-.89a1.3 1.3 0 011.8.34l19.1 27.86a1.29 1.29 0 01-.34 1.79l-11.51 7.87a1.29 1.29 0 01-1.79-.34l-19.11-27.86a1.29 1.29 0 01.34-1.79z"
        fill={color}
      />
      <rect
        x={558.35}
        y={219.88}
        width={2.64}
        height={0.54}
        rx={0.27}
        ry={0.27}
        transform="rotate(145.56 500.867 181.328)"
        fill="#e6e8ec"
      />
      <circle cx={428.75} cy={183.7} r={0.3} fill="#e6e8ec" />
      <path
        d="M374.05 624.47c0 .6.09 1.18.14 1.76 1 10.86 3.95 15.66 3.95 15.66s3.43 44 4.07 55.18c.41 7-1.3 11.72-2.63 14.27a12.7 12.7 0 01-1.44 2.27l-2.15 4.72 10.09 20.18 11.81 19.54 8.16 10.73s6 .86 7.3 0 6.43 0 6.43 0l4.73-7.3-5.3-7.17-2-2.7c-1.72-14.39-7.2-33.93-7.2-33.93v-29.41s2.48-67.41.76-78.8a60.28 60.28 0 010-19.53s7.51-21.26 6-23.62 3.22-10.74 3.22-10.74l9-25.41.52-1.49-2-4.87-50.66-6.4s.4 4 .84 10.35v.14c.26 3.68.52 8.16.73 13.16.7 16.82.76 39.4-2.43 56.65a108.44 108.44 0 00-1.94 26.76z"
        fill="#fbbebe"
      />
      <path
        d="M374.19 626.23l2.66-4.09a89.9 89.9 0 0116.31-12.45c9.24-5.37 11.38-18 11-19.75s1.29-18 1.29-18v-41.26l-27.71-3c1.1 16.07 2.45 47.51-1.7 70-2.29 12.2-2.48 21.61-1.85 28.55z"
        opacity={0.1}
      />
      <path
        d="M287.75 729.28l2.15 19.75 10.51 6.22s9.67 1.08 7.95-7.51a12.59 12.59 0 01-.16-2.79c.43-10.49 9.82-32.63 9.82-32.63s9-23.83 16.53-31.14c6.56-6.36 32.89-46.56 39.5-56.71l1.51-2.33a90.19 90.19 0 0116.32-12.45c9.23-5.37 11.38-18 11-19.75s1.28-18 1.28-18v-41.26l-26.42-2.82-23.82-2.55s.53 4.66 1.21 10.59c1.15 9.8 2.77 23.07 3.3 24.41.87 2.15 2.8 15 2.8 15s-1.51 5.79-2.58 11.16-15 20.19-15 20.19c-17.82 14.81-35.64 67.19-35.64 67.19-4.69 10.14-10 11.86-12.76 12a5.45 5.45 0 01-1.84-.17l-3.87 7.09z"
        fill="#fbbebe"
      />
      <path
        d="M375.99 718.33l10.09 20.18 11.81 19.54 8.16 10.73s6 .86 7.3 0 6.43 0 6.43 0l4.73-7.3-5.3-7.17c1.39 3.2 2.53 7.19-.28 7.38-4.72.33-14.49 4.3-20.07-9.12s-13-19.43-13-19.43l-5.91-14.38-.38-7.42a12.7 12.7 0 01-1.44 2.27z"
        opacity={0.1}
      />
      <path
        d="M375.24 735.5s8.8 21.9 8.48 28.24h5.15l-.86-19.12.08.11c.94 1.25 10.14 13.65 10.45 19.86 0 0 2.33 6.38 2.26 8.13a.61.61 0 010 .14c-.22 1.5 8.15 8.59 20.29 7.19s14.27-3.11 14.27-3.11.14-.39.32-1c.6-2.3 1.57-7.9-2.46-10.67-5.05-3.48-15.58-13.24-16-13.61.27.48 6.32 11 1.7 11.35s-14.49 4.3-20.07-9.12-13-19.43-13-19.43l-5.91-14.38-.44-8.59s-6.86 3.54-7.5 10.52 3.24 13.49 3.24 13.49z"
        fill="#3f3d56"
      />
      <path
        d="M382.65 744.3c.61 5.14 2.12 14.6 2.9 19.44h3.32l-.86-19.12.08.11-.29-.85s-6.05-6.66-5.15.42zM400.75 772.86c-.22 1.5 8.15 8.59 20.29 7.19s14.27-3.11 14.27-3.11.14-.39.32-1c-7.56.09-27.74 0-34.87-3.19a.61.61 0 01-.01.11zM287.75 729.28l2.15 19.75 10.51 6.22s9.67 1.08 7.95-7.51a12.59 12.59 0 01-.16-2.79c-16.23 6-17.87-9.88-17.87-9.88l2.9-43.26a9.46 9.46 0 011.94-5.95 5.45 5.45 0 01-1.84-.17l-3.87 7.09z"
        opacity={0.1}
      />
      <path
        d="M265.31 723.8l3.07 2.2 1.44 1 12.35-14.38s0 16.42-2.26 20.39c-1.53 2.7-1.77 7.65-1.77 10.55 0 1.36.05 2.27.05 2.27s3.76 8 20.29 17.89c7.42 4.43 11.75 3.67 14.26 1.49 3.09-2.68 3.45-7.5 3.45-7.5l-7-11.88c-17.18 7-18.89-9.49-18.89-9.49l2.9-43.26c.21-6.55 4.36-7.71 4.36-7.71-19.25-.74-20.14 15-20.14 15z"
        fill="#3f3d56"
      />
      <path
        opacity={0.1}
        d="M268.39 726l1.43 1.02 12.35-14.38-1.4-4.19L268.39 726zM278.14 743.58c0 1.36.05 2.27.05 2.27s3.76 8 20.29 17.89c7.42 4.43 11.75 3.67 14.26 1.49-7.53-2.33-25.49-8.95-34.6-21.65z"
      />
      <path
        d="M307.75 509.32c9.55 3.29 15.28-17.37 18-30.85 1.26-6.29 1.85-11 1.85-11h-17.58s-1 2.37-2.37 6c-3.9 10.66-10.35 32.24.1 35.85zM385.43 230.54l12 29.19v25.12c0 .65 29.84 9 29.84 9l7.73-19.32s2.36-22.76-6.22-41.66a28.11 28.11 0 01-1.17-19.57q.21-.76.45-1.5a49.28 49.28 0 019.52-16.5s-20.47-6.79-34.53-8.17c-8.85-.86-15.18.42-12.27 6.88a28.63 28.63 0 012.32 13c0 .4 0 .81-.08 1.21-.88 12.04-7.59 22.32-7.59 22.32z"
        fill="#fbbebe"
      />
      <path
        d="M390.81 194.03a28.63 28.63 0 012.32 13c0 .4 0 .81-.08 1.21a.27.27 0 00.08.07 31.7 31.7 0 0018.21 7.91c.93.09 1.88.13 2.83.13a31.25 31.25 0 0013.47-3q.21-.76.45-1.5a49.28 49.28 0 019.52-16.5s-20.47-6.79-34.53-8.17c-8.85-.89-15.18.39-12.27 6.85z"
        opacity={0.1}
      />
      <path
        d="M381.42 180.71a35 35 0 0011.71 26.32 31.75 31.75 0 0018.21 7.9c.93.09 1.88.13 2.83.13a31.38 31.38 0 0013.92-3.24 34.51 34.51 0 0018.84-31.11 35.3 35.3 0 00-6.39-20.39 32.24 32.24 0 00-26.37-14c-18.08.03-32.75 15.41-32.75 34.39z"
        fill="#fbbebe"
      />
      <path
        d="M426.23 291.72s-20-18.25-25.55-34.78a183.18 183.18 0 00-13.31-29.84l1.48-3.09s8.18 21.77 14.19 24.34 20 17.39 21.26 27.7l.86-31.35 1.35-20.69s10.24 21.77 11.1 31.86-.22 28.34-3.44 32.2a10.49 10.49 0 01-7.94 3.65z"
        fill={color}
      />
      <path
        d="M384.37 223.41l.14-.13-.14.13z"
        fill="none"
        stroke="#0ff"
        strokeMiterlimit={10}
      />
      <path
        d="M353.87 525.31s.53 4.66 1.21 10.59c7.08 3.56 15.15 5 23.34 5.12a108.3 108.3 0 0025.69-3.06 189.11 189.11 0 0024.92-7.79l.52-1.49-2-4.87-50.7-6.4s.4 4 .84 10.35v.14z"
        opacity={0.1}
      />
      <path
        d="M345.29 499.01c.14.32.29.7.43 1.11 2.69 7.9 4.72 31.74 4.72 31.74 28.34 19.65 78.9-3.54 81.89-4.19s0-5.47 0-5.47 9.57-40.9 8.61-48.31 2.25-37.84 2.25-37.84l1.56-12.64 4.29-35.87-32.85-7.08s-40.19 4.08-53 8.85a17.76 17.76 0 00-1.75.74c-3.93 1.94-7.44 8.35-10.27 15.55-1.73 4.37-3.2 9-4.38 13.16a84.85 84.85 0 00-3.22 22.12c-.28 17.69-.45 53.31 1.72 58.13z"
        fill="#3f3d56"
      />
      <path
        d="M345.29 499.01c.14.32.29.7.43 1.11 1.84-12.74 3.58-51.13 3.22-63.69-.43-15 15.46-46.81 15.46-46.81l-1.26-.27a17.76 17.76 0 00-1.75.74c-6.32 3.12-11.54 17.81-14.64 28.71a84.86 84.86 0 00-3.23 22.12c-.23 17.65-.4 53.28 1.77 58.09z"
        opacity={0.1}
      />
      <path
        d="M351.12 405.64c.82.54 17.44 11.24 45.37 23.17 28.67 12.23 31.78-37.47 31.78-37.47a51.37 51.37 0 015.48 13.85c1.59 6.35 7.83 14.47 11 18.26l4.29-35.87-32.85-7.08s-40.19 4.08-53 8.85a17.76 17.76 0 00-1.75.74c-3.98 1.94-7.49 8.32-10.32 15.55z"
        opacity={0.1}
      />
      <path
        d="M334.55 298.41c1.93 4.29 0 8.91 0 8.91S363 331.9 364.4 327.71s2 7.09 2 7.09 2.8 2.9 2.16 4.4.53 10.09.53 10.09 1.5 5.15.43 6.23-2.68 10-2.68 10L363 379.78l-.67.56c-6 4.93-6.77 13.52-8.49 15.67s-2.78 8.37-2.78 8.37 16.74 10.95 45.4 23.19 31.78-37.47 31.78-37.47a51.37 51.37 0 015.51 13.8c2.15 8.59 12.78 20.4 12.78 20.4 10.31-1.72 19.1-29.95 16.85-31.56s-8.63-22.22-8.63-22.22c-10.09-14.06-1-43.27-1-43.27s9.23-23.51 9.12-27.37 2.15-4 2.15-4l6.55-44.87s-9-3.76-9.77-6.88-13.64-6.54-13.64-6.54.87-1.29-4.61-3.12a20.19 20.19 0 01-5.3-3.24 124.33 124.33 0 01-11.85-11s-.55 12.78 2.12 20.17 4.62 29.22 4.83 30.83-7.73 18.46-7.73 18.46l-4.21-5.77c-6.64-9.08-18.87-25.76-19.72-26.54-1.19-1.07-11.48-29.78-12.91-33.36-.53-1.31-1.27-1.73-2-1.74a3 3 0 00-1.61.52 5.5 5.5 0 00-.71.52l-.25.69-.06.14a15.28 15.28 0 01-.76 1.72c-6.9 13.54-32.64 23.23-32.64 23.23-8.26 2.9-9.66 8.77-9.66 8.77s1.5 5.19-1.82 7.77-1.93 9.66-1.93 9.66-4.51 10.2-3.35 11.7a27.57 27.57 0 012.38 4.08s-3.75 3-1.82 7.33z"
        fill="#65617d"
      />
      <path
        d="M417.96 304.28s43.91 6.87 41.87-12c-1.86-17.21-18-53.41-20.86-59.71a125 125 0 01-11.86-11s-.54 12.78 2.12 20.17 4.62 29.21 4.83 30.82-7.73 18.47-7.73 18.47z"
        opacity={0.1}
      />
      <path
        d="M416.67 303s43.91 6.86 41.87-12c-1.86-17.21-18-53.41-20.86-59.71a124.33 124.33 0 01-11.85-11s-.55 12.78 2.11 20.17 4.62 29.22 4.84 30.83-7.73 18.46-7.73 18.46z"
        opacity={0.1}
      />
      <path
        d="M417.32 303s43.9 6.86 41.86-12c-1.85-17.21-18-53.41-20.86-59.71a124.33 124.33 0 01-11.85-11s-.55 12.78 2.12 20.17 4.62 29.22 4.83 30.83-7.73 18.46-7.73 18.46z"
        fill="#65617d"
      />
      <path
        d="M382.14 227.17c0 .13.07 2 .16 4.88.17 5.56.44 15 .58 23.89.16 10.3.16 19.78-.34 21.4-1.18 3.76 4.61 13.1 4.61 13.1l28.88 13.84 7.77-12.35-3.61-6.73c-6.64-9.08-18.87-25.76-19.72-26.54-.38-.34-1.7-3.52-3.35-7.8-3.52-9.09-8.59-23.13-9.56-25.56a3.61 3.61 0 00-2-1.75 1.77 1.77 0 00-1.61.53 5.65 5.65 0 00-1 1.34v.05a10.26 10.26 0 00-.74 1.67z"
        opacity={0.1}
      />
      <path
        d="M384.08 225.88c0 .12.07 2 .15 4.87.17 5.56.44 15 .58 23.89.17 10.3.17 19.78-.34 21.4-1.18 3.76 4.62 13.1 4.62 13.1l28.87 13.85 7.79-12.35-3.61-6.73c-6.64-9.08-18.86-25.76-19.72-26.54-.38-.34-1.69-3.52-3.35-7.8-3.52-9.08-8.59-23.13-9.56-25.56a3.6 3.6 0 00-2-1.74 1.72 1.72 0 00-1.61.52 5.55 5.55 0 00-1 1.35 10.19 10.19 0 00-.74 1.68z"
        opacity={0.1}
      />
      <path
        d="M383.43 225.88c0 .12.07 2 .16 4.87.17 5.56.43 15 .58 23.89.16 10.3.16 19.78-.35 21.4-1.17 3.76 4.62 13.1 4.62 13.1l28.88 13.85 7.76-12.36s-1.37-2.58-3.6-6.73c-6.64-9.08-18.87-25.76-19.72-26.54-.38-.34-1.7-3.52-3.35-7.8-3.52-9.08-8.59-23.13-9.56-25.56a3.58 3.58 0 00-2-1.74 1.74 1.74 0 00-1.61.52 5.27 5.27 0 00-1 1.35 10.19 10.19 0 00-.74 1.68 NaN NaN 0 00-.07.07z"
        fill="#65617d"
      />
      <ellipse cx={421.29} cy={309.33} rx={2.42} ry={4.19} opacity={0.1} />
      <ellipse cx={421.29} cy={308.68} rx={2.42} ry={4.19} fill={color} />
      <ellipse cx={427.5} cy={354.25} rx={2.42} ry={4.19} opacity={0.1} />
      <ellipse cx={425.09} cy={330.47} rx={2.42} ry={4.19} opacity={0.1} />
      <ellipse cx={429.92} cy={374.22} rx={2.42} ry={4.19} opacity={0.1} />
      <ellipse cx={427.5} cy={353.61} rx={2.42} ry={4.19} fill={color} />
      <ellipse cx={425.09} cy={329.83} rx={2.42} ry={4.19} fill={color} />
      <ellipse cx={429.92} cy={373.58} rx={2.42} ry={4.19} fill={color} />
      <path
        d="M377.8 256.35c.63-.48 3.55-1.14 6.37-1.7s5.7-1 5.7-1a17.13 17.13 0 018.54-4c-3.52-9.08-8.59-23.13-9.56-25.56a3.58 3.58 0 00-2-1.74 1.74 1.74 0 00-1.61.52 5.27 5.27 0 00-1 1.35l-.59 6.57-.16 1.76s-4.67 2.25-3.7 6-3.28 18.77-1.99 17.8z"
        fill={color}
      />
      <path
        d="M426.51 224.66s15.88 22.83 15.71 27.34-2.57 0-2.57 0-6.71-19.93-14.54-4.83z"
        opacity={0.1}
      />
      <path
        d="M426.51 224.01s15.88 22.84 15.71 27.35-2.57 0-2.57 0-6.71-19.93-14.54-4.84z"
        fill={color}
      />
      <path
        d="M469.28 253.41l2.36-2.32s6.17 2.32 7.11 5.32 3.54 2.22 3.54 2.22a14.07 14.07 0 003.54 1.28c1 0 2.42 4.51 2.42 4.51s10.14 2.58 11 2.74 40.57 37.07 40.57 37.07-22.86 3.51-26.4 2.06-7.09-1.7-8.86-2.06-41.7-8.89-41.7-8.89z"
        fill="#65617d"
      />
      <path
        d="M474.27 233.41l4.18 5.32 18.52-10.52-3.69-4.34c-3.3 5.01-9.18 10.4-19.01 9.54z"
        opacity={0.1}
      />
      <path
        d="M533.85 302.24l5.95 2s14.5-1.32 13.53-7.6-7.25-17.78-7.25-17.78l-9-15.39s-3.55-4.22-3.22-5.57-4.19-3.61-4.19-3.61-2.58-3.38-2.74-5-14.66-13.88-14.66-13.88-5-4.19-3.87-18.36h-11.43s-5.25 21.1-25.33 17.23l27.59 32.85z"
        fill="#65617d"
      />
      <path
        d="M307.65 473.41a35.65 35.65 0 0018.08 5c1.26-6.29 1.85-11 1.85-11h-17.56s-1.04 2.41-2.37 6z"
        opacity={0.1}
      />
      <path
        d="M339.65 303l-5.1 4.29s1 2.36-.74 3.65 0 11.11 0 11.11a5.84 5.84 0 01-1.4 3.59c-1.45 1.72 0 18.47 0 18.47a5.58 5.58 0 01-1.77 2.09c-1 .48-3.87 16.27-3.06 17.07s-12.24 38.81-12.24 38.81.32 6.6-1.45 7.73-2.09 8.69-2.09 8.69.8 6.76-2.42 8.05-3.86 24.16-3.86 24.16-4.35 11.75-6.93 13.68c0 0 12.24 16.75 35.91 11.92 0 0 1-21.1 3.86-29.47l8.54-42.67s5.15-18.2 7.08-28.18 10.42-48.31 10.42-48.31V314z"
        fill="#65617d"
      />
      <ellipse cx={314.54} cy={419.79} rx={1.13} ry={2.25} opacity={0.1} />
      <ellipse cx={310.03} cy={438.95} rx={1.13} ry={2.25} opacity={0.1} />
      <ellipse cx={306.65} cy={456.5} rx={1.13} ry={2.25} opacity={0.1} />
      <ellipse cx={312.28} cy={429.45} rx={1.13} ry={2.25} opacity={0.1} />
      <ellipse cx={307.77} cy={448.13} rx={1.13} ry={2.25} opacity={0.1} />
      <ellipse cx={314.54} cy={419.15} rx={1.13} ry={2.25} fill={color} />
      <ellipse cx={310.03} cy={438.31} rx={1.13} ry={2.25} fill={color} />
      <ellipse cx={306.65} cy={455.86} rx={1.13} ry={2.25} fill={color} />
      <ellipse cx={312.28} cy={428.81} rx={1.13} ry={2.25} fill={color} />
      <ellipse cx={307.77} cy={447.49} rx={1.13} ry={2.25} fill={color} />
      <path
        d="M396.19 334.02s-17.4-3-22.72 0 22.72 0 22.72 0zM384.49 351.03s-9-14.65-11.69-10 11.69 10 11.69 10zM342.39 367.3c-.48.48-19.65 22.38-19.48 23.83s19.48-23.83 19.48-23.83zM514.36 289.68c-.16.49-5.16 10.47-1.85 11.6s1.85-11.6 1.85-11.6zM499.39 275.83s-7.57 2.74-8.86 4 8.86-4 8.86-4zM524.99 268.41c-3.54-.16-16.1-3.55-16.59-2.42s16.59 2.42 16.59 2.42zM393.13 207.03c-.53 12.52-7.7 23.51-7.7 23.51l12 29.19v8.49c8.16.86 16.76-.91 22.7-6.46-4.71-1.54-7.58-6.22-9.77-10.67a123.53 123.53 0 01-6.53-16.16c-1.2-3.71-1.82-8.65 1.48-10.74 1.51-1 3.51-1 4.91-2.12 1.81-1.45 1.93-4.2 1.31-6.43-.07-.24-.14-.48-.22-.71-1.46-4.34-4.9-7.77-7-11.87a21.46 21.46 0 01-1.27-15.91 19.86 19.86 0 012.31-5 21.43 21.43 0 0118.57-9.64c1.87.08 4.16.2 5.11-1.4.74-1.22.21-2.8.45-4.21.71-4.3 6-5.25 11-6.59a32.24 32.24 0 00-26.37-14c-18.08 0-32.75 15.38-32.75 34.36a35 35 0 0011.77 26.36z"
        opacity={0.1}
      />
      <path
        d="M428.23 166.91c-.24 1.41.29 3-.44 4.22-1 1.59-3.25 1.47-5.11 1.39a21 21 0 00-19.62 30.54c2.2 4.32 5.9 7.9 7.21 12.57.62 2.24.5 5-1.31 6.44-1.39 1.13-3.4 1.16-4.91 2.12-3.3 2.09-2.68 7-1.48 10.74a122.2 122.2 0 006.54 16.16c2.18 4.45 5 9.13 9.76 10.67-6.88 6.42-17.3 7.8-26.5 5.85s-17.51-6.74-25.64-11.48c-3.34-1.94-6.87-4.09-8.5-7.59-2.22-4.76-.24-10.29 1.17-15.34a6.14 6.14 0 00.17-3.94c-.63-1.52-2.27-2.31-3.79-3-6.42-2.68 6-5 0-8.56s-11.46-8.44-14.2-14.84c-4.67-10.89-.46-23.88 7-33.09s-1.28-15.63 8.26-22.66c6.08-4.49 12-9.33 18.76-12.69a51.5 51.5 0 0144.11-.29c6.93 3.25 12.58 8.49 19.38 12 3.35 1.73 10.7 3.92 8.83 8.72-2.83 7.32-18.43 4.47-19.69 12.06z"
        fill="#3f3d56"
      />
      <path
        d="M360.98 432.25s24 21.9 18.89 21.9-18.89-21.9-18.89-21.9zM357.54 440.84s15.89 15 11.17 16.31-11.17-16.31-11.17-16.31zM350.97 404.59s1.32.86 3.86 2.38c4.31-4.32 10.63-11.27 12.68-16.87 3.22-8.81 1.93-34.35 1.93-34.35-1.08 1.07-2.69 10-2.69 10l-3.83 14.26-.67.56c-6 4.93-6.77 13.52-8.49 15.67s-2.79 8.35-2.79 8.35z"
        opacity={0.1}
      />
      <circle cx={102.62} cy={743.69} r={8.7} fill="#3f3d56" />
      <circle cx={178.95} cy={702.77} r={8.7} fill="#3f3d56" />
      <path
        d="M51.54 676.67c10.5-.53 36.26-1.17 41.42-3.75s61.19-62.16 61.19-62.16l16.74-24.47 27.38-11.59 22.86-26.11 18.05-11.54s-3.88 1.22-4.2-2.63a9.17 9.17 0 00-.72-2.88 7.16 7.16 0 00-2.09-2.88 4.46 4.46 0 00-4.6-.66c-4.18 1.61-59.16 10.95-59.16 10.95s-17.16 2.9-32.94 23.83a267.71 267.71 0 01-30 33.81L62.63 647.8s-21.59 29.4-11.09 28.87z"
        fill={color}
      />
      <path
        d="M51.41 689.34l42.51 54.35 1.52-.71 80.6-37.57 32.85-33.17s71.18-75 76.65-86.31-15.72-29.95-15.72-29.95C253.14 526.67 244 535.69 244 535.69l-80.78 22.21h-.06l-.41.51c-6.27 6.67-77.29 82.26-100.44 105.93l-.05.06c-3.29 3.37-5.61 5.68-6.61 6.57-8.42 7.44-4.24 18.37-4.24 18.37z"
        fill={color}
      />
      <path
        d="M51.41 689.34l42.51 54.35 1.52-.71c22.49-28.23 77.94-97.29 93.49-111.37 19.64-17.8 14.82-28.9 14.82-28.9L187 579.85c-12.63-23.42-22.9-22.08-23.77-21.91h-.06l-.42.47L62.28 664.35l-.05.06c-3.29 3.37-5.61 5.68-6.61 6.57-8.39 7.43-4.21 18.36-4.21 18.36z"
        opacity={0.1}
      />
      <path
        d="M245.93 555.05l-7.09-6.12s-16.09-3.52-29.62 12.24l4.83 5.8s12.23-14.17 31.88-11.92z"
        fill="#3f3d56"
      />
      <path
        d="M245.93 555.05l-7.09-6.12s-16.09-3.52-29.62 12.24l4.83 5.8s12.23-14.17 31.88-11.92z"
        opacity={0.1}
      />
      <path
        fill="#65617d"
        d="M257.85 590.48l68.91-89.5-4.18-1.64-70.21 87.92 5.48 3.22zM234.02 597.88l69.5-89.2-3.48-4.51-72.47 89.85 6.45 3.86z"
      />
      <path
        d="M302.61 511.04c-.75-.24-7.52-6.12-7.52-6.12A49.82 49.82 0 01315.91 487c7.47-3.42 15.83-6.09 19.23-3 0 0 5.9 7.23-1.08 12.85l-5-1.26s-7.52-8.37-19.76 7.51z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M334.06 496.84l-9.12 9.37-6.87-3.12 8-10.19 4.24 1.28 3.75 2.66z"
      />
      <path
        d="M122.59 590.47c.53-.54 31.42-31.61 40.36-38 7.82-5.58 58.1-17.79 71.31-20.93a7.16 7.16 0 00-2.09-2.88c-12.6 3.4-53.19 14.34-66 17.59-15.13 3.83-43.14 43.59-43.58 44.22z"
        opacity={0.1}
      />
      <path
        opacity={0.1}
        d="M236.92 537.67l-73.55 19.46L51.54 676.67v-3.43l109.69-116.75 75.69-18.82zM388.16 266.58c9.21 1.95 19.63.57 26.51-5.85-4.71-1.55-7.58-6.22-9.77-10.67a122.15 122.15 0 01-6.53-16.16c-1.21-3.71-1.83-8.65 1.47-10.74 1.52-1 3.52-1 4.92-2.12 1.81-1.45 1.93-4.2 1.3-6.44-1.3-4.67-5-8.25-7.21-12.57a21 21 0 0119.62-30.54c1.86.08 4.16.2 5.11-1.39.73-1.23.21-2.81.44-4.22 1.27-7.59 16.86-4.74 19.68-12 1.86-4.8-5.48-7-8.83-8.72-6.8-3.52-12.45-8.76-19.38-12-1.14-.53-2.31-1-3.49-1.47a50.38 50.38 0 017.35 2.72c6.93 3.25 12.58 8.49 19.38 12 3.35 1.74 10.7 3.93 8.83 8.73-2.81 7.26-18.41 4.41-19.67 12-.24 1.41.29 3-.44 4.22-1 1.59-3.25 1.47-5.11 1.39a21 21 0 00-19.59 30.56c2.2 4.33 5.9 7.91 7.21 12.58.62 2.24.5 5-1.31 6.44-1.39 1.13-3.39 1.16-4.91 2.12-3.3 2.09-2.68 7-1.48 10.74a122.2 122.2 0 006.49 16.16c2.18 4.45 5.05 9.12 9.76 10.67-6.88 6.42-17.3 7.79-26.5 5.85a50.26 50.26 0 01-7.25-2.13c1.14.32 2.26.6 3.4.84z"
      />
    </svg>
  );
};

SvgBusinesswoman.propTypes = {
  color: PropTypes.string
};
SvgBusinesswoman.defaultProps = {
  color: "primary"
};
export default SvgBusinesswoman;
