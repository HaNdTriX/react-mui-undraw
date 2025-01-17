import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWebSearch = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 2"
      viewBox="0 0 799.703 607.188"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#e6e6e6" d="M.275.365h643.862v412.358H.275z" />
      <path fill="#fff" d="M18.686 52.085h607.039v336.243H18.686z" />
      <path fill={color} d="M0 0h643.862v27.354H0z" />
      <circle cx={20.327} cy={13.985} r={5.07} fill="#fff" />
      <circle cx={39.571} cy={13.985} r={5.07} fill="#fff" />
      <circle cx={58.814} cy={13.985} r={5.07} fill="#fff" />
      <path fill="#e6e6e6" d="M73.844 86.973h155.981V353.44H73.844z" />
      <path fill={color} d="M256.75 86.973h129.984v73.348H256.75z" />
      <path
        fill="#e6e6e6"
        d="M256.75 180.747h129.984v78.919H256.75zM256.75 280.092h129.984v73.348H256.75zM414.587 86.973h155.981v116.125H414.587z"
      />
      <path fill={color} d="M414.587 237.315h155.981V353.44H414.587z" />
      <path
        d="M736.639 206.68c-10.29-17.536-30.645-18.354-30.645-18.354s-19.836-2.558-32.56 24.149c-11.86 24.893-28.229 48.928-2.635 54.755l4.623-14.513 2.863 15.593a99.284 99.284 0 0010.95.19c27.409-.894 53.511.26 52.67-9.66-1.116-13.188 4.634-35.288-5.266-52.16z"
        fill="#2f2e41"
      />
      <path
        d="M639.068 300.306l-9 23-45 42s-27 20-15 26 23-22 23-22l48-29 10-33zM654.068 555.306l9 23h13l-11-27-11 4zM693.068 565.306l9 23h13l-11-27-11 4z"
        fill="#ffb8b8"
      />
      <path
        d="M692.068 569.306l17-4-22-89 7.305-68.48.195-.02s12.5-48.5 2.5-61.5-60-8-60-8-19 19-18 62 0 80 7 97 27 62 27 62l16-2-17-74-2.718-64.327c2.163 25.778 6.517 74.658 8.718 78.327 3 5 34 72 34 72z"
        fill="#2f2e41"
      />
      <path
        d="M743.068 321.306l7 25 31 56s27 24 16 27-28-22-28-22l-35-49-9-36z"
        fill="#ffb8b8"
      />
      <circle cx={707.068} cy={225.306} r={25} fill="#ffb8b8" />
      <path d="M694.068 238.306l-6 19-10 22 37-15s-2-16 0-20z" fill="#ffb8b8" />
      <path
        d="M737.068 278.306l-23-19-26 11 1.02-16.226-27.742 8.86-4.278 1.366-6 31s-4 3-8 20a146.503 146.503 0 01-10 29s43-17 64 6c0 0 3-2 2-5s9-18 9-18 0 3 4-3 7-7 7-7z"
        fill={color}
      />
      <path
        d="M663.068 267.306l-4.368-3.522s-3.632-1.478-6.632 3.522-18 36-18 36l18 9zM723.068 277.306l14 1s8 4 8 10 2 38 2 38l-22 7-9-28z"
        fill={color}
      />
      <path
        d="M660.179 574.806l-17 7s-20 1-17 11 33 3 33 3 27 1 27-6-4-15-8-15z"
        fill="#2f2e41"
      />
      <path
        d="M698.179 583.806l-17 7s-20 1-17 11 33 3 33 3 27 1 27-6-4-15-8-15zM732.09 204.989l-20.111-10.626-27.771 4.347-5.746 25.597 14.303-.554 3.996-9.405v9.25l6.6-.256 3.83-14.972 2.394 15.937 23.463-.483-.958-18.835z"
        fill="#2f2e41"
      />
      <path
        d="M597.58 83.546a135.02 135.02 0 107.655 199.403l165.618 139.748a12.442 12.442 0 1016.048-19.018L621.283 263.93A135.027 135.027 0 00597.58 83.546zm-10.677 166.928a101.158 101.158 0 11-12.076-142.548 101.158 101.158 0 0112.076 142.548z"
        fill="#3f3d56"
      />
      <path
        d="M444.355 262.55a101.163 101.163 0 01-17.165-135.988q-2.901 2.922-5.61 6.12a101.158 101.158 0 10154.625 130.471q2.702-3.202 5.089-6.559a101.163 101.163 0 01-136.939 5.957z"
        opacity={0.3}
      />
    </svg>
  );
};

SvgWebSearch.propTypes = {
  color: PropTypes.string
};
SvgWebSearch.defaultProps = {
  color: "primary"
};
export default SvgWebSearch;
