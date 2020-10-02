import {colors, fonts, metrics} from './index';
 
const general = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    section: {
        margin: metrics.doubleBaseMargin,
    },
    sectionTitle: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: fonts.regular,
        alignSelf: 'center',
        marginBottom: metrics.doubleBaseMargin,
    },
    text3:{
        fontSize:fonts.input,
        color:'blue',
        fontWeight:'bold',
        borderWidth:2,
        borderColor:'black',
        padding:10,
    },
};
   
export default general;