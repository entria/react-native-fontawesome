import React from 'react';

declare module 'react-native-fontawesome' {
  export const Icons: { [key: string]: string };
  const Icon: React.ComponentClass<any>;
  export default Icon;
}
