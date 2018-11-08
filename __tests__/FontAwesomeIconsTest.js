import FontAwesomeIcons from '../FontAwesomeIcons';
import { parseIconFromClassName } from '../Icon'

jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: jest.fn(),
    },
  };
});

describe('Testing FontAwesomeIcons', () => {
  it('translates hyphened icon names to camelCase icon names', () => {
    expect(FontAwesomeIcons['first-order']).toBe(FontAwesomeIcons['firstOrder']);
  });

  it('does not translate camelCase icon names', () => {
    expect(FontAwesomeIcons['firstOrder']).toBe(FontAwesomeIcons['firstOrder']);
  });

  it('parse original classNames from fontawesome to camelCase icon names', () => {
    expect(parseIconFromClassName('fa fa-first-order')).toBe(FontAwesomeIcons['firstOrder'])
  })
});
