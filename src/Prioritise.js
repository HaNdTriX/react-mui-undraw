import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPrioritise = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 963.155 818.067"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={871.424} cy={478.587} r={56.891} fill="#f2f2f2" />
      <circle cx={611.834} cy={478.587} r={56.891} fill="#f2f2f2" />
      <path fill="#f2f2f2" d="M531.344 23.041H670.41v165.194H531.344z" />
      <path
        d="M706.094 189.362H530.217V0h175.877zm-173.622-2.255h171.367V2.255H532.472zM706.094 561.89H530.217V372.529h175.877zm-173.622-2.254h171.367V374.783H532.472zM449.032 561.89H273.155V372.529h175.877zm-173.622-2.254h171.367V374.783H275.41zM963.155 561.89H787.278V372.529h175.877zm-173.622-2.254H960.9V374.783H789.533z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M617.028 188.234h2.255v185.422h-2.255z" />
      <path
        fill="#3f3d56"
        d="M876.345 373.656h-2.255V270.273H362.221v103.383h-2.255V268.018h516.379v105.638zM531.344 75.502h115.467v2.255H531.344zM531.344 106.196h115.467v2.255H531.344zM531.344 136.889h115.467v2.255H531.344zM27.399 809.693h457.546v2H27.399z"
      />
      <circle cx={361.093} cy={467.209} r={68.269} fill={color} />
      <path
        fill="#fff"
        d="M404.078 460.467h-36.242v-36.242h-13.485v36.242h-36.242v13.485h36.242v36.241h13.485v-36.241h36.242v-13.485z"
      />
      <path
        d="M618.155 536.606a69.396 69.396 0 1169.396-69.397 69.475 69.475 0 01-69.396 69.397zm0-136.538a67.141 67.141 0 1067.141 67.141 67.217 67.217 0 00-67.14-67.14z"
        fill="#3f3d56"
      />
      <path
        d="M662.267 475.08h-88.223v-15.741h88.223zm-85.969-2.256h83.714v-11.23h-83.714zM875.217 536.606a69.396 69.396 0 1169.396-69.397 69.476 69.476 0 01-69.396 69.397zm0-136.538a67.141 67.141 0 1067.14 67.141 67.218 67.218 0 00-67.14-67.14z"
        fill="#3f3d56"
      />
      <path
        d="M892.631 487.12v-12.04h-58.155v-15.741h58.155v-12.151l23.96 20.691zm-55.9-14.296h58.155v9.592l18.182-14.6-18.182-15.702v9.48H836.73z"
        fill="#3f3d56"
      />
      <path
        d="M288.155 404.945s24 50 8 52-20-45-20-45zM197.155 724.945l16 28.354-29 18.146-6.925-33.48 19.925-13.02z"
        fill="#ffb9b9"
      />
      <path
        d="M203.988 757.238s8.785-14.303 11.962-11.909 16.284 12.768 16.284 12.768l17.072 16.351s57.676 6.098 21.027 26.307-56.902 3.453-56.902 3.453-51.331 2.67-50.503-11.652 17.382-36.979 17.382-36.979 20.865 13.989 23.678 1.661z"
        fill="#2f2e41"
      />
      <path
        d="M203.988 757.238s8.785-14.303 11.962-11.909 16.284 12.768 16.284 12.768l17.072 16.351s57.676 6.098 21.027 26.307-56.902 3.453-56.902 3.453-51.331 2.67-50.503-11.652 17.382-36.979 17.382-36.979 20.865 13.989 23.678 1.661z"
        opacity={0.1}
      />
      <path
        d="M126.155 404.445l15 181.5s.5 108.5 16.5 129.5 16.5 31.5 16.5 31.5l33-17s-11-1-6-8 20 0 6-10-17-10.327-13.5-14.663a24.17 24.17 0 004.5-9.337l-9-112 17-195z"
        fill="#2f2e41"
      />
      <path
        d="M126.155 404.445l15 181.5s.5 108.5 16.5 129.5 16.5 31.5 16.5 31.5l33-17s-11-1-6-8 20 0 6-10-17-10.327-13.5-14.663a24.17 24.17 0 004.5-9.337l-9-112 17-195z"
        opacity={0.1}
      />
      <path fill="#ffb9b9" d="M167.155 724.945l-14 37-40-15 25-26 29 4z" />
      <path
        d="M147.293 746.039s14.946-9.342 16.814-5.605 9.342 19.617 9.342 19.617l8.407 23.354s51.379 32.695 7.473 34.563-55.115-23.353-55.115-23.353-49.51-21.486-42.036-34.564 33.63-26.642 33.63-26.642 13.077 22.905 21.485 12.63zM253.155 404.945l8 167s-39 111-73 129c0 0 0 22-8 26a20.084 20.084 0 00-10 12l-44-11s11-11 7-16 13-16 13-16l44-107s7-3 9-13 6-10-4-12-10-12-10-12l-33-152z"
        fill="#2f2e41"
      />
      <circle cx={217.155} cy={102.945} r={40} fill="#ffb9b9" />
      <path
        d="M181.655 105.445s-3 51-7 56 42 4 42 4-3-43 0-47-35-13-35-13z"
        fill="#ffb9b9"
      />
      <path
        d="M168.155 145.945s38-4 52 8a102.894 102.894 0 0014.322 10.246 29.374 29.374 0 0114.252 24.32l7.426 227.434s-113-10-134 0c0 0-1-23-3-26-1.458-2.187-3.979-89.406-5.238-136.517-.71-26.586 8.426-52.665 26.255-72.4 6.061-6.71 12.833-12.333 19.983-15.083 0 0-2-19 8-20z"
        fill="#575a89"
      />
      <path
        d="M229.155 165.945a29.538 29.538 0 0121.734 24.456l14.266 101.544 20 81s10 9 6 14 5 26 5 26l-25 8s-3-21-8-22c-4.394-.879-53.583-132.282-65.44-164.114-1.635-4.39-2.56-6.886-2.56-6.886s2-67 34-62z"
        fill="#575a89"
      />
      <path
        d="M195.655 227.445l60.5 163.67s-58.5-110.67-60.5-163.67z"
        opacity={0.1}
      />
      <path
        d="M196.258 114.732c3.383-.202 6.686.941 10.046 1.387 12.018 1.596 24.522-7.126 27.175-18.956a14.545 14.545 0 011.39-4.529c1.85-3.02 6.063-3.596 9.536-2.901s6.764 2.32 10.3 2.505c5.461.287 10.704-3.075 13.614-7.704s3.734-10.326 3.341-15.78l-2.617 2.747a13.296 13.296 0 01-1.186-7.226 8.386 8.386 0 00-7.943 2.032c-2.308.246-.566-4.281-2.28-5.846-.719-.655-1.82-.531-2.792-.522-4.91.047-8.883-3.709-12.752-6.732a54.19 54.19 0 00-22.888-10.44c-5.545-1.082-11.441-1.256-16.7.81-4.319 1.695-7.934 4.783-11.278 8-8.233 7.916-15.523 17.217-18.948 28.113a47.328 47.328 0 00-.227 27.444c1.38 4.658 5.54 20.61 11.629 20.982 7.65.467 3.057-12.816 12.58-13.384z"
        fill="#2f2e41"
      />
      <path
        d="M71.563 810.37l-1.074-.402c-.236-.088-23.708-9.082-34.704-29.473-10.996-20.393-5.612-44.946-5.556-45.19l.253-1.119 1.073.403c.236.088 23.708 9.082 34.704 29.473 10.996 20.393 5.612 44.945 5.556 45.19zm-34.017-30.824c9.296 17.24 27.845 26.079 32.545 28.096.893-5.037 3.696-25.406-5.592-42.63-9.288-17.223-27.844-26.075-32.545-28.097-.894 5.04-3.696 25.407 5.592 42.63z"
        fill="#3f3d56"
      />
      <path
        d="M44.188 773.342c19.76 11.888 27.371 35.502 27.371 35.502s-24.427 4.34-44.188-7.55S0 765.793 0 765.793s24.428-4.339 44.188 7.55z"
        fill={color}
      />
    </svg>
  );
};

SvgPrioritise.propTypes = {
  color: PropTypes.string
};
SvgPrioritise.defaultProps = {
  color: "primary"
};
export default SvgPrioritise;