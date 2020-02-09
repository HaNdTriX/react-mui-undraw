import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgOnlineArt = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 989.077 690.29"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M763 5.835v538.253a379.61 379.61 0 00-139.35-160.743c-.645-.419-1.297-.838-1.949-1.241a376.119 376.119 0 00-202.556-58.805H18.63V5.835z"
        fill="#3f3d56"
      />
      <path
        d="M744.371 594.967V565.82c-59.665-130.281-191.187-220.788-343.854-220.788H0v249.935z"
        fill={color}
      />
      <path
        d="M85.993 65.795h-22.1V43.694h22.1zM67.44 62.249h15.008V47.24H67.44zM542.172 531.32H38.422v-97.025h503.75zm-502.198-1.553H540.62v-93.92H39.974z"
        fill="#f2f2f2"
      />
      <path opacity={0.1} d="M54.722 472.717h40.362v40.362H54.722z" />
      <path
        fill="#f2f2f2"
        d="M171.927 452.535h331.435v10.091H171.927zM171.927 478.15h331.435v10.091H171.927zM171.927 503.764h331.435v10.091H171.927zM116.041 513.855H53.946v-62.096h62.095zm-60.543-1.552h58.99v-58.991h-58.99zM608.925 516.184a33.376 33.376 0 1133.377-33.377 33.415 33.415 0 01-33.377 33.377zm0-65.2a31.824 31.824 0 1031.824 31.823 31.86 31.86 0 00-31.824-31.824z"
      />
      <path
        fill="#f2f2f2"
        d="M630.431 463.951l-1.097-1.098-20.409 20.409-20.408-20.409-1.098 1.098 20.409 20.408-17.692 17.692 1.097 1.098 17.692-17.692 17.692 17.692 1.098-1.098-17.692-17.692 20.408-20.408z"
      />
      <path
        d="M600.302 19.853L128.879 99.615l37.848 223.684h1.568l-37.63-222.419 468.364-79.234 59.914 354.155-37.242 6.303c.652.403 1.304.822 1.949 1.241l37.086-6.271z"
        fill="none"
        stroke="#f2f2f2"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M387.321 229.486c15.596 46.937 10.119 91.008 10.119 91.008s-30.763-32.03-46.36-78.966-10.118-91.008-10.118-91.008 30.763 32.029 46.36 78.966z"
        fill={color}
      />
      <path
        d="M407.559 229.486c-15.596 46.937-10.119 91.008-10.119 91.008s30.763-32.03 46.36-78.966 10.118-91.008 10.118-91.008-30.763 32.029-46.36 78.966z"
        fill={color}
      />
      <path
        d="M413.84 229.993c1.046 49.45-17.197 89.94-17.197 89.94S376.705 280.25 375.66 230.8s17.197-89.94 17.197-89.94 19.938 39.683 20.983 89.132z"
        fill="#f2f2f2"
      />
      <circle cx={394.75} cy={186.291} r={4.841} fill={color} />
      <circle cx={385.337} cy={225.018} r={2.689} fill={color} />
      <circle cx={352.527} cy={198.394} r={2.689} fill="#3f3d56" />
      <circle cx={447.461} cy={172.307} r={2.689} fill="#3f3d56" />
      <circle cx={366.512} cy={223.674} r={2.689} fill="#3f3d56" />
      <circle cx={422.988} cy={208.075} r={2.689} fill="#3f3d56" />
      <circle cx={368.125} cy={263.207} r={2.689} fill="#3f3d56" />
      <circle cx={425.678} cy={247.878} r={2.689} fill="#3f3d56" />
      <circle cx={399.591} cy={250.567} r={2.689} fill={color} />
      <path
        d="M967.5 601.401s3 30 8 40c0 0-30 7-31 1s1-29 1-29zM817.5 616.401s3 30 8 40c0 0-30 7-31 1s2-38 2-38zM947.5 197.401s21 70 8 83-44 57-44 57l-10-17s35-49 31-60-14-41-14-41 17-26 29-22z"
        fill="#a0616a"
      />
      <circle cx={849.5} cy={72.401} r={40} fill="#a0616a" />
      <path
        d="M885.5 77.401s16 43 25 47 25 23 25 23 2 50-9 50-72-71-72-71 3-14-3-22 34-27 34-27z"
        fill="#a0616a"
      />
      <path
        d="M900.5 274.401v12s18 31 19 87l9 100s47 76 40 120l1 17-24 8-8-14s-8-1-15-23l-43-97-26-79-16 103s7 95-11 98v15l-33 1v-14s-11 4-10-13 0-91 0-91l-6-127s-13.288-59.492-6.144-71.246L810.5 240.4zM969.5 639.401s10-4 12 1 16 32 0 34-26 0-26 0-13-2-18-1-25-2-23-17 15-13 15-13 13-8 13-11 5 5 5 5 4 7 22 2zM819.5 654.401s10-4 12 1 16 32 0 34-26 0-26 0-13-2-18-1-25-2-23-17 15-13 15-13 13-8 13-11 5 5 5 5 4 7 22 2z"
        fill="#2f2e41"
      />
      <path
        d="M915.5 178.401s34-7.77 0-50.885c0 0 27 7.885 30 28.885s4 47 4 47-17-5-26 18-22 35-18 59l-100-37s14-29 7-42 2-37 2-37 27-65 52-39 23 47 49 53z"
        fill="#d0cde1"
      />
      <path
        d="M856.5 174.401s-4 66-15 78-55 62-55 62l-2 12-10 7s-10-24 1-34l38-68 9-64z"
        fill="#a0616a"
      />
      <path
        d="M825.5 122.401s23.316-13.474 29.658-1.237S858.5 182.4 858.5 182.4l-42-5s3-54 9-55z"
        fill="#d0cde1"
      />
      <path
        d="M803.64 69.981c-7.39-8.86-1.24-8.87-1.24-8.87.51 3.18 3.79 7.13 7.11 10.42a83.943 83.943 0 007.46 6.5l-.7-2.43 6.51 4.28c2.15 19.63 13.24 16.87 13.24 16.87-9.14-5.73-6.61-15.26-5.34-20.03 1.26-4.77 9.82-3.76 10.32 10.18s9.96 17.42 9.96 17.42l1.82 7.94 1.59 6.92 4.33-7.84 2.03-3.68c13.6 1.36 15.19-11.42 15.19-11.42a69.983 69.983 0 008.86-4.99c21.25-14.26 14.11-30.64 8.99-38.16a32.044 32.044 0 00-3.33-4.18c.3.06.6.12.89.17 40.77 7.63 20.1-15.91 20.1-15.91l10.23 4.97 19.18 2.39-15.49-14.01c11.1-.6 22.23 16.71 22.57 17.24-6.89-20.89-20.37-18.76-20.37-18.76l4.07-1.17-7.1-3.24 8.25 1.14s-2.33-1.97-5.94-5.33c-3.61-3.36-20.69-4.59-20.69-4.59 17.41-6.78 34.53 6.77 34.53 6.77-9.41-21.33-32.54-13.76-44-8.33l-5.6.65c.12-.41.27-2.09.18-8-.14-9.4-11.26 6.98-11.81 7.79 0-.12-.58-.76-8.16-3.78-8.84-3.53-5.07 15.86-4.96 16.38v.01s.09.13-.65.03c-1.39-.18-5.7-1.18-18.94-5.38-11.44-3.63-18.53.12-22.55 4.09a57.558 57.558 0 01-18.46 12.56c-2.23.92-4.23 1.68-5.53 2.06-4.87 1.4-7.42 4.78-12.16 15.83-4.66 10.9 15.06 17.32 15.61 17.49z"
        fill="#2f2e41"
      />
      <path
        d="M865.67 23.331c4.69 6.68 18.25 25.15 28.1 29.76a32.045 32.045 0 00-3.33-4.18c.3.06.6.12.89.17l-25.01-25.77v-.02z"
        fill="#d0cde1"
      />
    </svg>
  );
};

SvgOnlineArt.propTypes = {
  color: PropTypes.string
};
SvgOnlineArt.defaultProps = {
  color: "primary"
};
const MemoSvgOnlineArt = React.memo(SvgOnlineArt);
export default MemoSvgOnlineArt;
