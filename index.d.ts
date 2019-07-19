declare module "react-native-fontawesome" {
  import React from "react";
  import { TextProperties } from "react-native";
  export { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from "react-native-fontawesome/FontAwesomeIcons";
  const Icon: React.ComponentClass<TextProperties>;
  export default Icon;
}
