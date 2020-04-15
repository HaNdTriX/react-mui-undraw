import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlineEverywhere = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 946 580.794"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M946 495.824H611.852c11.198-57.15 10.16-117.641 0-180.62H946c-8.485 64.07-8.747 124.397 0 180.62z"
        fill="#d0cde1"
      />
      <path
        fill="#3f3d56"
        d="M739.415 373.906h167.074v4.516H739.415zM739.415 388.581h167.074v4.516H739.415zM739.415 403.256h167.074v4.516H739.415zM739.415 417.932h167.074v4.516H739.415zM739.415 432.607h167.074v4.516H739.415zM651.363 377.857h55.315v55.315h-55.315zM490.949 314.718a62.421 62.421 0 0162.421 62.422v118.753H309.774A181.174 181.174 0 01490.95 314.718z"
      />
      <path
        d="M53.444 475.6a5.392 5.392 0 00-3.18 1.118c-2.71-7.161-6.905-11.763-11.618-11.763s-8.907 4.602-11.617 11.763a5.392 5.392 0 00-3.18-1.119c-5.354 0-9.694 9.055-9.694 20.225h48.983c0-11.17-4.34-20.225-9.694-20.225z"
        fill={color}
      />
      <path
        d="M213.64 496.756h-93.696a627.008 627.008 0 000-106.115h93.697c-5.16 36.344-5.46 71.772 0 106.115z"
        fill="#d0cde1"
      />
      <path
        fill="#3f3d56"
        d="M133.49 412.09h67.733v4.516H133.49zM133.49 426.765h67.733v4.516H133.49zM133.49 441.441h67.733v4.516H133.49zM133.49 456.116h67.733v4.516H133.49zM133.49 470.792h67.733v4.516H133.49zM0 494.696h827.467v2.258H0z"
      />
      <path
        fill="#a0616a"
        d="M328.096 483.106l7.909 42.181 34.272-26.364-20.431-24.385-21.75 8.568zM532.411 487.06l-7.909 42.181-34.272-26.363 16.477-25.704 25.704 9.886z"
      />
      <path
        d="M401.913 248.473l-19.772 21.09S278.006 315.7 278.006 339.427s25.045 126.543 35.59 134.452a45.871 45.871 0 0114.5 18.455l29-14.5s-2.636-7.91 0-11.864 0-6.59 0-6.59-3.955 1.318-2.636-2.637 1.318-5.272 0-6.59-5.273-13.182-5.273-13.182 1.318-47.454-17.136-64.59c0 0 85.68-25.045 96.226-42.181s13.181-79.09 13.181-79.09zM341.278 509.469s-2.636-14.5-18.454-10.546v17.137l-14.5 29s-30.318 34.271-2.636 31.635 43.499-19.772 43.499-27.681 19.772-19.773 19.772-19.773 21.09-22.409 11.864-30.318-18.243-21.32-18.349-14.614-21.196 25.16-21.196 25.16z"
        fill="#2f2e41"
      />
      <path
        d="M458.594 239.246l19.773 34.272S582.5 319.654 582.5 343.381s-25.045 126.543-35.59 134.452a45.871 45.871 0 00-14.5 18.454l-29-14.5s2.637-7.909 0-11.863 0-6.59 0-6.59 3.955 1.317 2.637-2.637-1.318-5.273 0-6.59 5.273-13.183 5.273-13.183-1.319-47.453 17.136-64.59c0 0-93.59-32.953-104.135-50.09-13.505-21.946-3.63-112.066-6.59-81.725zM519.23 513.423s2.636-14.5 18.454-10.545v17.136l14.5 29s30.317 34.272 2.636 31.635-43.5-19.772-43.5-27.681-19.772-19.772-19.772-19.772-21.09-22.41-11.863-30.318 18.242-21.32 18.348-14.615 21.197 25.16 21.197 25.16z"
        fill="#2f2e41"
      />
      <circle cx={465.185} cy={48.113} r={34.272} fill="#a0616a" />
      <path
        d="M441.458 63.93s-1.318 27.682-18.454 35.591 27.681 35.59 27.681 35.59l32.954-17.136s-7.909-38.226-1.318-46.135-40.863-7.91-40.863-7.91z"
        fill="#a0616a"
      />
      <path
        d="M488.912 99.521s-45.92 31.315-59.869-4.115c0 0-33.72 13.342-32.402 22.57s-2.637 135.77-2.637 135.77 55.363 15.818 71.181 0S488.912 99.52 488.912 99.52z"
        fill="#d0cde1"
      />
      <path
        d="M479.748 87.743l5.21 5.187s55.362 23.727 54.044 36.909-26.363 75.135-26.363 75.135-13.182 47.454-10.546 60.635 6.591 17.136 3.955 21.09 0 11.864 0 14.5-15.818 13.182-15.818 13.182-25.045-22.409-34.272-26.363-15.818-34.272-9.227-60.635 7.909-83.045 7.909-83.045l18.454-27.68s.127-19.602 6.654-28.915zM437.38 82.385s-10.422-1.318-13.058 5.273-47.454 21.09-47.454 26.363 13.182 71.18 13.182 71.18l2.636 38.227-23.727 17.136s5.273 17.136-1.318 23.727-14.5 23.727-6.59 26.363 56.68-15.818 57.998-35.59-3.954-34.272 5.273-48.772 10.545-71.18 10.545-71.18z"
        fill="#575a89"
      />
      <path
        d="M497.193 18.543A39.582 39.582 0 00474.677 1.33l-6.884 5.507L470.47.414a36.439 36.439 0 00-6.804-.393l-6.194 7.963 2.563-7.69a39.204 39.204 0 00-27.044 16.086c-7.884 11.367-9.214 27.175-1.46 38.631 2.128-6.54 4.711-12.678 6.84-19.22a19.36 19.36 0 005.043.025l2.59-6.042.723 5.787c8.026-.7 19.93-2.235 27.54-3.642l-.74-4.439 4.427 3.69c2.331-.538 3.715-1.024 3.601-1.396 5.66 9.123 12.585 14.95 18.243 24.073 2.149-12.868 4.623-23.565-2.605-35.304z"
        fill="#2f2e41"
      />
      <ellipse cx={496.821} cy={49.431} rx={2.768} ry={4.614} fill="#a0616a" />
      <path
        d="M482.671 284.531h-59.568a5.653 5.653 0 01-5.653-5.653l-2.625-77.942a5.653 5.653 0 015.653-5.653h64.818a5.653 5.653 0 015.653 5.653l-2.625 77.942a5.653 5.653 0 01-5.653 5.653z"
        fill="#3f3d56"
      />
      <circle cx={452.887} cy={218.907} r={5.25} fill="#d0cde1" />
      <path
        d="M506.396 248.303s-52.618 18.038-39.61 29.524 47.664-16.88 47.664-16.88z"
        fill="#a0616a"
      />
      <path
        d="M517.911 121.93s19.773-3.955 25.045 13.181 31.636 80.408 23.727 89.635-36.908 34.272-46.135 39.545-13.182 5.273-13.182 5.273l-11.863 5.272-3.955-30.317 13.53-8.015 20.742-17.03-11.863-35.59z"
        fill="#575a89"
      />
      <path
        d="M400.247 239.076s52.618 18.038 39.61 29.524-47.664-16.88-47.664-16.88z"
        fill="#a0616a"
      />
      <path
        d="M388.732 112.703s-19.773-3.955-25.045 13.181-31.636 80.408-23.727 89.635 36.908 34.272 46.135 39.545 13.182 5.273 13.182 5.273l11.863 5.272 3.955-30.317-13.53-8.015-20.742-17.03 19.113-46.795z"
        fill="#575a89"
      />
      <path
        d="M192.882 470.49l44.494-13.939a163.08 163.08 0 00-16.62-53.05l-44.494 13.938a100.031 100.031 0 0116.62 53.051zM637.03 474.03h46.627a163.08 163.08 0 000-55.593h-46.626a100.031 100.031 0 010 55.594zM851.518 484.19h46.626a163.08 163.08 0 000-55.593h-46.626a100.031 100.031 0 010 55.594z"
        fill={color}
      />
    </svg>
  );
};

SvgOnlineEverywhere.propTypes = {
  color: PropTypes.string
};
SvgOnlineEverywhere.defaultProps = {
  color: "primary"
};
export default SvgOnlineEverywhere;
