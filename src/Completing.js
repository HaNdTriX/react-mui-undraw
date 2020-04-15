import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCompleting = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1144 751.924"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M1111.983 428.056L904.837 604.443l-45.323 38.589-126.827-.774-108.238-.658-8.99-.053-21.965-25.799-87.33-102.562-43.838-51.49-13.181-15.476-9.535-11.201-21.249-24.956-34.403-40.401 34.844-29.667 33.277-28.338 23.92-20.366L777.168 34.846l334.815 393.21z"
      />
      <path fill="#3f3d56" d="M97 101.924h397v287H97zM579 694.924h374v2H579z" />
      <path
        d="M1133.924 641.924H834.57s-6.068-88.998 29.834-90.009 31.857 39.442 76.862-16.181 99.616-52.59 106.695-19.721-13.653 59.163 24.272 51.072 92.536 13.147 61.69 74.839z"
        fill={color}
      />
      <path
        d="M979.194 641.944l-1.01-.04c2.356-58.596 14.628-96.243 24.507-117.508 10.727-23.089 21.064-32.435 21.168-32.527l.672.755c-.102.091-10.319 9.345-20.96 32.278-9.825 21.174-22.03 58.668-24.377 117.042zM1087.538 642.065l-.971-.283c11.69-40.126 39.22-65.46 39.497-65.712l.68.749c-.275.249-27.599 25.404-39.206 65.246zM881.72 641.993l-1.002-.14c3.966-28.605-3.198-50.799-9.907-64.38-7.265-14.704-15.553-22.736-15.636-22.815l.7-.73c.084.08 8.5 8.235 15.842 23.098 6.772 13.708 14.004 36.107 10.003 64.967z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M43 641.924h1101v2H43z" />
      <path fill="#2f2e41" d="M724.735 39.413h94.695v117.651h-94.695z" />
      <path
        fill="#ffb8b8"
        d="M646.54 588.213l-12.913 47.348 21.522 15.782 5.739-4.304 10.043-48.782-24.391-10.044zM808.669 583.909l-4.304 57.391h27.261v-53.087l-22.957-4.304zM722.583 220.912v34.434l53.087 8.609 45.912-18.652-8.608-21.522-90.391-2.869z"
      />
      <path
        d="M765.626 249.607L719.714 241l-11.479 93.26-28.695 116.216s-43.043 99-37.304 121.956l2.87 7.174-2.87 12.913 28.695 11.478 11.479-18.652s8.608 12.913 22.956-14.348 74.608-196.564 74.608-196.564l10.043 28.696a59.132 59.132 0 00-1.434 27.26c2.87 14.348 5.739 58.826 5.739 58.826s-15.783 77.478 5.739 83.217l4.304 17.217 30.13 2.87 5.74-17.218s28.695-10.043 21.521-60.26-10.043-215.216-10.043-215.216l-28.266-69.693zM642.236 632.691s-7.174-5.739-10.043-4.304-33 40.174-33 40.174-31.565 24.39-8.609 27.26 86.086-28.695 86.086-35.87-13.265-25.14-13.265-25.14-9.69 7.924-21.17-2.12zM801.496 628.387s25.825-1.604 30.13 2.785 2.87 25.91 2.87 25.91 2.869 38.74-20.088 38.74-17.217-25.827-17.217-25.827z"
        fill="#2f2e41"
      />
      <circle cx={775.67} cy={58.783} r={35.869} fill="#ffb8b8" />
      <path
        d="M751.996 81.022s20.087 24.39-20.087 43.043 28.696 96.13 28.696 96.13 80.347-30.13 73.173-88.956c0 0-48.782-8.609-37.304-48.783z"
        fill="#ffb8b8"
      />
      <path
        d="M730.474 122.63s-33-4.304-34.434 22.956 0 93.26 0 93.26-14.348 57.391-7.174 107.608c0 0-8.609 58.826 14.348 55.956s5.739-60.26 5.739-60.26l10.043-93.26-4.304-68.87 18.652-41.607zM825.447 128.969s31.287-.6 32.722 22.356-10.043 93.26-10.043 93.26l-17.218 8.61-15.782-48.783z"
        fill="#ffb8b8"
      />
      <path
        d="M834.495 246.738l-2.87 7.174 8.61 21.521s-34.435 27.26-31.566 33 18.652-7.174 18.652-7.174l22.957 11.478s18.652-20.087 10.043-38.739-11.934-31.04-11.934-31.04-12.457-.525-13.892 3.78z"
        fill="#ffb8b8"
      />
      <path
        d="M724.018 117.608l-4.304 47.348s-20.087 20.087 2.87 47.347l-2.87 21.522s53.086-2.87 63.13 0 41.06-2.31 41.06-2.31l.548-16.342s14.348-20.087 10.043-50.217 0-40.174 0-40.174l-10.043-1.435s-6.457 43.761-50.935 48.065c0 0-55.238 5.022-39.456-53.804z"
        fill={color}
      />
      <path
        d="M779.257.674s-37.304-2.312-45.913 20.885-23.674 35.376-23.674 35.376-23.731 16.496-11.865 45.944c0 0-36.917 24.808-12.526 46.846 0 0-1.435 22.037 12.913 37.115 0 0 11.478 5.8 7.174 9.28s28.695 1.16 25.826-30.157 16.5-53.376 16.5-53.376-18.652-40.603-10.044-54.522c5.227-8.45 7.471-14.752 11.81-18.399a54.432 54.432 0 006.698-6.537 15.455 15.455 0 0116.644-5.19c12.913 3.48 15.783 13.918 15.783 13.918s9.326 24.937 25.108 36.536-12.196 31.896-12.196 31.896 4.864 23.898 17.497 38.046-3.64 26.48-4.584 28.067c-2.152 3.619-10.747 26.474 24.757 26.575 0 0 8.243-17.297 19.721-27.735s2.87-40.596 2.87-40.596 17.217-10.438-1.435-35.956c0 0 5.74-23.197-10.043-38.275 0 0-22.24-67.86-71.021-59.74z"
        fill="#2f2e41"
      />
      <ellipse cx={736.931} cy={58.065} rx={3.587} ry={5.739} fill="#ffb8b8" />
      <path
        d="M593 750.924H1s-12-176 59-178 63 78 152-32 197-104 211-39-27 117 48 101 183 26 122 148z"
        fill={color}
      />
      <path
        d="M287.007 750.964l-1.998-.08c4.66-115.878 28.928-190.33 48.466-232.381 21.214-45.661 41.656-64.145 41.86-64.327l1.33 1.495c-.202.18-20.406 18.48-41.45 63.832-19.43 41.874-43.566 116.02-48.208 231.46zM501.267 751.203l-1.92-.559c23.119-79.353 77.561-129.455 78.11-129.952l1.343 1.48c-.543.494-54.578 50.24-77.533 129.03zM94.243 751.061l-1.982-.275c7.844-56.57-6.324-100.461-19.592-127.319-14.366-29.08-30.757-44.962-30.92-45.12l1.383-1.443c.166.16 16.81 16.286 31.33 45.678 13.392 27.11 27.694 71.405 19.78 128.48z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M0 749.924h837v2H0zM565 389.924H96v-372h469zm-467-2h465v-368H98z"
      />
      <circle cx={137} cy={170.924} r={17} fill={color} />
      <circle cx={185} cy={170.924} r={17} fill="#d0cde1" />
      <circle cx={233} cy={170.924} r={17} fill={color} opacity={0.5} />
      <circle cx={281} cy={170.924} r={17} fill="#f2f2f2" />
      <path fill="#f2f2f2" d="M330 162.924h140v16H330z" />
      <circle cx={288} cy={283.924} r={46} fill="#f2f2f2" />
      <path
        d="M288.191 297.772l-23.02-23.02a4 4 0 015.658-5.657l16.98 16.98 54.184-61.789a4 4 0 116.014 5.275z"
        fill={color}
      />
    </svg>
  );
};

SvgCompleting.propTypes = {
  color: PropTypes.string
};
SvgCompleting.defaultProps = {
  color: "primary"
};
export default SvgCompleting;
