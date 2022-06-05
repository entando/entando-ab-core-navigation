import { useContext } from 'react';
import styled from 'styled-components';
import RightArrowIcon from '../../Icons/RightArrowIcon';
import MenuUIContext from '../../MenuUIContext';
import TertiaryMenu from './TertiaryMenu';
import { COLORS } from '../../theme';
import { EPC_DATA } from '../../../types/api';

const StyledLink = styled.a<{ isActive: boolean }>`
  width: 100%;
  background-color: transparent;
  background-color: ${({ isActive }) =>
    isActive ? COLORS.secondary : 'transparent'};
  color: ${({ isActive }) => (isActive ? COLORS.white : COLORS.text)};
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
  children?: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  epcData?: EPC_DATA;
}

export default function SecondaryMenuItem(props: Props): JSX.Element {
  const { id, children, label, onClick, href, epcData } = props;

  const {
    activeSecondaryMenuItemId,
    setActiveSecondaryMenuItemId,
    tertiaryMenuOpen,
    setTertiaryMenuOpen
  } = useContext(MenuUIContext);

  const hasChildren = !!children;
  const isActive = activeSecondaryMenuItemId === id;

  const handleClick = (): void => {
    setActiveSecondaryMenuItemId(id);
    if (hasChildren) {
      setTertiaryMenuOpen(true);
    } else {
      onClick && onClick();
    }
  };

  return (
    <>
      <StyledSecondaryMenuItem onClick={handleClick} {...epcData}>
        <StyledLink isActive={isActive} href={href}>
          <StyledLabel>{label}</StyledLabel>
          {hasChildren && <RightArrowIcon />}
        </StyledLink>
      </StyledSecondaryMenuItem>
      <TertiaryMenu isOpen={hasChildren && isActive && tertiaryMenuOpen}>
        {children}
      </TertiaryMenu>
    </>
  );
}
