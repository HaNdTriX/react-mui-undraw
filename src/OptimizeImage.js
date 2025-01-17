import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgOptimizeImage = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 898.239 566.341"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M639.651 479.242H207.884C93.452 453.9 0 366.616 0 236.088a271.808 271.808 0 016.367-58.714l348.023-56.06L622.87 78.073a480.158 480.158 0 0154.919 41.861l-256.986 98.03-121.231 46.246 136.145-33.838 282.577-70.233a481.989 481.989 0 0146.655 61.394l-85.454 63.89 96.547-45.697q.613 1.057 1.22 2.117c60.577 105.706-15.778 237.4-137.61 237.4zM570.654 48.403C505.3 61.902 424.947 78.963 342.331 96.697 222.881 122.347 98.703 149.42 8.297 169.21l.06-.235a80.792 80.792 0 0123.082-38.662A478.738 478.738 0 01278.907 6.874h.008A483.295 483.295 0 01360.324 0a478.257 478.257 0 01210.33 48.403z"
        fill="#f2f2f2"
      />
      <path
        d="M465.239 48.841v442h433v-442zm393 312h-352v-274h352z"
        fill="#3f3d56"
      />
      <path
        d="M704.612 164.068c-10.675-18.037-31.794-18.878-31.794-18.878s-20.579-2.631-33.78 24.839c-12.305 25.605-29.287 50.326-2.734 56.32l4.796-14.928 2.97 16.04a103.893 103.893 0 0011.361.194c28.436-.918 55.517.268 54.645-9.936-1.159-13.565 4.807-36.296-5.464-53.651z"
        fill="#2f2e41"
      />
      <path
        d="M631.739 335.341l-36 25s-21 22-6 22 21-19 21-19l46-20z"
        fill="#ffb8b8"
      />
      <path
        d="M646.239 237.841s-31.5 97.5-21.5 102.5 32 8 32 8z"
        fill="#d0cde1"
      />
      <path
        d="M646.239 237.841s-31.5 97.5-21.5 102.5 32 8 32 8z"
        opacity={0.1}
      />
      <path
        d="M745.269 360.841h-70.91l50.38-25.5a32.124 32.124 0 013.19 2.36 63.965 63.965 0 0117.34 23.14z"
        fill="#2f2e41"
      />
      <circle cx={666.239} cy={186.841} r={26} fill="#ffb8b8" />
      <path
        d="M665.739 208.341s6 19 0 26 33-10 33-10-14-20-10-29z"
        fill="#ffb8b8"
      />
      <path
        d="M723.339 295.151l-2.1 13.69s1.06 3.11 2.35 7.64c1.68 5.91 3.75 14.24 4.34 21.22.61 7.08-.31 12.78-4.69 13.14-6.28.52-9.55 4.33-12.81 10h-72.34c.19-3.12.42-6.36.69-9.69q.225-3 .5-6.08c.2-2.36 7.286-46.69 1.96-56.23-10.997-19.7 3-31 3-31s2-15 2-20c0-3.92 15.36-8.45 22-10.23.43-.11.81-.22 1.16-.3 1.15-.3 1.84-.47 1.84-.47l5.25-2.15s14.75-2.85 15.75-4.85a5.081 5.081 0 012.56-1.82c2.11-.9 4.8-1.54 5.44-2.18a25.489 25.489 0 002.47-3.36 13.365 13.365 0 017.36-4.3c10.74-2.71 26.17 2.66 26.17 2.66l-5.4 35.25z"
        fill="#d0cde1"
      />
      <path
        d="M754.739 273.341l-36 25s-21 22-6 22 21-19 21-19l46-20z"
        fill="#ffb8b8"
      />
      <path
        d="M692.892 162.33l-20.864-10.93-13.09 2.031a23.402 23.402 0 00-19.236 17.958l-2.448 10.811 14.84-.57 4.145-9.674v9.514l6.847-.264 3.974-15.4 2.484 16.394 24.342-.497z"
        fill="#2f2e41"
      />
      <path
        d="M729.239 212.841l7-2s71 29 69 54 1 25-11 26-47-11-46-13 8-12 8-12l-27-21z"
        fill="#d0cde1"
      />
      <circle cx={692.239} cy={186.841} r={4} fill="#ffb8b8" />
      <path
        d="M.06 250.841v228h223.357v-228zm202.208 160.941H20.694v-141.34h181.574z"
        fill="#3f3d56"
      />
      <path
        d="M99.94 310.28c5.506-9.305 16.4-9.738 16.4-9.738s10.616-1.358 17.426 12.812c6.347 13.208 15.107 25.96 1.41 29.052l-2.474-7.7-1.532 8.274a53.594 53.594 0 01-5.86.1c-14.67-.474-28.639.138-28.189-5.125.598-6.998-2.48-18.723 2.819-27.676z"
        fill="#2f2e41"
      />
      <path
        d="M137.53 398.628l18.57 12.896s10.833 11.349 3.096 11.349-10.833-9.801-10.833-9.801l-23.728-10.317z"
        fill="#ffb8b8"
      />
      <path
        d="M130.05 348.334s16.25 50.294 11.091 52.873-16.506 4.127-16.506 4.127z"
        fill="#d0cde1"
      />
      <path
        d="M130.05 348.334s16.25 50.294 11.091 52.873-16.506 4.127-16.506 4.127z"
        opacity={0.1}
      />
      <path
        d="M78.968 411.782h36.578l-25.988-13.154a16.57 16.57 0 00-1.646 1.218 32.995 32.995 0 00-8.944 11.936z"
        fill="#2f2e41"
      />
      <circle cx={119.734} cy={322.027} r={13.412} fill="#ffb8b8" />
      <path
        d="M119.992 333.117s-3.095 9.8 0 13.412-17.023-5.159-17.023-5.159 7.222-10.316 5.159-14.959z"
        fill="#ffb8b8"
      />
      <path
        d="M90.28 377.897l1.083 7.062s-.547 1.604-1.212 3.94a62.976 62.976 0 00-2.239 10.947c-.314 3.652.16 6.592 2.42 6.778 3.239.268 4.926 2.233 6.607 5.158h37.316a250.17 250.17 0 00-.356-4.998q-.116-1.548-.258-3.137c-.103-1.217-4.247-24.099-1.01-29.005 6.406-9.715-1.548-15.991-1.548-15.991s-1.032-7.738-1.032-10.317c0-2.022-7.923-4.359-11.348-5.277-.222-.057-.418-.113-.599-.155-.593-.154-.949-.242-.949-.242l-2.708-1.11s-7.609-1.47-8.125-2.5a2.621 2.621 0 00-1.32-.94 18.689 18.689 0 01-2.806-1.124 13.147 13.147 0 01-1.274-1.733 6.894 6.894 0 00-3.797-2.219c-5.54-1.397-13.5 1.373-13.5 1.373l2.786 18.183z"
        fill="#d0cde1"
      />
      <path
        d="M74.083 366.646l18.57 12.896s10.832 11.349 3.095 11.349-10.833-9.801-10.833-9.801l-23.728-10.317z"
        fill="#ffb8b8"
      />
      <path
        d="M105.985 309.382l10.763-5.637 6.752 1.048a12.072 12.072 0 019.923 9.263l1.263 5.577-7.655-.295-2.138-4.99v4.908l-3.532-.136-2.05-7.944-1.282 8.457-12.556-.257z"
        fill="#2f2e41"
      />
      <path
        d="M87.236 335.438l-3.61-1.031S47 349.366 48.033 362.262s-.516 12.896 5.674 13.412 24.244-5.675 23.729-6.706-4.127-6.19-4.127-6.19l13.927-10.833z"
        fill="#d0cde1"
      />
      <circle cx={106.322} cy={322.027} r={2.063} fill="#ffb8b8" />
      <path
        d="M600.834 365.078c-2.987 5.27-7.662 11.653-12.12 15.357l8.902-1.681a229.055 229.055 0 01-434.15 49.685l9.05-.385c-5.182-2.595-11.185-7.748-15.292-12.201.21 6.053-.44 13.938-2.304 19.425l6.696-6.074a231.055 231.055 0 00437.973-50.126l7.903 4.394c-3.062-4.92-5.487-12.45-6.658-18.394z"
        fill={color}
      />
      <path
        d="M811.049 363.421c-.204-.332-5-8.342-6.664-24.974-1.525-15.26-.544-40.98 12.795-76.86 25.27-67.97-5.824-122.81-6.141-123.357l1.534-.89c.08.139 8.104 14.121 12.844 36.386a158.74 158.74 0 01-6.575 88.48c-25.227 67.853-6.472 99.975-6.28 100.291z"
        fill="#3f3d56"
      />
      <circle cx={801.167} cy={122.714} r={11.525} fill={color} />
      <circle cx={837.514} cy={165.267} r={11.525} fill="#3f3d56" />
      <circle cx={812.692} cy={193.635} r={11.525} fill={color} />
      <circle cx={842.833} cy={217.571} r={11.525} fill={color} />
      <circle cx={803.827} cy={254.805} r={11.525} fill="#3f3d56" />
      <path
        d="M818.011 363.845s-11.525-28.368 23.05-49.644zM803.838 363.33s-5.245-30.167-45.84-29.908zM49.596 415.78c.097-.16 2.393-3.993 3.19-11.954.73-7.304.26-19.615-6.125-36.788-12.095-32.532 2.788-58.782 2.94-59.043l-.734-.426a65.16 65.16 0 00-6.148 17.415 75.979 75.979 0 003.147 42.35c12.075 32.478 3.098 47.852 3.006 48.004z"
        fill="#3f3d56"
      />
      <circle cx={54.326} cy={300.568} r={5.516} fill={color} />
      <circle cx={36.928} cy={320.936} r={5.516} fill="#3f3d56" />
      <circle cx={48.809} cy={334.514} r={5.516} fill={color} />
      <circle cx={34.383} cy={345.97} r={5.516} fill={color} />
      <circle cx={53.053} cy={363.792} r={5.516} fill="#3f3d56" />
      <path
        d="M46.263 415.983s5.517-13.578-11.032-23.762zM53.047 415.737s2.51-14.44 21.941-14.316z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgOptimizeImage.propTypes = {
  color: PropTypes.string
};
SvgOptimizeImage.defaultProps = {
  color: "primary"
};
export default SvgOptimizeImage;
