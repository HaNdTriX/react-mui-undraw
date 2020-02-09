import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgChef = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 890.069 692.728"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Chef_svg__a"
          x1={507.947}
          y1={790.481}
          x2={507.947}
          y2={154.92}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <ellipse
        cx={324}
        cy={676.395}
        rx={324}
        ry={11.547}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M238.822 20.964C259.463 2.57 291.863-1.179 321.355.287 413.99 4.889 497.61 49.61 569.94 100.197c26.185 18.312 51.965 38.047 68.962 63.266 34.6 51.336 24.337 122.452-23.775 164.744-16.37 14.389-36.213 25.42-56.585 35.198-36.222 17.386-75.305 31.343-116.416 35.315-29.317 2.833-58.995.53-88.14-3.422-81.43-11.044-161.36-35.464-228.352-77.244-29.383-18.324-57.078-41.106-69.189-70.75s-4.36-67.21 25.643-84.756c12.409-7.257 27.245-10.535 41.77-13.613 21.38-4.53 43.104-8.995 62.398-18.205 19.929-9.512 43.526-27.907 39.58-48.962-4.233-22.59-7.63-42.431 12.987-60.804z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={803.416}
        cy={685.062}
        rx={86.653}
        ry={7.667}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M606.904 364.53c-1.41-2.731-8.869-19.702-8.869-19.702l-12.497-32.382s-8.868-13.655-8.868-16.191-16.126-12.68-16.126-12.68-13.101-3.901-14.11-4.292-16.528-5.524-16.528-5.524-6.111-8.037-6.982-5.938v.005c-.032-.053-.065-.099-.096-.153a20.75 20.75 0 01-2.33-7.514c-.034-.234-.062-.48-.092-.724a29.91 29.91 0 0013.129-24.628 29.51 29.51 0 00-.258-3.828 2.684 2.684 0 01.346-.183c.251-.109.188-.197.003-.29.063-.033.126-.068.19-.095.334-.145.11-.255-.212-.385l.02-.01c.454-.198-.121-.328-.583-.537-.025-.135-.048-.27-.075-.405a2.723 2.723 0 00.185-.804c.041.02.079.042.122.061a3.414 3.414 0 00-.008-1.526 2.684 2.684 0 01-.105.3 2.547 2.547 0 00-1.173-2.31l-.073-.061.855-8.752c12.605-.595 14.816-22.04 11.942-23.231s0-3.773 0-8.935-9.51-10.921-9.51-10.921-3.98 1.985-10.171-7.943-28.969-11.516-30.517-8.935-11.72 5.957-24.988 9.73-10.835 19.459-8.624 22.834a19.266 19.266 0 013.096 9.332c0 1.986 4.201 10.325 4.201 10.325-1.325 2.89 2.048 18.72 3.046 23.22-.015.139-.032.276-.046.415-.008.014-.02.025-.028.04a2.12 2.12 0 00-.129.225 2.59 2.59 0 00-.203 1.493 3.117 3.117 0 00.223 1.63 29.758 29.758 0 0010.553 22.203l.046.822c.185 3.675.29 8.021.097 12.18-.01.213-.026.421-.038.633a4.76 4.76 0 00-3.373 2.66c-1.25 2.403-8.506 6.11-8.506 6.11s-12.699.585-13.908 2.926-19.552 10.143-19.552 10.143-9.675 5.658-8.264 12.095c.737 3.364-1.332 8.59-3.477 12.815a60.857 60.857 0 00-13.914-3.47L421 324.21c-.215.336-.342.526-.342.526l-5.845 20.678s-2.016 7.217-4.031 8.973 1.814 17.752 1.814 17.752-2.218 11.314-4.032 14.24 2.822 10.144 2.822 10.144l9.272 21.067 24.591 6.243s1.639.346 4.287.914q-.125.755-.256 1.505c-1.185 6.71-2.74 12.882-4.636 14.552-4.636 4.096-4.434 22.433-4.434 22.433l.202 25.945s1.612 31.992.806 33.162c-.51.739.512 1.944 3.207 3.026-.077.482-.153.97-.224 1.468-.758 5.306-1.096 11.361.645 14.038a10.665 10.665 0 011.21 4.682c0 2.536 3.83 7.802 3.83 7.802s-3.024 21.653 2.015 29.066 9.272 20.873 6.853 23.994c0 0-4.233 9.168-2.217 13.265s0 6.437-2.62 7.413-2.395 8.973-2.395 8.973l4.813 38.039s2.62 7.803.403 10.534-2.217 16.386 1.21 21.068-4.838 13.264-4.838 13.264-5.039 7.218 3.024 9.56c0 0 1.612.39-1.411 3.51s-3.629 7.023-1.613 8.388a9.225 9.225 0 001.308.65c-.075.462-.156.941-.252 1.45-.774 4.072-2.233 9.378-4.886 11.946a85.16 85.16 0 00-13.198 17.587c-2.766 5.244-3.975 10.152-.911 12.454 7.256 5.462 16.528 7.217 21.97 5.072s13.102-8.779 13.102-8.779l1.814-7.607s-1.21-4.682 4.838-6.438 11.69-7.998 11.69-7.998v-10.112a42.853 42.853 0 004.233-2.762s2.822-9.95 0-13.265-3.83-4.487-.201-6.633 4.12-6.827 1.46-10.924c-2.67-4.096-6.902-10.144-3.274-18.727s4.958-34.918 4.958-34.918-1.693-17.946 0-22.043-1.935-12.29-1.935-12.29 1.21-10.143 3.427-14.825 4.031-29.456 4.031-29.456 4.031-10.533 4.031-17.361-6.248-23.214 3.024-27.505c0 0 4.031 3.511 2.419 17.556 0 0 4.636 16.386 4.636 21.458s3.426 23.409 3.426 23.409.403 5.852 1.814 7.998 0 7.998 0 7.998 5.241 4.877 3.83 7.998.242 10.16.242 10.16l-1.25 43.68s-3.628 18.727 4.838 30.04c0 0-3.024 16.582-4.838 17.752s6.652 11.314 6.652 11.314-2.347 6.572 2.419 6.894v10.858a23.198 23.198 0 006.651 7.413c4.435 3.12 2.62 13.85 2.62 13.85s5.645 13.655 20.56 10.729 16.932-4.292 16.126-9.169c-.29-1.779-.936-4.954-1.863-8.56-1.604-6.265-4.063-13.826-7.006-17.556-4.636-5.875-8.466-18.165-8.466-18.165s-1.814-4.096 0-5.462 1.008-3.901 1.008-3.901 1.766-5.072.177-8.193 3.048-9.559 3.048-9.559l-1.411-30.041 1.41-43.696s-6.248-7.218-3.627-11.51-3.024-10.338-3.024-10.338-.604-.195 1.008-5.072a12.156 12.156 0 00-.403-8.778s-3.427-12.095 2.62-21.263c0 0 2.62-12.094 3.427-18.337.556-4.338 4.04-20.545 6.111-30.025l.337-1.54c2.985.164 5.243.354 5.243.354s-4.636-32.187 0-38.82-3.629-57.35-3.629-57.35-1.975-8.865-3.192-17.908c-.07-.516-.133-1.03-.197-1.545a97.708 97.708 0 0111.25-.25c9.676.585 19.15-3.121 19.35-6.828s5.443-18.336 6.25-21.653 1.41-14.63 0-17.361z"
        transform="translate(-154.965 -103.636)"
        fill="url(#Chef_svg__a)"
      />
      <path
        d="M334.326 637.21v18.063s-5.439 6.215-11.265 7.963-4.662 6.409-4.662 6.409l-1.748 7.575s-7.38 6.603-12.624 8.74-14.178.388-21.17-5.05c-2.952-2.292-1.787-7.179.878-12.4A84.568 84.568 0 01296.452 651c2.556-2.556 3.963-7.839 4.708-11.894.552-3.038.73-5.392.73-5.392z"
        fill="#4c495a"
      />
      <path
        d="M334.326 650.689v4.584s-5.439 6.215-11.265 7.963-4.662 6.409-4.662 6.409l-1.748 7.575s-7.38 6.603-12.624 8.74-14.178.388-21.17-5.05c-2.952-2.292-1.787-7.179.878-12.4-.125 5.486 1.5 11.646 9.416 11.429a40.104 40.104 0 0023.5-8.546s-.194-12.819 8.74-15.732a27.213 27.213 0 008.935-4.972z"
        opacity={0.1}
      />
      <path
        d="M405.41 683.435c-14.372 2.913-19.81-10.682-19.81-10.682s1.748-10.683-2.525-13.79a22.92 22.92 0 01-6.41-7.38v-17.869l17.48-12.43 9.463 8.375.637.559s3.69 12.236 8.158 18.086c2.835 3.713 5.205 11.241 6.75 17.48.894 3.59 1.516 6.751 1.795 8.522.777 4.856-1.165 6.215-15.537 9.129z"
        fill="#4c495a"
      />
      <path
        d="M405.41 683.435c-14.372 2.913-19.81-10.682-19.81-10.682s1.748-10.683-2.525-13.79a22.92 22.92 0 01-6.41-7.38v-6.923c2.774 2.93 8.003 8.6 9.13 11.001 1.553 3.302 1.747 15.344 8.933 17.48s21.17 4.079 22.336-1.36a30.3 30.3 0 012.09-5.997c.893 3.59 1.515 6.751 1.794 8.522.777 4.856-1.165 6.215-15.537 9.129zM301.89 633.714l32.436 3.496v9.548c-3.66 2.167-8.903 4.467-11.848 2.105-4.35-3.48-17.286-7.9-21.318-9.757.552-3.038.73-5.392.73-5.392zM404.245 631.772c-4.467-1.554-12.43 5.244-22.918 9.517a10.917 10.917 0 01-4.661 1.04v-8.615l17.48-12.43 9.462 8.375a11.814 11.814 0 00.637 2.113z"
        opacity={0.1}
      />
      <path
        d="M415.704 417.934s-.613 2.859-1.491 7.007c-1.997 9.44-5.353 25.576-5.889 29.895-.777 6.215-3.302 18.257-3.302 18.257-5.826 9.128-2.525 21.17-2.525 21.17a12.468 12.468 0 01.389 8.74c-1.554 4.856-.971 5.05-.971 5.05s5.438 6.02 2.913 10.294 3.496 11.459 3.496 11.459l-1.36 43.505 1.36 29.91s-4.467 6.41-2.937 9.517-.17 8.157-.17 8.157.776 2.525-.972 3.885 0 5.438 0 5.438c-4.467-1.554-12.43 5.244-22.918 9.517s-6.992-5.827-6.992-5.827-8.157-10.1-6.41-11.265 4.662-17.674 4.662-17.674c-8.157-11.265-4.661-29.91-4.661-29.91l1.204-43.49s-1.593-7.007-.233-10.115-3.69-7.963-3.69-7.963 1.36-5.827 0-7.963-1.748-7.963-1.748-7.963-3.302-18.257-3.302-23.307-4.467-21.364-4.467-21.364c1.554-13.984-2.33-17.48-2.33-17.48-8.935 4.273-2.914 20.587-2.914 27.385s-3.884 17.286-3.884 17.286-1.748 24.666-3.885 29.327-3.302 14.761-3.302 14.761 3.496 8.157 1.865 12.236 0 21.947 0 21.947-1.282 26.22-4.778 34.766.583 14.566 3.154 18.645c2.564 4.079 2.09 8.74-1.406 10.876s-2.525 3.302.194 6.604 0 13.207 0 13.207-11.07 8.74-15.926 4.856-20.393-8.935-22.335-10.294-1.36-5.244 1.553-8.352 1.36-3.496 1.36-3.496c-7.769-2.33-2.913-9.517-2.913-9.517s7.963-8.545 4.66-13.207-3.3-18.256-1.164-20.975-.389-10.488-.389-10.488l-4.638-37.874s-.217-7.963 2.307-8.934 4.468-3.302 2.525-7.38 2.137-13.207 2.137-13.207c2.33-3.108-1.748-16.51-6.604-23.89s-1.942-28.939-1.942-28.939-3.69-5.244-3.69-7.768a10.883 10.883 0 00-1.165-4.662c-1.678-2.664-1.352-8.693-.622-13.976a106.327 106.327 0 011.787-9.525z"
        fill="#5f5d7e"
      />
      <path
        d="M377.637 197.881l-38.262 8.934s-18.84-15.926-14.178-24.472c1.6-2.936 2.308-7.947 2.548-13.246.187-4.14.086-8.468-.093-12.127-.272-5.29-.707-9.198-.707-9.198s39.233-22.141 37.873 0a56.554 56.554 0 00.257 11.063 21.15 21.15 0 002.245 7.481c2.097 3.737 4.685 3.791 4.685 3.791z"
        fill="#fdc2cc"
      />
      <path
        d="M365.075 158.835a30.092 30.092 0 01-37.423-1.865c-.272-5.29-.707-9.198-.707-9.198s39.233-22.141 37.873 0a56.554 56.554 0 00.257 11.063z"
        opacity={0.1}
      />
      <circle cx={347.533} cy={133.594} r={30.104} fill="#fdc2cc" />
      <path
        d="M377.637 197.881l-38.262 8.934s-18.84-15.926-14.178-24.472c1.6-2.936 2.308-7.947 2.548-13.246a19.52 19.52 0 006.969 11.693c8.74 5.826 7.38 13.012 7.38 13.012l15.732-.582c-.97-6.41 4.856-9.906 6.798-10.682s.971-4.273.971-4.273l1.725-11.949c2.097 3.737 4.685 3.791 4.685 3.791zM415.704 417.934s-.613 2.859-1.491 7.007c-4.226-.225-9.812-.388-12.298.18-4.273.97-21.365 1.359-21.365 1.359l-42.34 1.5v-1.306a124.839 124.839 0 00-14.567.971c-7.186.971-18.45-.388-25.637-1.554a27.605 27.605 0 01-6.448-1.74 106.327 106.327 0 011.787-9.525z"
        opacity={0.1}
      />
      <path
        d="M412.403 294.603c-.614 3.628-.163 9.641.613 15.577 1.174 9.004 3.077 17.83 3.077 17.83s7.963 50.497 3.496 57.1 0 38.65 0 38.65-13.401-1.165-17.674-.194-21.365 1.36-21.365 1.36l-42.34 1.5v-1.306a124.839 124.839 0 00-14.567.971c-7.186.971-18.45-.388-25.637-1.553s-10.1-3.496-9.322-4.662-.777-33.017-.777-33.017l-.195-25.832s-.194-18.257 4.273-22.335c1.826-1.663 3.325-7.808 4.467-14.49 1.64-9.672 2.525-20.47 2.525-20.47l-29.521-79.048-.583-1.554s8.546-13.207 7.186-19.616 7.963-12.042 7.963-12.042 17.674-7.77 18.84-10.1 13.401-2.913 13.401-2.913 6.992-3.69 8.196-6.083a4.594 4.594 0 013.255-2.65 19.56 19.56 0 007 11.84c8.74 5.827 7.38 13.013 7.38 13.013l15.732-.582c-.97-6.41 4.856-9.906 6.798-10.682s.971-4.273.971-4.273l1.818-12.578c.84-2.09 6.728 5.912 6.728 5.912s14.955 5.112 15.926 5.5 13.596 4.273 13.596 4.273 15.537 10.1 15.537 12.625 8.546 16.12 8.546 16.12l-.287 1.538c-1.974 10.706-13.635 73.82-15.056 82.171z"
        fill={color}
      />
      <path
        d="M350.252 263.14s-33.6-8.935-36.902-11.071-22.724 10.294.97 27.19c0 0 28.975 6.022 36.726 0s-.794-16.12-.794-16.12z"
        fill="#fdc2cc"
      />
      <path
        d="M422.89 209.923l4.08.194 12.041 32.24s7.186 16.898 8.546 19.617.777 13.984 0 17.286-5.827 17.868-6.021 21.558-9.323 7.38-18.645 6.798-31.076 2.33-31.076 2.33-23.231-2.427-37.485 4.856c0 0-9.128-18.84-8.157-53.993 0 0 16.12-.971 20.2.582s23.888 6.021 26.413 3.69 13.984 4.274 13.984 4.274a9.843 9.843 0 000-8.158c-1.942-4.661-5.244-19.228-.97-23.889s17.09-27.385 17.09-27.385z"
        opacity={0.1}
      />
      <path
        d="M413.016 310.18c-9.64.653-20.424 2.098-20.424 2.098s-23.229-2.432-37.485 4.855c0 0-9.128-18.84-8.157-53.994 0 0 16.12-.97 20.199.583s23.89 6.021 26.414 3.69 13.984 4.273 13.984 4.273a9.843 9.843 0 000-8.157c-1.942-4.661-5.244-19.228-.971-23.89s17.091-27.385 17.091-27.385l3.792.18c-1.974 10.705-13.635 73.819-15.056 82.17-.614 3.628-.163 9.641.613 15.577z"
        opacity={0.1}
      />
      <path
        d="M423.667 210.7l4.08.194 12.04 32.24s7.187 16.898 8.547 19.617.776 13.984 0 17.286-5.827 17.868-6.021 21.558-9.323 7.38-18.646 6.798-31.075 2.33-31.075 2.33-23.231-2.427-37.485 4.856c0 0-9.128-18.84-8.157-53.993 0 0 16.12-.971 20.199.582s23.89 6.021 26.414 3.69 13.984 4.273 13.984 4.273a9.843 9.843 0 000-8.157c-1.942-4.661-5.244-19.228-.971-23.89s17.091-27.384 17.091-27.384z"
        fill={color}
      />
      <path
        fill="#dfe6f5"
        d="M387.48 285.04l-4.846-3 27.006-43.617 4.846 3.001z"
      />
      <ellipse
        cx={573.51}
        cy={333.092}
        rx={16.416}
        ry={11.514}
        transform="rotate(-58.235 402.996 420.383)"
        fill="#dfe6f5"
      />
      <ellipse
        cx={573.51}
        cy={333.092}
        rx={11.783}
        ry={8.265}
        transform="rotate(-58.235 402.996 420.383)"
        opacity={0.1}
      />
      <path
        fill="#53526b"
        d="M373.677 307.333l-4.846-3 16.804-27.14 4.846 3.001z"
      />
      <path
        d="M340.346 306.257l11.848-3.302s58.46 1.554 38.844-22.53c0 0-10.293-9.905-31.852-1.942s-27.58 8.934-27.58 8.934z"
        fill="#fdc2cc"
      />
      <circle cx={331.606} cy={202.348} r={2.331} opacity={0.1} />
      <circle cx={371.616} cy={200.989} r={2.331} opacity={0.1} />
      <circle cx={331.606} cy={201.571} r={2.331} fill="#fff" />
      <circle cx={334.908} cy={234.589} r={2.331} opacity={0.1} />
      <circle cx={372.781} cy={232.258} r={2.331} opacity={0.1} />
      <circle cx={334.908} cy={233.812} r={2.331} fill="#fff" />
      <circle cx={371.81} cy={344.726} r={2.331} opacity={0.1} />
      <circle cx={341.137} cy={344.726} r={2.331} opacity={0.1} />
      <circle cx={371.81} cy={343.949} r={2.331} fill="#fff" />
      <circle cx={343.467} cy={383.751} r={2.331} opacity={0.1} />
      <circle cx={372.781} cy={381.42} r={2.331} opacity={0.1} />
      <circle cx={343.467} cy={382.974} r={2.331} fill="#fff" />
      <circle cx={341.137} cy={343.949} r={2.331} fill="#fff" />
      <circle cx={372.781} cy={380.643} r={2.331} fill="#fff" />
      <circle cx={371.616} cy={200.212} r={2.331} fill="#fff" />
      <circle cx={372.781} cy={231.481} r={2.331} fill="#fff" />
      <path
        d="M376.277 313.249s.389 53.216 1.554 62.733c0 0 .423-60.225-1.554-62.733zM386.183 337.915c-.801 0 15.926 62.345 16.703 66.812s-12.042-66.812-16.703-66.812zM399.39 327.815c0 .583 9.322 33.795 13.984 35.543s-13.984-35.543-13.984-35.543zM436.098 263.14s-19.811.882-20.394 3.743 20.394-3.744 20.394-3.744zM401.138 516.404s-14.178 6.021-12.042 6.41 12.042-6.41 12.042-6.41zM371.81 507.47c-.552-1.242 9.517 5.05 9.517 5.827s-8.74-4.079-9.517-5.827zM385.017 527.863s11.071-.558 11.848 3.703-11.848-3.703-11.848-3.703zM305.387 527.84s12.041-2.356 13.012 0-13.012 0-13.012 0zM309.854 601.085s.79 9.905-2.13 12.236 2.13-12.236 2.13-12.236zM308.383 622.06c3.801.39 23.806-3.107 23.612 0s-23.612 0-23.612 0zM400.167 610.019s-6.823-1.049-5.16 3.554zM273.34 222.353h-3.69l-5.633 20.587s-1.942 7.187-3.884 8.935 1.748 17.674 1.748 17.674-2.136 11.265-3.884 14.178 2.719 10.1 2.719 10.1l8.934 20.975 23.695 6.215s41.757 9.129 43.7 10.488 3.69-.582 5.05-13.207 5.05-37.096 7.963-38.261c0 0-23.307 2.525-25.25 2.136s-11.264.194-11.264.194-12.236-.776-14.178.389 2.525-5.641 2.525-5.641a18.731 18.731 0 000-9.508c-1.36-5.244-2.137-64.676-28.55-45.254z"
        opacity={0.1}
      />
      <path
        d="M349.28 282.367c-2.913 1.166-6.603 25.638-7.962 38.262s-3.108 14.567-5.05 13.207c-1.577-1.103-29.413-7.334-39.816-9.633 1.64-9.673 2.525-20.471 2.525-20.471l-29.521-79.048h3.107c26.414-19.423 27.191 40.01 28.55 45.253a18.736 18.736 0 010 9.51s-4.466 6.805-2.524 5.64 14.178-.389 14.178-.389 9.323-.583 11.265-.194 25.249-2.137 25.249-2.137z"
        opacity={0.1}
      />
      <path
        d="M272.563 223.13h-3.69l-5.632 20.587s-1.943 7.187-3.885 8.935 1.748 17.674 1.748 17.674-2.136 11.265-3.884 14.178 2.719 10.1 2.719 10.1l8.934 20.975 23.695 6.215s41.758 9.129 43.7 10.488 3.69-.582 5.05-13.207 5.05-37.096 7.963-38.261c0 0-23.307 2.525-25.25 2.136s-11.264.194-11.264.194-12.236-.776-14.178.389 2.525-5.641 2.525-5.641a18.731 18.731 0 000-9.508c-1.36-5.245-2.137-64.676-28.55-45.254z"
        fill={color}
      />
      <path
        d="M285.188 293.438s-10.683 20.199-12.625 17.868 12.625-17.868 12.625-17.868zM274.117 281.936s-9.905 8.2-5.244 10.337 5.244-10.337 5.244-10.337zM283.44 271.88c.776.194 14.372 2.894 14.566 4.069s-14.566-4.07-14.566-4.07zM377.722 129.6a2.002 2.002 0 00-1.328 2.083c-.792.699-1.903-.125-2.548-1.018-.653-.886-1.39-1.981-2.377-1.857a8.534 8.534 0 00-1.36.567c-1.554.497-2.867-1.328-3.737-2.929q-2.272-4.206-4.545-8.405c-3.037 1.763-6.626-.086-9.64-1.912s-6.604-3.682-9.65-1.919c-4.467 2.58-4.63 11.18-9.26 13.3-1.492.684-3.224.537-4.607 1.477-1.368.932-2.106 2.727-2.72 4.444a4.707 4.707 0 01-1.522 2.509 3.345 3.345 0 01-1.57.38 6.732 6.732 0 01-4.039-.566 3.414 3.414 0 01-1.398-4.04 2.114 2.114 0 01.124-.226 14.137 14.137 0 001.336-1.918c.466-1.236-.202-2.673-.054-4.01.24-2.283 2.657-3.487 3.068-5.733.171-.878-.007-1.818.156-2.703a2.458 2.458 0 01.093-.342l-1.422.979c1.593-1.857 2.393-4.436 3.558-6.69a20.6 20.6 0 0112.57-10.23c5.066-1.477 10.418-1.073 15.53.178a51.14 51.14 0 0113.821 5.694 13.715 13.715 0 014.024 3.271 25.192 25.192 0 012.386 4.405c1.507 3.123 5.624 6.013 2.346 6.448-2.727.365-.241 2.277 1.188 3.566a3.708 3.708 0 01.824.901 3.226 3.226 0 01-.171 3.116c-.552.699 1.686.839.924 1.18z"
        opacity={0.1}
      />
      <path
        d="M377.722 128.824a2.002 2.002 0 00-1.328 2.082c-.792.699-1.903-.125-2.548-1.018-.653-.886-1.39-1.981-2.377-1.857a8.533 8.533 0 00-1.36.567c-1.554.498-2.867-1.328-3.737-2.928q-2.272-4.207-4.545-8.406c-3.037 1.763-6.626-.086-9.64-1.912s-6.604-3.682-9.65-1.918c-4.467 2.579-4.63 11.179-9.26 13.3-1.492.684-3.224.536-4.607 1.476-1.368.932-2.106 2.727-2.72 4.444a4.707 4.707 0 01-1.522 2.509 3.345 3.345 0 01-1.57.38 6.733 6.733 0 01-4.039-.566 3.414 3.414 0 01-1.398-4.04 2.114 2.114 0 01.124-.225 14.137 14.137 0 001.336-1.92c.466-1.235-.202-2.672-.054-4.008.24-2.284 2.657-3.488 3.068-5.734.171-.877-.007-1.817.156-2.703a2.458 2.458 0 01.093-.342l-1.422.979c1.593-1.857 2.393-4.436 3.558-6.69a20.6 20.6 0 0112.57-10.23c5.066-1.477 10.418-1.073 15.53.178a51.14 51.14 0 0113.821 5.695 13.715 13.715 0 014.024 3.27 25.192 25.192 0 012.386 4.405c1.507 3.123 5.624 6.013 2.346 6.448-2.727.366-.241 2.277 1.188 3.566a3.708 3.708 0 01.824.901 3.226 3.226 0 01-.171 3.116c-.552.699 1.686.839.924 1.18z"
        fill="#865a61"
      />
      <path
        d="M376.145 123.626l-.31 3.271s-32.599-41.315-57.956 5.337l-.334-1.522a14.137 14.137 0 001.336-1.92c.466-1.235-.202-2.672-.054-4.008.24-2.284 2.657-3.488 3.068-5.734.171-.877-.007-1.817.156-2.703a2.458 2.458 0 01.093-.342l-1.422.979c1.593-1.857 2.393-4.436 3.559-6.689a20.6 20.6 0 0112.57-10.232c5.065-1.476 10.418-1.072 15.53.179a51.14 51.14 0 0113.82 5.695 13.715 13.715 0 014.025 3.27 25.192 25.192 0 012.385 4.405c1.507 3.123 5.624 6.013 2.346 6.448-2.727.366-.241 2.277 1.188 3.566z"
        opacity={0.1}
      />
      <g opacity={0.1}>
        <path d="M376.95 128.4a1.574 1.574 0 00-.37 1.345c-.793.7-1.904-.124-2.549-1.018-.652-.885-1.39-1.98-2.377-1.856a8.533 8.533 0 00-1.36.567c-1.553.497-2.866-1.329-3.736-2.929q-2.273-4.207-4.545-8.406c-3.038 1.764-6.627-.085-9.641-1.911s-6.604-3.682-9.649-1.919c-4.467 2.58-4.63 11.18-9.26 13.3-1.492.684-3.225.536-4.607 1.476-1.368.933-2.106 2.727-2.72 4.444a4.707 4.707 0 01-1.522 2.51 3.345 3.345 0 01-1.57.38 6.733 6.733 0 01-4.04-.567 3.634 3.634 0 01-1.513-2.136 3.493 3.493 0 001.514 3.69 6.732 6.732 0 004.04.567 3.345 3.345 0 001.569-.38 4.707 4.707 0 001.522-2.51c.614-1.717 1.352-3.512 2.72-4.444 1.382-.94 3.115-.792 4.607-1.476 4.63-2.12 4.793-10.72 9.26-13.3 3.045-1.764 6.635.093 9.649 1.919s6.603 3.674 9.641 1.91q2.272 4.196 4.545 8.407c.87 1.6 2.183 3.426 3.737 2.929a8.533 8.533 0 011.36-.568c.986-.124 1.724.972 2.376 1.857.645.894 1.756 1.717 2.549 1.018a2.002 2.002 0 011.328-2.082c.606-.272-.682-.417-.959-.816zM374.409 120.639a2.813 2.813 0 01.733-.185c1.446-.192 1.452-.862.88-1.818a2.272 2.272 0 01-.88.264c-1.56.209-1.411.924-.733 1.739zM377.385 127.146a3.51 3.51 0 00-.008-1.519 2.24 2.24 0 01-.393.855c-.244.309.056.508.401.664zM319.057 124.908c-.016.09-.035.177-.045.27a8.912 8.912 0 00.152 2.087 7.35 7.35 0 00-.107-2.357zM322.211 115.43a11.268 11.268 0 01-1.303 1.947l1.254-.863a8.688 8.688 0 01.05-1.084z" />
      </g>
      <path
        d="M317.877 131.457s-4.687-20.955-3.196-24.316c0 0-4.048-8.303-4.048-10.28a19.631 19.631 0 00-2.983-9.292c-2.131-3.36-4.475-18.978 8.31-22.735s22.586-7.117 24.077-9.687 23.439-.988 29.405 8.897 9.801 7.907 9.801 7.907 9.163 5.734 9.163 10.874-2.77 7.71 0 8.896.639 22.537-11.506 23.13l-1.066 11.269s-32.6-41.318-57.957 5.337z"
        fill={color}
      />
      <path
        d="M319.273 68.918s-2.816 16.509 2.331 22.044zM332.48 65.13s-7.186 17.675-5.438 21.074zM338.696 59.498s-4.856 23.016-2.525 24.86zM347.047 65.713s-6.02 14.761-3.593 16.8zM358.41 67.461s-7.09 12.042-5.633 14.179zM372.976 79.212s-7.575 2.04-6.021 4.467zM380.162 91.74s-6.798 3.3-5.535 5.049zM314.681 107.141s43.419-17.636 62.219 7.71c0 0-22.82-19.402-62.219-7.71z"
        opacity={0.1}
      />
      <path
        fill="#53526b"
        d="M298.991 252.052l6.05-6.12 17.105 16.908-6.05 6.121-15.731-15.55-1.374-1.359z"
      />
      <path
        d="M259.301 212.818s26.48 2.253 51.124 29.993l-10.271 10.39z"
        fill="#dfe6f5"
      />
      <path
        d="M338.724 262.417s-25.45-9.278-27.951-11.496-17.212 10.69.736 28.236c0 0 21.946 6.252 27.817 0s-.602-16.74-.602-16.74z"
        fill="#fdc2cc"
      />
      <path fill="#535461" d="M804.65 439.739h5.175v116.436h-5.175z" />
      <path
        d="M842.327 555.82l-.328 5.245-.457 7.4-.19 3.088-.457 7.409-.198 3.087-.457 7.4-5.218 84.188a14.258 14.258 0 01-14.231 13.377h-27.108a14.25 14.25 0 01-14.223-13.377l-5.226-84.188-.457-7.4-.19-3.087-.466-7.41-.19-3.087-.457-7.4-.328-5.244a7.386 7.386 0 017.375-7.84h55.44a7.38 7.38 0 017.366 7.84z"
        fill="#65617d"
      />
      <path
        fill="#9d9cb5"
        d="M841.999 561.065l-.457 7.4h-68.611l-.457-7.4h69.525zM841.352 571.553l-.457 7.409h-67.308l-.466-7.409h68.231zM840.697 582.049l-.457 7.4h-66.006l-.457-7.4h66.92z"
      />
      <path
        d="M764.576 483.381c30.12 21.788 42.66 55.87 42.66 55.87s-36.293-1.245-66.413-23.033-42.661-55.869-42.661-55.869 36.294 1.244 66.414 23.032z"
        fill={color}
      />
      <path
        d="M698.162 460.349s37.67 20.911 49.756 38.223 59.319 40.679 59.319 40.679"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M784.017 439.482c16.394 11.859 23.22 30.409 23.22 30.409s-19.755-.678-36.149-12.537-23.22-30.409-23.22-30.409 19.755.678 36.149 12.537z"
        fill={color}
      />
      <path
        d="M747.868 426.945s20.504 11.382 27.082 20.804 32.287 22.142 32.287 22.142"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M831.06 468.947c-18.83 20.696-22.813 47.739-22.813 47.739s26.546-6.514 45.377-27.21 22.813-47.74 22.813-47.74-26.547 6.514-45.377 27.21z"
        fill={color}
      />
      <path
        d="M876.437 441.736s-24.528 21.215-30.762 35.832-37.428 39.117-37.428 39.117"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </svg>
  );
};

SvgChef.propTypes = {
  color: PropTypes.string
};
SvgChef.defaultProps = {
  color: "primary"
};
const MemoSvgChef = React.memo(SvgChef);
export default MemoSvgChef;
