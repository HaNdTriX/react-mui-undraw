import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMyPassword = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 960 794.981"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M848.81 454.442c-5.27 45.15-16.22 81.4-31.25 110.31-20 38.52-54.21 54.04-84.77 70.28a193.277 193.277 0 01-27.46 11.94c-55.61 19.3-117.85 14.18-166.74 3.99a657.297 657.297 0 00-104.09-13.16q-14.97-.675-29.97-.67c-15.42.02-293.07 5.29-360.67-131.57-16.69-33.76-28.13-75-32.24-125.27-11.63-142.12 52.29-235.46 134.74-296.47 155.97-115.41 369.76-110.57 523.43 7.88 102.36 78.9 198.2 198.31 179.02 362.74z"
        fill="#f2f2f2"
      />
      <path
        d="M300 413.297c0 112.967-67.157 152.411-150 152.411S0 526.264 0 413.298s150-256.68 150-256.68 150 143.712 150 256.68z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M144.536 548.428l1.536-94.544 63.934-116.963-63.693 102.132.69-42.51 44.063-84.622-43.88 73.372 1.242-76.457 47.184-67.37-46.989 55.347.776-140.195-4.877 185.593.401-7.656-47.972-73.429 47.203 88.126-4.47 85.39-.133-2.267-55.303-77.273 55.135 85.28-.559 10.679-.1.16.046.877-11.34 216.641h15.151l1.818-111.899 55-85.071-54.863 76.659z"
      />
      <path
        d="M960 420.297c0 112.967-67.157 152.411-150 152.411s-150-39.444-150-152.41 150-256.68 150-256.68 150 143.712 150 256.68z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M804.536 555.428l1.536-94.544 63.934-116.963-63.693 102.132.69-42.51 44.063-84.622-43.88 73.372 1.242-76.457 47.184-67.37-46.989 55.347.776-140.195-4.877 185.593.401-7.656-47.972-73.429 47.203 88.126-4.47 85.39-.133-2.267-55.303-77.273 55.135 85.28-.559 10.679-.1.16.046.877-11.34 216.641h15.151l1.818-111.899 55-85.071-54.863 76.659z"
      />
      <path
        d="M648 324.355c0 123.51-73.425 166.636-164 166.636s-164-43.125-164-166.636S484 43.719 484 43.719s164 157.125 164 280.636z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M478.026 472.098l1.679-103.368 69.901-127.88-69.637 111.665.755-46.478 48.175-92.52-47.976 80.22 1.358-83.593 51.588-73.658-51.374 60.513.848-153.28-5.332 202.915.438-8.371L426 157.981l51.608 96.351-4.887 93.36-.145-2.479-60.465-84.484 60.282 93.239-.612 11.675-.109.176.05.958-12.399 236.861h16.566l1.987-122.343 60.134-93.011-59.984 83.814z"
      />
      <path
        d="M832 685.981c0 26.51-173.714 109-388 109s-388-82.49-388-109 159.714-86 374-86 402 59.49 402 86z"
        fill="#3f3d56"
      />
      <path
        d="M832 685.981c0 26.51-173.714 109-388 109s-388-82.49-388-109 159.714-86 374-86 402 59.49 402 86z"
        opacity={0.1}
      />
      <path
        d="M832 685.981c0 26.51-173.714 48-388 48s-388-21.49-388-48 159.714-86 374-86 402 59.49 402 86zM574.429 553.062c0 38.029 23.857 68.801 53.34 68.801"
        fill="#3f3d56"
      />
      <path
        d="M627.77 621.863c0-38.456 26.623-69.574 59.524-69.574M593.755 556.51c0 36.123 15.214 65.353 34.014 65.353"
        fill={color}
      />
      <path
        d="M627.77 621.863c0-49.138 30.772-88.9 68.801-88.9"
        fill="#3f3d56"
      />
      <path
        d="M616.548 622.348s7.565-.233 9.844-1.856 11.637-3.562 12.202-.958 11.368 12.949 2.828 13.018-19.844-1.33-22.12-2.717-2.754-7.487-2.754-7.487z"
        fill="#a8a8a8"
      />
      <path
        d="M641.574 631.645c-8.54.07-19.844-1.33-22.12-2.716-1.732-1.055-2.422-4.843-2.653-6.59l-.253.01s.48 6.1 2.755 7.486 13.579 2.786 22.119 2.717c2.465-.02 3.317-.897 3.27-2.196-.343.784-1.283 1.275-3.118 1.29z"
        opacity={0.2}
      />
      <ellipse cx={449} cy={680.981} rx={132} ry={21} opacity={0.1} />
      <path fill="#ffb9b9" d="M494 633.981h13v30h-13z" />
      <path fill="#ff6584" d="M458 228.981h50v90h-50z" />
      <path
        fill="#ffb9b9"
        d="M544.721 399.312l1.73 13.845-45.571 13.844-5.769-25.381 49.61-2.308zM477.229 266.06s-1.154 10.383-3.461 10.383-10.384 4.038-10.384 4.038l-2.307 10.96 16.152 9.806 26.535-2.884 7.499-11.537-7.499-7.499s-6.345-13.844-4.038-16.729-22.497 3.461-22.497 3.461z"
      />
      <path
        d="M477.229 266.06s-1.154 10.383-3.461 10.383-10.384 4.038-10.384 4.038l-2.307 10.96 16.152 9.806 26.535-2.884 7.499-11.537-7.499-7.499s-6.345-13.844-4.038-16.729-22.497 3.461-22.497 3.461z"
        opacity={0.1}
      />
      <path
        d="M405.122 625.44s-5.192 34.61-11.537 36.918 24.228 6.345 24.228 6.345l2.307-12.69s.577-23.075 2.884-26.536-17.882-4.038-17.882-4.038z"
        fill="#ffb9b9"
      />
      <path
        d="M463.961 424.117s83.644-14.998 84.22-17.882 17.306 21.92 6.923 70.376-36.342 162.673-36.342 162.673-26.535 8.076-25.958 1.73 9.23-116.524 9.23-116.524l-5.77-46.725-9.806 5.768-40.956 80.76-20.767 69.799s-26.535 4.615-22.497-5.192 17.305-85.951 17.305-85.951l36.342-107.295s-1.154-11.537 8.076-11.537z"
        fill="#2f2e41"
      />
      <circle cx={485.016} cy={249.619} r={24.228} fill="#ffb9b9" />
      <path
        d="M510.11 279.904s-11.538 10.96-38.65 8.076 7.5 61.723 7.5 61.723l10.96 65.185s48.455-5.769 50.186-16.73-29.997-118.254-29.997-118.254z"
        fill="#f2f2f2"
      />
      <path
        d="M498.572 341.627s-13.844-6.922-19.036-25.958-9.806-38.65-12.69-38.073c-2.436.487-25.022 9.2-32.342 15.025-1.35 1.074-2.18 2.05-2.27 2.858-.577 5.192 20.767 57.108 20.767 57.108s16.729 37.496 9.806 49.61-7.499 27.689 5.192 26.535 54.801-3.461 49.033-35.765c0 0 10.96 22.497 41.533 6.345 0 0 18.46-2.884 17.882-9.23s-29.419-61.146-29.419-61.146-4.615-24.227 4.038-33.457l-19.613-23.074s-4.615-6.923-9.23-3.461-14.998 9.23-16.728 9.806-2.869-2.073-2.869-2.073a50.154 50.154 0 00-4.63 26.878c1.73 14.998.576 38.072.576 38.072zM406.853 655.435s-1.288-4.038-8.72 0c0 0 2.374-12.69-5.702-12.69s-10.96 14.998-10.96 14.998-2.307 9.806-17.882 13.844-3.462 17.883 7.499 17.883 25.381-8.653 25.381-8.653 29.997.577 30.573-5.192-2.884-23.074-5.191-23.074-6.922 8.076-6.922 8.076zM504.918 645.284s-8.076-8.653-12.691 5.768-8.076 20.19-5.192 22.497 5.192 1.154 4.038 5.769 3.461 14.421 13.845 14.421 13.267-7.499 12.69-12.69-5.191-11.538-5.191-11.538l-4.615-16.151z"
        fill="#2f2e41"
      />
      <path
        d="M550.49 239.524l-30.574 10.383s-27.69 16.152-15.575 19.613 22.497-10.383 22.497-10.383l26.535-6.922z"
        fill="#ffb9b9"
      />
      <path
        d="M468.532 212.154c-3.63 2.487-6.52 5.893-9.267 9.33-5.583 6.982-11.053 15.322-9.677 24.156.522 3.355 2.013 6.478 2.853 9.768 1.133 4.44 1.058 9.088.976 13.67a18.46 18.46 0 01-.715 5.763 37.99 37.99 0 01-2.842 5.255c-2.778 5.174-2.846 11.323-2.849 17.196a14.666 14.666 0 00.791 5.832c.759 1.766 2.171 3.15 3.342 4.674a20.165 20.165 0 013.108 18.27 7.914 7.914 0 007.19-4.534 10.024 10.024 0 01-2.563 8.152c6.604-1.962 13.682-5.271 16.092-11.724a24.847 24.847 0 001.186-6.776c1.282-16.188 2.014-32.981-3.792-48.146-1.857-4.852-4.385-9.548-5.008-14.706s1.28-11.118 6.02-13.248a5.464 5.464 0 001.65 3.476c1.054.783 3.005.292 3.024-1.022l2.289 3.187a5.592 5.592 0 002.173-1.896l1.57 1.92 3.337-2.427 2.898 3.125a6.166 6.166 0 002.544-2.769c.623.932 1.394 1.956 2.51 2.056 2.43.22 2.931-3.636 5.054-4.84a3.583 3.583 0 014.472 1.356 7.3 7.3 0 01.9 4.943c-.879 7.932-7.647 15.17-5.64 22.894 1.128 4.343 4.929 7.826 5.215 12.304.23 3.58-1.875 6.965-1.842 10.551.037 4.203 2.941 7.773 5.776 10.876q7.567 8.284 15.93 15.791l-1.722-3.013a5.592 5.592 0 014.386 1.613c.495-1.732-.326-3.536-1.1-5.163-4.638-9.738-8.382-20.108-8.941-30.88-.778-14.974 4.606-30.18 1.194-44.78a38.655 38.655 0 00-13.028-20.828c-3.156-2.598-5.549-4.154-9.635-4.44a72.72 72.72 0 00-13.725.108 31.418 31.418 0 00-14.134 4.926z"
        fill="#ff6584"
      />
      <path
        d="M526.838 272.982s6.345.576 9.23 0 6.922-3.462 6.922-3.462l21.92-16.151-19.036 2.884s3.461-26.535 2.308-27.112 55.954-11.537 54.8 6.345-33.457 53.07-51.916 59.993l-12.114 1.73z"
        fill="#2f2e41"
      />
      <path fill="#fff" d="M317 477.491h272v64H317z" />
      <path fill="#3f3d56" d="M351.5 491.991h202v34h-202z" />
      <path
        d="M398.442 508.245c-.08-.872-3.937-1.26-9.228-1.042 3.066-4.317 4.842-7.762 4.155-8.305-.648-.512-3.3 1.701-6.53 5.296-.304-4.822-1.013-8.203-1.839-8.203-.9 0-1.662 4.022-1.913 9.55-4.493-3.23-8.121-5.127-8.68-4.42-.533.675 1.895 3.526 5.756 6.936-5.095.756-8.685 1.823-8.605 2.68.08.871 3.937 1.26 9.228 1.041-3.066 4.318-4.842 7.763-4.155 8.305.648.512 3.3-1.701 6.53-5.296.304 4.823 1.013 8.204 1.839 8.204.9 0 1.662-4.023 1.913-9.552 4.493 3.231 8.121 5.128 8.68 4.42.533-.674-1.895-3.525-5.756-6.935 5.095-.756 8.685-1.823 8.605-2.68zM432.442 508.245c-.08-.872-3.937-1.26-9.228-1.042 3.066-4.317 4.842-7.762 4.155-8.305-.648-.512-3.3 1.701-6.53 5.296-.304-4.822-1.013-8.203-1.839-8.203-.9 0-1.662 4.022-1.913 9.55-4.493-3.23-8.121-5.127-8.68-4.42-.533.675 1.895 3.526 5.756 6.936-5.095.756-8.685 1.823-8.605 2.68.08.871 3.937 1.26 9.228 1.041-3.066 4.318-4.842 7.763-4.155 8.305.648.512 3.3-1.701 6.53-5.296.304 4.823 1.013 8.204 1.839 8.204.9 0 1.662-4.023 1.913-9.552 4.493 3.231 8.121 5.128 8.68 4.42.533-.674-1.895-3.525-5.756-6.935 5.095-.756 8.685-1.823 8.605-2.68zM466.442 508.245c-.08-.872-3.937-1.26-9.228-1.042 3.066-4.317 4.842-7.762 4.155-8.305-.648-.512-3.3 1.701-6.53 5.296-.304-4.822-1.013-8.203-1.839-8.203-.9 0-1.662 4.022-1.913 9.55-4.493-3.23-8.121-5.127-8.68-4.42-.533.675 1.895 3.526 5.756 6.936-5.095.756-8.685 1.823-8.605 2.68.08.871 3.937 1.26 9.228 1.041-3.066 4.318-4.842 7.763-4.155 8.305.648.512 3.3-1.701 6.53-5.296.304 4.823 1.013 8.204 1.839 8.204.9 0 1.662-4.023 1.913-9.552 4.493 3.231 8.121 5.128 8.68 4.42.533-.674-1.895-3.525-5.756-6.935 5.095-.756 8.685-1.823 8.605-2.68zM500.442 508.245c-.08-.872-3.937-1.26-9.228-1.042 3.066-4.317 4.842-7.762 4.155-8.305-.648-.512-3.3 1.701-6.53 5.296-.304-4.822-1.013-8.203-1.839-8.203-.9 0-1.662 4.022-1.913 9.55-4.493-3.23-8.121-5.127-8.68-4.42-.533.675 1.895 3.526 5.756 6.936-5.095.756-8.685 1.823-8.605 2.68.08.871 3.937 1.26 9.228 1.041-3.066 4.318-4.842 7.763-4.155 8.305.648.512 3.3-1.701 6.53-5.296.304 4.823 1.013 8.204 1.839 8.204.9 0 1.662-4.023 1.913-9.552 4.493 3.231 8.121 5.128 8.68 4.42.533-.674-1.895-3.525-5.756-6.935 5.095-.756 8.685-1.823 8.605-2.68zM534.442 508.245c-.08-.872-3.937-1.26-9.228-1.042 3.066-4.317 4.842-7.762 4.155-8.305-.648-.512-3.3 1.701-6.53 5.296-.304-4.822-1.013-8.203-1.839-8.203-.9 0-1.662 4.022-1.913 9.55-4.493-3.23-8.121-5.127-8.68-4.42-.533.675 1.895 3.526 5.756 6.936-5.095.756-8.685 1.823-8.605 2.68.08.871 3.937 1.26 9.228 1.041-3.066 4.318-4.842 7.763-4.155 8.305.648.512 3.3-1.701 6.53-5.296.304 4.823 1.013 8.204 1.839 8.204.9 0 1.662-4.023 1.913-9.552 4.493 3.231 8.121 5.128 8.68 4.42.533-.674-1.895-3.525-5.756-6.935 5.095-.756 8.685-1.823 8.605-2.68z"
        fill="#fff"
      />
      <path
        d="M428.773 450.076s-2.884 38.072 10.96 39.802 1.154-43.264 1.154-43.264z"
        fill="#ffb9b9"
      />
      <path
        d="M436.272 294.325l-4.038 1.154s-16.729 133.83-5.768 159.788c0 0 11.537-6.345 17.305-5.191l9.23-109.026z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgMyPassword.propTypes = {
  color: PropTypes.string
};
SvgMyPassword.defaultProps = {
  color: "primary"
};
export default SvgMyPassword;
