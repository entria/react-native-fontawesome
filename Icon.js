import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import Icons from './FontAwesomeIcons';
const IconTypes = {
  FAR: Platform.OS === 'ios' ? 'FontAwesome5FreeRegular' : 'fa_regular_400',
  FAS: Platform.OS === 'ios' ? 'FontAwesome5FreeSolid' : 'fa_solid_900',
  FAB: Platform.OS === 'ios' ? 'FontAwesome5BrandsRegular' : 'fa_brands_400'
}

const parseIconFromClassName = (iconName) => {
  if (!iconName) return;

  iconName = iconName.replace(/(fa\-)/gi, '')
  iconName = iconName.replace(/(fa|fas|far)( )/gi, '')

  let nameParts = iconName.match(/(\-)(\w{1,1})/gi) || []

  nameParts.forEach(m => {
    iconName = iconName.replace(m, m.toUpperCase())
  })

  iconName = iconName.replace(/\-/gi, '') 
  iconName = (iconName || '').trim()

  return Icons[iconName]
}

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { style, color, children, type, ...props } = this.props;
    const font = { fontFamily: type || IconTypes.FAS }

    return (
      <Text
        {...props}
        style={[styles.icon, { color }, style, font]}
        ref={component => this._root = component}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  },
});

export { Icons, IconTypes, parseIconFromClassName };
export default Icon;
