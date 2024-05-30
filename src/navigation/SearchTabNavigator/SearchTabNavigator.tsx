import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommentsScreen from '../../screens/CommentsScreen';
import colors from '../../theme/colors';
import UserSearchNavigator from '../UserSearchNavigator/UserSearchNavigator';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{tabBarIndicatorStyle : {backgroundColor : colors.primary}}}>
                <Tab.Screen name="UserSearch" component={UserSearchNavigator} options={{ title: 'Users' }} />
                <Tab.Screen name="PostSearch" component={CommentsScreen} options={{ title: "Posts" }} />
            </Tab.Navigator>
    )
}

export default SearchTabNavigator