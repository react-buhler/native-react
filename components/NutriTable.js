import React from 'react';
import { Text, View } from 'react-native';

export default function(){

    return(
        <View>
            <Text> Title </Text>
            <table>
                <tr>
                    <th colspan = "3">
                        <Text> Header </Text>
                    </th>
                </tr><tr>
                    <td>
                        <Text>Column 1</Text>
                    </td><td>
                        <Text>Column 2</Text>
                    </td><td>
                        <Text>Column 3</Text>
                    </td>
                </tr>
            </table>

        </View>
    )
}