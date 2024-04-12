import { View, Text, FlatList, Image, TextInput, Pressable } from 'react-native'
import React from 'react'
import comments from '../../assets/comments.json'
import Comment from '../../components/Comment'
import { styles } from './style'
import colors from '../../theme/colors'

const CommentsScreen = () => {
    const userImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg';

    return (
        <View style={{ height: '100%' }}>
            <FlatList
                style={{ ...styles.commentConainer, flex: 1 }}
                data={comments}
                renderItem={({ item }) => <Comment comment={item} large />}
            />
            <View style={styles.newPostContainer}>
                <Image source={{ uri: userImage }} style={styles.image} />
                <View style={styles.InputContainer}>
                    <TextInput multiline placeholder='Add your comment' placeholderTextColor={colors.lightgrey} style={styles.input} />
                    <Pressable style={styles.button} hitSlop={30}>
                        <Text style={styles.buttonText}>POST</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default CommentsScreen