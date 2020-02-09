import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgGoogleAnalytics = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1099.223 734.892"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M1083.038 286.728C1041.411 123.042 897.578 4.883 728.748.144 639.493-2.36 545.57 27.241 477.189 130.83c-122.24 185.175 7.512 313.136 97.972 373.941a566.027 566.027 0 01116.995 105.156c61.103 72.507 178.65 162.608 318.643 21.434 101.467-102.324 99.967-235.6 72.24-344.632z"
        fill="#f2f2f2"
      />
      <ellipse cx={942} cy={712.392} rx={156} ry={22.5} fill="#3f3d56" />
      <path fill="#3f3d56" d="M0 77.999h810v491.786H0z" />
      <circle cx={13.08} cy={89.751} r={5.848} fill={color} />
      <circle cx={28.025} cy={89.751} r={5.848} fill={color} />
      <circle cx={42.969} cy={89.751} r={5.848} fill={color} />
      <circle cx={151.423} cy={191.905} r={68.705} fill="#f2f2f2" />
      <path fill={color} d="M7.232 289.539h288.382v9.944H7.232z" />
      <path
        fill="#f2f2f2"
        d="M7.232 384.461h288.382v9.944H7.232zM7.232 412.486h288.382v9.944H7.232zM7.232 440.51h288.382v9.944H7.232zM7.232 468.535h288.382v9.944H7.232zM7.232 496.559h288.382v9.944H7.232zM7.232 524.584h288.382v9.944H7.232z"
      />
      <path
        fill={color}
        d="M341.719 122.296h460.145v1.808H341.719zM341.719 140.376h460.145v1.808H341.719zM341.719 158.457h460.145v1.808H341.719zM341.719 176.537h460.145v1.808H341.719zM341.719 194.617h460.145v1.808H341.719zM341.719 212.698h460.145v1.808H341.719zM341.719 230.778h460.145v1.808H341.719zM341.719 248.858h460.145v1.808H341.719zM341.719 266.939h460.145v1.808H341.719zM341.719 285.019h460.145v1.808H341.719zM341.719 303.099h460.145v1.808H341.719zM349.855 277.787h30.737v7.232h-30.737z"
      />
      <path
        fill={color}
        d="M399.576 260.611h30.737v7.232h-30.737zM449.297 224.45h30.737v7.232h-30.737zM499.018 241.626h30.737v7.232h-30.737zM548.739 206.37h30.737v7.232h-30.737zM598.46 241.626h30.737v7.232H598.46zM648.181 188.289h30.737v7.232h-30.737zM697.902 153.033h30.737v7.232h-30.737zM747.623 171.113h30.737v7.232h-30.737z"
      />
      <path
        fill={color}
        opacity={0.1}
        d="M747.623 176.537v72.773h-18.985v-92.661h-30.736v92.661h-18.985v-57.405h-30.736v57.405h-68.706v-39.324h-30.736v39.324h-50.173v17.629h-18.533v-38.873h-30.736v38.873h-49.721v18.08h-49.721v19.889h428.504V176.537h-30.736z"
      />
      <path
        d="M468.542 370.923a12.539 12.539 0 00-.82-3.138 1.42 1.42 0 00-.722-.889 1.488 1.488 0 00-.716-.008l-3.678.563a1.41 1.41 0 00-.84.326c-.478.504-.007 1.315-.021 2.01a1.89 1.89 0 01-1.464 1.626 5.534 5.534 0 01-2.327-.029l-5.143-.8a8.48 8.48 0 003.891-2.596c.677-.801 1.037-2.298.059-2.678a2.402 2.402 0 00-.894-.072c-2.33.018-4.163-1.927-6.345-2.747a7.016 7.016 0 00-7.896 2.354l2.74.132a1.216 1.216 0 01.73.195c.6.493-.146 1.44-.062 2.213.11 1.004 1.443 1.218 2.447 1.32s2.28.917 1.796 1.804c-5.049 1.74-10.187-3.4-15.49-2.767a31.47 31.47 0 00-3.919 1.019c-8.004 2.025-16.278-3.378-24.455-2.234a31.053 31.053 0 00-5.338 1.408 7.197 7.197 0 00-3.082 1.608 2.47 2.47 0 00-.35 3.182 17.913 17.913 0 01-6.278-.596 3.517 3.517 0 011.808 3.1 37.246 37.246 0 00-9.542 2.908 16.07 16.07 0 001.975 2.631l-4.173 2.681a2.382 2.382 0 011.319 3.479c1.462-.65 2.368-2.333 3.931-2.674a5.298 5.298 0 013.038.589 4.746 4.746 0 003.046.48c1.005-.296 1.747-1.6 1.108-2.43a52.04 52.04 0 0113.22-2.066 1.658 1.658 0 011 .19c.583.404.43 1.278.398 1.986s.521 1.64 1.154 1.32c-.745.647-.108 1.863.607 2.543s1.577 1.617 1.139 2.5c-.114.231-.308.416-.418.648-.324.687.19 1.488.798 1.945a6.804 6.804 0 011.774 1.406c.422.632.23 1.738-.524 1.826l-2.145-2.723a5.584 5.584 0 00-1.45 2.746 5.761 5.761 0 01.713 7.88 19.69 19.69 0 01-3.564 2.73 4.898 4.898 0 00-2.323 3.663c.006 2.594-.206 5.003.766 7.408a114.116 114.116 0 006.195 12.925c.613 1.097 1.405 2.298 2.646 2.487q-2.353-5.73-4.237-11.638a2.668 2.668 0 012.243.73 4.649 4.649 0 01.435 1.961 6.074 6.074 0 00.774 1.821l7.493 13.348a5.523 5.523 0 002.521 2.742 14.258 14.258 0 012.336.645c.548.323.916.897 1.475 1.202 1.578.86 3.773-.79 5.248.237a14.766 14.766 0 011.079 1.098c1.362 1.18 3.597.39 5.17 1.27a6.11 6.11 0 012.08 2.73c1.354 2.575 3.545 5.098 6.447 5.303a17.974 17.974 0 012.734.095c.891.202 1.769.98 1.625 1.883-.245 1.547.52 3.242.314 4.795-.374 2.83-4.387 4.073-4.732 6.906a16.025 16.025 0 01-.105 1.868c-.18.744-.74 1.35-.938 2.09-.376 1.401.628 2.796 1.731 3.74s2.42 1.755 3.023 3.075c.637 1.396.324 3.023.531 4.543.453 3.318 3.319 5.778 6.269 7.364a6.548 6.548 0 012.445 1.79c.76 1.094.683 2.536.937 3.844.62 3.202 3.316 5.84 3.393 9.101.054 2.318-1.234 4.42-2.004 6.607a15.408 15.408 0 001.259 12.779 20.466 20.466 0 011.671 2.942c.727 1.88.491 4.019 1.161 5.92.886 2.514 3.32 4.59 3.087 7.246 1.106 2.295 3.546 3.423 6 4.106l4.398 1.224a5.651 5.651 0 002.58.301 1.936 1.936 0 001.653-1.755 16.07 16.07 0 01-6.16-2.318c-1.778-1.315-2.996-3.655-2.321-5.76.312-.977.978-2.104.345-2.91-.362-.463-1.024-.583-1.433-1.005a2.191 2.191 0 01.04-2.554 8.624 8.624 0 001.305-2.398 2.502 2.502 0 00-1.173-2.602 6.218 6.218 0 002.177-1.397 2.122 2.122 0 00.387-2.405c1.337.17 2.916.253 3.794-.77a3.398 3.398 0 00.376-3.079 13.147 13.147 0 01-.76-3.127 56.98 56.98 0 009.244-.313 5.994 5.994 0 00-2.81-3.52c1.39-.235 2.655-1.899 3.094-3.238a8.33 8.33 0 00.056-4.18 2.243 2.243 0 01-.042-1.096 2.135 2.135 0 011.1-1.063l6.897-3.96a4.017 4.017 0 001.102-.815 3.277 3.277 0 00.246-3.181 15.98 15.98 0 01-1.105-3.146c-.426-3.306 3.113-5.679 4.307-8.791a13.246 13.246 0 00.655-3.854c.098-1.402.105-3.03-.971-3.934-1.032-.865-2.644-.672-3.724-1.478-.99-.738-1.33-2.172-2.412-2.769-.982-.541-2.213-.197-3.306-.452-1.923-.448-3.133-2.665-5.096-2.87-1.109-.115-2.363.426-3.27-.22-.801-.568-.833-1.71-.985-2.68a7.488 7.488 0 00-6.044-6.064c-1.143-.183-2.386-.113-3.358-.741-.984-.636-1.435-1.826-2.208-2.706-1.246-1.42-3.209-1.924-5.047-2.356l-7.477-1.757c-1.327-.312-3.038-.478-3.75.685a5.374 5.374 0 00-.444 1.395 4.321 4.321 0 01-4.064 3.059 4.806 4.806 0 00-2.833-2.193 17.657 17.657 0 01-2.293-.546 3.22 3.22 0 01-1.398-4.467 4.009 4.009 0 00-.685-4.823 6.507 6.507 0 00-4.816-1.303c-.446-.974.3-2.073 1.105-2.781s1.782-1.405 1.957-2.462c.276-1.663-1.847-2.927-3.458-2.43s-2.64 2.06-3.32 3.603a10.61 10.61 0 01-1.337 2.564 2.627 2.627 0 01-2.543 1.041c-1.327-.339-1.84-1.915-2.133-3.253a21.157 21.157 0 01-.708-5.45 7.126 7.126 0 012.055-4.962c2.206-2.025 5.59-1.827 8.566-1.504a2.175 2.175 0 01.223-2.873 3.267 3.267 0 012.961-.728 4.08 4.08 0 012.294 1.372c.846 1.031 1.086 2.424 1.726 3.594s2.077 2.17 3.254 1.541c1.016-.542 1.177-1.952.924-3.075a11.565 11.565 0 01-.698-3.366c.175-2.191 2.446-3.51 4.45-4.413s4.3-2.116 4.618-4.291a3.913 3.913 0 01.238-1.247 2.446 2.446 0 01.897-.844c5.85-3.866 11.798-7.78 18.484-9.892.348-.11.389.012.743-.074.497-.287.168-1.08-.308-1.4s-1.111-.564-1.232-1.125c-.089-.411.154-.816.217-1.232a1.539 1.539 0 00-2.02-1.56c-.538-.71.525-1.537 1.384-1.774a37.611 37.611 0 017.902-1.291 1.423 1.423 0 01.9.153 1.075 1.075 0 01.073 1.468 8.637 8.637 0 01-1.21 1.098 3.3 3.3 0 00-.856 3.32c1.395.71 2.912 1.44 4.457 1.19s2.917-1.986 2.19-3.373c-.676-1.291-2.707-1.582-3.057-2.997-.409-1.657 1.937-3.13 1.408-4.753-.231-.711-.94-1.13-1.483-1.643a4.456 4.456 0 01-.975-4.941 5.622 5.622 0 01-4.931-1.543c-1.18-1.19-2.12-3.068-3.795-3.015-1.537.05-2.86 1.842-4.298 1.295-.353-.134-.726-.408-1.069-.248a.883.883 0 00-.398.662c-.366 1.746.263 3.735-.689 5.244-1.036 1.642-3.43 1.87-4.686 3.35-.682.804-.946 1.887-1.572 2.734s-1.956 1.386-2.708.648a3.732 3.732 0 00-1.013-4.538 9.958 9.958 0 00-2.24-1.09 13.28 13.28 0 01-2.501-1.394 2.464 2.464 0 01-.919-.982 2.24 2.24 0 01.063-1.554 6.354 6.354 0 015.056-4.191c1.001-.136 2.166-.088 2.829-.851.35-.404.534-1.014 1.043-1.178a1.539 1.539 0 01.963.12l3.735 1.314a2.622 2.622 0 001.331.22.902.902 0 00.78-.948c-.119-.62-1.074-.918-.987-1.544a1.03 1.03 0 01.313-.526 13.356 13.356 0 0110.593-4.183c.472.775-.274 1.692-.895 2.353s-1.119 1.842-.368 2.351a2.057 2.057 0 00.994.224 8.685 8.685 0 012.648.803q1.936.843 3.798 1.844a4.816 4.816 0 01.096-2.446 1.656 1.656 0 011.962-1.068c.743.288 1.123 1.27 1.914 1.36 1.055.12 1.471-1.438 1.03-2.404s-1.313-1.774-1.385-2.833c-.05-.715.222-1.601-.348-2.034a1.554 1.554 0 00-.674-.236l-14.251-2.622c-.846-.156-2.069-.037-2.107.823-.02.48.408.954.218 1.396-.202.47-.868.427-1.353.594a1.85 1.85 0 00-1.057 1.944 5.409 5.409 0 00.892 2.19c-.927-.387-2.33-.459-3.257-.846zM457.17 358.825a4.615 4.615 0 00-5.068 1.518 1.015 1.015 0 00-.236 1.07c.282.48 1 .29 1.529.118a3.847 3.847 0 012.414-.057c.497.17.941.472 1.44.636a1.45 1.45 0 001.479-.216 1.925 1.925 0 00.364-1.382 1.111 1.111 0 00-.283-.913 1.452 1.452 0 00-.654-.193 2.255 2.255 0 01-1.32-.771M462.31 357.394a1.174 1.174 0 00-1.135 1.654 4.758 4.758 0 001.897.124 1.622 1.622 0 001.326-1.216 3.053 3.053 0 01-2.161-.413M479.55 355.005a21.825 21.825 0 00-4.864 1.653 3.655 3.655 0 012.334 3.67 1.912 1.912 0 00.022.909c.179.433.697.595 1.152.706a7.593 7.593 0 002.526.323 2.573 2.573 0 002.09-1.278 9.105 9.105 0 01.435-1.028c1.091-1.661 4.332.348 5.504-1.258.413-.566.375-1.417.913-1.866a2.05 2.05 0 01.938-.358 65.901 65.901 0 017.128-1.015c1.134-.099 2.612-.506 2.621-1.644a19.744 19.744 0 00-12.595 1.695c-1.404.703-3.26 2.182-4.613 1.25-.507-.35-.481-1.29-1.178-1.682a3.553 3.553 0 00-2.412-.077z"
        fill="#f2f2f2"
      />
      <path
        d="M493.516 357.617l2.004.385a2.598 2.598 0 00-2.703 2.815c1.877.627 3.924.017 5.901.1s4.278 1.496 3.94 3.446c-.101.59-.442 1.179-.265 1.75a6.515 6.515 0 00.677 1.054 2.36 2.36 0 01-.441 2.44c-.525.7-1.23 1.257-1.69 2-1.147 1.848-.496 4.236.187 6.3a5.554 5.554 0 001.068 2.133c1.01 1.075 2.658 1.168 4.134 1.19 1.074.015 2.304-.038 2.984-.87.886-1.086.266-2.781.85-4.056.53-1.158 1.881-1.655 3.105-2.007a46.462 46.462 0 006.647-2.17c2.632-1.21 5.092-3.097 7.985-3.253a10.961 10.961 0 002.425-.17 1.844 1.844 0 001.466-1.71c-.05-.692-.637-1.2-1.095-1.723s-.817-1.325-.397-1.877l7.584-1.417c-.538-1.465-.957-3.394.279-4.347.445-.344 1.042-.482 1.421-.898a1.84 1.84 0 00-.425-2.533 4.87 4.87 0 00-2.712-.822 72.774 72.774 0 00-10 .089l-19.537 1.07a14.275 14.275 0 00-4.027.41 18.585 18.585 0 01-2.906 1.318c-2.15.451-4.515.146-6.46 1.353zM529.426 373.461a.807.807 0 00-.583.132.737.737 0 00-.19.45 2.971 2.971 0 00.432 2.127 2.082 2.082 0 001.906.914c.903-.115 1.568-.885 2.397-1.261 1.28-.579 6.71-1.48 2.954-3.51-1.295-.7-2.132-.082-3.152.378a7.172 7.172 0 01-3.764.77zM562.335 356.47a2.145 2.145 0 00-1.044.91.917.917 0 00.344 1.215 1.368 1.368 0 00.511.081l1.784.054c.758.022 1.705.184 1.908.914.151.542-.187 1.239.221 1.627a1.15 1.15 0 00.607.236 4.135 4.135 0 001.798.058c1.297-.348.615-1.14 1.024-1.845.626-1.08.517-.426 1.62-1.045.813-.457 1.865-1.285 1.186-2.45-1.181-2.024-8.216-.624-9.96.246zM597.543 355.453l-1.036.138a41.724 41.724 0 00-6.934 1.328 11.542 11.542 0 003.037.745 9.33 9.33 0 011.7.242c.995.296 1.996 1.06 2.956.668.595-.243.79-.862 1.282-1.19.34-.228 1.632-.595 1.776-.824 1.167-1.85-1.884-1.227-2.78-1.107zM602.092 360.16a19.427 19.427 0 00-3.823 2.8 2.314 2.314 0 00-.94 1.693c.059.886 1.003 1.4 1.82 1.746l3.311 1.402c.402-.567.034-1.348-.38-1.905s-.91-1.2-.726-1.87c.21-.763 1.141-1.024 1.922-1.155 1.273-.215 4.707-.198 4.294-2.249-.486-2.417-4.2-1.176-5.478-.461zM601.426 496.944a3.16 3.16 0 00.2 2.785 2.821 2.821 0 002.896 1 5.217 5.217 0 002.688-1.728 9.259 9.259 0 001.547-2.372 18.512 18.512 0 001.146-4.194l1.028-5.398c.23-1.206.221-4.905-1.996-3.7-.606.33-2.009 2.929-2.643 3.666-1.145 1.328-1.296 2.617-1.898 4.227-.755 2.015-2.27 3.695-2.968 5.714zM718.54 524.568a16.165 16.165 0 01-2.108-1.003 17.76 17.76 0 00-1.068 5.821l4.965-2.809c.747-.423 1.593-1.01 1.577-1.868a.591.591 0 00-.274-.537.67.67 0 00-.348-.041 8.404 8.404 0 00-2.102.675 2.566 2.566 0 01-2.144.012M744.73 526.236a10.747 10.747 0 00-1.592.571c-1.14.58-1.915 1.681-2.94 2.445a11.662 11.662 0 01-3.322 1.521.796.796 0 00.186 1.174 2.303 2.303 0 001.311.295 6.925 6.925 0 003.53-.544 11.127 11.127 0 001.66-1.318 17.593 17.593 0 014.182-2.365 4.8 4.8 0 001.457-.871c.922-.908.986-2.309-.342-2.618-1.074-.25-3.108 1.38-4.13 1.71zM756.302 518.677a4.142 4.142 0 00-1.267-3.394 6.455 6.455 0 01-.755 3.615c-.5.737-1.286 1.234-1.835 1.936a1.885 1.885 0 00-.148 2.428 2.412 2.412 0 001.43.493c1.28.15 2.763.235 3.662-.691.49-.505.729-1.254 1.327-1.625a1.615 1.615 0 00.583-.417c.247-.392-.146-.91-.588-1.051s-.928-.075-1.372-.21-.852-.633-.624-1.037M735.735 472.853a5.76 5.76 0 01-2.055.121 7.444 7.444 0 01-2.95-1.774 13.009 13.009 0 00-7.6-2.656c-2.503-.047-5.029.631-7.486.158a2.953 2.953 0 001.74 1.961c.815.398 1.715.598 2.535.989a6.052 6.052 0 012.931 3.05 8.61 8.61 0 00.83 1.823 4.208 4.208 0 003.732 1.251c1.782-.117 3.643-.63 5.3.034a13.612 13.612 0 013.235 2.481c1.06.863 2.55 1.504 3.766.881a6.226 6.226 0 01-4.308-5.991c1.193.11 4.628.067 4.443-1.959-.157-1.717-3.09-.554-4.113-.369zM720.134 486.825c.212-1.162 1.37-2.187 1.01-3.311a2.038 2.038 0 00-1.967-1.18c-.816-.02-1.618.224-2.434.247a11.862 11.862 0 00-1.594.022c-1.62.267-2.618 1.964-4.145 2.568a25.188 25.188 0 01-2.936.55c-2.192.577-3.578 2.648-5.11 4.317a18.235 18.235 0 01-9.256 5.398 8.452 8.452 0 00-3.576 1.282c-1.311 1.072-1.634 2.909-1.926 4.577a75.6 75.6 0 01-3.68 13.51l5.203.665a7.073 7.073 0 002.968-.043 8.615 8.615 0 001.952-1.04 19.487 19.487 0 017.613-2.748 8.083 8.083 0 014.07.285 3.785 3.785 0 012.483 3.026 3.197 3.197 0 013.195.777 5.554 5.554 0 011.526 3.045c.137.712.274 1.565.934 1.864.54.243 1.158-.02 1.747-.066 2-.16 3.66 2.172 5.627 1.77 2.11-.43 2.627-3.588 4.684-4.221 1.182-.363 2.84.078 3.405-1.02.499-.97-.496-2.088-.394-3.172.127-1.336 1.702-1.903 2.917-2.473a9.095 9.095 0 004.145-11.757c-1.202-2.463-3.568-4.402-4.004-7.107-.337-2.082.484-4.51-.843-6.148-.675-.833-1.818-1.293-2.22-2.288a11.277 11.277 0 01-.288-1.998c-.136-.66-.713-1.353-1.366-1.181-1.895.497-2.5 6.353-3.515 7.776a2.354 2.354 0 01-4.225-1.926zM685.095 475.066a3.052 3.052 0 00-1.976-.101c-.62.26-.983 1.17-.485 1.623a66.9 66.9 0 0111.683.227c4.452.61 8.859 2.12 13.33 1.675a67.843 67.843 0 00-7.776-1.804l-4.377-.836a33.848 33.848 0 00-3.555-.55c-2.498-.206-4.388.454-6.844-.234zM688.997 461.492c-.324-.027-.724-.05-.892.228-.16.266.023.617-.063.915-.117.407-.65.511-1.07.456a2.051 2.051 0 00-1.247.014 1.057 1.057 0 00-.409 1.2 3.09 3.09 0 00.72 1.149 11.736 11.736 0 001.87 1.875c1.34.99 3.155 1.466 3.999 2.901a1.925 1.925 0 00.534.719 1.484 1.484 0 001.369-.138l1.528-.699a1.736 1.736 0 00.715-.486 1.57 1.57 0 00-.159-1.658 2.85 2.85 0 01-.605-1.624c.112-1.043 1.454-1.442 2.006-2.335.556-.9.194-2.06.258-3.116.075-1.234.85-2.84-.398-3.763-1.06-.785-2.075-.06-2.837.806-1.606 1.825-2.366 3.803-5.319 3.556zM698.275 443.04c.522 1 1.61 1.596 2.18 2.569.616 1.055.546 2.417 1.215 3.44.686 1.049 2.068 1.605 2.453 2.798.42 1.303-.533 2.886.227 4.024a1.689 1.689 0 002.477.228 1.817 1.817 0 00-.075-2.536c-.45-.41-1.096-.588-1.472-1.067a2.24 2.24 0 01-.381-.929 6.078 6.078 0 01.095-2.913 1.296 1.296 0 00.074-.762c-.17-.491-.836-.526-1.303-.754-1.061-.519-1.036-2.017-.85-3.183-.124.776-2.89-.545-3.18-.985-.575-.874-.262-2.56-.376-3.525a2.745 2.745 0 00-1.084 3.595zM670.404 458.414c-.51-.572-1.28-1.17-1.964-.825a1.244 1.244 0 00-.462 1.534 3.375 3.375 0 001.114 1.328 38.882 38.882 0 014.208 3.606c2.227 2.447 3.407 5.75 5.83 8.005a3.27 3.27 0 001.835.993 1.427 1.427 0 001.58-1.09 2.079 2.079 0 00-.734-1.529c-.94-1.023-1.97-1.965-2.859-3.035a2.55 2.55 0 01-.73-1.526c-.005-.576.52-1.179 1.078-1.036-.679-.173-1.182-1.304-2.178-1.516-.832-.178-1.034.337-2.024-.088-1.89-.81-3.371-3.34-4.694-4.821zM714.791 402.754a15.643 15.643 0 01-1.595-.57c-1.403-.421-3.259.61-3.072 2.062.124.965 1.022 1.616 1.518 2.453a5.45 5.45 0 01.153 4.206 3.288 3.288 0 01-.53 1.197 4.053 4.053 0 01-1.257.904 16.81 16.81 0 00-4.919 4.179 1.204 1.204 0 00-.297.56c-.067.49.426.847.705 1.256.619.909.171 2.131.232 3.23a.913.913 0 00.385.8c.373.19.815-.132 1.018-.499.67-1.216.165-3.167 1.424-3.754.238-.11.527-.157.686-.367.252-.331.009-.823.137-1.22.191-.595 1.006-.622 1.631-.596a9.261 9.261 0 003.181-.423 2.118 2.118 0 001.053-.61 2.291 2.291 0 00.268-1.735 23.516 23.516 0 00-2.778-8.477 5.05 5.05 0 003.264-.313c.534-.323 1.175-1.288.91-1.945-.42-1.039-1.177-.164-2.117-.338zM573.004 419.128a4.26 4.26 0 01.03 2.141 1.464 1.464 0 01-1.656 1.046c-.536-.163-.846-.702-1.226-1.113-2.118-2.287-6.896-.963-8.205-3.792-.534-1.154-.17-2.537-.535-3.756a3.343 3.343 0 00-3.386-2.3 6.957 6.957 0 00-1.948.582 49.126 49.126 0 01-12.909 3.228 10.606 10.606 0 00-2.48.452 7.854 7.854 0 00-3.946 4.066 31.462 31.462 0 01-2.723 5.112 22.701 22.701 0 01-4.62 3.948 4.715 4.715 0 00-1.525 1.598 4.998 4.998 0 00-.306 2.374l.333 9.788a8.84 8.84 0 00.66 3.69c.704 1.407 2.094 2.328 3.058 3.57a6.995 6.995 0 011.451 4.468c-.02.648-.085 1.414.42 1.821a1.846 1.846 0 001.032.297l13.24 1.084c2.33.19 4.91.504 6.431 2.278.718.838 1.295 2.042 2.394 2.132a8.893 8.893 0 001.402-.193 3.443 3.443 0 012.894 1.804 8.001 8.001 0 011.286 5.134c-.109 1.135-.46 2.238-.536 3.375-.289 4.328 3.38 8.087 3.45 12.424.043 2.55-1.168 4.934-2.349 7.195 1.906 2.886.345 6.73 1.104 10.104.72 3.202 3.389 5.708 4.054 8.921.304 1.471.322 3.281 1.62 4.039a3.69 3.69 0 001.831.367 24.154 24.154 0 0011-2.504c1.603-.796 3.266-1.985 3.546-3.753.226-1.426-.498-3.021.238-4.264.868-1.464 3.09-1.348 4.366-2.473 2.071-1.826.456-5.31 1.295-7.94.754-2.364 3.35-3.62 4.637-5.742a10.205 10.205 0 001.078-2.92 41.657 41.657 0 001.096-7.448 44.642 44.642 0 01.337-4.562c1.387-8.62 9.908-14.391 12.675-22.671.264-.79.388-1.844-.316-2.292a2.015 2.015 0 00-1.34-.14l-6.103.77a4.202 4.202 0 01-2.258-.13 1.449 1.449 0 01-.826-1.865c1.037-1.878-1.095-4.25-2.043-6.175a91.12 91.12 0 00-9.074-14.715 1.496 1.496 0 01-.397-.864l1.732.058c-.585-2.099-1.55-4.395-3.588-5.162a8.933 8.933 0 00-3.647-.216 53.27 53.27 0 01-10.748-.876z"
        fill="#f2f2f2"
      />
      <path
        d="M583.755 371.844a5.916 5.916 0 003.277 2.18c2.348.3 4.036-2.127 5.11-4.236a2.07 2.07 0 002.16 1.915 4.263 4.263 0 001.624-.635 32.002 32.002 0 0115.161-3.92 1.637 1.637 0 011.25-1.8c1.078-.213 2.05.719 2.569 1.687a9.284 9.284 0 001.67 2.814c.826.724 2.425.693 2.751-.357.313-1.007-.736-1.866-1.608-2.46s-1.79-1.692-1.203-2.568a78.318 78.318 0 0113.491-2.172 5.65 5.65 0 002.271-.39 1.765 1.765 0 001.06-1.867 5.143 5.143 0 01-5.366-2.025c6.323-.521 13.048-.966 18.652 2.01.673 1.443-2.755 2.644-1.838 3.946a1.66 1.66 0 001.387.473 68.753 68.753 0 0011.66-.444 15.614 15.614 0 014.241-.344c2.353.29 4.365 1.86 6.68 2.372a3.574 3.574 0 002.793-.333 1.77 1.77 0 00.485-2.508c2.18-2.136 5.796-1.607 8.672-.584s5.599 2.672 8.642 2.9c2.182.163 4.395-.424 6.551-.05a40.778 40.778 0 013.94 1.207c2.505.7 5.155.553 7.756.586a54.338 54.338 0 0119.364 3.848 5.757 5.757 0 012.153 1.272 2.11 2.11 0 01.48 2.316l-6.37-.931c.6 1.182 2.152 1.383 3.414 1.79s2.568 1.801 1.81 2.888c-1.366-.435-2.604.932-3.295 2.189s-1.531 2.762-2.963 2.839c-1.283.068-2.833-1.024-3.67-.049a25.024 25.024 0 012.949 4.714c.826 1.72 1.414 3.888.298 5.436a1.409 1.409 0 01-.753.584c-.912.23-1.504-.885-2.158-1.56a7.83 7.83 0 00-3.185-1.493c-1.116-.4-2.29-1.185-2.378-2.367a4.727 4.727 0 01.62-2.098 8.084 8.084 0 00.614-3.626 4.118 4.118 0 00-1.058-2.731 2.12 2.12 0 00-2.722-.28c-.36.298-.647.774-1.113.792-.823.031-1.455-1.404-2.117-.914a2.25 2.25 0 01-.306 1.505c-1.977 1.72-5.013.992-7.561 1.6a14.192 14.192 0 00-3.45 1.506 2.22 2.22 0 00-.986.827 1.526 1.526 0 00.593 1.821 4.71 4.71 0 001.956.668c3.107.588 6.259 1.499 8.711 3.494s4.061 5.294 3.285 8.359l-6.126-5.854q.349 3.687.396 7.394a3.324 3.324 0 01-.194 1.422c-.437.965-1.62 1.29-2.658 1.502a2.082 2.082 0 00-1.598 2.668 8.699 8.699 0 002.129 3.07 5.897 5.897 0 011.78 3.246c.11 1.251-.835 2.662-2.088 2.575a2.754 2.754 0 01-2.06-1.778 11.3 11.3 0 00-1.256-2.555c-1.843-2.217-5.983-1.267-7.635-3.63a3.734 3.734 0 00-.772 3.553 1.957 1.957 0 012.397.665 16.379 16.379 0 011.303 2.38c.611 1.059 1.585 1.997 1.67 3.217a10.517 10.517 0 00.023 1.384 5.594 5.594 0 001.21 1.888 5.42 5.42 0 01.308 5.044 15.555 15.555 0 01-2.972 4.315 52.055 52.055 0 01-6.474 6.52 6.8 6.8 0 00-1.838 1.85 2.005 2.005 0 00.207 2.42c-.468.023-1.307.253-1.775.276a41.254 41.254 0 01-.107-5.643c-1.846-.887-3.833 1.487-3.595 3.52s1.71 3.667 2.757 5.426a6.41 6.41 0 011.08 4.263 3.134 3.134 0 01-3.065 2.707c-2.373-.207-3.366-3.614-5.716-4.004a.96.96 0 00-.618.062c-.349.191-.41.658-.43 1.055a13.1 13.1 0 00.583 5.777c1.114 2.63 3.991 4.84 3.388 7.633-3.252-1.512-4.943-5.158-5.71-8.661s-.896-7.18-2.272-10.491c-1.045 1.339-3.24.232-4.196-1.173-.905-1.332-1.462-2.873-2.34-4.223a5.19 5.19 0 00-3.832-2.633c-1.687-.078-3.15 1.08-4.436 2.173a10.341 10.341 0 00-2.762 3.077c-.9 1.81-.664 3.942-.708 5.962a9.103 9.103 0 01-1.997 6.086c-1.489 1.598-4.236 2.155-5.877.714a6.623 6.623 0 01-1.642-2.954 144.644 144.644 0 01-4.444-15.866c-.276 1.226-1.352 2.805-2.38 2.083a2.131 2.131 0 01-.548-.706c-1.918-3.25-5.468-5.2-9.056-6.368s-7.362-1.714-10.91-2.998a27.634 27.634 0 01-5.66-2.82 4.451 4.451 0 00-.271 4.554 3.627 3.627 0 004.092 1.713c.788-.252 1.453-.8 2.235-1.07a1.744 1.744 0 012.172.616c.327.721-.167 1.593.078 2.346.374 1.146 2.103 1.234 2.707 2.278a2.098 2.098 0 01-.562 2.433 10.181 10.181 0 01-2.283 1.405c-2.544 1.415-4.353 3.83-6.576 5.708s-5.36 3.25-8.01 2.045c.632-3.197-3.177-5.545-3.878-8.729-.23-1.048-.11-2.16-.44-3.182-.477-1.478-1.789-2.495-2.865-3.615a14.188 14.188 0 01-3.891-10.323 14.49 14.49 0 000-3.935 2.949 2.949 0 00-2.677-2.465c-3.005.132-6.79.356-8.367-2.206-.563-.914-.808-2.253.006-2.953a2.857 2.857 0 012.174-.374l6.77.666c1.584.156 3.296.284 4.655-.543s1.948-3.026.69-4c-.92-.711-2.567-.673-2.834-1.804-.223-.943.82-2.012.257-2.8-.404-.564-1.312-.407-1.863.016a11.93 11.93 0 01-1.565 1.363c-1.08.562-2.371.027-3.534-.337s-2.72-.394-3.284.685c-.63 1.208.56 2.79-.066 4-.828 1.599-3.63.688-4.791 2.064-1.334 1.58.907 3.933.457 5.95a3.704 3.704 0 01-3.649-.205 3.544 3.544 0 01-1.531-3.3c.11-.907.584-1.833.267-2.69a3.157 3.157 0 00-1.6-1.464l-6.579-3.636c-.61 1.133.162 2.538 1.127 3.39s2.176 1.491 2.81 2.612a3.429 3.429 0 01-1.29 4.52.792.792 0 01-.652.114.91.91 0 01-.423-.569c-1.16-2.97-2.904-5.9-5.69-7.452s-6.791-1.232-8.618 1.382c-.434.62-.726 1.329-1.104 1.985-2.008 3.488-6.315 5.14-10.338 5.032a2.053 2.053 0 01-1.128-.265c-.65-.45-.621-1.402-.522-2.186l.423-3.327a2.643 2.643 0 01.736-1.824c.745-.588 1.82-.217 2.77-.23a3.51 3.51 0 003.186-2.46 3.956 3.956 0 00-1.101-3.934c-.435-.408-1.02-.922-.79-1.473a1.218 1.218 0 01.854-.575c1.705-.495 3.507-.624 5.184-1.209a5.382 5.382 0 003.7-3.51c.121-.53.176-1.172.653-1.435a1.96 1.96 0 01.755-.155 3.675 3.675 0 003.152-3.83 2.398 2.398 0 012.707.448 7.618 7.618 0 002.409 1.644c1.763.48 3.466-1.081 5.293-1.088a6.82 6.82 0 002.286.008c.733-.264 1.17-.994 1.733-1.532s1.549-.868 2.068-.287l-.442-3.276a6.439 6.439 0 005.24-.947l-5.715-1.93a1.242 1.242 0 01-.534-.286c-.416-.448-.003-1.145.335-1.653.808-1.217.944-3.221-.385-3.827-.908-.413-1.949.083-2.82.569l-4.17 2.325c-.133.793.837 1.242 1.437 1.776a2.41 2.41 0 01-1.572 4.213 3.004 3.004 0 01.537 2.546l-2.806.202a1.216 1.216 0 01-.91-.178c-.3-.266-.26-.733-.33-1.129a2.45 2.45 0 00-2.055-1.794 7.23 7.23 0 00-2.874.265 1.715 1.715 0 01-1.235-.028 1.233 1.233 0 01-.489-.617 3.168 3.168 0 01.638-3.042 16.884 16.884 0 012.393-2.2 13.945 13.945 0 004.146-6.432c1.545-.647 3.144-1.527 4.69-2.174a14.349 14.349 0 017.712-1.494l5.231.1a12.545 12.545 0 014.573.658 4.263 4.263 0 012.79 3.414 1.048 1.048 0 01-.336.958 1.236 1.236 0 01-.662.149c-1.444.05-2.06.41-3.505.461zM542.054 388.24a1.53 1.53 0 00.418-1.539 2.864 2.864 0 00-2.965.56 4.999 4.999 0 00-.795 1.05 4.682 4.682 0 00-.897 3.715 1.055 1.055 0 00.483.661 1.27 1.27 0 00.563.088 18.873 18.873 0 002.266-.14c.462-.056.998-.186 1.176-.616.235-.564-.333-1.203-.167-1.792a1.958 1.958 0 01.483-.692.915.915 0 00.285-.768c-.067-.277-.49-.433-.642-.193"
        fill="#f2f2f2"
      />
      <path
        d="M545.982 383.15a6.34 6.34 0 00-2.053-.13.895.895 0 00-.438.1.73.73 0 00-.27.39 1.94 1.94 0 001.13 2.377 2.427 2.427 0 01.7.282c.58.45.21 1.371.32 2.098.124.816.914 1.5.769 2.313-.114.64-.798 1.147-.688 1.788.115.671.967.873 1.646.927a2.07 2.07 0 001.166-.134 1.806 1.806 0 00.736-1.065 6.83 6.83 0 00.344-2.572 2.438 2.438 0 00-.29-1.135 6.338 6.338 0 00-.678-.776c-1.3-1.513.07-3.77-2.394-4.464z"
        fill="#f2f2f2"
      />
      <circle cx={433.662} cy={393.322} r={4.364} fill={color} />
      <circle cx={473.088} cy={486.62} r={4.364} fill={color} />
      <circle cx={640.272} cy={392.72} r={4.364} fill={color} />
      <circle cx={717.017} cy={501.668} r={4.364} fill={color} />
      <circle cx={574.512} cy={455.32} r={4.364} fill={color} />
      <path
        d="M177.234 236.555c.01 19.31-11.467 26.057-25.626 26.064q-.494 0-.982-.011-.985-.02-1.948-.089c-12.78-.898-22.713-7.981-22.722-25.939-.009-18.584 23.732-42.049 25.512-43.784l.004-.001.102-.1s25.65 24.552 25.66 43.86z"
        fill={color}
      />
      <path
        d="M150.673 259.665l9.37-13.106-9.393 14.545-.024 1.504q-.985-.02-1.948-.089l1-19.318-.007-.15.017-.028.095-1.825-9.431-14.572 9.459 13.204.023.388.757-14.596-8.076-15.059 8.173 12.494.78-30.26.004-.101v.099l-.121 23.863 8.025-9.464-8.059 11.52-.206 13.068 7.496-12.545-7.525 14.467-.114 7.267 10.878-17.463-10.92 19.998z"
        fill="#3f3d56"
      />
      <path
        d="M898 230.892s4 27 3 29 3 13 19 10 22-24 22-24-13-17-11-22zM893.5 653.392v33l21 7-4-45-17 5zM971.5 657.392l-3 41 18-11v-33l-15 3z"
        fill="#a0616a"
      />
      <path
        d="M871.5 425.392s-13 23-9 30 4 10 4 10 2 54 16 80c0 0-3 51 3 82l6 31 23-3 2-33s4-39 0-57 11-78 11-78l26 87s1 32 6 53 7 33 7 33l22 1s7-65 0-97c0 0-3-98 0-104s-3-25-9-29-108-6-108-6zM902.5 679.392s-1-6-6-6h-5l-1 8-18 18s-29 22-4 23 31-10 31-10 23-7 23-8-6-26-6-26l-3.267.74-2.733 7.26zM989.5 679.392s-11-4-11 0v4s-4-3-4 0-6 5-6 5l-1-5s-6 24-3 26 13 7 14 10 3 14 24 10 8-16 8-16l-11-11z"
        fill="#2f2e41"
      />
      <circle cx={909.5} cy={213.392} r={28} fill="#a0616a" />
      <path
        d="M914.5 264.392s-10.891-3.054-13.446-8.527-22.554 4.527-22.554 4.527l-7 88-2.5 77.5s50.5 19.5 66.5 13.5 35-9 35-9l3-150-5-28s-23.566-9.861-28.283-8.93c0 0-5.717 21.93-25.717 20.93z"
        fill="#d0cde1"
      />
      <path
        d="M900.268 247.891s-4.768 4.5-6.768 4.5-34 2-37 15 5 51 5 51 1 39 6 52 .5 21.5.5 21.5-6.5 33.5-.5 36.5 17.933 7.603 17.933 7.603 16.067-17.602 11.067-42.602-12-61-8-73 11.768-72.5 11.768-72.5z"
        fill="#575a89"
      />
      <path
        d="M840.5 390.392l7 13s33 37 39 16-24-26-24-26l-9-9z"
        fill="#a0616a"
      />
      <path
        d="M938.768 241.392s37.732 5 47.732 15 2 57 2 57-12 72-11 76 1 38 1 38-13 14-24 10-25-33-11-68c5.882-14.706 5.233-29.059 2.502-40.76a292.489 292.489 0 01-7.234-87.24z"
        fill="#575a89"
      />
      <path
        d="M995.5 382.392l-10 9s-57 2-42 17 51 0 51 0l13-14-13-12z"
        fill="#a0616a"
      />
      <path
        d="M886.954 183.81l-5.147-2.061s10.762-11.848 25.734-10.818l-4.21-4.636s10.293-4.121 19.65 6.697c4.92 5.686 10.611 12.37 14.16 19.9h5.512l-2.301 5.065 8.052 5.066-8.265-.91a28.029 28.029 0 01-.781 13.118S930 204.414 930 202.353v5.152s-5.147-4.637-5.147-7.727l-2.807 3.606-1.404-5.667-17.312 5.667 2.808-4.636-10.762 1.545 4.211-5.666s-8.978 8.008-12.633 12.363c-4.954 5.902-9.358 7.726-9.358 7.726s-4.21-23.18 9.358-30.907z"
        fill="#2f2e41"
      />
      <path
        d="M864.5 263.392l-9 4s-36 48-39 58-6 33 23 69l18-9s-20-29-13-40 23-30 23-30zM980.5 255.392l6 1s75 55 69 76-48 66-48 66l-16-15s35-41 21-51-32-27-32-27z"
        fill="#575a89"
      />
    </svg>
  );
};

SvgGoogleAnalytics.propTypes = {
  color: PropTypes.string
};
SvgGoogleAnalytics.defaultProps = {
  color: "primary"
};
const MemoSvgGoogleAnalytics = React.memo(SvgGoogleAnalytics);
export default MemoSvgGoogleAnalytics;
