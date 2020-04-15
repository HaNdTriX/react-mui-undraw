import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgInfluencer = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 974 826.5"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Influencer_svg__a"
          x1={523.15}
          y1={270.5}
          x2={523.15}
          y2={140.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Influencer_svg__b"
          x1={499.54}
          y1={486.65}
          x2={499.54}
          y2={196.24}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__c"
          x1={333.19}
          y1={525.11}
          x2={333.19}
          y2={483.76}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__d"
          x1={657.67}
          y1={465.78}
          x2={657.67}
          y2={424.96}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__e"
          x1={497.67}
          y1={781.22}
          x2={497.67}
          y2={711.67}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__f"
          x1={461.55}
          y1={579.89}
          x2={461.55}
          y2={515.52}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__g"
          x1={505.42}
          y1={714.55}
          x2={505.42}
          y2={520.3}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__h"
          x1={458.63}
          y1={800.14}
          x2={458.63}
          y2={525.11}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__i"
          x1={456.66}
          y1={800.14}
          x2={456.66}
          y2={525.11}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__j"
          x1={489.5}
          y1={863.25}
          x2={489.5}
          y2={797.25}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__k"
          x1={468.48}
          y1={558.97}
          x2={468.48}
          y2={297.1}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__l"
          x1={468.48}
          y1={557.05}
          x2={468.48}
          y2={295.18}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__m"
          x1={495.17}
          y1={240.97}
          x2={495.17}
          y2={232.88}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__n"
          x1={410.77}
          y1={277.73}
          x2={410.77}
          y2={259.19}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__o"
          x1={441.39}
          y1={222.2}
          x2={441.39}
          y2={196.24}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__p"
          x1={328.39}
          y1={185.45}
          x2={328.39}
          y2={106.6}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__q"
          x1={411.52}
          y1={314.08}
          x2={411.52}
          y2={119.93}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__r"
          x1={410.54}
          y1={313.12}
          x2={410.54}
          y2={118.97}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__s"
          x1={502.46}
          y1={403.68}
          x2={502.46}
          y2={393.85}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__t"
          x1={508.86}
          y1={428.61}
          x2={508.86}
          y2={412.12}
          xlinkHref="#Influencer_svg__a"
        />
        <linearGradient
          id="Influencer_svg__u"
          x1={468.48}
          y1={366.2}
          x2={468.48}
          y2={360.19}
          xlinkHref="#Influencer_svg__a"
        />
      </defs>
      <path
        d="M971.8 140.18c-4.86 29.85-15.92 58.41-20.67 88.27-3.79 23.85-3.54 48.47-10.61 71.57-7.14 23.36-21.44 44.06-28.42 67.44-.16.53-.32 1.07-.47 1.6a125.21 125.21 0 00-3.71 18.8q-.39 3.16-.65 6.32c-1.81 22 .71 44.63 1.49 66.87 1.08 30.81-2.27 64.2-22.63 87.35-14.22 16.16-34.76 25-54.6 33.4-30 12.66-60.45 25.44-92.72 29.79-60.48 8.14-122.94-13.92-182.39-.2-49.82 11.5-91 46.72-139.67 62.41-49.27 15.89-102.8 10.7-153.62.9-93.32-18-188.71-54.61-246.61-130-7.64-9.95-14.75-21-16.21-33.46-1.08-9.13 1-18.31 3-27.27 9-40 18.75-81.52 44.68-113.22 22.33-27.29 55.63-45.89 71.12-77.57 20.28-41.47 3.63-91-16-132.73-4.73-10-9.71-20.29-10.71-31.35-1.93-20.85 11.13-40.85 28.2-53.04s37.74-18.09 57.94-23.81c35.91-10 77.07-16.44 110.46-33.13 32.59-16.3 58.55-21.24 96-18.34a969.24 969.24 0 01163.4 26.87c56.8 14.45 115.48 34.2 172.81 21.78 22.86-5 44.34-14.87 66.94-20.89 18.9-5 38.43-7.31 58-8.42 39.57-2.23 84.41 2.74 109.3 33.59 18.94 23.54 21.22 56.64 16.35 86.47z"
        fill={color}
      />
      <path
        d="M541.2 808.14s-27.2-92.4 5.1-160.41c13.56-28.55 18.07-60.59 11.8-91.56a245.46 245.46 0 00-13-43"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M565.26 470.25c0 11.32-20.51 44.17-20.51 44.17s-20.5-32.89-20.5-44.17a20.51 20.51 0 0141 0zM599.15 532.93c-6.15 9.51-41.22 25.93-41.22 25.93s.64-38.71 6.79-48.22a20.51 20.51 0 1134.42 22.29zM597.67 640.13c-10.11 5.12-48.67 1.58-48.67 1.58s20.09-33.1 30.2-38.19a20.51 20.51 0 0118.46 36.62zM578.28 720.98c-9.1 6.73-47.7 9.78-47.7 9.78s14.21-36 23.31-42.75a20.518 20.518 0 1124.39 33zM514.88 561.05c8.12 7.89 46 16.07 46 16.07s-9.27-37.59-17.39-45.48a20.51 20.51 0 10-28.58 29.42zM493.41 655.9c10.11 5.1 48.67 1.58 48.67 1.58s-20.08-33.1-30.21-38.23a20.51 20.51 0 10-18.46 36.62zM485.19 750.95c9.1 6.73 47.7 9.78 47.7 9.78s-14.21-36-23.31-42.75a20.518 20.518 0 00-24.39 33z"
        fill={color}
      />
      <path
        d="M565.26 470.25c0 11.32-20.51 44.17-20.51 44.17s-20.5-32.89-20.5-44.17a20.51 20.51 0 0141 0zM599.15 532.93c-6.15 9.51-41.22 25.93-41.22 25.93s.64-38.71 6.79-48.22a20.51 20.51 0 1134.42 22.29zM597.67 640.13c-10.11 5.12-48.67 1.58-48.67 1.58s20.09-33.1 30.2-38.19a20.51 20.51 0 0118.46 36.62zM578.28 720.98c-9.1 6.73-47.7 9.78-47.7 9.78s14.21-36 23.31-42.75a20.518 20.518 0 1124.39 33zM514.88 561.05c8.12 7.89 46 16.07 46 16.07s-9.27-37.59-17.39-45.48a20.51 20.51 0 10-28.58 29.42zM493.41 655.9c10.11 5.1 48.67 1.58 48.67 1.58s-20.08-33.1-30.21-38.23a20.51 20.51 0 10-18.46 36.62zM485.19 750.95c9.1 6.73 47.7 9.78 47.7 9.78s-14.21-36-23.31-42.75a20.518 20.518 0 00-24.39 33z"
        opacity={0.25}
      />
      <path
        d="M146 698.62s-27.22-92.41 5.1-160.42c13.56-28.55 18.07-60.59 11.8-91.56a245.46 245.46 0 00-13-43"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M170.09 360.68c0 11.32-20.51 44.17-20.51 44.17s-20.51-32.84-20.51-44.17a20.51 20.51 0 0141 0zM204 423.41c-6.15 9.51-41.22 25.93-41.22 25.93s.64-38.71 6.79-48.22A20.51 20.51 0 11204 423.41zM202.51 530.6c-10.11 5.1-48.67 1.58-48.67 1.58s20.09-33.1 30.2-38.19a20.51 20.51 0 1118.46 36.62zM183.12 611.46c-9.1 6.73-47.7 9.78-47.7 9.78s14.21-36 23.31-42.75a20.518 20.518 0 0124.39 33zM119.72 451.53c8.12 7.89 46 16.07 46 16.07s-9.27-37.59-17.39-45.48a20.51 20.51 0 00-28.58 29.42zM98.25 546.38c10.11 5.1 48.67 1.58 48.67 1.58s-20.09-33.1-30.2-38.19a20.51 20.51 0 10-18.46 36.62zM90 641.43c9.1 6.73 47.7 9.78 47.7 9.78s-14.21-36-23.31-42.75a20.518 20.518 0 00-24.39 33z"
        fill={color}
      />
      <path
        d="M170.09 360.68c0 11.32-20.51 44.17-20.51 44.17s-20.51-32.84-20.51-44.17a20.51 20.51 0 0141 0zM204 423.41c-6.15 9.51-41.22 25.93-41.22 25.93s.64-38.71 6.79-48.22A20.51 20.51 0 11204 423.41zM202.51 530.6c-10.11 5.1-48.67 1.58-48.67 1.58s20.09-33.1 30.2-38.19a20.51 20.51 0 1118.46 36.62zM183.12 611.46c-9.1 6.73-47.7 9.78-47.7 9.78s14.21-36 23.31-42.75a20.518 20.518 0 0124.39 33zM119.72 451.53c8.12 7.89 46 16.07 46 16.07s-9.27-37.59-17.39-45.48a20.51 20.51 0 00-28.58 29.42zM98.25 546.38c10.11 5.1 48.67 1.58 48.67 1.58s-20.09-33.1-30.2-38.19a20.51 20.51 0 10-18.46 36.62zM90 641.43c9.1 6.73 47.7 9.78 47.7 9.78s-14.21-36-23.31-42.75a20.518 20.518 0 00-24.39 33z"
        opacity={0.25}
      />
      <path
        d="M247.37 727.39s-14.73-50 2.76-86.85a79 79 0 006.39-49.57 132.89 132.89 0 00-7-23.27"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M260.39 544.43c0 6.13-11.1 23.91-11.1 23.91s-11.1-17.78-11.1-23.91a11.1 11.1 0 0122.2 0zM278.74 578.39c-3.33 5.15-22.31 14-22.31 14s.34-21 3.68-26.1a11.103 11.103 0 1118.64 12.07zM277.94 636.43c-5.47 2.76-26.35.85-26.35.85s10.88-17.92 16.35-20.68a11.104 11.104 0 1110 19.83zM267.45 680.25c-4.93 3.65-25.83 5.29-25.83 5.29s7.69-19.5 12.62-23.14a11.103 11.103 0 1113.21 17.85zM233.12 593.62c4.4 4.27 24.89 8.7 24.89 8.7s-5-20.35-9.42-24.62a11.103 11.103 0 00-15.47 15.93zM221.5 644.97c5.47 2.76 26.35.85 26.35.85S237 627.9 231.49 625.14a11.104 11.104 0 10-10 19.83zM217 696.43c4.93 3.65 25.83 5.29 25.83 5.29s-7.69-19.5-12.62-23.14A11.103 11.103 0 10217 696.43z"
        fill={color}
      />
      <path
        d="M260.39 544.43c0 6.13-11.1 23.91-11.1 23.91s-11.1-17.78-11.1-23.91a11.1 11.1 0 0122.2 0zM278.74 578.39c-3.33 5.15-22.31 14-22.31 14s.34-21 3.68-26.1a11.103 11.103 0 1118.64 12.07zM277.94 636.43c-5.47 2.76-26.35.85-26.35.85s10.88-17.92 16.35-20.68a11.104 11.104 0 1110 19.83zM267.45 680.25c-4.93 3.65-25.83 5.29-25.83 5.29s7.69-19.5 12.62-23.14a11.103 11.103 0 1113.21 17.85zM233.12 593.62c4.4 4.27 24.89 8.7 24.89 8.7s-5-20.35-9.42-24.62a11.103 11.103 0 00-15.47 15.93zM221.5 644.97c5.47 2.76 26.35.85 26.35.85S237 627.9 231.49 625.14a11.104 11.104 0 10-10 19.83zM217 696.43c4.93 3.65 25.83 5.29 25.83 5.29s-7.69-19.5-12.62-23.14A11.103 11.103 0 10217 696.43z"
        fill="#fff"
        opacity={0.5}
      />
      <path d="M80.16 433.97a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" fill="#72351c" />
      <path
        d="M470.57 148l10.93 20.83c2.28 4.34 4.59 8.78 5 13.49.56 5.81-1.74 11.61-1.19 17.42.51 5.34 3.39 10.34 6.74 15 20.8 28.7 62.51 46.52 103.45 44.2-15.48 6.54-33.17 8.53-50.47 10.41-8.36.91-16.88 1.82-25.19.67-7.61-1-14.7-3.77-21.46-6.79-13.38-6-26.1-13.37-35.24-23.3S448.8 217.21 451.42 205c.92-4.29 2.77-8.43 3.52-12.74 1.13-6.52-.28-13.23 1.28-19.68 1.36-5.61 4.89-10.73 6.47-16.3 1.43-5-3.43-12.24.2-16 3.91.92 6.11 4.72 7.68 7.72z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__a)"
      />
      <path
        d="M353.72 486.65l56.15-75-8.87-88.48 124.58-10.05-.46-17.83 27.58 58.66 83.73 79.81.58.83L656.2 425l-73-88.33L548.76 278l-.08-.27c-8.56-27.55-34.08-46.81-63.55-48-7.32-.29-13.61-.82-16.16-1.76-7.88-2.88-3.94-31.73-3.94-31.73L411.84 202s4.95 11.8 8.6 24.36a32 32 0 01-14.8 36.45c-16.22 9.56-48.89 26.11-44.52 42.57 6.9 26 14.28 87 14.28 87l-32.51 91.35"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__b)"
      />
      <path
        d="M342.88 483.76s-44.33 41.35-25.61 41.35 36.45-38.46 36.45-38.46"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__c)"
      />
      <path
        d="M657.11 426.07l-.91-1.1-19.2 9.61c3.8 5.31 25.29 34.41 37.83 30.91 13.81-3.84-17.72-39.42-17.72-39.42z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__d)"
      />
      <path
        d="M510.34 711.67s9.85 49-4.93 60.58-23.64 8.65-23.64 8.65v-66.35z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__e)"
      />
      <path
        d="M324.54 515.52s-18.11 21.14-11.21 25.95S336 543.38 337 554s35.46 7.69 35.46 7.69 37.43 23.08 69 17.31S531 565.5 531 565.5l31.52-1s25.64-12.5 30.57-10.5 23.64-14.42 16.75-26-285.3-12.48-285.3-12.48z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__f)"
      />
      <path
        d="M324.54 515.52s-18.11 21.14-11.21 25.95S336 543.38 337 554s35.46 7.69 35.46 7.69 37.43 23.08 69 17.31S531 565.5 531 565.5l31.52-1s25.64-12.5 30.57-10.5 23.64-14.42 16.75-26-285.3-12.48-285.3-12.48z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__f)"
        opacity={0.2}
      />
      <path
        d="M537.92 547.23l-13.79 87.51s10.84 23.08-10.84 57.7l-3.94 19.23-26.6 2.88-9.84-194.25z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__g)"
      />
      <path
        d="M412.82 534.73L440.4 604s4.93 28.85 3 34.62-4.93 61.54 5.91 78.85 25.61 82.7 25.61 82.7l29.55-2.88s-10.88-18.29-10.88-29.85v-54.81s0-37.5-6.9-64.43l2.63-18a51.37 51.37 0 00-.5-17.76l-17.89-87.33z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__h)"
        opacity={0.1}
      />
      <path
        d="M410.85 534.73L438.43 604s4.93 28.85 3 34.62-4.93 61.54 5.91 78.85 25.61 82.7 25.61 82.7l29.55-2.88s-10.88-18.29-10.88-29.85v-54.81s0-37.5-6.9-64.43l2.63-18a51.37 51.37 0 00-.5-17.76L469 525.11z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__i)"
      />
      <path
        d="M472.91 800.14s5.91 17.31 0 22.12S469 858.8 469 858.8s36.45 14.42 41.37-8.65c0 0-9.85-43.27-7.88-52.89z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__j)"
      />
      <path
        d="M451.24 311.63s48.27-32.7 73.88 0c0 0 5.91 40.39 0 48.08 0 0-4.93 31.73 3 36.54s13.79 20.19 13.79 20.19 28.57 12.5 32.51 21.16 45.31 95.2 45.31 95.2-55.16 28.85-74.86 26-63 0-63 0-23.64-25-66-13.46-98.6-18.34-98.6-18.34L404 412.6s14.78-19.23 7.88-41.35-7.88-51.92-7.88-51.92 2.91-23.08 47.24-7.7z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__k)"
        opacity={0.1}
      />
      <path
        d="M451.24 309.71s48.27-32.7 73.88 0c0 0 5.91 40.39 0 48.08 0 0-4.93 31.73 3 36.54s13.79 20.19 13.79 20.19 28.57 12.5 32.51 21.16 45.31 95.2 45.31 95.2-55.16 28.85-74.86 26-63 0-63 0-23.64-25-66-13.46-98.51-18.27-98.51-18.27L404 410.68s14.78-19.23 7.88-41.35S404 317.4 404 317.4s2.91-23.08 47.24-7.69z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__l)"
      />
      <path
        d="M475.38 233.16s31.69-2.57 39.62 7.84"
        transform="translate(-113 -36.75)"
        opacity={0.1}
        fill="url(#Influencer_svg__m)"
      />
      <path
        d="M392.86 277.73s23-21.44 35.82-18.21"
        transform="translate(-113 -36.75)"
        opacity={0.1}
        fill="url(#Influencer_svg__n)"
      />
      <path
        d="M414.79 202s2 4.86 4.46 11.65a41.15 41.15 0 0047.87 1.68 115.23 115.23 0 01.86-19.09z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__o)"
        opacity={0.1}
      />
      <ellipse
        cx={328.39}
        cy={146.02}
        rx={40.39}
        ry={39.43}
        fill="url(#Influencer_svg__p)"
      />
      <path
        d="M483 150.75c-2.11-7.17-5.67-20.5-13.12-22.16a35.12 35.12 0 01-4.8-1.07c-3-1.14-5.11-3.83-7.61-5.85-5.56-4.48-15.09 1.17-22.26.45-6.73-.68-13.79-1.14-20 1.38-12.53 5-17.3 19.65-26.3 29.54-6.74 7.4-15.91 12.15-24.43 17.51s-16.93 11.95-20.58 21.18c-2.58 6.53-2.52 13.76-1.9 20.74a142.24 142.24 0 0016.45 54.75c2.62 4.86 5.56 9.66 6.85 15s.65 11.5-3.21 15.5c-5.44 5.65-14.69 5-22 8 6.07 6.06 15.1 8.73 23.77 8.37s17-3.52 24.53-7.74c19.4-10.87 34.09-29 42.1-49.37 3.72-9.47 6.08-19.86 3.81-29.77-1.95-8.5-7.11-15.9-11.45-23.51s-8-16.2-6.65-24.81c1.26-7.75 6.62-14.47 13.27-18.89 5.5-3.66 15.24-8.65 22.17-8.36 7.67.3 33.43 6.29 31.36-.89z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__q)"
        opacity={0.1}
      />
      <path
        d="M482 149.79c-2.11-7.17-5.67-20.5-13.12-22.16a35.12 35.12 0 01-4.8-1.07c-3-1.14-5.11-3.83-7.61-5.85-5.56-4.48-15.09 1.17-22.26.45-6.73-.68-13.79-1.14-20 1.38-12.53 5-17.3 19.65-26.3 29.54-6.74 7.4-15.91 12.15-24.43 17.51s-16.93 11.95-20.58 21.18c-2.58 6.53-2.52 13.76-1.9 20.74a142.24 142.24 0 0016.45 54.75c2.62 4.86 5.56 9.66 6.85 15s.65 11.5-3.21 15.5c-5.44 5.65-14.69 5-22 8 6.07 6.06 15.1 8.73 23.77 8.37s17-3.52 24.53-7.74c19.4-10.87 34.09-29 42.1-49.37 3.72-9.47 6.08-19.86 3.81-29.77-1.95-8.5-7.11-15.9-11.45-23.51s-8-16.2-6.65-24.81c1.26-7.75 6.62-14.47 13.27-18.89 5.5-3.66 15.24-8.65 22.17-8.36 7.68.32 33.45 6.32 31.36-.89z"
        transform="translate(-113 -36.75)"
        fill="url(#Influencer_svg__r)"
      />
      <path
        d="M522.65 393.85s-18.72 11.54-40.39 9.62"
        transform="translate(-113 -36.75)"
        opacity={0.1}
        fill="url(#Influencer_svg__s)"
      />
      <path
        d="M542.35 412.12s-48.27 18.27-67 16.35"
        transform="translate(-113 -36.75)"
        opacity={0.1}
        fill="url(#Influencer_svg__t)"
      />
      <path
        d="M414.3 365s52.21 4.81 61.07-4.81c0 0 28.57 8.65 47.28 0"
        transform="translate(-113 -36.75)"
        opacity={0.1}
        fill="url(#Influencer_svg__u)"
      />
      <path
        d="M358.81 119.92l10.38 20.25c2.16 4.22 4.36 8.54 4.79 13.12.54 5.65-1.65 11.29-1.13 16.94.48 5.19 3.22 10.06 6.4 14.55 19.75 27.91 59.33 45.24 98.2 43-14.69 6.36-31.49 8.29-47.91 10.12-7.94.88-16 1.77-23.91.65-7.22-1-14-3.67-20.37-6.6-12.7-5.81-24.78-13-33.45-22.66s-13.65-22-11.17-33.9c.87-4.17 2.63-8.2 3.34-12.39 1.08-6.34-.27-12.86 1.22-19.14 1.29-5.45 4.64-10.43 6.14-15.85 1.36-4.9-3.25-11.9.19-15.59 3.7.9 5.78 4.58 7.28 7.5z"
        fill="#252223"
      />
      <path
        d="M247.9 449.25l53.29-73-8.42-86L411 280.49l-.44-17.34 26.18 57 79.48 77.61.55.8 18.23-9.31-69.24-85.9-32.73-57-.08-.26a65.84 65.84 0 00-60.32-46.65c-7-.28-12.91-.8-15.34-1.71-7.48-2.81-3.74-30.86-3.74-30.86l-50.49 5.61s4.69 11.48 8.16 23.68a31.43 31.43 0 01-14.05 35.44c-15.4 9.3-46.41 25.39-42.26 41.39 6.55 25.25 13.56 84.62 13.56 84.62l-30.86 88.83"
        fill="#f0898b"
      />
      <path
        d="M237.61 446.41s-42.08 40.21-24.31 40.21 34.6-37.37 34.6-37.37M535.88 390.31l-.88-1.06-18.22 9.35c3.6 5.16 24 33.45 35.91 30.05 13.11-3.74-16.81-38.34-16.81-38.34z"
        fill="#fdb797"
      />
      <path
        d="M396.56 668.01s9.35 47.69-4.68 58.91-22.44 8.42-22.44 8.42v-64.52z"
        fill="#333"
      />
      <path
        d="M220.2 477.25s-17.2 20.59-10.64 25.26 21.51 1.87 22.44 12.16 33.66 7.48 33.66 7.48 35.53 22.44 65.45 16.83 85.09-13.09 85.09-13.09l29.92-.94s24.31-12.16 29-10.29 22.44-14 15.9-25.25-270.82-12.16-270.82-12.16z"
        fill="#f0898b"
      />
      <path
        d="M220.2 477.25s-17.2 20.59-10.64 25.26 21.51 1.87 22.44 12.16 33.66 7.48 33.66 7.48 35.53 22.44 65.45 16.83 85.09-13.09 85.09-13.09l29.92-.94s24.31-12.16 29-10.29 22.44-14 15.9-25.25-270.82-12.16-270.82-12.16z"
        opacity={0.2}
      />
      <path
        d="M422.74 508.12l-13.09 85.13s10.29 22.44-10.29 56.1l-3.74 18.7-25.25 2.81L361 481.94z"
        fill="#fdb797"
      />
      <path
        d="M304 495.97l26.18 67.28s4.68 28.05 2.81 33.66-4.68 59.84 5.61 76.67 24.31 80.41 24.31 80.41l28.09-2.74s-10.29-17.77-10.29-29v-53.3s0-36.47-6.55-62.65l2.5-17.51a51.15 51.15 0 00-.48-17.26l-17-84.91z"
        opacity={0.1}
      />
      <path
        d="M302.13 495.97l26.18 67.28s4.68 28.05 2.81 33.66-4.68 59.84 5.61 76.67S361 754.03 361 754.03l28.08-2.78s-10.29-17.77-10.29-29v-53.3s0-36.47-6.55-62.65l2.5-17.51a51.15 51.15 0 00-.48-17.26l-17-84.91z"
        fill="#fdb797"
      />
      <path
        d="M361 754.03s5.61 16.83 0 21.51-3.74 35.53-3.74 35.53 34.6 14 39.27-8.42c0 0-9.35-42.08-7.48-51.43z"
        fill="#333"
      />
      <path
        d="M340.46 279.04s45.82-31.79 70.13 0c0 0 5.61 39.27 0 46.75 0 0-4.68 30.86 2.81 35.53s13.09 19.64 13.09 19.64 27.12 12.16 30.86 20.57 43 92.57 43 92.57-52.35 28.05-71.06 25.24-59.84 0-59.84 0-22.45-24.31-62.65-13.09-93.5-17.77-93.5-17.77l82.28-111.23s14-18.7 7.48-40.21-7.48-50.49-7.48-50.49 2.81-22.47 44.88-7.51z"
        opacity={0.1}
      />
      <path
        d="M340.46 277.17s45.82-31.79 70.13 0c0 0 5.61 39.27 0 46.75 0 0-4.68 30.86 2.81 35.53s13.09 19.64 13.09 19.64 27.11 12.16 30.85 20.57 43 92.57 43 92.57-52.34 28.02-71.05 25.24-59.84 0-59.84 0-22.45-24.31-62.65-13.09-93.5-17.77-93.5-17.77l82.28-111.26s14-18.7 7.48-40.21-7.48-50.49-7.48-50.49 2.81-22.4 44.88-7.48z"
        fill="#f0898b"
      />
      <path
        d="M363.38 202.74s30.08-2.5 37.58 7.6M285.05 246.07s21.82-20.85 34-17.7M305.87 172.45s1.93 4.72 4.23 11.32a38.31 38.31 0 0045.44 1.63 114.74 114.74 0 01.82-18.57z"
        fill="#72351c"
        opacity={0.1}
      />
      <circle cx={331.11} cy={153.75} r={38.34} fill="#fdb797" />
      <path
        d="M370.58 122.61c-2-7-5.38-19.93-12.46-21.55a32.66 32.66 0 01-4.56-1c-2.88-1.11-4.85-3.73-7.23-5.69-5.27-4.35-14.33 1.14-21.13.44-6.39-.66-13.09-1.11-19 1.34-11.89 4.91-16.42 19.1-25 28.72-6.39 7.2-15.1 11.81-23.19 17s-16.01 11.61-19.52 20.59c-2.45 6.35-2.39 13.38-1.81 20.17a140.79 140.79 0 0015.62 53.23c2.49 4.73 5.27 9.39 6.5 14.59s.61 11.18-3 15.07c-5.16 5.49-13.94 4.88-20.92 7.74 5.76 5.89 14.34 8.49 22.56 8.14s16.14-3.42 23.29-7.52c18.41-10.57 32.36-28.18 40-48 3.53-9.21 5.77-19.32 3.62-28.94-1.85-8.27-6.75-15.46-10.87-22.86s-7.64-15.76-6.32-24.13c1.19-7.54 6.28-14.07 12.59-18.37 5.22-3.55 14.47-8.41 21-8.12 7.37.3 31.83 6.13 29.83-.85z"
        fill="#72351c"
        opacity={0.1}
      />
      <path
        d="M369.64 121.68c-2-7-5.38-19.93-12.46-21.55a32.66 32.66 0 01-4.56-1c-2.88-1.11-4.85-3.73-7.23-5.69-5.27-4.35-14.33 1.14-21.13.44-6.39-.66-13.09-1.11-19 1.34-11.89 4.91-16.42 19.1-25 28.72-6.39 7.2-15.1 11.81-23.19 17s-16.07 11.61-19.52 20.59c-2.45 6.35-2.39 13.38-1.81 20.17a140.79 140.79 0 0015.62 53.23c2.49 4.73 5.27 9.39 6.5 14.59s.61 11.18-3 15.07c-5.16 5.49-13.94 4.88-20.92 7.74 5.76 5.89 14.34 8.49 22.56 8.14s16.14-3.42 23.29-7.52c18.41-10.57 32.36-28.18 40-48 3.53-9.21 5.77-19.32 3.62-28.94-1.85-8.27-6.75-15.46-10.87-22.86s-7.64-15.76-6.32-24.13c1.19-7.54 6.28-14.07 12.59-18.37 5.22-3.55 14.47-8.41 21-8.12 7.38.3 31.83 6.12 29.83-.85z"
        fill="#252223"
      />
      <path
        d="M408.25 358.99s-17.77 11.22-38.34 9.35M427 376.75s-45.82 17.77-63.58 15.9M305.4 330.94s49.56 4.68 58-4.68c0 0 27.12 8.42 44.88 0M300.3 366.93l-50.38 64.67-2.02 10.1 52.4-74.77z"
        fill="#72351c"
        opacity={0.1}
      />
      <path
        d="M868.84 114.91l-33.32-11.39a4.8 4.8 0 00-6.1 3L818 139.83a4.8 4.8 0 003 6.1l33.32 11.39a4.8 4.8 0 006.1-3L871.81 121a4.8 4.8 0 00-2.97-6.09zm-9.77 13.45c-.07.27-.17.55-.26.81-2.81 8.21-12.28 15.53-23.7 11.63a18.58 18.58 0 01-8.58-6 13.82 13.82 0 001.47.59 13.15 13.15 0 008.61 0 6.57 6.57 0 01-4.33-6.29 7.07 7.07 0 002.84.84 6.56 6.56 0 01-2.89-7.79v-.08a6.56 6.56 0 002.53 1.74 6.55 6.55 0 01-1-6.11 6.48 6.48 0 011.91-2.85 18.63 18.63 0 0010.58 10.87 6.57 6.57 0 0112.53-2 12.86 12.86 0 004.45-.15 6.54 6.54 0 01-3.89 2.49 13.06 13.06 0 003.91.26 13.81 13.81 0 01-4.17 2.04zM745.06 221.98l.43 35.21a4.8 4.8 0 01-4.74 4.86l-8.53.1-.22-17.72 6.06-.07.79-6.77-6.93.08-.05-4.32c0-2 .5-3.3 3.31-3.33h3.58l-.07-6a48.15 48.15 0 00-5.22-.21c-5.16.06-8.66 3.26-8.59 9l.06 5-6.08.07.08 6.76 6.09-.07.22 17.71-19.69.24a4.8 4.8 0 01-4.86-4.74l-.43-35.21a4.8 4.8 0 014.74-4.86l35.19-.46a4.8 4.8 0 014.86 4.73zM792.82 324.52l11 32.64a4.7 4.7 0 01-3 6l-22.77 7.67a25.07 25.07 0 00.69-6.35l-.41-5.89c1.22 1.17 3.79 1.63 6.1.86 6.87-2.31 9.69-10.29 7-18.14-2.53-7.52-10.57-11.08-18.47-8.42-9.83 3.31-12.82 11.66-10.4 18.85 1.12 3.34 4.3 6.89 7.59 7.26.5.06.7-.11.66-.56s-.16-2-.24-2.79a.71.71 0 00-.38-.6 9.37 9.37 0 01-3.45-4.62 10.4 10.4 0 017-13.35c5.59-1.88 10.8.61 12.63 6.06 2.07 6.16.41 11.47-3.65 12.83a3.49 3.49 0 01-4.76-3c-.27-2.92 0-6.26-.67-8.22-1.66-4.91-8.43-1.88-6.22 4.68a8.78 8.78 0 001.82 3.16c1.24 13.29.85 13.6 3.27 18.78h.23l-8.22 2.77a4.7 4.7 0 01-6-3l-11-32.64a4.7 4.7 0 013-6l32.64-11a4.7 4.7 0 016.01 3.02zM848.82 247.85a13 13 0 1016.57-8.12 13 13 0 00-16.57 8.12zm20.37 7a8.48 8.48 0 11-5.28-10.77 8.5 8.5 0 015.28 10.77zm-15.49-22.9a3 3 0 11-3.87 1.89 3 3 0 013.87-1.89zm5.72-7.18c-3.92-1.14-7.64-1.43-11.42.44s-5.83 5-7.34 8.76-5.67 15.81-6.8 19.87-1.42 7.63.43 11.42 5 5.83 8.76 7.34 15.81 5.67 19.87 6.8 7.64 1.43 11.42-.44 5.83-5 7.34-8.76 5.67-15.81 6.8-19.87 1.43-7.64-.44-11.42-5-5.83-8.76-7.34-15.8-5.66-19.86-6.8zm22.36 13.39a8.59 8.59 0 013 6.14c.17 3.6-2.69 11-3.89 14.53s-3.5 11.13-5.83 13.86a8.59 8.59 0 01-6.14 3c-3.6.17-11-2.69-14.53-3.89s-11.13-3.5-13.86-5.83a8.59 8.59 0 01-3-6.14c-.17-3.6 2.69-11 3.89-14.53s3.5-11.13 5.83-13.86a8.59 8.59 0 016.14-3c3.6-.17 11 2.69 14.53 3.89s11.14 3.5 13.87 5.84zM623.89 324.62l10.88 3.1-8.23 7.76zm23.22-18.64l8.62 35.27a5 5 0 01-3.64 6l-35.32 8.62a5 5 0 01-6-3.64l-8.62-35.32a5 5 0 013.64-6l35.32-8.62a5 5 0 016 3.69zm.1 18.72s-1.46-6-2.92-8.66a4.71 4.71 0 00-4-2.46c-3-.08-14.46 2.71-14.46 2.71s-11.43 2.79-14.08 4.25a4.71 4.71 0 00-2.44 4c-.07 3 1.4 9 1.4 9s1.46 6 2.92 8.66a4.65 4.65 0 004 2.41c3 .07 14.45-2.72 14.45-2.72s11.43-2.79 14.08-4.25a4.65 4.65 0 002.45-4c.07-3-1.39-9-1.39-9z"
        opacity={0.2}
      />
    </svg>
  );
};

SvgInfluencer.propTypes = {
  color: PropTypes.string
};
SvgInfluencer.defaultProps = {
  color: "primary"
};
export default SvgInfluencer;
