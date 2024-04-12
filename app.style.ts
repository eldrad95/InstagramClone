import { StyleSheet } from "react-native";
import fonts from './src/theme/fonts';
import { colors } from "./src/theme/colors";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userNameText: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  post: {

  },
  Image: {
    width: "100%",
    aspectRatio: 1
  },
  threeDots: {
    marginLeft: 'auto'
  },
  footer: {
    padding: 10
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  icon: {
    marginHorizontal: 5
  },
  text: {
    color: colors.black,
    lineHeight : 18
  },
  bold: {
    fontWeight: fonts.weight.bold
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color : colors.black,
    flex : 1

  }
}); 