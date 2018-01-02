import FontAwesomeIcons from '../FontAwesomeIcons';

describe('Testing FontAwesomeIcons', () => {
  it('translates hyphened icon names to camelCase icon names', () => {
    expect(FontAwesomeIcons['first-order']).toBe(FontAwesomeIcons['firstOrder']);
  });

  it('does not translate camelCase icon names', () => {
    expect(FontAwesomeIcons['firstOrder']).toBe(FontAwesomeIcons['firstOrder']);
  });
});
