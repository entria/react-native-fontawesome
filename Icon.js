import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Icons from './FontAwesomeIcons';

const Icon = ({ children, style }) => (
  <Text style={[styles.icon, style]}>
    {Icons[children]}
  </Text>
);

const styles = StyleSheet.create({
  icon: {
    fontFamily:       'FontAwesome',
    backgroundColor:  'transparent',
  },
});

export { Icons };
export default Icon;
