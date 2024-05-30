// import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type RootNavigatorParamList = {
    Home : undefined,
    Comments : {postId : string}
}

type BottomTabNavigatorParamList = {
    HomeStack  : undefined,
    Search : undefined,
    Upload : undefined,
    Notifications : undefined,
    MyProfile : undefined
}

type SearchTabNavigatorParamList = {
    UserSearch :  undefined,
    PostSearch : undefined
}

type UserSearchNavigation = {
    SearchResult : undefined,
    UserProfile : {userId : string | undefined}
}

type HomeStackNavigatorParamList = {
    Feed : undefined,
    UserProfile : {userId : string | undefined}
};

type ProfileStackNavigator = {
    Profile : undefined,
    'Edit Profile' : undefined
}

// type FeedNavigationParamList = {
//     UserProfile : {userId : string | undefined}
//     Comments :{postId : string | undefined}
//   }

  
// type ProfileHeaderNavigationParamList = {
//     'Edit Profile' : undefined,
//     'Go Back' : undefined
// }