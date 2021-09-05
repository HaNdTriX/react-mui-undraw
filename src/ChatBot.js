import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgChatBot = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 844.5 494.246"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M47.592 463.058a4.777 4.777 0 00-2.816.99c-2.4-6.343-6.117-10.42-10.292-10.42s-7.89 4.077-10.291 10.42a4.777 4.777 0 00-2.817-.99c-4.742 0-8.587 8.021-8.587 17.916h43.39c0-9.895-3.844-17.916-8.587-17.916z"
        fill={color}
      />
      <path fill="#3f3d56" d="M0 479.974h220v2H0z" />
      <path
        d="M829.592 421.032a4.777 4.777 0 00-2.816.99c-2.4-6.343-6.117-10.42-10.292-10.42s-7.89 4.077-10.291 10.42a4.777 4.777 0 00-2.817-.99c-4.742 0-8.587 8.021-8.587 17.916h43.39c0-9.895-3.844-17.916-8.587-17.916z"
        fill={color}
      />
      <path
        d="M736.229 91.853h-209.49v-4.317h-94.99v4.317H221.394a14.17 14.17 0 00-14.17 14.17V392.88a14.17 14.17 0 0014.17 14.17h514.834a14.17 14.17 0 0014.17-14.17V106.024a14.17 14.17 0 00-14.17-14.17z"
        fill="#3f3d56"
      />
      <path opacity={0.2} d="M226.227 116.892h505.17v284.98h-505.17z" />
      <circle cx={478.38} cy={103.943} r={5.181} fill={color} />
      <path fill="#3f3d56" d="M111.5 436.948h733v2h-733z" />
      <path
        d="M547.832 223.366v-21.084a25.869 25.869 0 00-25.869-25.87H500.88c0-2.845-9.146-5.177-20.768-5.398v-25.426a14.447 14.447 0 10-3.612 0v25.426c-11.621.221-20.767 2.553-20.767 5.399h-24.696a25.869 25.869 0 00-25.869 25.869v21.084c-2.992 0-5.418 10.106-5.418 22.573s2.426 22.574 5.418 22.574v24.695a25.869 25.869 0 0025.869 25.87h90.926a25.869 25.869 0 0025.87-25.87v-24.695c2.991 0 5.417-10.107 5.417-22.574s-2.426-22.573-5.418-22.573z"
        fill={color}
      />
      <path
        d="M436.216 184.54h80.568a22.922 22.922 0 0122.922 22.921v80.568a22.922 22.922 0 01-22.922 22.922h-80.568a22.922 22.922 0 01-22.921-22.922V207.46a22.922 22.922 0 0122.921-22.922z"
        fill="#3f3d56"
      />
      <path
        d="M447.606 244.585a16.271 16.271 0 01-16.253-16.253.903.903 0 111.806 0 14.447 14.447 0 1028.894 0 .903.903 0 011.806 0 16.271 16.271 0 01-16.253 16.253zM476.5 275.285a12.655 12.655 0 01-12.64-12.642.903.903 0 011.805 0 10.835 10.835 0 0021.67 0 .903.903 0 111.806 0 12.655 12.655 0 01-12.64 12.642zM505.394 244.585a16.271 16.271 0 01-16.253-16.253.903.903 0 111.806 0 14.447 14.447 0 1028.894 0 .903.903 0 011.806 0 16.272 16.272 0 01-16.253 16.253z"
        fill={color}
      />
      <circle cx={447.606} cy={229.235} r={8.126} fill={color} />
      <circle cx={505.394} cy={229.235} r={8.126} fill={color} />
      <ellipse cx={476.5} cy={267.158} rx={7.224} ry={3.612} fill={color} />
      <path
        d="M764.583 396.687h-49.302v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552h-10.565v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552h-10.565v-3.552a.704.704 0 00-.704-.704H639.92a.704.704 0 00-.705.704v3.552H628.65v-3.552a.704.704 0 00-.704-.704h-16.903a.704.704 0 00-.705.704v3.552h-10.564v-3.552a.704.704 0 00-.705-.704h-16.903a.704.704 0 00-.705.704v3.552h-10.564v-3.552a.704.704 0 00-.705-.704H553.29a.704.704 0 00-.705.704v3.552H542.02v-3.552a.704.704 0 00-.705-.704H408.904a.704.704 0 00-.704.704v3.552h-10.565v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552h-10.565v-3.552a.704.704 0 00-.704-.704H351.15a.704.704 0 00-.704.704v3.552H339.88v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552h-10.565v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552h-10.565v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552H253.25v-3.552a.704.704 0 00-.704-.704h-16.904a.704.704 0 00-.704.704v3.552h-32.399a16.904 16.904 0 00-16.903 16.904v7.643a16.904 16.904 0 0016.903 16.904h562.044a16.904 16.904 0 0016.904-16.904v-7.643a16.904 16.904 0 00-16.904-16.904z"
        fill="#3f3d56"
      />
      <path fill={color} d="M303.5 317.948h337v2h-337z" />
      <path
        d="M327.5 316.948h-83a555.424 555.424 0 000-94h83c-4.57 32.194-4.837 63.578 0 94z"
        fill="#d0cde1"
      />
      <path
        fill="#3f3d56"
        d="M256.5 241.948h60v4h-60zM256.5 254.948h60v4h-60zM256.5 267.948h60v4h-60zM256.5 280.948h60v4h-60zM256.5 293.948h60v4h-60z"
      />
      <path
        d="M106.944 3.207S93.904-1.45 85.52 17.18 64.095 56.303 64.095 56.303l7.452 1.863s1.863-13.04 6.52-14.904L76.204 60.03s55.891 19.561 81.042-1.863l-.932-6.521s3.726.931 3.726 6.52l2.795-2.794s-2.795-5.59-11.178-13.041c-5.503-4.891-7.394-14.197-8.044-20.015a24.22 24.22 0 00-5.576-13.19c-5.571-6.456-15.723-13.319-31.093-5.919z"
        fill="#2f2e41"
      />
      <path fill="#ffb9b9" d="M69.335 414.136l4 23 16-3 3-20h-23z" />
      <path
        d="M92.335 427.136l-22 2 1 18-1 23s-13 26 6 24 17-12 17-12l5-6-3-15z"
        fill="#2f2e41"
      />
      <path fill="#ffb9b9" d="M159.335 414.136l-4 23-16-3-3-20h23z" />
      <path
        d="M136.335 427.136l22 2-1 18 1 23s13 26-6 24-17-12-17-12l-5-6 3-15z"
        fill="#2f2e41"
      />
      <circle cx={113.335} cy={42.136} r={23} fill="#ffb9b9" />
      <path d="M98.335 54.136l3 36 28-1s-8-23-3-32z" fill="#ffb9b9" />
      <path
        d="M114.335 83.136l11.518-7.183 12.482 6.183 20 9-7 85s16 53 13 79 33 156 4 162-50 12-51 2-3-163-3-163-3 162-15 164-64 10-60-2 31-222 44-234l2-10-17-81 31.924-15.91z"
        fill="#2f2e41"
      />
      <path
        d="M54.335 207.136l-1 41s-9.626 40.479 6.687 40.24 4.313-40.24 4.313-40.24l7-40zM205.548 164.105l28.103 29.87s34.18 23.725 21.871 34.432-30.063-27.092-30.063-27.092l-31.905-25.121z"
        fill="#ffb9b9"
      />
      <path
        fill="#d0cde1"
        d="M83.835 181.636l68.49-2.1-.89-4.65v-.02l-66.2-1.2-1.4 7.97z"
      />
      <circle cx={97.835} cy={177.636} r={6} fill="#2f2e41" />
      <path
        d="M76.335 94.136l-6.5-1.5s-8.5 3.5-10.5 14.5-28 97-15 102 32 7 32 5 8-77 8-77zM137.5 97.948l20.835-6.812s10 0 10 11c0 4.538 19.165 41.812 19.165 41.812s46.05 32.825 39 34c-12 2-19 23-19 23l-45-40zM85.284 43.85s7.452-10.248 13.972-12.11 7.452-11.179 7.452-11.179 16.768 18.63 27.014 19.562.932-22.356.932-22.356l-18.63-4.658-17.7 1.863-13.972 9.315z"
        fill="#2f2e41"
      />
      <ellipse cx={90.835} cy={38.636} rx={3} ry={4.5} fill="#ffb9b9" />
    </svg>
  );
};

SvgChatBot.propTypes = {
  color: PropTypes.string
};
SvgChatBot.defaultProps = {
  color: "primary"
};
export default SvgChatBot;
