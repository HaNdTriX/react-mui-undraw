import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCloseTab = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1011.007 761.966"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M666.054 432.15L559.723 759.423H215.598L109.267 432.15l278.394-202.268L666.054 432.15z"
      />
      <path
        fill="#f2f2f2"
        d="M391.83 532.363h-1.696v-1.696h-.33v1.696h-1.696v.33h1.696v1.696h.33v-1.696h1.696v-.33zM372.289 634.72h-1.696v-1.696h-.33v1.696h-1.696v.331h1.696v1.695h.33v-1.695h1.696v-.331zM483.952 665.427h-1.696v-1.695h-.331v1.695h-1.695v.331h1.695v1.696h.331v-1.696h1.696v-.331z"
      />
      <circle cx={464.411} cy={584.637} r={3.722} fill="#ff6584" />
      <circle cx={173.294} cy={422.575} r={6.514} fill="#f2f2f2" />
      <path
        d="M174.142 629.068l-.967-.218a219.977 219.977 0 01400.775-68.563 218.214 218.214 0 0128.196 67.978l-.965.22c-22.81-100.151-110.585-170.099-213.454-170.099-101.52 0-191.346 71.782-213.585 170.682z"
        fill="#f2f2f2"
      />
      <path fill="#f2f2f2" d="M502.584 371.932h9.832v388.345h-9.832z" />
      <path
        d="M603.15 421.422c.625 135.794-94.914 246.32-94.914 246.32s-96.553-109.64-97.179-245.435 94.913-246.32 94.913-246.32 96.553 109.64 97.18 245.435z"
        fill={color}
      />
      <path fill="#f2f2f2" d="M291.847 543.984h5.467v215.931h-5.467z" />
      <path
        d="M347.764 571.502c.348 75.506-52.774 136.961-52.774 136.961s-53.686-60.963-54.034-136.469 52.774-136.96 52.774-136.96 53.686 60.962 54.034 136.468z"
        fill={color}
      />
      <path
        d="M347.764 571.502c.348 75.506-52.774 136.961-52.774 136.961s-53.686-60.963-54.034-136.469 52.774-136.96 52.774-136.96 53.686 60.962 54.034 136.468z"
        opacity={0.1}
      />
      <path fill="#f2f2f2" d="M220.781 543.984h5.467v215.931h-5.467z" />
      <path
        d="M276.698 571.502c.348 75.506-52.774 136.961-52.774 136.961S170.238 647.5 169.89 571.994s52.774-136.96 52.774-136.96 53.686 60.962 54.034 136.468z"
        fill={color}
      />
      <path
        fill="#f2f2f2"
        d="M299.708 313.69h-1.695v-1.696h-.331v1.696h-1.696v.331h1.696v1.695h.331v-1.695h1.695v-.331zM280.167 416.047h-1.695v-1.695h-.331v1.695h-1.696v.331h1.696v1.696h.331v-1.696h1.695v-.331zM391.83 446.755h-1.696v-1.696h-.33v1.696h-1.696v.33h1.696v1.696h.33v-1.696h1.696v-.33z"
      />
      <circle cx={372.289} cy={365.965} r={3.722} fill="#ff6584" />
      <path
        d="M567.081 358.011a76.314 76.314 0 1135.408 28.43 24.686 24.686 0 11-35.408-28.43z"
        fill="#3f3d56"
      />
      <ellipse
        cx={724.773}
        cy={385.369}
        rx={4.431}
        ry={32.6}
        transform="rotate(-30 548.738 527.194)"
        fill={color}
      />
      <ellipse
        cx={724.773}
        cy={385.369}
        rx={32.6}
        ry={4.431}
        transform="rotate(-60 617.755 432.697)"
        fill={color}
      />
      <circle cx={79.311} cy={719.411} r={40.012} fill="#3f3d56" />
      <circle cx={79.311} cy={666.371} r={28.846} fill="#3f3d56" />
      <circle cx={79.311} cy={621.706} r={20.471} fill="#3f3d56" />
      <path
        d="M0 761.353q78.303-10.214 150.573-17.364l-18.533-31.073c6.44-1.793 34.334 16.193 34.334 16.193l-23.557-89.862c32.196 3.614 47.166 95.267 47.166 95.267l36.509-30.526-17.984 34.575c147.433-12.878 274.65-16.848 381.586-15.855l-15.862-26.595c6.44-1.793 34.334 16.193 34.334 16.193l-23.557-89.862c32.195 3.614 47.165 95.267 47.165 95.267l36.51-30.526-19.048 36.621c89.623 2.496 162.648 8.43 218.984 14.896-15.82-41.331-71.128-81.088-71.128-81.088 42.539 11.106 64.662 29.172 76.108 45.912 1.694-50.797-2.845-145.062-45.933-249.847 0 0 85.763 161.777 72.818 269.586l-1.646 19.15c74.692 9.801 112.168 19.551 112.168 19.551z"
        fill="#3f3d56"
      />
      <path
        d="M857.265 654.257l-4.943 56.84-22.242 4.943-4.942-14.828s8.65-40.777 8.65-48.19zM795.482 614.715s9.885 24.714 13.592 27.185-11.121 34.599-11.121 34.599l-22.242-3.707s7.414-25.95 1.236-40.777z"
        fill="#a0616a"
      />
      <path
        d="M802.278 628.926s9.267 3.089 12.974 16.681 3.707 14.828 3.707 14.828l-6.178 13.593h-3.707s-6.178 21.006-4.943 28.42-8.65 35.834-25.949 34.599-13.592-22.242-13.592-22.242l8.65-43.249s0-11.12 2.47-11.12 22.243 3.706 22.243 3.706v3.707s14.21-19.153 4.325-38.923zM833.787 704.92v-7.415s25.95 3.707 25.95 7.414v8.65s22.241 46.955-2.472 46.955-29.656-9.885-29.656-9.885v-13.592s-12.357-6.179-12.357-9.886 12.058-36.453 12.058-36.453.299 19.154 6.477 14.211z"
        fill="#2f2e41"
      />
      <circle cx={863.443} cy={53.721} r={39.541} fill="#a0616a" />
      <path
        d="M878.89 83.995s-4.943 23.478-4.943 25.95-23.478 13.592-23.478 13.592l-21.007-3.707-7.414-22.242s12.357-18.535 12.357-25.95z"
        fill="#a0616a"
      />
      <path
        d="M875.581 100.285s-12.755 20.78-31.29 14.602a25.562 25.562 0 01-18.132-23.895l-60.951 21.424 11.12 90.204-9.885 105.032 7.414 13.592h108.74s3.706-18.535 4.942-18.535 3.707-3.707 2.471-4.943-3.707-2.471-2.471-6.178 2.471-44.484 2.471-44.484L927.08 139.6z"
        fill="#d0cde1"
      />
      <path
        d="M922.756 335.454l-22.243 29.656s-3.707-30.892-8.65-32.127l12.357-8.65zM675.622 311.976s-33.364 21.007-29.656 34.6 42.012-23.479 42.012-24.714-12.356-9.886-12.356-9.886z"
        fill="#a0616a"
      />
      <path
        d="M883.214 311.976h2.471l3.707 17.3s19.771 17.3 9.886 44.484l-19.771 129.745-2.471 150.752-22.242 6.178-24.714-4.942-6.178-201.415s-8.65-18.535-4.943-24.713-1.235-4.943-1.235-4.943l-25.95 71.67s8.65 23.477 0 30.89c0 0 1.236 3.708 0 4.944s-7.413 6.178-4.942 8.65 3.707 0 3.707 3.706 12.357 34.599 7.414 74.14l-16.064 24.714-14.828-8.65-27.185-76.611s6.179-11.121 0-13.593-7.414-4.942-4.942-8.65 2.471-16.063-1.236-22.241 0-16.064 0-16.064l13.592-124.803s-6.178-33.363 14.828-50.662l3.707-13.593s30.892 22.242 117.389 3.707zM897.734 21.864S885.179-5.336 861.117.94s-37.663 15.693-38.71 25.109.524 23.54.524 23.54 2.616-19.355 19.355-15.17 42.893 1.046 42.893 1.046l4.185 37.662s4.708-6.8 9.939-2.615 15.17-40.278-1.57-48.648z"
        fill="#2f2e41"
      />
      <path
        d="M908.545 139.6h18.535s16.064 13.593 14.828 39.542l8.65 72.904s0 35.835-14.828 61.784l-16.064 30.892s-6.178-17.3-24.713-14.828l9.885-25.95v-6.178s3.707-4.943 3.707-6.178-4.942-1.236-1.235-3.707 7.414-27.185 7.414-27.185-1.236-4.943-2.472-6.178 1.236-4.943 1.236-4.943l-2.471-3.707-16.064-60.548zM786.214 108.709l-21.006 3.707s-12.357 12.356-17.3 27.184l-9.885 44.485-16.064 32.127s-18.535 18.535-32.127 60.548l-19.771 37.07 21.006 12.357s58.077-67.962 65.49-91.44l32.128-61.783z"
        fill="#d0cde1"
      />
    </svg>
  );
};

SvgCloseTab.propTypes = {
  color: PropTypes.string
};
SvgCloseTab.defaultProps = {
  color: "primary"
};
const MemoSvgCloseTab = React.memo(SvgCloseTab);
export default MemoSvgCloseTab;
