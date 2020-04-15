import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

const SvgSuburbs = ({ color, ...props }) => {
  const theme = useTheme();

  if (color == "primary") {
    color = theme.palette.primary.main;
  } else if (color == "secondary") {
    color = theme.palette.secondary.main;
  }

  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 1140.706 705.602"
      width="100%"
      height="auto"
      {...props}
    >
      <path
        d="M24.158 464.851c7.212 13.374 22.517 19.115 22.517 19.115s3.613-15.942-3.598-29.316-22.517-19.116-22.517-19.116-3.614 15.943 3.598 29.317z"
        fill="#3f3d56"
      />
      <path
        d="M29.115 460.451c13.02 7.833 18.034 23.392 18.034 23.392s-16.095 2.859-29.115-4.974S0 455.477 0 455.477s16.095-2.86 29.115 4.974z"
        fill={color}
      />
      <path
        d="M710.706 242.972c0 106.934-63.57 144.272-141.99 144.272s-141.989-37.338-141.989-144.272S568.717 0 568.717 0s141.99 136.037 141.99 242.972z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M563.544 370.886l1.454-89.495 60.52-110.717-60.292 96.678.654-40.24 41.71-80.103-41.537 69.454 1.176-72.374 44.664-63.772-44.479 52.391L568.148 0l-4.616 175.682.379-7.247-45.41-69.508 44.682 83.42-4.231 80.829-.126-2.145-52.35-73.146 52.191 80.725-.529 10.109-.095.152.044.83-10.735 205.071h14.342l1.721-105.924 52.063-80.527-51.934 72.565z"
      />
      <path
        d="M1107.706 242.972c0 106.934-63.57 144.272-141.99 144.272s-141.989-37.338-141.989-144.272S965.717 0 965.717 0s141.99 136.037 141.99 242.972z"
        fill="#f2f2f2"
      />
      <path
        fill="#3f3d56"
        d="M960.544 370.886l1.454-89.495 60.52-110.717-60.292 96.678.654-40.24 41.71-80.103-41.537 69.454 1.176-72.374 44.664-63.772-44.479 52.391L965.148 0l-4.616 175.682.379-7.247-45.41-69.508 44.682 83.42-4.231 80.829-.126-2.145-52.35-73.146 52.191 80.725-.529 10.109-.095.152.044.83-10.735 205.071h14.342l1.721-105.924 52.063-80.527-51.934 72.565z"
      />
      <circle cx={109.216} cy={274.472} r={54.315} fill="#ff6584" />
      <path
        fill="#3f3d56"
        d="M40.303 376.635l-7.973-13.289 74.416-63.785h191.357v18.604l-69.101 74.416-79.732 15.947-108.967-31.893z"
      />
      <path
        fill="#ccc"
        d="M331.043 336.993v-41.582H305.99v13.112l-7.887-8.962-63.786 63.785-10.631 10.631-13.288 53.155 23.919 58.47h122.256V366.004l-25.53-29.011z"
      />
      <path fill="#f2f2f2" d="M32.33 363.346h201.988v122.256H32.33z" />
      <path fill="#3f3d56" d="M163.887 401.884h42.524v37.208h-42.524z" />
      <path fill="#ccc" d="M109.404 400.555h37.208v85.047h-37.208z" />
      <path
        fill="#3f3d56"
        d="M66.88 413.843v-13.288H50.934v13.288H66.88zM65.551 424.474H50.934v13.289H66.88v-13.289h-1.329zM77.511 400.555h15.946v13.289H77.511zM77.511 424.474h15.946v13.289H77.511zM291.459 415.172v-13.288h-15.947v13.288H291.459zM290.13 425.803h-14.618v13.289h15.947v-13.289h-1.329zM302.09 401.884h15.946v13.289H302.09zM302.09 425.803h15.946v13.289H302.09zM423.812 376.562l-7.973-13.288 74.417-63.786h191.356v18.604l-69.101 74.417-79.732 15.946-108.967-31.893z"
      />
      <path
        fill="#ccc"
        d="M714.553 336.92v-41.582h-25.054v13.112l-7.887-8.962-63.785 63.786-10.631 10.63-13.289 53.155 23.92 58.47h122.255V365.931l-25.529-29.011z"
      />
      <path fill="#f2f2f2" d="M415.839 363.274h201.988V485.53H415.839z" />
      <path fill="#3f3d56" d="M547.397 401.811h42.524v37.208h-42.524z" />
      <path fill="#ccc" d="M492.913 400.482h37.208v85.047h-37.208z" />
      <path
        fill="#3f3d56"
        d="M450.39 413.77v-13.288h-15.947v13.288H450.39zM449.061 424.401h-14.618v13.289h15.947v-13.289h-1.329zM461.021 400.482h15.946v13.289h-15.946zM461.021 424.401h15.946v13.289h-15.946zM674.968 415.099v-13.288h-15.946v13.288H674.968zM673.639 425.73h-14.617v13.289h15.946V425.73h-1.329zM685.599 401.811h15.946V415.1h-15.946zM685.599 425.73h15.946v13.289h-15.946zM795.812 376.562l-7.973-13.288 74.417-63.786h191.356v18.604l-69.101 74.417-79.732 15.946-108.967-31.893z"
      />
      <path
        fill="#ccc"
        d="M1086.553 336.92v-41.582h-25.054v13.112l-7.887-8.962-63.785 63.786-10.631 10.63-13.289 53.155 23.92 58.47h122.255V365.931l-25.529-29.011z"
      />
      <path fill="#f2f2f2" d="M787.839 363.274h201.988V485.53H787.839z" />
      <path fill="#3f3d56" d="M919.397 401.811h42.524v37.208h-42.524z" />
      <path fill="#ccc" d="M864.913 400.482h37.208v85.047h-37.208z" />
      <path
        fill="#3f3d56"
        d="M822.39 413.77v-13.288h-15.947v13.288H822.39zM821.061 424.401h-14.618v13.289h15.947v-13.289h-1.329zM833.021 400.482h15.946v13.289h-15.946zM833.021 424.401h15.946v13.289h-15.946zM1046.968 415.099v-13.288h-15.946v13.288H1046.968zM1045.639 425.73h-14.617v13.289h15.946V425.73h-1.329zM1057.599 401.811h15.946V415.1h-15.946zM1057.599 425.73h15.946v13.289h-15.946zM759.082 406.597h2v79h-2z"
      />
      <path
        d="M779.54 416.665c.128 27.624-19.308 50.108-19.308 50.108s-19.641-22.303-19.769-49.928 19.308-50.108 19.308-50.108 19.642 22.304 19.77 49.928z"
        fill={color}
      />
      <path fill="#3f3d56" d="M395.082 404.597h2v79h-2z" />
      <path
        d="M415.54 414.665c.128 27.624-19.308 50.108-19.308 50.108s-19.641-22.303-19.769-49.928 19.308-50.108 19.308-50.108 19.642 22.304 19.77 49.928z"
        fill={color}
      />
      <path
        d="M415.54 414.665c.128 27.624-19.308 50.108-19.308 50.108s-19.641-22.303-19.769-49.928 19.308-50.108 19.308-50.108 19.642 22.304 19.77 49.928z"
        opacity={0.1}
      />
      <path fill="#3f3d56" d="M369.082 404.597h2v79h-2z" />
      <path
        d="M389.54 414.665c.128 27.624-19.308 50.108-19.308 50.108s-19.641-22.303-19.769-49.928 19.308-50.108 19.308-50.108 19.642 22.304 19.77 49.928z"
        fill={color}
      />
      <path fill="#3f3d56" d="M3.706 483.602h1137v2h-1137z" />
      <path
        d="M261.127 423.762s1.025 1.174-.73 3.446-.338 7.2 2.996 7.325 4.952 1.522 4.148 3.362-1.77 6.211 1.861 5.546 4.78.781 4.136 1.893 1.62-2.21 1.62-2.21 2.023 3.015 4.507.904 3.471-21.24-1.592-21.564-16.945 1.298-16.945 1.298z"
        fill="#2f2e41"
      />
      <path
        fill="#ffb8b8"
        d="M286.797 514.735l1.153 8.077h5.193l-1.731-9.231-4.615 1.154z"
      />
      <path
        d="M293.72 517.908s6.923 6.347 5.192 6.924-8.077 7.5-9.23 8.077c-1.033.516-12.116 4.038-10.385 0a15.174 15.174 0 015.769-6.347l1.154-6.923z"
        fill="#f2f2f2"
      />
      <path
        d="M293.72 517.908s6.923 6.347 5.192 6.924-8.077 7.5-9.23 8.077c-1.033.516-12.116 4.038-10.385 0a15.174 15.174 0 015.769-6.347l1.154-6.923z"
        opacity={0.1}
      />
      <path
        fill="#ffb8b8"
        d="M293.72 508.678l1.154 8.077h5.192l-1.731-9.231-4.615 1.154zM272.024 487.237l7.561-25.002s-12.692-11.539-4.038-15 10.961 13.846 10.961 13.846l-2.884 30h-11.54z"
      />
      <path
        d="M289.681 468.87s-14.91 19.124-12.648 21.966 6.302 20.15 6.302 20.15-.577 6.922 1.73 6.922 8.078-1.153 8.078-2.884-5.193-23.654-5.193-23.654l15-19.616z"
        fill={color}
      />
      <path
        d="M290.835 470.023l15-8.077s10.385 5.193 7.5 9.808-16.154 16.731-16.154 16.731 4.039 19.616 3.462 20.193-6.923 2.884-8.654 2.307-10.962-23.077-8.654-24.23 9.808-13.27 9.808-13.27z"
        fill={color}
      />
      <path
        d="M249.873 690.756s10.385 6.346 11.539 6.346 16.73 4.038 9.808 6.923-33.462-1.154-32.885-2.885 0-12.115 1.154-12.115 10.384 1.73 10.384 1.73z"
        fill="#2f2e41"
      />
      <path
        d="M261.412 689.833s10.384 6.346 11.538 6.346 16.731 4.038 9.808 6.923-33.462-1.154-32.885-2.885 0-12.115 1.154-12.115 10.385 1.73 10.385 1.73z"
        fill="#2f2e41"
      />
      <path
        d="M249.45 569.524s2.731 15.654 5.616 22-.577 36.347-2.308 40.962-18.462 59.424-13.27 60 15.578 0 15.578 0l16.73-52.5-2.884-70.385z"
        fill="#575a88"
      />
      <path
        d="M249.45 569.524s2.731 15.654 5.616 22-.577 36.347-2.308 40.962-18.462 59.424-13.27 60 15.578 0 15.578 0l16.73-52.5-2.884-70.385z"
        opacity={0.1}
      />
      <path
        d="M253.912 568.101s2.307 15.577 7.5 19.039 3.461 6.923 3.461 6.923l-2.307 30.577s-22.5 55.385-15.577 62.308 13.269 4.039 16.154 3.462 8.077-12.693 5.192-16.154 5.77-24.231 8.077-27.693 0-8.077 2.885-9.23 9.23-8.655 9.23-13.847 8.077-60.577 2.885-64.039-38.475 7.145-38.475 7.145z"
        fill="#575a88"
      />
      <circle cx={242.95} cy={474.639} r={12.692} fill="#ffb8b8" />
      <circle cx={271.796} cy={428.485} r={10.385} fill="#ffb8b8" />
      <path
        d="M251.604 474.639s6.923 12.692 10.385 12.692-13.847 13.27-13.847 13.27-5.769-16.731-6.923-17.308 10.385-8.654 10.385-8.654z"
        fill="#ffb8b8"
      />
      <path
        d="M253.912 486.177s-15 5.193-14.423 6.924-4.039 5.769-4.039 7.5-1.154 17.307 5.77 30 17.884 21.923 12.692 27.692-13.27 15.577-4.616 15.577 22.5-12.692 35.193-8.077 9.808-12.692 9.808-12.692 1.73-13.27-1.731-17.308-15.577-32.885-15.577-36.346-11.539-16.731-14.423-16.731-8.654 3.461-8.654 3.461z"
        fill="#8985a8"
      />
      <path
        d="M274.681 434.83s4.698 8.933 4.945 10.525 8.324-10.524 8.324-10.524l-9.23-6.346z"
        fill="#ffb8b8"
      />
      <path
        d="M276.412 441.754l9.808-10.385 11.538 5.193s10.761 23.654 11.439 25.384-17.208 9.808-18.939 9.808-13.846-17.884-13.846-17.884-2.885-8.654 0-12.116z"
        fill="#f2f2f2"
      />
      <path
        fill="#ffb8b8"
        d="M271.796 455.6v10.385h6.924l-2.277-10.385h-4.647z"
      />
      <path
        d="M275.747 463.389a4.303 4.303 0 00-4.065 2.732c-.45 1.22-.298 2.501 1.845 3.037 4.616 1.154 5.193 0 5.193 0s8.012-1.154 6.313-3.462-6.313-2.307-6.313-2.307z"
        fill="#ffb8b8"
      />
      <path
        d="M300.643 513.293s6.923 6.346 5.192 6.923-8.077 7.5-9.23 8.077c-1.033.516-12.116 4.039-10.385 0a15.174 15.174 0 015.769-6.346l1.154-6.923z"
        fill="#f2f2f2"
      />
      <path
        d="M238.428 464.869c.794-.465 1.732-1.045 1.754-1.965a1.74 1.74 0 00-1.14-1.528 5.106 5.106 0 00-1.994-.269 2.595 2.595 0 00-.77.077c-.658.202-1.036.87-1.554 1.323a6.49 6.49 0 01-2.753 1.101 18.026 18.026 0 00-4.615 1.912 2.164 2.164 0 00-.73.601 2.947 2.947 0 00-.294 1.494c-.13 1.957-1.304 3.66-2.18 5.416s-1.452 3.942-.423 5.613a19.107 19.107 0 011.14 1.62c.73 1.518-.18 3.388.347 4.988a4.363 4.363 0 001.104 1.656 8.777 8.777 0 003.635 2.201c1.311.404 2.938.673 3.451 1.945a10.34 10.34 0 00.487 1.688 2.674 2.674 0 001.895.951 8.1 8.1 0 002.456.178 3.047 3.047 0 002.118-1.134 6.194 6.194 0 01.858-1.265c.835-.698 2.104-.146 3.177-.331a2.324 2.324 0 001.82-1.71 3.235 3.235 0 01.37-1.306c.666-.852 2.42-.25 2.86-1.239.285-.642-.313-1.32-.891-1.72a25.32 25.32 0 01-2.842-1.929 3.309 3.309 0 01-1.207-3.048c.397-1.672 2.581-2.593 2.653-4.311a3.089 3.089 0 00-1.457-2.434 22.452 22.452 0 01-2.417-1.692c-.517-.5-.907-1.129-1.47-1.578a6.895 6.895 0 00-3.703-1.045c-.694-.071-3.465-.392-3.356-1.45.09-.88 2.966-2.397 3.67-2.81z"
        fill="#2f2e41"
      />
      <path
        d="M276.412 441.177s-6.346 2.308-6.346 5.192-2.885 12.116 0 12.116 8.654-2.215 8.654-2.215z"
        fill="#f2f2f2"
      />
      <path
        d="M274.681 482.716s16.731-5.77 17.308-5.77 8.654-4.615 8.077-6.346l-2.308-14.423s-9.23-19.038-2.884-19.038 9.807 15 9.807 15 13.847 25.961 6.347 31.73-38.655 16.155-40.385 14.424 4.038-15.577 4.038-15.577z"
        fill="#ffb8b8"
      />
      <path
        d="M290.835 445.216l3.894 3.752-5.048 4.901s-6.923-2.884-6.346-1.153 4.038 6.923 6.346 6.923 14.318-7.5 14.37-9.808-7.447-10.385-9.177-10.962-4.039 6.347-4.039 6.347z"
        fill="#ffb8b8"
      />
      <path
        d="M283.513 441.194s8.476 7.483 9.63 7.483 3.252-11.243 3.252-11.243-6.839-4.456-9.373-3.241-3.51 7.001-3.51 7.001z"
        fill="#f2f2f2"
      />
      <path
        d="M253.912 489.639s0-8.077 17.308-8.077h7.5l-3.462 19.039-11.538 3.461z"
        fill="#8985a8"
      />
      <path
        d="M291.718 424.276a44.8 44.8 0 01-5.075-.313c-1.322-3.197-3.007-5.88-4.83-6.88a18.273 18.273 0 00-4.854-2.663c-3.844-1.633-10.243-.614-10.617 1.243-7.564 3.614-5.653 9.962-5.653 9.962 1.176 2.484 3.812 1.383 6.05.258a4.42 4.42 0 003.852 3.402c3.693.139 5.485 1.686 4.594 3.724s-1.96 6.88 2.062 6.144 5.295.866 4.582 2.096 1.794-2.447 1.794-2.447 2.242 3.34 4.993 1.001a2.088 2.088 0 00.574-.982 4.136 4.136 0 002.868.503c3.296-1.475 1.249-4.937 1.249-4.937s4.4-.675 2.982-.563-2.315-1.726.084-5.038-2.432-4.435-4.655-4.51z"
        fill="#2f2e41"
      />
      <path
        fill={color}
        d="M267.757 421.133l1.643.546-1.64 4.927-1.642-.547z"
      />
      <path
        fill="#3f3d56"
        d="M104.706 703.602h287v2h-287zM721.706 609.602h287v2h-287z"
      />
      <path
        d="M933.416 429.993l16.128-3.147s3.933-13.375 8.654-11.801-3.147 14.948-3.147 14.948l-22.422 10.227zM835.469 443.367l-7.081 9.047s-10.227-.393-7.08 5.114 10.227 2.36 10.62 1.18 11.801-11.407 11.801-11.407z"
        fill="#a0616a"
      />
      <path
        d="M864.38 432.943l5.901-3.147s25.175-1.967 34.616 4.327-39.73 7.08-39.73 7.08z"
        fill={color}
      />
      <path
        d="M875.592 427.239s-3.147-7.474 1.18-8.26a19.42 19.42 0 017.474 0l-4.72 3.933z"
        fill="#3f3d56"
      />
      <path
        d="M875.592 427.239s-3.147-7.474 1.18-8.26a19.42 19.42 0 017.474 0l-4.72 3.933z"
        opacity={0.1}
      />
      <path
        d="M853.957 472.476l-11.408-.787 1.967 3.54s-15.735 4.72-10.62 18.095a172.851 172.851 0 0012.98 25.962l5.114 9.834s10.62 1.574 11.014-1.573 0-4.72-1.967-6.294a9.635 9.635 0 01-3.147-6.294c0-1.573.394-3.147-.786-3.934s-1.574-1.966-1.574-4.327-4.327-11.014-4.327-11.014 13.768-.393 18.095 3.147 18.488 16.915 18.488 16.915a11.917 11.917 0 011.967 2.753c.786 1.574.786 2.36 2.36 3.147s.393 3.934 0 4.327-4.327 16.128-4.327 16.128-4.327 7.474.393 7.867 9.048.787 9.44 0a21.385 21.385 0 011.574-3.147c1.18-1.966 0-6.293 0-6.293s11.408-14.555 7.868-23.602-11.015-29.502-11.015-29.502l-11.407-4.72-20.848-7.475z"
        fill="#2f2e41"
      />
      <path
        d="M853.17 527.153s-2.36 9.048-3.147 9.441-9.44 7.867-3.54 9.047 10.227.787 11.407-.393.787-2.36 2.754-2.754 5.507-1.573 5.114-4.327-2.36-10.227-3.54-11.014-9.048 0-9.048 0zM887.392 547.215s-3.54 2.753-1.573 7.867 4.72 10.62 4.72 10.62 3.147 9.835 8.261 8.261a5.577 5.577 0 003.617-4.226 10.108 10.108 0 00-1.428-8.225l-2.976-4.463-3.147-8.26z"
        fill="#2f2e41"
      />
      <path
        d="M877.558 431.566s-4.72-.393-5.507.787-4.327 16.914 0 18.488 17.308 4.327 19.275 2.36 2.754-19.275 2.754-19.275z"
        fill="#a0616a"
      />
      <path
        d="M877.558 431.566s-4.72-.393-5.507.787-4.327 16.914 0 18.488 17.308 4.327 19.275 2.36 2.754-19.275 2.754-19.275z"
        opacity={0.1}
      />
      <path
        d="M870.478 444.547s5.507 5.507 9.047 4.72 11.801-4.327 12.588-5.9 10.62-1.967 10.62-1.967l-10.62 29.502 7.474 24.782s4.327-5.114-7.474-5.507-27.536-6.294-30.29-14.16c0 0-17.307-2.361-18.094-2.754s1.967-2.754 1.967-2.754l11.408-3.147 8.26-10.62z"
        fill="#f2f2f2"
      />
      <path
        d="M874.018 432.353s1.967-2.754 0-2.754a75.795 75.795 0 00-9.44.394c-1.967.393-9.441-1.574-10.228.786s-.787 16.915.787 18.095 2.36 1.18.393 3.54-6.687 10.228-5.507 12.981-12.588 3.54-10.62 6.687a6.46 6.46 0 005.113 3.147s.787-6.293 5.507-3.147 11.014 11.015 16.128 5.9 7.08-9.833 7.474-16.52a55.677 55.677 0 00-.787-14.948c-.787-3.934 1.18-14.161 1.18-14.161zM894.473 439.827s3.147 2.753 0 9.44-11.407 22.422-4.72 32.65 9.44 12.98 7.867 14.947a7.641 7.641 0 00-1.573 4.327l4.327-1.573a49.504 49.504 0 012.36-9.44c1.573-3.934-3.147-15.735-3.147-15.735l1.573-15.342s6.294-9.834 7.08-10.227-1.573-17.308-1.573-17.308-3.933-1.18-5.9 0-6.294 8.26-6.294 8.26z"
        fill={color}
      />
      <path
        d="M856.71 431.173h-2.36l-16.128 8.26s-1.18-5.113-1.967-3.933-.393 4.327-2.36 5.113-3.147 1.967 0 3.54 3.54.394 3.54 3.148 2.36 3.146 4.327 2.36 2.36-1.18 4.327-.394.787 1.967 3.54.787 9.835-.787 9.835-.787zM903.914 432.353l2.753-.787s8.26.787 10.228.787 3.933-.394 5.113-.394 7.081-.786 7.868-1.573 4.327-2.754 4.72-1.573 4.72 8.654.787 12.194-4.72 1.967-7.08 3.54-21.242 4.72-21.636 4.327-2.753-16.521-2.753-16.521z"
        fill={color}
      />
      <circle cx={887.786} cy={435.5} r={11.801} fill="#a0616a" />
      <path
        d="M879.102 435.974a2.235 2.235 0 01.244.826 3.09 3.09 0 002.957 2.382 1.846 1.846 0 001.6 2.236 10.173 10.173 0 001.754-3.433 3.152 3.152 0 01.592-1.346 2.703 2.703 0 011.68-.632 88.324 88.324 0 019.465-.705 2.353 2.353 0 001.245-.254c.889-.573.592-1.955.03-2.852a8.924 8.924 0 00-4.759-3.714 22.525 22.525 0 00-4.383-.726 54.038 54.038 0 00-5.925-.615 9.697 9.697 0 00-5.665 1.515c-1.183.834-3.124 3.17-2.174 4.644.152.236.632.352.837.593.278.327.279.822.595 1.12.527.495 1.483.338 1.907.961z"
        fill="#2f2e41"
      />
      <path
        d="M887.786 415.832s-13.374 4.72-12.194 11.407 4.72 14.555 12.194 14.161 11.407-8.528 11.407-8.528l-1.966-11.14s-7.474-5.9-9.441-5.9z"
        fill="#3f3d56"
      />
      <path
        d="M886.098 439.437s5.258-5.705 7.905-2.397c0 0-.12-.164-7.905 2.397zM896.026 585.298c-7.051 0-15.776-2.336-24.277-10.779-20.813-20.67-40.586-22.744-40.784-22.762l.074-.784c.2.02 20.253 2.12 41.264 22.988 10.797 10.722 21.94 11.38 29.387 10.041a36.726 36.726 0 0013.768-5.548l.464.634a37.545 37.545 0 01-14.062 5.683 32.845 32.845 0 01-5.834.527z"
        fill="#2f2e41"
      />
      <circle cx={841.566} cy={563.539} r={4.72} fill="#2f2e41" />
      <circle cx={875.002} cy={585.568} r={4.72} fill="#2f2e41" />
    </svg>
  );
};

SvgSuburbs.propTypes = {
  color: PropTypes.string
};
SvgSuburbs.defaultProps = {
  color: "primary"
};
export default SvgSuburbs;
