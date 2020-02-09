import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgContainerShip = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 932.375 646.22"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="ContainerShip_svg__a"
          x1={401.199}
          y1={238.812}
          x2={401.199}
          y2={191.492}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="ContainerShip_svg__b"
          x1={548.199}
          y1={175.413}
          x2={548.199}
          y2={144.89}
          xlinkHref="#ContainerShip_svg__a"
        />
        <linearGradient
          id="ContainerShip_svg__c"
          x1={819.199}
          y1={155.413}
          x2={819.199}
          y2={124.89}
          xlinkHref="#ContainerShip_svg__a"
        />
        <linearGradient
          id="ContainerShip_svg__d"
          x1={138.375}
          y1={143.683}
          x2={138.375}
          y2={9.683}
          xlinkHref="#ContainerShip_svg__a"
        />
      </defs>
      <path
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
        d="M172.188 163.11h11v147h-11z"
      />
      <path fill="#f55f44" d="M407.42 265.808h109.268v66.199H407.42z" />
      <path fill="#4d8af0" d="M516.688 265.808h109.268v66.199H516.688z" />
      <path fill="#3ad29f" d="M625.956 265.808h109.268v66.199H625.956z" />
      <path fill="#4d8af0" d="M406.623 332.007h109.268v66.199H406.623z" />
      <path fill="#f55f44" d="M298.152 332.007H407.42v66.199H298.152z" />
      <path fill="#3ad29f" d="M516.688 332.007h109.268v66.199H516.688z" />
      <path fill="#fdd835" d="M625.956 332.007h109.268v66.199H625.956z" />
      <g opacity={0.1}>
        <path d="M426.961 265.409h14.356v66.199h-14.356zM454.876 265.409h14.356v66.199h-14.356zM482.791 265.409h14.356v66.199h-14.356z" />
      </g>
      <g opacity={0.1}>
        <path d="M536.229 265.409h14.356v66.199h-14.356zM564.144 265.409H578.5v66.199h-14.356zM592.059 265.409h14.356v66.199h-14.356z" />
      </g>
      <g opacity={0.1}>
        <path d="M645.496 265.409h14.356v66.199h-14.356zM673.412 265.409h14.356v66.199h-14.356zM701.327 265.409h14.356v66.199h-14.356z" />
      </g>
      <g opacity={0.1}>
        <path d="M426.961 331.608h14.356v66.199h-14.356zM454.876 331.608h14.356v66.199h-14.356zM482.791 331.608h14.356v66.199h-14.356z" />
      </g>
      <g opacity={0.1}>
        <path d="M317.693 331.608h14.356v66.199h-14.356zM345.608 331.608h14.356v66.199h-14.356zM373.523 331.608h14.356v66.199h-14.356z" />
      </g>
      <g opacity={0.1}>
        <path d="M536.229 331.608h14.356v66.199h-14.356zM564.144 331.608H578.5v66.199h-14.356zM592.059 331.608h14.356v66.199h-14.356z" />
      </g>
      <g opacity={0.1}>
        <path d="M645.496 331.608h14.356v66.199h-14.356zM673.412 331.608h14.356v66.199h-14.356zM701.327 331.608h14.356v66.199h-14.356z" />
      </g>
      <path
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
        d="M21.688 475.61h846v26h-846z"
      />
      <path
        d="M790.688 372.61h-498a12.035 12.035 0 01-12-12v-73.324l-194-21.676v223h716v-128a12.035 12.035 0 01-12 12z"
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
      <path fill="#fff" d="M86.688 289.61h73v42h-73z" />
      <circle
        cx={177.688}
        cy={162.61}
        r={21}
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
      <path
        d="M95.617 496.739c7.436-20.076 30.819-30.532 52.211-29.695s41.319 10.502 60.494 20.022 39.033 19.278 60.416 20.327c47.519 2.33 87.51-38.126 134.863-42.718 56.294-5.458 106.25 40.385 162.777 42.274 9.94.332 20.079-.768 29.233-4.657 7.968-3.386 14.912-8.751 22.437-13.031 37.98-21.6 85.483-13.445 127.502-1.468s85.637 27.32 128.349 18.12"
        fill="#4d8af0"
      />
      <path
        d="M0 535.46c7.436-20.076 30.819-30.532 52.211-29.695s41.319 10.502 60.495 20.022 39.032 19.278 60.415 20.327c47.519 2.33 87.51-38.126 134.863-42.718 56.294-5.458 106.251 40.385 162.777 42.273 9.94.332 20.08-.767 29.233-4.657 7.968-3.385 14.912-8.75 22.437-13.03 37.98-21.6 85.483-13.445 127.502-1.468s85.637 27.32 128.35 18.12M101.939 585.244c7.436-20.076 30.819-30.532 52.211-29.695s41.318 10.502 60.494 20.022 39.032 19.278 60.416 20.327c47.519 2.33 87.51-38.126 134.863-42.718 56.294-5.458 106.25 40.385 162.776 42.273 9.941.332 20.08-.767 29.234-4.657 7.968-3.385 14.912-8.75 22.437-13.03 37.98-21.6 85.483-13.445 127.501-1.468s85.637 27.32 128.35 18.12M154.093 634.237c7.437-20.076 30.82-30.532 52.212-29.694s41.318 10.502 60.494 20.021 39.032 19.279 60.415 20.327c47.52 2.33 87.51-38.126 134.864-42.717 56.293-5.458 106.25 40.385 162.776 42.273 9.94.332 20.08-.767 29.234-4.657 7.968-3.386 14.911-8.75 22.437-13.03 37.979-21.6 85.482-13.445 127.5-1.468s85.638 27.32 128.35 18.12"
        fill="#4d8af0"
      />
      <path
        d="M399.76 238.812l-6.894-1.22a44.53 44.53 0 01.832-5.07c1.17-14.781-9.079-30.335-23.488-34.258l1.844-6.772c13.129 3.574 23.254 14.56 27.096 27.356A48.519 48.519 0 01430.8 195.9l1.388 6.881c-15.105 3.047-27.943 15.89-31.534 30.859a35.469 35.469 0 01-.893 5.172z"
        transform="translate(-136.812 -124.89)"
        fill="url(#ContainerShip_svg__a)"
        opacity={0.5}
      />
      <path
        d="M263.157 110.486l-5.893-1.043a38.063 38.063 0 01.711-4.334c1-12.634-7.76-25.93-20.078-29.283l1.577-5.789c11.222 3.055 19.877 12.447 23.161 23.384a41.473 41.473 0 0127.054-19.615l1.186 5.882c-12.91 2.604-23.885 13.582-26.954 26.377a30.317 30.317 0 01-.764 4.421z"
        fill="#706a6a"
      />
      <path
        d="M547.271 175.413l-4.447-.787a28.726 28.726 0 01.537-3.27c.755-9.534-5.857-19.567-15.151-22.097l1.19-4.369c8.468 2.306 15 9.393 17.477 17.646a31.296 31.296 0 0120.415-14.802l.896 4.439c-9.743 1.965-18.024 10.25-20.34 19.904a22.878 22.878 0 01-.577 3.336z"
        transform="translate(-136.812 -124.89)"
        fill="url(#ContainerShip_svg__b)"
        opacity={0.5}
      />
      <path
        d="M818.271 155.413l-4.447-.787a28.726 28.726 0 01.537-3.27c.755-9.534-5.857-19.567-15.151-22.097l1.19-4.369c8.468 2.306 15 9.393 17.477 17.646a31.296 31.296 0 0120.415-14.802l.896 4.439c-9.743 1.965-18.024 10.25-20.34 19.904a22.878 22.878 0 01-.577 3.336z"
        transform="translate(-136.812 -124.89)"
        fill="url(#ContainerShip_svg__c)"
        opacity={0.5}
      />
      <path
        d="M410.784 45.179l-2.89-.512a18.664 18.664 0 01.349-2.125c.49-6.195-3.806-12.715-9.846-14.359l.773-2.839a16.856 16.856 0 0111.358 11.467 20.337 20.337 0 0113.266-9.619l.581 2.885a17.712 17.712 0 00-13.217 12.934 14.866 14.866 0 01-.374 2.168zM681.784 25.179l-2.89-.512a18.664 18.664 0 01.349-2.125c.49-6.195-3.806-12.715-9.846-14.359l.773-2.839a16.856 16.856 0 0111.358 11.467 20.337 20.337 0 0113.266-9.619l.581 2.885a17.712 17.712 0 00-13.217 12.934 14.866 14.866 0 01-.374 2.168z"
        fill="#706a6a"
      />
      <circle
        cx={138.375}
        cy={76.683}
        r={67}
        fill="url(#ContainerShip_svg__d)"
        opacity={0.5}
      />
      <circle cx={138.375} cy={76.683} r={62} fill="#fdd835" />
    </svg>
  );
};

SvgContainerShip.propTypes = {
  color: PropTypes.string
};
SvgContainerShip.defaultProps = {
  color: "primary"
};
const MemoSvgContainerShip = React.memo(SvgContainerShip);
export default MemoSvgContainerShip;
