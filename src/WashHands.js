import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgWashHands = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 426.562 657.227"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        opacity={0.2}
        d="M424.405 252.235l-6.471-.022-24.817-.075-5.512-.011-16.717-.043-4.131-.022h-1.833l-86.208-.237-1.37-.011h-1.305l-5.241-.021-14.798-.033-7.14-.021-14.819-.043V37.066l182.812-16.145 6.472-.572 1.078 231.886z"
      />
      <path
        d="M417.934 252.213v.022l-18.12-.054-6.697-.022-5.512-.01-7.916-.022-3.16-.01-5.63-.011-2.923-.011h-1.219l-1.8-.011h-.033l-13.6-.032-2.46-.011-34.869-.097-6.266-.022-25.572-.075-3.44-.011h-1.381a.033.033 0 00.01-.022h-1.305l-5.241-.021-14.798-.033v.011l-7.14-.021-4.907-.011h-1.1l-15.283-.043V37.066L416.855 20.35v.572z"
        fill="#e6e6e6"
      />
      <circle cx={322.483} cy={9.025} r={7.55} opacity={0.2} />
      <circle cx={318.169} cy={9.025} r={7.55} fill="#3f3d56" />
      <path
        opacity={0.2}
        d="M263.008 9.449L381.27-.001l.687 8.601-118.262 9.45z"
      />
      <path
        fill="#e6e6e6"
        d="M258.694 9.449l118.262-9.45.687 8.601-118.262 9.45z"
      />
      <path
        d="M388.07 204.34c-6.34-24.03-9.717-25.885-9.717-25.885l-35.764-18-.237-.087-20.104 14.83-8.661-13.33-.431-.378s-.184.075-.54.215c-3.106 1.251-19.1 7.863-30.975 15.725l-.367-.053-14.01 6.967-2.513 9.286-2.902 10.71-9.987 46.399v.01l7.14.022v-.01l14.798.032 2.33-11.433 2.911 11.454h1.305a.033.033 0 01-.01.022h1.38l3.44.01 25.573.076 6.266.022 34.87.097 2.458.01 13.6.033h.033l1.801.01v-.032l.928-10.106.56-2.825 2.643 12.953.01.021 5.63.011 3.16.011 7.917.022 5.512.01v-.021c-1.521-10.279-5.716-37.954-8.046-46.798z"
        fill={color}
        opacity={0.56}
      />
      <path
        d="M357.029 133.11l.014.048c-.017.003-.02-.014-.014-.049-.143-.492-1.949-6.307-7.12-3.315-5.396 3.123-11.845-16.484-11.845-16.484s-16.244 4.47-26.16 3.786a6.141 6.141 0 01-1.954-.47 25.307 25.307 0 004.765 28.769L312.965 161l9 14 20-15s.253 3.818 1.072-9.258a25.327 25.327 0 0014.711-19.322c-.405.923-.688 1.522-.72 1.69z"
        fill="#ffb8b8"
        opacity={0.56}
      />
      <path
        d="M357.748 132.42c2.21-5.026 8.132-19.82-2.268-28.734-8.603-7.375-38.953-13.957-48.652 5.623a6.09 6.09 0 003.122 8.317c.14-.29.299-.568.45-.851a5.978 5.978 0 001.504.321c9.916.685 26.16-3.786 26.16-3.786s6.45 19.607 11.845 16.484c5.171-2.992 6.977 2.823 7.12 3.315.031-.167.314-.766.72-1.689a25.48 25.48 0 00.265-3.377c.005.199.016.396.016.596a25.473 25.473 0 01-.282 3.781z"
        fill="#2f2e41"
        opacity={0.56}
      />
      <ellipse
        cx={166.095}
        cy={631.342}
        rx={166.095}
        ry={25.885}
        fill="#e6e6e6"
      />
      <path
        fill="#3f3d56"
        d="M422.248 579.033l-36.131 41.826-.669.776-211.803-32.356V347.686h248.064l.539 231.347z"
      />
      <path
        fill="#e6e6e6"
        d="M194.595 440.976l.162-2.15 43.142 3.235-.162 2.15zM300.296 450.684l.154-2.15 45.298 3.235-.153 2.15z"
      />
      <path
        fill="#e6e6e6"
        d="M385.643 415.097l-212.472-12.943-.131 2.153 97.138 5.917 1.652 194.228 2.157-.019-1.65-194.077 113.175 6.894.131-2.153z"
      />
      <path
        opacity={0.2}
        d="M422.248 579.033l-36.131 41.826V347.686h35.592l.539 231.347z"
      />
      <path
        d="M188.205 352.54h-19.414v-12.943l51.77-9.707 3.236-6.471 202.765 5.393v18.335l-40.445 14.764-26.424-.743s-39.906 33.435-87.362 30.199-84.126-38.827-84.126-38.827z"
        fill="#e6e6e6"
      />
      <path
        d="M364.546 340.136l-11.324 8.09-31.72-.766c0 .01-.011 0-.011 0h-.054l-2.416-.054h-.01l-2.007-.054-6.33-.151-.53-.011-5.597-.13-.205-.01-6.956-.162-.453-.01-5.145-.13-.83-.011-6.04-.151-1.942-.043-10.86-.259-2.74-.065-28.862-.69s-20.568 1.025-21.538-4.95a2.939 2.939 0 01-.033-.443c0-3.397 3.581-4.12 6.968-4.033a31.445 31.445 0 015.975.798l8.283.205 5.166.118 16.21.4 13.86.334 4.907.13 7.022.172 2.782.064 10.333.248 4.831.12 10.203.247z"
        fill="#ccc"
      />
      <circle cx={304.148} cy={343.372} r={2.157} fill="#3f3d56" />
      <ellipse cx={305.227} cy={335.822} rx={20.492} ry={2.157} fill="#ccc" />
      <path
        d="M292.401 308.407l17.883 4.359-2.044 8.383-25.654-6.253.149-.61a8 8 0 019.666-5.879z"
        fill="#3f3d56"
      />
      <path
        d="M285.648 315.172l9.6 1.442-.048.311a4 4 0 01-4.55 3.361l-1.687-.253a4 4 0 01-3.362-4.55l.047-.31aNaN NaN 0 010-.001z"
        fill="#3f3d56"
      />
      <path
        d="M308.24 318.992l-13.411-3.27a4.3 4.3 0 01-4.49 2.36l-1.066-.16a4.3 4.3 0 01-3.648-4.442l-2.284-.557a8.617 8.617 0 00-.755 1.973l3.04.74a4.3 4.3 0 003.647 4.443l1.067.16a4.3 4.3 0 004.489-2.36l13.411 3.27 2.044-8.383-.497-.121z"
        opacity={0.2}
      />
      <path
        d="M305.979 336.9a7.876 7.876 0 01-7.866-8.29l1.182-22.448 14.56-.539v23.401a7.876 7.876 0 01-7.876 7.877z"
        fill="#3f3d56"
      />
      <path
        d="M312.776 306.162h-13.112c2.273-3.45.855-6.984-2.328-10.56a1.434 1.434 0 011.077-2.382h4.997c5.173 0 9.366 4.829 9.366 10.785z"
        fill="#3f3d56"
      />
      <path
        d="M301.65 295.603a1.434 1.434 0 011.077-2.383h-4.314a1.434 1.434 0 00-1.077 2.383c3.183 3.575 4.601 7.11 2.328 10.56h4.314c2.274-3.45.855-6.985-2.328-10.56z"
        opacity={0.2}
      />
      <path
        d="M239.42 318.876l16.588 5.862s39.456 3.148 34.336 13.184-38.888 3.552-38.888 3.552l-15.993-11.104z"
        fill="#ffb8b8"
      />
      <path
        d="M264.242 333.665a4.303 4.303 0 00-4.292 4.094 3.23 3.23 0 00-.811-.545 4.327 4.327 0 10-3.601.59 3.232 3.232 0 105.408 2.929 4.306 4.306 0 103.296-7.068z"
        fill="#fff"
      />
      <path
        d="M271.792 335.822a4.303 4.303 0 00-4.292 4.094 3.23 3.23 0 00-.811-.545 4.327 4.327 0 10-3.601.59 3.232 3.232 0 105.408 2.929 4.306 4.306 0 103.296-7.068z"
        fill="#fff"
      />
      <path
        d="M251.494 318.404l-15.013 24.795-31.57-21.193-36.26-24.332-21.862-57.4-22.229-40.704 27.86-8.207s9.587.366 21.98 23.113c12.381 22.757 23.415 62.145 23.415 62.145l14.808 11.53z"
        fill={color}
      />
      <path
        d="M251.494 318.404l-15.013 24.795-31.57-21.193-36.26-24.332-21.862-57.4-22.229-40.704 27.86-8.207s9.587.366 21.98 23.113c12.381 22.757 23.415 62.145 23.415 62.145l14.808 11.53z"
        opacity={0.2}
      />
      <path
        d="M321.437 347.46l-38.46-.917-3.053-3.462-2.157-2.449-2.362-2.674-2.62-2.966 4.464-6.924 2.125-3.3 8.607 5.65 6.104 4.002s5.113 1.704 11.196 4.271c5.651 2.395 12.155 5.544 16.156 8.769z"
        fill="#ffb8b8"
      />
      <circle cx={172.579} cy={123.477} r={26.373} fill="#ffb8b8" />
      <path
        d="M152.14 130.73l-2.637 38.24 32.966 3.956s0-31.647 2.637-35.603-32.966-6.593-32.966-6.593z"
        fill="#ffb8b8"
      />
      <path
        d="M225.324 180.179l-42.7-18.083s-20.399-15.74-32.364-4.103l-5.372 7.68s-32.72 17.591-32.72 32.096l3.71 73.395s-10.55 40.878 5.274 43.515l85.711 7.912s11.868-14.505 1.319-32.966l3.956-43.515z"
        fill={color}
      />
      <path
        d="M196.314 181.497l29.01-1.318s2.126 2.243 8.719 27.297 15.016 66.325 15.016 66.325l42.147 53.393-20.493 20.492-55.005-60.398-7.526-60.957z"
        fill={color}
      />
      <path
        d="M210.82 319.954l-94.806-8.342s-9.367 59.768-8.048 83.504 2.637 60.657 2.637 60.657l-10.549 160.873 40.878-5.275 5.274-133.182 17.142-72.524 19.78 92.304 13.186 118.677 35.603-3.956-11.867-143.731s10.549-129.226-9.23-149.005z"
        fill="#2f2e41"
      />
      <path
        d="M224.005 606.097l11.868 3.956s25.054-6.594 18.461 10.549-25.054 14.505-25.054 14.505-22.417 17.142-31.647 3.956l5.274-27.692zM127.745 606.097l11.868 3.956s25.054-6.594 18.46 10.549-25.053 14.505-25.053 14.505-22.417 17.142-31.647 3.956l5.274-27.692zM152.14 146.553s-27.691-19.78-13.186-43.514c10.062-16.467 30.914-15.163 42.742-12.82a19.983 19.983 0 0114.618 11.5c1.978 4.616 1.978 9.231-5.934 9.231-15.823 0-7.912 11.868-7.912 11.868s-10.549 2.637-7.911 11.868-22.417 11.867-22.417 11.867z"
        fill="#2f2e41"
      />
      <circle cx={320.326} cy={344.451} r={3.236} fill="#fff" />
      <path
        d="M317.09 342.293a4.284 4.284 0 00-1.606-3.354 4.334 4.334 0 00-2.708-.96c-.054 0-.097.011-.15.011a4.295 4.295 0 00-8.079-.723 3.198 3.198 0 00-4.088.971 37.284 37.284 0 01-9.253-2.416 4.287 4.287 0 00-3.872 2.438 4.11 4.11 0 00-.443 1.876 4.252 4.252 0 00.626 2.2 3.23 3.23 0 00-2.783 3.193 3.11 3.11 0 00.184 1.057l6.04.151a2.898 2.898 0 00.183-.615 4.44 4.44 0 00.647.626l5.145.13.29-.227a1.835 1.835 0 00.163.237l6.956.162a1.442 1.442 0 00.119-.151 1.181 1.181 0 00.086.162l5.598.129a3.181 3.181 0 00.431-1.208.436.436 0 00.097.054 3.421 3.421 0 00-.054.572 3.572 3.572 0 00.054.593l6.331.15a3.349 3.349 0 00.086-.743 3.253 3.253 0 00-.69-1.985 4.284 4.284 0 00.69-2.33zm-11.55-.086a3.3 3.3 0 01-.637.593c.065.162.097.335.151.496a3.075 3.075 0 01.96-.69 4.224 4.224 0 01-.475-.399z"
        fill="#fff"
      />
      <circle cx={349.447} cy={345.529} r={3.236} fill="#fff" />
      <path
        d="M346.211 343.372a4.284 4.284 0 00-1.607-3.354 4.333 4.333 0 00-2.707-.96c-.054 0-.097.01-.151.01a4.295 4.295 0 00-8.078-.722 3.198 3.198 0 00-4.088.97 37.284 37.284 0 01-9.254-2.415 4.287 4.287 0 00-3.872 2.437 4.11 4.11 0 00-.442 1.877 4.252 4.252 0 00.626 2.2 3.23 3.23 0 00-2.783 3.193 3.11 3.11 0 00.183 1.057l6.04.15a2.897 2.897 0 00.183-.614 4.44 4.44 0 00.648.625l5.144.13.291-.227a1.837 1.837 0 00.162.238l6.957.161a1.443 1.443 0 00.118-.15 1.181 1.181 0 00.087.161l5.597.13a3.181 3.181 0 00.432-1.208.436.436 0 00.097.053 3.42 3.42 0 00-.054.572 3.57 3.57 0 00.054.593l6.33.151a3.349 3.349 0 00.087-.744 3.253 3.253 0 00-.69-1.984 4.284 4.284 0 00.69-2.33zm-11.551-.086a3.3 3.3 0 01-.636.593c.064.162.097.334.15.496a3.075 3.075 0 01.96-.69 4.224 4.224 0 01-.474-.4z"
        fill="#fff"
      />
      <circle cx={302.8} cy={344.181} r={2.427} fill="#fff" />
      <path
        d="M300.373 342.563a3.213 3.213 0 00-1.205-2.516 3.25 3.25 0 00-2.03-.72c-.04 0-.073.009-.114.009a3.221 3.221 0 00-6.058-.542 2.398 2.398 0 00-3.066.728 27.964 27.964 0 01-6.94-1.812 3.216 3.216 0 00-2.905 1.828 3.083 3.083 0 00-.331 1.407 3.189 3.189 0 00.469 1.65 2.423 2.423 0 00-2.087 2.395 2.332 2.332 0 00.137.792l4.53.114a2.173 2.173 0 00.138-.461 3.33 3.33 0 00.485.469l3.859.097.218-.17a1.375 1.375 0 00.121.178l5.218.121a1.08 1.08 0 00.089-.113.887.887 0 00.065.121l4.198.097a2.386 2.386 0 00.323-.906.327.327 0 00.073.04 2.566 2.566 0 00-.04.43 2.679 2.679 0 00.04.445l4.748.113a2.512 2.512 0 00.065-.558 2.44 2.44 0 00-.518-1.489 3.213 3.213 0 00.518-1.747zm-8.663-.065a2.474 2.474 0 01-.477.445c.048.122.072.251.113.372a2.306 2.306 0 01.72-.517 3.168 3.168 0 01-.356-.3z"
        fill="#fff"
      />
      <circle cx={268.287} cy={344.181} r={2.427} fill="#fff" />
      <path
        d="M265.86 342.563a3.213 3.213 0 00-1.205-2.516 3.25 3.25 0 00-2.03-.72c-.041 0-.074.009-.114.009a3.221 3.221 0 00-6.059-.542 2.398 2.398 0 00-3.065.728 27.964 27.964 0 01-6.94-1.812 3.216 3.216 0 00-2.905 1.828 3.083 3.083 0 00-.331 1.407 3.189 3.189 0 00.469 1.65 2.423 2.423 0 00-2.087 2.395 2.333 2.333 0 00.137.792l4.53.114a2.173 2.173 0 00.138-.461 3.33 3.33 0 00.485.469l3.858.097.219-.17a1.375 1.375 0 00.121.178l5.218.121a1.08 1.08 0 00.089-.113.886.886 0 00.064.121l4.199.097a2.386 2.386 0 00.323-.906.327.327 0 00.073.04 2.565 2.565 0 00-.04.43 2.678 2.678 0 00.04.445l4.748.113a2.511 2.511 0 00.065-.558 2.44 2.44 0 00-.518-1.489 3.213 3.213 0 00.518-1.747zm-8.663-.065a2.474 2.474 0 01-.478.445c.049.122.073.251.114.372a2.306 2.306 0 01.72-.517 3.169 3.169 0 01-.356-.3z"
        fill="#fff"
      />
      <path
        d="M381.533 311.49v-6.471h-5.392v1.078c-.596 0-1.079.725-1.079 1.618s.483 1.618 1.079 1.618v2.157h-4.315v21.57h14.021v-21.57z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgWashHands.propTypes = {
  color: PropTypes.string
};
SvgWashHands.defaultProps = {
  color: "primary"
};
export default SvgWashHands;
