import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCreativeProcess = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 886 792.695"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={443} cy={738.195} rx={443} ry={54.5} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M411 457.695v254l-173 29-189-23v-255l189-17 173 12z"
      />
      <path opacity={0.1} d="M238 471.695v269l-189-23v-255l189 9z" />
      <path
        fill="#fff"
        opacity={0.1}
        d="M411 457.695l-173 14-189-9 189-17 173 12z"
      />
      <path
        fill="#d0cde1"
        d="M788 632.695v95l-121 27-243-20v-85l3.98-.67.37-.06L638 613.695l147.43 18.67 2.57.33z"
      />
      <path
        opacity={0.1}
        d="M667 663.695v91l-243-20v-85l3.98-.67L667 663.695z"
      />
      <path
        fill="#fff"
        opacity={0.1}
        d="M785.43 632.365L667 663.695l-238.65-14.73L638 613.695l147.43 18.67z"
      />
      <path d="M345 553.695v195a265.608 265.608 0 00132 0v-195z" fill={color} />
      <ellipse cx={411} cy={552.195} rx={66} ry={7.5} fill={color} />
      <ellipse cx={411} cy={552.195} rx={66} ry={7.5} opacity={0.1} />
      <path
        d="M476.873 284.375a206.2 206.2 0 002.812 6.258l-2.082.977a209.216 209.216 0 01-2.843-6.327zM848.1 117.723a207.928 207.928 0 013.749 8.475l-2.123.882a206.056 206.056 0 00-5.757-12.619l2.06-1.023q1.056 2.123 2.07 4.285zm-8.739-16.624l-1.984 1.162a203.703 203.703 0 00-7.409-11.72l1.9-1.294a206.724 206.724 0 017.493 11.852zm17.433 38.22a205.424 205.424 0 014.036 13.43l-2.223.584a202.8 202.8 0 00-3.992-13.277zm-33.213-61.383l-1.808 1.421a201.172 201.172 0 00-8.946-10.593l1.704-1.544a203.763 203.763 0 019.05 10.716zm40.352 88.489a203.883 203.883 0 012.152 13.858l-2.282.275a202.456 202.456 0 00-2.13-13.703zm-59.17-109.269l-1.592 1.658a202.802 202.802 0 00-10.309-9.251l1.477-1.763a205.475 205.475 0 0110.425 9.356zm62.515 137.122c.235 4.662.31 9.385.223 14.04l-2.3-.043c.086-4.601.012-9.272-.22-13.88zM783.292 39.18l-1.352 1.86a203.552 203.552 0 00-11.485-7.755l1.221-1.949a206.218 206.218 0 0111.616 7.844zm83.465 183.155c-.407 4.647-.98 9.334-1.703 13.93l-2.271-.357a203.507 203.507 0 001.684-13.774zM759.55 24.305l-1.085 2.027a203.86 203.86 0 00-12.44-6.121l.944-2.097a205.687 205.687 0 0112.581 6.19zm102.853 225.74a207.042 207.042 0 01-3.584 13.564l-2.202-.664a205.125 205.125 0 003.544-13.412zM733.992 12.794l-.8 2.156a205.012 205.012 0 00-13.162-4.376l.652-2.205a207.536 207.536 0 0113.31 4.425zm120.326 264.1a206.888 206.888 0 01-5.393 12.946l-2.091-.956a204.584 204.584 0 005.332-12.801zM707.097 4.862l-.5 2.243c-4.49-.998-9.08-1.854-13.638-2.545l.345-2.272c4.61.697 9.25 1.564 13.793 2.574zm135.567 297.524a205.74 205.74 0 01-7.101 12.087l-1.943-1.232a203.89 203.89 0 007.023-11.952zM679.363.664l-.188 2.29A202.425 202.425 0 00665.31 2.3L665.34 0c4.66.06 9.376.283 14.023.664zm148.29 325.38a204.697 204.697 0 01-8.682 10.997l-1.754-1.486c2.97-3.508 5.86-7.167 8.584-10.873zM651.303.302l.13 2.295c-4.604.26-9.257.682-13.831 1.258l-.287-2.281C641.942.99 646.648.563 651.303.302zm158.254 347.11a204.152 204.152 0 01-10.12 9.711l-1.533-1.713c3.428-3.07 6.794-6.3 10.005-9.6zM623.467 3.807l.444 2.257c-4.519.889-9.062 1.947-13.504 3.144l-.598-2.22a205.421 205.421 0 0113.658-3.181zM788.67 366.11a204.395 204.395 0 01-11.36 8.224l-1.283-1.908c3.82-2.57 7.598-5.305 11.23-8.131zM596.403 11.1l.748 2.174a204.976 204.976 0 00-12.947 4.962l-.895-2.118a206.701 206.701 0 0113.094-5.018zm169.012 370.66a208.596 208.596 0 01-12.374 6.597l-1.012-2.064a205.44 205.44 0 0012.236-6.525zM571.62 24.064a205.233 205.233 0 00-12.162 6.66l-1.173-1.977a207.7 207.7 0 0112.3-6.736zm-23.842 14.133a203.105 203.105 0 00-11.138 8.26l-1.432-1.798a204.688 204.688 0 0111.265-8.354zm-21.68 17.268a202.247 202.247 0 00-9.884 9.702l-1.666-1.585c3.204-3.369 6.568-6.67 9.998-9.812zM507.02 75.531a202.824 202.824 0 00-8.463 10.974l-1.868-1.34c2.71-3.776 5.59-7.51 8.56-11.099zm-16.155 22.506a204.485 204.485 0 00-6.887 12.031l-2.033-1.072a206.275 206.275 0 016.964-12.17zm-12.938 24.509a204.308 204.308 0 00-5.189 12.86l-2.16-.787a207.135 207.135 0 015.247-13.006zm-9.49 26.047a204.982 204.982 0 00-3.392 13.451l-2.247-.486a206.78 206.78 0 013.43-13.603zm-5.861 27.102a204.257 204.257 0 00-1.527 13.792l-2.293-.174c.354-4.64.873-9.331 1.545-13.949zm-2.104 27.66c-.033 4.61.094 9.278.379 13.874l-2.295.142c-.288-4.648-.416-9.37-.384-14.034zm1.715 27.692a201.88 201.88 0 002.284 13.677l-2.253.458a204.04 204.04 0 01-2.31-13.834zm5.507 27.165a203.586 203.586 0 004.142 13.234l-2.17.76a206.258 206.258 0 01-4.189-13.383zM739.066 392.107l.868 2.129c-2.15.876-4.325 1.72-6.466 2.51l-.796-2.157c2.117-.781 4.268-1.616 6.394-2.482z"
        fill="#e6e6e6"
      />
      <circle cx={411} cy={462.695} r={43} fill={color} />
      <path
        d="M66.879 541.476h41.304a144.462 144.462 0 000-49.247H66.879a88.612 88.612 0 010 49.247z"
        fill={color}
      />
      <path
        d="M165.121 593.498h-41.304a144.462 144.462 0 010-49.247h41.304a88.612 88.612 0 000 49.247z"
        fill="#ff6584"
      />
      <path
        d="M143.879 673.476h41.304a144.462 144.462 0 000-49.247h-41.304a88.612 88.612 0 010 49.247zM252.801 381.645a118.141 118.141 0 10-54.815 44.012 38.215 38.215 0 1054.815-44.012z"
        fill={color}
      />
      <path
        fill="#fff"
        d="M84.387 292.074h140.535v11.095H84.387zM84.387 310.565h140.535v11.095H84.387zM84.387 329.057h140.535v11.095H84.387z"
      />
      <path
        d="M745.146 634.216c-.229-.375-5.64-9.41-7.516-28.172-1.72-17.213-.614-46.226 14.432-86.698 28.506-76.67-6.569-138.533-6.927-139.15l1.73-1.003c.091.156 9.142 15.928 14.489 41.044a179.061 179.061 0 01-7.416 99.806c-28.457 76.54-7.301 112.774-7.084 113.131z"
        fill="#3f3d56"
      />
      <circle cx={734} cy={362.695} r={13} fill={color} />
      <circle cx={775} cy={410.695} r={13} fill="#3f3d56" />
      <circle cx={747} cy={442.695} r={13} fill={color} />
      <circle cx={781} cy={469.695} r={13} fill={color} />
      <circle cx={737} cy={511.695} r={13} fill="#3f3d56" />
      <path
        d="M753 634.695s-13-32 26-56zM737.012 634.114s-5.916-34.03-51.709-33.738z"
        fill="#3f3d56"
      />
      <circle cx={657.446} cy={177.791} r={43.655} fill="#2f2e41" />
      <path
        d="M595.625 271.642l-12.17 27.587-12.982-38.946s-1.623-34.077-12.982-32.454-1.623 34.077-1.623 34.077 7.302 72.211 23.53 68.154 26.774-27.586 26.774-27.586l2.84-24.877zM640.655 209.573s4.868 26.775-5.68 32.455 40.569 4.057 41.38-4.868c0 0-11.36-27.587-11.36-34.077zM563.576 429.452s4.057 46.247 5.68 55.984 1.622 24.34 1.622 24.34-4.057 31.643-2.434 61.664l2.434 25.152h18.661l.713-3.348 7.401-34.786s8.114-28.398 4.868-49.493l8.925-68.154zM621.183 445.679s19.472 60.852 24.34 67.343 11.36 21.095 11.36 21.095 13.792 34.077 21.095 39.757l8.113 14.604 13.793-4.057-4.056-32.454s-1.623-26.775-19.473-50.304l-8.925-54.361z"
        fill="#a0616a"
      />
      <path
        d="M670.675 236.348s-24.021 6.278-33.106 3.545c0 0-9.084-.3-12.33.512s-23.53 8.114-23.53 9.736 4.058 17.85 4.058 17.85-2.434 9.737-1.623 16.227-14.604 26.775-6.49 28.398 12.98-1.623 17.038 1.623 52.738 17.85 52.738 17.85l40.568-80.325s-6.49-13.793-12.17-13.793-20.821-4.15-20.821-4.15z"
        fill="#3f3d56"
      />
      <path
        d="M605.767 250.953l-4.057-1.623s-14.605 22.718-9.736 25.152 17.038 8.114 17.038 8.114z"
        fill="#3f3d56"
      />
      <path
        d="M604.144 309.37l-12.982 21.096s-20.284 3.245-21.906 30.832c0 0-13.794 4.868-17.039 30.02 0 0-20.284 12.982-9.736 27.586s67.343 43.814 127.383 34.077c0 0 11.36-22.718 3.246-38.134 0 0 8.702-16.368-6.197-27.656 0 0 12.687-16.157-.294-34.007l.811-25.964zM591.974 594.158h-22.718s-.812 20.284-9.737 25.152-25.963 30.832-12.982 34.077 51.116-21.095 51.116-26.775-5.68-32.454-5.68-32.454zM701.507 581.176l-19.473 7.302s14.605 39.757 14.605 45.436 2.434 12.17 17.038 9.737 12.17-13.793 12.17-13.793z"
        fill="#2f2e41"
      />
      <circle cx={648.769} cy={191.723} r={25.152} fill="#a0616a" />
      <path
        d="M704.753 279.35s-11.36 40.568-12.982 43.814l-26.775 68.965s3.245 34.889-8.925 29.21-.811-35.7-.811-35.7l18.66-73.834 10.549-32.455z"
        fill="#a0616a"
      />
      <path
        d="M698.262 245.273l9.736 6.491s8.114 31.643 0 30.832-26.775 4.057-27.586 2.434 17.85-39.757 17.85-39.757z"
        fill="#3f3d56"
      />
      <circle cx={671.005} cy={132.055} r={18.064} fill="#2f2e41" />
      <path
        d="M646.92 122.27a18.066 18.066 0 0116.182-17.966 18.264 18.264 0 00-1.882-.098 18.064 18.064 0 100 36.128 18.264 18.264 0 001.882-.097 18.066 18.066 0 01-16.183-17.967z"
        fill="#2f2e41"
      />
      <ellipse
        cx={650.144}
        cy={163.551}
        rx={30.107}
        ry={18.064}
        fill="#2f2e41"
      />
      <ellipse cx={675.544} cy={190.506} rx={2.028} ry={4.868} fill="#a0616a" />
      <path fill="#3f3d56" d="M286.988 87.383h274v152.598h-274z" />
      <path
        fill="#fff"
        d="M337.328 145.781h172.661v5.061H337.328zM337.328 166.025h172.661v5.061H337.328zM337.328 186.27h172.661v5.061H337.328z"
      />
      <path fill={color} d="M286.988 87.548h274v17h-274z" />
      <circle cx={298.181} cy={96.548} r={6.192} fill="#e6e6e6" />
      <circle cx={314.988} cy={96.548} r={6.192} fill="#e6e6e6" />
      <circle cx={331.796} cy={96.548} r={6.192} fill="#e6e6e6" />
    </svg>
  );
};

SvgCreativeProcess.propTypes = {
  color: PropTypes.string
};
SvgCreativeProcess.defaultProps = {
  color: "primary"
};
export default SvgCreativeProcess;
