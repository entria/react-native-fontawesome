import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName
} from "react-native-fontawesome";

export default class App extends Component {
  render() {
    const parsedIcon = parseIconFromClassName('fab fa-first-order')

    return (
      <View style={styles.container}>
        <FontAwesome style={styles.icon} icon={SolidIcons.smile} />
        <Text>Solid Icon</Text>
        <FontAwesome style={styles.icon} icon={RegularIcons.smileWink} />
        <Text>Regular Icon</Text>
        <FontAwesome style={styles.icon} icon={BrandIcons.github} />
        <Text>Brand Icon</Text>
        <FontAwesome style={styles.icon} icon={parsedIcon} />
        <Text>Parsed Icon from class name:</Text>
        <Text>'fab fa-first-order'</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  },
  icon: {
    fontSize: 40,
    marginTop: 30
  }
});
