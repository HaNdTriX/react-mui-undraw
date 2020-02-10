import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDoneChecking = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 967.858 731.613"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M204.301 429.564l171.62 115.738L288.7 674.64l-171.62-115.738z"
      />
      <path
        d="M110.889 656.56l-1.778-.918c23.082-44.624 10.74-102.575-3.678-143.332a439.29 439.29 0 00-37.278-78.674l1.69-1.069a441.537 441.537 0 0137.472 79.075c14.551 41.13 26.98 99.66 3.572 144.918zM115.029 503.927l12.974-71.004 1.966.36-12.974 71.003z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M40.268 494.782l1.465-1.363 67 72-1.466 1.363zM128.198 619.521l33.984-47.012 1.621 1.172-33.984 47.012z"
      />
      <circle cx={134} cy={404.101} r={10} fill="#3f3d56" />
      <circle cx={25} cy={481.101} r={10} fill="#3f3d56" />
      <circle cx={69} cy={491.101} r={10} fill="#3f3d56" />
      <circle cx={49} cy={530.101} r={10} fill="#3f3d56" />
      <circle cx={174} cy={555.101} r={10} fill="#3f3d56" />
      <circle cx={141} cy={566.101} r={10} fill="#3f3d56" />
      <circle cx={164} cy={598.101} r={10} fill="#3f3d56" />
      <circle cx={59} cy={416.101} r={10} fill="#3f3d56" />
      <path
        d="M512 667.101c21.213 22.742-1.823 102.25-256 43-137.694-32.096-256-31.402-256-43s114.615 1 256 1 248.089-9.48 256-1z"
        fill="#3f3d56"
      />
      <path
        d="M512 667.101c21.213 22.742-1.823 102.25-256 43-137.694-32.096-256-31.402-256-43s114.615 1 256 1 248.089-9.48 256-1z"
        opacity={0.1}
      />
      <path
        d="M512 667.101c21.213 22.742-1.823 80.25-256 21-137.694-32.096-256-9.402-256-21s114.615-21 256-21 248.089 12.52 256 21z"
        fill="#3f3d56"
      />
      <path
        d="M245.771 159.101h11.503a27.612 27.612 0 0127.612 27.612v39.115H218.16v-39.115a27.612 27.612 0 0127.612-27.612z"
        fill="#2f2e41"
      />
      <path
        d="M239.32 212.93s2.798 22.381-3.497 23.78-9.093 9.792-9.093 9.792l20.983 13.289 21.682-4.197-2.098-16.086s-5.595-16.087-2.798-26.579-25.179 0-25.179 0z"
        fill="#a0616a"
      />
      <path
        d="M239.32 212.93s2.798 22.381-3.497 23.78-9.093 9.792-9.093 9.792l20.983 13.289 21.682-4.197-2.098-16.086s-5.595-16.087-2.798-26.579-25.179 0-25.179 0z"
        opacity={0.1}
      />
      <path
        d="M211.343 472.416l5.595 36.37s-1.398 37.07 8.394 69.942l9.791 32.873 9.792-11.19 2.798-44.764s.7-16.086-2.098-28.676l2.098-58.752zM263.1 466.121l4.896 63.648s-2.098 67.844-2.797 69.942 13.988 4.896 13.988 4.896 22.382-53.156 15.388-95.122c0 0-4.197-35.67 1.398-44.763s-32.873 1.4-32.873 1.4z"
        fill="#a0616a"
      />
      <circle cx={251.21} cy={199.64} r={24.48} fill="#a0616a" />
      <path
        d="M231.626 242.305s2.798 10.492 16.087 9.792 19.584-12.59 19.584-12.59 16.087 8.394 23.78 7.694l-2.098 34.272s-13.289 36.37-10.491 44.763 59.45 96.52 52.457 130.793c0 0 6.994 9.792-19.584 11.89s-25.879-2.798-47.561 6.994-51.758 4.197-58.752 2.798-31.474-5.596-31.474-5.596 5.595-103.515 37.77-138.486l-.7-62.948-2.798-23.78s22.567-11.191 23.174-8.393z"
        fill="#2f2e41"
      />
      <path
        d="M335.141 289.167s35.67 22.381 21.682 31.474-63.93 32.006-63.93 32.006-38.186-18.018-28.394-25.012 26.578 12.59 26.578 12.59l43.365-25.879-11.191-12.59zM189.66 308.051v102.116s-3.496 39.168 9.793 36.37 2.798-37.769 2.798-37.769l4.196-60.15v-33.573z"
        fill="#a0616a"
      />
      <path
        d="M247.014 583.624s-6.295 13.29-19.584 5.596c0 0 3.497 11.89 3.497 14.688s3.497 17.485 4.896 18.884 0 32.174 6.994 33.573 13.29-16.087 13.29-22.382-2.1-26.578-2.1-26.578 1.4-13.29-6.294-17.486z"
        fill="#2f2e41"
      />
      <path
        d="M283.384 599.012l-19.584-2.798L259.603 613s-11.19 30.076-11.89 34.971-13.289 25.18-2.098 25.18 22.381.7 24.48-5.596 6.294-27.977 9.792-35.67-1.4-15.388-1.4-15.388zM284.783 249.999l6.294-2.798s6.295 0 16.087 11.191 35.67 33.572 35.67 33.572-17.485 17.486-21.681 16.087-36.37-32.173-36.37-32.173zM211.343 247.9h-3.497s-14.688 1.4-16.786 19.585-5.596 39.867-6.994 41.965 18.185 11.19 21.682 11.19 9.092-54.554 9.092-54.554zM269.403 188.506h-33.69l-7.627-17.53h47.038l-5.721 17.53z"
        fill="#2f2e41"
      />
      <ellipse
        cx={342.608}
        cy={281.182}
        rx={1.696}
        ry={4.524}
        transform="rotate(-16.16 -11.955 647.884)"
        fill="#a0616a"
      />
      <ellipse
        cx={391.314}
        cy={282.581}
        rx={4.524}
        ry={1.696}
        transform="rotate(-73.84 277.252 317.724)"
        fill="#a0616a"
      />
      <path
        fill="#f2f2f2"
        d="M581.082-.003l386.772 213.936-122.94 222.263L458.14 222.26z"
      />
      <path fill={color} d="M448.88 181.563h147v193h-147z" />
      <path
        fill="#3f3d56"
        d="M489.38 212.063h66v66h-66zM464.38 292.063h116v8h-116zM464.38 314.063h116v8h-116zM464.38 336.063h116v8h-116z"
      />
      <path fill={color} d="M760.88 350.563h147v193h-147z" />
      <path
        fill="#3f3d56"
        d="M782.38 376.063h104v12h-104zM782.38 402.063h104v12h-104zM782.38 428.063h104v12h-104zM782.38 454.063h104v12h-104zM782.38 480.063h104v12h-104zM782.38 506.063h104v12h-104z"
      />
      <path fill={color} d="M717.88 25.563h147v193h-147z" />
      <path
        fill="#3f3d56"
        d="M739.38 90.063h104v12h-104zM739.38 116.063h104v12h-104zM739.38 142.063h104v12h-104z"
      />
      <ellipse cx={862.035} cy={25.361} rx={17.752} ry={17.784} fill="#fff" />
      <path
        d="M862.035 4.546a21.215 21.215 0 1021.215 21.216 21.278 21.278 0 00-21.215-21.216zm-4.356 32.527L846.806 26.2l3.05-3.05 7.833 7.834 16.534-16.534 3.05 3.05-19.594 19.573z"
        fill="#57b894"
      />
      <ellipse cx={908.035} cy={346.361} rx={17.752} ry={17.784} fill="#fff" />
      <path
        d="M908.035 325.546a21.215 21.215 0 1021.215 21.216 21.278 21.278 0 00-21.215-21.216zm-4.356 32.527L892.806 347.2l3.05-3.05 7.833 7.834 16.534-16.534 3.05 3.05-19.594 19.573z"
        fill="#57b894"
      />
      <ellipse cx={596.035} cy={179.361} rx={17.752} ry={17.784} fill="#fff" />
      <path
        d="M596.035 158.546a21.215 21.215 0 1021.215 21.216 21.278 21.278 0 00-21.215-21.216zm-4.356 32.527L580.806 180.2l3.05-3.05 7.833 7.834 16.534-16.534 3.05 3.05-19.594 19.573z"
        fill="#57b894"
      />
    </svg>
  );
};

SvgDoneChecking.propTypes = {
  color: PropTypes.string
};
SvgDoneChecking.defaultProps = {
  color: "primary"
};
const MemoSvgDoneChecking = React.memo(SvgDoneChecking);
export default MemoSvgDoneChecking;
