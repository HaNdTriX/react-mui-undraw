import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDesignData = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1002.698 700.077"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#f2f2f2" d="M482.698 151.17v129h246" />
      <path fill="#3f3d56" d="M764.698 281.17h-283v-255h2v253h281v2z" />
      <path
        d="M485.785 281.46l-1.79-.895c12.301-24.612 37.959-42.07 65.367-44.477 4.728-.415 9.682-.456 14.473-.496 13.24-.11 26.931-.223 36.914-8.32 7.39-5.992 10.961-14.806 14.744-24.138a119.558 119.558 0 016.484-14.19 58.173 58.173 0 0146.121-28.658c.73-.043 1.476-.069 2.232-.077a54.781 54.781 0 015.296-6.087c9.692-9.584 22.101-15.867 34.102-21.942l2.84-1.44c12.7-6.462 25.851-13.71 34.832-24.936a55.148 55.148 0 008.82-51.51l1.889-.657a57.192 57.192 0 01-9.147 53.416c-9.23 11.538-22.591 18.908-35.487 25.468l-2.844 1.443c-11.863 6.006-24.13 12.217-33.598 21.58a52.813 52.813 0 00-4.208 4.7c11.301.444 24.449 4.806 31.837 16.106a28.053 28.053 0 013.282 22.41c-1.782 6.56-5.752 11.657-11.179 14.354-5.73 2.847-12.5 2.764-19.067-.234a28.939 28.939 0 01-15.878-18.425c-3.024-11.688.958-23.254 7.052-32.206q-.328.014-.659.034a56.126 56.126 0 00-44.498 27.65 118.05 118.05 0 00-6.368 13.952c-3.712 9.156-7.549 18.624-15.339 24.942-10.525 8.536-24.572 8.652-38.156 8.765-4.752.04-9.666.08-14.314.488-26.733 2.348-51.756 19.375-63.753 43.38zM671.34 162.204c-6.272 8.693-10.576 20.188-7.586 31.749a26.9 26.9 0 0014.774 17.107c6.007 2.742 12.168 2.835 17.346.262 4.908-2.44 8.508-7.087 10.14-13.087a26.387 26.387 0 00-3.027-20.79c-6.102-9.334-18.295-15.131-31.647-15.241z"
        fill="#3f3d56"
      />
      <circle cx={620.698} cy={193.17} r={18} fill={color} />
      <path
        d="M432.968 520.122H0V314.17h432.968zM2 518.122h428.968V316.17H2zM322.698 675.17h665v2h-665z"
        fill="#3f3d56"
      />
      <path
        d="M832.349 232.498l-8.224 41.119s-10.573 23.496-5.874 39.944l3.525 7.049 22.321-19.972 8.224-55.217zM786.531 613.14l-12.923 49.342 15.273 7.049 14.097-11.748 8.224-37.594-24.671-7.049zM959.817 593.755l6.461 71.077h32.895l-15.86-78.126-23.496 7.049z"
        fill="#a0616a"
      />
      <path
        d="M908.712 332.358l6.656-32.541-77.145-17.976-16.448 25.846s-28.195 44.643-35.244 180.922-9.399 135.104-9.399 135.104l57.567 5.874 29.37-190.32 72.839 173.873 55.216-15.273L922.81 388.75s4.7-30.545-14.098-56.391zM790.055 651.909l-8.223 8.224-4.7-4.7 2.566-17.263-13.139 7.865s-23.496-3.525-21.147 21.147c0 0-3.524 8.223 16.448 17.622s30.545 15.273 30.545 15.273 18.797-1.175 18.797-7.05-5.923-45.76-5.923-45.76zM981.551 651.909l-8.224 8.224-4.699-4.7-4.93-17.263-5.643 7.865s-23.497-3.525-21.147 21.147c0 0-3.525 8.223 16.447 17.622s30.546 15.273 30.546 15.273 18.797-1.175 18.797-7.05-5.924-45.76-5.924-45.76z"
        fill="#2f2e41"
      />
      <circle cx={888.74} cy={130.289} r={34.07} fill="#a0616a" />
      <path
        fill="#a0616a"
        d="M878.167 156.135l2.349 39.944h44.644l-12.923-54.042-34.07 14.098z"
      />
      <path
        d="M852.32 179.631l36.42-2.35 38.77 2.35s32.894 17.623 15.272 65.79-30.545 63.44-30.545 63.44l-37.595-16.447h-11.748s-3.524-3.524-4.7-3.524-23.495 3.524-23.495 3.524-5.875-24.671 2.35-27.02 12.922-15.273 12.922-15.273z"
        fill="#d0cde1"
      />
      <path
        fill="#d0cde1"
        d="M859.37 183.156l-7.049-3.525-24.671 57.567 27.02 17.622 4.7-71.664z"
      />
      <path
        d="M839.985 127.352s-16.447-42.294 16.068-46.34c0 0 40.996-25.184 67.344 16.97l20.794 51.327-6.947-1.381-.881 6.916-8.865 5.438-6.667-6.89 1.103 10.547-76.376 32.436s28.795-31.887 17.687-69.482l-4.51 9.204z"
        fill="#2f2e41"
      />
      <path
        d="M365 650.582c-4.272 15.79-18.903 25.57-18.903 25.57s-7.706-15.823-3.434-31.613 18.903-25.57 18.903-25.57 7.705 15.822 3.434 31.613z"
        fill={color}
      />
      <path
        d="M326.14 650.582c4.271 15.79 18.903 25.57 18.903 25.57s7.705-15.823 3.434-31.613-18.903-25.57-18.903-25.57-7.706 15.822-3.434 31.613z"
        fill={color}
      />
      <path
        d="M332.417 647.188c11.72 11.41 13.153 28.95 13.153 28.95s-17.573-.959-29.294-12.37-13.153-28.95-13.153-28.95 17.572.96 29.294 12.37zM358.723 647.188c-11.722 11.41-13.153 28.95-13.153 28.95s17.572-.959 29.293-12.37 13.154-28.95 13.154-28.95-17.573.96-29.294 12.37z"
        fill="#3f3d56"
      />
      <path
        d="M186.826 84.85a84.771 84.771 0 0162.024-57.852 84.827 84.827 0 10-42.924 140.49 84.771 84.771 0 01-19.1-82.639z"
        fill={color}
      />
      <path
        d="M305.356 32.366a84.402 84.402 0 00-43.886-1.513 84.806 84.806 0 01-42.925 140.49 84.822 84.822 0 1086.811-138.977z"
        fill="#3f3d56"
      />
      <ellipse
        cx={331.447}
        cy={198.857}
        rx={73.45}
        ry={42.413}
        transform="rotate(-73.01 214.59 215.523)"
        fill="#d0cde1"
      />
      <circle cx={759.698} cy={59.17} r={18} fill={color} />
      <circle cx={710.698} cy={133.17} r={18} fill={color} />
      <path fill="#f2f2f2" d="M8.698 360.815h329.074V506.17H8.698z" />
      <path fill={color} d="M25.044 351.047h313.324v27.801H25.044z" />
      <path fill="#3f3d56" d="M44.955 361.191h273.501v7.514H44.955z" />
      <circle cx={181.33} cy={364.572} r={10.519} fill="#3f3d56" />
      <path fill={color} d="M99.43 400.638h163.8v78.143H99.43z" />
      <circle cx={181.33} cy={439.709} r={15.028} opacity={0.15} />
      <circle cx={233.926} cy={439.709} r={15.028} fill="#fff" opacity={0.3} />
      <circle cx={128.734} cy={439.709} r={15.028} opacity={0.3} />
    </svg>
  );
};

SvgDesignData.propTypes = {
  color: PropTypes.string
};
SvgDesignData.defaultProps = {
  color: "primary"
};
const MemoSvgDesignData = React.memo(SvgDesignData);
export default MemoSvgDesignData;
