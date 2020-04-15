import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMeetTheTeam = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 887.708 568.788"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#e2e2e2" d="M.379.503h887.329v568.285H.379z" />
      <path fill="#fff" d="M25.752 62.394h836.583v482H25.752z" />
      <path fill={color} d="M0 0h887.329v37.697H0z" />
      <circle cx={28.013} cy={19.273} r={7.567} fill="#fff" />
      <circle cx={54.534} cy={19.273} r={7.567} fill="#fff" />
      <circle cx={81.054} cy={19.273} r={7.567} fill="#fff" />
      <path fill="#e2e2e2" d="M354.496 172.06h180.209v157.394H354.496z" />
      <path
        fill="#ffb8b8"
        d="M416.738 183.627l5.532 22.127-2.371 32.401 21.337 16.595 7.112-55.318-3.951-13.434-27.659-2.371z"
      />
      <path
        fill="#fff"
        d="M436.494 233.413l3.951-21.337 7.903-15.015 19.756 79.816-45.044 6.322-11.854-64.01 10.108-17.257 7.278 13.305 7.902 18.176z"
      />
      <path
        fill="#2f2e41"
        d="M487.322 329.454h-74.939l.404-5.952 17.379-11.061h23.71l33.194 14.226.252 2.787z"
      />
      <circle cx={431.753} cy={176.515} r={18.966} fill="#ffb8b8" />
      <path
        d="M503.667 268.187l-18.174-15.02 1.817 39.285.176 3.77.227 4.982.505 10.872.807 17.379h-39.563l-2.699-8.324-1.072 8.324h-36.183c-.252-4.364-.391-9.623-.164-14.933a73.929 73.929 0 011.854-14.465 23.583 23.583 0 013.96-8.955l-7.113-25.286-3.165 15.802-22.121 1.577s.012-.404.05-1.16v-.013c.315-7.782 2.649-51.822 14.176-60.46l23.47-23.067s.013 1.677.24 4.502v.013c.176 2.396.504 5.612 1.097 9.332v.038c1.324 8.387 3.947 19.296 9.169 28.931a276.816 276.816 0 014.767 9.156c5.511 11.162 5.511 13.772 5.511 13.772l2.283-27.203.012-.1.013-.102 3.04-36.422.453-5.436v-.013s36.083 6.054 47.143 22.651c8.891 13.318 25.425 34.82 31.58 42.754.075.088.138.176.214.264l.92 1.199c.177.227.341.428.48.618.151.189.278.34.378.479l.404.517z"
        fill={color}
      />
      <circle cx={442.816} cy={276.087} r={2.371} fill="#2f2e41" />
      <circle cx={445.977} cy={297.424} r={2.371} fill="#2f2e41" />
      <path
        fill="#ffb8b8"
        d="M494.183 306.117l-7.112 7.112-4.742-12.644 5.154-4.357 6.7 9.889zM404.094 309.278l7.112 7.112 1.581-15.805-4.742-1.581-3.951 10.274z"
      />
      <path
        d="M409.625 161.919s-5.531-7.018 0-10.526v1.754s11.854-13.158 18.967-9.65l6.322-1.753v1.754l3.95-1.754-.79 2.631h5.532l-2.37 1.754s18.176-.877 7.112 12.281c0 0 5.259 7.889.259 12.278 0 0-4.21-9.646-9.742-7.015a8.81 8.81 0 01-9.483-.877s-11.064-.877-9.483 4.386.79 7.017.79 7.017-3.951 2.632-3.161 4.386.79 7.018.79 7.018-3.951-6.14-5.531-5.263-10.274-7.895-3.162-18.421z"
        fill="#2f2e41"
      />
      <path
        d="M385.918 280.038l-3.161 2.026v1.925a18.828 18.828 0 003.16 9.484c3.162 4.741 20.547 20.546 20.547 20.546l4.742-16.595-6.322-15.805-3.951-4.742zM517.1 259.492l8.671.88 2.393 3.07s1.58 7.113-1.58 11.064-30.82 36.352-30.82 36.352l-11.855-14.224 20.547-25.289-.79-3.16z"
        fill={color}
      />
      <path fill="#e2e2e2" d="M625.642 170.515h181.976v158.938H625.642z" />
      <path
        fill="#2f2e41"
        d="M738.074 205.064l-41.094.79-5.532-37.932h46.626v37.142z"
      />
      <path
        d="M758.225 210.99s14.225 0 15.805 15.016-3.951 53.737-3.951 53.737l-4.742 49.786h-11.141l.868-37.932 3.161-54.528-9.483-10.273zM699.746 210.99s-13.434-3.16-26.078 15.016c0 0-32.4 23.707-22.127 32.4s37.932 14.225 37.932 14.225-10.273 21.337-3.951 22.127 15.805-22.918 13.434-26.869-11.064-6.322-11.064-6.322l-20.546-10.273s26.363-22.647 27.801-12.904l7.76-3.692zM728.986 184.122a39.24 39.24 0 0022.917 25.288l-20.547 17.386-24.498-15.805s8.693-5.532 6.322-17.386z"
        fill="#a0616a"
      />
      <circle cx={713.181} cy={177.8} r={18.966} fill="#a0616a" />
      <path
        d="M696.585 209.41l14.425-2.827s4.541 10.73 19.556 9.15 17.661-8.067 17.661-8.067l13.95 3.325s-7.903 8.693-3.952 26.078c0 0 1.58 28.45-7.112 38.723l-.79 15.805s10.273 26.868 4.741 37.932h-77.445s3.161-39.513 17.386-49.786l3.16-7.112s-6.321-27.66-3.16-32.4c0 0 2.37-30.03 1.58-30.82z"
        fill={color}
      />
      <path
        d="M749.238 195.621c-4.305-2.364-6.309-7.67-6.451-12.58-.143-4.91 1.047-9.769 1.14-14.68a11.346 11.346 0 00-.254-2.993 11.514 11.514 0 00-1.646-3.408c-5.599-8.579-15.331-14.614-25.582-14.709a11.362 11.362 0 00-4.329.796c-1.06.425-1.406.373-1.61 1.674a10.832 10.832 0 00-7.434.236 25.152 25.152 0 00-6.5 3.872 29.322 29.322 0 00-3.288 2.846c-5.417 5.612-6.665 14.262-5.095 21.903.51 2.484-1.938 4.882-3.964 6.408s-4.365 2.927-5.36 5.26c-.956 2.243-.43 4.81-.623 7.241a12.386 12.386 0 01-7.902 10.408 3.812 3.812 0 003.678 1.293 9.052 9.052 0 003.832-1.825 22.797 22.797 0 008.5-12.61c.594 2.706.363 5.497.341 8.268a23.094 23.094 0 01-1.674 9.03 13.223 13.223 0 01-6.088 6.704c2.657 1.301 5.585.358 7.837-1.561a16.379 16.379 0 004.51-7.515 37.453 37.453 0 001.805-14.214 20.296 20.296 0 012.547 13.837 21.155 21.155 0 01-7.176 12.455 41.215 41.215 0 0018.864-4.751 10.677 10.677 0 003.87-2.98c1.872-2.597 1.429-6.14.903-9.299-.415-2.497 2.706-6.108.919-7.901a2.828 2.828 0 00-1.727-.823c-6.47-.924-12.289-4.64-15.091-10.543a18.531 18.531 0 01-1.944-7.804 18.967 18.967 0 1136.052 8.241 51.254 51.254 0 01-1.89 11.293c-1.352 4.709-3.643 9.513-7.882 11.97a12.301 12.301 0 004.687.992c5.32.586 10.913.457 15.728-1.88 4.814-2.336 8.64-7.31 8.297-12.65z"
        fill="#2f2e41"
      />
      <path
        d="M735.703 173.454c-14.217-5.699-28.233-6.914-41.884 0v-11.486a7.48 7.48 0 017.48-7.48h28.494a5.91 5.91 0 015.91 5.91z"
        fill="#2f2e41"
      />
      <ellipse cx={732.147} cy={175.824} rx={2.963} ry={4.742} fill="#a0616a" />
      <path fill="#e2e2e2" d="M93.429 171.581h180.764v157.873H93.429z" />
      <path
        fill="#2f2e41"
        d="M196.771 209.619l-38.722-.79v-53.737l38.722 3.951v50.576zM232.234 329.454h-83.68a35.963 35.963 0 012.775-8.803c2.371-4.35 5.335-13.835 7.706-22.234a515.147 515.147 0 003.292-12.284c.542-2.131.857-3.418.857-3.418l41.09-16.597s1.16 2.107 3.026 5.65a.946.946 0 00.089.152 463.863 463.863 0 014.83 9.433h.012c6.735 13.42 15.929 33.119 20.003 48.101z"
      />
      <path
        d="M165.951 186.702l-5.531 27.659 18.966 1.58s3.16-24.497 3.951-25.288-17.386-3.951-17.386-3.951z"
        fill="#ffb8b8"
      />
      <circle cx={178.2} cy={176.824} r={18.966} fill="#ffb8b8" />
      <path
        d="M160.42 206.458s18.176 3.952 18.966 3.161 22.127 3.161 23.707 10.274-2.37 34.77-2.37 34.77 8.692 3.952 7.902 5.533 4.742 3.16 3.161 5.531-30.03 43.465-43.464 42.674-37.932-90.089-37.932-90.089.79-11.063 11.064-11.063 18.966-.79 18.966-.79z"
        fill={color}
      />
      <path
        d="M212.181 270.074s-11.077 2.507-9.094 7.575 13.836 3.488 13.836 3.488z"
        fill="#ffb8b8"
      />
      <path
        d="M177.612 329.454h-29.057c-.088.454-.19.921-.29 1.388a28.16 28.16 0 00-4.313-1.388c-.328-.075-.518-.113-.518-.113s-6.33-23.71-15.02-52.944c-7.706-25.942.126-52.515 1.993-58.178v-.012c.24-.707.378-1.085.378-1.085l7.113-5.524 24.429 74.535 6.394 19.498s.202 1.085.542 2.762c1.034 4.994 3.405 15.222 5.776 17a9.797 9.797 0 012.573 4.061zM192.425 217.127l9.862 1.024 22.538 28.215s8.693 7.903 3.161 11.064-7.902 9.483-7.902 9.483 7.112 15.805-3.161 18.176c0 0-7.112-15.805-9.483-17.386s3.16-7.902 3.16-7.902l-18.175-11.854z"
        fill={color}
      />
      <path
        d="M178.2 146.004s-22.127-3.951-26.078 15.805a100.62 100.62 0 00-1.873 13.909 77.994 77.994 0 01-9.19 32.716l35.56 10.273s-9.482-15.014-7.902-21.337a12.288 12.288 0 00-.064-4.79 18.961 18.961 0 1115.59 1.96c-2.645 5.754-4.084 11.978-.51 16.265a70.124 70.124 0 0015.804 14.224s-3.95-18.966 2.371-30.03 0-47.415-23.708-48.995z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M197.852 171.348l-37.078 2.175-1.02-17.372 32.27-1.16 5.828 16.357z"
      />
      <circle cx={100.855} cy={388.275} r={6.306} fill="#e2e2e2" />
      <circle cx={100.855} cy={423.588} r={6.306} fill="#e2e2e2" />
      <circle cx={100.855} cy={458.901} r={6.306} fill="#e2e2e2" />
      <path
        fill="#e2e2e2"
        d="M127.34 383.231h119.811v10.089H127.34zM127.34 418.544h119.811v10.089H127.34zM127.34 453.856h119.811v10.089H127.34z"
      />
      <circle cx={374.605} cy={388.275} r={6.306} fill="#e2e2e2" />
      <circle cx={374.605} cy={423.588} r={6.306} fill="#e2e2e2" />
      <circle cx={374.605} cy={458.901} r={6.306} fill="#e2e2e2" />
      <path
        fill="#e2e2e2"
        d="M401.09 383.231h119.811v10.089H401.09zM401.09 418.544h119.811v10.089H401.09zM401.09 453.856h119.811v10.089H401.09z"
      />
      <circle cx={646.635} cy={388.275} r={6.306} fill="#e2e2e2" />
      <circle cx={646.635} cy={423.588} r={6.306} fill="#e2e2e2" />
      <circle cx={646.635} cy={458.901} r={6.306} fill="#e2e2e2" />
      <path
        fill="#e2e2e2"
        d="M673.12 383.231h119.811v10.089H673.12zM673.12 418.544h119.811v10.089H673.12zM673.12 453.856h119.811v10.089H673.12z"
      />
    </svg>
  );
};

SvgMeetTheTeam.propTypes = {
  color: PropTypes.string
};
SvgMeetTheTeam.defaultProps = {
  color: "primary"
};
export default SvgMeetTheTeam;
