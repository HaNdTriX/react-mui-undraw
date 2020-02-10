import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNerd = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 742.91 774.18"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Nerd_svg__a"
          x1={574}
          y1={811}
          x2={574}
          y2={77}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <clipPath id="Nerd_svg__b" transform="translate(-223.59 -77)">
          <path
            data-name="&lt;Clipping Path&gt;"
            d="M645.91 527.12h-19.77v-95.38a16.4 16.4 0 00-16.35-16.35h-73.58a16.4 16.4 0 00-16.35 16.35v95.38h-19.77c-106.79 0-194.16 87.37-194.16 194.16v63.37A16.4 16.4 0 00322.28 801h501.44a16.4 16.4 0 0016.35-16.35v-63.37c0-106.79-87.37-194.16-194.16-194.16z"
            fill="#ffd9cb"
          />
        </clipPath>
      </defs>
      <path
        d="M649 529.45h-18.37L631 444c60.34-18.63 105.11-72.74 121.57-134a12.21 12.21 0 004.66.93h10.35a12.37 12.37 0 0012.34-12.34v-59.37a12.37 12.37 0 00-12.34-12.34h-10.35a12.25 12.25 0 00-1.63.12C739.28 141.57 664.19 77 574 77s-165.28 64.57-181.6 150a12.25 12.25 0 00-1.63-.12h-10.35a12.37 12.37 0 00-12.34 12.34v59.37a12.37 12.37 0 0012.34 12.34h10.35a12.21 12.21 0 004.66-.93c16.46 61.26 61.6 115.36 121.94 134v85.45H499c-109.78 0-199.6 89.82-199.6 199.6v65.15a16.86 16.86 0 0016.86 16.8h515.48a16.86 16.86 0 0016.81-16.81V729c0-109.73-89.82-199.55-199.55-199.55z"
        transform="translate(-223.59 -77)"
        fill="url(#Nerd_svg__a)"
      />
      <path
        d="M288.15 53.07c12-2.69 23.59 6.36 35.87 6.64 9.59.22 18.5-4.92 28-6.12s18.78 1.5 28.15 2.86 19.82 1.07 27.1-5M288.15 69.42c12-2.69 23.59 6.36 35.87 6.64 9.59.22 18.5-4.92 28-6.12s18.78 1.5 28.15 2.86 19.82 1.07 27.1-5"
        fill="#bf655b"
        opacity={0.2}
      />
      <circle
        data-name="&lt;Ellipse&gt;"
        cx={349.41}
        cy={189.86}
        r={179.86}
        fill="#ffd9cb"
      />
      <path
        d="M375.3 249.82c0 6.77-11.59 12.26-25.89 12.26s-25.89-5.49-25.89-12.26 11.59-12.27 25.89-12.27 25.89 5.45 25.89 12.27z"
        fill="#fff"
      />
      <circle cx={275.83} cy={154.44} r={17.71} fill="#383f4d" />
      <circle cx={422.99} cy={154.44} r={17.71} fill="#383f4d" />
      <circle cx={281.28} cy={148.98} r={5.45} fill="#fff" />
      <circle cx={428.44} cy={148.98} r={5.45} fill="#fff" />
      <path
        d="M455.69 116.28h-64a16.4 16.4 0 00-16.35 16.35v43.6a16.4 16.4 0 0016.35 16.35h64a16.4 16.4 0 0016.35-16.35v-43.6a16.4 16.4 0 00-16.35-16.35zm2.72 49.06a16.4 16.4 0 01-16.35 16.35h-36.78a16.4 16.4 0 01-16.35-16.35v-21.8a16.4 16.4 0 0116.35-16.35h36.79a16.4 16.4 0 0116.34 16.34zM226.78 132.63v43.6a16.4 16.4 0 0016.35 16.35h64a16.4 16.4 0 0016.35-16.35v-43.6a16.4 16.4 0 00-16.35-16.35h-64a16.4 16.4 0 00-16.35 16.35zm13.63 10.9a16.4 16.4 0 0116.35-16.35h36.79a16.4 16.4 0 0116.35 16.35v21.8a16.4 16.4 0 01-16.35 16.35h-36.8a16.4 16.4 0 01-16.34-16.34z"
        fill="#69f0ae"
      />
      <path
        d="M372.72 159.92a41.48 41.48 0 00-45.26 0c-3.78 2.42-8.93 2.93-12 .11l-3.85-3.85c-3-2.78-1.31-9.51 4.65-13.39a62 62 0 0167.59 0c6 3.88 7.68 10.62 4.65 13.39l-3.81 3.82c-3.03 2.84-8.18 2.34-11.97-.08z"
        fill="#69f0ae"
      />
      <path
        d="M331.32 322.44c1.36-5.54 7.84-8 13.5-8.76 8.4-1.17 18.36 0 23 7.13"
        fill="#bf655b"
        opacity={0.2}
      />
      <rect
        x={515.64}
        y={155.8}
        width={34.06}
        height={81.76}
        rx={12}
        ry={12}
        fill="#ffd9cb"
      />
      <rect
        x={372.7}
        y={232.8}
        width={34.06}
        height={81.76}
        rx={12}
        ry={12}
        transform="rotate(-180 277.935 235.175)"
        fill="#ffd9cb"
      />
      <path
        data-name="&lt;Clipping Path&gt;"
        d="M422.32 450.12h-19.77v-95.38a16.4 16.4 0 00-16.35-16.35h-73.58a16.4 16.4 0 00-16.35 16.35v95.38H276.5c-106.79 0-194.16 87.37-194.16 194.16v63.37A16.4 16.4 0 0098.69 724h501.44a16.4 16.4 0 0016.35-16.35v-63.37c0-106.79-87.37-194.16-194.16-194.16z"
        fill="#ffd9cb"
      />
      <g clipPath="url(#Nerd_svg__b)">
        <path
          d="M304.41 456.9c27.21 7.92 57.11 15.72 83.09 4.39 19.23-8.39 33.18-26.17 52.44-34.48 24.27-10.47 52.27-4.15 77.4 4a583.86 583.86 0 01156.64 78.59c16.11 11.4 31.92 23.91 43 40.27 9.75 14.43 15.38 31.26 19.42 48.21 6.56 27.51 9.19 56.48 2.94 84.07s-22.13 53.74-46.35 68.34c-21.86 13.18-48.2 16-73.59 18.59-22.56 2.27-45.14 4.54-67.81 5.14-83.71 2.21-166.53-18.36-250.26-19.5-80.52-1.09-164.11 15.39-239.72-12.33-18.19-6.67-36.15-16.4-47.19-32.32C.89 690.35-.07 665.02-.01 641.27c0-12.34.23-24.85 3.57-36.72 3.62-12.86 10.77-24.43 18.48-35.35 50.82-71.94 135-127.21 223.17-138.81 23.2-3.07 36.28 19.82 59.2 26.51z"
          fill={color}
        />
      </g>
    </svg>
  );
};

SvgNerd.propTypes = {
  color: PropTypes.string
};
SvgNerd.defaultProps = {
  color: "primary"
};
const MemoSvgNerd = React.memo(SvgNerd);
export default MemoSvgNerd;
