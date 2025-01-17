import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgAnalyze = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 825.211 661.163"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={614.913} cy={645.163} rx={191} ry={16} fill="#3f3d56" />
      <path
        d="M804.913 466.181c0 78.406-46.61 105.782-104.108 105.782s-104.108-27.376-104.108-105.782 104.108-178.15 104.108-178.15 104.108 99.745 104.108 178.15z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M697.013 559.97l1.066-65.619 44.373-81.179-44.206 70.886.479-29.505 30.582-58.733-30.455 50.925.862-53.066 32.748-46.758-32.612 38.414.538-97.303-3.385 128.812.278-5.314-33.295-50.964 32.761 61.165-3.102 59.265-.092-1.573-38.384-53.632 38.268 59.189-.388 7.411-.07.112.032.608-7.871 150.361h10.516l1.262-77.664 38.173-59.044-38.078 53.206z"
      />
      <path
        d="M772.387 607.274c0 22.469-13.357 30.314-29.834 30.314q-.573 0-1.143-.013a48.69 48.69 0 01-2.267-.103c-14.87-1.053-26.424-9.302-26.424-30.198 0-21.625 27.634-48.912 29.71-50.932l.004-.003.12-.117s29.834 28.584 29.834 51.052z"
        fill={color}
      />
      <path
        d="M741.466 634.15l10.912-15.246-10.94 16.92-.028 1.751a48.69 48.69 0 01-2.267-.103l1.176-22.48-.01-.174.02-.033.112-2.123-10.966-16.963 11 15.37.026.451.889-16.984L732 577.008l9.503 14.547.925-35.213.004-.12v.117l-.155 27.767 9.347-11.008-9.385 13.4-.247 15.207 8.727-14.595-8.763 16.832-.138 8.454 12.669-20.312-12.717 23.263z"
        fill="#3f3d56"
      />
      <circle cx={225.207} cy={209.206} r={47.904} fill="#f2f2f2" />
      <circle
        cx={235.118}
        cy={194.89}
        r={47.904}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M168.493 119.455l-38.568-64.6a30.801 30.801 0 10-12.665 9.501z"
        fill="#3f3d56"
      />
      <circle cx={105.723} cy={35.762} r={14.316} fill={color} />
      <path
        d="M292.193 111.995l53.352-53.05a30.801 30.801 0 10-12.283-9.99z"
        fill="#3f3d56"
      />
      <circle cx={358.216} cy={30.842} r={14.316} fill={color} />
      <path
        d="M329.358 230.216l64.382 38.933a30.801 30.801 0 106.721-14.335z"
        fill="#3f3d56"
      />
      <circle cx={424.073} cy={274.644} r={14.316} fill={color} />
      <path
        d="M223.64 294.877l-22.201 71.888a30.801 30.801 0 1015.535 3.054z"
        fill="#3f3d56"
      />
      <circle cx={203.444} cy={397.526} r={14.316} fill={color} />
      <path
        d="M135.324 207.942l-75.124-4.15a30.801 30.801 0 10.795 15.812z"
        fill="#3f3d56"
      />
      <circle cx={30.838} cy={213.18} r={14.316} fill={color} />
      <circle cx={810.455} cy={48.515} r={14.756} fill="#f2f2f2" />
      <circle
        cx={804.455}
        cy={43.515}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path fill={color} d="M683.913 51.83h33.333v33.333h-33.333z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M690.58 45.163h33.333v33.333H690.58z"
      />
      <path d="M607.413 586.663s-3 19-8 22 26 10 26 10l5-30z" fill="#fbbebe" />
      <path
        d="M644.413 369.663l11 13-5 45-4 89s8 77 0 79-44 1-43-4 2-9 4-16-2-32-2-32l5-28-18-121zM608.413 605.663s-11-2-12 0-20 23-23 23-25 20-2 21 61-17 61-17-5.592-25.446-5.296-24.223-18.704 2.223-18.704-2.777z"
        fill="#2f2e41"
      />
      <path
        d="M596.413 559.663s28 31 29 34 16 0 16 0l6-20-5-7-28-23z"
        fill="#fbbebe"
      />
      <path
        d="M636.413 582.663l-14.5 13.648s18.5 28.352 18.5 31.352 1 28 11 24 11-44 11-44-1-41-7-44-19.15-2.052-19.15-2.052 8.15 20.052.15 21.052zM553.413 280.663s-5 16-6 20-7 15-7 32 2 37 0 39-34 114-20 126 60 52 63 57 4 17 10 15 29-22 30-26-13-11-13-11-28-41-35-40-6-5-5-8 3-5 0-5-1-8 0-12 24-58 24-58l61-27s-3-73-25-93l-5-12s-56-4-72 3z"
        fill="#2f2e41"
      />
      <path
        d="M578.413 122.663s5 35-7 37-22 1-22 2 30 32 30 32l28-2 25-27s-23-4-23-18-1-24-1-24z"
        fill="#fbbebe"
      />
      <path
        d="M578.413 122.663s5 35-7 37-22 1-22 2 30 32 30 32l28-2 25-27s-23-4-23-18-1-24-1-24z"
        opacity={0.1}
      />
      <circle cx={593.913} cy={106.163} r={31} fill="#fbbebe" />
      <path
        d="M566.413 156.663s-39 5-42 18 20 94 23 101 2 12 2 12a39.566 39.566 0 0132-7c19 4 46 2 46 2s9-37 11-41 10-26 10-32 12-31 12-31-6-18-28-17c0 0-9.596-4.295-12.298-1.147s-17.702 17.147-36.702 11.147-17-15-17-15z"
        fill="#3f3d56"
      />
      <path
        d="M535.413 173.663h-11l-6 79s22 6 25 2-8-81-8-81z"
        fill="#3f3d56"
      />
      <path
        d="M521.413 244.663l-3 8s-2 26 10 25 19-16 19-16-7-19-15-17-11 0-11 0zM641.413 173.663l19 5s14 51 15 52 2 7 2 7 0 1 2 4 5 1 3 5-5 2-3 6 1 15 1 15-5-19-23-14l-12-54z"
        fill="#3f3d56"
      />
      <path
        d="M558.603 80.62c-6.304 11.077-7.723 24.196-8.593 36.91-.373 5.453-.654 11.05.964 16.27 1.705 5.506 5.5 11.099 3.554 16.524-1.882 5.247-8.176 7.346-11.691 11.672-2.979 3.667-3.727 8.69-3.468 13.407s1.402 9.347 1.737 14.059a41.648 41.648 0 01-8.958 28.705c15.062-.581 31.165-7.26 37.517-20.93 1.9-4.086 2.823-8.559 4.536-12.726 1.939-4.715 4.864-8.982 6.7-13.738 2.77-7.175 2.92-15.053 3.035-22.744.069-4.603.118-9.33-1.475-13.649-3.507-9.509-14.413-15.653-15.496-25.73a5.09 5.09 0 01.45-3.132 8.31 8.31 0 011.829-1.85c6.81-6.01 5.687-18.735 13.793-22.833 3.638-1.838 8.023-1.191 11.929-.027 4.338 1.292 8.666 3.294 11.488 6.832 5.682 7.126 3.44 17.42 1.681 26.363a157.367 157.367 0 00-2.69 39.412 25.503 25.503 0 00.927 6.242c1.045 3.3 3.27 6.073 4.95 9.1a30.063 30.063 0 013.138 20.418c-1.24 6.06-4.322 12.513-1.61 18.072a16.32 16.32 0 004.866 5.41c8.862 6.946 20.112 11.25 26.701 20.38 1.135-7.458-1.03-14.963-2.628-22.335s-2.57-15.4.714-22.19c1.44-2.98 3.643-5.573 4.82-8.665 2.721-7.143-.521-14.977-2.49-22.363a133.163 133.163 0 01-3.041-17.622l-2.031-16.022c-1.679-13.245-3.435-26.76-9.251-38.778-10.961-22.647-35.765-31.059-57.973-18.51a37.55 37.55 0 00-13.934 14.069z"
        fill="#ff6584"
      />
      <path
        d="M531.413 249.663s-6 18 1 18 20-11 21-20 19-43 6-40-19 28-19 28z"
        fill="#fbbebe"
      />
      <path fill={color} d="M632.413 173.663l-33 107 45 10 33-104-45-13z" />
      <path
        d="M674.413 250.663l6.248 10.44s2.752 19.56-11.248 19.56-34-19-34-19-10-4-16-3-39 0-25-17 38 0 38 0l25 12 13-7z"
        fill="#fbbebe"
      />
      <path d="M665.913 237.163l-10 16s23 3 25 8-9-26-9-26z" fill="#3f3d56" />
    </svg>
  );
};

SvgAnalyze.propTypes = {
  color: PropTypes.string
};
SvgAnalyze.defaultProps = {
  color: "primary"
};
export default SvgAnalyze;
