import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBodyText = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1031 649.973"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M0 519.299h1031v2H0z" />
      <path fill={color} d="M550 223.299h384v368H550z" />
      <path fill="#3f3d56" d="M522 590.299h475v2H522z" />
      <path fill="#f2f2f2" d="M665.817 359.988H775.97v128.333H665.817z" />
      <path
        d="M818.747 489.391h-154v-154h154zm-151.86-2.139h149.722V337.53H666.886z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M696.831 380.308h94.111v2.139h-94.111zM696.831 403.836h94.111v2.139h-94.111zM696.831 427.363h94.111v2.139h-94.111zM440.454 74.299H898v2H440.454zM96 403.299h251v2H96z"
      />
      <path fill={color} d="M13 157.299h361v223H13z" />
      <path fill="#f2f2f2" d="M61 225.133h222v110.165H61z" />
      <path d="M328 336.299H60v-134h268zm-266-2h264v-130H62z" fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M100.031 258.216h143.938v2H100.031zM100.031 279.216h143.938v2H100.031zM100.031 300.216h143.938v2H100.031z"
      />
      <path
        d="M467.245 152.899c-11.607-19.612-34.57-20.526-34.57-20.526s-22.377-2.862-36.732 27.008c-13.379 27.84-31.844 54.721-2.972 61.239l5.215-16.232 3.23 17.44a112.967 112.967 0 0012.353.211c30.92-.998 60.366.292 59.417-10.803-1.26-14.75 5.227-39.467-5.941-58.337z"
        fill="#2f2e41"
      />
      <path
        d="M425.445 189.832s15 21 6 38 21 35 21 35l22-48s-26-17-19-33z"
        fill="#fbbebe"
      />
      <circle cx={435.445} cy={172.832} r={26} fill="#fbbebe" />
      <path
        d="M345.466 202.888l21.728-28.033s7.65-29.385 18.731-27.896-4.377 35.24-4.377 35.24l-21.589 31.03zM455.445 575.832l7 37 15 4-4-44-18 3zM606.445 535.832l27 37 11 5 9-15-27-35-20 8z"
        fill="#fbbebe"
      />
      <path
        d="M449.445 246.832l-16.68-21.959s-32.32 5.96-35.32 8.96 8 58 8 58 2 15 11 23l9 6 74-15 2.783-32.926a86.41 86.41 0 00-22.783-66.074l-12.875 1.76z"
        fill="#575a89"
      />
      <path
        d="M401.445 235.832l-5-2-23-2s-8-2-6-6 4-5 0-6-5-2-4-5 7-9 7-9l-17-14s-.92.651-2.407 1.855c-8.44 6.834-35.147 31.49-15.593 56.145 23 29 50 46 72 40z"
        fill="#575a89"
      />
      <path
        d="M423.445 315.832v14s-9 17-6 33 4 24 4 24a136.533 136.533 0 007 40c7 20-16 151 13 153s45 4 54-6-15-182-15-182 82 171 99 164 60-23 55-32-131-209-131-209l-4-9zM471.445 605.832s-16-1-16 4-8 22-8 22-6 20 10 18 26-20 26-20l-4-19zM638.445 570.832s-14-9-13-3 2 22 9 23 28 7 29 9 25 10 25-3-15-23-15-23l-17-13s-11-1-13 6-5 4-5 4z"
        fill="#2f2e41"
      />
      <circle cx={435.485} cy={132.472} r={16.604} fill="#2f2e41" />
      <path
        d="M417.133 128.102a16.604 16.604 0 0114.856-16.51 16.772 16.772 0 00-1.747-.093 16.604 16.604 0 100 33.207 16.772 16.772 0 001.747-.093 16.604 16.604 0 01-14.856-16.51z"
        fill="#2f2e41"
      />
      <path
        fill="#2f2e41"
        d="M462.113 151.008l-22.687-11.883-31.329 4.861-6.482 28.628 16.136-.62 4.507-10.518v10.345l7.445-.287 4.322-16.745 2.701 17.825 26.467-.54-1.08-21.066z"
      />
      <path
        d="M460.755 318.15l-34.988.945s-29.854 5.81-28.179-6.24 30.8-7.836 30.8-7.836l31.88-4.863z"
        fill="#fbbebe"
      />
      <path
        d="M488.437 205.137a7.467 7.467 0 018.235 5.128c6.85 21.584 27.951 93.814 6.986 103.723-24.694 11.672-42.714 11.159-42.714 11.159l-9.646-23.748 8.78-8.24 9.375-60.276 4.492-25.55z"
        fill="#575a89"
      />
      <path opacity={0.4} d="M481.945 245.332l-4 40-35 15 39-9v-46z" />
      <path
        d="M261.367 485.073c-5.685 21.015-25.158 34.03-25.158 34.03s-10.255-21.057-4.57-42.072S256.797 443 256.797 443s10.255 21.057 4.57 42.073z"
        fill={color}
      />
      <path
        d="M209.649 485.073c5.685 21.015 25.157 34.03 25.157 34.03s10.256-21.057 4.57-42.072S214.22 443 214.22 443s-10.255 21.057-4.57 42.073z"
        fill={color}
      />
      <path
        d="M218.002 480.556c15.6 15.186 17.506 38.53 17.506 38.53s-23.387-1.276-38.987-16.462-17.506-38.53-17.506-38.53 23.387 1.276 38.987 16.462zM253.013 480.556c-15.6 15.186-17.505 38.53-17.505 38.53s23.387-1.276 38.987-16.462S292 464.094 292 464.094s-23.387 1.276-38.987 16.462z"
        fill="#3f3d56"
      />
      <path
        d="M690.367 42.073c-5.685 21.015-25.158 34.03-25.158 34.03s-10.255-21.057-4.57-42.072S685.797 0 685.797 0s10.255 21.057 4.57 42.073z"
        fill={color}
      />
      <path
        d="M638.649 42.073c5.685 21.015 25.157 34.03 25.157 34.03s10.256-21.057 4.57-42.072S643.22 0 643.22 0s-10.255 21.057-4.57 42.073z"
        fill={color}
      />
      <path
        d="M647.002 37.556c15.6 15.186 17.506 38.53 17.506 38.53S641.12 74.81 625.52 59.624s-17.506-38.53-17.506-38.53 23.387 1.276 38.987 16.462zM682.013 37.556c-15.6 15.186-17.505 38.53-17.505 38.53s23.387-1.276 38.987-16.462S721 21.094 721 21.094s-23.387 1.276-38.987 16.462z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgBodyText.propTypes = {
  color: PropTypes.string
};
SvgBodyText.defaultProps = {
  color: "primary"
};
export default SvgBodyText;
