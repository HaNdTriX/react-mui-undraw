import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMyCurrentLocation = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 910.908 704.996"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={697.317}
        cy={542.77}
        rx={48.503}
        ry={98.965}
        fill="#3f3d56"
      />
      <path
        d="M692.838 704.76c19.426-116.551.195-232.681-.001-233.84l-3.779.64c.196 1.153 19.316 116.673 0 232.572z"
        fill={color}
      />
      <path
        fill={color}
        d="M652.807 524.87l1.808-3.38 43.86 23.46-1.808 3.38zM699.101 556.715l43.855-23.473 1.808 3.379-43.854 23.473z"
      />
      <ellipse
        cx={813.855}
        cy={386.144}
        rx={94.866}
        ry={193.564}
        fill="#e6e6e6"
      />
      <path
        d="M803.288 702.677c37.944-227.66.383-454.492 0-456.756l-3.78.64c.383 2.259 37.834 228.48 0 455.487z"
        fill={color}
      />
      <path
        fill={color}
        d="M727.661 349.516l1.808-3.38 85.786 45.886-1.808 3.38zM818.21 415.032l85.773-45.91 1.81 3.38-85.774 45.909z"
      />
      <path
        d="M593.53 703.285H88.933a7.008 7.008 0 01-7-7V377.44a7.008 7.008 0 017-7H593.53a7.008 7.008 0 017 7v318.845a7.008 7.008 0 01-7 7z"
        fill="#e6e6e6"
      />
      <path
        d="M135.338 409.077a3.003 3.003 0 00-3 3V661.65a3.003 3.003 0 003 3h411.787a3.003 3.003 0 003-3V412.077a3.003 3.003 0 00-3-3z"
        fill="#fff"
      />
      <path
        fill="#e6e6e6"
        d="M126.572 457.542h424.553v15.815H126.572zM126.572 534.859h424.553v15.815H126.572zM189.774 492.687h177.478v15.815H189.774zM126.572 616.569h424.553v15.815H126.572z"
      />
      <path
        fill="#e6e6e6"
        d="M181.866 408.077h15.815v218.157h-15.815zM477.076 408.077h15.815v135.568h-15.815zM357.586 408.077h15.815v257.571h-15.815zM267.09 537.495h15.815v128.153H267.09z"
      />
      <circle cx={365.494} cy={544.767} r={20.208} fill={color} />
      <path fill="#3f3d56" d="M910.513 704.996H0v-2.182h910.908l-.395 2.182z" />
      <circle cx={367.916} cy={300.067} r={124.655} fill={color} />
      <path
        fill={color}
        d="M369.135 502.707l-39.382-67.274-39.382-67.274 77.952-.469 77.952-.469-38.57 67.743-38.57 67.743z"
      />
      <circle cx={368.917} cy={299.283} r={44.724} fill="#fff" />
      <path
        d="M365.033.64s-26.674-7.513-34.563 28.928-1.879 54.85-1.879 54.85l59.546-6.95S405.043 11.723 365.033.641z"
        fill="#2f2e41"
      />
      <path
        d="M325.126 158.476S286 162.373 292.969 178.17s6.969 17.19 6.969 17.19l34.379 61.325 11.15-11.615s-12.544-27.41-12.544-36.237-13.008-24.159-13.008-24.159l22.764-1.858zM432.345 177.24l13.008 28.34s9.756 9.756 20.442 48.781 13.008 37.632 13.008 37.632l-16.26 3.252s-18.12-42.278-24.159-45.53-13.473-32.985-13.473-32.985l-21.37-26.946 6.503-14.403z"
        fill="#ffb9b9"
      />
      <path
        d="M416.549 144.719l19.977 37.167s-25.088-11.615-28.804 13.937l-22.765-17.654s-31.592 10.22-50.64 6.504c0 0 5.575-17.654-14.402-25.552l45.065-5.575-1.859-9.756 4.646-9.292zM337.104 248.322s-12.543-1.859-9.291 9.291l6.504 22.3s-8.363 22.765 4.646 17.655 21.37-36.703 21.37-36.703 5.576-24.158 0-24.158-23.229-3.717-21.37 0-1.859 11.615-1.859 11.615zM477.41 285.488s-16.26-4.18-19.978 2.323-2.787 27.876-2.787 28.34 5.575 5.11 7.433 5.11 13.473 20.907 29.27 13.474-13.938-49.247-13.938-49.247z"
        fill="#2f2e41"
      />
      <circle
        cx={504.762}
        cy={165.846}
        r={18.119}
        transform="rotate(-80.783 358.153 187.43)"
        fill="#ffb9b9"
      />
      <path
        d="M375.2 42.974s3.717 19.513 6.97 22.3-24.624 6.97-24.624 6.97 4.182-13.474-.929-20.443 18.584-8.827 18.584-8.827z"
        fill="#ffb9b9"
      />
      <path
        d="M423.982 153.546c-3.164 0-11.22-1.31-20.251-2.997-7.815-1.459-16.368-3.191-23.113-4.594-7.225-1.506-12.386-2.63-12.386-2.63s-1.859 11.615-7.898 10.22c-5.204-1.198-20.753-55.513-24.958-70.523a5.222 5.222 0 012.31-5.868l21.356-13.041 5.473 2.09s9.245-7.145 14.611-7.289 14.658-1.538 14.658-1.538 10.685.93 12.544 8.828 2.787 57.144 9.756 65.97 16.725 21.372 7.898 21.372z"
        fill="#d0cde1"
      />
      <path
        d="M358.94 179.563s0 18.119 12.08 15.331.928-19.513.928-19.513z"
        fill="#ffb9b9"
      />
      <path
        d="M392.39 181.421s-4.181 21.371-13.008 18.119 0-22.3 0-22.3z"
        fill="#ffb9b9"
      />
      <path
        d="M411.903 130.781s-4.548 10.853-8.172 19.768c-7.814-1.459-16.368-3.191-23.113-4.594a13.302 13.302 0 012.016-3.56c3.252-3.716 1.394-4.645 1.394-4.645-2.788-5.575-.465-13.008-.465-13.008-5.575-14.867 2.788-33.45 2.788-33.45z"
        opacity={0.15}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M387.744 91.291s-8.362 18.584-2.787 33.45c0 0-2.323 7.434.464 13.009 0 0 1.859.93-1.393 4.646s-6.04 16.725-3.717 19.512-3.252 7.898-1.858 10.686-2.323 6.504-2.323 6.504 13.937 2.788 16.26 6.969c0 0 2.788-3.252 1.394-6.969s-.465-5.11.93-7.433 5.574-7.434 6.039-9.757 12.544-31.127 12.544-31.127l-5.665-52.492z"
        fill="#d0cde1"
      />
      <path
        d="M339.427 78.283l-.868.158a5.222 5.222 0 00-4.29 5.176c.033 4.665.296 12.943 1.442 24.4 1.858 18.583 8.362 46.458 9.756 49.246a148.298 148.298 0 007.433 14.402c4.182 6.969 5.11 4.646 4.182 7.898a4.893 4.893 0 001.393 5.11s8.363-9.292 16.725-4.181a10.352 10.352 0 00.93-4.181c0-2.323 1.393-4.646-.93-6.04s1.394-7.433-2.322-10.685-4.182-2.788-3.717-6.04a13.839 13.839 0 00-.93-6.504z"
        fill="#d0cde1"
      />
      <path
        d="M367.108 15.983s-7.514 19.911-25.923 28.176l-3.005-17.657z"
        fill="#2f2e41"
      />
      <ellipse cx={377.988} cy={32.289} rx={2.555} ry={4.878} fill="#ffb9b9" />
    </svg>
  );
};

SvgMyCurrentLocation.propTypes = {
  color: PropTypes.string
};
SvgMyCurrentLocation.defaultProps = {
  color: "primary"
};
export default SvgMyCurrentLocation;
