import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgToTheStars = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 925.18 770.09"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="ToTheStars_svg__m"
          x1={665.03}
          y1={751.98}
          x2={665.03}
          y2={831.37}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__b"
          x1={580.55}
          y1={759}
          x2={580.55}
          y2={113}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="ToTheStars_svg__d"
          x1={420.89}
          y1={617.2}
          x2={420.89}
          y2={679.83}
          xlinkHref="#ToTheStars_svg__a"
        />
        <linearGradient
          id="ToTheStars_svg__e"
          x1={467.86}
          y1={617.2}
          x2={467.86}
          y2={679.83}
          xlinkHref="#ToTheStars_svg__a"
        />
        <linearGradient
          id="ToTheStars_svg__f"
          x1={543.67}
          y1={617.2}
          x2={543.67}
          y2={679.83}
          xlinkHref="#ToTheStars_svg__a"
        />
        <linearGradient
          id="ToTheStars_svg__g"
          x1={580.55}
          y1={835.05}
          x2={580.55}
          y2={647.79}
          xlinkHref="#ToTheStars_svg__b"
        />
        <linearGradient
          id="ToTheStars_svg__c"
          x1={272.71}
          y1={586.52}
          x2={272.71}
          y2={732.18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f2f2f2" />
          <stop offset={0.31} stopColor="#e6e6e6" />
          <stop offset={0.77} stopColor="#ccc" />
        </linearGradient>
        <linearGradient
          id="ToTheStars_svg__h"
          x1={272.35}
          y1={606.91}
          x2={272.35}
          y2={766.41}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__i"
          x1={596.45}
          y1={606.91}
          x2={596.45}
          y2={766.41}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__j"
          x1={592.44}
          y1={620.75}
          x2={592.44}
          y2={766.41}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__k"
          x1={574.72}
          y1={699.54}
          x2={574.72}
          y2={831.37}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__l"
          x1={482.23}
          y1={737.41}
          x2={482.23}
          y2={831.37}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__a"
          x1={345.9}
          y1={617.2}
          x2={345.9}
          y2={679.83}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e0e0e0" />
          <stop offset={0.31} stopColor="#fccc63" />
          <stop offset={0.77} stopColor="#f55f44" />
        </linearGradient>
        <linearGradient
          id="ToTheStars_svg__n"
          x1={802.69}
          y1={737.41}
          x2={802.69}
          y2={831.37}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__o"
          x1={358.41}
          y1={737.41}
          x2={358.41}
          y2={831.37}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__p"
          x1={710.43}
          y1={616.63}
          x2={710.43}
          y2={589.91}
          xlinkHref="#ToTheStars_svg__b"
        />
        <linearGradient
          id="ToTheStars_svg__q"
          x1={710.43}
          y1={590.89}
          x2={710.43}
          y2={615.65}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__r"
          x1={771.61}
          y1={746.75}
          x2={771.61}
          y2={717.62}
          xlinkHref="#ToTheStars_svg__b"
        />
        <linearGradient
          id="ToTheStars_svg__s"
          x1={771.61}
          y1={718.34}
          x2={771.61}
          y2={746.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f2f2f2" />
          <stop offset={0.31} stopColor="#e0e0e0" />
          <stop offset={0.77} stopColor="#b3b3b3" />
        </linearGradient>
        <linearGradient
          id="ToTheStars_svg__t"
          x1={148.17}
          y1={665.16}
          x2={148.17}
          y2={633.14}
          xlinkHref="#ToTheStars_svg__b"
        />
        <linearGradient
          id="ToTheStars_svg__u"
          x1={148.17}
          y1={633.86}
          x2={148.17}
          y2={664.45}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__v"
          x1={853.67}
          y1={152.79}
          x2={853.67}
          y2={64.95}
          xlinkHref="#ToTheStars_svg__b"
        />
        <linearGradient
          id="ToTheStars_svg__w"
          x1={771.61}
          y1={718.34}
          x2={771.61}
          y2={746.02}
          xlinkHref="#ToTheStars_svg__c"
        />
        <linearGradient
          id="ToTheStars_svg__x"
          x1={389.67}
          y1={446.79}
          x2={389.67}
          y2={404.95}
          xlinkHref="#ToTheStars_svg__b"
        />
      </defs>
      <path
        d="M722 411.58a150.57 150.57 0 00-17-70c-5.34-10.15-10.21-16.46-14-20.33a10 10 0 00-11.4-2.25 10.28 10.28 0 00-4 2.58c-5.07 5.25-9.65 12.19-13.65 19.58a151.15 151.15 0 00-17.87 71.92v15.06h-9.66v-175c0-36.68-8.21-72.87-24.29-105-7.62-15.21-14.57-24.66-19.92-30.47a13.81 13.81 0 00-20.76 0c-7.24 7.87-13.77 18.27-19.48 29.33-16.91 32.79-25.5 70-25.5 107.77v173.37h-8.35v-15.78a151.15 151.15 0 00-17.87-71.92c-4-7.38-8.58-14.32-13.65-19.58a10 10 0 00-11.6-2.12l.35.19a10.31 10.31 0 00-3.26 2.28c-3.75 3.87-8.62 10.18-14 20.33a150.57 150.57 0 00-17 70v261.64h29.8l-3.25 21.51V759H490v-64.31l-3.25-21.51h29.37V434.91h8.35v237.2h23.8l-3.42 22.57V759h24.37v-64.31l-3.42-22.57h32.07l-3.42 22.57V759h24.37v-64.31l-3.42-22.57h19V434.91h9.66v238.63h7.83v-.36h25.89l-3.25 21.51V759h24.37v-64.31l-3.25-21.51H722z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__b)"
        opacity={0.7}
      />
      <path
        fill="#535461"
        d="M357.44 617.2h-23.07l4.12-28.01h14.83l4.12 28.01z"
      />
      <path
        d="M337.34 600.31h17.13l-1.15-7.83h-14.83l-1.15 7.83z"
        opacity={0.1}
      />
      <path
        fill="#535461"
        d="M555.2 617.2h-23.07l4.12-28.01h14.83l4.12 28.01z"
      />
      <path
        d="M535.1 600.31h17.13l-1.15-7.83h-14.83l-1.15 7.83z"
        opacity={0.1}
      />
      <path
        fill="#535461"
        d="M432.43 617.2h-23.08l4.12-28.01h14.84l4.12 28.01z"
      />
      <path
        d="M412.32 600.31h17.14l-1.15-7.83h-14.84l-1.15 7.83z"
        opacity={0.1}
      />
      <path
        fill="#535461"
        d="M479.39 617.2h-23.07l4.12-28.01h14.83l4.12 28.01z"
      />
      <path
        d="M459.29 600.31h17.14l-1.16-7.83h-14.83l-1.15 7.83z"
        opacity={0.1}
      />
      <path fill="#535461" d="M357.44 357.64h164.8v6.59h-164.8z" />
      <path
        d="M547.72 253.51a9.29 9.29 0 00-13.77 0c-4.8 5.11-9.13 11.87-12.92 19.06a150.58 150.58 0 00-16.91 70v253.69h72.93V341.52a150 150 0 00-16.11-68.21c-5.06-9.88-9.67-16.03-13.22-19.8zM338.59 253.51a9.29 9.29 0 0113.77 0c4.8 5.11 9.13 11.87 12.92 19.06a150.58 150.58 0 0116.91 70v253.69h-72.95V341.52a150 150 0 0116.11-68.21c5.05-9.88 9.66-16.03 13.24-19.8z"
        fill="#e0e0e0"
      />
      <path
        fill="#535461"
        d="M309.65 346.93l17.3.08v21.34h-17.3v-21.42zM364.86 346.93l17.3.08v21.34h-17.3v-21.42zM504.11 346.93l17.31.08v21.34h-17.31v-21.42zM559.32 346.93l17.31.08v21.34h-17.31v-21.42z"
      />
      <path
        d="M365.25 272.24c-3.78-7.19-8.12-13.95-12.92-19.06a9.26 9.26 0 00-11-2.07 9.83 9.83 0 012.78 2.07c4.8 5.11 9.13 11.87 12.92 19.06a150.58 150.58 0 0116.91 70v253.67h8.24V342.27a150.58 150.58 0 00-16.93-70.03zM527.59 272.94c3.78-7.19 8.12-13.95 12.92-19.06a9.8 9.8 0 013.19-2.28 9.27 9.27 0 00-10.6 2.28c-4.8 5.11-9.13 11.87-12.92 19.06a150.58 150.58 0 00-16.91 70v253.67h7.42V342.98a150.58 150.58 0 0116.9-70.04z"
        opacity={0.1}
      />
      <path
        fill="url(#ToTheStars_svg__a)"
        d="M334.37 617.2h23.07v62.62h-23.07z"
      />
      <path
        fill="url(#ToTheStars_svg__d)"
        d="M409.35 617.2h23.07v62.62h-23.07z"
      />
      <path
        fill="url(#ToTheStars_svg__e)"
        d="M456.32 617.2h23.07v62.62h-23.07z"
      />
      <path
        fill="url(#ToTheStars_svg__f)"
        d="M532.13 617.2h23.07v62.62h-23.07z"
      />
      <path
        d="M452.29 54.61a12.84 12.84 0 00-19.65 0c-6.85 7.66-13 17.79-18.44 28.57-16 31.94-24.14 68.19-24.14 104.95v407.09h104.09V186.49c0-35.72-7.77-71-23-102.21-7.21-14.81-13.79-24.01-18.86-29.67z"
        fill="#eee"
      />
      <rect
        x={414.23}
        y={99.83}
        width={54.31}
        height={24.89}
        rx={11}
        ry={11}
        fill={color}
      />
      <path
        d="M822 737.93A83 83 0 00657.12 752v1.22a76.61 76.61 0 00-9.1 1.95 75.84 75.84 0 00-142.6-12.91 75 75 0 00-20.92-4.78 82.38 82.38 0 00-5.71-18.85 75.8 75.8 0 00-151.12-2 82.45 82.45 0 00-7.42 26.37 75.88 75.88 0 00-43.49 92h607.58A75.86 75.86 0 00822 737.93z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__g)"
        opacity={0.7}
      />
      <circle
        cx={272.71}
        cy={659.35}
        r={72.83}
        fill="url(#ToTheStars_svg__c)"
      />
      <circle
        cx={272.35}
        cy={686.66}
        r={79.75}
        fill="url(#ToTheStars_svg__h)"
      />
      <circle
        cx={596.45}
        cy={686.66}
        r={79.75}
        fill="url(#ToTheStars_svg__i)"
      />
      <circle
        cx={592.44}
        cy={693.58}
        r={72.83}
        fill="url(#ToTheStars_svg__j)"
      />
      <path
        d="M647.55 772.37a72.7 72.7 0 01-30.12 59H532a72.86 72.86 0 11115.54-59z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__k)"
      />
      <path
        d="M555.06 810.24a72.5 72.5 0 01-3.12 21.12H412.51v-.05a72.83 72.83 0 0169.28-93.9h.45q3.06 0 6.07.25a72.07 72.07 0 0120.09 4.59 72.85 72.85 0 0146.66 67.99z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__l)"
      />
      <path
        d="M737.87 824.81q0 3.27-.29 6.47a.18.18 0 010 .09H592.5c-.2-2.16-.3-4.35-.3-6.55a72.76 72.76 0 0161.92-72A73.77 73.77 0 01665 752c1.86 0 3.71.07 5.54.2a72.89 72.89 0 0160.9 42.74c.3.66.59 1.33.86 2a72.48 72.48 0 015.57 27.87z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__m)"
      />
      <path
        d="M875.52 810.24a72.5 72.5 0 01-3.12 21.12H733a73.29 73.29 0 01-1.87-34.54c.12-.63.24-1.27.38-1.89a72.86 72.86 0 0171.22-57.51c2.29 0 4.54.1 6.77.32 1 .08 2 .2 3 .33a72.84 72.84 0 0163.02 72.17z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__n)"
      />
      <path
        d="M428.13 831.37c.24-.76.45-1.52.66-2.29A72.88 72.88 0 00339 740a69.46 69.46 0 00-8.51 2.94 72.9 72.9 0 00-41.78 88.4h139.42z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__o)"
      />
      <circle
        cx={710.43}
        cy={603.27}
        r={13.36}
        fill="url(#ToTheStars_svg__p)"
        opacity={0.7}
      />
      <circle
        cx={710.43}
        cy={603.27}
        r={12.38}
        fill="url(#ToTheStars_svg__q)"
      />
      <circle
        cx={771.61}
        cy={732.18}
        r={14.57}
        fill="url(#ToTheStars_svg__r)"
        opacity={0.7}
      />
      <circle
        cx={771.61}
        cy={732.18}
        r={13.84}
        fill="url(#ToTheStars_svg__s)"
      />
      <circle
        cx={148.17}
        cy={649.15}
        r={16.01}
        fill="url(#ToTheStars_svg__t)"
        opacity={0.7}
      />
      <circle
        cx={148.17}
        cy={649.15}
        r={15.29}
        fill="url(#ToTheStars_svg__u)"
      />
      <path
        d="M888.73 82.42a44.33 44.33 0 00-13.08-11.58 43.92 43.92 0 10-22 82c.93 0 1.86 0 2.78-.09a43.91 43.91 0 0032.28-70.28z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__v)"
        opacity={0.4}
      />
      <path
        d="M757.77 43.92a41.51 41.51 0 01-38.88 41.43c-.87.06-1.75.09-2.63.09a41.51 41.51 0 1120.76-77.47 41.9 41.9 0 0112.37 10.95 41.3 41.3 0 018.38 25z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M706.04 17.59a45.19 45.19 0 00-6.19 3.26 9.8 9.8 0 00-3.31 3 3.9 3.9 0 00-.08 4.23c1 1.38 3 1.6 4.67 1.69a8.86 8.86 0 008.48-2.8l3.57-3.24c1.24-1.12 2.6-2.67 2.06-4.25-.41-1.21-1.77-1.8-3-2a12.59 12.59 0 00-8.93 1.57"
        fill="#f55f44"
        opacity={0.05}
      />
      <circle cx={691.13} cy={60.31} r={2.18} fill="#f55f44" opacity={0.05} />
      <circle cx={735.56} cy={46.47} r={8.01} fill="#f55f44" opacity={0.05} />
      <path
        d="M749.4 18.91a10.93 10.93 0 11-12.37-11 41.9 41.9 0 0112.37 11zM750.2 67.83a41.41 41.41 0 01-31.31 17.52c-.05-.57-.08-1.15-.08-1.73a19.67 19.67 0 0131.39-15.79z"
        fill="#f55f44"
        opacity={0.05}
      />
      <circle cx={722.81} cy={344.72} r={5.1} fill="#535461" opacity={0.25} />
      <circle cx={42.81} cy={478.72} r={5.1} fill="#535461" opacity={0.25} />
      <circle cx={919.81} cy={507.72} r={5.1} fill="#535461" opacity={0.25} />
      <circle cx={288.73} cy={266.06} r={5.1} fill="#535461" opacity={0.25} />
      <circle cx={271.98} cy={148.8} r={5.1} fill="#535461" opacity={0.25} />
      <circle cx={127.77} cy={381.13} r={5.1} fill="#535461" opacity={0.25} />
      <path
        fill="#535461"
        opacity={0.25}
        d="M849.18 387.12h-4.54v-4.53h-1.85v4.53h-4.54v1.86h4.54v4.53h1.85v-4.53h4.54v-1.86zM925.18 230.12h-4.54v-4.53h-1.85v4.53h-4.54v1.86h4.54v4.53h1.85v-4.53h4.54v-1.86zM601.55 142.41h-4.54v-4.54h-1.85v4.54h-4.54v1.85h4.54v4.54h1.85v-4.54h4.54v-1.85zM799.65 361.63h-4.54v-4.53h-1.85v4.53h-4.53v1.86h4.53v4.53h1.85v-4.53h4.54v-1.86zM633.59 512.39h-4.53v-4.53h-1.85v4.53h-4.54v1.86h4.54v4.53h1.85v-4.53h4.53v-1.86zM168.93 201.4h-4.54v-4.53h-1.85v4.53H158v1.85h4.54v4.54h1.85v-4.54h4.54v-1.85zM10.93 260.4H6.39v-4.53H4.54v4.53H0v1.85h4.54v4.54h1.85v-4.54h4.54v-1.85zM231.56 446.12h-4.54v-4.54h-1.85v4.54h-4.53v1.85h4.53v4.54h1.85v-4.54h4.54v-1.85z"
      />
      <circle
        cx={771.61}
        cy={732.18}
        r={13.84}
        fill="url(#ToTheStars_svg__w)"
      />
      <path
        d="M406.37 413.27a21.11 21.11 0 00-6.23-5.52 20.92 20.92 0 10-10.46 39H391a20.92 20.92 0 0015.37-33.47z"
        transform="translate(-137.41 -64.95)"
        fill="url(#ToTheStars_svg__x)"
        opacity={0.4}
      />
      <path
        d="M272.03 360.92a19.77 19.77 0 01-18.52 19.73h-1.25a19.77 19.77 0 119.89-36.9 20 20 0 015.89 5.21 19.67 19.67 0 013.99 11.96z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M247.39 348.38a21.52 21.52 0 00-3 1.55 4.67 4.67 0 00-1.58 1.41 1.86 1.86 0 000 2 2.83 2.83 0 002.22.8 4.22 4.22 0 004-1.33l1.7-1.54c.59-.54 1.24-1.27 1-2a1.79 1.79 0 00-1.44-1 6 6 0 00-4.25.75"
        fill="#f55f44"
        opacity={0.1}
      />
      <circle cx={240.29} cy={368.72} r={1.04} fill="#f55f44" opacity={0.1} />
      <circle cx={261.45} cy={362.13} r={3.82} fill="#f55f44" opacity={0.1} />
      <path
        d="M268.04 349.05a5.2 5.2 0 11-5.89-5.22 20 20 0 015.89 5.22zM268.43 372.31a19.72 19.72 0 01-14.91 8.35v-.83a9.37 9.37 0 0115-7.52z"
        fill="#f55f44"
        opacity={0.1}
      />
      <path d="M390.59 202.05h103v4h-103z" opacity={0.1} />
    </svg>
  );
};

SvgToTheStars.propTypes = {
  color: PropTypes.string
};
SvgToTheStars.defaultProps = {
  color: "primary"
};
export default SvgToTheStars;
