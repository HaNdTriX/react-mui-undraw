import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDecide = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 862.674 714.509"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={161.317} cy={27.195} r={18.139} fill="#f1f1f1" />
      <circle cx={244.912} cy={66.533} r={11.443} fill="#f1f1f1" />
      <circle cx={322.36} cy={100.954} r={8.172} fill="#f1f1f1" />
      <circle cx={706.791} cy={27.195} r={18.139} fill="#f1f1f1" />
      <circle cx={623.196} cy={66.533} r={11.443} fill="#f1f1f1" />
      <circle cx={545.749} cy={100.954} r={8.172} fill="#f1f1f1" />
      <ellipse
        cx={442.401}
        cy={642.71}
        rx={97.117}
        ry={11.064}
        fill="#f1f1f1"
      />
      <path
        fill="#f1f1f1"
        d="M787.888 581.282l-656.377-4.423 6.624-449.813 656.39 9.666-6.637 444.57z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1.071 712.782h860.531M1.071 1h860.531"
      />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M861.674 2.447L539.446 132.578v444.095L861.674 713V2.447z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M566.299 481.657l231.342 53.705M566.299 446.543l231.342 35.114M566.299 409.363l231.342 24.786"
      />
      <path
        fill={color}
        d="M768.724 283.285v53.704l-185.901-12.393v-41.311h185.901z"
      />
      <path
        opacity={0.2}
        d="M768.724 283.285v53.704l-185.901-12.393v-2.066l181.769 10.328v-49.573h4.132z"
      />
      <path
        fill="#3f3d56"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M1 2.447l322.227 130.131v444.095L1 713V2.447z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M296.375 481.657L65.032 535.362M296.375 446.543L65.032 481.657M296.375 409.363L65.032 434.149"
      />
      <path
        fill={color}
        d="M93.95 283.285v53.704l185.901-12.393v-41.311H93.95z"
      />
      <path
        opacity={0.2}
        d="M93.95 283.285v53.704l185.901-12.393v-2.066l-181.77 10.328v-49.573H93.95z"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M353.249 168.533l161.61 1.988"
      />
      <path
        fill="#3f3d56"
        d="M359.775 176.794l1.383-1.448-7.141-6.801 7.306-6.626-1.346-1.481-8.896 8.071 8.694 8.285zM508.132 178.619l-1.346-1.482 7.305-6.623-7.14-6.804 1.382-1.447 8.695 8.287-8.896 8.069z"
      />
      <circle cx={434.054} cy={169.527} r={13.523} fill="#3f3d56" />
      <path
        d="M415.97 599.069s-3.688 15.981-2.458 22.128 1.229 19.67 1.229 19.67h3.688v-14.753s9.835 4.917 12.293 12.293 28.275 4.918 29.504 2.459-12.293-7.376-12.293-7.376l-11.064-33.192z"
        fill="#2f2e41"
      />
      <path
        d="M407.365 454.008s6.147 22.128 6.147 30.733-4.918 119.245 0 119.245 24.586 2.459 25.815-2.458-2.458-50.403 0-55.32 19.67-109.41 18.44-110.64-44.255-4.917-50.402 18.44z"
        fill="#2f2e41"
      />
      <path
        d="M404.906 433.11s-11.064 29.503-1.23 29.503 15.982-8.605 23.358-6.146 29.504-28.275 29.504-28.275z"
        fill="#3f3d56"
      />
      <circle cx={451.006} cy={289.892} r={19.669} fill="#ffb9b9" />
      <path
        d="M460.84 296.04s-8.605 28.274-6.146 31.962-23.357-1.23-23.357-1.23 8.605-23.357 7.376-28.274 22.128-2.459 22.128-2.459z"
        fill="#ffb9b9"
      />
      <path
        d="M446.703 315.094s-11.064-3.688-14.752 0-17.21 90.97-25.815 99.575-14.752 20.899-7.376 22.128 67.613 8.606 70.071 4.918 1.844-39.954.615-48.559-10.45-76.833-22.743-78.062z"
        fill={color}
      />
      <path
        fill="#ffb9b9"
        d="M436.869 436.797l4.917 12.294 11.064-8.606-1.229-8.605-14.752 4.917z"
      />
      <path
        d="M431.337 335.378s-.615-15.367-7.99 4.302-23.358 45.486-9.835 65.155 13.896 28.251 20.284 27.66 26.43 6.761 26.43 4.302-23.357-40.568-23.357-40.568a22.632 22.632 0 016.146-19.669c8.606-8.605 4.303-37.494-11.678-41.182z"
        opacity={0.1}
      />
      <path
        d="M439.327 320.011s-13.522-2.459-20.898 17.21-23.357 45.486-9.835 65.155 20.417 39.293 26.805 38.701 19.91-4.28 19.91-6.738-23.357-40.568-23.357-40.568a22.632 22.632 0 016.146-19.67c8.605-8.605 17.21-50.402 1.23-54.09z"
        fill={color}
      />
      <path
        d="M444.91 260.458c-10.115-1.429-20.088 4.98-25.682 13.528s-7.62 18.893-9.094 29.002a34.654 34.654 0 01-2.08 8.925c-2.445 5.616-7.981 9.855-8.882 15.913-.57 3.832.857 7.636 1.603 11.438 1.981 10.097-.954 20.716-6.339 29.484-2.403 3.914-5.908 7.869-10.499 8.01l9.622 1.49a16.796 16.796 0 01-7.963 8.137 48.752 48.752 0 0042.643-46.43c.14-3.483-.03-7.221 1.863-10.15 1.636-2.532 4.493-3.937 7.09-5.472 8.92-5.272 16.372-14.014 17.563-24.307.523-4.525-.167-9.052-.346-13.574-.188-4.764 7.812-7.98 8.89-12.54 1.639-6.933-12.024-12.554-18.39-13.454z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgDecide.propTypes = {
  color: PropTypes.string
};
SvgDecide.defaultProps = {
  color: "primary"
};
const MemoSvgDecide = React.memo(SvgDecide);
export default MemoSvgDecide;
