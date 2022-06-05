import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
import {
  convertToAdminConsoleUrl,
  HOMEPAGE_CODE,
  routeConverter
} from '../utils/links';
import { COLORS } from './theme';
import { MENU_ITEM } from '../types/api';
import { generateDynamicMenuItems } from '../utils/dynamicTree';
import {
  ROUTE_DASHBOARD,
  ROUTE_DATABASE_LIST,
  ROUTE_ECR_COMPONENT_LIST,
  ROUTE_EMAIL_CONFIG,
  ROUTE_FILE_BROWSER,
  ROUTE_FRAGMENT_LIST,
  ROUTE_GROUP_LIST,
  ROUTE_LABELS_AND_LANGUAGES,
  ROUTE_PAGE_CONFIG,
  ROUTE_PAGE_SETTINGS,
  ROUTE_PAGE_TEMPLATE_LIST,
  ROUTE_PAGE_TREE,
  ROUTE_PROFILE_TYPE_LIST,
  ROUTE_RELOAD_CONFIG,
  ROUTE_ROLE_LIST,
  ROUTE_USER_LIST,
  ROUTE_USER_RESTRICTIONS,
  ROUTE_WIDGET_LIST
} from '../utils/routes';

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
  dynamicMenuItems: MENU_ITEM[];
}

export default function MenuUI(props: Props): JSX.Element {
  const { config, dynamicMenuItems } = props;
  const { userPermissions } = config;
  const [activeListGroupItemId, setActiveListGroupItemId] = useState('');
  const [activeSecondaryMenuItemId, setActiveSecondaryMenuItemId] =
    useState('');
  const [activeTertiaryMenuItemId, setActiveTertiaryMenuItemId] = useState('');
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const [tertiaryMenuOpen, setTertiaryMenuOpen] = useState(false);

  const navigate = useNavigate();

  // @TODO take these two from config probably?
  const contentSchedulerPluginInstalled = true;
  const adminConsoleUrl = 'https://admin.pbc.io';

  // @TODO Gui use this for language related code
  const activeLanguage = config.lang;

  const pbcMenuItems = generateDynamicMenuItems(dynamicMenuItems);

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
            onClick={() => navigate(ROUTE_DASHBOARD)}
          />
          {hasAccess(MANAGE_PAGES_PERMISSION, userPermissions) && (
            <ListGroupItem
              id="pages"
              label="Pages"
              className="app-tour-step-3"
              renderIcon={props => <PagesIcon {...props} />}
              onClick={() => {
                const event = new CustomEvent('tutorial', {
                  detail: { nextStep: 4 }
                });
                window.dispatchEvent(event);
              }}
            >
              <SecondaryMenuItem
                id="pages-management"
                label="Management"
                className="app-tour-step-4"
                onClick={() => {
                  const event = new CustomEvent('tutorial', {
                    detail: { nextStep: 5 }
                  });
                  window.dispatchEvent(event);
                  navigate(ROUTE_PAGE_TREE);
                }}
              />
              <SecondaryMenuItem
                id="pages-designer"
                label="Designer"
                onClick={() =>
                  navigate(
                    routeConverter(ROUTE_PAGE_CONFIG, {
                      pageCode: HOMEPAGE_CODE
                    })
                  )
                }
              />
              {hasSuperuserAccess && (
                <>
                  <SecondaryMenuItem
                    id="pages-templates"
                    label="Templates"
                    onClick={() => navigate(ROUTE_PAGE_TEMPLATE_LIST)}
                  />
                  <SecondaryMenuItem
                    id="pages-settings"
                    label="Settings"
                    onClick={() => navigate(ROUTE_PAGE_SETTINGS)}
                  />
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
                onClick={() => navigate(ROUTE_WIDGET_LIST)}
              />
              <SecondaryMenuItem
                id="components-fragments"
                label="UX Fragments"
                onClick={() => navigate(ROUTE_FRAGMENT_LIST)}
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
              <SecondaryMenuItem
                id="users-management"
                label="Management"
                onClick={() => navigate(ROUTE_USER_LIST)}
              />
              {hasSuperuserAccess && (
                <>
                  <SecondaryMenuItem
                    id="users-roles"
                    label="Roles"
                    onClick={() => navigate(ROUTE_ROLE_LIST)}
                  />
                  <SecondaryMenuItem
                    id="users-groups"
                    label="Groups"
                    onClick={() => navigate(ROUTE_GROUP_LIST)}
                  />
                  <SecondaryMenuItem
                    id="users-profileTypes"
                    label="Profile types"
                    onClick={() => navigate(ROUTE_PROFILE_TYPE_LIST)}
                  />
                  <SecondaryMenuItem
                    id="users-restrictions"
                    label="Restrictions"
                    onClick={() => navigate(ROUTE_USER_RESTRICTIONS)}
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
              onClick={() => navigate(ROUTE_ECR_COMPONENT_LIST)}
            />
          )}
          <ListGroupItem
            id="pbcs"
            label="PBC's"
            renderIcon={props => <PBCsIcon {...props} />}
          >
            {pbcMenuItems.map(pbc => {
              return (
                <SecondaryMenuItem
                  id={`pbc-id-${pbc.parent}`}
                  key={`pbc-id-${pbc.parent}`}
                  label={pbc.parent}
                >
                  {pbc.children.map(item => {
                    const itemId =
                      item.epcData?.['epc-id'] ||
                      item.externalHref ||
                      item.url ||
                      item.mfeName;
                    return (
                      <TertiaryMenuItem
                        id={itemId}
                        key={itemId}
                        label={item.label[activeLanguage] || item.mfeName}
                        href={item.externalHref}
                        onClick={() => item.url && navigate(item.url)}
                      />
                    );
                  })}
                </SecondaryMenuItem>
              );
            })}
          </ListGroupItem>
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
                onClick={() => navigate(ROUTE_DATABASE_LIST)}
              />
              <SecondaryMenuItem
                id="administration-fileBrowser"
                label="File browser"
                onClick={() => navigate(ROUTE_FILE_BROWSER)}
              />
              <SecondaryMenuItem
                id="administration-languagesAndLabels"
                label="Languages & Labels"
                onClick={() => navigate(ROUTE_LABELS_AND_LANGUAGES)}
              />
              <SecondaryMenuItem
                id="administration-emailConfiguration"
                label="Email Configuration"
                onClick={() => navigate(ROUTE_EMAIL_CONFIG)}
              />
              <SecondaryMenuItem
                id="administration-reloadConfiguration"
                label="Reload configuration"
                onClick={() => navigate(ROUTE_RELOAD_CONFIG)}
              />
            </ListGroupItem>
          )}
        </ListGroup>
      </MenuCmp>
    </MenuUIContext.Provider>
  );
}
