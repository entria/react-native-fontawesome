declare module "react-native-fontawesome" {
  import React from "react";
  import { TextProperties } from "react-native";
  export { default as Icons } from "react-native-fontawesome/FontAwesomeIcons";
  const Icon: React.ComponentClass<TextProperties>;
  export default Icon;
}
