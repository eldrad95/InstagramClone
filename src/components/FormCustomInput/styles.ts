import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";


export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf : "stretch",
    }, 
    inputLabel : {
        paddingLeft : 5, 
        width : 85,
    },
    inputTextContainer : {
        flex : 1,
        paddingRight : 10,
        
    },
    inputText : {
        borderColor : colors.lightgrey,
        borderBottomWidth : 1,
        color : colors.black
    },
    error : {
        color : colors.red,
        fontWeight : fonts.weight.semi
    }
})