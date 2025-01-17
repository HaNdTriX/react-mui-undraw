import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgChecklist = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 873.527 661.922"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Checklist_svg__a"
          x1={381.182}
          y1={172.59}
          x2={787.292}
          y2={172.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#dadada" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="Checklist_svg__b"
          x1={381.182}
          y1={237.267}
          x2={787.292}
          y2={237.267}
          xlinkHref="#Checklist_svg__a"
        />
      </defs>
      <path
        fill={color}
        d="M112.126 118.897l-24.183-.937 1.206-31.093 24.183.938z"
      />
      <path
        d="M198.238 195.76s33.49-16.002 32.954-2.183-33.758 22.91-33.758 22.91z"
        fill="#ffb9b9"
      />
      <path
        d="M179.864 312.683s15.8 38.672 21.638 66.577 14.728 66.31 3.292 93.545-43.949 107.282-44.284 115.92 2.785 17.407-4.124 17.139-44.51-12.106-46.036-17.355 12.828-18.532 12.828-18.532l35.447-111.072-36.983-72.362-26.676 107.952-5.224 134.734s-25.643-7.915-29.365-1.14c0 0-11.489-16.014-12.948-22.99s5.425-139.916 5.425-139.916-23.537-151.418-4.536-150.681 93.425-44.816 131.546-1.819z"
        fill="#2f2e41"
      />
      <path
        d="M156.654 598.954s17.527 38.739 19.187 40.533 13.082 19.537 4.446 19.202-29.03-9.775-44.04-24.197-34.801-39.408-33.007-41.069 14.087-6.373 14.087-6.373zM86.622 620.458s1.057 17.34 4.244 24.384 2.785 17.407-5.852 17.072-30.958-4.66-30.958-4.66-1.325-10.431.469-12.092 9.44-20.393 6.187-25.709 25.91 1.005 25.91 1.005z"
        fill="#2f2e41"
      />
      <path
        d="M73.845 57.73s-18.413 28.695-25.59 35.336S61.27 114.33 61.27 114.33l36.14 4.862s-.454-32.887 1.407-36.275S73.845 57.73 73.845 57.73z"
        fill="#ffb9b9"
      />
      <path
        d="M105.258 95.277s-7.446 13.55-14.355 13.282-42.648-15.493-44.174-20.742-11.838 37.6-11.838 37.6l87.45 153.896 21.33-14.742-10.335-90.358-8.489-48.768z"
        fill={color}
      />
      <path
        d="M43.503 233.008c3.488 7.297 5.667 14.907 5.365 22.697-.013.345-.027.69-.057 1.036-.828 15.987-6.718 34.477-8.83 47.923-1.534 9.645-1.097 16.686 4.547 18.34 13.685 3.991-1.995 6.843 50.95 24.466s62.185 2.411 62.319-1.044-7.498-29.7-5.704-31.36 25.106 21.733 32.15 18.546.804-20.728.804-20.728-15.867-36.944-15.532-45.58-24.035-49.371-24.035-49.371l-16.575-107.9s-6.374-14.087-14.944-16.149-15.68 2.852-15.68 2.852l14.34 31.695 15.13 55.945-2.53 20.661s-17.595-37.01-29.15-51.298-36.193-48.113-36.193-48.113-5.752-19.408-1.41-25.208c4.343-5.817-18.113-6.688-27.687 17.16-5.075 12.64-13.314 31.488-18.475 49.037-4.599 15.547-6.771 30.08-2.215 38.388 6.964 12.691 24.481 29.373 33.412 48.005z"
        fill="#575a89"
      />
      <path
        d="M10.09 185.003c6.965 12.691 24.482 29.373 33.413 48.005 2.333-8.404 5.178-17.1 5.178-17.1s10.914-58.394-21.37-73.486a21.606 21.606 0 00-15.005 4.193c-4.599 15.547-6.771 30.08-2.215 38.388z"
        opacity={0.1}
      />
      <path
        d="M138.25 181.323l27.37 7.981 38.001 1.474 3.91 33.02-62.453 4.499s-15.599-43.854-6.828-46.974z"
        fill="#575a89"
      />
      <path
        d="M93.62 292.349s36.615 6.075 28.258 17.093-40.794-.565-40.794-.565z"
        fill="#ffb9b9"
      />
      <path
        d="M48.81 256.74c-.827 15.988-6.717 34.478-8.83 47.924 11.665 11.04 22.757 20.777 26.937 20.939 8.637.335 22.522-.857 27.637 1.071s8.116-30.824 8.116-30.824-3.053-10.498-16.671-16.216c-9.192-3.868-26.811-14.36-37.188-22.893z"
        opacity={0.1}
      />
      <path
        d="M27.714 132.058S-1.517 127.465.062 175.965s-3.082 79.458 8.675 88.563 49.945 50.376 58.582 50.71 22.522-.856 27.637 1.072 8.115-30.824 8.115-30.824-3.052-10.498-16.67-16.216-45.7-25.991-45.433-32.9 8.115-30.825 8.115-30.825 10.914-58.395-21.37-73.487z"
        fill="#575a89"
      />
      <circle cx={99.621} cy={62.189} r={38.03} fill="#ffb9b9" />
      <path
        d="M125.228 7.68a7.343 7.343 0 003.197 1.605c1.198.145 2.6-.626 2.645-1.832.87 1.805 1.851 3.728 3.628 4.654s4.523.15 4.78-1.837a8.385 8.385 0 001.93 4.073c1.101 1.051 3.1 1.316 4.062.136-.778 4.252-.297 8.624-.542 12.94s-1.395 8.89-4.655 11.727c-4.755 4.138-11.905 3.117-18.159 2.333a5.512 5.512 0 00-2.846.155c-2.341.998-2.235 4.258-2.267 6.803-.11 8.915-7.676 17.119-16.552 17.95-2.471.232-5.148-.113-7.042-1.718-1.776-1.505-2.683-3.958-4.718-5.09-3.31-1.838-7.324.844-9.744 3.756s-4.805 6.495-8.554 7.029c-4.958.705-8.735-4.348-10.588-9.001a52.47 52.47 0 011.043-40.77C71.2-1.974 106.565-5.544 125.228 7.681z"
        fill="#2f2e41"
      />
      <path
        fill={color}
        d="M194.425 122.009L873.527 8.825v334.161l-679.102 21.559V122.009z"
      />
      <path
        d="M329.167 231.293c0-37.971-17.065-66.416-37.728-63.585-20.246 2.773-36.36 34.647-36.36 71.243s16.114 65.139 36.36 63.727c20.663-1.442 37.728-33.414 37.728-71.385z"
        fill="#fff"
      />
      <path
        fill="url(#Checklist_svg__a)"
        d="M787.292 165.126l-406.11 45.026v-25.215l406.11-49.909v30.098z"
      />
      <path
        fill="url(#Checklist_svg__b)"
        d="M787.292 229.803l-406.11 45.026v-25.216l406.11-49.909v30.099z"
      />
      <path
        fill={color}
        d="M258.7 233.84l14.983-2.306 14.984 14.984 17.289-32.273h18.442l-35.731 44.952L258.7 233.84z"
      />
      <path
        opacity={0.2}
        d="M258.7 233.84l14.983-2.306 14.984 14.984 17.289-32.273h18.442l-35.731 44.952L258.7 233.84z"
      />
    </svg>
  );
};

SvgChecklist.propTypes = {
  color: PropTypes.string
};
SvgChecklist.defaultProps = {
  color: "primary"
};
export default SvgChecklist;
