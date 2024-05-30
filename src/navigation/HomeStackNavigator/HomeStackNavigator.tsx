import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import logo from '../../assets/images/logo.png'
import { Image } from 'react-native';


const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HeaderTitle = () => {
    return (
       <Image source={logo} resizeMode="contain" style={{width : 150, height : 40, alignSelf : 'center'}} />
    )
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={HomeScreen} options={{headerTitleAlign : 'center',header : HeaderTitle}} />
        <Stack.Screen name="UserProfile" component={ProfileScreen} options={{title: "Profile"}} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator