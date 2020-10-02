import React from 'react';
import {View, Text} from 'react-native';

class FixedDimentions extends React.Component{
    
    render(){
        return(

            <View style={{ 
                width: '100%', 
                height: '100%', 
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'stretch',
                flexWrap: 'wrap'
                }}>

                {/* <View style={{ width:50, height:100, backgroundColor:'powderblue'}}><Text>Linha 1</Text></View>
                <View style={{ width:50, height:100, backgroundColor:'skyblue'}}><Text>Linha 2</Text></View>
                <View style={{ width:50, height:100, backgroundColor:'steelblue'}}><Text>Linha 3</Text></View> */}

                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor: 'powderblue'}} ><Text>Linha 11</Text></View>
                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor:'skyblue'}}><Text>Linha 12</Text></View>
                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor:'steelblue'}}><Text>Linha 13</Text></View>

                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor: 'powderblue'}} ><Text>Linha 11</Text></View>
                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor:'skyblue'}}><Text>Linha 12</Text></View>
                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor:'steelblue'}}><Text>Linha 13</Text></View>

                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor: 'powderblue'}} ><Text>Linha 11</Text></View>
                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor:'skyblue'}}><Text>Linha 12</Text></View>
                <View style={{flexShrink: 1, flexBasis: 300, backgroundColor:'steelblue'}}><Text>Linha 13</Text></View>

            </View>
        );
    }
};

export default FixedDimentions;