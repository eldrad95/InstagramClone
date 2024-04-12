import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";
import { ro } from "date-fns/locale";

export const styles = StyleSheet.create({
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
        color : colors.white,
    }
});

