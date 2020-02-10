import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHello = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 903.822 748.215"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Hello_svg__a"
          x1={963.632}
          y1={410.815}
          x2={963.632}
          y2={349.802}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Hello_svg__b"
          x1={514.095}
          y1={824.108}
          x2={514.095}
          y2={75.892}
          xlinkHref="#Hello_svg__a"
        />
        <linearGradient
          id="Hello_svg__c"
          x1={725.679}
          y1={487.075}
          x2={725.679}
          y2={484.075}
          xlinkHref="#Hello_svg__a"
        />
        <linearGradient
          id="Hello_svg__d"
          x1={647.539}
          y1={341.178}
          x2={647.539}
          y2={183.077}
          xlinkHref="#Hello_svg__a"
        />
      </defs>
      <path
        d="M137.273 601.895c0 45.239-26.895 61.036-60.068 61.036-.772 0-1.54-.008-2.305-.029-1.536-.033-3.06-.1-4.563-.209-29.942-2.116-53.204-18.728-53.204-60.798 0-43.536 55.626-98.473 59.821-102.552l.009-.004c.158-.158.242-.238.242-.238s60.068 57.55 60.068 102.794z"
        fill="#3f3d56"
      />
      <path
        d="M75.013 656.01l21.972-30.698-22.026 34.066-.059 3.524c-1.536-.033-3.06-.1-4.563-.209l2.367-45.26-.016-.35.042-.067.22-4.275-22.08-34.154 22.148 30.948.054.906 1.79-34.197-18.903-35.29 19.133 29.283 1.862-70.894.009-.242v.238l-.31 55.906L95.47 533.08l-18.895 26.978-.497 30.618 17.572-29.383-17.647 33.892-.276 17.02 25.509-40.9-25.605 46.842z"
        fill="#f2f2f2"
      />
      <path
        d="M983.788 360.697v-10.895h-54.476v50.39a10.623 10.623 0 0010.623 10.623h33.23a10.623 10.623 0 0010.623-10.623v-11.167a14.164 14.164 0 000-28.328zm0 22.88v-17.432a8.716 8.716 0 110 17.432z"
        transform="translate(-149.803 -75.892)"
        fill="url(#Hello_svg__a)"
        opacity={0.7}
      />
      <path
        d="M832.232 286.51a12.932 12.932 0 1012.932 12.932 12.932 12.932 0 00-12.932-12.932zm0 20.89a7.958 7.958 0 117.958-7.958 7.958 7.958 0 01-7.958 7.958z"
        fill={color}
      />
      <path
        d="M832.232 286.51a12.932 12.932 0 1012.932 12.932 12.932 12.932 0 00-12.932-12.932zm0 20.89a7.958 7.958 0 117.958-7.958 7.958 7.958 0 01-7.958 7.958z"
        opacity={0.1}
      />
      <path
        d="M782.493 276.563h49.739v45.957a9.75 9.75 0 01-9.75 9.75h-30.239a9.75 9.75 0 01-9.75-9.75v-45.957z"
        fill={color}
      />
      <path
        d="M823.279 276.563v46.008a9.699 9.699 0 01-9.7 9.699h4.975a9.699 9.699 0 009.699-9.7v-46.007z"
        opacity={0.1}
      />
      <path
        d="M792.308 239.48a2.904 2.904 0 00-2.196 1.116c-.653 1.183.53 2.516 1.609 3.329 1.993 1.502 4.094 2.976 5.449 5.072s1.78 5.02.3 7.029c-1.935 2.622-6.549 3.186-6.995 6.414-.287 2.072 1.505 3.84 3.32 4.88 4.48 2.566 10.256 3.251 13.5 7.267 1.343-2.76 4.346-4.356 7.34-5.038s6.102-.63 9.137-1.092a3.16 3.16 0 002.52-1.338c.85-1.721-1.569-3.786-.734-5.515.635-1.315 2.5-1.213 3.863-1.74 2.219-.857 3.133-3.712 2.504-6.006s-2.408-4.086-4.279-5.556c-5.04-3.96-11.1-6.29-17.23-7.965-2.851-.78-6.198-2.001-9.16-2.12-2.858-.113-6.118.78-8.948 1.264z"
        fill="#eee"
      />
      <path
        fill="none"
        stroke="#e0e0e0"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M443.209 344.016l-104 324"
      />
      <path
        d="M673.591 780.399c-12.792.742-24.19 11.458-24.19 11.458l-5.51-13.67-.45.147c2.692-11.785 57.466-254.72 2.635-275.663-42.134-16.093-86.824-36.008-121.839-35.26v-57.39h49.09v-2.045h38.861c7.45-5.32-3.375-8.98-15.473-11.267a11.056 11.056 0 001.296-1.83l62.243-111.67s14.318-23.521 5.114-34.771-22.5 28.635-22.5 28.635l-51.134 73.633s-51.608-53.79-84.439-80.54a57.469 57.469 0 00-12.221-9.238c-5.993-4.054-10.53-6.155-12.767-5.331-.023.008-.04.022-.063.031a57.287 57.287 0 00-15.277-2.077h-4.09v-8.39a65.608 65.608 0 0040.526-38.402 73.695 73.695 0 005.84-64.168 4.258 4.258 0 001.722-.596c1.852-1.192 2.035-3.8 1.857-5.996a45.555 45.555 0 00-23.123-35.619c-5.182-2.833-11.116-4.785-14.937-9.288-3.283-3.87-4.662-9.281-8.635-12.438-4.72-3.751-11.538-3.106-17.33-1.433a63.058 63.058 0 00-18.088 8.536c-6.265 4.29-11.918 9.803-19.13 12.178-5.125 1.687-10.683 1.654-15.84 3.239a26.605 26.605 0 00-17.117 16.694 34.75 34.75 0 00-1.464 13.048 73.22 73.22 0 00-7.346 16.712c-.386.209-.774.413-1.156.627l1.12-.504a73.617 73.617 0 0020.743 75.09 65.552 65.552 0 0031.45 22.32v10.15a77.333 77.333 0 00-25.1 10.28l-.01-.013s-.653.404-1.77 1.155l-.336.227c-7.567 5.136-32.926 23.903-32.07 44.182q-.05 1.17.014 2.347a77.975 77.975 0 00-2.089 17.883v147.17a72.275 72.275 0 0015.512 44.826c-21.342 4.783-34.943 12.017-34.943 20.114a6.55 6.55 0 010 2.045c0 14.403 43.04 26.079 96.132 26.079 6.42 0 12.69-.173 18.757-.498l59.99 48.564-96.132 154.425s-31.703 24.544-7.159 32.725 74.656 14.318 74.656 14.318 8.181-14.318-3.068-20.454-26.59-3.068-26.59-3.068l2.045-12.272s166.698-143.175 131.926-192.264c-6.652-9.391-13.304-19.082-20.014-28.62l26.242 2.39 5.971 224.758.747-.243c-1.499 4.415-12.101 37.74 11.4 32.1 25.157-6.037 70.932-27.332 70.932-27.332s-.628-16.478-13.42-15.736zm-100.265-386.74l-49.089-14.252v-41.996l53.354 56.637c-2.623-.263-4.265-.39-4.265-.39z"
        transform="translate(-149.803 -75.892)"
        fill="url(#Hello_svg__b)"
        opacity={0.7}
      />
      <circle cx={292.209} cy={99.016} r={72} />
      <path
        d="M374.21 264.016l54.946 58.329a10.735 10.735 0 0017.19-2.135l60.863-109.194-17-6-50 72s-93.867-97.837-107-93 41 80 41 80z"
        fill={color}
      />
      <path
        fill="none"
        stroke="#bdbdbd"
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M269.209 466.016l-81 210M309.209 466.016l81 210"
      />
      <ellipse cx={289.209} cy={467.516} rx={94} ry={25.5} fill="#b84733" />
      <ellipse cx={289.209} cy={465.516} rx={94} ry={25.5} fill="#f55f44" />
      <path
        fill="none"
        stroke="#bdbdbd"
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M249.655 512.154l88.69 27.33M328.763 512.154l-88.69 27.33"
      />
      <path
        d="M290.304 182.016h27.905a56 56 0 0156 56v148h-160V258.111a76.095 76.095 0 0176.095-76.095z"
        fill={color}
      />
      <path
        d="M214.21 386.016h160v87h-89a71 71 0 01-71-71v-16z"
        fill="#39447a"
      />
      <path
        d="M216.37 242.055l97.839 92.961h108v-14l-93-27-79.554-98.24s-36.124 22.319-33.285 46.28z"
        opacity={0.05}
      />
      <path
        d="M216.37 240.055l97.839 92.961h108v-14l-93-27-79.554-98.24s-36.124 22.319-33.285 46.28z"
        fill={color}
      />
      <path
        d="M422.21 319.016s52 4 38 14h-38zM490.21 205.016s13-39 22-28-5 34-5 34z"
        fill="#fda57d"
      />
      <path opacity={0.05} d="M214.209 386.016v4.667l160 .333v-5h-160z" />
      <path
        d="M338.671 478.56L446.3 488.37l5.839 219.772 38.53-12.544s57.627-248.998 2.677-269.987-114.348-48.625-149.812-26.102-4.862 79.052-4.862 79.052z"
        fill="#39447a"
      />
      <path d="M345.21 411.016s59 30 67 64" opacity={0.1} />
      <path
        d="M282.21 472.016l84 68-94 151 39 11s163-140 129-188-68-104-110-105-48 63-48 63z"
        fill="#39447a"
      />
      <path opacity={0.05} d="M414.209 251.016l21 36 5-10-26-26z" />
      <path
        d="M272.21 691.016s-31 24-7 32 73 14 73 14 8-14-3-20-26-3-26-3l2-12zM453.032 707.43s-13.617 37.765 10.982 31.861 69.36-26.725 69.36-26.725-.615-16.113-13.123-15.387-23.653 11.204-23.653 11.204l-5.389-13.367z"
        fill="#333"
      />
      <rect
        x={274.209}
        y={147.016}
        width={40}
        height={60}
        rx={20}
        fill="#fda57d"
      />
      <path
        d="M294.21 149.016a20 20 0 00-20 20v6.795a64.006 64.006 0 0040 0v-6.795a20 20 0 00-20-20z"
        opacity={0.05}
      />
      <circle cx={294.209} cy={113.016} r={64} fill="#fda57d" />
      <path
        d="M230.21 110.112s16 4.123 25-14.062 16-28.103 53-17.358 44.442 12.057 46.22 1.896c1.216-6.944-11.94-23.81-20.395-33.795-4.124-4.871-10.855-7.777-18.048-7.777H274.21l-25 11.572-19 16.532-4 22.318z"
        opacity={0.05}
      />
      <path d="M230.21 108.112s16 4.123 25-14.062 16-28.103 53-17.358 44.442 12.057 46.22 1.896c1.216-6.944-11.94-23.81-20.395-33.795-4.124-4.871-10.855-7.777-18.048-7.777H274.21l-25 11.572-19 16.532-4 22.318z" />
      <ellipse cx={236.709} cy={108.016} rx={6.5} ry={13} fill="#fda57d" />
      <path d="M232.063 74.565c-1.483-8.371-2.94-17.161-.24-25.223a26.014 26.014 0 0116.737-16.324c5.043-1.55 10.478-1.517 15.489-3.167 7.052-2.322 12.58-7.712 18.706-11.908a61.658 61.658 0 0117.687-8.346c5.663-1.637 12.33-2.267 16.945 1.4 3.885 3.087 5.234 8.379 8.444 12.162 3.736 4.404 9.54 6.312 14.606 9.083a44.545 44.545 0 0122.61 34.829c.174 2.146-.005 4.697-1.816 5.863a6.483 6.483 0 01-3.647.665c-25.579-.365-51.188-.732-76.661-3.08-7.92-.73-15.854-1.653-23.8-1.352a77.855 77.855 0 00-35.045 9.888" />
      <rect
        y={645.267}
        width={154.085}
        height={65.568}
        rx={32.784}
        fill={color}
      />
      <path
        d="M725.68 487.075a1.5 1.5 0 000-3 1.5 1.5 0 000 3z"
        transform="translate(-149.803 -75.892)"
        fill="url(#Hello_svg__c)"
      />
      <path
        fill="none"
        stroke="#e0e0e0"
        strokeMiterlimit={10}
        strokeWidth={8}
        d="M795.971 344.016l104 370.092"
      />
      <path fill="#e0e0e0" d="M338.787 333.178h561.606v21.885H338.787z" />
      <rect
        x={477.209}
        y={328.016}
        width={92}
        height={13}
        rx={6.5}
        fill="#535461"
      />
      <rect
        x={533.209}
        y={183.077}
        width={228.659}
        height={158.101}
        rx={28.22}
        fill="url(#Hello_svg__d)"
        opacity={0.7}
      />
      <rect
        x={537.286}
        y={185.994}
        width={216.609}
        height={155.184}
        rx={26.835}
        fill="#3e3f49"
      />
      <rect
        x={540.286}
        y={185.994}
        width={216.609}
        height={155.184}
        rx={26.835}
        fill="#535461"
      />
      <circle cx={658.709} cy={262.516} r={7} fill="#e0e0e0" />
    </svg>
  );
};

SvgHello.propTypes = {
  color: PropTypes.string
};
SvgHello.defaultProps = {
  color: "primary"
};
const MemoSvgHello = React.memo(SvgHello);
export default MemoSvgHello;
