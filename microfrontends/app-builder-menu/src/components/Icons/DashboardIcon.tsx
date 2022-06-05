import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

function DashboardIcon(props: Props): JSX.Element {
  const { width = 20, height = 20, fill = COLORS.inactive } = props;
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
        d="M1.875 1.25H18.125C19.1602 1.25 20 2.08984 20 3.125V16.875C20 17.9102 19.1602 18.75 18.125 18.75H1.875C0.839844 18.75 0 17.9102 0 16.875V3.125C0 2.08984 0.839844 1.25 1.875 1.25ZM17.8906 16.875C18.0195 16.875 18.125 16.7695 18.125 16.6406V7.5H1.875V16.6406C1.875 16.7695 1.98047 16.875 2.10938 16.875H17.8906Z"
        fill="black"
      />
      <mask
        id="mask0_277_1709"
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="20"
        height="18"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.875 1.25H18.125C19.1602 1.25 20 2.08984 20 3.125V16.875C20 17.9102 19.1602 18.75 18.125 18.75H1.875C0.839844 18.75 0 17.9102 0 16.875V3.125C0 2.08984 0.839844 1.25 1.875 1.25ZM17.8906 16.875C18.0195 16.875 18.125 16.7695 18.125 16.6406V7.5H1.875V16.6406C1.875 16.7695 1.98047 16.875 2.10938 16.875H17.8906Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_277_1709)">
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

export default DashboardIcon;
