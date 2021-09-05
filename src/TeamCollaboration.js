import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTeamCollaboration = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1007.529 665.082"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M83.401 188.773h21.846v28.4H83.401zM567.401 586.773h21.846v28.4h-21.846zM920.155 294.511v21.846h-28.4v-21.846z"
      />
      <circle cx={847.031} cy={525.346} r={86.292} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M880.36 643.515l25.796-4.67-8.367-53.864-25.796 4.67 8.367 53.864zM854.564 640.539l-25.796 4.67-8.367-46.218 25.796-4.67z"
      />
      <ellipse
        cx={933.402}
        cy={766.142}
        rx={21.846}
        ry={8.192}
        transform="rotate(-40.261 725.063 838.684)"
        fill="#2f2e41"
      />
      <ellipse
        cx={983.92}
        cy={764.643}
        rx={21.846}
        ry={8.192}
        transform="rotate(-40.261 775.58 837.185)"
        fill="#2f2e41"
      />
      <circle cx={840.99} cy={504.238} r={29.492} fill="#fff" />
      <circle cx={828.869} cy={493.667} r={9.831} fill="#3f3d56" />
      <path
        d="M915.104 431.47c1.297-31.948-26.236-59.007-61.498-60.439s-64.9 23.304-66.197 55.251 23.214 39.205 58.476 40.638 67.921-3.504 69.219-35.45z"
        fill={color}
      />
      <ellipse
        cx={863.588}
        cy={627.084}
        rx={13.545}
        ry={43.146}
        transform="rotate(-77.09 741.756 628.75)"
        fill="#2f2e41"
      />
      <ellipse
        cx={1032.976}
        cy={655.253}
        rx={13.545}
        ry={43.146}
        transform="rotate(-77.09 911.144 656.918)"
        fill="#2f2e41"
      />
      <path
        d="M870.731 559.353a19.662 19.662 0 11-38.694 7.004c-1.934-10.685 6.327-14.466 17.012-16.4s19.748-1.29 21.682 9.396z"
        fill="#fff"
      />
      <path fill="#ffb9b9" d="M398.526 582.508l-3 39 29 3-7-47-19 5z" />
      <path
        d="M297.487 227.355c24.72 7.617 37.905 36.031 29.452 63.464l-10.74 34.854-10.72-3.304-2.227-14.826-2.428 13.392-68.9-21.232-2.024-13.478-2.207 12.174-7.758-2.39 8.434-27.367c9.727-31.568 40.673-50.053 69.118-41.287z"
        fill="#2f2e41"
      />
      <path
        d="M259.095 331.966a16.232 16.232 0 00-18.852 14.93c-.431 6.043 1.654 13.117 11.022 18.356 20.008 11.19 63.396 35.586 63.396 35.586l82.784 15.898s41.833 33.381 47.074 14.395-39.694-30.578-39.694-30.578L328.77 381.05l-48.461-35.053s-8.88-11.853-21.215-14.03zM232.636 409.747l8.32 23.449 49.925-12.103-12.86-17.398-45.385 6.052zM99.125 630.247l-37.821-3.783 26.475-25.718 18.911 12.859-7.565 16.642z"
        fill="#ffb9b9"
      />
      <circle cx={288.744} cy={274.77} r={31.063} fill="#ffb9b9" />
      <path
        d="M264.406 279.64s-17.398 20.424-26.475 23.45-31.77 31.77-20.424 50.68 52.95-4.538 52.95-4.538l-1.513-18.91s17.398-30.258 21.18-32.527-25.718-18.155-25.718-18.155z"
        fill="#ffb9b9"
      />
      <path
        d="M261.381 316.162c-11.565-17.414-38.393-14.298-45.047 5.519q-.178.529-.34 1.076c-6.051 20.424 3.026 55.22 3.026 55.22l13.616 40.847s35.552-16.642 61.27 11.346l-3.782-28.744s10.59-24.206-3.025-41.604c-8.666-11.072-16.718-30.11-25.718-43.66z"
        fill="#575a89"
      />
      <path
        d="M82.484 624.952l-1.513 11.346s-49.925-9.834-60.515-.756-10.59 15.128-18.91 9.077c-3.537-2.572-.515-8.833 4.13-15.183a76.424 76.424 0 0128.166-23.387c12.484-6.112 29.73-14.993 29.73-17.406 0-3.782 13.617-15.129 18.912-9.077s15.128 22.693 15.128 22.693zM393.857 603.508s-11.088 39.311-7.056 41.327 12.096 8.064 24.191 8.064c7.147 0 17.814 3.871 25.345 7.039a61.095 61.095 0 0027.847 4.79c6.35-.437 11.747-1.926 11.318-5.781-1.008-9.072-20.159-11.088-20.159-11.088l-20.16-26.207s-3.527-16.632-6.551-16.632a6.622 6.622 0 01-4.536-1.512zM280.547 237.117a24.563 24.563 0 0121.434-3.744l.878.27c16.943 5.222 25.953 24.785 20.125 43.697l-5.677-1.75 1.234-7.26-3.495 6.564-33.67-10.376-1.001-6.773-1.114 6.121-6.624-2.041q-11.732 21.597-.868 50.157l-11.283-3.478-2.003-13.546-2.229 12.243-21.509-6.629 4.138-28.462c6.267-20.339 23.4-33.944 41.664-34.993z"
        fill="#2f2e41"
      />
      <path fill="#f2f2f2" d="M419.608 53h257v481h-257z" />
      <path
        d="M738.608 535h-320V0h320zm-318-2h316V2h-316zM44.019 662.841h963.51v2.241H44.019z"
        fill="#3f3d56"
      />
      <path d="M699.608 281h-242V59h242zm-240-2h238V61h-238z" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M459.315 222.139l-1.414-1.414 75.423-75.423 44.284 44.284L697.401 69.793l1.414 1.414-121.207 121.207-44.284-44.284-74.009 74.009z"
      />
      <circle cx={533.608} cy={147} r={15} fill={color} />
      <circle cx={578.608} cy={188} r={15} fill={color} />
      <circle cx={698.608} cy={70} r={15} fill={color} />
      <path
        fill="#3f3d56"
        d="M487.608 343h182v18h-182zM620.608 491h-84v-84h57v2h-55v80h80v-40h2v42z"
      />
      <path
        fill={color}
        d="M578.175 469.09l-17.767-23.69 6.4-4.8 12.233 16.31 56.239-56.238 5.656 5.656-62.761 62.762z"
      />
      <path
        d="M294.285 432.061s-18.155-24.205-55.22-9.833l-6.808 18.91s-39.334 31.014-17.398 78.67l-1.512 71.104-6.052 20.424-109.683-9.077-3.782 34.795 19.668 1.513S224.693 682.44 242.09 655.21s53.707-134.645 53.707-134.645l94.181 14.103s-2.756 29.475.27 33.257 1.513 19.667 3.025 22.693.252 10.891.252 10.891l31.25-1.032v-15.128s3.781-20.424 3.781-25.719 22.693-74.887-16.641-80.938-107.041-17.129-107.041-17.129z"
        fill="#2f2e41"
      />
      <path
        d="M258.943 313.826a18.753 18.753 0 00-25.979-9.852c-6.248 3.153-12.03 9.413-11.675 21.809.756 26.475 2.27 83.964 2.27 83.964l33.282 91.528s-8.32 61.27 13.616 55.22 6.808-57.49 6.808-57.49l-25.719-86.99 6.052-68.834s6.495-15.832 1.345-29.355z"
        fill="#ffb9b9"
      />
    </svg>
  );
};

SvgTeamCollaboration.propTypes = {
  color: PropTypes.string
};
SvgTeamCollaboration.defaultProps = {
  color: "primary"
};
export default SvgTeamCollaboration;
