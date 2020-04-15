import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgBearMarket = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 793.705 564.236"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M158.348 509.388c14.42 19.311 44.352 21.344 44.352 21.344s6.554-29.277-7.866-48.588-44.352-21.344-44.352-21.344-6.553 29.277 7.866 48.588z"
        fill="#e6e6e6"
      />
      <path
        d="M231.805 516.648c-9.515 12.742-29.267 14.084-29.267 14.084s-4.324-19.32 5.191-32.062 29.267-14.084 29.267-14.084 4.324 19.319-5.191 32.062z"
        fill="#e6e6e6"
      />
      <path fill="#3f3d56" d="M129.172 529.802h664v2.241h-664z" />
      <path
        d="M765 118.715l5.785 2.893s31.333 78.573 20.728 97.373-43.866 53.99-43.866 53.99l-6.267-17.836 25.63-55.564z"
        fill="#575a89"
      />
      <path
        d="M765 118.715l5.785 2.893s31.333 78.573 20.728 97.373-43.866 53.99-43.866 53.99l-6.267-17.836 25.63-55.564z"
        opacity={0.1}
      />
      <path
        d="M758.734 511.584s8.195 18.8 3.856 20.246-9.64 1.446-14.943 1.446-11.57-1.928-12.533-3.857 3.856-14.461 3.856-14.461zM648.345 521.225s5.303 16.871 2.893 17.835-10.123 5.303-14.462 3.857-11.087-4.82-12.533-6.267 0-9.159 0-9.159l6.749-9.64z"
        fill="#575a89"
      />
      <path
        d="M743.308 270.56l6.91 2.41s1.767 16.39-.16 22.174-6.267 47.723-3.857 56.4.964 22.656.964 22.656 14.461 47.24 11.569 57.364-2.41 24.584.482 31.815 5.303 10.123 3.856 15.907-4.338 8.677-1.446 13.498 8.677 6.266 5.785 10.605-5.785 7.713-4.82 10.605-25.55 8.195-27.96 3.856c0 0 7.713-6.748 0-10.605s-5.302-18.318-5.302-18.318-13.497-55.435-13.015-59.773-21.21-71.825-21.21-71.825-31.815 96.409-33.744 100.747 2.41 14.944 0 17.836.965 10.123-2.41 13.015 5.785 13.498 0 17.354-8.677 15.908-8.195 18.318-24.102-.482-24.102-3.856.482-6.267-1.928-12.052-3.856-9.64-1.928-11.569 3.374-4.338 1.446-11.087 2.892-27.477 1.446-31.333-.964-29.887-.964-29.887 4.82-38.082 3.374-44.348 0-7.713.482-10.123 3.375-28.441 5.303-32.297 4.338-69.897 15.425-73.271 94 5.784 94 5.784z"
        fill="#2f2e41"
      />
      <path
        d="M747.165 528.937s17.354-2.892 18.318 0 3.856 25.549-2.893 26.03-18.317 1.929-20.246-2.41-11.087-7.23-11.087-7.23-13.497-3.856-13.497-8.195.482-11.087 2.892-11.569 12.051-5.785 12.051-7.713 14.462 11.087 14.462 11.087zM638.704 536.65s12.533-3.856 15.426-1.446 6.748 28.923 0 28.44-24.585 2.411-25.549-1.445-13.98-4.82-13.98-4.82-13.978-6.75-13.014-13.98 2.41-9.641 8.194-10.123 10.123-7.231 10.605-7.713 4.733-4.006 5.259-.075 6.793 12.608 13.06 11.162z"
        fill="#2f2e41"
      />
      <circle cx={678.232} cy={40.142} r={29.405} fill="#a0616a" />
      <path
        d="M703.78 46.89s1.929 32.297 9.16 35.19-36.636 2.892-36.636 2.892-.482-20.246-6.749-25.067 34.226-13.015 34.226-13.015z"
        fill="#a0616a"
      />
      <path
        d="M715.35 74.849s-29.887-11.087-40.492 6.267c0 0-33.744 15.907-36.154 25.548s20.246 81.948 20.246 81.948 0 59.774-4.82 66.04-13.98 13.016-7.713 14.462 104.604 12.051 104.122 5.785-6.748-11.57 0-15.426.964-8.195 5.303-20.728 14.943-116.173 14.943-116.173-7.23-13.016-8.677-14.462S715.35 74.85 715.35 74.85z"
        fill="#575a89"
      />
      <path
        d="M629.063 285.986s-18.8 42.42-2.41 48.204 15.426-44.83 15.426-44.83z"
        fill="#a0616a"
      />
      <path
        d="M692.337 45.61c-1.705-3.415-4.256-7.355-8.068-7.147-1.927.105-3.589 1.304-5.306 2.185s-3.919 1.426-5.49.304c-2.296-1.641-1.584-5.533-3.639-7.469-2.243-2.113-6.755-.933-8.202-3.654-.773-1.453-.149-3.256-.486-4.866a17.525 17.525 0 01-6.947-.808c-2.176-.882-4.06-2.926-4-5.273a6.032 6.032 0 012.154-4.147c2.963-2.695 7.25-3.211 10.906-4.846 2.91-1.3 5.44-3.327 8.3-4.733 4.923-2.422 10.602-2.891 16.072-2.473 8.293.634 16.68 3.386 22.694 9.132s9.197 14.81 6.603 22.713c-1.47 4.478-4.584 8.242-6.322 12.623a44.186 44.186 0 00-2.203 9.26l-1.22 7.486c.19-1.165-2.37-4.087-3.208-4.783-1.83-1.517-4.493-1.002-6.192-2.407-2.513-2.078-3.968-8.134-5.446-11.097z"
        fill="#2f2e41"
      />
      <path
        d="M649.791 103.29l-7.712 4.82s-12.534 75.682-11.087 86.287-5.785 70.379-3.375 75.199 3.375 5.785 3.375 8.677-6.75 13.497-2.41 15.425 20.245 5.303 20.245 0-2.892-12.533 2.41-15.907 9.16-25.067 9.16-25.067 2.41-22.174 4.82-26.512S671 205.966 671 199.217s5.785-34.225 2.41-48.205-4.338-51.579-23.62-47.722z"
        opacity={0.1}
      />
      <path
        d="M646.417 101.844l-7.713 4.82s-12.533 75.681-11.087 86.287-5.784 70.378-3.374 75.199 3.374 5.784 3.374 8.677-6.748 13.497-2.41 15.425 20.246 5.303 20.246 0-2.892-12.533 2.41-15.907 9.16-25.067 9.16-25.067 2.41-22.174 4.82-26.512 5.784-20.246 5.784-26.995 5.785-34.225 2.41-48.205-4.338-51.579-23.62-47.722z"
        fill="#575a89"
      />
      <path fill="#e6e6e6" d="M0 0h567.571v284.751H0z" />
      <path fill="#fff" d="M26.062 23.166H541.51v238.419H26.062z" />
      <path
        fill={color}
        d="M36.156 42.513l-1.365 1.365 69.216 69.215 21.718-21.718 38.127 38.128 46.815-46.815 79.634 79.634 36.197-36.198 79.151 79.152 44.402-44.402 81.365 81.364 1.365-1.365-82.73-82.729-44.402 44.402-79.151-79.151-36.197 36.197-79.634-79.634-46.815 46.815-38.127-38.128-21.718 21.719-67.851-67.851z"
      />
      <circle cx={214.046} cy={82.771} r={11.583} fill={color} />
      <circle cx={288.371} cy={159.026} r={11.583} fill={color} />
      <circle cx={449.569} cy={159.026} r={11.583} fill={color} />
    </svg>
  );
};

SvgBearMarket.propTypes = {
  color: PropTypes.string
};
SvgBearMarket.defaultProps = {
  color: "primary"
};
export default SvgBearMarket;