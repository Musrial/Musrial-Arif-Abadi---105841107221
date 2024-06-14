import { StyleSheet, View } from "react-native";
import React from "react";
import { AppContent } from "./components/Button";

const App = () => {
  return (
    <view style= {styles.container}>
      <AppContent/>
    </view>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;