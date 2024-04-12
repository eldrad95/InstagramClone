import {Image, View, Text } from 'react-native'
import React from 'react'
import {styles} from './styles';
import CustomButton from '../CustomButton';
import { IPost } from '../../models/IPost';

interface IProfileHeader {
    userProfile : {
        image? :string;
        name? : string;
        bio? : string;
        posts? : Array<IPost>
    };
}

const ProfileHeader = ({userProfile} : IProfileHeader) => {
    return (
        <View>

            <View style={styles.header}>
                <Image style={styles.userImage} source={{ uri: userProfile.image }} ></Image>
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfo}><Text style={styles.bold}>98</Text><Text style={styles.grey}>Posts</Text></View>
                    <View style={styles.userInfo}><Text style={styles.bold}>2,919</Text><Text style={styles.grey}>Followers</Text></View>
                    <View style={styles.userInfo}><Text style={styles.bold}>245</Text><Text style={styles.grey}>Following</Text></View>
                </View>
            </View>
            <Text style={styles.bold}>{userProfile.name}</Text>
            <Text style={styles.grey}>{userProfile.bio}</Text>
            <View style={styles.buttonContainer}>
                <CustomButton text="Edit Profile" />
                <CustomButton text="Another Button" />
            </View>
        </View>
    )
}

export default ProfileHeader