import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";


export const styles = StyleSheet.create({
    bold : {
        fontWeight : fonts.weight.semi,
        fontSize : fonts.size.md,
        color : colors.black
    },
    button : {
        // width : 'auto',
        borderWidth : 1,
        borderColor : colors.lightergrey,
        borderRadius : 5,
        paddingVertical : 5,
        marginHorizontal : 5,
        flex : 1,
        alignItems : "center"
    }
})