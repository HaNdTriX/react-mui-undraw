import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPhotoSession = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 993 742"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M993 696.5c0 4.1-3.75 8.08-10.77 11.86C946.22 727.74 824.11 742 679 742q-8.565 0-17.01-.07C496.48 740.65 365 720.8 365 696.5c0-25.13 140.58-45.5 314-45.5 47.49 0 92.51 1.53 132.86 4.26q15.21 1.035 29.5 2.29 5.94.51 11.71 1.08c18.13 1.75 34.93 3.77 50.13 6.02q11.07 1.635 20.97 3.42c17.19 3.11 31.61 6.55 42.75 10.24 16.77 5.58 26.08 11.73 26.08 18.19zM628 466c0 16.57-140.58 30-314 30-28.66 0-56.42-.37-82.8-1.06-101.74-2.64-182.91-10.06-215.6-19.58C5.48 472.42 0 469.27 0 466c0-3.74 7.18-7.33 20.29-10.63 7.65-1.93 17.32-3.76 28.76-5.48.09-.01.19-.02.29-.04 26.2-3.91 61.65-7.21 103.4-9.59C199.87 437.55 255.04 436 314 436c173.42 0 314 13.43 314 30z"
        fill="#f0f0f0"
      />
      <path
        d="M613.733 318.706l-22.927-6.384s-8.981-1.793-3.494-19.332 16.371-12.63 16.371-12.63l20.34 5.908 8.03 2.48-11.299 15.851-.947 10.565z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M658.036 272.364l7.194 28.733-36.858 35.722-3.169.794-8.453-2.375-7.194-28.733 7.287-7.662-7.449-1.952 15.895-15.43 8.294 1.74 6.653-6.605-4.491-1.795-.423-1.69 5.44-4.281 17.274 3.534z"
      />
      <path
        fill={color}
        d="M623.504 312.892l4.761 19.014 21.967-20.767-5.5-19.279-21.228 21.032z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M658.036 272.364l1.009 4.029-36.651 35.654-3.169.793-8.188-2.215-.452-.011-1.029-4.109 7.287-7.662-7.449-1.952 15.895-15.43 8.294 1.74 6.653-6.605-4.491-1.795-.423-1.69 5.44-4.281 17.274 3.534z"
      />
      <ellipse
        cx={744.606}
        cy={351}
        rx={3.049}
        ry={2.069}
        transform="rotate(-14.057 372.461 731.258)"
        fill={color}
      />
      <ellipse
        cx={721.322}
        cy={381.751}
        rx={3.049}
        ry={2.069}
        transform="rotate(-14.057 349.177 762.01)"
        fill={color}
      />
      <path
        d="M598.5 354.5l5-17s-13-31 2-34 16 29 16 29l-6 19z"
        fill="#ffb6b6"
      />
      <circle cx={691.332} cy={281.723} r={39.723} fill="#ffb6b6" />
      <path
        d="M678.48 309.762s-2.336 29.208-8.178 31.545S733.392 360 733.392 360l-17.526-19.861s-3.505-30.377 4.674-37.387z"
        fill="#ffb6b6"
      />
      <path
        d="M622.5 345.5l-16-2s-19 10-19 23-11 34-11 34-8 28 10 30 34-30 34-30z"
        fill="#f0f0f0"
      />
      <path
        d="M613.5 504.5s-35-33-45-31-30 5-30 20 33 50 33 50 25 55 49 57a414.167 414.167 0 0147 7s-11 40-5 51 29 24 31 23 30-27 42-64 20-65 9-67-131-46-131-46z"
        fill="#2f2e41"
      />
      <path
        d="M541.5 490.5s-7-1-6 16 4 78 9 90 6 26 4 31-6 13 1 14 36-3 39-4 6-18 4-18-7-1-5-8 3-7 0-9-11-5-9-7 4-49 4-49z"
        fill="#2f2e41"
      />
      <path
        d="M551.5 638.5s-17-5-19 6c0 0-3 17 10 23a160.654 160.654 0 0124 14s21 8 22-2-4-46-4-46zM664.5 650.5l32-26s-6 32 2 38l3.654 10.684-10.233 8.37S660.5 676.5 664.5 650.5z"
        fill="#2f2e41"
      />
      <path
        d="M709.5 606.5s-21 6-18 27 6.846 43.815 6.846 43.815S699.5 733.5 714.5 737.5s19-4 19-4 17.05-43.905 12-57c-6.114-15.85-14.923-33.649-12-39 2.876-5.265-2-34-24-31z"
        fill="#2f2e41"
      />
      <path
        d="M721.5 330.5s-8 1-21 3-22-8-29-6-65 16-65 16l9 69s-11 80-9 94-24 12-9 29 41 32 94 27 60-4 60-12-12-76-8-82 12-13 8-20-8-11-2-17 9-12 9-15 14-52 14-52-6-24-13-25-13-6-18-6-8 1-11 0z"
        fill="#f0f0f0"
      />
      <path
        d="M634.244 274.584c4.609-.606 9.36-3.368 11.912-5.06 2.903 2.806 20.775 18.983 51.488 23.678 0 0 .069-.608.245-1.638l10.525 1.797 19.467-1.895c-.098.33-.158.512-.158.512s2.784-.75 3.75-7.042q.278-1.809.671-3.597c1.566-7.143 5.364-32.886-16.189-50.09-15.691-12.525-33.777-8.573-45.212-3.793a37.354 37.354 0 00-20.494 20.89 28.854 28.854 0 00-1.856 7.3l-.448 1.272c-3.471.483-10.442-2.431-14.188-1.052-5.12 1.885-7.638 9.613-8.153 11.924s1.891 7.682 8.64 6.794zm66.305 7.265c2.772-7.135 8.004-14.928 17.59-14.54 9.94.403 11.684 8.297 11.333 15.048l-24.732.9z"
        fill="#2f2e41"
      />
      <ellipse
        cx={802.056}
        cy={302.901}
        rx={1.655}
        ry={4.375}
        transform="rotate(-80.315 703.493 324.731)"
        fill="#2f2e41"
      />
      <circle cx={371} cy={26} r={26} fill={color} />
      <path
        d="M328.03 191.243c-.088-.351-8.793-35.529-10.279-72.578-.876-21.814.885-40.016 5.231-54.1 5.493-17.798 15.15-29.075 28.706-33.515l.623 1.9c-29.367 9.62-33.917 51.879-32.562 85.635 1.478 36.846 10.134 71.824 10.22 72.172z"
        fill="#2f2e41"
      />
      <path
        d="M438.424 387.913c-13.819 18.13 2.02 53.438 2.02 53.438s38.243 5.912 52.062-12.218-2.02-53.438-2.02-53.438-38.244-5.913-52.062 12.218zM175.57 417.587c11.442 13.339 40.611 7.087 40.611 7.087s10.62-27.877-.822-41.216-40.61-7.087-40.61-7.087-10.62 27.878.822 41.216z"
        fill="#3f3d56"
      />
      <path
        d="M488.522 465.879c-111.813-60.802-199.93-57.574-254.157-44.158-58.7 14.521-91.37 43.726-91.693 44.02l-1.344-1.481c.326-.297 33.371-29.84 92.557-44.48 34.739-8.594 71.57-10.462 109.478-5.553 47.349 6.133 96.51 22.92 146.115 49.894z"
        fill="#2f2e41"
      />
      <path fill="#2f2e41" d="M314.5 287h2v125.556h-2z" />
      <circle cx={316} cy={323} r={72} fill="#3f3d56" />
      <circle cx={316} cy={202} r={54} fill="#3f3d56" />
      <circle cx={316} cy={112} r={42} fill="#3f3d56" />
    </svg>
  );
};

SvgPhotoSession.propTypes = {
  color: PropTypes.string
};
SvgPhotoSession.defaultProps = {
  color: "primary"
};
const MemoSvgPhotoSession = React.memo(SvgPhotoSession);
export default MemoSvgPhotoSession;
