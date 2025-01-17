import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgLocationTracking = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 884.596 679.043"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={124.484}
        cy={662.451}
        rx={124.484}
        ry={16.591}
        fill="#e6e6e6"
      />
      <path
        fill="#2f2e41"
        d="M63.767 385.875v158l4 102h33l-2-98 13-94 22 79 14 111 40-2-21-114-6-142h-97z"
      />
      <path
        d="M72.767 640.875v10s-23 22-4 22 20-5 20-5 7 0 7-2v-24zM178.767 640.875v10s23 22 4 22-20-5-20-5-7 0-7-2v-24z"
        fill="#2f2e41"
      />
      <circle cx={104.767} cy={227.875} r={24} fill="#ffb8b8" />
      <path fill="#ffb8b8" d="M85.767 235.875l1 36 32-1v-28l-33-7z" />
      <path
        fill="#cfcce0"
        d="M100.767 267.875l-15-11-6 135 71-2-17-118-15-14.374-18 10.374z"
      />
      <path
        d="M80.767 264.875l5.463-12.339 1.537 22.339s13 42 12 79 5 124-3 125-42 3-42-4-2-193-2-193zM118.767 253.875l12 13 30 11s0 128 6 158 17 33 3 34-13-4-13-4 10-50-3-60-38-68-36-100-1-52 1-52z"
        fill="#2f2e41"
      />
      <path
        d="M44.767 437.875l2 9s1 38 15 33-1-36-1-36v-6zM169.267 415.375l-11.5 14.5-4-13 3.5-14.5 12 13z"
        fill="#ffb8b8"
      />
      <path
        d="M147.767 276.875l9.5-.284a7.144 7.144 0 017.5 5.284c2 6 9 67 9 67s6 10 4 25l-7 56-20-22 3-50zM57.767 281.875l-2.656-1.424s-14.344 5.424-13.344 9.424-8 144-5 149 27 1 27 1zM127.557 212.971s8.006-10.857-5.646-13.955c0 0-11.453-9.339-22.754-2.247 0 0-8.474-3.432-11.928 2.624 0 0-.784-3.397 3.297-4.985 0 0-8.473-3.432-10.046 7.276 0 0-5.338 10.155-2.987 20.345s3.45 11.445 3.45 11.445-3.223-21.114 12-19.973 33.438-5.625 32.964 6.338 1.565 15.544 1.565 15.544 13.814-15.473.085-22.412z"
        fill="#2f2e41"
      />
      <path fill="#e6e6e6" d="M368 139.171h516.596v330.846H368z" />
      <path fill="#fff" d="M416.404 175.809h419.787V433.38H416.404z" />
      <path
        fill="#e6e6e6"
        d="M416.404 225.274h419.787v15.815H416.404zM416.404 302.591h419.787v15.815H416.404zM474.84 260.418h177.478v15.815H474.84zM416.404 384.301h419.787v15.815H416.404z"
      />
      <path
        fill="#e6e6e6"
        d="M466.933 175.809h15.815v218.157h-15.815zM762.143 175.809h15.815v135.568h-15.815zM642.653 175.809h15.815V433.38h-15.815zM552.157 305.227h15.815V433.38h-15.815z"
      />
      <circle cx={650.56} cy={310.498} r={20.208} fill={color} />
      <path
        d="M652.318 0a76.408 76.408 0 00-76.408 76.407c0 42.2 76.408 201.935 76.408 201.935s76.407-159.736 76.407-201.934A76.408 76.408 0 00652.318 0zm0 112.792a36.385 36.385 0 1136.384-36.385 36.385 36.385 0 01-36.384 36.385z"
        fill={color}
      />
    </svg>
  );
};

SvgLocationTracking.propTypes = {
  color: PropTypes.string
};
SvgLocationTracking.defaultProps = {
  color: "primary"
};
export default SvgLocationTracking;
