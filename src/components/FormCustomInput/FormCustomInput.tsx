import { View, Text, TextInput, TextInputComponent } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Control, Controller, Field, RegisterOptions } from 'react-hook-form'
import { IEditableUser, IEditableUserFields } from '../../models/IUser';
import colors from '../../theme/colors';



interface IFormCustomInput {
  label: string;
  name: IEditableUserFields;
  multiLine?: boolean;
  control: Control<IEditableUser>;
  rules?: Omit<RegisterOptions<IEditableUser, IEditableUserFields>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
}


const FormCustomInput = ({ label, name, multiLine = false, control, rules }: IFormCustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
      console.log("FieldError", error);
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{label}</Text>
          <View style={styles.inputTextContainer} >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={[styles.inputText,{borderColor : error ? colors.red : colors.lightgrey }]} numberOfLines={multiLine ? 3 : 1} placeholder='type text' multiline={multiLine} />
              {error && <Text style={styles.error}>{error?.message || "Error"}</Text>}
          </View>
        </View>
      )
    }} />

)

export default FormCustomInput