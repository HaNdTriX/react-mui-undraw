import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgProfileDetails = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 829.651 548.854"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#ffb8b8"
        d="M609.397 522.909h-17.824V349.531l40.509-.81-22.685 174.188zM695.276 522.909H713.1V349.531l-40.509-.81 22.685 174.188z"
      />
      <path
        d="M601.033 547.025l-37.924-.348a12.327 12.327 0 01-15.286-11.967 12.327 12.327 0 016.984-11.109l8.651-4.161 28.115-19.216 20.254 5.672 3.88 17.456a19.93 19.93 0 01-14.674 23.673zM703.116 546.81l-37.925-.348a12.327 12.327 0 01-15.285-11.967 12.327 12.327 0 016.983-11.109l8.651-4.161 28.115-19.215 20.255 5.67 3.88 17.458a19.93 19.93 0 01-14.674 23.672zM717.942 377.948l-55.842-4.986-7.352-65.5-16.465 63.373-56.45-5.04c2.08-38.806 6.559-71.177 17.013-87.499l118.286-21.065z"
        fill="#2f2e41"
      />
      <circle cx={661.507} cy={44.439} r={30.172} fill="#ffb8b8" />
      <path
        d="M685.535 107.349l-52.662-6.482c6.7-14.267 9.72-27.59 4.861-38.888h40.51c-6.263 11.175-.663 27.738 7.291 45.37z"
        fill="#ffb8b8"
      />
      <path
        d="M717.132 258.852c-37.055 27.17-77.496 36.44-121.527 26.736 26.716-60.992 22.9-121.106 0-180.67l42.13-17.824c11.812 11.523 25.36 11.774 40.508 1.62l41.32 8.912c-7.558 59.422-10.092 114.615-2.431 161.226z"
        fill="#3f3d56"
      />
      <path
        d="M639.248 18.1l-5.095-2.04s10.653-11.728 25.474-10.708L655.46.762s10.19-4.079 19.453 6.63c4.87 5.63 10.504 12.246 14.017 19.7h5.456l-2.277 5.014 7.97 5.015-8.18-.901a27.747 27.747 0 01-.775 12.986l.22 3.964s-9.483-14.672-9.483-16.712v5.1s-5.095-4.59-5.095-7.65l-2.78 3.57-1.389-5.61-17.137 5.61 2.779-4.59-10.653 1.53 4.168-5.609s-12.042 6.63-12.506 12.239-6.484 12.748-6.484 12.748l-2.78-5.1s-4.168-22.946 9.265-30.595z"
        fill="#2f2e41"
      />
      <path
        d="M724.52 323h-183a7.008 7.008 0 01-7-7v-28a7.008 7.008 0 017-7h183a7.008 7.008 0 017 7v28a7.008 7.008 0 01-7 7z"
        fill={color}
      />
      <path
        data-name="Path 40"
        d="M568.88 296.054a5.947 5.947 0 000 11.892h128.086a5.947 5.947 0 00.195-11.892q-.097-.002-.195 0z"
        fill="#fff"
      />
      <path
        d="M614.24 274.245l9.301 16.582a14.724 14.724 0 01-9.124 21.45 14.724 14.724 0 01-18.438-14.53l.436-22.692c-6.988-40.336-12.66-78.527-11.342-105.323h32.407L611 200.52zM721.183 278.296l-6.814 11.356a13.12 13.12 0 01-21.861.966 13.12 13.12 0 012.985-18.393l11.917-8.512 17.014-70.486-10.533-29.166 29.167-4.861c13.694 31.65-.1 73.842-21.875 119.096z"
        fill="#ffb8b8"
      />
      <path
        d="M624.772 176.214l-42.94-2.43 2.95-46.01a29.012 29.012 0 0121.581-28.706l5.446-1.442zM746.298 161.63l-39.698 9.723V95.196l1.638-.106a27.257 27.257 0 0128.406 21.49z"
        fill="#3f3d56"
      />
      <path
        fill="#e6e6e6"
        d="M223.556 546.854h606.096v2H223.556zM26.637 487.836a215.89 215.89 0 0010.085 59.68c.14.448.288.89.435 1.338h37.636c-.04-.402-.08-.85-.12-1.339-2.51-28.849-16.978-204.433.32-234.46-1.512 2.436-51.273 83.114-48.356 174.781z"
      />
      <path
        d="M29.461 547.515c.315.449.643.897.977 1.339h28.234c-.214-.382-.462-.83-.75-1.339-4.664-8.418-18.47-33.587-31.285-59.679C12.865 459.796.231 430.693 1.295 420.16c-.328 2.376-9.857 74.796 28.166 127.355z"
        fill="#e6e6e6"
      />
      <path
        d="M381.883 224.319h-307a7.008 7.008 0 01-7-7v-171a7.008 7.008 0 017-7h307a7.008 7.008 0 017 7v171a7.008 7.008 0 01-7 7z"
        fill={color}
      />
      <path
        d="M385.68 548.854h-315a5.006 5.006 0 01-5-5V43.878a5.006 5.006 0 015-5h315a5.006 5.006 0 015 5v499.976a5.006 5.006 0 01-5 5zm-315-507.976a3.003 3.003 0 00-3 3v499.976a3.003 3.003 0 003 3h315a3.003 3.003 0 003-3V43.878a3.003 3.003 0 00-3-3z"
        fill="#e6e6e6"
      />
      <circle cx={107.883} cy={306.319} r={11} fill="#e6e6e6" />
      <path
        d="M339.883 327.319h-183a7.008 7.008 0 01-7-7v-28a7.008 7.008 0 017-7h183a7.008 7.008 0 017 7v28a7.008 7.008 0 01-7 7z"
        fill="#e6e6e6"
      />
      <path
        d="M346.883 328.319h-197a1 1 0 010-2h197a1 1 0 010 2z"
        fill="#3f3d56"
      />
      <circle cx={107.883} cy={372.319} r={11} fill="#e6e6e6" />
      <path
        d="M339.883 393.319h-183a7.008 7.008 0 01-7-7v-28a7.008 7.008 0 017-7h183a7.008 7.008 0 017 7v28a7.008 7.008 0 01-7 7z"
        fill="#e6e6e6"
      />
      <path
        d="M346.883 394.319h-197a1 1 0 010-2h197a1 1 0 010 2z"
        fill="#3f3d56"
      />
      <circle cx={107.883} cy={438.319} r={11} fill="#e6e6e6" />
      <path
        d="M232.883 459.319h-76a7.008 7.008 0 01-7-7v-28a7.008 7.008 0 017-7h76a7.008 7.008 0 017 7v28a7.008 7.008 0 01-7 7z"
        fill="#e6e6e6"
      />
      <path
        d="M239.883 460.319h-90a1 1 0 010-2h90a1 1 0 010 2z"
        fill="#3f3d56"
      />
      <path
        d="M339.883 459.319h-76a7.008 7.008 0 01-7-7v-28a7.008 7.008 0 017-7h76a7.008 7.008 0 017 7v28a7.008 7.008 0 01-7 7z"
        fill="#e6e6e6"
      />
      <path
        d="M346.883 460.319h-90a1 1 0 010-2h90a1 1 0 010 2z"
        fill="#3f3d56"
      />
      <path
        data-name="Path 40"
        d="M108.242 92.873a5.947 5.947 0 000 11.892h240.086a5.947 5.947 0 10.195-11.892q-.097-.002-.195 0zM108.242 125.873a5.947 5.947 0 000 11.892h240.086a5.947 5.947 0 00.195-11.892q-.097-.002-.195 0zM108.242 158.873a5.947 5.947 0 000 11.892h240.086a5.947 5.947 0 00.195-11.892q-.097-.002-.195 0z"
        fill="#fff"
      />
      <path
        d="M337.68 508.616l-2.517-2.516a.585.585 0 00-.413-.172h-1.225a.585.585 0 00-.413.999l1.393 1.392h-11.122a1 1 0 000 2h11.122l-1.25 1.25a.668.668 0 00.471 1.14h.99a.668.668 0 00.472-.195l2.492-2.492a.994.994 0 000-1.406z"
        fill={color}
      />
      <path
        d="M330.883 525.32a16 16 0 1116-16 16.018 16.018 0 01-16 16zm0-30a14 14 0 1014 14 14.016 14.016 0 00-14-14z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgProfileDetails.propTypes = {
  color: PropTypes.string
};
SvgProfileDetails.defaultProps = {
  color: "primary"
};
export default SvgProfileDetails;
