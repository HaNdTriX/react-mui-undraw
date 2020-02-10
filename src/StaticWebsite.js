import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgStaticWebsite = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1015.128 526"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M361.35 295.154L443.078 6.14l512.34 144.882-81.728 289.013z"
      />
      <circle cx={451.929} cy={18.229} r={4.243} fill={color} />
      <circle cx={464.995} cy={21.924} r={4.243} fill={color} />
      <circle cx={478.061} cy={25.618} r={4.243} fill={color} />
      <path
        d="M714.984 189.53a49.571 49.571 0 00-20.704.488 49.483 49.483 0 001.463-20.92 49.194 49.194 0 00-18.506 11.943 49.193 49.193 0 00-9.512-19.866 49.482 49.482 0 00-9.708 18.589 49.572 49.572 0 00-17.382-11.259s-3.09 15.716 4.35 28.612c6.62 11.478 19.343 16.849 22.062 17.892l.064.077.034-.04c.276.106.43.159.43.159s.06-.302.14-.84l.152-.19.03.241c-.213.501-.321.789-.321.789s.16.035.45.09l.008.052.095-.032c2.863.535 16.514 2.622 28.165-3.688 13.092-7.09 18.69-22.097 18.69-22.097z"
        fill={color}
      />
      <circle cx={689.592} cy={138.352} r={11.032} fill={color} />
      <path
        fill={color}
        d="M496.569 187.834l331.547 93.757-2.04 7.213-331.547-93.757zM517.44 232.541l57.162 16.165-16.164 57.164-57.164-16.165zM623.6 262.561l57.164 16.165-16.165 57.164-57.164-16.165zM729.761 292.582l57.163 16.165-16.164 57.164-57.164-16.165zM505.391 303.216l42.464 12.008-1.386 4.9-42.463-12.008zM611.552 333.236l42.464 12.008-1.386 4.9-42.463-12.008zM717.712 363.257l42.464 12.008-1.386 4.9-42.463-12.008z"
      />
      <ellipse cx={289.6} cy={396.5} rx={284} ry={10.5} fill="#d0cde1" />
      <ellipse cx={794.128} cy={515.5} rx={221} ry={10.5} fill="#d0cde1" />
      <path
        d="M685.736 434h63.758v26.664H712.4v26.663h37.097v26.662h-63.761zm76.511 0h63.76v23.186H788.91v4.636h37.096v53.328h-63.758v-24.348h37.096v-4.637h-37.1V434zm76.513 0h63.76v23.186h-37.096v4.636h37.096v53.328h-63.76v-24.348h37.096v-4.637h-37.094V434zM128.49 312h26.302v25.986h24.061V312h26.304v78.693h-26.302v-26.351h-24.061v26.35h-26.302V312zm111.254 26.096h-23.152V312h72.625v26.096h-23.166v52.597H239.75v-52.597h-.005zm61-26.096h27.425l16.87 27.65L361.893 312h27.437v78.693h-26.196v-39.005l-18.095 27.98h-.454l-18.107-27.98v39.005h-25.735zm101.675 0h26.31v52.682h36.99v26.01h-63.301V312z"
        fill="#3f3d56"
      />
      <path
        fill="#ffb8b8"
        d="M82.034 366.091l-2.158 24.467 17.27-1.44V368.25l-15.112-2.159zM66.203 366.091l2.159 24.467-17.27-1.44V368.25l15.111-2.159z"
      />
      <path
        d="M111.538 178.276s5.757 34.54 5.757 39.578-2.159 37.419-5.757 43.895-4.318 9.355-2.878 12.233.72 2.16 0 4.318-2.16 1.44 0 4.318a7.56 7.56 0 010 8.635c-1.44 2.159 2.878 60.446-2.879 64.764s-7.196 18.71-7.196 18.71l-18.71-2.16v-15.83s-4.317-11.514-1.439-18.71 4.318-45.335 4.318-45.335-.72-3.598 0-5.757 0-3.598-1.44-4.317-2.158-3.598-2.158-3.598l-2.159-52.531-8.635 51.811s8.635 70.52 0 79.876v16.55h-18.71l2.879-17.99s-5.757-16.55-2.879-20.148-8.635-61.166-7.196-63.325.72-2.879 0-4.318-2.878-2.878-2.158-4.317 0-4.318 0-4.318-13.673-67.642-7.196-74.119 78.436-7.915 78.436-7.915zM84.193 381.203s1.44-6.902 12.953-4.53c0 0 2.878 5.969 2.878 8.847s2.879 22.308 2.879 22.308 11.513 19.43-2.879 19.43-19.429-5.038-20.148-10.075.72-6.477-2.16-8.635-4.317-2.16-3.597-5.038 2.159-17.27 2.159-17.27.72-10.794 4.677-7.916l3.958 2.879"
        fill="#2f2e41"
      />
      <path
        d="M64.044 381.203s-1.439-6.902-12.952-4.53c0 0-2.879 5.969-2.879 8.847s-2.878 22.308-2.878 22.308-11.514 19.43 2.878 19.43 19.43-5.038 20.149-10.075-.72-6.477 2.159-8.635 4.317-2.16 3.598-5.038-2.159-17.27-2.159-17.27-.72-10.794-4.677-7.916l-3.958 2.879"
        fill="#2f2e41"
      />
      <circle cx={84.913} cy={26.44} r={19.429} fill="#ffb8b8" />
      <path
        d="M69.082 29.319S61.166 60.26 59.727 60.98s33.101 3.598 33.101 3.598-8.635-26.625 0-30.943z"
        fill="#ffb8b8"
      />
      <path
        d="M64.026 48.175v-.004L40.297 64.579l4.317 128.808s31.663-3.598 38.859-2.878 30.223-6.477 30.223-6.477L103.61 62.997a9.942 9.942 0 00-9.208-9.092L90.08 53.6s-4.317 10.69-17.306 5.175a15.156 15.156 0 01-8.748-10.6z"
        fill="#d0cde1"
      />
      <path
        d="M64.6 47L35.26 60.98l-5.756 82.755s-11.514 49.652-2.16 64.044 25.187 15.831 25.187 15.831 20.868-82.754 15.111-110.818S64.6 47 64.6 47z"
        fill="#575a89"
      />
      <path
        d="M9.355 171.8v10.793S5.037 206.34 18.71 205.62s7.196-25.905 7.196-25.905l-4.318-7.916zM136.004 193.387l-1.439 12.233s7.196 24.467-6.476 25.186-3.748-25.035-3.748-25.035l4.467-13.823z"
        fill="#ffb8b8"
      />
      <path
        d="M89.647 51.085a84.747 84.747 0 0135.439 18.423l.124.108-10.074 53.25-1.44 19.43s26.626 94.987-4.317 81.314c0 0-26.625-82.754-23.027-120.892s3.295-51.633 3.295-51.633z"
        fill="#575a89"
      />
      <path
        d="M115.856 68.897c.72-.72 9.354 1 9.354 1s15.832 55.848 15.832 65.203 2.158 62.605 2.158 62.605l-18.995 1.915-15.375-73.987zM40.298 60.98H35.26S20.868 66.739 20.15 73.215 0 145.174 0 145.174l5.037 33.102 18.71-2.879 3.598-36.7L46.055 98.4z"
        fill="#575a89"
      />
      <path
        d="M81.138 31.863l.745-5.193c.174-1.21.882-2.802 2.06-2.473 1.001.28 3.183 1.137 3.549.879 1.368-.97 3.438.725 4.877-.136.603-.36.996-1.133 1.697-1.185a1.933 1.933 0 011.245.564 8.477 8.477 0 003.224 1.752 3.468 3.468 0 003.395-.925 1.803 1.803 0 01.6-.576 1.347 1.347 0 01.863.04l3.676 1a14.126 14.126 0 00-1.89-11.63 23.391 23.391 0 00-5.354-5.243Q96.41 6.14 92.777 3.85A22.892 22.892 0 0084.214.125c-3.1-.47-6.571.371-8.521 2.827A5.487 5.487 0 0173.719.286a2.02 2.02 0 00.13 3.096L70.74 1.397c-.874.918.834 2.582.09 3.607a1.9 1.9 0 01-.838.547 14.252 14.252 0 00-4.558 2.869 17.01 17.01 0 00-3.59 6.613c-1.853 5.315-3.2 11.41-.567 16.386.298.564 4.237 9.873 4.762 10.236 1.774 1.227.619-1.742 1.89 0 .997 1.367.81-3.863 2.292-2.715a3.693 3.693 0 004.02.18c.614-.426.416-2.79.084-4.963a2.559 2.559 0 013.114-2.879c1.845.434 3.668.805 3.7.585z"
        fill="#2f2e41"
      />
      <path
        opacity={0.2}
        d="M117.655 134.02l7.915 65.484h-5.037l-2.878-65.484zM34.181 108.834l-4.002 25.186 7.6-25.186h-3.598z"
      />
    </svg>
  );
};

SvgStaticWebsite.propTypes = {
  color: PropTypes.string
};
SvgStaticWebsite.defaultProps = {
  color: "primary"
};
const MemoSvgStaticWebsite = React.memo(SvgStaticWebsite);
export default MemoSvgStaticWebsite;
