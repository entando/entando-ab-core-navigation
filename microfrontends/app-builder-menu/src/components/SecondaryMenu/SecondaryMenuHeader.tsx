import styled from 'styled-components';
import { COLORS } from './../theme';

const StyledHeader = styled.li`
  display: flex;
  padding: 5px 10px 5px 8px;
  margin-top: 4px;
  position: relative;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    right: 10px;
    height: 1px;
    background-color: ${COLORS.secondary};
  }

  &:first-child {
    margin-top: 0;

    &::before {
      display: none;
    }
  }
`;

const StyledLabel = styled.span`
  color: ${COLORS.white};
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  line-height: 26px;
`;

interface Props {
  label: string;
}

export function SecondaryMenuHeader({ label }: Props): JSX.Element {
  return (
    <StyledHeader>
      <StyledLabel>{label}</StyledLabel>
    </StyledHeader>
  );
}