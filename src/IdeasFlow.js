import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgIdeasFlow = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1101.648 863.943"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M503.801 614.899l.006-1.848c3.673.011 7.403-.052 11.085-.187l.068 1.846c-3.707.136-7.46.2-11.159.189zm-11.154-.25c-3.693-.157-7.44-.39-11.136-.694l.151-1.841c3.673.302 7.395.534 11.063.689zm33.453-.572l-.14-1.843c3.667-.281 7.378-.642 11.03-1.07l.217 1.835c-3.677.432-7.414.794-11.107 1.078zm-55.69-1.26a280.918 280.918 0 01-11.045-1.583l.299-1.823c3.622.594 7.314 1.123 10.972 1.572zm77.85-1.342l-.289-1.825a275.726 275.726 0 0010.91-1.954l.363 1.81c-3.638.73-7.334 1.391-10.984 1.97zm-99.868-2.269a278.441 278.441 0 01-10.882-2.47l.445-1.794c3.564.886 7.2 1.711 10.81 2.454zm121.748-2.111l-.436-1.795c3.58-.87 7.185-1.822 10.716-2.832l.508 1.777a276.053 276.053 0 01-10.788 2.85zm-143.404-3.269a279.35 279.35 0 01-10.646-3.344l.59-1.752c3.48 1.172 7.039 2.29 10.574 3.323zm164.856-2.869l-.58-1.754a274.045 274.045 0 0010.452-3.692l.651 1.73a274.664 274.664 0 01-10.523 3.716zm-186.033-4.26a277.553 277.553 0 01-10.364-4.208l.73-1.697a273.896 273.896 0 0010.295 4.18zm206.89-3.584l-.72-1.702a275.519 275.519 0 0010.094-4.513l.789 1.672a279.294 279.294 0 01-10.163 4.543zm-227.436-5.247a275.419 275.419 0 01-9.984-5.032l.865-1.631a275 275 0 009.916 4.997zm247.574-4.248l-.855-1.637a277.68 277.68 0 009.704-5.317l.92 1.602a279.928 279.928 0 01-9.77 5.352zm-267.327-6.213a276.442 276.442 0 01-9.539-5.818l.994-1.557a276.072 276.072 0 009.475 5.78zm286.647-4.882l-.984-1.564a276.633 276.633 0 009.252-6.082l1.045 1.523a276.66 276.66 0 01-9.313 6.123zm-305.48-7.13a277.56 277.56 0 01-9.038-6.563l1.116-1.472a278.118 278.118 0 008.976 6.519zm323.857-5.486l-1.107-1.48a276.634 276.634 0 008.74-6.807l1.164 1.435a278.914 278.914 0 01-8.797 6.852zm-341.659-7.996a279.731 279.731 0 01-8.478-7.263l1.23-1.378c2.747 2.45 5.58 4.877 8.422 7.214zm358.975-6.057l-1.221-1.386c2.76-2.43 5.51-4.95 8.17-7.488l1.275 1.337a280.275 280.275 0 01-8.224 7.537zm-375.632-8.8a283.486 283.486 0 01-7.866-7.914l1.336-1.277a279.143 279.143 0 007.815 7.862zm391.775-6.6l-1.328-1.286a277.419 277.419 0 007.55-8.12l1.377 1.232a281.021 281.021 0 01-7.6 8.174zM296.56 520.92a278.801 278.801 0 01-7.206-8.516l1.434-1.164a274.627 274.627 0 007.158 8.457zm422.05-7.114l-1.427-1.174a278.044 278.044 0 006.877-8.702l1.473 1.116a280.7 280.7 0 01-6.923 8.76zm-436.114-10.195a279.3 279.3 0 01-6.498-9.06l1.523-1.046a276.257 276.257 0 006.455 9zm449.604-7.598l-1.516-1.055a279.426 279.426 0 006.159-9.231l1.557.994a280.622 280.622 0 01-6.2 9.292zM269.87 485.24a279.688 279.688 0 01-5.747-9.546l1.601-.92a278.239 278.239 0 005.71 9.482zm474.254-8.056l-1.595-.93c1.86-3.191 3.676-6.455 5.398-9.702l1.631.866a278.571 278.571 0 01-5.434 9.766zm-485.358-11.26a277.736 277.736 0 01-4.957-9.972l1.67-.788a276.995 276.995 0 004.924 9.905zm495.83-8.486l-1.667-.8a275.628 275.628 0 004.598-10.11l1.697.73a277.923 277.923 0 01-4.629 10.18zm-505.337-11.644a275.677 275.677 0 01-4.133-10.333l1.728-.651a274.823 274.823 0 004.106 10.262zm514.18-8.899l-1.726-.66a277.638 277.638 0 003.765-10.457l1.75.59a277.57 277.57 0 01-3.79 10.527zm-522.036-11.954a274.708 274.708 0 01-3.292-10.663l1.776-.508a273.852 273.852 0 003.27 10.59zm529.176-9.22l-1.774-.518a274.269 274.269 0 002.897-10.699l1.792.446a275.372 275.372 0 01-2.915 10.772zm-535.325-12.23c-.876-3.601-1.69-7.266-2.418-10.894l1.812-.364a275.398 275.398 0 002.4 10.821zm540.717-9.42l-1.81-.374a275.223 275.223 0 002.02-10.898l1.823.3a277.634 277.634 0 01-2.033 10.972zm-545.11-12.457c-.58-3.65-1.095-7.368-1.53-11.053l1.836-.216c.431 3.66.943 7.354 1.52 10.98zm548.733-9.562l-1.834-.226a275.87 275.87 0 001.136-11.025l1.842.153c-.305 3.684-.69 7.418-1.144 11.098zm-551.346-12.595c-.286-3.692-.501-7.44-.64-11.141l1.847-.07c.137 3.677.35 7.4.635 11.068zm553.19-9.638l-1.845-.08c.156-3.68.242-7.409.254-11.081l.001-.612 1.848.006-.001.608a284.48 284.48 0 01-.257 11.159zM229.26 337.164l-1.848-.006.002-.31c.011-3.604.093-7.254.243-10.843l1.846.077a281.8 281.8 0 00-.242 10.776zm550.381-10.198c-.14-3.669-.357-7.392-.647-11.066l1.843-.145c.29 3.699.509 7.447.65 11.14zM230.186 315.02l-1.841-.15c.302-3.7.683-7.434 1.132-11.102l1.834.225a277.722 277.722 0 00-1.125 11.027zm547.72-10.15a274.344 274.344 0 00-1.532-10.977l1.825-.292a276.159 276.159 0 011.541 11.051zm-545.029-11.85l-1.823-.298a275.613 275.613 0 012.023-10.974l1.809.371a275.166 275.166 0 00-2.009 10.901zM774.4 282.985a275.593 275.593 0 00-2.413-10.818l1.795-.439c.878 3.59 1.695 7.254 2.429 10.891zm-537.067-11.677l-1.793-.444a276.28 276.28 0 012.904-10.776l1.774.517c-1.03 3.533-2 7.134-2.885 10.703zm531.805-9.853a273.757 273.757 0 00-3.282-10.587l1.754-.583a275.596 275.596 0 013.303 10.659zm-525.605-11.427l-1.75-.588a277.371 277.371 0 013.777-10.532l1.726.658a274.754 274.754 0 00-3.752 10.462zm518.613-9.606a275.51 275.51 0 00-4.117-10.258l1.7-.723a277.349 277.349 0 014.146 10.328zM251.461 229.27l-1.699-.73a277.313 277.313 0 014.618-10.183l1.667.797a274.795 274.795 0 00-4.586 10.116zm502.038-9.192a275.843 275.843 0 00-4.934-9.9l1.635-.858a274.424 274.424 0 014.968 9.967zm-492.46-10.844l-1.633-.863a278.313 278.313 0 015.424-9.773l1.597.93a276.146 276.146 0 00-5.387 9.706zm482.193-8.752a277.178 277.178 0 00-5.72-9.477l1.563-.986a279.548 279.548 0 015.758 9.54zm-471.031-10.433l-1.558-.993a279.185 279.185 0 016.19-9.3l1.517 1.056a276.938 276.938 0 00-6.15 9.237zm459.214-8.286a278.99 278.99 0 00-6.465-8.992l1.478-1.108a278.886 278.886 0 016.507 9.052zm-446.551-9.932l-1.474-1.114a279.957 279.957 0 016.914-8.768l1.427 1.173a278.042 278.042 0 00-6.867 8.71zm433.265-7.788a277.395 277.395 0 00-7.167-8.45l1.384-1.223a278.688 278.688 0 017.216 8.506zm-419.187-9.348l-1.38-1.228a279.907 279.907 0 017.59-8.183l1.33 1.283a279.3 279.3 0 00-7.54 8.128zm404.519-7.26a279.784 279.784 0 00-7.824-7.854l1.282-1.33a281.677 281.677 0 017.876 7.906zm-389.122-8.687l-1.277-1.335a281.107 281.107 0 018.217-7.547l1.222 1.385a279.283 279.283 0 00-8.162 7.497zm373.166-6.703a278.102 278.102 0 00-8.43-7.205l1.172-1.428a279.415 279.415 0 018.486 7.254zm-356.55-7.956l-1.166-1.433a278.398 278.398 0 018.79-6.862l1.108 1.479a276.725 276.725 0 00-8.731 6.816zm339.405-6.112a278.29 278.29 0 00-8.983-6.509l1.053-1.517a280.686 280.686 0 019.045 6.552zm-321.676-7.165l-1.048-1.522a278.38 278.38 0 019.307-6.133l.986 1.563a275.211 275.211 0 00-9.245 6.092zm303.452-5.488a276.073 276.073 0 00-9.482-5.768l.929-1.598a280.058 280.058 0 019.545 5.807zm-284.728-6.318l-.922-1.601c3.201-1.843 6.486-3.647 9.764-5.362l.857 1.636a276.323 276.323 0 00-9.699 5.327zm265.537-4.833a276.14 276.14 0 00-9.922-4.986l.796-1.667a276.112 276.112 0 019.989 5.02zM387.01 88.75l-.79-1.67a278.91 278.91 0 0110.158-4.555l.722 1.7a275.51 275.51 0 00-10.09 4.525zm225.895-4.144a274.986 274.986 0 00-10.3-4.168l.66-1.727a276.485 276.485 0 0110.368 4.197zM407.36 80.112l-.653-1.728c3.462-1.307 7-2.561 10.518-3.728l.582 1.753a274.543 274.543 0 00-10.447 3.703zm184.78-3.423a274.378 274.378 0 00-10.579-3.31l.517-1.774a276.486 276.486 0 0110.649 3.332zm-163.743-3.557l-.51-1.775a275.973 275.973 0 0110.785-2.864l.438 1.795a275.5 275.5 0 00-10.713 2.844zm142.46-2.63a273.39 273.39 0 00-10.812-2.442l.37-1.81c3.634.743 7.297 1.57 10.885 2.458zm-120.928-2.62l-.365-1.811c3.625-.73 7.32-1.396 10.982-1.981l.292 1.824a277.41 277.41 0 00-10.909 1.968zm99.214-1.825a276.367 276.367 0 00-10.974-1.56l.224-1.835c3.674.448 7.391.976 11.047 1.572zm-77.327-1.669l-.218-1.834c3.677-.436 7.413-.803 11.105-1.09l.143 1.841c-3.667.286-7.378.65-11.03 1.083zm55.326-1.01a278.831 278.831 0 00-11.064-.677l.077-1.846c3.704.153 7.45.382 11.137.681zm-33.229-.714l-.07-1.846A283.51 283.51 0 01505 60.616l-.003 1.847c-3.684-.005-7.413.062-11.084.201z"
        fill="#3f3d56"
      />
      <path
        fill="#f1f1f1"
        d="M1032.068 458.105L855.972 763.116l-58.213 100.827-11.091-6.402-110.761-63.947-82.683-47.74-300.639-173.568L334.648 0l697.42 458.105z"
      />
      <path
        d="M209.861 580.564c8.849-36.155 37.512-65.298 73.892-73.773a100.828 100.828 0 0158.178 3.74c18.935 7.143 35.177 19.847 50.292 33.006 29.198 25.42 57.48 51.881 92.75 68.843 31.505 15.151 66.98 21.586 101.237 12.551a105.324 105.324 0 0042.173-21.733c12.509-10.829 21.31-25.006 27.149-40.38 12.238-32.225 11.995-67.474 21.34-100.45 4.814-16.995 12.458-33.05 24.665-46 12.068-12.804 27.428-22.186 43.72-28.625 38.636-15.27 80.454-14.031 121.267-13.492 38.572.509 78.1-.156 114.23-15.346 16.1-6.769 31.129-16.337 43.007-29.248 12.655-13.754 21.085-30.668 27.121-48.224 3.116-9.063 5.598-18.323 7.83-27.638.831-3.467-4.512-4.946-5.344-1.473-4.622 19.284-10.366 38.59-20.527 55.762a106.897 106.897 0 01-39.147 38.307c-34.041 19.557-74.227 22.53-112.63 22.445-41.215-.092-83.376-3.16-123.41 8.777-32.58 9.714-62.564 29.176-77.65 60.544-15.017 31.225-15.542 66.658-23.018 99.943-3.713 16.531-9.265 32.808-19.222 46.686-9.926 13.833-24.14 24.17-39.876 30.475-33.643 13.48-71.16 9.527-103.817-4.772-36.612-16.03-65.937-42.735-95.574-68.81-14.277-12.56-29.292-24.79-46.62-32.906a105.261 105.261 0 00-147.36 70.318c-.849 3.464 4.495 4.942 5.344 1.473z"
        fill="#3f3d56"
      />
      <path
        d="M602.42 716.49H509.6a324.642 324.642 0 010-110.67h92.82a199.133 199.133 0 000 110.67z"
        fill="#ff6584"
      />
      <path
        d="M255.208 605.603h92.82a324.642 324.642 0 000-110.67h-92.82a199.133 199.133 0 010 110.67z"
        fill={color}
      />
      <path
        d="M274.878 541.49a22.218 22.218 0 0119.23 1.445c4.877 2.725 9.301 6.053 14.961 6.922a23.132 23.132 0 0013.582-2.076c5.407-2.643 8.745-7.732 13.374-11.382 2.597-2.048-1.064-5.665-3.637-3.637-4.52 3.565-7.745 8.75-13.252 10.94-5.897 2.345-11.636 1.148-16.984-1.933-4.31-2.483-8.328-5.326-13.278-6.407a27.154 27.154 0 00-15.363 1.169c-3.075 1.143-1.744 6.115 1.367 4.958zM274.878 566.345a22.218 22.218 0 0119.23 1.445c4.877 2.726 9.301 6.054 14.961 6.922a23.132 23.132 0 0013.582-2.075c5.407-2.644 8.745-7.733 13.374-11.383 2.597-2.048-1.064-5.664-3.637-3.636-4.52 3.565-7.745 8.75-13.252 10.94-5.897 2.344-11.636 1.148-16.984-1.933-4.31-2.484-8.328-5.327-13.278-6.407a27.154 27.154 0 00-15.363 1.168c-3.075 1.143-1.744 6.115 1.367 4.959zM577.119 638.34a22.218 22.218 0 00-19.23 1.446c-4.877 2.725-9.302 6.053-14.961 6.921a23.131 23.131 0 01-13.582-2.075c-5.407-2.644-8.745-7.733-13.374-11.383-2.597-2.048 1.064-5.664 3.636-3.636 4.521 3.565 7.745 8.75 13.253 10.94 5.896 2.344 11.636 1.148 16.983-1.933 4.311-2.484 8.329-5.326 13.278-6.407a27.154 27.154 0 0115.364 1.168c3.075 1.143 1.744 6.116-1.367 4.959zM577.119 662.338a22.218 22.218 0 00-19.23 1.446c-4.877 2.725-9.302 6.053-14.961 6.922a23.131 23.131 0 01-13.582-2.076c-5.407-2.644-8.745-7.732-13.374-11.382-2.597-2.048 1.064-5.665 3.636-3.637 4.521 3.565 7.745 8.75 13.253 10.94 5.896 2.345 11.636 1.148 16.983-1.933 4.311-2.483 8.329-5.326 13.278-6.407a27.154 27.154 0 0115.364 1.168c3.075 1.143 1.744 6.116-1.367 4.96zM577.119 686.337a22.218 22.218 0 00-19.23 1.445c-4.877 2.725-9.302 6.053-14.961 6.922a23.131 23.131 0 01-13.582-2.076c-5.407-2.643-8.745-7.732-13.374-11.382-2.597-2.048 1.064-5.664 3.636-3.636 4.521 3.565 7.745 8.749 13.253 10.94 5.896 2.344 11.636 1.148 16.983-1.933 4.311-2.484 8.329-5.327 13.278-6.407a27.154 27.154 0 0115.364 1.168c3.075 1.143 1.744 6.115-1.367 4.959z"
        fill="#f2f2f2"
      />
      <path
        d="M760.137 207.995c-19.865-33.565-59.166-35.13-59.166-35.13s-38.297-4.897-62.864 46.224c-22.898 47.649-54.501 93.654-5.088 104.809l8.926-27.78 5.527 29.848a193.34 193.34 0 0021.143.361c52.917-1.708 103.314.5 101.69-18.49-2.156-25.242 8.946-67.545-10.168-99.842z"
        fill="#2f2e41"
      />
      <path
        d="M624.524 526.725L557.53 573.25s-39.08 40.94-11.165 40.94 39.08-35.357 39.08-35.357l85.603-37.22z"
        fill="#ffb8b8"
      />
      <path
        d="M651.508 345.283s-58.62 181.442-40.01 190.747 59.55 14.887 59.55 14.887z"
        fill="#d0cde1"
      />
      <path
        d="M651.508 345.283s-58.62 181.442-40.01 190.747 59.55 14.887 59.55 14.887z"
        opacity={0.1}
      />
      <path
        d="M855.972 763.116l-58.213 100.827-11.091-6.402c-21.196-81.312-46.763-178.222-46.763-178.222l-63.998 114.275-82.683-47.74c19.79-42.606 53.628-142.833 53.628-142.833l150.744-76.298s48.382 29.775 50.242 102.353 1.86 115.381 1.86 115.381 2.46 7.071 6.274 18.659z"
        fill="#2f2e41"
      />
      <circle cx={688.727} cy={250.375} r={48.385} fill="#ffb8b8" />
      <path
        d="M687.796 290.385s11.166 35.358 0 48.385 61.411-18.61 61.411-18.61-26.053-37.218-18.609-53.967z"
        fill="#ffb8b8"
      />
      <path
        d="M756.6 298.093a47.688 47.688 0 01-4.601 6.25c-1.861 1.86-13.027 3.721-14.888 7.443s-29.301 9.027-29.301 9.027l-9.778 4s-46.524 11.165-46.524 20.47-3.722 37.219-3.722 37.219-14.887 16.748-5.583 57.69c3.585 15.774 8.583 46.376 5.78 78.809-4.47 51.741-17.646 107.575-3.919 111.006 22.331 5.583 85.604 7.444 106.074-20.47s22.331-52.106 44.663-53.967-3.722-78.16-3.722-78.16l27.914-182.372s-46.625-16.22-62.393 3.055z"
        fill="#d0cde1"
      />
      <path
        d="M700.402 588.734h92.82a324.643 324.643 0 000-110.67h-92.82a199.133 199.133 0 010 110.67z"
        fill={color}
      />
      <path
        d="M719.705 515.777a22.218 22.218 0 0119.23 1.445c4.877 2.726 9.301 6.054 14.96 6.922a23.132 23.132 0 0013.583-2.075c5.407-2.644 8.744-7.733 13.373-11.383 2.597-2.048-1.064-5.664-3.636-3.636-4.521 3.565-7.745 8.75-13.253 10.94-5.896 2.344-11.635 1.148-16.983-1.933-4.311-2.484-8.329-5.326-13.278-6.407a27.154 27.154 0 00-15.363 1.168c-3.075 1.143-1.745 6.116 1.367 4.959zM719.705 539.775a22.218 22.218 0 0119.23 1.446c4.877 2.725 9.301 6.053 14.96 6.922a23.131 23.131 0 0013.583-2.076c5.407-2.644 8.744-7.732 13.373-11.382 2.597-2.048-1.064-5.665-3.636-3.637-4.521 3.565-7.745 8.75-13.253 10.94-5.896 2.345-11.635 1.148-16.983-1.933-4.311-2.484-8.329-5.326-13.278-6.407a27.154 27.154 0 00-15.363 1.168c-3.075 1.143-1.745 6.116 1.367 4.96z"
        fill="#f2f2f2"
      />
      <path
        d="M853.42 411.347l-66.994 46.523s-39.08 40.941-11.165 40.941 39.08-35.358 39.08-35.358l85.603-37.219z"
        fill="#ffb8b8"
      />
      <path
        d="M738.328 204.76L699.5 184.422l-24.36 3.78a43.55 43.55 0 00-35.797 33.417l-4.556 20.12 27.616-1.063 7.714-18v17.704l12.743-.49 7.395-28.659 4.623 30.508 45.299-.925z"
        fill="#2f2e41"
      />
      <path
        d="M805.966 298.76l13.027-3.722s132.127 53.967 128.405 100.49 1.86 46.524-20.47 48.385-87.465-20.47-85.604-24.192 14.888-22.331 14.888-22.331l-50.246-39.08z"
        fill="#d0cde1"
      />
      <circle cx={737.111} cy={250.375} r={7.444} fill="#ffb8b8" />
      <path
        d="M810.25 374.622c48.566-2.62 97.806 4.275 145.587-7.478 3.462-.851 1.995-6.198-1.474-5.345-47.26 11.625-96.07 4.688-144.113 7.28-3.548.192-3.57 5.736 0 5.543z"
        fill="#3f3d56"
      />
      <path
        d="M1024.624 455.42l77.024-51.795a324.642 324.642 0 00-61.756-91.837l-77.025 51.796a199.133 199.133 0 0161.757 91.837z"
        fill={color}
      />
      <path
        d="M1005.17 391.242a22.218 22.218 0 0116.764-9.531c5.568-.46 11.096-.168 16.278-2.605a23.131 23.131 0 0010.112-9.302c3.012-5.21 2.942-11.296 4.746-16.908 1.013-3.148-4.044-4.107-5.046-.988-1.763 5.48-1.545 11.582-4.893 16.473-3.585 5.236-9.015 7.446-15.172 7.873-4.963.345-9.883.228-14.594 2.093a27.154 27.154 0 00-12.097 9.542c-1.913 2.665 1.965 6.049 3.902 3.353zM1019.04 411.867a22.218 22.218 0 0116.764-9.53c5.568-.46 11.096-.168 16.277-2.606a23.132 23.132 0 0010.113-9.3c3.012-5.212 2.942-11.297 4.746-16.91 1.013-3.148-4.044-4.106-5.046-.987-1.763 5.48-1.545 11.582-4.893 16.473-3.585 5.236-9.015 7.446-15.172 7.873-4.963.345-9.884.228-14.594 2.093a27.154 27.154 0 00-12.097 9.542c-1.913 2.665 1.965 6.048 3.902 3.352z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M.328 50.564l389.292 1.273-.328 100.229L0 150.793z"
      />
      <circle cx={46.687} cy={100.679} r={27.272} fill={color} />
      <path
        fill="#fff"
        d="M103.98 77.872l112.83.37-.026 8.02-112.83-.369zM103.916 97.123l248.655.813-.027 8.021-248.654-.813zM103.854 116.373l248.655.813-.027 8.021-248.654-.813z"
      />
      <path
        fill="#3f3d56"
        d="M.328 317.564l389.292 1.273-.328 100.229L0 417.793z"
      />
      <circle cx={46.687} cy={367.679} r={27.272} fill={color} />
      <path
        fill="#fff"
        d="M103.98 344.872l112.83.37-.026 8.02-112.83-.369zM103.916 364.123l248.655.813-.027 8.021-248.654-.813zM103.854 383.373l248.655.813-.027 8.021-248.654-.813z"
      />
      <path
        fill="#3f3d56"
        d="M483.297 284.392l-389.292 1.273-.328-100.228 389.292-1.273z"
      />
      <circle cx={436.61} cy={234.278} r={27.272} fill={color} />
      <path
        fill="#fff"
        d="M379.343 219.493l-112.83.369-.027-8.02 112.83-.37zM379.406 238.743l-248.654.814-.027-8.021 248.655-.813zM379.47 257.994l-248.656.813-.026-8.021 248.655-.813z"
      />
    </svg>
  );
};

SvgIdeasFlow.propTypes = {
  color: PropTypes.string
};
SvgIdeasFlow.defaultProps = {
  color: "primary"
};
export default SvgIdeasFlow;
