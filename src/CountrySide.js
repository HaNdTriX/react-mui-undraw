import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCountrySide = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1169.108 798.867"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M957.39 438.398c-31.824 40.46-19.46 99.567.762 146.905 6.77 15.849 14.428 32.617 11.572 49.613-3.494 20.784-22.043 35.982-41.519 44.036-35.503 14.683-77.988 11.184-110.61-9.11-28.192-17.538-48.381-46.058-77.054-62.798-47.984-28.014-109.06-17.435-161.164 1.862-36.863 13.652-77.164 31.407-113.793 17.14-25.774-10.04-43.59-34.475-53.296-60.376-4.687-12.505-8.089-26.04-17.038-35.953-5.321-5.893-12.265-10.075-19.378-13.602-64.953-32.205-146.989-14.96-210.078-50.679-42.608-24.124-69.885-69.63-81.963-117.08s-10.67-97.205-7.604-146.072c2.18-34.728 6.089-71.803 28.279-98.606 23.473-28.353 63.759-38.896 100.172-33.507s69.417 24.597 98.454 47.22c36.29 28.274 69.944 63.482 114.5 74.936 30.342 7.8 62.26 3.533 93.555 2.055 52.316-2.47 104.654 3.023 156.683 9.038 49.808 5.758 99.976 12.095 147.426 28.298 33.579 11.466 60.499 32.28 92.206 46.821 20.668 9.478 43.205 12.096 62.774 24.168 24.105 14.871 46.204 40.738 40.028 71.006-5.872 28.777-36.023 43.211-52.914 64.685z"
        fill={color}
        opacity={0.1}
      />
      <path
        d="M23.726 537.88s183-48 420 74 496-96 491-129 172 0 172 0v295h-1083z"
        fill={color}
        opacity={0.1}
      />
      <circle cx={151.106} cy={49.735} r={49.735} fill="#ffdf9c" />
      <path
        d="M499.962 254.133l-8.101 50.389s-10.126 33.256-9.113 49.38 0 38.297 0 38.297-24.303 44.342-4.05 62.482 26.327-57.444 26.327-57.444-3.038-32.249 4.05-49.38 8.1-54.42 8.1-54.42z"
        fill="#ffcdd3"
      />
      <path
        d="M499.962 254.133l-8.101 50.389s-10.126 33.256-9.113 49.38 0 38.297 0 38.297-24.303 44.342-4.05 62.482 26.327-57.444 26.327-57.444-3.038-32.249 4.05-49.38 8.1-54.42 8.1-54.42z"
        opacity={0.05}
      />
      <path
        d="M618.603 427.406l14.008 52.47 13.164 61.474s7.088 13.1 0 40.31l23.29 75.584s13.163 48.374 21.263 49.381-8.1 38.296-8.1 38.296L659.95 731.82s-6.076-30.234-14.177-37.288-34.428-77.599-34.428-77.599l-8.1-49.381s-25.315-67.521-47.592-83.646-29.365-42.326-29.365-42.326z"
        fill="#ffcdd3"
      />
      <path
        d="M526.289 441.58s7.088 26.202 29.365 42.326 47.592 83.646 47.592 83.646l8.1 49.381s26.328 70.545 34.428 77.599c5.944 5.18 10.805 22.846 12.962 31.876.79 3.275 1.215 5.412 1.215 5.412l22.277 13.1s16.201-37.287 8.1-38.295c-1.255-.15-2.632-1.45-4.07-3.527-7.797-11.307-17.194-45.854-17.194-45.854l-23.29-75.583c7.089-27.21 0-40.311 0-40.311l-13.163-61.475-14.004-52.465z"
        opacity={0.05}
      />
      <path
        d="M396.677 703.602l8.101 19.148 36.453-4.031a83.706 83.706 0 01-1.863-15.822c-.324-11.439 1.438-26.878 10.977-38.598 17.214-21.164 43.541-73.568 43.541-73.568s26.327-28.218 32.403-39.304l50.69-84.623-1.58-7.588 13.67-12.597h-85.057l-20.252 78.606-16.201 32.25s-34.428 29.225-47.592 90.7c0 0-13.133 40.955-21.497 53.18a14.694 14.694 0 01-1.793 2.247z"
        fill="#ffcdd3"
      />
      <path
        d="M658.736 726.408c.79 3.275 1.215 5.412 1.215 5.412l22.277 13.1s16.201-37.287 8.1-38.295c-1.255-.15-2.632-1.45-4.07-3.527a5.674 5.674 0 00-2.592 6.279 15.573 15.573 0 001.6 4.303c3.037 5.039-10.126 13.1-10.126 13.1-4.436 5.675-11.635 2.682-16.404-.372z"
        opacity={0.1}
      />
      <path
        d="M684.678 711.391c-1.39-5.813 5.914-9.71 10.016-5.347a19.491 19.491 0 012.723 3.605c4.05 7.054 34.428 13.1 40.503 11.085s27.34-4.03 22.277 11.086-96.196 37.288-96.196 37.288-10.126-14.11-9.113-24.187a115.178 115.178 0 000-20.156s14.176 13.101 21.264 4.031c0 0 13.164-8.062 10.126-13.1a15.57 15.57 0 01-1.6-4.305z"
        fill="#dce6f2"
      />
      <path
        d="M396.677 703.602l8.101 19.148 36.453-4.031a83.706 83.706 0 01-1.863-15.822 4.996 4.996 0 00-8.13-1.16c-1.884 2.016-3.788 4.143-5.195 5.896-4.05 5.039-17.214 2.016-17.214 2.016-3.413 1.128-7.463-3.77-10.36-8.294a14.694 14.694 0 01-1.792 2.247z"
        opacity={0.1}
      />
      <path
        d="M430.22 703.754a4.984 4.984 0 018.477 2.09c1.842 7.167 5.883 16.425 14.685 19.93 15.19 6.046 36.454 16.124 29.366 25.194s-31.39 17.132-52.655 10.077-51.642-24.186-51.642-24.186l15.189-40.311s8.1 17.132 14.176 15.116c0 0 13.164 3.024 17.214-2.015 1.41-1.755 3.311-3.876 5.19-5.895z"
        fill="#dce6f2"
      />
      <path
        d="M567.805 137.23s-24.302 33.257-18.226 56.436-48.605-15.116-48.605-15.116 28.353-25.195 23.29-66.514z"
        fill="#ffcdd3"
      />
      <path
        d="M487.81 452.665c40.504 24.187 89.108 14.11 89.108 14.11l-1.012-7.055c.709.07 1.417.14 2.106.201 38.711 3.406 47.51-8.264 47.51-8.264-6.055-16.94-10.804-52.858-13.76-80.622-.426-3.99-.81-7.81-1.165-11.388-.8-8.092-1.397-14.905-1.782-19.51a804.38 804.38 0 01-.506-6.39l-4.05-30.233s-11.14-36.28-6.076-60.467c4.312-20.6-9.74-28.04-14.002-29.795a13.528 13.528 0 00-2.059-.608c-5.553-1.31-11.738-6.962-17-13.022a68.283 68.283 0 00-28.403-19.289 147.847 147.847 0 01-9.417-3.8c-7.089-8.061-26.328-3.022-26.328-3.022-23.29 15.116-11.138 64.497-11.138 64.497l9.68 27.533c5.397 15.328 13.083 29.679 21.953 43.314 14.885 22.857-5.306 54.118-5.306 54.118-31.39 25.194-28.352 89.692-28.352 89.692z"
        fill="#ff8aa1"
      />
      <path
        d="M574.387 405.804l3.625 54.117c38.711 3.406 47.51-8.264 47.51-8.264-6.055-16.94-10.804-52.858-13.76-80.622-.426-3.99-.81-7.81-1.165-11.388z"
        opacity={0.05}
      />
      <path
        d="M510.088 264.21s18.226 34.265 24.302 49.382 6.075 10.078 9.113 15.116 35.44 27.21 35.44 27.21l32.819 15.117a1419.28 1419.28 0 01-2.947-30.898l-30.884-20.499s-21.264-13.1-22.277-30.233-14.176-48.373-14.176-48.373-26.328-28.218-37.466-15.117 6.076 38.296 6.076 38.296z"
        opacity={0.1}
      />
      <path
        d="M541.478 235.993s13.163 31.241 14.176 48.373 22.277 30.234 22.277 30.234l66.831 44.342s57.718 19.148 38.478 41.319-49.617-24.187-49.617-24.187l-54.68-25.194s-32.402-22.172-35.44-27.21-3.038 0-9.113-15.117-24.302-49.381-24.302-49.381-17.214-25.195-6.076-38.296 37.466 15.117 37.466 15.117z"
        fill="#ffcdd3"
      />
      <path
        d="M549.579 249.094s-20.252-15.117-24.303-20.156c-1.788-2.224-4.562-1.895-7.104-.834a32.042 32.042 0 01-15.046 2.472c-4.43-.378-8.734-.126-8.227 2.394 1.012 5.038-3.038-26.203-3.038-26.203l17.214-6.046 22.277 12.093z"
        opacity={0.1}
      />
      <path
        d="M549.579 247.078s-20.252-15.116-24.303-20.155c-1.788-2.225-4.562-1.896-7.104-.835a32.042 32.042 0 01-15.046 2.473c-4.43-.378-8.734-.126-8.227 2.393 1.012 5.039-3.038-26.202-3.038-26.202l17.214-6.047 22.277 12.093z"
        fill="#ff8aa1"
      />
      <path
        d="M597.265 249.094a24.947 24.947 0 01-22.878-1.512M530.846 114.556c.757-6.025-6.738 6.487-7.595-.504l43.542 25.194s-2.486 3.406-5.665 8.785a44.667 44.667 0 01-4.968.285c-13.1 0-17.246-24.726-25.314-33.76z"
        opacity={0.1}
      />
      <ellipse
        cx={557.173}
        cy={102.462}
        rx={44.048}
        ry={43.838}
        fill="#ffcdd3"
      />
      <path
        d="M576.935 103.228c-.331 2.752-.269 5.66-1.584 8.104-1.842 3.42-5.814 4.977-9.134 7.012-13.455 8.25-17.447 26.81-13.159 41.95 1.517 5.356 3.91 10.793 2.916 16.27-1.708 9.413-12.481 14.292-22.055 15.128s-19.596-.708-28.55 2.768c-15.037 5.838-21.659 23.39-34.441 33.2-14.868 11.41-35.347 10.703-54.073 12.023-6.924.488-13.95 1.318-20.752-.06s-13.513-5.46-15.916-11.942c-3.39-9.145 2.784-19.06 9.956-25.699s15.924-12.239 19.984-21.109c5.458-11.924 1.046-26.984 7.912-38.163a11.734 11.734 0 015.584-5.097c3.024-1.13 6.38-.35 9.608-.239 12.505.428 23.17-9.5 28.978-20.53s8.276-23.514 13.588-34.79c6.01-12.76 16.027-24.021 29.048-29.56 7.629-3.245 15.955-4.436 23.92-6.745 9.053-2.624 17.696-6.709 26.97-8.41s19.778-.578 26.558 5.944c6.382 6.139 8.243 15.771 14.343 22.187 2.305 2.425 5.266 4.476 6.375 7.626 2.629 7.464-10.125 8.094-14.379 11.082a27.834 27.834 0 00-11.697 19.05z"
        opacity={0.1}
      />
      <path
        d="M574.91 102.22c-.331 2.752-.27 5.661-1.585 8.104-1.842 3.42-5.813 4.977-9.133 7.012-13.455 8.25-17.447 26.81-13.16 41.95 1.518 5.356 3.91 10.793 2.917 16.27-1.709 9.413-12.481 14.292-22.055 15.128s-19.596-.708-28.55 2.768c-15.037 5.838-21.659 23.39-34.441 33.2-14.868 11.41-35.347 10.703-54.074 12.023-6.924.488-13.95 1.318-20.751-.06s-13.514-5.46-15.916-11.941c-3.39-9.145 2.784-19.061 9.955-25.7s15.925-12.238 19.985-21.109c5.458-11.923 1.046-26.983 7.912-38.163a11.734 11.734 0 015.584-5.096c3.024-1.13 6.38-.35 9.608-.24 12.505.429 23.17-9.5 28.978-20.53s8.276-23.514 13.588-34.79c6.01-12.76 16.027-24.021 29.048-29.56 7.628-3.244 15.955-4.436 23.92-6.745 9.053-2.624 17.696-6.709 26.97-8.41s19.778-.578 26.558 5.944c6.382 6.14 8.242 15.771 14.343 22.187 2.305 2.425 5.266 4.476 6.375 7.627 2.629 7.463-10.125 8.093-14.379 11.081a27.834 27.834 0 00-11.697 19.05zM60.226 778.38s-33-59 8-106 89-21 89-21 60 28 46 95c0 0-8 34-32 32z"
        fill={color}
      />
      <path
        d="M60.226 778.38s-33-59 8-106 89-21 89-21 60 28 46 95c0 0-8 34-32 32z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        d="M112.059 778.465l36.167-110.085M181.226 685.38s-18.62-8.761-37.31-3.88c0 0-9.69-24.12-31.69-28.12M190.226 723.38s-31.664-22.885-54.832-15.942c0 0-26.168-31.058-44.168-29.058M183.226 764.38s-27.064-19.573-60.532-18.287c0 0-25.468-30.713-49.468-32.713M126.507 778.465a70.976 70.976 0 00-12.926-4.633s-20.855-27.119-62.605-18.285"
      />
      <path
        d="M417.226 778.38s33-54-49-134-77-95-70-107c0 0-66 8-52 107s74 134 74 134z"
        fill={color}
      />
      <path
        d="M370.726 778.38s-24.5-71-61.5-114-30-114-11-127"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M957.447 138.772c-14.736 14.954-15.705 37.894-15.705 37.894s22.923-1.305 37.66-16.26 15.705-37.895 15.705-37.895-22.924 1.306-37.66 16.26z"
        fill={color}
      />
      <path
        d="M80.447 366.772c-14.736 14.954-15.705 37.894-15.705 37.894s22.923-1.305 37.66-16.26 15.705-37.895 15.705-37.895-22.924 1.306-37.66 16.26z"
        fill="#fc6681"
      />
      <path
        d="M901.447 415.772c-14.736 14.954-15.705 37.894-15.705 37.894s22.923-1.305 37.66-16.26 15.705-37.895 15.705-37.895-22.924 1.306-37.66 16.26zM179.284 399.335c-19.418-7.983-41.02-.2-41.02-.2s9.882 20.725 29.3 28.708 41.02.2 41.02.2-9.881-20.726-29.3-28.708z"
        fill={color}
      />
      <path
        d="M423.449 369.35c-11.225-17.743-33.348-23.888-33.348-23.888s-3.925 22.623 7.3 40.366 33.347 23.887 33.347 23.887 3.925-22.622-7.3-40.365z"
        fill="#ffd037"
      />
      <circle cx={694.357} cy={442.691} r={8.669} fill="#fc6681" />
      <circle cx={714.585} cy={535.161} r={8.669} fill="#fc6681" />
      <path
        d="M531.726 563.38s-33-37-45 9-19 52-43 40-49 45 10 86 26 81.5 26 81.5h211s28-81.5-33-109.5-59-49-57-77-69-30-69-30z"
        fill={color}
      />
      <path
        d="M503.726 549.31s137 180.57 90 230.57M468.304 615.289s32.422 27.59 85.422 13.59 39.931-49.915 39.931-49.915"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M690.175 702.573s-70.531-34.208-105.99-21.45c-92.323 33.215-160.96-56.243-160.96-56.243"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M485.226 778.38s43-32-11-144c0 0-72-89 0-173 0 0-157 4-154 150s78.5 167 78.5 167z"
        fill={color}
      />
      <path
        d="M445.059 778.38s-10.833-77-39.833-124a100.81 100.81 0 01-12.185-30.708c-9.695-42.63 4.125-87.209 35.437-117.717l45.748-44.575"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M485.226 778.38s43-32-11-144c0 0-72-89 0-173 0 0-157 4-154 150s78.5 167 78.5 167z"
        opacity={0.1}
      />
      <path
        d="M870.665 777.499S723.52 744.603 910.742 552.11c0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill={color}
      />
      <path
        d="M870.665 777.499c-3.231-.722-143.975-36.154 40.077-225.389 0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M872.597 778.593s77.719-117.085 38.145-226.483"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M261.665 777.499S114.52 744.603 301.742 552.11c0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill={color}
      />
      <path
        d="M261.665 777.499c-3.231-.722-143.975-36.154 40.077-225.389 0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M263.597 778.593s77.719-117.085 38.145-226.483"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M590.665 777.499S443.52 744.603 630.742 552.11c0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill={color}
      />
      <path
        d="M590.665 777.499c-3.231-.722-143.975-36.154 40.077-225.389 0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M592.597 778.593s77.719-117.085 38.145-226.483"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M1042.665 777.499s-147.144-32.896 40.077-225.389c0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill={color}
      />
      <path
        d="M1042.665 777.499c-3.231-.722-143.975-36.154 40.077-225.389 0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M1044.597 778.593s77.719-117.085 38.145-226.483"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M768.665 777.499S621.52 744.603 808.742 552.11c0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill={color}
      />
      <path
        d="M768.665 777.499c-3.231-.722-143.975-36.154 40.077-225.389 0 0 80.704 76.488 51.097 171.571-11.903 38.23-50.197 61.832-88.981 54.27q-1.09-.213-2.193-.452z"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M770.597 778.593s77.719-117.085 38.145-226.483"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
      />
      <path
        d="M256.737 766c4.344-3.292 8.418-7.177 9.67-11.905a10.067 10.067 0 00-6.757-12.127c-6.205-1.936-12.837 1.574-17.864 5.117s-10.79 7.589-17.37 6.839c6.817-4.924 10.058-12.924 8.178-20.192a7.818 7.818 0 00-2.274-4.1c-3.445-3.005-9.69-1.715-13.814.652-13.117 7.528-16.777 22.065-16.848 35.149-1.323-4.72-.21-9.638-.242-14.48s-1.659-10.207-6.664-12.807c-2.972-1.544-6.644-1.844-10.164-1.95-5.897-.176-12.464.306-16.49 3.824-5.004 4.372-3.706 11.707.646 16.52s10.974 7.828 17.068 11.153c4.645 2.533 9.342 5.493 12.197 9.491a8.612 8.612 0 01.904 1.696h36.965a106.272 106.272 0 0022.86-12.88zM875.737 766c4.344-3.292 8.418-7.177 9.67-11.905a10.067 10.067 0 00-6.757-12.127c-6.205-1.936-12.837 1.574-17.864 5.117s-10.79 7.589-17.37 6.839c6.817-4.924 10.058-12.924 8.178-20.192a7.818 7.818 0 00-2.274-4.1c-3.445-3.005-9.69-1.715-13.814.652-13.117 7.528-16.777 22.065-16.848 35.149-1.323-4.72-.21-9.638-.242-14.48s-1.659-10.207-6.664-12.807c-2.972-1.544-6.644-1.844-10.164-1.95-5.897-.176-12.464.306-16.49 3.824-5.004 4.372-3.706 11.707.646 16.52s10.974 7.828 17.068 11.153c4.645 2.533 9.342 5.493 12.197 9.491a8.612 8.612 0 01.904 1.696h36.965a106.272 106.272 0 0022.86-12.88z"
        fill={color}
      />
      <path
        d="M676.863 694.037c32.329 59.954 100.941 85.691 100.941 85.691s16.198-71.468-16.13-131.422-100.941-85.692-100.941-85.692-16.198 71.468 16.13 131.423z"
        fill="#3f3d56"
      />
      <path
        d="M699.084 674.312c58.366 35.115 80.845 104.863 80.845 104.863s-72.152 12.816-130.518-22.3-80.845-104.862-80.845-104.862 72.152-12.816 130.518 22.3z"
        fill={color}
      />
      <path
        d="M488.863 694.037c32.329 59.954 100.941 85.691 100.941 85.691s16.198-71.468-16.13-131.422-100.941-85.692-100.941-85.692-16.198 71.468 16.13 131.423z"
        fill="#3f3d56"
      />
      <path
        d="M511.084 674.312c58.366 35.115 80.845 104.863 80.845 104.863s-72.152 12.816-130.518-22.3-80.845-104.862-80.845-104.862 72.152-12.816 130.518 22.3z"
        fill={color}
      />
      <path
        d="M296.62 491.42c-55.927 83.727-42.046 191.159-42.046 191.159S359.132 654.26 415.06 570.533s42.045-191.159 42.045-191.159S352.547 407.692 296.62 491.42z"
        fill="#3f3d56"
      />
      <path
        d="M337.764 506.788c-5.46 100.54-80.997 178.182-80.997 178.182s-66.685-85.365-61.225-185.905 80.997-178.183 80.997-178.183 66.685 85.365 61.225 185.906z"
        fill="#fc6681"
      />
      <path
        d="M1092.797 620.865c2.105 114.017-64.942 155.073-148.547 156.617q-2.913.054-5.8.042-5.814-.018-11.512-.318c-75.556-3.95-134.958-44.716-136.916-150.751-2.026-109.734 135.665-250.805 145.994-261.238.009 0 .009 0 .018-.01.392-.398.593-.596.593-.596s154.066 142.246 156.17 256.254z"
        fill={color}
      />
      <path
        d="M938.418 760.143l53.94-78.384-53.923 86.88.016 8.885q-5.815-.018-11.513-.318l3.86-114.173-.064-.882.1-.169.367-10.789-57.236-85.04 57.254 76.963.182 2.283 2.915-86.263-49.28-88.059 49.586 72.903 1.394-178.763.007-.595.01.585 1.822 140.921 46.383-56.736-46.363 68.875.17 77.19 42.926-74.872-42.893 86.22.095 42.921 62.376-104.267-62.35 119.24z"
        fill="#3f3d56"
      />
      <path
        d="M857.797 620.865c2.105 114.017-64.942 155.073-148.547 156.617q-2.913.054-5.8.042-5.814-.018-11.512-.318c-75.556-3.95-134.958-44.716-136.916-150.751-2.026-109.734 135.665-250.805 145.994-261.238.009 0 .009 0 .018-.01.392-.398.593-.596.593-.596s154.066 142.246 156.17 256.254z"
        fill={color}
      />
      <path
        d="M703.418 760.143l53.94-78.384-53.923 86.88.016 8.885q-5.815-.018-11.513-.318l3.86-114.173-.064-.882.1-.169.367-10.789-57.236-85.04 57.254 76.963.182 2.283 2.915-86.263-49.28-88.059 49.586 72.903 1.394-178.763.007-.595.01.585 1.822 140.921 46.383-56.736-46.363 68.875.17 77.19 42.926-74.872-42.893 86.22.095 42.921L765.55 545.46l-62.35 119.24zM1138.797 622.865c2.105 114.017-64.942 155.073-148.547 156.617q-2.913.054-5.8.042-5.814-.018-11.512-.318c-75.556-3.95-134.958-44.716-136.916-150.751-2.026-109.734 135.665-250.805 145.994-261.238.009 0 .009 0 .018-.01.392-.398.593-.596.593-.596s154.066 142.246 156.17 256.254z"
        fill="#3f3d56"
      />
      <path
        d="M984.418 762.143l53.94-78.384-53.923 86.88.016 8.885q-5.815-.018-11.513-.318l3.86-114.173-.064-.882.1-.169.367-10.789-57.236-85.04 57.254 76.963.182 2.283 2.915-86.263-49.28-88.059 49.586 72.903 1.394-178.763.007-.595.01.585 1.822 140.921 46.383-56.736-46.363 68.875.17 77.19 42.926-74.872-42.893 86.22.095 42.921 62.376-104.267-62.35 119.24z"
        fill="#fc6681"
      />
      <path
        d="M302.797 620.865c2.105 114.017-64.942 155.073-148.547 156.617q-2.913.054-5.8.042-5.814-.018-11.512-.318C61.382 773.256 1.98 732.49.022 626.455-2.004 516.72 135.687 375.65 146.015 365.217c.01 0 .01 0 .019-.01.392-.398.593-.596.593-.596s154.065 142.246 156.17 256.254z"
        fill={color}
      />
      <path
        d="M148.418 760.143l53.94-78.384-53.923 86.88.016 8.885q-5.815-.018-11.513-.318l3.86-114.173-.064-.882.1-.169.367-10.789-57.236-85.04 57.254 76.963.182 2.283 2.915-86.263-49.28-88.059 49.586 72.903 1.393-178.763.008-.595.01.585 1.822 140.921 46.383-56.736-46.363 68.875.17 77.19 42.925-74.872-42.892 86.22.095 42.921L210.55 545.46l-62.35 119.24zM918.108 794.867q-53.975-9.144-103.815-15.706l13.135-25.467c-4.43-1.539-23.89 13.046-23.89 13.046l17.239-73.927c-22.276 2.687-33.603 78.17-33.603 78.17l-24.888-25.52 12.05 28.691c-101.695-11.976-189.522-16.416-263.394-16.576l11.242-21.798c-4.429-1.538-23.889 13.046-23.889 13.046l17.238-73.926c-22.276 2.686-33.602 78.17-33.602 78.17l-24.889-25.52 12.762 30.389c-61.93 1.238-112.433 5.465-151.414 10.284 11.372-33.956 50.001-66.252 50.001-66.252-29.5 8.774-44.976 23.477-53.062 37.184a595.41 595.41 0 0134.415-205.722s-60.978 132.693-53.197 221.762l.93 15.816c-51.695 7.402-77.685 15.103-77.685 15.103z"
        fill="#3f3d56"
      />
      <path
        d="M1035.108 788.867q-53.975-9.144-103.815-15.706l13.135-25.467c-4.43-1.539-23.89 13.046-23.89 13.046l17.239-73.927c-22.276 2.687-33.603 78.17-33.603 78.17l-24.888-25.52 12.05 28.691c-101.695-11.976-189.522-16.416-263.394-16.576l11.242-21.798c-4.429-1.538-23.889 13.046-23.889 13.046l17.238-73.926c-22.276 2.686-33.602 78.17-33.602 78.17l-24.889-25.52 12.762 30.389c-61.93 1.238-112.433 5.465-151.414 10.284 11.372-33.956 50.001-66.252 50.001-66.252-29.5 8.774-44.976 23.477-53.062 37.184a595.41 595.41 0 0134.415-205.722s-60.978 132.693-53.197 221.762l.93 15.816c-51.695 7.402-77.685 15.103-77.685 15.103z"
        fill="#3f3d56"
      />
      <path
        d="M1169.108 798.867q-53.975-9.144-103.815-15.706l13.135-25.467c-4.43-1.539-23.89 13.046-23.89 13.046l17.239-73.927c-22.276 2.687-33.603 78.17-33.603 78.17l-24.888-25.52 12.05 28.691c-101.695-11.976-189.522-16.416-263.394-16.576l11.242-21.798c-4.429-1.538-23.889 13.046-23.889 13.046l17.238-73.926c-22.276 2.686-33.602 78.17-33.602 78.17l-24.889-25.52 12.762 30.389c-61.93 1.238-112.433 5.465-151.414 10.284 11.372-33.956 50.001-66.252 50.001-66.252-29.5 8.774-44.976 23.477-53.062 37.184a595.41 595.41 0 0134.415-205.722s-60.978 132.693-53.197 221.762l.93 15.816c-51.695 7.402-77.685 15.103-77.685 15.103z"
        fill="#3f3d56"
      />
      <path
        d="M726.108 788.867q-53.975-9.144-103.815-15.706l13.135-25.467c-4.43-1.539-23.89 13.046-23.89 13.046l17.239-73.927c-22.276 2.687-33.603 78.17-33.603 78.17l-24.888-25.52 12.05 28.691c-101.695-11.976-189.522-16.416-263.394-16.576l11.242-21.798c-4.429-1.538-23.889 13.046-23.889 13.046l17.238-73.926c-22.276 2.686-33.602 78.17-33.602 78.17l-24.89-25.52 12.763 30.389c-61.93 1.238-112.433 5.465-151.414 10.284 11.372-33.956 50.001-66.252 50.001-66.252-29.5 8.774-44.976 23.477-53.062 37.184a595.41 595.41 0 0134.415-205.722s-60.978 132.693-53.197 221.762l.93 15.816c-51.695 7.402-77.685 15.103-77.685 15.103z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgCountrySide.propTypes = {
  color: PropTypes.string
};
SvgCountrySide.defaultProps = {
  color: "primary"
};
const MemoSvgCountrySide = React.memo(SvgCountrySide);
export default MemoSvgCountrySide;
