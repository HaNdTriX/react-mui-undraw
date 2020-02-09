import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgJavascriptFrameworks = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 787.169 730"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="JavascriptFrameworks_svg__a"
          x1={278.973}
          y1={470.295}
          x2={278.973}
          y2={199.617}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="JavascriptFrameworks_svg__b"
          x1={191.795}
          y1={163.039}
          x2={191.795}
          y2={0}
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__c"
          x1={563.673}
          y1={215.467}
          x2={563.673}
          y2={0.876}
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__d"
          x1={639.878}
          y1={470.295}
          x2={639.878}
          y2={255.703}
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__e"
          x1={453.701}
          y1={780.902}
          x2={453.701}
          y2={650.043}
          gradientTransform="matrix(-1 0 0 1 1039.585 -85)"
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__f"
          x1={488.734}
          y1={780.902}
          x2={488.734}
          y2={650.043}
          gradientTransform="matrix(-1 0 0 1 1039.585 -85)"
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__g"
          x1={235.319}
          y1={696.902}
          x2={235.319}
          y2={566.043}
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__h"
          x1={270.352}
          y1={696.902}
          x2={270.352}
          y2={566.043}
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
        <linearGradient
          id="JavascriptFrameworks_svg__i"
          x1={319.81}
          y1={696.88}
          x2={319.81}
          y2={561.944}
          xlinkHref="#JavascriptFrameworks_svg__a"
        />
      </defs>
      <path
        d="M762.66 589.787c0 45.239-26.894 61.037-60.067 61.037-.772 0-1.54-.009-2.305-.03-1.536-.033-3.06-.1-4.563-.208-29.942-2.117-53.204-18.729-53.204-60.799 0-43.535 55.626-98.472 59.821-102.551l.009-.004c.158-.159.242-.238.242-.238s60.068 57.55 60.068 102.793z"
        fill="#3f3d56"
      />
      <path
        d="M700.401 643.902l21.972-30.698-22.026 34.067-.059 3.523c-1.536-.033-3.06-.1-4.563-.208l2.367-45.26-.016-.35.042-.067.22-4.276-22.08-34.154 22.148 30.948.054.906 1.79-34.196-18.903-35.29 19.133 29.282 1.862-70.893.009-.242v.238l-.31 55.905 18.817-22.164-18.895 26.978-.497 30.618 17.572-29.382-17.647 33.891-.276 17.021 25.509-40.901-25.605 46.842z"
        fill="#f2f2f2"
      />
      <path
        d="M138.585 638.419c0 27.107-16.115 36.573-35.993 36.573-.463 0-.923-.005-1.38-.018-.921-.02-1.834-.06-2.735-.125-17.941-1.268-31.88-11.222-31.88-36.43 0-26.086 33.33-59.004 35.845-61.448l.005-.003.145-.143s35.993 34.485 35.993 61.594z"
        fill="#3f3d56"
      />
      <path
        d="M101.279 670.844l13.166-18.394-13.199 20.413-.035 2.111c-.92-.02-1.833-.06-2.734-.125l1.418-27.12-.01-.21.025-.04.133-2.56-13.23-20.466 13.27 18.544.033.543 1.073-20.49-11.327-21.146 11.464 17.546 1.116-42.48.005-.144v.142l-.185 33.499 11.274-13.281-11.322 16.165-.297 18.346 10.529-17.606-10.574 20.308-.165 10.199 15.284-24.508-15.342 28.068z"
        fill="#f2f2f2"
      />
      <path
        fill="url(#JavascriptFrameworks_svg__a)"
        d="M136.928 199.617h284.09v270.678h-284.09z"
      />
      <path fill="#fff" d="M143.024 205.713h271.898v258.486H143.024z" />
      <path fill={color} d="M152.779 215.467h252.389v238.977H152.779z" />
      <path
        d="M325.169 268.55h30.797l-76.993 132.812L201.98 268.55h58.9l18.093 30.797 17.708-30.797z"
        fill="#41b883"
      />
      <path
        d="M201.98 268.55l76.993 132.812 76.993-132.812h-30.797l-46.196 79.687-46.58-79.687z"
        fill="#41b883"
      />
      <path
        d="M232.393 268.55l46.58 80.072 46.196-80.072H296.68l-17.708 30.797-18.093-30.797z"
        fill="#35495e"
      />
      <path
        fill="url(#JavascriptFrameworks_svg__b)"
        d="M5.247 0h373.097v163.039H5.247z"
        opacity={0.5}
      />
      <path fill="#fff" d="M10.124 2.095h363.343v156.067H10.124z" />
      <path fill={color} d="M20.564 11.849h342.463v136.558H20.564z" />
      <path
        d="M304.575 56.702l10.259.057S295.76 82.604 294.203 84.71a12.016 12.016 0 00-1.664 2.33 52.041 52.041 0 00-1.997 7.32l-9.386.047s1.46-5.241 1.4-8.033c-.052-2.438-1.298-4.874-1.996-7.32-.706-2.476-1.664-7.321-1.664-7.321h9.65l1.331 5.324 14.698-20.355"
        fill="#fff"
      />
      <path
        d="M285.149 62.153c1.893 1.141 3.055 7.437 3.055 7.437s-9.907.146-15.297.146h-4.659l-5.657 24.624h-8.652s5.384-26.76 6.656-31.611c.411-1.571 2.821-1.302 6.891-1.302h6.499c4.196 0 9.1-.535 11.164.706m-40.277 11.993a5.186 5.186 0 00-.915-3.411c-1.012-1.56-1.947-1.924-4.609-2.007-7.517-.236-7.37 5.334-7.37 5.334zm8.152-6.38c1.102 3.974-.998 13.31-.998 13.31s-10.965-.182-16.97 0c-1.868.058-4.103-.202-4.66.666-.781 1.218.287 3.092 1.192 3.884 1.041.911 3.07 1.015 3.8 1.107 4.875.62 15.077.16 15.077.16l-1.767 7.826s-14.418.723-21.629-.998a7.34 7.34 0 01-3.66-1.996c-.247-.266-.46-.628-.693-.942a8.745 8.745 0 01-.971-1.72c-1.647-4.39.193-12.798 1.996-17.303.21-.522.473-1.185.75-1.748.345-.701.638-1.493.914-1.913.186-.29.416-.476.61-.749a11.174 11.174 0 01.721-.914 13.713 13.713 0 012.33-1.997c3.004-2.25 8.441-3.996 14.974-3.328 2.459.253 6.173 1.132 7.986 3.66a11.17 11.17 0 01.998 2.996zm-39.681-6.35l8.389-.048s-4.676 22.178-7.058 32.993h-9.65c-6.745 0-12.752.835-15.307-3.994-2.48-4.688-.113-12.398.998-17.636.785-3.707 2.44-11.284 2.44-11.284l8.691-.08s-2.456 11.797-3.478 17.687c-.366 2.11-1.12 4.096-.332 5.656.748 1.485 1.797 1.59 4.99 1.664 1.013.024 4.327 0 4.327 0l5.99-24.957m-39.266 15.972c.878-3.12 2.16-6.505 1.997-9.317a8 8 0 00-4.326-6.322 11.085 11.085 0 00-11.314 2.662c-2.36 2.556-3.158 5.54-3.993 9.65-.622 3.051-1.131 6.272 0 8.652 2.003 4.206 8.249 3.288 14.974 3.328.998-2.676 1.824-5.68 2.662-8.653zm11.647-12.311c.958 6.967-2.719 14.658-5.251 21.346 2.582.233 4.845-.036 5.008.157.17.25-1.73 7.983-2.393 8.003-2.05.053-8.84.11-11.673.11-9.24 0-17.886.601-22.294-3.994a14.493 14.493 0 01-3.328-7.32 31.047 31.047 0 01.998-11.314 34.242 34.242 0 013.328-8.652c3.883-6.778 10.638-11.81 21.961-10.648a21.09 21.09 0 017.321 2.329c.136.08.613.46.722.526 2.663 1.694 5.088 5.736 5.6 9.457zm-40.886-3.62c-.56 2.545-1.118 5.43-1.707 7.946h-9.318c.722-2.789 1.275-5.56 1.997-7.987 2.982 0 5.754.04 9.028.04m-11.357 10.276h8.984c-1.174 6.502-3.5 16.99-5.324 24.291-1.141 4.57-1.903 7.903-4.991 10.316-.277.216-.436.113-.666.333-.569.542-3.201 1.172-4.658 1.33a66.98 66.98 0 01-7.96-.026c.762-2.785 1.624-6.13 2.303-8.625 7.098.859 7.278-5.85 8.652-12.312.795-3.734 3.204-13.81 3.66-15.307"
        fill="#fff"
      />
      <path
        d="M112.517 88.704l-.193.499c-3.28 6.389-9.094 10.308-17.387 10.481a24.31 24.31 0 01-9.983-1.996 25.787 25.787 0 01-11.978-11.314c-3.431-6.645-4.05-15.889 3.084-22.793.11 0-.865 1.497-.755 1.497l-.197.639c-5.14 16.095 10.698 29.888 26.095 28.31a20.225 20.225 0 0011.314-5.323"
        fill="#21609b"
      />
      <path
        d="M103.2 82.049a14.732 14.732 0 0010.315-4.326c-2.096 5.32-8.166 8.74-16.305 7.653-6.815-.912-13.307-7.77-13.976-14.641-.489-5.001 1.254-7.986 4.126-11.607a12.145 12.145 0 00-1.464 4.286c-1.09 10.818 8.642 18.578 17.303 18.635"
        fill="#21609b"
      />
      <path
        d="M113.126 68.611c-.602 1.382-4.07 3.99-5.6 4.316-6.063 1.292-9.946-1.583-11.98-4.855a14.983 14.983 0 01-.961-2.162c-.789-2.682-.426-6.739 1.927-8.838a11.048 11.048 0 00-.44 5.823 12.932 12.932 0 001.604 3.504 9.216 9.216 0 003.66 3.235 9.71 9.71 0 001.84.88c1.528.45 4.752 1.635 9.95-1.903"
        fill="#21609b"
      />
      <path
        fill="url(#JavascriptFrameworks_svg__c)"
        d="M456.377.876h214.592v214.592H456.377z"
      />
      <path fill="#fff" d="M462.474 6.972h202.399v202.399H462.474z" />
      <path fill={color} d="M472.228 16.726h182.891v182.891H472.228z" />
      <path
        d="M497.72 69.523l66.054-23.534 67.832 23.116-10.983 87.392-56.85 31.484-55.959-31.066z"
        fill="#e23237"
      />
      <path
        d="M631.606 69.105l-67.832-23.116V187.98l56.849-31.432 10.983-87.444z"
        fill="#b52e31"
      />
      <path
        d="M563.878 62.568l-41.159 91.575 15.376-.261 8.263-20.659h36.923l9.048 20.92 14.696.262-43.147-91.837zm.105 29.34l13.912 29.077h-26.15l12.238-29.077z"
        fill="#fff"
      />
      <path
        fill="url(#JavascriptFrameworks_svg__d)"
        d="M497.832 255.703h284.09v214.592h-284.09z"
      />
      <path fill="#fff" d="M503.929 261.8h271.898v202.399H503.929z" />
      <path fill={color} d="M513.683 271.554h252.389v182.891H513.683z" />
      <path
        d="M563.782 362.59c-.036 11.57 11.228 22.406 29.02 28.55-3.614 17.895-.74 32.337 8.994 37.99 10.004 5.813 24.949 1.859 39.16-10.485 13.778 11.932 27.725 16.655 37.485 11.046 10.032-5.765 13.126-21.167 9.53-39.644 18.57-6.074 28.977-15.251 29.014-26.974.036-11.301-11.252-21.114-28.804-27.219 3.995-19.216.706-33.308-9.43-39.196-9.773-5.677-23.913-.8-37.97 11.354-14.543-12.994-28.515-16.992-38.678-11.152-9.799 5.631-12.636 20.318-9.125 38.566-17.23 5.946-29.16 15.907-29.196 27.163z"
        fill="#fff"
      />
      <path
        d="M684.44 341.85q-2.17-.753-4.375-1.395.37-1.486.686-2.985c3.366-16.083 1.24-29.055-6.15-33.347-7.084-4.116-18.706.116-30.462 10.28q-1.737 1.507-3.397 3.099-1.105-1.065-2.248-2.09c-12.252-10.948-24.553-15.583-31.962-11.326-7.104 4.082-9.242 16.265-6.306 31.526q.439 2.267.992 4.51a90.25 90.25 0 00-5.041 1.568c-14.42 4.976-23.645 12.818-23.67 20.982-.027 8.432 9.821 16.921 24.81 22.097q1.822.626 3.675 1.161-.61 2.412-1.085 4.854c-2.893 14.979-.708 26.886 6.352 30.988 7.29 4.235 19.564-.056 31.535-10.453q1.42-1.233 2.847-2.608 1.787 1.734 3.668 3.367c11.532 9.987 22.94 14.041 30.018 9.973 7.312-4.201 9.723-16.978 6.693-32.542q-.346-1.783-.804-3.64 1.293-.376 2.532-.781c15.615-5.118 25.789-13.441 25.816-21.986.026-8.193-9.445-16.148-24.124-21.253z"
        fill="#53c1de"
      />
      <path
        d="M680.938 379.565a75.88 75.88 0 01-2.288.708 136.42 136.42 0 00-6.835-17.258 136.361 136.361 0 006.676-16.965c1.39.408 2.74.837 4.04 1.29 12.577 4.373 20.237 10.806 20.221 15.744-.017 5.26-8.333 12.061-21.814 16.481zm-5.623 11.055c1.34 6.882 1.514 13.101.597 17.96-.824 4.365-2.463 7.272-4.481 8.432-4.296 2.468-13.456-.787-23.317-9.328q-1.696-1.468-3.412-3.13a136.587 136.587 0 0011.45-14.445 135.683 135.683 0 0018.437-2.782q.41 1.681.726 3.293zm-56.593 25.796c-4.194 1.467-7.53 1.498-9.543.33-4.285-2.49-6.038-12.05-3.564-24.86q.441-2.27 1.008-4.514a136.677 136.677 0 0018.326 2.712 141.437 141.437 0 0011.634 14.467q-1.27 1.221-2.6 2.379c-5.293 4.598-10.593 7.854-15.26 9.486zm-19.509-37.141c-6.627-2.29-12.096-5.253-15.842-8.48-3.365-2.902-5.06-5.776-5.053-8.105.016-4.953 7.422-11.25 19.755-15.506q2.322-.797 4.688-1.458a139.397 139.397 0 006.577 17.204 141.512 141.512 0 00-6.77 17.406q-1.69-.49-3.355-1.061zm6.72-44.76c-2.515-13.077-.786-22.93 3.495-25.39 4.56-2.62 14.614 1.169 25.193 10.622a75.992 75.992 0 012.035 1.89 139.285 139.285 0 00-11.636 14.307 142.021 142.021 0 00-18.164 2.765q-.514-2.086-.922-4.196zm58.644 14.676q-1.984-3.452-4.116-6.817c4.34.562 8.497 1.303 12.4 2.207a123.985 123.985 0 01-4.392 11.703q-1.875-3.585-3.892-7.093zm-23.86-23.387a124.302 124.302 0 017.977 9.691q-8.035-.405-16.081-.054a128.178 128.178 0 018.104-9.637zm-24.16 23.275q-2.013 3.467-3.863 7.024a128.276 128.276 0 01-4.286-11.787c3.885-.856 8.027-1.553 12.341-2.078q-2.176 3.37-4.192 6.841zm4.185 34.747a123.758 123.758 0 01-12.533-2.055c1.214-3.876 2.707-7.903 4.448-11.998q1.835 3.57 3.836 7.052 2.04 3.55 4.25 7.001zm19.9 16.555c-2.745-2.981-5.482-6.278-8.155-9.822q3.907.165 7.96.179 4.16.013 8.214-.157a123.602 123.602 0 01-8.018 9.8zm27.84-30.64a123.437 123.437 0 014.53 11.983 123.352 123.352 0 01-12.698 2.123q2.168-3.413 4.199-6.91 2.064-3.554 3.968-7.197zm-8.995 4.276q-3.109 5.361-6.56 10.511c-4.038.276-8.21.411-12.461.398a190.774 190.774 0 01-12.318-.428q-3.507-5.157-6.616-10.569-3.092-5.379-5.77-10.98 2.704-5.583 5.822-10.95 3.115-5.365 6.63-10.481a164.674 164.674 0 0124.801.082q3.445 5.127 6.523 10.487 3.092 5.372 5.83 10.936-2.743 5.6-5.88 10.994zm12.195-64.868c4.548 2.642 6.287 13.244 3.38 27.13q-.286 1.357-.62 2.703a139.24 139.24 0 00-18.183-2.931 136.542 136.542 0 00-11.456-14.39q1.534-1.47 3.138-2.86c10.073-8.71 19.472-12.132 23.741-9.652z"
        fill="#fff"
      />
      <path
        d="M640.574 350.738a12.15 12.15 0 11-12.188 12.11 12.15 12.15 0 0112.188-12.11"
        fill="#53c1de"
      />
      <g opacity={0.7}>
        <path
          fill="url(#JavascriptFrameworks_svg__e)"
          d="M602.37 565.043v130.859h-32.973V565.043h32.973z"
          opacity={0.1}
        />
        <path
          fill="url(#JavascriptFrameworks_svg__f)"
          d="M567.337 565.043v130.859h-32.973V565.043h32.973z"
          opacity={0.1}
        />
      </g>
      <rect
        x={56.364}
        y={660.516}
        width={86.635}
        height={36.866}
        rx={14.297}
        fill={color}
      />
      <g opacity={0.7}>
        <path
          fill="url(#JavascriptFrameworks_svg__g)"
          d="M218.832 566.043v130.859h32.973V566.043h-32.973z"
          opacity={0.1}
        />
        <path
          fill="url(#JavascriptFrameworks_svg__h)"
          d="M253.866 566.043v130.859h32.972V566.043h-32.972z"
          opacity={0.1}
        />
        <path
          fill="url(#JavascriptFrameworks_svg__i)"
          d="M352.601 688.383l-27.35-102.545-1.593-5.973-4.78-17.921-31.859 8.497 4.78 17.921 1.269 4.757 21.567 80.863 1.593 5.973 4.514 16.925 31.859-8.497z"
          opacity={0.1}
        />
      </g>
      <path fill="#535461" d="M222.207 569.241h31.309v124.256h-31.309z" />
      <path
        fill={color}
        d="M222.207 586.853h31.309v5.87h-31.309zM222.207 670.994h31.309v5.87h-31.309z"
      />
      <path opacity={0.1} d="M245.689 569.241h7.827v124.256h-7.827z" />
      <path fill="#535461" d="M255.473 569.241h31.309v124.256h-31.309z" />
      <path
        fill={color}
        d="M255.473 586.853h31.309v5.87h-31.309zM255.473 670.994h31.309v5.87h-31.309z"
      />
      <path opacity={0.1} d="M278.954 569.241h7.827v124.256h-7.827z" />
      <path
        fill="#535461"
        d="M286.954 573.418l30.251-8.069 32.022 120.06-30.252 8.068z"
      />
      <path
        fill={color}
        d="M291.492 590.433l30.251-8.068 1.513 5.672-30.251 8.068zM313.176 671.733l30.251-8.068 1.513 5.672-30.251 8.068z"
      />
      <path
        opacity={0.1}
        d="M309.642 567.366l7.563-2.017 32.021 120.059-7.562 2.017z"
      />
      <path fill="#535461" d="M598.172 693.498h-31.309V569.242h31.31z" />
      <path
        fill={color}
        d="M598.172 592.722h-31.309v-5.87h31.31zM598.172 676.865h-31.309v-5.87h31.31z"
      />
      <path opacity={0.1} d="M574.69 693.498h-7.826V569.242h7.827z" />
      <path fill="#535461" d="M564.907 693.498h-31.31V569.242h31.31z" />
      <path
        fill={color}
        d="M564.907 592.722h-31.31v-5.87h31.31zM564.907 676.865h-31.31v-5.87h31.31z"
      />
      <path opacity={0.1} d="M541.425 693.498h-7.827V569.242h7.827z" />
      <path
        d="M642.239 634.163H755.75s22.394 28.57-12.355 71.04h-89.573s-32.432-29.342-11.583-71.04z"
        fill={color}
      />
      <path
        d="M755.75 634.163H642.24a75.505 75.505 0 00-.745 1.544h110.395s21.844 27.88-11.117 69.497h2.623c34.749-42.47 12.355-71.041 12.355-71.041z"
        opacity={0.1}
      />
      <path
        fill="#e0e0e0"
        d="M0 692.4h787.169v26.684H0zM33.355 719.084h720.46V730H33.355z"
      />
      <path opacity={0.1} d="M33.355 719.084h720.46v3.639H33.355z" />
    </svg>
  );
};

SvgJavascriptFrameworks.propTypes = {
  color: PropTypes.string
};
SvgJavascriptFrameworks.defaultProps = {
  color: "primary"
};
const MemoSvgJavascriptFrameworks = React.memo(SvgJavascriptFrameworks);
export default MemoSvgJavascriptFrameworks;
