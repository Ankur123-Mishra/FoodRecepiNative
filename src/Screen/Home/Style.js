import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters';
import colors from "../../Style/colors";
export const styles=StyleSheet.create({ 
    container: {
        flex: 1,
      },
      handelText:{
          textTransform:"uppercase",
          fontSize:scale(16),
          fontWeight:"bold",
          color:colors.teamColor,
      },
      headerStyle: {
        backgroundColor: colors.white,
        paddingVertical: moderateVerticalScale(24),
        shadowColor: 'black',
        shadowOffset: {width: 0, heigth: 6},
        shadowOpacity: 0.2,
        elevation: 8,
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:moderateScale(16),
    
      },
      flatStyle:{
        backgroundColor: colors.white,
        shadowColor: 'black',
        shadowOffset: {width: 0, heigth: 6},
        shadowOpacity: 0.2,
        elevation: 8,
        padding:moderateScale(16),
        borderRadius:moderateScale(4),
        margin:2

      },
      flexView:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
      }
});