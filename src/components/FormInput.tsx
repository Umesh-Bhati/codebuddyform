import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';

interface IFormInput extends TextInputProps {
  errorMsg?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
}

const FormInput: FC<IFormInput> = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <TextInput
        {...props}
        style={[styles.input, props.inputStyle]}
        placeholderTextColor={'grey'}
      />
      {!!props.errorMsg && <Text style={styles.error}>{props.errorMsg}</Text>}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    aspectRatio: 7,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 15,
    color: 'black',
  },
  error: {
    color: 'red',
  },
});
