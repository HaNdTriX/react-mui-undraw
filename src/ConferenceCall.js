import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgConferenceCall = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 817.215 523.621"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#e6e6e6" d="M.349.463h816.866v523.158H.349z" />
      <path fill="#fff" d="M23.707 66.08h770.15v426.591H23.707z" />
      <path fill={color} d="M0 0h816.866v34.703H0z" />
      <circle cx={25.789} cy={17.742} r={6.432} fill="#fff" />
      <circle cx={50.203} cy={17.742} r={6.432} fill="#fff" />
      <circle cx={74.618} cy={17.742} r={6.432} fill="#fff" />
      <path
        fill="#e6e6e6"
        d="M118.465 101.167h150.63v163.42h-150.63zM333.465 101.167h150.63v163.42h-150.63zM548.465 101.167h150.63v163.42h-150.63zM118.465 294.167h150.63v163.42h-150.63zM333.465 294.167h150.63v163.42h-150.63zM548.465 294.167h150.63v163.42h-150.63z"
      />
      <circle cx={176.975} cy={174.52} r={25.462} fill="#ffb9b9" />
      <path
        d="M167.029 194.014s3.182 15.119 3.182 16.71 15.119 8.753 15.119 8.753l13.526-2.387 4.775-14.323s-7.957-11.935-7.957-16.71z"
        fill="#ffb9b9"
      />
      <path
        d="M154.894 154.006s8.084-17.516 23.579-13.474 24.252 10.105 24.926 16.168-.337 15.158-.337 15.158-1.684-12.463-12.463-9.768-27.62.673-27.62.673l-2.696 24.253s-3.031-4.379-6.4-1.684-9.768-25.937 1.01-31.326z"
        fill="#2f2e41"
      />
      <path
        d="M257.735 258.467l-6.36-28.65c-3.19-9.55-11.14-17.5-11.14-17.5l-39.24-13.8h-.01a16.48 16.48 0 01-11.67 15.4c-11.94 3.97-20.16-9.41-20.16-9.41l-33.17 25.31s-10.34 8.76-9.54 25.47l-1.1 9.3h135.45z"
        fill={color}
      />
      <ellipse cx={391.4} cy={175.984} rx={34.56} ry={36.687} fill="#2f2e41" />
      <circle cx={422.064} cy={213.32} r={18.181} fill="#2f2e41" />
      <path
        fill="#9f616a"
        d="M409.402 188.971l9.74 25.323-24.674 10.39-2.167-4.911-7.574-17.166 24.675-13.636z"
      />
      <circle cx={389.922} cy={183.776} r={21.752} fill="#9f616a" />
      <path
        d="M372.142 181.39c13.673-9.123 17.76-11.304 33.431-7.78l.94-22.863-40.497 8.496z"
        fill="#2f2e41"
      />
      <path
        d="M460.045 233.117l-.6.07a.378.378 0 00-.05-.06c-2.38-2.38-13.74-6.71-22.21-9.71h-.01c-5.38-1.91-9.59-3.28-9.59-3.28l-10.24-10.53c-2.58 2.9-8.03 5.14-13.21 6.72a103.738 103.738 0 01-12.08 2.88h-.01l-2.12 6.77s-24.03 18.19-25.97 20.13h-.01v.02a1.057 1.057 0 00-.18.76v.05a88.172 88.172 0 00-1.86 17.65h104.64v-6.14c0-8.44-6.5-25.33-6.5-25.33z"
        fill="#575a89"
      />
      <path
        d="M652.465 264.587h-51.74l-2.85-28.11-.17-1.71-.35-3.39-1.43-14.17-1.79 15.22-3.78 32.16h-9.4l.35-10.01.35-10.15.15-4.09 1.93-55.64a39.728 39.728 0 017.93-24.49 30.942 30.942 0 0124.99-12.09 31.84 31.84 0 0125.42 12.53 40.26 40.26 0 018.31 24.86l.89 33.68z"
        fill="#2f2e41"
      />
      <circle cx={616.656} cy={181.85} r={22.758} fill="#fbbebe" />
      <path
        d="M605.277 198.105s6.502 21.946 0 28.448-8.128 8.94-8.128 8.94l18.694 25.197 32.511-39.827s-22.758-6.502-17.068-24.383zM675.485 264.587h-19.2l-.32-3.29-.29-3.04 8.84-1.11 10.66-1.33.12 3.41.19 5.36z"
        fill="#fbbebe"
      />
      <path
        d="M676.802 259.064s-3.251-20.32-5.69-28.447-4.876-8.128-4.876-8.128v-.002c-2.87-2.87-9.77-3.38-14.96-3.3-3.64.04-6.44.36-6.44.36l-28.99 30.58-14.6-19.41v-.01a21.249 21.249 0 00-3.89.67 25.757 25.757 0 00-3.22 1.05 44.182 44.182 0 00-12.33 7.91h-.01c-2.1 1.89-3.34 3.28-3.34 3.28a95.187 95.187 0 00-7.22 20.97h92.9l.21-4.18v-.008z"
        fill={color}
      />
      <path
        d="M597.555 178.192c14.699-7.924 20.737-7.589 39.014 0l4.877-11.881a8.448 8.448 0 00-8.439-8.439h-32.703a8.448 8.448 0 00-8.438 8.439zM191.788 333.721a5.995 5.995 0 00-3.477.777 9.07 9.07 0 00-2.352 3.104 37.135 37.135 0 01-10.116 11.427c-3.005 2.202-6.827 4.948-6.313 9.008a12.175 12.175 0 001.465 3.802c2.773 5.598 10.34 9.924 9.596 16.31 2.755-4.611-.93-6.892 1.825-11.504 1.312-2.196 3.591-4.676 5.572-3.296.663.461 1.099 1.29 1.79 1.695 1.647.967 3.4-.882 4.859-2.19 5.03-4.516 12.183-3.333 18.442-1.926 2.955.664 6.2 1.535 7.947 4.36 2.297 3.712-2.182 7.723-3.314 11.92a2.288 2.288 0 002.455 2.848c1.878-.186 4.103-.337 4.214-1.161 2.363.084 5.258-.184 6.27-2.644a10.346 10.346 0 00.486-3.01c.372-4.132 2.126-7.903 3.288-11.836s1.667-8.544-.294-12.031a13.921 13.921 0 00-2.569-3.123c-11.129-10.77-25.76-12.546-39.774-12.53z"
        fill="#2f2e41"
      />
      <path
        d="M183.011 386.217s2.42 20.17-6.454 21.783 8.068 29.043 8.068 29.043l40.338 4.84-9.681-32.27s-6.454-2.42-2.42-18.555-29.85-4.84-29.85-4.84z"
        fill="#9f616a"
      />
      <circle cx={201.163} cy={375.326} r={24.203} fill="#9f616a" />
      <path
        d="M159.505 457.587c4.28-16.83 10.19-39.5 10.19-39.5s2.3.47 5.92 1a140.112 140.112 0 0015.96 1.45c6.84.19 14.04-.26 19.61-2.19a18.363 18.363 0 005.79-3.09 11.162 11.162 0 001.94-2.01c9.68-12.91 13.71 36.3 13.71 36.3l.75 8.04z"
        fill={color}
      />
      <path
        d="M236.835 509.587q-.48 0-.96.03l.46-.86c.16.27.32.55.5.83z"
        fill="#ffb8b8"
      />
      <path
        d="M192.967 340.054a5.493 5.493 0 00-2.83.549 6.597 6.597 0 00-1.915 2.194 27.874 27.874 0 01-8.235 8.076c-2.446 1.557-5.557 3.497-5.139 6.367a7.961 7.961 0 001.193 2.687 21.14 21.14 0 012.569 13.177l6.728-9.78c1.068-1.552 2.923-3.305 4.536-2.33.54.327.894.912 1.456 1.199 1.342.683 2.769-.623 3.956-1.549 4.095-3.191 9.917-2.355 15.013-1.36 2.405.469 5.047 1.084 6.469 3.08 2.363 3.318-.104 8.11 1.275 11.943a3.52 3.52 0 001.456-2.325c1.924.06 4.28-.13 5.105-1.869a6.44 6.44 0 00.395-2.126c.303-2.921 1.73-5.586 2.676-8.367s1.358-6.038-.239-8.503a10.289 10.289 0 00-2.091-2.207c-9.06-7.612-20.97-8.867-32.378-8.856zM190.675 418.887c-5.52-6.31-8.8-15.51-8.95-15.92v-.01s-8.8-5.04-11.22-.2-25.01 16.94-27.43 16.94a.32.32 0 01-.06.02c-.96.32-12.98 4.69-16.07 20.96a121.766 121.766 0 00-1.34 16.91h65.79c.68-7.13 1.19-13.8 1.39-19.56.29-8.03.01-14.27-1.21-17.49a5.095 5.095 0 00-.9-1.65zM247.245 423.427c-.04-.19-.07-.35-.1-.5a3.72 3.72 0 00-.54-1.2.077.077 0 01-.01-.03c-4.66-7.22-34.63-17.16-34.63-17.16l-1.12 3.87s.14 3.82.34 9.94c.2 5.73.44 13.47.67 21.97.16 5.55.3 11.43.43 17.27h44.83a261.8 261.8 0 00-9.87-34.16z"
        fill="#2f2e41"
      />
      <path
        d="M666.685 457.587l3.43-16.76 3.19-1.35.02.01c.29.11 3.76 1.58 3.76 7.15 0 1.12-.17 5.15-.45 10.95z"
        fill="#575a89"
      />
      <circle cx={630.658} cy={371.191} r={27.856} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M648.068 387.44l-2.322 47.586-35.98-20.891 4.642-26.695h33.66z"
      />
      <path
        fill={color}
        d="M658.515 437.347l-2.36 20.24h-18.89l-20.5-39.39-5.78-11.09-2.77-1.81 3.21-.73 2.53 1.83 28.31 20.51 4.54-13.63.12-.35 1.14-3.43 10.45 27.85z"
      />
      <path
        d="M613.828 343.916s3.482-17.41 23.213-13.928l-2.32 1.16s18.57-2.32 16.248 8.125c0 0 15.089 9.285 11.607 19.731a118.097 118.097 0 00-4.643 18.57l-3.482-3.482s-3.482-23.213-24.373-20.891c-15.67 1.74-22.053 9.14-23.685 14.472a47.094 47.094 0 01-2.867 7.294l-1.304.286s-6.964-25.534 11.606-31.337zM673.325 439.487l-.02-.01-14.79-13.74v-9.28l-11.42-9-.17 5.47-1.18 37.19-18.99-26.12-12.8-17.6-2.3-3.15.56-2.95-7.09 8.03-25.66 19.25-2.2 1.65a69.987 69.987 0 00-6.96 8.12c-.69 1.03-3.83 9.23-7.92 20.24h114.25c.28-5.8.45-9.83.45-10.95 0-5.57-3.47-7.04-3.76-7.15zM406.488 340.593c-18.876 0-34.178 16.982-34.178 37.93v26.615h8.186l4.739-9.861-1.185 9.86h52.613l4.308-8.964-1.077 8.965h5.924V384.24c0-24.105-17.609-43.647-39.33-43.647z"
        fill="#2f2e41"
      />
      <path
        d="M378.905 457.587h-22.23l-.21-18.13c-.01-.19-.01-.37-.01-.56l4.45-5.01.08-.09 16.99 10.76z"
        fill="#d0cde1"
      />
      <circle cx={403.464} cy={377.088} r={24.331} fill="#fbbebe" />
      <path
        d="M389.514 391.686s7.137 36.983 3.893 40.876 34.388-7.137 34.388-7.137-12.328-25.304-5.84-39.578z"
        fill="#fbbebe"
      />
      <path
        d="M455.525 416.697h-.01a5.586 5.586 0 00-2.79-2.72c-4.77-2.01-8.88-3.55-12.26-4.72a25.926 25.926 0 00-18.34.57c-.57.23-1.13.48-1.68.76 0 0-23.79 4.53-26.62 3.96-.21-.04-.43-.07-.64-.09a11.226 11.226 0 00-1.29-.11 28.503 28.503 0 00-15.8 3.92c-7.81 4.53-19.39 12.56-19.63 20.38l-.22.25.22 18.69h104.42c.21-17.91.33-31.37.33-32.28 0-2.83-5.69-8.61-5.69-8.61z"
        fill={color}
      />
      <path
        d="M416.204 351.042a17.925 17.925 0 00-14.143-7.218h-.67c-12.938 0-23.426 11.707-23.426 26.149h4.335l.7-5.33 1.026 5.33h25.711l2.154-4.509-.538 4.509h5.058q3.54 17.582-10.174 35.165h8.616l4.308-9.017-1.077 9.017h16.425l3.23-20.739c0-15.531-9.023-28.701-21.535-33.357z"
        fill="#2f2e41"
      />
      <circle cx={420.926} cy={340.424} r={12.801} fill="#2f2e41" />
    </svg>
  );
};

SvgConferenceCall.propTypes = {
  color: PropTypes.string
};
SvgConferenceCall.defaultProps = {
  color: "primary"
};
export default SvgConferenceCall;