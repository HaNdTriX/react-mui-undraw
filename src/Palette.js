import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPalette = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1114.705 767.391"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M343.401 334.85c0 129.31-76.873 174.46-171.7 174.46S0 464.16 0 334.85 171.7 41.034 171.7 41.034 343.402 205.54 343.402 334.85z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M165.446 489.53l1.758-108.222 73.183-133.885-72.907 116.909.79-48.661 50.438-96.865-50.228 83.988 1.421-87.519 54.01-77.116-53.786 63.354.888-160.478-5.582 212.444.458-8.764-54.912-84.052 54.032 100.876-5.117 97.743-.152-2.595-63.304-88.452 63.112 97.617-.64 12.224-.114.184.052 1.004-12.981 247.982h17.344l2.081-128.088 62.957-97.378-62.801 87.75z"
      />
      <path
        d="M1114.705 643.391c0 44.735-230.125 124-514 124s-514-79.265-514-124 230.126-38 514-38 514-6.735 514 38z"
        fill="#3f3d56"
      />
      <path
        d="M1114.705 643.391c0 44.735-230.125 124-514 124s-514-79.265-514-124 230.126-38 514-38 514-6.735 514 38z"
        opacity={0.1}
      />
      <ellipse cx={600.705} cy={643.391} rx={514} ry={81} fill="#3f3d56" />
      <ellipse cx={619.401} cy={654.891} rx={122} ry={25.5} opacity={0.1} />
      <circle cx={480.397} cy={96.063} r={48.555} fill="#2f2e41" />
      <circle
        cx={386.561}
        cy={83.012}
        r={15.496}
        fill="#2f2e41"
        opacity={0.3}
      />
      <circle
        cx={408.555}
        cy={49.255}
        r={15.496}
        fill="#2f2e41"
        opacity={0.5}
      />
      <circle cx={430.549} cy={15.498} r={15.496} fill="#2f2e41" />
      <circle cx={430.549} cy={15.498} r={15.496} fill="#fff" opacity={0.3} />
      <circle cx={479.226} cy={329.54} r={48.555} fill={color} />
      <circle cx={443.218} cy={417.17} r={15.496} fill={color} opacity={0.3} />
      <circle cx={416.002} cy={387.462} r={15.496} fill={color} opacity={0.5} />
      <circle cx={388.786} cy={357.754} r={15.496} fill={color} />
      <circle cx={388.786} cy={357.754} r={15.496} fill="#fff" opacity={0.3} />
      <path
        d="M557.487 595.23s-.296 17.33-1.777 21.922 0 10.369 0 10.369l-5.63 14.813h19.998s4.74-21.627 4.74-23.552-2.814-18.22-2.814-18.22z"
        fill="#ffb9b9"
      />
      <path
        d="M572.892 641.149s-5.036-13.776-26.366 0c0 0-8.444 12.442-3.703 16.294s12.887 9.035 19.7 6.073 9.48-6.221 10.37-12.295a30.523 30.523 0 000-10.072z"
        fill="#2f2e41"
      />
      <path
        d="M665.324 595.23s.296 17.33 1.777 21.922 0 10.369 0 10.369l5.63 14.813h-19.998s-4.74-21.627-4.74-23.552 2.814-18.22 2.814-18.22z"
        fill="#ffb9b9"
      />
      <path
        d="M649.918 641.149s5.037-13.776 26.367 0c0 0 8.443 12.442 3.703 16.294s-12.887 9.035-19.7 6.073-9.48-6.221-10.37-12.295a30.523 30.523 0 010-10.072z"
        fill="#2f2e41"
      />
      <path
        d="M552.45 268.757s14.517 19.997 16.295 26.367 12.887 5.777 12.146 0-20.145-36.736-20.145-36.736zM669.767 262.24s-20.441 34.661-15.257 38.513 24.886-30.218 24.886-30.218z"
        fill="#ffb9b9"
      />
      <path
        d="M650.66 289.347h-33.774c-6.221 0-26.663 1.63-29.922 0s-15.405-1.481-15.405-1.481-24.737 56.584-18.071 101.763-14.072 201.453-4.296 206.193 18.516 10.665 26.96 10.961 24.144-3.407 25.921-5.925 10.517-222.042 10.517-222.042 3.111 216.561 8.888 221.45 22.367 8.147 32.736 6.517 21.034-7.406 23.108-11.257-7.258-112.577-7.258-112.577 14.368-166.94-9.332-187.825z"
        fill="#2f2e41"
      />
      <path
        d="M601.037 117.371s7.406 24.293-7.259 31.255 12.591 63.695 12.591 63.695 38.069-48.734 38.069-59.4l-6.37-6.369s-12.442-20.886-8.591-27.403-28.44-1.778-28.44-1.778z"
        fill="#ffb9b9"
      />
      <path
        d="M601.037 117.371s7.406 24.293-7.259 31.255 12.591 63.695 12.591 63.695 38.069-48.734 38.069-59.4l-6.37-6.369s-12.442-20.886-8.591-27.403-28.44-1.778-28.44-1.778z"
        opacity={0.1}
      />
      <path
        d="M611.85 200.174s-8.888-23.256-7.851-31.995-1.428-23.03-5.232-23.439-42.91 12.33-46.909 14.996-7.554 56.88-7.554 56.88l17.479 40.291s1.481 33.032 9.776 34.514 86.655 5.629 89.173 2.814 28.292-79.692 28.292-79.692l5.777-45.03s-7.258-9.037-14.96-11.11-32.589-10.962-35.403-11.258-11.702 1.333-12.443 4-20.145 49.03-20.145 49.03z"
        fill="#d0cde1"
      />
      <circle cx={616.96} cy={102.485} r={30.366} fill="#ffb9b9" />
      <path
        d="M627.418 46.348c-5.685-6.858-17.303-7.6-23.813-1.52-1.756 1.64-3.14 3.655-4.972 5.208a23.407 23.407 0 01-5.865 3.377c-6.944 3.04-14.317 5.2-20.793 9.138s-12.151 10.168-12.954 17.705c-.424 3.987.537 8.06-.193 12.002-1.143 6.18-6.107 10.789-10.262 15.502-3.948 4.478-7.5 10.86-4.675 16.118 2.402 4.473 8.288 5.8 11.596 9.652 3.818 4.447 3.33 11.179 1.439 16.727s-4.966 10.761-5.744 16.571c-1.28 9.563 3.974 18.936 10.817 25.737 3.131 3.113 6.734 5.919 10.96 7.194a18.995 18.995 0 0018.297-4.63 21 21 0 005.837-18.127c-.576-3.592-2.053-7.116-1.67-10.734.788-7.43 8.893-12.116 10.813-19.337 1.965-7.388-2.994-14.583-5.913-21.65-3.681-8.91-4.2-18.778-4.287-28.42-.05-5.516.518-11.975 5.167-14.944 3.038-1.941 6.903-1.728 10.498-1.994 4.192-.31 8.363-1.36 12.549-.973s8.606 2.703 9.743 6.75c1.273 4.53-1.945 9.131-1.914 13.837.015 2.307.816 4.556.83 6.863.042 6.702-6.168 11.492-9.65 17.218a23.368 23.368 0 002 26.427c3.547 4.234 8.896 7.696 9.51 13.185.344 3.08-.95 6.069-1.73 9.067s-.907 6.58 1.272 8.783c1.478 1.493 3.674 1.985 5.756 2.262a44.944 44.944 0 0016.086-.78 7.654 7.654 0 003.695-1.669c2.618-2.536.979-7.032 2.188-10.47 1.182-3.36 4.857-5.113 8.303-6.012s7.17-1.373 9.981-3.56c3.124-2.431 4.494-6.627 4.318-10.581s-1.701-7.724-3.48-11.26a3.653 3.653 0 01-.578-2.175c.346-2.038 3.255-1.862 5.322-1.887 5.456-.066 9.642-5.655 9.793-11.109s-2.754-10.543-6.223-14.754-7.594-7.893-10.636-12.422c-5.201-7.744-7.008-17.624-13.326-24.487a24.038 24.038 0 00-11.363-6.793c-3.35-.911-8.379.23-10.99-2.157-1.02-.932-1.455-2.434-2.454-3.425-1.622-1.61-3.84-2.084-5.66-3.386-3.5-2.502-4.953-6.843-7.625-10.067z"
        fill="#2f2e41"
      />
      <path
        d="M557.487 160.92l-5.629-1.184s-69.916 55.251-73.323 62.361-12.59 13.48 6.814 25.034 67.25 30.218 67.25 30.218l11.11-19.701-54.363-27.996s12.59-17.776 38.81-13.776zM689.913 167.29l4.888 2.222s73.62 53.178 64.88 66.51-79.84 45.03-79.84 45.03l-12.592-19.85s.976-.461 2.655-1.263c10.608-5.067 49.27-23.716 46.968-25.25-2.666-1.778-25.034-21.627-31.255-22.368s4.296-45.03 4.296-45.03z"
        fill="#d0cde1"
      />
      <circle cx={759.476} cy={342.136} r={48.555} fill="#ff6584" />
      <circle cx={795.449} cy={429.781} r={15.496} fill="#ff6584" />
      <circle cx={795.449} cy={429.781} r={15.496} fill="#fff" opacity={0.3} />
      <circle
        cx={822.677}
        cy={400.084}
        r={15.496}
        fill="#ff6584"
        opacity={0.5}
      />
      <circle
        cx={849.905}
        cy={370.387}
        r={15.496}
        fill="#ff6584"
        opacity={0.3}
      />
      <path
        d="M1053.401 556.878c0 59.806-35.548 80.68-79.41 80.68-1.014 0-2.028-.01-3.03-.031a112.253 112.253 0 01-6.041-.289c-39.583-2.785-70.329-24.737-70.329-80.36 0-57.575 73.616-130.251 79.08-135.566l.01-.01c.203-.204.31-.3.31-.3s79.41 76.081 79.41 135.876z"
        fill={color}
      />
      <path
        d="M971.099 628.413l29.05-40.575-29.114 45.025-.075 4.664a112.253 112.253 0 01-6.04-.289l3.127-59.816-.022-.47.054-.085.299-5.646-29.188-45.142 29.273 40.906.075 1.195 2.358-45.207-24.983-46.647 25.293 38.707 2.465-93.721.01-.31v.3l-.416 73.913 24.877-29.294-24.983 35.666-.651 40.468 23.222-38.836-23.318 44.79-.363 22.508 33.713-54.064-33.841 61.908z"
        fill="#3f3d56"
      />
      <path
        d="M227.401 637.628c0 28.926-17.193 39.022-38.407 39.022-.49 0-.98-.005-1.466-.015a54.293 54.293 0 01-2.922-.14c-19.144-1.347-34.015-11.964-34.015-38.867 0-27.846 35.605-62.997 38.248-65.568l.005-.005c.098-.098.15-.144.15-.144s38.407 36.797 38.407 65.717z"
        fill={color}
      />
      <path
        d="M187.595 672.227l14.05-19.625-14.08 21.777-.037 2.256a54.293 54.293 0 01-2.922-.14l1.513-28.93-.01-.228.025-.04.145-2.731-14.117-21.834 14.158 19.785.036.578 1.14-21.865-12.082-22.561 12.233 18.72 1.192-45.329.005-.15v.145l-.201 35.75 12.032-14.169-12.084 17.25-.315 19.573 11.232-18.783-11.278 21.663-.176 10.886 16.306-26.149-16.368 29.943z"
        fill="#3f3d56"
      />
      <path
        d="M894.401 656.628c0 28.926-17.193 39.022-38.407 39.022-.49 0-.98-.005-1.466-.015a54.293 54.293 0 01-2.922-.14c-19.144-1.347-34.015-11.964-34.015-38.867 0-27.846 35.605-62.997 38.248-65.568l.005-.005c.098-.098.15-.144.15-.144s38.407 36.797 38.407 65.717z"
        fill={color}
      />
      <path
        d="M854.595 691.227l14.05-19.625-14.08 21.777-.037 2.256a54.293 54.293 0 01-2.922-.14l1.513-28.93-.01-.228.025-.04.145-2.731-14.117-21.834 14.158 19.785.036.578 1.14-21.865-12.082-22.561 12.233 18.72 1.192-45.329.005-.15v.145l-.201 35.75 12.032-14.169-12.084 17.25-.315 19.573 11.232-18.783-11.278 21.663-.176 10.886 16.306-26.149-16.368 29.943z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgPalette.propTypes = {
  color: PropTypes.string
};
SvgPalette.defaultProps = {
  color: "primary"
};
const MemoSvgPalette = React.memo(SvgPalette);
export default MemoSvgPalette;
