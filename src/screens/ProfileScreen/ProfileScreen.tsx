import { View, Text, Image, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import userProfile from '../../assets/user.json';
import { styles } from './styles';
import CustomButton from '../../components/CustomButton';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import { useRoute, useNavigation } from '@react-navigation/native';
import { UserProfileNavigationProp, MyUserProfileNavigationProp, UserProfileRouteProp, MyProfileRouteProp } from '../../navigation/NavigationProp';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<UserProfileNavigationProp | MyUserProfileNavigationProp>()
  return (
    <FeedGridView data={userProfile.posts} listHeaderComponent={() => <ProfileHeader userProfile={userProfile} />} />
  )
}

export default ProfileScreen
