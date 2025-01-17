import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgCircuit = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 978 813.634"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M348.529 736.514l-1.875 26.247v15s-3.75 39.371 31.872 35.622 5.625-59.996 5.625-59.996l-3.75-11.249zM395.4 678.393s-11.25 3.75-7.5 28.123c0 0 9.375 7.5 18.75 11.25a31.599 31.599 0 019.508 6.44 73.485 73.485 0 0034.898 18.596c8.89 1.894 17.053 1.68 19.338-4.414 5.625-14.998-22.498-28.122-22.498-28.122l-22.498-24.373z"
        fill="#2f2e41"
      />
      <path
        d="M515.39 427.163s33.748 44.996 16.874 46.871-29.997-39.372-29.997-39.372z"
        fill="#fbbebe"
      />
      <path
        d="M365.402 399.04l-3.75 131.24s-7.499 24.373-5.624 35.622c0 0-3.178 12.711-3.682 17.656-.044.426-.068.795-.068 1.093 0 3.75-14.998 67.494-5.624 112.49 0 0-9.374 35.623 1.875 44.997l35.622 1.875-1.875-69.37 18.749-104.991 9.374-28.123s-14.999 78.744-11.25 104.992c0 0-7.499 22.498-5.624 35.622 0 0 1.875 16.874 33.748 5.624l5.624-29.997 45.604-235.156-43.729-19.824z"
        fill="#2f2e41"
      />
      <circle cx={449.771} cy={160.934} r={33.747} fill="#fbbebe" />
      <path
        fill="#fbbebe"
        d="M420.711 165.621l-13.124 28.123 33.747 22.498 16.874-29.998-37.497-20.623z"
      />
      <path
        d="M447.896 213.43l-.54-7.893s-24.754-10.222-35.543-20.85l-8.914 6.245-52.495 24.373 18.748 196.86s33.747-3.75 54.37 18.748 56.246-9.375 56.246-9.375v-54.37l-9.374-61.87 9.374-67.495z"
        fill="#d0cde1"
      />
      <path
        d="M466.644 235.928l13.124 1.875s5.51 11.02 3.806 47.6l-.056 1.146c-1.875 37.497 5.625 50.621 5.625 50.621l31.872 93.743-20.623 11.249-29.998-58.12-20.623-119.991z"
        fill="#d0cde1"
      />
      <path
        d="M487.599 141.665a19.237 19.237 0 00-.886-6.89c-1.739-4.75-6.318-7.77-10.665-10.357-6.1-3.631-12.422-7.127-19.353-8.66s-14.644-.88-20.415 3.254c-3.714 2.66-6.358 6.527-8.82 10.374a57.927 57.927 0 00-6.756 13.17 1.82 1.82 0 00-.104 1.14 2.036 2.036 0 00.801.861c4.634 3.46 8.114 4.985 4.934 9.815 7.67-7.912 13.126-10.13 20.796-18.042-.899.831.447 2.324 1.67 2.27s2.367-.808 3.587-.701c1.777.155 2.843 1.964 4.165 3.162s4.088 1.349 4.312-.42l4.666 6.304a5.352 5.352 0 002.355-1.722l5.028 7.603 2.117-2.269a39.808 39.808 0 012.532 4.47c3.935-3.261 5.132 4.815 5.136 6.727 4.27-.637 4.854-16.62 4.9-20.09z"
        fill="#2f2e41"
      />
      <path
        d="M397.275 415.914s33.747 44.996 16.874 46.871-29.998-39.372-29.998-39.372z"
        fill="#fbbebe"
      />
      <path
        d="M357.903 217.18l-7.5-1.875s-20.623 28.122-24.372 58.12-7.5 67.495-7.5 67.495l63.745 89.993 22.498-16.874-48.746-84.368 16.874-24.373z"
        fill="#d0cde1"
      />
      <path
        opacity={0.1}
        d="M364.303 343.992l39.534 69.11-35.622-74.995-3.912 5.885z"
      />
      <path fill="#3f3d56" d="M978 747h-2V26H231v-2h747v723z" />
      <path fill="#3f3d56" d="M520 4h213v43H520zM266 4h82v43h-82z" />
      <circle cx={189} cy={218} r={25} fill="#f2f2f2" />
      <circle cx={189} cy={385} r={47} fill="#f2f2f2" />
      <circle cx={189} cy={565} r={63} fill="#f2f2f2" />
      <circle cx={214} cy={593} r={10} fill="#d0cde1" />
      <circle cx={174} cy={571} r={6} fill="#d0cde1" />
      <circle cx={189} cy={539} r={6} fill="#d0cde1" />
      <path
        d="M313.483 462.596a12 12 0 1112-12 12.014 12.014 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10z"
        fill="#2f2e41"
      />
      <path
        d="M270.31 151.886h-19.74v-19.741h19.74zm-18.222-1.519h16.704v-16.704h-16.704z"
        fill="#3f3d56"
      />
      <path
        d="M71.955 296.966L58.49 282.53l14.436-13.465L86.39 283.5zm-11.319-14.361L72.03 294.82l12.215-11.394-11.394-12.215z"
        fill="#2f2e41"
      />
      <circle cx={433} cy={25} r={25} fill={color} />
      <path fill="#3f3d56" d="M0 77h433v2H0z" />
      <circle cx={77} cy={78} r={25} fill={color} />
      <path fill={color} d="M520.686 356.817h245v171h-245z" />
      <path
        d="M789.686 492.817h-247v-173h247zm-245-2h243v-169h-243z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgCircuit.propTypes = {
  color: PropTypes.string
};
SvgCircuit.defaultProps = {
  color: "primary"
};
export default SvgCircuit;
