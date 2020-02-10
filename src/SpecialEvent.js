import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSpecialEvent = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 998.282 772.773"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M443.438 175.718a368.021 368.021 0 01-120.723-20.264c-52.052-17.997-94.694-42.821-126.742-73.782C135.353 23.106 85.652 14.28 54.64 17.186 21.07 20.334 1.529 37.524 1.335 37.697L0 36.21c.197-.178 20.14-17.758 54.323-21.002 20.046-1.9 41.008 1.411 62.307 9.847 26.56 10.52 53.723 29.085 80.733 55.18 31.836 30.757 74.23 55.429 126.006 73.33 95.047 32.86 202.17 24.904 293.899-21.83 30.37-15.475 60.388-26.037 89.217-31.394 36.354-6.757 70.83-5.188 102.48 4.658 69.549 21.637 117.054 20.49 144.658 15.72 29.784-5.149 43.298-15.451 43.43-15.555l1.23 1.579c-.56.435-14.047 10.714-44.32 15.946-27.822 4.81-75.667 5.975-145.592-15.78-70.8-22.025-142.509 2.311-190.195 26.607A383.88 383.88 0 01472.539 174.6q-14.603 1.118-29.101 1.118z"
        fill="#3f3d56"
      />
      <circle cx={439.4} cy={180.268} r={20.268} fill={color} />
      <circle cx={753.4} cy={99.268} r={20.268} fill={color} />
      <circle cx={100.4} cy={20.268} r={20.268} fill={color} />
      <path
        d="M584.744 484.482V680.31h30.79V501.725h123.162V680.31h30.79V288.655h-30.79c-10.203 0-25.864 53.14-25.864 106.535 0 40.248 4.7 74.74 11.384 89.292zm153.952 0h-.3c.1-.219.2-.45.3-.678z"
        fill="#3f3d56"
      />
      <path
        d="M698.845 191.728c-25.274 0-45.762 22.738-45.762 50.787v35.635h10.96l6.345-13.203-1.586 13.203h70.446l5.768-12.003-1.442 12.003h7.932v-27.98c0-32.276-23.577-58.442-52.66-58.442zM646.41 424.554l-28.098 11.942-97.64 79.376a28.738 28.738 0 00-6.322 15.454c-.702 9.131-30.205 56.898-19.668 63.22s48.468 25.288 50.576 12.644 13.346-66.733 13.346-66.733l94.128-84.293z"
        fill="#2f2e41"
      />
      <path
        d="M536.126 596.653l-11.942 35.122s12.644 13.347 6.322 24.586v38.634h-9.834l-2.81-20.37s-11.2 20.113-16.858 20.37c-11.86.54-35.346 4.758-36.049-1.564s17.785-12.485 17.785-12.485l19.669-54.088 8.429-33.015zM719.464 415.422s6.322 61.815-11.942 73.055-99.044 47.063-99.044 47.063 34.42 32.313 27.395 40.04-38.635 28.8-42.85 24.585-51.278-54.79-45.658-70.947 83.59-68.84 83.59-68.84l9.132-33.014 2.81-26.693 29.503-18.966z"
        fill="#2f2e41"
      />
      <circle cx={687.281} cy={242.218} r={29.284} fill="#ffb9b9" />
      <path
        d="M709.98 254.212s-1.404 26.692 20.372 35.122-54.089 63.22-54.089 63.22V291.44s9.835-10.537 0-26.693zM756.693 379.598l-5.62 27.395-16.858 94.128s14.049 40.039-4.917 39.336-9.834-43.551-9.834-43.551l9.834-77.971V388.73zM635.873 366.251l-6.322 24.586-28.8 69.542s-19.669 33.015-3.513 32.312 16.157-32.312 16.157-32.312l33.014-56.196v-31.61z"
        fill="#ffb9b9"
      />
      <path
        d="M630.956 571.365l23.18 21.776s16.157-3.512 22.479 15.453 10.536 30.908 10.536 30.908l-8.43 4.917-10.536-14.751s-6.322 26.693-12.644 28.8-37.932 16.156-35.122 0l15.454-22.478s2.107-25.288-4.215-27.395-23.18-23.181-23.18-23.181z"
        fill="#2f2e41"
      />
      <path
        d="M720.577 437.198s-66.03-23.883-70.244-21.776a31.677 31.677 0 01-9.894 2.568l.06-9.592s21.775-7.727 33.717-2.81 48.469 26.693 48.469 26.693z"
        fill="#3f3d56"
      />
      <path
        d="M680.478 338.505s18.966-21.776 24.586-35.122a34.485 34.485 0 0118.23-17.927s42.18 9.497 41.477 26.356-26.693 42.85-26.693 42.85 3.513 93.424-15.453 92.02a40.681 40.681 0 01-8.43-16.86c-2.107-9.834-67.434-20.37-67.434-20.37s-5.62 9.834-6.322 5.62 5.62-107.475 5.62-107.475l33.497-22.141z"
        fill="#d0cde1"
      />
      <path
        d="M759.36 305.026l.47.264a9.691 9.691 0 014.95 8.453l-.008 52.13a9.768 9.768 0 003.475 7.434c2.705 2.302 5.215 5.618.037 7.345-8.43 2.81-41.445 16.858-42.147 11.941s-2.107-10.537 0-10.537c1.65 0 11.48-50.37 19.378-71.907a9.693 9.693 0 0113.845-5.123zM655.541 305.139l-9.834 2.81-11.239 48.468s-13.346 2.81-9.132 7.727 21.776 17.561 21.776 17.561z"
        fill="#d0cde1"
      />
      <path
        d="M711.855 205.718a24 24 0 00-18.937-9.663h-.899c-17.322 0-31.365 15.675-31.365 35.011h5.804l.938-7.135 1.374 7.135h34.426l2.884-6.036-.721 6.036h6.772q4.74 23.542-13.622 47.084h11.537l5.768-12.072-1.442 12.072h21.992l4.326-27.767c0-20.796-12.083-38.43-28.835-44.665z"
        fill="#2f2e41"
      />
      <path
        d="M123.535 529.728c7.39-16.09 12.587-54.227 12.587-98.727 0-59.038-17.316-117.792-28.597-117.792H73.481v433.039h34.044V548.793h136.176v197.455h34.044v-216.52zm-16.01-.75c.11.253.22.508.331.75h-.331z"
        fill="#3f3d56"
      />
      <path
        d="M265.433 450.728s41 17 28 27-40-12-39-15-4-10-4-10z"
        fill="#9f616a"
      />
      <path
        d="M229.433 316.728l13 12 3 35 10 37s17 35 14 42 3 9 3 9l-23 9s-25-28-25-34 5-110 5-110z"
        fill="#575a88"
      />
      <path
        d="M229.433 316.728l13 12 3 35 10 37s17 35 14 42 3 9 3 9l-23 9s-25-28-25-34 5-110 5-110z"
        opacity={0.1}
      />
      <path
        d="M352.433 676.728s-5 23-6 25 19 9 19 9l24-17s-10-22-10-26z"
        fill="#575a88"
      />
      <path
        d="M221.433 452.728l7 8s145 18 148 46 24 160 12 164-43 19-43 11-20-118-16-138c0 0-173-22-177-47s4-36 4-36z"
        fill="#2f2e41"
      />
      <path
        d="M221.433 452.728l7 8s145 18 148 46 24 160 12 164-43 19-43 11-20-118-16-138c0 0-173-22-177-47s4-36 4-36z"
        opacity={0.1}
      />
      <path
        d="M350.433 699.728s-4-9-6-6-9 38-2 38 71 16 80 14 26 1 24-9-12-11-12-11-37-22-39-33-13-5-13-5v7s-21 16-32 5z"
        fill="#2f2e41"
      />
      <path
        d="M160.433 240.728s7 34-8 37 19 23 19 23l22 12 16-16s-14.5-29.5-3.5-51.5-45.5-4.5-45.5-4.5z"
        fill="#9f616a"
      />
      <path
        d="M209.433 296.728l-16 16-22-12s-34-20-19-23c9.65-1.93 10.19-16.69 9.36-26.97a92.992 92.992 0 00-1.36-10.03s56.5-17.5 45.5 4.5a38.361 38.361 0 00-3.44 10.76c-3.37 19.77 6.94 40.74 6.94 40.74z"
        fill="#9f616a"
      />
      <path fill="#575a88" d="M265.433 705.728v23h38l3-9-4-24-37 10z" />
      <path
        d="M108.433 472.728s0 59 24 61 110 13 110 13 5 98 14 130 1 34 9 36 42-5 41-12-5-184-5-184 9-38-111-56z"
        fill="#2f2e41"
      />
      <path
        d="M268.433 721.728s-6-13-7-9-13 39-1 42 50 19 75 18 28-2 28-2 7-10-2-16-46-41-48-45-17-7-17 0-21 21-28 12z"
        fill="#2f2e41"
      />
      <path
        d="M205.933 245.228a38.361 38.361 0 00-3.44 10.76c-4.98 3.01-8.31 2.24-14.56 2.24-9.27 0-13.01-11.85-19-18-.47-5.71-8.5.5-8.5.5s56.5-17.5 45.5 4.5z"
        opacity={0.1}
      />
      <circle cx={185.433} cy={224.728} r={33} fill="#9f616a" />
      <path
        d="M242.433 328.728s-5 36-8 49-7 73-9 81-14 10-38 7a45.103 45.103 0 00-4.54-.34c-14.78-.47-31.69 5.06-47.34 9.4-9 2.5-17.59 4.6-25.12 4.94-11.4.52-14.74-12.12-14.35-25.8.37-12.73 3.98-26.38 7.35-31.2 6.07-8.68.1-86.61 2.34-112.31v-.01c.34-3.92.87-6.62 1.66-7.68 6-8 45-28 49.37-27.19 4.36.81 41.63 24.19 41.63 24.19 9 0 8.71-9.76 8.71-9.76s6.29 11.76 18.29 14.76 17 24 17 24z"
        fill="#575a88"
      />
      <path
        d="M175.586 458.371s64.416 2.051 53.132 9.704-61.285 14.653-62.285 4.653 9.153-14.357 9.153-14.357z"
        fill="#9f616a"
      />
      <path
        d="M182.893 465.388c.21 3.84-10.12 12.49-13.46 18.34-1.85 3.24-16.17-1.03-33.88-8.94a347.397 347.397 0 01-39.47-20.86c.37-12.73 3.98-26.38 7.35-31.2 6.07-8.68.1-86.61 2.34-112.31v-.01a11.088 11.088 0 011.66-.68h12c41 19-6 101-6 101s62 51 68 53a1.798 1.798 0 011.46 1.66z"
        opacity={0.1}
      />
      <path
        d="M119.433 303.728h-12s-11 3-20 23-42 82-13 106 91 52 95 45 18-18 12-20-68-53-68-53 47-82 6-101z"
        fill="#575a88"
      />
      <path
        d="M180.356 209.373s1.449-20.048 19.314-11.874 16.7-14.356 11.301-18.338-5.228-4.967-24.974-2.303-58.081 7.178-45.686 46.88 23.622 29.49 23.622 29.49-9.853-35.727.13-28.92l9.984 6.806 5.268-1.116z"
        fill="#2f2e41"
      />
      <path
        d="M917.535 498.046c0-18.05-134.13-32.682-299.586-32.682s-299.587 14.632-299.587 32.682c0 6.996 20.16 13.477 54.47 18.793v223.6h16.342V519.145c54.954 7.084 137.041 11.583 228.775 11.583 92.491 0 175.182-4.573 230.137-11.759v221.47h16.34V516.625c33.479-5.276 53.11-11.677 53.11-18.579z"
        fill="#3f3d56"
      />
      <ellipse cx={655.481} cy={483.728} rx={61} ry={15} fill="#f2f2f2" />
      <ellipse cx={655.481} cy={483.728} rx={50} ry={12.295} fill="#d0cde1" />
      <ellipse cx={428.481} cy={495.728} rx={61} ry={15} fill="#f2f2f2" />
      <ellipse cx={428.481} cy={495.728} rx={50} ry={12.295} fill="#d0cde1" />
      <ellipse cx={654.061} cy={478.078} rx={29.08} ry={4.592} fill="#9f616a" />
      <ellipse cx={638.565} cy={471.381} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={635.121} cy={471.381} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={675.298} cy={472.529} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={654.253} cy={471.381} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={669.941} cy={471.381} rx={9.183} ry={4.974} fill={color} />
      <path
        d="M681.803 468.32q-24.896 8.448-55.865 0v-.775a22.82 22.82 0 0121.67-22.804 143.332 143.332 0 0114.773.019 20.62 20.62 0 0119.422 20.637zM673.654 489.406a183.557 183.557 0 01-36.89 0 11.786 11.786 0 01-10.635-11.711h58.16a11.786 11.786 0 01-10.635 11.711z"
        fill="#3f3d56"
      />
      <path
        d="M646.217 451.867a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0zM654.635 455.31a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0zM655.4 449.188a10.943 10.943 0 01-8.417 0 10.943 10.943 0 018.418 0zM671.089 449.188a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0zM666.88 452.632a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0z"
        fill="#d0cde1"
      />
      <ellipse cx={428.061} cy={490.078} rx={29.08} ry={4.592} fill="#9f616a" />
      <ellipse cx={412.565} cy={483.381} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={409.121} cy={483.381} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={449.298} cy={484.529} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={428.253} cy={483.381} rx={9.183} ry={4.974} fill={color} />
      <ellipse cx={443.941} cy={483.381} rx={9.183} ry={4.974} fill={color} />
      <path
        d="M455.803 480.32q-24.896 8.448-55.865 0v-.775a22.82 22.82 0 0121.67-22.804 143.332 143.332 0 0114.773.019 20.62 20.62 0 0119.422 20.637zM447.654 501.406a183.557 183.557 0 01-36.89 0 11.786 11.786 0 01-10.635-11.711h58.16a11.786 11.786 0 01-10.635 11.711z"
        fill="#3f3d56"
      />
      <path
        d="M420.217 463.867a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0zM428.635 467.31a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0zM429.4 461.188a10.943 10.943 0 01-8.417 0 10.943 10.943 0 018.418 0zM445.089 461.188a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0zM440.88 464.632a10.943 10.943 0 01-8.418 0 10.943 10.943 0 018.418 0z"
        fill="#d0cde1"
      />
      <path
        d="M707.958 479.664l.14 3.097.18 4.018s-18.452 1.043-22.169 4.97a2.264 2.264 0 00-.237.273l-7.39-1.618-.02-3.64s.103-.057.3-.164l.16-.084a67.27 67.27 0 0129.036-6.852z"
        fill={color}
      />
      <path
        d="M707.958 479.664l.14 3.097c-8.182.253-23.667 5.13-23.667 5.13l-5.668-1.291a67.083 67.083 0 0129.195-6.936z"
        opacity={0.1}
      />
      <path
        d="M678.922 486.516l5.51 1.376 1.677 3.858a2.264 2.264 0 00-.237.272l-7.39-1.618-.02-3.64s.103-.057.3-.164l.16-.084z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M484.958 492.664l.14 3.097.18 4.018s-18.452 1.043-22.169 4.97a2.264 2.264 0 00-.237.273l-7.39-1.618-.02-3.64s.103-.057.3-.164l.16-.084a67.27 67.27 0 0129.036-6.852z"
        fill={color}
      />
      <path
        d="M484.958 492.664l.14 3.097c-8.182.253-23.667 5.13-23.667 5.13l-5.668-1.291a67.083 67.083 0 0129.195-6.936z"
        opacity={0.1}
      />
      <path
        d="M455.922 499.516l5.51 1.376 1.677 3.858a2.264 2.264 0 00-.237.272l-7.39-1.618-.02-3.64s.103-.057.3-.164l.16-.084z"
        fill="#fff"
        opacity={0.1}
      />
      <path
        d="M819.087 386.884a18.457 18.457 0 00-5.448-3.764v-38.856a1.718 1.718 0 00-1.718-1.718h-9.619a1.718 1.718 0 00-1.718 1.718v38.11a17.438 17.438 0 00-11.948 16.547v83.352a7.638 7.638 0 007.638 7.638h20.604a7.603 7.603 0 007.603-7.603v-82.405a18.355 18.355 0 00-5.394-13.02z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M788.636 411.139h35.846v47.351h-35.846zM814.413 345.201h-.774v-.937a1.718 1.718 0 00-1.718-1.718h-9.619a1.718 1.718 0 00-1.718 1.718v.937h-.774v3.983h.774v20.357h13.055v-20.357h.774z"
      />
      <path
        d="M532.075 420.61a90.58 90.58 0 00-1.96-3.95c-16.09 3.971-26.825.616-28.518.022-.827 1.564-5.996 11.557-8.085 21.139-1.887 8.642-.792 14.436 3.256 17.22l.12.085.026.018c4.468 2.944 8.73 5.55 12.666 7.748q.796.443 1.5.823l.05.028.036.044a23.965 23.965 0 011.507 2.127 8.361 8.361 0 011.528 4.133v42.924l-.271.005c-10.263.21-16.616 1.95-16.616 3.441 0 1.637 7.618 3.46 18.548 3.46s18.548-1.823 18.548-3.46c0-1.47-6.245-3.2-16.334-3.433l-.272-.006.254-39.705a17.51 17.51 0 011.826-7.747c.204-.405.423-.799.65-1.17.184-.298.378-.59.577-.864l.037-.05.055-.03q.758-.415 1.61-.898l.066-.036c3.726-2.104 7.74-4.571 11.933-7.335 3.743-2.468 5.046-7.455 3.874-14.824-1.118-7.026-4.212-14.596-6.61-19.71z"
        fill="#d0cde1"
      />
      <path
        d="M533.037 454.243c-4.396 2.898-8.025 5.07-10.8 6.636h-.003a63.202 63.202 0 00-12.142.341c-2.845-1.588-6.683-3.865-11.404-6.977-.045-.03-.09-.06-.135-.092v-.002c-4.33-2.98-4.438-9.29-3.029-15.741 3.584-.398 9.3-.224 16.978 2.519 9.092 3.248 18.61 1.411 24.126-.26.906 5.693.354 10.975-3.591 13.576z"
        fill={color}
      />
      <circle cx={506.902} cy={434.829} r={1.245} fill={color} />
      <circle cx={503.417} cy={446.278} r={1.245} fill="#fff" />
      <circle cx={509.888} cy={437.815} r={0.747} fill={color} />
      <circle cx={512.875} cy={452.003} r={0.747} fill="#fff" />
      <circle cx={507.648} cy={452.75} r={0.747} fill="#fff" />
      <circle cx={522.831} cy={427.859} r={0.747} fill={color} />
      <path
        d="M590.454 380.144a90.576 90.576 0 00-1.96-3.95c-16.09 3.971-26.825.616-28.518.023-.828 1.563-5.997 11.557-8.086 21.138-1.887 8.642-.791 14.436 3.256 17.22l.12.086.026.017c4.468 2.944 8.73 5.551 12.666 7.749q.796.442 1.5.823l.05.027.036.045a23.965 23.965 0 011.507 2.126 8.361 8.361 0 011.529 4.133v42.924l-.272.006c-10.263.209-16.616 1.949-16.616 3.44 0 1.637 7.618 3.461 18.549 3.461s18.548-1.824 18.548-3.46c0-1.47-6.245-3.2-16.334-3.433l-.273-.007.254-39.705a17.51 17.51 0 011.826-7.747c.204-.405.423-.798.651-1.17.183-.298.377-.589.577-.864l.036-.05.055-.03q.758-.414 1.61-.898l.067-.036c3.725-2.104 7.74-4.571 11.932-7.335 3.743-2.467 5.047-7.455 3.874-14.824-1.118-7.026-4.212-14.596-6.61-19.709z"
        fill="#d0cde1"
      />
      <path
        d="M591.415 413.778c-4.396 2.897-8.025 5.07-10.8 6.635h-.002a63.202 63.202 0 00-12.142.341c-2.845-1.588-6.683-3.865-11.405-6.976-.045-.03-.09-.06-.134-.093v-.002c-4.331-2.98-4.438-9.29-3.03-15.74 3.585-.4 9.3-.225 16.978 2.518 9.093 3.248 18.611 1.411 24.127-.259.906 5.693.353 10.974-3.592 13.576z"
        fill={color}
      />
      <circle cx={565.28} cy={394.363} r={1.245} fill={color} />
      <circle cx={561.795} cy={405.813} r={1.245} fill="#fff" />
      <circle cx={568.267} cy={397.35} r={0.747} fill={color} />
      <circle cx={571.254} cy={411.537} r={0.747} fill="#fff" />
      <circle cx={566.027} cy={412.284} r={0.747} fill="#fff" />
      <circle cx={581.21} cy={387.394} r={0.747} fill={color} />
    </svg>
  );
};

SvgSpecialEvent.propTypes = {
  color: PropTypes.string
};
SvgSpecialEvent.defaultProps = {
  color: "primary"
};
const MemoSvgSpecialEvent = React.memo(SvgSpecialEvent);
export default MemoSvgSpecialEvent;
