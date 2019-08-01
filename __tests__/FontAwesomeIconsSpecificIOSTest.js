import { BrandIcons, SolidIcons, RegularIcons } from '../FontAwesomeIcons';

jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: jest.fn(),
    },
    Platform: {
      OS: 'ios'
    }
  };
});

describe('Testing FontAwesomeIcons Specific Android Tests', () => {
  it('get the right platform font family name', () => {
    expect(BrandIcons._fontFamily).toBe('FontAwesome5BrandsRegular')
    expect(SolidIcons._fontFamily).toBe('FontAwesome5FreeSolid')
    expect(RegularIcons._fontFamily).toBe('FontAwesome5FreeRegular')
  })
});
