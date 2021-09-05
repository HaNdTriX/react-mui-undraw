import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgSharedWorkspace = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 961.845 436.795"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M470.792 363.136c14.376 15.427 15.119 38.1 15.119 38.1s-22.565-2.338-36.941-17.764-15.12-38.1-15.12-38.1 22.566 2.338 36.942 17.764z"
        fill={color}
      />
      <path
        d="M516.049 387.215c-15.427 14.376-38.1 15.119-38.1 15.119s2.338-22.565 17.764-36.94 38.1-15.12 38.1-15.12-2.338 22.565-17.764 36.941z"
        fill={color}
      />
      <path
        d="M512.215 433h-56.74a5.803 5.803 0 01-5.218-3.265l-12.353-25.393a5.803 5.803 0 015.218-8.342h81.446a5.803 5.803 0 015.219 8.342l-12.353 25.393a5.803 5.803 0 01-5.22 3.265z"
        fill="#3f3d56"
      />
      <circle cx={767.027} cy={76.07} r={47.244} fill="#ffb8b8" />
      <path
        d="M731.766 99.692s8.9 67.1-4.793 74.63 81.478 8.217 81.478 8.217-21.225-58.199-11.64-76z"
        fill="#ffb8b8"
      />
      <path
        d="M877.946 182.878l-7.915 36.042-16.736 76.253-.5 4.176-5.777 48.344-3.842 32.117-2.576 21.573c-15.663 8.05-27.015 13.607-27.015 13.607s-.976-4.895-2.55-11.16c-10.993 3.297-31.333 8.764-48.57 9.856 6.277 6.996 9.161 13.569 5.249 18.42-11.808 14.622-60.558-16.01-77.609-27.433a46.154 46.154 0 00-.45 8.261L676.609 402.9l1.29-23.09 2.179-39.067 2.737-48.994a51.438 51.438 0 01-2.165-6.443c-3.996-14.211-8.847-42.589-12.567-66.385a2322.142 2322.142 0 01-5.718-38.779l-.096-.68 72.231-31.918c5.133 11.905 29.103 15.483 29.103 15.483 19.858-1.368 35.425-11.84 35.425-11.84z"
        fill="#d0cde1"
      />
      <path
        d="M819.065 401.3s-3.058 1.047-8.03 2.53c-10.993 3.297-31.333 8.764-48.57 9.856-14.84.951-27.381-1.336-29.675-11.018-.983-4.163.411-7.587 3.45-10.401 9.072-8.41 32.765-11.423 51.557-12.457 5.307-.29 10.215-.424 14.301-.476 6.939-.09 11.487.052 11.487.052l.11.424z"
        fill="#ffb8b8"
      />
      <path
        d="M727.725 31.382l-8.833-3.537s18.47-20.334 44.167-18.566l-7.228-7.956s17.667-7.073 33.728 11.493c8.442 9.76 18.21 21.231 24.3 34.155h9.46l-3.948 8.693 13.819 8.694-14.184-1.562a48.58 48.58 0 01.385 14.42 18.657 18.657 0 01-6.832 12.205s-10.955-22.676-10.955-26.212v8.841s-8.833-7.957-8.833-13.261l-4.818 6.188-2.41-9.725-29.712 9.725 4.818-7.956-18.47 2.652 7.228-9.725s-20.879 11.493-21.682 21.218c-.803 9.725-6.914 18.94-6.914 18.94s-16.374-45.463 6.914-58.724z"
        fill="#2f2e41"
      />
      <path
        d="M929.297 348.573c-4.812 5.217-16.735 13.074-31.19 21.58a781.736 781.736 0 01-16.942 9.657c-13.935 7.728-28.525 15.386-40.565 21.573-15.663 8.05-27.015 13.607-27.015 13.607s-.976-4.895-2.55-11.16c-2.108-8.383-5.281-19.221-8.59-24.02-.116-.167-.231-.322-.347-.476-.964-1.265-1.934-2.004-2.89-2.004l47.81-29.637 20.662-12.81-14.886-35.534-18.67-44.574 11.269-35.855 11.326-36.042h21.227s7.029 15.342 16.016 36.736c1.343 3.2 2.73 6.534 4.144 9.977 18.49 44.972 41.541 107.772 31.191 118.982z"
        fill="#d0cde1"
      />
      <path
        d="M767.714 432.105c-11.808 14.623-60.558-16.01-77.608-27.432-3.714-2.487-5.924-4.06-5.924-4.06l15.599-20.803 4.94-6.586s4.42 2.345 10.954 6.162c.238.14.476.282.72.424 5.634 3.308 12.707 7.632 19.845 12.457 9.849 6.662 19.807 14.262 26.225 21.42 6.277 6.995 9.161 13.568 5.249 18.418z"
        fill="#ffb8b8"
      />
      <path
        d="M715.675 379.386a30.698 30.698 0 00-5.204.424c-14.77 2.537-19.126 15.907-20.365 24.863a46.154 46.154 0 00-.45 8.262l-13.048-10.036-4.755-3.655c-11.442-3.99-21.637-11.076-30.478-19.434a153.213 153.213 0 01-20.526-24.343 214.676 214.676 0 01-15.881-27.24 20.034 20.034 0 01-.277-16.993l16.158-36.01 23.617-52.63q.26-1.878.571-3.674c4.684-26.855 17.231-38.779 17.231-38.779h9.585l6.412 38.779 7.967 48.178-5.583 18.207-12.9 42.048 12.328 13.389z"
        fill="#d0cde1"
      />
      <path
        d="M726.524 267.136l8.194 9.56a235.57 235.57 0 009.499-2.028l-2.354-7.532 5.755 6.714c34.69-8.532 77.69-25.12 77.69-25.12s-46.422 3.403-81.083-4.17c-15.336-3.35-31.115 4.252-37.408 18.633-3.658 8.359-3.083 15.6 9.89 15.6a85.688 85.688 0 0013.076-1.23z"
        fill={color}
      />
      <path
        d="M913.332 424.267v3.9a8.57 8.57 0 01-.584 3.129 8.796 8.796 0 01-.623 1.285 8.633 8.633 0 01-7.42 4.214H617.816a8.633 8.633 0 01-7.42-4.214 8.792 8.792 0 01-.624-1.285 8.57 8.57 0 01-.584-3.129v-3.9a8.626 8.626 0 018.628-8.628h16.536v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.397v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.627a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.397v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h67.586a.36.36 0 01.36.36v1.818h5.396v-1.818a.36.36 0 01.36-.36h8.628a.363.363 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.396v-1.818a.36.36 0 01.36-.36h8.628a.358.358 0 01.353.36v1.818h5.397v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h25.164a8.626 8.626 0 018.628 8.628z"
        fill="#3f3d56"
      />
      <path
        d="M890.233 260.037H783.3v-2.204h-48.487v2.204H627.44a7.233 7.233 0 00-7.233 7.233v146.423a7.233 7.233 0 007.233 7.233h262.792a7.233 7.233 0 007.233-7.233V267.27a7.233 7.233 0 00-7.233-7.233z"
        fill="#3f3d56"
      />
      <circle
        cx={759.047}
        cy={311.157}
        r={16.061}
        fill="none"
        stroke="#d0cde1"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={753.908} cy={316.939} r={16.061} fill="#d0cde1" />
      <circle cx={282.311} cy={165.705} r={23.383} fill="#2f2e41" />
      <path
        d="M288.826 142.966a23.386 23.386 0 0120.584 34.48 23.377 23.377 0 10-38.84-25.687 23.325 23.325 0 0118.256-8.793z"
        fill="#2f2e41"
      />
      <circle cx={238.618} cy={96.969} r={68.686} fill="#2f2e41" />
      <path
        d="M184.71 54.353a68.674 68.674 0 0195.19-7.202c-.561-.534-1.117-1.072-1.7-1.591a68.686 68.686 0 00-91.271 102.668c.583.52 1.183 1.008 1.779 1.503a68.674 68.674 0 01-3.998-95.378z"
        fill="#2f2e41"
      />
      <circle cx={238.036} cy={120.835} r={44.239} fill="#a0616a" />
      <path
        d="M206.603 134.805s5.82 53.552-3.493 59.373 53.552 13.97 53.552 13.97-9.313-58.209 13.97-73.343z"
        fill="#a0616a"
      />
      <path
        d="M262.483 184.864s17.335-8.095-7.63-5.211-46.507-8.177-46.507-8.177-7.564-7.567-8.728.582 3.492 23.284-22.12 25.612-48.895-4.656-58.208 12.806-4.657 93.134-4.657 93.134 17.463 62.866 31.433 72.179 136.208-3.492 136.208-3.492L317.2 309.43v-73.343s-4.656-25.612-37.253-18.627c0 0-20.955-4.656-19.791-15.134s2.328-17.463 2.328-17.463z"
        fill="#d0cde1"
      />
      <path
        d="M150.686 420.278c.72-3.135 1.201-4.909 1.201-4.909l-.372-2.55-3.836-26.045-1.612-10.986c13.967-5.82 17.461-32.598 17.461-32.598l.527-.315 2.384-1.426v-.007l8.557-5.133.174-.103 3.456 2.3 7.022 4.684a82.572 82.572 0 0065.023 14.898 71.581 71.581 0 0015.303-4.42l16.935-5.647.527-.174.52.078 9.933 1.503.18.032.822.122-2.3 15.9-3.334 23.11c8.808 4.664 16.64 13.427 23.488 24.227q2.274 3.585 4.407 7.459a182.4 182.4 0 015.3 10.375c.206.424.405.855.604 1.285a227.77 227.77 0 011.915 4.215H147.602c.231-1.42.463-2.776.687-4.08a.995.995 0 00.026-.135c.084-.437.16-.86.231-1.285a246.62 246.62 0 012.14-10.375z"
        fill="#2f2e41"
      />
      <path
        d="M143.737 196.506s12.806 23.284 8.15 52.388 13.97 101.283 13.97 101.283l13.97-3.492s-9.314-60.537-6.985-74.508 2.328-68.686-9.314-75.67-19.79 0-19.79 0zM279.127 220.702l4.893 128.893 9.314 5.821s13.388-141.447 6.403-141.447h-14.213a6.406 6.406 0 00-6.397 6.733z"
        fill="#2f2e41"
      />
      <circle cx={172.26} cy={341.446} r={5.821} fill={color} />
      <circle cx={288.677} cy={347.267} r={5.821} fill={color} />
      <path
        fill="#2f2e41"
        d="M200.2 65.536v44.239h10.245l13.038-13.97-1.746 13.97h45.287l-2.794-13.97 5.588 13.97h7.217V65.536H200.2z"
      />
      <ellipse cx={193.215} cy={111.521} rx={3.493} ry={6.403} fill="#a0616a" />
      <ellipse cx={282.856} cy={111.521} rx={3.493} ry={6.403} fill="#a0616a" />
      <path
        d="M306.722 346.685s-52.97-9.896-56.463 7.567 58.791 9.895 58.791 9.895z"
        fill="#a0616a"
      />
      <path
        d="M305.558 226.775s126.895 101.283 103.611 125.73-111.76 17.463-111.76 17.463l5.82-29.104 51.224-5.821-25.612-25.612-23.283 2.328z"
        fill="#d0cde1"
      />
      <path
        d="M118.126 395.58l16.298 12.806s11.642 36.09 29.104 25.612-16.298-47.731-16.298-47.731l-19.791-6.985z"
        fill="#a0616a"
      />
      <path
        d="M134.424 208.148l-16.254 4.891S5.2 296.625.544 319.91s22.12 36.09 22.12 36.09l101.282 47.73 10.478-27.94-47.731-24.448s3.492-6.985-10.478-8.149-16.298-16.298-16.298-16.298 27.94-43.075 43.074-33.761 19.791 16.298 19.791 16.298z"
        fill="#d0cde1"
      />
      <path
        d="M366.261 424.267v3.9a8.57 8.57 0 01-.585 3.129 8.79 8.79 0 01-.623 1.285 8.633 8.633 0 01-7.42 4.214H70.745a8.633 8.633 0 01-7.42-4.214 8.794 8.794 0 01-.623-1.285 8.571 8.571 0 01-.585-3.129v-3.9a8.626 8.626 0 018.628-8.628h16.537v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.396v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.396v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h67.586a.36.36 0 01.36.36v1.818h5.397v-1.818a.36.36 0 01.36-.36h8.627a.363.363 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h5.397v-1.818a.36.36 0 01.36-.36h8.628a.358.358 0 01.353.36v1.818h5.397v-1.818a.36.36 0 01.36-.36h8.627a.36.36 0 01.36.36v1.818h5.39v-1.818a.36.36 0 01.36-.36h8.628a.36.36 0 01.36.36v1.818h25.165a8.626 8.626 0 018.628 8.628z"
        fill="#3f3d56"
      />
      <path
        d="M343.16 260.034H236.228v-2.204h-48.487v2.204H80.37a7.233 7.233 0 00-7.234 7.233V413.69a7.233 7.233 0 007.234 7.233H343.16a7.233 7.233 0 007.233-7.233V267.267a7.233 7.233 0 00-7.233-7.233z"
        fill="#3f3d56"
      />
      <circle
        cx={211.975}
        cy={311.154}
        r={16.061}
        fill="none"
        stroke="#d0cde1"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={206.835} cy={316.936} r={16.061} fill="#d0cde1" />
      <path fill="#3f3d56" d="M11.845 432h950v2h-950z" />
    </svg>
  );
};

SvgSharedWorkspace.propTypes = {
  color: PropTypes.string
};
SvgSharedWorkspace.defaultProps = {
  color: "primary"
};
export default SvgSharedWorkspace;
