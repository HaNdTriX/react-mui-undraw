import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgStandOut = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 959.282 685.955"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M746.704 311.07c-1.794-4.613.768-6.92 1.794-11.02s-2.307-16.912-2.307-16.912-10.763-44.333-14.094-53.046c-1.41-3.687-4.471-6.223-7.535-7.927-.207-1.13-.507-1.86-.922-2.067-2.968-1.485-10.362-4.71-15.29-5.601a25.003 25.003 0 00-3.259-4.407 10.416 10.416 0 001.161-5.394c-.314-4.835-3.975-9.167-3.499-13.989.361-3.656 3.035-6.66 4.066-10.187a11.98 11.98 0 00-1.361-9.446l2.274 2.419a8.498 8.498 0 00-.634-10.268c-2.4-2.651-6.414-3.646-8.276-6.7-1.914-3.137-.887-7.4-2.697-10.6-4.432-7.836-15.78-2.28-22.578-5.016-2.793-1.124-4.916-2.36-8.06-2.272a31.49 31.49 0 00-7.86 1.468 16.61 16.61 0 00-9.01 6.458 5.579 5.579 0 01.703-.672c1.648-1.291 4.536-1.184 5.406.72a3.189 3.189 0 01.254 1.52c-.143 2.294-2.148 4.008-4.14 5.156s-4.232 2.109-5.531 4.005c-2.146 3.13-.884 7.329-.883 11.123a16.124 16.124 0 01-6.11 12.52l7.23-2.956a54.65 54.65 0 00-6.678 19.583l9.777-8.077a42.992 42.992 0 00-6.421 19.084l7.847-8.042a3.968 3.968 0 01.518 2.065l-.818 3.156a20.508 20.508 0 01-.96 1.832c-1.263 2.169-2.569 4.838-1.388 7.052l.006-.003c-1.243 4.183-3.119 8.368-7.29 10.402 4.627.484 9.457-1.83 11.546-5.512a10.31 10.31 0 001.228 1.86l.4.502-1.153.77-3.09 2.06s-20.245 4.1-18.964 11.787l.187 1.118-5.825 9.902-8.456 28.7s-4.357 9.226-3.588 13.07 0 5.381 0 12.3-3.331 9.738 0 15.376 13.325 22.038 13.325 22.038l2.196 1.646a10.256 10.256 0 00.11 2.967c2.05 10.25 21.27 108.397 21.27 108.397s-9.738 77.647 9.994 82.516a207.77 207.77 0 007.266 1.658l2.985 19.611-1.794 24.857s-13.582 30.751 11.275 32.545 13.582-26.65 13.582-26.65a13.51 13.51 0 001.538-7.945c-.254-2.28-2.388-14.152-4.48-25.569 9.433-1.131 7.668-11.143 6.411-15.545a2.55 2.55 0 001.144-1.425c.284-1.022-.378-5.043-1.577-10.678-.977-5.602-2.647-14.671-3.786-20.815l6.131.998 25.883-151.705s.17-2.415.092-5.947a96.08 96.08 0 0110.927-4.816c8.456-3.331 11.788-15.632 14.606-20.757s-1.024-6.662-2.818-11.275zm-91.896-96.591a5.482 5.482 0 012.835-.962c-.219 1.192-2.269 1.54-3.988 2.165a5.074 5.074 0 011.153-1.203zm-12.914 76.346c2.076 3.411-1.683 12.654-5.07 19.989-1.942-1.673-3.967-1.145-1.593-5.894a24.108 24.108 0 002.819-9.738c0-.586.3-4.891 2.825-6.68a13.484 13.484 0 001.019 2.323zm-7.777 29.44c1.174-.479 2.954-1.213 5.356-2.03a111.136 111.136 0 00-3.787 5.275 3.97 3.97 0 01-1.57-3.246zm83.117 3.362a64.486 64.486 0 01-3.853-4.461q2.899.763 5.903 1.642a7.025 7.025 0 002.986-.2c.089 1.772.09 4.3.09 4.3l-2.808 1.943a16.462 16.462 0 00-2.318-3.224zm7.952-8.888c-.03.026-.062.056-.092.084a16.997 16.997 0 00-.685-2.984c-1.68-5.297-2.577-14.695-3.054-22.714l4.848 16.307s.256 8.2-1.017 9.307z"
        fill="#d0cde1"
      />
      <path
        d="M625.644 247.383s-26.29-45.186-27.112-50.116-13.967-13.967-13.967-13.967c-4.491-4.49-11.86-5.912-19.615-5.838 2.92-2.416-7.507-4.04-8.318-5.664-.822-1.643-3.287-1.643-6.573-4.108-3.286-2.464-11.489-.41-11.49-.41a30.275 30.275 0 01-2.549-8.188 22.907 22.907 0 005.412-14.816c0-.06-.004-.117-.004-.176.209.325.418.653.627.99 1.54-9.219 4.256-16.882-.922-25.292a28.357 28.357 0 00-16.13-12.33l-4.932 3.944 1.918-4.601a26.104 26.104 0 00-4.875-.282l-4.437 5.705 1.837-5.51a28.085 28.085 0 00-19.375 11.525c-5.648 8.143-5.27 19.463.285 27.67.019-.058.033-.114.052-.171a22.997 22.997 0 0011.754 18.621l1.395 11.162a7.651 7.651 0 01-4.574 2.019c-2.465 0-4.93 6.572-4.93 6.572s-1.397.705-2.902 4.033c-3.879 2.64-15.71 10.934-20.099 16.73-2.596 1.278-5.385 4.12-4.933 10.457.822 11.502 0 64.905 0 64.905s-7.394 45.186-4.929 48.473-.822 13.967-.822 13.967l2.465.547v2.739s-7.413 34.366 4.108 32.863c18.896-2.465 4.93-30.398 4.93-30.398v-3.195l3.286.73s1.643-11.502 4.93-12.324c1.142-.286 2.484-3.357 3.748-7.238l1.18 9.703 5.141-1.142 1.432 5.25a7.086 7.086 0 001.104.5l-1.104 6.072s-.821 6.573 0 10.681c.415 2.072 15.665 46.353 30.682 89.744l-.283 10.488s-7.394 8.216-5.751 13.967-4.108 53.403-4.108 53.403l-4.93 23.826 1.24.381-1.138 4.175a8.285 8.285 0 00-2.566 2.016c-6.573 7.394-14.789 28.755-14.789 28.755s-14.788 22.183 8.216 21.361 24.647-9.037 24.647-9.037 3.287-21.361 3.287-22.183-1.643-9.267-1.643-9.267l-.639-.703.446-10.249 4.3 1.323s4.108-21.36 7.395-23.826c1.148-.861 4.204-10.457 7.693-22.782 3.566 10.268 7.02 45.773 8.14 48.996a11.668 11.668 0 00-1.045 1.72 199.636 199.636 0 01-12.324 20.54s-26.29 15.61 0 19.717c0 0 14.789.822 22.183-4.108s27.112-12.323 27.112-13.966-4.93-25.798-9.859-23.169l-3.302-7.595 3.302-1.278-20.8-93.364a47.14 47.14 0 001.082-6.047c0-4.302 10.638-88.077 13.345-109.326 11.915 3.376 22.805-21.305 22.805-21.305l2.7-4.861 3.872 2.397s3.287-8.216 8.216-9.038 13.967-44.365 13.967-50.116a26.742 26.742 0 00-2.465-10.68zm-38.279 64.37a22.138 22.138 0 00-2.8-3.573 101.749 101.749 0 004.93-17.253c1.643-9.037-2.465-38.614-2.465-38.614l-.072-2.009c4.032 5.294 9.11 12.35 9.11 14.333a6.162 6.162 0 002.464 4.93l-4.93 17.252s-3.286 8.216-4.107 12.324a41.936 41.936 0 00-.822 7.394l1.165.72zM249.522 262.59l4.384-.986-18.074-50.938-39.025-14.378s-.15.166-.426.452c-3.328-3.222-4.741-7.896-5.332-11.576a22.997 22.997 0 0010.722-33.774c3.216-.772 4.364-3.689 5.443-7.168a14.393 14.393 0 00-2.04-.444q.76-1.7 1.518-3.402l-2.666-.24.681-3.18-3.4 2.348a6.946 6.946 0 00-1.158-6.632 13.267 13.267 0 00-5.687-4.01 25.373 25.373 0 00-26.036 4.55l-.246-.957a33.044 33.044 0 00-12.62 21.871c-1.088 8.573 3.03 17.303 8.384 24.088a64.259 64.259 0 00-.143-.887q.347.478.717.938l.658 25.007-1.648 1.413c-.003 0-27.653 12.51-28.73 27.452l-.004.01c-1.66 7.274-2.481 45.067-2.481 45.067h2.275l-2.275 14.788-14.789 57.51s-18.896 24.648-2.464 29.577c10.21 3.064 13.124-8.783 13.866-18.193.592 2.333 2.361 3.91 5.852 4.227.274.025.568.045.851.068-7.77 20.079-2.495 85.376-2.495 85.376-4.107 8.215 44.366 64.904 44.366 64.904l2.918-1.556.632 1.263c-1.624.156-2.729.293-2.729.293v25.47s-7.394 25.468 2.465 30.398c2.551 1.275 5.212.347 7.755-1.725-.486 7.86-1.182 19.59-1.182 22.264 0 4.108 10.68 11.502 10.68 11.502s2.465 9.037 22.183 9.037 4.93-23.825 4.93-23.825l-10.681-23.826s-.8.39-3.218-1.578l.866-9.527 4.816.424 6.573-96.124s5.751-85.444 6.573-98.59a91.485 91.485 0 00-.298-12.637l24.123-49.802zm-17.798 31.877l-2.465 8.59V284.06zm-102.568 60.927c.02-3.01-.13-5.06-.13-5.06l16.062-32.123-.451 9.94s-12.864 16.272-15.481 27.243zm37.663 92.708l15.61-55.046 9.037 66.548-.648 24.193a38.572 38.572 0 01-2.638-6.94c-2.465-9.859-21.36-28.755-21.36-28.755z"
        fill="#d0cde1"
      />
      <path
        d="M389.149 578.861c-7.698-3.17-22.64-9.962-24.452-13.584-1.811-3.623-10.868-31.697-10.868-31.697l-2.332.17c-.3-12.755-1.585-62.184-3.554-68.093 0 0 9.509-78.337-9.51-109.581l-3.426-13.844c1.124-5.55.98-18.4.257-20.57-.906-2.717 10.415-11.32 7.245-16.755s-11.773-23.999-11.773-23.999.905-11.773-11.32-22.64c0 0-3.574-20.228-19.673-20.529-2.177-3.798-5.223-9.838-4.327-12.527.96-2.88 4.63-11.856 6.702-16.88a21.695 21.695 0 003.161-1.76c12.805-5.736 21.831-19.527 21.831-35.638 0-17.247-10.34-31.842-24.59-36.736a12.22 12.22 0 10-23.645-4.386 12.21 12.21 0 0111.265-16.955 12.272 12.272 0 012.364.233 12.215 12.215 0 00-13.087 20.397 12.116 12.116 0 00.499 1.314c-13.409 5.41-22.973 19.546-22.973 36.133 0 15.386 8.231 28.658 20.125 34.819-.063 5.005-1.305 13.443-8.207 18.585-3.566-1.63-8.514-3.417-11.689-2.606-1.641-1.28-4.12-1.703-7.49 1.669-6.793 6.792-12.68 24.452-12.68 35.32s1.36 73.808 1.36 73.808-7.246 2.717-2.265 6.792a5.873 5.873 0 003.658 1.36l4.946 36.677s-3.17 35.32 9.056 35.773a4.837 4.837 0 002.737-.672l-9.077 40.972s-20.829 13.585-37.13 40.3c-8.397 13.761-12.583 22.227-14.674 27.21l-2.986-1.851-10.415 19.923s-23.094 14.038-18.113 24.453 9.51 13.131 9.51 13.131l3.17-1.358 5.886 10.867s15.395 22.188 40.3 10.868a9.101 9.101 0 000-10.868c-4.075-5.886-14.49-18.565-14.49-18.565l6.792-34.414-1.405-.872 43.065-52.108s12.678-7.697 17.207-14.49 32.602-76.979 32.602-76.979l15.849 73.357s-.906 26.716 3.17 43.923a186.431 186.431 0 014.332 29.348l-1.163.085 2.717 20.377s-11.773 28.98-3.622 31.244a119.407 119.407 0 0017.66 3.17l.905-3.17s34.867 19.018 47.546 4.981c0 0 2.717-9.962-4.981-13.132zM265.077 356.528c1.359 1.359.906 7.698.906 7.698l-2.717 17.66-2.713 12.25a131.573 131.573 0 00-2.268-17.23l-1.254-33.844a2.615 2.615 0 00.801.335c.906 0 .453-7.698.453-7.698s.528-1.375 1.188-3.544c1.76 5.27 3.91 8.708 6.51 9.43l.453 5.887s-5.887 2.717-.453 2.717a4.277 4.277 0 00.933-.139l-.48 2.403s-2.717 2.717-1.359 4.075z"
        fill="#d0cde1"
      />
      <ellipse cx={381.409} cy={593.955} rx={364} ry={6} fill="#3f3d56" />
      <ellipse
        cx={508.807}
        cy={609.455}
        rx={400.398}
        ry={15.5}
        fill="#3f3d56"
      />
      <ellipse cx={434.909} cy={632.455} rx={196.5} ry={15.5} fill="#3f3d56" />
      <ellipse cx={718.909} cy={650.955} rx={87.5} ry={8} fill="#3f3d56" />
      <ellipse cx={598.909} cy={677.955} rx={41.5} ry={8} fill="#3f3d56" />
      <ellipse cx={260.909} cy={643.955} rx={41.5} ry={8} fill="#3f3d56" />
      <path
        fill="#ffb8b8"
        d="M465.909 553.455l4 28 20-2-2-29-22 3zM370.909 553.455l-4 28-20-2 2-29 22 3z"
      />
      <path
        d="M341.909 263.455s-18 21-14 54 11 108 11 108l5 133 32-2 5-113 16-91 43 106s21 99 22 99 30-3 30-3l-14-117s-22-170-35-173-101-1-101-1zM491.909 575.455s-18-12-25 2-1 24-1 24 6 4 3 8-4 30 22 26 13-31 13-31zM344.909 575.455s18-12 25 2 1 24 1 24-6 4-3 8 4 30-22 26-13-31-13-31z"
        fill="#2f2e41"
      />
      <path
        d="M366.409 68.955s9 25 2 39 11 30 11 30 47-24 41-36-16-28-14-38z"
        fill="#ffb8b8"
      />
      <circle cx={383.909} cy={46.455} r={32} fill="#ffb8b8" />
      <path
        d="M360.909 106.455s32.108 26.719 56.054-11.14l24.946 14.14 13 152s-73 42-108 6l5-141z"
        fill="#d0cde1"
      />
      <path
        fill="#575a89"
        d="M370.992 91.488l-45.083 29.967 16 74-21 115 34-51 16.083-167.967zM410.836 83.147l11.073 7.308 45 16-7 124 19 80-27 14s-5-38-36-57-12.146-178.617-5.073-184.308z"
      />
      <path
        d="M335.909 277.455l13 9s-16.5 17.5-19.5 14.5a8.2 8.2 0 01-2.5-6.5l-3-7zM422.329 275.51l-4.42 6.945s-13 6-10 10 28 13 33 4l5-9z"
        fill="#ffb8b8"
      />
      <path
        d="M331.909 120.455l-7 1-11.5 74.5s-4.5 13.5.5 45.5 9.951 52.838 9.951 52.838l22.049-15.838-10-26 13-95zM450.909 104.455l16 2s18 19 21 39 2 77 2 77l-46 73-25-18 35-62-17-74z"
        fill="#575a89"
      />
      <path
        d="M414.424 17.513A37.384 37.384 0 00393.16 1.256l-6.502 5.202L389.185.39a34.414 34.414 0 00-6.426-.372l-5.85 7.522L379.33.277a37.026 37.026 0 00-25.542 15.194c-7.446 10.735-8.702 25.665-1.379 36.484 2.01-6.177 4.45-11.974 6.46-18.151a18.285 18.285 0 004.763.023l2.446-5.707.683 5.465c7.58-.66 18.824-2.11 26.01-3.439l-.698-4.192 4.18 3.484c2.203-.507 3.51-.967 3.402-1.318 5.345 8.616 10.64 14.12 15.985 22.736 2.029-12.153 5.61-22.256-1.216-33.343z"
        fill="#2f2e41"
      />
      <ellipse cx={412.652} cy={45.45} rx={2.166} ry={4.332} fill="#ffb8b8" />
      <path
        d="M758.777 611.036c.922 31.558-17.518 43.123-40.659 43.799q-.806.024-1.605.029-1.61.012-3.188-.054c-20.929-.869-37.495-11.978-38.352-41.327-.887-30.373 36.812-69.836 39.64-72.755l.006-.003.162-.167s43.074 38.922 43.996 70.478z"
        fill={color}
      />
      <path
        d="M716.452 650.052l14.7-21.86-14.67 24.212.031 2.46q-1.61.012-3.188-.054l.729-31.619-.02-.244.027-.047.07-2.988-16.098-23.372 16.079 21.136.057.631.55-23.89-13.904-24.231 13.944 20.035-.145-49.493v-.165l.005.162.923 39.007 12.672-15.844-12.631 19.205.277 21.369 11.66-20.855-11.618 23.996.154 11.882 16.959-29.05-16.907 33.195z"
        fill="#3f3d56"
      />
      <path
        d="M222.777 564.036c.922 31.558-17.518 43.123-40.659 43.799q-.806.024-1.605.029-1.61.012-3.188-.054c-20.929-.869-37.495-11.978-38.352-41.327-.887-30.373 36.812-69.836 39.64-72.755l.006-.003.162-.167s43.074 38.922 43.996 70.478z"
        fill={color}
      />
      <path
        d="M180.452 603.052l14.7-21.86-14.67 24.212.031 2.46q-1.61.012-3.188-.054l.729-31.619-.02-.244.027-.047.07-2.988-16.098-23.372 16.079 21.136.057.631.55-23.89-13.904-24.231 13.944 20.035-.145-49.493v-.165l.005.162.923 39.007 12.672-15.844-12.63 19.205.276 21.369 11.66-20.855-11.618 23.996.154 11.882 16.959-29.05-16.907 33.195z"
        fill="#3f3d56"
      />
      <path
        d="M623.295 655.526c.54 18.524-10.283 25.313-23.866 25.71q-.473.013-.942.016-.945.008-1.871-.031c-12.285-.51-22.009-7.03-22.512-24.258-.52-17.828 21.608-40.992 23.268-42.706l.003-.001.095-.098s25.284 22.846 25.825 41.368z"
        fill={color}
      />
      <path
        d="M598.451 678.428l8.629-12.831-8.611 14.212.018 1.443q-.945.008-1.871-.031l.428-18.56-.012-.143.016-.028.04-1.753-9.449-13.72 9.438 12.407.034.37.323-14.022-8.161-14.224 8.184 11.76-.085-29.05v-.097l.003.095.542 22.896 7.438-9.3-7.414 11.273.162 12.543 6.845-12.242-6.82 14.086.09 6.974 9.955-17.052-9.924 19.485z"
        fill="#3f3d56"
      />
      <path
        d="M959.195 51.187l.087-.275c-.012.04-.028.079-.04.119z"
        fill="#2f2e41"
      />
      <path
        d="M819.452 581.808l74.068-110.146-73.917 121.996.155 12.394q-8.111.062-16.064-.27l3.673-159.32-.1-1.229.135-.237.352-15.055-81.113-117.767 81.017 106.5.288 3.181 2.774-120.372-70.06-122.097 70.26 100.951-.733-249.38.001-.83.024.816 4.65 196.545 63.852-79.836-63.642 96.768 1.393 107.67 58.756-105.081-58.54 120.91.776 59.871 85.447-146.378-85.187 167.264zM63.155 577.539l50.401-74.952-50.298 83.015.106 8.434q-5.52.042-10.932-.184l2.5-108.412-.068-.837.092-.161.24-10.245L0 394.06l55.13 72.47.196 2.165 1.888-81.91L9.54 303.702l47.81 68.694-.5-169.696.002-.565.016.556 3.165 133.743 43.448-54.327-43.306 65.849.948 73.266 39.982-71.505-39.835 82.277.528 40.74 58.144-99.606-57.967 113.818z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgStandOut.propTypes = {
  color: PropTypes.string
};
SvgStandOut.defaultProps = {
  color: "primary"
};
export default SvgStandOut;