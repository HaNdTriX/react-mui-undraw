import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgRedesignFeedback = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 886.295 670.668"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M675.17 646.553c-.12-.196-2.951-4.924-3.933-14.742-.9-9.008-.321-24.19 7.553-45.37 14.917-40.121-3.438-72.494-3.626-72.816l.906-.526a80.36 80.36 0 017.582 21.479 93.703 93.703 0 01-3.881 52.229c-14.892 40.053-3.82 59.014-3.707 59.201z"
        fill="#e6e6e6"
      />
      <circle cx={669.337} cy={504.466} r={6.803} fill="#3f3d56" />
      <circle cx={690.793} cy={529.584} r={6.803} fill="#3f3d56" />
      <circle cx={676.14} cy={546.33} r={6.803} fill="#e6e6e6" />
      <circle cx={693.933} cy={560.459} r={6.803} fill="#e6e6e6" />
      <circle cx={670.907} cy={582.438} r={6.803} fill="#3f3d56" />
      <path
        d="M679.28 646.804s-6.803-16.746 13.606-29.305zM670.914 646.5s-3.096-17.808-27.06-17.655z"
        fill="#e6e6e6"
      />
      <ellipse
        cx={717.919}
        cy={653.786}
        rx={167.624}
        ry={16.882}
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M0 0h703.576v450.601H0z" />
      <circle cx={21.912} cy={14.883} r={5.54} fill={color} />
      <circle cx={42.94} cy={14.883} r={5.54} fill={color} />
      <circle cx={63.968} cy={14.883} r={5.54} fill={color} />
      <path fill="#e6e6e6" d="M424.214 184.814h120.502v6.917H424.214z" />
      <path fill={color} d="M424.214 210.046h186.081v6.917H424.214z" />
      <path
        fill="#e6e6e6"
        d="M424.214 233.818h151.652v6.917H424.214zM424.214 257.501h88.532v6.917h-88.532zM424.214 281.184h133.618v6.917H424.214zM369.291 182.354h14.755v14.755h-14.755z"
      />
      <path fill={color} d="M369.291 206.127h14.755v14.755h-14.755z" />
      <path
        fill="#e6e6e6"
        d="M369.291 229.899h14.755v14.755h-14.755zM369.291 253.672h14.755v14.755h-14.755zM369.291 277.444h14.755v14.755h-14.755z"
      />
      <path
        d="M562.371 277.089h-33.302a116.477 116.477 0 010-39.707h33.302a71.446 71.446 0 000 39.707z"
        fill="#ff6584"
      />
      <circle cx={184.058} cy={220.234} r={89.47} fill={color} />
      <path d="M189.058 135.813h-10v-10h10zm-8-2h6v-6h-6z" fill="#fff" />
      <path fill="#fff" d="M187.293 129.813h53v2h-53z" />
      <circle cx={240.293} cy={130.813} r={2.083} fill="#fff" />
      <path fill="#fff" d="M128.293 129.813h52v2h-52z" />
      <circle cx={128.293} cy={130.813} r={2.083} fill="#fff" />
      <path d="M278.293 224.998h-10v-10h10zm-8-2h6v-6h-6z" fill="#fff" />
      <path fill="#fff" d="M272.293 224.233h2v52h-2z" />
      <circle cx={273.293} cy={276.234} r={2.083} fill="#fff" />
      <path fill="#fff" d="M272.293 164.233h2v52h-2z" />
      <circle cx={273.293} cy={164.234} r={2.083} fill="#fff" />
      <path d="M99.293 224.998h-10v-10h10zm-8-2h6v-6h-6z" fill="#fff" />
      <path fill="#fff" d="M93.293 224.233h2v52h-2z" />
      <circle cx={94.293} cy={276.234} r={2.083} fill="#fff" />
      <path fill="#fff" d="M93.293 162.233h2v54h-2z" />
      <circle cx={94.293} cy={164.234} r={2.083} fill="#fff" />
      <path d="M189.058 314.813h-10v-10h10zm-8-2h6v-6h-6z" fill="#fff" />
      <path fill="#fff" d="M188.293 308.813h53v2h-53z" />
      <circle cx={240.293} cy={309.813} r={2.083} fill="#fff" />
      <path fill="#fff" d="M128.293 308.813h52v2h-52z" />
      <circle cx={128.293} cy={309.813} r={2.083} fill="#fff" />
      <path
        d="M233.762 355.659h-38.769a135.595 135.595 0 010-46.224h38.77a83.173 83.173 0 000 46.224z"
        fill="#e6e6e6"
      />
      <path
        d="M746.888 346.116l-9.078 33.717s-4.538 27.233 3.242 27.882 5.836-27.233 5.836-27.233l14.913-23.343z"
        fill="#fbbebe"
      />
      <path
        d="M814.322 363.748v-10.564l-61.587-4.15-9.737 62.249s-1.297 62.06 3.242 93.75 13.616 105.632 13.616 105.632h41.498l-10.375-153.828 46.686 153.828 48.63-5.942-56.411-181.557s.648-33.67-15.562-59.418z"
        fill="#2f2e41"
      />
      <path
        d="M765.043 603.533l-2.593 20.1-3.89 14.265s-18.156 3.89-7.133 10.375 21.397 0 21.397 0l8.43-11.672v20.101h12.968v-28.53l-9.726-21.397zM845.446 603.533l-2.594 20.1-3.89 14.265s-18.156 3.89-7.133 10.375 21.397 0 21.397 0l8.43-11.672v20.101h12.968v-28.53l-9.726-21.397z"
        fill="#2f2e41"
      />
      <circle cx={788.71} cy={218.705} r={22.046} fill="#fbbebe" />
      <path
        fill="#fbbebe"
        d="M803.299 228.107l18.156 22.045-22.046 8.43-10.375-20.749 14.265-9.726z"
      />
      <path
        d="M792.276 251.45l3.136-.863s16.316-10.16 20.855-9.512 18.804 14.913 16.21 34.365 2.594 92.074-7.78 89.48-13.617-4.539-13.617-4.539l-12.32-5.835-11.67 3.242s-7.133-4.54-12.969-3.242-24.64-5.188-24.64-5.188z"
        fill="#e6e6e6"
      />
      <path
        d="M796.882 253.528s-14.656-6.942-21.14 3.433-24.64 65.488-24.64 65.488l-8.429 25.288 20.75 12.32 40.849-75.215s5.97-22.427-7.39-31.314z"
        fill="#e6e6e6"
      />
      <path
        d="M786.408 222.143c-1.386-2.133-.686-5.033-1.657-7.383-1.526-3.691-6.269-4.556-10.248-4.892a30.546 30.546 0 00-7.94.02 7.62 7.62 0 00-5.507 3.994c-.59 1.18-.44-2.52-.063-7.269a22.957 22.957 0 0117.606-20.538l.167-.04c4.845-1.117 9.841-1.94 14.78-1.36s9.861 2.713 12.943 6.615c1.409 1.784 2.405 3.887 3.978 5.527 2.762 2.883 6.858 3.932 10.62 5.27a32.046 32.046 0 0111.647 6.72 17.37 17.37 0 015.63 11.936c.079 5.267-3.272 10.703-8.67 11.741a6.062 6.062 0 00-2.59 1.118c-5.155 3.997.726 8.181.685 12.68-.034 3.756-4.214 6.203-7.965 6.378a15.113 15.113 0 01-15.052-11.958c-.566-3.081-.13-6.246.239-9.357.42-3.562-7.249-11.948-2.182-5.801a8.815 8.815 0 011.937 4.078c.843 4.91-3.626 6.562-6.444 9.283a11.676 11.676 0 00-2.826 12.019 13.461 13.461 0 01-2.446-17c.907-1.391 2.077-2.602 2.938-4.024 1.343-2.218 1.713-7.043-2.046-6.91-2.684.094-5.471 2.328-7.534-.847z"
        fill="#2f2e41"
      />
      <path
        opacity={0.2}
        d="M796.491 306.888l-29.827 47.2 28.23-51.979 1.597 4.779z"
      />
      <path fill={color} d="M552.737 603.889h49.01v49.01h-49.01z" />
      <path
        fill="#e6e6e6"
        d="M585.594 631.888h24.458v24.458h-24.458zM682.788 426.8h-662v-395h662zm-660-2h658v-391h-658z"
      />
    </svg>
  );
};

SvgRedesignFeedback.propTypes = {
  color: PropTypes.string
};
SvgRedesignFeedback.defaultProps = {
  color: "primary"
};
export default SvgRedesignFeedback;
