import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgCodeReview = ({ color }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1126.194 855"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M544.864 755.938C302.465 737.49 13.394 549.672 28.111 356.28S322.797-17.142 565.196 1.305 947.128 381.167 932.41 574.558s-145.148 199.827-387.547 181.38z"
        fill="#f2f2f2"
      />
      <ellipse cx={565.194} cy={756} rx={506} ry={31} fill="#3f3d56" />
      <ellipse cx={565.194} cy={755.5} rx={431} ry={20.5} opacity={0.1} />
      <ellipse cx={212.194} cy={836.5} rx={212.194} ry={18.5} fill="#3f3d56" />
      <ellipse
        cx={212.194}
        cy={836.202}
        rx={180.742}
        ry={12.234}
        opacity={0.1}
      />
      <path fill="#3f3d56" d="M196.194 162h752v590h-752z" />
      <path
        d="M563.638 242.63H378.12a2.251 2.251 0 110-4.504h185.518a2.251 2.251 0 010 4.503zM766.717 267.395H474.932a2.251 2.251 0 010-4.503h291.785a2.251 2.251 0 110 4.503zM564.539 292.16H379.02a2.251 2.251 0 110-4.502h185.518a2.251 2.251 0 110 4.503zM766.717 292.61H581.199a2.251 2.251 0 010-4.502h185.518a2.251 2.251 0 110 4.503zM564.989 316.926H379.471a2.251 2.251 0 010-4.503H564.99a2.251 2.251 0 110 4.503zM565.44 341.692H379.921a2.251 2.251 0 010-4.503h185.517a2.251 2.251 0 110 4.503zM649.643 243.08h-53.134a2.251 2.251 0 010-4.503h53.134a2.251 2.251 0 110 4.502zM649.643 316.926h-53.134a2.251 2.251 0 010-4.503h53.134a2.251 2.251 0 110 4.503zM649.643 341.242h-53.134a2.251 2.251 0 110-4.503h53.134a2.251 2.251 0 110 4.503zM738.8 341.242h-53.134a2.251 2.251 0 010-4.503h53.133a2.251 2.251 0 110 4.503zM430.804 267.395H377.67a2.251 2.251 0 010-4.503h53.134a2.251 2.251 0 010 4.503zM563.863 607.36H378.346a2.251 2.251 0 010-4.502h185.517a2.251 2.251 0 010 4.503zM562.963 656.892H377.445a2.251 2.251 0 110-4.503h185.518a2.251 2.251 0 010 4.503zM563.413 681.658H377.895a2.251 2.251 0 110-4.503h185.518a2.251 2.251 0 110 4.503zM642.663 657.342H589.53a2.251 2.251 0 010-4.503h53.133a2.251 2.251 0 010 4.503zM642.663 681.658H589.53a2.251 2.251 0 010-4.503h53.133a2.251 2.251 0 110 4.503zM731.82 657.342h-53.134a2.251 2.251 0 110-4.503h53.134a2.251 2.251 0 010 4.503zM766.942 632.126H475.157a2.251 2.251 0 010-4.503h291.785a2.251 2.251 0 010 4.503zM431.029 632.126h-53.134a2.251 2.251 0 010-4.503h53.134a2.251 2.251 0 010 4.503zM766.942 706.874H475.157a2.251 2.251 0 110-4.503h291.785a2.251 2.251 0 010 4.503zM431.029 706.874h-53.134a2.251 2.251 0 110-4.503h53.134a2.251 2.251 0 110 4.503z"
        fill="#f2f2f2"
      />
      <path
        fill={color}
        d="M519.06 401.13l-72.046 71.145 72.046 71.145 16.21-16.21-54.484-54.485 54.934-54.935-16.66-16.66zM625.327 401.13l72.046 71.145-72.046 71.145-16.21-16.21 54.485-54.485-54.935-54.935 16.66-16.66z"
      />
      <circle cx={216.194} cy={177} r={9} fill={color} />
      <circle cx={240.194} cy={177} r={9} fill={color} />
      <circle cx={264.194} cy={177} r={9} fill={color} />
      <path opacity={0.1} d="M196.194 192h752v3h-752z" />
      <path
        d="M1126.194 607.454c0 63.77-37.911 86.037-84.677 86.037s-84.676-22.266-84.676-86.037 84.676-144.898 84.676-144.898 84.677 81.126 84.677 144.898z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M1038.433 683.736l.867-53.371 36.091-66.027-35.955 57.655.39-23.998 24.873-47.769-24.77 41.419.701-43.161 26.635-38.031-26.525 31.244.438-79.141-2.753 104.769.226-4.322-27.08-41.451 26.646 49.748-2.523 48.203-.075-1.28-31.219-43.621 31.124 48.141-.315 6.028-.057.091.026.495-6.402 122.296h8.553l1.026-63.168 31.049-48.024-30.971 43.275z"
      />
      <path
        d="M122.622 751.091a43.126 43.126 0 01-8.178 3.503c-5.08 1.387-10.508.878-15.638 2.063-2.1.485-4.386 1.499-5.054 3.548-.49 1.504.043 3.127.554 4.624 5.668 16.62 9.085 34.266 18.125 49.32a74.64 74.64 0 0013.992 16.988c2.056 1.852 4.385 3.664 7.136 3.955a7.248 7.248 0 007.37-10.182c-.81-1.801-2.317-3.197-3.289-4.916a18.757 18.757 0 01-1.819-6.99c-.893-7.11-1.754-14.538.71-21.266 1.651-4.512 4.681-8.359 7.206-12.447s4.621-8.772 4.06-13.544c-.384-3.257-1.972-6.237-3.65-9.054-1.682-2.823-5.005-10.409-8.383-11.35-3.507-.979-10.084 4.181-13.142 5.748zM215.057 808.5a14.019 14.019 0 01-.664 4.745c-1.057 2.793-3.68 4.706-5.036 7.367-1.885 3.7-1.03 8.174.218 12.135.783 2.483 1.81 5.067 3.913 6.602a12.893 12.893 0 005.954 1.908c18.036 2.496 36.358 1.064 54.558 1.587 3.317.095 6.83.211 9.725-1.41s4.686-5.697 2.717-8.368c-1.769-2.398-5.265-2.376-8.242-2.517a33.912 33.912 0 01-20.913-8.615 15.112 15.112 0 01-2.934-3.377 20.753 20.753 0 01-1.534-3.517 156.799 156.799 0 00-9.083-20.119c-.98-1.815-2.087-3.705-3.906-4.676a10.323 10.323 0 00-4.24-.926c-4.536-.294-16.283-1.838-19.79 1.69-3.242 3.26-.672 13.351-.743 17.491z"
        fill="#2f2e41"
      />
      <circle cx={242.971} cy={376.72} r={28.975} fill="#fbbebe" />
      <path
        d="M216.806 400.646c-1.724 4.614-4.647 8.947-8.9 11.43l40.074 8.174a42.453 42.453 0 01-.562-17.869 10.3 10.3 0 00.24-4.409c-.754-2.907-4.027-4.306-6.955-4.974-7.314-1.667-13.782-2.561-20.579-5.792-2.077 3.557-1.787 9.34-3.318 13.44z"
        fill="#fbbebe"
      />
      <path
        d="M207.57 401.227a31.338 31.338 0 0127.314.714c5.138 2.707 9.392 6.794 13.571 10.826 3.853 3.717 7.963 7.972 8.236 13.319.133 2.59-.676 5.122-1.084 7.683a25.766 25.766 0 0013.78 26.47c3.184 5.303 3.84 11.729 3.89 17.914.185 23.436-7.21 47.16-1.93 69.995 1.239 5.362 3.16 10.554 4.231 15.952 1.387 6.99 1.319 14.18 2.044 21.27a95.266 95.266 0 005.114 22.495c-1.744 2.774-5.374 3.837-8.643 3.613s-6.325-1.644-9.242-3.136c-14.123-7.227-27.059-16.757-41.687-22.9-9.677-4.063-19.987-6.595-29.376-11.288s-18.12-12.142-20.99-22.238c-1.241-4.365-1.318-8.965-1.385-13.503-.286-19.114-.55-38.436 3.61-57.094 3.669-16.453 10.741-32.194 12.284-48.98.502-5.465.513-11.314 3.566-15.874 4.315-6.445 13.632-8.114 16.698-15.238z"
        fill="#2f2e41"
      />
      <path
        d="M226.492 377.13c1.707-2.228 5-2.531 7.727-1.872s5.243 2.064 7.998 2.598a4.675 4.675 0 003.743-.526 5.444 5.444 0 001.616-3.57 68.163 68.163 0 00.67-17.38 5.147 5.147 0 01.16-2.438c.681-1.643 2.762-2.034 4.461-2.562a13.316 13.316 0 009.013-13.633 5.42 5.42 0 00-1.657-3.74c-1.175-.958-2.82-1.017-4.336-1.029q-11.683-.094-23.366.006c-2.883.024-5.91.095-8.41 1.532-1.847 1.063-3.221 2.773-4.88 4.112-4.326 3.491-10.178 4.201-15.441 5.99a15.308 15.308 0 00-6.768 4.036c-1.75 2-2.592 4.974-1.492 7.393a26.252 26.252 0 001.886 2.904c3.105 4.964 1.038 11.403 1.502 17.24.579 7.288 11.365 19.111 18.679 20.836 11.807 2.784 4.986-15.113 8.895-19.898zM210.134 696.683c.745 5.321 1.701 10.661 1.446 16.029-.357 7.493-3.06 14.714-3.56 22.2-.372 5.59.49 11.241-.286 16.79-.497 3.554-1.656 6.979-2.373 10.494a43.395 43.395 0 006.973 33.266 5.448 5.448 0 002.024 1.96 5.714 5.714 0 002.507.333 179.947 179.947 0 0025.17-2.288 2.414 2.414 0 001.617-.713 2.266 2.266 0 00.35-.954c1.545-7.936-1.976-15.893-2.871-23.928-.956-8.58 1.103-17.178 3.146-25.565a113.548 113.548 0 013.467-12.228c.988-2.697 2.181-5.32 3.037-8.063a61.46 61.46 0 002.202-13.202q.892-10.575.945-21.2a88.958 88.958 0 00-1.665-20.01c-1.878-8.337-5.724-16.08-9.536-23.73a15.029 15.029 0 00-5.618 2.67 125.38 125.38 0 01-15.35 8.481c-3.567 1.657-10.522 2.834-12.786 6.286-2.232 3.405-.792 10.35-.621 14.106q.439 9.667 1.782 19.266z"
        fill="#2f2e41"
      />
      <path
        d="M210.134 696.683c.745 5.321 1.701 10.661 1.446 16.029-.357 7.493-3.06 14.714-3.56 22.2-.372 5.59.49 11.241-.286 16.79-.497 3.554-1.656 6.979-2.373 10.494a43.395 43.395 0 006.973 33.266 5.448 5.448 0 002.024 1.96 5.714 5.714 0 002.507.333 179.947 179.947 0 0025.17-2.288 2.414 2.414 0 001.617-.713 2.266 2.266 0 00.35-.954c1.545-7.936-1.976-15.893-2.871-23.928-.956-8.58 1.103-17.178 3.146-25.565a113.548 113.548 0 013.467-12.228c.988-2.697 2.181-5.32 3.037-8.063a61.46 61.46 0 002.202-13.202q.892-10.575.945-21.2a88.958 88.958 0 00-1.665-20.01c-1.878-8.337-5.724-16.08-9.536-23.73a15.029 15.029 0 00-5.618 2.67 125.38 125.38 0 01-15.35 8.481c-3.567 1.657-10.522 2.834-12.786 6.286-2.232 3.405-.792 10.35-.621 14.106q.439 9.667 1.782 19.266z"
        opacity={0.1}
      />
      <path
        d="M170.961 583.018c-3.848 10.36 1.808 21.554 6.722 31.452 12.106 24.386 20.513 50.408 28.875 76.317.626 1.941 1.252 4.059.554 5.975a7.825 7.825 0 01-2.822 3.347c-5.766 4.379-13.107 5.938-19.975 8.23a90.184 90.184 0 00-18.943 8.88c-4.976 3.083-9.639 6.643-14.291 10.197l-14.812 11.312a9.903 9.903 0 00-2.476 2.397c-1.429 2.241-.844 5.167-.132 7.728a131.432 131.432 0 007.252 19.792 6.911 6.911 0 002.63 3.447c2.312 1.242 5.14-.405 6.905-2.347s3.292-4.36 5.78-5.193c2.487-.833 5.223.176 7.819-.189 4.198-.59 6.986-4.457 10.012-7.426 12.366-12.131 33.01-11.251 46.613-21.977a59.228 59.228 0 016.23-4.868c2.3-1.36 4.908-2.105 7.294-3.307 7.257-3.654 11.819-11.208 14.262-18.957s3.141-15.928 4.897-23.86c.908-4.101 2.103-8.158 2.507-12.339a66.094 66.094 0 00-.253-11.666l-4.908-60.715c-.4-4.943-.8-9.893-1.576-14.79-14.577.52-29.143 1.107-43.728 1.28-11.605.136-23.424.948-34.436-2.72z"
        fill="#2f2e41"
      />
      <path
        d="M165.602 597.221c1.978 3.18 6.79 3.114 10.105 1.37s5.889-4.672 9.21-6.4c4.464-2.323 9.747-2.236 14.777-2.094 7.963.225 16.025.465 23.687 2.647 7.924 2.257 15.64 6.603 23.834 5.736 1.425-.15 2.985-.56 3.76-1.765a5.544 5.544 0 00.62-2.836l.268-7.159a6.464 6.464 0 00-.57-3.625 6.082 6.082 0 00-2.716-2.08c-11.663-5.646-24.964-6.697-37.915-7.14q-9.874-.34-19.757-.28c-5.591.035-12.303-.774-17.739.72-7.295 2.005-11.265 16.954-7.563 22.906z"
        fill="#2f2e41"
      />
      <path
        d="M238.84 409.726c-15.283-.136-29.132-10.223-44.413-10.469a11.514 11.514 0 00-5.392.93c-2.13 1.073-3.53 3.147-5.147 4.9-4.518 4.892-11.061 7.504-15.703 12.28-4.352 4.478-6.773 11.15-5.055 17.153s8.204 10.609 14.28 9.165a36.8 36.8 0 0114.336-19.479 72.887 72.887 0 0111.206-5.882c6.868-3.112 14.547-6.283 21.718-3.95a30.638 30.638 0 017.409 4.04l11.954 8.03c-1.393-5.494-2.646-11.656-5.194-16.718z"
        fill={color}
      />
      <path
        d="M175.65 438.374c-2.03 2.532.893 6.2.446 9.413-.298 2.135-2.055 3.766-2.786 5.793-.758 2.1-.356 4.427-.644 6.642a28.489 28.489 0 01-1.275 4.73 84.975 84.975 0 00-2.686 14.025l-2.675 19.975a75.681 75.681 0 00-.846 9.078 27.107 27.107 0 01-.452 6.787c-.592 2.183-1.904 4.093-2.786 6.176s-1.292 4.602-.1 6.524c-3.991 3.325-5.178 9.854-2.387 14.235a7.9 7.9 0 011.23 2.265 5.82 5.82 0 01-.542 3.34l-2.704 7.207c-.693 1.845-.912 4.653 1.013 5.074a17.006 17.006 0 00-3.651 5.767 6.866 6.866 0 00.972 6.506 8.289 8.289 0 011.695 2.056 5.473 5.473 0 01-.196 3.243 11.906 11.906 0 001.473 9.334 8.371 8.371 0 008.418 3.608c5.41-1.22 10.273-3.147 15.728-2.146 11.746 2.156 23.53 4.32 34.906 7.952 12.984 4.146 25.556 10.225 39.126 11.5a3.798 3.798 0 002.617-.406 3.93 3.93 0 001.21-2.488l4.194-19.665a202.363 202.363 0 003.855-22.027c.477-4.781.613-9.59.75-14.393l1.08-38.23a38.197 38.197 0 00-2.2-16.62l-6.218-19.848c-3.548-11.327-11.687-21.372-14.585-32.882-1.834-7.285-3.19-15.103-8.108-20.781-7.013-8.095-19.145-9.354-29.764-7.962-4.797.628-9.636 1.714-13.785 4.201-4.798 2.877-8.333 7.41-11.753 11.837-2.818 3.649-5.687 6.582-8.57 10.18z"
        fill={color}
      />
      <path
        d="M200.444 550.823c.875 3.773 2.712 7.252 3.837 10.957 1.884 6.21 1.725 12.896 3.605 19.106.79 2.606 1.933 5.109 2.5 7.773 1.32 6.21-.608 12.635-3.004 18.515s-5.313 11.678-6.09 17.98c-.549 4.438.238 9.45 3.66 12.33 3.551 2.99 8.712 2.788 13.338 2.39a14.016 14.016 0 004.841-1.008c3.538-1.673 5.028-5.86 5.855-9.685 2.771-12.819 1.98-26.106 1.174-39.196l-2.106-34.235c-.405-6.59-.84-13.318-2.87-19.646-.74-2.302-2.027-6.954-4.13-8.424-2.082-1.455-8.03-1.52-10.608-1.641-12.098-.569-11.963 16.317-10.002 24.784z"
        fill="#fbbebe"
      />
      <path
        d="M213.848 424.423c-2.47-1.293-5.583-.736-7.972.705a24.568 24.568 0 00-5.972 5.798c-5.338 6.517-10.99 13.995-10.198 22.382.296 3.145 1.5 6.12 2.317 9.172 3.58 13.38-.379 27.53.075 41.373.263 7.999 2.003 15.867 3.737 23.68.353 1.594.92 3.44 2.462 3.977 1.16.403 2.41-.115 3.558-.551a28.371 28.371 0 0125.963 3.272c2.865-1.529 1.791-6.363 1.149-9.546-1.909-9.457.682-19.214 3.828-28.335s6.91-18.23 7.432-27.865c.59-10.916-3.029-21.57-6.6-31.903-.78-2.255-1.631-4.62-3.438-6.178a13.665 13.665 0 00-5.203-2.377c-3.793-1.121-7.634-1.769-11.138-3.604z"
        fill="#2f2e41"
      />
    </svg>
  );
};

SvgCodeReview.propTypes = {
  color: PropTypes.string
};
SvgCodeReview.defaultProps = {
  color: "primary"
};
const MemoSvgCodeReview = React.memo(SvgCodeReview);
export default MemoSvgCodeReview;
