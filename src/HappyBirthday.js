import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgHappyBirthday = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 839.2 727.08"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="HappyBirthday_svg__a"
          x1={484.88}
          y1={578.23}
          x2={600.81}
          y2={578.23}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="HappyBirthday_svg__b"
          x1={615.75}
          y1={530.72}
          x2={651.5}
          y2={530.72}
          xlinkHref="#HappyBirthday_svg__a"
        />
        <linearGradient
          id="HappyBirthday_svg__c"
          x1={745.48}
          y1={595.56}
          x2={780.02}
          y2={595.56}
          xlinkHref="#HappyBirthday_svg__a"
        />
        <linearGradient
          id="HappyBirthday_svg__d"
          x1={634.32}
          y1={509.85}
          x2={634.32}
          y2={96.02}
          xlinkHref="#HappyBirthday_svg__a"
        />
        <linearGradient
          id="HappyBirthday_svg__e"
          x1={637.11}
          y1={586.77}
          x2={637.11}
          y2={513.3}
          xlinkHref="#HappyBirthday_svg__a"
        />
        <linearGradient
          id="HappyBirthday_svg__f"
          x1={454.92}
          y1={727.08}
          x2={454.92}
          y2={487.86}
          xlinkHref="#HappyBirthday_svg__a"
        />
      </defs>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M124.18 129.51h3.33v18.87h-3.33z" />
        <path d="M135.28 137.28v3.33h-18.87v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M242.55 540.19h3.33v18.87h-3.33z" />
        <path d="M253.64 547.96v3.33h-18.87v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M76.86 321h3.33v18.87h-3.33z" />
        <path d="M87.96 328.77v3.33H69.09v-3.33z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M659.86 0h3.33v18.87h-3.33z" />
        <path d="M670.96 7.77v3.33h-18.87V7.77z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M97.97 46.93h3.33V65.8h-3.33z" />
        <path d="M109.06 54.7v3.33H90.19V54.7z" />
      </g>
      <path
        d="M165.1 472.85a4.08 4.08 0 01-2.27-4.93 2 2 0 00.09-.45 2 2 0 00-3.67-1.36 2 2 0 00-.23.4 4.08 4.08 0 01-4.93 2.27 2 2 0 00-.45-.09 2 2 0 00-1.36 3.67 2 2 0 00.4.23 4.08 4.08 0 012.27 4.93 2 2 0 00-.09.45 2 2 0 003.67 1.36 2 2 0 00.23-.4 4.08 4.08 0 014.93-2.27 2 2 0 00.45.09 2 2 0 001.36-3.67 2 2 0 00-.4-.23zM148.6 652.2a4.08 4.08 0 01-2.27-4.93 2 2 0 00.09-.45 2 2 0 00-3.67-1.36 2 2 0 00-.23.4 4.08 4.08 0 01-4.92 2.28 2 2 0 00-.45-.09 2 2 0 00-1.36 3.67 2 2 0 00.4.23 4.08 4.08 0 012.27 4.93 2 2 0 00-.09.45 2 2 0 003.67 1.36 2 2 0 00.23-.4 4.08 4.08 0 014.93-2.27 2 2 0 00.45.09 2 2 0 001.36-3.67 2 2 0 00-.41-.24zM755.6 255.2a4.08 4.08 0 01-2.27-4.93 2 2 0 00.09-.45 2 2 0 00-3.67-1.36 2 2 0 00-.23.4 4.08 4.08 0 01-4.92 2.28 2 2 0 00-.45-.09 2 2 0 00-1.36 3.67 2 2 0 00.4.23 4.08 4.08 0 012.27 4.93 2 2 0 00-.09.45 2 2 0 003.67 1.36 2 2 0 00.23-.4 4.08 4.08 0 014.93-2.27 2 2 0 00.45.09 2 2 0 001.36-3.67 2 2 0 00-.41-.24zM728.13 444.54a4.08 4.08 0 01-2.27-4.93 2 2 0 00.09-.45 2 2 0 00-3.67-1.36 2 2 0 00-.23.4 4.08 4.08 0 01-4.93 2.27 2 2 0 00-.45-.09 2 2 0 00-1.36 3.67 2 2 0 00.4.23 4.08 4.08 0 012.27 4.93 2 2 0 00-.09.45 2 2 0 003.67 1.36 2 2 0 00.23-.4 4.08 4.08 0 014.93-2.27 2 2 0 00.45.09 2 2 0 001.36-3.67 2 2 0 00-.4-.23zM748.6 67.21a4.08 4.08 0 01-2.27-4.93 2 2 0 00.09-.45 2 2 0 00-3.67-1.36 2 2 0 00-.23.4 4.08 4.08 0 01-4.93 2.27 2 2 0 00-.45-.09 2 2 0 00-1.36 3.67 2 2 0 00.4.23 4.08 4.08 0 012.27 4.93 2 2 0 00-.09.45 2 2 0 003.67 1.36 2 2 0 00.23-.4 4.08 4.08 0 014.93-2.27 2 2 0 00.45.09 2 2 0 001.36-3.67 2 2 0 00-.4-.23zM812.82 559.26a4.08 4.08 0 01-2.27-4.93 2 2 0 00.09-.45 2 2 0 00-3.67-1.36 2 2 0 00-.23.4 4.08 4.08 0 01-4.93 2.27 2 2 0 00-.45-.09 2 2 0 00-1.36 3.67 2 2 0 00.4.23 4.08 4.08 0 012.27 4.93 2 2 0 00-.09.45 2 2 0 003.67 1.36 2 2 0 00.23-.4 4.08 4.08 0 014.93-2.27 2 2 0 00.45.09 2 2 0 001.36-3.67 2 2 0 00-.4-.23z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <circle cx={6.66} cy={257.78} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={749.83} cy={146.09} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={446.92} cy={395.96} r={7.5} fill="#f55f44" opacity={0.5} />
      <circle cx={446.92} cy={395.96} r={7.5} fill="#f55f44" opacity={0.5} />
      <circle cx={832.55} cy={346.34} r={6.66} fill="#f55f44" opacity={0.5} />
      <circle cx={294.17} cy={47.27} r={7.5} fill="#47e6b1" opacity={0.5} />
      <circle cx={721.49} cy={621.41} r={6.66} fill="#f55f44" opacity={0.5} />
      <path
        d="M487.1 468c-3.94 12.79 2 27.91 13.53 34.64 4.84 2.82 10.41 4.24 15.1 7.3 10.19 6.64 14.21 19.35 17.52 31.05 3.8 13.45 7.61 27.67 4.13 41.2-2.22 8.63-7.27 16.26-10.14 24.7a51.54 51.54 0 00-2.45 22c.42 3.94 1.4 8 4.1 10.94 3.9 4.2 10.18 4.83 15.82 5.84a76.78 76.78 0 0155.2 42.74"
        transform="translate(-180.4 -86.46)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#HappyBirthday_svg__a)"
      />
      <path
        d="M307.91 381.54c-3.94 12.79 2 27.91 13.53 34.64 4.84 2.82 10.41 4.24 15.1 7.3 10.19 6.64 14.21 19.35 17.52 31.05 3.8 13.45 7.61 27.67 4.13 41.2-2.22 8.63-7.27 16.26-10.14 24.7a51.54 51.54 0 00-2.45 22c.42 3.94 1.4 8 4.1 10.94 3.9 4.2 10.18 4.83 15.82 5.84a76.78 76.78 0 0155.2 42.74"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M637.45 372.4c-9.72 13.55-19.81 28.12-20.64 44.78-1.27 25.59 19.2 46.52 28.34 70.46a83.74 83.74 0 01-2.81 65.5c-4.46 9.22-10.82 18.38-10 28.59.47 6.23 3.59 11.9 6.1 17.63a99.4 99.4 0 01-5.77 89.75"
        transform="translate(-180.4 -86.46)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#HappyBirthday_svg__b)"
      />
      <path
        d="M458.25 285.94c-9.71 13.6-19.8 28.13-20.65 44.78-1.27 25.59 19.2 46.52 28.34 70.46a83.74 83.74 0 01-2.81 65.5c-4.46 9.22-10.82 18.38-10 28.59.47 6.23 3.59 11.9 6.1 17.63a99.4 99.4 0 01-5.77 89.75"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M773.83 494.28l4.7 38.31c.62 5.09 1.15 10.64-1.58 15-2.59 4.11-7.45 6.07-11.23 9.11-12.41 10-11.28 29.11-7 44.45s10.44 31.82 4.49 46.58c-2.46 6.09-6.8 11.22-10 16.94a51.87 51.87 0 00-6.2 32.18"
        transform="translate(-180.4 -86.46)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#HappyBirthday_svg__c)"
      />
      <path
        d="M594.6 407.82l4.7 38.31c.62 5.09 1.15 10.64-1.58 15-2.59 4.11-7.45 6.07-11.23 9.11-12.41 10-11.28 29.11-7 44.45s10.44 31.82 4.49 46.58c-2.46 6.09-6.8 11.22-10 16.94a51.87 51.87 0 00-6.2 32.18"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M895.7 336.82A113.6 113.6 0 00747 228.83a136.45 136.45 0 001.45-19.27 113.53 113.53 0 00-226.78-8.14 113.6 113.6 0 00-148.76 108c0 57 42 138 96.65 152.35l8.51 4.86-4.62 15.83h27.36l-5.94-15.85 8.47-4.84c42.26-11.09 76.91-62 90.48-110.83a83 83 0 0024.22 11l8.51 4.86-4.55 15.79h27.36l-5.94-15.85 8.47-4.84a79.21 79.21 0 0018-7.31c7.31 54.78 46.2 121.66 95.41 134.57l8.51 4.86-4.62 15.83h27.36L790.59 494l8.47-4.84c54.69-14.35 96.64-95.38 96.64-152.34z"
        transform="translate(-180.4 -86.46)"
        fill="url(#HappyBirthday_svg__d)"
        opacity={0.7}
      />
      <path
        fill="#f55f44"
        d="M324.76 390.14h-26.48l4.64-15.88h15.88l5.96 15.88zM420.72 222.7c0 60.68-49.19 149.57-109.86 149.57S201 283.37 201 222.7a109.865 109.865 0 01219.73 0z"
      />
      <path
        fill="#535461"
        d="M318.8 374.92h-15.88l-9.27-5.29h34.42l-9.27 5.29z"
      />
      <path
        d="M271.15 137.32s-46.33 25.15-52.95 75.45"
        fill="#fff"
        opacity={0.1}
      />
      <path
        fill="#4d8af0"
        d="M468.43 293.56h-26.48l4.64-15.88h15.88l5.96 15.88z"
      />
      <path
        d="M564.39 126.12c0 60.68-49.19 149.57-109.86 149.57s-109.86-88.9-109.86-149.57a109.865 109.865 0 01219.73 0z"
        fill={color}
      />
      <path
        fill="#535461"
        d="M462.47 278.34h-15.88l-9.27-5.3h34.42l-9.27 5.3z"
      />
      <path
        d="M414.82 40.74s-46.33 25.15-52.95 75.45"
        fill="#fff"
        opacity={0.1}
      />
      <path
        fill="#3ad29f"
        d="M610.89 416.71h-26.48l4.64-15.89h15.88l5.96 15.89zM706.85 249.26c0 60.68-49.19 149.57-109.86 149.57s-109.87-88.89-109.87-149.57a109.865 109.865 0 11219.73 0z"
      />
      <path
        fill="#535461"
        d="M604.93 401.48h-15.88l-9.27-5.29h34.42l-9.27 5.29z"
      />
      <path
        d="M557.28 163.88s-46.33 25.15-52.95 75.45"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M696.81 521.89c-6.37-6.39-15.66-8.93-26.16-7.16-9.82 1.66-19.65 7-27.67 15a32.34 32.34 0 00-5.79 7.94 32.41 32.41 0 00-5.74-8.23c-7.88-8.15-17.62-13.64-27.45-15.44-10.46-2-19.79.43-26.28 6.71s-9.15 15.53-7.53 26.05c1.52 9.84 6.7 19.75 14.59 27.88 16.58 17.11 49.67 10.43 51.07 10.13l.41-.09 1.27.29c1.4.32 34.37 7.57 51.24-9.25 8-8 13.37-17.81 15.07-27.63 1.85-10.51-.66-19.8-7.03-26.2zm-66.52 53c-8 1.08-27.93 2.54-37.82-7.67-6.36-6.57-10.52-14.41-11.71-22.1-1.08-7 .48-13 4.42-16.78a14.78 14.78 0 015.39-3.3 22.24 22.24 0 0111.52-.58c7.64 1.43 15.36 5.83 21.72 12.4 9.89 10.14 7.81 30.06 6.48 38.02zm63.11-28.61c-1.32 7.66-5.61 15.44-12.09 21.89-10.07 10-30 8.23-37.95 7-1.19-8-2.93-27.89 7.14-37.93 6.48-6.45 14.27-10.72 21.93-12a22.24 22.24 0 0111.51.78 14.78 14.78 0 015.34 3.4c3.86 3.87 5.32 9.85 4.12 16.85z"
        transform="translate(-180.4 -86.46)"
        fill="url(#HappyBirthday_svg__e)"
        opacity={0.5}
      />
      <path
        d="M458.7 496.13l-3.15.66c-1.34.28-33 6.67-48.87-9.7-7.54-7.78-12.5-17.26-14-26.68-1.56-10.07 1-18.92 7.2-24.93s15.13-8.29 25.14-6.42c9.37 1.75 18.69 7 26.23 14.79 15.86 16.37 8.48 47.82 8.16 49.15zm-46.53-56.49a14.14 14.14 0 00-5.16 3.16c-3.76 3.65-5.26 9.35-4.23 16.06 1.14 7.35 5.12 14.86 11.21 21.15 9.47 9.77 28.54 8.37 36.19 7.34 1.27-7.61 3.27-26.63-6.2-36.4-6.09-6.28-13.47-10.5-20.79-11.86a21.28 21.28 0 00-11.02.55z"
        fill={color}
      />
      <path
        d="M454.02 496.27l-.7-3.14c-.3-1.34-7.14-32.91 9-49 7.68-7.65 17.08-12.74 26.48-14.33 10-1.7 18.93.73 25 6.85s8.5 15 6.77 25c-1.62 9.39-6.74 18.78-14.42 26.43-16.14 16.09-47.69 9.15-49 8.85zm47.5-55.73a21.28 21.28 0 00-11-.75c-7.34 1.24-14.79 5.33-21 11.5-9.64 9.61-8 28.65-6.83 36.29 7.63 1.16 26.68 2.89 36.31-6.71 6.2-6.18 10.3-13.62 11.57-21 1.15-6.69-.25-12.42-3.95-16.13a14.14 14.14 0 00-5.1-3.2z"
        fill={color}
      />
      <path
        fill="url(#HappyBirthday_svg__f)"
        d="M608.43 487.86H301.42v61.43h15.95v177.79h275.11V549.29h15.95v-61.43z"
        opacity={0.5}
      />
      <path fill="#535461" d="M320.85 506.43H589v217.63H320.85z" />
      <path fill={color} d="M429.66 545.29h50.52v178.76h-50.52z" />
      <path opacity={0.1} d="M320.85 494.77H589v54.41H320.85z" />
      <path fill="#535461" d="M305.31 490.88h299.24v54.41H305.31z" />
      <path fill={color} d="M429.66 490.88h50.52v54.41h-50.52z" />
    </svg>
  );
};

SvgHappyBirthday.propTypes = {
  color: PropTypes.string
};
SvgHappyBirthday.defaultProps = {
  color: "primary"
};
export default SvgHappyBirthday;
