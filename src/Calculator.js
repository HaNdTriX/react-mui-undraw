import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCalculator = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1027.35 783.97"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Calculator_svg__a"
          x1={940.91}
          y1={792.08}
          x2={940.91}
          y2={388.7}
          gradientTransform="translate(-77.03)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M586.56 123.98c-64.72-2.25-126.36-23.14-185.23-46S284.17 29.8 221 17.68c-40.63-7.79-87.09-8.89-119.83 12.89-31.5 21-41.68 57.15-47.16 90.73-4.11 25.26-6.53 51.85 4.75 75.5 7.83 16.42 21.74 30.22 31.36 45.94 33.46 54.72 9.81 122.24-26.44 175.63-17 25.07-36.74 49-49.87 75.66s-19.2 57.25-7.72 84.47c11.39 27 38.52 47.24 67.91 61.49 59.68 29 130 37.23 198.61 41.92 151.82 10.39 304.46 5.89 456.68 1.39 56.34-1.67 112.92-3.36 168.35-12.07 30.77-4.83 62.55-12.51 84.89-31 28.36-23.53 35.39-63.37 16.39-92.88-31.88-49.49-120-61.78-142.31-114.89-12.27-29.24.33-61.8 18.15-88.92C913 285.38 977.09 234.35 980.47 167.87c2.32-45.66-28.49-91.39-76.13-113-49.94-22.64-119.18-19.79-156 17.69-37.98 38.55-104.66 53.42-161.78 51.42z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={579.79}
        cy={726.58}
        rx={370.98}
        ry={27.58}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M292.94 637.25s21-3.36 33.6 11.49c0 0-9.24 7.28-29.12-2.8zM290.68 636.98s-13.39 16.52-6.82 34.85c0 0 10.92-4.38 12.11-26.64zM278.68 609.81s8.4-15.4 42 6.16c0 0-4.48 10.36-19.32 9.52s-18.78-7.51-22.68-15.68zM276.49 608.7s-17.43-2-19.12 37.91c0 0 11.05 2.29 18.9-10.33s4.61-19.7.22-27.58zM266.34 576.88s9.8-27.16 45.36-7.84c0 0-8.12 24.92-41.72 17.08zM255.41 536.28s18.49-27.45 51.25-2c0 0-11.48 25.76-48.45 11.76zM251.49 497.63s21.57-25.2 54.05 0c0 0-20.44 22.12-54.05 6.44zM248.13 460.11s21.85-26.32 52.93-1.4c0 0-24.64 23.24-52.93 7.56zM250.09 426.79s23-33.89 52.09-10.92c0 0-24.64 29.12-52.09 17.36zM255.41 387.86s24.37-33.6 52.65-7.84c0 0-28.84 29.13-52.65 14zM263.54 353.07s28.84-31.57 54-19c0 0-30.06 33.53-55.26 27.37zM273.62 320.1s33.32-38.64 52.64-25.76c0 0-24.52 30-55 33zM288.17 281.85s29.13-31.58 50.41-23.74c0 0-24.92 32.76-54.32 33.6zM301.34 246.07s32.2-30.25 46.2-24.93c0 0-23.24 33.61-47.6 31.65zM314.22 212.98s27.72-36.12 42.84-33.32c0 0-16.8 32.2-42.84 37zM328.2 168.48s24.5-27.7 37.73-27.63c0 0-19.34 37-38.74 36.66zM336.48 138.82l23.66-57.69s1.19 52.15-26.67 68.39zM346.09 75.2s3.92-48.16 1.4-52.08c0 0 16.92 40-1.57 73.36zM265.42 576.23s-24.54-15.21-40.43 22c0 0 21.84 14.49 43.31-12.51zM254.68 534.73s-30.1-13.73-44.71 25.12c0 0 23.26 16 47.45-15.3zM250.09 499.98s-21.56-25.2-54 0c0 0 20.44 22.12 54 6.44zM247.4 460.11s-21.84-26.32-52.93-1.4c0 0 24.65 23.24 52.93 7.56zM250.09 427.75s-15.32-38-48.62-21.63c0 0 18 33.65 47.27 27.92z"
        fill={color}
      />
      <path
        d="M257.34 387.67s-15.22-38.61-49-20.7c0 0 20.68 35.39 47.5 26.67zM266.78 353.27s-6-42.33-34-46.12c0 0 5.93 44.64 30.22 53.75zM274.33 320.17s-2.34-51-25.49-52.77c0 0 .78 38.71 22.88 60zM290.57 280.39s-6.91-42.41-29-47.6c0 0 2.74 41.08 26.82 58zM303.96 246.37s-.24-44.17-13.73-50.67c0 0-8.38 40 9.82 56.31zM315.25 212.53s-1.89-45.49-15.87-51.9c0 0-4.79 36 13.77 54.88zM330.15 172.1s-.09-37-10.06-45.67c0 0-9.93 40.53 4.85 53.12z"
        fill={color}
      />
      <path
        d="M335.3 136.98l-9.7-61.59s-13.19 50.46 10.17 72.69zM337.2 75.79s-24.92-41.4-24.41-46c0 0 2.65 43.39 34 65zM340.12 63.56S316.6 4.76 305.96-.02c0 0 33.6 17.08 36.12 61.88z"
        fill={color}
      />
      <path
        d="M327.06 177.86l-1.6-.5c19.85-64.72 24.8-106 13.94-116.34l1.16-1.22c11.51 10.92 6.84 51.74-13.5 118.06z"
        fill="#444053"
      />
      <path
        d="M272.41 329.37l-2.38-.84c2.1-5.93 4.38-11.95 6.76-17.88 20.72-51.67 38.35-99.67 49.66-136.56l2.07-1c-11.33 36.89-28.65 86.79-49.39 138.5a459.84 459.84 0 00-6.72 17.78z"
        fill="#444053"
      />
      <path
        d="M322.49 685.7c-.32-.36-32.5-36.58-54.92-98.44a364.42 364.42 0 01-21.7-112.77c-1.53-48.13 8.56-101.88 25.87-150.69l1.88 2.2c-38.84 109.56-23.41 203.45-2.94 259.98 22.19 61.29 54 97.12 54.31 97.48z"
        fill="#444053"
      />
      <path
        d="M182.28 677.8s-38.05-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .06-2 3.9-1.31a17.51 17.51 0 004.13.2 8.62 8.62 0 005.06-2.08s10.69-4.42 14.85-21.9c0 0 3.08-3.81 2.95-4.79l-6.42 2.74s2.2 4.63.47 8.48c0 0-.21-8.31-1.44-8.12-.25 0-3.34 1.61-3.34 1.61s3.78 8.07.93 13.93c0 0 1.08-9.94-2.1-13.35l-4.52 2.64s4.41 8.33 1.42 15.13c0 0 .76-10.43-2.37-14.49l-4.1 3.2s4.14 8.21 1.62 13.85c0 0-.33-12.14-2.51-13.06 0 0-3.58 3.16-4.13 4.46 0 0 2.84 6 1.08 9.11 0 0-1.08-8.09-2-8.13 0 0-3.57 5.36-3.94 9a19.46 19.46 0 013.07-9.54 10.71 10.71 0 00-5.46 2.83s.55-3.79 6.34-4.12c0 0 3-4.07 3.74-4.32 0 0-5.76-.48-9.25 1.07 0 0 3.07-3.57 10.31-2l4-3.3s-7.58-1-10.8.11c0 0 3.7-3.16 11.89-.86l4.4-2.63s-6.46-1.39-10.32-.89c0 0 4.07-2.19 11.61.18l3.15-1.41s-4.74-.93-6.12-1.08-1.47-.53-1.47-.53a16.39 16.39 0 018.9 1s6.76-2.43 6.65-2.85zM71.68 690.17s-38-2.29-33.55 24.37c0 0-.9 4.71 3.37 6.85 0 0 .07-2 3.91-1.31a17 17 0 004.13.2 8.56 8.56 0 005.05-2.08s10.7-4.42 14.86-21.9c0 0 3.07-3.81 3-4.79l-6.42 2.74s2.2 4.63.47 8.48c0 0-.21-8.31-1.44-8.12-.25 0-3.34 1.61-3.34 1.61s3.78 8.07.93 13.93c0 0 1.08-9.94-2.11-13.35l-4.52 2.64s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.09 3.2s4.14 8.21 1.62 13.85c0 0-.33-12.14-2.51-13.06 0 0-3.58 3.16-4.13 4.46 0 0 2.84 6 1.08 9.11 0 0-1.08-8.09-2-8.13 0 0-3.56 5.36-3.94 9a19.52 19.52 0 013.08-9.54 10.76 10.76 0 00-5.47 2.83s.56-3.79 6.35-4.12c0 0 3-4.07 3.74-4.31 0 0-5.76-.49-9.25 1.06 0 0 3.07-3.57 10.31-2l4-3.3s-7.58-1-10.8.11c0 0 3.7-3.16 11.89-.86l4.4-2.63s-6.47-1.39-10.32-.89c0 0 4.07-2.19 11.61.18l3.15-1.41s-4.74-.93-6.13-1.08-1.46-.53-1.46-.53a16.51 16.51 0 018.9 1s6.66-2.43 6.58-2.85zM133.32 719.21s-38-2.29-33.56 24.37c0 0-.89 4.71 3.38 6.85 0 0 .07-2 3.9-1.31a17.57 17.57 0 004.14.2 8.62 8.62 0 005.05-2.08s10.69-4.42 14.85-21.9c0 0 3.08-3.81 3-4.79l-6.42 2.74s2.19 4.63.47 8.48c0 0-.21-8.31-1.45-8.12-.25 0-3.33 1.61-3.33 1.61s3.77 8.06.92 13.93c0 0 1.08-9.94-2.1-13.35l-4.52 2.64s4.41 8.33 1.42 15.13c0 0 .77-10.43-2.37-14.49l-4.1 3.2s4.15 8.21 1.62 13.85c0 0-.33-12.14-2.5-13.06 0 0-3.59 3.16-4.13 4.46 0 0 2.84 6 1.07 9.11 0 0-1.08-8.09-2-8.13 0 0-3.57 5.36-3.94 9a19.46 19.46 0 013.07-9.54 10.71 10.71 0 00-5.46 2.83s.55-3.79 6.35-4.12c0 0 2.94-4.07 3.73-4.32 0 0-5.76-.48-9.25 1.07 0 0 3.08-3.57 10.31-1.95l4-3.3s-7.58-1-10.8.11c0 0 3.71-3.16 11.89-.86l4.41-2.63s-6.43-1.36-10.29-.86c0 0 4.06-2.19 11.61.18l3.14-1.41s-4.73-.93-6.12-1.08-1.46-.53-1.46-.53a16.39 16.39 0 018.9 1s6.68-2.51 6.57-2.93z"
        fill={color}
      />
      <ellipse
        cx={103.66}
        cy={753.23}
        rx={26.93}
        ry={4.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={957.84}
        cy={753.23}
        rx={26.93}
        ry={4.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={699.95}
        cy={779.42}
        rx={26.93}
        ry={4.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={1000.43}
        cy={713.79}
        rx={26.93}
        ry={4.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={156.07}
        cy={710.95}
        rx={26.93}
        ry={4.55}
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={45.44}
        cy={723.72}
        rx={26.93}
        ry={4.55}
        fill={color}
        opacity={0.1}
      />
      <rect
        x={302.74}
        y={79.74}
        width={431.35}
        height={641.38}
        rx={9.8}
        ry={9.8}
        fill="#3a3768"
      />
      <rect
        x={342.22}
        y={134.87}
        width={357.73}
        height={126.09}
        rx={29.21}
        ry={29.21}
        opacity={0.1}
      />
      <rect
        x={344.52}
        y={137.33}
        width={352.31}
        height={121.95}
        rx={10.2}
        ry={10.2}
        fill="#e6e8ec"
      />
      <rect
        x={354.68}
        y={313.48}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={441.63}
        y={313.48}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={528.58}
        y={313.48}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={615.53}
        y={315.16}
        width={71.14}
        height={79.04}
        rx={28.84}
        ry={28.84}
        opacity={0.1}
      />
      <rect
        x={615.53}
        y={313.48}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        fill={color}
      />
      <rect
        x={354.68}
        y={400.43}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={441.63}
        y={400.43}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={528.58}
        y={400.43}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={354.68}
        y={496.41}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={441.63}
        y={496.41}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={528.58}
        y={496.41}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={528.58}
        y={592.39}
        width={71.14}
        height={79.04}
        rx={10.79}
        ry={10.79}
        opacity={0.1}
      />
      <rect
        x={615.53}
        y={402.11}
        width={71.14}
        height={79.04}
        rx={28.84}
        ry={28.84}
        opacity={0.1}
      />
      <rect
        x={615.53}
        y={400.43}
        width={71.14}
        height={79.04}
        rx={11.3}
        ry={11.3}
        fill={color}
      />
      <rect
        x={615.53}
        y={400.43}
        width={71.14}
        height={79.04}
        rx={11.3}
        ry={11.3}
        opacity={0.2}
      />
      <rect
        x={354.68}
        y={592.39}
        width={158.09}
        height={79.04}
        rx={10.04}
        ry={10.04}
        opacity={0.1}
      />
      <rect
        x={608.75}
        y={496.41}
        width={77.91}
        height={175.03}
        rx={11.66}
        ry={11.66}
        opacity={0.1}
      />
      <path
        fill={color}
        d="M649.87 237.98h31.14v3.37h-31.14zM604.28 237.98h31.14v3.37h-31.14zM558.68 237.98h31.14v3.37h-31.14zM513.09 237.98h31.14v3.37h-31.14z"
      />
      <path
        d="M966.19 532.56c3.21-10.8 0-21.6 0-21.6v-10.19s3.67-19.92-12.71-32.7l-10.86-9.58s-6.09-5.23-7.86-5.56a8 8 0 00-1-.15l-.32-.19a32.69 32.69 0 01-2.38-5 4.63 4.63 0 003.87-1.32 5 5 0 00.91-1.53c.63-1.41.74-3.12 1.27-4.62a11 11 0 012-3.32c-.11.18-.23.35-.33.54 1.54-1.92 3.55-3.56 5-5.58a12.51 12.51 0 00.79-1.25c-.06.09-.14.17-.21.26 2-3.21 2.61-7.1 3.19-10.85a9.76 9.76 0 00.06-3.88 14.13 14.13 0 00-1.08-2.46c-2.36-4.87-2.32-11-6.09-14.89-2.84-2.91-7.14-3.8-11.19-4.3s-8.31-.79-11.79-2.91a12.44 12.44 0 00-3.19-1.75 2.62 2.62 0 00-3.13 1.16 2.06 2.06 0 01-.42.85 1.36 1.36 0 01-1.2.07l-5.39-1.44.06.27h-.14l.2.85a.46.46 0 01.51.29l-.87 1.34a13.51 13.51 0 01-4.86-1 1.13 1.13 0 000 .26h-.08c-.1 1.52 1.63 2.51 2.16 3.94a3 3 0 010 1.93 4.23 4.23 0 01-1 1.54c-1.91 1.89-4.36 1.52-6.56 2.71a1.42 1.42 0 00-.8.89.65.65 0 00-.07.49 1.16 1.16 0 00.45.56 10 10 0 002.09 1.3c-.22.2-.43.4-.63.61a24.1 24.1 0 008.33 39.32c.08.42.14.85.2 1.3v.13l.06.58-7.26 3.09a5.78 5.78 0 01-5.2-3.35c-1.69-3.49-7.66 0-7.66 0s-18.21-1.36-25 2c0 0-10.87-4.56-12.4-4.87s-3.82-1.52-4.89-1.21-2.45-2-3.22-1.83-1.07-1.52-3.52-2.13-3.37.16-6.12-2.58-25.11-13.54-25.11-13.54L792.76 415l-10.71-8.52-.19.35c-.07-.25-.14-.51-.21-.79a102.59 102.59 0 00-4-12.49c-.69-1.65-1-3.73-1.93-2.63-.57.66-1.54-.79-3-1.77a2.53 2.53 0 00-3.77 1.1c-8.34 13.08-11.33 14-6.5 18.81 4.31 4.27 7.17 8 10.68 9.18l.42.13a.45.45 0 01-.23 0l20.36 24.34s14.69 12.78 24.8 16.88 9.33 5.33 9.33 5.33 30.62 15.51 35.36 15.21 3.83 31.79 1.84 37-5.2 42.59-5.2 42.59-3.07 7.91.15 13.38c0 0 .71 10.48.07 13-2.79 4.3-6.77 11.6-7.42 19.11 0 .4-.08.77-.12 1.16a2.7 2.7 0 01-.72.59l.68-.2a38.5 38.5 0 01-2 9.18 37.31 37.31 0 00-2.53 13.06v24.16l-2 15s-2.45 11.35 0 14a6.48 6.48 0 011.34 4.66 8.68 8.68 0 001.56 5.44 4.07 4.07 0 011 3.49c-.81 2.63 1.2 30.62 1.2 30.62s-.59 7.71-1.4 8.12 1.4 8.92 1.4 8.92-8.27 6.9-6.16 10.55l2.11 3.24-.56.55-.34.35a3.26 3.26 0 00-2.11-.4 80.62 80.62 0 01-8.32 7.41c-3.73 2.69-13.88 6.59-13.88 6.59l-8 .65h-.15s-3.83-.36-1.68 5.57 21.37 4.11 21.37 4.11l11.22-1.77s20 .1 25.73-1.17c2.39-.53 3-1.81 2.8-3.1l-.06-.06a8 8 0 00-1.64-3.35 1.28 1.28 0 00-.14-.18l.36-4.1c8.49-4.89-2.4-14.51-2.4-14.51s3.73-8.11 5.64-10.74 1.91-41.38 1.91-41.38 1-14-1.63-17.24a5.83 5.83 0 012.86-5.27c1.89-1.29 7.6-19.06 12.08-33.81l2.82 17.38s-.61 8.32 1.22 10.75a4.14 4.14 0 01.76 3.24 14.6 14.6 0 00.41 7 4.63 4.63 0 001.49 2.5c1.63.81 1.73 3.7 2.34 4.31s4.39-.86 4.59 1.37a50.49 50.49 0 010 5.88l1.23 36.1s-2 3-2.45 11c-.17 3.41-.81 5.35-1.47 6.46a3.31 3.31 0 00.3 3.88l.35.41-1.51 1.16a3.33 3.33 0 00-.94 4.11 3.23 3.23 0 00-.93 3.5 2.44 2.44 0 00.26.57 5.68 5.68 0 00-3.05 1.51 25 25 0 01-5.39 5.42 103.71 103.71 0 00-8.59 7.36 12.34 12.34 0 01-5 4 8.25 8.25 0 01-1.51.45c-4 .82-2.75 5 .51 5.69s14.08 4 22.5 2.07c0 0 2.5 1 6.17-.86s11.86-4.14 11.86-4.14 4.59 0 5.21-1.82a7.14 7.14 0 00.26-1.78l.13-.13-.12-.11a24.26 24.26 0 00-.31-4.07c-.12-.7-.25-1.32-.37-1.82-.39-1.52-1.12-3.49-1.43-4.32a1.53 1.53 0 00.14-.21c1.75-3-1.16-10.12-1.16-10.12a19.4 19.4 0 013.45-4.09c1.63-1.22 5.92-32.86 5.92-32.86s-.21-8.11 2-11.76-3.06-25.75-3.06-25.75-2.25-5.07-1.43-6.9-.82-8.52-.82-8.52v-8a8.84 8.84 0 00-.47-2.8c-.63-1.88-1.56-5.49-.55-8.08 1.43-3.65 4.69-26.16 4.69-26.16s-2.55-9.93 1.19-17.84a15.54 15.54 0 011-1.83c2.77-4.35 1.94-12.08.57-18.31-.2-1-.43-1.9-.66-2.77-.09-.38-.19-.74-.29-1.1l.44-.18s0-.59.14-1.6a11.24 11.24 0 007.36-5.09s9.34-10.5 17.6-14.91 8.88-10.8 8.88-10.8c-1.22-2.13 2.19-10.8 2.19-10.8zm-32.55-79.63zm5.61 93.63l-8.84 10.25v-.06c-2.3-3.2 2.14-10.35 2.14-10.35l7.35-16.4c-.06 2.1-.32 4-1 4.83-2 2.74 3.68 7.31 3.68 7.31-3.03.01-3.33 4.42-3.33 4.42z"
        transform="translate(-86.32 -58.02)"
        fill="url(#Calculator_svg__a)"
      />
      <path
        d="M697.29 354.15l-4.83 9.37a19 19 0 01-4.49-.94 17 17 0 01-10.55-9.12c-4.31-9.52 2.82-15.67 6.14-17.49s6.41-3.89 8.9 2.08a103.26 103.26 0 013.91 12.41c.58 2.19.92 3.69.92 3.69zM850.68 402.89l-7.71 11.48s-36.43 17.38-29.47-3c3.06-9 3.42-15.57 2.87-20.12v-.13c-.72-5.69-2.86-8.16-2.86-8.16s35.51-18.18 30.22-5.75a17.12 17.12 0 00-1.25 8.18 27.88 27.88 0 003.82 11.35 37.71 37.71 0 004.38 6.15z"
        fill="#cc818c"
      />
      <path
        d="M839.59 630.3s5.24 22 3 25.59-2 11.69-2 11.69-4.23 31.44-5.84 32.64a19.21 19.21 0 00-3.43 4s2.88 7.12 1.15 10.06a2.44 2.44 0 01-1.15 1c-2.7 1.14-12.68-3.92-18.36-7a3.24 3.24 0 01-.58-5.28 3.3 3.3 0 01.92-4.08l1.5-1.16-.35-.41a3.31 3.31 0 01-.3-3.86c.65-1.09 1.28-3 1.45-6.41.41-7.86 2.42-10.88 2.42-10.88l-1.21-35.88a49.78 49.78 0 000-5.84c-.2-2.21-3.93-.75-4.53-1.36s-.71-3.47-2.32-4.28a4.59 4.59 0 01-1.46-2.49 14.39 14.39 0 01-.41-7 4.13 4.13 0 00-.75-3.22c-1.81-2.42-1.21-10.67-1.21-10.67l-2.78-17.28c-4.43 14.66-10.06 32.32-11.93 33.6a5.81 5.81 0 00-2.82 5.23c2.62 3.23 1.61 17.14 1.61 17.14s0 38.48-1.89 41.11-5.55 10.72-5.55 10.72 10.8 9.61 2.3 14.46h-.09c-8.67 4.84-26.6-8.66-26.6-8.66l1.87-1.87.55-.55-2.12-3.16c-2.08-3.63 6.08-10.48 6.08-10.48s-2.18-8.47-1.38-8.87 1.38-8.06 1.38-8.06-2-27.81-1.18-30.43a4.1 4.1 0 00-1-3.47 8.63 8.63 0 01-1.54-5.4 6.42 6.42 0 00-1.33-4.63c-2.42-2.62 0-13.9 0-13.9l2-14.92v-23.69a37.77 37.77 0 012.53-13.37 40 40 0 002.2-10.73c.66-7.64 4.77-15.06 7.53-19.29 1.46-2.24 2.55-3.58 2.55-3.58l64.48-2.52s1 2.87 2.08 6.86c.22.87.44 1.79.65 2.75 1.35 6.2 2.16 13.88-.57 18.2a16.93 16.93 0 00-1 1.82c-3.69 7.86-1.17 17.73-1.17 17.73s-3.22 22.36-4.63 26c-1 2.57-.08 6.16.55 8a9.1 9.1 0 01.45 2.79v7.97s1.62 6.65.81 8.47 1.42 6.85 1.42 6.85z"
        fill="#444053"
      />
      <path
        d="M842.56 551.31a15.3 15.3 0 00-1 1.81l-3.63-.2c.35-1.87-2.12-19.4-2.12-19.4l7.31-.41c1.35 6.19 2.17 13.87-.56 18.2z"
        opacity={0.1}
      />
      <path
        d="M843.16 550.7a16.93 16.93 0 00-1 1.82l-3.63-.21c.35-1.86-2.12-19.4-2.12-19.4l7.31-.41c1.36 6.2 2.17 13.88-.56 18.2z"
        fill="#444053"
      />
      <path
        d="M843.16 550.7a16.93 16.93 0 00-1 1.82l-3.63-.21c.35-1.86-2.12-19.4-2.12-19.4l7.31-.41c1.36 6.2 2.17 13.88-.56 18.2z"
        opacity={0.05}
      />
      <path
        d="M832.48 714.32a2.44 2.44 0 01-1.15 1c-2.7 1.14-12.68-3.92-18.36-7a3.27 3.27 0 01-1.51-1.8c3.24-.59 5.36 3 5.36 3a4.78 4.78 0 016.65 1.61c2.77 4.08 8.71 2.36 8.71 2.36z"
        opacity={0.1}
      />
      <path
        d="M834.15 726.67c-.6 1.82-5.14 1.82-5.14 1.82s-8.11 2.32-11.74 4.13-6.09.86-6.09.86c-8.31 1.91-19-1.41-22.22-2.07s-4.48-4.83-.5-5.64a8.06 8.06 0 001.49-.46 12.16 12.16 0 005-4 102.27 102.27 0 018.49-7.31 24.82 24.82 0 005.32-5.39c4.74-4.18 8.11 1.56 8.11 1.56a4.78 4.78 0 016.65 1.62c2.77 4.08 8.71 2.35 8.71 2.35s1.07 2.73 1.57 4.69c.12.5.25 1.12.37 1.82.27 2.03.44 4.66-.02 6.02z"
        fill="#ff748f"
      />
      <circle cx={820.29} cy={713.38} r={0.55} fill="#575988" />
      <circle cx={815.56} cy={717.81} r={0.55} fill="#575988" />
      <circle cx={810.75} cy={721.79} r={0.55} fill="#575988" />
      <circle cx={813.24} cy={720.01} r={0.55} fill="#575988" />
      <circle cx={818.03} cy={715.46} r={0.55} fill="#575988" />
      <path
        d="M834.15 726.67c-.6 1.82-5.14 1.82-5.14 1.82s-8.11 2.32-11.74 4.13-6.09.86-6.09.86c-8.31 1.91-19-1.41-22.22-2.07s-4.48-4.83-.5-5.64a8.06 8.06 0 001.49-.46 38.68 38.68 0 0010.9 2.07c8.21.35 14.71 0 14.71 0l8.31-2.67a13.89 13.89 0 015.14-1.86 13.44 13.44 0 005.11-2.22c.32 2.05.49 4.68.03 6.04z"
        fill="#dce6f2"
      />
      <path
        d="M813.47 731.88a6.88 6.88 0 01-1.38-.13l.12-.59a8.8 8.8 0 005-.7c.74-.29 1.48-.64 2.2-1s1.73-.81 2.63-1.14l.82-.28c.45-.16.91-.31 1.35-.5.25-.1.5-.22.74-.34a8.51 8.51 0 011.86-.71 9.18 9.18 0 011-.13 8.9 8.9 0 00.92-.11 8.65 8.65 0 001.75-.65 8.46 8.46 0 011.88-.7l.44-.07a2.15 2.15 0 001.3-.48l.45.41a2.71 2.71 0 01-1.65.67l-.42.07a8.09 8.09 0 00-1.75.65 9.17 9.17 0 01-1.88.69 6.69 6.69 0 01-1 .12 8.92 8.92 0 00-.94.12 8 8 0 00-1.73.67l-.76.35c-.46.19-.94.35-1.4.51l-.8.28c-.88.32-1.74.73-2.58 1.12s-1.48.7-2.24 1a10.91 10.91 0 01-3.93.87z"
        fill="#575988"
        opacity={0.5}
      />
      <path
        d="M815.41 631.76s4.18-6 11.34-6 10.22-.81 10.22-.81-4.58 2.72-7.75 3.07-13.81 3.74-13.81 3.74zM817.83 633.17s3.78-2.62 5.94-2.72 4-.3 4-.3a11.56 11.56 0 01-3.32 1.61c-1.77.5-6.62 1.41-6.62 1.41zM818.68 634.98s5.69.45 5.74 2M765.61 549.98c.3.05 5.39-5.29 5.74-7.4a5.17 5.17 0 012.21-3.26s3.28 1.31.36 5.33-8.31 5.33-8.31 5.33zM843.68 377.19c-1.16 2.74-2.18 3-2 5.61a20 20 0 01-4.61 3.63c-3.6 2.14-7.52 6.33-12 6.33a23.91 23.91 0 01-8.77-1.66c-.72-5.69-2.86-8.16-2.86-8.16s35.52-18.18 30.24-5.75z"
        opacity={0.1}
      />
      <path
        d="M849.12 367.52a24 24 0 11-24-24 24 24 0 0124 24z"
        fill="#cc818c"
      />
      <path
        d="M850.68 402.89l-7.71 11.48s-36.43 17.38-29.47-3c3.06-9 3.42-15.57 2.87-20.12h.06a19.27 19.27 0 01.73 4.63c.11 3.14.19 7.11 8 8.42 13 2.18 19.94-5.94 21.16-7.53a37.71 37.71 0 004.36 6.12zM697.29 354.15l-4.83 9.37a19 19 0 01-4.49-.94l-.42-.5c2 .76 8.61-11.79 8.61-11.79l.21.17c.58 2.19.92 3.69.92 3.69zM843.08 529.75c-15.56 6.76-69.38 1-69.38 1a7.37 7.37 0 00.27-1.76c1.46-2.24 2.55-3.58 2.55-3.58l64.48-2.52s1.05 2.87 2.08 6.86z"
        opacity={0.1}
      />
      <path
        d="M816.39 391.81l-7.18 3.07a5.69 5.69 0 01-5.13-3.33c-1.67-3.47-7.56 0-7.56 0s-18-1.36-24.64 2c0 0-10.73-4.54-12.24-4.84s-3.78-1.51-4.84-1.21-2.41-2-3.17-1.81-1.06-1.51-3.48-2.12-3.32.15-6-2.57-24.79-13.45-24.79-13.45l-10-8.16-10.58-8.46s-6.65 12.54-8.62 11.78l20.1 24.19s14.51 12.69 24.49 16.77 9.22 5.29 9.22 5.29 30.23 15.42 34.91 15.12 3.8 31.55 1.8 36.69-5.13 42.32-5.13 42.32-3 7.86.15 13.3c0 0 .75 11.19 0 13.15 0 0 54.15 5.79 69.52-1.06 0 0 2.27-25.09 0-28.26s2.12-10.24 2.12-10.24l9.67-21.61 23.58-23.73s3.62-19.8-12.55-32.49l-10.73-9.53s-6-5.19-7.76-5.52-1.11 0-1.11 0-7 10.21-21.36 7.79c-7.78-1.31-7.86-5.28-8-8.41a19.6 19.6 0 00-.69-4.67z"
        fill="#67647e"
      />
      <path
        d="M845.94 473.17s-33.26 1.36-39.9 11.81c0 0 8.62-4.09 16.32-2.88s23.58-8.93 23.58-8.93zM809.21 509.59s15.72 1.06 19.05-2.27 3.34-5.29 3.34-5.29zM849.12 441.12s-13.31 15.72 2.87 22.52zM770.37 410.75s4.84 9.87 7.26 10.52zM754.05 406.51s12.09 10.89 14.36 11.94c0 0-12.55-11.94-14.36-11.94zM802.26 396.09s-11.64 17.38-4.08 28c0-.04-4.23-12.59 4.08-28z"
        opacity={0.1}
      />
      <path
        d="M831.6 527.73l-3.56 3.35-.5.46-4.12 3.9c-.29.22-.58.44-.88.64-16.77 12-20.13-6.24-20.13-6.24s-7.4 4.84-8.46.91 17.23-9.52 20-9.22a3.59 3.59 0 00.73 0 11.44 11.44 0 003.76-1.33l.81-.43a32 32 0 002.71-1.71z"
        fill="#cc818c"
      />
      <path
        d="M849.68 367.52a24 24 0 01-11.7 20.66 13.64 13.64 0 01-.88-1.75c-.86-2-1.39-4.16-2.26-6.17a19 19 0 00-4-5.88 2.55 2.55 0 00-1.07-.74 2.88 2.88 0 00-2.2.61 10.11 10.11 0 01-3.35 1.47 3.56 3.56 0 01-3.36-1c-.94-1.12-.81-2.76-.54-4.19.59-3.13 1.57-6.21 1.58-9.39s-1.21-6.6-4-8.18c-2.44-1.39-5.47-1-8.18-1.78a8.92 8.92 0 01-1.23-.42 24 24 0 0141.19 16.76z"
        opacity={0.1}
      />
      <path
        d="M806.85 346.92c-.43.23-.91.65-.78 1.13a1.14 1.14 0 00.44.56 10.49 10.49 0 003.8 1.95c2.71.74 5.75.39 8.19 1.78 2.76 1.57 4 5 4 8.18s-1 6.26-1.57 9.38c-.27 1.44-.41 3.08.53 4.2a3.59 3.59 0 003.36 1 10 10 0 003.35-1.46 2.91 2.91 0 012.21-.62 2.72 2.72 0 011.07.74 19 19 0 014 5.89c.88 2 1.4 4.15 2.26 6.17a10 10 0 004 5c1.92 1.06 4.58 1 6.06-.64s1.36-3.89 2.06-5.86c1.2-3.43 4.55-5.58 6.65-8.54 2.35-3.33 3-7.51 3.64-11.54a9.48 9.48 0 00.06-3.86 13.86 13.86 0 00-1.06-2.44c-2.34-4.84-2.29-10.93-6-14.79-2.8-2.9-7.05-3.78-11.05-4.28s-8.2-.78-11.63-2.89a12.65 12.65 0 00-3.15-1.74 2.58 2.58 0 00-3.1 1.16 2.06 2.06 0 01-.41.84 1.33 1.33 0 01-1.19.07l-5.32-1.43.61 2.68a13.32 13.32 0 01-5.65-1c-.1 1.52 1.61 2.5 2.14 3.92a3.63 3.63 0 01-1 3.68c-1.93 1.94-4.34 1.57-6.52 2.76z"
        fill="#585268"
      />
      <path
        d="M785.29 708.04l-.22 2.41h-.09c-8.67 4.84-26.6-8.66-26.6-8.66l1.87-1.87a3.26 3.26 0 01.82 2.53l3.66.2 4.38 4.73s11.85 1.37 15.06.61z"
        opacity={0.1}
      />
      <path
        d="M783.77 721.18c-5.64 1.26-25.39 1.17-25.39 1.17l-11.08 1.75s-19 1.82-21.11-4.08 1.66-5.53 1.66-5.53h.15l7.91-.64s10-3.88 13.71-6.55a79.6 79.6 0 008.21-7.36s3.3-.64 3.24 3.18l3.66.2 4.38 4.74s11.85 1.37 15.06.6h1.12l-.51 5.85.14.17c.76.92 3.89 5.38-1.15 6.5z"
        fill="#ff748f"
      />
      <circle cx={763.32} cy={706.52} r={0.55} fill="#575988" />
      <circle cx={749.11} cy={712.68} r={0.55} fill="#575988" />
      <circle cx={741.79} cy={714.9} r={0.55} fill="#575988" />
      <circle cx={752.84} cy={711.5} r={0.55} fill="#575988" />
      <circle cx={745.44} cy={713.79} r={0.55} fill="#575988" />
      <circle cx={756.61} cy={709.75} r={0.55} fill="#575988" />
      <circle cx={760.34} cy={708.13} r={0.55} fill="#575988" />
      <path
        d="M783.77 721.18c-5.64 1.26-25.39 1.17-25.39 1.17l-11.08 1.75s-19 1.82-21.11-4.08 1.66-5.53 1.66-5.53h.15c1.21 1.57 3.64 3.35 8.41 3.44l13.66.55 14.15-1s13.26-.39 15.42-.85a31.59 31.59 0 005.28-1.94c.76.91 3.89 5.37-1.15 6.49z"
        fill="#dce6f2"
      />
      <path
        d="M748.37 722.77a8.19 8.19 0 01-2.24-.28l.16-.58a11.1 11.1 0 005.62-.25c.67-.18 1.33-.37 2-.57a31.6 31.6 0 013.69-.93 30.57 30.57 0 016.08-.18h.43a93.62 93.62 0 0018.14-.81 6.79 6.79 0 003.88-1.56l.43.43a7.36 7.36 0 01-4.21 1.73 94.09 94.09 0 01-18.26.81h-.44a30.09 30.09 0 00-6 .18 29.79 29.79 0 00-3.61.91c-.67.2-1.34.4-2 .57a15.2 15.2 0 01-3.67.53z"
        fill="#575988"
        opacity={0.5}
      />
      <path
        d="M831.6 527.73l-3.56 3.35-8.84-11.32a32 32 0 002.71-1.71z"
        opacity={0.1}
      />
      <path
        d="M871.68 434.98l7 9.67v10.13s3.17 10.73 0 21.46l.34 9.37s-3.37 8.61-2.16 10.73c0 0-.6 6.35-8.76 10.73s-17.42 14.76-17.42 14.76-3.48 6.65-12.85 5.14l-8.92 3.78-10.27-13.15 13.9-7.56s4.84-6.49 7.71-6.19l11.79-13.76s.3-4.38 3.32-4.38c0 0-5.59-4.53-3.63-7.25s.31-14.82.31-14.82z"
        fill="#67647e"
      />
      <path
        d="M858.68 479.06s15.87-.3 17.83 3.78-13.04-6.05-17.83-3.78zM827.61 530.75a4.15 4.15 0 01-.07.79 5.34 5.34 0 01-5 4.54h-.28a5.34 5.34 0 01-5.34-5.34 5.2 5.2 0 01.3-1.73c-2.52-2-2.66-5.68-2.59-7.5a11.44 11.44 0 003.76-1.33 24.88 24.88 0 002.63 5.37 5.61 5.61 0 011.24-.15 5.35 5.35 0 015.35 5.35z"
        opacity={0.1}
      />
      <path
        d="M818.87 518.98s-3.58.81-3.58 1.46-.81 6.55 3.12 9 3.53-3.38 3.53-3.38-3.38-5.18-3.07-7.08z"
        fill="#575988"
      />
      <circle cx={822.86} cy={530.75} r={5.34} fill="#e4aab4" />
      <circle cx={822.86} cy={530.75} r={4.58} fill="#dce6f2" />
      <path
        d="M802.06 532.82s11.29 9.36 25.79 3.42v4.54s-9.67 6.65-18.43 2.62-7.36-10.58-7.36-10.58z"
        opacity={0.1}
      />
      <path
        d="M802.06 531.61s11.29 9.37 25.79 3.42v4.54s-9.67 6.65-18.43 2.62-7.36-10.58-7.36-10.58z"
        opacity={0.1}
      />
      <path
        d="M802.06 531.61s11.29 9.37 25.79 3.42v4.54s-9.67 6.65-18.43 2.62-7.36-10.58-7.36-10.58z"
        fill="#444053"
      />
      <path
        d="M802.36 531.61s11.29 9.37 25.8 3.42v4.54s-9.67 6.65-18.44 2.62-7.36-10.58-7.36-10.58z"
        opacity={0.05}
      />
      <path
        d="M766.59 699.92s15.12 2.78 17.33 3.38-.6 1.66-.6 1.66-13.8-2.47-16.73-5.04zM766.24 691.91c.25 0 10.28-2.82 12.44-7.65M780.87 634.08s4.06 5.34 6.68 5.19-4.3-5.39-6.68-5.19zM783.12 642.98s1.71 3.77 4.23 2.56"
        opacity={0.1}
      />
      <path
        d="M792.68 559.98l10.72 28.27s1.51-18.19-1.68-23.63a9.43 9.43 0 00-9.04-4.64z"
        opacity={0.05}
      />
      <g opacity={0.1}>
        <path d="M819.02 335.98l-.09-.41-1.72-.46.19.84a14.6 14.6 0 001.62.03zM814.29 342.8l.18-.16a3.62 3.62 0 001-3.68 4.85 4.85 0 00-.86-1.37 14.13 14.13 0 01-2.48-.73c-.1 1.51 1.6 2.49 2.13 3.91a3 3 0 01.03 2.03zM842.88 389.27a10 10 0 01-4.05-5c-.85-2-1.38-4.16-2.25-6.16a19 19 0 00-4-5.89 2.62 2.62 0 00-1.07-.74 2.92 2.92 0 00-2.2.61 10.11 10.11 0 01-3.35 1.47 3.58 3.58 0 01-3.36-1c-.94-1.12-.81-2.77-.54-4.2.59-3.12 1.57-6.21 1.58-9.38s-1.21-6.61-4-8.18c-2.44-1.39-5.47-1-8.18-1.78a10.53 10.53 0 01-3.81-1.95 1.8 1.8 0 01-.2-.19 5 5 0 00-.66.31c-.44.23-.91.65-.79 1.13a1.22 1.22 0 00.45.56 10.41 10.41 0 003.8 1.95c2.71.74 5.74.39 8.18 1.78 2.76 1.57 4 5 4 8.18s-1 6.26-1.58 9.38c-.27 1.44-.4 3.08.54 4.2a3.58 3.58 0 003.36 1 10 10 0 003.35-1.46 2.89 2.89 0 012.2-.62 2.65 2.65 0 011.07.74 19.21 19.21 0 014 5.89c.88 2 1.4 4.15 2.26 6.17a10 10 0 004 5c1.91 1.06 4.58 1 6-.64a4.7 4.7 0 00.9-1.52 5.16 5.16 0 01-5.65.34zM851.52 381.58c1.51-1.91 3.5-3.54 4.92-5.54.28-.4.54-.82.78-1.24-1.83 2.33-4.34 4.18-5.7 6.78z" />
      </g>
    </svg>
  );
};

SvgCalculator.propTypes = {
  color: PropTypes.string
};
SvgCalculator.defaultProps = {
  color: "primary"
};
const MemoSvgCalculator = React.memo(SvgCalculator);
export default MemoSvgCalculator;
