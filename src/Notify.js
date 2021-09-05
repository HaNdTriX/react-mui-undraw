import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgNotify = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1106 794.91"
      width="100%"
      height="auto"
      {...props}
    >
      <circle cx={455} cy={443.91} r={342} fill="#f2f2f2" />
      <path
        d="M914.713 192.08l-35.68 42.302c-1.925 18.22-4.655 38.58-8.525 59.94l58.62-60.647.275 1.06c-3.336-16.298-8.381-31.084-15.017-43.658zM879.365 231.185l34.562-40.976c-7.543-14.024-17.096-25.226-28.512-32.578a64.069 64.069 0 00-1.79-1.1c.008 4.98-.138 34.217-4.26 74.654zM923.638 362.327l.074 1.228q3-11.28 5.128-22.587l-85.01 54.887-.057-.559q-2.412 6.568-4.958 12.89zM933.768 295.635l.172 1.163a258.753 258.753 0 00-4.314-60.926l-59.738 61.801q-5.577 30.004-13.134 57.113zM783.043 192.233a216.052 216.052 0 00-22.808 37.095l98.459 112.393c4.054-15.764 7.322-31.05 9.952-45.307l-86.121-103.067zM753.28 244.76l.5-1.127 101.109 112.181q1.632-5.761 3.123-11.461L759.19 231.545l.507-1.123q-3.353 6.923-6.418 14.338zM928.99 338.317l.12 1.2a309.002 309.002 0 004.772-41.379l-78.055 59.95q-5.141 18.049-11.139 34.659zM816.322 454.923c-13.228 23.022-28.217 42.485-44.818 58.158 18.363-7.406 92.339-40.033 130.678-98.872zM737.898 301.861a298.924 298.924 0 00-1.72 39.978l.616-1.196 79.299 111.242a371.628 371.628 0 0019.46-40.062zM877.905 231.061c4.449-43.751 4.21-74.237 4.206-74.675l.755-.306c-17.852-10.35-37.58-9.99-56.796-.791zM837.482 411.441c-.536 1.303-1.068 2.615-1.613 3.902a369.22 369.22 0 01-17.586 36.124l85.046-40.328.042 1.205a146.38 146.38 0 0015.824-33.385q2.234-6.936 4.12-13.924zM869.165 293.569c3.81-21.12 6.502-41.24 8.402-59.249l-53.024-77.511.56-1.058c-14.44 7.14-28.564 19.272-41.359 35.59z"
        fill={color}
      />
      <path
        d="M814.927 453.937l-78.718-110.429c1.897 80.048 29.227 165.476 30.99 170.91 18.905-16.93 34.637-37.743 47.728-60.481zM836.466 409.457l.081-.044a501.54 501.54 0 0017.608-51.035L752.797 245.92q-4.108 10.064-7.632 20.969a179.711 179.711 0 00-6.912 31.977zM994.922 520.726l-54.46 9.824c-13.104 12.805-28.193 26.745-44.797 40.727l83.83-9.32-.464.991c7.825-14.68 13.37-29.286 16.28-43.203zM942.756 528.3l52.755-9.516c3.134-15.612 2.922-30.333-1.182-43.276a64.03 64.03 0 00-.676-1.99c-3.17 3.842-21.931 26.267-50.897 54.782zM893.21 657.541l-.726.993q9.504-6.774 18.356-14.125l-100.482-11.947.313-.467q-6.046 3.52-12.04 6.766zM943.55 612.637l-.61 1.006a258.753 258.753 0 0035.537-49.677l-85.427 9.497q-23.433 19.551-46.543 35.61zM893.414 436.864a216.052 216.052 0 00-41.226 14.022l4.146 149.363c13.176-9.556 25.444-19.245 36.562-28.547l-.592-134.312zM836.987 458.335l1.105-.548 6.322 150.889q4.932-3.396 9.716-6.835l-4.161-149.914 1.107-.541q-6.998 3.193-14.089 6.95zM912.647 642.463l-.673 1a309.003 309.003 0 0030.067-28.825l-98.355-3.612q-15.47 10.621-30.684 19.59zM751.498 660.41c-24.872 9.295-48.83 14.725-71.613 16.207 18.866 6.008 96.652 28.062 163.71 7.198z"
        fill={color}
      />
      <path
        d="M788.721 492.504a298.924 298.924 0 00-26.823 29.693l1.237-.529-9.877 136.256a371.63 371.63 0 0040.54-18.444zM941.71 527.272c31.332-30.859 50.593-54.491 50.868-54.83l.778.245c-7.149-19.358-22.573-31.663-43.24-36.835zM795.528 640.417c-1.244.662-2.49 1.332-3.73 1.976a369.22 369.22 0 01-36.585 16.606l91.223 23.183-.736.955a146.38 146.38 0 0033.48-15.62q6.145-3.917 12.055-8.095zM895.11 569.84c16.406-13.835 31.312-27.615 44.261-40.273l8.6-93.518 1.106-.458c-15.676-3.71-34.291-3.375-54.553 1.032zM751.052 658.76l9.805-135.258c-49.594 62.862-83.032 146.09-85.14 151.399 25.358-.982 50.75-6.978 75.335-16.14zM796.011 638.24l.09.019a501.54 501.54 0 0046.113-28.077l-6.338-151.26q-9.583 5.13-19.252 11.282a179.712 179.712 0 00-25.72 20.22zM712.07 338.622l-20.857 51.259c3.802 17.923 7.498 38.13 10.42 59.64l37.004-75.797.588.923c-8.21-14.468-17.578-26.97-27.776-36.878zM690.54 386.738l20.205-49.653c-11.509-11.005-24.057-18.706-37.186-22.169a64.087 64.087 0 00-2.043-.494c1.548 4.735 10.446 32.585 19.025 72.316zM773.181 497.773l.45 1.145q-.634-11.654-2.105-23.066l-63.882 78.476-.226-.514q-.264 6.991-.73 13.792zM762.2 431.216l.524 1.053a258.752 258.752 0 00-22.935-56.61l-37.71 77.24q3.97 30.259 5.163 58.376zM586.896 379.466a216.053 216.053 0 00-10.226 42.328l128.378 76.456c-1.017-16.245-2.634-31.793-4.539-46.164l-113.762-71.4zM574.825 438.621l.128-1.227 130.833 75.435q-.229-5.984-.573-11.865l-128.852-76.738.136-1.225q-1.049 7.62-1.672 15.62zM770.85 473.284l.485 1.104a309.003 309.003 0 00-8.252-40.827l-55.702 81.142q.689 18.753.12 36.403z"
        fill={color}
      />
      <path
        d="M699.742 619.005c-5.464 25.984-13.703 49.127-24.647 69.164 15.174-12.72 75.443-66.615 93.717-134.423zM577.847 497.68a298.926 298.926 0 0010.721 38.552l.216-1.328 109.8 81.284a371.629 371.629 0 006.124-44.116zM689.113 387.071c-9.292-42.984-18.942-71.903-19.081-72.318l.624-.525c-20.178-4.324-38.829 2.116-54.26 16.803zM706.425 571.113c-.107 1.405-.208 2.816-.328 4.209a369.22 369.22 0 01-5.559 39.79l68.416-64.64.413 1.133a146.38 146.38 0 004.73-36.641q-.02-7.287-.385-14.516zM700.122 449.22c-2.903-21.264-6.563-41.231-10.323-58.945l-74.385-57.326.205-1.18c-11.525 11.255-21.208 27.158-28.332 46.631z"
        fill={color}
      />
      <path
        d="M698.11 618.499l-108.997-80.69c26.547 75.542 78.945 148.34 82.3 152.961 12.747-21.943 21.275-46.6 26.697-72.271zM704.845 569.54l.064-.067a501.539 501.539 0 00.97-53.979l-131.154-75.62q-.796 10.841-.776 22.3a179.71 179.71 0 003.31 32.549z"
        fill={color}
      />
      <ellipse cx={553} cy={762.91} rx={553} ry={32} fill="#3f3d56" />
      <path
        d="M745 722.145c0 62.194-86.691 42.957-192.835 42.957s-191.548 19.237-191.548-42.957 86.68-75.72 192.824-75.72S745 659.95 745 722.144z"
        opacity={0.1}
      />
      <path
        d="M745 706.832c0 62.194-86.691 42.956-192.835 42.956s-191.548 19.237-191.548-42.956 86.68-75.721 192.824-75.721S745 644.638 745 706.83z"
        fill="#3f3d56"
      />
      <path
        d="M765.974 447.598s0 104.389 5.578 127.498 25.5 106.78 25.5 106.78l27.093-5.578s-4.781-110.764-9.562-126.702 5.578-81.28 19.124-95.623-6.375-23.11-6.375-23.11z"
        fill="#2f2e41"
      />
      <path
        d="M765.974 447.598s0 104.389 5.578 127.498 25.5 106.78 25.5 106.78l27.093-5.578s-4.781-110.764-9.562-126.702 5.578-81.28 19.124-95.623-6.375-23.11-6.375-23.11z"
        opacity={0.1}
      />
      <path
        d="M831.317 661.954s-35.86 14.344-38.25 14.344-3.984 41.437-3.984 41.437 2.39 24.703-36.656 32.671 31.078 25.5 43.828 16.734S814.583 752 814.583 752l4.78-7.969-1.593 13.547 5.578.797 12.75-25.5s3.187-19.125-.797-23.906-3.984-47.015-3.984-47.015z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M651.225 512.144l5.578 31.078 26.297-2.391-4.781-22.312-27.094-6.375z"
      />
      <path
        d="M780.317 380.661l-4.78 7.969s-137.858-19.125-137.858 31.874-6.375 81.28-7.969 83.671 41.437 27.89 51 26.297c0 0 6.374-8.766 5.577-19.922s6.375-52.593 0-54.984c0 0 7.969-3.187 7.172-7.968 0 0 112.358 15.937 126.702 12.75s23.906-13.547 26.296-19.922 7.511-31.242 7.511-31.242l-1.136-42.07-12.75-15.14-19.125-2.39-29.484 18.327z"
        fill="#2f2e41"
      />
      <path
        d="M865.582 456.363s-11.156 25.5 1.594 25.5 17.53-22.312 17.53-22.312z"
        fill="#a0616a"
      />
      <path
        d="M780.317 249.975l-3.984-4.78S731.71 144.788 749.24 117.695s94.03-31.078 96.42-29.484 9.563 7.172 8.766 8.766-16.734 5.578-11.156 15.14c0 0-7.969 2.39-9.563-.797s-6.375-3.984-7.968-.797-27.094 10.36-27.094 12.75-3.984 14.344-7.968 15.937.796 25.5 8.765 31.875 13.547 23.906 13.547 23.906l-3.984 35.859z"
        fill="#d0cde1"
      />
      <path
        d="M803.122 115.885c-4.766 2.427-9.507 5.526-12.381 10.409-5.883 9.994-2.126 23.667-5.77 34.909-1.554 4.793-4.386 8.913-6.722 13.294s-4.242 9.391-3.63 14.442c.6 4.955 3.515 9.158 4.892 13.916 2.37 8.19-.005 17.068-2.68 25.139q-2.198 6.629-4.675 13.137c-.958 2.517-2.107 5.214-4.306 6.427l18.858 1.547c5.48.45 11.538.715 15.845-3.09a18.287 18.287 0 004.127-5.898c4.256-8.889 4.944-19.371 4.455-29.433s-2.063-20.06-1.977-30.135a30.629 30.629 0 011.322-9.774 55.157 55.157 0 013.542-7.17c4.298-8.288 6.074-17.855 7.787-27.236 1.175-6.432 3.05-15.75-.311-21.794-3.352-6.026-13.843-.998-18.376 1.31z"
        fill="#2f2e41"
      />
      <circle cx={821.754} cy={153.555} r={32.671} fill="#a0616a" />
      <path
        d="M809.005 181.445s5.18 20.32 1.992 30.68 43.429-13.946 43.429-13.946-14.344-19.124-14.344-25.5z"
        fill="#a0616a"
      />
      <path
        d="M868.77 212.523s-10.36-7.969-10.36-11.953-7.172-12.75-7.172-12.75-34.265 17.531-35.859 17.531-2.39-10.36-2.39-10.36l-36.656 50.203s-11.953 28.687-7.969 51 10.36 45.42 7.172 66.14.797 27.89 5.578 25.499 0-10.36 10.36-9.562 45.42-10.36 47.811-15.14 11.953 10.358 12.75 19.124-1.594 32.671 0 31.874 3.985-14.343 4.781-20.718 3.188-27.093 0-30.28-.796-7.97 1.594-9.563 41.437-100.405 41.437-100.405-3.984-20.719-17.531-27.89-13.547-12.75-13.547-12.75z"
        fill="#d0cde1"
      />
      <path
        d="M887.097 239.616l12.75 13.547v71.718s16.734 86.061 6.375 90.842-15.14 3.188-15.14 3.188 2.39 43.827-4.782 43.827-18.328-3.187-24.702-1.594c0 0 1.593-15.937 6.374-23.109s4.782-19.921 4.782-19.921-7.172 0-7.172-10.36-.797-16.734-1.594-19.124-6.375-44.625-6.375-44.625z"
        fill="#d0cde1"
      />
      <path
        d="M814.78 114.234c5.516-3.506 12.829-.852 19.235-2.144 6.965-1.405 12.768-7.478 19.864-7.133 5.902.288 10.563 4.942 14.385 9.449a66.656 66.656 0 019.166 13.126c2.618 5.253 4.042 11.006 5.447 16.706l4.713 19.117c1.597 6.481 3.214 13.016 6.115 19.027s7.222 11.538 13.088 14.722a38.507 38.507 0 01-22.016.07 45.156 45.156 0 0013.255 18.536c-5.315 1.622-11.042-.013-16.587.34a23.542 23.542 0 00-19.076 12.502c-2.896 5.648-3.341 12.193-5.07 18.3-5.163 18.228-23.133 32.012-42.077 32.273 5.311-7.656 10.887-16.542 8.83-25.63-1.243-5.493-5.161-10.104-6.323-15.615-1.242-5.89.811-11.899 2.206-17.755s1.974-12.578-1.656-17.38c-3.849-5.092-11.573-6.774-14.054-12.654a18.044 18.044 0 01-.978-6.789l-.159-10.479a22.163 22.163 0 01.553-6.544c.816-2.808 2.697-5.16 4.49-7.47 3.407-4.389 6.721-9.056 8.042-14.453 1.603-6.553-.886-10.618-4.078-15.922-2.76-4.588-2.105-11.156 2.685-14.2z"
        fill="#2f2e41"
      />
      <path
        d="M849.645 93.79s36.655 31.875 27.093 43.03-24.703-20.718-24.703-20.718l-15.937-11.953z"
        fill="#a0616a"
      />
      <path
        d="M696.647 521.706s-42.234 10.36-47.015 19.125c0 0-5.578 27.093-5.578 38.25s-2.39 31.874-24.703 35.858-38.25 11.156-7.969 16.734 39.047 7.172 47.812-4.78 13.547-15.141 13.547-15.141l6.375 15.937h3.984l15.14-32.671s1.594-15.938-2.39-25.5.797-47.812.797-47.812z"
        fill="#2f2e41"
      />
      <path
        d="M854.027 96.58s-1.218 12.749-18.538 15.14l-3.774-11.953 11.953-10.36z"
        fill="#d0cde1"
      />
      <circle cx={428.505} cy={500.599} r={86} fill={color} />
      <path
        d="M384.765 372.879a67.422 67.422 0 01-83.038-36.495L208.508 127.03A90.274 90.274 0 01262.263 4.724a90.274 90.274 0 01116.81 65.873l50.041 223.639a67.422 67.422 0 01-44.35 78.643z"
        fill={color}
      />
      <circle cx={428.505} cy={500.599} r={86} opacity={0.1} />
      <path
        d="M384.765 372.879a67.422 67.422 0 01-83.038-36.495L208.508 127.03A90.274 90.274 0 01262.263 4.724a90.274 90.274 0 01116.81 65.873l50.041 223.639a67.422 67.422 0 01-44.35 78.643z"
        opacity={0.1}
      />
      <circle cx={425.325} cy={491.118} r={69} fill={color} />
      <path
        d="M376.57 348.204a61.861 61.861 0 01-76.189-33.485l-85.53-192.088a82.829 82.829 0 0149.32-112.219 82.829 82.829 0 01107.176 60.44l45.915 205.195a61.861 61.861 0 01-40.692 72.157z"
        fill={color}
      />
    </svg>
  );
};

SvgNotify.propTypes = {
  color: PropTypes.string
};
SvgNotify.defaultProps = {
  color: "primary"
};
export default SvgNotify;
