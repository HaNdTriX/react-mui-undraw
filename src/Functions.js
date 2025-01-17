import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFunctions = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1200 663"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1200 0v663H986.44q-4.53 0-9.06-.06l-2.16-.03q-3.675-.045-7.35-.15-11.25-.27-22.46-.86c-124.91-6.48-246.54-42.61-355.85-104.26C328.79 410.55 0 476.15 0 476.15V0z"
        fill={color}
      />
      <path
        opacity={0.1}
        d="M252.36 0l-64.09 44-71.23 48.9-7.64 5.25L51 138.24 0 173.25V82.56l23-15.79 4.89-3.36L51 47.55 56.16 44l64.1-44h132.1zM425 0L324 69.34l-96.96 66.56-7.64 5.25-7.07 4.85L0 291.76v-90.7L80.22 146 133 109.77l4.89-3.36L228.8 44l64.1-44H425z"
      />
      <path d="M1148 334H778V87h370zm-368-2h366V89H780z" fill="#d0cde1" />
      <path
        fill="#3f3d56"
        d="M860 191h44v116h-44zM941 236h44v71h-44zM1022 143h44v164h-44z"
      />
      <circle cx={963} cy={191} r={22} fill="#3f3d56" />
      <path
        d="M325 147H50V43h275zm-273-2h271V45H52zM630 321H480v-73h150zm-148-2h146v-69H482z"
        fill="#d0cde1"
      />
      <path fill="#3f3d56" d="M161.5 72.5l52 23-52 22v-45z" />
      <circle cx={521} cy={284.5} r={11} fill="#3f3d56" />
      <circle cx={555} cy={284.5} r={11} fill="#3f3d56" />
      <circle cx={589} cy={284.5} r={11} fill="#3f3d56" />
      <path
        d="M553.257 168.861l-10.198 13.044c-16.26-23.07-35.73-41.771-57.928-55.594a188.158 188.158 0 00-60.648-24.309c-37.034-7.857-65.597-2.557-65.881-2.503l.686 3.584c.278-.054 28.116-5.217 64.438 2.489 32.899 6.98 79.478 26.264 116.211 78.248l-16.082 3.479c10.12 3.06 22.51 10.467 31.272 17.204-2.25-10.82-3.523-25.198-1.87-35.642zM830.743 387.257c-.221.176-22.564 17.77-58.335 27.84-32.334 9.106-82.482 13.688-139.13-15.182l12.612-10.564c-10.382 2.004-24.795 1.217-35.684-.668 7.028 8.53 14.848 20.662 18.248 30.675l2.954-16.295c25.131 12.846 51.068 20.332 77.15 22.229q6.71.49 13.439.488a189.386 189.386 0 0051.552-7.212c36.434-10.29 59.244-28.279 59.47-28.459zM278.257 362.257c.221.176 22.564 17.77 58.335 27.84 32.334 9.106 82.482 13.688 139.13-15.182l-12.612-10.564c10.382 2.004 24.795 1.217 35.684-.668-7.028 8.53-14.848 20.662-18.248 30.675l-2.954-16.295c-25.131 12.846-51.068 20.332-77.15 22.229q-6.71.49-13.439.488a189.386 189.386 0 01-51.552-7.212c-36.434-10.29-59.244-28.279-59.47-28.459zM227.5 408.711h-154v-154h154zm-151.861-2.138H225.36V256.85H75.64z"
        fill="#d0cde1"
      />
      <path
        fill="#3f3d56"
        d="M103.444 303.419h94.111v8.584h-94.111zM103.444 327.419h94.111v8.584h-94.111zM103.444 351.419h94.111v8.584h-94.111zM685.896 110.135a12 12 0 1112 12 12.013 12.013 0 01-12-12zm2 0a10 10 0 1010-10 10.011 10.011 0 00-10 10zM825.581 550.872l-17.664-18.938 18.938-17.664 17.664 18.938zm-14.848-18.84l14.946 16.024 16.025-14.946-14.947-16.024zM357.581 222.872l-17.664-18.938 18.938-17.664 17.664 18.938zm-14.848-18.84l14.946 16.024 16.025-14.946-14.947-16.024z"
      />
      <circle cx={1004.032} cy={383.394} r={66.944} fill="#2f2e41" />
      <path
        d="M1093.68 663H986.44q-4.53 0-9.06-.06l-2.16-.03q-3.675-.045-7.35-.15l-2.38-9.41 4.76-.81 5.72-.97 54.88-9.32 45.7-7.76a9.828 9.828 0 014.3.21 10.007 10.007 0 017.37 8.92c.46 6.23 1.84 13.84 5.46 19.38z"
        fill="#2f2e41"
      />
      <circle cx={992.111} cy={407.925} r={43.99} fill="#a0616a" />
      <path
        d="M992.111 447.284s15.435 39.36 3.087 46.305-18.522 7.718-18.522 7.718l-13.12 22.38-7.717 23.153 61.74 2.316 43.218-68.687s-20.837-10.804-31.642-57.11z"
        fill="#a0616a"
      />
      <path
        d="M1072.76 481.627s-7.85-5.157-15.116-3.35a56.17 56.17 0 00-10.352 3.35s-40.132 54.795-61.74 56.338c0 0-28.556 7.718-21.61-3.859s22.165-35.941 22.165-35.941-27.567 6.615-27.567 15.876-5.402 26.24-5.402 26.24-26.24 26.24 0 57.11 16.206 58.653 16.206 58.653l115.764-20.838z"
        fill="#d0cde1"
      />
      <path
        d="M967.87 662.76q-11.25-.27-22.46-.86l4.48-68.68.93-14.35 20.84 39.36s1.86 13.75 4.31 33.34c.14 1.05.27 2.11.41 3.2.32 2.64.66 5.37 1 8.17l-2.16-.03q-3.675-.045-7.35-.15z"
        fill="#d0cde1"
      />
      <circle cx={1031.769} cy={322.519} r={27.701} fill="#2f2e41" />
      <path
        d="M994.835 307.514a27.704 27.704 0 0124.815-27.55 28.007 28.007 0 00-2.885-.15 27.701 27.701 0 000 55.401 28.007 28.007 0 002.885-.15 27.704 27.704 0 01-24.815-27.55z"
        fill="#2f2e41"
      />
      <ellipse
        cx={996.693}
        cy={382.667}
        rx={27.701}
        ry={46.168}
        transform="rotate(-75.118 997.018 382.917)"
        fill="#2f2e41"
      />
      <path
        d="M1083.24 611.91c-.9 9.18-1.75 17.08-2.39 22.79-.06.45-.1.88-.15 1.3-.61 5.35-.99 8.47-.99 8.47l-9.17 18.53h-48.88c2.82-6.44 5.48-12.45 7.86-17.79.46-1.01.9-2 1.33-2.96 5.35-11.87 9.11-19.79 9.88-20.55 3.09-3.09 12.74-135.44 12.74-135.44s7.48-6.41 15.68-6.5h.01c5.73-.07 11.82 2.96 15.95 13.44 6.74 17.12 1.98 79.61-1.87 118.71z"
        fill="#d0cde1"
      />
      <path
        d="M955.459 600.232s17.03 36.114 15.65 45.77-15.65-45.77-15.65-45.77z"
        opacity={0.1}
      />
      <ellipse
        cx={1039.188}
        cy={405.609}
        rx={3.859}
        ry={7.718}
        fill="#a0616a"
      />
    </svg>
  );
};

SvgFunctions.propTypes = {
  color: PropTypes.string
};
SvgFunctions.defaultProps = {
  color: "primary"
};
export default SvgFunctions;
