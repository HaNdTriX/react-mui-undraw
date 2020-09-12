import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgProcessingThoughts = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 964.71 806.003"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M209.414 503.689l16.473 9.466a13.218 13.218 0 0018.984-6.88 13.218 13.218 0 00-11.672-17.779L213.25 487.4 153.16 469.21l-9.688-36.273-25.333 14.23 17.418 41.24z"
        fill="#ffb8b8"
      />
      <path
        d="M130.875 315.42c-3.81 4.32-3.123 9.517-.347 13.735s7.393 7.729 11.435 11.451c2.597 2.391 4.999 4.929 6.162 7.806a8.468 8.468 0 01-1.389 8.955c-2.646 3.131-7.577 5.252-12.387 7.07a244.13 244.13 0 01-42.408 11.677c12.18-14.232 18.278-30.26 17.385-45.7-.188-3.24-.669-6.51.463-9.758a13.26 13.26 0 019.084-7.95c4.842-1.39 11.219-.015 11.961 3.158"
        fill="#2f2e41"
      />
      <path
        fill="#ffb8b8"
        d="M26.523 772.15l17.43.758 34.402-158.907-29.855 1.283L26.523 772.15zM200.819 738.049l-14.399 7.578-90.065-133.626 28.683-12.631 75.781 138.679z"
      />
      <circle cx={100.427} cy={337.87} r={27.57} fill="#ffb8b8" />
      <path
        d="M86.39 352.325s-9.852 20.46-23.492 19.703c0 0-25.765-10.61-34.101 18.187l-9.094 22.734 120.491 20.461s-6.82-41.68-22.734-42.437c0 0-18.187-1.516-15.914-8.336s10.61-22.734 10.61-22.734z"
        fill="#ffb8b8"
      />
      <path
        d="M126.554 456.902l-18.188 39.406 14.99 63.693 73 137s-33.62 30.163-42 35c-7.27 4.197-67.79-109.554-70-133-.73-7.737-14 149-14 149s-50.03-8.255-64-11c0 0 10.064-71.29 16-138 4.574-51.42.414-98.021 26.144-120.122l-2.274-43.953 60.625-2.274zM32.392 801.378l27.825 4.04a9.26 9.26 0 0011.559-4.62 9.26 9.26 0 00-1.539-10.359l-11.81-12.72-8.5-18.341c-5.084-5.192-8.56-3.356-10.502 5.175l-13.589-4.267-3.562 23.95a15.811 15.811 0 0010.118 17.142zM190.994 776.318l28.117-.098a9.26 9.26 0 0010.753-6.27 9.26 9.26 0 00-3.046-10.02l-13.554-10.844-11.106-16.891c-5.793-4.388-8.96-2.06-9.626 6.664l-14.069-2.222v24.214a15.811 15.811 0 0012.53 15.467zM86.502 295.49c-4.683-2.047-10.256-1.245-14.777 1.138s-8.134 6.183-11.296 10.198a86.013 86.013 0 00-18.183 48.428c-.248 4.818-.015 9.91 2.493 14.031 2.757 4.529 7.802 7.129 12.8 8.898a67.33 67.33 0 0051.15-2.813 181.334 181.334 0 01-23.278-22.615c-1.325-1.54-2.71-3.518-2.036-5.435a5.954 5.954 0 011.909-2.344l16.232-14.096-.409 5.702a16.545 16.545 0 0014.588-10.874c-.782 1.58.712 3.52 2.439 3.876s3.475-.357 5.094-1.054c3.927-1.69 8.193-3.702 9.936-7.607a10.915 10.915 0 00-.23-8.615 21.664 21.664 0 00-5.283-7.043 44.188 44.188 0 00-41.254-10.257"
        fill="#2f2e41"
      />
      <path
        d="M80.994 499.744l12.105 14.643a13.218 13.218 0 0020.191.217 13.218 13.218 0 00-4.694-20.744L90.3 485.835l-49.892-38.113 3.652-37.366-28.715 4.439 1.845 44.729z"
        fill="#ffb8b8"
      />
      <path
        d="M156.108 466.754s-11.8-43.216-18.025-43.206-14.56-.747-14.56-.747-9.852-28.797-60.625-19.703-28.797-8.336-43.195-1.516S0 456.144 0 456.144s78.054-25.765 94.726-11.367a185.118 185.118 0 0031.07 21.977s-7.578 18.945 30.312 0z"
        fill="#2f2e41"
      />
      <path fill="#3f3d56" d="M120.701 773.947h306v2h-306z" />
      <circle cx={661.701} cy={243.947} r={185} fill="#e6e6e6" />
      <path
        fill="#3f3d56"
        d="M320.701 140.947h306v2h-306zM320.701 195.947h601v2h-601z"
      />
      <path
        d="M736.7 392.947c-102.56 0-186-83.439-186-186s83.44-186 186-186 186 83.44 186 186-83.439 186-186 186zm0-370c-101.457 0-184 82.542-184 184s82.543 184 184 184 184-82.542 184-184-82.541-184-184-184z"
        fill="#3f3d56"
      />
      <circle cx={719.54} cy={24.42} r={24.42} fill={color} />
      <circle cx={551.398} cy={193.858} r={15.801} fill="#ff6584" />
      <circle cx={928.623} cy={194.118} r={36.087} fill={color} />
      <path
        d="M421.364 336.508H311.865v2h109.499a20.327 20.327 0 010 40.654h-165.69a20.327 20.327 0 010-40.654h6.191v-2h-6.192a22.327 22.327 0 000 44.654h165.691a22.327 22.327 0 000-44.654zM421.364 405.508H311.865v2h109.499a20.327 20.327 0 010 40.654h-165.69a20.327 20.327 0 010-40.654h6.191v-2h-6.192a22.327 22.327 0 000 44.654h165.691a22.327 22.327 0 000-44.654zM421.364 474.508H311.865v2h109.499a20.327 20.327 0 010 40.654h-165.69a20.327 20.327 0 010-40.654h6.191v-2h-6.192a22.327 22.327 0 000 44.654h165.691a22.327 22.327 0 000-44.654z"
        fill="#3f3d56"
      />
      <path
        data-name="Path 40"
        d="M274.224 331.225a5.947 5.947 0 000 11.892h26.086a5.947 5.947 0 00.195-11.892q-.097-.002-.195 0z"
        fill={color}
      />
      <path
        data-name="Path 40"
        d="M274.224 401.225a5.947 5.947 0 000 11.892h26.086a5.947 5.947 0 00.195-11.892q-.097-.002-.195 0z"
        fill="#ff6584"
      />
      <path
        data-name="Path 40"
        d="M274.224 469.225a5.947 5.947 0 000 11.892h26.086a5.947 5.947 0 00.195-11.892q-.097-.002-.195 0z"
        fill="#3f3d56"
      />
      <path
        data-name="Path 40"
        d="M263.878 352.889a5.947 5.947 0 000 11.892h149.086a5.947 5.947 0 10.195-11.892q-.098-.002-.195 0zM263.878 421.889a5.947 5.947 0 000 11.892h149.086a5.947 5.947 0 10.195-11.892q-.098-.002-.195 0zM263.878 490.889a5.947 5.947 0 000 11.892h149.086a5.947 5.947 0 10.195-11.892q-.098-.002-.195 0z"
        fill="#e6e6e6"
      />
      <path
        d="M415.35 714.253a102.532 102.532 0 00-8.999-28.886l-.643-1.33-4.776 5.296 3.539-7.888-.232-.458a188.612 188.612 0 00-10.367-17.989l-.702-1.074-.936 1.037.655-1.46-.328-.493c-4.686-7.029-8.286-11.474-8.321-11.519l-1.019-1.252-.654 1.493c-.12.274-12.02 27.693-13.596 54.786l-.024.423 8.008 9.68-8.167-5.127.014 1.86a79.264 79.264 0 00.649 9.523q.54 4.075 1.27 7.957a4.243 4.243 0 012.172.677q-.847-4.337-1.46-8.916a76.8 76.8 0 01-.593-7.38l15.797 9.918-15.644-18.91c1.424-22.907 10.264-45.986 12.746-52.077a182.34 182.34 0 016.851 9.56l-5.464 12.183 7.79-8.638a186.516 186.516 0 019.322 16.251l-8.415 18.758 11.377-12.615a100.382 100.382 0 018.171 26.92c1.992 15.04 1.603 29.49-1.094 40.686-2.584 10.725-7.137 17.317-12.493 18.087a8.466 8.466 0 01-3.3-.196 4.898 4.898 0 01-2.961.904h-.292a11.607 11.607 0 005.424 1.456 9.84 9.84 0 001.402-.1c6.297-.905 11.326-7.882 14.16-19.643 2.757-11.45 3.161-26.18 1.132-41.504z"
        fill="#3f3d56"
      />
      <path
        d="M397.726 774.71c-8.237 0-20.113-4.532-31.892-12.78a50.89 50.89 0 01-4.957-3.985l-1.32-1.205 4.989-1.437-6.642-.243-.28-.294c-12.451-13.039-20.199-31.457-20.276-31.64l-.605-1.456 1.574.072c.157.006 3.9.183 9.525.981l.35.05v-.003l1.233.187a123.754 123.754 0 0113.63 2.865l.479.13 1.496 3.686-.227-3.307 1.373.397a66.229 66.229 0 0118.328 8.497c17.914 12.544 27.826 28.222 22.586 35.704-1.791 2.558-5.088 3.78-9.364 3.78zm-34.143-17.048a48.564 48.564 0 003.4 2.631c16.407 11.49 34.024 15.834 38.468 9.49 4.444-6.346-5.665-21.415-22.074-32.906a64.161 64.161 0 00-16.381-7.814l.887 12.917-5.828-14.356a122.347 122.347 0 00-11.696-2.496l.644 9.375-4.012-9.88a123.255 123.255 0 00-7.137-.776c2.078 4.563 8.943 18.651 18.937 29.244l18.33.671z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgProcessingThoughts.propTypes = {
  color: PropTypes.string
};
SvgProcessingThoughts.defaultProps = {
  color: "primary"
};
export default SvgProcessingThoughts;