import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSuccessFactors = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 887.876 652.024"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M887.876 633.423c-2.846 25.876-152.226 23.704-152-.002 2.846-25.874 152.226-23.702 152 .002z"
        fill="#e6e6e6"
      />
      <path
        fill="#ffb8b8"
        d="M785.259 567.02l-6.055 13.12-11.102-1.009-7.064-23.213 11.101-6.055 13.12 17.157zM823.372 597.237l.239 9.143-17.157 1.01v-11.102l16.918.949z"
      />
      <path
        fill="#2f2e41"
        d="M817.555 430.772l-4.037 80.739 10.093 87.805-30.278 4.037-19.175-111.017-6.056-75.694 49.453 14.13z"
      />
      <path
        d="M864.99 401.504s12.11 79.73-13.12 105.97-59.546 72.666-59.546 72.666l-24.222-30.277 61.564-65.601-12.11-44.407-49.454-23.213 8.074-55.508 72.666-1.01z"
        fill="#2f2e41"
      />
      <circle cx={805.444} cy={194.609} r={22.203} fill="#ffb8b8" />
      <path
        d="M824.62 199.655s1.01 31.286 6.056 35.323-18.167 21.195-18.167 21.195L797.37 231.95v-22.204z"
        fill="#ffb8b8"
      />
      <path
        fill="#d0cde1"
        d="M814.528 242.043l12.253-18.502 6.922 9.419 10.093 28.259-8.074 110.007-47.435 1.01-6.055-126.156 15.138-18.166 17.158 14.129z"
      />
      <path
        d="M763.056 249.108l-8.074-1.01s-2.018 1.01-3.028 8.075-13.12 69.637-13.12 69.637l16.148 76.703 18.166-24.222-11.101-42.388 11.102-42.388zM865.999 248.099h6.055l15.139 81.748-14.129 63.583-14.13-23.213 4.037-25.231-2.018-22.203-7.065-13.121 12.111-61.563zM776.176 576.103s6.056-2.018 6.056 2.019-4.037 16.147-4.037 16.147 6.055 37.342-3.028 35.324-16.148-19.176-17.157-24.222-6.056-31.286-6.056-31.286-8.074-19.176-3.027-20.185 19.175-5.047 19.175-5.047-8.074 25.231 8.074 27.25zM805.444 607.39s16.148-10.093 19.176-2.019a84.8 84.8 0 014.037 18.166s4.037 13.12-12.11 11.102-14.13-2.018-15.14-8.074 4.037-19.175 4.037-19.175zM818.565 194.609l-4.037-1.01s-3.028-17.157-10.093-15.138-25.231 4.037-25.231-4.037 17.157-15.139 27.25-14.13 27.25 4.037 26.24 19.176-7.522 29.865-7.522 29.865l-.526-8.975z"
        fill="#2f2e41"
      />
      <path
        fill="#d0cde1"
        d="M797.37 254.154l17.158-12.111-17.158-14.129-5.956 7.148 5.956 19.092zM829.666 253.145l-15.138-11.102 12.11-18.166 7.065 9.083-4.037 20.185z"
      />
      <path
        d="M755.991 248.099l32.296-13.12 7.57-5.551 22.708 100.42 15.138-45.417-4.541-58.031 41.883 21.699-14.13 68.628-2.018 26.24 6.056 21.195s21.194 15.138 14.13 31.286-15.14 17.157-15.14 17.157-34.314-32.295-36.332-40.37-5.046-22.203-5.046-22.203-17.158 64.592-37.342 63.583-20.185-22.204-20.185-22.204l5.046-22.203 8.074-23.213-4.037-38.351z"
        fill="#2f2e41"
      />
      <path fill="#e6e6e6" d="M.3.399h703.576V451H.3z" />
      <path fill="#fff" d="M20.419 56.915h663.338v171.773H20.419z" />
      <path fill="#e6e6e6" d="M185.418 81.727h140.281v8.053H185.418z" />
      <path fill={color} d="M185.418 111.101h216.625v8.053H185.418z" />
      <path
        fill="#e6e6e6"
        d="M185.418 138.776h176.544v8.053H185.418zM185.418 166.346h103.064v8.053H185.418zM185.418 193.916h155.55v8.053h-155.55zM121.481 78.864h17.177v17.177h-17.177z"
      />
      <path fill={color} d="M121.481 106.539h17.177v17.177h-17.177z" />
      <path
        fill="#e6e6e6"
        d="M121.481 134.213h17.177v17.177h-17.177zM121.481 161.888h17.177v17.177h-17.177zM121.481 189.562h17.177v17.177h-17.177zM533.736 117.99h57.258v57.258h-57.258z"
      />
      <path fill="#fff" d="M20.419 252.546h663.338v171.773H20.419z" />
      <path fill="#e6e6e6" d="M151.064 267.812h17.177v17.177h-17.177z" />
      <path fill={color} d="M121.481 267.812h17.177v17.177h-17.177z" />
      <path
        d="M412.724 305.375a65.046 65.046 0 00-105.003-9.7l-4.186-3.657a70.594 70.594 0 01113.973 10.526z"
        fill="#e6e6e6"
      />
      <path
        d="M415.344 377.794l-4.614-3.102a65.078 65.078 0 001.994-69.317l4.784-2.831a70.637 70.637 0 01-2.164 75.25zM304.114 385.539a70.59 70.59 0 01-.58-93.521l4.187 3.657a65.03 65.03 0 00.534 86.155z"
        fill={color}
      />
      <path
        d="M356.714 409.052a70.709 70.709 0 01-52.6-23.513l4.14-3.71a65.043 65.043 0 00102.476-7.137l4.614 3.102a70.554 70.554 0 01-58.63 31.258z"
        fill={color}
      />
      <path
        fill="#e6e6e6"
        d="M533.736 305.032h57.258v57.258h-57.258zM119.095 342.249h57.258v57.258h-57.258z"
      />
      <path fill={color} d="M0 0h703.576v29.89H0z" />
      <circle cx={22.212} cy={15.282} r={5.54} fill="#fff" />
      <circle cx={43.241} cy={15.282} r={5.54} fill="#fff" />
      <circle cx={64.269} cy={15.282} r={5.54} fill="#fff" />
    </svg>
  );
};

SvgSuccessFactors.propTypes = {
  color: PropTypes.string
};
SvgSuccessFactors.defaultProps = {
  color: "primary"
};
const MemoSvgSuccessFactors = React.memo(SvgSuccessFactors);
export default MemoSvgSuccessFactors;
