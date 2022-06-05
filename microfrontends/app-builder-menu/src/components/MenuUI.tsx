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
import {
  CRUD_CONTENTS_PERMISSION,
  CRUD_USERS_PERMISSION,
  EDIT_USER_PROFILES_PERMISSION,
  ENTER_ECR_PERMISSION,
  hasAccess,
  MANAGE_CATEGORIES_PERMISSION,
  MANAGE_PAGES_PERMISSION,
  MANAGE_RESOURCES_PERMISSION,
  SUPERUSER_PERMISSION,
  VALIDATE_CONTENTS_PERMISSION,
  VIEW_USERS_AND_PROFILES_PERMISSION
} from '../utils/permissions';
import { convertToAdminConsoleUrl } from '../utils/links';
import { COLORS } from './theme';

const MenuCmp = styled.menu`
  height: 100%;
  background: ${COLORS.primary};
  border-right: 1px solid ${COLORS.primary};
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0px;
  width: 200px;
  z-index: 1030;
`;

export interface MfeConfig {
  api: {
    url: string;
  };
  userPermissions: string[];
  lang: string;
}

interface Props {
  config: MfeConfig;
}

export default function MenuUI(props: Props): JSX.Element {
  const { config } = props;
  const { userPermissions } = config;
  const [activeListGroupItemId, setActiveListGroupItemId] = useState('');
  const [activeSecondaryMenuItemId, setActiveSecondaryMenuItemId] =
    useState('');
  const [activeTertiaryMenuItemId, setActiveTertiaryMenuItemId] = useState('');
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const [tertiaryMenuOpen, setTertiaryMenuOpen] = useState(false);

  // @TODO take it from config probably
  const contentSchedulerPluginInstalled = true;
  const adminConsoleUrl = 'https://admin.pbc.io';

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

  const cmsHasMenuContentsAccess = hasAccess(
    [CRUD_CONTENTS_PERMISSION, VALIDATE_CONTENTS_PERMISSION],
    userPermissions
  );
  const cmsHasMenuAssetsAccess = hasAccess(
    [
      CRUD_CONTENTS_PERMISSION,
      VALIDATE_CONTENTS_PERMISSION,
      MANAGE_RESOURCES_PERMISSION
    ],
    userPermissions
  );
  const cmsHasVersioningAccess = cmsHasMenuAssetsAccess;
  const cmsHasMenuContentTypeAccess = hasAccess(
    SUPERUSER_PERMISSION,
    userPermissions
  );
  const cmsHasMenuContentTemplatesAccess = hasAccess(
    [SUPERUSER_PERMISSION, VALIDATE_CONTENTS_PERMISSION],
    userPermissions
  );
  const cmsHasCategoriesAccess = hasAccess(
    [SUPERUSER_PERMISSION, MANAGE_CATEGORIES_PERMISSION],
    userPermissions
  );
  const cmsHasMenuContentSettingsAccess = hasAccess(
    SUPERUSER_PERMISSION,
    userPermissions
  );

  const cmsHasAnyMenuItemAccess = hasAccess(
    [
      CRUD_CONTENTS_PERMISSION,
      MANAGE_RESOURCES_PERMISSION,
      MANAGE_CATEGORIES_PERMISSION,
      VALIDATE_CONTENTS_PERMISSION
    ],
    userPermissions
  );

  const hasSuperuserAccess = hasAccess(SUPERUSER_PERMISSION, userPermissions);

  const hasECRAccess =
    hasSuperuserAccess || hasAccess(ENTER_ECR_PERMISSION, userPermissions);

  const usersHasAnyMenuItemAccess = hasAccess(
    [
      VIEW_USERS_AND_PROFILES_PERMISSION,
      CRUD_USERS_PERMISSION,
      EDIT_USER_PROFILES_PERMISSION
    ],
    userPermissions
  );

  return (
    <MenuUIContext.Provider value={menuUIContext}>
      <MenuCmp>
        <ListGroup>
          <ListGroupItem
            id="dashboard"
            label="Dashboard"
            renderIcon={props => <DashboardIcon {...props} />}
          />
          {hasAccess(MANAGE_PAGES_PERMISSION, userPermissions) && (
            <ListGroupItem
              id="pages"
              label="Pages"
              renderIcon={props => <PagesIcon {...props} />}
            >
              <SecondaryMenuItem id="pages-management" label="Management">
                <TertiaryMenuItem id="pages-management-remove" label="Remove" />
              </SecondaryMenuItem>
              <SecondaryMenuItem id="pages-designer" label="Designer" />
              {hasSuperuserAccess && (
                <>
                  <SecondaryMenuItem id="pages-templates" label="Templates" />
                  <SecondaryMenuItem id="pages-settings" label="Settings" />
                </>
              )}
            </ListGroupItem>
          )}
          {hasSuperuserAccess && (
            <ListGroupItem
              id="components"
              label="Components"
              renderIcon={props => <ComponentsIcon {...props} />}
            >
              <SecondaryMenuItem
                id="components-widgets"
                label="MFE & Widgets"
              />
              <SecondaryMenuItem
                id="components-fragments"
                label="UX Fragments"
              />
            </ListGroupItem>
          )}
          {cmsHasAnyMenuItemAccess && (
            <ListGroupItem
              id="content"
              label="Content"
              renderIcon={props => <ContentIcon {...props} />}
            >
              {cmsHasMenuContentsAccess && (
                <SecondaryMenuItem
                  id="content-management"
                  label="Management"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/Content/list.action'
                  )}
                />
              )}
              {cmsHasMenuAssetsAccess && (
                <SecondaryMenuItem
                  id="content-assets"
                  label="Assets"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/Resource/list.action?resourceTypeCode=Image'
                  )}
                />
              )}
              {cmsHasMenuContentTemplatesAccess && (
                <SecondaryMenuItem
                  id="content-templates"
                  label="Templates"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/ContentModel/list.action'
                  )}
                />
              )}
              {cmsHasCategoriesAccess && (
                <SecondaryMenuItem
                  id="content-categories"
                  label="Categories"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/Category/viewTree.action'
                  )}
                />
              )}
              {cmsHasVersioningAccess && (
                <SecondaryMenuItem
                  id="content-versioning"
                  label="Versioning"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jpversioning/Content/Versioning/list.action'
                  )}
                />
              )}
              {cmsHasMenuContentsAccess && contentSchedulerPluginInstalled && (
                <SecondaryMenuItem
                  id="content-scheduler"
                  label="Content Scheduler"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jpcontentscheduler/config/viewItem.action'
                  )}
                />
              )}
              {cmsHasMenuContentTypeAccess && (
                <SecondaryMenuItem
                  id="content-types"
                  label="Types"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/Entity/initViewEntityTypes.action?entityManagerName=jacmsContentManager'
                  )}
                />
              )}
              {cmsHasMenuContentSettingsAccess && (
                <SecondaryMenuItem
                  id="content-settings"
                  label="Settings"
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/Content/Admin/openIndexProspect.action'
                  )}
                />
              )}
            </ListGroupItem>
          )}
          {usersHasAnyMenuItemAccess && (
            <ListGroupItem
              id="users"
              label="Users"
              renderIcon={props => <UsersIcon {...props} />}
            >
              <SecondaryMenuItem id="users-management" label="Management" />
              {hasSuperuserAccess && (
                <>
                  <SecondaryMenuItem id="users-roles" label="Roles" />
                  <SecondaryMenuItem id="users-groups" label="Groups" />
                  <SecondaryMenuItem
                    id="users-profileTypes"
                    label="Profile types"
                  />
                  <SecondaryMenuItem
                    id="users-restrictions"
                    label="Restrictions"
                  />
                </>
              )}
            </ListGroupItem>
          )}
          {hasECRAccess && (
            <ListGroupItem
              id="repository"
              label="Repository"
              renderIcon={props => <RepositoryIcon {...props} />}
            />
          )}
          <ListGroupItem
            id="pbcs"
            label="PBC's"
            renderIcon={props => <PBCsIcon {...props} />}
          />
          {hasSuperuserAccess && (
            <ListGroupItem
              id="administration"
              label="Administration"
              renderIcon={props => <AdministrationIcon {...props} />}
              fixBottom
            >
              <SecondaryMenuItem
                id="administration-database"
                label="Database"
              />
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
          )}
        </ListGroup>
      </MenuCmp>
    </MenuUIContext.Provider>
  );
}
