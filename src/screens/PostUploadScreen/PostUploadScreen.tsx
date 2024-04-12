import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera';
import styles from './styles';

interface IPostUploadScreen {

}

const PostUploadScreen = ({ }: IPostUploadScreen) => {
  const [hasPermission, setHasPermissions] = useState<boolean | null>(null);


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



  return (
    <View style={styles.page}>
      <Camera style={styles.camera} />
    </View>
  )
}

export default PostUploadScreen