import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgAugmentedReality = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 991 723.717"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M991 271.755V419.41H191V314.22a418.25 418.25 0 0178.152-155.957L827.523 68.32a422.273 422.273 0 0148.06 36.641L544.586 231.224l366.438-91.08a421.703 421.703 0 0140.836 53.73l-74.785 55.915 84.498-39.992a420.547 420.547 0 0121.156 41.68q4.392 10.012 8.27 20.278zM781.821 42.359A418.542 418.542 0 00597.751 0C467.937 0 351.876 58.863 274.789 151.35 406.794 122.425 636.626 72.356 781.82 42.358z"
        fill="#f2f2f2"
      />
      <path
        d="M991 276.844v255.645H197.16a12.365 12.365 0 01-6.16-10.692V309.57a58.083 58.083 0 0158.093-58.093h716.54A25.369 25.369 0 01991 276.844z"
        fill="#2f2e41"
      />
      <path
        d="M912.519 521.705c0-10.162-5.156-18.4-11.517-18.4-3.998 0-7.52 3.256-9.584 8.197a5.777 5.777 0 00-2.201-.442 6.9 6.9 0 00-5.157 2.656c-1.862-6.16-5.81-10.41-10.378-10.41-4.272 0-7.998 3.718-9.986 9.237a6.292 6.292 0 00-3.942-1.483c-4.881 0-8.838 6.322-8.838 14.121a20.58 20.58 0 001.392 7.604h57.888a26.17 26.17 0 002.323-11.08zM326.021 516.631c0-14.545-5.156-26.336-11.517-26.336-3.998 0-7.519 4.66-9.584 11.732a4.32 4.32 0 00-2.201-.632c-1.925 0-3.705 1.412-5.157 3.802-1.862-8.818-5.809-14.902-10.378-14.902-4.272 0-7.998 5.323-9.986 13.222a5.348 5.348 0 00-3.942-2.122c-4.881 0-8.838 9.049-8.838 20.211a40.901 40.901 0 001.392 10.883h57.888a51.524 51.524 0 002.323-15.858zM256.823 373.84h5.907a10.156 10.156 0 0110.127 10.126v64.135a17.721 17.721 0 0017.721 17.722A17.721 17.721 0 00308.3 448.1V292.827a10.156 10.156 0 0110.126-10.127h5.907a10.156 10.156 0 0110.127 10.127v155.274a17.721 17.721 0 0017.721 17.722 17.721 17.721 0 0017.722-17.722v-94.514a10.156 10.156 0 0110.127-10.127h5.907a10.156 10.156 0 0110.126 10.127V448.1a17.721 17.721 0 0017.722 17.722 17.721 17.721 0 0017.721-17.722V419.41a10.156 10.156 0 0110.127-10.126h5.907a10.156 10.156 0 0110.127 10.126v28.692a17.721 17.721 0 0017.721 17.722A17.721 17.721 0 00493.11 448.1V347.68a10.156 10.156 0 0110.126-10.126h5.907a10.156 10.156 0 0110.127 10.126v100.422a17.721 17.721 0 0017.722 17.722 17.721 17.721 0 0017.721-17.722V320.675a10.156 10.156 0 0110.127-10.126h5.907a10.156 10.156 0 0110.126 10.126v127.426a17.721 17.721 0 0017.722 17.722 17.721 17.721 0 0017.721-17.722v-64.135a10.156 10.156 0 0110.127-10.126h5.907a10.156 10.156 0 0110.127 10.126v64.135a17.721 17.721 0 0017.721 17.722A17.721 17.721 0 00677.92 448.1v-94.514a10.156 10.156 0 0110.126-10.127h5.908a10.156 10.156 0 0110.126 10.127V448.1a17.721 17.721 0 0017.722 17.722h7.91a18.305 18.305 0 0012.835-5.505 10.07 10.07 0 017.103-2.934h5.907a10.07 10.07 0 017.102 2.934 18.305 18.305 0 0012.836 5.505h7.91a17.721 17.721 0 0017.722-17.722v-9.282a10.156 10.156 0 0110.126-10.127h5.907a10.156 10.156 0 0110.127 10.127v9.282a17.721 17.721 0 0017.721 17.722A17.721 17.721 0 00862.73 448.1V347.68a10.156 10.156 0 0110.127-10.126h5.907a10.156 10.156 0 0110.126 10.126v100.422a17.721 17.721 0 0017.722 17.722 17.721 17.721 0 0017.721-17.722v-64.135a10.156 10.156 0 0110.127-10.126h5.907a10.101 10.101 0 017.595 3.462v-97.828a35.593 35.593 0 00-35.593-35.592H277.39a30.692 30.692 0 00-30.693 30.692v109.392a10.156 10.156 0 0110.127-10.126z"
        fill="#3f3d56"
      />
      <path fill="#2f2e41" d="M746.949 262.821h4.958v195.826h-4.958z" />
      <path
        d="M797.658 287.78c.279 59.857-36.498 109.975-45.755 121.638-1.342 1.679-2.101 2.565-2.101 2.565s-1.055-1.198-2.853-3.46c-9.696-12.177-41.038-55.24-45.595-108.194a49.461 49.461 0 01-.092-1.114q-.43-5.43-.465-10.996a154.419 154.419 0 012.33-27.139c.076-.498.168-.987.253-1.485 9.958-54.726 45.274-95.578 45.274-95.578a207.592 207.592 0 0119.89 28.32c.152.254.304.507.448.76a231.74 231.74 0 0112.21 23.603c.136.279.254.557.372.836 8.81 19.94 15.966 44.135 16.084 70.245z"
        fill={color}
      />
      <path fill="#2f2e41" d="M442.308 225.69h4.958v195.826h-4.958z" />
      <path
        d="M493.018 250.646c.316 68.475-47.86 124.209-47.86 124.209s-48.688-55.287-49.003-123.763 47.86-124.209 47.86-124.209 48.688 55.287 49.003 123.763z"
        fill={color}
      />
      <path
        d="M359.09 302.02c-1.37 2.182-3.145 2.131-4.745 1.128s-2.421-2.58-1.053-4.763 6.008-3.143 6.008-3.143 1.158 4.595-.21 6.778zM683.14 328.18c-1.368 2.183-3.144 2.131-4.745 1.128s-2.42-2.58-1.052-4.762 6.008-3.143 6.008-3.143 1.157 4.594-.211 6.777zM505.57 314.78c.576 2.51-.716 3.73-2.557 4.152s-3.536-.112-4.112-2.623 2.026-6.471 2.026-6.471 4.067 2.43 4.643 4.941zM795.022 405.918c.576 2.512-.716 3.73-2.558 4.153s-3.535-.112-4.111-2.623 2.026-6.47 2.026-6.47 4.067 2.43 4.643 4.94zM481.154 355.569c.99 4.316-1.23 6.411-4.396 7.137s-6.077-.193-7.066-4.509 3.482-11.12 3.482-11.12 6.99 4.176 7.98 8.492zM604.097 377.174c-2.076 3.911-5.126 4.043-7.994 2.521s-4.47-4.121-2.394-8.033 9.91-6.132 9.91-6.132 2.553 7.732.478 11.644zM726.943 421.818c-.577 4.39-3.388 5.58-6.608 5.158s-5.628-2.299-5.052-6.69 7.14-9.21 7.14-9.21 5.097 6.352 4.52 10.742z"
        opacity={0.1}
      />
      <path
        fill="#3f3d56"
        d="M395.735 273.1l83.732-86.315.605.587-83.731 86.315zM404.174 301.791l83.732-86.315.605.588-83.731 86.315zM768.992 193.097l-65.865 67.983c.076-.498.168-.987.253-1.485l65.164-67.257c.152.253.304.506.448.76zM704.625 327.136l83.673-86.372.606.588-83.673 86.371zM781.574 217.536l-80.22 82.793-1.19 1.232-.607-.59 1.705-1.756 79.94-82.515c.136.279.254.557.372.836z"
      />
      <path
        d="M437.9 202.67h-10.552v-10.553h10.553zm-9.74-.813h8.929v-8.929h-8.93zM751.825 342.753h-10.553v-10.552h10.553zm-9.741-.811h8.93v-8.93h-8.93z"
        fill="#2f2e41"
      />
      <circle cx={318.494} cy={96.424} r={12.591} fill={color} opacity={0.4} />
      <circle cx={295.191} cy={102.437} r={8.832} fill={color} opacity={0.4} />
      <circle cx={867.607} cy={64.141} r={26.37} fill={color} opacity={0.4} />
      <circle cx={829.986} cy={97.682} r={18.498} fill={color} opacity={0.4} />
      <path
        d="M342.003 475.867l-.802-.016a185.88 185.88 0 012.845-26.564c3.466-18.787 9.23-31.126 17.13-36.673l.46.656c-18.455 12.958-19.624 62.102-19.633 62.597zM352.021 475.675l-.801-.016c.017-.887.518-21.806 8.753-27.588l.46.656c-7.902 5.549-8.408 26.735-8.412 26.948z"
        fill="#2f2e41"
      />
      <circle cx={366.195} cy={409.335} r={4.007} fill={color} />
      <circle cx={364.211} cy={443.799} r={4.007} fill={color} />
      <path
        d="M350.153 415.745a17.8 17.8 0 01-1.21 9.113 16.222 16.222 0 01-2.727-17.42 17.8 17.8 0 013.937 8.307zM363.253 427.428a17.8 17.8 0 01-9.185.397 16.222 16.222 0 0116.679-5.721 17.8 17.8 0 01-7.494 5.324zM363.4 457.95a12.477 12.477 0 01-6.437.277 11.37 11.37 0 0111.69-4.01 12.477 12.477 0 01-5.252 3.732zM344 723.717H0v-2h343l1 2z"
        fill="#2f2e41"
      />
      <path
        d="M73.485 693.779s-6.034 25.236-.548 26.333 32.368.744 38.952 1.84 20.298-.742 20.298-5.68-14.264-8.23-14.264-8.23-20.298-10.971-20.847-11.52-23.59-2.743-23.59-2.743z"
        fill="#2f2e41"
      />
      <path
        d="M78.423 545.104s1.646 18.653 1.646 20.299-1.646 27.43 0 28.528-1.097 8.778-1.097 11.52-8.778 48.279-6.584 65.835-3.291 15.91-1.646 17.555 1.646 1.646 1.646 4.938 17.556 6.035 17.556 6.035l19.202-121.244-9.876-36.209z"
        fill="#575a89"
      />
      <path
        d="M78.423 545.104s1.646 18.653 1.646 20.299-1.646 27.43 0 28.528-1.097 8.778-1.097 11.52-8.778 48.279-6.584 65.835-3.291 15.91-1.646 17.555 1.646 1.646 1.646 4.938 17.556 6.035 17.556 6.035l19.202-121.244-9.876-36.209z"
        opacity={0.1}
      />
      <path
        d="M81.166 701.46s-5.486 19.75 0 20.847 32.368-1.257 38.952-.16 20.299 1.257 20.299-3.68-14.264-8.23-14.264-8.23-20.3-10.972-20.848-11.52-24.139 2.743-24.139 2.743z"
        fill="#2f2e41"
      />
      <path
        d="M73.485 523.16s-6.583 15.91 1.098 24.139 16.458 24.687 16.458 25.784S75.68 683.355 77.874 690.487s1.646 11.521 1.098 12.618 5.486 7.132 12.07 7.132 16.458-4.937 17.555-9.326-1.646-42.243-1.097-49.375 3.291-17.556 4.389-19.75 7.132-4.39 8.229-10.973 9.875-90.522 7.132-93.265-53.765-4.389-53.765-4.389z"
        fill="#575a89"
      />
      <circle cx={115.18} cy={378.325} r={18.653} fill="#ffb9b9" />
      <path
        d="M103.66 387.651s3.84 20.3 1.097 22.494 20.847 5.486 20.847 5.486 2.743-26.882 3.292-29.626-25.237 1.646-25.237 1.646z"
        fill="#ffb9b9"
      />
      <path
        d="M128.896 413.985s-6.584-19.202-33.466-13.716c0 0-4.937 1.646-3.292 3.292s3.292 1.646 1.098 3.292-4.938 0-3.292 1.646-14.813 11.52-13.715 30.174-3.84 44.986 0 49.375-2.744 23.59-1.646 27.43-6.584 8.779-3.292 10.425 62.542 11.52 64.188 0 .549-3.292 2.195-6.035 2.194-7.68 1.097-13.716-3.84-20.847-2.743-26.333 0-51.57-3.292-57.056-3.84-8.778-3.84-8.778z"
        fill={color}
      />
      <path
        d="M117.375 547.847s-8.23 31.271 2.194 31.271 9.875-32.368 9.875-32.368z"
        fill="#ffb9b9"
      />
      <path
        d="M123.41 378.325c0 1.59-2.305 2.6-5.876 2.83h-.006a29.891 29.891 0 01-4.542-.087c-2.282-.209-3.226 1.937-3.616 4.767-.636 4.67.253 11.214-.773 12.24-1.416 1.415-11.735-.005-14.96-3.215a2.981 2.981 0 01-.95-1.723 9.166 9.166 0 00-2.754-5.118c-1.904-2.08-4.614-4.384-7.67-8.048-5.486-6.584 0-7.132 1.646-12.07s4.39-6.583 4.39-9.875 12.617-6.035 23.041-5.486 8.23 13.715 8.23 13.715.62 1.591 1.36 3.643a57.216 57.216 0 012.436 7.911 3.987 3.987 0 01.044.516z"
        fill="#2f2e41"
      />
      <path
        fill="#575a89"
        d="M138.222 356.38v-4.937l-14.812 1.097-2.025 8.193 4.153 5.273 9.941-6.334 2.743-3.292z"
      />
      <path
        opacity={0.1}
        d="M138.222 356.38v-4.937l-14.812 1.097-2.025 8.193 4.153 5.273 9.941-6.334 2.743-3.292z"
      />
      <path
        d="M147 366.804l-9.875 2.743-9.875 6.035-3.884 2.227-5.832 3.347h-.006l-8.158 4.68-15.734 9.024a2.981 2.981 0 01-.949-1.723 9.166 9.166 0 00-2.754-5.118l30.997-18.12 2.48-1.45 14.812-17.006z"
        fill="#575a89"
      />
      <path
        d="M121.215 422.214s-18.653-1.097-20.299 26.334-1.097 53.215-1.097 53.764 7.68 52.667 14.813 52.667 12.618-1.097 14.264-3.84-4.39-42.244-4.39-42.244-2.742-41.694 1.647-54.861 4.937-30.174-4.938-31.82z"
        opacity={0.1}
      />
      <path
        d="M123.958 419.471s-18.653-1.097-20.299 26.334-1.097 53.215-1.097 53.764 7.68 52.667 14.813 52.667 12.618-1.097 14.264-3.84-4.39-42.244-4.39-42.244-2.742-41.694 1.647-54.861 4.937-30.174-4.938-31.82z"
        fill={color}
      />
    </svg>
  );
};

SvgAugmentedReality.propTypes = {
  color: PropTypes.string
};
SvgAugmentedReality.defaultProps = {
  color: "primary"
};
export default SvgAugmentedReality;
