import styled from 'styled-components';
import { COLORS } from './../theme';

const StyledSecondaryTertiaryMenu = styled.div<{ isVisible: boolean }>`
  background: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  border-bottom: none;
  border-top: none;
  bottom: 0;
  display: block;
  left: 430px;
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

const StyledSecondaryListGroup = styled.ul`
  margin-top: 25px;
  padding-left: 22px;
  padding-right: 0px;
`;

interface Props {
  isOpen: boolean;
  children?: React.ReactNode;
}

export function TertiaryMenu(props: Props): JSX.Element {
  const { isOpen, children } = props;
  return (
    <StyledSecondaryTertiaryMenu isVisible={isOpen} data-id="menu">
      <StyledSecondaryListGroup>{children}</StyledSecondaryListGroup>
    </StyledSecondaryTertiaryMenu>
  );
}
