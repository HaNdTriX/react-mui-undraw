import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHire = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1068.583 648.295"
      width="100%"
      height="auto"
      {...props}
    >
      <ellipse cx={679.583} cy={613.295} rx={389} ry={35} fill="#3f3d56" />
      <path
        fill="#3f3d56"
        opacity={0.3}
        d="M911.676 285.98H489.445V0h422.231z"
      />
      <path
        fill="#f2f2f2"
        d="M759.703 26.202h125.022v136.252H759.703zM682.593 34.437h-120.53v-8.235h120.53zM802.375 191.651h-42.672v-8.235h42.672zM883.228 206.624H761.2v-8.235h122.028zM711.041 64.383H537.357v-8.235h173.684zM711.041 87.59H537.357v-8.235h173.684zM711.041 110.799H537.357v-8.235h173.684zM711.041 134.006H537.357v-8.235h173.684zM711.041 157.214H537.357v-8.235h173.684zM711.041 180.421H537.357v-8.235h173.684zM711.041 203.63H537.357v-8.236h173.684z"
      />
      <path
        d="M778.478 104.005a22.115 22.115 0 016.054-3.036 154.367 154.367 0 0142.655-9.285c12.683-.9 26.43.168 36.335 8.14a12.494 12.494 0 013.686 4.294c1.247 2.69.869 5.815.465 8.752a9.89 9.89 0 01-.848 3.295c-1.333 2.538-4.615 3.427-7.466 3.123s-5.526-1.511-8.338-2.07a37.269 37.269 0 00-5.265-.536l-17.636-.955c-10.966-.594-22.076-1.178-32.833 1.036a32.706 32.706 0 00-9.487 3.268c-2.457 1.38-4.111 3.36-6.39.811-4.006-4.476-6.223-12.703-.932-16.837z"
        fill="#2f2e41"
      />
      <path
        d="M805.806 111.803s23.72-10.633 32.717 1.636-4.908 7.362-4.908 7.362l-15.54 4.907-17.177-3.272z"
        fill="#f2f2f2"
      />
      <path
        d="M807.032 104.033s3.272 15.54.818 19.63 13.905 9.815 13.905 9.815l15.54-6.543s-4.089-25.356 0-30.263z"
        fill="#ffb9b9"
      />
      <path
        d="M807.032 104.033s3.272 15.54.818 19.63 13.905 9.815 13.905 9.815l15.54-6.543s-4.089-25.356 0-30.263z"
        opacity={0.1}
      />
      <path
        d="M844.657 88.492a24.558 24.558 0 01-24.538 24.538 23.947 23.947 0 01-4.36-.392 24.537 24.537 0 1128.898-24.146z"
        fill="#ffb9b9"
      />
      <path
        d="M859.473 163.203h-78.255l1.775-7.704 7.68-33.471 8.88-5.997.007-.007 4.17-2.823 2.074-1.4s1.227.562 2.642 1.325c.412.232.831.472 1.25.727.008-.008.008 0 .008 0a14.648 14.648 0 011.931 1.34c.113.104.21.194.307.292 1.558 1.557 6.102 9.822 13.618 5.592a11.448 11.448 0 001.1-.689 54.46 54.46 0 005.593-4.44c1.58-1.444 2.605-2.56 3.444-3.33a5.438 5.438 0 011.272-.944 2.42 2.42 0 011.146-.277c2.455 0 5.727 4.904 5.727 4.904l.097.284.008.023L854.27 147.6z"
        fill="#f2f2f2"
      />
      <path
        d="M781.218 163.203h23.717a57.721 57.721 0 00-.427-8.205c-.726-5.473-2.508-10.743-3.63-16.148a67.934 67.934 0 01-1.43-14.404c.007-.666.022-1.34.082-2.014a9.22 9.22 0 011.295-4.372c.562-.86 1.333-1.595 1.932-2.418a5.548 5.548 0 00.546-.861v-.008a4.976 4.976 0 00.202-.456 3.696 3.696 0 00.225-1.116c.135-2.47-2.104-4.85-4.522-5.869a16.906 16.906 0 00-10.593-.427 50.422 50.422 0 00-9.957 4.073c-1.07.524-2.134 1.063-3.16 1.662a15.684 15.684 0 00-3.346 2.545c-2.545 2.628-3.66 6.289-4.559 9.83a20.782 20.782 0 00-.86 8.385c.007.09.03.187.044.277.891 4.664 4.694 8.167 6.723 12.464 2.35 4.986 2.193 10.796 1.258 16.23-.045.278-.098.555-.15.832h6.61zM877.762 133.25a185.35 185.35 0 00-6.46 29.953h-33.809q-1.325-3.616-2.642-7.24a54.276 54.276 0 01-1.805-5.57 26.657 26.657 0 01-.756-6.707c0-.54.023-1.086.068-1.625a.023.023 0 000-.03 26.789 26.789 0 011.954-8.287 30.912 30.912 0 011.721-3.496c1.573-2.845 3.474-5.525 5.166-8.31a38.138 38.138 0 002.748-5.33.028.028 0 01.007-.023 19.132 19.132 0 001.55-7.449c-.053-3.301-5.637-9.058.434-8.504 8.287.748 15.407 5.517 21.898 10.952 1.729 1.453 3.42 2.957 5.075 4.44 2.56 2.305 5.263 4.82 6.034 8.182a8.724 8.724 0 01.217 1.632 22.405 22.405 0 01-1.4 7.412z"
        fill="#2f2e41"
      />
      <path
        d="M827.089 124.221a18.28 18.28 0 00-3.839-6.19 14.24 14.24 0 00-5.863-2.97 32.065 32.065 0 00-8.602-1.233c-3.464-.021-7.48.908-8.951 4.044-1.168 2.49-.263 5.44.913 7.927a7.771 7.771 0 002.425 3.275c1.494 1.01 3.426.978 5.197 1.316a23.969 23.969 0 017.68 3.48l6.068 3.667 10.42 6.3c-.274-.166-.176-7.313-.496-8.484-1.031-3.773-3.353-7.56-4.952-11.132z"
        fill="#ffb9b9"
      />
      <path
        d="M844.04 75.704a6.228 6.228 0 00-2.701-3.526 14.294 14.294 0 00-.57-4.653c-1.487-4.393-5.007-4.141-8.329-6.083-1.44-.843-1.352-1.588-2.102-2.972a11.029 11.029 0 00-4.25-4.336c-2.13-1.358-4.38-2.756-6.9-2.928-5.298-.36-9.36 4.622-14.424 6.221-2.231.705-4.63.734-6.873 1.4s-4.482 2.258-4.817 4.575c-.154 1.069.118 2.166-.038 3.235-.311 2.125-2.176 3.613-3.424 5.361-2.76 3.865-2.444 9.325-.237 13.53a19.019 19.019 0 001.592 2.491 15.32 15.32 0 001.68 5.689c2.207 4.205 6.005 7.348 9.972 9.958a23.537 23.537 0 01-.589-4.246 2.93 2.93 0 01.18-1.407c.443-.924 1.61-1.17 2.5-1.675 1.844-1.048 2.567-3.366 2.62-5.486s-.396-4.243-.174-6.352a3.47 3.47 0 011.189-2.553 4.104 4.104 0 012.24-.534c3.777-.154 7.724-.224 11.056-2.01a16.385 16.385 0 013.441-1.741c2.832-.738 5.726 1.246 7.358 3.675s2.445 5.32 3.95 7.83 4.108 4.746 7.019 4.449a1.165 1.165 0 00.87-.387 1.303 1.303 0 00.16-.74l.162-11.128a16.82 16.82 0 00-.561-5.657zM779.324 150.02q.798 6.568.966 13.183h-20.587v-17.301c.104-.42.217-.831.351-1.243 1.288-3.968 3.99-7.292 6.334-10.743.112-.172.232-.344.344-.517a28.107 28.107 0 002.56-4.619c.337-.793.876-4.634 1.445-4.963 2.441-1.415 4.425 4.634 4.762 5.982 1.198 4.798 2.238 9.642 3.024 14.53q.46 2.842.801 5.69zM883.362 163.203h-47.261c-.404-.951-.801-1.902-1.22-2.845a83.172 83.172 0 00-11.335-18.589 4.918 4.918 0 01-1.4-2.777 2.35 2.35 0 01.307-1.25c.719-1.34 2.62-2.127 4.163-2.763a14.343 14.343 0 004.327-2.725 9.279 9.279 0 002.5-3.69 8.099 8.099 0 00.315-1.273l.658.86c.532.704 1.071 1.4 1.617 2.097 5.24 6.73 10.998 13.363 18.237 17.353a30.682 30.682 0 005.96 2.538 1.564 1.564 0 001.257 0 1.522 1.522 0 00.547-1.003c.643-2.695.868-5.473 1.34-8.205a46.735 46.735 0 014.933-14.21c1.34-2.492 5.697-11.603 8.46-5.861q1.19 2.482 2.395 4.978c.502 1.056 1.011 2.104 1.52 3.16a19.648 19.648 0 012.463 11.005q.112 11.61.217 23.2z"
        fill="#2f2e41"
      />
      <path
        d="M781.218 163.203h4.095l-2.32-7.704-3.347-11.102a36.216 36.216 0 01-.322 5.622 37.435 37.435 0 01-3.264 11.11c-.322.681-.666 1.37-.943 2.074h6.101zM864.632 139.528c-.577 1.55-.053 3.266.391 4.86a48.96 48.96 0 011.784 14.206.517.517 0 01-.604.62c-1.888.115-4.05.128-5.33-1.264z"
        opacity={0.1}
      />
      <path fill="#3f3d56" opacity={0.3} d="M0 2.943h422.231v285.979H0z" />
      <path
        fill="#f2f2f2"
        d="M26.951 29.146h125.022v136.252H26.951zM229.083 29.146h120.53v8.235h-120.53zM28.448 186.359H71.12v8.235H28.448zM28.448 201.332h122.028v8.235H28.448zM200.635 59.091h173.684v8.235H200.635zM200.635 82.299h173.684v8.235H200.635zM200.635 105.507h173.684v8.235H200.635zM200.635 128.714h173.684v8.235H200.635zM200.635 151.922h173.684v8.235H200.635zM200.635 175.13h173.684v8.235H200.635zM200.635 198.338h173.684v8.235H200.635z"
      />
      <path
        d="M148.574 166.146h-16.253q-1.875-5.042-3.331-10.211a20.4 20.4 0 00-5.3-10.803 20.037 20.037 0 01-2.284-3.1 14.557 14.557 0 01-1.437-8.826 22.926 22.926 0 01.42-2.5c.71-3.197 1.9-6.266 2.896-9.38a3.558 3.558 0 012.905-2.404 5.762 5.762 0 013.174.367 3.942 3.942 0 01.637.33c1.774 1.07 2.695 3.256 3.436 5.255q5.087 13.655 10.166 27.31.989 2.65 1.977 5.315c.973 2.606 1.939 5.21 2.762 7.869.083.262.157.516.232.778z"
        fill="#d0cde1"
      />
      <path
        d="M80.914 46.328c-4.041 1.364-7.702 4.556-8.53 8.74-.383 1.94-.148 3.956-.471 5.907-.749 4.524-4.3 7.979-7.575 11.188S57.68 79.1 57.441 83.68c-.261 5.014 3.375 9.712 2.746 14.693-.731 5.788-6.844 9.538-8.355 15.172-1.01 3.763.227 7.815 2.262 11.137 3.876 6.33 10.502 10.628 17.558 12.932s14.572 2.788 21.994 2.866c9.038.095 18.85-.681 25.641-6.646a20.541 20.541 0 006.82-13.373c.644-6.909-2.24-14.048-.25-20.696 1.252-4.184 4.391-8.005 3.923-12.347-.459-4.246-4.166-7.255-6.71-10.685-2.375-3.202-3.816-6.984-5.229-10.712l-4.833-12.757c-.95-2.507-1.993-5.145-4.11-6.79-3.964-3.082-10.337-2.477-14.972-1.841-4.3.59-8.877.298-13.012 1.695z"
        fill="#2f2e41"
      />
      <path
        d="M84.652 88.368s.473 14.19-.946 15.61 5.677 10.88 5.677 10.88l12.771-.473 6.623-5.204-5.676-7.568s-2.366-12.3-.473-15.137-17.976 1.892-17.976 1.892z"
        fill="#a0616a"
      />
      <path
        d="M84.652 88.368s.473 14.19-.946 15.61 5.677 10.88 5.677 10.88l12.771-.473 6.623-5.204-5.676-7.568s-2.366-12.3-.473-15.137-17.976 1.892-17.976 1.892z"
        opacity={0.1}
      />
      <circle cx={92.457} cy={76.778} r={17.029} fill="#a0616a" />
      <path
        d="M101.186 166.146h13.805c.516-.936 1.003-1.909 1.564-2.792v-.008a7.643 7.643 0 012.516-2.635 9.911 9.911 0 001.864-1.115 4.809 4.809 0 001.138-2.126 32.947 32.947 0 001.557-9.179c.022-1.048 0-2.11.06-3.159a13.282 13.282 0 01.314-2.433 19.16 19.16 0 012.044-4.627q2.807-5.11 5.63-10.219a7.143 7.143 0 00.381-2.994 7.381 7.381 0 00-1.212-3.84 22.397 22.397 0 00-.846-1.4 31.093 31.093 0 00-4.013-5.121 32.463 32.463 0 00-11.424-7.734 6.63 6.63 0 01-1.535-.748 6.37 6.37 0 01-1.407-1.685c-1.498-2.253-3.324-4.79-6.027-4.649a3.705 3.705 0 00-2.86-.194 3.91 3.91 0 00-.419.134 26.606 26.606 0 00-3.002 1.565 13.935 13.935 0 01-8.085 1.467 2.739 2.739 0 01-.943-.24 4.834 4.834 0 01-.869-.703 4.992 4.992 0 00-4.963-.793 4.507 4.507 0 00-1.977 1.392c-.494.621-.838 1.37-1.385 1.954-1.415 1.512-3.75 1.572-5.817 1.565a53.759 53.759 0 00-12.779 1.175 24.293 24.293 0 00-10.062 4.866l-.007.008c-.404.344-.779.696-1.153 1.07a8.546 8.546 0 00-1.991 2.845c-.57 1.467-.494 3.122-1.01 4.612-.57 1.669-1.835 3.032-2.344 4.708-.39 1.273-.337 2.68-.98 3.833.03.023.052.045.081.068 2.725 2.396 5.054 5.54 7.786 7.913a15.713 15.713 0 013.953 4.417 7.296 7.296 0 01.487 1.198 18.42 18.42 0 01.404 4.357c.344 7 4.14 13.348 8.385 18.918.082.112.164.224.254.33z"
        fill="#d0cde1"
      />
      <path
        d="M56.77 141.344q-.967 6.704-1.947 13.4a58.384 58.384 0 01-1.333 7.098c-.39 1.444-.89 2.86-1.243 4.304H32.753a18.677 18.677 0 01.187-2.418 39.978 39.978 0 012.433-8.392q3.403-9.186 6.798-18.387c.965-2.612 1.796-5.345 2.86-7.935.187-.48.389-.958.606-1.423 1.13-2.485 4.267-1.467 6.588-1.093a6.256 6.256 0 011.841.524 4.752 4.752 0 011.73 1.632c2.2 3.257 1.722 7.562 1.153 11.455l-.18 1.235z"
        fill="#d0cde1"
      />
      <path
        d="M116.555 163.354c.03.105.352 1.22.884 2.792h-16.253c8.055-1.385 15.37-2.8 15.37-2.8z"
        fill="#2f2e41"
      />
      <ellipse cx={93.876} cy={66.845} rx={18.448} ry={9.934} fill="#2f2e41" />
      <path fill="#3f3d56" d="M270.489 108.222H692.72v285.979H270.489z" />
      <ellipse cx={631.332} cy={369.496} rx={49.41} ry={5.24} opacity={0.1} />
      <path fill="#f2f2f2" d="M297.44 134.424h125.022v136.252H297.44z" />
      <path
        d="M337.698 196.982a1.835 1.835 0 002.152-.889c1.729-2.724-1.455-6.237-.766-9.39.553-2.525 3.423-4.024 4.01-6.542.57-2.446-1.187-5.204 0-7.417.93-1.735 3.254-2.191 5.199-1.887s3.79 1.158 5.754 1.278c2.617.16 5.112-.993 7.672-1.563s5.681-.348 7.187 1.8c1.933 2.756-.028 6.595.645 9.894.535 2.62 2.728 4.789 2.775 7.462.017.95-2.48.185-2.348 1.126s-1.048.113-.104 0a1.87 1.87 0 001.42-1.688c.112-.784 1.585-1.045 1.568-1.837-.04-1.855 3.314-.604 3.867-2.376a17.964 17.964 0 00-.734-12.532 25.099 25.099 0 01-2.14-5.096c-.493-2.46.283-5.1-.53-7.474-1.095-3.199-4.72-4.83-8.084-5.16s-6.783.261-10.129-.227c-2.996-.437-5.898-1.736-8.92-1.548-3.627.226-6.784 2.563-9.298 5.187s-4.647 5.641-7.502 7.89a14.714 14.714 0 00-2.406 2.07c-1.454 1.773-1.602 4.297-1.197 6.554s1.285 4.41 1.656 6.672c.35 2.126.242 4.298.392 6.447a11.333 11.333 0 001.891 6.086 5.744 5.744 0 004.47 2.335c.605.014 1.116-.53 1.727-.388.764.177 1.096.902 1.773 1.213z"
        fill="#2f2e41"
      />
      <path
        d="M310.204 271.425c.547-7.494.959-13.094.959-13.094l3.533-9.313 11.342 22.407z"
        fill="#575a89"
      />
      <path
        d="M310.204 271.425c.547-7.494.959-13.094.959-13.094l3.533-9.313 11.342 22.407z"
        opacity={0.1}
      />
      <path
        d="M336.488 197.744s10.576 26.92 4.487 32.048 33.97-8.653 33.97-8.653l-.961-3.525s-13.14-5.128-6.73-19.87-30.766 0-30.766 0z"
        fill="#a0616a"
      />
      <path
        d="M336.488 197.744s10.576 26.92 4.487 32.048 33.97-8.653 33.97-8.653l-.961-3.525s-13.14-5.128-6.73-19.87-30.766 0-30.766 0z"
        opacity={0.1}
      />
      <circle cx={351.551} cy={186.207} r={22.433} fill="#a0616a" />
      <path
        d="M406.03 234.6l-.247 4.896c-.322 6.34-.899 18.221-1.475 31.929h-86.962a43.116 43.116 0 01-5.532-9.905 10.688 10.688 0 01-.651-3.189c-.48-8.497 7.134-20.355 12.51-21.486 6.086-1.287 17.622-13.46 17.622-13.46a2.745 2.745 0 001.467 2.216v.007a5.964 5.964 0 003.017.66c3.759 0 20.288-7.63 25.596-10.122 1.041-.487 1.647-.779 1.647-.779a124.4 124.4 0 0018.91 6.416 20.112 20.112 0 0114.098 12.816z"
        fill="#575a89"
      />
      <path
        d="M333.853 194.739a1.835 1.835 0 002.15-.889c1.73-2.724-1.454-6.238-.764-9.39.552-2.526 3.422-4.024 4.009-6.542.57-2.447-1.187-5.204 0-7.418.93-1.734 3.254-2.19 5.199-1.887s3.79 1.159 5.754 1.279c2.618.16 5.113-.993 7.672-1.564s5.682-.347 7.187 1.8c1.934 2.757-.027 6.595.646 9.895.534 2.62 6.625 4.458 7.177 2.687a17.964 17.964 0 00-.734-12.532 25.1 25.1 0 01-2.14-5.097c-.492-2.46.283-5.1-.53-7.473-1.095-3.199-4.719-4.83-8.083-5.16s-6.784.261-10.13-.227c-2.996-.438-5.897-1.737-8.92-1.548-3.627.225-6.783 2.562-9.298 5.186s-4.647 5.642-7.502 7.89a14.714 14.714 0 00-2.406 2.071c-1.454 1.772-1.602 4.297-1.197 6.554s1.285 4.409 1.657 6.671c.349 2.126.241 4.298.392 6.448a11.333 11.333 0 001.89 6.086 5.744 5.744 0 004.47 2.335c.605.014 1.117-.53 1.727-.388.764.177 1.096.902 1.774 1.213z"
        fill="#2f2e41"
      />
      <path
        d="M417.147 271.425h-25.379c-1.931-14.164-3.526-28.972-3.526-28.972l5.128-2.246 10.421-5.608s.764 1.812 1.992 4.897c2.62 6.595 7.374 19.007 11.364 31.929z"
        opacity={0.1}
      />
      <path
        d="M419.385 271.425h-28.642c-4.245-15.497-8.43-32.341-8.43-32.341l10.9-8.01 12.817 3.525s7.501 17.855 13.355 36.826z"
        fill="#575a89"
      />
      <path
        fill={color}
        d="M499.572 134.424h120.53v8.235h-120.53zM298.937 291.638h42.672v8.235h-42.672zM298.937 306.611h122.028v8.235H298.937z"
      />
      <path
        fill="#f2f2f2"
        d="M471.124 164.37h173.684v8.235H471.124zM471.124 187.578h173.684v8.235H471.124zM471.124 210.785h173.684v8.235H471.124zM471.124 233.993h173.684v8.235H471.124zM471.124 257.201h173.684v8.235H471.124zM471.124 280.409h173.684v8.235H471.124zM471.124 303.616h173.684v8.235H471.124z"
      />
      <path
        d="M678.285 304.729l-47.479 47.478-19.955-19.955a6.822 6.822 0 00-9.647 0l-.717-1.073c-2.664 2.664-1.947 8.056.717 10.72l25.892 25.891a5.205 5.205 0 007.359.002l53.472-53.416c2.665-2.663 3.632-7.546.968-10.21-2.663-2.663-7.947-2.1-10.61.563z"
        fill="#57b894"
      />
      <path
        d="M678.285 304.729l-47.479 47.478-19.955-19.955a6.822 6.822 0 00-9.647 0l-.717-1.073c-2.664 2.664-1.947 8.056.717 10.72l25.892 25.891a5.205 5.205 0 007.359.002l53.472-53.416c2.665-2.663 3.632-7.546.968-10.21-2.663-2.663-7.947-2.1-10.61.563z"
        opacity={0.1}
      />
      <path
        d="M678.285 302.624l-47.479 47.478-19.955-19.955a6.822 6.822 0 00-9.647 0 6.822 6.822 0 000 9.647l25.892 25.892a5.205 5.205 0 007.359.001l53.472-53.416a6.82 6.82 0 00.002-9.647 6.82 6.82 0 00-9.644 0z"
        fill="#57b894"
      />
      <path
        d="M1027.583 577.619c0 53.533-74.62 36.975-165.983 36.975s-164.874 16.558-164.874-36.975 74.609-65.177 165.972-65.177 164.885 11.644 164.885 65.177z"
        opacity={0.1}
      />
      <path
        d="M1027.583 567.619c0 53.533-74.62 36.975-165.983 36.975s-164.874 16.558-164.874-36.975 74.609-65.177 165.972-65.177 164.885 11.644 164.885 65.177z"
        fill="#3f3d56"
      />
      <path
        d="M715.654 399.91l-3.38 3.925s-41.112 3.86-39.444 10.535 49.498-8.899 49.498-8.899z"
        fill="#ffc1c7"
      />
      <path
        d="M790.18 396.573s-43.937 15.572-67.852 8.898l11.123 22.246s56.728-1.668 66.74-11.679-10.012-19.465-10.012-19.465z"
        fill={color}
      />
      <path
        d="M790.18 396.573s-43.937 15.572-67.852 8.898l11.123 22.246s56.728-1.668 66.74-11.679-10.012-19.465-10.012-19.465z"
        opacity={0.1}
      />
      <circle cx={760.425} cy={247.8} r={29.476} fill="#ffc1c7" />
      <path
        d="M785.56 275.473a22.993 22.993 0 003.818 5.294 48.214 48.214 0 0014.208 10.632 484.153 484.153 0 01-50.624 7.528c1.795-6.32-.568-13.078-3.742-18.83s-7.22-11.11-9.208-17.372l19.924.536c3.615.097 7.241.205 10.855.028 2.702-.132 7.202-1.75 9.724-1.154 5.33 1.26 2.717 8.61 5.044 13.338z"
        fill="#ffc1c7"
      />
      <path
        d="M852.47 413.813l16.684 20.022s27.808 65.07-32.813 71.745-105.67-5.006-105.67-5.006-24.471-11.68-25.028-2.78-2.78 33.925-16.128 58.396l-11.68 26.695s-6.117 6.118-4.449 14.46-37.262 11.124-36.706 0c0 0 5.561-9.454 5.561-15.016s8.899-18.909 8.899-18.909l16.129-80.087s-1.113-41.156 36.706-33.37 91.766-1.668 91.766-1.668l12.236-42.824z"
        fill="#2f2e41"
      />
      <path
        d="M852.47 413.813l16.684 20.022s27.808 65.07-32.813 71.745-105.67-5.006-105.67-5.006-24.471-11.68-25.028-2.78-2.78 33.925-16.128 58.396l-11.68 26.695s-6.117 6.118-4.449 14.46-37.262 11.124-36.706 0c0 0 5.561-9.454 5.561-15.016s8.899-18.909 8.899-18.909l16.129-80.087s-1.113-41.156 36.706-33.37 91.766-1.668 91.766-1.668l12.236-42.824z"
        opacity={0.1}
      />
      <path
        d="M789.901 412.349s50.889-19.113 79.253 21.486c0 0 7.23 62.846-21.69 65.627s-66.74 2.224-75.638-7.23-65.07-36.15-65.07-36.15-27.962-14.263-33.447 4.27-6.04 22.981-6.04 22.981-28.92 21.134-40.6 25.027c0 0-7.786 11.123-12.236 11.123s-31.7 6.118-28.92-14.46l45.049-41.155 45.049-43.937s12.791-18.91 45.605-8.898a678.453 678.453 0 0066.183 16.128z"
        fill="#2f2e41"
      />
      <path
        d="M671.718 596.233s10.567 26.696 1.668 30.033-27.808 1.112-27.808 1.112-22.246-2.78-27.808-2.225-28.364-3.893-25.027-12.791 20.578-6.674 20.578-6.674l15.573-7.23s1.668-5.562 5.561-3.337 15.016 10.567 37.263 1.112zM613.877 517.259s11.68 26.14-7.23 23.915-33.37-6.118-38.93-6.674c-5.35-.535-20.478-5.702-18.157-15.994a9.155 9.155 0 00.15-2.02c0-1.382 1.878-4.094 16.894-3.676 0 0 11.123 0 15.572-7.787 0 0 16.685 21.134 31.701 12.236z"
        fill="#cbceda"
      />
      <path
        d="M740.125 294.796s40.044-25.028 73.413 0 55.616 139.04 55.616 139.04l-77.306-17.242s-3.337-13.348-7.786-15.572-5.006-11.68-5.006-11.68-23.915-7.23-22.246-35.038-16.685-59.508-16.685-59.508z"
        fill={color}
      />
      <path
        d="M760.703 295.908h-20.578s-12.235 13.904-13.904 48.942l-6.674 27.808s-13.904 33.37-5.561 38.93 24.47 5.006 27.808-6.117 26.14-75.637 26.14-75.637z"
        fill={color}
      />
      <path
        d="M754.805 209.44a29.796 29.796 0 0130.822 5.052c10.68 9.532 12.836 25.082 15.536 39.141s8.132 29.715 21.382 35.135a55.709 55.709 0 01-17.95-.522l20.023 17.944-33.73-10.994c-10.587-3.451-21.705-6.945-32.668-4.996-18.16 3.228-30.804 20.3-48.247 26.298l1.938-9.458-11.702-.09a22.92 22.92 0 006.705-7.855 6.489 6.489 0 00-4.477-2.343c-4.878-30.428 13.19-60.507 36.738-80.387 4.632-3.91 9.757-7.666 15.74-8.644s12.965 1.697 15.045 7.39"
        fill="#2f2e41"
      />
      <path
        d="M244.488 488.307c0 64.016 40.16 115.817 89.79 115.817"
        fill="#3f3d56"
      />
      <path
        d="M334.278 604.124c0-64.735 44.817-117.118 100.202-117.118M277.02 494.11c0 60.809 25.61 110.014 57.258 110.014"
        fill={color}
      />
      <path
        d="M334.278 604.124c0-82.717 51.801-149.651 115.818-149.651"
        fill="#3f3d56"
      />
      <path
        d="M315.389 604.94s12.734-.391 16.571-3.124 19.588-5.996 20.54-1.613 19.137 21.798 4.76 21.914-33.404-2.24-37.234-4.573-4.637-12.603-4.637-12.603z"
        fill="#a8a8a8"
      />
      <path
        d="M357.517 620.59c-14.377.117-33.405-2.238-37.235-4.572-2.917-1.776-4.08-8.152-4.468-11.094-.27.012-.425.017-.425.017s.806 10.27 4.637 12.603 22.858 4.689 37.234 4.573c4.15-.034 5.584-1.51 5.505-3.697-.577 1.321-2.16 2.146-5.248 2.17z"
        opacity={0.2}
      />
    </svg>
  );
};

SvgHire.propTypes = {
  color: PropTypes.string
};
SvgHire.defaultProps = {
  color: "primary"
};
export default SvgHire;
