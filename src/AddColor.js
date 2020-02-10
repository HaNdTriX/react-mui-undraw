import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgAddColor = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1105.328 700.707"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M53.546 614.887c9.704 35.87 42.94 58.084 42.94 58.084s17.504-35.94 7.8-71.81-42.939-58.084-42.939-58.084-17.504 35.941-7.8 71.81z"
        fill="#3f3d56"
      />
      <path
        d="M98.945 674.17l-1.325-.073c-.404-.021-40.658-2.502-67.288-28.424C3.703 619.75.14 579.577.108 579.173L0 577.852l1.325.072c.403.021 40.658 2.503 67.287 28.425 26.63 25.923 30.192 66.096 30.225 66.5zM2.564 580.347c.873 7.171 6.13 41.032 29.383 63.666 23.253 22.637 57.24 26.981 64.434 27.662-.873-7.173-6.13-41.031-29.384-63.667-23.27-22.653-57.243-26.984-64.433-27.661z"
        fill="#3f3d56"
      />
      <circle cx={886.161} cy={630.531} r={25.531} fill="#3f3d56" />
      <path fill="#d0cde1" d="M201.525 378.44h348.28v295.85h-348.28z" />
      <path
        d="M495.517 634.982H143.463V335.356h352.054zm-348.274-3.78h344.494V339.137H147.243z"
        fill="#3f3d56"
      />
      <path
        d="M368.575 257.4l-7.139 8.436a6.873 6.873 0 01-10.183 0l-7.138-8.436v-58.612h24.46z"
        fill={color}
      />
      <path
        d="M395.265 151.227h-13.139a31.104 31.104 0 005.474-17.666C387.6 116.3 373.606 86 356.345 86s-31.255 30.3-31.255 47.561a31.104 31.104 0 005.474 17.666h-13.14a10.03 10.03 0 00-10 10v7.178a10.03 10.03 0 0010 10h77.841a10.03 10.03 0 0010-10v-7.178a10.03 10.03 0 00-10-10z"
        fill="#3f3d56"
      />
      <path
        d="M356.345 276.316a10.458 10.458 0 01-8.437-4.218L337 257.554V157.021h38.69v100.533l-10.909 14.544a10.458 10.458 0 01-8.436 4.218zM339 256.887l10.508 14.011a8.546 8.546 0 0013.674 0l10.508-14.01V159.02H339z"
        fill="#3f3d56"
      />
      <path
        d="M368.345 309a12 12 0 01-24 0c0-6.627 12-20 12-20s12 13.373 12 20z"
        fill={color}
      />
      <path
        d="M495.345 379a139.001 139.001 0 01-278 0z"
        fill={color}
        opacity={0.2}
      />
      <path d="M471.335 378.44a114.99 114.99 0 01-229.98 0z" fill={color} />
      <circle cx={266.345} cy={32} r={32} fill="#3f3d56" />
      <circle cx={356.345} cy={32} r={32} fill={color} />
      <circle cx={446.345} cy={32} r={32} fill="#d0cde1" />
      <path
        fill="#3f3d56"
        d="M35.252 672.996h652.894v2.315H35.252zM910.361 675V250h194.967v425zm2.806-422.195v419.39h189.356v-419.39z"
      />
      <path fill="#d0cde1" d="M1070.262 306.106v314.19H944.024v-314.19z" />
      <path fill={color} d="M1045.015 336.964v75.743h-75.743v-75.743z" />
      <path
        fill="#ff6584"
        d="M1061.507 524.579l-31.583 18.234-18.234-31.583 31.583-18.234z"
      />
      <path fill="#3f3d56" d="M1001.534 463.201v123.432h-36.47V463.201z" />
      <path
        fill="#ffb8b8"
        d="M789.169 400.407l-54.73 116.151 38.311 21.284 68.11-116.151-51.691-21.284z"
      />
      <path
        opacity={0.1}
        d="M789.169 400.407l-54.73 116.151 38.311 21.284 68.11-116.151-51.691-21.284z"
      />
      <path
        d="M736.871 500.747l-65.677 135.002-37.095 37.096s-51.082.608-31.015 20.068 82.097-3.649 82.097-3.649l-1.825 7.298 40.136-3.65-1.216-14.594-3.649-1.824s2.433-27.974-3.648-33.447 10.946-12.162 10.946-12.162l69.934-121.625z"
        fill="#2f2e41"
      />
      <path
        d="M755.723 391.893s-58.38 34.055-43.177 65.069 20.068 33.447 20.068 33.447l31.014-22.5-5.473-12.771 60.812-35.271s-46.825-35.88-63.244-27.974z"
        fill="#ffb8b8"
      />
      <path
        d="M719.236 486.152l83.312 133.178 8.514 37.096s-30.406 38.311-7.906 40.744 48.042-33.447 49.258-49.866 3.04-26.758 3.04-26.758l6.082 2.433s18.243-29.19 9.122-32.839a141.968 141.968 0 00-16.42-5.473s-13.378-8.513-26.149-5.473c0 0 2.433-9.73 0-13.987s-67.376-111.553-67.376-111.553z"
        fill="#2f2e41"
      />
      <circle cx={862.752} cy={94.522} r={33.447} fill="#ffb8b8" />
      <path
        d="M853.63 115.806s12.163 34.663 9.122 44.393-27.365 55.34-27.365 55.34l3.04 21.283 60.812-93.65s-15.203-20.068-10.946-34.055z"
        fill="#ffb8b8"
      />
      <path
        d="M876.13 374.866l-17.635 72.366s-87.57-52.298-111.894-50.474c0 0 52.906-60.204 72.974-60.204s56.556 38.312 56.556 38.312z"
        fill="#2f2e41"
      />
      <path
        d="M919.915 148.037s-13.986-22.5-31.014-3.04-48.041 70.541-48.041 70.541L843.032 201s-19.2 14.538-20.416 33.39-6.081 82.096-6.081 82.096l-7.906 26.757 75.407 43.785 12.163-20.676s45.609 8.514 50.474 3.04S918.345 275 918.345 275z"
        fill="#575a89"
      />
      <path
        d="M853.63 274.526L817.143 325s-43.785 17.027-36.487 31.014 44.393-21.284 44.393-21.284l54.73-48.042z"
        fill="#ffb8b8"
      />
      <path
        d="M889.51 153.51s-26.758 42.568-27.974 74.799-.912 28.885-.912 28.885l-13.38 18.852 31.623 17.636 16.115-16.724s35.88-10.338 31.623-40.136-6.69-85.137-12.77-85.137-24.326 1.825-24.326 1.825z"
        opacity={0.1}
      />
      <path
        d="M890.726 147.429s-26.758 42.568-27.974 74.798 1.824 32.839 1.824 32.839l-16.419 21.892 30.406 16.42 17.636-22.5s35.879-10.339 31.622-40.137-6.69-85.137-12.77-85.137-24.325 1.825-24.325 1.825z"
        fill="#575a89"
      />
      <path
        d="M823.81 87.913s-10.3-49.756 43.643-37.306c0 0 37.098-9.782 53.036 36.34l16.267 48.38-6.342-2.849-2.365 6.422-9.676 3.254-4.863-8.058-1.264 10.333-80.2 14.237s34.558-24.174 32.199-62.583l-6.338 7.813z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgAddColor.propTypes = {
  color: PropTypes.string
};
SvgAddColor.defaultProps = {
  color: "primary"
};
const MemoSvgAddColor = React.memo(SvgAddColor);
export default MemoSvgAddColor;
