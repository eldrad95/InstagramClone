import { View, Text, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import Video from 'react-native-video';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { intervalToDuration } from 'date-fns';

interface IVideoProps {
    sourceUri: string
    isActive: boolean
}

const VideoPlayer = ({ sourceUri, isActive }: IVideoProps) => {
    const [muted, setMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState<string | null>(null)
    const zeroPad = (num: number | undefined) => String(num).padStart(2, '0')
    const onVideoProgess = ({ currentTime, seekableDuration }: { currentTime: number, seekableDuration: number }) => {
        const currentTimeFormated = { minutes: Math.trunc(Math.floor(currentTime / 60)), seconds: Math.trunc(currentTime % 60) }
        const totalDurationFormated = { minutes: Math.trunc(Math.floor(seekableDuration / 60)), seconds: Math.trunc(seekableDuration % 60) }
        setCurrentTime(`${zeroPad(currentTimeFormated.minutes)}:${zeroPad(currentTimeFormated.seconds)}/${zeroPad(totalDurationFormated.minutes)}:${zeroPad(totalDurationFormated.seconds)}`)
    }


    return (
        <View>
            <Video
                style={styles.video}
                source={{ uri: sourceUri }}
                resizeMode="cover"
                repeat muted={muted}
                paused={!isActive}
                onProgress={onVideoProgess}
            />
            <Text style={styles.durationText}>{currentTime ?? ""}</Text>
            <Pressable style={styles.muteButton} onPress={() => setMuted(v => !v)}>
                <Ionicons
                    name={muted ? 'volume-mute' : 'volume-medium'}
                    size={14}
                    color={colors.white} />
            </Pressable>
        </View>
    )
}

export default VideoPlayer