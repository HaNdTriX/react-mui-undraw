import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPersonalNotebook = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1053.486 823.177"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M354.159 727.549c-149.602-42.25-307.22-87.566-346.969-269.64s136.5-530.21 203.026-389.71c67.048 141.604 239.041 223.704 346.969 269.64 328.397 139.77 179.895 497.851-203.026 389.71z"
        fill="#f2f2f2"
      />
      <path
        d="M354.558 726.102c-80.976-22.87-165.643-45.821-234.706-95.948-34.324-24.913-63.166-56.752-83.083-94.297A288.911 288.911 0 013.3 415.403c-1.809-37.435 2.697-75.082 10.33-111.69A656.541 656.541 0 0147.815 191.76c13.074-32.33 28.62-63.981 48.078-92.98 13.935-20.767 30.739-42.893 53.052-55.244 16.335-9.042 34.022-8.513 47.184 5.638 10.47 11.256 15.657 26.474 23.097 39.666a361.813 361.813 0 0039.575 56.295c59.494 70.046 140.205 119.728 221.979 159.697 18.024 8.81 36.264 17.174 54.636 25.231 18.616 8.164 37.386 15.88 55.383 25.377 33.01 17.42 64.012 39.298 89.439 66.772 39.291 42.455 63.772 99.626 54.583 158.049-8.772 55.766-46.24 101.775-94.442 129.4-65.512 37.544-145.178 42.334-218.43 31.18a561.686 561.686 0 01-67.392-14.739 1.501 1.501 0 00-.798 2.893c44.125 12.403 89.809 20.136 135.73 20.1 37.234-.03 74.747-5.198 109.96-17.563 29.1-10.219 56.596-25.39 79.65-45.991 20.5-18.318 37.196-40.885 47.79-66.305a167.714 167.714 0 0012.338-77.758c-2.29-28.45-11.752-55.943-26.2-80.478-17.062-28.973-40.697-53.656-67.253-74.092a370.55 370.55 0 00-50.677-32.576c-18.53-9.957-37.89-17.981-57.136-26.407-39.288-17.201-77.991-35.83-115.262-57.084-41.611-23.73-81.619-50.705-117.414-82.633-35.978-32.091-67.765-69.482-89.754-112.592-9.23-18.094-19.886-40.501-43.264-41.484-20.434-.858-38.673 14.866-51.854 28.685-21.548 22.591-38.113 49.964-52.373 77.57a636.995 636.995 0 00-43.09 107.138C13.53 285.108 5.179 323.81 1.629 362.965c-3.358 37.044-1.864 74.061 7.676 110.12 11.5 43.465 32.094 84.165 62.178 117.732 27.846 31.07 62.592 55.075 99.662 73.853 38.648 19.577 79.753 33.86 121.118 46.48 20.416 6.228 40.956 12.044 61.497 17.845a1.501 1.501 0 00.798-2.893z"
        fill="#f2f2f2"
      />
      <path
        d="M655.538 152.736c.033 67.243-39.931 90.738-89.24 90.762q-1.717.001-3.419-.036-3.428-.073-6.784-.31c-44.504-3.129-79.094-27.793-79.124-90.33-.032-64.717 82.642-146.43 88.842-152.471.006 0 .006 0 .011-.006L566.18 0s89.326 85.498 89.358 152.736z"
        fill={color}
      />
      <path
        d="M563.044 233.214l32.632-45.641-32.712 50.65-.085 5.239q-3.428-.073-6.784-.31l3.485-67.272-.027-.52.06-.1.331-6.356L527.1 118.16l32.94 45.982.083 1.348 2.633-50.827-28.12-52.44 28.461 43.507L565.813.35l.011-.35v.345l-.42 83.103 27.948-32.959-28.065 40.116-.717 45.51 26.1-43.687-26.201 50.379-.399 25.306 37.88-60.812-38.024 69.64z"
        fill="#3f3d56"
      />
      <path
        d="M660.716 141.735h-426.73v614h426.73a21.266 21.266 0 0021.27-21.27v-571.46a21.266 21.266 0 00-21.27-21.27zm-403.73 603a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11zm0-38a11 11 0 1111-11 10.994 10.994 0 01-11 11z"
        fill="#3f3d56"
      />
      <path d="M235.986 542.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 551.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 505.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 514.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 466.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 475.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 428.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 437.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 390.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 399.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 352.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 361.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 314.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 323.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 276.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 285.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 238.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 247.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 200.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 209.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 162.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.622 0 21.217-1.293 23.517-2.365-1.054-.369-3.704-.999-10.362-1.799l.238-1.985c11.703 1.405 12.607 2.399 12.607 3.65 0 4.283-21.658 4.5-26 4.5zM235.986 171.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.488l.022 2c-12.179.134-20.06 1.462-21.786 2.488 1.837 1.095 10.62 2.5 23.775 2.5 12.31 0 20.79-1.23 23.335-2.285-2.28-.606-7.89-1.26-11.145-1.639l-2.035-.24.238-1.985 2.029.238c12.244 1.428 13.578 1.953 13.578 3.411 0 4.284-21.658 4.5-26 4.5zM235.986 581.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 590.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 618.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 627.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 657.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 666.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 694.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 703.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5zM235.986 732.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.62 0 21.216-1.294 23.516-2.366-1.053-.369-3.704-.998-10.362-1.799l.24-1.986c11.702 1.408 12.606 2.401 12.606 3.65 0 4.284-21.658 4.5-26 4.5zM235.986 741.735c-4.342 0-26-.216-26-4.5 0-3.918 18.361-4.426 23.989-4.489l.022 2c-12.178.135-20.06 1.462-21.786 2.49 1.838 1.094 10.62 2.5 23.775 2.5 12.308 0 20.788-1.23 23.334-2.286-2.28-.604-7.88-1.258-11.127-1.637l-2.053-.242.24-1.986 2.044.241c12.23 1.427 13.562 1.952 13.562 3.41 0 4.283-21.658 4.5-26 4.5z" />
      <path
        fill="#3f3d56"
        d="M48.486 754.235h1005v2h-1005zM96.349 162.723a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10zM139.486 475.235h-26v-26h26zm-24-2h22v-22h-22zM387.465 109.592L370.13 90.214l19.378-17.335 17.335 19.378zm-14.511-19.22l14.668 16.396L404.018 92.1 389.35 75.703z"
      />
      <path fill={color} d="M350.486 305.235h251v114h-251z" />
      <path
        d="M376.322 381.648a138.473 138.473 0 0150.029-5.036c17.437 1.487 34.294 6.712 51.515 9.578a304.647 304.647 0 0047.91 4.14c13.87.094 30.847 1.19 43.129-6.391 1.64-1.013.135-3.609-1.514-2.59-7.138 4.405-15.288 5.116-23.483 5.56q-12.392.67-24.814.303a300.058 300.058 0 01-49.822-5.632c-15.517-3.09-30.82-7.336-46.688-8.237a141.434 141.434 0 00-47.06 5.412 1.501 1.501 0 00.798 2.893zM376.322 350.648a138.473 138.473 0 0150.029-5.036c17.437 1.487 34.294 6.712 51.515 9.578a304.647 304.647 0 0047.91 4.14c13.87.094 30.847 1.19 43.129-6.391 1.64-1.013.135-3.609-1.514-2.59-7.138 4.405-15.288 5.116-23.483 5.56q-12.392.67-24.814.303a300.058 300.058 0 01-49.822-5.632c-15.517-3.09-30.82-7.336-46.688-8.237a141.434 141.434 0 00-47.06 5.412 1.501 1.501 0 00.798 2.893z"
        fill="#f2f2f2"
      />
      <path
        d="M681.986 615.345v119.12a21.266 21.266 0 01-21.27 21.27h-160.84zM681.986 163.005v113.81l-212.33-135.08h191.06a21.266 21.266 0 0121.27 21.27z"
        opacity={0.2}
      />
      <path fill="#3f3d56" d="M734.6 398.958h2v357.65h-2z" />
      <ellipse cx={735.986} cy={636.958} rx={39} ry={89} fill="#3f3d56" />
      <ellipse cx={735.986} cy={433.958} rx={39} ry={89} fill="#3f3d56" />
      <path
        d="M736.944 361.245l-1.916-.574c.121-.405 11.879-40.697-7.427-66.636-10.904-14.649-29.616-22.077-55.615-22.077v-2c26.67 0 45.923 7.701 57.225 22.89 19.904 26.752 7.857 67.984 7.733 68.397z"
        fill="#3f3d56"
      />
      <circle cx={671.986} cy={270.958} r={25} fill={color} />
      <circle cx={671.761} cy={270.237} r={7.657} fill="#d0cde1" />
      <path
        fill="#2f2e41"
        d="M950.45 276.908l-79.928 15.469v-63.168l73.482 2.578 6.446 45.121z"
      />
      <path
        d="M951.094 375.528l-2.578 27.072 14.18 78.638s0 52.855 12.892 45.12 1.29-45.12 1.29-45.12v-82.506l-2.579-23.204zM833.782 379.395l-1.29 19.337-37.04 92.02s-29.471 27.055-12.33 39.066 27.455-29.243 27.455-29.243l39.964-78.638 3.867-42.542zM814.444 554.72l2.579 51.566s-10.314 51.566 1.289 95.397l6.446 46.41 18.048-2.579 6.445-59.3s3.868-51.567 2.579-58.013l9.024-61.879zM899.528 570.19l20.627 70.903s2.578 30.94 18.048 60.59 18.048 45.12 18.048 45.12l20.626-2.578-7.734-58.012s-9.025-65.747-16.76-73.481l-7.734-41.253z"
        fill="#a0616a"
      />
      <circle cx={902.107} cy={240.745} r={30.94} fill="#a0616a" />
      <path
        d="M890.504 264.66s11.603 23.205 0 29.651-16.759 9.024-16.759 9.024-15.47 58.012 19.338 52.855 58.011-65.746 58.011-65.746-23.204-6.446-28.36-33.518z"
        fill="#a0616a"
      />
      <path
        d="M881.803 330.568a14.962 14.962 0 01-6.986-12.936 21.52 21.52 0 014.208-12.885l4.923-6.827s-24.383-6.187-41.142 20.885-39.964 64.458-19.338 68.325 27.073 3.867 27.073 3.867-1.29 15.47-15.47 29.65-73.482 121.181-45.12 134.073 165.01 41.253 170.167 20.626-25.783-149.541-25.783-149.541l10.314-41.253s81.216 2.578 70.903-14.181-28.361-81.216-61.88-81.216h-5.969s-26.788 31.16-45.825 41.76a19.422 19.422 0 01-20.075-.347zM953.673 744.225l-3.868 24.494-1.289 30.94 9.024 1.289 2.579-16.76 5.156 27.073s9.024 14.18 24.494 11.602-2.578-33.518-2.578-33.518l-7.735-47.698zM846.673 741.647l3.868 24.494 1.289 30.94-9.024 1.288-2.579-16.759-5.156 27.073s-9.024 14.18-24.494 11.602 2.578-33.518 2.578-33.518l7.735-47.699z"
        fill="#2f2e41"
      />
      <circle cx={889.86} cy={345.233} r={5.157} fill={color} />
      <circle cx={884.059} cy={379.395} r={5.157} fill={color} />
      <circle cx={878.902} cy={414.202} r={5.157} fill={color} />
      <circle cx={877.613} cy={450.298} r={5.157} fill={color} />
      <circle cx={869.878} cy={481.238} r={5.157} fill={color} />
      <circle cx={866.01} cy={516.045} r={5.157} fill={color} />
      <path
        d="M888.317 201.315c-8.564-1.474-17.946 3.386-20.616 10.68-.857 2.34-1.097 4.867-2.342 7.07-1.334 2.362-3.698 4.135-5.425 6.292a14.011 14.011 0 00-2.495 13.055c.835 2.546 2.422 4.913 2.775 7.544a3.032 3.032 0 01-.142 1.647 4.436 4.436 0 01-1.419 1.519q-4.178 3.288-8.049 6.861c-2.63 2.43-5.334 5.572-4.346 8.809a14.688 14.688 0 001.536 2.9 13.802 13.802 0 01-.03 13.822c-1.132 1.943-2.734 3.661-3.753 5.652a19.997 19.997 0 0010.923-7.162c-2.347 5.718-10.583 7.882-14.062 13.138a14.333 14.333 0 006.84-1.698 32.556 32.556 0 00-4.911 3.95 20.722 20.722 0 009.219-4.783 12.21 12.21 0 00-4.665 7.03c9.633.168 19.075-2.131 28.353-4.41l15.574-3.827a4.884 4.884 0 002.737-1.32 3.224 3.224 0 00.485-2.328c-.327-3.945-2.475-7.587-4.834-10.957a89.031 89.031 0 00-5.744-7.346c-2.126-2.445-4.418-4.82-5.937-7.592-3.322-6.062-2.55-13.16-1.702-19.846.249-1.968.578-4.09 2.145-5.512.62-.562 1.395-.974 2.041-1.511 2.22-1.844 2.573-4.767 3.258-7.381a25.05 25.05 0 015.63-10.32c.98-1.092 2.285-2.203 3.867-2.129 2.985.14 5.217 2.175 6.783 4.41a44.292 44.292 0 013.632 7.184c2.784 6.052 7.356 12.157 14.496 13.978 2.752.702 5.776.732 8.248 2.003a9.569 9.569 0 014.689 6.075 23.33 23.33 0 01.438 7.503 259.21 259.21 0 01-2.718 25.841l37.052.47a32.217 32.217 0 00-5.25-13.794 83.253 83.253 0 0013.056.348c-1.565-2.954-6.055-3.32-9.41-4.709a2.777 2.777 0 01-1.173-.765 2.47 2.47 0 01-.338-1.633l.168-5.732a7.594 7.594 0 00-.586-3.918c-.664-1.227-1.958-2.112-2.694-3.307-1.8-2.922.195-6.688-1.113-9.806-1.094-2.607-4.153-4.067-6.82-5.562-3.676-2.059-7.11-4.701-8.904-8.19-.84-1.632-1.294-3.395-1.965-5.088-2.219-5.6-6.82-10.327-12.33-13.754a61.32 61.32 0 00-18.435-7.155c-4.535-1.06-9.315-1.81-13.906-.952s-8.967 3.642-10.18 7.622"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgPersonalNotebook.propTypes = {
  color: PropTypes.string
};
SvgPersonalNotebook.defaultProps = {
  color: "primary"
};
const MemoSvgPersonalNotebook = React.memo(SvgPersonalNotebook);
export default MemoSvgPersonalNotebook;
