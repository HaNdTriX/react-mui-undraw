import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgAircraft = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1063.13 672.74"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M859.64 396.66c-9.77 3.6-26.93 6.56-46.79 8.94-54 6.48-128 8.78-128 8.78s-380.41 31.55-665.52-85.79c0 0-41.47-21.74-3-51a125.29 125.29 0 0118.82-11.48l.47-.47a99.89 99.89 0 0114.13-10.89c14.77-9.55 39.71-20.87 70.07-15.74l748.82 121.11s27.35 23.11-9 36.54z"
        fill="#3f3d56"
      />
      <path
        d="M710.44 341.77L867.2 230.55l69.09 11.95-67.65 117.62s-156.4 1.25-158.2-18.35zM315.78 274.2l312.25-87.57 50.33 10.52-141.05 63.45-44.08 49.32-177.45-35.72z"
        fill="#3f3d56"
      />
      <path
        d="M812.85 405.6c-54 6.48-128 8.78-128 8.78s-380.41 31.55-665.52-85.79c0 0-41.47-21.74-3-51l.13.54s61.52 41.58 355.46 76.29z"
        fill={color}
      />
      <path
        d="M762.66 403.2l139.6 57 35.07-3.89-83.5-62.76s-101-21.55-91.17 9.65z"
        fill="#3f3d56"
      />
      <path
        d="M67.08 284.22c-6.66.11-21.92-11.06-31.41-18.58a99.89 99.89 0 0114.13-10.89c7.65 5.87 21.26 15.37 28.83 15 10.93-.45-1.52 14.29-11.55 14.47z"
        fill={color}
      />
      <path
        d="M701.29 600.23l-89.63 4.69-252-169.92-46.78-31.55-22.72-15.33c42.63-36 216.56 13.65 216.56 13.65 3.33 2.81 4.39 7.48 4.24 12.64-.29 9.66-4.83 21-6.58 25.08-.42 1-.68 1.53-.68 1.53z"
        fill="#3f3d56"
      />
      <path
        d="M406.11 512.13l-15.55 9.84 9.42-17.13a15.35 15.35 0 00-9.38-3.35h-.25a17.21 17.21 0 01-3.22-.24l-5.26 3.34 2.25-4.1a18.78 18.78 0 01-9.2-7l-9.41 6 5.94-10.82c-5.5-6.61-12.92-10.66-21.09-10.66-9.79 0-18.51 5.82-24.14 14.9a18.06 18.06 0 01-16 8.6h-.52c-10.81 0-19.57 12.25-19.57 27.37s8.76 27.37 19.57 27.37a14.6 14.6 0 006.81-1.71 28.28 28.28 0 0123.69-.46 24.71 24.71 0 0020.14 0 28.27 28.27 0 0123.47.45 14.72 14.72 0 006.75 1.67c10.81 0 19.57-12.25 19.57-27.37a34.77 34.77 0 00-4.02-16.7z"
        fill="#f2f2f2"
      />
      <path
        d="M376.86 552.18a29 29 0 00-16.77 1.82 24.63 24.63 0 01-20.13 0 28.21 28.21 0 00-23.69.46 14.73 14.73 0 01-6.82 1.71c-9.6 0-17.59-9.68-19.25-22.44a18.26 18.26 0 004.8-5.17c5.63-9.07 14.35-14.89 24.14-14.89s18.42 5.7 24.04 14.7a18.5 18.5 0 0015.95 8.77h.25c7.64-.02 14.26 6.1 17.48 15.04z"
        opacity={0.03}
      />
      <path
        d="M845.11 499.13l-15.55 9.84 9.42-17.13a15.35 15.35 0 00-9.38-3.35h-.25a17.21 17.21 0 01-3.22-.24l-5.26 3.34 2.25-4.1a18.78 18.78 0 01-9.2-7l-9.41 6 5.94-10.82c-5.5-6.61-12.92-10.66-21.09-10.66-9.79 0-18.51 5.82-24.14 14.9a18.06 18.06 0 01-16 8.6h-.52c-10.81 0-19.57 12.25-19.57 27.37s8.76 27.37 19.57 27.37a14.6 14.6 0 006.81-1.71 28.28 28.28 0 0123.69-.46 24.71 24.71 0 0020.14 0 28.27 28.27 0 0123.47.45 14.72 14.72 0 006.75 1.67c10.81 0 19.57-12.25 19.57-27.37a34.77 34.77 0 00-4.02-16.7z"
        fill="#f2f2f2"
      />
      <path
        d="M815.86 539.18a29 29 0 00-16.77 1.82 24.63 24.63 0 01-20.13 0 28.21 28.21 0 00-23.69.46 14.73 14.73 0 01-6.82 1.71c-9.6 0-17.59-9.68-19.25-22.44a18.26 18.26 0 004.8-5.17c5.63-9.07 14.35-14.89 24.14-14.89s18.42 5.7 24.04 14.7a18.5 18.5 0 0016 8.77h.25c7.59-.02 14.21 6.1 17.43 15.04z"
        opacity={0.03}
      />
      <path
        d="M845.11 171.13l-15.55 9.84 9.42-17.13a15.35 15.35 0 00-9.38-3.35h-.25a17.21 17.21 0 01-3.22-.24l-5.26 3.34 2.25-4.1a18.78 18.78 0 01-9.2-7l-9.41 6 5.94-10.82c-5.5-6.61-12.92-10.66-21.09-10.66-9.79 0-18.51 5.82-24.14 14.9a18.06 18.06 0 01-16 8.6h-.52c-10.81 0-19.57 12.25-19.57 27.37s8.76 27.37 19.57 27.37a14.6 14.6 0 006.81-1.71 28.28 28.28 0 0123.69-.46 24.71 24.71 0 0020.14.05 28.27 28.27 0 0123.47.45 14.72 14.72 0 006.75 1.67c10.81 0 19.57-12.25 19.57-27.37a34.77 34.77 0 00-4.02-16.75z"
        fill="#f2f2f2"
      />
      <path
        d="M815.86 211.18a29 29 0 00-16.77 1.82 24.63 24.63 0 01-20.13 0 28.21 28.21 0 00-23.69.46 14.73 14.73 0 01-6.82 1.71c-9.6 0-17.59-9.68-19.25-22.44a18.26 18.26 0 004.8-5.17c5.63-9.07 14.35-14.89 24.14-14.89s18.42 5.7 24.04 14.7a18.5 18.5 0 0016 8.77h.25c7.59-.02 14.21 6.1 17.43 15.04z"
        opacity={0.03}
      />
      <path
        d="M203.09 135.74l-7.75 4.91 4.7-8.54a7.62 7.62 0 00-4.68-1.68h-.12a9.54 9.54 0 01-1.61-.12l-2.62 1.66 1.12-2a9.36 9.36 0 01-4.59-3.49l-4.69 3 3-5.39a13.71 13.71 0 00-10.52-5.32c-4.88 0-9.23 2.9-12 7.43a9 9 0 01-8 4.29h-.26c-5.39 0-9.76 6.12-9.76 13.66s4.37 13.65 9.76 13.65a7.32 7.32 0 003.4-.85 14.07 14.07 0 0111.82-.23 12.31 12.31 0 0010 0 14.08 14.08 0 0111.71.23 7.42 7.42 0 003.36.83c5.39 0 9.76-6.11 9.76-13.65a17.42 17.42 0 00-2.03-8.39z"
        fill="#f2f2f2"
      />
      <path
        d="M188.5 155.72a14.36 14.36 0 00-8.37.91 12.44 12.44 0 01-5 1.06 12.26 12.26 0 01-5.05-1.09 14.1 14.1 0 00-11.82.24 7.28 7.28 0 01-3.39.85c-4.79 0-8.78-4.83-9.61-11.19a9.4 9.4 0 002.4-2.58c2.8-4.53 7.15-7.43 12-7.43s9.18 2.87 12 7.34a9.22 9.22 0 008 4.37h.13c3.77 0 7.1 3.06 8.71 7.52z"
        opacity={0.03}
      />
      <path
        d="M893.09 624.74l-7.75 4.91 4.7-8.54a7.62 7.62 0 00-4.68-1.68h-.12a9.54 9.54 0 01-1.61-.12l-2.62 1.66 1.12-2a9.36 9.36 0 01-4.59-3.49l-4.69 3 3-5.39a13.71 13.71 0 00-10.52-5.32c-4.88 0-9.23 2.9-12 7.43a9 9 0 01-8 4.29h-.26c-5.39 0-9.76 6.12-9.76 13.66s4.37 13.65 9.76 13.65a7.32 7.32 0 003.4-.85 14.07 14.07 0 0111.82-.23 12.31 12.31 0 0010 0 14.08 14.08 0 0111.71.23 7.42 7.42 0 003.36.83c5.39 0 9.76-6.11 9.76-13.65a17.42 17.42 0 00-2.03-8.39z"
        fill="#f2f2f2"
      />
      <path
        d="M878.5 644.72a14.36 14.36 0 00-8.37.91 12.44 12.44 0 01-5 1.06 12.26 12.26 0 01-5.05-1.09 14.1 14.1 0 00-11.82.24 7.28 7.28 0 01-3.39.85c-4.79 0-8.78-4.83-9.61-11.19a9.4 9.4 0 002.4-2.58c2.8-4.53 7.15-7.43 12-7.43s9.18 2.87 12 7.34a9.22 9.22 0 008 4.37h.13c3.77 0 7.1 3.06 8.71 7.52z"
        opacity={0.03}
      />
      <path
        d="M173.09 650.74l-7.75 4.91 4.7-8.54a7.62 7.62 0 00-4.68-1.68h-.12a9.54 9.54 0 01-1.61-.12l-2.62 1.66 1.12-2a9.36 9.36 0 01-4.59-3.49l-4.69 3 3-5.39a13.71 13.71 0 00-10.52-5.32c-4.88 0-9.23 2.9-12 7.43a9 9 0 01-8 4.29h-.26c-5.39 0-9.76 6.12-9.76 13.66s4.37 13.65 9.76 13.65a7.32 7.32 0 003.4-.85 14.07 14.07 0 0111.82-.23 12.31 12.31 0 0010 0 14.08 14.08 0 0111.71.23 7.42 7.42 0 003.36.83c5.39 0 9.76-6.11 9.76-13.65a17.42 17.42 0 00-2.03-8.39z"
        fill="#f2f2f2"
      />
      <path
        d="M158.5 670.72a14.36 14.36 0 00-8.37.91 12.44 12.44 0 01-5 1.06 12.26 12.26 0 01-5.05-1.09 14.1 14.1 0 00-11.82.24 7.28 7.28 0 01-3.39.85c-4.79 0-8.78-4.83-9.61-11.19a9.4 9.4 0 002.4-2.58c2.8-4.53 7.15-7.43 12-7.43s9.18 2.87 12 7.34a9.22 9.22 0 008 4.37h.13c3.77 0 7.1 3.06 8.71 7.52z"
        opacity={0.03}
      />
      <path
        d="M531.11 34.13l-15.55 9.84 9.42-17.13a15.35 15.35 0 00-9.38-3.35h-.25a17.21 17.21 0 01-3.22-.24l-5.26 3.34 2.25-4.1a18.78 18.78 0 01-9.2-7l-9.41 6 5.94-10.82C490.95 4.06 483.53.01 475.36.01c-9.79 0-18.51 5.82-24.14 14.9a18.06 18.06 0 01-16 8.6h-.52c-10.81 0-19.57 12.25-19.57 27.37s8.76 27.37 19.57 27.37a14.6 14.6 0 006.81-1.71 28.28 28.28 0 0123.69-.46 24.71 24.71 0 0020.14.05 28.27 28.27 0 0123.47.45 14.72 14.72 0 006.75 1.67c10.81 0 19.57-12.25 19.57-27.37a34.77 34.77 0 00-4.02-16.75z"
        fill="#f2f2f2"
      />
      <path
        d="M501.86 74.18A29 29 0 00485.09 76a24.63 24.63 0 01-20.13 0 28.21 28.21 0 00-23.69.46 14.73 14.73 0 01-6.82 1.71c-9.6 0-17.59-9.68-19.25-22.44a18.26 18.26 0 004.8-5.17c5.63-9.07 14.35-14.89 24.14-14.89s18.42 5.7 24.04 14.7a18.5 18.5 0 0016 8.77h.25c7.59-.02 14.21 6.1 17.43 15.04z"
        opacity={0.03}
      />
      <path
        d="M1061.09 205.74l-7.75 4.91 4.7-8.54a7.62 7.62 0 00-4.68-1.68h-.12a9.54 9.54 0 01-1.61-.12l-2.62 1.66 1.12-2a9.36 9.36 0 01-4.59-3.49l-4.69 3 3-5.39a13.71 13.71 0 00-10.52-5.32c-4.88 0-9.23 2.9-12 7.43a9 9 0 01-8 4.29h-.26c-5.39 0-9.76 6.12-9.76 13.66s4.37 13.65 9.76 13.65a7.32 7.32 0 003.4-.85 14.07 14.07 0 0111.82-.23 12.31 12.31 0 0010 0 14.08 14.08 0 0111.71.23 7.42 7.42 0 003.36.83c5.39 0 9.76-6.11 9.76-13.65a17.42 17.42 0 00-2.03-8.39z"
        fill="#f2f2f2"
      />
      <path
        d="M1046.5 225.72a14.36 14.36 0 00-8.37.91 12.44 12.44 0 01-5 1.06 12.26 12.26 0 01-5-1.09 14.1 14.1 0 00-11.82.24 7.28 7.28 0 01-3.39.85c-4.79 0-8.78-4.83-9.61-11.19a9.4 9.4 0 002.4-2.58c2.8-4.53 7.15-7.43 12-7.43s9.18 2.87 12 7.34a9.22 9.22 0 007.95 4.37h.13c3.77 0 7.1 3.06 8.71 7.52z"
        opacity={0.03}
      />
    </svg>
  );
};

SvgAircraft.propTypes = {
  color: PropTypes.string
};
SvgAircraft.defaultProps = {
  color: "primary"
};
export default SvgAircraft;
