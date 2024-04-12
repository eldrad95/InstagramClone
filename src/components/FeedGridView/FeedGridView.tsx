import { Image,View, Text, FlatList } from 'react-native'
import React from 'react'
import { IPost } from '../../models/IPost';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles'


interface IFeedGridView {
    listHeaderComponent? : React.ComponentType<any> | React.ReactElement
    data? : Array<IPost>;
    displayHeader? : boolean
}


const FeedGridView = ({data: posts, listHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList style={styles.imageContainer}
      ListHeaderComponent={listHeaderComponent}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={styles.imageColumnStyle}
        numColumns={3}
        renderItem={({ item }) =>
          <View style={[styles.image, { width: `33%` }]} >
            <Image style={{flex : 1}} source={{ uri: item.image ?? item.images?.[0] }} />
            { item.images && <IonIcons name="images" style={styles.imagesIcon} size={16} />}
          </View>
        }
      />
  )
}

export default FeedGridView