import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgResponsiveness = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1092.5 747.756"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f1f1f1"
        d="M317.555 42.97l511.393 153.732L705.445 607.54 194.052 453.81z"
      />
      <path fill={color} d="M0 138.256h463.5v324.5H0z" />
      <path fill="#3f3d56" d="M0 138.256h388v250H0z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M388.5 388.756l42.966 42.966"
      />
      <path
        fill="#3f3d56"
        d="M420.996 432.82l.072-2.001 9.854.361-.36-9.856 2.001-.071.436 12.004-12.003-.437zM654.5 214.756h248v221h-248z"
      />
      <path fill={color} d="M654.5 214.756h144v99h-144z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M488.669 324.756h130.662"
      />
      <path
        fill="#3f3d56"
        d="M495.296 332.935l1.364-1.465-7.223-6.712 7.223-6.715-1.364-1.465-8.796 8.18 8.796 8.177zM612.704 332.935l-1.364-1.465 7.223-6.712-7.223-6.715 1.364-1.465 8.796 8.18-8.796 8.177z"
      />
      <circle cx={554} cy={324.756} r={11} fill="#3f3d56" />
      <circle cx={582.5} cy={324.756} r={6} fill={color} />
      <circle cx={524.5} cy={324.756} r={6} fill={color} />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M902.5 435.756l-87.643-109.308"
      />
      <path
        fill={color}
        d="M825.384 326.501l-.289 1.981-9.756-1.437-.721 9.837-1.996-.148.88-11.98 11.882 1.747z"
      />
      <circle cx={511} cy={34.756} r={20.289} fill="#3f3d56" />
      <circle
        cx={447.367}
        cy={34.756}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <circle cx={217.367} cy={534.756} r={14.756} fill="#f1f1f1" />
      <circle cx={755.367} cy={64.756} r={14.756} fill="#f1f1f1" />
      <circle cx={241.367} cy={14.756} r={14.756} fill="#f1f1f1" />
      <circle
        cx={574.633}
        cy={34.756}
        r={14.756}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M956.5 354.756l5.984-5.449s34.635-1.348 37.325 9.55-15.309 9.899-15.309 9.899z"
        fill="#d0cde1"
      />
      <path
        d="M956.5 354.756l5.984-5.449s34.635-1.348 37.325 9.55-15.309 9.899-15.309 9.899z"
        opacity={0.1}
      />
      <path
        d="M1005.994 365.115h6.45l19.997 6.45s13.547 22.578 7.096 25.158-8.386 3.87-16.127 1.936-10.966-2.58-10.966-2.58z"
        fill="#d0cde1"
      />
      <path
        fill="#9f616a"
        d="M937.617 476.711l15.482 22.577 3.225-19.352-11.611-6.45-7.096 3.225zM1021.475 339.313s-7.74-38.059-13.546-35.479 0 25.158 0 25.158l9.03 14.836z"
      />
      <path
        d="M933.747 368.986l-8.386 7.095s-41.284 52.25-25.803 68.377 39.994 37.414 39.994 37.414 10.321-6.451 9.676-7.741-9.676-12.256-10.966-14.837-9.676-11.61-9.676-15.481 1.29-3.87-1.935-5.16-3.87-7.096-3.87-7.096l17.416-32.898zM1019.54 387.693s.645-5.806 0-7.741.645-5.806 0-6.45-7.096-16.772-6.45-19.353 0-14.836 0-14.836l9.03-3.87 4.516 11.61s9.676 9.677 7.74 10.967 1.936 5.16 1.936 5.16l1.935 5.806 5.16 9.676s2.193 12.652-2.129 16.002-21.738-6.971-21.738-6.971z"
        fill="#d0cde1"
      />
      <circle cx={982.268} cy={312.985} r={31.91} fill="#2f2e41" />
      <path
        d="M969.225 331.572s1.29 21.287-1.935 24.512 12.256 9.031 12.256 9.031h14.192s0-28.382 3.225-33.543-27.738 0-27.738 0z"
        fill="#9f616a"
      />
      <path
        d="M969.225 331.572s1.29 21.287-1.935 24.512 12.256 9.031 12.256 9.031h14.192s0-28.382 3.225-33.543-27.738 0-27.738 0z"
        opacity={0.1}
      />
      <circle cx={984.469} cy={283.112} r={13.204} fill="#2f2e41" />
      <path
        d="M966.863 275.96a13.205 13.205 0 0111.829-13.133 13.35 13.35 0 00-1.376-.071 13.204 13.204 0 000 26.408 13.35 13.35 0 001.376-.072 13.205 13.205 0 01-11.829-13.132z"
        fill="#2f2e41"
      />
      <circle cx={982.449} cy={319.638} r={23.867} fill="#9f616a" />
      <ellipse
        cx={982.268}
        cy={306.219}
        rx={22.007}
        ry={13.204}
        fill="#2f2e41"
      />
      <path
        d="M982.126 360.6s-18.061-13.546-21.932-10.966-32.253 13.546-34.833 26.447 32.898 72.247 32.898 72.247l41.93-4.515 12.9-14.191 3.226-15.482s1.29-12.901 0-15.481-1.29-32.899-3.87-33.544-14.192-8.386-15.482-6.45-14.837 1.935-14.837 1.935z"
        fill="#d0cde1"
      />
      <path
        d="M909.88 685.711s-11.612-1.935-11.612 7.741-1.29 40.64-1.935 41.93-19.997 9.03-10.32 10.32 23.866 0 23.866 0l3.226-6.45 3.225 6.935 7.17.569s-1.364-28.791 1.86-33.307-5.16-15.481-5.16-15.481 1.936-13.547.645-12.257-10.966 0-10.966 0zM1015.025 692.807s-5.806 20.642-4.516 23.222 0 10.966 0 10.966-5.16 17.997 6.45 19.288 15.482-4.451 15.482-5.741-2.58-18.707-2.58-21.932v-12.257l-.645-13.546z"
        fill="#2f2e41"
      />
      <path
        d="M964.71 443.813l-8.386 4.515s.645 14.192-3.225 19.997-16.772 119.337-18.062 119.337-6.45 16.772-9.676 20.642-26.448 70.957-19.352 77.407 56.12 18.062 61.926 13.547 27.093-170.942 27.093-170.942 7.74 172.877 17.416 172.232 58.056-8.386 58.056-13.546-21.287-231.578-51.605-248.35l-5.395-8.896s-22.988 12.767-48.79 14.057z"
        fill="#2f2e41"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M751.5 746.756h341"
      />
    </svg>
  );
};

SvgResponsiveness.propTypes = {
  color: PropTypes.string
};
SvgResponsiveness.defaultProps = {
  color: "primary"
};
export default SvgResponsiveness;
