import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNakamoto = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 980.494 751.895"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M313.494 117h2v107h-2zM313.494 255.85h2v94.149h-2zM310.494 365h155v2h-155zM244.494 392h2v85h-2zM262.494 492h235v2h-235zM691.494 49h2v101h-2zM529.46 166h147.034v2H529.46zM512.494 182h2v135h-2z"
      />
      <path
        d="M314.494 257a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15zM246.494 510a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15z"
        fill="#3f3d56"
      />
      <circle cx={315.494} cy={366} r={16} fill={color} />
      <path
        fill="#3f3d56"
        d="M728.494 239h166v2h-166zM711.494 255.85h2v94.149h-2zM562.494 365h133v2h-133zM796.494 374h138v2h-138zM780.494 392h2v85h-2zM529.494 492h235v2h-235zM512.494 415h2v62h-2z"
      />
      <circle cx={712.494} cy={240} r={16} fill={color} />
      <path
        d="M692.494 183a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15zM513.494 183a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15zM780.494 393a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15z"
        fill="#3f3d56"
      />
      <circle cx={780.494} cy={493} r={16} fill={color} />
      <path
        d="M513.494 510a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15zM711.494 383a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15zM246.494 342a20 20 0 1020 20 20.059 20.059 0 00-20-20zm0 6a6 6 0 11-6 6 6.02 6.02 0 016-6zm0 28.885a14.57 14.57 0 01-12-6.404c.096-4 8-6.202 12-6.202s11.904 2.202 12 6.202a14.594 14.594 0 01-12 6.404zM315.494 69a20 20 0 1020 20 20.059 20.059 0 00-20-20zm0 6a6 6 0 11-6 6 6.02 6.02 0 016-6zm0 28.885a14.57 14.57 0 01-12-6.404c.096-4 8-6.202 12-6.202s11.904 2.202 12 6.202a14.594 14.594 0 01-12 6.404zM692.494 0a20 20 0 1020 20 20.059 20.059 0 00-20-20zm0 6a6 6 0 11-6 6 6.02 6.02 0 016-6zm0 28.885a14.57 14.57 0 01-12-6.404c.096-4 8-6.202 12-6.202s11.904 2.202 12 6.202a14.594 14.594 0 01-12 6.404zM922.494 219a20 20 0 1020 20 20.059 20.059 0 00-20-20zm0 6a6 6 0 11-6 6 6.02 6.02 0 016-6zm0 28.885a14.57 14.57 0 01-12-6.404c.096-4 8-6.202 12-6.202s11.904 2.202 12 6.202a14.594 14.594 0 01-12 6.404zM960.494 354a20 20 0 1020 20 20.059 20.059 0 00-20-20zm0 6a6 6 0 11-6 6 6.02 6.02 0 016-6zm0 28.885a14.57 14.57 0 01-12-6.404c.096-4 8-6.202 12-6.202s11.904 2.202 12 6.202a14.594 14.594 0 01-12 6.404z"
        fill="#3f3d56"
      />
      <path
        d="M514.772 353.667l-2.05 8.215c2.324.579 9.484 2.94 10.644-1.708 1.209-4.847-6.271-5.928-8.594-6.507zM511.69 366.028l-2.26 9.058c2.789.693 11.392 3.455 12.664-1.655 1.329-5.328-7.615-6.707-10.404-7.403z"
        fill={color}
      />
      <path
        d="M524.034 329.212a37.493 37.493 0 1027.308 45.45 37.487 37.487 0 00-27.308-45.45zm7.462 31.037c-.541 3.653-2.565 5.422-5.254 6.04 3.69 1.922 5.57 4.87 3.78 9.98-2.22 6.345-7.497 6.88-14.512 5.553l-1.703 6.824-4.115-1.025 1.68-6.733q-1.644-.408-3.28-.85l-1.685 6.764-4.11-1.026L504 378.94c-.961-.246-1.937-.508-2.933-.757l-5.354-1.336 2.042-4.71s3.032.808 2.99.748a1.496 1.496 0 001.886-.978l2.69-10.787c.152.037.299.073.435.108a3.496 3.496 0 00-.427-.137l1.919-7.701a2.19 2.19 0 00-1.917-2.392c.065-.044-2.988-.743-2.988-.743l1.095-4.395 5.675 1.417-.005.02c.853.213 1.732.414 2.628.618l1.686-6.757 4.112 1.025-1.652 6.625c1.104.252 2.215.506 3.297.775l1.64-6.581 4.115 1.025-1.685 6.76c5.194 1.789 8.993 4.47 8.247 9.462z"
        fill={color}
      />
      <path
        d="M152 733.294c-2.846 25.876-152.226 23.704-152-.002 2.846-25.874 152.226-23.702 152 .002z"
        fill="#e6e6e6"
      />
      <path
        fill="#ffb8b8"
        d="M103.754 668.156l6.056 13.12 11.101-1.009 7.065-23.213-11.102-6.055-13.12 17.157zM65.642 698.373l-.239 9.143 17.157 1.009v-11.101l-16.918.949z"
      />
      <path
        fill="#2f2e41"
        d="M71.458 531.908l4.037 80.739-10.092 87.804 30.277 4.037 19.176-111.016 6.055-75.694-49.453 14.13z"
      />
      <path
        d="M24.024 502.64s-12.111 79.73 13.12 105.97 59.546 72.666 59.546 72.666l24.221-30.277-61.564-65.601 12.111-44.407 49.453-23.213-8.074-55.508-72.665-1.01z"
        fill="#2f2e41"
      />
      <circle cx={83.569} cy={295.744} r={22.203} fill="#ffb8b8" />
      <path
        d="M64.394 300.79s-1.01 31.287-6.056 35.324 18.167 21.194 18.167 21.194l15.138-24.221v-22.204z"
        fill="#ffb8b8"
      />
      <path
        fill="#d0cde1"
        d="M74.486 343.179l-12.253-18.502-6.923 9.419-10.092 28.259 8.074 110.007 47.434 1.009 6.056-126.155-15.139-18.166-17.157 14.129z"
      />
      <path
        d="M125.958 350.244l8.074-1.01s2.018 1.01 3.027 8.074 13.12 69.638 13.12 69.638l-16.147 76.703-18.167-24.222 11.102-42.388-11.102-42.389zM23.015 349.234h-6.056L1.821 430.983l14.129 63.583 14.129-23.213-4.037-25.231 2.019-22.203 7.065-13.121-12.111-61.564zM112.837 677.239s-6.055-2.019-6.055 2.018 4.037 16.148 4.037 16.148-6.056 37.342 3.028 35.324 16.148-19.176 17.157-24.222 6.055-31.287 6.055-31.287 8.074-19.175 3.028-20.185-19.176-5.046-19.176-5.046 8.074 25.231-8.074 27.25zM83.57 708.525s-16.149-10.092-19.176-2.018a84.8 84.8 0 00-4.037 18.166s-4.037 13.12 12.11 11.102 14.13-2.018 15.14-8.074-4.038-19.176-4.038-19.176zM70.45 295.744l4.036-1.009s3.028-17.157 10.093-15.138 25.23 4.037 25.23-4.037-17.156-15.14-27.249-14.13-27.25 4.037-26.24 19.176 7.521 29.865 7.521 29.865l.526-8.975z"
        fill="#2f2e41"
      />
      <path
        fill="#d0cde1"
        d="M91.643 355.29l-17.157-12.111 17.157-14.129 5.957 7.147-5.957 19.093zM59.347 354.281l15.139-11.102-12.111-18.166-7.065 9.083 4.037 20.185z"
      />
      <path
        d="M133.022 349.234l-32.296-13.12-7.569-5.55-22.708 100.42-15.139-45.417 4.542-58.031-41.884 21.698 14.13 68.63 2.018 26.24-6.055 21.194s-21.194 15.138-14.13 31.286 15.14 17.157 15.14 17.157 34.313-32.296 36.332-40.37 5.046-22.203 5.046-22.203 17.157 64.592 37.342 63.583 20.185-22.204 20.185-22.204l-5.046-22.203-8.074-23.213 4.037-38.351z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgNakamoto.propTypes = {
  color: PropTypes.string
};
SvgNakamoto.defaultProps = {
  color: "primary"
};
const MemoSvgNakamoto = React.memo(SvgNakamoto);
export default MemoSvgNakamoto;
