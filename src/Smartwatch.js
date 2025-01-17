import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgSmartwatch = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 849 824.98"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M701 477.99l21-7 8 13-5.018 6.759A22.538 22.538 0 01703 487.99c-11-8-2-10-2-10z"
        fill="#9f616a"
      />
      <path
        d="M662 305a34 34 0 00-34 34v35h8.02l1.271-3.449.974 3.45h48.755l1.271-3.45.974 3.45H696V339a34 34 0 00-34-34z"
        fill="#2f2e41"
      />
      <path
        d="M706.783 404.709l-4.896-1.098-6.48 4.193 12.578 62.883 21.937 16.714c7.038-12.606-23.139-82.692-23.139-82.692zM649.278 355.577s-5.337 28.973-9.912 29.735 19.062 9.15 19.062 9.15l19.06-1.525-2.287-6.1s-6.1-15.249 0-29.735-25.923-1.525-25.923-1.525z"
        fill="#9f616a"
      />
      <path
        d="M649.278 355.577s-5.337 28.973-9.912 29.735 19.062 9.15 19.062 9.15l19.06-1.525-2.287-6.1s-6.1-15.249 0-29.735-25.923-1.525-25.923-1.525z"
        opacity={0.1}
      />
      <path
        d="M619.162 473.756l.762-66.333-15.816-12.961s-10.107 85.393 1.33 93.78a26.022 26.022 0 003.536 2.167l10.614-16.511-.426-.142zM604.294 694.865l-9.15 46.509h22.112s12.961-33.548 12.199-40.41-25.161-6.1-25.161-6.1zM698.075 698.677v38.885l17.536 2.287s11.437-44.222 9.15-48.034-26.686 6.862-26.686 6.862z"
        fill="#9f616a"
      />
      <path
        d="M623.355 524.077s-28.973 174.6-22.11 177.65 64.045 13.724 67.857 8.387 11.436-111.317 11.436-111.317 9.15 109.792 18.3 108.267 57.945.762 60.995-12.2-36.598-172.312-36.598-172.312l-9.911-6.862h-29.736zM595.145 732.987l-6.862 38.122-3.05 34.31s-9.912 17.536 5.337 17.536 19.824-6.862 19.824-6.862v-24.398s1.524-12.199 0-16.011 2.287-6.1 2.287-6.1-3.05-12.961 0-16.011 8.387-16.774 8.387-16.774zM694.262 732.987l-2.287 27.448s-3.812 14.486-3.812 19.061-2.287 32.023-2.287 32.023-.763 13.724 14.486 11.436 11.437-9.911 11.437-9.911v-15.25s.762-16.01 0-17.536.762-9.149.762-10.674 1.525-14.486 1.525-14.486l4.575-18.299z"
        fill="#2f2e41"
      />
      <circle cx={661.859} cy={342.997} r={22.873} fill="#9f616a" />
      <path
        d="M636.317 383.025s28.21-5.337 41.172 2.287 14.486 14.487 19.06 14.487 9.913-3.05 12.962 6.1l-9.911 12.96-3.813 28.974 13.724 63.283s12.2 5.337 7.625 6.862-65.57 22.11-69.383 9.911-18.298-65.57-17.536-67.857-8.387-44.984-8.387-44.984l-19.823-19.062s7.624-6.862 16.773-3.05 17.537-9.911 17.537-9.911z"
        fill="#d0cde1"
      />
      <path
        d="M643.056 379.814s-12.839 4.736-17.414 7.023-19.442 3.431-19.442 5.718 13.056-1.976 12.818 19.789-10.15 165.867-2.525 167.392.763-7.625 16.774 0 23.636.762 25.16-1.525 5.338-86.919 0-115.13-15.371-83.267-15.371-83.267zM673.216 381.987a.966.966 0 011.477-.922c4.554 2.87 16.806 10.633 18.045 11.872 1.033 1.033 6.964 3.115 10.683 4.351a4.847 4.847 0 013.323 4.346 22.332 22.332 0 01-.282 5.79c-.763 3.049-3.813 13.723-3.813 13.723s10.675 73.195 29.736 107.505 17.536 48.034 11.436 48.796-18.298-42.697-34.31-51.084-31.26-61.758-30.497-73.194c.68-10.212-4.649-60.522-5.798-71.183z"
        fill="#3f3d56"
      />
      <path
        d="M648.135 482.905c-5.616-1.404-28.912-6.21-32.023-7.243l-7.138 14.747c11.311 5.79 26.199 3.933 26.199 3.933s22.11 20.205 25.923 10.293-6.862-20.205-12.961-21.73z"
        fill="#9f616a"
      />
      <path
        d="M629.744 494.917l7.936-15.758a2.775 2.775 0 013.402-1.368l1.513.534a2.775 2.775 0 011.433 4.08l-9.449 15.223a2.775 2.775 0 01-4.766-.086 2.775 2.775 0 01-.07-2.625z"
        fill="#2f2e41"
      />
      <circle cx={636.698} cy={487.861} r={6.1} fill="#2f2e41" />
      <circle cx={636.698} cy={487.861} r={3.812} fill="#d0cde1" />
      <path
        d="M713.705 474.9l.762.762-44.603-5.718s-22.492-7.244-28.591 7.243 31.641 8.005 31.641 8.005 47.272 12.962 56.42 3.05a4.387 4.387 0 00.588-.841z"
        fill="#9f616a"
      />
      <path fill="#2f2e41" d="M640 316h44v27h-44z" />
      <circle
        cx={269}
        cy={269}
        r={268}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M539.526 396.802A260.13 260.13 0 00560.566 294c0-144.146-116.854-261-261-261s-261 116.854-261 261 116.853 261 261 261a260.346 260.346 0 00195.394-87.986l94.207 12.687 3.836-28.981z"
        fill="#f2f2f2"
      />
      <path
        fill="#f2f2f2"
        opacity={0.6}
        d="M593.003 450.72l-3.836 28.981L637 488l-43.997-37.28z"
      />
      <path
        fill={color}
        opacity={0.2}
        d="M453.436 308.364L332.092 184.333l-16.313 35.088-73.674-75.306-96.266 207.068 147.194 68.43.618-1.329 89.369 41.547 70.416-151.467z"
      />
      <path
        d="M477.381 317.252l.003-.366-.002-.211h-.05c-2.257-14.356-81.236-25.89-173.812-25.89s-171.554 11.534-173.811 25.89h-.05l-.002.21.002.367-.002.055.003.073a173.86 173.86 0 00347.72 0c0-.024.004-.049.004-.073 0-.019-.003-.037-.003-.055z"
        fill="#3f3d56"
      />
      <ellipse
        cx={303.52}
        cy={317.306}
        rx={173.863}
        ry={26.521}
        fill="#fff"
        opacity={0.1}
      />
      <circle cx={357.087} cy={282.184} r={30.759} fill={color} />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M356.808 337.81l.253-55.795"
      />
      <circle cx={357.061} cy={282.015} r={7.89} fill="#3f3d56" />
      <path d="M356.905 316.403s-1.017-24.249-24.138-21.535" fill="#3f3d56" />
      <circle cx={444.402} cy={197.806} r={30.759} fill={color} />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M442.66 311.362l1.771-113.59"
      />
      <circle cx={444.431} cy={197.772} r={7.89} fill="#3f3d56" />
      <path d="M443.93 229.902s-.75-24.258-23.898-21.8" fill="#3f3d56" />
      <path
        d="M442.694 309.193s5.798-46.536-23.47-49.247"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={419.224} cy={259.946} r={7.89} fill="#3f3d56" />
      <circle cx={171.213} cy={128.011} r={30.759} fill={color} />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M171.232 314.234v-186.11"
      />
      <circle cx={171.232} cy={128.035} r={7.89} fill="#3f3d56" />
      <circle cx={146.998} cy={262.687} r={7.89} fill="#3f3d56" />
      <path
        d="M171.232 168.34s-1.127-24.244-24.234-21.426M171.232 237.068s-1.127-24.244-24.234-21.426"
        fill="#3f3d56"
      />
      <path
        d="M171.232 312.065s5.073-47.123-24.234-49.378"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={195.951} cy={188.672} r={7.89} fill="#3f3d56" />
      <path
        d="M171.717 235.537s-5.073-44.61 24.234-46.865"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M369.736 230.171a11.06 11.06 0 1111.06-11.06 11.072 11.072 0 01-11.06 11.06zm0-21.114a10.054 10.054 0 1010.055 10.054 10.066 10.066 0 00-10.055-10.054z"
        fill="#3f3d56"
      />
      <circle cx={306.458} cy={146.719} r={6.535} fill="#3f3d56" />
      <path
        fill={color}
        d="M299.732 258.58v55.359l-29.89 16.839-60.62-4.631v-57.253l30.099-10.314h60.411z"
      />
      <path
        opacity={0.1}
        d="M299.732 258.896v55.043l-29.89 16.839h-.631v-61.673l30.521-10.209z"
      />
      <path
        fill="#fff"
        opacity={0.1}
        d="M299.732 258.58v.493l-30.521 10.032h-59.989v-.211l30.099-10.314h60.411z"
      />
      <ellipse cx={254.678} cy={262.848} rx={14.579} ry={3.016} opacity={0.1} />
      <path
        d="M254.678 262.925l-6.488-5.853c-23.042-21.155-38.254-34.886-38.254-51.99a24.333 24.333 0 0124.608-24.758 26.468 26.468 0 0120.134 9.454 26.467 26.467 0 0120.134-9.454 24.333 24.333 0 0124.608 24.758c0 17.104-15.212 30.835-38.253 51.99z"
        fill="#ff6584"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M453 823h396"
      />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M810.582 824.98V708.887"
      />
      <circle cx={810.582} cy={708.887} r={16.417} fill="#3f3d56" />
      <path d="M810.582 780.437s-2.345-50.443-50.424-44.58" fill="#3f3d56" />
      <circle cx={284.75} cy={625.378} r={20.289} fill="#3f3d56" />
      <circle
        cx={221.117}
        cy={625.378}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle
        cx={348.383}
        cy={625.378}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
};

SvgSmartwatch.propTypes = {
  color: PropTypes.string
};
SvgSmartwatch.defaultProps = {
  color: "primary"
};
export default SvgSmartwatch;
