import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFingerprint = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 910.225 801.723"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M771.169 298.167C727.881 127.951 578.309 5.078 402.744.15 309.928-2.455 212.259 28.328 141.15 136.048c-127.117 192.563 7.811 325.63 101.88 388.86a588.61 588.61 0 01121.663 109.35c63.54 75.401 185.776 169.097 331.355 22.29 105.515-106.405 103.955-245 75.121-358.38z"
        fill="#f2f2f2"
      />
      <ellipse cx={455} cy={730.723} rx={455} ry={23} fill="#3f3d56" />
      <ellipse cx={732.182} cy={768.723} rx={178.043} ry={9} fill="#3f3d56" />
      <ellipse cx={396.056} cy={792.723} rx={178.043} ry={9} fill="#3f3d56" />
      <path
        d="M681.378 350.165s30.246-.441 23.802 8.654-31.444 8.46-31.444 8.46z"
        fill="#ffb9b9"
      />
      <path
        d="M588.34 238.01l30.61 41.559 26.464 31.617s27.42 28.603 30.479 32.559 12.042 2.824 10.13 8.853-4.766 16.07-7.751 17.115-17.013-.752-18.042-2.737-66.577-39.033-89.968-65.695L548 286.171l-.334-25.564z"
        fill={color}
      />
      <path
        d="M588.34 238.01l30.61 41.559 26.464 31.617s27.42 28.603 30.479 32.559 12.042 2.824 10.13 8.853-4.766 16.07-7.751 17.115-17.013-.752-18.042-2.737-66.577-39.033-89.968-65.695L548 286.171l-.334-25.564z"
        fill="#ff6584"
      />
      <path
        d="M588.34 238.01l30.61 41.559 26.464 31.617s27.42 28.603 30.479 32.559 12.042 2.824 10.13 8.853-4.766 16.07-7.751 17.115-17.013-.752-18.042-2.737-66.577-39.033-89.968-65.695L548 286.171l-.334-25.564z"
        opacity={0.1}
      />
      <path
        d="M601 218.723l6.364 15H613l-8-38c0-24.391-11.772-45-36.163-45A30.837 30.837 0 00538 181.559v37.268a14.896 14.896 0 0014.896 14.896h43.729zM497.5 602.223s-9 12-9 15-5 4-8 7-6 2-4 5-25 21-25 21l-26 34 7 6 20-21-3 37 28 26s12 2 13 0-10-22-10-22 1-18 7-25a102.03 102.03 0 0010-14s-3-4 4-5 2-7 2-7 2-1 8-1 33-29 33-29zM609.5 633.223s-4 14 3 22 0 6 0 6 1 6-3 9-4 9-4 9-5 10-4 16 1 36 1 36h10v-26l20 26h50s-1-5-6-6-20 0-23-21c0 0-1-12-3-14s-4-9-2-14 0-7 3-9 4-8 2-11-8-8-1-11 7-18 7-18z"
        fill="#2f2e41"
      />
      <path
        d="M543.5 393.223s-11 9 3 46 20 85 20 85-14 12-14 18-62 44-58 61 77 49 84 47 41-98 41-98-13-106-14-107-31-50-31-50l-18-37z"
        fill="#2f2e41"
      />
      <path
        d="M543.5 393.223s-11 9 3 46 20 85 20 85-14 12-14 18-62 44-58 61 77 49 84 47 41-98 41-98-13-106-14-107-31-50-31-50l-18-37z"
        opacity={0.1}
      />
      <path
        d="M542.5 370.223s-8 29 11 59 41 92 41 92 21 65 12 112c0 0-3 6 5 6s92-2 85-23-38-119-38-119l-40-99-2-30-15-23h-31z"
        fill="#2f2e41"
      />
      <path
        d="M402.609 400.223s-30.25 0-23.674 9 31.565 8 31.565 8zM561 193.723s2 14-5 16 28 17 28 17 7-24 10-27-33-6-33-6z"
        fill="#ffb9b9"
      />
      <path
        d="M561 193.723s2 14-5 16 28 17 28 17 7-24 10-27-33-6-33-6z"
        opacity={0.1}
      />
      <path
        d="M589 216.723s-31-9-32-12-8 4-11 9-9 11-12 11-25 13-30 36c-2.289 10.529-5.626 16.657-8.571 20.207a19.292 19.292 0 00-3.883 10.001.974.974 0 01-.546.792c-2 1 42 43 42 43s17-4 20 0-2 11-5 15-10 24-6 27 25-27 37-21 24 1 24 1 5 16 13 16 10-13 7-17-15-12-9-23 8-31 8-31 16-19-13-42c0 0-10-28-13-30s-8-3-8-5 1-8 1-8z"
        fill="#ff6584"
      />
      <path
        d="M494 286.723l-30 42-26 32s-27 29-30 33-12 3-10 9 5 16 8 17 17-1 18-3 66-40 89-67l22.04-15.433-.04-25.567z"
        fill="#ff6584"
      />
      <path
        d="M554.592 335.8l57.966 1.85a2.517 2.517 0 012.442 2.516v.925a2.517 2.517 0 01-2.63 2.514l-57.966-2.775a2.517 2.517 0 01-2.404-2.514 2.517 2.517 0 012.592-2.516z"
        fill="#2f2e41"
      />
      <ellipse cx={614} cy={341.223} rx={1} ry={5.5} fill="#2f2e41" />
      <circle cx={581} cy={181.723} r={28} fill="#ffb9b9" />
      <path
        d="M592.703 152.06c-5.425-1.375-18.29-1.337-20.172-1.337A34.531 34.531 0 00538 185.254l-13 48.469h25.304l4.696-18 6.667 18h12.738l1.095-10.817 4.311 10.817H594c-10.626-24.044-16.28-45.96-2.318-59.488 9.427 1.284 17.379-1.241 18.674-6.352 1.493-5.89-6.41-12.973-17.653-15.823z"
        fill="#2f2e41"
      />
      <path
        d="M32.9 323.323a14.012 14.012 0 01-12.2-21c17.8-30 71.9-100.1 190.1-100.1 51.2 0 96.1 13.6 133.4 40.4 30.7 22 47.9 46.9 56.1 58.9a13.897 13.897 0 01-3.7 19.4 14.224 14.224 0 01-19.6-3.7c-14.9-21.6-60.1-87.2-166.2-87.2-103.6 0-150.4 60.4-165.7 86.3a13.804 13.804 0 01-12.2 7z"
        fill={color}
      />
      <path
        d="M270.3 597.723a13.934 13.934 0 01-3.5-.4c-85.7-21.5-117.7-108.1-119-111.7l-.2-.8c-.7-2.5-17.9-61.9 8.5-96.7 12.1-15.9 30.5-24 54.8-24 22.6 0 38.9 7.1 50.1 21.8 9.2 12 12.9 26.8 16.5 41.1 7.5 29.7 12.9 45.3 44.1 46.9 13.7.7 22.7-7.4 27.8-14.3 13.8-18.8 16.2-49.5 5.8-76.5-13.4-35-60.8-100.9-144.4-100.9-35.7 0-68.5 11.6-94.8 33.4-21.8 18.1-39.1 43.6-47.4 69.8-15.4 48.8 4.8 125.5 5 126.2a13.87 13.87 0 01-10 17 14.202 14.202 0 01-17.3-9.9c-.9-3.5-22.5-85.3-4.7-141.7 19.4-61.1 79.2-122.7 169.2-122.7 41.6 0 80.9 14.3 113.7 41.3 25.4 21 46.2 49.2 57 77.4 13.8 36 10.1 76.4-9.4 102.8-13 17.6-31.5 26.8-52 25.8-53.4-2.7-63-40.4-70-67.9-7.2-28.2-11.8-41.8-39.3-41.8-15.1 0-25.7 4.2-32.3 12.9-9 11.9-9.7 30.5-8.7 44l.03.422a113.927 113.927 0 0015.21 48.702c13.883 23.936 42.042 60.645 88.76 72.376a13.891 13.891 0 0110.2 16.9 14.196 14.196 0 01-13.7 10.5z"
        fill={color}
      />
      <path
        d="M160.3 591.323a14.238 14.238 0 01-10.3-4.4c-34.3-36.4-53.7-77.1-61-128v-.3c-4.1-33.7 1.9-81.4 31.3-114.2 21.7-24.2 52.2-36.5 90.5-36.5 45.3 0 80.9 21.3 103.1 61.5a172.867 172.867 0 0119.4 59.5 14.126 14.126 0 01-28.1 2.9 144.754 144.754 0 00-16.5-49.7c-17.2-30.7-43.4-46.3-78-46.3-29.9 0-53.3 9.1-69.4 27.1-23.2 25.9-27.7 65.8-24.5 92.2 6.4 45 23.5 80.8 53.7 112.8a13.831 13.831 0 01-.7 19.7 14.185 14.185 0 01-9.5 3.7z"
        fill={color}
      />
      <circle cx={211} cy={442.723} r={18} fill={color} />
    </svg>
  );
};

SvgFingerprint.propTypes = {
  color: PropTypes.string
};
SvgFingerprint.defaultProps = {
  color: "primary"
};
export default SvgFingerprint;
