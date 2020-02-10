import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgFittingPiece = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1046 572.19"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={923} cy={333.19} r={123} fill="#f2f2f2" />
      <circle cx={903} cy={315.19} r={123} fill={color} />
      <path fill="#3f3d56" d="M715.73 569.865h158.412v1.875H715.73z" />
      <path
        d="M642 419.19c0-84.365 68.636-153 153-153s153 68.635 153 153-68.636 153-153 153-153-68.636-153-153zm2 0c0 83.261 67.738 151 151 151s151-67.739 151-151-67.738-151-151-151-151 67.738-151 151z"
        fill="#3f3d56"
      />
      <path
        d="M674 145L1 45 .5 570.5h874zM180 340c-.338 0-.667-.033-1-.05V380H71V272h42a19 19 0 0138 0h28v30.05c.333-.017.662-.05 1-.05a19 19 0 010 38zm413.5-29.5a155.365 155.365 0 01-14.16 65.02q-1.515 3.315-3.19 6.54a155.101 155.101 0 01-15.77 24.56q-4.62 5.895-9.77 11.31-3.78 3.99-7.84 7.7a155.408 155.408 0 01-85.33 39.61 158.02 158.02 0 01-19.94 1.26 155.995 155.995 0 01-13.15-311.45l1.07-.09c2.72-.21 5.47-.35 8.23-.41 1.28-.03 2.56-.05 3.85-.05a156.335 156.335 0 0126.04 2.17c1.19.19 2.37.41 3.55.63.73.14 1.45.29 2.17.44A156.03 156.03 0 01593.5 310.49zM651.261 58.046h179.127v2.013H651.261zM651.261 72.135h179.127v2.013H651.261zM651.261 86.224h179.127v2.013H651.261z"
        fill="#3f3d56"
      />
      <path d="M876 572H0V0h876zM2 570h872V2H2z" fill="#3f3d56" />
      <path
        d="M435.254 56.153c-30.181 8.176-47.292 41.956-38.219 75.45l11.528 42.556 13.088-3.545 3.306-17.82 2.377 16.28 84.125-22.789 3.006-16.2 2.16 14.8 9.472-2.565-9.052-33.414c-10.44-38.543-47.06-62.162-81.79-52.753z"
        fill="#2f2e41"
      />
      <path fill="#ffb8b8" d="M545.441 412.19l-10 54 33-5 1.5-56.5-24.5 7.5z" />
      <circle cx={446.441} cy={116.19} r={36} fill="#ffb8b8" />
      <path
        fill="#ffb8b8"
        d="M434.941 142.69l-2 20-16 9 42 93 32-77-21-16-2-38-33 9z"
      />
      <path
        d="M632.44 366.19c-1.26 20.8-36.69 37.23-62.71 46.53a337.044 337.044 0 01-25.89 8.11c-.91.24-1.4.36-1.4.36v-22l-85 7v60.05a158.02 158.02 0 01-19.94 1.26 155.302 155.302 0 01-75.17-19.27q-.855-11.265-1.89-23.04c-.74-8.46-1.06-16.5-1.03-24.12.24-59.59 21.97-93.62 30.58-104.76a50.248 50.248 0 013.45-4.12l5-13-3.62-23.08-12.22-77.92-.16-1c4.2-3.68 15.33-6.03 24.93-7.42 6.44-.94 12.2-1.45 14.74-1.66.8-.06 1.28-.09 1.37-.1h.01l40.95 74.18 14.1-63.95 38.9 17.95s-6 25-6 46a33.056 33.056 0 01-1.08 8.32 48.102 48.102 0 01-8.31 16.61 66.798 66.798 0 01-11.61 12.07l-8 22 8 30 55.07-16.42 19.43-5.79a38.194 38.194 0 014.99-1.13 38.938 38.938 0 0139.87 19.02zM538.44 457.19s28.615 2.807 34.308-10.097l28.693 23.097s51.965 13.916 23 26c-27 11.263-54-.762-54 2 0 0-8-7-17-2s-36 0-35-8 5-37 20-31zM455.315 68.65c-7.4-5.578-16.705-7.86-25.74-5.414l-1.072.291c-20.687 5.604-32.385 28.865-26.13 51.956l6.931-1.878-1.189-8.823 3.95 8.076 41.11-11.137 1.491-8.141 1.092 7.441 8.088-2.19q13.276 26.58-1.036 60.633l13.776-3.732 2.983-16.283 2.184 14.883 26.262-7.114-3.817-34.559c-6.727-24.833-26.86-41.983-48.883-44.009z"
        fill="#2f2e41"
      />
      <circle cx={463.941} cy={46.69} r={18} fill="#2f2e41" />
      <path
        d="M462.94 56.69a17.99 17.99 0 01-6.333-34.832 17.99 17.99 0 108.667 34.664 18.071 18.071 0 01-2.333.168z"
        fill="#2f2e41"
      />
      <ellipse cx={469.441} cy={116.19} rx={4.5} ry={6.5} fill="#ffb8b8" />
      <path
        d="M371.44 237.19l-3 40s-14 22-17 69l-1 29s-21 41-4 40 16-39 16-39l30-87v-42z"
        fill="#ffb8b8"
      />
      <path
        d="M389.44 178.19h-7s-11 7-20 37-10 31-10 31l47 11z"
        fill="#2f2e41"
      />
      <circle cx={616.166} cy={183.067} r={9.114} fill="#d0cde1" />
      <circle cx={669.369} cy={352.735} r={4.051} fill="#d0cde1" />
      <circle cx={612.369} cy={541.735} r={4.051} fill="#d0cde1" />
      <circle cx={70.369} cy={529.735} r={4.051} fill="#d0cde1" />
      <circle cx={261.369} cy={183.735} r={4.051} fill="#d0cde1" />
      <path
        fill="#d0cde1"
        d="M671.621 256.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM740.621 446.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM510.621 530.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM378.621 138.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM20.621 217.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM59.621 146.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM342.621 533.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM190.621 115.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM23.621 348.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM176.621 235.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM179.621 525.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM270.621 460.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013zM771.621 538.446h-2.025v-2.025h-1.013v2.025h-2.025v1.013h2.025v2.025h1.013v-2.025h2.025v-1.013z"
      />
      <circle cx={27} cy={21} r={10} fill={color} />
      <circle cx={57} cy={21} r={10} fill={color} />
      <circle cx={87} cy={21} r={10} fill={color} />
      <path fill="#d0cde1" d="M480.261 498.224h179.127v2.013H480.261z" />
      <path fill={color} d="M472 360h108v108H472z" />
      <path d="M493 444v-84h-2v86h89v-2z" fill="#d0cde1" />
      <path
        d="M535.44 234.19l16 39s17 20 20 42l5 26s12 46-7 44-14-46-14-46l-3-13-17-28-25.084-47.68z"
        fill="#ffb8b8"
      />
      <path fill="#2f2e41" d="M504.441 192.19l13 4 28 42-51 34 10-80z" />
      <circle cx={532} cy={403} r={25} fill="#d0cde1" />
      <circle cx={526} cy={357} r={19} fill={color} />
      <circle cx={580} cy={410} r={19} fill={color} />
    </svg>
  );
};

SvgFittingPiece.propTypes = {
  color: PropTypes.string
};
SvgFittingPiece.defaultProps = {
  color: "primary"
};
const MemoSvgFittingPiece = React.memo(SvgFittingPiece);
export default MemoSvgFittingPiece;
