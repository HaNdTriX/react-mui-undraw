import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgUpToDate = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 910 685.33"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M874 632H0V62l741 135 133 435z" />
      <path
        d="M302.251 595H112.646s-3.844-56.37 18.896-57.01 20.178 24.982 48.683-10.249 63.095-33.309 67.579-12.49-8.648 37.472 15.373 32.348 58.611 8.327 39.074 47.401z"
        fill="#d0cde1"
      />
      <path
        d="M204.248 595.013l-.64-.026c1.492-37.113 9.265-60.958 15.523-74.427 6.794-14.624 13.341-20.544 13.407-20.602l.425.478c-.064.058-6.535 5.92-13.275 20.444-6.223 13.412-13.953 37.16-15.44 74.133zM272.871 595.09l-.615-.18a99.365 99.365 0 0125.017-41.62l.43.474a98.69 98.69 0 00-24.832 41.325zM142.51 595.044l-.635-.088a69.765 69.765 0 00-6.275-40.778 56.148 56.148 0 00-9.904-14.45l.444-.463a56.85 56.85 0 0110.034 14.63 70.404 70.404 0 016.335 41.15z"
        fill="#f2f2f2"
      />
      <path d="M910 595H34V23h876zm-874-2h872V25H36z" fill={color} />
      <path
        d="M332.072 595.299H80.413l-.058-.853c-.144-2.12-3.355-52.144 12.854-69.992a17.752 17.752 0 0112.972-6.225c10.565-.3 17.205 3.657 22.56 6.833 10.093 5.988 16.761 9.944 41.006-20.02 26.264-32.462 54.601-39.446 70.892-35.563 10.525 2.51 17.78 9.603 19.903 19.46 2.01 9.334 1.37 18.104.856 25.151-.551 7.54-.986 13.496 2.11 16.195 2.586 2.252 7.746 2.457 16.239.645 17.274-3.685 41.377-.532 53.475 15.1 6.51 8.409 11.637 23.695-.897 48.763zm-249.941-1.83H330.94c9.34-18.948 9.631-34.956.836-46.32-11.099-14.34-34.383-18.114-51.648-14.43-9.227 1.969-14.725 1.643-17.82-1.055-3.787-3.299-3.323-9.657-2.735-17.707.506-6.93 1.136-15.556-.82-24.633-1.968-9.141-8.725-15.726-18.538-18.065-15.771-3.763-43.317 3.133-69.047 34.933-25.237 31.193-32.84 26.684-43.36 20.444-5.421-3.216-11.577-6.862-21.575-6.579a15.99 15.99 0 00-11.67 5.627c-14.568 16.04-12.789 61.023-12.432 67.785zM127.261 266.343h179.127v2.013H127.261zM127.261 280.432h179.127v2.013H127.261zM127.261 294.521h179.127v2.013H127.261zM127.261 201.711h179.127v2.013H127.261zM127.261 215.8h179.127v2.013H127.261zM127.261 229.888h179.127v2.013H127.261z"
        fill={color}
      />
      <path fill="#d0cde1" d="M130.904 151.157h40.29v32.736h-40.29z" />
      <path
        d="M165.319 178.857h-41.97v-34.415h41.97zm-40.29-1.68h38.61v-31.056h-38.61z"
        fill={color}
      />
      <circle cx={91} cy={162} r={8} fill="#d0cde1" />
      <path
        fill={color}
        d="M357.261 496.343h179.127v2.013H357.261zM357.261 510.432h179.127v2.013H357.261zM357.261 524.521h179.127v2.013H357.261zM357.261 431.711h179.127v2.013H357.261zM357.261 445.8h179.127v2.013H357.261zM357.261 459.888h179.127v2.013H357.261z"
      />
      <path fill="#d0cde1" d="M360.904 381.157h40.29v32.736h-40.29z" />
      <path
        d="M395.319 408.857h-41.97v-34.415h41.97zm-40.29-1.68h38.61v-31.056h-38.61z"
        fill={color}
      />
      <circle cx={321} cy={392} r={8} fill="#d0cde1" />
      <path
        d="M736.337 66.355l19.295 47.495 11.874 32.653 31.169-46.011S779.38 81.197 779.38 55.965zM678.453 570.991l-8.906 44.526 25.232 20.779 10.39-65.305h-26.716zM823.907 560.601l-2.969 53.432 25.232-4.453 2.968-46.011-25.231-2.968z"
        fill="#a0616a"
      />
      <circle cx={757.859} cy={56.707} r={34.137} fill="#a0616a" />
      <path
        d="M835.78 198.45s11.874 103.896 2.969 103.896-51.948-8.905-60.853-16.326-37.106-4.453-37.106-4.453-20.779 16.326-31.169 7.421 7.422-112.8 7.422-112.8l-4.453-63.822s19.295-5.937 28.2 2.968l2.716-3.22 7.718-9.114 11.83 10.85.133.504 4.32 15.822s6.322-21.491 10.79-25.974a3.143 3.143 0 011.083-.742c4.453-1.484 19.295-14.842 19.295-14.842l10.597 11.918 1.277 1.44 37.105 10.39z"
        fill="#d0cde1"
      />
      <path
        d="M718.527 283.051l-2.969 14.842s-16.326 2.969-11.873 34.138L691.81 441.863l-19.295 136.549 35.621 4.452 68.274-201.854 41.559 191.465h37.105l-7.42-213.728s5.936-44.527-14.843-65.306-96.475-22.264-114.285-10.39zM684.39 618.486s2.968-11.874-4.453-13.358-13.358 4.452-14.842 7.42-35.622 44.528-35.622 44.528-25.231 29.684 11.874 28.2 38.59-19.295 38.59-19.295 0-2.969 7.421-2.969 26.716-10.39 25.232-17.81-13.966-33.072-13.966-33.072-8.298 21.198-14.234 6.356zM849.138 600.675s-13.358-8.905-20.779-2.968-10.39 7.42-10.39 7.42l-.12.9a72.651 72.651 0 003.529 32.578c.88 2.639-.852 4.539-.44 6.597 2.226 11.131 4.453 25.232 26.716 19.295s1.484-63.822 1.484-63.822z"
        fill="#2f2e41"
      />
      <path
        d="M838.749 315.704s-25.232 26.716-10.39 35.622 23.748-28.2 23.748-28.2zM674.113 37.647s17.507-32.31.873-37.095-15.69 33.361-15.69 33.361z"
        fill="#a0616a"
      />
      <path
        fill="#2f2e41"
        d="M763.187 114.354l-4.586 12.854-15.095-15.095 7.718-9.113 11.829 10.85.134.504zM809.272 100.536l-17.276 18.509-13.7-14.843a3.143 3.143 0 011.084-.742c4.453-1.484 19.295-14.842 19.295-14.842z"
      />
      <path
        d="M828.36 116.818l19.294-4.452s20.78 16.326 28.2 72.727-20.779 146.938-20.779 146.938l-22.263-13.358s11.874-71.243 10.39-81.633-10.39-50.463-10.39-50.463z"
        fill="#d0cde1"
      />
      <path
        d="M731.156 20.038l-6.21-2.258S737.93 4.796 755.995 5.925l-5.08-5.08s12.419-4.517 23.709 7.338c5.935 6.232 12.802 13.557 17.083 21.808h6.65l-2.776 5.551 9.714 5.551-9.97-.997a28.01 28.01 0 01-.943 14.376l-2.258 6.21s-9.032-18.064-9.032-20.322v5.645s-6.21-5.08-6.21-8.468l-3.387 3.952-1.694-6.21-20.886 6.21 3.387-5.08-12.984 1.693 5.08-6.21s-12.286 8.489-15.24 13.548c-3.145 5.384-7.904 14.113-7.904 14.113l-3.387-5.645s-5.08-25.403 11.29-33.87z"
        fill="#2f2e41"
      />
      <path
        d="M720.011 115.334l-7.421-2.968-39.332-5.195 2.226-70.5-17.81-16.327s-48.98 89.053 1.484 121.706 66.79 38.59 66.79 38.59z"
        fill="#d0cde1"
      />
      <path
        d="M437.087 371.587A19.913 19.913 0 10457 391.5a19.913 19.913 0 00-19.913-19.913zm-3.436 28.824l-8.565-8.565 2.402-2.403 6.172 6.171 13.025-13.025 2.402 2.402zM205.087 141.587A19.913 19.913 0 10225 161.5a19.913 19.913 0 00-19.913-19.913zm-3.436 28.824l-8.565-8.565 2.402-2.403 6.172 6.171 13.025-13.025 2.402 2.402z"
        fill={color}
      />
    </svg>
  );
};

SvgUpToDate.propTypes = {
  color: PropTypes.string
};
SvgUpToDate.defaultProps = {
  color: "primary"
};
const MemoSvgUpToDate = React.memo(SvgUpToDate);
export default MemoSvgUpToDate;
