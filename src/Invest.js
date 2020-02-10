import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgInvest = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1106 776"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={416} cy={743.5} rx={416} ry={32.5} fill="#3f3d56" />
      <path
        d="M156.146 720.521c-.229-.375-5.64-9.41-7.516-28.171-1.72-17.213-.614-46.227 14.432-86.699 28.506-76.67-6.569-138.533-6.927-139.149l1.73-1.004c.091.156 9.142 15.929 14.489 41.044a179.061 179.061 0 01-7.416 99.807c-28.457 76.54-7.301 112.773-7.084 113.13z"
        fill="#3f3d56"
      />
      <circle cx={145} cy={449} r={13} fill={color} />
      <circle cx={186} cy={497} r={13} fill="#3f3d56" />
      <circle cx={158} cy={529} r={13} fill={color} />
      <circle cx={192} cy={556} r={13} fill={color} />
      <circle cx={148} cy={598} r={13} fill="#3f3d56" />
      <path
        d="M164 721s-13-32 26-56zM148.012 720.42s-5.916-34.03-51.709-33.738z"
        fill="#3f3d56"
      />
      <path
        d="M370 155s1 26-5 32 30 27 30 27l21-33s-8-14-6-26zM305.5 683.5v25l31 2-2-27h-29zM475.5 683.5v25l-31 2 2-27h29z"
        fill="#a0616a"
      />
      <path
        d="M321.5 406.5s-16 58-6 104c0 0 0 20 4 24s5 4 2 6-9 7-6 10 4 7 2 8-4 3-2 7-10 111-10 111-12 13 0 14 32 6 34-2 18-121 18-121 2-3 6-8 2-7 2-8 21-96 21-96 31 108 34 110 4 2 4 5-2 5 0 8a51.953 51.953 0 013 5s5 112 15 112 40-2 37-11-7-7-7-7 7-92-10-119v-22c0-2 1-3 0-5s3-121-16-128-125 3-125 3z"
        fill="#d0cde1"
      />
      <path
        d="M324.5 701.5s-5-8-12-8-12 8-12 8l-18 25s-26 16-16 25 37 4 37 4 22-16 25-17 11-6 12-7-2-37-5-34.5-5 10.5-11 4.5zM456.5 701.5s5-8 12-8 12 8 12 8l18 25s26 16 16 25-37 4-37 4-22-16-25-17-11-6-12-7 2-37 5-34.5 5 10.5 11 4.5z"
        fill="#2f2e41"
      />
      <circle cx={387.5} cy={133.5} r={36} fill="#a0616a" />
      <path
        d="M378 190s-6.728.37-9.864-9.815L315 219l22 59s3 32 0 41-5 16-5 20-21 71-13 74 130 15 133-5-10-152-10-152l21-51-51.055-33.397S407 192 378 190z"
        fill="#3f3d56"
      />
      <path
        d="M311.5 282.5l-4 31s-16 33-12 77l-1 29s-10 50 10 52 7-55 7-55l11-27 11.26-60.062 5.74-41.938z"
        fill="#a0616a"
      />
      <path
        d="M329.5 217.5L315 219s-9.5 70.5-6.5 70.5 37 8 38 6-17-78-17-78z"
        fill="#3f3d56"
      />
      <path
        d="M359.724 96.598l-6.49-2.36s13.57-13.57 32.448-12.39l-5.31-5.31s12.98-4.719 24.779 7.67c6.202 6.513 13.379 14.168 17.853 22.792h6.95l-2.901 5.801 10.152 5.802-10.42-1.043a29.274 29.274 0 01-.986 15.025l-2.36 6.49S414 120.195 414 117.836v5.9s-6.49-5.31-6.49-8.85l-3.54 4.13-1.77-6.49-21.828 6.49 3.54-5.31-13.57 1.77 5.31-6.49s-15.338 7.67-15.928 14.16c-.59 6.49-8.26 14.749-8.26 14.749l-3.54-5.9s-5.31-26.548 11.8-35.397z"
        fill="#2f2e41"
      />
      <ellipse cx={454.25} cy={514.5} rx={66.75} ry={95} fill="#3f3d56" />
      <ellipse cx={454.25} cy={514.5} rx={66.75} ry={95} opacity={0.1} />
      <ellipse cx={463.25} cy={514.5} rx={66.75} ry={95} fill="#3f3d56" />
      <ellipse cx={463.25} cy={514.5} rx={57.25} ry={81.479} opacity={0.1} />
      <path
        d="M462.754 553.748v-9.565c-4.835-.094-9.837-1.8-12.754-4.167l2-6.344a20.388 20.388 0 0012.004 4.071c5.92 0 9.92-3.882 9.92-9.28 0-5.208-3.25-8.428-9.42-11.27-8.502-3.787-13.754-8.143-13.754-16.382 0-7.86 4.918-13.826 12.588-15.246V476h5.168v9.186a20.282 20.282 0 0110.837 3.314l-2.084 6.25a18.42 18.42 0 00-10.504-3.22c-6.418 0-8.836 4.357-8.836 8.145 0 4.924 3.084 7.386 10.337 10.796 8.586 3.977 12.92 8.901 12.92 17.33 0 7.48-4.584 14.488-13.17 16.098v9.849z"
        fill={color}
      />
      <path
        d="M477.5 271.5v41s1 50-16 81l-9 20s-18 58-29 40 12-48 12-48l13.016-76.12-8.016-50.88z"
        fill="#a0616a"
      />
      <path
        d="M443.5 202.5L463 205s23.5 71.5 17.5 74.5-45 5-45 5z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M591 50.259h458V563H591z" />
      <path
        d="M675 436.814h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zM843 342h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zM1083 283h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zm-24 0h-12v-2h12zM680 .776h2v6h-2zM682 455.2h-2v-11.802h2zm0-23.602h-2v-11.801h2zm0-23.602h-2v-11.8h2zm0-23.6h-2v-11.801h2zm0-23.602h-2v-11.8h2zm0-23.602h-2v-11.8h2zm0-23.6h-2V301.79h2zm0-23.602h-2v-11.8h2zm0-23.601h-2v-11.8h2zm0-23.6h-2v-11.802h2zm0-23.602h-2v-11.8h2zm0-23.602h-2v-11.8h2zm0-23.6h-2v-11.801h2zm0-23.602h-2v-11.8h2zm0-23.601h-2V112.98h2zm0-23.601h-2V89.38h2zm0-23.602h-2v-11.8h2zm0-23.601h-2v-11.8h2zm0-23.601h-2v-11.8h2zM680 467h2v6h-2zM854 .776h2v6h-2z"
        fill="#e6e6e6"
      />
      <path
        d="M856 364.09h-2v-11.911h2zm0-23.821h-2v-11.91h2zm0-23.822h-2v-11.91h2zm0-23.82h-2v-11.911h2zm0-23.821h-2v-11.91h2zm0-23.821h-2v-11.91h2zm0-23.82h-2v-11.912h2zm0-23.822h-2v-11.91h2zm0-23.821h-2v-11.91h2zm0-23.82h-2V137.79h2zm0-23.822h-2v-11.91h2zm0-23.82h-2V90.148h2zm0-23.822h-2v-11.91h2zm0-23.82h-2V42.506h2zm0-23.821h-2V18.686h2zM854 376h2v6h-2z"
        fill="#e6e6e6"
      />
      <path
        fill={color}
        d="M591 563l91-91 41.5 41.5L855 382l85 85 153-153v249H591z"
      />
      <path d="M1094 564H590V0h504zm-502-2h500V2H592z" fill="#3f3d56" />
      <circle cx={681} cy={434} r={13} fill="#3f3d56" />
      <circle cx={855} cy={341} r={13} fill="#3f3d56" />
      <circle cx={1093} cy={282} r={13} fill="#3f3d56" />
      <path
        d="M1002 80c-5.817 1.688-13.62 2.991-19.398 2.53l7.539 5.007-354.736 262.66 1.19 1.607L991.33 89.144l2.59 8.673c1.245-5.66 4.769-12.744 8.079-17.817z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgInvest.propTypes = {
  color: PropTypes.string
};
SvgInvest.defaultProps = {
  color: "primary"
};
const MemoSvgInvest = React.memo(SvgInvest);
export default MemoSvgInvest;
