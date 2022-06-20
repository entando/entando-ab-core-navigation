import { useContext } from 'react';
import styled from 'styled-components';
import { RightArrowIcon } from '../Icons/RightArrowIcon';
import { MenuUIContext } from '../MenuUIContext';
import { SecondaryMenu } from '../SecondaryMenu/SecondaryMenu';
import { COLORS } from '../theme';

interface ListGroupItemProps {
  fixBottom?: boolean;
  isActive?: boolean;
}

const StyledListGroupItem = styled.li<ListGroupItemProps>`
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  border: 1px solid ${COLORS.border};
  border-left: 0;
  border-right: 0;
  background-color: transparent;
  padding: 0;
  color: ${({ isActive }) => (isActive ? COLORS.white : '')};
  ${({ fixBottom }) =>
    fixBottom
      ? `
  position: fixed;
  bottom: 64px;
  left: 0;
  `
      : ''}

  &:first-child {
    border-top: 0px;
  }
`;

interface StyledLinkProps {
  isActive: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  width: 215px;
  background-color: ${({ isActive }) =>
    isActive ? COLORS.active : 'transparent'};
  color: ${({ isActive }) => (isActive ? COLORS.white : COLORS.text)};
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
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
    background: ${COLORS.blue};
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
    color: ${COLORS.white};
    background-color: ${COLORS.active};
    &:before {
      background: ${COLORS.blue};
      content: ' ';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 3px;
    }

    span > svg > path {
      fill: ${COLORS.blue};
    }
    span > svg > g > path {
      fill: ${COLORS.blue};
    }
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${COLORS.inactive};
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
  id: string;
  fixBottom?: boolean;
  label: string;
  renderIcon: ({ fill }: { fill?: string }) => React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function ListGroupItem(props: Props): JSX.Element {
  const {
    label,
    renderIcon,
    fixBottom,
    children,
    id,
    onClick,
    href,
    className = ''
  } = props;

  const {
    activeListGroupItemId,
    setActiveListGroupItemId,
    setSecondaryMenuOpen,
    secondaryMenuOpen,
    setActiveTertiaryMenuItemId,
    setActiveSecondaryMenuItemId
  } = useContext(MenuUIContext);

  const isActive = activeListGroupItemId === id;
  const hasChildren = !!children;

  const onClickHandler = () => {
    setActiveListGroupItemId(id);
    if (hasChildren) {
      setSecondaryMenuOpen(true);
      setActiveTertiaryMenuItemId('');
      setActiveSecondaryMenuItemId('');
    } else {
      onClick && onClick();
    }
  };

  return (
    <>
      <StyledListGroupItem
        isActive={isActive}
        fixBottom={fixBottom}
        onClick={onClickHandler}
        className={className}
      >
        <StyledLink isActive={isActive} href={href}>
          <StyledIcon>
            {renderIcon({ fill: isActive ? COLORS.blue : COLORS.inactive })}
          </StyledIcon>
          <StyledLabel>{label}</StyledLabel>
          {hasChildren && (
            <StyledIcon>
              <RightArrowIcon />{' '}
            </StyledIcon>
          )}
        </StyledLink>
      </StyledListGroupItem>
      {hasChildren && isActive && secondaryMenuOpen && (
        <SecondaryMenu isOpen title={label}>
          {children}
        </SecondaryMenu>
      )}
    </>
  );
}
