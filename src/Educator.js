import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgEducator = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 534.14 692"
      width="100%"
      height="auto"
      {...props}
    >
      <circle
        data-name="319da30a-b754-4c25-967a-210e088b184d"
        cx={267.07}
        cy={179.86}
        r={179.86}
        fill="#ffd9cb"
      />
      <path
        d="M292.96 239.82c0 6.77-11.59 12.26-25.89 12.26s-25.89-5.49-25.89-12.26 11.59-12.27 25.89-12.27 25.89 5.45 25.89 12.27z"
        fill="#fff"
      />
      <circle cx={193.49} cy={144.44} r={17.71} fill="#383f4d" />
      <circle cx={340.65} cy={144.44} r={17.71} fill="#383f4d" />
      <circle cx={198.94} cy={138.98} r={5.45} fill="#fff" />
      <circle cx={346.1} cy={138.98} r={5.45} fill="#fff" />
      <path
        d="M373.35 106.28h-64A16.4 16.4 0 00293 122.63v43.6a16.4 16.4 0 0016.35 16.35h64a16.4 16.4 0 0016.35-16.35v-43.6a16.4 16.4 0 00-16.35-16.35zm2.72 49.06a16.4 16.4 0 01-16.35 16.35h-36.78a16.4 16.4 0 01-16.35-16.35v-21.8a16.4 16.4 0 0116.35-16.35h36.79a16.4 16.4 0 0116.34 16.34zM144.44 122.63v43.6a16.4 16.4 0 0016.35 16.35h64a16.4 16.4 0 0016.35-16.35v-43.6a16.4 16.4 0 00-16.35-16.35h-64a16.4 16.4 0 00-16.35 16.35zm13.63 10.9a16.4 16.4 0 0116.35-16.35h36.79a16.4 16.4 0 0116.35 16.35v21.8a16.4 16.4 0 01-16.35 16.35h-36.8a16.4 16.4 0 01-16.34-16.34z"
        fill="#69f0ae"
      />
      <path
        d="M290.38 149.92a41.48 41.48 0 00-45.26 0c-3.78 2.42-8.93 2.93-12 .11l-3.85-3.85c-3-2.78-1.31-9.51 4.65-13.39a62 62 0 0167.59 0c6 3.88 7.68 10.62 4.65 13.39l-3.81 3.82c-3.03 2.84-8.18 2.34-11.97-.08z"
        fill="#69f0ae"
      />
      <path
        d="M248.98 312.44c1.36-5.54 7.84-8 13.5-8.76 8.4-1.17 18.36 0 23 7.13"
        fill="#bf655b"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <rect
        x={433.3}
        y={145.8}
        width={34.06}
        height={81.76}
        rx={12}
        fill="#ffd9cb"
      />
      <rect
        x={66.77}
        y={145.79}
        width={34.06}
        height={81.76}
        rx={12}
        fill="#ffd9cb"
      />
      <path
        d="M213.76 440.25l106.45-.13v-95.38a16.4 16.4 0 00-16.35-16.35h-73.58a16.4 16.4 0 00-16.35 16.35v95.38"
        fill="#ffd9cb"
      />
      <path
        d="M205.81 43.07c12-2.69 23.59 6.36 35.87 6.64 9.59.22 18.5-4.92 28-6.12s18.78 1.5 28.15 2.86 19.82 1.07 27.1-5M205.81 59.42c12-2.69 23.59 6.36 35.87 6.64 9.59.22 18.5-4.92 28-6.12s18.78 1.5 28.15 2.86 19.82 1.07 27.1-5"
        fill="#bf655b"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M213.93 418.12h-19.77C87.37 418.12 0 505.49 0 612.28v63.37A16.4 16.4 0 0016.35 692h501.44a16.4 16.4 0 0016.35-16.35v-63.37c0-106.79-87.37-194.16-194.16-194.16h-19.77c-37.026 7.187-71.886 7.37-104.45.13"
        fill={color}
      />
    </svg>
  );
};

SvgEducator.propTypes = {
  color: PropTypes.string
};
SvgEducator.defaultProps = {
  color: "primary"
};
export default SvgEducator;
