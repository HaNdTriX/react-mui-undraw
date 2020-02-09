import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgProjectCompleted = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 963.51 774.364"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M0 719.526h963.51v2.241H0z" />
      <path
        d="M604.525 335.81s-43.218 33.957-21.609 41.674 35.5-27.782 35.5-27.782z"
        fill="#ffb8b8"
      />
      <path
        d="M606.068 323.463l-9.26 15.434s15.434 0 18.521 23.153l12.348-15.435z"
        fill="#cfcce0"
      />
      <path
        fill="#ffb8b8"
        d="M811.35 675.375l1.544 46.304-18.522 10.804-7.717-4.63 1.543-52.478h23.152zM701.764 663.027l3.086 49.391-43.217 18.522 3.087-26.24s12.348-20.064 9.261-41.673z"
      />
      <path
        d="M768.133 291.05s24.695 64.826 29.326 104.956 12.348 146.63 12.348 146.63l15.434 137.37-43.217 6.173-18.522-138.913-41.673-137.369-9.261 137.37-7.718 125.02-40.13 1.544-3.087-129.652-16.978-165.151 9.26-78.717zM791.285 724.766s2.532-25.923 21.331-11.418l3.365-2.473 15.434 33.956s18.522 26.24-13.89 29.326-29.327-29.326-29.327-29.326l-3.087-13.891 1.544-9.097zM701.764 693.896a24.52 24.52 0 0112.347 21.61c0 15.434-1.543 16.977-1.543 16.977l-23.152 6.174s-15.435-1.543-24.696 7.718-55.565 15.434-55.565 3.087 38.587-32.413 38.587-32.413 11.46-19.353 19.62-17.394 11.25 5.046 11.25 6.59-4.631 12.347-4.631 12.347 26.24-6.174 27.783-24.696z"
        fill="#2f2e41"
      />
      <circle cx={698.677} cy={62.616} r={38.587} fill="#ffb8b8" />
      <path
        d="M727.23 72.648l16.98 38.587-46.305 66.37s-3.087-72.544-12.348-84.892 41.674-20.065 41.674-20.065z"
        fill="#ffb8b8"
      />
      <path
        fill="#cfcce0"
        d="M705.622 152.909l7.718-20.065 6.173 1.543 7.718-6.174 10.804-33.956 15.435 10.804 20.065 202.195-125.021 3.087 16.978-140.456 15.435-40.13 11.141-14.729 7.38 22.446 6.174 15.435z"
      />
      <path
        d="M741.122 239.343l4.723-139.62s9.168.708 12.255 5.338 54.022 13.891 54.022 13.891l-9.26 143.543s38.586 114.218 24.695 120.391-38.587 4.63-38.587 4.63zM666.264 221.593l16.373-94.098-36.439 24.642 9.261 67.913-7.717 46.304s-29.326 128.108-20.065 132.739 20.065 0 20.065 0l18.522-129.652z"
        fill="#575a89"
      />
      <path
        d="M657.003 149.05l-10.805 3.087-4.63 61.74-7.717 54.02-37.044 66.37s18.522-12.348 26.24 23.152l40.795-71.026z"
        fill="#575a89"
      />
      <path
        d="M777.394 323.463s-43.218 33.956-21.609 41.673 35.5-27.782 35.5-27.782z"
        fill="#ffb8b8"
      />
      <path
        fill="#cfcce0"
        d="M803.633 340.441l-13.891 16.978-18.522-32.413 7.717-13.891 24.696 29.326z"
      />
      <path
        d="M800.546 124.355l12.348-6.174s9.26 12.347 10.804 23.152 9.26 24.695 9.26 32.413 21.61 80.26 21.61 80.26l-49.392 100.326s-10.804-37.043-33.956-40.13l38.587-54.022-21.609-38.587z"
        fill="#575a89"
      />
      <path
        d="M730.98 25.85l7.276-2.913s-15.214-16.75-36.382-15.293l5.953-6.555s-14.552-5.826-27.782 9.468c-6.955 8.04-15.002 17.49-20.018 28.135h-7.793l3.253 7.16-11.383 7.162 11.683-1.286a40.018 40.018 0 00-.317 11.878 15.369 15.369 0 005.628 10.054s9.024-18.679 9.024-21.592v7.283s7.277-6.555 7.277-10.924l3.969 5.098 1.984-8.011 24.475 8.01-3.969-6.554 15.215 2.185-5.954-8.011s17.199 9.467 17.86 17.478c.662 8.011 5.696 15.602 5.696 15.602s13.488-37.45-5.695-48.373z"
        fill="#2f2e41"
      />
      <ellipse cx={730.318} cy={56.442} rx={4.322} ry={5.402} fill="#ffb8b8" />
      <path
        fill={color}
        d="M178.601 318.118H45.361v-37.336h69.549l63.691 37.336z"
      />
      <path
        d="M44.995 312.994v109.08H477.66v-109.08zm168.747 90.779H73.18v-15.374h140.56zm235.733-28.552H73.18v-15.374h376.294zm0-28.551H73.18v-15.374h376.294z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M178.601 141.685H45.361v-37.337h69.549l63.691 37.337z"
      />
      <path
        d="M44.995 138.756v109.082H477.66V138.756zm168.747 90.78H73.18v-15.374h140.56zm81.262-28.552H73.18V185.61h221.823zm154.47-28.552H73.182V157.06h376.294z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M178.601 490.891H45.361v-37.336h69.549l63.691 37.336z"
      />
      <path
        d="M44.995 483.57v109.082H477.66V483.57zm250.009 90.78H73.18v-15.374h221.823zm0-28.552H73.18v-15.374h221.823zm154.47-28.551H73.182v-15.374h376.294zM600.285 223.679h-61.496v-61.496h41.73v1.464h-40.265v58.568h58.567v-29.284h1.464v30.748z"
        fill="#3f3d56"
      />
      <path
        d="M569.22 207.638c-1.42-4.196-19.242-18.46-8.321-20.857l8.955 11.94 41.172-41.17 4.141 4.14z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M600.285 397.916h-61.496V336.42h41.73v1.465h-40.265v58.567h58.567v-29.284h1.464v30.748z"
      />
      <path
        d="M569.22 381.876c-1.42-4.196-19.242-18.46-8.321-20.858l8.955 11.941 41.172-41.171 4.141 4.14z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M600.285 571.421h-61.496v-61.495h41.73v1.464h-40.265v58.567h58.567v-29.284h1.464v30.748z"
      />
      <path
        d="M569.22 555.381c-1.42-4.196-19.242-18.46-8.321-20.857l8.955 11.94 41.172-41.171 4.141 4.14z"
        fill={color}
      />
    </svg>
  );
};

SvgProjectCompleted.propTypes = {
  color: PropTypes.string
};
SvgProjectCompleted.defaultProps = {
  color: "primary"
};
const MemoSvgProjectCompleted = React.memo(SvgProjectCompleted);
export default MemoSvgProjectCompleted;
