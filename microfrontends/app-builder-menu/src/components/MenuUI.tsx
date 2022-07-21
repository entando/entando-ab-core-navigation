import styled from 'styled-components';
import { ListGroup } from './ListGroup/ListGroup';
import { ListGroupItem } from './ListGroup/ListGroupItem';
import { PagesIcon } from './Icons/PagesIcon';
import { DashboardIcon } from './Icons/DashboardIcon';
import { ComponentsIcon } from './Icons/ComponentsIcon';
import { ContentIcon } from './Icons/ContentIcon';
import { UsersIcon } from './Icons/UsersIcon';
import { RepositoryIcon } from './Icons/RepositoryIcon';
import { EPCsIcon } from './Icons/EPCsIcon';
import { AdministrationIcon } from './Icons/AdministrationIcon';
import { SecondaryMenuItem } from './SecondaryMenu/SecondaryMenuItem';
import { TertiaryMenuItem } from './TertiaryMenu/TertiaryMenuItem';
import { useState } from 'react';
import { MenuUIContext, MenuUIContextInterface } from './MenuUIContext';
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
import { MenuItem } from '../types/api';
import { generateDynamicMenuItems, TARGET_BLANK } from '../utils/dynamicTree';
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
import { useContent } from './hooks/useContent';
import { ContentType, DEFAULT_LOCALE } from '../content';
import { useNavigation } from '../hooks/navigation';
import { sendTutorialNextStepEvent } from '../utils/events';
import { toSnakeCase } from '../utils/string';
import { MfeConfig } from '../types/globals';
import { MENU_DATA_ID } from '../constants';

const MenuCmp = styled.menu`
  height: 100%;
  background: ${COLORS.primary};
  border-right: 1px solid ${COLORS.primary};
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 60px;
  width: 215px;
  z-index: 1030;
`;

interface Props {
  config: MfeConfig;
  dynamicMenuItems: MenuItem[];
}

export function MenuUI(props: Props): JSX.Element {
  const { config, dynamicMenuItems } = props;
  const { userPermissions, systemReport, adminConsoleUrl, lang } =
    window.entando?.globals || {};
  const [activeListGroupItemId, setActiveListGroupItemId] = useState('');
  const [activeSecondaryMenuItemId, setActiveSecondaryMenuItemId] =
    useState('');
  const [activeTertiaryMenuItemId, setActiveTertiaryMenuItemId] = useState('');
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const [tertiaryMenuOpen, setTertiaryMenuOpen] = useState(false);
  const content: ContentType = useContent();

  const navigate = useNavigation();

  const activeLanguage = lang || DEFAULT_LOCALE;

  const epcMenuItems = generateDynamicMenuItems(dynamicMenuItems);

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
      <MenuCmp data-id={MENU_DATA_ID}>
        <ListGroup>
          <ListGroupItem
            id="dashboard"
            dataId="dashboard"
            label={content.dashboard}
            renderIcon={props => <DashboardIcon {...props} />}
            onClick={() => navigate(ROUTE_DASHBOARD)}
          />
          {hasAccess(MANAGE_PAGES_PERMISSION, userPermissions) && (
            <ListGroupItem
              id="pages"
              dataId="pages"
              label={content.pages}
              className="app-tour-step-3"
              renderIcon={props => <PagesIcon {...props} />}
              onClick={() => sendTutorialNextStepEvent(4)}
            >
              <SecondaryMenuItem
                id="pages-management"
                dataId="pages-management"
                label={content.management}
                className="app-tour-step-4"
                onClick={() => {
                  sendTutorialNextStepEvent(5);
                  navigate(ROUTE_PAGE_TREE);
                }}
              />
              <SecondaryMenuItem
                id="pages-designer"
                dataId="pages-designer"
                label={content.designer}
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
                    dataId="pages-templates"
                    label={content.templates}
                    onClick={() => navigate(ROUTE_PAGE_TEMPLATE_LIST)}
                  />
                  <SecondaryMenuItem
                    id="pages-settings"
                    dataId="pages-settings"
                    label={content.settings}
                    onClick={() => navigate(ROUTE_PAGE_SETTINGS)}
                  />
                </>
              )}
            </ListGroupItem>
          )}
          {hasSuperuserAccess && (
            <ListGroupItem
              id="components"
              dataId="components"
              label={content.components}
              renderIcon={props => <ComponentsIcon {...props} />}
            >
              <SecondaryMenuItem
                id="components-widgets"
                dataId="components-widgets"
                label={content.mfeAndWidgets}
                onClick={() => navigate(ROUTE_WIDGET_LIST)}
              />
              <SecondaryMenuItem
                id="components-fragments"
                dataId="components-fragments"
                label={content.uxFragments}
                onClick={() => navigate(ROUTE_FRAGMENT_LIST)}
              />
            </ListGroupItem>
          )}
          {cmsHasAnyMenuItemAccess && (
            <ListGroupItem
              id="content"
              dataId="content"
              label={content.content}
              renderIcon={props => <ContentIcon {...props} />}
            >
              {cmsHasMenuContentsAccess && (
                <SecondaryMenuItem
                  id="content-management"
                  dataId="content-management"
                  label={content.management}
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/Content/list.action'
                  )}
                />
              )}
              {cmsHasMenuAssetsAccess && (
                <SecondaryMenuItem
                  id="content-assets"
                  dataId="content-assets"
                  label={content.assets}
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/Resource/list.action?resourceTypeCode=Image'
                  )}
                />
              )}
              {cmsHasMenuContentTemplatesAccess && (
                <SecondaryMenuItem
                  id="content-templates"
                  dataId="content-templates"
                  label={content.templates}
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jacms/ContentModel/list.action'
                  )}
                />
              )}
              {cmsHasCategoriesAccess && (
                <SecondaryMenuItem
                  id="content-categories"
                  dataId="content-categories"
                  label={content.categories}
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/Category/viewTree.action'
                  )}
                />
              )}
              {cmsHasVersioningAccess && (
                <SecondaryMenuItem
                  id="content-versioning"
                  dataId="content-versioning"
                  label={content.versioning}
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/jpversioning/Content/Versioning/list.action'
                  )}
                />
              )}
              {cmsHasMenuContentsAccess &&
                systemReport?.contentSchedulerPluginInstalled && (
                  <SecondaryMenuItem
                    id="content-scheduler"
                    dataId="content-scheduler"
                    label={content.contentScheduler}
                    href={convertToAdminConsoleUrl(
                      adminConsoleUrl,
                      'do/jpcontentscheduler/config/viewItem.action'
                    )}
                  />
                )}
              {cmsHasMenuContentTypeAccess && (
                <SecondaryMenuItem
                  id="content-types"
                  dataId="content-types"
                  label={content.types}
                  href={convertToAdminConsoleUrl(
                    adminConsoleUrl,
                    'do/Entity/initViewEntityTypes.action?entityManagerName=jacmsContentManager'
                  )}
                />
              )}
              {cmsHasMenuContentSettingsAccess && (
                <SecondaryMenuItem
                  id="content-settings"
                  dataId="content-settings"
                  label={content.settings}
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
              dataId="users"
              label={content.users}
              renderIcon={props => <UsersIcon {...props} />}
            >
              <SecondaryMenuItem
                id="users-management"
                dataId="users-management"
                label={content.management}
                onClick={() => navigate(ROUTE_USER_LIST)}
              />
              {hasSuperuserAccess && (
                <>
                  <SecondaryMenuItem
                    id="users-roles"
                    dataId="users-roles"
                    label={content.roles}
                    onClick={() => navigate(ROUTE_ROLE_LIST)}
                  />
                  <SecondaryMenuItem
                    id="users-groups"
                    dataId="users-groups"
                    label={content.groups}
                    onClick={() => navigate(ROUTE_GROUP_LIST)}
                  />
                  <SecondaryMenuItem
                    id="users-profile-types"
                    dataId="users-profile-types"
                    label={content.profileTypes}
                    onClick={() => navigate(ROUTE_PROFILE_TYPE_LIST)}
                  />
                  <SecondaryMenuItem
                    id="users-restrictions"
                    dataId="users-restrictions"
                    label={content.restrictions}
                    onClick={() => navigate(ROUTE_USER_RESTRICTIONS)}
                  />
                </>
              )}
            </ListGroupItem>
          )}
          {hasECRAccess && (
            <ListGroupItem
              id="repository"
              dataId="repository"
              label={content.repository}
              renderIcon={props => <RepositoryIcon {...props} />}
              onClick={() => navigate(ROUTE_ECR_COMPONENT_LIST)}
            />
          )}
          {!!epcMenuItems?.length && (
            <ListGroupItem
              id="epc"
              dataId="epc"
              label={content.EPCS}
              renderIcon={props => <EPCsIcon {...props} />}
            >
              {epcMenuItems.map(epc => {
                return (
                  <SecondaryMenuItem
                    id={epc.parent}
                    key={epc.parent}
                    label={epc.parent}
                    dataId={epc.parent}
                  >
                    {epc.children.map(item => {
                      // get english label or any first value from labels object
                      const firstAvailableLabel = Object.values(
                        item.label
                      )?.[0];
                      const itemLabel =
                        item.label['en'] || firstAvailableLabel || '';
                      const itemId = `${item.pbcName}_${
                        item.bundleCode
                      }_${toSnakeCase(itemLabel)}`;

                      const isExternal = item.hrefTarget === TARGET_BLANK;

                      return (
                        <TertiaryMenuItem
                          id={itemId}
                          dataId={
                            item.mfeName
                              ? item.mfeName
                              : isExternal
                              ? 'external'
                              : undefined
                          }
                          key={itemId}
                          label={
                            item.label[activeLanguage] ||
                            firstAvailableLabel ||
                            item.mfeName
                          }
                          href={isExternal ? item.url : undefined}
                          onClick={() => item.url && navigate(item.url)}
                          target={item.hrefTarget}
                          rel={item.rel}
                        />
                      );
                    })}
                  </SecondaryMenuItem>
                );
              })}
            </ListGroupItem>
          )}
          {hasSuperuserAccess && (
            <ListGroupItem
              id="admin"
              dataId="admin"
              label={content.administration}
              renderIcon={props => <AdministrationIcon {...props} />}
              fixBottom
            >
              <SecondaryMenuItem
                id="admin-database"
                dataId="admin-database"
                label={content.database}
                onClick={() => navigate(ROUTE_DATABASE_LIST)}
              />
              <SecondaryMenuItem
                id="admin-file-browser"
                dataId="admin-file-browser"
                label={content.fileBrowser}
                onClick={() => navigate(ROUTE_FILE_BROWSER)}
              />
              <SecondaryMenuItem
                id="admin-languages-and-labels"
                dataId="admin-languages-and-labels"
                label={content.languageAndLabels}
                onClick={() => navigate(ROUTE_LABELS_AND_LANGUAGES)}
              />
              <SecondaryMenuItem
                id="admin-email-configuration"
                dataId="admin-email-configuration"
                label={content.emailConfiguration}
                onClick={() => navigate(ROUTE_EMAIL_CONFIG)}
              />
              <SecondaryMenuItem
                id="admin-reload-configuration"
                dataId="admin-reload-configuration"
                label={content.reloadConfiguration}
                onClick={() => navigate(ROUTE_RELOAD_CONFIG)}
              />
            </ListGroupItem>
          )}
        </ListGroup>
      </MenuCmp>
    </MenuUIContext.Provider>
  );
}
