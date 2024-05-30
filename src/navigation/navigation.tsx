import React from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, Text, View } from 'react-native'
import BottomTabNavigator from './BottomTabNagivator'
import CommentsScreen from '../screens/CommentsScreen'

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
    prefixes: ['notjustphotos://', 'https://notjustphotos.com'],
    config: {
        initialRouteName: 'Home',
        screens: {
            Comments: 'comments',
            Home: {
                screens: {
                    HomeStack: {
                        UserProfile: 'user/:userId'
                    }
                }
            }
        },
    }
}


const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Comments" component={CommentsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation