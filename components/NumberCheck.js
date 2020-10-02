import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => 
    <View>
        {
            props.number % 2 == 0 ? <Text style={styles.text}>Par</Text> : <Text style={styles.text}>Impar</Text>
        }
    </View>

    const styles = StyleSheet.create({

        container: {

            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justofyContent: 'center',

        },
        text:{
            fontSize: 18,
            fontWeight: 'bold'
        }
    });