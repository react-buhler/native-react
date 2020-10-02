import React from 'react';
import { Text, View } from 'react-native';
import "@ui5/webcomponents/dist/Table";

export default function(){
    const items = [
        {name:"calcio", quantity:10, um:"gr", daily:10}, 
        {name:"açucar", quantity:20, um:"gr", daily:20},
        {name:"lactose", quantity:30, um:"gr", daily:30}
    ];

    const nutriTab = items.map((item) => {
        <tr>;
        <td>Linha 1</td>;
        <td>{item.name}</td>;
        <td>{item.quantity}</td>;
        <td>{item.um}</td>;
        <td>{item.daily}</td>;
        </tr>
    });

    const nutriTab2 = (item) => {
        '<h1>buhler</h1>';
        <tr>;
        <td>Linha 1</td>;
        <td>name</td>;
        <td>quantity</td>;
        <td>um</td>;
        <td>daily</td>;
        </tr>
    };

    return (
        <View>
            <table><tr><th>Test2</th> {nutriTab2} </tr></table>
        </View>  
    );
}   