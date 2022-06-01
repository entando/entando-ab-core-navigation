import styled from 'styled-components';
import TertiaryMenuItem from './TertiaryMenuItem';

const StyledSecondaryTertiaryMenu = styled.div<{ isVisible: boolean }>`
  background: #292e34;
  border: 1px solid #292e34;
  border-bottom: none;
  border-top: none;
  bottom: 0;
  display: block;
  left: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 60px;
  opacity: 0;
  visibility: hidden;
  ${({ isVisible }) => (isVisible ? `opacity: 1; visibility: visible;` : ``)}
  width: 200px;
  z-index: 1030;
`;

const StyledSecondaryListGroup = styled.ul`
  margin-top: 25px;
  padding-left: 22px;
  padding-right: 0px;
`;

interface Props {
  isOpen: boolean;
}

export default function TertiaryMenu(props: Props): JSX.Element {
  const { isOpen } = props;
  return (
    <StyledSecondaryTertiaryMenu isVisible={isOpen}>
      <StyledSecondaryListGroup>
        <TertiaryMenuItem isActive />
        <TertiaryMenuItem isActive={false} />
      </StyledSecondaryListGroup>
    </StyledSecondaryTertiaryMenu>
  );
}
