import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserSearchScreen from '../../screens/UserSearchScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createNativeStackNavigator<UserSearchNavigation>();


const UserSearchNavigator = () => {

  return (
    <Tab.Navigator>
                <Tab.Screen name="SearchResult" component={UserSearchScreen} />
                <Tab.Screen name="UserProfile" component={ProfileScreen}  />
    </Tab.Navigator>
  )
}

export default UserSearchNavigator