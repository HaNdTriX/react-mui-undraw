import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFeedback = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1048 786.038"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill={color} d="M0 322.962h976v463.075H0z" />
      <path fill="#f0f0f0" d="M161.355 510.554h653.29v275.484h-653.29z" />
      <path fill="#3f3d56" d="M161.355 527.363h653.29v2.624h-653.29z" />
      <circle cx={173.131} cy={519.706} r={4.698} fill="#3f3d56" />
      <circle cx={189.239} cy={519.706} r={4.698} fill="#3f3d56" />
      <circle cx={205.347} cy={519.706} r={4.698} fill="#3f3d56" />
      <path
        fill={color}
        d="M522.161 651.159l6.955 14.093 15.552 2.259-11.253 10.97 2.656 15.489-13.91-7.313-13.91 7.313 2.656-15.489-11.253-10.97 15.552-2.259 6.955-14.093zM584.736 651.159l6.955 14.093 15.552 2.259-11.254 10.97 2.657 15.489-13.91-7.313-13.91 7.313 2.656-15.489-11.253-10.97 15.552-2.259 6.955-14.093zM647.311 651.159l6.955 14.093 15.552 2.259-11.254 10.97 2.657 15.489-13.91-7.313-13.91 7.313 2.656-15.489-11.253-10.97 15.552-2.259 6.955-14.093zM709.886 651.159l6.955 14.093 15.552 2.259-11.254 10.97 2.657 15.489-13.91-7.313-13.91 7.313 2.656-15.489-11.253-10.97 15.552-2.259 6.955-14.093zM772.461 651.159l6.955 14.093 15.552 2.259-11.254 10.97 2.657 15.489-13.91-7.313-13.911 7.313 2.657-15.489-11.253-10.97 15.552-2.259 6.955-14.093z"
      />
      <path fill="#3f3d56" d="M205.957 591.887h254.495v161.355H205.957z" />
      <path
        opacity={0.1}
        d="M257.853 322.962L0 499.98v-90.686l125.752-86.332h132.101zM551.112 322.962L0 701.307v-90.7l419.011-287.645h132.101z"
      />
      <path
        d="M149.081 454.987l-17.664-18.938 18.938-17.664 17.664 18.938zm-14.848-18.84l14.946 16.024 16.025-14.946-14.947-16.025z"
        fill="#f0f0f0"
      />
      <path
        d="M732 443.075h-25.897v-25.897H732zm-23.905-1.992h21.913V419.17h-21.913z"
        fill="#3f3d56"
      />
      <circle cx={892.45} cy={650.862} r={13.221} fill="#f0f0f0" />
      <path
        d="M892.45 689.057a38.195 38.195 0 1138.195-38.195 38.238 38.238 0 01-38.195 38.195zm0-73.452a35.257 35.257 0 1035.257 35.257 35.297 35.297 0 00-35.257-35.257z"
        fill="#2f2e41"
      />
      <path
        d="M300.409 717.87c6.073 22.45 26.875 36.354 26.875 36.354s10.955-22.495 4.882-44.945-26.875-36.354-26.875-36.354-10.956 22.495-4.882 44.945z"
        fill="#fff"
      />
      <path
        d="M309.333 713.045c16.665 16.223 18.7 41.16 18.7 41.16s-24.984-1.363-41.648-17.586-18.7-41.16-18.7-41.16 24.983 1.364 41.648 17.586z"
        fill={color}
      />
      <path
        d="M355.657 717.87c-6.073 22.45-26.875 36.354-26.875 36.354s-10.955-22.495-4.882-44.945 26.875-36.354 26.875-36.354 10.956 22.495 4.882 44.945z"
        fill="#fff"
      />
      <path
        d="M346.733 713.045c-16.664 16.223-18.7 41.16-18.7 41.16s24.984-1.363 41.648-17.586 18.7-41.16 18.7-41.16-24.983 1.364-41.648 17.586z"
        fill={color}
      />
      <path fill="#f2f2f2" d="M744 25h103v120H744z" />
      <path
        d="M811.981 324.348l-1.431-1.397a73.107 73.107 0 0014.662-25.65c4.866-14.644 7.243-37.77-9.068-64.784-16.688-27.64-17.439-50.09-15.13-64.055 2.511-15.196 8.92-23.714 9.192-24.07l1.589 1.215c-.064.083-6.417 8.556-8.828 23.3-2.225 13.61-1.449 35.516 14.889 62.576 16.728 27.705 14.25 51.473 9.226 66.533-5.444 16.318-14.709 25.93-15.101 26.332z"
        fill="#3f3d56"
      />
      <path d="M887 146H743V2h144zm-142-2h140V4H745z" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M773 44h88v2h-88zM773 66h88v2h-88zM773 88h88v2h-88z"
      />
      <path fill="#f2f2f2" d="M905 112h103v120H905z" />
      <path
        d="M972.981 411.348l-1.431-1.397a73.107 73.107 0 0014.662-25.65c4.866-14.644 7.243-37.77-9.068-64.784-16.688-27.64-17.439-50.09-15.13-64.055 2.511-15.196 8.92-23.714 9.192-24.07l1.589 1.215c-.064.083-6.417 8.556-8.828 23.3-2.225 13.61-1.449 35.516 14.889 62.576 16.728 27.705 14.25 51.473 9.226 66.533-5.444 16.317-14.709 25.93-15.101 26.332z"
        fill="#3f3d56"
      />
      <path d="M1048 233H904V89h144zm-142-2h140V91H906z" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M934 131h88v2h-88zM934 153h88v2h-88zM934 175h88v2h-88z"
      />
      <path fill="#f2f2f2" d="M139 23h103v120H139z" />
      <path
        d="M206.981 322.348l-1.431-1.397a73.107 73.107 0 0014.662-25.65c4.866-14.644 7.243-37.77-9.068-64.784-16.688-27.64-17.439-50.09-15.13-64.055 2.511-15.196 8.92-23.714 9.192-24.07l1.589 1.215c-.064.083-6.417 8.556-8.828 23.3-2.225 13.61-1.449 35.516 14.889 62.576 16.728 27.705 14.25 51.473 9.226 66.533-5.444 16.318-14.709 25.93-15.101 26.332z"
        fill="#3f3d56"
      />
      <path d="M282 144H138V0h144zm-142-2h140V2H140z" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M168 42h88v2h-88zM168 64h88v2h-88zM168 86h88v2h-88z"
      />
      <path
        fill="#f0f0f0"
        d="M469.461 366.159l6.955 14.093 15.552 2.259-11.254 10.97 2.657 15.489-13.91-7.313-13.911 7.313 2.657-15.489-11.253-10.97 15.552-2.259 6.955-14.093z"
      />
      <path
        d="M494.603 48.41c24.032 0 43.514 21.621 43.514 48.292v33.884h-10.422l-6.033-12.554 1.508 12.554h-66.985l-5.485-11.413 1.372 11.413h-7.542v-26.605c0-30.69 22.418-55.57 50.073-55.57zM544.462 269.796l26.717 11.355 92.842 75.476a27.326 27.326 0 016.011 14.694c.668 8.683 28.721 54.102 18.702 60.114s-46.087 24.045-48.09 12.022-12.691-63.453-12.691-63.453l-89.502-80.151z"
        fill="#2f2e41"
      />
      <path
        d="M649.326 433.438l11.355 33.397s-12.022 12.69-6.011 23.377v36.736h9.35l2.673-19.37s10.65 19.125 16.03 19.37c11.277.513 33.61 4.524 34.277-1.487s-16.911-11.871-16.911-11.871l-18.702-51.43-8.015-31.393zM474.997 261.113s-6.01 58.778 11.355 69.465 94.178 44.75 94.178 44.75-32.728 30.725-26.05 38.073 36.737 27.385 40.744 23.377 48.76-52.098 43.416-67.46-79.484-65.458-79.484-65.458l-8.683-31.392-2.671-25.381-28.053-18.034z"
        fill="#2f2e41"
      />
      <circle cx={505.598} cy={96.419} r={27.845} fill="#ffb9b9" />
      <path
        d="M484.014 107.824s1.336 25.381-19.37 33.396 51.431 60.114 51.431 60.114v-58.11s-9.351-10.019 0-25.381zM439.597 227.049l5.344 26.049 16.03 89.502s-13.359 38.072 4.675 37.404 9.351-41.411 9.351-41.411l-9.35-74.14v-28.721zM554.48 214.358l6.012 23.378 27.385 66.124s18.702 31.393 3.34 30.725-15.363-30.725-15.363-30.725l-31.392-53.434V220.37z"
        fill="#ffb9b9"
      />
      <path
        d="M559.156 409.393l-22.041 20.706s-15.363-3.34-21.374 14.694-10.019 29.389-10.019 29.389l8.015 4.675 10.02-14.026s6.01 25.381 12.022 27.385 36.068 15.362 33.396 0l-14.694-21.374s-2.004-24.045 4.007-26.049 22.042-22.042 22.042-22.042z"
        fill="#2f2e41"
      />
      <path
        d="M473.939 281.819s62.785-22.71 66.792-20.706a30.12 30.12 0 009.408 2.442l-.057-9.121s-20.705-7.347-32.06-2.672-46.087 25.381-46.087 25.381z"
        fill="#3f3d56"
      />
      <path
        d="M512.067 187.975s-18.034-20.706-23.377-33.396a32.79 32.79 0 00-17.335-17.046s-40.107 9.03-39.439 25.06 25.381 40.744 25.381 40.744-3.34 88.835 14.695 87.499a38.682 38.682 0 008.015-16.03c2.004-9.351 64.12-19.37 64.12-19.37s5.344 9.35 6.012 5.343-5.343-102.193-5.343-102.193l-31.852-21.053z"
        fill="#d0cde1"
      />
      <path
        d="M437.061 156.141l-.447.251a9.215 9.215 0 00-4.705 8.038l.007 49.569a9.288 9.288 0 01-3.304 7.068c-2.573 2.189-4.96 5.342-.035 6.984 8.015 2.671 39.407 16.03 40.075 11.355s2.004-10.02 0-10.02c-1.569 0-10.915-47.895-18.425-68.374a9.216 9.216 0 00-13.166-4.87zM535.779 156.249l9.35 2.671 10.688 46.087s12.69 2.672 8.683 7.347-20.706 16.699-20.706 16.699z"
        fill="#d0cde1"
      />
      <path
        d="M482.233 61.713a22.82 22.82 0 0118.006-9.188h.854c16.472 0 29.825 14.904 29.825 33.29h-5.52l-.89-6.784-1.308 6.785h-32.734l-2.742-5.74.685 5.74h-6.44q-4.507 22.385 12.954 44.77h-10.97l-5.485-11.48 1.371 11.48h-20.911l-4.114-26.403c0-19.774 11.49-36.541 27.419-42.47z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgFeedback.propTypes = {
  color: PropTypes.string
};
SvgFeedback.defaultProps = {
  color: "primary"
};
export default SvgFeedback;