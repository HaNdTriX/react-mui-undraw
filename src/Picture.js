import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgPicture = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1061 705.445"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1004.137 415.983c-73.185 137.149-151.077 281.474-337.44 281.474s-488.895-246.446-337.44-281.474c152.647-35.304 269.542-185.828 337.44-281.474 206.598-291.03 524.765-69.57 337.44 281.474z"
        fill={color}
      />
      <path fill="#3f3d56" d="M152 149.391h733.669v554.77H152z" />
      <path
        d="M620.337 436.175l1.618-1.849-15.05-23.328s-26.339-43.646-30.854-56.439c-2.316-6.562-6.214-9.753-9.464-11.31a4.419 4.419 0 00-1.824-2.235c-5.88-3.528-17.72-8.34-22.615-10.274l1.168-.637 3.763-2.258v3.01l19.565-2.257s5.268-.753-6.02-13.546c0 0-2.98-4.968-1.676-9.252a21.612 21.612 0 00.821-10.108c-2.528-14.107-12.45-42.154-51.068-24.286 0 0-10.963 3.654-11.52 18.086a24.95 24.95 0 00.643 6.293l-5.975 19.814c-2.308 3.716-4.485 7.51-6.442 11.425l-.035.069 12.04 1.505 14.18 2.363q-.458.849-.988 1.643s-20.34.885-28.618 9.163a7.85 7.85 0 00-.606.688c-3.75 1.198-9.095 4.286-14.444 12.104-9.783 14.298-35.369 36.874-23.328 48.162s44.398 18.813 44.398 18.813l.342-.616c1.388 4.792 3.64 10.258 7.036 12.437-9.142 24.766-29.609 74.006-20.923 77.728a55.804 55.804 0 005.79 1.972l-12.563 46.942-15.435 63.212h-3.378l-4.515 36.873s-12.04 19.566 6.02 17.308 12.04-22.576 12.04-22.576l4.516-7.525 1.505 15.803 1.505-.752v-17.308s8.278-7.525 0-21.823h-2.589c1.424-4.884 6.445-20.535 14.63-29.349 0 0 9.782-16.555 9.782-27.843l19.964-47.012a150.024 150.024 0 0032.804.007l3.67 40.985s-.752 36.121 0 44.399a147.875 147.875 0 01.143 17.492l-2.4-.184-3.762 42.14s-2.258 15.804 11.287 13.546 9.03-15.05 9.03-15.05V639.01l3.01-15.802-3.274-.252c2.304-8.45 11.86-45.485 8.542-66.723l4.375-46.87a52.303 52.303 0 006.16-4.3s8.278-74.5-24.833-98.58V387.67s3.43-3.005 3.816-10.305l21.77 35.89 29.348 33.112 3.453-3.946c4.607 12.661 20.222 22.065 22.885 16.739 2.435-4.869-11.86-18.1-17.42-22.985zm-126.703-24.771l1.897-3.416-32.358-15.803 20.644-15.482c.266.759.427 1.185.427 1.185s18.06 30.1 15.05 43.646c-.055.248-.123.522-.198.809a105.393 105.393 0 00-5.462-10.94z"
        opacity={0.2}
      />
      <path
        fill="#3f3d56"
        d="M482.814 318.74l27.091 4.515 9.03-42.894-21.823-9.03-14.298 47.409z"
      />
      <circle cx={520.064} cy={286.758} r={23.328} fill="#d0cde1" />
      <path
        d="M509.905 299.927s2.257 28.595-15.05 30.853 15.05 53.429 23.327 52.676 23.328-55.686 23.328-55.686-19.565-13.546-12.792-25.586zM480.933 404.15s3.01 21.823 12.04 21.823-6.02-24.833-6.02-24.833zM612.623 425.974s22.576 18.813 19.566 24.833-22.576-6.773-24.08-21.823zM476.417 498.215l-14.297 53.43-15.803 64.716h15.05s5.268-20.318 15.05-30.854c0 0 9.783-16.555 9.783-27.843l23.328-54.934zM538.124 501.225l4.515 50.42s-.752 36.12 0 44.398a165.96 165.96 0 010 20.318h13.545s12.793-44.399 9.03-68.48l5.268-56.438z"
        fill="#d0cde1"
      />
      <path
        d="M520.064 362.762s-20.275-16.067-15.03-38.51c0 0-20.339.884-28.617 9.162s2.258 36.12 2.258 36.12 18.06 30.101 15.05 43.647-35.368 85.034-24.833 89.55 74.5 20.317 106.858-6.02c0 0 8.278-74.5-24.833-98.58v-18.814s6.02-5.267 3.01-18.813c0 0 12.793-23.328 5.268-27.843s-24.812-11.132-24.812-11.132 1.483 33.708-14.32 41.233z"
        fill="#3f3d56"
      />
      <path
        d="M480.933 333.414s-9.783-1.505-19.566 12.793S426 383.08 438.04 394.367s44.399 18.814 44.399 18.814l7.525-13.546-32.358-15.803 27.09-20.318zM555.432 333.414s10.535 0 15.05 12.793 30.854 56.438 30.854 56.438l15.05 23.329-10.535 12.04-29.349-33.111-27.843-45.904zM464.377 614.856h-21.07l-4.515 36.873s-12.04 19.566 6.02 17.308 12.04-22.576 12.04-22.576l4.515-7.525 1.505 15.803 1.505-.752v-17.308s8.278-7.525 0-21.823zM559.947 614.856l-19.565-1.505-3.763 42.14s-2.258 15.804 11.288 13.546 9.03-15.05 9.03-15.05v-23.328zM503.132 263.053s-10.963 3.655-11.52 18.086a25.597 25.597 0 00.761 6.853c.618 2.616 1.014 8.245-3.77 15.602a154.436 154.436 0 00-8.765 15.077l-.034.069 12.04 1.505 2.56-19.958a99.381 99.381 0 017.892-28.018l.083-.186s5.268 9.783 15.803 9.783l-3.762-3.762s16.555 6.772 22.575 6.772c0 0 4.515 3.01 0 7.525s-13.545 15.05-8.277 23.328.752 10.536.752 10.536l8.278-4.515 3.762-2.258v3.01l19.566-2.257s5.267-.753-6.02-13.546c0 0-2.981-4.968-1.677-9.252a21.612 21.612 0 00.822-10.108c-2.53-14.107-12.45-42.154-51.07-24.286z"
        fill="#3f3d56"
      />
      <path
        opacity={0.2}
        d="M652.22 305.416l-26.244 92.405 12.722 3.613-9.699 34.149 43.848-24.45 129.232 36.704 26.244-92.404-176.103-50.017z"
      />
      <path
        fill="#3f3d56"
        d="M827.627 348.472l-176.103-50.016-26.245 92.404 12.723 3.613-9.699 34.15 43.848-24.451 129.232 36.704 26.244-92.404z"
      />
      <path
        d="M720.836 389.445l3.903-1.92c13.913-6.998 23.065-11.505 25.392-19.696a12.114 12.114 0 00-8.418-15.203 13.177 13.177 0 00-10.928 1.788 13.177 13.177 0 00-8.356-7.266 12.114 12.114 0 00-15.153 8.51c-2.326 8.191 3.091 16.836 11.249 30.101z"
        fill={color}
      />
      <circle cx={294.696} cy={270.508} r={11.833} opacity={0.2} />
      <circle cx={355.255} cy={390.233} r={9.049} opacity={0.2} />
      <circle cx={283.559} cy={485.596} r={7.657} opacity={0.2} />
      <circle cx={292.608} cy={265.635} r={11.833} fill="#d0cde1" />
      <circle cx={353.167} cy={385.361} r={9.049} fill="#d0cde1" />
      <circle cx={280.775} cy={480.724} r={7.657} fill="#d0cde1" />
      <path
        d="M998.432 155.654a121.929 121.929 0 01-28.259 78.262 122.085 122.085 0 01-84.504 37.897v5.958q-4.824.395-9.743.39a122.508 122.508 0 01-122.517-122.507q0-3.147.158-6.263h5.41a121.987 121.987 0 0128.259-78.262 122.517 122.517 0 01211.196 84.525z"
        opacity={0.2}
      />
      <path
        d="M1004 149.39a122.476 122.476 0 01-118.331 122.423 91.328 91.328 0 01-4.176.084A122.507 122.507 0 111004 149.391zM39 703.445h1005v2H39zM94.614 344.445h2v357.65h-2z"
        fill="#3f3d56"
      />
      <ellipse cx={96} cy={582.445} rx={39} ry={89} fill="#3f3d56" />
      <ellipse cx={96} cy={379.445} rx={39} ry={89} fill="#3f3d56" />
      <path
        d="M96.958 306.732l-1.916-.575c.121-.404 11.879-40.696-7.427-66.635C76.71 224.872 57.999 217.445 32 217.445v-2c26.67 0 45.923 7.701 57.225 22.89 19.903 26.752 7.857 67.984 7.733 68.397z"
        fill="#3f3d56"
      />
      <circle cx={32} cy={216.445} r={25} fill={color} />
      <path
        d="M334.363 114.21a12 12 0 1112-12 12.013 12.013 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10zM963 372.445h-26v-26h26zm-24-2h22v-22h-22zM26 492.445H0v-26h26zm-24-2h22v-22H2z"
        fill="#3f3d56"
      />
      <path
        d="M931.14 225.31a90.083 90.083 0 01-89.17 5.194l1.987-4.052a86.198 86.198 0 10-48.149-74.653l-4.51.138A90.715 90.715 0 11931.14 225.31z"
        fill="#fff"
      />
      <path
        d="M890.317 143.698c-13.345 2.954-31.106 4.754-44.048 2.874l16.246 12.372-45.48 29.333 2.446 3.793 45.48-29.334 4.572 19.906c3.626-12.564 12.591-28.002 20.784-38.944z"
        fill="#fff"
      />
      <path
        d="M815.552 613.222c.033 67.244-39.932 90.74-89.24 90.763q-1.718.001-3.419-.036-3.428-.073-6.784-.31c-44.504-3.129-79.094-27.793-79.124-90.33-.032-64.717 82.642-146.43 88.842-152.471.006 0 .006 0 .011-.006l.356-.345s89.325 85.497 89.358 152.735z"
        fill={color}
      />
      <path
        d="M723.058 693.701l32.632-45.641-32.712 50.65-.085 5.239q-3.428-.073-6.784-.31l3.485-67.272-.027-.52.06-.1.33-6.356-32.843-50.744 32.94 45.982.083 1.348 2.633-50.828-28.12-52.44 28.461 43.508 2.716-105.38.01-.35.001.345-.42 83.103 27.948-32.959-28.065 40.116-.718 45.51 26.102-43.687-26.202 50.378-.4 25.307 37.881-60.813-38.024 69.64z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgPicture.propTypes = {
  color: PropTypes.string
};
SvgPicture.defaultProps = {
  color: "primary"
};
const MemoSvgPicture = React.memo(SvgPicture);
export default MemoSvgPicture;
