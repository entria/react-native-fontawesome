import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Icons from './FontAwesomeIcons';

class Icon extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { style, color, children } = this.props;

    return (
      <Text
        style={[styles.icon, { color }, style]}
        ref={component => this._root = component}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontFamily:       'FontAwesome',
    backgroundColor:  'transparent',
  },
});

export { Icons };
export default Icon;
