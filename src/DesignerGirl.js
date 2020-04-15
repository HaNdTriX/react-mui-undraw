import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDesignerGirl = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 458.692 782.517"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#002e4e"
        stroke="#002e4e"
        strokeMiterlimit={10}
        strokeWidth={1.124}
        d="M245.882 401.346l5.01 3.718-56.945 88.037-11.186 5.832 63.121-97.587z"
      />
      <path
        fill="#c5cae9"
        d="M0 381.559l197.236-242.557 20.057 13.816L22.229 398.446 0 381.559z"
      />
      <path
        fill="#1a237e"
        d="M139.157 251.209l21.306 13.165-38.444 45.8-19.398-12.959 36.536-46.006z"
      />
      <path
        fill="#1a237e"
        d="M146.766 280.691l66.906 109.501-26.187 1.601-55.765-95.567 15.046-15.535z"
      />
      <path
        fill="#1a237e"
        d="M61.566 389.235h195.843v9.211H61.566zM72.181 407.476h24.515v318.612H72.181zM277.217 407.476h22.844v318.612h-22.844z"
      />
      <path fill="#536dfe" d="M13.622 396.538h353.299v18.934H13.622z" />
      <ellipse cx={319.537} cy={85.238} rx={47.01} ry={47.886} fill="#ff6584" />
      <path
        d="M349.278 176.017a8.765 8.765 0 00-10.47 2.72c-4.175 5.31-9.872 16.96-7.685 39.815l8.47 88.513 1.35 89.22s12.741 41.135 31.398 40.747-15.452-39.4-15.452-39.4 4.73-70.782 2.786-91.097c-1.812-18.937 16.128-118.765-10.397-130.518z"
        fill="#ffb8b8"
      />
      <path
        d="M326.275 135.52l-10.695 29.527 15.289 4.81 2.147 42.848-37.907-20.799-19.093-21.429-2.382-16.445s14.723-2.6 20.076-35.718zM398.047 382.203s66.882 68.402 49.648 104.47-101.342 162.322-101.342 162.322l-22.5-29.19s22.116-16.378 32.416-54.764 33.614-64.896 40.494-74.332-64.605-75.466-58.29-92.313 59.574-16.193 59.574-16.193z"
        fill="#ffb8b8"
      />
      <path
        d="M398.047 382.203s66.882 68.402 49.648 104.47-101.342 162.322-101.342 162.322l-22.5-29.19s22.116-16.378 32.416-54.764 33.614-64.896 40.494-74.332-64.605-75.466-58.29-92.313 59.574-16.193 59.574-16.193z"
        opacity={0.1}
      />
      <path
        d="M356.023 628.154s6.987 14.072 4.882 19.688-13.142 38.036-13.142 38.036 11.752 46.962 3.226 45.917-39.381-32.727-38.014-44.306l3.933-33.292-9.552 7.64-12.158-19.112 16.945-21.418s18.196-19.796 23.88-19.1 20 25.947 20 25.947z"
        fill="#2f2e41"
      />
      <path
        d="M342.735 398.918l4.487 10.83 18.846 84.541s7.5 9.73 5.16 41.749 37.808 155.882 37.808 155.882l1.357 25.13-24.157-2.961-16.474-31.388s-6.186-33.064-24.252-63.178-18.044-103.533-18.044-103.533l-48.622-113.155 38.26-18.805z"
        fill="#ffb8b8"
      />
      <path
        d="M400.8 676.226s7.275-.577 8.354 2.492 22.831 63.004 22.831 63.004 41.368 40.312 21.133 40.77-54.169-5.171-59.906-17.622-12.382-29.418-12.382-29.418l-2.052 17.37-16.026-10.775s-8.963-58.367 1.497-61.49 36.55-4.331 36.55-4.331zM376.402 345.776s16.934 15.291 15.342 16.564 9.605 4.114 7.5 9.73 9.487 17.316 3.803 16.62-27.736-9.274-52.128 14.168l-4.263-.522.566 7.411s-17.67-21.255-63.325 11.329c0 0-15.117-6.258-13.013-11.874s-24.552-11.82-10.16-48.235 58.956-35.359 58.956-35.359z"
        fill="#2f2e41"
      />
      <path
        d="M284.66 158.32s-7.329-11.177-11.763-10.252-28.677.367-32.544 8.704 14.55 94.818 11.59 107.671-18.677 109.311-5.15 116.843 29.338-28.71 29.338-28.71 42.523-18.283 78.614-6.518 25.012-4.276 25.012-4.276-25.856-25.195-21.923-58.487 5.695-36.013-.95-52.98c0 0-1.186-26.577-.331-33.815s6.144-15.4 2.223-18.817-44.617-12.81-44.617-12.81 20.63 8.402 11.25 14.594-40.749-21.147-40.749-21.147z"
        fill="#3f3d56"
      />
      <ellipse cx={320.827} cy={108.421} rx={34.35} ry={34.99} fill="#ffb8b8" />
      <path
        d="M248.625 152.72a8.77 8.77 0 0110.407 2.96c4.057 5.404 9.495 17.183 6.802 39.98l-10.429 88.297-3.324 89.167s2.147 42.847-16.497 42.03.524-41.051.524-41.051-3.161-70.872-.768-91.137c2.232-18.891-13.493-119.106 13.285-130.246z"
        fill="#ffb8b8"
      />
      <path
        d="M295 0a25.759 25.759 0 0014.826 10.383c10.368 2.828.085 18.699.085 18.699s3.74-5.771-1.654-11.883S294.183 6.909 294.999 0z"
        fill="#ff6584"
      />
      <ellipse
        cx={311.748}
        cy={32.889}
        rx={13.101}
        ry={13.345}
        fill="#ff6584"
      />
      <path
        d="M295.022 44.075c10.68-4.115 28.463-6.202 37.612-4.775l-1.254-9.333c-8.796 4.63-26.498 6.806-37.613 4.775z"
        fill="#3f3d56"
      />
      <path
        d="M315.688 47.416s13.385 22.679 44.51 31.169.254 56.134.254 56.134 11.226-17.325-4.965-35.673-42.249-30.892-39.8-51.63z"
        fill="#ff6584"
      />
      <path
        d="M314.625 46.037s-12.858 31.151-26.975 34.096-13.046 52.167 9.03 59.548c0 0-16.098-28.856-2.338-48.208s22.452-34.65 20.283-45.436z"
        fill="#ff6584"
      />
    </svg>
  );
};

SvgDesignerGirl.propTypes = {
  color: PropTypes.string
};
SvgDesignerGirl.defaultProps = {
  color: "primary"
};
export default SvgDesignerGirl;
