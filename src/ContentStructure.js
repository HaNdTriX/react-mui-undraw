import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgContentStructure = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 813.664 701.257"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#d0cde1"
        d="M14.588 113.766h119.819v106.387H14.588zM14.588 305.262h119.819v106.387H14.588zM399.588 113.766h119.819v106.387H399.588zM399.588 305.262h119.819v106.387H399.588z"
      />
      <path
        fill="#3f3d56"
        d="M208.448 113.766h119.819v106.387H208.448zM208.448 305.262h119.819v106.387H208.448z"
      />
      <path
        d="M307.604 210.578l-77.406-1.752c9.27-29.996 11.269-58.554 1.921-84.868l77.407 1.753a169.482 169.482 0 00-1.922 84.867z"
        fill={color}
      />
      <path
        fill="#fff"
        d="M250.38 141.634l.043-1.866 40.102.908-.042 1.866zM250.212 149.095l.042-1.866 40.102.908-.042 1.866zM250.043 156.556l.042-1.866 40.103.908-.043 1.865zM249.874 164.016l.042-1.865 40.103.908-.042 1.865zM249.705 171.477l.042-1.865 40.103.908-.042 1.865zM249.536 178.938l.043-1.865 40.102.908-.042 1.865zM249.367 186.4l.043-1.866 40.102.908-.042 1.865zM249.198 193.86l.042-1.865 40.103.908-.043 1.865z"
      />
      <circle cx={329.799} cy={106.673} r={22.459} fill={color} />
      <path
        fill="#fff"
        d="M328.998 117.617l-8.506-10.397 1.338-1.094 7.042 8.608 12.307-18.049 1.427.973-13.608 19.959z"
      />
      <ellipse
        cx={371.172}
        cy={682.344}
        rx={371.172}
        ry={18.913}
        fill="#d0cde1"
      />
      <path
        d="M715.017 652.13l87.554-130.202-87.375 144.208.183 14.651q-9.588.073-18.989-.32l4.342-188.327-.119-1.453.16-.28.416-17.797-95.881-139.209 95.768 125.89.34 3.762 3.28-142.29-82.816-144.327 83.052 119.332L704.065.98l.002-.981.028.965 5.498 232.331 75.476-94.373-75.23 114.388 1.648 127.274 69.454-124.215-69.199 142.927.917 70.77 101.005-173.03-100.698 197.72z"
        fill="#d0cde1"
      />
      <path
        d="M322.066 564.338l-65.157-41.827c23.54-20.772 40.126-44.106 45.858-71.437l65.157 41.827a169.482 169.482 0 00-45.858 71.437z"
        fill={color}
      />
      <path
        fill="#fff"
        d="M309.144 475.677l1.008-1.57 33.756 21.67-1.008 1.57zM305.114 481.958l1.008-1.57 33.756 21.669-1.008 1.57zM301.082 488.237l1.008-1.57 33.756 21.669-1.008 1.57zM297.05 494.516l1.008-1.57 33.757 21.67-1.008 1.57zM293.019 500.796l1.008-1.57 33.756 21.67-1.008 1.57zM288.987 507.077l1.008-1.57 33.756 21.669-1.008 1.57zM284.956 513.357l1.008-1.57 33.757 21.669-1.008 1.57zM280.924 519.637l1.009-1.57 33.756 21.67-1.008 1.57z"
      />
      <path
        d="M183.497 694.972l16.274-31.541c30.032 4.94 35.333 3.93 61.576.524l6.978 34.23a378.164 378.164 0 00-84.828-3.213z"
        fill={color}
      />
      <path
        fill="#fff"
        d="M251.392 689.284l-.51-17.734 1.864.07.51 17.734-1.864-.07zM243.935 689.001l-.511-17.734 1.865.071.51 17.734-1.864-.071zM236.477 688.719l-.51-17.734 1.864.07.511 17.734-1.865-.07zM229.02 688.437l.672-17.735 1.864.07-.672 17.735zM221.563 688.154l.672-17.735 1.864.071-.672 17.734zM214.105 687.871l1.854-17.734 1.864.071-1.854 17.734-1.864-.071zM206.647 687.589l1.854-17.734 1.865.07-1.854 17.734-1.865-.07zM199.19 687.306l1.854-17.734 1.864.071-1.854 17.734-1.864-.071z"
      />
      <path
        d="M300.838 420.514l1.182 11.821s-9.456 34.28 4.729 31.916 9.456-31.916 9.456-31.916l-2.364-9.456zM452.144 421.696l-1.182 11.821s9.456 34.28-4.729 31.916-9.456-31.916-9.456-31.916l2.364-9.456zM334.527 644.518l-3.546 24.823 24.824-2.364-3.547-24.823-17.731 2.364zM465.738 644.518l3.546 24.823-24.824-2.364 3.547-24.823 17.731 2.364z"
        fill="#ffb8b8"
      />
      <path
        d="M330.39 408.694s-5.91 2.364 0 92.202l2.364 146.577h23.642l9.456-130.028 13.003-79.2L415.5 541.087 445.05 651.02l23.642-5.91-30.734-140.667s5.91-81.564-15.367-95.748-92.202 0-92.202 0zM336.3 661.658s-.49-10.75-2.609-11.286-17.486 12.468-17.486 12.468-16.549-2.364-15.367 15.367 24.824 11.82 24.824 11.82 4.728 10.64 14.185 10.64 23.641 0 24.823-7.093-5.91-39.009-8.274-37.827-8.275 0-8.275 0zM463.965 661.658s.49-10.75 2.61-11.286 17.485 12.468 17.485 12.468 16.549-2.364 15.367 15.367-24.824 11.82-24.824 11.82-4.728 10.64-14.185 10.64-23.641 0-24.823-7.093 5.91-39.009 8.274-37.827 8.275 0 8.275 0z"
        fill="#2f2e41"
      />
      <circle cx={376.491} cy={206.559} r={22.459} fill="#ffb8b8" />
      <path
        d="M391.858 210.105s1.182 31.916 7.092 35.462-35.462 0-35.462 0l4.728-27.188z"
        fill="#ffb8b8"
      />
      <path
        d="M401.315 242.021s-21.278-10.639-41.373-3.546-30.734 15.367-30.734 15.367l13.003 68.56s-24.824 89.838-17.731 92.202 91.02-7.092 99.294 0 8.275-8.275 8.275-8.275-11.821-29.551-9.457-54.375 2.364-33.098 2.364-33.098l13.003-55.558z"
        fill="#575a89"
      />
      <path
        d="M337.483 253.842h-8.275s-13.003 8.274-13.003 20.095-11.82 76.835-11.82 76.835l-7.093 73.289 20.095 3.546 17.731-96.93 13.003-26.006zM415.5 263.298h22.459s7.092 7.093 10.639 23.642 7.092 81.563 7.092 81.563l-2.364 59.104h-17.731l-2.364-76.835-11.821-49.647z"
        fill="#575a89"
      />
      <path
        d="M357.378 205.01l4.755 12.147c1.948 4.977 4.18 10.303 8.747 13.081 5.638 3.43 13.168 1.758 18.623-1.958a29.081 29.081 0 00-13.09-52.93l-.226 4.066-4.989-4.182a4.85 4.85 0 01-7.54 1.066c1.311 2.717-.201 6.03-2.386 8.11-2.683 2.557-10.358 5.63-10.04 10.2.213 3.05 4.91 7.239 6.146 10.4z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgContentStructure.propTypes = {
  color: PropTypes.string
};
SvgContentStructure.defaultProps = {
  color: "primary"
};
export default SvgContentStructure;
