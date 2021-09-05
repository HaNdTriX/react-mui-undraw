import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWilderness = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 892.218 694.92"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={435} cy={648.92} rx={435} ry={46} fill="#e6e6e6" />
      <path
        d="M438.933 643.133a6.736 6.736 0 00-6.79-6.018 6.82 6.82 0 00-6.663 5.165l-6.663 32.354a13.088 13.088 0 00-.34 2.885c0 7.296 6.106 12.366 13.666 12.366s13.669-5.07 13.669-12.366a13.237 13.237 0 00-.472-3.46zM489.331 657.605a15.294 15.294 0 00-2.178-1.593L461.7 638.224c-2.479-1.555-5.125-1.512-7.047.366a4.953 4.953 0 00-.732 6.297l19.219 25.26a13.387 13.387 0 001.464 1.716c3.331 3.723 10.719 3.928 14.778 0 4.005-3.994 3.958-11.11-.05-14.258zM508.459 631.254h-25.78a3.135 3.135 0 00-3.25 2.987 3.408 3.408 0 002.533 3.354l24.319 7.523c3.532.823 8.291-2.325 8.291-6.257 0-5-2.782-7.607-6.113-7.607zM385.793 634.227a3.2 3.2 0 00-3.459-2.987h-25.78c-3.246 0-5.985 3.507-5.985 7.438s4.62 7.263 8.164 6.44l24.685-7.523a3.097 3.097 0 002.375-3.368zM403.486 638.254l-25.46 17.71a11.84 11.84 0 00-2.197 1.593 9.639 9.639 0 00-.494 13.622q.238.256.494.494a10.759 10.759 0 0014.775 0 11.257 11.257 0 001.464-1.713l19.234-25.117a4.828 4.828 0 00-.732-6.245 5.491 5.491 0 00-7.084-.344zM443.09 603.641a2.735 2.735 0 00.472-1.47c0-3.1-6.11-5.255-13.67-5.255s-13.665 2.155-13.665 5.255a2.618 2.618 0 00.34 1.226l6.663 13.75c.763 1.298 3.516 2.205 6.663 2.195 3.547 0 6.494-1.121 6.79-2.557zM487.133 604.575c-4.06-1.67-11.448-1.582-14.779 0a11.984 11.984 0 00-1.464.73l-19.22 10.734c-1.306.85-.998 1.976.733 2.676a11.5 11.5 0 007.047.156l25.453-7.56a21.698 21.698 0 002.178-.676c4.009-1.338 4.056-4.363.052-6.06zM512.322 618.6c0-1.67-4.759-3.009-8.291-2.659l-24.319 3.198c-1.453.203-2.533.676-2.533 1.425s1.585 1.27 3.25 1.27h25.78c3.331 0 6.113-1.109 6.113-3.234zM381.168 619.139l-24.685-3.198c-3.544-.35-8.163 1.066-8.163 2.737s2.738 3.161 5.985 3.161h25.78c1.793 0 3.459-.491 3.459-1.27s-.77-1.227-2.376-1.43zM408.32 618.712c1.8-.71 2.013-1.786.732-2.654l-19.234-10.674a10.095 10.095 0 00-1.464-.728 22.485 22.485 0 00-14.775 0q-.256.1-.494.21c-3.625 1.656-3.404 4.248.494 5.789a16.885 16.885 0 002.196.677l25.461 7.527a11.634 11.634 0 007.084-.147z"
        fill="#3f3d56"
      />
      <path
        d="M482.324 601.416c0 39.762-22.161 40.498-49.498 40.498s-72.218-7.866-49.498-40.498c23.964-34.418 65.075-100.021 49.498-103.496 0 0 49.498 63.733 49.498 103.496z"
        fill="#f9a825"
      />
      <path
        d="M450.258 625.883c0 15.74-8.772 16.03-19.592 16.03s-28.587-3.113-19.593-16.03c9.485-13.623 25.758-39.591 19.593-40.967 0 0 19.592 25.228 19.592 40.967z"
        fill="#ff6584"
        opacity={0.5}
      />
      <path
        d="M816.166 608.612l67.5-100.38-67.362 111.18.14 11.294q-7.391.057-14.64-.246l3.349-145.192-.092-1.12.124-.217.32-13.72-73.92-107.324 73.833 97.056.262 2.9 2.528-109.699-63.847-111.27 64.03 92-.669-227.268.001-.756.022.744 4.238 179.117 58.19-72.758-57.999 88.188 1.27 98.123L866.99 303.5l-53.35 110.19.708 54.561 77.87-133.398-77.633 152.432zM91.166 612.612l67.5-100.38-67.362 111.18.14 11.294q-7.391.057-14.64-.246l3.349-145.192-.092-1.12.124-.217.32-13.72-73.92-107.324 73.833 97.056.262 2.9 2.528-109.699-63.847-111.27 64.03 92-.669-227.268.001-.756.022.744 4.238 179.117 58.19-72.758-57.999 88.188 1.27 98.123L141.99 307.5 88.64 417.69l.708 54.561 77.87-133.398-77.633 152.432zM534.53 590.37l79.262-117.87-79.1 130.551.165 13.264q-8.68.066-17.19-.29l3.93-170.492-.107-1.315.145-.255.377-16.11-86.802-126.026 86.7 113.968.307 3.405 2.97-128.814-74.974-130.66L525.4 267.758 524.615.888l.002-.888.025.874 4.977 210.328 68.329-85.435-68.105 103.555 1.491 115.22 62.877-112.45-62.646 129.39.83 64.07 91.44-156.644-91.162 178.994z"
        fill="#e6e6e6"
      />
      <path
        d="M335.936 441.284a9.919 9.919 0 01-10.353-9.048L324.1 415.2l12.691-4.615 7.677 16.634a9.919 9.919 0 01-8.533 14.064z"
        fill="#ffb9b9"
      />
      <circle cx={275.644} cy={217.912} r={24.229} fill="#ffb9b9" />
      <path
        d="M282.567 272.137l-41.535-10.383c9.001-13.507 14.745-26.123 13.845-36.92h26.536c-1.658 17.51-1.657 33.605 1.154 47.303z"
        fill="#ffb9b9"
      />
      <path
        d="M296.411 418.663h-63.455c-13.262-66.743-9.886-123.748 12.69-168.447a13.753 13.753 0 001.059-5.074 3.767 3.767 0 015.494-3.02 120.157 120.157 0 0029.804 10.76 3.767 3.767 0 012.45 5.583 4.157 4.157 0 00-.733 3.289 381.68 381.68 0 0112.691 156.909z"
        fill={color}
      />
      <path
        fill="#2f2e41"
        d="M289.489 612.491l-18.46 2.307-11.537-163.831-39.227 159.217-19.614 1.153 19.614-204.212h79.608l-10.384 205.366z"
      />
      <path
        d="M222.263 648.247l-13.606 1.236c-9.196-2.75-7.355-13.037-8.839-24.837l2.07-16.559 2.896-.6c4.256-8.645 9.114-9.496 14.68-1.175l1.612-.294 2.07 13.453 5.665 19.121a7.542 7.542 0 01-6.548 9.655zM291.487 648.247l-13.605 1.236c-9.197-2.75-7.356-13.037-8.84-24.837l2.07-16.559 2.897-.6c4.255-8.645 9.113-9.496 14.68-1.175l1.611-.294 2.07 13.453 5.666 19.121a7.542 7.542 0 01-6.549 9.655zM296.235 215.813L285.4 208.78a13.532 13.532 0 00-20.116 6.813l-6.37 17.894-4.614-2.307c-8.159-14.105-12.02-27.5 1.154-38.074 3.548-8.574 16.034-11.712 25.294-11.115 11.405.736 23.163 10.07 23.163 21.499l-1.516 8.281a4.025 4.025 0 01-6.16 4.042zM265.26 468.273l-74.993-13.844c21.009-64.534 29.868-127.518 17.43-187.788a11.192 11.192 0 018.4-13.183l23.781-5.55 12.691-9.229 12.691 17.306zM307.949 463.658l-23.075 5.77c5.715-62.786.862-132.545-10.384-206.52l5.77-12.692 5.19 4.039 18.637 20.307a11.18 11.18 0 014.978 9.372z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M339.1 411.74l-18.46 9.23-33.458-80.762 17.306-47.303L339.1 411.74z"
      />
      <path
        d="M231.649 396.599a9.919 9.919 0 01-13.235-3.727l-8.652-14.748 9.48-9.617 14.076 11.726a9.919 9.919 0 01-1.67 16.366z"
        fill="#ffb9b9"
      />
      <path
        d="M220.265 365.59l-8.077 24.229c-21.945-13.493-37.34-31.856-42.688-57.687l20.414-58.58a29.968 29.968 0 0124.582-19.874l2.307 55.38-16.152 27.689z"
        fill="#2f2e41"
      />
      <ellipse
        cx={421.459}
        cy={315.26}
        rx={4.615}
        ry={2.884}
        transform="rotate(-67.295 267.484 379.595)"
        fill="#ffb9b9"
      />
      <path
        d="M664.561 227.318s-12.402-4.429-20.375 13.288-20.375 37.207-20.375 37.207l7.087 1.771s1.772-12.402 6.201-14.173l-1.772 15.945s53.152 18.603 77.07-1.772l-.885-6.2s3.543.885 3.543 6.2l2.658-2.657s-2.658-5.315-10.63-12.402c-5.233-4.652-7.032-13.501-7.65-19.034a23.033 23.033 0 00-5.303-12.544c-5.298-6.14-14.952-12.666-29.569-5.629z"
        fill="#2f2e41"
      />
      <path
        fill="#fbbebe"
        d="M591.723 379.307l11.597 14.76 7.381-8.435-6.326-10.543-12.652 4.218zM587.506 605.983l-4.217 22.14 10.543 5.272 7.38-5.272v-22.14h-13.706zM661.307 605.983l4.218 22.14-10.543 5.272-7.381-5.272v-22.14h13.706z"
      />
      <path
        fill="#2f2e41"
        d="M618.081 406.719l-14.761 105.43-21.086 95.943 25.304 3.163 20.032-89.617 25.303-75.91-3.163 90.671-5.271 74.856h18.977l13.706-101.214 15.156-75.251-.396-28.071h-73.801zM590.669 626.015s-5.272-6.326-8.435-3.163-10.543 15.815-10.543 15.815-16.869 9.489-3.163 11.597 17.924 0 17.924-1.054 2.108-4.217 2.108-4.217l5.272 1.054 7.38-2.109s3.163-19.425 0-18.674-9.489 3.914-10.543.751zM658.145 626.015s5.271-6.326 8.434-3.163 10.543 15.815 10.543 15.815 16.87 9.489 3.163 11.597-17.923 0-17.923-1.054-2.109-4.217-2.109-4.217l-5.271 1.054-7.38-2.109s-3.163-19.425 0-18.674 9.488 3.914 10.543.751z"
      />
      <circle cx={668.161} cy={260.697} r={21.086} fill="#fbbebe" />
      <path
        d="M682.394 273.876s-2.109 17.923-1.055 22.14 3.163 10.544 3.163 10.544l-33.738-6.326s9.49-20.032 7.38-23.195 24.25-3.163 24.25-3.163z"
        fill="#fbbebe"
      />
      <path
        d="M685.557 299.18l-34.792-7.38-20.032 122.3a45.675 45.675 0 0127.412 1.054c14.76 5.271 34.792 0 34.792 0l-4.217-114.92z"
        fill={color}
      />
      <path
        d="M657.85 282.113l-12.357 6.523-15.815 3.163-16.869 40.064 2.109 28.466s-17.923 32.684-20.032 50.607c0 0 2.109 27.412 36.901 26.358l23.195-64.313s9.489-48.498 0-62.204c0 0 6.792-25.698 2.869-28.664z"
        fill="#2f2e41"
      />
      <path
        d="M636.004 291.8l-3.414-.583-2.912.582s-7.38 1.055-15.814 8.435-36.901 30.575-39.01 36.9-1.054 16.87 2.109 23.195 9.489 14.76 9.489 14.76l3.163 7.38 17.923-5.27s-11.598-22.141-10.543-31.63L618.08 328.7zM681.226 286.88l15.928 19.68 8.435 10.543-10.544 35.846-5.271 30.575s12.652 48.498 2.108 63.259c0 0-6.325 7.38-8.434-1.055s-2.109-48.498-2.109-48.498-8.434-52.715-4.217-66.421-.226-41.469 4.104-43.93z"
        fill="#2f2e41"
      />
      <path
        d="M696.1 439.403v10.543s-2.109 34.792 8.434 30.575 3.163-30.575 3.163-30.575l-1.054-11.598z"
        fill="#fbbebe"
      />
      <path
        d="M644.655 261.821c8.02-5.803 14.51-12.487 18.804-20.439 0 0 14.716 16.352 23.71 17.17s.817-19.622.817-19.622l-16.351-4.088-15.534 1.635-12.263 8.176zM697.154 313.939l8.434 3.163 1.055 10.543 4.217 64.313-2.109 48.499-15.814 1.054-5.272-53.77-2.108-59.041 11.597-14.761z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgWilderness.propTypes = {
  color: PropTypes.string
};
SvgWilderness.defaultProps = {
  color: "primary"
};
export default SvgWilderness;
