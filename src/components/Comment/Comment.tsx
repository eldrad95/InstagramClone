import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../theme/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './styles'
import { IComment } from '../../models/IComment'

export interface ICommentProps {
  key?: string
  comment: IComment
  large?: boolean
}

export const Comment = ({ key, comment, large = false }: ICommentProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)





  return (
    <View style={styles.comment} key={key}>
      {large && (<Image source={{ uri: comment.user.image }} style={styles.avatar} />)}
      <View style={styles.middleColumn}>
        <Text style={{...styles.commentText, marginBottom : !large ? 5 : null }}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
       { large && ( <View style={styles.commentFooter}>
          <Text style={styles.footerText}>2d</Text>
          <Text style={styles.footerText}>5 likes</Text>
          <Text style={styles.footerText}>reply</Text>
        </View>)}
      </View>
      <Pressable
        onPress={() => setIsLiked(!isLiked)} hitSlop={5}>
        <AntDesign name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  )
}

export default Comment