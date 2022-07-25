import { generateDynamicMenuItems } from './dynamicTree';

describe('verify generateDynamicMenuItems function correctness', () => {
  it('should return correct result', () => {
    const items = [
      {
        pbcName: 'pbc1',
        bundleCode: 'bundle1',
        addr: 'https://external/addr1',
        target: 'external',
        mfeName: 'name1',
        label: {
          en: 'label1'
        },
        organization: 'entando'
      },
      {
        pbcName: 'pbc1',
        bundleCode: 'bundle2',
        addr: 'addr2',
        target: 'app-builder',
        mfeName: 'name2',
        label: {
          en: 'label2'
        },
        organization: 'entando'
      },
      {
        pbcName: 'pbc2',
        bundleCode: 'bundle3',
        addr: 'addr3',
        target: 'app-builder',
        mfeName: 'name3',
        label: {
          en: 'label3'
        },
        organization: 'entando'
      }
    ];
    const expectedResult = [
      {
        parent: 'pbc1',
        children: [
          {
            pbcName: 'pbc1',
            bundleCode: 'bundle1',
            addr: 'https://external/addr1',
            target: 'external',
            mfeName: 'name1',
            hrefTarget: '_blank',
            rel: 'noopener noreferrer',
            url: 'https://external/addr1',
            label: {
              en: 'label1'
            },
            organization: 'entando'
          },
          {
            pbcName: 'pbc1',
            bundleCode: 'bundle2',
            addr: 'addr2',
            target: 'app-builder',
            mfeName: 'name2',
            url: '/bundle2/addr2',
            label: {
              en: 'label2'
            },
            organization: 'entando'
          }
        ]
      },
      {
        parent: 'pbc2',
        children: [
          {
            pbcName: 'pbc2',
            bundleCode: 'bundle3',
            addr: 'addr3',
            target: 'app-builder',
            mfeName: 'name3',
            url: '/bundle3/addr3',
            label: {
              en: 'label3'
            },
            organization: 'entando'
          }
        ]
      }
    ];
    expect(generateDynamicMenuItems(items)).toEqual(expectedResult);
  });
});
