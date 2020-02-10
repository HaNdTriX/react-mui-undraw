import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgBooked = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 955.457 755.522"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M913.295 315.69c-41.627-163.686-185.46-281.844-354.29-286.584-89.255-2.505-183.177 27.097-251.559 130.685-122.24 185.175 7.512 313.137 97.972 373.941a566.027 566.027 0 01116.995 105.156c61.103 72.507 178.65 162.608 318.643 21.434 101.467-102.324 99.967-235.6 72.24-344.632z"
        fill="#f2f2f2"
      />
      <path
        d="M389.305 755.178q43.852-11.421 84.325-19.424l-10.368-34.662c3.607-2.003 19.222 18.055 19.222 18.055l-13.162-100.251c18.028 4.02 26.38 106.274 26.38 106.274l20.455-34.07-10.082 38.581c82.565-14.418 153.806-18.89 213.689-17.818l-8.874-29.667c3.607-2.003 19.222 18.055 19.222 18.055L716.95 600c18.028 4.02 26.38 106.274 26.38 106.274l20.455-34.07-10.679 40.864c50.187 2.755 91.079 9.351 122.624 16.546-8.845-46.109-39.804-90.447-39.804-90.447 23.818 12.377 36.2 32.526 42.604 51.2.966-56.676-1.544-161.847-25.637-278.742 0 0 47.971 180.467 40.686 300.755l-.928 21.367c41.823 10.91 62.806 21.775 62.806 21.775z"
        fill="#3f3d56"
      />
      <path
        d="M570.539 727.341c-.204-.332-5-8.342-6.664-24.974-1.525-15.26-.544-40.98 12.795-76.86 25.27-67.969-5.824-122.81-6.142-123.357l1.534-.89c.081.139 8.105 14.121 12.844 36.386a158.74 158.74 0 01-6.574 88.48c-25.227 67.853-6.472 99.975-6.28 100.292z"
        fill="#3f3d56"
      />
      <circle cx={560.657} cy={486.634} r={11.525} fill={color} />
      <circle cx={597.004} cy={529.187} r={11.525} fill="#3f3d56" />
      <circle cx={572.182} cy={557.555} r={11.525} fill={color} />
      <circle cx={602.323} cy={581.491} r={11.525} fill={color} />
      <circle cx={563.317} cy={618.725} r={11.525} fill="#3f3d56" />
      <path
        d="M577.501 727.765s-11.525-28.368 23.05-49.644zM563.327 727.25s-5.245-30.166-45.84-29.908z"
        fill="#3f3d56"
      />
      <path
        d="M739.812 249.37c-22.022 0-39.874 19.811-39.874 44.25v31.05h9.55l5.529-11.504-1.382 11.505h61.38l5.027-10.459-1.257 10.459h6.911v-24.38c0-28.123-20.543-50.921-45.884-50.921z"
        fill="#2f2e41"
      />
      <path
        d="M702.36 392.926l-6.623 25.387 61.813-2.207-1.104-20.972s-46.36-12.142-54.086-2.208zM642.755 494.475l19.868 44.152 18.765-23.18-15.453-30.906-23.18 9.934zM692.426 656.733l2.207 50.774h24.284l-3.312-50.774h-23.179z"
        fill="#a0616a"
      />
      <path
        d="M663.727 448.116l11.038 36.425 16.557 176.607s15.453 4.415 26.49-1.104l2.208-24.283 4.416-139.078s20.972-11.038 18.764-26.491-7.726-36.426-7.726-36.426zM697.945 695.365h-6.623s-18.765 19.869-25.387 22.076-40.84 20.972-13.246 24.284 45.256-11.038 45.256-11.038 8.83 5.519 20.972 1.104 5.519-17.661 5.519-17.661-6.164-20.188-6.393-20.028-6.853 10.094-20.098 1.263z"
        fill="#2f2e41"
      />
      <circle cx={732.162} cy={292.481} r={25.387} fill="#a0616a" />
      <path
        d="M769.691 325.595l-11.678 9.735-1.567 1.303-1.104 13.245h-43.048s5.872-5.088 11.325-10.354c.11-.12.232-.253.364-.375.74-.717 1.402-1.38 1.998-1.976.32-.33.63-.64.905-.927.453-.474.894-.927 1.336-1.38a.038.038 0 00.01-.022 43.08 43.08 0 003.18-3.73l.01-.011a12.816 12.816 0 00.74-1.093c3.311-5.52-4.415-16.557-4.415-16.557l24.283-12.142c.85 11.965 10.972 19.957 15.498 22.96 1.324.871 2.163 1.324 2.163 1.324z"
        fill="#a0616a"
      />
      <path
        d="M829.296 511.032c-16.557 4.415-17.66-28.699-17.66-28.699l-22.598-45.195a104.516 104.516 0 01-9.736-30.32l-5.196-32.656-1.578 1.887v.011l-2.837 1.413-17.241-27.595-4.835-7.727v-8.83l16.557-7.726h6.623s.144-.023.397-.045c3.047-.32 22.871-1.644 23.886 17.705.4 7.594.366 13.886.159 18.823a145.762 145.762 0 003.85 40.631c1.168 4.794 2.443 8.958 3.718 11.189 4.415 7.727 19.868 68.435 19.868 68.435s23.18 24.284 6.623 28.699zM727.747 337.736l-4.183 7.628-2.473 4.514-12.108 22.076s-3.433 2.804-8.996 6.424c-9.25 6.016-24.416 14.272-39.571 15.652-24.284 2.207-1.104-76.162-1.104-76.162s7.726-30.906 18.764-27.595 2.208 14.35-5.519 35.322-1.103 44.151-1.103 44.151 23.18-14.349 35.321-25.387c6.325-5.75 11.755-7.307 15.497-7.473h.011a14.055 14.055 0 013.698.287 8.351 8.351 0 011.766.563z"
        fill="#a0616a"
      />
      <path
        d="M731.412 331.114c-.044.121-.563 1.103-4.526 5.132a53.27 53.27 0 004.526-5.132z"
        fill="#d0cde1"
      />
      <path
        d="M773.554 374.713l-1.026 1.347-16.082 27.904s-20.972-7.727-36.425-9.934a21.647 21.647 0 00-22.065 9.9l4.404-17.627-2.373-7.925c-.276-.927-.596-1.954-.939-3.113-3.31-11.038 8.83-23.18 8.83-23.18l14.394-15.199h.011a14.055 14.055 0 013.698.287c-.596.596-1.258 1.259-1.998 1.976a5.747 5.747 0 00-.364.375c-4.228 4.316-2.031 5.52-.055 5.84a9.72 9.72 0 001.975.099c4.603.662 14.68-3.378 22.076-6.755a201.828 201.828 0 008.83-4.283l9.637-8.83 1.446-1.325a32.173 32.173 0 002.163 1.325h1.104s.144-.022.397-.045l-5.026 3.73a18.685 18.685 0 00-7.513 16.183z"
        fill="#d0cde1"
      />
      <path
        d="M713.398 406.172l-16.137 6.301s-87.62-33.896-100.865-6.301 46.359 93.822 46.359 93.822l26.491-12.142-11.038-33.114s64.02 54.086 90.511 24.284 8.83-71.942 8.83-71.942-16.556-13.05-44.151-.908zM667.038 526.485l-9.934 7.727s8.83 35.32 5.52 40.84-9.935 20.972 2.207 19.868 25.387-19.868 26.49-26.49 8.831-26.492 8.831-26.492 13.246-30.906 3.312-32.01-25.757-1.842-25.757-1.842zM751.147 261.56a20.912 20.912 0 00-16.5-8.42h-.782c-15.094 0-27.33 13.657-27.33 30.505h5.058l.816-6.217 1.198 6.217h29.996l2.513-5.26-.629 5.26h5.901q4.13 20.513-11.87 41.026h10.053l5.026-10.52-1.256 10.52h19.162l3.77-24.195c0-18.12-10.529-33.484-25.126-38.917z"
        fill="#2f2e41"
      />
      <path
        d="M570.164 47.217V0H553.5v47.217H308.154V0H291.49v47.217H189.648v257.381h482.358V47.218zm-270.342 60.18a25.923 25.923 0 01-8.333-50.47v37.508h16.665V56.926a25.923 25.923 0 01-8.332 50.47zm262.01 0a25.923 25.923 0 01-8.333-50.47v37.508h16.665V56.926a25.923 25.923 0 01-8.332 50.47z"
        fill="#3f3d56"
      />
      <path
        fill="#d0cde1"
        d="M212.794 133.782h83.325v62.956h-83.325zM330.374 133.782h83.325v62.956h-83.325zM447.955 133.782h83.325v62.956h-83.325zM565.535 133.782h83.325v62.956h-83.325zM212.794 215.256h83.325v62.956h-83.325zM330.374 215.256h83.325v62.956h-83.325zM447.955 215.256h83.325v62.956h-83.325zM565.535 215.256h83.325v62.956h-83.325z"
      />
      <path
        fill={color}
        d="M489.24 179.428l-26.044-35.966 7.095-5.136 19.935 27.531 76.287-78.376 6.276 6.109-83.549 85.838zM369.808 266.456l-26.044-35.966 7.094-5.136 19.936 27.531 76.287-78.376 6.275 6.109-83.548 85.838z"
      />
      <path
        fill="#f2f2f2"
        d="M133.157 273.11l-19.078-7.529L95 258.053l16.059-12.758 16.059-12.759 3.02 20.287 3.019 20.287zM251.157 639.11l-19.078-7.529L213 624.053l16.059-12.758 16.059-12.759 3.02 20.287 3.019 20.287zM38.157 384.11l-19.078-7.529L0 369.053l16.059-12.758 16.059-12.759 3.02 20.287 3.019 20.287zM141.102 454.866l-18.019 9.797-18.018 9.798.524-20.503.524-20.504 17.495 10.706 17.494 10.706zM348.102 558.866l-18.019 9.797-18.018 9.798.524-20.503.524-20.504 17.495 10.706 17.494 10.706z"
      />
    </svg>
  );
};

SvgBooked.propTypes = {
  color: PropTypes.string
};
SvgBooked.defaultProps = {
  color: "primary"
};
const MemoSvgBooked = React.memo(SvgBooked);
export default MemoSvgBooked;
