import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgEnter = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 783.928 868.734"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M533.24 538.196C960.68 824.193 821.76 930.762 266.62 833.7 121.57 808.34 0 701.4 0 538.196s119.37-295.504 266.62-295.504S397.6 447.44 533.24 538.196z"
        fill="#3f3d56"
      />
      <ellipse
        cx={571.456}
        cy={801.706}
        rx={168.859}
        ry={15.108}
        opacity={0.1}
      />
      <ellipse cx={238.428} cy={303.706} rx={89.5} ry={15.108} opacity={0.1} />
      <path
        d="M233.737 340.899a203.538 203.538 0 00-183.63 115.66 203.029 203.029 0 01150.747-66.78c112.398 0 203.52 91.122 203.52 203.52a202.648 202.648 0 01-19.89 87.86 202.782 202.782 0 0052.773-136.74c0-112.398-91.122-203.52-203.52-203.52z"
        opacity={0.1}
      />
      <path
        d="M404.374 592.41a202.648 202.648 0 01-19.89 87.861 203.029 203.029 0 01-150.747 66.78c-112.398 0-203.52-91.122-203.52-203.52a202.648 202.648 0 0119.89-87.86 203.029 203.029 0 01150.747-66.78c112.398 0 203.52 91.122 203.52 203.52z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M233.737 748.05c-112.773 0-204.52-91.747-204.52-204.52a202.601 202.601 0 0119.988-88.292A204.539 204.539 0 01233.737 339.01c112.773 0 204.52 91.748 204.52 204.52a204.506 204.506 0 01-204.52 204.52zm0-407.04c-77.489 0-149.215 45.177-182.728 115.093a200.605 200.605 0 00-19.792 87.428c0 111.67 90.85 202.52 202.52 202.52a202.506 202.506 0 00202.52-202.52c0-111.67-90.85-202.52-202.52-202.52z"
        fill="#fff"
      />
      <path
        d="M699.356 750.635c-14.782 19.331-13.092 45.458-13.092 45.458s25.656-5.217 40.438-24.549 13.091-45.458 13.091-45.458-25.656 5.217-40.437 24.549z"
        fill="#d0cde1"
      />
      <path
        d="M709.042 754.976c-2.868 24.166-22.286 41.727-22.286 41.727s-14.766-21.619-11.898-45.784 22.286-41.727 22.286-41.727 14.767 21.619 11.898 45.784z"
        fill={color}
      />
      <circle cx={172.828} cy={104.911} r={83.979} fill="#ff6584" />
      <path
        d="M354.901 190.533c.041 83.884-49.813 113.194-111.323 113.223q-2.143.001-4.266-.045-4.276-.09-8.463-.386c-55.517-3.904-98.667-34.672-98.705-112.684C132.105 109.908 235.238 7.975 242.972.438c.007 0 .007 0 .014-.007.294-.287.444-.431.444-.431s111.43 106.655 111.471 190.533z"
        fill={color}
      />
      <path
        d="M239.518 290.927l40.708-56.936-40.808 63.184-.106 6.536q-4.276-.09-8.463-.386l4.348-83.92-.035-.65.075-.123.414-7.93-40.972-63.302 41.092 57.362.103 1.681 3.285-63.405-35.08-65.417 35.505 54.274L242.972.438l.014-.438v.43l-.524 103.669 34.864-41.115-35.01 50.043-.895 56.773 32.56-54.499-32.686 62.846-.497 31.568 47.254-75.86-47.434 86.873z"
        fill="#3f3d56"
      />
      <path
        d="M572.956 238.594c-10.675-18.037-31.794-18.878-31.794-18.878s-20.579-2.631-33.78 24.839c-12.305 25.604-29.287 50.326-2.734 56.32l4.796-14.928 2.97 16.04a103.895 103.895 0 0011.361.194c28.436-.918 55.517.268 54.645-9.936-1.159-13.565 4.807-36.296-5.464-53.651z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M525.862 407.843l2.746 27.458 63.612-6.864 1.373-20.594h-67.731z"
      />
      <path
        d="M518.998 422.945l-1.83 16.017s-21.052 29.29-19.222 79.63-28.831 274.128-6.865 275.958 61.325 4.577 63.155-2.288S559.728 525 559.728 525s9.61 267.588 26.085 268.503 71.85 2.746 71.85-4.118-48.51-313.353-48.51-313.353l-7.78-25.628-7.78-31.577s-48.51 8.238-61.781 5.034-12.814-.915-12.814-.915z"
        fill="#2f2e41"
      />
      <circle cx={540.964} cy={266.889} r={29.289} fill="#a0616a" />
      <path
        d="M592.22 315.399l-5.56 8.091-3.56 5.176-5.982 8.7-29.747 2.288s-7.226-2.334-15.564-5.743c-3.08-1.263-6.315-2.673-9.39-4.17-11.932-5.793-21.505-12.864-10.742-17.546a35.734 35.734 0 005.487-2.947 27.877 27.877 0 004.398-3.56 23.989 23.989 0 006.59-21.409l28.832-4.118c-.838 7.313 6.434 15.29 14.585 21.802 2.677 2.146 5.455 4.128 8.068 5.876 6.851 4.585 12.585 7.56 12.585 7.56z"
        fill="#a0616a"
      />
      <path
        d="M552.863 324.094s-28.145-4.805-34.552-14.873c0 0-27.687 3.432-25.399 18.077s25.17 94.732 25.17 94.732 57.206-10.984 78.257-2.746l12.814-102.054s-4.576-10.069-13.271-7.323-12.128.23-12.128.23-9.84 13.957-30.89 13.957z"
        fill="#d0cde1"
      />
      <path
        d="M578.491 484.727s19.679 21.966 8.695 25.628-24.255-14.645-24.255-14.645z"
        fill="#a0616a"
      />
      <path
        d="M584.898 486.557s-16.017 10.984-10.068 18.306 26.543-6.407 26.543-9.153-16.475-9.153-16.475-9.153z"
        fill="#a0616a"
      />
      <path
        d="M545.54 427.064l-13.27 2.288-8.696-64.528a231.696 231.696 0 00-1.158-35.083c-.97-7.78-2.59-15.257-5.254-20.493a27.877 27.877 0 004.398-3.56c3.186 5.048 8.998 15.738 10.247 28.223a45.48 45.48 0 01.005 9.404c-2.289 21.51-1.831 25.628-1.831 25.628z"
        fill="#2f2e41"
      />
      <path
        d="M514.879 313.11s-21.51-5.949-23.34 6.865.458 45.765 5.492 58.121 22.424 52.629 22.424 52.629 31.578 40.272 32.95 49.883 8.238 19.678 8.238 19.678L582.61 486.1l-43.019-72.766-18.763-50.34s7.78-45.764-5.95-49.883zM599.085 314.941l10.068 2.289s9.153 39.357 5.492 60.408-4.119 28.374-4.119 28.374l-3.203 59.951s.915 38.442-5.492 32.493-19.221-8.695-19.221-8.695 1.373-16.933 6.407-21.052c0 0 5.95-31.577 2.288-45.306s7.78-108.462 7.78-108.462z"
        fill="#d0cde1"
      />
      <path
        d="M602.746 359.333l-11.67 67.502-7.093-2.975 12.356-64.527-13.24-30.667-11.532-26.703c2.677 2.146 5.455 4.128 8.068 5.876l7.025 15.651zM568.236 236.855l-20.864-10.929-28.813 4.471-5.961 26.329 14.839-.571 4.146-9.673v9.514l6.847-.264 3.974-15.4 2.484 16.394 24.342-.497-.994-19.374z"
        fill="#2f2e41"
      />
      <ellipse cx={527.019} cy={796.374} rx={14.22} ry={5.332} fill="#2f2e41" />
      <ellipse cx={623.003} cy={796.374} rx={14.22} ry={5.332} fill="#2f2e41" />
      <path
        d="M263.546 648.795a99.804 99.804 0 01-98.792 5.754l2.201-4.49a95.5 95.5 0 10-53.344-82.709l-4.998.153a100.505 100.505 0 11154.933 81.292z"
        fill="#fff"
      />
      <path
        d="M218.318 558.375c-14.786 3.273-34.463 5.267-48.8 3.185l17.998 13.706-50.389 32.5 2.71 4.201 50.39-32.499 5.065 22.054c4.016-13.92 13.95-31.023 23.026-43.147z"
        fill="#fff"
      />
    </svg>
  );
};

SvgEnter.propTypes = {
  color: PropTypes.string
};
SvgEnter.defaultProps = {
  color: "primary"
};
const MemoSvgEnter = React.memo(SvgEnter);
export default MemoSvgEnter;
