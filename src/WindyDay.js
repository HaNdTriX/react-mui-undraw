import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWindyDay = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1099.072 826.313"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M809.592 783c-71.873 15.89-165.928 12.886-266.854.117-82.552-10.444-175.65-36.565-251.21-66.976a49.842 49.842 0 0129.015-14.382c.308-.046.626-.092.943-.127a70.51 70.51 0 0116.772.003c70.564 7.92 57.614 46.545 152.804 3.227 59.2-26.94 122.879-30.73 164.923-21.582.775.169 1.54.341 2.303.518 24.32 5.674 40.953 15.78 44.55 28.229 9.815 33.955-34.12 54.567 41.29 56.055 20.924.413 44.365 9.752 65.464 14.918z"
        fill="#3f3d56"
      />
      <path
        d="M1097.632 822.442c-28.855-2.333-57.649-6.76-86.345-10.486q-60.684-7.882-121.304-16.244c-80.114-10.965-160.18-22.28-240.27-33.427q-120.974-16.838-242.015-33.19-112.199-15.162-224.487-29.663c-56.19-7.17-112.417-14.101-168.787-19.716q-6.494-.647-12.989-1.282c-1.92-.188-1.907 2.813 0 3 52.495 5.146 104.87 11.302 157.204 17.884 74.686 9.393 149.302 19.339 223.903 29.384q121.046 16.3 242.025 33.092c79.75 11.065 159.47 22.34 239.23 33.325 73.989 10.19 147.998 20.767 222.22 29.13 3.867.437 7.736.88 11.615 1.193 1.925.156 1.915-2.845 0-3z"
        fill="#3f3d56"
      />
      <path
        d="M411.362 403.008s-14.232 65.98 5.175 64.687 10.35-60.806 10.35-60.806zM488.986 717.386l9.056 47.868 20.7-2.587-6.469-51.75-23.287 6.469zM593.779 670.811l5.175 34.931h27.168l-5.175-32.343-27.168-2.588z"
        fill="#a0616a"
      />
      <path
        d="M468.286 370.664s-21.993 42.694-14.231 148.78 7.762 206.998 7.762 206.998l55.631-3.881 15.525-263.923 60.806 228.992 40.106-3.881-10.35-223.817-32.344-107.38zM505.804 743.26s3.882-11.643-2.587-11.643h-14.231s-15.525 28.462-24.581 31.05-37.519 27.168-10.35 29.756 68.568-11.644 68.568-16.819-3.881-27.168-3.881-27.168z"
        fill="#2f2e41"
      />
      <path
        d="M619.653 697.98s-23.782-6.578-22.24-2.642-3.634 15.58-3.634 15.58-12.938 73.742 25.874 67.274 10.35-62.1 10.35-62.1l-5.747-22.01z"
        fill="#2f2e41"
      />
      <circle cx={510.979} cy={52.405} r={38.812} fill="#a0616a" />
      <path
        d="M485.105 73.105s6.468 37.518 2.587 45.28 31.05 23.288 31.05 23.288l18.112-43.987V73.105z"
        fill="#a0616a"
      />
      <path
        d="M505.804 117.092s-11.777 1.732-16.885-6.897-16.752 59.94-16.752 59.94 5.175 90.562-1.293 111.261-5.175 28.463-2.588 32.344 10.35-1.294 3.881 9.056-6.468 3.881-6.468 14.231-2.588 47.868-2.588 47.868l139.724-10.35-65.98-283.328s-21.994 27.168-31.05 25.875z"
        fill="#3f3d56"
      />
      <path
        d="M560.141 105.448s53.044 7.762 55.631 19.406 54.337 335.078 27.169 351.897-115.143 29.756-119.024 12.937-24.581-359.659 12.937-398.471z"
        fill="#d0cde1"
      />
      <path
        d="M634.858 446.243h-10.863s3.342-39.275 0-42.896c0 0-30.362-3.342-61.002 30.083 0 0 5.292-36.49 44.846-38.44 12.68-.623 20.008 4.419 24.108 11.56 8.697 15.137 2.911 39.693 2.911 39.693z"
        fill="#3f3d56"
      />
      <path
        d="M634.858 446.243h-10.863s3.342-39.275 0-42.896l7.952 3.203c8.697 15.137 2.911 39.693 2.911 39.693z"
        opacity={0.15}
      />
      <path
        d="M571.07 420.617l-15.04 25.626h6.963s1.114-18.94 8.078-25.626z"
        fill="#3f3d56"
      />
      <path
        d="M571.07 420.617l-15.04 25.626h6.963s1.114-18.94 8.078-25.626z"
        opacity={0.15}
      />
      <path
        d="M699.481 554.598a26.602 26.602 0 01-10.445 22.424s-138.438 32.868-153.758 30.083a21.816 21.816 0 01-5.44-1.783c-12.212-5.794-19.908-21.615-19.908-21.615s-.231-4.09-.574-10.752c-.657-12.886-1.721-35.4-2.31-56.596-.579-20.94-.693-40.59.516-48.389 3.064-19.777 24.234-21.448 24.234-21.448l140.945-6.128a49.436 49.436 0 0113.704 1.794c15.237 4.576 13.036 16.312 13.036 16.312s-.557 81.057 0 96.098z"
        fill="#575a89"
      />
      <path
        d="M686.445 442.188c-8.638 2.69-29.403 8.624-36.824 6.005-9.47-3.342-82.728-1.114-109.469 1.95s-17.27 75.486-17.27 75.486l-15.835-9.27c-.58-20.94-.694-40.59.515-48.389 3.064-19.777 24.234-21.448 24.234-21.448l140.945-6.128a49.436 49.436 0 0113.704 1.794z"
        fill="#3f3d56"
      />
      <path
        d="M585.277 494.154s-13.416-74.99 11.258-85.266l3.226.03s-7.799 10.306-4.735 29.248 1.393 62.116 1.393 62.116-9.47 5.57-11.142-6.128z"
        fill="#2f2e41"
      />
      <path
        d="M595.026 411.425s14.763-23.676 41.782-10.585 29.526 42.897 29.526 42.897-18.663-54.596-71.308-32.312z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M668.284 497.218l-4.457-28.691 2.229-26.863 5.57 27.699 2.507 27.855h-5.849zM618.145 493.875l15.599-3.9 15.877 1.95v6.964l-14.484 4.457-16.992-1.672v-7.799z"
      />
      <path
        d="M527.339 594.71a43.5 43.5 0 002.499 10.612c-12.212-5.794-19.908-21.615-19.908-21.615s-.231-4.09-.574-10.752l10.184 4.206z"
        fill="#3f3d56"
      />
      <path
        d="M534.024 610.03a3.932 3.932 0 01-1.886-1.054c2.09.842 2.97 1.282 1.886 1.053z"
        fill="#2f2e41"
      />
      <path
        d="M488.91 107.389l-50.38 49.808 18.112 161.718s-36.224 191.473-15.524 191.473 18.112 2.587 21.993-11.644 25.8-391.355 25.8-391.355z"
        fill="#d0cde1"
      />
      <path
        d="M451.467 153.316l-12.937 3.881s-11.644 9.057-10.35 28.463-1.294 75.037-1.294 75.037-7.762 11.643-3.88 25.874l-18.113 124.2 40.106 6.468 14.23-64.687z"
        fill="#d0cde1"
      />
      <path
        d="M611.89 359.02s-15.524 81.506 0 76.331 34.932-62.1 21.994-71.155-21.993-5.175-21.993-5.175z"
        fill="#a0616a"
      />
      <path
        d="M472.075 56.956s-3.962-5.943-2.438-12.344a37.413 37.413 0 001.067-11.125s3.2-10.364 6.4-16.155 1.677-8.23 11.735-10.058 5.944-14.935 32.461-.762a7.777 7.777 0 008.078 3.048c5.486-1.067 7.467 6.553 7.467 6.553s3.658-2.134 5.03.914 11.15-1.829 11.15 18.745-11.128 38.952-11.128 38.952.816-34.608-17.32-38.113-37.643-13.716-42.367-.61a99.913 99.913 0 01-10.135 20.955z"
        fill="#2f2e41"
      />
      <path
        d="M225.312 483.763c-8.593 7.134-23.74 42.196-23.74 42.196a99.305 99.305 0 0014.595.462l-1.705-9.31 6.336 8.938a40.039 40.039 0 007.294-1.477l-2.623-14.327 8.192 11.555c.06-.048.123-.095.182-.144 8.593-7.133 13.65-21.398 11.293-31.862s-11.23-13.164-19.824-6.03zM454.312 639.763c-8.593 7.134-23.74 42.196-23.74 42.196a99.305 99.305 0 0014.595.462l-1.705-9.31 6.336 8.938a40.039 40.039 0 007.294-1.477l-2.623-14.327 8.192 11.555c.06-.048.123-.095.182-.144 8.593-7.133 13.65-21.398 11.293-31.862s-11.23-13.164-19.824-6.03zM420.68 312.134c-7.318 7.625-22.109 42.825-22.109 42.825a62.68 62.68 0 0011.374-.78l-.55-8.865 4.202 8.116a30.536 30.536 0 005.828-2.041l-.848-13.644 5.435 10.494c.051-.052.104-.103.154-.155 7.319-7.625 12.471-21.853 11.509-31.78s-7.676-11.794-14.995-4.17z"
        fill={color}
      />
      <path
        d="M236.924 757.908c-10.19-2.798-48.184.98-48.184.98a62.68 62.68 0 006.107 9.627l7.53-4.71-5.13 7.564a30.536 30.536 0 004.572 4.15l11.59-7.25-6.634 9.78.21.062c10.19 2.798 25.155.545 33.422-5.034s6.709-12.37-3.483-15.169z"
        fill="#3f3d56"
      />
      <path
        d="M264.924 741.908c-10.19-2.798-48.184.98-48.184.98a62.68 62.68 0 006.107 9.627l7.53-4.71-5.13 7.564a30.536 30.536 0 004.572 4.15l11.59-7.25-6.634 9.78.21.062c10.19 2.798 25.155.545 33.422-5.034s6.709-12.37-3.483-15.169zM562.924 804.908c-10.19-2.798-48.184.98-48.184.98a62.68 62.68 0 006.107 9.627l7.53-4.71-5.13 7.564a30.536 30.536 0 004.572 4.15l11.59-7.25-6.634 9.78.21.062c10.19 2.798 25.155.545 33.422-5.034s6.709-12.37-3.483-15.169zM264.924 782.908c-10.19-2.798-48.184.98-48.184.98a62.68 62.68 0 006.107 9.627l7.53-4.71-5.13 7.564a30.536 30.536 0 004.572 4.15l11.59-7.25-6.634 9.78.21.062c10.19 2.798 25.155.545 33.422-5.034s6.709-12.37-3.483-15.169z"
        fill="#3f3d56"
      />
      <path
        d="M694.29 427.688c-3.12 4.796-5.103 16.884-6.288 27.384l5.882 6.27-6.308-2.233c-.776 7.86-1.08 13.993-1.08 13.993s25.323-5.485 31.324-14.709 5.599-23.574-.899-32.053-16.63-7.876-22.631 1.348zM720.64 604.696c-2.858 4.798-4.676 16.886-5.763 27.386l5.383 6.269-5.775-2.232c-.713 7.86-.993 13.994-.993 13.994s23.186-5.493 28.683-14.718 5.132-23.576-.814-32.053-15.223-7.87-20.72 1.354z"
        fill={color}
      />
      <path
        d="M593.779 117.092s29.756-5.175 36.224 33.637 23.288 115.142 23.288 115.142l-4.62 116.469-43.249-14.263 1.294-89.268-21.994-133.255z"
        fill="#d0cde1"
      />
      <path
        opacity={0.15}
        d="M582.782 169.488L599.6 279.456l-3.881 93.149 18.113-90.562-31.05-112.555z"
      />
      <path
        d="M715.312 78.763c-8.593 7.134-23.74 42.196-23.74 42.196a99.305 99.305 0 0014.595.462l-1.705-9.31 6.336 8.938a40.039 40.039 0 007.294-1.477l-2.623-14.327 8.192 11.555c.06-.048.123-.095.182-.144 8.593-7.133 13.65-21.398 11.293-31.862s-11.23-13.164-19.824-6.03z"
        fill={color}
      />
    </svg>
  );
};

SvgWindyDay.propTypes = {
  color: PropTypes.string
};
SvgWindyDay.defaultProps = {
  color: "primary"
};
export default SvgWindyDay;
