import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgHealthyOptions = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1030.475 865.228"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M274.463 526c-2.775 0-5.577-.044-8.328-.13l.062-1.998c3.95.123 7.982.157 11.95.103l.028 2q-1.853.025-3.712.025zm15.745-.464l-.117-1.996c3.956-.233 7.963-.561 11.909-.975l.209 1.989c-3.977.417-8.014.748-12.001.982zm-36.096-.311c-3.989-.306-8.02-.706-11.982-1.193l.244-1.984c3.932.481 7.932.88 11.89 1.182zm60.04-2.2l-.3-1.976c3.93-.597 7.891-1.29 11.769-2.06l.39 1.961a265.15 265.15 0 01-11.86 2.075zm-83.936-.731a263.67 263.67 0 01-11.823-2.283l.424-1.955c3.875.841 7.822 1.603 11.733 2.265zm107.549-3.962l-.48-1.941a261.855 261.855 0 0011.531-3.134l.569 1.918a263.11 263.11 0 01-11.62 3.157zm-131.077-1.146a260.895 260.895 0 01-11.562-3.364l.602-1.906a258.757 258.757 0 0011.474 3.336zm154.159-5.702l-.657-1.888a260.518 260.518 0 0011.195-4.184l.742 1.858a262.183 262.183 0 01-11.28 4.214zM183.7 509.918a260.897 260.897 0 01-11.227-4.426l.776-1.844a259.472 259.472 0 0011.141 4.393zm199.475-7.368l-.828-1.82a260.012 260.012 0 0010.742-5.184l.91 1.781a262.722 262.722 0 01-10.824 5.223zm21.398-10.939l-.99-1.736a263.494 263.494 0 0010.23-6.148l1.068 1.689a262.378 262.378 0 01-10.308 6.195zm20.323-12.857l-1.144-1.639a263.933 263.933 0 009.63-7.06l1.22 1.586a263.936 263.936 0 01-9.706 7.113zm-304.825-2.816a265.581 265.581 0 01-9.585-7.302l1.248-1.563a263.446 263.446 0 009.511 7.245zm323.903-11.846l-1.29-1.53a264.608 264.608 0 008.954-7.91l1.357 1.47a265.618 265.618 0 01-9.021 7.97zm-342.728-3.186a264.426 264.426 0 01-8.877-8.14l1.384-1.443a262.983 262.983 0 008.81 8.08zm360.4-13.16l-1.423-1.405a264.71 264.71 0 008.2-8.695l1.487 1.337a265.722 265.722 0 01-8.264 8.762zm-377.773-3.513a266.276 266.276 0 01-8.096-8.91l1.51-1.31a262.75 262.75 0 008.036 8.842zm393.893-14.38l-1.544-1.269a263.006 263.006 0 007.377-9.41l1.602 1.198a263.011 263.011 0 01-7.435 9.482zm-409.67-3.796a264.108 264.108 0 01-7.25-9.605l1.623-1.168a263.74 263.74 0 007.195 9.532zm424.1-15.497l-1.655-1.123a260.986 260.986 0 006.492-10.048l1.705 1.047a265.334 265.334 0 01-6.543 10.124zm-438.152-4.03a265.45 265.45 0 01-6.34-10.22l1.723-1.015a263.257 263.257 0 006.292 10.142zm450.766-16.51l-1.75-.967a262.066 262.066 0 005.546-10.607l1.793.887a263.632 263.632 0 01-5.589 10.687zm10.681-21.622l-1.832-.802a260.771 260.771 0 004.549-11.078l1.867.716a263.068 263.068 0 01-4.584 11.164zM31.59 364.083a262.33 262.33 0 01-4.364-11.19l1.88-.684a260.229 260.229 0 004.33 11.104zm492.55-18.216l-1.898-.629a258.882 258.882 0 003.5-11.426l1.926.541a262.363 262.363 0 01-3.527 11.514zm-500.767-4.383a262.851 262.851 0 01-3.323-11.574l1.935-.508a260.88 260.88 0 003.298 11.487zM530.66 322.69l-1.948-.453a260.32 260.32 0 002.433-11.698l1.967.361a261.681 261.681 0 01-2.452 11.79zm-513.394-4.494a263.187 263.187 0 01-2.243-11.83l1.973-.328c.65 3.915 1.399 7.864 2.226 11.74zm517.753-19.183l-1.983-.272c.538-3.917.992-7.91 1.35-11.872l1.993.18c-.361 3.992-.82 8.016-1.36 11.964zm-521.694-4.567a266.029 266.029 0 01-1.152-11.984l1.995-.147c.29 3.964.675 7.965 1.143 11.895zm523.868-19.409l-1.998-.09c.178-3.963.269-7.982.269-11.946h2c0 3.994-.091 8.044-.27 12.036zm-525.626-4.601a270.103 270.103 0 01-.103-7.435q0-2.309.04-4.608l2 .035q-.04 2.282-.04 4.573c0 2.462.035 4.945.102 7.38zm2.411-23.948l-1.996-.125c.25-3.996.594-8.032 1.023-11.997l1.989.216c-.427 3.934-.768 7.94-1.016 11.906zm520.194-12.202c-.399-3.943-.948-5.865-1.528-9.79l1.978-.293c.584 3.956 1.085 6.975 1.488 10.948zM16.55 222.734l-1.977-.306a262.466 262.466 0 012.116-11.854l1.96.397a260.704 260.704 0 00-2.1 11.763zm514.074-10.016a262.67 262.67 0 00-2.559-11.672l1.944-.473c.942 3.873 1.81 7.83 2.578 11.761zM21.287 199.317l-1.94-.486c.971-3.874 2.047-7.78 3.197-11.61l1.915.575a261.182 261.182 0 00-3.172 11.52zm503.685-9.814a260.228 260.228 0 00-3.622-11.386l1.89-.65a261.593 261.593 0 013.652 11.474zm-496.8-13.1l-1.887-.663a262.11 262.11 0 014.265-11.29l1.855.75a259.626 259.626 0 00-4.233 11.203zm489.033-9.494a262.395 262.395 0 00-4.645-10.98l1.825-.821a263.718 263.718 0 014.68 11.063zM37.148 154.206l-1.817-.835a263.149 263.149 0 015.284-10.842l1.778.917a260.731 260.731 0 00-5.245 10.76zm470.269-9.036a261.671 261.671 0 00-5.637-10.514l1.74-.986a262.91 262.91 0 015.68 10.596zM48.125 132.94l-1.733-.997c1.995-3.464 4.1-6.932 6.254-10.306l1.685 1.076a262.115 262.115 0 00-6.206 10.228zm447.542-8.534a263.895 263.895 0 00-6.577-9.962l1.642-1.14a264.794 264.794 0 016.628 10.038zM60.998 112.782l-1.634-1.152c2.305-3.27 4.716-6.53 7.166-9.688l1.58 1.226a263.396 263.396 0 00-7.112 9.614zm421.064-7.992a263.191 263.191 0 00-7.461-9.327l1.533-1.285a266.73 266.73 0 017.518 9.398zM75.652 93.891l-1.523-1.297a265.874 265.874 0 018.015-8.99l1.462 1.364a264.854 264.854 0 00-7.954 8.923zm391.07-7.408a263.902 263.902 0 00-8.283-8.614l1.41-1.419a266.89 266.89 0 018.345 8.68zM91.956 76.419l-1.398-1.43c2.86-2.798 5.82-5.564 8.795-8.22l1.332 1.491a262.867 262.867 0 00-8.729 8.159zm357.818-6.78a264.082 264.082 0 00-9.035-7.828l1.276-1.541a266.496 266.496 0 019.103 7.888zm-340-9.132l-1.262-1.55a265.356 265.356 0 019.502-7.385l1.192 1.607a263.477 263.477 0 00-9.431 7.328zm19.183-14.217l-1.116-1.66a264.434 264.434 0 0110.13-6.484l1.04 1.71a263.319 263.319 0 00-10.054 6.434zm20.388-12.401l-.96-1.755a264.285 264.285 0 0110.673-5.528l.88 1.797a261.615 261.615 0 00-10.593 5.486zm241.37-4.634a261.335 261.335 0 00-10.835-5.09l.808-1.83a262.975 262.975 0 0110.92 5.13zM170.767 23.41l-.795-1.835a262.66 262.66 0 0111.128-4.523l.71 1.87a260.24 260.24 0 00-11.043 4.488zm198.051-3.835a260.263 260.263 0 00-11.265-4.072l.636-1.896c3.801 1.276 7.62 2.656 11.352 4.104zM193.075 14.94l-.623-1.9c3.8-1.246 7.679-2.42 11.526-3.486l.534 1.927a259.488 259.488 0 00-11.437 3.46zm153.064-2.973a259.998 259.998 0 00-11.564-3.01l.46-1.946c3.888.916 7.808 1.937 11.652 3.032zM216.097 8.55l-.445-1.95c3.896-.89 7.865-1.7 11.797-2.41l.355 1.968c-3.902.704-7.84 1.509-11.707 2.392zm106.788-2.067a260.759 260.759 0 00-11.791-1.933l.277-1.98c3.96.556 7.958 1.211 11.883 1.948zm-83.276-2.176l-.264-1.982c3.959-.529 7.985-.973 11.966-1.32l.174 1.993c-3.95.344-7.946.785-11.876 1.31zm59.617-1.147c-3.94-.371-7.95-.658-11.92-.85l.098-1.997c4 .193 8.04.482 12.009.856zm-35.815-.93l-.084-1.998C267.003.08 270.75.001 274.463 0l.905.002-.006 2-.9-.002c-3.685.001-7.403.079-11.05.23z"
        fill="#3f3d56"
      />
      <path
        d="M596.241 94.206v648.2a29.14 29.14 0 01-29.13 29.11h-263.15a29.08 29.08 0 01-29.13-29.11v-648.2a29.127 29.127 0 0129.13-29.13h39.38v5.05a23.987 23.987 0 0023.98 23.99h133.84a23.79 23.79 0 0014.22-4.68 22.285 22.285 0 002.36-1.98 23.917 23.917 0 007.4-17.33v-5.05h41.97a29.121 29.121 0 0129.13 29.13z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M313.304 298.746h244.465v186H313.304zM184.571 267.407c21.766.467 39.08 16.24 39.08 16.24s-17.974 15.016-39.74 14.55-39.08-16.24-39.08-16.24 17.975-15.017 39.74-14.55zM75.144 193.109c19.664 9.342 42.213 3.007 42.213 3.007s-9.333-21.482-28.998-30.824-42.213-3.007-42.213-3.007 9.334 21.482 28.998 30.824z"
      />
      <path
        d="M77.143 183.825c21.68-1.981 40.657 11.747 40.657 11.747s-16.174 16.94-37.854 18.922-40.658-11.747-40.658-11.747 16.175-16.94 37.855-18.922zM156.617 187.579c-2.078 21.671 11.565 40.709 11.565 40.709s17.013-16.098 19.09-37.77-11.565-40.71-11.565-40.71-17.012 16.1-19.09 37.77zM258.721 320.489c-11.371 18.565-7.46 41.657-7.46 41.657s22.35-7.006 33.722-25.571 7.459-41.658 7.459-41.658-22.35 7.007-33.721 25.572z"
        fill="#3f3d56"
      />
      <path
        d="M225.73 522.337l1.658-1.12a51.919 51.919 0 01-9.163-28.792c.046-15.058 7.442-28.985 14.595-42.454 1.328-2.5 2.651-4.992 3.924-7.482a163.334 163.334 0 0012.704-31.893c11.095-41.23.171-89.873-29.22-130.122-23.315-31.929-58.07-59.849-106.253-85.355l-.936 1.767c47.908 25.362 82.442 53.09 105.575 84.768 29.037 39.763 39.841 87.772 28.902 128.423a161.394 161.394 0 01-12.552 31.502c-1.27 2.48-2.588 4.963-3.91 7.454-7.267 13.684-14.781 27.833-14.829 43.386a53.937 53.937 0 009.506 29.918z"
        fill="#3f3d56"
      />
      <circle cx={19} cy={178.747} r={19} fill="#3f3d56" />
      <path
        fill={color}
        d="M286.462 487.161l-119.269-9.939V302.294l119.269-5.963v190.83zM584.61 487.161l119.269-9.939V302.294l-119.269-5.963v190.83z"
      />
      <path
        d="M476.994 368.56a23.83 23.83 0 00-26.15-3.325 35.293 35.293 0 01-11.607 3.321 67.181 67.181 0 014.718-25.516l.528-1.361h-7.01l-.201.736a77.59 77.59 0 00-1.843 8.725 22.622 22.622 0 00-1.467-3.703c-4.917-9.749-16.278-13.736-16.76-13.9l-.968-.332-.309.976c-.153.485-3.7 11.99 1.216 21.74 3.52 6.98 10.343 11.005 14.111 12.79a36.266 36.266 0 01-13.718-3.67 16 16 0 00-16.938 1.43c-13.088 9.945-20.595 24.524-20.595 39.999 0 20.328 13.164 38.944 33.538 47.427a15.088 15.088 0 005.799 1.15 15.38 15.38 0 007.85-2.152 20.766 20.766 0 0120.81-.042 15.342 15.342 0 0013.66.961C481.913 445.3 495 426.714 495 406.47c0-14.491-6.396-27.954-18.007-37.91zm-37.99-24.881h2.573a68.957 68.957 0 00-4.356 24.241h-.46a72.747 72.747 0 012.242-24.241zm-20.077 11.341c-3.733-7.4-2.096-16.222-1.372-19.199 2.823 1.185 10.881 5.102 14.621 12.516 3.732 7.4 2.096 16.22 1.372 19.198-2.825-1.188-10.89-5.116-14.62-12.515zm41.955 96.95a13.322 13.322 0 01-11.87-.842 22.766 22.766 0 00-22.845.048 13.311 13.311 0 01-11.86.875c-19.625-8.171-32.306-26.063-32.306-45.581 0-14.844 7.219-28.843 19.805-38.407a13.856 13.856 0 018.386-2.8 14.016 14.016 0 016.425 1.555 41.285 41.285 0 0035.117.208 21.83 21.83 0 0123.957 3.052c11.162 9.57 17.31 22.494 17.31 36.392 0 19.438-12.608 37.298-32.119 45.5zM226.5 349.66v-2.348h.934v-7.314a2.958 2.958 0 00-1.58-2.637c-4.128-2.153-8.564-2.15-13.184.01a2.98 2.98 0 00-1.702 2.698v7.243h.933v2.126a16.298 16.298 0 00-11.9 15.758v15.826l1.777.593-1.777 1.184v4.756l1.777.593-1.777 1.185v4.756l1.777.592-1.777 1.185v36.223a10.67 10.67 0 0010.657 10.657h15.71a10.645 10.645 0 0010.633-10.633v-36.247l-1.778-1.185 1.778-.592v-4.756l-1.778-1.185 1.778-.593V382.8l-1.778-1.184 1.778-.593v-16.644a15.646 15.646 0 00-10.5-14.718zm-12.984-10.477c4.085-1.908 7.818-1.924 11.412-.048a.976.976 0 01.506.864v3.914h-12.466v-3.844a.975.975 0 01.548-.886zm21.485 40.398l-4.29 1.43 4.29 2.859v2.244l-4.29 1.43 4.29 2.86v2.244l-4.29 1.429 4.29 2.86v35.176a8.643 8.643 0 01-8.633 8.633h-15.71A8.667 8.667 0 01202 432.09v-35.152l4.289-2.86-4.29-1.43v-2.244l4.29-2.86-4.29-1.43v-2.243l4.29-2.86-4.29-1.43v-14.384a14.312 14.312 0 0111.126-14.008l.775-.18v-3.695h10.6v3.83l.721.21a13.63 13.63 0 019.779 13.025zM696.564 377.048l-5.035-1.006 1.186-2.372-2.31-.462.4-2.401-2.522-.421v-2.278l-2.046-.585 1.942-2.427h-3.37l.704-1.758-2.492-.415.846-2.963h-2.696v-2.766h-1c-3.15 0-4.908 3.742-5.485 5.24-17.392 3.034-67.891 38.012-73.655 42.035-2.394-.777-5.946 1.044-6.687 1.448l-1.174.64 1.693 1.693-.505 1.514 3.108 1.165-.681 1.7 1.957 1.633-1.758 1.32 2.646 1.587-.465 2.32 2.955.423v2.322l1.716.344-.856 2.998h1.905v2.371h1.86l.843 2.526.865-.174c2.012-.403 3.734-3.186 4.408-4.42 16.75-2.99 68.464-39.373 73.498-42.936 5.876.704 8.035-.866 8.267-1.05l.956-.766-2.283-1.902zm-10.334 3.863l-.39-.053-.32.228c-.572.406-57.286 40.586-73.454 42.895l-.518.075-.235.468a12.005 12.005 0 01-2.473 3.382l-.654-1.959h-1.3v-2.37h-1.255l.724-2.534-2.235-.447v-2.418l-2.578-.368.326-1.631-1.306-.784 1.403-1.051-2.784-2.32.9-2.25-3.215-1.206.286-.857-.621-.622c1.502-.624 3.318-1.089 4.099-.622l.557.335.532-.373c.567-.398 56.896-39.797 73.845-42.108l.633-.086.189-.61c.29-.946 1.326-3.334 2.785-4.151v2.485h2.046l-.735 2.569 2.25.375-.878 2.193h2.163l-1.22 1.525 3.486.996v2.463l2.22.37-.389 2.34 1.642.328-1.186 2.37 2.867.575-1.476.983 2.123 1.77a15.977 15.977 0 01-5.854.095z"
        fill="#fff"
      />
      <circle cx={435.536} cy={540.746} r={29} fill={color} />
      <path
        fill="#fff"
        d="M453.795 537.882H438.4v-15.395h-5.728v15.395h-15.395v5.728h15.395v15.395h5.728V543.61h15.395v-5.728zM527.001 541.746l-15-7v4h-35v6h35v4l15-7zM344.072 541.746l15-7v4h35v6h-35v4l-15-7z"
      />
      <path fill="#3f3d56" d="M69.036 771.746h733v2h-733z" />
      <path
        fill="#fff"
        d="M339.536 159.746h192v2h-192zM340.001 705.746h192v2h-192z"
      />
      <path d="M840.5 508.246l-5 19s-18 40 0 42 19-52 19-52z" fill="#a0616a" />
      <path d="M871.5 371.246l-36 142s14 4 21 9z" fill="#d0cde1" />
      <path
        d="M984.5 479.246l10 155s24 61 23 119c0 0-9 23-2 27s11 7 7 10-7 10-4 12 4 5 3 5h-30s6-15-3-19-4-14-4-14l-67-196-53 180s9 6 2 9-10-3-7 3-1 9-1 10-30-3-30-3 15-13 8-16-10-6-8-8 10-21 10-21 4-72 5-75 0-17 0-24-1-35 2-42 6-93 22-103 117-9 117-9z"
        fill="#2f2e41"
      />
      <path
        d="M857.5 775.246s20 41 6 46-32 1-36 7-48 13-49-2 48-43 48-43l6.384-10.278zM1019.5 805.246s20 41 6 46-32 1-36 7-48 13-49-2 48-43 48-43l6.384-10.278z"
        fill="#2f2e41"
      />
      <circle cx={927.001} cy={257.746} r={33} fill="#a0616a" />
      <path fill="#a0616a" d="M949.501 275.246l-4 29-30 23-8-11v-38l42-3z" />
      <path
        d="M902.5 312.246s31 3 47-8l32 189s-113 9-118 3v-59l20-96z"
        fill="#3f3d56"
      />
      <path
        d="M946.747 295.21l10.754 9.036s44 7 41 19l-12 142 4 48s-34-9-60 0-5.344-193.403-5.344-193.403 23.837-21.67 21.59-24.633zM907.5 306.156s-32 23.09-36 38.09-17 173-17 173 6-3 9 2 49-205.181 44-213.09z"
        fill="#d0cde1"
      />
      <path
        d="M995.5 515.246l-7.168 23.392s-1.831 43.608-25.831 37.608 7-57 7-57l7-11z"
        fill="#a0616a"
      />
      <path
        d="M894.017 256.308s-3.573-5.358-2.199-11.13a33.731 33.731 0 00.962-10.03s2.885-9.343 5.77-14.564 1.512-7.42 10.58-9.069 5.36-13.465 29.268-.687a7.011 7.011 0 007.282 2.748c4.946-.962 6.733 5.909 6.733 5.909s3.297-1.924 4.534.824 10.054-1.65 10.054 16.9-10.034 35.119-10.034 35.119.736-31.203-15.615-34.363-33.939-12.366-38.198-.55a90.08 90.08 0 01-9.137 18.893z"
        fill="#2f2e41"
      />
      <ellipse cx={957.325} cy={259.427} rx={3.225} ry={4.3} fill="#a0616a" />
      <path
        d="M990.5 316.246s16-4 21 23 11 104 11 104l-24 81s-24-13-29-11l18.887-70.32-15.886-71.68s14-55 18-55z"
        fill="#d0cde1"
      />
      <path opacity={0.15} d="M967.237 372.614l21 70-21 71 12-71-12-70z" />
    </svg>
  );
};

SvgHealthyOptions.propTypes = {
  color: PropTypes.string
};
SvgHealthyOptions.defaultProps = {
  color: "primary"
};
const MemoSvgHealthyOptions = React.memo(SvgHealthyOptions);
export default MemoSvgHealthyOptions;
