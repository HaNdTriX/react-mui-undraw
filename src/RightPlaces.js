import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgRightPlaces = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1108.526 759.79"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#ffb9b9" d="M398.526 677.217l-3 39 29 3-7-47-19 5z" />
      <path
        fill="#f2f2f2"
        d="M254.526 40.453h78.208v142.933h-78.208zM486.455 511.501h105.177v142.933H486.455zM383.076 291.259h104.278v157.316H383.076zM487.354 86.299h104.278v157.316H487.354z"
      />
      <path fill="#2f2e41" d="M44.019 757.55h963.51v2.241H44.019z" />
      <path
        d="M720.282 655.434H253.526V39.453h466.756zm-464.756-2h462.756V41.453H255.526z"
        fill="#3f3d56"
      />
      <path
        d="M622.297 655.434H352.41V40.352h269.886zm-267.886-2h265.886V42.352H354.41z"
        fill="#3f3d56"
      />
      <path
        d="M720.282 449.574H253.526v-206.96h466.756zm-464.756-2h462.756v-202.96H255.526z"
        fill="#3f3d56"
      />
      <circle cx={353.411} cy={243.615} r={29.665} fill={color} />
      <circle cx={621.297} cy={44.048} r={29.665} fill={color} />
      <path fill="#3f3d56" d="M485.904 41.352h2v613.082h-2z" />
      <path
        d="M824.94 670.934c15.148 45.586 9.828 88.389 9.828 88.389s-29.878-31.108-45.025-76.694-9.827-88.388-9.827-88.388 29.878 31.107 45.025 76.693z"
        fill={color}
      />
      <path
        d="M844.596 670.934c-15.147 45.586-9.828 88.389-9.828 88.389s29.878-31.108 45.025-76.694 9.828-88.388 9.828-88.388-29.878 31.107-45.025 76.693z"
        fill={color}
      />
      <path
        d="M850.696 671.427c1.016 48.026-16.702 87.35-16.702 87.35s-19.364-38.54-20.38-86.566 16.703-87.351 16.703-87.351 19.364 38.54 20.38 86.567z"
        fill="#3f3d56"
      />
      <path
        d="M297.487 322.063c24.72 7.618 37.905 36.032 29.452 63.464l-10.74 34.854-10.72-3.303-2.227-14.826-2.428 13.392-68.9-21.233-2.024-13.478-2.207 12.174-7.758-2.39 8.434-27.366c9.727-31.568 40.673-50.053 69.118-41.288z"
        fill="#2f2e41"
      />
      <path
        d="M259.095 426.674a16.232 16.232 0 00-18.852 14.93c-.431 6.043 1.654 13.117 11.022 18.357 20.008 11.19 63.396 35.585 63.396 35.585l82.784 15.899s41.833 33.38 47.074 14.394-39.694-30.577-39.694-30.577l-76.054-19.505-48.461-35.052s-8.88-11.854-21.215-14.03zM232.636 504.455l8.32 23.449 49.925-12.102-12.86-17.398-45.385 6.051zM99.125 724.955l-37.821-3.782 26.475-25.719 18.911 12.859-7.565 16.642z"
        fill="#ffb9b9"
      />
      <circle cx={288.744} cy={369.479} r={31.063} fill="#ffb9b9" />
      <path
        d="M264.406 374.349s-17.398 20.423-26.475 23.45-31.77 31.77-20.424 50.68 52.95-4.539 52.95-4.539l-1.513-18.91s17.398-30.258 21.18-32.527-25.718-18.154-25.718-18.154z"
        fill="#ffb9b9"
      />
      <path
        d="M261.381 410.87c-11.565-17.413-38.393-14.298-45.047 5.52q-.178.528-.34 1.075c-6.051 20.424 3.026 55.22 3.026 55.22l13.615 40.847s35.553-16.641 61.271 11.347l-3.782-28.745s10.59-24.206-3.025-41.603c-8.666-11.073-16.718-30.11-25.718-43.66z"
        fill="#575a89"
      />
      <path
        d="M294.285 526.77s-18.155-24.206-55.22-9.834l-6.808 18.911s-39.334 31.014-17.398 78.669l-1.512 71.105-6.052 20.423-109.683-9.077-3.782 34.796 19.667 1.513s111.196 43.873 128.594 16.641 53.707-134.645 53.707-134.645l94.181 14.103s-2.756 29.475.27 33.258 1.513 19.667 3.025 22.693.252 10.89.252 10.89l31.25-1.031v-15.129s3.781-20.423 3.781-25.719 22.693-74.886-16.641-80.938-107.041-17.128-107.041-17.128z"
        fill="#2f2e41"
      />
      <path
        d="M82.484 719.66l-1.513 11.346s-49.925-9.833-60.515-.756-10.59 15.129-18.91 9.077c-3.537-2.572-.515-8.833 4.13-15.182a76.424 76.424 0 0128.166-23.387c12.484-6.112 29.731-14.993 29.731-17.407 0-3.782 13.616-15.128 18.91-9.077s15.13 22.693 15.13 22.693zM393.857 698.217s-11.088 39.31-7.056 41.327 12.096 8.063 24.191 8.063c7.147 0 17.814 3.872 25.345 7.04a61.095 61.095 0 0027.847 4.79c6.35-.438 11.747-1.926 11.318-5.782-1.008-9.071-20.159-11.087-20.159-11.087l-20.16-26.208s-3.527-16.631-6.551-16.631a6.622 6.622 0 01-4.536-1.512z"
        fill="#2f2e41"
      />
      <path
        d="M258.943 408.534a18.753 18.753 0 00-25.979-9.852c-6.248 3.153-12.03 9.414-11.675 21.81.756 26.474 2.27 83.963 2.27 83.963l33.282 91.528s-8.32 61.271 13.616 55.22 6.808-57.489 6.808-57.489l-25.719-86.99 6.052-68.835s6.495-15.831 1.345-29.355z"
        fill="#ffb9b9"
      />
      <path
        d="M280.547 331.825a24.563 24.563 0 0121.434-3.744l.878.271c16.943 5.221 25.953 24.785 20.125 43.696l-5.677-1.749 1.234-7.261-3.495 6.564-33.67-10.375-1.001-6.774-1.114 6.122-6.624-2.042q-11.732 21.597-.868 50.157l-11.283-3.477-2.003-13.547-2.229 12.243-21.51-6.628 4.139-28.463c6.267-20.339 23.4-33.944 41.664-34.993z"
        fill="#2f2e41"
      />
      <circle cx={487.354} cy={448.575} r={90.794} fill={color} />
      <path
        d="M1023.493 237.354l-.734-1.86-173.182 68.284-165.613-189.424L889.55 33.293l-.735-1.86-206.25 81.323-51.15-58.504 8.434-3.283c-5.743-.782-13.088-3.72-18.412-6.61 2.152 5.663 4.084 13.335 4.092 19.13l4.38-7.92 50.68 57.966-314.507 124.008-.258-9.046c-2.666 5.146-7.903 11.076-12.414 15.118 6.056-.123 13.931.637 19.392 2.578l-5.987-6.79 315.172-124.27 165.614 189.424-347.576 137.047-.257-9.046c-2.667 5.146-7.904 11.076-12.415 15.118 6.056-.123 13.931.637 19.392 2.578l-5.986-6.79L849 306.157l150.758 172.432 1.506-1.316-150.289-171.895z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M937.726 204.061h170.8v65.623h-170.8z" />
      <path
        fill="#f2f2f2"
        d="M967.841 221.591h110.571v5.394H967.841zM967.841 234.176h110.571v5.394H967.841zM967.841 246.761h110.571v5.394H967.841z"
      />
      <path fill="#3f3d56" d="M803.783 0h170.8v65.623h-170.8z" />
      <path
        fill="#f2f2f2"
        d="M833.898 17.529h110.571v5.394H833.898zM833.898 30.115h110.571v5.394H833.898zM833.898 42.7h110.571v5.394H833.898z"
      />
      <path fill="#3f3d56" d="M915.253 444.979h170.8v65.623h-170.8z" />
      <path
        fill="#f2f2f2"
        d="M945.367 462.508h110.571v5.394H945.367zM945.367 475.094h110.571v5.394H945.367zM945.367 487.679h110.571v5.394H945.367z"
      />
    </svg>
  );
};

SvgRightPlaces.propTypes = {
  color: PropTypes.string
};
SvgRightPlaces.defaultProps = {
  color: "primary"
};
const MemoSvgRightPlaces = React.memo(SvgRightPlaces);
export default MemoSvgRightPlaces;
