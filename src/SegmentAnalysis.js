import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgSegmentAnalysis = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1010 643.175"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={246} cy={611.175} rx={246} ry={32} fill="#3f3d56" />
      <path
        d="M896.552 288.534H685.735L574.913 467.89a209.812 209.812 0 00110.822 31.46c116.43 0 210.817-94.385 210.817-210.816z"
        fill="#f2f2f2"
      />
      <circle cx={387.72} cy={535.235} r={56.018} fill="#3f3d56" />
      <path
        d="M282.5 127.675s2 20-4 28 15 58 15 58l30-56s-10-6-4-23z"
        fill="#ffb9b9"
      />
      <path
        d="M282.5 127.675s2 20-4 28 15 58 15 58l30-56s-10-6-4-23z"
        opacity={0.1}
      />
      <path
        d="M372.5 228.675l1 41-38 61-7-23 21-41s-7-19-5-30 28-8 28-8zM216.5 222.675l-1 41 38 61 7-23-21-41s7-19 5-30-28-8-28-8z"
        fill="#ffb9b9"
      />
      <path
        d="M244.5 288.675l-4 10a50.242 50.242 0 00-16 39l-12 124s-8 9-5 20c0 0-7 37-3 49 0 0-17 31 1 33s24 2 26-5 5-33 5-33l44-156 7 97s-7 26-5 33-14 57-7 62 27 7 28 3 2-29 2-29 10-22 12-29 4-46 4-46l18-115s4-31-6-37l-4-18z"
        fill="#2f2e41"
      />
      <path
        d="M202.5 557.675l-4 20s-21 33-1 33 22-10 22-10v-9s10-5 10-6-3-25-3-25zM300.5 557.675l4 20s21 33 1 33-22-10-22-10v-9s-10-5-10-6 3-25 3-25z"
        fill="#2f2e41"
      />
      <circle cx={304.703} cy={122.936} r={26.383} fill="#ffb9b9" />
      <path
        d="M295.5 192.675s-15-25-14-31a28.738 28.738 0 00-.048-10.39l-8.952 5.39-37 17 15 50s-4 11-4 19 2 17 0 20-3 8-1 12a12.694 12.694 0 011 8s-14 8-6 10a37.163 37.163 0 0016 0s1-3 9 1 50 5 50 5 27 1 26-3 5-51 5-51l14-66-32-20-10.336-9.125-2.664 14.125z"
        fill="#d0cde1"
      />
      <path
        d="M242.5 174.675h-7s-35.5 42.5-25.5 49.5 44.5 12.5 44.5 12.5-3-62-12-62zM351.5 178.675h9s24 56 16 58-37 8-37 5 12-63 12-63z"
        fill="#d0cde1"
      />
      <path
        d="M278.52 122.795s-2.863-4.294-1.762-8.918a27.028 27.028 0 00.77-8.037 79.548 79.548 0 014.625-11.67c2.312-4.184 1.21-5.946 8.477-7.267s4.294-10.79 23.45-.55a5.618 5.618 0 005.836 2.202c3.964-.77 5.395 4.734 5.395 4.734s2.642-1.541 3.633.66S337 92.628 337 107.491s-8.04 28.14-8.04 28.14.59-25.002-12.512-27.534-27.194-9.909-30.607-.44a72.179 72.179 0 01-7.321 15.138z"
        fill="#2f2e41"
      />
      <path
        d="M678.589 479.805a211.31 211.31 0 01-111.349-31.61l-.85-.527.526-.85 111.115-179.83h212.374v1c0 116.797-95.02 211.817-211.816 211.817zm-109.445-32.787a209.313 209.313 0 00109.445 30.787c115.361 0 209.276-93.579 209.814-208.817H679.146z"
        fill="#3f3d56"
      />
      <path
        d="M424 258.162a210.67 210.67 0 0099.995 179.356l110.822-179.356-183.068-104.61A209.846 209.846 0 00424 258.161z"
        fill="#f2f2f2"
      />
      <path
        d="M541.292 431.749l-.85-.527a211.917 211.917 0 01-72.588-285.314l.497-.867 184.834 105.62zM469.095 147.77a209.919 209.919 0 0071.55 281.223l109.75-177.623z"
        fill="#3f3d56"
      />
      <path
        d="M739.668 20.113l-45.447 205.89h210.817c0-100.826-70.786-185.105-165.37-205.89z"
        fill={color}
      />
      <path
        d="M890.405 238.616H677.344l45.93-208.08.976.214a211.883 211.883 0 01166.155 206.866zm-210.571-2h208.57c-.47-97.03-69.071-182.44-163.608-203.697z"
        fill="#3f3d56"
      />
      <path
        d="M649.11 0a210.737 210.737 0 00-183.068 106.207l183.068 104.61 45.447-205.89A211.54 211.54 0 00649.11 0z"
        fill="#f2f2f2"
      />
      <path
        d="M658.727 229.332L473.609 123.551l.498-.869A212.066 212.066 0 01703.705 20.923l.978.215zM476.342 122.809l181.017 103.438 44.939-203.583A210.066 210.066 0 00476.342 122.81zM767.752 168.625l-1.455-1.372L876.021 50.811h89.314v2h-88.45L767.752 168.625z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M904.591 66.104H1010v3.573H904.591zM904.591 81.29H1010v3.573H904.591zM904.591 96.476H1010v3.573H904.591zM868.591 508.104H974v3.573H868.591zM868.591 523.29H974v3.573H868.591zM868.591 538.476H974v3.573H868.591z"
      />
      <path
        fill="#3f3d56"
        d="M929 490.176H823.475l-.298-.433-82-119 1.646-1.135 81.702 118.568H929v2z"
      />
      <path
        d="M57.162 562.65c-3.331 29.19 14.614 55.21 14.614 55.21s23.347-21.308 26.678-50.498-14.615-55.21-14.615-55.21-23.346 21.307-26.677 50.498z"
        fill="#2f2e41"
      />
      <path
        d="M69.889 561.143c12.007 26.815 2.775 57.044 2.775 57.044s-28.699-13.244-40.706-40.058-2.776-57.044-2.776-57.044 28.7 13.244 40.707 40.058z"
        fill={color}
      />
    </svg>
  );
};

SvgSegmentAnalysis.propTypes = {
  color: PropTypes.string
};
SvgSegmentAnalysis.defaultProps = {
  color: "primary"
};
export default SvgSegmentAnalysis;
