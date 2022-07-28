import { IntlShape } from 'react-intl';

export const DEFAULT_LOCALE = 'en';

export type ContentType = {
  [key: string]: string;
};

export function getContent(intl: IntlShape): ContentType {
  return {
    dashboard: intl.formatMessage({
      id: 'app.dashboard',
      defaultMessage: 'Dashboard'
    }),
    pages: intl.formatMessage({
      id: 'app.pages',
      defaultMessage: 'Pages'
    }),
    components: intl.formatMessage({
      id: 'app.components',
      defaultMessage: 'Components'
    }),
    content: intl.formatMessage({
      id: 'app.content',
      defaultMessage: 'Content'
    }),
    users: intl.formatMessage({
      id: 'app.users',
      defaultMessage: 'Users'
    }),
    repository: intl.formatMessage({
      id: 'app.repository',
      defaultMessage: 'Repository'
    }),
    EPCS: intl.formatMessage({
      id: 'app.epcs',
      defaultMessage: `EPCs`
    }),
    management: intl.formatMessage({
      id: 'app.management',
      defaultMessage: 'Management'
    }),
    designer: intl.formatMessage({
      id: 'app.designer',
      defaultMessage: 'Designer'
    }),
    templates: intl.formatMessage({
      id: 'app.templates',
      defaultMessage: 'Templates'
    }),
    settings: intl.formatMessage({
      id: 'app.settings',
      defaultMessage: 'Settings'
    }),
    mfeAndWidgets: intl.formatMessage({
      id: 'app.mfeAndWidgets',
      defaultMessage: 'MFE & Widgets'
    }),
    uxFragments: intl.formatMessage({
      id: 'app.uxFragments',
      defaultMessage: 'UX Fragments'
    }),
    assets: intl.formatMessage({
      id: 'app.assets',
      defaultMessage: 'Assets'
    }),
    categories: intl.formatMessage({
      id: 'app.categories',
      defaultMessage: 'Categories'
    }),
    versioning: intl.formatMessage({
      id: 'app.versioning',
      defaultMessage: 'Versioning'
    }),
    contentScheduler: intl.formatMessage({
      id: 'app.contentScheduler',
      defaultMessage: 'Content Scheduler'
    }),
    types: intl.formatMessage({
      id: 'app.types',
      defaultMessage: 'Types'
    }),
    roles: intl.formatMessage({
      id: 'app.roles',
      defaultMessage: 'Roles'
    }),
    groups: intl.formatMessage({
      id: 'app.groups',
      defaultMessage: 'Groups'
    }),
    profileTypes: intl.formatMessage({
      id: 'app.profileTypes',
      defaultMessage: 'Profile Types'
    }),
    restrictions: intl.formatMessage({
      id: 'app.restrictions',
      defaultMessage: 'Restrictions'
    }),
    administration: intl.formatMessage({
      id: 'app.administration',
      defaultMessage: 'Administration'
    }),
    database: intl.formatMessage({
      id: 'app.database',
      defaultMessage: 'Database'
    }),
    fileBrowser: intl.formatMessage({
      id: 'app.fileBrowser',
      defaultMessage: 'File browser'
    }),
    languageAndLabels: intl.formatMessage({
      id: 'app.languageAndLabels',
      defaultMessage: 'Language & Labels'
    }),
    emailConfiguration: intl.formatMessage({
      id: 'app.emailConfiguration',
      defaultMessage: 'Email Configuration'
    }),
    reloadConfiguration: intl.formatMessage({
      id: 'app.reloadConfiguration',
      defaultMessage: 'Reload Configuration'
    }),
    epcPlaceholder: intl.formatMessage({
      id: 'app.epcPlaceholder',
      defaultMessage: 'Install your first Entando Platform Capability'
    })
  };
}
