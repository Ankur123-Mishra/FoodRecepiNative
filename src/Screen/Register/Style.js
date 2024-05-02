import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../Style/colors";
export const styles=StyleSheet.create({ 
    container: {
        flex: 1,
        paddingHorizontal:moderateScale(20),
       
    },
    headingText:{
        fontSize:scale(24),
        textTransform:"uppercase",
        fontWeight:'bold',
        textAlign:'center'
    },
    imageStyle:{
        width:moderateScale(80),
        height:moderateScale(80)
    },
    textStyle:{
        fontSize:scale(20),
        fontWeight:'400',
        marginTop:moderateScale(16),

    },
    bottomView:{
        flexDirection:"row",
        alignItems:"center"
    
    }
});