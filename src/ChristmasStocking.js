import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgChristmasStocking = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 480 750.13"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M362.86 425.45c0 80.87-59.28 146.42-132.41 146.42S98 506.32 98 425.45q0-6.17.46-12.21c3.42-45.87 26-85.76 58.82-109.86a.15.15 0 01.07-.05 122.93 122.93 0 0173.1-24.27 121.42 121.42 0 0157 14.2 4.73 4.73 0 01.45.23c39.24 20.92 67.73 62.61 73.78 112.16a157.9 157.9 0 011.18 19.8z"
        fill="#975656"
      />
      <path
        d="M362.86 425.45c0 80.87-59.28 146.42-132.41 146.42S98 506.32 98 425.45q0-6.17.46-12.21c3.42-45.87 26-85.76 58.82-109.86a.15.15 0 01.07-.05 122.93 122.93 0 0173.1-24.27 121.42 121.42 0 0157 14.2 4.73 4.73 0 01.45.23c39.24 20.92 67.73 62.61 73.78 112.16a157.9 157.9 0 011.18 19.8z"
        opacity={0.1}
      />
      <path
        d="M361.64 405.63c-17.44-59.36-69.3-102.4-130.55-102.4-63.85 0-117.48 46.76-132.59 110 3.42-45.87 26-85.76 58.82-109.86a.15.15 0 01.07-.05 129.33 129.33 0 01130-10.09 4.73 4.73 0 01.45.23c39.26 20.93 67.75 62.6 73.8 112.17z"
        opacity={0.1}
      />
      <path
        d="M445.62 123.47v31.43a12.09 12.09 0 01-12.09 12.09 12.09 12.09 0 01-12.1-12.09V47.98a8.91 8.91 0 00-3.12-6.74q-5.71-5-12.06-9.57a8.85 8.85 0 00-14.1 7.09V154.9a12.09 12.09 0 01-12.1 12.09A12.09 12.09 0 01368 154.9V15.06a8.83 8.83 0 00-5.3-8.1c-1.11-.49-2.24-1-3.37-1.45a8.82 8.82 0 00-12.17 7.18c-9.26 83.38-54.55 146.67-109 146.67-55.49 0-101.45-65.67-109.51-151.35A8.82 8.82 0 00116.87.54L114 1.61a8.83 8.83 0 00-5.71 8.27v145a12.09 12.09 0 01-12.09 12.09A12.09 12.09 0 0184 154.9V30.21a8.82 8.82 0 00-13.41-7.56q-6.31 3.9-12.16 8.09a8.88 8.88 0 00-3.71 7.2v117a12.09 12.09 0 01-12.1 12.09 12.09 12.09 0 01-12.09-12.09V82.43c0-9.07-12-12.22-16.52-4.36-9.08 15.82-14 32.9-14 50.73 0 81.56 103.75 147.69 231.72 147.69s231.72-66.13 231.72-147.69c0-2-.07-4-.19-6-.71-11.32-17.64-10.65-17.64.67z"
        fill="#373e46"
      />
      <g opacity={0.1}>
        <path d="M368 171.45a12.1 12.1 0 0024.19 0V154.9a12.1 12.1 0 01-24.19 0zM113.93 18.15l2.87-1.09a8.81 8.81 0 0111.78 7.46c8.06 85.68 54 151.36 109.51 151.36 54.48 0 99.77-63.3 109-146.68a8.82 8.82 0 0112.2-7.14c1.13.48 2.26 1 3.37 1.45a8.85 8.85 0 015.3 8.1V15.06a8.83 8.83 0 00-5.3-8.1c-1.11-.49-2.24-1-3.37-1.45a8.82 8.82 0 00-12.17 7.18c-9.26 83.38-54.55 146.67-109 146.67-55.49 0-101.45-65.67-109.51-151.35A8.82 8.82 0 00116.83.54l-2.87 1.07a8.83 8.83 0 00-5.71 8.27v16.55a8.83 8.83 0 015.68-8.28zM463 137.7c.27-2.95.43-5.91.43-8.9 0-2-.07-4-.19-6-.71-11.3-17.64-10.63-17.64.69v16.57c.02-10.78 15.25-11.92 17.4-2.36zM421.43 171.45a12.1 12.1 0 0024.19 0V154.9a12.1 12.1 0 01-24.19 0zM406.25 48.22q6.33 4.62 12.06 9.57a8.91 8.91 0 013.12 6.74V47.98a8.91 8.91 0 00-3.12-6.74q-5.71-5-12.06-9.57a8.85 8.85 0 00-14.1 7.09v16.56a8.85 8.85 0 0114.1-7.1zM14 94.62c4.51-7.86 16.52-4.7 16.52 4.37V82.43c0-9.07-12-12.22-16.52-4.36-9.08 15.82-14 32.9-14 50.73 0 2.78.13 5.55.37 8.29A102.83 102.83 0 0114 94.62zM30.56 171.45a12.1 12.1 0 0024.19 0V154.9a12.1 12.1 0 01-24.19 0zM84 171.45a12.1 12.1 0 0024.19 0V154.9a12.1 12.1 0 01-24.19 0zM58.46 47.29q5.84-4.19 12.16-8.08A8.82 8.82 0 0184 46.76V30.21a8.82 8.82 0 00-13.41-7.56q-6.31 3.9-12.16 8.09a8.88 8.88 0 00-3.71 7.2V54.5a8.88 8.88 0 013.74-7.21z" />
      </g>
      <path
        d="M328.45 221.54a17.23 17.23 0 01-2.51.2H129.87a17.12 17.12 0 01-2.51-.2 104.54 104.54 0 0177.56-73.65h46a104.54 104.54 0 0177.53 73.65z"
        opacity={0.1}
      />
      <path
        d="M334.85 249.75a104.25 104.25 0 11-3.85-28.21 104.39 104.39 0 013.85 28.21z"
        fill="#975656"
      />
      <path
        d="M129.91 231.72a104.37 104.37 0 01204.81 23.24c.09-1.73.13-3.46.13-5.21a104.4 104.4 0 10-208.8 0c0 1.75 0 3.48.13 5.21a104.72 104.72 0 013.73-23.24z"
        opacity={0.1}
      />
      <path
        d="M480 671.18a78.86 78.86 0 01-38.2 67.62 78 78 0 01-33.1 11c-2.51.25-5.07.37-7.64.37H254.64c-3.84 0-7.66-.12-11.46-.38-3.42-.23-6.81-.55-10.18-1a169.85 169.85 0 01-22.92-4.52q-5.16-1.39-10.19-3.09a169 169 0 01-22.89-9.72q-5.21-2.67-10.19-5.67a170.7 170.7 0 01-22.92-16.52q-5.28-4.5-10.18-9.44A170.1 170.1 0 0184 579.51v-177h294.14v166.82a22.91 22.91 0 0020.37 22.78c.84.08 1.69.14 2.55.14 2.57 0 5.13.12 7.64.36a78.45 78.45 0 0133.1 11 79 79 0 0138.2 67.57z"
        fill={color}
      />
      <g opacity={0.1}>
        <path d="M110.77 399.99v271.26a170.62 170.62 0 01-10.19-18.35V399.99zM143.87 399.99v309.28q-5.28-4.5-10.18-9.44V399.99zM177 399.99v331.47q-5.21-2.67-10.19-5.67v-325.8zM210.08 399.99v344.25q-5.16-1.39-10.19-3.09V399.99zM233 399.99h10.19v350.13H233zM266.1 399.99h10.19v350.13H266.1zM299.2 399.99h10.19v350.13H299.2zM332.31 399.99h10.19v350.13h-10.19zM365.41 399.99h10.19v350.13h-10.19zM408.7 592.61v157.51h-10.19v-158c.84.08 1.69.14 2.55.14 2.57-.01 5.13.11 7.64.35zM441.8 603.56V738.8l-10.18 5.19V598.38a77.23 77.23 0 0110.18 5.18z" />
      </g>
      <rect
        x={71.3}
        y={354.16}
        width={319.58}
        height={66.21}
        rx={13.11}
        fill="#eeeff0"
      />
      <rect
        x={71.3}
        y={354.16}
        width={319.58}
        height={66.21}
        rx={13.11}
        opacity={0.03}
      />
      <path
        opacity={0.1}
        d="M84.03 434.37h294.11v17.82H84.03zM84.03 489.12h294.11v17.82H84.03z"
      />
      <circle cx={190.98} cy={237.02} r={14.01} opacity={0.1} />
      <circle cx={190.98} cy={235.75} r={14.01} fill="#eeeff0" />
      <circle cx={190.98} cy={235.75} r={6.37} fill="#373e46" />
      <circle cx={192.25} cy={233.2} r={1.27} fill="#fff" />
      <circle cx={275.01} cy={237.02} r={14.01} opacity={0.1} />
      <circle cx={275.01} cy={235.75} r={14.01} fill="#eeeff0" />
      <circle cx={275.01} cy={235.75} r={6.37} fill="#373e46" />
      <circle cx={272.47} cy={233.2} r={1.27} fill="#fff" />
      <circle cx={233} cy={278.34} r={19.1} opacity={0.1} />
      <circle cx={233} cy={277.19} r={19.1} fill={color} />
      <path
        d="M407.36 693.72l-12.83-6.87a2.82 2.82 0 00-3.28.45l-10.5 10.08a2.81 2.81 0 01-4.71-2.53l2.56-14.32a2.81 2.81 0 00-1.44-3l-12.83-6.86a2.82 2.82 0 01.95-5.27l14.41-2a2.81 2.81 0 002.39-2.29l2.56-14.32a2.82 2.82 0 015.36-.73l6.34 13.09a2.82 2.82 0 002.91 1.57l14.42-2a2.81 2.81 0 012.33 4.82l-10.54 10.12a2.81 2.81 0 00-.59 3.25l6.35 13.1a2.82 2.82 0 01-3.86 3.71z"
        opacity={0.1}
      />
      <path
        d="M405.46 691.06l-11.38-6.09a2.5 2.5 0 00-2.91.4l-9.3 8.94a2.5 2.5 0 01-4.19-2.24l2.32-12.7a2.5 2.5 0 00-1.28-2.64l-11.38-6.09a2.49 2.49 0 01.84-4.67l12.78-1.76a2.51 2.51 0 002.12-2l2.27-12.7a2.5 2.5 0 014.71-.65l5.62 11.61a2.49 2.49 0 002.59 1.39l12.73-1.8a2.49 2.49 0 012.07 4.27l-9.31 8.94a2.5 2.5 0 00-.51 2.89l5.62 11.61a2.49 2.49 0 01-3.41 3.29z"
        fill="#eeeff0"
      />
      <path
        d="M122.12 400.85l-7.93-4.24a1.74 1.74 0 00-2 .28l-6.49 6.23a1.73 1.73 0 01-2.91-1.56l1.58-8.86a1.72 1.72 0 00-.89-1.84l-7.93-4.24a1.74 1.74 0 01.58-3.26l8.92-1.23a1.73 1.73 0 001.47-1.41l1.59-8.86a1.73 1.73 0 013.27-.45l3.93 8.1a1.72 1.72 0 001.8 1l8.91-1.23a1.74 1.74 0 011.44 3l-6.49 6.23a1.76 1.76 0 00-.36 2l3.92 8.09a1.73 1.73 0 01-2.41 2.25z"
        opacity={0.1}
      />
      <path
        d="M120.94 399.22l-7-3.77a1.56 1.56 0 00-1.8.25l-5.75 5.53a1.55 1.55 0 01-2.59-1.39l1.41-7.85a1.53 1.53 0 00-.79-1.63l-7-3.77a1.54 1.54 0 01.51-2.89l7.91-1.09a1.52 1.52 0 001.3-1.25l1.41-7.85a1.55 1.55 0 012.91-.41l3.48 7.19a1.54 1.54 0 001.6.85l7.9-1.09a1.54 1.54 0 011.28 2.64l-5.76 5.53a1.54 1.54 0 00-.32 1.78l3.48 7.18a1.55 1.55 0 01-2.18 2.04z"
        fill={color}
      />
      <path
        d="M166.68 400.85l-7.93-4.24a1.74 1.74 0 00-2 .28l-6.48 6.23a1.74 1.74 0 01-2.92-1.56l1.58-8.86a1.72 1.72 0 00-.89-1.84l-7.93-4.24a1.74 1.74 0 01.59-3.26l8.91-1.23a1.73 1.73 0 001.47-1.41l1.59-8.86a1.74 1.74 0 013.28-.45l3.92 8.1a1.73 1.73 0 001.8 1l8.91-1.23a1.74 1.74 0 011.44 3l-6.48 6.23a1.74 1.74 0 00-.36 2l3.92 8.09a1.74 1.74 0 01-2.42 2.25z"
        opacity={0.1}
      />
      <path
        d="M165.51 399.22l-7-3.77a1.55 1.55 0 00-1.79.25l-5.76 5.53a1.54 1.54 0 01-2.58-1.39l1.4-7.85a1.53 1.53 0 00-.79-1.63l-7-3.77a1.54 1.54 0 01.52-2.89l7.9-1.09a1.54 1.54 0 001.31-1.25l1.4-7.85a1.55 1.55 0 012.88-.45l3.48 7.19a1.54 1.54 0 001.6.85l7.9-1.09a1.54 1.54 0 011.28 2.64l-5.75 5.53a1.51 1.51 0 00-.32 1.78l3.47 7.18a1.54 1.54 0 01-2.15 2.08z"
        fill={color}
      />
      <path
        d="M211.24 400.85l-7.93-4.24a1.73 1.73 0 00-2 .28l-6.49 6.23a1.74 1.74 0 01-2.92-1.56l1.59-8.86a1.75 1.75 0 00-.89-1.84l-7.94-4.24a1.74 1.74 0 01.59-3.26l8.91-1.23a1.72 1.72 0 001.47-1.41l1.59-8.86a1.74 1.74 0 013.28-.45l3.92 8.1a1.74 1.74 0 001.8 1l8.91-1.23a1.74 1.74 0 011.45 3l-6.49 6.23a1.76 1.76 0 00-.36 2l3.92 8.09a1.74 1.74 0 01-2.41 2.25z"
        opacity={0.1}
      />
      <path
        d="M210.07 399.22l-7-3.77a1.56 1.56 0 00-1.8.25l-5.76 5.53a1.54 1.54 0 01-2.58-1.39l1.4-7.85a1.53 1.53 0 00-.79-1.63l-7-3.77a1.54 1.54 0 01.52-2.89l7.9-1.09a1.54 1.54 0 001.31-1.25l1.41-7.85a1.54 1.54 0 012.9-.41l3.48 7.19a1.54 1.54 0 001.6.85l7.9-1.09a1.54 1.54 0 011.28 2.64l-5.84 5.53a1.54 1.54 0 00-.32 1.78l3.48 7.18a1.55 1.55 0 01-2.09 2.04z"
        fill={color}
      />
      <path
        d="M255.8 400.85l-7.93-4.24a1.73 1.73 0 00-2 .28l-6.49 6.23a1.74 1.74 0 01-2.92-1.56l1.59-8.86a1.75 1.75 0 00-.89-1.84l-7.93-4.24a1.74 1.74 0 01.58-3.26l8.91-1.23a1.74 1.74 0 001.48-1.41l1.58-8.86a1.74 1.74 0 013.28-.45l3.92 8.1a1.75 1.75 0 001.81 1l8.91-1.23a1.74 1.74 0 011.44 3l-6.49 6.23a1.76 1.76 0 00-.36 2l3.92 8.09a1.74 1.74 0 01-2.41 2.25z"
        opacity={0.1}
      />
      <path
        d="M254.63 399.22l-7-3.77a1.56 1.56 0 00-1.8.25l-5.75 5.53a1.55 1.55 0 01-2.59-1.39l1.41-7.85a1.54 1.54 0 00-.79-1.63l-7-3.77a1.55 1.55 0 01.52-2.89l7.9-1.09a1.53 1.53 0 001.31-1.25l1.41-7.85a1.54 1.54 0 012.91-.41l3.47 7.19a1.54 1.54 0 001.6.85l7.91-1.09a1.54 1.54 0 011.27 2.64l-5.75 5.53a1.54 1.54 0 00-.32 1.78l3.48 7.18a1.55 1.55 0 01-2.19 2.04z"
        fill={color}
      />
      <path
        d="M300.37 400.85l-7.93-4.24a1.74 1.74 0 00-2 .28l-6.49 6.23a1.74 1.74 0 01-2.95-1.56l1.59-8.86a1.75 1.75 0 00-.89-1.84l-7.93-4.24a1.74 1.74 0 01.58-3.26l8.91-1.23a1.73 1.73 0 001.48-1.41l1.59-8.86a1.73 1.73 0 013.27-.45l3.93 8.1a1.72 1.72 0 001.8 1l8.91-1.23a1.74 1.74 0 011.44 3l-6.49 6.23a1.76 1.76 0 00-.36 2l3.92 8.09a1.73 1.73 0 01-2.38 2.25z"
        opacity={0.1}
      />
      <path
        d="M299.19 399.22l-7-3.77a1.56 1.56 0 00-1.8.25l-5.75 5.53a1.55 1.55 0 01-2.59-1.39l1.41-7.85a1.53 1.53 0 00-.79-1.63l-7-3.77a1.54 1.54 0 01.51-2.89l7.91-1.09a1.52 1.52 0 001.3-1.25l1.41-7.85a1.55 1.55 0 012.91-.41l3.48 7.19a1.53 1.53 0 001.59.85l7.91-1.09a1.54 1.54 0 011.28 2.64l-5.76 5.53a1.54 1.54 0 00-.32 1.78l3.48 7.18a1.55 1.55 0 01-2.18 2.04z"
        fill={color}
      />
      <path
        d="M344.93 400.85l-7.93-4.24a1.74 1.74 0 00-2 .28l-6.49 6.23a1.73 1.73 0 01-2.91-1.56l1.58-8.86a1.72 1.72 0 00-.89-1.84l-7.93-4.24a1.74 1.74 0 01.59-3.26l8.91-1.23a1.73 1.73 0 001.47-1.41l1.59-8.86a1.74 1.74 0 013.28-.45l3.92 8.1a1.73 1.73 0 001.8 1l8.91-1.23a1.74 1.74 0 011.44 3l-6.48 6.23a1.74 1.74 0 00-.36 2l3.92 8.09a1.74 1.74 0 01-2.42 2.25z"
        opacity={0.1}
      />
      <path
        d="M343.76 399.22l-7-3.77a1.55 1.55 0 00-1.79.25l-5.76 5.53a1.55 1.55 0 01-2.59-1.39l1.41-7.85a1.53 1.53 0 00-.79-1.63l-7-3.77a1.54 1.54 0 01.52-2.89l7.9-1.09a1.54 1.54 0 001.31-1.25l1.4-7.85a1.55 1.55 0 012.91-.41l3.48 7.19a1.54 1.54 0 001.6.85l7.9-1.09a1.54 1.54 0 011.28 2.64l-5.75 5.53a1.51 1.51 0 00-.32 1.78l3.47 7.18a1.54 1.54 0 01-2.18 2.04z"
        fill={color}
      />
      <path
        d="M233 260.98a19.1 19.1 0 0119 17.65c0-.48.06-1 .06-1.45a19.1 19.1 0 00-38.2 0c0 .49 0 1 .06 1.45A19.1 19.1 0 01233 260.98z"
        opacity={0.1}
      />
    </svg>
  );
};

SvgChristmasStocking.propTypes = {
  color: PropTypes.string
};
SvgChristmasStocking.defaultProps = {
  color: "primary"
};
const MemoSvgChristmasStocking = React.memo(SvgChristmasStocking);
export default MemoSvgChristmasStocking;
