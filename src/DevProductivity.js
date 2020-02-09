import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDevProductivity = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 798.627 689.223"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={435.922} cy={118.405} r={73.536} fill="#a0616a" />
      <path
        d="M381.036 155.173s13.854 104.443-7.46 116.166 126.823 12.789 126.823 12.789S467.36 193.54 482.28 165.83z"
        fill="#a0616a"
      />
      <path
        d="M608.57 284.656l-12.32 56.1-26.05 118.69-.78 6.5-8.99 75.25-5.98 49.99-4.01 33.58c-24.38 12.53-42.05 21.18-42.05 21.18s-1.52-7.62-3.97-17.37c-17.11 5.13-48.77 13.64-75.6 15.34 9.77 10.89 14.26 21.12 8.17 28.67-18.38 22.76-94.26-24.92-120.8-42.7a71.84 71.84 0 00-.7 12.86l-20.31-15.62 2.01-35.94 3.39-60.81 4.26-76.26a80.064 80.064 0 01-3.37-10.03c-6.22-22.12-13.77-66.29-19.56-103.33-4.66-29.81-8.16-55-8.9-60.36l-.15-1.06 112.43-49.68c7.99 18.53 45.3 24.1 45.3 24.1 30.91-2.13 55.14-18.43 55.14-18.43z"
        fill="#d0cde1"
      />
      <path
        d="M516.92 624.636s-4.76 1.63-12.5 3.94c-17.11 5.13-48.77 13.64-75.6 15.34-23.1 1.48-42.62-2.08-46.19-17.15-1.53-6.48.64-11.81 5.37-16.19 14.12-13.09 51-17.78 80.25-19.39 8.26-.45 15.9-.66 22.26-.74 10.8-.14 17.88.08 17.88.08l.17.66z"
        fill="#a0616a"
      />
      <path
        d="M374.746 48.847l-13.75-5.505s28.75-31.65 68.748-28.898l-11.25-12.385s27.5-11.01 52.498 17.89c13.142 15.19 28.347 33.047 37.825 53.162h14.725l-6.146 13.532 21.51 13.532-22.077-2.43a75.617 75.617 0 01.599 22.444 29.04 29.04 0 01-10.635 18.998s-17.052-35.296-17.052-40.8v13.761s-13.75-12.385-13.75-20.642l-7.499 9.633-3.75-15.137-46.248 15.137 7.5-12.385-28.749 4.129 11.25-15.138s-32.498 17.89-33.749 33.027c-1.25 15.137-10.762 29.48-10.762 29.48s-25.486-70.764 10.762-91.405z"
        fill="#2f2e41"
      />
      <path
        d="M688.5 542.566c-7.49 8.12-26.05 20.35-48.55 33.59-8.37 4.92-17.28 9.99-26.37 15.03-21.69 12.03-44.4 23.95-63.14 33.58-24.38 12.53-42.05 21.18-42.05 21.18s-1.52-7.62-3.97-17.37c-3.28-13.05-8.22-29.92-13.37-37.39-.18-.26-.36-.5-.54-.74-1.5-1.97-3.01-3.12-4.5-3.12l74.42-46.13 32.16-19.94-23.17-55.31-29.06-69.38 17.54-55.81 17.63-56.1h33.04s10.94 23.88 24.93 57.18c2.09 4.98 4.25 10.17 6.45 15.53 28.78 70 64.66 167.75 48.55 185.2z"
        fill="#d0cde1"
      />
      <path
        d="M436.99 672.586c-18.38 22.76-94.26-24.92-120.8-42.7-5.78-3.87-9.22-6.32-9.22-6.32l24.28-32.38 7.69-10.25s6.88 3.65 17.05 9.59c.37.22.74.44 1.12.66 8.77 5.15 19.78 11.88 30.89 19.39 15.33 10.37 30.83 22.2 40.82 33.34 9.77 10.89 14.26 21.12 8.17 28.67z"
        fill="#a0616a"
      />
      <path
        d="M355.99 590.526a47.782 47.782 0 00-8.1.66c-22.99 3.95-29.77 24.76-31.7 38.7a71.84 71.84 0 00-.7 12.86l-20.31-15.62-7.4-5.69c-17.81-6.21-33.68-17.24-47.44-30.25a238.482 238.482 0 01-31.95-37.89 334.15 334.15 0 01-24.72-42.4 31.184 31.184 0 01-.43-26.45l25.15-56.05 36.76-81.92q.405-2.925.89-5.72c7.29-41.8 26.82-60.36 26.82-60.36h14.92l9.98 60.36 12.4 74.99-8.69 28.34-20.08 65.45 19.19 20.84z"
        fill="#d0cde1"
      />
      <path
        d="M372.877 415.806l12.754 14.88a366.668 366.668 0 0014.785-3.157l-3.664-11.723 8.958 10.45c53.997-13.28 120.927-39.101 120.927-39.101s-72.258 5.298-126.209-6.489c-23.87-5.215-48.43 6.618-58.226 29.003-5.694 13.01-4.8 24.282 15.394 24.282a133.375 133.375 0 0020.353-1.914z"
        fill={color}
      />
      <path
        d="M663.65 660.386v6.07a13.34 13.34 0 01-.91 4.87 13.688 13.688 0 01-.97 2 13.437 13.437 0 01-11.55 6.56H203.67a13.437 13.437 0 01-11.55-6.56 13.682 13.682 0 01-.97-2 13.34 13.34 0 01-.91-4.87v-6.07a13.426 13.426 0 0113.43-13.43h25.74v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.4v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.4v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h105.2a.56.56 0 01.56.56v2.83h8.4v-2.83a.56.56 0 01.56-.56h13.43a.566.566 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.4v-2.83a.56.56 0 01.56-.56h13.43a.557.557 0 01.55.56v2.83h8.4v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h8.39v-2.83a.56.56 0 01.56-.56h13.43a.56.56 0 01.56.56v2.83h39.17a13.426 13.426 0 0113.43 13.43z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M60.5 671.326h733v2h-733zM627.694 404.757H461.252v-3.431H385.78v3.43H218.65a11.259 11.259 0 00-11.258 11.26v227.91a11.259 11.259 0 0011.259 11.26h409.043a11.259 11.259 0 0011.26-11.26v-227.91a11.259 11.259 0 00-11.26-11.26z"
      />
      <circle
        cx={423.5}
        cy={484.326}
        r={25}
        fill="none"
        stroke="#d0cde1"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={415.5} cy={493.326} r={25} fill="#d0cde1" />
      <path fill="#d0cde1" d="M80.446 661.223h28v28h-28z" />
      <path
        d="M91.45 639.223v34h34v-34zm32.52 32.52H92.92v-31.04h31.05z"
        fill="#3f3d56"
      />
      <path fill="#d0cde1" d="M728.446 661.223h28v28h-28z" />
      <path
        d="M739.45 639.223v34h34v-34zm32.52 32.52h-31.05v-31.04h31.05z"
        fill="#3f3d56"
      />
      <circle cx={94.58} cy={150.773} r={79.34} fill={color} />
      <path
        d="M122.229 56.49a85.755 85.755 0 00-21.638 0 84.368 84.368 0 00-69.615 58.712 83.223 83.223 0 00-3.655 21.662 87.864 87.864 0 00-.06 3.09 84.233 84.233 0 0084.149 84.149c1.791 0 3.582-.06 5.35-.169a83.23 83.23 0 0012.333-1.707A84.159 84.159 0 00122.23 56.49zm15.52 160.857h-.013a80.908 80.908 0 01-20.977 4.171c-1.767.12-3.558.18-5.35.18a81.845 81.845 0 01-81.744-81.744c0-1.034.024-2.068.06-3.09A81.856 81.856 0 01111.41 58.21a81.75 81.75 0 0126.338 159.138z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M110.208 63.018h2.404v16.83h-2.404zM56.158 86.402l1.7-1.7 11.9 11.9-1.7 1.7zM34.474 141.156v-2.404h16.83v2.404zM57.858 195.206l-1.7-1.7 11.9-11.9 1.7 1.7zM154.762 98.302l-1.7-1.7 11.9-11.9 1.7 1.7zM171.517 141.156v-2.404h16.83v2.404zM153.061 183.305l1.7-1.7 11.9 11.9-1.7 1.7zM110.208 200.06h2.404v16.83h-2.404zM115.016 135.145a6.01 6.01 0 00-7.213 0 6.187 6.187 0 00-1.719 2.02 6.011 6.011 0 108.932-2.02zm-3.606 8.415a3.617 3.617 0 01-3.607-3.606 3.671 3.671 0 01.638-2.044 3.603 3.603 0 112.969 5.65zM100.591 35.369h21.638v21.638h-21.638z"
      />
      <ellipse cx={111.41} cy={28.757} rx={28.851} ry={10.218} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M107.803 94.273h7.213v40.872h-7.213zM0 220.44h226v2.404H0z"
      />
      <path
        d="M150.594 599.754c.933 31.95-17.735 43.659-41.164 44.343q-.816.024-1.625.03-1.63.012-3.228-.055c-21.188-.88-37.96-12.127-38.827-41.84-.898-30.75 37.269-70.703 40.132-73.658l.005-.003.165-.17s43.609 39.406 44.542 71.353z"
        fill="#d0cde1"
      />
      <path
        d="M107.744 639.255l14.882-22.131-14.852 24.512.031 2.49q-1.63.013-3.228-.054l.739-32.012-.02-.247.027-.047.07-3.025-16.298-23.663 16.279 21.399.058.64.557-24.187-14.077-24.533 14.117 20.284-.147-50.107v-.167l.005.164.935 39.491 12.83-16.041-12.788 19.443.28 21.634 11.805-21.114-11.762 24.295.156 12.03 17.169-29.412-17.117 33.608z"
        fill="#3f3d56"
      />
      <path
        d="M798.594 599.754c.933 31.95-17.735 43.659-41.164 44.343q-.816.024-1.625.03-1.63.012-3.228-.055c-21.188-.88-37.96-12.127-38.827-41.84-.898-30.75 37.269-70.703 40.132-73.658l.005-.003.165-.17s43.609 39.406 44.542 71.353z"
        fill="#d0cde1"
      />
      <path
        d="M755.744 639.255l14.882-22.131-14.852 24.512.031 2.49q-1.63.013-3.228-.054l.739-32.012-.02-.247.027-.047.07-3.025-16.298-23.663 16.279 21.399.058.64.557-24.187-14.077-24.533 14.117 20.284-.147-50.107v-.167l.005.164.935 39.491 12.83-16.041-12.788 19.443.28 21.634 11.805-21.114-11.762 24.295.156 12.03 17.169-29.412-17.117 33.608z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgDevProductivity.propTypes = {
  color: PropTypes.string
};
SvgDevProductivity.defaultProps = {
  color: "primary"
};
const MemoSvgDevProductivity = React.memo(SvgDevProductivity);
export default MemoSvgDevProductivity;
