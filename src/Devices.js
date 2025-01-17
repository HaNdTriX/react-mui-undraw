import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDevices = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 814.27 615.44"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Devices_svg__a"
          x1={684.96}
          y1={708.77}
          x2={684.96}
          y2={685.5}
          gradientTransform="translate(.36 -.19)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Devices_svg__b"
          x1={685.09}
          y1={578.57}
          x2={685.09}
          y2={157.81}
          gradientTransform="matrix(1 0 0 1.04 -.63 -19.87)"
          xlinkHref="#Devices_svg__a"
        />
        <linearGradient
          id="Devices_svg__c"
          x1={439.04}
          y1={749.29}
          x2={439.04}
          y2={297.39}
          gradientTransform="matrix(1 0 0 1.02 .11 -11.28)"
          xlinkHref="#Devices_svg__a"
        />
        <linearGradient
          id="Devices_svg__d"
          x1={439.56}
          y1={710.94}
          x2={439.56}
          y2={331.91}
          gradientTransform="matrix(1 0 0 1.02 .11 -11.28)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.09} />
          <stop offset={0.55} stopOpacity={0.07} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="Devices_svg__e"
          x1={290.89}
          y1={757.14}
          x2={290.89}
          y2={406.12}
          gradientTransform="matrix(1 0 0 1.02 .19 -12.23)"
          xlinkHref="#Devices_svg__a"
        />
      </defs>
      <path
        d="M572.78 396.13s16.07 110.09 110.09 146.67l-190.34.26-190.34.26c93.92-36.83 109.71-147 109.71-147z"
        fill="#e0e0e0"
      />
      <path
        transform="rotate(-.08 -101317.05 138742.662)"
        fill="url(#Devices_svg__a)"
        d="M493.16 685.34h384.26v23.26H493.16z"
      />
      <path
        fill="#f5f5f5"
        d="M302.206 543.318l380.67-.531.025 17.94-380.67.531z"
      />
      <path
        d="M994.22 142.28l-619.08.85c-6.85 0-12.4 5.83-12.39 13l.48 361.19v12c0 27.44 21.33 49.66 47.55 49.62l548.93-.76c26.23 0 47.46-22.31 47.42-49.75v-12l-.48-361.19c-.01-7.17-5.58-12.97-12.43-12.96z"
        transform="translate(-192.86 -142.28)"
        fill="url(#Devices_svg__b)"
      />
      <path
        d="M188.19 11.8h606.84a10.75 10.75 0 0110.75 10.75v345.28H177.43V22.55a10.75 10.75 0 0110.75-10.75z"
        fill="#fff"
      />
      <path
        d="M765.4 425.23l-546 .75a41.15 41.15 0 01-41.26-41.09v-17.57l628.35-.87v17.58a41.15 41.15 0 01-41.09 41.2z"
        fill="#f5f5f5"
      />
      <path
        fill={color}
        d="M208.754 40.069l568.62-.794.4 287.41-568.619.794z"
      />
      <rect
        x={291.13}
        y={290.71}
        width={296}
        height={458.84}
        rx={17.17}
        ry={17.17}
        transform="rotate(-.08 -101560.437 138570.605)"
        fill="url(#Devices_svg__c)"
      />
      <path
        transform="rotate(-.08 -101560.437 138570.605)"
        fill="url(#Devices_svg__d)"
        d="M311.85 325.76h255.62V710.6H311.85z"
      />
      <rect
        x={300.13}
        y={297.65}
        width={277.99}
        height={437.71}
        rx={17.17}
        ry={17.17}
        transform="rotate(-.08 -101560.432 138563.443)"
        fill="#fff"
      />
      <path fill={color} d="M126.02 189.42h240.06v367.12H126.02z" />
      <ellipse
        cx={440.54}
        cy={716.44}
        rx={9.89}
        ry={10.13}
        transform="translate(-193.85 -141.67)"
        fill="#dbdbdb"
      />
      <ellipse
        cx={397.81}
        cy={315.27}
        rx={3.3}
        ry={3.38}
        transform="rotate(-.08 -101603.269 138370.04)"
        fill="#dbdbdb"
      />
      <rect
        x={414.29}
        y={313.19}
        width={42.87}
        height={3.38}
        rx={1.43}
        ry={1.43}
        transform="rotate(-.08 -101567.459 138370.065)"
        fill="#dbdbdb"
      />
      <rect
        x={193.08}
        y={400.71}
        width={195.96}
        height={356.89}
        rx={10}
        ry={10}
        transform="rotate(-.08 -101710.878 138627.796)"
        fill="url(#Devices_svg__e)"
      />
      <rect
        x={197.6}
        y={406.59}
        width={186.94}
        height={342.74}
        rx={10}
        ry={10}
        transform="rotate(-.08 -101710.878 138627.796)"
        fill="#fff"
      />
      <path
        fill={color}
        d="M25.641 288.634l144.73-.202.39 278.92-144.73.202z"
      />
      <ellipse
        cx={291.26}
        cy={729.83}
        rx={11.54}
        ry={11.82}
        transform="translate(-193.87 -141.88)"
        fill="#dbdbdb"
      />
      <ellipse
        cx={268.93}
        cy={417.85}
        rx={2.31}
        ry={2.36}
        transform="rotate(-.08 -101732.254 138470.217)"
        fill="#dbdbdb"
      />
      <rect
        x={279.31}
        y={416.03}
        width={35.77}
        height={3.55}
        rx={1.5}
        ry={1.5}
        transform="rotate(-.08 -101703.606 138470.237)"
        fill="#dbdbdb"
      />
    </svg>
  );
};

SvgDevices.propTypes = {
  color: PropTypes.string
};
SvgDevices.defaultProps = {
  color: "primary"
};
export default SvgDevices;
