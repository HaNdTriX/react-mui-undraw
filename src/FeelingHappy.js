import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgFeelingHappy = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 644 673"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={204} cy={659} rx={204} ry={14} fill="#e6e6e6" />
      <path
        d="M285.33 393.593c2.001-11.244 12.366-17.851 22.7-20.496 11.794-3.018 24.367-2.647 36.37-1.285 24.173 2.741 47.907 10.15 72.437 9.001a122.02 122.02 0 0059.952-19.292 118.068 118.068 0 0042.089-47.18 122.145 122.145 0 0012.27-62.507c-.201-2.68-.506-5.348-.882-8.009-.27-1.903-3.16-1.094-2.893.798a118.187 118.187 0 01-8.722 63.084 115.317 115.317 0 01-39.737 48.788 119.323 119.323 0 01-59.097 21.14c-24.216 1.768-47.747-5.193-71.545-8.346-12.019-1.592-24.278-2.185-36.278-.098-10.63 1.85-21.535 6.603-26.992 16.451a23.168 23.168 0 00-2.566 7.154c-.336 1.887 2.555 2.698 2.893.797z"
        fill="#3f3d56"
      />
      <circle cx={519} cy={125} r={125} fill={color} />
      <circle cx={472} cy={100} r={32} fill="#fff" />
      <path
        d="M482.026 164A19.024 19.024 0 00501 182h52a19.024 19.024 0 0018.974-18z"
        fill="#fff"
      />
      <circle cx={460} cy={110.5} r={17} fill="#3f3d56" />
      <circle cx={466} cy={103.5} r={4} fill="#fff" />
      <circle cx={576} cy={100.5} r={32} fill="#fff" />
      <circle cx={564} cy={110.5} r={17} fill="#3f3d56" />
      <circle cx={570} cy={103.5} r={4} fill="#fff" />
      <circle cx={521} cy={136} r={12} fill="#3f3d56" />
      <path fill={color} d="M517 243h22v17h-22z" />
      <path
        d="M223.262 577.12s14.116 41.34 8.066 56.465l18.15 16.133 11.091-14.117s-12.1-12.1-11.091-21.174 2.016-41.341 2.016-41.341z"
        fill="#ffb9b9"
      />
      <path
        d="M290.813 657.779c-.824.481-1.61.938-2.333 1.357h-62.585a3.303 3.303 0 01-1.623-3.374c.292-1.496 1.04-4.54 1.966-8.04 2.194-8.281 5.415-19.124 6.112-17.97a.012.012 0 01.013.013c.977 1.8 2.993 9.866 8.04 8.864 5.048-1.014 13.113-3.03 13.113-3.03s-2.879-6.468-.127-9.08a3.857 3.857 0 012.144-1.003c6.049-1.001 6.049 8.066 6.049 8.066l22.18 12.098a36.842 36.842 0 015.58 2.042c4.502 2.105 8.953 5.707 1.471 10.057z"
        fill="#2f2e41"
      />
      <path
        d="M182.93 561.994l-26.217 31.258-7.058 16.133 9.075 7.058 8.066-3.025s7.058-18.15 14.117-21.174 24.2-23.191 24.2-23.191z"
        fill="#ffb9b9"
      />
      <path
        d="M237.882 538.007l-13.37 24.784-9.579 17.746c-3.065 1.825-7.149 1.795-11.545.716a44.217 44.217 0 01-6.01-2.006c-11.999-4.91-24.169-14.661-24.169-14.661l23.03-28.777 7.522-9.388 1.785-2.238 8.6 3.68 15.176 6.483z"
        fill="#2f2e41"
      />
      <path
        d="M178.211 323.992l-10.68 43.81 10.994 56.204s.27 22.976 10.345 21.232-.484-24.915-.484-24.915l-4.927-46.086 15.755-45.53c1.276-3.687-.336-7.647-4.032-9.904-6.239-3.81-15.104-1.1-16.97 5.189zM215.7 286.221l-9.075 28.233-17.142-9.075s7.058-20.166 7.058-23.191 19.158 4.033 19.158 4.033z"
        fill="#ffb9b9"
      />
      <circle cx={208.641} cy={276.138} r={21.175} fill="#ffb9b9" />
      <path
        d="M214.187 321.008l-4.033-4.033-1.009-5.042s-13.108-17.141-24.2-11.091c-3.465 1.89-6.045 6.243-7.954 11.333a55.057 55.057 0 001.266 40.953l17.78 41.487 40.333-4.034-7.058-26.216s7.058-16.133-6.05-27.224z"
        fill={color}
      />
      <path
        d="M237.882 538.007l-13.37 24.784-9.579 17.746c-3.065 1.825-7.149 1.795-11.545.716-.766-5.102 3.811-32.064.212-54.045l.16-.787 1.786-2.238 8.6 3.68 15.176 6.483z"
        opacity={0.3}
      />
      <path
        d="M237.882 388.06s-26.216-16.132-44.366 4.034l1.009 6.05s-15.125 17.141-6.05 53.44 23.191 131.08 23.191 131.08 33.274 2.017 48.4-9.074c0 0-5.042-125.03-22.184-137.13z"
        fill="#2f2e41"
      />
      <path
        d="M183.216 331.901l28.45 34.985 51.424 25.208s18.47 13.67 23.168 4.59-20.143-14.673-20.143-14.673l-39.695-23.925-26.754-40.068c-2.167-3.245-6.296-4.354-10.328-2.773-6.806 2.667-10.004 11.369-6.122 16.656z"
        fill="#ffb9b9"
      />
      <path
        d="M164.367 611.203s6.18-7.773 9.873-2.875-4.354 9.094-4.354 9.094l-.469 25.264s4.391 19.318-7.463 11.854-12.32-8.357-14.652-12.827-7.15-22.427-11.308-28.219-7.967-17.452-3.03-18.89 27.945-6.556 26.798-4.851-7.365 7.224-4.14 11.227 8.745 10.223 8.745 10.223zM219.73 258.065c0-.025.003-.05.003-.077a29.241 29.241 0 10-29.241 29.241c.679 0 3.365 5.088 4.033 5.042.04-15.435 10.024-33.17 25.206-34.206z"
        fill="#2f2e41"
      />
      <circle cx={159.234} cy={235.806} r={19.158} fill="#2f2e41" />
      <path
        d="M158.355 206.785a19.131 19.131 0 015.466 37.5 19.144 19.144 0 10-5.466-37.5zM203.6 251.939h15.348a12.884 12.884 0 0112.884 12.884v5.265H203.6v-18.15z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgFeelingHappy.propTypes = {
  color: PropTypes.string
};
SvgFeelingHappy.defaultProps = {
  color: "primary"
};
export default SvgFeelingHappy;
