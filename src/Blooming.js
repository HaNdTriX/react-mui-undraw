import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBlooming = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 752 651"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={359} cy={558} rx={359} ry={93} fill="#f2f2f2" />
      <circle cx={495.603} cy={173.285} r={61.186} fill={color} />
      <circle cx={391.603} cy={317.285} r={61.186} fill={color} />
      <ellipse
        cx={392}
        cy={539}
        rx={359}
        ry={93}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={124.805} cy={429.5} r={79} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M88.805 491.5h24v43h-24zM136.805 491.5h24v43h-24z"
      />
      <ellipse cx={108.805} cy={535} rx={20} ry={7.5} fill="#2f2e41" />
      <ellipse cx={156.805} cy={534} rx={20} ry={7.5} fill="#2f2e41" />
      <circle cx={126.805} cy={409.5} r={27} fill="#fff" />
      <circle cx={126.805} cy={409.5} r={9} fill="#3f3d56" />
      <path
        d="M48.172 356.032c-6.379-28.567 14.012-57.434 45.544-64.474s62.265 10.41 68.644 38.977-14.519 39.104-46.05 46.145-61.76 7.92-68.138-20.648z"
        fill={color}
      />
      <ellipse
        cx={418.52}
        cy={526.844}
        rx={39.5}
        ry={12.4}
        transform="rotate(-23.171 2.623 1012.133)"
        fill="#2f2e41"
      />
      <ellipse
        cx={270.52}
        cy={579.844}
        rx={39.5}
        ry={12.4}
        transform="rotate(-23.171 -145.377 1065.133)"
        fill="#2f2e41"
      />
      <path
        d="M170.805 452.5c0 7.732-19.91 23-42 23s-43-14.268-43-22 20.908-6 43-6 42-2.732 42 5z"
        fill="#fff"
      />
      <circle cx={274.603} cy={432.285} r={61.186} fill={color} />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M274.549 542.937V431.949"
      />
      <circle cx={274.549} cy={431.949} r={15.695} fill="#3f3d56" />
      <path d="M274.549 500.353s-2.243-48.225-48.208-42.62" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M495.641 543.716V173.51"
      />
      <circle cx={495.641} cy={173.335} r={15.695} fill="#3f3d56" />
      <circle cx={447.434} cy={441.18} r={15.695} fill="#3f3d56" />
      <path
        d="M495.641 253.507s-2.242-48.225-48.207-42.62M495.641 390.22s-2.242-48.226-48.207-42.62"
        fill="#3f3d56"
      />
      <path
        d="M495.641 539.402s10.09-93.737-48.207-98.222"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={543.855} cy={441.18} r={15.695} fill="#3f3d56" />
      <path
        d="M495.648 539.402s-10.09-93.737 48.207-98.222"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={544.811} cy={293.952} r={15.695} fill="#3f3d56" />
      <path
        d="M496.604 387.173s-10.09-88.736 48.207-93.22"
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
        d="M391.659 543.194V317.217"
      />
      <circle cx={391.659} cy={317.217} r={15.695} fill="#3f3d56" />
      <path d="M391.659 381.137s-2.242-48.225-48.207-42.62" fill="#3f3d56" />
      <path
        d="M391.659 538.88s10.09-92.737-48.207-97.222"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={343.452} cy={441.658} r={15.695} fill="#3f3d56" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M218.507 542.976h324"
      />
      <circle cx={661} cy={351} r={32} fill="#f2f2f2" />
      <circle cx={157} cy={151} r={32} fill="#f2f2f2" />
      <circle cx={480} cy={32} r={32} fill="#f2f2f2" />
    </svg>
  );
};

SvgBlooming.propTypes = {
  color: PropTypes.string
};
SvgBlooming.defaultProps = {
  color: "primary"
};
export default SvgBlooming;
