import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgInspection = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 893.843 676.261"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={233} cy={441} r={6} fill={color} />
      <path fill="#2f2e41" d="M94 674.02h799.843v2.241H94z" />
      <path
        d="M589.198 330.658s-31.313 36.517-24.732 38.902 37.308-23.709 35.333-32.934zM773.5 364.5s17 45 10 45-27-35-22-43z"
        fill="#a0616a"
      />
      <ellipse
        cx={949.079}
        cy={743.87}
        rx={37}
        ry={12}
        transform="rotate(-54.645 764.271 836.086)"
        fill="#2f2e41"
      />
      <ellipse
        cx={825.079}
        cy={761.87}
        rx={37}
        ry={12}
        transform="rotate(-40.524 597.018 913.272)"
        fill="#2f2e41"
      />
      <path
        d="M784.077 92.12c-2.807-3.97-6.26-7.439-9.222-11.293-6.829-8.888-9.191-20.73-18.356-27.546-9.068-6.745-23.459-13.382-34.806-12.85-14.956.7-26.82 12.302-37.13 23.159l-23.635 24.89c-5.7 6.001-11.61 12.373-13.664 20.391-1.974 7.706-.048 15.985 3.567 23.071a56.152 56.152 0 0015.443 18.435c7.912-10.894 18.996-25.937 18.996-25.937l2.58 37.417c13.405 4.443 27.804 5.316 41.93 4.334l4.183-15.341 4.391 14.491c16.88-2.238 33.84-8.066 44.289-21.239 11.552-14.563 12.166-36.804 1.434-51.982z"
        fill="#2f2e41"
      />
      <circle cx={719.5} cy={94.5} r={31} fill="#a0616a" />
      <path
        d="M699.5 109.5s2 24-11 26-27 0-27 8 10 81 10 81l25-2 35-34 19-37s-23-10-13-40z"
        fill="#a0616a"
      />
      <path
        d="M684.5 210.5l-10-27 2-37s21.957-3 21.478-21l-16.478 7-38 6v35s-13 21 2 42l7 44 72-5 23-30 29-57-30-22 4-6-15.302-9.98 2.302 18.98-7 12s-32 6-46 50z"
        fill="#d0cde1"
      />
      <path
        d="M649.5 140.5l-6-2s-12 5-12 21-48 174-48 174l22 6 30-73 18-61zM768.5 167.5h8s5-4 4 25 3 182 3 182l-29-2-7-165z"
        fill="#d0cde1"
      />
      <path
        d="M730.28 246.961s-67.78-12.46-82.78-.46a8.76 8.76 0 012 6c0 4 2-1 0 4s-6 1-2 5 5 3 3 6 0 8 0 8-11 52-1 89 93 298 115 291 77-39 74-50-104-163-104-163 42-131-8-173c0 0 3-4 2-7s-2 0-1-3 6-3 3-6-.22-6.54-.22-6.54z"
        fill="#2f2e41"
      />
      <path
        d="M684.5 354.5s-68 304-54 309 68 6 72 0 32-221 32-221zM686 72s25 30 75 13l-14-25-33-10z"
        fill="#2f2e41"
      />
      <path
        d="M254.908 450.69a130.443 130.443 0 01-5.793-1.734l.619-1.902a125.09 125.09 0 005.703 1.707zM314.49 457.335l-.044-2c4.005-.087 8.008-.288 11.898-.597l.158 1.994c-3.927.312-7.97.515-12.012.603zm-12.023-.061a237.572 237.572 0 01-12-.688l.164-1.994c3.974.329 7.977.558 11.9.682zm35.996-1.855l-.28-1.98c3.97-.562 7.915-1.252 11.726-2.053l.411 1.957a182.18 182.18 0 01-11.857 2.076zm-59.946-.116a203.555 203.555 0 01-11.876-1.9l.377-1.965c3.692.71 7.649 1.342 11.76 1.882zm83.49-4.854l-.55-1.922a152.139 152.139 0 0011.293-3.717l.7 1.873a153.61 153.61 0 01-11.442 3.766zm22.545-8.458l-.857-1.806a131.18 131.18 0 0010.489-5.566l1.017 1.723a133.287 133.287 0 01-10.65 5.65zm20.725-12.272l-1.177-1.617a121.13 121.13 0 004.148-3.163 135.307 135.307 0 005.094-4.286l1.324 1.5a135.868 135.868 0 01-5.171 4.348 121.763 121.763 0 01-4.218 3.218zm18.142-15.815l-1.41-1.418c2.92-2.902 5.842-5.933 8.35-8.546l1.443 1.385c-2.517 2.621-5.448 5.662-8.383 8.58zm16.692-17.183l-1.425-1.402c3.244-3.3 5.98-5.965 8.608-8.39l1.355 1.47c-2.603 2.402-5.316 5.047-8.538 8.322zm17.587-16.021l-1.224-1.582a96.067 96.067 0 019.977-6.811l1.018 1.721a93.998 93.998 0 00-9.77 6.672zm20.354-11.92l-.756-1.85a93.293 93.293 0 0111.474-3.815l.51 1.933a91.354 91.354 0 00-11.228 3.733zm22.842-6.112l-.301-1.978a145.827 145.827 0 0111.98-1.29l.135 1.995c-4.12.28-8.095.707-11.814 1.273zm35.642-1.507c-3.724-.129-7.11-.191-10.35-.191l-1.578.005-.013-2 1.59-.005c3.264 0 6.672.063 10.42.192zM554.5 362.09q-2.982-.184-5.985-.359l.115-1.997q3.006.174 5.993.36zM158.122 331.317q-1.135-2.772-2.293-5.534l1.844-.775q1.163 2.77 2.3 5.552zM206.78 422.162a128.378 128.378 0 01-8.44-9.905l1.586-1.22a126.298 126.298 0 008.306 9.75zm-15.918-20.536a194.979 194.979 0 01-6.653-11.15l1.75-.969a192.75 192.75 0 006.584 11.035zm-12.626-22.662a327.79 327.79 0 01-5.433-11.762l1.831-.804a325.525 325.525 0 005.4 11.69zm-10.465-23.687q-2.217-5.444-4.404-10.947l-.417-1.041 1.857-.744.417 1.042q2.195 5.488 4.4 10.936zM221.049 434.812a99.327 99.327 0 01-4.777-3.728l1.278-1.539a97.05 97.05 0 004.68 3.653zM22.77 249.466l-1.262-1.55a53.111 53.111 0 014.955-3.58l1.076 1.687a51.168 51.168 0 00-4.768 3.443zM136.34 286.893a151.282 151.282 0 00-7.353-10.656l1.594-1.208a153.424 153.424 0 017.45 10.798zm-15.663-20.562a114.785 114.785 0 00-3.046-3.15 85.243 85.243 0 00-6.33-5.694l1.262-1.551a87.479 87.479 0 016.479 5.828 118.058 118.058 0 013.1 3.204zm-19.928-16.238a92.365 92.365 0 00-11.487-5.844l.78-1.842a94.33 94.33 0 0111.736 5.971zm-61.683-9.54l-.632-1.898a60.023 60.023 0 0112.946-2.731l.2 1.99a58.002 58.002 0 00-12.514 2.639zm38.003-.45a78.948 78.948 0 00-12.665-2.22l.18-1.992a81.037 81.037 0 0112.986 2.275zM145.63 303.422a232.07 232.07 0 00-2.762-5.298l1.762-.947c.923 1.716 1.86 3.513 2.785 5.343zM8 269a8 8 0 118-8 8.01 8.01 0 01-8 8zm0-14a6 6 0 106 6 6.007 6.007 0 00-6-6zM152 323a8 8 0 118-8 8.01 8.01 0 01-8 8zm0-14a6 6 0 106 6 6.007 6.007 0 00-6-6zM233 449a8 8 0 118-8 8.01 8.01 0 01-8 8zm0-14a6 6 0 106 6 6.007 6.007 0 00-6-6zM234 416h2v6h-2zM236 404.425h-2V392.85h2zm0-23.15h-2V369.7h2zm0-23.15h-2v-11.576h2zm0-23.151h-2v-11.576h2zm0-23.15h-2v-11.576h2zm0-23.151h-2v-11.575h2zm0-23.15h-2v-11.576h2zm0-23.15h-2v-11.577h2zm0-23.152h-2v-11.575h2zM234 190.07h2v6h-2z"
        fill="#3f3d56"
      />
      <path
        d="M235 178c2.107 5.68 5.703 12.727 9.512 17.095l-9.512-3.44-9.51 3.44c3.809-4.368 7.405-11.415 9.51-17.095zM305 160H164V0h141zm-139-2h137V2H166z"
        fill="#3f3d56"
      />
      <path fill={color} d="M173 27h30v30h-30z" />
      <path
        d="M209 51h-32V19h32zm-30-2h28V21h-28zM239 31h41v2h-41zM239 39h41v2h-41zM178 73h102v2H178zM178 83h102v2H178zM178 93h102v2H178zM178 103h102v2H178zM178 113h102v2H178zM178 123h102v2H178z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgInspection.propTypes = {
  color: PropTypes.string
};
SvgInspection.defaultProps = {
  color: "primary"
};
export default SvgInspection;
