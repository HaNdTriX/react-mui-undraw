import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgThrowAway = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 909 591.27"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M306.595 589.968H39.728s-5.41-79.339 26.596-80.24 28.4 35.161 68.52-14.425 88.806-46.882 95.117-17.581-12.172 52.742 21.637 45.53 82.495 11.72 54.997 66.716z"
        fill={color}
      />
      <path
        d="M168.656 589.986l-.9-.036c2.1-52.236 13.04-85.798 21.848-104.755 9.563-20.583 18.778-28.915 18.87-28.997l.6.674c-.092.08-9.2 8.33-18.686 28.774-8.759 18.877-19.639 52.301-21.732 104.34zM265.242 590.094l-.865-.252c10.422-35.771 34.964-58.357 35.21-58.58l.606.667c-.244.222-24.603 22.647-34.95 58.165zM81.76 590.03l-.893-.124c3.536-25.501-2.85-45.287-8.832-57.394-6.476-13.109-13.865-20.268-13.938-20.34l.623-.65c.075.072 7.579 7.342 14.124 20.591 6.036 12.22 12.484 32.189 8.917 57.917z"
        fill="#f2f2f2"
      />
      <path
        d="M342.814 591.174H10.944l-.077-1.124c-.19-2.797-4.424-68.764 16.95-92.3 4.778-5.263 10.534-8.025 17.107-8.21 13.933-.396 22.689 4.823 29.75 9.012 13.311 7.896 22.105 13.113 54.076-26.403 34.635-42.808 72.005-52.017 93.488-46.896 13.88 3.31 23.446 12.662 26.246 25.662 2.652 12.309 1.807 23.874 1.129 33.168-.726 9.943-1.3 17.797 2.784 21.356 3.41 2.97 10.214 3.24 21.413.85 22.78-4.86 54.566-.701 70.52 19.912 8.584 11.09 15.345 31.25-1.183 64.307zm-329.605-2.412H341.32c12.317-24.988 12.701-46.098 1.103-61.084-14.636-18.91-45.341-23.888-68.11-19.03-12.167 2.597-19.418 2.168-23.5-1.39-4.994-4.35-4.381-12.735-3.606-23.35.667-9.14 1.498-20.515-1.08-32.486-2.597-12.054-11.508-20.738-24.449-23.823-20.797-4.962-57.123 4.132-91.053 46.067-33.282 41.136-43.307 35.19-57.18 26.96-7.15-4.24-15.267-9.049-28.452-8.675-5.893.166-11.07 2.663-15.39 7.42-19.21 21.153-16.865 80.473-16.394 89.391z"
        fill="#cfcce0"
      />
      <path
        d="M670.74 421.18l-96.549-16.788c17.258-35.794 25.144-71.159 18.406-105.855l96.549 16.787A214.51 214.51 0 00670.74 421.18z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M612.525 321.775l50.02 8.697-.405 2.326-50.02-8.697zM610.907 331.081l50.02 8.697-.405 2.326-50.02-8.697zM609.288 340.39l50.02 8.698-.404 2.326-50.02-8.697zM607.67 349.693l50.02 8.697-.404 2.326-50.02-8.697zM606.053 359l50.019 8.696-.404 2.326-50.02-8.697zM604.434 368.305l50.019 8.697-.404 2.326-50.02-8.697zM602.816 377.61l50.019 8.698-.404 2.326-50.02-8.697zM601.198 386.917l50.019 8.697-.404 2.326-50.02-8.697z"
      />
      <path
        d="M713.74 455.18l-96.549-16.788c17.258-35.794 25.144-71.159 18.406-105.855l96.549 16.787A214.51 214.51 0 00713.74 455.18z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M655.525 355.775l50.02 8.697-.405 2.326-50.02-8.697zM653.907 365.081l50.02 8.697-.405 2.326-50.02-8.697zM652.288 374.391l50.02 8.697-.404 2.327-50.02-8.698zM650.67 383.693l50.02 8.697-.404 2.326-50.02-8.697zM649.053 392.999l50.019 8.697-.404 2.326-50.02-8.697zM647.434 402.305l50.019 8.697-.404 2.326-50.02-8.697zM645.816 411.61l50.019 8.698-.404 2.326-50.02-8.697zM644.197 420.917l50.02 8.697-.404 2.326-50.02-8.697z"
      />
      <path
        d="M740.058 589.88H567.842l-.033-.965-8.223-235.176h188.727zm-170.285-2h168.353l8.117-232.14H561.656z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M730.627 577.241H577.272l-7.373-210.863H738l-7.373 210.863z"
      />
      <g opacity={0.2} fill="#fff">
        <path d="M595.824 397.31h13.099v162.097h-13.099zM647.4 397.31h13.099v162.097H647.4zM698.976 397.31h13.099v162.097h-13.099z" />
      </g>
      <path
        fill="#3f3d56"
        d="M639.371 289.769l17.5-27.68L870 396.832l-17.5 27.68z"
      />
      <path
        d="M785.105 295.183a38.46 38.46 0 00-58.62 38.07l10.195 6.446a30.344 30.344 0 1128.98 18.322l10.196 6.445a38.46 38.46 0 009.249-69.283zM0 588.5h909v2H0z"
        fill="#3f3d56"
      />
      <path
        d="M480 248.5s39 29 23 34-36-17-35-23 12-11 12-11z"
        fill="#ffb8b8"
      />
      <path fill="#575a89" d="M446 211.5l40 37-16 17-27-20 3-34z" />
      <path
        d="M535.508 363.44L453.04 310.5c29.795-26.291 50.787-55.824 58.042-90.417l82.468 52.94a214.51 214.51 0 00-58.042 90.417z"
        fill={color}
      />
      <path
        fill="#3f3d56"
        d="M520.43 249.234l42.724 27.427-1.275 1.986-42.725-27.426zM515.326 257.183l42.725 27.426-1.275 1.987-42.725-27.426zM510.224 265.132l42.725 27.427-1.276 1.986-42.724-27.426zM505.122 273.08l42.724 27.426-1.275 1.987-42.725-27.426zM500.02 281.03l42.724 27.426-1.275 1.987-42.725-27.427zM494.916 288.978l42.725 27.426-1.276 1.987-42.724-27.426zM489.814 296.926l42.724 27.426-1.275 1.987-42.725-27.426zM484.712 304.875l42.724 27.427-1.275 1.986-42.725-27.426z"
      />
      <path
        fill="#ffb8b8"
        d="M303.165 490.416l-15.178 31.932 42.459 10.16-1.183-30.783-26.098-11.309zM455 533.5l5 35 41-15-18-25-28 5z"
      />
      <path
        d="M364.192 203.906s-6.283 40.23-4.573 59.364-5.032 99.858-5.032 99.858-30.153 32.8-36.997 70.258a312.689 312.689 0 01-21.47 68.557l35.528 11.564 70.407-133.296s50.491-110.506 45.474-121.034-12.884-52.943-12.884-52.943z"
        fill="#2f2e41"
      />
      <path
        d="M297.12 514.005s-.044-18.027-6.404-10.246-27.126 22.807-14.898 33.317 83.644 67.474 87.487 50.824c2.134-9.244-33.484-71.638-33.484-71.638s-11.893.745-12.718 3.797-19.984-6.054-19.984-6.054z"
        fill="#2f2e41"
      />
      <path fill="#ffb8b8" d="M424 40.5l-27 31 27 28 25-38-25-21z" />
      <path
        d="M470 42.5a27.012 27.012 0 11-.49-5.11 27.002 27.002 0 01.49 5.11z"
        fill="#ffb8b8"
      />
      <path
        d="M425.215 22.059c9.37-4.355 20.413-3.8 30.297-.786 5.607 1.71 11.14 4.287 15.065 8.641s5.943 10.77 3.903 16.264l-8.173-6.18-.749 5.447c-5.393-8.415-15.638-12.07-25.14-15.171-2.972-.97-6.917-1.632-8.63.983-.723 1.101-.805 2.54-1.573 3.61-1.44 2.006-4.45 1.829-6.653 2.941-2.064 1.042-3.314 3.17-4.427 5.196s-.62 4.864-2.635 5.996c-8.084 4.54-3.318-12.945-2-16 2.603-6.034 4.773-8.18 10.715-10.941zM347.5 261s17 37 29 52 51 86 51 86-7 44 8 79a312.69 312.69 0 0120 69l36-10-15-150s-19-120-29-126-40-37-40-37z"
        fill="#2f2e41"
      />
      <path
        d="M431 97.5s-17-45-40-31-41 139-41 139-21 57 0 63 38 14 41 3 1-30 6-20 3 22 13 22 49-5 48-12-27-164-27-164z"
        fill="#575a89"
      />
      <path
        d="M348 274.5s-13 39 5 39 15.399-39.374 15.399-39.374z"
        fill="#ffb8b8"
      />
      <path
        d="M463 556.5s-10-15-11-5-10 34 6 36 107 10 101-6c-3.331-8.883-67.5-41.194-67.5-41.194S482 547.5 483 550.5s-20 6-20 6z"
        fill="#2f2e41"
      />
      <path
        d="M487.5 49s-4.74 4.07-10.89-3.98A39.017 39.017 0 01472.5 38a27.46 27.46 0 00-18.56-7.97q-.705-.03-1.44-.03c-13 0-16-9-16-9l-21 7s3-28 32-28 30 24 30 24 23 9 10 25z"
        fill="#575a89"
      />
      <path
        d="M476.61 45.02A39.017 39.017 0 01472.5 38a27.46 27.46 0 00-18.56-7.97c7.31-2.29 20.02-4.95 25.56 1.97 5.1 6.37.86 10.71-2.89 13.02z"
        opacity={0.2}
      />
      <path
        d="M392 74.5s-27-5-34 19-22 95-22 95l9 73-1 18h29v-19c0-2 4-80 4-80l33-75s7-24-18-31z"
        fill="#575a89"
      />
      <path
        opacity={0.2}
        d="M410.5 116l-33 65-4.049 93.126L384.5 180l26-64zM450.525 215.686l7.494 38.408-3.747-34.942-3.747-3.466zM365.5 305.5l43 61-4.5 9-38.5-70z"
      />
    </svg>
  );
};

SvgThrowAway.propTypes = {
  color: PropTypes.string
};
SvgThrowAway.defaultProps = {
  color: "primary"
};
const MemoSvgThrowAway = React.memo(SvgThrowAway);
export default MemoSvgThrowAway;
