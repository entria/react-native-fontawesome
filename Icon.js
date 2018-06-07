import React, { Component } from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

import Icons from './FontAwesomeIcons';

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { style, color, children, ...props } = this.props;

    return (
      <Text
        {...props}
        style={[styles.icon, { color }, style]}
        ref={component => this._root = component}
      >
        {children}
      </Text>
    );
  }
}

const fontFamily = Platform.OS === 'ios' ? 'FontAwesome' : 'fontawesome-webfont';
const styles = StyleSheet.create({
  icon: {
    fontFamily:       fontFamily,
    backgroundColor:  'transparent',
  },
});

export { Icons };
export default Icon;
