import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgEditable = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 970.671 836.714"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M446.31 0l296.284 120.895-71.781 175.92-296.284-120.896z"
      />
      <circle cx={505.03} cy={128.724} r={72} fill={color} />
      <path
        fill={color}
        d="M617.376 102.203l22.222 9.067-9.068 22.222-22.22-9.068z"
      />
      <path
        fill={color}
        opacity={0.5}
        d="M645.152 113.537l22.222 9.067-9.067 22.221-22.222-9.067z"
      />
      <path
        fill={color}
        opacity={0.2}
        d="M672.93 124.87l22.22 9.067-9.066 22.222-22.222-9.068z"
      />
      <path
        fill="#2f2e41"
        d="M606.043 129.98l22.22 9.066-9.066 22.222-22.222-9.068z"
      />
      <path
        fill="#2f2e41"
        opacity={0.5}
        d="M633.819 141.313l22.22 9.067-9.066 22.221-22.222-9.067z"
      />
      <path
        fill="#2f2e41"
        opacity={0.2}
        d="M661.595 152.647l22.222 9.067-9.067 22.221-22.222-9.067z"
      />
      <path
        fill="#ff6584"
        d="M594.708 157.756l22.222 9.067-9.067 22.222-22.222-9.068z"
      />
      <path
        fill="#ff6584"
        opacity={0.5}
        d="M622.485 169.09l22.222 9.067-9.067 22.222-22.222-9.067z"
      />
      <path
        fill="#ff6584"
        opacity={0.2}
        d="M650.261 180.424l22.222 9.067-9.067 22.221-22.222-9.067z"
      />
      <path
        d="M532.232 62.06l-54.403 133.328c36.817 15.023 80.694-1.89 95.717-38.707s-4.497-79.598-41.314-94.62z"
        fill="#3f3d56"
        opacity={0.5}
      />
      <path
        d="M218.019 209.078l-53.389 87.261A65.99 65.99 0 0195.776 408.88L39.01 501.662l547.634 335.052 179.008-292.583z"
        fill="#f2f2f2"
      />
      <path
        d="M960.144 611.783c0 22.468-13.356 30.313-29.833 30.313q-.573 0-1.144-.012a48.69 48.69 0 01-2.266-.104c-14.871-1.052-26.424-9.301-26.424-30.197 0-21.626 27.634-48.913 29.71-50.932l.004-.004.12-.116s29.833 28.583 29.833 51.052z"
        fill={color}
      />
      <path
        d="M929.224 638.659l10.911-15.247-10.939 16.921-.029 1.75a48.69 48.69 0 01-2.266-.103l1.176-22.48-.01-.174.02-.033.111-2.123-10.966-16.963 11 15.37.026.452.89-16.985-9.39-17.528 9.504 14.547.925-35.212.004-.12v.116l-.155 27.767 9.347-11.008-9.385 13.4-.247 15.207 8.726-14.594-8.763 16.832-.138 8.454 12.67-20.313-12.717 23.263z"
        fill="#3f3d56"
      />
      <circle cx={80.141} cy={480.141} r={11.729} fill="#ff6584" />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M172.607 607.822v-133.55"
      />
      <circle cx={172.607} cy={474.272} r={18.886} fill="#3f3d56" />
      <path
        d="M135.412 549.048c-27.28 41.834-19.805 95.043-19.805 95.043s51.703-14.62 78.983-56.454 19.805-95.043 19.805-95.043-51.704 14.62-78.983 56.454z"
        fill="#3f3d56"
      />
      <path
        d="M115.462 643.604s-.664-.106-1.887-.353c-.975-.198-2.317-.48-3.956-.87-14.652-3.454-53.608-15.132-79.077-45.836C-1.334 558.098.008 504.385.008 504.385s48.74 7.919 80.857 42.445q2.088 2.225 4.062 4.613c27.737 33.452 30.323 78.462 30.528 89.59.028 1.667.007 2.571.007 2.571z"
        fill={color}
      />
      <path
        d="M95.802 549.048c27.28 41.834 19.805 95.043 19.805 95.043s-51.704-14.62-78.983-56.454-19.805-95.043-19.805-95.043 51.703 14.62 78.983 56.454z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M115.455 641.032c-.721.87-1.357 1.611-1.88 2.219-1.158 1.32-1.815 2.013-1.815 2.013s-.799-1.003-2.141-2.882c-7.369-10.272-31.071-46.798-29.241-88.989q.148-3.317.487-6.563 2.088 2.225 4.062 4.613c27.737 33.452 30.323 78.462 30.528 89.59z"
        opacity={0.1}
      />
      <path
        d="M155.903 556.444c-2.156 49.897-39.195 88.82-39.195 88.82s-33.544-41.973-31.387-91.87 39.195-88.82 39.195-88.82 33.543 41.974 31.387 91.87z"
        fill={color}
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M116.708 643.852l8.143-177.243"
      />
      <path
        d="M4.671 639.671v193h86.5c0-60.75 34.474-110 77-110s77 49.25 77 110h59c0-60.75 34.474-110 77-110s77 49.25 77 110h59c0-60.75 34.474-110 77-110s77 49.25 77 110h59c0-60.75 34.474-110 77-110s77 49.25 77 110h86.5v-193z"
        fill="#3f3d56"
      />
      <circle cx={136.671} cy={351.671} r={43} fill="#ff6584" />
      <circle cx={514.807} cy={268.599} r={29.385} fill="#2f2e41" />
      <path
        d="M500.78 283.444s-9.571 21.193-12.306 21.877 22.56 12.99 22.56 12.99 4.786-25.98 6.837-27.347-17.091-7.52-17.091-7.52z"
        fill="#ffb9b9"
      />
      <path
        d="M500.78 283.444s-9.571 21.193-12.306 21.877 22.56 12.99 22.56 12.99 4.786-25.98 6.837-27.347-17.091-7.52-17.091-7.52z"
        opacity={0.1}
      />
      <path
        fill="#ffb9b9"
        d="M444.037 457.091l-17.775 49.907 19.142 7.52 32.815-64.947-34.182 7.52zM506.249 458.459s35.55 49.906 37.6 50.59 16.408-11.622 16.408-11.622-17.775-43.07-23.244-45.121-30.764 6.153-30.764 6.153z"
      />
      <path
        d="M423.527 498.11l-28.03 73.151s2.051 4.102 0 4.786-6.836 11.622-6.836 12.305-4.786 1.368-4.786 3.419-4.102 18.458-4.102 18.458 7.52 16.408 12.306 11.622 6.837-14.356 6.837-14.356l6.836-17.775s-.683-9.571 4.102-10.939 7.52-18.458 7.52-18.458 7.52-7.52 8.888-9.571 25.295-38.285 23.244-38.968-25.979-13.673-25.979-13.673zM539.748 507.682l20.51-13.673s35.55 64.947 35.55 66.314-1.368 5.469 0 6.836 12.989 23.244 20.509 25.295 8.887 10.255 2.734 11.623-14.356 4.785-16.407 0a75.237 75.237 0 00-4.102-8.204s-6.837 2.05-7.52.683a62.912 62.912 0 01-2.051-6.153s-5.47-9.57-5.47-12.989a4.277 4.277 0 00-3.418-4.102s-7.52-17.775-12.305-20.51-8.888-16.407-8.888-16.407z"
        fill="#2f2e41"
      />
      <circle cx={515.136} cy={279.342} r={19.826} fill="#ffb9b9" />
      <path
        d="M456.342 399.665s-19.142 62.212-15.04 62.212 99.13 2.735 102.548-2.735-21.193-44.437-22.56-45.12-64.948-14.357-64.948-14.357z"
        fill="#2f2e41"
      />
      <path
        d="M426.945 236.956l-20.51-31.448s5.073-32.99-1.764-26.837-9 31-9 31l23.754 36.172zM612.899 294.382l18.458-1.367s21.877-23.244 23.244-15.724-17.775 23.928-17.775 23.928l-25.295 2.735z"
        fill="#ffb9b9"
      />
      <path
        d="M478.22 301.219v-6.837s-17.776-11.622-17.092-13.673-1.367-3.418-1.367-3.418-2.051-2.734-2.051-3.418-2.735-1.367-2.735-1.367l-17.091-19.826s-9.571-19.143-11.622-18.459-12.99 4.786-11.622 7.52 39.651 61.529 39.651 61.529 2.051 12.99 5.47 12.99 18.458-15.041 18.458-15.041zM524.024 309.423s15.04-.684 15.724 0 10.255 0 10.255 0 25.978-6.153 28.03-8.204 36.233-10.938 37.6-6.837 4.786 12.306 1.367 13.673-95.71 24.612-95.71 24.612z"
        fill="#3f3d56"
      />
      <circle cx={504.528} cy={237.671} r={12.159} fill="#2f2e41" />
      <path
        d="M488.315 231.085a12.16 12.16 0 0110.893-12.093 12.296 12.296 0 00-1.267-.066 12.16 12.16 0 000 24.318 12.293 12.293 0 001.267-.065 12.16 12.16 0 01-10.893-12.094z"
        fill="#2f2e41"
      />
      <ellipse
        cx={518.225}
        cy={262.368}
        rx={20.265}
        ry={12.159}
        fill="#2f2e41"
      />
      <path
        d="M494.969 294.04s-6.153 4.786-7.52 5.47-9.572-6.153-10.939-6.153-19.142 20.51-19.142 20.51 3.303 3.804 0 23.244c-1.239 7.29-3.697 38.459-3.697 42.56s-13.394 14.183-1.089 23.07 71.1 18.459 71.784 12.99-6.837-19.826-3.419-26.663 3.419-32.131 3.419-32.131l4.102-26.663 3.418-21.193s-16.066-4.444-17.433-4.444-7.52 9.571-19.484-10.596z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgEditable.propTypes = {
  color: PropTypes.string
};
SvgEditable.defaultProps = {
  color: "primary"
};
const MemoSvgEditable = React.memo(SvgEditable);
export default MemoSvgEditable;
