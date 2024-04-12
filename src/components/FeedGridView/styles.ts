import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";


export const styles= StyleSheet.create({
    bold : {
        fontWeight : fonts.weight.semi,
        fontSize : fonts.size.md,
        color : colors.black
    },
    grey : {
      color : "#AEAEAE",
    },
    buttonContainer : {
        flexDirection : "row",
        marginVertical : 10,
        justifyContent : "center",
    },
    imageContainer : {
        paddingHorizontal : 2
    },
    imageColumnStyle :{
        flex : 1,
    },
    image : {
        aspectRatio : 1,
        margin : 1
    },
    imagesIcon : {
        position : "absolute",
        right : 5,
        top : 5,
        aspectRatio : 1,
        marginHorizontal : 2,
        color : colors.white,
    }
})