import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgUnlock = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1010.892 727.284"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1010.892 727.284q-78.133-11.444-150.282-19.73l19.02-30.778c-6.412-1.894-34.585 15.652-34.585 15.652l24.967-89.48c-32.248 3.107-48.657 94.513-48.657 94.513l-36.025-31.096 17.438 34.854c-147.213-15.196-274.351-21.165-381.29-21.854l16.279-26.342c-6.412-1.895-34.585 15.651-34.585 15.651l24.967-89.48c-32.248 3.107-48.657 94.513-48.657 94.513l-36.025-31.096 18.47 36.916c-89.652 1.086-162.761 5.872-219.192 11.451 16.468-41.078 72.394-79.96 72.394-79.96-42.708 10.436-65.112 28.152-76.82 44.71-.895-50.818 5.126-145 49.856-249.095 0 0-88.296 160.41-77.048 268.408l1.344 19.175C37.625 702.84 0 712 0 712z"
        fill="#3f3d56"
      />
      <path
        d="M537.526 29.13v648.2a29.14 29.14 0 01-29.13 29.11h-263.15a29.08 29.08 0 01-29.13-29.11V29.13A29.127 29.127 0 01245.246 0h39.38v5.05a23.987 23.987 0 0023.98 23.99h133.84a23.79 23.79 0 0014.22-4.68 22.285 22.285 0 002.36-1.98 23.917 23.917 0 007.4-17.33V0h41.97a29.121 29.121 0 0129.13 29.13z"
        fill="#3f3d56"
      />
      <circle cx={289.426} cy={108} r={7} fill="#f2f2f2" />
      <path
        d="M459.026 22.38a22.285 22.285 0 01-2.36 1.98 125.247 125.247 0 0080.86 60.19v-3.12a122.299 122.299 0 01-78.5-59.05zM399.216 29.04h-3.28a181.668 181.668 0 00141.59 113.05v-3.1a178.55 178.55 0 01-138.31-109.95zM338.796 29.04h-3.16c26.43 91.74 106.18 160.03 201.89 171.12v-3.05c-94.05-11.04-172.43-78.03-198.73-168.07z"
        fill={color}
      />
      <path
        fill="#f2f2f2"
        d="M266.426 159.822h-1.822V158h-.355v1.822h-1.823v.356h1.823V162h.355v-1.822h1.822v-.356zM389.426 68.822h-1.822V67h-.355v1.822h-1.823v.356h1.823V71h.355v-1.822h1.822v-.356zM284.426 231.822h-1.822V230h-.355v1.822h-1.823v.356h1.823V234h.355v-1.822h1.822v-.356zM368.426 178.822h-1.822V177h-.355v1.822h-1.823v.356h1.823V181h.355v-1.822h1.822v-.356zM488.426 211.822h-1.822V210h-.355v1.822h-1.823v.356h1.823V214h.355v-1.822h1.822v-.356z"
      />
      <circle cx={467.426} cy={125} r={4} fill="#ff6584" />
      <path
        d="M324.126 218.8l-2.27.35c.71 4.54 1.27 9.18 1.68 13.77l2.29-.2c-.41-4.65-.98-9.33-1.7-13.92zM317.916 191.46l-2.2.67c1.33 4.4 2.52 8.91 3.53 13.4l2.25-.51c-1.03-4.54-2.24-9.1-3.58-13.56zM308.006 165.24l-2.09.96c1.92 4.19 3.72 8.49 5.35 12.79l2.15-.81c-1.65-4.35-3.46-8.71-5.41-12.94zM294.606 140.66l-1.94 1.23c2.47 3.88 4.84 7.9 7.04 11.93l2.02-1.1c-2.22-4.08-4.62-8.14-7.12-12.06zM277.946 118.13l-1.75 1.49c2.98 3.5 5.88 7.16 8.62 10.86l1.84-1.37c-2.76-3.74-5.69-7.44-8.71-10.98zM258.366 98.07l-1.53 1.71c3.44 3.07 6.81 6.3 10.02 9.59l1.65-1.61c-3.25-3.33-6.66-6.59-10.14-9.69zM236.246 80.85l-1.29 1.9c3.82 2.57 7.6 5.31 11.23 8.14l1.42-1.81c-3.68-2.86-7.5-5.63-11.36-8.23zM216.116 68.89v2.6c2.39 1.25 4.76 2.56 7.08 3.9l1.15-1.99q-4.05-2.34-8.23-4.51zM323.607 434.803c.373-2.236.714-4.52 1.015-6.785l2.279.302c-.304 2.292-.65 4.6-1.026 6.86zM317.198 461.782l2.197.685a210.794 210.794 0 003.708-13.532l-2.24-.53a206.088 206.088 0 01-3.665 13.377zM307.156 487.614l2.087.978a200.058 200.058 0 005.524-12.884l-2.146-.837a195.69 195.69 0 01-5.465 12.743zM293.645 511.847l1.928 1.252a205.47 205.47 0 007.254-12.01l-2.005-1.124a203.283 203.283 0 01-7.177 11.882zM276.928 533.986l1.743 1.51a213.118 213.118 0 008.836-10.91l-1.841-1.377a202.315 202.315 0 01-8.738 10.777zM257.353 553.631l1.515 1.729a206.062 206.062 0 0010.24-9.592l-1.626-1.63a210.913 210.913 0 01-10.129 9.493zM235.3 570.422l1.27 1.923a210.522 210.522 0 0011.439-8.112l-1.39-1.836a201.609 201.609 0 01-11.319 8.025zM224.606 579.65c-2.78 1.57-5.62 3.09-8.49 4.53v-2.58c2.48-1.26 4.94-2.59 7.35-3.94zM324.281 247.106l2.3-.042c.041 2.321.044 4.654.008 6.936l-2.298-.036c.035-2.255.032-4.563-.01-6.858z"
        fill="#e6e6e6"
      />
      <path
        d="M226.216 301.632h235.21a66 66 0 0166 66v8.736h-235.21a66 66 0 01-66-66v-8.736z"
        fill="#fff"
      />
      <path
        d="M382.316 705.521c-.23-.375-5.64-9.41-7.516-28.171-1.721-17.213-.615-46.227 14.432-86.699 28.506-76.67-6.57-138.533-6.928-139.149l1.73-1.004c.092.156 9.143 15.929 14.49 41.044a179.061 179.061 0 01-7.417 99.807c-28.457 76.54-7.3 112.773-7.084 113.13z"
        fill="#f2f2f2"
      />
      <circle cx={371.17} cy={434} r={13} fill={color} />
      <circle cx={412.17} cy={482} r={13} fill="#f2f2f2" />
      <circle cx={384.17} cy={514} r={13} fill={color} />
      <circle cx={418.17} cy={541} r={13} fill={color} />
      <circle cx={374.17} cy={583} r={13} fill="#f2f2f2" />
      <path
        d="M390.17 706s-13-32 26-56zM374.182 705.42s-5.917-34.03-51.709-33.738z"
        fill="#f2f2f2"
      />
      <circle cx={322.426} cy={339} r={80} fill={color} opacity={0.2} />
      <circle cx={322.426} cy={339} r={56.338} fill={color} opacity={0.2} />
      <circle cx={322.426} cy={339} r={37.183} fill={color} />
      <path
        d="M329.187 330.98a6.76 6.76 0 10-11.031 5.24l-2.49 17.428h13.521l-2.49-17.429a6.746 6.746 0 002.49-5.239z"
        fill="#fff"
      />
      <path
        d="M696.107 53.3s-22.302-19.995-52.294 17.688-76.903 56.14-87.67 70.75c0 0 44.604-18.456 59.985-26.146s14.611-6.153 14.611-6.153-20.763 14.612-24.609 29.224-.769 26.916-7.69 41.528 132.274 9.997 132.274 9.997 13.842-23.84 9.997-48.449-1.538-85.363-44.604-88.439z"
        fill="#2f2e41"
      />
      <path
        d="M653.925 116.202s4.85 33.947-15.935 41.568-13.163 18.012-13.163 18.012l31.176 15.242 33.254-10.392 11.085-16.627s-18.013-4.157-13.163-16.627 6.235-16.627 6.235-16.627z"
        fill="#ffb9b9"
      />
      <path
        d="M653.925 116.202s4.85 33.947-15.935 41.568-13.163 18.012-13.163 18.012l31.176 15.242 33.254-10.392 11.085-16.627s-18.013-4.157-13.163-16.627 6.235-16.627 6.235-16.627z"
        opacity={0.1}
      />
      <path
        d="M741.216 213.193s-4.85 63.737-3.464 66.508 0 99.069 0 99.069 9.7 51.96-2.77 54.73-9.7-58.194-9.7-58.194l-12.47-80.364 1.385-79.67z"
        fill="#ffb9b9"
      />
      <path
        d="M741.216 213.193s-4.85 63.737-3.464 66.508 0 99.069 0 99.069 9.7 51.96-2.77 54.73-9.7-58.194-9.7-58.194l-12.47-80.364 1.385-79.67z"
        opacity={0.1}
      />
      <path
        d="M606.122 405.096s-22.862 86.599-22.17 128.86 9.7 101.147 9.7 101.147 1.385 25.633-.693 28.404 10.392 14.549 10.392 14.549l13.163-7.621 4.85-5.542v-4.85s-7.621-23.555-1.386-42.26 9.699-65.815 3.464-80.364l42.953-127.473z"
        fill="#ffb9b9"
      />
      <path
        d="M604.736 666.97s-8.313-10.39-13.855-6.927-14.549 27.019-14.549 27.019-31.176 29.79-9.006 31.175 31.868-6.235 34.64-11.777 28.404-20.09 28.404-20.09-2.771-26.327-6.928-27.02-10.392 10.392-10.392 10.392z"
        fill="#2f2e41"
      />
      <path
        d="M681.636 410.638v85.906a265.616 265.616 0 002.079 31.176c2.078 15.241-11.778 128.86-11.778 128.86l1.386 20.09 17.32-1.386 2.078-17.32 24.94-76.206s8.314-46.417 4.157-63.737 21.477-128.166 21.477-128.166z"
        fill="#ffb9b9"
      />
      <path
        d="M667.78 671.82l5.131-1.115s3.876-8.584 8.725-6.505a52.3 52.3 0 019.643 5.778l2.135 3.92s4.85 10.393 11.084 17.32 13.163 22.17 2.772 23.555-24.248 2.079-28.405-1.385-1.385-9.006-5.542-10.392-7.62-5.542-6.928-6.928 1.385-24.248 1.385-24.248z"
        fill="#2f2e41"
      />
      <circle cx={681.636} cy={109.274} r={30.79} fill="#ffb9b9" />
      <path
        d="M623.442 163.312l9.15-3.195s-3.608 5.966 15.79 9.43 39.487 4.69 48.495-6.661c0 0 3.465-1.652 8.314 3.197s7.62 3.464 7.62 3.464l-3.463 18.013-6.928 33.254-9.006 24.94-25.634-5.542-27.711-20.091-10.392-27.02v-24.94z"
        fill={color}
      />
      <path
        d="M707.962 173.011l6.928-4.85s23.555 4.157 24.94 15.242l-18.012 34.64a39.437 39.437 0 01-.693 29.79c-6.928 15.934-6.235 19.398-6.235 19.398l-4.85 20.783-87.984 6.928s-3.464-8.313-4.85-9.699-1.385-6.235 0-6.235 0-2.078-1.385-4.157-2.078-2.77 0-5.542-3.464-27.712-3.464-27.712v-27.019l-23.555-31.175s8.314-12.47 12.47-13.856 23.93-6.85 23.93-6.85l4.475 6.588 6.235 50.143 9.006 30.483 37.921-6.443 14.731-24.733 9.7-29.097z"
        fill={color}
      />
      <path
        d="M734.288 179.246l5.543 4.157s4.85 38.796 3.464 41.567-25.634 5.543-26.326 4.157 17.32-49.88 17.32-49.88z"
        fill={color}
      />
      <path
        d="M619.978 159.848l6.928 45.724s-6.235 67.894-4.85 81.75l1.386 4.156s-2.771-1.385-3.464 1.386 0 11.777 0 11.777-4.157 4.157-5.543 27.02-18.012 77.592-11.777 79.67 43.646 12.47 63.737 10.392 92.141-26.326 91.448-32.561-35.332-94.22-35.332-94.22-6.235-10.392-6.235-11.777 8.313-6.928 6.235-12.47-13.163-63.737-13.163-63.737l7.62-41.568-10.391-2.77-7.621 40.18s-29.79 14.55-60.966 1.387l-6.927-47.11zM653.31 87.177s51.267 35.332 65.123 19.398-24.248-29.79-24.248-29.79l-31.869-3.464z"
        fill="#2f2e41"
      />
      <path
        d="M573.655 463.042a27.027 27.027 0 10-8.479-10.524L494.47 511.39l-9.415-11.173-4.23 2.829-4.707-5.587 3.868-3.259-4.708-5.587-6.016 5.07 2.897 3.438-6.447 5.431-2.896-3.438-9.455 7.966 4.345 5.157 3.438-2.897 4.707 5.587-4.297 3.621 8.69 10.314-10.314 8.69 10.501 12.463zm17.654-39.492a17.882 17.882 0 11-19.339 16.294 17.882 17.882 0 0119.34-16.294z"
        fill={color}
      />
      <path
        d="M583.953 221.506s4.85 63.737 3.464 66.508 0 99.07 0 99.07-9.7 51.959 2.77 54.73 9.7-58.195 9.7-58.195l12.47-80.363-1.385-79.671z"
        fill="#ffb9b9"
      />
      <path
        d="M594.345 181.324l-5.543 2.079s-10.392 43.646-7.62 43.646 36.025 4.156 36.025 2.77-6.235-35.332-6.235-35.332z"
        fill={color}
      />
    </svg>
  );
};

SvgUnlock.propTypes = {
  color: PropTypes.string
};
SvgUnlock.defaultProps = {
  color: "primary"
};
export default SvgUnlock;
