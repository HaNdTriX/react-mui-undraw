import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHomeSettings = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1103 741.266"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M371.194 68.893s-13.032 37.09-5.013 42.796-27.065 52.306-27.065 52.306l-42.102-11.412 23.056-38.992s3.007-38.992 3.007-44.698 48.117 0 48.117 0z"
        fill="#ffb8b8"
      />
      <path
        d="M371.194 68.893s-13.032 37.09-5.013 42.796-27.065 52.306-27.065 52.306l-42.102-11.412 23.056-38.992s3.007-38.992 3.007-44.698 48.117 0 48.117 0z"
        opacity={0.1}
      />
      <path
        d="M393.067 333.277s3.804 47.551 0 72.278-9.51 93.2-9.51 93.2 0 129.34-20.923 131.241-36.139 3.804-38.04-3.804 9.51-11.412 3.803-15.216-7.608-17.118 0-32.335 0-169.282 0-169.282l-36.138 97.004s-3.804 79.886-7.609 91.299 3.805 32.334-9.51 34.236-28.53-9.51-36.139-13.314 11.413-3.804 7.609-5.706-15.217-7.608-11.413-9.51 7.608-93.2 7.608-93.2 10.462-194.96 23.776-202.568 21.874 5.496 21.874 5.496z"
        fill="#2f2e41"
      />
      <path
        d="M358.83 623.41v15.217s17.119 41.363 0 41.363-30.433 4.286-30.433-1.42v-51.355zM246.61 622.361v15.217s-17.119 41.362 0 41.362 30.432 4.287 30.432-1.42v-51.355z"
        fill="#2f2e41"
      />
      <circle cx={344.565} cy={62.236} r={34.237} fill="#ffb8b8" />
      <path
        d="M355.026 125.954s-9.51 28.531-24.726 22.825l-15.217-5.706-26.628 182.596s20.922 30.433 51.355 11.412 15.216-211.127 15.216-211.127z"
        fill="#f2f2f2"
      />
      <path
        d="M328.397 120.248l-8.559-18.07s-50.404 23.776-58.012 31.385-7.608 19.02-7.608 19.02l13.314 47.551s-3.804 104.613-3.804 108.417-13.314 24.726-3.804 17.118 11.412-15.216 19.02-3.804 24.727 24.727 24.727 24.727z"
        fill="#d0cde1"
      />
      <path
        d="M261.826 257.196l5.706 53.257s34.237 30.433 26.629 32.335-11.413-5.707-11.413-5.707-13.314 13.315-20.922 5.707-26.629-79.886-26.629-79.886z"
        fill="#ffb8b8"
      />
      <path
        d="M343.836 13.85c7.59-.272 15.712-.406 22.111 3.684a32.37 32.37 0 017.642 7.48c6.232 7.88 11.618 17.793 9.303 27.57l-2.69-1.05a17.607 17.607 0 001.699 7.544c-.379-1.1-1.647.68-1.307 1.793l2.962 9.717c-4.87-1.785-10.926 1.83-11.668 6.962-.338-11.287-1.51-24.229-10.665-30.838-4.617-3.333-10.46-4.35-16.083-5.254-5.187-.833-10.624-1.628-15.592.08s-9.199 6.788-8.073 11.92c-2.29-.79-4.852.806-5.984 2.948s-1.192 4.67-1.226 7.092c-2.442 1.726-5.22-1.701-6.216-4.52-2.336-6.619-4.412-13.664-3.153-20.569s6.884-13.503 13.903-13.527a4.873 4.873 0 01-1.267-3.43l5.784-.49a6.394 6.394 0 01-3.82-2.014c2.322 2.556 20.584-4.964 24.34-5.098z"
        fill="#2f2e41"
      />
      <path
        d="M345.516 114.542S361 99.37 366.572 100.298s13.18 14.244 13.18 14.244 45.65 15.216 43.748 30.433-22.825 89.396-22.825 89.396-17.118 89.396-1.902 98.906-72.278 34.237-74.18 22.825-5.706-125.535 0-142.654 20.923-98.906 20.923-98.906zM278.944 144.975h-23.518S239 217.253 237.099 224.86s-5.706 43.747-3.804 43.747 39.943-7.608 39.943-1.902z"
        fill="#d0cde1"
      />
      <path
        fill="#3f3d56"
        d="M623.254 719.398V417.266H24.746v302.132H8.632v21.868h630.736v-21.868h-16.114z"
      />
      <path
        fill={color}
        d="M73.087 493.806h308.462v130.06H73.087zM536.355 498.95a58.896 58.896 0 00-23.595-7.218v88.973h23.595zM478.806 580.705h23.595v-88.973a58.897 58.897 0 00-23.595 7.217zM546.714 506.262v74.443h20.142V550.78a59.13 59.13 0 00-20.142-44.518zM468.448 506.262a59.13 59.13 0 00-20.142 44.518v29.925h20.142z"
      />
      <path
        fill="#3f3d56"
        d="M0 402.879h648v28.774H0zM230.508 615.666c-1.649 6.094-7.295 9.868-7.295 9.868s-2.974-6.106-1.325-12.2 7.295-9.867 7.295-9.867 2.973 6.106 1.325 12.2z"
      />
      <path
        d="M215.512 615.666c1.648 6.094 7.294 9.868 7.294 9.868s2.974-6.106 1.325-12.2-7.294-9.867-7.294-9.867-2.974 6.106-1.325 12.2z"
        fill="#3f3d56"
      />
      <path
        d="M217.934 614.357c4.523 4.403 5.076 11.172 5.076 11.172s-6.782-.37-11.305-4.774-5.076-11.172-5.076-11.172 6.782.37 11.305 4.774zM228.085 614.357c-4.523 4.403-5.075 11.172-5.075 11.172s6.78-.37 11.304-4.774 5.076-11.172 5.076-11.172-6.781.37-11.305 4.774zM192.552 626.169h-45.537a301.139 301.139 0 00-2.508-2.168c-3.507-3.007.503-8.522.503-8.522v-6.513s3.51-21.057 7.016-25.067a7.498 7.498 0 011.466-1.313l-2.12-.901.376-3.583-2.266 2.341-3.01-1.849-.3-2.348-2.36.47 9.235-15.057c8.952-14.319 20.706-8.145 20.706-8.145 19.157-.015 11.825 15.965 11.825 15.965l-2.37.51a9 9 0 01-7.914 10.6 10.93 10.93 0 00-.742 6.74l3.543 2.085 4.512 9.524s3.507 1.502 3.507 8.02 5.015 17.546 5.015 17.546a8.056 8.056 0 011.423 1.665zM286.868 575.808l-3.045-7.108-2.186 1.094-1.416-3.476a1.834 1.834 0 001.249-1.284 8.029 8.029 0 01.662-2.376c.166-.242.39-.443.54-.697a2.868 2.868 0 00.288-1.053c.167-1.249.34-2.503.507-3.758a6.245 6.245 0 00.08-1.669c-.224-1.795-1.91-3.16-2.123-4.955a14.786 14.786 0 00-.11-2.376 4.531 4.531 0 00-1.128-1.692q-1.812-1.994-3.637-3.988a6.465 6.465 0 00-2.146-1.767c-1.416-.599-3.027-.127-4.57-.104a41.67 41.67 0 01-4.822-.604 5.513 5.513 0 00-4.54 1.226c-.386.391-.674.869-1.071 1.243-1.646 1.542-4.88 1.122-5.738 3.205-.53 1.3.27 2.906-.385 4.15-.415.776-1.336 1.243-1.606 2.083a2.13 2.13 0 001.065 2.33 3.69 3.69 0 00.966.415 13.711 13.711 0 0010.975 19.566l3.211 5.623-1.323 1.047 2.537 5.583c-12.689 6.088-11.164 36.037-11.164 36.037s-.104.92-.27 2.515h46.309c.443-4.363.846-9.41 1.162-15.205 1.526-27.917-18.271-34.005-18.271-34.005zM224.146 501.288c20.977 0 37.982-3.865 37.982-8.633h-75.964c0 4.768 17.005 8.633 37.982 8.633z"
        fill="#3f3d56"
      />
      <circle cx={506.43} cy={536.392} r={17.84} fill="#3f3d56" />
      <path
        d="M331.86 406.298l160.528-160.527c-126.314 0-155.59 100.993-162.345 144.646-6.755-43.653-36.031-144.646-162.346-144.646l160.528 160.527a88.284 88.284 0 00-.197 3.832l2.015-2.014 2.014 2.014s-.028-1.363-.197-3.832z"
        fill="#3f3d56"
      />
      <circle cx={330.043} cy={237.714} r={62.038} fill={color} />
      <path
        d="M406.381 274.314l-26.628 11.412s-51.356 7.608-51.356-13.314 51.356-9.51 51.356-9.51l17.12-5.474z"
        fill="#ffb8b8"
      />
      <path
        d="M400.675 133.563l22.825 5.706 17.118 100.808s5.706 26.629-3.804 28.53-36.139 17.12-36.139 17.12-3.804-28.531-11.412-28.531l19.02-15.217-11.412-66.571z"
        fill="#d0cde1"
      />
      <path
        d="M328.643 261.599l-31.793-31.793a5.525 5.525 0 117.813-7.813l23.451 23.45 74.833-85.335a5.524 5.524 0 118.307 7.284z"
        fill="#f2f2f2"
      />
      <path
        d="M735 0v368h368V0zm187 360a10 10 0 1110-10 10 10 0 01-10 10z"
        fill="#d0cde1"
      />
      <circle cx={794.588} cy={72.029} r={16.588} fill="#3f3d56" />
      <circle cx={794.588} cy={146.676} r={16.588} fill="#3f3d56" />
      <circle cx={794.588} cy={221.324} r={16.588} fill="#3f3d56" />
      <circle cx={794.588} cy={295.971} r={16.588} fill="#3f3d56" />
      <rect
        x={840.21}
        y={204.74}
        width={219.79}
        height={33.17}
        rx={8}
        fill="#3f3d56"
      />
      <rect
        x={840.21}
        y={279.38}
        width={219.79}
        height={33.18}
        rx={8}
        fill="#3f3d56"
      />
      <rect
        x={840.21}
        y={130.09}
        width={219.79}
        height={33.17}
        rx={8}
        fill="#3f3d56"
      />
      <rect
        x={840.21}
        y={55.44}
        width={219.79}
        height={33.18}
        rx={8}
        fill="#3f3d56"
      />
      <path
        d="M976 55.44v33.18H848.21a8.024 8.024 0 01-8-8V63.44a8.023 8.023 0 018-8zM943 204.74v33.17h-94.79a8.023 8.023 0 01-8-8v-17.17a8.023 8.023 0 018-8zM892 279.38v33.18h-43.79a8.024 8.024 0 01-8-8v-17.18a8.023 8.023 0 018-8z"
        fill={color}
      />
      <rect
        x={840.21}
        y={130.09}
        width={219.79}
        height={33.17}
        rx={8}
        fill={color}
      />
      <path
        d="M921.847 349.68c-9.261-5.688-19.704 2.187-23.164 10.92-4.354 10.991 2.913 22.677 8.733 31.572 6.615 10.109 12.654 20.633 15.022 32.625 2.045 10.354.843 21.685-4.851 30.735-11.405 18.125-36.655 18.215-55.61 17.991-9.218-.109-19.41-.744-27.35-5.944a19.083 19.083 0 01-7.242-23.136c3.34-8.636 12.45-12.364 21.215-11.173 9.688 1.317 17.68 7.41 22.678 15.626 5.763 9.475 7.978 20.732 9.305 31.604.667 5.471 1.381 11.715-1.398 16.75-2.113 3.829-5.932 6.32-9.95 7.818a59.714 59.714 0 01-14.982 3.053 186.706 186.706 0 01-19.327.886 338.018 338.018 0 01-38.46-2.733c-25.766-3.047-51.524-7.528-77.557-7.06a167.37 167.37 0 00-19.066 1.348c-5.794.771-11.767 2.112-16.567 5.635-8.584 6.3-11.692 16.724-13.963 26.649-2.522 11.022-5.2 21.903-10.896 31.795-5.466 9.493-13.56 17.815-23.907 21.88a36.276 36.276 0 01-15.276 2.58c-3.858-.203-3.847 5.798 0 6 11.768.621 23.104-4.33 31.88-11.947 9.19-7.976 15.213-18.998 19.147-30.372a154.38 154.38 0 004.489-16.798c1.114-4.969 2.233-10.063 4.297-14.74 1.97-4.469 4.815-8.56 9.091-11.075 5.12-3.01 11.314-3.67 17.116-4.213 26.685-2.495 53.385 1.491 79.802 4.898 13.257 1.71 26.547 3.302 39.908 3.904 12.738.574 25.922.528 38.488-1.893 10.403-2.004 20.993-7.434 23.142-18.78 1.166-6.154.213-12.453-.678-18.58a101.568 101.568 0 00-3.808-17.072c-3.483-10.612-9.563-20.786-19.459-26.499-8.762-5.058-19.902-6.72-29.249-2.279-9.618 4.57-14.565 15.493-13.14 25.814 1.463 10.583 9.702 17.848 19.45 21.086 9.821 3.26 20.577 3.121 30.802 2.914 10.837-.22 22.124-.963 32.305-4.987 10.654-4.212 18.957-11.846 23.267-22.552 4.44-11.031 4.035-23.502.634-34.748a89.28 89.28 0 00-7.656-17.601c-3.016-5.398-6.621-10.415-9.811-15.704-2.921-4.843-5.619-10.173-5.808-15.941a14.615 14.615 0 015.469-11.639c3-2.482 6.639-3.444 9.906-1.437 3.3 2.026 6.317-3.161 3.029-5.18z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgHomeSettings.propTypes = {
  color: PropTypes.string
};
SvgHomeSettings.defaultProps = {
  color: "primary"
};
const MemoSvgHomeSettings = React.memo(SvgHomeSettings);
export default MemoSvgHomeSettings;
