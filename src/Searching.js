import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSearching = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1104.469 797.515"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M959.049 388.464h9.832v388.345h-9.832z" />
      <path
        d="M1059.614 437.954c.626 135.794-94.913 246.32-94.913 246.32s-96.553-109.64-97.179-245.435 94.913-246.32 94.913-246.32 96.553 109.64 97.18 245.435zM767.244 571.186h5.057v199.735h-5.057z"
        fill="#3f3d56"
      />
      <path
        d="M818.967 596.64c.322 69.842-48.816 126.688-48.816 126.688s-49.66-56.39-49.981-126.233 48.815-126.689 48.815-126.689 49.66 56.391 49.982 126.234z"
        fill="#3f3d56"
      />
      <ellipse cx={871.969} cy={776.515} rx={137} ry={21} fill="#3f3d56" />
      <path
        d="M883.268 287.081c-11.607-19.612-34.57-20.526-34.57-20.526s-22.377-2.861-36.731 27.008c-13.38 27.84-31.845 54.722-2.973 61.24l5.215-16.233 3.23 17.44a112.967 112.967 0 0012.353.212c30.92-.999 60.366.292 59.418-10.803-1.26-14.75 5.226-39.467-5.942-58.338z"
        fill="#2f2e41"
      />
      <path
        d="M841.469 324.015s15 21 6 38 21 35 21 35l22-48s-26-17-19-33z"
        fill="#fbbebe"
      />
      <circle cx={851.469} cy={307.015} r={26} fill="#fbbebe" />
      <path
        d="M761.49 337.07l21.727-28.033s7.65-29.385 18.731-27.895-4.376 35.24-4.376 35.24l-21.59 31.03zM871.469 710.015l7 37 15 4-4-44-18 3zM1022.469 670.015l27 37 11 5 9-15-27-35-20 8z"
        fill="#fbbebe"
      />
      <path
        d="M865.469 381.015l-16.681-21.96s-32.32 5.96-35.32 8.96 8 58 8 58 2 15 11 23l9 6 74-15 2.783-32.926a86.41 86.41 0 00-22.782-66.074l-12.876 1.76z"
        fill="#575a89"
      />
      <path
        d="M817.469 370.015l-5-2-23-2s-8-2-6-6 4-5 0-6-5-2-4-5 7-9 7-9l-17-14s-.92.65-2.408 1.855c-8.44 6.834-35.147 31.49-15.592 56.145 23 29 50 46 72 40z"
        fill="#575a89"
      />
      <path
        d="M839.469 450.015v14s-9 17-6 33 4 24 4 24a136.533 136.533 0 007 40c7 20-16 151 13 153s45 4 54-6-15-182-15-182 82 171 99 164 60-23 55-32-131-209-131-209l-4-9zM887.469 740.015s-16-1-16 4-8 22-8 22-6 20 10 18 26-20 26-20l-4-19zM1054.469 705.015s-14-9-13-3 2 22 9 23 28 7 29 9 25 10 25-3-15-23-15-23l-17-13s-11-1-13 6-5 4-5 4z"
        fill="#2f2e41"
      />
      <circle cx={851.508} cy={266.654} r={16.604} fill="#2f2e41" />
      <path
        d="M833.157 262.285a16.604 16.604 0 0114.856-16.51 16.772 16.772 0 00-1.748-.094 16.604 16.604 0 100 33.208 16.772 16.772 0 001.748-.094 16.604 16.604 0 01-14.856-16.51z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M878.136 285.191l-22.686-11.884-31.33 4.862-6.482 28.628 16.136-.621 4.508-10.517v10.344l7.445-.286 4.321-16.745 2.701 17.825 26.468-.54-1.081-21.066z"
      />
      <path
        d="M876.778 452.332l-34.987.946s-29.854 5.809-28.18-6.241 30.8-7.835 30.8-7.835l31.88-4.864z"
        fill="#fbbebe"
      />
      <path
        d="M904.46 339.32a7.467 7.467 0 018.236 5.128c6.85 21.584 27.95 93.813 6.985 103.723-24.694 11.671-42.714 11.158-42.714 11.158l-9.645-23.748 8.78-8.24 9.375-60.275 4.492-25.55z"
        fill="#575a89"
      />
      <path opacity={0.4} d="M897.969 379.515l-4 40-35 15 39-9v-46z" />
      <path
        d="M709.214 247.463a46.84 46.84 0 0127.353 19.87l3.27 5.065.165.21 57.385 16.79a4.183 4.183 0 012.861 5.116l-4.455 16.335a4.183 4.183 0 01-5.162 2.928l-57.399-16.044-.001.002-5.765 2.18a51.515 51.515 0 01-33.122 1.125z"
        fill="#3f3d56"
      />
      <ellipse
        cx={811.107}
        cy={344.233}
        rx={3.504}
        ry={6.57}
        transform="rotate(-73.69 753.031 350.485)"
        fill="#575a89"
      />
      <circle cx={766.716} cy={294.14} r={2.409} fill="#3f3d56" />
      <ellipse
        cx={749.694}
        cy={325.728}
        rx={28.09}
        ry={12.703}
        transform="rotate(-72.034 690.569 332.958)"
        fill={color}
      />
      <path
        d="M712.228 277.881c4.611-14.22 3.357-27.472-2.71-30.355a5.891 5.891 0 011.075.238c6.673 2.164 8.204 15.882 3.419 30.64s-14.075 24.966-20.748 22.802a5.863 5.863 0 01-.708-.284c6.564.836 15.139-9.06 19.672-23.04z"
        opacity={0.4}
      />
      <path
        d="M709.969 247.515L579.73 146.49a861.922 861.922 0 01-66.215-57.386c-37.126-35.387-87.524-63.68-146.201-78.744-142.562-36.598-255.5 28.294-306.866 123.578-78.495 145.604-138.65 381.88 209.394 256.11 76.116-27.505 153.164-30.429 211.586-44.917l211.54-43.616z"
        fill={color}
      />
      <circle cx={318.969} cy={70.515} r={7} fill="#f2f2f2" />
      <path
        fill="#f2f2f2"
        d="M454.949 86.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356zM637.949 238.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356zM624.949 285.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356zM65.949 325.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356zM145.949 107.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356zM456.949 293.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356zM265.949 43.695h-1.822v-1.822h-.356v1.822h-1.822v.356h1.822v1.822h.356v-1.822h1.822v-.356z"
      />
      <path
        d="M266.65 187.673l-2.27.35c.71 4.54 1.27 9.18 1.68 13.77l2.29-.2a208.2 208.2 0 00-1.7-13.92zM260.44 160.333l-2.2.67c1.33 4.4 2.52 8.91 3.53 13.4l2.25-.51c-1.03-4.54-2.24-9.1-3.58-13.56zM250.53 134.113l-2.09.96c1.92 4.19 3.72 8.49 5.35 12.79l2.15-.81c-1.65-4.35-3.46-8.71-5.41-12.94zM237.13 109.533l-1.94 1.23c2.47 3.88 4.84 7.9 7.04 11.93l2.02-1.1a202.81 202.81 0 00-7.12-12.06zM220.47 87.003l-1.75 1.49c2.98 3.5 5.88 7.16 8.62 10.86l1.84-1.37c-2.76-3.74-5.69-7.44-8.71-10.98zM200.89 66.943l-1.53 1.71c3.44 3.07 6.81 6.3 10.02 9.59l1.65-1.61c-3.25-3.33-6.66-6.59-10.14-9.69zM178.77 49.723l-1.29 1.9c3.82 2.57 7.6 5.31 11.23 8.14l1.42-1.81c-3.68-2.86-7.5-5.63-11.36-8.23zM158.64 37.763v2.6c2.39 1.25 4.76 2.56 7.08 3.9l1.15-1.99q-4.05-2.34-8.23-4.51zM266.804 215.979l2.299-.042c.042 2.321.045 4.654.01 6.936l-2.3-.036c.036-2.255.033-4.563-.009-6.858zM131.65 384.673l-2.27.35c.71 4.54 1.27 9.18 1.68 13.77l2.29-.2a208.2 208.2 0 00-1.7-13.92zM125.44 357.333l-2.2.67c1.33 4.4 2.52 8.91 3.53 13.4l2.25-.51c-1.03-4.54-2.24-9.1-3.58-13.56zM115.53 331.113l-2.09.96c1.92 4.19 3.72 8.49 5.35 12.79l2.15-.81c-1.65-4.35-3.46-8.71-5.41-12.94zM102.13 306.533l-1.94 1.23c2.47 3.88 4.84 7.9 7.04 11.93l2.02-1.1c-2.22-4.08-4.62-8.14-7.12-12.06zM85.47 284.003l-1.75 1.49c2.98 3.5 5.88 7.16 8.62 10.86l1.84-1.37c-2.76-3.74-5.69-7.44-8.71-10.98zM65.89 263.943l-1.53 1.71c3.44 3.07 6.81 6.3 10.02 9.59l1.65-1.61c-3.25-3.33-6.66-6.59-10.14-9.69zM43.77 246.723l-1.29 1.9c3.82 2.57 7.6 5.31 11.23 8.14l1.42-1.81c-3.68-2.86-7.5-5.63-11.36-8.23zM23.64 234.763v2.6c2.39 1.25 4.76 2.56 7.08 3.9l1.15-1.99q-4.05-2.34-8.23-4.51zM131.804 412.979l2.299-.042c.042 2.321.045 4.654.01 6.936l-2.3-.036c.036-2.255.033-4.563-.009-6.858zM593.65 285.673l-2.27.35c.71 4.54 1.27 9.18 1.68 13.77l2.29-.2a208.2 208.2 0 00-1.7-13.92zM587.44 258.333l-2.2.67c1.33 4.4 2.52 8.91 3.53 13.4l2.25-.51c-1.03-4.54-2.24-9.1-3.58-13.56zM577.53 232.113l-2.09.96c1.92 4.19 3.72 8.49 5.35 12.79l2.15-.81c-1.65-4.35-3.46-8.71-5.41-12.94zM564.13 207.533l-1.94 1.23c2.47 3.88 4.84 7.9 7.04 11.93l2.02-1.1c-2.22-4.08-4.62-8.14-7.12-12.06zM547.47 185.003l-1.75 1.49c2.98 3.5 5.88 7.16 8.62 10.86l1.84-1.37c-2.76-3.74-5.69-7.44-8.71-10.98zM527.89 164.943l-1.53 1.71c3.44 3.07 6.81 6.3 10.02 9.59l1.65-1.61c-3.25-3.33-6.66-6.59-10.14-9.69zM505.77 147.723l-1.29 1.9c3.82 2.57 7.6 5.31 11.23 8.14l1.42-1.81c-3.68-2.86-7.5-5.63-11.36-8.23zM485.64 135.763v2.6c2.39 1.25 4.76 2.56 7.08 3.9l1.15-1.99q-4.05-2.34-8.23-4.51zM593.804 313.979l2.299-.042c.042 2.321.045 4.654.01 6.936l-2.3-.036c.036-2.255.033-4.563-.009-6.858z"
        fill="#e6e6e6"
      />
      <path
        fill="#f2f2f2"
        d="M149.295 199.895H147.6v-1.696h-.331v1.696h-1.696v.33h1.696v1.696h.331v-1.696h1.695v-.33zM129.754 302.252h-1.695v-1.696h-.331v1.696h-1.696v.331h1.696v1.695h.331v-1.695h1.695v-.331zM72.417 391.959h-1.696v-1.695h-.331v1.695h-1.695v.331h1.695v1.696h.331v-1.696h1.696v-.331z"
      />
      <path
        d="M231.919 278.183a122.811 122.811 0 1156.981 45.751 39.726 39.726 0 11-56.981-45.751z"
        fill="#3f3d56"
      />
      <path
        d="M333.128 139.437c28.154 0 47.524 15.616 47.524 38.064 0 14.865-7.207 25.151-21.097 33.335-13.063 7.582-17.493 13.138-17.493 22.748a5.931 5.931 0 01-5.93 5.931h-14.394a5.931 5.931 0 01-5.927-5.724l-.026-.733c-1.276-15.466 4.13-25.075 17.719-33.034 12.688-7.582 18.018-12.387 18.018-21.697s-9.01-16.142-20.196-16.142c-8.502 0-15.231 4.14-18.317 10.896a13.252 13.252 0 01-12.112 7.573c-9.752 0-16.195-10.37-11.634-18.99 7.214-13.636 22.436-22.227 43.865-22.227zM313.383 268.12c0-8.634 7.207-15.466 16.066-15.466 8.935 0 16.142 6.757 16.142 15.466s-7.208 15.466-16.142 15.466-16.066-6.757-16.066-15.466z"
        fill={color}
      />
    </svg>
  );
};

SvgSearching.propTypes = {
  color: PropTypes.string
};
SvgSearching.defaultProps = {
  color: "primary"
};
const MemoSvgSearching = React.memo(SvgSearching);
export default MemoSvgSearching;
