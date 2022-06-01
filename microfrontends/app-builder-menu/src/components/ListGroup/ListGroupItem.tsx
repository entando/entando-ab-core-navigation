import styled from 'styled-components';
import RightArrowIcon from '../Icons/RightArrowIcon';
import SecondaryMenu from './SecondaryMenu';

interface ListGroupItemProps {
  fixBottom?: boolean;
  isActive?: boolean;
}

const StyledListGroupItem = styled.li<ListGroupItemProps>`
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  border: 1px solid #030303;
  border-left: 0;
  border-right: 0;
  background-color: transparent;
  padding: 0;
  color: ${({ isActive }) => (isActive ? '#fff' : '')};
  ${({ fixBottom }) =>
    fixBottom
      ? `
  position: fixed;
  bottom: 64px;
  left: 0;
  `
      : ''}
`;

interface StyledLinkProps {
  isActive: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  width: 200px;
  background-color: ${({ isActive }) => (isActive ? '#393f44' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#d1d1d1')};
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  height: 63px;
  line-height: 26px;
  padding: 17px 20px 17px 25px;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  padding-right: 0;
  ${({ isActive }) =>
    isActive
      ? `
  &:before {
    background: #39a5dc;
    content: " ";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 3px;
  }
  `
      : ''}

  &:hover {
    font-weight: 600;
    color: #fff;
    background-color: #393f44;
    &:before {
      background: #39a5dc;
      content: ' ';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 3px;
    }

    span > svg > path {
      fill: #39a5dc;
    }
    span > svg > g > path {
      fill: #39a5dc;
    }
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: #72767b;
  float: left;
  font-size: 20px;
  line-height: 26px;
  margin-right: 10px;
  text-align: center;
  width: 24px;
`;

export const StyledLabel = styled.span`
  display: flex;
  line-height: 25px;
  flex: 1;
  max-width: none;
  padding-right: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

interface Props {
  isActive: boolean;
  fixBottom?: boolean;
  hasChildren: boolean;
  label: string;
  renderIcon: ({ fill }: { fill?: string }) => React.ReactNode;
}

export default function ListGroupItem(props: Props): JSX.Element {
  const { isActive, hasChildren, label, renderIcon, fixBottom } = props;
  return (
    <StyledListGroupItem isActive={isActive} fixBottom={fixBottom}>
      <StyledLink isActive={isActive}>
        <StyledIcon>
          {renderIcon({ fill: isActive ? '#39a5dc' : '#72767b' })}
        </StyledIcon>
        <StyledLabel>{label}</StyledLabel>
        {hasChildren && (
          <StyledIcon>
            <RightArrowIcon />{' '}
          </StyledIcon>
        )}
      </StyledLink>
      <SecondaryMenu isOpen title={label} />
    </StyledListGroupItem>
  );
}
