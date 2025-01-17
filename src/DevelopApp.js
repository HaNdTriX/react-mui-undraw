import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDevelopApp = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 806.276 712.737"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={79.371}
        cy={696.145}
        rx={79.371}
        ry={16.591}
        fill="#e6e6e6"
      />
      <path
        d="M145.348 449.503l3.105 6.417s17.626 23.524 6.738 27.21-16.667-22.311-16.667-22.311l-2.88-3.639z"
        fill="#a0616a"
      />
      <path
        d="M125.043 327.99l2.898-1.227s3.429 1.226 3.429 6.498-4.218 82.24-4.218 82.24l8.435 42.175-11.598 2.109-17.924-39.012z"
        fill="#575a89"
      />
      <path
        d="M125.043 327.99l2.898-1.227s3.429 1.226 3.429 6.498-4.218 82.24-4.218 82.24l22.669 36.376-14.761 10.544-28.995-41.648z"
        fill="#575a89"
      />
      <path
        d="M122.935 450.296s13.706 5.271 12.652 14.76-14.761 198.221-14.761 198.221l4.217 21.087-40.065 1.055-1.055-136.013-28.468 136.013H15.39l28.467-239.34z"
        fill="#2f2e41"
      />
      <path
        d="M119.772 680.147l9.489 9.49s22.142 4.217 16.87 11.597-60.099-2.108-60.099-2.108l1.054-16.87zM51.238 680.147l9.49 9.49s22.14 4.217 16.869 11.597-60.099-2.108-60.099-2.108l1.055-16.87z"
        fill="#2f2e41"
      />
      <circle cx={89.195} cy={264.727} r={25.305} fill="#a0616a" />
      <path
        fill="#a0616a"
        d="M105.011 279.489l-2.109 43.228-32.686-18.978 4.218-24.25h30.577z"
      />
      <path
        fill={color}
        d="M69.162 293.195l30.577 22.142 5.272-15.816 9.489 25.305-5.272 45.338-40.066-76.969z"
      />
      <path
        d="M72.44 290.07l30.462 46.354 1.222-38.755 3.751 2.957a17.388 17.388 0 016.625 13.657l14.76 13.706-5.27 52.718-1.055 62.208s6.326 5.272 4.217 8.435-10.543 10.544-20.033 10.544-68.533-7.381-68.533-11.598 2.108-59.045 2.108-59.045v-73.805L66 298.467z"
        fill="#575a89"
      />
      <path
        fill="#a0616a"
        d="M36.477 465.057l13.707 20.033 5.271-23.196-6.326-4.218-12.652 7.381z"
      />
      <path
        opacity={0.2}
        d="M82.697 550.172l20.27-54.903 1.978.73-20.27 54.903z"
      />
      <path
        d="M73.907 239.95s3.163-15.816 21.087-12.653l-2.109 1.055s16.87-2.109 14.761 7.38c0 0 13.707 8.435 10.544 17.925a107.284 107.284 0 00-4.217 16.87l-3.163-3.164s-3.164-21.087-22.142-18.978c-14.234 1.581-20.033 8.303-21.516 13.146a42.782 42.782 0 01-2.605 6.627l-1.184.26s-6.326-23.196 10.544-28.468z"
        fill="#2f2e41"
      />
      <path
        d="M52.292 316.391l-9.598-.445-2 1.5a63.119 63.119 0 00-6.326 7.38c-2.109 3.163-29.522 80.132-29.522 80.132a26.867 26.867 0 002.109 13.707c3.163 7.38 28.467 51.663 28.467 51.663l18.979-11.598-25.305-51.663 17.924-25.305z"
        fill="#575a89"
      />
      <path
        d="M613.395 161.476h-3.733V59.196A59.196 59.196 0 00550.465 0H333.773a59.196 59.196 0 00-59.197 59.197v561.111a59.196 59.196 0 0059.197 59.197h216.692a59.196 59.196 0 0059.197-59.197V234.28h3.733z"
        fill="#3f3d56"
      />
      <path
        d="M597.593 55.232v569.04a44.899 44.899 0 01-44.89 44.89H331.569a44.903 44.903 0 01-44.908-44.89V55.233a44.903 44.903 0 0144.908-44.89h26.825a21.349 21.349 0 0019.75 29.39H504.22a21.348 21.348 0 0019.749-29.39h28.735a44.899 44.899 0 0144.89 44.89z"
        fill="#e6e6e6"
      />
      <path
        fill="#fff"
        d="M330.58 351.565h223.094v223.094H330.58zM379.838 250.974h125.838v9.458H379.838zM363.001 275.551h158.368v9.458H363.001z"
      />
      <path fill="#e6e6e6" d="M394.865 373.102h86.842v6.527h-86.842z" />
      <path fill={color} d="M394.865 392.264h134.103v6.527H394.865z" />
      <path
        fill="#e6e6e6"
        d="M396.26 410.513h109.291v6.527H396.26zM394.865 430.536h63.802v6.527h-63.802z"
      />
      <path fill={color} d="M394.865 450.095h96.294v6.527h-96.294z" />
      <path fill="#e6e6e6" d="M355.284 371.049h10.634v10.634h-10.634z" />
      <path fill={color} d="M355.284 390.21h10.634v10.634h-10.634z" />
      <path
        fill="#e6e6e6"
        d="M355.284 408.459h10.634v10.634h-10.634zM355.284 428.483h10.634v10.634h-10.634z"
      />
      <path fill={color} d="M355.284 448.042h10.634v10.634h-10.634z" />
      <path fill="#e6e6e6" d="M394.865 469.776h86.842v6.527h-86.842z" />
      <path fill={color} d="M394.865 488.937h134.103v6.527H394.865z" />
      <path
        fill="#e6e6e6"
        d="M396.26 507.187h109.291v6.527H396.26zM394.865 527.21h63.802v6.527h-63.802zM394.865 546.769h96.294v6.527h-96.294zM355.284 467.722h10.634v10.634h-10.634z"
      />
      <path fill={color} d="M355.284 486.884h10.634v10.634h-10.634z" />
      <path
        fill="#e6e6e6"
        d="M355.284 505.133h10.634v10.634h-10.634zM355.284 525.157h10.634v10.634h-10.634zM355.284 544.715h10.634v10.634h-10.634z"
      />
      <circle cx={442.126} cy={149.795} r={72.736} fill="#fff" />
      <path
        d="M441.526 114.125a35.856 35.856 0 1035.856 35.856 35.961 35.961 0 00-35.856-35.856zm0 10.757a10.757 10.757 0 11-10.757 10.756 10.793 10.793 0 0110.757-10.756zm0 51.784a26.12 26.12 0 01-21.514-11.48c.173-7.172 14.343-11.12 21.514-11.12s21.341 3.948 21.513 11.12a26.164 26.164 0 01-21.513 11.48z"
        fill={color}
      />
      <ellipse
        cx={725.333}
        cy={687.145}
        rx={80.943}
        ry={16.591}
        fill="#e6e6e6"
      />
      <path
        d="M639.544 441.077l-10.63-1.844s-21.727-10.026-23.044-2.433 19.417 14.319 19.417 14.319l22.315-2.387z"
        fill="#ffb8b8"
      />
      <path
        fill="#575a89"
        d="M701.374 364.197l-14.891 67.813-49.713 7.021-1.906 20.006 64.109.17 32.062-58.578-29.661-36.432z"
      />
      <path
        opacity={0.2}
        d="M701.374 364.197l-14.891 67.813-49.713 7.021-1.906 20.006 64.109.17 32.062-58.578-29.661-36.432z"
      />
      <path
        d="M625.703 383.864l-7.586-7.672s-11.872-20.775-17.352-15.357 7.5 22.93 7.5 22.93l19.556 11.01z"
        fill="#ffb8b8"
      />
      <path
        d="M730.214 342.755l9.34-2.277a24.044 24.044 0 0023.597-28.806 31.428 31.428 0 00-31.388-31.467 31.428 31.428 0 00-31.467 31.388 24.974 24.974 0 0029.918 31.162zM675.283 498.398l7.602 83.242 13.769 81.708 23.12.029-2.982-80.153-12.208-97.12-29.301 12.294z"
        fill="#2f2e41"
      />
      <path
        d="M699.743 658.728l-15.425 9.229s-24.666 3.051-20.051 10.764 58.567 3.156 58.57.073-1.516-20.04-4.598-20.043zM743.53 491.206s-.434 11.901-11.247 30.383l1.47 57.032 55.399 70.971-20.059 16.93-67.722-77.152-16.838-92.502 21.605-21.552z"
        fill="#2f2e41"
      />
      <path
        d="M784.528 649.586s18.492 3.106 15.4 10.809-10.844 43.144-30.875 38.495c0 0-9.248-.012-6.158-6.173a111.496 111.496 0 016.179-10.782l.025-20.037z"
        fill="#2f2e41"
      />
      <circle cx={720.204} cy={321.2} r={23.12} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M730.974 336.627l-.033 26.203-24.661-.031 3.115-26.199 21.579.027z"
      />
      <path
        d="M746.176 501.567l-15.3-2.56a141.802 141.802 0 00-58.68 2.47l6.92-68.89.9-8.98 1.93-19.23s-6.67-25.34 3.12-33.9c11.95-10.45 22.53-18.77 22.53-18.77l23.36 1.87c13.06 26.04 10.23 58.77 1.42 94.03z"
        fill="#575a89"
      />
      <path
        d="M720.675 357.15l-51.488 46.577-44.556-23.14-9.355 11.45 39.358 34.678a18.5 18.5 0 0018.838 1.617l50.21-24.299z"
        fill="#575a89"
      />
      <circle cx={764.834} cy={289.25} r={14.917} fill="#2f2e41" />
      <path
        d="M751.07 281.231a14.91 14.91 0 0117.853-14.605 14.91 14.91 0 10-9.3 28.1 14.904 14.904 0 01-8.552-13.495zM738.274 289.69l-20.11-3.702-15.466 9.693a23.46 23.46 0 00-10.806 22.895l15.489-3.926 3.468-8.697a25.37 25.37 0 009.04 8.776c8.777 5.038 10.811 15.747 11.849 27.294l16.966-9.227 10.811-16.941z"
        fill="#2f2e41"
      />
      <path
        opacity={0.2}
        d="M719.276 390.037l-40.159 42.55.899-8.98 39.26-33.57z"
      />
    </svg>
  );
};

SvgDevelopApp.propTypes = {
  color: PropTypes.string
};
SvgDevelopApp.defaultProps = {
  color: "primary"
};
export default SvgDevelopApp;
