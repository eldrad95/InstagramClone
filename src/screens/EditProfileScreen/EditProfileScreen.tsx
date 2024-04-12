import React, { useState } from 'react'
import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import { styles } from './styles'
import userProfile from '../../assets/user.json';
import FormCustomInput from '../../components/FormCustomInput';
import { IEditableUser, IUser } from '../../models/IUser';
import {Asset, launchImageLibrary} from 'react-native-image-picker';


const EditProfileScreen = () => {
    const user: IUser = userProfile
    const [selectedPhoto, setSelectedPhoto] = useState<Asset | null>(null);

    const { control, handleSubmit, formState: { errors } } = useForm<IEditableUser>(
        {
            defaultValues: {
                name: user.name,
                username: user.username,
                website: user.website,
                bio: user.bio
            }
        }
    );
    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const onSubmit = (data: IEditableUser) => {
        console.log("submit")
        console.log(data)
    }

    const onChangePhoto = () => {
        launchImageLibrary({mediaType : "photo"}, ({didCancel,errorCode, errorMessage,assets}) => {
            if (!didCancel && !errorCode && assets &&  assets?.length > 0)  {
                setSelectedPhoto(assets[0] || null);
            }
        })
    }

    console.log("errors", errors)
    return (
        <View style={styles.root}>
            <Image source={{ uri: selectedPhoto?.uri ??  user.image }} style={styles.userImage} />
            <Text onPress={onChangePhoto} style={styles.buttonText}>Edit profile photo</Text>
            <FormCustomInput name="name" label="Name" control={control} rules={{ required: "Name is requiered" }} />
            <FormCustomInput name="username" label="Username" control={control} rules={
                {
                    required: "Username is requiered",
                    minLength: { value: 3, message: "Username should be more than 3 characters" },

                }} />
            <FormCustomInput name="website" label="Website" control={control} rules={{
                pattern: { value: URL_REGEX, message: "Invalid URL" }
            }} />
            <FormCustomInput name="bio" label="Bio" multiLine control={control} rules={{
                maxLength: {
                    value: 200,
                    message: "Bio Should be less than 200 character"
                }
            }} />
            <Text onPress={handleSubmit(onSubmit)} style={[styles.buttonText, styles.submitButton]}>Submit</Text>
        </View>
    )
}

export default EditProfileScreen


