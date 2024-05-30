import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import colors from '../../theme/colors';
import 'react-native-url-polyfill/auto';
import { CameraPictureOptions, CameraRecordingOptions, CameraType, FlashMode } from 'expo-camera/build/Camera.types';

interface IPostUploadScreen {

}

const PostUploadScreen = ({ }: IPostUploadScreen) => {
  const [hasPermission, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back)

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' && microphonePermission.status === 'granted'
      )
    }
    getPermission();
  }, [])

  if (hasPermission === null) {
    return <Text>Loading...</Text>
  }
  else if (hasPermission === false) {
    return <Text>No access to camero</Text>
  }

  const flipCamera = () => {
    setCameraType(curentCameraType =>
      curentCameraType === CameraType.back ?
        CameraType.front : CameraType.back)

  }

  return (
    <View style={styles.page}>
      <Camera style={styles.camera} type={cameraType} ratio="4:3"/>
      <View style={[styles.buttonsContainer, { top: 25 }]}>
        <MaterialIcons name="close" size={30} color={colors.white} /> 
        <MaterialIcons name="flash-off" size={30} color={colors.white} />
        <MaterialIcons name="settings" size={30} color={colors.white} /> 
      </View>
      <View style={[styles.buttonsContainer, { bottom: 25 }]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        <View style={styles.circle} />
        <MaterialIcons onPress={flipCamera} name="flip-camera-android" size={30} color={colors.white} />
      </View>
    </View>
  )
}

export default PostUploadScreen