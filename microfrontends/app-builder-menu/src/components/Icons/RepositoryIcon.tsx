interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

function RepositoryIcon(props: Props): JSX.Element {
  const { width = 20, height = 20, fill = '#72767B' } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.875 1.25H18.125C19.1605 1.25 20 2.08945 20 3.125V16.875C20 17.9105 19.1605 18.75 18.125 18.75H1.875C0.839453 18.75 0 17.9105 0 16.875V3.125C0 2.08945 0.839453 1.25 1.875 1.25ZM2.10938 16.875H17.8906C18.0201 16.875 18.125 16.7701 18.125 16.6406V3.35938C18.125 3.22993 18.0201 3.125 17.8906 3.125H2.10938C1.97993 3.125 1.875 3.22993 1.875 3.35938V16.6406C1.875 16.7701 1.97993 16.875 2.10938 16.875ZM16.25 13.2812V14.2188C16.25 14.4776 16.0401 14.6875 15.7812 14.6875H7.96875C7.70988 14.6875 7.5 14.4776 7.5 14.2188V13.2812C7.5 13.0224 7.70988 12.8125 7.96875 12.8125H15.7812C16.0401 12.8125 16.25 13.0224 16.25 13.2812ZM16.25 10.4688V9.53125C16.25 9.27238 16.0401 9.0625 15.7812 9.0625H7.96875C7.70988 9.0625 7.5 9.27238 7.5 9.53125V10.4688C7.5 10.7276 7.70988 10.9375 7.96875 10.9375H15.7812C16.0401 10.9375 16.25 10.7276 16.25 10.4688ZM16.25 5.78125V6.71875C16.25 6.97762 16.0401 7.1875 15.7812 7.1875H7.96875C7.70988 7.1875 7.5 6.97762 7.5 6.71875V5.78125C7.5 5.52238 7.70988 5.3125 7.96875 5.3125H15.7812C16.0401 5.3125 16.25 5.52238 16.25 5.78125ZM5 7.65625C5.77664 7.65625 6.40625 7.02664 6.40625 6.25C6.40625 5.47336 5.77664 4.84375 5 4.84375C4.22336 4.84375 3.59375 5.47336 3.59375 6.25C3.59375 7.02664 4.22336 7.65625 5 7.65625ZM6.40625 10C6.40625 10.7766 5.77664 11.4062 5 11.4062C4.22336 11.4062 3.59375 10.7766 3.59375 10C3.59375 9.22336 4.22336 8.59375 5 8.59375C5.77664 8.59375 6.40625 9.22336 6.40625 10ZM5 15.1562C5.77664 15.1562 6.40625 14.5266 6.40625 13.75C6.40625 12.9734 5.77664 12.3438 5 12.3438C4.22336 12.3438 3.59375 12.9734 3.59375 13.75C3.59375 14.5266 4.22336 15.1562 5 15.1562Z"
        fill="black"
      />
      <mask
        id="mask0_277_1688"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="20"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.875 1.25H18.125C19.1605 1.25 20 2.08945 20 3.125V16.875C20 17.9105 19.1605 18.75 18.125 18.75H1.875C0.839453 18.75 0 17.9105 0 16.875V3.125C0 2.08945 0.839453 1.25 1.875 1.25ZM2.10938 16.875H17.8906C18.0201 16.875 18.125 16.7701 18.125 16.6406V3.35938C18.125 3.22993 18.0201 3.125 17.8906 3.125H2.10938C1.97993 3.125 1.875 3.22993 1.875 3.35938V16.6406C1.875 16.7701 1.97993 16.875 2.10938 16.875ZM16.25 13.2812V14.2188C16.25 14.4776 16.0401 14.6875 15.7812 14.6875H7.96875C7.70988 14.6875 7.5 14.4776 7.5 14.2188V13.2812C7.5 13.0224 7.70988 12.8125 7.96875 12.8125H15.7812C16.0401 12.8125 16.25 13.0224 16.25 13.2812ZM16.25 10.4688V9.53125C16.25 9.27238 16.0401 9.0625 15.7812 9.0625H7.96875C7.70988 9.0625 7.5 9.27238 7.5 9.53125V10.4688C7.5 10.7276 7.70988 10.9375 7.96875 10.9375H15.7812C16.0401 10.9375 16.25 10.7276 16.25 10.4688ZM16.25 5.78125V6.71875C16.25 6.97762 16.0401 7.1875 15.7812 7.1875H7.96875C7.70988 7.1875 7.5 6.97762 7.5 6.71875V5.78125C7.5 5.52238 7.70988 5.3125 7.96875 5.3125H15.7812C16.0401 5.3125 16.25 5.52238 16.25 5.78125ZM5 7.65625C5.77664 7.65625 6.40625 7.02664 6.40625 6.25C6.40625 5.47336 5.77664 4.84375 5 4.84375C4.22336 4.84375 3.59375 5.47336 3.59375 6.25C3.59375 7.02664 4.22336 7.65625 5 7.65625ZM6.40625 10C6.40625 10.7766 5.77664 11.4062 5 11.4062C4.22336 11.4062 3.59375 10.7766 3.59375 10C3.59375 9.22336 4.22336 8.59375 5 8.59375C5.77664 8.59375 6.40625 9.22336 6.40625 10ZM5 15.1562C5.77664 15.1562 6.40625 14.5266 6.40625 13.75C6.40625 12.9734 5.77664 12.3438 5 12.3438C4.22336 12.3438 3.59375 12.9734 3.59375 13.75C3.59375 14.5266 4.22336 15.1562 5 15.1562Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_277_1688)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H20V20H0V0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RepositoryIcon;
