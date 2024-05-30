import React, { useRef, useState } from 'react'
import { posts } from '../../../DataExamples';
import { ViewToken, FlatList } from 'react-native';
import FeedPost from '../../components/FeedPost';

export const HomeScreen = () => {
  const [currentPostId, setCurrentPostId] = useState<string | null>(null)
  const postViewabilityConfig = {
    itemVisiblePercentThreshold: 51
  }

  const onViewableImagesChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0)
      setCurrentPostId(viewableItems[0].item.id)
    });

  return (
    <FlatList
      data={posts}
      viewabilityConfig={postViewabilityConfig}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={onViewableImagesChanged.current}
      renderItem={({ item }) =>
        <FeedPost post={item} isActive={currentPostId === item.id} />
      }
    />
  );
}

export default HomeScreen