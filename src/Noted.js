import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNoted = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 747.758 668.841"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M700.05 130.285c26.72 38.985 20.807 89.487 20.807 89.487s-49.235-12.705-75.955-51.69-20.807-89.488-20.807-89.488 49.234 12.705 75.954 51.69z"
        fill="#2f2e41"
      />
      <path
        d="M680.824 137.729c3.126 47.16 39.017 83.178 39.017 83.178s30.82-40.442 27.694-87.601-39.017-83.179-39.017-83.179-30.82 40.442-27.694 87.602z"
        fill={color}
      />
      <path
        d="M374.046.982l362.775 182.39a17.155 17.155 0 019.41 16.482l-21.077 312.204a8.5 8.5 0 01-12.315 7.013L341.792 329.707 360.84 8.593A9.123 9.123 0 01374.046.982z"
        fill="#d0cde1"
      />
      <path
        d="M378.221 7.344l353.864 177.91a16.733 16.733 0 019.18 16.077l-20.56 304.536a8.29 8.29 0 01-12.013 6.84L346.76 327.996 365.34 14.768a8.9 8.9 0 0112.881-7.424z"
        fill="#3f3d56"
      />
      <path
        d="M393.73 30.975l320.767 161.27a15.168 15.168 0 018.32 14.573L704.18 482.87a7.515 7.515 0 01-10.888 6.2L365.21 321.636l16.843-283.93a8.067 8.067 0 0111.676-6.73z"
        fill="#fff"
      />
      <path
        d="M62.746 483.33l363.238 182.933a24.185 24.185 0 0021.786-.029l268.713-136.407c3.151-3.151 2.711-7.82 1.703-11.326a25.229 25.229 0 00-1.987-4.897l-36.617-19.26L371.71 340.736l-18.394-9.765a34.06 34.06 0 00-31.636-.127L62.632 465.405a10.058 10.058 0 00.114 17.926z"
        fill="#d0cde1"
      />
      <path
        d="M62.746 483.33l363.238 182.933a24.185 24.185 0 0021.786-.029l268.713-136.407c3.151-3.151 2.711-7.82 1.703-11.326l-267.91 139.253a23.37 23.37 0 01-21.2.182L57.324 472.729a10.017 10.017 0 005.422 10.602z"
        opacity={0.1}
      />
      <path
        d="M407.517 538.141L289.88 478.696a16.53 16.53 0 00-15.244.173l-68.24 36.458a4.882 4.882 0 00.102 8.664l119.94 60.483a13.586 13.586 0 0012.787-.294l68.513-38.599a4.203 4.203 0 00-.222-7.44zM684.565 528.2L557.98 595.447a10.297 10.297 0 01-9.477.096l-357.66-180.87a6.082 6.082 0 01.046-10.88l123.615-61.182a13.404 13.404 0 0111.977.042l358.03 180.392a2.901 2.901 0 01.055 5.153z"
        opacity={0.1}
      />
      <path
        fill={color}
        d="M481.984 194.09l.634-1.268L599 251.012l-.634 1.27zM481.962 211.15l.646-1.263 116.413 59.548-.646 1.262zM503.272 243.754l.646-1.264 66.697 34.08-.646 1.264z"
      />
      <path
        d="M139.527 313.547s-28.38-12.367-41.71.697 35.69 8.763 41.71-.697z"
        fill="#3f3d56"
      />
      <path
        d="M90.521 254.898c9.538-16.115 28.407-16.866 28.407-16.866s18.387-2.352 30.182 22.192c10.993 22.877 26.166 44.965 2.442 50.32l-4.285-13.337-2.654 14.33a92.827 92.827 0 01-10.15.174c-25.407-.82-49.603.24-48.824-8.877 1.036-12.12-4.295-32.43 4.882-47.936z"
        fill="#2f2e41"
      />
      <path
        d="M77.176 547.04s12.04 22.36 19.78 22.36 6.88 14.621 5.16 18.061-6.02 11.18.86 22.36c2.404 3.906 1.974 8.336.397 12.447-4.419 11.52-21.607 8.03-21.059-4.296l.022-.41c.86-13.76-6.02-35.26-12.9-40.42s-12.9-18.921-12.9-18.921zM159.737 541.88s-12.04 22.36-19.78 22.36-6.88 14.621-5.16 18.061 6.02 11.18-.86 22.36c-2.403 3.906-1.973 8.336-.396 12.447 4.418 11.52 21.606 8.03 21.058-4.296q-.009-.204-.022-.41c-.86-13.76 6.02-35.26 12.9-40.421s12.9-18.92 12.9-18.92z"
        fill="#ffb8b8"
      />
      <path
        d="M150.277 431.799l5.16 11.18s75.681 24.94 68.801 54.18-40.42 74.822-45.58 73.102-32.681-6.88-33.541-21.5 19.78-40.421 19.78-40.421l-28.38-25.8-41.298-.86-35.243 26.66s36.98 32.68 20.64 45.58-40.42 21.501-43.86 16.341S-5.386 488.56.634 481.68s67.08-32.681 67.08-32.681l16.341-23.22 63.641-3.44z"
        fill="#2f2e41"
      />
      <path
        d="M134.797 289.896s-4.3 28.38 4.3 31.821-17.2 18.06-17.2 18.06h-14.62l-9.46-19.78s8.6-15.48 3.44-30.1 33.54 0 33.54 0z"
        fill="#ffb8b8"
      />
      <path
        d="M134.797 289.896s-4.3 28.38 4.3 31.821-17.2 18.06-17.2 18.06h-14.62l-9.46-19.78s8.6-15.48 3.44-30.1 33.54 0 33.54 0z"
        opacity={0.1}
      />
      <path
        d="M140.817 313.977s-9.46 10.32-11.18 12.04-9.46 11.18-25.8-2.58-18.06 2.58-18.06 2.58V429.22s13.76-6.02 24.94 0 34.4-1.72 34.4-1.72l4.3-106.642z"
        fill="#d0cde1"
      />
      <path
        d="M134.5 313.977s8.037-3.44 14.917 0 30.96 20.64 29.24 28.38-24.08 61.921-8.6 87.722 18.06 32.68 18.06 32.68l-37.84-19.78s-29.24-18.06-26.66-29.24 10.883-99.762 10.883-99.762zM100.386 313.977s-18.05 1.72-18.91 3.44-27.09 9.03-25.37 16.77 25.37 76.971 15.05 89.872-27.52 30.96-21.5 32.68 16.34-2.58 26.66 0 34.4-18.92 31.82-42.14-.02-94.602-7.75-100.622z"
        fill="#3f3d56"
      />
      <path
        d="M143.397 478.24v8.6s4.3 19.78-9.46 18.92-5.16-24.08-5.16-24.08l.86-7.74zM104.696 479.1s9.46 19.78 0 21.5-16.34-11.18-16.34-14.62 16.34-6.88 16.34-6.88z"
        fill="#ffb8b8"
      />
      <ellipse cx={92.226} cy={278.286} rx={1.72} ry={3.44} fill="#ffb8b8" />
      <ellipse cx={142.967} cy={278.286} rx={1.72} ry={3.44} fill="#ffb8b8" />
      <path
        d="M77.176 325.157s-21.5 0-20.64 8.6 29.24 156.523 29.24 156.523 12.04-11.18 22.36-8.6zM160.597 327.737s21.5 4.3 21.5 17.2-30.96 136.743-35.26 136.743-20.64-2.58-20.64-6.88 34.4-147.063 34.4-147.063z"
        fill="#3f3d56"
      />
      <path
        d="M155.867 353.108l-19.35 75.673s9.03-66.213 19.35-75.674zM80.601 342.474l19.57 98.94s-6.254-93.232-19.57-98.94z"
        opacity={0.2}
      />
      <circle cx={117.597} cy={278.716} r={24.94} fill="#ffb8b8" />
      <path
        fill="#2f2e41"
        d="M94.738 253.344l18.642-9.764 25.743 3.994 5.326 23.524-13.258-.509-3.704-8.643v8.5l-6.118-.235-3.551-13.76-2.219 14.647-21.749-.443.888-17.311z"
      />
      <path fill="#f2f2f2" d="M374.28 108.551L364 133l86.768 45.545L480 93" />
      <path
        fill={color}
        d="M448.768 163.545l38.331-90.193L399 30l-37 88 86.768 45.545z"
      />
      <path
        fill="#fff"
        d="M396.272 65.754l.646-1.264 66.697 34.08-.646 1.264zM391.272 77.754l.646-1.264 66.697 34.08-.646 1.264z"
      />
    </svg>
  );
};

SvgNoted.propTypes = {
  color: PropTypes.string
};
SvgNoted.defaultProps = {
  color: "primary"
};
const MemoSvgNoted = React.memo(SvgNoted);
export default MemoSvgNoted;
