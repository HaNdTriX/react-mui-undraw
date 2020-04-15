import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHooked = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 817.155 717.888"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M180.976 22.265l-75.358 146.982h15.213v119.859H44.167L0 375.252 547.257 655.83l180.976-352.987L180.976 22.265z"
      />
      <path fill="#3f3d56" d="M18.095 186.37h91.321v91.321H18.095z" />
      <path
        d="M410.093 266.276h.397v-5.708h-.673l-.392-8.117a3.407 3.407 0 00-3.568-3.238l-30.42 1.47a3.407 3.407 0 00-3.239 3.568l3.025 62.567a3.407 3.407 0 003.567 3.238l30.42-1.47a3.407 3.407 0 003.24-3.568z"
        fill="#2f2e41"
      />
      <ellipse
        cx={583.876}
        cy={367.36}
        rx={7.454}
        ry={6.848}
        transform="rotate(-2.768 -1396.531 4283.925)"
        fill={color}
      />
      <ellipse
        cx={551.753}
        cy={654.391}
        rx={265.402}
        ry={24.257}
        fill="#3f3d56"
      />
      <path
        d="M322.617 613.5c6.706 24.79 29.677 40.143 29.677 40.143s12.097-24.84 5.391-49.63-29.677-40.145-29.677-40.145-12.098 24.84-5.391 49.631z"
        fill="#3f3d56"
      />
      <path
        d="M332.471 608.171c18.402 17.914 20.65 45.452 20.65 45.452s-27.588-1.506-45.99-19.42-20.65-45.452-20.65-45.452 27.588 1.507 45.99 19.42z"
        fill={color}
      />
      <path
        d="M505.73 25.564s1.976 6.584-9.218 12.51-14.485 28.312-1.316 34.896 17.118 15.144 10.534 21.07-18.435 21.728-2.633 25.678 17.777 11.852 13.168 15.144 10.535-5.926 10.535-5.926 2.633 15.802 16.46 11.852 52.674-79.01 32.921-89.546-70.45-25.678-70.45-25.678z"
        fill="#2f2e41"
      />
      <path
        fill="#9f616a"
        d="M556.747 583.76l-4.281 39.953 18.55 11.415 17.123-2.854-8.562-48.514h-22.83z"
      />
      <circle cx={542.478} cy={64.371} r={39.953} fill="#9f616a" />
      <path
        d="M528.923 83.634s-3.568 60.643-7.848 60.643 49.94-2.854 49.94-2.854-22.83-39.953-11.414-52.795-30.678-4.994-30.678-4.994z"
        fill="#9f616a"
      />
      <path
        fill="#2f2e41"
        d="M588.139 403.971l-18.55 71.345 14.269 121.286-32.819-2.854-12.842-189.777h49.942z"
      />
      <path
        opacity={0.2}
        d="M588.139 403.971l-18.55 71.345 14.269 121.286-32.819-2.854-12.842-189.777h49.942z"
      />
      <path
        d="M559.6 616.578s-1.426-8.561-15.695 0-74.198 35.673-42.807 41.38 95.602-7.134 95.602-11.415 1.427-31.392-4.28-28.538-24.258 21.403-32.82-1.427z"
        fill="#2f2e41"
      />
      <path
        d="M578.15 606.59s22.83 35.672 24.258 45.66 22.83-22.83 22.83-22.83l-19.977-37.099z"
        fill="#9f616a"
      />
      <path
        d="M502.525 409.679l25.684 85.613s45.66 121.286 48.514 119.86 37.1-9.989 38.527-14.27-42.807-119.859-42.807-119.859l-5.708-74.198zM629.518 623.713a18.732 18.732 0 00-18.55 11.415c-5.707 12.842-12.841 14.269-14.268 15.696s4.28 31.391 0 34.245-8.561 32.819 5.708 32.819 37.099-15.696 35.672-18.55-1.427-22.83 2.854-31.392 11.415-22.83 0-31.391-11.416-12.842-11.416-12.842z"
        fill="#2f2e41"
      />
      <path
        d="M493.964 276.978l-2.854 25.684s-21.403 21.403-28.538 47.087-65.637 68.491-48.514 74.199 37.099 8.561 87.04 0 128.42 9.988 128.42-37.1c0 0 9.989-12.842 17.123 5.708a372.95 372.95 0 0017.123 37.1s17.123-29.966 11.415-42.808 0-11.415-7.134-25.684-42.807-67.064-57.076-69.917-41.38-39.953-39.953-44.234-77.052 29.965-77.052 29.965z"
        fill={color}
      />
      <path
        d="M571.016 117.166s-58.503 12.842-61.356 21.403c-1.606 4.816-9.08 13.695-15.313 20.542a80.198 80.198 0 00-20.14 40.865c-1.487 9.103 4.769 17.289 7.628 27.774 8.561 31.391 14.982 23.544 6.421 46.374s42.807 31.391 62.783 21.403 42.094-69.204 42.094-76.339 19.263-87.754 3.567-93.461-25.684-8.561-25.684-8.561z"
        fill="#575a88"
      />
      <path
        d="M489.683 185.656l-17.123 75.626-56.362 24.97s-42.807-9.988-44.234 5.708c-.931 10.247 48.515 14.269 48.515 14.269l82.046-32.105 18.55-69.918z"
        fill="#9f616a"
      />
      <path
        d="M509.66 157.119s-35.673 21.403-27.112 32.818 29.965 29.965 35.673 29.965 9.988-34.246 9.988-44.234-18.55-18.55-18.55-18.55z"
        fill="#575a88"
      />
      <path
        d="M545.352 12.49s2.189 7.294-10.211 13.858-16.047 31.364-1.459 38.658 18.964 16.776 11.67 23.341-20.423 24.07-2.917 28.447 19.694 13.129 14.588 16.776 11.67-6.565 11.67-6.565 2.918 17.506 18.235 13.13 30.6-83.93 13.526-104.42c-15.876-19.05-55.102-23.225-55.102-23.225z"
        fill="#2f2e41"
      />
      <path
        d="M540.693 4.982c.003-10.686 31.974-3.008 45.68 11.912 9.493 10.332 23.91 25.876 11.829 36.833s20.708 25.321 29.502 29.676 26.156 17.672 10.479 26.606-15.425 17.953-9.525 20.088-13.008-3.174-13.008-3.174 1.91 17.643-14.02 17.559-61.632-87.632-50.714-111.966C561.068 9.89 540.693 4.982 540.693 4.982z"
        fill="#2f2e41"
      />
      <path
        d="M547.618 2.64c-42.753-2.574-47.043 29.607-47.043 29.607.295 18.623 29.87 9.55 38.084 12.325 9.91-7.129 29.012-20.617 42.674-30.243A64.612 64.612 0 00547.618 2.64z"
        fill="#2f2e41"
      />
      <path
        d="M362.646 184.776l-4.107-1.344c-14.658-4.942-24.287-8.098-27.717-15.83a12.033 12.033 0 016.158-16.125 13.089 13.089 0 0110.997.235 13.088 13.088 0 017.205-8.31 12.033 12.033 0 0116.088 6.256c3.43 7.731-.692 16.988-6.865 31.171zM401.38 214.487l-2.794-.915c-9.978-3.364-16.532-5.512-18.867-10.774a8.19 8.19 0 014.192-10.977 8.91 8.91 0 017.485.16 8.909 8.909 0 014.905-5.656 8.19 8.19 0 0110.95 4.258c2.335 5.263-.471 11.564-4.673 21.218zM376.974 84.732l-2.652-2.456c-9.416-8.87-15.634-14.63-15.543-21.703a10.063 10.063 0 0110.309-10.108 10.947 10.947 0 018.275 4.017 10.946 10.946 0 018.377-3.802 10.063 10.063 0 0110.045 10.37c-.092 7.073-6.456 12.67-16.097 21.296z"
        fill="#ff6584"
      />
      <path fill="#2f2e41" d="M667.281 596.953h52.586v58.738h-52.586z" />
      <path
        fill="#3f3d56"
        d="M733.857 561l27.335 47.345 27.335 47.346H679.188l27.335-47.346L733.857 561z"
      />
    </svg>
  );
};

SvgHooked.propTypes = {
  color: PropTypes.string
};
SvgHooked.defaultProps = {
  color: "primary"
};
export default SvgHooked;
