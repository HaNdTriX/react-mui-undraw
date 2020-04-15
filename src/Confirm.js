import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgConfirm = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 870.553 714.568"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M650 325c244.268 256.65 448.558 512.646-325 325C150.566 607.687 0 504.493 0 325S145.507 0 325 0s201.254 194.982 325 325z"
        fill="#3f3d56"
      />
      <path
        d="M427 549H162a9.01 9.01 0 01-9-9V117a9.01 9.01 0 019-9h265a9.01 9.01 0 019 9v35h6v21h-6v7h6v21h-6v339a9.01 9.01 0 01-9 9zM162 110a7.008 7.008 0 00-7 7v423a7.008 7.008 0 007 7h265a7.008 7.008 0 007-7V199h6v-17h-6v-11h6v-17h-6v-37a7.008 7.008 0 00-7-7z"
        fill={color}
      />
      <path
        d="M410.5 526.5h-232v-396h232zm-230-2h228v-392h-228zM271 119h48v2h-48z"
        fill={color}
      />
      <path
        fill="#d0cde1"
        d="M247 225h94v10h-94zM259.424 436.846a17.518 17.518 0 1117.519-17.518 17.538 17.538 0 01-17.519 17.518zm0-33.193a15.674 15.674 0 1015.674 15.675 15.692 15.692 0 00-15.674-15.675z"
      />
      <path
        fill="#33ae84"
        d="M259.67 425.87l-8.926-8.927 2.608-2.607 5.826 5.825 16.256-23.102 3.017 2.124-18.781 26.687z"
      />
      <path
        d="M328.576 436.846a17.518 17.518 0 1117.518-17.518 17.538 17.538 0 01-17.518 17.518zm0-33.193a15.674 15.674 0 1015.674 15.675 15.692 15.692 0 00-15.674-15.675z"
        fill="#d0cde1"
      />
      <path
        fill="#ff6584"
        d="M336.874 413.654l-2.611-2.604-5.687 5.705-5.687-5.705-2.611 2.604 5.694 5.712-5.617 5.635 2.611 2.604 5.61-5.627 5.61 5.627 2.611-2.604-5.617-5.635 5.694-5.712z"
      />
      <path fill={color} d="M107.553 547H835v2H107.553z" />
      <circle cx={108} cy={548} r={14} fill={color} />
      <circle cx={841} cy={548} r={14} fill={color} />
      <path
        d="M791.678 548.494l-1.267-.475c-.279-.105-27.993-10.723-40.975-34.8-12.983-24.077-6.626-53.066-6.56-53.356l.299-1.32 1.267.475c.278.105 27.992 10.723 40.975 34.8 12.983 24.077 6.625 53.066 6.56 53.356zm-40.163-36.395c10.976 20.356 32.877 30.791 38.425 33.173 1.055-5.947 4.364-29.997-6.602-50.334-10.966-20.334-32.875-30.785-38.426-33.173-1.056 5.95-4.363 29.998 6.603 50.334z"
        fill={color}
      />
      <path
        d="M759.358 504.774c23.33 14.037 32.316 41.918 32.316 41.918s-28.841 5.123-52.173-8.914-32.316-41.918-32.316-41.918 28.841-5.123 52.173 8.914z"
        fill="#d0cde1"
      />
      <path
        d="M461.5 188.5l-4 26-18 70s-23 30-3 36 17-35 17-35l25-50v-45zM533.5 467.5l9 17-21 11-8-16 20-12z"
        fill="#a0616a"
      />
      <path
        d="M513.5 486.5s16-2 19 0 5-9 10-7 19 19 16 21-16 26-16 26-14 34-26 28-3-37-3-37z"
        fill="#2f2e41"
      />
      <path fill="#a0616a" d="M555.5 523.5l-3 33-26-4 10-31 19 2z" />
      <path
        d="M526.5 543.5l6 3s9-15 16-7 9 7 9 7l13 29s18 29-6 29-27-11-27-11-13-9-13-14 2-36 2-36zM572.5 254.5s5 26 4 42-8 120-8 120l-8 117-34-3 3-112-11-81-19 67-41 3s-8-99 7-110 107-43 107-43z"
        fill="#2f2e41"
      />
      <path
        d="M493.5 394.5l6 10s23 23 26 35 17 31 17 31l-30 16s-59-69-54-79z"
        fill="#2f2e41"
      />
      <circle cx={518.5} cy={58.5} r={28} fill="#a0616a" />
      <path
        d="M528.5 77.5s-1 21 14 25-24 24-24 24-30 1-28-14l7-6-1-38z"
        fill="#a0616a"
      />
      <path
        d="M536 98s-21.512 23.939-40.506 10.22c0 0-35.994 16.28-34.994 35.28s15 49 15 49l-3 66s-34 43-12 45 68-1 92-32c0 0 23 6 23-4v-64l8-88z"
        fill="#d0cde1"
      />
      <path
        d="M471.5 131.5s-8.96 1.293-10.98 10.147-3.02 54.853-3.02 54.853h24z"
        fill="#d0cde1"
      />
      <path
        fill="#a0616a"
        d="M599.5 173.5l6 47-31 64-4 17L562 275l16.5-57.5-9-38 30-6z"
      />
      <path
        d="M546.185 34.086l1.847-4.14-3.245-.292.83-3.871-4.14 2.857a8.455 8.455 0 00-1.409-8.072 16.149 16.149 0 00-6.922-4.88 30.883 30.883 0 00-31.69 5.538l-.3-1.165a40.22 40.22 0 00-15.36 26.62C484.47 57.116 489.483 67.742 496 76c-.665-4.37-1.85-8.655.252-12.544a41.048 41.048 0 012.65-4.093l5.314-7.535c3.054-4.33 6.685-9.03 11.927-9.798a19.625 19.625 0 014.378.017c6.444.507 13.348 1.82 19.801 1.54 5.261-.227 6.855-4.156 8.346-8.96a17.527 17.527 0 00-2.483-.541z"
        fill="#2f2e41"
      />
      <path
        fill="#d0cde1"
        d="M573.5 117.5l10-2 22 62-40 9 8-69zM217 265.284h154v7.846H217zM217.276 288.822h154v7.846h-154zM217.553 312.361h154v7.846h-154zM217.829 335.899h154v7.846h-154zM218.105 359.438h154v7.846h-154z"
      />
    </svg>
  );
};

SvgConfirm.propTypes = {
  color: PropTypes.string
};
SvgConfirm.defaultProps = {
  color: "primary"
};
export default SvgConfirm;
