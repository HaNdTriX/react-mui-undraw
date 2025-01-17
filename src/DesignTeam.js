import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDesignTeam = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 643.451 542.339"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={567} cy={537} rx={70} ry={5.339} fill="#e6e6e6" />
      <ellipse cx={226} cy={537} rx={70} ry={5.339} fill="#e6e6e6" />
      <path
        d="M536.5 472h-476a7.508 7.508 0 01-7.5-7.5V7.5A7.508 7.508 0 0160.5 0h476a7.508 7.508 0 017.5 7.5v457a7.508 7.508 0 01-7.5 7.5zM60.5 3A4.505 4.505 0 0056 7.5v457a4.505 4.505 0 004.5 4.5h476a4.505 4.505 0 004.5-4.5V7.5a4.505 4.505 0 00-4.5-4.5z"
        fill="#e6e6e6"
      />
      <path
        d="M88 40a3.003 3.003 0 00-3 3v124a3.003 3.003 0 003 3h124a3.003 3.003 0 003-3V43a3.003 3.003 0 00-3-3z"
        fill="#e6e6e6"
      />
      <path
        data-name="Path 40"
        d="M283.04 129.75a3.625 3.625 0 000 7.25h170.878a3.625 3.625 0 10.119-7.25h-.12zM283.04 96.75a3.625 3.625 0 000 7.25h48.878a3.625 3.625 0 10.119-7.25h-.12zM283.04 163.75a3.625 3.625 0 000 7.25h170.878a3.625 3.625 0 00.119-7.25h-.12z"
        fill="#e6e6e6"
      />
      <path
        data-name="Path 78"
        d="M486.309 294.712H251.47c-4.578 0-8.288-2.643-8.293-5.9V237.77c.005-3.257 3.715-5.9 8.293-5.9h234.838c4.578 0 8.288 2.643 8.293 5.9v51.041c-.004 3.257-3.715 5.897-8.293 5.901zM327.309 418.712H92.47c-4.578 0-8.288-2.643-8.293-5.9V361.77c.005-3.257 3.715-5.9 8.293-5.9h234.838c4.578 0 8.288 2.643 8.293 5.9v51.041c-.004 3.257-3.715 5.897-8.293 5.901z"
        fill="#e6e6e6"
      />
      <path
        data-name="Path 78"
        d="M256.466 446.83H21.628c-4.578 0-8.288-2.643-8.293-5.9v-51.042c.005-3.257 3.715-5.9 8.293-5.9h234.838c4.578 0 8.288 2.643 8.293 5.9v51.041c-.004 3.257-3.715 5.897-8.293 5.901zM21.628 386.346c-2.747 0-4.973 1.586-4.976 3.54v51.041c0 1.954 2.23 3.538 4.976 3.54h234.838c2.747 0 4.973-1.586 4.976-3.54v-51.039c0-1.954-2.229-3.538-4.976-3.54z"
        fill="#3f3d56"
      />
      <circle cx={341} cy={288} r={19} fill={color} />
      <circle cx={56} cy={415} r={19} fill={color} />
      <path
        data-name="Path 40"
        d="M382.04 274.375a3.625 3.625 0 000 7.25h135.878a3.625 3.625 0 00.119-7.25h-.12zM382.04 294.375a3.625 3.625 0 000 7.25h135.878a3.625 3.625 0 00.119-7.25h-.12zM97.04 401.375a3.625 3.625 0 000 7.25h135.878a3.625 3.625 0 00.119-7.25h-.12zM97.04 421.375a3.625 3.625 0 000 7.25h135.878a3.625 3.625 0 00.119-7.25h-.12z"
        fill="#3f3d56"
      />
      <circle cx={568.973} cy={475.931} r={43.067} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M575.515 509.73h13.084v23.442h-13.084zM549.347 509.73h13.084v23.442h-13.084z"
      />
      <ellipse
        cx={577.696}
        cy={533.445}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <ellipse
        cx={551.528}
        cy={532.899}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <circle cx={567.883} cy={465.027} r={14.719} fill="#fff" />
      <circle cx={567.883} cy={465.027} r={4.906} fill="#3f3d56" />
      <path
        d="M610.75 435.88c3.477-15.575-7.639-31.311-24.829-35.15s-33.944 5.676-37.422 21.25 7.915 21.317 25.105 25.155 33.668 4.318 37.146-11.256z"
        fill="#e6e6e6"
      />
      <path
        d="M110.31 189.96a42.83 42.83 0 01-4.43 19.04c-.33.68-.68 1.34-1.05 2H29.66c-.37-.66-.72-1.32-1.05-2a43.071 43.071 0 1181.7-19.04z"
        fill="#2f2e41"
      />
      <circle cx={68.336} cy={179.052} r={14.719} fill="#fff" />
      <circle cx={68.336} cy={179.052} r={4.906} fill="#3f3d56" />
      <path
        d="M25.47 149.904c-3.478-15.574 7.638-31.31 24.828-35.149s33.944 5.675 37.421 21.25-7.914 21.317-25.104 25.155-33.668 4.318-37.146-11.256z"
        fill={color}
      />
      <path
        d="M129 77H5a5.002 5.002 0 00-5 5v124a5.002 5.002 0 005 5h124a5.002 5.002 0 005-5V82a5.002 5.002 0 00-5-5zm3 129a3.009 3.009 0 01-3 3H5a3.009 3.009 0 01-3-3V82a3.009 3.009 0 013-3h124a3.009 3.009 0 013 3z"
        fill="#3f3d56"
      />
      <ellipse
        cx={537.065}
        cy={622.239}
        rx={21.534}
        ry={6.76}
        transform="rotate(-69.082 268.028 734.96)"
        fill="#2f2e41"
      />
      <circle
        cx={497.258}
        cy={654.761}
        r={43.067}
        transform="rotate(-80.783 253.026 728.882)"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M199.358 509.73h13.084v23.442h-13.084zM225.526 509.73h13.084v23.442h-13.084z"
      />
      <ellipse
        cx={210.261}
        cy={533.445}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <ellipse
        cx={236.429}
        cy={532.899}
        rx={10.903}
        ry={4.089}
        fill="#2f2e41"
      />
      <path
        d="M177.207 435.88c-3.477-15.575 7.639-31.311 24.829-35.15s33.944 5.675 37.421 21.25-7.915 21.317-25.105 25.155-33.667 4.318-37.145-11.256z"
        fill={color}
      />
      <ellipse
        cx={448.75}
        cy={634.778}
        rx={6.76}
        ry={21.534}
        transform="rotate(-64.626 168.242 765.346)"
        fill="#2f2e41"
      />
      <circle cx={581.968} cy={344.643} r={42.012} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M588.502 377.584l12.763-.06.107 22.868-12.763.059zM562.976 377.703l12.763-.06.107 22.868-12.763.059z"
      />
      <ellipse
        cx={845.091}
        cy={581.776}
        rx={10.636}
        ry={3.989}
        transform="rotate(-30.266 375.327 1006.842)"
        fill="#2f2e41"
      />
      <ellipse
        cx={870.086}
        cy={581.66}
        rx={10.636}
        ry={3.989}
        transform="rotate(-30.266 400.322 1006.726)"
        fill="#2f2e41"
      />
      <circle cx={580.855} cy={334.012} r={14.359} fill="#fff" />
      <circle cx={575.937} cy={327.919} r={4.786} fill="#3f3d56" />
      <path
        d="M622.54 305.383c3.321-15.208-7.594-30.508-24.38-34.175s-33.087 5.69-36.408 20.898 7.817 20.76 24.603 24.426 32.863 4.06 36.184-11.149z"
        fill={color}
      />
      <ellipse
        cx={816.367}
        cy={502.203}
        rx={6.594}
        ry={21.006}
        transform="rotate(-67.095 542.382 622.622)"
        fill="#2f2e41"
      />
      <ellipse
        cx={902.204}
        cy={537.022}
        rx={6.594}
        ry={21.006}
        transform="rotate(-67.095 628.218 657.441)"
        fill="#2f2e41"
      />
      <path
        d="M590.458 362.95a9.572 9.572 0 11-19.144.108v-.019c-.025-5.286 4.256-6.401 9.542-6.426s9.578 1.05 9.602 6.337z"
        fill="#fff"
      />
      <path
        data-name="Path 78"
        d="M547.403 319.665H312.565c-4.578 0-8.288-2.643-8.293-5.9v-51.042c.005-3.257 3.715-5.9 8.293-5.9h234.838c4.578 0 8.288 2.643 8.293 5.9v51.041c-.004 3.257-3.715 5.897-8.293 5.901zm-234.838-60.484c-2.747 0-4.973 1.586-4.976 3.54v51.041c0 1.954 2.23 3.538 4.976 3.54h234.838c2.747 0 4.973-1.586 4.976-3.54v-51.039c0-1.954-2.229-3.538-4.976-3.54z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgDesignTeam.propTypes = {
  color: PropTypes.string
};
SvgDesignTeam.defaultProps = {
  color: "primary"
};
export default SvgDesignTeam;
