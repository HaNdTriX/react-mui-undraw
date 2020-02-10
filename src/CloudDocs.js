import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCloudDocs = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 863.676 787.456"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M674.643 434.394h2v140h-2zM674.643 281.394h2v140h-2zM674.643 87.394h2v140h-2z"
      />
      <circle cx={675.643} cy={434.394} r={25} fill="#f2f2f2" />
      <circle cx={675.643} cy={267.394} r={47} fill="#f2f2f2" />
      <circle cx={675.643} cy={87.394} r={63} fill="#f2f2f2" />
      <circle cx={650.643} cy={59.394} r={10} fill="#d0cde1" />
      <circle cx={690.643} cy={81.394} r={6} fill="#d0cde1" />
      <circle cx={675.643} cy={113.394} r={6} fill="#d0cde1" />
      <path
        d="M390.412 676.448a443.165 443.165 0 01-168.146-33.128A356.65 356.65 0 0126.517 178.017 285.759 285.759 0 01399.021 21.308a228.807 228.807 0 01125.476 298.263 183.245 183.245 0 01-238.871 100.491 146.795 146.795 0 01-80.502-191.357 117.77 117.77 0 01153.347-64.512 94.416 94.416 0 0151.718 122.938 75.647 75.647 0 01-98.61 41.485 60.718 60.718 0 01-33.298-79.15 48.831 48.831 0 0163.58-26.747 39.264 39.264 0 0121.508 51.125 31.612 31.612 0 01-41.16 17.316 25.49 25.49 0 01-13.963-33.19 20.59 20.59 0 0126.812-11.28 16.673 16.673 0 019.133 21.71 13.54 13.54 0 01-17.629 7.417 11.032 11.032 0 01-6.043-14.363 9.025 9.025 0 0111.752-4.944 7.42 7.42 0 014.065 9.662 6.134 6.134 0 01-7.99 3.361 5.11 5.11 0 01-2.8-6.653 4.283 4.283 0 015.584-2.348 3.63 3.63 0 011.989 4.727 3.1 3.1 0 01-4.043 1.7 2.68 2.68 0 01-1.47-3.495 2.346 2.346 0 01.524-.784 2.269 2.269 0 00-.732.955 3.109 3.109 0 001.702 4.047 4.135 4.135 0 005.384-2.265 5.419 5.419 0 00-2.968-7.056 7.026 7.026 0 00-9.145 3.848 9.03 9.03 0 004.946 11.757 11.54 11.54 0 0015.023-6.32 14.673 14.673 0 00-8.037-19.104 18.59 18.59 0 00-24.205 10.183 23.462 23.462 0 0012.865 30.583 29.612 29.612 0 0038.554-16.22 37.263 37.263 0 00-20.41-48.518 46.83 46.83 0 00-60.975 25.651 58.718 58.718 0 0032.201 76.543 73.648 73.648 0 0096.005-40.387 92.416 92.416 0 00-50.622-120.332 115.77 115.77 0 00-150.74 63.415 144.797 144.797 0 0079.405 188.75 181.245 181.245 0 00236.264-99.393A226.806 226.806 0 00398.266 23.16C253.383-35.918 87.448 33.89 28.369 178.772c-73.9 181.231 13.42 388.796 194.652 462.696 226.666 92.427 486.269-16.785 578.697-243.452l1.851.756a446.44 446.44 0 01-407.341 277.639c-1.939.024-3.88.037-5.816.037zm-60.634-412.443a.352.352 0 00-.135.027.346.346 0 00-.185.188.68.68 0 00.373.887 1.102 1.102 0 001.436-.603 1.626 1.626 0 00-.72-2.039l-.64 1.566a.339.339 0 00-.13-.026z"
        fill="#3f3d56"
      />
      <circle cx={489.566} cy={232.875} r={49.538} fill="#2f2e41" />
      <path
        fill="#a0616a"
        d="M544.143 380.894l6 19-78 12 1-20 71-11zM453.143 528.894l-3 61s-17 31-15 75 1 45 1 45l-1 16 16 2v-21s23-58 25-87l23-87zM566.143 528.894l3 61s17 31 15 75-1 45-1 45l1 16-16 2v-21s-23-58-25-87l-23-87z"
      />
      <path
        d="M550.143 393.894s-72 11-83 8l-36 125s33 13 73 9a34.865 34.865 0 0124 4c12 7 48-12 48-12l25-5z"
        fill="#2f2e41"
      />
      <path fill={color} d="M496.65 407.403h80v91h-80z" />
      <path fill="#f2f2f2" d="M484.637 417.385h80v91h-80z" />
      <path
        d="M437.143 332.894l-1 14 18 62s7 44 21 70c0 0 8 40 23 35s-7-44-7-44l-16-60-19-79z"
        fill="#a0616a"
      />
      <circle cx={493.643} cy={250.394} r={30} fill="#a0616a" />
      <path
        d="M476.143 267.894s9 27-9 32-36 16-32 34l2 4 125-30a27.44 27.44 0 00-27-13s-27.807-.736-25.903-18.868l-3.097-7.132z"
        fill="#a0616a"
      />
      <path
        d="M558.143 305.894s5 0 18 17 22 26 22 26 12 6 5 20-32 28-32 28-25 30-28 15 21-23 21-23 18-17 17-27l-41-34z"
        fill="#a0616a"
      />
      <path
        d="M433.143 330.894s124-29 127-29l6.291 9.747s-1.29 7.253-16.29 9.253c0 0 3 15-3 30v37s-70 8-76 14l-10.771-53.414s-14.23-8.586-24.23-1.586c0 0-4-13-3-16z"
        fill="#d0cde1"
      />
      <path
        d="M453.143 723.894s-10.395-12.676-17.697-2.838l-9.303 18.838s-26 44 1 47 29-7 29-7-2-12 0-14 4-3 4-7-7-35-7-35zM566.143 723.894s10.396-12.676 17.698-2.838l9.302 18.838s26 44-1 47-29-7-29-7 2-12 0-14-4-3-4-7 7-35 7-35z"
        fill="#2f2e41"
      />
      <circle cx={444.244} cy={197.039} r={14.756} fill="#2f2e41" />
      <circle cx={534.887} cy={192.823} r={14.756} fill="#2f2e41" />
      <path
        d="M519.078 186.5a14.756 14.756 0 0113.175-14.67 14.756 14.756 0 100 29.338 14.756 14.756 0 01-13.175-14.669zM427.756 208.975a14.756 14.756 0 01-.855-19.698 14.756 14.756 0 1020.532 20.955 14.756 14.756 0 01-19.677-1.257zM489.566 209.687c-17.464 0-31.62 8.258-31.62 18.445 0 4.558 2.845 8.724 7.542 11.942l6.088-4.41-1.656 6.91c.687.318 1.388.626 2.12.91l9.094-10.609v13.034a53.082 53.082 0 008.432.668c17.463 0 31.62-8.258 31.62-18.445s-14.157-18.445-31.62-18.445z"
        fill="#2f2e41"
      />
      <path
        d="M520.131 192.823s-2.291 10.54 12.03 14.756M457.946 194.742s5.27 11.783-10.54 17.053"
        fill={color}
      />
      <ellipse
        cx={632.306}
        cy={312.666}
        rx={2.5}
        ry={6}
        transform="rotate(-15.639 343.35 896.769)"
        fill="#a0616a"
      />
      <ellipse
        cx={692.306}
        cy={307.666}
        rx={6}
        ry={2.5}
        transform="rotate(-86.476 578.302 368.949)"
        fill="#a0616a"
      />
      <path
        fill={color}
        d="M783.65 297.403h80v91h-80zM204.65 118.403h80v91h-80z"
      />
      <path
        d="M855.616 399.42l-82-.05.055-92.999 82 .048zm-79.998-2.047l78 .045.05-89-78-.046z"
        fill="#3f3d56"
      />
      <path
        fill="#f2f2f2"
        d="M218.643 134.394h52v6h-52zM218.643 151.394h52v6h-52zM218.643 168.394h52v6h-52z"
      />
      <path
        d="M299.617 197.419l-82-.048.054-93 82 .048zm-79.999-2.047l78 .046.051-89-78-.046z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M22.65 457.403h80v91h-80z" />
      <path fill="#3f3d56" d="M36.643 478.394h52v44h-52z" />
      <path
        d="M117.617 536.42l-82-.05.054-93 82 .05zm-79.999-2.047l78 .045.051-89-78-.045z"
        fill="#3f3d56"
      />
      <circle cx={62.643} cy={500.394} r={12} fill={color} />
    </svg>
  );
};

SvgCloudDocs.propTypes = {
  color: PropTypes.string
};
SvgCloudDocs.defaultProps = {
  color: "primary"
};
const MemoSvgCloudDocs = React.memo(SvgCloudDocs);
export default MemoSvgCloudDocs;
