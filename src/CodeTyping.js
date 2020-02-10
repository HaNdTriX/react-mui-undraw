import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCodeTyping = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1088 826.294"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M934.987 329.388C887.167 141.348 721.934 5.61 527.985.166 425.451-2.713 317.555 31.294 239 150.294 98.573 363.019 247.63 510.019 351.547 579.87a650.24 650.24 0 01134.403 120.8c70.193 83.296 205.229 186.802 366.05 24.624 116.564-117.548 114.84-270.654 82.987-395.906z"
        fill="#f2f2f2"
      />
      <path
        opacity={0.1}
        d="M719.6 507.394l98.4-98.1-98.4-98.1 30-29.9 128.4 128-128.4 128-30-29.9zM438.6 416.294h40v-40h-40zm200.8-40h-40v40h40zm-120.4 40h40v-40h-40zM384.4 506.394l-98.5-98.1 98.4-98.1-30-29.9-128.3 128 128.4 128 30-29.9z"
      />
      <path
        d="M1088 752.294c0 16.568-243.557 74-544 74s-544-57.432-544-74 243.557 14 544 14 544-30.569 544-14z"
        fill="#3f3d56"
      />
      <path
        d="M1088 752.294c0 16.568-243.557 74-544 74s-544-57.432-544-74 243.557 14 544 14 544-30.569 544-14z"
        opacity={0.1}
      />
      <ellipse cx={544} cy={752.294} rx={544} ry={30} fill="#3f3d56" />
      <path
        d="M632.696 607.953c0 64.016 40.16 115.817 89.79 115.817"
        fill="#3f3d56"
      />
      <path
        d="M722.487 723.77c0-64.735 44.816-117.118 100.201-117.118M665.229 613.756c0 60.809 25.61 110.014 57.258 110.014"
        fill={color}
      />
      <path
        d="M722.487 723.77c0-82.717 51.8-149.651 115.817-149.651"
        fill="#3f3d56"
      />
      <path
        d="M703.597 724.587s12.734-.392 16.572-3.125 19.587-5.996 20.54-1.613 19.136 21.797 4.76 21.913-33.405-2.239-37.235-4.572-4.637-12.603-4.637-12.603z"
        fill="#a8a8a8"
      />
      <path
        d="M745.725 740.237c-14.376.116-33.404-2.24-37.234-4.573-2.917-1.777-4.08-8.152-4.469-11.094-.27.012-.425.017-.425.017s.807 10.27 4.637 12.603 22.858 4.688 37.235 4.572c4.15-.033 5.583-1.51 5.504-3.696-.576 1.32-2.159 2.146-5.248 2.17z"
        opacity={0.2}
      />
      <path
        d="M865.533 382.853s-30.789-23.377-33.126-14.808 22.591 28.044 22.591 28.044z"
        fill="#ffb9b9"
      />
      <path
        d="M865.533 382.853s-30.789-23.377-33.126-14.808 22.591 28.044 22.591 28.044z"
        opacity={0.1}
      />
      <path
        d="M967.173 308.842s-36.613 65.435-37.392 74.783-.779 10.127-3.895 9.348-45.96-5.453-49.855-3.895-11.685-9.348-11.685-9.348-14.8 14.801-11.685 17.917 12.464 4.674 14.022 8.569 3.895 7.79 10.906 7.01 54.53 12.465 60.761 10.128 7.79-6.232 10.906-6.232 9.348-3.116 9.348-3.895 21.811-42.066 21.811-42.066 25.707-56.087-13.242-62.319z"
        fill="#d0cde1"
      />
      <path
        d="M967.173 308.842s-36.613 65.435-37.392 74.783-.779 10.127-3.895 9.348-45.96-5.453-49.855-3.895-11.685-9.348-11.685-9.348-14.8 14.801-11.685 17.917 12.464 4.674 14.022 8.569 3.895 7.79 10.906 7.01 54.53 12.465 60.761 10.128 7.79-6.232 10.906-6.232 9.348-3.116 9.348-3.895 21.811-42.066 21.811-42.066 25.707-56.087-13.242-62.319z"
        opacity={0.1}
      />
      <path
        d="M914.054 265.704a64.79 64.79 0 00.2 12.42c1.183 8.95 5.302 18.279 1.41 26.633-1.412 3.032-3.805 5.675-5.109 8.743-2.759 6.497-.257 13.702-.632 20.616-.485 8.932-6.165 17.538-14.807 22.433 14.764.458 28.804-6.841 38.093-16.788s14.463-22.284 18.341-34.628a75.281 75.281 0 003.805-17.922 25.835 25.835 0 00-1.208-10.386 39.575 39.575 0 00-5.342-9.123c-2.326-3.27-4.716-6.605-8.148-9.039-4.227-2.997-12.378-6.006-17.985-5.57-6.879.535-8.329 7.837-8.618 12.611z"
        fill="#2f2e41"
      />
      <path
        d="M936.792 290.146s8.569 30.381 1.558 38.95 42.065-3.895 42.065-3.895-24.148-24.149-12.463-39.729z"
        fill="#ffb9b9"
      />
      <path
        d="M936.792 290.146s8.569 30.381 1.558 38.95 42.065-3.895 42.065-3.895-24.148-24.149-12.463-39.729z"
        opacity={0.1}
      />
      <path
        fill={color}
        d="M719.6 488.394l98.4-98.1-98.4-98.1 30-29.9 128.4 128-128.4 128-30-29.9z"
      />
      <path
        fill="#ffb9b9"
        d="M908.748 695.221v22.591l11.685 14.021 10.127-4.674-3.116-32.717-18.696.779z"
      />
      <path
        d="M913.422 716.254s-3.116-10.906-8.569-3.116-10.905 24.927-14.021 25.706-24.928 24.928-3.116 24.928 28.822-10.127 28.822-10.127 21.812-8.569 21.812-10.127-3.116-30.38-4.674-30.38-2.337 5.452-6.232 5.452-14.022-2.336-14.022-2.336z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb9b9"
        d="M960.941 699.116l-.779 21.033 18.695 7.789v-30.38l-17.916 1.558z"
      />
      <path
        d="M981.194 720.149s-10.126-10.906-15.58-8.57a53.812 53.812 0 00-7.79 3.896s-3.115 10.126-4.673 18.695-2.337 12.464-3.895 15.58-3.116 14.8 12.464 16.359 20.253-7.011 20.253-7.011l3.895-20.254s-1.558-18.696-4.674-18.696zM918.875 474.767s-22.59 50.634-19.474 96.595c0 0-7.79 17.916-3.116 45.96s10.905 84.13 10.905 84.13 21.033 2.338 22.591-1.557c0 0 1.558-38.95 3.116-40.508s-.779-37.391-3.116-44.402 21.812-76.341 21.812-76.341l-6.232-86.468z"
        fill="#2f2e41"
      />
      <path
        d="M918.875 474.767s-22.59 50.634-19.474 96.595c0 0-7.79 17.916-3.116 45.96s10.905 84.13 10.905 84.13 21.033 2.338 22.591-1.557c0 0 1.558-38.95 3.116-40.508s-.779-37.391-3.116-44.402 21.812-76.341 21.812-76.341l-6.232-86.468z"
        opacity={0.1}
      />
      <path
        d="M912.643 471.65l14.801 31.94s7.011 72.445 10.906 81.793c0 0 1.558 26.486 8.569 35.055s12.464 84.13 12.464 84.13 19.474 5.454 21.032 0 6.232-42.844 6.232-42.844 1.558-31.938-7.01-52.971 10.126-96.595 10.126-96.595 19.475-36.612-8.569-66.214z"
        fill="#2f2e41"
      />
      <circle cx={953.93} cy={267.556} r={31.939} fill="#ffb9b9" />
      <path
        d="M983.531 315.853s-33.496 0-38.17 3.895a6.215 6.215 0 01-8.569 0s-11.685.779-14.8 10.127-12.465 21.812-12.465 21.812-14.021 10.126-6.232 36.612 1.558 69.33 1.558 69.33-6.231 9.348 0 13.243 8.57 5.453 7.79 8.569 70.888-25.707 70.888-31.16-1.558-10.127 0-12.464 3.116-6.232 1.558-10.127 1.558-4.673.78-8.568 3.894-32.718 7.01-45.182 2.337-55.308-9.348-56.087z"
        fill="#d0cde1"
      />
      <path
        d="M865.533 392.2s-30.789-23.376-33.126-14.807 22.591 28.044 22.591 28.044z"
        fill="#ffb9b9"
      />
      <path
        d="M967.173 319.748s-36.613 65.435-37.392 74.783-.779 10.127-3.895 9.348-45.96-5.453-49.855-3.895-11.685-9.348-11.685-9.348-14.8 14.8-11.685 17.917 12.464 4.674 14.022 8.569 3.895 7.79 10.906 7.01 54.53 12.464 60.761 10.127 7.79-6.231 10.906-6.231 9.348-3.116 9.348-3.895 21.811-42.066 21.811-42.066 25.707-56.087-13.242-62.319z"
        fill="#d0cde1"
      />
      <path
        d="M938.114 287.96c-.442-3.162-2.062-6.032-2.893-9.116a18.925 18.925 0 012.154-14.695c4.581-7.4 13.576-10.677 19.848-16.709.13 3.073 2.262 5.699 4.619 7.675s5.06 3.579 7.055 5.919a23.184 23.184 0 014.109 8.324 29.246 29.246 0 011.623 10.917 13.69 13.69 0 01-4.73 9.702c-2.337 1.846-5.602 2.9-6.73 5.656a9.644 9.644 0 00-.376 4.27c.535 8.57 1.035 17.294-.983 25.64s-6.963 16.41-14.712 20.11c6.368.452 12.87.893 19.049-.715s12.087-5.655 14.217-11.673c1.051-2.969 1.15-6.27 2.643-9.044 3.78-7.018 14.214-7.338 19.34-13.443 2.052-2.442 3.044-5.59 3.78-8.694 4.328-18.265 1.287-37.659-5.302-55.235-2.271-6.058-5.099-12.158-9.97-16.415-4.145-3.624-9.438-5.62-14.673-7.325-7.64-2.488-15.51-4.526-23.54-4.79a29.897 29.897 0 00-10.333 1.207 30.722 30.722 0 00-9.092 5.18c-12.58 9.788-21.144 25.431-20.008 41.33.688 9.62 4.764 18.723 10 26.822 1.831 2.833 6.158 8.873 10.18 7.092 3.648-1.616 5.204-8.573 4.725-11.99z"
        fill="#2f2e41"
      />
      <path
        d="M438.6 397.294h40v-40h-40zm200.8-40h-40v40h40zm-120.4 40h40v-40h-40z"
        fill={color}
      />
      <ellipse
        cx={206.206}
        cy={211.839}
        rx={33.657}
        ry={26.252}
        fill="#2f2e41"
      />
      <path
        d="M211.928 392.576s30.29 2.02 35.676-2.02 28.272 5.386 30.291 10.771-32.31 6.058-37.696 6.058-30.964 8.078-30.964 8.078z"
        fill="#a0616a"
      />
      <path
        d="M149.552 706.138s-14.117 35.6-6.751 39.896 84.701 1.228 84.701 1.228 12.89-7.98-1.841-13.504c0 0-12.276-.613-20.255-5.524s-17.186-14.117-17.186-14.117-.613-13.503-5.524-10.434a12.614 12.614 0 00-5.524 8.593z"
        fill="#2f2e41"
      />
      <path
        d="M149.552 706.138s-14.117 35.6-6.751 39.896 84.701 1.228 84.701 1.228 12.89-7.98-1.841-13.504c0 0-12.276-.613-20.255-5.524s-17.186-14.117-17.186-14.117-.613-13.503-5.524-10.434a12.614 12.614 0 00-5.524 8.593z"
        opacity={0.1}
      />
      <path
        fill={color}
        d="M384.4 487.394l-98.5-98.1 98.4-98.1-30-29.9-128.3 128 128.4 128 30-29.9z"
      />
      <path
        d="M127.785 717.029s-15.482 39.042-7.404 43.754 92.893 1.346 92.893 1.346 14.136-8.75-2.02-14.809c0 0-13.462-.673-22.213-6.058s-18.848-15.482-18.848-15.482-.673-14.81-6.058-11.444a13.834 13.834 0 00-6.058 9.424zM207.216 469.314l-9.424 84.815s-3.366 40.389-13.463 49.14c0 0 0 12.79-3.366 16.828l-4.712 53.178s6.732 19.52 6.058 22.886 2.693 14.136 2.02 15.483-32.31 0-32.31 0l6.73-108.376 20.868-150.782z"
        fill="#2f2e41"
      />
      <path
        d="M207.216 469.314l-9.424 84.815s-3.366 40.389-13.463 49.14c0 0 0 12.79-3.366 16.828l-4.712 53.178s6.732 19.52 6.058 22.886 2.693 14.136 2.02 15.483-32.31 0-32.31 0l6.73-108.376 20.868-150.782z"
        opacity={0.1}
      />
      <path
        d="M190.387 466.621s-7.404 69.334-10.77 84.143a191.451 191.451 0 00-4.039 29.618s-.673 21.54-6.731 27.598a18.194 18.194 0 00-5.385 13.463s-6.059 67.987-2.693 76.065 6.731 14.809 3.366 20.194-40.389 5.385-40.389 1.346 0-7.404-2.019-9.424 0-14.809 0-14.809-8.078-59.909-.673-77.41 10.77-65.295 10.77-65.295-5.385-54.524-12.116-63.275 1.346-39.715 1.346-39.715z"
        fill="#2f2e41"
      />
      <path
        d="M171.436 251.312c.782 1.783 2.655 2.775 4.36 3.715 9.883 5.444 18.156 13.338 26.307 21.141a30.882 30.882 0 011.225-20.884c.973-2.253 2.248-4.676 1.553-7.03-.512-1.73-1.986-2.98-3.414-4.084a105.835 105.835 0 00-10.41-7.102c-2.52-1.508-7.702-5.522-10.594-5.085-.152 3.908-.23 7.402-1.942 11.054-.406.866-6.786 8.957-7.085 8.275z"
        fill="#a0616a"
      />
      <circle cx={205.869} cy={232.369} r={27.599} fill="#a0616a" />
      <path
        d="M207.216 297.664s4.712-23.56-8.751-31.638-28.945-17.501-28.945-17.501-4.712-.673-6.732 9.424c0 0-38.368 7.404-42.407 43.754s2.692 89.527 2.692 89.527-6.058 46.447-13.462 71.353c0 0-6.059 5.385 20.867-2.693s74.045 22.887 74.045 22.887 4.712-4.712 4.712-8.078 5.385-22.887 5.385-22.887 4.712-82.796 6.731-92.22-8.077-60.582-14.135-61.928z"
        fill="#575a89"
      />
      <path
        d="M199.365 235.213a11.51 11.51 0 015.413-1.442 10.3 10.3 0 005.354-1.595c2.607-2.002 2.798-5.87 4.705-8.546 2.762-3.876 8.27-4.342 13.024-4.148 2.908.118 6.04.292 8.489-1.28 2.514-1.616 3.653-4.658 4.5-7.523 1.003-3.388 1.652-7.531-.832-10.044-1.725-1.745-4.448-2.09-6.364-3.622-1.987-1.59-2.804-4.175-3.884-6.479a17.507 17.507 0 00-5.638-7.06c-3.614-2.512-8.231-3.075-12.632-3.028s-8.821.625-13.19.085c-3.579-.442-7.147-1.633-10.715-1.105-4.545.672-8.306 4.102-10.546 8.114s-3.201 8.593-4.133 13.092l-2.535 12.238c-.786 3.796-1.575 7.693-.968 11.521 1.258 7.937 8.277 14.245 8.76 22.267a13.669 13.669 0 018.343-9.921 2.61 2.61 0 011.7-.206c.697.223 1.105.92 1.545 1.504 1.153 1.533 4.775 3.859 6.829 2.772 1.837-.973.465-4.028 2.775-5.594z"
        fill="#2f2e41"
      />
      <path
        d="M129.805 360.939s-4.712 29.618 14.809 26.925c0 0 10.097-1.346 11.443 0s51.159-7.404 57.89-14.809c0 0 8.078-2.692 12.116 1.347s44.428 8.077 32.311-4.04-30.964-14.808-30.964-14.808l-25.58 1.346s-13.462 4.039-21.54 0-30.964-2.693-30.964-2.693z"
        fill="#a0616a"
      />
      <path
        d="M157.403 267.373s-30.29 3.365-30.29 47.12v55.87s16.828-7.405 20.193-6.732 16.829-8.75 16.829-8.75 15.482-36.35 14.136-46.447-.673-39.715-20.868-41.061z"
        fill="#575a89"
      />
      <ellipse
        cx={205.869}
        cy={215.204}
        rx={25.916}
        ry={13.463}
        fill="#2f2e41"
      />
      <ellipse cx={181.636} cy={217.56} rx={9.087} ry={22.55} fill="#2f2e41" />
    </svg>
  );
};

SvgCodeTyping.propTypes = {
  color: PropTypes.string
};
SvgCodeTyping.defaultProps = {
  color: "primary"
};
const MemoSvgCodeTyping = React.memo(SvgCodeTyping);
export default MemoSvgCodeTyping;
