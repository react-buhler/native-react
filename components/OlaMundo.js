import React from 'react';
import styles from '../styles/styles';
import {StyleSheet, Text, View} from 'react-native';

class OlaMundo extends React.Component {

    render(){

        return(
            <View>
                <Text> Olá </Text>
                <Text>{this.props.name}</Text>
                <Text style={slocSyles.text1}>Embedded</Text>
                <Text style={styles.text2}>External File</Text>
                <Text style={styles.text3}>External Structure</Text>
                <Text>NaN</Text>
            </View>
        )
    }

}
const slocSyles = StyleSheet.create(
    {
        text1:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            borderWidth:2,
            borderColor:'orange',
            padding:10,
        },
    }
);

export default OlaMundo;