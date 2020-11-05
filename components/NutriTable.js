import React from 'react';
import { View } from 'react-native';

class NutriTable extends React.Component{

    state = {

        tableBOdy : 'White'
    }
    tableBody = () => {
        this.setState.tableBOdy = '<b>blue</b>'
    }

    render(){
        return (
            <View>
                <table>
                    <tr>
                        <th colSpan='5'>Test</th>
                    </tr><tr>
                        <td colSpan='5'>
                            {this.setState.tableBOdy('<b>blue</b>')}
                            {this.state.tableBOdy}
                        </td>
                    </tr>
                </table>
            </View>  
        );
    }
}

export default NutriTable;
