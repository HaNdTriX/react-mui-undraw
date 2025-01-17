import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgServices = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 939.033 827.5"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M471.18 827.021c-.23-.375-5.64-9.41-7.517-28.171-1.72-17.213-.614-46.227 14.433-86.699 28.506-76.67-6.57-138.533-6.928-139.149l1.73-1.004c.091.156 9.142 15.929 14.489 41.044a179.061 179.061 0 01-7.416 99.807c-28.457 76.54-7.3 112.773-7.084 113.13z"
        fill="#3f3d56"
      />
      <circle cx={460.033} cy={555.5} r={13} fill={color} />
      <circle cx={501.033} cy={603.5} r={13} fill="#3f3d56" />
      <circle cx={473.033} cy={635.5} r={13} fill={color} />
      <circle cx={507.033} cy={662.5} r={13} fill={color} />
      <circle cx={463.033} cy={704.5} r={13} fill="#3f3d56" />
      <path
        d="M479.033 827.5s-13-32 26-56zM463.045 826.92s-5.916-34.03-51.708-33.738zM163.033 457.54h2v250.92h-2zM224.033 418.93h2v328.14h-2zM285.033 408h2v350h-2zM346.033 418.93h2v328.14h-2zM407.033 457.54h2v250.92h-2z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M131.933 499h308.2v2h-308.2zM111.033 582h350v2h-350zM131.933 665h308.2v2h-308.2z"
      />
      <circle cx={764.033} cy={326} r={175} fill={color} />
      <path
        fill="#3f3d56"
        d="M466.033 291.54h2v250.92h-2zM527.033 252.93h2v328.14h-2zM588.033 242h2v350h-2zM649.033 252.93h2v328.14h-2zM710.033 291.54h2v250.92h-2z"
      />
      <path
        fill="#3f3d56"
        d="M434.933 333h308.2v2h-308.2zM414.033 416h350v2h-350zM434.933 499h308.2v2h-308.2z"
      />
      <path
        d="M724.3 33.078h-.001c-48.14 0-87.164 43.309-87.164 96.733v67.876h20.875l12.086-25.148-3.021 25.148h134.18l10.987-22.862-2.747 22.862h15.107v-53.295c0-61.477-44.907-111.314-100.303-111.314z"
        fill="#2f2e41"
      />
      <path
        d="M682.225 155.073s27.206 63.48-9.069 76.177l36.275 119.706 61.666-3.628 16.324-39.902-3.628-59.853-5.44-39.902s-38.089 9.07-34.461-58.039zM667.715 229.436s-59.853-5.441-54.412 38.088 10.883 52.598 10.883 52.598l5.44 65.294-32.646 19.951h-30.833s-94.314 21.765-47.157 45.344 63.48-18.138 63.48-18.138 87.059 0 92.5-14.51-7.255-188.627-7.255-188.627zM783.793 211.299s56.226-19.951 59.853 23.578 3.628 47.157 3.628 47.157l10.882 61.667s21.765 54.412 21.765 70.735 16.323 67.108 16.323 67.108 21.765 70.735-1.813 68.921-27.206-76.176-27.206-76.176l-48.97-97.941-14.51-59.853z"
        fill="#ffb8b8"
      />
      <path
        d="M676.784 222.181h-14.51l-1.814 76.177s-23.578 32.647 5.441 61.666l7.255 47.157 132.402-5.441 9.069-48.97s18.137-39.902-7.255-76.177l-23.579-74.363h-12.696s29.406 108.421-32.647 110.638c-50.784 1.813-61.666-90.687-61.666-90.687z"
        fill="#fff"
      />
      <path
        d="M887.403 672.58a455.424 455.424 0 01-146.38 109.47c-.02-90.76 1.05-164.48 1.05-164.48s-7.7 77.9-17.48 171.81A452.43 452.43 0 01548.033 825c-1.08 0-2.16 0-3.24-.02 49.9-179.3 122.69-384.8 124.7-390.47a1.264 1.264 0 00.04-.12l4.39-14.64 1.87-6.23 1.96-6.53 2.66-8.88 117.89-3.62 3.3 7.41 11.21 25.23a9.733 9.733 0 012.75 1.29c21.22 13.93 47.97 120.25 71.84 244.16z"
        fill="#2f2e41"
      />
      <path
        d="M811 379.975l-143.285 5.441s-6.54 48.971 0 48.971c1.814 0 150.54 12.696 148.726-9.069s-5.442-45.343-5.442-45.343z"
        fill="#3f3d56"
      />
      <circle cx={710.257} cy={124.885} r={50.962} fill="#ffb8b8" />
      <path
        d="M749.078 59.725c-8.751-11.269-21.66-18.407-36.069-18.407h-1.711c-32.995 0-59.743 29.857-59.743 66.687h11.056l1.786-13.59 2.617 13.59h65.571l5.494-11.498-1.374 11.498h12.9q9.03 44.841-25.947 89.682h21.975l10.987-22.995-2.747 22.995h41.888l8.24-52.89c0-39.609-23.014-73.197-54.923-85.072z"
        fill="#2f2e41"
      />
      <circle cx={761.122} cy={32.647} r={32.647} fill="#2f2e41" />
      <circle cx={522.62} cy={416.88} r={16.414} fill={color} />
      <path
        fill="#efefef"
        d="M522.62 416.88H164.803V272.44h297.634l60.183 144.44z"
      />
      <path
        d="M524.255 417.974H121.033V240.707h330.1l.278.677zm-401.033-2.189h397.763l-71.318-172.89H123.222z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M223.892 295.419h178.361v16.414H223.892zM223.892 329.34h178.361v16.414H223.892zM223.892 363.262h178.361v16.414H223.892z"
      />
      <path
        d="M12 586.346a12 12 0 1112-12 12.014 12.014 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10z"
        fill="#2f2e41"
      />
      <path
        d="M433.828 134.636h-19.742v-19.741h19.742zm-18.223-1.519h16.704v-16.704h-16.704z"
        fill="#3f3d56"
      />
      <path
        d="M60.472 138.716L47.006 124.28l14.437-13.465 13.465 14.436zm-11.32-14.361l11.394 12.215 12.216-11.394-11.394-12.215z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgServices.propTypes = {
  color: PropTypes.string
};
SvgServices.defaultProps = {
  color: "primary"
};
export default SvgServices;
