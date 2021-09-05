import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDesignSprint = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1011 625.338"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f1f1f1"
        d="M312.205 0l511.44 153.576-123.38 410.876-511.44-153.577z"
      />
      <ellipse cx={245} cy={599.338} rx={245} ry={26} fill="#3f3d56" />
      <path fill="#2f2e41" d="M208.269 68.566h59.473v86.672h-59.473z" />
      <path
        d="M219.762 108.547s2.238 42.79-17.548 44.545c-13.843 1.228 26.998 39.146 26.998 39.146l35.096-48.595s-26.308 2.695-9.449-26.997z"
        fill="#ffb8b8"
      />
      <path
        d="M264.31 143.648l-11.09 15.36-24.01 33.23s-20.05-18.62-27.29-30.18c-2.72-4.35-3.64-7.7-1-8.69a.06.06 0 01.04-.01 4.287 4.287 0 011.18-.26.418.418 0 01.07-.01 12.56 12.56 0 003.37-.76c16.16-6.04 14.18-43.78 14.18-43.78l35.1 8.1c-11.25 19.81-3.28 25.21 3.27 26.6a21.851 21.851 0 004.37.46c1.11.01 1.81-.06 1.81-.06z"
        opacity={0.1}
      />
      <path
        d="M274.627 73.403c-6.426 19.025-16.28 36.36-36.36 36.36s-35.229-16.311-36.36-36.36c-1.446-25.62 15.815-36.466 36.36-36.36 24.27.125 43.985 13.781 36.36 36.36z"
        fill="#2f2e41"
      />
      <path
        d="M188.716 382.57l9.449 66.142s-8.1 40.496-4.05 68.843l4.05 29.697h18.898l5.4-31.046s5.399-32.397 5.399-47.246c0 0 14.848-67.493 5.4-80.991zM303.454 378.52l-9.449 70.192s8.1 40.496 4.05 68.843l-4.05 29.697h-18.898l-5.4-31.046s-5.399-32.397-5.399-47.246c0 0-14.848-71.542-5.4-85.041z"
        fill="#ffb8b8"
      />
      <path
        d="M284.556 543.203s10.799-4.05 12.149 1.35 4.05 33.746 4.05 33.746 8.098 12.149 13.498 13.499 17.548 18.898 2.7 20.248-29.697-4.05-29.697-6.75-5.4-4.05-8.1-4.05-12.148-4.049-10.798-8.098 5.399-51.295 5.399-51.295zM207.614 543.203s-10.8-4.05-12.149 1.35-4.05 33.746-4.05 33.746-8.099 12.149-13.498 13.499-17.548 18.898-2.7 20.248 29.697-4.05 29.697-6.75 5.4-4.05 8.1-4.05 12.148-4.049 10.798-8.098-5.4-51.295-5.4-51.295z"
        fill="#2f2e41"
      />
      <circle cx={240.01} cy={96.398} r={27.99} fill="#ffb8b8" />
      <path
        d="M345.3 250.278s-56.69 24.3-62.09-1.35a370.699 370.699 0 01-6.75-48.59.035.035 0 00-.02-.01c-.79-.48-28.72-17.62-23.22-41.32a35.723 35.723 0 017.04-14.01s.83-.54 2.24-1.29a44.786 44.786 0 015.11-2.33c9.53-3.63 25.38-5.68 29.09 18.46 5.4 35.1 5.4 72.9 5.4 72.9s16.2 9.45 37.8 0 43.2-4.05 44.55 8.1c1.35 12.14-39.15 9.44-39.15 9.44zM202.21 153.088l-.29 8.97-3.22 101.12-.54 16.8-47.24 52.65s-9.45 28.34-29.7 32.39 13.5-39.14 13.5-39.14l45.9-67.5.07-2.27a256.593 256.593 0 00-4.7-56.39 67.623 67.623 0 01-.77-20.98c1.88-15.06 14.27-21.59 21.59-24.16a36.95 36.95 0 014.11-1.21.06.06 0 01.04-.01c.61-.15 1.02-.23 1.18-.26a.418.418 0 01.07-.01z"
        fill="#ffb8b8"
      />
      <path
        d="M277.81 250.278v5.4c-19.68 24.05-63.24 12.69-79.11 7.5-3.73-1.22-5.93-2.1-5.93-2.1a13.964 13.964 0 001.35-5.4v-12.14c0-4.05 1.34-1.35 2.69-2.7s-4.04-9.45-4.04-9.45c-13.5-8.1-5.4-31.05-5.4-31.05l9.44-20.25v-25.51a36.95 36.95 0 014.11-1.21.06.06 0 01.04-.01 4.287 4.287 0 011.18-.26.418.418 0 01.07-.01 12.56 12.56 0 003.37-.76c2.53 5.22 8.03 12.09 19.58 12.91 13.83.99 26.94-13.92 32.97-21.99a21.851 21.851 0 004.37.46 44.786 44.786 0 015.11-2.33l-6 25.21c-5.31 13.27 14.16 33.05 14.83 33.74a.035.035 0 01.02.01v14.85l-1.35 16.2-1.35 4.05 2.7 4.05-1.35 4.05 1.35 2.7c1.35 2.69 1.35 1.35 1.35 4.04z"
        fill="#d0cde1"
      />
      <path
        d="M195.465 259.732l-4.05-1.35s-48.595 121.487-16.198 126.887 56.694 14.848 62.094 5.4 2.7-43.196 2.7-43.196l5.399-1.35s-9.45 49.945 9.449 45.895 71.543-10.799 71.543-16.198-48.595-122.014-48.595-122.014-20.248 12.675-82.342 5.926z"
        fill="#2f2e41"
      />
      <circle cx={238.267} cy={30.345} r={14.353} fill="#2f2e41" />
      <path
        d="M221.044 22.69A14.353 14.353 0 01233.96 8.41c-.472-.047-.95-.072-1.435-.072a14.353 14.353 0 000 28.705c.484 0 .963-.026 1.435-.073a14.353 14.353 0 01-12.917-14.28zM226.71 60.357s-.3-1.668-12.021 2.727-18.747 36.832-12.887 55.878c2.362 7.676.44 13.21-2.695 17.082-11.767 14.531-7.135 36.356 10.005 43.828q.725.317 1.48.626l7.326 4.395s-9.338-12.288-4.665-28.006a80.589 80.589 0 001.455-41.256 148.365 148.365 0 00-1.837-7.096c-5.861-20.511-3.01-18.143 17.501-38.654 0 0 11.721 8.79 21.977 13.186s19.047 8.79 11.721 23.442-24.907 27.837-13.186 46.884 13.186 11.72 11.72 19.046l-1.464 7.326 8.79-8.79-5.86 11.72s19.047 0 24.907-14.651l2.93 2.93s11.721-20.511-10.255-39.558c0 0-7.326-4.396 2.93-19.047s2.379-46.151-10.807-52.012-47.066 0-47.066 0z"
        fill="#2f2e41"
      />
      <path
        d="M378.936 288.314l39.415-12.348a144.461 144.461 0 00-14.722-46.995l-39.415 12.348a88.611 88.611 0 0114.722 46.995z"
        fill={color}
      />
      <path fill="#3f3d56" d="M457 3.338h554v226H457z" />
      <path
        d="M536.621 87.472h-41.304a144.462 144.462 0 010-49.247h41.304a88.612 88.612 0 000 49.247z"
        fill="#ff6584"
      />
      <path
        d="M572.379 108.45h41.304a144.462 144.462 0 000-49.247h-41.304a88.612 88.612 0 010 49.247z"
        fill={color}
      />
      <path
        d="M664.214 36.202a370.784 370.784 0 015.737 103.869q-1.175 13.56-3.355 27.007c-.663 4.075-1.419 8.131-2.195 12.186-.444 2.323-1.377 5.216.084 7.403 2.846 4.26 12.597 3.148 16.895 3.287 8.94.29 17.892.338 26.835.494l26.905.47 12.954.226c4.414.077 9.248.761 13.627.197 5.763-.743 4.359-6.779 4.272-11.263q-.26-13.297-.71-26.59-1.783-52.675-6.566-105.192c-.406-4.466-.152-9.81-1.356-14.13-.486-1.745-.97-2.25-2.866-2.564-4.344-.718-9.52.039-13.915.07l-14.694.101-59.76.416a1.5 1.5 0 000 3l48.983-.34 21.553-.15 11.756-.082c2.416-.017 4.674-.749 6.19 1.91.958 1.682.565 5.888.748 7.845q4.39 47.083 6.369 94.35.494 11.811.838 23.629.143 4.923.26 9.848.07 2.954.13 5.91c.042 2.031.883 6.013.145 7.88-1.573 3.979-8.585 2.267-12.015 2.207l-11.957-.209-23.915-.417-23.916-.417c-3.954-.07-7.913-.1-11.864-.268a138.2 138.2 0 01-3.933-.212c-3.898-.278-8.095.644-8.558-4.744-.286-3.324 1.532-7.91 2.1-11.235q.962-5.634 1.748-11.295 1.47-10.578 2.342-21.226a373.924 373.924 0 00-6.003-102.768c-.374-1.892-3.267-1.091-2.893.797zM861.214 36.202a370.784 370.784 0 015.737 103.869q-1.175 13.56-3.355 27.007c-.663 4.075-1.419 8.131-2.195 12.186-.444 2.323-1.377 5.216.084 7.403 2.846 4.26 12.597 3.148 16.895 3.287 8.94.29 17.892.338 26.835.494l26.905.47 12.954.226c4.414.077 9.248.761 13.627.197 5.763-.743 4.359-6.779 4.272-11.263q-.26-13.297-.71-26.59-1.783-52.675-6.566-105.192c-.406-4.466-.152-9.81-1.356-14.13-.486-1.745-.97-2.25-2.866-2.564-4.344-.718-9.52.039-13.915.07l-14.694.101-59.76.416a1.5 1.5 0 000 3l48.983-.34 21.553-.15 11.756-.082c2.416-.017 4.674-.749 6.19 1.91.958 1.682.565 5.888.748 7.845q4.39 47.083 6.369 94.35.494 11.811.838 23.629.143 4.923.26 9.848.07 2.954.13 5.91c.042 2.031.883 6.013.145 7.88-1.573 3.979-8.585 2.267-12.015 2.207l-11.957-.209-23.915-.417-23.916-.417c-3.954-.07-7.913-.1-11.864-.268a138.2 138.2 0 01-3.933-.212c-3.898-.278-8.095.644-8.558-4.744-.286-3.324 1.532-7.91 2.1-11.235q.962-5.634 1.748-11.295 1.47-10.578 2.342-21.226a373.924 373.924 0 00-6.003-102.768c-.374-1.892-3.267-1.091-2.893.797z"
        fill="#f1f1f1"
      />
      <path
        d="M678.008 43.924h19.842a1.5 1.5 0 000-3h-19.842a1.5 1.5 0 000 3zM678.007 50.692l18.703-.707c1.924-.073 1.934-3.073 0-3l-18.703.707c-1.925.073-1.934 3.073 0 3zM678.008 56.397h18.142a1.5 1.5 0 000-3h-18.142a1.5 1.5 0 000 3zM738.127 42.516c-4.072-2.125-7.768 1.369-8.341 5.36-.28 1.953-.341 4.62.902 6.278 1.27 1.693 3.713 2.403 5.74 2.529 3.873.239 7.994-1.922 8.946-5.887a7.35 7.35 0 00-4.574-8.711c-1.828-.634-2.613 2.263-.797 2.893a4.208 4.208 0 012.567 4.355 4.815 4.815 0 01-4.01 4.206c-2.476.57-5.378-.042-5.856-2.835-.359-2.09.776-7.232 3.909-5.598 1.71.892 3.228-1.696 1.514-2.59zM875.008 43.924h19.842a1.5 1.5 0 000-3h-19.842a1.5 1.5 0 000 3zM875.007 50.692l18.703-.707c1.924-.073 1.934-3.073 0-3l-18.703.707c-1.925.073-1.934 3.073 0 3zM875.008 56.397h18.142a1.5 1.5 0 000-3h-18.142a1.5 1.5 0 000 3zM935.127 42.516c-4.072-2.125-7.768 1.369-8.341 5.36-.28 1.953-.341 4.62.902 6.278 1.27 1.693 3.713 2.403 5.74 2.529 3.873.239 7.994-1.922 8.946-5.887a7.35 7.35 0 00-4.574-8.711c-1.828-.634-2.613 2.263-.797 2.893a4.208 4.208 0 012.567 4.355 4.815 4.815 0 01-4.01 4.206c-2.476.57-5.378-.042-5.856-2.835-.359-2.09.776-7.232 3.909-5.598 1.71.892 3.228-1.696 1.514-2.59zM681.976 72.848q32.739.345 65.41-2.021l-1.447-1.899c-3.565 9.034-3.467 18.556-2.994 28.112.118 2.395.87 5.624.384 7.995-.611 2.983-3.289 2.27-5.951 2.356q-8.797.284-17.599.409-8.311.117-16.624.092-3.912-.012-7.824-.055c-3.062-.035-6.543.855-7.334-2.692-.506-2.273.004-5.261.005-7.598l.006-8.546.011-17.094a1.5 1.5 0 00-3 0l-.014 20.892-.006 9.497c-.001 1.886-.393 4.165.311 5.956 1.62 4.119 8.621 2.573 11.977 2.604q10.268.095 20.537-.03 10.268-.125 20.531-.467c2.948-.098 7.027.572 7.92-3.063.628-2.549-.103-5.872-.237-8.473-.152-2.968-.316-5.937-.356-8.91-.093-6.94.587-13.692 3.15-20.188a1.507 1.507 0 00-1.446-1.898q-32.655 2.365-65.41 2.021a1.5 1.5 0 000 3z"
        fill="#f1f1f1"
      />
      <path
        d="M688.196 74.478a220.127 220.127 0 0127.264 11.774c7.906 4.086 18.257 8.55 23.698 15.852 1.14 1.53 3.745.037 2.59-1.514-5.556-7.457-15.122-11.845-23.157-16.084a225.409 225.409 0 00-29.597-12.92c-1.822-.65-2.606 2.248-.798 2.892z"
        fill="#f1f1f1"
      />
      <path
        d="M746.876 69.136c-9.914 4.24-18.313 12.407-27.172 18.459q-14.385 9.826-29.625 18.29c-1.686.94-.175 3.533 1.514 2.59q15.208-8.493 29.625-18.29c8.858-6.05 17.26-14.22 27.172-18.459 1.77-.757.243-3.342-1.514-2.59zM878.976 72.848q32.739.345 65.41-2.021l-1.447-1.899c-3.565 9.034-3.467 18.556-2.994 28.112.118 2.395.87 5.624.384 7.995-.611 2.983-3.289 2.27-5.951 2.356q-8.797.284-17.599.409-8.311.117-16.624.092-3.912-.012-7.824-.055c-3.062-.035-6.543.855-7.334-2.692-.506-2.273.004-5.261.005-7.598l.006-8.546.011-17.094a1.5 1.5 0 00-3 0l-.014 20.892-.006 9.497c-.001 1.886-.393 4.165.311 5.956 1.62 4.119 8.621 2.573 11.977 2.604q10.268.095 20.537-.03 10.268-.125 20.531-.467c2.948-.098 7.027.572 7.92-3.063.628-2.549-.103-5.872-.237-8.473-.152-2.968-.316-5.937-.356-8.91-.093-6.94.587-13.692 3.15-20.188a1.507 1.507 0 00-1.446-1.898q-32.655 2.365-65.41 2.021a1.5 1.5 0 000 3z"
        fill="#f1f1f1"
      />
      <path
        d="M885.196 74.478a220.127 220.127 0 0127.264 11.774c7.906 4.086 18.257 8.55 23.698 15.852 1.14 1.53 3.745.037 2.59-1.514-5.556-7.457-15.122-11.845-23.157-16.084a225.409 225.409 0 00-29.597-12.92c-1.822-.65-2.606 2.248-.798 2.892z"
        fill="#f1f1f1"
      />
      <path
        d="M943.876 69.136c-9.914 4.24-18.313 12.407-27.172 18.459q-14.385 9.826-29.625 18.29c-1.686.94-.175 3.533 1.514 2.59q15.208-8.493 29.625-18.29c8.858-6.05 17.26-14.22 27.172-18.459 1.77-.757.243-3.342-1.514-2.59zM878.976 132.848q32.739.345 65.41-2.021l-1.447-1.899c-3.565 9.034-3.467 18.556-2.994 28.112.118 2.395.87 5.624.384 7.995-.611 2.983-3.289 2.27-5.951 2.356q-8.797.284-17.599.409-8.311.117-16.624.092-3.912-.012-7.824-.055c-3.062-.035-6.543.855-7.334-2.692-.506-2.273.004-5.261.005-7.598l.006-8.546.011-17.094a1.5 1.5 0 00-3 0l-.014 20.892-.006 9.497c-.001 1.886-.393 4.165.311 5.956 1.62 4.119 8.621 2.573 11.977 2.604q10.268.095 20.537-.03 10.268-.125 20.531-.467c2.948-.098 7.027.572 7.92-3.063.628-2.549-.103-5.872-.237-8.473-.152-2.968-.316-5.937-.356-8.909-.093-6.94.587-13.693 3.15-20.188a1.507 1.507 0 00-1.446-1.9q-32.655 2.366-65.41 2.022a1.5 1.5 0 000 3z"
        fill="#f1f1f1"
      />
      <path
        d="M885.196 134.478a220.127 220.127 0 0127.264 11.774c7.906 4.086 18.257 8.55 23.698 15.852 1.14 1.53 3.745.037 2.59-1.514-5.556-7.457-15.122-11.845-23.157-16.084a225.409 225.409 0 00-29.597-12.92c-1.822-.65-2.606 2.248-.798 2.892z"
        fill="#f1f1f1"
      />
      <path
        d="M943.876 129.136c-9.914 4.24-18.313 12.407-27.172 18.459q-14.385 9.826-29.625 18.29c-1.686.94-.175 3.533 1.514 2.59q15.208-8.493 29.625-18.29c8.858-6.05 17.26-14.22 27.172-18.459 1.77-.757.243-3.342-1.514-2.59zM687.647 130.587q30.334.461 60.666-.242c1.927-.045 1.934-3.045 0-3q-30.33.703-60.666.242a1.5 1.5 0 000 3zM689.348 144.188q31.184.498 62.366-.267c1.927-.048 1.935-3.048 0-3q-31.179.765-62.366.267c-1.931-.03-1.932 2.97 0 3zM687.072 158.874l58.966-2.738c1.922-.09 1.933-3.09 0-3l-58.966 2.738c-1.922.09-1.933 3.09 0 3zM778.921 116.491h56.126a1.5 1.5 0 000-3h-56.126a1.5 1.5 0 000 3z"
        fill="#f1f1f1"
      />
      <path
        d="M832.588 99.34l8.77 8.004c1.002.915 3.76 2.805 4.384 4.002 1.288 2.474-.096 1.91-2.304 2.767a49.36 49.36 0 00-14.763 9.168c-1.452 1.279.677 3.394 2.121 2.121a45.833 45.833 0 0113.44-8.396c1.769-.7 5.125-1.11 5.966-3.217 1.028-2.579-2.248-4.482-3.8-5.899L834.71 97.218c-1.424-1.3-3.551.817-2.122 2.122z"
        fill="#f1f1f1"
      />
      <path
        d="M696.379 216.45h41.304a144.462 144.462 0 000-49.247h-41.304a88.612 88.612 0 010 49.247zM524.379 179.45h41.304a144.462 144.462 0 000-49.247h-41.304a88.612 88.612 0 010 49.247zM785.379 71.45h41.304a144.462 144.462 0 000-49.247h-41.304a88.612 88.612 0 010 49.247z"
        fill={color}
      />
    </svg>
  );
};

SvgDesignSprint.propTypes = {
  color: PropTypes.string
};
SvgDesignSprint.defaultProps = {
  color: "primary"
};
export default SvgDesignSprint;
