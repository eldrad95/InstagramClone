import React, { useState } from "react";
import { View, Image, Text, FlatList, ImageBackgroundComponent, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import IonIcons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../theme/colors";
import { styles } from './styles';
import { IPost } from "../../models/IPost";
import Comment from "../Comment";
import { IComment } from "../../models/IComment";
import DoublePressable from "../DoublePressable";
import Carousel from "../Caroussel";
import VideoPlayer from "../VideoPlayer";

export interface IFeePostProps {
  post: IPost,
  isActive : boolean

}

export const FeedPost = ({post, isActive}: IFeePostProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);

  const toggleDescriptionExpanded = () => {
    console.log("isDescriptionExpanded", isDescriptionExpanded)
    setIsDescriptionExpanded(v => !v);
  }
  const toggleLike = () => {
    console.log("isDescriptionExpanded", isDescriptionExpanded)
    setIsLiked(v => !v);
  }

  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      toggleLike()
    }
    lastTap = now;
  }

  const content = () => {
    if (post.image)
      return (<Image source={{ uri: post.image }} style={styles.Image} />)
    else if (post.images)
      return (<Carousel images={post.images} ondoublePress={handleDoublePress} />)
    else if (post.video)
      return (<VideoPlayer sourceUri={post.video} isActive={isActive}/>)
  } 

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.user.image }} style={styles.userAvatar} />
        <Text style={styles.userNameText}>{post.user.username}</Text>
        <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots} />
      </View>
      {/* content */}
      {content()}
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign name={isLiked ? 'heart' : 'hearto'}
            onPress={toggleLike}
            size={24}
            style={styles.icon}
            color={isLiked ? colors.accent : colors.black}
          />
          <IonIcons name="chatbubble-outline" size={24}
            style={styles.icon}
            color={colors.black} />
          <Feather name="send" size={24} style={styles.icon}
            color={colors.black} />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: 'auto' }}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Like by{' '}
          <Text style={styles.bold}>Lgrinevicius</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>
        </Text>
        {/*Post Descriprion*/}
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        {/* comments */}
        <Pressable onPress={toggleDescriptionExpanded}>
          <Text >View all {post.comments.length} comments</Text>
          {isDescriptionExpanded && <FlatList
            data={post.comments}
            renderItem={({ item }) => <Comment comment={item} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false} />
          }
        </Pressable>

        {/*Posted Date*/}
        <Text>19 December,2021</Text>
      </View>
    </View>
  )
}