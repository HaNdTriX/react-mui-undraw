import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgProgressData = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 884.706 576.533"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={763.628} cy={564.533} rx={121.077} ry={12} fill="#e6e6e6" />
      <ellipse cx={74.99} cy={559} rx={43.363} ry={6} fill="#e6e6e6" />
      <path fill="#e6e6e6" d="M0 0h567.571v284.751H0z" />
      <path fill="#fff" d="M26.062 23.166H541.51v238.419H26.062z" />
      <path
        fill={color}
        d="M26.744 262.267l-1.365-1.365 69.216-69.215 21.719 21.718 38.127-38.128 46.815 46.815 79.634-79.634 36.197 36.198 79.151-79.152 44.402 44.402 81.364-81.364 1.365 1.365-82.729 82.729-44.402-44.402-79.151 79.151-36.197-36.197-79.634 79.634-46.815-46.815-38.127 38.128-21.719-21.719-67.851 67.851z"
      />
      <circle cx={396.721} cy={102.317} r={11.583} fill={color} />
      <circle cx={155.406} cy={177.607} r={11.583} fill={color} />
      <circle cx={317.57} cy={178.573} r={11.583} fill={color} />
      <circle cx={204.635} cy={222.009} r={11.583} fill={color} />
      <circle cx={278.959} cy={145.754} r={11.583} fill={color} />
      <circle cx={440.157} cy={145.754} r={11.583} fill={color} />
      <path
        d="M61.367 529.507c4.7 17.374 20.798 28.134 20.798 28.134s8.479-17.408 3.779-34.782-20.799-28.134-20.799-28.134-8.478 17.408-3.778 34.782z"
        fill="#e6e6e6"
      />
      <path
        d="M68.273 525.773c12.897 12.555 14.472 31.854 14.472 31.854s-19.334-1.056-32.231-13.61-14.472-31.854-14.472-31.854 19.334 1.056 32.231 13.61z"
        fill={color}
      />
      <path
        d="M722.985 134.196l7.387 73.052h60.795l-2.923-111.039c0-23.9-16.522-44.805-40.421-44.805s-39.448 19.931-39.448 43.831l-3.896 112.013h9.912z"
        fill="#2f2e41"
      />
      <path
        d="M759.321 517.28s-2.624 16.618-6.997 19.242 22.741 8.747 22.741 8.747l4.374-26.24z"
        fill="#fbbebe"
      />
      <path
        d="M791.684 327.478l9.621 11.37-4.373 39.36-3.499 77.845s6.998 67.35 0 69.099-38.485.874-37.61-3.499 1.75-7.872 3.498-13.994-1.749-27.99-1.749-27.99l4.373-24.49-15.744-105.835zM760.196 533.899s-9.621-1.75-10.496 0-17.493 20.117-20.117 20.117-21.867 17.493-1.75 18.368 53.355-14.87 53.355-14.87-4.891-22.257-4.632-21.187-16.36 1.945-16.36-2.428z"
        fill="#2f2e41"
      />
      <path
        d="M749.7 493.664s24.49 27.114 25.365 29.738 13.995 0 13.995 0l5.248-17.493-4.373-6.122-24.49-20.118z"
        fill="#fbbebe"
      />
      <path
        d="M784.687 513.781l-12.683 11.938s16.181 24.798 16.181 27.422.875 24.49 9.622 20.992 9.621-38.485 9.621-38.485-.875-35.861-6.123-38.485-16.75-1.795-16.75-1.795 7.13 17.539.132 18.413zM712.09 249.633s-4.374 13.994-5.248 17.493-6.123 13.12-6.123 27.99 1.75 32.362 0 34.111-29.739 99.712-17.493 110.208 52.48 45.482 55.104 49.856 3.498 14.869 8.746 13.12 25.365-19.243 26.24-22.742-11.37-9.621-11.37-9.621-24.491-35.861-30.614-34.987-5.248-4.373-4.373-6.997 2.624-4.373 0-4.373-.875-6.998 0-10.496 20.992-50.73 20.992-50.73l53.354-23.617s-2.624-63.85-21.866-81.343l-4.374-10.496s-48.98-3.499-62.975 2.624z"
        fill="#2f2e41"
      />
      <path
        d="M733.956 111.436s4.374 30.613-6.122 32.362-19.243.875-19.243 1.75 26.24 27.989 26.24 27.989l24.49-1.75 21.867-23.615s-20.117-3.5-20.117-15.744-.875-20.992-.875-20.992z"
        fill="#ffb8b8"
      />
      <circle cx={747.514} cy={97.004} r={27.115} fill="#ffb8b8" />
      <path
        d="M731.69 141.572s-42.342 3.976-44.966 15.346 17.494 82.219 20.118 88.341 1.749 10.496 1.749 10.496a34.607 34.607 0 0127.99-6.122c16.618 3.498 40.234 1.749 40.234 1.749s7.872-32.363 9.621-35.861 8.747-22.742 8.747-27.99 10.496-27.114 10.496-27.114-5.248-15.744-24.49-14.87c0 0-8.394-3.756-10.758-1.003s-15.483 14.998-32.101 9.75-6.64-12.722-6.64-12.722z"
        fill="#e6e6e6"
      />
      <path
        d="M789.06 156.044l16.619 4.373s12.245 44.608 13.12 45.482 1.749 6.123 1.749 6.123 0 .875 1.75 3.499 4.373.874 2.623 4.373-4.373 1.75-2.624 5.248.875 13.12.875 13.12-4.373-16.619-20.117-12.245l-10.496-47.232z"
        fill="#e6e6e6"
      />
      <path
        fill={color}
        d="M794.553 164.416l-.06.2-28.81 90.76-18.91-4.2-20.45-4.539 28.87-93.591 39.36 11.37z"
      />
      <path
        d="M703.646 156.044l-16.619 4.373s-12.245 44.608-13.12 45.482-1.75 6.123-1.75 6.123 0 .875-1.749 3.499-4.373.874-2.624 4.373 4.374 1.75 2.624 5.248-.874 13.12-.874 13.12 4.373-16.619 20.117-12.245l10.496-47.232z"
        fill="#e6e6e6"
      />
      <path
        d="M674.782 223.393l-5.464 9.131s-2.408 17.109 9.837 17.109 29.739-16.619 29.739-16.619 8.746-3.499 13.994-2.624 34.112 0 21.867-14.87-33.237 0-33.237 0l-21.867 10.497-11.37-6.123z"
        fill="#ffb8b8"
      />
      <path
        d="M682.216 211.585l8.747 13.994s-20.117 2.624-21.867 6.998 7.872-22.742 7.872-22.742z"
        fill="#e6e6e6"
      />
      <path
        d="M724.933 87.443c17.614-9.496 24.85-9.094 46.753 0l5.844-14.238a10.124 10.124 0 00-10.112-10.112h-39.191a10.124 10.124 0 00-10.112 10.112z"
        fill="#2f2e41"
      />
      <path
        opacity={0.2}
        d="M794.493 164.616l-28.81 90.76-18.91-4.2 28.42-92.13 19.3 5.57z"
      />
      <path
        fill={color}
        d="M781.188 159.044l-28.864 93.589 39.36 8.746 28.864-90.965-39.36-11.37z"
      />
      <path
        d="M817.924 223.393l5.464 9.131s2.408 17.109-9.837 17.109-29.739-16.619-29.739-16.619-8.747-3.499-13.995-2.624-34.111 0-21.866-14.87 33.237 0 33.237 0l21.867 10.497 11.37-6.123z"
        fill="#ffb8b8"
      />
      <path
        d="M810.49 211.585l-8.747 13.994s20.117 2.624 21.866 6.998-7.872-22.742-7.872-22.742z"
        fill="#e6e6e6"
      />
    </svg>
  );
};

SvgProgressData.propTypes = {
  color: PropTypes.string
};
SvgProgressData.defaultProps = {
  color: "primary"
};
export default SvgProgressData;
