import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlinePage = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 965.353 690.003"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M103.353 576.32c0 38.918-23.137 52.507-51.677 52.507S0 615.238 0 576.32s51.676-88.428 51.676-88.428 51.677 49.51 51.677 88.428z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M49.794 622.874l.529-32.571 22.026-40.295-21.943 35.185.238-14.645 15.18-29.153-15.117 25.277v.001l.428-26.341 16.255-23.209-16.188 19.067.267-48.298-1.68 63.938.138-2.637-16.526-25.297 16.261 30.36-1.54 29.418-.045-.781-19.053-26.621 18.995 29.379-.193 3.679-.034.055.016.302-3.907 74.635h5.22l.626-38.55 18.948-29.308-18.901 26.41z"
      />
      <path
        d="M510.796 76.265c135.674 108.109 158.02 305.734 49.912 441.408s-437.369 223.344-441.409 49.912c-4.065-174.543-93.88-338.11-49.911-441.408 67.943-159.62 305.734-158.02 441.408-49.912z"
        fill="#f2f2f2"
      />
      <ellipse cx={150.353} cy={666.003} rx={144} ry={24} fill="#3f3d56" />
      <ellipse
        cx={886.762}
        cy={657.956}
        rx={70.914}
        ry={11.819}
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M143.353 160.003h822v444h-822z" />
      <path fill="#3f3d56" d="M143.353 124.003h822v41h-822z" />
      <circle cx={163.353} cy={142.003} r={7} fill={color} />
      <circle cx={183.353} cy={142.003} r={7} fill={color} />
      <circle cx={203.353} cy={142.003} r={7} fill={color} />
      <path opacity={0.1} d="M143.353 160.003h822v5h-822z" />
      <path fill={color} opacity={0.3} d="M190.853 230.503h162v173h-162z" />
      <path fill={color} d="M201.853 218.503h162v173h-162z" />
      <path
        fill={color}
        opacity={0.3}
        d="M784.853 227.728h124.543v133H784.853z"
      />
      <path fill={color} d="M793.309 218.503h124.543v133H793.309z" />
      <path
        fill={color}
        opacity={0.3}
        d="M784.853 412.503h124.543v133H784.853z"
      />
      <path
        fill={color}
        d="M793.309 403.277h124.543v133H793.309zM420.853 218.503h309v12h-309zM420.853 253.503h309v12h-309zM420.853 288.503h309v12h-309zM420.853 323.503h309v12h-309zM420.853 358.503h309v12h-309zM420.853 393.503h309v12h-309zM420.853 428.503h309v12h-309zM420.853 463.503h309v12h-309zM420.853 498.503h309v12h-309zM420.853 533.503h309v12h-309z"
      />
      <circle cx={126.339} cy={291.382} r={21.5} fill="#a0616a" />
      <path
        d="M112.427 301.5s0 22.764-3.794 25.294 30.353 5.058 30.353 5.058v-29.088zM70.692 427.97s24.03 27.824 29.088 27.824 10.118-18.97 10.118-18.97l-24.03-17.707zM190.84 302.764l3.793-26.559s2.53-36.676 10.118-27.823 2.53 29.088 2.53 29.088 3.794 29.088 0 32.882-16.442-7.588-16.442-7.588z"
        fill="#a0616a"
      />
      <path
        d="M169.34 445.676l-68.295-6.323s-8.853 41.735-6.324 58.177 3.794 63.235 3.794 63.235 2.53 84.736 6.324 89.795 16.441 3.794 20.235 6.323 10.118-5.059 10.118-6.323-7.588-1.265-3.794-8.853-10.118-29.089-6.324-39.206 10.118-24.03 6.324-29.089 2.53-69.559 2.53-69.559 31.617 45.53 31.617 65.765-2.53 67.03-3.794 72.089-2.53 6.323 0 10.117 5.059 7.589 3.794 8.853 22.765 0 22.765-7.588-1.265-7.588 1.265-13.912 3.794-82.206 3.794-82.206z"
        fill="#2f2e41"
      />
      <path
        d="M108.633 317.94l-3.794 7.589s-40.47 12.647-41.735 39.206l34.147 56.912s2.53 3.794 1.264 6.323-2.529 1.265-1.264 5.06 1.264 2.529 1.264 5.058-3.794 1.265 0 2.53-1.264 0 12.648 3.794 55.647 2.53 55.647 2.53l-7.588-73.354 7.588-15.177-10.118-30.353s-6.323-1.264-10.118 1.265-8.853-2.53-8.853-2.53-6.323-8.852-29.088-8.852z"
        fill="#575a89"
      />
      <path
        d="M150.369 329.323l6.323-1.265s25.294-7.588 26.56-13.912 7.587-13.911 7.587-13.911 20.236-5.06 18.971 11.382-6.324 21.5-8.853 24.03-30.353 22.764-35.412 22.764-15.176-29.088-15.176-29.088zM65.633 359.676l-2.53 5.059-1.264 45.53s-7.588 5.058-3.794 7.588 12.647 13.912 15.176 13.912 16.441-6.324 16.441-8.853-2.529-25.295-2.529-25.295z"
        fill="#575a89"
      />
      <path
        d="M112.427 650.56s0 12.647-1.264 15.176-3.795 15.177 3.794 15.177a30.69 30.69 0 0012.647-2.53s0-7.588 3.794-8.853 12.647-11.382 8.853-13.912-11.382-5.058-11.382-5.058zM166.81 656.883s-7.588 17.706 0 18.97 17.706 0 18.97-2.529 3.795-5.059 6.324-3.794 24.03-13.912 16.441-16.441a21.897 21.897 0 00-13.911 0l-7.589-3.794zM129.057 315.08a2.598 2.598 0 001.03-.285 2.66 2.66 0 00.958-1.66l2.583-9.15c.98-3.473 2.554-7.528 6.087-8.263a5.74 5.74 0 002.131-.567 3.69 3.69 0 001.158-2.854l1.106-11.828c.3-3.198.584-6.523-.532-9.535-1.645-4.442-6.157-7.367-10.819-8.208s-9.465.1-14.003 1.459c-6.885 2.062-14.014 5.613-17.004 12.147-1.732 3.783-1.839 8.097-1.607 12.251.238 4.278.833 8.638 2.8 12.444a37.301 37.301 0 003.79 5.572c2.135 2.763 4.754 8.166 8.287 9.197 3.983 1.162 9.999-.196 14.035-.72zM830.105 583.573c0 38.029 23.858 68.801 53.34 68.801"
        fill="#2f2e41"
      />
      <path
        d="M883.446 652.374c0-38.456 26.623-69.575 59.525-69.575M849.432 587.02c0 36.123 15.213 65.354 34.014 65.354"
        fill={color}
      />
      <path
        d="M883.446 652.374c0-49.138 30.772-88.9 68.801-88.9"
        fill="#2f2e41"
      />
      <path
        d="M872.224 652.86s7.565-.234 9.845-1.857 11.636-3.562 12.201-.958 11.369 12.949 2.828 13.017-19.844-1.33-22.12-2.716-2.754-7.487-2.754-7.487z"
        fill="#a8a8a8"
      />
      <path
        d="M897.25 662.156c-8.54.07-19.843-1.33-22.119-2.716-1.733-1.056-2.423-4.843-2.654-6.59l-.253.01s.48 6.1 2.755 7.486 13.579 2.785 22.12 2.716c2.465-.02 3.316-.897 3.27-2.196-.343.785-1.283 1.275-3.118 1.29z"
        opacity={0.2}
      />
    </svg>
  );
};

SvgOnlinePage.propTypes = {
  color: PropTypes.string
};
SvgOnlinePage.defaultProps = {
  color: "primary"
};
const MemoSvgOnlinePage = React.memo(SvgOnlinePage);
export default MemoSvgOnlinePage;
