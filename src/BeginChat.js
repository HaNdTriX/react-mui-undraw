import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBeginChat = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1079.944 779.709"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M521.622 18.5c-105.487 0-191 56.816-191 126.902 0 31.294 17.059 59.936 45.322 82.062v92.104l60.546-60.546a271.673 271.673 0 0085.132 13.281c105.486 0 191-56.815 191-126.901S627.108 18.5 521.622 18.5z"
        fill="#f2f2f2"
      />
      <g opacity={0.3}>
        <path
          d="M842.557 650.15a20.813 20.813 0 108.338-39.132l-.985 10.68-3.732-9.8a20.734 20.734 0 00-12.221 10.109 20.408 20.408 0 00-1.974 5.406 20.809 20.809 0 0010.574 22.738z"
          fill="#57b894"
        />
        <path
          d="M849.973 776.682c-.495-9.27 8.313-16.18 16.63-20.306s17.9-7.977 21.736-16.432c5.513-12.151-3.918-25.33-11.12-36.562a125.3 125.3 0 01-12.92-26.63c-1.298-3.752-2.428-7.642-2.348-11.61.116-5.716 2.713-11.052 5.29-16.155q12.88-25.498 26.955-50.37"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M843.792 647.54a20.813 20.813 0 108.338-39.133l-.985 10.68-3.732-9.8a20.734 20.734 0 00-12.22 10.109 20.409 20.409 0 00-1.975 5.407 20.809 20.809 0 0010.574 22.737z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M873.552 591.959a20.788 20.788 0 0116.682-10.968l.27 10.324 4.644-10.145a20.81 20.81 0 11-21.596 10.789z"
          fill="#57b894"
        />
        <path
          d="M875.199 588.478a20.788 20.788 0 0116.682-10.968l.27 10.324 4.644-10.145a20.81 20.81 0 11-21.596 10.79z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M873.572 703.075a20.81 20.81 0 0023.426-34.076l-3.569 7.796-.27-10.445a.363.363 0 00-.05-.027 20.811 20.811 0 10-19.537 36.752z"
          fill="#57b894"
        />
        <path
          d="M875.074 699.526a20.81 20.81 0 0023.427-34.076l-3.57 7.796-.27-10.445a.364.364 0 00-.049-.027 20.811 20.811 0 10-19.538 36.752z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M847.275 734.26a20.801 20.801 0 106.255-15.575l7.225 15.118-11.507-9.11a20.616 20.616 0 00-1.973 9.566z"
          fill="#57b894"
        />
        <path
          d="M848.51 731.649a20.801 20.801 0 106.255-15.575l7.225 15.119-11.507-9.11a20.617 20.617 0 00-1.973 9.566z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.3}>
        <path
          d="M292.33 653.15a20.813 20.813 0 11-8.338-39.132l.986 10.68 3.731-9.8a20.734 20.734 0 0112.221 10.109 20.409 20.409 0 011.975 5.406 20.809 20.809 0 01-10.574 22.738z"
          fill="#ff6584"
        />
        <path
          d="M284.915 779.682c.494-9.27-8.314-16.18-16.631-20.306s-17.9-7.977-21.736-16.432c-5.512-12.151 3.919-25.33 11.121-36.562a125.3 125.3 0 0012.919-26.63c1.298-3.752 2.428-7.642 2.348-11.61-.116-5.716-2.713-11.052-5.29-16.155q-12.88-25.498-26.955-50.37"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M291.096 650.54a20.813 20.813 0 11-8.34-39.133l.987 10.68 3.73-9.8a20.734 20.734 0 0112.222 10.109 20.409 20.409 0 011.975 5.407 20.809 20.809 0 01-10.574 22.737z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M261.335 594.959a20.788 20.788 0 00-16.682-10.968l-.269 10.324-4.645-10.145a20.81 20.81 0 1021.596 10.789z"
          fill="#ff6584"
        />
        <path
          d="M259.688 591.478a20.788 20.788 0 00-16.681-10.968l-.27 10.324-4.645-10.145a20.81 20.81 0 1021.596 10.79z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M261.316 706.075a20.81 20.81 0 01-23.427-34.076l3.57 7.796.27-10.445a.363.363 0 01.049-.027 20.811 20.811 0 1119.538 36.752z"
          fill="#ff6584"
        />
        <path
          d="M259.813 702.526a20.81 20.81 0 01-23.426-34.076l3.569 7.796.27-10.445a.364.364 0 01.05-.027 20.811 20.811 0 1119.537 36.752z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M287.613 737.26a20.801 20.801 0 11-6.255-15.575l-7.225 15.118 11.506-9.11a20.616 20.616 0 011.974 9.566z"
          fill="#ff6584"
        />
        <path
          d="M286.378 734.649a20.801 20.801 0 11-6.256-15.575l-7.225 15.119 11.507-9.11a20.617 20.617 0 011.974 9.566z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.3}>
        <path
          d="M812.33 652.15a20.813 20.813 0 11-8.338-39.132l.986 10.68 3.731-9.8a20.734 20.734 0 0112.221 10.109 20.409 20.409 0 011.975 5.406 20.809 20.809 0 01-10.574 22.738z"
          fill="#ff6584"
        />
        <path
          d="M804.915 778.682c.494-9.27-8.314-16.18-16.631-20.306s-17.9-7.977-21.736-16.432c-5.512-12.151 3.919-25.33 11.121-36.562a125.3 125.3 0 0012.919-26.63c1.298-3.752 2.428-7.642 2.348-11.61-.116-5.716-2.713-11.052-5.29-16.155q-12.88-25.498-26.955-50.37"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M811.096 649.54a20.813 20.813 0 11-8.34-39.133l.987 10.68 3.73-9.8a20.734 20.734 0 0112.222 10.109 20.409 20.409 0 011.975 5.407 20.809 20.809 0 01-10.574 22.737z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M781.335 593.959a20.788 20.788 0 00-16.682-10.968l-.269 10.324-4.645-10.145a20.81 20.81 0 1021.596 10.789z"
          fill="#ff6584"
        />
        <path
          d="M779.688 590.478a20.788 20.788 0 00-16.681-10.968l-.27 10.324-4.645-10.145a20.81 20.81 0 1021.596 10.79z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M781.316 705.075a20.81 20.81 0 01-23.427-34.076l3.57 7.796.27-10.445a.363.363 0 01.049-.027 20.811 20.811 0 1119.538 36.752z"
          fill="#ff6584"
        />
        <path
          d="M779.813 701.526a20.81 20.81 0 01-23.426-34.076l3.569 7.796.27-10.445a.364.364 0 01.05-.027 20.811 20.811 0 1119.537 36.752z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M807.613 736.26a20.801 20.801 0 11-6.255-15.575l-7.225 15.118 11.506-9.11a20.616 20.616 0 011.974 9.566z"
          fill="#ff6584"
        />
        <path
          d="M806.378 733.649a20.801 20.801 0 11-6.256-15.575l-7.225 15.119 11.507-9.11a20.617 20.617 0 011.974 9.566z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.3}>
        <path
          d="M72.33 651.15a20.813 20.813 0 11-8.338-39.132l.986 10.68 3.731-9.8a20.734 20.734 0 0112.221 10.109 20.409 20.409 0 011.975 5.406 20.809 20.809 0 01-10.574 22.738z"
          fill="#ff6584"
        />
        <path
          d="M64.915 777.682c.494-9.27-8.314-16.18-16.631-20.306s-17.9-7.977-21.736-16.432c-5.512-12.151 3.919-25.33 11.121-36.562a125.3 125.3 0 0012.919-26.63c1.298-3.752 2.428-7.642 2.348-11.61-.116-5.716-2.713-11.052-5.29-16.155q-12.88-25.498-26.955-50.37"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M71.096 648.54a20.813 20.813 0 11-8.34-39.133l.987 10.68 3.73-9.8a20.734 20.734 0 0112.222 10.109 20.409 20.409 0 011.975 5.407 20.809 20.809 0 01-10.574 22.737z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M41.335 592.959a20.788 20.788 0 00-16.682-10.968l-.269 10.324-4.645-10.145a20.81 20.81 0 1021.596 10.789z"
          fill="#ff6584"
        />
        <path
          d="M39.688 589.478a20.788 20.788 0 00-16.682-10.968l-.269 10.324-4.645-10.145a20.81 20.81 0 1021.596 10.79z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M41.316 704.075a20.81 20.81 0 01-23.427-34.076l3.57 7.796.27-10.445a.363.363 0 01.049-.027 20.811 20.811 0 1119.538 36.752z"
          fill="#ff6584"
        />
        <path
          d="M39.813 700.526a20.81 20.81 0 01-23.426-34.076l3.569 7.796.27-10.445a.364.364 0 01.05-.027 20.811 20.811 0 1119.537 36.752z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M67.613 735.26a20.801 20.801 0 11-6.255-15.575l-7.225 15.118 11.506-9.11a20.616 20.616 0 011.974 9.566z"
          fill="#ff6584"
        />
        <path
          d="M66.378 732.649a20.801 20.801 0 11-6.256-15.575l-7.225 15.119 11.507-9.11a20.617 20.617 0 011.974 9.566z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.3}>
        <path
          d="M66.74 558.81a35.75 35.75 0 1014.324-67.22l-1.693 18.345-6.41-16.834a35.616 35.616 0 00-20.993 17.366 35.057 35.057 0 00-3.391 9.287A35.744 35.744 0 0066.74 558.81z"
          fill="#57b894"
        />
        <path
          d="M79.479 776.159c-.85-15.925 14.28-27.795 28.568-34.88s30.747-13.704 37.335-28.227c9.47-20.873-6.73-43.509-19.103-62.803a215.232 215.232 0 01-22.19-45.745c-2.23-6.444-4.172-13.125-4.034-19.943.2-9.818 4.66-18.984 9.088-27.75q22.124-43.798 46.3-86.52"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M68.862 554.326a35.75 35.75 0 1014.323-67.22l-1.693 18.345-6.41-16.834a35.616 35.616 0 00-20.992 17.365 35.057 35.057 0 00-3.391 9.287 35.744 35.744 0 0018.163 39.057z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M119.982 458.853a35.709 35.709 0 0128.655-18.84l.463 17.733 7.978-17.426a35.746 35.746 0 11-37.096 18.533z"
          fill="#57b894"
        />
        <path
          d="M122.811 452.874a35.709 35.709 0 0128.655-18.84l.463 17.733 7.978-17.426a35.746 35.746 0 11-37.096 18.533z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M120.016 649.72a35.746 35.746 0 0040.24-58.533l-6.13 13.392-.464-17.942a.624.624 0 00-.085-.046 35.748 35.748 0 10-33.56 63.13z"
          fill="#57b894"
        />
        <path
          d="M122.597 643.624a35.746 35.746 0 0040.24-58.533l-6.13 13.391-.464-17.941a.622.622 0 00-.085-.047 35.748 35.748 0 10-33.561 63.13z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M74.844 703.287a35.731 35.731 0 1010.745-26.752L98 702.505l-19.765-15.65a35.414 35.414 0 00-3.39 16.432z"
          fill="#57b894"
        />
        <path
          d="M76.966 698.803a35.731 35.731 0 1010.745-26.753l12.41 25.97-19.765-15.65a35.414 35.414 0 00-3.39 16.433z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
      </g>
      <g opacity={0.3}>
        <path
          d="M922.664 778.272c-1.1-20.615 18.486-35.981 36.981-45.153s39.803-17.74 48.332-36.54c12.258-27.02-8.713-56.323-24.729-81.3a278.624 278.624 0 01-28.726-59.218c-2.887-8.342-5.4-16.991-5.222-25.817.258-12.71 6.033-24.575 11.764-35.922q28.641-56.699 59.937-112.004"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M1045.08 340.281l-20.136 5.753 1.398-9.322a83.996 83.996 0 00-5.398-.178c-26.234 0-47.5 12.088-47.5 27s21.266 27 47.5 27 47.5-12.088 47.5-27c0-9.902-9.383-18.554-23.365-23.253z"
          fill="#ff6584"
        />
        <path
          d="M1045.08 337.281l-20.136 5.753 1.398-9.322a83.996 83.996 0 00-5.398-.178c-26.234 0-47.5 12.088-47.5 27s21.266 27 47.5 27 47.5-12.088 47.5-27c0-9.902-9.383-18.554-23.365-23.253z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M986.08 683.281l-20.136 5.753 1.398-9.322a83.996 83.996 0 00-5.398-.178c-26.234 0-47.5 12.088-47.5 27s21.266 27 47.5 27 47.5-12.088 47.5-27c0-9.902-9.383-18.554-23.365-23.253z"
          fill="#ff6584"
        />
        <path
          d="M986.08 680.281l-20.136 5.753 1.398-9.322a83.996 83.996 0 00-5.398-.178c-26.234 0-47.5 12.088-47.5 27s21.266 27 47.5 27 47.5-12.088 47.5-27c0-9.902-9.383-18.554-23.365-23.253z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M1056.08 611.281l-20.136 5.753 1.398-9.322a83.996 83.996 0 00-5.398-.178c-26.234 0-47.5 12.088-47.5 27s21.266 27 47.5 27 47.5-12.088 47.5-27c0-9.902-9.383-18.554-23.365-23.253z"
          fill="#ff6584"
        />
        <path
          d="M1056.08 608.281l-20.136 5.753 1.398-9.322a83.996 83.996 0 00-5.398-.178c-26.234 0-47.5 12.088-47.5 27s21.266 27 47.5 27 47.5-12.088 47.5-27c0-9.902-9.383-18.554-23.365-23.253z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M973.309 427.551l-20.56-3.977 5.463-7.68a84.001 84.001 0 00-4.733-2.602c-23.397-11.867-47.831-10.706-54.576 2.593s6.753 33.7 30.149 45.566 47.83 10.706 54.576-2.593c4.479-8.83.024-20.791-10.32-31.307z"
          fill="#ff6584"
        />
        <path
          d="M974.666 424.876l-20.56-3.978 5.463-7.68a84.001 84.001 0 00-4.733-2.602c-23.396-11.866-47.831-10.705-54.576 2.594s6.753 33.7 30.149 45.566 47.83 10.706 54.576-2.593c4.479-8.831.024-20.792-10.32-31.307z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
        <path
          d="M1018.309 532.551l-20.56-3.977 5.463-7.681a84.001 84.001 0 00-4.733-2.601c-23.397-11.867-47.831-10.706-54.576 2.593s6.753 33.7 30.149 45.566 47.83 10.706 54.576-2.593c4.479-8.83.024-20.791-10.32-31.307z"
          fill="#ff6584"
        />
        <path
          d="M1019.666 529.876l-20.56-3.978 5.463-7.68a84.001 84.001 0 00-4.733-2.602c-23.396-11.866-47.831-10.705-54.576 2.594s6.753 33.7 30.149 45.566 47.83 10.706 54.576-2.593c4.479-8.831.024-20.792-10.32-31.307z"
          fill="none"
          stroke="#3f3d56"
          strokeMiterlimit={10}
        />
      </g>
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M8.944 778.034h1052M535.122.5c-105.487 0-191 56.816-191 126.902 0 31.294 17.059 59.936 45.322 82.062v92.104l60.546-60.546a271.673 271.673 0 0085.132 13.281c105.486 0 191-56.815 191-126.901S640.608.5 535.122.5z"
      />
      <path
        d="M452.132 328.864s-3.842-51.74-2.033-61.203 3.508-36.4-6.438-27.546-6.412 28.945-6.412 28.945-9.438 54.682-.71 62.1 15.593-2.296 15.593-2.296z"
        fill="#a0616a"
      />
      <path
        d="M459.295 380.031s-29.604-26.403-28.004-48.806c0 0 17.602-13.601 21.603-6.4s33.079 35.293 28.14 44.85-21.74 10.356-21.74 10.356z"
        fill={color}
      />
      <path
        d="M564.107 332.826s17.603-48.806 18.403-58.407 6.4-36.005 13.601-24.803-1.6 29.603-1.6 29.603-5.6 55.207-16.002 60.007-14.402-6.4-14.402-6.4zM516.102 577.655h47.205l2.4 24.003-11.2 2.4s-26.404-8-41.606-5.6 3.2-20.803 3.2-20.803z"
        fill="#a0616a"
      />
      <path
        d="M547.305 574.455s22.403-15.202 26.404-2.4 18.402 59.207 13.601 64.007-10.401-4-10.401-4-9.601-20.003-16.802-20.803-11.201-7.2-11.201-7.2 20.802-16.003-1.6-29.604z"
        fill="#2f2e41"
      />
      <path
        d="M504.1 698.47s8.801 36.004 7.201 41.605 25.603 2.4 25.603 2.4l1.6-10.401s-16.002-25.603-16.002-36.805-18.402 3.2-18.402 3.2z"
        fill="#a0616a"
      />
      <path
        d="M536.904 724.873s21.603 16.002 10.401 24.003-52.806 28.803-52.806 28.803-15.202 2.4-4-11.2 14.401-16.003 15.201-23.204a35.122 35.122 0 014.934-13.508s11.068 22.31 26.27-4.894zM471.296 532.85s-8.8 83.21 4.8 109.613 29.604 62.408 28.804 64.008 23.203-2.4 23.203-9.601-26.403-79.21-26.403-79.21 11.201-93.611 20.002-100.012-50.406 15.202-50.406 15.202z"
        fill="#2f2e41"
      />
      <path
        d="M471.296 532.85s-8.8 83.21 4.8 109.613 29.604 62.408 28.804 64.008 23.203-2.4 23.203-9.601-26.403-79.21-26.403-79.21 11.201-93.611 20.002-100.012-50.406 15.202-50.406 15.202z"
        opacity={0.1}
      />
      <path
        d="M489.38 298.021c-5.72 1.036-11.385 4.178-14.23 9.544-2.652 5.006-2.821 11.696-7.042 15.29-2.52 2.147-5.94 2.643-8.753 4.328a13.482 13.482 0 00-6.202 12.008c.226 4.414 2.554 8.526 2.504 12.947-.064 5.747-4.038 10.492-7.775 14.651l12.395 2.3a12.34 12.34 0 005.734.152c2.141-.633 3.88-2.396 6.045-2.934 3.103-.77 6.174 1.117 8.943 2.792 7.883 4.768 16.335 8.366 24.756 11.95 2.478 1.053 5.287 2.109 7.731.972 1.975-.919 3.203-3.065 5.06-4.227 3.325-2.08 7.501-.514 11.238.513a37.152 37.152 0 0025.384-2.162c-1.713-2-3.956-3.398-5.801-5.26s-3.338-4.5-2.85-7.151c.496-2.704 2.822-4.51 4.406-6.692a15.724 15.724 0 002.393-11.924 21.754 21.754 0 00-5.708-10.802 57.051 57.051 0 01-4.668-4.923c-2.917-3.938-3.638-9.15-4.571-14.06s-2.406-10.135-6.193-13.124c-6.032-4.763-15.829-3.14-22.881-3.612-6.724-.45-13.207-.576-19.915-.576zM449.694 476.043l15.201 37.604s-69.608 76.01-30.403 86.411 52.806-8.001 77.61 6.4c0 0 12-18.402 10.4-29.603 0 0-34.404-6.4-52.806-5.6 0 0 49.606-43.206 54.407-44.806s20.802-27.203-4-48.006S501.7 446.44 501.7 446.44z"
        fill="#2f2e41"
      />
      <path
        d="M485.698 345.627s2.4 24.803-8.001 28.004 40.805 2.4 40.805 2.4-12.002-7.201-6.4-22.403-26.404-8-26.404-8z"
        fill="#a0616a"
      />
      <path
        d="M485.698 345.627s2.4 24.803-8.001 28.004 40.805 2.4 40.805 2.4-12.002-7.201-6.4-22.403-26.404-8-26.404-8z"
        opacity={0.1}
      />
      <path
        d="M540.105 388.832s-4.801-24.803-14.402-23.202-28.804 3.2-31.204 4.8-15.202 4.88-15.202 4.88 4.8-5.68 0-6.48-20.002 3.2-21.602 6.4-8.001 9.602-8.001 20.803-4.801 30.404-3.2 38.405-.801 26.403-5.602 36.804-.8 20.803 7.201 10.402 4 0 10.402.8 35.204-28.804 43.205-21.603 16.002 12.002 17.602 8.001-6.4-11.201-6.4-14.402-12.802 10.402.8-17.602.8-36.004 26.403-48.006z"
        fill={color}
      />
      <path
        d="M533.704 387.232l6.4 1.6s23.203-16.802 29.604-28.803 11.201-21.603 11.201-21.603-10.4-12.801-16.802-8-35.204 37.604-35.204 37.604z"
        fill={color}
      />
      <circle cx={504.1} cy={337.626} r={24.803} fill="#a0616a" />
      <path
        d="M482.159 330.441a21.784 21.784 0 0115.149-4.982c9.507.585 17.877 7.36 27.4 7.572a9.82 9.82 0 01.819-6.071c.738-1.513 1.904-2.98 1.747-4.656a5.68 5.68 0 00-2.054-3.365c-5.505-5.22-13.116-7.91-20.695-8.24-5.08-.223-14.779-.103-18.72 3.745-3.371 3.291-2.98 11.73-3.646 15.997z"
        fill="#2f2e41"
      />
      <circle cx={535.122} cy={151.034} r={52} fill={color} />
      <ellipse cx={522.416} cy={131.441} rx={4.987} ry={6.531} fill="#444053" />
      <ellipse cx={548.184} cy={131.441} rx={4.987} ry={6.531} fill="#444053" />
      <path
        d="M566.292 151.984c0 9.378-15.662 25.174-31.467 25.174s-30.874-16.152-30.874-25.53 14.742-.802 30.547-.802 31.794-8.22 31.794 1.158z"
        fill="#3f3d56"
      />
      <path
        d="M508.932 153.587s28.41 6.323 52.278.178c0 0 2.92 0 .925 3.377a5.379 5.379 0 01-2.189 2.047c-4.6 2.35-21.63 9.298-48.86.437a5.356 5.356 0 01-3.535-3.621c-.32-1.16-.182-2.258 1.38-2.418z"
        fill="#f6f8fb"
      />
    </svg>
  );
};

SvgBeginChat.propTypes = {
  color: PropTypes.string
};
SvgBeginChat.defaultProps = {
  color: "primary"
};
export default SvgBeginChat;
