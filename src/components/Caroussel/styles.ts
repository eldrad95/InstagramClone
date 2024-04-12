import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    image : {
        aspectRatio : 1
    },
    dotContainer : {
        flexDirection: 'row',
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        width: '100%'
    },
    dot : {
        width: 10,
        aspectRatio: 1,
        borderRadius: 5,
        margin: 10,
        marginHorizontal: 5

    }

})

export default styles