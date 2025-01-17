import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWalkDreaming = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 864.865 860.475"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={215.865} cy={587.946} r={215.865} fill="#2f2e41" />
      <path
        d="M331.892 611.331q0 10.442-.81 20.561-.107 1.646-.269 3.292c-7.52 83.108-53.858 147.688-110.72 151.357h-.019q-.944.081-1.889.108c-1.079.054-2.14.072-3.22.072a77.077 77.077 0 01-11.368-.827l-.648-.108c-55.28-8.455-99.172-74.671-104.37-157.797-.037-.576-.073-1.152-.09-1.727q-.46-7.394-.45-14.931c0-96.87 52.347-175.39 116.927-175.39s116.926 78.52 116.926 175.39z"
        fill="#3f3d56"
      />
      <circle cx={211.368} cy={396.365} r={147.508} fill="#3f3d56" />
      <ellipse
        cx={211.368}
        cy={518.689}
        rx={30.581}
        ry={7.196}
        fill="#2f2e41"
      />
      <circle cx={164.597} cy={432.343} r={12.592} fill="#2f2e41" />
      <circle cx={258.139} cy={432.343} r={12.592} fill="#2f2e41" />
      <path
        d="M213.167 729.157a164.797 164.797 0 01-1.8 24.501 148.368 148.368 0 01-8.418 32.128c-55.28-8.455-99.172-74.671-104.37-157.797-.037-.576-.073-1.152-.09-1.727 10.685-7.825 22.755-12.233 35.527-12.233 37.938 0 69.635 38.82 77.352 90.646a164.55 164.55 0 011.799 24.482z"
        opacity={0.1}
      />
      <path
        d="M213.167 745.347a164.797 164.797 0 01-1.8 24.5c-6.008 40.296-26.515 72.747-53.192 85.16a57.738 57.738 0 01-15.974 4.857 53.795 53.795 0 01-8.185.611 56.141 56.141 0 01-22.486-4.73 66.7 66.7 0 01-15.812-9.643c-24.357-19.607-40.852-57.384-40.852-100.755 0-63.59 35.438-115.128 79.15-115.128 37.939 0 69.635 38.82 77.352 90.646a164.55 164.55 0 011.799 24.482z"
        fill="#3f3d56"
      />
      <path
        d="M331.083 631.892q-.108 1.646-.27 3.292c-7.52 83.108-53.858 147.688-110.72 151.357h-.019a149.175 149.175 0 01-8.706-32.883 167.627 167.627 0 010-48.983c7.717-51.826 39.413-90.646 77.351-90.646 15.579 0 30.114 6.548 42.364 17.863z"
        opacity={0.1}
      />
      <path
        d="M367.87 745.347c0 47.67-19.914 88.559-48.282 106.044a61.453 61.453 0 01-15.254 6.836 55.285 55.285 0 01-30.905.09 62.3 62.3 0 01-17.035-7.844c-22.648-14.75-39.648-44.54-45.026-80.625a167.627 167.627 0 010-48.983c7.717-51.826 39.413-90.646 77.351-90.646 43.713 0 79.15 51.538 79.15 115.128z"
        fill="#3f3d56"
      />
      <path
        d="M211.368 426.946c-44.707 0-80.95 30.364-80.95 61.162 0 18.061 12.475 34.108 31.8 44.299 7.194-13.235 26.48-22.712 49.15-22.712s41.955 9.477 49.15 22.712c19.325-10.191 31.8-26.238 31.8-44.299 0-30.798-36.243-61.162-80.95-61.162z"
        fill={color}
      />
      <ellipse
        cx={207.77}
        cy={491.706}
        rx={21.587}
        ry={17.989}
        fill="#3f3d56"
      />
      <ellipse cx={64.759} cy={369.382} rx={30.581} ry={58.463} fill={color} />
      <ellipse cx={348.982} cy={369.382} rx={30.581} ry={58.463} fill={color} />
      <path
        d="M244.647 229.97a17.898 17.898 0 00-11.187 3.917 26.945 26.945 0 00-48.556 5.485 17.989 17.989 0 100 17.173 26.945 26.945 0 0048.556 5.485 17.984 17.984 0 1011.187-32.06z"
        fill="#3f3d56"
      />
      <path
        d="M111.53 789.42v66.324a66.7 66.7 0 01-15.812-9.642zM158.175 855.007a57.738 57.738 0 01-15.974 4.857l8.419-60.712zM273.429 789.42v68.896a62.3 62.3 0 01-17.035-7.843zM319.588 851.39a61.453 61.453 0 01-15.254 6.837l8.184-59.075z"
        fill="#2f2e41"
      />
      <circle cx={167.865} cy={429.975} r={4} fill="#fff" />
      <circle cx={261.865} cy={429.975} r={4} fill="#fff" />
      <path
        d="M667.865 44.975c-108.8 0-197 88.2-197 197a196.12 196.12 0 0023.62 93.603 82.5 82.5 0 10110.757 93.228 196.772 196.772 0 0062.623 10.17c108.8 0 197-88.2 197-197s-88.2-197-197-197z"
        fill="#f2f2f2"
      />
      <ellipse cx={663.925} cy={329.867} rx={97.209} ry={16.41} opacity={0.1} />
      <circle cx={599.136} cy={95.582} r={69.89} fill="#ff6584" />
      <path
        d="M790.431 206.945c.044 91.11-54.104 122.944-120.913 122.976q-2.327.002-4.633-.05-4.644-.097-9.192-.418c-60.299-4.24-107.166-37.659-107.207-122.39C548.444 119.374 660.46 8.661 668.861.474c.007 0 .007 0 .015-.007.319-.312.482-.468.482-.468s121.029 115.843 121.073 206.945z"
        fill={color}
      />
      <path
        d="M665.109 315.987l44.214-61.84-44.322 68.627-.116 7.098q-4.644-.098-9.192-.42l4.723-91.148-.038-.706.082-.133.449-8.613-44.501-68.755 44.631 62.302.112 1.827 3.568-68.867-38.102-71.052 38.564 58.95L668.86.474l.015-.475v.468l-.57 112.597 37.868-44.656-38.026 54.353-.972 61.664 35.365-59.193-35.502 68.259-.54 34.288 51.325-82.396-51.52 94.357z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgWalkDreaming.propTypes = {
  color: PropTypes.string
};
SvgWalkDreaming.defaultProps = {
  color: "primary"
};
export default SvgWalkDreaming;
