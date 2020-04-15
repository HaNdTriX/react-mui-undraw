import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgTheWorldIsMine = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 666.856 713.509"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M112.227 541.943s2.345-50.443 50.425-44.58M111.663 712.87c-.06-.528-5.735-53.09 17.242-80.908 8.48-10.266 19.844-16.016 33.774-17.087l.153 1.981c-13.37 1.029-24.268 6.536-32.391 16.368-22.44 27.162-16.863 78.902-16.805 79.421z"
        fill="#e6e6e6"
      />
      <path fill="#e6e6e6" d="M109.72 490.367h2v221h-2z" />
      <circle cx={112.227} cy={475.082} r={16.417} fill={color} />
      <circle cx={162.755} cy={615.865} r={16.313} fill="#e6e6e6" />
      <path
        d="M666.856 180.387v1.08q-.037 4.068-.233 8.099a180.387 180.387 0 01-360.172 2.356q-.369-5.725-.369-11.535a179.493 179.493 0 0133.17-104.269q2.595-3.681 5.399-7.227a188.583 188.583 0 013.951-4.848A180.42 180.42 0 01599.99 40.188a179.61 179.61 0 016.394 5.424q2.503 2.227 4.92 4.553A179.899 179.899 0 01666.23 165.22q.626 7.51.626 15.167z"
        fill={color}
      />
      <path
        d="M344.65 68.89a1.003 1.003 0 01.246.148c.97.798-.245 2.331-.098 3.595.172 1.62 2.332 1.976 3.964 2.136 1.632.171 3.693 1.484 2.92 2.932-4.098 1.412-8.246.025-12.43-1.583a179.494 179.494 0 00-33.17 104.269q0 5.816.369 11.535a4.662 4.662 0 001.116.601c1.227.466 2.65.38 3.78 1.043.896.528 1.497 1.46 2.393 1.951 2.564 1.4 6.123-1.288 8.516.38a22.004 22.004 0 011.755 1.792c2.208 1.915 5.84.626 8.393 2.062 1.645.92 2.491 2.76 3.375 4.43 2.196 4.172 5.755 8.27 10.455 8.602a28.155 28.155 0 014.442.147c1.448.332 2.871 1.595 2.638 3.056-.405 2.515.835 5.264.503 7.78-.6 4.601-7.117 6.614-7.67 11.216a27.71 27.71 0 01-.17 3.03c-.295 1.203-1.203 2.185-1.522 3.387-.614 2.27 1.018 4.54 2.797 6.062 1.792 1.534 3.927 2.86 4.909 4.995 1.03 2.27.527 4.908.859 7.375.736 5.387 5.387 9.375 10.173 11.952a10.622 10.622 0 013.976 2.896c1.227 1.78 1.104 4.123 1.521 6.246 1.006 5.19 5.375 9.473 5.498 14.762.086 3.768-2 7.179-3.252 10.725a24.752 24.752 0 00-1.117 11.584 181.251 181.251 0 0022.248 16.137 6.482 6.482 0 00.92-2.062 4.077 4.077 0 00-1.902-4.22 10.088 10.088 0 003.522-2.259 3.455 3.455 0 00.638-3.902c2.16.27 4.725.405 6.148-1.252 1.141-1.325 1.068-3.313.614-4.994-.454-1.693-1.215-3.326-1.228-5.08a91.382 91.382 0 0014.996-.503 9.734 9.734 0 00-4.565-5.719c2.258-.38 4.307-3.08 5.019-5.252a13.378 13.378 0 00.098-6.786 3.61 3.61 0 01-.074-1.767 3.477 3.477 0 011.792-1.73q5.596-3.221 11.191-6.43a6.747 6.747 0 001.792-1.313c1.166-1.387.994-3.46.393-5.167s-1.559-3.313-1.792-5.104c-.687-5.363 5.056-9.216 6.995-14.272a21.434 21.434 0 001.055-6.246c.16-2.282.172-4.92-1.57-6.38-1.682-1.412-4.296-1.093-6.05-2.406-1.608-1.203-2.16-3.522-3.915-4.491-1.595-.884-3.583-.32-5.362-.737-3.117-.724-5.08-4.319-8.271-4.65-1.792-.197-3.829.687-5.301-.356-1.301-.933-1.35-2.786-1.596-4.356a12.17 12.17 0 00-9.817-9.842c-1.853-.295-3.865-.184-5.448-1.203-1.595-1.03-2.32-2.957-3.583-4.393-2.013-2.294-5.203-3.117-8.185-3.816q-6.074-1.417-12.136-2.847c-2.148-.515-4.921-.785-6.087 1.104a8.302 8.302 0 00-.712 2.27 7.04 7.04 0 01-6.602 4.958 7.8 7.8 0 00-4.59-3.558 28.957 28.957 0 01-3.73-.884 5.227 5.227 0 01-2.257-7.252 6.511 6.511 0 00-1.117-7.817c-2.062-1.853-5.044-2.307-7.817-2.123-.724-1.583.491-3.362 1.792-4.516 1.313-1.141 2.896-2.27 3.178-3.988.454-2.7-2.994-4.749-5.608-3.951-2.614.81-4.283 3.35-5.387 5.853a17.653 17.653 0 01-2.172 4.16 4.264 4.264 0 01-4.123 1.693c-2.16-.552-2.982-3.116-3.46-5.276a34.407 34.407 0 01-1.154-8.848 11.55 11.55 0 013.338-8.05c3.57-3.288 9.068-2.97 13.89-2.442a3.538 3.538 0 01.369-4.663 5.302 5.302 0 014.81-1.178 6.6 6.6 0 013.718 2.221c1.375 1.67 1.767 3.94 2.798 5.83 1.043 1.901 3.375 3.521 5.277 2.503 1.656-.884 1.914-3.166 1.51-4.995-.418-1.816-1.29-3.595-1.142-5.46.282-3.547 3.976-5.694 7.228-7.155s6.97-3.436 7.485-6.97a6.513 6.513 0 01.393-2.012 3.934 3.934 0 011.46-1.374c9.486-6.271 19.143-12.628 29.99-16.051.565-.184.627.012 1.203-.123.81-.466.27-1.755-.503-2.27s-1.804-.92-2-1.829c-.135-.662.258-1.325.356-2a2.497 2.497 0 00-3.276-2.528c-.872-1.153.846-2.49 2.245-2.883a61.333 61.333 0 0112.824-2.086 2.283 2.283 0 011.46.245 1.735 1.735 0 01.11 2.38 13.44 13.44 0 01-1.95 1.78 5.36 5.36 0 00-1.4 5.387c2.27 1.153 4.725 2.344 7.24 1.939 2.504-.405 4.725-3.227 3.547-5.473-1.092-2.099-4.393-2.577-4.958-4.872-.663-2.687 3.142-5.08 2.283-7.706-.369-1.154-1.522-1.84-2.406-2.663a7.26 7.26 0 01-1.583-8.025 9.144 9.144 0 01-8-2.504c-1.915-1.926-3.436-4.982-6.16-4.884-2.492.074-4.64 2.982-6.97 2.099-.577-.221-1.179-.663-1.73-.405a1.43 1.43 0 00-.651 1.067c-.59 2.835.43 6.062-1.117 8.517-1.681 2.662-5.571 3.03-7.608 5.436-1.105 1.3-1.534 3.055-2.553 4.43s-3.166 2.258-4.393 1.055a6.047 6.047 0 00-1.644-7.363 15.812 15.812 0 00-3.632-1.767 21.557 21.557 0 01-4.062-2.258 4.025 4.025 0 01-1.485-1.595 3.668 3.668 0 01.098-2.528 10.332 10.332 0 018.21-6.798c1.62-.22 3.51-.147 4.59-1.387.564-.65.858-1.644 1.693-1.902a2.469 2.469 0 011.558.184c2.025.712 4.037 1.424 6.062 2.136a4.152 4.152 0 002.16.355 1.453 1.453 0 001.264-1.533c-.197-1.007-1.743-1.485-1.595-2.504a1.591 1.591 0 01.503-.859 21.683 21.683 0 0117.192-6.786c.76 1.264-.442 2.749-1.46 3.817-1.007 1.08-1.817 2.994-.59 3.816a3.233 3.233 0 001.608.368 14.021 14.021 0 014.295 1.3 81.717 81.717 0 016.172 2.995 7.782 7.782 0 01.147-3.976 2.7 2.7 0 013.191-1.73c1.203.466 1.816 2.061 3.105 2.209 1.705.196 2.38-2.332 1.669-3.903s-2.136-2.871-2.246-4.601c-.086-1.154.356-2.59-.565-3.289a2.441 2.441 0 00-1.092-.393q-11.56-2.116-23.131-4.246c-1.374-.257-3.35-.06-3.411 1.326-.037.785.662 1.558.355 2.27-.33.76-1.41.7-2.196.97a2.982 2.982 0 00-1.718 3.153 8.596 8.596 0 001.448 3.546c-1.51-.625-3.78-.736-5.289-1.374a20.356 20.356 0 00-1.325-5.092 1.797 1.797 0 00-2.344-1.448c-1.988.306-3.976.6-5.964.908a2.307 2.307 0 00-1.362.527c-.773.822-.012 2.135-.037 3.264a3.059 3.059 0 01-2.368 2.639 8.927 8.927 0 01-3.78-.05l-8.344-1.288a13.67 13.67 0 006.307-4.221c1.105-1.3 1.694-3.73.098-4.344a3.807 3.807 0 00-1.448-.11c-3.78.024-6.761-3.13-10.295-4.467a10.12 10.12 0 00-3.473-.638zM666.623 189.566a4.43 4.43 0 01-3.755 1.78c-3.84-.332-5.46-5.867-9.265-6.492a1.483 1.483 0 00-1.006.098c-.564.307-.663 1.067-.7 1.706-.159 3.166-.294 6.454.946 9.375 1.803 4.27 6.479 7.853 5.497 12.381-5.277-2.442-8.025-8.369-9.265-14.05-1.251-5.682-1.448-11.646-3.681-17.02-1.706 2.172-5.264.38-6.81-1.902-1.473-2.16-2.381-4.663-3.805-6.86-1.423-2.184-3.607-4.148-6.209-4.27-2.736-.123-5.117 1.754-7.203 3.534a16.67 16.67 0 00-4.48 4.982c-1.46 2.945-1.079 6.405-1.153 9.682-.073 3.534-.822 7.277-3.24 9.878-2.417 2.59-6.871 3.498-9.534 1.154a10.756 10.756 0 01-2.663-4.798 233.48 233.48 0 01-7.215-25.745c-.442 1.988-2.197 4.552-3.866 3.387a3.447 3.447 0 01-.883-1.154c-3.117-5.264-8.872-8.43-14.701-10.332-5.817-1.89-11.94-2.774-17.695-4.86a45.242 45.242 0 01-9.191-4.577 7.237 7.237 0 00-.442 7.387 5.918 5.918 0 006.65 2.786c1.277-.417 2.357-1.3 3.62-1.743 1.265-.429 2.97-.22 3.523 1.007.54 1.165-.27 2.577.135 3.804.6 1.853 3.411 2 4.393 3.693a3.42 3.42 0 01-.92 3.952 16.538 16.538 0 01-3.706 2.282c-4.124 2.295-7.056 6.21-10.664 9.253-3.608 3.055-8.7 5.276-12.995 3.325 1.018-5.19-5.154-8.995-6.296-14.16-.38-1.706-.184-3.51-.711-5.167-.773-2.405-2.909-4.05-4.651-5.866a23.056 23.056 0 01-6.32-16.75c.098-2.135.491-4.307 0-6.393-.478-2.074-2.209-4.086-4.344-4-4.871.22-11.02.588-13.572-3.571-.92-1.485-1.313-3.657.013-4.798.932-.798 2.307-.724 3.521-.602 3.67.356 7.326.724 10.995 1.08 2.565.246 5.338.454 7.547-.883s3.166-4.909 1.117-6.492c-1.485-1.153-4.16-1.092-4.602-2.92-.356-1.534 1.338-3.265.417-4.553-.65-.908-2.123-.663-3.018.024a19.721 19.721 0 01-2.54 2.222c-1.755.908-3.841.036-5.731-.553s-4.418-.638-5.326 1.117c-1.03 1.951.896 4.528-.11 6.491-1.35 2.59-5.89 1.117-7.78 3.35-2.16 2.553 1.472 6.382.748 9.646a6.013 6.013 0 01-5.927-.332 5.738 5.738 0 01-2.479-5.35c.172-1.472.945-2.982.43-4.368a5.1 5.1 0 00-2.59-2.369q-5.337-2.963-10.675-5.902c-.994 1.84.257 4.11 1.828 5.497 1.559 1.375 3.522 2.418 4.553 4.234a5.564 5.564 0 01-2.086 7.338 1.294 1.294 0 01-1.068.184 1.48 1.48 0 01-.687-.92c-1.878-4.823-4.712-9.572-9.228-12.087-4.528-2.528-11.02-2-13.99 2.233-.699 1.006-1.177 2.16-1.79 3.227-3.253 5.657-10.247 8.332-16.776 8.16a3.233 3.233 0 01-1.828-.429c-1.055-.724-1.006-2.27-.847-3.546.233-1.804.454-3.596.687-5.4a4.324 4.324 0 011.19-2.957c1.216-.957 2.958-.356 4.504-.38a5.673 5.673 0 005.166-3.988 6.41 6.41 0 00-1.791-6.381c-.7-.663-1.645-1.498-1.276-2.393a1.989 1.989 0 011.386-.933c2.761-.798 5.694-1.006 8.406-1.963 2.724-.945 5.363-2.884 6.013-5.694.196-.86.282-1.902 1.055-2.332a3.418 3.418 0 011.227-.245 5.972 5.972 0 005.117-6.222c1.301-.908 3.13-.233 4.394.737 1.251.97 2.368 2.245 3.902 2.662 2.859.786 5.62-1.754 8.59-1.767 1.251 0 2.54.442 3.706.013 1.19-.43 1.902-1.608 2.81-2.48.92-.883 2.515-1.41 3.362-.465-.245-1.78-.479-3.547-.724-5.314a10.445 10.445 0 008.504-1.546c-3.092-1.043-6.172-2.086-9.265-3.13a2 2 0 01-.871-.465c-.675-.724 0-1.853.54-2.676 1.313-1.975 1.534-5.227-.626-6.209-1.472-.675-3.154.135-4.565.92-2.258 1.252-4.516 2.516-6.774 3.768-.208 1.288 1.363 2.025 2.332 2.884a3.91 3.91 0 01-2.552 6.835 4.898 4.898 0 01.87 4.135l-4.552.331a1.955 1.955 0 01-1.472-.294c-.491-.43-.418-1.19-.54-1.829a3.95 3.95 0 00-3.338-2.908 11.523 11.523 0 00-4.65.43 2.834 2.834 0 01-2.013-.05 2.008 2.008 0 01-.786-1.006 5.13 5.13 0 011.031-4.933 28.238 28.238 0 013.878-3.57 22.606 22.606 0 006.737-10.431c2.503-1.056 5.092-2.479 7.608-3.534a30.393 30.393 0 016.32-2.123 29.864 29.864 0 016.197-.295c2.822.05 5.657.098 8.479.16a20.407 20.407 0 017.424 1.067c2.32.958 4.369 3.031 4.528 5.535a1.7 1.7 0 01-.552 1.558 1.988 1.988 0 01-1.068.246c-2.343.073-3.337.662-5.681.748 1.485 1.583 3.153 3.252 5.313 3.534 3.804.491 6.54-3.448 8.296-6.872a3.349 3.349 0 003.497 3.105 7.053 7.053 0 002.638-1.03 51.899 51.899 0 0124.604-6.357 2.65 2.65 0 012.025-2.92c1.755-.344 3.325 1.165 4.172 2.736.834 1.57 1.362 3.386 2.712 4.565 1.337 1.178 3.927 1.116 4.454-.577.516-1.632-1.19-3.031-2.601-4-1.424-.958-2.908-2.737-1.951-4.16 7.215-1.608 14.492-3.203 21.892-3.522a9.316 9.316 0 003.68-.639 2.861 2.861 0 001.719-3.03 8.367 8.367 0 01-8.713-3.29c7.596-.625 15.548-1.177 22.85.528l6.393 5.424c-1.215 1.264-2.835 2.455-1.951 3.718a2.72 2.72 0 002.245.774c1.546.024 3.093.06 4.626.06A179.9 179.9 0 01666.23 165.22c-2.577-.098-4.945 3.166-4.614 6.013.393 3.3 2.774 5.951 4.48 8.798a13.408 13.408 0 01.76 1.436z"
        fill="#3f3d56"
      />
      <circle cx={428.126} cy={326.94} r={31} fill="#2f2e41" />
      <path
        d="M413.328 342.601s-10.097 22.358-12.982 23.08 23.8 13.702 23.8 13.702 5.049-27.406 7.212-28.848-18.03-7.934-18.03-7.934zM353.467 525.791l-18.752 52.649 20.194 7.934 34.619-68.516-36.061 7.933zM419.098 527.234s37.503 52.649 39.667 53.37 17.31-12.26 17.31-12.26-18.753-45.438-24.522-47.601-32.455 6.49-32.455 6.49z"
        fill="#ffb9b9"
      />
      <path
        d="M331.83 569.064l-29.57 77.171s2.164 4.327 0 5.049-7.212 12.26-7.212 12.982-5.049 1.442-5.049 3.606-4.327 19.473-4.327 19.473 7.933 17.309 12.982 12.26 7.212-15.145 7.212-15.145l7.212-18.752s-.72-10.097 4.328-11.54 7.933-19.473 7.933-19.473 7.934-7.933 9.376-10.097 26.685-40.388 24.521-41.11-27.406-14.424-27.406-14.424zM454.438 579.162l21.636-14.425s37.504 68.516 37.504 69.959-1.443 5.77 0 7.212 13.703 24.521 21.636 26.685 9.376 10.818 2.885 12.26-15.146 5.05-17.31 0a79.371 79.371 0 00-4.327-8.654s-7.212 2.164-7.933.721a66.371 66.371 0 01-2.164-6.49s-5.77-10.098-5.77-13.704-3.605-4.327-3.605-4.327-7.934-18.752-12.982-21.637-9.376-17.31-9.376-17.31z"
        fill="#2f2e41"
      />
      <circle cx={428.474} cy={338.274} r={20.915} fill="#ffb9b9" />
      <path
        d="M366.449 465.209s-30.956 82.234-26.628 82.234 124.043 2.604 127.649-3.165-31.063-63.202-32.505-63.924-68.516-15.145-68.516-15.145z"
        fill="#2f2e41"
      />
      <path
        d="M335.436 293.558L313.8 260.382s5.35-34.802-1.862-28.311-9.495 32.704-9.495 32.704l25.06 38.16zM531.608 354.14l19.473-1.442s23.08-24.521 24.522-16.588-18.752 25.243-18.752 25.243l-26.685 2.885z"
        fill="#ffb9b9"
      />
      <path
        d="M389.528 361.353v-7.212s-18.752-12.261-18.03-14.425-1.443-3.606-1.443-3.606-2.164-2.885-2.164-3.606-2.885-1.442-2.885-1.442l-18.03-20.916s-10.097-20.194-12.261-19.473-13.703 5.049-12.26 7.934 41.83 64.91 41.83 64.91 2.164 13.703 5.77 13.703 19.473-15.867 19.473-15.867zM437.85 370.008s15.866-.722 16.588 0 10.818 0 10.818 0 27.406-6.491 29.57-8.655 38.225-11.54 39.667-7.212 5.048 12.982 1.442 14.424-100.97 25.964-100.97 25.964z"
        fill="#3f3d56"
      />
      <circle cx={417.282} cy={294.313} r={12.827} fill="#2f2e41" />
      <path
        d="M400.179 287.365a12.829 12.829 0 0111.49-12.758 12.971 12.971 0 00-1.335-.07 12.827 12.827 0 100 25.656 12.968 12.968 0 001.336-.07 12.829 12.829 0 01-11.491-12.758z"
        fill="#2f2e41"
      />
      <ellipse
        cx={431.732}
        cy={320.367}
        rx={21.379}
        ry={12.827}
        fill="#2f2e41"
      />
      <path
        d="M407.198 353.78s-6.491 5.049-7.934 5.77-10.097-6.491-11.54-6.491-20.194 21.637-20.194 21.637 3.485 4.014 0 24.521c-1.306 7.691-3.9 40.572-3.9 44.9s-14.13 14.961-1.148 24.337 75.007 19.473 75.728 13.703-7.212-20.915-3.606-28.127 3.606-33.898 3.606-33.898l4.327-28.127 3.606-22.358s-16.948-4.688-18.39-4.688-7.934 10.097-20.555-11.179zM0 711.268h664v2.241H0z"
        fill="#3f3d56"
      />
    </svg>
  );
};

SvgTheWorldIsMine.propTypes = {
  color: PropTypes.string
};
SvgTheWorldIsMine.defaultProps = {
  color: "primary"
};
export default SvgTheWorldIsMine;
