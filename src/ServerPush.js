import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgServerPush = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 932 741.477"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={540.726} cy={669.727} r={71.204} fill="#f2f2f2" />
      <path
        d="M556.577 723.244a88.57 88.57 0 1188.57-88.571 88.671 88.671 0 01-88.57 88.57zm0-175.984a87.413 87.413 0 1087.413 87.413 87.512 87.512 0 00-87.413-87.413z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M413.675 96.437h445.122v253.049H413.675z" />
      <path
        d="M932 350.667H412.494V54.312H932zm-517.145-2.362H929.64V56.673H414.855z"
        fill="#3f3d56"
      />
      <circle cx={636.236} cy={258.382} r={55.493} fill={color} />
      <path
        d="M646.876 262.226c-4.497-5.157-8.742-13.478-11.23-20.183-2.486 6.705-6.732 15.026-11.229 20.183l10.048-3.635v22.414h2.361v-22.414z"
        fill="#fff"
      />
      <path
        fill="#d0cde1"
        d="M695.866 64.938h-95.641V46.047h95.641l9.44 9.446-9.44 9.445z"
      />
      <path
        fill="#3f3d56"
        d="M601.41 64.938h-95.641V46.047h95.641l9.441 9.446-9.441 9.445z"
      />
      <path
        fill={color}
        d="M508.135 64.938h-95.641V46.047h95.641l9.441 9.446-9.441 9.445z"
      />
      <path
        d="M84.494 740.284l-1.268-.475c-.278-.105-27.992-10.723-40.975-34.8-12.983-24.077-6.625-53.066-6.56-53.356l.3-1.32 1.266.475c.279.105 27.992 10.723 40.975 34.8 12.983 24.077 6.626 53.066 6.56 53.356zM44.33 703.889c10.976 20.356 32.877 30.791 38.426 33.173 1.055-5.947 4.364-29.997-6.603-50.334-10.965-20.335-32.874-30.786-38.426-33.173-1.055 5.95-4.363 29.998 6.603 50.334z"
        fill="#3f3d56"
      />
      <path
        d="M52.173 696.564C75.504 710.6 84.49 738.482 84.49 738.482s-28.842 5.122-52.173-8.914S0 687.65 0 687.65s28.842-5.123 52.173 8.914z"
        fill={color}
      />
      <path
        d="M340.035 335.49s40.606 21.055 25.567 40.606-40.606-22.559-40.606-25.567 15.039-15.039 15.039-15.039z"
        fill="#a0616a"
      />
      <path
        d="M294.917 281.348s27.07 33.087 34.59 37.599 13.536 9.023 13.536 10.527 6.016 9.024 6.016 9.024l-24.063 21.055s-27.071-36.095-30.08-36.095 0-42.11 0-42.11z"
        fill="#575a89"
      />
      <path
        fill="#a0616a"
        d="M159.562 667.861l-18.047 30.079 27.071 12.031 25.567-7.52-15.04-37.598-19.551 3.008z"
      />
      <path
        d="M210.696 340.002l-15.04 142.874s-33.086 67.677-33.086 121.82-12.032 69.18-12.032 69.18l37.599 6.016 40.606-132.346 67.678-123.324L276.869 300.9l-33.086-12.031z"
        fill="#2f2e41"
      />
      <path
        d="M156.554 696.436s-11.28-15.792-11.28-11.28-21.806 54.894-3.76 54.894 66.174-3.008 75.198 0 39.102-3.008 36.094-21.055-39.102-16.544-39.102-16.544-21.754-30.322-27.42-19.673l-5.667 10.65z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M318.98 667.861l-18.047 30.079 27.07 12.031 25.567-7.52-15.039-37.598-19.551 3.008z"
      />
      <path
        d="M315.972 696.436s-11.28-14.288-11.28-9.776-21.807 53.39-3.76 53.39 66.174-3.008 75.198 0 39.102-3.008 36.094-21.055-39.102-16.544-39.102-16.544-21.755-30.322-27.42-19.673l-5.667 10.65zM186.633 338.498s4.512 40.606 28.575 78.205 58.654 103.772 58.654 103.772-3.008 66.173 13.535 103.772 19.551 57.15 19.551 57.15l40.607-10.528s-22.56-126.331-13.536-154.906-34.59-177.465-34.59-177.465l-40.607-34.59-52.638-6.017z"
        fill="#2f2e41"
      />
      <circle cx={273.311} cy={56.597} r={34.591} fill="#a0616a" />
      <path
        d="M245.048 58.337l-18.103 38.728 50.825 35.204s-5.983-41.927 5.288-52.544-38.01-21.388-38.01-21.388z"
        fill="#a0616a"
      />
      <path
        d="M284.39 135.466s-24.064-49.63-43.615-49.63-70.685 34.59-69.181 42.11 1.504 9.024 1.504 13.536-10.528 4.512-1.504 7.52 10.527 6.015 10.527 6.015l-7.52 192.505s33.087 12.031 45.119 7.52 24.063-34.591 24.063-34.591-3.008 40.606 9.023 39.102 57.15-4.512 58.654-10.528-9.024-138.362-9.024-138.362z"
        fill="#575a89"
      />
      <path
        d="M174.602 358.05s-18.048 66.172 7.52 60.157 18.047-58.654 18.047-58.654z"
        fill="#a0616a"
      />
      <path
        d="M206.184 123.434L162.57 234.726s-6.016 12.031 0 21.055-3.008 63.166 3.008 75.197 6.016 33.087 6.016 33.087l34.59 3.008 7.52-132.347 39.102-84.22s-3.007-34.591-46.622-27.072z"
        fill="#575a89"
      />
      <path d="M217.464 119.675s-27.071 7.52-36.095 34.59z" opacity={0.1} />
      <path
        d="M250.642 72.378c3.366-.201 6.652.936 9.994 1.38 11.957 1.587 24.396-7.089 27.036-18.858a14.47 14.47 0 011.383-4.506c1.84-3.004 6.03-3.577 9.486-2.886s6.73 2.308 10.248 2.492c5.432.285 10.648-3.06 13.543-7.665s3.715-10.273 3.324-15.699l-2.604 2.734a13.228 13.228 0 01-1.18-7.19 8.343 8.343 0 00-7.901 2.022c-2.297.245-.564-4.259-2.27-5.815-.714-.652-1.81-.53-2.776-.52-4.886.047-8.838-3.69-12.687-6.697A53.912 53.912 0 00273.468.783c-5.517-1.076-11.383-1.249-16.614.806-4.297 1.687-7.893 4.76-11.22 7.958-8.19 7.876-15.444 17.13-18.851 27.97a47.084 47.084 0 00-.226 27.302c1.373 4.634 5.511 20.505 11.57 20.875 7.611.464 3.04-12.75 12.515-13.316z"
        fill="#2f2e41"
      />
      <path
        opacity={0.1}
        d="M253.1 183.008l-35.421 51.95-11.328 120.671L253.1 183.008z"
      />
      <path fill="#3f3d56" d="M.431 739.115h556.108v2.361H.431z" />
      <path
        d="M408.768 425.296L326.3 372.357c29.795-26.291 50.787-55.825 58.041-90.417l82.469 52.94a214.511 214.511 0 00-58.042 90.416z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M393.69 311.091l42.724 27.427-1.276 1.987-42.724-27.427zM388.587 319.04l42.724 27.426-1.275 1.987-42.725-27.427zM383.485 326.989l42.724 27.426-1.275 1.987-42.725-27.427zM378.381 334.937l42.725 27.427-1.275 1.987-42.725-27.427zM373.278 342.886l42.725 27.426-1.276 1.987-42.724-27.426zM368.177 350.834l42.724 27.427-1.275 1.987L366.9 352.82zM363.074 358.783l42.724 27.427-1.275 1.986-42.725-27.426zM357.971 366.732l42.725 27.427-1.276 1.987-42.724-27.427z"
      />
      <path
        d="M425 409.036l-96.55-16.787c17.259-35.794 25.145-71.16 18.407-105.855l96.549 16.787A214.51 214.51 0 00425 409.036z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M366.784 309.635l50.02 8.697-.405 2.326-50.02-8.697zM365.166 318.938l50.02 8.698-.404 2.326-50.02-8.698zM363.548 328.244l50.02 8.698-.404 2.326-50.02-8.698zM361.93 337.55l50.019 8.697-.404 2.326-50.02-8.697zM360.311 346.856l50.02 8.697-.404 2.326-50.02-8.697zM358.693 356.162l50.02 8.697-.404 2.326-50.02-8.697zM357.075 365.468l50.02 8.697-.405 2.327-50.019-8.698zM355.457 374.774l50.02 8.697-.405 2.327-50.019-8.698z"
      />
    </svg>
  );
};

SvgServerPush.propTypes = {
  color: PropTypes.string
};
SvgServerPush.defaultProps = {
  color: "primary"
};
export default SvgServerPush;
