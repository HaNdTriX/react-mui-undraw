import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCupOfTea = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 760 677.414"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M283.2 481.6l-87.38 144.21.18 14.65q-9.585.075-18.99-.32l4.35-188.33-.12-1.45.16-.28.41-17.8-95.88-139.21 95.77 125.89.34 3.76 3.28-142.29-82.82-144.32 83.06 119.33L184.99 63l-.18-63h.84l1.49 63 3.08 129.97 75.47-94.38-75.23 114.39 1.65 127.28 69.46-124.22-69.2 142.93.91 70.77 101.01-173.03-100.7 197.72 2.05 157.37zM682.29 438.71L654.64 493l-69.27 136h-15.9l.34-14.72L486.28 493l-12.35-17.93L487.57 493l82.13 107.96.34 3.76L572.62 493l.7-30.57-82.82-144.32 83.06 119.33-.87-294.79v-.98l.03.97 5.5 232.33 75.47-94.38-75.23 114.39 1.27 98.02.38 29.26L596.47 493l53.1-94.96L603.59 493l-23.22 47.97.91 70.77L650.6 493l31.69-54.29z"
        fill="#e6e6e6"
      />
      <path
        d="M639.79 627.092c0 12.573-116.405 50.322-260 50.322s-260-37.75-260-50.322 116.407 4.793 260 4.793 260-17.366 260-4.793z"
        fill="#3f3d56"
      />
      <path
        d="M639.79 627.092c0 12.573-116.405 50.322-260 50.322s-260-37.75-260-50.322 116.407 4.793 260 4.793 260-17.366 260-4.793z"
        opacity={0.2}
      />
      <ellipse cx={379.791} cy={627.092} rx={260} ry={22.765} fill="#3f3d56" />
      <ellipse cx={377.791} cy={629.371} rx={107} ry={10} opacity={0.2} />
      <path
        d="M586.17 399.63H469.29v.74h-279.5v40.5c0 104.106 84.395 188.5 188.5 188.5a188.408 188.408 0 00162.833-93.5h45.048a68.12 68.12 0 100-136.24zm0 115.24h-34.467a187.88 187.88 0 0015.088-74v-20.24h19.38a47.12 47.12 0 110 94.24z"
        fill="#3f3d56"
      />
      <path
        d="M207.29 417.87v23c0 94.29 76.711 171 171 171 94.29 0 171-76.71 171-171v-23z"
        fill={color}
      />
      <path
        d="M333.58 580.539l-39.149-40.347a21.391 21.391 0 01.456-30.248l59.21-57.451a15.071 15.071 0 014.903-3.18l12.86-5.138a15.071 15.071 0 0116.41 3.5l40.88 42.133a15.071 15.071 0 013.21 16.01l-4.326 11.002a15.071 15.071 0 01-3.53 5.301l-60.676 58.874a21.391 21.391 0 01-30.249-.456z"
        fill="#e6e6e6"
      />
      <path
        fill="#3f3d56"
        d="M393.929 463.313l19.018 19.6-2.94 2.853-19.018-19.6z"
      />
      <path
        d="M403.824 475.572c3.463-8.212 13.778-9.982 21.45-11.61 8.156-1.73 17.446-4.742 20.834-13.224a11.24 11.24 0 00-1.095-10.726c-1.994-2.86-5.35-5.187-8.98-4.862-7.596.68-8.949 9.651-6.047 15.312 3.917 7.642 13.975 8.308 21.502 8.496 7.272.182 15.075-.097 21.72-3.382a17.838 17.838 0 0010.014-16.838c-.233-7.337-3.47-14.182-5.404-21.155-1.857-6.701-2.442-14.132 2.504-19.706 4.792-5.4 12.346-7.533 19.234-8.622 1.768-.28 3.548-.47 5.333-.614 1.911-.154 1.927-3.155 0-3-12.77 1.027-29.506 5.427-31.34 20.507-.839 6.893 1.766 13.694 3.867 20.129 1.954 5.981 4.239 12.871 1.74 19.04-2.624 6.478-9.417 9.113-15.852 10.101a63.179 63.179 0 01-10.472.567 48.155 48.155 0 01-12.063-1.212c-3.387-.929-6.653-2.708-8.259-5.958-1.18-2.388-1.557-5.61-.234-8.022a5.19 5.19 0 017.326-1.83 8.583 8.583 0 014.364 8.271c-1.097 8.498-10.813 11.911-17.926 13.497-7.834 1.746-16.673 3.025-22.27 9.437a16.803 16.803 0 00-2.838 4.607 1.51 1.51 0 001.047 1.845 1.537 1.537 0 001.845-1.048z"
        fill="#3f3d56"
      />
      <circle cx={282.791} cy={452.371} r={11} fill="#e6e6e6" />
      <circle cx={484.791} cy={493.371} r={11} fill="#e6e6e6" />
      <circle cx={429.791} cy={551.371} r={8} fill="#e6e6e6" />
      <path
        d="M144.61 623.605c32.668 7.288 68.72 1.904 68.72 1.904s-16.912-17.2-49.58-24.488-68.72-1.903-68.72-1.903 16.912 17.2 49.58 24.487z"
        fill="#e6e6e6"
      />
      <path
        d="M147.832 635.895c35.566 1.026 65.746-10.436 65.746-10.436a173.123 173.123 0 00-63.05-14.153c-35.567-1.026-65.746 10.436-65.746 10.436a173.123 173.123 0 0063.05 14.153z"
        fill={color}
      />
      <path
        d="M150.358 611.348c25.409 12.81 62.828 14.411 62.828 14.411s-3.777-19.167-29.185-31.977-62.827-14.411-62.827-14.411 3.776 19.167 29.184 31.977z"
        fill={color}
      />
      <path fill="#e6e6e6" d="M760 63V0H0v624h63V363h697v-63H63V63h697z" />
      <path fill="#e6e6e6" d="M697 5h63v618h-63z" />
      <path
        d="M206.79 418.37v23c0 94.29 76.711 171 171 171 94.29 0 171-76.71 171-171v-23z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M120.133 461.015c-5.807 9.012-12.27 9.3-17.741 5.775q-.19-.123-.376-.25-.374-.255-.726-.526c-4.665-3.604-6.37-9.385-.97-17.766 5.59-8.674 21.82-13.707 23.03-14.072h.002l.07-.021s2.518 17.848-3.289 26.86zM523.133 229.84c-5.807 9.012-12.27 9.3-17.741 5.775q-.19-.123-.376-.25-.374-.255-.726-.527c-4.665-3.604-6.37-9.384-.97-17.766 5.59-8.673 21.82-13.706 23.03-14.072h.002l.07-.02s2.518 17.847-3.289 26.86zM293.168 162.954c7.263 7.887 5.917 14.214 1.13 18.623q-.168.153-.337.301-.34.298-.692.57c-4.662 3.61-10.685 3.806-17.44-3.529-6.989-7.59-7.78-24.565-7.829-25.828v-.002l-.002-.072s17.908 2.05 25.17 9.937zM531.176 416.747l-17.23 8.691a7.098 7.098 0 01-9.63-2.787l-11.856-23.504a4.516 4.516 0 01-.476-1.808l-.226-4.463a5.19 5.19 0 012.93-4.816l17.991-9.076a5.208 5.208 0 015.478.399l3.044 2.312a4.525 4.525 0 011.307 1.565l12.15 24.086a7.098 7.098 0 01-3.482 9.401z"
        fill="#e6e6e6"
      />
      <path
        fill="#3f3d56"
        d="M500.316 387.661l8.37-4.222.59 1.167-8.371 4.222z"
      />
      <path
        fill={color}
        d="M498.884 396.946l18.567-9.26 2.678 5.369-18.567 9.26zM502.884 403.946l18.567-9.26 2.678 5.369-18.567 9.26zM506.884 411.946l18.567-9.26 2.678 5.369-18.567 9.26z"
      />
    </svg>
  );
};

SvgCupOfTea.propTypes = {
  color: PropTypes.string
};
SvgCupOfTea.defaultProps = {
  color: "primary"
};
export default SvgCupOfTea;
