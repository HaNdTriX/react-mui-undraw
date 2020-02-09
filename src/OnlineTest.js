import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlineTest = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 941.404 435.42"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M84.494 414.524l-1.268-.475c-.278-.105-27.992-10.724-40.975-34.8-12.983-24.077-6.625-53.066-6.56-53.356l.3-1.32 1.266.475c.279.105 27.992 10.723 40.975 34.8 12.983 24.077 6.626 53.066 6.56 53.355zM44.33 378.128c10.976 20.357 32.877 30.792 38.426 33.174 1.055-5.947 4.364-29.997-6.603-50.334-10.965-20.335-32.874-30.786-38.425-33.174-1.056 5.951-4.364 29.999 6.602 50.334z"
        fill="#3f3d56"
      />
      <path
        d="M52.173 370.804C75.504 384.84 84.49 412.72 84.49 412.72s-28.842 5.123-52.173-8.914S0 361.89 0 361.89s28.842-5.123 52.173 8.914z"
        fill="#d0cde1"
      />
      <path
        d="M798.85 5.362H538.68V0H420.71v5.362H159.468a17.599 17.599 0 00-17.599 17.599v356.252a17.599 17.599 0 0017.599 17.599H798.85a17.599 17.599 0 0017.598-17.599V22.961a17.599 17.599 0 00-17.598-17.599z"
        fill="#3f3d56"
      />
      <path fill={color} d="M165.464 36.464h627.391v353.913H165.464z" />
      <circle cx={478.623} cy={20.377} r={6.435} fill={color} />
      <path
        d="M756.838 81.507h-29.74v-29.74h29.74zm-28.447-1.293h27.154V53.06H728.39zM834.065 383.942h-61.23v-4.412a.875.875 0 00-.874-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874H643.38a.875.875 0 00-.874.874v4.412h-13.121v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.874.874v4.412h-13.12v-4.412a.875.875 0 00-.876-.874h-20.993a.875.875 0 00-.874.874v4.412h-13.12v-4.412a.875.875 0 00-.876-.874H392.34a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.874.874v4.412h-13.121v-4.412a.875.875 0 00-.875-.874H284.75a.875.875 0 00-.874.874v4.412h-13.12v-4.412a.875.875 0 00-.876-.874h-20.993a.875.875 0 00-.874.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-13.12v-4.412a.875.875 0 00-.875-.874h-20.993a.875.875 0 00-.875.874v4.412h-40.236a20.993 20.993 0 00-20.993 20.993v9.492a20.993 20.993 0 0020.993 20.993h698.014a20.993 20.993 0 0020.993-20.993v-9.492a20.993 20.993 0 00-20.993-20.993z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M28.711 413.883h912.693v2.785H28.711zM754.072 233.67h-202v-115h202zm-200-2h198v-111h-198zM384.072 256.67h-180v-112h180zm-178-2h176v-108h-176z"
      />
      <path
        d="M288.166 213.67l-.173-2.236c-.515-4.643 1.033-9.717 5.332-14.877 3.87-4.558 6.02-7.912 6.02-11.782 0-4.386-2.751-7.31-8.17-7.395a15.28 15.28 0 00-8.685 2.666l-2.064-5.418c2.838-2.065 7.74-3.44 12.297-3.44 9.89 0 14.362 6.106 14.362 12.64 0 5.85-3.268 10.063-7.396 14.965-3.783 4.471-5.16 8.256-4.902 12.641l.086 2.237zm-1.892 12.04a5.084 5.084 0 015.16-5.417c3.01 0 5.074 2.235 5.074 5.418a5.121 5.121 0 11-10.234 0zM647.166 188.67l-.173-2.236c-.515-4.643 1.033-9.717 5.332-14.877 3.87-4.558 6.02-7.912 6.02-11.782 0-4.386-2.751-7.31-8.17-7.395a15.28 15.28 0 00-8.685 2.666l-2.064-5.418c2.838-2.065 7.74-3.44 12.297-3.44 9.89 0 14.362 6.106 14.362 12.64 0 5.85-3.268 10.063-7.396 14.965-3.783 4.471-5.16 8.256-4.902 12.641l.086 2.237zm-1.892 12.04a5.084 5.084 0 015.16-5.417c3.01 0 5.074 2.235 5.074 5.418a5.121 5.121 0 11-10.234 0z"
        fill="#d0cde1"
      />
      <circle cx={482.693} cy={260.849} r={86.292} fill="#2f2e41" />
      <path
        fill="#2f2e41"
        d="M449.365 379.018l-25.797-4.67 8.367-53.864 25.796 4.67-8.366 53.864zM483.527 329.824l25.796 4.67-8.367 46.217-25.796-4.67z"
      />
      <ellipse
        cx={626.082}
        cy={611.196}
        rx={8.192}
        ry={21.846}
        transform="rotate(-78.587 419.5 574.055)"
        fill="#2f2e41"
      />
      <ellipse
        cx={572.111}
        cy={611.257}
        rx={8.192}
        ry={21.846}
        transform="rotate(-82.454 374.916 568.89)"
        fill="#2f2e41"
      />
      <circle cx={488.734} cy={239.741} r={29.492} fill="#fff" />
      <circle cx={500.856} cy={229.17} r={9.831} fill="#3f3d56" />
      <path
        d="M414.62 166.972c-1.297-31.947 26.236-59.006 61.498-60.438s64.9 23.304 66.197 55.251-23.214 39.205-58.475 40.638-67.922-3.504-69.22-35.451z"
        fill="#fff"
      />
      <ellipse
        cx={691.67}
        cy={477.418}
        rx={43.146}
        ry={13.545}
        transform="rotate(-12.91 -399.53 932.675)"
        fill="#2f2e41"
      />
      <ellipse
        cx={522.282}
        cy={505.587}
        rx={43.146}
        ry={13.545}
        transform="rotate(-12.91 -568.918 960.844)"
        fill="#2f2e41"
      />
      <path
        d="M458.993 294.855a19.662 19.662 0 0038.694 7.005c1.934-10.685-6.327-14.466-17.012-16.4s-19.748-1.29-21.682 9.395z"
        fill="#fff"
      />
      <path fill="#d0cde1" d="M154.535 13.122h141.887v134.967H154.535z" />
      <path fill="#fff" d="M170.658 29.246h109.64v83.842h-109.64z" />
      <path
        fill="#f2f2f2"
        d="M170.55 122.979h59.637v3.139H170.55zM170.55 132.396h59.637v3.139H170.55z"
      />
      <circle cx={190.167} cy={71.19} r={12.555} fill="#3f3d56" />
      <circle cx={225.478} cy={71.19} r={12.555} fill={color} />
      <circle cx={260.789} cy={71.19} r={12.555} fill="#e6e6e6" />
      <circle cx={225.478} cy={20.969} r={6.278} fill="#3f3d56" />
      <path fill="#d0cde1" d="M222.022 274.459h141.887v134.967H222.022z" />
      <path fill="#fff" d="M238.146 290.582h109.64v83.842h-109.64z" />
      <path fill={color} d="M262.272 304.361h38.437v38.437h-38.437z" />
      <path
        d="M276.986 313.973v46.673h46.674v-46.673zm44.65 44.649H279.01v-42.625h42.625z"
        fill="#3f3d56"
      />
      <path fill="#f2f2f2" d="M238.037 382.747h59.637v3.139h-59.637z" />
      <circle cx={292.966} cy={282.306} r={6.278} fill="#3f3d56" />
      <path fill="#d0cde1" d="M591.437 234.053h141.887V369.02H591.437z" />
      <path fill="#fff" d="M607.56 250.176H717.2v83.842H607.56z" />
      <path
        fill="#3f3d56"
        d="M650.587 315.812h23.587v6.99h-23.587zM622.072 261.393h80.617v2.996h-80.617zM622.072 270.879h80.617v2.996h-80.617zM622.072 280.365h80.617v2.996h-80.617zM622.072 289.851h80.617v2.996h-80.617zM622.072 299.337h80.617v2.996h-80.617z"
      />
      <path
        fill="#f2f2f2"
        d="M607.451 342.341h59.637v3.139h-59.637zM607.451 350.187h83.178v3.139h-83.178z"
      />
      <circle cx={662.38} cy={241.9} r={6.278} fill="#3f3d56" />
    </svg>
  );
};

SvgOnlineTest.propTypes = {
  color: PropTypes.string
};
SvgOnlineTest.defaultProps = {
  color: "primary"
};
const MemoSvgOnlineTest = React.memo(SvgOnlineTest);
export default MemoSvgOnlineTest;
