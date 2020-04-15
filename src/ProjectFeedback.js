import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgProjectFeedback = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1119.901 668.597"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M271.486 527.708l-1.268-.475c-.278-.104-27.992-10.723-40.975-34.799-12.983-24.077-6.625-53.067-6.56-53.356l.3-1.32 1.266.475c.279.105 27.992 10.723 40.975 34.8 12.983 24.077 6.626 53.066 6.56 53.355zm-40.164-36.395c10.977 20.357 32.877 30.792 38.426 33.174 1.055-5.947 4.364-29.997-6.603-50.334-10.965-20.335-32.874-30.786-38.425-33.174-1.056 5.951-4.363 29.998 6.602 50.334z"
        fill="#3f3d56"
      />
      <path
        d="M239.165 483.988c23.331 14.037 32.317 41.918 32.317 41.918s-28.842 5.123-52.173-8.914-32.317-41.918-32.317-41.918 28.842-5.122 52.173 8.914z"
        fill="#d0cde1"
      />
      <path
        fill="#3f3d56"
        d="M0 527.597h710.428v2H0zM409.472 666.597H1119.9v2H409.472zM527.496 510.65l50.4-74.952-50.297 83.015.105 8.434q-5.52.042-10.931-.184l2.5-108.412-.069-.837.092-.161.24-10.245-55.196-80.137 55.13 72.47.196 2.165 1.888-81.91-47.673-83.083 47.809 68.694-.499-169.696.001-.565.016.556 3.165 133.743 43.449-54.326-43.307 65.848.949 73.266 39.981-71.505-39.835 82.277.528 40.74 58.145-99.606-57.968 113.818z"
      />
      <path
        d="M86.996 511.15l50.4-74.952L87.1 519.213l.105 8.434q-5.52.042-10.931-.184l2.5-108.412-.069-.837.092-.161.24-10.245-55.195-80.137 55.13 72.47.195 2.165 1.888-81.91-47.673-83.083 47.809 68.694-.499-169.696.001-.565.016.556 3.165 133.743 43.449-54.326-43.307 65.848.949 73.266 39.981-71.505-39.835 82.277.528 40.74 58.145-99.606-57.968 113.818zM442.428 240.048h-2.099V182.55a33.278 33.278 0 00-33.278-33.279H285.233a33.278 33.278 0 00-33.279 33.279v315.44a33.278 33.278 0 0033.279 33.279H407.05a33.278 33.278 0 0033.278-33.279V280.976h2.1z"
        fill="#3f3d56"
      />
      <path
        d="M408.394 525.343H285.988a25.881 25.881 0 01-25.848-25.857v-314.98a25.877 25.877 0 0125.848-25.848h16.343l-.567 1.38a10.671 10.671 0 00-.799 4.076 10.819 10.819 0 0010.807 10.806h69.789a10.818 10.818 0 0010.806-10.806 10.697 10.697 0 00-.798-4.077l-.567-1.38h17.392a25.878 25.878 0 0125.849 25.849v314.98a25.882 25.882 0 01-25.85 25.857zM285.988 160.658a23.875 23.875 0 00-23.848 23.848v314.98a23.88 23.88 0 0023.848 23.857h122.406a23.88 23.88 0 0023.849-23.857v-314.98a23.875 23.875 0 00-23.85-23.848h-14.5a12.814 12.814 0 01-12.332 16.262h-69.79a12.814 12.814 0 01-12.333-16.262z"
        fill="#d0cde1"
      />
      <path
        fill="#d0cde1"
        d="M311.88 372.027h103.416v3.843H311.88zM311.88 384.196h103.416v3.843H311.88zM311.88 396.364h103.416v3.843H311.88zM279.086 374.402h23.43v23.43h-23.43zM311.88 423.027h103.416v3.843H311.88zM311.88 435.196h103.416v3.843H311.88zM311.88 447.364h103.416v3.843H311.88zM279.086 425.402h23.43v23.43h-23.43zM370.47 295.996c-5.118 18.92-22.647 30.636-22.647 30.636s-9.232-18.956-4.115-37.875 22.648-30.636 22.648-30.636 9.232 18.957 4.114 37.875z"
      />
      <path
        d="M323.912 295.996c5.118 18.92 22.648 30.636 22.648 30.636s9.232-18.956 4.114-37.875-22.648-30.636-22.648-30.636-9.232 18.957-4.114 37.875z"
        fill="#d0cde1"
      />
      <path
        d="M331.432 291.93c14.044 13.671 15.76 34.686 15.76 34.686s-21.054-1.149-35.098-14.82-15.759-34.686-15.759-34.686 21.054 1.15 35.097 14.82z"
        fill={color}
      />
      <path
        d="M362.95 291.93c-14.043 13.671-15.759 34.686-15.759 34.686s21.054-1.149 35.097-14.82 15.759-34.686 15.759-34.686-21.054 1.15-35.097 14.82zM112.447 184.595l28.832-11.151 10.765 27.833-28.832 11.15z"
        fill={color}
      />
      <path
        d="M146.833 199.082l-30.348 11.738-11.332-29.298 30.35-11.738zm-29.398 9.686l27.314-10.564-10.198-26.368-27.314 10.564z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M220.183 14.81l28.831-11.15 10.765 27.833-28.832 11.15z"
      />
      <path
        d="M254.569 29.298l-30.35 11.738-11.33-29.298L243.238 0zm-29.398 9.686l27.314-10.564-10.198-26.368-27.314 10.564zM845.392 453.573c-15.266 0-28.652 15.945-36.033 39.753a115.052 115.052 0 00-1.469 5.13 148.577 148.577 0 00-4.595 37.352c0 45.346 18.882 82.234 42.097 82.234s42.096-36.888 42.096-82.234-18.881-82.235-42.096-82.235zm0 163.164c-22.49 0-40.791-36.307-40.791-80.93a147.733 147.733 0 014.653-37.5q.646-2.458 1.384-4.817c7.186-23.15 20.075-38.611 34.754-38.611 22.49 0 40.79 36.307 40.79 80.929s-18.3 80.929-40.79 80.929z"
        fill="#3f3d56"
      />
      <path
        d="M855.508 583.354c-8.052 0-14.359-20.885-14.359-47.546s6.307-47.547 14.359-47.547 14.358 20.885 14.358 47.547-6.306 47.546-14.358 47.546zm0-93.787c-7.076 0-13.053 21.175-13.053 46.24s5.977 46.242 13.053 46.242 13.053-21.176 13.053-46.241-5.978-46.241-13.053-46.241z"
        fill="#3f3d56"
      />
      <ellipse cx={857.139} cy={535.808} rx={5.548} ry={10.92} fill="#cfcce0" />
      <path
        fill="#3f3d56"
        d="M845.065 387.655l89.414-.326v35.225l-89.414 3.608v-38.507zM768.703 507.127l-1.302-.072 3.949-71.756h80.895v1.305h-79.659l-3.883 70.523zM768.569 623.249l-45.686-7.831.271-1.278 45.686 7.832-.271 1.277zM777.788 639.578l.107-1.301 55.476 4.568-.108 1.302z"
      />
      <path
        d="M906.578 507.195q-.734 2.36-1.384 4.817l-1.364.15-42.448 4.719-97.246-9.79 101.162-5.221 40 5.162z"
        fill="#3f3d56"
      />
      <path
        d="M884.341 273.642s-14.135-5.048-23.222 15.145-23.223 42.406-23.223 42.406l8.078 2.02s2.02-14.136 7.067-16.155l-2.019 18.174s60.58 21.203 87.841-2.02l-1.01-7.067s4.04 1.01 4.04 7.068l3.029-3.03s-3.03-6.057-12.117-14.135c-5.964-5.301-8.013-15.387-8.718-21.694a26.252 26.252 0 00-6.044-14.296c-6.039-6.998-17.042-14.437-33.702-6.416z"
        fill="#2f2e41"
      />
      <path
        d="M806.232 292.694l-5.873-61.35s-11.748-33.285 5.873-30.674 7.18 28.064 7.18 28.064l9.79 63.96zM760.547 571.377l-6.527 22.191 12.4 10.442 9.138-28.064-15.011-4.569zM810.801 587.694l-6.527 23.495 22.843 14.359s.653-26.76 3.916-31.98z"
        fill="#a0616a"
      />
      <path
        d="M838.865 462.384l-3.263 6.527s-37.201-16.97-46.991 6.526-31.328 97.898-31.328 97.898l18.927 7.832 34.591-78.971 78.971-1.958 3.263-43.728z"
        fill="#2f2e41"
      />
      <path
        d="M866.277 473.48s-53.518-11.096-57.434 15.663 1.958 77.666 2.61 78.971-2.61 25.454-2.61 25.454l23.496 3.263s15.01-71.14 8.484-89.414l44.159-2.731c15.243-.943 27.695-12.984 28.572-28.232.336-5.836-1.125-11.133-6.16-14.07-15.664-9.137-44.38-9.137-44.38-9.137zM762.505 592.915s-4.57-9.79-11.096-5.221-21.537 14.358-21.537 14.358-23.221 8.177-2.61 13.706c18.332 4.918 22.842 3.916 22.842 3.916s15.011 2.61 16.97 1.305 3.262-22.19 3.262-22.19-9.137-1.958-7.831-5.874zM813.412 613.147s-6.527-9.137-11.096-5.22-20.885 15.01-20.885 15.01-27.411 7.832-3.263 15.011 50.907 5.874 51.56 3.263-1.305-21.537-1.305-21.537-13.706-.653-15.011-6.527z"
        fill="#2f2e41"
      />
      <circle cx={891.73} cy={314.884} r={23.496} fill="#a0616a" />
      <path
        d="M874.761 325.327s-1.305 26.758-7.832 28.716-24.8 23.496-16.316 30.023 57.434 1.958 57.434 1.958l-4.57-33.938s-10.442-7.18-1.957-19.58z"
        fill="#a0616a"
      />
      <path
        d="M874.108 369.707l-4.568-21.537-15.011-5.874-12.4 28.716s-14.033 93.004-10.117 94.309a17.649 17.649 0 006.853.979s20.885-6.527 27.412-3.263 40.464 5.874 40.464 5.874 23.496-12.4 22.19-23.496 0-73.097 0-73.097l-2.937-27.738-25.751 4.028z"
        fill="#cfcce0"
      />
      <path
        fill="#cfcce0"
        d="M855.181 345.559l-.652-3.916-18.275-22.19-10.442-37.202-25.454 9.79 18.275 45.033 26.106 33.286 10.442-24.801z"
      />
      <path
        d="M860.863 317.694s8.078-11.106 15.145-13.126 8.078-12.116 8.078-12.116 18.174 20.194 29.28 21.203 1.01-24.232 1.01-24.232l-20.194-5.048-19.183 2.02-15.146 10.096z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M936.438 468.607l-.632-26.782H875.07l-1.941 71.81-1.305-.035 1.975-73.08h63.269l.021.631.653 27.411-1.304.045zM935.132 432.036h-1.306v-49.818l21.068 6.116-.365 1.253-19.397-5.631v48.08z"
      />
      <path
        d="M941.332 467.279c-15.266 0-28.652 15.944-36.033 39.753a115.055 115.055 0 00-1.469 5.13 148.577 148.577 0 00-4.594 37.351c0 45.347 18.881 82.235 42.096 82.235s42.096-36.888 42.096-82.235-18.881-82.234-42.096-82.234zm0 163.164c-22.49 0-40.791-36.308-40.791-80.93a147.733 147.733 0 014.653-37.501q.647-2.457 1.384-4.817c7.186-23.15 20.076-38.61 34.754-38.61 22.49 0 40.79 36.307 40.79 80.929s-18.3 80.929-40.79 80.929z"
        fill="#3f3d56"
      />
      <path
        d="M951.448 597.06c-8.052 0-14.358-20.885-14.358-47.547s6.306-47.546 14.358-47.546 14.358 20.885 14.358 47.546-6.306 47.547-14.358 47.547zm0-93.788c-7.075 0-13.053 21.176-13.053 46.241s5.978 46.241 13.053 46.241 13.053-21.175 13.053-46.24-5.978-46.241-13.053-46.241z"
        fill="#3f3d56"
      />
      <ellipse cx={953.08} cy={549.513} rx={5.548} ry={10.92} fill="#cfcce0" />
      <path
        fill="#3f3d56"
        d="M944.269 381.129l13.706 5.221-2.611 7.179-11.095-4.569v-7.831zM890.099 437.257v10.442h38.885v-9.748l-38.885-.694zM790.242 432.036v10.442h38.886v-9.749l-38.886-.693zM861.382 406.698h-.318v-8.69a5.03 5.03 0 00-5.03-5.03h-18.412a5.03 5.03 0 00-5.03 5.03v47.677a5.03 5.03 0 005.03 5.03h18.412a5.03 5.03 0 005.03-5.03v-32.8h.318z"
      />
      <circle cx={846.987} cy={407.788} r={3.081} fill="#d0cde1" />
      <path
        d="M925.067 437.886l-61.62-1.16s-34.407 7.877-29.804-9.332 28.7-3.933 28.7-3.933L927 421.028z"
        fill="#a0616a"
      />
      <path
        d="M918.815 349.149l5.874-4.57s9.79-5.22 11.748 13.054 16.316 78.971 1.958 79.624-50.907 1.305-50.907 1.305l3.916-20.232 30.022-1.958z"
        fill="#cfcce0"
      />
      <path
        opacity={0.15}
        d="M920.773 377.213l-1.958 37.201-28.716 5.874 26.106-10.443 4.568-32.632z"
      />
      <path
        fill={color}
        d="M520.68 54.41l6.838 30.147-29.102 6.602-6.84-30.147z"
      />
      <path
        d="M501.346 86.324l-7.2-31.734 30.635-6.95 7.199 31.734zm-5.308-30.494l6.48 28.56 27.57-6.256-6.479-28.56zM803.313 218.028v-78.707h230v58.205H823.815zm2-76.707v71.88l17.673-17.675h208.327V141.32z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M855.179 153.968h128.267v10.4H855.179zM855.179 169.568h128.267v10.4H855.179z"
      />
    </svg>
  );
};

SvgProjectFeedback.propTypes = {
  color: PropTypes.string
};
SvgProjectFeedback.defaultProps = {
  color: "primary"
};
export default SvgProjectFeedback;
