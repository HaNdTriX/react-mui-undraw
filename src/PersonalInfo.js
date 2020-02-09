import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPersonalInfo = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1061.98 562.1"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill={color}
        d="M1061.98 100.16v118.31l-2-2.98L916.49 2l-1.35-2h79.52L996 2l63.98 95.18 2 2.98z"
      />
      <path
        d="M560.14 0a558.423 558.423 0 00-396.08 164.06q-13.365 13.365-25.7 27.47a556.125 556.125 0 00-46.51 61.05q-6.09 9.255-11.8 18.75a560.141 560.141 0 00-36.03 70.78q-1.695 3.99-3.31 8.01-8.985 22.155-15.99 44.89a554.274 554.274 0 00-22.9 119.48Q.005 537.155 0 560.14v1h1061.98V0zm499.84 559.14H2q.03-20.4 1.52-40.43a554.155 554.155 0 0122.46-120.58q6.99-23.01 15.88-45.15a555.155 555.155 0 0139.25-79.02q5.685-9.525 11.79-18.8a558.676 558.676 0 0146.42-61.28C241.72 76.38 392.41 2 560.14 2h499.84z"
        fill="#3f3d56"
      />
      <path
        d="M495.593 480.863c13.487 40.59 8.75 78.702 8.75 78.702s-26.603-27.698-40.09-68.288-8.75-78.701-8.75-78.701 26.603 27.697 40.09 68.287z"
        fill={color}
      />
      <path
        d="M513.093 480.863c-13.487 40.59-8.75 78.702-8.75 78.702s26.603-27.698 40.09-68.288 8.75-78.701 8.75-78.701-26.603 27.697-40.09 68.287z"
        fill={color}
      />
      <path
        d="M518.525 481.302c.904 42.763-14.871 77.777-14.871 77.777S486.412 524.763 485.508 482s14.872-77.777 14.872-77.777 17.241 34.317 18.145 77.08z"
        fill="#3f3d56"
      />
      <ellipse
        cx={503.645}
        cy={559.562}
        rx={38.141}
        ry={2.093}
        fill="#3f3d56"
      />
      <circle cx={140.01} cy={538.572} r={21.641} fill="#f2f2f2" />
      <path
        d="M143.98 503.56a29.3 29.3 0 00-29.26 29.27c0 .16 0 .32.01.48a29.33 29.33 0 0016.44 25.83 28.33 28.33 0 005.37 2 29.348 29.348 0 0014.89 0 28.33 28.33 0 005.37-2 29.268 29.268 0 00-12.82-55.58zm7.16 55.58a26.84 26.84 0 01-7.16.96c-.48 0-.96-.01-1.43-.04h-.01a26.283 26.283 0 01-5.71-.92 27.359 27.359 0 01-17.85-15.45v-.01a27.26 27.26 0 1132.16 15.46z"
        fill="#3f3d56"
      />
      <path
        fill="#f2f2f2"
        d="M227.99 391.524h162v28.766h-162zM732.99 122.524h162v28.766h-162zM732.99 185.524h162v28.766h-162zM732.99 246.524h162v28.766h-162zM732.99 307.524h162v28.766h-162zM732.99 370.524h162v28.766h-162zM732.99 433.524h162v28.766h-162z"
      />
      <path
        d="M226.99 381.29v40h216v-40zm214 38h-212v-36h212z"
        fill="#3f3d56"
      />
      <circle cx={586.99} cy={156.29} r={10} fill="#3f3d56" />
      <circle cx={586.99} cy={218.29} r={10} fill="#3f3d56" />
      <circle cx={586.99} cy={280.29} r={10} fill="#3f3d56" />
      <circle cx={586.99} cy={342.29} r={10} fill="#3f3d56" />
      <circle cx={586.99} cy={404.29} r={10} fill="#3f3d56" />
      <circle cx={586.99} cy={466.29} r={10} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        d="M676.99 155.29h274v2h-274zM676.99 217.29h274v2h-274zM676.99 279.29h274v2h-274zM676.99 341.29h274v2h-274zM676.99 403.29h274v2h-274zM676.99 465.29h274v2h-274zM1000.35 523.216l-26.286-21.566 21.566-26.286 26.286 21.566zm-23.471-21.843l23.194 19.028 19.028-23.194-23.194-19.028z"
      />
      <path
        fill={color}
        d="M594.768 32.772l24.74 20.296-20.296 24.74-24.74-20.296z"
      />
      <path
        d="M467.99 218.29a132.326 132.326 0 01-25.6 78.44c-1.9 2.6-3.89 5.14-5.98 7.59a133.415 133.415 0 01-19.7 18.9c-.72.56-1.45 1.12-2.19 1.67q-4.05 3.03-8.33 5.75c-.87.55-1.74 1.09-2.62 1.61q-2.985 1.815-6.08 3.46c-1.01.54-2.03 1.07-3.05 1.58A133.09 133.09 0 01261.29 329c-1.04-.68-2.06-1.38-3.07-2.1-1.9-1.34-3.77-2.74-5.59-4.18a128.78 128.78 0 01-4.93-4.09 133.168 133.168 0 01-22.35-25.04q-1.86-2.715-3.6-5.52a133.006 133.006 0 11246.24-69.78z"
        fill="#3f3d56"
      />
      <circle cx={329.981} cy={175.494} r={36.234} fill="#a0616a" />
      <path
        d="M305.07 192.856s12.078 27.175-4.529 37.744 27.176 54.351 27.176 54.351l48.312-51.332s-25.666-16.607-21.137-43.783zM416.71 323.22c-.72.56-1.45 1.12-2.19 1.67q-4.05 3.03-8.33 5.75c-.87.55-1.74 1.09-2.62 1.61l-.37-2.01 3.48-1.81z"
        fill="#a0616a"
      />
      <path
        d="M403.57 332.25c.88-.52 1.75-1.06 2.62-1.61l.03-.4.46-1.81 19.17-75.18-58.11-26.74-33.98 20.7-30.44-18.77s-17.88.65-22.41 5.18c-3.55 3.55-20.96 11.72-28.36 15.1-2.06.94-3.34 1.51-3.34 1.51s1.14 34.26 3.42 72.49c1.82 1.44 3.69 2.84 5.59 4.18 1.01.72 2.03 1.42 3.07 2.1a133.09 133.09 0 00133.15 8.29z"
        fill={color}
      />
      <path
        d="M261.29 248.72V329c-1.04-.68-2.06-1.38-3.07-2.1-1.9-1.34-3.77-2.74-5.59-4.18a128.78 128.78 0 01-4.93-4.09 133.168 133.168 0 01-22.35-25.04q-1.86-2.715-3.6-5.52 1.47-4.83 3.3-10.67c7.55-24.15 24.16-28.68 24.16-28.68zM403.57 332.25c.88-.52 1.75-1.06 2.62-1.61q4.275-2.715 8.33-5.75c.74-.55 1.47-1.11 2.19-1.67a133.42 133.42 0 0019.7-18.9c2.09-2.45 4.08-4.99 5.98-7.59-6.15-19.22-16.54-43.48-16.54-43.48l-21.14-1.51s-8.58 68.68-10.27 85.55z"
        fill={color}
      />
      <path
        d="M307.765 133.554a68.591 68.591 0 01-5.668 4.337 53.882 53.882 0 00-6.832 6.787l-2.337 2.616c-1.988 2.226-4.098 4.766-4.014 7.75.031 1.107.372 2.181.505 3.28.529 4.362-2.137 9.155.057 12.961.635 1.1 1.616 1.96 2.315 3.021a7.062 7.062 0 011.116 4.599c2.358.096 4.293-2.017 5.032-4.258s.64-4.662 1-6.995 1.372-4.802 3.491-5.84c4.522-2.215 9.714 3.545 14.541 2.11 3.37-1.003 5.147-5.18 8.593-5.881 2.466-.501 4.84.964 7.132 2.002s5.382 1.52 7.003-.406c1.073-1.274 1.187-3.316 2.61-4.183 1.706-1.038 3.843.408 5.134 1.93s2.718 3.386 4.714 3.33c2.648-.073 4.676-3.6 7.19-2.763 2.836.944 1.532 5.484 3.253 7.928 1.455 2.067 4.502 1.945 7.007 1.604a2.51 2.51 0 002.613-3.351l-1.047-13.872a6.698 6.698 0 00-.613-2.769c-.728-1.32-2.237-1.988-3.262-3.092-2.157-2.322-2.053-6.392-4.735-8.08-1.392-.877-3.213-.851-4.596-1.743-1.773-1.144-2.344-3.436-3.586-5.142-1.775-2.439-4.88-3.57-7.88-3.88s-6.03.064-9.044-.034c-6.13-.2-12.26-1.925-18.42-.915-5.375.881-7.632 5.441-11.272 8.95z"
        fill="#2f2e41"
      />
      <circle cx={1022.017} cy={122.51} r={4.186} fill="#3f3d56" />
      <circle cx={993.017} cy={71.51} r={4.186} fill="#3f3d56" />
      <circle cx={981.017} cy={16.51} r={4.186} fill="#3f3d56" />
    </svg>
  );
};

SvgPersonalInfo.propTypes = {
  color: PropTypes.string
};
SvgPersonalInfo.defaultProps = {
  color: "primary"
};
const MemoSvgPersonalInfo = React.memo(SvgPersonalInfo);
export default MemoSvgPersonalInfo;
