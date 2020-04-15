import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgGreekFreak = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 963.5 866.436"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M916.26 804.508v.95c0 .25 0 .51-.02.76a58.69 58.69 0 01-12.87 35.6c-.41.53-.84 1.04-1.28 1.55-.66.78-1.34 1.53-2.04 2.27-.06.06-.12.13-.19.19l-.03.03c-.08.08-.16.17-.24.25q-1.845 1.905-3.87 3.65c-.27.23-.55.47-.84.7a58.792 58.792 0 01-37.13 13.56c-.1.01-.21.01-.31.01h-.35c-.1 0-.2 0-.3-.01-.35 0-.69-.01-1.04-.02a58.728 58.728 0 01-36.91-14.19c-.28-.23-.56-.47-.83-.72-1.07-.94-2.1-1.93-3.09-2.95-.08-.08-.16-.17-.24-.25l-.03-.03c-.07-.06-.13-.13-.19-.19a56.84 56.84 0 01-2.43-2.72q-.645-.765-1.26-1.56a58.615 58.615 0 01-12.53-35.17c-.02-.24-.02-.49-.02-.74v-.93c0-.11 0-.22.01-.33a58.693 58.693 0 0112.31-35.32q.615-.795 1.26-1.56a59.462 59.462 0 012.66-3c0-.01.01-.02.02-.03.08-.08.16-.17.25-.25q1.665-1.725 3.47-3.32c.27-.25.55-.49.83-.72a58.777 58.777 0 0137.7-14.03c.1-.01.21-.01.31-.01h.65a58.802 58.802 0 0137 13.4c.28.24.56.47.84.71a57.74 57.74 0 014.19 3.94c.08.08.16.17.24.25l.02.02c.07.06.14.14.2.2.74.78 1.45 1.59 2.14 2.41.44.51.86 1.02 1.28 1.55a58.69 58.69 0 0112.65 35.76 2.807 2.807 0 01.01.29z"
        fill={color}
      />
      <path fill="#fff" d="M855.75 746.218h2v118h-2z" />
      <path fill="#fff" d="M797.75 804.218h118.51v2H797.75z" />
      <path
        d="M831.73 804.218a45.93 45.93 0 00-19.93-36.88q-.645.765-1.26 1.56a43.96 43.96 0 0119.2 35.32c.01.33.01.66.01 1s0 .67-.01 1a44.004 44.004 0 01-18.97 35.17q.615.795 1.26 1.56a45.96 45.96 0 0019.7-36.73c.02-.33.02-.67.02-1s0-.67-.02-1zM883.76 806.218c-.01-.33-.01-.66-.01-1s0-.67.01-1a43.998 43.998 0 0119.84-35.76c-.42-.53-.84-1.04-1.28-1.55a45.965 45.965 0 00-20.55 37.31c-.02.33-.02.67-.02 1s0 .67.02 1a45.95 45.95 0 0020.32 37.15c.44-.51.87-1.02 1.28-1.55a43.981 43.981 0 01-19.61-35.6z"
        fill="#fff"
      />
      <path fill="#2f2e41" d="M0 863.658h963.5v2.24H0z" />
      <path
        d="M908.239 415.84a414.549 414.549 0 01-114.27 286.545c-.5.53-1.01 1.06-1.52 1.59a416 416 0 01-600.2.23c-.51-.53-1.02-1.06-1.52-1.589a415.996 415.996 0 01-1.34-571.81c.49-.54 1-1.07 1.51-1.6a416.003 416.003 0 01602.46-.231c.51.53 1.02 1.06 1.51 1.6A414.51 414.51 0 01908.24 415.84z"
        fill="#3f3d56"
      />
      <path fill="#fff" d="M76.239 415h832v2h-832z" />
      <path
        fill="#fff"
        d="M491.239 0h2v832h-2zM310.286 278.89a353.752 353.752 0 00-76.123-112.81 356.31 356.31 0 00-43.264-36.874c-.51.53-1.02 1.06-1.51 1.6 88.855 64.126 146.805 168.544 146.85 286.254.045 117.21-57.335 221.292-145.51 285.556.5.53 1.01 1.06 1.52 1.59a356.737 356.737 0 0042.107-36.087 355.361 355.361 0 0075.93-389.229zM648.24 416.94c-.046-117.71 57.824-222.172 146.63-286.366-.49-.54-1-1.07-1.511-1.6a355.313 355.313 0 00-.91 575.001c.51-.53 1.02-1.06 1.52-1.59-88.215-64.197-145.685-168.235-145.73-285.444z"
      />
      <path
        fill="#9d616a"
        d="M390.955 704.422l-2.771 55.42 29.095 5.542 8.313-52.649-34.637-8.313zM535.046 722.434l6.928 45.721h26.324l-5.542-48.492-27.71 2.771z"
      />
      <path
        d="M396.497 597.739l-5.542 63.733-5.542 54.034s20.782-8.313 40.18 4.157c0 0 12.469-2.771 9.698-56.806l12.47-56.805zM508.722 618.521s8.313 49.878 12.47 54.035c0 0 6.862 44.603 10.195 55.878a10.055 10.055 0 00.889 2.313c2.77 4.156 33.251 13.855 34.637-2.771s5.542-44.336-8.313-65.119l-8.313-52.649z"
        fill="#efefef"
      />
      <path
        d="M592.545 612.287c-1.386 15.24-77.588 12.47-91.443 12.47-4.379 0-10.003-.68-12.802-8.245-4.794-12.926-7.427-31.81-8.313-39.195-.36 6.844-3.52 23.414-11.417 34.028-4.808 6.484-12.76 5.195-21.503 3.713-14.52-2.467-43.38-11.445-51.263-9.699-12.47 2.771-27.474 3.048-27.71 0a35.684 35.684 0 01.028-5.002c1.829-28.652 28.375-106.323 28.375-112.072 0-6.928 12.47-36.023 12.47-36.023l127.465-15.24s50.487 136.194 57.43 169.723c.594 2.895-1.206 4.336-1.317 5.542zM421.436 758.456l-36.023-6.927 3.464 57.498 28.402 20.09s-2.77-55.42 4.157-70.66zM568.298 754.3s-18.011 11.084-33.252 0l12.47 51.263 20.782-2.77s9.699-30.482 0-48.493z"
        fill="#efefef"
      />
      <path
        d="M572.455 797.25s-29.096 1.386-29.096 4.157v45.721c0 4.157 5.542 9.699 4.157 12.47s8.313 9.698 30.48 5.542 13.856-18.012 13.856-18.012-22.168-38.794-19.397-49.878zM384.72 797.943s33.252.693 33.252 3.464v45.721c0 4.157-5.542 9.699-4.156 12.47s-8.313 9.698-30.481 5.542-13.855-18.012-13.855-18.012 18.011-38.1 15.24-49.185z"
        fill="#2f2e41"
      />
      <path
        d="M594.623 612.98c-1.386 15.24-81.744 16.625-95.6 16.625-4.378 0-7.924-5.528-10.723-13.092 14.867-2.952 78.807-14.992 105.561-9.768a25.436 25.436 0 01.762 6.234zM468.57 611.345c-4.808 6.484-11.374 10.737-20.117 9.255-14.52-2.467-44.765-8.674-52.649-6.928-12.47 2.771-27.474-5.265-27.71-8.313a35.684 35.684 0 01.028-5.002c29.164-.79 80.816-.443 100.448 10.988z"
        fill={color}
      />
      <path
        d="M414.508 269.376s-24.939-8.313-47.107 16.626l-4.156 8.313s-31.866 9.699-41.565 16.626c0 0-29.095-6.927-65.118 0l-36.023-8.313s-69.275-48.492-76.202-18.011 65.118 41.565 65.118 41.565l59.576 16.626s45.722 11.084 63.733 2.77c0 0 51.263-2.77 60.962-22.167l20.782 9.698zM500.41 262.449s51.262-5.542 70.66 20.782l40.179 11.084s44.336-8.313 60.962-4.156l36.023-9.699s34.637-55.42 54.034-40.18-45.722 63.734-45.722 63.734l-87.286 29.095s-67.89 5.542-81.744-19.397l-15.24 34.638-58.191-13.855z"
        fill="#9d616a"
      />
      <circle cx={451.917} cy={218.113} r={37.408} fill="#9d616a" />
      <path
        d="M432.52 240.28v30.482l13.855 48.492 41.565-48.492s-11.084-33.252-11.084-38.794-44.336 8.313-44.336 8.313z"
        fill="#9d616a"
      />
      <path
        d="M542.667 440.485s-.68 5.002-6.983 5.459c-12.622.928-33.876 3.076-47.744 7.703-20.783 6.928-83.13 6.928-83.13 6.928l-4.046-125.499 1.968-9.587c-1.386-11.084 9.698-55.42 9.698-55.42l8.091-5.971 7.58-1.635 2.34 2.064c0 18.455 18.012 36.023 18.012 36.023 26.324-12.47 37.408-40.18 37.408-40.18l7.8-1.15 8.161.915 7.385.831-2.563 2.176-1.386 2.77c-.083.167.07-.166 0 0-20.173 42.799 4.185 62.154 19.397 70.66 6.305 3.548 6.928 6.928 6.928 6.928s5.694-1.704 5.542 4.157c-.458 18.967-3.907 61.793 1.385 73.431 6.928 15.24 4.157 19.397 4.157 19.397z"
        fill="#efefef"
      />
      <path
        d="M412.43 192.823a93.276 93.276 0 013.159-9.065c1.58-3.627 0-14.505 1.58-14.505h6.317l7.898-7.253 4.738 3.627L442.44 162l7.897 3.627 7.898-3.627 12.635 9.066 3.16-1.813 3.158 5.44h1.58l6.318 9.065h3.158v9.065h3.16v23.57l-4.157 16.268-1.386-7.982a.504.504 0 00-.928-.273l-3.006 4.68-1.93-7.382a49.34 49.34 0 00-18.45-27.602c-11.688-8.481-28.584-12.52-45.958 11.413z"
        fill="#2f2e41"
      />
      <path
        d="M420.521 264.098c-2.632 16.002-10.585 60.255-19.757 70.978l-.11-3.352c-1.386-11.084 8.312-65.119 8.312-65.119zM493.662 259.22c-6.956 13.135-26.879 47.038-45.902 44.794-18.358-2.162-19.882-29.567-19.66-41.551l4.42-.956c0 18.455 16.626 34.194 16.626 34.194 26.324-12.47 34.706-37.575 34.706-37.575zM539.203 338.651s-.152 3.713-.304 9.574a57.666 57.666 0 01-11.417-1.774c-42.798-11.291-30.287-69.413-25.66-86.316l7.385.831h.014l.651.61c-20.173 42.798 2.84 63.608 18.053 72.115a57.881 57.881 0 0011.278 4.96z"
        fill={color}
      />
      <path
        d="M546.13 445.334s-4.143.153-10.446.61a329.948 329.948 0 01-7.565-35.247c-1.829-12.802-1.247-44.294-.637-64.246.166-5.223.318-9.67.443-12.76a57.881 57.881 0 0011.278 4.96s-.152 3.713-.304 9.574c-.458 18.967-.832 60.532 4.46 72.17 6.928 15.24 2.771 24.94 2.771 24.94zM416.587 350.32s44.335-21.212 87.286 0"
        fill={color}
      />
      <path d="M407.239 461s13-1 45 2 85-17 85-17" fill="#cacaca" />
      <path
        d="M232.26 237.508v.95c0 .25 0 .51-.02.76a58.69 58.69 0 01-12.87 35.6c-.41.53-.84 1.04-1.28 1.55-.66.78-1.34 1.53-2.04 2.27-.06.06-.12.13-.19.19l-.03.03c-.08.08-.16.17-.24.25q-1.845 1.905-3.87 3.65c-.27.23-.55.47-.84.7a58.792 58.792 0 01-37.13 13.56c-.1.01-.21.01-.31.01h-.35c-.1 0-.2 0-.3-.01-.35 0-.69-.01-1.04-.02a58.728 58.728 0 01-36.91-14.19c-.28-.23-.56-.47-.83-.72-1.07-.94-2.1-1.93-3.09-2.95-.08-.08-.16-.17-.24-.25l-.03-.03c-.07-.06-.13-.13-.19-.19a56.84 56.84 0 01-2.43-2.72q-.645-.765-1.26-1.56a58.615 58.615 0 01-12.53-35.17c-.02-.24-.02-.49-.02-.74v-.93c0-.11 0-.22.01-.33a58.693 58.693 0 0112.31-35.32q.615-.795 1.26-1.56a59.462 59.462 0 012.66-3c0-.01.01-.02.02-.03.08-.08.16-.17.25-.25q1.665-1.725 3.47-3.32c.27-.25.55-.49.83-.72a58.777 58.777 0 0137.7-14.03c.1-.01.21-.01.31-.01h.65a58.802 58.802 0 0137 13.4c.28.24.56.47.84.71a57.74 57.74 0 014.19 3.94c.08.08.16.17.24.25l.02.02c.07.06.14.14.2.2.74.78 1.45 1.59 2.14 2.41.44.51.86 1.02 1.28 1.55a58.69 58.69 0 0112.65 35.76 2.807 2.807 0 01.01.29z"
        fill={color}
      />
      <path fill="#fff" d="M171.75 179.218h2v118h-2z" />
      <path fill="#fff" d="M113.75 237.218h118.51v2H113.75z" />
      <path
        d="M147.73 237.218a45.93 45.93 0 00-19.93-36.88q-.645.765-1.26 1.56a43.96 43.96 0 0119.2 35.32c.01.33.01.66.01 1s0 .67-.01 1a44.004 44.004 0 01-18.97 35.17q.615.795 1.26 1.56a45.96 45.96 0 0019.7-36.73c.02-.33.02-.67.02-1s0-.67-.02-1zM199.76 239.218c-.01-.33-.01-.66-.01-1s0-.67.01-1a43.998 43.998 0 0119.84-35.76c-.42-.53-.84-1.04-1.28-1.55a45.965 45.965 0 00-20.55 37.31c-.02.33-.02.67-.02 1s0 .67.02 1a45.95 45.95 0 0020.32 37.15c.44-.51.87-1.02 1.28-1.55a43.981 43.981 0 01-19.61-35.6z"
        fill="#fff"
      />
    </svg>
  );
};

SvgGreekFreak.propTypes = {
  color: PropTypes.string
};
SvgGreekFreak.defaultProps = {
  color: "primary"
};
export default SvgGreekFreak;
