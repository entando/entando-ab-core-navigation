import styled from 'styled-components';
import BackButtonIcon from '../../Icons/BackButtonIcon';
import SecondaryMenuItem from './SecondaryMenuItem';

const StyledSecondaryNavMenu = styled.div<{ isVisible: boolean }>`
  background: #393f44;
  border: 1px solid #292e34;
  border-bottom: none;
  border-top: none;
  bottom: 0;
  display: block;
  left: 200px;
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

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  color: #d1d1d1;
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
}

export default function SecondaryMenu(props: Props): JSX.Element {
  const { isOpen, title } = props;
  return (
    <StyledSecondaryNavMenu isVisible={isOpen}>
      <StyledHeader>
        <StyledBackButton>
          <BackButtonIcon />
        </StyledBackButton>
        <StyledTitle>{title}</StyledTitle>
      </StyledHeader>
      <StyledSecondaryListGroup>
        <SecondaryMenuItem hasChildren isActive />
        <SecondaryMenuItem hasChildren={false} isActive={false} />
      </StyledSecondaryListGroup>
    </StyledSecondaryNavMenu>
  );
}
