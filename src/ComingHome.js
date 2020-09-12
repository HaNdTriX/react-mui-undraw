import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgComingHome = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1137 693.112"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M137.398 693.112l-1.951-.44c21.756-96.75 76.43-184.609 153.951-247.391a444.114 444.114 0 01712.155 246.21l-1.95.444C953.55 489.726 776.33 348.501 568.635 348.501c-204.974 0-386.334 144.93-431.236 344.61z"
        fill="#3f3d56"
      />
      <circle cx={417.133} cy={69.403} r={54.315} fill="#ff6584" />
      <path
        d="M183.13 680.773c1.695 6.262 7.497 10.14 7.497 10.14s3.055-6.274 1.361-12.536-7.496-10.14-7.496-10.14-3.055 6.274-1.361 12.536z"
        fill="#3f3d56"
      />
      <path
        d="M185.62 679.427c4.648 4.525 5.216 11.48 5.216 11.48s-6.969-.38-11.617-4.905-5.216-11.48-5.216-11.48 6.969.38 11.617 4.905z"
        fill={color}
      />
      <path
        d="M312.13 680.773c1.695 6.262 7.497 10.14 7.497 10.14s3.055-6.274 1.361-12.536-7.496-10.14-7.496-10.14-3.055 6.274-1.361 12.536z"
        fill="#3f3d56"
      />
      <path
        d="M314.62 679.427c4.648 4.525 5.216 11.48 5.216 11.48s-6.969-.38-11.617-4.905-5.216-11.48-5.216-11.48 6.969.38 11.617 4.905z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M337.71 181.988l-20.424-16.34L431.66 63.529h290.019v89.865l-187.9 126.628-196.069-98.034z"
      />
      <path
        fill="#ccc"
        d="M774.556 120.812V65.569H736.05v13.529l-14.371-15.569-93.95 102.119-36.763 24.509-57.002 416.463 85.966 85.965h199.784V169.733l-45.158-48.921z"
      />
      <path fill="#f2f2f2" d="M317.286 165.648h310.443v526.936H317.286z" />
      <path fill="#ccc" d="M437.787 563.914h57.187v128.671h-57.187z" />
      <path
        fill="#3f3d56"
        d="M376.515 600.677v-20.424h-24.508v20.424H376.515zM374.473 617.016h-22.466v20.424h24.508v-20.424h-2.042zM392.855 580.253h24.509v20.424h-24.509zM392.855 617.016h24.509v20.424h-24.509zM543.991 600.677v-20.424h-24.508v20.424H543.991zM541.949 617.016h-22.466v20.424h24.508v-20.424h-2.042zM560.33 580.253h24.509v20.424H560.33zM560.33 617.016h24.509v20.424H560.33zM715.552 192.199v-20.423h-24.509v20.423h24.509zM713.51 208.539h-22.467v20.423h24.509v-20.423h-2.042zM731.891 171.776H756.4V192.2h-24.509zM731.891 208.539H756.4v20.424h-24.509zM715.552 306.573v-20.424h-24.509v20.424h24.509zM713.51 322.912h-22.467v20.424h24.509v-20.424h-2.042zM731.891 286.149H756.4v20.424h-24.509zM731.891 322.912H756.4v20.424h-24.509zM715.552 420.947v-20.424h-24.509v20.424h24.509zM713.51 437.286h-22.467v20.424h24.509v-20.424h-2.042zM731.891 400.523H756.4v20.424h-24.509zM731.891 437.286H756.4v20.424h-24.509zM715.552 535.321v-20.424h-24.509v20.424h24.509zM713.51 551.66h-22.467v20.424h24.509V551.66h-2.042zM731.891 514.897H756.4v20.424h-24.509zM731.891 551.66H756.4v20.424h-24.509zM352.007 192.199h236.917v49.017H352.007zM352.007 290.234h236.917v49.017H352.007zM352.007 388.269h236.917v49.017H352.007zM352.007 486.304h236.917v49.017H352.007zM0 690.529h1137v2H0z"
      />
      <path fill="#3f3d56" d="M190.405 459.615h5.875v232.053h-5.875z" />
      <path
        d="M250.497 489.187c.374 81.144-56.714 147.188-56.714 147.188s-57.695-65.515-58.07-146.659 56.715-147.187 56.715-147.187 57.695 65.515 58.07 146.658z"
        fill={color}
      />
      <path
        d="M250.497 489.187c.374 81.144-56.714 147.188-56.714 147.188s-57.695-65.515-58.07-146.659 56.715-147.187 56.715-147.187 57.695 65.515 58.07 146.658z"
        opacity={0.1}
      />
      <path fill="#3f3d56" d="M114.033 459.615h5.875v232.053h-5.875z" />
      <path
        d="M174.125 489.187c.374 81.144-56.715 147.188-56.715 147.188S59.715 570.86 59.342 489.716s56.714-147.187 56.714-147.187 57.695 65.515 58.07 146.658z"
        fill={color}
      />
      <path
        d="M945.554 165.32c-46.276.214-83.944.897-83.944.897s44.774-59.307 83.777-37.334 83.806 36.562 83.806 36.562-37.362-.338-83.639-.125zM174.554 279.32c-46.276.214-83.944.897-83.944.897s44.774-59.307 83.777-37.334 83.806 36.562 83.806 36.562-37.362-.338-83.638-.125zM342.555 41.32c-46.277.214-83.945.897-83.945.897s44.774-59.307 83.777-37.334 83.806 36.562 83.806 36.562-37.362-.338-83.638-.125z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M1035.033 459.615h5.875v232.053h-5.875z" />
      <path
        d="M1095.125 489.187c.374 81.144-56.715 147.188-56.715 147.188s-57.695-65.515-58.068-146.659 56.714-147.187 56.714-147.187 57.695 65.515 58.07 146.658z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M824.667 547.629h59.289v-14.311h32.711v14.311H978v63.378h-61.333v79.733h-32.711v-79.733h-59.289L794 576.251l30.667-28.622z"
      />
    </svg>
  );
};

SvgComingHome.propTypes = {
  color: PropTypes.string
};
SvgComingHome.defaultProps = {
  color: "primary"
};
export default SvgComingHome;