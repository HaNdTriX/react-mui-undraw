import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgShareOpinion = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1097 727.072"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M946.715 703.925l-229.214.76c-60.81-18.273-110.633-81.737-110.948-176.888a269.465 269.465 0 013.238-42.812l184.622-41.478 142.425-31.995a283.262 283.262 0 0129.256 30.42l-136.19 71.912-64.248 33.926 72.194-24.907 149.844-51.694a363.37 363.37 0 0124.916 44.672l-45.21 46.725 51.143-33.482q.328.769.653 1.54c32.414 76.95-7.803 173.087-72.48 173.301zM909.047 389.976c-34.663 9.955-77.28 22.533-121.095 35.607-63.352 18.908-129.209 38.861-177.155 53.447l.031-.171a65.9 65.9 0 0112.16-28.225c35.517-46.179 80.743-78.438 131.077-90.418h.004a188.906 188.906 0 0143.201-5.155c40.046-.132 77.978 12.428 111.777 34.915zM252.9 560.062l-39.63 118.69-9.73 29.16a98.102 98.102 0 01-16.61 19.16H186c-49.93 0-95.27-2.57-128.68-6.74l4.65-35.65 9.98-76.46 12.76-97.92a181.568 181.568 0 0123.63-13.01l11.25 101.56 5.31 47.91 1.54-51.3 3.19-106.48a213.056 213.056 0 0130.78-7.48l16.71 38.1-7.9-39.38c.34-.04.68-.09 1.02-.13 50.73-6.11 96.58 38.25 82.66 79.97zM66.45 524.082c-1.88 24.25-3.99 54.12-6.09 84.87a23578.38 23578.38 0 00-7.26 110.82 414.77 414.77 0 01-15.88-2.4 182.336 182.336 0 01-12.33-26.74c-8.6-23.47-11.89-48.08-9-72.39v-.01a144.303 144.303 0 016.46-28.82 148.437 148.437 0 0144.1-65.33z"
        fill="#f2f2f2"
      />
      <path
        d="M372 702.782c0 13.38-82.78 24.22-185.07 24.29H186c-49.93 0-95.27-2.57-128.68-6.74-1.43-.19-2.84-.37-4.22-.56a414.77 414.77 0 01-15.88-2.4C13.85 713.302 0 708.252 0 702.782c0-4.43 9.06-8.57 24.89-12.15 8.36-1.89 18.6-3.61 30.4-5.13q3.255-.435 6.68-.82c32.91-3.85 76.38-6.19 124.03-6.19 9.26 0 18.37.09 27.27.26 89.79 1.72 158.73 11.82 158.73 24.03z"
        fill="#3f3d56"
      />
      <path
        d="M149.929 490.14l4.673 36.453s1.87 12.15 3.739 18.694c0 0-1.87 34.583 13.086 58.885l9.346 17.76 1.87 26.17 23.367 2.805-4.673-39.257s-1.87-18.694 0-26.172-9.347-42.06-9.347-42.06 14.955-48.605 3.739-60.756-45.8 7.478-45.8 7.478z"
        fill="#a0616a"
      />
      <path
        d="M191.055 640.625s-10.282 0-11.216 2.804-15.89 28.041-15.89 28.041-13.086 20.564 5.608 21.498 24.302-7.477 24.302-7.477 16.825-27.106 17.76-31.78-7.024-14.689-7.024-14.689-10.736 7.212-13.54 1.603z"
        fill="#2f2e41"
      />
      <circle cx={204.141} cy={150.846} r={31.78} fill="#a0616a" />
      <path
        d="M178.437 160.66s0 34.584-12.151 37.388S183.11 232.632 199 228.893s22.433-28.976 22.433-28.976-14.02-17.759-8.413-27.106-34.583-12.15-34.583-12.15z"
        fill="#a0616a"
      />
      <path
        d="M191.99 208.797a27.983 27.983 0 01-22.424-12.473s-13.095 2.191-14.964 3.126-34.584 11.216-42.061 32.714l29.91 38.323s-6.543 54.212 0 78.514a68.873 68.873 0 01-2.804 43.93s-2.804.935 1.87 2.805 112.163-19.629 114.032-25.237-1.87-5.608.935-8.412 10.281-19.629 2.804-25.237-12.151-67.298-12.151-67.298l19.628-49.539s-35.874-28.67-48.781-25.084c0 0-2.627 13.868-25.994 13.868z"
        fill="#d0cde1"
      />
      <path
        d="M204.14 471.446s-1.869 41.126 1.87 57.016 3.739 22.433 3.739 22.433-5.608 27.106-2.804 52.343-3.272 65.915-3.272 65.915l22.9 6.99 14.02-71.036s11.217-43.93 4.674-64.494c0 0 3.74-62.624 6.543-69.167s-47.67 0-47.67 0z"
        fill="#a0616a"
      />
      <path
        d="M179.06 156.506c.421-2.981 1.312-6.233 3.854-7.846 2.639-1.675 6.045-.988 9.162-.76s6.937-.552 7.961-3.504c.639-1.841-.051-4.041.945-5.716 1.586-2.665 6.429-2.36 7.264-5.347.265-.946.007-2.002.39-2.907.514-1.221 1.96-1.708 3.251-2.007a52.022 52.022 0 0114.408-1.27 1.914 1.914 0 001.367-.27 1.672 1.672 0 00.441-.768c1.095-3.273-.065-6.986-2.242-9.663a23.621 23.621 0 00-8.354-5.97 61.174 61.174 0 00-22.542-5.99c-5.962-.374-12.22.275-17.298 3.42a24.483 24.483 0 00-4.166 3.321 36.566 36.566 0 00-10.276 20.445 46.055 46.055 0 002.51 22.892c1.614 4.392 4.159 8.927 8.097 11.633 2.11 1.45 3.93 2.79 4.806.327.93-2.612.013-7.126.422-10.02zM144.32 387.323s-14.02 18.694-11.216 31.78 13.086 34.584 13.086 34.584-5.608 42.06 3.739 42.06 49.538-1.869 50.473-6.542-2.804-51.408-2.804-51.408 4.673 41.126 7.478 41.126 51.408 4.674 53.277 1.87 5.608-74.776 5.608-74.776 5.098-33.943-11.004-38.47-108.637 19.776-108.637 19.776zM219.096 668.666s-16.825-9.347-17.76-1.87-11.216 34.584-11.216 34.584-10.281 21.498 12.151 22.433 28.041-9.347 28.041-14.02-2.514-36.737-2.514-36.737z"
        fill="#2f2e41"
      />
      <path
        d="M277.047 270.487l4.673 41.126s5.609 22.433 1.87 31.78-17.76 52.343-17.76 52.343-3.738-23.368-13.085-26.172l5.608-53.277s-13.382-33.247-10.43-37.654 29.124-8.146 29.124-8.146zM110.671 273.29l1.87 37.388s-6.543 32.715 6.543 67.298l1.87 14.956 12.15 23.367s2.804-22.433 8.412-22.433c0 0-5.608-14.955-3.738-23.367s-.935-53.278-.935-53.278l4.673-36.294z"
        fill="#a0616a"
      />
      <path
        d="M256.484 219.078h10.281s24.302 56.082 14.955 57.017-39.257 8.412-40.191 4.673 14.955-61.69 14.955-61.69zM120.953 223.752l-8.412 8.412s-11.217 42.061-2.804 46.735 40.192 10.281 42.061 6.543-30.845-61.69-30.845-61.69z"
        fill="#d0cde1"
      />
      <path
        d="M791.08 29.13v648.2a29.14 29.14 0 01-29.13 29.11H498.8a29.08 29.08 0 01-29.13-29.11V29.13A29.127 29.127 0 01498.8 0h39.38v5.05a23.987 23.987 0 0023.98 23.99H696a23.79 23.79 0 0014.22-4.68 22.285 22.285 0 002.36-1.98 23.917 23.917 0 007.4-17.33V0h41.97a29.121 29.121 0 0129.13 29.13z"
        fill="#3f3d56"
      />
      <ellipse cx={667} cy={260.642} rx={75} ry={15} opacity={0.1} />
      <ellipse cx={558} cy={337.642} rx={75} ry={15} opacity={0.1} />
      <ellipse cx={620} cy={478.642} rx={75} ry={15} opacity={0.1} />
      <ellipse cx={599} cy={631.642} rx={75} ry={15} opacity={0.1} />
      <path
        fill={color}
        d="M859.5 403.496h-228v75.293l19.088-19.089H859.5v-56.204zM316 259.996h228v75.293L524.912 316.2H316v-56.204z"
      />
      <path
        fill="#fff"
        d="M682.367 417.142h128.267v10.4H682.367zM682.367 432.742h128.267v10.4H682.367zM354.867 274.642h128.267v10.4H354.867zM354.867 290.242h128.267v10.4H354.867z"
      />
      <path fill={color} d="M1097 118.642H667v142l36-36h394v-106z" />
      <path
        fill="#fff"
        d="M734 142.642h296v24H734zM734 178.642h296v24H734zM571.84 601.65c10.945 20.3 34.175 29.013 34.175 29.013s5.484-24.197-5.461-44.495-34.175-29.012-34.175-29.012-5.484 24.197 5.461 44.495z"
      />
      <path
        d="M579.363 594.973c19.76 11.888 27.371 35.502 27.371 35.502s-24.428 4.34-44.188-7.55-27.371-35.502-27.371-35.502 24.428-4.339 44.188 7.55z"
        fill={color}
      />
    </svg>
  );
};

SvgShareOpinion.propTypes = {
  color: PropTypes.string
};
SvgShareOpinion.defaultProps = {
  color: "primary"
};
const MemoSvgShareOpinion = React.memo(SvgShareOpinion);
export default MemoSvgShareOpinion;
