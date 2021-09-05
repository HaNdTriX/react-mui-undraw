import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgTravelMode = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 743.351 590.093"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M659.899 551.681l74.068-110.146-73.917 121.996.155 12.394q-8.111.062-16.064-.27l3.673-159.32-.1-1.229.135-.237.352-15.055-81.113-117.767 81.017 106.5.288 3.182 2.774-120.373-70.06-122.097 70.26 100.951L650.634.83l.001-.83.024.816 4.65 196.546 63.852-79.837-63.642 96.769 1.393 107.67 58.757-105.082-58.54 120.911.775 59.87 85.447-146.378-85.187 167.264z"
        fill="#d0cde1"
      />
      <ellipse cx={376.587} cy={574.093} rx={314} ry={16} fill="#d0cde1" />
      <circle cx={560.056} cy={575.773} r={9.505} fill="#3f3d56" />
      <path
        d="M561.352 378.334l-25.058-66.533s3.888-12.53-6.48-11.665-38.02 10.369-38.02 10.369-9.504.864 3.457 14.257l22.465 70.421 7.345-3.456-24.194-69.99s-1.296-4.752 3.456-6.048 22.898-9.073 24.626-4.32 24.194 73.013 24.194 73.013z"
        fill="#3f3d56"
      />
      <path
        d="M493.955 424.13l48.387 144.73a52.018 52.018 0 0012.629 6.106 66.219 66.219 0 0012.43 2.968 15.027 15.027 0 004.696-.372c24.88-4.968 110.224-50.608 110.224-50.608s-43.635-136.091-50.98-152.508-23.761-10.37-23.761-10.37-82.93 22.393-94.832 26.554q-.37.13-.648.233a26.942 26.942 0 00-12.957 9.932l-.004.005c-12.097 7.344-5.184 23.33-5.184 23.33z"
        fill={color}
      />
      <path
        d="M528.689 385.387l.233.832c3.745-1.05 6.936 7.304 6.967 7.388l53.139 147.318.812-.293-6.738-18.68 72.374-31.967 5.7 16.373.816-.284-47.54-136.57-.026-.04c-.169-.268-4.177-6.532-8.932-5.27l.221.835c3.972-1.058 7.615 4.337 7.954 4.855l10.062 28.907-76.083 24.87L536.7 393.31c-.143-.38-3.504-9.185-8.011-7.922zm95.326 14.22l7.412 21.293-74.9 27.374-8.585-23.8zM565.37 472.79l-8.55-23.704 74.892-27.37 7.359 21.14zm73.985-29.117l8.068 23.175-73.576 29.443-8.184-22.687zm-56.547 77.463l-8.668-24.032 73.567-29.439 7.484 21.5zM499.139 418.945c4.32 6.913 52.708 151.644 52.708 151.644a27.656 27.656 0 003.124 4.377 66.219 66.219 0 0012.43 2.968 15.027 15.027 0 004.696-.372c-2.973-1.071-9.613-4.54-12.905-14.75-4.32-13.393-51.844-154.668-51.844-154.668s1.486-10.654 5.4-17.514q-.37.13-.648.233a26.942 26.942 0 00-12.957 9.932l-.004.005s-4.32 11.233 0 18.145z"
        opacity={0.2}
      />
      <path
        d="M507.78 450.916l4.752 14.689s-3.888 28.946 16.417 47.956l4.32 14.689-4.464.12-4.715-14.102s-15.662-18.892-15.77-47.17l-3.997-16.182z"
        fill="#3f3d56"
      />
      <circle cx={589.218} cy={575.989} r={9.505} fill="#3f3d56" />
      <circle cx={681.457} cy={536.026} r={9.505} fill="#3f3d56" />
      <path
        d="M340.087 131.593s-22 4-23 13a105.387 105.387 0 000 19z"
        fill="#575a89"
      />
      <path
        d="M466.087 341.593s-64 23-106 3-93-45-93-45-25 2-22-13 23-102 69-131c0 0 28-36 44-34s78 150 78 150z"
        fill="#575a89"
      />
      <path
        d="M466.087 341.593s-64 23-106 3-93-45-93-45-25 2-22-13 23-102 69-131c0 0 28-36 44-34s78 150 78 150z"
        opacity={0.2}
      />
      <path
        d="M500.087 287.593l4 10s26 16 15 27-27.558-18.5-27.558-18.5l-6.442-12.5zM281.087 466.593l-4 69 21 9 8-83-25 5zM366.087 466.593l28 36 8 24 20-1 5-24-28-28-33-7z"
        fill="#a0616a"
      />
      <circle cx={363.587} cy={86.093} r={27} fill="#a0616a" />
      <path d="M358.087 106.593l2 25 32-10s-12-19-9-24z" fill="#a0616a" />
      <path
        d="M358.087 121.593s18.946 5 29.973-7l23.027 11-30 112-63-17 10-22s-13-15 1-29c0 0 3-28 12-34a128.69 128.69 0 0017-14z"
        fill="#d0cde1"
      />
      <path
        d="M387.587 114.093s-34 27 3 107 68 148 80 144 53-35 39-46-73-46-81-92 11-93 11-93z"
        fill="#575a89"
      />
      <path fill="#575a89" d="M425.087 144.593l86 145-24 10-74-100 12-55z" />
      <path
        d="M323.087 217.593h-7l-26 56s-49 148-44 178 191.004 25.963 181 25c-9.518-.916-59.034-228.947-44.5-241.5zM284.087 527.593s-2-8-10-8-8 11-8 11l-23 21s-20 25 6 25 26-6 26-6 7-7 13-3 20-4 18-8-4.988-29.877-6.994-25.438-15.006-6.562-15.006-6.562zM417.087 515.593s2-1-8 0-14 0-14 0l7 27s-6 46 14 42 20-32 20-32-3-25-1-27 1-29-2-29-17.48-6.48-17.48-6.48 9.48 25.48 1.48 25.48zM364.408 87.71c-1.68-2.586-.831-6.102-2.01-8.952-1.85-4.475-7.6-5.523-12.424-5.931a37.034 37.034 0 00-9.627.026 9.24 9.24 0 00-6.676 4.84c-.714 1.432-.534-3.054-.077-8.812a27.833 27.833 0 0121.346-24.9l.203-.047c5.874-1.356 11.931-2.353 17.919-1.65s11.956 3.289 15.692 8.02c1.708 2.162 2.916 4.712 4.822 6.701 3.35 3.495 8.316 4.767 12.877 6.39a38.853 38.853 0 0114.12 8.145c3.945 3.796 6.742 8.998 6.825 14.472.096 6.386-3.966 12.976-10.512 14.235a7.349 7.349 0 00-3.139 1.355c-6.25 4.846.88 9.92.83 15.375-.04 4.552-5.108 7.52-9.656 7.731a18.323 18.323 0 01-18.25-14.497c-.685-3.736-.155-7.574.29-11.346.511-4.317-8.787-14.484-2.645-7.032a10.688 10.688 0 012.348 4.944c1.023 5.954-4.395 7.956-7.811 11.255a14.156 14.156 0 00-3.427 14.571 16.32 16.32 0 01-2.966-20.61c1.1-1.687 2.518-3.155 3.562-4.879 1.628-2.69 2.077-8.54-2.48-8.379-3.254.115-6.634 2.824-9.134-1.026z"
        fill="#2f2e41"
      />
      <path d="M137.235 561.835S97.09 487.733 0 519.775z" fill="#d0cde1" />
      <path d="M139.656 560.024s-49.65-63.108 22.012-141.838z" fill="#d0cde1" />
    </svg>
  );
};

SvgTravelMode.propTypes = {
  color: PropTypes.string
};
SvgTravelMode.defaultProps = {
  color: "primary"
};
export default SvgTravelMode;
