import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPhoneCall = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 972.005 593.594"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M367.564 372.999c-.403-.4-9.968-10.087-18.076-33.07-7.438-21.087-14.944-57.857-8.458-113.29 12.288-105.013-50.722-171.938-51.36-172.602l1.865-1.79c.161.167 16.362 17.198 30.776 47.095a231.447 231.447 0 0121.287 127.598c-12.266 104.834 25.408 143.845 25.79 144.227z"
        fill="#f2f2f2"
      />
      <circle cx={270.322} cy={35.474} r={16.803} fill="#f2f2f2" />
      <circle cx={336.521} cy={83.176} r={16.803} fill="#f2f2f2" />
      <circle cx={311.173} cy={131.942} r={16.803} fill="#f2f2f2" />
      <circle cx={362.143} cy={155.421} r={16.803} fill="#f2f2f2" />
      <circle cx={319.771} cy={221.65} r={16.803} fill="#f2f2f2" />
      <path
        d="M377.572 371.192s-26.135-36.196 15.478-78.29zM357.318 375.365s-17.862-40.916-75.272-26.51zM684.23 504.054c-.07-.847-1.57-21.163 11.491-55.215 11.983-31.241 39.107-80.418 100.277-137.283C911.88 203.831 905.022 66.448 904.938 65.072l3.863-.232c.021.35 1.957 35.47-10.627 83.518a346.353 346.353 0 01-99.542 166.033c-115.685 107.541-110.61 188.54-110.546 189.346z"
        fill="#f2f2f2"
      />
      <circle cx={900.904} cy={25.151} r={25.146} fill="#f2f2f2" />
      <circle cx={930.048} cy={143.727} r={25.146} fill="#f2f2f2" />
      <circle cx={853.855} cy={174.696} r={25.146} fill="#f2f2f2" />
      <circle cx={889.149} cy={250.898} r={25.146} fill="#f2f2f2" />
      <circle cx={776.617} cy={285.246} r={25.146} fill="#f2f2f2" />
      <path
        d="M697.387 511.706s5.34-66.596 93.591-74.182zM670.262 496.81s19.345-63.947-60.042-103.234z"
        fill="#f2f2f2"
      />
      <path
        d="M121.42 440.376c-8.382 30.985-37.092 50.175-37.092 50.175s-15.121-31.047-6.739-62.033 37.093-50.175 37.093-50.175 15.12 31.047 6.739 62.033z"
        fill={color}
      />
      <path
        d="M45.166 440.376C53.548 471.36 82.26 490.55 82.26 490.55s15.12-31.047 6.739-62.033-37.093-50.175-37.093-50.175-15.121 31.047-6.739 62.033z"
        fill={color}
      />
      <path
        d="M57.483 433.717c23.001 22.39 25.81 56.81 25.81 56.81s-34.482-1.884-57.483-24.274S0 409.443 0 409.443s34.482 1.883 57.483 24.274zM109.104 433.717c-23.001 22.39-25.81 56.81-25.81 56.81s34.482-1.884 57.483-24.274 25.81-56.81 25.81-56.81-34.483 1.883-57.483 24.274z"
        fill="#3f3d56"
      />
      <path fill="#2f2e41" d="M8.496 557.13h963.51v2.241H8.496z" />
      <path
        d="M517.05 213s-10-10-33-8c0 0-222-23-227 18s-6 65 7 74c0 0 42.5 38.5 20.5 72.5l-12 20 471-4s5-73 20-87 20-88 0-90-252-13-246.5 4.5z"
        fill="#3f3d56"
      />
      <path
        d="M268.55 294.5s-141 33-85 95l9 9-4 138h650l7-135 8-16s49.82-59.75-94.09-81.375L733.55 369.5l-438-3s-3-74-27-72z"
        fill="#3f3d56"
      />
      <path
        fill="#3f3d56"
        d="M200.55 527.5h41v31h-41zM790.55 527.5h41v31h-41zM509.444 370s-97.894-69.5-219.894.5l-36 52 7 43s253 4 256-23-7.106-72.5-7.106-72.5zM738.55 370.5s-171.752-55-223.376 0l6.376 79s251 19 255 6 6-36 6-36z"
      />
      <path
        d="M738.55 370.5s-171.752-55-223.376 0l.142 1.762c-.17-.817-.266-1.262-.266-1.262s-103.5-70.5-225.5-.5l-36 52 7 43s244.984 5.211 260.724-19.425l.276 3.425s251 19 255 6 6-36 6-36z"
        opacity={0.1}
      />
      <path
        d="M272.55 232.5c48.603-1.034 94.68-7.202 137-21 1.03 48.68 8.029 94.21 24 135-47.314-8.598-95.335-.09-144 24 8.74-44.006 1.184-90.268-17-138zM769.55 240.5c-48.603-1.034-94.679-7.202-137-21-1.03 48.68-8.028 94.21-24 135 47.315-8.598 95.336-.09 144 24-8.74-44.006-1.184-90.268 17-138z"
        fill={color}
      />
      <path
        d="M457.422 227.725a33.84 33.84 0 019.264-4.646 236.206 236.206 0 0165.268-14.208c19.408-1.376 40.442.259 55.6 12.456a19.118 19.118 0 015.64 6.57c1.907 4.116 1.329 8.9.711 13.393a15.133 15.133 0 01-1.298 5.041c-2.04 3.884-7.062 5.244-11.424 4.779s-8.455-2.312-12.758-3.167a57.027 57.027 0 00-8.057-.82l-26.985-1.462c-16.78-.908-33.781-1.802-50.241 1.585a50.044 50.044 0 00-14.516 5.002c-3.76 2.11-6.29 5.14-9.779 1.24-6.129-6.848-9.52-19.437-1.425-25.763z"
        fill="#2f2e41"
      />
      <path
        d="M499.238 239.658s36.295-16.27 50.062 2.503-7.51 11.264-7.51 11.264l-23.779 7.51-26.283-5.007z"
        fill="#f2f2f2"
      />
      <path
        d="M501.115 227.768s5.006 23.78 1.252 30.037 21.276 15.02 21.276 15.02l23.78-10.013s-6.258-38.799 0-46.308z"
        fill="#ffb9b9"
      />
      <path
        d="M501.115 227.768s5.006 23.78 1.252 30.037 21.276 15.02 21.276 15.02l23.78-10.013s-6.258-38.799 0-46.308z"
        opacity={0.1}
      />
      <path
        d="M477.663 513.703c3.58 6.865 5.901 14.302 8.27 21.674a1.763 1.763 0 002.191 1.457l22.262-.025c2.747-.003 6.433-.885 6.405-3.633-.02-1.93-1.994-3.133-3.462-4.386-4.075-3.477-5.136-9.211-6.824-14.295a48.497 48.497 0 00-18.045-24.237 10.561 10.561 0 00-3.858-1.907 10.756 10.756 0 00-4.23.23c-3.907.788-18.5 3.486-15.744 9.17 1.187 2.448 5.586 4.995 7.43 7.282a52.295 52.295 0 015.605 8.67zM555.076 487.883a50.581 50.581 0 01-2.617 4.811c-3.225 5.32-7.031 10.281-10.034 15.729-1.874 3.398-3.45 7.07-3.658 10.945s1.158 7.999 4.249 10.344c3.231 2.453 7.662 2.566 11.678 1.995s8.01-1.723 12.055-1.42c-1.364-7.718 5.146-14.51 6.774-22.178.457-2.153.525-4.386 1.138-6.5a31.861 31.861 0 012.52-5.572 72.036 72.036 0 006.798-20.051c.153-.847-19.789-.986-21.66-.581-5.837 1.262-4.983 7.637-7.243 12.478z"
        fill="#575a89"
      />
      <path
        d="M401.37 366.627c-5.692 8.909-4.38 20.715-.382 30.503s10.362 18.44 14.718 28.073c2.777 6.142 4.724 12.654 7.85 18.625 3.873 7.394 9.526 13.911 12.124 21.843 1.657 5.056 2.037 10.598 4.72 15.192a46.56 46.56 0 005.527 6.858 63.372 63.372 0 0112.74 22.757c2.453-7.305 9.796-12.094 17.337-13.674s15.356-.506 22.985.571c-4.256-6.593-8.553-13.27-11.09-20.696-2.453-7.182-3.177-14.823-4.83-22.23-3.39-15.191-10.63-29.202-17.797-43.017l36.842-2.922a143.638 143.638 0 0118.1-.672c9.51.448 18.826 2.78 28.285 3.857s19.464.795 27.894-3.629a133.673 133.673 0 00-23.984 78.943 30.564 30.564 0 0146.267 10.919c14.439-19.73 12.722-47.198 24.163-68.804 2.352-4.443 5.235-8.582 7.774-12.92 5.022-8.582 8.664-17.887 12.285-27.147 3.2-8.186 6.424-17.293 3.354-25.529a26.654 26.654 0 00-5.469-8.41c-6.6-7.278-15.789-12.661-25.611-12.885-15.08-.345-27.536 10.833-40.763 18.08-15.58 8.537-33.757 11.93-51.478 10.676-18.17-1.287-35.522-7.234-52.832-12.472a251.37 251.37 0 00-26.367-6.801c-7.423-1.393-14.493.15-21.808 2.048-7.965 2.067-15.97 5.69-20.553 12.863z"
        fill="#2f2e41"
      />
      <path
        d="M558.687 203.988a37.578 37.578 0 01-37.547 37.547 36.643 36.643 0 01-6.67-.6 37.545 37.545 0 1144.217-36.947z"
        fill="#ffb9b9"
      />
      <path
        d="M499.238 239.658s6.883 3.129 9.386 5.632 10.013 16.27 22.529 7.51 13.767-13.768 17.521-13.768 8.761 7.51 8.761 7.51l34.418 103.253a144.148 144.148 0 01-31.915 26.909c-20.025 12.516-43.804 18.773-55.068 13.767s-32.541-8.76-36.296-18.773-10.012-40.05-10.012-40.05l17.522-76.346z"
        fill="#f2f2f2"
      />
      <path
        d="M494.405 344.086c2.729-5.894 3.126-12.565 3.356-19.056a115.514 115.514 0 00-.509-19.277c-1.11-8.372-3.835-16.438-5.557-24.705a104.443 104.443 0 01-2.189-22.05c.025-3.379.27-6.937 2.112-9.77 1.284-1.978 3.294-3.509 4.097-5.726 1.574-4.346-2.316-8.898-6.578-10.688-5.07-2.13-10.866-1.986-16.201-.65s-10.311 3.794-15.24 6.234c-3.56 1.763-7.197 3.58-9.957 6.437-3.885 4.02-5.594 9.62-6.973 15.037-1.104 4.337-2.085 8.858-1.245 13.253 1.364 7.137 7.182 12.505 10.283 19.076 3.602 7.63 3.36 16.523 1.927 24.838s-3.976 16.446-4.76 24.847.42 17.432 5.683 24.027c2.145 2.687 7.964 9.056 11.89 8.336 3.085-.566 7.557-7.357 10.042-9.51 7.18-6.218 15.697-11.749 19.82-20.653zM559.978 235.576c.11 6.98-2.967 13.615-6.586 19.586s-7.869 11.616-10.536 18.068a41.413 41.413 0 00-1.932 25.477 82.197 82.197 0 002.76 8.526l6.858 18.81a32.647 32.647 0 003.976 8.348 26.96 26.96 0 005.405 5.198 50.437 50.437 0 0017.632 9.2c6.452 1.704 13.511 1.597 19.607-1.12a283.723 283.723 0 0112.18-75.195c1.37-4.505 2.869-9.248 1.811-13.837-1.185-5.14-5.313-8.999-9.238-12.523-12.002-10.778-25.2-22.1-41.266-23.552-9.298-.841-.75 7.967-.67 13.014z"
        fill="#2f2e41"
      />
      <path
        d="M477.845 381.088c.952 1.864 1.544 3.893 2.486 5.762a32.19 32.19 0 005.106 6.867c8.369 9.279 18.598 18.522 31.08 19.082a8.523 8.523 0 003.664-.46c2.183-.909 3.473-3.248 3.898-5.575.885-4.847-1.254-9.683-3.396-14.12-4.643-9.616-9.867-19.477-18.56-25.679-8.57-6.113-20.051-7.598-30.045-4.52-4.528 1.395-12.036 3.831-6.041 7.962 4.548 3.134 9.171 5.52 11.808 10.681z"
        fill="#ffb9b9"
      />
      <path
        d="M485.353 532.543c-3.73 5.07-2.983 12.319-6.288 17.677-2.865 4.644-8.264 7.08-11.848 11.195a30.01 30.01 0 00-3.046 4.382c-3.324 5.568-6.026 12.704-2.752 18.302 2.633 4.504 8.17 6.264 13.246 7.463 6.417 1.516 13.085 2.73 19.576 1.571s12.835-5.133 15.15-11.307a43.683 43.683 0 011.62-4.571c3.518-6.927 14.553-7.002 18.154-13.886 2.52-4.817.204-10.64-2.112-15.56l-7.072-15.023c-2.346-4.986-11.86-2.119-16.82-3.313-6.468-1.559-13.154-3.275-17.808 3.07z"
        fill="#2f2e41"
      />
      <path
        d="M540.052 519.637c-3.001 2.103-4.941 5.403-6.399 8.765-3.5 8.075-4.702 16.926-5.869 25.649-.467 3.494-.932 7.07-.202 10.52 1.508 7.123 7.963 12.369 14.911 14.547s14.4 1.843 21.673 1.486c2.336-.115 4.764-.255 6.812-1.384 3.656-2.015 5.083-6.753 4.457-10.879s-2.881-7.798-5.088-11.34-4.463-7.213-5.095-11.338c-1.063-6.94 1.937-17.127-2.327-23.406-4.272-6.292-17.171-6.617-22.873-2.62zM557.742 184.42a9.53 9.53 0 00-4.133-5.395 21.872 21.872 0 00-.873-7.12c-2.274-6.722-7.66-6.337-12.743-9.309-2.205-1.29-2.068-2.429-3.216-4.547a16.876 16.876 0 00-6.503-6.635c-3.26-2.077-6.703-4.217-10.56-4.48-8.106-.552-14.322 7.073-22.07 9.52-3.414 1.078-7.084 1.123-10.517 2.142s-6.858 3.455-7.37 7c-.236 1.636.18 3.314-.059 4.95-.476 3.252-3.329 5.529-5.239 8.203-4.223 5.915-3.74 14.27-.363 20.704a29.102 29.102 0 002.436 3.81 23.441 23.441 0 002.57 8.706c3.378 6.435 9.189 11.243 15.26 15.238a36.016 36.016 0 01-.9-6.498 4.482 4.482 0 01.275-2.153c.676-1.413 2.463-1.789 3.825-2.563 2.82-1.603 3.927-5.15 4.009-8.395s-.606-6.492-.266-9.72a5.31 5.31 0 011.818-3.906 6.28 6.28 0 013.428-.817c5.78-.236 11.819-.342 16.917-3.076 1.74-.932 3.356-2.165 5.266-2.663 4.333-1.13 8.761 1.907 11.258 5.624s3.742 8.14 6.046 11.979 6.284 7.264 10.739 6.809a1.783 1.783 0 001.33-.592 1.994 1.994 0 00.245-1.133l.249-17.028a25.737 25.737 0 00-.859-8.654zM438.918 273.489c-3.582 5.285-7.713 10.366-9.682 16.44-1.158 3.57-1.517 7.343-2.355 11.001-2.79 12.184-10.854 23.006-11.664 35.48a16.868 16.868 0 001.184 8.146c2.313 5.031 7.849 7.683 13.13 9.35s10.95 2.87 15.165 6.462a46.475 46.475 0 015.746 6.662 55.665 55.665 0 0026.59 18.192c-.827-5.694-1.215-12.559 3.338-16.079 2.464-1.905 5.757-2.244 8.86-2.513l14.664-1.267a188.441 188.441 0 00-32.146-25.042c-4.055-2.505-8.468-5.147-10.32-9.54-1.157-2.745-1.141-5.82-1.169-8.8a216.863 216.863 0 00-2.762-32.556c-1.207-7.476-2.806-14.886-4.634-22.235-.513-2.063-3.547-11.317-7.28-9.152-.88.51-1.703 6.38-2.217 7.599a46.086 46.086 0 01-4.448 7.852z"
        fill="#2f2e41"
      />
      <path
        d="M459.211 289.533a57.441 57.441 0 01-5.488 25.597 21.152 21.152 0 00-2.149 5.638c-.657 4.208 1.738 8.282 4.475 11.544a47.469 47.469 0 0020.296 14.12"
        opacity={0.1}
      />
      <path
        d="M552.643 244.684l.884.14a2.95 2.95 0 01-2.453-3.376l9.132-57.696a2.95 2.95 0 013.376-2.453l-.884-.14a4.739 4.739 0 013.94 5.422l-8.573 54.163a4.739 4.739 0 01-5.422 3.94z"
        fill="#2f2e41"
      />
      <path
        d="M562.386 181.112l1.339.212-10.055 63.524-1.34-.212a1.744 1.744 0 01-1.449-1.995l9.51-60.08a1.744 1.744 0 011.995-1.45z"
        fill={color}
      />
      <rect
        x={675.723}
        y={342.677}
        width={0.596}
        height={5.245}
        rx={0.168}
        transform="rotate(8.995 1592.91 -455.965)"
        fill="#464353"
      />
      <path
        d="M585.273 233.586c1.38-3.477 2.783-7.074 2.689-10.814a21.79 21.79 0 00-3.001-9.6 49.065 49.065 0 00-7.829-10.747c-3.673-3.821-8.979-7.234-13.988-5.5-3.977 1.378-6.244 5.518-7.716 9.462a11.892 11.892 0 00-1.003 6.155c.487 2.715 2.584 4.8 4.104 7.102 2.382 3.61 3.403 7.923 4.381 12.136l2.454 10.567 4.216 18.15c-.111-.478 7.83-7.999 8.772-9.6 3.036-5.157 4.71-11.743 6.92-17.31z"
        fill="#ffb9b9"
      />
      <path
        d="M607.817 253.516l5.989 12.455a29.926 29.926 0 013.775 16.84l.356 37.36c.047 4.993.085 10.06-1.229 14.877a11.914 11.914 0 01-2.065 4.442 13.885 13.885 0 01-3.542 2.853c-11.334 7.082-26.03 11.107-38.005 5.173a52.594 52.594 0 01-7.792-5.087c-4.772-3.534-9.615-7.137-13.185-11.882-3.737-4.967 13.445-23.863 10.931-29.547-4.503-10.183-2.01-34.333-9-43-1.017-1.261 8.228-.125 8.191-1.745-.074-3.275 7.78-8.01 10.81-9.255 5.175-2.128 11.133-6.471 12-12 11.005 14.432-19.898 58.039-2.531 63.312a1.792 1.792 0 002.756-1.531c.985-4.125 1.334-8.372 2.055-12.551a71.489 71.489 0 017.542-21.75c2.057-3.81 8.717-17.755 12.944-8.964z"
        fill="#2f2e41"
      />
      <path
        d="M589.251 282.081c-.882 2.373-.081 4.997.599 7.436a74.918 74.918 0 012.73 21.738.791.791 0 01-.925.948c-2.889.177-6.196.196-8.156-1.934"
        opacity={0.1}
      />
      <path
        d="M125.05 557h-83l-14.437-49.22A20.118 20.118 0 0146.917 482h72.609a20.118 20.118 0 0119.372 25.542zM167.05 187.201a13 13 0 1113-13 13.014 13.014 0 01-13 13zm0-24a11 11 0 1011 11 11.012 11.012 0 00-11-11zM641.05 128.201a13 13 0 1113-13 13.014 13.014 0 01-13 13zm0-24a11 11 0 1011 11 11.012 11.012 0 00-11-11zM428.05 34h-26V8h26zm-24-2h22V10h-22z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgPhoneCall.propTypes = {
  color: PropTypes.string
};
SvgPhoneCall.defaultProps = {
  color: "primary"
};
export default SvgPhoneCall;
