import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMobilePosts = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 885.696 626.497"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={696.628}
        cy={608.952}
        rx={82.703}
        ry={17.545}
        fill="#e6e6e6"
      />
      <path
        d="M580.84 201.983l-5.927 1.957-.821 5.126a1.71 1.71 0 002.753 1.608l3.786-3.012z"
        fill="#2f2e41"
      />
      <path
        d="M598.979 179.48l-18.348 28.182-5.718-3.722 18.347-28.183a3.415 3.415 0 014.72-.997 3.428 3.428 0 01.999 4.72z"
        fill={color}
      />
      <path
        d="M598.979 179.48l-1.793 2.753a5.834 5.834 0 01-5.718-3.723l1.792-2.753a3.415 3.415 0 014.72-.997 3.428 3.428 0 01.999 4.72z"
        fill="#2f2e41"
      />
      <path
        d="M678.838 232.26l-30.743 12.465-47.616-34.014s-12.146-25.506-26.721-13.36c-4.992 4.16 15.104 20.348 17.004 21.862 4.75 3.785 48.194 47.116 54.335 44.866s32.993-6.324 32.993-6.324z"
        fill="#ffb8b8"
      />
      <path
        d="M738.941 197.35c-26.32-9.835-51.36-14.488-71.66 0v-46.76a35.83 35.83 0 0135.83-35.83 35.83 35.83 0 0135.83 35.83z"
        fill="#2f2e41"
      />
      <path
        d="M690.358 171.844s14.575 30.365 10.931 36.438l30.365-15.79s-15.79-20.648-15.79-24.291z"
        fill="#ffb8b8"
      />
      <path
        d="M756.553 199.173s-14.87-14.575-28.083-10.932-10.177 10.324-27.18 13.968l-1.823 7.895s-9.634 3.942-13.36 7.287c-4.16 3.736-7.05 32.37-1.822 56.478 3.437 15.846-4.38 31.656-.607 38.26l68.016-8.502s6.073-6.073 2.43-9.717 2.429-30.364 2.429-30.364z"
        fill="#cfcce0"
      />
      <path
        fill="#ffb8b8"
        d="M716.471 545.329l-1.214 29.15 10.931 14.575 13.361-12.146-1.215-32.794-21.863 1.215zM834.286 521.037s8.502 17.004 9.717 20.648 18.218 2.43 18.218 2.43l6.073-15.79-20.648-19.434z"
      />
      <path
        d="M683.07 306.663l3.037 60.122s9.717 86.235 13.36 100.81 17.004 85.021 17.004 85.021l32.794-4.858-9.716-98.381 1.214-19.434 18.219 27.936 69.231 72.875 26.721-21.863-69.231-81.377-18.219-72.875s2.43-37.652-18.219-52.227zM723.759 579.337s-2.43-10.807-8.502-7.225-20.648 21.8-20.648 21.8-37.652 25.506-20.648 27.936 34.008-7.288 34.008-7.288 13.36-7.287 15.79-7.287 23.077-6.073 23.077-10.932-7.389-22.172-7.389-22.172-8.4 7.597-15.688 5.168zM857.59 538.136s-6.545-8.936-10.681-3.227-10.22 28.233-10.22 28.233-24.33 38.424-7.77 33.858 28.265-20.266 28.265-20.266 9.337-12.017 11.564-12.988 18.73-14.785 16.79-19.24-15.631-17.374-15.631-17.374-4.667 10.32-12.318 11.004z"
        fill="#2f2e41"
      />
      <circle cx={699.467} cy={154.233} r={26.721} fill="#ffb8b8" />
      <path
        d="M700.075 209.497s-13.968 4.25-17.612 10.324-14.575 13.36-14.575 13.36l8.502 34.008 13.36-15.79z"
        fill="#cfcce0"
      />
      <path
        d="M725.58 123.903v-.642l-.762.043a35.857 35.857 0 00-30.816-6.158 35.703 35.703 0 0113.753 7.105l-25.9 1.44-10.93 24.291h7.397l5.963-10.931v10.931h25.02l1.7-8.502 4.724 8.502h4.916c.03.606.078 1.208.078 1.822l-4.859 46.761 23.077-9.716v-37.045a35.755 35.755 0 00-13.36-27.901z"
        fill="#2f2e41"
      />
      <ellipse cx={721.57} cy={151.804} rx={3.036} ry={5.466} fill="#ffb8b8" />
      <path
        d="M743.665 238.078l12.465 30.743-34.014 47.616s-25.506 12.146-13.36 26.721c4.16 4.992 20.348-15.104 21.862-17.004 3.785-4.75 47.116-48.193 44.866-54.335s-6.324-32.993-6.324-32.993z"
        fill="#ffb8b8"
      />
      <path
        d="M731.046 202.816l9.717 47.37s19.433-13.361 34.008 1.214l-18.218-52.227z"
        fill="#cfcce0"
      />
      <path
        fill="#2f2e41"
        d="M706.42 318.274l28.82 12.91-9.932 22.17-28.819-12.911z"
      />
      <path
        opacity={0.2}
        d="M714.72 361.728l2.287-.817 24.292 68.016-2.288.817z"
      />
      <path
        d="M488.524 213.345h5.217c-1.12.788-4.579.804-5.217 0zM533.326 200.795a68.62 68.62 0 0139.638 12.55H493.74a68.604 68.604 0 0139.585-12.55zM.164 121.362C3.708 57.098 55.34 4.702 119.552.31A128.661 128.661 0 01252.545 94.24c1.558-.056 3.115-.118 4.687-.118a128.664 128.664 0 01123.422 92.39 90.909 90.909 0 01107.87 26.832H87.272c-49.296 0-89.21-40.83-87.2-90.086q.04-.947.092-1.897z"
        fill={color}
      />
      <path
        d="M66.54 142.951l-2.862-11.284a146.525 146.525 0 00-15.545-5.577l-.362 5.244-1.464-5.777c-6.552-1.871-11.008-2.695-11.008-2.695s6.02 22.893 18.646 40.394l14.713 2.585-11.43 1.648a59.282 59.282 0 005.113 5.418c18.369 17.05 38.828 24.872 45.697 17.472s-2.454-27.22-20.822-44.27c-5.694-5.286-12.848-9.528-20.008-12.866z"
        fill="#e6e6e6"
      />
      <path
        d="M104.758 192.748c9.705-2.784 11.97-24.57 5.06-48.66-2.143-7.468-6.074-14.797-10.479-21.356l-5.59 7.965 3.383-11.139a146.526 146.526 0 00-10.424-12.81l-3.02 4.303 1.732-5.703c-4.641-4.988-8.03-7.997-8.03-7.997s-6.68 22.71-4.918 44.218l11.26 9.818-10.637-4.498"
        fill="#e6e6e6"
      />
      <path
        d="M168.527 70.888h-.91V45.923a14.449 14.449 0 00-14.45-14.448h-52.89A14.449 14.449 0 0085.83 45.923V182.88a14.449 14.449 0 0014.448 14.448h52.89a14.449 14.449 0 0014.45-14.448V88.658h.91z"
        fill="#3f3d56"
      />
      <path
        d="M153.75 35.234h-6.903a5.126 5.126 0 01-4.747 7.062h-30.3a5.126 5.126 0 01-4.746-7.062h-6.448a10.79 10.79 0 00-10.79 10.79v136.755a10.79 10.79 0 0010.79 10.79h53.145a10.79 10.79 0 0010.79-10.79V46.024a10.79 10.79 0 00-10.79-10.79z"
        fill="#fff"
      />
      <path
        fill={color}
        d="M115.729 78.023h32.832v1.749h-32.832zM115.729 84.075h32.8v1.749h-32.8z"
      />
      <path
        fill={color}
        d="M115.729 78.023h32.832v1.749h-32.832zM115.729 84.075h32.8v1.749h-32.8zM97.831 71.998h13.995v13.995H97.831zM115.729 114.759h32.832v1.749h-32.832zM115.729 120.811h32.8v1.749h-32.8zM97.831 108.734h13.995v13.995H97.831zM115.729 151.495h32.832v1.749h-32.832zM115.729 157.546h32.8v1.749h-32.8zM97.831 145.469h13.995v13.995H97.831z"
      />
    </svg>
  );
};

SvgMobilePosts.propTypes = {
  color: PropTypes.string
};
SvgMobilePosts.defaultProps = {
  color: "primary"
};
export default SvgMobilePosts;
