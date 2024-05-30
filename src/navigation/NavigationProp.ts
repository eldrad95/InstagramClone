import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'


export type UserProfileRouteProp = RouteProp<HomeStackNavigatorParamList, 'UserProfile'>

export type MyProfileRouteProp = RouteProp<BottomTabNavigatorParamList, 'MyProfile'>

export type UserProfileNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList,'UserProfile'>

export type UserSearchNavigationProp = NativeStackNavigationProp<UserSearchNavigation,'UserProfile'>

export  type MyUserProfileNavigationProp = BottomTabNavigationProp<BottomTabNavigatorParamList, 'MyProfile'>

export type FeedNavigationProp =  NativeStackNavigationProp<HomeStackNavigatorParamList,'Feed'>

export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackNavigator, 'Profile'>