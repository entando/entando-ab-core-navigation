window.entando = {
  router: {
    push: route => console.log('navigating to', route),
    listen: () => () => {},
  },
  globals: {
    userPermissions: [
      'superuser',
      'editContents',
      'managePages',
      'editUsers',
      'viewUsers',
      'editUserProfile',
      'manageCategories',
      'validateContents',
      'manageResources',
      'enterECR'
    ],
    lang: 'en',
    adminConsoleUrl: 'http://localhost:8080/admin-console',
    systemReport: {
      contentSchedulerPluginInstalled: true
    },
    advancedSearchOn: true,
  },
  keycloak: {
    token: 'keycloak-token',
  }
};

const MFE_NAME = 'app-builder-menu';

fetch('mfe-config.json')
  .then(res => {
    return res.json();
  })
  .then(res => {
    const mfe = document.getElementsByTagName(MFE_NAME)[0];

    mfe.setAttribute('config', JSON.stringify(res));
  })
  .catch(err => {
    console.log(err);

    console.error('ERROR:', 'missing mfe-config');
  });
