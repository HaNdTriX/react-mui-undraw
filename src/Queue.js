import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgQueue = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 903.345 605.222"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M608.941 20.948s2.112 2.42-1.506 7.103-.697 14.845 6.178 15.103 10.208 3.139 8.551 6.932-3.649 12.805 3.838 11.435 9.853 1.61 8.528 3.9 3.338-4.555 3.338-4.555 4.172 6.216 9.293 1.865 7.156-43.792-3.283-44.46-34.937 2.677-34.937 2.677z"
        fill="#2f2e41"
      />
      <path
        fill="#9f616a"
        d="M661.864 208.51l2.379 16.652h10.705l-3.568-19.031-9.516 2.379z"
      />
      <path
        d="M676.138 215.052s14.274 13.084 10.705 14.274-16.652 15.463-19.031 16.652c-2.128 1.064-24.98 8.327-21.41 0s11.894-13.084 11.894-13.084l2.379-14.274z"
        fill="#f2f2f2"
      />
      <path
        d="M676.138 215.052s14.274 13.084 10.705 14.274-16.652 15.463-19.031 16.652c-2.128 1.064-24.98 8.327-21.41 0s11.894-13.084 11.894-13.084l2.379-14.274z"
        opacity={0.1}
      />
      <path
        fill="#9f616a"
        d="M676.138 196.02l2.379 16.653h10.705l-3.568-19.032-9.516 2.379z"
      />
      <path
        d="M631.406 151.816l15.59-51.548s-26.169-23.79-8.326-30.926 22.6 28.547 22.6 28.547l-5.948 61.853h-23.79z"
        fill="#ffb8b8"
      />
      <path
        d="M667.812 113.947s-30.743 39.43-26.077 45.288 12.992 41.543 12.992 41.543-1.19 14.274 3.569 14.274 16.652-2.379 16.652-5.947-10.705-48.769-10.705-48.769l30.926-40.442z"
        fill={color}
      />
      <path
        d="M670.19 116.326l30.927-16.653s21.41 10.706 15.463 20.221-33.305 34.495-33.305 34.495 8.326 40.442 7.137 41.631-14.274 5.948-17.842 4.758-22.6-47.579-17.843-49.957 20.221-27.358 20.221-27.358z"
        fill={color}
      />
      <path
        d="M585.738 552.862s21.41 13.084 23.79 13.084 34.494 8.326 20.22 14.274-68.989-2.38-67.8-5.948 0-24.979 2.38-24.979 21.41 3.569 21.41 3.569z"
        fill="#2f2e41"
      />
      <path
        d="M609.528 569.514s21.41 13.084 23.789 13.084 34.495 8.327 20.221 14.274-68.99-2.379-67.8-5.947 0-24.98 2.38-24.98 21.41 3.57 21.41 3.57z"
        fill="#2f2e41"
      />
      <path
        d="M586.928 317.346s3.568 17.843 9.515 30.927-1.19 74.936-4.758 84.452-38.063 122.516-27.357 123.705 32.115 0 32.115 0l34.495-108.242-5.947-145.115z"
        fill="#575a88"
      />
      <path
        d="M586.928 317.346s3.568 17.843 9.515 30.927-1.19 74.936-4.758 84.452-38.063 122.516-27.357 123.705 32.115 0 32.115 0l34.495-108.242-5.947-145.115z"
        opacity={0.1}
      />
      <path
        d="M594.064 318.536s4.758 32.116 15.464 39.252 7.136 14.274 7.136 14.274l-4.758 63.042s-46.389 114.19-32.115 128.463 27.358 8.326 33.305 7.137 16.653-26.169 10.705-33.305 11.895-49.958 16.653-57.095 0-16.653 5.947-19.032 19.032-17.842 19.032-28.547 16.652-124.894 5.947-132.031-79.325 14.73-79.325 14.73z"
        fill="#575a88"
      />
      <circle cx={571.464} cy={125.842} r={26.168} fill="#ffb8b8" />
      <circle cx={630.938} cy={30.684} r={21.41} fill="#9f616a" />
      <path
        d="M589.307 125.842s14.273 26.168 21.41 26.168-28.547 27.358-28.547 27.358-11.895-34.495-14.274-35.684 21.41-17.842 21.41-17.842z"
        fill="#ffb8b8"
      />
      <path
        d="M594.064 149.631s-30.926 10.705-29.736 14.274S556 175.799 556 179.368s-2.379 35.684 11.895 61.852 36.874 45.2 26.168 57.095-27.357 32.116-9.515 32.116 46.389-26.169 72.557-16.653 20.221-26.168 20.221-26.168 3.569-27.358-3.568-35.684-32.116-67.8-32.116-74.937-23.79-34.495-29.737-34.495-17.842 7.137-17.842 7.137z"
        fill="#8985a8"
      />
      <path
        d="M636.885 43.768s9.686 18.416 10.196 21.698 17.162-21.698 17.162-21.698l-19.031-13.084z"
        fill="#9f616a"
      />
      <path
        d="M640.454 58.042l20.22-21.41 23.79 10.705s22.187 48.768 23.583 52.336-35.478 20.221-39.046 20.221-28.547-36.873-28.547-36.873-5.948-17.842 0-24.98z"
        fill="#f2f2f2"
      />
      <path
        fill="#9f616a"
        d="M630.938 86.589V108h14.274l-4.695-21.411h-9.579z"
      />
      <path
        d="M639.082 102.647a8.871 8.871 0 00-8.38 5.633c-.93 2.514-.614 5.157 3.804 6.262 9.516 2.379 10.706 0 10.706 0s16.518-2.38 13.017-7.137-13.017-4.758-13.017-4.758z"
        fill="#9f616a"
      />
      <path
        d="M690.412 205.536s14.273 13.084 10.705 14.274-16.653 15.463-19.032 16.652c-2.128 1.064-24.979 8.327-21.41 0s11.894-13.084 11.894-13.084l2.38-14.273z"
        fill="#f2f2f2"
      />
      <path
        d="M562.14 105.698c1.638-.959 3.571-2.154 3.618-4.05a3.586 3.586 0 00-2.351-3.15 10.528 10.528 0 00-4.11-.555 5.35 5.35 0 00-1.59.158c-1.355.418-2.135 1.793-3.202 2.727-1.55 1.356-3.684 1.754-5.677 2.27a37.165 37.165 0 00-9.515 3.944 4.462 4.462 0 00-1.506 1.239 6.075 6.075 0 00-.605 3.079c-.268 4.035-2.688 7.548-4.494 11.167s-2.993 8.127-.873 11.572a39.397 39.397 0 012.353 3.34c1.502 3.13-.373 6.985.712 10.284a8.995 8.995 0 002.278 3.415 18.096 18.096 0 007.495 4.538c2.703.832 6.056 1.387 7.115 4.01.454 1.124.361 2.45 1.002 3.48.794 1.276 2.43 1.689 3.908 1.96a16.701 16.701 0 005.063.367 6.282 6.282 0 004.367-2.337 12.771 12.771 0 011.769-2.608c1.722-1.44 4.338-.303 6.55-.684a4.79 4.79 0 003.754-3.524 6.67 6.67 0 01.762-2.693c1.374-1.757 4.988-.516 5.895-2.555.59-1.324-.644-2.723-1.836-3.548-1.944-1.345-4.117-2.379-5.86-3.975s-3.033-3.984-2.488-6.284c.82-3.448 5.322-5.347 5.471-8.889.086-2.029-1.372-3.81-3.005-5.017s-3.523-2.076-4.982-3.489c-1.066-1.032-1.87-2.328-3.03-3.255-2.097-1.676-4.965-1.88-7.635-2.153-1.433-.147-7.146-.809-6.921-2.99.186-1.813 6.115-4.942 7.569-5.794z"
        fill="#2f2e41"
      />
      <path
        d="M640.454 56.852S627.37 61.61 627.37 67.558s-5.948 24.978 0 24.978 17.842-4.565 17.842-4.565z"
        fill="#f2f2f2"
      />
      <path
        d="M636.885 142.494S671.38 130.6 672.57 130.6s17.843-9.516 16.653-13.085l-4.758-29.736s-19.031-39.253-5.947-39.253 20.22 30.926 20.22 30.926 28.548 53.526 13.085 65.421-79.695 33.305-83.263 29.737 8.326-32.116 8.326-32.116z"
        fill="#ffb8b8"
      />
      <path
        d="M670.19 65.179l8.03 7.737-10.408 10.105s-14.274-5.948-13.085-2.38 8.327 14.274 13.085 14.274 29.52-15.463 29.628-20.22-15.355-21.411-18.923-22.6-8.326 13.084-8.326 13.084z"
        fill="#9f616a"
      />
      <path
        d="M655.093 56.887s17.476 15.428 19.855 15.428 6.706-23.18 6.706-23.18-14.1-9.187-19.324-6.682-7.237 14.434-7.237 14.434z"
        fill="#f2f2f2"
      />
      <path
        d="M594.064 156.768s0-16.653 35.685-16.653h15.463l-7.137 39.253-23.79 7.137z"
        fill="#8985a8"
      />
      <path
        d="M672.012 22.006a92.37 92.37 0 01-10.463-.645c-2.728-6.59-6.201-12.121-9.96-14.183-2.666-2.386-6.78-4.12-10.006-5.492-7.926-3.367-21.12-1.267-21.89 2.563-15.596 7.452-11.655 20.538-11.655 20.538 2.423 5.122 7.86 2.852 12.472.533 1.177 3.713 3.96 6.864 7.942 7.014 7.616.286 11.309 3.476 9.473 7.678s-4.043 14.186 4.251 12.668 10.916 1.784 9.447 4.322 3.698-5.047 3.698-5.047 4.622 6.885 10.295 2.065a4.305 4.305 0 001.182-2.024c2.638 1.135 4.727 1.566 5.914 1.035 6.794-3.04 2.575-10.179 2.575-10.179s9.07-1.391 6.148-1.16-4.772-3.559.174-10.388-5.014-9.143-9.597-9.298z"
        fill="#2f2e41"
      />
      <path
        fill={color}
        d="M622.609 15.526l3.385 1.127-3.38 10.157-3.385-1.126z"
      />
      <path
        d="M223.027 107.597s-1.42 4.732 6.625 8.992 10.412 20.35.947 25.082-12.305 10.885-7.572 15.145 13.25 15.617 1.893 18.457-12.778 8.518-9.466 10.884-7.572-4.259-7.572-4.259-1.893 11.358-11.831 8.519-37.86-56.791-23.663-64.363 50.639-18.457 50.639-18.457z"
        fill="#2f2e41"
      />
      <path
        fill="#9f616a"
        d="M186.357 508.814l3.077 28.717-13.333 8.205-12.307-2.051 6.153-34.871h16.41z"
      />
      <circle cx={196.613} cy={135.49} r={28.717} fill="#9f616a" />
      <path
        d="M206.357 149.336s2.564 43.588 5.64 43.588-35.896-2.05-35.896-2.05 16.41-28.718 8.205-37.949 22.05-3.59 22.05-3.59z"
        fill="#9f616a"
      />
      <path
        fill="#2f2e41"
        d="M163.794 379.587l13.333 51.28-10.257 87.178 23.59-2.052 9.23-136.406h-35.896z"
      />
      <path
        opacity={0.2}
        d="M163.794 379.587l13.333 51.28-10.257 87.178 23.59-2.052 9.23-136.406h-35.896z"
      />
      <path
        d="M184.306 532.403s1.025-6.153 11.282 0 53.332 25.64 30.768 29.743-68.716-5.128-68.716-8.205-1.026-22.563 3.077-20.512 17.435 15.384 23.589-1.026z"
        fill="#2f2e41"
      />
      <path
        d="M170.973 525.224s-16.41 25.64-17.436 32.82-16.41-16.41-16.41-16.41l14.36-26.666z"
        fill="#9f616a"
      />
      <path
        d="M225.33 383.689l-18.46 61.537s-32.82 87.177-34.872 86.152-26.666-7.18-27.691-10.256 30.768-86.152 30.768-86.152l4.103-53.332zM134.05 537.531a13.464 13.464 0 0113.334 8.205c4.102 9.23 9.23 10.256 10.256 11.282s-3.077 22.564 0 24.615 6.154 23.589-4.103 23.589-26.666-11.282-25.64-13.333 1.026-16.41-2.051-22.564-8.205-16.41 0-22.563 8.205-9.23 8.205-9.23z"
        fill="#2f2e41"
      />
      <path
        d="M231.484 288.307l2.051 18.46s15.385 15.385 20.513 33.846 47.178 49.23 34.87 53.332-26.665 6.154-62.562 0-92.305 7.18-92.305-26.666c0 0-7.18-9.23-12.308 4.103a268.068 268.068 0 01-12.307 26.666s-12.307-21.538-8.205-30.769 0-8.205 5.128-18.46 30.769-48.205 41.025-50.256 29.743-28.717 28.717-31.794 55.383 21.538 55.383 21.538z"
        fill={color}
      />
      <path
        d="M176.1 173.438s42.051 9.23 44.102 15.384c1.154 3.461 6.527 9.844 11.007 14.765a57.645 57.645 0 0114.475 29.373c1.07 6.543-3.427 12.427-5.482 19.963-6.154 22.564-10.77 16.923-4.615 33.333s-30.769 22.563-45.127 15.384-30.256-49.743-30.256-54.87-13.846-63.076-2.564-67.179 18.46-6.153 18.46-6.153z"
        fill="#575a88"
      />
      <path
        d="M234.561 222.667l12.307 54.358 40.512 17.948s30.769-7.179 31.794 4.103c.67 7.365-34.87 10.256-34.87 10.256l-58.973-23.076L211.998 236z"
        fill="#9f616a"
      />
      <path
        d="M220.202 202.155s25.64 15.384 19.487 23.59-21.538 21.537-25.64 21.537-7.18-24.615-7.18-31.794 13.333-13.333 13.333-13.333z"
        fill="#575a88"
      />
      <path
        d="M194.547 98.2s-1.573 5.242 7.34 9.96 11.534 22.544 1.049 27.787-13.632 12.058-8.389 16.777 14.68 17.3 2.097 20.446-14.155 9.437-10.485 12.059-8.389-4.719-8.389-4.719-2.097 12.583-13.106 9.437-21.995-60.326-9.722-75.053c11.411-13.694 39.605-16.695 39.605-16.695z"
        fill="#2f2e41"
      />
      <path
        d="M197.896 92.803c-.002-7.681-22.982-2.162-32.834 8.562-6.822 7.427-17.185 18.6-8.502 26.475s-14.884 18.2-21.205 21.33-18.8 12.702-7.532 19.124 11.087 12.904 6.846 14.439 9.35-2.282 9.35-2.282-1.373 12.682 10.077 12.621 44.3-62.987 36.452-80.478c-7.297-16.264 7.348-19.791 7.348-19.791z"
        fill="#2f2e41"
      />
      <path
        d="M192.919 91.12c30.73-1.85 33.813 21.28 33.813 21.28-.212 13.386-21.47 6.864-27.374 8.86-7.123-5.125-20.853-14.82-30.672-21.739a46.442 46.442 0 0124.233-8.401z"
        fill="#2f2e41"
      />
      <path fill="#381e1d" d="M422.251 359.283h9.827v229.293h-9.827z" />
      <path
        d="M422.251 359.283s16.706-20.964 30.463 6.223c0 0-6.55 12.12-8.516 6.224s-6.673-14.71-12.18-9.485"
        fill="#381e1d"
      />
      <path
        d="M420.774 319.234s24.718 24.332 12.546 44.885a4.86 4.86 0 01-7.604.973c-4.196-4.15-10.83-14.458-18.981-39.962z"
        fill="#fda57d"
      />
      <path
        d="M403.416 191.08s25.55 7.861 20.637 38.652-2.948 52.41-2.948 52.41l6.551 39.307-11.792 16.05s-20.309-20.308-27.188-40.944-6.223-102.2 14.74-105.475z"
        opacity={0.1}
      />
      <path
        d="M403.089 190.752s25.55 7.862 20.636 38.653-2.948 52.41-2.948 52.41l6.552 39.307-11.793 16.05s-20.308-20.309-27.187-40.945-6.224-102.199 14.74-105.475z"
        fill={color}
      />
      <path d="M373.128 541.38l-4.188 31.367s10.752 4.402 13.974 3.406 8.87 3.052 8.87 3.052 24.026 7.59 28.744.77-5.984-8.907-14.667-14.048-12.355-24.986-12.355-24.986z" />
      <path
        d="M418.976 319.975v115.957l-22.274 110.716h-23.585l3.603-106.13s-24.567-85.821-13.757-117.922z"
        fill="#333"
      />
      <path
        d="M400.806 334.605s34.342 4.861 36.78 28.623a4.86 4.86 0 01-5.534 5.304c-5.842-.84-17.306-5.181-39.027-20.838zM405.054 185.511s-5.568 9.5-3.275 25.878c0 0-32.92-2.784-31.938-21.783 0 0 16.051-3.93 19.818-18.507z"
        fill="#fda57d"
      />
      <path d="M350.199 548.26l-4.188 31.366s10.752 4.402 13.974 3.405 8.869 3.052 8.869 3.052 24.026 7.59 28.744.77-5.984-8.906-14.667-14.047-12.354-24.986-12.354-24.986z" />
      <path
        d="M394.245 328.983V444.94L371.97 555.656h-23.585l3.603-106.13s-24.567-85.821-13.757-117.922z"
        opacity={0.1}
      />
      <path
        d="M393.262 328.983V444.94l-22.274 110.716h-23.584l3.603-106.13s-24.567-85.821-13.758-117.922z"
        fill="#333"
      />
      <path
        d="M381.47 191.408s-20.636-13.43-34.394 26.532-8.189 113.664-8.189 113.664 58.633 18.998 79.597-7.534v-39.635s11.137-45.204-4.586-84.51c0 0-13.757 5.568-32.428-8.517z"
        opacity={0.1}
      />
      <path
        d="M380.815 192.39s-20.637-13.43-34.394 26.533-8.19 113.663-8.19 113.663 58.634 18.999 79.598-7.533v-39.635s11.137-45.204-4.586-84.511c0 0-13.757 5.568-32.428-8.517z"
        opacity={0.1}
      />
      <path
        d="M380.815 191.408s-20.637-13.43-34.394 26.532-8.19 113.664-8.19 113.664 58.634 18.998 79.598-7.534v-39.635s11.137-45.204-4.586-84.51c0 0-13.757 5.568-32.428-8.517z"
        fill={color}
      />
      <path
        d="M359.85 211.389s25.55 7.861 20.637 38.652-2.948 52.41-2.948 52.41l32.756 33.083-11.792 16.05s-46.514-14.084-53.392-34.72-6.224-102.2 14.74-105.475z"
        opacity={0.1}
      />
      <path
        d="M358.213 212.371s25.55 7.862 20.636 38.653-2.948 52.41-2.948 52.41l32.756 33.083-11.792 16.05s-46.513-14.084-53.392-34.72-6.224-102.2 14.74-105.476z"
        opacity={0.1}
      />
      <path
        d="M358.868 211.389s25.55 7.861 20.637 38.652-2.948 52.41-2.948 52.41l32.756 33.083-11.793 16.05s-46.513-14.084-53.392-34.72-6.224-102.2 14.74-105.475z"
        fill={color}
      />
      <path
        d="M389.168 172.245l15.395 14.413a15.384 15.384 0 00-.685 1.395 26.558 26.558 0 01-6.849.898c-5.88 0-10.997-2.986-15.395-6.224 3.074-2.778 5.711-5.47 7.534-10.482z"
        opacity={0.1}
      />
      <circle cx={393.098} cy={148.988} r={26.532} fill="#e0e0e0" />
      <circle cx={397.52} cy={161.272} r={26.532} fill="#fda57d" />
      <path
        d="M371.152 148.988s-9.936 26.016 11.083 33.972a12.433 12.433 0 003.1-19.898z"
        fill="#e0e0e0"
      />
      <path
        d="M418.988 143.164s9.16 2.221-6.891 7.79a20.306 20.306 0 00-12.027 10.85 12.48 12.48 0 01-17.288 5.7l-5.079-2.793-8.844-20.636 10.482-12.12 18.016-2.293z"
        fill="#e0e0e0"
      />
      <ellipse cx={390.478} cy={169.952} rx={2.62} ry={4.586} fill="#fda57d" />
      <path
        d="M381.47 191.408s17.852 28.006 28.006 28.006-7.12-26.261-7.12-26.261l-.414 7.262z"
        fill="#333"
      />
      <path
        d="M484.303 436.192c-59.327 0-120.771-6.028-183.686-18.06-169.198-32.358-260.627-95.119-265.632-97.815l-15.082-25.081.003.002c1.412.758 121.562 64.666 286.653 96.11 151.5 28.852 373.176 35.48 568.894-96.811l-4.301 30.208c-90.05 60.869-173.04 91.327-285.433 105.298a822.184 822.184 0 01-101.416 6.149z"
        fill="#f55f44"
      />
      <path fill="#e0e0e0" d="M25.443 274.8h19.789v279.871H25.443z" />
      <path
        d="M18.989 545.483h32.697a18.989 18.989 0 0118.988 18.989v16.348H0v-16.349a18.989 18.989 0 0118.989-18.988z"
        fill="#e0e0e0"
      />
      <circle cx={35.337} cy={287.521} r={19.789} opacity={0.1} />
      <circle cx={35.337} cy={286.107} r={19.789} fill="#e0e0e0" />
      <path d="M25.443 546.888s12.721 4.234 19.789 0" opacity={0.1} />
      <path fill="#e0e0e0" d="M858.113 274.8h19.789v279.871h-19.789z" />
      <path
        d="M851.66 545.483h32.696a18.989 18.989 0 0118.99 18.989v16.348H832.67v-16.349a18.989 18.989 0 0118.988-18.988z"
        fill="#e0e0e0"
      />
      <circle cx={868.008} cy={287.521} r={19.789} opacity={0.1} />
      <circle cx={868.008} cy={286.107} r={19.789} fill="#e0e0e0" />
      <path d="M858.113 546.888s12.722 4.234 19.79 0" opacity={0.1} />
    </svg>
  );
};

SvgQueue.propTypes = {
  color: PropTypes.string
};
SvgQueue.defaultProps = {
  color: "primary"
};
const MemoSvgQueue = React.memo(SvgQueue);
export default MemoSvgQueue;
