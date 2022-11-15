export const ROUTE_DASHBOARD = '/dashboard';
// page
export const ROUTE_PAGE_TREE = '/page';
export const ROUTE_PAGE_SETTINGS = '/page/settings';
export const ROUTE_PAGE_CONFIG = '/page/configuration/:pageCode';
// page template
export const ROUTE_PAGE_TEMPLATE_LIST = '/page-template';
// widgets
export const ROUTE_WIDGET_LIST = '/widget';
// fragments
export const ROUTE_FRAGMENT_LIST = '/fragment';
// user
export const ROUTE_USER_LIST = '/user';
export const ROUTE_USER_RESTRICTIONS = '/user/restrictions';
export const ROUTE_USER_MY_PROFILE = '/myProfile';
// profiles
export const ROUTE_PROFILE_TYPE_LIST = '/profiletype';
// groups
export const ROUTE_GROUP_LIST = '/group';
// labels
export const ROUTE_LABELS_AND_LANGUAGES = '/labels-languages';
// roles
export const ROUTE_ROLE_LIST = '/role';
// database
export const ROUTE_DATABASE_LIST = '/database';
// files
export const ROUTE_FILE_BROWSER = '/file-browser';
// component repository
export const ROUTE_ECR_COMPONENT_LIST = '/component-repository';
// email config
export const ROUTE_EMAIL_CONFIG = '/email-config';

// other
export const ROUTE_RELOAD_CONFIG = '/reloadConfiguration';

// mapping between top-level menu items and root paths
export const ROOT_MENU_ROUTE_MAP: Record<string, string | string[]> = {
  dashboard: ROUTE_DASHBOARD,
  pages: [ROUTE_PAGE_TREE, ROUTE_PAGE_TEMPLATE_LIST],
  components: [ROUTE_WIDGET_LIST, ROUTE_FRAGMENT_LIST],
  users: [ROUTE_USER_LIST, ROUTE_ROLE_LIST, ROUTE_GROUP_LIST, ROUTE_PROFILE_TYPE_LIST],
  repository: ROUTE_ECR_COMPONENT_LIST,
  admin: [ROUTE_DATABASE_LIST, ROUTE_FILE_BROWSER, ROUTE_LABELS_AND_LANGUAGES, ROUTE_EMAIL_CONFIG, ROUTE_RELOAD_CONFIG]
};
