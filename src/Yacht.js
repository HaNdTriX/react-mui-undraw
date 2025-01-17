import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgYacht = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 892.195 746.429"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Yacht_svg__a"
          x1={231.978}
          y1={331.464}
          x2={231.978}
          y2={18.571}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <circle cx={231.978} cy={175.018} r={156.447} fill="url(#Yacht_svg__a)" />
      <circle cx={231.978} cy={175.018} r={146.792} fill="#ff5252" />
      <path fill={color} d="M437.195 0h14v136h-14z" />
      <path fill="#464353" d="M248.195 128h398v204h-398z" />
      <g opacity={0.5} fill={color}>
        <path d="M274.195 169h84v67h-84zM413.195 169h84v67h-84zM552.195 169h84v67h-84z" />
      </g>
      <path
        d="M892.195 277a396.901 396.901 0 01-397 397h-477V277z"
        fill="#464353"
      />
      <path
        d="M892.195 277a398.475 398.475 0 01-7.87 79H18.195v-79zM802.795 528a399.357 399.357 0 01-86.83 79H18.195v-79z"
        fill={color}
      />
      <g opacity={0.5} fill={color}>
        <path d="M51.195 400h84v67h-84zM190.195 400h84v67h-84zM329.195 400h84v67h-84z" />
      </g>
      <g opacity={0.5} fill={color}>
        <path d="M465.195 400h84v67h-84zM604.195 400h84v67h-84zM743.195 400h84v67h-84z" />
      </g>
      <rect y={666.125} width={748.434} height={10.707} rx={5} fill={color} />
      <rect y={686.469} width={277.317} height={10.707} rx={5} fill={color} />
      <rect
        x={213.074}
        y={711.095}
        width={277.317}
        height={10.707}
        rx={5}
        fill={color}
      />
      <rect
        x={444.349}
        y={735.722}
        width={277.317}
        height={10.707}
        rx={5}
        fill={color}
      />
      <rect
        x={777.344}
        y={666.125}
        width={49.253}
        height={10.707}
        rx={5}
        fill={color}
      />
      <rect
        x={495.744}
        y={686.469}
        width={49.253}
        height={10.707}
        rx={5}
        fill={color}
      />
      <rect
        x={70.668}
        y={711.095}
        width={49.253}
        height={10.707}
        rx={5}
        fill={color}
      />
      <rect
        x={546.068}
        y={711.095}
        width={49.253}
        height={10.707}
        rx={5}
        fill={color}
      />
      <rect
        x={39.617}
        y={735.722}
        width={277.317}
        height={10.707}
        rx={5}
        fill={color}
      />
      <path
        d="M451.195 0s133 5 153 0c0 0-13 25 0 40s-10 28-10 28h-150z"
        fill={color}
      />
    </svg>
  );
};

SvgYacht.propTypes = {
  color: PropTypes.string
};
SvgYacht.defaultProps = {
  color: "primary"
};
export default SvgYacht;
