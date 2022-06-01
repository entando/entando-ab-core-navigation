import styled from 'styled-components';
import RightArrowIcon from '../../Icons/RightArrowIcon';
import TertiaryMenu from './TertiaryMenu';

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

const StyledSecondaryMenuItem = styled.li`
  display: flex;
`;

interface Props {
  isActive: boolean;
  hasChildren: boolean;
}

export default function SecondaryMenuItem(props: Props): JSX.Element {
  const { isActive, hasChildren } = props;
  return (
    <StyledSecondaryMenuItem>
      <StyledLink isActive={isActive}>
        <StyledLabel>Dashboard</StyledLabel>
        {hasChildren && <RightArrowIcon />}
      </StyledLink>
      <TertiaryMenu isOpen />
    </StyledSecondaryMenuItem>
  );
}
