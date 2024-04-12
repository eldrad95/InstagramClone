import { View, Text, Pressable } from 'react-native'
import React, { Children, ReactNode } from 'react'

interface IDoublePressableProps {
    onDoublePress?: () => void;
    children?: ReactNode
}

const DoublePressable = (props: IDoublePressableProps) => {
    const { onDoublePress = () => { },
        children } = props;
    let lastTap = 0;
    const handleDoublePress = () => {
        const now = Date.now();
        if (now - lastTap < 300) {
            onDoublePress()
        }
        lastTap = now;
    }

    return (
        <Pressable onPress={handleDoublePress}>
            {children}
        </Pressable>
    )
}

export default DoublePressable