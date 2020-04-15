import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgIconDesign = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1074.512 670.78"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        fill="#3f3d56"
        d="M1064 213.31L827.56 670.78l-603.2-114.27-1.19-.22-34.19-6.48L35.34 520.7 0 514.01l48.97-99.44 8.26-16.77 7.76-15.74.7-1.43 13-26.4 54.95-111.57 2.76-5.61 3.83-7.77.88-1.79 1.96-3.99 11.15-22.63 20.04-40.68 3.49-7.09 15.84-32.17L253.15 0 1064 213.31z"
      />
      <path
        d="M521.532 180.423a142.73 142.73 0 00-201.85 201.85l201.85 201.85 201.85-201.85a142.73 142.73 0 10-201.85-201.85z"
        fill={color}
      />
      <path
        fill="#d0cde1"
        d="M781.082 387.365l-1.414-1.414 3.536-3.537-3.536-3.535 1.414-1.414 4.95 4.949-4.95 4.951zM596.124 572.323l-1.414-1.414 8.407-8.408 1.414 1.414zm16.814-16.815l-1.414-1.414 8.408-8.407 1.414 1.414zm16.815-16.814l-1.414-1.414 8.407-8.408 1.414 1.414zm16.814-16.815l-1.414-1.414 8.408-8.407 1.414 1.414zm16.815-16.814l-1.414-1.414 8.407-8.407 1.414 1.414zm16.814-16.815l-1.414-1.414 8.407-8.407 1.415 1.414zm16.815-16.814l-1.414-1.414 8.406-8.406 1.414 1.414zm16.813-16.814l-1.414-1.414 8.407-8.407 1.414 1.414zm16.815-16.814l-1.414-1.414 8.407-8.407 1.414 1.414zm16.814-16.814l-1.414-1.415 8.407-8.407 1.414 1.414zm16.815-16.815l-1.414-1.414 8.407-8.407 1.414 1.414zM582.768 585.679l-4.95-4.949 1.414-1.414 3.536 3.535 3.535-3.535 1.414 1.414-4.949 4.949zM569.411 572.323l-8.407-8.408 1.414-1.414 8.407 8.408zm-16.814-16.815l-8.408-8.407 1.415-1.414 8.407 8.407zm-16.814-16.814l-8.408-8.408 1.415-1.414 8.407 8.408zm-16.815-16.815l-8.407-8.407 1.414-1.414 8.407 8.407zm-16.814-16.814l-8.407-8.407 1.414-1.414 8.407 8.407zm-16.815-16.815l-8.406-8.406 1.414-1.414 8.406 8.406zm-16.814-16.813l-8.407-8.407 1.414-1.414 8.407 8.407zm-16.814-16.815l-8.407-8.407 1.414-1.414 8.407 8.407zm-16.815-16.814l-8.407-8.407 1.414-1.414 8.408 8.407zm-16.814-16.814l-8.407-8.408 1.414-1.414 8.407 8.407zm-16.814-16.815l-8.407-8.407 1.414-1.414 8.407 8.407zM384.453 387.365l-4.95-4.951 4.95-4.949 1.414 1.414-3.535 3.535 3.535 3.537-1.414 1.414zM394.274 370.472l-1.414-1.414 8.408-8.407 1.414 1.414zm16.815-16.814l-1.414-1.414 8.407-8.408 1.414 1.414zm16.814-16.815l-1.414-1.414 8.407-8.407 1.414 1.414zm16.814-16.814l-1.414-1.414 8.407-8.407 1.415 1.414zm16.815-16.814l-1.414-1.414 8.407-8.408 1.414 1.414zm16.814-16.815l-1.414-1.414 8.407-8.407 1.414 1.414zm16.815-16.814l-1.414-1.414 8.407-8.408 1.414 1.415zm16.814-16.814l-1.414-1.414 8.407-8.408 1.414 1.415zm16.814-16.815l-1.414-1.414 8.407-8.407 1.414 1.414zm16.815-16.814l-1.414-1.414 8.407-8.407 1.414 1.414zm16.814-16.815l-1.414-1.414 8.407-8.407 1.414 1.414zM586.303 185.515l-3.535-3.536-3.536 3.536-1.414-1.415 4.95-4.949 4.949 4.949-1.414 1.415zM771.26 370.471l-8.406-8.407 1.414-1.414 8.407 8.407zm-16.814-16.814l-8.407-8.407 1.414-1.414 8.407 8.407zm-16.814-16.814l-8.407-8.408 1.414-1.414 8.407 8.408zm-16.815-16.814l-8.406-8.408 1.414-1.414 8.406 8.408zm-16.813-16.815l-8.407-8.407 1.414-1.414 8.407 8.407zM687.189 286.4l-8.407-8.408 1.414-1.414 8.408 8.408zm-16.814-16.814l-8.407-8.408 1.414-1.414 8.407 8.408zm-16.814-16.815l-8.408-8.407 1.414-1.414 8.408 8.407zm-16.815-16.814l-8.407-8.407 1.414-1.414 8.407 8.407zm-16.814-16.814l-8.408-8.407 1.414-1.414 8.408 8.407zm-16.815-16.815l-8.407-8.407 1.414-1.414 8.407 8.407z"
      />
      <path
        d="M478.824 425.189a144.629 144.629 0 01-12.175-.77l.21-1.988c3.975.42 8.015.675 12.007.758zm12.197-.26l-.127-1.997c3.984-.253 8.01-.68 11.964-1.27l.295 1.978c-4.01.598-8.091 1.031-12.132 1.288zm-36.438-2.303c-3.98-.765-7.975-1.71-11.87-2.808l.542-1.926a141.753 141.753 0 0011.705 2.77zm60.55-1.294l-.462-1.945a142.28 142.28 0 0011.58-3.271l.624 1.9a144.591 144.591 0 01-11.742 3.316zm-84.01-5.322a142.9 142.9 0 01-11.221-4.78l.861-1.804a141.508 141.508 0 0011.065 4.713zm107.172-2.299l-.785-1.84c3.677-1.569 7.33-3.315 10.855-5.19l.94 1.766a143.44 143.44 0 01-11.01 5.264zm-129.164-8.2a143.643 143.643 0 01-10.243-6.618l1.156-1.633c3.262 2.31 6.66 4.506 10.1 6.526zm150.693-3.25l-1.086-1.68a142.278 142.278 0 009.816-6.962l1.224 1.58a144.365 144.365 0 01-9.954 7.062zM389.25 391.43a145.957 145.957 0 01-8.983-8.253l1.413-1.414a144.167 144.167 0 008.86 8.139zm189.85-4.111l-1.353-1.473a143.892 143.892 0 008.505-8.509l1.473 1.354a145.248 145.248 0 01-8.624 8.628zm-207.096-13.116a143.986 143.986 0 01-7.482-9.643l1.631-1.158a142.173 142.173 0 007.378 9.51zm223.593-4.834l-1.582-1.224c2.45-3.163 4.789-6.463 6.952-9.809l1.68 1.086a144.242 144.242 0 01-7.05 9.947zm-237.708-15.055a142.698 142.698 0 01-5.733-10.773l1.804-.863a141.05 141.05 0 005.653 10.622zm250.934-5.406l-1.765-.939a141.85 141.85 0 005.183-10.85l1.84.784a143.337 143.337 0 01-5.258 11.005zm-261.46-16.59a143.62 143.62 0 01-3.816-11.59l1.925-.544a141.583 141.583 0 003.763 11.428zm271.017-5.83l-1.9-.625a142.22 142.22 0 003.267-11.576l1.945.461a143.747 143.747 0 01-3.312 11.74zm-277.652-17.63a144.816 144.816 0 01-1.803-12.067l1.99-.212c.422 3.977 1.02 7.98 1.777 11.9zm283.27-6.089l-1.978-.294a143.478 143.478 0 001.267-11.963l1.996.127c-.257 4.04-.69 8.122-1.285 12.13zm-285.851-18.153q-.034-1.563-.034-3.126c0-3.014.096-6.065.285-9.07l1.996.124c-.186 2.965-.28 5.974-.28 8.946q0 1.54.033 3.083zm285.395-6.132c-.084-3.991-.34-8.031-.76-12.007l1.988-.21c.427 4.031.687 8.127.772 12.175zM341.654 260.58l-1.979-.293a144.75 144.75 0 012.3-11.98l1.946.46a142.578 142.578 0 00-2.267 11.813zm279.353-6.003a141.8 141.8 0 00-2.773-11.708l1.925-.543c1.1 3.897 2.046 7.892 2.813 11.873zM347.18 237.189l-1.9-.623a143.46 143.46 0 014.293-11.418l1.84.784a141.429 141.429 0 00-4.233 11.257zm267.298-5.75a141.258 141.258 0 00-4.72-11.068l1.805-.862a143.092 143.092 0 014.786 11.225zm-257.887-16.36l-1.766-.938a143.437 143.437 0 016.171-10.518l1.68 1.085a141.317 141.317 0 00-6.085 10.37zm247.52-5.333a141.369 141.369 0 00-6.535-10.105l1.631-1.157a143.259 143.259 0 016.628 10.248zm-234.488-14.851l-1.582-1.224a145.303 145.303 0 017.866-9.324l1.473 1.353a143.308 143.308 0 00-7.757 9.195zm220.581-4.768a144.393 144.393 0 00-8.144-8.855l-.105-.106 1.404-1.423.133.134a146.16 146.16 0 018.24 8.959zm-204.323-12.942l-1.356-1.47a145.421 145.421 0 019.317-7.887l1.227 1.58a143.17 143.17 0 00-9.188 7.777zm187.206-4.157a142.384 142.384 0 00-9.51-7.354l1.153-1.633c3.301 2.335 6.546 4.844 9.646 7.458zM404.882 162.44l-1.088-1.678a143.78 143.78 0 0110.517-6.193l.94 1.766a141.493 141.493 0 00-10.369 6.105zm148.593-3.285a140.813 140.813 0 00-10.624-5.635l.86-1.805a143.551 143.551 0 0110.775 5.714zm-127.37-8.016l-.787-1.839a143.804 143.804 0 0111.416-4.31l.626 1.899a141.7 141.7 0 00-11.256 4.25zm105.68-2.326a142.035 142.035 0 00-11.43-3.747l.542-1.925c3.9 1.098 7.8 2.376 11.591 3.8zm-82.848-5.2l-.462-1.947a144.377 144.377 0 0111.98-2.315l.295 1.977c-3.952.592-7.926 1.36-11.813 2.284zm59.71-1.31a142.917 142.917 0 00-11.899-1.762l.209-1.989c4.029.424 8.089 1.025 12.067 1.788zm-35.934-2.25l-.128-1.997c4.046-.26 8.142-.349 12.197-.266l-.04 2c-4-.082-8.04.006-12.029.263z"
        fill="#d0cde1"
      />
      <path
        d="M680.675 425.189a144.69 144.69 0 01-12.176-.77l.211-1.988c3.976.42 8.015.675 12.006.758zm12.197-.26l-.127-1.997c3.985-.253 8.01-.68 11.964-1.27l.295 1.978c-4.009.598-8.09 1.031-12.132 1.288zm-36.437-2.303a144.341 144.341 0 01-11.871-2.808l.543-1.926c3.84 1.084 7.779 2.016 11.705 2.77zm60.55-1.294l-.462-1.945a142.2 142.2 0 0011.579-3.271l.625 1.9a144.431 144.431 0 01-11.743 3.316zm-84.011-5.322a143.451 143.451 0 01-11.222-4.78l.861-1.804a141.48 141.48 0 0011.066 4.713zm107.17-2.298l-.785-1.84a141.03 141.03 0 0010.856-5.19l.94 1.766a143.05 143.05 0 01-11.01 5.264zm-129.163-8.202a143.41 143.41 0 01-10.242-6.617l1.157-1.633c3.26 2.31 6.657 4.505 10.097 6.526zm150.693-3.25l-1.086-1.68a142.1 142.1 0 009.815-6.961l1.225 1.58a143.549 143.549 0 01-9.954 7.061zm-170.575-10.83a146.815 146.815 0 01-8.983-8.252l1.414-1.416a144.637 144.637 0 008.86 8.14zm189.851-4.111l-1.353-1.473a143.88 143.88 0 008.505-8.509l1.472 1.354a146.459 146.459 0 01-8.624 8.628zm-207.096-13.116a144.14 144.14 0 01-7.482-9.643l1.63-1.158a141.86 141.86 0 007.379 9.51zm223.591-4.834l-1.582-1.224c2.45-3.163 4.79-6.463 6.952-9.809l1.68 1.086a144.242 144.242 0 01-7.05 9.948zm-237.708-15.055a143.652 143.652 0 01-5.733-10.773l1.805-.863a141.307 141.307 0 005.653 10.622zm250.935-5.406l-1.766-.938a141.845 141.845 0 005.184-10.851l1.84.784a143.218 143.218 0 01-5.258 11.005zm-261.46-16.59a143.7 143.7 0 01-3.817-11.59l1.924-.543a141.862 141.862 0 003.765 11.428zm271.016-5.83l-1.9-.624a142.22 142.22 0 003.268-11.576l1.945.46a143.766 143.766 0 01-3.312 11.74zm-277.65-17.63a144.588 144.588 0 01-1.804-12.067l1.989-.212a143.07 143.07 0 001.778 11.9zm283.269-6.089l-1.979-.294a143.474 143.474 0 001.268-11.963l1.996.127c-.257 4.04-.69 8.122-1.285 12.13zm-285.85-18.153q-.034-1.562-.034-3.125c0-3.01.096-6.06.285-9.072l1.996.125c-.186 2.97-.281 5.98-.281 8.946q.001 1.54.034 3.083zm285.394-6.131c-.085-4.004-.341-8.043-.761-12.008l1.988-.21c.426 4.02.686 8.116.773 12.175zM543.505 260.58l-1.979-.294c.595-4.011 1.37-8.042 2.3-11.98l1.946.46a142.326 142.326 0 00-2.267 11.814zm279.352-6.004a142.19 142.19 0 00-2.771-11.707l1.925-.543c1.1 3.896 2.045 7.89 2.811 11.872zm-273.826-17.388l-1.9-.623a143.092 143.092 0 014.294-11.417l1.84.783a141.382 141.382 0 00-4.234 11.257zm267.297-5.75a141.23 141.23 0 00-4.718-11.068l1.805-.862a142.638 142.638 0 014.784 11.226zm-257.886-16.36l-1.767-.938a143.183 143.183 0 016.173-10.518l1.68 1.085a141.053 141.053 0 00-6.086 10.37zm247.52-5.333a141.29 141.29 0 00-6.534-10.105l1.63-1.157a143.513 143.513 0 016.629 10.248zm-234.487-14.852l-1.582-1.223c2.475-3.2 5.122-6.337 7.866-9.324l1.472 1.352a143.175 143.175 0 00-7.756 9.195zm220.58-4.768a144.565 144.565 0 00-8.144-8.854l-.106-.106 1.404-1.424.116.116a146.66 146.66 0 018.258 8.977zm-204.323-12.941l-1.355-1.47a145.166 145.166 0 019.317-7.887l1.227 1.58a143.492 143.492 0 00-9.189 7.777zm187.205-4.157a142.387 142.387 0 00-9.51-7.354l1.154-1.633c3.3 2.335 6.546 4.844 9.646 7.458zM606.734 162.44l-1.087-1.678a143.432 143.432 0 0110.517-6.193l.94 1.766a141.226 141.226 0 00-10.37 6.105zm148.592-3.286a140.894 140.894 0 00-10.624-5.634l.862-1.805a143.102 143.102 0 0110.774 5.715zm-127.37-8.015l-.786-1.84a143.649 143.649 0 0111.415-4.31l.627 1.9a141.51 141.51 0 00-11.257 4.25zm105.679-2.326a141.899 141.899 0 00-11.429-3.747l.541-1.925a143.41 143.41 0 0111.59 3.8zm-82.846-5.2l-.463-1.947a144.23 144.23 0 0111.98-2.315l.295 1.978a142.48 142.48 0 00-11.812 2.283zm59.71-1.31a142.821 142.821 0 00-11.9-1.762l.21-1.989c4.028.424 8.088 1.025 12.067 1.788zm-35.934-2.25l-.13-1.997c4.047-.26 8.147-.35 12.199-.266l-.041 2c-3.996-.083-8.04.006-12.029.263zM90.184 583.685h6v2h-6zM1056.507 585.685h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0H972.48v-2h12.004zm-24.008 0H948.47v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.005v-2h12.005zm-24.009 0H852.44v-2h12.003zm-24.007 0H828.43v-2h12.004zm-24.008 0h-12.005v-2h12.005zm-24.009 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.007 0H708.39v-2h12.005zm-24.01 0h-12.003v-2h12.004zm-24.007 0h-12.004v-2h12.004zm-24.008 0h-12.005v-2h12.005zm-24.009 0h-12.004v-2h12.004zm-24.007 0H588.35v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.005v-2h12.005zm-24.009 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.009 0H348.27v-2h12.003zm-24.007 0H324.26v-2h12.004zm-24.009 0h-12.004v-2h12.004zm-24.007 0h-12.005v-2h12.005zm-24.009 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0H204.22v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2h12.004zm-24.008 0h-12.004v-2H144.2zm-24.009 0h-12.003v-2h12.003zM1068.512 583.685h6v2h-6z"
        fill="#d0cde1"
      />
      <path
        fill="#ffb9b9"
        d="M223.02 556.75l.15-.46 2.87-8.73-37.06 2.25 34.04 6.94zM180.997 385.822l22.52 57.326s-2.047 49.137 24.569 45.042-4.095-53.231-4.095-53.231l-16.379-59.374s-20.473-4.094-26.615 10.237z"
      />
      <circle cx={143.121} cy={165.731} r={36.852} fill="#ffb9b9" />
      <path
        d="M115.481 176.992s-12.284 40.947-20.473 40.947 55.278 24.568 55.278 24.568-16.379-16.379 0-47.09z"
        fill="#ffb9b9"
      />
      <path
        d="M223.02 556.75c.45-.08.9-.16 1.34-.24 10.76-1.94 17.62-4.23 18.06-6.9.85-5.11-6.45-31.84-15.26-61.31-9.88-33.01-21.65-69.46-26.01-82.85-1.1-3.39-1.73-5.3-1.73-5.3l-3.94-24.65-4.25-26.53-100.32 26.62-14.33 24.56-3.05 8.9v.01l-4.49 13.13-8.85 25.87-24.85 72.64 153.64 29.11z"
        fill="#2f2e41"
      />
      <path
        d="M107.292 213.844s28.39 7.537 36.716 16.053l14.468 8.515 18.426 38.9s14.331 6.142 14.331 32.758 20.474 71.658 20.474 71.658 14.332 12.284 4.095 18.426-22.521 6.142-22.521 6.142 10.237-38.9-10.237-40.947-30.71-4.095-32.758 0-57.326 63.468-79.847 57.326-10.237-67.563-10.237-67.563L78.63 211.797s14.331-2.048 22.52 0 6.143 2.047 6.143 2.047z"
        fill="#575a89"
      />
      <circle cx={133.87} cy={501.094} r={6.19} fill="#cfcce0" />
      <path
        d="M109.85 504.828l6.168 5.47 60.125 19.22.901-1.623-34.884-19.367a11.141 11.141 0 112.403-4.33l34.885 19.368.9-1.624-48.106-40.867-7.687-2.734 2.154-3.878-5.412-3.004-4.206 7.576-31.929-17.727-10.816 19.482 31.929 17.727-4.206 7.576 5.411 3.004z"
        fill="#cfcce0"
      />
      <path
        d="M37.681 385.822l22.521 57.326s-2.047 49.137 24.569 45.042-4.095-53.231-4.095-53.231l-16.379-59.374s-20.473-4.094-26.616 10.237z"
        fill="#ffb9b9"
      />
      <path
        d="M82.723 213.844l-4.094-2.047s-12.284-12.284-26.616 4.094S23.35 318.26 23.35 318.26v26.616s-16.379 22.521-2.047 34.805 16.378 14.332 16.378 14.332 14.332-20.474 30.71-10.237l2.048-8.19a25.338 25.338 0 004.095-6.142c2.047-4.094 6.142 2.048 4.095-4.094s0-8.19 0-10.237 2.047-12.284 2.047-12.284l-2.047-63.468z"
        fill="#575a89"
      />
      <path
        d="M189.038 157s29.938-65.273-48.304-65.203c0 0-48.003-25.217-84.557 33.265L18.454 186.55l9.638-1.916 1.223 9.594 12.298 7.545 9.25-9.56-1.53 14.634 105.962 45s-39.95-44.238-24.54-96.396l6.257 12.769z"
        fill="#2f2e41"
      />
      <ellipse
        cx={124.527}
        cy={176.172}
        rx={5.173}
        ry={10.345}
        fill="#ffb9b9"
      />
    </svg>
  );
};

SvgIconDesign.propTypes = {
  color: PropTypes.string
};
SvgIconDesign.defaultProps = {
  color: "primary"
};
export default SvgIconDesign;
