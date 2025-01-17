import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTakingNotes = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1046.26 851.78"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="TakingNotes_svg__a"
          x1={847.41}
          y1={397.42}
          x2={847.41}
          y2={188.07}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="TakingNotes_svg__b"
          x1={271.51}
          y1={395.01}
          x2={271.51}
          y2={173.08}
          xlinkHref="#TakingNotes_svg__a"
        />
        <linearGradient
          id="TakingNotes_svg__c"
          x1={847.54}
          y1={734.89}
          x2={847.54}
          y2={461.05}
          xlinkHref="#TakingNotes_svg__a"
        />
        <linearGradient
          id="TakingNotes_svg__d"
          x1={211.57}
          y1={705.74}
          x2={211.57}
          y2={443.19}
          xlinkHref="#TakingNotes_svg__a"
        />
        <linearGradient
          id="TakingNotes_svg__e"
          x1={570.69}
          y1={731.35}
          x2={570.69}
          y2={470.67}
          xlinkHref="#TakingNotes_svg__a"
        />
        <linearGradient
          id="TakingNotes_svg__f"
          x1={610.78}
          y1={318.04}
          x2={610.78}
          y2={160.29}
          xlinkHref="#TakingNotes_svg__a"
        />
        <linearGradient
          id="TakingNotes_svg__g"
          x1={625.44}
          y1={870.17}
          x2={625.44}
          y2={202.1}
          xlinkHref="#TakingNotes_svg__a"
        />
      </defs>
      <ellipse
        cx={632.92}
        cy={833.86}
        rx={106.94}
        ry={17.92}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M628.43 105.33c-43.78 37.14-100.58 34.74-150.3 15.42s-95.52-53.73-144-78.18A404.3 404.3 0 00207.62 2.62C145.83-5.95 76.81 4.49 33.75 64.53c-47.95 66.86-44.26 187.45 7.6 248.86 26.38 31.22 60.92 46.54 91.05 70.92s58 64.85 55.44 111.9c-2.37 43.56-30 77-58.56 98-22.09 16.2-49.29 33.9-52 67.47-2.58 32.48 20.29 57.93 42.14 72.41 71.24 47.22 159 46.76 230-1.19 25.33-17.11 48.6-39.86 75.16-53.2 69.72-35 146.56.23 220.38 13.12 62.49 10.91 126.57 5.26 187.45-16.53 36.56-13.08 73.26-33.08 98.95-70.34 18.52-26.87 30.06-60.88 40.89-94.46q17.34-53.72 33.32-108.19c6.39-21.8 12.69-44 14.34-67.34 3-42.27-9.62-84-26.79-119.72-40.73-84.76-109.4-144.31-183.73-159.44S656.3 71.22 598.62 135.87"
        fill={color}
        opacity={0.1}
      />
      <g opacity={0.35}>
        <path
          d="M500.99 204.04v-6.65h-104.8c-4.82 0-1.88 6.69-1.88 6.69h-56.94v149.15h250V204.04z"
          fill={color}
          opacity={0.2}
        />
      </g>
      <path
        d="M833.41 315.29s31.51-55.82 79-71.9a97.09 97.09 0 0049.19-36.8 162.74 162.74 0 0014.51-26.1"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M1005.91 170.17c-5.4 5.25-30.58 10.68-30.58 10.68s6.17-25 11.58-30.26a13.642 13.642 0 1119 19.58zM991.67 215.39c-7.39 1.47-31.48-7.66-31.48-7.66s18.78-17.63 26.17-19.1a13.64 13.64 0 115.31 26.76zM939.8 264.39c-7.12-2.46-23.3-22.5-23.3-22.5s25.11-5.75 32.23-3.28a13.641 13.641 0 11-8.93 25.78zM892.21 292.6c-7.43-1.21-26.77-18.21-26.77-18.21s23.78-9.9 31.22-8.68a13.643 13.643 0 11-4.45 26.92zM939.19 188.22c0 7.54 13.63 29.39 13.63 29.39s13.66-21.84 13.66-29.38a13.65 13.65 0 10-27.29 0zM883.96 221.92c2.25 7.19 21.8 24 21.8 24s6.49-24.93 4.24-32.12a13.64 13.64 0 10-26 8.15zM834.76 262.04c1 7.47 17.44 27.31 17.44 27.31s10.61-23.47 9.61-30.94a13.65 13.65 0 10-27 3.63z"
        fill={color}
      />
      <path
        d="M1005.91 170.17c-5.4 5.25-30.58 10.68-30.58 10.68s6.17-25 11.58-30.26a13.642 13.642 0 1119 19.58zM991.67 215.39c-7.39 1.47-31.48-7.66-31.48-7.66s18.78-17.63 26.17-19.1a13.64 13.64 0 115.31 26.76zM939.8 264.39c-7.12-2.46-23.3-22.5-23.3-22.5s25.11-5.75 32.23-3.28a13.641 13.641 0 11-8.93 25.78zM892.21 292.6c-7.43-1.21-26.77-18.21-26.77-18.21s23.78-9.9 31.22-8.68a13.643 13.643 0 11-4.45 26.92zM939.19 188.22c0 7.54 13.63 29.39 13.63 29.39s13.66-21.84 13.66-29.38a13.65 13.65 0 10-27.29 0zM883.96 221.92c2.25 7.19 21.8 24 21.8 24s6.49-24.93 4.24-32.12a13.64 13.64 0 10-26 8.15zM834.76 262.04c1 7.47 17.44 27.31 17.44 27.31s10.61-23.47 9.61-30.94a13.65 13.65 0 10-27 3.63z"
        opacity={0.25}
      />
      <path
        d="M835.23 314.18s6.18-63.8 43-97.73a97 97 0 0030.05-53.57 162.65 162.65 0 002.69-29.75"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M934.13 111.61c-2.82 7-23.64 22.16-23.64 22.16s-4.49-25.38-1.67-32.38a13.644 13.644 0 0125.31 10.2zM939.44 158.75c-6.16 4.34-31.88 5.75-31.88 5.75s10-23.73 16.18-28.06a13.64 13.64 0 1115.7 22.31zM911.86 224.54c-7.51.63-30.42-11.13-30.42-11.13s20.63-15.43 28.14-16.06a13.643 13.643 0 112.28 27.19zM879.79 269.61c-7.29 1.9-31.87-5.83-31.87-5.83s17.73-18.69 25-20.58a13.642 13.642 0 016.85 26.41zM880.44 155.15c3.05 6.89 24.37 21.34 24.37 21.34s3.63-25.5.58-32.39a13.657 13.657 0 10-25 11zM843.6 208.39c5 5.66 29.64 13.08 29.64 13.08s-4.17-25.42-9.14-31.09a13.64 13.64 0 00-20.5 18zM814.88 264.95c4 6.42 27 17.9 27 17.9s.25-25.76-3.75-32.18a13.65 13.65 0 00-23.26 14.28z"
        fill={color}
      />
      <path
        d="M153.49 572.27s-39-48.33-36.55-96.83a94.14 94.14 0 00-15.56-57.46 158.23 158.23 0 00-18.33-22.4"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M84.42 365.01c2.8 6.75-1.29 31.38-1.29 31.38s-20.32-14.5-23.12-21.25a13.222 13.222 0 0124.43-10.12zM120.13 394.02c-1.32 7.18-18.15 25.61-18.15 25.61s-9.21-23.24-7.85-30.4a13.22 13.22 0 1126 4.79zM145.67 458.24c-4.77 5.54-28.61 12.95-28.61 12.95s3.8-24.67 8.57-30.21a13.22 13.22 0 0120 17.26zM154.07 511.19c-3.76 6.26-26 17.6-26 17.6s-.43-25 3.34-31.22a13.22 13.22 0 0122.66 13.62zM76.83 431.57c6.79 2.69 31.35-1.78 31.35-1.78s-14.8-20.1-21.58-22.8a13.23 13.23 0 00-9.77 24.58zM87.45 493.39c7.28.54 29.38-11.07 29.38-11.07s-20.14-14.76-27.42-15.3a13.223 13.223 0 10-2 26.37zM106.01 552.02c7.08 1.77 30.83-6 30.83-6s-17.36-17.89-24.44-19.63a13.222 13.222 0 10-6.39 25.66zM986.63 653.39s7.63 10-3.52 25-20.35 27.78-16.63 37.18c0 0 16.83-28 30.52-28.37s4.7-16.99-10.37-33.81z"
        fill={color}
      />
      <path
        d="M986.63 653.39a12.41 12.41 0 011.56 3.13c13.36 15.7 20.48 30.35 7.64 30.72-12 .34-26.32 21.73-29.76 27.14a11.82 11.82 0 00.41 1.23s16.83-28 30.52-28.37 4.7-17.03-10.37-33.85z"
        opacity={0.1}
      />
      <path
        d="M1000.82 666.1c0 3.52-.4 6.36-.88 6.36s-.88-2.84-.88-6.36.49-1.85 1-1.85.76-1.66.76 1.85z"
        fill="#ffd037"
      />
      <path
        d="M1005.68 670.3c-3.08 1.68-5.77 2.69-6 2.27s2.08-2.14 5.16-3.82 1.87-.46 2.1 0 1.83-.13-1.26 1.55z"
        fill="#ffd037"
      />
      <path
        d="M946.33 653.39s-7.63 10 3.52 25 20.35 27.78 16.63 37.18c0 0-16.83-28-30.52-28.37s-4.7-16.99 10.37-33.81z"
        fill={color}
      />
      <path
        d="M946.33 653.39a12 12 0 00-1.56 3.13c-13.37 15.7-20.48 30.35-7.64 30.72 12 .34 26.32 21.73 29.76 27.14-.12.41-.25.82-.41 1.23 0 0-16.83-28-30.52-28.37s-4.7-17.03 10.37-33.85z"
        opacity={0.1}
      />
      <path
        d="M932.13 666.1c0 3.52.4 6.36.88 6.36s.88-2.84.88-6.36-.49-1.85-1-1.85-.76-1.66-.76 1.85z"
        fill="#ffd037"
      />
      <path
        d="M927.27 670.3c3.09 1.68 5.78 2.69 6 2.27s-2.08-2.14-5.16-3.82-1.87-.46-2.1 0-1.82-.13 1.26 1.55z"
        fill="#ffd037"
      />
      <ellipse
        cx={966.48}
        cy={779.69}
        rx={79.78}
        ry={12.24}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M1007.54 702.16l-.38 3.11-.54 4.4-.22 1.84-.53 4.4-.24 1.84-.53 4.4-6.11 50c-.54 4.47-7.84 8-16.65 8h-31.72c-8.81 0-16.1-3.48-16.65-8l-6.11-50-.54-4.4-.22-1.84-.54-4.4-.23-1.84-.53-4.4-.39-3.11c-.3-2.53 3.65-4.66 8.63-4.66h64.88c4.98 0 8.93 2.13 8.62 4.66z"
        fill="#65617d"
      />
      <path
        fill="#9d9cb5"
        d="M1007.16 705.27l-.54 4.4h-80.29l-.53-4.4h81.36zM1006.4 711.51l-.54 4.4H927.1l-.55-4.4h79.85zM1005.63 717.75l-.53 4.39h-77.24l-.54-4.39h78.31z"
      />
      <path
        d="M880.55 211.57h-.84c1.32-1.5 2-3 1.89-4.33l-7.6-7.6 2.9-6.5h-9.77l1.81-5.07h-5.79l-64.06 21.34s-.07.89 0 2.16h-41.25v185.85H937V211.57z"
        transform="translate(-76.87 -25.61)"
        fill="url(#TakingNotes_svg__a)"
      />
      <path fill="#f6f7f9" d="M682.3 186.61h176.46v183.24H682.3z" />
      <path
        d="M803.19 186.61c-8.36 12.31-64.2 28.52-64.2 28.52l.35-12.83h-10.33a5.85 5.85 0 00-2.86-6.42c-3-1.65-3.29-7-3.25-9.27z"
        opacity={0.1}
      />
      <path
        d="M786.04 163.44l-63.09 21s-.72 8.2 3.2 10.33a5.87 5.87 0 012.86 6.42h10.33l-.35 12.83s66.3-19.25 65.23-31.72l-7.48-7.49 2.85-6.42h-9.63l1.79-5z"
        fill="#9d9cb5"
      />
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 246.01h111.22v3.12H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 262.46h111.22v3.12H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 278.9h111.22v3.12H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 295.34h111.22v3.12H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 311.78h111.22v3.12H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 328.23h111.22v3.12H714.92z"
        />
      </g>
      <path
        d="M282.67 196.51h-.42c3.16-8.1 6.08-16 5.95-17.51-.28-3-6.29 3.52-6.57 1.89s0-7.81-2.73-7.81-4.38 3.21-6 3.21-8.21-1.08-8.21-1.08l-8.39 21.3h-63.2V395h156.84V196.51z"
        transform="translate(-76.87 -25.61)"
        fill="url(#TakingNotes_svg__b)"
      />
      <path fill="#f6f7f9" d="M117.99 172h153.29v196.06H117.99z" />
      <path
        d="M205.55 172c-3.23 8.39-6.87 17.23-7.7 19.34-1.61 4-2.67 1.87-4.55 1.34s-4.27.53-5.34 0-7.35 0-7.35 0a20.69 20.69 0 000-2.95c-.14-1.06-7.36 0-7.36 0l6.88-17.73z"
        opacity={0.1}
      />
      <path
        d="M187.96 150.97l-14.71 37.7s7.22-1.07 7.35 0a19.11 19.11 0 010 2.94s6.29-.54 7.36 0 3.47-.54 5.34 0 2.94 2.67 4.55-1.34 13.37-32.62 13.1-35.56-6.15 3.48-6.42 1.87 0-7.71-2.67-7.71-4.28 3.17-5.88 3.17-8.02-1.07-8.02-1.07z"
        fill="#9d9cb5"
      />
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M139.03 224.04h111.22v3.12H139.03z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M139.03 235.81h111.22v3.12H139.03z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M139.03 247.57h111.22v3.12H139.03z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M139.03 259.34h111.22v3.12H139.03z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M139.03 271.1h111.22v3.12H139.03z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M139.03 282.86h111.22v3.12H139.03z"
        />
      </g>
      <path
        d="M861.12 490h-.42c3.88-10 7.46-19.77 7.29-21.6-.33-3.67-7.71 4.34-8 2.34s0-9.64-3.35-9.64-5.36 4-7.37 4-10.06-1.34-10.06-1.34L828.87 490h-77.45v244.89h192.23V490z"
        transform="translate(-76.87 -25.61)"
        fill="url(#TakingNotes_svg__c)"
      />
      <path fill="#f6f7f9" d="M676.09 466.09h188.88v241.6H676.09z" />
      <path
        d="M783.88 466.09c-3.94 10.26-8.36 21-9.39 23.58-2 4.94-3.29 2.3-5.6 1.65s-5.27.65-6.59 0-9.06 0-9.06 0a25.44 25.44 0 000-3.63c-.17-1.31-9.06 0-9.06 0l8.43-21.6z"
        opacity={0.1}
      />
      <path
        d="M762.3 440.17l-18.12 46.45s8.89-1.32 9.06 0a25.29 25.29 0 010 3.62s7.74-.65 9.06 0 4.28-.65 6.59 0 3.62 3.3 5.6-1.64 16.47-40.2 16.14-43.82-7.58 4.28-7.91 2.31 0-9.51-3.29-9.51-5.27 3.91-7.25 3.91-9.88-1.32-9.88-1.32z"
        fill="#9d9cb5"
      />
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 533.6h111.22v7.93H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 585.11h111.22v7.93H714.92z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M714.92 636.63h111.22v7.93H714.92z"
        />
      </g>
      <path
        fill="url(#TakingNotes_svg__d)"
        d="M237.97 472.76v-29.57h-41.51v29.57h-86.67v232.98h203.57V472.76h-75.39z"
      />
      <path fill="#f6f7f9" d="M111.94 473.94h199.27v230.28H111.94z" />
      <path opacity={0.1} d="M196.78 473.94h40.64v31.37h-40.64z" />
      <path fill="#9d9cb5" d="M196.78 444.71h40.64v59.53h-40.64z" />
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M155.96 529.64h111.22v7.93H155.96z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M155.96 545.41h111.22v7.93H155.96z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M155.96 561.19h111.22v7.93H155.96z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M155.96 576.96h111.22v7.93H155.96z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M237.42 594.52h29.77v24.06h-29.77z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M155.96 624.28h29.77v24.06h-29.77z"
        />
      </g>
      <path
        d="M600.73 498h-.28c3.24-12.67 5.68-22.76 5.68-22.76l-13.82 6.5s-9.81-13-13.44-10.83-11.6 7.58-11.6 7.58l-10.58-5.42-4.05 24.93h-83.55v179.89l5.37 3.21c4.43-1.59 11.72-4.29 11.72-4.29l-3.35 9.3 2.26 1.34 3.81-3.45 1.41 6.59 4.53 2.71 7.15-4.55-2 7.66 6.71 4 19.51-7.33-5.88 15.48 3.87 2.32 8.83-1.55s-.4 3.09-.65 6.44l8.86 5.3c3.63-1.41 7.05-2.8 7.05-2.8s-.35 3.38-.51 6.7l5.94 3.56c4.69-2.74 10.66-6.47 10.66-6.47l-5 9.3h112.9V498z"
        transform="translate(-76.87 -25.61)"
        fill="url(#TakingNotes_svg__e)"
      />
      <path
        d="M593.19 473.94v230.28H482.46l4.94-9.17s-5.85 3.67-10.45 6.38l-5.82-3.52c.16-3.27.51-6.61.51-6.61s-3.36 1.37-6.92 2.76l-8.69-5.23c.25-3.3.63-6.35.63-6.35l-8.65 1.53-3.79-2.29 5.76-15.28-19.13 7.24-6.59-4 1.92-7.56-7 4.49-4.44-2.67-1.38-6.5-3.74 3.42-2.22-1.33 3.29-9.17s-7.15 2.66-11.5 4.23l-5.26-3.16V473.94z"
        fill="#f6f7f9"
      />
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M437.94 545.41h111.22v7.93H437.94z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M437.94 569.12h111.22v7.93H437.94z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M437.94 592.82h111.22v7.93H437.94z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M437.94 616.53h22.28v7.93h-22.28z"
        />
      </g>
      <path
        d="M523.01 473.94c-5.42 21.38-13.32 51-15.38 50.48-3.2-.87-8.2-7-8.2-7s-11.76 11.05-17.46 5.35-13.55-1.79-13.55-1.79l7.6-47.05z"
        opacity={0.1}
      />
      <path
        d="M479.83 449.39l-11.41 70.58s7.84-3.92 13.54 1.79 17.47-5.37 17.47-5.37 5 6.12 8.2 7 20.68-71.86 20.68-71.86l-13.55 6.42s-9.62-12.84-13.19-10.7-11.37 7.49-11.37 7.49z"
        fill="#9d9cb5"
      />
      <path
        d="M649.9 167.06v-6.77H543.78c-4.87 0-1.89 6.77-1.89 6.77h-57.66V318h253.1V167z"
        transform="translate(-76.87 -25.61)"
        fill="url(#TakingNotes_svg__f)"
      />
      <path fill="#f6f7f9" d="M408.96 142.17h249.98v149.19H408.96z" />
      <path
        d="M572.59 166.5H473.4s-1.07-11.5 2.41-13.63-9.9-9.63-9.9-9.63a11.15 11.15 0 01-.39-1.07h107.07v3.48s13.64 12.03 0 20.85z"
        opacity={0.1}
      />
      <path
        d="M467.78 135.49h104.81v9.09s13.64 12 0 20.85H473.4s-1.07-11.5 2.41-13.63-9.9-9.63-9.9-9.63-2.94-6.68 1.87-6.68z"
        fill="#9d9cb5"
      />
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M439.67 188.96h188.58v3.12H439.67z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M439.67 200.72h112.65v3.12H439.67z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M439.67 212.49h188.58v3.12H439.67z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M439.67 224.25h188.58v3.12H439.67z"
        />
      </g>
      <g opacity={0.35}>
        <path
          fill={color}
          opacity={0.2}
          d="M439.67 236.01h188.58v3.12H439.67z"
        />
      </g>
      <path
        d="M782.69 856.27c-1.79-7.62-2.89-14.3-2.89-14.3s.41-8.29-3.31-14.51v-17.38a51.67 51.67 0 013.86-8c2.76-4.82 0-22.46 0-22.46s-10.22-24.87-7.73-40.64-21-70.05-21-70.05a68.88 68.88 0 012.21-15.51 12.31 12.31 0 00.3-3.25v-.4.13c-.35-10.4-8.57-29.9-8.57-29.9l1.1-37.17s5.25-21.92-3.31-51.33c-3-10.27-4.91-18.48-6.12-24.82q-.21-1.08-.39-2.07c17.63-2.69 31.09-4.93 31.09-4.93s-10.23-42.8-17.13-50.28-12.43-31-12.43-31-3.6-30.21 2.21-39 6.62-24.07 6.62-24.07 13.26-9.62 14.92-13.9 4.42-13.9 4.42-19-1.66-9.63-1.1-12.3-3.87-12.83-1.66-17.65a13 13 0 00.88-4.64.59.59 0 000-.14v-.05a65.44 65.44 0 00-1.17-12.55s-6-5.29-13.11-7l-.29-1.15-.75-3a14.08 14.08 0 00-1.31-.78v-1.09l-.12-4.34 2.08-9.77c4.07-17-18.58-19.51-18.58-19.51a11.85 11.85 0 00-6.41-5.66c-4.56-1.61-.76 25.54 1.37 27.27 1.61 1.31 6.56 9.82 8.94 14l.39.69a9.37 9.37 0 00-1 1.09l.86 5.89.13.9a24.49 24.49 0 00-3.61 6.17s4.15 4.54 3.32 9.62 1.27 11.41 1.37 11.76c-.25-.28-3.16-3.44-6.07-2.67s-11 3.21-11 3.21-6.08 1.07-5.52 2.41-4.15 7.22-4.15 7.22l-16.33-15.48c-.16-.46-.32-.92-.47-1.4a37.63 37.63 0 01-1.42-6.78 37.23 37.23 0 005.22-1.66 11.27 11.27 0 004.52-2.89c1.64-2 2-4.61 2.63-7 1.29-4.76 4.07-9 6.06-13.51a44 44 0 003.26-24.27 15.94 15.94 0 00-2.51-7.1c-2.66-3.67-7.5-5.16-11-8.09s-5.78-7.39-9.88-9.59c-3.7-2-8.22-1.75-12.39-1.07a66.72 66.72 0 00-23.15 8.42c-2.38 1.41-5 3-7.74 2.54-2.34-.42-4.06-2.3-5.57-4.09a2 2 0 01.07-.23l-.18-.21a28.81 28.81 0 00-2.54 12.22c0 .65 0 1.3.08 2v.69a3.54 3.54 0 010 .56 3.13 3.13 0 01-.12.86 6.38 6.38 0 01-1.53 2.21 12.05 12.05 0 00-1.33 1.81c.07-.22.14-.44.22-.66a9.65 9.65 0 00-1.69 5.14 5.14 5.14 0 001.23 3.69 17.31 17.31 0 002.66 2.14 31.16 31.16 0 0014.9 32.38c.19.46.37.93.56 1.4 2.08 5.5 3.65 11.9 3 17.81-.06.44-.12.87-.2 1.3-.21.22-.41.45-.59.68s-27 .26-33.31-5.49-16 14-16 14-9.67 1.88-11.6 0-13.26-.26-13.26-.26-6.91-6.69-16.85-6.15a49.91 49.91 0 00-12.37-6.88l-.31-.11a14 14 0 00-6.08-.77s-13.26-11-17.12-16.84-22.29-27.7-22.37-27.8l-.07-1-.21-3.18a11.57 11.57 0 01-1.65.14l-.37-1.1a59.82 59.82 0 00-3.92-9s0-4 1.17-5-.48-15.71-.48-15.71-11.95-27.94-22.65-7.08c0 0-20.23 13.49-3.25 29.2 0 0 6.77 3.29 7.73 5.89.63 1.69 2.93 6.4 4.48 9.54.26.52.49 1 .69 1.4l-.19.16.25 2.62.1 1c-3.2 1.82-5.37 3.61-4.84 5a29.66 29.66 0 011.93 7.22s23.48 29.41 26.52 42c0 0 63 37.43 83.7 40.11l-3.59 18.71s-1.11 11.23-.83 15.24-2.49 22.2-2.49 22.2-3.59 26.73-6.63 30.47-2.48 19.79-2.48 19.79a135.06 135.06 0 01-4.15 22.73c-3 10.16-.82 22.72-.82 22.72s-10.5 24.07 14.64 7.76c0 0 12.34-.77 26.55-1.25v1.41c0 1.83-.06 3.81-.08 5.9-.19 13.78-.27 32.77.35 47.14 1.1 25.4 8.84 75.67 8.84 75.67v25.25a34.11 34.11 0 00-.73 7.22 47 47 0 006.81 25.28l1.71 16.67s4.54 11.1 4.63 17.73a9.7 9.7 0 01-.2 1.61 11.62 11.62 0 00-.22 2.58c-.26 7.65 4.35 25.94 4.35 25.94s.28 18.45 3 19.52c2.36.91-3.15 10.63-4.8 13.42 0-.18-.07-.35-.1-.53-.21.36-.34.56-.34.56a13.09 13.09 0 00-.86 4.66 6.71 6.71 0 003.06 6.49c5.25 3.21 8.07 5.88 3.62 7a48.57 48.57 0 00-4.87 1c-.08-.21-.16-.42-.23-.62a3 3 0 00-1.82 3.23c-.12 1.35.33 3.32 1.65 6.26 4.42 9.89 7.48 13.64 7.48 13.64l2.12-.24a11.54 11.54 0 01-1.23 2.28 8.85 8.85 0 01-3.13 2.77 9.42 9.42 0 01-3.77 1.29 10.69 10.69 0 00-7.83 3.81c-2.75 3.56-4.48 8.42 1 12.68l19.76 6.82s34 4.41 32.17-3.21-2.89-14.3-2.89-14.3.38-7.44-2.76-13.52a16.17 16.17 0 00-1.2-2l1.2-.14s2.48-16.84 5.8-20c.76-.74.93-1.31.75-1.74.35-.92-.52-1.46-1.63-1.76l-.24.66a16.12 16.12 0 00-3.3-.37s-1.11-8.82 2.48-12a3.36 3.36 0 00.7-2.62 14.16 14.16 0 00-.37-3.59c0 .06-.08.14-.13.2-1.81-8-7.93-20.73-7.93-20.73s-.28-8 1.93-11.22-.27-43.59-.27-43.59.83-19.51-1.66-28.6 3-19.79 3-19.79 0-.21-.06-.58l.07-.14s-.12-1.2-.32-3.07a1.34 1.34 0 00-.07.18c-.55-5.16-1.61-14.52-2.38-18.85-1.11-6.15.27-35.56.27-35.56l5-12.56 8.84 21.65 9.4 28.88s4.65 6.1 4.76 12.28c0 .3 0 .6-.06.9a16.18 16.18 0 00-.11 1.93 17.16 17.16 0 002.86 10.29s2.49 13.63 6.36 17.11 3.86 10.16 3.86 10.16 4.7 19.78 6.91 23.26c1.86 2.93 2 11 1.94 13.45v.72s.65 7.07.63 13c0 .73 0 1.44-.07 2.11v-.15a21.32 21.32 0 01-.57 4.81 2.13 2.13 0 00-.08.27c0-.33 0-.67.08-1a50.72 50.72 0 00-1.38 12.33c-.13 7.11 1 15.54 5.26 20.48 7.46 8.56 12.16 7.49 12.16 7.49s-3.6 10.69-8 12.83a2.88 2.88 0 00-.47.3c0-.21-.08-.41-.11-.62-.92.8-1.29 2.24-1.29 4-.32 4.7 2.64 12.34 5.47 15.85a8.85 8.85 0 003.73 2.18 8.18 8.18 0 01-.7.43 13.25 13.25 0 01-1.52.71 7.28 7.28 0 01-2.25.59 10.58 10.58 0 00-7.85 3.76c-2.75 3.55-4.48 8.41 1 12.67l19.76 6.82s33.94 4.4 32.13-3.22z"
        transform="translate(-76.87 -25.61)"
        fill="url(#TakingNotes_svg__g)"
      />
      <path
        d="M576.06 843.29l-19.12-6.82c-5.28-4.26-3.6-9.12-.93-12.68a10.21 10.21 0 017.57-3.81 8.94 8.94 0 003.65-1.29 8.67 8.67 0 003-2.77 14.1 14.1 0 002.18-7.39s21-6.15 26.74 0a15.39 15.39 0 012.54 3.73c3 6.08 2.68 13.52 2.68 13.52s1.07 6.67 2.8 14.3-31.11 3.21-31.11 3.21zM669.63 833.87l-19.12-6.82c-5.27-4.26-3.59-9.12-.93-12.67a10.16 10.16 0 017.57-3.81 6.86 6.86 0 002.19-.59 12.86 12.86 0 001.47-.71c5.35-2.94 5.21-10.16 5.21-10.16s21-6.15 26.74 0a14.89 14.89 0 012 2.73c3.6 6.22 3.2 14.52 3.2 14.52s1.07 6.68 2.81 14.3-31.14 3.21-31.14 3.21z"
        fill="#2d293d"
      />
      <path
        d="M599.18 808.53a15.39 15.39 0 012.54 3.73l-31.46 3.65a14.1 14.1 0 002.18-7.39s21-6.13 26.74.01zM694.77 801.84v5.89c-4.89 8.06-28.56 6.3-35.43 2.25a12.86 12.86 0 001.47-.71c5.35-2.94 5.21-10.16 5.21-10.16s21-6.15 26.74 0a14.89 14.89 0 012.01 2.73z"
        opacity={0.1}
      />
      <path
        d="M698.51 776.45a53 53 0 00-3.74 8v21.14c-5.35 8.82-33.16 5.88-36.9 1.07s-7.75-17.38-3.48-19.52 7.74-12.83 7.74-12.83-4.55 1.07-11.77-7.49-5.08-27.54-3.73-32.08 0-19.79 0-19.79.27-10.69-1.87-14.17-6.63-23.26-6.63-23.26 0-6.68-3.75-10.16-6.15-17.11-6.15-17.11a17.56 17.56 0 01-2.67-11.49c.8-6.69-4.55-13.91-4.55-13.91l-9.09-28.87-8.55-21.66-4.81 12.57s-1.34 29.41-.27 35.56 2.67 22.46 2.67 22.46-5.34 10.69-2.94 19.78 1.61 28.61 1.61 28.61 2.4 40.37.26 43.58-1.87 11.23-1.87 11.23 11 23.52 7.49 26.73-2.41 12-2.41 12 7.49 0 4.28 3.21-5.62 20-5.62 20l-32.32 3.75s-3-3.75-7.24-13.64.8-8.82 5.1-9.89 1.58-3.74-3.5-7-2.14-10.43-2.14-10.43 7.75-13.1 5.08-14.17-2.94-19.52-2.94-19.52-5.35-21.92-4-27.8-4.33-19.96-4.33-19.96l-1.87-16.85c-9.63-16.57-5.88-31.81-5.88-31.81v-25.9s-7.49-50.26-8.56-75.66c-.68-16.27-.49-38.47-.27-52.32.13-7.77.27-12.92.27-12.92l115.5-12s-.12 5.33 2.1 17.16c1.17 6.34 3 14.55 5.92 24.82 8.29 29.41 3.21 51.33 3.21 51.33l-1.07 37.15s10.16 24.87 8 33.42a71.09 71.09 0 00-2.14 15.51s22.75 54.26 20.34 70.07 7.49 40.64 7.49 40.64 2.67 17.6 0 22.42z"
        fill="#575988"
      />
      <path
        d="M632.47 637.15l35.16-4.68s-19.92 20.32-35.16 4.68z"
        opacity={0.05}
      />
      <path
        d="M662.55 598.12s1.2 12.43-6.42 17.11c0 0 13.64-2.14 6.42-17.11zM660.39 558.55s-29.39 24.19-40.08 22.19 40.08-22.19 40.08-22.19zM588.89 648.52s-22.32 5.07-23 14 23-14 23-14z"
        opacity={0.1}
      />
      <path
        d="M593.8 760s-31.55 5.89-22.59 9.9 23.66 7.21 23.66 7.21 10.16.54-1.07-17.11z"
        opacity={0.05}
      />
      <g opacity={0.05}>
        <path d="M564.84 776.26a6.22 6.22 0 01-2.89-4.57l-.32.56s-2.94 7.22 2.14 10.43l1.65 1.08c.93-.17 1.94-.3 2.92-.55 4.3-1.07 1.58-3.74-3.5-6.95zM605.48 774.12c.86-.8.83-2.85.3-5.49-1.42 2.07-1.76 5.29-1.79 7.74a6.37 6.37 0 011.49-2.25zM600.62 641.11a35.84 35.84 0 00-2.13 9.83 38.67 38.67 0 012.44-6.75s-.12-1.21-.31-3.08zM672.85 627.07a11.69 11.69 0 00.29-2.92c-.39 2-.67 3.85-.87 5.47.17-.83.36-1.68.58-2.55zM599.86 736.16c.44-.66.68-2.86.8-5.94-1 1.95-1.41 5.1-1.54 7.5a7.29 7.29 0 01.74-1.56zM606.49 786.58c-2.2 6-3.69 16.42-3.69 16.42l-32.33 3.74s-3-3.74-7.24-13.63c-.37-.87-.67-1.65-.91-2.36-1.94.89-2.7 2.9-.16 8.77 4.28 9.89 7.24 13.64 7.24 13.64l32.33-3.77s2.41-16.84 5.62-20c1.58-1.6.57-2.41-.86-2.81zM563.77 738.56s.27 18.45 2.94 19.52c1.35-3.05 2.25-6 1-6.43-2.67-1.06-2.94-19.51-2.94-19.51s-5.35-21.93-4-27.81-4.28-20.05-4.28-20.05l-1.87-16.84c-9.63-16.58-5.88-31.82-5.88-31.82V609.7s-7.49-50.27-8.56-75.67c-.68-16.26-.49-38.46-.27-52.31 0-2.51.09-4.73.13-6.6l-.93.09s-.14 5.15-.27 12.92c-.22 13.85-.41 36 .27 52.32 1.07 25.4 8.56 75.66 8.56 75.66v25.94s-3.75 15.24 5.88 31.81l1.87 16.85s5.61 14.17 4.28 20 4.07 27.85 4.07 27.85zM658.95 799.52a31.16 31.16 0 01-5.12-12.7c-3.3 3 .49 14.55 4 19.12 3.74 4.81 31.55 7.75 36.9-1.07v-5.09c-7.18 7.17-32.24 4.29-35.78-.26zM699.59 769.31a52.55 52.55 0 00-3.75 8v3.75c.61-1.37 1.48-3.2 2.68-5.35.77-1.39 1.09-3.84 1.17-6.63-.04.09-.07.17-.1.23zM660.59 773.52a50.73 50.73 0 002.64-6.35s-4.55 1.07-11.77-7.48c-5.25-6.23-5.55-18-4.8-25.67-1.35 4.55-3.48 23.53 3.73 32.08 4.74 5.6 8.29 7.07 10.2 7.42zM646.65 714.23a142.48 142.48 0 01.53 15.85 22.77 22.77 0 01.55-2.48c1.35-4.54 0-19.78 0-19.78s.27-10.7-1.87-14.17-6.73-23.26-6.73-23.26 0-6.69-3.74-10.16-6.15-17.11-6.15-17.11a17.6 17.6 0 01-2.67-11.5c.8-6.68-4.55-13.9-4.55-13.9l-9.09-28.88-8.55-21.65-4.82 12.56s-.07 1.58-.16 4.06l3.91-10.21 8.55 21.66 9.09 28.87s5.35 7.22 4.55 13.91a17.56 17.56 0 002.67 11.49s2.41 13.64 6.15 17.11 3.81 10.16 3.81 10.16 4.55 19.79 6.69 23.26 1.83 14.17 1.83 14.17z" />
      </g>
      <path
        d="M669.13 222.39l-2 9.76.12 4.34.08 3.21-11.2 1.1-1.25-2.31c-2.31-4.18-7.1-12.69-8.66-14-2.06-1.74-5.74-28.88-1.32-27.27a11.69 11.69 0 016.21 5.62s21.94 2.55 18.02 19.55z"
        fill="#ffcdd3"
      />
      <path
        d="M667.29 239.65l-11.16 1.15-1.25-2.31c1.6-1.65 6.17-5.4 12.32-2z"
        opacity={0.1}
      />
      <path
        d="M670.13 244.93l-14.73 3.46-.31-2.2-.83-5.89s5.81-7.76 14.24-1.95l.73 3z"
        fill="#dce6f2"
      />
      <path
        d="M431.81 223.39l-15.68 8.44s-.6-1.24-1.42-3c-1.5-3.13-3.72-7.85-4.33-9.54-.93-2.6-7.49-5.88-7.49-5.88-16.43-15.71 3.15-29.21 3.15-29.21 10.36-20.85 21.92 7.08 21.92 7.08s1.6 14.72.47 15.71-1.13 5-1.13 5a60.7 60.7 0 013.78 9c.47 1.5.73 2.4.73 2.4z"
        fill="#ffcdd3"
      />
      <path
        d="M431.81 223.39l-15.68 8.44s-.6-1.24-1.42-3c2.21-1.85 10.07-8.22 12.65-7.93a18.8 18.8 0 003.72.09c.47 1.5.73 2.4.73 2.4z"
        opacity={0.1}
      />
      <path
        d="M433.42 228.15l-17.65 8.7-.35-3.8-.29-2.66s10.22-8.76 13.24-8.42a15.81 15.81 0 004.61 0l.2 3.18z"
        fill="#dce6f2"
      />
      <path
        d="M626.32 287.18s-76.94 8.68-62.56 4c10-3.26 14-9.63 14.82-16.69.68-5.91-.84-12.3-2.86-17.8a76.58 76.58 0 00-6.88-13.9s58.82-32.36 47-3a47.21 47.21 0 00-3.33 13.94 39.17 39.17 0 001.51 14.11 42 42 0 0012.3 19.34z"
        fill="#ffcdd3"
      />
      <path
        d="M615.89 239.85a47.21 47.21 0 00-3.33 13.94c-5.54 4.65-11.62 4.35-19.42 4.35-6 0-12.63 1.45-17.42-1.44a76.58 76.58 0 00-6.88-13.9s58.82-32.36 47.05-2.95z"
        opacity={0.1}
      />
      <circle cx={592.1} cy={228.36} r={31.82} fill="#ffcdd3" />
      <path
        d="M626.32 287.18s-76.94 8.68-62.56 4c10-3.26 14-9.63 14.82-16.69 3.83-4.14 11.53-7.14 16.47-8.73a23.07 23.07 0 0114-.23 19.23 19.23 0 015.07 2.36 42 42 0 0012.2 19.29zM670.13 244.93l-14.73 3.46-.31-2.2c4.15-5.3 9.38-5.94 14.14-4.83zM433.42 228.15l-17.65 8.7-.35-3.8c6.31-3.72 16.88-7.55 17.8-7.88zM656.76 481.06c-29.8 4.7-72.21 10.83-78.94 8.78-5.58-1.7-23.41-1.52-38.93-1 .13-7.77.27-12.92.27-12.92l115.5-12s-.12 5.31 2.1 17.14z"
        opacity={0.1}
      />
      <path
        d="M686.48 474.06s-98.12 16.85-108.66 13.64-64.59.27-64.59.27c-24.33 16.3-14.17-7.76-14.17-7.76s-2.14-12.56.8-22.72a139 139 0 004-22.73s-.53-16 2.41-19.78 6.41-30.48 6.41-30.48 2.68-18.18 2.41-22.19.8-15.24.8-15.24l3.49-18.68c-20-2.67-81-40.1-81-40.1-2.94-12.57-25.67-42-25.67-42a31 31 0 00-1.87-7.22c-1.61-4.28 22.46-12.83 22.46-12.83s17.91 21.92 21.65 27.8 16.58 16.85 16.58 16.85a12.86 12.86 0 015.88.77c.11 0 .2.06.31.09 6 2.09 12 6.87 12 6.87 9.63-.53 16.31 6.15 16.31 6.15s11-1.6 12.83.27 11.23 0 11.23 0 9.36-19.79 15.51-14 32.24 5.48 32.24 5.48c3.48-4.62 11.94-7.93 17.23-9.64a23.07 23.07 0 0114-.23 17.75 17.75 0 015.5 2.66l15.83 15.5s4.55-5.88 4-7.22 5.35-2.4 5.35-2.4 7.75-2.41 10.69-3.21 5.64 2.38 5.88 2.66c-.1-.34-2.11-6.81-1.33-11.75s-3.21-9.63-3.21-9.63c9.36-23 30.48-3.74 30.48-3.74s2.41 12.57.27 17.38 2.14 15 1.6 17.64 1.07 7.22 1.07 12.3-2.67 14.71-4.28 19-14.49 13.85-14.49 13.85-.81 15.24-6.42 24.06-2.14 39-2.14 39 5.35 23.53 12 31 16.61 50.31 16.61 50.31z"
        fill="#656691"
      />
      <path
        d="M543.44 298.14s-2.94-8.82-5.61-9.63a62.34 62.34 0 01-7.76-3.47l1.72-3.29s10.05 2.75 11.65 5.69 0 10.7 0 10.7zM489.7 278.62c-.53 2.68-24.33 5.08-24.33 5.08l12-12.06.3.1c6.08 2.1 12.03 6.88 12.03 6.88z"
        opacity={0.1}
      />
      <circle cx={420.85} cy={241.92} r={2.14} fill="#575988" />
      <circle cx={423.59} cy={246.2} r={2.14} fill="#575988" />
      <circle cx={426.27} cy={250.15} r={2.14} fill="#575988" />
      <circle cx={429.07} cy={254.42} r={2.14} fill="#575988" />
      <circle cx={681.09} cy={254.19} r={1.74} fill="#575988" />
      <circle cx={681.36} cy={258.13} r={1.74} fill="#575988" />
      <circle cx={681.6} cy={262.08} r={1.74} fill="#575988" />
      <path
        d="M543.57 370.59c-.24-.31 60 75.8 106.81 31.82 0-.02-73.92 10.03-106.81-31.82zM508.95 410.16s36.06 1 39.84 11.36v10.79a6.87 6.87 0 01-6.71 0c-3.64-2-25.44-13-33.13-7.71z"
        opacity={0.1}
      />
      <path
        d="M509.62 410.16s34.49.94 38.1 10.83v10.29a6.58 6.58 0 01-6.42 0c-3.47-1.87-24.33-12.43-31.68-7.35z"
        fill="#656691"
      />
      <path
        d="M528.64 331.85s4.13 10.62 14 24a94.15 94.15 0 0021.89 21.14s-35.29-40.18-35.89-45.14zM516.84 289.94s6 26 21.52 34.8zM507.61 292.57c-.15-.48-5.34 20.54 20 32.17-.01 0-10.77-3.65-20-32.17zM665.13 275.15c-.4 0 12.5 8.21 16 12 0 .03-8.42-12.54-16-12z"
        opacity={0.1}
      />
      <path
        d="M583.5 257.2c.45 1.64 1 3.44 2.48 4.3a6.79 6.79 0 003 .67c9.7.6 19.79 1 28.77-2.71a10.86 10.86 0 004.37-2.9c1.59-1.95 1.9-4.6 2.54-7 1.26-4.75 3.94-9 5.88-13.51a45.39 45.39 0 003.15-24.26 16.43 16.43 0 00-2.43-7.11c-2.58-3.67-7.26-5.16-10.67-8.08s-5.59-7.39-9.56-9.59c-3.58-2-8-1.75-12-1.07a63.26 63.26 0 00-22.4 8.41c-2.3 1.42-4.83 3.05-7.49 2.55-2.32-.44-4-2.39-5.5-4.22a29.57 29.57 0 00-2.39 13.86 5.87 5.87 0 01-.07 2.09 6.2 6.2 0 01-1.48 2.2c-2.39 2.78-3.89 7.18-1.52 10 1 1.22 2.61 1.89 3.61 3.13 1.8 2.24 1.19 5.45 1.15 8.31a4.23 4.23 0 00.7 2.82c.9 1.09 2.54 1.18 3.93.94s2.81-.71 4.18-.4a7 7 0 013.64 2.8c4.48 5.65 6.23 11.96 8.11 18.77z"
        fill="#2d293d"
      />
      <g opacity={0.1}>
        <path d="M623.19 254.11a10.86 10.86 0 01-4.37 2.9c-9 3.74-19.07 3.31-28.77 2.7a6.65 6.65 0 01-3-.66c-1.47-.87-2-2.66-2.48-4.3-1.88-6.86-3.63-13.12-8.11-18.82a7 7 0 00-3.64-2.8c-1.37-.31-2.79.16-4.18.4s-3 .15-3.93-.94a4.23 4.23 0 01-.7-2.82c0-2.86.64-6.08-1.15-8.31-1-1.25-2.58-1.91-3.62-3.13-1.48-1.77-1.44-4.16-.61-6.39-1.7 2.7-2.44 6.17-.45 8.52 1 1.23 2.61 1.89 3.61 3.14 1.79 2.23 1.19 5.45 1.15 8.31a4.23 4.23 0 00.7 2.82c.9 1.09 2.54 1.18 3.93.94s2.81-.71 4.18-.4a7 7 0 013.64 2.8c4.48 5.7 6.23 12 8.11 18.82.45 1.63 1 3.43 2.48 4.3a6.65 6.65 0 003 .66c9.7.61 19.79 1 28.77-2.7a10.86 10.86 0 004.37-2.9 8.46 8.46 0 001.38-2.58c-.1.15-.2.3-.31.44zM561.28 207.75a4.54 4.54 0 001-1.61 5.87 5.87 0 00.07-2.09 29.76 29.76 0 011.49-11.51l-.17-.21a29.55 29.55 0 00-2.39 13.86 8.14 8.14 0 010 1.56z" />
      </g>
      <path
        d="M577.82 276.48s39.75 5.27 43.32-.7M655.13 260.04s22.08 0 26.94 8.3"
        opacity={0.1}
      />
    </svg>
  );
};

SvgTakingNotes.propTypes = {
  color: PropTypes.string
};
SvgTakingNotes.defaultProps = {
  color: "primary"
};
export default SvgTakingNotes;
