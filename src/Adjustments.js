import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgAdjustments = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1027 755"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={411.656}
        cy={723.244}
        rx={170.656}
        ry={31.756}
        fill="#f2f2f2"
      />
      <path fill="#f2f2f2" d="M66 88.25h910v490H66z" />
      <path fill="#3f3d56" d="M890 472.651h86V578.25h-86z" />
      <path
        d="M963.714 531.04c0 20.509-12.192 27.67-27.231 27.67s-27.232-7.161-27.232-27.67 27.232-46.599 27.232-46.599 27.231 26.09 27.231 46.599z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M935.491 555.572l.278-17.164 11.607-21.234-11.563 18.542.126-7.718 7.999-15.362-7.966 13.32.225-13.88 8.566-12.231-8.53 10.048.141-25.452-.886 33.694.073-1.39-8.709-13.331 8.569 15.999-.811 15.502-.024-.411-10.04-14.029 10.009 15.482-.101 1.939-.018.029.008.159-2.059 39.33h2.751l.33-20.315 9.985-15.444-9.96 13.917zM133 44a22 22 0 1122-22 22.025 22.025 0 01-22 22zm0-42a20 20 0 1020 20 20.023 20.023 0 00-20-20z"
      />
      <circle cx={13} cy={129} r={13} fill="#3f3d56" />
      <circle cx={1014} cy={224} r={13} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M189.5 188.25h664v6h-664zM189.5 242.25h664v6h-664zM189.5 296.25h664v6h-664z"
      />
      <path
        fill={color}
        d="M302.5 166.25h16v50h-16zM484.5 220.25h16v50h-16zM796.5 274.25h16v50h-16z"
      />
      <path
        fill="#3f3d56"
        d="M189.5 420.25h236v6h-236zM189.5 442.25h118v6h-118zM225.5 500.25h-37v-37h36v2h-34v33h33v-18.811h2v20.811zM617.5 420.25h236v6h-236zM617.5 442.25h76v6h-76zM777.5 442.25h76v6h-76zM653.5 500.25h-37v-37h37zm-35-2h33v-33h-33z"
      />
      <path
        fill="#575a89"
        d="M378.024 333.278h-26.256v-12.86h21.969l4.823 2.679-.536 10.181z"
      />
      <path
        fill="#ffb9b9"
        d="M332.478 687.469l1.071 19.291 16.076-3.215-2.68-19.291-14.467 3.215zM408.567 677.288s.536 16.076-1.072 20.362 4.287 6.43 4.287 6.43h12.86l7.502 1.072v-8.038s-8.573-13.396-8.573-20.897-15.004 1.071-15.004 1.071z"
      />
      <path
        d="M335.157 703.545s10.717-5.063 14.468-1.996 17.682 29.323 12.324 30.931c0 0-3.751 6.43-16.611 2.143s-12.86-9.109-12.86-9.109-3.751-3.215-3.751-4.287 1.607-10.716 1.607-10.716 1.19-8.07 3.006-7.518zM409.639 695.507s-1.608-1.608-2.68 0-6.965 21.97-1.607 23.041 13.396 4.823 14.468 3.751a14.68 14.68 0 002.143-3.75s8.574 3.75 11.253 6.965 34.83 10.181 33.758 0-17.147-18.754-17.147-18.754l-17.683-11.789s-6.966.536-8.573 3.751-12.86 2.68-13.932-3.215z"
        fill="#2f2e41"
      />
      <path
        d="M252.637 488.136s-5.894 7.502-4.822 8.038 24.648 5.894 37.509 2.68 39.652-2.68 41.26-6.43 21.433-50.37 21.433-50.37l-6.43-35.365-6.966-9.11-16.075-13.932-32.15 60.015z"
        fill="#575a89"
      />
      <path
        d="M252.637 488.136s-5.894 7.502-4.822 8.038 24.648 5.894 37.509 2.68 39.652-2.68 41.26-6.43 21.433-50.37 21.433-50.37l-6.43-35.365-6.966-9.11-16.075-13.932-32.15 60.015z"
        opacity={0.1}
      />
      <path
        d="M320.69 475.276s-7.503 26.792 0 63.765.535 45.011 2.143 46.619 2.143 1.071 2.143 2.679 1.607 9.109 0 11.788-1.608 87.878 3.215 90.022 18.754 7.501 21.434 0 .535-61.622 1.607-64.301 1.072-9.11 1.072-10.717 3.215-19.826 3.75-24.649 2.144-14.468 2.144-14.468-1.072-38.044 2.143-49.297 4.287-12.324 4.287-12.324l25.72 66.98s-2.143 6.966 0 9.11-.535 1.607 1.608 5.358 4.287 4.822 4.287 6.965-2.144 2.144-1.072 3.751 2.68 7.502 2.68 7.502l-2.68 6.43s1.608 13.396 3.75 21.434 2.144 40.724 4.823 41.26 23.577 6.43 23.577-5.895-1.607-65.908-1.607-65.908-3.215-8.038-3.215-10.181-.536-3.215.536-4.287 2.143-3.215.536-4.822-1.072-3.751-1.072-5.895a46.9 46.9 0 00-1.072-8.573c-.536-2.143-10.717-69.124-10.717-69.124s2.144-8.037 0-8.573-2.143-4.823-2.143-6.966 5.359-28.935-1.072-28.935-86.806 11.252-86.806 11.252z"
        fill="#2f2e41"
      />
      <path
        d="M249.958 443.126l-7.502 3.75s-26.792 14.468-15.003 22.506 23.577-11.253 23.577-11.253l11.252-8.573zM354.447 296.305s-2.143 24.649-13.396 30.007-3.75 45.547-3.75 45.547l15.539 15.003 27.328-8.037 3.215-18.219 2.679-18.754-6.43-9.645s-8.038-2.144-4.823-23.577-20.362-12.325-20.362-12.325z"
        fill="#ffb9b9"
      />
      <path
        d="M338.372 334.886s12.324 40.724 20.898 40.724 13.396-9.645 14.467-21.434 8.038-24.649 8.038-24.649l16.611 15.004s13.396 118.42 12.324 121.636-42.867 6.966-59.478 11.789-33.222 1.071-33.222-1.608c0-2.386 8.5-23.049 2.032-38.14a62.863 62.863 0 01-4.746-16.875c-1.001-7.945-1.931-17.558-1.037-20.539 1.608-5.358 10.181-62.157 10.181-62.157z"
        fill={color}
      />
      <path
        d="M347.445 320.101s-9.609 5.14-13.896 7.283-30.543 8.574-31.078 11.789 3.75 48.225 1.607 53.048-23.577 47.69-23.577 47.69l-1.072 9.109s-35.365 42.331-31.078 47.154 20.362-15.004 20.362-15.004 35.901-57.335 36.973-59.478 23.04-41.796 26.256-42.867 10.717-46.083 11.788-48.226 5.285-11.35 3.715-10.498z"
        fill="#575a89"
      />
      <path
        d="M305.15 338.637h-3.215s-11.789 45.01-15.004 50.905-3.75 15.54-4.287 17.147-2.679 1.071-3.215 4.822-5.894 8.574-10.18 10.717-23.578 20.362-23.042 20.898 6.43 19.29 10.181 19.29 18.755-18.219 20.362-18.219 8.574-6.43 9.645-6.965 28.4-50.905 27.328-63.23-8.573-35.365-8.573-35.365z"
        fill="#575a89"
      />
      <path
        d="M438.85 477.459l6.6 5.175s23.357 19.533 10.2 25.05-20.851-15.74-20.851-15.74l-9.311-10.65z"
        fill="#ffb9b9"
      />
      <path
        d="M374.154 320.736s7.085 3.433 10.3 6.112 27.864 9.645 27.864 11.789-2.68 35.365-2.68 35.365l3.752 58.943s5.358 66.444 6.43 68.052 2.679 10.18 0 10.18-16.075-15.003-15.54-22.505 4.287-24.648.536-28.935-21.433-76.09-21.433-80.376-7.502-47.154-6.966-48.226-2.263-10.399-2.263-10.399z"
        fill="#575a89"
      />
      <path
        d="M404.28 338.1l8.038.537 19.826 80.912s1.608 10.18 2.143 11.252 8.574 47.69 5.359 49.298-13.932 7.502-14.468 3.75-5.894-24.648-11.252-29.47-10.717-87.879-10.717-87.879z"
        fill="#575a89"
      />
      <circle cx={372.13} cy={288.804} r={21.969} fill="#ffb9b9" />
      <path
        d="M356.798 290.408c1.398-.718 3.238-.042 4.528 1.52a21.443 21.443 0 0131.166-14.488v-2.233a18.554 18.554 0 00-18.554-18.554h-4.46a34.857 34.857 0 00-34.857 34.857v6.221a31.251 31.251 0 0017.114 27.874l20.064-10.622a21.445 21.445 0 01-10.74-15.933c-1.699.742-3.972-.458-5.155-2.76-1.217-2.37-.817-5.003.894-5.882z"
        fill="#2f2e41"
      />
      <path
        fill="none"
        stroke="#57b894"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M195.583 475.174L206.5 487.5l23.864-23.392"
      />
    </svg>
  );
};

SvgAdjustments.propTypes = {
  color: PropTypes.string
};
SvgAdjustments.defaultProps = {
  color: "primary"
};
const MemoSvgAdjustments = React.memo(SvgAdjustments);
export default MemoSvgAdjustments;
