import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 1
    },
    iconContainer: {

    },
    muteButton: {
        backgroundColor: colors.black,
        padding: 5,
        position: 'absolute',
        borderRadius: 25,
        bottom: 10,
        right: 10
    },
    durationText: {
        position: "absolute",
        right: 10,
        top: 10,
        color: colors.white
    }
})