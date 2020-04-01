import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

import { AppProps as Props } from "./App.types";

import appJson from "../../../app.json";

const App: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>React native boilerplate</Text>
      <Text>v{appJson.expo.version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default registerRootComponent(App);
