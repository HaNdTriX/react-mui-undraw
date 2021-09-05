import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgRunnerStart = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 854.63 686"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M0 600h821v9.053H0zM0 676.947h821V686H0z" />
      <path
        d="M750.178 608.328c-.49-.802-12.06-20.12-16.071-60.234-3.68-36.802-1.313-98.836 30.858-185.367 60.947-163.928-14.046-296.194-14.812-297.512l3.7-2.146c.194.334 19.545 34.057 30.977 87.755a382.846 382.846 0 01-15.856 213.394c-60.844 163.648-15.61 241.118-15.146 241.882z"
        fill="#3f3d56"
      />
      <circle cx={726.346} cy={27.795} r={27.795} fill="#3f3d56" />
      <circle cx={814.007} cy={130.422} r={27.795} fill="#3f3d56" />
      <circle cx={754.141} cy={198.841} r={27.795} fill={color} />
      <circle cx={826.835} cy={256.569} r={27.795} fill={color} />
      <circle cx={732.76} cy={346.368} r={27.795} fill="#3f3d56" />
      <path
        d="M766.97 609.35s-27.796-68.418 55.59-119.731zM732.786 608.11s-12.65-72.758-110.557-72.134z"
        fill="#3f3d56"
      />
      <circle cx={136.5} cy={387.5} r={41} fill="#a0616a" />
      <path
        d="M143.928 336.504c-7.84-1.925-16.272-2.247-23.868.49-7.824 2.817-14.263 8.708-19 15.542s-7.918 14.613-10.767 22.425a78.442 78.442 0 00-3.845 13.14 44.992 44.992 0 008.167 34.325c-1.2-3.166 1.822-6.617 5.138-7.303s6.693.474 9.963 1.353a61.559 61.559 0 0017.68 2.078c2.284-.065 4.679-.295 6.578-1.565 5.952-3.98 2.802-14.263 7.754-19.434 1.767-1.845 4.29-2.708 6.567-3.865 8.2-4.167 13.604-12.576 16.156-21.413 1.599-5.54 5.567-21.45 2.185-26.598-3.057-4.653-17.516-7.9-22.708-9.175z"
        fill="#2f2e41"
      />
      <path
        d="M248.066 342.291a24.396 24.396 0 00-18.677 1.041c-10.695 5.016-29.608 17.167-28.889 40.168 1 32 12 53 12 53l-2 65-10 118s-49 40-30 50 51-48 51-48l25-67 9-65s15-68 0-98c0 0 17.328-40.17-7.434-49.209zM367.5 445.5s-17 72 43 92 139 54 139 54l10 17 23-31-4-24-39-11s-73-56-105-60l4-37zM527.307 387.717L548.5 422.5s70 40 88 67 61 56 61 56l-19 45s-54-63-77-69-125-88-125-88z"
        fill="#a0616a"
      />
      <path
        d="M338.568 265.819c-7.805 1.226-15.617 2.454-23.33 4.174-17.917 3.995-35.147 10.616-51.966 17.974a608.405 608.405 0 00-68.447 35.267 132.255 132.255 0 00-16.97 11.523c-3.559 2.964-6.91 6.363-8.82 10.584a33.406 33.406 0 00-2.33 9.221c-1.55 11.12-1.477 22.595 1.535 33.41s9.124 20.955 18.119 27.674a29.88 29.88 0 007.84 4.348 45.675 45.675 0 0011.675 1.957c12.617 1.003 25.798 1.923 37.474-2.964 7.42-3.105 13.701-8.354 20.528-12.607 28.913-18.008 65.646-17.241 97.26-29.92 3.074-1.233 6.204-2.67 8.354-5.189a22.578 22.578 0 003.62-7.187l11.99-33.188c2.533-7.01 5.067-14.023 7.193-21.167 2.224-7.472 3.996-15.07 5.766-22.661 1.524-6.534 3.093-13.376 2.507-20.13-.864-9.962-3.166-10.367-12.316-8.925q-24.839 3.915-49.682 7.806z"
        fill={color}
      />
      <path
        d="M218.066 342.291a24.396 24.396 0 00-18.677 1.041c-10.695 5.016-29.608 17.167-28.889 40.168 1 32 12 53 12 53l-2 65-10 118s-49 40-30 50 51-48 51-48l25-67 9-65s15-68 0-98c0 0 17.328-40.17-7.434-49.209z"
        fill="#a0616a"
      />
      <path
        d="M391.66 257.544S480.5 249.5 476.5 304.5s-34 150-34 150l-77 4s-10-65 4-87z"
        fill="#2f2e41"
      />
      <path
        d="M453.5 275.5s22 14 34 42 48 83 48 83l-59 42-44-45zM559.5 587.5s-19 7-6 21a126.61 126.61 0 0120 29s-4 26 13 25 24-36 20-48-9-69-9-69-35 3-34 8 6 30-4 34zM678.5 567.5s-18 9-13 17 21 31 21 31-6 30 11 33 27-36 24-44-3-39-3-39 1-31-9-31-27 4-27 4 4 28-4 29z"
        fill="#2f2e41"
      />
      <path fill={color} d="M96 617.871h29v50.612H96z" />
    </svg>
  );
};

SvgRunnerStart.propTypes = {
  color: PropTypes.string
};
SvgRunnerStart.defaultProps = {
  color: "primary"
};
export default SvgRunnerStart;
