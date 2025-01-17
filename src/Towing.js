import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTowing = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1002.501 516.22"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M50.329 482.312l43.077-68.36-43.097 75.807-.023 7.79q-4.61-.054-9.127-.354l3.514-100.062-.046-.774.079-.148.334-9.455L0 311.833l45.087 67.842.135 2.003 2.654-75.601-38.72-77.518 39.023 64.233 1.815-156.7.008-.522.006.513.884 123.548 37-49.433-37.033 60.074-.171 67.668 34.33-65.354-34.35 75.303-.094 37.627 49.867-90.997-49.907 104.123z"
        fill="#d0cde1"
      />
      <path fill="#3f3d56" d="M642.851 193.767h12.11v85.984h-12.11z" />
      <path
        fill="#3f3d56"
        d="M202.283 22.001l4.554-11.22 448.149 181.896-4.554 11.221z"
      />
      <path
        d="M1002.5 493.693C983.741 525.03-.99 522.4.502 493.691c18.757-31.335 1003.488-28.704 1001.996.002z"
        fill="#d0cde1"
      />
      <path fill="#3f3d56" d="M773.644 366.947h105.361v41.176H773.644z" />
      <path fill="#3f3d56" d="M349.778 403.278h519.539v46.02H349.778z" />
      <path
        fill="#d0cde1"
        d="M783.938 426.288H659.2v-156.83h93.251l31.487 79.097v77.733z"
      />
      <path
        fill="#fff"
        d="M678.577 279.146h53.286v53.286h-53.286zM771.827 333.038h-33.909v-53.286h14.533l19.376 53.286z"
      />
      <path
        fill="#3f3d56"
        d="M680.999 362.708h12.11v23.01h-12.11zM748.212 313.661h.606a11.505 11.505 0 0111.504 11.505 11.505 11.505 0 01-11.504 11.505h-.606v-23.01zM297.703 403.278h.605a11.505 11.505 0 0111.505 11.505 11.505 11.505 0 01-11.505 11.505h-.605v-23.01z"
      />
      <path
        d="M832.38 403.105c18.455 0 35.054 8.94 46.572 23.183h23.668l-23.01-64.096-107.177-21.138 3.028 85.234h10.346c11.518-14.243 28.118-23.183 46.573-23.183z"
        fill="#d0cde1"
      />
      <circle cx={833.591} cy={441.426} r={52.681} fill="#3f3d56" />
      <circle cx={833.591} cy={441.426} r={27.727} fill="#d0cde1" />
      <circle cx={357.65} cy={447.482} r={46.02} fill="#3f3d56" />
      <circle cx={357.65} cy={447.482} r={24.221} fill="#d0cde1" />
      <path fill="#3f3d56" d="M637.401 247.659h25.432v183.474h-25.432z" />
      <path
        fill="#3f3d56"
        d="M297.097 397.829h365.736v10.899H297.097zM101.372 437.83l398.86-108.514 2.861 10.517-398.86 108.514z"
      />
      <path
        fill="#3f3d56"
        d="M466.176 347.557l6.831-5.02 41.959 57.096-6.83 5.02zM743.368 335.46h12.11v4.844h-12.11z"
      />
      <path
        d="M648.906 371.791H490.26a1.21 1.21 0 01-.344-2.372l155.014-46.02a1.21 1.21 0 011.552 1.066l3.633 46.02a1.211 1.211 0 01-1.208 1.306zm-150.313-2.422h149.003l-3.412-43.222zM219.3 318.505h-.012l-34.766-.327a1.211 1.211 0 01-1.192-1.35l18.064-157.614a1.211 1.211 0 011.203-1.074h.006a1.212 1.212 0 011.199 1.084l16.702 157.943a1.211 1.211 0 01-1.205 1.338zm-33.41-2.737l32.062.302-15.403-145.66zM887.528 384.649l-.567.214a11.505 11.505 0 01-14.83-6.691 11.505 11.505 0 016.69-14.83l.567-.215 8.14 21.522zM117.097 401.167l33.782-9.456 1.5 5.362-33.78 9.456z"
        fill="#3f3d56"
      />
      <path
        d="M395.503 324.686l-6.52 3.56-264.894 74.144-3.932-4.885a58.171 58.171 0 01-12.581-29.144c-1-7.985-.27-16.4 5.3-21.523l-10.115-81.59 146.5-41.204 69.485 29.899s26.616-7.953 46.202 6.08c6.2 4.446 11.698 11.094 15.416 20.907l3.203 9.252z"
        fill={color}
      />
      <circle cx={336.948} cy={339.63} r={33.967} fill="#3f3d56" />
      <circle cx={336.948} cy={339.63} r={17.877} fill="#d0cde1" />
      <circle cx={175.545} cy={384.807} r={33.967} fill="#3f3d56" />
      <circle cx={175.545} cy={384.807} r={17.877} fill="#d0cde1" />
      <path
        fill="#fff"
        d="M294.724 254.884l-105.1 29.418-8.855-31.637 67.028-18.762 46.927 20.981zM126.075 267.974l41.825-11.707 8.855 31.637-41.825 11.707z"
      />
      <path
        fill="#3f3d56"
        d="M196.229 307.895l5.362-1.5 2.851 10.188-5.362 1.5zM286.014 267.151l1.501 5.362-10.188 2.852-1.501-5.362z"
      />
      <path
        d="M273.967 248.898l.59-.165a11.638 11.638 0 0114.343 8.07 11.638 11.638 0 01-8.07 14.344l-.59.165-6.273-22.414zM383.567 290.182a17.988 17.988 0 01-18.619-30.16c6.2 4.447 11.698 11.095 15.416 20.908zM195.975 10.899h12.11v176.813h-12.11z"
        fill="#3f3d56"
      />
      <circle cx={202.03} cy={16.955} r={16.955} fill="#3f3d56" />
      <circle cx={648.906} cy={196.189} r={16.955} fill="#3f3d56" />
    </svg>
  );
};

SvgTowing.propTypes = {
  color: PropTypes.string
};
SvgTowing.defaultProps = {
  color: "primary"
};
export default SvgTowing;
