import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWishlist = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 969.794 852.859"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M777.452 504.698c-70.91 59.16-115.244 119.743-150.122 173.385-62.88 96.678-95.078 170.84-196.898 173.635C321.765 854.7 184.276 791.79 108.576 708.9 50.798 645.657 29 570.798 83.41 504.698c125.717-152.73 155.37-347.02 347.02-347.02s494.193 224.253 347.021 347.02z"
        fill="#f2f2f2"
      />
      <circle cx={606.173} cy={293.692} r={56.433} fill="#ff6584" />
      <path
        d="M259.077 471.628c32.904 94.676-11.89 147.294-81.32 171.424S40.558 653.685 7.654 559.01 58.6 300.2 58.6 300.2s167.572 76.752 200.476 171.427z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M168.145 630.161l-26.25-79.682 19.513-116.648-23.631 104.148-11.804-35.829 12.28-83.754-15.403 74.273-21.229-64.439 19.921-70.205-23.259 60.072-40.185-117.721 49.971 156.963-1.894-6.534-61.592-47.566 65.228 60.108 21.125 72.865-.771-1.861-68.856-48.652 71.047 55.412 2.642 9.112-.037.164.294.721 53.597 184.866 12.698-4.414-31.069-94.31 21.316-87.315-23.652 80.226zM421.981 655.128l1.362-83.884 56.726-103.777-56.512 90.618.613-37.718 39.095-75.081-38.933 65.1 1.102-67.837 41.864-59.774-41.691 49.107.689-124.389-4.327 164.668.355-6.793-42.563-65.15 41.881 78.19-3.966 75.763-.118-2.011-49.068-68.561 48.919 75.665-.496 9.474-.089.143.041.778-10.062 192.215h13.444l1.612-99.283 48.8-75.479-48.678 68.016z"
      />
      <path
        d="M627.33 679.122c-62.88 96.678-95.078 170.84-196.898 173.635-108.667 2.982-246.156-59.928-321.856-142.818 59.46-36.323 163.691-73.29 286.53-73.29 87.244 0 168.929 18.65 232.224 42.473z"
        fill="#3f3d56"
      />
      <path
        d="M291.357 291.951s11.28 8.067 16.475-7.518 3.117-16.624 3.117-16.624H298.48z"
        fill={color}
      />
      <path
        d="M291.357 291.951s11.28 8.067 16.475-7.518 3.117-16.624 3.117-16.624H298.48z"
        opacity={0.1}
      />
      <circle cx={321.691} cy={80.809} r={56.893} fill="#2f2e41" />
      <path
        fill={color}
        d="M273.105 250.734l-2.518 44.81 35.747 1.007-6.041-68.977-21.65-1.007-5.538 24.167z"
      />
      <path
        opacity={0.1}
        d="M273.105 250.734l-2.518 44.81 35.747 1.007-6.041-68.977-21.65-1.007-5.538 24.167z"
      />
      <path
        d="M264.042 402.785l28.195 110.263s2.517 62.935 19.132 95.662 14.098 41.789 14.098 41.789l14.6-5.539s-6.041-71.494-6.041-80.053-6.042-35.748-6.042-35.748 5.538-32.726-4.028-63.942 4.028-58.907 4.028-58.907zM336.543 415.372s18.63 70.488 16.615 80.054 15.105 47.327 15.105 47.327 7.048 53.37 9.062 60.418 16.112 55.887 16.112 55.887l19.636-4.028s-4.532-121.34-14.601-151.548l-3.525-93.144z"
        fill="#a0616a"
      />
      <path
        d="M325.467 633.884s-6.042-5.035-6.042-3.525 3.02 19.133 3.02 19.133-2.517 10.07-3.02 14.6c0 0-12.587 7.553-13.09 17.12s-2.015 16.614 0 17.117 34.236 4.028 34.74-1.007a57.816 57.816 0 000-10.07h2.014v1.008s5.034-1.51 5.538-3.021 0-19.132 0-19.132a63.75 63.75 0 00-2.518-16.112l-1.51-23.16s-14.601 4.028-14.601 6.042-4.531 1.007-4.531 1.007zM406.024 644.457s0-3.021-8.56 0-12.586 6.042-12.083 8.56 5.035 20.138 5.035 20.138-4.028 19.133-1.007 26.181 2.014 7.05 2.014 7.05 60.418-19.637 59.41-22.658-3.524-13.594-10.069-14.097-14.097 5.538-17.118-2.014-6.546-9.566-9.566-18.629c0 0-1.007-7.049-1.51-6.545s-5.54 3.02-6.546 2.014z"
        fill="#2f2e41"
      />
      <path
        d="M308.852 122.85s17.622 27.69 5.035 33.733-13.594 3.524-13.594 3.524l8.055 59.41 25.174 17.12 35.244-34.237 1.007-1.51 3.525-40.783-4.532-8.56s-18.125 2.518-19.636-12.586-3.524-24.67-3.524-24.67z"
        fill="#a0616a"
      />
      <path
        d="M308.852 122.85s17.622 27.69 5.035 33.733-13.594 3.524-13.594 3.524l8.055 59.41 25.174 17.12 35.244-34.237 1.007-1.51 3.525-40.783-4.532-8.56s-18.125 2.518-19.636-12.586-3.524-24.67-3.524-24.67z"
        opacity={0.1}
      />
      <circle cx={323.453} cy={95.158} r={34.237} fill="#a0616a" />
      <path
        d="M333.522 222.539s-26.263-63.823-28.78-63.823-15.585 9.351-15.585 9.351l-7.493 77.632s11.076 40.279 3.02 46.32-48.334 92.641-41.788 101.704 46.824 35.243 70.99 33.23 87.103-8.056 87.607-14.098-18.126-111.773-20.643-113.283 3.524-28.699 3.524-28.699l-4.028-103.717-6.042-14.098-18.125 52.866z"
        fill="#2f2e41"
      />
      <path
        d="M311.594 159.562c10.346-9.5 6.804-9.936-2.779-4.16-9.065 5.463-37.518-.743-40.745 5.712-4.028 8.056-6.546 82.571-5.035 84.585s-6.545 77.536-3.524 78.543 8.559-6.042 11.076-11.58 24.67-108.752 24.67-108.752zM362.1 153.67c-13.25-6.42-7.815-6.778 4.228-2.997 9.528 2.99 33.088 9.14 36.675 9.937 4.531 1.007 10.573 9.567 10.07 10.574s-5.035 52.362-5.035 52.362 4.531 9.566 6.042 11.076 24.167 65.957 19.132 70.991-46.32 16.615-49.845 11.58-3.524-35.243-12.083-40.782-22.657-71.998-15.608-92.64c4.742-13.89 11.397-27.693 6.425-30.102z"
        fill={color}
      />
      <path
        d="M424.653 301.082l-23.15 15.552s-32.233 5.09-30.22-13.035 29.203-19.635 29.203-19.635l13.594 1.007zM237.357 284.467l23.15 15.552s32.233 5.09 30.22-13.034-29.203-19.636-29.203-19.636l-13.594 1.007z"
        fill="#a0616a"
      />
      <path
        d="M274.615 160.61a109.775 109.775 0 00-24.67 44.307c-7.553 27.188-16.616 35.244-16.616 40.782s1.51 48.334 5.035 48.838 1.51-26.181 20.643-25.174c0 0-2.014-3.525 0-5.035s2.517-2.518 1.51-3.525-1.51-4.53 0-6.041 2.518-9.063 2.518-9.063l4.028-1.51z"
        fill={color}
      />
      <ellipse
        cx={325.718}
        cy={70.235}
        rx={41.789}
        ry={17.118}
        fill="#2f2e41"
      />
      <path
        d="M411.562 167.66s66.963 73.004 63.439 80.556-47.83 65.957-49.341 64.95-13.09-30.21-18.126-30.21c0 0 17.543-3.888 20.352-8.237s16.906-21.971 9.857-26.503-30.209-29.705-31.72-30.712 5.54-49.845 5.54-49.845z"
        fill={color}
      />
      <circle cx={321.546} cy={23.897} r={23.897} fill="#2f2e41" />
      <path
        fill="#3f3d56"
        d="M579.794 125h390v77h-390zM579.794 215h390v77h-390z"
      />
      <circle cx={620.794} cy={163} r={23} fill={color} />
      <path fill={color} d="M675.794 154h227v5h-227zM675.794 167h227v5h-227z" />
      <circle cx={620.794} cy={254} r={23} fill={color} opacity={0.3} />
      <path
        fill={color}
        opacity={0.3}
        d="M675.794 245h227v5h-227zM675.794 258h227v5h-227z"
      />
      <path
        d="M533.254 619.7c-.202-1.172-4.852-28.852 3.893-40.083a11.486 11.486 0 018.463-4.615 12.592 12.592 0 019.643 3.352c10.517 9.39 11.565 34.995 11.605 36.08l-1.46.053c-.01-.26-1.066-26.068-11.12-35.043a11.167 11.167 0 00-8.556-2.985 10.077 10.077 0 00-7.42 4.055c-8.351 10.721-3.657 38.657-3.608 38.938z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M485.743 612.999l-3.654-4.384 101.577-14.616v5.116l25.577-2.193-8.769 90.616-103.039-1.462-11.692-73.077z"
      />
      <path
        fill="#fff"
        opacity={0.05}
        d="M485.743 612.999l-3.654-4.384 101.577-14.616v5.116l25.577-2.193-8.769 90.616-103.039-1.462-11.692-73.077z"
      />
      <path
        fill="#2f2e41"
        d="M612.897 692.653l-94.942 39.864-.789.329-37.269-19 1.827-105.597 31.423 2.193-3.654 4.384.789-.146 98.596-18.123 4.019 96.096z"
      />
      <path
        opacity={0.1}
        d="M517.955 732.517l-38.058-18.671 1.827-105.597 31.423 2.193-3.654 4.384.789-.146-.424.512 8.097 117.325z"
      />
      <path
        d="M548.59 619.576s-7.309-42.384 11.691-43.846 20.462 38.73 20.462 38.73"
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
};

SvgWishlist.propTypes = {
  color: PropTypes.string
};
SvgWishlist.defaultProps = {
  color: "primary"
};
export default SvgWishlist;
