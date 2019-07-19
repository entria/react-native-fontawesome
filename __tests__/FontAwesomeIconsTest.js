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

describe('Testing FontAwesomeIcons', () => {
  it('translates hyphened icon names to camelCase icon names', () => {
    expect(BrandIcons['first-order']).toBe(BrandIcons['firstOrder']);
    expect(SolidIcons['address-book']).toBe(SolidIcons['addressBook']);
    expect(RegularIcons['address-book']).toBe(RegularIcons['addressBook']);
  });

  it('does not translate camelCase icon names', () => {
    expect(BrandIcons['firstOrder']).toBe(BrandIcons['firstOrder']);
    expect(SolidIcons['addressBook']).toBe(SolidIcons['addressBook']);
    expect(RegularIcons['addressBook']).toBe(RegularIcons['addressBook']);
  });

  it('parse original classNames from fontawesome to camelCase icon names', () => {
    expect(parseIconFromClassName('fab fa-first-order')).toBe(BrandIcons['firstOrder'])
    expect(parseIconFromClassName('fas fa-address-book')).toBe(SolidIcons['addressBook'])
    expect(parseIconFromClassName('far fa-address-book')).toBe(RegularIcons['addressBook'])
  })
});
