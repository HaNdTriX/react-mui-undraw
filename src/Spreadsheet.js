import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSpreadsheet = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 976.622 641.533"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#e6e6e6" d="M331.897.365h644.725v412.91H331.897z" />
      <path fill="#fff" d="M350.333 52.155h607.853v336.693H350.333z" />
      <path fill={color} d="M331.622 0h644.725v27.39H331.622z" />
      <circle cx={351.976} cy={14.003} r={5.077} fill="#fff" />
      <circle cx={371.246} cy={14.003} r={5.077} fill="#fff" />
      <circle cx={390.515} cy={14.003} r={5.077} fill="#fff" />
      <path
        fill="#e6e6e6"
        d="M410.569 109.068h61v27h-61zM532.569 165.068h61v27h-61z"
      />
      <path
        fill={color}
        d="M410.569 249.068h61v27h-61zM532.569 305.068h61v27h-61zM836.569 333.068h61v27h-61z"
      />
      <path fill="#e6e6e6" d="M775.569 221.068h61v27h-61z" />
      <path
        fill={color}
        d="M593.569 221.068h122v27h-122zM593.569 80.068h122v27h-122z"
      />
      <path
        d="M349.57 51.068v339h610v-339zm608 28.083h-58.8V53.068h58.8zm-362.8 196.583v-26.083h119.599v26.083zm119.599 2v26.084h-119.6v-26.084zm0-112.333v26.083h-119.6v-26.083zm-119.6-2v-26.083h119.6V163.4zm0 56.167v-26.084h119.6v26.084zm119.6 2v26.083h-119.6v-26.083zm-121.6-30.084h-58.8v-26.083h58.8zm0 2v26.084h-58.8v-26.084zm0 28.084v26.083h-58.8v-26.083zm0 28.083v26.083h-58.8v-26.083zm123.6 0h58.8v26.083h-58.8zm0-2v-26.083h58.8v26.083zm0-28.083v-26.084h58.8v26.084zm0-28.084v-26.083h58.8v26.083zm0-28.083v-26.083h58.8V163.4zm0-28.083v-26.084h58.8v26.084zm-2 0h-119.6v-26.084h119.6zm-121.6 0h-58.8v-26.084h58.8zm0 2V163.4h-58.8v-26.083zm-60.8 26.083h-58.8v-26.083h58.8zm0 2v26.083h-58.8v-26.083zm0 28.083v26.084h-58.8v-26.084zm0 28.084v26.083h-58.8v-26.083zm0 28.083v26.083h-58.8v-26.083zm0 28.083v26.084h-58.8v-26.084zm2 0h58.8v26.084h-58.8zm58.8 28.084V331.9h-58.8v-26.083zm2 0h119.6V331.9h-119.6zm121.6 0h58.8V331.9h-58.8zm0-2v-26.084h58.8v26.084zm60.8-26.084h58.8v26.084h-58.8zm0-2v-26.083h58.8v26.083zm0-28.083v-26.083h58.8v26.083zm0-28.083v-26.084h58.8v26.084zm0-28.084v-26.083h58.8v26.083zm0-28.083v-26.083h58.8V163.4zm0-28.083v-26.084h58.8v26.084zm0-28.084V81.151h58.8v26.083zm-2 0h-58.8V81.151h58.8zm-60.8 0h-119.6V81.151h119.6zm-121.6 0h-58.8V81.151h58.8zm-60.8 0h-58.8V81.151h58.8zm0 2v26.084h-58.8v-26.084zm-60.8 26.084h-58.8v-26.084h58.8zm0 2V163.4h-58.8v-26.083zm0 28.083v26.083h-58.8v-26.083zm0 28.083v26.084h-58.8v-26.084zm0 28.084v26.083h-58.8v-26.083zm0 28.083v26.083h-58.8v-26.083zm0 28.083v26.084h-58.8v-26.084zm0 28.084V331.9h-58.8v-26.083zm2 0h58.8V331.9h-58.8zm58.8 28.083v26.084h-58.8V333.9zm2 0h58.8v26.084h-58.8zm60.8 0h119.6v26.084h-119.6zm121.6 0h58.8v26.084h-58.8zm60.8 0h58.8v26.084h-58.8zm0-2v-26.083h58.8V331.9zm60.8-26.083h58.8V331.9h-58.8zm0-2v-26.084h58.8v26.084zm0-28.084v-26.083h58.8v26.083zm0-28.083v-26.083h58.8v26.083zm0-28.083v-26.084h58.8v26.084zm0-28.084v-26.083h58.8v26.083zm0-28.083v-26.083h58.8V163.4zm0-28.083v-26.084h58.8v26.084zm0-28.084V81.151h58.8v26.083zm0-28.083V53.068h58.8V79.15zm-2 0h-58.8V53.068h58.8zm-60.8 0h-58.8V53.068h58.8zm-60.8 0h-119.6V53.068h119.6zm-121.6 0h-58.8V53.068h58.8zm-60.8 0h-58.8V53.068h58.8zm-60.8 0h-58.8V53.068h58.8zm0 2v26.083h-58.8V81.151zm-60.8 26.083h-58.8V81.151h58.8zm0 2v26.084h-58.8v-26.084zm0 28.084V163.4h-58.8v-26.083zm0 28.083v26.083h-58.8v-26.083zm0 28.083v26.084h-58.8v-26.084zm0 28.084v26.083h-58.8v-26.083zm0 28.083v26.083h-58.8v-26.083zm0 28.083v26.084h-58.8v-26.084zm0 28.084V331.9h-58.8v-26.083zm0 28.083v26.084h-58.8V333.9zm2 0h58.8v26.084h-58.8zm58.8 28.084v26.083h-58.8v-26.083zm2 0h58.8v26.083h-58.8zm60.8 0h58.8v26.083h-58.8zm60.8 0h119.6v26.083h-119.6zm121.6 0h58.8v26.083h-58.8zm60.8 0h58.8v26.083h-58.8zm60.8 0h58.8v26.083h-58.8zm0-2V333.9h58.8v26.084zm60.8-26.084h58.8v26.084h-58.8zm0-2v-26.083h58.8V331.9zm0-28.083v-26.084h58.8v26.084zm0-28.084v-26.083h58.8v26.083zm0-28.083v-26.083h58.8v26.083zm0-28.083v-26.084h58.8v26.084zm0-28.084v-26.083h58.8v26.083zm0-28.083v-26.083h58.8V163.4zm0-28.083v-26.084h58.8v26.084zm0-28.084V81.151h58.8v26.083zm-488.4-54.166V79.15h-58.8V53.068zm-58.8 308.917h58.8v26.083h-58.8zm547.2 26.083v-26.083h58.8v26.083z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M257.738 637.661H0v-2.106h258.12l-.382 2.106z" />
      <path
        d="M190.43 339.728l-6.688 158.008-4.18 71.063s9.196 15.048-4.18 16.72-38.457-2.508-35.113-10.868 5.852-8.36 5.852-8.36l3.344-80.259-25.08-98.651-31.77 106.175-6.688 76.079s9.197 11.704 0 14.212-33.44 2.508-32.605-5.016 4.18-7.524 4.18-7.524l-4.18-220.711 12.54-19.229z"
        fill="#2f2e41"
      />
      <path
        d="M172.038 580.503l3.344 20.9s19.229 40.13-7.524 40.13-19.229-15.885-19.229-15.885l2.508-45.145zM58.338 580.503l-3.344 20.9s-19.228 40.13 7.525 40.13 19.228-15.885 19.228-15.885l-2.508-45.145z"
        fill="#2f2e41"
      />
      <path
        d="M143.613 103.132s8.36 30.097 10.032 30.097-15.884 23.409-15.884 23.409l-25.917 14.212-9.196-38.457s8.36-20.9 6.688-31.769z"
        fill="#ffb9b9"
      />
      <circle cx={130.237} cy={83.904} r={30.933} fill="#ffb9b9" />
      <path
        d="M126.056 148.278l24.716-21.464 14.578 7.251 31.769 20.065s-8.36 180.581-4.18 187.27c0 0-9.197 20.9-63.538 8.36s-68.554-14.213-68.554-14.213L72.55 225.192l-14.213-69.39 47.74-33.383 14.962 25.859z"
        fill="#575a89"
      />
      <path
        d="M44.126 211.816l-7.524 35.113v71.062s10.868 45.145 19.228 33.44 8.188-15.41 8.188-15.41l-10.696-16.358 5.016-66.882 13.329-31.905zM184.032 230.488l8.88 34.96-4.116 70.32-12.829 15.656s-.675 3.839 6.025 17.113 23.612-32.348 23.612-32.348l9.657-74.026-2.688-37.55z"
        fill="#ffb9b9"
      />
      <path
        d="M100.976 52.97s10.032-21.736 29.26-16.72 30.098 12.54 30.934 20.065-.418 18.81-.418 18.81-2.09-15.466-15.467-12.122-34.277.836-34.277.836l-3.344 30.097s-3.762-5.434-7.942-2.09-12.123-32.187 1.254-38.875z"
        fill="#2f2e41"
      />
      <path
        d="M77.567 154.13l-19.229 1.672s-21.736 59.358-19.228 61.03 32.605 11.704 36.785 9.196 1.672-71.898 1.672-71.898zM190.43 155.802l6.689-1.672s12.54 15.884 16.72 34.277 10.032 36.785 6.688 36.785-43.794 10.876-43.794 10.876z"
        fill="#575a89"
      />
    </svg>
  );
};

SvgSpreadsheet.propTypes = {
  color: PropTypes.string
};
SvgSpreadsheet.defaultProps = {
  color: "primary"
};
export default SvgSpreadsheet;