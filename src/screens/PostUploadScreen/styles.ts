import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { ro } from "date-fns/locale";

const styles = StyleSheet.create({
    page : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : colors.black
    },
    camera :{
        width : '100%',
        aspectRatio : 3/4,
    },
    buttonsContainer : {
        flexDirection : "row",
        justifyContent : 'space-around',
        width : '100%',
        alignItems : "center",
        position : "absolute",
        
    },
    circle : {
        width : 75,
        aspectRatio  :1,
        borderRadius : 75,
        backgroundColor : colors.white
    }
})

export default styles;
