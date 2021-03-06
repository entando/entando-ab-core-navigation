import { SyntheticEvent, useContext } from 'react';
import styled from 'styled-components';
import { SUBMENU_BACK_BUTTON_DATA_ID, SUBMENU_DATA_ID } from '../../constants';
import { BackButtonIcon } from '../Icons/BackButtonIcon';
import { MenuUIContext } from '../MenuUIContext';
import { COLORS } from '../theme';

const StyledSecondaryNavMenu = styled.div<{ isVisible: boolean }>`
  background: ${COLORS.active};
  border: 1px solid ${COLORS.primary};
  border-bottom: none;
  border-top: none;
  bottom: 0;
  display: block;
  left: 215px;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 60px;
  opacity: 0;
  visibility: hidden;
  ${({ isVisible }) => (isVisible ? `opacity: 1; visibility: visible;` : ``)}
  width: 215px;
  z-index: 1030;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.text};
  font-weight: 600;
  margin-top: 19px;
  margin-left: 28px;
`;

const StyledTitle = styled.span`
  margin-left: 14px;
`;

const StyledSecondaryListGroup = styled.ul`
  margin-top: 23px;
  padding-left: 24px;
  padding-right: 0px;
`;

const StyledBackButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface Props {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
}

export function SecondaryMenu(props: Props): JSX.Element {
  const { isOpen, title, children } = props;

  const {
    setSecondaryMenuOpen,
    setTertiaryMenuOpen,
    setActiveSecondaryMenuItemId,
    setActiveTertiaryMenuItemId
  } = useContext(MenuUIContext);

  const handleBack = (e: SyntheticEvent) => {
    e.stopPropagation();

    setSecondaryMenuOpen(false);
    setTertiaryMenuOpen(false);
    setActiveSecondaryMenuItemId('');
    setActiveTertiaryMenuItemId('');
  };

  return (
    <StyledSecondaryNavMenu isVisible={isOpen} data-id={SUBMENU_DATA_ID}>
      <StyledHeader>
        <StyledBackButton onClick={handleBack} data-back={SUBMENU_BACK_BUTTON_DATA_ID}>
          <BackButtonIcon />
        </StyledBackButton>
        <StyledTitle>{title}</StyledTitle>
      </StyledHeader>
      <StyledSecondaryListGroup>{children}</StyledSecondaryListGroup>
    </StyledSecondaryNavMenu>
  );
}
