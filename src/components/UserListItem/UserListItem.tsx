import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { IUser } from '../../models/IUser'
import { useNavigation } from '@react-navigation/native'
import { UserSearchNavigationProp } from '../../navigation/NavigationProp'


interface IUserListItem {
    user: IUser
}


const UserListItem = ({ user }: IUserListItem) => {

    const navigation = useNavigation<UserSearchNavigationProp>()
    const goToUserscreen = () => {
        navigation.navigate("UserProfile", { userId: user.id })
    }

    return (
        <Pressable onPress={goToUserscreen} style={styles.root}>
            <Image source={{ uri: user.image }} style={styles.image} />
            <View>
                <Text style={styles.name}>{user.name} </Text>
                <Text style={styles.username}>{user.username}</Text>
            </View>
        </Pressable>
    )
}

export default UserListItem