import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgForms = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 820.759 568.363"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M660.955 339.01l-9.67 13.186a9.334 9.334 0 01-11.768 2.795 9.334 9.334 0 01-.905-16.1l12.331-8.151 35.26-35.26 3.918-12.625h26.554l-13.93 30.037z"
        fill="#ffb8b8"
      />
      <path
        d="M370.3 338.246a4.636 4.636 0 00-4.63 4.63v219.487a4.636 4.636 0 004.63 4.63h296.353a4.636 4.636 0 004.63-4.63V342.877a4.636 4.636 0 00-4.63-4.63z"
        fill="#e6e6e6"
      />
      <path d="M378.541 554.467h279.87V350.773h-279.87z" fill="#fff" />
      <path
        d="M618.959 409.093H450.408a6.02 6.02 0 100 12.04h168.55a6.02 6.02 0 000-12.04zM450.408 446.137a6.02 6.02 0 100 12.04h168.55a6.02 6.02 0 000-12.04zM450.408 483.182a6.02 6.02 0 000 12.039h168.55a6.02 6.02 0 000-12.04z"
        fill="#e6e6e6"
      />
      <circle cx={418.457} cy={415.576} r={7.409} fill={color} />
      <circle cx={418.457} cy={452.62} r={7.409} fill="#e6e6e6" />
      <circle cx={418.457} cy={489.664} r={7.409} fill="#e6e6e6" />
      <path
        d="M551.816 415.113a6.02 6.02 0 01-6.02 6.02h-95.171a6.167 6.167 0 01-6.185-5.22 6.03 6.03 0 015.968-6.82h95.388a6.02 6.02 0 016.02 6.02z"
        fill={color}
      />
      <circle cx={518.476} cy={288.237} r={24.079} fill="#e6e6e6" />
      <circle cx={518.476} cy={288.237} r={12.039} fill="#fff" />
      <path
        d="M787.196 530.548l-12.189 5.659-18.521-35.194c-11.435-17.517-18.898-38.509-24.14-61.445l19.154 1.306c11.403 16.275 19.853 32.593 22.576 48.994z"
        fill="#ffb8b8"
      />
      <path
        fill="#2f2e41"
        d="M755.418 445.227h-24.377v-42.226l19.589-3.482 4.788 45.708z"
      />
      <path
        d="M724.091 285.941a120.111 120.111 0 00-36.042-1.358l7.045-35.137a16.443 16.443 0 0113.997-13.073 16.443 16.443 0 0118.47 18.108z"
        fill={color}
      />
      <circle cx={706.881} cy={193.398} r={20.46} fill="#ffb8b8" />
      <path
        d="M738.441 217.123l-26.99 19.154-7.182-34.172 20.242-8.054c.82 8.96 5.66 16.585 13.93 23.072z"
        fill="#ffb8b8"
      />
      <path
        d="M727.34 191.222c-1.513-3.119-3.407-.955-5.09 2.85l-2.414-9.657-2.897-.966-1.931-7.725c-8.858-2.115-15.967 2.31-25.104 7.227l-3.483 8.27a20.994 20.994 0 0114.144-29.69 22.045 22.045 0 014.618-.536 21.929 21.929 0 0122.147 22.612zM790.73 547.24l-41.648 13.585a6.334 6.334 0 01-7.09-3.572 6.336 6.336 0 012.195-7.85c8.214-5.623 14.76-11.622 17.76-18.42 2.776-11.272 5.913-11.298 9.32-2.887 9.411 5.566 7.89 1.108 13.753-5.819l9.036 17.104a5.508 5.508 0 01-3.326 7.86z"
        fill="#2f2e41"
      />
      <path
        d="M692.298 557.102l-13.93-6.094 4.993-35.687 9.808-70.094 26.554 3.482a162.129 162.129 0 01-17.692 69.924z"
        fill="#ffb8b8"
      />
      <path
        d="M737.57 456.11l-46.143-9.142 12.189-63.991-2.176-17.413h60.508c-2.207 22.543-12.736 55.826-24.378 90.545z"
        fill="#2f2e41"
      />
      <path
        d="M764.125 371.659c-22.336-5.653-44.306-6.453-65.733 0-4.008-41.3-5.11-80.684-1.603-117.024a33.774 33.774 0 0111.843-22.622l25.456-21.42 18.902 9.451a14.974 14.974 0 018.274 13.084c4.126 54.943 7.29 107.227 2.86 138.53z"
        fill={color}
      />
      <path
        d="M786.325 364.694l3.806 13.319a10.18 10.18 0 01-8.2 12.852 10.18 10.18 0 01-11.682-11.38l1.711-13.05-9.141-66.167-12.19-26.12 24.378-10.882 10.013 32.648z"
        fill="#ffb8b8"
      />
      <path
        d="M687.857 568.175l-42.66-9.962a6.334 6.334 0 01-4.212-6.73 6.336 6.336 0 015.944-5.575c9.939-.554 18.646-2.293 24.735-6.552 8.214-8.203 10.91-6.6 9.467 2.36 5.165 9.637 6.175 5.036 14.777 2.149l-1.134 19.31a5.508 5.508 0 01-6.917 5z"
        fill="#2f2e41"
      />
      <path
        d="M778.925 266.313c-10.307.85-21.552 6.821-33.084 14.366l-8.845-34.728a16.443 16.443 0 016.965-17.84 16.443 16.443 0 0124.485 8.337z"
        fill={color}
      />
      <path
        d="M4.589 74.8A4.594 4.594 0 000 79.389v217.516a4.594 4.594 0 004.589 4.589h293.693a4.594 4.594 0 004.589-4.59V79.39a4.594 4.594 0 00-4.59-4.59z"
        fill="#e6e6e6"
      />
      <path d="M11.5 289.994h279.87V86.3H11.5z" fill="#fff" />
      <path
        d="M39.006 182.425a5.966 5.966 0 000 11.931h224.859a5.966 5.966 0 100-11.931zM39.006 219.137a5.966 5.966 0 100 11.93h224.859a5.966 5.966 0 100-11.93z"
        fill="#e6e6e6"
      />
      <path
        d="M139.504 257.684a5.966 5.966 0 000 11.931h23.863a5.966 5.966 0 000-11.931zM119.46 106.675a1.837 1.837 0 00-1.836 1.835v46.596a1.837 1.837 0 001.836 1.836h63.95a1.837 1.837 0 001.837-1.836V108.51a1.837 1.837 0 00-1.836-1.835z"
        fill={color}
      />
      <circle cx={151.435} cy={126.655} r={10.096} fill="#fff" />
      <path
        d="M167.956 152.353a10.018 10.018 0 01-1.102 4.59h-30.838a10.094 10.094 0 018.995-14.686h12.849a10.09 10.09 0 0110.096 10.096z"
        fill="#fff"
      />
      <circle cx={151.435} cy={126.655} r={10.096} fill="#fff" />
      <path
        d="M167.956 152.353a10.018 10.018 0 01-1.102 4.59h-30.838a10.094 10.094 0 018.995-14.686h12.849a10.09 10.09 0 0110.096 10.096z"
        fill="#fff"
      />
      <circle cx={151.435} cy={23.863} r={23.863} fill="#e6e6e6" />
      <circle cx={151.435} cy={23.863} r={11.931} fill={color} />
      <path
        fill="#3f3d56"
        d="M820.364 567.695H246.283v-2.181h574.476l-.395 2.181z"
      />
    </svg>
  );
};

SvgForms.propTypes = {
  color: PropTypes.string
};
SvgForms.defaultProps = {
  color: "primary"
};
export default SvgForms;
