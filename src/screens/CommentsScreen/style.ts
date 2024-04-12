import { StyleSheet } from "react-native";
import fonts from '../../theme/fonts'
import colors from "../../theme/colors";
export const styles = StyleSheet.create({
    commentConainer : {
        padding : 10
    },
    image : {
        width : 50,
        aspectRatio : 1,
        borderRadius : 25,
        margin : 5,
    },
    InputContainer : {
        width : "100%",
        flexDirection : "row",
        flex :1,
        alignItems : "center",
        borderColor : colors.lightgrey,
        borderWidth : 1,
        borderRadius : 30,
        height : 'auto',
        margin : 10
    },
    newPostContainer : {
        backgroundColor : colors.white,
        position : "absolute",
        bottom : 0,
        flexWrap : "wrap",
        flexDirection : "row",
        alignItems : "center",
        borderTopWidth : 1,
        borderColor : '#efefef'
    },
    input: {
        flex : 1,
        marginHorizontal : 10,
        fontWeight : fonts.weight.thin,
        // height : 
    },
    buttonText : {
        fontWeight : fonts.weight.full,
        color : colors.primary
    },
    button : {
        marginRight : 20,
        marginLeft : 'auto',
    },

})
