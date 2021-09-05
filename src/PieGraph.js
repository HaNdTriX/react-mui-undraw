import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgPieGraph = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 846 605"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#f1f1f1" d="M0 22h822v470H0z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M23 1h822v470H23zM23 26.087h822"
      />
      <circle cx={42} cy={14} r={7} fill={color} />
      <circle cx={63} cy={14} r={7} fill={color} />
      <circle cx={84} cy={14} r={7} fill={color} />
      <path
        d="M526.066 326.321a130.623 130.623 0 00-92.365-222.988v130.624z"
        fill="#3f3d56"
      />
      <path
        d="M433.701 103.333a130.639 130.639 0 00-62.488 245.356l62.488-114.732zM153 345.126h25.013v25.013H153z"
        fill={color}
      />
      <path fill="#3f3d56" d="M189.13 345.126h25.013v25.013H189.13z" />
      <path fill="#575a89" d="M225.26 345.126h25.013v25.013H225.26z" />
      <path
        fill="#3f3d56"
        d="M585.169 350.684H688v4.169H585.169zM585.169 363.191H688v4.169H585.169zM585.169 375.697H688v4.169H585.169z"
      />
      <path
        fill="#ffb9b9"
        d="M630.349 561.222l1.653 13.772 9.365 4.407 10.466-3.305 7.161 3.305 2.204-12.67-12.67-14.323-18.179 8.814z"
      />
      <path
        d="M636.96 571.689s-8.541-9.957-8.678-4.979-18.866 22.056-18.866 22.056-29.196 8.814-6.61 14.322 72.163-10.466 73.816-13.771-13.772-28.646-15.424-26.442-9.916 9.916-24.238 8.814z"
        fill="#2f2e41"
      />
      <path
        d="M616.027 408.08s-3.306 25.892 0 29.748 1.652 11.568 0 12.67 2.203 5.508 4.957 7.712 6.61 12.119 6.61 12.119 14.874 39.112 14.874 42.968 6.61 12.119 6.06 14.873 3.856 11.568 3.305 13.221 7.161 16.526 4.958 18.73-32.501 9.915-30.849 4.957 2.755-11.017 1.653-11.017-6.06-6.06-4.958-8.263-33.052-60.045-33.052-60.045z"
        fill="#2f2e41"
      />
      <path
        d="M636.96 571.689s-8.541-9.957-8.678-4.979-18.866 22.056-18.866 22.056-29.196 8.814-6.61 14.322 72.163-10.466 73.816-13.771-13.772-28.646-15.424-26.442-9.916 9.916-24.238 8.814z"
        opacity={0.1}
      />
      <path
        d="M616.027 408.08s-3.306 25.892 0 29.748 1.652 11.568 0 12.67 2.203 5.508 4.957 7.712 6.61 12.119 6.61 12.119 14.874 39.112 14.874 42.968 6.61 12.119 6.06 14.873 3.856 11.568 3.305 13.221 7.161 16.526 4.958 18.73-32.501 9.915-30.849 4.957 2.755-11.017 1.653-11.017-6.06-6.06-4.958-8.263-33.052-60.045-33.052-60.045z"
        opacity={0.1}
      />
      <path
        fill="#ffb9b9"
        d="M559.838 554.384l-6.06 15.424 2.755 21.484 17.628-1.102 9.915-8.814v-18.729l-24.238-8.263z"
      />
      <path
        d="M563.143 573.113s-6.06-19.831-9.365-14.322a87.16 87.16 0 00-5.508 11.017s-26.993 17.628-34.154 17.628-13.772 8.814-4.407 12.119 80.978 7.712 82.08 0-1.102-32.501-4.408-29.747-20.382 8.814-24.238 3.305z"
        fill="#2f2e41"
      />
      <path
        d="M549.371 329.078s-11.568 19.832-12.67 22.035-7.16 16.526 4.407 22.035 21.484-40.214 21.484-40.214z"
        fill="#ffb9b9"
      />
      <path
        d="M561.49 297.128s-17.627 34.154-14.322 35.256 16.526 7.712 16.526 7.712l6.06-34.705z"
        fill="#575a88"
      />
      <path
        d="M561.49 297.128s-17.627 34.154-14.322 35.256 16.526 7.712 16.526 7.712l6.06-34.705z"
        opacity={0.1}
      />
      <path
        d="M562.592 325.773s-3.856 28.645-2.203 34.705-1.102 96.953 1.102 101.91 3.856 36.909 3.856 40.765-4.407 35.255-5.51 38.01-4.406 12.119-2.753 16.526 24.238 15.424 27.543 11.568.55-15.975 3.305-16.526 6.06-26.442 6.06-26.442l18.178-101.36s34.154-84.833 26.442-93.096-76.02-6.06-76.02-6.06z"
        fill="#2f2e41"
      />
      <circle cx={582.974} cy={103.222} r={26.993} fill="#ffb9b9" />
      <path
        d="M573.059 125.257s8.814 23.136 7.712 28.094 25.89-8.814 25.89-8.814-1.652-26.992 0-34.154-33.602 14.874-33.602 14.874z"
        fill="#ffb9b9"
      />
      <path
        d="M647.073 275.98c-.12 4.622-.198 7.376-.198 7.376s1.653 25.34-1.102 33.603-2.754 14.323-4.407 19.831c-.484 1.603-7.078 2.463-16.338 2.843-8.495.347-19.231.297-29.538.06-17.066-.396-32.975-1.31-35.652-1.8-6.06-1.103 1.102-10.467-1.102-15.425s3.856-68.308 3.856-68.308-.55-35.806 2.204-49.578 13.22-35.807 15.424-38.56.55-4.408-4.407-7.713 0-15.975 0-15.975c9.365-7.712 33.052-8.814 33.052-8.814s36.358 37.459 38.561 45.171c1.333 4.66.854 41.888.27 70.632a5660.163 5660.163 0 01-.623 26.657z"
        fill="#575a88"
      />
      <path
        d="M600.602 344.503s-20.933 42.967-4.407 45.722 24.79-39.112 24.79-39.112z"
        fill="#ffb9b9"
      />
      <path
        d="M557.735 89.54c-.954-4.63 2.584-8.957 6.31-11.865A46.112 46.112 0 01592.415 68c7.224.039 14.68 1.95 20.14 6.68 6.368 5.518 9.273 14.366 8.739 22.775s-4.192 16.385-9.125 23.216c-2.368 3.279-6.17 6.673-9.954 5.244a9.251 9.251 0 01-3.681-3.11 57.103 57.103 0 01-6.312-9.699c-1.354-2.631-2.526-5.404-4.445-7.657s-4.804-3.947-7.735-3.542c-2.421.334-4.797 2.039-7.106 1.238-2.57-.891-3.19-4.177-3.395-6.888-.224-2.973-.065-6.416-.89-9.226-.903.482-10.472 4.726-10.916 2.508z"
        fill="#2f2e41"
      />
      <path
        d="M647.073 275.98c-6.17 22.25-20.321 59.747-21.13 61.361-.205.413-.524 1.223-.915 2.292-8.495.347-19.231.297-29.538.06 1.598-4.175 3.46-8.207 3.46-9.513 0-2.754 13.22-73.816 13.22-73.816s-10.466-31.4-19.83-57.842 27.818-21.208 27.818-21.208c19.831-4.958 23.412 3.58 23.412 3.58s1.746 46.439 4.126 68.43c.612 5.635 1.262 9.662 1.934 10.896.881 1.614-.309 7.684-2.557 15.76z"
        opacity={0.1}
      />
      <path
        d="M612.17 159.41s-25.34 10.467-15.975 36.909 19.832 57.841 19.832 57.841-13.221 71.062-13.221 73.817-8.263 17.627-4.958 20.382 25.34 8.263 25.89 5.508a186.304 186.304 0 016.06-18.73c1.102-2.203 26.993-71.061 23.688-77.12s-6.06-79.326-6.06-79.326-15.424-24.238-35.256-19.28z"
        fill="#575a88"
      />
      <path
        d="M556.066 367.321l-97.365-91.364-57.488 118.732a130.035 130.035 0 0062.488 15.891c36.071 0 68.727-19.62 92.365-43.259z"
        fill="#575a89"
      />
      <path
        d="M556.066 367.321l-97.365-91.364-57.488 118.732a130.035 130.035 0 0062.488 15.891c36.071 0 68.727-19.62 92.365-43.259z"
        opacity={0.1}
      />
      <path
        d="M548.066 374.321l-92.365-92.364-62.488 114.732a130.692 130.692 0 00154.853-22.368z"
        fill="#575a89"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M397 604h396"
      />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M738.082 604.96V488.867"
      />
      <circle cx={738.082} cy={488.867} r={16.417} fill="#3f3d56" />
      <path d="M738.082 560.418s-2.345-50.443-50.424-44.58" fill="#3f3d56" />
    </svg>
  );
};

SvgPieGraph.propTypes = {
  color: PropTypes.string
};
SvgPieGraph.defaultProps = {
  color: "primary"
};
export default SvgPieGraph;
