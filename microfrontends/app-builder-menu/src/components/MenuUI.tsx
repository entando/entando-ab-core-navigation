import styled from 'styled-components';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroup/ListGroupItem';
import PagesIcon from './Icons/PagesIcon';
import DashboardIcon from './Icons/DashboardIcon';
import ComponentsIcon from './Icons/ComponentsIcon';
import ContentIcon from './Icons/ContentIcon';
import UsersIcon from './Icons/UsersIcon';
import RepositoryIcon from './Icons/RepositoryIcon';
import PBCsIcon from './Icons/PBCsIcon';
import AdministrationIcon from './Icons/AdministrationIcon';
import SecondaryMenuItem from './ListGroup/SecondaryMenu/SecondaryMenuItem';
import TertiaryMenuItem from './ListGroup/SecondaryMenu/TertiaryMenu/TertiaryMenuItem';
import { useState } from 'react';
import MenuUIContext, { MenuUIContextInterface } from './MenuUIContext';

const MenuCmp = styled.menu`
  height: 100%;
  background: #292e34;
  border-right: 1px solid #292e34;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  width: 200px;
  z-index: 1030;
`;

interface Props {}

export default function MenuUI(props: Props): JSX.Element {
  const [activeListGroupItemId, setActiveListGroupItemId] = useState('');
  const [activeSecondaryMenuItemId, setActiveSecondaryMenuItemId] =
    useState('');
  const [activeTertiaryMenuItemId, setActiveTertiaryMenuItemId] = useState('');
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const [tertiaryMenuOpen, setTertiaryMenuOpen] = useState(false);

  const menuUIContext: MenuUIContextInterface = {
    activeListGroupItemId,
    activeSecondaryMenuItemId,
    activeTertiaryMenuItemId,
    setActiveListGroupItemId,
    setActiveSecondaryMenuItemId,
    setActiveTertiaryMenuItemId,
    secondaryMenuOpen,
    setSecondaryMenuOpen,
    tertiaryMenuOpen,
    setTertiaryMenuOpen
  };

  return (
    <MenuUIContext.Provider value={menuUIContext}>
      <MenuCmp>
        <ListGroup>
          <ListGroupItem
            id="dashboard"
            label="Dashboard"
            renderIcon={props => <DashboardIcon {...props} />}
          />
          <ListGroupItem
            id="pages"
            label="Pages"
            renderIcon={props => <PagesIcon {...props} />}
          >
            <SecondaryMenuItem id="pages-management" label="Management">
              <TertiaryMenuItem id="pages-management-remove" label="Remove" />
            </SecondaryMenuItem>
            <SecondaryMenuItem id="pages-designer" label="Designer" />
            <SecondaryMenuItem id="pages-templates" label="Templates" />
            <SecondaryMenuItem id="pages-settings" label="Settings" />
          </ListGroupItem>
          <ListGroupItem
            id="components"
            label="Components"
            renderIcon={props => <ComponentsIcon {...props} />}
          >
            <SecondaryMenuItem id="components-widgets" label="MFE & Widgets" />
            <SecondaryMenuItem id="components-fragments" label="UX Fragments" />
          </ListGroupItem>
          <ListGroupItem
            id="content"
            label="Content"
            renderIcon={props => <ContentIcon {...props} />}
          >
            <SecondaryMenuItem id="content-management" label="Management" />
            <SecondaryMenuItem id="content-assets" label="Assets" />
            <SecondaryMenuItem id="content-templates" label="Templates" />
            <SecondaryMenuItem id="content-categories" label="Categories" />
            <SecondaryMenuItem id="content-versioning" label="Versioning" />
            <SecondaryMenuItem id="content-types" label="Types" />
            <SecondaryMenuItem id="content-settings" label="Settings" />
          </ListGroupItem>
          <ListGroupItem
            id="users"
            label="Users"
            renderIcon={props => <UsersIcon {...props} />}
          >
            <SecondaryMenuItem id="users-management" label="Management" />
            <SecondaryMenuItem id="users-roles" label="Roles" />
            <SecondaryMenuItem id="users-groups" label="Groups" />
            <SecondaryMenuItem id="users-profileTypes" label="Profile types" />
            <SecondaryMenuItem id="users-restrictions" label="Restrictions" />
          </ListGroupItem>
          <ListGroupItem
            id="repository"
            label="Repository"
            renderIcon={props => <RepositoryIcon {...props} />}
          />
          <ListGroupItem
            id="pbcs"
            label="PBC's"
            renderIcon={props => <PBCsIcon {...props} />}
          />
          <ListGroupItem
            id="administration"
            label="Administration"
            renderIcon={props => <AdministrationIcon {...props} />}
            fixBottom
          >
            <SecondaryMenuItem id="administration-database" label="Database" />
            <SecondaryMenuItem
              id="administration-fileBrowser"
              label="File browser"
            />
            <SecondaryMenuItem
              id="administration-languagesAndLabels"
              label="Languages & Labels"
            />
            <SecondaryMenuItem
              id="administration-emailConfiguration"
              label="Email Configuration"
            />
            <SecondaryMenuItem
              id="administration-reloadConfiguration"
              label="Reload configuration"
            />
          </ListGroupItem>
        </ListGroup>
      </MenuCmp>
    </MenuUIContext.Provider>
  );
}
