import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import fonts from '../../theme/fonts'
import {styles as feedPostStyle} from '../FeedPost/styles'

export const styles = StyleSheet.create({
    bold : feedPostStyle.bold,
    icon : feedPostStyle.icon,
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      commentText: {
        color : colors.black,
        lineHeight : 18,
      },
      avatar : {
        width : 50,
        aspectRatio : 1,
        borderRadius : 25,
        marginHorizontal : 5
        
      },
      commentFooter : {
        flexDirection : 'row',
      },
      middleColumn : {
        flex : 1,

      },
      footerText : {
        marginRight : 5,
        marginBottom : 10,
      }
})