import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Singup from './components/signUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <ForgotPassword />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});




export default App;

