import { COLORS } from '../theme';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
}

export function RepositoryIcon(props: Props): JSX.Element {
  const { width = 20, height = 20, fill = COLORS.inactive } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      id="footer-sample-full"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1664 1408"
      className="iconify iconify--fa"
    >
      <path
        fill={fill}
        d="M1216 448q0-26-19-45t-45-19h-128V256q0-26-19-45t-45-19t-45 19t-19 45v128H768q-26 0-45 19t-19 45t19 45t45 19h128v128q0 26 19 45t45 19t45-19t19-45V512h128q26 0 45-19t19-45zm-576 832q0 53-37.5 90.5T512 1408t-90.5-37.5T384 1280t37.5-90.5T512 1152t90.5 37.5T640 1280zm896 0q0 53-37.5 90.5T1408 1408t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5zm128-1088v512q0 24-16 42.5t-41 21.5L563 890q1 7 4.5 21.5t6 26.5t2.5 22q0 16-24 64h920q26 0 45 19t19 45t-19 45t-45 19H448q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5t20.5-38L268 128H64q-26 0-45-19T0 64t19-45T64 0h256q16 0 28.5 6.5t20 15.5t13 24.5T389 73t5.5 29.5T399 128h1201q26 0 45 19t19 45z"
      ></path>
    </svg>
  );
}
