import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCompleteDesign = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 928 696.402"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M566.563 211.08C440.891-130.186 268.63-61.518 242.781 445.333c-6.801 133.36 136.797 245.004 312.502 249.104S875.951 593.66 879.066 460.183s-264.99-120.08-312.503-249.104z"
        fill="#f2f2f2"
      />
      <path fill="#3f3d56" d="M296 239.402h458v188H296z" />
      <circle cx={820.372} cy={527.626} r={21.92} fill={color} opacity={0.4} />
      <path
        d="M756.083 696.02l-2-.04a463.835 463.835 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.511l1.148 1.636c-46.052 32.334-48.968 154.966-48.991 156.202zM781.083 695.541l-2-.039c.043-2.215 1.293-54.414 21.843-68.842l1.148 1.637c-19.72 13.846-20.981 66.712-20.991 67.244z"
        fill="#3f3d56"
      />
      <circle cx={816.452} cy={530} r={10} fill={color} />
      <circle cx={811.5} cy={616} r={10} fill={color} />
      <path
        d="M776.422 545.995c1.88 12.004-3.02 22.74-3.02 22.74s-7.944-8.725-9.824-20.73 3.02-22.74 3.02-22.74 7.944 8.726 9.824 20.73z"
        fill={color}
      />
      <path
        d="M809.078 575.057c-11.493 3.942-22.904 1.034-22.904 1.034s7.223-9.3 18.716-13.241 22.904-1.034 22.904-1.034-7.223 9.299-18.716 13.241zM809.478 651.31a31.134 31.134 0 01-16.064.693 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.313zM0 694.402h798v2H0zM879 428.402H295v-228h584zm-582-2h580v-224H297z"
        fill="#3f3d56"
      />
      <path
        d="M687 327.156c0 75.315-44.768 101.61-100 101.61-1.28 0-2.559-.018-3.829-.046a158.183 158.183 0 01-7.602-.35C525.72 424.847 487 397.198 487 327.157c0-72.471 92.61-163.93 99.586-170.713a.009.009 0 01.009-.01c.267-.267.405-.395.405-.395s100 95.812 100 171.118z"
        fill={color}
      />
      <path
        d="M583.355 417.243l36.576-51.1-36.668 56.715-.092 5.862a158.183 158.183 0 01-7.602-.35l3.939-75.342-.028-.59.065-.1.377-7.124-36.76-56.852 36.87 51.514.093 1.509 2.973-56.926-31.468-58.748 31.854 48.762 3.102-118.03.009-.405v.395l-.515 93.07 31.33-36.899-31.46 44.915-.828 50.971 29.26-48.918-29.38 56.42-.46 28.338L627 276.24l-42.623 77.975zM408 152.402a13 13 0 1113-13 13.014 13.014 0 01-13 13zm0-24a11 11 0 1011 11 11.012 11.012 0 00-11-11z"
        fill="#3f3d56"
      />
      <circle cx={658} cy={482.402} r={8} fill="#3f3d56" />
      <circle cx={97} cy={247.402} r={8} fill="#3f3d56" />
      <path d="M521 518.402h-26v-26h26zm-24-2h22v-22h-22z" fill="#3f3d56" />
      <circle cx={878} cy={201.402} r={50} fill={color} />
      <path
        fill="#fff"
        d="M869.375 223.777l-21.507-21.507 6.032-6.033 15.495 15.495 32.705-32.705 6.032 6.033-38.757 38.717z"
      />
      <path
        d="M135 531.402a82 82 0 1082 82 82 82 0 00-82-82zm5 89a16 16 0 1116-16 16 16 0 01-16 16z"
        fill="#f2f2f2"
      />
      <path
        d="M221.931 473.196c-1.809 1.97-35.086 33.63-35.086 33.63s3.307 22.098 38.912 24.84l59.34 4.57s11.216 41.162 24.552 54.316 7.216 13.888 12.22 20.299-2.02 8.13 5.578 8.753 23.294-8.563 23.464-15.668-4.26-11.174-6.23-12.983-6.965-19.103-9.96-22.761-14.332-47.653-14.332-47.653-11.316-21.284-27.002-22.982-33.14-9.327-33.14-9.327"
        fill="#2f2e41"
      />
      <path
        d="M221.931 473.196c-1.809 1.97-35.086 33.63-35.086 33.63s3.307 22.098 38.912 24.84l59.34 4.57s11.216 41.162 24.552 54.316 7.216 13.888 12.22 20.299-2.02 8.13 5.578 8.753 23.294-8.563 23.464-15.668-4.26-11.174-6.23-12.983-6.965-19.103-9.96-22.761-14.332-47.653-14.332-47.653-11.316-21.284-27.002-22.982-33.14-9.327-33.14-9.327"
        opacity={0.1}
      />
      <path
        d="M279.492 345.527s12.488-33.933 21.036-23.12-13.754 28.566-13.754 28.566z"
        fill="#a0616a"
      />
      <path
        d="M213.708 363.24l7.11-3.008s12.91 13.545 18.036 16.065 19.13 8.618 20.992 9.62 22.94-36.29 17.9-41.645c0 0 9.434 3.402 13.73 2.112 0 0-10.723 51.988-12.355 59.033s-5.44 7.876-12.543 8.135-50.231-12.396-50.231-12.396z"
        fill="#575a89"
      />
      <path
        d="M323.414 615.15s2.198 7.05 1.218 8.18-3.846 20.41 7.933 19.147 17.444-5.056 20.427-4.845 47.24-15.23 45.043-22.28-24.326.67-24.326.67-25.139-4.78-31.042-10.295-19.253 9.424-19.253 9.424z"
        fill="#2f2e41"
      />
      <path
        d="M323.414 615.15s2.198 7.05 1.218 8.18-3.846 20.41 7.933 19.147 17.444-5.056 20.427-4.845 47.24-15.23 45.043-22.28-24.326.67-24.326.67-25.139-4.78-31.042-10.295-19.253 9.424-19.253 9.424z"
        opacity={0.1}
      />
      <path
        d="M300.849 625.525s7.105 30.956 12.317 30.64 42.007-18.221 46.534-21.768c5.813-4.554 5.583-12.601-1.09-10.911s-25.544.174-28.752-3.233l-8.248-8.763z"
        fill="#2f2e41"
      />
      <path
        d="M228.007 453.533c-1.947 1.833-61.165 52.07-61.165 52.07s4.847 32.476 40.158 37.799 55.696-1.324 55.696-1.324 8.194 41.867 20.538 55.956 6.187 14.376 10.713 21.134-2.606 7.961 4.926 9.135 23.855-6.847 24.541-13.92-3.437-11.455-5.27-13.402-5.558-19.56-8.279-23.425-10.83-48.569-10.83-48.569-9.738-22.05-25.26-24.884-32.374-11.712-32.374-11.712"
        fill="#2f2e41"
      />
      <circle cx={173.497} cy={316.622} r={28.079} fill="#a0616a" />
      <path
        d="M158.779 334.15s4.21 17.153-2.203 25.945 42.9 4.607 42.9 4.607-13.348-27.835-8.423-34.307-32.274 3.754-32.274 3.754z"
        fill="#a0616a"
      />
      <path
        d="M221.813 361.12c5.957 6.329 3.927 42.212 3.927 42.212l-3.806 32.046s4.554 5.813 3.065 8.133-3.923 4.61.774 5.698 15.522 2.834 12.057 7.932a49.148 49.148 0 01-3.63 4.133 280.677 280.677 0 01-3.905 4.034 432.18 432.18 0 01-12.828 12.406q-2.088 1.952-4.28 3.938c-18.75 16.961-42.065 34.915-46.89 26.299-8.076-14.433-13.69-16.494-13.318-28.78s-10.028-43.815-10.028-43.815-12.09-53.809 4.948-69.847l2.664-4.262a11.13 11.13 0 0112.044-4.928c8.316 1.987 21.064 4.732 26.587 4.289 8.534-.688 6.663-4.197 6.663-4.197s19.998-1.62 25.956 4.71z"
        fill="#575a89"
      />
      <path
        d="M248.141 475.898s34.739 8.616 29.642 20.76-35.168-10.05-35.168-10.05z"
        fill="#a0616a"
      />
      <path
        d="M157.957 326.895c.691-.838.007-2.062-.595-2.966-3.223-4.842-3.839-11.73-.292-16.341a15.558 15.558 0 015.128-4.103 24.84 24.84 0 018.95-2.748 13.856 13.856 0 004.864-.958c.98-.496 5.6-2.115 6.592-2.586 2.18-1.037 5.214-.589 6.61-2.558 1.337-1.884.09-4.464-1.21-6.375-2.957-4.352-10.438-7.959-15.574-9.101-3.899-.867-7.967.352-11.58 2.054a70.69 70.69 0 00-11.793 7.379c-5.054 3.744-10.032 7.893-13.067 13.401s-3.766 12.683-.338 17.955c.714 1.098 1.588 2.09 2.256 3.216 1.632 2.748 1.926 6.072 3.079 9.053a16.756 16.756 0 009.683 9.54c3.511 1.299 7.83 1.657 9.905 4.774l.969-6.498a3.747 3.747 0 00-1.753-4.374l-4.974-4.19a5.684 5.684 0 01-2.15-2.772c-1.076-4.488 4.137-.406 5.29-1.802z"
        fill="#2f2e41"
      />
      <path
        d="M207.76 450.557l22.535 14.751a441.573 441.573 0 01-17.108 16.344c-6.255-3.367-12.634-7.012-18.34-10.675-20.879-13.4-38.78-47.048-46.8-63.37s-1.493-28.896-1.493-28.896a60.969 60.969 0 0116.696-4.698c10.452-1.576 44.51 76.544 44.51 76.544z"
        opacity={0.1}
      />
      <path
        d="M210.738 445.917l23.463 15.357a280.677 280.677 0 01-3.906 4.034 432.18 432.18 0 01-12.828 12.406c-6.665-3.56-13.542-7.46-19.643-11.377-20.878-13.4-38.78-47.048-46.8-63.37s13.56-10.469 13.56-10.469-11.199-5.068-.746-6.644 46.9 60.063 46.9 60.063z"
        opacity={0.1}
      />
      <path
        d="M147.585 375.904s-6.528 12.573 1.492 28.895 25.922 49.97 46.8 63.371 50.748 26.6 50.748 26.6 2.834-15.522 7.616-17.27l-45.45-29.75s-34.058-78.12-44.51-76.544a60.969 60.969 0 00-16.696 4.698z"
        fill="#575a89"
      />
      <path
        d="M140 696.402a92 92 0 1192-92 92.104 92.104 0 01-92 92zm0-182a90 90 0 1090 90 90.102 90.102 0 00-90-90z"
        fill="#3f3d56"
      />
      <path
        d="M140 621.402a17 17 0 1117-17 17.019 17.019 0 01-17 17zm0-32a15 15 0 1015 15 15.017 15.017 0 00-15-15zM138 513.402h-2v-103H84v-2h54v105zM212.464 546.402H257v2h-44.536z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M135 477.402h102v2H135zM309.503 664.721L256.09 547.818l1.82-.832 52.587 115.097 48.093-21.593.82 1.824-49.907 22.407z"
      />
      <ellipse cx={89} cy={409.402} rx={28} ry={4} fill="#3f3d56" />
    </svg>
  );
};

SvgCompleteDesign.propTypes = {
  color: PropTypes.string
};
SvgCompleteDesign.defaultProps = {
  color: "primary"
};
const MemoSvgCompleteDesign = React.memo(SvgCompleteDesign);
export default MemoSvgCompleteDesign;
