import React from "react";
import { StyleSheet, Text, View } from "react-native";

import appJson from "./app.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React native boilerplate</Text>
      <Text>v{appJson.expo.version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
