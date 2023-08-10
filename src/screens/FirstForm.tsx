import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useForm} from '../context/FormContext';
import {FormButton, FormInput} from '../components';
import {isValidEmail, isValidPassword} from '../utils/formValidation';

const FirstForm = ({navigation}: any) => {
  const initialValus = {email: '', password: ''};
  const {dispatch} = useForm();
  const [userData, setUserData] = useState(initialValus);
  const [errorData, setErrorData] = useState(initialValus);

  const handleFormHandle = (isNext = false) => {
    const {email, password} = userData;
    if (isValidEmail(email)) {
      setErrorData(old => ({...old, email: isValidEmail(email)}));
    }
    if (isValidPassword(password)) {
      console.log('isValidPassword(password) ', isValidPassword(password));
      setErrorData(old => ({...old, password: isValidPassword(password)}));
    }
    if (!isValidEmail(email) && !isValidPassword(password)) {
      dispatch({type: 'UPDATE_FORM', payload: {email, password}});
      setErrorData(initialValus);
      isNext && navigation.navigate('SecondForm');
    }
  };

  const onChange = (value: any, isEmail = true) => {
    if (isEmail) {
      setUserData(old => ({...old, email: value}));
    } else {
      setUserData(old => ({...old, password: value}));
    }
    setErrorData(initialValus);
  };

  return (
    <View style={styles.container}>
      <FormInput
        placeholder="Email"
        value={userData?.email}
        onChangeText={val => onChange(val)}
        textContentType="emailAddress"
        keyboardType="email-address"
        errorMsg={errorData?.email}
      />
      <FormInput
        placeholder="Password"
        value={userData?.password}
        onChangeText={val => onChange(val, false)}
        errorMsg={errorData?.password}
        textContentType="password"
        secureTextEntry
      />
      <FormButton
        backDisabled
        savePress={() => handleFormHandle()}
        saveNextPress={() => handleFormHandle(true)}
      />
    </View>
  );
};

export default FirstForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
