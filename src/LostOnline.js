import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgLostOnline = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 887 793"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={719.917} cy={768} rx={167.083} ry={25} fill="#e6e6e6" />
      <path d="M0 0h886a734 734 0 01-734 734H0V0z" fill="#3f3d56" />
      <circle cx={652.859} cy={178.425} r={71.883} fill="#f2f2f2" />
      <circle cx={432.075} cy={32.605} r={6.161} fill="#ff6584" />
      <circle cx={632.321} cy={445.419} r={6.161} fill="#ff6584" />
      <circle cx={652.859} cy={32.605} r={6.161} fill="#f2f2f2" />
      <circle cx={739.119} cy={329.38} r={6.161} fill="#f2f2f2" />
      <circle cx={493.689} cy={198.963} r={6.161} fill="#f2f2f2" />
      <circle cx={168.161} cy={157.887} r={6.161} fill="#f2f2f2" />
      <circle cx={284.201} cy={413.585} r={209.488} fill={color} />
      <circle cx={274.959} cy={328.353} r={30.807} opacity={0.2} />
      <circle cx={274.959} cy={534.76} r={53.399} opacity={0.2} />
      <circle cx={119.897} cy={453.635} r={13.35} opacity={0.2} />
      <circle cx={646.606} cy={141.346} r={7.097} opacity={0.2} />
      <circle cx={345.724} cy={282.032} r={7.097} opacity={0.2} />
      <circle cx={265.717} cy={422.828} r={9.242} opacity={0.2} />
      <circle cx={629.332} cy={198.046} r={7.097} opacity={0.2} />
      <circle cx={438.328} cy={372.619} r={7.097} opacity={0.2} />
      <circle cx={692.927} cy={191.353} r={10.251} opacity={0.2} />
      <circle cx={379.721} cy={444.998} r={10.251} opacity={0.2} />
      <circle cx={154.812} cy={328.353} r={13.35} opacity={0.2} />
      <path
        d="M329.59 534.338a586.023 586.023 0 01-65.93-3.81c-65.83-7.476-126.545-25.142-170.959-49.743-44.957-24.902-67.962-54.06-64.777-82.104 2.206-19.429 20.985-36.819 57.41-53.162a2.054 2.054 0 011.682 3.749c-34.988 15.697-52.982 32.012-55.01 49.877-2.986 26.285 19.277 54.002 62.686 78.047 43.952 24.346 104.124 41.837 169.432 49.254 65.308 7.417 127.869 3.863 176.161-10.006 47.696-13.699 75.607-35.718 78.591-62.003 2.02-17.782-7.775-36.637-28.325-54.526a2.054 2.054 0 012.698-3.099c21.615 18.817 31.888 38.904 29.709 58.088-3.185 28.043-32.142 51.301-81.538 65.487-32.162 9.237-70.55 13.95-111.83 13.95z"
        fill="#fff"
      />
      <path
        fill="#ffb8b8"
        d="M651.786 721.101l1.455 13.1-13.099-1.456v-16.011l11.644 4.367zM788.607 721.101l-1.456 13.1 13.1-1.456v-16.011l-11.644 4.367z"
      />
      <path
        d="M650.33 438.726l-5.822 149.92s-18.922 112.077-14.555 114.989 0 18.922 0 18.922l24.744 2.91s0-11.644 5.822-16.01 59.677-209.599 59.677-209.599l55.311 197.954s-1.455 11.645 2.911 11.645 5.822 16.01 5.822 16.01h24.745v-16.01s7.277-1.456 2.91-13.1-20.377-257.631-20.377-257.631z"
        fill="#2f2e41"
      />
      <path
        d="M643.053 721.101s-7.278-4.367-10.19-1.456-26.199 32.022-26.199 32.022-32.022 20.378-2.911 26.2 50.944-21.833 52.4-24.744-1.456-26.2-2.912-23.289-5.822 1.456-7.277 0-2.911-8.733-2.911-8.733zM797.34 721.101s7.278-4.367 10.19-1.456 26.199 32.022 26.199 32.022 32.022 20.378 2.91 26.2-50.943-21.833-52.399-24.744 1.456-26.2 2.911-23.289 5.823 1.456 7.278 0 2.911-8.733 2.911-8.733z"
        fill="#2f2e41"
      />
      <circle cx={738.391} cy={193.466} r={29.839} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M718.741 210.205l-4.367 45.122 34.933 7.278 8.734-53.855-39.3 1.455z"
      />
      <path
        d="M755.13 245.138s-8.734 18.922-40.756-1.455l-59.677 195.043s80.055 48.032 130.999 11.644L768.229 253.87z"
        fill="#575a89"
      />
      <path
        d="M720.196 223.305l-27.655-4.367-2.911 18.922s-37.844 4.367-42.21 18.923l4.366 107.71s-13.1 23.288-1.456 37.844c0 0-18.922 39.3-4.366 46.577 0 0 33.477-16.01 53.855-11.644 0 0 11.644-2.911 11.644-11.644s8.733-202.321 8.733-202.321zM753.674 226.216l16.01 4.367 1.456 20.377s39.3 24.745 40.756 39.3-29.111 84.422-29.111 84.422 11.644 20.377 7.278 33.477c0 0 18.922 37.844 7.277 48.033 0 0-21.833 5.822-24.744-2.911s-29.11-109.166-17.466-157.199c0 0-11.645-61.133-1.456-69.866z"
        fill="#2f2e41"
      />
      <path
        d="M770.413 273.618h-.548V258.61a8.686 8.686 0 00-8.687-8.686h-31.797a8.686 8.686 0 00-8.686 8.686v82.337a8.686 8.686 0 008.686 8.686h31.797a8.686 8.686 0 008.687-8.686v-56.645h.548z"
        fill="#fff"
      />
      <path
        d="M784.24 332.47s-11.644-37.843-29.11-26.199 11.644 43.666 11.644 43.666zM704.185 304.815s20.378-24.744 30.567-13.1-17.467 37.845-17.467 37.845z"
        fill="#ffb8b8"
      />
      <path
        d="M651.786 255.327s-7.278-1.456-11.644 11.644-20.378 62.589-20.378 71.322 5.822 43.666 37.844 37.844 69.866-46.577 69.866-46.577l-20.377-30.567-43.667 26.2z"
        fill="#2f2e41"
      />
      <path
        opacity={0.1}
        d="M658.075 293.062l6.083 31.403 45.122-26.199-42.211 16.011-9.306-23.089.312 1.874zM786.424 324.465l5.822 4.367 2.911-20.378-8.733 16.011zM651.058 379.776s42.753-11.63 62.86-37.11c0 0-20.65 34.199-62.86 37.11zM758.768 353.576s9.003 44.06 32.157 45.319c0 0-27.79 8.536-32.157-45.319z"
      />
      <path
        d="M806.074 284.438s4.366 2.911 7.277 16.01 21.833 62.59 14.556 74.234-18.922 37.844-43.667 20.377l-24.744-45.122 24.744-23.288 10.19 7.277zM709.746 201.034s-25.025-40.558 1.63-42.667a67.956 67.956 0 0025.562-6.965c8.835-4.496 19.957-7.914 25.875-.993a43.978 43.978 0 008.947 8.288c5.199 3.448 11.214 9.038 7.883 15.033l-5.46 9.83-7.646 19.658c1.78-8.479 1.825-15.598-2.73-19.112 0 0-25.416 10.816-38.225-8.737-14.339-10.759-18.9 23.104-15.836 25.665z"
        fill="#2f2e41"
      />
      <circle cx={745.668} cy={279.343} r={7.278} fill={color} />
    </svg>
  );
};

SvgLostOnline.propTypes = {
  color: PropTypes.string
};
SvgLostOnline.defaultProps = {
  color: "primary"
};
export default SvgLostOnline;