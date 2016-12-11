import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Icons = {

  //Credit Cards
  card:           '\uf09d',
  visa:           '\uf1f0',
  mastercard:     '\uf1f1',
  amex:           '\uf1f3',

  times:          '\uf00d',
  share:          '\uf064',
  chevronLeft:    '\uf053',
  chevronRight:   '\uf054',
  chevronDown:    '\uf078',
  check:          '\uf00c',
  lock:           '\uf023',
  heart:          '\uf004',

  arrowUp:        '\uf062',

  tags:           '\uf02c',
  newsPaperO:     '\uf1ea',
  user:           '\uf007',
  users:          '\uf0c0',
  cog:            '\uf013',
  circle:         '\uf111',
  shoppingBasket: '\uf291',
  bars:           '\uf0c9',
  search:         '\uf002',

  shoppingBag:    '\uf290',
  plusCircle:     '\uf055',
  minusCircle:    '\uf056',
  camera:         '\uf030',

  lineChart:      '\uf201',
  bolt:           '\uf0e7',
  usd:            '\uf155',
  userPlus:       '\uf234',
  paperPlane:     '\uf1d8',

  desktop:        '\uf108',
  phone:          '\uf095',
  mobile:         '\uf10b',
};

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

export default Icon;
