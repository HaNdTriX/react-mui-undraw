import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCreation = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1038 764.064"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#f2f2f2" d="M637 184.064h375v413H637z" />
      <circle cx={262} cy={429.064} r={262} fill="#f2f2f2" />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M996.917 571.224V455.131"
      />
      <circle cx={996.917} cy={455.131} r={16.417} fill="#3f3d56" />
      <path d="M996.917 526.682s-2.345-50.443-50.424-44.58" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M850.007 571.379V189.375"
      />
      <circle cx={850.007} cy={189.192} r={16.417} fill="#3f3d56" />
      <circle cx={799.583} cy={469.357} r={16.417} fill="#3f3d56" />
      <path
        d="M850.007 273.052s-2.345-50.443-50.424-44.58M850.007 416.052s-2.345-50.443-50.424-44.58"
        fill="#3f3d56"
      />
      <path
        d="M850.007 566.866s10.554-92.818-50.424-97.509"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={900.439} cy={469.357} r={16.417} fill="#3f3d56" />
      <path
        d="M850.014 566.866s-10.554-92.818 50.425-97.509"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={901.439} cy={315.357} r={16.417} fill="#3f3d56" />
      <path
        d="M851.014 412.866s-10.554-92.818 50.425-97.509"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M736.356 571.879V339.692"
      />
      <circle cx={736.356} cy={339.692} r={16.417} fill="#3f3d56" />
      <path d="M736.356 406.552s-2.345-50.443-50.424-44.58" fill="#3f3d56" />
      <path
        d="M736.356 567.366s10.554-92.818-50.424-97.509"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={685.932} cy={469.857} r={16.417} fill="#3f3d56" />
      <circle cx={736} cy={237.064} r={64} fill="#ff6584" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M45 33.064h992M282 763.064h519"
      />
      <circle cx={67.064} cy={11.064} r={11.064} fill={color} />
      <circle cx={96} cy={11.064} r={11.064} fill={color} />
      <circle cx={124.936} cy={11.064} r={11.064} fill={color} />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M662 159.064h375v413H662zM136 173.064v512"
      />
      <circle cx={550} cy={730.064} r={33} fill={color} />
      <path
        fill="#fff"
        d="M562.412 717.913l-16.534 16.534-7.833-7.834-3.05 3.05 10.873 10.873 19.594-19.573-3.05-3.05z"
      />
      <path
        d="M221.57 258.015s-2.674 9.804 2.673 13.369 7.13 20.499 7.13 20.499l-10.695 29.411-28.52 5.348-10.695-20.5V275.84s3.565-15.151 2.674-19.608 37.433 1.783 37.433 1.783z"
        fill="#ffb9b9"
      />
      <path
        d="M221.57 258.015s-2.674 9.804 2.673 13.369 7.13 20.499 7.13 20.499l-10.695 29.411-28.52 5.348-10.695-20.5V275.84s3.565-15.151 2.674-19.608 37.433 1.783 37.433 1.783z"
        opacity={0.2}
      />
      <path
        d="M250.09 426.462l23.172 4.457s1.783 25.846 0 32.085-3.565 13.369-1.782 15.151-8.021 47.237-7.13 49.91 2.674 10.696 1.782 16.043-3.565 3.565-1.782 8.913 3.565 6.238 1.782 9.803-10.695 90.017-13.368 90.909-26.738 1.782-26.738 0 8.021-15.152 5.347-18.717.892-64.17.892-66.844 5.347-7.13 2.673-8.913-4.456-3.565-3.565-6.238 2.674-3.565.892-6.24-1.783-56.148-8.022-57.93c0 0-8.02 39.214-5.347 49.018s-.891 13.37-.891 13.37l12.477 10.694-16.934 32.085-17.825-20.498s0-5.348-3.565-6.24-5.347-1.782-5.347-4.456-6.24-19.607-6.24-19.607-17.824-56.15-8.912-84.67 12.346-27.576 12.346-27.576z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb9b9"
        d="M264.35 610.952l9.804 10.695-3.565 29.412h-8.022L250.09 623.43l14.26-12.478z"
      />
      <path
        d="M270.589 630.56s-3.565 8.021-6.24 6.239-3.56-4.457-7.572-4.457-7.579.892-6.687 2.674 11.586 21.39 11.586 21.39a25.193 25.193 0 010 21.39c-5.348 11.587 14.26 17.826 17.825 5.348s4.456-26.738 3.565-32.085 4.456-32.977 4.456-32.977-14.398-6.637-18.785-6.883c0 0 3.634 15.796 1.852 19.36zM246.525 650.168l3.565 10.695s0 10.695 3.565 16.042 7.13 16.934-7.13 17.825-20.5-4.456-20.5-4.456 2.675-7.13 0-9.804 0-8.021 0-8.021l2.675-21.39z"
        fill="#2f2e41"
      />
      <path
        d="M222.46 561.042h8.022l40.107 52.584s-7.13 16.934-17.826 18.716c0 0-1.782-.89-9.803-6.238s-29.412-32.086-29.412-32.086l-2.674-15.15z"
        fill="#2f2e41"
      />
      <circle cx={202.853} cy={241.081} r={28.52} fill="#ffb9b9" />
      <path
        d="M237.612 277.623l-8.912-3.565s-.892 31.194-17.826 31.194-34.759-4.457-34.759-13.37-14.26 16.043-14.26 16.043 13.37 89.126 12.478 90.017 9.804 48.128 9.804 48.128 45.454 1.782 60.605-4.456 19.608-17.825 19.608-17.825l-6.239-78.431-12.478-60.605z"
        fill={color}
      />
      <path
        d="M222.466 269.601s3.56-3.565 8.907 0 38.324 11.587 38.324 14.26v33.868s.892 5.348-1.782 8.913-8.913 16.933-5.348 23.172 16.934 78.43 14.26 87.343-9.803 16.934-9.803 16.934S228.7 372.987 228.7 349.814s.372-51.601.372-51.601z"
        fill="#575a89"
      />
      <path
        d="M261.676 284.753h8.021S300 342.684 300 354.27s-19.608 75.756-21.39 76.648-7.13-9.804-7.13-9.804l-4.456-35.65s8.912-21.39 6.238-24.956-16.042-31.194-16.042-31.194zM182.781 269.601s-10.23 7.13-12.013 9.804-28.52 17.825-29.412 21.39 20.5 33.868 20.5 33.868 8.912 49.91 8.912 53.475 3.565 64.17 3.565 64.17 36.541 10.696 36.541 4.457.892-95.364-4.456-114.972-23.637-72.192-23.637-72.192z"
        fill="#575a89"
      />
      <path
        d="M188.593 454.091s30.303 40.998 14.26 40.107-26.738-35.65-26.738-35.65z"
        fill="#ffb9b9"
      />
      <path
        d="M152.052 298.121l-10.696 2.674s-8.912 78.43-3.565 89.126 33.868 80.213 33.868 77.54 25.089-7.44 24.13-9.96-6.305-13.214-8.087-16.779-4.456-8.02-3.565-12.477-9.804-23.53-9.804-23.53-2.674-11.23-3.565-16.577-8.913-64.17-8.913-64.17z"
        fill="#575a89"
      />
      <path
        d="M230.817 219.003a7.087 7.087 0 00-3.228-3.965 15.185 15.185 0 00-.681-5.232c-1.775-4.94-5.98-4.657-9.949-6.841-1.722-.948-1.615-1.785-2.511-3.342a12.792 12.792 0 00-5.077-4.875c-2.546-1.527-5.234-3.1-8.245-3.292-6.33-.406-11.182 5.197-17.23 6.995-2.667.793-5.532.825-8.213 1.575s-5.354 2.538-5.754 5.143c-.184 1.202.141 2.436-.046 3.638-.372 2.39-2.599 4.063-4.09 6.029-3.297 4.346-2.92 10.486-.283 15.214a21.27 21.27 0 001.901 2.8 16.483 16.483 0 002.008 6.398c2.636 4.728 7.173 8.262 11.913 11.198a25.008 25.008 0 01-.703-4.775 3.116 3.116 0 01.216-1.583c.527-1.038 1.922-1.314 2.985-1.883 2.203-1.178 3.067-3.785 3.13-6.17s-.473-4.77-.207-7.142a3.814 3.814 0 011.42-2.87 5.15 5.15 0 012.675-.601c4.513-.174 9.228-.252 13.209-2.26a20.071 20.071 0 014.111-1.958c3.383-.83 6.84 1.402 8.79 4.133s2.922 5.982 4.72 8.803 4.907 5.338 8.385 5.004a1.431 1.431 0 001.038-.435 1.395 1.395 0 00.192-.833l.194-12.513a17.852 17.852 0 00-.67-6.36z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgCreation.propTypes = {
  color: PropTypes.string
};
SvgCreation.defaultProps = {
  color: "primary"
};
export default SvgCreation;
