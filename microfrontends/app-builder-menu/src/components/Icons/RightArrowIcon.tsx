import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

export function RightArrowIcon(props: Props): JSX.Element {
  const { width = 20, height = 20, fill = COLORS.darkGrey } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
