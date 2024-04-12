import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

export const styles = StyleSheet.create({
    root: {
        marginTop: 30,
        alignItems: "center",
        width : '100%'
    },
    userImage: {
        aspectRatio: 1,
        width: "30%",
        borderRadius: 80,
        marginHorizontal: 20,
        marginBottom: 10
    },
    buttonText: {
        fontWeight: fonts.weight.full,
        color: colors.primary
    },
   
    submitButton : {
        marginTop : 10
    }
});