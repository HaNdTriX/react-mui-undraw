import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgAdventure = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 637.962"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={174.023} cy={76.131} r={30.997} fill="#2f2e41" />
      <path
        d="M79.615 449.308l19.044-66.046 6.483 2.026s-7.699 49.433-19.855 61.994z"
        fill="#2f2e41"
      />
      <path
        d="M152.143 94.77s2.431 25.932-3.241 33.225 3.646 21.475 3.646 21.475l17.018 20.26 25.122-11.346 3.646-21.07-2.43-14.586s-8.51-8.51-4.863-23.906-38.898-4.052-38.898-4.052z"
        fill="#ffb9b9"
      />
      <path
        d="M152.143 94.77s2.431 25.932-3.241 33.225 3.646 21.475 3.646 21.475l17.018 20.26 25.122-11.346 3.646-21.07-2.43-14.586s-8.51-8.51-4.863-23.906-38.898-4.052-38.898-4.052z"
        opacity={0.1}
      />
      <path
        fill="#ffb9b9"
        d="M166.73 579.778v16.612l22.285 4.457-2.026-27.552-20.259 6.483zM233.586 573.295l-4.863 23.095 9.725 6.888 17.018-12.56-2.026-19.855-19.854 2.432z"
      />
      <path
        d="M191.041 598.821s-8.509-14.382-24.311-5.368c0 0-2.836 15.903-5.673 17.119s-18.638 24.31 0 26.337 27.958-4.052 27.958-4.052-3.647 3.138 2.026 1.517 3.241-10.535 3.241-10.535zM246.551 589.097s-12.56 8.914-14.586 4.862-5.268-3.647-5.268-3.647-11.345 42.769-4.051 44.795a24.584 24.584 0 0014.181-.733s9.724-6.81 9.724-1.543 27.148 4.888 38.493 4.483 5.268-8.914 5.268-8.914l-14.992-14.587-17.018-24.716s-7.699-6.888-11.75 0zM127.022 318.027l17.017 163.29s9.32 99.676 10.94 101.297 12.156 6.888 35.252 0l-5.268-130.47 9.725-81.037 22.285 55.915s5.267 150.324 8.914 150.324 25.932 7.294 31.2-1.62 4.456-104.944 4.456-104.944-2.43-151.54-20.259-156.401-114.262 3.646-114.262 3.646z"
        fill="#2f2e41"
      />
      <circle cx={174.023} cy={81.804} r={27.958} fill="#ffb9b9" />
      <path
        d="M175.644 159.6s-2.836-17.424-2.836-20.665-12.561-5.267-12.561-5.267-9.725-10.94-11.75-9.32-32.82 22.286-37.683 25.122-10.13 14.992-9.724 15.802 25.526 53.485 25.526 53.485 10.94 32.415 3.242 49.432-17.423 50.649-3.242 57.537 83.064 21.88 95.624 8.914 21.475-16.613 24.717-16.613-13.371-56.32-9.725-61.588-1.62-38.088-1.62-38.088l18.638-52.269s-1.62-29.173-38.493-35.656L193.7 119.731z"
        fill="#575a89"
      />
      <path
        d="M99.874 325.32s-2.026 19.45-2.026 25.122-9.724 38.898 4.457 42.95 12.966-44.165 12.966-44.165V324.51zM268.026 307.087s2.431 18.639 1.216 22.69 11.75 39.304-5.673 41.33-12.966-42.14-12.966-42.14v-21.88z"
        fill="#ffb9b9"
      />
      <path
        d="M96.227 442.825l11.75-62.399h3.647a24.543 24.543 0 013.647 23.5c-4.862 13.777-8.914 38.899-8.914 38.899z"
        fill="#2f2e41"
      />
      <path
        d="M107.167 160.41l-6.077 4.862s-8.104 128.85-6.078 138.574-7.293 23.5.81 24.716 17.828 6.483 22.285 3.242 5.268-14.992 6.889-17.829 4.457-36.466 4.457-36.466 8.509-33.63 3.241-58.752-10.13-50.649-10.13-50.649zM235.611 150.28l18.639 15.802 14.182 82.658s8.914 64.425 2.025 65.235-17.423-1.215-21.88 0-8.103-2.025-8.103-2.025-4.863-25.932-4.863-26.338-3.241-29.983-3.241-29.983l-4.052-33.226 6.078-36.466z"
        fill="#575a89"
      />
      <path
        d="M147.686 532.776s-2.634 7.565-6.264 17.865a4161.251 4161.251 0 01-5.543 15.664c-1.26 3.55-2.54 7.144-3.8 10.652-2.01 5.612-3.963 11.001-5.67 15.628-2.252 6.107-4.08 10.892-5.06 13.124-4.457 10.13-85.9-6.077-92.383-10.13s-8.103-17.827-8.914-37.276c-.004-.102-.008-.203-.008-.304-.105-3.926.896-9.773 2.57-16.633.834-3.428 1.839-7.107 2.957-10.928 1.5-5.126 3.201-10.498 4.98-15.847 7.642-22.974 16.649-45.43 16.649-45.43s15.802-10.94 21.475-18.233 36.872-12.966 36.872-12.966c8.914.406 29.173 34.846 37.277 45.381s4.862 49.433 4.862 49.433z"
        fill="#3f3d56"
      />
      <circle cx={102.305} cy={467.541} r={3.647} fill="#2f2e41" />
      <circle cx={107.978} cy={471.593} r={2.026} fill="#2f2e41" />
      <path
        d="M141.422 550.64a4161.251 4161.251 0 01-5.543 15.665L25.57 530.438c1.5-5.126 3.201-10.498 4.98-15.847zM132.078 576.957c-2.01 5.612-3.962 11.001-5.668 15.628L20.044 558c-.105-3.926.896-9.773 2.57-16.633z"
        fill="#f2f2f2"
      />
      <path
        d="M102.305 468.351s8.104 35.657 3.242 67.261 12.155 61.183 12.155 61.183"
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M107.978 471.188s-15.802 57.536-16.208 65.64-6.888 66.045-14.992 72.123"
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        d="M152.56 64.743s-6.329-16.454 2.847-21.833l2.532 7.278s23.099-13.923 29.11-10.759l-5.695 7.595s26.896 0 28.794 10.442l-9.492.316s10.125 6.645 10.442 17.403l-20.251 1.266 9.809 5.696s-36.705 5.062-45.565-9.493z"
        fill="#2f2e41"
      />
      <path
        d="M147.078 65.394s7.294 14.586 17.018 10.94 0-17.018 0-17.018l-6.483-3.242z"
        fill="#2f2e41"
      />
      <path
        d="M776 295.514L643.75 130.25a44.403 44.403 0 01-21.389 10.8c-24.897 4.903-49.212-12.099-54.308-37.975a47.966 47.966 0 0116.559-46.725L539.518 0 282.615 219.563l236.482 295.514z"
        fill="#f2f2f2"
      />
      <circle cx={611.674} cy={95.915} r={37.284} fill="#f2f2f2" />
      <path
        fill={color}
        d="M366.977 275.247l11.407-13.203 38.433 33.21-11.407 13.202zM614.038 511.346l11.408-13.202 34.067 29.437-11.408 13.202z"
      />
      <path
        d="M687 399.81v1.024q-.035 3.856-.221 7.677a170.99 170.99 0 01-341.41 2.233q-.35-5.426-.35-10.934a170.143 170.143 0 0131.441-98.837q2.46-3.49 5.118-6.85a178.745 178.745 0 013.746-4.596 171.023 171.023 0 01238.293-22.612 170.206 170.206 0 016.06 5.141q2.373 2.111 4.665 4.316a170.528 170.528 0 0152.065 109.061q.593 7.119.593 14.377z"
        fill="#3f3d56"
      />
      <path
        d="M516.01 592.32c-106.15 0-192.51-86.36-192.51-192.51a191.88 191.88 0 0151.366-130.915l4.263 3.957a186.079 186.079 0 00-49.813 126.958c0 102.944 83.75 186.694 186.694 186.694a185.217 185.217 0 00134.025-56.725l4.176 4.048A190.987 190.987 0 01516.01 592.32z"
        fill={color}
      />
      <path
        fill={color}
        d="M495.072 588.249h48.854v48.854h-48.854zM381.579 294.122a.951.951 0 01.232.14c.92.756-.232 2.21-.093 3.408.163 1.535 2.21 1.873 3.757 2.024 1.547.163 3.502 1.407 2.769 2.78-3.885 1.338-7.817.023-11.784-1.5a170.144 170.144 0 00-31.44 98.836q0 5.514.348 10.935a4.42 4.42 0 001.059.57c1.163.442 2.512.36 3.582.988.85.5 1.42 1.384 2.269 1.85 2.43 1.326 5.804-1.222 8.072.36a20.857 20.857 0 011.664 1.699c2.093 1.814 5.536.593 7.956 1.954 1.559.872 2.361 2.617 3.199 4.199 2.082 3.955 5.455 7.84 9.91 8.154a26.688 26.688 0 014.21.14c1.373.314 2.723 1.512 2.502 2.896-.384 2.384.79 4.99.477 7.375-.57 4.362-6.747 6.27-7.27 10.631a26.264 26.264 0 01-.163 2.873c-.28 1.14-1.14 2.07-1.443 3.21-.581 2.153.966 4.305 2.653 5.747 1.698 1.454 3.722 2.71 4.652 4.734.977 2.152.5 4.653.815 6.991.698 5.106 5.106 8.887 9.643 11.33a10.068 10.068 0 013.768 2.745c1.164 1.686 1.047 3.908 1.443 5.92.954 4.92 5.095 8.98 5.21 13.994.082 3.57-1.895 6.804-3.082 10.166a23.462 23.462 0 00-1.058 10.98 171.81 171.81 0 0021.089 15.297 6.144 6.144 0 00.872-1.954 3.865 3.865 0 00-1.803-4.002 9.562 9.562 0 003.338-2.14 3.275 3.275 0 00.605-3.7c2.048.257 4.479.385 5.828-1.186 1.082-1.256 1.012-3.14.582-4.734a19.525 19.525 0 01-1.164-4.815 86.623 86.623 0 0014.215-.477 9.227 9.227 0 00-4.327-5.42c2.14-.361 4.082-2.92 4.757-4.98a12.68 12.68 0 00.093-6.432 3.422 3.422 0 01-.07-1.675 3.296 3.296 0 011.699-1.64q5.304-3.053 10.608-6.095a6.396 6.396 0 001.698-1.245c1.105-1.314.942-3.28.372-4.897s-1.477-3.14-1.698-4.839c-.651-5.083 4.793-8.735 6.63-13.528a20.318 20.318 0 001-5.92c.152-2.164.164-4.665-1.488-6.05-1.594-1.337-4.071-1.034-5.735-2.279-1.523-1.14-2.047-3.338-3.71-4.257-1.512-.838-3.397-.303-5.083-.698-2.955-.686-4.816-4.095-7.84-4.409-1.699-.186-3.63.652-5.025-.337-1.233-.884-1.28-2.64-1.513-4.13a11.535 11.535 0 00-9.305-9.328c-1.757-.28-3.664-.175-5.165-1.14-1.512-.977-2.198-2.804-3.396-4.164-1.908-2.176-4.932-2.955-7.759-3.618q-5.758-1.344-11.504-2.699c-2.036-.488-4.664-.744-5.77 1.047a7.87 7.87 0 00-.674 2.152 6.673 6.673 0 01-6.258 4.7 7.394 7.394 0 00-4.35-3.374 27.448 27.448 0 01-3.537-.837 4.954 4.954 0 01-2.14-6.875 6.172 6.172 0 00-1.058-7.41c-1.955-1.756-4.781-2.186-7.41-2.012-.686-1.5.465-3.187 1.698-4.28 1.245-1.082 2.745-2.152 3.013-3.78.43-2.56-2.838-4.502-5.316-3.746-2.477.767-4.06 3.175-5.106 5.548a16.734 16.734 0 01-2.06 3.943 4.042 4.042 0 01-3.907 1.606c-2.048-.524-2.827-2.955-3.28-5.002a32.614 32.614 0 01-1.094-8.387 10.948 10.948 0 013.164-7.63c3.385-3.118 8.596-2.815 13.167-2.315a3.354 3.354 0 01.35-4.42 5.026 5.026 0 014.559-1.117 6.256 6.256 0 013.524 2.105c1.303 1.582 1.675 3.734 2.653 5.526.988 1.803 3.198 3.338 5.001 2.373 1.57-.838 1.815-3.001 1.431-4.735-.395-1.721-1.221-3.408-1.082-5.176.268-3.362 3.769-5.397 6.852-6.781s6.607-3.257 7.095-6.607a6.174 6.174 0 01.372-1.908 3.73 3.73 0 011.384-1.303c8.992-5.944 18.146-11.97 28.43-15.214.534-.175.592.011 1.139-.117.768-.442.256-1.663-.477-2.152s-1.71-.872-1.896-1.733c-.128-.628.244-1.256.337-1.896a2.367 2.367 0 00-3.105-2.396c-.826-1.093.802-2.361 2.128-2.734a58.139 58.139 0 0112.156-1.977 2.164 2.164 0 011.384.233 1.645 1.645 0 01.105 2.256 12.74 12.74 0 01-1.85 1.687 5.08 5.08 0 00-1.326 5.106c2.152 1.094 4.478 2.222 6.863 1.838 2.373-.384 4.478-3.059 3.362-5.188-1.036-1.989-4.165-2.442-4.7-4.618-.628-2.547 2.978-4.815 2.164-7.304-.35-1.094-1.442-1.745-2.28-2.525a6.882 6.882 0 01-1.5-7.607 8.668 8.668 0 01-7.585-2.373c-1.814-1.826-3.257-4.722-5.839-4.63-2.361.07-4.397 2.827-6.607 1.99-.547-.21-1.116-.628-1.64-.384a1.356 1.356 0 00-.616 1.012c-.559 2.687.407 5.746-1.059 8.072-1.594 2.525-5.28 2.874-7.212 5.153-1.047 1.233-1.454 2.897-2.42 4.2s-3 2.14-4.163 1a5.732 5.732 0 00-1.56-6.98 14.989 14.989 0 00-3.442-1.674 20.434 20.434 0 01-3.85-2.14 3.815 3.815 0 01-1.408-1.513 3.477 3.477 0 01.093-2.396 9.794 9.794 0 017.782-6.444c1.535-.21 3.327-.14 4.35-1.314.535-.617.815-1.56 1.605-1.803a2.34 2.34 0 011.478.174c1.919.675 3.827 1.35 5.746 2.024a3.936 3.936 0 002.047.337 1.377 1.377 0 001.198-1.454c-.186-.953-1.651-1.407-1.512-2.373a1.509 1.509 0 01.477-.814 20.554 20.554 0 0116.296-6.432c.722 1.198-.418 2.605-1.384 3.617-.954 1.024-1.721 2.838-.558 3.618a3.064 3.064 0 001.524.349 13.291 13.291 0 014.07 1.233c1.99.86 3.944 1.814 5.852 2.838a7.376 7.376 0 01.14-3.769 2.56 2.56 0 013.024-1.64c1.14.442 1.721 1.954 2.943 2.094 1.616.186 2.256-2.21 1.582-3.7s-2.024-2.721-2.129-4.361c-.081-1.094.337-2.454-.535-3.117a2.314 2.314 0 00-1.035-.373q-10.958-2.006-21.927-4.024c-1.302-.245-3.175-.059-3.233 1.256-.035.744.628 1.477.337 2.152-.314.721-1.338.663-2.082.919a2.827 2.827 0 00-1.629 2.99 8.149 8.149 0 001.373 3.36c-1.43-.592-3.583-.697-5.013-1.302a19.296 19.296 0 00-1.257-4.827 1.704 1.704 0 00-2.221-1.373c-1.885.291-3.77.57-5.654.86a2.187 2.187 0 00-1.29.501c-.734.78-.012 2.024-.036 3.094a2.9 2.9 0 01-2.245 2.501 8.462 8.462 0 01-3.582-.046l-7.91-1.222a12.957 12.957 0 005.979-4.001c1.047-1.233 1.605-3.536.093-4.118a3.609 3.609 0 00-1.373-.105c-3.582.024-6.409-2.966-9.759-4.234a9.593 9.593 0 00-3.292-.604zM686.779 408.511a4.2 4.2 0 01-3.56 1.687c-3.64-.314-5.176-5.56-8.782-6.154a1.405 1.405 0 00-.953.093c-.535.291-.628 1.012-.663 1.617-.152 3.001-.28 6.119.895 8.887 1.71 4.048 6.142 7.445 5.211 11.737-5.001-2.315-7.607-7.933-8.782-13.319-1.186-5.385-1.372-11.039-3.49-16.133-1.616 2.058-4.99.36-6.455-1.803-1.396-2.048-2.257-4.42-3.606-6.503-1.35-2.07-3.42-3.931-5.886-4.048-2.594-.116-4.85 1.664-6.828 3.35a15.802 15.802 0 00-4.245 4.723c-1.385 2.792-1.024 6.072-1.094 9.178-.07 3.35-.78 6.897-3.07 9.363-2.292 2.455-6.515 3.316-9.039 1.094a10.196 10.196 0 01-2.524-4.548 221.318 221.318 0 01-6.84-24.404c-.418 1.884-2.082 4.315-3.664 3.21a3.267 3.267 0 01-.837-1.093c-2.955-4.99-8.41-7.991-13.935-9.794-5.514-1.792-11.318-2.63-16.774-4.607a42.885 42.885 0 01-8.712-4.338 6.86 6.86 0 00-.419 7.002 5.61 5.61 0 006.305 2.64c1.21-.395 2.233-1.232 3.431-1.651 1.198-.407 2.815-.21 3.339.954.511 1.105-.256 2.442.128 3.606.57 1.756 3.233 1.896 4.164 3.5a3.241 3.241 0 01-.873 3.746 15.676 15.676 0 01-3.512 2.164c-3.909 2.175-6.689 5.886-10.109 8.77-3.42 2.897-8.247 5.002-12.318 3.153.966-4.92-4.885-8.527-5.967-13.424-.36-1.617-.175-3.326-.675-4.897-.733-2.28-2.757-3.838-4.408-5.56a21.855 21.855 0 01-5.99-15.878c.092-2.024.464-4.082 0-6.06-.454-1.966-2.095-3.873-4.119-3.792-4.617.21-10.445.559-12.865-3.385-.872-1.407-1.244-3.466.012-4.548a4.392 4.392 0 013.338-.57c3.478.338 6.945.686 10.423 1.024 2.43.232 5.06.43 7.153-.838s3.001-4.652 1.059-6.153c-1.408-1.093-3.943-1.035-4.362-2.768-.337-1.454 1.268-3.095.395-4.316-.616-.86-2.012-.628-2.861.023a18.694 18.694 0 01-2.408 2.106c-1.663.86-3.64.035-5.432-.524s-4.188-.605-5.048 1.059c-.977 1.85.849 4.292-.105 6.153-1.28 2.455-5.583 1.059-7.375 3.176-2.047 2.42 1.396 6.048.71 9.142a5.7 5.7 0 01-5.618-.314 5.439 5.439 0 01-2.35-5.071c.163-1.396.896-2.827.407-4.141a4.834 4.834 0 00-2.454-2.245q-5.06-2.81-10.12-5.595c-.942 1.745.244 3.897 1.733 5.211 1.477 1.303 3.338 2.291 4.316 4.013a5.274 5.274 0 01-1.978 6.956 1.227 1.227 0 01-1.012.174 1.402 1.402 0 01-.651-.872c-1.78-4.571-4.467-9.073-8.748-11.458-4.292-2.396-10.445-1.896-13.26 2.117-.663.954-1.117 2.048-1.698 3.06-3.083 5.362-9.713 7.898-15.901 7.735a3.064 3.064 0 01-1.733-.407c-1-.686-.954-2.152-.803-3.362.221-1.71.43-3.408.651-5.118a4.099 4.099 0 011.129-2.803c1.151-.908 2.803-.338 4.269-.36a5.377 5.377 0 004.897-3.781 6.077 6.077 0 00-1.699-6.049c-.663-.628-1.558-1.419-1.21-2.268a1.885 1.885 0 011.315-.884c2.617-.756 5.397-.954 7.968-1.861 2.582-.896 5.083-2.734 5.7-5.397.186-.815.267-1.803 1-2.21a3.24 3.24 0 011.163-.233 5.661 5.661 0 004.85-5.898c1.234-.86 2.967-.22 4.165.698 1.186.92 2.245 2.129 3.699 2.524 2.71.745 5.327-1.663 8.142-1.675 1.187 0 2.408.42 3.513.012 1.129-.407 1.803-1.524 2.664-2.35.872-.837 2.385-1.337 3.187-.442-.232-1.686-.453-3.361-.686-5.036a9.901 9.901 0 008.06-1.466l-8.781-2.966a1.895 1.895 0 01-.826-.442c-.64-.686 0-1.756.512-2.536 1.244-1.873 1.454-4.955-.594-5.886-1.395-.64-2.989.128-4.327.873-2.14 1.186-4.28 2.384-6.42 3.57-.198 1.222 1.29 1.92 2.21 2.734a3.706 3.706 0 01-2.42 6.48 4.643 4.643 0 01.826 3.92l-4.315.313a1.853 1.853 0 01-1.396-.279c-.466-.407-.396-1.128-.512-1.733a3.744 3.744 0 00-3.164-2.757 10.922 10.922 0 00-4.409.407 2.686 2.686 0 01-1.907-.046 1.903 1.903 0 01-.745-.954 4.864 4.864 0 01.977-4.676 26.767 26.767 0 013.676-3.385 21.428 21.428 0 006.386-9.887c2.373-1 4.827-2.35 7.212-3.35a28.81 28.81 0 015.99-2.012 28.31 28.31 0 015.875-.28c2.675.047 5.362.093 8.037.152a19.344 19.344 0 017.038 1.012c2.198.907 4.14 2.873 4.292 5.246a1.61 1.61 0 01-.524 1.477 1.885 1.885 0 01-1.012.232c-2.221.07-3.163.629-5.385.71 1.407 1.5 2.99 3.083 5.036 3.35 3.606.465 6.2-3.269 7.864-6.514a3.174 3.174 0 003.315 2.943 6.685 6.685 0 002.5-.977 49.195 49.195 0 0123.323-6.025 2.511 2.511 0 011.92-2.769c1.663-.326 3.151 1.105 3.954 2.594.791 1.489 1.291 3.21 2.57 4.327 1.269 1.117 3.723 1.059 4.223-.547.489-1.547-1.128-2.873-2.466-3.792-1.35-.907-2.757-2.593-1.85-3.943 6.84-1.524 13.738-3.036 20.752-3.338a8.83 8.83 0 003.49-.605 2.712 2.712 0 001.628-2.873 7.93 7.93 0 01-8.259-3.118c7.2-.593 14.738-1.116 21.66.5l6.06 5.142c-1.152 1.198-2.687 2.326-1.85 3.525a2.579 2.579 0 002.129.732c1.465.024 2.931.058 4.385.058a170.528 170.528 0 0152.065 109.062c-2.443-.093-4.688 3.001-4.374 5.7.372 3.129 2.629 5.641 4.246 8.34a12.709 12.709 0 01.721 1.361z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M0 636.962h888"
      />
      <circle
        cx={366.352}
        cy={65.27}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={802.352}
        cy={346.27}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={701.619}
        cy={199.27}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={604.808} cy={323.921} r={16.559} fill="#3f3d56" />
      <circle cx={657.999} cy={270.697} r={21.828} fill="#fff" />
      <path
        d="M680.074 248.069a30.86 30.86 0 00-43.64.54c-11.9 12.2-28.892 73.811-28.892 73.811s61.17-18.512 73.072-30.712a30.86 30.86 0 00-.54-43.64zm-32.061 32.865a14.301 14.301 0 1120.223-.25 14.301 14.301 0 01-20.223.25z"
        fill="#57b894"
      />
    </svg>
  );
};

SvgAdventure.propTypes = {
  color: PropTypes.string
};
SvgAdventure.defaultProps = {
  color: "primary"
};
const MemoSvgAdventure = React.memo(SvgAdventure);
export default MemoSvgAdventure;
