import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgWebShopping = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 877 639.474"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#e6e6e6" d="M.275.365H645v412.91H.275z" />
      <path fill="#fff" d="M18.711 52.155h607.853v336.693H18.711z" />
      <path fill={color} d="M0 0h644.725v27.39H0z" />
      <circle cx={20.354} cy={14.003} r={5.077} fill="#fff" />
      <circle cx={39.624} cy={14.003} r={5.077} fill="#fff" />
      <circle cx={58.893} cy={14.003} r={5.077} fill="#fff" />
      <path
        fill="#e6e6e6"
        d="M93.501 79.848h118.887V208.83H93.501zM263.193 79.848H382.08V208.83H263.193zM432.885 79.848h118.887V208.83H432.885zM93.501 232.176h118.887v128.982H93.501zM263.193 232.176H382.08v128.982H263.193zM432.885 232.176h118.887v128.982H432.885z"
      />
      <path
        d="M291.928 265.325l21.722-8.588 2.525 42.94s4.547 13.133 3.031 18.185c0 0 1.01 8.588-1.515 9.093s-9.598 1.515-10.103 1.01-.505-2.02-.505-2.02-5.052 3.536-5.557 7.577c0 0-21.217 6.567-21.722.505s10.608-11.113 10.608-11.113L299 309.779zM337.897 265.325l21.722-8.588 2.526 42.94s4.547 13.133 3.031 18.185c0 0 1.01 8.588-1.515 9.093s-9.598 1.515-10.104 1.01-.505-2.02-.505-2.02-5.051 3.536-5.556 7.577c0 0-21.217 6.567-21.722.505s10.608-11.113 10.608-11.113l8.588-13.135z"
        fill="#fff"
      />
      <path
        d="M340.022 99.51s-4.625 12.924.734 18.752l-4.467 15.352s15.873 47.622 11.338 54.274c0 0-16.932 8.466-50.796-3.024l13.757-53.366-1.965-22.526 2.72-10.583 6.048-.604s-3.628 13.606 3.024 15.722 13.141-15.383 13.141-15.383z"
        fill="#3f3d56"
      />
      <path
        d="M126.421 182.941l5.837 2.388 27.858-36.613 8.755 42.98 5.837-1.06c3.744-37.056 6.797-74.85 3.05-92.727l-21.622-.928-9.816 31.306-4.776 21.225zM480.678 97.612s-7.966 11.075-7.577 15.543 5.44 77.327 5.44 77.327l11.851.583-3.497-52.458 2.915-14.183 7.188 66.058 14.572.388-13.018-85.68-2.525-7.578z"
        fill="#fff"
      />
      <path
        d="M525.7 276.018c-2.115-2.538-5.75-3.91-9.242-4.652.104-.318-10.619-2.532-10.798-2.076l-4.041-3.22-12.415 6.448-6.978-4.75-3.24 1.15c.131-.57-10.062 1.194-10.062 1.194-1.947.07-4.434.192-7.218.406-9.749.75-10.499 25.998-10.499 25.998a39.852 39.852 0 0114.114-2.955l2.635 30.202c13.552-1.162 27.766.19 42.495 3.5l6.909-23.74 16.09-6.257s-2.75-15.249-7.75-21.248z"
        fill="#3f3d56"
      />
      <path
        d="M180.441 261.638c-1.743-2.09-4.738-3.222-7.615-3.833.086-.261-8.75-2.086-8.897-1.71l-3.33-2.652-10.23 5.312-5.749-3.914-2.67.948c.109-.47-8.29.984-8.29.984-1.604.057-3.654.158-5.947.334-8.033.618-8.651 21.421-8.651 21.421a32.836 32.836 0 0111.629-2.435l2.171 60.914c11.167-.957 22.879.157 35.015 2.884l5.692-55.59 13.257-5.155s-2.266-12.564-6.385-17.508z"
        fill="#fff"
      />
      <path
        fill="#e6e6e6"
        d="M613 612.618l-80.422 16.461-1.833-.187-70.674-7.133v-89.563l86.516-14.627 62.759 7.319.023.397v.187L613 612.618z"
      />
      <path
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
        d="M613 612.618l-80.422 16.461-1.833-.187v-91.816l78.624-11.791L613 612.618z"
      />
      <path
        opacity={0.05}
        style={{
          isolation: "isolate"
        }}
        d="M609.369 525.472l-.023.023-78.601 11.581-70.674-4.88 86.516-14.627 62.759 7.319.023.397v.187z"
      />
      <path
        fill="#fff"
        d="M469.801 563.453l48.896 3.191-1.498 22.951-48.896-3.19z"
      />
      <path
        fill={color}
        d="M480.788 571.686l25.945 1.693-.521 7.983-25.945-1.693zM722 612.618l-80.422 16.461-1.833-.187-70.674-7.133v-89.563l86.516-14.627 62.759 7.319.023.397v.187L722 612.618z"
      />
      <path
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
        d="M722 612.618l-80.422 16.461-1.833-.187v-91.816l78.624-11.791L722 612.618z"
      />
      <path
        opacity={0.05}
        style={{
          isolation: "isolate"
        }}
        d="M718.369 525.472l-.023.023-78.601 11.581-70.674-4.88 86.516-14.627 62.759 7.319.023.397v.187z"
      />
      <path
        fill="#fff"
        d="M578.801 563.453l48.896 3.191-1.498 22.951-48.896-3.191z"
      />
      <path
        fill={color}
        d="M589.788 571.686l25.945 1.693-.521 7.983-25.945-1.693z"
      />
      <path
        d="M780.195 165.621s14.19 36.656-11.825 36.656 40.204 36.657 66.218 15.372 10.642-22.466 10.642-22.466-34.291 3.547-33.109-27.197z"
        fill="#ffb8b8"
      />
      <circle cx={798.679} cy={134.835} r={41.82} fill="#2f2e41" />
      <path
        d="M773.1 318.159L728.166 434.04s-22.466 35.474-14.19 70.948S745 605.025 745 605.025s17.183 4.372 16-11 .737-89.899-17-110l71.669-81.911 2.365 93.414s-4.73 42.57-3.548 61.489 3.548 50.846 3.548 50.846l14.19-2.365s19.14-87.094 16.776-115.473c0 0 43.934-137.891-1-171z"
        fill="#2f2e41"
      />
      <path
        d="M749.94 604.832s-5.786-1.473-6.452 3.833-12.836 28.904-.131 30.085 17.1-10.705 19.228-19.062 2.934-8.836 4.71-10.437 6.007-10.372.7-11.04-8.026-5.884-8.026-5.884-1.673 14.633-10.03 12.505zM827.297 600.729s-10.73-1.533-9.964 2.299-1.532 19.926 0 21.46 4.599 4.598 4.599 6.897.766 9.963 13.795 7.664 9.963-13.795 9.197-15.328-9.963-9.197-9.197-13.796-3.832-12.262-8.43-9.196z"
        fill="#2f2e41"
      />
      <circle cx={799.195} cy={152.276} r={28.966} fill="#ffb8b8" />
      <path
        d="M826.902 192.226s10.103 19.99-20.35 20.556c-9.361.174-20.495-6.648-25.09-14.806-2.708-4.806-3.393 1.832-7.77 1.345-8.292-.921-17.15 2.519-25.076 6.734a5.001 5.001 0 00-2.443 5.865c6.011 19.944 23.177 115.881 25.827 121.105 6.767 13.338 80-9 80-9 1.004-36.294-12.17-87.071 11-124a44.135 44.135 0 00-36.098-7.799z"
        fill="#575a89"
      />
      <path
        fill="#2f2e41"
        d="M826.283 130.002l-21.223-11.116-29.307 4.547-6.063 26.781 15.094-.581 4.216-9.839v9.677l6.965-.268 4.042-15.664 2.527 16.675 24.758-.506-1.009-19.706z"
      />
      <circle cx={800.88} cy={87.146} r={16.875} fill="#2f2e41" />
      <path
        d="M779.604 82.01a16.879 16.879 0 0114.306-16.68 16.875 16.875 0 100 33.36 16.879 16.879 0 01-14.306-16.68z"
        fill="#2f2e41"
      />
      <path
        fill="#e6e6e6"
        d="M877 483.618l-80.422 16.461-1.833-.187-70.674-7.133v-89.563l86.516-14.627 62.759 7.319.023.397v.187L877 483.618z"
      />
      <path
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
        d="M877 483.618l-80.422 16.461-1.833-.187v-91.816l78.624-11.791L877 483.618z"
      />
      <path
        opacity={0.05}
        style={{
          isolation: "isolate"
        }}
        d="M873.369 396.472l-.023.023-78.601 11.581-70.674-4.88 86.516-14.627 62.759 7.319.023.397v.187z"
      />
      <path
        fill="#fff"
        d="M733.801 434.453l48.896 3.191-1.498 22.951-48.896-3.191z"
      />
      <path
        fill={color}
        d="M744.788 442.686l25.945 1.693-.521 7.983-25.945-1.693z"
      />
      <path
        d="M751.72 380.194s-29.56 23.65-16.554 31.927 28.38-31.927 28.38-31.927z"
        fill="#ffb8b8"
      />
      <path
        d="M753 205.025c-1.531-1.726-20.867 8.135-18 21l1.349 89.134s-7.095 73.313 10.642 73.313 15.644 2.465 18.009-3.447 3-56 3-56z"
        fill="#575a89"
      />
      <path
        d="M844.454 372.194s15.373 40.204 28.38 31.927-16.555-31.927-16.555-31.927z"
        fill="#ffb8b8"
      />
      <path
        d="M848 322.025s-7.365 49.087-5 55 .272 3.447 18.009 3.447 10.642-73.313 10.642-73.313L873 218.025c2.867-12.865-16.469-22.726-18-21l-17 58z"
        fill="#575a89"
      />
    </svg>
  );
};

SvgWebShopping.propTypes = {
  color: PropTypes.string
};
SvgWebShopping.defaultProps = {
  color: "primary"
};
export default SvgWebShopping;
