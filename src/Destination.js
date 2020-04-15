import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDestination = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 835.195 784.909"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Destination_svg__a"
          x1={380.039}
          y1={760.169}
          x2={664.572}
          y2={88.291}
          gradientTransform="rotate(-.139 -847.805 5605.866)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Destination_svg__c"
          x1={564.247}
          y1={404.528}
          x2={564.247}
          y2={230.703}
          gradientTransform="rotate(7.891 589.14 306.69)"
          xlinkHref="#Destination_svg__a"
        />
        <clipPath
          id="Destination_svg__b"
          transform="translate(-182.403 -46.466)"
        >
          <path
            d="M596.926 120.425a28.384 28.384 0 01-27.915 24.21l-120.928.294a28.384 28.384 0 01-28.032-24.074l-64.053.156a13.298 13.298 0 00-13.265 13.33l1.394 573.666a13.298 13.298 0 0013.33 13.265l305.957-.744a13.297 13.297 0 0013.265-13.33l-1.395-573.666a13.298 13.298 0 00-13.33-13.265z"
            fill={color}
            opacity={0.3}
          />
        </clipPath>
      </defs>
      <path
        d="M675.166 95.908l-332.498.808a13.664 13.664 0 00-13.633 13.694l1.512 621.887a13.664 13.664 0 0013.7 13.627l332.498-.808a13.664 13.664 0 0013.633-13.694l-1.512-621.886a13.664 13.664 0 00-13.7-13.628z"
        transform="translate(-182.403 -46.466)"
        fill="url(#Destination_svg__a)"
        opacity={0.5}
      />
      <rect
        x={334.652}
        y={104.795}
        width={350.107}
        height={631.948}
        rx={13.635}
        transform="rotate(-.139 -18696.253 75432.679)"
        fill="#fff"
      />
      <path
        d="M414.524 73.96a28.384 28.384 0 01-27.915 24.209l-120.928.294a28.384 28.384 0 01-28.033-24.074l-64.053.156a13.298 13.298 0 00-13.265 13.33l1.394 573.666a13.298 13.298 0 0013.33 13.265l305.957-.744a13.297 13.297 0 0013.265-13.33l-1.394-573.666a13.298 13.298 0 00-13.33-13.265z"
        fill={color}
        opacity={0.3}
      />
      <g clipPath="url(#Destination_svg__b)">
        <path
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M69.952 112.995l476.141 389.953 6.255-319.137-537.739-19.055 84.916 81.433 538.574 41.387L77.131 428.953l507.998 164.894-1.904 62.48-524.192-31.161 15.872 157.575 230.183-20.538L428.536.32"
        />
      </g>
      <rect
        x={466.823}
        y={128.226}
        width={78.018}
        height={4.876}
        rx={2}
        transform="rotate(-.861 -2676.267 12240.79)"
        fill="#dbdbdb"
      />
      <circle cx={379.004} cy={82.875} r={2.926} fill="#dbdbdb" />
      <g opacity={0.5} fill="#47e6b1">
        <path d="M99.195 130.76h3v17h-3z" />
        <path d="M109.195 137.76v3h-17v-3z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M123.195 237.342h3v17h-3z" />
        <path d="M133.195 244.342v3h-17v-3z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M583.195 98.76h3v17h-3z" />
        <path d="M593.195 105.76v3h-17v-3z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M825.195 161.342h3v17h-3z" />
        <path d="M835.195 168.342v3h-17v-3z" />
      </g>
      <path
        d="M12.29 229.648a3.675 3.675 0 01-2.048-4.441 1.766 1.766 0 00.08-.408 1.843 1.843 0 00-3.31-1.221 1.766 1.766 0 00-.204.362 3.675 3.675 0 01-4.441 2.047 1.766 1.766 0 00-.408-.08 1.843 1.843 0 00-1.221 3.31 1.767 1.767 0 00.362.205 3.675 3.675 0 012.047 4.44 1.766 1.766 0 00-.08.408 1.843 1.843 0 003.31 1.221 1.766 1.766 0 00.205-.361 3.675 3.675 0 014.44-2.048 1.766 1.766 0 00.408.08 1.843 1.843 0 001.221-3.31 1.766 1.766 0 00-.361-.204zM768.29 420.648a3.675 3.675 0 01-2.048-4.441 1.766 1.766 0 00.08-.408 1.843 1.843 0 00-3.31-1.221 1.766 1.766 0 00-.204.362 3.675 3.675 0 01-4.441 2.047 1.766 1.766 0 00-.408-.08 1.843 1.843 0 00-1.221 3.31 1.767 1.767 0 00.362.205 3.675 3.675 0 012.047 4.44 1.766 1.766 0 00-.08.408 1.843 1.843 0 003.31 1.221 1.766 1.766 0 00.205-.361 3.675 3.675 0 014.44-2.048 1.766 1.766 0 00.408.08 1.843 1.843 0 001.221-3.31 1.766 1.766 0 00-.361-.204zM715.29 115.648a3.675 3.675 0 01-2.048-4.441 1.766 1.766 0 00.08-.408 1.843 1.843 0 00-3.31-1.221 1.766 1.766 0 00-.204.362 3.675 3.675 0 01-4.441 2.047 1.766 1.766 0 00-.408-.08 1.843 1.843 0 00-1.221 3.31 1.767 1.767 0 00.362.205 3.675 3.675 0 012.047 4.44 1.766 1.766 0 00-.08.408 1.843 1.843 0 003.31 1.221 1.766 1.766 0 00.205-.361 3.675 3.675 0 014.44-2.048 1.766 1.766 0 00.408.08 1.843 1.843 0 001.221-3.31 1.766 1.766 0 00-.361-.204zM739.29 289.648a3.675 3.675 0 01-2.048-4.441 1.766 1.766 0 00.08-.408 1.843 1.843 0 00-3.31-1.221 1.766 1.766 0 00-.204.362 3.675 3.675 0 01-4.441 2.047 1.766 1.766 0 00-.408-.08 1.843 1.843 0 00-1.221 3.31 1.767 1.767 0 00.362.205 3.675 3.675 0 012.047 4.44 1.766 1.766 0 00-.08.408 1.843 1.843 0 003.31 1.221 1.766 1.766 0 00.205-.361 3.675 3.675 0 014.44-2.048 1.766 1.766 0 00.408.08 1.843 1.843 0 001.221-3.31 1.766 1.766 0 00-.361-.204z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <circle cx={72.195} cy={420.342} r={6} fill="#f55f44" opacity={0.5} />
      <circle cx={584.195} cy={222.342} r={6} fill="#4d8af0" opacity={0.5} />
      <circle cx={633.195} cy={374.342} r={6} fill="#47e6b1" opacity={0.5} />
      <circle cx={13.195} cy={58.342} r={6} fill="#f55f44" opacity={0.5} />
      <path
        fill={color}
        d="M487.342 229.976l22.225-.862 1.108 28.575-22.225.862z"
      />
      <path
        d="M409.307 329.193s-30.779-14.706-30.286-2.006 31.025 21.056 31.025 21.056z"
        fill="#ffb9b9"
      />
      <path
        d="M426.194 436.653s-14.521 35.542-19.886 61.189-13.536 60.942-3.026 85.973 40.392 98.6 40.7 106.537-2.56 15.999 3.79 15.753 40.907-11.126 42.31-15.95-11.79-17.032-11.79-17.032L445.715 571.04l33.99-66.505 24.516 99.215 4.801 123.829s23.567-7.274 26.989-1.047c0 0 10.558-14.719 11.9-21.13s-4.987-128.592-4.987-128.592 21.633-139.162 4.17-138.485-85.864-41.189-120.9-1.672z"
        fill="#2f2e41"
      />
      <path
        d="M447.526 699.755s-16.108 35.603-17.634 37.252-12.024 17.955-4.086 17.647 26.68-8.984 40.476-22.238 31.984-36.219 30.335-37.745-12.947-5.858-12.947-5.858zM511.89 719.518s-.972 15.937-3.901 22.41-2.56 15.999 5.378 15.69 28.453-4.282 28.453-4.282 1.218-9.587-.431-11.113-8.676-18.743-5.686-23.629-23.813.924-23.813.924z"
        fill="#2f2e41"
      />
      <path
        d="M523.633 202.335s16.922 26.372 23.518 32.476-11.961 19.543-11.961 19.543l-33.216 4.468s.418-30.225-1.292-33.338 22.951-23.15 22.951-23.15z"
        fill="#ffb9b9"
      />
      <path
        d="M494.762 236.843s6.843 12.454 13.193 12.208 39.196-14.24 40.6-19.064 10.879 34.557 10.879 34.557l-80.372 141.44-19.604-13.549 9.499-83.045 7.801-44.82z"
        fill={color}
      />
      <path
        d="M551.519 363.426c-3.206 6.707-5.209 13.7-4.931 20.86.012.318.025.636.053.952.76 14.694 6.173 31.687 8.115 44.045 1.41 8.865 1.008 15.335-4.18 16.856-12.577 3.668 1.834 6.289-46.825 22.485s-57.152 2.216-57.275-.959 6.891-27.296 5.242-28.822-23.075 19.974-29.548 17.045-.739-19.05-.739-19.05 14.583-33.954 14.275-41.892 22.09-45.375 22.09-45.375l15.233-99.166s5.858-12.947 13.734-14.842 14.411 2.621 14.411 2.621l-13.18 29.13-13.905 51.417 2.326 18.989s16.17-34.016 26.79-47.147 33.264-44.218 33.264-44.218 5.287-17.837 1.296-23.168c-3.991-5.346 16.647-6.147 25.446 15.771 4.664 11.617 12.236 28.94 16.98 45.068 4.227 14.289 6.223 27.646 2.036 35.281-6.4 11.664-22.5 26.995-30.708 44.12z"
        fill="#575a89"
      />
      <path
        d="M582.227 319.307c-6.4 11.664-22.5 26.995-30.708 44.12-2.144-7.724-4.76-15.715-4.76-15.715s-10.03-53.67 19.64-67.54a19.858 19.858 0 0113.792 3.854c4.227 14.289 6.223 27.646 2.036 35.281z"
        opacity={0.1}
      />
      <path
        d="M464.44 315.925l-25.154 7.335-34.926 1.355-3.593 30.348 57.398 4.134s14.336-40.305 6.276-43.172z"
        fill="#575a89"
      />
      <path
        d="M505.458 417.965s-33.651 5.583-25.97 15.71 37.491-.52 37.491-.52z"
        fill="#ffb9b9"
      />
      <path
        d="M546.64 385.238c.761 14.694 6.174 31.687 8.116 44.045-10.72 10.146-20.914 19.095-24.756 19.244-7.938.308-20.7-.787-25.4.985s-7.459-28.33-7.459-28.33 2.806-9.648 15.321-14.903c8.448-3.555 24.641-13.198 34.179-21.04z"
        opacity={0.1}
      />
      <path
        d="M566.03 270.648s26.865-4.222 25.414 40.352 2.832 73.027-7.973 81.396-45.903 46.298-53.84 46.606-20.7-.787-25.401.985-7.458-28.33-7.458-28.33 2.805-9.648 15.321-14.903 42.002-23.888 41.756-30.238-7.459-28.33-7.459-28.33-10.03-53.668 19.64-67.538z"
        fill="#575a89"
      />
      <circle cx={499.943} cy={206.433} r={34.952} fill="#ffb9b9" />
      <path
        d="M476.409 156.336a6.749 6.749 0 01-2.94 1.475 2.097 2.097 0 01-2.43-1.683c-.8 1.658-1.701 3.426-3.334 4.277s-4.157.137-4.393-1.689a7.706 7.706 0 01-1.773 3.744c-1.013.966-2.85 1.21-3.735.125.715 3.907.274 7.926.499 11.892s1.282 8.17 4.278 10.778c4.37 3.803 10.941 2.865 16.69 2.144a5.066 5.066 0 012.615.143c2.152.917 2.054 3.913 2.083 6.253a17.373 17.373 0 0015.213 16.497 8.709 8.709 0 006.472-1.58c1.632-1.383 2.466-3.638 4.336-4.677 3.042-1.69 6.731.775 8.956 3.452s4.416 5.97 7.861 6.46c4.557.647 8.028-3.997 9.73-8.273a48.223 48.223 0 00-.958-37.47c-9.515-20.74-42.018-24.021-59.17-11.868z"
        fill="#2f2e41"
      />
      <path
        d="M626.988 297.014c-4.64 33.483-73.518 103.506-73.518 103.506s-52.075-86.787-47.434-120.27a61.054 61.054 0 11120.952 16.764z"
        transform="translate(-182.403 -46.466)"
        fill="url(#Destination_svg__c)"
      />
      <path
        d="M440.616 251.607c-4.353 31.407-68.959 97.087-68.959 97.087s-48.845-81.404-44.492-112.81a57.268 57.268 0 11113.451 15.723z"
        fill={color}
      />
      <ellipse
        cx={566.923}
        cy={285.662}
        rx={28.705}
        ry={28.634}
        transform="rotate(-82.109 449.047 367.142)"
        fill="#fff"
      />
    </svg>
  );
};

SvgDestination.propTypes = {
  color: PropTypes.string
};
SvgDestination.defaultProps = {
  color: "primary"
};
export default SvgDestination;
