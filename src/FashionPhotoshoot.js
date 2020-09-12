import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFashionPhotoshoot = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 994.405 678.133"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={282.662}
        cy={736.435}
        rx={179.865}
        ry={11.69}
        transform="rotate(-.092 -68885.882 64728.953)"
        fill="#e6e6e6"
      />
      <ellipse
        cx={663.127}
        cy={585.772}
        rx={141.228}
        ry={9.179}
        transform="rotate(-.092 -68505.407 64578.286)"
        fill="#e6e6e6"
      />
      <ellipse
        cx={918.756}
        cy={722.299}
        rx={178.447}
        ry={31.534}
        transform="rotate(-.092 -68249.779 64714.815)"
        fill="#e6e6e6"
      />
      <path
        d="M206.553 307.21l20.253-5.639s7.932-1.584 3.085-17.077-14.46-11.157-14.46-11.157l-17.967 5.22-7.093 2.19 9.98 14.002.837 9.333z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M167.418 266.274l-6.354 25.382 32.558 31.553 2.799.702 7.467-2.098 6.355-25.38-6.437-6.769 6.579-1.724-14.04-13.63-7.326 1.538-5.877-5.835 3.966-1.585.375-1.493-4.805-3.782-15.26 3.121z"
      />
      <path
        fill={color}
        d="M197.922 302.074l-4.206 16.796-19.404-18.344 4.859-17.03 18.751 18.578z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M167.418 266.274l-.891 3.559 32.375 31.495 2.799.701 7.235-1.958.398-.008.909-3.63-6.437-6.769 6.579-1.724-14.04-13.63-7.326 1.538-5.877-5.835 3.966-1.585.375-1.493-4.805-3.782-15.26 3.121z"
      />
      <ellipse
        cx={285.171}
        cy={376.886}
        rx={1.828}
        ry={2.693}
        transform="rotate(-75.943 162.706 387.274)"
        fill={color}
      />
      <ellipse
        cx={305.739}
        cy={404.05}
        rx={1.828}
        ry={2.693}
        transform="rotate(-75.943 183.274 414.438)"
        fill={color}
      />
      <path
        d="M220.009 338.828l-4.417-15.017s11.483-27.383-1.766-30.033-14.134 25.617-14.134 25.617l5.3 16.783z"
        fill="#ffb6b6"
      />
      <circle cx={138.008} cy={274.542} r={35.088} fill="#ffb6b6" />
      <path
        d="M149.36 299.31s2.064 25.8 7.224 27.864-46.134 16.512-46.134 16.512l15.48-17.544s-6.498-26.832-13.722-33.024z"
        fill="#ffb6b6"
      />
      <path
        d="M198.809 330.878l14.133-1.767s16.784 8.834 16.784 20.317 9.716 30.033 9.716 30.033 7.067 24.734-8.833 26.5-30.033-26.5-30.033-26.5z"
        fill={color}
      />
      <path
        d="M206.759 471.328L235.25 451.7a27.607 27.607 0 0130.888-.558c3.926 2.617 6.87 6.052 6.87 10.47 0 13.249-29.15 44.166-29.15 44.166s-22.082 48.583-43.282 50.35a365.845 365.845 0 00-41.517 6.183s9.717 35.333 4.417 45.05-25.617 21.2-27.384 20.316-26.5-23.85-37.1-56.533-17.666-57.416-7.95-59.183 115.717-40.633 115.717-40.633z"
        fill="#2f2e41"
      />
      <path
        d="M270.359 458.961s6.183-.883 5.3 14.133-3.534 68.9-7.95 79.5-5.3 22.967-3.534 27.383 5.3 11.484-.883 12.367-31.8-2.65-34.45-3.533 10.6-35.334 8.834-37.1-3.534-43.283-3.534-43.283z"
        fill="#2f2e41"
      />
      <path
        d="M261.525 589.694s15.017-4.417 16.784 5.3c0 0 2.65 15.017-8.834 20.317a141.91 141.91 0 00-21.2 12.366s-18.55 7.067-19.433-1.766 3.534-40.634 3.534-40.634zM161.709 600.294l-28.267-22.967s5.3 28.267-1.766 33.567l-3.228 9.437 9.039 7.394s27.755-4.464 24.222-27.43z"
        fill="#2f2e41"
      />
      <path
        d="M121.96 561.428s18.55 5.3 15.9 23.85-6.049 38.703-6.049 38.703-1.019 49.63-14.268 53.163-16.784-3.533-16.784-3.533-15.061-38.783-10.6-50.35c5.4-14.002 13.182-29.723 10.6-34.45-2.54-4.651 1.767-30.034 21.2-27.383z"
        fill="#2f2e41"
      />
      <path
        d="M111.36 317.628s7.066.883 18.55 2.65 19.432-7.067 25.616-5.3 57.416 14.133 57.416 14.133l-4.431 33.975c-1.453 11.135-5.06 21.798-9.681 32.033-7.45 16.503 3.589 68.202 14.112 77.975 9.154 8.501 21.2 10.6 7.95 25.617s-36.216 28.267-83.033 23.85-53-3.533-53-10.6 16.661-99.817 11.361-105.117-7.95-10.6-7.95-13.25c0-1.77-5.526-21.698-9.19-34.718a37.107 37.107 0 012.765-27.528c1.658-3.103 3.554-5.486 5.542-5.77 6.183-.883 1.889-5.3 6.306-5.3s7.066.883 9.716 0z"
        fill={color}
      />
      <path
        d="M179.063 250.874s-.799-43.36-43.36-22.835c0 0-32.726-1.154-37.305 40.243l-4.428 43.34 4.743-3.567 3.178 4.901 8.668.886 2.53-7.624 3 8.364 69.446-3.256s-33.323-13.614-38.594-46.033l6.747 5.31z"
        fill="#2f2e41"
      />
      <circle cx={99.073} cy={233.859} r={17.395} fill="#2f2e41" />
      <path
        d="M116.186 227.035a17.382 17.382 0 00-19.57-13.552c.348-.098.692-.204 1.051-.28a17.395 17.395 0 117.267 34.023c-.36.076-.717.12-1.075.173a17.382 17.382 0 0012.327-20.364z"
        fill="#2f2e41"
      />
      <circle cx={541.812} cy={76.467} r={28.674} fill="#2f2e41" />
      <path
        d="M556.909 95.556s-.432 17.7 1.295 18.131-23.743 7.339-23.743 7.339l-2.59-24.175zM355.74 246.648s-18.994 0-19.425-2.158-4.317 17.699-4.317 17.699l7.77 2.59s14.678-6.475 15.973-6.475 0-11.656 0-11.656z"
        fill="#ffb8b8"
      />
      <path
        d="M335.02 254.419s3.453-11.656 7.77-12.088c0 0-14.678-9.497-15.11-12.519s-5.611-10.792-7.77-8.202-2.158 43.6 1.727 47.918 21.153-6.068 21.153-6.068-10.792-4.725-7.77-9.041z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb8b8"
        d="M569.428 419.757l3.453 18.562-15.972 2.59v-21.152h12.519z"
      />
      <path
        d="M569.428 436.16s2.59-8.201 4.317-6.906 4.317 9.497 3.885 11.655-3.453 18.995-2.158 22.017-6.476 18.562-16.405 17.267-9.065-9.929-9.065-9.929l3.453-13.382 1.296-21.153s11.223-1.727 14.677.432z"
        fill="#2f2e41"
      />
      <circle cx={551.843} cy={46.288} r={11.865} fill="#2f2e41" />
      <path
        d="M567.662 39.861a11.866 11.866 0 00-10.629-11.8 11.986 11.986 0 011.236-.065 11.865 11.865 0 010 23.73 12.008 12.008 0 01-1.236-.064 11.866 11.866 0 0010.63-11.8z"
        fill="#2f2e41"
      />
      <circle cx={541.8} cy={89.512} r={18.131} fill="#ffb8b8" />
      <path
        d="M577.63 215.566s-.863 21.585-4.317 32.809S557.41 339.533 560 345.577s15.904 72.884 12.883 76.77-17.268 2.59-17.268 2.59l-19.358-81.087s3.817-89.432-28.128-91.59-84.18-3.453-84.18-3.453-33.672 9.928-48.781 9.497-23.743 3.885-23.743 3.885l-2.59-17.7 66.912-14.677s61.3-21.153 94.972-15.54 66.912 1.294 66.912 1.294z"
        fill="#2f2e41"
      />
      <path
        d="M553.455 108.075s5.18-3.022 6.476 0 10.36 5.612 13.814 3.022 12.087.863 12.087.863l9.498 28.06s-4.75 24.175-9.066 37.557-6.044 41.011-4.317 43.601-34.535 12.951-52.235 6.476-21.584-13.814-21.584-13.814 19.426-27.629 12.95-40.58-1.295-27.628-1.295-27.628l-2.59-14.677 14.678-8.202s.863-7.77 4.317-7.77 17.267-6.908 17.267-6.908z"
        fill="#d0cde1"
      />
      <path
        d="M523.669 131.386h-6.476a14.492 14.492 0 00-4.317 13.383c1.727 8.202 9.515 35.395 9.515 35.395l6.458-16.832z"
        fill="#d0cde1"
      />
      <path
        d="M505.074 200.714s-12.919 13.989-3.422 21.328 11.838-16.836 11.838-16.836z"
        fill="#ffb8b8"
      />
      <path
        d="M523.669 171.534l-3.022 12.087-5.18 9.497s-17.7 11.656-17.7 15.973c0 0 7.77-9.929 17.7 0l8.85-21.369z"
        fill="#d0cde1"
      />
      <ellipse
        cx={538.477}
        cy={70.387}
        rx={19.775}
        ry={11.865}
        fill="#2f2e41"
      />
      <path
        d="M577.63 71.381s-13.814-7.77-19.426-2.158 16.836 14.246 16.836 14.246z"
        fill="#ffb8b8"
      />
      <path
        d="M582.81 114.119l3.022-2.159s3.454-5.18 6.476-3.453 20.72-6.476 20.72-6.476-6.475 3.022-6.475-2.158-.863-4.317-5.18-4.317-4.317 2.158-6.044-.863-.863-4.749-3.885-3.022-6.475.431-7.339-.864-16.404-3.453-16.404-3.453 6.044-17.7 7.339-18.995 34.535 13.383 34.535 13.383 41.874 11.656 31.082 25.038-49.644 33.672-49.644 33.672z"
        fill="#d0cde1"
      />
      <path
        d="M663.61 0l77.88.484S869.68 68.69 779.705 209.939c0 0-36.764-8.707-77.397 21.284 0 0-23.703-225.902-38.698-231.223z"
        fill={color}
      />
      <path
        d="M686.777.707c13.952 58.283 29.725 208.605 29.725 208.605 36.303-26.795 69.494-22.703 76.16-21.526a257.991 257.991 0 01-12.957 22.716s-36.763-8.707-77.397 21.284c0 0-23.703-225.902-38.698-231.223z"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        fill="#3f3d56"
        d="M780.189 73.043l6.772 32.894 85.108-15.47.028-.01 1.935-38.698h-16.446l-77.397 21.284z"
      />
      <path
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
        d="M858.959 51.759l13.11 38.708.028-.01 1.935-38.698h-15.073z"
      />
      <ellipse cx={783.091} cy={87.555} rx={9.675} ry={22.252} fill="#3f3d56" />
      <path
        d="M833.4 557.796a2.957 2.957 0 01-2.958-2.957V87.555a2.957 2.957 0 115.914 0V554.84a2.957 2.957 0 01-2.956 2.957z"
        fill="#3f3d56"
      />
      <path
        d="M792.77 640.03a2.956 2.956 0 01-2.907-3.522l37.749-193.52-99.128 151.204a2.957 2.957 0 11-4.946-3.244l107.388-163.802a2.958 2.958 0 015.376 2.188L795.669 637.64a2.959 2.959 0 01-2.9 2.39z"
        fill="#3f3d56"
      />
      <path
        d="M945.627 603.266a2.953 2.953 0 01-2.475-1.336L830.926 430.69a2.957 2.957 0 114.946-3.241l112.226 171.24a2.957 2.957 0 01-2.471 4.577z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgFashionPhotoshoot.propTypes = {
  color: PropTypes.string
};
SvgFashionPhotoshoot.defaultProps = {
  color: "primary"
};
export default SvgFashionPhotoshoot;