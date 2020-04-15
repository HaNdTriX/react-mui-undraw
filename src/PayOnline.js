import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPayOnline = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 902 702.007"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M794.712 652.863c-.066-.29-6.423-29.279 6.56-53.356s40.697-34.695 40.975-34.8l1.267-.475.299 1.32c.066.29 6.423 29.279-6.56 53.356s-40.697 34.695-40.975 34.8l-1.267.475zm47.065-85.41c-5.552 2.389-27.46 12.84-38.426 33.174-10.966 20.337-7.658 44.387-6.603 50.334 5.55-2.382 27.45-12.817 38.426-33.173 10.966-20.336 7.658-44.384 6.603-50.334z"
        fill="#3f3d56"
      />
      <path
        d="M827.331 610.463C804 624.5 795.014 652.38 795.014 652.38s28.842 5.123 52.173-8.914 32.317-41.918 32.317-41.918-28.842-5.123-52.173 8.914z"
        fill="#d0cde1"
      />
      <path
        d="M320.418 526c-2.774 0-5.577-.044-8.328-.13l.063-1.998c3.95.123 7.981.157 11.95.103l.027 2q-1.853.025-3.712.025zm15.745-.464l-.117-1.996c3.956-.233 7.963-.561 11.91-.975l.208 1.989c-3.976.417-8.013.748-12 .982zm-36.095-.311c-3.99-.306-8.02-.706-11.983-1.193l.244-1.984c3.932.481 7.932.88 11.891 1.182zm60.039-2.2l-.3-1.976c3.93-.597 7.892-1.29 11.77-2.06l.39 1.961a265.168 265.168 0 01-11.86 2.075zm-83.935-.731a263.661 263.661 0 01-11.824-2.283l.425-1.955a259.6 259.6 0 0011.733 2.265zm107.548-3.962l-.48-1.941a261.85 261.85 0 0011.532-3.134l.568 1.918a263.174 263.174 0 01-11.62 3.157zm-131.076-1.146a260.899 260.899 0 01-11.563-3.364l.603-1.906a258.77 258.77 0 0011.474 3.336zm154.158-5.702l-.656-1.888a260.531 260.531 0 0011.194-4.184l.742 1.858a262.144 262.144 0 01-11.28 4.214zm-177.145-1.566a260.887 260.887 0 01-11.228-4.426l.776-1.844a259.467 259.467 0 0011.142 4.393zm199.474-7.368l-.828-1.82a260.031 260.031 0 0010.742-5.184l.91 1.781a262.791 262.791 0 01-10.824 5.223zm21.399-10.939l-.99-1.736a263.49 263.49 0 0010.229-6.148l1.068 1.689a262.426 262.426 0 01-10.307 6.195zm20.323-12.857l-1.145-1.639a263.925 263.925 0 009.631-7.06l1.219 1.586a263.97 263.97 0 01-9.705 7.113zm-304.826-2.816a265.59 265.59 0 01-9.585-7.302l1.248-1.563a263.426 263.426 0 009.512 7.245zm323.903-11.846l-1.29-1.53a264.588 264.588 0 008.954-7.91l1.357 1.47a265.717 265.717 0 01-9.021 7.97zm-342.728-3.186a264.456 264.456 0 01-8.877-8.14l1.385-1.443a262.91 262.91 0 008.81 8.08zm360.4-13.16l-1.423-1.405c2.79-2.827 5.55-5.753 8.201-8.695l1.487 1.337a265.747 265.747 0 01-8.264 8.762zm-377.772-3.513a266.265 266.265 0 01-8.097-8.91l1.511-1.31a262.75 262.75 0 008.035 8.841zm393.893-14.38l-1.545-1.269a262.937 262.937 0 007.378-9.41l1.602 1.198a263.073 263.073 0 01-7.435 9.482zm-409.67-3.796a264.06 264.06 0 01-7.25-9.605l1.623-1.168a263.77 263.77 0 007.194 9.532zm424.099-15.497l-1.655-1.123a260.974 260.974 0 006.493-10.048l1.705 1.047a265.332 265.332 0 01-6.543 10.124zM100 406.53a265.47 265.47 0 01-6.34-10.22l1.723-1.015a263.225 263.225 0 006.292 10.142zm450.766-16.51l-1.75-.967a262.098 262.098 0 005.546-10.607l1.793.887a263.56 263.56 0 01-5.59 10.687zm10.68-21.622l-1.831-.802a260.784 260.784 0 004.548-11.078l1.868.716a262.984 262.984 0 01-4.584 11.164zm-483.902-4.315a262.322 262.322 0 01-4.364-11.19l1.88-.684a260.237 260.237 0 004.33 11.104zm492.551-18.216l-1.898-.629a258.81 258.81 0 003.5-11.425l1.925.54a262.348 262.348 0 01-3.527 11.514zm-500.767-4.383a262.837 262.837 0 01-3.323-11.574l1.934-.508a260.863 260.863 0 003.298 11.487zm507.286-18.795l-1.949-.453a260.32 260.32 0 002.434-11.698l1.967.361a261.686 261.686 0 01-2.452 11.79zM63.22 318.195a263.17 263.17 0 01-2.244-11.83l1.973-.328c.65 3.915 1.399 7.864 2.227 11.74zm517.752-19.183l-1.982-.272c.538-3.917.992-7.91 1.35-11.872l1.992.18c-.361 3.992-.819 8.016-1.36 11.964zm-521.694-4.567a266.044 266.044 0 01-1.151-11.984l1.995-.147c.29 3.964.674 7.965 1.142 11.895zm523.869-19.409l-1.998-.09c.177-3.963.268-7.982.268-11.946h2c0 3.994-.09 8.044-.27 12.036zm-525.626-4.601a270.065 270.065 0 01-.104-7.435q0-2.309.04-4.608l2 .035q-.04 2.282-.04 4.573c0 2.462.035 4.945.103 7.38zm2.41-23.948l-1.996-.125c.25-3.996.595-8.032 1.024-11.997l1.988.216c-.426 3.934-.768 7.94-1.016 11.906zm520.195-12.202c-.4-3.943-.949-5.865-1.53-9.79l1.98-.293c.583 3.956 1.084 6.975 1.488 10.948zM62.505 222.734l-1.976-.306a262.457 262.457 0 012.116-11.854l1.96.397a260.728 260.728 0 00-2.1 11.763zm514.074-10.016a262.74 262.74 0 00-2.558-11.672l1.943-.473c.943 3.873 1.81 7.83 2.578 11.761zM67.242 199.317l-1.94-.486c.972-3.874 2.047-7.78 3.198-11.61l1.915.575a261.203 261.203 0 00-3.173 11.52zm503.685-9.814a260.224 260.224 0 00-3.622-11.386l1.89-.65a261.598 261.598 0 013.652 11.474zm-496.8-13.1l-1.886-.663c1.329-3.78 2.764-7.58 4.265-11.29l1.854.75a259.619 259.619 0 00-4.233 11.203zm489.033-9.494a262.386 262.386 0 00-4.644-10.98l1.824-.821a263.726 263.726 0 014.68 11.063zM83.104 154.206l-1.818-.835a263.142 263.142 0 015.285-10.842l1.777.917a260.738 260.738 0 00-5.244 10.76zm470.268-9.036a261.684 261.684 0 00-5.636-10.514l1.74-.986a262.916 262.916 0 015.68 10.596zM94.081 132.94l-1.734-.997c1.996-3.464 4.1-6.932 6.254-10.306l1.686 1.076a262.151 262.151 0 00-6.206 10.228zm447.541-8.534a263.899 263.899 0 00-6.577-9.962l1.643-1.14a264.814 264.814 0 016.628 10.038zm-434.668-11.624l-1.635-1.152c2.306-3.27 4.716-6.53 7.167-9.688l1.58 1.226a263.341 263.341 0 00-7.112 9.614zm421.064-7.992a263.18 263.18 0 00-7.462-9.327l1.533-1.285c2.56 3.056 5.09 6.218 7.519 9.398zm-406.41-10.899l-1.523-1.297a265.863 265.863 0 018.015-8.99l1.462 1.364a264.998 264.998 0 00-7.955 8.923zm391.07-7.408a263.902 263.902 0 00-8.283-8.614l1.41-1.419a266.89 266.89 0 018.345 8.68zM137.911 76.419l-1.399-1.43c2.86-2.798 5.82-5.564 8.796-8.221l1.332 1.492a262.92 262.92 0 00-8.73 8.159zm357.818-6.78a264.092 264.092 0 00-9.035-7.828l1.275-1.541a266.508 266.508 0 019.104 7.888zm-340-9.132l-1.262-1.55a265.344 265.344 0 019.502-7.385l1.191 1.607a263.503 263.503 0 00-9.43 7.328zm19.182-14.217l-1.116-1.66a264.44 264.44 0 0110.13-6.484l1.04 1.71a263.345 263.345 0 00-10.054 6.434zM195.3 33.889l-.96-1.755a264.28 264.28 0 0110.674-5.528l.879 1.797A261.583 261.583 0 00195.3 33.89zm241.37-4.634a261.406 261.406 0 00-10.835-5.09l.809-1.83a262.995 262.995 0 0110.919 5.13zM216.722 23.41l-.795-1.835a262.674 262.674 0 0111.128-4.523l.71 1.87a260.182 260.182 0 00-11.043 4.488zm198.052-3.835a260.276 260.276 0 00-11.266-4.072l.637-1.896a262.27 262.27 0 0111.351 4.104zM239.03 14.94l-.623-1.9c3.8-1.246 7.678-2.42 11.525-3.486l.535 1.926a259.539 259.539 0 00-11.437 3.46zm153.063-2.973a259.998 259.998 0 00-11.563-3.01l.459-1.946c3.888.916 7.808 1.937 11.653 3.032zM262.053 8.55l-.446-1.95c3.897-.89 7.866-1.7 11.797-2.41l.356 1.968c-3.902.704-7.84 1.509-11.707 2.392zM368.84 6.483a260.7 260.7 0 00-11.79-1.933l.277-1.98c3.96.556 7.958 1.211 11.882 1.948zm-83.275-2.176l-.265-1.982c3.96-.529 7.985-.973 11.967-1.32l.174 1.993c-3.951.344-7.947.785-11.876 1.31zM345.18 3.16c-3.94-.371-7.95-.658-11.919-.85l.098-1.997c3.999.193 8.039.481 12.008.856zm-35.814-.93l-.084-1.998C312.958.08 316.704.001 320.418 0l.906.002-.006 2-.9-.002c-3.685.001-7.404.079-11.051.23zM169 652.292h733v2H169z"
        fill="#3f3d56"
      />
      <path
        d="M598.01 316.025l10 155s24 61 23 119c0 0-9 23-2 27s11 7 7 10-7 10-4 12 4 5 3 5h-30s6-15-3-19-4-14-4-14l-67-196-53 180s9 6 2 9-10-3-7 3-1 9-1 10-30-3-30-3 15-13 8-16-10-6-8-8 10-21 10-21 4-72 5-75 0-17 0-24-1-35 2-42 6-93 22-103 117-9 117-9z"
        fill="#2f2e41"
      />
      <path
        d="M471.01 612.025s20 41 6 46-32 1-36 7-48 13-49-2 48-43 48-43l6.383-10.278zM633.01 642.025s20 41 6 46-32 1-36 7-48 13-49-2 48-43 48-43l6.383-10.278z"
        fill="#2f2e41"
      />
      <circle cx={540.511} cy={94.525} r={33} fill="#a0616a" />
      <path fill="#a0616a" d="M563.011 112.025l-4 29-30 23-8-11v-38l42-3z" />
      <path
        d="M516.01 149.025s31 3 47-8l32 189s-113 9-118 3v-59l20-96z"
        fill="#3f3d56"
      />
      <path
        d="M560.257 131.989l10.754 9.036s44 7 41 19l-12 142 4 48s-34-9-60 0-5.344-193.403-5.344-193.403 23.836-21.67 21.59-24.633zM521.01 142.935s-32 23.09-36 38.09-17 173-17 173 6-3 9 2 49-205.18 44-213.09z"
        fill="#d0cde1"
      />
      <path
        d="M507.526 93.087s-3.572-5.358-2.198-11.13a33.731 33.731 0 00.962-10.03s2.885-9.343 5.77-14.564 1.512-7.42 10.58-9.069 5.36-13.465 29.267-.687a7.011 7.011 0 007.283 2.748c4.946-.962 6.732 5.909 6.732 5.909s3.298-1.924 4.535.824 10.054-1.65 10.054 16.9-10.034 35.119-10.034 35.119.735-31.203-15.616-34.363-33.938-12.366-38.197-.55a90.08 90.08 0 01-9.138 18.893z"
        fill="#2f2e41"
      />
      <ellipse cx={570.835} cy={96.206} rx={3.225} ry={4.3} fill="#a0616a" />
      <path
        d="M435.3 405.45c-7.912-4.759-17.453-4.395-21.08-4.032 1.381 3.372 5.526 11.974 13.438 16.735 7.933 4.77 17.46 4.396 21.083 4.035-1.381-3.371-5.526-11.976-13.44-16.738zM472.484 499.874h-49.456a11.128 11.128 0 100 22.255h49.456a11.128 11.128 0 000-22.255z"
        fill="#d0cde1"
      />
      <path
        d="M696.438 382.416H419.153a24.562 24.562 0 00-24.562 24.562v135.099a24.562 24.562 0 0024.562 24.562h277.285A24.562 24.562 0 00721 542.077V406.978a24.562 24.562 0 00-24.562-24.562zM412.293 399.17c.547-.099 13.531-2.309 24.283 4.16 10.75 6.469 14.881 18.977 15.051 19.505l.435 1.35-1.395.247a37.036 37.036 0 01-6.017.442c-4.883 0-11.959-.808-18.267-4.604-10.75-6.467-14.88-18.975-15.05-19.504l-.435-1.348zm60.19 125.43h-49.455a13.6 13.6 0 010-27.2h49.456a13.6 13.6 0 010 27.2zm225.025-2.472a14.88 14.88 0 01-14.836 14.836H645.58a14.88 14.88 0 01-14.837-14.836v-22.255a14.88 14.88 0 0114.837-14.837h37.092a14.88 14.88 0 0114.836 14.837z"
        fill="#d0cde1"
      />
      <path
        d="M657.325 517.801h-16.073a4.327 4.327 0 000 8.655h16.073a4.327 4.327 0 100-8.655zm0 6.182h-16.073a1.855 1.855 0 110-3.709h16.073a1.855 1.855 0 110 3.71zM687 517.801h-16.074a4.327 4.327 0 100 8.655h16.073a4.327 4.327 0 000-8.655zm0 6.182h-16.074a1.855 1.855 0 110-3.709h16.073a1.855 1.855 0 010 3.71zM657.325 506.674h-16.073a4.327 4.327 0 000 8.654h16.073a4.327 4.327 0 100-8.654zm0 6.182h-16.073a1.855 1.855 0 110-3.71h16.073a1.855 1.855 0 110 3.71zM687 506.674h-16.074a4.327 4.327 0 100 8.654h16.073a4.327 4.327 0 000-8.654zm0 6.182h-16.074a1.855 1.855 0 010-3.71h16.073a1.855 1.855 0 010 3.71zM657.325 495.546h-16.073a4.327 4.327 0 000 8.655h16.073a4.327 4.327 0 100-8.655zm0 6.182h-16.073a1.855 1.855 0 010-3.71h16.073a1.855 1.855 0 010 3.71zM687 495.546h-16.074a4.327 4.327 0 100 8.655h16.073a4.327 4.327 0 000-8.655zm0 6.182h-16.074a1.855 1.855 0 010-3.71h16.073a1.855 1.855 0 010 3.71z"
        fill="#d0cde1"
      />
      <path
        d="M609.01 352.025l-7.168 23.392s-1.831 43.608-25.831 37.608 7-57 7-57l7-11zM473.01 352.025l-7.168 23.392s-1.831 43.608-25.831 37.608 7-57 7-57l7-11z"
        fill="#a0616a"
      />
      <path
        d="M604.01 153.025s16-4 21 23 11 104 11 104l-24 81s-24-13-29-11l18.887-70.32-15.886-71.68s14-55 18-55z"
        fill="#d0cde1"
      />
      <path opacity={0.15} d="M580.747 209.393l21 70-21 71 12-71-12-70z" />
      <path
        d="M485.01 208.025l-36 142S468 356.292 475 361.292z"
        fill="#d0cde1"
      />
      <circle cx={107.362} cy={464.884} r={100} fill="#3f3d56" />
      <circle cx={107.362} cy={464.884} r={86} opacity={0.1} />
      <path
        d="M103.241 515.632v-12.517c-6.327-.123-12.873-2.355-16.69-5.453l2.617-8.303a26.681 26.681 0 0015.71 5.328c7.745 0 12.982-5.08 12.982-12.145 0-6.816-4.255-11.03-12.328-14.748-11.127-4.957-18-10.658-18-21.44 0-10.286 6.436-18.094 16.473-19.953v-12.517h6.764v12.022a26.543 26.543 0 0114.182 4.337l-2.728 8.18a24.107 24.107 0 00-13.745-4.214c-8.4 0-11.564 5.7-11.564 10.658 0 6.445 4.036 9.667 13.528 14.129 11.236 5.205 16.91 11.649 16.91 22.679 0 9.79-6.001 18.962-17.238 21.067v12.89z"
        fill={color}
      />
      <path
        d="M213 668.292a722.026 722.026 0 01-213 0v-24a802.33 802.33 0 00213 0zM213 631.292a722.026 722.026 0 01-213 0v-24a802.33 802.33 0 00213 0zM213 594.292a722.026 722.026 0 01-213 0v-24a802.33 802.33 0 00213 0z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgPayOnline.propTypes = {
  color: PropTypes.string
};
SvgPayOnline.defaultProps = {
  color: "primary"
};
export default SvgPayOnline;
