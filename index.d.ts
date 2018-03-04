import React from 'react';
import { TextProperties } from 'react-native';

declare module 'react-native-fontawesome' {
  export const Icons: { [key: string]: string };
  const Icon: React.ComponentClass<TextProperties>;
  export default Icon;
}
