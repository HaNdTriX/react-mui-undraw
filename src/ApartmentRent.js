import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgApartmentRent = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1006.812 762"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill={color} d="M627.406 295h86v55h-86zM493.406 381h86v55h-86z" />
      <path
        d="M964.811 313V196h-65v-76h-44v76h-65v117h-36V50h-73V25h-97V0h-96v25h-91v25h-79v262h-42V195h-65v-76h-44v76h-65v117h-42v415h96V580h66v147h258V556h112v171h156v1h96V581h66v147h96V313zm-869.5 50h38v30h-38zm.5 84h38v30h-38zm38.5 114h-38v-30h38zm99.5-271h-88v-18h88zm0-26h-88v-18h88zm0-26h-88v-18h88zm12.5 125h38v30h-38zm.5 84h38v30h-38zm38.5 114h-38v-30h38zm155.5-50h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm131 356h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm131 356h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm0-89h-70v-31h70zm80.5 209h38v30h-38zm.5 84h38v30h-38zm38.5 114h-38v-30h38zm99.5-271h-88v-18h88zm0-26h-88v-18h88zm0-26h-88v-18h88zm12.5 125h38v30h-38zm.5 84h38v30h-38zm38.5 114h-38v-30h38z"
        fill="#f2f2f2"
      />
      <path
        d="M120 625.71c-.28 3.955-.717 8.38-1.394 13.03l12.225-13.56.068.228a35.626 35.626 0 00-3.576-9.332l.078.215zM120.048 625.015l7.169-9.123a18.767 18.767 0 00-6.412-6.833 14.008 14.008 0 00-.396-.225c.04 1.078.227 7.403-.361 16.182zM113.58 660.783q-.472 1.439-.976 2.826l18.005-10.557.025.265q.564-2.463.94-4.925l-17.978 12.511zM116.084 651.922L132.3 638.55l.046.25a56.007 56.007 0 00-1.39-13.147l-12.46 13.817q-.98 6.532-2.412 12.453zM118.219 639.206l-19.403-21.65.103-.244a46.761 46.761 0 00-4.655 8.196l22.142 23.574c.758-3.44 1.35-6.772 1.813-9.876zM94.054 625.995h.001c.035-.08.065-.167.1-.247zM92.975 628.65l-.1.248c.032-.085.068-.162.1-.247zM116.278 649.656l-22.223-23.66q-.563 1.29-1.08 2.655l22.713 23.508q.31-1.259.59-2.503zM131.622 648.076a66.882 66.882 0 00.721-8.986l-16.435 13.554q-.976 3.942-2.15 7.58l17.829-12.406zM90.028 649.763l17.989 23.469a80.445 80.445 0 003.909-8.812l-21.95-23.055a64.694 64.694 0 00-.072 8.661zM120.08 608.814l.162-.072c-3.94-2.104-8.205-1.878-12.292.255L119.73 625c.634-9.498.354-16.091.35-16.186zM112.02 665.179a79.894 79.894 0 01-3.533 7.946l18.095-9.362.018.26a31.688 31.688 0 003.173-7.34q.43-1.517.787-3.043l-18.22 10.683c-.106.286-.211.573-.32.856zM119.682 625.707l-12.051-16.37.113-.232a26.97 26.97 0 00-8.68 8.009l19.245 21.473c.666-4.597 1.098-8.97 1.373-12.88zM112.123 663.89a108.559 108.559 0 003.426-11.171l-22.77-23.566q-.813 2.208-1.493 4.593a38.897 38.897 0 00-1.255 6.97l22.074 23.185zM135.51 689.315a177.94 177.94 0 01-9.384 9.147l18.064-2.645-.093.217a35.625 35.625 0 003.197-9.467l-.076.215zM146.75 677.005a14.101 14.101 0 00-.161-.426c-.657.855-4.547 5.847-10.6 12.232l11.341-2.454a18.768 18.768 0 00-.58-9.352zM108.195 712.234q-1.281.807-2.554 1.554l20.6 3.353-.149.22q2.005-1.537 3.865-3.193l-21.826-1.83zM115.775 707.007l21.02.042-.125.222a56.01 56.01 0 007.315-11.012l-18.409 2.695q-4.922 4.405-9.8 8.053zM108.69 711.918l21.643 1.815-.138.222a66.887 66.887 0 006.288-6.462l-21.303-.043q-3.267 2.414-6.49 4.468z"
        fill={color}
      />
      <path
        d="M82.179 722.629c.153-.155.316-.324.476-.488a55.639 55.639 0 0012.844-3.67l.589-15.599q.261-.595.508-1.2l-.626 16.602a80.426 80.426 0 008.632-4.294l-2.01-28.999c.155-.08.31-.162.471-.247l2.008 28.96.02.004a108.564 108.564 0 009.764-6.42l-2.189-28.536c.155-.113.31-.224.465-.34l2.189 28.534q1.041-.771 2.05-1.551l-1.806-28.887c.155-.127.31-.254.464-.383l1.807 28.909a145.443 145.443 0 007.695-6.45l-1.136-29.05.236-.122c-.806.21-1.626.46-2.453.732a40.989 40.989 0 004.18-5.698l-18.268 9.451a61.459 61.459 0 01-4.257 6.933c-.327.308-.653.616-.975.938l.024.346c-.149.197-.297.395-.448.587l-.033-.467c-.23.236-.455.487-.683.73a57.727 57.727 0 006.063-9.27l-17.857-23.297c.122 2.083.325 4.179.587 6.258a35.237 35.237 0 00-5.986-7.314l.14.18-4.126 11.245a177.994 177.994 0 012.701 12.823l7.334-16.445.104.768-7.316 16.405q1.086 6.515 1.555 12.589l8.78-13.793.151.592-8.875 13.941q.29 4.052.299 7.874l10.734-14.162.168.546-10.847 14.312-.053-.11q-.005 1.515-.055 2.99l12.108-13.633.18.525-12.318 13.868c-.013.305-.024.61-.04.913a79.923 79.923 0 01-.903 8.65l1.168-1.184q-.332.689-.646 1.358l-.665.673c-.077.438-.164.866-.247 1.296q-.368.808-.71 1.577c.22-.983.425-1.972.6-2.97L59.56 693.522c6.31 16.142 18.19 31.496 18.951 32.47a43.971 43.971 0 001.694-3.55c.15-.015.3-.029.449-.045-.062.15-.126.296-.19.443-.075.008-.151.02-.226.028l.192.053a45.62 45.62 0 01-1.142 2.482 67.99 67.99 0 002.293-2.177c5.687 1.452 21.007 4.556 34.124-.03l-20.098-4.372a56.202 56.202 0 01-13.429 3.805zm14.123-25.43l.481-.489-.027.731-.482.488zM146.348 676.354l.17.048c-1.691-4.134-5.12-6.68-9.63-7.644l-1.132 19.84c6.546-6.911 10.535-12.168 10.592-12.244z"
        fill={color}
      />
      <path
        d="M104.19 714.625a79.92 79.92 0 01-7.789 3.866l19.907 4.33-.152.213a31.683 31.683 0 007.126-3.63q1.3-.894 2.547-1.842l-20.846-3.393c-.264.153-.529.307-.793.456zM125.995 698.155a177.23 177.23 0 009.272-9.044l1.159-20.294.236-.108a26.971 26.971 0 00-11.794.633zM84.367 649.189a18.768 18.768 0 00-8.21-4.517c-.15-.034-.298-.063-.446-.091.37 1.012 2.504 6.97 4.658 15.5zM83.015 674.143L57.871 659.55l.023-.265a46.76 46.76 0 00-1.895 9.233l28.344 15.576a145.446 145.446 0 00-1.328-9.952zM55.95 669.047h.002c.008-.086.01-.179.019-.266zM55.745 671.906l-.019.267c.004-.09.015-.176.02-.266zM84.4 684.68l-28.448-15.632q-.137 1.402-.206 2.859l28.866 15.336q-.094-1.293-.212-2.563zM84.824 700.066l-28-15.14a64.712 64.712 0 002.608 8.259l.036-.29 24.362 16.76a80.445 80.445 0 00.994-9.589zM75.392 644.663l.131-.118c-4.397-.784-8.383.75-11.611 4.042l16.15 11.577c-2.332-9.228-4.637-15.412-4.67-15.5zM80.235 660.852l-16.521-11.843.035-.256a26.97 26.97 0 00-5.779 10.3l24.94 14.472c-.788-4.577-1.729-8.87-2.675-12.673zM84.848 699.503a108.556 108.556 0 00-.195-11.684l-28.939-15.374q-.09 2.35 0 4.83a38.903 38.903 0 00.96 7.016l28.16 15.227zM976 622.71c-.28 3.955-.718 8.38-1.394 13.03l12.225-13.56.068.228a35.628 35.628 0 00-3.576-9.332l.078.215zM976.048 622.015l7.169-9.123a18.766 18.766 0 00-6.412-6.833 13.994 13.994 0 00-.396-.225c.04 1.078.227 7.403-.361 16.182zM969.58 657.783q-.472 1.439-.976 2.826l18.005-10.557.025.265q.564-2.463.94-4.925l-17.978 12.511zM972.084 648.922L988.3 635.55l.046.25a56.01 56.01 0 00-1.39-13.147l-12.46 13.817q-.98 6.532-2.412 12.453zM974.219 636.206l-19.403-21.65.103-.244a46.761 46.761 0 00-4.655 8.196l22.142 23.574c.758-3.44 1.35-6.772 1.813-9.876zM950.054 622.995h.001c.035-.08.065-.167.1-.247zM972.278 646.656l-22.223-23.66q-.563 1.29-1.08 2.655l22.713 23.508q.31-1.259.59-2.503zM948.975 625.65l-.1.248c.032-.085.068-.162.1-.247zM987.622 645.076a66.862 66.862 0 00.721-8.986l-16.435 13.554q-.976 3.942-2.15 7.58l17.829-12.406zM946.028 646.763l17.989 23.469a80.445 80.445 0 003.909-8.812l-21.95-23.055a64.694 64.694 0 00-.072 8.661zM976.08 605.814l.162-.072c-3.94-2.104-8.205-1.878-12.292.255L975.73 622c.635-9.498.355-16.091.35-16.186zM968.02 662.179a79.894 79.894 0 01-3.533 7.946l18.095-9.362.018.26a31.69 31.69 0 003.173-7.34q.43-1.517.787-3.043l-18.22 10.683c-.106.286-.211.573-.32.856zM975.682 622.707l-12.051-16.37.113-.232a26.97 26.97 0 00-8.68 8.009l19.245 21.473c.666-4.597 1.098-8.97 1.373-12.88zM968.123 660.89a108.559 108.559 0 003.426-11.171l-22.77-23.566q-.813 2.208-1.493 4.593a38.897 38.897 0 00-1.255 6.97l22.075 23.185zM991.51 686.315a177.985 177.985 0 01-9.385 9.147l18.065-2.645-.093.217a35.625 35.625 0 003.197-9.467l-.076.215zM1002.75 674.005a14.101 14.101 0 00-.161-.426c-.657.855-4.547 5.847-10.6 12.232l11.341-2.454a18.768 18.768 0 00-.58-9.352zM964.195 709.234q-1.281.807-2.554 1.554l20.6 3.353-.149.22q2.005-1.537 3.865-3.193l-21.826-1.83zM971.775 704.007l21.02.042-.125.222a56.01 56.01 0 007.315-11.012l-18.409 2.695q-4.922 4.405-9.8 8.053zM964.69 708.918l21.643 1.815-.138.222a66.895 66.895 0 006.288-6.462l-21.303-.043q-3.267 2.414-6.49 4.468z"
        fill={color}
      />
      <path
        d="M938.18 719.629l.475-.488a55.639 55.639 0 0012.844-3.67l.589-15.599q.261-.595.508-1.2l-.626 16.602a80.426 80.426 0 008.632-4.294l-2.01-28.999c.155-.08.31-.162.471-.247l2.008 28.96.02.004a108.564 108.564 0 009.764-6.42l-2.189-28.536c.155-.113.31-.224.465-.34l2.189 28.534q1.041-.771 2.05-1.551l-1.806-28.887c.155-.127.31-.254.464-.383l1.807 28.909a145.393 145.393 0 007.695-6.45l-1.136-29.05.236-.122c-.806.21-1.626.46-2.453.732a40.989 40.989 0 004.18-5.698l-18.268 9.451a61.459 61.459 0 01-4.257 6.933c-.327.308-.653.616-.975.938l.024.346c-.149.197-.297.395-.448.587l-.033-.467c-.23.236-.455.487-.683.73a57.727 57.727 0 006.063-9.27l-17.857-23.297c.122 2.083.325 4.179.587 6.258a35.237 35.237 0 00-5.986-7.314l.14.18-4.126 11.245a177.994 177.994 0 012.701 12.823l7.334-16.445.104.768-7.316 16.405q1.086 6.515 1.555 12.589l8.78-13.793.151.592-8.875 13.941q.29 4.052.299 7.874l10.734-14.162.168.546-10.847 14.312-.053-.11q-.004 1.515-.054 2.99l12.107-13.633.18.525-12.318 13.868c-.013.305-.024.61-.04.913a79.923 79.923 0 01-.903 8.65l1.168-1.184q-.332.689-.646 1.358l-.665.673c-.077.438-.163.866-.247 1.296q-.368.808-.71 1.577c.22-.983.425-1.972.6-2.97l-24.184-16.637c6.31 16.142 18.19 31.496 18.951 32.47a43.971 43.971 0 001.694-3.55c.15-.015.3-.029.449-.045-.062.15-.126.296-.19.443-.075.008-.151.02-.226.028l.192.053a45.62 45.62 0 01-1.142 2.482 67.99 67.99 0 002.293-2.177c5.687 1.452 21.007 4.556 34.124-.03l-20.098-4.371a56.202 56.202 0 01-13.429 3.804zm14.122-25.43l.481-.489-.027.731-.482.488zM1002.348 673.354l.17.048c-1.691-4.134-5.12-6.68-9.63-7.644l-1.132 19.84c6.546-6.911 10.535-12.168 10.592-12.244z"
        fill={color}
      />
      <path
        d="M960.19 711.625a79.92 79.92 0 01-7.789 3.866l19.907 4.33-.152.213a31.684 31.684 0 007.126-3.63q1.3-.894 2.547-1.842l-20.846-3.393c-.264.153-.529.307-.793.456zM981.995 695.155a177.177 177.177 0 009.272-9.044l1.159-20.294.235-.108a26.97 26.97 0 00-11.793.633zM940.367 646.189a18.768 18.768 0 00-8.21-4.517c-.15-.034-.298-.063-.446-.091.37 1.012 2.504 6.97 4.658 15.5zM939.015 671.143l-25.144-14.592.023-.265a46.76 46.76 0 00-1.895 9.233l28.344 15.576a145.446 145.446 0 00-1.328-9.952zM911.745 668.906l-.019.267c.004-.09.015-.176.02-.266zM911.95 666.047h.002c.008-.086.01-.179.019-.266zM940.4 681.68l-28.448-15.632q-.137 1.402-.206 2.859l28.866 15.336q-.094-1.293-.212-2.563zM940.824 697.066l-28-15.14a64.712 64.712 0 002.608 8.259l.036-.29 24.362 16.76a80.445 80.445 0 00.994-9.589zM931.392 641.663l.131-.118c-4.397-.784-8.383.75-11.611 4.042l16.15 11.577c-2.332-9.228-4.637-15.412-4.67-15.5zM936.235 657.852l-16.521-11.843.035-.256a26.97 26.97 0 00-5.779 10.3l24.94 14.472a177.174 177.174 0 00-2.675-12.673zM940.848 696.503a108.556 108.556 0 00-.195-11.684l-28.939-15.374q-.09 2.35 0 4.83a38.903 38.903 0 00.96 7.016l28.16 15.227z"
        fill={color}
      />
      <path
        d="M60.812 727h946v13.535A21.465 21.465 0 01985.346 762H82.277a21.465 21.465 0 01-21.465-21.465V727z"
        fill="#2f2e41"
      />
      <path fill="#3f3d56" d="M60.812 716h946v19h-946z" />
      <path
        d="M793.955 65.974l10.864 6.89-6.596-11.994a10.743 10.743 0 016.57-2.345q.088 0 .175.002a12.591 12.591 0 002.254-.167l3.682 2.335-1.579-2.87a13.105 13.105 0 006.442-4.888l6.59 4.179-4.163-7.57c3.853-4.626 9.048-7.463 14.765-7.463 6.853 0 12.957 4.076 16.898 10.426a12.632 12.632 0 0011.17 6.023q.184-.007.369-.007c7.565 0 13.698 8.578 13.698 19.16s-6.133 19.159-13.698 19.159a10.28 10.28 0 01-4.772-1.195 19.768 19.768 0 00-16.58-.324 17.284 17.284 0 01-14.096.033 19.782 19.782 0 00-16.434.317 10.271 10.271 0 01-4.721 1.169c-7.566 0-13.699-8.578-13.699-19.16a24.328 24.328 0 012.86-11.71zM241.197 122.244l6.911 4.383-4.196-7.63a6.834 6.834 0 014.18-1.492l.11.001a8.009 8.009 0 001.434-.106l2.343 1.486-1.004-1.826a8.336 8.336 0 004.097-3.11l4.192 2.659-2.648-4.815a12.268 12.268 0 019.392-4.747c4.36 0 8.243 2.592 10.75 6.632a8.035 8.035 0 007.105 3.83q.117-.004.234-.004c4.813 0 8.714 5.457 8.714 12.188s-3.9 12.188-8.714 12.188a6.54 6.54 0 01-3.035-.76 12.575 12.575 0 00-10.547-.206 10.995 10.995 0 01-8.967.02 12.584 12.584 0 00-10.454.203 6.534 6.534 0 01-3.003.743c-4.812 0-8.714-5.457-8.714-12.188a15.476 15.476 0 011.82-7.45zM55.197 145.738l6.911 4.383-4.196-7.63a6.834 6.834 0 014.18-1.491l.11.001a8.009 8.009 0 001.434-.106l2.343 1.485-1.004-1.825a8.336 8.336 0 004.097-3.11l4.192 2.658-2.648-4.815a12.268 12.268 0 019.392-4.747c4.36 0 8.243 2.593 10.75 6.632a8.035 8.035 0 007.105 3.831q.117-.004.234-.004c4.813 0 8.714 5.457 8.714 12.188s-3.9 12.187-8.714 12.187a6.54 6.54 0 01-3.035-.76 12.575 12.575 0 00-10.547-.206 10.995 10.995 0 01-8.967.021 12.584 12.584 0 00-10.454.202 6.534 6.534 0 01-3.003.743c-4.812 0-8.714-5.456-8.714-12.187a15.476 15.476 0 011.82-7.45z"
        fill="#f2f2f2"
      />
      <path
        d="M304.72 596.864l-1.207 1.207s.402 13.278.805 16.095 2.012 7.645.804 11.266-1.61 6.438-1.207 6.84-.402 2.012-.402 2.012l3.219-2.012 5.23-12.07-2.413-12.877z"
        fill={color}
      />
      <path
        d="M304.72 596.864l-1.207 1.207s.402 13.278.805 16.095 2.012 7.645.804 11.266-1.61 6.438-1.207 6.84-.402 2.012-.402 2.012l3.219-2.012 5.23-12.07-2.413-12.877z"
        opacity={0.1}
      />
      <path
        d="M326.046 722.001s0-4.426-.805-5.23-2.012-3.622-3.621-3.622-7.243 1.61-7.243 2.012a7.348 7.348 0 01-.805 3.621c-.805 1.207-5.23 6.036-.805 6.84a11.242 11.242 0 008.45-2.012c.403-.402 2.012-.804 2.414-.402s2.415-1.207 2.415-1.207zM337.312 714.758l2.414 4.426s.805 4.024 2.012 4.427h1.207s1.207 4.426 4.024 4.023 6.035-2.012 6.035-2.816 0-3.22-1.207-4.024a57.34 57.34 0 01-4.828-4.426l-2.012-2.012z"
        fill={color}
      />
      <path
        d="M306.432 567.367a5.43 5.43 0 00-2.907 4.064c-.224 2.873 2.616 5.58 1.703 8.312-.519 1.552-2.134 2.557-2.6 4.125a5.675 5.675 0 00.522 3.682 28.104 28.104 0 002.31 4.467c1.697 2.663 3.904 5.19 4.358 8.315a3.548 3.548 0 01-.785 3.128 7.506 7.506 0 012.745-1.306 34.937 34.937 0 0011.267-6.275 7.037 7.037 0 002.605-3.463c.614-2.472-1.262-4.945-1.082-7.486.115-1.626 1.053-3.06 1.584-4.601a11.886 11.886 0 00-1.027-9.263 11.05 11.05 0 00-6.577-5.72 13.051 13.051 0 00-6.647.191 24.427 24.427 0 00-5.469 1.83z"
        fill="#2f2e41"
      />
      <path
        d="M308.697 589.68a10.438 10.438 0 019.1-5.49c6.438 0 5.23-.403 5.23-.403l-2.011 8.047-4.024 4.024z"
        fill={color}
      />
      <path
        d="M310.353 581.171s3.622 6.036 1.207 8.45-1.207 4.829-.804 5.231 11.668 1.207 11.668 1.207l.403-5.633 1.207-4.829s-6.438-1.207-5.633-4.023-8.048-.403-8.048-.403z"
        fill="#fbbebe"
      />
      <path
        d="M310.353 581.171s3.622 6.036 1.207 8.45-1.207 4.829-.804 5.231 11.668 1.207 11.668 1.207l.403-5.633 1.207-4.829s-6.438-1.207-5.633-4.023-8.048-.403-8.048-.403z"
        opacity={0.1}
      />
      <path
        d="M338.52 638.308a27.742 27.742 0 01-1.61 4.024c-.403.402-1.61-2.817-1.61-2.817l1.207-2.816zM333.892 620l1.609 9.255h-24.142l1.207-9.255h21.326z"
        fill="#fbbebe"
      />
      <circle cx={314.779} cy={576.745} r={7.645} fill="#fbbebe" />
      <path
        d="M316.389 592.438s-4.426.402-4.426-.403-.403-3.219-1.207-2.816-6.036.804-5.634 2.012 1.207 3.62.403 3.62a2.619 2.619 0 00-2.012 3.22c.402 2.012 4.828 14.083 4.828 14.083s.403 4.024 1.61 5.23a3.611 3.611 0 010 4.427c-.805.805 2.012 1.61 3.219 3.219s10.461.402 10.864 0 10.06-.403 10.864-1.207-.403-3.22-.403-3.22-.402-3.62 0-4.828-1.609-20.923-2.816-22.13 3.621-4.829 3.621-4.829-.805-3.219-6.035-3.62c0 0-1.61-2.415-3.22-2.415s-5.103 1.872-5.103 1.872-.932 5.37-2.139 5.773a6.634 6.634 0 00-2.414 2.012z"
        fill={color}
      />
      <path
        d="M332.484 587.61l2.816 1.206s8.048 24.947 7.243 29.776-2.817 21.325-4.024 21.325-3.621-2.414-3.621-2.414v-4.023c0-.805-1.207-3.22-.403-3.22s2.012-.804 1.208-1.609-1.61-2.012-.805-3.219 1.207-1.61.805-2.817-1.208-2.414-.403-3.219-2.012-4.828-2.012-4.828l-4.426-17.704.805-7.243z"
        fill={color}
      />
      <path
        d="M334.093 625.834s-15.29-1.207-17.302-1.207-6.525-1.894-6.525-1.894-11.582 11.551-7.558 30.463 4.829 42.249 7.243 49.089a127.382 127.382 0 014.024 14.888s4.023-7.243 11.668.804c0 0 .805-6.035-.402-8.45s-2.817-15.29-2.817-15.29-2.816-20.52-2.816-22.935-1.61-22.935-1.207-23.337 2.414 15.692 2.816 18.509 1.61 24.544 2.817 26.959 6.84 21.728 10.06 22.935 14.082-.403 13.68-1.207-3.22-5.231-4.024-6.438l-3.219-4.829-7.645-26.154 3.621-31.787s2.012-20.52-2.414-20.119zM319.436 575.74h-9.804a1.746 1.746 0 01-1.725-1.475l-.974-6.17h15.29l-1.367 6.492a1.451 1.451 0 01-1.42 1.152zM824.715 573.834h15.469v22.098a15.469 15.469 0 01-15.469-15.468v-6.63z"
        fill="#2f2e41"
      />
      <path
        fill="#a0616a"
        d="M815.692 703.292l-1.105 5.525h7.734l.368-5.525h-6.997z"
      />
      <path
        d="M815.692 707.712s-1.474-1.105-2.21-.368-3.315 15.1-3.683 15.469-11.418 5.892-8.84 6.26 12.523.737 13.996 0 5.525-7.734 5.525-7.734v6.261h.736s.737-6.629 2.578-8.47-1.473-8.103-1.473-8.103.737-4.052.368-4.052-6.997.737-6.997.737z"
        fill={color}
      />
      <path
        fill="#a0616a"
        d="M838.526 699.425l-1.105 5.525h7.735l.368-5.525h-6.998z"
      />
      <path
        d="M829.687 663.516s3.683 11.049 4.42 12.154 3.314 21.73 3.314 21.73-2.578 4.051.737 4.42 1.842-.737 4.051 0a4.16 4.16 0 003.683-.369s1.105-2.21.369-2.946.736-19.889.736-19.889l-2.21-6.63-1.841-20.992s2.21-5.525 1.105-6.998-4.788 1.105-4.788 1.105z"
        fill="#2f2e41"
      />
      <path
        d="M824.9 634.788s-1.106 11.786-1.842 12.523-8.84 21.361-8.84 21.361-2.21 2.578-1.473 12.154 2.578 19.152 2.578 19.152-1.473 5.524 1.105 5.524 3.683-1.473 4.788-.368 1.842 0 2.21-.737 1.841-3.314 1.841-4.05 1.474-19.52 1.474-19.52 12.154-26.887 13.259-28.36 7.366-9.576 6.997-15.1z"
        fill="#2f2e41"
      />
      <circle cx={834.107} cy={577.333} r={7.734} fill="#a0616a" />
      <path
        d="M832.634 583.963s2.946 6.629 3.314 8.47 7.366-3.682 7.366-3.682-3.683-6.262-2.578-9.208z"
        fill="#a0616a"
      />
      <path
        d="M844.42 587.646s-5.525-4.052-9.577 4.42-5.156 8.102-5.156 8.102-4.788 1.473-3.315 11.786-4.788 23.94-2.21 24.676 26.518 4.788 26.518 1.841-2.21-14.364-.368-21.361-2.578-31.306-5.893-29.464z"
        fill="#3f3d56"
      />
      <path
        d="M838.895 589.487s-4.42 6.63-4.052 11.786.369 8.47.369 8.47-7.366 35.358-5.893 35.358 5.893 1.841 6.26.736 9.577-23.571 9.577-23.571 2.21-22.466-.369-27.623-5.892-5.156-5.892-5.156z"
        fill="#3f3d56"
      />
      <path
        d="M830.055 643.996s-3.683 12.522 1.474 12.89 2.21-12.154 2.21-12.154z"
        fill="#a0616a"
      />
      <path
        d="M839.858 702.081s-1.29-.967-1.935-.322-2.903 13.223-3.226 13.546-9.998 5.16-7.74 5.483 10.966.645 12.256 0 4.838-6.773 4.838-6.773v5.483h.645s.645-5.806 2.258-7.418-1.29-7.096-1.29-7.096.645-3.548.322-3.548-6.128.645-6.128.645z"
        fill={color}
      />
      <path
        d="M830.283 572.265a2.15 2.15 0 01.932-.66 1.946 1.946 0 011.016.088 10.36 10.36 0 015.666 4.12 3.18 3.18 0 001.141 1.235 6.723 6.723 0 01.923.352c.861.569.348 1.888-.147 2.793a14.105 14.105 0 00-1.689 7.615 2.177 2.177 0 00.387 1.291 2.298 2.298 0 001.53.611 37.796 37.796 0 005.39.288c1.764-.031 3.72-.281 4.862-1.624 1.227-1.444 1.035-3.656.236-5.375s-2.097-3.155-3.02-4.81a28.216 28.216 0 01-2.06-5.478 22.941 22.941 0 00-3.045-6.794 9.107 9.107 0 00-6.115-3.92c-3.346-.373-6.431 1.687-9.12 3.713-3.02 2.274-6.234 5.087-6.476 8.86-.197 3.056 1.638 5.82 2.597 8.73 1.48 4.49.86 9.367.224 14.052 2.727-1.634 5.813-3.902 5.634-7.076-.12-2.141-1.736-3.85-2.742-5.745-2.765-5.208.388-8.7 3.876-12.266z"
        fill="#2f2e41"
      />
      <path
        d="M939.048 609.908a26.49 26.49 0 003.504-13.429c0-12.136-7.516-21.974-16.786-21.974s-16.787 9.838-16.787 21.974a26.49 26.49 0 003.504 13.43 27.488 27.488 0 000 26.857 27.487 27.487 0 000 26.858 27.487 27.487 0 000 26.858 26.49 26.49 0 00-3.504 13.429c0 12.136 7.516 21.974 16.787 21.974s16.786-9.838 16.786-21.974a26.49 26.49 0 00-3.504-13.43 27.487 27.487 0 000-26.857 27.487 27.487 0 000-26.858 27.488 27.488 0 000-26.858z"
        fill="#3f3d56"
      />
      <ellipse
        cx={925.765}
        cy={569.622}
        rx={16.786}
        ry={21.975}
        fill="#3f3d56"
      />
      <ellipse
        cx={925.765}
        cy={542.764}
        rx={16.786}
        ry={21.975}
        fill="#3f3d56"
      />
      <path
        d="M988.604 358.967a80.586 80.586 0 006.252-9.202l-44.107-7.243 47.703.354a80.547 80.547 0 001.535-63.71l-63.999 33.2 59.022-43.386a80.412 80.412 0 10-132.803 89.987 80.452 80.452 0 00-9.17 14.664l57.254 29.745-61.048-20.489a80.454 80.454 0 0012.964 75.507 80.406 80.406 0 10126.397 0 80.417 80.417 0 000-99.427z"
        fill="#f2f2f2"
      />
      <path
        d="M845 408.68a80.06 80.06 0 0017.207 49.714 80.406 80.406 0 10126.397 0C999.381 444.713 845 399.656 845 408.68z"
        fill="#f2f2f2"
      />
      <path
        d="M988.604 358.967a80.586 80.586 0 006.252-9.202l-44.107-7.243 47.703.354a80.547 80.547 0 001.535-63.71l-63.999 33.2 59.022-43.386a80.412 80.412 0 10-132.803 89.987 80.452 80.452 0 00-9.17 14.664l57.254 29.745-61.048-20.489a80.454 80.454 0 0012.964 75.507 80.406 80.406 0 10126.397 0 80.417 80.417 0 000-99.427z"
        fill="#57b894"
      />
      <path
        d="M845 408.68a80.06 80.06 0 0017.207 49.714 80.406 80.406 0 10126.397 0C999.381 444.713 845 399.656 845 408.68z"
        opacity={0.1}
      />
      <path
        d="M94.048 609.908a26.49 26.49 0 003.504-13.429c0-12.136-7.516-21.974-16.787-21.974s-16.786 9.838-16.786 21.974a26.49 26.49 0 003.504 13.43 27.488 27.488 0 000 26.857 27.487 27.487 0 000 26.858 27.487 27.487 0 000 26.858 26.49 26.49 0 00-3.504 13.429c0 12.136 7.516 21.974 16.787 21.974s16.786-9.838 16.786-21.974a26.49 26.49 0 00-3.504-13.43 27.487 27.487 0 000-26.857 27.487 27.487 0 000-26.858 27.488 27.488 0 000-26.858z"
        fill="#3f3d56"
      />
      <ellipse
        cx={80.765}
        cy={569.622}
        rx={16.786}
        ry={21.975}
        fill="#3f3d56"
      />
      <ellipse
        cx={80.765}
        cy={542.764}
        rx={16.786}
        ry={21.975}
        fill="#3f3d56"
      />
      <path
        d="M143.604 358.967a80.586 80.586 0 006.252-9.202l-44.107-7.243 47.703.354a80.547 80.547 0 001.535-63.71l-63.999 33.2 59.022-43.386a80.412 80.412 0 10-132.803 89.987 80.452 80.452 0 00-9.17 14.664l57.254 29.745-61.048-20.489a80.454 80.454 0 0012.964 75.507 80.406 80.406 0 10126.397 0 80.417 80.417 0 000-99.427z"
        fill="#f2f2f2"
      />
      <path
        d="M0 408.68a80.06 80.06 0 0017.207 49.714 80.406 80.406 0 10126.397 0C154.381 444.713 0 399.656 0 408.68z"
        fill="#f2f2f2"
      />
      <path
        d="M143.604 358.967a80.586 80.586 0 006.252-9.202l-44.107-7.243 47.703.354a80.547 80.547 0 001.535-63.71l-63.999 33.2 59.022-43.386a80.412 80.412 0 10-132.803 89.987 80.452 80.452 0 00-9.17 14.664l57.254 29.745-61.048-20.489a80.454 80.454 0 0012.964 75.507 80.406 80.406 0 10126.397 0 80.417 80.417 0 000-99.427z"
        fill="#57b894"
      />
      <path
        d="M0 408.68a80.06 80.06 0 0017.207 49.714 80.406 80.406 0 10126.397 0C154.381 444.713 0 399.656 0 408.68z"
        opacity={0.1}
      />
      <path
        fill="#57b894"
        d="M579.452 354.556l-39.896 39.896-18.903-18.902-7.359 7.359 26.237 26.237 47.281-47.231-7.36-7.359zM706.452 263.556l-39.896 39.896-18.903-18.902-7.359 7.359 26.237 26.237 47.281-47.231-7.36-7.359z"
      />
    </svg>
  );
};

SvgApartmentRent.propTypes = {
  color: PropTypes.string
};
SvgApartmentRent.defaultProps = {
  color: "primary"
};
const MemoSvgApartmentRent = React.memo(SvgApartmentRent);
export default MemoSvgApartmentRent;
