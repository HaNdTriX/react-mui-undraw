import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgGravitas = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 879.195 815.147"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M795.385 568.848c-26.89 70.21-171.93 156.48-358.93 207.61-220.01 60.17-414.78 48.92-435.03-25.13-20.25-74.04 178.49 23.76 398.51-36.41 120.14-32.86 221.77-106.02 292.59-153.61 58.87-39.58 96.45-61.49 105.64-27.87 3.04 11.11 1.97 23.01-2.78 35.41z"
        fill="#3f3d56"
      />
      <ellipse cx={254.597} cy={755.733} rx={100} ry={10} opacity={0.1} />
      <ellipse cx={68.097} cy={746.733} rx={45.5} ry={10} opacity={0.1} />
      <path
        d="M481.206 457.318c-4 0-8.025-.13-11.986-.381l.127-1.996c3.924.25 7.91.377 11.848.377l.118-.001v2h-.094zm12.206-.398l-.131-1.996a185.64 185.64 0 0011.914-1.166l.26 1.982c-3.982.522-8.033.918-12.043 1.18zm-36.238-1.146a185.27 185.27 0 01-11.944-1.95l.387-1.962c3.894.768 7.87 1.417 11.815 1.927zm60.222-1.998l-.389-1.961c3.897-.774 7.82-1.687 11.659-2.714l.517 1.931a184.622 184.622 0 01-11.787 2.744zm-83.956-2.681a184.414 184.414 0 01-11.586-3.499l.64-1.895a182.62 182.62 0 0011.46 3.461zm107.324-3.577l-.642-1.895a181.76 181.76 0 0011.181-4.216l.768 1.848a184.947 184.947 0 01-11.307 4.263zm-130.258-4.186a184.654 184.654 0 01-11.038-4.999l.885-1.793a183.249 183.249 0 0010.918 4.945zm152.572-5.076l-.887-1.793a183.911 183.911 0 0010.542-5.648l1.002 1.73a185.187 185.187 0 01-10.657 5.711zm-174.293-5.636a185.466 185.466 0 01-10.284-6.4l1.111-1.661a183.53 183.53 0 0010.173 6.329zm195.214-6.473l-1.114-1.662a183.058 183.058 0 009.722-6.979l1.219 1.586a185.534 185.534 0 01-9.827 7.055zm-215.34-6.982a187.199 187.199 0 01-9.36-7.68l1.32-1.503a185.478 185.478 0 009.258 7.597zm234.517-7.755l-1.32-1.503a185.694 185.694 0 008.737-8.186l1.414 1.414a187.45 187.45 0 01-8.83 8.275zm-252.714-8.195c-2.844-2.84-5.63-5.81-8.28-8.827l1.501-1.32a184.891 184.891 0 008.192 8.731zm269.823-8.913l-1.504-1.319a184.69 184.69 0 007.603-9.254l1.586 1.219a186.951 186.951 0 01-7.685 9.354zm-285.792-9.258a186.795 186.795 0 01-7.061-9.823l1.66-1.114c2.213 3.3 4.563 6.568 6.986 9.717zm300.54-9.934l-1.662-1.112a184.51 184.51 0 006.336-10.17l1.73 1.003a186.19 186.19 0 01-6.404 10.279zm-314.006-10.148a185.18 185.18 0 01-5.718-10.654l1.792-.888c1.76 3.554 3.663 7.1 5.656 10.539zm326.13-10.81l-1.793-.887a183.033 183.033 0 004.952-10.915l1.848.766a184.754 184.754 0 01-5.007 11.035zm-336.854-10.848a184.831 184.831 0 01-4.27-11.304l1.893-.644c1.278 3.753 2.7 7.515 4.224 11.18zm346.132-11.532l-1.894-.642a182.993 182.993 0 003.468-11.458l1.932.516a184.918 184.918 0 01-3.506 11.584zm-353.925-11.35a184.804 184.804 0 01-2.753-11.786l1.962-.39c.776 3.897 1.692 7.82 2.723 11.657zm360.167-12.023l-1.963-.388a182.708 182.708 0 001.937-11.814l1.982.26a185.281 185.281 0 01-1.956 11.942zm-364.89-11.702a187.466 187.466 0 01-1.189-12.042l1.996-.132a185.22 185.22 0 001.175 11.913zm368.02-12.285l-1.997-.13c.255-3.95.385-7.976.385-11.964l-.001-.475h2l.001.469c0 4.036-.13 8.105-.389 12.1zm-367.613-11.855h-2v-.245c0-3.94.126-7.929.374-11.848l1.996.126c-.245 3.877-.37 7.823-.37 11.728zm365.585-12.678a184.043 184.043 0 00-1.19-11.912l1.983-.263c.53 3.98.934 8.031 1.203 12.041zm-364.071-11.205l-1.984-.256a185.53 185.53 0 011.94-11.946l1.964.386a183.135 183.135 0 00-1.92 11.816zm360.915-12.515a182.258 182.258 0 00-2.738-11.653l1.932-.521a184.884 184.884 0 012.767 11.782zm-356.304-10.965l-1.933-.514a183.73 183.73 0 013.493-11.589l1.895.64a182.089 182.089 0 00-3.455 11.463zm350.067-12.136a181.55 181.55 0 00-4.238-11.175l1.846-.771c1.545 3.7 2.986 7.501 4.285 11.298zm-342.404-10.552l-1.849-.764a185.197 185.197 0 014.993-11.042l1.794.884a182.853 182.853 0 00-4.938 10.922zm333.2-11.5a182.317 182.317 0 00-5.669-10.532l1.729-1.005a184.023 184.023 0 015.731 10.647zm-322.617-9.995l-1.733-.999a185.644 185.644 0 016.392-10.287l1.663 1.11a183.989 183.989 0 00-6.322 10.176zm310.6-10.678a184.124 184.124 0 00-6.998-9.708l1.584-1.222a186.92 186.92 0 017.074 9.814zm-297.304-9.238l-1.587-1.217c2.445-3.19 5.027-6.34 7.674-9.364l1.505 1.317a184.842 184.842 0 00-7.592 9.264zm282.688-9.704a184.734 184.734 0 00-8.203-8.721l1.412-1.417c2.85 2.839 5.64 5.805 8.291 8.816zm-266.92-8.309l-1.416-1.412a187.212 187.212 0 018.82-8.286l1.322 1.501a185.418 185.418 0 00-8.726 8.197zm249.963-8.583a184.898 184.898 0 00-9.267-7.586l1.215-1.588c3.188 2.44 6.34 5.02 9.369 7.668zm-231.998-7.225l-1.22-1.584c3.18-2.451 6.484-4.829 9.818-7.068l1.115 1.66a184.573 184.573 0 00-9.713 6.992zm212.986-7.328a184.044 184.044 0 00-10.181-6.316l.998-1.734a186.107 186.107 0 0110.292 6.386zm-193.128-6.006l-1.004-1.73c3.47-2.014 7.052-3.94 10.65-5.724l.888 1.792a183.504 183.504 0 00-10.534 5.662zm172.37-5.948a182.862 182.862 0 00-10.923-4.931l.762-1.849a184.455 184.455 0 0111.045 4.985zm-150.955-4.673l-.77-1.846a184.722 184.722 0 0111.302-4.278l.647 1.893a183.052 183.052 0 00-11.179 4.231zm128.803-4.46a182.398 182.398 0 00-11.464-3.447l.511-1.933a184.254 184.254 0 0111.591 3.485zm-106.174-3.263l-.52-1.931a184.973 184.973 0 0111.782-2.76l.393 1.96c-3.898.78-7.82 1.699-11.655 2.731zm83.043-2.867a183.486 183.486 0 00-11.817-1.912l.254-1.984c3.99.512 8.009 1.162 11.947 1.933zm-59.58-1.82l-.261-1.983a187.01 187.01 0 0112.042-1.195l.133 1.995c-3.975.265-7.984.663-11.913 1.182zm35.846-1.229c-3.839-.24-7.745-.362-11.61-.362h-.356v-2h.352c3.911 0 7.86.123 11.74.366zM481.27 401.318l-.003-2c3.907-.002 7.85-.184 11.717-.54l.184 1.991a131.15 131.15 0 01-11.899.55zm-11.897-.534a129.404 129.404 0 01-11.8-1.624l.363-1.966c3.823.708 7.732 1.245 11.618 1.598zm35.592-1.651l-.365-1.966a126.81 126.81 0 0011.416-2.681l.547 1.924a128.522 128.522 0 01-11.598 2.723zm-58.993-2.682a128.587 128.587 0 01-11.299-3.777l.722-1.865a126.51 126.51 0 0011.122 3.718zm81.884-3.831l-.723-1.864a126.955 126.955 0 0010.723-4.746l.893 1.79a128.422 128.422 0 01-10.893 4.82zm-104.084-4.756a129.117 129.117 0 01-10.409-5.799l1.053-1.7a127.437 127.437 0 0010.248 5.709zm125.376-5.874l-1.055-1.7a128.02 128.02 0 009.668-6.639l1.207 1.595c-3.159 2.39-6.463 4.659-9.82 6.744zm-145.614-6.659a130.12 130.12 0 01-9.168-7.608l1.347-1.478a128.217 128.217 0 009.026 7.49zm164.593-7.704l-1.348-1.477a127.786 127.786 0 008.292-8.296l1.478 1.347a130.325 130.325 0 01-8.422 8.426zm-182.192-8.321a130.1 130.1 0 01-7.623-9.154l1.595-1.208a127.912 127.912 0 007.505 9.013zm198.229-9.267l-1.596-1.206a127.896 127.896 0 006.636-9.674l1.699 1.054a129.504 129.504 0 01-6.74 9.826zm-212.602-9.704a129.326 129.326 0 01-5.816-10.396l1.79-.894a127.407 127.407 0 005.724 10.234zm225.145-10.528l-1.79-.892a126.339 126.339 0 004.742-10.729l1.865.723a128.45 128.45 0 01-4.817 10.898zM360.92 319.05a128.773 128.773 0 01-3.796-11.292l1.923-.55a126.895 126.895 0 003.737 11.117zm244.387-11.438l-1.924-.546a127.263 127.263 0 002.673-11.417l1.967.365a129.202 129.202 0 01-2.716 11.598zm-250.913-11.45c-.725-3.88-1.279-7.85-1.644-11.797l1.99-.184c.361 3.886.906 7.793 1.62 11.614zm255.26-11.947l-1.992-.183c.353-3.867.533-7.808.533-11.714l-.001-.298h2l.001.288c0 3.977-.182 7.98-.541 11.907zm-255.46-11.748h-2v-.149c0-3.914.178-7.867.528-11.747l1.992.18a129.09 129.09 0 00-.52 11.567zm253.44-12.16a128.044 128.044 0 00-1.632-11.611l1.964-.37c.73 3.877 1.288 7.845 1.659 11.794zm-251.328-11.174l-1.967-.363a128.83 128.83 0 012.702-11.602l1.925.544a126.683 126.683 0 00-2.66 11.42zm246.996-11.848a126.95 126.95 0 00-3.75-11.111l1.864-.727a128.4 128.4 0 013.808 11.287zm-240.625-10.697l-1.866-.721a129.12 129.12 0 014.803-10.904l1.791.89a126.877 126.877 0 00-4.728 10.735zm232.11-11.128a126.885 126.885 0 00-5.737-10.228l1.698-1.058a128.756 128.756 0 015.826 10.39zm-221.678-9.857l-1.702-1.052a129.744 129.744 0 016.73-9.834l1.596 1.205a127.794 127.794 0 00-6.624 9.68zm209.285-10.028a128.675 128.675 0 00-7.516-9.005l1.474-1.35a130.436 130.436 0 017.634 9.145zM387.22 186.89l-1.48-1.346a130.315 130.315 0 018.412-8.435l1.35 1.475a128.525 128.525 0 00-8.282 8.306zm179.347-8.599a128.166 128.166 0 00-9.034-7.48l1.203-1.598a130.452 130.452 0 019.177 7.598zm-162.055-7.218l-1.21-1.593a129.92 129.92 0 019.813-6.756l1.057 1.699a127.733 127.733 0 00-9.66 6.65zm143.335-6.88a127.186 127.186 0 00-10.253-5.698l.889-1.79c3.547 1.76 7.05 3.707 10.415 5.786zm-123.444-5.502l-.895-1.788c3.538-1.771 7.2-3.398 10.886-4.834l.726 1.864a127.022 127.022 0 00-10.717 4.758zm102.454-4.918a126.728 126.728 0 00-11.127-3.704l.543-1.925c3.807 1.073 7.61 2.34 11.303 3.762zm-80.624-3.583l-.549-1.923a128.627 128.627 0 0111.593-2.737l.37 1.966a126.622 126.622 0 00-11.414 2.694zm58.076-2.775a127.473 127.473 0 00-11.619-1.585l.178-1.992c3.946.354 7.917.896 11.803 1.61zm-35.05-1.544l-.185-1.991a131.12 131.12 0 0111.896-.562l.004 2c-3.906.006-7.846.192-11.715.553z"
        fill="#e6e6e6"
      />
      <path
        d="M498.705 534.795c-5.76-1.88-12.944-5.192-17.46-8.824l3.415 8.382c-116.337 1.61-220.837-74.885-254.414-186.645-33.46-111.374 11.228-232.573 108.698-295.49l1.8 8.871c1.749-5.525 5.896-12.262 9.65-17.017-5.946 1.157-13.835 1.753-19.547.773l7.056 5.665A265.87 265.87 0 00234.35 178.593a264.064 264.064 0 0092.868 308.212 265.926 265.926 0 00153.97 49.585c1.181 0 2.366-.022 3.55-.038l-2.737 8.626c4.213-3.98 11.112-7.853 16.703-10.183zM734.003 196.361A264.085 264.085 0 00491.43 8.461L494.621 0c-4.419 3.75-11.513 7.252-17.22 9.281 5.65 2.183 12.65 5.872 16.967 9.739l-2.967-8.557a262.089 262.089 0 01144.492 473.365l-2.318-8.756c-1.422 5.619-5.166 12.588-8.634 17.555 5.867-1.504 13.707-2.562 19.467-1.92l-7.372-5.237a264.125 264.125 0 0096.967-289.109z"
        fill="#3f3d56"
      />
      <path
        d="M795.385 568.848c-6.89.31-13.97.47-21.19.47-31.22 0-59.76-3.02-81.67-8.01 58.87-39.58 96.45-61.49 105.64-27.87 3.04 11.11 1.97 23.01-2.78 35.41z"
        opacity={0.1}
      />
      <path
        d="M220.326 45.318c-27.717 0-47.896 18.82-54.699 45.69l-8.432 40.31h6l13-33-2.737 33h6.737l5-17-1.053 17h81.053V90.186a44.868 44.868 0 00-44.869-44.868z"
        fill="#2f2e41"
      />
      <path
        fill="#3f3d56"
        d="M168.195 346.379l19 91.823 104 1.531-26-96.415-97 3.061z"
      />
      <path
        opacity={0.1}
        d="M168.195 346.379l19 91.823 104 1.531-26-96.415-97 3.061z"
      />
      <path
        d="M183.695 274.818s-41 57-39 80 28 398 28 398l61 3-18-270 15-73 37 340 75 2-67-441-13-39z"
        fill="#2f2e41"
      />
      <path
        d="M197.695 100.818s13 24-4 40-25 59-25 59l96-7-8-54s-21-13-16-36z"
        fill="#a0616a"
      />
      <path
        d="M197.695 100.818s13 24-4 40-25 59-25 59l96-7-8-54s-21-13-16-36z"
        opacity={0.1}
      />
      <path
        d="M181.695 164.818s6 18 32 16a89.222 89.222 0 0044-16v117l-80-3v-71z"
        fill={color}
      />
      <path
        d="M200.338 131.276l-7.643 5.542-46 22 16 83 11 18v22l-27 38a412.43 412.43 0 00-10 82c-1 46 11 34 17 33s19-4 19-4l-21-98 35-51 6-20s-2-47-10-66c0 0 15.286-50.084 17.643-64.542zM242.382 121.818l18.313 18 36 11-17 94-10 20 2 20s37.473 40.191 43 120c2.902 41.915-3.098 39.915-3.098 39.915l-73.902-.915-12-166 23-125z"
        fill="#3f3d56"
      />
      <path
        d="M317.695 361.818s10 43-10 48-13-48-13-48zM141.306 317.186s38.506 21.593 28.721 39.738-44.222-22.746-44.222-22.746z"
        fill="#a0616a"
      />
      <path
        d="M281.695 152.818l15-2s9 12 10 21 17 161 17 161l16 29s-1 5-9 5h-8l-3 12s-6-23-29-11l-9-3 6-11s-6-53-6-78-2-52-2-52z"
        fill="#3f3d56"
      />
      <ellipse cx={209.25} cy={754.325} rx={14.22} ry={5.332} fill="#2f2e41" />
      <ellipse cx={305.233} cy={754.325} rx={14.22} ry={5.332} fill="#2f2e41" />
      <path
        d="M157.695 157.818l-11 1-25 97s-10 64-8 67 0 8-2 10 8 30 18 29 14-4 14-4-9-26 14-35l6-20-6-33 8-46z"
        fill="#3f3d56"
      />
      <ellipse cx={253.695} cy={91.318} rx={1.5} ry={5} fill="#a0616a" />
      <ellipse cx={185.695} cy={91.318} rx={1.5} ry={5} fill="#a0616a" />
      <circle cx={219.695} cy={88.818} r={33} fill="#a0616a" />
      <path
        fill="#2f2e41"
        d="M205.195 71.318l-.843 8h22.843l3-6-.632 6h27.632l-19-30-42 1-10 29h15l4-8z"
      />
      <circle cx={774.195} cy={431.318} r={105} fill="#3f3d56" />
      <circle cx={781.195} cy={257.318} r={78} fill="#3f3d56" />
      <circle cx={781.195} cy={117.318} r={67} fill="#3f3d56" />
      <circle cx={782.195} cy={34.318} r={26} fill={color} />
      <path
        d="M64.61 706.637c6.707 24.79 29.678 40.144 29.678 40.144s12.097-24.84 5.391-49.631-29.677-40.144-29.677-40.144-12.098 24.84-5.391 49.63z"
        fill="#3f3d56"
      />
      <path
        d="M74.465 701.309c18.403 17.914 20.65 45.452 20.65 45.452s-27.588-1.507-45.99-19.42-20.65-45.452-20.65-45.452 27.588 1.506 45.99 19.42z"
        fill={color}
      />
      <circle cx={481.195} cy={272.318} r={41} fill="#f2f2f2" />
    </svg>
  );
};

SvgGravitas.propTypes = {
  color: PropTypes.string
};
SvgGravitas.defaultProps = {
  color: "primary"
};
const MemoSvgGravitas = React.memo(SvgGravitas);
export default MemoSvgGravitas;
