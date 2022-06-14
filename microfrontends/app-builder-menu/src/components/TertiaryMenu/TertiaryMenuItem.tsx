import { useContext } from 'react';
import styled from 'styled-components';
import { EpcData } from './../../types/api';
import { MenuUIContext } from './../MenuUIContext';
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

interface Props {
  id: string;
  label: string;
  onClick?: () => void;
  href?: string;
  epcData?: EpcData;
  className?: string;
  target?: string;
  rel?: string;
}

export function TertiaryMenuItem(props: Props): JSX.Element {
  const {
    id,
    label,
    onClick,
    href,
    className = '',
    rel = '',
    target = '',
    epcData
  } = props;

  const { activeTertiaryMenuItemId, setActiveTertiaryMenuItemId } =
    useContext(MenuUIContext);

  const isActive = activeTertiaryMenuItemId === id;

  const handleClick = (): void => {
    setActiveTertiaryMenuItemId(id);
    onClick && onClick();
  };

  return (
    <StyledLink
      isActive={isActive}
      onClick={handleClick}
      href={href}
      className={className}
      rel={rel}
      target={target}
      {...epcData}
    >
      <StyledLabel>{label}</StyledLabel>
    </StyledLink>
  );
}
