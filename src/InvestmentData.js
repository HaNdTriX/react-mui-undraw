import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgInvestmentData = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 572.011"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#e6e6e6"
        d="M39.5 318.709h6v5h-6zM613.03 323.709h-11.824v-5h11.823zm-23.647 0h-11.824v-5h11.824zm-23.648 0h-11.823v-5h11.823zm-23.646 0h-11.824v-5h11.824zm-23.648 0h-11.823v-5h11.823zm-23.647 0H482.97v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5H447.5zm-23.647 0H412.03v-5h11.823zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0H246.5v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.648 0H175.56v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0H80.971v-5h11.823zm-23.647 0H57.324v-5h11.823zM39.5 191.709h6v5h-6zM613.03 196.709h-11.824v-5h11.823zm-23.647 0h-11.824v-5h11.824zm-23.648 0h-11.823v-5h11.823zm-23.646 0h-11.824v-5h11.824zm-23.648 0h-11.823v-5h11.823zm-23.647 0H482.97v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5H447.5zm-23.647 0H412.03v-5h11.823zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0H246.5v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.648 0H175.56v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0H80.971v-5h11.823zm-23.647 0H57.324v-5h11.823zM39.5 64.709h6v5h-6zM613.03 69.709h-11.824v-5h11.823zm-23.647 0h-11.824v-5h11.824zm-23.648 0h-11.823v-5h11.823zm-23.646 0h-11.824v-5h11.824zm-23.648 0h-11.823v-5h11.823zm-23.647 0H482.97v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5H447.5zm-23.647 0H412.03v-5h11.823zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0H246.5v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.647 0h-11.824v-5h11.824zm-23.648 0H175.56v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0h-11.823v-5h11.823zm-23.647 0H80.971v-5h11.823zm-23.647 0H57.324v-5h11.823z"
      />
      <path fill="#3f3d56" d="M186 320.209h49v180h-49z" />
      <path fill={color} d="M195 320.209h49v180h-49z" />
      <path fill="#3f3d56" d="M302 193.209h49v307h-49z" />
      <path fill={color} d="M311 193.209h49v307h-49z" />
      <path fill="#3f3d56" d="M418 66.209h49v434h-49z" />
      <path fill={color} d="M427 66.209h49v434h-49z" />
      <circle cx={40} cy={67.209} r={12} fill="#e6e6e6" />
      <circle cx={40} cy={194.209} r={12} fill="#e6e6e6" />
      <circle cx={40} cy={321.209} r={12} fill="#e6e6e6" />
      <path fill="#3f3d56" d="M0 499.088h888v2.241H0z" />
      <circle cx={756.344} cy={59.795} r={34.037} fill="#2f2e41" />
      <path
        d="M674.01 283.797l-1.839 11.039s-10.12 37.717 2.76 35.877 8.28-34.037 8.28-34.037l1.839-10.12z"
        fill="#ffb9b9"
      />
      <path
        d="M787.622 231.821h-74.514s-21.159 33.117-12.88 91.072 4.6 187.665 4.6 187.665h28.518l19.318-203.303 40.477 203.303 26.678-2.76-14.719-234.58z"
        fill="#2f2e41"
      />
      <path
        d="M712.648 507.338l-.92 34.038s-11.96 34.037 5.52 30.357 19.318-11.039 19.318-13.799-4.6-50.596-4.6-50.596zM815.144 504.752l5.267 36.4s16.215 32.228-1.59 30.814-20.573-8.477-20.926-11.214-1.91-53.528-1.91-53.528z"
        fill="#2f2e41"
      />
      <circle cx={756.804} cy={68.534} r={24.838} fill="#ffb9b9" />
      <path
        fill="#ffb9b9"
        d="M775.663 79.114l10.119 34.957-20.239 20.238-11.039-19.318-3.679-27.598 24.838-8.279z"
      />
      <path
        d="M784.402 102.572s-1.355-9.279-4.357-8.32-29.68 7.4-29.68 10.16v11.958l-22.079 85.553-5.52 34.958 57.956-.92 9.2-121.43z"
        fill="#e6e6e6"
      />
      <path
        d="M779.342 92.912l6.44 1.84 10.579 10.58s25.758-4.6 29.437 7.359-20.238 160.987-20.238 160.987-40.477 13.798-46.916-21.159-5.98-64.854 6.9-86.933 13.798-72.674 13.798-72.674zM752.655 101.121l-3.67 1.91-3.22 14.26s-26.678 7.359-28.518 17.478.92 65.315.92 65.315-25.758 52.435-21.158 74.513c0 0 11.04 9.2 19.318-2.76s28.518-83.712 29.438-88.312 11.02-81.094 6.89-82.404z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M727.367 131.089l-9.851 2.671-6.708 19.407-13.799 49.676-26.678 81.874 18.399 8.279 29.437-59.795 9.2-102.112zM775.663 65.315c-15.816-5.705-21.168-9.21-38.637 0l-6.44-25.758h51.516z"
      />
      <circle cx={753.584} cy={23.918} r={19.318} fill="#2f2e41" />
      <path
        d="M730.586 19.318A19.302 19.302 0 01748.985.046c-.307-.014-.61-.046-.92-.046a19.318 19.318 0 100 38.637c.31 0 .613-.032.92-.047a19.302 19.302 0 01-18.399-19.272z"
        fill="#2f2e41"
      />
      <path fill={color} d="M715.625 287.107h71.754v30.534h-71.754z" />
      <path opacity={0.1} d="M715.625 287.107h71.754v30.534h-71.754z" />
      <circle cx={751.502} cy={302.374} r={8.397} opacity={0.2} />
      <path
        opacity={0.2}
        d="M732.419 315.351h-13.74v-25.954h14.503v1.527h-12.977v22.9h12.214v1.527zM784.326 315.351h-13.74v-1.527h12.213v-22.9h-12.976v-1.527h14.503v25.954z"
      />
      <path
        fill={color}
        d="M709.946 311.373l68.493-21.387 9.1 29.146-68.492 21.387z"
      />
      <circle cx={748.743} cy={315.253} r={8.397} opacity={0.2} />
      <path
        opacity={0.2}
        d="M734.394 333.328l-13.115 4.095-7.736-24.773 13.844-4.323.455 1.457-12.387 3.868 6.826 21.859 11.658-3.64.455 1.457zM783.942 317.856l-13.115 4.096-.455-1.458 11.658-3.64-6.826-21.859-12.387 3.868-.455-1.458 13.844-4.323 7.736 24.774z"
      />
      <path
        d="M787.296 268.572l-4.211 10.369s-11.122 37.433-21.133 29.124 10.764-33.335 10.764-33.335l3.73-9.585z"
        fill="#ffb9b9"
      />
      <path
        d="M812.92 115.45l12.878-2.76a134.89 134.89 0 014.44 16.56c1.84 9.199-1 81.873-2.84 89.232s-35.2 56.395-35.2 56.395l-30.02-6.514 43.382-65.52z"
        fill="#2f2e41"
      />
      <path opacity={0.2} d="M806 162.209l-8 44-30 61 27-64 11-41z" />
    </svg>
  );
};

SvgInvestmentData.propTypes = {
  color: PropTypes.string
};
SvgInvestmentData.defaultProps = {
  color: "primary"
};
export default SvgInvestmentData;
