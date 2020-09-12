import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFileSync = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1161.522 792.25"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M565.382 39.7h-1.345v-2.356h1.009a.673.673 0 00.673-.673V24.56a.673.673 0 00-.673-.673h-1.01v-6.879a14.653 14.653 0 00-14.653-14.653h-1.495V.673a.673.673 0 00-.673-.673h-12.112a.673.673 0 00-.673.673v1.682H315.598a14.653 14.653 0 00-14.653 14.653v311.838a14.653 14.653 0 0014.653 14.654h233.785a14.653 14.653 0 0014.654-14.654V53.156h1.345a.673.673 0 00.673-.672V40.372a.673.673 0 00-.673-.673z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M313.055 11.94h240.89v319.62h-240.89z" />
      <path fill="#3f3d56" d="M0 668h1161.522v2H0z" />
      <path
        d="M271.252 568.247c2.243 76.794-42.627 104.937-98.938 106.582q-1.962.057-3.906.07-3.918.03-7.759-.13c-50.927-2.115-91.239-29.148-93.325-100.566-2.158-73.909 89.578-169.939 96.461-177.042.006 0 .006 0 .012-.007l.396-.406s104.817 94.712 107.06 171.5z"
        fill={color}
      />
      <path
        d="M168.26 663.19l35.77-53.194-35.697 58.917.075 5.986q-3.918.03-7.759-.13l1.775-76.943-.049-.593.065-.115.17-7.27-39.173-56.875 39.127 51.433.139 1.537 1.34-58.133-33.835-58.966 33.931 48.753-.354-120.436v-.4l.012.393 2.246 94.92 30.837-38.556-30.736 46.734.673 51.998 28.376-50.748-28.271 58.393.374 28.914 41.266-70.693-41.14 80.78zM867 106.332h-1.49V65.525a23.618 23.618 0 00-23.618-23.619h-86.456a23.618 23.618 0 00-23.619 23.619v223.873a23.618 23.618 0 0023.619 23.619h86.456a23.618 23.618 0 0023.618-23.619V135.38H867z"
        fill="#3f3d56"
      />
      <path
        d="M860.48 66.913V290.46a17.639 17.639 0 01-17.635 17.642h-86.873a17.638 17.638 0 01-17.636-17.642V66.913a17.637 17.637 0 0117.636-17.635h10.54a8.379 8.379 0 007.759 11.541h49.53a8.379 8.379 0 007.76-11.541h11.284a17.637 17.637 0 0117.636 17.635z"
        fill="#f2f2f2"
      />
      <path
        fill="#ccc"
        d="M774.348 79h73.396v2.727h-73.396zM774.348 87.636h73.396v2.727h-73.396zM774.348 96.273h73.396V99h-73.396zM751.073 80.686h16.629v16.629h-16.629zM774.348 273h73.396v2.727h-73.396zM774.348 281.636h73.396v2.727h-73.396zM774.348 290.273h73.396V293h-73.396zM751.073 274.685h16.629v16.629h-16.629z"
      />
      <path
        d="M839.908 380.568H631.186v-4.302h-94.642v4.302H326.962a14.118 14.118 0 00-14.118 14.118V680.49a14.118 14.118 0 0014.118 14.119h512.946a14.118 14.118 0 0014.118-14.119V394.686a14.118 14.118 0 00-14.118-14.118z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M331.772 405.519h503.325v283.927H331.772z" />
      <circle cx={583.005} cy={392.613} r={5.162} fill={color} />
      <path
        d="M868.158 684.284h-49.12v-3.54a.702.702 0 00-.703-.701h-16.841a.702.702 0 00-.702.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.841a.702.702 0 00-.702.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.841a.702.702 0 00-.702.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.841a.702.702 0 00-.702.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701H686.41a.702.702 0 00-.702.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701H657.64a.702.702 0 00-.702.702v3.539H646.41v-3.54a.702.702 0 00-.702-.701H513.783a.702.702 0 00-.701.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.842a.702.702 0 00-.701.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.842a.702.702 0 00-.701.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701H427.47a.702.702 0 00-.701.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.842a.702.702 0 00-.701.702v3.539h-10.526v-3.54a.702.702 0 00-.702-.701h-16.842a.702.702 0 00-.701.702v3.539H358.7v-3.54a.702.702 0 00-.702-.701h-16.842a.702.702 0 00-.701.702v3.539h-32.28a16.842 16.842 0 00-16.842 16.842v7.615a16.842 16.842 0 0016.842 16.841h559.982A16.842 16.842 0 00885 708.741v-7.615a16.842 16.842 0 00-16.842-16.842z"
        fill="#3f3d56"
      />
      <path
        fill="#e6e6e6"
        d="M534.788 427.757h141.24v5.248h-141.24zM534.788 444.376h141.24v5.248h-141.24zM534.788 460.995h141.24v5.248h-141.24z"
      />
      <path
        fill="#ccc"
        d="M534.788 427.757h141.24v5.248h-141.24zM534.788 444.376h141.24v5.248h-141.24zM534.788 460.995h141.24v5.248h-141.24zM490 431h32v32h-32zM534.788 614.756h141.24v5.248h-141.24zM534.788 631.376h141.24v5.248h-141.24zM534.788 647.995h141.24v5.248h-141.24zM490 618h32v32h-32z"
      />
      <path
        d="M924.272 309.047a53.197 53.197 0 00-31.605-16.678l5.198-4.696-5.75-.29-7.115 6.43 6.43 7.115 5.75.29-4.308-4.764A49.359 49.359 0 01885 394.541v4a53.364 53.364 0 0039.272-89.494zM233.728 309.047a53.197 53.197 0 0131.605-16.678l-5.198-4.696 5.75-.29 7.115 6.43-6.43 7.115-5.75.29 4.308-4.764A49.359 49.359 0 00273 394.541v4a53.364 53.364 0 01-39.272-89.494z"
        fill="#3f3d56"
      />
      <path
        fill="#ccc"
        d="M385.274 27.756h141.24v5.248h-141.24zM385.274 44.376h141.24v5.248h-141.24zM385.274 60.995h141.24v5.248h-141.24zM340.486 31h32v32h-32zM384.788 276.757h141.24v5.248h-141.24zM384.788 293.376h141.24v5.248h-141.24zM384.788 309.995h141.24v5.248h-141.24zM340 280h32v32h-32z"
      />
      <path
        d="M966.532 327.922l31.894-46.306s27.773-22.27 19.813-26.605-28.8 15.992-28.8 15.992-60.125 46.094-50.21 52.527 27.303 4.392 27.303 4.392z"
        fill="#ffb8b8"
      />
      <path
        d="M971.167 267.112h41.304a144.462 144.462 0 000-49.247h-41.304a88.611 88.611 0 010 49.247z"
        fill={color}
      />
      <path
        d="M1078.552 269.46c-12.412-20.972-36.969-21.95-36.969-21.95s-23.929-3.06-39.28 28.883c-14.307 29.772-34.053 58.518-3.178 65.488l5.577-17.358 3.454 18.65a120.807 120.807 0 0013.21.226c33.065-1.068 64.554.312 63.54-11.553-1.348-15.773 5.59-42.205-6.354-62.385z"
        fill="#2f2e41"
      />
      <path
        d="M1012.557 398.741l-15.9 36.57 55.65 8.746s26.236-35.776 28.62-38.16z"
        fill="#ffb8b8"
      />
      <circle cx={1038.792} cy={289.825} r={29.415} fill="#ffb8b8" />
      <path
        d="M1031.637 311.29s13.515 30.21 11.925 33.39 28.62-16.695 28.62-16.695-12.72-21.465-11.925-24.645zM1076.157 324.01s23.85-13.515 37.366 23.85c0 0 44.52 52.471 36.57 62.011s-38.16-23.055-38.16-23.055l-19.08-19.875s-27.03-7.155-24.646-22.26 7.95-20.67 7.95-20.67zM1020.507 342.295l-55.65-15.9s-29.416-11.925-28.621-4.77 54.06 47.7 71.55 45.316 12.72-24.646 12.72-24.646z"
        fill="#ffb8b8"
      />
      <path
        d="M1052.307 336.73s-18.285-2.385-22.26 1.59-11.528.398-11.528.398l-12.72 23.055s-9.142 13.118-1.987 25.838-3.18 29.415-3.18 29.415 57.24 0 69.165 6.36 26.298-53.068 26.298-53.068-14.77-18.085-10.795-29.215 1.59-19.875 1.59-19.875l-17.49 1.59z"
        fill="#d0cde1"
      />
      <path
        fill="#ffb8b8"
        d="M983.936 688.124l6.361 61.216 24.645-12.72-7.95-53.266-23.056 4.77zM1076.952 687.329l20.696 55.341 19.875-14.31-24.67-53.751-15.901 12.72z"
      />
      <path
        d="M1014.942 715.95a49.65 49.65 0 01-5.565 12.72c-3.975 6.36-13.515 3.18-13.515 3.18s-11.13-8.745-13.516-4.77-15.105 23.85-15.105 23.85-42.135 34.98-6.36 40.545 42.93-20.67 42.93-20.67 27.031-9.54 27.826-19.08-16.695-35.775-16.695-35.775zM1098.418 727.54s-12.72-3.975-11.925 2.385 5.565 31.8 5.565 31.8-8.745 35.775 15.9 29.415 25.44-40.545 25.44-40.545 12.72-45.316 3.18-46.11-32.595-3.18-32.595-3.18 14.31 23.055-5.565 26.235zM1073.065 267.439l-24.261-12.708-33.503 5.199-6.932 30.615 17.255-.664 4.82-11.247v11.062l7.962-.307 4.621-17.906 2.889 19.062 28.304-.578-1.155-22.528zM1061.052 441.672l-66.78-15.106s-33.39 57.241-38.16 104.942-26.236 162.181 7.95 163.771 54.06 1.59 55.65-1.59-16.695-128.791-16.695-128.791 38.955 154.232 60.42 143.897 45.316-23.85 44.52-31.8-52.47-92.222-52.47-92.222l7.155-73.14s8.745-29.416-6.36-56.446z"
        fill="#2f2e41"
      />
      <path
        d="M1012.923 421.797h41.304a144.462 144.462 0 000-49.247h-41.304a88.612 88.612 0 010 49.247z"
        fill={color}
      />
      <path
        d="M1133.398 386.02l-69.96-1.59s-31.006-23.85-31.801-9.54 32.595 22.261 32.595 22.261 71.783 25.758 82.797 14.47z"
        fill="#ffb8b8"
      />
      <circle cx={375.864} cy={174.031} r={23.864} fill={color} />
      <circle cx={439.5} cy={174.031} r={19.5} fill={color} />
      <circle cx={503.136} cy={174.031} r={11.864} fill={color} />
      <circle cx={768.978} cy={177.02} r={12.536} fill={color} />
      <circle cx={802.409} cy={177.02} r={9.967} fill={color} />
      <circle cx={835.839} cy={177.02} r={6.536} fill={color} />
      <circle cx={583} cy={538.032} r={56} fill={color} />
      <path
        fill="#d0cde1"
        d="M603.834 550.347l-20.888-42.188-20.78 42.242 11.742-.015v17.518h18.175v-17.542l11.751-.015z"
      />
    </svg>
  );
};

SvgFileSync.propTypes = {
  color: PropTypes.string
};
SvgFileSync.defaultProps = {
  color: "primary"
};
export default SvgFileSync;