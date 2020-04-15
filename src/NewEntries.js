import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgNewEntries = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg viewBox="0 0 804.739 610.284" width="100%" height="auto" {...props}>
      <g data-name="Group 42" transform="translate(-194 -123)">
        <ellipse
          data-name="Ellipse 218"
          cx={76.325}
          cy={17.583}
          rx={76.325}
          ry={17.583}
          transform="translate(835.095 698.117)"
          fill="#e6e6e6"
        />
        <path
          data-name="Path 1092"
          d="M910.42 266.137v23l12 30 19-34v-26z"
          fill="#a0616a"
        />
        <path
          data-name="Path 1093"
          d="M856.919 444.637l-3 22s-7 24 3 24 10-26 10-26l2-15z"
          fill="#a0616a"
        />
        <path
          data-name="Path 1094"
          d="M977.919 441.637l-3 22s-7 24 3 24 10-26 10-26l2-15z"
          fill="#a0616a"
        />
        <path
          data-name="Path 1095"
          d="M885.419 419.137l-4.706 1.3s-12.294 79.7-13.294 121.7-3 148-3 148h32l21-180 10 180h34s14-236 5-255-81-16-81-16z"
          fill="#2f2e41"
        />
        <path
          data-name="Path 1096"
          d="M866.419 688.137l-9 14s-25 21-3 20 31-11 31-11v3l12-4-2-22z"
          fill="#2f2e41"
        />
        <path
          data-name="Path 1097"
          d="M958.419 688.137l9 14s25 21 3 20-31-11-31-11v3l-12-4 2-22z"
          fill="#2f2e41"
        />
        <circle
          data-name="Ellipse 219"
          cx={22}
          cy={22}
          r={22}
          transform="translate(900.92 227.636)"
          fill="#a0616a"
        />
        <path
          data-name="Path 1098"
          d="M921.42 304.137l-11-22.524-5 11.524-2 99 46-103-8-8.847z"
          fill="#575a89"
        />
        <path
          data-name="Path 1099"
          d="M982.419 309.137l-36.464-23.83s-2.536 22.83-25.536 20.83-12.25-19.342-12.25-19.342l-36.75 20.342 14 78-6 45s54-6 66 3a51.277 51.277 0 0024 10l-2-77z"
          fill="#d1d1d1"
        />
        <path
          data-name="Path 1100"
          d="M971.419 313.137l6.918-6.668 5.082 3.668s5 6 9 24 2 98 2 98l-22-3 1-33-9-44z"
          fill="#d1d1d1"
        />
        <path
          data-name="Path 1101"
          d="M878.419 306.137l-3.778-.784-3.222 1.784s-9 12-9 23-9 105-9 105l20 9 14-71z"
          fill="#d1d1d1"
        />
        <path
          data-name="Path 1102"
          d="M997.419 434.137s-20-12-27-4 4 16 4 16 31 12 23-12z"
          fill="#575a89"
        />
        <path
          data-name="Path 1103"
          d="M875.419 440.137s-20-12-27-4 4 16 4 16 31 12 23-12z"
          fill="#575a89"
        />
        <path
          data-name="Path 1104"
          d="M942.186 233.506s5.754-11-6.905-12c0 0-11.508-7-20.715 1 0 0-8.056-2-10.358 4 0 0-1.151-3 2.3-5 0 0-8.056-2-8.056 8 0 0-3.453 10 0 19s4.6 10 4.6 10-5.674-18.869 8.137-19.869 29.266-9.631 30.417 1.369 3.453 14 3.453 14 10.362-16-2.873-20.5z"
          fill="#2f2e41"
        />
        <path
          data-name="Path 1105"
          d="M462.29 647.304h-.137c-5.113 0-10.289-.152-15.382-.453l.076-1.286c5.069.3 10.219.451 15.307.451h.137zm15.524-.47l-.077-1.286c5.123-.307 10.3-.774 15.387-1.388l.155 1.279a258.708 258.708 0 01-15.46 1.396zm-46.51-1.362a258.362 258.362 0 01-15.356-2.307l.23-1.269a260.642 260.642 0 0015.279 2.3zm77.328-2.358l-.232-1.269a254.67 254.67 0 0015.107-3.234l.308 1.251c-5 1.231-10.112 2.325-15.184 3.251zm-107.872-3.188a256.278 256.278 0 01-14.964-4.151l.383-1.231c4.9 1.521 9.907 2.91 14.889 4.131zm138.015-4.234l-.384-1.231c4.89-1.524 9.8-3.221 14.6-5.045l.458 1.206a254.759 254.759 0 01-14.674 5.073zm-167.691-4.981a256.97 256.97 0 01-14.371-5.949l.529-1.176c4.69 2.111 9.5 4.1 14.3 5.919zm196.688-6.032l-.53-1.176c4.668-2.1 9.334-4.382 13.868-6.767l.6 1.14a254.38 254.38 0 01-13.938 6.806zm-225.038-6.729a255.676 255.676 0 01-13.537-7.643l.667-1.1a256.368 256.368 0 0013.469 7.606zm252.485-7.705l-.667-1.1a257.275 257.275 0 0012.959-8.395l.733 1.06a265.496 265.496 0 01-13.025 8.435zm-279.064-8.38a260.25 260.25 0 01-12.513-9.214l.8-1.015a257.665 257.665 0 0012.45 9.169zm304.584-9.266l-.8-1.015c4.046-3.175 8.037-6.5 11.863-9.9l.856.964a260.063 260.063 0 01-11.923 9.947zm-329.03-9.9c-3.861-3.42-7.667-7-11.312-10.644l.911-.911a258.883 258.883 0 0011.255 10.591zm352.258-10.7l-.911-.911c3.632-3.632 7.2-7.417 10.6-11.251l.964.856a259.29 259.29 0 01-10.65 11.306zm-374.22-11.248a259.398 259.398 0 01-9.951-11.918l1.013-.8c3.164 4.028 6.5 8.018 9.9 11.858zm394.821-11.975l-1.015-.8a259.086 259.086 0 009.174-12.445l1.06.733a256.805 256.805 0 01-9.219 12.512zm-413.992-12.424a258.264 258.264 0 01-8.444-13.018l1.1-.67a258.75 258.75 0 008.4 12.955zm431.664-13.126l-1.1-.667a256.504 256.504 0 007.612-13.465l1.14.6a258.564 258.564 0 01-7.652 13.532zm-447.751-13.394a257.613 257.613 0 01-6.809-13.935l1.174-.531a256.122 256.122 0 006.775 13.864zm462.219-14.115l-1.176-.529c2.116-4.7 4.11-9.506 5.926-14.3l1.206.458a258.04 258.04 0 01-5.957 14.368zm-474.979-14.136a256.334 256.334 0 01-5.079-14.675l1.23-.385a255.765 255.765 0 005.053 14.6zm486.01-14.94l-1.231-.383c1.524-4.9 2.917-9.907 4.139-14.886l1.251.307a257.13 257.13 0 01-4.159 14.961zm-495.265-14.693c-1.234-5-2.33-10.107-3.259-15.183l1.268-.232a255.52 255.52 0 003.243 15.105zm502.668-15.456l-1.269-.232a254.891 254.891 0 002.3-15.276l1.279.154a254.796 254.796 0 01-2.31 15.353zm-508.26-15.078a257.504 257.504 0 01-1.4-15.464l1.286-.078c.31 5.123.78 10.3 1.4 15.386zm511.962-15.742l-1.286-.076c.3-5.114.458-10.309.458-15.444v-.545h1.289v.545c0 5.16-.155 10.381-.461 15.52zm-512.555-15.246H205v-.273c0-5.071.149-10.2.444-15.246l1.286.076a261.58 261.58 0 00-.442 15.171zm511.235-16.263a258.973 258.973 0 00-1.412-15.385l1.279-.156c.624 5.105 1.1 10.307 1.42 15.462zm-509.429-14.57l-1.28-.152c.61-5.12 1.383-10.287 2.3-15.357l1.269.229a256.025 256.025 0 00-2.289 15.28zm505.678-16.087a255.383 255.383 0 00-3.26-15.1l1.251-.31c1.237 4.99 2.339 10.1 3.277 15.179zm-500.178-14.309l-1.252-.306c1.223-5 2.617-10.04 4.144-14.966l1.231.381a254.007 254.007 0 00-4.122 14.891zm492.748-15.671a255.155 255.155 0 00-5.068-14.6l1.2-.459a258.68 258.68 0 015.1 14.67zM222.75 299.667l-1.206-.456a258.205 258.205 0 015.942-14.375l1.176.529a255.904 255.904 0 00-5.912 14.302zm472.59-14.976a256.894 256.894 0 00-6.791-13.857l1.14-.6c2.406 4.553 4.7 9.239 6.824 13.927zm-459.911-13.237l-1.142-.6a256.768 256.768 0 017.636-13.541l1.1.667a260.027 260.027 0 00-7.594 13.474zm445.5-14.045a259.215 259.215 0 00-8.417-12.945l1.06-.735a259.946 259.946 0 018.458 13.011zm-429.51-12.415l-1.061-.733a260.565 260.565 0 019.207-12.517l1.015.794a265.96 265.96 0 00-9.161 12.456zm411.91-12.95a262.008 262.008 0 00-9.915-11.848l.964-.856a260.528 260.528 0 019.963 11.907zm-392.854-11.382l-.965-.855c3.416-3.86 7-7.668 10.637-11.316l.913.91a257.565 257.565 0 00-10.585 11.261zm372.334-11.7a261.205 261.205 0 00-11.267-10.579l.853-.965a260.815 260.815 0 0111.323 10.632zm-350.511-10.166l-.856-.964a259.58 259.58 0 0111.912-9.958l.8 1.013a259.897 259.897 0 00-11.856 9.909zm327.361-10.3a256.708 256.708 0 00-12.461-9.155l.733-1.061a258.042 258.042 0 0112.521 9.2zm-303.085-8.788l-.734-1.06a258.205 258.205 0 0113.016-8.451l.669 1.1a257.249 257.249 0 00-12.951 8.41zm277.633-8.755a257.86 257.86 0 00-13.476-7.59l.6-1.142a258.942 258.942 0 0113.545 7.628zm-251.253-7.264l-.6-1.14c4.555-2.4 9.242-4.7 13.931-6.817l.531 1.174a254.661 254.661 0 00-13.86 6.783zm223.865-7.084c-4.691-2.1-9.5-4.091-14.305-5.9l.456-1.206a256.774 256.774 0 0114.377 5.934zm-195.76-5.624l-.459-1.2a256.947 256.947 0 0114.674-5.086l.385 1.23a250.338 250.338 0 00-14.603 5.056zm166.811-5.3c-4.9-1.516-9.912-2.9-14.893-4.115l.306-1.252c5 1.22 10.041 2.612 14.968 4.136zm-137.333-3.92l-.31-1.251a256.09 256.09 0 0115.181-3.267l.233 1.268a253.656 253.656 0 00-15.1 3.251zm107.326-3.4a255.825 255.825 0 00-15.281-2.281l.151-1.28a256.808 256.808 0 0115.359 2.292zm-76.949-2.183l-.156-1.28c5.109-.622 10.311-1.1 15.463-1.412l.078 1.286c-5.126.313-10.3.785-15.385 1.4zm46.275-1.452a261.473 261.473 0 00-15.036-.434h-.41v-1.289h.41c5.024 0 10.109.147 15.11.437z"
          fill="#3f3b56"
        />
        <path
          data-name="Rectangle 316"
          fill={color}
          d="M568.796 553.255h152.813v114.61H568.796z"
        />
        <path
          data-name="Rectangle 317"
          fill="#fff"
          d="M587.897 583.818h114.61v7.641h-114.61z"
        />
        <path
          data-name="Rectangle 318"
          fill="#fff"
          d="M587.897 606.74h114.61v7.641h-114.61z"
        />
        <path
          data-name="Rectangle 319"
          fill="#fff"
          d="M587.897 629.662h114.61v7.641h-114.61z"
        />
        <path
          data-name="Rectangle 320"
          fill="#e6e6e6"
          d="M202 123h106.739v80.054H202z"
        />
        <path
          data-name="Rectangle 321"
          fill="#fff"
          d="M215.342 144.348h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 322"
          fill="#fff"
          d="M215.342 160.358h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 323"
          fill="#fff"
          d="M215.342 176.369h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 324"
          fill={color}
          d="M247.364 164.361h106.739v80.054H247.364z"
        />
        <path
          data-name="Rectangle 325"
          fill="#fff"
          d="M260.706 185.709h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 326"
          fill="#fff"
          d="M260.706 201.72h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 327"
          fill="#fff"
          d="M260.706 217.73h80.054v5.337h-80.054z"
        />
        <path
          data-name="Subtraction 1"
          d="M608 499H317V281h291v218zM320 284v212h285V284z"
          fill="#e6e6e6"
        />
        <g data-name="Group 41" transform="translate(-9.234 -16.468)">
          <circle
            data-name="Ellipse 220"
            cx={55.409}
            cy={55.409}
            transform="translate(416.234 351.468)"
            fill={color}
            r={55.409}
          />
          <path
            data-name="Path 1106"
            d="M494.652 402.224h-18.839v-18.839a4.433 4.433 0 00-4.433-4.433 4.433 4.433 0 00-4.433 4.433v18.839h-18.839a4.433 4.433 0 00-4.433 4.433 4.433 4.433 0 004.433 4.433h18.839v18.839a4.433 4.433 0 004.433 4.433 4.433 4.433 0 004.433-4.433V411.09h18.839a4.433 4.433 0 004.433-4.433 4.433 4.433 0 00-4.433-4.433z"
            fill="#fff"
          />
        </g>
        <path
          data-name="Rectangle 341"
          fill="#e6e6e6"
          d="M194 534h106.739v80.054H194z"
        />
        <path
          data-name="Rectangle 342"
          fill="#fff"
          d="M207.342 555.348h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 343"
          fill="#fff"
          d="M207.342 571.358h80.054v5.337h-80.054z"
        />
        <path
          data-name="Rectangle 344"
          fill="#fff"
          d="M207.342 587.369h80.054v5.337h-80.054z"
        />
      </g>
    </svg>
  );
};

SvgNewEntries.propTypes = {
  color: PropTypes.string
};
SvgNewEntries.defaultProps = {
  color: "primary"
};
export default SvgNewEntries;
