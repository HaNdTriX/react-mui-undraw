import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFittingPieces = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 836.27 674.205"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={123} cy={428} r={123} fill="#f2f2f2" />
      <circle cx={143} cy={410} r={123} fill={color} />
      <path fill="#f2f2f2" d="M58 72h108v108H58z" />
      <path fill={color} d="M73 56h108v108H73z" />
      <path
        fill="#3f3d56"
        d="M171.858 664.676H330.27v1.875H171.858zM234 142H92V0h142zm-140-2h138V2H94z"
      />
      <path fill="#f2f2f2" d="M301 275h28v28h-28z" />
      <path fill={color} d="M307 268h28v28h-28z" />
      <path
        d="M362 286h-46v-46h46zm-44-2h42v-42h-42zM251 667c-84.364 0-153-68.636-153-153s68.636-153 153-153 153 68.636 153 153-68.636 153-153 153zm0-304c-83.262 0-151 67.738-151 151s67.738 151 151 151 151-67.738 151-151-67.738-151-151-151zM528.858 669.676H687.27v1.875H528.858zM677.858 499.676H836.27v1.875H677.858z"
        fill="#3f3d56"
      />
      <path
        d="M627.314 58.463c-30.182 8.176-47.293 41.956-38.22 75.451l11.529 42.555 13.088-3.545 3.306-17.82 2.377 16.28 84.125-22.789 3.005-16.2 2.16 14.8 9.472-2.565-9.051-33.413c-10.441-38.544-47.06-62.163-81.791-52.754z"
        fill="#2f2e41"
      />
      <path
        d="M565.5 579.5l13 46-2 17 38-8s-16-27-14-41zM737.5 414.5l-10 54 33-5L762 407l-24.5 7.5z"
        fill="#ffb8b8"
      />
      <circle cx={638.5} cy={118.5} r={36} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M627 145l-2 20-16 9 42 93 32-77-21-16-2-38-33 9z"
      />
      <path
        d="M656.5 244.5l-40.955-74.181S582.5 172.5 574.5 179.5l16 102-5 13s-41 42-33 133 8 162 8 162 29 34 89 0v-181l85-7v22s88-22 90-55l-22.638-39.319a38.937 38.937 0 00-44.867-17.886L682.5 333.5l-8-30 8-22s21-16 21-37 6-46 6-46l-38.899-17.947z"
        fill="#2f2e41"
      />
      <path
        d="M727.5 236.5l16 39s17 20 20 42l5 26s12 46-7 44-14-46-14-46l-3-13-17-28-25.085-47.68z"
        fill="#ffb8b8"
      />
      <path
        d="M730.5 459.5s28.615 2.807 34.307-10.097L793.5 472.5s51.965 13.917 23 26c-27 11.263-54-.762-54 2 0 0-8-7-17-2s-36 0-35-8 5-37 20-31zM577.5 630.5s28.615 2.807 34.307-10.097L640.5 643.5s52.166 14.41 23 26c-26.972 10.719-53.986-.597-54 2 0 0-8-7-17-2s-36 0-35-8 5-37 20-31zM696.5 194.5l13 4 28 42-51 34 10-80zM647.375 70.96c-7.4-5.578-16.706-7.86-25.74-5.413l-1.073.29c-20.686 5.604-32.385 28.866-26.13 51.956l6.932-1.877-1.19-8.824 3.95 8.076 41.11-11.137 1.492-8.141 1.092 7.442 8.087-2.191q13.277 26.58-1.036 60.633l13.777-3.732 2.983-16.283 2.183 14.884 26.262-7.115-3.816-34.559c-6.727-24.833-26.86-41.982-48.883-44.008z"
        fill="#2f2e41"
      />
      <circle cx={656} cy={49} r={18} fill="#2f2e41" />
      <path
        d="M655 59a17.99 17.99 0 01-6.333-34.832 17.99 17.99 0 108.666 34.664A18.07 18.07 0 01655 59z"
        fill="#2f2e41"
      />
      <ellipse cx={661.5} cy={118.5} rx={4.5} ry={6.5} fill="#ffb8b8" />
      <path
        d="M575 469c-24.755-3.685-54.742-2.828-87 0q20.173-36.99 0-65a360.885 360.885 0 0087 0c-12.389 20.626-11.296 42.384 0 65z"
        fill={color}
      />
      <path
        d="M563.5 239.5l-3 40s-14 22-17 69l-1 29s-21 41-4 40 16-39 16-39l30-87v-42z"
        fill="#ffb8b8"
      />
      <path d="M581.5 180.5h-7s-11 7-20 37-10 31-10 31l47 11z" fill="#2f2e41" />
      <path fill="#d0cde1" d="M518 424h28v28h-28z" />
    </svg>
  );
};

SvgFittingPieces.propTypes = {
  color: PropTypes.string
};
SvgFittingPieces.defaultProps = {
  color: "primary"
};
export default SvgFittingPieces;
