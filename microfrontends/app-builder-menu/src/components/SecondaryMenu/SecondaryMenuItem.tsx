import { SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';
import { RightArrowIcon } from './../Icons/RightArrowIcon';
import { MenuUIContext } from './../MenuUIContext';
import { TertiaryMenu } from '../TertiaryMenu/TertiaryMenu';
import { COLORS } from './../theme';

const StyledLink = styled.a<{ isActive: boolean }>`
  width: 100%;
  background-color: transparent;
  background-color: ${({ isActive }) =>
    isActive ? COLORS.secondary : 'transparent'};
  color: ${({ isActive }) => (isActive ? COLORS.white : COLORS.text)};
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
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
    color: ${COLORS.white};
    background-color: ${COLORS.secondary};
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
  id: string;
  dataId: string;
  children?: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function SecondaryMenuItem(props: Props): JSX.Element {
  const {
    id,
    dataId,
    children,
    label,
    onClick,
    href,
    className = '',
  } = props;

  const {
    activeSecondaryMenuItemId,
    setActiveSecondaryMenuItemId,
    tertiaryMenuOpen,
    setTertiaryMenuOpen
  } = useContext(MenuUIContext);

  const hasChildren = !!children;
  const isActive = activeSecondaryMenuItemId === id;

  const handleClick = (e: SyntheticEvent): void => {
    e.stopPropagation()

    setActiveSecondaryMenuItemId(id);
    if (hasChildren) {
      setTertiaryMenuOpen(true);
    } else {
      onClick && onClick();
    }
  };

  return (
    <>
      <StyledSecondaryMenuItem
        onClick={handleClick}
        className={className}
        data-id={dataId}
      >
        <StyledLink isActive={isActive} href={href}>
          <StyledLabel>{label}</StyledLabel>
          {hasChildren && <RightArrowIcon />}
        </StyledLink>
        {hasChildren && isActive && tertiaryMenuOpen && (
          <TertiaryMenu isOpen>{children}</TertiaryMenu>
        )}
      </StyledSecondaryMenuItem>
    </>
  );
}
