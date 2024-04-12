import { View, Text, Pressable } from 'react-native'
import React from 'react';
import { styles } from "./styles"

interface ICustomButton {
    text?: string;
    onPress?: () => void
}

export const CustomButton = ({text, onPress} : ICustomButton) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.bold}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton