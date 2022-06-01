import styled from 'styled-components';

const StyledLink = styled.a<{ isActive: boolean }>`
  width: 100%;
  background-color: transparent;
  background-color: ${({ isActive }) => (isActive ? '#4D5257' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#d1d1d1')};
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  line-height: 26px;
  padding: 5px 10px 5px 8px;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  margin-top: 4px;

  &:hover {
    font-weight: 600;
    color: #fff;
    background-color: #4d5257;
  }
`;

const StyledLabel = styled.span`
  display: block;
  flex: 1;
  max-width: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface Props {
  isActive: boolean;
}

export default function TertiaryMenuItem(props: Props): JSX.Element {
  const { isActive } = props;
  return (
    <StyledLink isActive={isActive}>
      <StyledLabel>Dashboard</StyledLabel>
    </StyledLink>
  );
}
