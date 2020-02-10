import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgBackInTheDay = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1113.61 785.89"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="BackInTheDay_svg__a"
          x1={636.53}
          y1={415}
          x2={989.86}
          y2={415}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M1047 458.23c-39.15 53.72-26.23 130.4-3.6 191.49 7.58 20.45 16.19 42.08 12.26 64.33-4.8 27.2-27.36 47.58-50.81 58.68-42.75 20.23-93.25 17-131.49-8.49-33-22-56.23-58.56-89.87-79.51-56.3-35.05-129.39-19.39-192.05 7.37-44.33 18.93-92.86 43.31-136.08 25.85-30.4-12.3-50.87-43.61-61.64-77.08-5.2-16.16-8.84-33.7-19.2-46.35-6.16-7.52-14.3-12.76-22.67-17.14-76.39-40-174.65-15-248.71-59.63-50-30.14-81.12-88.63-94.05-150.12s-9.73-126.4-4.58-190.2c3.66-45.34 9.45-93.79 36.71-129.42C70.05 10.32 118.36-4.66 161.58 1.25s81.94 29.94 115.84 58.54c42.37 35.75 81.38 80.62 134.11 94.18 35.91 9.24 74.06 2.7 111.39-.19 62.4-4.82 124.58.73 186.38 7 59.16 6 118.73 12.7 174.76 32.37 39.65 13.92 71.08 40.23 108.41 58.21 24.33 11.72 51.1 14.44 74 29.58 28.26 18.65 53.8 51.69 45.51 91.34-7.84 37.67-44.2 57.44-64.98 85.95z"
        fill={color}
        opacity={0.1}
      />
      <ellipse cx={554.08} cy={505.95} rx={467.5} ry={172} fill={color} />
      <path
        d="M268.25 439.28s-41.09 38.52 5.56 76.18l6.42-3.85s-37.24-15-2.14-70.62zM519.91 448.27a44.56 44.56 0 0117.12 28.25c3.42 19.26 1.71 30.82 8.13 33.38s-5.68 7.28-5.68 7.28-12.72-17.55-11-28.25-5.56-27.39-12.84-30.82z"
        fill="#4a4559"
      />
      <path
        d="M525.26 524.19c.21 9.15 6.21 20.17 29.32 27.66 0 0 27.39 6 27.39-10.7s-8.56-33.81-19.69-39.38c-6.55-3.28-16.36-.62-23.33 2.12a21.43 21.43 0 00-13.69 20.3zM266.53 530.44v-22.68l10.7 6.42L312 579.09l-45.47-48.65z"
        fill="#d7d9e1"
      />
      <path
        opacity={0.1}
        d="M266.53 530.44v-22.68l10.7 6.42L312 579.09l-45.47-48.65z"
      />
      <path
        fill="#d7d9e1"
        d="M203.19 347.69l18.83-13.7v72.33l-18.83-15.41v-43.22zM440.94 260.16L331.59 303.6l4.28 146.81 105.07 29.31V260.16z"
      />
      <path
        fill="#e6e8ec"
        d="M293.5 439.28v17.55l6.85 7.7 62.06-3.42-11.99-21.83H293.5z"
      />
      <path
        fill="#d7d9e1"
        d="M215.6 322.86l34.46-23.75v146.37l-34.46-33.17v-89.45z"
      />
      <path
        fill="#e6e8ec"
        d="M249.84 298.89l166.49-5.13-4.7 149.8-161.79 1.71V298.89z"
      />
      <path fill="#fff" d="M266.53 315.59h130.54v108.28H266.53z" />
      <path
        fill="#e6e8ec"
        d="M440.73 259.95l86.03 3.42-2.57 208.01-83.46 8.13V259.95z"
      />
      <path fill="#fff" d="M453.57 282.63h61.2v89.02l-61.2 4.71v-93.73z" />
      <path
        fill="#d7d9e1"
        d="M461.7 293.76l44.94-2.14v11.55l-44.94 1.72v-11.13z"
      />
      <path
        fill="#fff"
        d="M456.57 388.35l50.07-3.86v21.4l-50.07 6.42v-23.96z"
      />
      <path
        fill="#d7d9e1"
        d="M266.53 507.76l206.73-12.84 40.66 64.63-200.73 21.4-46.66-73.19z"
      />
      <path
        fill="#f1f1f4"
        d="M283.23 513.32l126.26-5.56 23.96 46.65-118.12 12.41-32.1-53.5zM448.86 505.62h23.11l23.54 40.23-23.54 2.14-23.11-42.37zM416.33 507.76h24.4l8.13 16.69-24.39 2.14-8.14-18.83zM441.37 538.36l-.43-5.14h6.85l3.64 4.5h7.28l4.7 10.27-26.53 1.71-3.43-8.99 7.92-2.35z"
      />
      <path
        d="M544.31 505.62s23.09-6.73 30.68 17.82c4.32 14-11.4 25.78-23.59 17.73l-.67-.45c-17.98-12.41-15.84-34.24-6.42-35.1z"
        fill="#e6e8ec"
      />
      <path
        fill="#f1f1f4"
        d="M532.164 513.66l6.688-6.008 15.445 17.19-6.687 6.009zM540.733 506.392l6.687-6.009 15.446 17.19-6.688 6.009z"
      />
      <path
        d="M952.21 343.16c-25.08-42.48-46-57.1-60.45-61.31a69.68 69.68 0 01-3-15.22 6.8 6.8 0 001.39.48c3.68.81 7.49-1 10-3.82a13.55 13.55 0 001.88-2c2.49-3.34 3.58-7.47 4.61-11.49l12.6-49.13a97.46 97.46 0 003.28-16.86c1.35-18.08-8.35-36.53-24.13-45.92-6.82-4.06-15.45-6.42-22.82-3.76a95.2 95.2 0 00-17.1-1.54c-3.13 0-6.33.15-9.31-.89-2.28-.8-4.32-2.25-6.48-3.38-9.63-5-20.32-3.14-30.5-1.85-7.52 1-19.74-1.38-25.5 5.15a10.78 10.78 0 00-2.56 3.26c-1.32 2.56-1.14 6.29 1.1 7.91.93.67 2.13.94 2.83 1.89.87 1.18.61 2.88.31 4.35l-6.83 33.61.7.32a62.87 62.87 0 00-7.07 29c0 28.24 18.6 52.19 44.42 60.73a105.14 105.14 0 01.32 22.51c-1.65-.81-8.07 5.25-10.42 9.06l-.15.26c-4.14 7.12-2.07 5.09-8.28 21.36-3.59 9.4-2.34 52.71-2.44 90.37l-52.12 51.25c-27-4.26-99.17-12.19-101.69 24.15-1.51 21.77 13.64 54.14 29.6 81.64-6.56 3.95-11.46 8.57-14.07 14-20.7 42.72 29 69.16 29 69.16s6.59-2 16.15-4.75a47.18 47.18 0 011.58 6c-11.3.49-22 0-30.41-2.23a31.8 31.8 0 00-22.05 2.24c-8.83 4.31-18.48 11.26-18 20.91-.27 6.54 4.53 14.44 18.59 23.72 0 0 93.16 9.73 123.17-7.78 10.36-6 13.57-13.37 13.33-20.36.41-14-12.64-27.23-13.3-27.89-.6-2.47-1.23-5.21-1.78-7.83 8.07.76 22.48-.84 36-2.85 0 4.9-.06 7.61-.06 7.61v1s141.8-7.12 140.77-40.68 35.19-35.6 35.19-35.6 1.47-16.76 1.42-42.11c-.1-48.18-5.6-128.29-37.72-182.69zM784.13 491.32z"
        transform="translate(-60.42 -75.05)"
        fill="url(#BackInTheDay_svg__a)"
      />
      <path fill="#5f5d7e" d="M663.08 420.45h141v101h-141z" />
      <path
        d="M698.08 398.45s-105-22-108 22 62 132 62 132l59-12-17-68s67-15 71-16-67-58-67-58z"
        fill="#5f5d7e"
      />
      <path
        d="M698.08 398.45s-105-22-108 22 62 132 62 132l59-12-17-68s67-15 71-16-67-58-67-58z"
        opacity={0.1}
      />
      <path
        d="M643.08 564.45s10 19 7 27 71-11 71-11-6-23-5-26-73 10-73 10z"
        fill="#5f5d7e"
      />
      <path
        d="M708.08 434.45l-7.31 6.7-4.69 4.3s-24 39-55 15 24-42 35-43c4.89-.44 8.2-3.86 10.37-7.51a33 33 0 003.63-9.49z"
        fill="#fdc2cc"
      />
      <path
        d="M708.08 434.45l-7.31 6.7-4.69 4.3s-24 39-55 15 24-42 35-43c4.89-.44 8.2-3.86 10.37-7.51a33 33 0 003.63-9.49z"
        opacity={0.05}
      />
      <path
        d="M643.08 564.45s10 19 7 27 71-11 71-11-6-23-5-26-73 10-73 10zM708.08 434.45l-7.31 6.7c0-12.82-8.51-24.61-14.32-31.21a33 33 0 003.63-9.49z"
        opacity={0.1}
      />
      <path d="M752.08 333.45l-69 69s24 21 19 43l50-56z" fill="#c4c8e2" />
      <path
        d="M751.58 333.45v56l-8 9-23.78 26.6-18.22 20.4c5-22-19-43-19-43z"
        opacity={0.1}
      />
      <path
        d="M752.08 234.45s0 21 18 15 4 237 4 237-52-39-42-67 12-49 11-77 9-108 9-108z"
        fill="#d39999"
      />
      <path
        d="M753.08 178.45s15 41 0 72 89-17 89-17-23-11-15-64z"
        fill="#fdc2cc"
      />
      <path
        d="M744.08 365.45s1.13 20.88 0 33l-23.78 26.6a200.43 200.43 0 0111.78-21.6c3.69-5.73 4.52-28.56 4.63-54.63l8.73-8.73c-.86 14.1-1.36 25.36-1.36 25.36z"
        opacity={0.1}
      />
      <path
        d="M759.58 228.95c1.11-5.25-7.57 2.66-10.35 7.25l-.15.25c-4 7-2 5-8 21s2 132-7 146-16 31-16 31l16-6s6-18 10-22 2-41 2-41 3-64 6-78c2.38-11.08 5.15-47.36 7.5-58.5z"
        fill="#c4c8e2"
      />
      <path
        d="M759.58 228.95c1.11-5.25-7.57 2.66-10.35 7.25l-.15.25c-4 7-2 5-8 21s2 132-7 146-16 31-16 31l16-6s6-18 10-22 2-41 2-41 3-64 6-78c2.38-11.08 5.15-47.36 7.5-58.5z"
        opacity={0.1}
      />
      <path
        d="M783.08 478.45s-158-6-178 36 28 68 28 68 67-21 82-18 68-8 68-8z"
        fill="#5f5d7e"
      />
      <path
        d="M695.08 452.45s-36-20-56-7-18 48 10 49 43-16 43-16z"
        fill="#fdc2cc"
      />
      <path
        d="M808.08 215.45s32-22 79 59 35 220 35 220-35 2-34 35-136 40-136 40 2-328 16-337 40-17 40-17z"
        fill="#c4c8e2"
      />
      <path
        d="M808.22 275.11a43.8 43.8 0 00-18.2 35.64c-.17 30-.9 94.5-3.95 106.7-4 16-64 37-95 36 0 0-15 28 3 34s128 0 128 0 43-49 44-92 7-91 0-100c-5.76-7.42-29.92-40.03-57.85-20.34z"
        opacity={0.1}
      />
      <path
        d="M806.22 271.11a43.8 43.8 0 00-18.2 35.64c-.17 30-.9 94.5-3.95 106.7-4 16-64 37-95 36 0 0-15 28 3 34s128 0 128 0 43-49 44-92 7-91 0-100c-5.76-7.42-29.92-40.03-57.85-20.34z"
        fill="#c4c8e2"
      />
      <path
        d="M599.58 583.69c-14.36 7.14-31 21.63.55 43.76 0 0 90 10 119-8s0-47 0-47-66.38 17.65-98.24 9a30.24 30.24 0 00-21.31 2.24z"
        fill="#4c4c56"
      />
      <path
        d="M599.58 585.7c-14.36 6.83-31 20.69.55 41.87 0 0 90 9.57 119-7.65s0-45 0-45-66.38 16.88-98.24 8.64a31.48 31.48 0 00-21.31 2.14zM803.58 345.95s-5 63-38 77M754.08 185.45a128.32 128.32 0 015.91 26.71c6.31 2.12 15.59-3.21 22.59-3.21 18.33 0 23.49-20.51 35-33 .11-5.56 9.46 7.42 10.5.5z"
        opacity={0.1}
      />
      <path
        d="M842.08 145.45a63.28 63.28 0 01-1.92 15.5l-.21.79a63.31 63.31 0 112.13-16.29z"
        fill="#fdc2cc"
      />
      <path
        d="M887.08 275.45a237.92 237.92 0 00-22.36-32.72 254.43 254.43 0 0118.36 27.72c47 81 35 220 35 220s-35 2-34 35c.9 29.62-109.36 38.29-132 39.76v5.24s137-7 136-40 34-35 34-35 12-139-35-220zM834.12 73.6c-6.59-4-14.93-6.31-22-3.7a90.43 90.43 0 00-16.54-1.51c-3 0-6.11.15-9-.87a48.37 48.37 0 01-6.26-3.33c-9.31-5-19.63-3.09-29.46-1.82-8 1-21.49-1.85-26.11 7.28-1.27 2.52-1.1 6.19 1.06 7.78.9.66 2.06.93 2.73 1.86.84 1.16.59 2.83.3 4.28l-6.6 33a24.78 24.78 0 0019.64.9 55.24 55.24 0 005.17-2.41c4.93 3.21 10 .78 16 2.06 3.56.76 6.5 3.24 9 5.89a52.42 52.42 0 0113.36 26.6c.67 3.75 1.53 8.37 5.17 9.51a23.68 23.68 0 004.16.42c6.56.84 9.25 8.61 13.45 13.71 5.14 6.23 14.35 10.27 14.91 18.33.14 2.08-.31 4.37.85 6.09a5.13 5.13 0 003.19 2c4 .89 8.11-1.47 10.52-4.76s3.46-7.34 4.45-11.3l12.17-48.31a97.34 97.34 0 003.17-16.57 49.71 49.71 0 00-23.33-45.13z"
        opacity={0.1}
      />
      <path
        d="M835.12 72.6c-6.59-4-14.93-6.31-22-3.7a90.43 90.43 0 00-16.54-1.51c-3 0-6.11.15-9-.87a48.37 48.37 0 01-6.26-3.33c-9.31-5-19.63-3.09-29.46-1.82-8 1-21.49-1.85-26.11 7.28-1.27 2.52-1.1 6.19 1.06 7.78.9.66 2.06.93 2.73 1.86.84 1.16.59 2.83.3 4.28l-6.6 33a24.78 24.78 0 0019.64.9 55.24 55.24 0 005.17-2.41c4.93 3.21 10 .78 16 2.06 3.56.76 6.5 3.24 9 5.89a52.42 52.42 0 0113.36 26.6c.67 3.75 1.53 8.37 5.17 9.51a23.68 23.68 0 004.16.42c6.56.84 9.25 8.61 13.45 13.71 5.14 6.23 14.35 10.27 14.91 18.33.14 2.08-.31 4.37.85 6.09a5.13 5.13 0 003.19 2c4 .89 8.11-1.47 10.52-4.76s3.46-7.34 4.45-11.3l12.17-48.31a97.34 97.34 0 003.17-16.57 49.71 49.71 0 00-23.33-45.13z"
        fill="#865a61"
      />
    </svg>
  );
};

SvgBackInTheDay.propTypes = {
  color: PropTypes.string
};
SvgBackInTheDay.defaultProps = {
  color: "primary"
};
const MemoSvgBackInTheDay = React.memo(SvgBackInTheDay);
export default MemoSvgBackInTheDay;
