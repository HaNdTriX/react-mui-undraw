import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgData = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 891 711.05"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Data_svg__o"
          x1={191.31}
          y1={423.33}
          x2={191.31}
          y2={423.02}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__a"
          x1={213.62}
          y1={486}
          x2={213.62}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Data_svg__c"
          x1={227.62}
          y1={429}
          x2={227.62}
          y2={418}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__d"
          x1={329.62}
          y1={429}
          x2={329.62}
          y2={418}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__e"
          x1={336.62}
          y1={83}
          x2={336.62}
          y2={72}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__f"
          x1={336.62}
          y1={98}
          x2={336.62}
          y2={87}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__g"
          x1={336.62}
          y1={113}
          x2={336.62}
          y2={102}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__h"
          x1={336.62}
          y1={128}
          x2={336.62}
          y2={117}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__i"
          x1={214.12}
          y1={332}
          x2={214.12}
          y2={182}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__j"
          x1={383.9}
          y1={435.3}
          x2={383.9}
          y2={283.3}
          gradientTransform="translate(-5.78 .18)"
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__k"
          x1={442.9}
          y1={321.3}
          x2={442.9}
          y2={307.3}
          gradientTransform="translate(-10.11 -4.98)"
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__l"
          x1={484.9}
          y1={317.3}
          x2={484.9}
          y2={303.3}
          gradientTransform="translate(-10.64 -8.78)"
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__m"
          x1={547.96}
          y1={413.42}
          x2={547.96}
          y2={413.16}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__n"
          x1={517.63}
          y1={581.29}
          x2={517.63}
          y2={408.48}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__b"
          x1={227.62}
          y1={373}
          x2={227.62}
          y2={362}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__p"
          x1={228.23}
          y1={619.83}
          x2={228.23}
          y2={417.36}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__q"
          x1={692}
          y1={659.05}
          x2={692}
          y2={163.05}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__r"
          x1={595.12}
          y1={395.68}
          x2={595.12}
          y2={241.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__s"
          x1={788.12}
          y1={472.68}
          x2={788.12}
          y2={318.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__t"
          x1={696.12}
          y1={614.68}
          x2={696.12}
          y2={508.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__u"
          x1={749.12}
          y1={475.15}
          x2={749.12}
          y2={351.15}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__v"
          x1={790.62}
          y1={362.68}
          x2={790.62}
          y2={344.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__w"
          x1={760.62}
          y1={699.68}
          x2={760.62}
          y2={677.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__x"
          x1={607.62}
          y1={687.68}
          x2={607.62}
          y2={566.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__y"
          x1={608.62}
          y1={648.68}
          x2={608.62}
          y2={648.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__z"
          x1={482.12}
          y1={645.68}
          x2={482.12}
          y2={590.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__A"
          x1={459.62}
          y1={699.68}
          x2={459.62}
          y2={677.68}
          xlinkHref="#Data_svg__a"
        />
        <linearGradient
          id="Data_svg__B"
          x1={486.35}
          y1={708.79}
          x2={600.65}
          y2={708.79}
          xlinkHref="#Data_svg__a"
        />
      </defs>
      <ellipse cx={370} cy={694.05} rx={67} ry={17} fill="#f2f2f2" />
      <ellipse cx={375} cy={506.05} rx={67} ry={17} fill="#f2f2f2" />
      <ellipse cx={67} cy={514.05} rx={67} ry={17} fill="#f2f2f2" />
      <path fill="#f5f5f5" d="M22.62 4h383v14.5h-383z" />
      <path fill="url(#Data_svg__a)" d="M15.62 0h396v486h-396z" />
      <path fill="#fff" d="M22.62 18.5h383V478h-383z" />
      <circle cx={30.5} cy={11.5} r={3.5} fill="#ff5252" />
      <circle cx={40.12} cy={11.5} r={3.5} fill="#ff0" />
      <circle cx={49.75} cy={11.5} r={3.5} fill="#69f0ae" />
      <path fill={color} d="M33.62 36h149v9h-149z" opacity={0.2} />
      <path fill="#f5f5f5" d="M139.62 73h149v9h-149z" />
      <path fill={color} opacity={0.5} d="M33.62 363h149v9h-149z" />
      <path fill="url(#Data_svg__b)" d="M202.62 362h50v11h-50z" />
      <path fill="url(#Data_svg__c)" d="M202.62 418h50v11h-50z" />
      <path fill="url(#Data_svg__d)" d="M304.62 418h50v11h-50z" />
      <path
        fill={color}
        d="M204.62 363h47v9h-47zM204.62 419h47v9h-47zM305.62 419h47v9h-47z"
      />
      <path fill="#f5f5f5" d="M33.62 391h149v9h-149z" />
      <path fill={color} opacity={0.5} d="M204.62 391h149v9h-149z" />
      <path fill="#f5f5f5" d="M204.62 447h149v9h-149z" />
      <path fill={color} opacity={0.5} d="M33.62 419h149v9h-149z" />
      <path
        fill="#f5f5f5"
        d="M33.62 447h149v9h-149zM139.62 88h84v9h-84zM238.62 88h29v9h-29zM139.62 118h84v9h-84zM238.62 118h29v9h-29zM139.62 103h149v9h-149z"
      />
      <path fill={color} d="M243.62 36h149v9h-149z" opacity={0.2} />
      <path fill="url(#Data_svg__e)" d="M327.62 72h18v11h-18z" />
      <path fill="url(#Data_svg__f)" d="M327.62 87h18v11h-18z" />
      <path fill="url(#Data_svg__g)" d="M327.62 102h18v11h-18z" />
      <path fill="#ff5252" d="M328.62 73h16v9h-16z" />
      <path fill="#ff9800" d="M328.62 88h16v9h-16z" />
      <path fill="#69f0ae" d="M328.62 103h16v9h-16z" />
      <path fill="url(#Data_svg__h)" d="M327.62 117h18v11h-18z" />
      <path fill={color} d="M328.62 118h16v9h-16z" />
      <path fill="url(#Data_svg__i)" d="M30.62 182h367v150h-367z" />
      <path fill={color} opacity={0.5} d="M33.62 185h359v142h-359z" />
      <path fill="#fff" opacity={0.5} d="M44.62 196h348v-11h-359v142h11V196z" />
      <path
        transform="rotate(-5.2 -739.107 2013.604)"
        fill="url(#Data_svg__j)"
        d="M193.12 283.48h370v152h-370z"
      />
      <path
        fill="#fff"
        d="M38.811 209.538l357.523-32.537 12.87 141.416L51.68 350.954z"
      />
      <path
        d="M65.5 325.59l-6.2-78.77s32-34 96.6-8.8 95.06 7.41 105.56-9.61 65-36 82.66-7.53 38.84-3.54 38.84-3.54l7.16 78.67z"
        fill={color}
        opacity={0.5}
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M98.03 229.66l.54 5.98"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeDasharray="11.51 11.51"
        d="M99.62 247.1l5.74 63.06"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M105.88 315.89l.55 5.97M159.52 239.42l.55 5.97"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeDasharray="13.06 13.06"
        d="M161.25 258.4l4.15 45.51"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M165.99 310.41l.54 5.98M222.26 250.1l.6 5.97"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeDasharray="9.79 9.79"
        d="M223.83 265.82l3.38 34.1"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M227.7 304.79l.59 5.98M278.65 214.84l.54 5.98"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeDasharray="11.28 11.28"
        d="M280.21 232.05l5.63 61.79"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M286.35 299.45l.55 5.98M319.35 206.59l.54 5.97"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeDasharray="11.93 11.93"
        d="M320.97 224.44l5.95 65.33"
      />
      <path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M327.46 295.71l.55 5.97"
      />
      <circle
        cx={252.36}
        cy={323.73}
        r={5}
        transform="rotate(-5.2 -864.923 1977.88)"
        fill="#ff9800"
      />
      <circle
        cx={313.56}
        cy={334.23}
        r={5}
        transform="rotate(-5.2 -803.722 1988.382)"
        fill="#ff5252"
      />
      <circle
        cx={376.76}
        cy={344.54}
        r={5}
        transform="rotate(-5.2 -740.524 1998.644)"
        fill="#69f0ae"
      />
      <circle
        cx={432.8}
        cy={309.31}
        r={7}
        transform="rotate(-5.2 -684.42 1963.457)"
        fill="url(#Data_svg__k)"
      />
      <circle
        cx={474.26}
        cy={301.52}
        r={7}
        transform="rotate(-5.2 -642.91 1955.633)"
        fill="url(#Data_svg__l)"
      />
      <circle
        cx={432.8}
        cy={309.31}
        r={5}
        transform="rotate(-5.2 -684.42 1963.457)"
        fill={color}
      />
      <circle
        cx={474.26}
        cy={301.52}
        r={5}
        transform="rotate(-5.2 -642.91 1955.633)"
        fill={color}
      />
      <circle
        cx={537.64}
        cy={313.82}
        r={5}
        transform="rotate(-5.2 -579.477 1968.002)"
        fill="#69f0ae"
      />
      <path
        d="M547.76 413.2l.07.23c.77-.43-.07-.23-.07-.23z"
        transform="translate(-154.5 -94.48)"
        fill="url(#Data_svg__m)"
        opacity={0.2}
      />
      <path
        d="M539.48 581.18l16.28-2.63-2.24-10v-.14h-.06l-11.54-53v-38.65a14.26 14.26 0 00-.08-1.47c17.24-22.86 7-58.73 6-61.86-.18.09-.45.21-.83.36a21.06 21.06 0 00-.79-4.13s-5-3.18-7.73.91c-2.38 3.57-.61 5.75-.12 6.26l-.34.11a11.52 11.52 0 011.58 3.94 8.65 8.65 0 00-.54-1c-.63-.11-1-.21-1-.21l-.12-.11-.34.11c1.73 2.53 2.34 7 2.26 12.3a17.36 17.36 0 00-2-2.31 17.65 17.65 0 00-11.7-4.88h-.83q-.68 0-1.36.09h-.34l-.57.08-.65.12-.47.1-.81.22-.3.09c-.34.11-.67.22-1 .35a17.24 17.24 0 01-3.43 1.24c-.16 0-.32 0-.49.05a5.72 5.72 0 01-3.75-1.07l-.36-.28a5.29 5.29 0 01-.39-.37 2.54 2.54 0 00-.17 1.09 3.35 3.35 0 001.17 2.27 3.17 3.17 0 00.62.42 2.68 2.68 0 001.06.3h.38-.09c-.23.11-.46.21-.7.3h-.05c-.26.09-.51.17-.78.24a8.68 8.68 0 01-4 .06l-.43-.1c-.21-.06-.43-.12-.63-.19a4.8 4.8 0 00.22.44l.08.13.18.28.11.14.2.25.12.13.25.25.1.09.37.31.13.09.27.19.18.11.24.14.2.1.25.11.21.09.28.1.35.1.26.07h1.74a5 5 0 001.5-.37l-.92.38-.46.16-.47.17-.47.14-.48.14-.47.12-.5.12-.46.09-.53.09-.44.07-.57.07H506.87a4.21 4.21 0 011.51.8 4 4 0 00.93.5 3.59 3.59 0 00.45.1H512a6.54 6.54 0 012.59.83 4.65 4.65 0 011.11 1c-.14.23-.28.45-.4.69s-.21.4-.31.61q-.3.62-.53 1.27a14.08 14.08 0 00-.86 4.85V445.9q0 .36.08.72v.19q.06.44.16.87v.17q.08.36.18.71l.06.21a14 14 0 00.61 1.66l.07.16q.17.37.35.72v.07q.22.4.46.79v.06q.22.36.47.7l.06.08a14.17 14.17 0 001.17 1.41 14.14 14.14 0 003.77 2.83 6.3 6.3 0 00-.11.65 6.36 6.36 0 000 .68v5.28q-.45.24-.88.51c-12.53-5.69-31.19-46-31.19-46h-.45c1.82-1.36 0-7.28 0-7.28a8.54 8.54 0 00-3.5-1.16H483.3l-.2.06h-.1l-.3.11-.28.13-.1.05-.19.11-.13.61-.18.12-.11.09-.17.14-.11.1-.17.16-.1.11-.17.2-.08.1-.25.34c-2.73 4.09 0 6.37 0 6.37a40.74 40.74 0 00-.25 4.75c-.2 29.46 31.33 52.29 32.94 53.43-.71 1.84-6.57 18.14.07 38.49a.65.65 0 00.08.14 59.08 59.08 0 00-17.72 55.88l.13.61h.29a4 4 0 01-.11.4 4.59 4.59 0 01-.29.7 5.43 5.43 0 01-.73 1.07c-.31.36-.67.72-1.05 1.09l-.4.38c-1.59 1.52-3.2 3-2 3.6h17.21v-7.51h.3s-.12-.23-.3-.68V571h-.06c-.9-2.32-3-9.5.36-20.56 4.09-13.65 20-20.47 20-20.47l.29 1h-.06l12.48 41c0 .16 0 .32-.05.49a6.67 6.67 0 01-.27 1.14 7.25 7.25 0 01-.34.84c-.77 1.59-2.1 3.46-2.68 4.86a4.71 4.71 0 00-.21.59 1.82 1.82 0 00-.07.7.81.81 0 00.53.67h.23l.48-.08zm-4.82-116.73q-.47-.26-1-.49V459a6.32 6.32 0 00-.11-1.13 14.11 14.11 0 003-1.93c-.6 3.06-1.27 5.99-1.88 8.51z"
        transform="translate(-154.5 -94.48)"
        fill="url(#Data_svg__n)"
        opacity={0.2}
      />
      <path
        d="M325.88 328.61s-3-2.52 0-7.06 8.57-1 8.57-1 2 6.55 0 8.06-8.57 0-8.57 0z"
        fill="#ca7070"
      />
      <path
        data-name="&lt;Path&gt;"
        d="M357.04 497.27h-13.89a4.56 4.56 0 01-1.31 3.57c-1.87 2.16-5.63 4.77-3.86 5.66h19.06z"
        fill="#00695c"
      />
      <path
        d="M342.85 500.84a4.56 4.56 0 001.31-3.57h-1a4.56 4.56 0 01-1.31 3.57c-1.87 2.16-5.63 4.77-3.86 5.66h1c-1.77-.89 1.99-3.49 3.86-5.66z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        data-name="&lt;Path&gt;"
        d="M406.5 494.41l-13 2.11a6.62 6.62 0 01-.59 4.58c-1.42 3-4.61 6.74-2.69 7.55l18.82-3z"
        fill="#00695c"
      />
      <path
        d="M400.16 322.46s14.87 46.91-10.07 72.88l-7.2-5.51s14.74-51.2 6.49-63.22c14.56-4.85 10.78-4.15 10.78-4.15z"
        fill="#00695c"
      />
      <path
        d="M389.88 326.6s-3-2.52 0-7.06 8.57-1 8.57-1 2 6.55 0 8.06-8.57 0-8.57 0z"
        fill="#ca7070"
      />
      <path
        d="M393.91 501.11a6.62 6.62 0 00.59-4.59l12-2v-.16l-13 2.16a6.62 6.62 0 01-.59 4.58c-1.42 3-4.61 6.74-2.69 7.55l.79-.13c-1.43-1 1.54-4.59 2.9-7.41z"
        fill="#fff"
        opacity={0.2}
      />
      <rect
        x={370.48}
        y={366.16}
        width={14.11}
        height={20.91}
        rx={7.06}
        ry={7.06}
        fill="#ca7070"
      />
      <path
        d="M383.9 392.85s14.56-50.57 6.63-63c-.7-.13-1.15-.23-1.15-.23l-.13-.12-.37.12c8.25 12-6.49 63.22-6.49 63.22l7.2 5.51.63-.68z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={377.79} cy={357.85} r={15.62} fill="#ca7070" />
      <path
        d="M372.24 380.02v-6.8a7 7 0 01.16-1.48 15.62 15.62 0 016.26-29.49h-.88a15.62 15.62 0 00-7.15 29.51 7 7 0 00-.16 1.48v6.8a7 7 0 007.94 7 7.08 7.08 0 01-6.17-7.02z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M393.66 435.7s-30.13 3.4-31.24 0c-7.81-23.94 0-42.83 0-42.83a15.62 15.62 0 0115.62-15.62 15.62 15.62 0 0115.62 15.62z"
        fill="#00695c"
      />
      <path
        d="M393.66 435.7l13.61 62.49h-13.61l-14.11-46.36s-17.64 7.56-22.17 22.68 0 23.68 0 23.68h-14.62l-.15-.68a65 65 0 0119.8-61.81"
        fill="#263238"
      />
      <path
        d="M364.18 435.7c-7.81-23.94 0-42.83 0-42.83a15.62 15.62 0 0114.61-15.59h-1a15.62 15.62 0 00-15.62 15.62s-7.81 18.9 0 42.83c.4 1.22 4.52 1.56 9.64 1.51-4.16-.09-7.31-.49-7.63-1.54z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M362.17 392.61s-40.31-28.22-36.28-64h9.07s21.66 46.91 35.54 51.41-8.33 12.59-8.33 12.59z"
        fill="#00695c"
      />
      <g opacity={0.2} fill="#fff">
        <path d="M379.81 452.93l13.85 45.51h2l-14.11-46.36s-.65.28-1.74.85zM364.43 435.95h-2a65 65 0 00-19.8 61.81l.15.68h2l-.15-.68a65 65 0 0119.8-61.81z" />
      </g>
      <path
        d="M327.4 329.12h-1.51c-4 35.78 36.28 64 36.28 64l1-.38c-4.67-3.45-39.54-30.22-35.77-63.62z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M365.33 350.87a25.85 25.85 0 011.82 6.29c1 4.38 3.26 8.75 7.15 11a15.87 15.87 0 007 1.91c3.72.23 7.75-.49 10.38-3.13a12.86 12.86 0 003.17-6.39 21.63 21.63 0 00-5.69-19.88 19.19 19.19 0 00-20-4.19 19.1 19.1 0 01-3.79 1.38 6.31 6.31 0 01-5.53-1.84 3.49 3.49 0 003.37 4.52 9.73 9.73 0 01-7.46.4 6.33 6.33 0 008 3.19 21.32 21.32 0 01-9 1.84c.65 0 1.92 1.2 2.71 1.44a17.18 17.18 0 003 .21 5.82 5.82 0 014.87 3.25z"
        fill="#263238"
      />
      <g opacity={0.2} fill="#fff">
        <path d="M363.25 340.52a9.63 9.63 0 01-3.7.95 9.7 9.7 0 004.71-.95 3.53 3.53 0 01-3.54-3.81 5.94 5.94 0 01-.84-.71 3.49 3.49 0 003.37 4.52zM366.41 337.87a19.1 19.1 0 003.79-1.38 17.38 17.38 0 016-1.21 17.56 17.56 0 00-7 1.21 19.1 19.1 0 01-3.79 1.38c-.18 0-.36 0-.54.06a6 6 0 001.54-.06zM358.42 347.42c-.79-.23-2.06-1.42-2.71-1.44a21.32 21.32 0 009-1.84 5.58 5.58 0 01-2 .42 21.33 21.33 0 01-8 1.42c.65 0 1.92 1.2 2.71 1.44a6.71 6.71 0 002.1.17 4.38 4.38 0 01-1.1-.17zM382.33 370.08a15.87 15.87 0 01-7-1.91c-3.89-2.27-6.11-6.64-7.15-11a25.85 25.85 0 00-1.82-6.29 5.82 5.82 0 00-4.93-3.23 10.07 10.07 0 00-1.5 0h.49a5.82 5.82 0 014.93 3.23 25.85 25.85 0 011.82 6.29c1 4.38 3.26 8.75 7.15 11a15.87 15.87 0 007 1.91h1.75zM362.08 344.52a6.38 6.38 0 01-5.12-3.27 9.32 9.32 0 01-1.17-.33 6.38 6.38 0 006.29 3.6z" />
      </g>
      <path
        d="M326.89 328.61s-3-2.52 0-7.06a4.83 4.83 0 013.74-2.29 4.9 4.9 0 00-4.74 2.29c-3 4.54 0 7.06 0 7.06a27.32 27.32 0 005.93.66 29.83 29.83 0 01-4.93-.66z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M191.47 423.33l.08-.27s-1.02-.2-.08.27z"
        transform="translate(-154.5 -94.48)"
        fill="url(#Data_svg__o)"
        opacity={0.2}
      />
      <path
        d="M285.7 440.09a6.59 6.59 0 00-.36-.93c0-.1-.1-.18-.15-.27a5.61 5.61 0 00-.3-.52l-.2-.26a5.06 5.06 0 00-.33-.39l-.23-.23c-.12-.11-.24-.21-.36-.3l-.25-.18-.4-.24-.25-.13-.45-.19-.23-.09q-.32-.11-.65-.18a10.33 10.33 0 00-4.39.12s-4.19 6.18-2.58 8.4l-.53-.16s-31.13 34.74-48.69 41.19q-.67-.46-1.39-.86v-6.5a7.67 7.67 0 000-.82 7.6 7.6 0 00-.13-.77l.13-.07.52-.29.75-.46.48-.31q.54-.37 1-.78l.39-.34c.24-.2.47-.41.69-.63l.4-.39q.42-.43.8-.88l.28-.34q.36-.45.69-.92l.28-.42q.3-.46.57-.94l.18-.31c.22-.41.43-.84.61-1.28l.16-.39q.21-.53.39-1.07c0-.13.09-.25.12-.38.14-.47.27-.94.37-1.43 0-.1 0-.19.05-.29q.12-.61.19-1.24v-.42c0-.51.08-1 .08-1.55a17 17 0 00-3.78-10.69c1.33-2.08 2.2-3.31 2.2-3.31-.8-.55-1.59-1.05-2.37-1.54l-.76-.45c-.52-.31-1-.62-1.56-.9l-.87-.46c-.47-.25-.93-.49-1.39-.71l-.89-.41-1.33-.58-.87-.35a42.3 42.3 0 00-1.31-.48l-.82-.28c-.45-.14-.9-.27-1.34-.39l-.73-.2c-.5-.12-1-.22-1.49-.32l-.53-.11c-.67-.12-1.33-.21-2-.27a23.71 23.71 0 00-12 1.84c.2-4.78 1-8.72 2.68-11.16l-.41-.14-.14.14s-.49.11-1.26.25a10.44 10.44 0 00-.65 1.21 13.91 13.91 0 011.91-4.76l-.41-.14c.59-.61 2.73-3.24-.14-7.55-3.3-4.94-9.34-1.1-9.34-1.1a25.56 25.56 0 00-.94 5c-.46-.19-.79-.33-1-.44a124.5 124.5 0 00-4.69 31.36c-10.89 15.46-15.39 38.28-16.27 43.2l-.07.39c-.06.36-.09.55-.09.55l28.31.66v45.12L178 588.22s7.84.25 19.64 1.76l-3.26 23.31-1.09 6.54h19.62c2.18-4.36-8.72-6.54-8.72-6.54h-.24l4.25-21.75q2.82.47 5.8 1a56.81 56.81 0 008.83 1 46.94 46.94 0 007.35-.32c1.44 11.79-.45 18.83-.81 20h-.11l-1.09 6.54h19.62c1.9-3.8-6.14-5.95-8.23-6.43l.09-.64a109.41 109.41 0 00.77-22.2 26.87 26.87 0 007-4.17l.27-.24.08-.08-14.61-41c2.73-11.6-6.77-23.78-1.7-29.87s2-13.86 1.4-15.19c13.72-6 41.45-21 49.23-47a49.17 49.17 0 001.39-5.57s3.92-1.59 2.22-7.28z"
        transform="translate(-154.5 -94.48)"
        fill="url(#Data_svg__p)"
        opacity={0.2}
      />
      <path
        d="M40.08 336.46s-14.87 46.91 10.07 72.88l7.2-5.51s-14.74-51.2-6.49-63.22c-14.56-4.85-10.78-4.15-10.78-4.15z"
        fill="#ff5252"
      />
      <path
        d="M50.36 340.6s3-2.52 0-7.06-8.57-1-8.57-1-2 6.55 0 8.06 8.57 0 8.57 0z"
        fill="#f6b9ad"
      />
      <rect
        x={210.15}
        y={474.64}
        width={14.11}
        height={20.91}
        rx={7.06}
        ry={7.06}
        transform="rotate(180 139.955 437.855)"
        fill="#f6b9ad"
      />
      <path
        d="M56.34 406.85s-14.56-50.57-6.63-63c.7-.13 1.15-.23 1.15-.23l.13-.12.37.12c-8.25 12 6.49 63.22 6.49 63.22l-7.2 5.51-.63-.68z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={62.45} cy={371.85} r={15.62} fill="#f6b9ad" />
      <path
        d="M68 394.02v-6.8a7 7 0 00-.16-1.48 15.62 15.62 0 00-6.26-29.49h.88a15.62 15.62 0 017.15 29.51 7 7 0 01.16 1.48v6.8a7 7 0 01-7.94 7 7.08 7.08 0 006.17-7.02z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M46.58 449.7s30.13 3.4 31.24 0c3.6-11-6-22.89-1.2-28.7 5-6 1.2-14.13 1.2-14.13a15.62 15.62 0 00-15.62-15.62 15.62 15.62 0 00-15.62 15.62z"
        fill="#ff5252"
      />
      <path
        d="M76.66 421c5-6 1.2-14.13 1.2-14.13a15.62 15.62 0 00-15.62-15.62c-.34 0-.67 0-1 .05a15.61 15.61 0 0114.62 15.57s3.8 8.13-1.2 14.13c-4.84 5.81 4.8 17.69 1.2 28.7-.34 1.05-3.45 1.45-7.58 1.51 5.09.05 9.19-.29 9.58-1.51 3.64-11.02-6.04-22.89-1.2-28.7z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M71.43 448.7c11 15.59 15.87 39.15 12.72 61.81l-.09.68h-9.39s2.91-8.57 0-23.68a37.39 37.39 0 00-14.24-22.68l-9.06 46.36h-8.74l8.74-62.49zM124.39 358.83s3.63-1.52 2.07-6.75-7.9-3.47-7.9-3.47-3.85 5.67-2.36 7.71 8.19 2.51 8.19 2.51z"
        fill="#f6b9ad"
      />
      <path
        d="M70.94 409.39s46.81-15.17 53.44-50.56l-8.67-2.66s-34.45 38.46-49 38.73 4.23 14.49 4.23 14.49z"
        fill="#ff5252"
      />
      <path
        d="M122.79 358.87l1.45.44c-6.63 35.39-53.44 50.56-53.44 50.56l-.83-.65c5.53-1.92 46.64-17.34 52.82-50.35z"
        fill="#fff"
        opacity={0.2}
      />
      <g opacity={0.2} fill="#fff">
        <path d="M58.42 464.83l-9.06 46.36h2l8.8-45a21.63 21.63 0 00-1.74-1.36zM71.43 448.7h-2c11 15.59 15.87 39.15 12.72 61.81l-.09.68h2l.09-.68c3.15-22.66-1.7-46.22-12.72-61.81z" />
      </g>
      <path
        d="M123.42 358.52s3.63-1.52 2.07-6.75a4.83 4.83 0 00-2.9-3.29 4.9 4.9 0 013.86 3.58c1.56 5.22-2.07 6.75-2.07 6.75a27.32 27.32 0 01-5.86-1.1 29.83 29.83 0 004.9.81z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M46.58 448l-19 40a235 235 0 0133 4c21 4 31-6 31-6l-13.55-38z"
        fill="#263238"
      />
      <path
        d="M51.62 511s10 2 8 6h-18l1-6zM83.62 511s10 2 8 6h-18l1-6z"
        fill="#ff5252"
      />
      <path d="M76.62 359s-24 34-13 48l-43-1s12-77 56-47z" fill="#fccc63" />
      <path
        d="M76.62 359c-6.2-4.23-11.76-6.33-16.75-6.82A42.33 42.33 0 0171.62 358s-24 34-13 48l-37.85-.88c-.1.57-.15.88-.15.88l43 1c-11-14 13-48 13-48zM78.08 448h-3l13.55 38s-6.46 6.45-19.9 6.91c15.47.5 22.9-6.91 22.9-6.91zM51.62 511h-2s10 2 8 6h2c2-4-8-6-8-6zM83.62 511h-2s10 2 8 6h2c2-4-8-6-8-6z"
        fill="#fff"
        opacity={0.2}
      />
      <path fill="#f5f5f5" d="M500.62 167.68h383v14.5h-383z" />
      <path fill="url(#Data_svg__q)" d="M493 163.05h398v496H493z" />
      <path fill="#fff" d="M500.62 182.18h383v459.5h-383z" />
      <circle cx={509.5} cy={175.18} r={3.5} fill="#ff5252" />
      <circle cx={519.12} cy={175.18} r={3.5} fill="#ff0" />
      <circle cx={528.75} cy={175.18} r={3.5} fill="#69f0ae" />
      <path fill={color} d="M524.62 202.68h336v9h-336z" opacity={0.2} />
      <path fill="url(#Data_svg__r)" d="M522.62 241.68h145v154h-145z" />
      <path fill="#fff" d="M525.62 246.68h139v144h-139z" />
      <path fill="url(#Data_svg__s)" d="M715.62 318.68h145v154h-145z" />
      <path fill="#fff" d="M718.62 323.68h139v144h-139z" />
      <path fill="url(#Data_svg__t)" d="M525.62 508.68h341v106h-341z" />
      <path fill={color} opacity={0.5} d="M532.62 515.68h328v95h-328z" />
      <path
        fill="#fff"
        opacity={0.5}
        d="M540.62 524.68h320v-9h-328v95h8v-86z"
      />
      <path
        d="M796.09 372.71a62 62 0 1015 40.45 61.84 61.84 0 00-15-40.45zm-25 77.47a43 43 0 1121.08-37 42.81 42.81 0 01-21.05 37z"
        transform="translate(-154.5 -94.48)"
        fill="url(#Data_svg__u)"
      />
      <path
        d="M625.67 291.94l13.65-11.75a58.85 58.85 0 00-44.7-20.51v18a40.91 40.91 0 0131.05 14.26z"
        fill="#ff5252"
      />
      <path
        d="M594.62 359.67A40.74 40.74 0 01577.7 356l-7.43 16.41a59 59 0 0054.49-3l-9.2-15.49a40.74 40.74 0 01-20.94 5.75z"
        fill="#69f0ae"
      />
      <path
        d="M653.62 318.67a58.75 58.75 0 00-14.3-38.49l-13.65 11.75a40.93 40.93 0 01-10.11 62l9.2 15.49a59 59 0 0028.86-50.75z"
        fill="#ff9800"
      />
      <path
        d="M553.62 318.67a41 41 0 0141-41v-18a59 59 0 00-24.35 112.74L577.7 356a41 41 0 01-24.08-37.33z"
        fill={color}
      />
      <path fill="url(#Data_svg__v)" d="M737.62 344.68h106v18h-106z" />
      <path fill={color} d="M738.62 345.68h104v16h-104z" />
      <path fill="#ff5252" d="M738.62 372.68h76v16h-76z" />
      <path fill="#69f0ae" d="M738.62 399.68h52v16h-52z" />
      <path fill="#ff9800" d="M738.62 426.68h94v16h-94z" />
      <path
        fill="#f5f5f5"
        d="M525.62 419.68h149v9h-149zM525.62 434.68h84v9h-84zM624.62 434.68h29v9h-29zM624.62 467.68h29v9h-29zM525.62 464.68h84v9h-84zM525.62 449.68h149v9h-149zM713.62 242.68h149v9h-149zM713.62 257.68h84v9h-84zM812.62 257.68h29v9h-29zM812.62 290.68h29v9h-29zM713.62 287.68h84v9h-84zM713.62 272.68h149v9h-149z"
      />
      <circle cx={760.62} cy={688.68} r={11} fill="url(#Data_svg__w)" />
      <circle cx={760.62} cy={688.68} r={8} fill="#ff5252" />
      <path fill="url(#Data_svg__x)" d="M435.62 566.68h344v121h-344z" />
      <path fill="#fff" d="M445.62 571.68h328v95h-328z" />
      <path
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={3}
        fill="url(#Data_svg__y)"
        d="M456.62 648.68h304"
      />
      <path fill="url(#Data_svg__z)" d="M459.62 590.68h45v55h-45z" />
      <path fill={color} d="M462.12 593.18h40v51h-40z" />
      <path fill="#69f0ae" d="M712.62 629.68h40v16h-40z" />
      <path fill="#ff9800" d="M637.62 608.68h40v36h-40z" />
      <path
        fill="#ff5252"
        d="M549.62 614.68h40v30h-40zM445.62 666.68h328v14h-328z"
      />
      <circle cx={459.62} cy={688.68} r={11} fill="url(#Data_svg__A)" />
      <circle cx={459.62} cy={688.68} r={8} fill="#ff5252" />
      <path fill="#ff5252" d="M437.62 575.68h8v105h-8z" />
      <path opacity={0.2} d="M437.62 575.68h8v105h-8z" />
      <path
        d="M600.65 681.32V681v-.49c0-.16 0-.21-.06-.31s-.07-.3-.12-.44-.06-.19-.1-.29-.12-.28-.18-.42l-.12-.25c-.08-.14-.17-.28-.26-.41l-.13-.19a6.62 6.62 0 00-.42-.52 9.62 9.62 0 00-2.79-2.06 8.05 8.05 0 001.79-3.08 6.42 6.42 0 00.24-.94v-.29a5.46 5.46 0 00.05-.58v-.32-.49c0-.16 0-.21-.06-.31s-.07-.3-.12-.44-.06-.19-.1-.29-.12-.28-.18-.42l-.12-.25c-.08-.14-.17-.28-.26-.41l-.13-.19a6.62 6.62 0 00-.42-.52 10.07 10.07 0 00-3.55-2.4s-6.35 2.35-6.77 4.93c-4.66 1-31.82 6.65-50.47 6.2l-.14-.37a16.59 16.59 0 00-8.83-14.67v-6.28a7.48 7.48 0 000-.8 7.41 7.41 0 00-.12-.76l.12-.07.51-.28.74-.45.47-.31q.52-.36 1-.76l.38-.33c.23-.2.45-.4.67-.61l.39-.38q.41-.42.78-.86l.27-.34q.35-.44.67-.9l.27-.41q.29-.45.56-.92l.17-.3c.22-.4.42-.82.6-1.24l.15-.38q.21-.51.38-1l.12-.37c.14-.46.26-.92.36-1.39 0-.09 0-.19.05-.28q.11-.6.18-1.21v-.41c0-.5.08-1 .08-1.51a16.51 16.51 0 00-2.13-8.11c1.07-.26 1.72-.47 1.64-.57-.41-.55-.82-1.07-1.25-1.57l-.41-.47c-.3-.34-.59-.66-.89-1l-.48-.49c-.3-.3-.6-.58-.9-.85l-.47-.42c-.38-.32-.76-.63-1.14-.93l-.25-.2c-.46-.34-.92-.66-1.39-1l-.52-.32c-.3-.19-.61-.37-.92-.53l-.62-.32-.86-.41-.63-.28c-.3-.13-.61-.24-.92-.35l-.57-.21c-.46-.15-.92-.29-1.38-.41l-.71-.16-.77-.16-.77-.12-.71-.08-.79-.07H516.89q-.65 0-1.3.06c-10.23.84-19.19 9.77-19.19 24V655h16v5.34a16.59 16.59 0 00-9.64 15.05v45.51l-13.58 62.39H489l-2.67 11.91 19.16 3.1.83.13c2-.86-1.35-4.89-2.86-8a8.54 8.54 0 01-.4-1 7.57 7.57 0 01-.38-1.94l14.72-48.29h-.07l.35-1.13s18.74 8 23.56 24.09c3.91 13 1.48 21.46.42 24.2h-.07v.16c-.21.52-.36.81-.36.81h.36v8.83h20.26c1.88-.95-2.11-3.72-4.1-6a5.67 5.67 0 01-1.32-2.55h.34l.16-.72a69.53 69.53 0 00-20.86-65.77.77.77 0 00.09-.17 74.45 74.45 0 003.51-18.06c15.49 1.48 36.1.42 51.51-11.52a48 48 0 004.21-3.58c1.33-.1 3.66-.84 4.95-4.6a6.42 6.42 0 00.24-.94v-.29a5.46 5.46 0 00.07-.64z"
        transform="translate(-154.5 -94.48)"
        fill="url(#Data_svg__B)"
      />
      <path
        d="M364.99 604.46s46.9 14.91 72.88-10l-5.51-7.21s-50.4 11.23-62.41 3-4.96 14.21-4.96 14.21z"
        fill={color}
      />
      <path
        d="M436.55 593.52l.92 1.2c-26 24.92-72.88 10-72.88 10s-.12-.38-.3-1c5.59 1.67 48.02 13.08 72.26-10.2z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M436.87 594.45s3.84.87 5.61-4.28-4.4-7.42-4.4-7.42-6.43 2.37-6.41 4.89 5.2 6.81 5.2 6.81z"
        fill="#985454"
      />
      <path
        d="M436.26 593.64s3.84.87 5.61-4.28a4.83 4.83 0 00-.45-4.36 4.9 4.9 0 011.06 5.16c-1.77 5.16-5.61 4.28-5.61 4.28a27.32 27.32 0 01-4.12-4.31 29.83 29.83 0 003.51 3.51z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        data-name="&lt;Path&gt;"
        d="M387.2 687.27h13.89a4.56 4.56 0 001.31 3.57c1.87 2.16 5.63 4.77 3.86 5.66H387.2z"
        fill={color}
      />
      <path
        d="M401.39 690.84a4.56 4.56 0 01-1.31-3.57h1a4.56 4.56 0 001.31 3.57c1.87 2.16 5.63 4.77 3.86 5.66h-1c1.77-.89-1.99-3.49-3.86-5.66z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        data-name="&lt;Path&gt;"
        d="M337.73 684.41l13 2.13a6.62 6.62 0 00.59 4.58c1.42 3 4.61 6.74 2.69 7.55l-18.82-3z"
        fill={color}
      />
      <path
        d="M350.33 691.11a6.62 6.62 0 01-.59-4.58l-12.05-2v-.16l13 2.13a6.62 6.62 0 00.59 4.58c1.42 3 4.61 6.74 2.69 7.55l-.79-.13c1.48-.98-1.49-4.57-2.85-7.39z"
        fill="#fff"
        opacity={0.2}
      />
      <rect
        x={514.15}
        y={650.64}
        width={14.11}
        height={20.91}
        rx={7.06}
        ry={7.06}
        transform="rotate(180 443.955 613.855)"
        fill="#985454"
      />
      <circle cx={366.45} cy={547.85} r={15.62} fill="#985454" />
      <path
        d="M372 570.02v-6.8a7 7 0 00-.16-1.48 15.62 15.62 0 00-6.26-29.49h.88a15.62 15.62 0 017.15 29.51 7 7 0 01.16 1.48v6.8a7 7 0 01-7.94 7 7.08 7.08 0 006.17-7.02z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M350.58 625.7s30.13 3.4 31.24 0c7.81-23.94 0-42.83 0-42.83a15.62 15.62 0 00-15.62-15.62 15.62 15.62 0 00-15.62 15.62z"
        fill={color}
      />
      <path
        d="M350.58 625.7l-13.61 62.49h13.61l14.11-46.36s17.64 7.56 22.17 22.68 0 23.68 0 23.68h14.64l.15-.68a65 65 0 00-19.8-61.81"
        fill="#263238"
      />
      <path
        d="M380.06 625.7c7.81-23.94 0-42.83 0-42.83a15.62 15.62 0 00-14.61-15.59h1a15.62 15.62 0 0115.62 15.62s7.81 18.9 0 42.83c-.4 1.22-4.52 1.56-9.64 1.51 4.16-.09 7.29-.49 7.63-1.54z"
        fill="#fff"
        opacity={0.2}
      />
      <g opacity={0.2} fill="#fff">
        <path d="M364.43 642.93l-13.85 45.51h-2l14.11-46.36s.65.28 1.74.85zM379.81 625.95h2a65 65 0 0119.8 61.81l-.15.68h-2l.15-.68a65 65 0 00-19.8-61.81z" />
      </g>
      <path
        d="M362.99 594.46s46.9 14.91 72.88-10l-5.51-7.21s-50.4 11.23-62.41 3-4.96 14.21-4.96 14.21z"
        fill={color}
      />
      <path
        d="M434.55 583.52l.92 1.2c-26 24.92-72.88 10-72.88 10s-.12-.38-.3-1c5.59 1.67 48.02 13.08 72.26-10.2z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M434.87 584.45s3.84.87 5.61-4.28-4.4-7.42-4.4-7.42-6.43 2.37-6.41 4.89 5.2 6.81 5.2 6.81z"
        fill="#985454"
      />
      <path
        d="M434.26 583.64s3.84.87 5.61-4.28a4.83 4.83 0 00-.45-4.36 4.9 4.9 0 011.06 5.16c-1.77 5.16-5.61 4.28-5.61 4.28a27.32 27.32 0 01-4.12-4.31 29.83 29.83 0 003.51 3.51z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M367.62 542.67l-1 21h-22v-11.15c0-22.39 23.67-30.89 37-12.9.33.49-14 3.05-14 3.05z"
        fill="#263238"
      />
      <path
        d="M362.68 530.01c5.61.46 11.38 3.52 15.94 9.67.33.44-14 3-14 3l-1 21h3l1-21s14.33-2.56 14-3c-5.37-7.26-12.43-10.16-18.94-9.67z"
        fill="#fff"
        opacity={0.2}
      />
    </svg>
  );
};

SvgData.propTypes = {
  color: PropTypes.string
};
SvgData.defaultProps = {
  color: "primary"
};
export default SvgData;
