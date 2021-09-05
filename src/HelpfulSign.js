import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgHelpfulSign = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 981.789 728.477"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M536.875 720H143.892s-7.966-116.833 39.166-118.16 41.82 51.778 100.9-21.242 130.773-69.038 140.067-25.89-17.923 77.668 31.863 67.047 121.48 17.259 80.987 98.245z"
        fill={color}
      />
      <path
        d="M333.75 720.027l-1.327-.054c3.094-76.921 19.204-126.344 32.173-154.259 14.083-30.31 27.653-42.58 27.788-42.701l.883.992c-.134.12-13.546 12.268-27.515 42.373-12.899 27.797-28.92 77.017-32.002 153.649zM475.98 720.185l-1.275-.37c15.347-52.677 51.487-85.935 51.851-86.265l.892.982c-.36.328-36.23 33.35-51.468 85.653zM205.789 720.091l-1.316-.182c5.207-37.553-4.198-66.689-13.005-84.517-9.537-19.304-20.417-29.847-20.526-29.952l.918-.958c.11.106 11.16 10.811 20.798 30.322 8.89 17.996 18.384 47.4 13.13 85.287z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M763.789 26h2v185h-2z" />
      <path
        d="M711.656 684.086c-5.685 21.016-25.157 34.031-25.157 34.031s-10.256-21.057-4.57-42.073 25.157-34.03 25.157-34.03 10.255 21.057 4.57 42.072z"
        fill={color}
      />
      <path
        d="M659.938 684.086c5.685 21.016 25.158 34.031 25.158 34.031s10.255-21.057 4.57-42.073-25.158-34.03-25.158-34.03-10.255 21.057-4.57 42.072z"
        fill={color}
      />
      <path
        d="M668.292 679.57c15.6 15.186 17.505 38.53 17.505 38.53s-23.387-1.277-38.987-16.463-17.505-38.53-17.505-38.53 23.387 1.277 38.987 16.463zM703.302 679.57c-15.6 15.186-17.505 38.53-17.505 38.53s23.387-1.277 38.987-16.463 17.505-38.53 17.505-38.53-23.387 1.277-38.987 16.463z"
        fill="#3f3d56"
      />
      <ellipse cx={417.5} cy={718.779} rx={417.5} ry={9.697} fill="#3f3d56" />
      <path
        d="M234.61 466.064l-5.541 48.485s-19.394 47.1-22.165 81.733l-2.77 38.788h18.008s23.55-55.412 24.936-70.65l33.247-101.127zM305.26 466.064l-5.541 48.485s-19.394 47.1-22.165 81.733l-2.77 38.788h18.009s23.55-55.412 24.935-70.65l33.247-101.127zM320.499 353.855l15.238 38.788s-1.386 33.247 16.623 30.477-2.77-36.018-2.77-36.018l-11.083-40.174s-13.853-2.77-18.008 6.927z"
        fill="#a0616a"
      />
      <circle cx={294.87} cy={204.935} r={24.935} fill="#a0616a" />
      <path
        d="M276.169 212.554s-8.312 27.706-13.853 27.706 37.403 16.624 37.403 16.624-11.082-11.082 0-31.862z"
        fill="#a0616a"
      />
      <path
        d="M249.848 363.552l-36.017 105.283s12.467 6.926 33.247 6.926 113.594-2.77 114.98-11.082-29.092-101.127-29.092-101.127l-5.541-34.632-67.88 18.008zM226.298 633.685h-24.935l-4.156 18.009s-8.312 5.541-5.541 18.009 1.385 38.788 1.385 38.788l27.706 18.009s8.312-9.697 2.77-26.32zM296.948 633.685h-24.935l-4.156 18.009s-8.312 5.541-5.541 18.009 1.385 38.788 1.385 38.788l27.706 18.009s8.312-9.697 2.77-26.32z"
        fill="#2f2e41"
      />
      <path
        d="M270.628 237.49s19.209 5.1 24.843 10.862l9.79 5.761 12.467 26.321s9.697 4.156 9.697 22.165 13.853 48.485 13.853 48.485 9.697 8.312 2.77 12.468-15.238 4.156-15.238 4.156 6.927-26.32-6.926-27.706-20.78-2.77-22.165 0-38.788 42.944-54.027 38.788-6.926-45.715-6.926-45.715l12.468-96.97s9.697-1.386 15.238 0 4.156 1.385 4.156 1.385z"
        fill="#d0cde1"
      />
      <path
        d="M223.528 353.855l15.238 38.788s-1.385 33.247 16.624 30.477-2.771-36.018-2.771-36.018l-11.082-40.174s-13.853-2.77-18.01 6.927z"
        fill="#a0616a"
      />
      <path
        d="M254.004 237.49l-2.77-1.385s-8.312-8.312-18.01 2.77-19.393 69.265-19.393 69.265v18.009s-11.083 15.238-1.386 23.55 11.083 9.697 11.083 9.697 9.697-13.853 20.78-6.926l1.384-5.542a17.145 17.145 0 002.771-4.156c1.385-2.77 4.156 1.386 2.77-2.77s0-5.541 0-6.927 1.386-8.311 1.386-8.311l-1.385-42.945z"
        fill="#d0cde1"
      />
      <path
        d="M325.94 199.028s20.257-44.166-32.684-44.118c0 0-32.48-17.063-57.214 22.507l-25.524 41.605 6.521-1.296.828 6.492 8.32 5.105 6.26-6.468-1.036 9.901 71.697 30.449s-27.03-29.933-16.604-65.224l4.233 8.639z"
        fill="#2f2e41"
      />
      <ellipse cx={282.289} cy={212} rx={3.5} ry={7} fill="#a0616a" />
      <path
        fill="#3f3d56"
        d="M843.789 26V0h-291.2v558h-16.8v154h56V558h-16.8V26h268.8z"
      />
      <ellipse cx={764.789} cy={26} rx={79} ry={14} fill={color} />
      <path fill={color} d="M603.789 207h322v176h-322z" />
      <path fill="#f2f2f2" d="M631.789 250.835h222V361h-222z" />
      <path d="M898.79 362h-268V228h268zm-266-2h264V230h-264z" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M670.82 283.917h143.938v2H670.82zM670.82 304.917h143.938v2H670.82zM670.82 325.917h143.938v2H670.82z"
      />
      <circle cx={920.789} cy={199} r={46} fill="#3f3d56" />
      <path
        d="M920.98 212.849l-23.02-23.02a4 4 0 115.658-5.658l16.98 16.98 54.184-61.788a4 4 0 016.015 5.274z"
        fill={color}
      />
    </svg>
  );
};

SvgHelpfulSign.propTypes = {
  color: PropTypes.string
};
SvgHelpfulSign.defaultProps = {
  color: "primary"
};
export default SvgHelpfulSign;
