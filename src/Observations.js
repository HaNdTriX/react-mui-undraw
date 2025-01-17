import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgObservations = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 795.629 450.927"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M83.494 414.35l-1.268-.475c-.278-.105-27.992-10.723-40.975-34.8-12.983-24.077-6.625-53.066-6.56-53.356l.3-1.32 1.266.475c.279.105 27.992 10.723 40.975 34.8 12.983 24.077 6.626 53.066 6.56 53.356zM43.33 377.955c10.976 20.356 32.877 30.791 38.426 33.173 1.055-5.947 4.364-29.997-6.603-50.334-10.965-20.334-32.874-30.785-38.425-33.173-1.056 5.95-4.364 29.998 6.602 50.334z"
        fill="#3f3d56"
      />
      <path
        d="M52.173 372.63c23.331 14.037 32.317 41.918 32.317 41.918s-28.842 5.123-52.173-8.914S0 363.716 0 363.716s28.842-5.123 52.173 8.914z"
        fill={color}
      />
      <path
        d="M193.364 381.259c0 37.003-27.535 35-61.5 35s-61.5 2.003-61.5-35 27.534-99 61.5-99 61.5 61.996 61.5 99z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M30.364 415.259h712v2h-712z" />
      <path
        d="M337.987 75.7c-.033-.105-.068-.21-.1-.316.013.046.031.09.045.137z"
        fill="#2f2e41"
      />
      <path fill="#a0616a" d="M224.24 322.14l-21 20-17-18 26-13 12 11z" />
      <path
        d="M197.176 326.091s25.441-1.662 22.467 5.765 3.33 34.726 3.33 34.726 9.453 49.027-20.437 29.518-23.386-33.062-23.386-33.062-8.723-13.188-6.864-17.83 16.63-22.467 19.46-20.235a5.575 5.575 0 005.43 1.118z"
        fill="#2f2e41"
      />
      <path
        d="M188.24 243.14s112-9 121 14-9 40-9 40l-73 36-23.283-20.828 13.283-12.172s-75 14-77 3 8-69 48-60z"
        fill="#2f2e41"
      />
      <path d="M318.24 263.14s20 56 0 53-18-48-18-48z" fill="#a0616a" />
      <path
        d="M273.74 148.64s12.5 6.5 10.5 14.5 8 58 8 58l30 44-25 9s-32-21-37-36-12-38-12-38z"
        fill="#d0cde1"
      />
      <circle cx={267.24} cy={92.14} r={33} fill="#a0616a" />
      <path
        d="M269.74 115.64s-4 33-2 46-40-47-40-47 18-13 18-18 24 19 24 19z"
        fill="#a0616a"
      />
      <path
        d="M307.17 79.446a38.535 38.535 0 00-9.648.066 12.97 12.97 0 00-8.246 4.609c-2.282 3.055-3.04 7.696-6.617 9.021-2.131.79-4.599.039-6.731.824-2.56.944-3.86 3.774-4.542 6.416s-1.075 5.503-2.818 7.602-5.496 2.804-7.04.555a21.62 21.62 0 00-.367-7.23 7.326 7.326 0 00-4.62-5.215c-3.93-1.138-7.588 2.276-10.234 5.396s-6.19 6.6-10.163 5.624c-4.17-1.025-5.592-6.154-6.051-10.423-1.046-9.724-.891-20.05 3.812-28.626 6.807-12.412 22.345-18.436 36.366-16.49s26.398 10.7 35.443 21.588c1.47 1.77 2.917 3.715 3.233 5.994"
        fill="#2f2e41"
      />
      <path
        d="M264.74 154.64l-11-11-19-38-51 16s-18 5-29 37c0 0-66 85-55 99s13 13 31 2a159.494 159.494 0 0136-16l48 5 29-36s43-28 36-60l-12-16z"
        fill="#575a89"
      />
      <path d="M257.24 255.14l6 4s33 41 17 49-32-40-32-40z" fill="#a0616a" />
      <path
        d="M211.893 122.75a8.587 8.587 0 016.122 3.272c3.968 5.048 9.88 16.92 1.225 37.118a322.916 322.916 0 00-17 50s5-1 5 3-4 2 0 4 3-1 4 2c1.044 3.133-.093 2.994 2.284 4.14a19.309 19.309 0 016.11 5.311 7.059 7.059 0 001.606 1.549l37 19s5 20-10 20c0 0-92-26-90-46 1.955-19.553 5.822-106.97 53.653-103.39z"
        fill="#d0cde1"
      />
      <path fill="#a0616a" d="M192.24 375.14v26l-28-2 6-26 22 2z" />
      <path
        d="M172.24 387.14s23-11 23-3 16 31 16 31 27 42-8 35-34-22-34-22-13-9-13-14 7.086-27.039 10.543-26.02a5.575 5.575 0 005.457-.98z"
        fill="#2f2e41"
      />
      <path
        d="M144.24 245.14s71-16 68 10-6 41-6 41l-12 85-28-3-2-16s-6-6-3-10-5-43-5-43-48 10-52-19 6-38 6-38z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M418.502 338.269h179.127v2.013H418.502zM418.502 352.358h179.127v2.013H418.502zM418.502 366.446h179.127v2.013H418.502z"
      />
      <path fill="#d0cde1" d="M422.145 287.715h40.29v32.736h-40.29z" />
      <path
        d="M456.56 315.415h-41.97V281h41.97zm-40.29-1.68h38.61V282.68h-38.61z"
        fill="#3f3d56"
      />
      <circle cx={382.241} cy={298.558} r={8} fill={color} />
      <path
        fill="#3f3d56"
        d="M418.502 57.269h179.127v2.013H418.502zM418.502 71.358h179.127v2.013H418.502zM418.502 85.446h179.127v2.013H418.502z"
      />
      <path fill="#d0cde1" d="M422.145 6.715h40.29v32.736h-40.29z" />
      <path
        d="M456.56 34.415h-41.97V0h41.97zm-40.29-1.68h38.61V1.68h-38.61z"
        fill="#3f3d56"
      />
      <circle cx={382.241} cy={17.558} r={8} fill={color} />
      <path
        fill="#3f3d56"
        d="M616.502 218.269h179.127v2.013H616.502zM616.502 232.358h179.127v2.013H616.502zM616.502 246.446h179.127v2.013H616.502z"
      />
      <path fill="#d0cde1" d="M620.145 167.715h40.29v32.736h-40.29z" />
      <path
        d="M654.56 195.415h-41.97V161h41.97zm-40.29-1.68h38.61V162.68h-38.61z"
        fill="#3f3d56"
      />
      <circle cx={580.241} cy={178.558} r={8} fill={color} />
    </svg>
  );
};

SvgObservations.propTypes = {
  color: PropTypes.string
};
SvgObservations.defaultProps = {
  color: "primary"
};
export default SvgObservations;
