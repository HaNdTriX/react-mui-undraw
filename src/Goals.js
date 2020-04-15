import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgGoals = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 989.07 610.336"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#f2f2f2"
        d="M344.937-.002l644.127 381.685-19.372 32.69L325.566 32.69zM204.938 31.998l644.126 381.684-19.371 32.692L185.566 64.69zM80.938 66.998l644.127 381.684-19.372 32.692L61.567 99.69z"
      />
      <circle cx={569.511} cy={245.756} r={201.669} fill="#3f3d56" />
      <path
        d="M569.51 282.582a35.95 35.95 0 1135.95-35.95 35.99 35.99 0 01-35.95 35.95zm0-70.145a34.196 34.196 0 1034.197 34.196 34.234 34.234 0 00-34.196-34.196z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M569.51 315.025a68.392 68.392 0 1168.393-68.392 68.47 68.47 0 01-68.392 68.392zm0-135.03a66.638 66.638 0 1066.639 66.638 66.714 66.714 0 00-66.638-66.638z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M569.51 343.083a96.45 96.45 0 1196.45-96.45 96.56 96.56 0 01-96.45 96.45zm0-191.147a94.697 94.697 0 1094.697 94.697 94.804 94.804 0 00-94.696-94.697z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M569.51 379.91c-73.488 0-133.276-59.788-133.276-133.277 0-73.489 59.788-133.277 133.277-133.277 73.489 0 133.276 59.788 133.276 133.277 0 73.49-59.787 133.276-133.276 133.276zm0-264.8c-72.522 0-131.522 59-131.522 131.523 0 72.522 59 131.523 131.523 131.523 72.521 0 131.523-59.001 131.523-131.523 0-72.522-59.002-131.523-131.523-131.523z"
        fill={color}
        opacity={0.3}
      />
      <path
        d="M569.51 410.598c-90.41 0-163.965-73.554-163.965-163.965S479.1 82.668 569.511 82.668s163.965 73.554 163.965 163.965-73.554 163.965-163.965 163.965zm0-326.177c-89.443 0-162.211 72.768-162.211 162.212 0 89.444 72.768 162.211 162.212 162.211 89.444 0 162.211-72.767 162.211-162.211 0-89.444-72.767-162.212-162.211-162.212z"
        fill={color}
        opacity={0.3}
      />
      <circle cx={569.511} cy={245.756} r={16.66} fill={color} opacity={0.3} />
      <circle cx={612.475} cy={293.981} r={16.66} fill={color} opacity={0.3} />
      <circle cx={495.858} cy={286.967} r={16.66} fill={color} opacity={0.3} />
      <circle cx={569.511} cy={245.756} r={7.891} fill="#2f2e41" />
      <circle cx={495.858} cy={286.967} r={7.891} fill="#2f2e41" />
      <circle cx={612.475} cy={294.858} r={7.891} fill="#2f2e41" />
      <circle cx={937.775} cy={157.197} r={7.891} fill={color} />
      <path
        fill="#2f2e41"
        d="M569.949 246.194h-1.754v-90.312h348.098v1.754H569.949v88.558z"
      />
      <path
        d="M937.775 179.995a22.797 22.797 0 1122.797-22.798 22.823 22.823 0 01-22.797 22.798zm0-43.841a21.044 21.044 0 1021.044 21.043 21.068 21.068 0 00-21.044-21.043z"
        fill="#2f2e41"
      />
      <circle cx={885.166} cy={384.294} r={7.891} fill={color} />
      <path
        d="M885.166 407.09a22.797 22.797 0 1122.797-22.796 22.823 22.823 0 01-22.797 22.797zm0-43.84a21.044 21.044 0 1021.043 21.044 21.068 21.068 0 00-21.043-21.044z"
        fill="#2f2e41"
      />
      <circle cx={251.225} cy={194.024} r={7.891} fill={color} />
      <path
        d="M251.225 216.821a22.797 22.797 0 1122.797-22.797 22.823 22.823 0 01-22.797 22.797zm0-43.841a21.044 21.044 0 1021.044 21.044 21.068 21.068 0 00-21.044-21.044z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M496.735 286.967h-1.754v-88.573L273.132 194.9l.027-1.753 223.576 3.521v90.299zM863.245 385.17H611.598v-90.312h1.754v88.559h249.893v1.753zM889.55 198.408H986v6.138h-96.45zM889.55 215.944H986v6.138h-96.45zM889.55 233.481H986v6.138h-96.45zM836.941 425.504h96.45v6.138h-96.45zM836.941 443.04h96.45v6.138h-96.45zM836.941 460.577h96.45v6.138h-96.45zM203 236.111h96.45v6.138H203zM203 253.647h96.45v6.138H203zM203 271.184h96.45v6.138H203z"
      />
      <ellipse
        cx={577.402}
        cy={575.447}
        rx={192.024}
        ry={6.138}
        fill="#f2f2f2"
      />
      <path fill="#2f2e41" d="M0 608.336h648v2H0z" />
      <path
        d="M73.991 179.187s9.179 26.123 3.53 30.142 19.064 36.842 19.064 36.842l29.654-8.039-16.24-27.463s-2.118-27.463-2.118-31.482-33.89 0-33.89 0z"
        fill="#ffb8b8"
      />
      <path
        d="M73.991 179.187s9.179 26.123 3.53 30.142 19.064 36.842 19.064 36.842l29.654-8.039-16.24-27.463s-2.118-27.463-2.118-31.482-33.89 0-33.89 0z"
        opacity={0.1}
      />
      <path
        d="M58.585 365.402s-2.68 33.492 0 50.907 6.698 65.645 6.698 65.645 0 91.098 14.737 92.437 25.454 2.68 26.793-2.68-6.698-8.037-2.68-10.716 5.36-12.058 0-22.775 0-119.231 0-119.231l25.455 68.323s2.68 56.267 5.358 64.305-2.679 22.774 6.699 24.114 20.095-6.698 25.454-9.378-8.038-2.68-5.36-4.019 10.718-5.358 8.039-6.698-5.359-65.644-5.359-65.644-7.368-137.317-16.746-142.676-15.406 3.872-15.406 3.872z"
        fill="#2f2e41"
      />
      <path
        d="M82.699 569.033v10.717s-12.057 29.133 0 29.133 21.435 3.02 21.435-1v-36.171zM161.74 569.014v10.717s12.057 29.133 0 29.133-21.435 3.02-21.435-1v-36.171z"
        fill="#2f2e41"
      />
      <circle cx={92.747} cy={174.498} r={24.114} fill="#ffb8b8" />
      <path
        d="M85.378 219.377s6.699 20.095 17.416 16.076l10.718-4.019 18.755 128.609s-14.736 21.435-36.171 8.038-10.718-148.704-10.718-148.704z"
        fill="#d0cde1"
      />
      <path
        d="M104.134 215.358l6.028-12.727s35.502 16.746 40.86 22.105 5.36 13.396 5.36 13.396l-9.378 33.492s2.679 73.683 2.679 76.362 9.378 17.416 2.68 12.057-8.039-10.717-13.398-2.68-17.415 17.416-17.415 17.416z"
        fill="#3f3d56"
      />
      <path
        d="M151.023 311.815l-4.02 37.51S122.89 370.76 128.249 372.1s8.038-4.019 8.038-4.019 9.378 9.378 14.737 4.02 18.755-56.267 18.755-56.267z"
        fill="#ffb8b8"
      />
      <path
        d="M93.26 140.418c-5.346-.191-11.066-.286-15.574 2.595a22.8 22.8 0 00-5.382 5.269c-4.39 5.55-8.183 12.532-6.552 19.417l1.894-.739a12.401 12.401 0 01-1.197 5.314c.267-.776 1.16.478.921 1.262l-2.086 6.845a6.444 6.444 0 018.218 4.903c.238-7.95 1.063-17.065 7.512-21.72 3.252-2.348 7.368-3.064 11.328-3.7 3.653-.588 7.483-1.147 10.982.055s6.479 4.782 5.685 8.396c1.614-.556 3.418.568 4.216 2.077a10.912 10.912 0 01.863 4.995c1.72 1.215 3.677-1.198 4.378-3.184 1.645-4.662 3.107-9.624 2.221-14.487s-4.85-9.511-9.793-9.528a3.433 3.433 0 00.893-2.416l-4.074-.344a4.503 4.503 0 002.69-1.42c-1.635 1.8-14.497-3.496-17.143-3.59z"
        fill="#2f2e41"
      />
      <path
        d="M92.077 211.339s-10.906-10.687-14.83-10.032-9.284 10.032-9.284 10.032-32.153 10.717-30.813 21.435 16.076 62.965 16.076 62.965 12.057 62.964 1.34 69.663 50.908 24.114 52.247 16.076 4.02-88.419 0-100.476-14.736-69.663-14.736-69.663z"
        fill="#3f3d56"
      />
      <path
        d="M49.207 323.872l18.756 8.038s36.17 5.358 36.17-9.378-36.17-6.698-36.17-6.698l-12.058-3.856z"
        fill="#ffb8b8"
      />
      <path
        d="M138.965 232.774h16.566s11.568 50.907 12.907 56.266 4.02 30.813 2.68 30.813-28.134-5.359-28.134-1.34zM53.226 224.736l-16.076 4.019-12.057 71.003s-4.019 18.755 2.68 20.095 25.453 12.057 25.453 12.057 2.68-20.095 8.038-20.095l-13.397-10.718 8.038-46.888zM509 569.336h-26v-26h26zm-24-2h22v-22h-22z"
        fill="#3f3d56"
      />
      <circle cx={525} cy={559.336} r={10} fill={color} />
    </svg>
  );
};

SvgGoals.propTypes = {
  color: PropTypes.string
};
SvgGoals.defaultProps = {
  color: "primary"
};
export default SvgGoals;
