import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPersonalGoals = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1002 823.119"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1002 473C666.078 345.706 332.028 342.437 0 473V0h1002z"
        fill="#3f3d56"
      />
      <path
        fill="#d0cde1"
        d="M36 30h197v9H36zM36 53h197v9H36zM36 76h197v9H36zM69 114h20v20H69z"
      />
      <path fill={color} d="M125 114h20v20h-20z" />
      <path fill="#ff6584" d="M181 114h20v20h-20z" />
      <path fill="#d0cde1" d="M51 189h168v28.877H51z" />
      <path fill={color} d="M51 233.311h168v28.877H51z" />
      <path fill="#ff6584" d="M51 277.623h168V306.5H51z" />
      <path
        opacity={0.15}
        d="M51 189h69.5v28.877H51zM51 233.311h22.5v28.877H51zM51 277.623h112V306.5H51z"
      />
      <path
        d="M492 23v330a165 165 0 000-330zM481 30.254a151.567 151.567 0 00-135.51 83.608L481 194.076z"
        fill="#d0cde1"
      />
      <path
        d="M334.49 116.013A165.046 165.046 0 00482 355V203.33z"
        fill={color}
      />
      <path fill="#d0cde1" d="M768 109h101v9H768z" />
      <path fill={color} d="M735 103h20v20h-20z" />
      <path fill="#d0cde1" d="M768 139h101v9H768z" />
      <path fill={color} d="M735 133h20v20h-20z" />
      <path fill="#d0cde1" d="M768 169h101v9H768z" />
      <path fill={color} d="M735 163h20v20h-20z" />
      <path
        fill="#2f2e41"
        d="M438.707 250.707l-1.414-1.414L542.586 144H726v2H543.414L438.707 250.707z"
      />
      <path d="M1002 732H0V505q483-188.205 1002 0z" fill="#3f3d56" />
      <path
        d="M411.803 604.881l9.137 28.282s-8.267 26.54-4.351 56.128 1.74 30.457 1.74 30.457-39.126-2.253-35.21 9.495 42.172 4.863 42.172 4.863 7.347-1.978 10.828-22.863 12.232-61.111 12.232-61.111l-8.229-37.975z"
        fill="#ffb8b8"
      />
      <path
        d="M414.849 547.013s-16.534 6.091-16.534 22.625 6.091 39.159 10.007 40.464 30.022 19.145 34.808 6.527-28.281-69.616-28.281-69.616z"
        fill="#d0cde1"
      />
      <path
        fill="#ffb8b8"
        d="M553.211 742.808l34.808-1.305 26.541-3.916-7.832 26.106-64.395 1.74 10.878-22.625z"
      />
      <path
        d="M603.247 746.289s-.435-9.572-4.35-9.137-1.306-3.48 2.175-4.351 13.488-5.221 13.488-5.221l39.594 2.61s25.671 22.626 15.229 34.808-37.419 1.306-37.419 1.306l-29.152.435s-9.572-15.664.435-20.45z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb8b8"
        d="M618.911 712.786l12.618 59.174 26.106-5.221-14.793-73.967-15.664-8.267-8.267 28.281z"
      />
      <path
        d="M468.801 705.39s-73.097 33.067-42.205 66.57c0 0 0 15.664 32.633 12.618s95.722-8.702 98.768-6.962 12.618-34.373 4.35-36.113-18.273-3.916-18.273-3.916 8.702-1.305 8.702-8.702c0 0 24.8-1.74 32.197-17.404s14.358-27.411 14.358-27.411l16.97 43.51s19.579-36.114 34.372-20.015c0 0-16.533-103.99-29.151-113.561s-21.32-12.618-33.068-3.916-22.625 30.892-22.625 30.892zM643.277 754.12a98.037 98.037 0 00-8.702 7.398c-3.481 3.48-8.267 1.74-8.702 0s-8.267 1.305-9.137 13.923-6.092 23.93 7.831 27.846 13.489 15.229 13.489 15.229a46.934 46.934 0 0035.243 2.175c19.58-6.526 12.618-13.488 12.618-13.488l-26.106-43.075s-6.962-13.053-16.534-10.007z"
        fill="#2f2e41"
      />
      <path
        d="M571.05 538.31s41.77 14.359 46.12 17.405 23.931 17.404 14.359 24.8-17.404 12.183-36.113 6.527-39.595-23.06-39.595-23.06z"
        fill="#ffb8b8"
      />
      <path
        d="M529.28 519.166s16.534-3.046 28.282 3.48 21.755 19.58 21.755 19.58-10.878 23.06-18.71 26.542-22.19-13.924-22.19-13.924z"
        fill="#d0cde1"
      />
      <path
        d="M453.137 506.548s.436 16.97-1.305 18.71 20.885 53.082 45.686 30.457 5.656-31.763 5.656-31.763-9.137-16.969-8.702-18.71-40.464 0-40.464 0z"
        fill="#ffb8b8"
      />
      <path
        d="M453.137 506.548s.436 16.97-1.305 18.71 20.885 53.082 45.686 30.457 5.656-31.763 5.656-31.763-9.137-16.969-8.702-18.71-40.464 0-40.464 0z"
        opacity={0.1}
      />
      <path
        d="M460.1 539.18s16.533 11.313 23.495 8.703 15.663-13.923 16.533-14.794 45.25 88.326 45.25 88.326-6.526 32.633-23.93 42.205-17.186 17.186-19.362 23.713-30.24-20.668-30.24-20.668l-17.838-75.707v-46.12z"
        fill="#d0cde1"
      />
      <path
        d="M452.92 518.949s-5.439-1.088-11.095 3.698-32.198 22.625-30.892 24.366 13.053 26.54 15.663 36.548 6.527 11.313 6.527 11.313 9.137 6.526 7.832 11.312-6.962 70.052.87 84.41 6.526 26.976 4.35 30.457 20.886-10.007 20.886-10.007 34.373-27.847 36.983-36.114a97.263 97.263 0 003.481-17.404s-22.19-87.89-29.152-92.676-25.453-45.903-25.453-45.903zM500.72 519.293s10.721-6.653 12.897-4.913 22.625 1.74 23.06 3.48 1.305 43.511 16.099 54.388 5.22 32.633 5.22 32.633l10.878 17.404s-59.172 56.994-55.257 37.419c.217-1.088 0-1.305 0-1.305s-23.06-98.768-20.015-103.99 8.58-28.898 7.118-35.116z"
        fill="#575a89"
      />
      <path
        d="M591.935 559.195l-59.174 20.45s-58.739 13.923-49.602 30.022 47.862-11.312 47.862-11.312l78.8-8.83s31.28-26.414-17.886-30.33z"
        fill="#ffb8b8"
      />
      <circle cx={476.633} cy={490.449} r={32.197} fill="#ffb8b8" />
      <path
        d="M450.992 458.45l-5.956-2.165s12.453-12.453 29.78-11.37l-4.874-4.873s11.912-4.332 22.74 7.038c5.693 5.978 12.28 13.003 16.386 20.918h6.378l-2.662 5.324 9.317 5.324-9.563-.956a26.866 26.866 0 01-.905 13.789l-2.165 5.955s-8.664-17.326-8.664-19.491v5.414s-5.955-4.873-5.955-8.122l-3.249 3.79-1.624-5.955-20.034 5.955 3.249-4.873-12.453 1.625 4.873-5.956s-14.077 7.039-14.619 12.994c-.541 5.956-7.58 13.536-7.58 13.536l-3.249-5.414s-4.873-24.365 10.829-32.486z"
        fill="#2f2e41"
      />
      <path
        d="M871.067 733.953l-2-.04a463.835 463.835 0 017.1-66.286c8.648-46.881 23.03-77.67 42.743-91.512l1.148 1.637c-46.051 32.334-48.967 154.966-48.99 156.2zM896.067 733.474l-2-.039c.043-2.215 1.293-54.414 21.843-68.841l1.148 1.636c-19.72 13.846-20.981 66.712-20.99 67.244z"
        fill="#d0cde1"
      />
      <circle cx={931.436} cy={567.933} r={10} fill={color} />
      <circle cx={926.484} cy={653.933} r={10} fill={color} />
      <path
        d="M891.406 583.928c1.88 12.004-3.019 22.74-3.019 22.74s-7.945-8.725-9.825-20.73 3.02-22.74 3.02-22.74 7.945 8.726 9.824 20.73z"
        fill={color}
      />
      <path
        d="M924.062 612.99c-11.493 3.943-22.904 1.035-22.904 1.035s7.224-9.3 18.717-13.242 22.903-1.034 22.903-1.034-7.223 9.3-18.716 13.242zM924.462 689.243a31.134 31.134 0 01-16.064.694 28.374 28.374 0 0129.172-10.007 31.134 31.134 0 01-13.108 9.313zM805.984 554.335a13 13 0 1113-13 13.014 13.014 0 01-13 13zm0-24a11 11 0 1011 11 11.012 11.012 0 00-11-11z"
        fill="#d0cde1"
      />
      <circle cx={745} cy={614} r={8} fill="#d0cde1" />
      <circle cx={36} cy={523} r={8} fill="#d0cde1" />
      <path d="M86 657H60v-26h26zm-24-2h22v-22H62z" fill="#d0cde1" />
      <path
        d="M251 565a50 50 0 1050 50 50 50 0 00-50-50zm-8.625 72.375l-21.507-21.507 6.032-6.033 15.495 15.495 32.705-32.705 6.032 6.033z"
        fill={color}
      />
    </svg>
  );
};

SvgPersonalGoals.propTypes = {
  color: PropTypes.string
};
SvgPersonalGoals.defaultProps = {
  color: "primary"
};
export default SvgPersonalGoals;