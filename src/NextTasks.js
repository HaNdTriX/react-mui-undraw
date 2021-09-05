import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgNextTasks = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 885.358 482.802"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse
        cx={442.679}
        cy={472.519}
        rx={442.679}
        ry={10.282}
        fill="#e6e6e6"
      />
      <path
        d="M833.78 132.224H616.675v-1.136a3.338 3.338 0 00-3.338-3.338h-91.768a3.338 3.338 0 00-3.338 3.338v1.136h-218a14.686 14.686 0 00-14.686 14.686v297.284a14.686 14.686 0 0014.686 14.685h533.55a14.686 14.686 0 0014.685-14.685V146.91a14.686 14.686 0 00-14.686-14.686z"
        fill="#3f3d56"
      />
      <path
        d="M311.91 157.4a1.695 1.695 0 00-1.676 1.71V446.8a1.695 1.695 0 001.676 1.71H822.1a1.695 1.695 0 001.676-1.71V159.11a1.695 1.695 0 00-1.675-1.71z"
        fill="#fff"
      />
      <circle cx={566.558} cy={144.754} r={5.37} fill={color} />
      <path
        d="M858.243 438.843H807.15v-5.276c0-.29-.327-.525-.73-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-10.949v-5.276c0-.29-.326-.525-.73-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-10.948v-5.276c0-.29-.327-.525-.73-.525h-17.518c-.404 0-.73.235-.73.525v5.276h-10.95v-5.276c0-.29-.326-.525-.729-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-10.949v-5.276c0-.29-.327-.525-.73-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-10.948v-5.276c0-.29-.327-.525-.73-.525h-17.518c-.404 0-.73.235-.73.525v5.276h-10.95v-5.276c0-.29-.326-.525-.73-.525H489.635c-.403 0-.73.235-.73.525v5.276h-10.949v-5.276c0-.29-.326-.525-.73-.525h-17.518c-.403 0-.73.235-.73.525v5.276H448.03v-5.276c0-.29-.327-.525-.73-.525H429.78c-.404 0-.73.235-.73.525v5.276H418.1v-5.276c0-.29-.326-.525-.729-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-10.949v-5.276c0-.29-.327-.525-.73-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-10.949v-5.276c0-.29-.326-.525-.73-.525H340c-.403 0-.73.235-.73.525v5.276h-10.948v-5.276c0-.29-.327-.525-.73-.525h-17.518c-.403 0-.73.235-.73.525v5.276h-33.576c-9.675 0-17.518 5.639-17.518 12.594v5.694c0 6.955 7.843 12.593 17.518 12.593h582.475c9.675 0 17.518-5.638 17.518-12.593v-5.694c0-6.955-7.843-12.594-17.518-12.594z"
        fill="#3f3d56"
      />
      <rect
        x={573.506}
        y={213.837}
        width={193.548}
        height={186.423}
        rx={3.562}
        fill="#e6e6e6"
      />
      <path
        d="M171.114 45.588a120.058 120.058 0 01-1.39 25.017s-9.729 22.238 1.39 31.967 31.967-29.187 31.967-29.187c-1.442-8.635-2.274-16.752 0-22.238zM186.403 317.998v30.577s-4.17 56.984 0 70.883l-1.39 26.407H200.3l4.17-31.967s12.508-40.306 8.339-65.323l2.78-30.577zM164.165 317.998v30.577s4.17 56.984 0 70.883l1.39 26.407h-15.289l-4.17-31.967s-12.508-40.306-8.338-65.323l-2.78-30.577z"
        fill="#ffb8b8"
      />
      <path
        d="M128.724 203.336s-8.34 52.814-2.78 83.39 5.56 40.306 5.56 40.306l34.746-1.39 9.729-56.983 8.339 58.374 41.695-6.95s0-44.475 1.39-54.204 1.39-65.323 1.39-65.323zM203.08 445.865s-15.288-9.73-22.237 0v16.678s-5.56 12.509 13.899 9.729 12.508-12.509 12.508-12.509zM147.487 445.865s15.288-9.73 22.237 0v16.678s5.56 12.509-13.898 9.729-12.509-12.509-12.509-12.509z"
        fill="#2f2e41"
      />
      <circle cx={189.182} cy={37.249} r={22.238} fill="#ffb8b8" />
      <path
        d="M179.453 90.063l-9.56-22.494-9.898 4.426-12.508 72.272 1.39 69.493s63.933-2.78 72.272 1.39-9.73-136.206-9.73-136.206l-8.338-10.402z"
        fill={color}
      />
      <path
        d="M171.402 59.486s-21.136 5.56-21.136 13.899c0 0-20.847 4.17-20.847 8.339s-1.39 109.798-1.39 109.798-12.509 23.628-2.78 43.085l-1.39 11.12 27.797 2.779 19.458-170.952zM201.403 59.486s21.136 5.56 21.136 13.899c0 0 20.847 4.17 20.847 8.339s1.39 109.798 1.39 109.798 12.509 23.628 2.78 43.085l1.39 11.12-27.797 2.779L201.69 77.554zM207.25 8.062s1.39-5.56-5.56-2.78c0 0-8.338-9.729-16.677-2.78 0 0-16.678-2.78-16.678 11.12s-.787 18.487-.787 18.487 4.956-12.928 14.685-11.538c5.945.849 9.296.141 11.002-.538a8.342 8.342 0 015.824-.276 9.06 9.06 0 015.412 4.983 41.764 41.764 0 003.012 5.698 35.286 35.286 0 013.913 7.784L214.2 21.96s1.39-8.339-2.78-11.118c0 0 1.39-4.17-4.17-2.78z"
        fill="#2f2e41"
      />
      <path fill={color} d="M255.251 244.931H629.54v121.935H255.251z" />
      <path
        d="M103.706 226.963s-8.339 31.967 4.17 29.187 9.729-30.577 9.729-30.577zM269.099 226.963s8.339 31.967-4.17 29.187-9.729-30.577-9.729-30.577z"
        fill="#ffb8b8"
      />
      <path
        d="M136.368 81.724l-3.836-2.986s-4.503.206-5.893 2.986-23.627 72.272-23.627 72.272-6.95 36.136-2.78 58.374l1.39 16.678h19.458l-1.39-26.407 13.898-52.814zM236.437 81.724l3.836-2.986s4.503.206 5.893 2.986 23.628 72.272 23.628 72.272 6.949 36.136 2.78 58.374l-1.39 16.678h-19.458l1.39-26.407-13.9-52.814z"
        fill="#2f2e41"
      />
      <path
        fill="#fff"
        d="M327.882 260.306h21.206v21.206h-21.206zM386.199 269.849h170.71v2.121h-170.71zM327.882 295.296h21.206v21.206h-21.206zM386.199 304.839h170.71v2.121h-170.71zM327.882 330.286h21.206v21.206h-21.206zM386.199 339.829h170.71v2.121h-170.71z"
      />
    </svg>
  );
};

SvgNextTasks.propTypes = {
  color: PropTypes.string
};
SvgNextTasks.defaultProps = {
  color: "primary"
};
export default SvgNextTasks;
