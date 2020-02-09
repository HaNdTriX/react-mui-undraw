import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCoolness = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 974.683 719.807"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M497.543 13.447L234.44 155.957a66.93 66.93 0 11-117.65 63.727l-89.71 48.592L259.457 697.29l470.463-254.83z"
        fill="#f2f2f2"
      />
      <path
        fill={color}
        opacity={0.2}
        d="M182.3 376.321l48.305 12.905-12.904 48.306-48.306-12.904z"
      />
      <path
        d="M297.949 583.616c-38.614 59.215-28.034 134.53-28.034 134.53s73.185-20.694 111.798-79.909 28.033-134.53 28.033-134.53-73.184 20.694-111.797 79.909z"
        fill="#3f3d56"
      />
      <path
        d="M269.71 717.456s-.94-.15-2.67-.5c-1.38-.28-3.28-.68-5.6-1.23-20.74-4.89-75.88-21.42-111.93-64.88-45.12-54.42-43.22-130.45-43.22-130.45s68.99 11.21 114.45 60.08q2.955 3.15 5.75 6.53c39.26 47.35 42.92 111.06 43.21 126.81.04 2.36.01 3.64.01 3.64z"
        fill={color}
      />
      <path
        d="M241.882 583.616c38.614 59.215 28.033 134.53 28.033 134.53s-73.184-20.694-111.797-79.909-28.033-134.53-28.033-134.53 73.184 20.694 111.797 79.909z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M269.7 713.816a219.36 219.36 0 01-2.66 3.14c-1.64 1.87-2.57 2.85-2.57 2.85s-1.13-1.42-3.03-4.08c-10.43-14.54-43.98-66.24-41.39-125.96q.21-4.695.69-9.29 2.955 3.15 5.75 6.53c39.26 47.35 42.92 111.06 43.21 126.81z"
        opacity={0.1}
      />
      <path
        d="M326.953 594.085c-3.052 70.627-55.48 125.722-55.48 125.722s-47.478-59.413-44.426-130.04 55.48-125.721 55.48-125.721 47.478 59.413 44.426 130.04z"
        fill={color}
      />
      <circle cx={33.458} cy={610.656} r={6.535} fill="#ff6584" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M163 717.926h273M0 717.926h129"
      />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M65.477 719.128v-74.411"
      />
      <circle cx={65.477} cy={644.717} r={10.523} fill="#3f3d56" />
      <path d="M65.477 690.578s-1.503-32.332-32.32-28.574" fill="#3f3d56" />
      <circle cx={276.75} cy={427.314} r={20.289} fill="#3f3d56" />
      <circle
        cx={213.117}
        cy={427.314}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={340.383}
        cy={427.314}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M271.474 717.807L283 466.926"
      />
      <circle cx={914.25} cy={271.756} r={20.289} fill="#3f3d56" />
      <circle
        cx={494.617}
        cy={15.756}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={326.883}
        cy={107.756}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={654.988} cy={129.132} r={47.763} fill="#ff6584" />
      <path
        fill="#fbbebe"
        d="M764.924 551.174l25.529 102.938 25.528-4.118-25.528-117.76-25.529 18.94z"
      />
      <path
        d="M799.511 647.524s-14.538 4.915-12.622 8.222 1.917 23.894-4.671 31.305-23.058 30.47-4.118 31.293 37.881-11.529 37.881-11.529v-21.41l3.294 19.763h3.294v-22.234s8.235-14 3.294-22.234-8.161-15.412-14.374-14.706-11.978 1.53-11.978 1.53z"
        fill="#2f2e41"
      />
      <path
        fill="#fbbebe"
        d="M664.458 638.465L660.34 660.7h28.823v-22.235h-24.705z"
      />
      <path
        d="M666.928 655.759s-8.235-.824-10.705 10.705-24.705 35.999-32.94 38.47-8.235 10.705 2.47 12.352 37.881 2.47 44.47-6.588 15.646-23.647 15.646-23.647l-4.118 31.058h7.412s6.588-30.234 13.176-37.646-13.176-24.704-16.47-24.704z"
        fill="#2f2e41"
      />
      <path
        d="M626.577 301.655s-5.765 15.646-15.647 18.117-83.173 19.764-83.173 19.764-64.233 1.647-44.469 15.646 51.88 0 51.88 0 93.88-11.529 101.29-23.881a166.46 166.46 0 0012.353-26.352z"
        fill="#fbbebe"
      />
      <path
        d="M657.87 232.48s-46.94 76.586-41.175 78.233 59.292 18.94 61.762 12.353 2.47-37.058 2.47-37.058z"
        fill="#2f2e41"
      />
      <path
        d="M657.87 232.48s-46.94 76.586-41.175 78.233 59.292 18.94 61.762 12.353 2.47-37.058 2.47-37.058z"
        opacity={0.1}
      />
      <path
        d="M779.747 214.364l106.232 54.35s60.115 15.647 46.939 28-55.998-10.706-55.998-10.706l-117.76-53.527zM643.87 171.542s20.588 31.293 18.94 38.705c0 0 1.648 4.94-.823 8.235s-1.647 23.057-1.647 23.057l8.235 11.53 10.706-35.41 4.94-37.882s-11.116-15.235-9.47-22.646-30.88 14.411-30.88 14.411z"
        fill="#fbbebe"
      />
      <path
        d="M708.927 349.418S662.81 472.942 662.81 527.293s-17.294 116.113-4.118 121.878 79.88 6.588 81.527 0-8.235-274.225-13.176-284.93-18.117-14.823-18.117-14.823z"
        fill="#2f2e41"
      />
      <path
        d="M708.927 349.418S662.81 472.942 662.81 527.293s-17.294 116.113-4.118 121.878 79.88 6.588 81.527 0-8.235-274.225-13.176-284.93-18.117-14.823-18.117-14.823z"
        opacity={0.1}
      />
      <circle cx={654.576} cy={146.014} r={30.469} fill="#fbbebe" />
      <path
        d="M663.634 238.245l-2.205-18.584s-6.853 9.526-6.853 16.937-4.118 33.764 13.176 50.234 20.587 19.764 21.41 23.058 4.942 3.294 4.942 3.294l23.881 96.349s7.412 256.107 18.94 259.401 46.94 0 49.41-4.117-4.117-113.643-4.117-113.643 18.117 97.173 24.705 97.173 10.705-14 9.058-14.823-11.529-64.233-15.646-83.997-2.47-186.933-2.47-186.933 13.175-21.411-32.117-63.41c0 0-28.822-83.996-30.47-83.996s-33.763-45.293-33.763-45.293-18.117 0-21.41 10.706-16.47 57.644-16.47 57.644z"
        fill="#2f2e41"
      />
      <path
        d="M691.633 176.483l9.882-6.588s41.175 24.705 69.998 26.352 27.998 18.117 16.47 29.646-56.822 51.057-58.469 41.175-37.88-90.585-37.88-90.585z"
        fill="#2f2e41"
      />
      <ellipse
        cx={654.988}
        cy={115.956}
        rx={32.94}
        ry={19.764}
        fill="#ff6584"
      />
      <circle cx={658.282} cy={81.369} r={19.764} fill="#ff6584" />
      <path
        d="M631.93 70.664a19.766 19.766 0 0117.705-19.657 19.985 19.985 0 00-2.059-.107 19.764 19.764 0 100 39.528 19.982 19.982 0 002.059-.107 19.766 19.766 0 01-17.705-19.657z"
        fill="#ff6584"
      />
      <circle cx={172.564} cy={189.569} r={54.315} fill={color} />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M495.5 718.368h392"
      />
      <path
        d="M962.493 173.949l-47.478 47.478-19.956-19.955a6.821 6.821 0 00-9.647 0l-.717-1.073c-2.664 2.664-1.947 8.056.717 10.72l25.892 25.892a5.205 5.205 0 007.359.001l53.472-53.416c2.666-2.663 3.633-7.546.968-10.21-2.663-2.663-7.947-2.1-10.61.563z"
        fill={color}
      />
      <path
        d="M962.493 173.949l-47.478 47.478-19.956-19.955a6.821 6.821 0 00-9.647 0l-.717-1.073c-2.664 2.664-1.947 8.056.717 10.72l25.892 25.892a5.205 5.205 0 007.359.001l53.472-53.416c2.666-2.663 3.633-7.546.968-10.21-2.663-2.663-7.947-2.1-10.61.563z"
        opacity={0.1}
      />
      <path
        d="M962.493 171.844l-47.478 47.478-19.956-19.955a6.822 6.822 0 00-9.647 0 6.822 6.822 0 000 9.647l25.892 25.892a5.205 5.205 0 007.36.002l53.471-53.417a6.82 6.82 0 00.003-9.647 6.82 6.82 0 00-9.645 0z"
        fill={color}
      />
    </svg>
  );
};

SvgCoolness.propTypes = {
  color: PropTypes.string
};
SvgCoolness.defaultProps = {
  color: "primary"
};
const MemoSvgCoolness = React.memo(SvgCoolness);
export default MemoSvgCoolness;
