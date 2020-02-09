import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlineResume = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 944 769.034"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M931.953 417.732L416 564.034l470.74-265.245a472.653 472.653 0 00-80.016-107.118L350 443.034l382.358-312.217a468.247 468.247 0 00-181.57-71.379L339 413.034 479.271 53.092c-2.088-.027-4.176-.058-6.271-.058-260.126 0-471 210.873-471 471a468.802 468.802 0 0068.05 244h805.9a472.49 472.49 0 0056.003-350.302z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M132 396.034h682v372H132z" />
      <path fill="#2f2e41" d="M252 439.034h427v2H252z" />
      <path fill={color} d="M211 538.662h155.784v17.703H211z" />
      <path
        fill="#f2f2f2"
        d="M211 568.757h262v10.622H211zM211 591.77h247.838v10.622H211zM211 614.784h180.568v10.622H211z"
      />
      <path
        d="M846 733.963c0-32.167-16.322-58.243-36.457-58.243-12.655 0-23.8 10.305-30.337 25.945a18.287 18.287 0 00-6.967-1.398c-6.094 0-11.729 3.123-16.324 8.408-5.893-19.501-18.387-32.955-32.85-32.955-13.522 0-25.316 11.77-31.61 29.24a19.915 19.915 0 00-12.477-4.693c-15.452 0-27.978 20.012-27.978 44.698a65.145 65.145 0 004.408 24.069h183.24c4.613-9.757 7.352-21.902 7.352-35.071z"
        fill={color}
      />
      <circle cx={200.804} cy={83.678} r={47.01} fill="#ff6584" />
      <path
        d="M171.063 172.796a8.868 8.868 0 0110.47 2.67c4.175 5.213 9.873 16.65 7.685 39.086l-8.47 86.893-1.349 87.588s-12.742 40.381-31.399 40 15.452-38.679 15.452-38.679-4.73-69.486-2.786-89.428c1.812-18.592-16.128-116.593 10.397-128.13z"
        fill="#ffb8b8"
      />
      <path
        d="M194.066 133.04l10.695 28.986-15.289 4.723-2.146 42.063 37.906-20.418 19.093-21.037 2.382-16.144s-14.723-2.553-20.076-35.065zM122.294 375.208s-66.882 67.15-49.648 102.557 101.342 159.352 101.342 159.352l22.5-28.655s-22.116-16.079-32.416-53.762-33.614-63.709-40.494-72.972 64.605-74.084 58.29-90.623-59.574-15.897-59.574-15.897z"
        fill="#ffb8b8"
      />
      <path
        d="M122.294 375.208s-66.882 67.15-49.648 102.557 101.342 159.352 101.342 159.352l22.5-28.655s-22.116-16.079-32.416-53.762-33.614-63.709-40.494-72.972 64.605-74.084 58.29-90.623-59.574-15.897-59.574-15.897z"
        opacity={0.1}
      />
      <path
        d="M164.318 616.657s-6.987 13.815-4.882 19.328 13.142 37.34 13.142 37.34-11.752 46.103-3.226 45.077 39.381-32.128 38.014-43.495l-3.933-32.683 9.552 7.5 12.158-18.761-16.945-21.027s-18.195-19.434-23.88-18.75-20 25.471-20 25.471z"
        fill="#2f2e41"
      />
      <path
        d="M177.606 391.618l-4.487 10.63-18.846 82.995s-7.5 9.552-5.16 40.984-37.808 153.03-37.808 153.03l-1.357 24.67 24.157-2.907 16.474-30.814s6.186-32.458 24.252-62.021 18.044-101.638 18.044-101.638l48.622-111.084-38.26-18.462z"
        fill="#ffb8b8"
      />
      <path
        d="M119.542 663.85s-7.276-.566-8.355 2.447-22.831 61.85-22.831 61.85-41.368 39.575-21.133 40.023 54.169-5.075 59.906-17.298 12.382-28.88 12.382-28.88l2.052 17.052 16.026-10.577s8.963-57.3-1.497-60.365-36.55-4.252-36.55-4.252zM143.94 339.448s-16.935 15.011-15.343 16.261-9.605 4.039-7.5 9.552-9.487 16.998-3.803 16.315 27.736-9.104 52.128 13.91l4.263-.513-.566 7.275s17.67-20.866 63.325 11.122c0 0 15.118-6.144 13.013-11.657s24.552-11.603 10.16-47.352-58.956-34.712-58.956-34.712z"
        fill="#2f2e41"
      />
      <path
        d="M235.681 155.423s7.33-10.973 11.763-10.065 28.677.36 32.544 8.545-14.55 93.082-11.59 105.7 18.677 107.311 5.151 114.705-29.339-28.184-29.339-28.184-42.523-17.949-78.614-6.399-25.011-4.198-25.011-4.198 25.855-24.734 21.923-57.417-5.696-35.354.95-52.01c0 0 1.185-26.091.33-33.196s-6.143-15.118-2.222-18.473 44.616-12.576 44.616-12.576-20.63 8.249-11.25 14.328 40.749-20.76 40.749-20.76z"
        fill="#3f3d56"
      />
      <circle cx={199.514} cy={106.437} r={34.35} fill="#ffb8b8" />
      <path
        d="M271.716 149.925a8.868 8.868 0 00-10.407 2.906c-4.057 5.305-9.495 16.868-6.802 39.249l10.429 86.68 3.324 87.535s-2.147 42.063 16.497 41.262-.524-40.3-.524-40.3 3.161-69.576.768-89.47c-2.232-18.545 13.493-116.926-13.285-127.862z"
        fill="#ffb8b8"
      />
      <path
        d="M225.342 0a25.697 25.697 0 01-14.827 10.193c-10.368 2.776-.085 18.357-.085 18.357s-3.74-5.666 1.655-11.666S226.158 6.782 225.342 0z"
        fill="#ff6584"
      />
      <circle cx={208.593} cy={32.287} r={13.101} fill="#ff6584" />
      <path
        d="M225.32 43.268c-10.68-4.04-28.464-6.088-37.613-4.688l1.254-9.162c8.796 4.546 26.498 6.682 37.613 4.688z"
        fill="#3f3d56"
      />
      <path
        d="M204.653 46.548s-13.385 22.264-44.51 30.598-.254 55.107-.254 55.107-11.226-17.008 4.966-35.02 42.248-30.326 39.798-50.685z"
        fill="#ff6584"
      />
      <path
        d="M205.716 45.195s12.858 30.58 26.975 33.472 13.047 51.212-9.03 58.458c0 0 16.098-28.328 2.338-47.326s-22.452-34.016-20.283-44.604z"
        fill="#ff6584"
      />
      <path fill="#2f2e41" d="M0 767.034h931v2H0z" />
      <path fill={color} d="M748 408.034h45v17h-45z" />
      <circle cx={700.995} cy={572.399} r={57.005} fill={color} opacity={0.4} />
      <circle cx={595.493} cy={599.626} r={39.989} fill={color} opacity={0.4} />
    </svg>
  );
};

SvgOnlineResume.propTypes = {
  color: PropTypes.string
};
SvgOnlineResume.defaultProps = {
  color: "primary"
};
const MemoSvgOnlineResume = React.memo(SvgOnlineResume);
export default MemoSvgOnlineResume;
