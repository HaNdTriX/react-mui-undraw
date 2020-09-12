import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSpeedTest = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1012 794"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M329.31 196.137l-119.93 99.459a54.313 54.313 0 11-83.524 69.268L18.334 454.032l172.356 207.83 310.976-257.894zM1012 497.262c0 122.84-73.026 165.73-163.108 165.73s-163.109-42.89-163.109-165.73 163.109-279.11 163.109-279.11S1012 374.421 1012 497.261z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M842.95 644.201l1.67-102.805 69.521-127.185-69.259 111.058.751-46.226 47.914-92.017-47.715 79.784v.001l1.35-83.139 51.307-73.257-51.094 60.183.844-152.447-5.304 201.813.436-8.326-52.164-79.845 51.328 95.827-4.861 92.852-.144-2.465-60.136-84.026 59.953 92.733-.607 11.612-.109.174.049.953-12.331 235.573h16.476l1.976-121.678 59.807-92.505-59.658 83.358z"
      />
      <ellipse cx={707} cy={777} rx={228} ry={17} fill="#3f3d56" />
      <path fill="#3f3d56" d="M692 0h36v782h-36z" />
      <path
        d="M914.473 749.111c0 22.469-13.356 30.314-29.834 30.314q-.572 0-1.143-.013a48.69 48.69 0 01-2.267-.103c-14.87-1.053-26.423-9.302-26.423-30.198 0-21.625 27.634-48.912 29.71-50.932l.003-.003.12-.117s29.834 28.584 29.834 51.052z"
        fill={color}
      />
      <path
        d="M883.552 775.988l10.912-15.247-10.939 16.92-.029 1.751a48.69 48.69 0 01-2.267-.103l1.177-22.48-.01-.174.02-.033.111-2.123-10.966-16.963 11 15.37.026.451.89-16.984-9.39-17.528 9.504 14.547.925-35.213.003-.12v.117l-.154 27.767 9.347-11.008-9.385 13.4-.247 15.207 8.726-14.595-8.763 16.832-.138 8.454 12.67-20.312-12.717 23.262z"
        fill="#3f3d56"
      />
      <path
        d="M649.227 732.29l-6.382-4.741s-4.224 23.597.49 27.132 22.39 9.428 22.39 16.498 40.068 16.499 41.246 5.893-3.535-16.499-3.535-16.499-18.855-18.855-21.212-22.39-8.25-10.607-8.25-10.607z"
        fill="#2f2e41"
      />
      <path
        d="M743.504 438.853s-.177 1.037-.483 2.935a1070.51 1070.51 0 00-1.144 7c-4.95 30.204-19.385 119.119-18.407 122.053 1.178 3.535 9.427 16.498 0 20.034-.908.342-1.886 1.45-2.935 3.193a68.494 68.494 0 00-4.984 11.761c-5.622 16.31-11.632 42.413-15.108 60.49-1.52 7.944-2.558 14.331-2.864 17.678a9.612 9.612 0 00-.035 2.333c1.178 4.714-7.071 21.212-10.606 25.926s-9.428 9.428-8.25 14.142-29.461 17.677-32.997 9.428-3.535-12.964-4.713-15.32-2.357-18.856 3.535-21.213 2.357-43.603 8.25-51.852c1.967-2.746 4.972-12.044 8.119-23.228a764.882 764.882 0 003.712-13.729c4.973-19.173 9.38-38.465 9.38-38.465l-1.178-137.88 64.815-8.249 1.662 3.665 3.311 7.271zM747.039 665.118s9.428-9.428 14.142 0 9.427 45.96 17.676 54.21 18.856 49.494 7.071 51.851-24.747-3.535-25.926-10.606-25.926-43.603-25.926-47.138 16.498-16.499 16.498-16.499z"
        fill="#2f2e41"
      />
      <path
        d="M602.088 374.038s15.32 137.88 18.856 150.843 22.39 62.458 28.283 70.708 43.603 75.421 48.317 78.957 14.141 12.963 14.141 12.963 17.677 17.677 20.034 21.212 22.39-7.07 23.57-14.142-1.18-18.855-2.358-23.569 2.357-11.784-1.178-15.32-21.212-21.212-21.212-29.461-30.64-56.566-42.425-67.173-9.428-28.283-9.428-28.283v-71.886l64.816-20.034s-3.536-56.566-11.785-56.566-116.668-18.855-129.63-8.249z"
        fill="#2f2e41"
      />
      <circle cx={697.544} cy={138.346} r={38.889} fill="#9f616a" />
      <path
        d="M684.58 168.986s-4.713 17.677-10.606 22.39 15.32 24.748 15.32 24.748l40.068 2.357 7.07-22.39s-12.962-25.927-9.427-42.425-42.424 15.32-42.424 15.32z"
        fill="#9f616a"
      />
      <path
        d="M668.082 189.02s10.606 1.178 12.963 4.713 18.856 14.142 31.819 11.785 21.212-5.892 23.569-4.714 7.07 25.926 7.07 25.926l-12.962 37.711 2.356 103.705 3.536 28.283s7.07-9.428-21.212-3.536-64.816-4.713-76.6-5.892-31.819-4.714-32.997-11.785 3.535-32.996 3.535-32.996l18.855-78.957 11.785-42.425z"
        fill="#3f3d56"
      />
      <path
        d="M679.23 183.7s-9.97-5.287-13.505-.573-48.317 11.785-48.317 15.32-9.427 98.991-7.07 107.24-4.714 17.677-4.714 17.677l-8.25 35.354s-22.39 67.172-12.963 69.53 17.677 0 21.213 0 2.357-44.782 11.784-56.567 22.391-41.246 24.748-47.138 31.818-87.206 30.64-96.634 6.433-44.208 6.433-44.208zM728.184 189.02s9.427 0 10.606 2.357 12.963 17.676 17.677 21.212 21.212 18.855 21.212 22.39-34.175 29.462-34.175 29.462-14.142 69.53-7.071 93.099 17.677 80.135 12.963 83.67-15.32 4.714-15.32 0-7.07-55.387-12.963-65.994-23.57-77.778-16.499-96.633 23.57-89.563 23.57-89.563z"
        fill="#d0cde1"
      />
      <path
        d="M572.627 305.687s-1.179 36.533 11.784 55.388 21.213 40.068 21.213 40.068 21.212-5.893 24.747-12.963 25.927-1.179 25.927-3.536-27.105-14.141-29.462-16.498-10.606-2.357-15.32-7.071-5.892-15.32-5.892-15.32l-4.714-30.64z"
        fill="#9f616a"
      />
      <path
        d="M670.759 114.367c-2.992-.271-6.078-.57-8.722-1.996-5.924-3.195-7.495-12.294-2.985-17.29a22.344 22.344 0 014.143-3.332l8.958-6.098c3.962-2.696 8.017-5.437 12.638-6.708 4.18-1.15 8.594-1.032 12.92-.763 8.399.522 16.85 1.6 24.749 4.5s15.268 7.75 20.052 14.673c7.585 10.975 7.689 25.775 3.512 38.444s-12.113 23.702-19.932 34.51l-4.056-19.794c-.362-1.764-.83-3.696-2.295-4.74-3.645-2.593-8.103 2.732-12.576 2.698-2.874-.023-5.287-2.387-6.376-5.046s-1.161-5.606-1.413-8.469c-.534-6.064-2.654-14.502-8.396-17.846-5.352-3.117-14.206-2.196-20.221-2.743z"
        fill="#2f2e41"
      />
      <path
        d="M672.94 439.804s3.98 115.128 6.338 118.663 0-119.024 0-119.024z"
        opacity={0.1}
      />
      <path
        d="M626.836 198.447h-9.428s-40.067 54.21-35.354 57.745 0 12.963 0 12.963l-9.427 17.677s-11.785 10.606-8.25 12.963 8.25 11.785 8.25 11.785 23.569-3.536 30.64 10.606l15.284-19.296z"
        fill="#d0cde1"
      />
      <path
        d="M734.076 299.795s-25.926 1.178-55.388-17.677l-29.461-12.963s-25.926-40.068-28.283-32.997 3.535 21.212 3.535 21.212S588.924 273.825 588 276s19.98-3.31 19.98-3.31-3.535 22.391 16.5 23.57 25.925-3.536 25.925-3.536 84.85 70.708 98.991 48.317-15.32-41.246-15.32-41.246z"
        fill="#9f616a"
      />
      <path
        d="M764.716 230.266l12.963 4.714v35.353l4.714 7.071s-1.179 14.142-4.714 17.677-10.606 2.357-8.25 10.606a44.667 44.667 0 011.18 16.499s-21.213 27.104-22.392 23.569-17.676-47.139-20.033-47.139 23.569-68.35 23.569-68.35z"
        fill="#d0cde1"
      />
      <path
        d="M609.748 408.803s-12.185-11.785-6.092-12.374 27.305-12.374 30.84-6.482-24.748 18.856-24.748 18.856z"
        fill="#2f2e41"
      />
      <path
        d="M423.717 755A226.922 226.922 0 00456 638c0-125.921-102.08-228-228-228S0 512.079 0 638a226.922 226.922 0 0032.283 117z"
        fill="#3f3d56"
      />
      <circle cx={228} cy={623} r={22} fill={color} />
      <circle cx={53} cy={659} r={11} fill={color} />
      <circle cx={59.454} cy={563.726} r={11} fill={color} />
      <circle cx={114.056} cy={485.385} r={11} fill={color} />
      <circle cx={201.208} cy={446.356} r={11} fill={color} />
      <circle cx={296.013} cy={457.787} r={11} fill={color} />
      <circle cx={371.39} cy={516.415} r={11} fill={color} />
      <circle cx={405.804} cy={605.49} r={11} fill={color} />
      <circle cx={389.427} cy={699.567} r={11} fill={color} />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M228 623l113-86"
      />
      <circle
        cx={332.542}
        cy={198.352}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={416.542} cy={370.352} r={14.756} fill="#3f3d56" />
      <circle cx={168.223} cy={331.166} r={42.777} fill="#f2f2f2" />
    </svg>
  );
};

SvgSpeedTest.propTypes = {
  color: PropTypes.string
};
SvgSpeedTest.defaultProps = {
  color: "primary"
};
export default SvgSpeedTest;