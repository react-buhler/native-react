import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props =>
    <View style={styles.container}>

        {check(props.number)}
    </View>

function check(number){
    return number % 2 == 0 ? <Text style={styles.text}>Par</Text> : <Text style={styles.text}>Impar</Text>
}

const styles=StyleSheet.create({

    container: {
        flex:1,
        backgroundColoer:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
    }
});