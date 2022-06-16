import { listBundles } from '../client';
import { IBundle } from '../client/response/IBundle';

export const listNav = async () => {
  const bundles: IBundle[] = await listBundles();

  return bundles.map(bundle => {
    const name = bundle.name;
    const pbcName = bundle.pbcName;
    const organization = 'entando';
    
    const globalNavs = bundle.global.nav;
    const bundleNavs = bundle.microfrontends.map(m => m.nav).flat();
    const navs = [...globalNavs, ...bundleNavs];

    return navs.map(n => {
      return {
        name,
        pbcName,
        organization,
        ...n
      };
    });
  }).flat();
};
