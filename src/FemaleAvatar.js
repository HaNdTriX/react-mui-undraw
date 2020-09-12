import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFemaleAvatar = ({ color, ...props }) => {
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
        d="M676 338a337.1 337.1 0 01-24.55 126.7c-.04.09-.07.17-.11.26v.01a336.513 336.513 0 01-42.79 75.64q-5.055 6.75-10.43 13.22c-1.31 1.58-2.64 3.15-3.97 4.7q-10.275 11.925-21.62 22.85-2.64 2.55-5.34 5.04c-.42.39-.84.77-1.26 1.16a337.819 337.819 0 01-27.65 22.7q-9.675 7.155-19.86 13.59-2.235 1.425-4.5 2.8-3.93 2.4-7.93 4.69-5.22 3-10.57 5.81c-1.44.77-2.89 1.51-4.34 2.25a253.48 253.48 0 01-6.4 3.17c-.37.18-.74.36-1.11.53-1.4.68-2.82 1.34-4.24 2a334.896 334.896 0 01-57.46 20.39c-.11.03-.21.05-.32.08-1.29.33-2.59.65-3.89.96-.97.24-1.95.47-2.93.69a2.488 2.488 0 01-.37.09c-2.01.47-4.02.92-6.05 1.33-1.14.24-2.28.48-3.42.71-.69.15-1.39.28-2.08.41-.87.17-1.73.33-2.6.5-.48.1-.96.18-1.45.26-1.1.2-2.2.4-3.29.59-1.86.32-3.74.63-5.61.91-1.36.21-2.71.41-4.07.6-1.6.23-3.2.44-4.81.64-.44.07-.88.12-1.32.17l-1.71.21c-1.15.14-2.3.27-3.46.39-.6.07-1.19.13-1.79.19q-1.71.18-3.42.33a316.416 316.416 0 01-9.82.76 332.045 332.045 0 01-12.45.55c-1.49.04-2.99.07-4.49.09h-.03c-1.49.02-2.99.03-4.49.03a339.151 339.151 0 01-45.45-3.04q-16.575-2.22-32.62-6.02c-.43-.1-.86-.2-1.28-.31-1.08-.25-2.15-.52-3.22-.79-.95-.24-1.89-.49-2.84-.74a335.357 335.357 0 01-70.6-27.19c-.11-.06-.23-.12-.34-.18-.65-.34-1.29-.67-1.93-1.02q-2.115-1.11-4.21-2.26-11.925-6.555-23.24-14.02-2.91-1.905-5.76-3.87c-.61-.42-1.21-.84-1.81-1.26-.63-.44-1.26-.88-1.88-1.32q-2.475-1.755-4.92-3.55-10.125-7.44-19.65-15.61a339.74 339.74 0 01-59.16-65.85q-8.775-12.78-16.38-26.38A336.39 336.39 0 010 338C0 151.33 151.33 0 338 0s338 151.33 338 338z"
        fill={color}
      />
      <path
        d="M392.35 666.63c1.08-.25 2.15-.52 3.22-.79.95-.24 1.89-.49 2.84-.74.05-1.99.12-4.18.19-6.55.59-18.56 1.98-48.44 5.26-84.44q.27-2.895.54-5.83c1.17-12.2 2.54-25.03 4.18-38.33.05-.44.11-.87.16-1.31 1.33-10.78 2.84-21.85 4.54-33.13q1.785-11.835 3.86-23.93l.3-1.69c.4-2.33.81-4.65 1.23-6.99 1.17-6.51 2.42-13.06 3.73-19.61 4.61-23.04 10.1-46.22 16.65-68.77a550.91 550.91 0 0124.53-68.61 338.806 338.806 0 0126.74-49.83c.15-.23.3-.45.45-.68 13.15-19.81 28.18-36.62 45.34-49.19l-3.56-4.86q-24.66 18.075-45.24 48.1l-.2.29A327.437 327.437 0 00460.19 298a527.395 527.395 0 00-25.68 69.37q-9.84 33.03-17.65 71.57-2.745 13.575-5.24 27.82c-.28 1.62-.56 3.24-.84 4.87 0 .02-.01.05-.01.07-.43 2.5-.84 5-1.26 7.53q-1.56 9.555-2.94 18.96-2.13 14.49-3.85 28.48-.57 4.62-1.1 9.17-.75 6.42-1.42 12.67-.945 8.7-1.73 17.03l-.15 1.53-.24 2.63c-4.06 43.79-5.33 79.16-5.73 96.93zM469.01 637.91c.11-.06.23-.12.34-.18 2.06-1.07 4.1-2.16 6.14-3.28.67-7.98 1.57-16.75 2.75-25.97.25-1.9.5-3.83.78-5.77.14-1.04.29-2.09.44-3.15 1.18-8.12 2.58-16.5 4.26-24.92 6.83-34.36 18.17-69.48 37-91.16 1.01-1.17 2.04-2.29 3.11-3.38a67.662 67.662 0 018.61-7.55l-3.56-4.85a77.071 77.071 0 00-11.8 10.79q-1.875 2.085-3.66 4.34c-17.33 21.81-28.15 54.1-34.89 86.07-1.76 8.34-3.24 16.67-4.5 24.78q-.48 3.18-.92 6.3c-1.95 13.74-3.24 26.72-4.1 37.93z"
        opacity={0.2}
      />
      <circle cx={569.738} cy={175.982} r={30.089} opacity={0.2} />
      <circle cx={560.049} cy={434.991} r={30.089} opacity={0.2} />
      <path
        d="M450.286 226.521c6.38 35.998-7.705 68.593-7.705 68.593s-24.43-25.769-30.81-61.766 7.704-68.592 7.704-68.592 24.43 25.768 30.81 61.765zM550.282 311.971c-34.335 12.555-68.836 4.498-68.836 4.498s21.166-28.413 55.5-40.968 68.837-4.498 68.837-4.498-21.166 28.413-55.5 40.968zM556.105 541.333c-24.066 8.8-48.283 3.06-48.283 3.06s14.801-20.009 38.867-28.81 48.283-3.058 48.283-3.058-14.801 20.008-38.867 28.808z"
        opacity={0.2}
      />
      <path
        d="M439.96 536.27l1.22.63c-.12 1.3-.41 2.1-1.22-.63zM441.57 536.69c.01.14.03.29.04.43l-.43-.22c.01-.13.02-.27.04-.41.1-1.75-.02-3.82.35.2z"
        fill="#2f2e41"
      />
      <circle cx={311.683} cy={324.641} r={164.209} fill="#2f2e41" />
      <circle cx={325.2} cy={382.713} r={99.444} fill="#d0cde1" />
      <path
        d="M552.27 573.31l-.12.03-23.13 5.55-48.16 11.56-6.57 1.58-73.24 17.57-6.22 1.5-177.69 42.64a333.639 333.639 0 01-35.15-15.83c-.11-.06-.23-.12-.34-.18-.65-.34-1.29-.67-1.93-1.02q-2.115-1.11-4.21-2.26-11.925-6.555-23.24-14.02-2.91-1.905-5.76-3.87c-.61-.42-1.21-.84-1.81-1.26-.63-.44-1.26-.88-1.88-1.32q-2.475-1.755-4.92-3.55c17.26-31.37 58.36-52.22 99.46-63.63 31.02-8.62 37.84-36.95 37.25-62.16a146.952 146.952 0 00-1.46-17.18 167.478 167.478 0 00-5.96-26.74l99.45 3.32 10.26 23.64a53.492 53.492 0 00-.27 7.82c.78 19.39 12.75 31.93 27.52 40.02 1.92 1.05 3.89 2.03 5.89 2.94 24.22 11.01 52.73 11.76 52.73 11.76a101.52 101.52 0 0126.09.49q3.15.48 6.12 1.15a88.14 88.14 0 0132.11 14.37 91.601 91.601 0 0110.41 8.63 82.676 82.676 0 0114.77 18.45z"
        fill="#d0cde1"
      />
      <path
        d="M567.19 586.42c-.42.39-.84.77-1.26 1.16a337.819 337.819 0 01-27.65 22.7q-9.675 7.155-19.86 13.59-2.235 1.425-4.5 2.8-3.93 2.4-7.93 4.69-5.22 3-10.57 5.81c-1.44.77-2.89 1.51-4.34 2.25a253.48 253.48 0 01-6.4 3.17c-.37.18-.74.36-1.11.53l-4.23-3.51 49.68-60.72 9.99-12.21s3.99 0 13.14 6.66a130.993 130.993 0 0114.3 12.34c.24.25.49.49.74.74z"
        fill="#d0cde1"
      />
      <path
        d="M566.49 585.74a11.392 11.392 0 01-.56 1.84 337.819 337.819 0 01-27.65 22.7 117.95 117.95 0 01-25.79 6.13s.75 3.76 1.43 10.26q-3.93 2.4-7.93 4.69-5.22 3-10.57 5.81c-1.44.77-2.89 1.51-4.34 2.25a253.48 253.48 0 01-6.4 3.17c-.37.18-.74.36-1.11.53-1.4.68-2.82 1.34-4.24 2a334.896 334.896 0 01-57.46 20.39c-.11.03-.21.05-.32.08-1.29.33-2.59.65-3.89.96-.97.24-1.95.47-2.93.69a2.488 2.488 0 01-.37.09c-2.01.47-4.02.92-6.05 1.33-1.14.24-2.28.48-3.42.71-.69.15-1.39.28-2.08.41-.87.17-1.73.33-2.6.5-.48.1-.96.18-1.45.26-1.1.2-2.2.4-3.29.59-1.86.32-3.74.63-5.61.91-1.36.21-2.71.41-4.07.6-1.6.23-3.2.44-4.81.64-.44.07-.88.12-1.32.17l-1.71.21c-1.15.14-2.3.27-3.46.39-.6.07-1.19.13-1.79.19q-1.71.18-3.42.33a316.416 316.416 0 01-9.82.76 332.045 332.045 0 01-12.45.55c-1.49.04-2.99.07-4.49.09h-.03c-1.49.02-2.99.03-4.49.03a339.151 339.151 0 01-45.45-3.04q-16.575-2.22-32.62-6.02c-.43-.1-.86-.2-1.28-.31-1.08-.25-2.15-.52-3.22-.79-.95-.24-1.89-.49-2.84-.74a335.357 335.357 0 01-70.6-27.19c-.11-.06-.23-.12-.34-.18-.65-.34-1.29-.67-1.93-1.02 54.89-12.79 141.63-32.96 216.9-50.24q3.165-.72 6.29-1.44c27.8-6.38 53.84-12.32 75.87-17.29l6.7-1.5c23.67-5.32 42.05-9.36 52.02-11.38a81.488 81.488 0 018.14-1.43l20.81 32.25z"
        fill="#2f2e41"
      />
      <circle cx={161.449} cy={205.851} r={48.913} fill="#2f2e41" />
      <circle cx={461.917} cy={191.876} r={48.913} fill="#2f2e41" />
      <path
        d="M409.51 170.913a48.912 48.912 0 0143.672-48.624 48.913 48.913 0 100 97.248 48.912 48.912 0 01-43.672-48.624zM106.796 245.416a48.912 48.912 0 01-2.836-65.296 48.913 48.913 0 1068.06 69.463 48.912 48.912 0 01-65.224-4.167zM311.683 247.777c-57.887 0-104.814 27.374-104.814 61.142 0 15.109 9.432 28.918 25.003 39.585l20.178-14.62-5.488 22.904a121.352 121.352 0 007.027 3.02l30.143-35.167v43.204a175.958 175.958 0 0027.95 2.215c57.888 0 104.815-27.374 104.815-61.141s-46.927-61.142-104.814-61.142z"
        fill="#2f2e41"
      />
      <path
        d="M413.003 191.876s-7.596 34.938 39.875 48.914zM206.869 198.235s17.469 39.06-34.938 56.53z"
        fill="#2f2e41"
      />
      <ellipse
        cx={489.413}
        cy={514.602}
        rx={8.287}
        ry={19.889}
        transform="rotate(-15.639 -49.352 1412.482)"
        fill="#d0cde1"
      />
      <ellipse
        cx={688.302}
        cy={498.027}
        rx={19.889}
        ry={8.287}
        transform="rotate(-86.476 497.747 581.344)"
        fill="#d0cde1"
      />
    </svg>
  );
};

SvgFemaleAvatar.propTypes = {
  color: PropTypes.string
};
SvgFemaleAvatar.defaultProps = {
  color: "primary"
};
export default SvgFemaleAvatar;