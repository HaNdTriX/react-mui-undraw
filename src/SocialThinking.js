import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSocialThinking = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 846.02 713.53"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M93.483 679.876c0 22.469-13.356 30.314-29.833 30.314q-.573 0-1.144-.013a48.69 48.69 0 01-2.266-.104c-14.871-1.052-26.424-9.3-26.424-30.197 0-21.625 27.634-48.912 29.71-50.932l.004-.003.12-.117s29.834 28.583 29.834 51.052z"
        fill={color}
      />
      <path
        d="M62.563 706.752l10.911-15.246-10.939 16.92-.029 1.751a48.69 48.69 0 01-2.266-.104l1.176-22.479-.01-.175.02-.032.111-2.123L50.571 668.3l11.001 15.37.025.451.89-16.984-9.39-17.528 9.504 14.547.925-35.213.004-.12v.116l-.155 27.768 9.347-11.008-9.385 13.4-.247 15.206 8.727-14.594-8.764 16.832-.138 8.454 12.67-20.313-12.717 23.263z"
        fill="#3f3d56"
      />
      <path
        d="M733.09 394.388c0 176.18-79.99 315.164-178.5 319-128.462 5.004-296.356-123.086-178.5-319 90.819-150.967 79.918-319 178.501-319s178.5 142.821 178.5 319z"
        fill="#f2f2f2"
      />
      <path fill={color} d="M374.947 488.049h254.514v221.025H374.947z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M0 709.074h846.02"
      />
      <path
        d="M558.717 0a24.368 24.368 0 00-9.779 46.688 21.58 21.58 0 01.424-5.592l3.133-13.281a9.302 9.302 0 01-.783-3.851c0-3.612 2.089-6.31 4.7-6.31 2.218 0 3.284 1.665 3.284 3.656 0 2.23-1.425 5.558-2.154 8.648a3.767 3.767 0 003.851 4.688c4.612 0 7.723-5.929 7.723-12.956 0-5.34-3.6-9.333-10.138-9.333A11.546 11.546 0 00546.98 24.03a7.024 7.024 0 001.61 4.775 1.191 1.191 0 01.348 1.36c-.12.446-.38 1.523-.5 1.958a.837.837 0 01-1.219.61c-3.404-1.393-4.992-5.113-4.992-9.312 0-6.918 5.841-15.218 17.415-15.218 9.3 0 15.425 6.733 15.425 13.956 0 9.562-5.32 16.698-13.152 16.698-2.632 0-5.101-1.425-5.95-3.035 0 0-1.414 5.613-1.718 6.7a20.253 20.253 0 01-2.448 5.222A24.37 24.37 0 10558.717 0zM799.277 176.223a21.291 21.291 0 01-6.049 1.664 10.568 10.568 0 004.634-5.83 20.926 20.926 0 01-6.69 2.556 10.528 10.528 0 00-18.22 7.201 10.31 10.31 0 00.272 2.404 29.846 29.846 0 01-21.712-11.019 10.552 10.552 0 003.274 14.076 10.286 10.286 0 01-4.786-1.316v.13a10.54 10.54 0 008.452 10.334 10.601 10.601 0 01-2.774.37 9.936 9.936 0 01-1.98-.196 10.548 10.548 0 009.845 7.321 21.115 21.115 0 01-13.086 4.514 21.348 21.348 0 01-2.513-.152 29.437 29.437 0 0016.121 4.764c19.395 0 29.99-16.066 29.99-30 0-.457-.01-.914-.032-1.36a21.438 21.438 0 005.254-5.461zM393.922 31.016h-37.158a2.307 2.307 0 00-2.306 2.307V70.48a2.307 2.307 0 002.306 2.306h18.58V56.253h-4.994v-6.092h4.993v-4.503c0-5.395 3.742-8.332 8.561-8.332 2.306 0 4.786.174 5.363.25v5.635h-3.84c-2.622 0-3.122 1.24-3.122 3.067v3.883h6.244l-.816 6.092h-5.428v16.534h11.618a2.307 2.307 0 002.306-2.306V33.323a2.307 2.307 0 00-2.307-2.307zM398.608 185.692a8.728 8.728 0 018.702 8.703v17.404a8.728 8.728 0 01-8.702 8.702h-17.405a8.728 8.728 0 01-8.702-8.702v-17.404a8.728 8.728 0 018.702-8.703h17.405m0-3.48h-17.405a12.219 12.219 0 00-12.183 12.183v17.404a12.219 12.219 0 0012.183 12.183h17.405A12.219 12.219 0 00410.79 211.8v-17.404a12.219 12.219 0 00-12.183-12.184z"
        fill="#3f3d56"
      />
      <path
        d="M401.218 194.395a2.61 2.61 0 112.611-2.611 2.604 2.604 0 01-2.61 2.61zm-11.312 1.74a6.962 6.962 0 11-6.962 6.962 6.968 6.968 0 016.962-6.962m0-3.48a10.443 10.443 0 1010.442 10.442 10.445 10.445 0 00-10.442-10.443zM702.584 10.513h-34.853a3.407 3.407 0 00-3.568 3.252v34.929a3.674 3.674 0 003.568 3.579h34.842a3.488 3.488 0 003.35-3.58V13.766a3.202 3.202 0 00-3.339-3.252zm-25.476 34.809h-5.983V26.72h5.983zm-2.785-21.43h-.043a3.253 3.253 0 11.043 0zm24.65 21.43h-5.983V35.15c0-2.437-.87-4.101-3.035-4.101a3.273 3.273 0 00-3.068 2.208 4.028 4.028 0 00-.206 1.469v10.595h-5.983V26.72h5.983v2.589a6.056 6.056 0 015.395-3.024c3.927 0 6.897 2.588 6.897 8.169z"
        fill="#3f3d56"
      />
      <path
        d="M537.446 268.119s42.347 1.15 49.34 3.695 10.122 20.74 10.122 20.74l-32.88 10.334-24.591-1.393-18.508 1.308 10.334-27.065z"
        fill="#2f2e41"
      />
      <path
        d="M539.273 254.223s2.786 10.761-3.397 18.38 26.582 34.77 26.582 34.77l17.285-2.97s-3.81-33.065 1.308-41.438-41.778-8.742-41.778-8.742z"
        fill="#9f616a"
      />
      <path
        d="M539.273 254.223s2.786 10.761-3.397 18.38 26.582 34.77 26.582 34.77l17.285-2.97s-3.81-33.065 1.308-41.438-41.778-8.742-41.778-8.742z"
        opacity={0.1}
      />
      <path
        fill="#9f616a"
        d="M654.23 568.843l-38.138 50.577 26.027 15.196 35.822-58.609-23.711-7.164z"
      />
      <path
        d="M627.478 620.273s-14.045-16.32-13.42-12.68-9.992 34.5-.113 37.485 94.6 10.902 95.766 1.336-25.274-16.262-25.274-16.262-15.707-15.096-19.19-13.561-37.77 3.682-37.77 3.682z"
        fill="#2f2e41"
      />
      <path
        fill="#9f616a"
        d="M645.673 617.145l30.463 51.899 23-13.319-30.719-42.489-22.744 3.909z"
      />
      <path
        d="M693.762 493.674l-9.04 12.794s-43.1 59.859-38.523 64.692 23.64 23.1 33.334 19.56 44.137-64.721 44.137-64.721l-8.984-35.921z"
        fill="#2f2e41"
      />
      <path
        d="M508.1 481.563s9.652 18.01 34.116 24.109 50.023 18.564 50.932 18.408 3.483-1.535 4.109 2.104 7.335 9.979 7.335 9.979 27.022 91.828 37.343 91.928 31.528-7.292 31.969-10.178-31.6-96.662-31.913-98.481l-3.753-21.834s42.375 6.766 46.327 7.96 39.105 20.44 39.105 20.44 35.836-25.828 2.317-51.912-91.132-45.218-91.132-45.218l-20.669-5.814-18.013-1.075-2.652-10.17-42.662 2.46-44.522 18.892z"
        fill="#2f2e41"
      />
      <circle cx={564.405} cy={242.411} r={33.232} fill="#9f616a" />
      <path
        d="M534.34 269.12l3.997-.686s7.22 27.795 29.55 32.386c0 0 11.02-13.2 10.55-15.428s8.726-14.11 13.616-7.458-1.194 123.84 2.915 125.944 12.921 4.336 5.828 12.111-35.268 18.238-41.508 14.628-18.991-34.201-24.507-44.493-14.343-45.303-14.343-45.303-11.272-38.338-4.335-47.023 18.237-24.677 18.237-24.677z"
        fill="#d0cde1"
      />
      <path
        d="M566.145 413.391a189.572 189.572 0 01-3.807 24.268c-1.63 6.508-3.527 10.438-5.693 10.27-5.525-.413-8.037 7.692-9.332 17.035-1.384 9.912-1.384 21.22-2.143 25.217-1.005 5.28-7.435 9.31-20.283 8.126a90.66 90.66 0 01-22.348-5.48c-17.347-6.308-16.834-57.456-13.932-95.41 1.775-23.263 4.443-41.581 4.443-41.581s-5.269-15.718-6.954-26.49a35.21 35.21 0 01-.503-5.95c.257-9.41 17.437-34.84 27.818-50.68 10.393-15.84 24.57-4.219 24.57-4.219l-4.934 14.891s7.646 11.8 7.702 23.03 18.307 19.334 24.86 24.77c4.119 3.416 4.019 49.016.536 82.203zM580.575 273.819s1.197 1.415 6.68.725c6.577-.829 15.619 1.447 17.72 7.725 3.852 11.514 14.712 58.353 14.712 58.353s4.52 53.547 6.553 65.374 1.024 22.304 3.028 28.516-19.787-11.586-27.818-9.269-13.192-27.704-12.183-38.18 1.862-21.864-.924-32.624 2.154-39.24 1.969-45.765-17.71-22.97-9.737-34.855z"
        fill="#2f2e41"
      />
      <path
        d="M604.088 440.244s35.186 19.196 38.553 46.518-47.062-26.455-47.062-26.455zM624.174 420.87s10.781 54.344 27.577 51.457-9.382-54.585-9.382-54.585z"
        fill="#9f616a"
      />
      <path
        d="M681.694 657.786s-8.6 9.908-10.733 8.4-7.036 19.006-2.615 22.93 21.45 10.362 21.635 16.887 45.858 5.231 47.492-1.606-5.728-22.432-10.903-25.289-24.306-29.154-24.306-29.154-14.984 2.188-20.57 7.832z"
        fill="#2f2e41"
      />
      <path
        d="M598.484 473.481c-8.16-5.76-30.944-7.189-51.171-8.517-8.875-.57-17.258-1.128-23.699-2.032-6.206-.86-11.788-6.53-16.744-14.98-7.513-12.804-13.585-32.004-18.263-50.535 1.775-23.263 4.443-41.581 4.443-41.581s-5.269-15.718-6.954-26.49a14.176 14.176 0 014.487-4.041c21.455-9.21 41.94 81.422 44.54 95.644.045.234.078.457.112.647 1.261 7.323 14.891 13.585 27.103 16.063 7.524 1.53 14.523 1.63 17.75-.357 8.472-5.202 34.526 15.617 36.502 16.209 1.976.602-6.385 28.264-18.106 19.97z"
        opacity={0.1}
      />
      <path
        d="M490.587 319.726s-15.594 7.363-8.742 41.778 20.654 92.923 41.764 95.851 63.142 2.26 74.87 10.548 20.086-19.375 18.11-19.973-28.032-21.407-36.504-16.205-42.816-3.88-44.849-15.707-22.843-105.66-44.65-96.292zM602.956 303.222l17.138 39.767s1.725-.86 3.73 5.351 2.942 11.67 6.453 15.75 19.134 62.276 19.603 65.006-21.577 12.138-26.503 4.555-20.42-130.429-20.42-130.429zM545.498 241.948c1.274-.34 1.461-2.03 1.504-3.348.228-7.056 4.477-14.295 11.23-16.35a18.881 18.881 0 017.96-.437 30.145 30.145 0 0110.777 3.596c1.76.988 3.485 2.18 5.48 2.482 1.318.199 7.023 1.858 8.335 2.091 2.885.514 5.566 3.095 8.334 2.134 2.648-.919 3.234-4.348 3.298-7.15.146-6.385-4.7-15.221-8.97-19.97-3.24-3.605-8.117-5.269-12.886-6.134a85.79 85.79 0 00-16.852-1.025c-7.631.136-15.474.725-22.355 4.027s-12.661 9.873-12.991 17.498c-.069 1.589.095 3.184-.039 4.768-.325 3.865-2.378 7.356-3.34 11.113a20.335 20.335 0 002.84 16.25c2.553 3.758 6.567 7.158 6.42 11.7l5.537-5.738a4.547 4.547 0 001.352-5.555l-1.96-7.646a6.898 6.898 0 01-.17-4.254c2.102-5.192 4.373 2.515 6.496 1.948z"
        fill="#2f2e41"
      />
      <path
        d="M292.583 468.934c0 105.949-62.985 142.942-140.681 142.942s-140.68-36.993-140.68-142.942 140.68-240.732 140.68-240.732 140.68 134.783 140.68 240.732z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M146.777 595.669L148.218 507l59.961-109.697-59.735 95.787.647-39.87 41.326-79.364-41.154 68.814 1.165-71.707 44.252-63.184-44.069 51.908.728-131.485-4.574 174.062.375-7.18-44.991-68.867 44.27 82.651-4.192 80.085-.125-2.126-51.867-72.472 51.71 79.981-.524 10.016-.094.15.043.822-10.636 203.182h14.21l1.705-104.948 51.583-79.785-51.455 71.896z"
      />
    </svg>
  );
};

SvgSocialThinking.propTypes = {
  color: PropTypes.string
};
SvgSocialThinking.defaultProps = {
  color: "primary"
};
const MemoSvgSocialThinking = React.memo(SvgSocialThinking);
export default MemoSvgSocialThinking;
