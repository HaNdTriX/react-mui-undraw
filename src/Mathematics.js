import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMathematics = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 654.237 682.114"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M620 635.614c0 25.68-138.79 46.5-310 46.5s-310-20.82-310-46.5c0-18.18 69.57-33.93 170.96-41.57 41.81-3.16 89.05-4.93 139.04-4.93 20.55 0 40.63.3 60.05.87 142.47 4.2 249.95 23.03 249.95 45.63z"
        fill="#3f3d56"
      />
      <ellipse cx={270} cy={630.614} rx={119} ry={14.5} opacity={0.1} />
      <ellipse cx={269.5} cy={521.114} rx={112.5} ry={120} fill="#3f3d56" />
      <path fill={color} d="M235 592.114h70v64h-70z" />
      <path fill="#575a89" d="M396.5 607.614l-4 22 26 4 17-10-1-16h-38z" />
      <path
        d="M265.5 194.614s-2 23-7 24 11 41 11 41h24l19-5-9-22s-12-16-3-29-35-9-35-9z"
        fill="#a0616a"
      />
      <path
        d="M265.5 194.614s-2 23-7 24 11 41 11 41h24l19-5-9-22s-12-16-3-29-35-9-35-9z"
        opacity={0.1}
      />
      <path
        d="M215.5 370.614s-26 50-5 60 26 9 26 12-4 2-2 7-4 25 2 37 4 21 4 21 0 1 2 5 3 7 2 9-7 15-1 18 37 5 40 0-3-8 0-11 5-4 3-6-4-27-4-27 5-29 3-33-5-8-3-11 4-2 5-6 3-13 3-13l11-1 26 5s29 32 61 42c0 0 9 9 12 9s3 0 2 2-4 2-2 4 5-1 3 2-4 3-2 5-1 13-1 14-9 95-6 97 45 8 48 0-2-18-2-18 15-120 11-128-18-44-93-67c0 0-21-4-21-7s-2-22-6-23-27-2-27-2l-29 9-40-7z"
        fill="#2f2e41"
      />
      <path
        d="M250.5 538.614l-5 18s-4 29 1 36c3.927 5.498 10.94 12.23 23.944 13.412a16.071 16.071 0 0016.779-11.118 5.007 5.007 0 00.277-1.294c0-2-3-26-3-26l-5-25-1-7zM396.5 624.614s-5-5-6 0-5 26 2 27 74 11 81 7 20-10 12-13-31-12-31-12-13-17-15-18-13 1-18 5-25 4-25 4z"
        fill="#2f2e41"
      />
      <circle cx={289.5} cy={184.614} r={31} fill="#a0616a" />
      <path
        d="M286.5 254.614l-12-13-13.301-26s-9.699-3-11.699 2-38 21-38 21 9 84 5 92-11 40-5 43 34 0 43 4 35 4 42-1 9-9 16-6c5.96 2.554 19.89-84.761 23.902-110.781a11.844 11.844 0 00-4.908-11.51c-8.973-6.294-25.133-17.14-27.994-15.71-4 2-17 22-17 22z"
        fill="#575a89"
      />
      <path
        d="M329.5 250.614a11.86 11.86 0 018.91 10.195l8.09 72.805s-20 43-30 14 13-97 13-97z"
        fill="#575a89"
      />
      <path
        d="M327.5 340.614l22-6s4 28 8 28-14 16-23 14-22-9-23-14 9-26 9-26z"
        fill="#575a89"
      />
      <path
        d="M266.098 197.987c2.108-4.648 1.742-10.07 3.485-14.867a17.727 17.727 0 0126.953-8.38c2.242 1.598 4.49 3.843 7.226 3.538 2.946-.328 5.575-3.616 8.284-2.41 3.003 1.334 2.192 6.716 5.234 7.959 1.601.654 3.493-.353 4.417-1.816a11.225 11.225 0 001.286-4.976c.42-4.265.799-8.78-1.05-12.645a30.289 30.289 0 01-2.03-4.09 13.994 13.994 0 01-.385-4.034c-.017-5.013-.383-10.242-2.905-14.575-2.8-4.807-7.975-7.88-13.374-9.222s-11.055-1.135-16.598-.666c-9.163.776-18.72 2.438-25.938 8.135a10.147 10.147 0 00-2.494 2.62 13.525 13.525 0 00-1.328 3.84 79.45 79.45 0 01-6.967 18.278 39.656 39.656 0 00-3.596 7.765c-.765 2.755-.714 5.894.889 8.261 1.305 1.928 3.39 2.955 5.03 4.53 1.623 1.562 2.383 4.565 4.182 5.748 1.57 1.032 3.451.303 5.053 1.397 2.056 1.405 2.204 4.484 4.626 5.61z"
        fill="#2f2e41"
      />
      <path
        d="M291.5 269.614l3-6s44 13 53 25c0 0 22-14 34-12l12 2-37 33-47-4z"
        fill="#f2f2f2"
      />
      <path
        d="M289.5 263.614l-41 57 59 29s5.516 3 9.758 0l39.242-18 37-53-37 19s-4-8-12-4z"
        fill={color}
      />
      <path
        d="M352.5 364.614l8-21s18-23 8-34-21 32-21 32zM260.198 361.262l17.456-14.152s27.11-10.865 23.978-25.397-34.22 17.145-34.22 17.145z"
        fill="#a0616a"
      />
      <path
        d="M217 260.114h-1s-15.5-18.5-18.5 6.5-13 108 13 111 44.5-12.5 44.5-12.5 19-29 12-29c-3.387 0-12.598-1.522-21-1-8.963.556-17.016 3.08-16.5.5 1-5 15.5-68.5-12.5-75.5z"
        opacity={0.1}
      />
      <path
        d="M215.5 240.614l-4-2s-16 3-19 28-13 108 13 111 61-4 61-4 7-38 0-38-43 5-42 0 19-88-9-95zM338 353.114l11.027-16.901L356 364.114l-18 8v-19z"
        fill="#575a89"
      />
      <circle cx={111.473} cy={85.114} r={27} fill="#f2f2f2" />
      <path
        fill="#f2f2f2"
        d="M79.473 286.114h64v64h-64zM372 0l16.199 28.057 16.198 28.057h-64.794l16.198-28.057L372 0z"
      />
      <path
        d="M654.237 168.229q-.581 17.955-8.746 28.784-8.165 10.829-19.401 10.83-9.152 0-16.042-10.599-6.893-10.598-6.892-32.606 0-4.864.231-9.266.231-4.4.58-8.34l4.054-38.108h-26.757q-6.95 72.278-11.41 86.004-4.46 13.725-15.115 13.726a12.78 12.78 0 01-8.572-3.591 12.064 12.064 0 01-4.054-9.498q0-5.326 8.398-14.884 8.397-9.556 9.324-17.433l6.95-54.324H555.55a19.91 19.91 0 00-9.093 2.259 17.156 17.156 0 00-6.544 5.27l-4.981 7.413h-4.054q5.674-17.605 13.957-26.467 8.28-8.861 19.054-8.861h88.494v20.386H622.5q-1.39 13.9-2.143 27.8-.754 13.899-.752 27.914 0 9.5 4.401 15.406 4.4 5.907 11.004 5.907 4.053 0 8.514-3.301a11.97 11.97 0 005.038-8.63q.348-2.546.521-3.996.174-1.447.174-1.795z"
        fill={color}
      />
      <path
        d="M654.237 168.229q-.581 17.955-8.746 28.784-8.165 10.829-19.401 10.83-9.152 0-16.042-10.599-6.893-10.598-6.892-32.606 0-4.864.231-9.266.231-4.4.58-8.34l4.054-38.108h-26.757q-6.95 72.278-11.41 86.004-4.46 13.725-15.115 13.726a12.78 12.78 0 01-8.572-3.591 12.064 12.064 0 01-4.054-9.498q0-5.326 8.398-14.884 8.397-9.556 9.324-17.433l6.95-54.324H555.55a19.91 19.91 0 00-9.093 2.259 17.156 17.156 0 00-6.544 5.27l-4.981 7.413h-4.054q5.674-17.605 13.957-26.467 8.28-8.861 19.054-8.861h88.494v20.386H622.5q-1.39 13.9-2.143 27.8-.754 13.899-.752 27.914 0 9.5 4.401 15.406 4.4 5.907 11.004 5.907 4.053 0 8.514-3.301a11.97 11.97 0 005.038-8.63q.348-2.546.521-3.996.174-1.447.174-1.795z"
        opacity={0.1}
      />
      <path
        d="M654.237 164.61q-.581 17.955-8.746 28.784-8.165 10.829-19.401 10.83-9.152 0-16.042-10.599-6.893-10.598-6.892-32.606 0-4.864.231-9.266.231-4.4.58-8.34l4.054-38.108h-26.757q-6.95 72.278-11.41 86.004-4.46 13.725-15.115 13.726a12.78 12.78 0 01-8.572-3.591 12.064 12.064 0 01-4.054-9.498q0-5.326 8.398-14.884 8.397-9.556 9.324-17.433l6.95-54.324H555.55a19.91 19.91 0 00-9.093 2.259 17.156 17.156 0 00-6.544 5.27l-4.981 7.413h-4.054q5.674-17.605 13.957-26.467 8.28-8.861 19.054-8.861h88.494v20.386H622.5q-1.39 13.9-2.143 27.8-.754 13.899-.752 27.914 0 9.5 4.401 15.406 4.4 5.907 11.004 5.907 4.053 0 8.514-3.301a11.97 11.97 0 005.038-8.63q.348-2.546.521-3.996.174-1.447.174-1.795z"
        fill={color}
      />
    </svg>
  );
};

SvgMathematics.propTypes = {
  color: PropTypes.string
};
SvgMathematics.defaultProps = {
  color: "primary"
};
export default SvgMathematics;
