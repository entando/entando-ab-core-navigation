import { IBundle, IBundleWidget } from "../../../../src/client/response/IBundleWidget";
import { INavResponse, UNCATEGORIZED_PBC_NAME } from "../../../../src/service";

export const LIST_BUNDLES_RESPONSE: IBundle[] = [
  {
    bundleId: 'aae34d0e',
    bundleName: 'strapi-bundle'
  },
  {
    bundleId: '12f4f691',
    bundleName: 'test-bundle',
    bundleCode: 'test-bundle-12f4f691'
  },
  {
    bundleId: 'a8d4da43',
    bundleName: 'global-menu-bundle',
    bundleCode: 'global-menu-bundle-a8d4da43',
    descriptorExt: {
      nav: [
        {
          label: {
            it: 'Menu Globale',
            en: 'Global Menu',
          },
          target: 'app-builder',
          url: '/global-menu',
        }
      ]
    },
    labels: {}
  }
]

export const LIST_BUNDLES_WIDGETS_RESPONSE: IBundleWidget[] = [
  {
    bundleId: 'aae34d0e',
    widgetName: 'strapi-content-template',
    descriptorExt: {
      nav: [
        {
          label: {
            it: 'Content Template',
            en: 'Content Template',
          },
          target: 'app-builder',
          url: '/content-template',
        }
      ]
    },
    labels: {
      pbcNames: ['strapi-pbc']
    }
  },
  {
    bundleId: '12f4f691',
    widgetName: 'test-widget',
    descriptorExt: {
      nav: [
        {
          label: {
            it: 'Test nav',
            en: 'Test nav',
          },
          target: 'app-builder',
          url: '/test-nav',
        }
      ]
    },
    labels: {
      pbcNames: ['strapi-pbc', 'test-pbc']
    }
  }
];

export const LIST_NAVS_RESPONSE: INavResponse[] = [
  {
    pbcName: UNCATEGORIZED_PBC_NAME,
    bundleCode: 'global-menu-bundle-a8d4da43',
    mfeName: null,
    organization: 'entando',
    label: {
      it: 'Menu Globale',
      en: 'Global Menu'
    },
    target: 'app-builder',
    addr: '/global-menu'
  },
  {
    pbcName: 'strapi-pbc',
    bundleCode: 'strapi-bundle-aae34d0e',
    mfeName: 'strapi-content-template',
    organization: 'entando',
    label: {
      it: 'Content Template',
      en: 'Content Template'
    },
    target: 'app-builder',
    addr: '/content-template'
  },
  {
    pbcName: 'strapi-pbc',
    bundleCode: 'test-bundle-12f4f691',
    mfeName: 'test-widget',
    organization: 'entando',
    label: {
      it: 'Test nav',
      en: 'Test nav'
    },
    target: 'app-builder',
    addr: '/test-nav'
  },
  {
    pbcName: 'test-pbc',
    bundleCode: 'test-bundle-12f4f691',
    mfeName: 'test-widget',
    organization: 'entando',
    label: {
      it: 'Test nav',
      en: 'Test nav'
    },
    target: 'app-builder',
    addr: '/test-nav'
  }
];
