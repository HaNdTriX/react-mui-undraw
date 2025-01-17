import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgSegment = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 844 723.28"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Segment_svg__a"
          x1={420.85}
          y1={723.28}
          x2={420.85}
          y2={693.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Segment_svg__b"
          x1={600}
          y1={642.36}
          x2={600}
          y2={88.36}
          xlinkHref="#Segment_svg__a"
        />
        <linearGradient
          id="Segment_svg__c"
          x1={910.39}
          y1={454.21}
          x2={910.39}
          y2={315.32}
          xlinkHref="#Segment_svg__a"
        />
        <linearGradient
          id="Segment_svg__d"
          x1={706.97}
          y1={486.37}
          x2={706.97}
          y2={246.08}
          xlinkHref="#Segment_svg__a"
        />
        <linearGradient
          id="Segment_svg__e"
          x1={966.2}
          y1={448.54}
          x2={966.2}
          y2={448.05}
          xlinkHref="#Segment_svg__a"
        />
        <linearGradient
          id="Segment_svg__f"
          x1={908.16}
          y1={769.78}
          x2={908.16}
          y2={439.08}
          xlinkHref="#Segment_svg__a"
        />
      </defs>
      <path
        d="M526.47 505.53s20.89 141 144.11 188H171.42c123.22-47 144.11-188 144.11-188z"
        fill="#e0e0e0"
      />
      <path
        fill="url(#Segment_svg__a)"
        d="M168.91 693.5h503.87v29.78H168.91z"
      />
      <path fill="#f5f5f5" d="M171.42 693.5h499.16v22.97H171.42z" />
      <path
        d="M1011 88.36H189a11.12 11.12 0 00-11 11.22v521.87a20.72 20.72 0 0020.53 20.91h802.94a20.72 20.72 0 0020.53-20.91V99.58a11.12 11.12 0 00-11-11.22z"
        transform="translate(-178 -88.36)"
        fill="url(#Segment_svg__b)"
      />
      <path
        d="M833 467.94H9V22.87a10.75 10.75 0 0110.75-10.75h802.42A10.75 10.75 0 01833 22.87z"
        fill="#f5f5f5"
      />
      <path
        d="M812.92 543.12H29.08a20 20 0 01-20-20v-55.18H833v55.14a20 20 0 01-20.08 20.04z"
        fill="#fff"
      />
      <g opacity={0.2} fill="#fff">
        <path d="M701.26 466.11c.8.11 1.6.24 2.38.41a9.68 9.68 0 01.82-.53 13.94 13.94 0 012.82-1.21 5.06 5.06 0 011.13-.87 18.82 18.82 0 00-7 2.08zM659 502.72a37 37 0 0123.7-34.53c-1.3-3.07 0-6.31 5.23-8.15l3.7-1.31 1.74-1.67-8.44 3c-5.21 1.84-6.53 5.08-5.23 8.15a37 37 0 0013.3 71.51h1.5a37 37 0 01-35.5-37z" />
        <path d="M688.19 466.04h-.17a2.73 2.73 0 000 .52q1.56-.34 3.16-.55l.57-.31a73.48 73.48 0 018.17-3.59c.42-.5.86-1 1.31-1.47a73.5 73.5 0 00-12.48 5.05z" />
      </g>
      <path fill="#fff" d="M50.76 68.72h745.6v348.29H50.76z" />
      <path fill="#e0e0e0" d="M49.76 49.04h745.6v30.68H49.76z" />
      <circle cx={66} cy={64.72} r={9} fill="#ff5252" />
      <circle cx={87} cy={64.72} r={9} fill="#ff0" />
      <circle cx={108} cy={64.72} r={9} fill="#69f0ae" />
      <path
        fill={color}
        opacity={0.5}
        d="M78 205.72h236v8H78zM78 243.72h236v8H78z"
      />
      <path fill={color} opacity={0.3} d="M78 286.72h236v8H78z" />
      <path fill="#64ffda" d="M78 329.72h236v8H78zM78 372.72h236v8H78z" />
      <path
        d="M970.22 454.21a124 124 0 00-77.38-138.89l-44.47 115.77z"
        transform="translate(-178 -88.36)"
        fill="url(#Segment_svg__c)"
      />
      <path
        d="M786.2 361.1a113 113 0 00-70.5-126.54l-40.52 105.48z"
        fill={color}
      />
      <path
        d="M786.2 361.1a113 113 0 00-70.5-126.54l-40.52 105.48z"
        opacity={0.2}
      />
      <path
        d="M720.82 366.22l92-77.27a120.14 120.14 0 10.45 154z"
        transform="translate(-178 -88.36)"
        fill="url(#Segment_svg__d)"
      />
      <path d="M542 277.86l86.52-72.68a113 113 0 10.42 144.86z" fill={color} />
      <path fill={color} opacity={0.7} d="M350 104.72h142v18H350z" />
      <path
        d="M965.82 448.11l.13.43c1.49-.73-.13-.43-.13-.43z"
        transform="translate(-178 -88.36)"
        fill="url(#Segment_svg__e)"
        opacity={0.2}
      />
      <path
        d="M950 769.56l31.15-5-4.28-19.1-.06-.27h-.11l-22.11-101.46v-74a27.29 27.29 0 00-.15-2.81c33-43.75 13.32-112.39 11.51-118.38-.34.17-.86.4-1.59.69a40.3 40.3 0 00-1.5-7.9s-9.58-6.09-14.8 1.74c-4.55 6.83-1.17 11-.23 12l-.64.22a22 22 0 013 7.54 16.55 16.55 0 00-1-1.92c-1.21-.22-2-.4-2-.4l-.23-.22-.64.22c3.32 4.84 4.48 13.34 4.32 23.54a33.22 33.22 0 00-3.78-4.43 33.78 33.78 0 00-22.39-9.33h-1.6q-1.3 0-2.59.17l-.64.07-1.09.15c-.42.07-.84.15-1.25.23l-.91.2q-.78.18-1.55.41l-.58.18c-.65.21-1.29.43-1.92.68a33 33 0 01-6.55 2.38c-.31.05-.62.07-.93.1a11 11 0 01-7.18-2q-.35-.26-.69-.54a10.13 10.13 0 01-.75-.7 4.86 4.86 0 00-.33 2.09 6.41 6.41 0 002.23 4.35 6.07 6.07 0 001.18.8 5.12 5.12 0 002 .58 4.7 4.7 0 00.72 0l-.18.08c-.44.21-.89.4-1.35.57h-.1c-.49.17-1 .33-1.49.46h-.09a16.61 16.61 0 01-7.67.11l-.81-.2c-.41-.11-.81-.22-1.21-.37a9.19 9.19 0 00.42.84l.15.26c.11.18.23.37.35.54l.2.28q.18.25.38.48l.22.25c.15.17.31.33.48.49l.18.18q.34.31.7.59l.25.18.52.36.34.21.47.26.38.19.47.21.39.17.55.19.67.2.5.13.48.09.43.07.5.05H900.01a9.53 9.53 0 002.87-.7c-.58.26-1.17.5-1.76.73l-.87.31-.91.32-.9.27-.92.27-.9.23-1 .22-.88.18-1 .18-.84.13-1.09.13-.78.08-1.24.08h-2.52c.71 0 1.83.82 2.9 1.52a7.7 7.7 0 001.78 1 6.87 6.87 0 00.86.19h.25l.62.06h2.58c.28 0 .56 0 .84.07a12.51 12.51 0 015 1.6 8.91 8.91 0 012.12 1.86c-.27.43-.53.87-.77 1.32s-.41.77-.6 1.16q-.57 1.18-1 2.42a26.93 26.93 0 00-1.64 9.28c0 .58 0 1.16.06 1.74v.48q.06.7.15 1.38v.35q.12.84.3 1.67l.08.33q.15.68.34 1.35l.11.39a26.77 26.77 0 001.17 3.17l.14.31q.32.7.68 1.38l.07.13q.41.77.87 1.51l.07.11q.43.69.9 1.34l.11.15a27.12 27.12 0 002.24 2.7l.07.07a27.07 27.07 0 007.21 5.41 12.06 12.06 0 00-.2 1.24 12.16 12.16 0 00-.07 1.3v10.1q-.87.46-1.69 1c-24-10.89-59.68-88.12-59.68-88.12h-.87c3.48-2.61 0-13.93 0-13.93a16.33 16.33 0 00-6.7-2.23h-2.45l-.35.07-.23.05-.39.11-.15.22-.57.21-.53.25-.19.1-.37.21-.21.14-.34.23-.22.17-.32.27-.21.19-.32.32-.2.21-.33.39-.16.19c-.16.21-.32.42-.47.66-5.22 7.83 0 12.19 0 12.19a78 78 0 00-.48 9.08c-.38 56.38 59.95 100.06 63 102.25-1.36 3.52-12.57 34.72.13 73.65a1.25 1.25 0 00.15.27 113 113 0 00-33.92 106.93l.25 1.17h.56a7.7 7.7 0 01-.2.77 8.78 8.78 0 01-.56 1.33 10.39 10.39 0 01-1.39 2l-.06.07c-.59.68-1.29 1.38-2 2.09l-.76.73c-3 2.92-6.12 5.74-3.83 6.89h32.93v-14.28h.58s-.23-.45-.58-1.3v-.27h-.11c-1.72-4.45-5.66-18.18.69-39.34 7.83-26.12 38.3-39.17 38.3-39.17l.56 1.84-.11.06 23.85 78.5c0 .3 0 .61-.1.94a12.76 12.76 0 01-.53 2.19 13.88 13.88 0 01-.66 1.61c-1.47 3.05-4 6.62-5.13 9.29a9 9 0 00-.4 1.13 3.49 3.49 0 00-.13 1.33 1.55 1.55 0 001 1.29l.43-.07.93-.15zm-9.22-223.38q-.9-.5-1.84-.94v-9.45a12.1 12.1 0 00-.2-2.16 27 27 0 005.76-3.7c-1.27 5.91-2.56 11.43-3.73 16.25z"
        transform="translate(-178 -88.36)"
        fill="url(#Segment_svg__f)"
        opacity={0.2}
      />
      <path
        d="M658.9 378.69s-5.79-4.82 0-13.5 16.39-1.93 16.39-1.93 3.86 12.54 0 15.43-16.39 0-16.39 0z"
        fill="#ca7070"
      />
      <path
        data-name="&lt;Path&gt;"
        d="M718.53 701.43h-26.58s.61 3.22-2.51 6.82c-3.58 4.14-10.77 9.13-7.39 10.83h36.48z"
        fill="#00695c"
      />
      <path
        d="M691.36 708.26c3.12-3.61 2.51-6.82 2.51-6.82h-1.93s.61 3.22-2.51 6.82c-3.58 4.14-10.77 9.13-7.39 10.83H684c-3.41-1.7 3.78-6.69 7.36-10.83z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        data-name="&lt;Path&gt;"
        d="M813.19 695.95l-24.92 4.07a12.67 12.67 0 01-1.13 8.76c-2.72 5.65-8.82 12.9-5.15 14.45l36-5.82z"
        fill="#00695c"
      />
      <path
        d="M801 366.91s28.5 89.73-19.23 139.45L768 495.82s28.21-98 12.42-121c27.84-9.25 20.58-7.91 20.58-7.91z"
        fill="#00695c"
      />
      <path
        d="M781.36 374.84s-5.79-4.82 0-13.5 16.39-1.93 16.39-1.93 3.86 12.54 0 15.43-16.39 0-16.39 0z"
        fill="#ca7070"
      />
      <path
        d="M789.07 708.78a12.67 12.67 0 001.13-8.76l23.06-3.77-.07-.3-24.92 4.07a12.67 12.67 0 01-1.13 8.76c-2.72 5.65-8.82 12.9-5.15 14.45l1.5-.24c-2.71-1.95 2.98-8.81 5.58-14.21z"
        fill="#fff"
        opacity={0.2}
      />
      <rect
        x={744.24}
        y={450.53}
        width={27}
        height={40.02}
        rx={11.66}
        ry={11.66}
        fill="#ca7070"
      />
      <path
        d="M769.91 501.64s27.86-96.78 12.69-120.54c-1.34-.24-2.2-.44-2.2-.44s-.1-.08-.25-.24l-.71.24C795.22 403.64 767 501.64 767 501.64l13.79 10.55c.41-.43.8-.86 1.2-1.3z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={758.22} cy={434.62} r={29.89} fill="#ca7070" />
      <path
        d="M747.61 477.05v-13a13.41 13.41 0 01.31-2.83 29.89 29.89 0 0112-56.42c-.56 0-1.12-.05-1.69-.05a29.89 29.89 0 00-13.68 56.47 13.41 13.41 0 00-.31 2.83v13a13.41 13.41 0 0015.19 13.38 13.54 13.54 0 01-11.82-13.38z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M788.6 583.64s-57.66 6.51-59.79 0c-14.95-45.8 0-82 0-82a29.89 29.89 0 0129.89-29.89 29.89 29.89 0 0129.9 29.89z"
        fill="#00695c"
      />
      <path
        d="M788.6 583.64l26 119.57h-26l-27-88.72s-33.75 14.46-42.43 43.39 0 45.32 0 45.32h-28l-.28-1.3a124.33 124.33 0 0137.92-118.26"
        fill="#263238"
      />
      <path
        d="M732.18 583.64c-14.95-45.8 0-82 0-82a29.89 29.89 0 0128-29.82c-.64 0-1.28-.07-1.93-.07a29.89 29.89 0 00-29.92 29.89s-14.95 36.16 0 82c.76 2.33 8.64 3 18.45 2.88-7.95-.13-13.94-.88-14.6-2.88z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M728.33 501.16s-77.14-54-69.43-122.47h17.36s41.47 89.68 68 98.36-15.93 24.11-15.93 24.11z"
        fill="#00695c"
      />
      <g opacity={0.2} fill="#fff">
        <path d="M762.09 616.57l26.51 87.07h3.86l-27-88.72s-1.28.57-3.37 1.65zM732.67 584.09h-3.86a124.33 124.33 0 00-37.89 118.27l.28 1.3h3.86l-.28-1.3a124.33 124.33 0 0137.89-118.27z" />
      </g>
      <path
        d="M661.79 379.64h-2.89c-7.71 68.47 69.43 122.47 69.43 122.47s.71-.26 1.89-.73c-8.99-6.58-75.63-57.86-68.43-121.74z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M734.38 421.28c2 3.7 2.52 8 3.49 12 2 8.38 6.24 16.74 13.69 21.08a30.36 30.36 0 0013.44 3.68c7.12.45 14.83-.94 19.87-6 3.26-3.26 5.06-7.73 6.07-12.23 3-13.45-1-28.43-10.88-38s-25.45-13.15-38.24-8c-2.4 1-4.72 2.2-7.26 2.64a12.07 12.07 0 01-10.59-3.53c-1.59 4 2.16 9 6.45 8.65a18.62 18.62 0 01-14.28.77 12.11 12.11 0 0015.23 6.11 40.79 40.79 0 01-17.37 3.48c1.25 0 3.68 2.3 5.19 2.75 2.08.61 3.76.14 5.72.41 4.3.55 7.29 2.07 9.47 6.19z"
        fill="#263238"
      />
      <g opacity={0.2} fill="#fff">
        <path d="M730.39 401.53a18.44 18.44 0 01-7.07 1.81 18.57 18.57 0 009-1.81c-3.81.34-7.19-3.6-6.78-7.29a11.37 11.37 0 01-1.6-1.37c-1.59 4.01 2.16 9.05 6.45 8.66zM736.46 396.41c2.54-.43 4.86-1.68 7.26-2.64a33.26 33.26 0 0111.51-2.31 33.61 33.61 0 00-13.44 2.31c-2.4 1-4.72 2.2-7.26 2.64-.34.06-.69.08-1 .11a11.52 11.52 0 002.93-.11zM721.16 414.64c-1.51-.44-3.94-2.72-5.19-2.75a40.79 40.79 0 0017.29-3.52 10.68 10.68 0 01-3.88.81 40.81 40.81 0 01-15.38 2.75c1.25 0 3.68 2.3 5.19 2.75a12.84 12.84 0 004 .32 8.39 8.39 0 01-2.03-.36zM766.91 458.04a30.36 30.36 0 01-13.43-3.65c-7.44-4.34-11.7-12.7-13.69-21.08-1-4.08-1.52-8.33-3.49-12-2.19-4.12-5.17-5.6-9.44-6.19a19.27 19.27 0 00-2.86-.08c.31 0 .62 0 .93.08 4.27.59 7.25 2.07 9.44 6.19 2 3.7 2.52 8 3.49 12 2 8.38 6.24 16.74 13.69 21.08a30.36 30.36 0 0013.45 3.65c1.11.07 2.23.09 3.35.06zM728.16 409.19a12.21 12.21 0 01-9.81-6.26 17.84 17.84 0 01-2.24-.63 12.2 12.2 0 0012.05 6.89z" />
      </g>
      <path
        d="M660.83 378.69s-5.79-4.82 0-13.5a9.24 9.24 0 017.15-4.39 9.37 9.37 0 00-9.08 4.39c-5.79 8.68 0 13.5 0 13.5a52.28 52.28 0 0011.34 1.27 57.09 57.09 0 01-9.41-1.27z"
        fill="#fff"
        opacity={0.2}
      />
    </svg>
  );
};

SvgSegment.propTypes = {
  color: PropTypes.string
};
SvgSegment.defaultProps = {
  color: "primary"
};
export default SvgSegment;
