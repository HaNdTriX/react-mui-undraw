import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgMobileWireframe = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 972.385 563.4"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M0 501.562h963.51v2.241H0z" />
      <path
        d="M124.678 96.694c-8.273-19.52-29.333-23.207-29.333-23.207s-20.277-5.41-37.211 20.353c-15.784 24.013-36.139 46.511-10.325 56.096l6.819-14.32.818 16.48a105.095 105.095 0 0011.363 1.725c28.633 2.908 55.623 7.745 56.123-2.603.664-13.755 9.706-35.741 1.746-54.524z"
        fill="#2f2e41"
      />
      <path
        d="M37.324 253.016l-1.842 46.981s-19.345 37.77-3.685 36.848 13.818-36.848 13.818-36.848l5.527-44.217zM143.262 244.726l5.527 46.98s16.581 24.873 3.685 33.164-12.897-29.479-12.897-29.479l-13.818-47.902zM123.917 332.24l-16.582 64.483s-7.37 25.793-17.503 38.69l-3.684 7.37-14.74-1.843 10.134-41.453 6.448-76.46z"
        fill="#ffb8b8"
      />
      <path
        d="M123.917 332.24l-16.582 64.483s-7.37 25.793-17.503 38.69l-3.684 7.37-14.74-1.843 10.134-41.453 6.448-76.46z"
        opacity={0.1}
      />
      <path
        d="M67.762 430.656l25.193 5.833-10.383 24.476s4.22 14.653.2 22.413-3.44 21.84-3.44 21.84l-5.46-.86s-13.256 24.956-28.919 17.826.997-24.09.997-24.09 13.542-26.776 15.262-37.695 6.55-29.743 6.55-29.743z"
        fill="#2f2e41"
      />
      <path
        d="M67.762 430.656l25.193 5.833-10.383 24.476s4.22 14.653.2 22.413-3.44 21.84-3.44 21.84l-5.46-.86s-13.256 24.956-28.919 17.826.997-24.09.997-24.09 13.542-26.776 15.262-37.695 6.55-29.743 6.55-29.743z"
        opacity={0.1}
      />
      <path
        d="M46.536 318.421l13.818 69.09s-4.606 34.084.921 55.272l5.527 20.266h18.424v-74.617s.922-60.799-1.842-65.405-36.848-4.606-36.848-4.606z"
        fill="#ffb8b8"
      />
      <path
        d="M88.911 455.68l-25.793 1.842 6.448 25.793s-6.448 13.818-3.685 22.11 0 22.108 0 22.108h5.527s9.212 26.715 25.794 22.109 2.763-23.952 2.763-23.952-9.212-28.557-9.212-39.611-1.842-30.4-1.842-30.4z"
        fill="#2f2e41"
      />
      <circle cx={95.359} cy={112.073} r={24.872} fill="#ffb8b8" />
      <path
        d="M78.317 121.746s1.843 31.32-3.684 33.163 28.557 0 28.557 0-4.606-19.345 0-24.872-24.873-8.291-24.873-8.291z"
        fill="#ffb8b8"
      />
      <path
        d="M103.65 149.842s-23.95-1.842-28.557 0-17.503 11.055-17.503 11.055l6.449 58.035 52.508 11.054 8.29-11.975 8.291-17.503-3.684-22.108-.922-12.897z"
        fill={color}
      />
      <path
        d="M52.984 164.582s-11.975 2.763-12.896 11.975-.922 32.242 0 35.927 0 5.527-.922 6.448-2.763-.921-.92 1.843 1.842 2.763.92 5.527-3.684-.921-1.842 3.684 2.764 5.528 1.842 6.449-3.684 22.109-3.684 22.109l15.66 2.763 15.66-54.35zM124.838 164.582a9.817 9.817 0 018.29 5.527c2.764 5.527 10.134 41.454 9.213 44.217s-2.764-.921-.922 4.606 0 4.606.921 8.29-3.684 0 0 3.686 5.528 4.606 3.685 6.448-4.606-1.842-1.842 1.842 2.763 9.212 2.763 9.212l-22.108 4.606-6.449-51.587z"
        fill={color}
      />
      <path
        d="M50.1 163.117l4.526-2.263a3.874 3.874 0 015.213 1.763l20.781 42.497 23.03 14.74 16.582-7.37s11.975-18.424 8.29-27.636c-2.498-6.246-5.424-15.856-7.05-21.397a1.655 1.655 0 012.509-1.838l3.14 2.093a4.593 4.593 0 011.95 2.892l6.821 32.989-9.212 19.345v18.424l6.448 99.49s-23.95-3.686-47.902-8.292-54.35-8.29-54.35-8.29 15.66-81.066 28.557-94.883c0 0 0-10.134 1.842-11.055s3.685-7.37 3.685-7.37l-16.686-38.845a3.874 3.874 0 011.827-4.994zM120 89.602L98.895 78.547 69.749 83.07l-6.03 26.633 15.011-.578 4.193-9.784v9.623l6.927-.266 4.02-15.578 2.512 16.583 24.623-.503L120 89.602z"
        fill="#2f2e41"
      />
      <ellipse cx={70.027} cy={112.073} rx={2.764} ry={4.836} fill="#ffb8b8" />
      <path fill="#3f3d56" d="M188.385 0h622v319.006h-622z" />
      <path
        d="M455.029 175.737h-128.96a1.46 1.46 0 01-1.46-1.46v-51.584a1.46 1.46 0 011.46-1.46h128.96a1.46 1.46 0 011.46 1.46v51.583a1.46 1.46 0 01-1.46 1.46zm-127.5-2.921h126.04v-48.663h-126.04zM380.877 209.59h-54.808a1.46 1.46 0 01-1.46-1.461v-21.924a1.46 1.46 0 011.46-1.46h54.808a1.46 1.46 0 011.46 1.46v21.924a1.46 1.46 0 01-1.46 1.46zm-53.348-2.922h51.887v-19.003H327.53zM455.029 209.59H400.22a1.46 1.46 0 01-1.46-1.461v-21.924a1.46 1.46 0 011.46-1.46h54.808a1.46 1.46 0 011.46 1.46v21.924a1.46 1.46 0 01-1.46 1.46zm-53.348-2.922h51.887v-19.003h-51.887z"
        fill="#fff"
      />
      <path
        d="M453.417 174.125a1.462 1.462 0 01-.533-.101l-127.349-49.972a1.46 1.46 0 011.067-2.719l127.349 49.972a1.46 1.46 0 01-.534 2.82z"
        fill="#fff"
      />
      <path
        d="M326.07 175.737a1.46 1.46 0 01-.544-2.817l128.96-51.584a1.46 1.46 0 011.085 2.713l-128.96 51.583a1.454 1.454 0 01-.542.105zM380.071 208.783a1.47 1.47 0 01-.535-.1l-53.197-20.958a1.46 1.46 0 011.071-2.718l53.196 20.957a1.46 1.46 0 01-.535 2.82z"
        fill="#fff"
      />
      <path
        d="M326.875 208.783a1.46 1.46 0 01-.5-2.832l53.197-19.344a1.46 1.46 0 11.998 2.744l-53.196 19.344a1.46 1.46 0 01-.5.088zM454.223 208.783a1.475 1.475 0 01-.513-.092l-51.584-19.344a1.46 1.46 0 011.027-2.736l51.583 19.344a1.46 1.46 0 01-.513 2.828z"
        fill="#fff"
      />
      <path
        d="M402.64 207.172a1.46 1.46 0 01-.475-2.841l51.583-17.732a1.46 1.46 0 11.95 2.76l-51.584 17.733a1.456 1.456 0 01-.474.08zM246.474 93.452a21.907 21.907 0 1121.907-21.906 21.931 21.931 0 01-21.907 21.906zm0-40.892a18.986 18.986 0 1018.986 18.986 19.007 19.007 0 00-18.986-18.986zM391.059 93.452a21.907 21.907 0 1121.906-21.906 21.93 21.93 0 01-21.906 21.906zm0-40.892a18.986 18.986 0 1018.985 18.986A19.008 19.008 0 00391.06 52.56zM570.694 93.452A21.907 21.907 0 11592.6 71.546a21.93 21.93 0 01-21.906 21.906zm0-40.892a18.986 18.986 0 1018.985 18.986 19.008 19.008 0 00-18.985-18.986zM758.896 93.452a21.907 21.907 0 1121.907-21.906 21.93 21.93 0 01-21.907 21.906zm0-40.892a18.986 18.986 0 1018.986 18.986 19.008 19.008 0 00-18.986-18.986z"
        fill="#fff"
      />
      <path
        d="M387.184 78.307v-1.105l1.41-1.37c3.397-3.233 4.932-4.953 4.952-6.956a2.371 2.371 0 00-2.639-2.598 4.531 4.531 0 00-2.823 1.124l-.574-1.268a5.84 5.84 0 013.765-1.35 3.742 3.742 0 014.07 3.866c0 2.455-1.78 4.44-4.582 7.14l-1.064.983v.04h5.975v1.494zM245.99 66.574h-.041l-2.312 1.248-.347-1.37 2.904-1.556h1.535v13.299h-1.74zM760.205 78.194v-3.62h-6.178v-1.187l5.933-8.49h1.944v8.265h1.861v1.412h-1.861v3.62zm0-5.032v-4.438q0-1.044.063-2.088h-.063c-.408.778-.736 1.35-1.104 1.965l-3.253 4.52v.041zM568.444 76.128a6.029 6.029 0 002.946.839c2.313 0 3.029-1.474 3.008-2.578-.02-1.862-1.7-2.66-3.436-2.66h-1.004v-1.35h1.004c1.309 0 2.966-.675 2.966-2.25 0-1.065-.676-2.006-2.333-2.006a4.865 4.865 0 00-2.658.881l-.471-1.309a6.311 6.311 0 013.477-1.024c2.619 0 3.805 1.555 3.805 3.172a3.303 3.303 0 01-2.456 3.13v.04a3.463 3.463 0 012.967 3.416c0 2.128-1.658 3.99-4.848 3.99a6.747 6.747 0 01-3.457-.9zM639.045 208.129h-128.96a1.46 1.46 0 01-1.46-1.46v-82.516a1.46 1.46 0 011.46-1.46h128.96a1.46 1.46 0 011.46 1.46v82.515a1.46 1.46 0 01-1.46 1.46zm-127.5-2.921h126.04v-79.595h-126.04z"
        fill="#fff"
      />
      <path
        d="M615.967 140.948h-78.864a1.46 1.46 0 110-2.92h78.864a1.46 1.46 0 110 2.92zM615.967 154.092h-78.864a1.46 1.46 0 110-2.92h78.864a1.46 1.46 0 110 2.92zM615.967 167.236h-78.864a1.46 1.46 0 110-2.92h78.864a1.46 1.46 0 110 2.92zM615.967 180.38h-78.864a1.46 1.46 0 110-2.92h78.864a1.46 1.46 0 110 2.92zM615.967 193.524h-78.864a1.46 1.46 0 110-2.92h78.864a1.46 1.46 0 110 2.92zM216.31 126.749a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM216.31 142.813a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM216.31 158.878a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM216.31 174.943a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM216.31 191.008a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM216.31 207.073a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM277.144 126.709h-46.735a1.46 1.46 0 010-2.921h46.735a1.46 1.46 0 010 2.92zM277.144 142.774h-46.735a1.46 1.46 0 110-2.921h46.735a1.46 1.46 0 110 2.92zM277.144 158.839h-46.735a1.46 1.46 0 110-2.921h46.735a1.46 1.46 0 110 2.92zM277.144 174.904h-46.735a1.46 1.46 0 110-2.921h46.735a1.46 1.46 0 110 2.92zM277.144 190.968h-46.735a1.46 1.46 0 110-2.92h46.735a1.46 1.46 0 110 2.92zM277.144 207.033h-46.735a1.46 1.46 0 110-2.92h46.735a1.46 1.46 0 110 2.92zM774.616 213.702h-31.438a7.852 7.852 0 01-7.845-7.842v-80.9a7.851 7.851 0 017.845-7.841h3.813a1.46 1.46 0 011.355 2.007 1.575 1.575 0 001.454 2.17h17.923a1.574 1.574 0 001.456-2.166 1.46 1.46 0 011.352-2.011h4.085a7.85 7.85 0 017.842 7.841v80.9a7.852 7.852 0 01-7.842 7.842zm-31.438-93.662a4.928 4.928 0 00-4.924 4.92v80.9a4.928 4.928 0 004.924 4.921h31.438a4.927 4.927 0 004.922-4.921v-80.9a4.927 4.927 0 00-4.922-4.92h-2.412a4.5 4.5 0 01-4.481 4.177H749.8a4.498 4.498 0 01-4.48-4.177zM712.357 167.236h-40.893a1.46 1.46 0 010-2.92h37.367l-8.46-8.461a1.46 1.46 0 012.065-2.065l10.954 10.953a1.46 1.46 0 01-1.033 2.493z"
        fill="#fff"
      />
      <path
        d="M702.134 177.46a1.46 1.46 0 01-1.033-2.494l10.223-10.223a1.46 1.46 0 012.066 2.065l-10.224 10.223a1.456 1.456 0 01-1.032.428z"
        fill="#fff"
      />
      <path
        d="M784.353 290.158h-47.75a167.01 167.01 0 010-56.933h47.75a102.443 102.443 0 000 56.933z"
        fill="#ff6584"
      />
      <path
        d="M519.228 280.37h47.751a167.01 167.01 0 000-56.934h-47.75a102.443 102.443 0 010 56.934zM591.898 296.381h47.75a167.01 167.01 0 000-56.933h-47.75a102.443 102.443 0 010 56.933z"
        fill={color}
      />
      <path
        d="M559.445 240.024h-29.057c-.502 0-.908-.654-.908-1.46s.406-1.461.908-1.461h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM559.445 253.572h-29.057c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.652.908 1.46s-.407 1.46-.908 1.46zM632.114 262.194h-29.057c-.501 0-.908-.653-.908-1.46s.407-1.461.908-1.461h29.057c.502 0 .908.653.908 1.46s-.406 1.46-.908 1.46zM632.114 275.742h-29.057c-.501 0-.908-.653-.908-1.46s.407-1.46.908-1.46h29.057c.502 0 .908.653.908 1.46s-.406 1.46-.908 1.46zM773.758 248.645H744.7c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM773.758 262.194H744.7c-.502 0-.908-.653-.908-1.46s.406-1.461.908-1.461h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM559.445 267.12h-29.057c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46z"
        fill="#fff"
      />
      <path
        d="M279.05 281.601h47.75a167.01 167.01 0 000-56.933h-47.75a102.443 102.443 0 010 56.933z"
        fill={color}
      />
      <path
        d="M319.267 241.255H290.21c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM319.267 254.804H290.21c-.502 0-.908-.653-.908-1.46s.406-1.461.908-1.461h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM319.267 268.352H290.21c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46z"
        fill="#fff"
      />
      <path
        d="M142.05 371.601h47.75a167.01 167.01 0 000-56.933h-47.75a102.443 102.443 0 010 56.933z"
        fill={color}
      />
      <path
        d="M182.267 331.255H153.21c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM182.267 344.804H153.21c-.502 0-.908-.653-.908-1.46s.406-1.461.908-1.461h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46zM182.267 358.352H153.21c-.502 0-.908-.653-.908-1.46s.406-1.46.908-1.46h29.057c.501 0 .908.653.908 1.46s-.407 1.46-.908 1.46z"
        fill="#fff"
      />
      <path
        d="M802.642 265.686s-29.338 23.051-14.669 28.29 24.1-18.86 24.1-18.86z"
        fill="#a0616a"
      />
      <path
        d="M803.69 257.303l-6.287 10.478s10.478 0 12.574 15.717l8.382-10.478z"
        fill="#cfcce0"
      />
      <path
        fill="#a0616a"
        d="M943.047 496.201l1.047 31.433-12.573 7.335-5.239-3.143 1.048-35.625h15.717zM868.653 487.818l2.096 33.53-29.338 12.573 2.095-17.812s8.382-13.622 6.287-28.29z"
      />
      <path
        d="M913.708 235.3s16.765 44.007 19.908 71.25S942 406.09 942 406.09l10.478 93.254-29.339 4.191-12.573-94.301-28.29-93.254-6.287 93.254-5.24 84.87-27.242 1.049-2.095-88.015-11.526-112.114 6.287-53.437zM929.425 529.73s1.719-17.598 14.48-7.751l2.285-1.68 10.478 23.052s12.573 17.813-9.43 19.908-19.908-19.908-19.908-19.908l-2.096-9.43 1.048-6.175zM868.653 508.774a16.646 16.646 0 018.383 14.67c0 10.477-1.048 11.525-1.048 11.525l-15.717 4.191s-10.478-1.048-16.765 5.24-37.72 10.477-37.72 2.095 26.194-22.004 26.194-22.004 7.78-13.137 13.32-11.808 7.636 3.426 7.636 4.473-3.143 8.383-3.143 8.383 17.812-4.191 18.86-16.765z"
        fill="#2f2e41"
      />
      <circle cx={866.558} cy={80.226} r={26.195} fill="#a0616a" />
      <path
        d="M885.942 87.037l11.526 26.195-31.434 45.055s-2.096-49.246-8.383-57.629 28.29-13.621 28.29-13.621z"
        fill="#a0616a"
      />
      <path
        fill="#cfcce0"
        d="M871.273 141.522l5.239-13.621 4.191 1.048 5.239-4.192 7.334-23.051 10.478 7.335 13.622 137.261-84.872 2.095 11.526-95.349 10.478-27.243 7.563-9.998 5.01 15.237 4.192 10.478z"
      />
      <path
        d="M895.372 200.199l3.206-94.782s6.224.48 8.32 3.624 36.672 9.43 36.672 9.43l-6.286 97.445s26.195 77.536 16.764 81.728-26.194 3.143-26.194 3.143zM844.554 188.15l11.115-63.88-24.736 16.728 6.286 46.103-5.239 31.434s-19.908 86.967-13.62 90.11 13.62 0 13.62 0l12.574-88.014z"
        fill="#575a89"
      />
      <path
        d="M838.267 138.903l-7.334 2.095-3.144 41.912-5.239 36.673-25.147 45.055s12.574-8.382 17.813 15.717l27.694-48.217z"
        fill="#575a89"
      />
      <path
        d="M919.995 257.303s-29.338 23.052-14.669 28.29 24.1-18.86 24.1-18.86z"
        fill="#a0616a"
      />
      <path
        fill="#cfcce0"
        d="M937.808 268.829l-9.431 11.526-12.573-22.004 5.239-9.43 16.765 19.908z"
      />
      <path
        d="M935.712 122.138l8.382-4.191s6.287 8.382 7.335 15.717 6.287 16.764 6.287 22.003 14.669 54.486 14.669 54.486l-33.53 68.106s-7.334-25.147-23.051-27.242l26.195-36.673-14.67-26.195z"
        fill="#575a89"
      />
      <path
        d="M888.487 55.268l4.94-1.977s-10.329-11.371-24.699-10.383l4.042-4.449s-9.88-3.955-18.86 6.427c-4.722 5.458-10.185 11.873-13.59 19.1h-5.29l2.208 4.86-7.727 4.862 7.931-.873a27.166 27.166 0 00-.215 8.064 10.433 10.433 0 003.82 6.825s6.126-12.68 6.126-14.658v4.944s4.94-4.45 4.94-7.416l2.694 3.46 1.348-5.437 16.615 5.438-2.695-4.45 10.329 1.484-4.042-5.439s11.676 6.427 12.125 11.866c.449 5.438 3.866 10.59 3.866 10.59s9.156-25.422-3.866-32.838z"
        fill="#2f2e41"
      />
      <ellipse cx={888.037} cy={76.035} rx={2.934} ry={3.667} fill="#a0616a" />
    </svg>
  );
};

SvgMobileWireframe.propTypes = {
  color: PropTypes.string
};
SvgMobileWireframe.defaultProps = {
  color: "primary"
};
export default SvgMobileWireframe;
