import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCardPostal = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 995.608 679.448"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={805.25} cy={646.948} rx={183} ry={32.5} fill="#3f3d56" />
      <path fill="#f2f2f2" d="M0 42.81h760v475H0z" />
      <path fill={color} d="M20.5 63.31h88v10h-88z" />
      <path fill="#fff" d="M640.5 63.31h88v10h-88z" />
      <path
        fill="#3f3d56"
        d="M20.5 80.31h148v6h-148zM20.5 93.31h140v6h-140zM20.5 106.31h102v6h-102z"
      />
      <path fill="#fff" d="M335.5 144.81h383v271h-383z" />
      <path
        d="M218.216 280.42a12.355 12.355 0 01-7.45-2.402 12.804 12.804 0 01-3.803-14.981 14.772 14.772 0 016.682-6.824 22.812 22.812 0 00-6.027-1.91 23.941 23.941 0 00-15.128 2.608 13.41 13.41 0 01-15.593-2.262 14.425 14.425 0 00-2.285-1.793c-3.515-2.204-9.052-2.223-11.38 1.275a12.939 12.939 0 00-1.338 3.117c-.235.707-.478 1.438-.791 2.15-3.344 7.599-12.582 10.522-27.456 8.69-1.474-.182-3.492-.431-4.877-1.82a7.568 7.568 0 01-1.754-4.907q-.124-1.458-.18-2.922a28.118 28.118 0 01-19.975 10.527c-2.015.094-4.573.007-6.52-1.545a10.572 10.572 0 01-2.548-3.46c-.314-.58-.611-1.13-.953-1.634-3.072-4.546-8.978-5.001-14.938-3.923-.162 4.821-1.183 10.934-7.277 13.505a6.562 6.562 0 01-6.096-.3 6.198 6.198 0 01-2.806-5.039c-.28-5.072 5.581-7.15 7.788-7.932a54.897 54.897 0 016.416-1.875c.004-.372.005-.746.004-1.118-.01-3.418-.021-7.291-1.676-10.476-1.447-2.786-4.91-5.146-7.977-4.1l-.645-1.894c4.127-1.404 8.528 1.476 10.397 5.072 1.878 3.616 1.89 7.928 1.9 11.392l.002.73c7.843-1.328 13.496.297 16.565 4.837.397.587.731 1.205 1.055 1.803a8.953 8.953 0 002.035 2.848c1.425 1.136 3.518 1.19 5.179 1.11a25.992 25.992 0 0020.032-11.88 63.083 63.083 0 01.635-8.015 2.052 2.052 0 012.323-1.763 2.004 2.004 0 011.789 2.224 19.827 19.827 0 01-2.753 8.07q-.02 2.804.217 5.588a5.904 5.904 0 001.177 3.664c.83.833 2.17 1.059 3.707 1.248 13.894 1.714 22.433-.815 25.379-7.51.275-.626.494-1.282.725-1.976a14.607 14.607 0 011.57-3.594c3.008-4.521 9.724-4.611 14.108-1.861a16.464 16.464 0 012.604 2.04 11.415 11.415 0 0013.268 1.945 25.962 25.962 0 0116.4-2.816 24.954 24.954 0 017.946 2.795 51.8 51.8 0 019.714-2.812l29.33-6.06.404 1.96-29.33 6.059a55.748 55.748 0 00-7.994 2.162 26.041 26.041 0 0110.2 13.574 7.67 7.67 0 01.35 4.232 6.763 6.763 0 01-2.35 3.384 12.465 12.465 0 01-8 2.796zm-2.43-23.051c-3.128 1.482-5.653 3.518-7 6.493a10.385 10.385 0 0016.145 12.232 4.846 4.846 0 001.7-2.359 5.922 5.922 0 00-.323-3.132 24.108 24.108 0 00-10.521-13.234zm-135.917 1.46a54.365 54.365 0 00-5.69 1.694c-4.603 1.632-6.596 3.464-6.46 5.937a4.173 4.173 0 001.87 3.452 4.593 4.593 0 004.259.154c4.64-1.958 5.774-6.393 6.02-11.238zm49.605-11.536a.093.093 0 00-.051.013q-.178 1.232-.306 2.464a16.097 16.097 0 00.438-2.437c-.008-.027-.046-.04-.08-.04z"
        fill={color}
      />
      <path
        d="M824.695 207.851a21.352 21.352 0 01-2.652-28.788c-.43.403-.85.822-1.253 1.267a21.354 21.354 0 0031.68 28.643c.402-.445.776-.905 1.134-1.373a21.352 21.352 0 01-28.909.251z"
        fill="#2f2e41"
      />
      <circle cx={805.353} cy={179.027} r={43.98} fill="#2f2e41" />
      <path
        d="M786.142 240.884l1.303-3.388-23.72 20.07-28.672 16.161s-14.597-56.302-15.64-57.344-19.81-40.663-28.151-21.896 16.16 29.715 16.16 29.715.783 68.553 25.806 68.032 56.041-23.199 56.563-25.284-3.65-26.066-3.65-26.066z"
        fill="#ffb8b8"
      />
      <path
        d="M742.35 559.93l-3.127 45.355s-8.341 9.383-9.384 19.81-11.99 29.193-11.99 29.193-3.128 3.128 6.256 2.085 25.544-2.606 27.108-7.298.522-24.502 9.905-26.587v18.767h4.692l-1.564-20.331s10.948-15.118-2.606-23.98l4.17-34.407zM871.637 563.58l18.768 34.927s-2.607 13.033 0 17.204 2.606 18.246 2.085 19.81-1.043 15.64 11.99 16.682c0 0 3.128 3.128 6.777-1.043s9.384-11.99 7.299-16.16-9.384-38.578-9.905-39.62-15.64-42.227-15.64-42.227z"
        fill="#2f2e41"
      />
      <circle cx={800.94} cy={198.893} r={26.066} fill="#ffb8b8" />
      <path
        d="M798.132 222.117s6.777 8.862 4.692 9.905-14.076 1.564-21.374 10.426 8.862 31.28 8.862 31.28l61.515-41.185-25.023-8.34s-8.145-12.696-7.624-22.6z"
        fill="#ffb8b8"
      />
      <path
        d="M863.818 234.107l-17.725-6.256s-67.771 31.8-66.729 33.365 0 12.511 0 12.511-9.905 6.777-5.213 22.417 15.118 16.16 13.554 18.246-2.085 14.597-2.085 14.597-81.325 124.594-74.548 217.389c0 0 71.942 48.482 81.847 17.203s13.033-113.125 13.033-113.125 8.862 128.243 29.715 127.722 68.292-7.298 64.121-23.46-38.056-82.888-34.406-130.328-25.024-88.624-25.024-88.624 6.256-13.033 3.128-15.118l34.407-52.132s0-29.715-14.075-34.407z"
        fill="#2f2e41"
      />
      <path
        d="M864.069 237.18a4.554 4.554 0 00-6.52 2.439c-1.57 4.316-3.16 13.314-2.594 32.023 1.043 34.407 1.564 57.866 1.564 57.866v52.132s-22.938 50.046-10.426 50.046 21.374-39.62 21.374-39.62 11.469-59.951 7.82-70.378c0 0 10.29-72.028-11.218-84.508z"
        fill="#ffb8b8"
      />
      <ellipse
        cx={796.989}
        cy={174.873}
        rx={22.371}
        ry={15.253}
        fill="#2f2e41"
      />
      <circle cx={832.515} cy={141.554} r={21.354} fill="#2f2e41" />
      <path
        d="M847.769 156.807a21.352 21.352 0 01-21.275-19.575c-.049.588-.08 1.18-.08 1.78a21.354 21.354 0 1042.709 0c0-.6-.031-1.192-.08-1.78a21.352 21.352 0 01-21.274 19.575z"
        fill="#2f2e41"
      />
      <ellipse
        cx={927.638}
        cy={300.568}
        rx={1.825}
        ry={4.171}
        transform="rotate(-13.434 408.354 679.312)"
        fill="#ffb8b8"
      />
      <circle cx={826.224} cy={192.898} r={1.043} fill="#f2f2f2" />
      <path fill="#3f3d56" d="M324.5 198.31h383v271h-383z" />
      <circle cx={363.5} cy={248.31} r={18} fill={color} />
      <circle cx={414.5} cy={255.31} r={2} fill="#f2f2f2" />
      <circle cx={352.5} cy={310.31} r={2} fill="#f2f2f2" />
      <circle cx={389.5} cy={278.31} r={1} fill="#f2f2f2" />
      <circle cx={492.5} cy={366.31} r={1} fill="#f2f2f2" />
      <circle cx={599.5} cy={350.31} r={1} fill="#f2f2f2" />
      <circle cx={583.5} cy={433.31} r={1} fill="#f2f2f2" />
      <circle cx={557.5} cy={248.31} r={1} fill="#f2f2f2" />
      <circle cx={534.5} cy={309.31} r={1} fill="#f2f2f2" />
      <circle cx={369.5} cy={356.31} r={1} fill="#f2f2f2" />
      <circle cx={399.5} cy={416.31} r={1} fill="#f2f2f2" />
      <circle cx={465.5} cy={333.31} r={1} fill="#f2f2f2" />
      <circle cx={632.5} cy={236.31} r={1} fill="#f2f2f2" />
      <circle cx={517.5} cy={414.31} r={1} fill="#f2f2f2" />
      <circle cx={633.5} cy={279.31} r={1} fill="#f2f2f2" />
      <rect x={474.5} y={266.31} height={5} fill="#f2f2f2" />
      <rect x={419.5} y={377.31} height={5} fill="#f2f2f2" />
      <rect x={582.5} y={285.31} height={5} fill="#f2f2f2" />
      <rect x={648.5} y={366.31} height={5} fill="#f2f2f2" />
      <path
        fill="#f2f2f2"
        opacity={0.1}
        d="M707.5 236.48v22.77l-269 57.06 269-79.83zM561.5 333.31l-63 30 63-27v-3zM707.5 350.6l-46 19.71 46-21.9v2.19z"
      />
      <circle cx={463.002} cy={31.248} r={31.248} fill={color} opacity={0.4} />
      <circle cx={405.17} cy={46.172} r={21.92} fill={color} opacity={0.4} />
      <path
        d="M923.88 642.566l-2-.04a463.835 463.835 0 017.1-66.286c8.649-46.881 23.03-77.67 42.744-91.512l1.148 1.637c-46.052 32.334-48.968 154.965-48.991 156.2zM948.88 642.087l-2-.039c.044-2.215 1.294-54.414 21.844-68.842l1.148 1.637c-19.72 13.846-20.981 66.712-20.991 67.244z"
        fill="#2f2e41"
      />
      <circle cx={984.25} cy={476.546} r={10} fill={color} />
      <circle cx={979.298} cy={562.546} r={10} fill={color} />
      <path
        d="M944.22 492.54c1.879 12.005-3.02 22.741-3.02 22.741s-7.945-8.725-9.824-20.73 3.019-22.74 3.019-22.74 7.945 8.726 9.825 20.73zM976.907 521.695c-11.493 3.942-22.919.99-22.919.99s7.208-9.345 18.7-13.287 22.92-.99 22.92-.99-7.208 9.344-18.701 13.287zM977.276 597.856a31.134 31.134 0 01-16.064.693 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.313z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgCardPostal.propTypes = {
  color: PropTypes.string
};
SvgCardPostal.defaultProps = {
  color: "primary"
};
const MemoSvgCardPostal = React.memo(SvgCardPostal);
export default MemoSvgCardPostal;
