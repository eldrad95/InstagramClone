import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";


export const styles = StyleSheet.create({
    header: {
        marginTop : 50,
        flexDirection : 'row'
    },
    userImage : {
        aspectRatio : 1,
        width : 100,
        borderRadius : 50,
        marginHorizontal : 20
    },
    userInfoContainer : {
        flexDirection : "row"
    },
    userInfo : {
        marginVertical : "auto",
        alignItems : "center",
        marginHorizontal : 20,
        alignSelf : "center",
    },
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
});