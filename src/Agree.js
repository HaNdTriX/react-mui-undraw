import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgAgree = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1135.434 687.068"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={1052.368} cy={490.568} rx={35.5} ry={15.5} opacity={0.1} />
      <ellipse
        cx={986.651}
        cy={590.034}
        rx={35.5}
        ry={15.5}
        transform="rotate(-7.723 181.882 775.93)"
        opacity={0.1}
      />
      <path
        d="M1098.868 687.068h-208v-213h208zm-206-2h204v-209h-204z"
        fill="#3f3d56"
      />
      <ellipse cx={521.868} cy={58.068} rx={33} ry={11} fill="#3f3d56" />
      <path
        d="M308.868 416.068h-2V144.564a128.197 128.197 0 0147.357-99.697A125.502 125.502 0 01459.1 18.87c26.053 5.336 47.434 18.314 63.551 38.575l-1.565 1.245c-15.817-19.883-36.807-32.622-62.387-37.861a123.504 123.504 0 00-103.21 25.588 126.203 126.203 0 00-46.62 98.147z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M384.817 57.662h563v231h-563z" />
      <path
        fill="#fff"
        d="M402.817 77.604h91v68.117h-91zM561.817 77.662h348v14h-348zM561.817 104.662h177v14h-177zM561.817 131.662h348v14h-348zM402.817 182.662h507v14h-507zM402.817 204.662h293v14h-293zM402.817 226.662h185v14h-185z"
      />
      <circle cx={897.817} cy={250.662} r={22} fill="#fff" />
      <path d="M917.368 217.568s-28 22-14 27 23-18 23-18z" fill="#ffb8b8" />
      <path d="M918.368 209.568l-6 10s10 0 12 15l8-10z" fill={color} />
      <path
        fill="#ffb8b8"
        d="M1051.368 437.568l1 30-12 7-5-3 1-34h15zM980.368 429.568l2 32-28 12 2-17s8-13 6-27z"
      />
      <path
        d="M1023.368 188.568s16 42 19 68 8 95 8 95l10 89-28 4-12-90-27-89-6 89-5 81-26 1-2-84-11-107 6-51zM1038.368 469.568s1.64-16.795 13.82-7.398l2.18-1.602 10 22s12 17-9 19-19-19-19-19l-2-9 1-5.894zM980.368 449.568a15.887 15.887 0 018 14c0 10-1 11-1 11l-15 4s-10-1-16 5-36 10-36 2 25-21 25-21 7.425-12.538 12.713-11.269 7.287 3.269 7.287 4.269-3 8-3 8 17-4 18-16z"
        fill="#2f2e41"
      />
      <circle cx={978.368} cy={40.568} r={25} fill="#ffb8b8" />
      <path
        d="M996.868 47.068l11 25-30 43s-2-47-8-55 27-13 27-13z"
        fill="#ffb8b8"
      />
      <path
        fill={color}
        d="M982.868 99.068l5-13 4 1 5-4 7-22 10 7 13 131-81 2 11-91 10-26 7.219-9.543 4.781 14.543 4 10z"
      />
      <path
        d="M1005.868 155.068l3.06-90.458s5.94.458 7.94 3.458 35 9 35 9l-6 93s25 74 16 78-25 3-25 3zM957.368 143.568l10.609-60.965-23.609 15.965 6 44-5 30s-19 83-13 86 13 0 13 0l12-84z"
        fill="#575a89"
      />
      <path
        d="M951.368 96.568l-7 2-3 40-5 35-24 43s12-8 17 15l26.431-46.017z"
        fill="#575a89"
      />
      <path d="M1029.368 209.568s-28 22-14 27 23-18 23-18z" fill="#ffb8b8" />
      <path fill={color} d="M1046.368 220.568l-9 11-12-21 5-9 16 19z" />
      <path
        d="M1044.368 80.568l8-4s6 8 7 15 6 16 6 21 14 52 14 52l-32 65s-7-24-22-26l25-35-14-25z"
        fill="#575a89"
      />
      <path
        d="M999.297 16.748l4.715-1.887s-9.858-10.852-23.572-9.909l3.857-4.246s-9.429-3.775-18 6.134c-4.506 5.208-9.72 11.33-12.97 18.228h-5.048l2.107 4.64-7.375 4.64 7.57-.834a25.927 25.927 0 00-.205 7.696 9.957 9.957 0 003.646 6.514s5.846-12.102 5.846-13.99v4.719s4.715-4.247 4.715-7.078l2.571 3.303 1.286-5.19 15.857 5.19-2.571-4.246 9.857 1.415-3.857-5.19s11.143 6.134 11.571 11.324 3.69 10.108 3.69 10.108 8.739-24.263-3.69-31.34z"
        fill="#2f2e41"
      />
      <ellipse cx={998.868} cy={36.568} rx={2.8} ry={3.5} fill="#ffb8b8" />
      <path
        d="M448.161 500.87c-30.938 114.367-136.91 185.198-136.91 185.198s-55.81-114.595-24.871-228.963 136.91-185.197 136.91-185.197S479.1 386.503 448.16 500.87z"
        fill={color}
      />
      <path
        d="M166.707 500.87c30.939 114.367 136.91 185.198 136.91 185.198s55.81-114.595 24.872-228.963-136.91-185.197-136.91-185.197-55.81 114.595-24.872 228.962z"
        fill={color}
      />
      <path
        d="M212.17 476.292c84.895 82.642 95.264 209.683 95.264 209.683s-127.273-6.95-212.169-89.592S0 386.7 0 386.7s127.274 6.95 212.17 89.592zM402.7 476.292c-84.896 82.642-95.266 209.683-95.266 209.683s127.274-6.95 212.17-89.592S614.867 386.7 614.867 386.7s-127.273 6.95-212.169 89.592z"
        fill="#3f3d56"
      />
      <ellipse cx={833.368} cy={252.068} rx={84.5} ry={44} fill={color} />
      <path
        fill="#3f3d56"
        d="M847.246 252.324l-17.768-23.689 6.401-4.801 12.232 16.31 56.239-56.238 5.657 5.656-62.761 62.762z"
      />
      <path
        d="M849.368 280.068c-47.144 0-85.5-20.187-85.5-45s38.356-45 85.5-45 85.5 20.187 85.5 45-38.355 45-85.5 45zm0-88c-46.042 0-83.5 19.29-83.5 43s37.458 43 83.5 43 83.5-19.29 83.5-43-37.458-43-83.5-43zM30.434 684.534h1105v2h-1105z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgAgree.propTypes = {
  color: PropTypes.string
};
SvgAgree.defaultProps = {
  color: "primary"
};
export default SvgAgree;
