import { View, Text, Image, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import userProfile from '../../assets/user.json';
import { styles } from './styles';
import CustomButton from '../../components/CustomButton';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import FeedGridView from '../../components/FeedGridView';


const ProfileScreen = () => {
  return (
    <FeedGridView data={userProfile.posts} listHeaderComponent={() => <ProfileHeader userProfile={userProfile} />} />
  )
}

export default ProfileScreen