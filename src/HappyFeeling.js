import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHappyFeeling = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 743.404 753.134"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M655.726 286.728C614.099 123.042 470.265 4.883 301.436.144 212.18-2.36 118.257 27.241 49.875 130.83-72.362 316.004 57.39 443.965 147.849 504.77a566.027 566.027 0 01116.996 105.156c61.102 72.507 178.65 162.608 318.642 21.434 101.468-102.324 99.967-235.6 72.24-344.632z"
        fill="#f2f2f2"
      />
      <path
        d="M726.91 663.63c0 32.263-151.722 89.504-338.881 89.504S66.91 637.135 66.91 604.873 200.869 636.3 388.029 636.3s338.882-4.933 338.882 27.33z"
        fill="#3f3d56"
      />
      <path
        d="M726.91 663.63c0 32.263-151.722 89.504-338.881 89.504S66.91 637.135 66.91 604.873 200.869 636.3 388.029 636.3s338.882-4.933 338.882 27.33z"
        opacity={0.1}
      />
      <path
        d="M726.91 663.289c0 32.262-151.722 58.416-338.881 58.416S66.91 637.135 66.91 604.873s133.958 0 321.118 0 338.882 26.154 338.882 58.416z"
        fill="#3f3d56"
      />
      <g opacity={0.7}>
        <path
          d="M715.693 175.833c-12.292 23.858-51.251 51.972-75.11 39.68s-23.581-60.335-11.29-84.194a48.596 48.596 0 0186.4 44.514z"
          fill={color}
        />
        <path
          d="M642.602 221.822a8.05 8.05 0 00-8.328-4.29l4.29-8.328 8.328 4.29z"
          fill={color}
        />
        <path
          d="M636.532 213.202a10.305 10.305 0 008.36 4.264"
          fill="none"
          stroke="#2f2e41"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <ellipse
          cx={928.133}
          cy={218.044}
          rx={12.295}
          ry={10.246}
          transform="rotate(-62.742 753.764 368.546)"
          fill="#fff"
          opacity={0.4}
        />
        <path
          fill="none"
          stroke="#2f2e41"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M640.36 215.811l-36.255 91.233"
        />
      </g>
      <path
        d="M723.346 322.185c-26.912 27.15-91.872 48.665-119.022 21.753s-6.208-92.059 20.704-119.209a69.217 69.217 0 0198.318 97.456z"
        fill="#ff6584"
      />
      <path
        d="M604.366 353.373a11.466 11.466 0 00-9.477-9.393l9.394-9.477 9.476 9.394z"
        fill="#ff6584"
      />
      <path
        d="M599.81 339.066a14.677 14.677 0 009.532 9.37M602.516 346.228l-89.236 90.025"
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <ellipse
        cx={943.466}
        cy={346.415}
        rx={17.513}
        ry={14.594}
        transform="rotate(-45.252 741.225 583.57)"
        fill="#fff"
        opacity={0.4}
      />
      <path
        d="M639.232 234.23c-8.868 37.185-53.165 89.343-90.35 80.475s-53.176-75.404-44.308-112.589a69.217 69.217 0 01134.658 32.114z"
        fill={color}
      />
      <path
        d="M553.824 322.742a11.466 11.466 0 00-12.98-3.095l3.096-12.979 12.98 3.095z"
        fill={color}
      />
      <path
        d="M542.492 312.89a14.677 14.677 0 0013.015 3.048"
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <ellipse
        cx={834.958}
        cy={269.889}
        rx={17.513}
        ry={14.594}
        transform="rotate(-76.587 674.307 377.744)"
        fill="#fff"
        opacity={0.4}
      />
      <path
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M548.676 317.585l-29.405 123.3"
      />
      <g opacity={0.8}>
        <path
          d="M227.064 560.278c-19.33 18.81-65.43 33.161-84.24 13.83s-3.207-65.02 16.123-83.83a48.837 48.837 0 0168.117 70z"
          fill={color}
        />
        <path
          d="M142.734 580.765a8.09 8.09 0 00-6.566-6.747l6.747-6.566 6.566 6.748z"
          fill={color}
        />
        <path
          d="M139.702 570.614a10.356 10.356 0 006.605 6.732"
          fill="none"
          stroke="#2f2e41"
          strokeMiterlimit={10}
          strokeWidth={2}
        />
        <ellipse
          cx={450.22}
          cy={598.897}
          rx={12.356}
          ry={10.297}
          transform="rotate(-44.219 245.69 843.164)"
          fill="#fff"
          opacity={0.4}
        />
      </g>
      <path
        d="M436.859 163.886h13.58a33.592 33.592 0 0133.592 33.592v47.173h-80.765v-47.173a33.592 33.592 0 0133.593-33.592z"
        fill="#2f2e41"
      />
      <path
        d="M398.311 374.183l-10.192 21.43s-8.308 28.788 1.105 31.865 11.252-29.542 11.252-29.542l7.796-21.6z"
        fill="#ffb9b9"
      />
      <path
        d="M398.311 374.183l-10.192 21.43s-8.308 28.788 1.105 31.865 11.252-29.542 11.252-29.542l7.796-21.6z"
        opacity={0.1}
      />
      <path
        fill="#575a89"
        d="M400.242 340.643l-12.891 45.117 20.411 10.742v-53.711l-7.52-2.148z"
      />
      <path
        d="M435.154 220.867s-1.074 17.188-3.223 17.188-6.445 20.41-6.445 20.41l18.262 11.816 22.558-20.41-6.445-16.113s-3.223-6.445-2.148-12.89-22.559 0-22.559 0z"
        fill="#ffb9b9"
      />
      <path
        d="M435.154 220.867s-1.074 17.188-3.223 17.188-6.445 20.41-6.445 20.41l18.262 11.816 22.558-20.41-6.445-16.113s-3.223-6.445-2.148-12.89-22.559 0-22.559 0z"
        opacity={0.1}
      />
      <path
        d="M502.83 391.668l2.148 23.633s7.52 29.004 17.188 26.856-5.371-31.153-5.371-31.153l-4.297-22.558zM456.639 624.774s6.445 39.746 2.148 47.265 4.297 8.594 4.297 8.594l25.781-6.445V662.37s-8.594-38.671-8.594-40.82-23.632 3.223-23.632 3.223z"
        fill="#ffb9b9"
      />
      <path
        d="M404.002 446.453s7.52 77.344 19.336 102.051 22.558 92.383 27.93 93.457 46.19-6.445 51.562-10.742-36.523-108.496-36.523-109.57-9.668-96.68-9.668-96.68l-12.891-21.484z"
        fill="#2f2e41"
      />
      <path
        d="M404.002 446.453s7.52 77.344 19.336 102.051 22.558 92.383 27.93 93.457 46.19-6.445 51.562-10.742-36.523-108.496-36.523-109.57-9.668-96.68-9.668-96.68l-12.891-21.484z"
        opacity={0.1}
      />
      <path
        d="M466.306 669.891s-10.742-5.371-12.89-2.148l-8.594 12.89S408.3 697.821 421.19 699.97s37.598 2.149 40.82 0 38.673-21.484 37.598-22.559-9.668-23.632-10.742-21.484-16.113 18.262-22.558 13.965z"
        fill="#2f2e41"
      />
      <path
        d="M285.838 578.582s-24.707 17.188-36.524 13.965 0 23.633 0 23.633l21.485 11.816 6.445-5.37s22.559-30.079 32.227-31.153-23.633-12.89-23.633-12.89z"
        fill="#ffb9b9"
      />
      <path
        d="M397.556 382l4.297 22.559-80.566 122.46s-48.34 48.34-44.043 53.712 31.152 36.523 37.598 32.226 155.761-165.43 154.687-186.914-36.523-62.304-36.523-62.304l-35.45 16.113zM254.685 600.067s9.668-10.742 4.297-11.817a160.39 160.39 0 00-18.262-2.148c-2.148 0-31.152-15.04-33.3-9.668s12.89 33.3 21.484 36.523 39.746 25.782 39.746 25.782 16.113-13.965 13.965-17.188-32.227-9.668-27.93-21.484z"
        fill="#2f2e41"
      />
      <circle cx={443.748} cy={205.828} r={25.781} fill="#ffb9b9" />
      <path
        d="M449.119 244.5s-18.262 1.074-23.633-2.148-17.187 44.043-17.187 44.043l-7.52 62.304s-1.074 7.52 0 11.817-10.742-2.149-6.445 9.668-3.223 17.187 4.297 18.262 47.265-15.04 47.265-15.04l18.262-95.605 5.371-38.672z"
        fill="#d0cde1"
      />
      <path
        d="M433.234 235.774s-9.896-2.016-13.119.132-15.039 18.262-15.039 22.56-4.297 51.562-4.297 55.858-3.223 26.856-3.223 29.004 2.756 11.383 2.756 11.383l6.912-12.457s-2.148-16.113 5.372-41.894 20.638-64.586 20.638-64.586zM443.748 252.02s14.35-22.559 15.232-20.41 16.994 5.37 16.994 5.37 29.004 20.41 26.856 29.005-17.188 73.046-17.188 73.046-13.964 33.301-3.222 56.934-2.149 32.227-2.149 32.227-8.593 4.297-6.445 8.593-24.707 20.41-27.93 8.594-42.968-82.715-34.375-108.496 32.227-84.863 32.227-84.863z"
        fill="#575a89"
      />
      <path
        d="M497.459 262.762s11.816 22.559 9.668 25.781 7.52 22.559 7.52 22.559a7.44 7.44 0 000 5.37c1.074 3.224 7.519 17.188 7.519 22.56s-1.074 22.558 0 30.078 15.039 25.78 3.223 26.855-31.153 10.742-30.079 0 4.297-36.523 0-40.82-7.52-4.297-5.37-9.668-9.669-19.336-9.669-19.336z"
        fill="#575a89"
      />
      <path
        fill="#2f2e41"
        d="M465.29 199.477h-40.776l-9.233-21.218h56.934l-6.925 21.218z"
      />
      <ellipse
        cx={645.938}
        cy={283.177}
        rx={2.053}
        ry={5.476}
        transform="rotate(-16.16 273.16 1050.518)"
        fill="#ffb9b9"
      />
      <ellipse
        cx={697.271}
        cy={283.177}
        rx={5.476}
        ry={2.053}
        transform="rotate(-73.84 534.256 398.382)"
        fill="#ffb9b9"
      />
      <path
        d="M711.91 618.979c0 24.952-14.832 33.664-33.13 33.664-.424 0-.85-.006-1.27-.011q-1.275-.035-2.516-.121c-16.516-1.167-29.343-10.327-29.343-33.532 0-24.01 30.676-54.307 32.992-56.56a.006.006 0 00.006-.005c.086-.08.132-.127.132-.127s33.13 31.74 33.13 56.692z"
        fill="#f2f2f2"
      />
      <path
        d="M677.574 648.827l12.114-16.93-12.143 18.787-.034 1.948q-1.276-.035-2.517-.121l1.304-24.958-.011-.195.023-.035.126-2.362-12.177-18.832 12.212 17.062.028.506.989-18.861-10.425-19.464 10.551 16.148 1.029-39.1.006-.133v.127l-.173 30.837 10.379-12.224-10.425 14.879-.27 16.89 9.69-16.207-9.73 18.689-.155 9.39 14.068-22.556-14.12 25.832z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgHappyFeeling.propTypes = {
  color: PropTypes.string
};
SvgHappyFeeling.defaultProps = {
  color: "primary"
};
const MemoSvgHappyFeeling = React.memo(SvgHappyFeeling);
export default MemoSvgHappyFeeling;
