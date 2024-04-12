import { View, Text, FlatList, Image, useWindowDimensions, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles';
import { colors } from '../../theme/colors';
import DoublePressable from '../DoublePressable';
export interface ICarouselProps {
    images: Array<string>
    ondoublePress?: () => void
}

const Carousel = ({ images, ondoublePress }: ICarouselProps) => {

    const { width } = useWindowDimensions();
    const [activeItemIndex, setActiveImageIndex] = useState<number>(0)

    const imageViewabilityConfig = {
        itemVisiblePercentThreshold: 51
    }

    const onViewableImagesChanged = useRef(
        ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
            if (viewableItems.length > 0)
                setActiveImageIndex(viewableItems[0].index || 0)
        });

    return (
        <View>
            <FlatList
                data={images}
                // keyExtractor={(item,index) => index.toString()}
                renderItem={({ item }) =>
                    <DoublePressable onDoublePress={ondoublePress}>
                        <Image source={{ uri: item }}
                            style={{ width, aspectRatio: 1 }} />
                    </DoublePressable>}
                horizontal={true}
                pagingEnabled
                onViewableItemsChanged={onViewableImagesChanged.current}
                viewabilityConfig={imageViewabilityConfig}
            />
            <View>
                <View style={styles.dotContainer}>
                    {images.map((_, index: number) =>
                        <View key={index} style={{
                           ...styles.dot,
                            backgroundColor: activeItemIndex === index ? colors.primary : colors.white,
                        }}
                        />)}
                </View>
            </View>
        </View >
    )
}

export default Carousel