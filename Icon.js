import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from './FontAwesomeIcons';

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { style, color, icon, pro, ...props } = this.props;
    const [code, type] = (icon || '').split('|')

    const IconType = type === 'brand' ? BrandIcons :
                     type === 'regular' ? RegularIcons
                     : SolidIcons

    const font = { fontFamily: IconType._fontFamily || '' }

    if (pro) {
      font.fontFamily = font.fontFamily.replace('Free', 'Pro')
    }

    return (
      <Text
        {...props}
        style={[styles.icon, { color }, style, font]}
        ref={component => this._root = component}
      >
        {code}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent'
  },
});

export { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName };
export default Icon;
