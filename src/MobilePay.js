import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMobilePay = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 964.745 722.157"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={123} cy={415.883} r={123} fill="#f2f2f2" />
      <circle cx={143} cy={397.883} r={123} fill={color} />
      <path fill="#3f3d56" d="M171.858 652.558H330.27v1.875H171.858z" />
      <path
        d="M251 654.883c-84.364 0-153-68.636-153-153s68.636-153 153-153 153 68.635 153 153-68.636 153-153 153zm0-304c-83.262 0-151 67.738-151 151s67.738 151 151 151 151-67.739 151-151-67.738-151-151-151z"
        fill="#3f3d56"
      />
      <path
        d="M687.902 169.224h-3.913V62.037A62.037 62.037 0 00621.952 0H394.863a62.037 62.037 0 00-62.037 62.037v588.035a62.037 62.037 0 0062.037 62.036h227.09a62.037 62.037 0 0062.036-62.036V245.52h3.913z"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M292.268 710.187h672.477v2.397H292.268z" />
      <path
        d="M622.988 17.607h-29.642a22.01 22.01 0 01-20.379 30.323H442.87a22.01 22.01 0 01-20.378-30.323h-27.687a46.328 46.328 0 00-46.328 46.328v587.172a46.328 46.328 0 0046.328 46.329h228.183a46.328 46.328 0 0046.329-46.329V63.935a46.328 46.328 0 00-46.329-46.328zM618.008 290a12.035 12.035 0 01-12 12h-58a12.035 12.035 0 01-12-12v-3a12.035 12.035 0 0112-12h58a12.035 12.035 0 0112 12zm6.5-53a12.035 12.035 0 01-12 12h-208a12.035 12.035 0 01-12-12v-3a12.035 12.035 0 0112-12h208a12.035 12.035 0 0112 12zm0-53a12.035 12.035 0 01-12 12h-208a12.035 12.035 0 01-12-12v-3a12.035 12.035 0 0112-12h208a12.035 12.035 0 0112 12zm0-53a12.035 12.035 0 01-12 12h-208a12.035 12.035 0 01-12-12v-3a12.035 12.035 0 0112-12h208a12.035 12.035 0 0112 12z"
        fill={color}
      />
      <circle cx={410.008} cy={236} r={7} fill="#d0cde1" />
      <circle cx={433.008} cy={236} r={7} fill="#d0cde1" />
      <circle cx={456.008} cy={236} r={7} fill="#d0cde1" />
      <circle cx={479.008} cy={236} r={7} fill="#d0cde1" />
      <circle cx={554.008} cy={289} r={7} fill="#d0cde1" />
      <circle cx={577.008} cy={289} r={7} fill="#d0cde1" />
      <circle cx={600.008} cy={289} r={7} fill="#d0cde1" />
      <path
        d="M395.925 413.011c-7.273-4.373-16.042-4.04-19.376-3.705 1.27 3.1 5.079 11.005 12.351 15.38 7.29 4.385 16.048 4.041 19.377 3.71-1.27-3.099-5.079-11.008-12.352-15.385zM430.1 499.795h-45.455a10.227 10.227 0 000 20.455h45.454a10.227 10.227 0 000-20.455z"
        fill="#d0cde1"
      />
      <path
        d="M635.933 391.84h-254.85a22.575 22.575 0 00-22.575 22.576v124.168a22.575 22.575 0 0022.575 22.575h254.85a22.575 22.575 0 0022.575-22.575V414.416a22.575 22.575 0 00-22.575-22.575zm-261.155 15.4c.503-.09 12.437-2.121 22.318 3.825 9.881 5.945 13.678 17.44 13.834 17.926l.4 1.24-1.283.227a34.04 34.04 0 01-5.53.407c-4.488 0-10.99-.743-16.788-4.232-9.881-5.944-13.677-17.44-13.834-17.925l-.4-1.24zm55.321 115.283h-45.454a12.5 12.5 0 110-25h45.454a12.5 12.5 0 010 25zm206.818-2.273a13.676 13.676 0 01-13.636 13.636h-34.09a13.676 13.676 0 01-13.637-13.636v-20.455a13.676 13.676 0 0113.636-13.636h34.091a13.676 13.676 0 0113.636 13.636z"
        fill="#d0cde1"
      />
      <path
        d="M599.986 516.273h-14.773a3.977 3.977 0 000 7.954h14.773a3.977 3.977 0 000-7.954zm0 5.682h-14.773a1.705 1.705 0 010-3.41h14.773a1.705 1.705 0 010 3.41zM627.258 516.273h-14.772a3.977 3.977 0 000 7.954h14.772a3.977 3.977 0 000-7.954zm0 5.682h-14.772a1.705 1.705 0 110-3.41h14.772a1.705 1.705 0 010 3.41zM599.986 506.045h-14.773a3.977 3.977 0 000 7.955h14.773a3.977 3.977 0 000-7.955zm0 5.682h-14.773a1.705 1.705 0 010-3.409h14.773a1.705 1.705 0 010 3.41zM627.258 506.045h-14.772a3.977 3.977 0 000 7.955h14.772a3.977 3.977 0 000-7.955zm0 5.682h-14.772a1.705 1.705 0 110-3.409h14.772a1.705 1.705 0 010 3.41zM599.986 495.818h-14.773a3.977 3.977 0 100 7.955h14.773a3.977 3.977 0 000-7.955zm0 5.682h-14.773a1.705 1.705 0 010-3.41h14.773a1.705 1.705 0 010 3.41zM627.258 495.818h-14.772a3.977 3.977 0 100 7.955h14.772a3.977 3.977 0 000-7.955zm0 5.682h-14.772a1.705 1.705 0 110-3.41h14.772a1.705 1.705 0 010 3.41z"
        fill="#d0cde1"
      />
      <path fill="#f2f2f2" d="M837.008 60h-28V32h28z" />
      <path fill={color} d="M831.008 67h-28V39h28z" />
      <path d="M776.008 49h46v46h-46zm44 2h-42v42h42z" fill="#3f3d56" />
      <path fill="#f2f2f2" d="M262.008 263h28v28h-28z" />
      <path fill={color} d="M268.008 256h28v28h-28z" />
      <path d="M323.008 274h-46v-46h46zm-44-2h42v-42h-42z" fill="#3f3d56" />
      <path
        d="M738.028 421.848s-17.446 36.346-5.815 37.8 14.538-32.711 14.538-32.711zM804.178 654.464l-11.63 20.611 21.08 13.191 5.034-24.338-14.484-9.464z"
        fill="#ffb9b9"
      />
      <path
        d="M799.212 677.938s-6.386-10.397-8.696-8.657-11.837 9.282-11.837 9.282l-12.41 11.886s-41.927 4.433-15.285 19.123 41.363 2.51 41.363 2.51 37.314 1.94 36.712-8.47-12.636-26.88-12.636-26.88-15.167 10.168-17.211 1.206z"
        fill="#2f2e41"
      />
      <path
        d="M799.212 677.938s-6.386-10.397-8.696-8.657-11.837 9.282-11.837 9.282l-12.41 11.886s-41.927 4.433-15.285 19.123 41.363 2.51 41.363 2.51 37.314 1.94 36.712-8.47-12.636-26.88-12.636-26.88-15.167 10.168-17.211 1.206z"
        opacity={0.1}
      />
      <path
        d="M855.79 421.485L844.886 553.42s-.363 78.872-11.994 94.137-11.994 22.898-11.994 22.898l-23.989-12.358s7.996-.726 4.362-5.815-14.539 0-4.362-7.27 12.358-7.506 9.814-10.658a17.57 17.57 0 01-3.271-6.787l6.542-81.416-12.358-141.75z"
        fill="#2f2e41"
      />
      <path
        d="M855.79 421.485L844.886 553.42s-.363 78.872-11.994 94.137-11.994 22.898-11.994 22.898l-23.989-12.358s7.996-.726 4.362-5.815-14.539 0-4.362-7.27 12.358-7.506 9.814-10.658a17.57 17.57 0 01-3.271-6.787l6.542-81.416-12.358-141.75z"
        opacity={0.1}
      />
      <path
        fill="#ffb9b9"
        d="M825.986 654.464l10.177 26.896 29.077-10.904-18.173-18.9-21.081 2.908z"
      />
      <path
        d="M840.425 669.797s-10.865-6.79-12.223-4.074-6.791 14.26-6.791 14.26l-6.112 16.976s-37.348 23.768-5.432 25.126 40.064-16.977 40.064-16.977 35.99-15.618 30.558-25.125-24.446-19.367-24.446-19.367-9.507 16.65-15.618 9.181zM763.47 421.848l-5.815 121.397s28.35 80.688 53.066 93.773c0 0 0 15.992 5.815 18.9a14.6 14.6 0 017.27 8.723l31.984-7.996s-7.996-7.997-5.089-11.631-9.45-11.631-9.45-11.631l-31.984-77.78s-5.089-2.181-6.542-9.45-4.362-7.27 2.907-8.724 7.27-8.723 7.27-8.723l23.988-110.492z"
        fill="#2f2e41"
      />
      <circle cx={789.64} cy={202.317} r={29.077} fill="#ffb9b9" />
      <path
        d="M815.446 204.135s2.18 37.073 5.088 40.707-30.53 2.908-30.53 2.908 2.18-31.258 0-34.165 25.442-9.45 25.442-9.45z"
        fill="#ffb9b9"
      />
      <path
        d="M825.26 233.575s-27.624-2.908-37.8 5.815a74.796 74.796 0 01-10.411 7.448 21.353 21.353 0 00-10.36 17.68l-5.4 165.326s82.143-7.269 97.409 0c0 0 .727-16.719 2.18-18.9 1.06-1.59 2.893-64.99 3.808-99.237a75.408 75.408 0 00-19.085-52.63c-4.406-4.876-9.329-8.964-14.526-10.963 0 0 1.453-13.812-5.816-14.539z"
        fill="#575a89"
      />
      <path
        d="M780.917 248.114a21.472 21.472 0 00-15.799 17.777l-10.37 73.815-14.539 58.88s-7.27 6.543-4.361 10.178-3.635 18.9-3.635 18.9l18.173 5.815s2.18-15.265 5.815-15.992c3.195-.64 38.952-96.159 47.57-119.299 1.189-3.19 1.861-5.005 1.861-5.005s-1.454-48.704-24.715-45.07z"
        fill="#575a89"
      />
      <path
        d="M805.269 292.82l-43.98 118.974s42.526-80.448 43.98-118.975z"
        opacity={0.1}
      />
      <path
        d="M804.83 210.885c-2.459-.146-4.86.685-7.302 1.009-8.737 1.16-17.826-5.18-19.755-13.78a10.573 10.573 0 00-1.01-3.292c-1.345-2.195-4.407-2.614-6.931-2.109s-4.918 1.686-7.489 1.821c-3.969.209-7.78-2.235-9.895-5.6a18.993 18.993 0 01-2.43-11.471l1.904 1.997a9.665 9.665 0 00.861-5.253 6.096 6.096 0 015.774 1.477c1.678.179.412-3.112 1.658-4.25a2.884 2.884 0 012.03-.379c3.569.035 6.457-2.696 9.27-4.894a39.393 39.393 0 0116.637-7.589c4.03-.786 8.317-.912 12.14.589a25.931 25.931 0 018.198 5.815c5.985 5.755 11.284 12.517 13.774 20.437a34.404 34.404 0 01.165 19.95c-1.004 3.386-4.027 14.982-8.454 15.252-5.561.34-2.222-9.317-9.145-9.73z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgMobilePay.propTypes = {
  color: PropTypes.string
};
SvgMobilePay.defaultProps = {
  color: "primary"
};
export default SvgMobilePay;
