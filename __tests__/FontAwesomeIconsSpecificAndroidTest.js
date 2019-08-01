import { BrandIcons, SolidIcons, RegularIcons } from '../FontAwesomeIcons';
import { parseIconFromClassName } from '../Icon'

jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: jest.fn(),
    },
    Platform: {
      OS: 'android'
    }
  };
});

describe('Testing FontAwesomeIcons Specific Android Tests', () => {
  it('get the right platform font family name', () => {
    expect(BrandIcons._fontFamily).toBe('fa-brands-400')
    expect(SolidIcons._fontFamily).toBe('fa-solid-900')
    expect(RegularIcons._fontFamily).toBe('fa-regular-400')
  })
});
