import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NutriTable from './components/NutriTable';

export default function App() {
  return (
    <View style={styles.container}>
      <NutriTable/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80ced6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
