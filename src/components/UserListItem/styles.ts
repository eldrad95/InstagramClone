import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        marginRight: 10
    },
    name: {
        fontWeight: fonts.weight.bold,
        color: colors.black
    },
    username: {
        color: colors.grey
    }
});

export default styles;