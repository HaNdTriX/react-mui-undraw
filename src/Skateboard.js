import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSkateboard = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 896 525.827"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M228.134 484.58c12.428 23.048 38.806 32.943 38.806 32.943s6.227-27.476-6.201-50.525-38.806-32.943-38.806-32.943-6.227 27.475 6.201 50.524z"
        fill="#3f3d56"
      />
      <path
        d="M236.677 476.996c22.438 13.5 31.08 40.314 31.08 40.314s-27.738 4.927-50.177-8.573-31.08-40.313-31.08-40.313 27.738-4.927 50.177 8.572z"
        fill={color}
      />
      <path fill="#2f2e41" d="M0 523.827h896v2H0z" />
      <path
        d="M614.347 38.327l41-8s10-34 22-30-8 38-8 38l-57 26zM365.347 72.327l-18 23s-26-1-18 13 26 6 27 3 30-29 30-29z"
        fill="#a0616a"
      />
      <path d="M438.847 45.827l15-8s64-5 88 11-101 18-101 18z" fill={color} />
      <path
        d="M467.347 31.327s-8-19 3-21a49.37 49.37 0 0119 0l-12 10z"
        fill="#3f3d56"
      />
      <path
        d="M467.347 31.327s-8-19 3-21a49.37 49.37 0 0119 0l-12 10z"
        opacity={0.1}
      />
      <path
        d="M412.347 146.327l-29-2 5 9s-40 12-27 46 33 66 33 66l13 25s27 4 28-4 0-12-5-16-8-12-8-16 1-8-2-10-4-5-4-11-11-28-11-28 35-1 46 8 47 43 47 43a30.296 30.296 0 015 7c2 4 2 6 6 8s1 10 0 11-11 41-11 41-11 19 1 20 23 2 24 0a54.362 54.362 0 014-8c3-5 0-16 0-16s29-37 20-60-28-75-28-75l-29-12-53-19z"
        fill="#2f2e41"
      />
      <path
        d="M410.347 285.327s-6 23-8 24-24 20-9 23 26 2 29-1 2-6 7-7 14-4 13-11-6-26-9-28-23 0-23 0zM497.347 336.327s-9 7-4 20 12 27 12 27 8 25 21 21c5.282-1.625 7.922-6.055 9.196-10.744a25.696 25.696 0 00-3.632-20.91l-7.564-11.346-8-21z"
        fill="#2f2e41"
      />
      <path
        d="M472.347 42.327s-12-1-14 2-11 43 0 47 44 11 49 6 7-49 7-49z"
        fill="#a0616a"
      />
      <path
        d="M472.347 42.327s-12-1-14 2-11 43 0 47 44 11 49 6 7-49 7-49z"
        opacity={0.1}
      />
      <path
        d="M454.347 75.327s14 14 23 12 30-11 32-15 27-5 27-5l-27 75 19 63s11-13-19-14-70-16-77-36c0 0-44-6-46-7s5-7 5-7l29-8 21-27z"
        fill="#f2f2f2"
      />
      <path
        d="M463.347 44.327s5-7 0-7-19 0-24 1-24-4-26 2-2 43 2 46 6 3 1 9-17 26-14 33-32 9-27 17a16.425 16.425 0 0013 8s2-16 14-8 28 28 41 15 18-25 19-42 0-28-2-38 3-36 3-36zM515.347 63.327s8 7 0 24-29 57-12 83 24 33 20 38a19.425 19.425 0 00-4 11l11-4s2-14 6-24-8-40-8-40l4-39s16-25 18-26-4-44-4-44-10-3-15 0-16 21-16 21z"
        fill={color}
      />
      <path
        d="M419.347 41.327h-6l-41 21s-3-13-5-10-1 11-6 13-8 5 0 9 9 1 9 8 6 8 11 6 6-3 11-1 2 5 9 2 25-2 25-2zM539.347 44.327l7-2s21 2 26 2 10-1 13-1 18-2 20-4 11-7 12-4 12 22 2 31-12 5-18 9-54 12-55 11-7-42-7-42z"
        fill={color}
      />
      <circle cx={498.347} cy={52.327} r={30} fill="#a0616a" />
      <path
        d="M476.271 53.534a5.682 5.682 0 01.62 2.1 7.854 7.854 0 007.517 6.055 4.694 4.694 0 004.07 5.683 25.863 25.863 0 004.457-8.727 8.013 8.013 0 011.506-3.422c1.065-1.13 2.73-1.407 4.27-1.605a224.533 224.533 0 0124.062-1.793 5.982 5.982 0 003.164-.647c2.26-1.457 1.506-4.97.078-7.25a22.687 22.687 0 00-12.099-9.44c-3.587-1.166-7.395-1.41-11.142-1.847-5.017-.585-10.01-1.534-15.062-1.564s-10.274.943-14.402 3.852c-3.007 2.12-7.942 8.058-5.527 11.805.386.6 1.607.896 2.127 1.508.707.832.71 2.09 1.513 2.846 1.34 1.26 3.772.86 4.848 2.446z"
        fill="#2f2e41"
      />
      <path
        d="M498.347 2.327s-34 12-31 29 12 37 31 36 29-21.68 29-21.68l-5-28.32s-19-15-24-15z"
        fill="#3f3d56"
      />
      <path
        d="M494.057 62.336s13.367-14.503 20.096-6.094c0 0-.306-.415-20.096 6.094zM519.296 433.143c-17.926 0-40.105-5.939-61.718-27.403-52.91-52.549-103.177-57.82-103.678-57.866l.186-1.992c.509.048 51.488 5.39 104.902 58.438 27.446 27.26 55.775 28.929 74.707 25.528a93.363 93.363 0 0034.999-14.106l1.182 1.613a95.445 95.445 0 01-35.748 14.447 83.498 83.498 0 01-14.832 1.34z"
        fill="#2f2e41"
      />
      <circle cx={380.847} cy={377.827} r={12} fill="#2f2e41" />
      <circle cx={465.847} cy={433.827} r={12} fill="#2f2e41" />
      <path
        d="M683.5 524.827q-36.476-5.71-70.143-9.714L622 497.827c-3-1-16 9-16 9l11-50c-15 2-22 53-22 53l-17-17 8.368 19.247c-68.68-7.216-127.946-9.469-177.765-8.952L416 488.327c-3-1-16 9-16 9l11-50c-15 2-22 53-22 53l-17-17 8.863 20.386a997.848 997.848 0 00-102.022 8.216C286.222 488.933 312 466.827 312 466.827c-19.82 6.167-30.132 16.213-35.47 25.525A401.561 401.561 0 01298 353.327s-40 90-34 150l.761 10.658c-34.8 5.429-52.261 10.842-52.261 10.842z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgSkateboard.propTypes = {
  color: PropTypes.string
};
SvgSkateboard.defaultProps = {
  color: "primary"
};
const MemoSvgSkateboard = React.memo(SvgSkateboard);
export default MemoSvgSkateboard;
