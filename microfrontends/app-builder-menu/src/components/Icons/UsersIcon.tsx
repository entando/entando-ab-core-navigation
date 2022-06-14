import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

export function UsersIcon(props: Props): JSX.Element {
  const { width = 18, height = 18, fill = COLORS.inactive } = props;
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0388 10.1569C14.8425 9.10146 15.3281 7.77252 15.3281 6.32812C15.3281 2.83328 12.495 0 9 0C5.50515 0 2.67188 2.8331 2.67188 6.32812C2.67188 7.7721 3.15724 9.10118 3.9612 10.1569C1.7588 10.4181 0 12.2924 0 14.625V15.627C0 16.9355 1.06453 18 2.37305 18H15.627C16.9355 18 18 16.9355 18 15.627V14.625C18 12.2915 16.2404 10.418 14.0388 10.1569ZM9 1.6875C11.563 1.6875 13.6406 3.76516 13.6406 6.32812C13.6406 8.89109 11.563 10.9688 9 10.9688C6.43704 10.9688 4.35938 8.89109 4.35938 6.32812C4.35938 3.76516 6.43704 1.6875 9 1.6875ZM15.627 16.3125C16.0056 16.3125 16.3125 16.0056 16.3125 15.627V14.625C16.3125 13.0717 15.0533 11.8125 13.5 11.8125H12.1591C10.2011 12.9406 7.79154 12.9364 5.84086 11.8125H4.5C2.94669 11.8125 1.6875 13.0717 1.6875 14.625V15.627C1.6875 16.0056 1.99441 16.3125 2.37305 16.3125H15.627Z"
        fill="black"
      />
      <mask
        id="mask0_277_1655"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0388 10.1569C14.8425 9.10146 15.3281 7.77252 15.3281 6.32812C15.3281 2.83328 12.495 0 9 0C5.50515 0 2.67188 2.8331 2.67188 6.32812C2.67188 7.7721 3.15724 9.10118 3.9612 10.1569C1.7588 10.4181 0 12.2924 0 14.625V15.627C0 16.9355 1.06453 18 2.37305 18H15.627C16.9355 18 18 16.9355 18 15.627V14.625C18 12.2915 16.2404 10.418 14.0388 10.1569ZM9 1.6875C11.563 1.6875 13.6406 3.76516 13.6406 6.32812C13.6406 8.89109 11.563 10.9688 9 10.9688C6.43704 10.9688 4.35938 8.89109 4.35938 6.32812C4.35938 3.76516 6.43704 1.6875 9 1.6875ZM15.627 16.3125C16.0056 16.3125 16.3125 16.0056 16.3125 15.627V14.625C16.3125 13.0717 15.0533 11.8125 13.5 11.8125H12.1591C10.2011 12.9406 7.79154 12.9364 5.84086 11.8125H4.5C2.94669 11.8125 1.6875 13.0717 1.6875 14.625V15.627C1.6875 16.0056 1.99441 16.3125 2.37305 16.3125H15.627Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_277_1655)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H18V18H0V0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
