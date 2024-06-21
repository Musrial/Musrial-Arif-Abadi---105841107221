import { StyleSheet, View } from "react-native";
import React from "react";
import { AppContent, ButtonCustom } from "./components/Button";

const App = () => {
  return (
    <View style={styles.container}>
      <ButtonCustom/>
      <AppContent/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
