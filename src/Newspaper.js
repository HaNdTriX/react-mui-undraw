import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNewspaper = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 799 667.076"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M649 630.158H164l.219-51.422c.553-130.115 104.408-237.33 234.506-239.542q2.108-.036 4.223-.036a245.336 245.336 0 0185.753 15.406c92.054 34.282 153.841 121.383 157.951 219.528z"
        fill={color}
      />
      <path
        fill="#2f2e41"
        d="M0 630.158h799v2H0zM398.287 400.165l21.37 15.543 21.371 182.622h50.512l-17.485-207.879-69.94-27.199-5.828 36.913z"
      />
      <path
        d="M308.918 341.882s-5.828 66.054 17.485 67.997 112.682-19.428 112.682-19.428l42.741 151.538 64.112-33.028s-38.855-170.965-62.169-180.679-101.025-29.142-101.025-29.142l-56.34 9.714zM448.799 594.444s-11.657 44.684-3.886 48.57a140.535 140.535 0 0113.6 7.77v-7.77s9.714 9.714 9.714 17.485 52.455 9.714 52.455 0-1.943-21.37-11.657-27.2-21.37-38.855-21.37-38.855z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M505.14 514.79l3.885 36.913 13.6 23.313 33.027-36.913-25.256-40.798-25.256 17.485z"
      />
      <path
        d="M536.224 551.703s7.154-24.46 14.263-21.944 34.307 27.772 34.307 27.772l19.428 11.657s38.856 3.885 27.199 15.542-54.398 27.2-73.826 19.428-23.313-9.714-23.313-9.714l-5.829 3.886-23.313-5.829 3.885-40.798s5.829 17.485 27.2 0z"
        fill="#2f2e41"
      />
      <circle cx={374.973} cy={54.349} r={44.684} fill="#9f616a" />
      <path
        d="M346.803 80.577s3.885 40.798-7.771 40.798 1.942 50.513 33.027 50.513S414.8 111.66 414.8 111.66s-21.37-7.77-17.485-33.027-50.512 1.943-50.512 1.943z"
        fill="#9f616a"
      />
      <path
        d="M343.707 118.263l-16.332 6.998-44.325 18.753a9 9 0 00-5.436 9.294l16.734 148.747s-17.486 36.913 9.713 38.855l3.886 13.6 31.085-36.913 116.567-3.886 1.943-188.45-53.336-21.076s-7.254 40.108-60.5 14.078z"
        fill="#3f3d56"
      />
      <path
        d="M289.49 149.546l-7.179-2.051a5.919 5.919 0 00-7.471 4.759l-19.052 119.507a41.502 41.502 0 004.055 25.917c5.886 11.146 18.112 21.255 43.247 9.234l17.485-126.282zM435.2 122.347l23.313 3.885 64.112 89.369 5.828 15.542 36.913-11.657s-1.942 17.485 17.485 15.542c0 0-23.313 64.112-71.883 44.685S446.856 202 446.856 202z"
        fill="#3f3d56"
      />
      <path
        fill="#ccc"
        d="M462.399 161.203l-87.426-34.971-3.885 11.657 40.798 34.97 50.513-11.656z"
      />
      <path
        d="M348.07 57.198c1.65-.44 1.892-2.632 1.948-4.34.296-9.142 5.801-18.523 14.553-21.184a24.467 24.467 0 0110.313-.568 39.063 39.063 0 0113.966 4.66c2.28 1.281 4.515 2.824 7.1 3.216 1.708.258 9.101 2.408 10.802 2.71 3.738.666 7.212 4.01 10.799 2.765 3.432-1.19 4.191-5.634 4.274-9.265.19-8.273-6.091-19.724-11.623-25.878-4.198-4.67-10.52-6.827-16.698-7.948A111.168 111.168 0 00371.666.038c-9.889.176-20.052.94-28.968 5.218S326.29 18.05 325.864 27.93c-.09 2.058.123 4.125-.05 6.178-.422 5.008-3.082 9.532-4.329 14.4a26.35 26.35 0 003.68 21.058c3.309 4.87 16.542 9.29 16.351 15.176 2.392-2.478-3.249-4.973-.857-7.45a5.892 5.892 0 001.753-7.2l-2.54-9.907c-.465-1.814-.922-3.777-.22-5.513 2.723-6.728 5.666 3.26 8.418 2.525z"
        fill="#2f2e41"
      />
      <path
        fill="#f2f2f2"
        d="M371.088 137.889l-36.913 143.766 143.766 50.513 83.54-69.941 52.455-157.365-85.483 62.169-157.365-29.142z"
      />
      <path
        fill="#e6e6e6"
        d="M377.64 155.342l.495-1.877 139.88 36.913-.495 1.877zM373.754 165.056l.496-1.878 139.88 36.913-.495 1.878zM371.811 174.77l.496-1.878 139.88 36.913-.495 1.878zM369.869 184.484l.495-1.878 139.88 36.913-.495 1.878zM367.926 194.198l.495-1.877 139.88 36.912-.495 1.878zM365.983 203.911l.496-1.877 139.88 36.913-.495 1.877zM364.04 213.625l.495-1.877 139.88 36.913-.495 1.877zM362.097 223.34l.495-1.878 139.88 36.913-.495 1.877zM360.154 233.054l.496-1.878 139.88 36.913-.495 1.878z"
      />
      <path
        d="M311.85 243.642s43.695-26.099 63.123-8.614-56.34 42.742-56.34 42.742z"
        fill="#9f616a"
      />
      <path
        d="M264.234 256.4l56.341-21.372s-9.714 36.913 9.714 38.856l-27.199 33.028s-54.398 0-38.856-50.513z"
        fill="#3f3d56"
      />
      <path
        fill="#e6e6e6"
        d="M412.494 255.602l74.761 25.197-17.693 38.566-74.761-25.196 17.693-38.567z"
      />
      <path
        fill="#ccc"
        d="M544.967 173.831l56.341-42.742-15.542 52.456-58.284 42.741 17.485-52.455z"
      />
      <path
        fill="#e6e6e6"
        d="M517.18 244.94l56.343-42.74 1.174 1.547-56.342 42.74zM513.295 266.31l56.342-42.741 1.174 1.548-56.342 42.74z"
      />
      <path
        d="M577.023 236.971s48.57-29.142 17.485-40.798-31.085 33.027-31.085 33.027-1.942 9.714 13.6 7.771z"
        fill="#9f616a"
      />
      <path
        opacity={0.1}
        d="M292.405 171.888l-1.943 75.769 30.113-8.594-24.285.822-3.885-67.997z"
      />
      <path
        d="M80.409 595.892c6.073 22.45 26.875 36.354 26.875 36.354s10.955-22.495 4.882-44.945-26.875-36.354-26.875-36.354-10.956 22.495-4.882 44.945z"
        fill="#8985a8"
      />
      <path
        d="M89.333 591.067c16.665 16.223 18.7 41.16 18.7 41.16s-24.984-1.363-41.648-17.586-18.7-41.16-18.7-41.16 24.983 1.364 41.648 17.586z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M626 379.158h30v30h-30zM506 39.158h30v30h-30z" />
      <circle cx={159} cy={328.158} r={15} fill="#f2f2f2" />
    </svg>
  );
};

SvgNewspaper.propTypes = {
  color: PropTypes.string
};
SvgNewspaper.defaultProps = {
  color: "primary"
};
const MemoSvgNewspaper = React.memo(SvgNewspaper);
export default MemoSvgNewspaper;
