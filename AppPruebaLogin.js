// <ROOT>/App.js

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import Tmp_welcome from './Componentes/Bienvenidos/Tmp_welcome';

const AppPruebaLogin = () => {
  return (
    <KeyboardAvoidingView
     // behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      style={{flex: 1}}
      enabled>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <Tmp_welcome />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6"
  },
});

export default AppPruebaLogin;