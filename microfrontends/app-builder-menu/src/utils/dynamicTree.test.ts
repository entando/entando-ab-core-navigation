import { generateDynamicMenuItems } from './dynamicTree';

describe('verify generateDynamicMenuItems function correctness', () => {
  it('should return correct result', () => {
    const items = [
      {
        pbcName: 'pbc1',
        bundleName: 'bundle1',
        addr: 'https://external/addr1',
        target: 'external',
        mfeName: 'name1',
        label: {
          en: 'label1'
        },
        org: 'entando'
      },
      {
        pbcName: 'pbc1',
        bundleName: 'bundle2',
        addr: 'addr2',
        target: 'app-builder',
        mfeName: 'name2',
        label: {
          en: 'label2'
        },
        org: 'entando'
      },
      {
        pbcName: 'pbc2',
        bundleName: 'bundle3',
        addr: 'addr3',
        target: 'app-builder',
        mfeName: 'name3',
        label: {
          en: 'label3'
        },
        org: 'entando'
      }
    ];
    const expectedResult = [
      {
        parent: 'pbc1',
        children: [
          {
            pbcName: 'pbc1',
            bundleName: 'bundle1',
            addr: 'https://external/addr1',
            target: 'external',
            mfeName: 'name1',
            hrefTarget: '_blank',
            rel: 'noopener noreferrer',
            url: 'https://external/addr1',
            label: {
              en: 'label1'
            },
            org: 'entando'
          },
          {
            pbcName: 'pbc1',
            bundleName: 'bundle2',
            addr: 'addr2',
            target: 'app-builder',
            mfeName: 'name2',
            url: '/pbc1/bundle2/addr2',
            label: {
              en: 'label2'
            },
            org: 'entando'
          }
        ]
      },
      {
        parent: 'pbc2',
        children: [
          {
            pbcName: 'pbc2',
            bundleName: 'bundle3',
            addr: 'addr3',
            target: 'app-builder',
            mfeName: 'name3',
            url: '/pbc2/bundle3/addr3',
            label: {
              en: 'label3'
            },
            org: 'entando'
          }
        ]
      }
    ];
    expect(generateDynamicMenuItems(items)).toEqual(expectedResult);
  });
});
