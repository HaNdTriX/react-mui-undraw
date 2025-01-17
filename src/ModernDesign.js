import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgModernDesign = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 704 741.617"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={352} cy={723.617} rx={352} ry={18} fill="#e6e6e6" />
      <path
        d="M649.612 460.603v4.356s7.842 27.883-1.743 27.883-13.07-27.011-13.07-27.011v-5.228zM475.346 361.27l1.742-6.97s9.585-21.783 17.427-17.427-3.485 20.912-3.485 20.912l-1.743 4.357zM531.111 673.208l1.743 14.812 16.555 2.614v-19.169l-18.298 1.743zM622.601 668.851l1.742 21.783 19.17-2.614-3.486-20.912-17.426 1.743z"
        fill="#ffb8b8"
      />
      <path
        fill="#2f2e41"
        d="M523.269 503.298l-3.485.871 9.584 92.361v82.777l24.397-4.357 12.199-145.512 37.467 71.449 18.298 72.321 28.754-5.228-23.526-90.619-15.684-86.262-88.004 12.199zM540.696 682.792s-7.842-5.228-10.456-1.742-13.942 20.912-13.942 20.912-27.882 28.754 0 27.882c0 0 18.298 0 21.783-10.456 0 0 .872-5.228 6.971-5.228s13.07-6.1 13.07-9.584-6.1-21.084-8.713-18.384-8.713-3.4-8.713-3.4zM634.242 682.792s7.842-5.228 10.456-1.742 13.941 20.912 13.941 20.912 27.883 28.754 0 27.882c0 0-18.298 0-21.783-10.456 0 0-.872-5.228-6.97-5.228s-13.07-6.1-13.07-9.584 6.098-21.084 8.712-18.384 8.714-3.4 8.714-3.4z"
      />
      <circle cx={525.447} cy={333.824} r={23} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M523.705 352.122l12.198 14.812 21.783-18.298-15.683-12.198-18.298 15.684z"
      />
      <path
        d="M530.24 367.37l.712-6.448 24.46-14.054 33.23-3.153a7.85 7.85 0 018.556 7.077l12.333 130.723 4.356 11.327s-76.677 43.567-94.103 11.327l13.07-67.964-27.012-51.408z"
        fill="#d0cde1"
      />
      <path
        d="M589.49 345.587a7.157 7.157 0 001.552-.443 7.876 7.876 0 019.014 2.745l39.1 53.463 14.813 61.865h-20.912l-13.942-41.824-22.654-29.626zM512.813 383.054l-6.971 1.743-20.912 18.298 6.971-41.824-17.427-3.486-13.505 70.143 9.584 9.584 54.459-22.219-12.199-32.239z"
        fill="#d0cde1"
      />
      <path
        d="M534.606 333.748s-9.447-13.873-14.855-9.305-20.567 13.528-23.76 6.436 9.081-20.086 18.346-23.193 25.535-7.234 30.637 6.463a59.901 59.901 0 012.995 27.125z"
        fill="#2f2e41"
      />
      <ellipse
        cx={782.024}
        cy={411.379}
        rx={2.5}
        ry={4.5}
        transform="rotate(-19.977 433.206 1075.833)"
        fill="#ffb8b8"
      />
      <path
        d="M428 172.947h-3.999V63.402A63.402 63.402 0 00360.6 0H128.513A63.402 63.402 0 0065.11 63.402v600.974a63.402 63.402 0 0063.402 63.402h232.086a63.402 63.402 0 0063.402-63.402V250.924H428z"
        fill="#3f3d56"
      />
      <path
        d="M363.157 16.495h-30.295a22.495 22.495 0 01-20.827 30.99h-132.96a22.495 22.495 0 01-20.826-30.99h-28.296a47.348 47.348 0 00-47.348 47.348v600.092a47.348 47.348 0 0047.348 47.348h233.204a47.348 47.348 0 0047.348-47.348V63.843a47.348 47.348 0 00-47.348-47.348z"
        fill="#fff"
      />
      <path fill={color} d="M196.318 177.704h82.66v7.676h-82.66z" />
      <path
        fill="#e6e6e6"
        d="M196.318 204.259h144.069v7.676H196.318zM196.318 230.813h143.928v7.676H196.318z"
      />
      <path
        fill={color}
        d="M117.778 177.818h61.409v61.409h-61.409zM196.318 338.904h82.66v7.676h-82.66z"
      />
      <path
        fill="#e6e6e6"
        d="M196.318 365.458h144.069v7.676H196.318zM196.318 392.012h143.928v7.676H196.318z"
      />
      <path
        fill={color}
        d="M117.778 339.018h61.409v61.409h-61.409zM196.318 500.103h82.66v7.676h-82.66z"
      />
      <path
        fill="#e6e6e6"
        d="M196.318 526.657h144.069v7.676H196.318zM196.318 553.212h143.928v7.676H196.318z"
      />
      <path fill={color} d="M117.778 500.217h61.409v61.409h-61.409z" />
    </svg>
  );
};

SvgModernDesign.propTypes = {
  color: PropTypes.string
};
SvgModernDesign.defaultProps = {
  color: "primary"
};
export default SvgModernDesign;
