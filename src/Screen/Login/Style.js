import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../Style/colors";
export const styles=StyleSheet.create({ 
    container: {
        flex: 1, 
        justifyContent:"space-between"
    },
    imageStyle:{
        height: moderateScale(200),
        widgt:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    LoginTextStyle:{
        fontSize:scale(32),
        color:"white",
        fontWeight:"bold",
    },
    mainStyle:{
        paddingHorizontal:moderateScale(24),
        paddingTop:moderateScale(44),
    },
    forgotView:{
        alignSelf:"flex-end",
        marginVertical:moderateVerticalScale(24)

    },
    forgetText:{
        fontSize:scale(16),
        color:colors.teamColor,
        fontWeight:"500",
    },
    bottomView:{
     flexDirection:"row",
     alignItems:"center",
    marginTop:moderateVerticalScale(72),
    justifyContent:"center",
    marginBottom:moderateVerticalScale(44)
    }
});