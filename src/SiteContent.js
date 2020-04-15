import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSiteContent = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 949 836.095"
      width="100%"
      height="auto"
      {...props}
    >
      <path fill="#efefef" d="M214 219.205H27v-123h171.889l15.111 123z" />
      <circle cx={141.5} cy={134.048} r={17} fill="#3f3d56" />
      <path
        d="M188.95 61.449a185.394 185.394 0 014.962-5.41l1.76 1.68a181.183 181.183 0 00-4.897 5.337zM204.681 45.658a181.111 181.111 0 0111.588-9.454l1.459 1.946a178.938 178.938 0 00-11.432 9.328zm23.92-17.916a181.319 181.319 0 0112.99-7.41l1.116 2.162a178.5 178.5 0 00-12.814 7.309zm26.548-13.717a183.288 183.288 0 0114.03-5.169l.747 2.315a180.503 180.503 0 00-13.842 5.1zm28.993-6.811l-.557-2.368c4.84-1.138 9.78-2.09 14.678-2.827l.363 2.405a181.646 181.646 0 00-14.484 2.79zm29.146-4.383l-.162-2.427c4.954-.332 9.982-.46 14.945-.381l-.038 2.432c-4.897-.078-9.857.049-14.745.376zm29.47.472L343 .883a181.06 181.06 0 0114.815 2.096l-.44 2.392a178.488 178.488 0 00-14.615-2.068zm91.164 320.498a179.026 179.026 0 0011.33-9.447l1.633 1.803a181.42 181.42 0 01-11.483 9.575zM371.766 8.641l.636-2.348a182.571 182.571 0 0114.263 4.506l-.828 2.286a180.309 180.309 0 00-14.071-4.444zm83.997 295.363a180.28 180.28 0 009.624-11.18l1.907 1.51a182.788 182.788 0 01-9.754 11.331zM399.495 18.672l1.013-2.213c4.516 2.068 9 4.347 13.331 6.776l-1.19 2.121a180.739 180.739 0 00-13.154-6.684zm74.567 262.22a180.651 180.651 0 007.672-12.604l2.128 1.179a183.438 183.438 0 01-7.775 12.773zm-48.85-247.798l1.358-2.017a183.208 183.208 0 0112.046 8.858l-1.52 1.899a181.004 181.004 0 00-11.885-8.74zm63.136 222.005a180.647 180.647 0 005.51-13.688l2.293.815a183.277 183.277 0 01-5.586 13.873zM448.22 51.516l1.671-1.768a181.98 181.98 0 0110.43 10.707l-1.811 1.624a179.589 179.589 0 00-10.29-10.563zm50.006 175.801a179.333 179.333 0 003.19-14.406l2.396.427a182.326 182.326 0 01-3.235 14.603zM467.892 73.453l1.939-1.47a181.16 181.16 0 018.52 12.275l-2.054 1.302a178.478 178.478 0 00-8.405-12.107zm35.515 124.836c.458-4.876.716-9.834.768-14.736l2.432.026a180.747 180.747 0 01-.779 14.937zm-19.732-99.957l2.155-1.127c2.3 4.392 4.446 8.942 6.38 13.52l-2.24.946a179.354 179.354 0 00-6.295-13.339zm20.044 70.473a179.37 179.37 0 00-1.674-14.657l2.404-.375a181.851 181.851 0 011.696 14.856zm-8.576-43.322l2.311-.76a185.386 185.386 0 014.088 14.384l-2.366.57a182.66 182.66 0 00-4.033-14.194zM415.512 336.161a178.86 178.86 0 006.181-3.783l1.313 2.048a180.67 180.67 0 01-6.267 3.835z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M27 180.742l37.268-37.268L98 177.205l64-64 52.5 53.5v52.5H27v-38.463z"
      />
      <path
        d="M637 523.205v241h310v-241zm269.52 64.45h-24.01v-24.01h24.01zM135 428.205h20v26h-20zM454.121 585.942l14.142 14.142-18.384 18.385-14.143-14.142zM395.121 131.942l14.142 14.142-18.384 18.385-14.143-14.142z"
        fill="#3f3d56"
      />
      <path
        d="M660.003 686.449a185.443 185.443 0 01-3.463 6.472l-2.122-1.19a181.211 181.211 0 003.418-6.386zM648.686 705.651a181.103 181.103 0 01-8.876 12.037l-1.897-1.523a178.933 178.933 0 008.757-11.875zm-18.72 23.296c-3.42 3.599-7.035 7.099-10.743 10.404l-1.618-1.817a178.517 178.517 0 0010.598-10.262zm-22.31 19.88a183.263 183.263 0 01-12.306 8.492l-1.3-2.057a180.51 180.51 0 0012.143-8.378zm-26.392 13.8l1.127 2.155a184.13 184.13 0 01-13.516 6.384l-.949-2.24a181.665 181.665 0 0013.338-6.3zm-27.145 11.484l.76 2.31a181.523 181.523 0 01-14.383 4.082l-.567-2.366a178.855 178.855 0 0014.19-4.026zm-28.664 6.862l.368 2.404a181.08 181.08 0 01-14.871 1.65l-.168-2.428c4.892-.337 9.827-.884 14.67-1.626zM357.547 493.16a179.013 179.013 0 00-8.627 11.964l-2.03-1.34a181.415 181.415 0 018.745-12.127zm138.484 289.848l-.034 2.432a182.591 182.591 0 01-14.934-.822l.233-2.42c4.881.47 9.839.742 14.735.81zM341.308 517.76a180.267 180.267 0 00-6.545 13.22l-2.223-.99a182.789 182.789 0 016.635-13.398zm125.37 262.417l-.43 2.395a183.363 183.363 0 01-14.597-3.253l.626-2.35c4.734 1.26 9.579 2.34 14.402 3.208zM329.323 544.693a180.653 180.653 0 00-4.3 14.114l-2.354-.613a183.437 183.437 0 014.358-14.305zm108.864 227.9l-.815 2.292a183.213 183.213 0 01-13.868-5.589l1-2.216a180.993 180.993 0 0013.683 5.514zM321.891 573.226a180.643 180.643 0 00-1.94 14.628l-2.422-.22c.45-4.945 1.111-9.933 1.965-14.826zm89.431 187.239l-1.18 2.127a181.98 181.98 0 01-12.762-7.78l1.352-2.024c4.068 2.718 8.304 5.3 12.59 7.677zM319.221 602.59c-.04 4.907.123 9.869.487 14.748l-2.426.18a182.325 182.325 0 01-.494-14.948zm67.598 141.51l-1.513 1.904a181.17 181.17 0 01-11.302-9.773l1.667-1.772a178.506 178.506 0 0011.148 9.64zm-65.406-112.104a178.423 178.423 0 002.915 14.465l-2.362.578a180.746 180.746 0 01-2.955-14.662zm43.94 91.924l-1.808 1.627a181.5 181.5 0 01-9.539-11.512l1.936-1.473a179.346 179.346 0 009.41 11.358zm-36.92-63.287a179.369 179.369 0 005.261 13.782l-2.235.96a181.853 181.853 0 01-5.332-13.969zm19.066 39.835l-2.05 1.31a185.378 185.378 0 01-7.53-12.918l2.149-1.14a182.64 182.64 0 007.431 12.748zM372.311 476.613a178.852 178.852 0 00-5.048 5.2l-1.78-1.658a180.676 180.676 0 015.118-5.27zM900.146 535.727c-.229-.375-5.64-9.41-7.516-28.172-1.72-17.213-.614-46.227 14.433-86.698 28.505-76.671-6.57-138.533-6.928-139.15l1.73-1.004c.091.157 9.142 15.93 14.489 41.044a179.061 179.061 0 01-7.416 99.807c-28.457 76.54-7.301 112.773-7.084 113.13z"
        fill="#3f3d56"
      />
      <circle cx={889} cy={264.205} r={13} fill={color} />
      <circle cx={930} cy={312.205} r={13} fill="#3f3d56" />
      <circle cx={902} cy={344.205} r={13} fill={color} />
      <circle cx={936} cy={371.205} r={13} fill={color} />
      <circle cx={892} cy={413.205} r={13} fill="#3f3d56" />
      <path
        d="M908 536.205s-13-32 26-56zM892.012 535.625s-5.916-34.03-51.709-33.738z"
        fill="#3f3d56"
      />
      <path
        d="M478.483 738.802a12 12 0 1112-12 12.014 12.014 0 01-12 12zm0-22a10 10 0 1010 10 10.011 10.011 0 00-10-10z"
        fill="#2f2e41"
      />
      <path
        d="M610.31 95.091h-19.74v-19.74h19.74zm-18.222-1.518h16.704V76.869h-16.704z"
        fill="#3f3d56"
      />
      <path
        d="M71.955 646.171L58.49 631.735l14.436-13.465 13.465 14.436zM60.636 631.81l11.394 12.215 12.215-11.393-11.394-12.216z"
        fill="#2f2e41"
      />
      <path
        fill="#efefef"
        d="M602.103 515.335H244.286v-144.44H541.92l60.183 144.44z"
      />
      <path
        d="M603.738 516.43H200.517V339.161h330.099l.279.677zm-401.033-2.19h397.763l-71.317-172.89H202.705z"
        fill="#3f3d56"
      />
      <path
        fill={color}
        d="M303.375 393.874h178.361v16.414H303.375zM303.375 427.796h178.361v16.414H303.375zM303.375 461.717h178.361v16.414H303.375z"
      />
      <path
        d="M299.432 243.205H0v-182h232.698l.241.656zM2 241.205h294.568l-65.266-178H2z"
        fill="#3f3d56"
      />
      <path d="M215 220.205H26v-141h189zm-187-2h185v-137H28z" fill="#3f3d56" />
      <circle cx={298} cy={242.205} r={18} fill={color} />
      <circle cx={600} cy={516.205} r={18} fill={color} />
      <circle cx={729.08} cy={239.742} r={30.288} fill="#a0616a" />
      <path
        d="M708.256 254.255s10.096 22.716-3.786 31.55 22.716 45.433 22.716 45.433l40.385-42.908s-21.454-13.883-17.668-36.599zM638.845 350.168l-8.834 50.481s-15.144 30.288-15.144 56.79-2.524 31.551-2.524 31.551-25.24 50.48-7.572 53.005 25.24-51.743 25.24-51.743 23.979-59.315 23.979-78.245l16.406-41.646zM821.838 352.692l2.524 44.171s8.834 22.716 2.524 63.1l-5.048 39.123s11.358 44.17 0 45.433-25.24-27.765-17.669-44.17v-13.883s-7.572-59.315-5.048-69.41l-8.834-47.957zM657.776 702.271l12.62 32.812 27.764-5.048-17.668-35.336-22.716 7.572zM777.667 728.773l-3.786 47.957h31.55l-1.262-41.647-26.502-6.31z"
        fill="#a0616a"
      />
      <path
        d="M677.968 441.034l-3.786 18.93s-7.572 6.31-7.572 12.62-2.524 8.834-2.524 8.834-1.262 0-2.524 2.524a15.618 15.618 0 01-2.524 3.786s-74.46 75.721-58.053 113.581 47.957 114.844 47.957 114.844 36.598-11.358 36.598-20.192l-35.336-99.7 70.672-73.196 56.791 76.983s-11.358 135.035-3.786 136.297 49.219 10.096 50.48 6.31 7.573-171.634 5.049-177.944-39.123-82.03-39.123-82.03 6.31-7.573 2.524-10.097-10.096-26.502-10.096-26.502-98.437-16.407-104.747-5.048z"
        fill="#2f2e41"
      />
      <path
        d="M732.235 299.688l-25.439-15.689s-14.946.545-18.732 4.33-26.502 13.883-26.502 13.883 5.048 151.442 15.144 146.394 2.524-8.834 10.096-5.048 97.175 5.048 98.437 5.048 2.524-2.524 2.524-2.524l5.048-76.983 16.406-64.363-48.571-22.349z"
        fill="#d0cde1"
      />
      <path
        d="M671.658 300.95h-10.096s-13.883 3.786-20.193 23.978-8.834 29.026-6.31 31.55 36.599 21.455 36.599 21.455zM791.55 303.474l17.668 1.262s22.716 53.004 16.406 55.529-42.909 21.454-42.909 17.668 8.834-74.46 8.834-74.46z"
        fill="#d0cde1"
      />
      <path
        d="M672.92 718.677l-10.29-3.786-23.785 31.55s-44.17 31.55-3.786 30.289c0 0 31.55-5.048 34.075-13.882 0 0 36.598-10.097 36.598-16.407s-8.41-23.131-11.146-23.555-14.094 4.625-21.666-4.209zM805.431 762.848s-30.68-.5-30.484.381-8.638 21.073-7.376 28.645 12.62 17.668 10.096 22.716 7.572 20.192 27.764 21.454S823.1 814.59 823.1 814.59l-10.096-23.978zM710.509 204.685a57.33 57.33 0 01-4.738 3.625 45.04 45.04 0 00-5.711 5.673l-1.953 2.187c-1.662 1.86-3.426 3.984-3.356 6.478.026.925.31 1.823.422 2.742.442 3.646-1.786 7.653.048 10.834.53.92 1.35 1.64 1.935 2.525a5.903 5.903 0 01.933 3.844c1.971.081 3.588-1.685 4.206-3.559s.535-3.897.836-5.846 1.147-4.015 2.918-4.883c3.78-1.852 8.12 2.964 12.155 1.764 2.817-.838 4.303-4.33 7.183-4.916 2.061-.419 4.046.806 5.962 1.674s4.499 1.27 5.853-.34c.897-1.065.993-2.772 2.183-3.496 1.426-.867 3.211.34 4.291 1.614s2.272 2.83 3.94 2.783c2.214-.062 3.91-3.01 6.01-2.31 2.371.79 1.28 4.584 2.72 6.627 1.216 1.728 3.763 1.626 5.857 1.34a2.098 2.098 0 002.184-2.8l-.875-11.596a5.599 5.599 0 00-.513-2.315c-.608-1.103-1.87-1.661-2.726-2.584-1.803-1.941-1.716-5.344-3.958-6.755-1.164-.733-2.686-.71-3.842-1.457-1.482-.956-1.96-2.871-2.997-4.297-1.485-2.039-4.08-2.984-6.588-3.243s-5.04.053-7.56-.03c-5.124-.166-10.248-1.608-15.397-.764-4.493.736-6.38 4.549-9.422 7.48z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgSiteContent.propTypes = {
  color: PropTypes.string
};
SvgSiteContent.defaultProps = {
  color: "primary"
};
export default SvgSiteContent;
