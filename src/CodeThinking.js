import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCodeThinking = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1082.439 449.881"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#ffb9b9"
        d="M77.591 390.495l-24.819-1.655 8.273 37.229 28.128-11.582-11.582-23.992z"
      />
      <path
        fill="#2f2e41"
        d="M305.1 321.001l-57.911-56.257-33.093 25.647-65.357 78.594 7.446 11.582 79.421-53.775 53.775 70.321 51.293-25.646-35.574-50.466z"
      />
      <path
        opacity={0.1}
        d="M305.1 321.001l-57.911-56.257-33.093 25.647-65.357 78.594 7.446 11.582 79.421-53.775 53.775 70.321 51.293-25.646-35.574-50.466z"
      />
      <path
        d="M310.064 358.23l-7.446 5.791-60.393-20.683-14.064-5.79-28.129 5.79s0-23.164 26.474-22.337l27.301 6.619 32.265 2.482z"
        fill="#ffb9b9"
      />
      <path
        fill="#2f2e41"
        d="M363.839 419.451l-18.201 11.582h-21.51l-100.104-37.229-146.433 26.474-4.137-31.438 134.024-58.738 117.478 38.883 38.883 50.466z"
      />
      <path
        d="M246.361 272.19l-12.41 2.482-2.703-3.155a16.717 16.717 0 01-2.26-18.355l34.747-45.502s9.928-22.337 25.646-13.237-13.237 23.992-13.237 23.992l-17.373 27.301 1.655 14.065z"
        fill="#ffb9b9"
      />
      <circle cx={324.956} cy={186.15} r={32.265} fill="#ffb9b9" />
      <path
        d="M310.478 209.728l14.891 35.575 35.574-14.892s-11.582-28.128-11.582-28.956-38.883 8.273-38.883 8.273z"
        fill="#ffb9b9"
      />
      <path
        d="M408.439 314.97a185.383 185.383 0 01-9.092 57.34l-2.416 7.43-11.582 52.948-12.41 3.309-9.1-11.583-18.2-13.236-13.238-21.51-11.35-18.913-3.541-5.907L305.1 302.8l-47.156-26.473-15.72-2.482 3.31-9.1 14.064-19.029 14.065-1.654 4.136-3.31 3.31 1.655 13.236-7.446 4.137 1.655 24.19 2.25 14.693-3.077 21.13-11.343 8.653 1.415 29.783 24.82a185.22 185.22 0 0111.508 64.29z"
        fill="#575a89"
      />
      <path
        d="M60.39 403.305s7.41-12.558 4.28-14.025-16.421-7.31-16.421-7.31l-19.492-6.46S.63 333.709.013 370.06s20.48 45.088 20.48 45.088 18.815 40.493 29.473 34.036 21.324-28.376 21.324-28.376-19.22-10.332-10.9-17.503z"
        fill="#2f2e41"
      />
      <path
        opacity={0.1}
        d="M399.413 307.764l-31.438 20.683-46.924 42.308-3.541-5.907-9.928-49.638h2.482l25.647-47.156 63.702 39.71z"
      />
      <path
        fill="#575a89"
        d="M335.711 263.09l-25.647 47.156h-9.1l-5.791 16.546-13.237 3.31 35.574 38.883 50.465-45.502 31.438-20.683-63.702-39.71z"
      />
      <path
        d="M299.86 162.16l-3.496 1.345a4.88 4.88 0 01-1.247-6.86l-6.46-.303a48.782 48.782 0 0172.825-5.87c.294-1.012 3.5.958 4.809 2.957.44-1.648 3.446 6.32 4.51 11.952.492-1.875 2.384 1.153.726 4.058 1.05-.154 1.525 2.534.712 4.032 1.15-.54.956 2.669-.29 4.813 1.64-.146-12.936 22.476-18.837 35.696-1.714-7.873-3.64-16.164-9.166-22.03-.94-.996-1.968-1.904-2.995-2.81l-5.553-4.903c-6.458-5.7-12.333-12.736-20.936-14.866-5.912-1.464-9.65-1.795-6.428-8.457-2.911 1.215-5.63 3.021-8.567 4.15.04-.931.45-1.973.393-2.904z"
        fill="#2f2e41"
      />
      <circle cx={341.088} cy={189.873} r={5.791} fill="#ffb9b9" />
      <path fill={color} d="M178.439 59.71h28v28h-28z" />
      <path
        d="M223.439 71.71h-34v-34h34zm-32.522-1.478h31.044V39.188h-31.044z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M73.645 146.25l7.688 26.925-26.923 7.688-7.689-26.924z"
      />
      <path
        d="M74.463 192.817l-9.336-32.694 32.694-9.335 9.335 32.693zm-7.508-31.678l8.523 29.85 29.85-8.524-8.523-29.85z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M93.493 27.32L74.375 47.777 53.918 28.658 73.036 8.201z"
      />
      <path
        d="M54 52.004l23.216-24.841 24.84 23.215-23.215 24.84zm23.286-22.752L56.09 51.932 78.77 73.13l21.197-22.68zM1026.232 5.362h-260.17V0h-117.97v5.362H386.848a17.599 17.599 0 00-17.598 17.599v356.252a17.599 17.599 0 0017.598 17.599h639.383a17.599 17.599 0 0017.598-17.599V22.961a17.599 17.599 0 00-17.598-17.599z"
        fill="#3f3d56"
      />
      <path fill={color} d="M392.845 36.464h627.391v353.913H392.845z" />
      <circle cx={706.004} cy={20.377} r={6.435} fill={color} />
      <path
        opacity={0.1}
        d="M840.813 390.377H392.845V36.464l447.968 353.913z"
      />
      <circle cx={491.013} cy={303.587} r={60.307} fill="#f2f2f2" />
      <path
        d="M504.438 348.913a75.016 75.016 0 1175.016-75.016 75.1 75.1 0 01-75.016 75.016zm0-149.051a74.035 74.035 0 1074.035 74.035 74.119 74.119 0 00-74.035-74.035zM852.392 227.332h58.605v12.246h-58.605zM781.541 131.989h200.307v5.248H781.541zM781.541 148.608h200.307v5.248H781.541zM781.541 165.228h200.307v5.248H781.541zM781.541 181.847h200.307v5.248H781.541zM781.541 198.467h200.307v5.248H781.541z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M957.356 43.644h24.492v24.492h-24.492z" />
      <path
        d="M993.22 79.507h-29.74v-29.74h29.74zm-28.448-1.293h27.154V51.06h-27.154zM1061.446 383.942h-61.23v-4.412a.875.875 0 00-.874-.874H978.35a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.874.874v4.412H928.49v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.874.874v4.412h-13.12v-4.412a.875.875 0 00-.876-.874h-20.992a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874H619.72a.875.875 0 00-.874.874v4.412h-13.12v-4.412a.875.875 0 00-.876-.874h-20.992a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.876-.874h-20.992a.875.875 0 00-.875.874v4.412H534v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-40.236a20.993 20.993 0 00-20.993 20.993v9.492a20.993 20.993 0 0020.993 20.993h698.014a20.993 20.993 0 0020.993-20.993v-9.492a20.993 20.993 0 00-20.993-20.993z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgCodeThinking.propTypes = {
  color: PropTypes.string
};
SvgCodeThinking.defaultProps = {
  color: "primary"
};
const MemoSvgCodeThinking = React.memo(SvgCodeThinking);
export default MemoSvgCodeThinking;
