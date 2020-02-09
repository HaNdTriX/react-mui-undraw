import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgDesigner = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 971.44 662"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="Designer_svg__a"
          x1={979.446}
          y1={738.59}
          x2={979.446}
          y2={646.785}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.535} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="Designer_svg__b"
          x1={600.652}
          y1={650.105}
          x2={600.652}
          y2={119}
          xlinkHref="#Designer_svg__a"
        />
        <linearGradient
          id="Designer_svg__c"
          x1={485.72}
          y1={615.598}
          x2={485.72}
          y2={377.704}
          xlinkHref="#Designer_svg__a"
        />
      </defs>
      <path
        d="M145.834 537.81c-6.984 26.597-31.459 43.219-31.459 43.219s-13.15-26.502-6.166-53.1 31.46-43.22 31.46-43.22 13.15 26.502 6.165 53.1z"
        fill="#3f3d56"
      />
      <path
        d="M135.24 532.183c-19.562 19.327-21.751 48.83-21.751 48.83s29.528-1.83 49.091-21.158 21.751-48.83 21.751-48.83-29.528 1.83-49.09 21.158z"
        fill={color}
      />
      <rect
        x={68.053}
        y={573.241}
        width={106.916}
        height={45.496}
        rx={15.198}
        fill={color}
      />
      <path
        d="M1009.774 663.178v-16.393h-81.969v75.821a15.984 15.984 0 0015.984 15.984h50.001a15.984 15.984 0 0015.984-15.984v-16.804a21.312 21.312 0 000-42.624zm0 34.427v-26.23a13.115 13.115 0 010 26.23z"
        transform="translate(-114.28 -119)"
        fill="url(#Designer_svg__a)"
        opacity={0.7}
      />
      <path
        d="M892.857 546.744a19.459 19.459 0 1019.459 19.46 19.459 19.459 0 00-19.459-19.46zm0 31.434a11.975 11.975 0 1111.975-11.975 11.975 11.975 0 01-11.975 11.975z"
        fill={color}
      />
      <path
        d="M892.857 546.744a19.459 19.459 0 1019.459 19.46 19.459 19.459 0 00-19.459-19.46zm0 31.434a11.975 11.975 0 1111.975-11.975 11.975 11.975 0 01-11.975 11.975z"
        opacity={0.1}
      />
      <path
        d="M818.016 531.776h74.841v74.072a9.75 9.75 0 01-9.75 9.75h-55.341a9.75 9.75 0 01-9.75-9.75v-74.072z"
        fill={color}
      />
      <path fill="#e0e0e0" d="M0 615.598h971.44v32.93H0z" />
      <path
        d="M753.25 514.265c-10.412-37.792-69.439-65.389-113.851-71.508.006-.279.02-.555.02-.836v-32.35c.048-.017.097-.032.144-.05v-1.225a110.94 110.94 0 0067.01-70.232 119.882 119.882 0 007.15-15.416c4.741-1.726 8.322-9.544 8.322-18.938a33.07 33.07 0 00-1.338-9.496 121.528 121.528 0 00.889-14.419 120.18 120.18 0 00-39.697-89.382 23.448 23.448 0 00.375-5.877c-1.004-15.528-17.589-26.076-33.132-26.782a32.8 32.8 0 005.531-34.636c-9.911 14.439-30.258 15.974-47.772 16.087 7.557-2.926 10.958-13.397 6.563-20.205-18.304 24.534-53.985 29.077-75.756 50.594a63.863 63.863 0 00-11.78 16.066 120.24 120.24 0 00-45.32 94.135 121.556 121.556 0 00.873 14.29 32.964 32.964 0 00-1.38 9.625c0 9.437 3.614 17.28 8.388 18.957a119.884 119.884 0 007.183 15.467 110.917 110.917 0 0066.54 69.985v33.802c0 .26.015.517.02.776-44.58 6.014-104.079 33.828-114.398 71.924-8.91 32.899-18.423 69.028-23.156 90.24 40.568 28.506 125.693 45.244 179.04 45.244 50.688 0 133.534-15.107 172.908-41.063-4.265-23.308-14.078-61.024-23.377-94.777z"
        transform="translate(-114.28 -119)"
        fill="url(#Designer_svg__b)"
        opacity={0.7}
      />
      <path
        d="M489.33 521.722c48.896 0 128.815-14.574 166.797-39.613-4.114-22.484-13.58-58.867-22.55-91.428-11.424-41.468-83.527-70.216-126.54-70.216h-41.449c-43.146 0-115.353 28.915-126.633 70.56-8.597 31.736-17.773 66.589-22.339 87.052 39.135 27.498 121.252 43.645 172.715 43.645z"
        fill={color}
      />
      <circle cx={486.807} cy={164.497} r={116.236} fill="#72351c" />
      <path
        d="M449.291 261.311h74.479v59.583a37.24 37.24 0 01-37.24 37.24 37.24 37.24 0 01-37.239-37.24v-59.583z"
        opacity={0.1}
      />
      <path
        d="M459.974 258.553h53.113a10.683 10.683 0 0110.683 10.683v48.9a37.24 37.24 0 01-37.24 37.239 37.24 37.24 0 01-37.239-37.24v-48.9a10.683 10.683 0 0110.683-10.682z"
        fill="#fda57d"
      />
      <path
        d="M449.43 289.434a107.19 107.19 0 0074.478.206v-9.15h-74.479z"
        opacity={0.1}
      />
      <circle cx={486.807} cy={187.668} r={106.753} fill="#fda57d" />
      <path
        d="M410.766 90.565s44.99 91.323 171.902 38.275l-29.546-46.333-52.376-18.802z"
        opacity={0.1}
      />
      <path
        d="M410.766 89.222s44.99 91.323 171.902 38.275l-29.546-46.333-52.376-18.802z"
        fill="#72351c"
      />
      <path
        d="M410.367 83.052a61.67 61.67 0 0115.285-24.862c21.002-20.757 55.422-25.14 73.08-48.806 4.239 6.567.958 16.668-6.331 19.49 16.894-.109 36.522-1.59 46.083-15.518a31.642 31.642 0 01-5.336 33.412c14.995.681 30.993 10.857 31.962 25.835.646 9.98-5.61 19.427-13.811 25.15s-18.121 8.35-27.886 10.502c-28.505 6.285-131.647 32.627-113.046-25.203zM593.556 188.602h-2.83l-55.063 49.02c-53.047-24.846-91.994 0-91.994 0l-57.748-47.005-5.823.732a106.75 106.75 0 00213.458-2.747zm-106.911 67.82c-20.768 0-37.604-4.208-37.604-9.4s16.836-9.4 37.604-9.4 37.603 4.208 37.603 9.4-16.836 9.4-37.603 9.4z"
        fill="#72351c"
      />
      <ellipse cx={380.011} cy={187.566} rx={9.93} ry={18.62} fill="#fda57d" />
      <ellipse cx={593.545} cy={187.566} rx={9.93} ry={18.62} fill="#fda57d" />
      <rect
        x={279.158}
        y={377.704}
        width={413.124}
        height={237.894}
        rx={14.5}
        fill="url(#Designer_svg__c)"
        opacity={0.7}
      />
      <rect
        x={286.642}
        y={382.093}
        width={398.156}
        height={233.505}
        rx={26.835}
        fill="#535461"
      />
      <circle cx={485.72} cy={498.846} r={13.471} fill="#fff" />
      <path fill="#e0e0e0" d="M41.163 648.529h889.115V662H41.163z" />
      <path
        opacity={0.1}
        d="M41.163 648.529h889.115v4.49H41.163zM879.386 531.776v69.228a14.594 14.594 0 01-14.594 14.594h7.484a14.594 14.594 0 0014.594-14.594v-69.228z"
      />
      <path
        d="M832.785 475.98c-1.263.215-2.687.556-3.305 1.677-.982 1.78.797 3.787 2.42 5.01 3 2.259 6.16 4.478 8.2 7.631s2.678 7.554.45 10.576c-2.91 3.946-9.852 4.795-10.524 9.652-.432 3.118 2.264 5.778 4.995 7.343 6.742 3.862 15.432 4.892 20.315 10.935 2.02-4.154 6.539-6.555 11.042-7.58s9.183-.95 13.75-1.645c1.473-.225 3.134-.675 3.793-2.012 1.276-2.59-2.362-5.698-1.106-8.298.956-1.98 3.763-1.826 5.813-2.619 3.338-1.29 4.715-5.586 3.767-9.038s-3.623-6.148-6.437-8.36c-7.584-5.959-16.704-9.464-25.928-11.984-4.29-1.173-9.325-3.012-13.781-3.19-4.301-.17-9.207 1.173-13.464 1.901z"
        fill="#eee"
      />
    </svg>
  );
};

SvgDesigner.propTypes = {
  color: PropTypes.string
};
SvgDesigner.defaultProps = {
  color: "primary"
};
const MemoSvgDesigner = React.memo(SvgDesigner);
export default MemoSvgDesigner;
