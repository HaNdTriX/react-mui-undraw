import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgGiftCard = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 826.305 603.5"
      width="100%"
      height="auto"
      {...props}
    >
      <rect
        x={343.057}
        y={42.5}
        width={180}
        height={24}
        rx={5.421}
        fill={color}
      />
      <rect
        x={321.057}
        y={0.5}
        width={462}
        height={531}
        rx={5.421}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <rect
        x={348.057}
        y={35.5}
        width={180}
        height={24}
        rx={5.421}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <rect
        x={366.557}
        y={123.5}
        width={361}
        height={12}
        rx={5.421}
        fill="#f2f2f2"
      />
      <rect
        x={367.057}
        y={161.5}
        width={361}
        height={12}
        rx={5.421}
        fill="#f2f2f2"
      />
      <rect
        x={367.557}
        y={199.5}
        width={361}
        height={12}
        rx={5.421}
        fill="#f2f2f2"
      />
      <rect
        x={371.557}
        y={118.5}
        width={361}
        height={12}
        rx={5.421}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <rect
        x={372.057}
        y={156.5}
        width={361}
        height={12}
        rx={5.421}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <rect
        x={372.557}
        y={194.5}
        width={361}
        height={12}
        rx={5.421}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M609.69 308.5H487.424a4.866 4.866 0 00-4.866 4.866v16.268a4.866 4.866 0 004.866 4.866h6.634v82.634a4.866 4.866 0 004.866 4.866h92.268a4.866 4.866 0 004.866-4.866V334.5h13.634a4.866 4.866 0 004.866-4.866v-16.268a4.866 4.866 0 00-4.866-4.866z"
        fill="#f2f2f2"
      />
      <path
        d="M504.057 329.5h102v79.055a9.445 9.445 0 01-9.445 9.445h-83.11a9.445 9.445 0 01-9.445-9.445V329.5h0z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <rect
        x={489.557}
        y={303.5}
        width={132}
        height={26}
        rx={7.693}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path fill={color} d="M537.057 307h24.5v111h-24.5z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M545.557 303.5h20v114h-20z"
      />
      <path
        d="M546.4 277.718c6.816 11.688 5 25.445 5 25.445s-12.868-5.192-19.686-16.88-9.056-23.081-5-25.446 12.868 5.192 19.685 16.88zM562.402 277.718c-6.818 11.688-5.002 25.445-5.002 25.445s12.87-5.192 19.686-16.88 9.057-23.081 5.002-25.446-12.87 5.192-19.686 16.88z"
        fill={color}
      />
      <path
        d="M549.4 277.718c6.816 11.688 5 25.445 5 25.445s-12.868-5.192-19.686-16.88-9.056-23.081-5-25.446 12.868 5.192 19.685 16.88z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M559.402 277.718c-6.818 11.688-5.002 25.445-5.002 25.445s12.87-5.192 19.686-16.88 9.057-23.081 5.002-25.446-12.87 5.192-19.686 16.88z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M154.186 69.592s20.21 37.995 16.976 58.205-6.467 37.995 0 47.696-34.761-1.617-34.761-1.617v-56.589z"
        fill="#ff6584"
      />
      <path
        d="M197.435 171.855s-48.908 54.567-64.268 40.824-29.506-46.483-18.189-56.992c6.112-5.675 6.564-16.532 5.691-25.328a85.236 85.236 0 00-2.457-13.476s24.252-7.275 25.06 7.276a11.086 11.086 0 001.318 4.89c4.632 8.222 19.7 4.002 19.7 4.002z"
        fill="#fbbebe"
      />
      <path
        d="M161.057 135.477l3.234-2.426a96.752 96.752 0 0137.995 5.66c19.401 7.275 53.354 13.742 63.055 11.317s33.145-7.276 33.145-7.276 25.869-10.509 31.528 2.425-34.762 12.935-34.762 12.935-28.698 11.722-48.908 10.105-46.483 7.68-58.61-2.021-26.677-30.72-26.677-30.72zM64.857 444.287H43.03l-8.084 16.168 10.51 11.317s20.21-2.425 25.868-8.892-6.467-18.593-6.467-18.593z"
        fill="#fbbebe"
      />
      <path
        d="M61.508 444.287s9.008-4.042 3.35-8.893-10.51-11.317-19.403-4.85S-7.09 470.156.993 481.474s10.51 8.892 14.552 6.467 16.976-12.126 27.485-12.126 6.467-13.743 2.425-17.785 12.704-13.743 16.053-13.743z"
        fill="#3f3d56"
      />
      <path
        d="M145.697 547.762l-8.892 15.36 8.892 9.7h25.061s-8.084-16.167-4.85-23.443-20.21-1.617-20.21-1.617z"
        fill="#fbbebe"
      />
      <path
        d="M170.758 559.08s-8.892 9.7-14.551 8.084-15.496-10.788-15.496-10.788-14.415 14.022-7.948 20.489 32.336 18.593 39.612 23.444 31.528 1.616 30.72-4.042-12.935-12.126-18.594-19.402-13.743-17.785-13.743-17.785z"
        fill="#3f3d56"
      />
      <path
        d="M213.603 293.924s17.785 55.78-6.467 121.26c0 0-21.827 96.2-29.91 115.602s-8.085 27.486-8.085 27.486-30.72.808-28.294-5.66c0 0 10.51-31.527 10.51-43.653s16.976-77.607 16.976-77.607l5.659-139.854z"
        fill="#3f3d56"
      />
      <path
        d="M213.603 293.924s17.785 55.78-6.467 121.26c0 0-21.827 96.2-29.91 115.602s-8.085 27.486-8.085 27.486-30.72.808-28.294-5.66c0 0 10.51-31.527 10.51-43.653s16.976-77.607 16.976-77.607l5.659-139.854z"
        opacity={0.1}
      />
      <path
        d="M209.561 297.966s0 25.869-16.976 37.186c0 0 12.934 90.541-3.234 107.518s-42.845 9.7-42.845 9.7-44.462 2.426-77.607 15.36c0 0-25.869-7.275-4.85-25.868 0 0 25.869-6.468 33.953-12.126s45.27-16.977 54.971-12.127c0 0-.808-13.742-4.042-23.443-2.915-8.744-8.084-35.57-8.084-35.57s-22.635-42.845 0-65.48 68.714 4.85 68.714 4.85z"
        fill="#3f3d56"
      />
      <path
        d="M144.59 129.05a29.975 29.975 0 01-23.92 1.31 85.236 85.236 0 00-2.458-13.477s24.252-7.275 25.06 7.276a11.086 11.086 0 001.318 4.89z"
        opacity={0.1}
      />
      <circle cx={131.146} cy={99.907} r={29.911} fill="#fbbebe" />
      <path
        d="M129.53 211.467s33.952 24.252 18.593 50.12-10.51 40.42-10.51 40.42 29.103 0 38.804 6.468 40.42-4.85 40.42-4.85 4.85-32.337-1.617-47.696-9.7-39.612-7.275-44.463 8.892-27.485-6.468-40.42l-8.744-4.697s5.51 23.29-31.676 8.74c0 0-8.084 47.695-31.528 36.378z"
        fill={color}
      />
      <path
        fill={color}
        d="M161.478 133.65l.84.881 30.639 32.085.946.987.056.185.615 1.916 1.228 3.873-4.826-5.352-29.717-32.902-1.309-1.447 1.528-.226zM163.623 177.547s-25.201-21.86-42.986-16.201 8.62 53.755 14.011 54.363l2.157-.2s-33.144-40.42-14.551-52.547c0 0 23.443 2.426 41.228 16.977z"
      />
      <path
        d="M148.123 172.663l59.013 18.593 97.817 5.66s28.294.808 23.444 13.742-30.72 3.234-30.72 3.234l-84.074 1.617s-69.522-7.276-75.181-11.318 3.233-33.953 9.7-31.528z"
        fill="#fbbebe"
      />
      <path
        d="M122.254 124.967s-3.234-6.467 3.233-13.743c3.293-3.704 6.166-11.598 8.194-18.456a13.543 13.543 0 0115.15-9.535c5.787.934 11.89 1.232 13.843-1.111 4.042-4.85-.808-30.72-32.336-25.06S78.6 49.785 78.6 80.504s19.402 39.612 5.659 70.331S43.839 184.79 59.199 205s55.78 25.87 58.204 18.594-9.7-35.57-1.616-46.888 21.826-23.444 17.784-30.72-11.317-21.018-11.317-21.018z"
        fill="#ff6584"
      />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M26.557 603h316"
      />
      <path
        d="M758.777 165.434a20.813 20.813 0 102.772-39.915l.52 10.712-5.068-9.18a20.734 20.734 0 00-10.683 11.722 20.409 20.409 0 00-1.197 5.63 20.809 20.809 0 0013.656 21.031z"
        fill="#57b894"
      />
      <path
        d="M783.854 289.678c-1.789-9.11 5.964-17.187 13.621-22.437s16.605-10.408 19.218-19.317c3.755-12.804-7.43-24.53-16.136-34.642a125.3 125.3 0 01-16.523-24.557c-1.811-3.532-3.476-7.225-3.952-11.166-.687-5.676 1.137-11.323 2.973-16.737q9.18-27.052 19.629-53.65"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M759.634 162.676a20.813 20.813 0 102.772-39.915l.52 10.712-5.067-9.18a20.734 20.734 0 00-10.684 11.722 20.408 20.408 0 00-1.197 5.63 20.809 20.809 0 0013.656 21.031z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M781.31 103.473a20.788 20.788 0 0114.98-13.198l1.714 10.184 3.177-10.696a20.81 20.81 0 11-19.87 13.71z"
        fill="#57b894"
      />
      <path
        d="M782.453 99.795a20.788 20.788 0 0114.98-13.197l1.714 10.184 3.177-10.696a20.81 20.81 0 11-19.87 13.71z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M796.904 213.489a20.81 20.81 0 0018.419-37.023l-2.441 8.22-1.731-10.304a.362.362 0 00-.053-.02 20.811 20.811 0 10-14.194 39.127z"
        fill="#57b894"
      />
      <path
        d="M797.894 209.764a20.81 20.81 0 0018.42-37.023l-2.442 8.22-1.731-10.304a.362.362 0 00-.053-.02 20.811 20.811 0 10-14.194 39.127z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M775.237 248.051a20.801 20.801 0 104.01-16.297l9.273 13.957-12.67-7.408a20.617 20.617 0 00-.613 9.748z"
        fill="#57b894"
      />
      <path
        d="M776.094 245.294a20.801 20.801 0 104.01-16.298l9.273 13.957-12.67-7.408a20.616 20.616 0 00-.613 9.749z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
    </svg>
  );
};

SvgGiftCard.propTypes = {
  color: PropTypes.string
};
SvgGiftCard.defaultProps = {
  color: "primary"
};
export default SvgGiftCard;
