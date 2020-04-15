import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgMobileDevices = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 888 650.612"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#e6e6e6"
        d="M467.054 645.101h-7.425l2.475-145.191h2.475l2.475 145.191z"
      />
      <path
        d="M472.91 408.37l11.966-18.491a277.22 277.22 0 00-12.275-28.735l-7.737 6.249 6.126-9.468c-5.838-11.492-10.432-18.733-10.432-18.733s-23.996 37.814-32.013 77.85l15.354 23.729-16.998-13.729a112.157 112.157 0 00-.932 14.064c0 47.416 15.486 85.854 34.589 85.854s34.589-38.438 34.589-85.854c0-14.7-3.326-30.078-7.913-44.304zM279.016 645.101h-7.424l2.475-145.191h2.474l2.475 145.191z"
        fill="#e6e6e6"
      />
      <path
        d="M287.657 408.37l11.965-18.491a277.221 277.221 0 00-12.275-28.735l-7.737 6.249 6.126-9.468c-5.838-11.492-10.432-18.733-10.432-18.733s-23.996 37.814-32.013 77.85l15.354 23.729-16.997-13.729a112.157 112.157 0 00-.933 14.064c0 47.416 15.486 85.854 34.589 85.854s34.589-38.438 34.589-85.854c0-14.7-3.326-30.078-7.913-44.304zM371.285 644.652h-14.849l4.95-298.63h4.95l4.949 298.63z"
        fill="#e6e6e6"
      />
      <path
        d="M384.194 157.738l24.67-38.127a571.604 571.604 0 00-25.31-59.248L367.6 73.247l12.632-19.52C368.195 30.03 358.723 15.1 358.723 15.1s-49.477 77.968-66.008 160.518l31.658 48.926-35.046-28.307a231.256 231.256 0 00-1.923 28.998c0 97.768 31.93 177.024 71.319 177.024s71.319-79.256 71.319-177.024c0-30.308-6.857-62.018-16.316-91.35z"
        fill="#e6e6e6"
      />
      <circle cx={299.195} cy={68.471} r={68.471} fill="#e6e6e6" />
      <path fill="#3f3d56" d="M0 644.24h888v2.241H0z" />
      <path
        d="M799.232 292.422a2.822 2.822 0 002.822-2.821v-30.097a2.794 2.794 0 00-3.762-2.648v-34.031a9.405 9.405 0 00-9.405-9.406H481.34a9.405 9.405 0 00-9.405 9.406v412.882a9.405 9.405 0 009.405 9.405h307.546a9.405 9.405 0 009.405-9.405V334.572a2.794 2.794 0 003.762-2.649v-30.096a2.794 2.794 0 00-3.762-2.649v-6.929a2.795 2.795 0 00.94.173z"
        fill="#3f3d56"
      />
      <path
        d="M770.077 231.76a9.405 9.405 0 019.405 9.404v376.203a9.405 9.405 0 01-9.405 9.405H500.15a9.405 9.405 0 01-9.405-9.405V241.164a9.405 9.405 0 019.405-9.405h269.926"
        fill="#fff"
      />
      <circle cx={635.114} cy={222.824} r={3.762} fill="#fff" />
      <path fill={color} d="M515.639 281.11h231.169v22.973H515.639z" />
      <path
        fill="#e6e6e6"
        d="M515.639 335.224h231.169v8.701H515.639zM515.639 361.782h231.169v8.701H515.639zM515.639 388.677h119.445v8.701H515.639zM515.639 416.049h231.169v8.701H515.639zM515.639 443.421h231.169v8.701H515.639zM515.639 470.793h115.445v8.701H515.639zM515.639 498.165h231.169v8.701H515.639zM515.639 525.537h231.169v8.701H515.639z"
      />
      <path fill={color} d="M674.084 559.11h73v24h-73z" />
      <path
        d="M267.946 366.082h-1.644v-54.775a31.84 31.84 0 00-31.84-31.84H117.785a31.84 31.84 0 00-31.839 31.84v301.966a31.84 31.84 0 0031.84 31.84h116.676a31.84 31.84 0 0031.84-31.84v-208.27h1.644z"
        fill="#3f3d56"
      />
      <path
        d="M259.175 309.123v303.44a23.778 23.778 0 01-23.778 23.778H118.495a23.778 23.778 0 01-23.778-23.778v-303.44a21.432 21.432 0 0121.433-21.432h16.504a11.603 11.603 0 00.506 9.71 11.342 11.342 0 009.278 5.639h68.013a11.341 11.341 0 009.279-5.639 11.604 11.604 0 00.505-9.71h17.508a21.432 21.432 0 0121.432 21.432z"
        fill="#fff"
      />
      <path
        d="M394.632 226.764s-12.402-4.43-20.375 13.288-20.375 37.206-20.375 37.206l7.087 1.772s1.772-12.402 6.201-14.174l-1.772 15.946s53.152 18.603 77.07-1.772l-.885-6.201s3.543.886 3.543 6.201l2.658-2.658s-2.658-5.315-10.63-12.402c-5.233-4.651-7.032-13.5-7.65-19.034a23.033 23.033 0 00-5.303-12.543c-5.298-6.14-14.952-12.667-29.57-5.63z"
        fill="#2f2e41"
      />
      <path
        fill="#fbbebe"
        d="M321.794 378.753l11.597 14.76 7.381-8.435-6.326-10.543-12.652 4.218zM317.577 605.429l-4.217 22.14 10.543 5.272 7.38-5.272v-22.14h-13.706zM391.378 605.429l4.218 22.14-10.543 5.272-7.381-5.272v-22.14h13.706z"
      />
      <path
        fill="#2f2e41"
        d="M348.152 406.165l-14.761 105.43-21.086 95.943 25.304 3.163 20.032-89.617 25.303-75.91-3.163 90.671-5.271 74.856h18.977l13.706-101.214 15.156-75.251-.396-28.071h-73.801zM320.74 625.46s-5.272-6.325-8.435-3.162-10.543 15.815-10.543 15.815-16.869 9.488-3.163 11.597 17.924 0 17.924-1.054 2.108-4.218 2.108-4.218l5.272 1.055 7.38-2.109s3.163-19.426 0-18.674-9.489 3.914-10.543.75zM388.216 625.46s5.271-6.325 8.434-3.162 10.543 15.815 10.543 15.815 16.869 9.488 3.163 11.597-17.923 0-17.923-1.054-2.109-4.218-2.109-4.218l-5.271 1.055-7.38-2.109s-3.163-19.426 0-18.674 9.488 3.914 10.543.75z"
      />
      <circle cx={398.231} cy={260.143} r={21.086} fill="#fbbebe" />
      <path
        d="M412.465 273.322s-2.109 17.923-1.055 22.14 3.163 10.543 3.163 10.543l-33.738-6.326s9.49-20.031 7.38-23.194 24.25-3.163 24.25-3.163z"
        fill="#fbbebe"
      />
      <path
        d="M415.628 298.625l-34.793-7.38-20.031 122.3a45.676 45.676 0 0127.412 1.054c14.76 5.272 34.792 0 34.792 0l-4.218-114.92z"
        fill={color}
      />
      <path
        d="M387.922 281.559l-12.358 6.523-15.815 3.163-16.869 40.064 2.109 28.466s-17.923 32.684-20.032 50.607c0 0 2.109 27.412 36.9 26.358l23.196-64.313s9.488-48.498 0-62.204c0 0 6.792-25.699 2.869-28.664z"
        fill="#2f2e41"
      />
      <path
        d="M366.075 291.245l-3.414-.582-2.912.582s-7.38 1.054-15.815 8.434-36.9 30.575-39.009 36.901-1.054 16.87 2.109 23.195 9.488 14.76 9.488 14.76l3.163 7.38 17.924-5.271s-11.598-22.14-10.543-31.63l21.086-16.868zM411.297 286.325l15.928 19.68 8.434 10.543-10.543 35.847-5.271 30.575s12.651 48.498 2.108 63.258c0 0-6.325 7.38-8.434-1.054s-2.109-48.498-2.109-48.498-8.434-52.716-4.217-66.422-.226-41.468 4.104-43.929z"
        fill="#2f2e41"
      />
      <path
        d="M426.17 438.848v10.543s-2.108 34.792 8.435 30.575 3.163-30.575 3.163-30.575l-1.054-11.597z"
        fill="#fbbebe"
      />
      <path
        d="M374.726 261.267c8.02-5.803 14.51-12.488 18.804-20.439 0 0 14.716 16.351 23.71 17.169s.817-19.622.817-19.622l-16.351-4.087-15.534 1.635-12.263 8.175zM427.225 313.385l8.434 3.163 1.055 10.543 4.217 64.313-2.109 48.499-15.814 1.054-5.272-53.77-2.108-59.041 11.597-14.761z"
        fill="#2f2e41"
      />
      <path fill={color} d="M112.639 373.689h128.154v12.736H112.639z" />
      <path
        fill="#e6e6e6"
        d="M112.639 403.688h128.154v4.824H112.639zM112.639 418.411h128.154v4.824H112.639zM112.639 433.321h66.217v4.824h-66.217zM112.639 448.495h128.154v4.824H112.639zM112.639 463.67h128.154v4.824H112.639zM112.639 478.844h64v4.824h-64zM112.639 494.018h128.154v4.824H112.639zM112.639 509.193h128.154v4.824H112.639z"
      />
      <path fill={color} d="M200.477 527.805h40.469v13.305h-40.469z" />
    </svg>
  );
};

SvgMobileDevices.propTypes = {
  color: PropTypes.string
};
SvgMobileDevices.defaultProps = {
  color: "primary"
};
export default SvgMobileDevices;
