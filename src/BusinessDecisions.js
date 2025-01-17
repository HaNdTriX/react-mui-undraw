import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

const SvgBusinessDecisions = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 983.548 576.157"
      width="100%"
      height="auto"
      {...props}
    >
      <defs>
        <linearGradient
          id="BusinessDecisions_svg__a"
          x1={-566.545}
          y1={517.532}
          x2={-566.545}
          y2={599.344}
          gradientTransform="rotate(180 -132.815 434.14)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path fill="#3f3d56" d="M0 559.813h324.033v2.241H0z" />
      <path
        d="M312.757 342.245c.937 3.01 1.768 5.88 2.467 8.347l-.436.156c-.543-2.286-1.234-5.247-2.031-8.503zm-26.019-73.268l-.131.074.123-.115z"
        transform="translate(-108.226 -161.921)"
        fill="url(#BusinessDecisions_svg__a)"
      />
      <path
        d="M146.623 530.416c-4.893 1.57-8.568 31.651-8.568 31.651l30.425 7.516s21.34 3.15 31.479 0 9.793-11.89-4.72-13.288-24.834-20.106-24.834-20.106-18.889-7.343-23.782-5.773z"
        fill="#2f2e41"
      />
      <path
        d="M110.918 536.534a18.325 18.325 0 01-1.184 7.064 61.724 61.724 0 00-3.059 22.901q.099 1.39.222 2.911c1.053 12.064 30.237 4.556 32.177 3.15s-5.756-36.026-5.756-36.026-22.885-4.893-22.4 0z"
        fill="#2f2e41"
      />
      <path
        d="M142.865 98.231a.09.09 0 01.017.033c.616 1.513 23.534 57.71 19.39 39.331a11.24 11.24 0 01-.247-1.66c-.354-4.515 1.776-9.482 5.205-14.416a71.056 71.056 0 017.261-8.683 110.601 110.601 0 014.087-4.013c3.816-3.577 7.788-6.85 11.307-9.58 6.324-4.934 11.208-8.067 11.208-8.067S156.77 39.5 159.912 61.794c.863 6.11 4.465 12.204 2.023 17.861a30.867 30.867 0 01-6.694 9.564 50.65 50.65 0 01-7.245 5.945 55.754 55.754 0 01-2.927 1.85 38.972 38.972 0 01-2.204 1.217zM294.846 164.872s1.743-.97 4.374-2.13c7.738-3.37 23.19-8.305 25.138 5.28 2.624 18.222-14.752 16.126-14.752 16.126a81.178 81.178 0 00-10.534-3.2 13.531 13.531 0 00-5.402-.336z"
        fill="#ffb9b9"
      />
      <path
        d="M292.198 182.125h5.23c3.042-4.112.715-19.736.715-19.736l-4.547.822z"
        fill="#e6e6e6"
      />
      <path
        d="M198.733 208.504l.872 45.984 5.756 21.685s2.829 20.985 6.3 19.234 18.271 3.231 18.271 3.231l.699-7.779-4.983-45.72-3.849-22.82s-2.187-17.926-3.848-28.419-15.558-2.179-15.558-2.179zM215.369 185.693c9.448-2.647 21.643 0 21.643 0l55.095 1.217c9.835-12.984 3.018-25.179 3.018-25.179s-27.021-1.06-48.92-4.333-36.321-19.539-36.321-19.539z"
        fill="#2f2e41"
      />
      <path
        d="M159.912 61.795c-3.141-22.293 41.181 29.382 41.181 29.382s-4.884 3.133-11.208 8.066c-.584.042-1.167.042-1.768.042-13.56 0-22.91-8.487-28.287-20 2.162-5.122 1.052-10.665.082-17.49z"
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M156.178 68.676a30.299 30.299 0 110 .147v-.147z"
        fill="#ffb9b9"
      />
      <path
        d="M141.237 198.892l1.645-100.66 17.573 9.202 14.58 3.453 3.691-2.154.264-.156.6-.346s.197.428.576 1.21c3.19 6.75 18.715 39.766 18.387 42.595-.346 3.141 11.076 42.743 11.076 42.743l-5.51 37.507s10.452 26.05 7.69 35.672-78.12 2.968-78.12 2.968z"
        fill="#e6e6e6"
      />
      <path
        d="M170.668 113.996l5.855 7.516.945 2.195a70.794 70.794 0 015.608 24.423v9.753l1.226 78.16 6.734 12.015 1.226-14.868-2.706-83.67-3.675-18.913-2.007-11.982a53.027 53.027 0 01-2.804-6.471c-2.006-5.156-7.17-3.758-7.17-3.758z"
        fill="#2f2e41"
      />
      <path
        d="M144.896 96.595l.173.42 1.225 3.009 1.382 3.363a28.057 28.057 0 014.506 3.569c4.67 4.194 11.447 10.937 15.048 14.563 1.522 1.53 2.476 2.5 2.476 2.5 1.784-1.587 3.577-6.891 4.785-11.184.198-.682.37-1.34.535-1.948.608-2.328.978-4.005.978-4.005-4.58-1.636-15.27-12.088-20.763-17.663a50.65 50.65 0 01-7.245 5.945c-.312-.872-3.1 1.43-3.1 1.43z"
        fill="#e6e6e6"
      />
      <path
        d="M183.142 110.69c3.43 2.097 9.005 4.827 15.188 5.14 0 0 13.396 7.088 15.88 31.346s12.975 97.173 12.975 97.173 9.342 49.166 2.763 54.273l-7.343-60.185s-12.853-34.76-13.782-41.19c-.822-5.855-11.043-37.868-12.836-43.476-.181-.526-.272-.822-.272-.822l-10.22-28.905-5.905-15.82a32.07 32.07 0 003.552 2.466zM109.734 441.072s10.312-71.18 7.516-80.785 1.924-80.586 1.924-80.586l1.555-13.314.871-7.507.37-3.142 1.801.551a265.69 265.69 0 0053.278 9.77 40.64 40.64 0 0011.923-.954c7.138-1.629 20.937-3.627 23.346-5.337 0 0 .822 2.212 1.85 5.83 2.368 8.363 5.937 24.349 3.19 37.966l-4.201 27.54s-1.653 28.065-7.08 44.857l-4.803 22.901-6.299 46.683a279.587 279.587 0 00-6.734 37.827c-2.295 21.166-15.394 56.279-15.394 56.279s-27.844 3.848-28.666-5.592l9.621-73.622L162.716 355s-9.662 65.785-15.213 79.954c0 0-7.697 80.76-10.32 93.2s-4.366 15.732-4.366 15.732-16.266 5.953-23.61-5.066c0 0-2.096-32.687-3.667-44.405-1.578-11.734 4.194-53.343 4.194-53.343z"
        fill="#2f2e41"
      />
      <path
        d="M122.521 281.765l11.513 5.6-13.725 25.878c-5.156-4.81-4.547-23.954-4.547-23.954z"
        fill="#ffb9b9"
      />
      <path
        fill="#e6e6e6"
        d="M127.472 281.765l5.246 4.111-6.99 10.583-9.53 3.495-.79-6.998 12.064-11.191z"
      />
      <path
        d="M212.326 259.866a.25.25 0 01-.05-.123 4.359 4.359 0 01-.46.263z"
        opacity={0.1}
      />
      <path
        d="M82.68 296.278c6.29 7.343 33.715 8.659 33.715 8.659l21.372-33.682 5.764-9.079s6.423-4.457 18.494-24.53 11.66-35.532 10.994-47.077-8.223-44.726-8.223-44.726a93.13 93.13 0 00-2.77-9.909c-2.624-8.272-6.596-19.768-9.844-28.978a597.765 597.765 0 00-1.678-4.728c-.986-2.813 4.03-13.527 4.03-13.527-1.768 3.544-12.902 9.374-16.775 11.816-10.444 6.579-25.023 9.276-25.023 9.276-23.478 3.413-19.144 27.67-19.144 27.67s-.263 94.296 1.184 105.578-12.096 53.237-12.096 53.237z"
        fill="#2f2e41"
      />
      <path
        d="M94.612 137.456s-9.967 43.287-12.721 70.037 7.606 43.797 7.606 43.797l22.161 49.182c7.607-1.957 23.083-18.09 23.083-18.09l-22.203-61.51s8.232-31.059 13.38-59.667-8.495-41.445-8.495-41.445c-22.82-8.65-22.811 17.696-22.811 17.696z"
        opacity={0.1}
        style={{
          isolation: "isolate"
        }}
      />
      <path
        d="M93.56 137.456s-9.967 43.287-12.722 70.037 7.606 43.797 7.606 43.797l22.203 49.182c7.606-1.957 23.082-18.09 23.082-18.09l-22.202-61.51s8.24-31.059 13.37-59.667-8.519-41.445-8.519-41.445c-22.819-8.65-22.819 17.696-22.819 17.696zM137.356 290.16l-6.118 17.491-6.817 9.35s-5.107 3.412-6.381-2.969 15.994-30.343 15.994-30.343c2.73-1.077 3.322 6.471 3.322 6.471zM158.444 85.077s-31.658-43.382 8.207-52.762c0 0 11.325-16.988 25.24-8.632a43.61 43.61 0 0022.54 5.994c6.741 0 13.19 2.638 12.018 13.19-2.345 21.105-15.243 17.588-15.243 17.588s-34.977-15.67-36.15 1.917-16.612 22.705-16.612 22.705z"
        fill="#2f2e41"
      />
      <circle cx={531.305} cy={6.813} r={6.813} fill="#e6e6e6" />
      <circle cx={565.794} cy={6.813} r={6.813} fill="#e6e6e6" />
      <circle cx={600.283} cy={6.813} r={6.813} fill="#e6e6e6" />
      <circle cx={634.772} cy={6.813} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={6.813} r={6.813} fill="#e6e6e6" />
      <circle cx={531.305} cy={41.735} r={6.813} fill="#e6e6e6" />
      <circle cx={565.794} cy={41.735} r={6.813} fill="#e6e6e6" />
      <circle cx={600.283} cy={41.735} r={6.813} fill="#e6e6e6" />
      <circle cx={634.772} cy={41.735} r={6.813} fill={color} />
      <circle cx={669.261} cy={41.735} r={6.813} fill="#e6e6e6" />
      <circle cx={738.239} cy={41.735} r={6.813} fill="#e6e6e6" />
      <circle cx={531.305} cy={76.657} r={6.813} fill="#e6e6e6" />
      <circle cx={565.794} cy={76.657} r={6.813} fill="#e6e6e6" />
      <circle cx={600.283} cy={76.657} r={6.813} fill="#e6e6e6" />
      <circle cx={634.772} cy={76.657} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={76.657} r={6.813} fill="#e6e6e6" />
      <circle cx={531.305} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={565.794} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={600.283} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={634.772} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={703.75} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={738.239} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={772.728} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={807.217} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={841.706} cy={111.579} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={146.501} r={6.813} fill="#e6e6e6" />
      <circle cx={703.75} cy={146.501} r={6.813} fill={color} />
      <circle cx={738.239} cy={146.501} r={6.813} fill="#e6e6e6" />
      <circle cx={772.728} cy={146.501} r={6.813} fill="#e6e6e6" />
      <circle cx={807.217} cy={146.501} r={6.813} fill="#e6e6e6" />
      <circle cx={841.706} cy={146.501} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={181.423} r={6.813} fill="#e6e6e6" />
      <circle cx={703.75} cy={181.423} r={6.813} fill="#e6e6e6" />
      <circle cx={738.239} cy={181.423} r={6.813} fill="#e6e6e6" />
      <circle cx={772.728} cy={181.423} r={6.813} fill="#e6e6e6" />
      <circle cx={807.217} cy={181.423} r={6.813} fill={color} />
      <circle cx={841.706} cy={181.423} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={216.345} r={6.813} fill="#e6e6e6" />
      <circle cx={703.75} cy={216.345} r={6.813} fill="#e6e6e6" />
      <circle cx={738.239} cy={216.345} r={6.813} fill="#e6e6e6" />
      <circle cx={772.728} cy={216.345} r={6.813} fill="#e6e6e6" />
      <circle cx={807.217} cy={216.345} r={6.813} fill="#e6e6e6" />
      <circle cx={841.706} cy={216.345} r={6.813} fill="#e6e6e6" />
      <circle cx={531.305} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={565.794} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={600.283} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={634.772} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={669.261} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={703.75} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={738.239} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={772.728} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={807.217} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle cx={841.706} cy={251.267} r={6.813} fill="#e6e6e6" />
      <circle
        cx={639.531}
        cy={448.11}
        r={6.813}
        transform="rotate(-89.767 504.125 421.484)"
        fill="#e6e6e6"
      />
      <circle cx={565.794} cy={286.189} r={6.813} fill="#e6e6e6" />
      <circle
        cx={639.531}
        cy={483.032}
        r={6.813}
        transform="rotate(-89.767 504.125 456.406)"
        fill="#e6e6e6"
      />
      <circle cx={565.794} cy={321.111} r={6.813} fill="#e6e6e6" />
      <circle cx={634.772} cy={321.111} r={6.813} fill="#e6e6e6" />
      <path
        d="M978.548 80.384h-270a5.006 5.006 0 01-5-5V8.408a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zm-270-74.976a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3V8.408a3.003 3.003 0 00-3-3z"
        fill="#e6e6e6"
      />
      <circle cx={743.548} cy={41.896} r={21} fill={color} />
      <path
        d="M792.048 27.896a3.5 3.5 0 000 7h93a3.5 3.5 0 000-7zM792.048 48.896a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7z"
        fill="#e6e6e6"
      />
      <path
        d="M631.548 216.384h-270a5.006 5.006 0 01-5-5v-66.976a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zm-270-74.976a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3v-66.976a3.003 3.003 0 00-3-3z"
        fill="#3f3d56"
      />
      <circle cx={396.548} cy={177.896} r={21} fill={color} />
      <path
        d="M445.048 163.896a3.5 3.5 0 000 7h97a3.5 3.5 0 000-7zM445.048 184.896a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7zM875.548 363.384h-270a5.006 5.006 0 01-5-5v-66.976a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zm-270-74.976a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3v-66.976a3.003 3.003 0 00-3-3z"
        fill="#e6e6e6"
      />
      <circle cx={640.548} cy={324.896} r={21} fill={color} />
      <path
        d="M689.048 310.896a3.5 3.5 0 000 7h89a3.5 3.5 0 000-7zM689.048 331.896a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7z"
        fill="#e6e6e6"
      />
    </svg>
  );
};

SvgBusinessDecisions.propTypes = {
  color: PropTypes.string
};
SvgBusinessDecisions.defaultProps = {
  color: "primary"
};
export default SvgBusinessDecisions;
