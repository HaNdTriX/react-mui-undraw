import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFileManager = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 998.282 697.551"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M149.668 24h103v120h-103zM427.668 94h103v120h-103zM706.668 24h103v120h-103z"
      />
      <path
        fill="#3f3d56"
        d="M228.621 430.337h270.99v67.57h-270.99zM784.198 696.3h-238.76l67.05-116.13 52.33-90.64 119.38 206.77zM136.938 515.85h396.84v180.5h-396.84z"
      />
      <circle cx={664.4} cy={442.315} r={47.055} fill={color} />
      <path fill="#3f3d56" d="M1.564 695.551h860.79v2H1.564z" />
      <path
        opacity={0.1}
        d="M499.608 434.87v63.04h-63.81l39-67.57h22.2l2.61 4.53zM533.778 515.85v180.5h-212.55l.2-.35 104.01-180.15h108.34zM679.538 696.3h-134.1l67.05-116.13 3 5.19 64.05 110.94z"
      />
      <path
        fill={color}
        d="M664.628 696.45h-329.46l.26-.45 108.05-187.15 56.42-97.73 100.59 174.24 64.05 110.94.09.15z"
      />
      <circle cx={499.4} cy={393.315} r={20.268} fill="#3f3d56" />
      <path
        d="M443.438 399.766A368.021 368.021 0 01322.714 379.5c-52.052-17.997-94.694-42.82-126.742-73.782-60.621-58.566-110.321-67.392-141.333-64.486-33.57 3.148-53.111 20.338-53.305 20.512L0 260.255c.197-.176 20.14-17.757 54.323-21 20.046-1.901 41.008 1.41 62.307 9.847 26.56 10.52 53.723 29.085 80.733 55.179 31.836 30.757 74.23 55.429 126.006 73.33 95.047 32.86 202.17 24.905 293.899-21.83 30.37-15.474 60.388-26.037 89.217-31.394 36.354-6.757 70.83-5.188 102.48 4.658 69.549 21.638 117.054 20.49 144.658 15.72 29.784-5.148 43.298-15.451 43.43-15.555l1.23 1.58c-.56.434-14.047 10.713-44.32 15.945-27.822 4.81-75.667 5.975-145.592-15.78-70.8-22.025-142.509 2.312-190.195 26.608a383.88 383.88 0 01-145.637 41.084q-14.603 1.118-29.101 1.119z"
        fill="#3f3d56"
      />
      <path
        d="M217.649 323.348l-1.431-1.397a73.107 73.107 0 0014.662-25.65c4.866-14.644 7.243-37.77-9.068-64.784-16.688-27.64-17.439-50.09-15.13-64.055 2.511-15.196 8.92-23.714 9.192-24.07l1.589 1.215c-.064.083-6.417 8.556-8.828 23.3-2.225 13.61-1.449 35.516 14.889 62.576 16.727 27.705 14.25 51.473 9.226 66.533-5.444 16.317-14.709 25.93-15.101 26.332z"
        fill="#3f3d56"
      />
      <path
        d="M292.668 145h-144V1h144zm-142-2h140V3h-140zM496.65 394.348l-1.432-1.397a73.122 73.122 0 0014.662-25.65c4.866-14.644 7.242-37.77-9.068-64.784-16.688-27.64-17.439-50.09-15.13-64.055 2.511-15.196 8.92-23.714 9.192-24.07l1.589 1.215c-.064.083-6.417 8.556-8.828 23.3-2.226 13.61-1.45 35.516 14.89 62.576 16.727 27.705 14.248 51.473 9.224 66.534-5.443 16.317-14.708 25.93-15.1 26.33z"
        fill="#3f3d56"
      />
      <path
        d="M571.668 216h-144V72h144zm-142-2h140V74h-140zM774.65 322.348l-1.432-1.397a73.115 73.115 0 0014.662-25.65c4.866-14.644 7.242-37.77-9.068-64.784-16.688-27.64-17.439-50.09-15.13-64.055 2.511-15.196 8.92-23.714 9.192-24.07l1.589 1.215c-.064.083-6.417 8.556-8.828 23.3-2.226 13.61-1.45 35.516 14.89 62.576 16.727 27.705 14.248 51.473 9.224 66.533-5.443 16.317-14.708 25.93-15.1 26.332z"
        fill="#3f3d56"
      />
      <path
        d="M849.668 144h-144V0h144zm-142-2h140V2h-140zM178.668 43h88v2h-88zM178.668 65h88v2h-88zM178.668 87h88v2h-88zM455.668 111h88v2h-88zM455.668 133h88v2h-88zM455.668 155h88v2h-88z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M733.668 43h88v2h-88zM733.668 65h88v2h-88zM733.668 87h88v2h-88z"
      />
      <path
        d="M821.42 664.152c5.391 19.928 23.856 32.27 23.856 32.27s9.725-19.967 4.334-39.896-23.856-32.27-23.856-32.27-9.725 19.968-4.334 39.896z"
        fill={color}
      />
      <path
        d="M829.342 659.87c14.793 14.4 16.6 36.536 16.6 36.536s-22.178-1.21-36.97-15.61-16.6-36.538-16.6-36.538 22.177 1.211 36.97 15.611z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M191.668 558h103v120h-103z" />
      <path d="M334.668 678h-144V534h144zm-142-2h140V536h-140z" fill="#fff" />
      <path
        fill={color}
        d="M218.668 577h88v2h-88zM218.668 599h88v2h-88zM218.668 621h88v2h-88z"
      />
      <path
        d="M226.538 217.186c-24.032 0-43.513 21.621-43.513 48.291v33.885h10.42l6.034-12.555-1.508 12.555h66.985l5.485-11.413-1.372 11.413h7.542v-26.606c0-30.69-22.418-55.57-50.073-55.57zM176.68 438.572l-26.718 11.355-92.842 75.475a27.326 27.326 0 00-6.011 14.695c-.668 8.683-28.721 54.102-18.702 60.113s46.087 24.045 48.09 12.023 12.691-63.453 12.691-63.453l89.503-80.152z"
        fill="#2f2e41"
      />
      <path
        d="M71.815 602.214L60.46 635.61s12.023 12.69 6.011 23.378v36.736h-9.35l-2.672-19.37s-10.651 19.125-16.03 19.37c-11.278.513-33.61 4.524-34.278-1.487s16.911-11.872 16.911-11.872l18.702-51.43 8.015-31.393zM246.144 429.889s6.011 58.777-11.355 69.464-94.178 44.751-94.178 44.751 32.729 30.725 26.05 38.072-36.737 27.385-40.744 23.378-48.759-52.099-43.416-67.461 79.484-65.457 79.484-65.457l8.683-31.393 2.671-25.38 28.053-18.035z"
        fill="#2f2e41"
      />
      <circle cx={215.543} cy={265.195} r={27.845} fill="#ffb9b9" />
      <path
        d="M237.127 276.6s-1.336 25.38 19.37 33.396-51.43 60.113-51.43 60.113V312s9.35-10.018 0-25.38zM281.544 395.824l-5.344 26.05-16.03 89.502s13.359 38.072-4.675 37.404-9.351-41.412-9.351-41.412l9.35-74.14v-28.72zM166.66 383.134l-6.011 23.377-27.385 66.125s-18.702 31.393-3.34 30.725 15.363-30.725 15.363-30.725l31.392-53.434v-30.057z"
        fill="#ffb9b9"
      />
      <path
        d="M161.985 578.169l22.041 20.705s15.363-3.34 21.374 14.695 10.019 29.389 10.019 29.389l-8.015 4.675-10.019-14.026s-6.011 25.38-12.023 27.385-36.068 15.362-33.396 0l14.694-21.374s2.004-24.046-4.007-26.05-22.042-22.04-22.042-22.04z"
        fill="#2f2e41"
      />
      <path
        d="M247.202 450.594s-62.785-22.71-66.792-20.705a30.12 30.12 0 01-9.408 2.441l.057-9.12s20.706-7.348 32.06-2.672 46.087 25.381 46.087 25.381z"
        fill="#3f3d56"
      />
      <path
        d="M209.074 356.75s18.034-20.705 23.377-33.396a32.79 32.79 0 0117.335-17.046s40.107 9.031 39.439 25.061-25.381 40.744-25.381 40.744 3.34 88.834-14.695 87.498a38.682 38.682 0 01-8.015-16.03c-2.004-9.35-64.12-19.37-64.12-19.37s-5.344 9.351-6.012 5.344 5.343-102.193 5.343-102.193l31.852-21.054z"
        fill="#d0cde1"
      />
      <path
        d="M284.08 324.917l.447.251a9.215 9.215 0 014.705 8.037l-.006 49.57a9.288 9.288 0 003.303 7.068c2.573 2.188 4.96 5.342.036 6.983-8.016 2.672-39.408 16.03-40.076 11.355s-2.004-10.019 0-10.019c1.569 0 10.915-47.896 18.425-68.374a9.216 9.216 0 0113.166-4.871zM185.362 325.024l-9.35 2.672-10.688 46.087s-12.69 2.672-8.683 7.347 20.706 16.698 20.706 16.698z"
        fill="#d0cde1"
      />
      <path
        d="M238.908 230.489a22.82 22.82 0 00-18.006-9.189h-.854c-16.472 0-29.825 14.905-29.825 33.291h5.52l.891-6.784 1.307 6.784h32.734l2.742-5.74-.685 5.74h6.44q4.507 22.386-12.954 44.771h10.97l5.485-11.48-1.371 11.48h20.911l4.114-26.403c0-19.774-11.49-36.542-27.418-42.47z"
        fill="#2f2e41"
      />
      <path opacity={0.1} d="M311.141 430.337h104v33.9h-104z" />
      <path fill={color} d="M317.141 401.237h94v58h-94z" />
    </svg>
  );
};

SvgFileManager.propTypes = {
  color: PropTypes.string
};
SvgFileManager.defaultProps = {
  color: "primary"
};
const MemoSvgFileManager = React.memo(SvgFileManager);
export default MemoSvgFileManager;
