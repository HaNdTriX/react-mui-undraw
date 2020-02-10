import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMaleAvatar = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 676 676"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M676 338a336.852 336.852 0 01-27.22 133.1l-1.12 2.58a338.559 338.559 0 01-368.31 197.25q-3.045-.54-6.08-1.12a334.981 334.981 0 01-61.14-18.03q-4.815-1.935-9.56-4.01c-2.16-.94-4.32-1.91-6.46-2.91A338.414 338.414 0 010 338C0 151.33 151.33 0 338 0s338 151.33 338 338z"
        fill={color}
      />
      <path
        d="M279.35 670.93q-3.045-.54-6.08-1.12c-1.32-38.31-5.85-116.94-21.3-199.29-8.45-45.07-20.18-91.27-36.45-132.57a412.604 412.604 0 00-19.07-41.84c-16.44-31.05-36.38-57.19-60.56-74.9l3.56-4.86q30.165 22.11 54.22 62.08 7.215 11.97 13.86 25.54 7.125 14.52 13.59 30.83 4.125 10.38 7.97 21.48 16.74 48.195 28.46 109.98 2.595 13.65 4.94 27.97c12.11 73.97 15.76 142.36 16.86 176.7zM202.57 647.77c-2.16-.94-4.32-1.91-6.46-2.91-2.09-22.7-5.93-50.86-12.95-77.59a254.557 254.557 0 00-11.81-35.2c-8.01-18.75-18.38-34.69-31.79-44.52l3.56-4.85c14.04 10.28 24.87 26.53 33.24 45.54 9.43 21.42 15.72 46.35 19.91 70.17 3.11 17.69 5.07 34.78 6.3 49.36z"
        opacity={0.2}
      />
      <circle cx={102.262} cy={190.982} r={30.089} opacity={0.2} />
      <circle cx={111.951} cy={449.991} r={30.089} opacity={0.2} />
      <path
        d="M221.714 241.521c-6.38 35.998 7.705 68.593 7.705 68.593s24.43-25.769 30.81-61.766-7.704-68.592-7.704-68.592-24.43 25.768-30.81 61.765zM121.718 326.971c34.335 12.555 68.836 4.498 68.836 4.498s-21.166-28.413-55.5-40.968-68.837-4.498-68.837-4.498 21.166 28.413 55.5 40.968zM115.895 556.333c24.066 8.8 48.283 3.06 48.283 3.06s-14.801-20.009-38.867-28.81-48.283-3.058-48.283-3.058 14.801 20.008 38.867 28.808z"
        opacity={0.2}
      />
      <circle cx={337.306} cy={281.079} r={131.77} fill="#d0cde1" />
      <path
        d="M285.833 381.965s16.472 78.239 16.472 86.474 78.238 45.296 78.238 45.296l70.003-12.353 24.707-74.12s-41.178-61.768-41.178-86.475z"
        fill="#d0cde1"
      />
      <path
        d="M648.78 471.1l-1.12 2.58a338.559 338.559 0 01-368.31 197.25q-3.045-.54-6.08-1.12a334.981 334.981 0 01-61.14-18.03q-4.815-1.935-9.56-4.01c-2.16-.94-4.32-1.91-6.46-2.91a337.593 337.593 0 01-55.25-32.28l-15.62-45.31 8.78-6.7 18.06-13.79 19.27-14.71 5.01-3.83 75.61-57.72 5.58-4.26 39.3-30 .01-.01s42.5 69.25 104.27 48.66 60.42-79.63 60.42-79.63zM223.035 174.916s41.837-90.646 122.024-69.728 125.51 52.296 128.996 83.674-1.744 78.443-1.744 78.443-8.716-64.498-64.498-50.552-142.941 3.486-142.941 3.486l-13.946 125.51s-15.688-22.662-33.12-8.716-50.553-134.226 5.23-162.117z"
        fill="#2f2e41"
      />
      <path
        d="M212.13 651.78q-4.815-1.935-9.56-4.01c-2.16-.94-4.32-1.91-6.46-2.91a338.835 338.835 0 01-87.59-58.7c9.19-12.52 16.72-18.89 16.72-18.89h61.77l9.26 31.14zM594.67 464.32l52.99 9.36a337.944 337.944 0 01-56.76 88.57z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgMaleAvatar.propTypes = {
  color: PropTypes.string
};
SvgMaleAvatar.defaultProps = {
  color: "primary"
};
const MemoSvgMaleAvatar = React.memo(SvgMaleAvatar);
export default MemoSvgMaleAvatar;
