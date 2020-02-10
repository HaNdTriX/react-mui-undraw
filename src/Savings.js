import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSavings = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1118 802.819"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Savings_svg__a"
          x1={882.017}
          y1={830.637}
          x2={882.017}
          y2={326.597}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <ellipse
        cx={559}
        cy={734.874}
        rx={559}
        ry={67.946}
        fill={color}
        opacity={0.1}
      />
      <path
        d="M956.486 768.178s29.155-37.098 26.797-73.906a71.49 71.49 0 0111.25-43.799 120.232 120.232 0 0113.7-17.199"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M1006.885 610.07c-2.055 5.152 1.312 23.814 1.312 23.814s15.29-11.218 17.345-16.37a10.044 10.044 0 00-18.657-7.444zM980.079 632.456c1.074 5.441 14.044 19.277 14.044 19.277s6.737-17.727 5.663-23.169a10.044 10.044 0 10-19.707 3.892zM961.294 681.492c3.675 4.155 21.855 9.551 21.855 9.551s-3.133-18.703-6.808-22.858a10.044 10.044 0 10-15.047 13.307zM955.437 721.795c2.92 4.716 19.926 13.106 19.926 13.106s.073-18.963-2.847-23.68a10.044 10.044 0 10-17.08 10.574zM1013.312 660.546c-5.128 2.115-23.828-1.035-23.828-1.035s11.04-15.42 16.168-17.534a10.044 10.044 0 117.66 18.569zM1005.863 707.593c-5.525.484-22.426-8.117-22.426-8.117s15.147-11.41 20.673-11.894a10.044 10.044 0 111.753 20.011zM992.349 752.327c-5.365 1.411-23.476-4.21-23.476-4.21s13.002-13.806 18.366-15.217a10.044 10.044 0 015.11 19.427z"
        fill={color}
      />
      <path
        d="M1006.885 610.07c-2.055 5.152 1.312 23.814 1.312 23.814s15.29-11.218 17.345-16.37a10.044 10.044 0 00-18.657-7.444zM980.079 632.456c1.074 5.441 14.044 19.277 14.044 19.277s6.737-17.727 5.663-23.169a10.044 10.044 0 10-19.707 3.892zM961.294 681.492c3.675 4.155 21.855 9.551 21.855 9.551s-3.133-18.703-6.808-22.858a10.044 10.044 0 10-15.047 13.307zM955.437 721.795c2.92 4.716 19.926 13.106 19.926 13.106s.073-18.963-2.847-23.68a10.044 10.044 0 10-17.08 10.574zM1013.312 660.546c-5.128 2.115-23.828-1.035-23.828-1.035s11.04-15.42 16.168-17.534a10.044 10.044 0 117.66 18.569zM1005.863 707.593c-5.525.484-22.426-8.117-22.426-8.117s15.147-11.41 20.673-11.894a10.044 10.044 0 111.753 20.011zM992.349 752.327c-5.365 1.411-23.476-4.21-23.476-4.21s13.002-13.806 18.366-15.217a10.044 10.044 0 015.11 19.427z"
        opacity={0.25}
      />
      <path
        d="M956.733 766.634s41.687-22.102 54.447-56.708a71.49 71.49 0 0128.034-35.482 120.233 120.233 0 0119.493-10.173"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M1066.878 642.511c-3.967 3.877-8.45 22.303-8.45 22.303s18.523-4.06 22.49-7.937a10.044 10.044 0 00-14.04-14.366zM1033.3 652.114c-1.223 5.41 5.028 23.314 5.028 23.314s13.342-13.475 14.565-18.886a10.044 10.044 0 00-19.593-4.428zM996.256 689.332c1.676 5.288 16.11 17.588 16.11 17.588s4.715-18.369 3.039-23.656a10.044 10.044 0 10-19.149 6.068zM974.57 723.804c.757 5.495 12.905 20.057 12.905 20.057s7.751-17.308 6.993-22.803a10.044 10.044 0 10-19.899 2.746zM1052.3 691.261c-5.546-.144-21.365-10.601-21.365-10.601s16.34-9.623 21.886-9.48a10.044 10.044 0 01-.521 20.081zM1026.425 731.254c-5.248-1.796-17.213-16.508-17.213-16.508s18.471-4.293 23.72-2.496a10.044 10.044 0 01-6.507 19.005zM995.943 766.675c-5.476-.884-19.756-13.362-19.756-13.362s17.48-7.353 22.957-6.47a10.044 10.044 0 01-3.201 19.832z"
        fill={color}
      />
      <path
        d="M637.139 95.078c-55.237-1.918-107.847-19.75-158.083-39.26S379.059 14.693 325.144 4.355c-34.676-6.649-74.332-7.59-102.273 11.002-26.887 17.892-35.575 48.775-40.246 77.432-3.514 21.56-5.58 44.25 4.049 64.435 6.685 14.013 18.555 25.792 26.764 39.214 28.562 46.704 8.374 104.296-22.58 149.898-14.519 21.391-31.36 41.799-42.564 64.57S131.906 459.77 141.709 483c9.716 23.024 32.87 40.319 57.953 52.482 50.942 24.705 110.972 31.776 169.51 35.78 129.579 8.865 259.85 5.027 389.773 1.183 48.081-1.422 96.375-2.864 143.675-10.299 26.267-4.129 53.386-10.682 72.455-26.501 24.208-20.083 30.209-54.09 13.987-79.271-27.21-42.24-102.44-52.73-121.459-98.06-10.468-24.952.282-52.745 15.495-75.886 32.636-49.642 87.337-93.193 90.218-149.935 1.98-38.971-24.317-78-64.976-96.439-42.62-19.327-101.718-16.896-133.159 15.098-32.376 32.944-89.271 45.62-138.042 43.927z"
        fill={color}
        opacity={0.1}
      />
      <ellipse
        cx={542.563}
        cy={664.533}
        rx={37.557}
        ry={39.865}
        fill="#fbd56f"
      />
      <ellipse
        cx={542.563}
        cy={664.533}
        rx={37.557}
        ry={39.865}
        opacity={0.1}
      />
      <ellipse
        cx={549.045}
        cy={665.421}
        rx={37.557}
        ry={38.977}
        fill="#fbd56f"
      />
      <path
        d="M564.257 700.744l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M564.257 700.744l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={601.458}
        cy={698.569}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M579.962 687.072l-3.906-2.175s-1.828 7.625-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.566-2.172c.36-3.34-.918-10.23-1.429-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M579.962 687.072l-3.906-2.175s-1.828 7.625-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.566-2.172c.36-3.34-.918-10.23-1.429-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={617.164}
        cy={684.897}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M593.847 669.103l-3.907-2.175s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.232 51.82 11.74 81.275-1.653a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M593.847 669.103l-3.907-2.175s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.232 51.82 11.74 81.275-1.653a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={631.049}
        cy={666.928}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M578.47 650.398l-3.906-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M578.47 650.398l-3.906-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={615.672}
        cy={648.223}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M613.062 635.387l-3.907-2.176s-1.827 7.626-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.574-1.099-2.89-78.31 2.176-78.31 2.176z"
        fill="#fbd56f"
      />
      <path
        d="M613.062 635.387l-3.907-2.176s-1.827 7.626-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.574-1.099-2.89-78.31 2.176-78.31 2.176z"
        opacity={0.1}
      />
      <ellipse
        cx={650.263}
        cy={633.211}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M589.69 625.297l-3.906-2.175s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.566-2.172c.361-3.34-.918-10.23-1.428-11.573-1.1-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M589.69 625.297l-3.906-2.175s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.566-2.172c.361-3.34-.918-10.23-1.428-11.573-1.1-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={626.892}
        cy={623.122}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M605.294 605.82l-3.907-2.176s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.565-2.172c.362-3.34-.917-10.23-1.428-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M605.294 605.82l-3.907-2.176s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.565-2.172c.362-3.34-.917-10.23-1.428-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={642.496}
        cy={603.644}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M612.99 582.7l-3.906-2.176s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M612.99 582.7l-3.906-2.176s-1.827 7.625-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={650.193}
        cy={580.524}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M682.386 706.106l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.566-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M682.386 706.106l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.566-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={719.587}
        cy={703.931}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M696.27 688.137l-3.906-2.175s-1.828 7.625-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.566-2.172c.36-3.34-.918-10.23-1.429-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M696.27 688.137l-3.906-2.175s-1.828 7.625-1.23 13.06a2.707 2.707 0 002.034 2.338c8.987 2.231 51.82 11.74 81.275-1.653a2.703 2.703 0 001.566-2.172c.36-3.34-.918-10.23-1.429-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={733.472}
        cy={685.962}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M680.894 669.432l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.035 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.565-2.172c.362-3.34-.917-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M680.894 669.432l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.035 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.565-2.172c.362-3.34-.917-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={718.096}
        cy={667.257}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M715.485 654.42l-3.907-2.175s-1.827 7.626-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.565-2.172c.362-3.34-.917-10.231-1.428-11.574-1.099-2.89-78.31 2.176-78.31 2.176z"
        fill="#fbd56f"
      />
      <path
        d="M715.485 654.42l-3.907-2.175s-1.827 7.626-1.23 13.06a2.707 2.707 0 002.035 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.565-2.172c.362-3.34-.917-10.231-1.428-11.574-1.099-2.89-78.31 2.176-78.31 2.176z"
        opacity={0.1}
      />
      <ellipse
        cx={752.687}
        cy={652.245}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M692.114 644.331l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M692.114 644.331l-3.907-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.276-1.652a2.703 2.703 0 001.565-2.172c.361-3.34-.918-10.23-1.428-11.573-1.099-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={729.315}
        cy={642.156}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M707.717 624.853l-3.906-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.566-2.172c.361-3.34-.918-10.23-1.428-11.573-1.1-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M707.717 624.853l-3.906-2.175s-1.827 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.566-2.172c.361-3.34-.918-10.23-1.428-11.573-1.1-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={744.919}
        cy={622.678}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M715.414 601.733l-3.906-2.175s-1.828 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.566-2.172c.36-3.34-.918-10.23-1.429-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        fill="#fbd56f"
      />
      <path
        d="M715.414 601.733l-3.906-2.175s-1.828 7.625-1.23 13.059a2.707 2.707 0 002.034 2.338c8.987 2.232 51.82 11.74 81.275-1.652a2.703 2.703 0 001.566-2.172c.36-3.34-.918-10.23-1.429-11.573-1.098-2.89-78.31 2.175-78.31 2.175z"
        opacity={0.1}
      />
      <ellipse
        cx={752.616}
        cy={599.558}
        rx={41.108}
        ry={9.266}
        fill="#fbd56f"
      />
      <path
        d="M1004.191 809.234c-5.722-.202-5.926-2.42-13.283-6.251-4.153-2.162-10.46-8.442-15.16-13.496q-.565-.607-1.094-1.186c1.243-.027 1.948-.04 1.948-.04s-1.84-16.133-.204-19.964.408-26.62.408-26.62 1.022-17.342-.817-21.375.613-29.846.613-29.846 1.635-15.327 2.044-46.584-17.984-32.266-17.984-32.266-2.453-.19-6.176-.544c-.358-.034-.736-.07-1.116-.108 2.412-5.048 3.818-8.826 3.818-8.826s-3.066-29.24-3.883-34.282c-.818-5.042-5.723-25.813-5.723-25.813s-3.474-8.873-5.517-15.124-8.175-13.512-8.175-13.512-11.036-21.779-14.101-25.006c-1.422-1.496-3.417-3.383-5.146-4.976-.312-.288-.61-.56-.9-.825a36.518 36.518 0 00.732-6.903s-11.444-11.293-12.261-14.116-11.649-13.31-11.649-13.31-6.131-11.293-13.08-11.495a56.682 56.682 0 00-9.84.299c1.426-5.282 3.114-10.816 4.63-15.564.168-.53.334-1.045.498-1.554a34.997 34.997 0 0012.554-15.185c.145-.327.276-.658.407-.989.074.002.147.014.22.013a5.487 5.487 0 00.86-.078c2.288-.393 4.224-2.976 3.17-5.015a.747.747 0 00.666.367c.762-.026 1.692-1.129 1.87-2.099.032-.168.049-.339.075-.508.032-.21.067-.42.092-.632.023-.199.038-.398.055-.597a17.548 17.548 0 00.062-1.863c-.004-.178-.006-.356-.014-.533-.013-.27-.035-.54-.06-.81-.01-.11-.013-.222-.025-.332l-.002.016a18.109 18.109 0 00-.658-3.252c-1.13-3.749-3.499-7.466-2.586-11.272.01-.04.028-.078.039-.119v.008c.762-2.953 3.317-5.099 4.88-7.737.15-.252.28-.512.41-.772.023-.048.052-.093.075-.141.094-.196.173-.398.256-.598.054-.13.112-.256.16-.386.067-.176.121-.355.179-.534.052-.162.107-.324.153-.488.044-.158.08-.318.117-.478.046-.192.091-.385.128-.579.027-.14.047-.28.07-.42.034-.22.065-.44.089-.662.012-.12.022-.241.03-.362a13.696 13.696 0 00.044-1.042q.002-.408-.02-.816l-.015-.244c-.02-.29-.05-.579-.089-.867-.005-.042-.007-.084-.013-.125l-.002.011a14.532 14.532 0 00-2.927-6.95 17.911 17.911 0 00-14.71-6.363 24.645 24.645 0 01-4.625.085c-2.566-.376-4.736-2.005-6.78-3.58l-17.118-13.186a21.123 21.123 0 00-6.47-3.847c-2.42-.74-5.32-.484-7.11 1.283-3.205 3.163-1.168 8.606-2.455 12.894-1.114 3.715-4.702 6.232-8.416 7.487s-7.688 1.53-11.505 2.438a6.35 6.35 0 00-3.078 1.415 5.955 5.955 0 00-1.338 4.287 23.118 23.118 0 002.657 10.905c.722 1.37 1.596 2.754 2.364 4.157l.186.348c.086.161.172.322.254.484q.2.393.38.788c.052.114.098.229.148.343q.12.28.228.561a11.391 11.391 0 01.341 1.022 7.38 7.38 0 01.111 4.022c-.588 2.167-2.28 3.837-3.773 5.53a10.759 10.759 0 00-2.521 4.675l-.007.039a3.757 3.757 0 00-.047 1.233c.008.05.014.102.024.152a2.159 2.159 0 00.075.27 1.87 1.87 0 00.08.187 1.74 1.74 0 00.107.21 1.6 1.6 0 00.26.306 1.69 1.69 0 00.143.106 1.738 1.738 0 00.262.161c.056.028.113.054.175.077a2.422 2.422 0 00.418.115c.04.007.075.02.116.026a3.838 3.838 0 00.658.028c.063-.003.132-.01.199-.015a6.242 6.242 0 00.627-.08c.077-.013.151-.025.23-.041.302-.063.618-.139.965-.247a21.625 21.625 0 003.34-1.32c-.002.123-.01.244-.01.367 0 .212 0 .434.02.645a33.986 33.986 0 002.208 11.567 34.934 34.934 0 0010.657 14.725q-.089.523-.195 1.05c-.985 4.835-3.045 9.687-4.316 9.312a17.333 17.333 0 00-3.79-.415c-.385-.012-.759-.017-1.114-.019l-.001-.001a15.11 15.11 0 00-3.474 0 3.765 3.765 0 01-1.52-.21 20.73 20.73 0 00-10.21-.573c-7.067 1.448-17.817 4.098-20.764 7.268-4.496 4.84-11.035 9.478-18.393 29.644 0 0-3.678 12.302-6.54 13.915a19.098 19.098 0 011.942-.873 5.178 5.178 0 01-1.532 1.68 22.554 22.554 0 013.218-1.343c-2.233 13.14 1.073 50.722 1.073 50.722s-2.657 6.48.818 10.312c2.064 2.277 3.186 5.828 3.76 8.341l-.503.782v.004c-1.84 2.852-4.3 6.57-5.914 8.62-2.861 3.63-2.044 15.124-2.044 15.124s-.613 5.445-2.656 7.461-1.635 9.478-1.635 9.478l-5.314 19.562s-4.905 4.436-4.905 6.453-3.883 7.663-3.883 7.663-5.926 9.68 0 8.268a18.595 18.595 0 005.984-3.009l-.003.145q-.013.532-.021 1.081c-.168 10.543.98 25.377 8.755 25.377 12.057 0 43.12 14.318 43.12 14.318 6.336 4.84 14.919 3.227 14.919 3.227s-15.123 15.124-14.714 21.376-8.584 16.536-8.584 16.536l-27.793 54.247a41.606 41.606 0 001.992 11.119c-.132.115-.269.225-.398.343-10.68 9.756-11.608 29.072-11.608 29.072l-2.452 9.88 37.194 16.335s48.23 1.009 56.609-1.21 6.54-11.494-4.496-13.31-13.693-6.654-17.371-8.872c-2.481-1.497-11.293-11.168-16.762-17.299l-.241-.27 1.267-7.034c2.452-1.21 6.13-13.31 6.13-13.31s0-4.84 2.453-6.251 7.562-15.931 7.562-15.931 11.035-18.351 10.422-20.771 7.97-14.722 7.97-14.722 14.51-14.116 13.897-16.637 11.649-15.427 11.649-15.427a40.923 40.923 0 0010.851-12.495c1.104-.177 2.29-.367 3.54-.576 16.047-2.63 42.712-7.385 45.691-8.708 4.088-1.815 3.27 6.251 1.635 13.108s-2.86 39.727-1.021 43.962 1.021 11.091 1.021 11.091l-2.452 36.904 1.635 7.865s-5.518 4.437-3.27 7.058.204 13.915.204 13.915a7.8 7.8 0 01.68-.21c-.198.443-.385.897-.553 1.375-3.167 9.03-1.353 23.84-1.353 23.84v11.697s56.61 1.008 69.075 1.008 29.633-6.05 30.655-10.89-14.306-8.872-20.028-9.074zM843.185 599.296l-3.709.312a30.789 30.789 0 013.709-.312zm22.608-154.789c.519-2.332 1.15-4.842 1.844-7.415zm6.992 160.444a15.002 15.002 0 01-11.01.013l-.025-.013s.204-14.116 1.839-19.964 3.883-16.536 3.883-16.536 1.84-14.721 3.678-21.376 8.992-43.76 12.671-46.18 5.722 1.814 5.722 1.814.55-.01 1.47-.113q.26.58.586 1.235c4.361 8.812 17.154 26.91 17.154 26.91a29.467 29.467 0 019.401 9.276c3.474 5.848 4.496 19.56 4.496 19.56s7.766 30.452 11.444 34.686c1.84 2.118 1.022 3.38-.253 4.11a18.106 18.106 0 00-6.45 5.957 83.857 83.857 0 00-1.64 2.716c-1.406-.326-2.665-.664-3.714-1.018-10.014-3.363-43.734-3.496-49.252-1.077z"
        transform="translate(-41 -48.59)"
        fill="url(#Savings_svg__a)"
      />
      <path
        d="M882.148 768.022v11.598s55.393 1 67.591 1 28.996-6 29.996-10.798-13.998-8.8-19.597-9-5.8-2.399-12.998-6.198c-4.064-2.144-10.235-8.371-14.834-13.383-3.548-3.867-6.163-7.015-6.163-7.015s-29.796-.6-38.395 4.2c-1.98 1.108-3.348 3.275-4.276 5.955-3.1 8.955-1.324 23.64-1.324 23.64z"
        fill="#434175"
      />
      <path
        d="M883.472 744.381c6.247-2.172 42.823-3.016 48.834-3.14-3.548-3.867-6.163-7.015-6.163-7.015s-29.796-.6-38.395 4.2c-1.98 1.108-3.348 3.275-4.276 5.955z"
        opacity={0.1}
      />
      <path
        d="M722.77 559.45s1.156.7 3.232 1.952c.376.224.78.472 1.211.732 1.316.795 2.896 1.743 4.7 2.831 25.132 15.146 93.691 56.205 97.443 55.877.983-.084 3.94-.528 8.019-1.192 1.08-.176 2.24-.364 3.463-.572 15.702-2.608 41.794-7.323 44.71-8.635 4-1.8 3.2 6.2 1.6 12.998s-2.8 39.395-1 43.594 1 10.999 1 10.999l-2.4 36.595 1.6 7.799s-5.4 4.4-3.2 6.999.2 13.798.2 13.798c6.4-2.4 49.794-3.2 49.794-3.2s-1.8-15.997-.2-19.797.4-26.396.4-26.396 1-17.198-.8-21.197.6-29.596.6-29.596 1.6-15.198 2-46.194-17.598-31.996-17.598-31.996-2.4-.188-6.043-.54c-7.127-.684-19.006-1.991-26.94-3.715a44.9 44.9 0 01-4.812-1.276c-9.799-3.336-42.794-3.468-48.194-1.068a14.5 14.5 0 01-10.774.012l-.024-.012-4.2-6.799-40.11 3.42-4.252.364-39.486 3.367-2.716.232z"
        fill="#565387"
      />
      <path
        d="M883.548 590.126c11.65 5.679 22.77-14.454 27.953-25.817-7.127-.684-19.006-1.991-26.94-3.715-5.22 8.759-12.183 24.089-1.013 29.532z"
        opacity={0.1}
      />
      <path
        d="M848.553 454.064a12.214 12.214 0 001.412 3.912c4.267 8.738 16.786 26.684 16.786 26.684a28.991 28.991 0 019.198 9.199c3.4 5.799 4.4 19.397 4.4 19.397s7.599 30.196 11.198 34.396c1.8 2.1 1 3.351-.248 4.075a17.812 17.812 0 00-6.311 5.907c-5.243 8.431-13.614 25.153-1.84 30.892 15.998 7.799 30.996-33.076 30.996-33.076s-3-28.996-3.8-33.995-5.599-25.596-5.599-25.596-3.4-8.8-5.399-14.998-7.999-13.399-7.999-13.399-10.798-21.597-13.798-24.796c-1.392-1.484-3.343-3.356-5.035-4.936-1.956-1.827-3.564-3.263-3.564-3.263s-20.597 14.798-20.397 19.597z"
        fill="#ee8e9e"
      />
      <path
        d="M712.971 765.622l36.395 16.198s47.194 1 55.393-1.2 6.399-11.398-4.4-13.198-13.398-6.6-16.997-8.799c-2.428-1.484-11.05-11.074-16.402-17.154-2.576-2.927-4.395-5.043-4.395-5.043s-7-18.597-26.397-14.398a19.876 19.876 0 00-9.439 4.967c-10.45 9.675-11.358 28.828-11.358 28.828z"
        fill="#434175"
      />
      <path
        d="M727.213 562.134c1.316.795 2.896 1.743 4.7 2.831 25.132 15.146 93.691 56.205 97.443 55.877.983-.084 3.94-.528 8.019-1.192 1.08-.176 2.24-.364 3.463-.572.048-.076.092-.152.136-.228a45.965 45.965 0 004.58-11.207c4.199-15.997-16.598-28.196-16.598-28.196l-4.4-3.42c-5-8.418-40.994-16.377-40.994-16.377l-4.64-3.116-2.475-1.663-.652-.436-5.631-3.784-28.197 2-8.374 5.383-.884.568-3.108 2zM726.73 726.995c7.654 26.477 39.634 17.83 39.634 17.83l.596-3.356c-2.576-2.927-4.395-5.043-4.395-5.043s-7-18.597-26.397-14.398a19.876 19.876 0 00-9.439 4.967z"
        opacity={0.1}
      />
      <path
        d="M718.37 606.844c11.799 0 42.195 14.198 42.195 14.198 6.199 4.799 14.598 3.2 14.598 3.2s-14.798 14.997-14.398 21.196-8.4 16.398-8.4 16.398L725.17 715.63c2 38.195 41.194 27.596 41.194 27.596l1.6-8.999c2.4-1.2 5.999-13.198 5.999-13.198s0-4.8 2.4-6.199 7.399-15.798 7.399-15.798 10.798-18.197 10.198-20.597 7.8-14.598 7.8-14.598 14.197-13.998 13.597-16.498 11.399-15.298 11.399-15.298a40.381 40.381 0 0010.619-12.39 45.965 45.965 0 004.579-11.207c3.383-12.882-9.447-23.305-14.57-26.868-1.24-.864-2.028-1.328-2.028-1.328l-4.4-3.42c-2.27-3.83-10.958-7.562-19.753-10.494-6.343-2.116-12.746-3.815-16.837-4.835-2.708-.672-4.404-1.048-4.404-1.048l-4.639-3.116-1.632-1.096-1.496-1.004-5.63-3.783-12.547.888-15.65 1.112-8.375 5.383-3.991 2.568-15.63 10.046s-.412 3.848-.544 9.011l-.024 1.22c-.164 10.455.96 25.165 8.567 25.165z"
        fill="#565387"
      />
      <path
        d="M778.562 382.874l4.2 14.998s7.399 25.796 8.199 27.596 20.197 19.997 20.997 20.397 11.362 6.4 11.362 6.4.836-32.996.036-42.595a27.405 27.405 0 01.52-6.287c1.276-7.523 4.504-18.554 7.18-27.048 2.239-7.12 4.099-12.459 4.099-12.459s-46.794-2-45.194 2.6c.604 1.74.408 4.647-.176 7.563-.964 4.795-2.98 9.607-4.224 9.235a16.745 16.745 0 00-3.707-.412 52.362 52.362 0 00-3.292.012z"
        fill="#ee8e9e"
      />
      <path
        d="M789.785 374.039a34.61 34.61 0 0041.27 2.296c2.24-7.12 4.1-12.459 4.1-12.459s-46.794-2-45.194 2.6c.604 1.74.408 4.647-.176 7.563z"
        opacity={0.1}
      />
      <path
        d="M846.558 346.287a34.463 34.463 0 01-1.73 10.8 28.27 28.27 0 01-1 2.65 34.598 34.598 0 01-64.28-1.34 34.1 34.1 0 01-2.16-11.47c-.02-.21-.02-.43-.02-.64a34.595 34.595 0 1169.19 0z"
        fill="#ee8e9e"
      />
      <path
        d="M778.562 382.874l4.2 14.998s7.399 25.796 8.199 27.596 20.197 19.997 20.997 20.397 11.362 6.4 11.362 6.4.836-32.996.036-42.595a27.405 27.405 0 01.52-6.287l-2.72 11.086.2 22.197 1.6 1.2-3.6 5.4v-4s-12.797-12.398-14.797-17.598-9.199-14.614-9.199-14.614-8.199-13.782-8.399-16.181c-.156-1.872-3.6-6.2-5.107-8.011-1.728-.052-3.292.012-3.292.012zM848.553 454.064a12.214 12.214 0 001.412 3.912c4.371-.448 19.27-3.228 22.549-20.246-1.956-1.827-3.564-3.263-3.564-3.263s-20.597 14.798-20.397 19.597zM709.804 581.679c4.035-2.856 7.875-6.751 10.166-7.831 3.4-1.6 8.6-6.8 8.6-6.8s1.319-.895 3.343-2.083c3.711-2.176 9.794-5.327 14.454-5.715 4.175-.348 18.045-1.236 28.956-1.916 7.895-.496 14.238-.884 14.238-.884s12.998-4.599 18.597-1.6a58.76 58.76 0 0012.599 4.6s.004-.436.024-1.188l-.024-.012-4.2-6.799-44.362 3.783-5.631-3.783-28.196 2-8.375 5.383-7.223.616s1.156.7 3.232 1.952l-15.63 10.046s-.48 4.468-.568 10.23z"
        opacity={0.1}
      />
      <path
        d="M703.972 583.447a18.103 18.103 0 005.856-2.984v-.004c4.027-2.851 7.855-6.735 10.142-7.81 3.4-1.6 8.6-6.8 8.6-6.8s10.598-7.199 17.797-7.799c1.963-.164 6.067-.448 10.998-.768 5.048-.336 10.955-.712 16.326-1.044 3.096-.196 6.011-.38 8.475-.532l7.395-.456s12.998-4.599 18.597-1.6a58.76 58.76 0 0012.599 4.6s.2-13.998 1.8-19.797 3.799-16.398 3.799-16.398 1.8-14.598 3.6-21.197 8.798-43.394 12.398-45.794 5.6 1.8 5.6 1.8 23.996-.4 24.396-26.797c0 0-11.199-11.198-11.999-13.998s-11.398-13.198-11.398-13.198-6-11.198-12.798-11.398a54.703 54.703 0 00-9.631.296l-5.767 23.5.2 22.197 1.6 1.2-3.6 5.4v-4s-12.798-12.398-14.798-17.598-9.199-14.614-9.199-14.614-8.199-13.782-8.399-16.181-5.799-8.831-5.799-8.831a14.595 14.595 0 00-3.4 0 3.638 3.638 0 01-1.487-.208 20.027 20.027 0 00-9.99-.568c-6.916 1.436-17.434 4.063-20.318 7.207-4.4 4.8-10.799 9.399-17.998 29.396l38.795 13.998-3.32 6.311-30.875 58.68s-1.024 1.668-2.412 3.848v.004c-1.8 2.827-4.207 6.515-5.787 8.546-2.8 3.6-2 14.998-2 14.998s-.6 5.4-2.6 7.4-1.6 9.398-1.6 9.398l-5.199 19.398s-4.799 4.4-4.799 6.399-3.8 7.599-3.8 7.599-5.799 9.599 0 8.199z"
        fill="#434175"
      />
      <path
        d="M908.745 597.845s-12.598 4.2-15.998 10.198 15.998-10.198 15.998-10.198zM902.346 584.647c-.4.6-17.255 17.513-16.198 21.597s16.198-21.597 16.198-21.597zM809.758 596.645s-18.797 8.865-20.397 12.731 20.397-12.731 20.397-12.731zM808.558 608.043s-16.964 7.2-19.28 9 19.28-9 19.28-9zM800.76 623.441s-7.514 5.6-11.656 1.2 11.655-1.2 11.655-1.2zM828.959 477.461c-.403.6-25.4 45.594-32 48.993s32-48.993 32-48.993zM827.756 494.459c0 1-24.397 53.193-28.396 53.792s28.396-53.792 28.396-53.792zM734.968 528.054s-11.783 25.162-16.397 26.597 16.397-26.597 16.397-26.597zM732.969 516.856s-4.062 8.799-6.53 8.799 6.53-8.8 6.53-8.8zM846.558 346.287a34.463 34.463 0 01-1.73 10.8 28.27 28.27 0 01-1 2.65 10.172 10.172 0 01-4.85-2.13 12.008 12.008 0 01-3.63-3.88 48.612 48.612 0 01-1.77-5.05 11.748 11.748 0 00-9.49-7.19c1.15 1.96-.68 4.65-2.93 5-2.25.34-4.44-1-5.99-2.67s-2.67-3.7-4.21-5.37c-1.55-1.67-3.74-3.01-5.99-2.67-1.99.3-3.53 1.82-5.2 2.95-1.66 1.13-3.99 1.89-5.6.68-.9-.67-1.34-1.81-2.2-2.54-2.21-1.85-5.65.06-7.28 2.45-2.51 3.7-4.04 5.94-7.3 7.61-.02-.21-.02-.43-.02-.64a34.595 34.595 0 1169.19 0z"
        opacity={0.1}
      />
      <path
        d="M784.69 338.316c1.628-2.392 5.066-4.304 7.282-2.445.86.722 1.299 1.863 2.196 2.539 1.607 1.21 3.94.45 5.602-.683s3.207-2.647 5.196-2.95c2.25-.343 4.444.999 5.99 2.67s2.665 3.7 4.211 5.37 3.74 3.011 5.99 2.667 4.085-3.037 2.928-4.998a11.75 11.75 0 019.488 7.19 48.69 48.69 0 001.771 5.05 11.977 11.977 0 003.635 3.876c1.835 1.345 4.059 2.479 6.3 2.089s4.14-2.959 3.097-4.981c.717 1.088 2.255-.428 2.487-1.71a18.29 18.29 0 00-.462-8.44c-1.105-3.717-3.423-7.403-2.53-11.177.707-2.987 3.26-5.132 4.81-7.783 2.748-4.698 2.019-11.027-1.323-15.323a17.422 17.422 0 00-14.394-6.31 23.8 23.8 0 01-4.525.085c-2.511-.373-4.634-1.989-6.635-3.55l-16.75-13.076a20.611 20.611 0 00-6.331-3.815c-2.368-.734-5.205-.48-6.957 1.272-3.136 3.137-1.143 8.534-2.402 12.787-1.09 3.683-4.601 6.18-8.236 7.424s-7.523 1.517-11.257 2.418a6.177 6.177 0 00-3.013 1.402 5.959 5.959 0 00-1.309 4.252 23.173 23.173 0 002.6 10.814c1.94 3.73 5.015 7.564 3.927 11.626-.576 2.15-2.232 3.805-3.692 5.485-3.166 3.64-4.234 9.02 1.722 7.14 5.737-1.81 7.347-4.156 10.585-8.915z"
        fill="#434175"
      />
      <g opacity={0.1}>
        <path d="M850.867 348.058c-.233 1.282-1.77 2.797-2.487 1.71 1.042 2.022-.856 4.59-3.097 4.98s-4.466-.744-6.3-2.089a11.976 11.976 0 01-3.635-3.876 48.691 48.691 0 01-1.772-5.05 11.75 11.75 0 00-9.487-7.19c1.156 1.961-.678 4.654-2.928 4.998s-4.445-.995-5.99-2.666-2.667-3.699-4.212-5.37-3.739-3.013-5.989-2.67c-1.99.302-3.534 1.815-5.196 2.95s-3.995 1.893-5.603.682c-.896-.676-1.335-1.817-2.196-2.538-2.216-1.86-5.654.053-7.28 2.444-3.239 4.76-4.848 7.106-10.586 8.916-1.883.594-3.06.46-3.695-.113-1.259 2.891-.686 5.438 3.695 4.055 5.738-1.81 7.347-4.156 10.585-8.915 1.627-2.392 5.065-4.304 7.281-2.445.86.722 1.3 1.863 2.196 2.539 1.608 1.21 3.94.45 5.603-.683s3.207-2.647 5.196-2.95c2.25-.343 4.444.999 5.989 2.67s2.666 3.7 4.212 5.37 3.74 3.011 5.99 2.667 4.084-3.037 2.928-4.998a11.75 11.75 0 019.487 7.19 48.701 48.701 0 001.772 5.05 11.977 11.977 0 003.634 3.876c1.835 1.345 4.06 2.479 6.3 2.089s4.14-2.959 3.098-4.981c.716 1.088 2.254-.428 2.487-1.71a18.263 18.263 0 00.18-5.23 18.02 18.02 0 01-.18 1.288zM776.028 330.815c.015-.051.037-.1.051-.152 1.088-4.061-1.986-7.895-3.926-11.626a23.177 23.177 0 01-2.485-8.446 11.226 11.226 0 00-.115 1.575 23.173 23.173 0 002.6 10.814c1.326 2.55 3.18 5.149 3.875 7.835zM852.685 320.658c-1.55 2.65-4.103 4.795-4.81 7.783a8.682 8.682 0 00.035 3.832c.744-2.929 3.245-5.056 4.775-7.673a13.142 13.142 0 001.54-8.442 12.373 12.373 0 01-1.54 4.5z" />
      </g>
      <path
        d="M729.757 501.506v.004a30.534 30.534 0 01.612 3.347s15.798 36.995 17.798 39.195c.615.676 2.935 4.003 5.85 8.287a1149.42 1149.42 0 013.348 4.943 3453.087 3453.087 0 0112.799 19.166l14.798 12.998s32.191 2.576 42.422-7.871c-1.24-.864-2.028-1.328-2.028-1.328l-4.4-3.42c-2.27-3.83-10.958-7.562-19.753-10.494-8.103.06-14.73.716-14.73.716l-2.107-5.551-2.2-5.792-11.187-29.452s-7.215-37.195-9.614-38.994-1.8-7.4-1.8-7.4 4.4-15.797 2.8-17.997 2.6-18.397 2.6-18.397a16.778 16.778 0 00-1.92-4.488l-30.876 58.68s-1.024 1.668-2.412 3.848z"
        opacity={0.1}
      />
      <path
        d="M765.364 442.266s-4.2 16.198-2.6 18.397-2.799 17.998-2.799 17.998-.6 5.6 1.8 7.399 9.614 38.995 9.614 38.995l15.493 40.794s48.483-4.8 43.483 10.399-44.993 11.998-44.993 11.998l-14.798-12.998s-19.998-30.196-21.997-32.396-17.798-39.195-17.798-39.195-.8-7.399-4.2-11.198-.8-10.226-.8-10.226-4.199-48.366.2-54.165 34.796-3.2 39.395 14.198z"
        fill="#ee8e9e"
      />
      <path
        d="M740.568 411.87l-12.599 7.599s-3.6 12.198-6.399 13.798c0 0 25.197-13.998 44.194 18.198 0 0-.6-4.2 2-6.2s2-10.598 2-10.598a34.628 34.628 0 001.8-4.2c1.8-4.4-7.6-29.596-30.996-18.597z"
        opacity={0.1}
      />
      <path
        d="M740.168 411.07l-12.599 7.599s-3.6 12.198-6.399 13.798c0 0 25.197-13.998 44.194 18.198 0 0-.6-4.2 2-6.2s2-10.598 2-10.598a34.628 34.628 0 001.8-4.2c1.8-4.399-7.6-29.596-30.996-18.597z"
        fill="#434175"
      />
      <ellipse
        cx={627.879}
        cy={721.411}
        rx={37.557}
        ry={39.865}
        fill="#fbd56f"
      />
      <ellipse
        cx={627.879}
        cy={721.411}
        rx={37.557}
        ry={39.865}
        opacity={0.1}
      />
      <ellipse
        cx={634.36}
        cy={722.298}
        rx={37.557}
        ry={38.977}
        fill="#fbd56f"
      />
      <ellipse cx={90.143} cy={735.477} rx={46.386} ry={7.841} fill={color} />
      <path
        d="M109.323 722.648c1.987-1.846 3.85-4.023 4.422-6.674s-.557-5.83-3.09-6.798c-2.838-1.085-5.87.882-8.17 2.869s-4.935 4.254-7.944 3.833a12.094 12.094 0 003.74-11.319 4.728 4.728 0 00-1.04-2.298c-1.576-1.685-4.432-.961-6.318.366-6 4.22-7.673 12.368-7.706 19.703-.605-2.646-.095-5.403-.11-8.117s-.759-5.722-3.048-7.18a9.182 9.182 0 00-4.65-1.092c-2.696-.1-5.7.171-7.541 2.143-2.288 2.451-1.695 6.563.296 9.26s5.019 4.39 7.806 6.253a17.309 17.309 0 015.578 5.32 5.267 5.267 0 01.414.951h16.906a47.11 47.11 0 0010.455-7.22zM509.621 684.344a40.436 40.436 0 015.028 9.18c.336.845.665 1.732.976 2.662 4.997 14.935-2.921 32.845-5.185 30.913s-9.318-5.516-10.683-.479-6.402 10.185-6.402 10.185c-9.18 9.234-17.49-.742-22.945-11.05a99.846 99.846 0 01-4.745-10.485 109.362 109.362 0 01-1.907-5.354l38.237-32.578s3.697 1.697 7.626 7.006zM449.357 705.176a40.437 40.437 0 015.028 9.18 50.5 50.5 0 01.976 2.662c4.997 14.935-2.921 32.845-5.185 30.913s-9.318-5.516-10.683-.479-6.402 10.185-6.402 10.185c-9.18 9.234-17.49-.742-22.945-11.05a99.85 99.85 0 01-4.745-10.485c-1.211-3.166-1.907-5.354-1.907-5.354l38.237-32.578s3.697 1.697 7.626 7.006zM328.354 733.956a40.436 40.436 0 01-1.988 10.276c-.28.864-.593 1.757-.948 2.672-5.684 14.687-23.21 23.422-23.72 20.49s-3.653-10.193-7.918-7.186-11.43 3.755-11.43 3.755c-12.96 1.25-12.99-11.733-10.612-23.15a99.846 99.846 0 013.039-11.1c1.087-3.21 1.948-5.34 1.948-5.34l50.23-.678s1.762 3.665 1.399 10.26zM263.455 717.588a40.436 40.436 0 01-1.988 10.276c-.28.864-.593 1.757-.948 2.672-5.684 14.688-23.21 23.422-23.72 20.49s-3.653-10.193-7.918-7.186-11.43 3.755-11.43 3.755c-12.96 1.25-12.99-11.733-10.611-23.15a99.848 99.848 0 013.038-11.1c1.088-3.21 1.948-5.34 1.948-5.34l50.23-.678s1.762 3.665 1.4 10.26z"
        fill={color}
      />
      <path
        d="M509.621 684.344a40.436 40.436 0 015.028 9.18c.336.845.665 1.732.976 2.662 4.997 14.935-2.921 32.845-5.185 30.913s-9.318-5.516-10.683-.479-6.402 10.185-6.402 10.185c-9.18 9.234-17.49-.742-22.945-11.05a99.846 99.846 0 01-4.745-10.485 109.362 109.362 0 01-1.907-5.354l38.237-32.578s3.697 1.697 7.626 7.006zM449.357 705.176a40.437 40.437 0 015.028 9.18 50.5 50.5 0 01.976 2.662c4.997 14.935-2.921 32.845-5.185 30.913s-9.318-5.516-10.683-.479-6.402 10.185-6.402 10.185c-9.18 9.234-17.49-.742-22.945-11.05a99.85 99.85 0 01-4.745-10.485c-1.211-3.166-1.907-5.354-1.907-5.354l38.237-32.578s3.697 1.697 7.626 7.006zM328.354 733.956a40.436 40.436 0 01-1.988 10.276c-.28.864-.593 1.757-.948 2.672-5.684 14.687-23.21 23.422-23.72 20.49s-3.653-10.193-7.918-7.186-11.43 3.755-11.43 3.755c-12.96 1.25-12.99-11.733-10.612-23.15a99.846 99.846 0 013.039-11.1c1.087-3.21 1.948-5.34 1.948-5.34l50.23-.678s1.762 3.665 1.399 10.26zM263.455 717.588a40.436 40.436 0 01-1.988 10.276c-.28.864-.593 1.757-.948 2.672-5.684 14.688-23.21 23.422-23.72 20.49s-3.653-10.193-7.918-7.186-11.43 3.755-11.43 3.755c-12.96 1.25-12.99-11.733-10.611-23.15a99.848 99.848 0 013.038-11.1c1.088-3.21 1.948-5.34 1.948-5.34l50.23-.678s1.762 3.665 1.4 10.26z"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M611.616 497.454c0 134.159-45.384 242.916-254.82 242.916-140.733 0-249.612-34.968-254.82-242.916-3.36-134.117 114.087-242.916 254.82-242.916s254.82 108.757 254.82 242.916z"
        fill={color}
      />
      <path
        d="M308.994 258.779h.03a.058.058 0 01-.023.007zM309.492 258.697a46.64 46.64 0 013.787-.424l-4.144.49q.09-.022.223-.044c.045-.007.082-.015.134-.022zM497.784 357.954l-18.6 6.696a415.47 415.47 0 00-30.556-36.427 298.497 298.497 0 00-38.696-34.662c-47.623-35.296-84.458-36.196-96.623-35.288l27.96-3.289a227.319 227.319 0 0175.062 27.134 247.977 247.977 0 0145.109 33.324c24.343 22.595 36.344 42.512 36.344 42.512z"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M329.64 370.602s-24.552-81.84-3.72-104.16c0 0 32.736-11.16 57.288 52.08z"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M453.962 294.163s65.11-55.329 93.913-45.204c0 0 23.358 25.506-24.714 73.372z"
        fill={color}
      />
      <path
        d="M453.962 294.163s65.11-55.329 93.913-45.204c0 0 23.358 25.506-24.714 73.372z"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M657 559.206c0 72.113-51.748 129.084-100.44 129.084s-75.888-56.971-75.888-129.084 39.554-127.754 88.164-130.572C645.84 424.17 657 487.093 657 559.206z"
        fill={color}
      />
      <path
        d="M657 559.206c0 72.113-51.748 129.084-100.44 129.084s-75.888-56.971-75.888-129.084 39.554-127.754 88.164-130.572C645.84 424.17 657 487.093 657 559.206z"
        opacity={0.2}
        style={{
          isolation: "isolate"
        }}
      />
      <ellipse cx={553.584} cy={569.994} rx={16.368} ry={20.832} fill={color} />
      <ellipse cx={611.616} cy={552.138} rx={16.368} ry={20.832} fill={color} />
      <path
        d="M464.616 302.005a29.703 29.703 0 01-3.176 13.437 28.551 28.551 0 01-12.812 12.781 298.497 298.497 0 00-38.696-34.662 29.161 29.161 0 016.399-11.443 27.43 27.43 0 0120.34-9.114c15.431 0 27.945 12.983 27.945 29z"
        fill="#fad46f"
      />
    </svg>
  );
};

SvgSavings.propTypes = {
  color: PropTypes.string
};
SvgSavings.defaultProps = {
  color: "primary"
};
const MemoSvgSavings = React.memo(SvgSavings);
export default MemoSvgSavings;
