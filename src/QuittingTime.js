import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgQuittingTime = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1118.03 765.72"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="QuittingTime_svg__a"
          x1={898.64}
          y1={821.89}
          x2={898.64}
          y2={100.83}
          gradientTransform="matrix(-1 0 0 1 1741 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M649.58 113.22c-71.67-2.28-139.94-23.52-205.12-46.75s-129.76-49-199.72-61.28c-45-7.92-96.45-9-132.71 13.1-34.88 21.3-46.16 58.08-52.22 92.21-4.56 25.67-7.24 52.69 5.25 76.73 8.68 16.68 24.08 30.71 34.73 46.69 37.07 55.62 10.87 124.2-29.3 178.5-18.84 25.44-40.69 49.78-55.23 76.89s-21.25 58.19-8.54 85.85c12.61 27.42 42.65 48 75.2 62.5 66.1 29.42 144 37.84 220 42.61 168.09 10.59 337.09 5.98 505.72 1.41 62.39-1.7 125-3.41 186.43-12.27 34.08-4.92 69.27-12.72 94-31.56 31.42-23.91 39.2-64.41 18.15-94.39-35.3-50.3-132.92-62.8-157.6-116.77-13.61-29.72.39-62.83 20.12-90.37 42.34-59.11 113.32-111 117.06-178.54 2.57-46.41-31.55-92.89-84.31-114.85-55.3-23-132-20.12-172.79 18-42.01 39.21-115.83 54.31-179.12 52.29z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={802.9}
        cy={744.72}
        rx={129}
        ry={21}
        fill={color}
        opacity={0.1}
      />
      <path
        fill="#5f5d7e"
        d="M295.39 389.56l-.32 17.64-2.62 143.02-22.41 52.49-77.24.88V397.68l80.61-6.38 21.98-1.74z"
      />
      <path
        opacity={0.1}
        d="M295.39 389.56l-.32 17.64-2.62 143.02-22.41 52.49-77.24.88V397.68l80.61-6.38 21.98-1.74z"
      />
      <path
        fill="#5f5d7e"
        d="M295.39 389.56l-.32 17.64-2.62 143.02-22.41 52.49 5.9-195.17-.02-.13-2.51-16.11 21.98-1.74z"
      />
      <path
        opacity={0.1}
        d="M273.41 391.3l21.98-1.74-.32 17.64-19.15.21-83.12.93v-10.66l80.61-6.38z"
      />
      <path
        fill="#5f5d7e"
        d="M989.68 397.68V602.4H971.7l-71.94-52.47V391.91l64.27-6.04 3.94 1.81 3.73 1.72 17.98 8.28z"
      />
      <path opacity={0.1} d="M971.7 387.68h17.98V602.4H971.7z" />
      <path
        opacity={0.1}
        d="M989.68 387.68v11.77l-17.98.21-71.94.79v-8.54l64.27-6.04 3.94 1.81 3.73 1.72v-1.72h17.98z"
      />
      <path
        fill="#5f5d7e"
        d="M989.68 381v16.68l-883.55 9.86v-21.23l83.13-16.81 723.47-5.3 76.95 16.8z"
      />
      <path
        opacity={0.1}
        d="M989.68 381v16.68l-883.55 9.86v-21.23L989.68 381z"
      />
      <ellipse cx={256.69} cy={374.88} rx={39.83} ry={2.55} opacity={0.1} />
      <path
        d="M290.12 276.29a15.18 15.18 0 00-2 3.8c-.12.33-.24.71-.36 1.07a3.13 3.13 0 00-.71-.24 9.8 9.8 0 00-3.15-.28q0-.61.06-1.29c.13-4.66-.42-11.16-4.87-8.41-4.26 2.65-1.22 7.06 1.53 9.91.24.25.48.48.71.7-2.51 1.8-3 5.95-3.41 10.29s-4.1 9.1-6.54 11.8l-.7.75a8.92 8.92 0 00-7.11-1.83q-.17-.57-.33-1.2c-2-7.15-6.09-19.54-11.34-22.26l.69-.87c2.23-2.92 4.74-7.25 1-8.36s-4 3.76-3.83 7.4c0 .46.06.89.1 1.3a5.46 5.46 0 00-3.85 1.89c-.18-.22-.36-.44-.57-.68-3-3.55-8.52-9.17-10.19-4.91-1.55 4 3.3 9.1 6.72 12.08l.21.19c-2.29 9.3 7.71 16.88 13.1 20.19l.69.43c-7.43 8.75-12 25.16-12 25.16l20.8 3.72s13.79-11.9 12-23.08h.14c13.78-2.76 16.92-17.46 14.77-26.18l.25-.1a15.77 15.77 0 006.38-4.83c3.86-5.37-4.23-11.42-8.19-6.16z"
        fill={color}
      />
      <path
        d="M290.12 276.29a15.18 15.18 0 00-2 3.8c-.12.33-.24.71-.36 1.07a3.13 3.13 0 00-.71-.24 9.8 9.8 0 00-3.15-.28q0-.61.06-1.29c.13-4.66-.42-11.16-4.87-8.41-4.26 2.65-1.22 7.06 1.53 9.91.24.25.48.48.71.7-2.51 1.8-3 5.95-3.41 10.29s-4.1 9.1-6.54 11.8l-.7.75a8.92 8.92 0 00-7.11-1.83q-.17-.57-.33-1.2c-2-7.15-6.09-19.54-11.34-22.26l.69-.87c2.23-2.92 4.74-7.25 1-8.36s-4 3.76-3.83 7.4c0 .46.06.89.1 1.3a5.46 5.46 0 00-3.85 1.89c-.18-.22-.36-.44-.57-.68-3-3.55-8.52-9.17-10.19-4.91-1.55 4 3.3 9.1 6.72 12.08l.21.19c-2.29 9.3 7.71 16.88 13.1 20.19l.69.43c-7.43 8.75-12 25.16-12 25.16l20.8 3.72s13.79-11.9 12-23.08h.14c13.78-2.76 16.92-17.46 14.77-26.18l.25-.1a15.77 15.77 0 006.38-4.83c3.86-5.37-4.23-11.42-8.19-6.16z"
        opacity={0.1}
      />
      <path
        d="M248.71 282.29l-2.43 7.12s-1.35-.95-3.06-2.46c-3.41-3-8.27-8.12-6.71-12.08 1.67-4.26 7.18 1.36 10.19 4.91a49.15 49.15 0 012.01 2.51zM253.84 278.23a35 35 0 01-2.37 2.79 37 37 0 01-.43-3.75c-.2-3.64.18-8.48 3.83-7.4s1.2 5.44-1.03 8.36zM285.21 279.35c-.07 2.34-.3 4.21-.3 4.21a28.6 28.6 0 01-3-2.71c-2.75-2.85-5.8-7.26-1.53-9.91 4.41-2.75 4.96 3.75 4.83 8.41zM299.58 282.42a15.77 15.77 0 01-6.38 4.83 18.3 18.3 0 01-2.14.77l-2.87-4a30.14 30.14 0 011.19-3.91 15.18 15.18 0 012-3.8c3.97-5.28 12.06.77 8.2 6.11z"
        fill={color}
      />
      <path
        d="M246.7 279.78c1.21 1.42 2 2.51 2 2.51l-2.43 7.12s-1.35-.95-3.06-2.46a13.87 13.87 0 012.74-6.25c.25-.33.5-.64.75-.92zM253.84 278.23a35 35 0 01-2.37 2.79 37 37 0 01-.43-3.75 4.88 4.88 0 012.8.96z"
        opacity={0.1}
      />
      <path
        d="M265.8 306.49l-6.05 2.66a35.85 35.85 0 01-3.22-1.82c-6.36-3.91-19.14-13.75-10.57-25.36s15.72 9.21 18.53 19.39c.85 3.04 1.31 5.13 1.31 5.13z"
        fill={color}
      />
      <path
        d="M281.88 280.86a4.92 4.92 0 013.33-1.5c-.07 2.34-.3 4.21-.3 4.21a28.6 28.6 0 01-3.03-2.71zM293.2 287.25a18.3 18.3 0 01-2.14.77l-2.87-4a30.14 30.14 0 011.19-3.91c1.85 1.06 3.21 3.75 3.82 7.14z"
        opacity={0.1}
      />
      <path
        d="M278.18 313.53q-.5.1-1 .18c-20.27 3.09-6.68-7.86-6.68-7.86s.91-.84 2.15-2.21c2.44-2.7 6.13-7.43 6.55-11.8.63-6.57 1.37-12.73 9.13-10.92s9.05 28.77-10.15 32.61z"
        fill={color}
      />
      <path fill="#474157" d="M239.06 364.02h38.75v10.19h-38.75z" />
      <path fill="#474157" d="M232.9 330.91h50.63v35.56H232.9z" />
      <path opacity={0.1} d="M238.68 364.02h38.75v10.19h-38.75z" />
      <path opacity={0.1} d="M232.74 330.91h50.63v35.56h-50.63z" />
      <path fill="#474157" d="M241.61 364.02h38.75v10.19h-38.75z" />
      <path
        d="M264.49 301.36c.85 3 1.31 5.13 1.31 5.13l-6.05 2.66a35.85 35.85 0 01-3.22-1.82c2.37-3 5.04-5.27 7.96-5.97zM278.18 313.53q-.5.1-1 .18c-20.27 3.09-6.68-7.86-6.68-7.86s.91-.84 2.15-2.21c3.76 3.03 5.36 6.44 5.53 9.89z"
        opacity={0.1}
      />
      <path
        d="M245.21 332.92s11.36-40.65 27.28-28.12-6.48 31.84-6.48 31.84z"
        fill={color}
      />
      <circle cx={250.95} cy={288.34} r={1.27} opacity={0.1} />
      <circle cx={250.84} cy={294.29} r={1.27} opacity={0.1} />
      <circle cx={287.78} cy={289.51} r={1.27} opacity={0.1} />
      <circle cx={258.06} cy={319.97} r={1.27} opacity={0.1} />
      <circle cx={285.12} cy={299.38} r={1.27} opacity={0.1} />
      <circle cx={271.96} cy={312.54} r={1.27} opacity={0.1} />
      <circle cx={255.3} cy={290.89} r={1.27} opacity={0.1} />
      <circle cx={284.27} cy={293.33} r={1.27} opacity={0.1} />
      <circle cx={279.92} cy={303.2} r={1.27} opacity={0.1} />
      <circle cx={266.55} cy={319.02} r={1.27} opacity={0.1} />
      <circle cx={263.79} cy={312.76} r={1.27} opacity={0.1} />
      <circle cx={257.21} cy={298.64} r={1.27} opacity={0.1} />
      <path opacity={0.1} d="M241.61 364.02h38.75v3.72h-38.75z" />
      <path fill="#474157" d="M235.45 330.91h50.63v35.56h-50.63z" />
      <circle cx={268.25} cy={324.75} r={1.27} opacity={0.1} />
      <circle cx={260.6} cy={326.34} r={1.27} opacity={0.1} />
      <path
        d="M382.01 466.79s6.31 8.25-2.91 20.71-16.83 23-13.76 30.74c0 0 13.92-23.14 25.24-23.46s3.85-14.08-8.57-27.99z"
        fill={color}
      />
      <path
        d="M382.01 466.79a10.49 10.49 0 011.29 2.58c11.05 13 16.94 25.11 6.31 25.41-9.89.28-21.76 18-24.6 22.44a8.67 8.67 0 00.33 1s13.92-23.14 25.24-23.46 3.85-14.06-8.57-27.97z"
        opacity={0.1}
      />
      <path
        d="M393.7 477.3c0 2.91-.33 5.26-.73 5.26s-.73-2.35-.73-5.26.41-1.53.81-1.53.65-1.37.65 1.53z"
        fill="#ffd037"
      />
      <path
        d="M397.72 480.77c-2.55 1.39-4.77 2.23-5 1.88s1.72-1.77 4.27-3.16 1.54-.38 1.73 0 1.55-.11-1 1.28z"
        fill="#ffd037"
      />
      <path
        d="M348.64 466.79s-6.32 8.25 2.91 20.71 16.83 23 13.75 30.74c0 0-13.91-23.14-25.24-23.46s-3.88-14.08 8.58-27.99z"
        fill={color}
      />
      <path
        d="M348.64 466.79a10.08 10.08 0 00-1.29 2.58c-11.06 13-16.94 25.11-6.32 25.41 9.9.28 21.77 18 24.61 22.44-.1.35-.21.69-.34 1 0 0-13.91-23.14-25.24-23.46s-3.88-14.06 8.58-27.97z"
        opacity={0.1}
      />
      <path
        d="M336.9 477.3c0 2.91.33 5.26.73 5.26s.73-2.35.73-5.26-.41-1.53-.81-1.53-.65-1.37-.65 1.53z"
        fill="#ffd037"
      />
      <path
        d="M332.88 480.77c2.55 1.39 4.77 2.23 5 1.88s-1.71-1.77-4.26-3.16-1.55-.38-1.74 0-1.55-.11 1 1.28z"
        fill="#ffd037"
      />
      <ellipse
        cx={365.31}
        cy={571.24}
        rx={65.98}
        ry={10.13}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M399.26 507.12l-.32 2.58-.44 3.64-.18 1.51-.44 3.65-.2 1.51-.44 3.64-5.05 41.39c-.45 3.7-6.48 6.58-13.77 6.58h-26.24c-7.28 0-13.31-2.88-13.76-6.58l-5.06-41.39-.44-3.64-.18-1.51-.46-3.65-.18-1.51-.44-3.64-.32-2.58c-.25-2.09 3-3.85 7.14-3.85h53.65c4.12 0 7.39 1.76 7.13 3.85z"
        fill="#65617d"
      />
      <path
        fill="#9d9cb5"
        d="M398.95 509.69l-.45 3.64h-66.39l-.45-3.64h67.29zM398.32 514.85l-.44 3.64h-65.14l-.45-3.64h66.03zM397.69 520.01l-.44 3.64h-63.88l-.45-3.64h64.77z"
      />
      <path
        d="M565.47 366.54v2.06h-60.91v-1.67a20 20 0 0013.06-18.78 20 20 0 00-11.68-18.19h59.12a20 20 0 00.41 36.58z"
        fill="#c8cad7"
      />
      <path
        d="M565.06 329.96a20 20 0 00-11.05 13.27h-37a20.06 20.06 0 00-11.07-13.27z"
        opacity={0.1}
      />
      <path
        d="M434.81 319.46v11.57c0 6.38 4.68 11.56 10.44 11.56h179.21c5.76 0 10.44-5.18 10.44-11.56v-11.57z"
        fill="#c8cad7"
      />
      <path
        d="M565.47 366.54v2.06h-60.91v-1.67a20.16 20.16 0 004.7-2.5h52.48a20.12 20.12 0 003.73 2.11z"
        opacity={0.1}
      />
      <rect
        x={484.44}
        y={365.07}
        width={101.17}
        height={6.1}
        rx={3.05}
        fill="#c8cad7"
      />
      <path
        d="M634.9 192.77a10.44 10.44 0 00-10.44-10.44H445.25a10.44 10.44 0 00-10.44 10.44v128.94H634.9z"
        fill="#5f5d7e"
      />
      <path
        d="M629.44 197.42v110.8a5.14 5.14 0 01-5.14 5.14H445.41a5.14 5.14 0 01-5.14-5.14v-110.8a5.09 5.09 0 01.74-2.56 5.15 5.15 0 014.45-2.57H624.3a5.14 5.14 0 015.14 5.13z"
        fill={color}
      />
      <circle cx={534.86} cy={187.3} r={2.41} fill="#fff" />
      <circle cx={534.86} cy={331.51} r={5.94} fill="#fff" />
      <path
        d="M629.44 197.42H440.27a5.14 5.14 0 015.14-5.14H624.3a5.14 5.14 0 015.14 5.14z"
        fill="#fff"
      />
      <circle cx={445.42} cy={194.85} r={1.28} fill="#ededf4" />
      <circle cx={449.27} cy={194.85} r={1.28} fill="#ededf4" />
      <circle cx={453.12} cy={194.85} r={1.28} fill="#ededf4" />
      <path
        d="M698 489s12 4.88 26.73 10.73a38.17 38.17 0 011.16 5.14c.26 3.4 7 8.19 7 8.19s12.5 2.26 21.91 4.91c7.31 2 8.32-2 7.38-3.56l2.19.84c.49 20.24 1.05 35 1.05 35s3.2 0 8.25.24c.06.64.12 1.3.19 2 1.93 20 5.48 53 8.23 55.74 4 3.87 2.23 32.39.69 37.43s0 41.31 0 41.31 6.19 22.16 5.67 46.34 6.7 36.78 6.7 36.78l2.59.19c0 .67-.08 1.33-.11 2-.12 2.19-.21 4.38-.24 6.37a15.66 15.66 0 01-3 8.42 51.77 51.77 0 00-8.39 19.75 43.2 43.2 0 00-.64 4.8c0 .4-.05.62-.05.62s2.4 7.06 24.92 9.41 19.26-13.94 19.26-13.94.11-.46.25-1.3a48.78 48.78 0 00.09-16.66c-.79-4.3-.11-11.74.87-18.56.1-.71.21-1.41.31-2.1a12.58 12.58 0 005.17-2.4c7.05-6.43 0-57.55 0-57.55s-12.72-41.81-9.62-47.86 6.7-20.65 6.7-20.65v-50.88c5-8.07 7.25-19.11 8.18-29.16.06-.67.12-1.33.17-2 4.17.08 8.17-.07 11.8-.32l1 2c5.9 11.43 11.9 22.75 13.37 24.42 3.09 3.53.51 19.65 0 27.71s5.67 24.18 5.67 24.18c-7.73 4.53-9.28 57.93-9.28 57.93s5.67 13.1-6.19 27.71-7.22 42.32-5.67 41.31c.41-.27 2.92.14 6.49.73a17.14 17.14 0 01-3.4 6.52c-3.83 4.76-5.14 12.22-5.52 18.18a65.11 65.11 0 000 9.33l8.59 6s5.33 0 5.33 4.71 13.06 9.4 13.06 9.4 19.42 5.37 34.38 0c4.85-1.74 6.33-4.73 5.76-8.36-1.18-7.59-11.33-18-18.65-25.56-4.94-5.13-7.19-11.93-8.19-17.82-.11-.63-.2-1.25-.28-1.86a5.9 5.9 0 001.59-1.31c6.19-7.56 12.89-28.21 12.89-28.21S901.3 714.18 908 695c5-14.19 11.07-47.45 13.89-63.74a63.55 63.55 0 00.56-17.9c-1.3-11.89-3.3-33.92-2.59-51.36.24-5.69.07-14.74-.32-25.35v-.15c3.67-6.93 11.63-18.24 24.91-19.17 19.25-1.35 9.28-11.92 9.28-11.92S942.44 426.08 935 412a5.81 5.81 0 00-.39-.71c-1.1-1.75-2.3-5.25-3.57-9.92-7.33-27.05-16.71-93.69-16.71-93.69l-1.15-16.21c11.48 5.63 32.78 15.9 41.37 18.9 12 4.2 28.7 1.51 32.83-12.26s-13.06-41.64-13.06-41.64c-2.53-9.88-20-30.45-29.09-40.66-.88-1.33-1.75-2.65-2.6-3.91-2.34-3.49-4.45-6.57-5.79-8.38l-.13.25c-.33-.46-.64-.89-.91-1.25l-.22.44c-3.25-6-6.9-12.17-9.73-15.48-6.58-7.68-35.28-15.94-38.12-13.67-2.07 1.65 6.52 8.85 12.53 13.27l-5.74-3.88-12.83-11.1-5.65-3.82a5.41 5.41 0 00-.74-.42 40.52 40.52 0 00-6.52-33.86c-.4-.55-.83-1.1-1.26-1.63 5.91-4.92 7.78-13.05 7.78-20.2v-.27a14.33 14.33 0 00-3.43-7.21c.09.18.18.38.26.57a11.61 11.61 0 00-8.65-4.45c-5-.08-9.19 3.2-13.58 5.45a35.09 35.09 0 01-29.25 1c-2.71-1.16-5.44-2.7-8.38-2.46s-5.27 2.13-7.27 4.1a47.69 47.69 0 00-11.1 16.42c-.74 1.81-1.4 3.74-2.83 5.1a19.93 19.93 0 01-3.52 2.3 18.91 18.91 0 00-8.39 12.28 26.44 26.44 0 001.51 14.85 22.44 22.44 0 005.54 8.6c1.87 1.73 4.11 3 6.09 4.63a21.91 21.91 0 012.51 2.4 47.59 47.59 0 00-23.67 13.12 62.06 62.06 0 00-12 16.12c-8.37 15.73-13.45 25.52-16.47 31.73-1.51.46-2.44.68-2.44.68s-11.34 10.07-11.17 38.95l-8.77 57.76v29.55S709 395.46 710.85 422c0 .36 0 .71.07 1.06l-.92 4.51a10.39 10.39 0 00-2 6.68 8.55 8.55 0 00.18 2.44l-4.6 22.72.87.92-2.37 6.67c-8.93 14.27-4.08 22-4.08 22zm66.32-162c.57.39.89.59.89.59s5 44.77 2 71.39l-10.53-.72-5-1.54 1.79-14.23S759.88 345 764.28 327zm41.38-129.95l1-1.54c-.21.55-.42 1.09-.64 1.59zm-47.53 201.71l5.45.56 3.45.72q-.09.72-.18 1.41zM875.3 205.2a12.16 12.16 0 00-.1-1.49l4.28 2.54.26.16c-1.48-.43-3-.81-4.44-1.16zm33.22 19.8a32.11 32.11 0 00-1.9-2.67c3 .72 4.86 1.14 4.86 1.14a13.28 13.28 0 017.12.72 39.72 39.72 0 002.47 4.32l7.9 15.3s-1.72.17-5.16-1.51-15.29-17.3-15.29-17.3zM758.43 513l2.47 1c-.55.17-1.43-.23-2.47-1z"
        transform="translate(-40.99 -67.14)"
        fill="url(#QuittingTime_svg__a)"
      />
      <path
        d="M803.01 117.15c3.18 1.87 3.28 9.86 2.79 16.27-.35 4.69-1 8.53-1 8.53l20.69 50.3s7.67-35.84 7.79-51.84a11.86 11.86 0 00-.57-3.72c-3.61-11.53-23.89-17.93-29.7-19.54zM801.52 116.75s.56.13 1.53.4a3 3 0 00-1.53-.4zM808.69 729.08l8.33 6s5.17 0 5.17 4.67 12.66 9.33 12.66 9.33 18.84 5.33 33.34 0c4.7-1.73 6.14-4.69 5.59-8.3-1.15-7.53-11-17.82-18.09-25.37-4.79-5.09-7-11.84-7.94-17.68a52.82 52.82 0 01-.56-12.65l-30.5-2.17a20.14 20.14 0 010 14.29 18.58 18.58 0 01-2.67 4.58c-3.72 4.72-5 12.13-5.36 18a65.93 65.93 0 00.03 9.3zM746.01 742.91s2.33 7 24.17 9.34 18.67-13.84 18.67-13.84.11-.46.25-1.29a49.76 49.76 0 00.08-16.54c-.76-4.26-.1-11.65.85-18.42 1.12-8.06 2.65-15.25 2.65-15.25l-33.84 2.5s-.59 6.89-.93 13.85c-.11 2.17-.2 4.34-.23 6.32a15.78 15.78 0 01-2.92 8.35 52.17 52.17 0 00-8.08 19.6 44.57 44.57 0 00-.62 4.76c-.05.4-.05.62-.05.62z"
        fill="#67647e"
      />
      <path
        d="M808.69 729.08l8.33 6s5.17 0 5.17 4.67 12.66 9.33 12.66 9.33 18.84 5.33 33.34 0c4.7-1.73 6.14-4.69 5.59-8.3-.45 0-.88.06-1.24.07-5.94.19-11.72 1.79-17.63 2.32a87.64 87.64 0 01-10.12.16 35.3 35.3 0 01-5-.39c-4-.71-7.71-2.78-11.28-4.81a6.4 6.4 0 01-2.25-1.76 8.6 8.6 0 01-1-2.68c-1.26-4.52-4.78-8.14-8.82-10.52a38.46 38.46 0 00-7.77-3.35 65.93 65.93 0 00.02 9.26zM746.01 742.91s2.33 7 24.17 9.34 18.67-13.84 18.67-13.84.11-.46.25-1.29c-1 .52-1.85 1-2.24 1.22-2 1.17-3.79 2.78-5.87 3.87-5 2.63-11 1.85-16.64 1-2.65-.4-5.3-.8-7.94-1.29a20.08 20.08 0 01-5.81-1.72 34.62 34.62 0 01-3.92-2.66 44.57 44.57 0 00-.62 4.76c-.05.39-.05.61-.05.61z"
        fill="#67647e"
      />
      <path
        d="M808.69 729.08l8.33 6s5.17 0 5.17 4.67 12.66 9.33 12.66 9.33 18.84 5.33 33.34 0c4.7-1.73 6.14-4.69 5.59-8.3-.45 0-.88.06-1.24.07-5.94.19-11.72 1.79-17.63 2.32a87.64 87.64 0 01-10.12.16 35.3 35.3 0 01-5-.39c-4-.71-7.71-2.78-11.28-4.81a6.4 6.4 0 01-2.25-1.76 8.6 8.6 0 01-1-2.68c-1.26-4.52-4.78-8.14-8.82-10.52a38.46 38.46 0 00-7.77-3.35 65.93 65.93 0 00.02 9.26zM746.01 742.91s2.33 7 24.17 9.34 18.67-13.84 18.67-13.84.11-.46.25-1.29c-1 .52-1.85 1-2.24 1.22-2 1.17-3.79 2.78-5.87 3.87-5 2.63-11 1.85-16.64 1-2.65-.4-5.3-.8-7.94-1.29a20.08 20.08 0 01-5.81-1.72 34.62 34.62 0 01-3.92-2.66 44.57 44.57 0 00-.62 4.76c-.05.39-.05.61-.05.61zM816.69 682.91a20.14 20.14 0 010 14.29c8.75 1.49 25.06 4.5 31.06.53a52.82 52.82 0 01-.56-12.65zM757.92 703.26c6.18.44 22.81 1.31 32.12-1.1 1.12-8.06 2.65-15.25 2.65-15.25l-33.84 2.5s-.59 6.89-.93 13.85z"
        opacity={0.1}
      />
      <path
        d="M733.52 470.08s.52 6.25 1.35 15c1.87 19.86 5.32 52.65 8 55.32 3.84 3.85 2.17 32.15.67 37.15s0 41 0 41a183 183 0 015.5 46c-.5 24 6.5 36.5 6.5 36.5s33 3 39.83-3.38 0-57.12 0-57.12-12.36-41.47-9.36-47.47 6.5-20.5 6.5-20.5v-50.5c4.85-8 7-19 7.93-28.94a152.17 152.17 0 00.07-25.56s6.21 12.7 12.54 25.26c5.72 11.35 11.54 22.58 13 24.24 3 3.5.5 19.5 0 27.5s5.5 24 5.5 24c-7.5 4.5-9 57.5-9 57.5s5.5 13-6 27.5-7 42-5.5 41 32 7.5 38 0 12.5-28 12.5-28-3-21 3.5-40c4.82-14.08 10.73-47.09 13.47-63.26a64.45 64.45 0 00.49-17.76c-1.26-11.81-3.2-33.67-2.51-51 .23-5.65.07-14.63-.31-25.16-1.29-36.1-5.19-90.34-5.19-90.34l-27.1-18.36-17.89-12.12-4.38.67-81.62 12.61-3.17 40.26z"
        fill="#444053"
      />
      <path
        d="M843.92 360.72l1.43 7.86s12 57.5 14.5 87 13 21 13 21a46.76 46.76 0 013.36-7.16c-1.29-36.1-5.19-90.34-5.19-90.34z"
        opacity={0.1}
      />
      <path
        d="M758.19 142.58s56 44.83 45.66 35.83c-5.66-4.94-1.81-26 2.83-44 3.82-14.85 8.17-27.63 8.17-27.63s-48.88-45.73-45.33-8.34c1.25 13.18.21 22.55-1.66 29.17-3.43 12.13-9.67 14.97-9.67 14.97z"
        fill="#efb7b9"
      />
      <path
        d="M762.85 130.66l35.5 27.75 10.33-11.5s8.84-3.83 9.5.5 3.17 31-2 33.5-11.83 4.17-17.66 3.34-12.34-7.34-16.67-9.84-20.33-15.5-20.33-15.5l-8-11.16z"
        opacity={0.1}
      />
      <path
        d="M762.85 131.66l35.5 27.75 10.33-11.5s8.84-3.83 9.5.5 3.17 31-2 33.5-11.83 4.17-17.66 3.34-12.34-7.34-16.67-9.84-20.33-15.5-20.33-15.5l-8-11.16z"
        fill="#a36468"
      />
      <path
        d="M733.52 470.08s.52 6.25 1.35 15c11 .42 32.34 1.72 47.32 5.64a82.1 82.1 0 0018.26 2.39 152.17 152.17 0 00.07-25.56s6.21 12.7 12.54 25.26a132.25 132.25 0 0016.13-2.09l-6.67-86.67s.22-29.09-.88-54.83l-81.63 12.64-3.17 40.26zM794.85 156.08s-24.25-26.51-30-22.3-9.47 14.47-9.47 14.47l19.75 21.66z"
        opacity={0.1}
      />
      <path
        d="M793.85 155.08s-24.25-26.51-30-22.3-9.47 14.47-9.47 14.47l19.75 21.66z"
        fill="#a36468"
      />
      <path
        d="M814.01 172.07l-14-17.55s2.2-16.59 7.32-14.47 6.68 10.61 6.68 10.61z"
        opacity={0.1}
      />
      <path
        d="M815.01 170.91l-13.93-17.55s2.2-16.59 7.32-14.47 6.61 10.61 6.61 10.61z"
        fill="#a36468"
      />
      <path
        d="M750.85 139.41s28.71 31 45.85 33.08c1.55.19 3.1.45 4.63.76 4.48.88 14.24 0 12.69-25.63l2.16-4.54 13.34 8.17 4.5 36.66 8 94 11.83 104.67s-36.33-3.5-46.5 5.67-13-50-13-50l-27.83-120-29.67-77.17z"
        opacity={0.1}
      />
      <path
        d="M736.85 149.08l29.67 77.17 27.83 120s2.84 59.16 13 50c3.32-3 9.44-4.64 16.17-5.49a146.63 146.63 0 0124.92-.56c3.32.18 5.41.38 5.41.38l-11.84-104.67-8-94-4.5-36.66-13.33-8.17-2.17 4.54c0 .67.07 1.33.1 2 .94 23.68-8.43 24.52-12.78 23.66-1.54-.31-3.08-.57-4.64-.76-12.14-1.49-30.08-17.46-39.51-26.64-3.89-3.8-6.34-6.44-6.34-6.44z"
        opacity={0.1}
      />
      <path
        d="M736.85 146.08l29.67 77.17 27.83 120s2.84 59.16 13 50c3.32-3 9.44-4.64 16.17-5.49a146.63 146.63 0 0124.92-.56c3.32.18 5.41.38 5.41.38l-11.84-104.67-8-94-4.5-36.66-13.33-8.17-2.17 4.54c0 .67.07 1.33.1 2 .94 23.68-8.43 24.52-12.78 23.66-1.54-.31-3.08-.57-4.64-.76-12.14-1.49-30.08-17.46-39.51-26.64-3.89-3.8-6.34-6.44-6.34-6.44z"
        fill={color}
      />
      <path
        d="M814.01 148.62c0 .67.07 1.33.1 2l.23.16c3.52 2.32 9.17 41.5 9.17 41.5l7.33 99.83 13.5 74.5s1.77 8.49 4.09 20.62c3.32.18 5.41.38 5.41.38l-11.83-104.7-8-94-4.5-36.66-13.33-8.17z"
        opacity={0.1}
      />
      <path
        d="M804.83 141.95s8 6.48 11.52 8.8 9.17 41.5 9.17 41.5l7.33 99.83 13.5 74.5s12 57.5 14.5 87 13 21 13 21 7.84-23 26.5-24.33 9-11.84 9-11.84-10.93-78.77-18.12-92.8a6.48 6.48 0 00-.38-.7c-1.06-1.74-2.23-5.21-3.46-9.85-7.11-26.84-16.2-93-16.2-93l-5.67-82c-14.51-23.65-59.51-22.83-59.51-22.83z"
        fill="#67647e"
      />
      <path
        d="M736.85 146.08l29.67 77.17 27.83 120s2.84 59.16 13 50c3.32-3 9.44-4.64 16.17-5.49-.12-20.34-.74-56.84-3.67-72.18a203.82 203.82 0 01-3.16-42.5l-36.34-79.17s-27.33-33.69-27.5-38.51c-.06-1.78 1.88-5.08 4.34-8.55-3.89-3.8-6.34-6.44-6.34-6.44z"
        opacity={0.1}
      />
      <path
        d="M828.18 488.75l-6.66-86.67s.5-64.67-3.67-86.5a203.44 203.44 0 01-3.17-42.5l-36.33-79.17s-27.33-33.69-27.5-38.51 14.31-20.85 14.31-20.85-31.64 3.7-35.81 17.86-27 19.67-27 19.67-11 10-10.83 38.67 35 51.16 35 51.16 5.83 54 .83 78.34-.67 142.66-.67 142.66 33.5.34 54.5 5.84 47 0 47 0z"
        fill="#67647e"
      />
      <path
        d="M778.85 351.25l-25.67 97.16s-3.5 8.67-21.5 2-70.33-28.33-70.33-28.33-4.67-7.67 4-21.83l26.17-76.67z"
        fill="#b07473"
      />
      <path
        fill="#e1e7ef"
        d="M745.65 394.21l-41.5-45.63-26.5-10.75-10.88 54.87 50.38 54.75 28.5-53.24z"
      />
      <path
        d="M701.3 409.45s12.34 7.25 15.59 7.5 14.73 21.92 9.88 21.75-16.13-6-15-3 8.48 12 10.62 11.15 3.13 6.6-6 4-21.25-4.88-21.25-4.88-6.5-4.75-6.75-8.12-5.87-21.13-5.87-21.13zM899.41 153.45s-10.68-23.05-17.06-30.68-34.21-15.82-37-13.57 14 14.89 17 16.51-19.39 16.67-19.84 17-17.5-1.52-8.75 4.23 34.62 11.61 34.62 11.61a13 13 0 0110 2.39c5.01 3.64 21.03-7.49 21.03-7.49z"
        fill="#efb7b9"
      />
      <path
        d="M677.24 410.61a69.18 69.18 0 005.66 13.35c2.5-2.26 26.37-10.13 26.37-10.13l-2.65-4.09-4.32-6.66s-21.28-4.62-24.9 0c-1.22 1.55-1 4.41-.16 7.53z"
        opacity={0.1}
      />
      <path
        d="M676.24 409.61a69.18 69.18 0 005.66 13.35c2.5-2.26 26.37-10.13 26.37-10.13l-2.65-4.09-4.32-6.66s-21.28-4.62-24.9 0c-1.22 1.55-1 4.41-.16 7.53z"
        fill="#a36468"
      />
      <path
        d="M875.01 158.66a35.16 35.16 0 002.7 4.94c3.85 6.07 9.68 13.23 9.68 13.23s22.74-10.46 22.74-10.92-6.9-11.33-12.51-19.9c-2.27-3.46-4.32-6.52-5.62-8.31 0 0-8.49 17.76-16.87 17.88-2.19.03-1.02.91-.12 3.08z"
        opacity={0.1}
      />
      <path
        d="M876.01 159.66a35.16 35.16 0 002.7 4.94c3.85 6.07 9.68 13.23 9.68 13.23s22.74-10.46 22.74-10.92-6.9-11.33-12.51-19.9c-2.27-3.46-4.32-6.52-5.62-8.31 0 0-8.49 17.76-16.87 17.88-2.19.03-1.02.91-.12 3.08z"
        fill="#a36468"
      />
      <path
        fill="#b07473"
        d="M747.77 343.08l2.92-8.75-40.98-2.88 15.31 1.63 19.5 4.18-1.5 5.82h4.75z"
      />
      <path
        d="M676.24 409.61c4.52-2.13 16.58-6.56 29.38-.87l-4.32-6.66s-21.28-4.62-24.9 0c-1.22 1.55-1 4.41-.16 7.53z"
        opacity={0.1}
      />
      <path
        d="M673.85 355.58c.1 1.45.19 2.9.28 4.34.25 4.41.42 8.78.53 13 .5 19.54-.31 35.66-.31 35.66s15.5-9.33 32-1.5l1.66-31.62v-.55l1.69-13.83 5.48-44.67s10.33-62 13.5-64.33-23.5-52.5-23.5-52.5l-13.67 11.17-8.5 57.33v29.33s-11 31.84-9.16 58.17z"
        fill="#67647e"
      />
      <path
        d="M875.52 158.25l3.2 6.35c3.85 6.07 9.68 13.23 9.68 13.23s22.74-10.46 22.74-10.92-6.9-11.33-12.51-19.9c-1.73-2-2.78-3.1-2.78-3.1 6.67 16.5-20.33 14.34-20.33 14.34z"
        opacity={0.1}
      />
      <path
        d="M856.18 155.4l9.34 4.68s11.5 15.5 14.83 17.17 5 1.5 5 1.5l-9.83-19.5s27 2.16 20.33-14.34c0 0 30.17 33 33.5 46.34 0 0 16.67 27.66 12.67 41.33s-20.17 16.33-31.84 12.17-47.5-22.5-47.5-22.5z"
        fill="#67647e"
      />
      <path
        d="M889.68 187.91s25.17 28.17 23.17 32-21.84-26.33-23.17-32z"
        opacity={0.1}
      />
      <path
        d="M776.1 112.08s-35.42-10.67-55.42 27.83-20.67 41.17-19.67 43 39.83-8.33 42-3.83-22 23-22 23l93.66 71-39.35-83.64a63 63 0 00-10.46-16.07c-6.47-7.24-15.32-18.33-12.19-21.75 2.76-3 7.18-10.83 13.14-19.84 4.37-6.61 11.31-14.06 10.29-19.7z"
        opacity={0.2}
      />
      <path
        d="M777.1 111.08s-35.42-10.67-55.42 27.83-20.67 41.17-19.67 43 39.83-8.33 42-3.83-22 23-22 23l92.66 72-38.35-84.64a63 63 0 00-10.46-16.07c-6.47-7.24-15.32-18.33-12.19-21.75 2.76-3 7.18-10.83 13.14-19.84 4.37-6.61 11.31-14.06 10.29-19.7z"
        fill="#67647e"
      />
      <path
        d="M777.1 111.08s-35.42-10.67-55.42 27.83-20.67 41.17-19.67 43 39.83-8.33 42-3.83-22 23-22 23l92.66 72-40.19-88.71a34.79 34.79 0 00-6.24-9.39c-6.33-6.82-18.11-20.49-14.57-24.36 2.76-3 7.18-10.83 13.14-19.84 4.37-6.61 11.31-14.06 10.29-19.7z"
        opacity={0.1}
      />
      <circle cx={769.85} cy={280.24} r={7.33} fill="#444053" />
      <circle cx={769.85} cy={325.74} r={7.33} fill="#444053" />
      <path
        d="M674.66 372.92c4.22 1 24.23.55 33.33 2.54v-.55l1.69-13.83c-10.26-1.28-32.56-3.71-35.58-1.16-3.91 3.33-4.47 11.85.56 13z"
        fill="#67647e"
      />
      <path
        d="M674.66 373.92c4.22 1 24.23.55 33.33 2.54v-.55l1.69-13.83c-10.26-1.28-32.56-3.71-35.58-1.16-3.91 3.33-4.47 11.85.56 13z"
        opacity={0.1}
      />
      <path
        d="M674.66 372.92c4.22 1 24.23.55 33.33 2.54v-.55l1.69-13.83c-10.26-1.28-32.56-3.71-35.58-1.16-3.91 3.33-4.47 11.85.56 13z"
        opacity={0.1}
      />
      <circle cx={679.02} cy={366.24} r={4.42} fill="#444053" />
      <path
        d="M762.52 383.91l-18.67 63.67s-5 2.33-5-1.83 23.67-61.84 23.67-61.84z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M769.68 124.48a39.81 39.81 0 003.69 2.63c6.35 4 12 9.44 20.1 9.44a40.93 40.93 0 0013.21-2.17c3.82-14.85 8.17-27.63 8.17-27.63s-48.88-45.73-45.33-8.34c1.25 13.18 2.03 19.45.16 26.07z"
        opacity={0.1}
      />
      <path
        d="M752.41 93.49a41.06 41.06 0 1041.06-41.06 40.87 40.87 0 00-41.06 41.06z"
        fill="#efb7b9"
      />
      <path
        d="M816.74 127.86a4.64 4.64 0 001.92 2.25l6.52 4 12.19 7.41 19.29 11.72q.68.41 1.38.75a16.6 16.6 0 0014.63.2 12 12 0 006.83-8.52 14.23 14.23 0 00-5.22-14 .92.92 0 00-.36-.19 35.26 35.26 0 01-11.4-5.57l-12.14-8.4-10.84-9.91-5.48-3.79a5.11 5.11 0 00-5.51-.2c-5.62 3.25-16.81 11.61-11.81 24.25z"
        fill="#e1e7ef"
      />
      <path
        d="M825.18 134.05l12.19 7.41c2.54-10.24 9-17.47 14.61-22.93l-12.44-11c-9.46 4.69-13.22 20.33-14.36 26.52z"
        fill="#a36468"
      />
      <path
        d="M858.01 153.93a16.6 16.6 0 0014.63.2 12 12 0 006.83-8.52 14.23 14.23 0 00-5.22-14 30.73 30.73 0 00-8.3 5.21 23.32 23.32 0 00-7.18 11.3 24 24 0 00-.76 5.81zM752.41 93.49a40.87 40.87 0 003.82 17.31 23.18 23.18 0 015.52 8.76c2.78 3.38 3.87 5.29 7.58 7.63 1.49-1.57 4.85-2.52 5.46-4.55 1.55-5.23.67-10.82.59-16.27 0-2.42.34-5.28 2.47-6.44 1.77-1 4-.28 5.74.7s3.47 2.25 5.47 2.48c3 .34 5.74-1.77 7.42-4.25s2.65-5.38 4.24-7.92c2.1-3.35 5.2-5.92 8.25-8.42 3.49-2.88 6.88-6.07 10.6-8.65 2.22-1.55 4.88-2.27 7.07-3.83l.35-.26a41.06 41.06 0 00-74.58 23.71z"
        opacity={0.1}
      />
      <path
        d="M833.31 48.1c-.87-5.76-5.64-11.17-11.46-11.27-4.81-.08-8.91 3.18-13.17 5.41a33.28 33.28 0 01-28.37 1c-2.61-1.15-5.27-2.68-8.12-2.44s-5.12 2.1-7.1 4a47.62 47.62 0 00-10.76 16.3c-.71 1.8-1.36 3.71-2.74 5.07a20.3 20.3 0 01-3.42 2.27 18.85 18.85 0 00-8.09 12.17 26.89 26.89 0 001.47 14.75 22.65 22.65 0 005.37 8.53c1.82 1.71 4 3 5.91 4.59a23.65 23.65 0 018 21.89c5.32 1.22 10.42-3.54 12-8.77s.67-10.81.59-16.27c0-2.42.34-5.27 2.47-6.43 1.77-1 4-.28 5.74.7s3.46 2.24 5.47 2.48c3 .34 5.74-1.77 7.42-4.25s2.64-5.38 4.24-7.92c2.09-3.35 5.2-5.92 8.25-8.42 3.49-2.88 6.88-6.07 10.59-8.65 2.23-1.55 4.89-2.27 7.08-3.83 6.58-4.71 8.63-13.35 8.63-20.91z"
        fill="#585268"
      />
      <path d="M801.52 116.75s.56.13 1.53.4a3 3 0 00-1.53-.4z" opacity={0.1} />
      <g opacity={0.1}>
        <path d="M770.79 118.37c1.55-5.23.67-10.82.59-16.27 0-2.42.34-5.28 2.47-6.44 1.77-1 4-.28 5.74.7s3.46 2.25 5.47 2.48c3 .34 5.74-1.76 7.42-4.25s2.64-5.38 4.24-7.92c2.09-3.35 5.2-5.92 8.25-8.42 3.49-2.87 6.88-6.07 10.59-8.65 2.23-1.55 4.89-2.27 7.08-3.83 6.62-4.74 8.67-13.38 8.67-20.93a14 14 0 00-1.33-4.16 14.31 14.31 0 013.33 7.18c0 7.55-2 16.19-8.67 20.93-2.19 1.56-4.85 2.28-7.08 3.83-3.71 2.58-7.1 5.78-10.59 8.65-3.05 2.5-6.16 5.07-8.25 8.42-1.6 2.54-2.55 5.44-4.24 7.92s-4.44 4.59-7.42 4.25c-2-.23-3.7-1.51-5.47-2.48s-4-1.66-5.74-.7c-2.13 1.16-2.51 4-2.47 6.44.08 5.45 1 11-.59 16.27s-6.66 10-12 8.76a20.9 20.9 0 00.31-2.84c4.45-.38 8.36-4.45 9.69-8.94zM744.92 100.65c1.82 1.71 4 3 5.91 4.59a22.8 22.8 0 015.21 6.31 22.33 22.33 0 00-3.21-3.31c-1.92-1.59-4.09-2.88-5.91-4.59a19.52 19.52 0 01-3.64-4.78 18.4 18.4 0 001.64 1.78z" />
      </g>
      <path
        d="M800.16 457.61c.73 2.17 1.77 4.29 1.91 6.58.24 3.89-2.14 7.52-2.31 11.42-.2 4.54 2.56 8.61 5.2 12.3-3.13 0-6.55-1.08-8.14-3.77a12.29 12.29 0 01-1.17-3.29c-2.83-11.29-5.58-23.64-.66-34.18a15.11 15.11 0 013.25-4.88c.83 5.32.13 10.55 1.92 15.82zM878.38 377.93l8.31-11.21c2-2.71 4.07-5.53 4.79-8.82.78-3.61-.13-7.35-.25-11v-1.25a6.48 6.48 0 00-.38-.7c-1.06-1.74-2.23-5.21-3.46-9.85a12 12 0 00-2.76 4.25c-3.87 9.44-.29 20.52-3.49 30.2-.92 2.78-2.42 5.44-2.76 8.38zM857.22 717.27a35.42 35.42 0 01-28.73 5.69M788.37 718.92a21.06 21.06 0 01-30.67-2M832.25 568.17a18.93 18.93 0 0020.76-9.18M784.85 593.44a27.67 27.67 0 01-17.85-4.9M817.2 653.86c5.33 2.17 10.08 5.54 15.27 8s11.2 4.08 16.7 2.36"
        opacity={0.1}
      />
      <ellipse cx={529.34} cy={644.14} rx={85.12} ry={24.55} fill="#5f5d7e" />
      <ellipse cx={529.34} cy={636.23} rx={17.03} ry={4.91} opacity={0.1} />
      <path fill="#5f5d7e" d="M519.87 506.73h17.5v129.5h-17.5z" />
      <path
        d="M537.37 513.14v15c-3.5-1.08-11.49-5.63-17.5-9.21v-12.2h3.65z"
        opacity={0.1}
      />
      <path
        d="M496.14 450.35s57.78-14.87 72.16-26 70.85 41.25 63.39 61-34.62 34.08-34.62 34.08-75.12 12.22-87.9-13.27-13.03-55.81-13.03-55.81z"
        fill="#474157"
      />
      <path
        d="M496.14 450.35s57.78-14.87 72.16-26 70.85 41.25 63.39 61-34.62 34.08-34.62 34.08-75.12 12.22-87.9-13.27-13.03-55.81-13.03-55.81z"
        opacity={0.1}
      />
      <path
        d="M491.14 444.35s57.78-14.87 72.16-26 70.85 41.25 63.39 61-34.62 34.08-34.62 34.08-75.12 12.22-87.9-13.27-13.03-55.81-13.03-55.81z"
        fill="#474157"
      />
      <path
        d="M609.9 342.44c-.22 0-.43-.05-.64-.09a1.33 1.33 0 01.64.09z"
        opacity={0.1}
      />
      <path
        d="M438.72 400.07c-5.77-1.41-21.68-2.71-29.25 22.68a112.32 112.32 0 01-6.71 17.17c-7.27 14.91-16.64 45.56 24.61 52.31l99 22.5s53 6.5 56.5 4 3-8 3-8-58.5 0-70-18-12-42.5-12-42.5 1.44-37.83-59-48.82c-2.04-.37-4.1-.84-6.15-1.34z"
        fill="#474157"
      />
      <path
        d="M438.72 400.24c-5.77-1.41-21.68-2.71-29.25 22.68a112.84 112.84 0 01-6.71 17.18c-7.27 14.9-16.64 45.56 24.61 52.31l99 22.5s53 6.5 56.5 4 3-8 3-8-58.5 0-70-18-12-42.5-12-42.5 1.44-37.83-59-48.82c-2.04-.38-4.1-.85-6.15-1.35z"
        opacity={0.1}
      />
      <path
        d="M646.25 374.2a15.3 15.3 0 00-15.45-12.93c-12.71.24-49 1.78-71.12 11.56-4.86 2.15-9.73 4.24-14.73 6-4.52 1.61-9.91 4.18-12.58 7.87s-65.5 52 25 98.5c0 0 48.5 13.81 67.5-18.59 0 0 13.5-34.81 12.5-46.86s9-44.55 9-44.55-.02-.34-.12-1z"
        fill="#474157"
      />
      <path
        d="M646.25 382.96c-1.14-7-7.8-12.06-15.45-11.93-14.24.24-58.07 2-78.43 14.27 0 0-15.5 9.23-20 9.23s-65.5 48 25 90.93c0 0 48.5 12.74 67.5-17.17 0 0 13.5-32.13 12.5-43.25s9-41.13 9-41.13-.02-.35-.12-.95z"
        opacity={0.1}
      />
      <path fill="#5f5d7e" d="M581.87 485.23h16v34.07h-16z" />
    </svg>
  );
};

SvgQuittingTime.propTypes = {
  color: PropTypes.string
};
SvgQuittingTime.defaultProps = {
  color: "primary"
};
export default SvgQuittingTime;
