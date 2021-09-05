import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgDiet = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 767.457 518.945"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={645.091}
        cy={509.733}
        rx={122.366}
        ry={9.212}
        fill="#e6e6e6"
      />
      <path
        d="M124.638 142.927c.039-9.376-7.949-17.045-17.325-17.045H20.31c-9.228 0-17.2 7.542-17.309 16.77a16.936 16.936 0 006.57 13.61 3.789 3.789 0 011.501 3.468 16.853 16.853 0 00-.151 2.256v60.18a16.868 16.868 0 0016.868 16.867h71.494a16.868 16.868 0 0016.868-16.868v-60.18a16.957 16.957 0 00-.115-1.975 3.66 3.66 0 011.54-3.378 16.946 16.946 0 007.062-13.705z"
        fill="#3f3d56"
      />
      <path
        d="M120.87 141.276a13.495 13.495 0 00-13.505-11.717H20.284a13.528 13.528 0 00-13.301 10.478 13.317 13.317 0 006.365 14.342 3.663 3.663 0 011.714 4.147 13.059 13.059 0 00-.464 3.463v60.173a13.198 13.198 0 0010.75 12.968 13.358 13.358 0 002.443.226h71.495a13.046 13.046 0 003.57-.492 13.191 13.191 0 009.618-12.696v-60.185a13.132 13.132 0 00-.407-3.248 3.768 3.768 0 01-.113-.9 3.668 3.668 0 011.946-3.235l.005-.006a13.29 13.29 0 006.965-13.318z"
        fill={color}
      />
      <path
        d="M112.474 167.748v-5.658h-9.618v-32.53H97.2v32.53H66.93v-32.53h-5.658v32.53H31.005v-32.53h-5.658v32.53H14.598v5.658h10.75v16.973h-10.75v5.657h10.75v16.973h-10.75v5.658h10.75v22.12a13.358 13.358 0 002.443.227h3.214v-22.347h30.268v22.347h5.658v-22.347h30.268v22.347h2.087a13.046 13.046 0 003.57-.492v-21.855h9.618v-5.658h-9.618v-16.973h9.618v-5.657h-9.618v-16.973zm-81.469 0h30.268v16.973H31.005zm0 39.603v-16.973h30.268v16.973zm66.194 0H66.93v-16.973h30.268zm0-22.63H66.93v-16.973h30.268z"
        opacity={0.2}
      />
      <path d="M124.241 0A60.422 60.422 0 113.397 0H124.24z" fill={color} />
      <path
        d="M25.563 10.726c0 1.58-.56 2.86-1.251 2.86s-1.251-1.28-1.251-2.86a4.662 4.662 0 011.251-2.86 4.661 4.661 0 011.251 2.86zM88.846 20.737c0 1.58-.56 2.86-1.251 2.86s-1.252-1.28-1.252-2.86a4.662 4.662 0 011.252-2.86 4.662 4.662 0 011.25 2.86zM42.367 15.016c0 1.58-.56 2.86-1.251 2.86s-1.252-1.28-1.252-2.86a4.662 4.662 0 011.252-2.86 4.662 4.662 0 011.251 2.86zM67.394 37.54c0 1.58-.56 2.86-1.251 2.86s-1.252-1.28-1.252-2.86a4.662 4.662 0 011.252-2.86 4.662 4.662 0 011.251 2.86zM40.58 34.68c0 1.58-.56 2.86-1.252 2.86s-1.251-1.28-1.251-2.86a4.661 4.661 0 011.251-2.86 4.662 4.662 0 011.252 2.86zM103.147 7.866c0 1.58-.56 2.86-1.251 2.86s-1.252-1.28-1.252-2.86a4.662 4.662 0 011.252-2.86 4.662 4.662 0 011.251 2.86zM80.265 43.261c0 1.58-.56 2.86-1.251 2.86s-1.251-1.28-1.251-2.86a4.662 4.662 0 011.25-2.86 4.662 4.662 0 011.252 2.86z"
        fill="#3f3d56"
      />
      <path
        d="M63.819 63.819A63.891 63.891 0 010 0h6.793a57.026 57.026 0 10114.052 0h6.793a63.891 63.891 0 01-63.82 63.819zM190.819 21.909h20v20h-20zM245.819 30.909h161v2h-161zM190.819 172.458h20v20h-20zM245.819 181.458h161v2h-161zM190.819 321.959h20v20h-20zM245.819 330.959h161v2h-161z"
        fill="#3f3d56"
      />
      <path
        d="M632.324 137.344l-25.548 20.138-54.135-19.026s-18.406-20.704-28.815-5.283c-3.565 5.28 19.784 15.037 21.987 15.944 5.506 2.267 58.258 31.207 63.427 27.41s34.254-23 34.254-23z"
        fill="#a0616a"
      />
      <path
        d="M719.534 102.993c-24.213-9.048-47.247-13.329-65.922 0V59.976a32.961 32.961 0 0132.961-32.961 32.961 32.961 0 0132.961 32.96zM658.693 196.964l-1.979 13.85s-4.946 14.84 0 42.54l-79.637 217.15 58.862 16.817 29.184-118.715 41.056-90.52-3.957 102.886-20.775 109.812 61.336-2.474 17.873-188.293a166.793 166.793 0 00-14.945-86.825c-4.958-10.53-10.29-18.829-15.127-20.034-14.512-3.613-71.89 3.806-71.89 3.806z"
        fill="#2f2e41"
      />
      <path
        d="M584.496 469.02l-20.28 21.764s-39.077 20.28-11.377 22.753 37.098-8.409 37.098-8.409 34.626-2.473 34.13-7.42-2.967-21.27-2.967-21.27zM694.555 474.267v15.334s.494 6.43 0 7.914-7.914 19.786 16.818 15.829 14.84-19.291 14.84-19.291l-5.937-22.26z"
        fill="#2f2e41"
      />
      <circle cx={686.27} cy={65.265} r={24.856} fill="#a0616a" />
      <path
        d="M703.458 78.991s-3.462 32.647 0 38.583-35.12-5.936-35.12-5.936 8.41-22.26 5.442-31.163 29.678-1.484 29.678-1.484z"
        fill="#a0616a"
      />
      <path
        d="M723.244 172.974l7.915 21.764-73.703 8.41s-7.914-1.485-7.914-7.915-8.409-29.184-8.409-29.184-20.595-16.693-30.488-21.144c-3.586-1.613 1.779-.947 4.796-7.793.905-2.058 1.989-4.23 3.17-6.43a150.899 150.899 0 013.068-5.441 262.243 262.243 0 013.912-6.43c3.908-6.238 7.474-11.481 8.617-13.604 3.463-6.43 36.015-7.004 36.015-7.004 9.31 5.857 36.203 7.004 36.203 7.004s18.5 7.742 26.207 13.603c.559.42-9.389 54.164-9.389 54.164z"
        fill="#e6e6e6"
      />
      <path
        d="M707.244 35.426v-.59l-.702.04a32.986 32.986 0 00-28.349-5.666 32.844 32.844 0 0112.652 6.537l-23.825 1.324-10.056 22.346h6.806l5.485-10.056v10.056h23.017l1.564-7.821 4.345 7.821h4.522c.028.558.072 1.112.072 1.676l-4.47 43.017 21.23-8.938V61.093a32.892 32.892 0 00-12.291-25.667z"
        fill="#2f2e41"
      />
      <path
        d="M740.557 149.23l-1.484 39.078-3.957 75.68s5.44 32.647-8.41 32.153-3.462-38.583-3.462-38.583l-3.957-59.852 3.957-42.045z"
        fill="#a0616a"
      />
      <path
        d="M744.514 170.5c0 4.453-24.98 3.216-24.98 3.216l-13.108-68.509s18.5 7.742 26.207 13.603a23.23 23.23 0 014.387 6.43c.589 1.588 1.148 3.429 1.677 5.442a119.53 119.53 0 011.474 6.43 263.162 263.162 0 014.343 33.389z"
        fill="#e6e6e6"
      />
      <path
        d="M63.146 329.424l-37.862-3.92a12.02 12.02 0 10-20.696 6.465 12.025 12.025 0 1020.563 5.56l37.995-3.493z"
        fill="#ccc"
      />
      <path
        d="M101.648 355.446c14.884 3.66 29.879-6.897 30.655-22.205q.032-.637.032-1.282t-.033-1.281c-.775-15.308-15.77-25.866-30.654-22.206L51.153 320.89a11.07 11.07 0 100 22.14z"
        fill={color}
      />
    </svg>
  );
};

SvgDiet.propTypes = {
  color: PropTypes.string
};
SvgDiet.defaultProps = {
  color: "primary"
};
export default SvgDiet;
