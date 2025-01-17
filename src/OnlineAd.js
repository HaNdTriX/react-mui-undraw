import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgOnlineAd = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1061 530.892"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M828.793 99.727h-260.17v-5.362h-117.97v5.362H189.41a17.599 17.599 0 00-17.598 17.599v356.252a17.599 17.599 0 0017.598 17.598h639.383a17.599 17.599 0 0017.598-17.598V117.326a17.599 17.599 0 00-17.598-17.599z"
        fill="#3f3d56"
      />
      <path opacity={0.1} d="M195.406 130.828h627.391v353.913H195.406z" />
      <circle cx={508.565} cy={114.742} r={6.435} fill={color} />
      <path
        d="M864.007 478.307h-61.23v-4.412a.875.875 0 00-.874-.875H780.91a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.874.875v4.412h-13.121v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.874.875v4.412h-13.12v-4.412a.875.875 0 00-.876-.875h-20.992a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875H422.28a.875.875 0 00-.874.875v4.412h-13.12v-4.412a.875.875 0 00-.876-.875h-20.993a.875.875 0 00-.874.875v4.412h-13.12v-4.412a.875.875 0 00-.876-.875h-20.992a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875H278.83a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-13.12v-4.412a.875.875 0 00-.875-.875h-20.993a.875.875 0 00-.875.875v4.412h-40.236A20.993 20.993 0 00145 499.3v9.492a20.993 20.993 0 0020.993 20.993h698.014A20.993 20.993 0 00885 508.792V499.3a20.993 20.993 0 00-20.993-20.993z"
        fill="#3f3d56"
      />
      <path fill={color} d="M382.209 171h254v267h-254z" />
      <path
        d="M516.55 159.916s-21.658-7.735-35.581 23.205-35.582 64.975-35.582 64.975l12.376 3.094s3.094-21.658 10.83-24.752l-3.095 27.846s92.822 32.488 134.591-3.094l-1.547-10.829s6.188 1.547 6.188 10.83l4.641-4.642s-4.64-9.282-18.564-21.658c-9.138-8.123-12.279-23.578-13.358-33.24a40.224 40.224 0 00-9.26-21.905c-9.253-10.723-26.113-22.12-51.639-9.83z"
        fill="#2f2e41"
      />
      <path
        d="M396.871 189.107l-9-94s-18-51 9-47 11 43 11 43l15 98z"
        fill="#ffb9b9"
      />
      <circle cx={527.871} cy={223.107} r={36} fill="#ffb9b9" />
      <path
        d="M501.871 239.107s-2 41-12 44-38 36-25 46 88 3 88 3l-7-52s-16-11-3-30z"
        fill="#ffb9b9"
      />
      <path
        d="M576.94 440h-141.4c.51-9.05 1.79-21.83 3.43-35.88.5-4.26 1.03-8.65 1.58-13.08 4.849-39.05 11.319-81.93 11.319-81.93l1.7-3.93 17.3-40.07.18.07 22.82 8.93.81 3.84 6.19 29.16 40.05-32.33 36.95-5.78 2.5-.39 4.5 42.5s-.2 9.5-.41 23.03c-.24 15.55-.5 36.43-.48 54.32.01 8.55.08 16.42.25 22.7.14 5.29.35 9.46.64 11.95.67 5.67-2.89 11.56-7.93 16.89z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M471.871 270.107l-1-6-28-34-16-57-39 15 28 69 40 51 16-38z"
      />
      <path
        d="M480.577 227.412s12.376-17.017 23.205-20.111 12.376-18.564 12.376-18.564 27.847 30.94 44.864 32.487 1.547-37.128 1.547-37.128l-30.94-7.735-29.394 3.094-23.205 15.47z"
        fill="#2f2e41"
      />
      <path
        d="M580.21 406l-95.673 3.795s-52.72 12.068-45.668-14.3 43.974-6.026 43.974-6.026l99.071-3.729z"
        fill="#ffb9b9"
      />
      <path
        d="M569.371 275.607l9-7s15-8 18 20 25 121 3 122-78 2-78 2l6-31 46-3z"
        fill="#3f3d56"
      />
      <path opacity={0.15} d="M572.371 318.607l-3 57-44 9 40-16 7-50z" />
      <path fill={color} d="M286.9 0h244v64h-244z" />
      <path fill="#3f3d56" d="M0 528.892h1061v2H0z" />
      <path
        d="M957.957 459.029c14.376 15.426 15.12 38.1 15.12 38.1s-22.566-2.338-36.942-17.764-15.119-38.1-15.119-38.1 22.565 2.337 36.941 17.764z"
        fill={color}
      />
      <path
        d="M1003.214 483.107c-15.426 14.376-38.1 15.12-38.1 15.12s2.338-22.565 17.764-36.941 38.1-15.12 38.1-15.12-2.337 22.566-17.764 36.941z"
        fill={color}
      />
      <path
        d="M999.38 528.892h-56.739a5.803 5.803 0 01-5.219-3.264l-12.353-25.393a5.803 5.803 0 015.219-8.343h81.446a5.803 5.803 0 015.218 8.343l-12.353 25.393a5.803 5.803 0 01-5.219 3.264z"
        fill="#3f3d56"
      />
      <path
        d="M60.957 459.029c14.376 15.426 15.12 38.1 15.12 38.1s-22.566-2.338-36.942-17.764-15.119-38.1-15.119-38.1 22.565 2.337 36.941 17.764z"
        fill={color}
      />
      <path
        d="M93.38 528.892H36.641a5.803 5.803 0 01-5.219-3.264L19.07 500.235a5.803 5.803 0 015.219-8.343h81.446a5.803 5.803 0 015.218 8.343L98.6 525.628a5.803 5.803 0 01-5.219 3.264z"
        fill="#3f3d56"
      />
      <path fill="#fff" d="M317.9 25.723h182v12.554h-182z" />
    </svg>
  );
};

SvgOnlineAd.propTypes = {
  color: PropTypes.string
};
SvgOnlineAd.defaultProps = {
  color: "primary"
};
export default SvgOnlineAd;
