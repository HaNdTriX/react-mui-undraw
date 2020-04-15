import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgTeamGoals = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 882.191 486.891"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={761.819}
        cy={468.548}
        rx={120.372}
        ry={16.591}
        fill="#e6e6e6"
      />
      <ellipse
        cx={120.723}
        cy={470.299}
        rx={120.723}
        ry={16.591}
        fill="#e6e6e6"
      />
      <path
        d="M201.184 222.624l3.105 6.417s17.627 23.524 6.738 27.209-16.667-22.31-16.667-22.31l-2.879-3.64z"
        fill="#ffb8b8"
      />
      <path
        d="M180.88 101.11l2.897-1.226s3.43 1.226 3.43 6.498-4.218 82.24-4.218 82.24l8.435 42.175-11.598 2.109-17.925-39.012z"
        fill="#575a89"
      />
      <path
        d="M180.88 101.11l2.897-1.226s3.43 1.226 3.43 6.498-4.218 82.24-4.218 82.24l22.668 36.376-14.76 10.544-28.996-41.648z"
        fill="#575a89"
      />
      <path
        d="M178.771 223.416s13.707 5.272 12.653 14.761-14.762 198.221-14.762 198.221l4.218 21.087-40.066 1.055-1.054-136.013-28.468 136.013H71.226l28.468-239.341z"
        fill="#2f2e41"
      />
      <path
        d="M175.608 453.268l9.49 9.49s22.141 4.217 16.87 11.597-60.1-2.109-60.1-2.109l1.055-16.87zM107.074 453.268l9.49 9.49s22.141 4.217 16.87 11.597-60.1-2.109-60.1-2.109l1.055-16.87z"
        fill="#2f2e41"
      />
      <circle cx={145.032} cy={37.848} r={25.305} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M160.847 52.609l-2.109 43.229-32.685-18.978 4.217-24.251h30.577z"
      />
      <path
        fill="#cfcce0"
        d="M124.999 66.316l30.576 22.142 5.272-15.816 9.489 25.305-5.272 45.338-40.065-76.969z"
      />
      <path
        d="M124.999 63.153l33.74 46.392 1.221-38.755 10.376 8.178v8.435l14.761 13.707-5.271 52.718-1.055 62.208s6.326 5.272 4.218 8.435-10.544 10.543-20.033 10.543-68.534-7.38-68.534-11.598 2.109-59.044 2.109-59.044V90.566l25.305-18.978z"
        fill="#575a89"
      />
      <path
        fill="#ffb8b8"
        d="M92.313 238.177l13.707 20.033 5.272-23.196-6.326-4.217-12.653 7.38z"
      />
      <path
        opacity={0.2}
        d="M138.534 323.292l20.27-54.903 1.978.73-20.27 54.903z"
      />
      <path
        d="M129.743 13.07S132.906-2.744 150.831.419l-2.11 1.055s16.87-2.11 14.762 7.38c0 0 13.707 8.435 10.544 17.924a107.284 107.284 0 00-4.218 16.87l-3.163-3.163s-3.163-21.087-22.142-18.978c-14.234 1.581-20.033 8.303-21.515 13.146a42.782 42.782 0 01-2.605 6.627l-1.184.26s-6.327-23.197 10.543-28.468z"
        fill="#2f2e41"
      />
      <path
        d="M108.129 89.512l-9.598-.445-2 1.5a63.12 63.12 0 00-6.326 7.38c-2.11 3.163-29.523 80.132-29.523 80.132a26.867 26.867 0 002.11 13.706c3.162 7.381 28.467 51.664 28.467 51.664l18.979-11.598-25.305-51.664 17.924-25.304z"
        fill="#575a89"
      />
      <path
        fill="#a0616a"
        d="M726.044 420.319v28.4h17.04l2.272-28.4h-19.312zM766.372 422.023l6.815 15.904 11.36 4.544 2.272-31.808-9.088-4.543-11.359 15.903z"
      />
      <path
        d="M781.14 435.655s-.964-7.17-10.706-4.153l1.617 21.193s-7.951 23.855 3.408 21.583 18.176-23.855 18.176-23.855l7.952-36.352-19.203-5.625zM709.572 194.827S693.67 315.241 699.35 328.873s65.319 101.67 65.319 101.67l26.127-34.08-58.503-73.27 54.527-74.975 4.544-45.439z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M772.051 237.994l14.997 7.936-.229 2.288L749.9 432.815l-28.4-5.68 18.744-130.07 31.807-59.071zM724.34 440.199l-6.816 10.224s-14.767 24.991 1.136 24.991 22.72 0 23.856-5.68a74.854 74.854 0 013.408-11.36l-1.136-14.767z"
      />
      <circle cx={768.643} cy={39.198} r={24.992} fill="#a0616a" />
      <path
        d="M748.196 47.15s3.408 19.311-6.816 22.72 12.496 48.846 12.496 48.846l26.127-43.167s-6.816-14.768-2.272-21.583z"
        fill="#a0616a"
      />
      <path
        d="M753.876 99.405l-6.167-37.019L735.7 69.87l-31.807 18.176 12.495 53.391-4.544 32.944s-5.68 10.223-4.544 14.767-1.136 6.816 0 7.952 57.935 10.224 74.975 17.04 19.312 9.088 18.176 3.408-13.632-32.944-13.632-32.944l10.224-45.439 13.632-39.76-33.094-30.54z"
        fill="#575a89"
      />
      <path
        d="M802.723 149.388l7.952 21.584-20.448 37.487-6.672 5.19a6.815 6.815 0 00-2.407 7.113l4.535 17.232 11.886-17.651s32.417-39.148 31.281-49.371-4.543-26.128-4.543-26.128zM690.26 131.212l-5.68 28.4-21.583 53.39s-23.855 22.72-12.495 27.264 24.991-22.72 24.991-22.72l27.264-51.118 10.223-30.672z"
        fill="#a0616a"
      />
      <path
        d="M798.179 97.133l9.144-.821 3.352 3.093s19.311 43.167 17.04 47.711-24.992 6.816-24.992 6.816l-9.088-27.264zM711.844 89.181l-5.635-2.46-2.316 1.324s-22.72 45.44-17.04 47.711 32.943 5.68 32.943 5.68z"
        fill="#575a89"
      />
      <path
        opacity={0.2}
        d="M735.7 328.597l-6.925 48.054-6.446-9.901 13.371-38.153z"
      />
      <path
        d="M784.888 24.397s2.517 6.625-9.166 3.229c0 0-4.628 2.256-4.358-1.594 0 0-6.38 6.003-7.594 2.048s-4.538.973-4.538.973l-2.517-6.625-3.234 3.643-10.38-.725s-1.17-25.878 34.236-20.824 15.057 44.504 15.057 44.504.224-7.321-3.01-3.678-4.496-20.95-4.496-20.95z"
        fill="#2f2e41"
      />
      <path
        d="M209.604 228.43v109.08H665.27V228.43zm273.009 90.778H237.79v-15.374h244.823zm0-28.551H237.79v-15.374h244.823zm154.47-28.552H237.79v-15.374h399.294z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M460.743 180.28h-61.495v-61.496h41.729v1.465h-40.265v58.567h58.567v-29.284h1.464v30.748z"
      />
      <path
        d="M429.679 164.24c-1.421-4.196-19.242-18.46-8.322-20.858l8.955 11.941 41.172-41.171 4.141 4.14z"
        fill={color}
      />
    </svg>
  );
};

SvgTeamGoals.propTypes = {
  color: PropTypes.string
};
SvgTeamGoals.defaultProps = {
  color: "primary"
};
export default SvgTeamGoals;
