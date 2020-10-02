import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundo from './components/OlaMundo';
import FixedDimentions from './components/FixedDimentions';
import NumberCheck from './components/NumberCheck';
import OddsOrEvens from './components/OddsOrEvens';

//import OlaMundo from './components/clOlaMundo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <OlaMundo name='B&uuml;hler' /> */}
      {/* <FixedDimentions/> */}
      {/* <NumberCheck number='3' /> */}
      <OddsOrEvens number='3'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#80ced6',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});