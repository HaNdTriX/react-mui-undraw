import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgLocationSearch = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1132 861.221"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M351.647 719.19H1132v2.782H351.647zM83.591 858.439h780.353v2.782H83.591z"
      />
      <path
        d="M912.773 570.788c106.98 118.308-203.138 288.808-453.72 288.808S35.107 727.489 5.333 570.788c-72.19-379.947 615.078-621.44 453.72-288.809-235.198 484.849 369.47 195.638 453.72 288.809z"
        fill="#3f3d56"
      />
      <circle cx={331.97} cy={193.467} r={9.114} fill="#d0cde1" />
      <circle cx={208.429} cy={739.276} r={9.114} fill="#d0cde1" />
      <circle cx={348.173} cy={327.134} r={4.051} fill="#d0cde1" />
      <circle cx={135.52} cy={537.762} r={4.051} fill="#d0cde1" />
      <circle cx={668.165} cy={689.657} r={4.051} fill="#d0cde1" />
      <circle cx={122.355} cy={331.185} r={4.051} fill="#d0cde1" />
      <path
        fill="#d0cde1"
        d="M368.425 223.846H366.4v-2.026h-1.013v2.026h-2.025v1.012h2.025v2.026h1.013v-2.026h2.025v-1.012zM213.492 257.263h-2.025v-2.026h-1.013v2.026h-2.025v1.012h2.025v2.025h1.013v-2.025h2.025v-1.012zM112.229 447.638h-2.025v-2.026h-1.013v2.026h-2.025v1.012h2.025v2.026h1.013v-2.026h2.025v-1.012z"
      />
      <circle cx={396.779} cy={776.743} r={4.051} fill="#d0cde1" />
      <circle cx={383.615} cy={570.166} r={4.051} fill="#d0cde1" />
      <circle cx={862.59} cy={645.101} r={4.051} fill="#d0cde1" />
      <path
        fill="#d0cde1"
        d="M373.488 686.619h-2.025v-2.025h-1.012v2.025h-2.026v1.013h2.026v2.025h1.012v-2.025h2.025v-1.013zM569.939 758.516h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM73.749 578.267h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM355.261 432.448h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM230.707 312.957h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM313.743 512.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM192.227 638.013h-2.025v-2.026h-1.013v2.026h-2.025v1.012h2.025v2.026h1.013v-2.026h2.025v-1.012z"
      />
      <ellipse cx={233.745} cy={457.764} rx={59.745} ry={9.114} fill={color} />
      <path
        d="M239.82 460.802c-24.422 0-60.757-2.697-60.757-10.126s36.335-10.127 60.758-10.127 60.758 2.697 60.758 10.127-36.335 10.126-60.758 10.126zm0-18.228c-15.909 0-30.858.944-42.093 2.659-13.161 2.007-16.639 4.438-16.639 5.443s3.478 3.435 16.64 5.442c11.234 1.715 26.183 2.659 42.093 2.659s30.858-.944 42.093-2.659c13.162-2.007 16.64-4.438 16.64-5.442s-3.478-3.436-16.64-5.443c-11.235-1.715-26.184-2.659-42.093-2.659z"
        fill="#d0cde1"
      />
      <path
        d="M239.82 302.831c-21.251 0-38.48 5.077-38.48 26.329s17.229 106.326 38.48 106.326 38.48-85.075 38.48-106.326-17.227-26.329-38.48-26.329zm0 54.682a16.202 16.202 0 1116.203-16.202 16.202 16.202 0 01-16.202 16.202z"
        fill={color}
      />
      <path
        d="M959.033 534.54c-84.25-93.17-688.918 196.04-453.72-288.807C610.153 29.61 356.743 55.86 186.159 204.978 351.347 91.55 550.74 88.282 455.694 284.213 220.496 769.06 825.164 479.85 909.414 573.02c39.201 43.353 22.392 93.713-26.967 140.125 84.84-55.606 126.964-122.892 76.586-178.605zM463.218 857.745l-1.303-.489c-.286-.108-28.778-11.024-42.126-35.777-13.347-24.753-6.811-54.557-6.744-54.854l.308-1.357 1.302.488c.286.108 28.778 11.024 42.126 35.777 13.347 24.753 6.812 54.557 6.744 54.854zm-41.291-37.418c11.284 20.929 33.8 31.656 39.505 34.106 1.084-6.115 4.486-30.84-6.789-51.748-11.273-20.906-33.797-31.65-39.504-34.105-1.086 6.117-4.486 30.84 6.788 51.747z"
        fill="#d0cde1"
      />
      <path
        d="M429.99 814.01c23.986 14.432 33.224 43.096 33.224 43.096s-29.652 5.266-53.638-9.165-33.225-43.095-33.225-43.095 29.652-5.267 53.639 9.165z"
        fill={color}
      />
      <path
        d="M766.551 289.985s-54.962 53.863-31.878 60.458 49.466-49.465 49.466-49.465zM821.513 471.359l-6.596 30.778 49.466 2.199-7.695-32.977h-35.175zM977.604 661.526l-6.595 30.779 49.465 2.198-7.695-32.977h-35.175z"
        fill="#ffb9b9"
      />
      <path
        d="M890.765 265.802l4.396 17.588s-122.014-24.183-115.419 37.374 35.175 120.916 35.175 120.916-2.198 19.786 2.199 23.084 0 14.29 0 14.29 40.672 5.496 41.77-4.397a68.943 68.943 0 00-1.098-19.787s2.198 0 0-10.992-11.08-99.643-17.675-111.734c0 0 58.346 44.68 89.125 39.185 0 0-4.397 43.969 13.19 102.228s17.588 64.855 17.588 64.855 20.886 111.023 15.39 124.214l-1.1 5.496h40.672s-3.298-58.26 0-65.954 3.298-73.649-15.39-106.626c-13.233-23.353-10.768-91.066-3.53-117.83 6.08-22.476 7.614-39.774 4.051-62.783-3.81-24.606-15.19-37.467-29.1-49.127z"
        fill="#2f2e41"
      />
      <circle cx={923.192} cy={60.795} r={39.572} fill="#ffb9b9" />
      <path
        d="M912.75 88.826s12.09 35.175 10.992 41.77 35.175-13.19 35.175-13.19-14.29-35.176-9.893-45.069z"
        fill="#ffb9b9"
      />
      <path
        d="M956.719 105.314l-38.474 15.39 2.199 13.19s-3.298 4.397-2.199 6.596-14.29 10.992-12.091 14.29-13.191 16.488-12.092 19.786-35.175 23.084-15.389 61.557c0 0 10.259 13.336 8.973 29.107q-.068.831-.18 1.671c-2.198 16.489 83.543-2.198 83.543-2.198v-18.687s7.694-3.298 6.595-17.588-7.695-7.694 0-15.389 7.695-6.595 6.595-13.19c-.439-2.635-.527-12.105-.475-22.531a100.024 100.024 0 00-20.41-61.012z"
        fill="#d0cde1"
      />
      <path
        d="M935.833 133.894l-71.45 74.748-104.427 82.443 23.084 18.687 192.366-128.61s16.488-70.352-39.573-47.268z"
        fill="#d0cde1"
      />
      <path
        d="M824.81 487.847s-7.694-13.19-13.19-8.793l-38.473 30.778s-68.153 19.786-2.199 35.176c0 0 36.275 5.496 43.97 0s19.786-4.397 23.083-2.199 45.069-1.1 45.069-9.893-23.038-47.227-23.038-47.227-13.237 15.35-35.221 2.158zM980.902 678.015s-7.695-13.191-13.191-8.794L929.238 700s-68.153 19.786-2.199 35.175c0 0 36.275 5.496 43.97 0s19.786-4.397 23.084-2.198 45.068-1.1 45.068-9.894-23.038-47.227-23.038-47.227-13.237 15.35-35.221 2.159zM875.768 45.101s6.69-58.816 63.916-42.116c0 0 40.484-8.234 54.783 42.328l14.513 53.01-6.643-3.452-2.937 6.76-10.602 2.902-4.733-8.961-1.994 11.03-73.218 14.804s24.762-28.292 24.586-69.729l-7.293 8.01z"
        fill="#2f2e41"
      />
      <ellipse
        cx={611.457}
        cy={551.939}
        rx={107.339}
        ry={14.177}
        fill="#2f2e41"
      />
      <path
        d="M669.77 380.518h-1.27v-34.81a20.147 20.147 0 00-20.147-20.148h-73.751a20.147 20.147 0 00-20.148 20.148V536.68a20.147 20.147 0 0020.148 20.147h73.75a20.147 20.147 0 0020.148-20.147V405.297h1.27z"
        fill="#3f3d56"
      />
      <path
        d="M648.689 331.278h-9.627a7.148 7.148 0 01-6.618 9.848h-42.251a7.148 7.148 0 01-6.618-9.848h-8.992a15.046 15.046 0 00-15.046 15.046v190.693a15.046 15.046 0 0015.046 15.046h74.106a15.046 15.046 0 0015.046-15.046V346.324a15.046 15.046 0 00-15.046-15.046z"
        fill={color}
      />
      <circle cx={595.255} cy={399.031} r={21.265} fill="#d0cde1" />
      <path
        d="M650.532 429.893L624.81 404.17a23.271 23.271 0 10-6.694 6.694l25.722 25.722zm-56.897-26.775a16.566 16.566 0 1123.428 0 16.566 16.566 0 01-23.428 0zM569.939 454.726h83.036v10.126h-83.036z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgLocationSearch.propTypes = {
  color: PropTypes.string
};
SvgLocationSearch.defaultProps = {
  color: "primary"
};
export default SvgLocationSearch;
