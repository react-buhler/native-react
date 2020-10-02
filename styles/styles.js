import {StyleSheet} from 'react-native';
import {general} from './index';

import fonts from './fonts';

const styles = StyleSheet.create(
    {
        text2:{
            fontSize:fonts.tiny,
            fontWeight:'bold',
            color: 'green',
            borderWidth:2,
            borderColor:'red',
            padding:15,
        },
        ...general
    }
);

export default styles;