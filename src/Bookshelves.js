import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBookshelves = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 835 673.722"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#3f3d56" d="M49.771 0h338v597h-338z" />
      <ellipse cx={417.5} cy={599.922} rx={417.5} ry={9.697} fill="#3f3d56" />
      <ellipse cx={417.5} cy={631.997} rx={289.038} ry={6.714} fill="#3f3d56" />
      <ellipse
        cx={417.632}
        cy={661.089}
        rx={235.781}
        ry={5.477}
        fill="#3f3d56"
      />
      <path
        fill="#d0cde1"
        d="M49.771 114.5h338v2h-338zM49.771 236.5h338v2h-338zM49.771 358.5h338v2h-338zM49.771 480.5h338v2h-338zM204.798 266.106l-5.959-18.53-1.146 1.015a31.398 31.398 0 01-24.938 8.02l-1.523-.157 5.959 18.53 4.09 12.72 13.763 42.796 4.09 12.719 4.517 14.048 1.114-.792a42.84 42.84 0 0125.128-8.08l1.366-.006-4.517-14.047-4.09-12.72-13.764-42.797zm-30.734-7.379a33.034 33.034 0 0023.8-7.653l5.03 15.645-23.8 7.653zm5.643 17.55l23.8-7.654 2.865 8.91-23.8 7.654zm48.818 70.142a44.634 44.634 0 00-23.8 7.653l-3.687-11.465 23.8-7.653zm-4.3-13.37l-23.8 7.654-2.865-8.91 23.8-7.654zm-3.478-10.814l-23.8 7.653-13.762-42.797 23.8-7.653zM86.798 144.106l-5.959-18.53-1.146 1.015a31.398 31.398 0 01-24.938 8.02l-1.523-.157 5.959 18.53 4.09 12.72L77.044 208.5l4.09 12.72 4.517 14.047 1.114-.792a42.84 42.84 0 0125.128-8.08l1.366-.006-4.518-14.047-4.09-12.72-13.763-42.797zm-30.734-7.379a33.023 33.023 0 0023.8-7.653l5.03 15.645-23.8 7.653zm5.643 17.55l23.8-7.654 2.865 8.91-23.8 7.654zm48.818 70.142a44.64 44.64 0 00-23.8 7.653l-3.687-11.465 23.8-7.653zm-4.3-13.37l-23.8 7.654-2.865-8.91 23.8-7.654zm-3.478-10.814l-23.8 7.653-13.762-42.797 23.8-7.653z"
      />
      <path
        d="M782.692 117.48a13.707 13.707 0 1113.707-13.707 13.722 13.722 0 01-13.707 13.706zm0-25.13a11.422 11.422 0 1011.422 11.423 11.435 11.435 0 00-11.422-11.423zM807.445 515.043h-22.55v-22.549h22.55zm-20.815-1.735h19.08v-19.08h-19.08zM444.191 161.574l-15.38-16.49 16.49-15.38 15.38 16.49zm-12.929-16.404l13.014 13.953 13.953-13.014-13.014-13.953z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M687.908 364.153l-31.72 38.487 46.945 55.404 31.297-36.795-46.522-57.096z"
      />
      <path
        opacity={0.1}
        d="M687.908 364.153l-31.72 38.487 46.945 55.404 31.297-36.795-46.522-57.096z"
      />
      <path
        d="M657.457 403.063a15.942 15.942 0 012.586-3.453l29.134-29.536s10.15-1.691 12.265 3.384l-37.218 30.451z"
        fill="#f2f2f2"
      />
      <path
        d="M655.976 402.429l43.14 65.977s4.229 2.96 8.458 1.269l44.197-29.817-46.946-71.052-42.293 32.988z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M681.582 414.617l29.01-19.53 7.241 10.756-29.01 19.53z"
      />
      <path d="M692.27 348.5s4 30-10 29-7-27-7-27z" fill="#ffb8b8" />
      <path
        d="M582.27 240.5l-17-2v-2l-16-2s-35 66-33 108 29 226 29 226 42-4 48-16l-7-41-4-49s27 137 39 137 47-7 44-12-39-159-39-159l-4-75-9-110z"
        fill="#2f2e41"
      />
      <circle cx={596.271} cy={112.5} r={28} fill="#ffb8b8" />
      <path
        d="M597.27 131.5s11 25 3 36 43-18 43-18-25-24-26-35z"
        fill="#ffb8b8"
      />
      <path
        d="M643.27 145.5s-26 16-47 10l-52 85 86 16 19-108z"
        fill="#d0cde1"
      />
      <path
        d="M631.27 142.5s4-5 9-2 37 4 39 17-48 211-48 211l-8-2s9-3-26-12-40-39-32-75 11-58 11-58z"
        fill="#575a89"
      />
      <path
        d="M602.566 149.407S567.27 164.5 566.27 169.5s-39 95-39 95l-8 7 4 3-29 64s1 8 16 8h9s15-76 25-90 74.59-94.185 58.295-107.093zM666.27 152.5s13-4 16 22 2 43 2 43l13 136-28 3-25-153z"
        fill="#575a89"
      />
      <path
        d="M553.27 561.5s0 20-9 23-36 27-4 26 29-16 29-16v-4l8 4 16-4s5-35 0-38-40 9-40 9zM628.27 594.5s1 30-11 44-25 33-9 35 45-10 44-17 0-9 0-9h5l8-6s5-49-4-53-33 6-33 6z"
        fill="#2f2e41"
      />
      <path
        d="M542.27 216.5l7-10s13-12 22-6-16.846 23.403-16.846 23.403h-7.222l-2.931 2.003z"
        fill="#ffb8b8"
      />
      <circle cx={580.771} cy={236} r={4} fill="#2f2e41" />
      <circle cx={579.771} cy={251} r={4} fill="#2f2e41" />
      <path
        d="M532.27 229.5l12-23s.147 21.242 7.574 21.62L536.27 250.5z"
        fill="#575a89"
      />
      <path
        d="M559.82 104.235s-16.172-45.819 36.547-40.976c0 0 33.892-14.05 54.94 27.598l21.65 43.747-6.378-1.882-1.412 6.39-8.75 4.33-5.646-7.008.134 9.955-74.16 23.828s29.63-27.362 22.444-63.452l-4.999 8.22z"
        fill="#2f2e41"
      />
      <path
        d="M315.77 454.9v11.05A10.921 10.921 0 01305.006 477h-31.469a10.921 10.921 0 01-10.765-11.05V454.9a10.921 10.921 0 0110.765-11.05h9.938V443h11.593v.85h9.938a10.921 10.921 0 0110.766 11.05z"
        fill={color}
      />
      <path
        d="M313.77 438h-12v-17h-6v-8.78a4.169 4.169 0 001.41.23c3.22 0 8.23-2.69 12.54-6.17a27.587 27.587 0 008.42-12.79l.37-1.35-1.39.08a27.511 27.511 0 00-14.3 5.5 34.91 34.91 0 00-7.05 7.41V392.5c2.63-1.77 4-8.16 4-14.5a27.505 27.505 0 00-4.69-14.58l-.81-1.13-.81 1.13a27.505 27.505 0 00-4.69 14.58c0 7.1 1.72 14.27 5 14.93V421h-6v17h-12a13.012 13.012 0 00-13 13v13a13.012 13.012 0 0013 13h38a13.012 13.012 0 0013-13v-13a13.012 13.012 0 00-13-13zm-9.7-38.73a25.454 25.454 0 0111.64-4.87 25.336 25.336 0 01-7.24 10.33c-6.09 4.9-11.45 6.51-12.32 5.42-.88-1.08 1.84-5.97 7.92-10.88zM290.77 378a25.402 25.402 0 013.5-12.12 25.327 25.327 0 013.5 12.12c0 7.82-2.11 13-3.5 13s-3.5-5.18-3.5-13zm34 86a11.007 11.007 0 01-11 11h-38a11.007 11.007 0 01-11-11v-13a11.007 11.007 0 0111-11h14v-17h10v17h14a11.007 11.007 0 0111 11z"
        fill="#d0cde1"
      />
      <path
        d="M165.77 271v3.426h-25V271h-2v68h2v-2.084h25V339h2v-68zm0 54.27h-25v-39.197h25zM126.77 278v3.073h-25V278h-2v61h2v-1.87h25V339h2v-61zm0 48.683h-25v-35.161h25zM87.77 271v3.225h-25V271h-2v64h2v-1.961h25V335h2v-64zm0 51.077h-25v-36.89h25zM371.77 151v3.426h-25V151h-2v68h2v-2.084h25V219h2v-68zm0 54.27h-25v-39.197h25zM332.77 158v3.073h-25V158h-2v61h2v-1.87h25V219h2v-61zm0 48.683h-25v-35.161h25zM293.77 151v3.225h-25V151h-2v64h2v-1.961h25V215h2v-64zm0 51.077h-25v-36.89h25z"
        fill={color}
      />
      <path
        d="M166.37 252.08a31.382 31.382 0 01-26.2 0l-1.4-.61v105.9l1.3-.42a42.826 42.826 0 0126.4 0l1.3.42v-105.9zm-25.6 77.17v-44.96h25v44.96zm25 2v9.36h-25v-9.36zm-25-48.96v-9.36h25v9.36zm25 72.36a44.781 44.781 0 00-25 0v-12.04h25zm0-83.72h-25V254.5a33.082 33.082 0 0025 0zM127.468 356.953l1.303.413V251.47l-1.403.615a31.39 31.39 0 01-26.195 0l-1.402-.615v105.897l1.302-.413a42.823 42.823 0 0126.395 0zm-.697-16.343h-25v-9.36h25zm0-58.316h-25v-9.36h25zm-25-27.794a33.058 33.058 0 0025 0v16.434h-25zm0 29.794h25v44.956h-25zm0 58.316h25v12.043a44.633 44.633 0 00-25 0zM88.468 356.953l1.303.413V251.47l-1.403.615a31.39 31.39 0 01-26.195 0l-1.402-.615v105.897l1.302-.413a42.823 42.823 0 0126.395 0zm-.697-16.343h-25v-9.36h25zm0-58.316h-25v-9.36h25zm-25-27.794a33.058 33.058 0 0025 0v16.434h-25zm0 29.794h25v44.956h-25zm0 58.316h25v12.043a44.633 44.633 0 00-25 0zM294.468 234.953l1.303.413V129.47l-1.403.615a31.39 31.39 0 01-26.195 0l-1.402-.615v105.897l1.302-.413a42.837 42.837 0 0126.395 0zm-.697-16.343h-25v-9.36h25zm0-58.316h-25v-9.36h25zm-25-27.794a33.058 33.058 0 0025 0v16.434h-25zm0 29.794h25v44.956h-25zm0 58.316h25v12.043a44.644 44.644 0 00-25 0zM333.468 234.953l1.303.413V129.47l-1.403.615a31.39 31.39 0 01-26.195 0l-1.402-.615v105.897l1.302-.413a42.837 42.837 0 0126.395 0zm-.697-16.343h-25v-9.36h25zm0-58.316h-25v-9.36h25zm-25-27.794a33.058 33.058 0 0025 0v16.434h-25zm0 29.794h25v44.956h-25zm0 58.316h25v12.043a44.644 44.644 0 00-25 0zM372.468 234.953l1.303.413V129.47l-1.403.615a31.39 31.39 0 01-26.195 0l-1.402-.615v105.897l1.302-.413a42.836 42.836 0 0126.395 0zm-.697-16.343h-25v-9.36h25zm0-58.316h-25v-9.36h25zm-25-27.794a33.058 33.058 0 0025 0v16.434h-25zm0 29.794h25v44.956h-25zm0 70.36V220.61h25v12.043a44.644 44.644 0 00-25 0z"
        fill="#d0cde1"
      />
    </svg>
  );
};

SvgBookshelves.propTypes = {
  color: PropTypes.string
};
SvgBookshelves.defaultProps = {
  color: "primary"
};
export default SvgBookshelves;
